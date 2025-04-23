(ns administracion.imagenes
  (:require [reagent.core :as r]
            [reagent.dom :as dom]
            [cljs-http.client :as http]
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
  (if (not (empty? @imagen))
    (let [form-data (js/FormData.)]
      (.append form-data "imagen" (first @imagen)) ;; Agrega la imagen al formulario
      (http/post "/api/subir-imagen"
                 {:body form-data
                  :response-format :json
                  :on-success (fn [response]
                                (js/alert "Imagen subida con éxito")
                                (db/cargar-imagenes))
                  :on-failure (fn [response]
                                (js/alert "Error al subir la imagen"))}))))

(defn mostrar-imagenes-todas []
  (let [imagenes @db/imagenes   ;; Obtención de las imágenes desde el atom
        imagen-seleccionada (r/atom nil)] ;; Atom para la imagen seleccionada
    (if (empty? imagenes)
      [:div "No se encontraron imágenes."]
      [:div
       [:div.row
        (for [{:keys [id descripcion imagen_base64 mime_type]} imagenes]
          ^{:key id}
          [:div.col-12.col-md-3 {:class "conjuntoImagenes"}
           [:img {:src (str "data:" mime_type ";base64," imagen_base64)
                  :alt descripcion}]])]])))

;; Formulario para subir imagenes a la base de datos
;; En este caso, solo permite subir imagenes de 1 en 1
(defn formulario-subida []
  [:div
   [:h2 "Subir Imagen"]
   [:input {:type "file"
            :on-change handle-file-change}]
   [:button {:on-click #(do
                          (subir-imagen))} "Subir Imagen"]])

;; Funcion page para estructurar la pagina
(defn page []
  (if @state/acceso-imagenes?
    (r/create-class
     {:component-did-mount
      (fn []
        (js/console.log "Componente montado. Llamando a cargar-imagenes...")
        (db/cargar-imagenes))
      :reagent-render
      (fn []
        [:div.row
         [:div.col-12 {:class "adminImagenes"}
          [:h3 "Directorio de imágenes:"]
          [formulario-subida]
          [mostrar-imagenes-todas]]])})
    ;; Mostrar mensaje si el acceso no está permitido
    [:div.alert.alert-danger
     [:h4 "⚠️ Acceso denegado"]
     [:p "Para acceder a esta seccion, debes logearte y acceder desde su boton determinado."]]))


;; Inicializa la app
(defn init []
  (dom/render [page] (.getElementById js/document "app")))
(init)
