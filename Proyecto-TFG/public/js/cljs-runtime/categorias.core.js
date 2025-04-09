goog.provide('categorias.core');
categorias.core.obtener_productos = (function categorias$core$obtener_productos(categoria_id){
console.log("Obteniendo productos para la categor\u00EDa",categoria_id);

return app.db.fetch_productos(categoria_id);
});
categorias.core.agrupar_productos = (function categorias$core$agrupar_productos(productos__$1){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,producto){
var nombre = new cljs.core.Keyword(null,"nombre","nombre",1047347004).cljs$core$IFn$_invoke$arity$1(producto);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,nombre,cljs.core.conj,producto);
}),cljs.core.PersistentArrayMap.EMPTY,productos__$1);
});
categorias.core.mensaje_categoria = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
categorias.core.obtener_descripcion_categoria = (function categorias$core$obtener_descripcion_categoria(categoria_id){
var categoria = cljs.core.some((function (p1__18848_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__18848_SHARP_),categoria_id)){
return p1__18848_SHARP_;
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
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"divProductosyCategorias"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-12.d-block.d-sm-none","div.col-12.d-block.d-sm-none",941872078),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dropdown","div.dropdown",1029783296),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.navbar-toggler.dropdown-toggle.desplegable","button.navbar-toggler.dropdown-toggle.desplegable",-1788941809),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"data-toggle","data-toggle",436966687),"dropdown",new cljs.core.Keyword(null,"aria-expanded","aria-expanded",-1360942393),"false",new cljs.core.Keyword(null,"aria-controls","aria-controls",-1872379154),"dropdown-categorias"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.navbar-toggler-icon.me-2","span.navbar-toggler-icon.me-2",-2097084715)], null),"Selecciona una categoria de la carta"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dropdown-menu","div.dropdown-menu",-1884774306),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"dropdown-categorias"], null),(function (){var iter__5480__auto__ = (function categorias$core$page_$_iter__18849(s__18850){
return (new cljs.core.LazySeq(null,(function (){
var s__18850__$1 = s__18850;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__18850__$1);
if(temp__5804__auto__){
var s__18850__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18850__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__18850__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__18852 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__18851 = (0);
while(true){
if((i__18851 < size__5479__auto__)){
var categoria = cljs.core._nth(c__5478__auto__,i__18851);
cljs.core.chunk_append(b__18852,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.dropdown-item","a.dropdown-item",2124140477),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__18851,categoria,c__5478__auto__,size__5479__auto__,b__18852,s__18850__$2,temp__5804__auto__){
return (function (){
categorias.core.obtener_productos(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(categoria));

return cljs.core.reset_BANG_(categorias.core.mensaje_categoria,categorias.core.obtener_mensaje_categoria(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(categoria)));
});})(i__18851,categoria,c__5478__auto__,size__5479__auto__,b__18852,s__18850__$2,temp__5804__auto__))
], null),new cljs.core.Keyword(null,"nombre","nombre",1047347004).cljs$core$IFn$_invoke$arity$1(categoria)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(categoria)], null)));

