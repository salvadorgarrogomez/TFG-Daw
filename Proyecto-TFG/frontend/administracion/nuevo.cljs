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
(defonce contiene_gluten-producto (r/atom ""))
(defonce contiene_crustaceos-producto (r/atom ""))
(defonce contiene_huevos-producto (r/atom ""))
(defonce contiene_pescado-producto (r/atom ""))
(defonce contiene_cacahuetes-producto (r/atom ""))
(defonce contiene_soja-producto (r/atom ""))
(defonce contiene_lacteos-producto (r/atom ""))
(defonce contiene_frustos_de_cascara-producto (r/atom ""))
(defonce contiene_apio-producto (r/atom ""))
(defonce contiene_mostaza-producto (r/atom ""))
(defonce contiene_granos_de_sesamo-producto (r/atom ""))
(defonce contiene_sulfitos-producto (r/atom ""))
(defonce contiene_moluscos-producto (r/atom ""))
(defonce contiene_altramuces-producto (r/atom ""))

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
           [:p {:for "contiene_gluten"} "El plato contiene gluten?"
            [:select {:value (or @contiene_gluten-producto "")
                      :id "contiene_gluten"
                      :on-change #(reset! contiene_gluten-producto (-> % .-target .-value))}
             [:option {:value ""} "-- Selecciona una opción --"]
             [:option {:value "true"} "Sí"]
             [:option {:value "false"} "No"]]]]
          [:div
           [:p {:for "contiene_crustaceos"} "El plato contiene crustaceos?"
            [:select {:value (or @contiene_crustaceos-producto "")
                      :id "contiene_crustaceos"
                      :on-change #(reset! contiene_crustaceos-producto (-> % .-target .-value))}
             [:option {:value ""} "-- Selecciona una opción --"]
             [:option {:value "true"} "Sí"]
             [:option {:value "false"} "No"]]]]
          [:div
           [:p {:for "contiene_huevos"} "El plato contiene huevos?"
            [:select {:value (or @contiene_huevos-producto "")
                      :id "contiene_huevos"
                      :on-change #(reset! contiene_huevos-producto (-> % .-target .-value))}
             [:option {:value ""} "-- Selecciona una opción --"]
             [:option {:value "true"} "Sí"]
             [:option {:value "false"} "No"]]]]
          [:div
           [:p {:for "contiene_pescado"} "El plato contiene pescado?"
            [:select {:value (or @contiene_pescado-producto "")
                      :id "contiene_pescado"
                      :on-change #(reset! contiene_pescado-producto (-> % .-target .-value))}
             [:option {:value ""} "-- Selecciona una opción --"]
             [:option {:value "true"} "Sí"]
             [:option {:value "false"} "No"]]]]
          [:div
           [:p {:for "contiene_cacahuetes"} "El plato contiene cacahuetes?"
            [:select {:value (or @contiene_cacahuetes-producto "")
                      :id "contiene_cacahuetes"
                      :on-change #(reset! contiene_cacahuetes-producto (-> % .-target .-value))}
             [:option {:value ""} "-- Selecciona una opción --"]
             [:option {:value "true"} "Sí"]
             [:option {:value "false"} "No"]]]]
          [:div
           [:p {:for "contiene_soja"} "El plato contiene soja"
            [:select {:value (or @contiene_soja-producto "")
                      :id "contiene_soja"
                      :on-change #(reset! contiene_soja-producto (-> % .-target .-value))}
             [:option {:value ""} "-- Selecciona una opción --"]
             [:option {:value "true"} "Sí"]
             [:option {:value "false"} "No"]]]]
          [:div
           [:p {:for "contiene_lacteos"} "El plato contiene lácteos?"
            [:select {:value (or @contiene_lacteos-producto "")
                      :id "contiene_lacteos"
                      :on-change #(reset! contiene_lacteos-producto (-> % .-target .-value))}
             [:option {:value ""} "-- Selecciona una opción --"]
             [:option {:value "true"} "Sí"]
             [:option {:value "false"} "No"]]]]
          [:div
           [:p {:for "contiene_frustos_de_cascara"} "El plato contiene frustos de cascara?"
            [:select {:value (or @contiene_frustos_de_cascara-producto "")
                      :id "contiene_frustos_de_cascara"
                      :on-change #(reset! contiene_frustos_de_cascara-producto (-> % .-target .-value))}
             [:option {:value ""} "-- Selecciona una opción --"]
             [:option {:value "true"} "Sí"]
             [:option {:value "false"} "No"]]]]
          [:div
           [:p {:for "contiene_apio"} "El plato contiene apio?"
            [:select {:value (or @contiene_apio-producto "")
                      :id "contiene_apio"
                      :on-change #(reset! contiene_apio-producto (-> % .-target .-value))}
             [:option {:value ""} "-- Selecciona una opción --"]
             [:option {:value "true"} "Sí"]
             [:option {:value "false"} "No"]]]]
          [:div
           [:p {:for "contiene_mostaza"} "El plato contiene mostaza?"
            [:select {:value (or @contiene_mostaza-producto "")
                      :id "contiene_mostaza"
                      :on-change #(reset! contiene_mostaza-producto (-> % .-target .-value))}
             [:option {:value ""} "-- Selecciona una opción --"]
             [:option {:value "true"} "Sí"]
             [:option {:value "false"} "No"]]]]
          [:div
           [:p {:for "contiene_granos_de_sesamo"} "El plato contiene granos de sesámo?"
            [:select {:value (or @contiene_granos_de_sesamo-producto "")
                      :id "contiene_granos_de_sesamo"
                      :on-change #(reset! contiene_granos_de_sesamo-producto (-> % .-target .-value))}
             [:option {:value ""} "-- Selecciona una opción --"]
             [:option {:value "true"} "Sí"]
             [:option {:value "false"} "No"]]]]
          [:div
           [:p {:for "contiene_sulfitos"} "El plato contiene dióxido de azufre o sulfitos?"
            [:select {:value (or @contiene_sulfitos-producto "")
                      :id "contiene_sulfitos"
                      :on-change #(reset! contiene_sulfitos-producto (-> % .-target .-value))}
             [:option {:value ""} "-- Selecciona una opción --"]
             [:option {:value "true"} "Sí"]
             [:option {:value "false"} "No"]]]]
          [:div
           [:p {:for "contiene_moluscos"} "El plato contiene moluscos?"
            [:select {:value (or @contiene_moluscos-producto "")
                      :id "contiene_moluscos"
                      :on-change #(reset! contiene_moluscos-producto (-> % .-target .-value))}
             [:option {:value ""} "-- Selecciona una opción --"]
             [:option {:value "true"} "Sí"]
             [:option {:value "false"} "No"]]]]
          [:div
           [:p {:for "contiene_altramuces"} "El plato contiene altramuces?"
            [:select {:value (or @contiene_altramuces-producto "")
                      :id "contiene_altramuces"
                      :on-change #(reset! contiene_altramuces-producto (-> % .-target .-value))}
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
                                                          :contiene_gluten @contiene_gluten-producto
                                                          :contiene_crustaceos @contiene_crustaceos-producto
                                                          :contiene_huevos @contiene_huevos-producto
                                                          :contiene_pescado @contiene_pescado-producto
                                                          :contiene_cacahuetes @contiene_cacahuetes-producto
                                                          :contiene_soja @contiene_soja-producto
                                                          :contiene_lacteos @contiene_lacteos-producto
                                                          :contiene_frustos_de_cascara @contiene_frustos_de_cascara-producto
                                                          :contiene_apio @contiene_apio-producto
                                                          :contiene_mostaza @contiene_mostaza-producto
                                                          :contiene_granos_de_sesamo @contiene_granos_de_sesamo-producto
                                                          :contiene_sulfitos @contiene_sulfitos-producto
                                                          :contiene_moluscos @contiene_moluscos-producto
                                                          :contiene_altramuces @contiene_altramuces-producto
                                                          :usuario_id (js/parseInt usuario-id)})
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
                                      (reset! contiene_frustos_de_cascara-producto "")
                                      (reset! contiene_apio-producto "")
                                      (reset! contiene_mostaza-producto "")
                                      (reset! contiene_granos_de_sesamo-producto "")
                                      (reset! contiene_sulfitos-producto "")
                                      (reset! contiene_moluscos-producto "")
                                      (reset! contiene_altramuces-producto ""))))}
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
