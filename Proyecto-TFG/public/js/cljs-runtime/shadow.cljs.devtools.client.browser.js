goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___23320 = arguments.length;
var i__5727__auto___23321 = (0);
while(true){
if((i__5727__auto___23321 < len__5726__auto___23320)){
args__5732__auto__.push((arguments[i__5727__auto___23321]));

var G__23322 = (i__5727__auto___23321 + (1));
i__5727__auto___23321 = G__23322;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq22735){
var G__22737 = cljs.core.first(seq22735);
var seq22735__$1 = cljs.core.next(seq22735);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22737,seq22735__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__22742 = cljs.core.seq(sources);
var chunk__22743 = null;
var count__22744 = (0);
var i__22745 = (0);
while(true){
if((i__22745 < count__22744)){
var map__22760 = chunk__22743.cljs$core$IIndexed$_nth$arity$2(null, i__22745);
var map__22760__$1 = cljs.core.__destructure_map(map__22760);
var src = map__22760__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22760__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22760__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22760__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22760__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e22761){var e_23330 = e22761;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_23330);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_23330.message)].join('')));
}

var G__23331 = seq__22742;
var G__23332 = chunk__22743;
var G__23333 = count__22744;
var G__23334 = (i__22745 + (1));
seq__22742 = G__23331;
chunk__22743 = G__23332;
count__22744 = G__23333;
i__22745 = G__23334;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22742);
if(temp__5804__auto__){
var seq__22742__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22742__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__22742__$1);
var G__23335 = cljs.core.chunk_rest(seq__22742__$1);
var G__23336 = c__5525__auto__;
var G__23337 = cljs.core.count(c__5525__auto__);
var G__23338 = (0);
seq__22742 = G__23335;
chunk__22743 = G__23336;
count__22744 = G__23337;
i__22745 = G__23338;
continue;
} else {
var map__22762 = cljs.core.first(seq__22742__$1);
var map__22762__$1 = cljs.core.__destructure_map(map__22762);
var src = map__22762__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22762__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22762__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22762__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22762__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e22764){var e_23339 = e22764;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_23339);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_23339.message)].join('')));
}

var G__23340 = cljs.core.next(seq__22742__$1);
var G__23341 = null;
var G__23342 = (0);
var G__23343 = (0);
seq__22742 = G__23340;
chunk__22743 = G__23341;
count__22744 = G__23342;
i__22745 = G__23343;
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
var seq__22767 = cljs.core.seq(js_requires);
var chunk__22768 = null;
var count__22769 = (0);
var i__22770 = (0);
while(true){
if((i__22770 < count__22769)){
var js_ns = chunk__22768.cljs$core$IIndexed$_nth$arity$2(null, i__22770);
var require_str_23344 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_23344);


var G__23345 = seq__22767;
var G__23346 = chunk__22768;
var G__23347 = count__22769;
var G__23348 = (i__22770 + (1));
seq__22767 = G__23345;
chunk__22768 = G__23346;
count__22769 = G__23347;
i__22770 = G__23348;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22767);
if(temp__5804__auto__){
var seq__22767__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22767__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__22767__$1);
var G__23350 = cljs.core.chunk_rest(seq__22767__$1);
var G__23351 = c__5525__auto__;
var G__23352 = cljs.core.count(c__5525__auto__);
var G__23353 = (0);
seq__22767 = G__23350;
chunk__22768 = G__23351;
count__22769 = G__23352;
i__22770 = G__23353;
continue;
} else {
var js_ns = cljs.core.first(seq__22767__$1);
var require_str_23354 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_23354);


