goog.provide('administracion.core');
if((typeof administracion !== 'undefined') && (typeof administracion.core !== 'undefined') && (typeof administracion.core.logged_in_QMARK_ !== 'undefined')){
} else {
administracion.core.logged_in_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof administracion !== 'undefined') && (typeof administracion.core !== 'undefined') && (typeof administracion.core.loading_QMARK_ !== 'undefined')){
} else {
administracion.core.loading_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if((typeof administracion !== 'undefined') && (typeof administracion.core !== 'undefined') && (typeof administracion.core.usuario !== 'undefined')){
} else {
administracion.core.usuario = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
}
if((typeof administracion !== 'undefined') && (typeof administracion.core !== 'undefined') && (typeof administracion.core.contrasenia !== 'undefined')){
} else {
administracion.core.contrasenia = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
}
administracion.core.sesion_verificada_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
if((typeof administracion !== 'undefined') && (typeof administracion.core !== 'undefined') && (typeof administracion.core.datos_usuario !== 'undefined')){
} else {
administracion.core.datos_usuario = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof administracion !== 'undefined') && (typeof administracion.core !== 'undefined') && (typeof administracion.core.auth_token !== 'undefined')){
} else {
administracion.core.auth_token = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof administracion !== 'undefined') && (typeof administracion.core !== 'undefined') && (typeof administracion.core.mostrar_productos_QMARK_ !== 'undefined')){
} else {
administracion.core.mostrar_productos_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if((typeof administracion !== 'undefined') && (typeof administracion.core !== 'undefined') && (typeof administracion.core.mostrar_categorias_QMARK_ !== 'undefined')){
} else {
administracion.core.mostrar_categorias_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
administracion.core.categoria_seleccionada = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("todas");
if((typeof administracion !== 'undefined') && (typeof administracion.core !== 'undefined') && (typeof administracion.core.categoria_busqueda !== 'undefined')){
} else {
administracion.core.categoria_busqueda = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
}
if((typeof administracion !== 'undefined') && (typeof administracion.core !== 'undefined') && (typeof administracion.core.producto_busqueda !== 'undefined')){
} else {
administracion.core.producto_busqueda = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
}
administracion.core.verificar_sesion = (function administracion$core$verificar_sesion(){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic("/api/admin",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),true,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
var usuario = new cljs.core.Keyword(null,"usuario","usuario",-1332303918).cljs$core$IFn$_invoke$arity$1(response);
cljs.core.reset_BANG_(administracion.core.logged_in_QMARK_,true);

cljs.core.reset_BANG_(administracion.core.datos_usuario,usuario);

localStorage.setItem("id",new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(usuario));

cljs.core.reset_BANG_(administracion.core.sesion_verificada_QMARK_,true);

return app.state.set_rol(new cljs.core.Keyword(null,"rol","rol",-1201341516).cljs$core$IFn$_invoke$arity$1(usuario));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (_){
cljs.core.reset_BANG_(administracion.core.logged_in_QMARK_,false);

cljs.core.reset_BANG_(administracion.core.datos_usuario,null);

return cljs.core.reset_BANG_(administracion.core.sesion_verificada_QMARK_,true);
})], null)], 0));
});
administracion.core.render_categorias = (function administracion$core$render_categorias(){
var texto = clojure.string.lower_case(cljs.core.deref(administracion.core.categoria_busqueda));
var categorias_filtradas = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__15177_SHARP_){
return clojure.string.includes_QMARK_(clojure.string.lower_case(new cljs.core.Keyword(null,"nombre","nombre",1047347004).cljs$core$IFn$_invoke$arity$1(p1__15177_SHARP_)),texto);
}),cljs.core.deref(app.db.categorias));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-12","div.col-12",361685154),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Lista de categorias"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control.mb-3","input.form-control.mb-3",1871698700),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Buscar categor\u00EDa por nombre...",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(administracion.core.categoria_busqueda),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__15178_SHARP_){
return cljs.core.reset_BANG_(administracion.core.categoria_busqueda,p1__15178_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"table table-striped"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"id"], null),"ID"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Nombre"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.d-none.d-sm-table-cell","th.d-none.d-sm-table-cell",-1277487048),"Descripcion"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"tdButton"], null),"Editar"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"tdButton"], null),"Eliminar"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__5480__auto__ = (function administracion$core$render_categorias_$_iter__15179(s__15180){
return (new cljs.core.LazySeq(null,(function (){
var s__15180__$1 = s__15180;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__15180__$1);
if(temp__5804__auto__){
var s__15180__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15180__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__15180__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__15182 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__15181 = (0);
while(true){
if((i__15181 < size__5479__auto__)){
var map__15183 = cljs.core._nth(c__5478__auto__,i__15181);
var map__15183__$1 = cljs.core.__destructure_map(map__15183);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15183__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var nombre = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15183__$1,new cljs.core.Keyword(null,"nombre","nombre",1047347004));
var descripcion = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15183__$1,new cljs.core.Keyword(null,"descripcion","descripcion",-1196002063));
var activo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15183__$1,new cljs.core.Keyword(null,"activo","activo",-1391186334));
cljs.core.chunk_append(b__15182,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(activo)?"table-success":"table-danger")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"tdButton"], null),id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),nombre], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.d-none.d-sm-table-cell","td.d-none.d-sm-table-cell",-1180555461),descripcion], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"tdButton"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__15181,map__15183,map__15183__$1,id,nombre,descripcion,activo,c__5478__auto__,size__5479__auto__,b__15182,s__15180__$2,temp__5804__auto__,texto,categorias_filtradas){
return (function (){
return (location.hash = ["/editar/categoria/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
});})(i__15181,map__15183,map__15183__$1,id,nombre,descripcion,activo,c__5478__auto__,size__5479__auto__,b__15182,s__15180__$2,temp__5804__auto__,texto,categorias_filtradas))
], null),"Editar"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"tdButton"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__15181,map__15183,map__15183__$1,id,nombre,descripcion,activo,c__5478__auto__,size__5479__auto__,b__15182,s__15180__$2,temp__5804__auto__,texto,categorias_filtradas){
return (function (){
return app.db.activo_categoria(id);
});})(i__15181,map__15183,map__15183__$1,id,nombre,descripcion,activo,c__5478__auto__,size__5479__auto__,b__15182,s__15180__$2,temp__5804__auto__,texto,categorias_filtradas))
], null),"Activar/Desactivar categoria"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__15208 = (i__15181 + (1));
i__15181 = G__15208;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15182),administracion$core$render_categorias_$_iter__15179(cljs.core.chunk_rest(s__15180__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15182),null);
}
} else {
var map__15184 = cljs.core.first(s__15180__$2);
var map__15184__$1 = cljs.core.__destructure_map(map__15184);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15184__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var nombre = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15184__$1,new cljs.core.Keyword(null,"nombre","nombre",1047347004));
var descripcion = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15184__$1,new cljs.core.Keyword(null,"descripcion","descripcion",-1196002063));
var activo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15184__$1,new cljs.core.Keyword(null,"activo","activo",-1391186334));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(activo)?"table-success":"table-danger")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"tdButton"], null),id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),nombre], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.d-none.d-sm-table-cell","td.d-none.d-sm-table-cell",-1180555461),descripcion], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"tdButton"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__15184,map__15184__$1,id,nombre,descripcion,activo,s__15180__$2,temp__5804__auto__,texto,categorias_filtradas){
return (function (){
return (location.hash = ["/editar/categoria/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
});})(map__15184,map__15184__$1,id,nombre,descripcion,activo,s__15180__$2,temp__5804__auto__,texto,categorias_filtradas))
], null),"Editar"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"tdButton"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__15184,map__15184__$1,id,nombre,descripcion,activo,s__15180__$2,temp__5804__auto__,texto,categorias_filtradas){
return (function (){
return app.db.activo_categoria(id);
});})(map__15184,map__15184__$1,id,nombre,descripcion,activo,s__15180__$2,temp__5804__auto__,texto,categorias_filtradas))
], null),"Activar/Desactivar categoria"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),administracion$core$render_categorias_$_iter__15179(cljs.core.rest(s__15180__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(categorias_filtradas);
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (location.hash = "/nuevo/categoria");
}),new cljs.core.Keyword(null,"class","class",-2030961996),"nuevo"], null),"A\u00F1adir nueva categoria"], null)], null)], null)], null)], null)], null);
});
administracion.core.render_productos = (function administracion$core$render_productos(){
var texto = clojure.string.lower_case(cljs.core.deref(administracion.core.producto_busqueda));
var categoria = clojure.string.lower_case(cljs.core.deref(administracion.core.categoria_seleccionada));
var productos_filtradas = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__15186_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(categoria,"todas")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(new cljs.core.Keyword(null,"nombre_categoria","nombre_categoria",-32557042).cljs$core$IFn$_invoke$arity$1(p1__15186_SHARP_)),categoria)));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__15185_SHARP_){
return clojure.string.includes_QMARK_(clojure.string.lower_case(new cljs.core.Keyword(null,"nombre","nombre",1047347004).cljs$core$IFn$_invoke$arity$1(p1__15185_SHARP_)),texto);
}),cljs.core.deref(app.db.list_productos)));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-12","div.col-12",361685154),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group.mb-3","div.form-group.mb-3",-1753728762),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"filtro-categoria"], null),"Filtrar por categor\u00EDa:"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select.form-control","select.form-control",696610397),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"filtro-categoria",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(administracion.core.categoria_seleccionada),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__15187_SHARP_){
return cljs.core.reset_BANG_(administracion.core.categoria_seleccionada,p1__15187_SHARP_.target.value);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"todas"], null),"Todas las categor\u00EDas"], null),(function (){var iter__5480__auto__ = (function administracion$core$render_productos_$_iter__15189(s__15190){
return (new cljs.core.LazySeq(null,(function (){
var s__15190__$1 = s__15190;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__15190__$1);
if(temp__5804__auto__){
var s__15190__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15190__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__15190__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__15192 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__15191 = (0);
while(true){
if((i__15191 < size__5479__auto__)){
var map__15193 = cljs.core._nth(c__5478__auto__,i__15191);
var map__15193__$1 = cljs.core.__destructure_map(map__15193);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15193__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var nombre = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15193__$1,new cljs.core.Keyword(null,"nombre","nombre",1047347004));
cljs.core.chunk_append(b__15192,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),nombre], null),nombre], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__15209 = (i__15191 + (1));
i__15191 = G__15209;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15192),administracion$core$render_productos_$_iter__15189(cljs.core.chunk_rest(s__15190__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15192),null);
}
} else {
var map__15194 = cljs.core.first(s__15190__$2);
var map__15194__$1 = cljs.core.__destructure_map(map__15194);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15194__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var nombre = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15194__$1,new cljs.core.Keyword(null,"nombre","nombre",1047347004));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),nombre], null),nombre], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),administracion$core$render_productos_$_iter__15189(cljs.core.rest(s__15190__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.deref(app.db.categorias));
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Lista de productos"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control.mb-3","input.form-control.mb-3",1871698700),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Buscar producto por nombre...",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(administracion.core.producto_busqueda),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__15188_SHARP_){
return cljs.core.reset_BANG_(administracion.core.producto_busqueda,p1__15188_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"table table-striped"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"id"], null),"ID"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Nombre"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.d-none.d-lg-table-cell","th.d-none.d-lg-table-cell",504922952),"Descripcion"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.d-none.d-sm-table-cell","th.d-none.d-sm-table-cell",-1277487048),"Precio"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.d-none.d-lg-table-cell","th.d-none.d-lg-table-cell",504922952),"Categor\u00EDa"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.d-none.d-lg-table-cell","th.d-none.d-lg-table-cell",504922952),"Tipo de plato"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Tipo de porci\u00F3n"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Editar"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Eliminar"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__5480__auto__ = (function administracion$core$render_productos_$_iter__15195(s__15196){
return (new cljs.core.LazySeq(null,(function (){
var s__15196__$1 = s__15196;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__15196__$1);
if(temp__5804__auto__){
var s__15196__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15196__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__15196__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__15198 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__15197 = (0);
while(true){
if((i__15197 < size__5479__auto__)){
var map__15199 = cljs.core._nth(c__5478__auto__,i__15197);
var map__15199__$1 = cljs.core.__destructure_map(map__15199);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15199__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var nombre = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15199__$1,new cljs.core.Keyword(null,"nombre","nombre",1047347004));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15199__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var precio = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15199__$1,new cljs.core.Keyword(null,"precio","precio",-1246474385));
var nombre_categoria = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15199__$1,new cljs.core.Keyword(null,"nombre_categoria","nombre_categoria",-32557042));
var tipo_plato = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15199__$1,new cljs.core.Keyword(null,"tipo_plato","tipo_plato",-1144165380));
var tipo_porcion = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15199__$1,new cljs.core.Keyword(null,"tipo_porcion","tipo_porcion",1174589739));
var activo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15199__$1,new cljs.core.Keyword(null,"activo","activo",-1391186334));
cljs.core.chunk_append(b__15198,cljs.core.with_meta(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(activo)?"table-success":"table-danger")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"id"], null),id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),nombre], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.d-none.d-lg-table-cell","td.d-none.d-lg-table-cell",-792699645),description], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.d-none.d-sm-table-cell","td.d-none.d-sm-table-cell",-1180555461),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(precio)," \u20AC"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.d-none.d-lg-table-cell","td.d-none.d-lg-table-cell",-792699645),nombre_categoria], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.d-none.d-lg-table-cell","td.d-none.d-lg-table-cell",-792699645),tipo_plato], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),tipo_porcion], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"tdButton"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__15197,map__15199,map__15199__$1,id,nombre,description,precio,nombre_categoria,tipo_plato,tipo_porcion,activo,c__5478__auto__,size__5479__auto__,b__15198,s__15196__$2,temp__5804__auto__,texto,categoria,productos_filtradas){
return (function (){
return (location.hash = ["/editar/producto/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
});})(i__15197,map__15199,map__15199__$1,id,nombre,description,precio,nombre_categoria,tipo_plato,tipo_porcion,activo,c__5478__auto__,size__5479__auto__,b__15198,s__15196__$2,temp__5804__auto__,texto,categoria,productos_filtradas))
], null),"Editar"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"tdButton"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__15197,map__15199,map__15199__$1,id,nombre,description,precio,nombre_categoria,tipo_plato,tipo_porcion,activo,c__5478__auto__,size__5479__auto__,b__15198,s__15196__$2,temp__5804__auto__,texto,categoria,productos_filtradas){
return (function (){
return app.db.activo_producto(id);
});})(i__15197,map__15199,map__15199__$1,id,nombre,description,precio,nombre_categoria,tipo_plato,tipo_porcion,activo,c__5478__auto__,size__5479__auto__,b__15198,s__15196__$2,temp__5804__auto__,texto,categoria,productos_filtradas))
], null),"Activar/Desactivar Producto"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__15211 = (i__15197 + (1));
i__15197 = G__15211;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15198),administracion$core$render_productos_$_iter__15195(cljs.core.chunk_rest(s__15196__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15198),null);
}
} else {
var map__15200 = cljs.core.first(s__15196__$2);
var map__15200__$1 = cljs.core.__destructure_map(map__15200);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15200__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var nombre = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15200__$1,new cljs.core.Keyword(null,"nombre","nombre",1047347004));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15200__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var precio = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15200__$1,new cljs.core.Keyword(null,"precio","precio",-1246474385));
var nombre_categoria = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15200__$1,new cljs.core.Keyword(null,"nombre_categoria","nombre_categoria",-32557042));
var tipo_plato = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15200__$1,new cljs.core.Keyword(null,"tipo_plato","tipo_plato",-1144165380));
var tipo_porcion = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15200__$1,new cljs.core.Keyword(null,"tipo_porcion","tipo_porcion",1174589739));
var activo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15200__$1,new cljs.core.Keyword(null,"activo","activo",-1391186334));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(activo)?"table-success":"table-danger")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"id"], null),id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),nombre], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.d-none.d-lg-table-cell","td.d-none.d-lg-table-cell",-792699645),description], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.d-none.d-sm-table-cell","td.d-none.d-sm-table-cell",-1180555461),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(precio)," \u20AC"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.d-none.d-lg-table-cell","td.d-none.d-lg-table-cell",-792699645),nombre_categoria], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.d-none.d-lg-table-cell","td.d-none.d-lg-table-cell",-792699645),tipo_plato], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),tipo_porcion], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"tdButton"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__15200,map__15200__$1,id,nombre,description,precio,nombre_categoria,tipo_plato,tipo_porcion,activo,s__15196__$2,temp__5804__auto__,texto,categoria,productos_filtradas){
return (function (){
return (location.hash = ["/editar/producto/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
});})(map__15200,map__15200__$1,id,nombre,description,precio,nombre_categoria,tipo_plato,tipo_porcion,activo,s__15196__$2,temp__5804__auto__,texto,categoria,productos_filtradas))
], null),"Editar"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"tdButton"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__15200,map__15200__$1,id,nombre,description,precio,nombre_categoria,tipo_plato,tipo_porcion,activo,s__15196__$2,temp__5804__auto__,texto,categoria,productos_filtradas){
return (function (){
return app.db.activo_producto(id);
});})(map__15200,map__15200__$1,id,nombre,description,precio,nombre_categoria,tipo_plato,tipo_porcion,activo,s__15196__$2,temp__5804__auto__,texto,categoria,productos_filtradas))
], null),"Activar/Desactivar Producto"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),administracion$core$render_productos_$_iter__15195(cljs.core.rest(s__15196__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(productos_filtradas);
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (location.hash = "/nuevo/producto");
}),new cljs.core.Keyword(null,"class","class",-2030961996),"nuevo"], null),"A\u00F1adir nuevo producto"], null)], null)], null)], null)], null)], null);
});
administracion.core.login = (function administracion$core$login(){
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic("/api/login",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nombre","nombre",1047347004),cljs.core.deref(administracion.core.usuario),new cljs.core.Keyword(null,"contrasenia","contrasenia",-983350213),cljs.core.deref(administracion.core.contrasenia)], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),true,new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__15201_SHARP_){
cljs.core.reset_BANG_(administracion.core.auth_token,null);

cljs.core.reset_BANG_(administracion.core.logged_in_QMARK_,true);

cljs.core.reset_BANG_(administracion.core.datos_usuario,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nombre","nombre",1047347004),new cljs.core.Keyword(null,"nombre","nombre",1047347004).cljs$core$IFn$_invoke$arity$1(p1__15201_SHARP_),new cljs.core.Keyword(null,"rol","rol",-1201341516),new cljs.core.Keyword(null,"rol","rol",-1201341516).cljs$core$IFn$_invoke$arity$1(p1__15201_SHARP_)], null));

localStorage.setItem("id",new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__15201_SHARP_));

return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic("/api/admin",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),true,new cljs.core.Keyword(null,"handler","handler",-195596612),(function (resp){
return console.log("Verificado como admin",resp);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (err){
return console.log("No eres admin",err);
})], null)], 0));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__15202_SHARP_){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error en la solicitud: ",p1__15202_SHARP_], 0));

alert("Credenciales incorrectas.");

return cljs.core.reset_BANG_(administracion.core.loading_QMARK_,false);
})], null)], 0));
});
administracion.core.login_form = (function administracion$core$login_form(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"administracion"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"entrada"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-12","div.col-12",361685154),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Nombre de usuario: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Ingrese su nombre de usuario",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(administracion.core.usuario),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__15203_SHARP_){
return cljs.core.reset_BANG_(administracion.core.usuario,p1__15203_SHARP_.target.value);
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Contrase\u00F1a: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"password",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Ingrese su contrase\u00F1a",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(administracion.core.contrasenia),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__15204_SHARP_){
return cljs.core.reset_BANG_(administracion.core.contrasenia,p1__15204_SHARP_.target.value);
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"rowButton"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-12","div.col-12",361685154),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
administracion.core.login();

return location.reload(true);
})], null),"Entrar"], null)], null)], null)], null)], null);
});
administracion.core.logout = (function administracion$core$logout(){
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic("/api/logout",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),true,new cljs.core.Keyword(null,"handler","handler",-195596612),(function (_){
cljs.core.reset_BANG_(administracion.core.logged_in_QMARK_,false);

cljs.core.reset_BANG_(administracion.core.datos_usuario,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nombre","nombre",1047347004),null,new cljs.core.Keyword(null,"rol","rol",-1201341516),null], null));

return localStorage.removeItem("id");
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (e){
return console.log("Error cerrando sesi\u00F3n",e);
})], null)], 0));
});
administracion.core.admin_panel = (function administracion$core$admin_panel(){
var with_let15205 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let15205","with-let15205",1051325164));
var temp__5808__auto___15212 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___15212 == null)){
} else {
var c__12240__auto___15213 = temp__5808__auto___15212;
if((with_let15205.generation === c__12240__auto___15213.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let15205.generation = c__12240__auto___15213.ratomGeneration);
}

var init15206 = (with_let15205.length === (0));
var _ = ((((init15206) || (cljs.core.not(with_let15205.hasOwnProperty((0))))))?(with_let15205[(0)] = (function (){
cljs.core.reset_BANG_(administracion.core.mostrar_productos_QMARK_,false);

return cljs.core.reset_BANG_(administracion.core.mostrar_categorias_QMARK_,false);
})()
):(with_let15205[(0)]));
var res15207 = ((cljs.core.not(cljs.core.deref(administracion.core.sesion_verificada_QMARK_)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Cargando sesi\u00F3n..."], null):(((cljs.core.deref(administracion.core.datos_usuario) == null))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"panel"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-12","div.col-12",361685154),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"panelBotones"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Aviso importante!!!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"No est\u00E1s logeado, debes de cerrar sesi\u00F3n y logearte correctamente."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
administracion.core.logout();

return location.reload(true);
})], null),"Cerrar sesi\u00F3n"], null)], null)], null):((cljs.core.not(cljs.core.deref(administracion.core.logged_in_QMARK_)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Acceso denegado."], null):(function (){var usuario = new cljs.core.Keyword(null,"rol","rol",-1201341516).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(administracion.core.datos_usuario));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(usuario,"admin")){
alert("Acceso denegado. Solo los administradores pueden acceder a este panel.");

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Acceso denegado."], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"panel"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-12","div.col-12",361685154),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"panelBotones"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),["Bienvenido/a, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"nombre","nombre",1047347004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(administracion.core.datos_usuario))),"!"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Tienes permisos, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(usuario)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Tienes acceso al panel de administraci\u00F3n."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
administracion.core.logout();

return location.reload(true);
})], null),"Cerrar sesi\u00F3n"], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(usuario,"admin"))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"botonesAdmin"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Eres administrador. Puedes editar el contenido."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_(administracion.core.mostrar_productos_QMARK_,true);

