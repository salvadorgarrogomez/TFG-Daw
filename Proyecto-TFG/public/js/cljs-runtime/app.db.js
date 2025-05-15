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
var f__12040__auto__ = (function (){var switch__11942__auto__ = (function (state_17563){
var state_val_17564 = (state_17563[(1)]);
if((state_val_17564 === (1))){
var inst_17540 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"response-format","response-format",1664465322)];
var inst_17541 = [new cljs.core.Keyword(null,"keywords?","keywords?",764949733)];
var inst_17542 = [true];
var inst_17543 = cljs.core.PersistentHashMap.fromArrays(inst_17541,inst_17542);
var inst_17544 = ajax.core.json_response_format(inst_17543);
var inst_17545 = [true,inst_17544];
var inst_17546 = cljs.core.PersistentHashMap.fromArrays(inst_17540,inst_17545);
var inst_17547 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic("/api/categorias/",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_17546], 0));
var state_17563__$1 = state_17563;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17563__$1,(2),inst_17547);
} else {
if((state_val_17564 === (2))){
var inst_17549 = (state_17563[(2)]);
var inst_17550 = cljs.core.__destructure_map(inst_17549);
var inst_17551 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17550,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_17552 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17550,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_17553 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_17551);
var state_17563__$1 = (function (){var statearr_17565 = state_17563;
(statearr_17565[(7)] = inst_17552);

return statearr_17565;
})();
if(inst_17553){
var statearr_17566_17957 = state_17563__$1;
(statearr_17566_17957[(1)] = (3));

} else {
var statearr_17567_17958 = state_17563__$1;
(statearr_17567_17958[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17564 === (3))){
var inst_17552 = (state_17563[(7)]);
var inst_17555 = cljs.core.reset_BANG_(app.db.categorias,inst_17552);
var inst_17556 = cljs.core.deref(app.db.categorias);
var inst_17557 = console.log("Categor\u00EDas actualizadas:",inst_17556);
var state_17563__$1 = (function (){var statearr_17568 = state_17563;
(statearr_17568[(8)] = inst_17555);

return statearr_17568;
})();
var statearr_17569_17959 = state_17563__$1;
(statearr_17569_17959[(2)] = inst_17557);

(statearr_17569_17959[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17564 === (4))){
var inst_17559 = console.error("Error al obtener categor\u00EDas");
var state_17563__$1 = state_17563;
var statearr_17570_17961 = state_17563__$1;
(statearr_17570_17961[(2)] = inst_17559);

(statearr_17570_17961[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17564 === (5))){
var inst_17561 = (state_17563[(2)]);
var state_17563__$1 = state_17563;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17563__$1,inst_17561);
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
var statearr_17571 = [null,null,null,null,null,null,null,null,null];
(statearr_17571[(0)] = app$db$fetch_categorias_$_state_machine__11943__auto__);

(statearr_17571[(1)] = (1));

return statearr_17571;
});
var app$db$fetch_categorias_$_state_machine__11943__auto____1 = (function (state_17563){
while(true){
var ret_value__11944__auto__ = (function (){try{while(true){
var result__11945__auto__ = switch__11942__auto__(state_17563);
if(cljs.core.keyword_identical_QMARK_(result__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11945__auto__;
}
break;
}
}catch (e17572){var ex__11946__auto__ = e17572;
var statearr_17573_17962 = state_17563;
(statearr_17573_17962[(2)] = ex__11946__auto__);


if(cljs.core.seq((state_17563[(4)]))){
var statearr_17574_17963 = state_17563;
(statearr_17574_17963[(1)] = cljs.core.first((state_17563[(4)])));

} else {
throw ex__11946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17965 = state_17563;
state_17563 = G__17965;
continue;
} else {
return ret_value__11944__auto__;
}
break;
}
});
app$db$fetch_categorias_$_state_machine__11943__auto__ = function(state_17563){
switch(arguments.length){
case 0:
return app$db$fetch_categorias_$_state_machine__11943__auto____0.call(this);
case 1:
return app$db$fetch_categorias_$_state_machine__11943__auto____1.call(this,state_17563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$fetch_categorias_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$fetch_categorias_$_state_machine__11943__auto____0;
app$db$fetch_categorias_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$fetch_categorias_$_state_machine__11943__auto____1;
return app$db$fetch_categorias_$_state_machine__11943__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_17575 = f__12040__auto__();
(statearr_17575[(6)] = c__12039__auto__);

return statearr_17575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
});
app.db.fetch_list_categorias = (function app$db$fetch_list_categorias(){
console.log("Llamando a fetch-categorias...");

var c__12039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__11942__auto__ = (function (state_17600){
var state_val_17601 = (state_17600[(1)]);
if((state_val_17601 === (1))){
var inst_17577 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"response-format","response-format",1664465322)];
var inst_17578 = [new cljs.core.Keyword(null,"keywords?","keywords?",764949733)];
var inst_17579 = [true];
var inst_17580 = cljs.core.PersistentHashMap.fromArrays(inst_17578,inst_17579);
var inst_17581 = ajax.core.json_response_format(inst_17580);
var inst_17582 = [true,inst_17581];
var inst_17583 = cljs.core.PersistentHashMap.fromArrays(inst_17577,inst_17582);
var inst_17584 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic("/api/categorias/todas",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_17583], 0));
var state_17600__$1 = state_17600;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17600__$1,(2),inst_17584);
} else {
if((state_val_17601 === (2))){
var inst_17586 = (state_17600[(2)]);
var inst_17587 = cljs.core.__destructure_map(inst_17586);
var inst_17588 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17587,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_17589 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17587,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_17590 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_17588);
var state_17600__$1 = (function (){var statearr_17602 = state_17600;
(statearr_17602[(7)] = inst_17589);

return statearr_17602;
})();
if(inst_17590){
var statearr_17603_17966 = state_17600__$1;
(statearr_17603_17966[(1)] = (3));

} else {
var statearr_17604_17967 = state_17600__$1;
(statearr_17604_17967[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17601 === (3))){
var inst_17589 = (state_17600[(7)]);
var inst_17592 = cljs.core.reset_BANG_(app.db.categorias,inst_17589);
var inst_17593 = cljs.core.deref(app.db.categorias);
var inst_17594 = console.log("Categor\u00EDas actualizadas:",inst_17593);
var state_17600__$1 = (function (){var statearr_17605 = state_17600;
(statearr_17605[(8)] = inst_17592);

return statearr_17605;
})();
var statearr_17606_17971 = state_17600__$1;
(statearr_17606_17971[(2)] = inst_17594);

(statearr_17606_17971[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17601 === (4))){
var inst_17596 = console.error("Error al obtener categor\u00EDas");
var state_17600__$1 = state_17600;
var statearr_17607_17972 = state_17600__$1;
(statearr_17607_17972[(2)] = inst_17596);

(statearr_17607_17972[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17601 === (5))){
var inst_17598 = (state_17600[(2)]);
var state_17600__$1 = state_17600;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17600__$1,inst_17598);
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
var statearr_17608 = [null,null,null,null,null,null,null,null,null];
(statearr_17608[(0)] = app$db$fetch_list_categorias_$_state_machine__11943__auto__);

(statearr_17608[(1)] = (1));

return statearr_17608;
});
var app$db$fetch_list_categorias_$_state_machine__11943__auto____1 = (function (state_17600){
while(true){
var ret_value__11944__auto__ = (function (){try{while(true){
var result__11945__auto__ = switch__11942__auto__(state_17600);
if(cljs.core.keyword_identical_QMARK_(result__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11945__auto__;
}
break;
}
}catch (e17609){var ex__11946__auto__ = e17609;
var statearr_17610_17973 = state_17600;
(statearr_17610_17973[(2)] = ex__11946__auto__);


if(cljs.core.seq((state_17600[(4)]))){
var statearr_17611_17974 = state_17600;
(statearr_17611_17974[(1)] = cljs.core.first((state_17600[(4)])));

} else {
throw ex__11946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17976 = state_17600;
state_17600 = G__17976;
continue;
} else {
return ret_value__11944__auto__;
}
break;
}
});
app$db$fetch_list_categorias_$_state_machine__11943__auto__ = function(state_17600){
switch(arguments.length){
case 0:
return app$db$fetch_list_categorias_$_state_machine__11943__auto____0.call(this);
case 1:
return app$db$fetch_list_categorias_$_state_machine__11943__auto____1.call(this,state_17600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$fetch_list_categorias_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$fetch_list_categorias_$_state_machine__11943__auto____0;
app$db$fetch_list_categorias_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$fetch_list_categorias_$_state_machine__11943__auto____1;
return app$db$fetch_list_categorias_$_state_machine__11943__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_17612 = f__12040__auto__();
(statearr_17612[(6)] = c__12039__auto__);

return statearr_17612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
});
app.db.fetch_productos = (function app$db$fetch_productos(categoria_id){
console.log("Llamando a fetch-productos para categor\u00EDa:",categoria_id);

var c__12039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__11942__auto__ = (function (state_17646){
var state_val_17647 = (state_17646[(1)]);
if((state_val_17647 === (1))){
var inst_17614 = ["/api/productos/categoria/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(categoria_id)].join('');
var inst_17615 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"response-format","response-format",1664465322)];
var inst_17616 = [new cljs.core.Keyword(null,"keywords?","keywords?",764949733)];
var inst_17617 = [true];
var inst_17618 = cljs.core.PersistentHashMap.fromArrays(inst_17616,inst_17617);
var inst_17619 = ajax.core.json_response_format(inst_17618);
var inst_17620 = [true,inst_17619];
var inst_17621 = cljs.core.PersistentHashMap.fromArrays(inst_17615,inst_17620);
var inst_17622 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_17614,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_17621], 0));
var state_17646__$1 = state_17646;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17646__$1,(2),inst_17622);
} else {
if((state_val_17647 === (2))){
var inst_17624 = (state_17646[(2)]);
var inst_17625 = cljs.core.__destructure_map(inst_17624);
var inst_17626 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17625,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_17627 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17625,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_17628 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_17626);
var state_17646__$1 = (function (){var statearr_17648 = state_17646;
(statearr_17648[(7)] = inst_17627);

return statearr_17648;
})();
if(inst_17628){
var statearr_17649_17978 = state_17646__$1;
(statearr_17649_17978[(1)] = (3));

} else {
var statearr_17650_17979 = state_17646__$1;
(statearr_17650_17979[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17647 === (3))){
var inst_17627 = (state_17646[(7)]);
var inst_17630 = cljs.core.map_QMARK_(inst_17627);
var state_17646__$1 = state_17646;
if(inst_17630){
var statearr_17651_17980 = state_17646__$1;
(statearr_17651_17980[(1)] = (6));

} else {
var statearr_17652_17981 = state_17646__$1;
(statearr_17652_17981[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17647 === (4))){
var inst_17640 = cljs.core.PersistentVector.EMPTY;
var inst_17641 = cljs.core.reset_BANG_(app.db.productos,inst_17640);
var inst_17642 = console.log("La categor\u00EDa seleccionada no tiene productos asociados.");
var state_17646__$1 = (function (){var statearr_17653 = state_17646;
(statearr_17653[(8)] = inst_17641);

return statearr_17653;
})();
var statearr_17654_17982 = state_17646__$1;
(statearr_17654_17982[(2)] = inst_17642);

(statearr_17654_17982[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17647 === (5))){
var inst_17644 = (state_17646[(2)]);
var state_17646__$1 = state_17646;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17646__$1,inst_17644);
} else {
if((state_val_17647 === (6))){
var inst_17627 = (state_17646[(7)]);
var inst_17632 = new cljs.core.Keyword(null,"productos","productos",-1282966179).cljs$core$IFn$_invoke$arity$1(inst_17627);
var state_17646__$1 = state_17646;
var statearr_17655_17985 = state_17646__$1;
(statearr_17655_17985[(2)] = inst_17632);

(statearr_17655_17985[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17647 === (7))){
var inst_17627 = (state_17646[(7)]);
var state_17646__$1 = state_17646;
var statearr_17656_17986 = state_17646__$1;
(statearr_17656_17986[(2)] = inst_17627);

(statearr_17656_17986[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17647 === (8))){
var inst_17635 = (state_17646[(2)]);
var inst_17636 = cljs.core.reset_BANG_(app.db.productos,inst_17635);
var inst_17637 = cljs.core.deref(app.db.productos);
var inst_17638 = console.log("Productos actualizados:",inst_17637);
var state_17646__$1 = (function (){var statearr_17657 = state_17646;
(statearr_17657[(9)] = inst_17636);

return statearr_17657;
})();
var statearr_17658_17988 = state_17646__$1;
(statearr_17658_17988[(2)] = inst_17638);

(statearr_17658_17988[(1)] = (5));


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
var statearr_17659 = [null,null,null,null,null,null,null,null,null,null];
(statearr_17659[(0)] = app$db$fetch_productos_$_state_machine__11943__auto__);

(statearr_17659[(1)] = (1));

return statearr_17659;
});
var app$db$fetch_productos_$_state_machine__11943__auto____1 = (function (state_17646){
while(true){
var ret_value__11944__auto__ = (function (){try{while(true){
var result__11945__auto__ = switch__11942__auto__(state_17646);
if(cljs.core.keyword_identical_QMARK_(result__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11945__auto__;
}
break;
}
}catch (e17660){var ex__11946__auto__ = e17660;
var statearr_17661_17990 = state_17646;
(statearr_17661_17990[(2)] = ex__11946__auto__);


if(cljs.core.seq((state_17646[(4)]))){
var statearr_17662_17991 = state_17646;
(statearr_17662_17991[(1)] = cljs.core.first((state_17646[(4)])));

} else {
throw ex__11946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17992 = state_17646;
state_17646 = G__17992;
continue;
} else {
return ret_value__11944__auto__;
}
break;
}
});
app$db$fetch_productos_$_state_machine__11943__auto__ = function(state_17646){
switch(arguments.length){
case 0:
return app$db$fetch_productos_$_state_machine__11943__auto____0.call(this);
case 1:
return app$db$fetch_productos_$_state_machine__11943__auto____1.call(this,state_17646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$fetch_productos_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$fetch_productos_$_state_machine__11943__auto____0;
app$db$fetch_productos_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$fetch_productos_$_state_machine__11943__auto____1;
return app$db$fetch_productos_$_state_machine__11943__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_17663 = f__12040__auto__();
(statearr_17663[(6)] = c__12039__auto__);

return statearr_17663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
});
app.db.fetch_list_productos = (function app$db$fetch_list_productos(){
console.log("Llamando a fetch-list-productos...");

var c__12039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__11942__auto__ = (function (state_17688){
var state_val_17689 = (state_17688[(1)]);
if((state_val_17689 === (1))){
var inst_17665 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"response-format","response-format",1664465322)];
var inst_17666 = [new cljs.core.Keyword(null,"keywords?","keywords?",764949733)];
var inst_17667 = [true];
var inst_17668 = cljs.core.PersistentHashMap.fromArrays(inst_17666,inst_17667);
var inst_17669 = ajax.core.json_response_format(inst_17668);
var inst_17670 = [true,inst_17669];
var inst_17671 = cljs.core.PersistentHashMap.fromArrays(inst_17665,inst_17670);
var inst_17672 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic("/api/productos/",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_17671], 0));
var state_17688__$1 = state_17688;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17688__$1,(2),inst_17672);
} else {
if((state_val_17689 === (2))){
var inst_17674 = (state_17688[(2)]);
var inst_17675 = cljs.core.__destructure_map(inst_17674);
var inst_17676 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17675,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_17677 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17675,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_17678 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_17676);
var state_17688__$1 = (function (){var statearr_17690 = state_17688;
(statearr_17690[(7)] = inst_17677);

return statearr_17690;
})();
if(inst_17678){
var statearr_17691_18024 = state_17688__$1;
(statearr_17691_18024[(1)] = (3));

} else {
var statearr_17692_18026 = state_17688__$1;
(statearr_17692_18026[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17689 === (3))){
var inst_17677 = (state_17688[(7)]);
var inst_17680 = cljs.core.reset_BANG_(app.db.list_productos,inst_17677);
var inst_17681 = cljs.core.deref(app.db.categorias);
var inst_17682 = console.log("Productos actualizados:",inst_17681);
var state_17688__$1 = (function (){var statearr_17693 = state_17688;
(statearr_17693[(8)] = inst_17680);

return statearr_17693;
})();
var statearr_17694_18034 = state_17688__$1;
(statearr_17694_18034[(2)] = inst_17682);

(statearr_17694_18034[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17689 === (4))){
var inst_17684 = console.error("Error al obtener productos");
var state_17688__$1 = state_17688;
var statearr_17695_18037 = state_17688__$1;
(statearr_17695_18037[(2)] = inst_17684);

(statearr_17695_18037[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17689 === (5))){
var inst_17686 = (state_17688[(2)]);
var state_17688__$1 = state_17688;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17688__$1,inst_17686);
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
var statearr_17696 = [null,null,null,null,null,null,null,null,null];
(statearr_17696[(0)] = app$db$fetch_list_productos_$_state_machine__11943__auto__);

(statearr_17696[(1)] = (1));

return statearr_17696;
});
var app$db$fetch_list_productos_$_state_machine__11943__auto____1 = (function (state_17688){
while(true){
var ret_value__11944__auto__ = (function (){try{while(true){
var result__11945__auto__ = switch__11942__auto__(state_17688);
if(cljs.core.keyword_identical_QMARK_(result__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11945__auto__;
}
break;
}
}catch (e17697){var ex__11946__auto__ = e17697;
var statearr_17698_18049 = state_17688;
(statearr_17698_18049[(2)] = ex__11946__auto__);


if(cljs.core.seq((state_17688[(4)]))){
var statearr_17699_18050 = state_17688;
(statearr_17699_18050[(1)] = cljs.core.first((state_17688[(4)])));

} else {
throw ex__11946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18051 = state_17688;
state_17688 = G__18051;
continue;
} else {
return ret_value__11944__auto__;
}
break;
}
});
app$db$fetch_list_productos_$_state_machine__11943__auto__ = function(state_17688){
switch(arguments.length){
case 0:
return app$db$fetch_list_productos_$_state_machine__11943__auto____0.call(this);
case 1:
return app$db$fetch_list_productos_$_state_machine__11943__auto____1.call(this,state_17688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$fetch_list_productos_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$fetch_list_productos_$_state_machine__11943__auto____0;
app$db$fetch_list_productos_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$fetch_list_productos_$_state_machine__11943__auto____1;
return app$db$fetch_list_productos_$_state_machine__11943__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_17700 = f__12040__auto__();
(statearr_17700[(6)] = c__12039__auto__);

return statearr_17700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
});
app.db.cargar_imagenes = (function app$db$cargar_imagenes(){
console.log("Llamando a cargar-imagenes...");

return fetch("/api/imagenes").then((function (p1__17701_SHARP_){
return p1__17701_SHARP_.json();
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
var f__12040__auto__ = (function (){var switch__11942__auto__ = (function (state_17725){
var state_val_17726 = (state_17725[(1)]);
if((state_val_17726 === (1))){
var inst_17703 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"json-params","json-params",-1112693596),new cljs.core.Keyword(null,"response-format","response-format",1664465322)];
var inst_17704 = [new cljs.core.Keyword(null,"keywords?","keywords?",764949733)];
var inst_17705 = [true];
var inst_17706 = cljs.core.PersistentHashMap.fromArrays(inst_17704,inst_17705);
var inst_17707 = ajax.core.json_response_format(inst_17706);
var inst_17708 = [true,producto,inst_17707];
var inst_17709 = cljs.core.PersistentHashMap.fromArrays(inst_17703,inst_17708);
var inst_17710 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic("/api/producto/nuevo",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_17709], 0));
var state_17725__$1 = state_17725;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17725__$1,(2),inst_17710);
} else {
if((state_val_17726 === (2))){
var inst_17712 = (state_17725[(2)]);
var inst_17713 = cljs.core.__destructure_map(inst_17712);
var inst_17714 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17713,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_17715 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17713,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_17716 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((201),inst_17714);
var state_17725__$1 = (function (){var statearr_17727 = state_17725;
(statearr_17727[(7)] = inst_17715);

return statearr_17727;
})();
if(inst_17716){
var statearr_17728_18068 = state_17725__$1;
(statearr_17728_18068[(1)] = (3));

} else {
var statearr_17729_18069 = state_17725__$1;
(statearr_17729_18069[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17726 === (3))){
var inst_17715 = (state_17725[(7)]);
var inst_17718 = console.log("Producto insertado correctamente",inst_17715);
var inst_17719 = alert("Producto creado correctamente");
var state_17725__$1 = (function (){var statearr_17730 = state_17725;
(statearr_17730[(8)] = inst_17718);

return statearr_17730;
})();
var statearr_17731_18070 = state_17725__$1;
(statearr_17731_18070[(2)] = inst_17719);

(statearr_17731_18070[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17726 === (4))){
var inst_17715 = (state_17725[(7)]);
var inst_17721 = console.error("Error al insertar producto",inst_17715);
var state_17725__$1 = state_17725;
var statearr_17732_18071 = state_17725__$1;
(statearr_17732_18071[(2)] = inst_17721);

(statearr_17732_18071[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17726 === (5))){
var inst_17723 = (state_17725[(2)]);
var state_17725__$1 = state_17725;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17725__$1,inst_17723);
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
var statearr_17733 = [null,null,null,null,null,null,null,null,null];
(statearr_17733[(0)] = app$db$insertar_producto_$_state_machine__11943__auto__);

(statearr_17733[(1)] = (1));

return statearr_17733;
});
var app$db$insertar_producto_$_state_machine__11943__auto____1 = (function (state_17725){
while(true){
var ret_value__11944__auto__ = (function (){try{while(true){
var result__11945__auto__ = switch__11942__auto__(state_17725);
if(cljs.core.keyword_identical_QMARK_(result__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11945__auto__;
}
break;
}
}catch (e17734){var ex__11946__auto__ = e17734;
var statearr_17735_18077 = state_17725;
(statearr_17735_18077[(2)] = ex__11946__auto__);


if(cljs.core.seq((state_17725[(4)]))){
var statearr_17736_18078 = state_17725;
(statearr_17736_18078[(1)] = cljs.core.first((state_17725[(4)])));

} else {
throw ex__11946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18087 = state_17725;
state_17725 = G__18087;
continue;
} else {
return ret_value__11944__auto__;
}
break;
}
});
app$db$insertar_producto_$_state_machine__11943__auto__ = function(state_17725){
switch(arguments.length){
case 0:
return app$db$insertar_producto_$_state_machine__11943__auto____0.call(this);
case 1:
return app$db$insertar_producto_$_state_machine__11943__auto____1.call(this,state_17725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$insertar_producto_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$insertar_producto_$_state_machine__11943__auto____0;
app$db$insertar_producto_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$insertar_producto_$_state_machine__11943__auto____1;
return app$db$insertar_producto_$_state_machine__11943__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_17737 = f__12040__auto__();
(statearr_17737[(6)] = c__12039__auto__);

return statearr_17737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
});
app.db.insertar_categoria = (function app$db$insertar_categoria(producto){
console.log("Llamando a insertar-categoria...",producto);

var c__12039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__11942__auto__ = (function (state_17761){
var state_val_17762 = (state_17761[(1)]);
if((state_val_17762 === (1))){
var inst_17739 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"json-params","json-params",-1112693596),new cljs.core.Keyword(null,"response-format","response-format",1664465322)];
var inst_17740 = [new cljs.core.Keyword(null,"keywords?","keywords?",764949733)];
var inst_17741 = [true];
var inst_17742 = cljs.core.PersistentHashMap.fromArrays(inst_17740,inst_17741);
var inst_17743 = ajax.core.json_response_format(inst_17742);
var inst_17744 = [true,producto,inst_17743];
var inst_17745 = cljs.core.PersistentHashMap.fromArrays(inst_17739,inst_17744);
var inst_17746 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic("/api/categoria/nuevo",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_17745], 0));
var state_17761__$1 = state_17761;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17761__$1,(2),inst_17746);
} else {
if((state_val_17762 === (2))){
var inst_17748 = (state_17761[(2)]);
var inst_17749 = cljs.core.__destructure_map(inst_17748);
var inst_17750 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17749,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_17751 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17749,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_17752 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((201),inst_17750);
var state_17761__$1 = (function (){var statearr_17763 = state_17761;
(statearr_17763[(7)] = inst_17751);

return statearr_17763;
})();
if(inst_17752){
var statearr_17764_18097 = state_17761__$1;
(statearr_17764_18097[(1)] = (3));

} else {
var statearr_17765_18098 = state_17761__$1;
(statearr_17765_18098[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17762 === (3))){
var inst_17751 = (state_17761[(7)]);
var inst_17754 = console.log("Categoria insertada correctamente",inst_17751);
var inst_17755 = alert("Categoria creada correctamente, recarga la lista de 'Mostrar categorias' dandole al boton, para verla y poder editarla.");
var state_17761__$1 = (function (){var statearr_17766 = state_17761;
(statearr_17766[(8)] = inst_17754);

return statearr_17766;
})();
var statearr_17767_18100 = state_17761__$1;
(statearr_17767_18100[(2)] = inst_17755);

(statearr_17767_18100[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17762 === (4))){
var inst_17751 = (state_17761[(7)]);
var inst_17757 = console.error("Error al insertar categoria",inst_17751);
var state_17761__$1 = state_17761;
var statearr_17768_18101 = state_17761__$1;
(statearr_17768_18101[(2)] = inst_17757);

(statearr_17768_18101[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17762 === (5))){
var inst_17759 = (state_17761[(2)]);
var state_17761__$1 = state_17761;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17761__$1,inst_17759);
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
var statearr_17769 = [null,null,null,null,null,null,null,null,null];
(statearr_17769[(0)] = app$db$insertar_categoria_$_state_machine__11943__auto__);

(statearr_17769[(1)] = (1));

return statearr_17769;
});
var app$db$insertar_categoria_$_state_machine__11943__auto____1 = (function (state_17761){
while(true){
var ret_value__11944__auto__ = (function (){try{while(true){
var result__11945__auto__ = switch__11942__auto__(state_17761);
if(cljs.core.keyword_identical_QMARK_(result__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11945__auto__;
}
break;
}
}catch (e17770){var ex__11946__auto__ = e17770;
var statearr_17771_18109 = state_17761;
(statearr_17771_18109[(2)] = ex__11946__auto__);


if(cljs.core.seq((state_17761[(4)]))){
var statearr_17772_18110 = state_17761;
(statearr_17772_18110[(1)] = cljs.core.first((state_17761[(4)])));

} else {
throw ex__11946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18111 = state_17761;
state_17761 = G__18111;
continue;
} else {
return ret_value__11944__auto__;
}
break;
}
});
app$db$insertar_categoria_$_state_machine__11943__auto__ = function(state_17761){
switch(arguments.length){
case 0:
return app$db$insertar_categoria_$_state_machine__11943__auto____0.call(this);
case 1:
return app$db$insertar_categoria_$_state_machine__11943__auto____1.call(this,state_17761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$insertar_categoria_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$insertar_categoria_$_state_machine__11943__auto____0;
app$db$insertar_categoria_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$insertar_categoria_$_state_machine__11943__auto____1;
return app$db$insertar_categoria_$_state_machine__11943__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_17773 = f__12040__auto__();
(statearr_17773[(6)] = c__12039__auto__);

return statearr_17773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
});
app.db.eliminar_producto = (function app$db$eliminar_producto(id){
var c__12039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__11942__auto__ = (function (state_17798){
var state_val_17799 = (state_17798[(1)]);
if((state_val_17799 === (1))){
var inst_17775 = ["/api/producto/eliminar/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('');
var inst_17776 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"response-format","response-format",1664465322)];
var inst_17777 = [new cljs.core.Keyword(null,"keywords?","keywords?",764949733)];
var inst_17778 = [true];
var inst_17779 = cljs.core.PersistentHashMap.fromArrays(inst_17777,inst_17778);
var inst_17780 = ajax.core.json_response_format(inst_17779);
var inst_17781 = [true,inst_17780];
var inst_17782 = cljs.core.PersistentHashMap.fromArrays(inst_17776,inst_17781);
var inst_17783 = cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(inst_17775,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_17782], 0));
var state_17798__$1 = state_17798;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17798__$1,(2),inst_17783);
} else {
if((state_val_17799 === (2))){
var inst_17785 = (state_17798[(2)]);
var inst_17786 = cljs.core.__destructure_map(inst_17785);
var inst_17787 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17786,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_17788 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17786,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_17789 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_17787);
var state_17798__$1 = (function (){var statearr_17800 = state_17798;
(statearr_17800[(7)] = inst_17788);

return statearr_17800;
})();
if(inst_17789){
var statearr_17801_18115 = state_17798__$1;
(statearr_17801_18115[(1)] = (3));

} else {
var statearr_17802_18120 = state_17798__$1;
(statearr_17802_18120[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17799 === (3))){
var inst_17788 = (state_17798[(7)]);
var inst_17791 = console.log("Producto eliminado",inst_17788);
var inst_17792 = alert("Producto eliminado correctamente, dale a boton de 'Mostrar productos'.");
var state_17798__$1 = (function (){var statearr_17803 = state_17798;
(statearr_17803[(8)] = inst_17791);

return statearr_17803;
})();
var statearr_17804_18121 = state_17798__$1;
(statearr_17804_18121[(2)] = inst_17792);

(statearr_17804_18121[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17799 === (4))){
var inst_17788 = (state_17798[(7)]);
var inst_17794 = console.error("Error al eliminar el producto",inst_17788);
var state_17798__$1 = state_17798;
var statearr_17805_18123 = state_17798__$1;
(statearr_17805_18123[(2)] = inst_17794);

(statearr_17805_18123[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17799 === (5))){
var inst_17796 = (state_17798[(2)]);
var state_17798__$1 = state_17798;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17798__$1,inst_17796);
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
var statearr_17806 = [null,null,null,null,null,null,null,null,null];
(statearr_17806[(0)] = app$db$eliminar_producto_$_state_machine__11943__auto__);

(statearr_17806[(1)] = (1));

return statearr_17806;
});
var app$db$eliminar_producto_$_state_machine__11943__auto____1 = (function (state_17798){
while(true){
var ret_value__11944__auto__ = (function (){try{while(true){
var result__11945__auto__ = switch__11942__auto__(state_17798);
if(cljs.core.keyword_identical_QMARK_(result__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11945__auto__;
}
break;
}
}catch (e17807){var ex__11946__auto__ = e17807;
var statearr_17808_18127 = state_17798;
(statearr_17808_18127[(2)] = ex__11946__auto__);


if(cljs.core.seq((state_17798[(4)]))){
var statearr_17809_18128 = state_17798;
(statearr_17809_18128[(1)] = cljs.core.first((state_17798[(4)])));

} else {
throw ex__11946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18130 = state_17798;
state_17798 = G__18130;
continue;
} else {
return ret_value__11944__auto__;
}
break;
}
});
app$db$eliminar_producto_$_state_machine__11943__auto__ = function(state_17798){
switch(arguments.length){
case 0:
return app$db$eliminar_producto_$_state_machine__11943__auto____0.call(this);
case 1:
return app$db$eliminar_producto_$_state_machine__11943__auto____1.call(this,state_17798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$eliminar_producto_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$eliminar_producto_$_state_machine__11943__auto____0;
app$db$eliminar_producto_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$eliminar_producto_$_state_machine__11943__auto____1;
return app$db$eliminar_producto_$_state_machine__11943__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_17810 = f__12040__auto__();
(statearr_17810[(6)] = c__12039__auto__);

return statearr_17810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
});
app.db.activo_producto = (function app$db$activo_producto(id){
var usuario_id = localStorage.getItem("id");
var c__12039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__11942__auto__ = (function (state_17848){
var state_val_17849 = (state_17848[(1)]);
if((state_val_17849 === (1))){
var inst_17812 = ["/api/producto/activo/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('');
var inst_17813 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"response-format","response-format",1664465322)];
var inst_17814 = ["Content-Type"];
var inst_17815 = ["application/json"];
var inst_17816 = cljs.core.PersistentHashMap.fromArrays(inst_17814,inst_17815);
var inst_17819 = ({"usuario_id":usuario_id});
var inst_17820 = JSON.stringify(inst_17819);
var inst_17821 = [new cljs.core.Keyword(null,"keywords?","keywords?",764949733)];
var inst_17822 = [true];
var inst_17823 = cljs.core.PersistentHashMap.fromArrays(inst_17821,inst_17822);
var inst_17824 = ajax.core.json_response_format(inst_17823);
var inst_17825 = [true,inst_17816,inst_17820,inst_17824];
var inst_17826 = cljs.core.PersistentHashMap.fromArrays(inst_17813,inst_17825);
var inst_17827 = cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(inst_17812,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_17826], 0));
var state_17848__$1 = state_17848;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17848__$1,(2),inst_17827);
} else {
if((state_val_17849 === (2))){
var inst_17829 = (state_17848[(2)]);
var inst_17830 = cljs.core.__destructure_map(inst_17829);
var inst_17831 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17830,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_17832 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17830,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_17833 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_17831);
var state_17848__$1 = (function (){var statearr_17850 = state_17848;
(statearr_17850[(7)] = inst_17832);

return statearr_17850;
})();
if(inst_17833){
var statearr_17851_18137 = state_17848__$1;
(statearr_17851_18137[(1)] = (3));

} else {
var statearr_17852_18138 = state_17848__$1;
(statearr_17852_18138[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17849 === (3))){
var inst_17832 = (state_17848[(7)]);
var inst_17835 = console.log("Estado actualizado",inst_17832);
var inst_17836 = new cljs.core.Keyword(null,"activo","activo",-1391186334).cljs$core$IFn$_invoke$arity$1(inst_17832);
var state_17848__$1 = (function (){var statearr_17853 = state_17848;
(statearr_17853[(8)] = inst_17835);

return statearr_17853;
})();
if(cljs.core.truth_(inst_17836)){
var statearr_17854_18140 = state_17848__$1;
(statearr_17854_18140[(1)] = (6));

} else {
var statearr_17855_18141 = state_17848__$1;
(statearr_17855_18141[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17849 === (4))){
var inst_17832 = (state_17848[(7)]);
var inst_17844 = console.error("Error al actualizar estado del producto",inst_17832);
var state_17848__$1 = state_17848;
var statearr_17856_18142 = state_17848__$1;
(statearr_17856_18142[(2)] = inst_17844);

(statearr_17856_18142[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17849 === (5))){
var inst_17846 = (state_17848[(2)]);
var state_17848__$1 = state_17848;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17848__$1,inst_17846);
} else {
if((state_val_17849 === (6))){
var state_17848__$1 = state_17848;
var statearr_17857_18143 = state_17848__$1;
(statearr_17857_18143[(2)] = "activado");

(statearr_17857_18143[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17849 === (7))){
var state_17848__$1 = state_17848;
var statearr_17858_18144 = state_17848__$1;
(statearr_17858_18144[(2)] = "desactivado");

(statearr_17858_18144[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17849 === (8))){
var inst_17840 = (state_17848[(2)]);
var inst_17841 = ["Producto ",inst_17840," correctamente"].join('');
var inst_17842 = alert(inst_17841);
var state_17848__$1 = state_17848;
var statearr_17859_18146 = state_17848__$1;
(statearr_17859_18146[(2)] = inst_17842);

(statearr_17859_18146[(1)] = (5));


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
var statearr_17860 = [null,null,null,null,null,null,null,null,null];
(statearr_17860[(0)] = app$db$activo_producto_$_state_machine__11943__auto__);

(statearr_17860[(1)] = (1));

return statearr_17860;
});
var app$db$activo_producto_$_state_machine__11943__auto____1 = (function (state_17848){
while(true){
var ret_value__11944__auto__ = (function (){try{while(true){
var result__11945__auto__ = switch__11942__auto__(state_17848);
if(cljs.core.keyword_identical_QMARK_(result__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11945__auto__;
}
break;
}
}catch (e17861){var ex__11946__auto__ = e17861;
var statearr_17862_18147 = state_17848;
(statearr_17862_18147[(2)] = ex__11946__auto__);


if(cljs.core.seq((state_17848[(4)]))){
var statearr_17863_18148 = state_17848;
(statearr_17863_18148[(1)] = cljs.core.first((state_17848[(4)])));

} else {
throw ex__11946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18151 = state_17848;
state_17848 = G__18151;
continue;
} else {
return ret_value__11944__auto__;
}
break;
}
});
app$db$activo_producto_$_state_machine__11943__auto__ = function(state_17848){
switch(arguments.length){
case 0:
return app$db$activo_producto_$_state_machine__11943__auto____0.call(this);
case 1:
return app$db$activo_producto_$_state_machine__11943__auto____1.call(this,state_17848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$activo_producto_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$activo_producto_$_state_machine__11943__auto____0;
app$db$activo_producto_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$activo_producto_$_state_machine__11943__auto____1;
return app$db$activo_producto_$_state_machine__11943__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_17864 = f__12040__auto__();
(statearr_17864[(6)] = c__12039__auto__);

return statearr_17864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
});
app.db.activo_categoria = (function app$db$activo_categoria(id){
var usuario_id = localStorage.getItem("id");
var c__12039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__11942__auto__ = (function (state_17902){
var state_val_17903 = (state_17902[(1)]);
if((state_val_17903 === (1))){
var inst_17866 = ["/api/categoria/activo/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('');
var inst_17867 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"response-format","response-format",1664465322)];
var inst_17868 = ["Content-Type"];
var inst_17869 = ["application/json"];
var inst_17870 = cljs.core.PersistentHashMap.fromArrays(inst_17868,inst_17869);
var inst_17873 = ({"usuario_id":usuario_id});
var inst_17874 = JSON.stringify(inst_17873);
var inst_17875 = [new cljs.core.Keyword(null,"keywords?","keywords?",764949733)];
var inst_17876 = [true];
var inst_17877 = cljs.core.PersistentHashMap.fromArrays(inst_17875,inst_17876);
var inst_17878 = ajax.core.json_response_format(inst_17877);
var inst_17879 = [true,inst_17870,inst_17874,inst_17878];
var inst_17880 = cljs.core.PersistentHashMap.fromArrays(inst_17867,inst_17879);
var inst_17881 = cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(inst_17866,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_17880], 0));
var state_17902__$1 = state_17902;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17902__$1,(2),inst_17881);
} else {
if((state_val_17903 === (2))){
var inst_17883 = (state_17902[(2)]);
var inst_17884 = cljs.core.__destructure_map(inst_17883);
var inst_17885 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17884,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_17886 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17884,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_17887 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_17885);
var state_17902__$1 = (function (){var statearr_17904 = state_17902;
(statearr_17904[(7)] = inst_17886);

return statearr_17904;
})();
if(inst_17887){
var statearr_17905_18167 = state_17902__$1;
(statearr_17905_18167[(1)] = (3));

} else {
var statearr_17906_18168 = state_17902__$1;
(statearr_17906_18168[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17903 === (3))){
var inst_17886 = (state_17902[(7)]);
var inst_17889 = console.log("Estado actualizado",inst_17886);
var inst_17890 = new cljs.core.Keyword(null,"activo","activo",-1391186334).cljs$core$IFn$_invoke$arity$1(inst_17886);
var state_17902__$1 = (function (){var statearr_17907 = state_17902;
(statearr_17907[(8)] = inst_17889);

return statearr_17907;
})();
if(cljs.core.truth_(inst_17890)){
var statearr_17908_18169 = state_17902__$1;
(statearr_17908_18169[(1)] = (6));

} else {
var statearr_17909_18170 = state_17902__$1;
(statearr_17909_18170[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17903 === (4))){
var inst_17886 = (state_17902[(7)]);
var inst_17898 = console.error("Error al actualizar estado de la categoria",inst_17886);
var state_17902__$1 = state_17902;
var statearr_17910_18174 = state_17902__$1;
(statearr_17910_18174[(2)] = inst_17898);

(statearr_17910_18174[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17903 === (5))){
var inst_17900 = (state_17902[(2)]);
var state_17902__$1 = state_17902;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17902__$1,inst_17900);
} else {
if((state_val_17903 === (6))){
var state_17902__$1 = state_17902;
var statearr_17911_18179 = state_17902__$1;
(statearr_17911_18179[(2)] = "activada");

(statearr_17911_18179[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17903 === (7))){
var state_17902__$1 = state_17902;
var statearr_17912_18184 = state_17902__$1;
(statearr_17912_18184[(2)] = "desactivada");

(statearr_17912_18184[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17903 === (8))){
var inst_17894 = (state_17902[(2)]);
var inst_17895 = ["Categoria ",inst_17894," correctamente."].join('');
var inst_17896 = alert(inst_17895);
var state_17902__$1 = state_17902;
var statearr_17913_18188 = state_17902__$1;
(statearr_17913_18188[(2)] = inst_17896);

(statearr_17913_18188[(1)] = (5));


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
var statearr_17914 = [null,null,null,null,null,null,null,null,null];
(statearr_17914[(0)] = app$db$activo_categoria_$_state_machine__11943__auto__);

(statearr_17914[(1)] = (1));

return statearr_17914;
});
var app$db$activo_categoria_$_state_machine__11943__auto____1 = (function (state_17902){
while(true){
var ret_value__11944__auto__ = (function (){try{while(true){
var result__11945__auto__ = switch__11942__auto__(state_17902);
if(cljs.core.keyword_identical_QMARK_(result__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11945__auto__;
}
break;
}
}catch (e17915){var ex__11946__auto__ = e17915;
var statearr_17916_18205 = state_17902;
(statearr_17916_18205[(2)] = ex__11946__auto__);


if(cljs.core.seq((state_17902[(4)]))){
var statearr_17917_18206 = state_17902;
(statearr_17917_18206[(1)] = cljs.core.first((state_17902[(4)])));

} else {
throw ex__11946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18207 = state_17902;
state_17902 = G__18207;
continue;
} else {
return ret_value__11944__auto__;
}
break;
}
});
app$db$activo_categoria_$_state_machine__11943__auto__ = function(state_17902){
switch(arguments.length){
case 0:
return app$db$activo_categoria_$_state_machine__11943__auto____0.call(this);
case 1:
return app$db$activo_categoria_$_state_machine__11943__auto____1.call(this,state_17902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$activo_categoria_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$activo_categoria_$_state_machine__11943__auto____0;
app$db$activo_categoria_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$activo_categoria_$_state_machine__11943__auto____1;
return app$db$activo_categoria_$_state_machine__11943__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_17918 = f__12040__auto__();
(statearr_17918[(6)] = c__12039__auto__);

return statearr_17918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
});
app.db.eliminar_categoria = (function app$db$eliminar_categoria(id){
var c__12039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__11942__auto__ = (function (state_17943){
var state_val_17944 = (state_17943[(1)]);
if((state_val_17944 === (1))){
var inst_17920 = ["/api/categoria/eliminar/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('');
var inst_17921 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"response-format","response-format",1664465322)];
var inst_17922 = [new cljs.core.Keyword(null,"keywords?","keywords?",764949733)];
var inst_17923 = [true];
var inst_17924 = cljs.core.PersistentHashMap.fromArrays(inst_17922,inst_17923);
var inst_17925 = ajax.core.json_response_format(inst_17924);
var inst_17926 = [true,inst_17925];
var inst_17927 = cljs.core.PersistentHashMap.fromArrays(inst_17921,inst_17926);
var inst_17928 = cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(inst_17920,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_17927], 0));
var state_17943__$1 = state_17943;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17943__$1,(2),inst_17928);
} else {
if((state_val_17944 === (2))){
var inst_17930 = (state_17943[(2)]);
var inst_17931 = cljs.core.__destructure_map(inst_17930);
var inst_17932 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17931,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_17933 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17931,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_17934 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_17932);
var state_17943__$1 = (function (){var statearr_17945 = state_17943;
(statearr_17945[(7)] = inst_17933);

return statearr_17945;
})();
if(inst_17934){
var statearr_17946_18208 = state_17943__$1;
(statearr_17946_18208[(1)] = (3));

} else {
var statearr_17947_18209 = state_17943__$1;
(statearr_17947_18209[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17944 === (3))){
var inst_17933 = (state_17943[(7)]);
var inst_17936 = console.log("Categor\u00EDa eliminada",inst_17933);
var inst_17937 = alert("Categor\u00EDa eliminada correctamente, dale a boton de 'Mostrar categorias'.");
var state_17943__$1 = (function (){var statearr_17948 = state_17943;
(statearr_17948[(8)] = inst_17936);

return statearr_17948;
})();
var statearr_17949_18210 = state_17943__$1;
(statearr_17949_18210[(2)] = inst_17937);

(statearr_17949_18210[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17944 === (4))){
var inst_17933 = (state_17943[(7)]);
var inst_17939 = console.error("Error al eliminar categor\u00EDa",inst_17933);
var state_17943__$1 = state_17943;
var statearr_17950_18211 = state_17943__$1;
(statearr_17950_18211[(2)] = inst_17939);

(statearr_17950_18211[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17944 === (5))){
var inst_17941 = (state_17943[(2)]);
var state_17943__$1 = state_17943;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17943__$1,inst_17941);
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
var statearr_17951 = [null,null,null,null,null,null,null,null,null];
(statearr_17951[(0)] = app$db$eliminar_categoria_$_state_machine__11943__auto__);

(statearr_17951[(1)] = (1));

return statearr_17951;
});
var app$db$eliminar_categoria_$_state_machine__11943__auto____1 = (function (state_17943){
while(true){
var ret_value__11944__auto__ = (function (){try{while(true){
var result__11945__auto__ = switch__11942__auto__(state_17943);
if(cljs.core.keyword_identical_QMARK_(result__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11945__auto__;
}
break;
}
}catch (e17952){var ex__11946__auto__ = e17952;
var statearr_17953_18219 = state_17943;
(statearr_17953_18219[(2)] = ex__11946__auto__);


if(cljs.core.seq((state_17943[(4)]))){
var statearr_17954_18220 = state_17943;
(statearr_17954_18220[(1)] = cljs.core.first((state_17943[(4)])));

} else {
throw ex__11946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18221 = state_17943;
state_17943 = G__18221;
continue;
} else {
return ret_value__11944__auto__;
}
break;
}
});
app$db$eliminar_categoria_$_state_machine__11943__auto__ = function(state_17943){
switch(arguments.length){
case 0:
return app$db$eliminar_categoria_$_state_machine__11943__auto____0.call(this);
case 1:
return app$db$eliminar_categoria_$_state_machine__11943__auto____1.call(this,state_17943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$eliminar_categoria_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$eliminar_categoria_$_state_machine__11943__auto____0;
app$db$eliminar_categoria_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$eliminar_categoria_$_state_machine__11943__auto____1;
return app$db$eliminar_categoria_$_state_machine__11943__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_17955 = f__12040__auto__();
(statearr_17955[(6)] = c__12039__auto__);

return statearr_17955;
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
})).catch((function (p1__17956_SHARP_){
return alert(["Error al generar el PDF: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__17956_SHARP_)].join(''));
}));
});

//# sourceMappingURL=app.db.js.map
