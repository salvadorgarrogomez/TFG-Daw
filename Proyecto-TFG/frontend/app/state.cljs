(ns app.state
  (:require [reagent.core :as r]))

(def current-route (r/atom nil))
