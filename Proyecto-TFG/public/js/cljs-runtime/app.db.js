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
var f__12040__auto__ = (function (){var switch__11942__auto__ = (function (state_18620){
var state_val_18621 = (state_18620[(1)]);
if((state_val_18621 === (1))){
var inst_18597 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"response-format","response-format",1664465322)];
var inst_18598 = [new cljs.core.Keyword(null,"keywords?","keywords?",764949733)];
var inst_18599 = [true];
var inst_18600 = cljs.core.PersistentHashMap.fromArrays(inst_18598,inst_18599);
var inst_18601 = ajax.core.json_response_format(inst_18600);
var inst_18602 = [false,inst_18601];
var inst_18603 = cljs.core.PersistentHashMap.fromArrays(inst_18597,inst_18602);
var inst_18604 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic("/api/categorias/",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_18603], 0));
var state_18620__$1 = state_18620;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18620__$1,(2),inst_18604);
} else {
if((state_val_18621 === (2))){
var inst_18606 = (state_18620[(2)]);
var inst_18607 = cljs.core.__destructure_map(inst_18606);
var inst_18608 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18607,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_18609 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18607,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_18610 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_18608);
var state_18620__$1 = (function (){var statearr_18622 = state_18620;
(statearr_18622[(7)] = inst_18609);

return statearr_18622;
})();
if(inst_18610){
var statearr_18623_18905 = state_18620__$1;
(statearr_18623_18905[(1)] = (3));

} else {
var statearr_18624_18906 = state_18620__$1;
(statearr_18624_18906[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18621 === (3))){
var inst_18609 = (state_18620[(7)]);
var inst_18612 = cljs.core.reset_BANG_(app.db.categorias,inst_18609);
var inst_18613 = cljs.core.deref(app.db.categorias);
var inst_18614 = console.log("Categor\u00EDas actualizadas:",inst_18613);
var state_18620__$1 = (function (){var statearr_18625 = state_18620;
(statearr_18625[(8)] = inst_18612);

return statearr_18625;
})();
var statearr_18626_18907 = state_18620__$1;
(statearr_18626_18907[(2)] = inst_18614);

(statearr_18626_18907[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18621 === (4))){
var inst_18616 = console.error("Error al obtener categor\u00EDas");
var state_18620__$1 = state_18620;
var statearr_18627_18908 = state_18620__$1;
(statearr_18627_18908[(2)] = inst_18616);

(statearr_18627_18908[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18621 === (5))){
var inst_18618 = (state_18620[(2)]);
var state_18620__$1 = state_18620;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18620__$1,inst_18618);
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
var statearr_18628 = [null,null,null,null,null,null,null,null,null];
(statearr_18628[(0)] = app$db$fetch_categorias_$_state_machine__11943__auto__);

(statearr_18628[(1)] = (1));

return statearr_18628;
});
var app$db$fetch_categorias_$_state_machine__11943__auto____1 = (function (state_18620){
while(true){
var ret_value__11944__auto__ = (function (){try{while(true){
var result__11945__auto__ = switch__11942__auto__(state_18620);
if(cljs.core.keyword_identical_QMARK_(result__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11945__auto__;
}
break;
}
}catch (e18629){var ex__11946__auto__ = e18629;
var statearr_18630_18909 = state_18620;
(statearr_18630_18909[(2)] = ex__11946__auto__);


if(cljs.core.seq((state_18620[(4)]))){
var statearr_18631_18910 = state_18620;
(statearr_18631_18910[(1)] = cljs.core.first((state_18620[(4)])));

} else {
throw ex__11946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18911 = state_18620;
state_18620 = G__18911;
continue;
} else {
return ret_value__11944__auto__;
}
break;
}
});
app$db$fetch_categorias_$_state_machine__11943__auto__ = function(state_18620){
switch(arguments.length){
case 0:
return app$db$fetch_categorias_$_state_machine__11943__auto____0.call(this);
case 1:
return app$db$fetch_categorias_$_state_machine__11943__auto____1.call(this,state_18620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$fetch_categorias_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$fetch_categorias_$_state_machine__11943__auto____0;
app$db$fetch_categorias_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$fetch_categorias_$_state_machine__11943__auto____1;
return app$db$fetch_categorias_$_state_machine__11943__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_18632 = f__12040__auto__();
(statearr_18632[(6)] = c__12039__auto__);

return statearr_18632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
});
app.db.fetch_list_categorias = (function app$db$fetch_list_categorias(){
console.log("Llamando a fetch-categorias...");

var c__12039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__11942__auto__ = (function (state_18657){
var state_val_18658 = (state_18657[(1)]);
if((state_val_18658 === (1))){
var inst_18634 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"response-format","response-format",1664465322)];
var inst_18635 = [new cljs.core.Keyword(null,"keywords?","keywords?",764949733)];
var inst_18636 = [true];
var inst_18637 = cljs.core.PersistentHashMap.fromArrays(inst_18635,inst_18636);
var inst_18638 = ajax.core.json_response_format(inst_18637);
var inst_18639 = [false,inst_18638];
var inst_18640 = cljs.core.PersistentHashMap.fromArrays(inst_18634,inst_18639);
var inst_18641 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic("/api/todas_categorias",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_18640], 0));
var state_18657__$1 = state_18657;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18657__$1,(2),inst_18641);
} else {
if((state_val_18658 === (2))){
var inst_18643 = (state_18657[(2)]);
var inst_18644 = cljs.core.__destructure_map(inst_18643);
var inst_18645 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18644,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_18646 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18644,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_18647 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_18645);
var state_18657__$1 = (function (){var statearr_18659 = state_18657;
(statearr_18659[(7)] = inst_18646);

return statearr_18659;
})();
if(inst_18647){
var statearr_18660_18912 = state_18657__$1;
(statearr_18660_18912[(1)] = (3));

} else {
var statearr_18661_18913 = state_18657__$1;
(statearr_18661_18913[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18658 === (3))){
var inst_18646 = (state_18657[(7)]);
var inst_18649 = cljs.core.reset_BANG_(app.db.categorias,inst_18646);
var inst_18650 = cljs.core.deref(app.db.categorias);
var inst_18651 = console.log("Categor\u00EDas actualizadas:",inst_18650);
var state_18657__$1 = (function (){var statearr_18662 = state_18657;
(statearr_18662[(8)] = inst_18649);

return statearr_18662;
})();
var statearr_18663_18914 = state_18657__$1;
(statearr_18663_18914[(2)] = inst_18651);

(statearr_18663_18914[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18658 === (4))){
var inst_18653 = console.error("Error al obtener categor\u00EDas");
var state_18657__$1 = state_18657;
var statearr_18664_18915 = state_18657__$1;
(statearr_18664_18915[(2)] = inst_18653);

(statearr_18664_18915[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18658 === (5))){
var inst_18655 = (state_18657[(2)]);
var state_18657__$1 = state_18657;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18657__$1,inst_18655);
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
var statearr_18665 = [null,null,null,null,null,null,null,null,null];
(statearr_18665[(0)] = app$db$fetch_list_categorias_$_state_machine__11943__auto__);

(statearr_18665[(1)] = (1));

return statearr_18665;
});
var app$db$fetch_list_categorias_$_state_machine__11943__auto____1 = (function (state_18657){
while(true){
var ret_value__11944__auto__ = (function (){try{while(true){
var result__11945__auto__ = switch__11942__auto__(state_18657);
if(cljs.core.keyword_identical_QMARK_(result__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11945__auto__;
}
break;
}
}catch (e18666){var ex__11946__auto__ = e18666;
var statearr_18667_18918 = state_18657;
(statearr_18667_18918[(2)] = ex__11946__auto__);


if(cljs.core.seq((state_18657[(4)]))){
var statearr_18668_18919 = state_18657;
(statearr_18668_18919[(1)] = cljs.core.first((state_18657[(4)])));

} else {
throw ex__11946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18920 = state_18657;
state_18657 = G__18920;
continue;
} else {
return ret_value__11944__auto__;
}
break;
}
});
app$db$fetch_list_categorias_$_state_machine__11943__auto__ = function(state_18657){
switch(arguments.length){
case 0:
return app$db$fetch_list_categorias_$_state_machine__11943__auto____0.call(this);
case 1:
return app$db$fetch_list_categorias_$_state_machine__11943__auto____1.call(this,state_18657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$fetch_list_categorias_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$fetch_list_categorias_$_state_machine__11943__auto____0;
app$db$fetch_list_categorias_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$fetch_list_categorias_$_state_machine__11943__auto____1;
return app$db$fetch_list_categorias_$_state_machine__11943__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_18669 = f__12040__auto__();
(statearr_18669[(6)] = c__12039__auto__);

return statearr_18669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
});
app.db.fetch_productos = (function app$db$fetch_productos(categoria_id){
console.log("Llamando a fetch-productos para categor\u00EDa:",categoria_id);

var c__12039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__11942__auto__ = (function (state_18703){
var state_val_18704 = (state_18703[(1)]);
if((state_val_18704 === (1))){
var inst_18671 = ["/api/productos/categoria/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(categoria_id)].join('');
var inst_18672 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"response-format","response-format",1664465322)];
var inst_18673 = [new cljs.core.Keyword(null,"keywords?","keywords?",764949733)];
var inst_18674 = [true];
var inst_18675 = cljs.core.PersistentHashMap.fromArrays(inst_18673,inst_18674);
var inst_18676 = ajax.core.json_response_format(inst_18675);
var inst_18677 = [false,inst_18676];
var inst_18678 = cljs.core.PersistentHashMap.fromArrays(inst_18672,inst_18677);
var inst_18679 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_18671,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_18678], 0));
var state_18703__$1 = state_18703;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18703__$1,(2),inst_18679);
} else {
if((state_val_18704 === (2))){
var inst_18681 = (state_18703[(2)]);
var inst_18682 = cljs.core.__destructure_map(inst_18681);
var inst_18683 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18682,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_18684 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18682,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_18685 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_18683);
var state_18703__$1 = (function (){var statearr_18705 = state_18703;
(statearr_18705[(7)] = inst_18684);

return statearr_18705;
})();
if(inst_18685){
var statearr_18706_18930 = state_18703__$1;
(statearr_18706_18930[(1)] = (3));

} else {
var statearr_18707_18932 = state_18703__$1;
(statearr_18707_18932[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18704 === (3))){
var inst_18684 = (state_18703[(7)]);
var inst_18687 = cljs.core.map_QMARK_(inst_18684);
var state_18703__$1 = state_18703;
if(inst_18687){
var statearr_18708_18933 = state_18703__$1;
(statearr_18708_18933[(1)] = (6));

} else {
var statearr_18709_18934 = state_18703__$1;
(statearr_18709_18934[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18704 === (4))){
var inst_18697 = cljs.core.PersistentVector.EMPTY;
var inst_18698 = cljs.core.reset_BANG_(app.db.productos,inst_18697);
var inst_18699 = console.log("La categor\u00EDa seleccionada no tiene productos asociados.");
var state_18703__$1 = (function (){var statearr_18710 = state_18703;
(statearr_18710[(8)] = inst_18698);

return statearr_18710;
})();
var statearr_18711_18937 = state_18703__$1;
(statearr_18711_18937[(2)] = inst_18699);

(statearr_18711_18937[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18704 === (5))){
var inst_18701 = (state_18703[(2)]);
var state_18703__$1 = state_18703;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18703__$1,inst_18701);
} else {
if((state_val_18704 === (6))){
var inst_18684 = (state_18703[(7)]);
var inst_18689 = new cljs.core.Keyword(null,"productos","productos",-1282966179).cljs$core$IFn$_invoke$arity$1(inst_18684);
var state_18703__$1 = state_18703;
var statearr_18712_18938 = state_18703__$1;
(statearr_18712_18938[(2)] = inst_18689);

(statearr_18712_18938[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18704 === (7))){
var inst_18684 = (state_18703[(7)]);
var state_18703__$1 = state_18703;
var statearr_18713_18939 = state_18703__$1;
(statearr_18713_18939[(2)] = inst_18684);

(statearr_18713_18939[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18704 === (8))){
var inst_18692 = (state_18703[(2)]);
var inst_18693 = cljs.core.reset_BANG_(app.db.productos,inst_18692);
var inst_18694 = cljs.core.deref(app.db.productos);
var inst_18695 = console.log("Productos actualizados:",inst_18694);
var state_18703__$1 = (function (){var statearr_18714 = state_18703;
(statearr_18714[(9)] = inst_18693);

return statearr_18714;
})();
var statearr_18715_18941 = state_18703__$1;
(statearr_18715_18941[(2)] = inst_18695);

(statearr_18715_18941[(1)] = (5));


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
var statearr_18716 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18716[(0)] = app$db$fetch_productos_$_state_machine__11943__auto__);

(statearr_18716[(1)] = (1));

return statearr_18716;
});
var app$db$fetch_productos_$_state_machine__11943__auto____1 = (function (state_18703){
while(true){
var ret_value__11944__auto__ = (function (){try{while(true){
var result__11945__auto__ = switch__11942__auto__(state_18703);
if(cljs.core.keyword_identical_QMARK_(result__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11945__auto__;
}
break;
}
}catch (e18717){var ex__11946__auto__ = e18717;
var statearr_18718_18950 = state_18703;
(statearr_18718_18950[(2)] = ex__11946__auto__);


if(cljs.core.seq((state_18703[(4)]))){
var statearr_18719_18951 = state_18703;
(statearr_18719_18951[(1)] = cljs.core.first((state_18703[(4)])));

} else {
throw ex__11946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18952 = state_18703;
state_18703 = G__18952;
continue;
} else {
return ret_value__11944__auto__;
}
break;
}
});
app$db$fetch_productos_$_state_machine__11943__auto__ = function(state_18703){
switch(arguments.length){
case 0:
return app$db$fetch_productos_$_state_machine__11943__auto____0.call(this);
case 1:
return app$db$fetch_productos_$_state_machine__11943__auto____1.call(this,state_18703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$fetch_productos_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$fetch_productos_$_state_machine__11943__auto____0;
app$db$fetch_productos_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$fetch_productos_$_state_machine__11943__auto____1;
return app$db$fetch_productos_$_state_machine__11943__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_18720 = f__12040__auto__();
(statearr_18720[(6)] = c__12039__auto__);

return statearr_18720;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
});
app.db.fetch_list_productos = (function app$db$fetch_list_productos(){
console.log("Llamando a fetch-list-productos...");

var c__12039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__11942__auto__ = (function (state_18745){
var state_val_18746 = (state_18745[(1)]);
if((state_val_18746 === (1))){
var inst_18722 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"response-format","response-format",1664465322)];
var inst_18723 = [new cljs.core.Keyword(null,"keywords?","keywords?",764949733)];
var inst_18724 = [true];
var inst_18725 = cljs.core.PersistentHashMap.fromArrays(inst_18723,inst_18724);
var inst_18726 = ajax.core.json_response_format(inst_18725);
var inst_18727 = [false,inst_18726];
var inst_18728 = cljs.core.PersistentHashMap.fromArrays(inst_18722,inst_18727);
var inst_18729 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic("/api/productos/",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_18728], 0));
var state_18745__$1 = state_18745;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18745__$1,(2),inst_18729);
} else {
if((state_val_18746 === (2))){
var inst_18731 = (state_18745[(2)]);
var inst_18732 = cljs.core.__destructure_map(inst_18731);
var inst_18733 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18732,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_18734 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18732,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_18735 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_18733);
var state_18745__$1 = (function (){var statearr_18747 = state_18745;
(statearr_18747[(7)] = inst_18734);

return statearr_18747;
})();
if(inst_18735){
var statearr_18748_18955 = state_18745__$1;
(statearr_18748_18955[(1)] = (3));

} else {
var statearr_18749_18956 = state_18745__$1;
(statearr_18749_18956[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18746 === (3))){
var inst_18734 = (state_18745[(7)]);
var inst_18737 = cljs.core.reset_BANG_(app.db.list_productos,inst_18734);
var inst_18738 = cljs.core.deref(app.db.categorias);
var inst_18739 = console.log("Productos actualizados:",inst_18738);
var state_18745__$1 = (function (){var statearr_18750 = state_18745;
(statearr_18750[(8)] = inst_18737);

return statearr_18750;
})();
var statearr_18751_18958 = state_18745__$1;
(statearr_18751_18958[(2)] = inst_18739);

(statearr_18751_18958[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18746 === (4))){
var inst_18741 = console.error("Error al obtener productos");
var state_18745__$1 = state_18745;
var statearr_18752_18961 = state_18745__$1;
(statearr_18752_18961[(2)] = inst_18741);

(statearr_18752_18961[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18746 === (5))){
var inst_18743 = (state_18745[(2)]);
var state_18745__$1 = state_18745;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18745__$1,inst_18743);
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
var statearr_18753 = [null,null,null,null,null,null,null,null,null];
(statearr_18753[(0)] = app$db$fetch_list_productos_$_state_machine__11943__auto__);

(statearr_18753[(1)] = (1));

return statearr_18753;
});
var app$db$fetch_list_productos_$_state_machine__11943__auto____1 = (function (state_18745){
while(true){
var ret_value__11944__auto__ = (function (){try{while(true){
var result__11945__auto__ = switch__11942__auto__(state_18745);
if(cljs.core.keyword_identical_QMARK_(result__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11945__auto__;
}
break;
}
}catch (e18754){var ex__11946__auto__ = e18754;
var statearr_18755_18972 = state_18745;
(statearr_18755_18972[(2)] = ex__11946__auto__);


if(cljs.core.seq((state_18745[(4)]))){
var statearr_18756_18973 = state_18745;
(statearr_18756_18973[(1)] = cljs.core.first((state_18745[(4)])));

} else {
throw ex__11946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18974 = state_18745;
state_18745 = G__18974;
continue;
} else {
return ret_value__11944__auto__;
}
break;
}
});
app$db$fetch_list_productos_$_state_machine__11943__auto__ = function(state_18745){
switch(arguments.length){
case 0:
return app$db$fetch_list_productos_$_state_machine__11943__auto____0.call(this);
case 1:
return app$db$fetch_list_productos_$_state_machine__11943__auto____1.call(this,state_18745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$fetch_list_productos_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$fetch_list_productos_$_state_machine__11943__auto____0;
app$db$fetch_list_productos_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$fetch_list_productos_$_state_machine__11943__auto____1;
return app$db$fetch_list_productos_$_state_machine__11943__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_18757 = f__12040__auto__();
(statearr_18757[(6)] = c__12039__auto__);

return statearr_18757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
});
app.db.cargar_imagenes = (function app$db$cargar_imagenes(){
console.log("Llamando a cargar-imagenes...");

return fetch("/api/imagenes").then((function (p1__18758_SHARP_){
return p1__18758_SHARP_.json();
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
var f__12040__auto__ = (function (){var switch__11942__auto__ = (function (state_18782){
var state_val_18783 = (state_18782[(1)]);
if((state_val_18783 === (1))){
var inst_18760 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"json-params","json-params",-1112693596),new cljs.core.Keyword(null,"response-format","response-format",1664465322)];
var inst_18761 = [new cljs.core.Keyword(null,"keywords?","keywords?",764949733)];
var inst_18762 = [true];
var inst_18763 = cljs.core.PersistentHashMap.fromArrays(inst_18761,inst_18762);
var inst_18764 = ajax.core.json_response_format(inst_18763);
var inst_18765 = [false,producto,inst_18764];
var inst_18766 = cljs.core.PersistentHashMap.fromArrays(inst_18760,inst_18765);
var inst_18767 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic("/api/producto/nuevo",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_18766], 0));
var state_18782__$1 = state_18782;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18782__$1,(2),inst_18767);
} else {
if((state_val_18783 === (2))){
var inst_18769 = (state_18782[(2)]);
var inst_18770 = cljs.core.__destructure_map(inst_18769);
var inst_18771 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18770,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_18772 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18770,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_18773 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((201),inst_18771);
var state_18782__$1 = (function (){var statearr_18784 = state_18782;
(statearr_18784[(7)] = inst_18772);

return statearr_18784;
})();
if(inst_18773){
var statearr_18785_18991 = state_18782__$1;
(statearr_18785_18991[(1)] = (3));

} else {
var statearr_18786_18993 = state_18782__$1;
(statearr_18786_18993[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18783 === (3))){
var inst_18772 = (state_18782[(7)]);
var inst_18775 = console.log("Producto insertado correctamente",inst_18772);
var inst_18776 = alert("Producto creado correctamente");
var state_18782__$1 = (function (){var statearr_18787 = state_18782;
(statearr_18787[(8)] = inst_18775);

return statearr_18787;
})();
var statearr_18788_18995 = state_18782__$1;
(statearr_18788_18995[(2)] = inst_18776);

(statearr_18788_18995[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18783 === (4))){
var inst_18772 = (state_18782[(7)]);
var inst_18778 = console.error("Error al insertar producto",inst_18772);
var state_18782__$1 = state_18782;
var statearr_18789_18997 = state_18782__$1;
(statearr_18789_18997[(2)] = inst_18778);

(statearr_18789_18997[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18783 === (5))){
var inst_18780 = (state_18782[(2)]);
var state_18782__$1 = state_18782;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18782__$1,inst_18780);
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
var statearr_18790 = [null,null,null,null,null,null,null,null,null];
(statearr_18790[(0)] = app$db$insertar_producto_$_state_machine__11943__auto__);

(statearr_18790[(1)] = (1));

return statearr_18790;
});
var app$db$insertar_producto_$_state_machine__11943__auto____1 = (function (state_18782){
while(true){
var ret_value__11944__auto__ = (function (){try{while(true){
var result__11945__auto__ = switch__11942__auto__(state_18782);
if(cljs.core.keyword_identical_QMARK_(result__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11945__auto__;
}
break;
}
}catch (e18791){var ex__11946__auto__ = e18791;
var statearr_18792_19000 = state_18782;
(statearr_18792_19000[(2)] = ex__11946__auto__);


if(cljs.core.seq((state_18782[(4)]))){
var statearr_18793_19001 = state_18782;
(statearr_18793_19001[(1)] = cljs.core.first((state_18782[(4)])));

} else {
throw ex__11946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19002 = state_18782;
state_18782 = G__19002;
continue;
} else {
return ret_value__11944__auto__;
}
break;
}
});
app$db$insertar_producto_$_state_machine__11943__auto__ = function(state_18782){
switch(arguments.length){
case 0:
return app$db$insertar_producto_$_state_machine__11943__auto____0.call(this);
case 1:
return app$db$insertar_producto_$_state_machine__11943__auto____1.call(this,state_18782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$insertar_producto_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$insertar_producto_$_state_machine__11943__auto____0;
app$db$insertar_producto_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$insertar_producto_$_state_machine__11943__auto____1;
return app$db$insertar_producto_$_state_machine__11943__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_18794 = f__12040__auto__();
(statearr_18794[(6)] = c__12039__auto__);

return statearr_18794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
});
app.db.insertar_categoria = (function app$db$insertar_categoria(producto){
console.log("Llamando a insertar-categoria...",producto);

var c__12039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__11942__auto__ = (function (state_18818){
var state_val_18819 = (state_18818[(1)]);
if((state_val_18819 === (1))){
var inst_18796 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"json-params","json-params",-1112693596),new cljs.core.Keyword(null,"response-format","response-format",1664465322)];
var inst_18797 = [new cljs.core.Keyword(null,"keywords?","keywords?",764949733)];
var inst_18798 = [true];
var inst_18799 = cljs.core.PersistentHashMap.fromArrays(inst_18797,inst_18798);
var inst_18800 = ajax.core.json_response_format(inst_18799);
var inst_18801 = [false,producto,inst_18800];
var inst_18802 = cljs.core.PersistentHashMap.fromArrays(inst_18796,inst_18801);
var inst_18803 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic("/api/categoria/nuevo",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_18802], 0));
var state_18818__$1 = state_18818;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18818__$1,(2),inst_18803);
} else {
if((state_val_18819 === (2))){
var inst_18805 = (state_18818[(2)]);
var inst_18806 = cljs.core.__destructure_map(inst_18805);
var inst_18807 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18806,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_18808 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18806,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_18809 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((201),inst_18807);
var state_18818__$1 = (function (){var statearr_18820 = state_18818;
(statearr_18820[(7)] = inst_18808);

return statearr_18820;
})();
if(inst_18809){
var statearr_18821_19009 = state_18818__$1;
(statearr_18821_19009[(1)] = (3));

} else {
var statearr_18822_19010 = state_18818__$1;
(statearr_18822_19010[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18819 === (3))){
var inst_18808 = (state_18818[(7)]);
var inst_18811 = console.log("Categoria insertada correctamente",inst_18808);
var inst_18812 = alert("Categoria creada correctamente, recarga la lista de 'Mostrar categorias' dandole al boton, para verla y poder editarla.");
var state_18818__$1 = (function (){var statearr_18823 = state_18818;
(statearr_18823[(8)] = inst_18811);

return statearr_18823;
})();
var statearr_18824_19011 = state_18818__$1;
(statearr_18824_19011[(2)] = inst_18812);

(statearr_18824_19011[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18819 === (4))){
var inst_18808 = (state_18818[(7)]);
var inst_18814 = console.error("Error al insertar categoria",inst_18808);
var state_18818__$1 = state_18818;
var statearr_18825_19012 = state_18818__$1;
(statearr_18825_19012[(2)] = inst_18814);

(statearr_18825_19012[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18819 === (5))){
var inst_18816 = (state_18818[(2)]);
var state_18818__$1 = state_18818;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18818__$1,inst_18816);
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
var statearr_18826 = [null,null,null,null,null,null,null,null,null];
(statearr_18826[(0)] = app$db$insertar_categoria_$_state_machine__11943__auto__);

(statearr_18826[(1)] = (1));

return statearr_18826;
});
var app$db$insertar_categoria_$_state_machine__11943__auto____1 = (function (state_18818){
while(true){
var ret_value__11944__auto__ = (function (){try{while(true){
var result__11945__auto__ = switch__11942__auto__(state_18818);
if(cljs.core.keyword_identical_QMARK_(result__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11945__auto__;
}
break;
}
}catch (e18827){var ex__11946__auto__ = e18827;
var statearr_18828_19022 = state_18818;
(statearr_18828_19022[(2)] = ex__11946__auto__);


if(cljs.core.seq((state_18818[(4)]))){
var statearr_18829_19023 = state_18818;
(statearr_18829_19023[(1)] = cljs.core.first((state_18818[(4)])));

} else {
throw ex__11946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19025 = state_18818;
state_18818 = G__19025;
continue;
} else {
return ret_value__11944__auto__;
}
break;
}
});
app$db$insertar_categoria_$_state_machine__11943__auto__ = function(state_18818){
switch(arguments.length){
case 0:
return app$db$insertar_categoria_$_state_machine__11943__auto____0.call(this);
case 1:
return app$db$insertar_categoria_$_state_machine__11943__auto____1.call(this,state_18818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$insertar_categoria_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$insertar_categoria_$_state_machine__11943__auto____0;
app$db$insertar_categoria_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$insertar_categoria_$_state_machine__11943__auto____1;
return app$db$insertar_categoria_$_state_machine__11943__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_18830 = f__12040__auto__();
(statearr_18830[(6)] = c__12039__auto__);

return statearr_18830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
});
app.db.eliminar_producto = (function app$db$eliminar_producto(id){
var c__12039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__11942__auto__ = (function (state_18855){
var state_val_18856 = (state_18855[(1)]);
if((state_val_18856 === (1))){
var inst_18832 = ["/api/producto/eliminar/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('');
var inst_18833 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"response-format","response-format",1664465322)];
var inst_18834 = [new cljs.core.Keyword(null,"keywords?","keywords?",764949733)];
var inst_18835 = [true];
var inst_18836 = cljs.core.PersistentHashMap.fromArrays(inst_18834,inst_18835);
var inst_18837 = ajax.core.json_response_format(inst_18836);
var inst_18838 = [false,inst_18837];
var inst_18839 = cljs.core.PersistentHashMap.fromArrays(inst_18833,inst_18838);
var inst_18840 = cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(inst_18832,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_18839], 0));
var state_18855__$1 = state_18855;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18855__$1,(2),inst_18840);
} else {
if((state_val_18856 === (2))){
var inst_18842 = (state_18855[(2)]);
var inst_18843 = cljs.core.__destructure_map(inst_18842);
var inst_18844 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18843,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_18845 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18843,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_18846 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_18844);
var state_18855__$1 = (function (){var statearr_18857 = state_18855;
(statearr_18857[(7)] = inst_18845);

return statearr_18857;
})();
if(inst_18846){
var statearr_18858_19034 = state_18855__$1;
(statearr_18858_19034[(1)] = (3));

} else {
var statearr_18859_19035 = state_18855__$1;
(statearr_18859_19035[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18856 === (3))){
var inst_18845 = (state_18855[(7)]);
var inst_18848 = console.log("Producto eliminado",inst_18845);
var inst_18849 = alert("Producto eliminado correctamente, dale a boton de 'Mostrar productos'.");
var state_18855__$1 = (function (){var statearr_18860 = state_18855;
(statearr_18860[(8)] = inst_18848);

return statearr_18860;
})();
var statearr_18861_19037 = state_18855__$1;
(statearr_18861_19037[(2)] = inst_18849);

(statearr_18861_19037[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18856 === (4))){
var inst_18845 = (state_18855[(7)]);
var inst_18851 = console.error("Error al eliminar el producto",inst_18845);
var state_18855__$1 = state_18855;
var statearr_18862_19039 = state_18855__$1;
(statearr_18862_19039[(2)] = inst_18851);

(statearr_18862_19039[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18856 === (5))){
var inst_18853 = (state_18855[(2)]);
var state_18855__$1 = state_18855;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18855__$1,inst_18853);
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
var statearr_18863 = [null,null,null,null,null,null,null,null,null];
(statearr_18863[(0)] = app$db$eliminar_producto_$_state_machine__11943__auto__);

(statearr_18863[(1)] = (1));

return statearr_18863;
});
var app$db$eliminar_producto_$_state_machine__11943__auto____1 = (function (state_18855){
while(true){
var ret_value__11944__auto__ = (function (){try{while(true){
var result__11945__auto__ = switch__11942__auto__(state_18855);
if(cljs.core.keyword_identical_QMARK_(result__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11945__auto__;
}
break;
}
}catch (e18864){var ex__11946__auto__ = e18864;
var statearr_18865_19046 = state_18855;
(statearr_18865_19046[(2)] = ex__11946__auto__);


if(cljs.core.seq((state_18855[(4)]))){
var statearr_18866_19047 = state_18855;
(statearr_18866_19047[(1)] = cljs.core.first((state_18855[(4)])));

} else {
throw ex__11946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19049 = state_18855;
state_18855 = G__19049;
continue;
} else {
return ret_value__11944__auto__;
}
break;
}
});
app$db$eliminar_producto_$_state_machine__11943__auto__ = function(state_18855){
switch(arguments.length){
case 0:
return app$db$eliminar_producto_$_state_machine__11943__auto____0.call(this);
case 1:
return app$db$eliminar_producto_$_state_machine__11943__auto____1.call(this,state_18855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$eliminar_producto_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$eliminar_producto_$_state_machine__11943__auto____0;
app$db$eliminar_producto_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$eliminar_producto_$_state_machine__11943__auto____1;
return app$db$eliminar_producto_$_state_machine__11943__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_18867 = f__12040__auto__();
(statearr_18867[(6)] = c__12039__auto__);

return statearr_18867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
});
app.db.eliminar_categoria = (function app$db$eliminar_categoria(id){
var c__12039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__11942__auto__ = (function (state_18892){
var state_val_18893 = (state_18892[(1)]);
if((state_val_18893 === (1))){
var inst_18869 = ["/api/categoria/eliminar/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('');
var inst_18870 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"response-format","response-format",1664465322)];
var inst_18871 = [new cljs.core.Keyword(null,"keywords?","keywords?",764949733)];
var inst_18872 = [true];
var inst_18873 = cljs.core.PersistentHashMap.fromArrays(inst_18871,inst_18872);
var inst_18874 = ajax.core.json_response_format(inst_18873);
var inst_18875 = [false,inst_18874];
var inst_18876 = cljs.core.PersistentHashMap.fromArrays(inst_18870,inst_18875);
var inst_18877 = cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(inst_18869,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_18876], 0));
var state_18892__$1 = state_18892;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18892__$1,(2),inst_18877);
} else {
if((state_val_18893 === (2))){
var inst_18879 = (state_18892[(2)]);
var inst_18880 = cljs.core.__destructure_map(inst_18879);
var inst_18881 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18880,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_18882 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18880,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_18883 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_18881);
var state_18892__$1 = (function (){var statearr_18894 = state_18892;
(statearr_18894[(7)] = inst_18882);

return statearr_18894;
})();
if(inst_18883){
var statearr_18895_19056 = state_18892__$1;
(statearr_18895_19056[(1)] = (3));

} else {
var statearr_18896_19057 = state_18892__$1;
(statearr_18896_19057[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18893 === (3))){
var inst_18882 = (state_18892[(7)]);
var inst_18885 = console.log("Categor\u00EDa eliminada",inst_18882);
var inst_18886 = alert("Categor\u00EDa eliminada correctamente, dale a boton de 'Mostrar categorias'.");
var state_18892__$1 = (function (){var statearr_18897 = state_18892;
(statearr_18897[(8)] = inst_18885);

return statearr_18897;
})();
var statearr_18898_19058 = state_18892__$1;
(statearr_18898_19058[(2)] = inst_18886);

(statearr_18898_19058[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18893 === (4))){
var inst_18882 = (state_18892[(7)]);
var inst_18888 = console.error("Error al eliminar categor\u00EDa",inst_18882);
var state_18892__$1 = state_18892;
var statearr_18899_19059 = state_18892__$1;
(statearr_18899_19059[(2)] = inst_18888);

(statearr_18899_19059[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18893 === (5))){
var inst_18890 = (state_18892[(2)]);
var state_18892__$1 = state_18892;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18892__$1,inst_18890);
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
var statearr_18900 = [null,null,null,null,null,null,null,null,null];
(statearr_18900[(0)] = app$db$eliminar_categoria_$_state_machine__11943__auto__);

(statearr_18900[(1)] = (1));

return statearr_18900;
});
var app$db$eliminar_categoria_$_state_machine__11943__auto____1 = (function (state_18892){
while(true){
var ret_value__11944__auto__ = (function (){try{while(true){
var result__11945__auto__ = switch__11942__auto__(state_18892);
if(cljs.core.keyword_identical_QMARK_(result__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11945__auto__;
}
break;
}
}catch (e18901){var ex__11946__auto__ = e18901;
var statearr_18902_19065 = state_18892;
(statearr_18902_19065[(2)] = ex__11946__auto__);


if(cljs.core.seq((state_18892[(4)]))){
var statearr_18903_19066 = state_18892;
(statearr_18903_19066[(1)] = cljs.core.first((state_18892[(4)])));

} else {
throw ex__11946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19067 = state_18892;
state_18892 = G__19067;
continue;
} else {
return ret_value__11944__auto__;
}
break;
}
});
app$db$eliminar_categoria_$_state_machine__11943__auto__ = function(state_18892){
switch(arguments.length){
case 0:
return app$db$eliminar_categoria_$_state_machine__11943__auto____0.call(this);
case 1:
return app$db$eliminar_categoria_$_state_machine__11943__auto____1.call(this,state_18892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$eliminar_categoria_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$eliminar_categoria_$_state_machine__11943__auto____0;
app$db$eliminar_categoria_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$eliminar_categoria_$_state_machine__11943__auto____1;
return app$db$eliminar_categoria_$_state_machine__11943__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_18904 = f__12040__auto__();
(statearr_18904[(6)] = c__12039__auto__);

return statearr_18904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
});

//# sourceMappingURL=app.db.js.map
