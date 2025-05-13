goog.provide('administracion.editar');
administracion.editar.producto = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
administracion.editar.categoria = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
administracion.editar.campo_seleccionado = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
administracion.editar.nuevo_valor = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
administracion.editar.estado_actualizacion = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
administracion.editar.get_producto_por_id = (function administracion$editar$get_producto_por_id(id){
return cljs.core.some((function (p1__14687_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__14687_SHARP_),id)){
return p1__14687_SHARP_;
} else {
return null;
}
}),cljs.core.deref(app.db.list_productos));
});
administracion.editar.get_categoria_por_id = (function administracion$editar$get_categoria_por_id(id){
return cljs.core.some((function (p1__14689_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__14689_SHARP_),id)){
return p1__14689_SHARP_;
} else {
return null;
}
}),cljs.core.deref(app.db.categorias));
});
administracion.editar.tiene_mas_de_dos_decimales_QMARK_ = (function administracion$editar$tiene_mas_de_dos_decimales_QMARK_(valor){
var vec__14690 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(valor,/\./);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14690,(0),null);
var decimales = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14690,(1),null);
var and__5000__auto__ = decimales;
if(cljs.core.truth_(and__5000__auto__)){
return (cljs.core.count(decimales) > (2));
} else {
return and__5000__auto__;
}
});
administracion.editar.actualizar_producto = (function administracion$editar$actualizar_producto(producto,campo,valor,valor_num){
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(producto));
var usuario_id = localStorage.getItem("id");
var valor_parseado = (function (){var G__14694 = campo;
switch (G__14694) {
case "contiene_gluten":
case "contiene_crustaceos":
case "contiene_huevos":
case "contiene_pescado":
case "contiene_cacahuetes":
case "contiene_soja":
case "contiene_lacteos":
case "contiene_frutos_de_cascara":
case "contiene_apio":
case "contiene_mostaza":
case "contiene_granos_de_sesamo":
case "contiene_sulfitos":
case "contiene_moluscos":
case "contiene_altramuces":
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(valor,"true");

break;
case "precio":
case "categoria_id":
return parseFloat(valor);

break;
default:
return valor;

}
})();
var body_extendido = cljs.core.clj__GT_js(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,campo,valor_parseado,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["_method","PUT","usuario_id",usuario_id], 0)));
var url = ["/api/productos/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('');
var opciones = ({"method": "POST", "headers": ({"Content-Type": "application/json"}), "body": JSON.stringify(body_extendido)});
return fetch(url,opciones).then((function (respuesta){
if(cljs.core.truth_(respuesta.ok)){
cljs.core.reset_BANG_(administracion.editar.estado_actualizacion,["Campo ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(campo)," actualizado correctamente."].join(''));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(campo,"categoria_id")){
var categoria = administracion.editar.get_categoria_por_id(valor_parseado);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(producto,cljs.core.assoc,new cljs.core.Keyword(null,"categoria_id","categoria_id",-705480723),valor_parseado,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"nombre_categoria","nombre_categoria",-32557042),new cljs.core.Keyword(null,"nombre","nombre",1047347004).cljs$core$IFn$_invoke$arity$1(categoria)], 0));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(producto,cljs.core.assoc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(campo),valor_parseado);
}
} else {
return cljs.core.reset_BANG_(administracion.editar.estado_actualizacion,"Error del servidor al actualizar campo.");
}
})).catch((function (e){
return cljs.core.reset_BANG_(administracion.editar.estado_actualizacion,"Error del servidor al actualizar campo.");
}));
});
administracion.editar.actualizar_categoria = (function administracion$editar$actualizar_categoria(categoria,campo,valor){
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(categoria));
var usuario_id = localStorage.getItem("id");
var body = cljs.core.clj__GT_js(cljs.core.PersistentArrayMap.createAsIfByAssoc(["usuario_id",usuario_id,campo,valor]));
var url = ["/api/categoria/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('');
var opciones = ({"method": "PUT", "headers": ({"Content-Type": "application/json"}), "body": JSON.stringify(body)});
return fetch(url,opciones).then((function (respuesta){
if(cljs.core.truth_(respuesta.ok)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(categoria,cljs.core.assoc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(campo),valor);

return cljs.core.reset_BANG_(administracion.editar.estado_actualizacion,["Campo ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(campo)," actualizado correctamente."].join(''));
} else {
return cljs.core.reset_BANG_(administracion.editar.estado_actualizacion,"Error del servidor al actualizar campo.");
}
})).catch((function (e){
return cljs.core.reset_BANG_(administracion.editar.estado_actualizacion,"Error de red al actualizar.");
}));
});
administracion.editar.render_edicion_producto = (function administracion$editar$render_edicion_producto(producto){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Selecciona el campo que quieres modificar:"], null),new cljs.core.PersistentVector(null, 24, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5002__auto__ = cljs.core.deref(administracion.editar.campo_seleccionado);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__14707_SHARP_){
return cljs.core.reset_BANG_(administracion.editar.campo_seleccionado,p1__14707_SHARP_.target.value);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),""], null),"-- Selecciona un campo --"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"nombre"], null),"Nombre"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"description"], null),"Descripci\u00F3n"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"precio"], null),"Precio"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"categoria_id"], null),"Categor\u00EDa"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"tipo_plato"], null),"Tipo de plato"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"tipo_porcion"], null),"Tipo de porci\u00F3n"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),""], null),"-- Alergenos --"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"contiene_gluten"], null),"Contiene Gluten"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"contiene_crustaceos"], null),"Crustaceos"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"contiene_huevos"], null),"Huevos"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"contiene_pescado"], null),"Pescados"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"contiene_cacahuetes"], null),"Cacahuetes"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"contiene_soja"], null),"Soja"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"contiene_lacteos"], null),"L\u00E1cteos"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"contiene_frutos_de_cascara"], null),"Frutos de cascara"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"contiene_apio"], null),"Apio"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"contiene_mostaza"], null),"Mostaza"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"contiene_granos_de_sesamo"], null),"Granos de sesamo"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"contiene_sulfitos"], null),"Di\u00F3xido de azufre y sulfitos"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"contiene_moluscos"], null),"Moluscos"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"contiene_altramuces"], null),"Altramuces"], null)], null),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(administracion.editar.campo_seleccionado),""))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"15px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Nuevo valor para el campo seleccionado: "], null),(cljs.core.truth_((function (){var G__14743 = cljs.core.deref(administracion.editar.campo_seleccionado);
var fexpr__14742 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, ["contiene_mostaza",null,"contiene_crustaceos",null,"contiene_altramuces",null,"contiene_soja",null,"contiene_sulfitos",null,"contiene_pescado",null,"contiene_lacteos",null,"contiene_granos_de_sesamo",null,"contiene_moluscos",null,"contiene_gluten",null,"contiene_frutos_de_cascara",null,"contiene_cacahuetes",null,"contiene_huevos",null,"contiene_apio",null], null), null);
return (fexpr__14742.cljs$core$IFn$_invoke$arity$1 ? fexpr__14742.cljs$core$IFn$_invoke$arity$1(G__14743) : fexpr__14742.call(null, G__14743));
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5002__auto__ = cljs.core.deref(administracion.editar.nuevo_valor);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__14719_SHARP_){
return cljs.core.reset_BANG_(administracion.editar.nuevo_valor,p1__14719_SHARP_.target.value);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),""], null),"-- Selecciona una opci\u00F3n --"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"true"], null),"S\u00ED"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"false"], null),"No"], null)], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(administracion.editar.campo_seleccionado),"tipo_porcion"))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5002__auto__ = cljs.core.deref(administracion.editar.nuevo_valor);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__14721_SHARP_){
return cljs.core.reset_BANG_(administracion.editar.nuevo_valor,p1__14721_SHARP_.target.value);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),""], null),"-- Selecciona un tipo de porcion --"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"Media raci\u00F3n"], null),"Media raci\u00F3n"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"Raci\u00F3n completa"], null),"Raci\u00F3n completa"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"Por unidad"], null),"Por unidad"], null)], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(administracion.editar.campo_seleccionado),"tipo_plato"))?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5002__auto__ = cljs.core.deref(administracion.editar.nuevo_valor);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__14724_SHARP_){
return cljs.core.reset_BANG_(administracion.editar.nuevo_valor,p1__14724_SHARP_.target.value);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),""], null),"-- Selecciona un tipo de plato --"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"Tapa"], null),"Tapa"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"Al centro"], null),"Al centro"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"Principal"], null),"Principal"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"Postres"], null),"Postres"], null)], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(administracion.editar.campo_seleccionado),"categoria_id"))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5002__auto__ = cljs.core.deref(administracion.editar.nuevo_valor);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__14729_SHARP_){
return cljs.core.reset_BANG_(administracion.editar.nuevo_valor,p1__14729_SHARP_.target.value);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),""], null),"-- Selecciona una categor\u00EDa --"], null),(function (){var iter__5480__auto__ = (function administracion$editar$render_edicion_producto_$_iter__14756(s__14757){
return (new cljs.core.LazySeq(null,(function (){
var s__14757__$1 = s__14757;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__14757__$1);
if(temp__5804__auto__){
var s__14757__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14757__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__14757__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__14759 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__14758 = (0);
while(true){
if((i__14758 < size__5479__auto__)){
var map__14764 = cljs.core._nth(c__5478__auto__,i__14758);
var map__14764__$1 = cljs.core.__destructure_map(map__14764);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14764__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var nombre = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14764__$1,new cljs.core.Keyword(null,"nombre","nombre",1047347004));
cljs.core.chunk_append(b__14759,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),id], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(nombre)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__14814 = (i__14758 + (1));
i__14758 = G__14814;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14759),administracion$editar$render_edicion_producto_$_iter__14756(cljs.core.chunk_rest(s__14757__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14759),null);
}
} else {
var map__14766 = cljs.core.first(s__14757__$2);
var map__14766__$1 = cljs.core.__destructure_map(map__14766);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14766__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var nombre = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14766__$1,new cljs.core.Keyword(null,"nombre","nombre",1047347004));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),id], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(nombre)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),administracion$editar$render_edicion_producto_$_iter__14756(cljs.core.rest(s__14757__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.deref(app.db.categorias));
})()], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(administracion.editar.campo_seleccionado),"precio"))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"step","step",1288888124),"0.01",new cljs.core.Keyword(null,"min","min",444991522),"0",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(administracion.editar.nuevo_valor),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(producto),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(administracion.editar.campo_seleccionado)))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__14734_SHARP_){
return cljs.core.reset_BANG_(administracion.editar.nuevo_valor,p1__14734_SHARP_.target.value);
})], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(administracion.editar.nuevo_valor),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(producto),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(administracion.editar.campo_seleccionado)))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__14735_SHARP_){
return cljs.core.reset_BANG_(administracion.editar.nuevo_valor,p1__14735_SHARP_.target.value);
})], null)], null)
))))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(administracion.editar.campo_seleccionado),"precio")){
var valor_num = parseFloat(cljs.core.deref(administracion.editar.nuevo_valor));
if(cljs.core.truth_((function (){var or__5002__auto__ = isNaN(valor_num);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (valor_num < (0));
}
})())){
return alert("El precio debe ser un n\u00FAmero mayor o igual que 0");
} else {
if(cljs.core.truth_(administracion.editar.tiene_mas_de_dos_decimales_QMARK_(cljs.core.deref(administracion.editar.nuevo_valor)))){
return alert("El precio solo puede tener hasta dos decimales");
} else {
administracion.editar.actualizar_producto(producto,cljs.core.deref(administracion.editar.campo_seleccionado),cljs.core.deref(administracion.editar.nuevo_valor),valor_num);

cljs.core.reset_BANG_(administracion.editar.nuevo_valor,"");

return alert("Producto actualizado, dale al boton de 'Mostrar productos' para actualizar el listado.");

}
}
} else {
administracion.editar.actualizar_producto(producto,cljs.core.deref(administracion.editar.campo_seleccionado),cljs.core.deref(administracion.editar.nuevo_valor),null);

cljs.core.reset_BANG_(administracion.editar.nuevo_valor,"");

return alert("Producto actualizado, dale al boton de 'Mostrar productos' para actualizar el listado.");

}
})], null),"Actualizar campo"], null)], null):null)], null);
});
administracion.editar.render_edicion_categoria = (function administracion$editar$render_edicion_categoria(id,categoria){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Selecciona el campo que quieres modificar:"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5002__auto__ = cljs.core.deref(administracion.editar.campo_seleccionado);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__14770_SHARP_){
return cljs.core.reset_BANG_(administracion.editar.campo_seleccionado,p1__14770_SHARP_.target.value);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),""], null),"-- Selecciona un campo --"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"nombre"], null),"Nombre"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"descripcion"], null),"Descripci\u00F3n"], null)], null),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(administracion.editar.campo_seleccionado),""))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"15px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Nuevo valor para el campo seleccionado: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(administracion.editar.nuevo_valor),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(categoria),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(administracion.editar.campo_seleccionado)))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__14771_SHARP_){
return cljs.core.reset_BANG_(administracion.editar.nuevo_valor,p1__14771_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
administracion.editar.actualizar_categoria(categoria,cljs.core.deref(administracion.editar.campo_seleccionado),cljs.core.deref(administracion.editar.nuevo_valor));

cljs.core.reset_BANG_(administracion.editar.nuevo_valor,"");

return alert("Categoria actualizado, dale al boton de 'Mostrar categorias' para actualizar el listado.");
})], null),"Actualizar campo"], null)], null):null)], null);
});
administracion.editar.alergenos = new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contiene_gluten","contiene_gluten",1049677190),"Gluten"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contiene_crustaceos","contiene_crustaceos",-1598834441),"Crust\u00E1ceos"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contiene_huevos","contiene_huevos",-187290051),"Huevos"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contiene_pescado","contiene_pescado",36691073),"Pescado"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contiene_cacahuetes","contiene_cacahuetes",86487519),"Cacahuetes"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contiene_soja","contiene_soja",1788467266),"Soja"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contiene_lacteos","contiene_lacteos",-444660493),"L\u00E1cteos"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contiene_frutos_de_cascara","contiene_frutos_de_cascara",1264591689),"Frutos de c\u00E1scara"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contiene_apio","contiene_apio",-156466404),"Apio"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contiene_mostaza","contiene_mostaza",503752433),"Mostaza"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contiene_granos_de_sesamo","contiene_granos_de_sesamo",347607811),"S\u00E9samo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contiene_sulfitos","contiene_sulfitos",-2028877188),"Sulfitos"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contiene_moluscos","contiene_moluscos",1520604576),"Moluscos"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contiene_altramuces","contiene_altramuces",-1905352663),"Altramuces"], null)], null);
administracion.editar.columnas_alergenos = (function administracion$editar$columnas_alergenos(producto){
var vals = cljs.core.deref(producto);
var mitad = cljs.core.quot(cljs.core.count(administracion.editar.alergenos),(2));
var vec__14774 = cljs.core.split_at(mitad,administracion.editar.alergenos);
var col1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14774,(0),null);
var col2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14774,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-6","div.col-6",-2040623677),(function (){var iter__5480__auto__ = (function administracion$editar$columnas_alergenos_$_iter__14777(s__14778){
return (new cljs.core.LazySeq(null,(function (){
var s__14778__$1 = s__14778;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__14778__$1);
if(temp__5804__auto__){
var s__14778__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14778__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__14778__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__14780 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__14779 = (0);
while(true){
if((i__14779 < size__5479__auto__)){
var vec__14781 = cljs.core._nth(c__5478__auto__,i__14779);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14781,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14781,(1),null);
cljs.core.chunk_append(b__14780,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(label),": "].join('')], null),(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(vals,k))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-success","span.text-success",429372420),"\u2714\uFE0F"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-danger","span.text-danger",1634101399),"\u274C"], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)));

