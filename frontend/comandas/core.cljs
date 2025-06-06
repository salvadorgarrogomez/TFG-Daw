(ns comandas.core
  (:require [reagent.core :as r]
            [reagent.dom :as dom]
            [app.state :as state]
            [administracion.core :as core]))

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
      (not (or (state/rol-admin?) (state/rol-estandar?)))
      (do
        (set! (.-hash js/location) "#/administracion")
        nil)
      ;; Si todo está bien, muestra el contenido
      :else
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
            [:div.col-12
             [:h1 "Apuntar comandas:"]]]])})))) 

(defn init []
  (core/verificar-sesion)
  (dom/render [page] (.getElementById js/document "app")))

(init)
