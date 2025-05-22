goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___24421 = arguments.length;
var i__5727__auto___24422 = (0);
while(true){
if((i__5727__auto___24422 < len__5726__auto___24421)){
args__5732__auto__.push((arguments[i__5727__auto___24422]));

var G__24424 = (i__5727__auto___24422 + (1));
i__5727__auto___24422 = G__24424;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq23803){
var G__23804 = cljs.core.first(seq23803);
var seq23803__$1 = cljs.core.next(seq23803);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23804,seq23803__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__23808 = cljs.core.seq(sources);
var chunk__23809 = null;
var count__23810 = (0);
var i__23811 = (0);
while(true){
if((i__23811 < count__23810)){
var map__23818 = chunk__23809.cljs$core$IIndexed$_nth$arity$2(null, i__23811);
var map__23818__$1 = cljs.core.__destructure_map(map__23818);
var src = map__23818__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23818__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23818__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23818__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23818__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e23821){var e_24434 = e23821;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_24434);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_24434.message)].join('')));
}

var G__24435 = seq__23808;
var G__24436 = chunk__23809;
var G__24437 = count__23810;
var G__24438 = (i__23811 + (1));
seq__23808 = G__24435;
chunk__23809 = G__24436;
count__23810 = G__24437;
i__23811 = G__24438;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23808);
if(temp__5804__auto__){
var seq__23808__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23808__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__23808__$1);
var G__24439 = cljs.core.chunk_rest(seq__23808__$1);
var G__24440 = c__5525__auto__;
var G__24441 = cljs.core.count(c__5525__auto__);
var G__24442 = (0);
seq__23808 = G__24439;
chunk__23809 = G__24440;
count__23810 = G__24441;
i__23811 = G__24442;
continue;
} else {
var map__23822 = cljs.core.first(seq__23808__$1);
var map__23822__$1 = cljs.core.__destructure_map(map__23822);
var src = map__23822__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23822__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23822__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23822__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23822__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e23823){var e_24448 = e23823;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_24448);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_24448.message)].join('')));
}

var G__24449 = cljs.core.next(seq__23808__$1);
var G__24450 = null;
var G__24451 = (0);
var G__24452 = (0);
seq__23808 = G__24449;
chunk__23809 = G__24450;
count__23810 = G__24451;
i__23811 = G__24452;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (next){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null, ));
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__23824 = cljs.core.seq(js_requires);
var chunk__23825 = null;
var count__23826 = (0);
var i__23827 = (0);
while(true){
if((i__23827 < count__23826)){
var js_ns = chunk__23825.cljs$core$IIndexed$_nth$arity$2(null, i__23827);
var require_str_24458 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_24458);


var G__24459 = seq__23824;
var G__24460 = chunk__23825;
var G__24461 = count__23826;
var G__24462 = (i__23827 + (1));
seq__23824 = G__24459;
chunk__23825 = G__24460;
count__23826 = G__24461;
i__23827 = G__24462;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23824);
if(temp__5804__auto__){
var seq__23824__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23824__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__23824__$1);
var G__24467 = cljs.core.chunk_rest(seq__23824__$1);
var G__24468 = c__5525__auto__;
var G__24469 = cljs.core.count(c__5525__auto__);
var G__24470 = (0);
seq__23824 = G__24467;
chunk__23825 = G__24468;
count__23826 = G__24469;
i__23827 = G__24470;
continue;
} else {
var js_ns = cljs.core.first(seq__23824__$1);
var require_str_24472 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_24472);


