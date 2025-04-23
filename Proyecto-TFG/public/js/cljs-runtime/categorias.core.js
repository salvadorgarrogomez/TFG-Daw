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
var categoria = cljs.core.some((function (p1__42140_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__42140_SHARP_),categoria_id)){
return p1__42140_SHARP_;
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
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"divProductosyCategorias"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-12.d-block.d-sm-none","div.col-12.d-block.d-sm-none",941872078),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dropdown","div.dropdown",1029783296),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.navbar-toggler.dropdown-toggle.desplegable","button.navbar-toggler.dropdown-toggle.desplegable",-1788941809),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"data-toggle","data-toggle",436966687),"dropdown",new cljs.core.Keyword(null,"aria-expanded","aria-expanded",-1360942393),"false",new cljs.core.Keyword(null,"aria-controls","aria-controls",-1872379154),"dropdown-categorias"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.navbar-toggler-icon.me-2","span.navbar-toggler-icon.me-2",-2097084715)], null),"Selecciona una categoria de la carta"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dropdown-menu","div.dropdown-menu",-1884774306),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"dropdown-categorias"], null),(function (){var iter__5480__auto__ = (function categorias$core$page_$_iter__42174(s__42175){
return (new cljs.core.LazySeq(null,(function (){
var s__42175__$1 = s__42175;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__42175__$1);
if(temp__5804__auto__){
var s__42175__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42175__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__42175__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__42177 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__42176 = (0);
while(true){
if((i__42176 < size__5479__auto__)){
var categoria = cljs.core._nth(c__5478__auto__,i__42176);
cljs.core.chunk_append(b__42177,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.dropdown-item","a.dropdown-item",2124140477),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__42176,categoria,c__5478__auto__,size__5479__auto__,b__42177,s__42175__$2,temp__5804__auto__){
return (function (){
categorias.core.obtener_productos(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(categoria));

return cljs.core.reset_BANG_(categorias.core.mensaje_categoria,categorias.core.obtener_mensaje_categoria(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(categoria)));
});})(i__42176,categoria,c__5478__auto__,size__5479__auto__,b__42177,s__42175__$2,temp__5804__auto__))
], null),new cljs.core.Keyword(null,"nombre","nombre",1047347004).cljs$core$IFn$_invoke$arity$1(categoria)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(categoria)], null)));

