(ns app.core
  (:require [reagent.core :as r]
            [reagent.dom :as dom]
            [app.routes :as routes]
            [app.state :refer [current-route]]
            [app.views :refer [layout]]))  ;; Usa layout general

(defn app-view []
  [:div
   (if @current-route
     [layout [(:view (:data @current-route))]]
     [:h1 "Cargando..."])])

(defn mount-root []
  (dom/render [app-view] (.getElementById js/document "app")))

(defn init []
  (println "Iniciando la aplicación...")
  (routes/init-router)
  (mount-root))