var G__14817 = (i__14779 + (1));
i__14779 = G__14817;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14780),administracion$editar$columnas_alergenos_$_iter__14777(cljs.core.chunk_rest(s__14778__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14780),null);
}
} else {
var vec__14787 = cljs.core.first(s__14778__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14787,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14787,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(label),": "].join('')], null),(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(vals,k))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-success","span.text-success",429372420),"\u2714\uFE0F"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-danger","span.text-danger",1634101399),"\u274C"], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)),administracion$editar$columnas_alergenos_$_iter__14777(cljs.core.rest(s__14778__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(col1);
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-6","div.col-6",-2040623677),(function (){var iter__5480__auto__ = (function administracion$editar$columnas_alergenos_$_iter__14791(s__14792){
return (new cljs.core.LazySeq(null,(function (){
var s__14792__$1 = s__14792;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__14792__$1);
if(temp__5804__auto__){
var s__14792__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14792__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__14792__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__14794 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__14793 = (0);
while(true){
if((i__14793 < size__5479__auto__)){
var vec__14796 = cljs.core._nth(c__5478__auto__,i__14793);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14796,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14796,(1),null);
cljs.core.chunk_append(b__14794,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(label),": "].join('')], null),(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(vals,k))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-success","span.text-success",429372420),"\u2714\uFE0F"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-danger","span.text-danger",1634101399),"\u274C"], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)));

