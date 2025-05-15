goog.provide('categorias.core');
categorias.core.obtener_productos = (function categorias$core$obtener_productos(categoria_id){
console.log("Obteniendo productos para la categor\u00EDa",categoria_id);

return app.db.fetch_productos(categoria_id);
});
categorias.core.agrupar_productos = (function categorias$core$agrupar_productos(productos){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,producto){
var nombre = new cljs.core.Keyword(null,"nombre","nombre",1047347004).cljs$core$IFn$_invoke$arity$1(producto);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,nombre,cljs.core.conj,producto);
}),cljs.core.PersistentArrayMap.EMPTY,productos);
});
categorias.core.mensaje_categoria = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
categorias.core.obtener_descripcion_categoria = (function categorias$core$obtener_descripcion_categoria(categoria_id){
var categoria = cljs.core.some((function (p1__17975_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__17975_SHARP_),categoria_id)){
return p1__17975_SHARP_;
} else {
return null;
}
}),cljs.core.deref(app.db.categorias));
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(categoria,new cljs.core.Keyword(null,"descripcion","descripcion",-1196002063));
});
categorias.core.obtener_mensaje_categoria = (function categorias$core$obtener_mensaje_categoria(categoria_id){
var descripcion = categorias.core.obtener_descripcion_categoria(categoria_id);
if(cljs.core.truth_(cljs.core.not_empty(descripcion))){
return descripcion;
} else {
return null;
}
});
categorias.core.page = (function categorias$core$page(){
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
console.log("Componente montado. Llamando a fetch-categorias...");

return app.db.fetch_categorias();
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"divProductosyCategorias"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-12.d-block.d-sm-none","div.col-12.d-block.d-sm-none",941872078),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dropdown","div.dropdown",1029783296),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.dropdown-toggle.select","button.btn.dropdown-toggle.select",954221024),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"data-bs-toggle","data-bs-toggle",-1489706489),"dropdown",new cljs.core.Keyword(null,"aria-expanded","aria-expanded",-1360942393),"false"], null),"Selecciona una categor\u00EDa de la carta"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.dropdown-menu","ul.dropdown-menu",-867384656),(function (){var iter__5480__auto__ = (function categorias$core$page_$_iter__18002(s__18003){
return (new cljs.core.LazySeq(null,(function (){
var s__18003__$1 = s__18003;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__18003__$1);
if(temp__5804__auto__){
var s__18003__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18003__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__18003__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__18005 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__18004 = (0);
while(true){
if((i__18004 < size__5479__auto__)){
var categoria = cljs.core._nth(c__5478__auto__,i__18004);
cljs.core.chunk_append(b__18005,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.dropdown-item","a.dropdown-item",2124140477),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__18004,categoria,c__5478__auto__,size__5479__auto__,b__18005,s__18003__$2,temp__5804__auto__){
return (function (){
categorias.core.obtener_productos(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(categoria));

return cljs.core.reset_BANG_(categorias.core.mensaje_categoria,categorias.core.obtener_mensaje_categoria(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(categoria)));
});})(i__18004,categoria,c__5478__auto__,size__5479__auto__,b__18005,s__18003__$2,temp__5804__auto__))
], null),new cljs.core.Keyword(null,"nombre","nombre",1047347004).cljs$core$IFn$_invoke$arity$1(categoria)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(categoria)], null)));

var G__18224 = (i__18004 + (1));
i__18004 = G__18224;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18005),categorias$core$page_$_iter__18002(cljs.core.chunk_rest(s__18003__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18005),null);
}
} else {
var categoria = cljs.core.first(s__18003__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.dropdown-item","a.dropdown-item",2124140477),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (categoria,s__18003__$2,temp__5804__auto__){
return (function (){
categorias.core.obtener_productos(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(categoria));

return cljs.core.reset_BANG_(categorias.core.mensaje_categoria,categorias.core.obtener_mensaje_categoria(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(categoria)));
});})(categoria,s__18003__$2,temp__5804__auto__))
], null),new cljs.core.Keyword(null,"nombre","nombre",1047347004).cljs$core$IFn$_invoke$arity$1(categoria)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(categoria)], null)),categorias$core$page_$_iter__18002(cljs.core.rest(s__18003__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.deref(app.db.categorias));
})()], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-12.d-none.d-sm-flex.justify-content-center.flex-wrap.gap-2.mt-3.divButtons","div.col-12.d-none.d-sm-flex.justify-content-center.flex-wrap.gap-2.mt-3.divButtons",146246636),(function (){var iter__5480__auto__ = (function categorias$core$page_$_iter__18045(s__18046){
return (new cljs.core.LazySeq(null,(function (){
var s__18046__$1 = s__18046;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__18046__$1);
if(temp__5804__auto__){
var s__18046__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18046__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__18046__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__18048 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__18047 = (0);
while(true){
if((i__18047 < size__5479__auto__)){
var categoria = cljs.core._nth(c__5478__auto__,i__18047);
cljs.core.chunk_append(b__18048,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.buttons","button.buttons",-274085307),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__18047,categoria,c__5478__auto__,size__5479__auto__,b__18048,s__18046__$2,temp__5804__auto__){
return (function (){
categorias.core.obtener_productos(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(categoria));

return cljs.core.reset_BANG_(categorias.core.mensaje_categoria,categorias.core.obtener_mensaje_categoria(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(categoria)));
});})(i__18047,categoria,c__5478__auto__,size__5479__auto__,b__18048,s__18046__$2,temp__5804__auto__))
], null),new cljs.core.Keyword(null,"nombre","nombre",1047347004).cljs$core$IFn$_invoke$arity$1(categoria)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(categoria)], null)));

