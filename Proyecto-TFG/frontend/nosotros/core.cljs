(ns nosotros.core
  (:require [reagent.core :as r]
            [reagent.dom :as dom]
            [clojure.string :as str]))

(defn page []
  [:div
   [:div.row {:class "nosotros"}
    [:div.col-12.col-md-6.col-sm-6 {:class "redes"}
     [:h3 "Nuestras redes:"]
     [:a {:href "https://www.instagram.com/barelescobar?igsh=cWQ0ZDNtbmNndXEy&utm_source=qr"
          :target "_blank"}
      [:img {:src "/imgs/instagram.png" :alt "Instagram"}]
      "@barelescobar"]]
    [:div.col-12.col-md-6.col-sm-6 {:class "telefono"}
     [:h3 "Telefonos de contacto:"]
     [:a {:href "tel:+34623191754"}
      [:button [:span.ml-2 "623191754"]]]
     [:a {:href "tel:+34683572682"}
      [:button [:span.ml-2 "683572682"]]]
     [:p "(necesarios para programar reservas)"]]
    [:div.col-12.col-md-6.col-sm-12 {:class "direccion"}
     [:h3 "Direccion:"]
     [:p "Plaza del Cazador, 30333, El Escobar"]
     [:p "Fuente Álamo, Región de Murcia"]]
    [:div.row {:class "divMapa"}
     [:div.col-12 {:class "mapa"}
      [:iframe {:src "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3153.8014201774745!2d-1.2165041!3d37.7712542!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd649d30b26be2b7%3A0xb9cfcb36c9e33146!2sBar%20El%20Escobar!5e0!3m2!1ses!2ses!4v1709664912209!5m2!1ses!2ses"
                :allowFullScreen true
                :loading "lazy"
                :referrerPolicy "no-referrer-when-downgrade"
                :style {:border 0 :width "100%" :height "450px"}}]]]]])


(defn init []
  (dom/render [page] (.getElementById js/document "app")))

(init)