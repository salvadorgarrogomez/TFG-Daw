goog.provide('o2w.routes');
o2w.routes.app_routes = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
o2w.routes.app_views = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
o2w.routes.current_route = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
o2w.routes.default_view = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
o2w.routes._default_language = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
o2w.routes.language = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
o2w.routes._language_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
o2w.routes.__GT_slash = (function o2w$routes$__GT_slash(s){
return clojure.string.replace(s,/--slash--/,"/");
});
o2w.routes.slash__GT_ = (function o2w$routes$slash__GT_(s){
return clojure.string.replace(s,/\//,"--slash--");
});
o2w.routes.query = reagent.ratom.make_reaction((function (){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12696){
var vec__12697 = p__12696;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12697,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12697,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),(1)),v], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(o2w.routes.current_route))));
}));
o2w.routes.confirm_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
o2w.routes.cms_routes = (function o2w$routes$cms_routes(routes,k){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (i){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),k], null);
}),routes));
});
o2w.routes.process_params = (function o2w$routes$process_params(params){
var params__$1 = (function (){var or__5002__auto__ = params;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var current = (function (){var or__5002__auto__ = cljs.core.deref(o2w.routes.language);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.deref(o2w.routes._default_language);
}
})();
var params__$2 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"language","language",-1591107564),current], null),params__$1], 0));
var default_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"language","language",-1591107564).cljs$core$IFn$_invoke$arity$1(params__$2),cljs.core.deref(o2w.routes._default_language));
var G__12700 = params__$2;
if(((default_QMARK_) || (cljs.core.not(cljs.core.deref(o2w.routes._language_QMARK_))))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__12700,new cljs.core.Keyword(null,"language","language",-1591107564));
} else {
return G__12700;
}
});
o2w.routes.url = (function o2w$routes$url(var_args){
var args__5732__auto__ = [];
var len__5726__auto___12740 = arguments.length;
var i__5727__auto___12741 = (0);
while(true){
if((i__5727__auto___12741 < len__5726__auto___12740)){
args__5732__auto__.push((arguments[i__5727__auto___12741]));

var G__12742 = (i__5727__auto___12741 + (1));
i__5727__auto___12741 = G__12742;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return o2w.routes.url.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(o2w.routes.url.cljs$core$IFn$_invoke$arity$variadic = (function (name,p__12703){
var vec__12704 = p__12703;
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12704,(0),null);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12704,(1),null);
var params_SINGLEQUOTE_ = o2w.routes.process_params(params);
return bide.core.resolve.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(o2w.routes.app_routes),name,params_SINGLEQUOTE_,query);
}));

(o2w.routes.url.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(o2w.routes.url.cljs$lang$applyTo = (function (seq12701){
var G__12702 = cljs.core.first(seq12701);
var seq12701__$1 = cljs.core.next(seq12701);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12702,seq12701__$1);
}));

o2w.routes.go = (function o2w$routes$go(var_args){
var args__5732__auto__ = [];
var len__5726__auto___12743 = arguments.length;
var i__5727__auto___12744 = (0);
while(true){
if((i__5727__auto___12744 < len__5726__auto___12743)){
args__5732__auto__.push((arguments[i__5727__auto___12744]));

var G__12745 = (i__5727__auto___12744 + (1));
i__5727__auto___12744 = G__12745;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return o2w.routes.go.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(o2w.routes.go.cljs$core$IFn$_invoke$arity$variadic = (function (path,params){
return accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(o2w.routes.url,path,params));
}));

(o2w.routes.go.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(o2w.routes.go.cljs$lang$applyTo = (function (seq12707){
var G__12708 = cljs.core.first(seq12707);
var seq12707__$1 = cljs.core.next(seq12707);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12708,seq12707__$1);
}));

o2w.routes.url_for = (function o2w$routes$url_for(p__12709,language){
var map__12710 = p__12709;
var map__12710__$1 = cljs.core.__destructure_map(map__12710);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12710__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12710__$1,new cljs.core.Keyword(null,"params","params",710516235));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12710__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
return o2w.routes.url.cljs$core$IFn$_invoke$arity$variadic(name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([params,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"language","language",-1591107564),language], null)], 0)),query], 0));
});
o2w.routes.add_i18n = (function o2w$routes$add_i18n(prefix,routes){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12711){
var vec__12712 = p__12711;
var route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12712,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12712,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["/:language(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),")",cljs.core.str.cljs$core$IFn$_invoke$arity$1(route)].join(''),k], null);
}),routes));
});
o2w.routes.add_l18n = o2w.routes.add_i18n;
o2w.routes.with_prefix = (function o2w$routes$with_prefix(prefix,routes){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12715){
var vec__12716 = p__12715;
var route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12716,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12716,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(route)].join(''),k], null);
}),routes));
});
o2w.routes.default_nav_handler = (function o2w$routes$default_nav_handler(p__12719,path,navigation_QMARK_){
var map__12720 = p__12719;
var map__12720__$1 = cljs.core.__destructure_map(map__12720);
var router = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12720__$1,new cljs.core.Keyword(null,"router","router",1091916230));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12720__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var default_language = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12720__$1,new cljs.core.Keyword(null,"default-language","default-language",-1470225213));
var on_change_language = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12720__$1,new cljs.core.Keyword(null,"on-change-language","on-change-language",-247715448));
var language_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12720__$1,new cljs.core.Keyword(null,"language?","language?",-355066049));
var vec__12721 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,/#/);
var path__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12721,(0),null);
var hash = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12721,(1),null);
var vec__12724 = bide.core.match(cljs.core.deref(router),path__$1);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12724,(0),null);
var route_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12724,(1),null);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12724,(2),null);
var default_params = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"language","language",-1591107564),default_language], null);
var route_params__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_params,route_params], 0));
var current_language = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"language","language",-1591107564).cljs$core$IFn$_invoke$arity$1(route_params__$1));
cljs.core.reset_BANG_(o2w.routes.current_route,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"name","name",1843675177),handler,new cljs.core.Keyword(null,"params","params",710516235),route_params__$1,new cljs.core.Keyword(null,"hash","hash",-13781596),hash,new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"navigation?","navigation?",-687531466),navigation_QMARK_], null));

