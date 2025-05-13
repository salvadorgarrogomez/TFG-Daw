(ns comandas.core
  (:require [reagent.core :as r]
            [app.state :as state]))

(defn page []
  (if (state/rol-admin?)
    (r/create-class
     {:component-did-mount
      (fn []
        (js/console.log "Componente montado."))
      :reagent-render
      (fn []
        [:div.row {:class "divPanelImagenes"}
         [:div.col-12 {:class "volverAtras"}
          [:button
           {:on-click #(set! (.-hash js/location) "#/administracion")}
           "Volver al panel de Administración"]]
         [:div.row {:class "adminImagenes"}
          [:div.col.12
           [:h1 "Apuntar comandas:"]]]])})
    ;; Mostrar mensaje si el acceso no está permitido
    [:div.alert.alert-danger
     [:h4 "⚠️ Acceso denegado"]
     [:p "Para acceder a esta seccion, debes logearte y acceder desde su boton determinado."]
     [:button
      {:on-click #(set! (.-hash js/location) "#/administracion")}
      "LOGIN"]]))