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
var f__12040__auto__ = (function (){var switch__11942__auto__ = (function (state_26405){
var state_val_26406 = (state_26405[(1)]);
if((state_val_26406 === (1))){
var inst_26379 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"response-format","response-format",1664465322)];
var inst_26383 = [new cljs.core.Keyword(null,"keywords?","keywords?",764949733)];
var inst_26384 = [true];
var inst_26385 = cljs.core.PersistentHashMap.fromArrays(inst_26383,inst_26384);
var inst_26386 = ajax.core.json_response_format(inst_26385);
var inst_26387 = [true,inst_26386];
var inst_26388 = cljs.core.PersistentHashMap.fromArrays(inst_26379,inst_26387);
var inst_26389 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic("/api/categorias/",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_26388], 0));
var state_26405__$1 = state_26405;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26405__$1,(2),inst_26389);
} else {
if((state_val_26406 === (2))){
var inst_26391 = (state_26405[(2)]);
var inst_26392 = cljs.core.__destructure_map(inst_26391);
var inst_26393 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26392,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_26394 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26392,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_26395 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_26393);
var state_26405__$1 = (function (){var statearr_26416 = state_26405;
(statearr_26416[(7)] = inst_26394);

return statearr_26416;
})();
if(inst_26395){
var statearr_26417_26811 = state_26405__$1;
(statearr_26417_26811[(1)] = (3));

} else {
var statearr_26419_26812 = state_26405__$1;
(statearr_26419_26812[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26406 === (3))){
var inst_26394 = (state_26405[(7)]);
var inst_26397 = cljs.core.reset_BANG_(app.db.categorias,inst_26394);
var inst_26398 = cljs.core.deref(app.db.categorias);
var inst_26399 = console.log("Categor\u00EDas actualizadas:",inst_26398);
var state_26405__$1 = (function (){var statearr_26422 = state_26405;
(statearr_26422[(8)] = inst_26397);

return statearr_26422;
})();
var statearr_26423_26813 = state_26405__$1;
(statearr_26423_26813[(2)] = inst_26399);

(statearr_26423_26813[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26406 === (4))){
var inst_26401 = console.error("Error al obtener categor\u00EDas");
var state_26405__$1 = state_26405;
var statearr_26424_26814 = state_26405__$1;
(statearr_26424_26814[(2)] = inst_26401);

(statearr_26424_26814[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26406 === (5))){
var inst_26403 = (state_26405[(2)]);
var state_26405__$1 = state_26405;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26405__$1,inst_26403);
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
var statearr_26425 = [null,null,null,null,null,null,null,null,null];
(statearr_26425[(0)] = app$db$fetch_categorias_$_state_machine__11943__auto__);

(statearr_26425[(1)] = (1));

return statearr_26425;
});
var app$db$fetch_categorias_$_state_machine__11943__auto____1 = (function (state_26405){
while(true){
var ret_value__11944__auto__ = (function (){try{while(true){
var result__11945__auto__ = switch__11942__auto__(state_26405);
if(cljs.core.keyword_identical_QMARK_(result__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11945__auto__;
}
break;
}
}catch (e26426){var ex__11946__auto__ = e26426;
var statearr_26427_26815 = state_26405;
(statearr_26427_26815[(2)] = ex__11946__auto__);


if(cljs.core.seq((state_26405[(4)]))){
var statearr_26428_26816 = state_26405;
(statearr_26428_26816[(1)] = cljs.core.first((state_26405[(4)])));

} else {
throw ex__11946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26817 = state_26405;
state_26405 = G__26817;
continue;
} else {
return ret_value__11944__auto__;
}
break;
}
});
app$db$fetch_categorias_$_state_machine__11943__auto__ = function(state_26405){
switch(arguments.length){
case 0:
return app$db$fetch_categorias_$_state_machine__11943__auto____0.call(this);
case 1:
return app$db$fetch_categorias_$_state_machine__11943__auto____1.call(this,state_26405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$fetch_categorias_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$fetch_categorias_$_state_machine__11943__auto____0;
app$db$fetch_categorias_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$fetch_categorias_$_state_machine__11943__auto____1;
return app$db$fetch_categorias_$_state_machine__11943__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_26429 = f__12040__auto__();
(statearr_26429[(6)] = c__12039__auto__);

return statearr_26429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
});
app.db.fetch_list_categorias = (function app$db$fetch_list_categorias(){
console.log("Llamando a fetch-categorias...");

var c__12039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__11942__auto__ = (function (state_26454){
var state_val_26455 = (state_26454[(1)]);
if((state_val_26455 === (1))){
var inst_26431 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"response-format","response-format",1664465322)];
var inst_26432 = [new cljs.core.Keyword(null,"keywords?","keywords?",764949733)];
var inst_26433 = [true];
var inst_26434 = cljs.core.PersistentHashMap.fromArrays(inst_26432,inst_26433);
var inst_26435 = ajax.core.json_response_format(inst_26434);
var inst_26436 = [true,inst_26435];
var inst_26437 = cljs.core.PersistentHashMap.fromArrays(inst_26431,inst_26436);
var inst_26438 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic("/api/categorias/todas",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_26437], 0));
var state_26454__$1 = state_26454;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26454__$1,(2),inst_26438);
} else {
if((state_val_26455 === (2))){
var inst_26440 = (state_26454[(2)]);
var inst_26441 = cljs.core.__destructure_map(inst_26440);
var inst_26442 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26441,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_26443 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26441,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_26444 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_26442);
var state_26454__$1 = (function (){var statearr_26456 = state_26454;
(statearr_26456[(7)] = inst_26443);

return statearr_26456;
})();
if(inst_26444){
var statearr_26457_26818 = state_26454__$1;
(statearr_26457_26818[(1)] = (3));

} else {
var statearr_26458_26819 = state_26454__$1;
(statearr_26458_26819[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26455 === (3))){
var inst_26443 = (state_26454[(7)]);
var inst_26446 = cljs.core.reset_BANG_(app.db.categorias,inst_26443);
var inst_26447 = cljs.core.deref(app.db.categorias);
var inst_26448 = console.log("Categor\u00EDas actualizadas:",inst_26447);
var state_26454__$1 = (function (){var statearr_26459 = state_26454;
(statearr_26459[(8)] = inst_26446);

return statearr_26459;
})();
var statearr_26460_26820 = state_26454__$1;
(statearr_26460_26820[(2)] = inst_26448);

(statearr_26460_26820[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26455 === (4))){
var inst_26450 = console.error("Error al obtener categor\u00EDas");
var state_26454__$1 = state_26454;
var statearr_26461_26821 = state_26454__$1;
(statearr_26461_26821[(2)] = inst_26450);

(statearr_26461_26821[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26455 === (5))){
var inst_26452 = (state_26454[(2)]);
var state_26454__$1 = state_26454;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26454__$1,inst_26452);
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
var statearr_26462 = [null,null,null,null,null,null,null,null,null];
(statearr_26462[(0)] = app$db$fetch_list_categorias_$_state_machine__11943__auto__);

(statearr_26462[(1)] = (1));

return statearr_26462;
});
var app$db$fetch_list_categorias_$_state_machine__11943__auto____1 = (function (state_26454){
while(true){
var ret_value__11944__auto__ = (function (){try{while(true){
var result__11945__auto__ = switch__11942__auto__(state_26454);
if(cljs.core.keyword_identical_QMARK_(result__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11945__auto__;
}
break;
}
}catch (e26463){var ex__11946__auto__ = e26463;
var statearr_26464_26822 = state_26454;
(statearr_26464_26822[(2)] = ex__11946__auto__);


if(cljs.core.seq((state_26454[(4)]))){
var statearr_26465_26823 = state_26454;
(statearr_26465_26823[(1)] = cljs.core.first((state_26454[(4)])));

} else {
throw ex__11946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26824 = state_26454;
state_26454 = G__26824;
continue;
} else {
return ret_value__11944__auto__;
}
break;
}
});
app$db$fetch_list_categorias_$_state_machine__11943__auto__ = function(state_26454){
switch(arguments.length){
case 0:
return app$db$fetch_list_categorias_$_state_machine__11943__auto____0.call(this);
case 1:
return app$db$fetch_list_categorias_$_state_machine__11943__auto____1.call(this,state_26454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$fetch_list_categorias_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$fetch_list_categorias_$_state_machine__11943__auto____0;
app$db$fetch_list_categorias_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$fetch_list_categorias_$_state_machine__11943__auto____1;
return app$db$fetch_list_categorias_$_state_machine__11943__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_26466 = f__12040__auto__();
(statearr_26466[(6)] = c__12039__auto__);

return statearr_26466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
});
app.db.fetch_productos = (function app$db$fetch_productos(categoria_id){
console.log("Llamando a fetch-productos para categor\u00EDa:",categoria_id);

var c__12039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__11942__auto__ = (function (state_26500){
var state_val_26501 = (state_26500[(1)]);
if((state_val_26501 === (1))){
var inst_26468 = ["/api/productos/categoria/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(categoria_id)].join('');
var inst_26469 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"response-format","response-format",1664465322)];
var inst_26470 = [new cljs.core.Keyword(null,"keywords?","keywords?",764949733)];
var inst_26471 = [true];
var inst_26472 = cljs.core.PersistentHashMap.fromArrays(inst_26470,inst_26471);
var inst_26473 = ajax.core.json_response_format(inst_26472);
var inst_26474 = [true,inst_26473];
var inst_26475 = cljs.core.PersistentHashMap.fromArrays(inst_26469,inst_26474);
var inst_26476 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_26468,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_26475], 0));
var state_26500__$1 = state_26500;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26500__$1,(2),inst_26476);
} else {
if((state_val_26501 === (2))){
var inst_26478 = (state_26500[(2)]);
var inst_26479 = cljs.core.__destructure_map(inst_26478);
var inst_26480 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26479,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_26481 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26479,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_26482 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_26480);
var state_26500__$1 = (function (){var statearr_26502 = state_26500;
(statearr_26502[(7)] = inst_26481);

return statearr_26502;
})();
if(inst_26482){
var statearr_26503_26825 = state_26500__$1;
(statearr_26503_26825[(1)] = (3));

} else {
var statearr_26504_26826 = state_26500__$1;
(statearr_26504_26826[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26501 === (3))){
var inst_26481 = (state_26500[(7)]);
var inst_26484 = cljs.core.map_QMARK_(inst_26481);
var state_26500__$1 = state_26500;
if(inst_26484){
var statearr_26505_26827 = state_26500__$1;
(statearr_26505_26827[(1)] = (6));

} else {
var statearr_26506_26828 = state_26500__$1;
(statearr_26506_26828[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26501 === (4))){
var inst_26494 = cljs.core.PersistentVector.EMPTY;
var inst_26495 = cljs.core.reset_BANG_(app.db.productos,inst_26494);
var inst_26496 = console.log("La categor\u00EDa seleccionada no tiene productos asociados.");
var state_26500__$1 = (function (){var statearr_26507 = state_26500;
(statearr_26507[(8)] = inst_26495);

return statearr_26507;
})();
var statearr_26508_26829 = state_26500__$1;
(statearr_26508_26829[(2)] = inst_26496);

(statearr_26508_26829[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26501 === (5))){
var inst_26498 = (state_26500[(2)]);
var state_26500__$1 = state_26500;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26500__$1,inst_26498);
} else {
if((state_val_26501 === (6))){
var inst_26481 = (state_26500[(7)]);
var inst_26486 = new cljs.core.Keyword(null,"productos","productos",-1282966179).cljs$core$IFn$_invoke$arity$1(inst_26481);
var state_26500__$1 = state_26500;
var statearr_26509_26830 = state_26500__$1;
(statearr_26509_26830[(2)] = inst_26486);

(statearr_26509_26830[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26501 === (7))){
var inst_26481 = (state_26500[(7)]);
var state_26500__$1 = state_26500;
var statearr_26510_26831 = state_26500__$1;
(statearr_26510_26831[(2)] = inst_26481);

(statearr_26510_26831[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26501 === (8))){
var inst_26489 = (state_26500[(2)]);
var inst_26490 = cljs.core.reset_BANG_(app.db.productos,inst_26489);
var inst_26491 = cljs.core.deref(app.db.productos);
var inst_26492 = console.log("Productos actualizados:",inst_26491);
var state_26500__$1 = (function (){var statearr_26511 = state_26500;
(statearr_26511[(9)] = inst_26490);

return statearr_26511;
})();
var statearr_26512_26832 = state_26500__$1;
(statearr_26512_26832[(2)] = inst_26492);

(statearr_26512_26832[(1)] = (5));


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
var statearr_26513 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26513[(0)] = app$db$fetch_productos_$_state_machine__11943__auto__);

(statearr_26513[(1)] = (1));

return statearr_26513;
});
var app$db$fetch_productos_$_state_machine__11943__auto____1 = (function (state_26500){
while(true){
var ret_value__11944__auto__ = (function (){try{while(true){
var result__11945__auto__ = switch__11942__auto__(state_26500);
if(cljs.core.keyword_identical_QMARK_(result__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11945__auto__;
}
break;
}
}catch (e26514){var ex__11946__auto__ = e26514;
var statearr_26515_26833 = state_26500;
(statearr_26515_26833[(2)] = ex__11946__auto__);


if(cljs.core.seq((state_26500[(4)]))){
var statearr_26516_26834 = state_26500;
(statearr_26516_26834[(1)] = cljs.core.first((state_26500[(4)])));

} else {
throw ex__11946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26835 = state_26500;
state_26500 = G__26835;
continue;
} else {
return ret_value__11944__auto__;
}
break;
}
});
app$db$fetch_productos_$_state_machine__11943__auto__ = function(state_26500){
switch(arguments.length){
case 0:
return app$db$fetch_productos_$_state_machine__11943__auto____0.call(this);
case 1:
return app$db$fetch_productos_$_state_machine__11943__auto____1.call(this,state_26500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$fetch_productos_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$fetch_productos_$_state_machine__11943__auto____0;
app$db$fetch_productos_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$fetch_productos_$_state_machine__11943__auto____1;
return app$db$fetch_productos_$_state_machine__11943__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_26517 = f__12040__auto__();
(statearr_26517[(6)] = c__12039__auto__);

return statearr_26517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
});
app.db.fetch_list_productos = (function app$db$fetch_list_productos(){
console.log("Llamando a fetch-list-productos...");

var c__12039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__11942__auto__ = (function (state_26542){
var state_val_26543 = (state_26542[(1)]);
if((state_val_26543 === (1))){
var inst_26519 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"response-format","response-format",1664465322)];
var inst_26520 = [new cljs.core.Keyword(null,"keywords?","keywords?",764949733)];
var inst_26521 = [true];
var inst_26522 = cljs.core.PersistentHashMap.fromArrays(inst_26520,inst_26521);
var inst_26523 = ajax.core.json_response_format(inst_26522);
var inst_26524 = [true,inst_26523];
var inst_26525 = cljs.core.PersistentHashMap.fromArrays(inst_26519,inst_26524);
var inst_26526 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic("/api/productos/",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_26525], 0));
var state_26542__$1 = state_26542;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26542__$1,(2),inst_26526);
} else {
if((state_val_26543 === (2))){
var inst_26528 = (state_26542[(2)]);
var inst_26529 = cljs.core.__destructure_map(inst_26528);
var inst_26530 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26529,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_26531 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26529,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_26532 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_26530);
var state_26542__$1 = (function (){var statearr_26544 = state_26542;
(statearr_26544[(7)] = inst_26531);

return statearr_26544;
})();
if(inst_26532){
var statearr_26545_26836 = state_26542__$1;
(statearr_26545_26836[(1)] = (3));

} else {
var statearr_26546_26837 = state_26542__$1;
(statearr_26546_26837[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26543 === (3))){
var inst_26531 = (state_26542[(7)]);
var inst_26534 = cljs.core.reset_BANG_(app.db.list_productos,inst_26531);
var inst_26535 = cljs.core.deref(app.db.categorias);
var inst_26536 = console.log("Productos actualizados:",inst_26535);
var state_26542__$1 = (function (){var statearr_26547 = state_26542;
(statearr_26547[(8)] = inst_26534);

return statearr_26547;
})();
var statearr_26548_26838 = state_26542__$1;
(statearr_26548_26838[(2)] = inst_26536);

(statearr_26548_26838[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26543 === (4))){
var inst_26538 = console.error("Error al obtener productos");
var state_26542__$1 = state_26542;
var statearr_26549_26839 = state_26542__$1;
(statearr_26549_26839[(2)] = inst_26538);

(statearr_26549_26839[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26543 === (5))){
var inst_26540 = (state_26542[(2)]);
var state_26542__$1 = state_26542;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26542__$1,inst_26540);
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
var statearr_26550 = [null,null,null,null,null,null,null,null,null];
(statearr_26550[(0)] = app$db$fetch_list_productos_$_state_machine__11943__auto__);

(statearr_26550[(1)] = (1));

return statearr_26550;
});
var app$db$fetch_list_productos_$_state_machine__11943__auto____1 = (function (state_26542){
while(true){
var ret_value__11944__auto__ = (function (){try{while(true){
var result__11945__auto__ = switch__11942__auto__(state_26542);
if(cljs.core.keyword_identical_QMARK_(result__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11945__auto__;
}
break;
}
}catch (e26551){var ex__11946__auto__ = e26551;
var statearr_26552_26840 = state_26542;
(statearr_26552_26840[(2)] = ex__11946__auto__);


if(cljs.core.seq((state_26542[(4)]))){
var statearr_26553_26841 = state_26542;
(statearr_26553_26841[(1)] = cljs.core.first((state_26542[(4)])));

} else {
throw ex__11946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26842 = state_26542;
state_26542 = G__26842;
continue;
} else {
return ret_value__11944__auto__;
}
break;
}
});
app$db$fetch_list_productos_$_state_machine__11943__auto__ = function(state_26542){
switch(arguments.length){
case 0:
return app$db$fetch_list_productos_$_state_machine__11943__auto____0.call(this);
case 1:
return app$db$fetch_list_productos_$_state_machine__11943__auto____1.call(this,state_26542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$fetch_list_productos_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$fetch_list_productos_$_state_machine__11943__auto____0;
app$db$fetch_list_productos_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$fetch_list_productos_$_state_machine__11943__auto____1;
return app$db$fetch_list_productos_$_state_machine__11943__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_26554 = f__12040__auto__();
(statearr_26554[(6)] = c__12039__auto__);

return statearr_26554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
});
app.db.cargar_imagenes = (function app$db$cargar_imagenes(){
console.log("Llamando a cargar-imagenes...");

return fetch("/api/imagenes").then((function (p1__26555_SHARP_){
return p1__26555_SHARP_.json();
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
var f__12040__auto__ = (function (){var switch__11942__auto__ = (function (state_26579){
var state_val_26580 = (state_26579[(1)]);
if((state_val_26580 === (1))){
var inst_26557 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"json-params","json-params",-1112693596),new cljs.core.Keyword(null,"response-format","response-format",1664465322)];
var inst_26558 = [new cljs.core.Keyword(null,"keywords?","keywords?",764949733)];
var inst_26559 = [true];
var inst_26560 = cljs.core.PersistentHashMap.fromArrays(inst_26558,inst_26559);
var inst_26561 = ajax.core.json_response_format(inst_26560);
var inst_26562 = [true,producto,inst_26561];
var inst_26563 = cljs.core.PersistentHashMap.fromArrays(inst_26557,inst_26562);
var inst_26564 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic("/api/producto/nuevo",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_26563], 0));
var state_26579__$1 = state_26579;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26579__$1,(2),inst_26564);
} else {
if((state_val_26580 === (2))){
var inst_26566 = (state_26579[(2)]);
var inst_26567 = cljs.core.__destructure_map(inst_26566);
var inst_26568 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26567,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_26569 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26567,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_26570 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((201),inst_26568);
var state_26579__$1 = (function (){var statearr_26581 = state_26579;
(statearr_26581[(7)] = inst_26569);

return statearr_26581;
})();
if(inst_26570){
var statearr_26582_26843 = state_26579__$1;
(statearr_26582_26843[(1)] = (3));

} else {
var statearr_26583_26844 = state_26579__$1;
(statearr_26583_26844[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26580 === (3))){
var inst_26569 = (state_26579[(7)]);
var inst_26572 = console.log("Producto insertado correctamente",inst_26569);
var inst_26573 = alert("Producto creado correctamente");
var state_26579__$1 = (function (){var statearr_26584 = state_26579;
(statearr_26584[(8)] = inst_26572);

return statearr_26584;
})();
var statearr_26585_26845 = state_26579__$1;
(statearr_26585_26845[(2)] = inst_26573);

(statearr_26585_26845[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26580 === (4))){
var inst_26569 = (state_26579[(7)]);
var inst_26575 = console.error("Error al insertar producto",inst_26569);
var state_26579__$1 = state_26579;
var statearr_26586_26846 = state_26579__$1;
(statearr_26586_26846[(2)] = inst_26575);

(statearr_26586_26846[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26580 === (5))){
var inst_26577 = (state_26579[(2)]);
var state_26579__$1 = state_26579;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26579__$1,inst_26577);
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
var statearr_26587 = [null,null,null,null,null,null,null,null,null];
(statearr_26587[(0)] = app$db$insertar_producto_$_state_machine__11943__auto__);

(statearr_26587[(1)] = (1));

return statearr_26587;
});
var app$db$insertar_producto_$_state_machine__11943__auto____1 = (function (state_26579){
while(true){
var ret_value__11944__auto__ = (function (){try{while(true){
var result__11945__auto__ = switch__11942__auto__(state_26579);
if(cljs.core.keyword_identical_QMARK_(result__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11945__auto__;
}
break;
}
}catch (e26588){var ex__11946__auto__ = e26588;
var statearr_26589_26848 = state_26579;
(statearr_26589_26848[(2)] = ex__11946__auto__);


if(cljs.core.seq((state_26579[(4)]))){
var statearr_26590_26849 = state_26579;
(statearr_26590_26849[(1)] = cljs.core.first((state_26579[(4)])));

} else {
throw ex__11946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26850 = state_26579;
state_26579 = G__26850;
continue;
} else {
return ret_value__11944__auto__;
}
break;
}
});
app$db$insertar_producto_$_state_machine__11943__auto__ = function(state_26579){
switch(arguments.length){
case 0:
return app$db$insertar_producto_$_state_machine__11943__auto____0.call(this);
case 1:
return app$db$insertar_producto_$_state_machine__11943__auto____1.call(this,state_26579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$insertar_producto_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$insertar_producto_$_state_machine__11943__auto____0;
app$db$insertar_producto_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$insertar_producto_$_state_machine__11943__auto____1;
return app$db$insertar_producto_$_state_machine__11943__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_26591 = f__12040__auto__();
(statearr_26591[(6)] = c__12039__auto__);

return statearr_26591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
});
app.db.insertar_categoria = (function app$db$insertar_categoria(producto){
console.log("Llamando a insertar-categoria...",producto);

var c__12039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__11942__auto__ = (function (state_26615){
var state_val_26616 = (state_26615[(1)]);
if((state_val_26616 === (1))){
var inst_26593 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"json-params","json-params",-1112693596),new cljs.core.Keyword(null,"response-format","response-format",1664465322)];
var inst_26594 = [new cljs.core.Keyword(null,"keywords?","keywords?",764949733)];
var inst_26595 = [true];
var inst_26596 = cljs.core.PersistentHashMap.fromArrays(inst_26594,inst_26595);
var inst_26597 = ajax.core.json_response_format(inst_26596);
var inst_26598 = [true,producto,inst_26597];
var inst_26599 = cljs.core.PersistentHashMap.fromArrays(inst_26593,inst_26598);
var inst_26600 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic("/api/categoria/nuevo",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_26599], 0));
var state_26615__$1 = state_26615;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26615__$1,(2),inst_26600);
} else {
if((state_val_26616 === (2))){
var inst_26602 = (state_26615[(2)]);
var inst_26603 = cljs.core.__destructure_map(inst_26602);
var inst_26604 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26603,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_26605 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26603,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_26606 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((201),inst_26604);
var state_26615__$1 = (function (){var statearr_26617 = state_26615;
(statearr_26617[(7)] = inst_26605);

return statearr_26617;
})();
if(inst_26606){
var statearr_26618_26855 = state_26615__$1;
(statearr_26618_26855[(1)] = (3));

} else {
var statearr_26619_26856 = state_26615__$1;
(statearr_26619_26856[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26616 === (3))){
var inst_26605 = (state_26615[(7)]);
var inst_26608 = console.log("Categoria insertada correctamente",inst_26605);
var inst_26609 = alert("Categoria creada correctamente, recarga la lista de 'Mostrar categorias' dandole al boton, para verla y poder editarla.");
var state_26615__$1 = (function (){var statearr_26620 = state_26615;
(statearr_26620[(8)] = inst_26608);

return statearr_26620;
})();
var statearr_26621_26857 = state_26615__$1;
(statearr_26621_26857[(2)] = inst_26609);

(statearr_26621_26857[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26616 === (4))){
var inst_26605 = (state_26615[(7)]);
var inst_26611 = console.error("Error al insertar categoria",inst_26605);
var state_26615__$1 = state_26615;
var statearr_26622_26863 = state_26615__$1;
(statearr_26622_26863[(2)] = inst_26611);

(statearr_26622_26863[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26616 === (5))){
var inst_26613 = (state_26615[(2)]);
var state_26615__$1 = state_26615;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26615__$1,inst_26613);
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
var statearr_26623 = [null,null,null,null,null,null,null,null,null];
(statearr_26623[(0)] = app$db$insertar_categoria_$_state_machine__11943__auto__);

(statearr_26623[(1)] = (1));

return statearr_26623;
});
var app$db$insertar_categoria_$_state_machine__11943__auto____1 = (function (state_26615){
while(true){
var ret_value__11944__auto__ = (function (){try{while(true){
var result__11945__auto__ = switch__11942__auto__(state_26615);
if(cljs.core.keyword_identical_QMARK_(result__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11945__auto__;
}
break;
}
}catch (e26624){var ex__11946__auto__ = e26624;
var statearr_26625_26865 = state_26615;
(statearr_26625_26865[(2)] = ex__11946__auto__);


if(cljs.core.seq((state_26615[(4)]))){
var statearr_26626_26866 = state_26615;
(statearr_26626_26866[(1)] = cljs.core.first((state_26615[(4)])));

} else {
throw ex__11946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26867 = state_26615;
state_26615 = G__26867;
continue;
} else {
return ret_value__11944__auto__;
}
break;
}
});
app$db$insertar_categoria_$_state_machine__11943__auto__ = function(state_26615){
switch(arguments.length){
case 0:
return app$db$insertar_categoria_$_state_machine__11943__auto____0.call(this);
case 1:
return app$db$insertar_categoria_$_state_machine__11943__auto____1.call(this,state_26615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$insertar_categoria_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$insertar_categoria_$_state_machine__11943__auto____0;
app$db$insertar_categoria_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$insertar_categoria_$_state_machine__11943__auto____1;
return app$db$insertar_categoria_$_state_machine__11943__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_26627 = f__12040__auto__();
(statearr_26627[(6)] = c__12039__auto__);

return statearr_26627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
});
app.db.eliminar_producto = (function app$db$eliminar_producto(id){
var c__12039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__11942__auto__ = (function (state_26652){
var state_val_26653 = (state_26652[(1)]);
if((state_val_26653 === (1))){
var inst_26629 = ["/api/producto/eliminar/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('');
var inst_26630 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"response-format","response-format",1664465322)];
var inst_26631 = [new cljs.core.Keyword(null,"keywords?","keywords?",764949733)];
var inst_26632 = [true];
var inst_26633 = cljs.core.PersistentHashMap.fromArrays(inst_26631,inst_26632);
var inst_26634 = ajax.core.json_response_format(inst_26633);
var inst_26635 = [true,inst_26634];
var inst_26636 = cljs.core.PersistentHashMap.fromArrays(inst_26630,inst_26635);
var inst_26637 = cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(inst_26629,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_26636], 0));
var state_26652__$1 = state_26652;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26652__$1,(2),inst_26637);
} else {
if((state_val_26653 === (2))){
var inst_26639 = (state_26652[(2)]);
var inst_26640 = cljs.core.__destructure_map(inst_26639);
var inst_26641 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26640,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_26642 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26640,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_26643 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_26641);
var state_26652__$1 = (function (){var statearr_26654 = state_26652;
(statearr_26654[(7)] = inst_26642);

return statearr_26654;
})();
if(inst_26643){
var statearr_26655_26873 = state_26652__$1;
(statearr_26655_26873[(1)] = (3));

} else {
var statearr_26656_26874 = state_26652__$1;
(statearr_26656_26874[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26653 === (3))){
var inst_26642 = (state_26652[(7)]);
var inst_26645 = console.log("Producto eliminado",inst_26642);
var inst_26646 = alert("Producto eliminado correctamente, dale a boton de 'Mostrar productos'.");
var state_26652__$1 = (function (){var statearr_26657 = state_26652;
(statearr_26657[(8)] = inst_26645);

return statearr_26657;
})();
var statearr_26658_26879 = state_26652__$1;
(statearr_26658_26879[(2)] = inst_26646);

(statearr_26658_26879[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26653 === (4))){
var inst_26642 = (state_26652[(7)]);
var inst_26648 = console.error("Error al eliminar el producto",inst_26642);
var state_26652__$1 = state_26652;
var statearr_26659_26880 = state_26652__$1;
(statearr_26659_26880[(2)] = inst_26648);

(statearr_26659_26880[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26653 === (5))){
var inst_26650 = (state_26652[(2)]);
var state_26652__$1 = state_26652;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26652__$1,inst_26650);
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
var statearr_26660 = [null,null,null,null,null,null,null,null,null];
(statearr_26660[(0)] = app$db$eliminar_producto_$_state_machine__11943__auto__);

(statearr_26660[(1)] = (1));

return statearr_26660;
});
var app$db$eliminar_producto_$_state_machine__11943__auto____1 = (function (state_26652){
while(true){
var ret_value__11944__auto__ = (function (){try{while(true){
var result__11945__auto__ = switch__11942__auto__(state_26652);
if(cljs.core.keyword_identical_QMARK_(result__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11945__auto__;
}
break;
}
}catch (e26661){var ex__11946__auto__ = e26661;
var statearr_26662_26884 = state_26652;
(statearr_26662_26884[(2)] = ex__11946__auto__);


if(cljs.core.seq((state_26652[(4)]))){
var statearr_26663_26885 = state_26652;
(statearr_26663_26885[(1)] = cljs.core.first((state_26652[(4)])));

} else {
throw ex__11946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26886 = state_26652;
state_26652 = G__26886;
continue;
} else {
return ret_value__11944__auto__;
}
break;
}
});
app$db$eliminar_producto_$_state_machine__11943__auto__ = function(state_26652){
switch(arguments.length){
case 0:
return app$db$eliminar_producto_$_state_machine__11943__auto____0.call(this);
case 1:
return app$db$eliminar_producto_$_state_machine__11943__auto____1.call(this,state_26652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$eliminar_producto_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$eliminar_producto_$_state_machine__11943__auto____0;
app$db$eliminar_producto_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$eliminar_producto_$_state_machine__11943__auto____1;
return app$db$eliminar_producto_$_state_machine__11943__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_26664 = f__12040__auto__();
(statearr_26664[(6)] = c__12039__auto__);

return statearr_26664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
});
app.db.activo_producto = (function app$db$activo_producto(id){
var usuario_id = localStorage.getItem("id");
var c__12039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__11942__auto__ = (function (state_26702){
var state_val_26703 = (state_26702[(1)]);
if((state_val_26703 === (1))){
var inst_26666 = ["/api/producto/activo/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('');
var inst_26667 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"response-format","response-format",1664465322)];
var inst_26668 = ["Content-Type"];
var inst_26669 = ["application/json"];
var inst_26670 = cljs.core.PersistentHashMap.fromArrays(inst_26668,inst_26669);
var inst_26673 = ({"usuario_id":usuario_id});
var inst_26674 = JSON.stringify(inst_26673);
var inst_26675 = [new cljs.core.Keyword(null,"keywords?","keywords?",764949733)];
var inst_26676 = [true];
var inst_26677 = cljs.core.PersistentHashMap.fromArrays(inst_26675,inst_26676);
var inst_26678 = ajax.core.json_response_format(inst_26677);
var inst_26679 = [true,inst_26670,inst_26674,inst_26678];
var inst_26680 = cljs.core.PersistentHashMap.fromArrays(inst_26667,inst_26679);
var inst_26681 = cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(inst_26666,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_26680], 0));
var state_26702__$1 = state_26702;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26702__$1,(2),inst_26681);
} else {
if((state_val_26703 === (2))){
var inst_26683 = (state_26702[(2)]);
var inst_26684 = cljs.core.__destructure_map(inst_26683);
var inst_26685 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26684,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_26686 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26684,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_26687 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_26685);
var state_26702__$1 = (function (){var statearr_26704 = state_26702;
(statearr_26704[(7)] = inst_26686);

return statearr_26704;
})();
if(inst_26687){
var statearr_26705_26907 = state_26702__$1;
(statearr_26705_26907[(1)] = (3));

} else {
var statearr_26706_26908 = state_26702__$1;
(statearr_26706_26908[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26703 === (3))){
var inst_26686 = (state_26702[(7)]);
var inst_26689 = console.log("Estado actualizado",inst_26686);
var inst_26690 = new cljs.core.Keyword(null,"activo","activo",-1391186334).cljs$core$IFn$_invoke$arity$1(inst_26686);
var state_26702__$1 = (function (){var statearr_26707 = state_26702;
(statearr_26707[(8)] = inst_26689);

return statearr_26707;
})();
if(cljs.core.truth_(inst_26690)){
var statearr_26708_26913 = state_26702__$1;
(statearr_26708_26913[(1)] = (6));

} else {
var statearr_26709_26915 = state_26702__$1;
(statearr_26709_26915[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26703 === (4))){
var inst_26686 = (state_26702[(7)]);
var inst_26698 = console.error("Error al actualizar estado del producto",inst_26686);
var state_26702__$1 = state_26702;
var statearr_26710_26918 = state_26702__$1;
(statearr_26710_26918[(2)] = inst_26698);

(statearr_26710_26918[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26703 === (5))){
var inst_26700 = (state_26702[(2)]);
var state_26702__$1 = state_26702;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26702__$1,inst_26700);
} else {
if((state_val_26703 === (6))){
var state_26702__$1 = state_26702;
var statearr_26711_26923 = state_26702__$1;
(statearr_26711_26923[(2)] = "activado");

(statearr_26711_26923[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26703 === (7))){
var state_26702__$1 = state_26702;
var statearr_26712_26926 = state_26702__$1;
(statearr_26712_26926[(2)] = "desactivado");

(statearr_26712_26926[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26703 === (8))){
var inst_26694 = (state_26702[(2)]);
var inst_26695 = ["Producto ",inst_26694," correctamente"].join('');
var inst_26696 = alert(inst_26695);
var state_26702__$1 = state_26702;
var statearr_26713_26931 = state_26702__$1;
(statearr_26713_26931[(2)] = inst_26696);

(statearr_26713_26931[(1)] = (5));


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
var statearr_26714 = [null,null,null,null,null,null,null,null,null];
(statearr_26714[(0)] = app$db$activo_producto_$_state_machine__11943__auto__);

(statearr_26714[(1)] = (1));

return statearr_26714;
});
var app$db$activo_producto_$_state_machine__11943__auto____1 = (function (state_26702){
while(true){
var ret_value__11944__auto__ = (function (){try{while(true){
var result__11945__auto__ = switch__11942__auto__(state_26702);
if(cljs.core.keyword_identical_QMARK_(result__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11945__auto__;
}
break;
}
}catch (e26715){var ex__11946__auto__ = e26715;
var statearr_26716_26941 = state_26702;
(statearr_26716_26941[(2)] = ex__11946__auto__);


if(cljs.core.seq((state_26702[(4)]))){
var statearr_26717_26947 = state_26702;
(statearr_26717_26947[(1)] = cljs.core.first((state_26702[(4)])));

} else {
throw ex__11946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26948 = state_26702;
state_26702 = G__26948;
continue;
} else {
return ret_value__11944__auto__;
}
break;
}
});
app$db$activo_producto_$_state_machine__11943__auto__ = function(state_26702){
switch(arguments.length){
case 0:
return app$db$activo_producto_$_state_machine__11943__auto____0.call(this);
case 1:
return app$db$activo_producto_$_state_machine__11943__auto____1.call(this,state_26702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$activo_producto_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$activo_producto_$_state_machine__11943__auto____0;
app$db$activo_producto_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$activo_producto_$_state_machine__11943__auto____1;
return app$db$activo_producto_$_state_machine__11943__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_26718 = f__12040__auto__();
(statearr_26718[(6)] = c__12039__auto__);

return statearr_26718;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
});
app.db.activo_categoria = (function app$db$activo_categoria(id){
var usuario_id = localStorage.getItem("id");
var c__12039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__11942__auto__ = (function (state_26756){
var state_val_26757 = (state_26756[(1)]);
if((state_val_26757 === (1))){
var inst_26720 = ["/api/categoria/activo/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('');
var inst_26721 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"response-format","response-format",1664465322)];
var inst_26722 = ["Content-Type"];
var inst_26723 = ["application/json"];
var inst_26724 = cljs.core.PersistentHashMap.fromArrays(inst_26722,inst_26723);
var inst_26727 = ({"usuario_id":usuario_id});
var inst_26728 = JSON.stringify(inst_26727);
var inst_26729 = [new cljs.core.Keyword(null,"keywords?","keywords?",764949733)];
var inst_26730 = [true];
var inst_26731 = cljs.core.PersistentHashMap.fromArrays(inst_26729,inst_26730);
var inst_26732 = ajax.core.json_response_format(inst_26731);
var inst_26733 = [true,inst_26724,inst_26728,inst_26732];
var inst_26734 = cljs.core.PersistentHashMap.fromArrays(inst_26721,inst_26733);
var inst_26735 = cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(inst_26720,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_26734], 0));
var state_26756__$1 = state_26756;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26756__$1,(2),inst_26735);
} else {
if((state_val_26757 === (2))){
var inst_26737 = (state_26756[(2)]);
var inst_26738 = cljs.core.__destructure_map(inst_26737);
var inst_26739 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26738,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_26740 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26738,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_26741 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_26739);
var state_26756__$1 = (function (){var statearr_26758 = state_26756;
(statearr_26758[(7)] = inst_26740);

return statearr_26758;
})();
if(inst_26741){
var statearr_26759_26958 = state_26756__$1;
(statearr_26759_26958[(1)] = (3));

} else {
var statearr_26760_26960 = state_26756__$1;
(statearr_26760_26960[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26757 === (3))){
var inst_26740 = (state_26756[(7)]);
var inst_26743 = console.log("Estado actualizado",inst_26740);
var inst_26744 = new cljs.core.Keyword(null,"activo","activo",-1391186334).cljs$core$IFn$_invoke$arity$1(inst_26740);
var state_26756__$1 = (function (){var statearr_26761 = state_26756;
(statearr_26761[(8)] = inst_26743);

return statearr_26761;
})();
if(cljs.core.truth_(inst_26744)){
var statearr_26762_26963 = state_26756__$1;
(statearr_26762_26963[(1)] = (6));

} else {
var statearr_26763_26965 = state_26756__$1;
(statearr_26763_26965[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26757 === (4))){
var inst_26740 = (state_26756[(7)]);
var inst_26752 = console.error("Error al actualizar estado de la categoria",inst_26740);
var state_26756__$1 = state_26756;
var statearr_26764_26970 = state_26756__$1;
(statearr_26764_26970[(2)] = inst_26752);

(statearr_26764_26970[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26757 === (5))){
var inst_26754 = (state_26756[(2)]);
var state_26756__$1 = state_26756;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26756__$1,inst_26754);
} else {
if((state_val_26757 === (6))){
var state_26756__$1 = state_26756;
var statearr_26765_26971 = state_26756__$1;
(statearr_26765_26971[(2)] = "activada");

(statearr_26765_26971[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26757 === (7))){
var state_26756__$1 = state_26756;
var statearr_26766_26972 = state_26756__$1;
(statearr_26766_26972[(2)] = "desactivada");

(statearr_26766_26972[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26757 === (8))){
var inst_26748 = (state_26756[(2)]);
var inst_26749 = ["Categoria ",inst_26748," correctamente."].join('');
var inst_26750 = alert(inst_26749);
var state_26756__$1 = state_26756;
var statearr_26767_26973 = state_26756__$1;
(statearr_26767_26973[(2)] = inst_26750);

(statearr_26767_26973[(1)] = (5));


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
var statearr_26768 = [null,null,null,null,null,null,null,null,null];
(statearr_26768[(0)] = app$db$activo_categoria_$_state_machine__11943__auto__);

(statearr_26768[(1)] = (1));

return statearr_26768;
});
var app$db$activo_categoria_$_state_machine__11943__auto____1 = (function (state_26756){
while(true){
var ret_value__11944__auto__ = (function (){try{while(true){
var result__11945__auto__ = switch__11942__auto__(state_26756);
if(cljs.core.keyword_identical_QMARK_(result__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11945__auto__;
}
break;
}
}catch (e26769){var ex__11946__auto__ = e26769;
var statearr_26770_26974 = state_26756;
(statearr_26770_26974[(2)] = ex__11946__auto__);


if(cljs.core.seq((state_26756[(4)]))){
var statearr_26771_26982 = state_26756;
(statearr_26771_26982[(1)] = cljs.core.first((state_26756[(4)])));

} else {
throw ex__11946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26983 = state_26756;
state_26756 = G__26983;
continue;
} else {
return ret_value__11944__auto__;
}
break;
}
});
app$db$activo_categoria_$_state_machine__11943__auto__ = function(state_26756){
switch(arguments.length){
case 0:
return app$db$activo_categoria_$_state_machine__11943__auto____0.call(this);
case 1:
return app$db$activo_categoria_$_state_machine__11943__auto____1.call(this,state_26756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$activo_categoria_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$activo_categoria_$_state_machine__11943__auto____0;
app$db$activo_categoria_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$activo_categoria_$_state_machine__11943__auto____1;
return app$db$activo_categoria_$_state_machine__11943__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_26772 = f__12040__auto__();
(statearr_26772[(6)] = c__12039__auto__);

return statearr_26772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
});
app.db.eliminar_categoria = (function app$db$eliminar_categoria(id){
var c__12039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__11942__auto__ = (function (state_26797){
var state_val_26798 = (state_26797[(1)]);
if((state_val_26798 === (1))){
var inst_26774 = ["/api/categoria/eliminar/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('');
var inst_26775 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"response-format","response-format",1664465322)];
var inst_26776 = [new cljs.core.Keyword(null,"keywords?","keywords?",764949733)];
var inst_26777 = [true];
var inst_26778 = cljs.core.PersistentHashMap.fromArrays(inst_26776,inst_26777);
var inst_26779 = ajax.core.json_response_format(inst_26778);
var inst_26780 = [true,inst_26779];
var inst_26781 = cljs.core.PersistentHashMap.fromArrays(inst_26775,inst_26780);
var inst_26782 = cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(inst_26774,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_26781], 0));
var state_26797__$1 = state_26797;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26797__$1,(2),inst_26782);
} else {
if((state_val_26798 === (2))){
var inst_26784 = (state_26797[(2)]);
var inst_26785 = cljs.core.__destructure_map(inst_26784);
var inst_26786 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26785,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_26787 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26785,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_26788 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_26786);
var state_26797__$1 = (function (){var statearr_26799 = state_26797;
(statearr_26799[(7)] = inst_26787);

return statearr_26799;
})();
if(inst_26788){
var statearr_26800_26996 = state_26797__$1;
(statearr_26800_26996[(1)] = (3));

} else {
var statearr_26801_26997 = state_26797__$1;
(statearr_26801_26997[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26798 === (3))){
var inst_26787 = (state_26797[(7)]);
var inst_26790 = console.log("Categor\u00EDa eliminada",inst_26787);
var inst_26791 = alert("Categor\u00EDa eliminada correctamente, dale a boton de 'Mostrar categorias'.");
var state_26797__$1 = (function (){var statearr_26802 = state_26797;
(statearr_26802[(8)] = inst_26790);

return statearr_26802;
})();
var statearr_26803_27002 = state_26797__$1;
(statearr_26803_27002[(2)] = inst_26791);

(statearr_26803_27002[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26798 === (4))){
var inst_26787 = (state_26797[(7)]);
var inst_26793 = console.error("Error al eliminar categor\u00EDa",inst_26787);
var state_26797__$1 = state_26797;
var statearr_26804_27005 = state_26797__$1;
(statearr_26804_27005[(2)] = inst_26793);

(statearr_26804_27005[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26798 === (5))){
var inst_26795 = (state_26797[(2)]);
var state_26797__$1 = state_26797;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26797__$1,inst_26795);
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
var statearr_26805 = [null,null,null,null,null,null,null,null,null];
(statearr_26805[(0)] = app$db$eliminar_categoria_$_state_machine__11943__auto__);

(statearr_26805[(1)] = (1));

return statearr_26805;
});
var app$db$eliminar_categoria_$_state_machine__11943__auto____1 = (function (state_26797){
while(true){
var ret_value__11944__auto__ = (function (){try{while(true){
var result__11945__auto__ = switch__11942__auto__(state_26797);
if(cljs.core.keyword_identical_QMARK_(result__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11945__auto__;
}
break;
}
}catch (e26806){var ex__11946__auto__ = e26806;
var statearr_26807_27009 = state_26797;
(statearr_26807_27009[(2)] = ex__11946__auto__);


if(cljs.core.seq((state_26797[(4)]))){
var statearr_26808_27011 = state_26797;
(statearr_26808_27011[(1)] = cljs.core.first((state_26797[(4)])));

} else {
throw ex__11946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27012 = state_26797;
state_26797 = G__27012;
continue;
} else {
return ret_value__11944__auto__;
}
break;
}
});
app$db$eliminar_categoria_$_state_machine__11943__auto__ = function(state_26797){
switch(arguments.length){
case 0:
return app$db$eliminar_categoria_$_state_machine__11943__auto____0.call(this);
case 1:
return app$db$eliminar_categoria_$_state_machine__11943__auto____1.call(this,state_26797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$eliminar_categoria_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$eliminar_categoria_$_state_machine__11943__auto____0;
app$db$eliminar_categoria_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$eliminar_categoria_$_state_machine__11943__auto____1;
return app$db$eliminar_categoria_$_state_machine__11943__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_26809 = f__12040__auto__();
(statearr_26809[(6)] = c__12039__auto__);

return statearr_26809;
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
})).catch((function (p1__26810_SHARP_){
return alert(["Error al generar el PDF: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26810_SHARP_)].join(''));
}));
});

//# sourceMappingURL=app.db.js.map
