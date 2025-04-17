goog.provide('administracion.editar');
administracion.editar.usuario_id = localStorage.getItem("id");
administracion.editar.producto = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
administracion.editar.categoria = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
administracion.editar.campo_seleccionado = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
administracion.editar.nuevo_valor = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
administracion.editar.estado_actualizacion = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
administracion.editar.get_producto_por_id = (function administracion$editar$get_producto_por_id(id){
return cljs.core.some((function (p1__18154_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__18154_SHARP_),id)){
return p1__18154_SHARP_;
} else {
return null;
}
}),cljs.core.deref(app.db.list_productos));
});
administracion.editar.obtener_id_categoria = (function administracion$editar$obtener_id_categoria(nombre,categorias__$1){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__18155_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nombre","nombre",1047347004).cljs$core$IFn$_invoke$arity$1(p1__18155_SHARP_),nombre);
}),categorias__$1)));
});
administracion.editar.get_categoria_por_id = (function administracion$editar$get_categoria_por_id(id){
return cljs.core.some((function (p1__18156_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__18156_SHARP_),id)){
return p1__18156_SHARP_;
} else {
return null;
}
}),cljs.core.deref(app.db.categorias));
});
administracion.editar.actualizar_producto = (function administracion$editar$actualizar_producto(producto,campo,valor){
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(producto));
var usuario_id = localStorage.getItem("id");
var valor_parseado = (function (){var G__18157 = campo;
switch (G__18157) {
case "es_vegetariano":
case "es_vegano":
case "es_sin_gluten":
case "es_sin_lactosa":
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
var body_extendido = cljs.core.clj__GT_js(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,campo,valor_parseado,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["usuario_id",usuario_id,"_method","PUT"], 0)));
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
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Selecciona el campo que quieres modificar:"], null),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5002__auto__ = cljs.core.deref(administracion.editar.campo_seleccionado);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__18158_SHARP_){
return cljs.core.reset_BANG_(administracion.editar.campo_seleccionado,p1__18158_SHARP_.target.value);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),""], null),"-- Selecciona un campo --"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"nombre"], null),"Nombre"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"description"], null),"Descripci\u00F3n"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"precio"], null),"Precio"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"categoria_id"], null),"Categor\u00EDa"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"tipo_plato"], null),"Tipo de plato"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"tipo_porcion"], null),"Tipo de porci\u00F3n"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"es_vegetariano"], null),"Vegetariano"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"es_vegano"], null),"Vegano"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"es_sin_gluten"], null),"Sin gluten"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"es_sin_lactosa"], null),"Sin lactosa"], null)], null),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(administracion.editar.campo_seleccionado),""))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"15px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Nuevo valor para el campo seleccionado: "], null),(cljs.core.truth_((function (){var G__18165 = cljs.core.deref(administracion.editar.campo_seleccionado);
var fexpr__18164 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["es_sin_lactosa",null,"es_sin_gluten",null,"es_vegano",null,"es_vegetariano",null], null), null);
return (fexpr__18164.cljs$core$IFn$_invoke$arity$1 ? fexpr__18164.cljs$core$IFn$_invoke$arity$1(G__18165) : fexpr__18164.call(null, G__18165));
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5002__auto__ = cljs.core.deref(administracion.editar.nuevo_valor);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__18159_SHARP_){
return cljs.core.reset_BANG_(administracion.editar.nuevo_valor,p1__18159_SHARP_.target.value);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),""], null),"-- Selecciona una opci\u00F3n --"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"true"], null),"S\u00ED"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"false"], null),"No"], null)], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(administracion.editar.campo_seleccionado),"tipo_porcion"))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5002__auto__ = cljs.core.deref(administracion.editar.nuevo_valor);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__18160_SHARP_){
return cljs.core.reset_BANG_(administracion.editar.nuevo_valor,p1__18160_SHARP_.target.value);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),""], null),"-- Selecciona un tipo de porcion --"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"Media raci\u00F3n"], null),"Media raci\u00F3n"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"Raci\u00F3n completa"], null),"Raci\u00F3n completa"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"Por unidad"], null),"Por unidad"], null)], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(administracion.editar.campo_seleccionado),"tipo_plato"))?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5002__auto__ = cljs.core.deref(administracion.editar.nuevo_valor);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__18161_SHARP_){
return cljs.core.reset_BANG_(administracion.editar.nuevo_valor,p1__18161_SHARP_.target.value);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),""], null),"-- Selecciona un tipo de plato --"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"Tapa"], null),"Tapa"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"Al centro"], null),"Al centro"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"Principal"], null),"Principal"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"Postres"], null),"Postres"], null)], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(administracion.editar.campo_seleccionado),"categoria_id"))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5002__auto__ = cljs.core.deref(administracion.editar.nuevo_valor);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__18162_SHARP_){
return cljs.core.reset_BANG_(administracion.editar.nuevo_valor,p1__18162_SHARP_.target.value);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),""], null),"-- Selecciona una categor\u00EDa --"], null),(function (){var iter__5480__auto__ = (function administracion$editar$render_edicion_producto_$_iter__18166(s__18167){
return (new cljs.core.LazySeq(null,(function (){
var s__18167__$1 = s__18167;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__18167__$1);
if(temp__5804__auto__){
var s__18167__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18167__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__18167__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__18169 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__18168 = (0);
while(true){
if((i__18168 < size__5479__auto__)){
var map__18170 = cljs.core._nth(c__5478__auto__,i__18168);
var map__18170__$1 = cljs.core.__destructure_map(map__18170);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18170__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var nombre = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18170__$1,new cljs.core.Keyword(null,"nombre","nombre",1047347004));
cljs.core.chunk_append(b__18169,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),id], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(nombre)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__18182 = (i__18168 + (1));
i__18168 = G__18182;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18169),administracion$editar$render_edicion_producto_$_iter__18166(cljs.core.chunk_rest(s__18167__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18169),null);
}
} else {
var map__18171 = cljs.core.first(s__18167__$2);
var map__18171__$1 = cljs.core.__destructure_map(map__18171);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18171__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var nombre = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18171__$1,new cljs.core.Keyword(null,"nombre","nombre",1047347004));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),id], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(nombre)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),administracion$editar$render_edicion_producto_$_iter__18166(cljs.core.rest(s__18167__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.deref(app.db.categorias));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(administracion.editar.nuevo_valor),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(producto),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(administracion.editar.campo_seleccionado)))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__18163_SHARP_){
return cljs.core.reset_BANG_(administracion.editar.nuevo_valor,p1__18163_SHARP_.target.value);
})], null)], null)
)))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
administracion.editar.actualizar_producto(producto,cljs.core.deref(administracion.editar.campo_seleccionado),cljs.core.deref(administracion.editar.nuevo_valor));

