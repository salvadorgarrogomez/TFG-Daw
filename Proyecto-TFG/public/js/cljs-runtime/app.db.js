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
var f__12040__auto__ = (function (){var switch__11969__auto__ = (function (state_18237){
var state_val_18238 = (state_18237[(1)]);
if((state_val_18238 === (1))){
var inst_18214 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"response-format","response-format",1664465322)];
var inst_18215 = [new cljs.core.Keyword(null,"keywords?","keywords?",764949733)];
var inst_18216 = [true];
var inst_18217 = cljs.core.PersistentHashMap.fromArrays(inst_18215,inst_18216);
var inst_18218 = ajax.core.json_response_format(inst_18217);
var inst_18219 = [false,inst_18218];
var inst_18220 = cljs.core.PersistentHashMap.fromArrays(inst_18214,inst_18219);
var inst_18221 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic("/api/categorias/",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_18220], 0));
var state_18237__$1 = state_18237;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18237__$1,(2),inst_18221);
} else {
if((state_val_18238 === (2))){
var inst_18223 = (state_18237[(2)]);
var inst_18224 = cljs.core.__destructure_map(inst_18223);
var inst_18225 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18224,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_18226 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18224,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_18227 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_18225);
var state_18237__$1 = (function (){var statearr_18239 = state_18237;
(statearr_18239[(7)] = inst_18226);

return statearr_18239;
})();
if(inst_18227){
var statearr_18240_18299 = state_18237__$1;
(statearr_18240_18299[(1)] = (3));

} else {
var statearr_18241_18300 = state_18237__$1;
(statearr_18241_18300[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18238 === (3))){
var inst_18226 = (state_18237[(7)]);
var inst_18229 = cljs.core.reset_BANG_(app.db.categorias,inst_18226);
var inst_18230 = cljs.core.deref(app.db.categorias);
var inst_18231 = console.log("Categor\u00EDas actualizadas:",inst_18230);
var state_18237__$1 = (function (){var statearr_18242 = state_18237;
(statearr_18242[(8)] = inst_18229);

return statearr_18242;
})();
var statearr_18243_18301 = state_18237__$1;
(statearr_18243_18301[(2)] = inst_18231);

(statearr_18243_18301[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18238 === (4))){
var inst_18233 = console.error("Error al obtener categor\u00EDas");
var state_18237__$1 = state_18237;
var statearr_18244_18302 = state_18237__$1;
(statearr_18244_18302[(2)] = inst_18233);

(statearr_18244_18302[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18238 === (5))){
var inst_18235 = (state_18237[(2)]);
var state_18237__$1 = state_18237;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18237__$1,inst_18235);
} else {
return null;
}
}
}
}
}
});
return (function() {
var app$db$fetch_categorias_$_state_machine__11970__auto__ = null;
var app$db$fetch_categorias_$_state_machine__11970__auto____0 = (function (){
var statearr_18245 = [null,null,null,null,null,null,null,null,null];
(statearr_18245[(0)] = app$db$fetch_categorias_$_state_machine__11970__auto__);

(statearr_18245[(1)] = (1));

return statearr_18245;
});
var app$db$fetch_categorias_$_state_machine__11970__auto____1 = (function (state_18237){
while(true){
var ret_value__11971__auto__ = (function (){try{while(true){
var result__11972__auto__ = switch__11969__auto__(state_18237);
if(cljs.core.keyword_identical_QMARK_(result__11972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11972__auto__;
}
break;
}
}catch (e18246){var ex__11973__auto__ = e18246;
var statearr_18247_18303 = state_18237;
(statearr_18247_18303[(2)] = ex__11973__auto__);


if(cljs.core.seq((state_18237[(4)]))){
var statearr_18248_18304 = state_18237;
(statearr_18248_18304[(1)] = cljs.core.first((state_18237[(4)])));

} else {
throw ex__11973__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18305 = state_18237;
state_18237 = G__18305;
continue;
} else {
return ret_value__11971__auto__;
}
break;
}
});
app$db$fetch_categorias_$_state_machine__11970__auto__ = function(state_18237){
switch(arguments.length){
case 0:
return app$db$fetch_categorias_$_state_machine__11970__auto____0.call(this);
case 1:
return app$db$fetch_categorias_$_state_machine__11970__auto____1.call(this,state_18237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$fetch_categorias_$_state_machine__11970__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$fetch_categorias_$_state_machine__11970__auto____0;
app$db$fetch_categorias_$_state_machine__11970__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$fetch_categorias_$_state_machine__11970__auto____1;
return app$db$fetch_categorias_$_state_machine__11970__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_18249 = f__12040__auto__();
(statearr_18249[(6)] = c__12039__auto__);

return statearr_18249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
});
app.db.fetch_productos = (function app$db$fetch_productos(categoria_id){
console.log("Llamando a fetch-productos para categor\u00EDa:",categoria_id);

var c__12039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__11969__auto__ = (function (state_18281){
var state_val_18282 = (state_18281[(1)]);
if((state_val_18282 === (1))){
var inst_18251 = ["/api/productos/categoria/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(categoria_id)].join('');
var inst_18252 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"response-format","response-format",1664465322)];
var inst_18253 = [new cljs.core.Keyword(null,"keywords?","keywords?",764949733)];
var inst_18254 = [true];
var inst_18255 = cljs.core.PersistentHashMap.fromArrays(inst_18253,inst_18254);
var inst_18256 = ajax.core.json_response_format(inst_18255);
var inst_18257 = [false,inst_18256];
var inst_18258 = cljs.core.PersistentHashMap.fromArrays(inst_18252,inst_18257);
var inst_18259 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_18251,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_18258], 0));
var state_18281__$1 = state_18281;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18281__$1,(2),inst_18259);
} else {
if((state_val_18282 === (2))){
var inst_18261 = (state_18281[(2)]);
var inst_18262 = cljs.core.__destructure_map(inst_18261);
var inst_18263 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18262,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_18264 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18262,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_18265 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_18263);
var state_18281__$1 = (function (){var statearr_18283 = state_18281;
(statearr_18283[(7)] = inst_18264);

return statearr_18283;
})();
if(inst_18265){
var statearr_18284_18306 = state_18281__$1;
(statearr_18284_18306[(1)] = (3));

} else {
var statearr_18285_18307 = state_18281__$1;
(statearr_18285_18307[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18282 === (3))){
var inst_18264 = (state_18281[(7)]);
var inst_18267 = cljs.core.map_QMARK_(inst_18264);
var state_18281__$1 = state_18281;
if(inst_18267){
var statearr_18286_18308 = state_18281__$1;
(statearr_18286_18308[(1)] = (6));

} else {
var statearr_18287_18309 = state_18281__$1;
(statearr_18287_18309[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18282 === (4))){
var inst_18277 = console.error("Error al obtener productos");
var state_18281__$1 = state_18281;
var statearr_18288_18310 = state_18281__$1;
(statearr_18288_18310[(2)] = inst_18277);

(statearr_18288_18310[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18282 === (5))){
var inst_18279 = (state_18281[(2)]);
var state_18281__$1 = state_18281;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18281__$1,inst_18279);
} else {
if((state_val_18282 === (6))){
var inst_18264 = (state_18281[(7)]);
var inst_18269 = new cljs.core.Keyword(null,"productos","productos",-1282966179).cljs$core$IFn$_invoke$arity$1(inst_18264);
var state_18281__$1 = state_18281;
var statearr_18289_18311 = state_18281__$1;
(statearr_18289_18311[(2)] = inst_18269);

(statearr_18289_18311[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18282 === (7))){
var inst_18264 = (state_18281[(7)]);
var state_18281__$1 = state_18281;
var statearr_18290_18312 = state_18281__$1;
(statearr_18290_18312[(2)] = inst_18264);

(statearr_18290_18312[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18282 === (8))){
var inst_18272 = (state_18281[(2)]);
var inst_18273 = cljs.core.reset_BANG_(app.db.productos,inst_18272);
var inst_18274 = cljs.core.deref(app.db.productos);
var inst_18275 = console.log("Productos actualizados:",inst_18274);
var state_18281__$1 = (function (){var statearr_18291 = state_18281;
(statearr_18291[(8)] = inst_18273);

return statearr_18291;
})();
var statearr_18292_18313 = state_18281__$1;
(statearr_18292_18313[(2)] = inst_18275);

(statearr_18292_18313[(1)] = (5));


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
var app$db$fetch_productos_$_state_machine__11970__auto__ = null;
var app$db$fetch_productos_$_state_machine__11970__auto____0 = (function (){
var statearr_18293 = [null,null,null,null,null,null,null,null,null];
(statearr_18293[(0)] = app$db$fetch_productos_$_state_machine__11970__auto__);

(statearr_18293[(1)] = (1));

return statearr_18293;
});
var app$db$fetch_productos_$_state_machine__11970__auto____1 = (function (state_18281){
while(true){
var ret_value__11971__auto__ = (function (){try{while(true){
var result__11972__auto__ = switch__11969__auto__(state_18281);
if(cljs.core.keyword_identical_QMARK_(result__11972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11972__auto__;
}
break;
}
}catch (e18294){var ex__11973__auto__ = e18294;
var statearr_18295_18314 = state_18281;
(statearr_18295_18314[(2)] = ex__11973__auto__);


if(cljs.core.seq((state_18281[(4)]))){
var statearr_18296_18315 = state_18281;
(statearr_18296_18315[(1)] = cljs.core.first((state_18281[(4)])));

} else {
throw ex__11973__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18316 = state_18281;
state_18281 = G__18316;
continue;
} else {
return ret_value__11971__auto__;
}
break;
}
});
app$db$fetch_productos_$_state_machine__11970__auto__ = function(state_18281){
switch(arguments.length){
case 0:
return app$db$fetch_productos_$_state_machine__11970__auto____0.call(this);
case 1:
return app$db$fetch_productos_$_state_machine__11970__auto____1.call(this,state_18281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$fetch_productos_$_state_machine__11970__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$fetch_productos_$_state_machine__11970__auto____0;
app$db$fetch_productos_$_state_machine__11970__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$fetch_productos_$_state_machine__11970__auto____1;
return app$db$fetch_productos_$_state_machine__11970__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_18297 = f__12040__auto__();
(statearr_18297[(6)] = c__12039__auto__);

return statearr_18297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
});
app.db.cargar_imagenes = (function app$db$cargar_imagenes(){
console.log("Llamando a cargar-imagenes...");

return fetch("/api/imagenes").then((function (p1__18298_SHARP_){
return p1__18298_SHARP_.json();
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
