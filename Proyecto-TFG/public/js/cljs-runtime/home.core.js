goog.provide('home.core');
home.core.imagenes_carrusel = (function home$core$imagenes_carrusel(){
var imagenes = cljs.core.deref(app.db.imagenes);
if(cljs.core.empty_QMARK_(imagenes)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"No se encontraron im\u00E1genes."], null);
} else {
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.carousel","div.carousel",-760498478),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"carouselExampleControls",new cljs.core.Keyword(null,"class","class",-2030961996),"carousel slide",new cljs.core.Keyword(null,"data-ride","data-ride",147157853),"carousel"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.carousel-inner","div.carousel-inner",2016287053),(function (){var iter__5480__auto__ = (function home$core$imagenes_carrusel_$_iter__19427(s__19428){
return (new cljs.core.LazySeq(null,(function (){
var s__19428__$1 = s__19428;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__19428__$1);
if(temp__5804__auto__){
var s__19428__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19428__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__19428__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__19430 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__19429 = (0);
while(true){
if((i__19429 < size__5479__auto__)){
var map__19431 = cljs.core._nth(c__5478__auto__,i__19429);
var map__19431__$1 = cljs.core.__destructure_map(map__19431);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19431__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var descripcion = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19431__$1,new cljs.core.Keyword(null,"descripcion","descripcion",-1196002063));
var imagen_base64 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19431__$1,new cljs.core.Keyword(null,"imagen_base64","imagen_base64",-2118761036));
var mime_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19431__$1,new cljs.core.Keyword(null,"mime_type","mime_type",1613436611));
cljs.core.chunk_append(b__19430,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.carousel-item","div.carousel-item",-888860857),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),imagenes))))?"active":"")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"d-flex justify-content-center"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),["data:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mime_type),";base64,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(imagen_base64)].join(''),new cljs.core.Keyword(null,"alt","alt",-3214426),descripcion], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__19439 = (i__19429 + (1));
i__19429 = G__19439;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19430),home$core$imagenes_carrusel_$_iter__19427(cljs.core.chunk_rest(s__19428__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19430),null);
}
} else {
var map__19432 = cljs.core.first(s__19428__$2);
var map__19432__$1 = cljs.core.__destructure_map(map__19432);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19432__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var descripcion = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19432__$1,new cljs.core.Keyword(null,"descripcion","descripcion",-1196002063));
var imagen_base64 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19432__$1,new cljs.core.Keyword(null,"imagen_base64","imagen_base64",-2118761036));
var mime_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19432__$1,new cljs.core.Keyword(null,"mime_type","mime_type",1613436611));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.carousel-item","div.carousel-item",-888860857),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),imagenes))))?"active":"")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"d-flex justify-content-center"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),["data:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mime_type),";base64,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(imagen_base64)].join(''),new cljs.core.Keyword(null,"alt","alt",-3214426),descripcion], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),home$core$imagenes_carrusel_$_iter__19427(cljs.core.rest(s__19428__$2)));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),(function (){var iter__5480__auto__ = (function home$core$mostrar_imagenes_todas_$_iter__19433(s__19434){
return (new cljs.core.LazySeq(null,(function (){
var s__19434__$1 = s__19434;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__19434__$1);
if(temp__5804__auto__){
var s__19434__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19434__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__19434__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__19436 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__19435 = (0);
while(true){
if((i__19435 < size__5479__auto__)){
var map__19437 = cljs.core._nth(c__5478__auto__,i__19435);
var map__19437__$1 = cljs.core.__destructure_map(map__19437);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19437__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var descripcion = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19437__$1,new cljs.core.Keyword(null,"descripcion","descripcion",-1196002063));
var imagen_base64 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19437__$1,new cljs.core.Keyword(null,"imagen_base64","imagen_base64",-2118761036));
var mime_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19437__$1,new cljs.core.Keyword(null,"mime_type","mime_type",1613436611));
cljs.core.chunk_append(b__19436,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-12.col-md-3","div.col-12.col-md-3",1630060797),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"conjuntoImagenes"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),["data:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mime_type),";base64,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(imagen_base64)].join(''),new cljs.core.Keyword(null,"alt","alt",-3214426),descripcion], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__19440 = (i__19435 + (1));
i__19435 = G__19440;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19436),home$core$mostrar_imagenes_todas_$_iter__19433(cljs.core.chunk_rest(s__19434__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19436),null);
}
} else {
var map__19438 = cljs.core.first(s__19434__$2);
var map__19438__$1 = cljs.core.__destructure_map(map__19438);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19438__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var descripcion = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19438__$1,new cljs.core.Keyword(null,"descripcion","descripcion",-1196002063));
var imagen_base64 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19438__$1,new cljs.core.Keyword(null,"imagen_base64","imagen_base64",-2118761036));
var mime_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19438__$1,new cljs.core.Keyword(null,"mime_type","mime_type",1613436611));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-12.col-md-3","div.col-12.col-md-3",1630060797),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"conjuntoImagenes"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),["data:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mime_type),";base64,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(imagen_base64)].join(''),new cljs.core.Keyword(null,"alt","alt",-3214426),descripcion], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),home$core$mostrar_imagenes_todas_$_iter__19433(cljs.core.rest(s__19434__$2)));
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