var G__23355 = cljs.core.next(seq__22767__$1);
var G__23356 = null;
var G__23357 = (0);
var G__23358 = (0);
seq__22767 = G__23355;
chunk__22768 = G__23356;
count__22769 = G__23357;
i__22770 = G__23358;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__22772){
var map__22773 = p__22772;
var map__22773__$1 = cljs.core.__destructure_map(map__22773);
var msg = map__22773__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22773__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22773__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22774(s__22775){
return (new cljs.core.LazySeq(null,(function (){
var s__22775__$1 = s__22775;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__22775__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__22780 = cljs.core.first(xs__6360__auto__);
var map__22780__$1 = cljs.core.__destructure_map(map__22780);
var src = map__22780__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22780__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22780__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__22775__$1,map__22780,map__22780__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22773,map__22773__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22774_$_iter__22776(s__22777){
return (new cljs.core.LazySeq(null,((function (s__22775__$1,map__22780,map__22780__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22773,map__22773__$1,msg,info,reload_info){
return (function (){
var s__22777__$1 = s__22777;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__22777__$1);
if(temp__5804__auto____$1){
var s__22777__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__22777__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22777__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22779 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22778 = (0);
while(true){
if((i__22778 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__22778);
cljs.core.chunk_append(b__22779,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__23361 = (i__22778 + (1));
i__22778 = G__23361;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22779),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22774_$_iter__22776(cljs.core.chunk_rest(s__22777__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22779),null);
}
} else {
var warning = cljs.core.first(s__22777__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22774_$_iter__22776(cljs.core.rest(s__22777__$2)));
}
} else {
return null;
}
break;
}
});})(s__22775__$1,map__22780,map__22780__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22773,map__22773__$1,msg,info,reload_info))
,null,null));
});})(s__22775__$1,map__22780,map__22780__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22773,map__22773__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22774(cljs.core.rest(s__22775__$1)));
} else {
var G__23362 = cljs.core.rest(s__22775__$1);
s__22775__$1 = G__23362;
continue;
}
} else {
var G__23363 = cljs.core.rest(s__22775__$1);
s__22775__$1 = G__23363;
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
var seq__22781_23364 = cljs.core.seq(warnings);
var chunk__22782_23365 = null;
var count__22783_23366 = (0);
var i__22784_23367 = (0);
while(true){
if((i__22784_23367 < count__22783_23366)){
var map__22789_23368 = chunk__22782_23365.cljs$core$IIndexed$_nth$arity$2(null, i__22784_23367);
var map__22789_23369__$1 = cljs.core.__destructure_map(map__22789_23368);
var w_23370 = map__22789_23369__$1;
var msg_23371__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22789_23369__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_23372 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22789_23369__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_23373 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22789_23369__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_23374 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22789_23369__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_23374)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_23372),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_23373),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_23371__$1)].join(''));


var G__23376 = seq__22781_23364;
var G__23377 = chunk__22782_23365;
var G__23378 = count__22783_23366;
var G__23379 = (i__22784_23367 + (1));
seq__22781_23364 = G__23376;
chunk__22782_23365 = G__23377;
count__22783_23366 = G__23378;
i__22784_23367 = G__23379;
continue;
} else {
var temp__5804__auto___23383 = cljs.core.seq(seq__22781_23364);
if(temp__5804__auto___23383){
var seq__22781_23384__$1 = temp__5804__auto___23383;
if(cljs.core.chunked_seq_QMARK_(seq__22781_23384__$1)){
var c__5525__auto___23385 = cljs.core.chunk_first(seq__22781_23384__$1);
var G__23386 = cljs.core.chunk_rest(seq__22781_23384__$1);
var G__23387 = c__5525__auto___23385;
var G__23388 = cljs.core.count(c__5525__auto___23385);
var G__23389 = (0);
seq__22781_23364 = G__23386;
chunk__22782_23365 = G__23387;
count__22783_23366 = G__23388;
i__22784_23367 = G__23389;
continue;
} else {
var map__22794_23390 = cljs.core.first(seq__22781_23384__$1);
var map__22794_23391__$1 = cljs.core.__destructure_map(map__22794_23390);
var w_23392 = map__22794_23391__$1;
var msg_23393__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22794_23391__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_23394 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22794_23391__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_23395 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22794_23391__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_23396 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22794_23391__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_23396)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_23394),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_23395),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_23393__$1)].join(''));


var G__23397 = cljs.core.next(seq__22781_23384__$1);
var G__23398 = null;
var G__23399 = (0);
var G__23400 = (0);
seq__22781_23364 = G__23397;
chunk__22782_23365 = G__23398;
count__22783_23366 = G__23399;
i__22784_23367 = G__23400;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__22771_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__22771_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__22800 = node_uri;
G__22800.setQuery(null);

G__22800.setPath(new$);

