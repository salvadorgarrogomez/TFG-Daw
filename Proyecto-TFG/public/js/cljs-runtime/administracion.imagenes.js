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
var usuario_id = localStorage.getItem("id");
if((!(cljs.core.empty_QMARK_(cljs.core.deref(administracion.imagenes.imagen))))){
var form_data = (new FormData());
form_data.append("imagen",cljs.core.first(cljs.core.deref(administracion.imagenes.imagen)));

form_data.append("usuario_id",usuario_id);

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
administracion.imagenes.eliminar_imagen = (function administracion$imagenes$eliminar_imagen(id){
if(cljs.core.truth_(confirm("\u00BFEst\u00E1s seguro de que quieres eliminar esta imagen?"))){
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(["/api/imagen/eliminar/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"on-success","on-success",1786904109),(function (_){
alert("Imagen eliminada");

return app.db.cargar_imagenes();
}),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),(function (_){
return alert("Error al eliminar la imagen");
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"adminImagenes"], null),(function (){var iter__5480__auto__ = (function administracion$imagenes$mostrar_imagenes_todas_$_iter__40811(s__40812){
return (new cljs.core.LazySeq(null,(function (){
var s__40812__$1 = s__40812;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__40812__$1);
if(temp__5804__auto__){
var s__40812__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__40812__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__40812__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__40814 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__40813 = (0);
while(true){
if((i__40813 < size__5479__auto__)){
var map__40826 = cljs.core._nth(c__5478__auto__,i__40813);
var map__40826__$1 = cljs.core.__destructure_map(map__40826);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40826__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var descripcion = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40826__$1,new cljs.core.Keyword(null,"descripcion","descripcion",-1196002063));
var imagen_base64 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40826__$1,new cljs.core.Keyword(null,"imagen_base64","imagen_base64",-2118761036));
var mime_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40826__$1,new cljs.core.Keyword(null,"mime_type","mime_type",1613436611));
cljs.core.chunk_append(b__40814,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-12.col-md-3","div.col-12.col-md-3",1630060797),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"conjuntoImagenesAdmin"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"src","src",-1651076051),["data:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mime_type),";base64,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(imagen_base64)].join(''),new cljs.core.Keyword(null,"alt","alt",-3214426),descripcion,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__40813,map__40826,map__40826__$1,id,descripcion,imagen_base64,mime_type,c__5478__auto__,size__5479__auto__,b__40814,s__40812__$2,temp__5804__auto__,imagenes,imagen_seleccionada){
return (function (){
administracion.imagenes.eliminar_imagen(id);

return location.reload(true);
});})(i__40813,map__40826,map__40826__$1,id,descripcion,imagen_base64,mime_type,c__5478__auto__,size__5479__auto__,b__40814,s__40812__$2,temp__5804__auto__,imagenes,imagen_seleccionada))
], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__40931 = (i__40813 + (1));
i__40813 = G__40931;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40814),administracion$imagenes$mostrar_imagenes_todas_$_iter__40811(cljs.core.chunk_rest(s__40812__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40814),null);
}
} else {
var map__40846 = cljs.core.first(s__40812__$2);
var map__40846__$1 = cljs.core.__destructure_map(map__40846);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40846__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var descripcion = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40846__$1,new cljs.core.Keyword(null,"descripcion","descripcion",-1196002063));
var imagen_base64 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40846__$1,new cljs.core.Keyword(null,"imagen_base64","imagen_base64",-2118761036));
var mime_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40846__$1,new cljs.core.Keyword(null,"mime_type","mime_type",1613436611));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-12.col-md-3","div.col-12.col-md-3",1630060797),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"conjuntoImagenesAdmin"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"src","src",-1651076051),["data:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mime_type),";base64,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(imagen_base64)].join(''),new cljs.core.Keyword(null,"alt","alt",-3214426),descripcion,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__40846,map__40846__$1,id,descripcion,imagen_base64,mime_type,s__40812__$2,temp__5804__auto__,imagenes,imagen_seleccionada){
return (function (){
administracion.imagenes.eliminar_imagen(id);

return location.reload(true);
});})(map__40846,map__40846__$1,id,descripcion,imagen_base64,mime_type,s__40812__$2,temp__5804__auto__,imagenes,imagen_seleccionada))
], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),administracion$imagenes$mostrar_imagenes_todas_$_iter__40811(cljs.core.rest(s__40812__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(imagenes);
})()], null);
}
});
administracion.imagenes.formulario_subida = (function administracion$imagenes$formulario_subida(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"formulario"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Subir Imagen",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"(solo se puede subir de 1 en 1)"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"on-change","on-change",-732046149),administracion.imagenes.handle_file_change,new cljs.core.Keyword(null,"class","class",-2030961996),"inputImagen"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.empty_QMARK_(cljs.core.deref(administracion.imagenes.imagen))){
return alert("Debes seleccionar una imagen.");
} else {
administracion.imagenes.subir_imagen();

return location.reload(true);
}
})], null),"Subir Imagen"], null)], null);
});
administracion.imagenes.page = (function administracion$imagenes$page(){
if(app.state.rol_admin_QMARK_()){
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
console.log("Componente montado. Llamando a cargar-imagenes...");

return app.db.cargar_imagenes();
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"divPanelImagenes"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-12","div.col-12",361685154),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"volverAtras"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (location.hash = "#/administracion");
})], null),"Volver al panel de Administraci\u00F3n"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"adminImagenes"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.12","div.col.12",1195722940),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Directorio de im\u00E1genes:"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.12","div.col.12",1195722940),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"formImagenes"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [administracion.imagenes.formulario_subida], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [administracion.imagenes.mostrar_imagenes_todas], null)], null)], null)], null)], null);
})], null));
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.alert.alert-danger","div.alert.alert-danger",-890058301),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"\u26A0\uFE0F Acceso denegado"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Para acceder a esta seccion, debes logearte y acceder desde su boton determinado."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (location.hash = "#/administracion");
})], null),"LOGIN"], null)], null);
}
});
administracion.imagenes.init = (function administracion$imagenes$init(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [administracion.imagenes.page], null),document.getElementById("app"));
});
administracion.imagenes.init();

//# sourceMappingURL=administracion.imagenes.js.map