return cljs.core.reset_BANG_(administracion.editar.nuevo_valor,"");
})], null),"Actualizar campo"], null)], null):null)], null);
});
administracion.editar.render_edicion_categoria = (function administracion$editar$render_edicion_categoria(categoria){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Selecciona el campo que quieres modificar:"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5002__auto__ = cljs.core.deref(administracion.editar.campo_seleccionado);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__18172_SHARP_){
return cljs.core.reset_BANG_(administracion.editar.campo_seleccionado,p1__18172_SHARP_.target.value);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),""], null),"-- Selecciona un campo --"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"nombre"], null),"Nombre"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"descripcion"], null),"Descripci\u00F3n"], null)], null),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(administracion.editar.campo_seleccionado),""))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"15px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Nuevo valor para el campo seleccionado: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(administracion.editar.nuevo_valor),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(categoria),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(administracion.editar.campo_seleccionado)))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__18173_SHARP_){
return cljs.core.reset_BANG_(administracion.editar.nuevo_valor,p1__18173_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
administracion.editar.actualizar_categoria(categoria,cljs.core.deref(administracion.editar.campo_seleccionado),cljs.core.deref(administracion.editar.nuevo_valor));

return cljs.core.reset_BANG_(administracion.editar.nuevo_valor,"");
})], null),"Actualizar campo"], null)], null):null)], null);
});
administracion.editar.page = (function administracion$editar$page(){
var params = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.state.current_route),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.Keyword(null,"path","path",-188191168)], null));
var tipo = new cljs.core.Keyword(null,"tipo","tipo",837631118).cljs$core$IFn$_invoke$arity$1(params);
var id = parseInt(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(params));
var with_let18174 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let18174","with-let18174",413186270));
var temp__5808__auto___18183 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___18183 == null)){
} else {
var c__12240__auto___18184 = temp__5808__auto___18183;
if((with_let18174.generation === c__12240__auto___18184.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let18174.generation = c__12240__auto___18184.ratomGeneration);
}

var init18175 = (with_let18174.length === (0));
var _ = ((((init18175) || (cljs.core.not(with_let18174.hasOwnProperty((0))))))?(with_let18174[(0)] = cljs.core.reset_BANG_(administracion.editar.producto,administracion.editar.get_producto_por_id(id))):(with_let18174[(0)]));
var res18176 = (function (){var with_let18177 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let18177","with-let18177",-1631691993));
var temp__5808__auto___18185 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___18185 == null)){
} else {
var c__12240__auto___18186 = temp__5808__auto___18185;
if((with_let18177.generation === c__12240__auto___18186.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let18177.generation = c__12240__auto___18186.ratomGeneration);
}

var init18178 = (with_let18177.length === (0));
var ___$1 = ((((init18178) || (cljs.core.not(with_let18177.hasOwnProperty((0))))))?(with_let18177[(0)] = cljs.core.reset_BANG_(administracion.editar.categoria,administracion.editar.get_categoria_por_id(id))):(with_let18177[(0)]));
var res18179 = (function (){var G__18180 = tipo;
switch (G__18180) {
case "producto":
if(cljs.core.truth_(cljs.core.deref(administracion.editar.producto))){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"divEditar"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-12","div.col-12",361685154),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"volverAtras"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (location.hash = "#/administracion");
})], null),"Volver al panel de Administraci\u00F3n"], null)], null),new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-12.col-md-6","div.col-12.col-md-6",315203922),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"divDatos"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Datos del producto seleccionado:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"ID: "], null),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(administracion.editar.producto))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Nombre: "], null),new cljs.core.Keyword(null,"nombre","nombre",1047347004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(administracion.editar.producto))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Descripci\u00F3n: "], null),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(administracion.editar.producto))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Precio: "], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"precio","precio",-1246474385).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(administracion.editar.producto)))," \u20AC"].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Categor\u00EDa: "], null),new cljs.core.Keyword(null,"nombre_categoria","nombre_categoria",-32557042).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(administracion.editar.producto))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Tipo de plato: "], null),new cljs.core.Keyword(null,"tipo_plato","tipo_plato",-1144165380).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(administracion.editar.producto))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Tipo de porci\u00F3n: "], null),new cljs.core.Keyword(null,"tipo_porcion","tipo_porcion",1174589739).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(administracion.editar.producto))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Restricciones alimentarias: "], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Vegetariano: "], null),(cljs.core.truth_(new cljs.core.Keyword(null,"es_vegetariano","es_vegetariano",650459360).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(administracion.editar.producto)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"green"], null)], null),"\u2714\uFE0F"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),"\u274C"], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Vegano: "], null),(cljs.core.truth_(new cljs.core.Keyword(null,"es_vegano","es_vegano",1938781139).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(administracion.editar.producto)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"green"], null)], null),"\u2714\uFE0F"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),"\u274C"], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Gluten: "], null),(cljs.core.truth_(new cljs.core.Keyword(null,"es_sin_gluten","es_sin_gluten",-277510319).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(administracion.editar.producto)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"green"], null)], null),"\u2714\uFE0F"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),"\u274C"], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Lactosa: "], null),(cljs.core.truth_(new cljs.core.Keyword(null,"es_sin_lactosa","es_sin_lactosa",810297151).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(administracion.editar.producto)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"green"], null)], null),"\u2714\uFE0F"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),"\u274C"], null))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-12.col-md-6","div.col-12.col-md-6",315203922),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"divActualizar"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [administracion.editar.render_edicion_producto,administracion.editar.producto], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"divEditar"], null),"Producto no encontrado"], null);
}

break;
case "categoria":
if(cljs.core.truth_(cljs.core.deref(administracion.editar.categoria))){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"divEditar"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-12","div.col-12",361685154),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"volverAtras"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (location.hash = "#/administracion");
})], null),"Volver al panel de Administraci\u00F3n"], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-12.col-md-6","div.col-12.col-md-6",315203922),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"divDatos"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Editar categor\u00EDa:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"ID: "], null),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(administracion.editar.categoria))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Nombre: "], null),new cljs.core.Keyword(null,"nombre","nombre",1047347004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(administracion.editar.categoria))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Descripci\u00F3n: "], null),new cljs.core.Keyword(null,"descripcion","descripcion",-1196002063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(administracion.editar.categoria))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-12.col-md-6","div.col-12.col-md-6",315203922),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"divActualizar"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [administracion.editar.render_edicion_categoria,administracion.editar.categoria], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"divEditar"], null),"Producto no encontrado"], null);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18180)].join('')));

}
})();
return res18179;
})();
return res18176;
});

//# sourceMappingURL=administracion.editar.js.map
