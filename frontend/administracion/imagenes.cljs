(ns administracion.imagenes
  (:require [reagent.core :as r]
            [reagent.dom :as dom]
            [cljs-http.client :as https]
            [app.state :as state]
            [app.db :as db]
            [administracion.core :as core]))

(defonce imagen (r/atom nil)) ;; Átomo para almacenar la imagen seleccionada
(defonce descripcion (r/atom ""))
(defonce input-key (r/atom (random-uuid)))

;; Función para manejar el cambio de archivo
(defn comprobacion_archivo [event]
  (let [file (first (.-files (.-target event)))
        nombre (.-name file)
        tamano (.-size file)
        extensiones-validas #".*\.(jpg|jpeg|png|gif|svg)$"
        nombre-valido? (re-matches extensiones-validas (.toLowerCase nombre))]
    (cond
      (not file)
      nil ; no se seleccionó ningún archivo
      (not nombre-valido?)
      (js/alert "Formato de imagen no válido.")
      (> tamano 2048000)
      (js/alert "La imagen no puede superar 2Mb de tamaño.")
      :else
      (reset! imagen [file]))))

;; Función para subir la imagen
(defn subir-imagen [on-success]
  (let [usuario-id (.getItem js/localStorage "id")]
    (when (not (empty? @imagen))
      (let [form-data (js/FormData.)]
        (.append form-data "imagen" (first @imagen))
        (.append form-data "usuario_id" usuario-id)
        (.append form-data "descripcion" @descripcion)
        (https/post "/api/subir-imagen"
                    {:body form-data
                     :with-credentials? true
                     :response-format :json
                     :on-success (fn [_response]
                                   (on-success))
                     :on-failure (fn [_]
                                   (js/alert "Error al subir la imagen"))})))))

(defn eliminar-imagen [id]
  (when (js/confirm "¿Estás seguro de que quieres eliminar esta imagen?")
    (https/delete (str "/api/imagen/eliminar/" id)
                  {:response-format :json
                   :on-success (fn [_]
                                 (js/alert "Imagen eliminada")
                                 (db/cargar-imagenes))
                   :on-failure (fn [_]
                                 (js/alert "Error al eliminar la imagen"))})))


(defn mostrar-imagenes-todas []
  (let [imagenes db/imagenes] ;; reactivo
    (fn []
      (if (empty? @imagenes)
        [:div "No se encontraron imágenes."]
        [:div.row {:class "containerImg"}
         (for [{:keys [id descripcion imagen_base64 mime_type]} @imagenes]
           ^{:key id}
           [:div.col-12.col-md-5 {:class "conjuntoImagenes"}
            [:img {:src (str "data:" mime_type ";base64," imagen_base64)
                   :alt descripcion
                   :class "img"
                   :style {:cursor "pointer"}
                   :on-click #(do
                                (eliminar-imagen id)
                                (db/cargar-imagenes))}]])]))))


(defn actualizar-listado []
  (db/cargar-imagenes)
  (reset! input-key (random-uuid))
  (reset! imagen nil)
  (reset! descripcion ""))

(defn formulario-subida []
  [:div {:class "formulario"}
   [:h4 "Subir Imagen"]
   [:p "(solo se puede subir de 1 en 1)"]
   [:p "Para eliminar una imagen, clicka sobre ella y confirma."]
   [:input {:type "file"
            :on-change comprobacion_archivo
            :class "inputImagen"
            :key @input-key}]
   [:textarea {:placeholder "Descripción de la imagen"
               :value @descripcion
               :on-change #(reset! descripcion (.. % -target -value))}]
   [:button
    {:on-click
     (fn []
       (cond
         (empty? @imagen)
         (js/alert "Debes seleccionar una imagen.")

         (js/confirm "¿Estás seguro de que quieres subir esta imagen?")
         (subir-imagen
          (fn []
            actualizar-listado))))}
    "Subir Imagen"]
   [:div.row.actualizado
    [:p.col-12 "Para ver el listado actualizado con las nuevas imagenes, selecciona el siguiente botón:"]
    [:button.col-12.col-sm-2.butactua
     {:on-click actualizar-listado}
     "Actualizar listado"]]])


;; Funcion page para estructurar la pagina
(defn page []
  (fn []
    (cond
      ;; Aún no se ha verificado la sesión (espera sin hacer nada)
      (not @core/sesion-verificada?)
      [:div "Cargando..."] ;; o nil
      ;; No hay rol definido después de la verificación → redirige
      (nil? @state/rol-usuario)
      (do
        (set! (.-hash js/location) "#/administracion")
        nil)
      ;; No tiene permisos → redirige
      (not (state/rol-admin?))
      (do
        (set! (.-hash js/location) "#/administracion")
        nil)
      ;; Si todo está bien, muestra el contenido
      :else
      (r/create-class
       {:component-did-mount
        (fn []
          (js/console.log "Componente montado. Llamando a cargar-imagenes...")
          (db/cargar-imagenes))
        :reagent-render
        (fn []
          [:div.row {:class "divPanelImagenes"}
           [:div.col-12 {:class "volverAtras"}
            [:button
             {:on-click #(set! (.-hash js/location) "#/administracion")}
             "Volver al panel de Administración"]]
           [:div.row {:class "adminImagenes"}
            [:div.col.12
             [:h1 "Directorio de imágenes:"]
             [:div.col.12 {:class "formImagenes"}
              [formulario-subida]
              [mostrar-imagenes-todas]]]]])}))))

;; Inicializa la app
(defn init []
  (core/verificar-sesion)
  (dom/render [page] (.getElementById js/document "app")))
(init)