var G__18226 = (i__18047 + (1));
i__18047 = G__18226;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18048),categorias$core$page_$_iter__18045(cljs.core.chunk_rest(s__18046__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18048),null);
}
} else {
var categoria = cljs.core.first(s__18046__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.buttons","button.buttons",-274085307),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (categoria,s__18046__$2,temp__5804__auto__){
return (function (){
categorias.core.obtener_productos(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(categoria));

return cljs.core.reset_BANG_(categorias.core.mensaje_categoria,categorias.core.obtener_mensaje_categoria(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(categoria)));
});})(categoria,s__18046__$2,temp__5804__auto__))
], null),new cljs.core.Keyword(null,"nombre","nombre",1047347004).cljs$core$IFn$_invoke$arity$1(categoria)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(categoria)], null)),categorias$core$page_$_iter__18045(cljs.core.rest(s__18046__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.deref(app.db.categorias));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-12","div.col-12",361685154),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mensaje-categoria"], null),(cljs.core.truth_(cljs.core.not_empty(cljs.core.deref(categorias.core.mensaje_categoria)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.deref(categorias.core.mensaje_categoria)], null):"Selecciona uno de los elementos de nuestra carta.")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-12","div.col-12",361685154),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"divProductos"], null),((cljs.core.empty_QMARK_(cljs.core.deref(app.db.productos)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.col-12","p.col-12",2128585148)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.row","ul.row",1750305524),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"productosUL"], null),(function (){var productos_agrupados = categorias.core.agrupar_productos(cljs.core.deref(app.db.productos));
var iter__5480__auto__ = (function categorias$core$page_$_iter__18072(s__18073){
return (new cljs.core.LazySeq(null,(function (){
var s__18073__$1 = s__18073;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__18073__$1);
if(temp__5804__auto__){
var s__18073__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18073__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__18073__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__18075 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__18074 = (0);
while(true){
if((i__18074 < size__5479__auto__)){
var vec__18092 = cljs.core._nth(c__5478__auto__,i__18074);
var nombre = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18092,(0),null);
var lista_productos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18092,(1),null);
cljs.core.chunk_append(b__18075,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.col-12","li.col-12",690592411),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"productosLI"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"producto-info"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),nombre], null),(function (){var primer_producto = cljs.core.first(lista_productos);
var descripcion_limpia = clojure.string.trim(new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(primer_producto));
var alergenos = cljs.core.PersistentHashMap.fromArrays(["contiene_mostaza","contiene_crustaceos","contiene_altramuces","contiene_soja","contiene_sulfitos","contiene_pescado","contiene_lacteos","contiene_granos_de_sesamo","contiene_moluscos","contiene_gluten","contiene_frutos_de_cascara","contiene_cacahuetes","contiene_huevos","contiene_apio"],["/imgs/alergenos/mostaza.png","/imgs/alergenos/crustaceos.png","/imgs/alergenos/altramuces.png","/imgs/alergenos/soja.png","/imgs/alergenos/sulfitos.png","/imgs/alergenos/pescado.png","/imgs/alergenos/lacteos.png","/imgs/alergenos/sesamo.png","/imgs/alergenos/moluscos.png","/imgs/alergenos/gluten.png","/imgs/alergenos/cascaras.png","/imgs/alergenos/cacahuetes.png","/imgs/alergenos/huevos.png","/imgs/alergenos/apio.png"]);
var alergenos_activos = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i__18074,primer_producto,descripcion_limpia,alergenos,vec__18092,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__18075,s__18073__$2,temp__5804__auto__,productos_agrupados){
return (function (p1__17989_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(primer_producto,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.first(p1__17989_SHARP_))) === true;
});})(i__18074,primer_producto,descripcion_limpia,alergenos,vec__18092,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__18075,s__18073__$2,temp__5804__auto__,productos_agrupados))
,alergenos);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"description"], null),((cljs.core.empty_QMARK_(descripcion_limpia))?" ":descripcion_limpia)], null),((cljs.core.seq(alergenos_activos))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"alergenos"], null),(function (){var iter__5480__auto__ = ((function (i__18074,primer_producto,descripcion_limpia,alergenos,alergenos_activos,vec__18092,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__18075,s__18073__$2,temp__5804__auto__,productos_agrupados){
return (function categorias$core$page_$_iter__18072_$_iter__18104(s__18105){
return (new cljs.core.LazySeq(null,((function (i__18074,primer_producto,descripcion_limpia,alergenos,alergenos_activos,vec__18092,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__18075,s__18073__$2,temp__5804__auto__,productos_agrupados){
return (function (){
var s__18105__$1 = s__18105;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__18105__$1);
if(temp__5804__auto____$1){
var s__18105__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__18105__$2)){
var c__5478__auto____$1 = cljs.core.chunk_first(s__18105__$2);
var size__5479__auto____$1 = cljs.core.count(c__5478__auto____$1);
var b__18107 = cljs.core.chunk_buffer(size__5479__auto____$1);
if((function (){var i__18106 = (0);
while(true){
if((i__18106 < size__5479__auto____$1)){
var vec__18112 = cljs.core._nth(c__5478__auto____$1,i__18106);
var nombre_img = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18112,(0),null);
var src_img = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18112,(1),null);
cljs.core.chunk_append(b__18107,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"src","src",-1651076051),src_img,new cljs.core.Keyword(null,"alt","alt",-3214426),nombre_img,new cljs.core.Keyword(null,"title","title",636505583),clojure.string.replace(nombre_img,"_"," "),new cljs.core.Keyword(null,"class","class",-2030961996),"alergeno-icono"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),nombre_img], null)));

var G__18229 = (i__18106 + (1));
i__18106 = G__18229;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18107),categorias$core$page_$_iter__18072_$_iter__18104(cljs.core.chunk_rest(s__18105__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18107),null);
}
} else {
var vec__18124 = cljs.core.first(s__18105__$2);
var nombre_img = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18124,(0),null);
var src_img = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18124,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"src","src",-1651076051),src_img,new cljs.core.Keyword(null,"alt","alt",-3214426),nombre_img,new cljs.core.Keyword(null,"title","title",636505583),clojure.string.replace(nombre_img,"_"," "),new cljs.core.Keyword(null,"class","class",-2030961996),"alergeno-icono"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),nombre_img], null)),categorias$core$page_$_iter__18072_$_iter__18104(cljs.core.rest(s__18105__$2)));
}
} else {
return null;
}
break;
}
});})(i__18074,primer_producto,descripcion_limpia,alergenos,alergenos_activos,vec__18092,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__18075,s__18073__$2,temp__5804__auto__,productos_agrupados))
,null,null));
});})(i__18074,primer_producto,descripcion_limpia,alergenos,alergenos_activos,vec__18092,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__18075,s__18073__$2,temp__5804__auto__,productos_agrupados))
;
return iter__5480__auto__(alergenos_activos);
})()], null):null)], null);
})()], null),(function (){var iter__5480__auto__ = ((function (i__18074,vec__18092,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__18075,s__18073__$2,temp__5804__auto__,productos_agrupados){
return (function categorias$core$page_$_iter__18072_$_iter__18131(s__18132){
return (new cljs.core.LazySeq(null,((function (i__18074,vec__18092,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__18075,s__18073__$2,temp__5804__auto__,productos_agrupados){
return (function (){
var s__18132__$1 = s__18132;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__18132__$1);
if(temp__5804__auto____$1){
var s__18132__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__18132__$2)){
var c__5478__auto____$1 = cljs.core.chunk_first(s__18132__$2);
var size__5479__auto____$1 = cljs.core.count(c__5478__auto____$1);
var b__18134 = cljs.core.chunk_buffer(size__5479__auto____$1);
if((function (){var i__18133 = (0);
while(true){
if((i__18133 < size__5479__auto____$1)){
var producto = cljs.core._nth(c__5478__auto____$1,i__18133);
cljs.core.chunk_append(b__18134,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"producto-item"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"precio-racion"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"precio"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"precio","precio",-1246474385).cljs$core$IFn$_invoke$arity$1(producto)),"\u20AC "].join('')], null),(function (){var tipo_porcion = new cljs.core.Keyword(null,"tipo_porcion","tipo_porcion",1174589739).cljs$core$IFn$_invoke$arity$1(producto);
var producto_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(producto);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"Media raci\u00F3n")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/medio-circulo.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"Media raci\u00F3n",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__18133,i__18074,tipo_porcion,producto_id,producto,c__5478__auto____$1,size__5479__auto____$1,b__18134,s__18132__$2,temp__5804__auto____$1,vec__18092,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__18075,s__18073__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(producto_id)," , Media raci\u00F3n"].join(''));
});})(i__18133,i__18074,tipo_porcion,producto_id,producto,c__5478__auto____$1,size__5479__auto____$1,b__18134,s__18132__$2,temp__5804__auto____$1,vec__18092,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__18075,s__18073__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"Raci\u00F3n completa")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/completo-circulo.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"Raci\u00F3n completa",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__18133,i__18074,tipo_porcion,producto_id,producto,c__5478__auto____$1,size__5479__auto____$1,b__18134,s__18132__$2,temp__5804__auto____$1,vec__18092,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__18075,s__18073__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(producto_id)," , Raci\u00F3n completa"].join(''));
});})(i__18133,i__18074,tipo_porcion,producto_id,producto,c__5478__auto____$1,size__5479__auto____$1,b__18134,s__18132__$2,temp__5804__auto____$1,vec__18092,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__18075,s__18073__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"Por unidad")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/unidad.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"/Unidad",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__18133,i__18074,tipo_porcion,producto_id,producto,c__5478__auto____$1,size__5479__auto____$1,b__18134,s__18132__$2,temp__5804__auto____$1,vec__18092,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__18075,s__18073__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(producto))," , Por unidad"].join(''));
});})(i__18133,i__18074,tipo_porcion,producto_id,producto,c__5478__auto____$1,size__5479__auto____$1,b__18134,s__18132__$2,temp__5804__auto____$1,vec__18092,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__18075,s__18073__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/unidad.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__18133,i__18074,tipo_porcion,producto_id,producto,c__5478__auto____$1,size__5479__auto____$1,b__18134,s__18132__$2,temp__5804__auto____$1,vec__18092,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__18075,s__18073__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(producto_id)].join(''));
});})(i__18133,i__18074,tipo_porcion,producto_id,producto,c__5478__auto____$1,size__5479__auto____$1,b__18134,s__18132__$2,temp__5804__auto____$1,vec__18092,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__18075,s__18073__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),["Tipo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tipo_porcion)].join('')], null);

}
}
}
}
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(producto)], null)));

