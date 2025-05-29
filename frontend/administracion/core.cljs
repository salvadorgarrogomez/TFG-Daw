(ns administracion.core
  (:require [reagent.core :as r]
            [app.state :as state]
            [ajax.core :refer [GET POST]]
            [app.db :refer [list-productos fetch-list-productos categorias eliminar-categoria
                            eliminar-producto fetch-list-categorias activo-producto activo-categoria descargar-pdf]]
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
(defonce productos (r/atom []))


(defn verificar-sesion []
  (GET "/api/usuario"
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
    [:div.col-12.table-responsive
     [:h4 "Lista de categorias"]
     ;; Caja de búsqueda
     [:input.form-control.mb-3
      {:type "text"
       :placeholder "Buscar categoría por nombre..."
       :value @categoria-busqueda
       :on-change #(reset! categoria-busqueda (-> % .-target .-value))}]
     [:table {:class "table table-striped"}
      [:thead
       [:tr
        [:th {:class "id"} "ID"] [:th "Nombre"] [:th.d-none.d-sm-table-cell "Descripcion"] [:th {:class "tdButton"} "Editar"] [:th {:class "tdButton"} "Activar/Desactivar"]]]
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
                                    "✔️/❌"]]])
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
        productos-filtrados (->> @list-productos
                                 (filter #(clojure.string/includes?
                                           (clojure.string/lower-case (:nombre %))
                                           texto))
                                 (filter #(or (= categoria "todas")
                                              (= (clojure.string/lower-case (:nombre_categoria %))
                                                 categoria))))]
    (let [productos-ids (map :id productos-filtrados)]
      [:div.col-12.table-responsive
       [:div.form-group.mb-3
        [:h4 {:for "filtro-categoria"} "Filtrar por categoría:"]
        [:select.form-control
         {:id "filtro-categoria"
          :value @categoria-seleccionada
          :on-change #(reset! categoria-seleccionada (-> % .-target .-value))}
         [:option {:value "todas"} "Todas las categorías"]
         (for [{:keys [id nombre]} @categorias]
           ^{:key id}
           [:option {:value nombre} nombre])]]
       [:button
        {:on-click
         #(if (empty? productos-ids)
            (js/alert "No hay productos seleccionados para generar el PDF")
            (descargar-pdf productos-ids @categoria-seleccionada))
         :class "pdf"}
        "Generar PDF de la categoria seleccionada"]
       [:h4 "Lista de productos"]
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
          [:th "Editar"] [:th "Activar/Desactivar"]]]
        [:tbody
         (for [{:keys [id nombre description precio nombre_categoria tipo_plato tipo_porcion activo]} productos-filtrados]
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
                                      "✔️/❌"]]])
         [:tr
          [:td
           [:button
            {:on-click
             #(do
                (set! (.-hash js/location) "/nuevo/producto"))
             :class "nuevo"}
            "Añadir nuevo producto"]]]]]])))


(defn login []
  (js/console.log "Enviando login con:" @usuario @contrasenia)
    (POST "/api/login"
      {:params {:nombre @usuario
                :contrasenia @contrasenia}
      :format :json
      :response-format :json
      :keywords? true
      :with-credentials? true
      :handler #(do
                  (reset! auth-token nil)
                  (reset! logged-in? true)
                  (reset! datos-usuario {:nombre (:nombre %) :rol (:rol %)})
                  (js/localStorage.setItem "id" (:id %))
                  (reset! sesion-verificada? true)
                  (when (= (:rol %) "admin")
                    (js/console.log "Es admin")))

      :error-handler #(do
                        (println "Error en la solicitud: " %)
                        (js/alert "Credenciales incorrectas. Prueba de nuevo o ponte en contacto con el Administrador del sistema.")
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
      {:on-key-down (fn [e]
                      (when (= (.-keyCode e) 13)  ;; 13 es el código de la tecla Enter
                        (do
                          (login)
                          (.reload js/location true))))}
      [:button {:on-click #(do
                             (login))} "Entrar"]]]]])

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
        [:div.row {:class "panel"}
         [:div.col-12 {:class "panelBotones"}
          [:h2 (str "Bienvenido/a, " (:nombre @datos-usuario) "!")]
          [:p (str "Tienes permisos, " usuario)]
          [:button {:on-click #(do
                                 (logout)
                                 (.reload js/location true))} "Cerrar sesión"]

          ;; Mostrar panel según el rol
          (if (= usuario "admin")
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
             [:button {:on-click #(set! (.-hash js/location) "#/imagenes")} "Mostrar fotografías"]
             [:button {:on-click #(set! (.-hash js/location) "#/comandas")} "Comandas"]]
            ;; Si no es admin, solo mostramos botón de comandas
            [:div {:class "botonesUser"}
             [:p "Tienes acceso, puedes apuntar las comandas de los clientes."]
             [:button {:on-click #(set! (.-hash js/location) "#/comandas")} "Comandas"]])]

         ;; Panel dinámico
         (when @mostrar-productos? [render-productos])
         (when @mostrar-categorias? [render-categorias])]))))


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
