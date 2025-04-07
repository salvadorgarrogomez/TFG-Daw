goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__18155){
var map__18156 = p__18155;
var map__18156__$1 = cljs.core.__destructure_map(map__18156);
var runtime = map__18156__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18156__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_18347 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_18347)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__18162 = runtime;
var G__18163 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_18347);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__18162,G__18163) : shadow.remote.runtime.shared.process.call(null, G__18162,G__18163));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__18167,res){
var map__18168 = p__18167;
var map__18168__$1 = cljs.core.__destructure_map(map__18168);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18168__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18168__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__18169 = res;
var G__18169__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18169,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__18169);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18169__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__18169__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__18176 = arguments.length;
switch (G__18176) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__18180,msg,handlers,timeout_after_ms){
var map__18181 = p__18180;
var map__18181__$1 = cljs.core.__destructure_map(map__18181);
var runtime = map__18181__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18181__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18369 = arguments.length;
var i__5727__auto___18370 = (0);
while(true){
if((i__5727__auto___18370 < len__5726__auto___18369)){
args__5732__auto__.push((arguments[i__5727__auto___18370]));

var G__18371 = (i__5727__auto___18370 + (1));
i__5727__auto___18370 = G__18371;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__18185,ev,args){
var map__18186 = p__18185;
var map__18186__$1 = cljs.core.__destructure_map(map__18186);
var runtime = map__18186__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18186__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__18187 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__18190 = null;
var count__18191 = (0);
var i__18192 = (0);
while(true){
if((i__18192 < count__18191)){
var ext = chunk__18190.cljs$core$IIndexed$_nth$arity$2(null, i__18192);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__18374 = seq__18187;
var G__18375 = chunk__18190;
var G__18376 = count__18191;
var G__18377 = (i__18192 + (1));
seq__18187 = G__18374;
chunk__18190 = G__18375;
count__18191 = G__18376;
i__18192 = G__18377;
continue;
} else {
var G__18378 = seq__18187;
var G__18379 = chunk__18190;
var G__18380 = count__18191;
var G__18381 = (i__18192 + (1));
seq__18187 = G__18378;
chunk__18190 = G__18379;
count__18191 = G__18380;
i__18192 = G__18381;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18187);
if(temp__5804__auto__){
var seq__18187__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18187__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18187__$1);
var G__18382 = cljs.core.chunk_rest(seq__18187__$1);
var G__18383 = c__5525__auto__;
var G__18384 = cljs.core.count(c__5525__auto__);
var G__18385 = (0);
seq__18187 = G__18382;
chunk__18190 = G__18383;
count__18191 = G__18384;
i__18192 = G__18385;
continue;
} else {
var ext = cljs.core.first(seq__18187__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__18387 = cljs.core.next(seq__18187__$1);
var G__18388 = null;
var G__18389 = (0);
var G__18390 = (0);
seq__18187 = G__18387;
chunk__18190 = G__18388;
count__18191 = G__18389;
i__18192 = G__18390;
continue;
} else {
var G__18391 = cljs.core.next(seq__18187__$1);
var G__18392 = null;
var G__18393 = (0);
var G__18394 = (0);
seq__18187 = G__18391;
chunk__18190 = G__18392;
count__18191 = G__18393;
i__18192 = G__18394;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq18182){
var G__18183 = cljs.core.first(seq18182);
var seq18182__$1 = cljs.core.next(seq18182);
var G__18184 = cljs.core.first(seq18182__$1);
var seq18182__$2 = cljs.core.next(seq18182__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18183,G__18184,seq18182__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__18199,p__18200){
var map__18201 = p__18199;
var map__18201__$1 = cljs.core.__destructure_map(map__18201);
var runtime = map__18201__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18201__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__18202 = p__18200;
var map__18202__$1 = cljs.core.__destructure_map(map__18202);
var msg = map__18202__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18202__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__18203 = cljs.core.deref(state_ref);
var map__18203__$1 = cljs.core.__destructure_map(map__18203);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18203__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18203__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__18209,msg){
var map__18210 = p__18209;
var map__18210__$1 = cljs.core.__destructure_map(map__18210);
var runtime = map__18210__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18210__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__18230,key,p__18231){
var map__18232 = p__18230;
var map__18232__$1 = cljs.core.__destructure_map(map__18232);
var state = map__18232__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18232__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__18233 = p__18231;
var map__18233__$1 = cljs.core.__destructure_map(map__18233);
var spec = map__18233__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18233__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18233__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__18236,key,spec){
var map__18237 = p__18236;
var map__18237__$1 = cljs.core.__destructure_map(map__18237);
var runtime = map__18237__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18237__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5808__auto___18407 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5808__auto___18407 == null)){
} else {
var on_welcome_18408 = temp__5808__auto___18407;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_18408.cljs$core$IFn$_invoke$arity$0 ? on_welcome_18408.cljs$core$IFn$_invoke$arity$0() : on_welcome_18408.call(null, ));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__18239_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__18239_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__18240_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__18240_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__18241_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__18241_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__18242_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__18242_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__18243_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__18243_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__18266,key){
var map__18267 = p__18266;
var map__18267__$1 = cljs.core.__destructure_map(map__18267);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18267__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__18274,msg){
var map__18280 = p__18274;
var map__18280__$1 = cljs.core.__destructure_map(map__18280);
var runtime = map__18280__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18280__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__18302,p__18303){
var map__18304 = p__18302;
var map__18304__$1 = cljs.core.__destructure_map(map__18304);
var runtime = map__18304__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18304__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__18305 = p__18303;
var map__18305__$1 = cljs.core.__destructure_map(map__18305);
var msg = map__18305__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18305__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18305__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null, msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__18315 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__18317 = null;
var count__18318 = (0);
var i__18319 = (0);
while(true){
if((i__18319 < count__18318)){
var map__18326 = chunk__18317.cljs$core$IIndexed$_nth$arity$2(null, i__18319);
var map__18326__$1 = cljs.core.__destructure_map(map__18326);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18326__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__18414 = seq__18315;
var G__18415 = chunk__18317;
var G__18416 = count__18318;
var G__18417 = (i__18319 + (1));
seq__18315 = G__18414;
chunk__18317 = G__18415;
count__18318 = G__18416;
i__18319 = G__18417;
continue;
} else {
var G__18418 = seq__18315;
var G__18419 = chunk__18317;
var G__18420 = count__18318;
var G__18421 = (i__18319 + (1));
seq__18315 = G__18418;
chunk__18317 = G__18419;
count__18318 = G__18420;
i__18319 = G__18421;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18315);
if(temp__5804__auto__){
var seq__18315__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18315__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18315__$1);
var G__18422 = cljs.core.chunk_rest(seq__18315__$1);
var G__18423 = c__5525__auto__;
var G__18424 = cljs.core.count(c__5525__auto__);
var G__18425 = (0);
seq__18315 = G__18422;
chunk__18317 = G__18423;
count__18318 = G__18424;
i__18319 = G__18425;
continue;
} else {
var map__18336 = cljs.core.first(seq__18315__$1);
var map__18336__$1 = cljs.core.__destructure_map(map__18336);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18336__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__18426 = cljs.core.next(seq__18315__$1);
var G__18427 = null;
var G__18428 = (0);
var G__18429 = (0);
seq__18315 = G__18426;
chunk__18317 = G__18427;
count__18318 = G__18428;
i__18319 = G__18429;
continue;
} else {
var G__18430 = cljs.core.next(seq__18315__$1);
var G__18431 = null;
var G__18432 = (0);
var G__18433 = (0);
seq__18315 = G__18430;
chunk__18317 = G__18431;
count__18318 = G__18432;
i__18319 = G__18433;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
