goog.provide('o2w.api.data');
o2w.api.data.remote_data_STAR_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
o2w.api.data.component_id = (function o2w$api$data$component_id(c){
var map__12666 = reagent.core.argv(c);
var map__12666__$1 = cljs.core.__destructure_map(map__12666);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12666__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var or__5002__auto__ = id;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return reagent.impl.component.component_name(c);
}
});
o2w.api.data.get_data = (function o2w$api$data$get_data(c,k){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(o2w.api.data.remote_data_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o2w.api.data.component_id(c),k], null));
});
o2w.api.data.set_data = (function o2w$api$data$set_data(c,k,value){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(o2w.api.data.remote_data_STAR_,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o2w.api.data.component_id(c),k], null),value);
});
o2w.api.data.cancel_timeout = (function o2w$api$data$cancel_timeout(c){
var temp__5804__auto__ = o2w.api.data.get_data(c,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
if(cljs.core.truth_(temp__5804__auto__)){
var timeout = temp__5804__auto__;
return clearTimeout(timeout);
} else {
return null;
}
});
o2w.api.data.save_params = (function o2w$api$data$save_params(c,argv){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(o2w.api.data.remote_data_STAR_,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o2w.api.data.component_id(c),new cljs.core.Keyword(null,"argv","argv",-1462790895)], null),cljs.core.select_keys(argv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"endpoint","endpoint",447890044)], null)));
});
o2w.api.data.params_changed_QMARK_ = (function o2w$api$data$params_changed_QMARK_(c,argv){
var temp__5802__auto__ = o2w.api.data.get_data(c,new cljs.core.Keyword(null,"argv","argv",-1462790895));
if(cljs.core.truth_(temp__5802__auto__)){
var old = temp__5802__auto__;
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old,cljs.core.select_keys(argv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"endpoint","endpoint",447890044)], null)));
} else {
return true;
}
});
o2w.api.data.load_data_BANG_ = (function o2w$api$data$load_data_BANG_(c,atom,p__12676){
var map__12677 = p__12676;
var map__12677__$1 = cljs.core.__destructure_map(map__12677);
var args = map__12677__$1;
var endpoint = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12677__$1,new cljs.core.Keyword(null,"endpoint","endpoint",447890044));
var params_interceptor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12677__$1,new cljs.core.Keyword(null,"params-interceptor","params-interceptor",-1352916032));
var interceptor = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12677__$1,new cljs.core.Keyword(null,"interceptor","interceptor",1127739076),cljs.core.identity);
var refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12677__$1,new cljs.core.Keyword(null,"refresh","refresh",1947415525));
var loading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12677__$1,new cljs.core.Keyword(null,"loading?","loading?",1905707049));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12677__$1,new cljs.core.Keyword(null,"params","params",710516235));
var base_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12677__$1,new cljs.core.Keyword(null,"base-url","base-url",9540398));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12677__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var ok = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12677__$1,new cljs.core.Keyword(null,"ok","ok",967785236));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12677__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var request = reagent.core.cursor(o2w.api.data.remote_data_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o2w.api.data.component_id(c),new cljs.core.Keyword(null,"request","request",1772954723)], null));
var set_timeout = (function (){
if(cljs.core.truth_(refresh)){
o2w.api.data.cancel_timeout(c);

return o2w.api.data.set_data(c,new cljs.core.Keyword(null,"timeout","timeout",-318625318),setTimeout((function (){
return (o2w.api.data.load_data_BANG_.cljs$core$IFn$_invoke$arity$3 ? o2w.api.data.load_data_BANG_.cljs$core$IFn$_invoke$arity$3(c,atom,args) : o2w.api.data.load_data_BANG_.call(null, c,atom,args));
}),((1000) * refresh)));
} else {
return null;
}
});
var request_params = (function (){var G__12678 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"params","params",710516235),(cljs.core.truth_(params_interceptor)?(params_interceptor.cljs$core$IFn$_invoke$arity$1 ? params_interceptor.cljs$core$IFn$_invoke$arity$1(params) : params_interceptor.call(null, params)):params),new cljs.core.Keyword(null,"request","request",1772954723),request,new cljs.core.Keyword(null,"error","error",-978969032),(function (p1__12674_SHARP_){
set_timeout();

if(cljs.core.truth_(loading_QMARK_)){
cljs.core.reset_BANG_(loading_QMARK_,false);
} else {
}

if(cljs.core.truth_(error)){
return (error.cljs$core$IFn$_invoke$arity$2 ? error.cljs$core$IFn$_invoke$arity$2(p1__12674_SHARP_,atom) : error.call(null, p1__12674_SHARP_,atom));
} else {
var fexpr__12679 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(o2w.api.impl.config));
return (fexpr__12679.cljs$core$IFn$_invoke$arity$1 ? fexpr__12679.cljs$core$IFn$_invoke$arity$1(p1__12674_SHARP_) : fexpr__12679.call(null, p1__12674_SHARP_));
}
}),new cljs.core.Keyword(null,"ok","ok",967785236),(function (p1__12675_SHARP_){
set_timeout();

cljs.core.reset_BANG_(atom,(interceptor.cljs$core$IFn$_invoke$arity$1 ? interceptor.cljs$core$IFn$_invoke$arity$1(p1__12675_SHARP_) : interceptor.call(null, p1__12675_SHARP_)));

if(cljs.core.truth_(ok)){
(ok.cljs$core$IFn$_invoke$arity$2 ? ok.cljs$core$IFn$_invoke$arity$2(p1__12675_SHARP_,atom) : ok.call(null, p1__12675_SHARP_,atom));
} else {
}

if(cljs.core.truth_(loading_QMARK_)){
return cljs.core.reset_BANG_(loading_QMARK_,false);
} else {
return null;
}
})], null);
var G__12678__$1 = (cljs.core.truth_(params_interceptor)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__12678,new cljs.core.Keyword(null,"interceptor","interceptor",1127739076),cljs.core.identity):G__12678);
var G__12678__$2 = (cljs.core.truth_(base_url)?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__12678__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"base-url","base-url",9540398),base_url], null)], 0)):G__12678__$1);
if(cljs.core.truth_(headers)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__12678__$2,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"headers","headers",-835030129),headers], null)], 0));
} else {
return G__12678__$2;
}
})();
return o2w.api.impl.req.cljs$core$IFn$_invoke$arity$variadic(endpoint,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([request_params], 0));
});
o2w.api.data.load_remote_data = (function o2w$api$data$load_remote_data(c,atom,p__12680){
var map__12681 = p__12680;
var map__12681__$1 = cljs.core.__destructure_map(map__12681);
var args = map__12681__$1;
var cache_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12681__$1,new cljs.core.Keyword(null,"cache?","cache?",-1601953949),true);
var reset_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12681__$1,new cljs.core.Keyword(null,"reset?","reset?",-1051875415));
var loading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12681__$1,new cljs.core.Keyword(null,"loading?","loading?",1905707049));
if(((cljs.core.not(cache_QMARK_)) || (((cljs.core.not(cljs.core.deref(atom))) || (o2w.api.data.params_changed_QMARK_(c,args)))))){
if(cljs.core.truth_(reset_QMARK_)){
cljs.core.reset_BANG_(atom,null);
} else {
}

if(cljs.core.truth_(loading_QMARK_)){
cljs.core.reset_BANG_(loading_QMARK_,true);
} else {
}

o2w.api.data.load_data_BANG_(c,atom,args);

return o2w.api.data.save_params(c,args);
} else {
return null;
}
});
o2w.api.data.cancel_load_data = (function o2w$api$data$cancel_load_data(c){
o2w.api.data.cancel_timeout(c);

var temp__5804__auto__ = o2w.api.data.get_data(c,new cljs.core.Keyword(null,"request","request",1772954723));
if(cljs.core.truth_(temp__5804__auto__)){
var request = temp__5804__auto__;
return ajax.core.abort(request);
} else {
return null;
}
});
o2w.api.data.source = (function o2w$api$data$source(atom,p__12687){
var map__12688 = p__12687;
var map__12688__$1 = cljs.core.__destructure_map(map__12688);
var argv = map__12688__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12688__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"displayName","displayName",-809144601),(function (){var or__5002__auto__ = id;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "remote-data";
}
})(),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
return o2w.api.data.load_remote_data(this$,atom,argv);
}),new cljs.core.Keyword(null,"component-will-receive-props","component-will-receive-props",551608157),(function (this$,new_argv){
return o2w.api.data.load_remote_data(this$,atom,cljs.core.last(new_argv));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (atom__$1,params){
return null;
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (this$){
return o2w.api.data.cancel_load_data(this$);
})], null));
});

//# sourceMappingURL=o2w.api.data.js.map
