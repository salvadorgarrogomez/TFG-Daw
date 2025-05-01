goog.provide('app.db');
app.db.categorias = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
app.db.productos = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
app.db.list_productos = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
if((typeof app !== 'undefined') && (typeof app.db !== 'undefined') && (typeof app.db.imagenes !== 'undefined')){
} else {
app.db.imagenes = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
app.db.fetch_categorias = (function app$db$fetch_categorias(){
console.log("Llamando a fetch-categorias...");

var c__12039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__11918__auto__ = (function (state_14972){
var state_val_14973 = (state_14972[(1)]);
if((state_val_14973 === (1))){
var inst_14949 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"response-format","response-format",1664465322)];
var inst_14950 = [new cljs.core.Keyword(null,"keywords?","keywords?",764949733)];
var inst_14951 = [true];
var inst_14952 = cljs.core.PersistentHashMap.fromArrays(inst_14950,inst_14951);
var inst_14953 = ajax.core.json_response_format(inst_14952);
var inst_14954 = [true,inst_14953];
var inst_14955 = cljs.core.PersistentHashMap.fromArrays(inst_14949,inst_14954);
var inst_14956 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic("/api/categorias/",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_14955], 0));
var state_14972__$1 = state_14972;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14972__$1,(2),inst_14956);
} else {
if((state_val_14973 === (2))){
var inst_14958 = (state_14972[(2)]);
var inst_14959 = cljs.core.__destructure_map(inst_14958);
var inst_14960 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14959,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_14961 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14959,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_14962 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_14960);
var state_14972__$1 = (function (){var statearr_14974 = state_14972;
(statearr_14974[(7)] = inst_14961);

return statearr_14974;
})();
if(inst_14962){
var statearr_14975_15356 = state_14972__$1;
(statearr_14975_15356[(1)] = (3));

} else {
var statearr_14976_15357 = state_14972__$1;
(statearr_14976_15357[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14973 === (3))){
var inst_14961 = (state_14972[(7)]);
var inst_14964 = cljs.core.reset_BANG_(app.db.categorias,inst_14961);
var inst_14965 = cljs.core.deref(app.db.categorias);
var inst_14966 = console.log("Categor\u00EDas actualizadas:",inst_14965);
var state_14972__$1 = (function (){var statearr_14977 = state_14972;
(statearr_14977[(8)] = inst_14964);

return statearr_14977;
})();
var statearr_14978_15359 = state_14972__$1;
(statearr_14978_15359[(2)] = inst_14966);

(statearr_14978_15359[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14973 === (4))){
var inst_14968 = console.error("Error al obtener categor\u00EDas");
var state_14972__$1 = state_14972;
var statearr_14979_15361 = state_14972__$1;
(statearr_14979_15361[(2)] = inst_14968);

(statearr_14979_15361[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14973 === (5))){
var inst_14970 = (state_14972[(2)]);
var state_14972__$1 = state_14972;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14972__$1,inst_14970);
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
var statearr_14980 = [null,null,null,null,null,null,null,null,null];
(statearr_14980[(0)] = app$db$fetch_categorias_$_state_machine__11919__auto__);

(statearr_14980[(1)] = (1));

return statearr_14980;
});
var app$db$fetch_categorias_$_state_machine__11919__auto____1 = (function (state_14972){
while(true){
var ret_value__11920__auto__ = (function (){try{while(true){
var result__11921__auto__ = switch__11918__auto__(state_14972);
if(cljs.core.keyword_identical_QMARK_(result__11921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11921__auto__;
}
break;
}
}catch (e14981){var ex__11922__auto__ = e14981;
var statearr_14982_15363 = state_14972;
(statearr_14982_15363[(2)] = ex__11922__auto__);


if(cljs.core.seq((state_14972[(4)]))){
var statearr_14983_15367 = state_14972;
(statearr_14983_15367[(1)] = cljs.core.first((state_14972[(4)])));

} else {
throw ex__11922__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15368 = state_14972;
state_14972 = G__15368;
continue;
} else {
return ret_value__11920__auto__;
}
break;
}
});
app$db$fetch_categorias_$_state_machine__11919__auto__ = function(state_14972){
switch(arguments.length){
case 0:
return app$db$fetch_categorias_$_state_machine__11919__auto____0.call(this);
case 1:
return app$db$fetch_categorias_$_state_machine__11919__auto____1.call(this,state_14972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$fetch_categorias_$_state_machine__11919__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$fetch_categorias_$_state_machine__11919__auto____0;
app$db$fetch_categorias_$_state_machine__11919__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$fetch_categorias_$_state_machine__11919__auto____1;
return app$db$fetch_categorias_$_state_machine__11919__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_14984 = f__12040__auto__();
(statearr_14984[(6)] = c__12039__auto__);

return statearr_14984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
});
app.db.fetch_list_categorias = (function app$db$fetch_list_categorias(){
console.log("Llamando a fetch-categorias...");

var c__12039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__11918__auto__ = (function (state_15009){
var state_val_15010 = (state_15009[(1)]);
if((state_val_15010 === (1))){
var inst_14986 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"response-format","response-format",1664465322)];
var inst_14987 = [new cljs.core.Keyword(null,"keywords?","keywords?",764949733)];
var inst_14988 = [true];
var inst_14989 = cljs.core.PersistentHashMap.fromArrays(inst_14987,inst_14988);
var inst_14990 = ajax.core.json_response_format(inst_14989);
var inst_14991 = [true,inst_14990];
var inst_14992 = cljs.core.PersistentHashMap.fromArrays(inst_14986,inst_14991);
var inst_14993 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic("/api/categorias/todas",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_14992], 0));
var state_15009__$1 = state_15009;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15009__$1,(2),inst_14993);
} else {
if((state_val_15010 === (2))){
var inst_14995 = (state_15009[(2)]);
var inst_14996 = cljs.core.__destructure_map(inst_14995);
var inst_14997 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14996,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_14998 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14996,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_14999 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_14997);
var state_15009__$1 = (function (){var statearr_15011 = state_15009;
(statearr_15011[(7)] = inst_14998);

return statearr_15011;
})();
if(inst_14999){
var statearr_15012_15370 = state_15009__$1;
(statearr_15012_15370[(1)] = (3));

} else {
var statearr_15013_15371 = state_15009__$1;
(statearr_15013_15371[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15010 === (3))){
var inst_14998 = (state_15009[(7)]);
var inst_15001 = cljs.core.reset_BANG_(app.db.categorias,inst_14998);
var inst_15002 = cljs.core.deref(app.db.categorias);
var inst_15003 = console.log("Categor\u00EDas actualizadas:",inst_15002);
var state_15009__$1 = (function (){var statearr_15014 = state_15009;
(statearr_15014[(8)] = inst_15001);

return statearr_15014;
})();
var statearr_15015_15372 = state_15009__$1;
(statearr_15015_15372[(2)] = inst_15003);

(statearr_15015_15372[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15010 === (4))){
var inst_15005 = console.error("Error al obtener categor\u00EDas");
var state_15009__$1 = state_15009;
var statearr_15016_15375 = state_15009__$1;
(statearr_15016_15375[(2)] = inst_15005);

(statearr_15016_15375[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15010 === (5))){
var inst_15007 = (state_15009[(2)]);
var state_15009__$1 = state_15009;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15009__$1,inst_15007);
} else {
return null;
}
}
}
}
}
});
return (function() {
var app$db$fetch_list_categorias_$_state_machine__11919__auto__ = null;
var app$db$fetch_list_categorias_$_state_machine__11919__auto____0 = (function (){
var statearr_15017 = [null,null,null,null,null,null,null,null,null];
(statearr_15017[(0)] = app$db$fetch_list_categorias_$_state_machine__11919__auto__);

(statearr_15017[(1)] = (1));

return statearr_15017;
});
var app$db$fetch_list_categorias_$_state_machine__11919__auto____1 = (function (state_15009){
while(true){
var ret_value__11920__auto__ = (function (){try{while(true){
var result__11921__auto__ = switch__11918__auto__(state_15009);
if(cljs.core.keyword_identical_QMARK_(result__11921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11921__auto__;
}
break;
}
}catch (e15018){var ex__11922__auto__ = e15018;
var statearr_15019_15382 = state_15009;
(statearr_15019_15382[(2)] = ex__11922__auto__);


if(cljs.core.seq((state_15009[(4)]))){
var statearr_15020_15383 = state_15009;
(statearr_15020_15383[(1)] = cljs.core.first((state_15009[(4)])));

} else {
throw ex__11922__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15384 = state_15009;
state_15009 = G__15384;
continue;
} else {
return ret_value__11920__auto__;
}
break;
}
});
app$db$fetch_list_categorias_$_state_machine__11919__auto__ = function(state_15009){
switch(arguments.length){
case 0:
return app$db$fetch_list_categorias_$_state_machine__11919__auto____0.call(this);
case 1:
return app$db$fetch_list_categorias_$_state_machine__11919__auto____1.call(this,state_15009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$fetch_list_categorias_$_state_machine__11919__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$fetch_list_categorias_$_state_machine__11919__auto____0;
app$db$fetch_list_categorias_$_state_machine__11919__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$fetch_list_categorias_$_state_machine__11919__auto____1;
return app$db$fetch_list_categorias_$_state_machine__11919__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_15021 = f__12040__auto__();
(statearr_15021[(6)] = c__12039__auto__);

return statearr_15021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
});
app.db.fetch_productos = (function app$db$fetch_productos(categoria_id){
console.log("Llamando a fetch-productos para categor\u00EDa:",categoria_id);

var c__12039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__11918__auto__ = (function (state_15055){
var state_val_15056 = (state_15055[(1)]);
if((state_val_15056 === (1))){
var inst_15023 = ["/api/productos/categoria/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(categoria_id)].join('');
var inst_15024 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"response-format","response-format",1664465322)];
var inst_15025 = [new cljs.core.Keyword(null,"keywords?","keywords?",764949733)];
var inst_15026 = [true];
var inst_15027 = cljs.core.PersistentHashMap.fromArrays(inst_15025,inst_15026);
var inst_15028 = ajax.core.json_response_format(inst_15027);
var inst_15029 = [true,inst_15028];
var inst_15030 = cljs.core.PersistentHashMap.fromArrays(inst_15024,inst_15029);
var inst_15031 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_15023,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_15030], 0));
var state_15055__$1 = state_15055;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15055__$1,(2),inst_15031);
} else {
if((state_val_15056 === (2))){
var inst_15033 = (state_15055[(2)]);
var inst_15034 = cljs.core.__destructure_map(inst_15033);
var inst_15035 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15034,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_15036 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15034,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_15037 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_15035);
var state_15055__$1 = (function (){var statearr_15057 = state_15055;
(statearr_15057[(7)] = inst_15036);

return statearr_15057;
})();
if(inst_15037){
var statearr_15058_15404 = state_15055__$1;
(statearr_15058_15404[(1)] = (3));

} else {
var statearr_15059_15405 = state_15055__$1;
(statearr_15059_15405[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15056 === (3))){
var inst_15036 = (state_15055[(7)]);
var inst_15039 = cljs.core.map_QMARK_(inst_15036);
var state_15055__$1 = state_15055;
if(inst_15039){
var statearr_15060_15408 = state_15055__$1;
(statearr_15060_15408[(1)] = (6));

} else {
var statearr_15061_15413 = state_15055__$1;
(statearr_15061_15413[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15056 === (4))){
var inst_15049 = cljs.core.PersistentVector.EMPTY;
var inst_15050 = cljs.core.reset_BANG_(app.db.productos,inst_15049);
var inst_15051 = console.log("La categor\u00EDa seleccionada no tiene productos asociados.");
var state_15055__$1 = (function (){var statearr_15062 = state_15055;
(statearr_15062[(8)] = inst_15050);

return statearr_15062;
})();
var statearr_15063_15436 = state_15055__$1;
(statearr_15063_15436[(2)] = inst_15051);

(statearr_15063_15436[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15056 === (5))){
var inst_15053 = (state_15055[(2)]);
var state_15055__$1 = state_15055;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15055__$1,inst_15053);
} else {
if((state_val_15056 === (6))){
var inst_15036 = (state_15055[(7)]);
var inst_15041 = new cljs.core.Keyword(null,"productos","productos",-1282966179).cljs$core$IFn$_invoke$arity$1(inst_15036);
var state_15055__$1 = state_15055;
var statearr_15064_15442 = state_15055__$1;
(statearr_15064_15442[(2)] = inst_15041);

(statearr_15064_15442[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15056 === (7))){
var inst_15036 = (state_15055[(7)]);
var state_15055__$1 = state_15055;
var statearr_15065_15444 = state_15055__$1;
(statearr_15065_15444[(2)] = inst_15036);

(statearr_15065_15444[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15056 === (8))){
var inst_15044 = (state_15055[(2)]);
var inst_15045 = cljs.core.reset_BANG_(app.db.productos,inst_15044);
var inst_15046 = cljs.core.deref(app.db.productos);
var inst_15047 = console.log("Productos actualizados:",inst_15046);
var state_15055__$1 = (function (){var statearr_15066 = state_15055;
(statearr_15066[(9)] = inst_15045);

return statearr_15066;
})();
var statearr_15067_15447 = state_15055__$1;
(statearr_15067_15447[(2)] = inst_15047);

(statearr_15067_15447[(1)] = (5));


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
var statearr_15068 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15068[(0)] = app$db$fetch_productos_$_state_machine__11919__auto__);

(statearr_15068[(1)] = (1));

return statearr_15068;
});
var app$db$fetch_productos_$_state_machine__11919__auto____1 = (function (state_15055){
while(true){
var ret_value__11920__auto__ = (function (){try{while(true){
var result__11921__auto__ = switch__11918__auto__(state_15055);
if(cljs.core.keyword_identical_QMARK_(result__11921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11921__auto__;
}
break;
}
}catch (e15069){var ex__11922__auto__ = e15069;
var statearr_15070_15451 = state_15055;
(statearr_15070_15451[(2)] = ex__11922__auto__);


if(cljs.core.seq((state_15055[(4)]))){
var statearr_15071_15456 = state_15055;
(statearr_15071_15456[(1)] = cljs.core.first((state_15055[(4)])));

} else {
throw ex__11922__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15457 = state_15055;
state_15055 = G__15457;
continue;
} else {
return ret_value__11920__auto__;
}
break;
}
});
app$db$fetch_productos_$_state_machine__11919__auto__ = function(state_15055){
switch(arguments.length){
case 0:
return app$db$fetch_productos_$_state_machine__11919__auto____0.call(this);
case 1:
return app$db$fetch_productos_$_state_machine__11919__auto____1.call(this,state_15055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$fetch_productos_$_state_machine__11919__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$fetch_productos_$_state_machine__11919__auto____0;
app$db$fetch_productos_$_state_machine__11919__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$fetch_productos_$_state_machine__11919__auto____1;
return app$db$fetch_productos_$_state_machine__11919__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_15072 = f__12040__auto__();
(statearr_15072[(6)] = c__12039__auto__);

return statearr_15072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
});
app.db.fetch_list_productos = (function app$db$fetch_list_productos(){
console.log("Llamando a fetch-list-productos...");

var c__12039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__11918__auto__ = (function (state_15097){
var state_val_15098 = (state_15097[(1)]);
if((state_val_15098 === (1))){
var inst_15074 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"response-format","response-format",1664465322)];
var inst_15075 = [new cljs.core.Keyword(null,"keywords?","keywords?",764949733)];
var inst_15076 = [true];
var inst_15077 = cljs.core.PersistentHashMap.fromArrays(inst_15075,inst_15076);
var inst_15078 = ajax.core.json_response_format(inst_15077);
var inst_15079 = [true,inst_15078];
var inst_15080 = cljs.core.PersistentHashMap.fromArrays(inst_15074,inst_15079);
var inst_15081 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic("/api/productos/",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_15080], 0));
var state_15097__$1 = state_15097;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15097__$1,(2),inst_15081);
} else {
if((state_val_15098 === (2))){
var inst_15083 = (state_15097[(2)]);
var inst_15084 = cljs.core.__destructure_map(inst_15083);
var inst_15085 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15084,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_15086 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15084,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_15087 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_15085);
var state_15097__$1 = (function (){var statearr_15099 = state_15097;
(statearr_15099[(7)] = inst_15086);

return statearr_15099;
})();
if(inst_15087){
var statearr_15100_15473 = state_15097__$1;
(statearr_15100_15473[(1)] = (3));

} else {
var statearr_15101_15474 = state_15097__$1;
(statearr_15101_15474[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15098 === (3))){
var inst_15086 = (state_15097[(7)]);
var inst_15089 = cljs.core.reset_BANG_(app.db.list_productos,inst_15086);
var inst_15090 = cljs.core.deref(app.db.categorias);
var inst_15091 = console.log("Productos actualizados:",inst_15090);
var state_15097__$1 = (function (){var statearr_15102 = state_15097;
(statearr_15102[(8)] = inst_15089);

return statearr_15102;
})();
var statearr_15103_15485 = state_15097__$1;
(statearr_15103_15485[(2)] = inst_15091);

(statearr_15103_15485[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15098 === (4))){
var inst_15093 = console.error("Error al obtener productos");
var state_15097__$1 = state_15097;
var statearr_15104_15486 = state_15097__$1;
(statearr_15104_15486[(2)] = inst_15093);

(statearr_15104_15486[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15098 === (5))){
var inst_15095 = (state_15097[(2)]);
var state_15097__$1 = state_15097;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15097__$1,inst_15095);
} else {
return null;
}
}
}
}
}
});
return (function() {
var app$db$fetch_list_productos_$_state_machine__11919__auto__ = null;
var app$db$fetch_list_productos_$_state_machine__11919__auto____0 = (function (){
var statearr_15105 = [null,null,null,null,null,null,null,null,null];
(statearr_15105[(0)] = app$db$fetch_list_productos_$_state_machine__11919__auto__);

(statearr_15105[(1)] = (1));

return statearr_15105;
});
var app$db$fetch_list_productos_$_state_machine__11919__auto____1 = (function (state_15097){
while(true){
var ret_value__11920__auto__ = (function (){try{while(true){
var result__11921__auto__ = switch__11918__auto__(state_15097);
if(cljs.core.keyword_identical_QMARK_(result__11921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11921__auto__;
}
break;
}
}catch (e15106){var ex__11922__auto__ = e15106;
var statearr_15107_15489 = state_15097;
(statearr_15107_15489[(2)] = ex__11922__auto__);


if(cljs.core.seq((state_15097[(4)]))){
var statearr_15108_15491 = state_15097;
(statearr_15108_15491[(1)] = cljs.core.first((state_15097[(4)])));

} else {
throw ex__11922__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15495 = state_15097;
state_15097 = G__15495;
continue;
} else {
return ret_value__11920__auto__;
}
break;
}
});
app$db$fetch_list_productos_$_state_machine__11919__auto__ = function(state_15097){
switch(arguments.length){
case 0:
return app$db$fetch_list_productos_$_state_machine__11919__auto____0.call(this);
case 1:
return app$db$fetch_list_productos_$_state_machine__11919__auto____1.call(this,state_15097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$fetch_list_productos_$_state_machine__11919__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$fetch_list_productos_$_state_machine__11919__auto____0;
app$db$fetch_list_productos_$_state_machine__11919__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$fetch_list_productos_$_state_machine__11919__auto____1;
return app$db$fetch_list_productos_$_state_machine__11919__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_15109 = f__12040__auto__();
(statearr_15109[(6)] = c__12039__auto__);

return statearr_15109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
});
app.db.cargar_imagenes = (function app$db$cargar_imagenes(){
console.log("Llamando a cargar-imagenes...");

return fetch("/api/imagenes").then((function (p1__15110_SHARP_){
return p1__15110_SHARP_.json();
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
app.db.insertar_producto = (function app$db$insertar_producto(producto){
console.log("Llamando a insertar-producto...",producto);

var c__12039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__11918__auto__ = (function (state_15134){
var state_val_15135 = (state_15134[(1)]);
if((state_val_15135 === (1))){
var inst_15112 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"json-params","json-params",-1112693596),new cljs.core.Keyword(null,"response-format","response-format",1664465322)];
var inst_15113 = [new cljs.core.Keyword(null,"keywords?","keywords?",764949733)];
var inst_15114 = [true];
var inst_15115 = cljs.core.PersistentHashMap.fromArrays(inst_15113,inst_15114);
var inst_15116 = ajax.core.json_response_format(inst_15115);
var inst_15117 = [true,producto,inst_15116];
var inst_15118 = cljs.core.PersistentHashMap.fromArrays(inst_15112,inst_15117);
var inst_15119 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic("/api/producto/nuevo",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_15118], 0));
var state_15134__$1 = state_15134;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15134__$1,(2),inst_15119);
} else {
if((state_val_15135 === (2))){
var inst_15121 = (state_15134[(2)]);
var inst_15122 = cljs.core.__destructure_map(inst_15121);
var inst_15123 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15122,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_15124 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15122,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_15125 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((201),inst_15123);
var state_15134__$1 = (function (){var statearr_15136 = state_15134;
(statearr_15136[(7)] = inst_15124);

return statearr_15136;
})();
if(inst_15125){
var statearr_15137_15506 = state_15134__$1;
(statearr_15137_15506[(1)] = (3));

} else {
var statearr_15138_15507 = state_15134__$1;
(statearr_15138_15507[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15135 === (3))){
var inst_15124 = (state_15134[(7)]);
var inst_15127 = console.log("Producto insertado correctamente",inst_15124);
var inst_15128 = alert("Producto creado correctamente");
var state_15134__$1 = (function (){var statearr_15139 = state_15134;
(statearr_15139[(8)] = inst_15127);

return statearr_15139;
})();
var statearr_15140_15508 = state_15134__$1;
(statearr_15140_15508[(2)] = inst_15128);

(statearr_15140_15508[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15135 === (4))){
var inst_15124 = (state_15134[(7)]);
var inst_15130 = console.error("Error al insertar producto",inst_15124);
var state_15134__$1 = state_15134;
var statearr_15141_15509 = state_15134__$1;
(statearr_15141_15509[(2)] = inst_15130);

(statearr_15141_15509[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15135 === (5))){
var inst_15132 = (state_15134[(2)]);
var state_15134__$1 = state_15134;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15134__$1,inst_15132);
} else {
return null;
}
}
}
}
}
});
return (function() {
var app$db$insertar_producto_$_state_machine__11919__auto__ = null;
var app$db$insertar_producto_$_state_machine__11919__auto____0 = (function (){
var statearr_15142 = [null,null,null,null,null,null,null,null,null];
(statearr_15142[(0)] = app$db$insertar_producto_$_state_machine__11919__auto__);

(statearr_15142[(1)] = (1));

return statearr_15142;
});
var app$db$insertar_producto_$_state_machine__11919__auto____1 = (function (state_15134){
while(true){
var ret_value__11920__auto__ = (function (){try{while(true){
var result__11921__auto__ = switch__11918__auto__(state_15134);
if(cljs.core.keyword_identical_QMARK_(result__11921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11921__auto__;
}
break;
}
}catch (e15143){var ex__11922__auto__ = e15143;
var statearr_15144_15511 = state_15134;
(statearr_15144_15511[(2)] = ex__11922__auto__);


if(cljs.core.seq((state_15134[(4)]))){
var statearr_15145_15512 = state_15134;
(statearr_15145_15512[(1)] = cljs.core.first((state_15134[(4)])));

} else {
throw ex__11922__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15514 = state_15134;
state_15134 = G__15514;
continue;
} else {
return ret_value__11920__auto__;
}
break;
}
});
app$db$insertar_producto_$_state_machine__11919__auto__ = function(state_15134){
switch(arguments.length){
case 0:
return app$db$insertar_producto_$_state_machine__11919__auto____0.call(this);
case 1:
return app$db$insertar_producto_$_state_machine__11919__auto____1.call(this,state_15134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$insertar_producto_$_state_machine__11919__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$insertar_producto_$_state_machine__11919__auto____0;
app$db$insertar_producto_$_state_machine__11919__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$insertar_producto_$_state_machine__11919__auto____1;
return app$db$insertar_producto_$_state_machine__11919__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_15146 = f__12040__auto__();
(statearr_15146[(6)] = c__12039__auto__);

return statearr_15146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
});
app.db.insertar_categoria = (function app$db$insertar_categoria(producto){
console.log("Llamando a insertar-categoria...",producto);

var c__12039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__11918__auto__ = (function (state_15170){
var state_val_15171 = (state_15170[(1)]);
if((state_val_15171 === (1))){
var inst_15148 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"json-params","json-params",-1112693596),new cljs.core.Keyword(null,"response-format","response-format",1664465322)];
var inst_15149 = [new cljs.core.Keyword(null,"keywords?","keywords?",764949733)];
var inst_15150 = [true];
var inst_15151 = cljs.core.PersistentHashMap.fromArrays(inst_15149,inst_15150);
var inst_15152 = ajax.core.json_response_format(inst_15151);
var inst_15153 = [true,producto,inst_15152];
var inst_15154 = cljs.core.PersistentHashMap.fromArrays(inst_15148,inst_15153);
var inst_15155 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic("/api/categoria/nuevo",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_15154], 0));
var state_15170__$1 = state_15170;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15170__$1,(2),inst_15155);
} else {
if((state_val_15171 === (2))){
var inst_15157 = (state_15170[(2)]);
var inst_15158 = cljs.core.__destructure_map(inst_15157);
var inst_15159 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15158,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_15160 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15158,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_15161 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((201),inst_15159);
var state_15170__$1 = (function (){var statearr_15172 = state_15170;
(statearr_15172[(7)] = inst_15160);

return statearr_15172;
})();
if(inst_15161){
var statearr_15173_15518 = state_15170__$1;
(statearr_15173_15518[(1)] = (3));

} else {
var statearr_15174_15519 = state_15170__$1;
(statearr_15174_15519[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15171 === (3))){
var inst_15160 = (state_15170[(7)]);
var inst_15163 = console.log("Categoria insertada correctamente",inst_15160);
var inst_15164 = alert("Categoria creada correctamente, recarga la lista de 'Mostrar categorias' dandole al boton, para verla y poder editarla.");
var state_15170__$1 = (function (){var statearr_15175 = state_15170;
(statearr_15175[(8)] = inst_15163);

return statearr_15175;
})();
var statearr_15176_15520 = state_15170__$1;
(statearr_15176_15520[(2)] = inst_15164);

(statearr_15176_15520[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15171 === (4))){
var inst_15160 = (state_15170[(7)]);
var inst_15166 = console.error("Error al insertar categoria",inst_15160);
var state_15170__$1 = state_15170;
var statearr_15177_15521 = state_15170__$1;
(statearr_15177_15521[(2)] = inst_15166);

(statearr_15177_15521[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15171 === (5))){
var inst_15168 = (state_15170[(2)]);
var state_15170__$1 = state_15170;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15170__$1,inst_15168);
} else {
return null;
}
}
}
}
}
});
return (function() {
var app$db$insertar_categoria_$_state_machine__11919__auto__ = null;
var app$db$insertar_categoria_$_state_machine__11919__auto____0 = (function (){
var statearr_15178 = [null,null,null,null,null,null,null,null,null];
(statearr_15178[(0)] = app$db$insertar_categoria_$_state_machine__11919__auto__);

(statearr_15178[(1)] = (1));

return statearr_15178;
});
var app$db$insertar_categoria_$_state_machine__11919__auto____1 = (function (state_15170){
while(true){
var ret_value__11920__auto__ = (function (){try{while(true){
var result__11921__auto__ = switch__11918__auto__(state_15170);
if(cljs.core.keyword_identical_QMARK_(result__11921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11921__auto__;
}
break;
}
}catch (e15179){var ex__11922__auto__ = e15179;
var statearr_15180_15522 = state_15170;
(statearr_15180_15522[(2)] = ex__11922__auto__);


if(cljs.core.seq((state_15170[(4)]))){
var statearr_15181_15523 = state_15170;
(statearr_15181_15523[(1)] = cljs.core.first((state_15170[(4)])));

} else {
throw ex__11922__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15524 = state_15170;
state_15170 = G__15524;
continue;
} else {
return ret_value__11920__auto__;
}
break;
}
});
app$db$insertar_categoria_$_state_machine__11919__auto__ = function(state_15170){
switch(arguments.length){
case 0:
return app$db$insertar_categoria_$_state_machine__11919__auto____0.call(this);
case 1:
return app$db$insertar_categoria_$_state_machine__11919__auto____1.call(this,state_15170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$insertar_categoria_$_state_machine__11919__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$insertar_categoria_$_state_machine__11919__auto____0;
app$db$insertar_categoria_$_state_machine__11919__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$insertar_categoria_$_state_machine__11919__auto____1;
return app$db$insertar_categoria_$_state_machine__11919__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_15182 = f__12040__auto__();
(statearr_15182[(6)] = c__12039__auto__);

return statearr_15182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
});
app.db.eliminar_producto = (function app$db$eliminar_producto(id){
var c__12039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__11918__auto__ = (function (state_15207){
var state_val_15208 = (state_15207[(1)]);
if((state_val_15208 === (1))){
var inst_15184 = ["/api/producto/eliminar/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('');
var inst_15185 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"response-format","response-format",1664465322)];
var inst_15186 = [new cljs.core.Keyword(null,"keywords?","keywords?",764949733)];
var inst_15187 = [true];
var inst_15188 = cljs.core.PersistentHashMap.fromArrays(inst_15186,inst_15187);
var inst_15189 = ajax.core.json_response_format(inst_15188);
var inst_15190 = [true,inst_15189];
var inst_15191 = cljs.core.PersistentHashMap.fromArrays(inst_15185,inst_15190);
var inst_15192 = cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(inst_15184,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_15191], 0));
var state_15207__$1 = state_15207;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15207__$1,(2),inst_15192);
} else {
if((state_val_15208 === (2))){
var inst_15194 = (state_15207[(2)]);
var inst_15195 = cljs.core.__destructure_map(inst_15194);
var inst_15196 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15195,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_15197 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15195,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_15198 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_15196);
var state_15207__$1 = (function (){var statearr_15209 = state_15207;
(statearr_15209[(7)] = inst_15197);

return statearr_15209;
})();
if(inst_15198){
var statearr_15210_15528 = state_15207__$1;
(statearr_15210_15528[(1)] = (3));

} else {
var statearr_15211_15529 = state_15207__$1;
(statearr_15211_15529[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15208 === (3))){
var inst_15197 = (state_15207[(7)]);
var inst_15200 = console.log("Producto eliminado",inst_15197);
var inst_15201 = alert("Producto eliminado correctamente, dale a boton de 'Mostrar productos'.");
var state_15207__$1 = (function (){var statearr_15212 = state_15207;
(statearr_15212[(8)] = inst_15200);

return statearr_15212;
})();
var statearr_15213_15533 = state_15207__$1;
(statearr_15213_15533[(2)] = inst_15201);

(statearr_15213_15533[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15208 === (4))){
var inst_15197 = (state_15207[(7)]);
var inst_15203 = console.error("Error al eliminar el producto",inst_15197);
var state_15207__$1 = state_15207;
var statearr_15214_15534 = state_15207__$1;
(statearr_15214_15534[(2)] = inst_15203);

(statearr_15214_15534[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15208 === (5))){
var inst_15205 = (state_15207[(2)]);
var state_15207__$1 = state_15207;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15207__$1,inst_15205);
} else {
return null;
}
}
}
}
}
});
return (function() {
var app$db$eliminar_producto_$_state_machine__11919__auto__ = null;
var app$db$eliminar_producto_$_state_machine__11919__auto____0 = (function (){
var statearr_15215 = [null,null,null,null,null,null,null,null,null];
(statearr_15215[(0)] = app$db$eliminar_producto_$_state_machine__11919__auto__);

(statearr_15215[(1)] = (1));

return statearr_15215;
});
var app$db$eliminar_producto_$_state_machine__11919__auto____1 = (function (state_15207){
while(true){
var ret_value__11920__auto__ = (function (){try{while(true){
var result__11921__auto__ = switch__11918__auto__(state_15207);
if(cljs.core.keyword_identical_QMARK_(result__11921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11921__auto__;
}
break;
}
}catch (e15216){var ex__11922__auto__ = e15216;
var statearr_15217_15538 = state_15207;
(statearr_15217_15538[(2)] = ex__11922__auto__);


if(cljs.core.seq((state_15207[(4)]))){
var statearr_15218_15539 = state_15207;
(statearr_15218_15539[(1)] = cljs.core.first((state_15207[(4)])));

} else {
throw ex__11922__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15541 = state_15207;
state_15207 = G__15541;
continue;
} else {
return ret_value__11920__auto__;
}
break;
}
});
app$db$eliminar_producto_$_state_machine__11919__auto__ = function(state_15207){
switch(arguments.length){
case 0:
return app$db$eliminar_producto_$_state_machine__11919__auto____0.call(this);
case 1:
return app$db$eliminar_producto_$_state_machine__11919__auto____1.call(this,state_15207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$eliminar_producto_$_state_machine__11919__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$eliminar_producto_$_state_machine__11919__auto____0;
app$db$eliminar_producto_$_state_machine__11919__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$eliminar_producto_$_state_machine__11919__auto____1;
return app$db$eliminar_producto_$_state_machine__11919__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_15219 = f__12040__auto__();
(statearr_15219[(6)] = c__12039__auto__);

return statearr_15219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
});
app.db.activo_producto = (function app$db$activo_producto(id){
var c__12039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__11918__auto__ = (function (state_15250){
var state_val_15251 = (state_15250[(1)]);
if((state_val_15251 === (1))){
var inst_15221 = ["/api/producto/activo/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('');
var inst_15222 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"response-format","response-format",1664465322)];
var inst_15223 = [new cljs.core.Keyword(null,"keywords?","keywords?",764949733)];
var inst_15224 = [true];
var inst_15225 = cljs.core.PersistentHashMap.fromArrays(inst_15223,inst_15224);
var inst_15226 = ajax.core.json_response_format(inst_15225);
var inst_15227 = [true,inst_15226];
var inst_15228 = cljs.core.PersistentHashMap.fromArrays(inst_15222,inst_15227);
var inst_15229 = cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(inst_15221,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_15228], 0));
var state_15250__$1 = state_15250;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15250__$1,(2),inst_15229);
} else {
if((state_val_15251 === (2))){
var inst_15231 = (state_15250[(2)]);
var inst_15232 = cljs.core.__destructure_map(inst_15231);
var inst_15233 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15232,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_15234 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15232,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_15235 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_15233);
var state_15250__$1 = (function (){var statearr_15252 = state_15250;
(statearr_15252[(7)] = inst_15234);

return statearr_15252;
})();
if(inst_15235){
var statearr_15253_15542 = state_15250__$1;
(statearr_15253_15542[(1)] = (3));

} else {
var statearr_15254_15543 = state_15250__$1;
(statearr_15254_15543[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15251 === (3))){
var inst_15234 = (state_15250[(7)]);
var inst_15237 = console.log("Estado actualizado",inst_15234);
var inst_15238 = new cljs.core.Keyword(null,"activo","activo",-1391186334).cljs$core$IFn$_invoke$arity$1(inst_15234);
var state_15250__$1 = (function (){var statearr_15255 = state_15250;
(statearr_15255[(8)] = inst_15237);

return statearr_15255;
})();
if(cljs.core.truth_(inst_15238)){
var statearr_15256_15544 = state_15250__$1;
(statearr_15256_15544[(1)] = (6));

} else {
var statearr_15257_15545 = state_15250__$1;
(statearr_15257_15545[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15251 === (4))){
var inst_15234 = (state_15250[(7)]);
var inst_15246 = console.error("Error al actualizar estado del producto",inst_15234);
var state_15250__$1 = state_15250;
var statearr_15258_15546 = state_15250__$1;
(statearr_15258_15546[(2)] = inst_15246);

(statearr_15258_15546[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15251 === (5))){
var inst_15248 = (state_15250[(2)]);
var state_15250__$1 = state_15250;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15250__$1,inst_15248);
} else {
if((state_val_15251 === (6))){
var state_15250__$1 = state_15250;
var statearr_15259_15550 = state_15250__$1;
(statearr_15259_15550[(2)] = "activado");

(statearr_15259_15550[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15251 === (7))){
var state_15250__$1 = state_15250;
var statearr_15260_15551 = state_15250__$1;
(statearr_15260_15551[(2)] = "desactivado");

(statearr_15260_15551[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15251 === (8))){
var inst_15242 = (state_15250[(2)]);
var inst_15243 = ["Producto ",inst_15242," correctamente"].join('');
var inst_15244 = alert(inst_15243);
var state_15250__$1 = state_15250;
var statearr_15261_15552 = state_15250__$1;
(statearr_15261_15552[(2)] = inst_15244);

(statearr_15261_15552[(1)] = (5));


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
var app$db$activo_producto_$_state_machine__11919__auto__ = null;
var app$db$activo_producto_$_state_machine__11919__auto____0 = (function (){
var statearr_15262 = [null,null,null,null,null,null,null,null,null];
(statearr_15262[(0)] = app$db$activo_producto_$_state_machine__11919__auto__);

(statearr_15262[(1)] = (1));

return statearr_15262;
});
var app$db$activo_producto_$_state_machine__11919__auto____1 = (function (state_15250){
while(true){
var ret_value__11920__auto__ = (function (){try{while(true){
var result__11921__auto__ = switch__11918__auto__(state_15250);
if(cljs.core.keyword_identical_QMARK_(result__11921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11921__auto__;
}
break;
}
}catch (e15263){var ex__11922__auto__ = e15263;
var statearr_15264_15553 = state_15250;
(statearr_15264_15553[(2)] = ex__11922__auto__);


if(cljs.core.seq((state_15250[(4)]))){
var statearr_15265_15554 = state_15250;
(statearr_15265_15554[(1)] = cljs.core.first((state_15250[(4)])));

} else {
throw ex__11922__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15559 = state_15250;
state_15250 = G__15559;
continue;
} else {
return ret_value__11920__auto__;
}
break;
}
});
app$db$activo_producto_$_state_machine__11919__auto__ = function(state_15250){
switch(arguments.length){
case 0:
return app$db$activo_producto_$_state_machine__11919__auto____0.call(this);
case 1:
return app$db$activo_producto_$_state_machine__11919__auto____1.call(this,state_15250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$activo_producto_$_state_machine__11919__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$activo_producto_$_state_machine__11919__auto____0;
app$db$activo_producto_$_state_machine__11919__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$activo_producto_$_state_machine__11919__auto____1;
return app$db$activo_producto_$_state_machine__11919__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_15266 = f__12040__auto__();
(statearr_15266[(6)] = c__12039__auto__);

return statearr_15266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
});
app.db.activo_categoria = (function app$db$activo_categoria(id){
var c__12039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__11918__auto__ = (function (state_15297){
var state_val_15298 = (state_15297[(1)]);
if((state_val_15298 === (1))){
var inst_15268 = ["/api/categoria/activo/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('');
var inst_15269 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"response-format","response-format",1664465322)];
var inst_15270 = [new cljs.core.Keyword(null,"keywords?","keywords?",764949733)];
var inst_15271 = [true];
var inst_15272 = cljs.core.PersistentHashMap.fromArrays(inst_15270,inst_15271);
var inst_15273 = ajax.core.json_response_format(inst_15272);
var inst_15274 = [true,inst_15273];
var inst_15275 = cljs.core.PersistentHashMap.fromArrays(inst_15269,inst_15274);
var inst_15276 = cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(inst_15268,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_15275], 0));
var state_15297__$1 = state_15297;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15297__$1,(2),inst_15276);
} else {
if((state_val_15298 === (2))){
var inst_15278 = (state_15297[(2)]);
var inst_15279 = cljs.core.__destructure_map(inst_15278);
var inst_15280 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15279,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_15281 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15279,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_15282 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_15280);
var state_15297__$1 = (function (){var statearr_15299 = state_15297;
(statearr_15299[(7)] = inst_15281);

return statearr_15299;
})();
if(inst_15282){
var statearr_15300_15563 = state_15297__$1;
(statearr_15300_15563[(1)] = (3));

} else {
var statearr_15301_15564 = state_15297__$1;
(statearr_15301_15564[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15298 === (3))){
var inst_15281 = (state_15297[(7)]);
var inst_15284 = console.log("Estado actualizado",inst_15281);
var inst_15285 = new cljs.core.Keyword(null,"activo","activo",-1391186334).cljs$core$IFn$_invoke$arity$1(inst_15281);
var state_15297__$1 = (function (){var statearr_15302 = state_15297;
(statearr_15302[(8)] = inst_15284);

return statearr_15302;
})();
if(cljs.core.truth_(inst_15285)){
var statearr_15303_15565 = state_15297__$1;
(statearr_15303_15565[(1)] = (6));

} else {
var statearr_15304_15566 = state_15297__$1;
(statearr_15304_15566[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15298 === (4))){
var inst_15281 = (state_15297[(7)]);
var inst_15293 = console.error("Error al actualizar estado de la categoria",inst_15281);
var state_15297__$1 = state_15297;
var statearr_15305_15567 = state_15297__$1;
(statearr_15305_15567[(2)] = inst_15293);

(statearr_15305_15567[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15298 === (5))){
var inst_15295 = (state_15297[(2)]);
var state_15297__$1 = state_15297;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15297__$1,inst_15295);
} else {
if((state_val_15298 === (6))){
var state_15297__$1 = state_15297;
var statearr_15306_15568 = state_15297__$1;
(statearr_15306_15568[(2)] = "activada");

(statearr_15306_15568[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15298 === (7))){
var state_15297__$1 = state_15297;
var statearr_15307_15569 = state_15297__$1;
(statearr_15307_15569[(2)] = "desactivada");

(statearr_15307_15569[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15298 === (8))){
var inst_15289 = (state_15297[(2)]);
var inst_15290 = ["Categoria ",inst_15289," correctamente."].join('');
var inst_15291 = alert(inst_15290);
var state_15297__$1 = state_15297;
var statearr_15308_15570 = state_15297__$1;
(statearr_15308_15570[(2)] = inst_15291);

(statearr_15308_15570[(1)] = (5));


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
var app$db$activo_categoria_$_state_machine__11919__auto__ = null;
var app$db$activo_categoria_$_state_machine__11919__auto____0 = (function (){
var statearr_15309 = [null,null,null,null,null,null,null,null,null];
(statearr_15309[(0)] = app$db$activo_categoria_$_state_machine__11919__auto__);

(statearr_15309[(1)] = (1));

return statearr_15309;
});
var app$db$activo_categoria_$_state_machine__11919__auto____1 = (function (state_15297){
while(true){
var ret_value__11920__auto__ = (function (){try{while(true){
var result__11921__auto__ = switch__11918__auto__(state_15297);
if(cljs.core.keyword_identical_QMARK_(result__11921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11921__auto__;
}
break;
}
}catch (e15310){var ex__11922__auto__ = e15310;
var statearr_15311_15574 = state_15297;
(statearr_15311_15574[(2)] = ex__11922__auto__);


if(cljs.core.seq((state_15297[(4)]))){
var statearr_15312_15575 = state_15297;
(statearr_15312_15575[(1)] = cljs.core.first((state_15297[(4)])));

} else {
throw ex__11922__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15580 = state_15297;
state_15297 = G__15580;
continue;
} else {
return ret_value__11920__auto__;
}
break;
}
});
app$db$activo_categoria_$_state_machine__11919__auto__ = function(state_15297){
switch(arguments.length){
case 0:
return app$db$activo_categoria_$_state_machine__11919__auto____0.call(this);
case 1:
return app$db$activo_categoria_$_state_machine__11919__auto____1.call(this,state_15297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$activo_categoria_$_state_machine__11919__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$activo_categoria_$_state_machine__11919__auto____0;
app$db$activo_categoria_$_state_machine__11919__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$activo_categoria_$_state_machine__11919__auto____1;
return app$db$activo_categoria_$_state_machine__11919__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_15313 = f__12040__auto__();
(statearr_15313[(6)] = c__12039__auto__);

return statearr_15313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
});
app.db.eliminar_categoria = (function app$db$eliminar_categoria(id){
var c__12039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__11918__auto__ = (function (state_15338){
var state_val_15339 = (state_15338[(1)]);
if((state_val_15339 === (1))){
var inst_15315 = ["/api/categoria/eliminar/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('');
var inst_15316 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"response-format","response-format",1664465322)];
var inst_15317 = [new cljs.core.Keyword(null,"keywords?","keywords?",764949733)];
var inst_15318 = [true];
var inst_15319 = cljs.core.PersistentHashMap.fromArrays(inst_15317,inst_15318);
var inst_15320 = ajax.core.json_response_format(inst_15319);
var inst_15321 = [true,inst_15320];
var inst_15322 = cljs.core.PersistentHashMap.fromArrays(inst_15316,inst_15321);
var inst_15323 = cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(inst_15315,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_15322], 0));
var state_15338__$1 = state_15338;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15338__$1,(2),inst_15323);
} else {
if((state_val_15339 === (2))){
var inst_15325 = (state_15338[(2)]);
var inst_15326 = cljs.core.__destructure_map(inst_15325);
var inst_15327 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15326,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_15328 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15326,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_15329 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_15327);
var state_15338__$1 = (function (){var statearr_15340 = state_15338;
(statearr_15340[(7)] = inst_15328);

return statearr_15340;
})();
if(inst_15329){
var statearr_15341_15581 = state_15338__$1;
(statearr_15341_15581[(1)] = (3));

} else {
var statearr_15342_15582 = state_15338__$1;
(statearr_15342_15582[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15339 === (3))){
var inst_15328 = (state_15338[(7)]);
var inst_15331 = console.log("Categor\u00EDa eliminada",inst_15328);
var inst_15332 = alert("Categor\u00EDa eliminada correctamente, dale a boton de 'Mostrar categorias'.");
var state_15338__$1 = (function (){var statearr_15343 = state_15338;
(statearr_15343[(8)] = inst_15331);

return statearr_15343;
})();
var statearr_15344_15584 = state_15338__$1;
(statearr_15344_15584[(2)] = inst_15332);

(statearr_15344_15584[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15339 === (4))){
var inst_15328 = (state_15338[(7)]);
var inst_15334 = console.error("Error al eliminar categor\u00EDa",inst_15328);
var state_15338__$1 = state_15338;
var statearr_15345_15585 = state_15338__$1;
(statearr_15345_15585[(2)] = inst_15334);

(statearr_15345_15585[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15339 === (5))){
var inst_15336 = (state_15338[(2)]);
var state_15338__$1 = state_15338;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15338__$1,inst_15336);
} else {
return null;
}
}
}
}
}
});
return (function() {
var app$db$eliminar_categoria_$_state_machine__11919__auto__ = null;
var app$db$eliminar_categoria_$_state_machine__11919__auto____0 = (function (){
var statearr_15346 = [null,null,null,null,null,null,null,null,null];
(statearr_15346[(0)] = app$db$eliminar_categoria_$_state_machine__11919__auto__);

(statearr_15346[(1)] = (1));

return statearr_15346;
});
var app$db$eliminar_categoria_$_state_machine__11919__auto____1 = (function (state_15338){
while(true){
var ret_value__11920__auto__ = (function (){try{while(true){
var result__11921__auto__ = switch__11918__auto__(state_15338);
if(cljs.core.keyword_identical_QMARK_(result__11921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11921__auto__;
}
break;
}
}catch (e15347){var ex__11922__auto__ = e15347;
var statearr_15348_15586 = state_15338;
(statearr_15348_15586[(2)] = ex__11922__auto__);


if(cljs.core.seq((state_15338[(4)]))){
var statearr_15349_15587 = state_15338;
(statearr_15349_15587[(1)] = cljs.core.first((state_15338[(4)])));

} else {
throw ex__11922__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15588 = state_15338;
state_15338 = G__15588;
continue;
} else {
return ret_value__11920__auto__;
}
break;
}
});
app$db$eliminar_categoria_$_state_machine__11919__auto__ = function(state_15338){
switch(arguments.length){
case 0:
return app$db$eliminar_categoria_$_state_machine__11919__auto____0.call(this);
case 1:
return app$db$eliminar_categoria_$_state_machine__11919__auto____1.call(this,state_15338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$eliminar_categoria_$_state_machine__11919__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$eliminar_categoria_$_state_machine__11919__auto____0;
app$db$eliminar_categoria_$_state_machine__11919__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$eliminar_categoria_$_state_machine__11919__auto____1;
return app$db$eliminar_categoria_$_state_machine__11919__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_15350 = f__12040__auto__();
(statearr_15350[(6)] = c__12039__auto__);

return statearr_15350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
});

//# sourceMappingURL=app.db.js.map