var G__24473 = cljs.core.next(seq__23824__$1);
var G__24474 = null;
var G__24475 = (0);
var G__24476 = (0);
seq__23824 = G__24473;
chunk__23825 = G__24474;
count__23826 = G__24475;
i__23827 = G__24476;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__23829){
var map__23830 = p__23829;
var map__23830__$1 = cljs.core.__destructure_map(map__23830);
var msg = map__23830__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23830__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23830__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__23831(s__23832){
return (new cljs.core.LazySeq(null,(function (){
var s__23832__$1 = s__23832;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__23832__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__23837 = cljs.core.first(xs__6360__auto__);
var map__23837__$1 = cljs.core.__destructure_map(map__23837);
var src = map__23837__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23837__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23837__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__23832__$1,map__23837,map__23837__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__23830,map__23830__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__23831_$_iter__23833(s__23834){
return (new cljs.core.LazySeq(null,((function (s__23832__$1,map__23837,map__23837__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__23830,map__23830__$1,msg,info,reload_info){
return (function (){
var s__23834__$1 = s__23834;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__23834__$1);
if(temp__5804__auto____$1){
var s__23834__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__23834__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__23834__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__23836 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__23835 = (0);
while(true){
if((i__23835 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__23835);
cljs.core.chunk_append(b__23836,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__24478 = (i__23835 + (1));
i__23835 = G__24478;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23836),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__23831_$_iter__23833(cljs.core.chunk_rest(s__23834__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23836),null);
}
} else {
var warning = cljs.core.first(s__23834__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__23831_$_iter__23833(cljs.core.rest(s__23834__$2)));
}
} else {
return null;
}
break;
}
});})(s__23832__$1,map__23837,map__23837__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__23830,map__23830__$1,msg,info,reload_info))
,null,null));
});})(s__23832__$1,map__23837,map__23837__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__23830,map__23830__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__23831(cljs.core.rest(s__23832__$1)));
} else {
var G__24486 = cljs.core.rest(s__23832__$1);
s__23832__$1 = G__24486;
continue;
}
} else {
var G__24487 = cljs.core.rest(s__23832__$1);
s__23832__$1 = G__24487;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__23838_24488 = cljs.core.seq(warnings);
var chunk__23839_24489 = null;
var count__23840_24490 = (0);
var i__23841_24491 = (0);
while(true){
if((i__23841_24491 < count__23840_24490)){
var map__23845_24492 = chunk__23839_24489.cljs$core$IIndexed$_nth$arity$2(null, i__23841_24491);
var map__23845_24493__$1 = cljs.core.__destructure_map(map__23845_24492);
var w_24494 = map__23845_24493__$1;
var msg_24495__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23845_24493__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_24496 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23845_24493__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_24497 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23845_24493__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_24498 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23845_24493__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_24498)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_24496),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_24497),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_24495__$1)].join(''));


var G__24502 = seq__23838_24488;
var G__24503 = chunk__23839_24489;
var G__24504 = count__23840_24490;
var G__24505 = (i__23841_24491 + (1));
seq__23838_24488 = G__24502;
chunk__23839_24489 = G__24503;
count__23840_24490 = G__24504;
i__23841_24491 = G__24505;
continue;
} else {
var temp__5804__auto___24509 = cljs.core.seq(seq__23838_24488);
if(temp__5804__auto___24509){
var seq__23838_24510__$1 = temp__5804__auto___24509;
if(cljs.core.chunked_seq_QMARK_(seq__23838_24510__$1)){
var c__5525__auto___24511 = cljs.core.chunk_first(seq__23838_24510__$1);
var G__24512 = cljs.core.chunk_rest(seq__23838_24510__$1);
var G__24513 = c__5525__auto___24511;
var G__24514 = cljs.core.count(c__5525__auto___24511);
var G__24515 = (0);
seq__23838_24488 = G__24512;
chunk__23839_24489 = G__24513;
count__23840_24490 = G__24514;
i__23841_24491 = G__24515;
continue;
} else {
var map__23849_24523 = cljs.core.first(seq__23838_24510__$1);
var map__23849_24524__$1 = cljs.core.__destructure_map(map__23849_24523);
var w_24525 = map__23849_24524__$1;
var msg_24526__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23849_24524__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_24527 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23849_24524__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_24528 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23849_24524__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_24529 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23849_24524__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_24529)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_24527),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_24528),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_24526__$1)].join(''));


