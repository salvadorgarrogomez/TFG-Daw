goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null, re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__13113 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__13114 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__13114);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___13201 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___13201)){
var new_db_13202 = temp__5804__auto___13201;
var fexpr__13119_13203 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__13119_13203.cljs$core$IFn$_invoke$arity$1 ? fexpr__13119_13203.cljs$core$IFn$_invoke$arity$1(new_db_13202) : fexpr__13119_13203.call(null, new_db_13202));
} else {
}

var seq__13120 = cljs.core.seq(effects_without_db);
var chunk__13121 = null;
var count__13122 = (0);
var i__13123 = (0);
while(true){
if((i__13123 < count__13122)){
var vec__13132 = chunk__13121.cljs$core$IIndexed$_nth$arity$2(null, i__13123);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13132,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13132,(1),null);
var temp__5802__auto___13204 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___13204)){
var effect_fn_13205 = temp__5802__auto___13204;
(effect_fn_13205.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13205.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13205.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__13206 = seq__13120;
var G__13207 = chunk__13121;
var G__13208 = count__13122;
var G__13209 = (i__13123 + (1));
seq__13120 = G__13206;
chunk__13121 = G__13207;
count__13122 = G__13208;
i__13123 = G__13209;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13120);
if(temp__5804__auto__){
var seq__13120__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13120__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13120__$1);
var G__13210 = cljs.core.chunk_rest(seq__13120__$1);
var G__13211 = c__5525__auto__;
var G__13212 = cljs.core.count(c__5525__auto__);
var G__13213 = (0);
seq__13120 = G__13210;
chunk__13121 = G__13211;
count__13122 = G__13212;
i__13123 = G__13213;
continue;
} else {
var vec__13135 = cljs.core.first(seq__13120__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13135,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13135,(1),null);
var temp__5802__auto___13214 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___13214)){
var effect_fn_13215 = temp__5802__auto___13214;
(effect_fn_13215.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13215.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13215.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__13216 = cljs.core.next(seq__13120__$1);
var G__13217 = null;
var G__13218 = (0);
var G__13219 = (0);
seq__13120 = G__13216;
chunk__13121 = G__13217;
count__13122 = G__13218;
i__13123 = G__13219;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__12774__auto___13220 = re_frame.interop.now();
var duration__12775__auto___13221 = (end__12774__auto___13220 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__12775__auto___13221,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__12774__auto___13220);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__13113);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___13222 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___13222)){
var new_db_13223 = temp__5804__auto___13222;
var fexpr__13139_13224 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__13139_13224.cljs$core$IFn$_invoke$arity$1 ? fexpr__13139_13224.cljs$core$IFn$_invoke$arity$1(new_db_13223) : fexpr__13139_13224.call(null, new_db_13223));
} else {
}

