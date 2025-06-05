(ns administracion.core
  (:require [reagent.core :as r]
            [app.state :as state]
            [ajax.core :refer [GET POST]]
            [app.db :refer [list-productos fetch-list-productos categorias
                            fetch-list-categorias activo-producto activo-categoria descargar-pdf]]
            [reagent.dom :as dom]
            [reitit.frontend.easy :as rfe]))

;; Estado global de la aplicación: contiene la sesión del usuario, datos visibles, filtros y datos cargados
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

;; Llamada a la API, para veficiar en caso de recarga de la pagina web como con F5, se compruebe si la sesión es correcta, enviando la cookie al backend para su comprobación
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

;; Metodo, para mostrar una tabla con todas las categorias de la base de datos, esto aparece al darle al boton para este proposito.
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
     ;; Inicialización de la tabla
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
         ;; Boton, que redirige la vista web a otra vista disponible, donde se renderizara otro contenido
         [:button
          {:on-click
           #(do
              (set! (.-hash js/location) "/nuevo/categoria"))
           :class "nuevo"}
          "Añadir nueva categoria"]]]]]]))

;; Metodo, para mostrar una tabla con todos las productos de la base de datos, esto aparece al darle al boton para este proposito.
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
        ;; Selector, para seleccionar la categoria y filtrar los productos en base a ella
        [:select.form-control
         {:id "filtro-categoria"
          :value @categoria-seleccionada
          :on-change #(reset! categoria-seleccionada (-> % .-target .-value))}
         [:option {:value "todas"} "Todas las categorías"]
         (for [{:keys [id nombre]} @categorias]
           ^{:key id}
           [:option {:value nombre} nombre])]]
       ;; Boton para generar un PDF, consumiendo un metodo asignado en app/db, que hace una llamada a la api, para generarlo
       [:button
        {:on-click
         #(if (empty? productos-ids)
            (js/alert "No hay productos seleccionados para generar el PDF")
            (descargar-pdf productos-ids @categoria-seleccionada))
         :class "pdf"}
        "Generar PDF de la categoria seleccionada"]
       [:h4 "Lista de productos"]
       ;; Caja de busqueda por nombre
       [:input.form-control.mb-3
        {:type "text"
         :placeholder "Buscar producto por nombre..."
         :value @producto-busqueda
         :on-change #(reset! producto-busqueda (-> % .-target .-value))}]
       ;; Inicialización de la tabla donde se mostraran todos los productos
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
           ;; Boton, que redirige la vista web a otra vista disponible, donde se renderizara otro contenido
           [:button
            {:on-click
             #(do
                (set! (.-hash js/location) "/nuevo/producto"))
             :class "nuevo"}
            "Añadir nuevo producto"]]]]]])))

;; Función para hacer llamada a la API y verificar si las credenciales introducidas por el usuario son correctas, validas.
(defn login []
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
                 (verificar-sesion))
     :error-handler #(do
                       (println "Error en la solicitud: " %)
                       (js/alert "Credenciales incorrectas. Prueba de nuevo o ponte en contacto con el Administrador del sistema.")
                       (reset! loading? false))}))

;; Formulario, donde el usuario introducira los datos, despues se hace llamada al metodo "login" y se comprueba si son correctos
(defn login-form []
  (r/create-class
   {:component-did-mount
    (fn []
      ;; Al clickar en el Enter del teclado, se ejecuta el boton de Entrar, para validar el Login
      (let [handler (fn [e]
                      (when (and (= (.-key e) "Enter"))
                        (login)))]
        (aset js/window "enterKeyHandler" handler)
        (.addEventListener js/document "keydown" handler)))
    :component-will-unmount
    (fn []
      ;; Se limpia el event listener al desmontar
      (when-let [handler (aget js/window "enterKeyHandler")]
        (.removeEventListener js/document "keydown" handler)
        (aset js/window "enterKeyHandler" nil)))
    :reagent-render
    (fn []
      ;; Estructura que se vera en el navegador, con input para introducir datos
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
          [:button {:on-click #(login)} "Entrar"]]]]])}))

;; Metodo que hace llamada al backend, para cerrar la sesion y limpiar el localstorage y las coookies
(defn logout []
  (POST "/api/logout"
    {:with-credentials? true
     :handler (fn [_]
                (reset! logged-in? false)
                (reset! datos-usuario {:nombre nil :rol nil})
                (js/localStorage.removeItem "id"))
     :error-handler (fn [e]
                      (js/console.log "Error cerrando sesión" e))}))

;; Funcion, con botones de funcionalidad, cada boton al clickar mostrara un dato u otro
(defn botones-admin []
  [:div {:class "botonesAdmin"}
   [:p "Eres administrador. Puedes editar el contenido."]
   [:button {:on-click #(do
                          (reset! mostrar-productos? true)
                          (reset! mostrar-categorias? false)
                          (fetch-list-productos))} "Mostrar Productos"]
   [:button {:on-click #(do
                          (reset! mostrar-categorias? true)
                          (reset! mostrar-productos? false)
                          (fetch-list-categorias))} "Mostrar Categorías"]
   [:button {:on-click #(set! (.-hash js/location) "#/imagenes")} "Mostrar fotografías"]
   [:button {:on-click #(set! (.-hash js/location) "#/comandas")} "Comandas"]])

(defn botones-user []
  [:div {:class "botonesUser"}
   [:p "Tienes acceso, puedes apuntar las comandas de los clientes."]
   [:button {:on-click #(set! (.-hash js/location) "#/comandas")} "Comandas"]])

;; Panel, de inicio sesión, si las credenciales son correctas se muestran los datos de sesion y los botones, en caso de ser erroneas mostrara el aviso de error.
(defn admin-panel []
  (r/with-let [_ (do
                   (reset! mostrar-productos? false)
                   (reset! mostrar-categorias? false))]
    (cond
      (not @sesion-verificada?) [:div "Cargando sesión..."]
      (nil? @datos-usuario)
      [:div.row.panel
       [:div.col-12.panelBotones
        [:h2 "Aviso importante!!!"]
        [:p "No estás logeado, debes de cerrar sesión y logearte correctamente."]
        [:button {:on-click #(do (logout) (.reload js/location true))} "Cerrar sesión"]]]
      (not @logged-in?) [:div "Acceso denegado."]
      :else
      (let [usuario (:rol @datos-usuario)]
        [:div.row.panel
         [:div.col-12.panelBotones
          [:h2 (str "Bienvenido/a, " (:nombre @datos-usuario) "!")]
          [:p (str "Tienes permisos, " usuario)]
          [:button {:on-click #(do (logout) (.reload js/location true))} "Cerrar sesión"]
          ;; Funciones de rol, para mostrar unos botones u otros
          (cond
            (state/rol-admin?) [botones-admin]
            (state/rol-estandar?) [botones-user]
            :else [:div [:p "Rol no reconocido."]])]
         ;; Panel dinámico
         (when @mostrar-productos? [render-productos])
         (when @mostrar-categorias? [render-categorias])]))))

;; Funcion page, para mostrar los componentes de la vista
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
