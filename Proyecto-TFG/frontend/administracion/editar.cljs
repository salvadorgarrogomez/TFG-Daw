(ns administracion.editar
  (:require [reagent.core :as r]
            [reagent.dom :as dom]
            [app.state :refer [current-route]]
            [app.db :refer [list-productos categorias]]))

(def producto (r/atom {:nombre ""}))

(def estado-actualizacion (r/atom nil))

(defn get-producto-por-id [id]
  (some #(when (= (:id %) id) %) @list-productos))

(defn obtener-id-categoria [nombre categorias]
  (:id (first (filter #(= (:nombre %) nombre) categorias))))

(defn get-categoria-por-id [id]
  (some #(when (= (:id %) id) %) @categorias))

(defn normalizar-producto [producto]
  (-> producto
      (update :nombre #(if (clojure.string/blank? %) " -- " %))
      (update :description #(if (clojure.string/blank? %) " -- " %))
      (update :precio #(if (clojure.string/blank? %) " --€ " %))))

(defn actualizar-producto [producto]
  (let [producto-valor (normalizar-producto @producto)
        id (:id producto-valor)
        id-categoria (obtener-id-categoria (:nombre_categoria producto-valor) @categorias)
        producto-para-api (-> producto-valor
                              (dissoc :nombre_categoria)
                              (assoc :categoria_id id-categoria))
        body-extendido (assoc producto-para-api "_method" "PUT")
        url (str "/api/productos/" id)
        opciones #js {:method "POST"
                      :headers #js {"Content-Type" "application/json"}
                      :body (js/JSON.stringify (clj->js body-extendido))} ;; y body-extendido incluye "_method": "PUT"
        ]
    (-> (js/fetch url opciones)
        (.then (fn [respuesta]
                 (if (.-ok respuesta)
                   (reset! estado-actualizacion "Producto actualizado correctamente")
                   (reset! estado-actualizacion "Error del servidor al guardar"))))
        (.catch (fn [error]
                  (reset! estado-actualizacion "Error del servidor al guardar"))))))

(defn render-editar [producto]
  [:div
   [:button {:on-click #(actualizar-producto producto)} "Guardar cambios"]
   [:button
    "Cancelar"]])

(defn page []
  (let [params (get-in @current-route [:parameters :path])
        tipo (:tipo params)
        id (js/parseInt (:id params))
        producto (r/atom (get-producto-por-id id))]
    (case tipo
      "producto"
      (if @producto
        [:div.row {:class "divEditar"}
         [:div.col-6
          [:h1 "Datos del producto seleccionado:"]
          [:p [:strong "ID: "] (:id @producto)]
          [:p [:strong "Nombre: "] (:nombre @producto)]
          [:p [:strong "Descripción: "] (:description @producto)]
          [:p [:strong "Precio: "] (str (:precio @producto) " €")]
          [:p [:strong "Categoría: "] (:nombre_categoria @producto)]
          [:p [:strong "Tipo de plato: "] (:tipo_plato @producto)]
          [:p [:strong "Tipo de porción: "] (:tipo_porcion @producto)]
          [:h3 [:strong "Restricciones alimentarias: "]]
          [:p [:strong "Vegetariano: "]
           (if (:es_vegetariano @producto)
             [:span {:style {:color "green"}} "✔️"]
             [:span {:style {:color "red"}} "❌"])]
          [:p [:strong "Vegano: "]
           (if (:es_vegano @producto)
             [:span {:style {:color "green"}} "✔️"]
             [:span {:style {:color "red"}} "❌"])]
          [:p [:strong "Gluten: "]
           (if (:es_sin_gluten @producto)
             [:span {:style {:color "green"}} "✔️"]
             [:span {:style {:color "red"}} "❌"])]
          [:p [:strong "Lactosa: "]
           (if (:es_sin_lactosa @producto)
             [:span {:style {:color "green"}} "✔️"]
             [:span {:style {:color "red"}} "❌"])]]
         [:div.col-6
          (when @estado-actualizacion
            [:p {:style {:color "blue"}} @estado-actualizacion])
          [:h1 "Editar datos de producto:"]
          [:p [:strong "ID: "] (:id @producto)]
          [:p [:strong "Nombre de producto: "]
           [:input {:type "text"
                    :value (:nombre @producto)  ;; Aquí accedes al valor del producto desde el atom
                    :placeholder "Ingrese el nuevo nombre de producto."
                    :on-change #(swap! producto assoc :nombre (-> % .-target .-value))}]]

          [:p [:strong "Descripción: "]
           [:input {:type "text"
                    :value (:description @producto)
                    :placeholder "Nueva descripcion de producto."
                    :on-change #(swap! producto assoc :description (-> % .-target .-value))}]]
          [:p [:strong "Precio: "]
           [:input {:type "text"
                    :value (:precio @producto)
                    :on-change #(swap! producto assoc :precio (-> % .-target .-value))}] [:span "€"]]
          [:p [:strong "Selecciona nueva categoría:"]
           [:select
            {:value (:nombre_categoria @producto)
             :on-change #(swap! producto assoc :nombre_categoria (-> % .-target .-value))}
            (for [categoria @categorias]
              ^{:key (:id categoria)}
              [:option {:value (:nombre categoria)}
               (:nombre categoria)])]]

          [:p [:strong "Tipo de plato: "]
           [:select {:value (:tipo_plato @producto)
                     :on-change #(swap! producto assoc :tipo_plato (-> % .-target .-value))}
            [:option {:value "Tapa"} "Tapa"]
            [:option {:value "Al centro"} "Al centro"]
            [:option {:value "Principal"} "Principal"]]]
          [:p [:strong "Tipo de porción: "]
           [:select {:value (:tipo_porcion @producto)
                     :on-change #(let [nuevo-valor (-> % .-target .-value)]
                                   (js/console.log "Cambiando tipo_porcion a:" nuevo-valor)
                                   (swap! producto assoc :tipo_porcion nuevo-valor))}
            [:option {:value "Por unidad"} "Por unidad"]
            [:option {:value "Media ración"} "Media ración"]
            [:option {:value "Ración completa"} "Ración completa"]]]

          [:h3 [:strong "Restricciones alimentarias: "]]
          [:p [:strong "Vegetariano: "]
           [:button {:on-click #(swap! producto assoc :es_vegetariano true)
                     :style {:margin-right "5px"
                             :background-color (when (:es_vegetariano @producto) "#a8e6cf")}}
            "Si: ✔️"]
           [:button {:on-click #(swap! producto assoc :es_vegetariano false)
                     :style {:background-color (when-not (:es_vegetariano @producto) "#ff8b94")}}
            "No: ❌"]]
          [:p [:strong "Vegano: "]
           [:button {:on-click #(swap! producto assoc :es_vegano true)
                     :style {:margin-right "5px"
                             :background-color (when (:es_vegano @producto) "#a8e6cf")}}
            "Si: ✔️"]
           [:button {:on-click #(swap! producto assoc :es_vegano false)
                     :style {:background-color (when-not (:es_vegano @producto) "#ff8b94")}}
            "No: ❌"]]
          [:p [:strong "Gluten: "]
           [:button {:on-click #(swap! producto assoc :es_sin_gluten true)
                     :style {:margin-right "5px"
                             :background-color (when (:es_sin_gluten @producto) "#a8e6cf")}}
            "Si: ✔️"]
           [:button {:on-click #(swap! producto assoc :es_sin_gluten false)
                     :style {:background-color (when-not (:es_sin_gluten @producto) "#ff8b94")}}
            "No: ❌"]]
          [:p [:strong "Lactosa: "]
           [:button {:on-click #(swap! producto assoc :es_sin_lactosa true)
                     :style {:margin-right "5px"
                             :background-color (when (:es_sin_lactosa @producto) "#a8e6cf")}}
            "Si: ✔️"]
           [:button {:on-click #(swap! producto assoc :es_sin_lactosa false)
                     :style {:background-color (when-not (:es_sin_lactosa @producto) "#ff8b94")}}
            "No: ❌"]]
          [render-editar producto]]]
        [:div {:class "divEditar"} "Producto no encontrado"])

      "categoria"
      (let [categoria (get-categoria-por-id id)]
        (if categoria
          [:div.row {:class "divEditar"}
           [:div.col-12
            [:h1 "Editar categoría:"]
            [:p [:strong "ID: "] (:id categoria)]
            [:p [:strong "Nombre: "] (:nombre categoria)]
            [:p [:strong "Descripción: "] (:descripcion categoria)]
            ;; Inputs aquí
            ]])))))



