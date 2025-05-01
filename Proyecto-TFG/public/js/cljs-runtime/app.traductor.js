goog.provide('app.traductor');
goog.scope(function(){
  app.traductor.goog$module$goog$object = goog.module.get('goog.object');
});
app.traductor.libretranslate_api_url = "https://libretranslate.com/translate";
app.traductor.extract_text_BANG_ = (function app$traductor$extract_text_BANG_(){
var elems = cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("[data-translate]"));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (el){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),el.getAttribute("data-translate"),new cljs.core.Keyword(null,"text","text",-1790561697),el.textContent()], null);
}),elems);
});
app.traductor.translate_all_BANG_ = (function app$traductor$translate_all_BANG_(source_lang,target_lang,callback){
var texts = app.traductor.extract_text_BANG_();
var c__12039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__11942__auto__ = (function (state_14307){
var state_val_14308 = (state_14307[(1)]);
if((state_val_14308 === (1))){
var inst_14288 = [new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_14289 = ["Content-Type"];
var inst_14290 = ["application/json"];
var inst_14291 = cljs.core.PersistentHashMap.fromArrays(inst_14289,inst_14290);
var inst_14294 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),texts);
var inst_14295 = ({"q":inst_14294,"source":source_lang,"target":target_lang});
var inst_14296 = JSON.stringify(inst_14295);
var inst_14297 = [inst_14291,inst_14296];
var inst_14298 = cljs.core.PersistentHashMap.fromArrays(inst_14288,inst_14297);
var inst_14299 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(app.traductor.libretranslate_api_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_14298], 0));
var state_14307__$1 = state_14307;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14307__$1,(2),inst_14299);
} else {
if((state_val_14308 === (2))){
var inst_14301 = (state_14307[(2)]);
var inst_14302 = (function (){var resp = inst_14301;
return (function (txt,idx){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(texts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,new cljs.core.Keyword(null,"id","id",-1388402092)], null)),new cljs.core.Keyword(null,"translated-text","translated-text",425175037),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(resp,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"translatedText","translatedText",-1682879722),idx], null))], null);
});
})();
var inst_14303 = cljs.core.range.cljs$core$IFn$_invoke$arity$0();
var inst_14304 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(inst_14302,texts,inst_14303);
var inst_14305 = (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(inst_14304) : callback.call(null, inst_14304));
var state_14307__$1 = state_14307;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14307__$1,inst_14305);
} else {
return null;
}
}
});
return (function() {
var app$traductor$translate_all_BANG__$_state_machine__11943__auto__ = null;
var app$traductor$translate_all_BANG__$_state_machine__11943__auto____0 = (function (){
var statearr_14309 = [null,null,null,null,null,null,null];
(statearr_14309[(0)] = app$traductor$translate_all_BANG__$_state_machine__11943__auto__);

(statearr_14309[(1)] = (1));

return statearr_14309;
});
var app$traductor$translate_all_BANG__$_state_machine__11943__auto____1 = (function (state_14307){
while(true){
var ret_value__11944__auto__ = (function (){try{while(true){
var result__11945__auto__ = switch__11942__auto__(state_14307);
if(cljs.core.keyword_identical_QMARK_(result__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11945__auto__;
}
break;
}
}catch (e14310){var ex__11946__auto__ = e14310;
var statearr_14311_14322 = state_14307;
(statearr_14311_14322[(2)] = ex__11946__auto__);


if(cljs.core.seq((state_14307[(4)]))){
var statearr_14312_14323 = state_14307;
(statearr_14312_14323[(1)] = cljs.core.first((state_14307[(4)])));

} else {
throw ex__11946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14324 = state_14307;
state_14307 = G__14324;
continue;
} else {
return ret_value__11944__auto__;
}
break;
}
});
app$traductor$translate_all_BANG__$_state_machine__11943__auto__ = function(state_14307){
switch(arguments.length){
case 0:
return app$traductor$translate_all_BANG__$_state_machine__11943__auto____0.call(this);
case 1:
return app$traductor$translate_all_BANG__$_state_machine__11943__auto____1.call(this,state_14307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$traductor$translate_all_BANG__$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$0 = app$traductor$translate_all_BANG__$_state_machine__11943__auto____0;
app$traductor$translate_all_BANG__$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$1 = app$traductor$translate_all_BANG__$_state_machine__11943__auto____1;
return app$traductor$translate_all_BANG__$_state_machine__11943__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_14313 = f__12040__auto__();
(statearr_14313[(6)] = c__12039__auto__);

return statearr_14313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
});
app.traductor.apply_translations_BANG_ = (function app$traductor$apply_translations_BANG_(translations){
var seq__14314 = cljs.core.seq(translations);
var chunk__14315 = null;
var count__14316 = (0);
var i__14317 = (0);
while(true){
if((i__14317 < count__14316)){
var map__14320 = chunk__14315.cljs$core$IIndexed$_nth$arity$2(null, i__14317);
var map__14320__$1 = cljs.core.__destructure_map(map__14320);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14320__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var translated_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14320__$1,new cljs.core.Keyword(null,"translated-text","translated-text",425175037));
var el_14325 = goog.dom.getElement(id);
(el_14325.innerHTML = translated_text);


var G__14326 = seq__14314;
var G__14327 = chunk__14315;
var G__14328 = count__14316;
var G__14329 = (i__14317 + (1));
seq__14314 = G__14326;
chunk__14315 = G__14327;
count__14316 = G__14328;
i__14317 = G__14329;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14314);
if(temp__5804__auto__){
var seq__14314__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14314__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14314__$1);
var G__14330 = cljs.core.chunk_rest(seq__14314__$1);
var G__14331 = c__5525__auto__;
var G__14332 = cljs.core.count(c__5525__auto__);
var G__14333 = (0);
seq__14314 = G__14330;
chunk__14315 = G__14331;
count__14316 = G__14332;
i__14317 = G__14333;
continue;
} else {
var map__14321 = cljs.core.first(seq__14314__$1);
var map__14321__$1 = cljs.core.__destructure_map(map__14321);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14321__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var translated_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14321__$1,new cljs.core.Keyword(null,"translated-text","translated-text",425175037));
var el_14334 = goog.dom.getElement(id);
(el_14334.innerHTML = translated_text);


var G__14335 = cljs.core.next(seq__14314__$1);
var G__14336 = null;
var G__14337 = (0);
var G__14338 = (0);
seq__14314 = G__14335;
chunk__14315 = G__14336;
count__14316 = G__14337;
i__14317 = G__14338;
continue;
}
} else {
return null;
}
}
break;
}
});
app.traductor.set_language_BANG_ = (function app$traductor$set_language_BANG_(source_lang,target_lang){
return app.traductor.translate_all_BANG_(source_lang,target_lang,(function (translations){
app.traductor.apply_translations_BANG_(translations);

return console.log("P\u00E1gina traducida a",target_lang);
}));
});

//# sourceMappingURL=app.traductor.js.map
