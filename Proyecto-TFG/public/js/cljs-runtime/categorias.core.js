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
var categoria = cljs.core.some((function (p1__40780_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__40780_SHARP_),categoria_id)){
return p1__40780_SHARP_;
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
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"divProductosyCategorias"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-12.d-block.d-sm-none","div.col-12.d-block.d-sm-none",941872078),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dropdown","div.dropdown",1029783296),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.navbar-toggler.dropdown-toggle.desplegable","button.navbar-toggler.dropdown-toggle.desplegable",-1788941809),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"data-toggle","data-toggle",436966687),"dropdown",new cljs.core.Keyword(null,"aria-expanded","aria-expanded",-1360942393),"false",new cljs.core.Keyword(null,"aria-controls","aria-controls",-1872379154),"dropdown-categorias"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.navbar-toggler-icon.me-2","span.navbar-toggler-icon.me-2",-2097084715)], null),"Selecciona una categoria de la carta"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dropdown-menu","div.dropdown-menu",-1884774306),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"dropdown-categorias"], null),(function (){var iter__5480__auto__ = (function categorias$core$page_$_iter__40804(s__40805){
return (new cljs.core.LazySeq(null,(function (){
var s__40805__$1 = s__40805;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__40805__$1);
if(temp__5804__auto__){
var s__40805__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__40805__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__40805__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__40807 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__40806 = (0);
while(true){
if((i__40806 < size__5479__auto__)){
var categoria = cljs.core._nth(c__5478__auto__,i__40806);
cljs.core.chunk_append(b__40807,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.dropdown-item","a.dropdown-item",2124140477),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__40806,categoria,c__5478__auto__,size__5479__auto__,b__40807,s__40805__$2,temp__5804__auto__){
return (function (){
categorias.core.obtener_productos(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(categoria));

return cljs.core.reset_BANG_(categorias.core.mensaje_categoria,categorias.core.obtener_mensaje_categoria(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(categoria)));
});})(i__40806,categoria,c__5478__auto__,size__5479__auto__,b__40807,s__40805__$2,temp__5804__auto__))
], null),new cljs.core.Keyword(null,"nombre","nombre",1047347004).cljs$core$IFn$_invoke$arity$1(categoria)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(categoria)], null)));