var G__42314 = (i__42176 + (1));
i__42176 = G__42314;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42177),categorias$core$page_$_iter__42174(cljs.core.chunk_rest(s__42175__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42177),null);
}
} else {
var categoria = cljs.core.first(s__42175__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.dropdown-item","a.dropdown-item",2124140477),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (categoria,s__42175__$2,temp__5804__auto__){
return (function (){
categorias.core.obtener_productos(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(categoria));

return cljs.core.reset_BANG_(categorias.core.mensaje_categoria,categorias.core.obtener_mensaje_categoria(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(categoria)));
});})(categoria,s__42175__$2,temp__5804__auto__))
], null),new cljs.core.Keyword(null,"nombre","nombre",1047347004).cljs$core$IFn$_invoke$arity$1(categoria)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(categoria)], null)),categorias$core$page_$_iter__42174(cljs.core.rest(s__42175__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.deref(app.db.categorias));
})()], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-12.d-none.d-sm-block","div.col-12.d-none.d-sm-block",1179687194),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"divButtons"], null),((cljs.core.empty_QMARK_(cljs.core.deref(app.db.categorias)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Cargando categor\u00EDas..."], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"buttonCategoria"], null),(function (){var iter__5480__auto__ = (function categorias$core$page_$_iter__42198(s__42199){
return (new cljs.core.LazySeq(null,(function (){
var s__42199__$1 = s__42199;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__42199__$1);
if(temp__5804__auto__){
var s__42199__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42199__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__42199__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__42201 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__42200 = (0);
while(true){
if((i__42200 < size__5479__auto__)){
var categoria = cljs.core._nth(c__5478__auto__,i__42200);
cljs.core.chunk_append(b__42201,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__42200,categoria,c__5478__auto__,size__5479__auto__,b__42201,s__42199__$2,temp__5804__auto__){
return (function (){
categorias.core.obtener_productos(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(categoria));

return cljs.core.reset_BANG_(categorias.core.mensaje_categoria,categorias.core.obtener_mensaje_categoria(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(categoria)));
});})(i__42200,categoria,c__5478__auto__,size__5479__auto__,b__42201,s__42199__$2,temp__5804__auto__))
,new cljs.core.Keyword(null,"class","class",-2030961996),"buttons"], null),new cljs.core.Keyword(null,"nombre","nombre",1047347004).cljs$core$IFn$_invoke$arity$1(categoria)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(categoria)], null)));

var G__42318 = (i__42200 + (1));
i__42200 = G__42318;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42201),categorias$core$page_$_iter__42198(cljs.core.chunk_rest(s__42199__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42201),null);
}
} else {
var categoria = cljs.core.first(s__42199__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (categoria,s__42199__$2,temp__5804__auto__){
return (function (){
categorias.core.obtener_productos(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(categoria));

return cljs.core.reset_BANG_(categorias.core.mensaje_categoria,categorias.core.obtener_mensaje_categoria(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(categoria)));
});})(categoria,s__42199__$2,temp__5804__auto__))
,new cljs.core.Keyword(null,"class","class",-2030961996),"buttons"], null),new cljs.core.Keyword(null,"nombre","nombre",1047347004).cljs$core$IFn$_invoke$arity$1(categoria)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(categoria)], null)),categorias$core$page_$_iter__42198(cljs.core.rest(s__42199__$2)));
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
var iter__5480__auto__ = (function categorias$core$page_$_iter__42236(s__42237){
return (new cljs.core.LazySeq(null,(function (){
var s__42237__$1 = s__42237;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__42237__$1);
if(temp__5804__auto__){
var s__42237__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42237__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__42237__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__42239 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__42238 = (0);
while(true){
if((i__42238 < size__5479__auto__)){
var vec__42247 = cljs.core._nth(c__5478__auto__,i__42238);
var nombre = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42247,(0),null);
var lista_productos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42247,(1),null);
cljs.core.chunk_append(b__42239,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.col-12","li.col-12",690592411),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"productosLI"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"producto-info"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"negrita"], null),nombre], null),(function (){var primer_producto = cljs.core.first(lista_productos);
var descripcion_limpia = clojure.string.trim(new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(primer_producto));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"description"], null),((cljs.core.empty_QMARK_(descripcion_limpia))?" ":descripcion_limpia)], null);
})()], null),(function (){var iter__5480__auto__ = ((function (i__42238,vec__42247,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__42239,s__42237__$2,temp__5804__auto__,productos_agrupados){
return (function categorias$core$page_$_iter__42236_$_iter__42253(s__42254){
return (new cljs.core.LazySeq(null,((function (i__42238,vec__42247,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__42239,s__42237__$2,temp__5804__auto__,productos_agrupados){
return (function (){
var s__42254__$1 = s__42254;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__42254__$1);
if(temp__5804__auto____$1){
var s__42254__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__42254__$2)){
var c__5478__auto____$1 = cljs.core.chunk_first(s__42254__$2);
var size__5479__auto____$1 = cljs.core.count(c__5478__auto____$1);
var b__42256 = cljs.core.chunk_buffer(size__5479__auto____$1);
if((function (){var i__42255 = (0);
while(true){
if((i__42255 < size__5479__auto____$1)){
var producto = cljs.core._nth(c__5478__auto____$1,i__42255);
cljs.core.chunk_append(b__42256,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"producto-item"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"precio-racion"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"precio"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"precio","precio",-1246474385).cljs$core$IFn$_invoke$arity$1(producto)),"\u20AC "].join('')], null),(function (){var tipo_porcion = new cljs.core.Keyword(null,"tipo_porcion","tipo_porcion",1174589739).cljs$core$IFn$_invoke$arity$1(producto);
var producto_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(producto);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"Media raci\u00F3n")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/medio-circulo.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"Raci\u00F3n completa",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__42255,i__42238,tipo_porcion,producto_id,producto,c__5478__auto____$1,size__5479__auto____$1,b__42256,s__42254__$2,temp__5804__auto____$1,vec__42247,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__42239,s__42237__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(producto_id)].join(''));
});})(i__42255,i__42238,tipo_porcion,producto_id,producto,c__5478__auto____$1,size__5479__auto____$1,b__42256,s__42254__$2,temp__5804__auto____$1,vec__42247,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__42239,s__42237__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"Raci\u00F3n completa")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/completo-circulo.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"Raci\u00F3n completa",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__42255,i__42238,tipo_porcion,producto_id,producto,c__5478__auto____$1,size__5479__auto____$1,b__42256,s__42254__$2,temp__5804__auto____$1,vec__42247,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__42239,s__42237__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(producto_id)].join(''));
});})(i__42255,i__42238,tipo_porcion,producto_id,producto,c__5478__auto____$1,size__5479__auto____$1,b__42256,s__42254__$2,temp__5804__auto____$1,vec__42247,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__42239,s__42237__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"Por unidad")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/unidad.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"/Unidad",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__42255,i__42238,tipo_porcion,producto_id,producto,c__5478__auto____$1,size__5479__auto____$1,b__42256,s__42254__$2,temp__5804__auto____$1,vec__42247,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__42239,s__42237__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(producto))].join(''));
});})(i__42255,i__42238,tipo_porcion,producto_id,producto,c__5478__auto____$1,size__5479__auto____$1,b__42256,s__42254__$2,temp__5804__auto____$1,vec__42247,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__42239,s__42237__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/unidad.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__42255,i__42238,tipo_porcion,producto_id,producto,c__5478__auto____$1,size__5479__auto____$1,b__42256,s__42254__$2,temp__5804__auto____$1,vec__42247,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__42239,s__42237__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(producto_id)].join(''));
});})(i__42255,i__42238,tipo_porcion,producto_id,producto,c__5478__auto____$1,size__5479__auto____$1,b__42256,s__42254__$2,temp__5804__auto____$1,vec__42247,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__42239,s__42237__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),["Tipo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tipo_porcion)].join('')], null);

}
}
}
}
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(producto)], null)));

