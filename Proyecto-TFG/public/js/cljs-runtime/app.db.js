goog.provide('app.db');
app.db.categorias = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
app.db.productos = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
if((typeof app !== 'undefined') && (typeof app.db !== 'undefined') && (typeof app.db.imagenes !== 'undefined')){
} else {
app.db.imagenes = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
app.db.fetch_categorias = (function app$db$fetch_categorias(){
console.log("Llamando a fetch-categorias...");

var c__12039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__11918__auto__ = (function (state_14897){
var state_val_14898 = (state_14897[(1)]);
if((state_val_14898 === (1))){
var inst_14874 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"response-format","response-format",1664465322)];
var inst_14875 = [new cljs.core.Keyword(null,"keywords?","keywords?",764949733)];
var inst_14876 = [true];
var inst_14877 = cljs.core.PersistentHashMap.fromArrays(inst_14875,inst_14876);
var inst_14878 = ajax.core.json_response_format(inst_14877);
var inst_14879 = [false,inst_14878];
var inst_14880 = cljs.core.PersistentHashMap.fromArrays(inst_14874,inst_14879);
var inst_14881 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic("/api/categorias/",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_14880], 0));
var state_14897__$1 = state_14897;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14897__$1,(2),inst_14881);
} else {
if((state_val_14898 === (2))){
var inst_14883 = (state_14897[(2)]);
var inst_14884 = cljs.core.__destructure_map(inst_14883);
var inst_14885 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14884,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_14886 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14884,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_14887 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_14885);
var state_14897__$1 = (function (){var statearr_14899 = state_14897;
(statearr_14899[(7)] = inst_14886);

return statearr_14899;
})();
if(inst_14887){
var statearr_14900_14959 = state_14897__$1;
(statearr_14900_14959[(1)] = (3));

} else {
var statearr_14901_14960 = state_14897__$1;
(statearr_14901_14960[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14898 === (3))){
var inst_14886 = (state_14897[(7)]);
var inst_14889 = cljs.core.reset_BANG_(app.db.categorias,inst_14886);
var inst_14890 = cljs.core.deref(app.db.categorias);
var inst_14891 = console.log("Categor\u00EDas actualizadas:",inst_14890);
var state_14897__$1 = (function (){var statearr_14902 = state_14897;
(statearr_14902[(8)] = inst_14889);

return statearr_14902;
})();
var statearr_14903_14961 = state_14897__$1;
(statearr_14903_14961[(2)] = inst_14891);

(statearr_14903_14961[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14898 === (4))){
var inst_14893 = console.error("Error al obtener categor\u00EDas");
var state_14897__$1 = state_14897;
var statearr_14904_14962 = state_14897__$1;
(statearr_14904_14962[(2)] = inst_14893);

(statearr_14904_14962[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14898 === (5))){
var inst_14895 = (state_14897[(2)]);
var state_14897__$1 = state_14897;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14897__$1,inst_14895);
} else {
return null;
}
}
}
}
}
});
return (function() {
var app$db$fetch_categorias_$_state_machine__11919__auto__ = null;
var app$db$fetch_categorias_$_state_machine__11919__auto____0 = (function (){
var statearr_14905 = [null,null,null,null,null,null,null,null,null];
(statearr_14905[(0)] = app$db$fetch_categorias_$_state_machine__11919__auto__);

(statearr_14905[(1)] = (1));

return statearr_14905;
});
var app$db$fetch_categorias_$_state_machine__11919__auto____1 = (function (state_14897){
while(true){
var ret_value__11920__auto__ = (function (){try{while(true){
var result__11921__auto__ = switch__11918__auto__(state_14897);
if(cljs.core.keyword_identical_QMARK_(result__11921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11921__auto__;
}
break;
}
}catch (e14906){var ex__11922__auto__ = e14906;
var statearr_14907_14963 = state_14897;
(statearr_14907_14963[(2)] = ex__11922__auto__);


if(cljs.core.seq((state_14897[(4)]))){
var statearr_14908_14964 = state_14897;
(statearr_14908_14964[(1)] = cljs.core.first((state_14897[(4)])));

} else {
throw ex__11922__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14965 = state_14897;
state_14897 = G__14965;
continue;
} else {
return ret_value__11920__auto__;
}
break;
}
});
app$db$fetch_categorias_$_state_machine__11919__auto__ = function(state_14897){
switch(arguments.length){
case 0:
return app$db$fetch_categorias_$_state_machine__11919__auto____0.call(this);
case 1:
return app$db$fetch_categorias_$_state_machine__11919__auto____1.call(this,state_14897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$fetch_categorias_$_state_machine__11919__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$fetch_categorias_$_state_machine__11919__auto____0;
app$db$fetch_categorias_$_state_machine__11919__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$fetch_categorias_$_state_machine__11919__auto____1;
return app$db$fetch_categorias_$_state_machine__11919__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_14909 = f__12040__auto__();
(statearr_14909[(6)] = c__12039__auto__);

return statearr_14909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
});
app.db.fetch_productos = (function app$db$fetch_productos(categoria_id){
console.log("Llamando a fetch-productos para categor\u00EDa:",categoria_id);

var c__12039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__11918__auto__ = (function (state_14941){
var state_val_14942 = (state_14941[(1)]);
if((state_val_14942 === (1))){
var inst_14911 = ["/api/productos/categoria/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(categoria_id)].join('');
var inst_14912 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"response-format","response-format",1664465322)];
var inst_14913 = [new cljs.core.Keyword(null,"keywords?","keywords?",764949733)];
var inst_14914 = [true];
var inst_14915 = cljs.core.PersistentHashMap.fromArrays(inst_14913,inst_14914);
var inst_14916 = ajax.core.json_response_format(inst_14915);
var inst_14917 = [false,inst_14916];
var inst_14918 = cljs.core.PersistentHashMap.fromArrays(inst_14912,inst_14917);
var inst_14919 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_14911,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_14918], 0));
var state_14941__$1 = state_14941;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14941__$1,(2),inst_14919);
} else {
if((state_val_14942 === (2))){
var inst_14921 = (state_14941[(2)]);
var inst_14922 = cljs.core.__destructure_map(inst_14921);
var inst_14923 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14922,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_14924 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14922,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_14925 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_14923);
var state_14941__$1 = (function (){var statearr_14943 = state_14941;
(statearr_14943[(7)] = inst_14924);

return statearr_14943;
})();
if(inst_14925){
var statearr_14944_14967 = state_14941__$1;
(statearr_14944_14967[(1)] = (3));

} else {
var statearr_14945_14968 = state_14941__$1;
(statearr_14945_14968[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14942 === (3))){
var inst_14924 = (state_14941[(7)]);
var inst_14927 = cljs.core.map_QMARK_(inst_14924);
var state_14941__$1 = state_14941;
if(inst_14927){
var statearr_14946_14969 = state_14941__$1;
(statearr_14946_14969[(1)] = (6));

} else {
var statearr_14947_14970 = state_14941__$1;
(statearr_14947_14970[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14942 === (4))){
var inst_14937 = console.error("Error al obtener productos");
var state_14941__$1 = state_14941;
var statearr_14948_14971 = state_14941__$1;
(statearr_14948_14971[(2)] = inst_14937);

(statearr_14948_14971[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14942 === (5))){
var inst_14939 = (state_14941[(2)]);
var state_14941__$1 = state_14941;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14941__$1,inst_14939);
} else {
if((state_val_14942 === (6))){
var inst_14924 = (state_14941[(7)]);
var inst_14929 = new cljs.core.Keyword(null,"productos","productos",-1282966179).cljs$core$IFn$_invoke$arity$1(inst_14924);
var state_14941__$1 = state_14941;
var statearr_14949_14972 = state_14941__$1;
(statearr_14949_14972[(2)] = inst_14929);

(statearr_14949_14972[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14942 === (7))){
var inst_14924 = (state_14941[(7)]);
var state_14941__$1 = state_14941;
var statearr_14950_14973 = state_14941__$1;
(statearr_14950_14973[(2)] = inst_14924);

(statearr_14950_14973[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14942 === (8))){
var inst_14932 = (state_14941[(2)]);
var inst_14933 = cljs.core.reset_BANG_(app.db.productos,inst_14932);
var inst_14934 = cljs.core.deref(app.db.productos);
var inst_14935 = console.log("Productos actualizados:",inst_14934);
var state_14941__$1 = (function (){var statearr_14951 = state_14941;
(statearr_14951[(8)] = inst_14933);

return statearr_14951;
})();
var statearr_14952_14974 = state_14941__$1;
(statearr_14952_14974[(2)] = inst_14935);

(statearr_14952_14974[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});
return (function() {
var app$db$fetch_productos_$_state_machine__11919__auto__ = null;
var app$db$fetch_productos_$_state_machine__11919__auto____0 = (function (){
var statearr_14953 = [null,null,null,null,null,null,null,null,null];
(statearr_14953[(0)] = app$db$fetch_productos_$_state_machine__11919__auto__);

(statearr_14953[(1)] = (1));

return statearr_14953;
});
var app$db$fetch_productos_$_state_machine__11919__auto____1 = (function (state_14941){
while(true){
var ret_value__11920__auto__ = (function (){try{while(true){
var result__11921__auto__ = switch__11918__auto__(state_14941);
if(cljs.core.keyword_identical_QMARK_(result__11921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11921__auto__;
}
break;
}
}catch (e14954){var ex__11922__auto__ = e14954;
var statearr_14955_14979 = state_14941;
(statearr_14955_14979[(2)] = ex__11922__auto__);


if(cljs.core.seq((state_14941[(4)]))){
var statearr_14956_14980 = state_14941;
(statearr_14956_14980[(1)] = cljs.core.first((state_14941[(4)])));

} else {
throw ex__11922__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14981 = state_14941;
state_14941 = G__14981;
continue;
} else {
return ret_value__11920__auto__;
}
break;
}
});
app$db$fetch_productos_$_state_machine__11919__auto__ = function(state_14941){
switch(arguments.length){
case 0:
return app$db$fetch_productos_$_state_machine__11919__auto____0.call(this);
case 1:
return app$db$fetch_productos_$_state_machine__11919__auto____1.call(this,state_14941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$fetch_productos_$_state_machine__11919__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$fetch_productos_$_state_machine__11919__auto____0;
app$db$fetch_productos_$_state_machine__11919__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$fetch_productos_$_state_machine__11919__auto____1;
return app$db$fetch_productos_$_state_machine__11919__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_14957 = f__12040__auto__();
(statearr_14957[(6)] = c__12039__auto__);

return statearr_14957;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
});
app.db.cargar_imagenes = (function app$db$cargar_imagenes(){
console.log("Llamando a cargar-imagenes...");

return fetch("/api/imagenes").then((function (p1__14958_SHARP_){
return p1__14958_SHARP_.json();
})).then((function (data){
console.log("Datos recibidos desde el backend:",cljs.core.clj__GT_js(data));

if(cljs.core.empty_QMARK_(data)){
return console.log("No se encontraron im\u00E1genes.");
} else {
return cljs.core.reset_BANG_(app.db.imagenes,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
}
})).catch((function (error){
return console.error("Error cargando im\u00E1genes:",error);
}));
});

//# sourceMappingURL=app.db.js.map