cljs.core.reset_BANG_(administracion.core.mostrar_categorias_QMARK_,false);

return app.db.fetch_list_productos();
})], null),"Mostrar productos"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_(administracion.core.mostrar_categorias_QMARK_,true);

cljs.core.reset_BANG_(administracion.core.mostrar_productos_QMARK_,false);

return app.db.fetch_list_categorias();
})], null),"Mostrar categor\u00EDas"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (location.hash = "#/imagenes");
})], null),"Mostrar fotograf\u00EDas"], null)], null):null),(cljs.core.truth_(cljs.core.deref(administracion.core.mostrar_productos_QMARK_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [administracion.core.render_productos], null):null),(cljs.core.truth_(cljs.core.deref(administracion.core.mostrar_categorias_QMARK_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [administracion.core.render_categorias], null):null)], null)], null);
}
})()
)));
return res15207;
});
administracion.core.page = (function administracion$core$page(){
if(cljs.core.not(cljs.core.deref(administracion.core.sesion_verificada_QMARK_))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"administracion"], null),"Verificando sesi\u00F3n..."], null);
} else {
if(cljs.core.truth_(cljs.core.deref(administracion.core.logged_in_QMARK_))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [administracion.core.admin_panel], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [administracion.core.login_form], null);

}
}
});
administracion.core.init = (function administracion$core$init(){
administracion.core.verificar_sesion();

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [administracion.core.page], null),document.getElementById("app"));
});
administracion.core.init();

//# sourceMappingURL=administracion.core.js.map
