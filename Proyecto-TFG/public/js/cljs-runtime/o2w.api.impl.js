goog.provide('o2w.api.impl');
o2w.api.impl.dissoc_in = (function o2w$api$impl$dissoc_in(m,p__12615){
var vec__12618 = p__12615;
var seq__12619 = cljs.core.seq(vec__12618);
var first__12620 = cljs.core.first(seq__12619);
var seq__12619__$1 = cljs.core.next(seq__12619);
var k = first__12620;
var ks = seq__12619__$1;
var keys = vec__12618;
if(ks){
var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(temp__5802__auto__)){
var nextmap = temp__5802__auto__;
var newmap = (o2w.api.impl.dissoc_in.cljs$core$IFn$_invoke$arity$2 ? o2w.api.impl.dissoc_in.cljs$core$IFn$_invoke$arity$2(nextmap,ks) : o2w.api.impl.dissoc_in.call(null, nextmap,ks));
if(cljs.core.seq(newmap)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,newmap);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
} else {
return m;
}
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
});
o2w.api.impl.TOKEN = "auth_token";
o2w.api.impl.get_token = (function o2w$api$impl$get_token(){
return o2w.api.cookie.get(o2w.api.impl.TOKEN);
});
o2w.api.impl.set_token = (function o2w$api$impl$set_token(val){
return o2w.api.cookie.set_BANG_(o2w.api.impl.TOKEN,val);
});
o2w.api.impl.clear_token = (function o2w$api$impl$clear_token(){
o2w.api.cookie.set_BANG_(o2w.api.impl.TOKEN,"");

return o2w.api.cookie.remove_BANG_(o2w.api.impl.TOKEN);
});
o2w.api.impl.default_ok = (function o2w$api$impl$default_ok(res){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([res], 0));
});
o2w.api.impl.default_error = (function o2w$api$impl$default_error(p__12631){
var map__12632 = p__12631;
var map__12632__$1 = cljs.core.__destructure_map(map__12632);
var res = map__12632__$1;
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12632__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status,(401))){
o2w.api.impl.clear_token();
} else {
}