var G__24536 = cljs.core.next(seq__23838_24510__$1);
var G__24537 = null;
var G__24538 = (0);
var G__24539 = (0);
seq__23838_24488 = G__24536;
chunk__23839_24489 = G__24537;
count__23840_24490 = G__24538;
i__23841_24491 = G__24539;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__23828_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__23828_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5000__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5000__auto____$1){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__23857 = node_uri;
G__23857.setQuery(null);

G__23857.setPath(new$);

return G__23857;
})());
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__23858){
var map__23859 = p__23858;
var map__23859__$1 = cljs.core.__destructure_map(map__23859);
var msg = map__23859__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23859__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23859__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__23862 = cljs.core.seq(updates);
var chunk__23864 = null;
var count__23865 = (0);
var i__23866 = (0);
while(true){
if((i__23866 < count__23865)){
var path = chunk__23864.cljs$core$IIndexed$_nth$arity$2(null, i__23866);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__24143_24554 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__24147_24555 = null;
var count__24148_24556 = (0);
var i__24149_24557 = (0);
while(true){
if((i__24149_24557 < count__24148_24556)){
var node_24558 = chunk__24147_24555.cljs$core$IIndexed$_nth$arity$2(null, i__24149_24557);
if(cljs.core.not(node_24558.shadow$old)){
var path_match_24559 = shadow.cljs.devtools.client.browser.match_paths(node_24558.getAttribute("href"),path);
if(cljs.core.truth_(path_match_24559)){
var new_link_24560 = (function (){var G__24192 = node_24558.cloneNode(true);
G__24192.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_24559),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__24192;
})();
(node_24558.shadow$old = true);

(new_link_24560.onload = ((function (seq__24143_24554,chunk__24147_24555,count__24148_24556,i__24149_24557,seq__23862,chunk__23864,count__23865,i__23866,new_link_24560,path_match_24559,node_24558,path,map__23859,map__23859__$1,msg,updates,reload_info){
return (function (e){
var seq__24195_24561 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__24197_24562 = null;
var count__24198_24563 = (0);
var i__24199_24564 = (0);
while(true){
if((i__24199_24564 < count__24198_24563)){
var map__24204_24565 = chunk__24197_24562.cljs$core$IIndexed$_nth$arity$2(null, i__24199_24564);
var map__24204_24566__$1 = cljs.core.__destructure_map(map__24204_24565);
var task_24567 = map__24204_24566__$1;
var fn_str_24568 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24204_24566__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_24569 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24204_24566__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_24571 = goog.getObjectByName(fn_str_24568,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_24569)].join(''));

(fn_obj_24571.cljs$core$IFn$_invoke$arity$2 ? fn_obj_24571.cljs$core$IFn$_invoke$arity$2(path,new_link_24560) : fn_obj_24571.call(null, path,new_link_24560));


var G__24572 = seq__24195_24561;
var G__24573 = chunk__24197_24562;
var G__24574 = count__24198_24563;
var G__24575 = (i__24199_24564 + (1));
seq__24195_24561 = G__24572;
chunk__24197_24562 = G__24573;
count__24198_24563 = G__24574;
i__24199_24564 = G__24575;
continue;
} else {
var temp__5804__auto___24578 = cljs.core.seq(seq__24195_24561);
if(temp__5804__auto___24578){
var seq__24195_24579__$1 = temp__5804__auto___24578;
if(cljs.core.chunked_seq_QMARK_(seq__24195_24579__$1)){
var c__5525__auto___24582 = cljs.core.chunk_first(seq__24195_24579__$1);
var G__24583 = cljs.core.chunk_rest(seq__24195_24579__$1);
var G__24584 = c__5525__auto___24582;
var G__24585 = cljs.core.count(c__5525__auto___24582);
var G__24586 = (0);
seq__24195_24561 = G__24583;
chunk__24197_24562 = G__24584;
count__24198_24563 = G__24585;
i__24199_24564 = G__24586;
continue;
} else {
var map__24207_24587 = cljs.core.first(seq__24195_24579__$1);
var map__24207_24588__$1 = cljs.core.__destructure_map(map__24207_24587);
var task_24589 = map__24207_24588__$1;
var fn_str_24590 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24207_24588__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_24591 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24207_24588__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_24592 = goog.getObjectByName(fn_str_24590,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_24591)].join(''));

(fn_obj_24592.cljs$core$IFn$_invoke$arity$2 ? fn_obj_24592.cljs$core$IFn$_invoke$arity$2(path,new_link_24560) : fn_obj_24592.call(null, path,new_link_24560));


var G__24593 = cljs.core.next(seq__24195_24579__$1);
var G__24594 = null;
var G__24595 = (0);
var G__24596 = (0);
seq__24195_24561 = G__24593;
chunk__24197_24562 = G__24594;
count__24198_24563 = G__24595;
i__24199_24564 = G__24596;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_24558);
});})(seq__24143_24554,chunk__24147_24555,count__24148_24556,i__24149_24557,seq__23862,chunk__23864,count__23865,i__23866,new_link_24560,path_match_24559,node_24558,path,map__23859,map__23859__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_24559], 0));

goog.dom.insertSiblingAfter(new_link_24560,node_24558);


var G__24601 = seq__24143_24554;
var G__24602 = chunk__24147_24555;
var G__24603 = count__24148_24556;
var G__24604 = (i__24149_24557 + (1));
seq__24143_24554 = G__24601;
chunk__24147_24555 = G__24602;
count__24148_24556 = G__24603;
i__24149_24557 = G__24604;
continue;
} else {
var G__24605 = seq__24143_24554;
var G__24606 = chunk__24147_24555;
var G__24607 = count__24148_24556;
var G__24608 = (i__24149_24557 + (1));
seq__24143_24554 = G__24605;
chunk__24147_24555 = G__24606;
count__24148_24556 = G__24607;
i__24149_24557 = G__24608;
continue;
}
} else {
var G__24609 = seq__24143_24554;
var G__24610 = chunk__24147_24555;
var G__24611 = count__24148_24556;
var G__24612 = (i__24149_24557 + (1));
seq__24143_24554 = G__24609;
chunk__24147_24555 = G__24610;
count__24148_24556 = G__24611;
i__24149_24557 = G__24612;
continue;
}
} else {
var temp__5804__auto___24616 = cljs.core.seq(seq__24143_24554);
if(temp__5804__auto___24616){
var seq__24143_24617__$1 = temp__5804__auto___24616;
if(cljs.core.chunked_seq_QMARK_(seq__24143_24617__$1)){
var c__5525__auto___24618 = cljs.core.chunk_first(seq__24143_24617__$1);
var G__24619 = cljs.core.chunk_rest(seq__24143_24617__$1);
var G__24620 = c__5525__auto___24618;
var G__24621 = cljs.core.count(c__5525__auto___24618);
var G__24622 = (0);
seq__24143_24554 = G__24619;
chunk__24147_24555 = G__24620;
count__24148_24556 = G__24621;
i__24149_24557 = G__24622;
continue;
} else {
var node_24623 = cljs.core.first(seq__24143_24617__$1);
if(cljs.core.not(node_24623.shadow$old)){
var path_match_24625 = shadow.cljs.devtools.client.browser.match_paths(node_24623.getAttribute("href"),path);
if(cljs.core.truth_(path_match_24625)){
var new_link_24626 = (function (){var G__24213 = node_24623.cloneNode(true);
G__24213.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_24625),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__24213;
})();
(node_24623.shadow$old = true);

(new_link_24626.onload = ((function (seq__24143_24554,chunk__24147_24555,count__24148_24556,i__24149_24557,seq__23862,chunk__23864,count__23865,i__23866,new_link_24626,path_match_24625,node_24623,seq__24143_24617__$1,temp__5804__auto___24616,path,map__23859,map__23859__$1,msg,updates,reload_info){
return (function (e){
var seq__24220_24627 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__24222_24628 = null;
var count__24223_24629 = (0);
var i__24224_24630 = (0);
while(true){
if((i__24224_24630 < count__24223_24629)){
var map__24231_24631 = chunk__24222_24628.cljs$core$IIndexed$_nth$arity$2(null, i__24224_24630);
var map__24231_24632__$1 = cljs.core.__destructure_map(map__24231_24631);
var task_24633 = map__24231_24632__$1;
var fn_str_24634 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24231_24632__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_24635 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24231_24632__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_24636 = goog.getObjectByName(fn_str_24634,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_24635)].join(''));

(fn_obj_24636.cljs$core$IFn$_invoke$arity$2 ? fn_obj_24636.cljs$core$IFn$_invoke$arity$2(path,new_link_24626) : fn_obj_24636.call(null, path,new_link_24626));


var G__24637 = seq__24220_24627;
var G__24638 = chunk__24222_24628;
var G__24639 = count__24223_24629;
var G__24640 = (i__24224_24630 + (1));
seq__24220_24627 = G__24637;
chunk__24222_24628 = G__24638;
count__24223_24629 = G__24639;
i__24224_24630 = G__24640;
continue;
} else {
var temp__5804__auto___24641__$1 = cljs.core.seq(seq__24220_24627);
if(temp__5804__auto___24641__$1){
var seq__24220_24643__$1 = temp__5804__auto___24641__$1;
if(cljs.core.chunked_seq_QMARK_(seq__24220_24643__$1)){
var c__5525__auto___24644 = cljs.core.chunk_first(seq__24220_24643__$1);
var G__24645 = cljs.core.chunk_rest(seq__24220_24643__$1);
var G__24646 = c__5525__auto___24644;
var G__24647 = cljs.core.count(c__5525__auto___24644);
var G__24648 = (0);
seq__24220_24627 = G__24645;
chunk__24222_24628 = G__24646;
count__24223_24629 = G__24647;
i__24224_24630 = G__24648;
continue;
} else {
var map__24232_24649 = cljs.core.first(seq__24220_24643__$1);
var map__24232_24650__$1 = cljs.core.__destructure_map(map__24232_24649);
var task_24651 = map__24232_24650__$1;
var fn_str_24652 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24232_24650__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_24653 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24232_24650__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_24654 = goog.getObjectByName(fn_str_24652,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_24653)].join(''));

(fn_obj_24654.cljs$core$IFn$_invoke$arity$2 ? fn_obj_24654.cljs$core$IFn$_invoke$arity$2(path,new_link_24626) : fn_obj_24654.call(null, path,new_link_24626));


var G__24655 = cljs.core.next(seq__24220_24643__$1);
var G__24656 = null;
var G__24657 = (0);
var G__24658 = (0);
seq__24220_24627 = G__24655;
chunk__24222_24628 = G__24656;
count__24223_24629 = G__24657;
i__24224_24630 = G__24658;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_24623);
});})(seq__24143_24554,chunk__24147_24555,count__24148_24556,i__24149_24557,seq__23862,chunk__23864,count__23865,i__23866,new_link_24626,path_match_24625,node_24623,seq__24143_24617__$1,temp__5804__auto___24616,path,map__23859,map__23859__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_24625], 0));

goog.dom.insertSiblingAfter(new_link_24626,node_24623);


var G__24661 = cljs.core.next(seq__24143_24617__$1);
var G__24662 = null;
var G__24663 = (0);
var G__24664 = (0);
seq__24143_24554 = G__24661;
chunk__24147_24555 = G__24662;
count__24148_24556 = G__24663;
i__24149_24557 = G__24664;
continue;
} else {
var G__24665 = cljs.core.next(seq__24143_24617__$1);
var G__24666 = null;
var G__24667 = (0);
var G__24668 = (0);
seq__24143_24554 = G__24665;
chunk__24147_24555 = G__24666;
count__24148_24556 = G__24667;
i__24149_24557 = G__24668;
continue;
}
} else {
var G__24669 = cljs.core.next(seq__24143_24617__$1);
var G__24670 = null;
var G__24671 = (0);
var G__24672 = (0);
seq__24143_24554 = G__24669;
chunk__24147_24555 = G__24670;
count__24148_24556 = G__24671;
i__24149_24557 = G__24672;
continue;
}
}
} else {
}
}
break;
}


