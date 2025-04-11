(ns administracion.core
  (:require [reagent.core :as r]
            [ajax.core :refer [POST]]
            [reagent.dom :as dom]))

(defonce logged-in? (r/atom false))
(defonce loading? (r/atom false))
(defonce usuario (r/atom ""))
(defonce contrasenia (r/atom ""))
(defonce datos-usuario (r/atom {:nombre nil :rol nil}))
(defonce auth-token (r/atom nil))

(defn login []
  (println "Usuario:" @usuario " Contraseña:" @contrasenia)
  (reset! loading? true)
  (POST "/api/login-admin"
    {:params {:nombre @usuario
              :contrasenia @contrasenia}
     :format :json
     :response-format :json
     :keywords? true
     :handler #(do
                 (println "Respuesta del servidor: " %)
                 (reset! auth-token (:token %))
                 (reset! logged-in? true)
                 (reset! datos-usuario {:nombre (:nombre %) :rol (:rol %)}))
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
  (reset! datos-usuario {:nombre nil :rol nil}))

(defn admin-panel []
  [:div {:class "panel"}
   [:h2 (str "Bienvenido, " (:nombre @datos-usuario) "!")]
   [:p (str "Tu rol es: " (:rol @datos-usuario))]
   [:p "Tienes acceso al panel de administración."]
   [:button {:on-click logout} "Cerrar sesión"]
   (when (= (:rol @datos-usuario) "administrador")
     [:p "Eres administrador. Puedes editar el contenido."])])

(defn page []
  (if @logged-in?
    [admin-panel]
    [login-form]))

;; Montar la aplicación en el DOM
(defn init []
  (dom/render [page] (.getElementById js/document "app")))  ;; Usa reagent.dom/render

;; Llamar la función init para iniciar la aplicación
(init)
