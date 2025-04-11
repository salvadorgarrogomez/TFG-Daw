(ns privacidad.core
  (:require [reagent.core :as r]))

(defn page []
  [:div.row {:class "divPrivacidad"}
   [:div.col-12
    [:h1 "Política de privacidad"]
    [:h3 "Introducción"]
    [:p "Bienvenido a "
     [:a {:href "https://barelescobar.netlify.app"} "barelescobar.netlify.app"]
     " En cumplimiento con el Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica de Protección de Datos y Garantía de Derechos Digitales (LOPDGDD), nos comprometemos a proteger tu privacidad. 
       Esta política de privacidad explica cómo recopilamos, utilizamos y protegemos tu información personal."]
    [:h3 "Información que Recopilamos"]
    [:p "Como sitio web estático, no recopilamos información personal directa de nuestros visitantes. 
         Sin embargo, utilizamos cookies y tecnologías similares para mejorar la funcionalidad del sitio y analizar el tráfico."]
    [:h3 "Información que Recopilamos"]
    [:p "Como sitio web estático, no recopilamos información personal directa de nuestros visitantes. 
             Sin embargo, utilizamos cookies y tecnologías similares para mejorar la funcionalidad del sitio y analizar el tráfico."]
    [:h3 "Uso de la Información"]
    [:p "La información recopilada a través de cookies se utiliza para analizar el tráfico del sitio y mejorar la experiencia del usuario. 
         No utilizamos esta información para fines de marketing o publicidad directa."]
    [:h3 "Cookies y Tecnologías Similares"]
    [:p "Utilizamos cookies para mejorar la funcionalidad de nuestro sitio web y analizar el tráfico. Antes de instalar cookies no esenciales, 
         obtendremos tu consentimiento mediante una notificación en el sitio web. Puedes gestionar tus preferencias de cookies a través de la configuración de tu navegador."]
    [:h3 "Compartición de Información"]
    [:p "No compartimos información personal con terceros. La información recopilada por cookies de terceros está sujeta a sus políticas de privacidad."]
    [:h3 "Seguridad de los Datos"]
    [:p "Implementamos medidas de seguridad para proteger la información recopilada, pero ten en cuenta que ningún sistema de transmisión o almacenamiento de datos es completamente seguro."]
    [:h3 "Derechos del Usuario"]
    [:p "De acuerdo con el RGPD, tienes derecho a acceder, rectificar, cancelar y oponerte al tratamiento de tus datos personales. Para ejercer estos derechos o si tienes alguna consulta relacionada con la protección de datos, por favor, contacta con nosotros en: Email: "
     [:a {:href "mailto:salvaxggz@gmail.com"} "salvaxggz@gmail.com"]]
    [:h3 "Cambios en la Política de Privacidad"]
    [:p "Podemos actualizar esta política de privacidad de vez en cuando. Cualquier cambio se publicará en esta página."]
    [:p {:class "footer"}
     [:a {:href "https://barelescobar.netlify.app"} "barelescobar.netlify.app"]
     " Todos los derechos reservados."]]])