var G__42324 = (i__42255 + (1));
i__42255 = G__42324;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42256),categorias$core$page_$_iter__42236_$_iter__42253(cljs.core.chunk_rest(s__42254__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42256),null);
}
} else {
var producto = cljs.core.first(s__42254__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"producto-item"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"precio-racion"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"precio"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"precio","precio",-1246474385).cljs$core$IFn$_invoke$arity$1(producto)),"\u20AC "].join('')], null),(function (){var tipo_porcion = new cljs.core.Keyword(null,"tipo_porcion","tipo_porcion",1174589739).cljs$core$IFn$_invoke$arity$1(producto);
var producto_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(producto);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"Media raci\u00F3n")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/medio-circulo.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"Raci\u00F3n completa",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__42238,tipo_porcion,producto_id,producto,s__42254__$2,temp__5804__auto____$1,vec__42247,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__42239,s__42237__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(producto_id)].join(''));
});})(i__42238,tipo_porcion,producto_id,producto,s__42254__$2,temp__5804__auto____$1,vec__42247,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__42239,s__42237__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"Raci\u00F3n completa")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/completo-circulo.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"Raci\u00F3n completa",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__42238,tipo_porcion,producto_id,producto,s__42254__$2,temp__5804__auto____$1,vec__42247,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__42239,s__42237__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(producto_id)].join(''));
});})(i__42238,tipo_porcion,producto_id,producto,s__42254__$2,temp__5804__auto____$1,vec__42247,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__42239,s__42237__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"Por unidad")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/unidad.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"/Unidad",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__42238,tipo_porcion,producto_id,producto,s__42254__$2,temp__5804__auto____$1,vec__42247,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__42239,s__42237__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(producto))].join(''));
});})(i__42238,tipo_porcion,producto_id,producto,s__42254__$2,temp__5804__auto____$1,vec__42247,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__42239,s__42237__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/unidad.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__42238,tipo_porcion,producto_id,producto,s__42254__$2,temp__5804__auto____$1,vec__42247,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__42239,s__42237__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(producto_id)].join(''));
});})(i__42238,tipo_porcion,producto_id,producto,s__42254__$2,temp__5804__auto____$1,vec__42247,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__42239,s__42237__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),["Tipo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tipo_porcion)].join('')], null);

}
}
}
}
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(producto)], null)),categorias$core$page_$_iter__42236_$_iter__42253(cljs.core.rest(s__42254__$2)));
}
} else {
return null;
}
break;
}
});})(i__42238,vec__42247,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__42239,s__42237__$2,temp__5804__auto__,productos_agrupados))
,null,null));
});})(i__42238,vec__42247,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__42239,s__42237__$2,temp__5804__auto__,productos_agrupados))
;
return iter__5480__auto__(lista_productos);
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),nombre], null)));