var G__40991 = (i__40806 + (1));
i__40806 = G__40991;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40807),categorias$core$page_$_iter__40804(cljs.core.chunk_rest(s__40805__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40807),null);
}
} else {
var categoria = cljs.core.first(s__40805__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.dropdown-item","a.dropdown-item",2124140477),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (categoria,s__40805__$2,temp__5804__auto__){
return (function (){
categorias.core.obtener_productos(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(categoria));

return cljs.core.reset_BANG_(categorias.core.mensaje_categoria,categorias.core.obtener_mensaje_categoria(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(categoria)));
});})(categoria,s__40805__$2,temp__5804__auto__))
], null),new cljs.core.Keyword(null,"nombre","nombre",1047347004).cljs$core$IFn$_invoke$arity$1(categoria)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(categoria)], null)),categorias$core$page_$_iter__40804(cljs.core.rest(s__40805__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.deref(app.db.categorias));
})()], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-12.d-none.d-sm-block","div.col-12.d-none.d-sm-block",1179687194),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"divButtons"], null),((cljs.core.empty_QMARK_(cljs.core.deref(app.db.categorias)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Cargando categor\u00EDas..."], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"buttonCategoria"], null),(function (){var iter__5480__auto__ = (function categorias$core$page_$_iter__40842(s__40843){
return (new cljs.core.LazySeq(null,(function (){
var s__40843__$1 = s__40843;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__40843__$1);
if(temp__5804__auto__){
var s__40843__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__40843__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__40843__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__40845 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__40844 = (0);
while(true){
if((i__40844 < size__5479__auto__)){
var categoria = cljs.core._nth(c__5478__auto__,i__40844);
cljs.core.chunk_append(b__40845,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__40844,categoria,c__5478__auto__,size__5479__auto__,b__40845,s__40843__$2,temp__5804__auto__){
return (function (){
categorias.core.obtener_productos(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(categoria));

return cljs.core.reset_BANG_(categorias.core.mensaje_categoria,categorias.core.obtener_mensaje_categoria(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(categoria)));
});})(i__40844,categoria,c__5478__auto__,size__5479__auto__,b__40845,s__40843__$2,temp__5804__auto__))
,new cljs.core.Keyword(null,"class","class",-2030961996),"buttons"], null),new cljs.core.Keyword(null,"nombre","nombre",1047347004).cljs$core$IFn$_invoke$arity$1(categoria)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(categoria)], null)));

var G__40996 = (i__40844 + (1));
i__40844 = G__40996;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40845),categorias$core$page_$_iter__40842(cljs.core.chunk_rest(s__40843__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40845),null);
}
} else {
var categoria = cljs.core.first(s__40843__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (categoria,s__40843__$2,temp__5804__auto__){
return (function (){
categorias.core.obtener_productos(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(categoria));

return cljs.core.reset_BANG_(categorias.core.mensaje_categoria,categorias.core.obtener_mensaje_categoria(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(categoria)));
});})(categoria,s__40843__$2,temp__5804__auto__))
,new cljs.core.Keyword(null,"class","class",-2030961996),"buttons"], null),new cljs.core.Keyword(null,"nombre","nombre",1047347004).cljs$core$IFn$_invoke$arity$1(categoria)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(categoria)], null)),categorias$core$page_$_iter__40842(cljs.core.rest(s__40843__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.deref(app.db.categorias));
})()], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-12","div.col-12",361685154),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mensaje-categoria"], null),(cljs.core.truth_(cljs.core.not_empty(cljs.core.deref(categorias.core.mensaje_categoria)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.deref(categorias.core.mensaje_categoria)], null):"Selecciona uno de los elementos de nuestra carta.")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-12","div.col-12",361685154),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"divProductos"], null),((cljs.core.empty_QMARK_(cljs.core.deref(app.db.productos)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.col-12","p.col-12",2128585148)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.row","ul.row",1750305524),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"productosUL"], null),(function (){var productos_agrupados = categorias.core.agrupar_productos(cljs.core.deref(app.db.productos));
var iter__5480__auto__ = (function categorias$core$page_$_iter__40881(s__40882){
return (new cljs.core.LazySeq(null,(function (){
var s__40882__$1 = s__40882;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__40882__$1);
if(temp__5804__auto__){
var s__40882__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__40882__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__40882__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__40884 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__40883 = (0);
while(true){
if((i__40883 < size__5479__auto__)){
var vec__40895 = cljs.core._nth(c__5478__auto__,i__40883);
var nombre = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40895,(0),null);
var lista_productos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40895,(1),null);
cljs.core.chunk_append(b__40884,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.col-12","li.col-12",690592411),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"productosLI"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"producto-info"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"negrita"], null),nombre], null),(function (){var primer_producto = cljs.core.first(lista_productos);
var descripcion_limpia = clojure.string.trim(new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(primer_producto));
var alergenos = cljs.core.PersistentHashMap.fromArrays(["contiene_mostaza","contiene_crustaceos","contiene_altramuces","contiene_soja","contiene_sulfitos","contiene_pescado","contiene_lacteos","contiene_granos_de_sesamo","contiene_frustos_de_cascara","contiene_moluscos","contiene_gluten","contiene_cacahuetes","contiene_huevos","contiene_apio"],["/imgs/alergenos/mostaza.png","/imgs/alergenos/crustaceos.png","/imgs/alergenos/altramuces.png","/imgs/alergenos/soja.png","/imgs/alergenos/sesamo.png","/imgs/alergenos/pescado.png","/imgs/alergenos/lacteos.png","/imgs/alergenos/sesamo.png","/imgs/alergenos/cascaras.png","/imgs/alergenos/moluscos.png","/imgs/alergenos/gluten.png","/imgs/alergenos/cacahuetes.png","/imgs/alergenos/huevos.png","/imgs/alergenos/apio.png"]);
var alergenos_activos = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i__40883,primer_producto,descripcion_limpia,alergenos,vec__40895,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__40884,s__40882__$2,temp__5804__auto__,productos_agrupados){
return (function (p1__40796_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(primer_producto,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.first(p1__40796_SHARP_))) === true;
});})(i__40883,primer_producto,descripcion_limpia,alergenos,vec__40895,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__40884,s__40882__$2,temp__5804__auto__,productos_agrupados))
,alergenos);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"description"], null),((cljs.core.empty_QMARK_(descripcion_limpia))?" ":descripcion_limpia)], null),((cljs.core.seq(alergenos_activos))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"alergenos"], null),(function (){var iter__5480__auto__ = ((function (i__40883,primer_producto,descripcion_limpia,alergenos,alergenos_activos,vec__40895,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__40884,s__40882__$2,temp__5804__auto__,productos_agrupados){
return (function categorias$core$page_$_iter__40881_$_iter__40907(s__40908){
return (new cljs.core.LazySeq(null,((function (i__40883,primer_producto,descripcion_limpia,alergenos,alergenos_activos,vec__40895,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__40884,s__40882__$2,temp__5804__auto__,productos_agrupados){
return (function (){
var s__40908__$1 = s__40908;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__40908__$1);
if(temp__5804__auto____$1){
var s__40908__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__40908__$2)){
var c__5478__auto____$1 = cljs.core.chunk_first(s__40908__$2);
var size__5479__auto____$1 = cljs.core.count(c__5478__auto____$1);
var b__40910 = cljs.core.chunk_buffer(size__5479__auto____$1);
if((function (){var i__40909 = (0);
while(true){
if((i__40909 < size__5479__auto____$1)){
var vec__40917 = cljs.core._nth(c__5478__auto____$1,i__40909);
var nombre_img = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40917,(0),null);
var src_img = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40917,(1),null);
cljs.core.chunk_append(b__40910,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"src","src",-1651076051),src_img,new cljs.core.Keyword(null,"alt","alt",-3214426),nombre_img,new cljs.core.Keyword(null,"title","title",636505583),clojure.string.replace(nombre_img,"_"," "),new cljs.core.Keyword(null,"class","class",-2030961996),"alergeno-icono"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),nombre_img], null)));

var G__41001 = (i__40909 + (1));
i__40909 = G__41001;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40910),categorias$core$page_$_iter__40881_$_iter__40907(cljs.core.chunk_rest(s__40908__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40910),null);
}
} else {
var vec__40924 = cljs.core.first(s__40908__$2);
var nombre_img = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40924,(0),null);
var src_img = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40924,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"src","src",-1651076051),src_img,new cljs.core.Keyword(null,"alt","alt",-3214426),nombre_img,new cljs.core.Keyword(null,"title","title",636505583),clojure.string.replace(nombre_img,"_"," "),new cljs.core.Keyword(null,"class","class",-2030961996),"alergeno-icono"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),nombre_img], null)),categorias$core$page_$_iter__40881_$_iter__40907(cljs.core.rest(s__40908__$2)));
}
} else {
return null;
}
break;
}
});})(i__40883,primer_producto,descripcion_limpia,alergenos,alergenos_activos,vec__40895,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__40884,s__40882__$2,temp__5804__auto__,productos_agrupados))
,null,null));
});})(i__40883,primer_producto,descripcion_limpia,alergenos,alergenos_activos,vec__40895,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__40884,s__40882__$2,temp__5804__auto__,productos_agrupados))
;
return iter__5480__auto__(alergenos_activos);
})()], null):null)], null);
})()], null),(function (){var iter__5480__auto__ = ((function (i__40883,vec__40895,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__40884,s__40882__$2,temp__5804__auto__,productos_agrupados){
return (function categorias$core$page_$_iter__40881_$_iter__40933(s__40934){
return (new cljs.core.LazySeq(null,((function (i__40883,vec__40895,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__40884,s__40882__$2,temp__5804__auto__,productos_agrupados){
return (function (){
var s__40934__$1 = s__40934;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__40934__$1);
if(temp__5804__auto____$1){
var s__40934__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__40934__$2)){
var c__5478__auto____$1 = cljs.core.chunk_first(s__40934__$2);
var size__5479__auto____$1 = cljs.core.count(c__5478__auto____$1);
var b__40936 = cljs.core.chunk_buffer(size__5479__auto____$1);
if((function (){var i__40935 = (0);
while(true){
if((i__40935 < size__5479__auto____$1)){
var producto = cljs.core._nth(c__5478__auto____$1,i__40935);
cljs.core.chunk_append(b__40936,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"producto-item"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"precio-racion"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"precio"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"precio","precio",-1246474385).cljs$core$IFn$_invoke$arity$1(producto)),"\u20AC "].join('')], null),(function (){var tipo_porcion = new cljs.core.Keyword(null,"tipo_porcion","tipo_porcion",1174589739).cljs$core$IFn$_invoke$arity$1(producto);
var producto_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(producto);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"Media raci\u00F3n")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/medio-circulo.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"Raci\u00F3n completa",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__40935,i__40883,tipo_porcion,producto_id,producto,c__5478__auto____$1,size__5479__auto____$1,b__40936,s__40934__$2,temp__5804__auto____$1,vec__40895,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__40884,s__40882__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(producto_id)].join(''));
});})(i__40935,i__40883,tipo_porcion,producto_id,producto,c__5478__auto____$1,size__5479__auto____$1,b__40936,s__40934__$2,temp__5804__auto____$1,vec__40895,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__40884,s__40882__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"Raci\u00F3n completa")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/completo-circulo.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"Raci\u00F3n completa",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__40935,i__40883,tipo_porcion,producto_id,producto,c__5478__auto____$1,size__5479__auto____$1,b__40936,s__40934__$2,temp__5804__auto____$1,vec__40895,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__40884,s__40882__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(producto_id)].join(''));
});})(i__40935,i__40883,tipo_porcion,producto_id,producto,c__5478__auto____$1,size__5479__auto____$1,b__40936,s__40934__$2,temp__5804__auto____$1,vec__40895,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__40884,s__40882__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"Por unidad")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/unidad.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"/Unidad",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__40935,i__40883,tipo_porcion,producto_id,producto,c__5478__auto____$1,size__5479__auto____$1,b__40936,s__40934__$2,temp__5804__auto____$1,vec__40895,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__40884,s__40882__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(producto))].join(''));
});})(i__40935,i__40883,tipo_porcion,producto_id,producto,c__5478__auto____$1,size__5479__auto____$1,b__40936,s__40934__$2,temp__5804__auto____$1,vec__40895,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__40884,s__40882__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/unidad.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__40935,i__40883,tipo_porcion,producto_id,producto,c__5478__auto____$1,size__5479__auto____$1,b__40936,s__40934__$2,temp__5804__auto____$1,vec__40895,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__40884,s__40882__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(producto_id)].join(''));
});})(i__40935,i__40883,tipo_porcion,producto_id,producto,c__5478__auto____$1,size__5479__auto____$1,b__40936,s__40934__$2,temp__5804__auto____$1,vec__40895,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__40884,s__40882__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),["Tipo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tipo_porcion)].join('')], null);

}
}
}
}
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(producto)], null)));