return console.log(res);
});
o2w.api.impl.default_headers = (function o2w$api$impl$default_headers(){
var token = o2w.api.impl.get_token();
var csrf = o2w.api.cookie.get("csrftoken");
var G__12638 = cljs.core.PersistentArrayMap.EMPTY;
var G__12638__$1 = (cljs.core.truth_(csrf)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__12638,"X-CSRFToken",csrf):G__12638);
var G__12638__$2 = (cljs.core.truth_(token)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__12638__$1,"Authorization",["Token ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)].join('')):G__12638__$1);
if(cljs.core.truth_(cljs.core.deref(o2w.i18n.db.language))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__12638__$2,"Accept-Language",cljs.core.deref(o2w.i18n.db.language));
} else {
return G__12638__$2;
}
});
if((typeof o2w !== 'undefined') && (typeof o2w.api !== 'undefined') && (typeof o2w.api.impl !== 'undefined') && (typeof o2w.api.impl.config !== 'undefined')){
} else {
o2w.api.impl.config = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"base-url","base-url",9540398),"/api/v1/",new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"interceptor","interceptor",1127739076),cljs.core.identity,new cljs.core.Keyword(null,"error","error",-978969032),o2w.api.impl.default_error,new cljs.core.Keyword(null,"headers","headers",-835030129),o2w.api.impl.default_headers], null));
}
o2w.api.impl.req = (function o2w$api$impl$req(var_args){
var args__5732__auto__ = [];
var len__5726__auto___12667 = arguments.length;
var i__5727__auto___12668 = (0);
while(true){
if((i__5727__auto___12668 < len__5726__auto___12667)){
args__5732__auto__.push((arguments[i__5727__auto___12668]));

var G__12669 = (i__5727__auto___12668 + (1));
i__5727__auto___12668 = G__12669;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return o2w.api.impl.req.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(o2w.api.impl.req.cljs$core$IFn$_invoke$arity$variadic = (function (endpoint,p__12642){
var vec__12643 = p__12642;
var map__12646 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12643,(0),null);
var map__12646__$1 = cljs.core.__destructure_map(map__12646);
var args = map__12646__$1;
var ok = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12646__$1,new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.Keyword(null,"ok","ok",967785236).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(o2w.api.impl.config)));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12646__$1,new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(o2w.api.impl.config)));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12646__$1,new cljs.core.Keyword(null,"params","params",710516235));
var base_url = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12646__$1,new cljs.core.Keyword(null,"base-url","base-url",9540398),new cljs.core.Keyword(null,"base-url","base-url",9540398).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(o2w.api.impl.config)));
var request = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12646__$1,new cljs.core.Keyword(null,"request","request",1772954723));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12646__$1,new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(o2w.api.impl.config)));
var interceptor = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12646__$1,new cljs.core.Keyword(null,"interceptor","interceptor",1127739076),new cljs.core.Keyword(null,"interceptor","interceptor",1127739076).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(o2w.api.impl.config)));
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var headers__$1 = ((cljs.core.fn_QMARK_(headers))?(headers.cljs$core$IFn$_invoke$arity$1 ? headers.cljs$core$IFn$_invoke$arity$1(args) : headers.call(null, args)):headers);
var extra_params = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(o2w.api.impl.config),new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),new cljs.core.Keyword(null,"base-url","base-url",9540398),new cljs.core.Keyword(null,"headers","headers",-835030129)], 0));
var ajax_params = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"uri","uri",-774711847),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_url),cljs.core.str.cljs$core$IFn$_invoke$arity$1(endpoint)].join(''),new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"headers","headers",-835030129),headers__$1,new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p__12647){
var vec__12648 = p__12647;
var ok_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12648,(0),null);
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12648,(1),null);
var c__12039__auto___12670 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__11918__auto__ = (function (state_12658){
var state_val_12659 = (state_12658[(1)]);
if((state_val_12659 === (1))){
var inst_12651 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12652 = [ok_QMARK_,res];
var inst_12653 = (new cljs.core.PersistentVector(null,2,(5),inst_12651,inst_12652,null));
var state_12658__$1 = state_12658;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12658__$1,(2),out,inst_12653);
} else {
if((state_val_12659 === (2))){
var inst_12655 = (state_12658[(2)]);
var inst_12656 = cljs.core.async.close_BANG_(out);
var state_12658__$1 = (function (){var statearr_12660 = state_12658;
(statearr_12660[(7)] = inst_12655);

return statearr_12660;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12658__$1,inst_12656);
} else {
return null;
}
}
});
return (function() {
var o2w$api$impl$state_machine__11919__auto__ = null;
var o2w$api$impl$state_machine__11919__auto____0 = (function (){
var statearr_12661 = [null,null,null,null,null,null,null,null];
(statearr_12661[(0)] = o2w$api$impl$state_machine__11919__auto__);

(statearr_12661[(1)] = (1));

return statearr_12661;
});
var o2w$api$impl$state_machine__11919__auto____1 = (function (state_12658){
while(true){
var ret_value__11920__auto__ = (function (){try{while(true){
var result__11921__auto__ = switch__11918__auto__(state_12658);
if(cljs.core.keyword_identical_QMARK_(result__11921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11921__auto__;
}
break;
}
}catch (e12662){var ex__11922__auto__ = e12662;
var statearr_12663_12671 = state_12658;
(statearr_12663_12671[(2)] = ex__11922__auto__);


if(cljs.core.seq((state_12658[(4)]))){
var statearr_12664_12672 = state_12658;
(statearr_12664_12672[(1)] = cljs.core.first((state_12658[(4)])));

} else {
throw ex__11922__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12673 = state_12658;
state_12658 = G__12673;
continue;
} else {
return ret_value__11920__auto__;
}
break;
}
});
o2w$api$impl$state_machine__11919__auto__ = function(state_12658){
switch(arguments.length){
case 0:
return o2w$api$impl$state_machine__11919__auto____0.call(this);
case 1:
return o2w$api$impl$state_machine__11919__auto____1.call(this,state_12658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
o2w$api$impl$state_machine__11919__auto__.cljs$core$IFn$_invoke$arity$0 = o2w$api$impl$state_machine__11919__auto____0;
o2w$api$impl$state_machine__11919__auto__.cljs$core$IFn$_invoke$arity$1 = o2w$api$impl$state_machine__11919__auto____1;
return o2w$api$impl$state_machine__11919__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_12665 = f__12040__auto__();
(statearr_12665[(6)] = c__12039__auto___12670);

return statearr_12665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));


if(cljs.core.truth_(ok_QMARK_)){
if(cljs.core.truth_(ok)){
return (ok.cljs$core$IFn$_invoke$arity$1 ? ok.cljs$core$IFn$_invoke$arity$1(res) : ok.call(null, res));
} else {
return null;
}
} else {
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(res) : error.call(null, res));
}
})], null),extra_params,args,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),(interceptor.cljs$core$IFn$_invoke$arity$1 ? interceptor.cljs$core$IFn$_invoke$arity$1(params) : interceptor.call(null, params))], null)], 0));
var ajax_request = (ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(ajax_params) : ajax.core.ajax_request.call(null, ajax_params));
if(cljs.core.truth_(request)){
if(cljs.core.truth_(cljs.core.deref(request))){
ajax.core.abort(cljs.core.deref(request));
} else {
}

cljs.core.reset_BANG_(request,ajax_request);
} else {
}

return out;
}));

(o2w.api.impl.req.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(o2w.api.impl.req.cljs$lang$applyTo = (function (seq12640){
var G__12641 = cljs.core.first(seq12640);
var seq12640__$1 = cljs.core.next(seq12640);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12641,seq12640__$1);
}));


//# sourceMappingURL=o2w.api.impl.js.map