var G__18231 = (i__18133 + (1));
i__18133 = G__18231;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18134),categorias$core$page_$_iter__18072_$_iter__18131(cljs.core.chunk_rest(s__18132__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18134),null);
}
} else {
var producto = cljs.core.first(s__18132__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"producto-item"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"precio-racion"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"precio"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"precio","precio",-1246474385).cljs$core$IFn$_invoke$arity$1(producto)),"\u20AC "].join('')], null),(function (){var tipo_porcion = new cljs.core.Keyword(null,"tipo_porcion","tipo_porcion",1174589739).cljs$core$IFn$_invoke$arity$1(producto);
var producto_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(producto);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"Media raci\u00F3n")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/medio-circulo.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"Media raci\u00F3n",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__18074,tipo_porcion,producto_id,producto,s__18132__$2,temp__5804__auto____$1,vec__18092,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__18075,s__18073__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(producto_id)," , Media raci\u00F3n"].join(''));
});})(i__18074,tipo_porcion,producto_id,producto,s__18132__$2,temp__5804__auto____$1,vec__18092,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__18075,s__18073__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"Raci\u00F3n completa")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/completo-circulo.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"Raci\u00F3n completa",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__18074,tipo_porcion,producto_id,producto,s__18132__$2,temp__5804__auto____$1,vec__18092,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__18075,s__18073__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(producto_id)," , Raci\u00F3n completa"].join(''));
});})(i__18074,tipo_porcion,producto_id,producto,s__18132__$2,temp__5804__auto____$1,vec__18092,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__18075,s__18073__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"Por unidad")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/unidad.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"/Unidad",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__18074,tipo_porcion,producto_id,producto,s__18132__$2,temp__5804__auto____$1,vec__18092,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__18075,s__18073__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(producto))," , Por unidad"].join(''));
});})(i__18074,tipo_porcion,producto_id,producto,s__18132__$2,temp__5804__auto____$1,vec__18092,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__18075,s__18073__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/unidad.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__18074,tipo_porcion,producto_id,producto,s__18132__$2,temp__5804__auto____$1,vec__18092,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__18075,s__18073__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(producto_id)].join(''));
});})(i__18074,tipo_porcion,producto_id,producto,s__18132__$2,temp__5804__auto____$1,vec__18092,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__18075,s__18073__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),["Tipo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tipo_porcion)].join('')], null);

}
}
}
}
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(producto)], null)),categorias$core$page_$_iter__18072_$_iter__18131(cljs.core.rest(s__18132__$2)));
}
} else {
return null;
}
break;
}
});})(i__18074,vec__18092,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__18075,s__18073__$2,temp__5804__auto__,productos_agrupados))
,null,null));
});})(i__18074,vec__18092,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__18075,s__18073__$2,temp__5804__auto__,productos_agrupados))
;
return iter__5480__auto__(lista_productos);
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),nombre], null)));

