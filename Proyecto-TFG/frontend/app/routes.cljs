(ns app.routes
  (:require [reitit.frontend.easy :as rfe]
            [reitit.frontend :as rf]
            [home.core :as home]
            [categorias.core :as categorias]
            [privacidad.core :as privacidad]
            [nosotros.core :as nosotros]
            [administracion.core :as administracion]
            [administracion.editar :as editar]
            [administracion.imagenes :as imagenes]
            [administracion.nuevo :as nuevo]
            [app.state :refer [current-route]]))  

(defn requiere-admin [context]
  (if (app.state/rol-admin?)
    context
    (do
      (js/alert "Acceso restringido solo para administradores.")
      (rfe/push-state "/")
      nil)))


(def routes
  [["/" {:name :home :view home/page}]
   ["/categorias" {:name :categorias :view categorias/page}]
   ["/nosotros" {:name :nosotros :view nosotros/page}]
   ["/privacidad" {:name :productos :view privacidad/page}]
   ["/administracion"
    {:name :administracion
     :view administracion/page
     :controllers [{:start requiere-admin}]}]
   ["/imagenes"
    {:name :imagenes
     :view imagenes/page
     :controllers [{:start requiere-admin}]}]
   ["/nuevo/:tipo"
    {:name :nuevo
     :view nuevo/page
     :controllers [{:start requiere-admin}]}]
   ["/editar/:tipo/:id"
    {:name :editar
     :view editar/page
     :controllers [{:start requiere-admin}]}]])

(def router (rf/router routes))

(defn init-router []
  (rfe/start! router #(reset! current-route %) {:use-fragment true})
  (when (nil? @current-route)
    (reset! current-route {:data {:view home/page}})))  


