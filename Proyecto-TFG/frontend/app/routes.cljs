(ns app.routes
  (:require [reitit.frontend.easy :as rfe]
            [reitit.frontend :as rf]
            [home.core :as home]
            [categorias.core :as categorias]
            [productos.core :as productos]
            [nosotros.core :as nosotros]
            [app.state :refer [current-route]]))  

(def routes
  [["/" {:name :home :view home/page}]
   ["/productos" {:name :productos :view productos/page}]
   ["/categorias" {:name :categorias :view categorias/page}]  
   ["/nosotros" {:name :nosotros :view nosotros/page}]])

(def router (rf/router routes))

(defn init-router []
  (rfe/start! router #(reset! current-route %) {:use-fragment true})
  (when (nil? @current-route)
    (reset! current-route {:data {:view home/page}})))  


