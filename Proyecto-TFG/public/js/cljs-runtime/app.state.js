goog.provide('app.state');
app.state.current_route = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
app.state.rol_usuario = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
app.state.getCookie = (function app$state$getCookie(name){
var cookies = clojure.string.split.cljs$core$IFn$_invoke$arity$2((function (){var or__5002__auto__ = document.cookie;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})(),/; /);
return cljs.core.some((function (cookie){
var vec__14680 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(cookie,/=/,(2));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14680,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14680,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,name)){
return v;
} else {
return null;
}
}),cookies);
});
app.state.set_rol = (function app$state$set_rol(rol){
return cljs.core.reset_BANG_(app.state.rol_usuario,rol);
});
app.state.rol_admin_QMARK_ = (function app$state$rol_admin_QMARK_(){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.state.rol_usuario),"admin")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.state.rol_usuario),"estandar")));
});

//# sourceMappingURL=app.state.js.map
