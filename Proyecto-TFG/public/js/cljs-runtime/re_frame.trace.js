goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__12796){
var map__12797 = p__12796;
var map__12797__$1 = cljs.core.__destructure_map(map__12797);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12797__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12797__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12797__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12797__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__5002__auto__ = child_of;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__12799_12831 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__12800_12832 = null;
var count__12801_12833 = (0);
var i__12802_12834 = (0);
while(true){
if((i__12802_12834 < count__12801_12833)){
var vec__12815_12835 = chunk__12800_12832.cljs$core$IIndexed$_nth$arity$2(null, i__12802_12834);
var k_12836 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12815_12835,(0),null);
var cb_12837 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12815_12835,(1),null);
try{var G__12819_12838 = cljs.core.deref(re_frame.trace.traces);
(cb_12837.cljs$core$IFn$_invoke$arity$1 ? cb_12837.cljs$core$IFn$_invoke$arity$1(G__12819_12838) : cb_12837.call(null, G__12819_12838));
}catch (e12818){var e_12839 = e12818;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_12836,"while storing",cljs.core.deref(re_frame.trace.traces),e_12839], 0));
}

var G__12840 = seq__12799_12831;
var G__12841 = chunk__12800_12832;
var G__12842 = count__12801_12833;
var G__12843 = (i__12802_12834 + (1));
seq__12799_12831 = G__12840;
chunk__12800_12832 = G__12841;
count__12801_12833 = G__12842;
i__12802_12834 = G__12843;
continue;
} else {
var temp__5804__auto___12844 = cljs.core.seq(seq__12799_12831);
if(temp__5804__auto___12844){
var seq__12799_12845__$1 = temp__5804__auto___12844;
if(cljs.core.chunked_seq_QMARK_(seq__12799_12845__$1)){
var c__5525__auto___12846 = cljs.core.chunk_first(seq__12799_12845__$1);
var G__12847 = cljs.core.chunk_rest(seq__12799_12845__$1);
var G__12848 = c__5525__auto___12846;
var G__12849 = cljs.core.count(c__5525__auto___12846);
var G__12850 = (0);
seq__12799_12831 = G__12847;
chunk__12800_12832 = G__12848;
count__12801_12833 = G__12849;
i__12802_12834 = G__12850;
continue;
} else {
var vec__12820_12851 = cljs.core.first(seq__12799_12845__$1);
var k_12852 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12820_12851,(0),null);
var cb_12853 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12820_12851,(1),null);
try{var G__12824_12854 = cljs.core.deref(re_frame.trace.traces);
(cb_12853.cljs$core$IFn$_invoke$arity$1 ? cb_12853.cljs$core$IFn$_invoke$arity$1(G__12824_12854) : cb_12853.call(null, G__12824_12854));
}catch (e12823){var e_12855 = e12823;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_12852,"while storing",cljs.core.deref(re_frame.trace.traces),e_12855], 0));
}

var G__12856 = cljs.core.next(seq__12799_12845__$1);
var G__12857 = null;
var G__12858 = (0);
var G__12859 = (0);
seq__12799_12831 = G__12856;
chunk__12800_12832 = G__12857;
count__12801_12833 = G__12858;
i__12802_12834 = G__12859;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null, ));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
