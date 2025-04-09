(ns app.state
  (:require [reagent.core :as r]))

;; Estado para guardar la ruta, y asi que se muestre como pagina principal el primer valor
(def current-route (r/atom nil))
