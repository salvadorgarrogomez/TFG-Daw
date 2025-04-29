(ns nosotros.core
  (:require [reagent.core :as r]
            [reagent.dom :as dom]
            [clojure.string :as str]))

(defn tabla-alergenos []
  [:div.row {:class "tablealergenos"}
   [:ul.col-3
    [:li
     [:a
      [:img {:class "alergenos"
             :src "/imgs/alergenos/gluten.png"
             :alt "Contiene gluten"}]]
     [:p "Contiene gluten"]]
    [:li
     [:a
      [:img {:class "alergenos"
             :src "/imgs/alergenos/crustaceos.png"
             :alt "Crustáceos"}]]
     [:p "Crustáceos"]]
    [:li
     [:a
      [:img {:class "alergenos"
             :src "/imgs/alergenos/huevos.png"
             :alt "Huevos"}]]
     [:p "Huevos"]]]
   [:ul.col-3
    [:li
     [:a
      [:img {:class "alergenos"
             :src "/imgs/alergenos/pescado.png"
             :alt "pescado"}]]
     [:p "Pescados"]]
    [:li
     [:a
      [:img {:class "alergenos"
             :src "/imgs/alergenos/cacahuetes.png"
             :alt "Cacahuetes"}]]
     [:p "Cacahuetes"]]
    [:li
     [:a
      [:img {:class "alergenos"
             :src "/imgs/alergenos/soja.png"
             :alt "Soja"}]]
     [:p "Soja"]]
    [:li
     [:a
      [:img {:class "alergenos"
             :src "/imgs/alergenos/lacteos.png"
             :alt "Lacteos"}]]
     [:p "Lácteos"]]]
   [:ul.col-3
    [:li
     [:a
      [:img {:class "alergenos"
             :src "/imgs/alergenos/cascaras.png"
             :alt "Frutos de cascaras"}]]
     [:p "Frutos de cascaras"]]
    [:li
     [:a
      [:img {:class "alergenos"
             :src "/imgs/alergenos/apio.png"
             :alt "Apio"}]]
     [:p "Apio"]]
    [:li
     [:a
      [:img {:class "alergenos"
             :src "/imgs/alergenos/mostaza.png"
             :alt "Mostaza"}]]
     [:p "Mostaza"]]
    [:li
     [:a
      [:img {:class "alergenos"
             :src "/imgs/alergenos/sesamo.png"
             :alt "Sésamo"}]]
     [:p "Granos de sésamo"]]]
   [:ul.col-3
    [:li
     [:a
      [:img {:class "alergenos"
             :src "/imgs/alergenos/sulfitos.png"
             :alt "Sulfitos"}]]
     [:p "Sulfitos"]]
    [:li
     [:a
      [:img {:class "alergenos"
             :src "/imgs/alergenos/moluscos.png"
             :alt "Moluscos"}]]
     [:p "Moluscos"]]
    [:li
     [:a
      [:img {:class "alergenos"
             :src "/imgs/alergenos/altramuces.png"
             :alt "Altramuces"}]]
     [:p "Altramuces"]]]])

;; Funcion page para estructurar la pagina
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
    [:div.col-12.col-md-6.col-sm-12 {:class "tabla"}
     [:h3 "Tabla de alergenos:"]
     [tabla-alergenos]]
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

