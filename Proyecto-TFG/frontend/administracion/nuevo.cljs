(ns administracion.nuevo
  (:require [reagent.core :as r]
            [reagent.dom :as dom]
            [app.state :as state]
            [app.state :refer [current-route]]
            [app.db :refer [insertar-categoria insertar-producto categorias]]))

(defonce nombre-producto (r/atom ""))
(defonce descripcion-producto (r/atom ""))
(defonce precio-producto (r/atom ""))
(defonce categoria-producto (r/atom ""))
(defonce tipo_plato-producto (r/atom ""))
(defonce tipo_porcion-producto (r/atom ""))
(defonce es_vegetariano-producto (r/atom ""))
(defonce es_vegano-producto (r/atom ""))
(defonce es_sin_gluten-producto (r/atom ""))
(defonce es_sin_lactosa-producto (r/atom ""))

(defonce nombre-categoria (r/atom ""))
(defonce descripcion-categoria (r/atom ""))

(defn get-categoria-por-id [id]
  (some #(when (= (:id %) id) %) @categorias))

(defn tiene-mas-de-dos-decimales? [valor]
  (let [[_ decimales] (clojure.string/split valor #"\.")]
    (and decimales (> (count decimales) 2))))

(defn page []
  (if (state/rol-admin?)
    (let [params (get-in @current-route [:parameters :path])
          tipo (:tipo params)
          usuario-id (js/localStorage.getItem "id")]
      (case tipo
        "producto"
        [:div.row {:class "divNuevo"}
         [:div.col-12 {:class "volverAtras"}
          [:button
           {:on-click #(set! (.-hash js/location) "#/administracion")}
           "Volver al panel de Administración"]]
         [:div.col-12.col-md-6 {:class "divDatosNuevos"}
          [:h1 "Inserta los datos del nuevo producto:"]
          [:div 
           [:p {:for "nombre"} "Nombre del producto: "
            [:input {:type "text"
                     :id "nombre"
                     :value @nombre-producto
                     :on-change #(reset! nombre-producto (-> % .-target .-value))}]]]
          [:div 
           [:p {:for "description"} "Descripción: "
            [:input {:type "text"
                     :id "description"
                     :value @descripcion-producto
                     :on-change #(reset! descripcion-producto (-> % .-target .-value))}]]]
          [:div 
           [:p {:for "precio"} "Precio:"
            [:input {:type "number"
                     :id "precio"
                     :value @precio-producto
                     :on-change #(reset! precio-producto (-> % .-target .-value))}]]]
          [:div 
           [:p {:for "categoria_id"} "Categoria:"
            [:select {:value (or @categoria-producto "")
                      :id "categoria_id"
                      :on-change #(reset! categoria-producto (-> % .-target .-value))}
             [:option {:value ""} "-- Selecciona una categoría --"]
             (for [{:keys [id nombre]} @categorias]
               ^{:key id} [:option {:value id} (str id " - " nombre)])]]]
          [:div 
           [:p {:for "tipo_plato"} "Tipo de plato:"
            [:select {:value (or @tipo_plato-producto "")
                      :id "tipo_plato"
                      :on-change #(reset! tipo_plato-producto (-> % .-target .-value))}
             [:option {:value ""} "-- Selecciona un tipo de plato --"]
             [:option {:value "Tapa"} "Tapa"]
             [:option {:value "Al centro"} "Al centro"]
             [:option {:value "Principal"} "Principal"]
             [:option {:value "Postres"} "Postres"]]]]
          [:div 
           [:p {:for "tipo_porcion"} "Tipo de porcion:"
            [:select {:value (or @tipo_porcion-producto "")
                      :id "tipo_porcion"
                      :on-change #(reset! tipo_porcion-producto (-> % .-target .-value))}
             [:option {:value ""} "-- Selecciona un tipo de porcion --"]
             [:option {:value "Por unidad"} "Por unidad"]
             [:option {:value "Media ración"} "Media ración"]
             [:option {:value "Ración completa"} "Ración completa"]]]]
          [:h3 [:strong "Restricciones alimentarias: "]]
          [:div 
           [:p {:for "es_vegetariano"} "El plato es vegetariano?"
            [:select {:value (or @es_vegetariano-producto "")
                      :id "es_vegetariano"
                      :on-change #(reset! es_vegetariano-producto (-> % .-target .-value))}
             [:option {:value ""} "-- Selecciona una opción --"]
             [:option {:value "true"} "Sí"]
             [:option {:value "false"} "No"]]]]
          [:div 
           [:p {:for "es_vegano"} "El plato es vegano?"
            [:select {:value (or @es_vegano-producto "")
                      :id "es_vegano"
                      :on-change #(reset! es_vegano-producto (-> % .-target .-value))}
             [:option {:value ""} "-- Selecciona una opción --"]
             [:option {:value "true"} "Sí"]
             [:option {:value "false"} "No"]]]]
          [:div 
           [:p {:for "es_sin_gluten"} "El plato es con gluten?"
            [:select {:value (or @es_sin_gluten-producto "")
                      :id "es_sin_gluten"
                      :on-change #(reset! es_sin_gluten-producto (-> % .-target .-value))}
             [:option {:value ""} "-- Selecciona una opción --"]
             [:option {:value "true"} "Sí"]
             [:option {:value "false"} "No"]]]]
          [:div 
           [:p {:for "es_sin_lactosa"} "El plato es con lactosa?"
            [:select {:value (or @es_sin_lactosa-producto "")
                      :id "es_sin_lactosa"
                      :on-change #(reset! es_sin_lactosa-producto (-> % .-target .-value))}
             [:option {:value ""} "-- Selecciona una opción --"]
             [:option {:value "true"} "Sí"]
             [:option {:value "false"} "No"]]]]
          [:div 
           [:button {:on-click #(let [precio-num (js/parseFloat @precio-producto)]
                                  (cond
                                    (or (js/isNaN precio-num)
                                        (< precio-num 0))
                                    (js/alert "El precio debe ser un número mayor o igual que 0")
                                    (tiene-mas-de-dos-decimales? @precio-producto)
                                    (js/alert "El precio solo puede tener hasta dos decimales")
                                    :else
                                    (do
                                      (insertar-producto {:nombre @nombre-producto
                                                          :description @descripcion-producto
                                                          :precio @precio-producto
                                                          :categoria_id @categoria-producto
                                                          :tipo_plato @tipo_plato-producto
                                                          :tipo_porcion @tipo_porcion-producto
                                                          :es_vegetariano @es_vegetariano-producto
                                                          :es_vegano @es_vegano-producto
                                                          :es_sin_gluten @es_sin_gluten-producto
                                                          :es_sin_lactosa @es_sin_lactosa-producto
                                                          :usuario_id (js/parseInt usuario-id)})
                                      (reset! nombre-producto "")
                                      (reset! descripcion-producto "")
                                      (reset! precio-producto "")
                                      (reset! categoria-producto "")
                                      (reset! tipo_plato-producto "")
                                      (reset! tipo_porcion-producto "")
                                      (reset! es_vegetariano-producto "")
                                      (reset! es_vegano-producto "")
                                      (reset! es_sin_gluten-producto "")
                                      (reset! es_sin_lactosa-producto ""))))}
            "Crear producto"]]]]


        "categoria"
        [:div.row {:class "divNuevo"}
         [:div.col-12 {:class "volverAtras"}
          [:button
           {:on-click #(set! (.-hash js/location) "#/administracion")}
           "Volver al panel de Administración"]]
         [:div.col-12.col-md-6 {:class "divDatosNuevos"}
          [:h1 "Inserta los datos de la nueva categoría:"]
          [:div 
           [:p {:for "nombre"} "Nombre de la categoría:"
            [:input {:type "text"
                     :id "nombre"
                     :value @nombre-categoria
                     :on-change #(reset! nombre-categoria (-> % .-target .-value))}]]]
          [:div 
           [:p {:for "descripcion"} "Descripción:"
            [:input {:type "text"
                     :id "descripcion"
                     :value @descripcion-categoria
                     :on-change #(reset! descripcion-categoria (-> % .-target .-value))}]]]
          [:div 
           [:button {:on-click #(do
                                  (insertar-categoria {:nombre @nombre-categoria
                                                       :descripcion @descripcion-categoria
                                                       :usuario_id (js/parseInt usuario-id)})
                                  (reset! nombre-categoria "")
                                  (reset! descripcion-categoria ""))}
            "Crear Categoría"]]]]))
    [:div.alert.alert-danger
     [:h4 "⚠️ Acceso denegado"]
     [:p "Para acceder a esta seccion, debes logearte y acceder desde su boton determinado."]
     [:button
      {:on-click #(set! (.-hash js/location) "#/administracion")}
      "LOGIN"]]))
