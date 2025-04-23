(ns app.state
  (:require [reagent.core :as r]
            [clojure.string :as str]))

;; Estado para guardar la ruta, y asi que se muestre como pagina principal el primer valor
(def current-route (r/atom nil))
(def acceso-imagenes? (r/atom false))
(def acceso-editar? (r/atom false))
(def acceso-nuevo? (r/atom true))

(defn getCookie [name]
  (let [cookies (clojure.string/split (or (.-cookie js/document) "") #"; ")]
    (some (fn [cookie]
            (let [[k v] (clojure.string/split cookie #"=" 2)]
              (when (= k name) v)))
          cookies)))
