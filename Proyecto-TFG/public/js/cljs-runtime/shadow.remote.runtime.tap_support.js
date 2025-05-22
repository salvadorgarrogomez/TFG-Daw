goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__23293,p__23294){
var map__23295 = p__23293;
var map__23295__$1 = cljs.core.__destructure_map(map__23295);
var svc = map__23295__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23295__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23295__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23295__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__23299 = p__23294;
var map__23299__$1 = cljs.core.__destructure_map(map__23299);
var msg = map__23299__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23299__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23299__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23299__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23299__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__23306,p__23307){
var map__23309 = p__23306;
var map__23309__$1 = cljs.core.__destructure_map(map__23309);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23309__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__23310 = p__23307;
var map__23310__$1 = cljs.core.__destructure_map(map__23310);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23310__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__23315,p__23316){
var map__23317 = p__23315;
var map__23317__$1 = cljs.core.__destructure_map(map__23317);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23317__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23317__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__23318 = p__23316;
var map__23318__$1 = cljs.core.__destructure_map(map__23318);
var msg = map__23318__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23318__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__23323,tid){
var map__23324 = p__23323;
var map__23324__$1 = cljs.core.__destructure_map(map__23324);
var svc = map__23324__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23324__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__23335 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__23336 = null;
var count__23337 = (0);
var i__23338 = (0);
while(true){
if((i__23338 < count__23337)){
var vec__23348 = chunk__23336.cljs$core$IIndexed$_nth$arity$2(null, i__23338);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23348,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23348,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__23362 = seq__23335;
var G__23363 = chunk__23336;
var G__23364 = count__23337;
var G__23365 = (i__23338 + (1));
seq__23335 = G__23362;
chunk__23336 = G__23363;
count__23337 = G__23364;
i__23338 = G__23365;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23335);
if(temp__5804__auto__){
var seq__23335__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23335__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__23335__$1);
var G__23367 = cljs.core.chunk_rest(seq__23335__$1);
var G__23368 = c__5525__auto__;
var G__23369 = cljs.core.count(c__5525__auto__);
var G__23370 = (0);
seq__23335 = G__23367;
chunk__23336 = G__23368;
count__23337 = G__23369;
i__23338 = G__23370;
continue;
} else {
var vec__23353 = cljs.core.first(seq__23335__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23353,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23353,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__23372 = cljs.core.next(seq__23335__$1);
var G__23373 = null;
var G__23374 = (0);
var G__23375 = (0);
seq__23335 = G__23372;
chunk__23336 = G__23373;
count__23337 = G__23374;
i__23338 = G__23375;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__23329_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__23329_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__23330_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__23330_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__23331_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__23331_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__23332_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__23332_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__23359){
var map__23360 = p__23359;
var map__23360__$1 = cljs.core.__destructure_map(map__23360);
var svc = map__23360__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23360__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23360__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
