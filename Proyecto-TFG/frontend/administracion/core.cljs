(ns administracion.core
  (:require [reagent.core :as r]
            [app.state :as state]
            [ajax.core :refer [GET POST]]
            [app.db :refer [list-productos fetch-list-productos categorias eliminar-categoria eliminar-producto fetch-list-categorias activo-producto activo-categoria]]
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

(def categoria-seleccionada (r/atom "todas"))
(defonce categoria-busqueda (r/atom ""))
(defonce producto-busqueda (r/atom ""))

(defn verificar-sesion []
  (GET "/api/admin"
    {:with-credentials? true
     :response-format :json
     :keywords? true
     :handler (fn [response]
                ;; Devuelve {:usuario {:id xx :nombre "xxxx" :rol "xxxx"}}
                (let [usuario (:usuario response)]
                  (reset! logged-in? true)
                  (reset! datos-usuario usuario)
                  (js/localStorage.setItem "id" (:id usuario))
                  (reset! sesion-verificada? true)
                  (state/set-rol (:rol usuario))))
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
       (for [{:keys [id nombre descripcion activo]} categorias-filtradas]
         ^{:key id}
         [:tr {:class (if activo "table-success" "table-danger")}
          [:td {:class "tdButton"} id] [:td nombre] [:td.d-none.d-sm-table-cell descripcion]
          [:td {:class "tdButton"}
           [:button
            {:on-click #(do
                          (set! (.-hash js/location) (str "/editar/categoria/" id)))}
            "Editar"]]
          [:td {:class "tdButton"} [:button
                                    {:on-click #(activo-categoria id)}
                                    "Activar/Desactivar categoria"]]])
       [:tr
        [:td
         [:button
          {:on-click
           #(do
              (set! (.-hash js/location) "/nuevo/categoria"))
           :class "nuevo"}
          "Añadir nueva categoria"]]]]]]))

(defn render-productos []
  (let [texto (clojure.string/lower-case @producto-busqueda)
        categoria (clojure.string/lower-case @categoria-seleccionada)
        productos-filtradas (->> @list-productos
                                 (filter #(clojure.string/includes?
                                           (clojure.string/lower-case (:nombre %))
                                           texto))
                                 (filter #(or (= categoria "todas")
                                              (= (clojure.string/lower-case (:nombre_categoria %))
                                                 categoria))))]
    [:div.col-12
     [:div.form-group.mb-3
      [:h3 {:for "filtro-categoria"} "Filtrar por categoría:"]
      [:select.form-control
       {:id "filtro-categoria"
        :value @categoria-seleccionada
        :on-change #(reset! categoria-seleccionada (-> % .-target .-value))}
       [:option {:value "todas"} "Todas las categorías"]
       (for [{:keys [id nombre]} @categorias]
         ^{:key id}
         [:option {:value nombre} nombre])]]
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
       (for [{:keys [id nombre description precio nombre_categoria tipo_plato tipo_porcion activo]} productos-filtradas]
         ^{:key id}
         [:tr {:class (if activo "table-success" "table-danger")}
          [:td {:class "id"} id] [:td nombre] [:td.d-none.d-lg-table-cell description] [:td.d-none.d-sm-table-cell (str precio " €")]
          [:td.d-none.d-lg-table-cell nombre_categoria] [:td.d-none.d-lg-table-cell tipo_plato] [:td tipo_porcion]
          [:td {:class "tdButton"}
           [:button
            {:on-click #(do
                          (set! (.-hash js/location) (str "/editar/producto/" id)))}
            "Editar"]]
          [:td {:class "tdButton"} [:button
                                    {:on-click #(activo-producto id)}
                                    "Activar/Desactivar Producto"]]])
       [:tr
        [:td
         [:button
          {:on-click
           #(do
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
     :with-credentials? true
     :handler #(do
                 ;; Se limpia cualquier estado anterior
                 (reset! auth-token nil)
                 (reset! logged-in? true)
                 (reset! datos-usuario {:nombre (:nombre %) :rol (:rol %)})
                 (js/localStorage.setItem "id" (:id %))
                 ;; Verifica el rol desde el backend
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
      [:button {:on-click #(do
                             (login)
                             (.reload js/location true))} "Entrar"]]]]])

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
  (r/with-let [_ (do
                   (reset! mostrar-productos? false)
                   (reset! mostrar-categorias? false))]
    (cond
      (not @sesion-verificada?)
      [:div "Cargando sesión..."]
      (nil? @datos-usuario)
      [:div.row {:class "panel"}
       [:div.col-12 {:class "panelBotones"}
        [:h2 "Aviso importante!!!"]
        [:p "No estás logeado, debes de cerrar sesión y logearte correctamente."]
        [:button {:on-click #(do
                               (logout)
                               (.reload js/location true))} "Cerrar sesión"]]]
      (not @logged-in?)
      [:div "Acceso denegado."]
      :else
      (let [usuario (:rol @datos-usuario)]
        (if (not= usuario "admin")
          (do
            (js/alert "Acceso denegado. Solo los administradores pueden acceder a este panel.")
            [:div "Acceso denegado."])
          ;; Si el usuario es admin, muestra el panel de administración
          [:div.row {:class "panel"}
           [:div.col-12 {:class "panelBotones"}
            [:h2 (str "Bienvenido/a, " (:nombre @datos-usuario) "!")]
            [:p (str "Tienes permisos, " usuario)]
            [:p "Tienes acceso al panel de administración."]
            [:button {:on-click #(do
                                   (logout)
                                   (.reload js/location true))} "Cerrar sesión"]
            (when (= usuario "admin")
              [:div {:class "botonesAdmin"}
               [:p "Eres administrador. Puedes editar el contenido."]
               [:button {:on-click #(do
                                      (reset! mostrar-productos? true)
                                      (reset! mostrar-categorias? false)
                                      (fetch-list-productos))} "Mostrar productos"]
               [:button {:on-click #(do
                                      (reset! mostrar-categorias? true)
                                      (reset! mostrar-productos? false)
                                      (fetch-list-categorias))} "Mostrar categorías"]
               [:button {:on-click #(set! (.-hash js/location) "#/imagenes")} "Mostrar fotografías"]])
            (when @mostrar-productos? [render-productos])
            (when @mostrar-categorias? [render-categorias])]])))))

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
