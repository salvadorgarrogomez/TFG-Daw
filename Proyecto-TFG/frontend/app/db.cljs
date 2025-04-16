(ns app.db
  (:require [reagent.core :as r]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<! go]]
            [ajax.core :as ajax]))

;; Estados globales
(def categorias (r/atom []))
(def productos (r/atom []))
(def list-productos (r/atom []))
(defonce imagenes (r/atom []))

;; Obtener categorías
;; Todos los js/console.log los utilizo como mensajes de depuracion para ver en el navegador, y ver si algo falla
(defn fetch-categorias []
  (js/console.log "Llamando a fetch-categorias...")
  (go
    (let [{:keys [status body]} (<! (http/get "/api/categorias/"
                                              {:with-credentials? false
                                               :response-format (ajax/json-response-format {:keywords? true})}))]
      (if (= 200 status)
        (do
          (reset! categorias body)
          (js/console.log "Categorías actualizadas:" @categorias))
        (js/console.error "Error al obtener categorías")))))

(defn fetch-list-categorias []
  (js/console.log "Llamando a fetch-categorias...")
  (go
    (let [{:keys [status body]} (<! (http/get "/api/todas_categorias"
                                              {:with-credentials? false
                                               :response-format (ajax/json-response-format {:keywords? true})}))]
      (if (= 200 status)
        (do
          (reset! categorias body)
          (js/console.log "Categorías actualizadas:" @categorias))
        (js/console.error "Error al obtener categorías")))))

;; Obtener productos por categoría
(defn fetch-productos [categoria-id]
  (js/console.log "Llamando a fetch-productos para categoría:" categoria-id)
  (go
    (let [{:keys [status body]} (<! (http/get (str "/api/productos/categoria/" categoria-id)
                                              {:with-credentials? false
                                               :response-format (ajax/json-response-format {:keywords? true})}))]
      (if (= 200 status)
        (do
          ;; Extraer los productos si la respuesta tiene estructura inesperada
          (let [productos-obtenidos (if (map? body) (:productos body) body)]
            (reset! productos productos-obtenidos)
            (js/console.log "Productos actualizados:" @productos)))
        (js/console.error "Error al obtener productos")))))


(defn fetch-list-productos []
  (js/console.log "Llamando a fetch-list-productos...")
  (go
    (let [{:keys [status body]} (<! (http/get "/api/productos/"
                                              {:with-credentials? false
                                               :response-format (ajax/json-response-format {:keywords? true})}))]
      (if (= 200 status)
        (do
          (reset! list-productos body)
          (js/console.log "Productos actualizados:" @categorias))
        (js/console.error "Error al obtener productos")))))

(defn cargar-imagenes []
  (js/console.log "Llamando a cargar-imagenes...")
  (-> (js/fetch "/api/imagenes")
      (.then #(.json %))
      (.then (fn [data]
               (js/console.log "Datos recibidos desde el backend:" (clj->js data))
               (if (empty? data)
                 (js/console.log "No se encontraron imágenes.")
                 ;; Aquí actualizamos el `atom` `imagenes` con los datos
                 (reset! imagenes (js->clj data :keywordize-keys true)))))
      (.catch (fn [error]
                (js/console.error "Error cargando imágenes:" error)))))
