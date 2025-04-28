(ns app.state
  (:require [reagent.core :as r]
            [clojure.string :as str]))

;; Estado para guardar la ruta, y asi que se muestre como pagina principal el primer valor
(def current-route (r/atom nil))
(def rol-usuario (r/atom nil))

(defn getCookie [name]
  (let [cookies (clojure.string/split (or (.-cookie js/document) "") #"; ")]
    (some (fn [cookie]
            (let [[k v] (clojure.string/split cookie #"=" 2)]
              (when (= k name) v)))
          cookies)))

(defn set-rol [rol]
  (reset! rol-usuario rol))

(defn rol-admin? []
  (= @rol-usuario "admin"))