var G__41003 = (i__40935 + (1));
i__40935 = G__41003;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40936),categorias$core$page_$_iter__40881_$_iter__40933(cljs.core.chunk_rest(s__40934__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40936),null);
}
} else {
var producto = cljs.core.first(s__40934__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"producto-item"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"precio-racion"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"precio"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"precio","precio",-1246474385).cljs$core$IFn$_invoke$arity$1(producto)),"\u20AC "].join('')], null),(function (){var tipo_porcion = new cljs.core.Keyword(null,"tipo_porcion","tipo_porcion",1174589739).cljs$core$IFn$_invoke$arity$1(producto);
var producto_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(producto);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"Media raci\u00F3n")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/medio-circulo.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"Raci\u00F3n completa",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__40883,tipo_porcion,producto_id,producto,s__40934__$2,temp__5804__auto____$1,vec__40895,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__40884,s__40882__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(producto_id)].join(''));
});})(i__40883,tipo_porcion,producto_id,producto,s__40934__$2,temp__5804__auto____$1,vec__40895,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__40884,s__40882__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"Raci\u00F3n completa")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/completo-circulo.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"Raci\u00F3n completa",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__40883,tipo_porcion,producto_id,producto,s__40934__$2,temp__5804__auto____$1,vec__40895,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__40884,s__40882__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(producto_id)].join(''));
});})(i__40883,tipo_porcion,producto_id,producto,s__40934__$2,temp__5804__auto____$1,vec__40895,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__40884,s__40882__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"Por unidad")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/unidad.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"/Unidad",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__40883,tipo_porcion,producto_id,producto,s__40934__$2,temp__5804__auto____$1,vec__40895,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__40884,s__40882__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(producto))].join(''));
});})(i__40883,tipo_porcion,producto_id,producto,s__40934__$2,temp__5804__auto____$1,vec__40895,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__40884,s__40882__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/unidad.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__40883,tipo_porcion,producto_id,producto,s__40934__$2,temp__5804__auto____$1,vec__40895,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__40884,s__40882__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(producto_id)].join(''));
});})(i__40883,tipo_porcion,producto_id,producto,s__40934__$2,temp__5804__auto____$1,vec__40895,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__40884,s__40882__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),["Tipo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tipo_porcion)].join('')], null);

}
}
}
}
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(producto)], null)),categorias$core$page_$_iter__40881_$_iter__40933(cljs.core.rest(s__40934__$2)));
}
} else {
return null;
}
break;
}
});})(i__40883,vec__40895,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__40884,s__40882__$2,temp__5804__auto__,productos_agrupados))
,null,null));
});})(i__40883,vec__40895,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__40884,s__40882__$2,temp__5804__auto__,productos_agrupados))
;
return iter__5480__auto__(lista_productos);
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),nombre], null)));