return G__22800;
})());
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__22802){
var map__22803 = p__22802;
var map__22803__$1 = cljs.core.__destructure_map(map__22803);
var msg = map__22803__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22803__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22803__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__22804 = cljs.core.seq(updates);
var chunk__22806 = null;
var count__22807 = (0);
var i__22808 = (0);
while(true){
if((i__22808 < count__22807)){
var path = chunk__22806.cljs$core$IIndexed$_nth$arity$2(null, i__22808);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__22993_23403 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__22997_23404 = null;
var count__22998_23405 = (0);
var i__22999_23406 = (0);
while(true){
if((i__22999_23406 < count__22998_23405)){
var node_23407 = chunk__22997_23404.cljs$core$IIndexed$_nth$arity$2(null, i__22999_23406);
if(cljs.core.not(node_23407.shadow$old)){
var path_match_23408 = shadow.cljs.devtools.client.browser.match_paths(node_23407.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23408)){
var new_link_23410 = (function (){var G__23125 = node_23407.cloneNode(true);
G__23125.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23408),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__23125;
})();
(node_23407.shadow$old = true);

(new_link_23410.onload = ((function (seq__22993_23403,chunk__22997_23404,count__22998_23405,i__22999_23406,seq__22804,chunk__22806,count__22807,i__22808,new_link_23410,path_match_23408,node_23407,path,map__22803,map__22803__$1,msg,updates,reload_info){
return (function (e){
var seq__23128_23411 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__23130_23412 = null;
var count__23131_23413 = (0);
var i__23132_23414 = (0);
while(true){
if((i__23132_23414 < count__23131_23413)){
var map__23141_23415 = chunk__23130_23412.cljs$core$IIndexed$_nth$arity$2(null, i__23132_23414);
var map__23141_23416__$1 = cljs.core.__destructure_map(map__23141_23415);
var task_23417 = map__23141_23416__$1;
var fn_str_23418 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23141_23416__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23419 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23141_23416__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23420 = goog.getObjectByName(fn_str_23418,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23419)].join(''));

(fn_obj_23420.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23420.cljs$core$IFn$_invoke$arity$2(path,new_link_23410) : fn_obj_23420.call(null, path,new_link_23410));


var G__23421 = seq__23128_23411;
var G__23422 = chunk__23130_23412;
var G__23423 = count__23131_23413;
var G__23424 = (i__23132_23414 + (1));
seq__23128_23411 = G__23421;
chunk__23130_23412 = G__23422;
count__23131_23413 = G__23423;
i__23132_23414 = G__23424;
continue;
} else {
var temp__5804__auto___23425 = cljs.core.seq(seq__23128_23411);
if(temp__5804__auto___23425){
var seq__23128_23426__$1 = temp__5804__auto___23425;
if(cljs.core.chunked_seq_QMARK_(seq__23128_23426__$1)){
var c__5525__auto___23427 = cljs.core.chunk_first(seq__23128_23426__$1);
var G__23428 = cljs.core.chunk_rest(seq__23128_23426__$1);
var G__23429 = c__5525__auto___23427;
var G__23430 = cljs.core.count(c__5525__auto___23427);
var G__23431 = (0);
seq__23128_23411 = G__23428;
chunk__23130_23412 = G__23429;
count__23131_23413 = G__23430;
i__23132_23414 = G__23431;
continue;
} else {
var map__23145_23432 = cljs.core.first(seq__23128_23426__$1);
var map__23145_23433__$1 = cljs.core.__destructure_map(map__23145_23432);
var task_23434 = map__23145_23433__$1;
var fn_str_23435 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23145_23433__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23436 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23145_23433__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23440 = goog.getObjectByName(fn_str_23435,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23436)].join(''));

(fn_obj_23440.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23440.cljs$core$IFn$_invoke$arity$2(path,new_link_23410) : fn_obj_23440.call(null, path,new_link_23410));


var G__23441 = cljs.core.next(seq__23128_23426__$1);
var G__23442 = null;
var G__23443 = (0);
var G__23444 = (0);
seq__23128_23411 = G__23441;
chunk__23130_23412 = G__23442;
count__23131_23413 = G__23443;
i__23132_23414 = G__23444;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23407);
});})(seq__22993_23403,chunk__22997_23404,count__22998_23405,i__22999_23406,seq__22804,chunk__22806,count__22807,i__22808,new_link_23410,path_match_23408,node_23407,path,map__22803,map__22803__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23408], 0));

goog.dom.insertSiblingAfter(new_link_23410,node_23407);


var G__23445 = seq__22993_23403;
var G__23446 = chunk__22997_23404;
var G__23447 = count__22998_23405;
var G__23448 = (i__22999_23406 + (1));
seq__22993_23403 = G__23445;
chunk__22997_23404 = G__23446;
count__22998_23405 = G__23447;
i__22999_23406 = G__23448;
continue;
} else {
var G__23449 = seq__22993_23403;
var G__23450 = chunk__22997_23404;
var G__23451 = count__22998_23405;
var G__23452 = (i__22999_23406 + (1));
seq__22993_23403 = G__23449;
chunk__22997_23404 = G__23450;
count__22998_23405 = G__23451;
i__22999_23406 = G__23452;
continue;
}
} else {
var G__23453 = seq__22993_23403;
var G__23454 = chunk__22997_23404;
var G__23455 = count__22998_23405;
var G__23456 = (i__22999_23406 + (1));
seq__22993_23403 = G__23453;
chunk__22997_23404 = G__23454;
count__22998_23405 = G__23455;
i__22999_23406 = G__23456;
continue;
}
} else {
var temp__5804__auto___23457 = cljs.core.seq(seq__22993_23403);
if(temp__5804__auto___23457){
var seq__22993_23458__$1 = temp__5804__auto___23457;
if(cljs.core.chunked_seq_QMARK_(seq__22993_23458__$1)){
var c__5525__auto___23459 = cljs.core.chunk_first(seq__22993_23458__$1);
var G__23460 = cljs.core.chunk_rest(seq__22993_23458__$1);
var G__23461 = c__5525__auto___23459;
var G__23462 = cljs.core.count(c__5525__auto___23459);
var G__23463 = (0);
seq__22993_23403 = G__23460;
chunk__22997_23404 = G__23461;
count__22998_23405 = G__23462;
i__22999_23406 = G__23463;
continue;
} else {
var node_23464 = cljs.core.first(seq__22993_23458__$1);
if(cljs.core.not(node_23464.shadow$old)){
var path_match_23465 = shadow.cljs.devtools.client.browser.match_paths(node_23464.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23465)){
var new_link_23466 = (function (){var G__23148 = node_23464.cloneNode(true);
G__23148.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23465),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__23148;
})();
(node_23464.shadow$old = true);

(new_link_23466.onload = ((function (seq__22993_23403,chunk__22997_23404,count__22998_23405,i__22999_23406,seq__22804,chunk__22806,count__22807,i__22808,new_link_23466,path_match_23465,node_23464,seq__22993_23458__$1,temp__5804__auto___23457,path,map__22803,map__22803__$1,msg,updates,reload_info){
return (function (e){
var seq__23149_23467 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__23151_23468 = null;
var count__23152_23469 = (0);
var i__23153_23470 = (0);
while(true){
if((i__23153_23470 < count__23152_23469)){
var map__23160_23474 = chunk__23151_23468.cljs$core$IIndexed$_nth$arity$2(null, i__23153_23470);
var map__23160_23475__$1 = cljs.core.__destructure_map(map__23160_23474);
var task_23476 = map__23160_23475__$1;
var fn_str_23477 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23160_23475__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23478 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23160_23475__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23479 = goog.getObjectByName(fn_str_23477,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23478)].join(''));

(fn_obj_23479.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23479.cljs$core$IFn$_invoke$arity$2(path,new_link_23466) : fn_obj_23479.call(null, path,new_link_23466));


var G__23480 = seq__23149_23467;
var G__23482 = chunk__23151_23468;
var G__23483 = count__23152_23469;
var G__23484 = (i__23153_23470 + (1));
seq__23149_23467 = G__23480;
chunk__23151_23468 = G__23482;
count__23152_23469 = G__23483;
i__23153_23470 = G__23484;
continue;
} else {
var temp__5804__auto___23485__$1 = cljs.core.seq(seq__23149_23467);
if(temp__5804__auto___23485__$1){
var seq__23149_23486__$1 = temp__5804__auto___23485__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23149_23486__$1)){
var c__5525__auto___23487 = cljs.core.chunk_first(seq__23149_23486__$1);
var G__23488 = cljs.core.chunk_rest(seq__23149_23486__$1);
var G__23489 = c__5525__auto___23487;
var G__23490 = cljs.core.count(c__5525__auto___23487);
var G__23491 = (0);
seq__23149_23467 = G__23488;
chunk__23151_23468 = G__23489;
count__23152_23469 = G__23490;
i__23153_23470 = G__23491;
continue;
} else {
var map__23164_23492 = cljs.core.first(seq__23149_23486__$1);
var map__23164_23493__$1 = cljs.core.__destructure_map(map__23164_23492);
var task_23494 = map__23164_23493__$1;
var fn_str_23495 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23164_23493__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23496 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23164_23493__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23497 = goog.getObjectByName(fn_str_23495,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23496)].join(''));

(fn_obj_23497.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23497.cljs$core$IFn$_invoke$arity$2(path,new_link_23466) : fn_obj_23497.call(null, path,new_link_23466));


var G__23498 = cljs.core.next(seq__23149_23486__$1);
var G__23499 = null;
var G__23500 = (0);
var G__23501 = (0);
seq__23149_23467 = G__23498;
chunk__23151_23468 = G__23499;
count__23152_23469 = G__23500;
i__23153_23470 = G__23501;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23464);
});})(seq__22993_23403,chunk__22997_23404,count__22998_23405,i__22999_23406,seq__22804,chunk__22806,count__22807,i__22808,new_link_23466,path_match_23465,node_23464,seq__22993_23458__$1,temp__5804__auto___23457,path,map__22803,map__22803__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23465], 0));

goog.dom.insertSiblingAfter(new_link_23466,node_23464);


var G__23502 = cljs.core.next(seq__22993_23458__$1);
var G__23503 = null;
var G__23504 = (0);
var G__23505 = (0);
seq__22993_23403 = G__23502;
chunk__22997_23404 = G__23503;
count__22998_23405 = G__23504;
i__22999_23406 = G__23505;
continue;
} else {
var G__23506 = cljs.core.next(seq__22993_23458__$1);
var G__23507 = null;
var G__23508 = (0);
var G__23509 = (0);
seq__22993_23403 = G__23506;
chunk__22997_23404 = G__23507;
count__22998_23405 = G__23508;
i__22999_23406 = G__23509;
continue;
}
} else {
var G__23510 = cljs.core.next(seq__22993_23458__$1);
var G__23511 = null;
var G__23512 = (0);
var G__23513 = (0);
seq__22993_23403 = G__23510;
chunk__22997_23404 = G__23511;
count__22998_23405 = G__23512;
i__22999_23406 = G__23513;
continue;
}
}
} else {
}
}
break;
}


