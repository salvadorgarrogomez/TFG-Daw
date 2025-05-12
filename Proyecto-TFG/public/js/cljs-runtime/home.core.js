goog.provide('home.core');
home.core.selected_image = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
home.core.imagenes_carrusel = (function home$core$imagenes_carrusel(){
var imagenes = cljs.core.deref(app.db.imagenes);
if(cljs.core.empty_QMARK_(imagenes)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"No se encontraron im\u00E1genes."], null);
} else {
var carousel_id = "carouselExampleIndicators";
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.carousel.slide.container","div.carousel.slide.container",-807774212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),carousel_id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.carousel-indicators","div.carousel-indicators",-576266492),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,p__15227){
var map__15228 = p__15227;
var map__15228__$1 = cljs.core.__destructure_map(map__15228);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15228__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"key","key",-1516042587),["indicador-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = id;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return i;
}
})())].join(''),new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"data-bs-target","data-bs-target",-1732916680),["#",carousel_id].join(''),new cljs.core.Keyword(null,"data-bs-slide-to","data-bs-slide-to",-377007126),i,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(0)))?"active":null),new cljs.core.Keyword(null,"aria-current","aria-current",1889851611),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(0)))?"true":null),new cljs.core.Keyword(null,"aria-label","aria-label",455891514),["Slide ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((i + (1)))].join('')], null)], null);
}),imagenes))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.carousel-inner","div.carousel-inner",2016287053),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,p__15229){
var map__15230 = p__15229;
var map__15230__$1 = cljs.core.__destructure_map(map__15230);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15230__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var descripcion = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15230__$1,new cljs.core.Keyword(null,"descripcion","descripcion",-1196002063));
var imagen_base64 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15230__$1,new cljs.core.Keyword(null,"imagen_base64","imagen_base64",-2118761036));
var mime_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15230__$1,new cljs.core.Keyword(null,"mime_type","mime_type",1613436611));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.carousel-item","div.carousel-item",-888860857),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["item-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = id;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return i;
}
})())].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(0)))?"active":null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),["data:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mime_type),";base64,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(imagen_base64)].join(''),new cljs.core.Keyword(null,"alt","alt",-3214426),descripcion,new cljs.core.Keyword(null,"class","class",-2030961996),"d-block mx-auto"], null)], null)], null);
}),imagenes))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.carousel-control-prev","button.carousel-control-prev",392987676),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),"button",new cljs.core.Keyword(null,"data-bs-target","data-bs-target",-1732916680),["#",carousel_id].join(''),new cljs.core.Keyword(null,"data-bs-slide","data-bs-slide",1473050898),"prev"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.carousel-control-prev-icon","span.carousel-control-prev-icon",1195276275),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.visually-hidden","span.visually-hidden",1984287191),"Previous"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.carousel-control-next","button.carousel-control-next",-295713140),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),"button",new cljs.core.Keyword(null,"data-bs-target","data-bs-target",-1732916680),["#",carousel_id].join(''),new cljs.core.Keyword(null,"data-bs-slide","data-bs-slide",1473050898),"next"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.carousel-control-next-icon","span.carousel-control-next-icon",1637798991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.visually-hidden","span.visually-hidden",1984287191),"Next"], null)], null)], null);
}
});
home.core.mostrar_imagenes_todas = (function home$core$mostrar_imagenes_todas(){
var imagenes = cljs.core.deref(app.db.imagenes);
if(cljs.core.empty_QMARK_(imagenes)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"No se encontraron im\u00E1genes."], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"containerImg"], null),(function (){var iter__5480__auto__ = (function home$core$mostrar_imagenes_todas_$_iter__15231(s__15232){
return (new cljs.core.LazySeq(null,(function (){
var s__15232__$1 = s__15232;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__15232__$1);
if(temp__5804__auto__){
var s__15232__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15232__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__15232__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__15234 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__15233 = (0);
while(true){
if((i__15233 < size__5479__auto__)){
var idx = cljs.core._nth(c__5478__auto__,i__15233);
cljs.core.chunk_append(b__15234,(function (){var map__15235 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(imagenes,idx);
var map__15235__$1 = cljs.core.__destructure_map(map__15235);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15235__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var descripcion = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15235__$1,new cljs.core.Keyword(null,"descripcion","descripcion",-1196002063));
var imagen_base64 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15235__$1,new cljs.core.Keyword(null,"imagen_base64","imagen_base64",-2118761036));
var mime_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15235__$1,new cljs.core.Keyword(null,"mime_type","mime_type",1613436611));
var base64_src = ["data:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mime_type),";base64,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(imagen_base64)].join('');
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-12.col-md-5.conjuntoImagenes","div.col-12.col-md-5.conjuntoImagenes",735623809),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__15233,map__15235,map__15235__$1,id,descripcion,imagen_base64,mime_type,base64_src,idx,c__5478__auto__,size__5479__auto__,b__15234,s__15232__$2,temp__5804__auto__,imagenes){
return (function (){
return cljs.core.reset_BANG_(home.core.selected_image,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),base64_src,new cljs.core.Keyword(null,"alt","alt",-3214426),descripcion], null));
});})(i__15233,map__15235,map__15235__$1,id,descripcion,imagen_base64,mime_type,base64_src,idx,c__5478__auto__,size__5479__auto__,b__15234,s__15232__$2,temp__5804__auto__,imagenes))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),base64_src,new cljs.core.Keyword(null,"alt","alt",-3214426),descripcion], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join('')], null));
})());

var G__15237 = (i__15233 + (1));
i__15233 = G__15237;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15234),home$core$mostrar_imagenes_todas_$_iter__15231(cljs.core.chunk_rest(s__15232__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15234),null);
}
} else {
var idx = cljs.core.first(s__15232__$2);
return cljs.core.cons((function (){var map__15236 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(imagenes,idx);
var map__15236__$1 = cljs.core.__destructure_map(map__15236);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15236__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var descripcion = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15236__$1,new cljs.core.Keyword(null,"descripcion","descripcion",-1196002063));
var imagen_base64 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15236__$1,new cljs.core.Keyword(null,"imagen_base64","imagen_base64",-2118761036));
var mime_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15236__$1,new cljs.core.Keyword(null,"mime_type","mime_type",1613436611));
var base64_src = ["data:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mime_type),";base64,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(imagen_base64)].join('');
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-12.col-md-5.conjuntoImagenes","div.col-12.col-md-5.conjuntoImagenes",735623809),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__15236,map__15236__$1,id,descripcion,imagen_base64,mime_type,base64_src,idx,s__15232__$2,temp__5804__auto__,imagenes){
return (function (){
return cljs.core.reset_BANG_(home.core.selected_image,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),base64_src,new cljs.core.Keyword(null,"alt","alt",-3214426),descripcion], null));
});})(map__15236,map__15236__$1,id,descripcion,imagen_base64,mime_type,base64_src,idx,s__15232__$2,temp__5804__auto__,imagenes))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),base64_src,new cljs.core.Keyword(null,"alt","alt",-3214426),descripcion], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join('')], null));
})(),home$core$mostrar_imagenes_todas_$_iter__15231(cljs.core.rest(s__15232__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(imagenes)));
})()], null),(cljs.core.truth_(cljs.core.deref(home.core.selected_image))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-container.active","div.modal-container.active",-138567946),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-content","div.modal-content",-83470844),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(home.core.selected_image)),new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.Keyword(null,"alt","alt",-3214426).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(home.core.selected_image))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.close-btn","button.close-btn",-1715272268),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(home.core.selected_image,null);
})], null),"X"], null)], null)], null):null)], null);
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
