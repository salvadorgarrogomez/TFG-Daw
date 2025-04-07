goog.provide('app.db');
app.db.categorias = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
app.db.productos = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
app.db.fetch_categorias = (function app$db$fetch_categorias(){
console.log("Llamando a fetch-categorias...");

var c__12039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__11918__auto__ = (function (state_13260){
var state_val_13261 = (state_13260[(1)]);
if((state_val_13261 === (1))){
var inst_13236 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"response-format","response-format",1664465322)];
var inst_13237 = [new cljs.core.Keyword(null,"keywords?","keywords?",764949733)];
var inst_13238 = [true];
var inst_13239 = cljs.core.PersistentHashMap.fromArrays(inst_13237,inst_13238);
var inst_13240 = ajax.core.json_response_format(inst_13239);
var inst_13241 = [false,inst_13240];
var inst_13242 = cljs.core.PersistentHashMap.fromArrays(inst_13236,inst_13241);
var inst_13243 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic("/api/categorias/",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_13242], 0));
var state_13260__$1 = state_13260;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13260__$1,(2),inst_13243);
} else {
if((state_val_13261 === (2))){
var inst_13248 = (state_13260[(7)]);
var inst_13245 = (state_13260[(2)]);
var inst_13246 = cljs.core.__destructure_map(inst_13245);
var inst_13247 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13246,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_13248__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13246,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_13249 = console.log("Respuesta de categor\u00EDas:",inst_13248__$1);
var inst_13250 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_13247);
var state_13260__$1 = (function (){var statearr_13262 = state_13260;
(statearr_13262[(8)] = inst_13249);

(statearr_13262[(7)] = inst_13248__$1);

return statearr_13262;
})();
if(inst_13250){
var statearr_13263_13322 = state_13260__$1;
(statearr_13263_13322[(1)] = (3));

} else {
var statearr_13264_13323 = state_13260__$1;
(statearr_13264_13323[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13261 === (3))){
var inst_13248 = (state_13260[(7)]);
var inst_13252 = cljs.core.reset_BANG_(app.db.categorias,inst_13248);
var inst_13253 = cljs.core.deref(app.db.categorias);
var inst_13254 = console.log("Categor\u00EDas actualizadas:",inst_13253);
var state_13260__$1 = (function (){var statearr_13265 = state_13260;
(statearr_13265[(9)] = inst_13252);

return statearr_13265;
})();
var statearr_13266_13324 = state_13260__$1;
(statearr_13266_13324[(2)] = inst_13254);

(statearr_13266_13324[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13261 === (4))){
var inst_13256 = console.error("Error al obtener categor\u00EDas");
var state_13260__$1 = state_13260;
var statearr_13267_13325 = state_13260__$1;
(statearr_13267_13325[(2)] = inst_13256);

(statearr_13267_13325[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13261 === (5))){
var inst_13258 = (state_13260[(2)]);
var state_13260__$1 = state_13260;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13260__$1,inst_13258);
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
var statearr_13268 = [null,null,null,null,null,null,null,null,null,null];
(statearr_13268[(0)] = app$db$fetch_categorias_$_state_machine__11919__auto__);

(statearr_13268[(1)] = (1));

return statearr_13268;
});
var app$db$fetch_categorias_$_state_machine__11919__auto____1 = (function (state_13260){
while(true){
var ret_value__11920__auto__ = (function (){try{while(true){
var result__11921__auto__ = switch__11918__auto__(state_13260);
if(cljs.core.keyword_identical_QMARK_(result__11921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11921__auto__;
}
break;
}
}catch (e13269){var ex__11922__auto__ = e13269;
var statearr_13270_13326 = state_13260;
(statearr_13270_13326[(2)] = ex__11922__auto__);


if(cljs.core.seq((state_13260[(4)]))){
var statearr_13271_13327 = state_13260;
(statearr_13271_13327[(1)] = cljs.core.first((state_13260[(4)])));

} else {
throw ex__11922__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13328 = state_13260;
state_13260 = G__13328;
continue;
} else {
return ret_value__11920__auto__;
}
break;
}
});
app$db$fetch_categorias_$_state_machine__11919__auto__ = function(state_13260){
switch(arguments.length){
case 0:
return app$db$fetch_categorias_$_state_machine__11919__auto____0.call(this);
case 1:
return app$db$fetch_categorias_$_state_machine__11919__auto____1.call(this,state_13260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$fetch_categorias_$_state_machine__11919__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$fetch_categorias_$_state_machine__11919__auto____0;
app$db$fetch_categorias_$_state_machine__11919__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$fetch_categorias_$_state_machine__11919__auto____1;
return app$db$fetch_categorias_$_state_machine__11919__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_13272 = f__12040__auto__();
(statearr_13272[(6)] = c__12039__auto__);

return statearr_13272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
});
app.db.fetch_productos = (function app$db$fetch_productos(categoria_id){
console.log("Llamando a fetch-productos para categor\u00EDa:",categoria_id);

var c__12039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__11918__auto__ = (function (state_13305){
var state_val_13306 = (state_13305[(1)]);
if((state_val_13306 === (1))){
var inst_13274 = ["/api/productos/categoria/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(categoria_id)].join('');
var inst_13275 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"response-format","response-format",1664465322)];
var inst_13276 = [new cljs.core.Keyword(null,"keywords?","keywords?",764949733)];
var inst_13277 = [true];
var inst_13278 = cljs.core.PersistentHashMap.fromArrays(inst_13276,inst_13277);
var inst_13279 = ajax.core.json_response_format(inst_13278);
var inst_13280 = [false,inst_13279];
var inst_13281 = cljs.core.PersistentHashMap.fromArrays(inst_13275,inst_13280);
var inst_13282 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_13274,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_13281], 0));
var state_13305__$1 = state_13305;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13305__$1,(2),inst_13282);
} else {
if((state_val_13306 === (2))){
var inst_13287 = (state_13305[(7)]);
var inst_13284 = (state_13305[(2)]);
var inst_13285 = cljs.core.__destructure_map(inst_13284);
var inst_13286 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13285,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_13287__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13285,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_13288 = console.log("Respuesta de productos de la categor\u00EDa:",inst_13287__$1);
var inst_13289 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_13286);
var state_13305__$1 = (function (){var statearr_13307 = state_13305;
(statearr_13307[(7)] = inst_13287__$1);

(statearr_13307[(8)] = inst_13288);

return statearr_13307;
})();
if(inst_13289){
var statearr_13308_13329 = state_13305__$1;
(statearr_13308_13329[(1)] = (3));

} else {
var statearr_13309_13330 = state_13305__$1;
(statearr_13309_13330[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13306 === (3))){
var inst_13287 = (state_13305[(7)]);
var inst_13291 = cljs.core.map_QMARK_(inst_13287);
var state_13305__$1 = state_13305;
if(inst_13291){
var statearr_13310_13331 = state_13305__$1;
(statearr_13310_13331[(1)] = (6));

} else {
var statearr_13311_13332 = state_13305__$1;
(statearr_13311_13332[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13306 === (4))){
var inst_13301 = console.error("Error al obtener productos");
var state_13305__$1 = state_13305;
var statearr_13312_13333 = state_13305__$1;
(statearr_13312_13333[(2)] = inst_13301);

(statearr_13312_13333[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13306 === (5))){
var inst_13303 = (state_13305[(2)]);
var state_13305__$1 = state_13305;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13305__$1,inst_13303);
} else {
if((state_val_13306 === (6))){
var inst_13287 = (state_13305[(7)]);
var inst_13293 = new cljs.core.Keyword(null,"productos","productos",-1282966179).cljs$core$IFn$_invoke$arity$1(inst_13287);
var state_13305__$1 = state_13305;
var statearr_13313_13334 = state_13305__$1;
(statearr_13313_13334[(2)] = inst_13293);

(statearr_13313_13334[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13306 === (7))){
var inst_13287 = (state_13305[(7)]);
var state_13305__$1 = state_13305;
var statearr_13314_13335 = state_13305__$1;
(statearr_13314_13335[(2)] = inst_13287);

(statearr_13314_13335[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13306 === (8))){
var inst_13296 = (state_13305[(2)]);
var inst_13297 = cljs.core.reset_BANG_(app.db.productos,inst_13296);
var inst_13298 = cljs.core.deref(app.db.productos);
var inst_13299 = console.log("Productos actualizados:",inst_13298);
var state_13305__$1 = (function (){var statearr_13315 = state_13305;
(statearr_13315[(9)] = inst_13297);

return statearr_13315;
})();
var statearr_13316_13336 = state_13305__$1;
(statearr_13316_13336[(2)] = inst_13299);

(statearr_13316_13336[(1)] = (5));


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
var statearr_13317 = [null,null,null,null,null,null,null,null,null,null];
(statearr_13317[(0)] = app$db$fetch_productos_$_state_machine__11919__auto__);

(statearr_13317[(1)] = (1));

return statearr_13317;
});
var app$db$fetch_productos_$_state_machine__11919__auto____1 = (function (state_13305){
while(true){
var ret_value__11920__auto__ = (function (){try{while(true){
var result__11921__auto__ = switch__11918__auto__(state_13305);
if(cljs.core.keyword_identical_QMARK_(result__11921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11921__auto__;
}
break;
}
}catch (e13318){var ex__11922__auto__ = e13318;
var statearr_13319_13337 = state_13305;
(statearr_13319_13337[(2)] = ex__11922__auto__);


if(cljs.core.seq((state_13305[(4)]))){
var statearr_13320_13338 = state_13305;
(statearr_13320_13338[(1)] = cljs.core.first((state_13305[(4)])));

} else {
throw ex__11922__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13339 = state_13305;
state_13305 = G__13339;
continue;
} else {
return ret_value__11920__auto__;
}
break;
}
});
app$db$fetch_productos_$_state_machine__11919__auto__ = function(state_13305){
switch(arguments.length){
case 0:
return app$db$fetch_productos_$_state_machine__11919__auto____0.call(this);
case 1:
return app$db$fetch_productos_$_state_machine__11919__auto____1.call(this,state_13305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$fetch_productos_$_state_machine__11919__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$fetch_productos_$_state_machine__11919__auto____0;
app$db$fetch_productos_$_state_machine__11919__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$fetch_productos_$_state_machine__11919__auto____1;
return app$db$fetch_productos_$_state_machine__11919__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_13321 = f__12040__auto__();
(statearr_13321[(6)] = c__12039__auto__);

return statearr_13321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
});

//# sourceMappingURL=app.db.js.map
