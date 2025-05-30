(ns home.core
  (:require [reagent.core :as r]
            [reagent.dom :as dom]
            [app.db :as db]))

(def selected-image (r/atom nil))

(defn imagenes-carrusel []
  (let [imagenes @db/imagenes]
    (if (empty? imagenes)
      [:div "No se encontraron imágenes."]
      (let [carousel-id "carouselExampleIndicators"]
        [:div.carousel.slide.container {:id carousel-id}
         ;; Indicadores de slide (los puntos)
         [:div.carousel-indicators
          (doall
           (map-indexed
            (fn [i {:keys [id]}]
              [:button {:key (str "indicador-" (or id i))
                        :type "button"
                        :data-bs-target (str "#" carousel-id)
                        :data-bs-slide-to i
                        :class (when (= i 0) "active")
                        :aria-current (when (= i 0) "true")
                        :aria-label (str "Slide " (inc i))}])
            imagenes))]
         ;; Contenido del carrusel
         [:div.carousel-inner
          (doall
           (map-indexed
            (fn [i {:keys [id descripcion imagen_base64 mime_type]}]
              [:div.carousel-item {:key (str "item-" (or id i))
                                   :class (when (= i 0) "active")}
               [:img {:src (str "data:" mime_type ";base64," imagen_base64)
                      :alt descripcion
                      :class "d-block mx-auto carousel-image"}]])
            imagenes))]

         ;; Botón "Anterior"
         [:button.carousel-control-prev
          {:type "button"
           :class "button"
           :data-bs-target (str "#" carousel-id)
           :data-bs-slide "prev"}
          [:span.carousel-control-prev-icon {:aria-hidden "true"}]
          [:span.visually-hidden "Previous"]]
         ;; Botón "Siguiente"
         [:button.carousel-control-next
          {:type "button"
           :class "button"
           :data-bs-target (str "#" carousel-id)
           :data-bs-slide "next"}
          [:span.carousel-control-next-icon {:aria-hidden "true"}]
          [:span.visually-hidden "Next"]]]))))


(defn mostrar-imagenes-todas []
  (let [imagenes @db/imagenes]
    (if (empty? imagenes)
      [:div "No se encontraron imágenes."]
      [:div
       ;; Galería de imágenes
       [:div.row {:class "containerImg"}
        (for [idx (range (count imagenes))]
          (let [{:keys [id descripcion imagen_base64 mime_type]} (nth imagenes idx)
                base64-src (str "data:" mime_type ";base64," imagen_base64)]
            ^{:key (str id "-" idx)}  ;; Usa id + índice para asegurar unicidad
            [:div.col-12.col-md-5.conjuntoImagenes
             {:on-click #(reset! selected-image {:src base64-src :alt descripcion})}
             [:img {:src base64-src
                    :class "img"
                    :alt descripcion}]]))]

       ;; Modal
       (when @selected-image
         [:div.modal-container.active
          {:on-click (fn [e]
                       ;; Cierra solo si se hace clic directamente en el fondo (contenedor)
                       (when (= (.-target e) (.-currentTarget e))
                         (reset! selected-image nil)))}
          [:div.modal-content
           [:img {:src (:src @selected-image)
                  :class "img"
                  :alt (:alt @selected-image)}]]])])))

;; Funcion page para estructurar la pagina
(defn page []
  (r/create-class
   {:component-did-mount
    (fn []
      (js/console.log "Componente montado. Llamando a cargar-imagenes...")
      (db/cargar-imagenes))
    :reagent-render
    (fn []
      [:div.row
       [:div.col-12 {:class "container"}
        [:h3 "Galería de Imágenes"]
        [imagenes-carrusel]
        [mostrar-imagenes-todas]]])}))

;; Inicializa la app
(defn init []
  (dom/render [page] (.getElementById js/document "app")))
(init)
