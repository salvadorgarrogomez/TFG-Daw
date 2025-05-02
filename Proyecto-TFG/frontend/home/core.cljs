(ns home.core
  (:require [reagent.core :as r]
            [reagent.dom :as dom]
            [cljs-http.client :as http]
            [app.db :as db]))

(def selected-image (r/atom nil))

(defn imagenes-carrusel []
  (let [imagenes @db/imagenes]  ;; Obtencion de las imágenes desde el atom
    (if (empty? imagenes)
      [:div "No se encontraron imágenes."]
      [:div.carousel {:id "carouselExampleControls" :class "carousel slide" :data-ride "carousel"}
       [:div.carousel-inner
        (for [{:keys [id descripcion imagen_base64 mime_type]} imagenes]
          ^{:key id}
          [:div.carousel-item {:class (if (= id (first (map :id imagenes))) "active" "")}
           [:div {:class "d-flex justify-content-center"}  ;; Asegura que la imagen esté centrada en el carrusel
            [:img {:src (str "data:" mime_type ";base64," imagen_base64)
                   :alt descripcion}]]])]
       ;; Botones laterales del carrusel, para navegar entre las imágenes
       [:button.carousel-control-prev {:href "#carouselExampleControls" :role "button" :data-slide "prev"}
        [:span.carousel-control-prev-icon {:aria-hidden "true"}]
        [:span.sr-only "Previous"]]
       [:button.carousel-control-next {:href "#carouselExampleControls" :role "button" :data-slide "next"}
        [:span.carousel-control-next-icon {:aria-hidden "true"}]
        [:span.sr-only "Next"]]])))

(defn mostrar-imagenes-todas []
  (let [imagenes @db/imagenes]
    (if (empty? imagenes)
      [:div "No se encontraron imágenes."]
      [:div
       ;; Galería de imágenes
       [:div.row {:class "containerImg"}
        (for [{:keys [id descripcion imagen_base64 mime_type]} imagenes]
          ^{:key id}
          (let [base64-src (str "data:" mime_type ";base64," imagen_base64)]
            [:div.col-12.col-md-5.conjuntoImagenes
             {:on-click #(reset! selected-image {:src base64-src :alt descripcion})}
             [:img {:src base64-src :alt descripcion}]]))]

       ;; Modal
       (when @selected-image
         [:div.modal-container.active
          [:div.modal-content
           [:img {:src (:src @selected-image)
                  :alt (:alt @selected-image)}]
           [:button.close-btn {:on-click #(reset! selected-image nil)} "Cerrar"]]])])))

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
