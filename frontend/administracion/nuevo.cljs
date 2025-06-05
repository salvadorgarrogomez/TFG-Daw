(ns administracion.nuevo
  (:require [reagent.core :as r]
            [reagent.dom :as dom]
            [app.state :as state]
            [app.state :refer [current-route]]
            [app.db :refer [insertar-categoria insertar-producto categorias nombre-producto descripcion-producto precio-producto categoria-producto tipo_plato-producto tipo_porcion-producto
                            contiene_gluten-producto contiene_crustaceos-producto contiene_huevos-producto contiene_huevos-producto contiene_pescado-producto contiene_cacahuetes-producto
                            contiene_soja-producto contiene_lacteos-producto contiene_lacteos-producto contiene_frutos_de_cascara-producto contiene_apio-producto contiene_mostaza-producto
                            contiene_granos_de_sesamo-producto contiene_sulfitos-producto contiene_moluscos-producto contiene_altramuces-producto]]
            [administracion.core :as core]))

(defonce nombre-categoria (r/atom ""))
(defonce descripcion-categoria (r/atom ""))
(defonce tipo-porciones-disponibles (r/atom ["Por unidad" "Media ración" "Ración completa"]))

(defn get-categoria-por-id [id]
  (some #(when (= (:id %) id) %) @categorias))

(defn tiene-mas-de-dos-decimales? [valor]
  (let [[_ decimales] (clojure.string/split valor #"\.")]
    (and decimales (> (count decimales) 2))))

(defn campo-vacio? [valor]
  (or (nil? valor) (= "" valor)))

(defn campo-obligatorio-label [texto valor]
  [:<>
   texto
   (when (campo-vacio? valor)
     [:span {:style {:color "red" :margin-left "5px"}} "*"])])

(defn boolean-select [label ratom id]
  [:div
   [:p {:for id}
    (campo-obligatorio-label label @ratom)
    [:select {:value (or (str @ratom) "") ; convertir a string explícitamente
              :id id
              :on-change #(reset! ratom (case (-> % .-target .-value)
                                          "true" true
                                          "false" false
                                          nil))}
     [:option {:value ""} "-- Selecciona una opción --"]
     [:option {:value "true"} "Sí"]
     [:option {:value "false"} "No"]]]])

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
             [:p {:for "nombre"}
              (campo-obligatorio-label "Nombre del producto:" @nombre-producto)
              [:input {:type "text"
                       :id "nombre"
                       :value @nombre-producto
                       :on-change #(reset! nombre-producto (-> % .-target .-value))}]]]
            [:div
             [:p {:for "description"} "Descripción: "
              [:textarea {:type "text"
                       :id "description"
                       :value (or @descripcion-producto "")
                       :on-change #(reset! descripcion-producto (-> % .-target .-value))}]]]
            [:div
             [:p {:for "precio"}
              (campo-obligatorio-label "Precio:" @precio-producto)
              [:input {:type "number"
                       :id "precio"
                       :value @precio-producto
                       :on-change #(reset! precio-producto (-> % .-target .-value))}]]]
            [:div
             [:p {:for "categoria_id"}
              (campo-obligatorio-label "Selecciona la categoría:" @categoria-producto)
              [:select {:value (or @categoria-producto "")
                        :id "categoria_id"
                        :on-change #(reset! categoria-producto (-> % .-target .-value))}
               [:option {:value ""} "-- Selecciona una categoría --"]
               (for [{:keys [id nombre]} @categorias]
                 ^{:key id} [:option {:value id} (str id " - " nombre)])]]]
            [:div
             [:p {:for "tipo_plato"}
              (campo-obligatorio-label "Tipo de plato:" @tipo_plato-producto)
              [:select {:value (or @tipo_plato-producto "")
                        :id "tipo_plato"
                        :on-change #(reset! tipo_plato-producto (-> % .-target .-value))}
               [:option {:value ""} "-- Selecciona un tipo de plato --"]
               [:option {:value "Tapa"} "Tapa"]
               [:option {:value "Al centro"} "Al centro"]
               [:option {:value "Principal"} "Principal"]
               [:option {:value "Bebida"} "Bebida"]
               [:option {:value "Postres"} "Postres"]]]]
            [:div
             [:p {:for "tipo_porcion"}
              (campo-obligatorio-label "Tipo de porción:" @tipo_porcion-producto)
              [:select {:value (or @tipo_porcion-producto "")
                        :id "tipo_porcion"
                        :on-change #(reset! tipo_porcion-producto (-> % .-target .-value))}
               [:option {:value ""} "-- Selecciona un tipo de porcion --"]
               [:option {:value "Por unidad"} "Por unidad"]
               [:option {:value "Media ración"} "Media ración"]
               [:option {:value "Ración completa"} "Ración completa"]]]]
            [:h4 [:strong "Restricciones alimentarias: "]]
            [boolean-select "El plato contiene gluten?" contiene_gluten-producto "contiene_gluten"]
            [boolean-select "El plato contiene crustaceos?" contiene_crustaceos-producto "contiene_crustaceos"]
            [boolean-select "El plato contiene huevos?" contiene_huevos-producto "contiene_huevos"]
            [boolean-select "El plato contiene pescado?" contiene_pescado-producto "contiene_pescado"]
            [boolean-select "El plato contiene cacahuetes?" contiene_cacahuetes-producto "contiene_cacahuetes"]
            [boolean-select "El plato contiene soja?" contiene_soja-producto "contiene_soja"]
            [boolean-select "El plato contiene lácteos?" contiene_lacteos-producto "contiene_lacteos"]
            [boolean-select "El plato contiene frutos de cáscara?" contiene_frutos_de_cascara-producto "contiene_frutos_de_cascara"]
            [boolean-select "El plato contiene apio?" contiene_apio-producto "contiene_apio"]
            [boolean-select "El plato contiene mostaza?" contiene_mostaza-producto "contiene_mostaza"]
            [boolean-select "El plato contiene granos de sésamo?" contiene_granos_de_sesamo-producto "contiene_granos_de_sesamo"]
            [boolean-select "El plato contiene dióxido de azufre o sulfitos?" contiene_sulfitos-producto "contiene_sulfitos"]
            [boolean-select "El plato contiene moluscos?" contiene_moluscos-producto "contiene_moluscos"]
            [boolean-select "El plato contiene altramuces?" contiene_altramuces-producto "contiene_altramuces"]
            [:div
             [:button
              {:on-click
               (fn []
                 (if (or (campo-vacio? @nombre-producto)
                         (campo-vacio? @precio-producto)
                         (campo-vacio? @categoria-producto)
                         (campo-vacio? @tipo_plato-producto)
                         (campo-vacio? @tipo_porcion-producto)
                         (campo-vacio? @contiene_gluten-producto)
                         (campo-vacio? @contiene_crustaceos-producto)
                         (campo-vacio? @contiene_huevos-producto)
                         (campo-vacio? @contiene_pescado-producto)
                         (campo-vacio? @contiene_cacahuetes-producto)
                         (campo-vacio? @contiene_soja-producto)
                         (campo-vacio? @contiene_lacteos-producto)
                         (campo-vacio? @contiene_frutos_de_cascara-producto)
                         (campo-vacio? @contiene_apio-producto)
                         (campo-vacio? @contiene_mostaza-producto)
                         (campo-vacio? @contiene_granos_de_sesamo-producto)
                         (campo-vacio? @contiene_sulfitos-producto)
                         (campo-vacio? @contiene_moluscos-producto)
                         (campo-vacio? @contiene_altramuces-producto)
                         (tiene-mas-de-dos-decimales? @precio-producto))
                   (js/alert "Completa los campos obligatorios y asegúrate de que el precio tenga como máximo dos decimales.")
                   (do
                     (insertar-producto {:nombre @nombre-producto
                                         :description (or @descripcion-producto "")
                                         :precio (js/parseFloat @precio-producto)
                                         :categoria_id (js/parseInt @categoria-producto)
                                         :tipo_plato @tipo_plato-producto
                                         :tipo_porcion @tipo_porcion-producto
                                         :contiene_gluten @contiene_gluten-producto
                                         :contiene_crustaceos @contiene_crustaceos-producto
                                         :contiene_huevos @contiene_huevos-producto
                                         :contiene_pescado @contiene_pescado-producto
                                         :contiene_cacahuetes @contiene_cacahuetes-producto
                                         :contiene_soja @contiene_soja-producto
                                         :contiene_lacteos @contiene_lacteos-producto
                                         :contiene_frutos_de_cascara @contiene_frutos_de_cascara-producto
                                         :contiene_apio @contiene_apio-producto
                                         :contiene_mostaza @contiene_mostaza-producto
                                         :contiene_granos_de_sesamo @contiene_granos_de_sesamo-producto
                                         :contiene_sulfitos @contiene_sulfitos-producto
                                         :contiene_moluscos @contiene_moluscos-producto
                                         :contiene_altramuces @contiene_altramuces-producto
                                         :usuario_id (js/parseInt usuario-id)}))))}
              "Guardar producto"]]]]


          "categoria"
          [:div.row {:class "divNuevo"}
           [:div.col-12 {:class "volverAtras"}
            [:button
             {:on-click #(set! (.-hash js/location) "#/administracion")}
             "Volver al panel de Administración"]]
           [:div.col-12.col-md-6 {:class "divDatosNuevos"}
            [:h1 "Inserta los datos de la nueva categoría:"]
            [:div
             [:p {:for "nombre"}
              (campo-obligatorio-label "Nombre de la categoria:" @nombre-categoria)
              [:input {:type "text"
                       :id "nombre"
                       :value @nombre-categoria
                       :on-change #(reset! nombre-categoria (-> % .-target .-value))}]]]
            [:div
             [:p {:for "descripcion"} "Descripción:"
              [:textarea {:type "text"
                       :id "descripcion"
                       :value @descripcion-categoria
                       :on-change #(reset! descripcion-categoria (-> % .-target .-value))}]]]
            [:div
             [:button
              {:on-click
               (fn []
                 (if (campo-vacio? @nombre-categoria)
                   (js/alert "Completa los campos obligatorios.")
                   (do
                     (insertar-categoria {:nombre @nombre-categoria
                                          :descripcion @descripcion-categoria
                                          :usuario_id (js/parseInt usuario-id)})
                     (reset! nombre-categoria "")
                     (reset! descripcion-categoria "")
                     (js/alert "Categoría creada correctamente."))))}
              "Crear Categoría"]]]])))))

(defn init []
  (core/verificar-sesion)
  (dom/render [page] (.getElementById js/document "app")))
(init)
