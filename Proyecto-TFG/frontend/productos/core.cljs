(ns productos.core
  (:require [reagent.core :as r]
            [app.db :refer [productos fetch-productos]]))

(defn render-producto [producto]
  [:li
   [:h3 (or (:nombre producto) "Nombre no disponible")]
   [:p (or (:tipo_plato producto) "Tipo de plato no disponible")]
   [:span (str "€" (or (:precio producto) "N/A"))]])

(defn page []
  (r/create-class
   {:component-did-mount
    (fn []
      (fetch-productos 1))  ;; ✅ Llamar con una categoría inicial
    :reagent-render
    (fn []
      (js/console.log "Estado de productos en render:" @productos)
      [:div
       [:h1 "Productos"]
       (if (empty? @productos)
         [:p "Cargando productos..."]
         [:ul
          (for [producto @productos]
            ^{:key (:id producto)} [render-producto producto])])])}))
