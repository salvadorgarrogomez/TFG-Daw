goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__19093){
var map__19094 = p__19093;
var map__19094__$1 = cljs.core.__destructure_map(map__19094);
var runtime = map__19094__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19094__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_19429 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_19429)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__19101 = runtime;
var G__19102 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_19429);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__19101,G__19102) : shadow.remote.runtime.shared.process.call(null, G__19101,G__19102));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__19103,res){
var map__19104 = p__19103;
var map__19104__$1 = cljs.core.__destructure_map(map__19104);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19104__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19104__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__19105 = res;
var G__19105__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19105,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__19105);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19105__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__19105__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__19110 = arguments.length;
switch (G__19110) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__19122,msg,handlers,timeout_after_ms){
var map__19123 = p__19122;
var map__19123__$1 = cljs.core.__destructure_map(map__19123);
var runtime = map__19123__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19123__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
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
var len__5726__auto___19479 = arguments.length;
var i__5727__auto___19480 = (0);
while(true){
if((i__5727__auto___19480 < len__5726__auto___19479)){
args__5732__auto__.push((arguments[i__5727__auto___19480]));

var G__19481 = (i__5727__auto___19480 + (1));
i__5727__auto___19480 = G__19481;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__19132,ev,args){
var map__19133 = p__19132;
var map__19133__$1 = cljs.core.__destructure_map(map__19133);
var runtime = map__19133__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19133__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__19135 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__19138 = null;
var count__19139 = (0);
var i__19140 = (0);
while(true){
if((i__19140 < count__19139)){
var ext = chunk__19138.cljs$core$IIndexed$_nth$arity$2(null, i__19140);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__19488 = seq__19135;
var G__19489 = chunk__19138;
var G__19490 = count__19139;
var G__19491 = (i__19140 + (1));
seq__19135 = G__19488;
chunk__19138 = G__19489;
count__19139 = G__19490;
i__19140 = G__19491;
continue;
} else {
var G__19494 = seq__19135;
var G__19495 = chunk__19138;
var G__19496 = count__19139;
var G__19497 = (i__19140 + (1));
seq__19135 = G__19494;
chunk__19138 = G__19495;
count__19139 = G__19496;
i__19140 = G__19497;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19135);
if(temp__5804__auto__){
var seq__19135__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19135__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__19135__$1);
var G__19500 = cljs.core.chunk_rest(seq__19135__$1);
var G__19501 = c__5525__auto__;
var G__19502 = cljs.core.count(c__5525__auto__);
var G__19503 = (0);
seq__19135 = G__19500;
chunk__19138 = G__19501;
count__19139 = G__19502;
i__19140 = G__19503;
continue;
} else {
var ext = cljs.core.first(seq__19135__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__19504 = cljs.core.next(seq__19135__$1);
var G__19505 = null;
var G__19506 = (0);
var G__19507 = (0);
seq__19135 = G__19504;
chunk__19138 = G__19505;
count__19139 = G__19506;
i__19140 = G__19507;
continue;
} else {
var G__19508 = cljs.core.next(seq__19135__$1);
var G__19509 = null;
var G__19510 = (0);
var G__19511 = (0);
seq__19135 = G__19508;
chunk__19138 = G__19509;
count__19139 = G__19510;
i__19140 = G__19511;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq19127){
var G__19128 = cljs.core.first(seq19127);
var seq19127__$1 = cljs.core.next(seq19127);
var G__19129 = cljs.core.first(seq19127__$1);
var seq19127__$2 = cljs.core.next(seq19127__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19128,G__19129,seq19127__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__19155,p__19156){
var map__19161 = p__19155;
var map__19161__$1 = cljs.core.__destructure_map(map__19161);
var runtime = map__19161__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19161__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__19162 = p__19156;
var map__19162__$1 = cljs.core.__destructure_map(map__19162);
var msg = map__19162__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19162__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__19163 = cljs.core.deref(state_ref);
var map__19163__$1 = cljs.core.__destructure_map(map__19163);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19163__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19163__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__19165,msg){
var map__19166 = p__19165;
var map__19166__$1 = cljs.core.__destructure_map(map__19166);
var runtime = map__19166__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19166__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__19172,key,p__19173){
var map__19175 = p__19172;
var map__19175__$1 = cljs.core.__destructure_map(map__19175);
var state = map__19175__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19175__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__19176 = p__19173;
var map__19176__$1 = cljs.core.__destructure_map(map__19176);
var spec = map__19176__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19176__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19176__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__19185,key,spec){
var map__19186 = p__19185;
var map__19186__$1 = cljs.core.__destructure_map(map__19186);
var runtime = map__19186__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19186__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5808__auto___19534 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5808__auto___19534 == null)){
} else {
var on_welcome_19535 = temp__5808__auto___19534;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_19535.cljs$core$IFn$_invoke$arity$0 ? on_welcome_19535.cljs$core$IFn$_invoke$arity$0() : on_welcome_19535.call(null, ));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__19199_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__19199_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__19200_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__19200_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__19202_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__19202_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__19203_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__19203_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__19204_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__19204_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__19239,key){
var map__19244 = p__19239;
var map__19244__$1 = cljs.core.__destructure_map(map__19244);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19244__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__19269,msg){
var map__19271 = p__19269;
var map__19271__$1 = cljs.core.__destructure_map(map__19271);
var runtime = map__19271__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19271__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__19295,p__19296){
var map__19297 = p__19295;
var map__19297__$1 = cljs.core.__destructure_map(map__19297);
var runtime = map__19297__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19297__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__19298 = p__19296;
var map__19298__$1 = cljs.core.__destructure_map(map__19298);
var msg = map__19298__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19298__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19298__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__19362 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__19368 = null;
var count__19369 = (0);
var i__19370 = (0);
while(true){
if((i__19370 < count__19369)){
var map__19405 = chunk__19368.cljs$core$IIndexed$_nth$arity$2(null, i__19370);
var map__19405__$1 = cljs.core.__destructure_map(map__19405);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19405__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__19557 = seq__19362;
var G__19558 = chunk__19368;
var G__19559 = count__19369;
var G__19560 = (i__19370 + (1));
seq__19362 = G__19557;
chunk__19368 = G__19558;
count__19369 = G__19559;
i__19370 = G__19560;
continue;
} else {
var G__19562 = seq__19362;
var G__19563 = chunk__19368;
var G__19564 = count__19369;
var G__19565 = (i__19370 + (1));
seq__19362 = G__19562;
chunk__19368 = G__19563;
count__19369 = G__19564;
i__19370 = G__19565;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19362);
if(temp__5804__auto__){
var seq__19362__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19362__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__19362__$1);
var G__19568 = cljs.core.chunk_rest(seq__19362__$1);
var G__19569 = c__5525__auto__;
var G__19570 = cljs.core.count(c__5525__auto__);
var G__19571 = (0);
seq__19362 = G__19568;
chunk__19368 = G__19569;
count__19369 = G__19570;
i__19370 = G__19571;
continue;
} else {
var map__19418 = cljs.core.first(seq__19362__$1);
var map__19418__$1 = cljs.core.__destructure_map(map__19418);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19418__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__19572 = cljs.core.next(seq__19362__$1);
var G__19573 = null;
var G__19574 = (0);
var G__19575 = (0);
seq__19362 = G__19572;
chunk__19368 = G__19573;
count__19369 = G__19574;
i__19370 = G__19575;
continue;
} else {
var G__19577 = cljs.core.next(seq__19362__$1);
var G__19578 = null;
var G__19579 = (0);
var G__19580 = (0);
seq__19362 = G__19577;
chunk__19368 = G__19578;
count__19369 = G__19579;
i__19370 = G__19580;
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
