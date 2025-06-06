(ns app.core
  (:require [reagent.core :as r]
            [reagent.dom :as dom]
            [app.routes :as routes]
            [app.state :refer [current-route]]
            [app.views :refer [layout]]))  

;; Inicializacion de la app, desdes aqui la app se inicializa correctamente, llamando a el routes y views, para de esta forma especificar la vista que debe de inicializarse al entrar en la web
(defn app-view []
  [:div
   (if @current-route
     [layout [(:view (:data @current-route))]])])

(defn mount-root []
  (dom/render [app-view] (.getElementById js/document "app")))

(defn init []
  (routes/init-router)
  (mount-root))


