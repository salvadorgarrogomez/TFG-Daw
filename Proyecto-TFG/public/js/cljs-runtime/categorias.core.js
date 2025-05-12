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
var categoria = cljs.core.some((function (p1__16571_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__16571_SHARP_),categoria_id)){
return p1__16571_SHARP_;
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
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"divProductosyCategorias"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-12.d-block.d-sm-none","div.col-12.d-block.d-sm-none",941872078),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dropdown","div.dropdown",1029783296),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.dropdown-toggle.select","button.btn.dropdown-toggle.select",954221024),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"data-bs-toggle","data-bs-toggle",-1489706489),"dropdown",new cljs.core.Keyword(null,"aria-expanded","aria-expanded",-1360942393),"false"], null),"Selecciona una categor\u00EDa de la carta"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.dropdown-menu","ul.dropdown-menu",-867384656),(function (){var iter__5480__auto__ = (function categorias$core$page_$_iter__16573(s__16574){
return (new cljs.core.LazySeq(null,(function (){
var s__16574__$1 = s__16574;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__16574__$1);
if(temp__5804__auto__){
var s__16574__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16574__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__16574__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__16576 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__16575 = (0);
while(true){
if((i__16575 < size__5479__auto__)){
var categoria = cljs.core._nth(c__5478__auto__,i__16575);
cljs.core.chunk_append(b__16576,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.dropdown-item","a.dropdown-item",2124140477),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__16575,categoria,c__5478__auto__,size__5479__auto__,b__16576,s__16574__$2,temp__5804__auto__){
return (function (){
categorias.core.obtener_productos(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(categoria));

return cljs.core.reset_BANG_(categorias.core.mensaje_categoria,categorias.core.obtener_mensaje_categoria(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(categoria)));
});})(i__16575,categoria,c__5478__auto__,size__5479__auto__,b__16576,s__16574__$2,temp__5804__auto__))
], null),new cljs.core.Keyword(null,"nombre","nombre",1047347004).cljs$core$IFn$_invoke$arity$1(categoria)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(categoria)], null)));

var G__16619 = (i__16575 + (1));
i__16575 = G__16619;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16576),categorias$core$page_$_iter__16573(cljs.core.chunk_rest(s__16574__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16576),null);
}
} else {
var categoria = cljs.core.first(s__16574__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.dropdown-item","a.dropdown-item",2124140477),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (categoria,s__16574__$2,temp__5804__auto__){
return (function (){
categorias.core.obtener_productos(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(categoria));

return cljs.core.reset_BANG_(categorias.core.mensaje_categoria,categorias.core.obtener_mensaje_categoria(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(categoria)));
});})(categoria,s__16574__$2,temp__5804__auto__))
], null),new cljs.core.Keyword(null,"nombre","nombre",1047347004).cljs$core$IFn$_invoke$arity$1(categoria)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(categoria)], null)),categorias$core$page_$_iter__16573(cljs.core.rest(s__16574__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.deref(app.db.categorias));
})()], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-12.d-none.d-sm-flex.justify-content-center.flex-wrap.gap-2.mt-3.divButtons","div.col-12.d-none.d-sm-flex.justify-content-center.flex-wrap.gap-2.mt-3.divButtons",146246636),(function (){var iter__5480__auto__ = (function categorias$core$page_$_iter__16577(s__16578){
return (new cljs.core.LazySeq(null,(function (){
var s__16578__$1 = s__16578;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__16578__$1);
if(temp__5804__auto__){
var s__16578__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16578__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__16578__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__16580 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__16579 = (0);
while(true){
if((i__16579 < size__5479__auto__)){
var categoria = cljs.core._nth(c__5478__auto__,i__16579);
cljs.core.chunk_append(b__16580,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.buttons","button.buttons",-274085307),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__16579,categoria,c__5478__auto__,size__5479__auto__,b__16580,s__16578__$2,temp__5804__auto__){
return (function (){
categorias.core.obtener_productos(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(categoria));

return cljs.core.reset_BANG_(categorias.core.mensaje_categoria,categorias.core.obtener_mensaje_categoria(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(categoria)));
});})(i__16579,categoria,c__5478__auto__,size__5479__auto__,b__16580,s__16578__$2,temp__5804__auto__))
], null),new cljs.core.Keyword(null,"nombre","nombre",1047347004).cljs$core$IFn$_invoke$arity$1(categoria)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(categoria)], null)));

