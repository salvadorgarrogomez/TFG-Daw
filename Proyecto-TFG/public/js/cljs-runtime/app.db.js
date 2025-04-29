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
var f__12040__auto__ = (function (){var switch__12016__auto__ = (function (state_40371){
var state_val_40372 = (state_40371[(1)]);
if((state_val_40372 === (1))){
var inst_40348 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"response-format","response-format",1664465322)];
var inst_40349 = [new cljs.core.Keyword(null,"keywords?","keywords?",764949733)];
var inst_40350 = [true];
var inst_40351 = cljs.core.PersistentHashMap.fromArrays(inst_40349,inst_40350);
var inst_40352 = ajax.core.json_response_format(inst_40351);
var inst_40353 = [true,inst_40352];
var inst_40354 = cljs.core.PersistentHashMap.fromArrays(inst_40348,inst_40353);
var inst_40355 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic("/api/categorias/",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_40354], 0));
var state_40371__$1 = state_40371;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40371__$1,(2),inst_40355);
} else {
if((state_val_40372 === (2))){
var inst_40357 = (state_40371[(2)]);
var inst_40358 = cljs.core.__destructure_map(inst_40357);
var inst_40359 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40358,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_40360 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40358,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_40361 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_40359);
var state_40371__$1 = (function (){var statearr_40373 = state_40371;
(statearr_40373[(7)] = inst_40360);

return statearr_40373;
})();
if(inst_40361){
var statearr_40374_40750 = state_40371__$1;
(statearr_40374_40750[(1)] = (3));

} else {
var statearr_40375_40751 = state_40371__$1;
(statearr_40375_40751[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40372 === (3))){
var inst_40360 = (state_40371[(7)]);
var inst_40363 = cljs.core.reset_BANG_(app.db.categorias,inst_40360);
var inst_40364 = cljs.core.deref(app.db.categorias);
var inst_40365 = console.log("Categor\u00EDas actualizadas:",inst_40364);
var state_40371__$1 = (function (){var statearr_40376 = state_40371;
(statearr_40376[(8)] = inst_40363);

return statearr_40376;
})();
var statearr_40377_40752 = state_40371__$1;
(statearr_40377_40752[(2)] = inst_40365);

(statearr_40377_40752[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40372 === (4))){
var inst_40367 = console.error("Error al obtener categor\u00EDas");
var state_40371__$1 = state_40371;
var statearr_40378_40753 = state_40371__$1;
(statearr_40378_40753[(2)] = inst_40367);

(statearr_40378_40753[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40372 === (5))){
var inst_40369 = (state_40371[(2)]);
var state_40371__$1 = state_40371;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40371__$1,inst_40369);
} else {
return null;
}
}
}
}
}
});
return (function() {
var app$db$fetch_categorias_$_state_machine__12017__auto__ = null;
var app$db$fetch_categorias_$_state_machine__12017__auto____0 = (function (){
var statearr_40379 = [null,null,null,null,null,null,null,null,null];
(statearr_40379[(0)] = app$db$fetch_categorias_$_state_machine__12017__auto__);

(statearr_40379[(1)] = (1));

return statearr_40379;
});
var app$db$fetch_categorias_$_state_machine__12017__auto____1 = (function (state_40371){
while(true){
var ret_value__12018__auto__ = (function (){try{while(true){
var result__12019__auto__ = switch__12016__auto__(state_40371);
if(cljs.core.keyword_identical_QMARK_(result__12019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12019__auto__;
}
break;
}
}catch (e40380){var ex__12020__auto__ = e40380;
var statearr_40381_40754 = state_40371;
(statearr_40381_40754[(2)] = ex__12020__auto__);


if(cljs.core.seq((state_40371[(4)]))){
var statearr_40382_40755 = state_40371;
(statearr_40382_40755[(1)] = cljs.core.first((state_40371[(4)])));

} else {
throw ex__12020__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40756 = state_40371;
state_40371 = G__40756;
continue;
} else {
return ret_value__12018__auto__;
}
break;
}
});
app$db$fetch_categorias_$_state_machine__12017__auto__ = function(state_40371){
switch(arguments.length){
case 0:
return app$db$fetch_categorias_$_state_machine__12017__auto____0.call(this);
case 1:
return app$db$fetch_categorias_$_state_machine__12017__auto____1.call(this,state_40371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$fetch_categorias_$_state_machine__12017__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$fetch_categorias_$_state_machine__12017__auto____0;
app$db$fetch_categorias_$_state_machine__12017__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$fetch_categorias_$_state_machine__12017__auto____1;
return app$db$fetch_categorias_$_state_machine__12017__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_40383 = f__12040__auto__();
(statearr_40383[(6)] = c__12039__auto__);

return statearr_40383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
});
app.db.fetch_list_categorias = (function app$db$fetch_list_categorias(){
console.log("Llamando a fetch-categorias...");

var c__12039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__12016__auto__ = (function (state_40408){
var state_val_40409 = (state_40408[(1)]);
if((state_val_40409 === (1))){
var inst_40385 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"response-format","response-format",1664465322)];
var inst_40386 = [new cljs.core.Keyword(null,"keywords?","keywords?",764949733)];
var inst_40387 = [true];
var inst_40388 = cljs.core.PersistentHashMap.fromArrays(inst_40386,inst_40387);
var inst_40389 = ajax.core.json_response_format(inst_40388);
var inst_40390 = [true,inst_40389];
var inst_40391 = cljs.core.PersistentHashMap.fromArrays(inst_40385,inst_40390);
var inst_40392 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic("/api/categorias/todas",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_40391], 0));
var state_40408__$1 = state_40408;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40408__$1,(2),inst_40392);
} else {
if((state_val_40409 === (2))){
var inst_40394 = (state_40408[(2)]);
var inst_40395 = cljs.core.__destructure_map(inst_40394);
var inst_40396 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40395,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_40397 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40395,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_40398 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_40396);
var state_40408__$1 = (function (){var statearr_40410 = state_40408;
(statearr_40410[(7)] = inst_40397);

return statearr_40410;
})();
if(inst_40398){
var statearr_40411_40757 = state_40408__$1;
(statearr_40411_40757[(1)] = (3));

} else {
var statearr_40412_40758 = state_40408__$1;
(statearr_40412_40758[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40409 === (3))){
var inst_40397 = (state_40408[(7)]);
var inst_40400 = cljs.core.reset_BANG_(app.db.categorias,inst_40397);
var inst_40401 = cljs.core.deref(app.db.categorias);
var inst_40402 = console.log("Categor\u00EDas actualizadas:",inst_40401);
var state_40408__$1 = (function (){var statearr_40413 = state_40408;
(statearr_40413[(8)] = inst_40400);

return statearr_40413;
})();
var statearr_40414_40759 = state_40408__$1;
(statearr_40414_40759[(2)] = inst_40402);

(statearr_40414_40759[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40409 === (4))){
var inst_40404 = console.error("Error al obtener categor\u00EDas");
var state_40408__$1 = state_40408;
var statearr_40415_40760 = state_40408__$1;
(statearr_40415_40760[(2)] = inst_40404);

(statearr_40415_40760[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40409 === (5))){
var inst_40406 = (state_40408[(2)]);
var state_40408__$1 = state_40408;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40408__$1,inst_40406);
} else {
return null;
}
}
}
}
}
});
return (function() {
var app$db$fetch_list_categorias_$_state_machine__12017__auto__ = null;
var app$db$fetch_list_categorias_$_state_machine__12017__auto____0 = (function (){
var statearr_40416 = [null,null,null,null,null,null,null,null,null];
(statearr_40416[(0)] = app$db$fetch_list_categorias_$_state_machine__12017__auto__);

(statearr_40416[(1)] = (1));

return statearr_40416;
});
var app$db$fetch_list_categorias_$_state_machine__12017__auto____1 = (function (state_40408){
while(true){
var ret_value__12018__auto__ = (function (){try{while(true){
var result__12019__auto__ = switch__12016__auto__(state_40408);
if(cljs.core.keyword_identical_QMARK_(result__12019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12019__auto__;
}
break;
}
}catch (e40417){var ex__12020__auto__ = e40417;
var statearr_40418_40761 = state_40408;
(statearr_40418_40761[(2)] = ex__12020__auto__);


if(cljs.core.seq((state_40408[(4)]))){
var statearr_40419_40762 = state_40408;
(statearr_40419_40762[(1)] = cljs.core.first((state_40408[(4)])));

} else {
throw ex__12020__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40763 = state_40408;
state_40408 = G__40763;
continue;
} else {
return ret_value__12018__auto__;
}
break;
}
});
app$db$fetch_list_categorias_$_state_machine__12017__auto__ = function(state_40408){
switch(arguments.length){
case 0:
return app$db$fetch_list_categorias_$_state_machine__12017__auto____0.call(this);
case 1:
return app$db$fetch_list_categorias_$_state_machine__12017__auto____1.call(this,state_40408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$fetch_list_categorias_$_state_machine__12017__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$fetch_list_categorias_$_state_machine__12017__auto____0;
app$db$fetch_list_categorias_$_state_machine__12017__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$fetch_list_categorias_$_state_machine__12017__auto____1;
return app$db$fetch_list_categorias_$_state_machine__12017__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_40420 = f__12040__auto__();
(statearr_40420[(6)] = c__12039__auto__);

return statearr_40420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
});
app.db.fetch_productos = (function app$db$fetch_productos(categoria_id){
console.log("Llamando a fetch-productos para categor\u00EDa:",categoria_id);

var c__12039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__12016__auto__ = (function (state_40454){
var state_val_40455 = (state_40454[(1)]);
if((state_val_40455 === (1))){
var inst_40422 = ["/api/productos/categoria/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(categoria_id)].join('');
var inst_40423 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"response-format","response-format",1664465322)];
var inst_40424 = [new cljs.core.Keyword(null,"keywords?","keywords?",764949733)];
var inst_40425 = [true];
var inst_40426 = cljs.core.PersistentHashMap.fromArrays(inst_40424,inst_40425);
var inst_40427 = ajax.core.json_response_format(inst_40426);
var inst_40428 = [true,inst_40427];
var inst_40429 = cljs.core.PersistentHashMap.fromArrays(inst_40423,inst_40428);
var inst_40430 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_40422,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_40429], 0));
var state_40454__$1 = state_40454;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40454__$1,(2),inst_40430);
} else {
if((state_val_40455 === (2))){
var inst_40432 = (state_40454[(2)]);
var inst_40433 = cljs.core.__destructure_map(inst_40432);
var inst_40434 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40433,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_40435 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40433,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_40436 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_40434);
var state_40454__$1 = (function (){var statearr_40456 = state_40454;
(statearr_40456[(7)] = inst_40435);

return statearr_40456;
})();
if(inst_40436){
var statearr_40457_40764 = state_40454__$1;
(statearr_40457_40764[(1)] = (3));

} else {
var statearr_40458_40765 = state_40454__$1;
(statearr_40458_40765[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40455 === (3))){
var inst_40435 = (state_40454[(7)]);
var inst_40438 = cljs.core.map_QMARK_(inst_40435);
var state_40454__$1 = state_40454;
if(inst_40438){
var statearr_40459_40766 = state_40454__$1;
(statearr_40459_40766[(1)] = (6));

} else {
var statearr_40460_40767 = state_40454__$1;
(statearr_40460_40767[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40455 === (4))){
var inst_40448 = cljs.core.PersistentVector.EMPTY;
var inst_40449 = cljs.core.reset_BANG_(app.db.productos,inst_40448);
var inst_40450 = console.log("La categor\u00EDa seleccionada no tiene productos asociados.");
var state_40454__$1 = (function (){var statearr_40461 = state_40454;
(statearr_40461[(8)] = inst_40449);

return statearr_40461;
})();
var statearr_40462_40768 = state_40454__$1;
(statearr_40462_40768[(2)] = inst_40450);

(statearr_40462_40768[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40455 === (5))){
var inst_40452 = (state_40454[(2)]);
var state_40454__$1 = state_40454;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40454__$1,inst_40452);
} else {
if((state_val_40455 === (6))){
var inst_40435 = (state_40454[(7)]);
var inst_40440 = new cljs.core.Keyword(null,"productos","productos",-1282966179).cljs$core$IFn$_invoke$arity$1(inst_40435);
var state_40454__$1 = state_40454;
var statearr_40463_40774 = state_40454__$1;
(statearr_40463_40774[(2)] = inst_40440);

(statearr_40463_40774[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40455 === (7))){
var inst_40435 = (state_40454[(7)]);
var state_40454__$1 = state_40454;
var statearr_40464_40775 = state_40454__$1;
(statearr_40464_40775[(2)] = inst_40435);

(statearr_40464_40775[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40455 === (8))){
var inst_40443 = (state_40454[(2)]);
var inst_40444 = cljs.core.reset_BANG_(app.db.productos,inst_40443);
var inst_40445 = cljs.core.deref(app.db.productos);
var inst_40446 = console.log("Productos actualizados:",inst_40445);
var state_40454__$1 = (function (){var statearr_40465 = state_40454;
(statearr_40465[(9)] = inst_40444);

return statearr_40465;
})();
var statearr_40466_40777 = state_40454__$1;
(statearr_40466_40777[(2)] = inst_40446);

(statearr_40466_40777[(1)] = (5));


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
var app$db$fetch_productos_$_state_machine__12017__auto__ = null;
var app$db$fetch_productos_$_state_machine__12017__auto____0 = (function (){
var statearr_40467 = [null,null,null,null,null,null,null,null,null,null];
(statearr_40467[(0)] = app$db$fetch_productos_$_state_machine__12017__auto__);

(statearr_40467[(1)] = (1));

return statearr_40467;
});
var app$db$fetch_productos_$_state_machine__12017__auto____1 = (function (state_40454){
while(true){
var ret_value__12018__auto__ = (function (){try{while(true){
var result__12019__auto__ = switch__12016__auto__(state_40454);
if(cljs.core.keyword_identical_QMARK_(result__12019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12019__auto__;
}
break;
}
}catch (e40468){var ex__12020__auto__ = e40468;
var statearr_40469_40779 = state_40454;
(statearr_40469_40779[(2)] = ex__12020__auto__);


if(cljs.core.seq((state_40454[(4)]))){
var statearr_40470_40781 = state_40454;
(statearr_40470_40781[(1)] = cljs.core.first((state_40454[(4)])));

} else {
throw ex__12020__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40782 = state_40454;
state_40454 = G__40782;
continue;
} else {
return ret_value__12018__auto__;
}
break;
}
});
app$db$fetch_productos_$_state_machine__12017__auto__ = function(state_40454){
switch(arguments.length){
case 0:
return app$db$fetch_productos_$_state_machine__12017__auto____0.call(this);
case 1:
return app$db$fetch_productos_$_state_machine__12017__auto____1.call(this,state_40454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$fetch_productos_$_state_machine__12017__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$fetch_productos_$_state_machine__12017__auto____0;
app$db$fetch_productos_$_state_machine__12017__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$fetch_productos_$_state_machine__12017__auto____1;
return app$db$fetch_productos_$_state_machine__12017__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_40471 = f__12040__auto__();
(statearr_40471[(6)] = c__12039__auto__);

return statearr_40471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
});
app.db.fetch_list_productos = (function app$db$fetch_list_productos(){
console.log("Llamando a fetch-list-productos...");

var c__12039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__12016__auto__ = (function (state_40496){
var state_val_40497 = (state_40496[(1)]);
if((state_val_40497 === (1))){
var inst_40473 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"response-format","response-format",1664465322)];
var inst_40474 = [new cljs.core.Keyword(null,"keywords?","keywords?",764949733)];
var inst_40475 = [true];
var inst_40476 = cljs.core.PersistentHashMap.fromArrays(inst_40474,inst_40475);
var inst_40477 = ajax.core.json_response_format(inst_40476);
var inst_40478 = [true,inst_40477];
var inst_40479 = cljs.core.PersistentHashMap.fromArrays(inst_40473,inst_40478);
var inst_40480 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic("/api/productos/",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_40479], 0));
var state_40496__$1 = state_40496;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40496__$1,(2),inst_40480);
} else {
if((state_val_40497 === (2))){
var inst_40482 = (state_40496[(2)]);
var inst_40483 = cljs.core.__destructure_map(inst_40482);
var inst_40484 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40483,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_40485 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40483,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_40486 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_40484);
var state_40496__$1 = (function (){var statearr_40498 = state_40496;
(statearr_40498[(7)] = inst_40485);

return statearr_40498;
})();
if(inst_40486){
var statearr_40499_40787 = state_40496__$1;
(statearr_40499_40787[(1)] = (3));

} else {
var statearr_40500_40788 = state_40496__$1;
(statearr_40500_40788[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40497 === (3))){
var inst_40485 = (state_40496[(7)]);
var inst_40488 = cljs.core.reset_BANG_(app.db.list_productos,inst_40485);
var inst_40489 = cljs.core.deref(app.db.categorias);
var inst_40490 = console.log("Productos actualizados:",inst_40489);
var state_40496__$1 = (function (){var statearr_40501 = state_40496;
(statearr_40501[(8)] = inst_40488);

return statearr_40501;
})();
var statearr_40502_40789 = state_40496__$1;
(statearr_40502_40789[(2)] = inst_40490);

(statearr_40502_40789[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40497 === (4))){
var inst_40492 = console.error("Error al obtener productos");
var state_40496__$1 = state_40496;
var statearr_40503_40790 = state_40496__$1;
(statearr_40503_40790[(2)] = inst_40492);

(statearr_40503_40790[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40497 === (5))){
var inst_40494 = (state_40496[(2)]);
var state_40496__$1 = state_40496;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40496__$1,inst_40494);
} else {
return null;
}
}
}
}
}
});
return (function() {
var app$db$fetch_list_productos_$_state_machine__12017__auto__ = null;
var app$db$fetch_list_productos_$_state_machine__12017__auto____0 = (function (){
var statearr_40504 = [null,null,null,null,null,null,null,null,null];
(statearr_40504[(0)] = app$db$fetch_list_productos_$_state_machine__12017__auto__);

(statearr_40504[(1)] = (1));

return statearr_40504;
});
var app$db$fetch_list_productos_$_state_machine__12017__auto____1 = (function (state_40496){
while(true){
var ret_value__12018__auto__ = (function (){try{while(true){
var result__12019__auto__ = switch__12016__auto__(state_40496);
if(cljs.core.keyword_identical_QMARK_(result__12019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12019__auto__;
}
break;
}
}catch (e40505){var ex__12020__auto__ = e40505;
var statearr_40506_40797 = state_40496;
(statearr_40506_40797[(2)] = ex__12020__auto__);


if(cljs.core.seq((state_40496[(4)]))){
var statearr_40507_40798 = state_40496;
(statearr_40507_40798[(1)] = cljs.core.first((state_40496[(4)])));

} else {
throw ex__12020__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40799 = state_40496;
state_40496 = G__40799;
continue;
} else {
return ret_value__12018__auto__;
}
break;
}
});
app$db$fetch_list_productos_$_state_machine__12017__auto__ = function(state_40496){
switch(arguments.length){
case 0:
return app$db$fetch_list_productos_$_state_machine__12017__auto____0.call(this);
case 1:
return app$db$fetch_list_productos_$_state_machine__12017__auto____1.call(this,state_40496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$fetch_list_productos_$_state_machine__12017__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$fetch_list_productos_$_state_machine__12017__auto____0;
app$db$fetch_list_productos_$_state_machine__12017__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$fetch_list_productos_$_state_machine__12017__auto____1;
return app$db$fetch_list_productos_$_state_machine__12017__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_40508 = f__12040__auto__();
(statearr_40508[(6)] = c__12039__auto__);

return statearr_40508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
});
app.db.cargar_imagenes = (function app$db$cargar_imagenes(){
console.log("Llamando a cargar-imagenes...");

return fetch("/api/imagenes").then((function (p1__40509_SHARP_){
return p1__40509_SHARP_.json();
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
var f__12040__auto__ = (function (){var switch__12016__auto__ = (function (state_40533){
var state_val_40534 = (state_40533[(1)]);
if((state_val_40534 === (1))){
var inst_40511 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"json-params","json-params",-1112693596),new cljs.core.Keyword(null,"response-format","response-format",1664465322)];
var inst_40512 = [new cljs.core.Keyword(null,"keywords?","keywords?",764949733)];
var inst_40513 = [true];
var inst_40514 = cljs.core.PersistentHashMap.fromArrays(inst_40512,inst_40513);
var inst_40515 = ajax.core.json_response_format(inst_40514);
var inst_40516 = [true,producto,inst_40515];
var inst_40517 = cljs.core.PersistentHashMap.fromArrays(inst_40511,inst_40516);
var inst_40518 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic("/api/producto/nuevo",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_40517], 0));
var state_40533__$1 = state_40533;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40533__$1,(2),inst_40518);
} else {
if((state_val_40534 === (2))){
var inst_40520 = (state_40533[(2)]);
var inst_40521 = cljs.core.__destructure_map(inst_40520);
var inst_40522 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40521,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_40523 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40521,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_40524 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((201),inst_40522);
var state_40533__$1 = (function (){var statearr_40535 = state_40533;
(statearr_40535[(7)] = inst_40523);

return statearr_40535;
})();
if(inst_40524){
var statearr_40536_40809 = state_40533__$1;
(statearr_40536_40809[(1)] = (3));

} else {
var statearr_40537_40810 = state_40533__$1;
(statearr_40537_40810[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40534 === (3))){
var inst_40523 = (state_40533[(7)]);
var inst_40526 = console.log("Producto insertado correctamente",inst_40523);
var inst_40527 = alert("Producto creado correctamente");
var state_40533__$1 = (function (){var statearr_40538 = state_40533;
(statearr_40538[(8)] = inst_40526);

return statearr_40538;
})();
var statearr_40539_40819 = state_40533__$1;
(statearr_40539_40819[(2)] = inst_40527);

(statearr_40539_40819[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40534 === (4))){
var inst_40523 = (state_40533[(7)]);
var inst_40529 = console.error("Error al insertar producto",inst_40523);
var state_40533__$1 = state_40533;
var statearr_40540_40820 = state_40533__$1;
(statearr_40540_40820[(2)] = inst_40529);

(statearr_40540_40820[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40534 === (5))){
var inst_40531 = (state_40533[(2)]);
var state_40533__$1 = state_40533;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40533__$1,inst_40531);
} else {
return null;
}
}
}
}
}
});
return (function() {
var app$db$insertar_producto_$_state_machine__12017__auto__ = null;
var app$db$insertar_producto_$_state_machine__12017__auto____0 = (function (){
var statearr_40541 = [null,null,null,null,null,null,null,null,null];
(statearr_40541[(0)] = app$db$insertar_producto_$_state_machine__12017__auto__);

(statearr_40541[(1)] = (1));

return statearr_40541;
});
var app$db$insertar_producto_$_state_machine__12017__auto____1 = (function (state_40533){
while(true){
var ret_value__12018__auto__ = (function (){try{while(true){
var result__12019__auto__ = switch__12016__auto__(state_40533);
if(cljs.core.keyword_identical_QMARK_(result__12019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12019__auto__;
}
break;
}
}catch (e40542){var ex__12020__auto__ = e40542;
var statearr_40543_40825 = state_40533;
(statearr_40543_40825[(2)] = ex__12020__auto__);


if(cljs.core.seq((state_40533[(4)]))){
var statearr_40544_40827 = state_40533;
(statearr_40544_40827[(1)] = cljs.core.first((state_40533[(4)])));

} else {
throw ex__12020__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40830 = state_40533;
state_40533 = G__40830;
continue;
} else {
return ret_value__12018__auto__;
}
break;
}
});
app$db$insertar_producto_$_state_machine__12017__auto__ = function(state_40533){
switch(arguments.length){
case 0:
return app$db$insertar_producto_$_state_machine__12017__auto____0.call(this);
case 1:
return app$db$insertar_producto_$_state_machine__12017__auto____1.call(this,state_40533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$insertar_producto_$_state_machine__12017__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$insertar_producto_$_state_machine__12017__auto____0;
app$db$insertar_producto_$_state_machine__12017__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$insertar_producto_$_state_machine__12017__auto____1;
return app$db$insertar_producto_$_state_machine__12017__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_40545 = f__12040__auto__();
(statearr_40545[(6)] = c__12039__auto__);

return statearr_40545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
});
app.db.insertar_categoria = (function app$db$insertar_categoria(producto){
console.log("Llamando a insertar-categoria...",producto);

var c__12039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__12016__auto__ = (function (state_40569){
var state_val_40570 = (state_40569[(1)]);
if((state_val_40570 === (1))){
var inst_40547 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"json-params","json-params",-1112693596),new cljs.core.Keyword(null,"response-format","response-format",1664465322)];
var inst_40548 = [new cljs.core.Keyword(null,"keywords?","keywords?",764949733)];
var inst_40549 = [true];
var inst_40550 = cljs.core.PersistentHashMap.fromArrays(inst_40548,inst_40549);
var inst_40551 = ajax.core.json_response_format(inst_40550);
var inst_40552 = [true,producto,inst_40551];
var inst_40553 = cljs.core.PersistentHashMap.fromArrays(inst_40547,inst_40552);
var inst_40554 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic("/api/categoria/nuevo",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_40553], 0));
var state_40569__$1 = state_40569;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40569__$1,(2),inst_40554);
} else {
if((state_val_40570 === (2))){
var inst_40556 = (state_40569[(2)]);
var inst_40557 = cljs.core.__destructure_map(inst_40556);
var inst_40558 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40557,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_40559 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40557,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_40560 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((201),inst_40558);
var state_40569__$1 = (function (){var statearr_40571 = state_40569;
(statearr_40571[(7)] = inst_40559);

return statearr_40571;
})();
if(inst_40560){
var statearr_40572_40852 = state_40569__$1;
(statearr_40572_40852[(1)] = (3));

} else {
var statearr_40573_40854 = state_40569__$1;
(statearr_40573_40854[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40570 === (3))){
var inst_40559 = (state_40569[(7)]);
var inst_40562 = console.log("Categoria insertada correctamente",inst_40559);
var inst_40563 = alert("Categoria creada correctamente, recarga la lista de 'Mostrar categorias' dandole al boton, para verla y poder editarla.");
var state_40569__$1 = (function (){var statearr_40574 = state_40569;
(statearr_40574[(8)] = inst_40562);

return statearr_40574;
})();
var statearr_40575_40859 = state_40569__$1;
(statearr_40575_40859[(2)] = inst_40563);

(statearr_40575_40859[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40570 === (4))){
var inst_40559 = (state_40569[(7)]);
var inst_40565 = console.error("Error al insertar categoria",inst_40559);
var state_40569__$1 = state_40569;
var statearr_40576_40864 = state_40569__$1;
(statearr_40576_40864[(2)] = inst_40565);

(statearr_40576_40864[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40570 === (5))){
var inst_40567 = (state_40569[(2)]);
var state_40569__$1 = state_40569;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40569__$1,inst_40567);
} else {
return null;
}
}
}
}
}
});
return (function() {
var app$db$insertar_categoria_$_state_machine__12017__auto__ = null;
var app$db$insertar_categoria_$_state_machine__12017__auto____0 = (function (){
var statearr_40577 = [null,null,null,null,null,null,null,null,null];
(statearr_40577[(0)] = app$db$insertar_categoria_$_state_machine__12017__auto__);

(statearr_40577[(1)] = (1));

return statearr_40577;
});
var app$db$insertar_categoria_$_state_machine__12017__auto____1 = (function (state_40569){
while(true){
var ret_value__12018__auto__ = (function (){try{while(true){
var result__12019__auto__ = switch__12016__auto__(state_40569);
if(cljs.core.keyword_identical_QMARK_(result__12019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12019__auto__;
}
break;
}
}catch (e40578){var ex__12020__auto__ = e40578;
var statearr_40579_40870 = state_40569;
(statearr_40579_40870[(2)] = ex__12020__auto__);


if(cljs.core.seq((state_40569[(4)]))){
var statearr_40580_40872 = state_40569;
(statearr_40580_40872[(1)] = cljs.core.first((state_40569[(4)])));

} else {
throw ex__12020__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40873 = state_40569;
state_40569 = G__40873;
continue;
} else {
return ret_value__12018__auto__;
}
break;
}
});
app$db$insertar_categoria_$_state_machine__12017__auto__ = function(state_40569){
switch(arguments.length){
case 0:
return app$db$insertar_categoria_$_state_machine__12017__auto____0.call(this);
case 1:
return app$db$insertar_categoria_$_state_machine__12017__auto____1.call(this,state_40569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$insertar_categoria_$_state_machine__12017__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$insertar_categoria_$_state_machine__12017__auto____0;
app$db$insertar_categoria_$_state_machine__12017__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$insertar_categoria_$_state_machine__12017__auto____1;
return app$db$insertar_categoria_$_state_machine__12017__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_40581 = f__12040__auto__();
(statearr_40581[(6)] = c__12039__auto__);

return statearr_40581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
});
app.db.eliminar_producto = (function app$db$eliminar_producto(id){
var c__12039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__12016__auto__ = (function (state_40606){
var state_val_40607 = (state_40606[(1)]);
if((state_val_40607 === (1))){
var inst_40583 = ["/api/producto/eliminar/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('');
var inst_40584 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"response-format","response-format",1664465322)];
var inst_40585 = [new cljs.core.Keyword(null,"keywords?","keywords?",764949733)];
var inst_40586 = [true];
var inst_40587 = cljs.core.PersistentHashMap.fromArrays(inst_40585,inst_40586);
var inst_40588 = ajax.core.json_response_format(inst_40587);
var inst_40589 = [true,inst_40588];
var inst_40590 = cljs.core.PersistentHashMap.fromArrays(inst_40584,inst_40589);
var inst_40591 = cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(inst_40583,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_40590], 0));
var state_40606__$1 = state_40606;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40606__$1,(2),inst_40591);
} else {
if((state_val_40607 === (2))){
var inst_40593 = (state_40606[(2)]);
var inst_40594 = cljs.core.__destructure_map(inst_40593);
var inst_40595 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40594,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_40596 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40594,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_40597 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_40595);
var state_40606__$1 = (function (){var statearr_40608 = state_40606;
(statearr_40608[(7)] = inst_40596);

return statearr_40608;
})();
if(inst_40597){
var statearr_40609_40885 = state_40606__$1;
(statearr_40609_40885[(1)] = (3));

} else {
var statearr_40610_40886 = state_40606__$1;
(statearr_40610_40886[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40607 === (3))){
var inst_40596 = (state_40606[(7)]);
var inst_40599 = console.log("Producto eliminado",inst_40596);
var inst_40600 = alert("Producto eliminado correctamente, dale a boton de 'Mostrar productos'.");
var state_40606__$1 = (function (){var statearr_40611 = state_40606;
(statearr_40611[(8)] = inst_40599);

return statearr_40611;
})();
var statearr_40612_40893 = state_40606__$1;
(statearr_40612_40893[(2)] = inst_40600);

(statearr_40612_40893[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40607 === (4))){
var inst_40596 = (state_40606[(7)]);
var inst_40602 = console.error("Error al eliminar el producto",inst_40596);
var state_40606__$1 = state_40606;
var statearr_40613_40894 = state_40606__$1;
(statearr_40613_40894[(2)] = inst_40602);

(statearr_40613_40894[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40607 === (5))){
var inst_40604 = (state_40606[(2)]);
var state_40606__$1 = state_40606;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40606__$1,inst_40604);
} else {
return null;
}
}
}
}
}
});
return (function() {
var app$db$eliminar_producto_$_state_machine__12017__auto__ = null;
var app$db$eliminar_producto_$_state_machine__12017__auto____0 = (function (){
var statearr_40614 = [null,null,null,null,null,null,null,null,null];
(statearr_40614[(0)] = app$db$eliminar_producto_$_state_machine__12017__auto__);

(statearr_40614[(1)] = (1));

return statearr_40614;
});
var app$db$eliminar_producto_$_state_machine__12017__auto____1 = (function (state_40606){
while(true){
var ret_value__12018__auto__ = (function (){try{while(true){
var result__12019__auto__ = switch__12016__auto__(state_40606);
if(cljs.core.keyword_identical_QMARK_(result__12019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12019__auto__;
}
break;
}
}catch (e40615){var ex__12020__auto__ = e40615;
var statearr_40616_40900 = state_40606;
(statearr_40616_40900[(2)] = ex__12020__auto__);


if(cljs.core.seq((state_40606[(4)]))){
var statearr_40617_40901 = state_40606;
(statearr_40617_40901[(1)] = cljs.core.first((state_40606[(4)])));

} else {
throw ex__12020__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40906 = state_40606;
state_40606 = G__40906;
continue;
} else {
return ret_value__12018__auto__;
}
break;
}
});
app$db$eliminar_producto_$_state_machine__12017__auto__ = function(state_40606){
switch(arguments.length){
case 0:
return app$db$eliminar_producto_$_state_machine__12017__auto____0.call(this);
case 1:
return app$db$eliminar_producto_$_state_machine__12017__auto____1.call(this,state_40606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$eliminar_producto_$_state_machine__12017__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$eliminar_producto_$_state_machine__12017__auto____0;
app$db$eliminar_producto_$_state_machine__12017__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$eliminar_producto_$_state_machine__12017__auto____1;
return app$db$eliminar_producto_$_state_machine__12017__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_40618 = f__12040__auto__();
(statearr_40618[(6)] = c__12039__auto__);

return statearr_40618;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
});
app.db.activo_producto = (function app$db$activo_producto(id){
var c__12039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__12016__auto__ = (function (state_40649){
var state_val_40650 = (state_40649[(1)]);
if((state_val_40650 === (1))){
var inst_40620 = ["/api/producto/activo/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('');
var inst_40621 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"response-format","response-format",1664465322)];
var inst_40622 = [new cljs.core.Keyword(null,"keywords?","keywords?",764949733)];
var inst_40623 = [true];
var inst_40624 = cljs.core.PersistentHashMap.fromArrays(inst_40622,inst_40623);
var inst_40625 = ajax.core.json_response_format(inst_40624);
var inst_40626 = [true,inst_40625];
var inst_40627 = cljs.core.PersistentHashMap.fromArrays(inst_40621,inst_40626);
var inst_40628 = cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(inst_40620,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_40627], 0));
var state_40649__$1 = state_40649;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40649__$1,(2),inst_40628);
} else {
if((state_val_40650 === (2))){
var inst_40630 = (state_40649[(2)]);
var inst_40631 = cljs.core.__destructure_map(inst_40630);
var inst_40632 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40631,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_40633 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40631,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_40634 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_40632);
var state_40649__$1 = (function (){var statearr_40651 = state_40649;
(statearr_40651[(7)] = inst_40633);

return statearr_40651;
})();
if(inst_40634){
var statearr_40652_40912 = state_40649__$1;
(statearr_40652_40912[(1)] = (3));

} else {
var statearr_40653_40913 = state_40649__$1;
(statearr_40653_40913[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40650 === (3))){
var inst_40633 = (state_40649[(7)]);
var inst_40636 = console.log("Estado actualizado",inst_40633);
var inst_40637 = new cljs.core.Keyword(null,"activo","activo",-1391186334).cljs$core$IFn$_invoke$arity$1(inst_40633);
var state_40649__$1 = (function (){var statearr_40654 = state_40649;
(statearr_40654[(8)] = inst_40636);

return statearr_40654;
})();
if(cljs.core.truth_(inst_40637)){
var statearr_40655_40915 = state_40649__$1;
(statearr_40655_40915[(1)] = (6));

} else {
var statearr_40656_40916 = state_40649__$1;
(statearr_40656_40916[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40650 === (4))){
var inst_40633 = (state_40649[(7)]);
var inst_40645 = console.error("Error al actualizar estado del producto",inst_40633);
var state_40649__$1 = state_40649;
var statearr_40657_40921 = state_40649__$1;
(statearr_40657_40921[(2)] = inst_40645);

(statearr_40657_40921[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40650 === (5))){
var inst_40647 = (state_40649[(2)]);
var state_40649__$1 = state_40649;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40649__$1,inst_40647);
} else {
if((state_val_40650 === (6))){
var state_40649__$1 = state_40649;
var statearr_40658_40922 = state_40649__$1;
(statearr_40658_40922[(2)] = "activado");

(statearr_40658_40922[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40650 === (7))){
var state_40649__$1 = state_40649;
var statearr_40659_40923 = state_40649__$1;
(statearr_40659_40923[(2)] = "desactivado");

(statearr_40659_40923[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40650 === (8))){
var inst_40641 = (state_40649[(2)]);
var inst_40642 = ["Producto ",inst_40641," correctamente"].join('');
var inst_40643 = alert(inst_40642);
var state_40649__$1 = state_40649;
var statearr_40660_40927 = state_40649__$1;
(statearr_40660_40927[(2)] = inst_40643);

(statearr_40660_40927[(1)] = (5));


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
var app$db$activo_producto_$_state_machine__12017__auto__ = null;
var app$db$activo_producto_$_state_machine__12017__auto____0 = (function (){
var statearr_40661 = [null,null,null,null,null,null,null,null,null];
(statearr_40661[(0)] = app$db$activo_producto_$_state_machine__12017__auto__);

(statearr_40661[(1)] = (1));

return statearr_40661;
});
var app$db$activo_producto_$_state_machine__12017__auto____1 = (function (state_40649){
while(true){
var ret_value__12018__auto__ = (function (){try{while(true){
var result__12019__auto__ = switch__12016__auto__(state_40649);
if(cljs.core.keyword_identical_QMARK_(result__12019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12019__auto__;
}
break;
}
}catch (e40662){var ex__12020__auto__ = e40662;
var statearr_40663_40930 = state_40649;
(statearr_40663_40930[(2)] = ex__12020__auto__);


if(cljs.core.seq((state_40649[(4)]))){
var statearr_40664_40932 = state_40649;
(statearr_40664_40932[(1)] = cljs.core.first((state_40649[(4)])));

} else {
throw ex__12020__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40938 = state_40649;
state_40649 = G__40938;
continue;
} else {
return ret_value__12018__auto__;
}
break;
}
});
app$db$activo_producto_$_state_machine__12017__auto__ = function(state_40649){
switch(arguments.length){
case 0:
return app$db$activo_producto_$_state_machine__12017__auto____0.call(this);
case 1:
return app$db$activo_producto_$_state_machine__12017__auto____1.call(this,state_40649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$activo_producto_$_state_machine__12017__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$activo_producto_$_state_machine__12017__auto____0;
app$db$activo_producto_$_state_machine__12017__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$activo_producto_$_state_machine__12017__auto____1;
return app$db$activo_producto_$_state_machine__12017__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_40665 = f__12040__auto__();
(statearr_40665[(6)] = c__12039__auto__);

return statearr_40665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
});
app.db.activo_categoria = (function app$db$activo_categoria(id){
var c__12039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__12016__auto__ = (function (state_40696){
var state_val_40697 = (state_40696[(1)]);
if((state_val_40697 === (1))){
var inst_40667 = ["/api/categoria/activo/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('');
var inst_40668 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"response-format","response-format",1664465322)];
var inst_40669 = [new cljs.core.Keyword(null,"keywords?","keywords?",764949733)];
var inst_40670 = [true];
var inst_40671 = cljs.core.PersistentHashMap.fromArrays(inst_40669,inst_40670);
var inst_40672 = ajax.core.json_response_format(inst_40671);
var inst_40673 = [true,inst_40672];
var inst_40674 = cljs.core.PersistentHashMap.fromArrays(inst_40668,inst_40673);
var inst_40675 = cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(inst_40667,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_40674], 0));
var state_40696__$1 = state_40696;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40696__$1,(2),inst_40675);
} else {
if((state_val_40697 === (2))){
var inst_40677 = (state_40696[(2)]);
var inst_40678 = cljs.core.__destructure_map(inst_40677);
var inst_40679 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40678,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_40680 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40678,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_40681 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_40679);
var state_40696__$1 = (function (){var statearr_40698 = state_40696;
(statearr_40698[(7)] = inst_40680);

return statearr_40698;
})();
if(inst_40681){
var statearr_40699_40940 = state_40696__$1;
(statearr_40699_40940[(1)] = (3));

} else {
var statearr_40700_40941 = state_40696__$1;
(statearr_40700_40941[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40697 === (3))){
var inst_40680 = (state_40696[(7)]);
var inst_40683 = console.log("Estado actualizado",inst_40680);
var inst_40684 = new cljs.core.Keyword(null,"activo","activo",-1391186334).cljs$core$IFn$_invoke$arity$1(inst_40680);
var state_40696__$1 = (function (){var statearr_40701 = state_40696;
(statearr_40701[(8)] = inst_40683);

return statearr_40701;
})();
if(cljs.core.truth_(inst_40684)){
var statearr_40702_40944 = state_40696__$1;
(statearr_40702_40944[(1)] = (6));

} else {
var statearr_40703_40945 = state_40696__$1;
(statearr_40703_40945[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40697 === (4))){
var inst_40680 = (state_40696[(7)]);
var inst_40692 = console.error("Error al actualizar estado de la categoria",inst_40680);
var state_40696__$1 = state_40696;
var statearr_40704_40946 = state_40696__$1;
(statearr_40704_40946[(2)] = inst_40692);

(statearr_40704_40946[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40697 === (5))){
var inst_40694 = (state_40696[(2)]);
var state_40696__$1 = state_40696;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40696__$1,inst_40694);
} else {
if((state_val_40697 === (6))){
var state_40696__$1 = state_40696;
var statearr_40705_40947 = state_40696__$1;
(statearr_40705_40947[(2)] = "activada");

(statearr_40705_40947[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40697 === (7))){
var state_40696__$1 = state_40696;
var statearr_40706_40948 = state_40696__$1;
(statearr_40706_40948[(2)] = "desactivada");

(statearr_40706_40948[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40697 === (8))){
var inst_40688 = (state_40696[(2)]);
var inst_40689 = ["Categoria ",inst_40688," correctamente."].join('');
var inst_40690 = alert(inst_40689);
var state_40696__$1 = state_40696;
var statearr_40707_40949 = state_40696__$1;
(statearr_40707_40949[(2)] = inst_40690);

(statearr_40707_40949[(1)] = (5));


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
var app$db$activo_categoria_$_state_machine__12017__auto__ = null;
var app$db$activo_categoria_$_state_machine__12017__auto____0 = (function (){
var statearr_40708 = [null,null,null,null,null,null,null,null,null];
(statearr_40708[(0)] = app$db$activo_categoria_$_state_machine__12017__auto__);

(statearr_40708[(1)] = (1));

return statearr_40708;
});
var app$db$activo_categoria_$_state_machine__12017__auto____1 = (function (state_40696){
while(true){
var ret_value__12018__auto__ = (function (){try{while(true){
var result__12019__auto__ = switch__12016__auto__(state_40696);
if(cljs.core.keyword_identical_QMARK_(result__12019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12019__auto__;
}
break;
}
}catch (e40709){var ex__12020__auto__ = e40709;
var statearr_40710_40950 = state_40696;
(statearr_40710_40950[(2)] = ex__12020__auto__);


if(cljs.core.seq((state_40696[(4)]))){
var statearr_40711_40951 = state_40696;
(statearr_40711_40951[(1)] = cljs.core.first((state_40696[(4)])));

} else {
throw ex__12020__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40954 = state_40696;
state_40696 = G__40954;
continue;
} else {
return ret_value__12018__auto__;
}
break;
}
});
app$db$activo_categoria_$_state_machine__12017__auto__ = function(state_40696){
switch(arguments.length){
case 0:
return app$db$activo_categoria_$_state_machine__12017__auto____0.call(this);
case 1:
return app$db$activo_categoria_$_state_machine__12017__auto____1.call(this,state_40696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$activo_categoria_$_state_machine__12017__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$activo_categoria_$_state_machine__12017__auto____0;
app$db$activo_categoria_$_state_machine__12017__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$activo_categoria_$_state_machine__12017__auto____1;
return app$db$activo_categoria_$_state_machine__12017__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_40712 = f__12040__auto__();
(statearr_40712[(6)] = c__12039__auto__);

return statearr_40712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
});
app.db.eliminar_categoria = (function app$db$eliminar_categoria(id){
var c__12039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__12016__auto__ = (function (state_40737){
var state_val_40738 = (state_40737[(1)]);
if((state_val_40738 === (1))){
var inst_40714 = ["/api/categoria/eliminar/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('');
var inst_40715 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"response-format","response-format",1664465322)];
var inst_40716 = [new cljs.core.Keyword(null,"keywords?","keywords?",764949733)];
var inst_40717 = [true];
var inst_40718 = cljs.core.PersistentHashMap.fromArrays(inst_40716,inst_40717);
var inst_40719 = ajax.core.json_response_format(inst_40718);
var inst_40720 = [true,inst_40719];
var inst_40721 = cljs.core.PersistentHashMap.fromArrays(inst_40715,inst_40720);
var inst_40722 = cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(inst_40714,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_40721], 0));
var state_40737__$1 = state_40737;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40737__$1,(2),inst_40722);
} else {
if((state_val_40738 === (2))){
var inst_40724 = (state_40737[(2)]);
var inst_40725 = cljs.core.__destructure_map(inst_40724);
var inst_40726 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40725,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_40727 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40725,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_40728 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_40726);
var state_40737__$1 = (function (){var statearr_40739 = state_40737;
(statearr_40739[(7)] = inst_40727);

return statearr_40739;
})();
if(inst_40728){
var statearr_40740_40963 = state_40737__$1;
(statearr_40740_40963[(1)] = (3));

} else {
var statearr_40741_40966 = state_40737__$1;
(statearr_40741_40966[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40738 === (3))){
var inst_40727 = (state_40737[(7)]);
var inst_40730 = console.log("Categor\u00EDa eliminada",inst_40727);
var inst_40731 = alert("Categor\u00EDa eliminada correctamente, dale a boton de 'Mostrar categorias'.");
var state_40737__$1 = (function (){var statearr_40742 = state_40737;
(statearr_40742[(8)] = inst_40730);

return statearr_40742;
})();
var statearr_40743_40967 = state_40737__$1;
(statearr_40743_40967[(2)] = inst_40731);

(statearr_40743_40967[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40738 === (4))){
var inst_40727 = (state_40737[(7)]);
var inst_40733 = console.error("Error al eliminar categor\u00EDa",inst_40727);
var state_40737__$1 = state_40737;
var statearr_40744_40968 = state_40737__$1;
(statearr_40744_40968[(2)] = inst_40733);

(statearr_40744_40968[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40738 === (5))){
var inst_40735 = (state_40737[(2)]);
var state_40737__$1 = state_40737;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40737__$1,inst_40735);
} else {
return null;
}
}
}
}
}
});
return (function() {
var app$db$eliminar_categoria_$_state_machine__12017__auto__ = null;
var app$db$eliminar_categoria_$_state_machine__12017__auto____0 = (function (){
var statearr_40745 = [null,null,null,null,null,null,null,null,null];
(statearr_40745[(0)] = app$db$eliminar_categoria_$_state_machine__12017__auto__);

(statearr_40745[(1)] = (1));

return statearr_40745;
});
var app$db$eliminar_categoria_$_state_machine__12017__auto____1 = (function (state_40737){
while(true){
var ret_value__12018__auto__ = (function (){try{while(true){
var result__12019__auto__ = switch__12016__auto__(state_40737);
if(cljs.core.keyword_identical_QMARK_(result__12019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12019__auto__;
}
break;
}
}catch (e40746){var ex__12020__auto__ = e40746;
var statearr_40747_40973 = state_40737;
(statearr_40747_40973[(2)] = ex__12020__auto__);


if(cljs.core.seq((state_40737[(4)]))){
var statearr_40748_40974 = state_40737;
(statearr_40748_40974[(1)] = cljs.core.first((state_40737[(4)])));

} else {
throw ex__12020__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40975 = state_40737;
state_40737 = G__40975;
continue;
} else {
return ret_value__12018__auto__;
}
break;
}
});
app$db$eliminar_categoria_$_state_machine__12017__auto__ = function(state_40737){
switch(arguments.length){
case 0:
return app$db$eliminar_categoria_$_state_machine__12017__auto____0.call(this);
case 1:
return app$db$eliminar_categoria_$_state_machine__12017__auto____1.call(this,state_40737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$eliminar_categoria_$_state_machine__12017__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$eliminar_categoria_$_state_machine__12017__auto____0;
app$db$eliminar_categoria_$_state_machine__12017__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$eliminar_categoria_$_state_machine__12017__auto____1;
return app$db$eliminar_categoria_$_state_machine__12017__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_40749 = f__12040__auto__();
(statearr_40749[(6)] = c__12039__auto__);

return statearr_40749;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
});

//# sourceMappingURL=app.db.js.map