var seq__13142 = cljs.core.seq(effects_without_db);
var chunk__13143 = null;
var count__13144 = (0);
var i__13145 = (0);
while(true){
if((i__13145 < count__13144)){
var vec__13153 = chunk__13143.cljs$core$IIndexed$_nth$arity$2(null, i__13145);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13153,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13153,(1),null);
var temp__5802__auto___13225 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___13225)){
var effect_fn_13226 = temp__5802__auto___13225;
(effect_fn_13226.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13226.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13226.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__13227 = seq__13142;
var G__13228 = chunk__13143;
var G__13229 = count__13144;
var G__13230 = (i__13145 + (1));
seq__13142 = G__13227;
chunk__13143 = G__13228;
count__13144 = G__13229;
i__13145 = G__13230;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13142);
if(temp__5804__auto__){
var seq__13142__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13142__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13142__$1);
var G__13231 = cljs.core.chunk_rest(seq__13142__$1);
var G__13232 = c__5525__auto__;
var G__13233 = cljs.core.count(c__5525__auto__);
var G__13234 = (0);
seq__13142 = G__13231;
chunk__13143 = G__13232;
count__13144 = G__13233;
i__13145 = G__13234;
continue;
} else {
var vec__13156 = cljs.core.first(seq__13142__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13156,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13156,(1),null);
var temp__5802__auto___13235 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___13235)){
var effect_fn_13236 = temp__5802__auto___13235;
(effect_fn_13236.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13236.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13236.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__13237 = cljs.core.next(seq__13142__$1);
var G__13238 = null;
var G__13239 = (0);
var G__13240 = (0);
seq__13142 = G__13237;
chunk__13143 = G__13238;
count__13144 = G__13239;
i__13145 = G__13240;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__13167){
var map__13168 = p__13167;
var map__13168__$1 = cljs.core.__destructure_map(map__13168);
var effect = map__13168__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13168__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13168__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__13173 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__13174 = null;
var count__13175 = (0);
var i__13176 = (0);
while(true){
if((i__13176 < count__13175)){
var effect = chunk__13174.cljs$core$IIndexed$_nth$arity$2(null, i__13176);
re_frame.fx.dispatch_later(effect);


var G__13243 = seq__13173;
var G__13244 = chunk__13174;
var G__13245 = count__13175;
var G__13246 = (i__13176 + (1));
seq__13173 = G__13243;
chunk__13174 = G__13244;
count__13175 = G__13245;
i__13176 = G__13246;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13173);
if(temp__5804__auto__){
var seq__13173__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13173__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13173__$1);
var G__13247 = cljs.core.chunk_rest(seq__13173__$1);
var G__13248 = c__5525__auto__;
var G__13249 = cljs.core.count(c__5525__auto__);
var G__13250 = (0);
seq__13173 = G__13247;
chunk__13174 = G__13248;
count__13175 = G__13249;
i__13176 = G__13250;
continue;
} else {
var effect = cljs.core.first(seq__13173__$1);
re_frame.fx.dispatch_later(effect);


var G__13251 = cljs.core.next(seq__13173__$1);
var G__13252 = null;
var G__13253 = (0);
var G__13254 = (0);
seq__13173 = G__13251;
chunk__13174 = G__13252;
count__13175 = G__13253;
i__13176 = G__13254;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__13177 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__13178 = null;
var count__13179 = (0);
var i__13180 = (0);
while(true){
if((i__13180 < count__13179)){
var vec__13187 = chunk__13178.cljs$core$IIndexed$_nth$arity$2(null, i__13180);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13187,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13187,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___13255 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___13255)){
var effect_fn_13256 = temp__5802__auto___13255;
(effect_fn_13256.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13256.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13256.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__13257 = seq__13177;
var G__13258 = chunk__13178;
var G__13259 = count__13179;
var G__13260 = (i__13180 + (1));
seq__13177 = G__13257;
chunk__13178 = G__13258;
count__13179 = G__13259;
i__13180 = G__13260;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13177);
if(temp__5804__auto__){
var seq__13177__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13177__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13177__$1);
var G__13262 = cljs.core.chunk_rest(seq__13177__$1);
var G__13263 = c__5525__auto__;
var G__13264 = cljs.core.count(c__5525__auto__);
var G__13265 = (0);
seq__13177 = G__13262;
chunk__13178 = G__13263;
count__13179 = G__13264;
i__13180 = G__13265;
continue;
} else {
var vec__13190 = cljs.core.first(seq__13177__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13190,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13190,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___13267 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___13267)){
var effect_fn_13268 = temp__5802__auto___13267;
(effect_fn_13268.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13268.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13268.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__13269 = cljs.core.next(seq__13177__$1);
var G__13270 = null;
var G__13271 = (0);
var G__13272 = (0);
seq__13177 = G__13269;
chunk__13178 = G__13270;
count__13179 = G__13271;
i__13180 = G__13272;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__13193 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__13194 = null;
var count__13195 = (0);
var i__13196 = (0);
while(true){
if((i__13196 < count__13195)){
var event = chunk__13194.cljs$core$IIndexed$_nth$arity$2(null, i__13196);
re_frame.router.dispatch(event);


var G__13273 = seq__13193;
var G__13274 = chunk__13194;
var G__13275 = count__13195;
var G__13276 = (i__13196 + (1));
seq__13193 = G__13273;
chunk__13194 = G__13274;
count__13195 = G__13275;
i__13196 = G__13276;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13193);
if(temp__5804__auto__){
var seq__13193__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13193__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13193__$1);
var G__13277 = cljs.core.chunk_rest(seq__13193__$1);
var G__13278 = c__5525__auto__;
var G__13279 = cljs.core.count(c__5525__auto__);
var G__13280 = (0);
seq__13193 = G__13277;
chunk__13194 = G__13278;
count__13195 = G__13279;
i__13196 = G__13280;
continue;
} else {
var event = cljs.core.first(seq__13193__$1);
re_frame.router.dispatch(event);


var G__13282 = cljs.core.next(seq__13193__$1);
var G__13283 = null;
var G__13284 = (0);
var G__13285 = (0);
seq__13193 = G__13282;
chunk__13194 = G__13283;
count__13195 = G__13284;
i__13196 = G__13285;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__13197 = cljs.core.seq(value);
var chunk__13198 = null;
var count__13199 = (0);
var i__13200 = (0);
while(true){
if((i__13200 < count__13199)){
var event = chunk__13198.cljs$core$IIndexed$_nth$arity$2(null, i__13200);
clear_event(event);


var G__13287 = seq__13197;
var G__13288 = chunk__13198;
var G__13289 = count__13199;
var G__13290 = (i__13200 + (1));
seq__13197 = G__13287;
chunk__13198 = G__13288;
count__13199 = G__13289;
i__13200 = G__13290;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13197);
if(temp__5804__auto__){
var seq__13197__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13197__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13197__$1);
var G__13291 = cljs.core.chunk_rest(seq__13197__$1);
var G__13292 = c__5525__auto__;
var G__13293 = cljs.core.count(c__5525__auto__);
var G__13294 = (0);
seq__13197 = G__13291;
chunk__13198 = G__13292;
count__13199 = G__13293;
i__13200 = G__13294;
continue;
} else {
var event = cljs.core.first(seq__13197__$1);
clear_event(event);


var G__13295 = cljs.core.next(seq__13197__$1);
var G__13296 = null;
var G__13297 = (0);
var G__13298 = (0);
seq__13197 = G__13295;
chunk__13198 = G__13296;
count__13199 = G__13297;
i__13200 = G__13298;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