var G__16620 = (i__16579 + (1));
i__16579 = G__16620;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16580),categorias$core$page_$_iter__16577(cljs.core.chunk_rest(s__16578__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16580),null);
}
} else {
var categoria = cljs.core.first(s__16578__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.buttons","button.buttons",-274085307),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (categoria,s__16578__$2,temp__5804__auto__){
return (function (){
categorias.core.obtener_productos(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(categoria));

return cljs.core.reset_BANG_(categorias.core.mensaje_categoria,categorias.core.obtener_mensaje_categoria(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(categoria)));
});})(categoria,s__16578__$2,temp__5804__auto__))
], null),new cljs.core.Keyword(null,"nombre","nombre",1047347004).cljs$core$IFn$_invoke$arity$1(categoria)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(categoria)], null)),categorias$core$page_$_iter__16577(cljs.core.rest(s__16578__$2)));
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
var iter__5480__auto__ = (function categorias$core$page_$_iter__16581(s__16582){
return (new cljs.core.LazySeq(null,(function (){
var s__16582__$1 = s__16582;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__16582__$1);
if(temp__5804__auto__){
var s__16582__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16582__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__16582__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__16584 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__16583 = (0);
while(true){
if((i__16583 < size__5479__auto__)){
var vec__16585 = cljs.core._nth(c__5478__auto__,i__16583);
var nombre = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16585,(0),null);
var lista_productos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16585,(1),null);
cljs.core.chunk_append(b__16584,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.col-12","li.col-12",690592411),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"productosLI"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"producto-info"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),nombre], null),(function (){var primer_producto = cljs.core.first(lista_productos);
var descripcion_limpia = clojure.string.trim(new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(primer_producto));
var alergenos = cljs.core.PersistentHashMap.fromArrays(["contiene_mostaza","contiene_crustaceos","contiene_altramuces","contiene_soja","contiene_sulfitos","contiene_pescado","contiene_lacteos","contiene_granos_de_sesamo","contiene_moluscos","contiene_gluten","contiene_frutos_de_cascara","contiene_cacahuetes","contiene_huevos","contiene_apio"],["/imgs/alergenos/mostaza.png","/imgs/alergenos/crustaceos.png","/imgs/alergenos/altramuces.png","/imgs/alergenos/soja.png","/imgs/alergenos/sulfitos.png","/imgs/alergenos/pescado.png","/imgs/alergenos/lacteos.png","/imgs/alergenos/sesamo.png","/imgs/alergenos/moluscos.png","/imgs/alergenos/gluten.png","/imgs/alergenos/cascaras.png","/imgs/alergenos/cacahuetes.png","/imgs/alergenos/huevos.png","/imgs/alergenos/apio.png"]);
var alergenos_activos = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i__16583,primer_producto,descripcion_limpia,alergenos,vec__16585,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__16584,s__16582__$2,temp__5804__auto__,productos_agrupados){
return (function (p1__16572_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(primer_producto,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.first(p1__16572_SHARP_))) === true;
});})(i__16583,primer_producto,descripcion_limpia,alergenos,vec__16585,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__16584,s__16582__$2,temp__5804__auto__,productos_agrupados))
,alergenos);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"description"], null),((cljs.core.empty_QMARK_(descripcion_limpia))?" ":descripcion_limpia)], null),((cljs.core.seq(alergenos_activos))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"alergenos"], null),(function (){var iter__5480__auto__ = ((function (i__16583,primer_producto,descripcion_limpia,alergenos,alergenos_activos,vec__16585,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__16584,s__16582__$2,temp__5804__auto__,productos_agrupados){
return (function categorias$core$page_$_iter__16581_$_iter__16588(s__16589){
return (new cljs.core.LazySeq(null,((function (i__16583,primer_producto,descripcion_limpia,alergenos,alergenos_activos,vec__16585,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__16584,s__16582__$2,temp__5804__auto__,productos_agrupados){
return (function (){
var s__16589__$1 = s__16589;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__16589__$1);
if(temp__5804__auto____$1){
var s__16589__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__16589__$2)){
var c__5478__auto____$1 = cljs.core.chunk_first(s__16589__$2);
var size__5479__auto____$1 = cljs.core.count(c__5478__auto____$1);
var b__16591 = cljs.core.chunk_buffer(size__5479__auto____$1);
if((function (){var i__16590 = (0);
while(true){
if((i__16590 < size__5479__auto____$1)){
var vec__16592 = cljs.core._nth(c__5478__auto____$1,i__16590);
var nombre_img = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16592,(0),null);
var src_img = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16592,(1),null);
cljs.core.chunk_append(b__16591,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"src","src",-1651076051),src_img,new cljs.core.Keyword(null,"alt","alt",-3214426),nombre_img,new cljs.core.Keyword(null,"title","title",636505583),clojure.string.replace(nombre_img,"_"," "),new cljs.core.Keyword(null,"class","class",-2030961996),"alergeno-icono"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),nombre_img], null)));

var G__16622 = (i__16590 + (1));
i__16590 = G__16622;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16591),categorias$core$page_$_iter__16581_$_iter__16588(cljs.core.chunk_rest(s__16589__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16591),null);
}
} else {
var vec__16595 = cljs.core.first(s__16589__$2);
var nombre_img = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16595,(0),null);
var src_img = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16595,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"src","src",-1651076051),src_img,new cljs.core.Keyword(null,"alt","alt",-3214426),nombre_img,new cljs.core.Keyword(null,"title","title",636505583),clojure.string.replace(nombre_img,"_"," "),new cljs.core.Keyword(null,"class","class",-2030961996),"alergeno-icono"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),nombre_img], null)),categorias$core$page_$_iter__16581_$_iter__16588(cljs.core.rest(s__16589__$2)));
}
} else {
return null;
}
break;
}
});})(i__16583,primer_producto,descripcion_limpia,alergenos,alergenos_activos,vec__16585,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__16584,s__16582__$2,temp__5804__auto__,productos_agrupados))
,null,null));
});})(i__16583,primer_producto,descripcion_limpia,alergenos,alergenos_activos,vec__16585,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__16584,s__16582__$2,temp__5804__auto__,productos_agrupados))
;
return iter__5480__auto__(alergenos_activos);
})()], null):null)], null);
})()], null),(function (){var iter__5480__auto__ = ((function (i__16583,vec__16585,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__16584,s__16582__$2,temp__5804__auto__,productos_agrupados){
return (function categorias$core$page_$_iter__16581_$_iter__16598(s__16599){
return (new cljs.core.LazySeq(null,((function (i__16583,vec__16585,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__16584,s__16582__$2,temp__5804__auto__,productos_agrupados){
return (function (){
var s__16599__$1 = s__16599;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__16599__$1);
if(temp__5804__auto____$1){
var s__16599__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__16599__$2)){
var c__5478__auto____$1 = cljs.core.chunk_first(s__16599__$2);
var size__5479__auto____$1 = cljs.core.count(c__5478__auto____$1);
var b__16601 = cljs.core.chunk_buffer(size__5479__auto____$1);
if((function (){var i__16600 = (0);
while(true){
if((i__16600 < size__5479__auto____$1)){
var producto = cljs.core._nth(c__5478__auto____$1,i__16600);
cljs.core.chunk_append(b__16601,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"producto-item"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"precio-racion"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"precio"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"precio","precio",-1246474385).cljs$core$IFn$_invoke$arity$1(producto)),"\u20AC "].join('')], null),(function (){var tipo_porcion = new cljs.core.Keyword(null,"tipo_porcion","tipo_porcion",1174589739).cljs$core$IFn$_invoke$arity$1(producto);
var producto_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(producto);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"Media raci\u00F3n")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/medio-circulo.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"Media raci\u00F3n",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__16600,i__16583,tipo_porcion,producto_id,producto,c__5478__auto____$1,size__5479__auto____$1,b__16601,s__16599__$2,temp__5804__auto____$1,vec__16585,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__16584,s__16582__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(producto_id)," , Media raci\u00F3n"].join(''));
});})(i__16600,i__16583,tipo_porcion,producto_id,producto,c__5478__auto____$1,size__5479__auto____$1,b__16601,s__16599__$2,temp__5804__auto____$1,vec__16585,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__16584,s__16582__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"Raci\u00F3n completa")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/completo-circulo.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"Raci\u00F3n completa",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__16600,i__16583,tipo_porcion,producto_id,producto,c__5478__auto____$1,size__5479__auto____$1,b__16601,s__16599__$2,temp__5804__auto____$1,vec__16585,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__16584,s__16582__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(producto_id)," , Raci\u00F3n completa"].join(''));
});})(i__16600,i__16583,tipo_porcion,producto_id,producto,c__5478__auto____$1,size__5479__auto____$1,b__16601,s__16599__$2,temp__5804__auto____$1,vec__16585,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__16584,s__16582__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"Por unidad")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/unidad.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"/Unidad",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__16600,i__16583,tipo_porcion,producto_id,producto,c__5478__auto____$1,size__5479__auto____$1,b__16601,s__16599__$2,temp__5804__auto____$1,vec__16585,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__16584,s__16582__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(producto))," , Por unidad"].join(''));
});})(i__16600,i__16583,tipo_porcion,producto_id,producto,c__5478__auto____$1,size__5479__auto____$1,b__16601,s__16599__$2,temp__5804__auto____$1,vec__16585,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__16584,s__16582__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/unidad.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__16600,i__16583,tipo_porcion,producto_id,producto,c__5478__auto____$1,size__5479__auto____$1,b__16601,s__16599__$2,temp__5804__auto____$1,vec__16585,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__16584,s__16582__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(producto_id)].join(''));
});})(i__16600,i__16583,tipo_porcion,producto_id,producto,c__5478__auto____$1,size__5479__auto____$1,b__16601,s__16599__$2,temp__5804__auto____$1,vec__16585,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__16584,s__16582__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),["Tipo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tipo_porcion)].join('')], null);

}
}
}
}
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(producto)], null)));

