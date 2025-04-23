goog.provide('app.state');
app.state.current_route = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
app.state.acceso_imagenes_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
app.state.acceso_editar_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
app.state.acceso_nuevo_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
app.state.getCookie = (function app$state$getCookie(name){
var cookies = clojure.string.split.cljs$core$IFn$_invoke$arity$2((function (){var or__5002__auto__ = document.cookie;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})(),/; /);
return cljs.core.some((function (cookie){
var vec__42335 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(cookie,/=/,(2));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42335,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42335,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,name)){
return v;
} else {
return null;
}
}),cookies);
});

//# sourceMappingURL=app.state.js.map
