goog.provide('home.core');
if((typeof home !== 'undefined') && (typeof home.core !== 'undefined') && (typeof home.core.imagen !== 'undefined')){
} else {
home.core.imagen = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
home.core.handle_file_change = (function home$core$handle_file_change(event){
var file = cljs.core.first(event.target.files);
if(cljs.core.truth_((function (){var and__5000__auto__ = file;
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = (file.size <= (2048000));
if(and__5000__auto____$1){
return cljs.core.re_matches(/.*\.(jpg|jpeg|png|gif|svg)$/,file.name);
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})())){
return cljs.core.reset_BANG_(home.core.imagen,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file], null));
} else {
return null;
}
});
home.core.subir_imagen = (function home$core$subir_imagen(){
if((!(cljs.core.empty_QMARK_(cljs.core.deref(home.core.imagen))))){
var form_data = (new FormData());
form_data.append("imagen",cljs.core.first(cljs.core.deref(home.core.imagen)));

return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic("/api/subir-imagen",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"body","body",-2049205669),form_data,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"on-success","on-success",1786904109),(function (response){
alert("Imagen subida con \u00E9xito");

return app.db.cargar_imagenes();
}),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),(function (response){
return alert("Error al subir la imagen");
})], null)], 0));
} else {
return null;
}
});
home.core.mostrar_imagenes = (function home$core$mostrar_imagenes(){
var imagenes = cljs.core.deref(app.db.imagenes);
if(cljs.core.empty_QMARK_(imagenes)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"No se encontraron im\u00E1genes."], null);
} else {
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.carousel","div.carousel",-760498478),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"carouselExampleControls",new cljs.core.Keyword(null,"class","class",-2030961996),"carousel slide",new cljs.core.Keyword(null,"data-ride","data-ride",147157853),"carousel"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.carousel-inner","div.carousel-inner",2016287053),(function (){var iter__5480__auto__ = (function home$core$mostrar_imagenes_$_iter__13235(s__13236){
return (new cljs.core.LazySeq(null,(function (){
var s__13236__$1 = s__13236;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13236__$1);
if(temp__5804__auto__){
var s__13236__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13236__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__13236__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__13238 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__13237 = (0);
while(true){
if((i__13237 < size__5479__auto__)){
var map__13239 = cljs.core._nth(c__5478__auto__,i__13237);
var map__13239__$1 = cljs.core.__destructure_map(map__13239);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13239__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var descripcion = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13239__$1,new cljs.core.Keyword(null,"descripcion","descripcion",-1196002063));
var imagen_base64 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13239__$1,new cljs.core.Keyword(null,"imagen_base64","imagen_base64",-2118761036));
var mime_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13239__$1,new cljs.core.Keyword(null,"mime_type","mime_type",1613436611));
cljs.core.chunk_append(b__13238,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.carousel-item","div.carousel-item",-888860857),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),imagenes))))?"active":"")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"d-flex justify-content-center"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),["data:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mime_type),";base64,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(imagen_base64)].join(''),new cljs.core.Keyword(null,"alt","alt",-3214426),descripcion], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__13242 = (i__13237 + (1));
i__13237 = G__13242;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13238),home$core$mostrar_imagenes_$_iter__13235(cljs.core.chunk_rest(s__13236__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13238),null);
}
} else {
var map__13240 = cljs.core.first(s__13236__$2);
var map__13240__$1 = cljs.core.__destructure_map(map__13240);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13240__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var descripcion = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13240__$1,new cljs.core.Keyword(null,"descripcion","descripcion",-1196002063));
var imagen_base64 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13240__$1,new cljs.core.Keyword(null,"imagen_base64","imagen_base64",-2118761036));
var mime_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13240__$1,new cljs.core.Keyword(null,"mime_type","mime_type",1613436611));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.carousel-item","div.carousel-item",-888860857),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),imagenes))))?"active":"")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"d-flex justify-content-center"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),["data:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mime_type),";base64,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(imagen_base64)].join(''),new cljs.core.Keyword(null,"alt","alt",-3214426),descripcion], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),home$core$mostrar_imagenes_$_iter__13235(cljs.core.rest(s__13236__$2)));
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
home.core.formulario_subida = (function home$core$formulario_subida(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"divImagenes"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Subir Imagen"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"on-change","on-change",-732046149),home.core.handle_file_change], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),home.core.subir_imagen], null),"Subir Imagen"], null)], null);
});
home.core.page = (function home$core$page(){
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
console.log("Componente montado. Llamando a cargar-imagenes...");

return app.db.cargar_imagenes();
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-12","div.col-12",361685154),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"container"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Galer\u00EDa de Im\u00E1genes"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [home.core.mostrar_imagenes], null)], null)], null);
})], null));
});
home.core.init = (function home$core$init(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [home.core.page], null),document.getElementById("app"));
});
home.core.init();

//# sourceMappingURL=home.core.js.map