var G__41004 = (i__40883 + (1));
i__40883 = G__41004;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40884),categorias$core$page_$_iter__40881(cljs.core.chunk_rest(s__40882__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40884),null);
}
} else {
var vec__40959 = cljs.core.first(s__40882__$2);
var nombre = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40959,(0),null);
var lista_productos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40959,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.col-12","li.col-12",690592411),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"productosLI"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"producto-info"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"negrita"], null),nombre], null),(function (){var primer_producto = cljs.core.first(lista_productos);
var descripcion_limpia = clojure.string.trim(new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(primer_producto));
var alergenos = cljs.core.PersistentHashMap.fromArrays(["contiene_mostaza","contiene_crustaceos","contiene_altramuces","contiene_soja","contiene_sulfitos","contiene_pescado","contiene_lacteos","contiene_granos_de_sesamo","contiene_frustos_de_cascara","contiene_moluscos","contiene_gluten","contiene_cacahuetes","contiene_huevos","contiene_apio"],["/imgs/alergenos/mostaza.png","/imgs/alergenos/crustaceos.png","/imgs/alergenos/altramuces.png","/imgs/alergenos/soja.png","/imgs/alergenos/sesamo.png","/imgs/alergenos/pescado.png","/imgs/alergenos/lacteos.png","/imgs/alergenos/sesamo.png","/imgs/alergenos/cascaras.png","/imgs/alergenos/moluscos.png","/imgs/alergenos/gluten.png","/imgs/alergenos/cacahuetes.png","/imgs/alergenos/huevos.png","/imgs/alergenos/apio.png"]);
var alergenos_activos = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (primer_producto,descripcion_limpia,alergenos,vec__40959,nombre,lista_productos,s__40882__$2,temp__5804__auto__,productos_agrupados){
return (function (p1__40796_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(primer_producto,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.first(p1__40796_SHARP_))) === true;
});})(primer_producto,descripcion_limpia,alergenos,vec__40959,nombre,lista_productos,s__40882__$2,temp__5804__auto__,productos_agrupados))
,alergenos);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"description"], null),((cljs.core.empty_QMARK_(descripcion_limpia))?" ":descripcion_limpia)], null),((cljs.core.seq(alergenos_activos))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"alergenos"], null),(function (){var iter__5480__auto__ = ((function (primer_producto,descripcion_limpia,alergenos,alergenos_activos,vec__40959,nombre,lista_productos,s__40882__$2,temp__5804__auto__,productos_agrupados){
return (function categorias$core$page_$_iter__40881_$_iter__40969(s__40970){
return (new cljs.core.LazySeq(null,(function (){
var s__40970__$1 = s__40970;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__40970__$1);
if(temp__5804__auto____$1){
var s__40970__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__40970__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__40970__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__40972 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__40971 = (0);
while(true){
if((i__40971 < size__5479__auto__)){
var vec__40977 = cljs.core._nth(c__5478__auto__,i__40971);
var nombre_img = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40977,(0),null);
var src_img = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40977,(1),null);
cljs.core.chunk_append(b__40972,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"src","src",-1651076051),src_img,new cljs.core.Keyword(null,"alt","alt",-3214426),nombre_img,new cljs.core.Keyword(null,"title","title",636505583),clojure.string.replace(nombre_img,"_"," "),new cljs.core.Keyword(null,"class","class",-2030961996),"alergeno-icono"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),nombre_img], null)));

var G__41005 = (i__40971 + (1));
i__40971 = G__41005;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40972),categorias$core$page_$_iter__40881_$_iter__40969(cljs.core.chunk_rest(s__40970__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40972),null);
}
} else {
var vec__40980 = cljs.core.first(s__40970__$2);
var nombre_img = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40980,(0),null);
var src_img = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40980,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"src","src",-1651076051),src_img,new cljs.core.Keyword(null,"alt","alt",-3214426),nombre_img,new cljs.core.Keyword(null,"title","title",636505583),clojure.string.replace(nombre_img,"_"," "),new cljs.core.Keyword(null,"class","class",-2030961996),"alergeno-icono"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),nombre_img], null)),categorias$core$page_$_iter__40881_$_iter__40969(cljs.core.rest(s__40970__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(primer_producto,descripcion_limpia,alergenos,alergenos_activos,vec__40959,nombre,lista_productos,s__40882__$2,temp__5804__auto__,productos_agrupados))
;
return iter__5480__auto__(alergenos_activos);
})()], null):null)], null);
})()], null),(function (){var iter__5480__auto__ = ((function (vec__40959,nombre,lista_productos,s__40882__$2,temp__5804__auto__,productos_agrupados){
return (function categorias$core$page_$_iter__40881_$_iter__40983(s__40984){
return (new cljs.core.LazySeq(null,(function (){
var s__40984__$1 = s__40984;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__40984__$1);
if(temp__5804__auto____$1){
var s__40984__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__40984__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__40984__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__40986 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__40985 = (0);
while(true){
if((i__40985 < size__5479__auto__)){
var producto = cljs.core._nth(c__5478__auto__,i__40985);
cljs.core.chunk_append(b__40986,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"producto-item"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"precio-racion"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"precio"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"precio","precio",-1246474385).cljs$core$IFn$_invoke$arity$1(producto)),"\u20AC "].join('')], null),(function (){var tipo_porcion = new cljs.core.Keyword(null,"tipo_porcion","tipo_porcion",1174589739).cljs$core$IFn$_invoke$arity$1(producto);
var producto_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(producto);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"Media raci\u00F3n")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/medio-circulo.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"Raci\u00F3n completa",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__40985,tipo_porcion,producto_id,producto,c__5478__auto__,size__5479__auto__,b__40986,s__40984__$2,temp__5804__auto____$1,vec__40959,nombre,lista_productos,s__40882__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(producto_id)].join(''));
});})(i__40985,tipo_porcion,producto_id,producto,c__5478__auto__,size__5479__auto__,b__40986,s__40984__$2,temp__5804__auto____$1,vec__40959,nombre,lista_productos,s__40882__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"Raci\u00F3n completa")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/completo-circulo.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"Raci\u00F3n completa",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__40985,tipo_porcion,producto_id,producto,c__5478__auto__,size__5479__auto__,b__40986,s__40984__$2,temp__5804__auto____$1,vec__40959,nombre,lista_productos,s__40882__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(producto_id)].join(''));
});})(i__40985,tipo_porcion,producto_id,producto,c__5478__auto__,size__5479__auto__,b__40986,s__40984__$2,temp__5804__auto____$1,vec__40959,nombre,lista_productos,s__40882__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"Por unidad")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/unidad.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"/Unidad",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__40985,tipo_porcion,producto_id,producto,c__5478__auto__,size__5479__auto__,b__40986,s__40984__$2,temp__5804__auto____$1,vec__40959,nombre,lista_productos,s__40882__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(producto))].join(''));
});})(i__40985,tipo_porcion,producto_id,producto,c__5478__auto__,size__5479__auto__,b__40986,s__40984__$2,temp__5804__auto____$1,vec__40959,nombre,lista_productos,s__40882__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/unidad.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__40985,tipo_porcion,producto_id,producto,c__5478__auto__,size__5479__auto__,b__40986,s__40984__$2,temp__5804__auto____$1,vec__40959,nombre,lista_productos,s__40882__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(producto_id)].join(''));
});})(i__40985,tipo_porcion,producto_id,producto,c__5478__auto__,size__5479__auto__,b__40986,s__40984__$2,temp__5804__auto____$1,vec__40959,nombre,lista_productos,s__40882__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),["Tipo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tipo_porcion)].join('')], null);

}
}
}
}
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(producto)], null)));