var G__42326 = (i__42238 + (1));
i__42238 = G__42326;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42239),categorias$core$page_$_iter__42236(cljs.core.chunk_rest(s__42237__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42239),null);
}
} else {
var vec__42281 = cljs.core.first(s__42237__$2);
var nombre = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42281,(0),null);
var lista_productos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42281,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.col-12","li.col-12",690592411),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"productosLI"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"producto-info"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"negrita"], null),nombre], null),(function (){var primer_producto = cljs.core.first(lista_productos);
var descripcion_limpia = clojure.string.trim(new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(primer_producto));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"description"], null),((cljs.core.empty_QMARK_(descripcion_limpia))?" ":descripcion_limpia)], null);
})()], null),(function (){var iter__5480__auto__ = ((function (vec__42281,nombre,lista_productos,s__42237__$2,temp__5804__auto__,productos_agrupados){
return (function categorias$core$page_$_iter__42236_$_iter__42289(s__42290){
return (new cljs.core.LazySeq(null,(function (){
var s__42290__$1 = s__42290;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__42290__$1);
if(temp__5804__auto____$1){
var s__42290__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__42290__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__42290__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__42292 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__42291 = (0);
while(true){
if((i__42291 < size__5479__auto__)){
var producto = cljs.core._nth(c__5478__auto__,i__42291);
cljs.core.chunk_append(b__42292,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"producto-item"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"precio-racion"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"precio"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"precio","precio",-1246474385).cljs$core$IFn$_invoke$arity$1(producto)),"\u20AC "].join('')], null),(function (){var tipo_porcion = new cljs.core.Keyword(null,"tipo_porcion","tipo_porcion",1174589739).cljs$core$IFn$_invoke$arity$1(producto);
var producto_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(producto);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"Media raci\u00F3n")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/medio-circulo.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"Raci\u00F3n completa",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__42291,tipo_porcion,producto_id,producto,c__5478__auto__,size__5479__auto__,b__42292,s__42290__$2,temp__5804__auto____$1,vec__42281,nombre,lista_productos,s__42237__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(producto_id)].join(''));
});})(i__42291,tipo_porcion,producto_id,producto,c__5478__auto__,size__5479__auto__,b__42292,s__42290__$2,temp__5804__auto____$1,vec__42281,nombre,lista_productos,s__42237__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"Raci\u00F3n completa")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/completo-circulo.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"Raci\u00F3n completa",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__42291,tipo_porcion,producto_id,producto,c__5478__auto__,size__5479__auto__,b__42292,s__42290__$2,temp__5804__auto____$1,vec__42281,nombre,lista_productos,s__42237__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(producto_id)].join(''));
});})(i__42291,tipo_porcion,producto_id,producto,c__5478__auto__,size__5479__auto__,b__42292,s__42290__$2,temp__5804__auto____$1,vec__42281,nombre,lista_productos,s__42237__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"Por unidad")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/unidad.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"/Unidad",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__42291,tipo_porcion,producto_id,producto,c__5478__auto__,size__5479__auto__,b__42292,s__42290__$2,temp__5804__auto____$1,vec__42281,nombre,lista_productos,s__42237__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(producto))].join(''));
});})(i__42291,tipo_porcion,producto_id,producto,c__5478__auto__,size__5479__auto__,b__42292,s__42290__$2,temp__5804__auto____$1,vec__42281,nombre,lista_productos,s__42237__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/unidad.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__42291,tipo_porcion,producto_id,producto,c__5478__auto__,size__5479__auto__,b__42292,s__42290__$2,temp__5804__auto____$1,vec__42281,nombre,lista_productos,s__42237__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(producto_id)].join(''));
});})(i__42291,tipo_porcion,producto_id,producto,c__5478__auto__,size__5479__auto__,b__42292,s__42290__$2,temp__5804__auto____$1,vec__42281,nombre,lista_productos,s__42237__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),["Tipo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tipo_porcion)].join('')], null);

}
}
}
}
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(producto)], null)));

