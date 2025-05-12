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
var f__12040__auto__ = (function (){var switch__11942__auto__ = (function (state_21248){
var state_val_21249 = (state_21248[(1)]);
if((state_val_21249 === (1))){
var inst_21225 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"response-format","response-format",1664465322)];
var inst_21226 = [new cljs.core.Keyword(null,"keywords?","keywords?",764949733)];
var inst_21227 = [true];
var inst_21228 = cljs.core.PersistentHashMap.fromArrays(inst_21226,inst_21227);
var inst_21229 = ajax.core.json_response_format(inst_21228);
var inst_21230 = [true,inst_21229];
var inst_21231 = cljs.core.PersistentHashMap.fromArrays(inst_21225,inst_21230);
var inst_21232 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic("/api/categorias/",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_21231], 0));
var state_21248__$1 = state_21248;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21248__$1,(2),inst_21232);
} else {
if((state_val_21249 === (2))){
var inst_21234 = (state_21248[(2)]);
var inst_21235 = cljs.core.__destructure_map(inst_21234);
var inst_21236 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21235,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_21237 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21235,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_21238 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_21236);
var state_21248__$1 = (function (){var statearr_21250 = state_21248;
(statearr_21250[(7)] = inst_21237);

return statearr_21250;
})();
if(inst_21238){
var statearr_21251_21628 = state_21248__$1;
(statearr_21251_21628[(1)] = (3));

} else {
var statearr_21252_21629 = state_21248__$1;
(statearr_21252_21629[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21249 === (3))){
var inst_21237 = (state_21248[(7)]);
var inst_21240 = cljs.core.reset_BANG_(app.db.categorias,inst_21237);
var inst_21241 = cljs.core.deref(app.db.categorias);
var inst_21242 = console.log("Categor\u00EDas actualizadas:",inst_21241);
var state_21248__$1 = (function (){var statearr_21253 = state_21248;
(statearr_21253[(8)] = inst_21240);

return statearr_21253;
})();
var statearr_21254_21630 = state_21248__$1;
(statearr_21254_21630[(2)] = inst_21242);

(statearr_21254_21630[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21249 === (4))){
var inst_21244 = console.error("Error al obtener categor\u00EDas");
var state_21248__$1 = state_21248;
var statearr_21255_21631 = state_21248__$1;
(statearr_21255_21631[(2)] = inst_21244);

(statearr_21255_21631[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21249 === (5))){
var inst_21246 = (state_21248[(2)]);
var state_21248__$1 = state_21248;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21248__$1,inst_21246);
} else {
return null;
}
}
}
}
}
});
return (function() {
var app$db$fetch_categorias_$_state_machine__11943__auto__ = null;
var app$db$fetch_categorias_$_state_machine__11943__auto____0 = (function (){
var statearr_21256 = [null,null,null,null,null,null,null,null,null];
(statearr_21256[(0)] = app$db$fetch_categorias_$_state_machine__11943__auto__);

(statearr_21256[(1)] = (1));

return statearr_21256;
});
var app$db$fetch_categorias_$_state_machine__11943__auto____1 = (function (state_21248){
while(true){
var ret_value__11944__auto__ = (function (){try{while(true){
var result__11945__auto__ = switch__11942__auto__(state_21248);
if(cljs.core.keyword_identical_QMARK_(result__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11945__auto__;
}
break;
}
}catch (e21257){var ex__11946__auto__ = e21257;
var statearr_21258_21632 = state_21248;
(statearr_21258_21632[(2)] = ex__11946__auto__);


if(cljs.core.seq((state_21248[(4)]))){
var statearr_21259_21633 = state_21248;
(statearr_21259_21633[(1)] = cljs.core.first((state_21248[(4)])));

} else {
throw ex__11946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21634 = state_21248;
state_21248 = G__21634;
continue;
} else {
return ret_value__11944__auto__;
}
break;
}
});
app$db$fetch_categorias_$_state_machine__11943__auto__ = function(state_21248){
switch(arguments.length){
case 0:
return app$db$fetch_categorias_$_state_machine__11943__auto____0.call(this);
case 1:
return app$db$fetch_categorias_$_state_machine__11943__auto____1.call(this,state_21248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$fetch_categorias_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$fetch_categorias_$_state_machine__11943__auto____0;
app$db$fetch_categorias_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$fetch_categorias_$_state_machine__11943__auto____1;
return app$db$fetch_categorias_$_state_machine__11943__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_21260 = f__12040__auto__();
(statearr_21260[(6)] = c__12039__auto__);

return statearr_21260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
});
app.db.fetch_list_categorias = (function app$db$fetch_list_categorias(){
console.log("Llamando a fetch-categorias...");

var c__12039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__11942__auto__ = (function (state_21285){
var state_val_21286 = (state_21285[(1)]);
if((state_val_21286 === (1))){
var inst_21262 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"response-format","response-format",1664465322)];
var inst_21263 = [new cljs.core.Keyword(null,"keywords?","keywords?",764949733)];
var inst_21264 = [true];
var inst_21265 = cljs.core.PersistentHashMap.fromArrays(inst_21263,inst_21264);
var inst_21266 = ajax.core.json_response_format(inst_21265);
var inst_21267 = [true,inst_21266];
var inst_21268 = cljs.core.PersistentHashMap.fromArrays(inst_21262,inst_21267);
var inst_21269 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic("/api/categorias/todas",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_21268], 0));
var state_21285__$1 = state_21285;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21285__$1,(2),inst_21269);
} else {
if((state_val_21286 === (2))){
var inst_21271 = (state_21285[(2)]);
var inst_21272 = cljs.core.__destructure_map(inst_21271);
var inst_21273 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21272,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_21274 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21272,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_21275 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_21273);
var state_21285__$1 = (function (){var statearr_21287 = state_21285;
(statearr_21287[(7)] = inst_21274);

return statearr_21287;
})();
if(inst_21275){
var statearr_21288_21635 = state_21285__$1;
(statearr_21288_21635[(1)] = (3));

} else {
var statearr_21289_21636 = state_21285__$1;
(statearr_21289_21636[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21286 === (3))){
var inst_21274 = (state_21285[(7)]);
var inst_21277 = cljs.core.reset_BANG_(app.db.categorias,inst_21274);
var inst_21278 = cljs.core.deref(app.db.categorias);
var inst_21279 = console.log("Categor\u00EDas actualizadas:",inst_21278);
var state_21285__$1 = (function (){var statearr_21290 = state_21285;
(statearr_21290[(8)] = inst_21277);

return statearr_21290;
})();
var statearr_21291_21637 = state_21285__$1;
(statearr_21291_21637[(2)] = inst_21279);

(statearr_21291_21637[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21286 === (4))){
var inst_21281 = console.error("Error al obtener categor\u00EDas");
var state_21285__$1 = state_21285;
var statearr_21292_21638 = state_21285__$1;
(statearr_21292_21638[(2)] = inst_21281);

(statearr_21292_21638[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21286 === (5))){
var inst_21283 = (state_21285[(2)]);
var state_21285__$1 = state_21285;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21285__$1,inst_21283);
} else {
return null;
}
}
}
}
}
});
return (function() {
var app$db$fetch_list_categorias_$_state_machine__11943__auto__ = null;
var app$db$fetch_list_categorias_$_state_machine__11943__auto____0 = (function (){
var statearr_21293 = [null,null,null,null,null,null,null,null,null];
(statearr_21293[(0)] = app$db$fetch_list_categorias_$_state_machine__11943__auto__);

(statearr_21293[(1)] = (1));

return statearr_21293;
});
var app$db$fetch_list_categorias_$_state_machine__11943__auto____1 = (function (state_21285){
while(true){
var ret_value__11944__auto__ = (function (){try{while(true){
var result__11945__auto__ = switch__11942__auto__(state_21285);
if(cljs.core.keyword_identical_QMARK_(result__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11945__auto__;
}
break;
}
}catch (e21294){var ex__11946__auto__ = e21294;
var statearr_21295_21639 = state_21285;
(statearr_21295_21639[(2)] = ex__11946__auto__);


if(cljs.core.seq((state_21285[(4)]))){
var statearr_21296_21640 = state_21285;
(statearr_21296_21640[(1)] = cljs.core.first((state_21285[(4)])));

} else {
throw ex__11946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21641 = state_21285;
state_21285 = G__21641;
continue;
} else {
return ret_value__11944__auto__;
}
break;
}
});
app$db$fetch_list_categorias_$_state_machine__11943__auto__ = function(state_21285){
switch(arguments.length){
case 0:
return app$db$fetch_list_categorias_$_state_machine__11943__auto____0.call(this);
case 1:
return app$db$fetch_list_categorias_$_state_machine__11943__auto____1.call(this,state_21285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$fetch_list_categorias_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$fetch_list_categorias_$_state_machine__11943__auto____0;
app$db$fetch_list_categorias_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$fetch_list_categorias_$_state_machine__11943__auto____1;
return app$db$fetch_list_categorias_$_state_machine__11943__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_21297 = f__12040__auto__();
(statearr_21297[(6)] = c__12039__auto__);

return statearr_21297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
});
app.db.fetch_productos = (function app$db$fetch_productos(categoria_id){
console.log("Llamando a fetch-productos para categor\u00EDa:",categoria_id);

var c__12039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__11942__auto__ = (function (state_21331){
var state_val_21332 = (state_21331[(1)]);
if((state_val_21332 === (1))){
var inst_21299 = ["/api/productos/categoria/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(categoria_id)].join('');
var inst_21300 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"response-format","response-format",1664465322)];
var inst_21301 = [new cljs.core.Keyword(null,"keywords?","keywords?",764949733)];
var inst_21302 = [true];
var inst_21303 = cljs.core.PersistentHashMap.fromArrays(inst_21301,inst_21302);
var inst_21304 = ajax.core.json_response_format(inst_21303);
var inst_21305 = [true,inst_21304];
var inst_21306 = cljs.core.PersistentHashMap.fromArrays(inst_21300,inst_21305);
var inst_21307 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_21299,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_21306], 0));
var state_21331__$1 = state_21331;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21331__$1,(2),inst_21307);
} else {
if((state_val_21332 === (2))){
var inst_21309 = (state_21331[(2)]);
var inst_21310 = cljs.core.__destructure_map(inst_21309);
var inst_21311 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21310,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_21312 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21310,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_21313 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_21311);
var state_21331__$1 = (function (){var statearr_21333 = state_21331;
(statearr_21333[(7)] = inst_21312);

return statearr_21333;
})();
if(inst_21313){
var statearr_21334_21642 = state_21331__$1;
(statearr_21334_21642[(1)] = (3));

} else {
var statearr_21335_21643 = state_21331__$1;
(statearr_21335_21643[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21332 === (3))){
var inst_21312 = (state_21331[(7)]);
var inst_21315 = cljs.core.map_QMARK_(inst_21312);
var state_21331__$1 = state_21331;
if(inst_21315){
var statearr_21336_21644 = state_21331__$1;
(statearr_21336_21644[(1)] = (6));

} else {
var statearr_21337_21645 = state_21331__$1;
(statearr_21337_21645[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21332 === (4))){
var inst_21325 = cljs.core.PersistentVector.EMPTY;
var inst_21326 = cljs.core.reset_BANG_(app.db.productos,inst_21325);
var inst_21327 = console.log("La categor\u00EDa seleccionada no tiene productos asociados.");
var state_21331__$1 = (function (){var statearr_21338 = state_21331;
(statearr_21338[(8)] = inst_21326);

return statearr_21338;
})();
var statearr_21339_21646 = state_21331__$1;
(statearr_21339_21646[(2)] = inst_21327);

(statearr_21339_21646[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21332 === (5))){
var inst_21329 = (state_21331[(2)]);
var state_21331__$1 = state_21331;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21331__$1,inst_21329);
} else {
if((state_val_21332 === (6))){
var inst_21312 = (state_21331[(7)]);
var inst_21317 = new cljs.core.Keyword(null,"productos","productos",-1282966179).cljs$core$IFn$_invoke$arity$1(inst_21312);
var state_21331__$1 = state_21331;
var statearr_21340_21647 = state_21331__$1;
(statearr_21340_21647[(2)] = inst_21317);

(statearr_21340_21647[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21332 === (7))){
var inst_21312 = (state_21331[(7)]);
var state_21331__$1 = state_21331;
var statearr_21341_21648 = state_21331__$1;
(statearr_21341_21648[(2)] = inst_21312);

(statearr_21341_21648[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21332 === (8))){
var inst_21320 = (state_21331[(2)]);
var inst_21321 = cljs.core.reset_BANG_(app.db.productos,inst_21320);
var inst_21322 = cljs.core.deref(app.db.productos);
var inst_21323 = console.log("Productos actualizados:",inst_21322);
var state_21331__$1 = (function (){var statearr_21342 = state_21331;
(statearr_21342[(9)] = inst_21321);

return statearr_21342;
})();
var statearr_21343_21649 = state_21331__$1;
(statearr_21343_21649[(2)] = inst_21323);

(statearr_21343_21649[(1)] = (5));


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
var app$db$fetch_productos_$_state_machine__11943__auto__ = null;
var app$db$fetch_productos_$_state_machine__11943__auto____0 = (function (){
var statearr_21344 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21344[(0)] = app$db$fetch_productos_$_state_machine__11943__auto__);

(statearr_21344[(1)] = (1));

return statearr_21344;
});
var app$db$fetch_productos_$_state_machine__11943__auto____1 = (function (state_21331){
while(true){
var ret_value__11944__auto__ = (function (){try{while(true){
var result__11945__auto__ = switch__11942__auto__(state_21331);
if(cljs.core.keyword_identical_QMARK_(result__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11945__auto__;
}
break;
}
}catch (e21345){var ex__11946__auto__ = e21345;
var statearr_21346_21650 = state_21331;
(statearr_21346_21650[(2)] = ex__11946__auto__);


if(cljs.core.seq((state_21331[(4)]))){
var statearr_21347_21651 = state_21331;
(statearr_21347_21651[(1)] = cljs.core.first((state_21331[(4)])));

} else {
throw ex__11946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21652 = state_21331;
state_21331 = G__21652;
continue;
} else {
return ret_value__11944__auto__;
}
break;
}
});
app$db$fetch_productos_$_state_machine__11943__auto__ = function(state_21331){
switch(arguments.length){
case 0:
return app$db$fetch_productos_$_state_machine__11943__auto____0.call(this);
case 1:
return app$db$fetch_productos_$_state_machine__11943__auto____1.call(this,state_21331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$fetch_productos_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$fetch_productos_$_state_machine__11943__auto____0;
app$db$fetch_productos_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$fetch_productos_$_state_machine__11943__auto____1;
return app$db$fetch_productos_$_state_machine__11943__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_21348 = f__12040__auto__();
(statearr_21348[(6)] = c__12039__auto__);

return statearr_21348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
});
app.db.fetch_list_productos = (function app$db$fetch_list_productos(){
console.log("Llamando a fetch-list-productos...");

var c__12039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__11942__auto__ = (function (state_21373){
var state_val_21374 = (state_21373[(1)]);
if((state_val_21374 === (1))){
var inst_21350 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"response-format","response-format",1664465322)];
var inst_21351 = [new cljs.core.Keyword(null,"keywords?","keywords?",764949733)];
var inst_21352 = [true];
var inst_21353 = cljs.core.PersistentHashMap.fromArrays(inst_21351,inst_21352);
var inst_21354 = ajax.core.json_response_format(inst_21353);
var inst_21355 = [true,inst_21354];
var inst_21356 = cljs.core.PersistentHashMap.fromArrays(inst_21350,inst_21355);
var inst_21357 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic("/api/productos/",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_21356], 0));
var state_21373__$1 = state_21373;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21373__$1,(2),inst_21357);
} else {
if((state_val_21374 === (2))){
var inst_21359 = (state_21373[(2)]);
var inst_21360 = cljs.core.__destructure_map(inst_21359);
var inst_21361 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21360,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_21362 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21360,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_21363 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_21361);
var state_21373__$1 = (function (){var statearr_21375 = state_21373;
(statearr_21375[(7)] = inst_21362);

return statearr_21375;
})();
if(inst_21363){
var statearr_21376_21653 = state_21373__$1;
(statearr_21376_21653[(1)] = (3));

} else {
var statearr_21377_21654 = state_21373__$1;
(statearr_21377_21654[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21374 === (3))){
var inst_21362 = (state_21373[(7)]);
var inst_21365 = cljs.core.reset_BANG_(app.db.list_productos,inst_21362);
var inst_21366 = cljs.core.deref(app.db.categorias);
var inst_21367 = console.log("Productos actualizados:",inst_21366);
var state_21373__$1 = (function (){var statearr_21378 = state_21373;
(statearr_21378[(8)] = inst_21365);

return statearr_21378;
})();
var statearr_21379_21655 = state_21373__$1;
(statearr_21379_21655[(2)] = inst_21367);

(statearr_21379_21655[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21374 === (4))){
var inst_21369 = console.error("Error al obtener productos");
var state_21373__$1 = state_21373;
var statearr_21380_21656 = state_21373__$1;
(statearr_21380_21656[(2)] = inst_21369);

(statearr_21380_21656[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21374 === (5))){
var inst_21371 = (state_21373[(2)]);
var state_21373__$1 = state_21373;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21373__$1,inst_21371);
} else {
return null;
}
}
}
}
}
});
return (function() {
var app$db$fetch_list_productos_$_state_machine__11943__auto__ = null;
var app$db$fetch_list_productos_$_state_machine__11943__auto____0 = (function (){
var statearr_21381 = [null,null,null,null,null,null,null,null,null];
(statearr_21381[(0)] = app$db$fetch_list_productos_$_state_machine__11943__auto__);

(statearr_21381[(1)] = (1));

return statearr_21381;
});
var app$db$fetch_list_productos_$_state_machine__11943__auto____1 = (function (state_21373){
while(true){
var ret_value__11944__auto__ = (function (){try{while(true){
var result__11945__auto__ = switch__11942__auto__(state_21373);
if(cljs.core.keyword_identical_QMARK_(result__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11945__auto__;
}
break;
}
}catch (e21382){var ex__11946__auto__ = e21382;
var statearr_21383_21657 = state_21373;
(statearr_21383_21657[(2)] = ex__11946__auto__);


if(cljs.core.seq((state_21373[(4)]))){
var statearr_21384_21658 = state_21373;
(statearr_21384_21658[(1)] = cljs.core.first((state_21373[(4)])));

} else {
throw ex__11946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21659 = state_21373;
state_21373 = G__21659;
continue;
} else {
return ret_value__11944__auto__;
}
break;
}
});
app$db$fetch_list_productos_$_state_machine__11943__auto__ = function(state_21373){
switch(arguments.length){
case 0:
return app$db$fetch_list_productos_$_state_machine__11943__auto____0.call(this);
case 1:
return app$db$fetch_list_productos_$_state_machine__11943__auto____1.call(this,state_21373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$fetch_list_productos_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$fetch_list_productos_$_state_machine__11943__auto____0;
app$db$fetch_list_productos_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$fetch_list_productos_$_state_machine__11943__auto____1;
return app$db$fetch_list_productos_$_state_machine__11943__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_21385 = f__12040__auto__();
(statearr_21385[(6)] = c__12039__auto__);

return statearr_21385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
});
app.db.cargar_imagenes = (function app$db$cargar_imagenes(){
console.log("Llamando a cargar-imagenes...");

return fetch("/api/imagenes").then((function (p1__21386_SHARP_){
return p1__21386_SHARP_.json();
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
var f__12040__auto__ = (function (){var switch__11942__auto__ = (function (state_21410){
var state_val_21411 = (state_21410[(1)]);
if((state_val_21411 === (1))){
var inst_21388 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"json-params","json-params",-1112693596),new cljs.core.Keyword(null,"response-format","response-format",1664465322)];
var inst_21389 = [new cljs.core.Keyword(null,"keywords?","keywords?",764949733)];
var inst_21390 = [true];
var inst_21391 = cljs.core.PersistentHashMap.fromArrays(inst_21389,inst_21390);
var inst_21392 = ajax.core.json_response_format(inst_21391);
var inst_21393 = [true,producto,inst_21392];
var inst_21394 = cljs.core.PersistentHashMap.fromArrays(inst_21388,inst_21393);
var inst_21395 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic("/api/producto/nuevo",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_21394], 0));
var state_21410__$1 = state_21410;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21410__$1,(2),inst_21395);
} else {
if((state_val_21411 === (2))){
var inst_21397 = (state_21410[(2)]);
var inst_21398 = cljs.core.__destructure_map(inst_21397);
var inst_21399 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21398,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_21400 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21398,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_21401 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((201),inst_21399);
var state_21410__$1 = (function (){var statearr_21412 = state_21410;
(statearr_21412[(7)] = inst_21400);

return statearr_21412;
})();
if(inst_21401){
var statearr_21413_21660 = state_21410__$1;
(statearr_21413_21660[(1)] = (3));

} else {
var statearr_21414_21661 = state_21410__$1;
(statearr_21414_21661[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21411 === (3))){
var inst_21400 = (state_21410[(7)]);
var inst_21403 = console.log("Producto insertado correctamente",inst_21400);
var inst_21404 = alert("Producto creado correctamente");
var state_21410__$1 = (function (){var statearr_21415 = state_21410;
(statearr_21415[(8)] = inst_21403);

return statearr_21415;
})();
var statearr_21416_21662 = state_21410__$1;
(statearr_21416_21662[(2)] = inst_21404);

(statearr_21416_21662[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21411 === (4))){
var inst_21400 = (state_21410[(7)]);
var inst_21406 = console.error("Error al insertar producto",inst_21400);
var state_21410__$1 = state_21410;
var statearr_21417_21663 = state_21410__$1;
(statearr_21417_21663[(2)] = inst_21406);

(statearr_21417_21663[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21411 === (5))){
var inst_21408 = (state_21410[(2)]);
var state_21410__$1 = state_21410;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21410__$1,inst_21408);
} else {
return null;
}
}
}
}
}
});
return (function() {
var app$db$insertar_producto_$_state_machine__11943__auto__ = null;
var app$db$insertar_producto_$_state_machine__11943__auto____0 = (function (){
var statearr_21418 = [null,null,null,null,null,null,null,null,null];
(statearr_21418[(0)] = app$db$insertar_producto_$_state_machine__11943__auto__);

(statearr_21418[(1)] = (1));

return statearr_21418;
});
var app$db$insertar_producto_$_state_machine__11943__auto____1 = (function (state_21410){
while(true){
var ret_value__11944__auto__ = (function (){try{while(true){
var result__11945__auto__ = switch__11942__auto__(state_21410);
if(cljs.core.keyword_identical_QMARK_(result__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11945__auto__;
}
break;
}
}catch (e21419){var ex__11946__auto__ = e21419;
var statearr_21420_21664 = state_21410;
(statearr_21420_21664[(2)] = ex__11946__auto__);


if(cljs.core.seq((state_21410[(4)]))){
var statearr_21421_21665 = state_21410;
(statearr_21421_21665[(1)] = cljs.core.first((state_21410[(4)])));

} else {
throw ex__11946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21666 = state_21410;
state_21410 = G__21666;
continue;
} else {
return ret_value__11944__auto__;
}
break;
}
});
app$db$insertar_producto_$_state_machine__11943__auto__ = function(state_21410){
switch(arguments.length){
case 0:
return app$db$insertar_producto_$_state_machine__11943__auto____0.call(this);
case 1:
return app$db$insertar_producto_$_state_machine__11943__auto____1.call(this,state_21410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$insertar_producto_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$insertar_producto_$_state_machine__11943__auto____0;
app$db$insertar_producto_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$insertar_producto_$_state_machine__11943__auto____1;
return app$db$insertar_producto_$_state_machine__11943__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_21422 = f__12040__auto__();
(statearr_21422[(6)] = c__12039__auto__);

return statearr_21422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
});
app.db.insertar_categoria = (function app$db$insertar_categoria(producto){
console.log("Llamando a insertar-categoria...",producto);

var c__12039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__11942__auto__ = (function (state_21446){
var state_val_21447 = (state_21446[(1)]);
if((state_val_21447 === (1))){
var inst_21424 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"json-params","json-params",-1112693596),new cljs.core.Keyword(null,"response-format","response-format",1664465322)];
var inst_21425 = [new cljs.core.Keyword(null,"keywords?","keywords?",764949733)];
var inst_21426 = [true];
var inst_21427 = cljs.core.PersistentHashMap.fromArrays(inst_21425,inst_21426);
var inst_21428 = ajax.core.json_response_format(inst_21427);
var inst_21429 = [true,producto,inst_21428];
var inst_21430 = cljs.core.PersistentHashMap.fromArrays(inst_21424,inst_21429);
var inst_21431 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic("/api/categoria/nuevo",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_21430], 0));
var state_21446__$1 = state_21446;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21446__$1,(2),inst_21431);
} else {
if((state_val_21447 === (2))){
var inst_21433 = (state_21446[(2)]);
var inst_21434 = cljs.core.__destructure_map(inst_21433);
var inst_21435 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21434,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_21436 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21434,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_21437 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((201),inst_21435);
var state_21446__$1 = (function (){var statearr_21448 = state_21446;
(statearr_21448[(7)] = inst_21436);

return statearr_21448;
})();
if(inst_21437){
var statearr_21449_21667 = state_21446__$1;
(statearr_21449_21667[(1)] = (3));

} else {
var statearr_21450_21668 = state_21446__$1;
(statearr_21450_21668[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21447 === (3))){
var inst_21436 = (state_21446[(7)]);
var inst_21439 = console.log("Categoria insertada correctamente",inst_21436);
var inst_21440 = alert("Categoria creada correctamente, recarga la lista de 'Mostrar categorias' dandole al boton, para verla y poder editarla.");
var state_21446__$1 = (function (){var statearr_21451 = state_21446;
(statearr_21451[(8)] = inst_21439);

return statearr_21451;
})();
var statearr_21452_21669 = state_21446__$1;
(statearr_21452_21669[(2)] = inst_21440);

(statearr_21452_21669[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21447 === (4))){
var inst_21436 = (state_21446[(7)]);
var inst_21442 = console.error("Error al insertar categoria",inst_21436);
var state_21446__$1 = state_21446;
var statearr_21453_21670 = state_21446__$1;
(statearr_21453_21670[(2)] = inst_21442);

(statearr_21453_21670[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21447 === (5))){
var inst_21444 = (state_21446[(2)]);
var state_21446__$1 = state_21446;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21446__$1,inst_21444);
} else {
return null;
}
}
}
}
}
});
return (function() {
var app$db$insertar_categoria_$_state_machine__11943__auto__ = null;
var app$db$insertar_categoria_$_state_machine__11943__auto____0 = (function (){
var statearr_21454 = [null,null,null,null,null,null,null,null,null];
(statearr_21454[(0)] = app$db$insertar_categoria_$_state_machine__11943__auto__);

(statearr_21454[(1)] = (1));

return statearr_21454;
});
var app$db$insertar_categoria_$_state_machine__11943__auto____1 = (function (state_21446){
while(true){
var ret_value__11944__auto__ = (function (){try{while(true){
var result__11945__auto__ = switch__11942__auto__(state_21446);
if(cljs.core.keyword_identical_QMARK_(result__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11945__auto__;
}
break;
}
}catch (e21455){var ex__11946__auto__ = e21455;
var statearr_21456_21671 = state_21446;
(statearr_21456_21671[(2)] = ex__11946__auto__);


if(cljs.core.seq((state_21446[(4)]))){
var statearr_21457_21672 = state_21446;
(statearr_21457_21672[(1)] = cljs.core.first((state_21446[(4)])));

} else {
throw ex__11946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21673 = state_21446;
state_21446 = G__21673;
continue;
} else {
return ret_value__11944__auto__;
}
break;
}
});
app$db$insertar_categoria_$_state_machine__11943__auto__ = function(state_21446){
switch(arguments.length){
case 0:
return app$db$insertar_categoria_$_state_machine__11943__auto____0.call(this);
case 1:
return app$db$insertar_categoria_$_state_machine__11943__auto____1.call(this,state_21446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$insertar_categoria_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$insertar_categoria_$_state_machine__11943__auto____0;
app$db$insertar_categoria_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$insertar_categoria_$_state_machine__11943__auto____1;
return app$db$insertar_categoria_$_state_machine__11943__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_21458 = f__12040__auto__();
(statearr_21458[(6)] = c__12039__auto__);

return statearr_21458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
});
app.db.eliminar_producto = (function app$db$eliminar_producto(id){
var c__12039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__11942__auto__ = (function (state_21483){
var state_val_21484 = (state_21483[(1)]);
if((state_val_21484 === (1))){
var inst_21460 = ["/api/producto/eliminar/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('');
var inst_21461 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"response-format","response-format",1664465322)];
var inst_21462 = [new cljs.core.Keyword(null,"keywords?","keywords?",764949733)];
var inst_21463 = [true];
var inst_21464 = cljs.core.PersistentHashMap.fromArrays(inst_21462,inst_21463);
var inst_21465 = ajax.core.json_response_format(inst_21464);
var inst_21466 = [true,inst_21465];
var inst_21467 = cljs.core.PersistentHashMap.fromArrays(inst_21461,inst_21466);
var inst_21468 = cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(inst_21460,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_21467], 0));
var state_21483__$1 = state_21483;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21483__$1,(2),inst_21468);
} else {
if((state_val_21484 === (2))){
var inst_21470 = (state_21483[(2)]);
var inst_21471 = cljs.core.__destructure_map(inst_21470);
var inst_21472 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21471,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_21473 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21471,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_21474 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_21472);
var state_21483__$1 = (function (){var statearr_21485 = state_21483;
(statearr_21485[(7)] = inst_21473);

return statearr_21485;
})();
if(inst_21474){
var statearr_21486_21674 = state_21483__$1;
(statearr_21486_21674[(1)] = (3));

} else {
var statearr_21487_21675 = state_21483__$1;
(statearr_21487_21675[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21484 === (3))){
var inst_21473 = (state_21483[(7)]);
var inst_21476 = console.log("Producto eliminado",inst_21473);
var inst_21477 = alert("Producto eliminado correctamente, dale a boton de 'Mostrar productos'.");
var state_21483__$1 = (function (){var statearr_21488 = state_21483;
(statearr_21488[(8)] = inst_21476);

return statearr_21488;
})();
var statearr_21489_21676 = state_21483__$1;
(statearr_21489_21676[(2)] = inst_21477);

(statearr_21489_21676[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21484 === (4))){
var inst_21473 = (state_21483[(7)]);
var inst_21479 = console.error("Error al eliminar el producto",inst_21473);
var state_21483__$1 = state_21483;
var statearr_21490_21677 = state_21483__$1;
(statearr_21490_21677[(2)] = inst_21479);

(statearr_21490_21677[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21484 === (5))){
var inst_21481 = (state_21483[(2)]);
var state_21483__$1 = state_21483;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21483__$1,inst_21481);
} else {
return null;
}
}
}
}
}
});
return (function() {
var app$db$eliminar_producto_$_state_machine__11943__auto__ = null;
var app$db$eliminar_producto_$_state_machine__11943__auto____0 = (function (){
var statearr_21491 = [null,null,null,null,null,null,null,null,null];
(statearr_21491[(0)] = app$db$eliminar_producto_$_state_machine__11943__auto__);

(statearr_21491[(1)] = (1));

return statearr_21491;
});
var app$db$eliminar_producto_$_state_machine__11943__auto____1 = (function (state_21483){
while(true){
var ret_value__11944__auto__ = (function (){try{while(true){
var result__11945__auto__ = switch__11942__auto__(state_21483);
if(cljs.core.keyword_identical_QMARK_(result__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11945__auto__;
}
break;
}
}catch (e21492){var ex__11946__auto__ = e21492;
var statearr_21493_21678 = state_21483;
(statearr_21493_21678[(2)] = ex__11946__auto__);


if(cljs.core.seq((state_21483[(4)]))){
var statearr_21494_21679 = state_21483;
(statearr_21494_21679[(1)] = cljs.core.first((state_21483[(4)])));

} else {
throw ex__11946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21680 = state_21483;
state_21483 = G__21680;
continue;
} else {
return ret_value__11944__auto__;
}
break;
}
});
app$db$eliminar_producto_$_state_machine__11943__auto__ = function(state_21483){
switch(arguments.length){
case 0:
return app$db$eliminar_producto_$_state_machine__11943__auto____0.call(this);
case 1:
return app$db$eliminar_producto_$_state_machine__11943__auto____1.call(this,state_21483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$eliminar_producto_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$eliminar_producto_$_state_machine__11943__auto____0;
app$db$eliminar_producto_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$eliminar_producto_$_state_machine__11943__auto____1;
return app$db$eliminar_producto_$_state_machine__11943__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_21495 = f__12040__auto__();
(statearr_21495[(6)] = c__12039__auto__);

return statearr_21495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
});
app.db.activo_producto = (function app$db$activo_producto(id){
var c__12039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__11942__auto__ = (function (state_21526){
var state_val_21527 = (state_21526[(1)]);
if((state_val_21527 === (1))){
var inst_21497 = ["/api/producto/activo/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('');
var inst_21498 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"response-format","response-format",1664465322)];
var inst_21499 = [new cljs.core.Keyword(null,"keywords?","keywords?",764949733)];
var inst_21500 = [true];
var inst_21501 = cljs.core.PersistentHashMap.fromArrays(inst_21499,inst_21500);
var inst_21502 = ajax.core.json_response_format(inst_21501);
var inst_21503 = [true,inst_21502];
var inst_21504 = cljs.core.PersistentHashMap.fromArrays(inst_21498,inst_21503);
var inst_21505 = cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(inst_21497,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_21504], 0));
var state_21526__$1 = state_21526;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21526__$1,(2),inst_21505);
} else {
if((state_val_21527 === (2))){
var inst_21507 = (state_21526[(2)]);
var inst_21508 = cljs.core.__destructure_map(inst_21507);
var inst_21509 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21508,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_21510 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21508,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_21511 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_21509);
var state_21526__$1 = (function (){var statearr_21528 = state_21526;
(statearr_21528[(7)] = inst_21510);

return statearr_21528;
})();
if(inst_21511){
var statearr_21529_21681 = state_21526__$1;
(statearr_21529_21681[(1)] = (3));

} else {
var statearr_21530_21682 = state_21526__$1;
(statearr_21530_21682[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21527 === (3))){
var inst_21510 = (state_21526[(7)]);
var inst_21513 = console.log("Estado actualizado",inst_21510);
var inst_21514 = new cljs.core.Keyword(null,"activo","activo",-1391186334).cljs$core$IFn$_invoke$arity$1(inst_21510);
var state_21526__$1 = (function (){var statearr_21531 = state_21526;
(statearr_21531[(8)] = inst_21513);

return statearr_21531;
})();
if(cljs.core.truth_(inst_21514)){
var statearr_21532_21683 = state_21526__$1;
(statearr_21532_21683[(1)] = (6));

} else {
var statearr_21533_21684 = state_21526__$1;
(statearr_21533_21684[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21527 === (4))){
var inst_21510 = (state_21526[(7)]);
var inst_21522 = console.error("Error al actualizar estado del producto",inst_21510);
var state_21526__$1 = state_21526;
var statearr_21534_21685 = state_21526__$1;
(statearr_21534_21685[(2)] = inst_21522);

(statearr_21534_21685[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21527 === (5))){
var inst_21524 = (state_21526[(2)]);
var state_21526__$1 = state_21526;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21526__$1,inst_21524);
} else {
if((state_val_21527 === (6))){
var state_21526__$1 = state_21526;
var statearr_21535_21686 = state_21526__$1;
(statearr_21535_21686[(2)] = "activado");

(statearr_21535_21686[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21527 === (7))){
var state_21526__$1 = state_21526;
var statearr_21536_21687 = state_21526__$1;
(statearr_21536_21687[(2)] = "desactivado");

(statearr_21536_21687[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21527 === (8))){
var inst_21518 = (state_21526[(2)]);
var inst_21519 = ["Producto ",inst_21518," correctamente"].join('');
var inst_21520 = alert(inst_21519);
var state_21526__$1 = state_21526;
var statearr_21537_21688 = state_21526__$1;
(statearr_21537_21688[(2)] = inst_21520);

(statearr_21537_21688[(1)] = (5));


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
var app$db$activo_producto_$_state_machine__11943__auto__ = null;
var app$db$activo_producto_$_state_machine__11943__auto____0 = (function (){
var statearr_21538 = [null,null,null,null,null,null,null,null,null];
(statearr_21538[(0)] = app$db$activo_producto_$_state_machine__11943__auto__);

(statearr_21538[(1)] = (1));

return statearr_21538;
});
var app$db$activo_producto_$_state_machine__11943__auto____1 = (function (state_21526){
while(true){
var ret_value__11944__auto__ = (function (){try{while(true){
var result__11945__auto__ = switch__11942__auto__(state_21526);
if(cljs.core.keyword_identical_QMARK_(result__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11945__auto__;
}
break;
}
}catch (e21539){var ex__11946__auto__ = e21539;
var statearr_21540_21689 = state_21526;
(statearr_21540_21689[(2)] = ex__11946__auto__);


if(cljs.core.seq((state_21526[(4)]))){
var statearr_21541_21690 = state_21526;
(statearr_21541_21690[(1)] = cljs.core.first((state_21526[(4)])));

} else {
throw ex__11946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21691 = state_21526;
state_21526 = G__21691;
continue;
} else {
return ret_value__11944__auto__;
}
break;
}
});
app$db$activo_producto_$_state_machine__11943__auto__ = function(state_21526){
switch(arguments.length){
case 0:
return app$db$activo_producto_$_state_machine__11943__auto____0.call(this);
case 1:
return app$db$activo_producto_$_state_machine__11943__auto____1.call(this,state_21526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$activo_producto_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$activo_producto_$_state_machine__11943__auto____0;
app$db$activo_producto_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$activo_producto_$_state_machine__11943__auto____1;
return app$db$activo_producto_$_state_machine__11943__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_21542 = f__12040__auto__();
(statearr_21542[(6)] = c__12039__auto__);

return statearr_21542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
});
app.db.activo_categoria = (function app$db$activo_categoria(id){
var c__12039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__11942__auto__ = (function (state_21573){
var state_val_21574 = (state_21573[(1)]);
if((state_val_21574 === (1))){
var inst_21544 = ["/api/categoria/activo/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('');
var inst_21545 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"response-format","response-format",1664465322)];
var inst_21546 = [new cljs.core.Keyword(null,"keywords?","keywords?",764949733)];
var inst_21547 = [true];
var inst_21548 = cljs.core.PersistentHashMap.fromArrays(inst_21546,inst_21547);
var inst_21549 = ajax.core.json_response_format(inst_21548);
var inst_21550 = [true,inst_21549];
var inst_21551 = cljs.core.PersistentHashMap.fromArrays(inst_21545,inst_21550);
var inst_21552 = cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(inst_21544,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_21551], 0));
var state_21573__$1 = state_21573;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21573__$1,(2),inst_21552);
} else {
if((state_val_21574 === (2))){
var inst_21554 = (state_21573[(2)]);
var inst_21555 = cljs.core.__destructure_map(inst_21554);
var inst_21556 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21555,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_21557 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21555,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_21558 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_21556);
var state_21573__$1 = (function (){var statearr_21575 = state_21573;
(statearr_21575[(7)] = inst_21557);

return statearr_21575;
})();
if(inst_21558){
var statearr_21576_21692 = state_21573__$1;
(statearr_21576_21692[(1)] = (3));

} else {
var statearr_21577_21693 = state_21573__$1;
(statearr_21577_21693[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21574 === (3))){
var inst_21557 = (state_21573[(7)]);
var inst_21560 = console.log("Estado actualizado",inst_21557);
var inst_21561 = new cljs.core.Keyword(null,"activo","activo",-1391186334).cljs$core$IFn$_invoke$arity$1(inst_21557);
var state_21573__$1 = (function (){var statearr_21578 = state_21573;
(statearr_21578[(8)] = inst_21560);

return statearr_21578;
})();
if(cljs.core.truth_(inst_21561)){
var statearr_21579_21694 = state_21573__$1;
(statearr_21579_21694[(1)] = (6));

} else {
var statearr_21580_21695 = state_21573__$1;
(statearr_21580_21695[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21574 === (4))){
var inst_21557 = (state_21573[(7)]);
var inst_21569 = console.error("Error al actualizar estado de la categoria",inst_21557);
var state_21573__$1 = state_21573;
var statearr_21581_21696 = state_21573__$1;
(statearr_21581_21696[(2)] = inst_21569);

(statearr_21581_21696[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21574 === (5))){
var inst_21571 = (state_21573[(2)]);
var state_21573__$1 = state_21573;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21573__$1,inst_21571);
} else {
if((state_val_21574 === (6))){
var state_21573__$1 = state_21573;
var statearr_21582_21697 = state_21573__$1;
(statearr_21582_21697[(2)] = "activada");

(statearr_21582_21697[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21574 === (7))){
var state_21573__$1 = state_21573;
var statearr_21583_21698 = state_21573__$1;
(statearr_21583_21698[(2)] = "desactivada");

(statearr_21583_21698[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21574 === (8))){
var inst_21565 = (state_21573[(2)]);
var inst_21566 = ["Categoria ",inst_21565," correctamente."].join('');
var inst_21567 = alert(inst_21566);
var state_21573__$1 = state_21573;
var statearr_21584_21699 = state_21573__$1;
(statearr_21584_21699[(2)] = inst_21567);

(statearr_21584_21699[(1)] = (5));


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
var app$db$activo_categoria_$_state_machine__11943__auto__ = null;
var app$db$activo_categoria_$_state_machine__11943__auto____0 = (function (){
var statearr_21585 = [null,null,null,null,null,null,null,null,null];
(statearr_21585[(0)] = app$db$activo_categoria_$_state_machine__11943__auto__);

(statearr_21585[(1)] = (1));

return statearr_21585;
});
var app$db$activo_categoria_$_state_machine__11943__auto____1 = (function (state_21573){
while(true){
var ret_value__11944__auto__ = (function (){try{while(true){
var result__11945__auto__ = switch__11942__auto__(state_21573);
if(cljs.core.keyword_identical_QMARK_(result__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11945__auto__;
}
break;
}
}catch (e21586){var ex__11946__auto__ = e21586;
var statearr_21587_21700 = state_21573;
(statearr_21587_21700[(2)] = ex__11946__auto__);


if(cljs.core.seq((state_21573[(4)]))){
var statearr_21588_21701 = state_21573;
(statearr_21588_21701[(1)] = cljs.core.first((state_21573[(4)])));

} else {
throw ex__11946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21702 = state_21573;
state_21573 = G__21702;
continue;
} else {
return ret_value__11944__auto__;
}
break;
}
});
app$db$activo_categoria_$_state_machine__11943__auto__ = function(state_21573){
switch(arguments.length){
case 0:
return app$db$activo_categoria_$_state_machine__11943__auto____0.call(this);
case 1:
return app$db$activo_categoria_$_state_machine__11943__auto____1.call(this,state_21573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$activo_categoria_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$activo_categoria_$_state_machine__11943__auto____0;
app$db$activo_categoria_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$activo_categoria_$_state_machine__11943__auto____1;
return app$db$activo_categoria_$_state_machine__11943__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_21589 = f__12040__auto__();
(statearr_21589[(6)] = c__12039__auto__);

return statearr_21589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
});
app.db.eliminar_categoria = (function app$db$eliminar_categoria(id){
var c__12039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__11942__auto__ = (function (state_21614){
var state_val_21615 = (state_21614[(1)]);
if((state_val_21615 === (1))){
var inst_21591 = ["/api/categoria/eliminar/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('');
var inst_21592 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"response-format","response-format",1664465322)];
var inst_21593 = [new cljs.core.Keyword(null,"keywords?","keywords?",764949733)];
var inst_21594 = [true];
var inst_21595 = cljs.core.PersistentHashMap.fromArrays(inst_21593,inst_21594);
var inst_21596 = ajax.core.json_response_format(inst_21595);
var inst_21597 = [true,inst_21596];
var inst_21598 = cljs.core.PersistentHashMap.fromArrays(inst_21592,inst_21597);
var inst_21599 = cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(inst_21591,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_21598], 0));
var state_21614__$1 = state_21614;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21614__$1,(2),inst_21599);
} else {
if((state_val_21615 === (2))){
var inst_21601 = (state_21614[(2)]);
var inst_21602 = cljs.core.__destructure_map(inst_21601);
var inst_21603 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21602,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_21604 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21602,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_21605 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_21603);
var state_21614__$1 = (function (){var statearr_21616 = state_21614;
(statearr_21616[(7)] = inst_21604);

return statearr_21616;
})();
if(inst_21605){
var statearr_21617_21703 = state_21614__$1;
(statearr_21617_21703[(1)] = (3));

} else {
var statearr_21618_21704 = state_21614__$1;
(statearr_21618_21704[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21615 === (3))){
var inst_21604 = (state_21614[(7)]);
var inst_21607 = console.log("Categor\u00EDa eliminada",inst_21604);
var inst_21608 = alert("Categor\u00EDa eliminada correctamente, dale a boton de 'Mostrar categorias'.");
var state_21614__$1 = (function (){var statearr_21619 = state_21614;
(statearr_21619[(8)] = inst_21607);

return statearr_21619;
})();
var statearr_21620_21705 = state_21614__$1;
(statearr_21620_21705[(2)] = inst_21608);

(statearr_21620_21705[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21615 === (4))){
var inst_21604 = (state_21614[(7)]);
var inst_21610 = console.error("Error al eliminar categor\u00EDa",inst_21604);
var state_21614__$1 = state_21614;
var statearr_21621_21706 = state_21614__$1;
(statearr_21621_21706[(2)] = inst_21610);

(statearr_21621_21706[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21615 === (5))){
var inst_21612 = (state_21614[(2)]);
var state_21614__$1 = state_21614;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21614__$1,inst_21612);
} else {
return null;
}
}
}
}
}
});
return (function() {
var app$db$eliminar_categoria_$_state_machine__11943__auto__ = null;
var app$db$eliminar_categoria_$_state_machine__11943__auto____0 = (function (){
var statearr_21622 = [null,null,null,null,null,null,null,null,null];
(statearr_21622[(0)] = app$db$eliminar_categoria_$_state_machine__11943__auto__);

(statearr_21622[(1)] = (1));

return statearr_21622;
});
var app$db$eliminar_categoria_$_state_machine__11943__auto____1 = (function (state_21614){
while(true){
var ret_value__11944__auto__ = (function (){try{while(true){
var result__11945__auto__ = switch__11942__auto__(state_21614);
if(cljs.core.keyword_identical_QMARK_(result__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11945__auto__;
}
break;
}
}catch (e21623){var ex__11946__auto__ = e21623;
var statearr_21624_21707 = state_21614;
(statearr_21624_21707[(2)] = ex__11946__auto__);


if(cljs.core.seq((state_21614[(4)]))){
var statearr_21625_21708 = state_21614;
(statearr_21625_21708[(1)] = cljs.core.first((state_21614[(4)])));

} else {
throw ex__11946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21709 = state_21614;
state_21614 = G__21709;
continue;
} else {
return ret_value__11944__auto__;
}
break;
}
});
app$db$eliminar_categoria_$_state_machine__11943__auto__ = function(state_21614){
switch(arguments.length){
case 0:
return app$db$eliminar_categoria_$_state_machine__11943__auto____0.call(this);
case 1:
return app$db$eliminar_categoria_$_state_machine__11943__auto____1.call(this,state_21614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$eliminar_categoria_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$eliminar_categoria_$_state_machine__11943__auto____0;
app$db$eliminar_categoria_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$eliminar_categoria_$_state_machine__11943__auto____1;
return app$db$eliminar_categoria_$_state_machine__11943__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_21626 = f__12040__auto__();
(statearr_21626[(6)] = c__12039__auto__);

return statearr_21626;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
});
app.db.descargar_pdf = (function app$db$descargar_pdf(productos_ids,categoria_seleccionada){
var body_json = JSON.stringify(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"productos","productos",-1282966179),productos_ids,new cljs.core.Keyword(null,"categoria","categoria",1019034182),categoria_seleccionada], null)));
return fetch("/api/generar-pdf",cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),true,new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"headers","headers",-835030129),({"Content-Type": "application/json"}),new cljs.core.Keyword(null,"body","body",-2049205669),body_json], null))).then((function (response){
if(cljs.core.truth_(response.ok)){
return response.blob();
} else {
throw (new Error("Respuesta fallida del servidor"));
}
})).then((function (blob){
var url = URL.createObjectURL(blob);
var link = document.createElement("a");
(link.href = url);

(link.download = "productos_filtrados.pdf");

link.click();

return URL.revokeObjectURL(url);
})).catch((function (p1__21627_SHARP_){
return alert(["Error al generar el PDF: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__21627_SHARP_)].join(''));
}));
});

//# sourceMappingURL=app.db.js.map