var G__41006 = (i__40985 + (1));
i__40985 = G__41006;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40986),categorias$core$page_$_iter__40881_$_iter__40983(cljs.core.chunk_rest(s__40984__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40986),null);
}
} else {
var producto = cljs.core.first(s__40984__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"producto-item"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"precio-racion"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"precio"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"precio","precio",-1246474385).cljs$core$IFn$_invoke$arity$1(producto)),"\u20AC "].join('')], null),(function (){var tipo_porcion = new cljs.core.Keyword(null,"tipo_porcion","tipo_porcion",1174589739).cljs$core$IFn$_invoke$arity$1(producto);
var producto_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(producto);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"Media raci\u00F3n")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/medio-circulo.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"Raci\u00F3n completa",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (tipo_porcion,producto_id,producto,s__40984__$2,temp__5804__auto____$1,vec__40959,nombre,lista_productos,s__40882__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(producto_id)].join(''));
});})(tipo_porcion,producto_id,producto,s__40984__$2,temp__5804__auto____$1,vec__40959,nombre,lista_productos,s__40882__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"Raci\u00F3n completa")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/completo-circulo.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"Raci\u00F3n completa",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (tipo_porcion,producto_id,producto,s__40984__$2,temp__5804__auto____$1,vec__40959,nombre,lista_productos,s__40882__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(producto_id)].join(''));
});})(tipo_porcion,producto_id,producto,s__40984__$2,temp__5804__auto____$1,vec__40959,nombre,lista_productos,s__40882__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"Por unidad")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/unidad.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"/Unidad",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (tipo_porcion,producto_id,producto,s__40984__$2,temp__5804__auto____$1,vec__40959,nombre,lista_productos,s__40882__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(producto))].join(''));
});})(tipo_porcion,producto_id,producto,s__40984__$2,temp__5804__auto____$1,vec__40959,nombre,lista_productos,s__40882__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/unidad.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (tipo_porcion,producto_id,producto,s__40984__$2,temp__5804__auto____$1,vec__40959,nombre,lista_productos,s__40882__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(producto_id)].join(''));
});})(tipo_porcion,producto_id,producto,s__40984__$2,temp__5804__auto____$1,vec__40959,nombre,lista_productos,s__40882__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),["Tipo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tipo_porcion)].join('')], null);

}
}
}
}
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(producto)], null)),categorias$core$page_$_iter__40881_$_iter__40983(cljs.core.rest(s__40984__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__40959,nombre,lista_productos,s__40882__$2,temp__5804__auto__,productos_agrupados))
;
return iter__5480__auto__(lista_productos);
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),nombre], null)),categorias$core$page_$_iter__40881(cljs.core.rest(s__40882__$2)));
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
