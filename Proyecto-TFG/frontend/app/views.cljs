(ns app.views
  (:require [reagent.core :as r]))

(defn header []
  [:header.row
   [:img.col-12 {:class "logo"
                :src "imgs/logoBar2.0.png"
                :alt "Logo Bar El Escobar"}]
   [:nav.row {:class "navBar"}
    [:ul.col-12 
     [:li.col-4 [:a {:href "#/"} "Inicio"]]
    ;;  [:li [:a {:href "#/productos"} "Productos"]]
     [:li.col-4 [:a {:href "#/categorias"} "Carta"]]
     [:li.col-4 [:a {:href "#/nosotros"} "Nosotros"]]]]])

(defn footer []
  [:footer.container-fluid
   [:div.row
    [:div.col-12
     [:p "Teléfonos de contacto (reservas):"]
     [:a {:href "tel:+34623191754"}
      [:button [:span.ml-2 "623191754"]]]
     [:a {:href "tel:+34683572682"}
      [:button [:span.ml-2 "683572682"]]]]]
    [:div.row
     [:div.col-12
      [:p "Política de privacidad"]]]])



(defn layout [content]
  [:div.container-fluid
   [header]
   [:main content]
   [footer]])