var G__23514 = seq__22804;
var G__23515 = chunk__22806;
var G__23516 = count__22807;
var G__23517 = (i__22808 + (1));
seq__22804 = G__23514;
chunk__22806 = G__23515;
count__22807 = G__23516;
i__22808 = G__23517;
continue;
} else {
var G__23518 = seq__22804;
var G__23519 = chunk__22806;
var G__23520 = count__22807;
var G__23521 = (i__22808 + (1));
seq__22804 = G__23518;
chunk__22806 = G__23519;
count__22807 = G__23520;
i__22808 = G__23521;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22804);
if(temp__5804__auto__){
var seq__22804__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22804__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__22804__$1);
var G__23522 = cljs.core.chunk_rest(seq__22804__$1);
var G__23523 = c__5525__auto__;
var G__23524 = cljs.core.count(c__5525__auto__);
var G__23525 = (0);
seq__22804 = G__23522;
chunk__22806 = G__23523;
count__22807 = G__23524;
i__22808 = G__23525;
continue;
} else {
var path = cljs.core.first(seq__22804__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__23165_23526 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__23169_23527 = null;
var count__23170_23528 = (0);
var i__23171_23529 = (0);
while(true){
if((i__23171_23529 < count__23170_23528)){
var node_23530 = chunk__23169_23527.cljs$core$IIndexed$_nth$arity$2(null, i__23171_23529);
if(cljs.core.not(node_23530.shadow$old)){
var path_match_23531 = shadow.cljs.devtools.client.browser.match_paths(node_23530.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23531)){
var new_link_23532 = (function (){var G__23221 = node_23530.cloneNode(true);
G__23221.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23531),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__23221;
})();
(node_23530.shadow$old = true);

(new_link_23532.onload = ((function (seq__23165_23526,chunk__23169_23527,count__23170_23528,i__23171_23529,seq__22804,chunk__22806,count__22807,i__22808,new_link_23532,path_match_23531,node_23530,path,seq__22804__$1,temp__5804__auto__,map__22803,map__22803__$1,msg,updates,reload_info){
return (function (e){
var seq__23224_23533 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__23226_23534 = null;
var count__23227_23535 = (0);
var i__23228_23536 = (0);
while(true){
if((i__23228_23536 < count__23227_23535)){
var map__23235_23537 = chunk__23226_23534.cljs$core$IIndexed$_nth$arity$2(null, i__23228_23536);
var map__23235_23538__$1 = cljs.core.__destructure_map(map__23235_23537);
var task_23539 = map__23235_23538__$1;
var fn_str_23540 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23235_23538__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23541 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23235_23538__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23542 = goog.getObjectByName(fn_str_23540,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23541)].join(''));

(fn_obj_23542.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23542.cljs$core$IFn$_invoke$arity$2(path,new_link_23532) : fn_obj_23542.call(null, path,new_link_23532));


var G__23543 = seq__23224_23533;
var G__23544 = chunk__23226_23534;
var G__23545 = count__23227_23535;
var G__23546 = (i__23228_23536 + (1));
seq__23224_23533 = G__23543;
chunk__23226_23534 = G__23544;
count__23227_23535 = G__23545;
i__23228_23536 = G__23546;
continue;
} else {
var temp__5804__auto___23547__$1 = cljs.core.seq(seq__23224_23533);
if(temp__5804__auto___23547__$1){
var seq__23224_23548__$1 = temp__5804__auto___23547__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23224_23548__$1)){
var c__5525__auto___23549 = cljs.core.chunk_first(seq__23224_23548__$1);
var G__23550 = cljs.core.chunk_rest(seq__23224_23548__$1);
var G__23551 = c__5525__auto___23549;
var G__23552 = cljs.core.count(c__5525__auto___23549);
var G__23553 = (0);
seq__23224_23533 = G__23550;
chunk__23226_23534 = G__23551;
count__23227_23535 = G__23552;
i__23228_23536 = G__23553;
continue;
} else {
var map__23238_23554 = cljs.core.first(seq__23224_23548__$1);
var map__23238_23555__$1 = cljs.core.__destructure_map(map__23238_23554);
var task_23556 = map__23238_23555__$1;
var fn_str_23557 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23238_23555__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23558 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23238_23555__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23559 = goog.getObjectByName(fn_str_23557,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23558)].join(''));

(fn_obj_23559.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23559.cljs$core$IFn$_invoke$arity$2(path,new_link_23532) : fn_obj_23559.call(null, path,new_link_23532));


var G__23560 = cljs.core.next(seq__23224_23548__$1);
var G__23561 = null;
var G__23562 = (0);
var G__23563 = (0);
seq__23224_23533 = G__23560;
chunk__23226_23534 = G__23561;
count__23227_23535 = G__23562;
i__23228_23536 = G__23563;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23530);
});})(seq__23165_23526,chunk__23169_23527,count__23170_23528,i__23171_23529,seq__22804,chunk__22806,count__22807,i__22808,new_link_23532,path_match_23531,node_23530,path,seq__22804__$1,temp__5804__auto__,map__22803,map__22803__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23531], 0));

goog.dom.insertSiblingAfter(new_link_23532,node_23530);


var G__23564 = seq__23165_23526;
var G__23565 = chunk__23169_23527;
var G__23566 = count__23170_23528;
var G__23567 = (i__23171_23529 + (1));
seq__23165_23526 = G__23564;
chunk__23169_23527 = G__23565;
count__23170_23528 = G__23566;
i__23171_23529 = G__23567;
continue;
} else {
var G__23568 = seq__23165_23526;
var G__23569 = chunk__23169_23527;
var G__23570 = count__23170_23528;
var G__23571 = (i__23171_23529 + (1));
seq__23165_23526 = G__23568;
chunk__23169_23527 = G__23569;
count__23170_23528 = G__23570;
i__23171_23529 = G__23571;
continue;
}
} else {
var G__23572 = seq__23165_23526;
var G__23573 = chunk__23169_23527;
var G__23574 = count__23170_23528;
var G__23575 = (i__23171_23529 + (1));
seq__23165_23526 = G__23572;
chunk__23169_23527 = G__23573;
count__23170_23528 = G__23574;
i__23171_23529 = G__23575;
continue;
}
} else {
var temp__5804__auto___23576__$1 = cljs.core.seq(seq__23165_23526);
if(temp__5804__auto___23576__$1){
var seq__23165_23577__$1 = temp__5804__auto___23576__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23165_23577__$1)){
var c__5525__auto___23578 = cljs.core.chunk_first(seq__23165_23577__$1);
var G__23579 = cljs.core.chunk_rest(seq__23165_23577__$1);
var G__23580 = c__5525__auto___23578;
var G__23581 = cljs.core.count(c__5525__auto___23578);
var G__23582 = (0);
seq__23165_23526 = G__23579;
chunk__23169_23527 = G__23580;
count__23170_23528 = G__23581;
i__23171_23529 = G__23582;
continue;
} else {
var node_23583 = cljs.core.first(seq__23165_23577__$1);
if(cljs.core.not(node_23583.shadow$old)){
var path_match_23584 = shadow.cljs.devtools.client.browser.match_paths(node_23583.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23584)){
var new_link_23585 = (function (){var G__23248 = node_23583.cloneNode(true);
G__23248.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23584),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__23248;
})();
(node_23583.shadow$old = true);

(new_link_23585.onload = ((function (seq__23165_23526,chunk__23169_23527,count__23170_23528,i__23171_23529,seq__22804,chunk__22806,count__22807,i__22808,new_link_23585,path_match_23584,node_23583,seq__23165_23577__$1,temp__5804__auto___23576__$1,path,seq__22804__$1,temp__5804__auto__,map__22803,map__22803__$1,msg,updates,reload_info){
return (function (e){
var seq__23250_23586 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__23252_23587 = null;
var count__23253_23588 = (0);
var i__23254_23589 = (0);
while(true){
if((i__23254_23589 < count__23253_23588)){
var map__23264_23590 = chunk__23252_23587.cljs$core$IIndexed$_nth$arity$2(null, i__23254_23589);
var map__23264_23591__$1 = cljs.core.__destructure_map(map__23264_23590);
var task_23592 = map__23264_23591__$1;
var fn_str_23593 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23264_23591__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23594 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23264_23591__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23595 = goog.getObjectByName(fn_str_23593,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23594)].join(''));

(fn_obj_23595.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23595.cljs$core$IFn$_invoke$arity$2(path,new_link_23585) : fn_obj_23595.call(null, path,new_link_23585));


var G__23596 = seq__23250_23586;
var G__23597 = chunk__23252_23587;
var G__23598 = count__23253_23588;
var G__23599 = (i__23254_23589 + (1));
seq__23250_23586 = G__23596;
chunk__23252_23587 = G__23597;
count__23253_23588 = G__23598;
i__23254_23589 = G__23599;
continue;
} else {
var temp__5804__auto___23600__$2 = cljs.core.seq(seq__23250_23586);
if(temp__5804__auto___23600__$2){
var seq__23250_23601__$1 = temp__5804__auto___23600__$2;
if(cljs.core.chunked_seq_QMARK_(seq__23250_23601__$1)){
var c__5525__auto___23602 = cljs.core.chunk_first(seq__23250_23601__$1);
var G__23603 = cljs.core.chunk_rest(seq__23250_23601__$1);
var G__23604 = c__5525__auto___23602;
var G__23605 = cljs.core.count(c__5525__auto___23602);
var G__23606 = (0);
seq__23250_23586 = G__23603;
chunk__23252_23587 = G__23604;
count__23253_23588 = G__23605;
i__23254_23589 = G__23606;
continue;
} else {
var map__23268_23607 = cljs.core.first(seq__23250_23601__$1);
var map__23268_23608__$1 = cljs.core.__destructure_map(map__23268_23607);
var task_23609 = map__23268_23608__$1;
var fn_str_23610 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23268_23608__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23611 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23268_23608__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23612 = goog.getObjectByName(fn_str_23610,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23611)].join(''));

(fn_obj_23612.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23612.cljs$core$IFn$_invoke$arity$2(path,new_link_23585) : fn_obj_23612.call(null, path,new_link_23585));


var G__23613 = cljs.core.next(seq__23250_23601__$1);
var G__23614 = null;
var G__23615 = (0);
var G__23616 = (0);
seq__23250_23586 = G__23613;
chunk__23252_23587 = G__23614;
count__23253_23588 = G__23615;
i__23254_23589 = G__23616;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23583);
});})(seq__23165_23526,chunk__23169_23527,count__23170_23528,i__23171_23529,seq__22804,chunk__22806,count__22807,i__22808,new_link_23585,path_match_23584,node_23583,seq__23165_23577__$1,temp__5804__auto___23576__$1,path,seq__22804__$1,temp__5804__auto__,map__22803,map__22803__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23584], 0));

