goog.provide('o2w.api.cookie');
o2w.api.cookie.cookies = (new goog.net.Cookies(document));
o2w.api.cookie.get = (function o2w$api$cookie$get(k){
return o2w.api.cookie.cookies.get(cljs.core.name(k),null);
});
/**
 * Stores the cookie value using pr-str.
 */
o2w.api.cookie.set_BANG_ = (function o2w$api$cookie$set_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___12418 = arguments.length;
var i__5727__auto___12419 = (0);
while(true){
if((i__5727__auto___12419 < len__5726__auto___12418)){
args__5732__auto__.push((arguments[i__5727__auto___12419]));

var G__12420 = (i__5727__auto___12419 + (1));
i__5727__auto___12419 = G__12420;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return o2w.api.cookie.set_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(o2w.api.cookie.set_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,v,p__12410){
var vec__12411 = p__12410;
var map__12414 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12411,(0),null);
var map__12414__$1 = cljs.core.__destructure_map(map__12414);
var max_age = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12414__$1,new cljs.core.Keyword(null,"max-age","max-age",-270129271),(-1));
return goog.net.Cookies.set(cljs.core.name(k),v,max_age);
}));

(o2w.api.cookie.set_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(o2w.api.cookie.set_BANG_.cljs$lang$applyTo = (function (seq12406){
var G__12407 = cljs.core.first(seq12406);
var seq12406__$1 = cljs.core.next(seq12406);
var G__12408 = cljs.core.first(seq12406__$1);
var seq12406__$2 = cljs.core.next(seq12406__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12407,G__12408,seq12406__$2);
}));

o2w.api.cookie.remove_BANG_ = (function o2w$api$cookie$remove_BANG_(k){
return goog.net.Cookies.remove(cljs.core.name(k));
});

//# sourceMappingURL=o2w.api.cookie.js.map