var G__18233 = (i__18074 + (1));
i__18074 = G__18233;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18075),categorias$core$page_$_iter__18072(cljs.core.chunk_rest(s__18073__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18075),null);
}
} else {
var vec__18164 = cljs.core.first(s__18073__$2);
var nombre = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18164,(0),null);
var lista_productos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18164,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.col-12","li.col-12",690592411),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"productosLI"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"producto-info"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),nombre], null),(function (){var primer_producto = cljs.core.first(lista_productos);
var descripcion_limpia = clojure.string.trim(new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(primer_producto));
var alergenos = cljs.core.PersistentHashMap.fromArrays(["contiene_mostaza","contiene_crustaceos","contiene_altramuces","contiene_soja","contiene_sulfitos","contiene_pescado","contiene_lacteos","contiene_granos_de_sesamo","contiene_moluscos","contiene_gluten","contiene_frutos_de_cascara","contiene_cacahuetes","contiene_huevos","contiene_apio"],["/imgs/alergenos/mostaza.png","/imgs/alergenos/crustaceos.png","/imgs/alergenos/altramuces.png","/imgs/alergenos/soja.png","/imgs/alergenos/sulfitos.png","/imgs/alergenos/pescado.png","/imgs/alergenos/lacteos.png","/imgs/alergenos/sesamo.png","/imgs/alergenos/moluscos.png","/imgs/alergenos/gluten.png","/imgs/alergenos/cascaras.png","/imgs/alergenos/cacahuetes.png","/imgs/alergenos/huevos.png","/imgs/alergenos/apio.png"]);
var alergenos_activos = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (primer_producto,descripcion_limpia,alergenos,vec__18164,nombre,lista_productos,s__18073__$2,temp__5804__auto__,productos_agrupados){
return (function (p1__17989_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(primer_producto,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.first(p1__17989_SHARP_))) === true;
});})(primer_producto,descripcion_limpia,alergenos,vec__18164,nombre,lista_productos,s__18073__$2,temp__5804__auto__,productos_agrupados))
,alergenos);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"description"], null),((cljs.core.empty_QMARK_(descripcion_limpia))?" ":descripcion_limpia)], null),((cljs.core.seq(alergenos_activos))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"alergenos"], null),(function (){var iter__5480__auto__ = ((function (primer_producto,descripcion_limpia,alergenos,alergenos_activos,vec__18164,nombre,lista_productos,s__18073__$2,temp__5804__auto__,productos_agrupados){
return (function categorias$core$page_$_iter__18072_$_iter__18175(s__18176){
return (new cljs.core.LazySeq(null,(function (){
var s__18176__$1 = s__18176;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__18176__$1);
if(temp__5804__auto____$1){
var s__18176__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__18176__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__18176__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__18178 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__18177 = (0);
while(true){
if((i__18177 < size__5479__auto__)){
var vec__18185 = cljs.core._nth(c__5478__auto__,i__18177);
var nombre_img = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18185,(0),null);
var src_img = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18185,(1),null);
cljs.core.chunk_append(b__18178,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"src","src",-1651076051),src_img,new cljs.core.Keyword(null,"alt","alt",-3214426),nombre_img,new cljs.core.Keyword(null,"title","title",636505583),clojure.string.replace(nombre_img,"_"," "),new cljs.core.Keyword(null,"class","class",-2030961996),"alergeno-icono"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),nombre_img], null)));

var G__18236 = (i__18177 + (1));
i__18177 = G__18236;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18178),categorias$core$page_$_iter__18072_$_iter__18175(cljs.core.chunk_rest(s__18176__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18178),null);
}
} else {
var vec__18189 = cljs.core.first(s__18176__$2);
var nombre_img = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18189,(0),null);
var src_img = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18189,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"src","src",-1651076051),src_img,new cljs.core.Keyword(null,"alt","alt",-3214426),nombre_img,new cljs.core.Keyword(null,"title","title",636505583),clojure.string.replace(nombre_img,"_"," "),new cljs.core.Keyword(null,"class","class",-2030961996),"alergeno-icono"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),nombre_img], null)),categorias$core$page_$_iter__18072_$_iter__18175(cljs.core.rest(s__18176__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(primer_producto,descripcion_limpia,alergenos,alergenos_activos,vec__18164,nombre,lista_productos,s__18073__$2,temp__5804__auto__,productos_agrupados))
;
return iter__5480__auto__(alergenos_activos);
})()], null):null)], null);
})()], null),(function (){var iter__5480__auto__ = ((function (vec__18164,nombre,lista_productos,s__18073__$2,temp__5804__auto__,productos_agrupados){
return (function categorias$core$page_$_iter__18072_$_iter__18198(s__18199){
return (new cljs.core.LazySeq(null,(function (){
var s__18199__$1 = s__18199;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__18199__$1);
if(temp__5804__auto____$1){
var s__18199__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__18199__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__18199__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__18201 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__18200 = (0);
while(true){
if((i__18200 < size__5479__auto__)){
var producto = cljs.core._nth(c__5478__auto__,i__18200);
cljs.core.chunk_append(b__18201,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"producto-item"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"precio-racion"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"precio"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"precio","precio",-1246474385).cljs$core$IFn$_invoke$arity$1(producto)),"\u20AC "].join('')], null),(function (){var tipo_porcion = new cljs.core.Keyword(null,"tipo_porcion","tipo_porcion",1174589739).cljs$core$IFn$_invoke$arity$1(producto);
var producto_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(producto);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"Media raci\u00F3n")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/medio-circulo.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"Media raci\u00F3n",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__18200,tipo_porcion,producto_id,producto,c__5478__auto__,size__5479__auto__,b__18201,s__18199__$2,temp__5804__auto____$1,vec__18164,nombre,lista_productos,s__18073__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(producto_id)," , Media raci\u00F3n"].join(''));
});})(i__18200,tipo_porcion,producto_id,producto,c__5478__auto__,size__5479__auto__,b__18201,s__18199__$2,temp__5804__auto____$1,vec__18164,nombre,lista_productos,s__18073__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"Raci\u00F3n completa")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/completo-circulo.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"Raci\u00F3n completa",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__18200,tipo_porcion,producto_id,producto,c__5478__auto__,size__5479__auto__,b__18201,s__18199__$2,temp__5804__auto____$1,vec__18164,nombre,lista_productos,s__18073__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(producto_id)," , Raci\u00F3n completa"].join(''));
});})(i__18200,tipo_porcion,producto_id,producto,c__5478__auto__,size__5479__auto__,b__18201,s__18199__$2,temp__5804__auto____$1,vec__18164,nombre,lista_productos,s__18073__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"Por unidad")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/unidad.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"/Unidad",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__18200,tipo_porcion,producto_id,producto,c__5478__auto__,size__5479__auto__,b__18201,s__18199__$2,temp__5804__auto____$1,vec__18164,nombre,lista_productos,s__18073__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(producto))," , Por unidad"].join(''));
});})(i__18200,tipo_porcion,producto_id,producto,c__5478__auto__,size__5479__auto__,b__18201,s__18199__$2,temp__5804__auto____$1,vec__18164,nombre,lista_productos,s__18073__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/unidad.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__18200,tipo_porcion,producto_id,producto,c__5478__auto__,size__5479__auto__,b__18201,s__18199__$2,temp__5804__auto____$1,vec__18164,nombre,lista_productos,s__18073__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(producto_id)].join(''));
});})(i__18200,tipo_porcion,producto_id,producto,c__5478__auto__,size__5479__auto__,b__18201,s__18199__$2,temp__5804__auto____$1,vec__18164,nombre,lista_productos,s__18073__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),["Tipo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tipo_porcion)].join('')], null);

}
}
}
}
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(producto)], null)));

