goog.provide('administracion.nuevo');
if((typeof administracion !== 'undefined') && (typeof administracion.nuevo !== 'undefined') && (typeof administracion.nuevo.nombre_producto !== 'undefined')){
} else {
administracion.nuevo.nombre_producto = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
}
if((typeof administracion !== 'undefined') && (typeof administracion.nuevo !== 'undefined') && (typeof administracion.nuevo.descripcion_producto !== 'undefined')){
} else {
administracion.nuevo.descripcion_producto = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
}
if((typeof administracion !== 'undefined') && (typeof administracion.nuevo !== 'undefined') && (typeof administracion.nuevo.precio_producto !== 'undefined')){
} else {
administracion.nuevo.precio_producto = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
}
if((typeof administracion !== 'undefined') && (typeof administracion.nuevo !== 'undefined') && (typeof administracion.nuevo.categoria_producto !== 'undefined')){
} else {
administracion.nuevo.categoria_producto = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
}
if((typeof administracion !== 'undefined') && (typeof administracion.nuevo !== 'undefined') && (typeof administracion.nuevo.tipo_plato_producto !== 'undefined')){
} else {
administracion.nuevo.tipo_plato_producto = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
}
if((typeof administracion !== 'undefined') && (typeof administracion.nuevo !== 'undefined') && (typeof administracion.nuevo.tipo_porcion_producto !== 'undefined')){
} else {
administracion.nuevo.tipo_porcion_producto = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
}
if((typeof administracion !== 'undefined') && (typeof administracion.nuevo !== 'undefined') && (typeof administracion.nuevo.es_vegetariano_producto !== 'undefined')){
} else {
administracion.nuevo.es_vegetariano_producto = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
}
if((typeof administracion !== 'undefined') && (typeof administracion.nuevo !== 'undefined') && (typeof administracion.nuevo.es_vegano_producto !== 'undefined')){
} else {
administracion.nuevo.es_vegano_producto = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
}
if((typeof administracion !== 'undefined') && (typeof administracion.nuevo !== 'undefined') && (typeof administracion.nuevo.es_sin_gluten_producto !== 'undefined')){
} else {
administracion.nuevo.es_sin_gluten_producto = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
}
if((typeof administracion !== 'undefined') && (typeof administracion.nuevo !== 'undefined') && (typeof administracion.nuevo.es_sin_lactosa_producto !== 'undefined')){
} else {
administracion.nuevo.es_sin_lactosa_producto = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
}
if((typeof administracion !== 'undefined') && (typeof administracion.nuevo !== 'undefined') && (typeof administracion.nuevo.nombre_categoria !== 'undefined')){
} else {
administracion.nuevo.nombre_categoria = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
}
if((typeof administracion !== 'undefined') && (typeof administracion.nuevo !== 'undefined') && (typeof administracion.nuevo.descripcion_categoria !== 'undefined')){
} else {
administracion.nuevo.descripcion_categoria = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
}
administracion.nuevo.get_categoria_por_id = (function administracion$nuevo$get_categoria_por_id(id){
return cljs.core.some((function (p1__13243_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__13243_SHARP_),id)){
return p1__13243_SHARP_;
} else {
return null;
}
}),cljs.core.deref(app.db.categorias));
});
administracion.nuevo.tiene_mas_de_dos_decimales_QMARK_ = (function administracion$nuevo$tiene_mas_de_dos_decimales_QMARK_(valor){
var vec__13251 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(valor,/\./);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13251,(0),null);
var decimales = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13251,(1),null);
var and__5000__auto__ = decimales;
if(cljs.core.truth_(and__5000__auto__)){
return (cljs.core.count(decimales) > (2));
} else {
return and__5000__auto__;
}
});
administracion.nuevo.page = (function administracion$nuevo$page(){
if(cljs.core.truth_(cljs.core.deref(app.state.acceso_nuevo_QMARK_))){
var params = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.state.current_route),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.Keyword(null,"path","path",-188191168)], null));
var tipo = new cljs.core.Keyword(null,"tipo","tipo",837631118).cljs$core$IFn$_invoke$arity$1(params);
var usuario_id = localStorage.getItem("id");
var G__13273 = tipo;
switch (G__13273) {
case "producto":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"divNuevo"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-12","div.col-12",361685154),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"volverAtras"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (location.hash = "#/administracion");
})], null),"Volver al panel de Administraci\u00F3n"], null)], null),new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-12.col-md-6","div.col-12.col-md-6",315203922),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"divDatosNuevos"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Inserta los datos del nuevo producto:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"campoProducto"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"nombre"], null),"Nombre del producto: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"id","id",-1388402092),"nombre",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(administracion.nuevo.nombre_producto),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__13254_SHARP_){
return cljs.core.reset_BANG_(administracion.nuevo.nombre_producto,p1__13254_SHARP_.target.value);
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"campoProducto"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"description"], null),"Descripci\u00F3n: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"id","id",-1388402092),"description",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(administracion.nuevo.descripcion_producto),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__13256_SHARP_){
return cljs.core.reset_BANG_(administracion.nuevo.descripcion_producto,p1__13256_SHARP_.target.value);
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"campoProducto"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"precio"], null),"Precio:",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"id","id",-1388402092),"precio",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(administracion.nuevo.precio_producto),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__13257_SHARP_){
return cljs.core.reset_BANG_(administracion.nuevo.precio_producto,p1__13257_SHARP_.target.value);
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"campoProducto"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"categoria_id"], null),"Categoria:",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5002__auto__ = cljs.core.deref(administracion.nuevo.categoria_producto);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"id","id",-1388402092),"categoria_id",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__13258_SHARP_){
return cljs.core.reset_BANG_(administracion.nuevo.categoria_producto,p1__13258_SHARP_.target.value);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),""], null),"-- Selecciona una categor\u00EDa --"], null),(function (){var iter__5480__auto__ = (function administracion$nuevo$page_$_iter__13282(s__13283){
return (new cljs.core.LazySeq(null,(function (){
var s__13283__$1 = s__13283;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13283__$1);
if(temp__5804__auto__){
var s__13283__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13283__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__13283__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__13285 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__13284 = (0);
while(true){
if((i__13284 < size__5479__auto__)){
var map__13288 = cljs.core._nth(c__5478__auto__,i__13284);
var map__13288__$1 = cljs.core.__destructure_map(map__13288);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13288__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var nombre = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13288__$1,new cljs.core.Keyword(null,"nombre","nombre",1047347004));
cljs.core.chunk_append(b__13285,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),id], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(nombre)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__13318 = (i__13284 + (1));
i__13284 = G__13318;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13285),administracion$nuevo$page_$_iter__13282(cljs.core.chunk_rest(s__13283__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13285),null);
}
} else {
var map__13291 = cljs.core.first(s__13283__$2);
var map__13291__$1 = cljs.core.__destructure_map(map__13291);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13291__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var nombre = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13291__$1,new cljs.core.Keyword(null,"nombre","nombre",1047347004));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),id], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(nombre)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),administracion$nuevo$page_$_iter__13282(cljs.core.rest(s__13283__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.deref(app.db.categorias));
})()], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"campoProducto"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"tipo_plato"], null),"Tipo de plato:",new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5002__auto__ = cljs.core.deref(administracion.nuevo.tipo_plato_producto);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"id","id",-1388402092),"tipo_plato",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__13259_SHARP_){
return cljs.core.reset_BANG_(administracion.nuevo.tipo_plato_producto,p1__13259_SHARP_.target.value);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),""], null),"-- Selecciona un tipo de plato --"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"Tapa"], null),"Tapa"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"Al centro"], null),"Al centro"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"Principal"], null),"Principal"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"Postres"], null),"Postres"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"campoProducto"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"tipo_porcion"], null),"Tipo de porcion:",new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5002__auto__ = cljs.core.deref(administracion.nuevo.tipo_porcion_producto);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"id","id",-1388402092),"tipo_porcion",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__13260_SHARP_){
return cljs.core.reset_BANG_(administracion.nuevo.tipo_porcion_producto,p1__13260_SHARP_.target.value);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),""], null),"-- Selecciona un tipo de porcion --"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"Por unidad"], null),"Por unidad"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"Media raci\u00F3n"], null),"Media raci\u00F3n"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"Raci\u00F3n completa"], null),"Raci\u00F3n completa"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Restricciones alimentarias: "], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"campoProducto"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"es_vegetariano"], null),"El plato es vegetariano?",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5002__auto__ = cljs.core.deref(administracion.nuevo.es_vegetariano_producto);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"id","id",-1388402092),"es_vegetariano",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__13261_SHARP_){
return cljs.core.reset_BANG_(administracion.nuevo.es_vegetariano_producto,p1__13261_SHARP_.target.value);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),""], null),"-- Selecciona una opci\u00F3n --"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"true"], null),"S\u00ED"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"false"], null),"No"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"campoProducto"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"es_vegano"], null),"El plato es vegano?",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5002__auto__ = cljs.core.deref(administracion.nuevo.es_vegano_producto);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"id","id",-1388402092),"es_vegano",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__13266_SHARP_){
return cljs.core.reset_BANG_(administracion.nuevo.es_vegano_producto,p1__13266_SHARP_.target.value);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),""], null),"-- Selecciona una opci\u00F3n --"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"true"], null),"S\u00ED"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"false"], null),"No"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"campoProducto"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"es_sin_gluten"], null),"El plato es con gluten?",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5002__auto__ = cljs.core.deref(administracion.nuevo.es_sin_gluten_producto);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"id","id",-1388402092),"es_sin_gluten",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__13267_SHARP_){
return cljs.core.reset_BANG_(administracion.nuevo.es_sin_gluten_producto,p1__13267_SHARP_.target.value);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),""], null),"-- Selecciona una opci\u00F3n --"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"true"], null),"S\u00ED"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"false"], null),"No"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"campoProducto"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"es_sin_lactosa"], null),"El plato es con lactosa?",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5002__auto__ = cljs.core.deref(administracion.nuevo.es_sin_lactosa_producto);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"id","id",-1388402092),"es_sin_lactosa",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__13268_SHARP_){
return cljs.core.reset_BANG_(administracion.nuevo.es_sin_lactosa_producto,p1__13268_SHARP_.target.value);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),""], null),"-- Selecciona una opci\u00F3n --"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"true"], null),"S\u00ED"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"false"], null),"No"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var precio_num = parseFloat(cljs.core.deref(administracion.nuevo.precio_producto));
if(cljs.core.truth_((function (){var or__5002__auto__ = isNaN(precio_num);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (precio_num < (0));
}
})())){
return alert("El precio debe ser un n\u00FAmero mayor o igual que 0");
} else {
if(cljs.core.truth_(administracion.nuevo.tiene_mas_de_dos_decimales_QMARK_(cljs.core.deref(administracion.nuevo.precio_producto)))){
return alert("El precio solo puede tener hasta dos decimales");
} else {
app.db.insertar_producto(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"es_vegetariano","es_vegetariano",650459360),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"tipo_porcion","tipo_porcion",1174589739),new cljs.core.Keyword(null,"categoria_id","categoria_id",-705480723),new cljs.core.Keyword(null,"precio","precio",-1246474385),new cljs.core.Keyword(null,"usuario_id","usuario_id",-1285503952),new cljs.core.Keyword(null,"es_sin_gluten","es_sin_gluten",-277510319),new cljs.core.Keyword(null,"es_vegano","es_vegano",1938781139),new cljs.core.Keyword(null,"nombre","nombre",1047347004),new cljs.core.Keyword(null,"tipo_plato","tipo_plato",-1144165380),new cljs.core.Keyword(null,"es_sin_lactosa","es_sin_lactosa",810297151)],[cljs.core.deref(administracion.nuevo.es_vegetariano_producto),cljs.core.deref(administracion.nuevo.descripcion_producto),cljs.core.deref(administracion.nuevo.tipo_porcion_producto),cljs.core.deref(administracion.nuevo.categoria_producto),cljs.core.deref(administracion.nuevo.precio_producto),parseInt(usuario_id),cljs.core.deref(administracion.nuevo.es_sin_gluten_producto),cljs.core.deref(administracion.nuevo.es_vegano_producto),cljs.core.deref(administracion.nuevo.nombre_producto),cljs.core.deref(administracion.nuevo.tipo_plato_producto),cljs.core.deref(administracion.nuevo.es_sin_lactosa_producto)]));

