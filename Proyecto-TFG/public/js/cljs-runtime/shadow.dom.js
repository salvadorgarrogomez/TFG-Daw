goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_19167 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_19167(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_19170 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_19170(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__18138 = coll;
var G__18140 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__18138,G__18140) : shadow.dom.lazy_native_coll_seq.call(null, G__18138,G__18140));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null, );
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__18208 = arguments.length;
switch (G__18208) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__18275 = arguments.length;
switch (G__18275) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__18297 = arguments.length;
switch (G__18297) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__18329 = arguments.length;
switch (G__18329) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__18350 = arguments.length;
switch (G__18350) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__18386 = arguments.length;
switch (G__18386) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
}));
}catch (e18411){if((e18411 instanceof Object)){
var e = e18411;
return console.log("didnt support attachEvent",el,e);
} else {
throw e18411;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__18433 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__18434 = null;
var count__18435 = (0);
var i__18436 = (0);
while(true){
if((i__18436 < count__18435)){
var el = chunk__18434.cljs$core$IIndexed$_nth$arity$2(null, i__18436);
var handler_19214__$1 = ((function (seq__18433,chunk__18434,count__18435,i__18436,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__18433,chunk__18434,count__18435,i__18436,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_19214__$1);


var G__19215 = seq__18433;
var G__19216 = chunk__18434;
var G__19217 = count__18435;
var G__19219 = (i__18436 + (1));
seq__18433 = G__19215;
chunk__18434 = G__19216;
count__18435 = G__19217;
i__18436 = G__19219;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18433);
if(temp__5804__auto__){
var seq__18433__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18433__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18433__$1);
var G__19221 = cljs.core.chunk_rest(seq__18433__$1);
var G__19222 = c__5525__auto__;
var G__19223 = cljs.core.count(c__5525__auto__);
var G__19224 = (0);
seq__18433 = G__19221;
chunk__18434 = G__19222;
count__18435 = G__19223;
i__18436 = G__19224;
continue;
} else {
var el = cljs.core.first(seq__18433__$1);
var handler_19225__$1 = ((function (seq__18433,chunk__18434,count__18435,i__18436,el,seq__18433__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__18433,chunk__18434,count__18435,i__18436,el,seq__18433__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_19225__$1);


var G__19226 = cljs.core.next(seq__18433__$1);
var G__19227 = null;
var G__19228 = (0);
var G__19229 = (0);
seq__18433 = G__19226;
chunk__18434 = G__19227;
count__18435 = G__19228;
i__18436 = G__19229;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__18493 = arguments.length;
switch (G__18493) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__18521 = cljs.core.seq(events);
var chunk__18522 = null;
var count__18523 = (0);
var i__18524 = (0);
while(true){
if((i__18524 < count__18523)){
var vec__18535 = chunk__18522.cljs$core$IIndexed$_nth$arity$2(null, i__18524);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18535,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18535,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__19234 = seq__18521;
var G__19235 = chunk__18522;
var G__19236 = count__18523;
var G__19237 = (i__18524 + (1));
seq__18521 = G__19234;
chunk__18522 = G__19235;
count__18523 = G__19236;
i__18524 = G__19237;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18521);
if(temp__5804__auto__){
var seq__18521__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18521__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18521__$1);
var G__19240 = cljs.core.chunk_rest(seq__18521__$1);
var G__19241 = c__5525__auto__;
var G__19242 = cljs.core.count(c__5525__auto__);
var G__19243 = (0);
seq__18521 = G__19240;
chunk__18522 = G__19241;
count__18523 = G__19242;
i__18524 = G__19243;
continue;
} else {
var vec__18539 = cljs.core.first(seq__18521__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18539,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18539,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__19245 = cljs.core.next(seq__18521__$1);
var G__19246 = null;
var G__19247 = (0);
var G__19248 = (0);
seq__18521 = G__19245;
chunk__18522 = G__19246;
count__18523 = G__19247;
i__18524 = G__19248;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__18547 = cljs.core.seq(styles);
var chunk__18548 = null;
var count__18549 = (0);
var i__18550 = (0);
while(true){
if((i__18550 < count__18549)){
var vec__18569 = chunk__18548.cljs$core$IIndexed$_nth$arity$2(null, i__18550);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18569,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18569,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__19249 = seq__18547;
var G__19250 = chunk__18548;
var G__19251 = count__18549;
var G__19252 = (i__18550 + (1));
seq__18547 = G__19249;
chunk__18548 = G__19250;
count__18549 = G__19251;
i__18550 = G__19252;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18547);
if(temp__5804__auto__){
var seq__18547__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18547__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18547__$1);
var G__19254 = cljs.core.chunk_rest(seq__18547__$1);
var G__19255 = c__5525__auto__;
var G__19256 = cljs.core.count(c__5525__auto__);
var G__19257 = (0);
seq__18547 = G__19254;
chunk__18548 = G__19255;
count__18549 = G__19256;
i__18550 = G__19257;
continue;
} else {
var vec__18572 = cljs.core.first(seq__18547__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18572,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18572,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__19258 = cljs.core.next(seq__18547__$1);
var G__19259 = null;
var G__19260 = (0);
var G__19261 = (0);
seq__18547 = G__19258;
chunk__18548 = G__19259;
count__18549 = G__19260;
i__18550 = G__19261;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__18575_19262 = key;
var G__18575_19263__$1 = (((G__18575_19262 instanceof cljs.core.Keyword))?G__18575_19262.fqn:null);
switch (G__18575_19263__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_19267 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_19267,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_19267,"aria-");
}
})())){
el.setAttribute(ks_19267,value);
} else {
(el[ks_19267] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__18585){
var map__18586 = p__18585;
var map__18586__$1 = cljs.core.__destructure_map(map__18586);
var props = map__18586__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18586__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__18587 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18587,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18587,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18587,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__18593 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__18593,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__18593;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__18598 = arguments.length;
switch (G__18598) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__18616){
var vec__18617 = p__18616;
var seq__18618 = cljs.core.seq(vec__18617);
var first__18619 = cljs.core.first(seq__18618);
var seq__18618__$1 = cljs.core.next(seq__18618);
var nn = first__18619;
var first__18619__$1 = cljs.core.first(seq__18618__$1);
var seq__18618__$2 = cljs.core.next(seq__18618__$1);
var np = first__18619__$1;
var nc = seq__18618__$2;
var node = vec__18617;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__18623 = nn;
var G__18624 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__18623,G__18624) : create_fn.call(null, G__18623,G__18624));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null, nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__18625 = nn;
var G__18626 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__18625,G__18626) : create_fn.call(null, G__18625,G__18626));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__18627 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18627,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18627,(1),null);
var seq__18630_19299 = cljs.core.seq(node_children);
var chunk__18631_19300 = null;
var count__18632_19301 = (0);
var i__18633_19302 = (0);
while(true){
if((i__18633_19302 < count__18632_19301)){
var child_struct_19303 = chunk__18631_19300.cljs$core$IIndexed$_nth$arity$2(null, i__18633_19302);
var children_19304 = shadow.dom.dom_node(child_struct_19303);
if(cljs.core.seq_QMARK_(children_19304)){
var seq__18674_19306 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_19304));
var chunk__18676_19307 = null;
var count__18677_19308 = (0);
var i__18678_19309 = (0);
while(true){
if((i__18678_19309 < count__18677_19308)){
var child_19310 = chunk__18676_19307.cljs$core$IIndexed$_nth$arity$2(null, i__18678_19309);
if(cljs.core.truth_(child_19310)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19310);


var G__19311 = seq__18674_19306;
var G__19312 = chunk__18676_19307;
var G__19313 = count__18677_19308;
var G__19314 = (i__18678_19309 + (1));
seq__18674_19306 = G__19311;
chunk__18676_19307 = G__19312;
count__18677_19308 = G__19313;
i__18678_19309 = G__19314;
continue;
} else {
var G__19315 = seq__18674_19306;
var G__19316 = chunk__18676_19307;
var G__19317 = count__18677_19308;
var G__19318 = (i__18678_19309 + (1));
seq__18674_19306 = G__19315;
chunk__18676_19307 = G__19316;
count__18677_19308 = G__19317;
i__18678_19309 = G__19318;
continue;
}
} else {
var temp__5804__auto___19319 = cljs.core.seq(seq__18674_19306);
if(temp__5804__auto___19319){
var seq__18674_19320__$1 = temp__5804__auto___19319;
if(cljs.core.chunked_seq_QMARK_(seq__18674_19320__$1)){
var c__5525__auto___19321 = cljs.core.chunk_first(seq__18674_19320__$1);
var G__19322 = cljs.core.chunk_rest(seq__18674_19320__$1);
var G__19323 = c__5525__auto___19321;
var G__19324 = cljs.core.count(c__5525__auto___19321);
var G__19325 = (0);
seq__18674_19306 = G__19322;
chunk__18676_19307 = G__19323;
count__18677_19308 = G__19324;
i__18678_19309 = G__19325;
continue;
} else {
var child_19327 = cljs.core.first(seq__18674_19320__$1);
if(cljs.core.truth_(child_19327)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19327);


var G__19329 = cljs.core.next(seq__18674_19320__$1);
var G__19330 = null;
var G__19331 = (0);
var G__19332 = (0);
seq__18674_19306 = G__19329;
chunk__18676_19307 = G__19330;
count__18677_19308 = G__19331;
i__18678_19309 = G__19332;
continue;
} else {
var G__19333 = cljs.core.next(seq__18674_19320__$1);
var G__19334 = null;
var G__19335 = (0);
var G__19336 = (0);
seq__18674_19306 = G__19333;
chunk__18676_19307 = G__19334;
count__18677_19308 = G__19335;
i__18678_19309 = G__19336;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_19304);
}


var G__19337 = seq__18630_19299;
var G__19338 = chunk__18631_19300;
var G__19339 = count__18632_19301;
var G__19340 = (i__18633_19302 + (1));
seq__18630_19299 = G__19337;
chunk__18631_19300 = G__19338;
count__18632_19301 = G__19339;
i__18633_19302 = G__19340;
continue;
} else {
var temp__5804__auto___19341 = cljs.core.seq(seq__18630_19299);
if(temp__5804__auto___19341){
var seq__18630_19343__$1 = temp__5804__auto___19341;
if(cljs.core.chunked_seq_QMARK_(seq__18630_19343__$1)){
var c__5525__auto___19344 = cljs.core.chunk_first(seq__18630_19343__$1);
var G__19345 = cljs.core.chunk_rest(seq__18630_19343__$1);
var G__19346 = c__5525__auto___19344;
var G__19347 = cljs.core.count(c__5525__auto___19344);
var G__19348 = (0);
seq__18630_19299 = G__19345;
chunk__18631_19300 = G__19346;
count__18632_19301 = G__19347;
i__18633_19302 = G__19348;
continue;
} else {
var child_struct_19349 = cljs.core.first(seq__18630_19343__$1);
var children_19350 = shadow.dom.dom_node(child_struct_19349);
if(cljs.core.seq_QMARK_(children_19350)){
var seq__18720_19351 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_19350));
var chunk__18722_19352 = null;
var count__18723_19353 = (0);
var i__18724_19354 = (0);
while(true){
if((i__18724_19354 < count__18723_19353)){
var child_19356 = chunk__18722_19352.cljs$core$IIndexed$_nth$arity$2(null, i__18724_19354);
if(cljs.core.truth_(child_19356)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19356);


var G__19358 = seq__18720_19351;
var G__19359 = chunk__18722_19352;
var G__19360 = count__18723_19353;
var G__19361 = (i__18724_19354 + (1));
seq__18720_19351 = G__19358;
chunk__18722_19352 = G__19359;
count__18723_19353 = G__19360;
i__18724_19354 = G__19361;
continue;
} else {
var G__19363 = seq__18720_19351;
var G__19365 = chunk__18722_19352;
var G__19366 = count__18723_19353;
var G__19367 = (i__18724_19354 + (1));
seq__18720_19351 = G__19363;
chunk__18722_19352 = G__19365;
count__18723_19353 = G__19366;
i__18724_19354 = G__19367;
continue;
}
} else {
var temp__5804__auto___19372__$1 = cljs.core.seq(seq__18720_19351);
if(temp__5804__auto___19372__$1){
var seq__18720_19373__$1 = temp__5804__auto___19372__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18720_19373__$1)){
var c__5525__auto___19374 = cljs.core.chunk_first(seq__18720_19373__$1);
var G__19375 = cljs.core.chunk_rest(seq__18720_19373__$1);
var G__19376 = c__5525__auto___19374;
var G__19377 = cljs.core.count(c__5525__auto___19374);
var G__19378 = (0);
seq__18720_19351 = G__19375;
chunk__18722_19352 = G__19376;
count__18723_19353 = G__19377;
i__18724_19354 = G__19378;
continue;
} else {
var child_19379 = cljs.core.first(seq__18720_19373__$1);
if(cljs.core.truth_(child_19379)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19379);


var G__19383 = cljs.core.next(seq__18720_19373__$1);
var G__19384 = null;
var G__19385 = (0);
var G__19386 = (0);
seq__18720_19351 = G__19383;
chunk__18722_19352 = G__19384;
count__18723_19353 = G__19385;
i__18724_19354 = G__19386;
continue;
} else {
var G__19387 = cljs.core.next(seq__18720_19373__$1);
var G__19388 = null;
var G__19389 = (0);
var G__19390 = (0);
seq__18720_19351 = G__19387;
chunk__18722_19352 = G__19388;
count__18723_19353 = G__19389;
i__18724_19354 = G__19390;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_19350);
}


var G__19391 = cljs.core.next(seq__18630_19343__$1);
var G__19392 = null;
var G__19393 = (0);
var G__19394 = (0);
seq__18630_19299 = G__19391;
chunk__18631_19300 = G__19392;
count__18632_19301 = G__19393;
i__18633_19302 = G__19394;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__18754 = cljs.core.seq(node);
var chunk__18755 = null;
var count__18756 = (0);
var i__18757 = (0);
while(true){
if((i__18757 < count__18756)){
var n = chunk__18755.cljs$core$IIndexed$_nth$arity$2(null, i__18757);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__19400 = seq__18754;
var G__19401 = chunk__18755;
var G__19402 = count__18756;
var G__19403 = (i__18757 + (1));
seq__18754 = G__19400;
chunk__18755 = G__19401;
count__18756 = G__19402;
i__18757 = G__19403;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18754);
if(temp__5804__auto__){
var seq__18754__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18754__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18754__$1);
var G__19406 = cljs.core.chunk_rest(seq__18754__$1);
var G__19407 = c__5525__auto__;
var G__19408 = cljs.core.count(c__5525__auto__);
var G__19409 = (0);
seq__18754 = G__19406;
chunk__18755 = G__19407;
count__18756 = G__19408;
i__18757 = G__19409;
continue;
} else {
var n = cljs.core.first(seq__18754__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__19410 = cljs.core.next(seq__18754__$1);
var G__19411 = null;
var G__19412 = (0);
var G__19413 = (0);
seq__18754 = G__19410;
chunk__18755 = G__19411;
count__18756 = G__19412;
i__18757 = G__19413;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__18766 = arguments.length;
switch (G__18766) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__18774 = arguments.length;
switch (G__18774) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__18782 = arguments.length;
switch (G__18782) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5002__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5732__auto__ = [];
var len__5726__auto___19426 = arguments.length;
var i__5727__auto___19427 = (0);
while(true){
if((i__5727__auto___19427 < len__5726__auto___19426)){
args__5732__auto__.push((arguments[i__5727__auto___19427]));

var G__19428 = (i__5727__auto___19427 + (1));
i__5727__auto___19427 = G__19428;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__18790_19430 = cljs.core.seq(nodes);
var chunk__18791_19431 = null;
var count__18792_19432 = (0);
var i__18793_19433 = (0);
while(true){
if((i__18793_19433 < count__18792_19432)){
var node_19434 = chunk__18791_19431.cljs$core$IIndexed$_nth$arity$2(null, i__18793_19433);
fragment.appendChild(shadow.dom._to_dom(node_19434));


var G__19435 = seq__18790_19430;
var G__19436 = chunk__18791_19431;
var G__19437 = count__18792_19432;
var G__19438 = (i__18793_19433 + (1));
seq__18790_19430 = G__19435;
chunk__18791_19431 = G__19436;
count__18792_19432 = G__19437;
i__18793_19433 = G__19438;
continue;
} else {
var temp__5804__auto___19439 = cljs.core.seq(seq__18790_19430);
if(temp__5804__auto___19439){
var seq__18790_19440__$1 = temp__5804__auto___19439;
if(cljs.core.chunked_seq_QMARK_(seq__18790_19440__$1)){
var c__5525__auto___19441 = cljs.core.chunk_first(seq__18790_19440__$1);
var G__19442 = cljs.core.chunk_rest(seq__18790_19440__$1);
var G__19443 = c__5525__auto___19441;
var G__19444 = cljs.core.count(c__5525__auto___19441);
var G__19445 = (0);
seq__18790_19430 = G__19442;
chunk__18791_19431 = G__19443;
count__18792_19432 = G__19444;
i__18793_19433 = G__19445;
continue;
} else {
var node_19446 = cljs.core.first(seq__18790_19440__$1);
fragment.appendChild(shadow.dom._to_dom(node_19446));


var G__19447 = cljs.core.next(seq__18790_19440__$1);
var G__19448 = null;
var G__19449 = (0);
var G__19450 = (0);
seq__18790_19430 = G__19447;
chunk__18791_19431 = G__19448;
count__18792_19432 = G__19449;
i__18793_19433 = G__19450;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq18786){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18786));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__18801_19452 = cljs.core.seq(scripts);
var chunk__18802_19453 = null;
var count__18803_19454 = (0);
var i__18804_19455 = (0);
while(true){
if((i__18804_19455 < count__18803_19454)){
var vec__18814_19456 = chunk__18802_19453.cljs$core$IIndexed$_nth$arity$2(null, i__18804_19455);
var script_tag_19457 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18814_19456,(0),null);
var script_body_19458 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18814_19456,(1),null);
eval(script_body_19458);


var G__19459 = seq__18801_19452;
var G__19460 = chunk__18802_19453;
var G__19461 = count__18803_19454;
var G__19462 = (i__18804_19455 + (1));
seq__18801_19452 = G__19459;
chunk__18802_19453 = G__19460;
count__18803_19454 = G__19461;
i__18804_19455 = G__19462;
continue;
} else {
var temp__5804__auto___19463 = cljs.core.seq(seq__18801_19452);
if(temp__5804__auto___19463){
var seq__18801_19464__$1 = temp__5804__auto___19463;
if(cljs.core.chunked_seq_QMARK_(seq__18801_19464__$1)){
var c__5525__auto___19466 = cljs.core.chunk_first(seq__18801_19464__$1);
var G__19467 = cljs.core.chunk_rest(seq__18801_19464__$1);
var G__19468 = c__5525__auto___19466;
var G__19469 = cljs.core.count(c__5525__auto___19466);
var G__19470 = (0);
seq__18801_19452 = G__19467;
chunk__18802_19453 = G__19468;
count__18803_19454 = G__19469;
i__18804_19455 = G__19470;
continue;
} else {
var vec__18817_19471 = cljs.core.first(seq__18801_19464__$1);
var script_tag_19472 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18817_19471,(0),null);
var script_body_19473 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18817_19471,(1),null);
eval(script_body_19473);


var G__19474 = cljs.core.next(seq__18801_19464__$1);
var G__19475 = null;
var G__19476 = (0);
var G__19477 = (0);
seq__18801_19452 = G__19474;
chunk__18802_19453 = G__19475;
count__18803_19454 = G__19476;
i__18804_19455 = G__19477;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__18820){
var vec__18821 = p__18820;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18821,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18821,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__18832 = arguments.length;
switch (G__18832) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__18839 = cljs.core.seq(style_keys);
var chunk__18840 = null;
var count__18841 = (0);
var i__18842 = (0);
while(true){
if((i__18842 < count__18841)){
var it = chunk__18840.cljs$core$IIndexed$_nth$arity$2(null, i__18842);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19512 = seq__18839;
var G__19513 = chunk__18840;
var G__19514 = count__18841;
var G__19515 = (i__18842 + (1));
seq__18839 = G__19512;
chunk__18840 = G__19513;
count__18841 = G__19514;
i__18842 = G__19515;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18839);
if(temp__5804__auto__){
var seq__18839__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18839__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18839__$1);
var G__19517 = cljs.core.chunk_rest(seq__18839__$1);
var G__19518 = c__5525__auto__;
var G__19519 = cljs.core.count(c__5525__auto__);
var G__19520 = (0);
seq__18839 = G__19517;
chunk__18840 = G__19518;
count__18841 = G__19519;
i__18842 = G__19520;
continue;
} else {
var it = cljs.core.first(seq__18839__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19521 = cljs.core.next(seq__18839__$1);
var G__19522 = null;
var G__19523 = (0);
var G__19524 = (0);
seq__18839 = G__19521;
chunk__18840 = G__19522;
count__18841 = G__19523;
i__18842 = G__19524;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k18845,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__18850 = k18845;
var G__18850__$1 = (((G__18850 instanceof cljs.core.Keyword))?G__18850.fqn:null);
switch (G__18850__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18845,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__18854){
var vec__18855 = p__18854;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18855,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18855,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18844){
var self__ = this;
var G__18844__$1 = this;
return (new cljs.core.RecordIter((0),G__18844__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18846,other18847){
var self__ = this;
var this18846__$1 = this;
return (((!((other18847 == null)))) && ((((this18846__$1.constructor === other18847.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18846__$1.x,other18847.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18846__$1.y,other18847.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18846__$1.__extmap,other18847.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k18845){
var self__ = this;
var this__5307__auto____$1 = this;
var G__18889 = k18845;
var G__18889__$1 = (((G__18889 instanceof cljs.core.Keyword))?G__18889.fqn:null);
switch (G__18889__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k18845);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__18844){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__18907 = cljs.core.keyword_identical_QMARK_;
var expr__18908 = k__5309__auto__;
if(cljs.core.truth_((pred__18907.cljs$core$IFn$_invoke$arity$2 ? pred__18907.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__18908) : pred__18907.call(null, new cljs.core.Keyword(null,"x","x",2099068185),expr__18908)))){
return (new shadow.dom.Coordinate(G__18844,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18907.cljs$core$IFn$_invoke$arity$2 ? pred__18907.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__18908) : pred__18907.call(null, new cljs.core.Keyword(null,"y","y",-1757859776),expr__18908)))){
return (new shadow.dom.Coordinate(self__.x,G__18844,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__18844),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__18844){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__18844,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__18848){
var extmap__5342__auto__ = (function (){var G__18943 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18848,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__18848)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18943);
} else {
return G__18943;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__18848),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__18848),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k18958,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__18964 = k18958;
var G__18964__$1 = (((G__18964 instanceof cljs.core.Keyword))?G__18964.fqn:null);
switch (G__18964__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18958,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__18967){
var vec__18968 = p__18967;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18968,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18968,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Size{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18957){
var self__ = this;
var G__18957__$1 = this;
return (new cljs.core.RecordIter((0),G__18957__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18959,other18960){
var self__ = this;
var this18959__$1 = this;
return (((!((other18960 == null)))) && ((((this18959__$1.constructor === other18960.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18959__$1.w,other18960.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18959__$1.h,other18960.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18959__$1.__extmap,other18960.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k18958){
var self__ = this;
var this__5307__auto____$1 = this;
var G__18973 = k18958;
var G__18973__$1 = (((G__18973 instanceof cljs.core.Keyword))?G__18973.fqn:null);
switch (G__18973__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k18958);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__18957){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__18975 = cljs.core.keyword_identical_QMARK_;
var expr__18976 = k__5309__auto__;
if(cljs.core.truth_((pred__18975.cljs$core$IFn$_invoke$arity$2 ? pred__18975.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__18976) : pred__18975.call(null, new cljs.core.Keyword(null,"w","w",354169001),expr__18976)))){
return (new shadow.dom.Size(G__18957,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18975.cljs$core$IFn$_invoke$arity$2 ? pred__18975.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__18976) : pred__18975.call(null, new cljs.core.Keyword(null,"h","h",1109658740),expr__18976)))){
return (new shadow.dom.Size(self__.w,G__18957,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__18957),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__18957){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__18957,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__18962){
var extmap__5342__auto__ = (function (){var G__18982 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18962,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__18962)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18982);
} else {
return G__18982;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__18962),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__18962),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5590__auto__ = opts;
var l__5591__auto__ = a__5590__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5591__auto__)){
var G__19595 = (i + (1));
var G__19596 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__19595;
ret = G__19596;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__18993){
var vec__18994 = p__18993;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18994,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18994,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__19003 = arguments.length;
switch (G__19003) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__19609 = ps;
var G__19610 = (i + (1));
el__$1 = G__19609;
i = G__19610;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null, parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__19031 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19031,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19031,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19031,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__19035_19615 = cljs.core.seq(props);
var chunk__19036_19616 = null;
var count__19037_19617 = (0);
var i__19038_19618 = (0);
while(true){
if((i__19038_19618 < count__19037_19617)){
var vec__19049_19619 = chunk__19036_19616.cljs$core$IIndexed$_nth$arity$2(null, i__19038_19618);
var k_19620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19049_19619,(0),null);
var v_19621 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19049_19619,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_19620);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19620),v_19621);


var G__19623 = seq__19035_19615;
var G__19624 = chunk__19036_19616;
var G__19625 = count__19037_19617;
var G__19626 = (i__19038_19618 + (1));
seq__19035_19615 = G__19623;
chunk__19036_19616 = G__19624;
count__19037_19617 = G__19625;
i__19038_19618 = G__19626;
continue;
} else {
var temp__5804__auto___19627 = cljs.core.seq(seq__19035_19615);
if(temp__5804__auto___19627){
var seq__19035_19629__$1 = temp__5804__auto___19627;
if(cljs.core.chunked_seq_QMARK_(seq__19035_19629__$1)){
var c__5525__auto___19630 = cljs.core.chunk_first(seq__19035_19629__$1);
var G__19631 = cljs.core.chunk_rest(seq__19035_19629__$1);
var G__19632 = c__5525__auto___19630;
var G__19633 = cljs.core.count(c__5525__auto___19630);
var G__19634 = (0);
seq__19035_19615 = G__19631;
chunk__19036_19616 = G__19632;
count__19037_19617 = G__19633;
i__19038_19618 = G__19634;
continue;
} else {
var vec__19052_19635 = cljs.core.first(seq__19035_19629__$1);
var k_19636 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19052_19635,(0),null);
var v_19637 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19052_19635,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_19636);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19636),v_19637);


var G__19638 = cljs.core.next(seq__19035_19629__$1);
var G__19639 = null;
var G__19640 = (0);
var G__19641 = (0);
seq__19035_19615 = G__19638;
chunk__19036_19616 = G__19639;
count__19037_19617 = G__19640;
i__19038_19618 = G__19641;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null, );
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__19061 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19061,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19061,(1),null);
var seq__19064_19656 = cljs.core.seq(node_children);
var chunk__19067_19657 = null;
var count__19068_19658 = (0);
var i__19069_19659 = (0);
while(true){
if((i__19069_19659 < count__19068_19658)){
var child_struct_19663 = chunk__19067_19657.cljs$core$IIndexed$_nth$arity$2(null, i__19069_19659);
if((!((child_struct_19663 == null)))){
if(typeof child_struct_19663 === 'string'){
var text_19668 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19668),child_struct_19663].join(''));
} else {
var children_19671 = shadow.dom.svg_node(child_struct_19663);
if(cljs.core.seq_QMARK_(children_19671)){
var seq__19095_19672 = cljs.core.seq(children_19671);
var chunk__19097_19673 = null;
var count__19098_19674 = (0);
var i__19099_19675 = (0);
while(true){
if((i__19099_19675 < count__19098_19674)){
var child_19680 = chunk__19097_19673.cljs$core$IIndexed$_nth$arity$2(null, i__19099_19675);
if(cljs.core.truth_(child_19680)){
node.appendChild(child_19680);


var G__19681 = seq__19095_19672;
var G__19682 = chunk__19097_19673;
var G__19683 = count__19098_19674;
var G__19684 = (i__19099_19675 + (1));
seq__19095_19672 = G__19681;
chunk__19097_19673 = G__19682;
count__19098_19674 = G__19683;
i__19099_19675 = G__19684;
continue;
} else {
var G__19685 = seq__19095_19672;
var G__19686 = chunk__19097_19673;
var G__19687 = count__19098_19674;
var G__19688 = (i__19099_19675 + (1));
seq__19095_19672 = G__19685;
chunk__19097_19673 = G__19686;
count__19098_19674 = G__19687;
i__19099_19675 = G__19688;
continue;
}
} else {
var temp__5804__auto___19689 = cljs.core.seq(seq__19095_19672);
if(temp__5804__auto___19689){
var seq__19095_19690__$1 = temp__5804__auto___19689;
if(cljs.core.chunked_seq_QMARK_(seq__19095_19690__$1)){
var c__5525__auto___19691 = cljs.core.chunk_first(seq__19095_19690__$1);
var G__19694 = cljs.core.chunk_rest(seq__19095_19690__$1);
var G__19695 = c__5525__auto___19691;
var G__19696 = cljs.core.count(c__5525__auto___19691);
var G__19697 = (0);
seq__19095_19672 = G__19694;
chunk__19097_19673 = G__19695;
count__19098_19674 = G__19696;
i__19099_19675 = G__19697;
continue;
} else {
var child_19698 = cljs.core.first(seq__19095_19690__$1);
if(cljs.core.truth_(child_19698)){
node.appendChild(child_19698);


var G__19699 = cljs.core.next(seq__19095_19690__$1);
var G__19700 = null;
var G__19701 = (0);
var G__19702 = (0);
seq__19095_19672 = G__19699;
chunk__19097_19673 = G__19700;
count__19098_19674 = G__19701;
i__19099_19675 = G__19702;
continue;
} else {
var G__19703 = cljs.core.next(seq__19095_19690__$1);
var G__19704 = null;
var G__19705 = (0);
var G__19706 = (0);
seq__19095_19672 = G__19703;
chunk__19097_19673 = G__19704;
count__19098_19674 = G__19705;
i__19099_19675 = G__19706;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19671);
}
}


var G__19707 = seq__19064_19656;
var G__19708 = chunk__19067_19657;
var G__19709 = count__19068_19658;
var G__19710 = (i__19069_19659 + (1));
seq__19064_19656 = G__19707;
chunk__19067_19657 = G__19708;
count__19068_19658 = G__19709;
i__19069_19659 = G__19710;
continue;
} else {
var G__19711 = seq__19064_19656;
var G__19712 = chunk__19067_19657;
var G__19713 = count__19068_19658;
var G__19714 = (i__19069_19659 + (1));
seq__19064_19656 = G__19711;
chunk__19067_19657 = G__19712;
count__19068_19658 = G__19713;
i__19069_19659 = G__19714;
continue;
}
} else {
var temp__5804__auto___19715 = cljs.core.seq(seq__19064_19656);
if(temp__5804__auto___19715){
var seq__19064_19716__$1 = temp__5804__auto___19715;
if(cljs.core.chunked_seq_QMARK_(seq__19064_19716__$1)){
var c__5525__auto___19717 = cljs.core.chunk_first(seq__19064_19716__$1);
var G__19718 = cljs.core.chunk_rest(seq__19064_19716__$1);
var G__19719 = c__5525__auto___19717;
var G__19720 = cljs.core.count(c__5525__auto___19717);
var G__19721 = (0);
seq__19064_19656 = G__19718;
chunk__19067_19657 = G__19719;
count__19068_19658 = G__19720;
i__19069_19659 = G__19721;
continue;
} else {
var child_struct_19722 = cljs.core.first(seq__19064_19716__$1);
if((!((child_struct_19722 == null)))){
if(typeof child_struct_19722 === 'string'){
var text_19724 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19724),child_struct_19722].join(''));
} else {
var children_19725 = shadow.dom.svg_node(child_struct_19722);
if(cljs.core.seq_QMARK_(children_19725)){
var seq__19112_19727 = cljs.core.seq(children_19725);
var chunk__19114_19728 = null;
var count__19115_19729 = (0);
var i__19116_19730 = (0);
while(true){
if((i__19116_19730 < count__19115_19729)){
var child_19734 = chunk__19114_19728.cljs$core$IIndexed$_nth$arity$2(null, i__19116_19730);
if(cljs.core.truth_(child_19734)){
node.appendChild(child_19734);


var G__19737 = seq__19112_19727;
var G__19738 = chunk__19114_19728;
var G__19739 = count__19115_19729;
var G__19740 = (i__19116_19730 + (1));
seq__19112_19727 = G__19737;
chunk__19114_19728 = G__19738;
count__19115_19729 = G__19739;
i__19116_19730 = G__19740;
continue;
} else {
var G__19742 = seq__19112_19727;
var G__19743 = chunk__19114_19728;
var G__19744 = count__19115_19729;
var G__19745 = (i__19116_19730 + (1));
seq__19112_19727 = G__19742;
chunk__19114_19728 = G__19743;
count__19115_19729 = G__19744;
i__19116_19730 = G__19745;
continue;
}
} else {
var temp__5804__auto___19746__$1 = cljs.core.seq(seq__19112_19727);
if(temp__5804__auto___19746__$1){
var seq__19112_19747__$1 = temp__5804__auto___19746__$1;
if(cljs.core.chunked_seq_QMARK_(seq__19112_19747__$1)){
var c__5525__auto___19748 = cljs.core.chunk_first(seq__19112_19747__$1);
var G__19750 = cljs.core.chunk_rest(seq__19112_19747__$1);
var G__19751 = c__5525__auto___19748;
var G__19752 = cljs.core.count(c__5525__auto___19748);
var G__19753 = (0);
seq__19112_19727 = G__19750;
chunk__19114_19728 = G__19751;
count__19115_19729 = G__19752;
i__19116_19730 = G__19753;
continue;
} else {
var child_19755 = cljs.core.first(seq__19112_19747__$1);
if(cljs.core.truth_(child_19755)){
node.appendChild(child_19755);


var G__19760 = cljs.core.next(seq__19112_19747__$1);
var G__19761 = null;
var G__19762 = (0);
var G__19763 = (0);
seq__19112_19727 = G__19760;
chunk__19114_19728 = G__19761;
count__19115_19729 = G__19762;
i__19116_19730 = G__19763;
continue;
} else {
var G__19768 = cljs.core.next(seq__19112_19747__$1);
var G__19769 = null;
var G__19770 = (0);
var G__19771 = (0);
seq__19112_19727 = G__19768;
chunk__19114_19728 = G__19769;
count__19115_19729 = G__19770;
i__19116_19730 = G__19771;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19725);
}
}


var G__19776 = cljs.core.next(seq__19064_19716__$1);
var G__19777 = null;
var G__19778 = (0);
var G__19779 = (0);
seq__19064_19656 = G__19776;
chunk__19067_19657 = G__19777;
count__19068_19658 = G__19778;
i__19069_19659 = G__19779;
continue;
} else {
var G__19780 = cljs.core.next(seq__19064_19716__$1);
var G__19781 = null;
var G__19782 = (0);
var G__19783 = (0);
seq__19064_19656 = G__19780;
chunk__19067_19657 = G__19781;
count__19068_19658 = G__19782;
i__19069_19659 = G__19783;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___19788 = arguments.length;
var i__5727__auto___19789 = (0);
while(true){
if((i__5727__auto___19789 < len__5726__auto___19788)){
args__5732__auto__.push((arguments[i__5727__auto___19789]));

var G__19791 = (i__5727__auto___19789 + (1));
i__5727__auto___19789 = G__19791;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq19130){
var G__19131 = cljs.core.first(seq19130);
var seq19130__$1 = cljs.core.next(seq19130);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19131,seq19130__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
