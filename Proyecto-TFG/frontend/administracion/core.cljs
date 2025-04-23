(ns administracion.core
  (:require [reagent.core :as r]
            [app.state :as state]
            [ajax.core :refer [GET POST]]
            [app.db :refer [list-productos fetch-list-productos categorias fetch-list-categorias eliminar-categoria eliminar-producto]]
            [reagent.dom :as dom]
            [reitit.frontend.easy :as rfe]))

(defonce logged-in? (r/atom nil))
(defonce loading? (r/atom false))
(defonce usuario (r/atom ""))
(defonce contrasenia (r/atom ""))
(def sesion-verificada? (r/atom false))
(defonce datos-usuario (r/atom nil))
(defonce auth-token (r/atom nil))
(defonce mostrar-productos? (r/atom false))
(defonce mostrar-categorias? (r/atom false))

(defonce categoria-busqueda (r/atom ""))
(defonce producto-busqueda (r/atom ""))

(defn verificar-sesion []
  (GET "/api/admin"
    {:with-credentials? true
     :handler (fn [response]
                (reset! logged-in? true)
                (reset! datos-usuario (:usuario response))
                (reset! sesion-verificada? true))
     :error-handler (fn [_]
                      (reset! logged-in? false)
                      (reset! datos-usuario nil)
                      (reset! sesion-verificada? true))}))

(defn render-categorias []
  (let [texto (clojure.string/lower-case @categoria-busqueda)
        categorias-filtradas (filter #(clojure.string/includes?
                                       (clojure.string/lower-case (:nombre %))
                                       texto)
                                     @categorias)]
    [:div.col-12
     [:h3 "Lista de categorias"]
     ;; Caja de búsqueda
     [:input.form-control.mb-3
      {:type "text"
       :placeholder "Buscar categoría por nombre..."
       :value @categoria-busqueda
       :on-change #(reset! categoria-busqueda (-> % .-target .-value))}]
     [:table {:class "table table-striped"}
      [:thead
       [:tr
        [:th {:class "id"} "ID"] [:th "Nombre"] [:th.d-none.d-sm-table-cell "Descripcion"] [:th {:class "tdButton"} "Editar"] [:th {:class "tdButton"} "Eliminar"]]]
      [:tbody
       (for [{:keys [id nombre descripcion]} categorias-filtradas]
         ^{:key id}
         [:tr
          [:td {:class "tdButton"} id] [:td nombre] [:td.d-none.d-sm-table-cell descripcion]
          [:td {:class "tdButton"}
           [:button
            {:on-click #(do
                          (reset! app.state/acceso-editar? true)
                          (set! (.-hash js/location) (str "/editar/categoria/" id)))}
            "Editar"]]
          [:td {:class "tdButton"} [:button
                                    {:on-click #(eliminar-categoria id)}
                                    "Eliminar"]]])
       [:tr
        [:td
         [:button
          {:on-click
           #(do
              (reset! app.state/acceso-nuevo? true)
              (set! (.-hash js/location) "/nuevo/categoria"))
           :class "nuevo"}
          "Añadir nueva categoria"]]]]]]))

(defn render-productos []
  (let [texto (clojure.string/lower-case @producto-busqueda)
        productos-filtradas (filter #(clojure.string/includes?
                                      (clojure.string/lower-case (:nombre %))
                                      texto)
                                    @list-productos)]
    [:div.col-12
     [:h3 "Lista de productos"]
     [:input.form-control.mb-3
      {:type "text"
       :placeholder "Buscar producto por nombre..."
       :value @producto-busqueda
       :on-change #(reset! producto-busqueda (-> % .-target .-value))}]
     [:table {:class "table table-striped"}
      [:thead
       [:tr
        [:th {:class "id"} "ID"] [:th "Nombre"] [:th.d-none.d-lg-table-cell "Descripcion"] [:th.d-none.d-sm-table-cell "Precio"]
        [:th.d-none.d-lg-table-cell "Categoría"] [:th.d-none.d-lg-table-cell "Tipo de plato"] [:th "Tipo de porción"]
        [:th "Editar"] [:th "Eliminar"]]]
      [:tbody
       (for [{:keys [id nombre description precio nombre_categoria tipo_plato tipo_porcion]} productos-filtradas]
         ^{:key id}
         [:tr
          [:td {:class "id"} id] [:td nombre] [:td.d-none.d-lg-table-cell description] [:td.d-none.d-sm-table-cell (str precio " €")]
          [:td.d-none.d-lg-table-cell nombre_categoria] [:td.d-none.d-lg-table-cell tipo_plato] [:td tipo_porcion]
          [:td {:class "tdButton"}
           [:button
            {:on-click #(do
                          (reset! app.state/acceso-editar? true)
                          (set! (.-hash js/location) (str "/editar/producto/" id)))}
            "Editar"]]
          [:td {:class "tdButton"} [:button
                                    {:on-click #(eliminar-producto id)}
                                    "Eliminar"]]])
       [:tr
        [:td
         [:button
          {:on-click
           #(do
              (reset! app.state/acceso-nuevo? true)
              (set! (.-hash js/location) "/nuevo/producto"))
           :class "nuevo"}
          "Añadir nuevo producto"]]]]]]))

