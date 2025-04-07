goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__22199,p__22202){
var map__22207 = p__22199;
var map__22207__$1 = cljs.core.__destructure_map(map__22207);
var svc = map__22207__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22207__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22207__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22207__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__22208 = p__22202;
var map__22208__$1 = cljs.core.__destructure_map(map__22208);
var msg = map__22208__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22208__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22208__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22208__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22208__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__22219,p__22220){
var map__22221 = p__22219;
var map__22221__$1 = cljs.core.__destructure_map(map__22221);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22221__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__22222 = p__22220;
var map__22222__$1 = cljs.core.__destructure_map(map__22222);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22222__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__22225,p__22226){
var map__22227 = p__22225;
var map__22227__$1 = cljs.core.__destructure_map(map__22227);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22227__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22227__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__22228 = p__22226;
var map__22228__$1 = cljs.core.__destructure_map(map__22228);
var msg = map__22228__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22228__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__22234,tid){
var map__22235 = p__22234;
var map__22235__$1 = cljs.core.__destructure_map(map__22235);
var svc = map__22235__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22235__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__22248 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__22249 = null;
var count__22250 = (0);
var i__22251 = (0);
while(true){
if((i__22251 < count__22250)){
var vec__22261 = chunk__22249.cljs$core$IIndexed$_nth$arity$2(null, i__22251);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22261,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22261,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__22278 = seq__22248;
var G__22279 = chunk__22249;
var G__22280 = count__22250;
var G__22281 = (i__22251 + (1));
seq__22248 = G__22278;
chunk__22249 = G__22279;
count__22250 = G__22280;
i__22251 = G__22281;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22248);
if(temp__5804__auto__){
var seq__22248__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22248__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__22248__$1);
var G__22283 = cljs.core.chunk_rest(seq__22248__$1);
var G__22284 = c__5525__auto__;
var G__22285 = cljs.core.count(c__5525__auto__);
var G__22286 = (0);
seq__22248 = G__22283;
chunk__22249 = G__22284;
count__22250 = G__22285;
i__22251 = G__22286;
continue;
} else {
var vec__22267 = cljs.core.first(seq__22248__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22267,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22267,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__22287 = cljs.core.next(seq__22248__$1);
var G__22288 = null;
var G__22289 = (0);
var G__22290 = (0);
seq__22248 = G__22287;
chunk__22249 = G__22288;
count__22250 = G__22289;
i__22251 = G__22290;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__22236_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__22236_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__22237_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__22237_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__22238_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__22238_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__22239_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__22239_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__22276){
var map__22277 = p__22276;
var map__22277__$1 = cljs.core.__destructure_map(map__22277);
var svc = map__22277__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22277__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22277__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
