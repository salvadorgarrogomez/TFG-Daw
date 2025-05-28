(ns administracion.imagenes
  (:require [reagent.core :as r]
            [reagent.dom :as dom]
            [cljs-http.client :as https]
            [app.state :as state]
            [app.db :as db]))

(defonce imagen (r/atom nil)) ;; Átomo para almacenar la imagen seleccionada

;; Función para manejar el cambio de archivo
(defn handle-file-change [event]
  (let [file (first (.-files (.-target event)))]
    (when (and file (<= (.-size file) 2048000) (re-matches #".*\.(jpg|jpeg|png|gif|svg)$" (.-name file)))
      (reset! imagen [file]))))

;; Función para subir la imagen
(defn subir-imagen []
  (let [usuario-id (.getItem js/localStorage "id")]
    (if (not (empty? @imagen))
      (let [form-data (js/FormData.)]
        (.append form-data "imagen" (first @imagen)) ;; Agrega la imagen al formulario
        (.append form-data "usuario_id" usuario-id)
        (https/post "/api/subir-imagen"
                   {:body form-data
                    :with-credentials? true
                    :response-format :json
                    :on-success (fn [response]
                                  (js/alert "Imagen subida con éxito")
                                  (db/cargar-imagenes))
                    :on-failure (fn [response]
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
  (let [imagenes @db/imagenes   ;; Obtención de las imágenes desde el atom
        imagen-seleccionada (r/atom nil)] ;; Atom para la imagen seleccionada
    (if (empty? imagenes)
      [:div "No se encontraron imágenes."]
      [:div.row {:class "containerImg"}
       (for [{:keys [id descripcion imagen_base64 mime_type]} imagenes]
         ^{:key id}
         [:div.col-12.col-md-5 {:class "conjuntoImagenes"}
          [:img {:src (str "data:" mime_type ";base64," imagen_base64)
                 :alt descripcion
                 :style {:cursor "pointer"}
                 :on-click #(do
                              (eliminar-imagen id)
                              (.reload js/location true))}]])])))

;; Formulario para subir imagenes a la base de datos
;; En este caso, solo permite subir imagenes de 1 en 1
(defn formulario-subida []
  [:div {:class "formulario"}
   [:h4 "Subir Imagen"]
   [:p "(solo se puede subir de 1 en 1)"]
   [:p "Para eliminar una imagen, clicka sobre ella y confirma."]
   [:input {:type "file"
            :on-change handle-file-change
            :class "inputImagen"}]
   [:button {:on-click #(if (empty? @imagen)
                          (js/alert "Debes seleccionar una imagen.")
                          (do
                            (subir-imagen)
                            (.reload js/location true)))}
    "Subir Imagen"]])


;; Funcion page para estructurar la pagina
(defn page []
  (if (state/rol-admin?)
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
            [mostrar-imagenes-todas]]]]])})
    ;; Mostrar mensaje si el acceso no está permitido
    [:div.alert.alert-danger
     [:h4 "⚠️ Acceso denegado"]
     [:p "Para acceder a esta seccion, debes logearte y acceder desde su boton determinado."]
     [:button
      {:on-click #(set! (.-hash js/location) "#/administracion")}
      "LOGIN"]]))


;; Inicializa la app
(defn init []
  (dom/render [page] (.getElementById js/document "app")))
(init)
