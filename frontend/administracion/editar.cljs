(ns administracion.editar
  (:require [reagent.core :as r]
            [reagent.dom :as dom]
            [app.state :as state]
            [app.state :refer [current-route]]
            [app.db :refer [list-productos categorias]]
            [administracion.core :as core]))

;; Estado global de la aplicación: contiene datos cargados, seleccion de campos
(def producto (r/atom {}))
(def categoria (r/atom {}))
(def campo-seleccionado (r/atom nil))
(def nuevo-valor (r/atom ""))

(def estado-actualizacion (r/atom nil))

;; Utilizando el metodo de app/db para consumir la api, se clasifican los productos por id
(defn get-producto-por-id [id]
  (some #(when (= (:id %) id) %) @list-productos))

;; Utilizando el metodo de app/db para consumir la api, se clasifican las categorias por id
(defn get-categoria-por-id [id]
  (some #(when (= (:id %) id) %) @categorias))

;; Funcion de comprobacion con expresion regular para comprobar el numero de decimales
(defn tiene-mas-de-dos-decimales? [valor]
  (let [[_ decimales] (clojure.string/split valor #"\.")]
    (and decimales (> (count decimales) 2))))

(defn actualizar-producto [producto campo valor valor-num]
  (let [id (:id @producto)
        usuario-id (js/localStorage.getItem "id")
        valor-parseado (case campo
                         ("contiene_gluten" "contiene_crustaceos" "contiene_huevos" "contiene_pescado"
                                            "contiene_cacahuetes" "contiene_soja" "contiene_lacteos" "contiene_frutos_de_cascara"
                                            "contiene_apio" "contiene_mostaza" "contiene_granos_de_sesamo" "contiene_sulfitos" "contiene_moluscos" "contiene_altramuces") (= valor "true")
                         ("precio" "categoria_id") (js/parseFloat valor)
                         valor)
        body-extendido (clj->js (assoc {} campo valor-parseado "usuario_id" usuario-id))
        url (str "/api/productos/" id)
        opciones #js {:method "PUT"
                      :with-credentials? true
                      :headers #js {"Content-Type" "application/json"}
                      :body (js/JSON.stringify body-extendido)}]
    (-> (js/fetch url opciones)
        (.then (fn [respuesta]
                 (if (.-ok respuesta)
                   (do
                     (reset! estado-actualizacion (str "Campo " campo " actualizado correctamente."))
                     (if (= campo "categoria_id")
                       (let [categoria (get-categoria-por-id valor-parseado)]
                         (swap! producto assoc
                                :categoria_id valor-parseado
                                :nombre_categoria (:nombre categoria)))
                       (swap! producto assoc (keyword campo) valor-parseado)))
                   (reset! estado-actualizacion "Error del servidor al actualizar campo."))))
        (.catch (fn [e]
                  (reset! estado-actualizacion "Error del servidor al actualizar campo."))))))

(defn actualizar-categoria [categoria campo valor]
  (let [id (:id @categoria)
        usuario-id (js/localStorage.getItem "id")
        body (clj->js {"usuario_id" usuario-id
                       campo valor})
        url (str "/api/categoria/" id)
        opciones #js {:method "PUT"
                      :with-credentials? true
                      :headers #js {"Content-Type" "application/json"}
                      :body (js/JSON.stringify body)}]
    (-> (js/fetch url opciones)
        (.then (fn [respuesta]
                 (if (.-ok respuesta)
                   (do
                     ;; Actualiza los datos localmente en la UI
                     (swap! categoria assoc (keyword campo) valor)
                     (reset! estado-actualizacion (str "Campo " campo " actualizado correctamente.")))
                   (reset! estado-actualizacion "Error del servidor al actualizar campo."))))
        (.catch (fn [e]
                  (reset! estado-actualizacion "Error de red al actualizar."))))))

(def etiquetas-producto
  {"nombre" "Nombre"
   "description" "Descripción"
   "precio" "Precio"
   "categoria_id" "Categoría"
   "tipo_plato" "Tipo de plato"
   "tipo_porcion" "Tipo de porción"
   "contiene_gluten" "Contiene Gluten"
   "contiene_crustaceos" "Crustaceos"
   "contiene_huevos" "Huevos"
   "contiene_pescado" "Pescados"
   "contiene_cacahuetes" "Cacahuetes"
   "contiene_soja" "Soja"
   "contiene_lacteos" "Lácteos"
   "contiene_frutos_de_cascara" "Frutos de cascara"
   "contiene_apio" "Apio"
   "contiene_mostaza" "Mostaza"
   "contiene_granos_de_sesamo" "Granos de sesamo"
   "contiene_sulfitos" "Dióxido de azufre y sulfitos"
   "contiene_moluscos" "Moluscos"
   "contiene_altramuces" "Altramuces"})

;; Estructura para la edicion de los datos, se mostrara un select para seleccionar el campo a modificar
(defn render-edicion-producto [producto]
  (let [campo-seleccionado (r/atom "")
        nuevo-valor (r/atom "")]
    (fn [producto]
      [:div.edit
       [:h3 "Selecciona el campo que quieres modificar:"]
       [:select {:value (or @campo-seleccionado "")
                 :on-change #(reset! campo-seleccionado (-> % .-target .-value))
                 :class "selectEdit"}
        [:option {:value ""} "-- Selecciona un campo --"]
        [:option {:value "nombre"} "Nombre"]
        [:option {:value "description"} "Descripción"]
        [:option {:value "precio"} "Precio"]
        [:option {:value "categoria_id"} "Categoría"]
        [:option {:value "tipo_plato"} "Tipo de plato"]
        [:option {:value "tipo_porcion"} "Tipo de porción"]
        [:option {:value ""} "-- Alergenos --"]
        [:option {:value "contiene_gluten"} "Contiene Gluten"]
        [:option {:value "contiene_crustaceos"} "Crustaceos"]
        [:option {:value "contiene_huevos"} "Huevos"]
        [:option {:value "contiene_pescado"} "Pescados"]
        [:option {:value "contiene_cacahuetes"} "Cacahuetes"]
        [:option {:value "contiene_soja"} "Soja"]
        [:option {:value "contiene_lacteos"} "Lácteos"]
        [:option {:value "contiene_frutos_de_cascara"} "Frutos de cascara"]
        [:option {:value "contiene_apio"} "Apio"]
        [:option {:value "contiene_mostaza"} "Mostaza"]
        [:option {:value "contiene_granos_de_sesamo"} "Granos de sesamo"]
        [:option {:value "contiene_sulfitos"} "Dióxido de azufre y sulfitos"]
        [:option {:value "contiene_moluscos"} "Moluscos"]
        [:option {:value "contiene_altramuces"} "Altramuces"]]

       (when (not= @campo-seleccionado "")
         [:div {:style {:margin-top "15px"}}
          [:label
           "Nuevo valor para el campo seleccionado: "
           [:span.referencia
            (get etiquetas-producto @campo-seleccionado @campo-seleccionado)]]
          (cond
            ;; Booleans
            (#{"contiene_gluten" "contiene_crustaceos" "contiene_huevos" "contiene_pescado" "contiene_cacahuetes" "contiene_soja" "contiene_lacteos" "contiene_frutos_de_cascara"
               "contiene_apio" "contiene_mostaza" "contiene_granos_de_sesamo" "contiene_sulfitos" "contiene_moluscos" "contiene_altramuces"} @campo-seleccionado)
            [:select {:value (or @nuevo-valor "")
                      :on-change #(reset! nuevo-valor (-> % .-target .-value))}
             [:option {:value ""} "-- Selecciona una opción --"]
             [:option {:value "true"} "Sí"]
             [:option {:value "false"} "No"]]
            ;; Tipo de plato con opciones específicas
            (= @campo-seleccionado "tipo_porcion")
            [:select {:value (or @nuevo-valor "")
                      :on-change #(reset! nuevo-valor (-> % .-target .-value))}
             [:option {:value ""} "-- Selecciona un tipo de porcion --"]
             [:option {:value "Media ración"} "Media ración"]
             [:option {:value "Ración completa"} "Ración completa"]
             [:option {:value "Por unidad"} "Por unidad"]]
            (= @campo-seleccionado "tipo_plato")
            [:select {:value (or @nuevo-valor "")
                      :on-change #(reset! nuevo-valor (-> % .-target .-value))}
             [:option {:value ""} "-- Selecciona un tipo de plato --"]
             [:option {:value "Tapa"} "Tapa"]
             [:option {:value "Al centro"} "Al centro"]
             [:option {:value "Principal"} "Principal"]
             [:option {:value "Bebida"} "Bebida"]
             [:option {:value "Postres"} "Postres"]]
            ;; Categoría (muestra ID y nombre)
            (= @campo-seleccionado "categoria_id")
            [:select {:value (or @nuevo-valor "")
                      :on-change #(reset! nuevo-valor (-> % .-target .-value))}
             [:option {:value ""} "-- Selecciona una categoría --"]
             (for [{:keys [id nombre]} @categorias]
               ^{:key id} [:option {:value id} (str id " - " nombre)])]
            (= @campo-seleccionado "precio")
            [:input {:type "number"
                     :step "0.01"
                     :min "0"
                     :value @nuevo-valor
                     :placeholder (str (get @producto (keyword @campo-seleccionado)))
                     :on-change #(reset! nuevo-valor (-> % .-target .-value))}]
            (= @campo-seleccionado "nombre")
            [:input {:type "text"
                     :value @nuevo-valor
                     :placeholder (str (get @producto (keyword @campo-seleccionado)))
                     :on-change #(reset! nuevo-valor (-> % .-target .-value))}]
            ;; Resto de campos usan textarea
            :else
            [:textarea {:type "text"
                        :value @nuevo-valor
                        :placeholder (str (get @producto (keyword @campo-seleccionado)))
                        :on-change #(reset! nuevo-valor (-> % .-target .-value))}])
          [:br]
          [:button
           {:on-click #(cond
                         ;; Si el valor de precio se modifica, se llama a la funcion tiene-mas... para comprobar y avisar al usuario si el varlor introducioo es valido
                         (= @campo-seleccionado "precio")
                         (let [valor-num (js/parseFloat @nuevo-valor)]
                           (cond
                             (or (js/isNaN valor-num) (< valor-num 0))
                             (js/alert "El precio debe ser un número mayor o igual que 0")
                             (tiene-mas-de-dos-decimales? @nuevo-valor)
                             (js/alert "El precio solo puede tener hasta dos decimales")
                             :else
                             (do
                               ;; Aviso de exito en la modificacion del precio
                               (actualizar-producto producto @campo-seleccionado @nuevo-valor valor-num)
                               (reset! nuevo-valor "")
                               (js/alert "Producto actualizado, dale al boton de 'Mostrar productos' para actualizar el listado."))))
                         :else
                         (do
                           ;; Mensaje de exiteo, para confirmar el cambio de cualquier otro valor seleccionado
                           (actualizar-producto producto @campo-seleccionado @nuevo-valor nil)
                           (reset! nuevo-valor "")
                           (js/alert "Producto actualizado, dale al boton de 'Mostrar productos' para actualizar el listado.")))}
           "Actualizar campo"]])])))

;; Etiquetas enbellecidas, para mostrar al usuario el dato de forma mas grafica y saber el campo seleccionado
(def etiquetas-categoria
  {"nombre" "Nombre"
   "descripcion" "Descripción"})

(defn render-edicion-categoria [id categoria]
  (let [campo-seleccionado (r/atom "")
        nuevo-valor (r/atom "")]
    (fn [id categoria]
      [:div.edit
       [:h3 "Selecciona el campo que quieres modificar:"]
       [:select {:value @campo-seleccionado
                 :on-change #(reset! campo-seleccionado (-> % .-target .-value))
                 :class "selectEdit"}
        [:option {:value ""} "-- Selecciona un campo --"]
        [:option {:value "nombre"} "Nombre"]
        [:option {:value "descripcion"} "Descripción"]]
       (when (not= @campo-seleccionado "")
         [:div {:style {:margin-top "15px"}}
          [:label
           "Nuevo valor para el campo seleccionado: "
           [:span.referencia
            (get etiquetas-categoria @campo-seleccionado @campo-seleccionado)]]
          (if (= @campo-seleccionado "descripcion")
            [:textarea {:value @nuevo-valor
                        :placeholder (get @categoria (keyword @campo-seleccionado))
                        :on-change #(reset! nuevo-valor (-> % .-target .-value))}]
            [:input {:type "text"
                     :value @nuevo-valor
                     :placeholder (get @categoria (keyword @campo-seleccionado))
                     :on-change #(reset! nuevo-valor (-> % .-target .-value))}])
          [:br]
          [:button {:on-click #(do
                                 (actualizar-categoria categoria @campo-seleccionado @nuevo-valor)
                                 (reset! nuevo-valor "")
                                 (js/alert "Categoría actualizada. Dale al botón 'Mostrar categorías' para ver los cambios."))}
           "Actualizar campo"]])])))

;; Conjunto de alergenos
(def alergenos
  [[:contiene_gluten               "Gluten"]
   [:contiene_crustaceos           "Crustáceos"]
   [:contiene_huevos               "Huevos"]
   [:contiene_pescado              "Pescado"]
   [:contiene_cacahuetes           "Cacahuetes"]
   [:contiene_soja                 "Soja"]
   [:contiene_lacteos              "Lácteos"]
   [:contiene_frutos_de_cascara    "Frutos de cáscara"]
   [:contiene_apio                 "Apio"]
   [:contiene_mostaza              "Mostaza"]
   [:contiene_granos_de_sesamo     "Sésamo"]
   [:contiene_sulfitos             "Sulfitos"]
   [:contiene_moluscos             "Moluscos"]
   [:contiene_altramuces           "Altramuces"]])

;; Funcion, para crear el mismo componente para todos los alergenos y no repetir codigo
(defn columnas-alergenos [producto]
  (let [vals       @producto
        mitad      (quot (count alergenos) 2)
        [col1 col2] (split-at mitad alergenos)]
    [:div.row
     [:div.col-6
      (for [[k label] col1]
        ^{:key k}
        [:p
         [:strong (str label ": ")]
         (if (get vals k)
           [:span.text-success "✔️"]
           [:span.text-danger  "❌"])])]
     [:div.col-6
      (for [[k label] col2]
        ^{:key k}
        [:p
         [:strong (str label ": ")]
         (if (get vals k)
           [:span.text-success "✔️"]
           [:span.text-danger  "❌"])])]]))

;; Estrututura principal de la vista, con validacion de seguridad
(defn page []
  (fn []
    (cond
      ;; Aún no se ha verificado la sesión (espera sin hacer nada)
      (not @core/sesion-verificada?)
      [:div "Cargando..."] ;; o nil
      ;; No hay rol definido después de la verificación → redirige
      (nil? @state/rol-usuario)
      (do
        (set! (.-hash js/location) "#/administracion")
        nil)
      ;; No tiene permisos → redirige
      (not (state/rol-admin?))
      (do
        (set! (.-hash js/location) "#/administracion")
        nil)
      ;; Si todo está bien, muestra el contenido
      :else
      (let [params (get-in @current-route [:parameters :path])
            tipo (:tipo params)
            id (js/parseInt (:id params))]
        (r/with-let [_ (reset! producto (get-producto-por-id id))]
          (r/with-let [_ (reset! categoria (get-categoria-por-id id))]
            (case tipo
              "producto"
              (if @producto
                [:div.row {:class "divEditar"}
                 [:div.col-12 {:class "volverAtras"}
                  [:button
                   {:on-click #(set! (.-hash js/location) "#/administracion")}
                   "Volver al panel de Administración"]]
                 [:div.col-12.col-md-6 {:class "divDatos"}
                  [:h1 "Datos del producto seleccionado:"]
                  [:p [:strong "ID: "] (:id @producto)]
                  [:p [:strong "Nombre: "] (:nombre @producto)]
                  [:p [:strong "Descripción: "] (:description @producto)]
                  [:p [:strong "Precio: "] (str (:precio @producto) " €")]
                  [:p [:strong "Categoría: "] (:nombre_categoria @producto)]
                  [:p [:strong "Tipo de plato: "] (:tipo_plato @producto)]
                  [:p [:strong "Tipo de porción: "] (:tipo_porcion @producto)]
                  [:h3 [:strong "Alérgenos informativos: "]]
                  [columnas-alergenos producto]]
                 [:div.col-12.col-md-6 {:class "divActualizar"}
                  [render-edicion-producto producto]]]
                [:div {:class "divEditar"} "Producto no encontrado"])

              "categoria"
              (if @categoria
                [:div.row {:class "divEditar"}
                 [:div.col-12 {:class "volverAtras"}
                  [:button
                   {:on-click #(set! (.-hash js/location) "#/administracion")}
                   "Volver al panel de Administración"]]
                 [:div.col-12.col-md-6 {:class "divDatos"}
                  [:h1 "Editar categoría:"]
                  [:p [:strong "ID: "] (:id @categoria)]
                  [:p [:strong "Nombre: "] (:nombre @categoria)]
                  [:p [:strong "Descripción: "] (:descripcion @categoria)]]
                 [:div.col-12.col-md-6 {:class "divActualizar"}
                  [render-edicion-categoria id categoria]]]
                [:div {:class "divEditar"} "Producto no encontrado"]))))))))

(defn init []
  (core/verificar-sesion)
  (dom/render [page] (.getElementById js/document "app")))
(init)

