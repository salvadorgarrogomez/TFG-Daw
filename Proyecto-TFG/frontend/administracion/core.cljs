(ns administracion.core
  (:require [reagent.core :as r]
            [ajax.core :refer [POST]]
            [app.db :refer [list-productos fetch-list-productos categorias fetch-list-categorias]]
            [reagent.dom :as dom]
            [reitit.frontend.easy :as rfe]))

(defonce logged-in? (r/atom false))
(defonce loading? (r/atom false))
(defonce usuario (r/atom ""))
(defonce contrasenia (r/atom ""))
(defonce datos-usuario (r/atom {:nombre nil :rol nil}))
(defonce auth-token (r/atom nil))
(defonce mostrar-productos? (r/atom false))
(defonce mostrar-categorias? (r/atom false))

(defonce categoria-busqueda (r/atom ""))
(defonce producto-busqueda (r/atom ""))

(defn revisar-sesion []
  (let [usuario-almacenado (.getItem js/localStorage "usuario")
        rol-almacenado (.getItem js/localStorage "rol")
        token-almacenado (.getItem js/localStorage "token")]
    (when (and usuario-almacenado rol-almacenado token-almacenado)
      (reset! usuario usuario-almacenado)
      (reset! auth-token token-almacenado)
      (reset! logged-in? true)
      (reset! datos-usuario {:nombre usuario-almacenado :rol rol-almacenado})
      true)))

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
            {:on-click #(set! (.-hash js/location) (str "/editar/categoria/" id))}
            "Editar"]]
          [:td {:class "tdButton"} [:button
                                    "Eliminar"]]])
       [:tr
        [:td [:button {:class "nuevo"}
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
            {:on-click #(set! (.-hash js/location) (str "/editar/producto/" id))}
            "Editar"]]
          [:td {:class "tdButton"} [:button
                                    "Eliminar"]]])
       [:tr
        [:td [:button {:class "nuevo"}
              "Añadir nuevo producto"]]]]]]))

(defn login []
  (POST "/api/login-admin"
    {:params {:nombre @usuario
              :contrasenia @contrasenia}
     :format :json
     :response-format :json
     :keywords? true
     :handler #(do
                 (let [{:keys [nombre rol token]} %]
                   ;; Limpia todo antes por si había sesión anterior
                   (.removeItem js/localStorage "usuario")
                   (.removeItem js/localStorage "rol")
                   (.removeItem js/localStorage "token")
                   ;; Guarda los nuevos datos
                   (.setItem js/localStorage "usuario" nombre)
                   (.setItem js/localStorage "rol" rol)
                   (.setItem js/localStorage "token" token)
                   ;; Actualiza los átomos de la sesión
                   (reset! auth-token token)
                   (reset! logged-in? true)
                   (reset! datos-usuario {:nombre nombre :rol rol})))
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
  (reset! logged-in? false)
  (reset! auth-token nil)
  (reset! datos-usuario {:nombre nil :rol nil})
  (.removeItem js/localStorage "usuario")
  (.removeItem js/localStorage "token")
  (.removeItem js/localStorage "rol"))


(defn admin-panel []
  (fetch-list-productos)
  (fetch-list-categorias)
  [:div.row {:class "panel"}
   [:div.col-12 {:class "panelBotones"}
    [:h2 (str "Bienvenido, " (:nombre @datos-usuario) "!")]
    [:p (str "Tu rol es: " (:rol @datos-usuario))]
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
                              (fetch-list-productos))} "Mostrar productos"]
       [:button {:on-click #(do
                              (reset! mostrar-categorias? true)
                              (reset! mostrar-productos? false)
                              (fetch-list-categorias))} "Mostrar categorias"]
       [:button {:on-click #(do
                              (reset! mostrar-categorias? true)
                              (reset! mostrar-productos? false)
                              (fetch-list-categorias))} "Mostrar fotografias"]])]
   (when @mostrar-productos?
     [render-productos])
   (when @mostrar-categorias?
     [render-categorias])])

(defn page []
  (if @logged-in?
    [admin-panel]
    [login-form]))

;; Monta la aplicación en el DOM
(defn init []
  (revisar-sesion)
  (dom/render [page] (.getElementById js/document "app")))

;; Llamar la función init para iniciar la aplicación
(init)