var G__16623 = (i__16600 + (1));
i__16600 = G__16623;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16601),categorias$core$page_$_iter__16581_$_iter__16598(cljs.core.chunk_rest(s__16599__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16601),null);
}
} else {
var producto = cljs.core.first(s__16599__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"producto-item"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"precio-racion"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"precio"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"precio","precio",-1246474385).cljs$core$IFn$_invoke$arity$1(producto)),"\u20AC "].join('')], null),(function (){var tipo_porcion = new cljs.core.Keyword(null,"tipo_porcion","tipo_porcion",1174589739).cljs$core$IFn$_invoke$arity$1(producto);
var producto_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(producto);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"Media raci\u00F3n")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/medio-circulo.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"Media raci\u00F3n",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__16583,tipo_porcion,producto_id,producto,s__16599__$2,temp__5804__auto____$1,vec__16585,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__16584,s__16582__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(producto_id)," , Media raci\u00F3n"].join(''));
});})(i__16583,tipo_porcion,producto_id,producto,s__16599__$2,temp__5804__auto____$1,vec__16585,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__16584,s__16582__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"Raci\u00F3n completa")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/completo-circulo.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"Raci\u00F3n completa",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__16583,tipo_porcion,producto_id,producto,s__16599__$2,temp__5804__auto____$1,vec__16585,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__16584,s__16582__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(producto_id)," , Raci\u00F3n completa"].join(''));
});})(i__16583,tipo_porcion,producto_id,producto,s__16599__$2,temp__5804__auto____$1,vec__16585,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__16584,s__16582__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"Por unidad")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/unidad.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"/Unidad",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__16583,tipo_porcion,producto_id,producto,s__16599__$2,temp__5804__auto____$1,vec__16585,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__16584,s__16582__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(producto))," , Por unidad"].join(''));
});})(i__16583,tipo_porcion,producto_id,producto,s__16599__$2,temp__5804__auto____$1,vec__16585,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__16584,s__16582__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/unidad.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__16583,tipo_porcion,producto_id,producto,s__16599__$2,temp__5804__auto____$1,vec__16585,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__16584,s__16582__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(producto_id)].join(''));
});})(i__16583,tipo_porcion,producto_id,producto,s__16599__$2,temp__5804__auto____$1,vec__16585,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__16584,s__16582__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),["Tipo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tipo_porcion)].join('')], null);

}
}
}
}
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(producto)], null)),categorias$core$page_$_iter__16581_$_iter__16598(cljs.core.rest(s__16599__$2)));
}
} else {
return null;
}
break;
}
});})(i__16583,vec__16585,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__16584,s__16582__$2,temp__5804__auto__,productos_agrupados))
,null,null));
});})(i__16583,vec__16585,nombre,lista_productos,c__5478__auto__,size__5479__auto__,b__16584,s__16582__$2,temp__5804__auto__,productos_agrupados))
;
return iter__5480__auto__(lista_productos);
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),nombre], null)));