var G__18875 = (i__18851 + (1));
i__18851 = G__18875;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18852),categorias$core$page_$_iter__18849(cljs.core.chunk_rest(s__18850__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18852),null);
}
} else {
var categoria = cljs.core.first(s__18850__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.dropdown-item","a.dropdown-item",2124140477),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (categoria,s__18850__$2,temp__5804__auto__){
return (function (){
categorias.core.obtener_productos(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(categoria));

return cljs.core.reset_BANG_(categorias.core.mensaje_categoria,categorias.core.obtener_mensaje_categoria(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(categoria)));
});})(categoria,s__18850__$2,temp__5804__auto__))
], null),new cljs.core.Keyword(null,"nombre","nombre",1047347004).cljs$core$IFn$_invoke$arity$1(categoria)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(categoria)], null)),categorias$core$page_$_iter__18849(cljs.core.rest(s__18850__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.deref(app.db.categorias));
})()], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-12.d-none.d-sm-block","div.col-12.d-none.d-sm-block",1179687194),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"divButtons"], null),((cljs.core.empty_QMARK_(cljs.core.deref(app.db.categorias)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Cargando categor\u00EDas..."], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"buttonCategoria"], null),(function (){var iter__5480__auto__ = (function categorias$core$page_$_iter__18853(s__18854){
return (new cljs.core.LazySeq(null,(function (){
var s__18854__$1 = s__18854;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__18854__$1);
if(temp__5804__auto__){
var s__18854__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18854__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__18854__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__18856 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__18855 = (0);
while(true){
if((i__18855 < size__5479__auto__)){
var categoria = cljs.core._nth(c__5478__auto__,i__18855);
cljs.core.chunk_append(b__18856,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__18855,categoria,c__5478__auto__,size__5479__auto__,b__18856,s__18854__$2,temp__5804__auto__){
return (function (){
categorias.core.obtener_productos(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(categoria));

return cljs.core.reset_BANG_(categorias.core.mensaje_categoria,categorias.core.obtener_mensaje_categoria(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(categoria)));
});})(i__18855,categoria,c__5478__auto__,size__5479__auto__,b__18856,s__18854__$2,temp__5804__auto__))
,new cljs.core.Keyword(null,"class","class",-2030961996),"buttons"], null),new cljs.core.Keyword(null,"nombre","nombre",1047347004).cljs$core$IFn$_invoke$arity$1(categoria)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(categoria)], null)));

var G__18876 = (i__18855 + (1));
i__18855 = G__18876;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18856),categorias$core$page_$_iter__18853(cljs.core.chunk_rest(s__18854__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18856),null);
}
} else {
var categoria = cljs.core.first(s__18854__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (categoria,s__18854__$2,temp__5804__auto__){
return (function (){
categorias.core.obtener_productos(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(categoria));

return cljs.core.reset_BANG_(categorias.core.mensaje_categoria,categorias.core.obtener_mensaje_categoria(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(categoria)));
});})(categoria,s__18854__$2,temp__5804__auto__))
,new cljs.core.Keyword(null,"class","class",-2030961996),"buttons"], null),new cljs.core.Keyword(null,"nombre","nombre",1047347004).cljs$core$IFn$_invoke$arity$1(categoria)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(categoria)], null)),categorias$core$page_$_iter__18853(cljs.core.rest(s__18854__$2)));
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
var iter__5480__auto__ = (function categorias$core$page_$_iter__18857(s__18858){
return (new cljs.core.LazySeq(null,(function (){
var s__18858__$1 = s__18858;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__18858__$1);
if(temp__5804__auto__){
var s__18858__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18858__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__18858__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__18860 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__18859 = (0);
while(true){
if((i__18859 < size__5479__auto__)){
var vec__18861 = cljs.core._nth(c__5478__auto__,i__18859);
var nombre = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18861,(0),null);
var lista_productos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18861,(1),null);
cljs.core.chunk_append(b__18860,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.col-12","li.col-12",690592411),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"productosLI"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"producto-info"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"negrita"], null),nombre], null),(function (){var primer_producto = cljs.core.first(lista_productos);
var descripcion_limpia = clojure.string.trim(new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(primer_producto));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"description"], null),((cljs.core.empty_QMARK_(descripcion_limpia))?" ":descripcion_limpia)], null);
})()], null),(function (){var iter__5480__auto__ = ((function (i__18859,vec__18861,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__18860,s__18858__$2,temp__5804__auto__,productos_agrupados){
return (function categorias$core$page_$_iter__18857_$_iter__18864(s__18865){
return (new cljs.core.LazySeq(null,((function (i__18859,vec__18861,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__18860,s__18858__$2,temp__5804__auto__,productos_agrupados){
return (function (){
var s__18865__$1 = s__18865;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__18865__$1);
if(temp__5804__auto____$1){
var s__18865__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__18865__$2)){
var c__5478__auto____$1 = cljs.core.chunk_first(s__18865__$2);
var size__5479__auto____$1 = cljs.core.count(c__5478__auto____$1);
var b__18867 = cljs.core.chunk_buffer(size__5479__auto____$1);
if((function (){var i__18866 = (0);
while(true){
if((i__18866 < size__5479__auto____$1)){
var producto = cljs.core._nth(c__5478__auto____$1,i__18866);
cljs.core.chunk_append(b__18867,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"producto-item"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"precio-racion"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"precio"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"precio","precio",-1246474385).cljs$core$IFn$_invoke$arity$1(producto)),"\u20AC "].join('')], null),(function (){var tipo_porcion = new cljs.core.Keyword(null,"tipo_porcion","tipo_porcion",1174589739).cljs$core$IFn$_invoke$arity$1(producto);
var producto_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(producto);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"Media raci\u00F3n")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/medio-circulo.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"Raci\u00F3n completa",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__18866,i__18859,tipo_porcion,producto_id,producto,c__5478__auto____$1,size__5479__auto____$1,b__18867,s__18865__$2,temp__5804__auto____$1,vec__18861,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__18860,s__18858__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(producto_id)].join(''));
});})(i__18866,i__18859,tipo_porcion,producto_id,producto,c__5478__auto____$1,size__5479__auto____$1,b__18867,s__18865__$2,temp__5804__auto____$1,vec__18861,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__18860,s__18858__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"Raci\u00F3n completa")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/completo-circulo.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"Raci\u00F3n completa",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__18866,i__18859,tipo_porcion,producto_id,producto,c__5478__auto____$1,size__5479__auto____$1,b__18867,s__18865__$2,temp__5804__auto____$1,vec__18861,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__18860,s__18858__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(producto_id)].join(''));
});})(i__18866,i__18859,tipo_porcion,producto_id,producto,c__5478__auto____$1,size__5479__auto____$1,b__18867,s__18865__$2,temp__5804__auto____$1,vec__18861,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__18860,s__18858__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"Por unidad")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/unidad.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"/Unidad",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__18866,i__18859,tipo_porcion,producto_id,producto,c__5478__auto____$1,size__5479__auto____$1,b__18867,s__18865__$2,temp__5804__auto____$1,vec__18861,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__18860,s__18858__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(producto))].join(''));
});})(i__18866,i__18859,tipo_porcion,producto_id,producto,c__5478__auto____$1,size__5479__auto____$1,b__18867,s__18865__$2,temp__5804__auto____$1,vec__18861,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__18860,s__18858__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/unidad.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__18866,i__18859,tipo_porcion,producto_id,producto,c__5478__auto____$1,size__5479__auto____$1,b__18867,s__18865__$2,temp__5804__auto____$1,vec__18861,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__18860,s__18858__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(producto_id)].join(''));
});})(i__18866,i__18859,tipo_porcion,producto_id,producto,c__5478__auto____$1,size__5479__auto____$1,b__18867,s__18865__$2,temp__5804__auto____$1,vec__18861,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__18860,s__18858__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),["Tipo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tipo_porcion)].join('')], null);

}
}
}
}
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(producto)], null)));

