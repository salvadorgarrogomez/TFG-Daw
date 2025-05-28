(ns categorias.core
  (:require [reagent.core :as r]
            [reagent.dom :as dom]
            [app.db :refer [categorias fetch-categorias fetch-productos productos]]
            [clojure.string :as str]))

(defn obtener-productos [categoria-id]
  (js/console.log "Obteniendo productos para la categoría" categoria-id)
  (fetch-productos categoria-id))

(defn agrupar-productos [productos]
  (reduce (fn [acc producto]
            (let [nombre (:nombre producto)]
              (update acc nombre conj producto)))
          {} productos))

(def mensaje-categoria (r/atom ""))

(defn obtener-descripcion-categoria [categoria-id]
  (let [categoria (some #(when (= (:id %) categoria-id) %) @categorias)]
    (get categoria :descripcion)))

(defn obtener-mensaje-categoria [categoria-id]
  (let [descripcion (obtener-descripcion-categoria categoria-id)]
    (if (not-empty descripcion)
      descripcion)))

(defn page []
  (r/create-class
   {:component-did-mount
    (fn []
      (js/console.log "Componente montado. Llamando a fetch-categorias...")
      (fetch-categorias))
    :reagent-render
    (fn []
      [:div.row {:class "divProductosyCategorias"}

       ;; Visible solo en móviles (dropdown)
       [:div.col-12.d-block.d-sm-none
        [:div.dropdown
         [:button.btn.dropdown-toggle.select
          {:type "button"
           :data-bs-toggle "dropdown"
           :aria-expanded "false"}
          "Selecciona una categoría de la carta"]
         [:ul.dropdown-menu
          (for [categoria @categorias]
            ^{:key (:id categoria)}
            [:li
             [:a.dropdown-item
              {:style {:cursor "pointer"}
               :on-click #(do
                            (obtener-productos (:id categoria))
                            (reset! mensaje-categoria (obtener-mensaje-categoria (:id categoria))))}
              (:nombre categoria)]])]]]

       ;; Visible solo en pantallas ≥ sm (botones horizontales)
       [:div.col-12.d-none.d-sm-flex.justify-content-center.flex-wrap.gap-2.mt-3.divButtons
        (for [categoria @categorias]
          ^{:key (:id categoria)}
          [:button.buttons
           {:on-click #(do
                         (obtener-productos (:id categoria))
                         (reset! mensaje-categoria (obtener-mensaje-categoria (:id categoria))))}
           (:nombre categoria)])]

       [:div.col-12 {:class "mensaje-categoria"}
        (if (not-empty @mensaje-categoria)
          [:p @mensaje-categoria] "Selecciona uno de los elementos de nuestra carta.")]

       ;; Bloque de productos
       [:div.row
        [:div.col-12 {:class "divProductos"}
         (if (empty? @productos)
           [:p.col-12]
           [:ul.row {:class "productosUL"}
            (let [productos-agrupados (agrupar-productos @productos)]
              (for [[nombre lista-productos] productos-agrupados]
                ^{:key nombre}
                [:li.col-12 {:class "productosLI"}
                 [:div {:class "producto-info"}
                  [:div
                   [:h4 nombre]
                   (let [primer-producto (first lista-productos)
                         descripcion-limpia (str/trim (:description primer-producto))
                         alergenos {"contiene_gluten" "/imgs/alergenos/gluten.png"
                                    "contiene_crustaceos" "/imgs/alergenos/crustaceos.png"
                                    "contiene_huevos" "/imgs/alergenos/huevos.png"
                                    "contiene_pescado" "/imgs/alergenos/pescado.png"
                                    "contiene_cacahuetes" "/imgs/alergenos/cacahuetes.png"
                                    "contiene_soja" "/imgs/alergenos/soja.png"
                                    "contiene_lacteos" "/imgs/alergenos/lacteos.png"
                                    "contiene_frutos_de_cascara" "/imgs/alergenos/cascaras.png"
                                    "contiene_apio" "/imgs/alergenos/apio.png"
                                    "contiene_mostaza" "/imgs/alergenos/mostaza.png"
                                    "contiene_granos_de_sesamo" "/imgs/alergenos/sesamo.png"
                                    "contiene_sulfitos" "/imgs/alergenos/sulfitos.png"
                                    "contiene_moluscos" "/imgs/alergenos/moluscos.png"
                                    "contiene_altramuces" "/imgs/alergenos/altramuces.png"}
                         alergenos-activos (filter #(true? (get primer-producto (keyword (first %)))) alergenos)] ;; Filtramos los alérgenos activos
                     [:div
                      [:p {:class "description"}
                       (if (empty? descripcion-limpia)
                         " "
                         descripcion-limpia)]
                      (when (seq alergenos-activos) ;; Solo mostramos los alérgenos si hay alguno activo
                        [:div {:class "alergenos"}
                         (for [[nombre-img src-img] alergenos-activos]
                           ^{:key nombre-img}
                           [:img {:src src-img
                                  :alt nombre-img
                                  :title (str (clojure.string/replace nombre-img "_" " "))
                                  :class "alergeno-icono"}])])])]

                  (for [producto lista-productos]
                    ^{:key (:id producto)}
                    [:div {:class "producto-item"} ;; Div donde en su interior ira todo el contenido de cada producto
                     [:div {:class "precio-racion"} ;; Contenedor que agrupa precio y ración
                      [:h2 {:class "precio"} (str (:precio producto) "€ ")]
                      (let [tipo-porcion (:tipo_porcion producto)
                            producto-id (:id producto)]  ;; Se guarda el ID de producto, al dar en las imagenes, saldra un alert en el navegador para ver el id
                        (cond
                          (= tipo-porcion "Media ración")
                          [:img {:class "racion"
                                 :src "/imgs/medio-circulo.png"
                                 :alt "Media ración"
                                 :style {:cursor "pointer"}
                                 :on-click #(js/alert (str "ID del producto: " producto-id " , Media ración"))}]
                          (= tipo-porcion "Ración completa")
                          [:img {:class "racion"
                                 :src "/imgs/completo-circulo.png"
                                 :alt "Ración completa"
                                 :style {:cursor "pointer"}
                                 :on-click #(js/alert (str "ID del producto: " producto-id " , Ración completa"))}]
                          (= tipo-porcion "Por unidad")
                          [:img {:class "racion"
                                 :src "/imgs/unidad.png"
                                 :alt "/Unidad"
                                 :style {:cursor "pointer"}
                                 :on-click #(js/alert (str "ID del producto: " (:id producto) " , Por unidad"))}]
                          (= tipo-porcion "")
                          [:img {:class "racion"
                                 :src "/imgs/unidad.png"
                                 :alt ""
                                 :style {:cursor "pointer"}
                                 :on-click #(js/alert (str "ID del producto: " producto-id))}]
                          :else [:span (str "Tipo: " tipo-porcion)]))]])]]))])]]])}))


;; Inicio de la aplicación
(defn init []
  (dom/render [page] (.getElementById js/document "app")))
(init)