cljs.core.reset_BANG_(administracion.nuevo.nombre_producto,"");

cljs.core.reset_BANG_(administracion.nuevo.descripcion_producto,"");

cljs.core.reset_BANG_(administracion.nuevo.precio_producto,"");

cljs.core.reset_BANG_(administracion.nuevo.categoria_producto,"");

cljs.core.reset_BANG_(administracion.nuevo.tipo_plato_producto,"");

cljs.core.reset_BANG_(administracion.nuevo.tipo_porcion_producto,"");

cljs.core.reset_BANG_(administracion.nuevo.es_vegetariano_producto,"");

cljs.core.reset_BANG_(administracion.nuevo.es_vegano_producto,"");

cljs.core.reset_BANG_(administracion.nuevo.es_sin_gluten_producto,"");

return cljs.core.reset_BANG_(administracion.nuevo.es_sin_lactosa_producto,"");

}
}
})], null),"Crear producto"], null)], null)], null)], null);

break;
case "categoria":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"divNuevo"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-12","div.col-12",361685154),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"volverAtras"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (location.hash = "#/administracion");
})], null),"Volver al panel de Administraci\u00F3n"], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-12.col-md-6","div.col-12.col-md-6",315203922),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"divDatosNuevos"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Inserta los datos de la nueva categor\u00EDa:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"campoCategoria"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"nombre"], null),"Nombre de la categor\u00EDa:",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"id","id",-1388402092),"nombre",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(administracion.nuevo.nombre_categoria),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__13271_SHARP_){
return cljs.core.reset_BANG_(administracion.nuevo.nombre_categoria,p1__13271_SHARP_.target.value);
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"campoCategoria"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"descripcion"], null),"Descripci\u00F3n:",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"id","id",-1388402092),"descripcion",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(administracion.nuevo.descripcion_categoria),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__13272_SHARP_){
return cljs.core.reset_BANG_(administracion.nuevo.descripcion_categoria,p1__13272_SHARP_.target.value);
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
app.db.insertar_categoria(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"nombre","nombre",1047347004),cljs.core.deref(administracion.nuevo.nombre_categoria),new cljs.core.Keyword(null,"descripcion","descripcion",-1196002063),cljs.core.deref(administracion.nuevo.descripcion_categoria),new cljs.core.Keyword(null,"usuario_id","usuario_id",-1285503952),parseInt(usuario_id)], null));

cljs.core.reset_BANG_(administracion.nuevo.nombre_categoria,"");

return cljs.core.reset_BANG_(administracion.nuevo.descripcion_categoria,"");
})], null),"Crear Categor\u00EDa"], null)], null)], null)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13273)].join('')));

}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.alert.alert-danger","div.alert.alert-danger",-890058301),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"\u26A0\uFE0F Acceso denegado"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Para acceder a esta seccion, debes logearte y acceder desde su boton determinado."], null)], null);
}
});

//# sourceMappingURL=administracion.nuevo.js.map