var G__18878 = (i__18866 + (1));
i__18866 = G__18878;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18867),categorias$core$page_$_iter__18857_$_iter__18864(cljs.core.chunk_rest(s__18865__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18867),null);
}
} else {
var producto = cljs.core.first(s__18865__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"producto-item"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"precio-racion"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"precio"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"precio","precio",-1246474385).cljs$core$IFn$_invoke$arity$1(producto)),"\u20AC "].join('')], null),(function (){var tipo_porcion = new cljs.core.Keyword(null,"tipo_porcion","tipo_porcion",1174589739).cljs$core$IFn$_invoke$arity$1(producto);
var producto_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(producto);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"Media raci\u00F3n")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/medio-circulo.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"Raci\u00F3n completa",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__18859,tipo_porcion,producto_id,producto,s__18865__$2,temp__5804__auto____$1,vec__18861,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__18860,s__18858__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(producto_id)].join(''));
});})(i__18859,tipo_porcion,producto_id,producto,s__18865__$2,temp__5804__auto____$1,vec__18861,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__18860,s__18858__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"Raci\u00F3n completa")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/completo-circulo.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"Raci\u00F3n completa",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__18859,tipo_porcion,producto_id,producto,s__18865__$2,temp__5804__auto____$1,vec__18861,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__18860,s__18858__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(producto_id)].join(''));
});})(i__18859,tipo_porcion,producto_id,producto,s__18865__$2,temp__5804__auto____$1,vec__18861,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__18860,s__18858__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"Por unidad")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/unidad.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"/Unidad",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__18859,tipo_porcion,producto_id,producto,s__18865__$2,temp__5804__auto____$1,vec__18861,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__18860,s__18858__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(producto))].join(''));
});})(i__18859,tipo_porcion,producto_id,producto,s__18865__$2,temp__5804__auto____$1,vec__18861,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__18860,s__18858__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/unidad.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__18859,tipo_porcion,producto_id,producto,s__18865__$2,temp__5804__auto____$1,vec__18861,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__18860,s__18858__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(producto_id)].join(''));
});})(i__18859,tipo_porcion,producto_id,producto,s__18865__$2,temp__5804__auto____$1,vec__18861,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__18860,s__18858__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),["Tipo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tipo_porcion)].join('')], null);

}
}
}
}
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(producto)], null)),categorias$core$page_$_iter__18857_$_iter__18864(cljs.core.rest(s__18865__$2)));
}
} else {
return null;
}
break;
}
});})(i__18859,vec__18861,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__18860,s__18858__$2,temp__5804__auto__,productos_agrupados))
,null,null));
});})(i__18859,vec__18861,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__18860,s__18858__$2,temp__5804__auto__,productos_agrupados))
;
return iter__5480__auto__(lista_productos);
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),nombre], null)));

