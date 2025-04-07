goog.provide('productos.views');
productos.views.productos = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
productos.views.fetch_productos = (function productos$views$fetch_productos(){
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic("/api/productos/",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),false,new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null),(function (response){
console.log("Respuesta completa de la API:",response);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response))){
var productos_obtenidos = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(response);
if(cljs.core.seq(productos_obtenidos)){
console.log("Productos obtenidos:",productos_obtenidos);

return cljs.core.reset_BANG_(productos.views.productos,productos_obtenidos);
} else {
return console.warn("No se encontraron productos en la respuesta");
}
} else {
return console.error("Error al obtener productos",new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
}
})], 0));
});
productos.views.page = (function productos$views$page(){
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
return productos.views.fetch_productos();
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
console.log("Estado de productos en render:",cljs.core.deref(productos.views.productos));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Productos"], null),((cljs.core.empty_QMARK_(cljs.core.deref(productos.views.productos)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Cargando productos..."], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5480__auto__ = (function productos$views$page_$_iter__13327(s__13328){
return (new cljs.core.LazySeq(null,(function (){
var s__13328__$1 = s__13328;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13328__$1);
if(temp__5804__auto__){
var s__13328__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13328__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__13328__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__13330 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__13329 = (0);
while(true){
if((i__13329 < size__5479__auto__)){
var producto = cljs.core._nth(c__5478__auto__,i__13329);
cljs.core.chunk_append(b__13330,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.Keyword(null,"nombre","nombre",1047347004).cljs$core$IFn$_invoke$arity$1(producto)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"tipo_plato","tipo_plato",-1144165380).cljs$core$IFn$_invoke$arity$1(producto)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),["\u20AC",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"precio","precio",-1246474385).cljs$core$IFn$_invoke$arity$1(producto))].join('')], null)], null));

var G__13331 = (i__13329 + (1));
i__13329 = G__13331;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13330),productos$views$page_$_iter__13327(cljs.core.chunk_rest(s__13328__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13330),null);
}
} else {
var producto = cljs.core.first(s__13328__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.Keyword(null,"nombre","nombre",1047347004).cljs$core$IFn$_invoke$arity$1(producto)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"tipo_plato","tipo_plato",-1144165380).cljs$core$IFn$_invoke$arity$1(producto)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),["\u20AC",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"precio","precio",-1246474385).cljs$core$IFn$_invoke$arity$1(producto))].join('')], null)], null),productos$views$page_$_iter__13327(cljs.core.rest(s__13328__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.deref(productos.views.productos));
})()], null))], null);
})], null));
});
productos.views.render_producto = (function productos$views$render_producto(producto){
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

//# sourceMappingURL=productos.views.js.map
