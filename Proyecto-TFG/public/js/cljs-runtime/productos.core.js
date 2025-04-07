goog.provide('productos.core');
productos.core.render_producto = (function productos$core$render_producto(producto){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"nombre","nombre",1047347004).cljs$core$IFn$_invoke$arity$1(producto);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "Nombre no disponible";
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"tipo_plato","tipo_plato",-1144165380).cljs$core$IFn$_invoke$arity$1(producto);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "Tipo de plato no disponible";
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),["\u20AC",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"precio","precio",-1246474385).cljs$core$IFn$_invoke$arity$1(producto);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "N/A";
}
})())].join('')], null)], null);
});
productos.core.page = (function productos$core$page(){
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
return app.db.fetch_productos((1));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
console.log("Estado de productos en render:",cljs.core.deref(app.db.productos));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Productos"], null),((cljs.core.empty_QMARK_(cljs.core.deref(app.db.productos)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Cargando productos..."], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5480__auto__ = (function productos$core$page_$_iter__13340(s__13341){
return (new cljs.core.LazySeq(null,(function (){
var s__13341__$1 = s__13341;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13341__$1);
if(temp__5804__auto__){
var s__13341__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13341__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__13341__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__13343 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__13342 = (0);
while(true){
if((i__13342 < size__5479__auto__)){
var producto = cljs.core._nth(c__5478__auto__,i__13342);
cljs.core.chunk_append(b__13343,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [productos.core.render_producto,producto], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(producto)], null)));

var G__13344 = (i__13342 + (1));
i__13342 = G__13344;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13343),productos$core$page_$_iter__13340(cljs.core.chunk_rest(s__13341__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13343),null);
}
} else {
var producto = cljs.core.first(s__13341__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [productos.core.render_producto,producto], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(producto)], null)),productos$core$page_$_iter__13340(cljs.core.rest(s__13341__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.deref(app.db.productos));
})()], null))], null);
})], null));
});

//# sourceMappingURL=productos.core.js.map