var G__18879 = (i__18859 + (1));
i__18859 = G__18879;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18860),categorias$core$page_$_iter__18857(cljs.core.chunk_rest(s__18858__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18860),null);
}
} else {
var vec__18868 = cljs.core.first(s__18858__$2);
var nombre = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18868,(0),null);
var lista_productos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18868,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.col-12","li.col-12",690592411),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"productosLI"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"producto-info"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"negrita"], null),nombre], null),(function (){var primer_producto = cljs.core.first(lista_productos);
var descripcion_limpia = clojure.string.trim(new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(primer_producto));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"description"], null),((cljs.core.empty_QMARK_(descripcion_limpia))?" ":descripcion_limpia)], null);
})()], null),(function (){var iter__5480__auto__ = ((function (vec__18868,nombre,lista_productos,s__18858__$2,temp__5804__auto__,productos_agrupados){
return (function categorias$core$page_$_iter__18857_$_iter__18871(s__18872){
return (new cljs.core.LazySeq(null,(function (){
var s__18872__$1 = s__18872;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__18872__$1);
if(temp__5804__auto____$1){
var s__18872__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__18872__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__18872__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__18874 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__18873 = (0);
while(true){
if((i__18873 < size__5479__auto__)){
var producto = cljs.core._nth(c__5478__auto__,i__18873);
cljs.core.chunk_append(b__18874,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"producto-item"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"precio-racion"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"precio"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"precio","precio",-1246474385).cljs$core$IFn$_invoke$arity$1(producto)),"\u20AC "].join('')], null),(function (){var tipo_porcion = new cljs.core.Keyword(null,"tipo_porcion","tipo_porcion",1174589739).cljs$core$IFn$_invoke$arity$1(producto);
var producto_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(producto);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"Media raci\u00F3n")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/medio-circulo.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"Raci\u00F3n completa",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__18873,tipo_porcion,producto_id,producto,c__5478__auto__,size__5479__auto__,b__18874,s__18872__$2,temp__5804__auto____$1,vec__18868,nombre,lista_productos,s__18858__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(producto_id)].join(''));
});})(i__18873,tipo_porcion,producto_id,producto,c__5478__auto__,size__5479__auto__,b__18874,s__18872__$2,temp__5804__auto____$1,vec__18868,nombre,lista_productos,s__18858__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"Raci\u00F3n completa")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/completo-circulo.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"Raci\u00F3n completa",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__18873,tipo_porcion,producto_id,producto,c__5478__auto__,size__5479__auto__,b__18874,s__18872__$2,temp__5804__auto____$1,vec__18868,nombre,lista_productos,s__18858__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(producto_id)].join(''));
});})(i__18873,tipo_porcion,producto_id,producto,c__5478__auto__,size__5479__auto__,b__18874,s__18872__$2,temp__5804__auto____$1,vec__18868,nombre,lista_productos,s__18858__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"Por unidad")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/unidad.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"/Unidad",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__18873,tipo_porcion,producto_id,producto,c__5478__auto__,size__5479__auto__,b__18874,s__18872__$2,temp__5804__auto____$1,vec__18868,nombre,lista_productos,s__18858__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(producto))].join(''));
});})(i__18873,tipo_porcion,producto_id,producto,c__5478__auto__,size__5479__auto__,b__18874,s__18872__$2,temp__5804__auto____$1,vec__18868,nombre,lista_productos,s__18858__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/unidad.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__18873,tipo_porcion,producto_id,producto,c__5478__auto__,size__5479__auto__,b__18874,s__18872__$2,temp__5804__auto____$1,vec__18868,nombre,lista_productos,s__18858__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(producto_id)].join(''));
});})(i__18873,tipo_porcion,producto_id,producto,c__5478__auto__,size__5479__auto__,b__18874,s__18872__$2,temp__5804__auto____$1,vec__18868,nombre,lista_productos,s__18858__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),["Tipo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tipo_porcion)].join('')], null);

}
}
}
}
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(producto)], null)));