var G__42328 = (i__42291 + (1));
i__42291 = G__42328;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42292),categorias$core$page_$_iter__42236_$_iter__42289(cljs.core.chunk_rest(s__42290__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42292),null);
}
} else {
var producto = cljs.core.first(s__42290__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"producto-item"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"precio-racion"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"precio"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"precio","precio",-1246474385).cljs$core$IFn$_invoke$arity$1(producto)),"\u20AC "].join('')], null),(function (){var tipo_porcion = new cljs.core.Keyword(null,"tipo_porcion","tipo_porcion",1174589739).cljs$core$IFn$_invoke$arity$1(producto);
var producto_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(producto);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"Media raci\u00F3n")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/medio-circulo.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"Raci\u00F3n completa",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (tipo_porcion,producto_id,producto,s__42290__$2,temp__5804__auto____$1,vec__42281,nombre,lista_productos,s__42237__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(producto_id)].join(''));
});})(tipo_porcion,producto_id,producto,s__42290__$2,temp__5804__auto____$1,vec__42281,nombre,lista_productos,s__42237__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"Raci\u00F3n completa")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/completo-circulo.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"Raci\u00F3n completa",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (tipo_porcion,producto_id,producto,s__42290__$2,temp__5804__auto____$1,vec__42281,nombre,lista_productos,s__42237__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(producto_id)].join(''));
});})(tipo_porcion,producto_id,producto,s__42290__$2,temp__5804__auto____$1,vec__42281,nombre,lista_productos,s__42237__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"Por unidad")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/unidad.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"/Unidad",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (tipo_porcion,producto_id,producto,s__42290__$2,temp__5804__auto____$1,vec__42281,nombre,lista_productos,s__42237__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(producto))].join(''));
});})(tipo_porcion,producto_id,producto,s__42290__$2,temp__5804__auto____$1,vec__42281,nombre,lista_productos,s__42237__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/unidad.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (tipo_porcion,producto_id,producto,s__42290__$2,temp__5804__auto____$1,vec__42281,nombre,lista_productos,s__42237__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(producto_id)].join(''));
});})(tipo_porcion,producto_id,producto,s__42290__$2,temp__5804__auto____$1,vec__42281,nombre,lista_productos,s__42237__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),["Tipo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tipo_porcion)].join('')], null);

}
}
}
}
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(producto)], null)),categorias$core$page_$_iter__42236_$_iter__42289(cljs.core.rest(s__42290__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__42281,nombre,lista_productos,s__42237__$2,temp__5804__auto__,productos_agrupados))
;
return iter__5480__auto__(lista_productos);
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),nombre], null)),categorias$core$page_$_iter__42236(cljs.core.rest(s__42237__$2)));
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