if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.deref(o2w.routes._language_QMARK_);
if(cljs.core.truth_(and__5000__auto__)){
return (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(o2w.routes.language),current_language)));
} else {
return and__5000__auto__;
}
})())){
var old_12746 = cljs.core.deref(o2w.routes.language);
cljs.core.reset_BANG_(o2w.routes.language,current_language);

if(cljs.core.truth_(on_change_language)){
(on_change_language.cljs$core$IFn$_invoke$arity$2 ? on_change_language.cljs$core$IFn$_invoke$arity$2(current_language,old_12746) : on_change_language.call(null, current_language,old_12746));
} else {
}
} else {
}

if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.not(navigation_QMARK_);
if(and__5000__auto__){
return on_change;
} else {
return and__5000__auto__;
}
})())){
var G__12727 = cljs.core.deref(o2w.routes.current_route);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__12727) : on_change.call(null, G__12727));
} else {
return null;
}
});
o2w.routes.default_path_exists_QMARK_ = (function o2w$routes$default_path_exists_QMARK_(routes,path){
return bide.core.match(cljs.core.deref(routes),path);
});
o2w.routes.parse_routes = (function o2w$routes$parse_routes(_routes,views){
if(cljs.core.truth_(views)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_routes,views], null);
} else {
var routes = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12728_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.first(p1__12728_SHARP_),cljs.core.second(p1__12728_SHARP_)],null));
}),_routes));
var views__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12729_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.second(p1__12729_SHARP_)],[cljs.core.last(p1__12729_SHARP_)]);
}),_routes));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [routes,views__$1], null);
}
});
o2w.routes.confirm_route_change = (function o2w$routes$confirm_route_change(nav_handler,token,navigation_QMARK_){
window.history.replaceState(cljs.core.PersistentArrayMap.EMPTY,null,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(o2w.routes.current_route)));

var G__12731 = (function (){
window.history.replaceState(cljs.core.PersistentArrayMap.EMPTY,null,token);

return (nav_handler.cljs$core$IFn$_invoke$arity$2 ? nav_handler.cljs$core$IFn$_invoke$arity$2(token,navigation_QMARK_) : nav_handler.call(null, token,navigation_QMARK_));
});
var fexpr__12730 = cljs.core.deref(o2w.routes.confirm_QMARK_);
return (fexpr__12730.cljs$core$IFn$_invoke$arity$1 ? fexpr__12730.cljs$core$IFn$_invoke$arity$1(G__12731) : fexpr__12730.call(null, G__12731));
});
o2w.routes.dispatch_on_navigate = (function o2w$routes$dispatch_on_navigate(history,nav_handler){
return goog.events.listen(history,goog.history.EventType.NAVIGATE,(function (e){
var token = e.token;
var navigation_QMARK_ = e.isNavigation;
if(cljs.core.truth_(cljs.core.deref(o2w.routes.confirm_QMARK_))){
return o2w.routes.confirm_route_change(nav_handler,token,navigation_QMARK_);
} else {
return (nav_handler.cljs$core$IFn$_invoke$arity$2 ? nav_handler.cljs$core$IFn$_invoke$arity$2(token,navigation_QMARK_) : nav_handler.call(null, token,navigation_QMARK_));
}
}));
});
o2w.routes.configure_navigation_BANG_ = (function o2w$routes$configure_navigation_BANG_(p__12732){
var map__12733 = p__12732;
var map__12733__$1 = cljs.core.__destructure_map(map__12733);
var nav_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12733__$1,new cljs.core.Keyword(null,"nav-handler","nav-handler",2039495484));
var path_exists_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12733__$1,new cljs.core.Keyword(null,"path-exists?","path-exists?",1473384514));
var reload_same_path_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12733__$1,new cljs.core.Keyword(null,"reload-same-path?","reload-same-path?",1981904231));
accountant.core.history.setUseFragment(false);

