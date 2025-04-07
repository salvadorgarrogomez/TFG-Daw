goog.provide('o2w.routes.helpers');
o2w.routes.helpers.uri__GT_query = (function o2w$routes$helpers$uri__GT_query(uri){
var query = uri.getQuery();
if(cljs.core.empty_QMARK_(query)){
return null;
} else {
return ["?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query)].join('');
}
});
o2w.routes.helpers.uri__GT_fragment = (function o2w$routes$helpers$uri__GT_fragment(uri){
var fragment = uri.getFragment();
if(cljs.core.empty_QMARK_(fragment)){
return null;
} else {
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fragment)].join('');
}
});
/**
 * Given a DOM node, if it is an element node, return its href attribute.
 *   Otherwise, return nil.
 */
o2w.routes.helpers.get_href_attribute = (function o2w$routes$helpers$get_href_attribute(node){
if(cljs.core.truth_((function (){var and__5000__auto__ = node;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node.nodeType,Node.ELEMENT_NODE);
} else {
return and__5000__auto__;
}
})())){
return node.getAttribute("href");
} else {
return null;
}
});
/**
 * Given a DOM element that may or may not be a link, traverse up the DOM tree
 *   to see if any of its parents are links. If so, return the href content, if
 *   it does not have an explicit `data-trigger` attribute to signify a non-navigational
 *   link element.
 */
o2w.routes.helpers.find_href_node = (function o2w$routes$helpers$find_href_node(e){
while(true){
var href = o2w.routes.helpers.get_href_attribute(e);
var attrs = e.attributes;
var navigation_link_QMARK_ = (function (){var and__5000__auto__ = href;
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = attrs;
if(cljs.core.truth_(and__5000__auto____$1)){
return cljs.core.not((attrs["data-trigger"]));
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(navigation_link_QMARK_)){
return e;
} else {
var temp__5804__auto__ = e.parentNode;
if(cljs.core.truth_(temp__5804__auto__)){
var parent = temp__5804__auto__;
var G__12257 = parent;
e = G__12257;
continue;
} else {
return null;
}
}
break;
}
});
/**
 * Create a click handler that blocks page reloads for known routes
 */
o2w.routes.helpers.prevent_reload_on_known_path = (function o2w$routes$helpers$prevent_reload_on_known_path(history,path_exists_QMARK_,reload_same_path_QMARK_){
return goog.events.listen(document,"click",(function (e){
var target = e.target;
var button = e.button;
var meta_key = e.metaKey;
var alt_key = e.altKey;
var ctrl_key = e.ctrlKey;
var shift_key = e.shiftKey;
var any_key = (function (){var or__5002__auto__ = meta_key;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = alt_key;
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
var or__5002__auto____$2 = ctrl_key;
if(cljs.core.truth_(or__5002__auto____$2)){
return or__5002__auto____$2;
} else {
return shift_key;
}
}
}
})();
var href_node = o2w.routes.helpers.find_href_node(target);
var href = (cljs.core.truth_(href_node)?href_node.href:null);
var link_target = (cljs.core.truth_(href_node)?href_node.target:null);
var uri = goog.Uri.parse(href);
var path = uri.getPath();
var query = o2w.routes.helpers.uri__GT_query(uri);
var fragment = o2w.routes.helpers.uri__GT_fragment(uri);
var relative_href = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),query,fragment].join('');
var title = target.title;
var host = uri.getDomain();
var port = uri.getPort();
var current_host = window.location.hostname;
var current_port = window.location.port;
var loc = window.location;
var current_relative_href = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(loc.pathname),cljs.core.str.cljs$core$IFn$_invoke$arity$1(loc.query),cljs.core.str.cljs$core$IFn$_invoke$arity$1(loc.hash)].join('');
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.not(any_key);
if(and__5000__auto__){
var and__5000__auto____$1 = (function (){var fexpr__12252 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["",null,"_self",null], null), null);
return (fexpr__12252.cljs$core$IFn$_invoke$arity$1 ? fexpr__12252.cljs$core$IFn$_invoke$arity$1(link_target) : fexpr__12252.call(null, link_target));
})();
if(cljs.core.truth_(and__5000__auto____$1)){
var and__5000__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(button,(0));
if(and__5000__auto____$2){
var and__5000__auto____$3 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(host,current_host);
if(and__5000__auto____$3){
var and__5000__auto____$4 = ((cljs.core.not(port)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(port),cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_port))));
if(and__5000__auto____$4){
return (path_exists_QMARK_.cljs$core$IFn$_invoke$arity$1 ? path_exists_QMARK_.cljs$core$IFn$_invoke$arity$1(path) : path_exists_QMARK_.call(null, path));
} else {
return and__5000__auto____$4;
}
} else {
return and__5000__auto____$3;
}
} else {
return and__5000__auto____$2;
}
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})())){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_relative_href,relative_href)){

history.setToken(relative_href,title);
} else {
}

e.preventDefault();

if(cljs.core.truth_(reload_same_path_QMARK_)){
return goog.events.dispatchEvent(history,(new goog.history.Event(path,true)));
} else {
return null;
}
} else {
return null;
}
}));
});

//# sourceMappingURL=o2w.routes.helpers.js.map
