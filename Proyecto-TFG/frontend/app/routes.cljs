(ns app.routes
  (:require [reitit.frontend.easy :as rfe]
            [reitit.frontend :as rf]
            [home.core :as home]
            [categorias.core :as categorias]
            [privacidad.core :as privacidad]
            [nosotros.core :as nosotros]
            [administracion.core :as administracion]
            [administracion.editar :as editar]
            [app.state :refer [current-route]]))  

(def routes
  [["/" {:name :home :view home/page}]
   ["/categorias" {:name :categorias :view categorias/page}]  
   ["/nosotros" {:name :nosotros :view nosotros/page}]
   ["/privacidad" {:name :productos :view privacidad/page}]
   ["/administracion" {:name :administracion :view administracion/page}]
   ["/editar/:tipo/:id" {:name :editar :view editar/page}]])

(def router (rf/router routes))

(defn init-router []
  (rfe/start! router #(reset! current-route %) {:use-fragment true})
  (when (nil? @current-route)
    (reset! current-route {:data {:view home/page}})))  


