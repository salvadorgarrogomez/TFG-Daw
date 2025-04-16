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
var f__12040__auto__ = (function (){var switch__11942__auto__ = (function (state_26294){
var state_val_26295 = (state_26294[(1)]);
if((state_val_26295 === (1))){
var inst_26271 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"response-format","response-format",1664465322)];
var inst_26272 = [new cljs.core.Keyword(null,"keywords?","keywords?",764949733)];
var inst_26273 = [true];
var inst_26274 = cljs.core.PersistentHashMap.fromArrays(inst_26272,inst_26273);
var inst_26275 = ajax.core.json_response_format(inst_26274);
var inst_26276 = [false,inst_26275];
var inst_26277 = cljs.core.PersistentHashMap.fromArrays(inst_26271,inst_26276);
var inst_26278 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic("/api/categorias/",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_26277], 0));
var state_26294__$1 = state_26294;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26294__$1,(2),inst_26278);
} else {
if((state_val_26295 === (2))){
var inst_26280 = (state_26294[(2)]);
var inst_26281 = cljs.core.__destructure_map(inst_26280);
var inst_26282 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26281,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_26283 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26281,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_26284 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_26282);
var state_26294__$1 = (function (){var statearr_26296 = state_26294;
(statearr_26296[(7)] = inst_26283);

return statearr_26296;
})();
if(inst_26284){
var statearr_26297_26430 = state_26294__$1;
(statearr_26297_26430[(1)] = (3));

} else {
var statearr_26298_26431 = state_26294__$1;
(statearr_26298_26431[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26295 === (3))){
var inst_26283 = (state_26294[(7)]);
var inst_26286 = cljs.core.reset_BANG_(app.db.categorias,inst_26283);
var inst_26287 = cljs.core.deref(app.db.categorias);
var inst_26288 = console.log("Categor\u00EDas actualizadas:",inst_26287);
var state_26294__$1 = (function (){var statearr_26299 = state_26294;
(statearr_26299[(8)] = inst_26286);

return statearr_26299;
})();
var statearr_26300_26432 = state_26294__$1;
(statearr_26300_26432[(2)] = inst_26288);

(statearr_26300_26432[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26295 === (4))){
var inst_26290 = console.error("Error al obtener categor\u00EDas");
var state_26294__$1 = state_26294;
var statearr_26301_26433 = state_26294__$1;
(statearr_26301_26433[(2)] = inst_26290);

(statearr_26301_26433[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26295 === (5))){
var inst_26292 = (state_26294[(2)]);
var state_26294__$1 = state_26294;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26294__$1,inst_26292);
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
var statearr_26302 = [null,null,null,null,null,null,null,null,null];
(statearr_26302[(0)] = app$db$fetch_categorias_$_state_machine__11943__auto__);

(statearr_26302[(1)] = (1));

return statearr_26302;
});
var app$db$fetch_categorias_$_state_machine__11943__auto____1 = (function (state_26294){
while(true){
var ret_value__11944__auto__ = (function (){try{while(true){
var result__11945__auto__ = switch__11942__auto__(state_26294);
if(cljs.core.keyword_identical_QMARK_(result__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11945__auto__;
}
break;
}
}catch (e26303){var ex__11946__auto__ = e26303;
var statearr_26304_26434 = state_26294;
(statearr_26304_26434[(2)] = ex__11946__auto__);


if(cljs.core.seq((state_26294[(4)]))){
var statearr_26305_26435 = state_26294;
(statearr_26305_26435[(1)] = cljs.core.first((state_26294[(4)])));

} else {
throw ex__11946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26436 = state_26294;
state_26294 = G__26436;
continue;
} else {
return ret_value__11944__auto__;
}
break;
}
});
app$db$fetch_categorias_$_state_machine__11943__auto__ = function(state_26294){
switch(arguments.length){
case 0:
return app$db$fetch_categorias_$_state_machine__11943__auto____0.call(this);
case 1:
return app$db$fetch_categorias_$_state_machine__11943__auto____1.call(this,state_26294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$fetch_categorias_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$fetch_categorias_$_state_machine__11943__auto____0;
app$db$fetch_categorias_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$fetch_categorias_$_state_machine__11943__auto____1;
return app$db$fetch_categorias_$_state_machine__11943__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_26306 = f__12040__auto__();
(statearr_26306[(6)] = c__12039__auto__);

return statearr_26306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
});
app.db.fetch_list_categorias = (function app$db$fetch_list_categorias(){
console.log("Llamando a fetch-categorias...");

var c__12039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__11942__auto__ = (function (state_26331){
var state_val_26332 = (state_26331[(1)]);
if((state_val_26332 === (1))){
var inst_26308 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"response-format","response-format",1664465322)];
var inst_26309 = [new cljs.core.Keyword(null,"keywords?","keywords?",764949733)];
var inst_26310 = [true];
var inst_26311 = cljs.core.PersistentHashMap.fromArrays(inst_26309,inst_26310);
var inst_26312 = ajax.core.json_response_format(inst_26311);
var inst_26313 = [false,inst_26312];
var inst_26314 = cljs.core.PersistentHashMap.fromArrays(inst_26308,inst_26313);
var inst_26315 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic("/api/todas_categorias",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_26314], 0));
var state_26331__$1 = state_26331;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26331__$1,(2),inst_26315);
} else {
if((state_val_26332 === (2))){
var inst_26317 = (state_26331[(2)]);
var inst_26318 = cljs.core.__destructure_map(inst_26317);
var inst_26319 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26318,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_26320 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26318,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_26321 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_26319);
var state_26331__$1 = (function (){var statearr_26333 = state_26331;
(statearr_26333[(7)] = inst_26320);

return statearr_26333;
})();
if(inst_26321){
var statearr_26334_26438 = state_26331__$1;
(statearr_26334_26438[(1)] = (3));

} else {
var statearr_26335_26439 = state_26331__$1;
(statearr_26335_26439[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26332 === (3))){
var inst_26320 = (state_26331[(7)]);
var inst_26323 = cljs.core.reset_BANG_(app.db.categorias,inst_26320);
var inst_26324 = cljs.core.deref(app.db.categorias);
var inst_26325 = console.log("Categor\u00EDas actualizadas:",inst_26324);
var state_26331__$1 = (function (){var statearr_26336 = state_26331;
(statearr_26336[(8)] = inst_26323);

return statearr_26336;
})();
var statearr_26337_26440 = state_26331__$1;
(statearr_26337_26440[(2)] = inst_26325);

(statearr_26337_26440[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26332 === (4))){
var inst_26327 = console.error("Error al obtener categor\u00EDas");
var state_26331__$1 = state_26331;
var statearr_26338_26441 = state_26331__$1;
(statearr_26338_26441[(2)] = inst_26327);

(statearr_26338_26441[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26332 === (5))){
var inst_26329 = (state_26331[(2)]);
var state_26331__$1 = state_26331;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26331__$1,inst_26329);
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
var statearr_26339 = [null,null,null,null,null,null,null,null,null];
(statearr_26339[(0)] = app$db$fetch_list_categorias_$_state_machine__11943__auto__);

(statearr_26339[(1)] = (1));

return statearr_26339;
});
var app$db$fetch_list_categorias_$_state_machine__11943__auto____1 = (function (state_26331){
while(true){
var ret_value__11944__auto__ = (function (){try{while(true){
var result__11945__auto__ = switch__11942__auto__(state_26331);
if(cljs.core.keyword_identical_QMARK_(result__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11945__auto__;
}
break;
}
}catch (e26340){var ex__11946__auto__ = e26340;
var statearr_26341_26442 = state_26331;
(statearr_26341_26442[(2)] = ex__11946__auto__);


if(cljs.core.seq((state_26331[(4)]))){
var statearr_26342_26443 = state_26331;
(statearr_26342_26443[(1)] = cljs.core.first((state_26331[(4)])));

} else {
throw ex__11946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26444 = state_26331;
state_26331 = G__26444;
continue;
} else {
return ret_value__11944__auto__;
}
break;
}
});
app$db$fetch_list_categorias_$_state_machine__11943__auto__ = function(state_26331){
switch(arguments.length){
case 0:
return app$db$fetch_list_categorias_$_state_machine__11943__auto____0.call(this);
case 1:
return app$db$fetch_list_categorias_$_state_machine__11943__auto____1.call(this,state_26331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$fetch_list_categorias_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$fetch_list_categorias_$_state_machine__11943__auto____0;
app$db$fetch_list_categorias_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$fetch_list_categorias_$_state_machine__11943__auto____1;
return app$db$fetch_list_categorias_$_state_machine__11943__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_26343 = f__12040__auto__();
(statearr_26343[(6)] = c__12039__auto__);

return statearr_26343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
});
app.db.fetch_productos = (function app$db$fetch_productos(categoria_id){
console.log("Llamando a fetch-productos para categor\u00EDa:",categoria_id);

var c__12039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__11942__auto__ = (function (state_26375){
var state_val_26376 = (state_26375[(1)]);
if((state_val_26376 === (1))){
var inst_26345 = ["/api/productos/categoria/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(categoria_id)].join('');
var inst_26346 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"response-format","response-format",1664465322)];
var inst_26347 = [new cljs.core.Keyword(null,"keywords?","keywords?",764949733)];
var inst_26348 = [true];
var inst_26349 = cljs.core.PersistentHashMap.fromArrays(inst_26347,inst_26348);
var inst_26350 = ajax.core.json_response_format(inst_26349);
var inst_26351 = [false,inst_26350];
var inst_26352 = cljs.core.PersistentHashMap.fromArrays(inst_26346,inst_26351);
var inst_26353 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_26345,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_26352], 0));
var state_26375__$1 = state_26375;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26375__$1,(2),inst_26353);
} else {
if((state_val_26376 === (2))){
var inst_26355 = (state_26375[(2)]);
var inst_26356 = cljs.core.__destructure_map(inst_26355);
var inst_26357 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26356,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_26358 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26356,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_26359 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_26357);
var state_26375__$1 = (function (){var statearr_26377 = state_26375;
(statearr_26377[(7)] = inst_26358);

return statearr_26377;
})();
if(inst_26359){
var statearr_26378_26445 = state_26375__$1;
(statearr_26378_26445[(1)] = (3));

} else {
var statearr_26379_26446 = state_26375__$1;
(statearr_26379_26446[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26376 === (3))){
var inst_26358 = (state_26375[(7)]);
var inst_26361 = cljs.core.map_QMARK_(inst_26358);
var state_26375__$1 = state_26375;
if(inst_26361){
var statearr_26380_26447 = state_26375__$1;
(statearr_26380_26447[(1)] = (6));

} else {
var statearr_26381_26448 = state_26375__$1;
(statearr_26381_26448[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26376 === (4))){
var inst_26371 = console.error("Error al obtener productos");
var state_26375__$1 = state_26375;
var statearr_26382_26449 = state_26375__$1;
(statearr_26382_26449[(2)] = inst_26371);

(statearr_26382_26449[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26376 === (5))){
var inst_26373 = (state_26375[(2)]);
var state_26375__$1 = state_26375;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26375__$1,inst_26373);
} else {
if((state_val_26376 === (6))){
var inst_26358 = (state_26375[(7)]);
var inst_26363 = new cljs.core.Keyword(null,"productos","productos",-1282966179).cljs$core$IFn$_invoke$arity$1(inst_26358);
var state_26375__$1 = state_26375;
var statearr_26383_26450 = state_26375__$1;
(statearr_26383_26450[(2)] = inst_26363);

(statearr_26383_26450[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26376 === (7))){
var inst_26358 = (state_26375[(7)]);
var state_26375__$1 = state_26375;
var statearr_26384_26451 = state_26375__$1;
(statearr_26384_26451[(2)] = inst_26358);

(statearr_26384_26451[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26376 === (8))){
var inst_26366 = (state_26375[(2)]);
var inst_26367 = cljs.core.reset_BANG_(app.db.productos,inst_26366);
var inst_26368 = cljs.core.deref(app.db.productos);
var inst_26369 = console.log("Productos actualizados:",inst_26368);
var state_26375__$1 = (function (){var statearr_26385 = state_26375;
(statearr_26385[(8)] = inst_26367);

return statearr_26385;
})();
var statearr_26386_26456 = state_26375__$1;
(statearr_26386_26456[(2)] = inst_26369);

(statearr_26386_26456[(1)] = (5));


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
var statearr_26387 = [null,null,null,null,null,null,null,null,null];
(statearr_26387[(0)] = app$db$fetch_productos_$_state_machine__11943__auto__);

(statearr_26387[(1)] = (1));

return statearr_26387;
});
var app$db$fetch_productos_$_state_machine__11943__auto____1 = (function (state_26375){
while(true){
var ret_value__11944__auto__ = (function (){try{while(true){
var result__11945__auto__ = switch__11942__auto__(state_26375);
if(cljs.core.keyword_identical_QMARK_(result__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11945__auto__;
}
break;
}
}catch (e26388){var ex__11946__auto__ = e26388;
var statearr_26389_26457 = state_26375;
(statearr_26389_26457[(2)] = ex__11946__auto__);


if(cljs.core.seq((state_26375[(4)]))){
var statearr_26390_26458 = state_26375;
(statearr_26390_26458[(1)] = cljs.core.first((state_26375[(4)])));

} else {
throw ex__11946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26459 = state_26375;
state_26375 = G__26459;
continue;
} else {
return ret_value__11944__auto__;
}
break;
}
});
app$db$fetch_productos_$_state_machine__11943__auto__ = function(state_26375){
switch(arguments.length){
case 0:
return app$db$fetch_productos_$_state_machine__11943__auto____0.call(this);
case 1:
return app$db$fetch_productos_$_state_machine__11943__auto____1.call(this,state_26375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$fetch_productos_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$fetch_productos_$_state_machine__11943__auto____0;
app$db$fetch_productos_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$fetch_productos_$_state_machine__11943__auto____1;
return app$db$fetch_productos_$_state_machine__11943__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_26391 = f__12040__auto__();
(statearr_26391[(6)] = c__12039__auto__);

return statearr_26391;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
});
app.db.fetch_list_productos = (function app$db$fetch_list_productos(){
console.log("Llamando a fetch-list-productos...");

var c__12039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__11942__auto__ = (function (state_26416){
var state_val_26417 = (state_26416[(1)]);
if((state_val_26417 === (1))){
var inst_26393 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"response-format","response-format",1664465322)];
var inst_26394 = [new cljs.core.Keyword(null,"keywords?","keywords?",764949733)];
var inst_26395 = [true];
var inst_26396 = cljs.core.PersistentHashMap.fromArrays(inst_26394,inst_26395);
var inst_26397 = ajax.core.json_response_format(inst_26396);
var inst_26398 = [false,inst_26397];
var inst_26399 = cljs.core.PersistentHashMap.fromArrays(inst_26393,inst_26398);
var inst_26400 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic("/api/productos/",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_26399], 0));
var state_26416__$1 = state_26416;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26416__$1,(2),inst_26400);
} else {
if((state_val_26417 === (2))){
var inst_26402 = (state_26416[(2)]);
var inst_26403 = cljs.core.__destructure_map(inst_26402);
var inst_26404 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26403,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_26405 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26403,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_26406 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_26404);
var state_26416__$1 = (function (){var statearr_26418 = state_26416;
(statearr_26418[(7)] = inst_26405);

return statearr_26418;
})();
if(inst_26406){
var statearr_26419_26460 = state_26416__$1;
(statearr_26419_26460[(1)] = (3));

} else {
var statearr_26420_26461 = state_26416__$1;
(statearr_26420_26461[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26417 === (3))){
var inst_26405 = (state_26416[(7)]);
var inst_26408 = cljs.core.reset_BANG_(app.db.list_productos,inst_26405);
var inst_26409 = cljs.core.deref(app.db.categorias);
var inst_26410 = console.log("Productos actualizados:",inst_26409);
var state_26416__$1 = (function (){var statearr_26421 = state_26416;
(statearr_26421[(8)] = inst_26408);

return statearr_26421;
})();
var statearr_26422_26462 = state_26416__$1;
(statearr_26422_26462[(2)] = inst_26410);

(statearr_26422_26462[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26417 === (4))){
var inst_26412 = console.error("Error al obtener productos");
var state_26416__$1 = state_26416;
var statearr_26423_26463 = state_26416__$1;
(statearr_26423_26463[(2)] = inst_26412);

(statearr_26423_26463[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26417 === (5))){
var inst_26414 = (state_26416[(2)]);
var state_26416__$1 = state_26416;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26416__$1,inst_26414);
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
var statearr_26424 = [null,null,null,null,null,null,null,null,null];
(statearr_26424[(0)] = app$db$fetch_list_productos_$_state_machine__11943__auto__);

(statearr_26424[(1)] = (1));

return statearr_26424;
});
var app$db$fetch_list_productos_$_state_machine__11943__auto____1 = (function (state_26416){
while(true){
var ret_value__11944__auto__ = (function (){try{while(true){
var result__11945__auto__ = switch__11942__auto__(state_26416);
if(cljs.core.keyword_identical_QMARK_(result__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11945__auto__;
}
break;
}
}catch (e26425){var ex__11946__auto__ = e26425;
var statearr_26426_26468 = state_26416;
(statearr_26426_26468[(2)] = ex__11946__auto__);


if(cljs.core.seq((state_26416[(4)]))){
var statearr_26427_26469 = state_26416;
(statearr_26427_26469[(1)] = cljs.core.first((state_26416[(4)])));

} else {
throw ex__11946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26470 = state_26416;
state_26416 = G__26470;
continue;
} else {
return ret_value__11944__auto__;
}
break;
}
});
app$db$fetch_list_productos_$_state_machine__11943__auto__ = function(state_26416){
switch(arguments.length){
case 0:
return app$db$fetch_list_productos_$_state_machine__11943__auto____0.call(this);
case 1:
return app$db$fetch_list_productos_$_state_machine__11943__auto____1.call(this,state_26416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$fetch_list_productos_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$fetch_list_productos_$_state_machine__11943__auto____0;
app$db$fetch_list_productos_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$fetch_list_productos_$_state_machine__11943__auto____1;
return app$db$fetch_list_productos_$_state_machine__11943__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_26428 = f__12040__auto__();
(statearr_26428[(6)] = c__12039__auto__);

return statearr_26428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
});
app.db.cargar_imagenes = (function app$db$cargar_imagenes(){
console.log("Llamando a cargar-imagenes...");

return fetch("/api/imagenes").then((function (p1__26429_SHARP_){
return p1__26429_SHARP_.json();
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