var G__24677 = seq__23862;
var G__24678 = chunk__23864;
var G__24679 = count__23865;
var G__24680 = (i__23866 + (1));
seq__23862 = G__24677;
chunk__23864 = G__24678;
count__23865 = G__24679;
i__23866 = G__24680;
continue;
} else {
var G__24681 = seq__23862;
var G__24682 = chunk__23864;
var G__24683 = count__23865;
var G__24684 = (i__23866 + (1));
seq__23862 = G__24681;
chunk__23864 = G__24682;
count__23865 = G__24683;
i__23866 = G__24684;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23862);
if(temp__5804__auto__){
var seq__23862__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23862__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__23862__$1);
var G__24686 = cljs.core.chunk_rest(seq__23862__$1);
var G__24687 = c__5525__auto__;
var G__24688 = cljs.core.count(c__5525__auto__);
var G__24689 = (0);
seq__23862 = G__24686;
chunk__23864 = G__24687;
count__23865 = G__24688;
i__23866 = G__24689;
continue;
} else {
var path = cljs.core.first(seq__23862__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__24241_24690 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__24245_24691 = null;
var count__24246_24692 = (0);
var i__24247_24693 = (0);
while(true){
if((i__24247_24693 < count__24246_24692)){
var node_24694 = chunk__24245_24691.cljs$core$IIndexed$_nth$arity$2(null, i__24247_24693);
if(cljs.core.not(node_24694.shadow$old)){
var path_match_24695 = shadow.cljs.devtools.client.browser.match_paths(node_24694.getAttribute("href"),path);
if(cljs.core.truth_(path_match_24695)){
var new_link_24696 = (function (){var G__24312 = node_24694.cloneNode(true);
G__24312.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_24695),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__24312;
})();
(node_24694.shadow$old = true);

(new_link_24696.onload = ((function (seq__24241_24690,chunk__24245_24691,count__24246_24692,i__24247_24693,seq__23862,chunk__23864,count__23865,i__23866,new_link_24696,path_match_24695,node_24694,path,seq__23862__$1,temp__5804__auto__,map__23859,map__23859__$1,msg,updates,reload_info){
return (function (e){
var seq__24314_24698 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__24316_24699 = null;
var count__24317_24700 = (0);
var i__24318_24701 = (0);
while(true){
if((i__24318_24701 < count__24317_24700)){
var map__24323_24702 = chunk__24316_24699.cljs$core$IIndexed$_nth$arity$2(null, i__24318_24701);
var map__24323_24703__$1 = cljs.core.__destructure_map(map__24323_24702);
var task_24704 = map__24323_24703__$1;
var fn_str_24705 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24323_24703__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_24706 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24323_24703__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_24707 = goog.getObjectByName(fn_str_24705,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_24706)].join(''));

(fn_obj_24707.cljs$core$IFn$_invoke$arity$2 ? fn_obj_24707.cljs$core$IFn$_invoke$arity$2(path,new_link_24696) : fn_obj_24707.call(null, path,new_link_24696));


var G__24708 = seq__24314_24698;
var G__24709 = chunk__24316_24699;
var G__24710 = count__24317_24700;
var G__24711 = (i__24318_24701 + (1));
seq__24314_24698 = G__24708;
chunk__24316_24699 = G__24709;
count__24317_24700 = G__24710;
i__24318_24701 = G__24711;
continue;
} else {
var temp__5804__auto___24712__$1 = cljs.core.seq(seq__24314_24698);
if(temp__5804__auto___24712__$1){
var seq__24314_24713__$1 = temp__5804__auto___24712__$1;
if(cljs.core.chunked_seq_QMARK_(seq__24314_24713__$1)){
var c__5525__auto___24714 = cljs.core.chunk_first(seq__24314_24713__$1);
var G__24715 = cljs.core.chunk_rest(seq__24314_24713__$1);
var G__24716 = c__5525__auto___24714;
var G__24717 = cljs.core.count(c__5525__auto___24714);
var G__24718 = (0);
seq__24314_24698 = G__24715;
chunk__24316_24699 = G__24716;
count__24317_24700 = G__24717;
i__24318_24701 = G__24718;
continue;
} else {
var map__24324_24719 = cljs.core.first(seq__24314_24713__$1);
var map__24324_24720__$1 = cljs.core.__destructure_map(map__24324_24719);
var task_24721 = map__24324_24720__$1;
var fn_str_24722 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24324_24720__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_24723 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24324_24720__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_24724 = goog.getObjectByName(fn_str_24722,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_24723)].join(''));

(fn_obj_24724.cljs$core$IFn$_invoke$arity$2 ? fn_obj_24724.cljs$core$IFn$_invoke$arity$2(path,new_link_24696) : fn_obj_24724.call(null, path,new_link_24696));


var G__24725 = cljs.core.next(seq__24314_24713__$1);
var G__24726 = null;
var G__24727 = (0);
var G__24728 = (0);
seq__24314_24698 = G__24725;
chunk__24316_24699 = G__24726;
count__24317_24700 = G__24727;
i__24318_24701 = G__24728;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_24694);
});})(seq__24241_24690,chunk__24245_24691,count__24246_24692,i__24247_24693,seq__23862,chunk__23864,count__23865,i__23866,new_link_24696,path_match_24695,node_24694,path,seq__23862__$1,temp__5804__auto__,map__23859,map__23859__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_24695], 0));

goog.dom.insertSiblingAfter(new_link_24696,node_24694);


var G__24729 = seq__24241_24690;
var G__24730 = chunk__24245_24691;
var G__24731 = count__24246_24692;
var G__24732 = (i__24247_24693 + (1));
seq__24241_24690 = G__24729;
chunk__24245_24691 = G__24730;
count__24246_24692 = G__24731;
i__24247_24693 = G__24732;
continue;
} else {
var G__24733 = seq__24241_24690;
var G__24734 = chunk__24245_24691;
var G__24735 = count__24246_24692;
var G__24736 = (i__24247_24693 + (1));
seq__24241_24690 = G__24733;
chunk__24245_24691 = G__24734;
count__24246_24692 = G__24735;
i__24247_24693 = G__24736;
continue;
}
} else {
var G__24737 = seq__24241_24690;
var G__24738 = chunk__24245_24691;
var G__24739 = count__24246_24692;
var G__24740 = (i__24247_24693 + (1));
seq__24241_24690 = G__24737;
chunk__24245_24691 = G__24738;
count__24246_24692 = G__24739;
i__24247_24693 = G__24740;
continue;
}
} else {
var temp__5804__auto___24742__$1 = cljs.core.seq(seq__24241_24690);
if(temp__5804__auto___24742__$1){
var seq__24241_24743__$1 = temp__5804__auto___24742__$1;
if(cljs.core.chunked_seq_QMARK_(seq__24241_24743__$1)){
var c__5525__auto___24744 = cljs.core.chunk_first(seq__24241_24743__$1);
var G__24745 = cljs.core.chunk_rest(seq__24241_24743__$1);
var G__24746 = c__5525__auto___24744;
var G__24747 = cljs.core.count(c__5525__auto___24744);
var G__24748 = (0);
seq__24241_24690 = G__24745;
chunk__24245_24691 = G__24746;
count__24246_24692 = G__24747;
i__24247_24693 = G__24748;
continue;
} else {
var node_24749 = cljs.core.first(seq__24241_24743__$1);
if(cljs.core.not(node_24749.shadow$old)){
var path_match_24750 = shadow.cljs.devtools.client.browser.match_paths(node_24749.getAttribute("href"),path);
if(cljs.core.truth_(path_match_24750)){
var new_link_24751 = (function (){var G__24325 = node_24749.cloneNode(true);
G__24325.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_24750),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__24325;
})();
(node_24749.shadow$old = true);

(new_link_24751.onload = ((function (seq__24241_24690,chunk__24245_24691,count__24246_24692,i__24247_24693,seq__23862,chunk__23864,count__23865,i__23866,new_link_24751,path_match_24750,node_24749,seq__24241_24743__$1,temp__5804__auto___24742__$1,path,seq__23862__$1,temp__5804__auto__,map__23859,map__23859__$1,msg,updates,reload_info){
return (function (e){
var seq__24326_24753 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__24328_24754 = null;
var count__24329_24755 = (0);
var i__24330_24756 = (0);
while(true){
if((i__24330_24756 < count__24329_24755)){
var map__24335_24757 = chunk__24328_24754.cljs$core$IIndexed$_nth$arity$2(null, i__24330_24756);
var map__24335_24758__$1 = cljs.core.__destructure_map(map__24335_24757);
var task_24759 = map__24335_24758__$1;
var fn_str_24760 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24335_24758__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_24761 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24335_24758__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_24762 = goog.getObjectByName(fn_str_24760,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_24761)].join(''));

(fn_obj_24762.cljs$core$IFn$_invoke$arity$2 ? fn_obj_24762.cljs$core$IFn$_invoke$arity$2(path,new_link_24751) : fn_obj_24762.call(null, path,new_link_24751));


var G__24763 = seq__24326_24753;
var G__24764 = chunk__24328_24754;
var G__24765 = count__24329_24755;
var G__24766 = (i__24330_24756 + (1));
seq__24326_24753 = G__24763;
chunk__24328_24754 = G__24764;
count__24329_24755 = G__24765;
i__24330_24756 = G__24766;
continue;
} else {
var temp__5804__auto___24767__$2 = cljs.core.seq(seq__24326_24753);
if(temp__5804__auto___24767__$2){
var seq__24326_24768__$1 = temp__5804__auto___24767__$2;
if(cljs.core.chunked_seq_QMARK_(seq__24326_24768__$1)){
var c__5525__auto___24769 = cljs.core.chunk_first(seq__24326_24768__$1);
var G__24770 = cljs.core.chunk_rest(seq__24326_24768__$1);
var G__24771 = c__5525__auto___24769;
var G__24772 = cljs.core.count(c__5525__auto___24769);
var G__24773 = (0);
seq__24326_24753 = G__24770;
chunk__24328_24754 = G__24771;
count__24329_24755 = G__24772;
i__24330_24756 = G__24773;
continue;
} else {
var map__24337_24774 = cljs.core.first(seq__24326_24768__$1);
var map__24337_24775__$1 = cljs.core.__destructure_map(map__24337_24774);
var task_24776 = map__24337_24775__$1;
var fn_str_24777 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24337_24775__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_24778 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24337_24775__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_24783 = goog.getObjectByName(fn_str_24777,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_24778)].join(''));

(fn_obj_24783.cljs$core$IFn$_invoke$arity$2 ? fn_obj_24783.cljs$core$IFn$_invoke$arity$2(path,new_link_24751) : fn_obj_24783.call(null, path,new_link_24751));


var G__24784 = cljs.core.next(seq__24326_24768__$1);
var G__24785 = null;
var G__24786 = (0);
var G__24787 = (0);
seq__24326_24753 = G__24784;
chunk__24328_24754 = G__24785;
count__24329_24755 = G__24786;
i__24330_24756 = G__24787;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_24749);
});})(seq__24241_24690,chunk__24245_24691,count__24246_24692,i__24247_24693,seq__23862,chunk__23864,count__23865,i__23866,new_link_24751,path_match_24750,node_24749,seq__24241_24743__$1,temp__5804__auto___24742__$1,path,seq__23862__$1,temp__5804__auto__,map__23859,map__23859__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_24750], 0));

goog.dom.insertSiblingAfter(new_link_24751,node_24749);


var G__24788 = cljs.core.next(seq__24241_24743__$1);
var G__24789 = null;
var G__24790 = (0);
var G__24791 = (0);
seq__24241_24690 = G__24788;
chunk__24245_24691 = G__24789;
count__24246_24692 = G__24790;
i__24247_24693 = G__24791;
continue;
} else {
var G__24792 = cljs.core.next(seq__24241_24743__$1);
var G__24793 = null;
var G__24794 = (0);
var G__24795 = (0);
seq__24241_24690 = G__24792;
chunk__24245_24691 = G__24793;
count__24246_24692 = G__24794;
i__24247_24693 = G__24795;
continue;
}
} else {
var G__24796 = cljs.core.next(seq__24241_24743__$1);
var G__24797 = null;
var G__24798 = (0);
var G__24799 = (0);
seq__24241_24690 = G__24796;
chunk__24245_24691 = G__24797;
count__24246_24692 = G__24798;
i__24247_24693 = G__24799;
continue;
}
}
} else {
}
}
break;
}


