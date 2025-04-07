(ns app.db
    (:require [reagent.core :as r]
              [cljs-http.client :as http]
              [cljs.core.async :refer [<! go]]
              [ajax.core :as ajax]))

;; Estados globales
  (def categorias (r/atom []))
  (def productos (r/atom []))

;; Obtener categorías
  (defn fetch-categorias []
    (js/console.log "Llamando a fetch-categorias...")
    (go
      (let [{:keys [status body]} (<! (http/get "/api/categorias/"
                                                {:with-credentials? false
                                                 :response-format (ajax/json-response-format {:keywords? true})}))]
        (js/console.log "Respuesta de categorías:" body)
        (if (= 200 status)
          (do
            (reset! categorias body)
            (js/console.log "Categorías actualizadas:" @categorias))
          (js/console.error "Error al obtener categorías")))))

;; Obtener productos por categoría
 (defn fetch-productos [categoria-id]
   (js/console.log "Llamando a fetch-productos para categoría:" categoria-id)
   (go
     (let [{:keys [status body]} (<! (http/get (str "/api/productos/categoria/"categoria-id)
                                               {:with-credentials? false
                                                :response-format (ajax/json-response-format {:keywords? true})}))]
       (js/console.log "Respuesta de productos de la categoría:" body)
       (if (= 200 status)
         (do
          ;; Extraer los productos si la respuesta tiene estructura inesperada
           (let [productos-obtenidos (if (map? body) (:productos body) body)]
             (reset! productos productos-obtenidos)
             (js/console.log "Productos actualizados:" @productos)))
         (js/console.error "Error al obtener productos")))))