var G__14818 = (i__14793 + (1));
i__14793 = G__14818;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14794),administracion$editar$columnas_alergenos_$_iter__14791(cljs.core.chunk_rest(s__14792__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14794),null);
}
} else {
var vec__14799 = cljs.core.first(s__14792__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14799,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14799,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(label),": "].join('')], null),(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(vals,k))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-success","span.text-success",429372420),"\u2714\uFE0F"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-danger","span.text-danger",1634101399),"\u274C"], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)),administracion$editar$columnas_alergenos_$_iter__14791(cljs.core.rest(s__14792__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(col2);
})()], null)], null);
});
administracion.editar.page = (function administracion$editar$page(){
if(app.state.rol_admin_QMARK_()){
var params = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.state.current_route),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.Keyword(null,"path","path",-188191168)], null));
var tipo = new cljs.core.Keyword(null,"tipo","tipo",837631118).cljs$core$IFn$_invoke$arity$1(params);
var id = parseInt(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(params));
var with_let14802 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let14802","with-let14802",-1657834078));
var temp__5808__auto___14819 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___14819 == null)){
} else {
var c__12240__auto___14820 = temp__5808__auto___14819;
if((with_let14802.generation === c__12240__auto___14820.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let14802.generation = c__12240__auto___14820.ratomGeneration);
}

var init14803 = (with_let14802.length === (0));
var _ = ((((init14803) || (cljs.core.not(with_let14802.hasOwnProperty((0))))))?(with_let14802[(0)] = cljs.core.reset_BANG_(administracion.editar.producto,administracion.editar.get_producto_por_id(id))):(with_let14802[(0)]));
var res14804 = (function (){var with_let14805 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let14805","with-let14805",-59856191));
var temp__5808__auto___14821 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___14821 == null)){
} else {
var c__12240__auto___14822 = temp__5808__auto___14821;
if((with_let14805.generation === c__12240__auto___14822.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let14805.generation = c__12240__auto___14822.ratomGeneration);
}

var init14806 = (with_let14805.length === (0));
var ___$1 = ((((init14806) || (cljs.core.not(with_let14805.hasOwnProperty((0))))))?(with_let14805[(0)] = cljs.core.reset_BANG_(administracion.editar.categoria,administracion.editar.get_categoria_por_id(id))):(with_let14805[(0)]));
var res14807 = (function (){var G__14808 = tipo;
switch (G__14808) {
case "producto":
if(cljs.core.truth_(cljs.core.deref(administracion.editar.producto))){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"divEditar"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-12","div.col-12",361685154),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"volverAtras"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (location.hash = "#/administracion");
})], null),"Volver al panel de Administraci\u00F3n"], null)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-12.col-md-6","div.col-12.col-md-6",315203922),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"divDatos"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Datos del producto seleccionado:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"ID: "], null),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(administracion.editar.producto))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Nombre: "], null),new cljs.core.Keyword(null,"nombre","nombre",1047347004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(administracion.editar.producto))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Descripci\u00F3n: "], null),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(administracion.editar.producto))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Precio: "], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"precio","precio",-1246474385).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(administracion.editar.producto)))," \u20AC"].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Categor\u00EDa: "], null),new cljs.core.Keyword(null,"nombre_categoria","nombre_categoria",-32557042).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(administracion.editar.producto))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Tipo de plato: "], null),new cljs.core.Keyword(null,"tipo_plato","tipo_plato",-1144165380).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(administracion.editar.producto))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Tipo de porci\u00F3n: "], null),new cljs.core.Keyword(null,"tipo_porcion","tipo_porcion",1174589739).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(administracion.editar.producto))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Al\u00E9rgenos informativos: "], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [administracion.editar.columnas_alergenos,administracion.editar.producto], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-12.col-md-6","div.col-12.col-md-6",315203922),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"divActualizar"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [administracion.editar.render_edicion_producto,administracion.editar.producto], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"divEditar"], null),"Producto no encontrado"], null);
}