var G__24800 = cljs.core.next(seq__23862__$1);
var G__24801 = null;
var G__24802 = (0);
var G__24803 = (0);
seq__23862 = G__24800;
chunk__23864 = G__24801;
count__23865 = G__24802;
i__23866 = G__24803;
continue;
} else {
var G__24804 = cljs.core.next(seq__23862__$1);
var G__24805 = null;
var G__24806 = (0);
var G__24807 = (0);
seq__23862 = G__24804;
chunk__23864 = G__24805;
count__23865 = G__24806;
i__23866 = G__24807;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$4 = (function (this$,code,success,fail){
var this$__$1 = this;
try{var G__24348 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__24348) : success.call(null, G__24348));
}catch (e24347){var e = e24347;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null, e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__24349,success,fail){
var map__24350 = p__24349;
var map__24350__$1 = cljs.core.__destructure_map(map__24350);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24350__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__24352 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__24352) : success.call(null, G__24352));
}catch (e24351){var e = e24351;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null, e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__24354,done,error){
var map__24357 = p__24354;
var map__24357__$1 = cljs.core.__destructure_map(map__24357);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24357__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null, ));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__24360,done,error){
var map__24362 = p__24360;
var map__24362__$1 = cljs.core.__destructure_map(map__24362);
var msg = map__24362__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24362__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24362__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24362__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__24364){
var map__24365 = p__24364;
var map__24365__$1 = cljs.core.__destructure_map(map__24365);
var src = map__24365__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24365__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__24367 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__24367) : done.call(null, G__24367));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__24369){
var map__24370 = p__24369;
var map__24370__$1 = cljs.core.__destructure_map(map__24370);
var msg__$1 = map__24370__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24370__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null, sources_to_load));
}catch (e24380){var ex = e24380;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null, ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__24381){
var map__24382 = p__24381;
var map__24382__$1 = cljs.core.__destructure_map(map__24382);
var env = map__24382__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24382__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__24396){
var map__24397 = p__24396;
var map__24397__$1 = cljs.core.__destructure_map(map__24397);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24397__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24397__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__24399){
var map__24400 = p__24399;
var map__24400__$1 = cljs.core.__destructure_map(map__24400);
var svc = map__24400__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24400__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