accountant.core.history.setPathPrefix("");

accountant.core.history.setEnabled(true);

(accountant.core.nav_handler = nav_handler);

(accountant.core.path_exists_QMARK_ = path_exists_QMARK_);

o2w.routes.dispatch_on_navigate(accountant.core.history,nav_handler);

return o2w.routes.helpers.prevent_reload_on_known_path(accountant.core.history,path_exists_QMARK_,reload_same_path_QMARK_);
});
o2w.routes.on_navigate = (function o2w$routes$on_navigate(name,params,query){
return cljs.core.reset_BANG_(o2w.routes.current_route,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"query","query",-1288509510),query], null));
});
/**
 * Configura las rutas de la app
 */
o2w.routes.start_BANG_ = (function o2w$routes$start_BANG_(p__12734){
var map__12735 = p__12734;
var map__12735__$1 = cljs.core.__destructure_map(map__12735);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12735__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var nav_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12735__$1,new cljs.core.Keyword(null,"nav-handler","nav-handler",2039495484),o2w.routes.default_nav_handler);
var views = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12735__$1,new cljs.core.Keyword(null,"views","views",1450155487));
var language_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12735__$1,new cljs.core.Keyword(null,"language?","language?",-355066049),true);
var path_exists_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12735__$1,new cljs.core.Keyword(null,"path-exists?","path-exists?",1473384514),o2w.routes.default_path_exists_QMARK_);
var routes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12735__$1,new cljs.core.Keyword(null,"routes","routes",457900162));
var default_language = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12735__$1,new cljs.core.Keyword(null,"default-language","default-language",-1470225213));
var on_change_language = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12735__$1,new cljs.core.Keyword(null,"on-change-language","on-change-language",-247715448));
var not_found = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12735__$1,new cljs.core.Keyword(null,"not-found","not-found",-629079980));
cljs.core.reset_BANG_(o2w.routes._default_language,default_language);

cljs.core.reset_BANG_(o2w.routes._language_QMARK_,language_QMARK_);

if(cljs.core.truth_(not_found)){
cljs.core.reset_BANG_(o2w.routes.default_view,not_found);
} else {
}

var vec__12736 = o2w.routes.parse_routes(routes,views);
var routes__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12736,(0),null);
var views__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12736,(1),null);
cljs.core.reset_BANG_(o2w.routes.app_routes,bide.core.router(routes__$1));

cljs.core.reset_BANG_(o2w.routes.app_views,views__$1);

o2w.routes.configure_navigation_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nav-handler","nav-handler",2039495484),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nav_handler,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"router","router",1091916230),o2w.routes.app_routes,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"on-change-language","on-change-language",-247715448),on_change_language,new cljs.core.Keyword(null,"default-language","default-language",-1470225213),default_language], null)),new cljs.core.Keyword(null,"path-exists?","path-exists?",1473384514),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(path_exists_QMARK_,o2w.routes.app_routes)], null));

return accountant.core.dispatch_current_BANG_();
});
o2w.routes.current_view = (function o2w$routes$current_view(){
var map__12739 = cljs.core.deref(o2w.routes.current_route);
var map__12739__$1 = cljs.core.__destructure_map(map__12739);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12739__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12739__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12739__$1,new cljs.core.Keyword(null,"params","params",710516235));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12739__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(o2w.routes.app_views),name);
if(cljs.core.truth_(path)){
if(cljs.core.truth_(handler)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [handler,cljs.core.deref(o2w.routes.current_route),params,query], null);
} else {
if(cljs.core.truth_(cljs.core.deref(o2w.routes.default_view))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(o2w.routes.default_view),cljs.core.deref(o2w.routes.current_route),params,query], null);
} else {
return null;
}
}
} else {
return null;
}
});

//# sourceMappingURL=o2w.routes.js.map
