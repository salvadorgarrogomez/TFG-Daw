(ns app.db
  (:require [reagent.core :as r]
            [cljs-http.client :as https]
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
  (-> (js/fetch "/api/categorias/")
      (.then #(.json %))
      (.then (fn [data]
               (reset! categorias (js->clj data :keywordize-keys true))
               (js/console.log "Categorías actualizadas:" (clj->js @categorias))))
      (.catch (fn [error]
                (js/console.error "Error cargando categorías:" error)))))

(defn fetch-list-categorias []
  (js/console.log "Llamando a fetch-categorias...")
  (go
    (let [{:keys [status body]} (<! (https/get "/api/categorias/todas"
                                              {:with-credentials? true
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
    (let [{:keys [status body]} (<! (https/get (str "/api/productos/categoria/" categoria-id)
                                              {:with-credentials? true
                                               :response-format (ajax/json-response-format {:keywords? true})}))]
      (if (= 200 status)
        (let [productos-obtenidos (if (map? body) (:productos body) body)]
          (reset! productos productos-obtenidos)
          (js/console.log "Productos actualizados:" @productos))
        (do
          ;; Si no hay productos, se vacía el estado
          (reset! productos [])
          (js/console.log "La categoría seleccionada no tiene productos asociados."))))))



(defn fetch-list-productos []
  (js/console.log "Llamando a fetch-list-productos...")
  (go
    (let [{:keys [status body]} (<! (https/get "/api/productos/"
                                              {:with-credentials? true
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

(defn insertar-producto [producto]
  (js/console.log "Llamando a insertar-producto..." producto)
  (go
    (let [{:keys [status body]} (<! (https/post "/api/producto/nuevo"
                                               {:with-credentials? true
                                                :json-params producto
                                                :response-format (ajax/json-response-format {:keywords? true})}))]
      (if (= 201 status)
        (do
          (js/console.log "Producto insertado correctamente" body)
          (js/alert "Producto creado correctamente"))
        (js/console.error "Error al insertar producto" body)))))

(defn insertar-categoria [categoria]
  (js/console.log "Llamando a insertar-categoria..." categoria)
  (go
    (let [{:keys [status body]} (<! (https/post "/api/categoria/nuevo"
                                               {:with-credentials? true
                                                :json-params categoria
                                                :response-format (ajax/json-response-format {:keywords? true})}))]
      (if (= 201 status)
        (do
          (js/console.log "Categoria insertada correctamente" body)
          (js/alert "Categoria creada correctamente, recarga la lista de 'Mostrar categorias' dandole al boton, para verla y poder editarla."))
        (js/console.error "Error al insertar categoria" body)))))

(defn eliminar-producto [id]
  (go
    (let [{:keys [status body]} (<! (https/delete (str "/api/producto/eliminar/" id)
                                                 {:with-credentials? true
                                                  :response-format (ajax/json-response-format {:keywords? true})}))]
      (if (= 200 status)
        (do
          (js/console.log "Producto eliminado" body)
          (js/alert "Producto eliminado correctamente, dale a boton de 'Mostrar productos'."))
        (js/console.error "Error al eliminar el producto" body)))))

(defn activo-producto [id]
  (let [usuario-id (js/localStorage.getItem "id")]
    (go
      (let [{:keys [status body]} (<! (https/put (str "/api/producto/activo/" id)
                                                {:with-credentials? true
                                                 :headers {"Content-Type" "application/json"}
                                                 :body (js/JSON.stringify #js {:usuario_id usuario-id})
                                                 :response-format (ajax/json-response-format {:keywords? true})}))]
        (if (= 200 status)
          (do
            (js/console.log "Estado actualizado" body)
            (js/alert (str "Producto " (if (:activo body) "activado" "desactivado") " correctamente")))
          (js/console.error "Error al actualizar estado del producto" body))))))

(defn activo-categoria [id]
  (let [usuario-id (js/localStorage.getItem "id")]
    (go
      (let [{:keys [status body]} (<! (https/put (str "/api/categoria/activo/" id)
                                                {:with-credentials? true
                                                 :headers {"Content-Type" "application/json"}
                                                 :body (js/JSON.stringify #js {:usuario_id usuario-id})
                                                 :response-format (ajax/json-response-format {:keywords? true})}))]
        (if (= 200 status)
          (do
            (js/console.log "Estado actualizado" body)
            (js/alert (str "Categoria " (if (:activo body) "activada" "desactivada") " correctamente.")))
          (js/console.error "Error al actualizar estado de la categoria" body))))))

(defn eliminar-categoria [id]
  (go
    (let [{:keys [status body]} (<! (https/delete (str "/api/categoria/eliminar/" id)
                                                 {:with-credentials? true
                                                  :response-format (ajax/json-response-format {:keywords? true})}))]
      (if (= 200 status)
        (do
          (js/console.log "Categoría eliminada" body)
          (js/alert "Categoría eliminada correctamente, dale a boton de 'Mostrar categorias'."))
        (js/console.error "Error al eliminar categoría" body)))))

(defn descargar-pdf [productos-ids categoria-seleccionada]
  (let [body-json (.stringify js/JSON (clj->js {:productos productos-ids
                                                :categoria categoria-seleccionada}))]
    (-> (js/fetch "/api/generar-pdf"
                  (clj->js {:with-credentials? true
                            :method "POST"
                            :headers #js {"Content-Type" "application/json"}
                            :body body-json}))
        (.then (fn [response]
                 (if (.-ok response)
                   (.blob response)
                   (throw (js/Error. "Respuesta fallida del servidor")))))
        (.then (fn [blob]
                 (let [url (.createObjectURL js/URL blob)
                       link (.createElement js/document "a")]
                   (set! (.-href link) url)
                   (set! (.-download link) "productos_filtrados.pdf")
                   (.click link)
                   (.revokeObjectURL js/URL url))))
        (.catch #(js/alert (str "Error al generar el PDF: " %))))))