(defn login []
  (POST "/api/login"
    {:params {:nombre @usuario
              :contrasenia @contrasenia}
     :format :json
     :response-format :json
     :keywords? true
     :with-credentials? true ;; <-- también aquí para que Laravel devuelva la cookie
     :handler #(do
                 ;; Limpia cualquier estado anterior
                 (reset! auth-token nil)
                 (reset! logged-in? true)
                 (reset! datos-usuario {:nombre (:nombre %) :rol (:rol %)})
                 (js/localStorage.setItem "id" (:id %))

                 ;; Y ahora verifica el rol desde el backend
                 (GET "/api/admin"
                   {:with-credentials? true
                    :handler (fn [resp]
                               (js/console.log "Verificado como admin" resp))
                    :error-handler (fn [err]
                                     (js/console.log "No eres admin" err))}))

     :error-handler #(do
                       (println "Error en la solicitud: " %)
                       (js/alert "Credenciales incorrectas.")
                       (reset! loading? false))}))

(defn login-form []
  [:div.row {:class "administracion"}
   [:div {:class "entrada"}
    [:div.col-12
     [:p "Nombre de usuario: "
      [:input {:type "text"
               :placeholder "Ingrese su nombre de usuario"
               :value @usuario
               :on-change #(reset! usuario (-> % .-target .-value))}]]
     [:p "Contraseña: "
      [:input {:type "password"
               :placeholder "Ingrese su contraseña"
               :value @contrasenia
               :on-change #(reset! contrasenia (-> % .-target .-value))}]]]
    [:div.row {:class "rowButton"}
     [:div.col-12
      [:button {:on-click login} "Entrar"]]]]])

(defn logout []
  (POST "/api/logout"
    {:with-credentials? true
     :handler (fn [_]
                (reset! logged-in? false)
                (reset! datos-usuario {:nombre nil :rol nil})
                (js/localStorage.removeItem "id"))
     :error-handler (fn [e]
                      (js/console.log "Error cerrando sesión" e))}))

(defn admin-panel []
  (cond
    (not @sesion-verificada?)
    [:div "Cargando sesión..."]

    (nil? @datos-usuario)
    [:div.row {:class "panel"}
     [:div.col-12 {:class "panelBotones"}
      [:h2 "Aviso importante!!!"]
      [:p "No estas logeado, debes de cerrar sesion y logearte correctamente."]
      [:button {:on-click #(do
                             (logout)
                             (.reload js/location true))}
       "Cerrar sesión"]]]

    (not @logged-in?)  ;; ya se verificó y no está logueado
    [:div "Acceso denegado."]

    :else ;; ya está todo listo
    [:div.row {:class "panel"}
     [:div.col-12 {:class "panelBotones"}
      [:h2 (str "Bienvenido/a, " (:nombre @datos-usuario) "!")]
      [:p (str "Tienes permisos, " (:rol @datos-usuario))]
      [:p "Tienes acceso al panel de administración."]
      [:button {:on-click #(do
                             (logout)
                             (.reload js/location true))}
       "Cerrar sesión"]
      (when (= (:rol @datos-usuario) "admin")
        [:div {:class "botonesAdmin"}
         [:p "Eres administrador. Puedes editar el contenido."]
         [:button {:on-click #(do
                                (reset! mostrar-productos? true)
                                (reset! mostrar-categorias? false)
                                (fetch-list-productos))}
          "Mostrar productos"]
         [:button {:on-click #(do
                                (reset! mostrar-categorias? true)
                                (reset! mostrar-productos? false)
                                (fetch-list-categorias))}
          "Mostrar categorías"]
         [:button
          {:on-click #(do
                        (reset! app.state/acceso-imagenes? true)
                        (set! (.-hash js/location) "#/imagenes"))}
          "Mostrar fotografías"]])]

     (when @mostrar-productos?
       [render-productos])
     (when @mostrar-categorias?
       [render-categorias])]))


(defn page []
  (cond
    (not @sesion-verificada?) [:p {:class "administracion"} "Verificando sesión..."]
    @logged-in? [admin-panel]
    :else [login-form]))


;; Monta la aplicación en el DOM
(defn init []
  (verificar-sesion)
  (dom/render [page] (.getElementById js/document "app")))

;; Llamar la función init para iniciar la aplicación
(init)