var G__16624 = (i__16583 + (1));
i__16583 = G__16624;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16584),categorias$core$page_$_iter__16581(cljs.core.chunk_rest(s__16582__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16584),null);
}
} else {
var vec__16602 = cljs.core.first(s__16582__$2);
var nombre = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16602,(0),null);
var lista_productos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16602,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.col-12","li.col-12",690592411),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"productosLI"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"producto-info"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),nombre], null),(function (){var primer_producto = cljs.core.first(lista_productos);
var descripcion_limpia = clojure.string.trim(new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(primer_producto));
var alergenos = cljs.core.PersistentHashMap.fromArrays(["contiene_mostaza","contiene_crustaceos","contiene_altramuces","contiene_soja","contiene_sulfitos","contiene_pescado","contiene_lacteos","contiene_granos_de_sesamo","contiene_moluscos","contiene_gluten","contiene_frutos_de_cascara","contiene_cacahuetes","contiene_huevos","contiene_apio"],["/imgs/alergenos/mostaza.png","/imgs/alergenos/crustaceos.png","/imgs/alergenos/altramuces.png","/imgs/alergenos/soja.png","/imgs/alergenos/sulfitos.png","/imgs/alergenos/pescado.png","/imgs/alergenos/lacteos.png","/imgs/alergenos/sesamo.png","/imgs/alergenos/moluscos.png","/imgs/alergenos/gluten.png","/imgs/alergenos/cascaras.png","/imgs/alergenos/cacahuetes.png","/imgs/alergenos/huevos.png","/imgs/alergenos/apio.png"]);
var alergenos_activos = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (primer_producto,descripcion_limpia,alergenos,vec__16602,nombre,lista_productos,s__16582__$2,temp__5804__auto__,productos_agrupados){
return (function (p1__16572_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(primer_producto,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.first(p1__16572_SHARP_))) === true;
});})(primer_producto,descripcion_limpia,alergenos,vec__16602,nombre,lista_productos,s__16582__$2,temp__5804__auto__,productos_agrupados))
,alergenos);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"description"], null),((cljs.core.empty_QMARK_(descripcion_limpia))?" ":descripcion_limpia)], null),((cljs.core.seq(alergenos_activos))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"alergenos"], null),(function (){var iter__5480__auto__ = ((function (primer_producto,descripcion_limpia,alergenos,alergenos_activos,vec__16602,nombre,lista_productos,s__16582__$2,temp__5804__auto__,productos_agrupados){
return (function categorias$core$page_$_iter__16581_$_iter__16605(s__16606){
return (new cljs.core.LazySeq(null,(function (){
var s__16606__$1 = s__16606;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__16606__$1);
if(temp__5804__auto____$1){
var s__16606__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__16606__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__16606__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__16608 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__16607 = (0);
while(true){
if((i__16607 < size__5479__auto__)){
var vec__16609 = cljs.core._nth(c__5478__auto__,i__16607);
var nombre_img = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16609,(0),null);
var src_img = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16609,(1),null);
cljs.core.chunk_append(b__16608,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"src","src",-1651076051),src_img,new cljs.core.Keyword(null,"alt","alt",-3214426),nombre_img,new cljs.core.Keyword(null,"title","title",636505583),clojure.string.replace(nombre_img,"_"," "),new cljs.core.Keyword(null,"class","class",-2030961996),"alergeno-icono"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),nombre_img], null)));

var G__16625 = (i__16607 + (1));
i__16607 = G__16625;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16608),categorias$core$page_$_iter__16581_$_iter__16605(cljs.core.chunk_rest(s__16606__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16608),null);
}
} else {
var vec__16612 = cljs.core.first(s__16606__$2);
var nombre_img = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16612,(0),null);
var src_img = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16612,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"src","src",-1651076051),src_img,new cljs.core.Keyword(null,"alt","alt",-3214426),nombre_img,new cljs.core.Keyword(null,"title","title",636505583),clojure.string.replace(nombre_img,"_"," "),new cljs.core.Keyword(null,"class","class",-2030961996),"alergeno-icono"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),nombre_img], null)),categorias$core$page_$_iter__16581_$_iter__16605(cljs.core.rest(s__16606__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(primer_producto,descripcion_limpia,alergenos,alergenos_activos,vec__16602,nombre,lista_productos,s__16582__$2,temp__5804__auto__,productos_agrupados))
;
return iter__5480__auto__(alergenos_activos);
})()], null):null)], null);
})()], null),(function (){var iter__5480__auto__ = ((function (vec__16602,nombre,lista_productos,s__16582__$2,temp__5804__auto__,productos_agrupados){
return (function categorias$core$page_$_iter__16581_$_iter__16615(s__16616){
return (new cljs.core.LazySeq(null,(function (){
var s__16616__$1 = s__16616;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__16616__$1);
if(temp__5804__auto____$1){
var s__16616__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__16616__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__16616__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__16618 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__16617 = (0);
while(true){
if((i__16617 < size__5479__auto__)){
var producto = cljs.core._nth(c__5478__auto__,i__16617);
cljs.core.chunk_append(b__16618,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"producto-item"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"precio-racion"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"precio"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"precio","precio",-1246474385).cljs$core$IFn$_invoke$arity$1(producto)),"\u20AC "].join('')], null),(function (){var tipo_porcion = new cljs.core.Keyword(null,"tipo_porcion","tipo_porcion",1174589739).cljs$core$IFn$_invoke$arity$1(producto);
var producto_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(producto);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"Media raci\u00F3n")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/medio-circulo.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"Media raci\u00F3n",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__16617,tipo_porcion,producto_id,producto,c__5478__auto__,size__5479__auto__,b__16618,s__16616__$2,temp__5804__auto____$1,vec__16602,nombre,lista_productos,s__16582__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(producto_id)," , Media raci\u00F3n"].join(''));
});})(i__16617,tipo_porcion,producto_id,producto,c__5478__auto__,size__5479__auto__,b__16618,s__16616__$2,temp__5804__auto____$1,vec__16602,nombre,lista_productos,s__16582__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"Raci\u00F3n completa")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/completo-circulo.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"Raci\u00F3n completa",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__16617,tipo_porcion,producto_id,producto,c__5478__auto__,size__5479__auto__,b__16618,s__16616__$2,temp__5804__auto____$1,vec__16602,nombre,lista_productos,s__16582__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(producto_id)," , Raci\u00F3n completa"].join(''));
});})(i__16617,tipo_porcion,producto_id,producto,c__5478__auto__,size__5479__auto__,b__16618,s__16616__$2,temp__5804__auto____$1,vec__16602,nombre,lista_productos,s__16582__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"Por unidad")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/unidad.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"/Unidad",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__16617,tipo_porcion,producto_id,producto,c__5478__auto__,size__5479__auto__,b__16618,s__16616__$2,temp__5804__auto____$1,vec__16602,nombre,lista_productos,s__16582__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(producto))," , Por unidad"].join(''));
});})(i__16617,tipo_porcion,producto_id,producto,c__5478__auto__,size__5479__auto__,b__16618,s__16616__$2,temp__5804__auto____$1,vec__16602,nombre,lista_productos,s__16582__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/unidad.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__16617,tipo_porcion,producto_id,producto,c__5478__auto__,size__5479__auto__,b__16618,s__16616__$2,temp__5804__auto____$1,vec__16602,nombre,lista_productos,s__16582__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(producto_id)].join(''));
});})(i__16617,tipo_porcion,producto_id,producto,c__5478__auto__,size__5479__auto__,b__16618,s__16616__$2,temp__5804__auto____$1,vec__16602,nombre,lista_productos,s__16582__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),["Tipo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tipo_porcion)].join('')], null);

}
}
}
}
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(producto)], null)));