var G__18880 = (i__18873 + (1));
i__18873 = G__18880;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18874),categorias$core$page_$_iter__18857_$_iter__18871(cljs.core.chunk_rest(s__18872__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18874),null);
}
} else {
var producto = cljs.core.first(s__18872__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"producto-item"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"precio-racion"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"precio"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"precio","precio",-1246474385).cljs$core$IFn$_invoke$arity$1(producto)),"\u20AC "].join('')], null),(function (){var tipo_porcion = new cljs.core.Keyword(null,"tipo_porcion","tipo_porcion",1174589739).cljs$core$IFn$_invoke$arity$1(producto);
var producto_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(producto);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"Media raci\u00F3n")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/medio-circulo.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"Raci\u00F3n completa",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (tipo_porcion,producto_id,producto,s__18872__$2,temp__5804__auto____$1,vec__18868,nombre,lista_productos,s__18858__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(producto_id)].join(''));
});})(tipo_porcion,producto_id,producto,s__18872__$2,temp__5804__auto____$1,vec__18868,nombre,lista_productos,s__18858__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"Raci\u00F3n completa")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/completo-circulo.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"Raci\u00F3n completa",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (tipo_porcion,producto_id,producto,s__18872__$2,temp__5804__auto____$1,vec__18868,nombre,lista_productos,s__18858__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(producto_id)].join(''));
});})(tipo_porcion,producto_id,producto,s__18872__$2,temp__5804__auto____$1,vec__18868,nombre,lista_productos,s__18858__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"Por unidad")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/unidad.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"/Unidad",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (tipo_porcion,producto_id,producto,s__18872__$2,temp__5804__auto____$1,vec__18868,nombre,lista_productos,s__18858__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(producto))].join(''));
});})(tipo_porcion,producto_id,producto,s__18872__$2,temp__5804__auto____$1,vec__18868,nombre,lista_productos,s__18858__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/unidad.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (tipo_porcion,producto_id,producto,s__18872__$2,temp__5804__auto____$1,vec__18868,nombre,lista_productos,s__18858__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(producto_id)].join(''));
});})(tipo_porcion,producto_id,producto,s__18872__$2,temp__5804__auto____$1,vec__18868,nombre,lista_productos,s__18858__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),["Tipo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tipo_porcion)].join('')], null);

}
}
}
}
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(producto)], null)),categorias$core$page_$_iter__18857_$_iter__18871(cljs.core.rest(s__18872__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__18868,nombre,lista_productos,s__18858__$2,temp__5804__auto__,productos_agrupados))
;
return iter__5480__auto__(lista_productos);
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),nombre], null)),categorias$core$page_$_iter__18857(cljs.core.rest(s__18858__$2)));
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
