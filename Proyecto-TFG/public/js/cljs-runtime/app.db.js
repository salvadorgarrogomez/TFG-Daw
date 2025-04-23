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
var f__12040__auto__ = (function (){var switch__11918__auto__ = (function (state_41853){
var state_val_41854 = (state_41853[(1)]);
if((state_val_41854 === (1))){
var inst_41830 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"response-format","response-format",1664465322)];
var inst_41831 = [new cljs.core.Keyword(null,"keywords?","keywords?",764949733)];
var inst_41832 = [true];
var inst_41833 = cljs.core.PersistentHashMap.fromArrays(inst_41831,inst_41832);
var inst_41834 = ajax.core.json_response_format(inst_41833);
var inst_41835 = [false,inst_41834];
var inst_41836 = cljs.core.PersistentHashMap.fromArrays(inst_41830,inst_41835);
var inst_41837 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic("/api/categorias/",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_41836], 0));
var state_41853__$1 = state_41853;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41853__$1,(2),inst_41837);
} else {
if((state_val_41854 === (2))){
var inst_41839 = (state_41853[(2)]);
var inst_41840 = cljs.core.__destructure_map(inst_41839);
var inst_41841 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41840,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_41842 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41840,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_41843 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_41841);
var state_41853__$1 = (function (){var statearr_41855 = state_41853;
(statearr_41855[(7)] = inst_41842);

return statearr_41855;
})();
if(inst_41843){
var statearr_41856_42138 = state_41853__$1;
(statearr_41856_42138[(1)] = (3));

} else {
var statearr_41857_42139 = state_41853__$1;
(statearr_41857_42139[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41854 === (3))){
var inst_41842 = (state_41853[(7)]);
var inst_41845 = cljs.core.reset_BANG_(app.db.categorias,inst_41842);
var inst_41846 = cljs.core.deref(app.db.categorias);
var inst_41847 = console.log("Categor\u00EDas actualizadas:",inst_41846);
var state_41853__$1 = (function (){var statearr_41858 = state_41853;
(statearr_41858[(8)] = inst_41845);

return statearr_41858;
})();
var statearr_41859_42141 = state_41853__$1;
(statearr_41859_42141[(2)] = inst_41847);

(statearr_41859_42141[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41854 === (4))){
var inst_41849 = console.error("Error al obtener categor\u00EDas");
var state_41853__$1 = state_41853;
var statearr_41860_42142 = state_41853__$1;
(statearr_41860_42142[(2)] = inst_41849);

(statearr_41860_42142[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41854 === (5))){
var inst_41851 = (state_41853[(2)]);
var state_41853__$1 = state_41853;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41853__$1,inst_41851);
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
var statearr_41861 = [null,null,null,null,null,null,null,null,null];
(statearr_41861[(0)] = app$db$fetch_categorias_$_state_machine__11919__auto__);

(statearr_41861[(1)] = (1));

return statearr_41861;
});
var app$db$fetch_categorias_$_state_machine__11919__auto____1 = (function (state_41853){
while(true){
var ret_value__11920__auto__ = (function (){try{while(true){
var result__11921__auto__ = switch__11918__auto__(state_41853);
if(cljs.core.keyword_identical_QMARK_(result__11921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11921__auto__;
}
break;
}
}catch (e41862){var ex__11922__auto__ = e41862;
var statearr_41863_42144 = state_41853;
(statearr_41863_42144[(2)] = ex__11922__auto__);


if(cljs.core.seq((state_41853[(4)]))){
var statearr_41864_42145 = state_41853;
(statearr_41864_42145[(1)] = cljs.core.first((state_41853[(4)])));

} else {
throw ex__11922__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42146 = state_41853;
state_41853 = G__42146;
continue;
} else {
return ret_value__11920__auto__;
}
break;
}
});
app$db$fetch_categorias_$_state_machine__11919__auto__ = function(state_41853){
switch(arguments.length){
case 0:
return app$db$fetch_categorias_$_state_machine__11919__auto____0.call(this);
case 1:
return app$db$fetch_categorias_$_state_machine__11919__auto____1.call(this,state_41853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$fetch_categorias_$_state_machine__11919__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$fetch_categorias_$_state_machine__11919__auto____0;
app$db$fetch_categorias_$_state_machine__11919__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$fetch_categorias_$_state_machine__11919__auto____1;
return app$db$fetch_categorias_$_state_machine__11919__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_41865 = f__12040__auto__();
(statearr_41865[(6)] = c__12039__auto__);

return statearr_41865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
});
app.db.fetch_list_categorias = (function app$db$fetch_list_categorias(){
console.log("Llamando a fetch-categorias...");

var c__12039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__11918__auto__ = (function (state_41890){
var state_val_41891 = (state_41890[(1)]);
if((state_val_41891 === (1))){
var inst_41867 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"response-format","response-format",1664465322)];
var inst_41868 = [new cljs.core.Keyword(null,"keywords?","keywords?",764949733)];
var inst_41869 = [true];
var inst_41870 = cljs.core.PersistentHashMap.fromArrays(inst_41868,inst_41869);
var inst_41871 = ajax.core.json_response_format(inst_41870);
var inst_41872 = [false,inst_41871];
var inst_41873 = cljs.core.PersistentHashMap.fromArrays(inst_41867,inst_41872);
var inst_41874 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic("/api/todas_categorias",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_41873], 0));
var state_41890__$1 = state_41890;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41890__$1,(2),inst_41874);
} else {
if((state_val_41891 === (2))){
var inst_41876 = (state_41890[(2)]);
var inst_41877 = cljs.core.__destructure_map(inst_41876);
var inst_41878 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41877,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_41879 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41877,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_41880 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_41878);
var state_41890__$1 = (function (){var statearr_41892 = state_41890;
(statearr_41892[(7)] = inst_41879);

return statearr_41892;
})();
if(inst_41880){
var statearr_41893_42159 = state_41890__$1;
(statearr_41893_42159[(1)] = (3));

} else {
var statearr_41894_42161 = state_41890__$1;
(statearr_41894_42161[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41891 === (3))){
var inst_41879 = (state_41890[(7)]);
var inst_41882 = cljs.core.reset_BANG_(app.db.categorias,inst_41879);
var inst_41883 = cljs.core.deref(app.db.categorias);
var inst_41884 = console.log("Categor\u00EDas actualizadas:",inst_41883);
var state_41890__$1 = (function (){var statearr_41895 = state_41890;
(statearr_41895[(8)] = inst_41882);

return statearr_41895;
})();
var statearr_41896_42166 = state_41890__$1;
(statearr_41896_42166[(2)] = inst_41884);

(statearr_41896_42166[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41891 === (4))){
var inst_41886 = console.error("Error al obtener categor\u00EDas");
var state_41890__$1 = state_41890;
var statearr_41897_42170 = state_41890__$1;
(statearr_41897_42170[(2)] = inst_41886);

(statearr_41897_42170[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41891 === (5))){
var inst_41888 = (state_41890[(2)]);
var state_41890__$1 = state_41890;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41890__$1,inst_41888);
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
var statearr_41898 = [null,null,null,null,null,null,null,null,null];
(statearr_41898[(0)] = app$db$fetch_list_categorias_$_state_machine__11919__auto__);

(statearr_41898[(1)] = (1));

return statearr_41898;
});
var app$db$fetch_list_categorias_$_state_machine__11919__auto____1 = (function (state_41890){
while(true){
var ret_value__11920__auto__ = (function (){try{while(true){
var result__11921__auto__ = switch__11918__auto__(state_41890);
if(cljs.core.keyword_identical_QMARK_(result__11921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11921__auto__;
}
break;
}
}catch (e41899){var ex__11922__auto__ = e41899;
var statearr_41900_42180 = state_41890;
(statearr_41900_42180[(2)] = ex__11922__auto__);


if(cljs.core.seq((state_41890[(4)]))){
var statearr_41901_42181 = state_41890;
(statearr_41901_42181[(1)] = cljs.core.first((state_41890[(4)])));

} else {
throw ex__11922__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42182 = state_41890;
state_41890 = G__42182;
continue;
} else {
return ret_value__11920__auto__;
}
break;
}
});
app$db$fetch_list_categorias_$_state_machine__11919__auto__ = function(state_41890){
switch(arguments.length){
case 0:
return app$db$fetch_list_categorias_$_state_machine__11919__auto____0.call(this);
case 1:
return app$db$fetch_list_categorias_$_state_machine__11919__auto____1.call(this,state_41890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$fetch_list_categorias_$_state_machine__11919__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$fetch_list_categorias_$_state_machine__11919__auto____0;
app$db$fetch_list_categorias_$_state_machine__11919__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$fetch_list_categorias_$_state_machine__11919__auto____1;
return app$db$fetch_list_categorias_$_state_machine__11919__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_41902 = f__12040__auto__();
(statearr_41902[(6)] = c__12039__auto__);

return statearr_41902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
});
app.db.fetch_productos = (function app$db$fetch_productos(categoria_id){
console.log("Llamando a fetch-productos para categor\u00EDa:",categoria_id);

var c__12039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__11918__auto__ = (function (state_41936){
var state_val_41937 = (state_41936[(1)]);
if((state_val_41937 === (1))){
var inst_41904 = ["/api/productos/categoria/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(categoria_id)].join('');
var inst_41905 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"response-format","response-format",1664465322)];
var inst_41906 = [new cljs.core.Keyword(null,"keywords?","keywords?",764949733)];
var inst_41907 = [true];
var inst_41908 = cljs.core.PersistentHashMap.fromArrays(inst_41906,inst_41907);
var inst_41909 = ajax.core.json_response_format(inst_41908);
var inst_41910 = [false,inst_41909];
var inst_41911 = cljs.core.PersistentHashMap.fromArrays(inst_41905,inst_41910);
var inst_41912 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_41904,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_41911], 0));
var state_41936__$1 = state_41936;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41936__$1,(2),inst_41912);
} else {
if((state_val_41937 === (2))){
var inst_41914 = (state_41936[(2)]);
var inst_41915 = cljs.core.__destructure_map(inst_41914);
var inst_41916 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41915,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_41917 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41915,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_41918 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_41916);
var state_41936__$1 = (function (){var statearr_41938 = state_41936;
(statearr_41938[(7)] = inst_41917);

return statearr_41938;
})();
if(inst_41918){
var statearr_41939_42193 = state_41936__$1;
(statearr_41939_42193[(1)] = (3));

} else {
var statearr_41940_42194 = state_41936__$1;
(statearr_41940_42194[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41937 === (3))){
var inst_41917 = (state_41936[(7)]);
var inst_41920 = cljs.core.map_QMARK_(inst_41917);
var state_41936__$1 = state_41936;
if(inst_41920){
var statearr_41941_42195 = state_41936__$1;
(statearr_41941_42195[(1)] = (6));

} else {
var statearr_41942_42196 = state_41936__$1;
(statearr_41942_42196[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41937 === (4))){
var inst_41930 = cljs.core.PersistentVector.EMPTY;
var inst_41931 = cljs.core.reset_BANG_(app.db.productos,inst_41930);
var inst_41932 = console.log("La categor\u00EDa seleccionada no tiene productos asociados.");
var state_41936__$1 = (function (){var statearr_41943 = state_41936;
(statearr_41943[(8)] = inst_41931);

return statearr_41943;
})();
var statearr_41944_42197 = state_41936__$1;
(statearr_41944_42197[(2)] = inst_41932);

(statearr_41944_42197[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41937 === (5))){
var inst_41934 = (state_41936[(2)]);
var state_41936__$1 = state_41936;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41936__$1,inst_41934);
} else {
if((state_val_41937 === (6))){
var inst_41917 = (state_41936[(7)]);
var inst_41922 = new cljs.core.Keyword(null,"productos","productos",-1282966179).cljs$core$IFn$_invoke$arity$1(inst_41917);
var state_41936__$1 = state_41936;
var statearr_41945_42207 = state_41936__$1;
(statearr_41945_42207[(2)] = inst_41922);

(statearr_41945_42207[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41937 === (7))){
var inst_41917 = (state_41936[(7)]);
var state_41936__$1 = state_41936;
var statearr_41946_42208 = state_41936__$1;
(statearr_41946_42208[(2)] = inst_41917);

(statearr_41946_42208[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41937 === (8))){
var inst_41925 = (state_41936[(2)]);
var inst_41926 = cljs.core.reset_BANG_(app.db.productos,inst_41925);
var inst_41927 = cljs.core.deref(app.db.productos);
var inst_41928 = console.log("Productos actualizados:",inst_41927);
var state_41936__$1 = (function (){var statearr_41947 = state_41936;
(statearr_41947[(9)] = inst_41926);

return statearr_41947;
})();
var statearr_41948_42209 = state_41936__$1;
(statearr_41948_42209[(2)] = inst_41928);

(statearr_41948_42209[(1)] = (5));


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
var statearr_41949 = [null,null,null,null,null,null,null,null,null,null];
(statearr_41949[(0)] = app$db$fetch_productos_$_state_machine__11919__auto__);

(statearr_41949[(1)] = (1));

return statearr_41949;
});
var app$db$fetch_productos_$_state_machine__11919__auto____1 = (function (state_41936){
while(true){
var ret_value__11920__auto__ = (function (){try{while(true){
var result__11921__auto__ = switch__11918__auto__(state_41936);
if(cljs.core.keyword_identical_QMARK_(result__11921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11921__auto__;
}
break;
}
}catch (e41950){var ex__11922__auto__ = e41950;
var statearr_41951_42216 = state_41936;
(statearr_41951_42216[(2)] = ex__11922__auto__);


if(cljs.core.seq((state_41936[(4)]))){
var statearr_41952_42217 = state_41936;
(statearr_41952_42217[(1)] = cljs.core.first((state_41936[(4)])));

} else {
throw ex__11922__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42218 = state_41936;
state_41936 = G__42218;
continue;
} else {
return ret_value__11920__auto__;
}
break;
}
});
app$db$fetch_productos_$_state_machine__11919__auto__ = function(state_41936){
switch(arguments.length){
case 0:
return app$db$fetch_productos_$_state_machine__11919__auto____0.call(this);
case 1:
return app$db$fetch_productos_$_state_machine__11919__auto____1.call(this,state_41936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$fetch_productos_$_state_machine__11919__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$fetch_productos_$_state_machine__11919__auto____0;
app$db$fetch_productos_$_state_machine__11919__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$fetch_productos_$_state_machine__11919__auto____1;
return app$db$fetch_productos_$_state_machine__11919__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_41953 = f__12040__auto__();
(statearr_41953[(6)] = c__12039__auto__);

return statearr_41953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
});
app.db.fetch_list_productos = (function app$db$fetch_list_productos(){
console.log("Llamando a fetch-list-productos...");

var c__12039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__11918__auto__ = (function (state_41978){
var state_val_41979 = (state_41978[(1)]);
if((state_val_41979 === (1))){
var inst_41955 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"response-format","response-format",1664465322)];
var inst_41956 = [new cljs.core.Keyword(null,"keywords?","keywords?",764949733)];
var inst_41957 = [true];
var inst_41958 = cljs.core.PersistentHashMap.fromArrays(inst_41956,inst_41957);
var inst_41959 = ajax.core.json_response_format(inst_41958);
var inst_41960 = [false,inst_41959];
var inst_41961 = cljs.core.PersistentHashMap.fromArrays(inst_41955,inst_41960);
var inst_41962 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic("/api/productos/",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_41961], 0));
var state_41978__$1 = state_41978;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41978__$1,(2),inst_41962);
} else {
if((state_val_41979 === (2))){
var inst_41964 = (state_41978[(2)]);
var inst_41965 = cljs.core.__destructure_map(inst_41964);
var inst_41966 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41965,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_41967 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41965,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_41968 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_41966);
var state_41978__$1 = (function (){var statearr_41980 = state_41978;
(statearr_41980[(7)] = inst_41967);

return statearr_41980;
})();
if(inst_41968){
var statearr_41981_42221 = state_41978__$1;
(statearr_41981_42221[(1)] = (3));

} else {
var statearr_41982_42227 = state_41978__$1;
(statearr_41982_42227[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41979 === (3))){
var inst_41967 = (state_41978[(7)]);
var inst_41970 = cljs.core.reset_BANG_(app.db.list_productos,inst_41967);
var inst_41971 = cljs.core.deref(app.db.categorias);
var inst_41972 = console.log("Productos actualizados:",inst_41971);
var state_41978__$1 = (function (){var statearr_41983 = state_41978;
(statearr_41983[(8)] = inst_41970);

return statearr_41983;
})();
var statearr_41984_42229 = state_41978__$1;
(statearr_41984_42229[(2)] = inst_41972);

(statearr_41984_42229[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41979 === (4))){
var inst_41974 = console.error("Error al obtener productos");
var state_41978__$1 = state_41978;
var statearr_41985_42230 = state_41978__$1;
(statearr_41985_42230[(2)] = inst_41974);

(statearr_41985_42230[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41979 === (5))){
var inst_41976 = (state_41978[(2)]);
var state_41978__$1 = state_41978;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41978__$1,inst_41976);
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
var statearr_41986 = [null,null,null,null,null,null,null,null,null];
(statearr_41986[(0)] = app$db$fetch_list_productos_$_state_machine__11919__auto__);

(statearr_41986[(1)] = (1));

return statearr_41986;
});
var app$db$fetch_list_productos_$_state_machine__11919__auto____1 = (function (state_41978){
while(true){
var ret_value__11920__auto__ = (function (){try{while(true){
var result__11921__auto__ = switch__11918__auto__(state_41978);
if(cljs.core.keyword_identical_QMARK_(result__11921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11921__auto__;
}
break;
}
}catch (e41987){var ex__11922__auto__ = e41987;
var statearr_41988_42232 = state_41978;
(statearr_41988_42232[(2)] = ex__11922__auto__);


if(cljs.core.seq((state_41978[(4)]))){
var statearr_41989_42234 = state_41978;
(statearr_41989_42234[(1)] = cljs.core.first((state_41978[(4)])));

} else {
throw ex__11922__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42235 = state_41978;
state_41978 = G__42235;
continue;
} else {
return ret_value__11920__auto__;
}
break;
}
});
app$db$fetch_list_productos_$_state_machine__11919__auto__ = function(state_41978){
switch(arguments.length){
case 0:
return app$db$fetch_list_productos_$_state_machine__11919__auto____0.call(this);
case 1:
return app$db$fetch_list_productos_$_state_machine__11919__auto____1.call(this,state_41978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$fetch_list_productos_$_state_machine__11919__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$fetch_list_productos_$_state_machine__11919__auto____0;
app$db$fetch_list_productos_$_state_machine__11919__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$fetch_list_productos_$_state_machine__11919__auto____1;
return app$db$fetch_list_productos_$_state_machine__11919__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_41990 = f__12040__auto__();
(statearr_41990[(6)] = c__12039__auto__);

return statearr_41990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
});
app.db.cargar_imagenes = (function app$db$cargar_imagenes(){
console.log("Llamando a cargar-imagenes...");

return fetch("/api/imagenes").then((function (p1__41991_SHARP_){
return p1__41991_SHARP_.json();
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
var f__12040__auto__ = (function (){var switch__11918__auto__ = (function (state_42015){
var state_val_42016 = (state_42015[(1)]);
if((state_val_42016 === (1))){
var inst_41993 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"json-params","json-params",-1112693596),new cljs.core.Keyword(null,"response-format","response-format",1664465322)];
var inst_41994 = [new cljs.core.Keyword(null,"keywords?","keywords?",764949733)];
var inst_41995 = [true];
var inst_41996 = cljs.core.PersistentHashMap.fromArrays(inst_41994,inst_41995);
var inst_41997 = ajax.core.json_response_format(inst_41996);
var inst_41998 = [false,producto,inst_41997];
var inst_41999 = cljs.core.PersistentHashMap.fromArrays(inst_41993,inst_41998);
var inst_42000 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic("/api/producto/nuevo",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_41999], 0));
var state_42015__$1 = state_42015;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42015__$1,(2),inst_42000);
} else {
if((state_val_42016 === (2))){
var inst_42002 = (state_42015[(2)]);
var inst_42003 = cljs.core.__destructure_map(inst_42002);
var inst_42004 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42003,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_42005 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42003,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_42006 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((201),inst_42004);
var state_42015__$1 = (function (){var statearr_42017 = state_42015;
(statearr_42017[(7)] = inst_42005);

return statearr_42017;
})();
if(inst_42006){
var statearr_42018_42245 = state_42015__$1;
(statearr_42018_42245[(1)] = (3));

} else {
var statearr_42019_42246 = state_42015__$1;
(statearr_42019_42246[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42016 === (3))){
var inst_42005 = (state_42015[(7)]);
var inst_42008 = console.log("Producto insertado correctamente",inst_42005);
var inst_42009 = alert("Producto creado correctamente");
var state_42015__$1 = (function (){var statearr_42020 = state_42015;
(statearr_42020[(8)] = inst_42008);

return statearr_42020;
})();
var statearr_42021_42250 = state_42015__$1;
(statearr_42021_42250[(2)] = inst_42009);

(statearr_42021_42250[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42016 === (4))){
var inst_42005 = (state_42015[(7)]);
var inst_42011 = console.error("Error al insertar producto",inst_42005);
var state_42015__$1 = state_42015;
var statearr_42022_42252 = state_42015__$1;
(statearr_42022_42252[(2)] = inst_42011);

(statearr_42022_42252[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42016 === (5))){
var inst_42013 = (state_42015[(2)]);
var state_42015__$1 = state_42015;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42015__$1,inst_42013);
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
var statearr_42023 = [null,null,null,null,null,null,null,null,null];
(statearr_42023[(0)] = app$db$insertar_producto_$_state_machine__11919__auto__);

(statearr_42023[(1)] = (1));

return statearr_42023;
});
var app$db$insertar_producto_$_state_machine__11919__auto____1 = (function (state_42015){
while(true){
var ret_value__11920__auto__ = (function (){try{while(true){
var result__11921__auto__ = switch__11918__auto__(state_42015);
if(cljs.core.keyword_identical_QMARK_(result__11921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11921__auto__;
}
break;
}
}catch (e42024){var ex__11922__auto__ = e42024;
var statearr_42025_42257 = state_42015;
(statearr_42025_42257[(2)] = ex__11922__auto__);


if(cljs.core.seq((state_42015[(4)]))){
var statearr_42026_42258 = state_42015;
(statearr_42026_42258[(1)] = cljs.core.first((state_42015[(4)])));

} else {
throw ex__11922__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42259 = state_42015;
state_42015 = G__42259;
continue;
} else {
return ret_value__11920__auto__;
}
break;
}
});
app$db$insertar_producto_$_state_machine__11919__auto__ = function(state_42015){
switch(arguments.length){
case 0:
return app$db$insertar_producto_$_state_machine__11919__auto____0.call(this);
case 1:
return app$db$insertar_producto_$_state_machine__11919__auto____1.call(this,state_42015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$insertar_producto_$_state_machine__11919__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$insertar_producto_$_state_machine__11919__auto____0;
app$db$insertar_producto_$_state_machine__11919__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$insertar_producto_$_state_machine__11919__auto____1;
return app$db$insertar_producto_$_state_machine__11919__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_42027 = f__12040__auto__();
(statearr_42027[(6)] = c__12039__auto__);

return statearr_42027;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
});
app.db.insertar_categoria = (function app$db$insertar_categoria(producto){
console.log("Llamando a insertar-categoria...",producto);

var c__12039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__11918__auto__ = (function (state_42051){
var state_val_42052 = (state_42051[(1)]);
if((state_val_42052 === (1))){
var inst_42029 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"json-params","json-params",-1112693596),new cljs.core.Keyword(null,"response-format","response-format",1664465322)];
var inst_42030 = [new cljs.core.Keyword(null,"keywords?","keywords?",764949733)];
var inst_42031 = [true];
var inst_42032 = cljs.core.PersistentHashMap.fromArrays(inst_42030,inst_42031);
var inst_42033 = ajax.core.json_response_format(inst_42032);
var inst_42034 = [false,producto,inst_42033];
var inst_42035 = cljs.core.PersistentHashMap.fromArrays(inst_42029,inst_42034);
var inst_42036 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic("/api/categoria/nuevo",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_42035], 0));
var state_42051__$1 = state_42051;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42051__$1,(2),inst_42036);
} else {
if((state_val_42052 === (2))){
var inst_42038 = (state_42051[(2)]);
var inst_42039 = cljs.core.__destructure_map(inst_42038);
var inst_42040 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42039,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_42041 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42039,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_42042 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((201),inst_42040);
var state_42051__$1 = (function (){var statearr_42053 = state_42051;
(statearr_42053[(7)] = inst_42041);

return statearr_42053;
})();
if(inst_42042){
var statearr_42054_42261 = state_42051__$1;
(statearr_42054_42261[(1)] = (3));

} else {
var statearr_42055_42262 = state_42051__$1;
(statearr_42055_42262[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42052 === (3))){
var inst_42041 = (state_42051[(7)]);
var inst_42044 = console.log("Categoria insertada correctamente",inst_42041);
var inst_42045 = alert("Categoria creada correctamente, recarga la lista de 'Mostrar categorias' dandole al boton, para verla y poder editarla.");
var state_42051__$1 = (function (){var statearr_42056 = state_42051;
(statearr_42056[(8)] = inst_42044);

return statearr_42056;
})();
var statearr_42057_42263 = state_42051__$1;
(statearr_42057_42263[(2)] = inst_42045);

(statearr_42057_42263[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42052 === (4))){
var inst_42041 = (state_42051[(7)]);
var inst_42047 = console.error("Error al insertar categoria",inst_42041);
var state_42051__$1 = state_42051;
var statearr_42058_42264 = state_42051__$1;
(statearr_42058_42264[(2)] = inst_42047);

(statearr_42058_42264[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42052 === (5))){
var inst_42049 = (state_42051[(2)]);
var state_42051__$1 = state_42051;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42051__$1,inst_42049);
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
var statearr_42059 = [null,null,null,null,null,null,null,null,null];
(statearr_42059[(0)] = app$db$insertar_categoria_$_state_machine__11919__auto__);

(statearr_42059[(1)] = (1));

return statearr_42059;
});
var app$db$insertar_categoria_$_state_machine__11919__auto____1 = (function (state_42051){
while(true){
var ret_value__11920__auto__ = (function (){try{while(true){
var result__11921__auto__ = switch__11918__auto__(state_42051);
if(cljs.core.keyword_identical_QMARK_(result__11921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11921__auto__;
}
break;
}
}catch (e42060){var ex__11922__auto__ = e42060;
var statearr_42061_42270 = state_42051;
(statearr_42061_42270[(2)] = ex__11922__auto__);


if(cljs.core.seq((state_42051[(4)]))){
var statearr_42062_42273 = state_42051;
(statearr_42062_42273[(1)] = cljs.core.first((state_42051[(4)])));

} else {
throw ex__11922__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42275 = state_42051;
state_42051 = G__42275;
continue;
} else {
return ret_value__11920__auto__;
}
break;
}
});
app$db$insertar_categoria_$_state_machine__11919__auto__ = function(state_42051){
switch(arguments.length){
case 0:
return app$db$insertar_categoria_$_state_machine__11919__auto____0.call(this);
case 1:
return app$db$insertar_categoria_$_state_machine__11919__auto____1.call(this,state_42051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$insertar_categoria_$_state_machine__11919__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$insertar_categoria_$_state_machine__11919__auto____0;
app$db$insertar_categoria_$_state_machine__11919__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$insertar_categoria_$_state_machine__11919__auto____1;
return app$db$insertar_categoria_$_state_machine__11919__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_42063 = f__12040__auto__();
(statearr_42063[(6)] = c__12039__auto__);

return statearr_42063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
});
app.db.eliminar_producto = (function app$db$eliminar_producto(id){
var c__12039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__11918__auto__ = (function (state_42088){
var state_val_42089 = (state_42088[(1)]);
if((state_val_42089 === (1))){
var inst_42065 = ["/api/producto/eliminar/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('');
var inst_42066 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"response-format","response-format",1664465322)];
var inst_42067 = [new cljs.core.Keyword(null,"keywords?","keywords?",764949733)];
var inst_42068 = [true];
var inst_42069 = cljs.core.PersistentHashMap.fromArrays(inst_42067,inst_42068);
var inst_42070 = ajax.core.json_response_format(inst_42069);
var inst_42071 = [false,inst_42070];
var inst_42072 = cljs.core.PersistentHashMap.fromArrays(inst_42066,inst_42071);
var inst_42073 = cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(inst_42065,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_42072], 0));
var state_42088__$1 = state_42088;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42088__$1,(2),inst_42073);
} else {
if((state_val_42089 === (2))){
var inst_42075 = (state_42088[(2)]);
var inst_42076 = cljs.core.__destructure_map(inst_42075);
var inst_42077 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42076,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_42078 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42076,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_42079 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_42077);
var state_42088__$1 = (function (){var statearr_42090 = state_42088;
(statearr_42090[(7)] = inst_42078);

return statearr_42090;
})();
if(inst_42079){
var statearr_42091_42278 = state_42088__$1;
(statearr_42091_42278[(1)] = (3));

} else {
var statearr_42092_42279 = state_42088__$1;
(statearr_42092_42279[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42089 === (3))){
var inst_42078 = (state_42088[(7)]);
var inst_42081 = console.log("Producto eliminado",inst_42078);
var inst_42082 = alert("Producto eliminado correctamente, dale a boton de 'Mostrar productos'.");
var state_42088__$1 = (function (){var statearr_42093 = state_42088;
(statearr_42093[(8)] = inst_42081);

return statearr_42093;
})();
var statearr_42094_42280 = state_42088__$1;
(statearr_42094_42280[(2)] = inst_42082);

(statearr_42094_42280[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42089 === (4))){
var inst_42078 = (state_42088[(7)]);
var inst_42084 = console.error("Error al eliminar el producto",inst_42078);
var state_42088__$1 = state_42088;
var statearr_42095_42284 = state_42088__$1;
(statearr_42095_42284[(2)] = inst_42084);

(statearr_42095_42284[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42089 === (5))){
var inst_42086 = (state_42088[(2)]);
var state_42088__$1 = state_42088;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42088__$1,inst_42086);
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
var statearr_42096 = [null,null,null,null,null,null,null,null,null];
(statearr_42096[(0)] = app$db$eliminar_producto_$_state_machine__11919__auto__);

(statearr_42096[(1)] = (1));

return statearr_42096;
});
var app$db$eliminar_producto_$_state_machine__11919__auto____1 = (function (state_42088){
while(true){
var ret_value__11920__auto__ = (function (){try{while(true){
var result__11921__auto__ = switch__11918__auto__(state_42088);
if(cljs.core.keyword_identical_QMARK_(result__11921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11921__auto__;
}
break;
}
}catch (e42097){var ex__11922__auto__ = e42097;
var statearr_42098_42293 = state_42088;
(statearr_42098_42293[(2)] = ex__11922__auto__);


if(cljs.core.seq((state_42088[(4)]))){
var statearr_42099_42294 = state_42088;
(statearr_42099_42294[(1)] = cljs.core.first((state_42088[(4)])));

} else {
throw ex__11922__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42295 = state_42088;
state_42088 = G__42295;
continue;
} else {
return ret_value__11920__auto__;
}
break;
}
});
app$db$eliminar_producto_$_state_machine__11919__auto__ = function(state_42088){
switch(arguments.length){
case 0:
return app$db$eliminar_producto_$_state_machine__11919__auto____0.call(this);
case 1:
return app$db$eliminar_producto_$_state_machine__11919__auto____1.call(this,state_42088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$eliminar_producto_$_state_machine__11919__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$eliminar_producto_$_state_machine__11919__auto____0;
app$db$eliminar_producto_$_state_machine__11919__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$eliminar_producto_$_state_machine__11919__auto____1;
return app$db$eliminar_producto_$_state_machine__11919__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_42100 = f__12040__auto__();
(statearr_42100[(6)] = c__12039__auto__);

return statearr_42100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
});
app.db.eliminar_categoria = (function app$db$eliminar_categoria(id){
var c__12039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__11918__auto__ = (function (state_42125){
var state_val_42126 = (state_42125[(1)]);
if((state_val_42126 === (1))){
var inst_42102 = ["/api/categoria/eliminar/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('');
var inst_42103 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"response-format","response-format",1664465322)];
var inst_42104 = [new cljs.core.Keyword(null,"keywords?","keywords?",764949733)];
var inst_42105 = [true];
var inst_42106 = cljs.core.PersistentHashMap.fromArrays(inst_42104,inst_42105);
var inst_42107 = ajax.core.json_response_format(inst_42106);
var inst_42108 = [false,inst_42107];
var inst_42109 = cljs.core.PersistentHashMap.fromArrays(inst_42103,inst_42108);
var inst_42110 = cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(inst_42102,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_42109], 0));
var state_42125__$1 = state_42125;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42125__$1,(2),inst_42110);
} else {
if((state_val_42126 === (2))){
var inst_42112 = (state_42125[(2)]);
var inst_42113 = cljs.core.__destructure_map(inst_42112);
var inst_42114 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42113,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_42115 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42113,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_42116 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_42114);
var state_42125__$1 = (function (){var statearr_42127 = state_42125;
(statearr_42127[(7)] = inst_42115);

return statearr_42127;
})();
if(inst_42116){
var statearr_42128_42297 = state_42125__$1;
(statearr_42128_42297[(1)] = (3));

} else {
var statearr_42129_42298 = state_42125__$1;
(statearr_42129_42298[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42126 === (3))){
var inst_42115 = (state_42125[(7)]);
var inst_42118 = console.log("Categor\u00EDa eliminada",inst_42115);
var inst_42119 = alert("Categor\u00EDa eliminada correctamente, dale a boton de 'Mostrar categorias'.");
var state_42125__$1 = (function (){var statearr_42130 = state_42125;
(statearr_42130[(8)] = inst_42118);

return statearr_42130;
})();
var statearr_42131_42299 = state_42125__$1;
(statearr_42131_42299[(2)] = inst_42119);

(statearr_42131_42299[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42126 === (4))){
var inst_42115 = (state_42125[(7)]);
var inst_42121 = console.error("Error al eliminar categor\u00EDa",inst_42115);
var state_42125__$1 = state_42125;
var statearr_42132_42304 = state_42125__$1;
(statearr_42132_42304[(2)] = inst_42121);

(statearr_42132_42304[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42126 === (5))){
var inst_42123 = (state_42125[(2)]);
var state_42125__$1 = state_42125;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42125__$1,inst_42123);
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
var statearr_42133 = [null,null,null,null,null,null,null,null,null];
(statearr_42133[(0)] = app$db$eliminar_categoria_$_state_machine__11919__auto__);

(statearr_42133[(1)] = (1));

return statearr_42133;
});
var app$db$eliminar_categoria_$_state_machine__11919__auto____1 = (function (state_42125){
while(true){
var ret_value__11920__auto__ = (function (){try{while(true){
var result__11921__auto__ = switch__11918__auto__(state_42125);
if(cljs.core.keyword_identical_QMARK_(result__11921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11921__auto__;
}
break;
}
}catch (e42134){var ex__11922__auto__ = e42134;
var statearr_42135_42306 = state_42125;
(statearr_42135_42306[(2)] = ex__11922__auto__);


if(cljs.core.seq((state_42125[(4)]))){
var statearr_42136_42307 = state_42125;
(statearr_42136_42307[(1)] = cljs.core.first((state_42125[(4)])));

} else {
throw ex__11922__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42308 = state_42125;
state_42125 = G__42308;
continue;
} else {
return ret_value__11920__auto__;
}
break;
}
});
app$db$eliminar_categoria_$_state_machine__11919__auto__ = function(state_42125){
switch(arguments.length){
case 0:
return app$db$eliminar_categoria_$_state_machine__11919__auto____0.call(this);
case 1:
return app$db$eliminar_categoria_$_state_machine__11919__auto____1.call(this,state_42125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$eliminar_categoria_$_state_machine__11919__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$eliminar_categoria_$_state_machine__11919__auto____0;
app$db$eliminar_categoria_$_state_machine__11919__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$eliminar_categoria_$_state_machine__11919__auto____1;
return app$db$eliminar_categoria_$_state_machine__11919__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_42137 = f__12040__auto__();
(statearr_42137[(6)] = c__12039__auto__);

return statearr_42137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
});

//# sourceMappingURL=app.db.js.map