var G__16626 = (i__16617 + (1));
i__16617 = G__16626;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16618),categorias$core$page_$_iter__16581_$_iter__16615(cljs.core.chunk_rest(s__16616__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16618),null);
}
} else {
var producto = cljs.core.first(s__16616__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"producto-item"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"precio-racion"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"precio"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"precio","precio",-1246474385).cljs$core$IFn$_invoke$arity$1(producto)),"\u20AC "].join('')], null),(function (){var tipo_porcion = new cljs.core.Keyword(null,"tipo_porcion","tipo_porcion",1174589739).cljs$core$IFn$_invoke$arity$1(producto);
var producto_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(producto);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"Media raci\u00F3n")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/medio-circulo.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"Media raci\u00F3n",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (tipo_porcion,producto_id,producto,s__16616__$2,temp__5804__auto____$1,vec__16602,nombre,lista_productos,s__16582__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(producto_id)," , Media raci\u00F3n"].join(''));
});})(tipo_porcion,producto_id,producto,s__16616__$2,temp__5804__auto____$1,vec__16602,nombre,lista_productos,s__16582__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"Raci\u00F3n completa")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/completo-circulo.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"Raci\u00F3n completa",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (tipo_porcion,producto_id,producto,s__16616__$2,temp__5804__auto____$1,vec__16602,nombre,lista_productos,s__16582__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(producto_id)," , Raci\u00F3n completa"].join(''));
});})(tipo_porcion,producto_id,producto,s__16616__$2,temp__5804__auto____$1,vec__16602,nombre,lista_productos,s__16582__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"Por unidad")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/unidad.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"/Unidad",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (tipo_porcion,producto_id,producto,s__16616__$2,temp__5804__auto____$1,vec__16602,nombre,lista_productos,s__16582__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(producto))," , Por unidad"].join(''));
});})(tipo_porcion,producto_id,producto,s__16616__$2,temp__5804__auto____$1,vec__16602,nombre,lista_productos,s__16582__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo_porcion,"")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"racion",new cljs.core.Keyword(null,"src","src",-1651076051),"/imgs/unidad.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (tipo_porcion,producto_id,producto,s__16616__$2,temp__5804__auto____$1,vec__16602,nombre,lista_productos,s__16582__$2,temp__5804__auto__,productos_agrupados){
return (function (){
return alert(["ID del producto: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(producto_id)].join(''));
});})(tipo_porcion,producto_id,producto,s__16616__$2,temp__5804__auto____$1,vec__16602,nombre,lista_productos,s__16582__$2,temp__5804__auto__,productos_agrupados))
], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),["Tipo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tipo_porcion)].join('')], null);

}
}
}
}
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(producto)], null)),categorias$core$page_$_iter__16581_$_iter__16615(cljs.core.rest(s__16616__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__16602,nombre,lista_productos,s__16582__$2,temp__5804__auto__,productos_agrupados))
;
return iter__5480__auto__(lista_productos);
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),nombre], null)),categorias$core$page_$_iter__16581(cljs.core.rest(s__16582__$2)));
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