break;
case "categoria":
if(cljs.core.truth_(cljs.core.deref(administracion.editar.categoria))){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"divEditar"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-12","div.col-12",361685154),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"volverAtras"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (location.hash = "#/administracion");
})], null),"Volver al panel de Administraci\u00F3n"], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-12.col-md-6","div.col-12.col-md-6",315203922),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"divDatos"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Editar categor\u00EDa:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"ID: "], null),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(administracion.editar.categoria))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Nombre: "], null),new cljs.core.Keyword(null,"nombre","nombre",1047347004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(administracion.editar.categoria))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Descripci\u00F3n: "], null),new cljs.core.Keyword(null,"descripcion","descripcion",-1196002063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(administracion.editar.categoria))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-12.col-md-6","div.col-12.col-md-6",315203922),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"divActualizar"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [administracion.editar.render_edicion_categoria,id,administracion.editar.categoria], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"divEditar"], null),"Producto no encontrado"], null);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14808)].join('')));

}
})();
return res14807;
})();
return res14804;
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.alert.alert-danger","div.alert.alert-danger",-890058301),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"\u26A0\uFE0F Acceso denegado"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Para acceder a esta seccion, debes logearte y acceder desde su boton determinado."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (location.hash = "#/administracion");
})], null),"LOGIN"], null)], null);
}
});

//# sourceMappingURL=administracion.editar.js.map
