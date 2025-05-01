goog.provide('home.core');
home.core.imagenes_carrusel = (function home$core$imagenes_carrusel(){
var imagenes = cljs.core.deref(app.db.imagenes);
if(cljs.core.empty_QMARK_(imagenes)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"No se encontraron im\u00E1genes."], null);
} else {
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.carousel","div.carousel",-760498478),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"carouselExampleControls",new cljs.core.Keyword(null,"class","class",-2030961996),"carousel slide",new cljs.core.Keyword(null,"data-ride","data-ride",147157853),"carousel"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.carousel-inner","div.carousel-inner",2016287053),(function (){var iter__5480__auto__ = (function home$core$imagenes_carrusel_$_iter__15352(s__15353){
return (new cljs.core.LazySeq(null,(function (){
var s__15353__$1 = s__15353;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__15353__$1);
if(temp__5804__auto__){
var s__15353__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15353__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__15353__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__15355 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__15354 = (0);
while(true){
if((i__15354 < size__5479__auto__)){
var map__15360 = cljs.core._nth(c__5478__auto__,i__15354);
var map__15360__$1 = cljs.core.__destructure_map(map__15360);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15360__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var descripcion = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15360__$1,new cljs.core.Keyword(null,"descripcion","descripcion",-1196002063));
var imagen_base64 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15360__$1,new cljs.core.Keyword(null,"imagen_base64","imagen_base64",-2118761036));
var mime_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15360__$1,new cljs.core.Keyword(null,"mime_type","mime_type",1613436611));
cljs.core.chunk_append(b__15355,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.carousel-item","div.carousel-item",-888860857),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),imagenes))))?"active":"")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"d-flex justify-content-center"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),["data:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mime_type),";base64,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(imagen_base64)].join(''),new cljs.core.Keyword(null,"alt","alt",-3214426),descripcion], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__15450 = (i__15354 + (1));
i__15354 = G__15450;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15355),home$core$imagenes_carrusel_$_iter__15352(cljs.core.chunk_rest(s__15353__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15355),null);
}
} else {
var map__15369 = cljs.core.first(s__15353__$2);
var map__15369__$1 = cljs.core.__destructure_map(map__15369);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15369__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var descripcion = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15369__$1,new cljs.core.Keyword(null,"descripcion","descripcion",-1196002063));
var imagen_base64 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15369__$1,new cljs.core.Keyword(null,"imagen_base64","imagen_base64",-2118761036));
var mime_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15369__$1,new cljs.core.Keyword(null,"mime_type","mime_type",1613436611));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.carousel-item","div.carousel-item",-888860857),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),imagenes))))?"active":"")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"d-flex justify-content-center"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),["data:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mime_type),";base64,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(imagen_base64)].join(''),new cljs.core.Keyword(null,"alt","alt",-3214426),descripcion], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),home$core$imagenes_carrusel_$_iter__15352(cljs.core.rest(s__15353__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(imagenes);
})()], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.carousel-control-prev","button.carousel-control-prev",392987676),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#carouselExampleControls",new cljs.core.Keyword(null,"role","role",-736691072),"button",new cljs.core.Keyword(null,"data-slide","data-slide",1859272483),"prev"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.carousel-control-prev-icon","span.carousel-control-prev-icon",1195276275),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.sr-only","span.sr-only",2081743235),"Previous"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.carousel-control-next","button.carousel-control-next",-295713140),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#carouselExampleControls",new cljs.core.Keyword(null,"role","role",-736691072),"button",new cljs.core.Keyword(null,"data-slide","data-slide",1859272483),"next"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.carousel-control-next-icon","span.carousel-control-next-icon",1637798991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.sr-only","span.sr-only",2081743235),"Next"], null)], null)], null);
}
});
home.core.mostrar_imagenes_todas = (function home$core$mostrar_imagenes_todas(){
var imagenes = cljs.core.deref(app.db.imagenes);
var imagen_seleccionada = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
if(cljs.core.empty_QMARK_(imagenes)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"No se encontraron im\u00E1genes."], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),(function (){var iter__5480__auto__ = (function home$core$mostrar_imagenes_todas_$_iter__15376(s__15377){
return (new cljs.core.LazySeq(null,(function (){
var s__15377__$1 = s__15377;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__15377__$1);
if(temp__5804__auto__){
var s__15377__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15377__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__15377__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__15379 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__15378 = (0);
while(true){
if((i__15378 < size__5479__auto__)){
var map__15385 = cljs.core._nth(c__5478__auto__,i__15378);
var map__15385__$1 = cljs.core.__destructure_map(map__15385);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15385__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var descripcion = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15385__$1,new cljs.core.Keyword(null,"descripcion","descripcion",-1196002063));
var imagen_base64 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15385__$1,new cljs.core.Keyword(null,"imagen_base64","imagen_base64",-2118761036));
var mime_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15385__$1,new cljs.core.Keyword(null,"mime_type","mime_type",1613436611));
cljs.core.chunk_append(b__15379,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-12.col-md-3","div.col-12.col-md-3",1630060797),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"conjuntoImagenes"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),["data:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mime_type),";base64,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(imagen_base64)].join(''),new cljs.core.Keyword(null,"alt","alt",-3214426),descripcion], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__15479 = (i__15378 + (1));
i__15378 = G__15479;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15379),home$core$mostrar_imagenes_todas_$_iter__15376(cljs.core.chunk_rest(s__15377__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15379),null);
}
} else {
var map__15395 = cljs.core.first(s__15377__$2);
var map__15395__$1 = cljs.core.__destructure_map(map__15395);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15395__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var descripcion = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15395__$1,new cljs.core.Keyword(null,"descripcion","descripcion",-1196002063));
var imagen_base64 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15395__$1,new cljs.core.Keyword(null,"imagen_base64","imagen_base64",-2118761036));
var mime_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15395__$1,new cljs.core.Keyword(null,"mime_type","mime_type",1613436611));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-12.col-md-3","div.col-12.col-md-3",1630060797),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"conjuntoImagenes"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),["data:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mime_type),";base64,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(imagen_base64)].join(''),new cljs.core.Keyword(null,"alt","alt",-3214426),descripcion], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),home$core$mostrar_imagenes_todas_$_iter__15376(cljs.core.rest(s__15377__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(imagenes);
})()], null)], null);
}
});
home.core.page = (function home$core$page(){
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
console.log("Componente montado. Llamando a cargar-imagenes...");

return app.db.cargar_imagenes();
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-12","div.col-12",361685154),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"container"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Galer\u00EDa de Im\u00E1genes"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [home.core.imagenes_carrusel], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [home.core.mostrar_imagenes_todas], null)], null)], null);
})], null));
});
home.core.init = (function home$core$init(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [home.core.page], null),document.getElementById("app"));
});
home.core.init();

//# sourceMappingURL=home.core.js.map
