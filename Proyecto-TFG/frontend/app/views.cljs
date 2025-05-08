(ns app.views
  (:require [reagent.core :as r]))

;; Estructura que tendra el SPA (Single Page App) de clojure, lo que es la pagina principal, donde se presenta cada boton, al dar sobre ellos, cambia el aspecto del div principal app.
(defn header []
  [:header.row
   [:img.col-12 {:class "logo"
                 :src "imgs/logoBar2.1.svg"
                 :alt "Logo Bar El Escobar"}]
   [:nav.row {:class "navBar"}
    [:ul.col-12 {:class "barraInicio"}
     [:li.col-4 [:a {:href "#/"} "Inicio"]]
     [:li.col-4 [:a {:href "#/categorias"} "Carta"]]
     [:li.col-4 [:a {:href "#/nosotros"} "Nosotros"]]]]])

(defn footer []
  [:footer.container-fluid
   [:div.row
    [:div.col-12 {:class "botonesFooter"}
     [:h3 "Teléfonos de contacto (reservas):"]
     [:a {:href "tel:+34623191754"}
      [:button [:span.ml-2 "623191754"]]]
     [:a {:href "tel:+34683572682"}
      [:button [:span.ml-2 "683572682"]]]]]
   [:div.row {:class "privacidad"}
    [:div.col-12
     [:a {:href "#/privacidad"} "Privacidad"]
     [:a {:href "#/administracion"
          :class "login"} "Administración"]]]])

;; Layout de la pagina principal
(defn layout [content]
  [:div.container-fluid
   [header]
   [:main content]
   [footer]])
