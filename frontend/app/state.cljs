(ns app.state
  (:require [reagent.core :as r]
            [clojure.string :as str]))

;; Estado para guardar la ruta, y asi que se muestre como pagina principal el primer valor
(def current-route (r/atom nil))
(def rol-usuario (r/atom nil))

;; Metodos para guardar en el estado global el rol de usuario, y asi especificar si tiene permisos o no, y ademas para obtener las cookies guardadas en el navegador para
;; poder tener acceso y poder enviar solicitudes al backend.
(defn getCookie [name]
  (let [cookies (clojure.string/split (or (.-cookie js/document) "") #"; ")]
    (some (fn [cookie]
            (let [[k v] (clojure.string/split cookie #"=" 2)]
              (when (= k name) v)))
          cookies)))

;; Funciones de identificacion de rol, al hacer login, el backend envia por cookies el rol del usuario loegeado, en base al rol enviado, se mostraran unas vista u otras.
(defn set-rol [rol]
  (reset! rol-usuario rol))

(defn rol-admin? []
  (= @rol-usuario "admin"))

(defn rol-estandar? []
  (= @rol-usuario "estandar"))

(defn init-rol []
  (let [rol (getCookie "rol")]
    (when rol
      (set-rol rol))))
