goog.provide('o2w.api.core');
o2w.api.core.req = o2w.api.impl.req;
o2w.api.core.call = o2w.api.impl.req;
o2w.api.core.source = o2w.api.data.source;
o2w.api.core.get = (function o2w$api$core$get(endpoint,args){
return (o2w.api.core.req.cljs$core$IFn$_invoke$arity$2 ? o2w.api.core.req.cljs$core$IFn$_invoke$arity$2(endpoint,args) : o2w.api.core.req.call(null, endpoint,args));
});
o2w.api.core.post = (function o2w$api$core$post(endpoint,args){
var G__12735 = endpoint;
var G__12736 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687)], null),args], 0));
return (o2w.api.core.req.cljs$core$IFn$_invoke$arity$2 ? o2w.api.core.req.cljs$core$IFn$_invoke$arity$2(G__12735,G__12736) : o2w.api.core.req.call(null, G__12735,G__12736));
});
o2w.api.core.delete$ = (function o2w$api$core$delete(endpoint,args){
var G__12737 = endpoint;
var G__12738 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620)], null),args], 0));
return (o2w.api.core.req.cljs$core$IFn$_invoke$arity$2 ? o2w.api.core.req.cljs$core$IFn$_invoke$arity$2(G__12737,G__12738) : o2w.api.core.req.call(null, G__12737,G__12738));
});
o2w.api.core.put = (function o2w$api$core$put(endpoint,args){
var G__12739 = endpoint;
var G__12740 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570)], null),args], 0));
return (o2w.api.core.req.cljs$core$IFn$_invoke$arity$2 ? o2w.api.core.req.cljs$core$IFn$_invoke$arity$2(G__12739,G__12740) : o2w.api.core.req.call(null, G__12739,G__12740));
});
o2w.api.core.patch = (function o2w$api$core$patch(endpoint,args){
var G__12741 = endpoint;
var G__12742 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109)], null),args], 0));
return (o2w.api.core.req.cljs$core$IFn$_invoke$arity$2 ? o2w.api.core.req.cljs$core$IFn$_invoke$arity$2(G__12741,G__12742) : o2w.api.core.req.call(null, G__12741,G__12742));
});
o2w.api.core.get_auth_token = o2w.api.impl.get_token;
o2w.api.core.set_auth_token_BANG_ = o2w.api.impl.set_token;
o2w.api.core.clear_auth_token_BANG_ = o2w.api.impl.clear_token;
o2w.api.core.configure = (function o2w$api$core$configure(new_config){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(o2w.api.impl.config,cljs.core.merge,new_config);
});
o2w.api.core.params_to_str = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(ajax.url.params_to_str,new cljs.core.Keyword(null,"java","java",1958249105));
o2w.api.core.params_clean = (function o2w$api$core$params_clean(params){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.second,params));
});
o2w.api.core.atom = o2w.api.atom.remote_atom;
o2w.api.core.refresh_BANG_ = o2w.api.atom.refresh_BANG_;
o2w.api.core.clean_BANG_ = o2w.api.atom.clean_BANG_;

//# sourceMappingURL=o2w.api.core.js.map