goog.dom.insertSiblingAfter(new_link_23585,node_23583);


var G__23617 = cljs.core.next(seq__23165_23577__$1);
var G__23618 = null;
var G__23619 = (0);
var G__23620 = (0);
seq__23165_23526 = G__23617;
chunk__23169_23527 = G__23618;
count__23170_23528 = G__23619;
i__23171_23529 = G__23620;
continue;
} else {
var G__23621 = cljs.core.next(seq__23165_23577__$1);
var G__23622 = null;
var G__23623 = (0);
var G__23624 = (0);
seq__23165_23526 = G__23621;
chunk__23169_23527 = G__23622;
count__23170_23528 = G__23623;
i__23171_23529 = G__23624;
continue;
}
} else {
var G__23625 = cljs.core.next(seq__23165_23577__$1);
var G__23626 = null;
var G__23627 = (0);
var G__23628 = (0);
seq__23165_23526 = G__23625;
chunk__23169_23527 = G__23626;
count__23170_23528 = G__23627;
i__23171_23529 = G__23628;
continue;
}
}
} else {
}
}
break;
}


var G__23629 = cljs.core.next(seq__22804__$1);
var G__23630 = null;
var G__23631 = (0);
var G__23632 = (0);
seq__22804 = G__23629;
chunk__22806 = G__23630;
count__22807 = G__23631;
i__22808 = G__23632;
continue;
} else {
var G__23633 = cljs.core.next(seq__22804__$1);
var G__23634 = null;
var G__23635 = (0);
var G__23636 = (0);
seq__22804 = G__23633;
chunk__22806 = G__23634;
count__22807 = G__23635;
i__22808 = G__23636;
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
try{var G__23273 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__23273) : success.call(null, G__23273));
}catch (e23272){var e = e23272;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null, e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__23279,success,fail){
var map__23280 = p__23279;
var map__23280__$1 = cljs.core.__destructure_map(map__23280);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23280__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__23282 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__23282) : success.call(null, G__23282));
}catch (e23281){var e = e23281;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null, e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__23284,done,error){
var map__23285 = p__23284;
var map__23285__$1 = cljs.core.__destructure_map(map__23285);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23285__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null, ));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__23286,done,error){
var map__23287 = p__23286;
var map__23287__$1 = cljs.core.__destructure_map(map__23287);
var msg = map__23287__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23287__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23287__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23287__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__23288){
var map__23289 = p__23288;
var map__23289__$1 = cljs.core.__destructure_map(map__23289);
var src = map__23289__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23289__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__23290 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__23290) : done.call(null, G__23290));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__23291){
var map__23292 = p__23291;
var map__23292__$1 = cljs.core.__destructure_map(map__23292);
var msg__$1 = map__23292__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23292__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null, sources_to_load));
}catch (e23293){var ex = e23293;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null, ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__23294){
var map__23295 = p__23294;
var map__23295__$1 = cljs.core.__destructure_map(map__23295);
var env = map__23295__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23295__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__23302){
var map__23303 = p__23302;
var map__23303__$1 = cljs.core.__destructure_map(map__23303);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23303__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23303__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__23311){
var map__23312 = p__23311;
var map__23312__$1 = cljs.core.__destructure_map(map__23312);
var svc = map__23312__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23312__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
