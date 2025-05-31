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
            [comandas.core :as comandas]
            [app.state :refer [current-route]]))

(defn requiere-permisos [context]
  (if (app.state/rol-admin?)
    context
    (do
      (js/alert "Acceso restringido solo para usuarios identificados.")
      (rfe/push-state "/administracion")
      nil)))

(defn redirigir-si-no-logueado [context]
  (if (nil? @app.state/rol-usuario)
    (do
      (rfe/replace-state :administracion) ;; ← redirige a "/administracion"
      nil)
    context))

(def routes
  [["/" {:name :home :view home/page}]
   ["/categorias" {:name :categorias :view categorias/page}]
   ["/nosotros" {:name :nosotros :view nosotros/page}]
   ["/privacidad" {:name :productos :view privacidad/page}]
   ["/administracion" {:name :administracion :view administracion/page}]
   ["/imagenes" {:name :imagenes :view imagenes/page
                 :controllers [{:start redirigir-si-no-logueado}]}]
   ["/comandas" {:name :comandas :view comandas/page
                 :controllers [{:start redirigir-si-no-logueado}]}]
   ["/nuevo/:tipo" {:name :nuevo :view nuevo/page
                    :controllers [{:start redirigir-si-no-logueado}]}]
   ["/editar/:tipo/:id" {:name :editar :view editar/page
                         :controllers [{:start redirigir-si-no-logueado}]}]])

(def router (rf/router routes))

(defn init-router []
  (rfe/start! router #(reset! current-route %) {:use-fragment true})
  (when (nil? @current-route)
    (reset! current-route {:data {:view home/page}})))