var G__18238 = (i__18200 + (1));
i__18200 = G__18238;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18201),categorias$core$page_$_iter__18072_$_iter__18198(cljs.core.chunk_rest(s__18199__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18201),null);
}
} else {
var producto = cljs.core.first(s__18199__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"producto-item"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"precio-racion"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"precio"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"precio","precio",-1246474385).cljs$core$IFn$_invoke$arity$1(producto)),"\u20AC "].join('')], null),(function (){var tipo_porcion = new cljs.core.Keyword(null,"tipo_porcion","tipo_porcion",1174589739).cljs$core$IFn$_invoke$arity$1(producto);
var producto_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(producto);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"Media raci\u00F3n")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/medio-circulo.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"Media raci\u00F3n",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (tipo_porcion,producto_id,producto,s__18199__$2,temp__5804__auto____$1,vec__18164,nombre,lista_productos,s__18073__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(producto_id)," , Media raci\u00F3n"].join(''));
});})(tipo_porcion,producto_id,producto,s__18199__$2,temp__5804__auto____$1,vec__18164,nombre,lista_productos,s__18073__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"Raci\u00F3n completa")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/completo-circulo.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"Raci\u00F3n completa",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (tipo_porcion,producto_id,producto,s__18199__$2,temp__5804__auto____$1,vec__18164,nombre,lista_productos,s__18073__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(producto_id)," , Raci\u00F3n completa"].join(''));
});})(tipo_porcion,producto_id,producto,s__18199__$2,temp__5804__auto____$1,vec__18164,nombre,lista_productos,s__18073__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"Por unidad")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/unidad.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"/Unidad",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (tipo_porcion,producto_id,producto,s__18199__$2,temp__5804__auto____$1,vec__18164,nombre,lista_productos,s__18073__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(producto))," , Por unidad"].join(''));
});})(tipo_porcion,producto_id,producto,s__18199__$2,temp__5804__auto____$1,vec__18164,nombre,lista_productos,s__18073__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/unidad.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (tipo_porcion,producto_id,producto,s__18199__$2,temp__5804__auto____$1,vec__18164,nombre,lista_productos,s__18073__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(producto_id)].join(''));
});})(tipo_porcion,producto_id,producto,s__18199__$2,temp__5804__auto____$1,vec__18164,nombre,lista_productos,s__18073__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),["Tipo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tipo_porcion)].join('')], null);

}
}
}
}
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(producto)], null)),categorias$core$page_$_iter__18072_$_iter__18198(cljs.core.rest(s__18199__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__18164,nombre,lista_productos,s__18073__$2,temp__5804__auto__,productos_agrupados))
;
return iter__5480__auto__(lista_productos);
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),nombre], null)),categorias$core$page_$_iter__18072(cljs.core.rest(s__18073__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(productos_agrupados);
})()], null))], null)], null)], null);
})], null));
});
categorias.core.init = (function categorias$core$init(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [categorias.core.page], null),document.getElementById("app"));
});
categorias.core.init();

//# sourceMappingURL=categorias.core.js.map
