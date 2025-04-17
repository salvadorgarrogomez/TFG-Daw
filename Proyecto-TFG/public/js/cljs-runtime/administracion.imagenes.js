goog.provide('administracion.imagenes');
if((typeof administracion !== 'undefined') && (typeof administracion.imagenes !== 'undefined') && (typeof administracion.imagenes.imagen !== 'undefined')){
} else {
administracion.imagenes.imagen = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
administracion.imagenes.handle_file_change = (function administracion$imagenes$handle_file_change(event){
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
return cljs.core.reset_BANG_(administracion.imagenes.imagen,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file], null));
} else {
return null;
}
});
administracion.imagenes.subir_imagen = (function administracion$imagenes$subir_imagen(){
if((!(cljs.core.empty_QMARK_(cljs.core.deref(administracion.imagenes.imagen))))){
var form_data = (new FormData());
form_data.append("imagen",cljs.core.first(cljs.core.deref(administracion.imagenes.imagen)));

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
administracion.imagenes.mostrar_imagenes_todas = (function administracion$imagenes$mostrar_imagenes_todas(){
var imagenes = cljs.core.deref(app.db.imagenes);
var imagen_seleccionada = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
if(cljs.core.empty_QMARK_(imagenes)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"No se encontraron im\u00E1genes."], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),(function (){var iter__5480__auto__ = (function administracion$imagenes$mostrar_imagenes_todas_$_iter__18933(s__18934){
return (new cljs.core.LazySeq(null,(function (){
var s__18934__$1 = s__18934;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__18934__$1);
if(temp__5804__auto__){
var s__18934__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18934__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__18934__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__18936 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__18935 = (0);
while(true){
if((i__18935 < size__5479__auto__)){
var map__18937 = cljs.core._nth(c__5478__auto__,i__18935);
var map__18937__$1 = cljs.core.__destructure_map(map__18937);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18937__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var descripcion = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18937__$1,new cljs.core.Keyword(null,"descripcion","descripcion",-1196002063));
var imagen_base64 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18937__$1,new cljs.core.Keyword(null,"imagen_base64","imagen_base64",-2118761036));
var mime_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18937__$1,new cljs.core.Keyword(null,"mime_type","mime_type",1613436611));
cljs.core.chunk_append(b__18936,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-12.col-md-3","div.col-12.col-md-3",1630060797),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"conjuntoImagenes"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),["data:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mime_type),";base64,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(imagen_base64)].join(''),new cljs.core.Keyword(null,"alt","alt",-3214426),descripcion], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__18939 = (i__18935 + (1));
i__18935 = G__18939;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18936),administracion$imagenes$mostrar_imagenes_todas_$_iter__18933(cljs.core.chunk_rest(s__18934__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18936),null);
}
} else {
var map__18938 = cljs.core.first(s__18934__$2);
var map__18938__$1 = cljs.core.__destructure_map(map__18938);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18938__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var descripcion = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18938__$1,new cljs.core.Keyword(null,"descripcion","descripcion",-1196002063));
var imagen_base64 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18938__$1,new cljs.core.Keyword(null,"imagen_base64","imagen_base64",-2118761036));
var mime_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18938__$1,new cljs.core.Keyword(null,"mime_type","mime_type",1613436611));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-12.col-md-3","div.col-12.col-md-3",1630060797),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"conjuntoImagenes"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),["data:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mime_type),";base64,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(imagen_base64)].join(''),new cljs.core.Keyword(null,"alt","alt",-3214426),descripcion], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),administracion$imagenes$mostrar_imagenes_todas_$_iter__18933(cljs.core.rest(s__18934__$2)));
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
administracion.imagenes.formulario_subida = (function administracion$imagenes$formulario_subida(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Subir Imagen"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"on-change","on-change",-732046149),administracion.imagenes.handle_file_change], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
administracion.imagenes.subir_imagen();

return location.reload(true);
})], null),"Subir Imagen"], null)], null);
});
administracion.imagenes.page = (function administracion$imagenes$page(){
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
console.log("Componente montado. Llamando a cargar-imagenes...");

return app.db.cargar_imagenes();
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-12","div.col-12",361685154),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"adminImagenes"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Directorio de imagenes:"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [administracion.imagenes.formulario_subida], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [administracion.imagenes.mostrar_imagenes_todas], null)], null)], null);
})], null));
});
administracion.imagenes.init = (function administracion$imagenes$init(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [administracion.imagenes.page], null),document.getElementById("app"));
});
administracion.imagenes.init();

//# sourceMappingURL=administracion.imagenes.js.map
