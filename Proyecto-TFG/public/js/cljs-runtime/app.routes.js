goog.provide('app.routes');
app.routes.routes = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Keyword(null,"view","view",1247994814),home.core.page], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/productos",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"productos","productos",-1282966179),new cljs.core.Keyword(null,"view","view",1247994814),productos.core.page], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/categorias",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"categorias","categorias",-181626523),new cljs.core.Keyword(null,"view","view",1247994814),categorias.core.page], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/nosotros",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"nosotros","nosotros",256951662),new cljs.core.Keyword(null,"view","view",1247994814),nosotros.core.page], null)], null)], null);
app.routes.router = reitit.frontend.router.cljs$core$IFn$_invoke$arity$1(app.routes.routes);
app.routes.init_router = (function app$routes$init_router(){
reitit.frontend.easy.start_BANG_(app.routes.router,(function (p1__15191_SHARP_){
return cljs.core.reset_BANG_(app.state.current_route,p1__15191_SHARP_);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"use-fragment","use-fragment",-1617737154),true], null));

if((cljs.core.deref(app.state.current_route) == null)){
return cljs.core.reset_BANG_(app.state.current_route,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"view","view",1247994814),home.core.page], null)], null));
} else {
return null;
}
});

//# sourceMappingURL=app.routes.js.map
