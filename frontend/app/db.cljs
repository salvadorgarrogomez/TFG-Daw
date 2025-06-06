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

(defonce nombre-producto (r/atom ""))
(defonce descripcion-producto (r/atom ""))
(defonce precio-producto (r/atom ""))
(defonce categoria-producto (r/atom ""))
(defonce tipo_plato-producto (r/atom ""))
(defonce tipo_porcion-producto (r/atom ""))
(defonce contiene_gluten-producto (r/atom ""))
(defonce contiene_crustaceos-producto (r/atom ""))
(defonce contiene_huevos-producto (r/atom ""))
(defonce contiene_pescado-producto (r/atom ""))
(defonce contiene_cacahuetes-producto (r/atom ""))
(defonce contiene_soja-producto (r/atom ""))
(defonce contiene_lacteos-producto (r/atom ""))
(defonce contiene_frutos_de_cascara-producto (r/atom ""))
(defonce contiene_apio-producto (r/atom ""))
(defonce contiene_mostaza-producto (r/atom ""))
(defonce contiene_granos_de_sesamo-producto (r/atom ""))
(defonce contiene_sulfitos-producto (r/atom ""))
(defonce contiene_moluscos-producto (r/atom ""))
(defonce contiene_altramuces-producto (r/atom ""))

;; Obtener categorías
;; Todos los js/console.log los utilizo como mensajes de depuracion para ver en el navegador, y ver si algo falla
;; Conjunto de todas las llamadas a la API para obtener los datos necesarios para la página principal y demas paginas, menos las llamadas de login o de eliminar imagen, el resto estan todas aqui


;; Pagina principal
(defn fetch-categorias []
  (js/console.log "Llamando a fetch-categorias...")
  (-> (js/fetch "/api/categorias")
      (.then #(.json %))
      (.then (fn [data]
               (reset! categorias (js->clj data :keywordize-keys true))
               (js/console.log "Categorías actualizadas:" @categorias)))
      (.catch (fn [err]
                (js/console.error "Error al obtener categorías:" err)))))

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


;; Panel de administracion
(defn fetch-list-categorias []
  (js/console.log "Llamando a fetch-list-categorias...")
  (go
    (let [{:keys [status body]} (<! (https/get "/api/categorias/todas"
                                               {:with-credentials? true
                                                :response-format (ajax/json-response-format {:keywords? true})}))]
      (if (= 200 status)
        (do
          (reset! categorias body)
          (js/console.log "Categorías actualizadas:" @categorias))
        (js/console.error "Error al obtener categorías")))))

(defn fetch-list-productos []
  (js/console.log "Llamando a fetch-list-productos...")
  (go
    (let [{:keys [status body]} (<! (https/get "/api/productos"
                                               {:with-credentials? true
                                                :response-format (ajax/json-response-format {:keywords? true})}))]
      (if (= 200 status)
        (do
          (reset! list-productos body)
          (js/console.log "Productos actualizadas:" @productos))
        (js/console.error "Error al obtener productos")))))

;; Panel administracion, subir imagenes
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
      (cond
        (= 201 status)
        (do
          (js/console.log "Producto insertado correctamente" body)
          (js/alert "Producto creado correctamente.")
          ;; SOLO si la inserción es correcta, reseteamos campos:
          (reset! nombre-producto "")
          (reset! descripcion-producto "")
          (reset! precio-producto "")
          (reset! categoria-producto "")
          (reset! tipo_plato-producto "")
          (reset! tipo_porcion-producto "")
          (reset! contiene_gluten-producto "")
          (reset! contiene_crustaceos-producto "")
          (reset! contiene_huevos-producto "")
          (reset! contiene_pescado-producto "")
          (reset! contiene_cacahuetes-producto "")
          (reset! contiene_soja-producto "")
          (reset! contiene_lacteos-producto "")
          (reset! contiene_frutos_de_cascara-producto "")
          (reset! contiene_apio-producto "")
          (reset! contiene_mostaza-producto "")
          (reset! contiene_granos_de_sesamo-producto "")
          (reset! contiene_sulfitos-producto "")
          (reset! contiene_moluscos-producto "")
          (reset! contiene_altramuces-producto ""))
        (= 409 status)
        (do
          (js/console.warn "Producto duplicado" body)
          (js/alert (:message body))
          ;; NO reseteamos nada para que el usuario corrija
          )
        :else
        (do
          (js/console.error "Error al insertar producto" body)
          (js/alert "Error al insertar producto, inténtalo de nuevo")
          ;; NO reseteamos nada para que el usuario corrija
          )))))

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
          (js/alert "Categoria creada correctamente."))
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
            (js/alert (str "Producto " (if (:activo body) "activado" "desactivado") " correctamente, para actualizar el listado vuelve seleccionar 'Mostrar Productos'")))
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
            (js/alert (str "Categoria " (if (:activo body) "activada" "desactivada") " correctamente, para actualizar el listado vuelve seleccionar 'Mostrar Categorías'")))
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
                  (clj->js {:method "POST"
                            :credentials "include" ;; importante si usas cookies/sesiones
                            :headers #js {"Content-Type" "application/json"}
                            :body body-json}))
        (.then (fn [response]
                 (if (.-ok response)
                   (.blob response)
                   (.text response) ;; para leer texto de error y depurar
                   )))
        (.then (fn [blob-or-text]
                 (if (instance? js/Blob blob-or-text)
                   (let [url (.createObjectURL js/URL blob-or-text)
                         link (.createElement js/document "a")]
                     (set! (.-href link) url)
                     (set! (.-download link) "productos_filtrados.pdf")
                     (.click link)
                     (.revokeObjectURL js/URL url))
                   (js/alert (str "Error del servidor: " blob-or-text)))))
        (.catch #(js/alert (str "Error al generar el PDF: " %))))))
