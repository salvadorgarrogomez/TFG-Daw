goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_16546 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_16546(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_16555 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_16555(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__15376 = coll;
var G__15377 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__15376,G__15377) : shadow.dom.lazy_native_coll_seq.call(null, G__15376,G__15377));
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
var G__15407 = arguments.length;
switch (G__15407) {
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
var G__15457 = arguments.length;
switch (G__15457) {
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
var G__15468 = arguments.length;
switch (G__15468) {
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
var G__15477 = arguments.length;
switch (G__15477) {
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
var G__15500 = arguments.length;
switch (G__15500) {
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
var G__15508 = arguments.length;
switch (G__15508) {
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
}catch (e15513){if((e15513 instanceof Object)){
var e = e15513;
return console.log("didnt support attachEvent",el,e);
} else {
throw e15513;

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
var seq__15516 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__15517 = null;
var count__15518 = (0);
var i__15519 = (0);
while(true){
if((i__15519 < count__15518)){
var el = chunk__15517.cljs$core$IIndexed$_nth$arity$2(null, i__15519);
var handler_16573__$1 = ((function (seq__15516,chunk__15517,count__15518,i__15519,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__15516,chunk__15517,count__15518,i__15519,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_16573__$1);


var G__16574 = seq__15516;
var G__16575 = chunk__15517;
var G__16576 = count__15518;
var G__16577 = (i__15519 + (1));
seq__15516 = G__16574;
chunk__15517 = G__16575;
count__15518 = G__16576;
i__15519 = G__16577;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__15516);
if(temp__5804__auto__){
var seq__15516__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15516__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__15516__$1);
var G__16579 = cljs.core.chunk_rest(seq__15516__$1);
var G__16580 = c__5525__auto__;
var G__16581 = cljs.core.count(c__5525__auto__);
var G__16582 = (0);
seq__15516 = G__16579;
chunk__15517 = G__16580;
count__15518 = G__16581;
i__15519 = G__16582;
continue;
} else {
var el = cljs.core.first(seq__15516__$1);
var handler_16583__$1 = ((function (seq__15516,chunk__15517,count__15518,i__15519,el,seq__15516__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__15516,chunk__15517,count__15518,i__15519,el,seq__15516__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_16583__$1);


var G__16584 = cljs.core.next(seq__15516__$1);
var G__16585 = null;
var G__16586 = (0);
var G__16587 = (0);
seq__15516 = G__16584;
chunk__15517 = G__16585;
count__15518 = G__16586;
i__15519 = G__16587;
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
var G__15540 = arguments.length;
switch (G__15540) {
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
var seq__15553 = cljs.core.seq(events);
var chunk__15554 = null;
var count__15555 = (0);
var i__15556 = (0);
while(true){
if((i__15556 < count__15555)){
var vec__15569 = chunk__15554.cljs$core$IIndexed$_nth$arity$2(null, i__15556);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15569,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15569,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__16591 = seq__15553;
var G__16592 = chunk__15554;
var G__16593 = count__15555;
var G__16594 = (i__15556 + (1));
seq__15553 = G__16591;
chunk__15554 = G__16592;
count__15555 = G__16593;
i__15556 = G__16594;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__15553);
if(temp__5804__auto__){
var seq__15553__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15553__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__15553__$1);
var G__16595 = cljs.core.chunk_rest(seq__15553__$1);
var G__16596 = c__5525__auto__;
var G__16597 = cljs.core.count(c__5525__auto__);
var G__16598 = (0);
seq__15553 = G__16595;
chunk__15554 = G__16596;
count__15555 = G__16597;
i__15556 = G__16598;
continue;
} else {
var vec__15577 = cljs.core.first(seq__15553__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15577,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15577,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__16600 = cljs.core.next(seq__15553__$1);
var G__16601 = null;
var G__16602 = (0);
var G__16603 = (0);
seq__15553 = G__16600;
chunk__15554 = G__16601;
count__15555 = G__16602;
i__15556 = G__16603;
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
var seq__15582 = cljs.core.seq(styles);
var chunk__15583 = null;
var count__15584 = (0);
var i__15585 = (0);
while(true){
if((i__15585 < count__15584)){
var vec__15599 = chunk__15583.cljs$core$IIndexed$_nth$arity$2(null, i__15585);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15599,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15599,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__16604 = seq__15582;
var G__16605 = chunk__15583;
var G__16606 = count__15584;
var G__16607 = (i__15585 + (1));
seq__15582 = G__16604;
chunk__15583 = G__16605;
count__15584 = G__16606;
i__15585 = G__16607;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__15582);
if(temp__5804__auto__){
var seq__15582__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15582__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__15582__$1);
var G__16608 = cljs.core.chunk_rest(seq__15582__$1);
var G__16609 = c__5525__auto__;
var G__16610 = cljs.core.count(c__5525__auto__);
var G__16611 = (0);
seq__15582 = G__16608;
chunk__15583 = G__16609;
count__15584 = G__16610;
i__15585 = G__16611;
continue;
} else {
var vec__15609 = cljs.core.first(seq__15582__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15609,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15609,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__16612 = cljs.core.next(seq__15582__$1);
var G__16613 = null;
var G__16614 = (0);
var G__16615 = (0);
seq__15582 = G__16612;
chunk__15583 = G__16613;
count__15584 = G__16614;
i__15585 = G__16615;
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
var G__15621_16616 = key;
var G__15621_16617__$1 = (((G__15621_16616 instanceof cljs.core.Keyword))?G__15621_16616.fqn:null);
switch (G__15621_16617__$1) {
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
var ks_16620 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_16620,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_16620,"aria-");
}
})())){
el.setAttribute(ks_16620,value);
} else {
(el[ks_16620] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__15641){
var map__15642 = p__15641;
var map__15642__$1 = cljs.core.__destructure_map(map__15642);
var props = map__15642__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15642__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__15646 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15646,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15646,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15646,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__15649 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__15649,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__15649;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__15655 = arguments.length;
switch (G__15655) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__15660){
var vec__15661 = p__15660;
var seq__15662 = cljs.core.seq(vec__15661);
var first__15663 = cljs.core.first(seq__15662);
var seq__15662__$1 = cljs.core.next(seq__15662);
var nn = first__15663;
var first__15663__$1 = cljs.core.first(seq__15662__$1);
var seq__15662__$2 = cljs.core.next(seq__15662__$1);
var np = first__15663__$1;
var nc = seq__15662__$2;
var node = vec__15661;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__15664 = nn;
var G__15665 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__15664,G__15665) : create_fn.call(null, G__15664,G__15665));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null, nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__15666 = nn;
var G__15667 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__15666,G__15667) : create_fn.call(null, G__15666,G__15667));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__15668 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15668,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15668,(1),null);
var seq__15671_16634 = cljs.core.seq(node_children);
var chunk__15672_16635 = null;
var count__15673_16636 = (0);
var i__15674_16637 = (0);
while(true){
if((i__15674_16637 < count__15673_16636)){
var child_struct_16638 = chunk__15672_16635.cljs$core$IIndexed$_nth$arity$2(null, i__15674_16637);
var children_16640 = shadow.dom.dom_node(child_struct_16638);
if(cljs.core.seq_QMARK_(children_16640)){
var seq__15702_16641 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_16640));
var chunk__15704_16642 = null;
var count__15705_16643 = (0);
var i__15706_16644 = (0);
while(true){
if((i__15706_16644 < count__15705_16643)){
var child_16646 = chunk__15704_16642.cljs$core$IIndexed$_nth$arity$2(null, i__15706_16644);
if(cljs.core.truth_(child_16646)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16646);


var G__16647 = seq__15702_16641;
var G__16648 = chunk__15704_16642;
var G__16649 = count__15705_16643;
var G__16650 = (i__15706_16644 + (1));
seq__15702_16641 = G__16647;
chunk__15704_16642 = G__16648;
count__15705_16643 = G__16649;
i__15706_16644 = G__16650;
continue;
} else {
var G__16651 = seq__15702_16641;
var G__16652 = chunk__15704_16642;
var G__16653 = count__15705_16643;
var G__16654 = (i__15706_16644 + (1));
seq__15702_16641 = G__16651;
chunk__15704_16642 = G__16652;
count__15705_16643 = G__16653;
i__15706_16644 = G__16654;
continue;
}
} else {
var temp__5804__auto___16655 = cljs.core.seq(seq__15702_16641);
if(temp__5804__auto___16655){
var seq__15702_16656__$1 = temp__5804__auto___16655;
if(cljs.core.chunked_seq_QMARK_(seq__15702_16656__$1)){
var c__5525__auto___16657 = cljs.core.chunk_first(seq__15702_16656__$1);
var G__16658 = cljs.core.chunk_rest(seq__15702_16656__$1);
var G__16659 = c__5525__auto___16657;
var G__16660 = cljs.core.count(c__5525__auto___16657);
var G__16661 = (0);
seq__15702_16641 = G__16658;
chunk__15704_16642 = G__16659;
count__15705_16643 = G__16660;
i__15706_16644 = G__16661;
continue;
} else {
var child_16662 = cljs.core.first(seq__15702_16656__$1);
if(cljs.core.truth_(child_16662)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16662);


var G__16663 = cljs.core.next(seq__15702_16656__$1);
var G__16664 = null;
var G__16665 = (0);
var G__16666 = (0);
seq__15702_16641 = G__16663;
chunk__15704_16642 = G__16664;
count__15705_16643 = G__16665;
i__15706_16644 = G__16666;
continue;
} else {
var G__16667 = cljs.core.next(seq__15702_16656__$1);
var G__16668 = null;
var G__16669 = (0);
var G__16670 = (0);
seq__15702_16641 = G__16667;
chunk__15704_16642 = G__16668;
count__15705_16643 = G__16669;
i__15706_16644 = G__16670;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_16640);
}


var G__16671 = seq__15671_16634;
var G__16672 = chunk__15672_16635;
var G__16673 = count__15673_16636;
var G__16674 = (i__15674_16637 + (1));
seq__15671_16634 = G__16671;
chunk__15672_16635 = G__16672;
count__15673_16636 = G__16673;
i__15674_16637 = G__16674;
continue;
} else {
var temp__5804__auto___16675 = cljs.core.seq(seq__15671_16634);
if(temp__5804__auto___16675){
var seq__15671_16676__$1 = temp__5804__auto___16675;
if(cljs.core.chunked_seq_QMARK_(seq__15671_16676__$1)){
var c__5525__auto___16677 = cljs.core.chunk_first(seq__15671_16676__$1);
var G__16678 = cljs.core.chunk_rest(seq__15671_16676__$1);
var G__16679 = c__5525__auto___16677;
var G__16680 = cljs.core.count(c__5525__auto___16677);
var G__16681 = (0);
seq__15671_16634 = G__16678;
chunk__15672_16635 = G__16679;
count__15673_16636 = G__16680;
i__15674_16637 = G__16681;
continue;
} else {
var child_struct_16682 = cljs.core.first(seq__15671_16676__$1);
var children_16683 = shadow.dom.dom_node(child_struct_16682);
if(cljs.core.seq_QMARK_(children_16683)){
var seq__15709_16684 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_16683));
var chunk__15711_16685 = null;
var count__15712_16686 = (0);
var i__15713_16687 = (0);
while(true){
if((i__15713_16687 < count__15712_16686)){
var child_16688 = chunk__15711_16685.cljs$core$IIndexed$_nth$arity$2(null, i__15713_16687);
if(cljs.core.truth_(child_16688)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16688);


var G__16689 = seq__15709_16684;
var G__16690 = chunk__15711_16685;
var G__16691 = count__15712_16686;
var G__16692 = (i__15713_16687 + (1));
seq__15709_16684 = G__16689;
chunk__15711_16685 = G__16690;
count__15712_16686 = G__16691;
i__15713_16687 = G__16692;
continue;
} else {
var G__16693 = seq__15709_16684;
var G__16694 = chunk__15711_16685;
var G__16695 = count__15712_16686;
var G__16696 = (i__15713_16687 + (1));
seq__15709_16684 = G__16693;
chunk__15711_16685 = G__16694;
count__15712_16686 = G__16695;
i__15713_16687 = G__16696;
continue;
}
} else {
var temp__5804__auto___16699__$1 = cljs.core.seq(seq__15709_16684);
if(temp__5804__auto___16699__$1){
var seq__15709_16700__$1 = temp__5804__auto___16699__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15709_16700__$1)){
var c__5525__auto___16701 = cljs.core.chunk_first(seq__15709_16700__$1);
var G__16702 = cljs.core.chunk_rest(seq__15709_16700__$1);
var G__16703 = c__5525__auto___16701;
var G__16704 = cljs.core.count(c__5525__auto___16701);
var G__16705 = (0);
seq__15709_16684 = G__16702;
chunk__15711_16685 = G__16703;
count__15712_16686 = G__16704;
i__15713_16687 = G__16705;
continue;
} else {
var child_16706 = cljs.core.first(seq__15709_16700__$1);
if(cljs.core.truth_(child_16706)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16706);


var G__16707 = cljs.core.next(seq__15709_16700__$1);
var G__16708 = null;
var G__16709 = (0);
var G__16710 = (0);
seq__15709_16684 = G__16707;
chunk__15711_16685 = G__16708;
count__15712_16686 = G__16709;
i__15713_16687 = G__16710;
continue;
} else {
var G__16711 = cljs.core.next(seq__15709_16700__$1);
var G__16712 = null;
var G__16713 = (0);
var G__16714 = (0);
seq__15709_16684 = G__16711;
chunk__15711_16685 = G__16712;
count__15712_16686 = G__16713;
i__15713_16687 = G__16714;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_16683);
}


var G__16715 = cljs.core.next(seq__15671_16676__$1);
var G__16716 = null;
var G__16717 = (0);
var G__16718 = (0);
seq__15671_16634 = G__16715;
chunk__15672_16635 = G__16716;
count__15673_16636 = G__16717;
i__15674_16637 = G__16718;
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
var seq__15779 = cljs.core.seq(node);
var chunk__15780 = null;
var count__15781 = (0);
var i__15782 = (0);
while(true){
if((i__15782 < count__15781)){
var n = chunk__15780.cljs$core$IIndexed$_nth$arity$2(null, i__15782);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__16720 = seq__15779;
var G__16721 = chunk__15780;
var G__16722 = count__15781;
var G__16723 = (i__15782 + (1));
seq__15779 = G__16720;
chunk__15780 = G__16721;
count__15781 = G__16722;
i__15782 = G__16723;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__15779);
if(temp__5804__auto__){
var seq__15779__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15779__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__15779__$1);
var G__16725 = cljs.core.chunk_rest(seq__15779__$1);
var G__16726 = c__5525__auto__;
var G__16727 = cljs.core.count(c__5525__auto__);
var G__16728 = (0);
seq__15779 = G__16725;
chunk__15780 = G__16726;
count__15781 = G__16727;
i__15782 = G__16728;
continue;
} else {
var n = cljs.core.first(seq__15779__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__16729 = cljs.core.next(seq__15779__$1);
var G__16730 = null;
var G__16731 = (0);
var G__16732 = (0);
seq__15779 = G__16729;
chunk__15780 = G__16730;
count__15781 = G__16731;
i__15782 = G__16732;
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
var G__15833 = arguments.length;
switch (G__15833) {
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
var G__15841 = arguments.length;
switch (G__15841) {
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
var G__15868 = arguments.length;
switch (G__15868) {
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
var len__5726__auto___16742 = arguments.length;
var i__5727__auto___16743 = (0);
while(true){
if((i__5727__auto___16743 < len__5726__auto___16742)){
args__5732__auto__.push((arguments[i__5727__auto___16743]));

var G__16744 = (i__5727__auto___16743 + (1));
i__5727__auto___16743 = G__16744;
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
var seq__15925_16745 = cljs.core.seq(nodes);
var chunk__15926_16746 = null;
var count__15927_16747 = (0);
var i__15928_16748 = (0);
while(true){
if((i__15928_16748 < count__15927_16747)){
var node_16749 = chunk__15926_16746.cljs$core$IIndexed$_nth$arity$2(null, i__15928_16748);
fragment.appendChild(shadow.dom._to_dom(node_16749));


var G__16750 = seq__15925_16745;
var G__16751 = chunk__15926_16746;
var G__16752 = count__15927_16747;
var G__16753 = (i__15928_16748 + (1));
seq__15925_16745 = G__16750;
chunk__15926_16746 = G__16751;
count__15927_16747 = G__16752;
i__15928_16748 = G__16753;
continue;
} else {
var temp__5804__auto___16754 = cljs.core.seq(seq__15925_16745);
if(temp__5804__auto___16754){
var seq__15925_16756__$1 = temp__5804__auto___16754;
if(cljs.core.chunked_seq_QMARK_(seq__15925_16756__$1)){
var c__5525__auto___16757 = cljs.core.chunk_first(seq__15925_16756__$1);
var G__16758 = cljs.core.chunk_rest(seq__15925_16756__$1);
var G__16759 = c__5525__auto___16757;
var G__16760 = cljs.core.count(c__5525__auto___16757);
var G__16761 = (0);
seq__15925_16745 = G__16758;
chunk__15926_16746 = G__16759;
count__15927_16747 = G__16760;
i__15928_16748 = G__16761;
continue;
} else {
var node_16762 = cljs.core.first(seq__15925_16756__$1);
fragment.appendChild(shadow.dom._to_dom(node_16762));


var G__16765 = cljs.core.next(seq__15925_16756__$1);
var G__16766 = null;
var G__16767 = (0);
var G__16768 = (0);
seq__15925_16745 = G__16765;
chunk__15926_16746 = G__16766;
count__15927_16747 = G__16767;
i__15928_16748 = G__16768;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq15918){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15918));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__15946_16771 = cljs.core.seq(scripts);
var chunk__15947_16772 = null;
var count__15948_16773 = (0);
var i__15949_16774 = (0);
while(true){
if((i__15949_16774 < count__15948_16773)){
var vec__15960_16778 = chunk__15947_16772.cljs$core$IIndexed$_nth$arity$2(null, i__15949_16774);
var script_tag_16779 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15960_16778,(0),null);
var script_body_16780 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15960_16778,(1),null);
eval(script_body_16780);


var G__16782 = seq__15946_16771;
var G__16783 = chunk__15947_16772;
var G__16784 = count__15948_16773;
var G__16785 = (i__15949_16774 + (1));
seq__15946_16771 = G__16782;
chunk__15947_16772 = G__16783;
count__15948_16773 = G__16784;
i__15949_16774 = G__16785;
continue;
} else {
var temp__5804__auto___16787 = cljs.core.seq(seq__15946_16771);
if(temp__5804__auto___16787){
var seq__15946_16788__$1 = temp__5804__auto___16787;
if(cljs.core.chunked_seq_QMARK_(seq__15946_16788__$1)){
var c__5525__auto___16789 = cljs.core.chunk_first(seq__15946_16788__$1);
var G__16790 = cljs.core.chunk_rest(seq__15946_16788__$1);
var G__16791 = c__5525__auto___16789;
var G__16792 = cljs.core.count(c__5525__auto___16789);
var G__16793 = (0);
seq__15946_16771 = G__16790;
chunk__15947_16772 = G__16791;
count__15948_16773 = G__16792;
i__15949_16774 = G__16793;
continue;
} else {
var vec__15963_16794 = cljs.core.first(seq__15946_16788__$1);
var script_tag_16795 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15963_16794,(0),null);
var script_body_16796 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15963_16794,(1),null);
eval(script_body_16796);


var G__16797 = cljs.core.next(seq__15946_16788__$1);
var G__16798 = null;
var G__16799 = (0);
var G__16800 = (0);
seq__15946_16771 = G__16797;
chunk__15947_16772 = G__16798;
count__15948_16773 = G__16799;
i__15949_16774 = G__16800;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__15971){
var vec__15974 = p__15971;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15974,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15974,(1),null);
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
var G__16003 = arguments.length;
switch (G__16003) {
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
var seq__16035 = cljs.core.seq(style_keys);
var chunk__16036 = null;
var count__16037 = (0);
var i__16038 = (0);
while(true){
if((i__16038 < count__16037)){
var it = chunk__16036.cljs$core$IIndexed$_nth$arity$2(null, i__16038);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__16807 = seq__16035;
var G__16808 = chunk__16036;
var G__16809 = count__16037;
var G__16810 = (i__16038 + (1));
seq__16035 = G__16807;
chunk__16036 = G__16808;
count__16037 = G__16809;
i__16038 = G__16810;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16035);
if(temp__5804__auto__){
var seq__16035__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16035__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__16035__$1);
var G__16811 = cljs.core.chunk_rest(seq__16035__$1);
var G__16812 = c__5525__auto__;
var G__16813 = cljs.core.count(c__5525__auto__);
var G__16814 = (0);
seq__16035 = G__16811;
chunk__16036 = G__16812;
count__16037 = G__16813;
i__16038 = G__16814;
continue;
} else {
var it = cljs.core.first(seq__16035__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__16815 = cljs.core.next(seq__16035__$1);
var G__16816 = null;
var G__16817 = (0);
var G__16818 = (0);
seq__16035 = G__16815;
chunk__16036 = G__16816;
count__16037 = G__16817;
i__16038 = G__16818;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k16044,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__16074 = k16044;
var G__16074__$1 = (((G__16074 instanceof cljs.core.Keyword))?G__16074.fqn:null);
switch (G__16074__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16044,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__16081){
var vec__16082 = p__16081;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16082,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16082,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16043){
var self__ = this;
var G__16043__$1 = this;
return (new cljs.core.RecordIter((0),G__16043__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16045,other16046){
var self__ = this;
var this16045__$1 = this;
return (((!((other16046 == null)))) && ((((this16045__$1.constructor === other16046.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16045__$1.x,other16046.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16045__$1.y,other16046.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16045__$1.__extmap,other16046.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k16044){
var self__ = this;
var this__5307__auto____$1 = this;
var G__16138 = k16044;
var G__16138__$1 = (((G__16138 instanceof cljs.core.Keyword))?G__16138.fqn:null);
switch (G__16138__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k16044);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__16043){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__16144 = cljs.core.keyword_identical_QMARK_;
var expr__16145 = k__5309__auto__;
if(cljs.core.truth_((pred__16144.cljs$core$IFn$_invoke$arity$2 ? pred__16144.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__16145) : pred__16144.call(null, new cljs.core.Keyword(null,"x","x",2099068185),expr__16145)))){
return (new shadow.dom.Coordinate(G__16043,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__16144.cljs$core$IFn$_invoke$arity$2 ? pred__16144.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__16145) : pred__16144.call(null, new cljs.core.Keyword(null,"y","y",-1757859776),expr__16145)))){
return (new shadow.dom.Coordinate(self__.x,G__16043,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__16043),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__16043){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__16043,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__16054){
var extmap__5342__auto__ = (function (){var G__16162 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16054,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__16054)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__16162);
} else {
return G__16162;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__16054),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__16054),null,cljs.core.not_empty(extmap__5342__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k16168,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__16181 = k16168;
var G__16181__$1 = (((G__16181 instanceof cljs.core.Keyword))?G__16181.fqn:null);
switch (G__16181__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16168,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__16186){
var vec__16187 = p__16186;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16187,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16187,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16167){
var self__ = this;
var G__16167__$1 = this;
return (new cljs.core.RecordIter((0),G__16167__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16169,other16170){
var self__ = this;
var this16169__$1 = this;
return (((!((other16170 == null)))) && ((((this16169__$1.constructor === other16170.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16169__$1.w,other16170.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16169__$1.h,other16170.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16169__$1.__extmap,other16170.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k16168){
var self__ = this;
var this__5307__auto____$1 = this;
var G__16222 = k16168;
var G__16222__$1 = (((G__16222 instanceof cljs.core.Keyword))?G__16222.fqn:null);
switch (G__16222__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k16168);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__16167){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__16223 = cljs.core.keyword_identical_QMARK_;
var expr__16224 = k__5309__auto__;
if(cljs.core.truth_((pred__16223.cljs$core$IFn$_invoke$arity$2 ? pred__16223.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__16224) : pred__16223.call(null, new cljs.core.Keyword(null,"w","w",354169001),expr__16224)))){
return (new shadow.dom.Size(G__16167,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__16223.cljs$core$IFn$_invoke$arity$2 ? pred__16223.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__16224) : pred__16223.call(null, new cljs.core.Keyword(null,"h","h",1109658740),expr__16224)))){
return (new shadow.dom.Size(self__.w,G__16167,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__16167),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__16167){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__16167,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__16177){
var extmap__5342__auto__ = (function (){var G__16254 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16177,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__16177)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__16254);
} else {
return G__16254;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__16177),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__16177),null,cljs.core.not_empty(extmap__5342__auto__),null));
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
var G__16854 = (i + (1));
var G__16855 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__16854;
ret = G__16855;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__16293){
var vec__16294 = p__16293;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16294,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16294,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__16302 = arguments.length;
switch (G__16302) {
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
var G__16862 = ps;
var G__16863 = (i + (1));
el__$1 = G__16862;
i = G__16863;
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
var vec__16331 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16331,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16331,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16331,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__16334_16866 = cljs.core.seq(props);
var chunk__16335_16867 = null;
var count__16336_16868 = (0);
var i__16337_16869 = (0);
while(true){
if((i__16337_16869 < count__16336_16868)){
var vec__16351_16870 = chunk__16335_16867.cljs$core$IIndexed$_nth$arity$2(null, i__16337_16869);
var k_16871 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16351_16870,(0),null);
var v_16872 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16351_16870,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_16871);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_16871),v_16872);


var G__16873 = seq__16334_16866;
var G__16874 = chunk__16335_16867;
var G__16875 = count__16336_16868;
var G__16876 = (i__16337_16869 + (1));
seq__16334_16866 = G__16873;
chunk__16335_16867 = G__16874;
count__16336_16868 = G__16875;
i__16337_16869 = G__16876;
continue;
} else {
var temp__5804__auto___16877 = cljs.core.seq(seq__16334_16866);
if(temp__5804__auto___16877){
var seq__16334_16878__$1 = temp__5804__auto___16877;
if(cljs.core.chunked_seq_QMARK_(seq__16334_16878__$1)){
var c__5525__auto___16879 = cljs.core.chunk_first(seq__16334_16878__$1);
var G__16880 = cljs.core.chunk_rest(seq__16334_16878__$1);
var G__16881 = c__5525__auto___16879;
var G__16882 = cljs.core.count(c__5525__auto___16879);
var G__16883 = (0);
seq__16334_16866 = G__16880;
chunk__16335_16867 = G__16881;
count__16336_16868 = G__16882;
i__16337_16869 = G__16883;
continue;
} else {
var vec__16360_16885 = cljs.core.first(seq__16334_16878__$1);
var k_16886 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16360_16885,(0),null);
var v_16887 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16360_16885,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_16886);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_16886),v_16887);


var G__16889 = cljs.core.next(seq__16334_16878__$1);
var G__16890 = null;
var G__16891 = (0);
var G__16892 = (0);
seq__16334_16866 = G__16889;
chunk__16335_16867 = G__16890;
count__16336_16868 = G__16891;
i__16337_16869 = G__16892;
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
var vec__16393 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16393,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16393,(1),null);
var seq__16396_16895 = cljs.core.seq(node_children);
var chunk__16398_16896 = null;
var count__16399_16897 = (0);
var i__16400_16898 = (0);
while(true){
if((i__16400_16898 < count__16399_16897)){
var child_struct_16899 = chunk__16398_16896.cljs$core$IIndexed$_nth$arity$2(null, i__16400_16898);
if((!((child_struct_16899 == null)))){
if(typeof child_struct_16899 === 'string'){
var text_16900 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_16900),child_struct_16899].join(''));
} else {
var children_16901 = shadow.dom.svg_node(child_struct_16899);
if(cljs.core.seq_QMARK_(children_16901)){
var seq__16450_16902 = cljs.core.seq(children_16901);
var chunk__16452_16903 = null;
var count__16453_16904 = (0);
var i__16454_16905 = (0);
while(true){
if((i__16454_16905 < count__16453_16904)){
var child_16906 = chunk__16452_16903.cljs$core$IIndexed$_nth$arity$2(null, i__16454_16905);
if(cljs.core.truth_(child_16906)){
node.appendChild(child_16906);


var G__16907 = seq__16450_16902;
var G__16908 = chunk__16452_16903;
var G__16909 = count__16453_16904;
var G__16910 = (i__16454_16905 + (1));
seq__16450_16902 = G__16907;
chunk__16452_16903 = G__16908;
count__16453_16904 = G__16909;
i__16454_16905 = G__16910;
continue;
} else {
var G__16911 = seq__16450_16902;
var G__16912 = chunk__16452_16903;
var G__16913 = count__16453_16904;
var G__16914 = (i__16454_16905 + (1));
seq__16450_16902 = G__16911;
chunk__16452_16903 = G__16912;
count__16453_16904 = G__16913;
i__16454_16905 = G__16914;
continue;
}
} else {
var temp__5804__auto___16916 = cljs.core.seq(seq__16450_16902);
if(temp__5804__auto___16916){
var seq__16450_16917__$1 = temp__5804__auto___16916;
if(cljs.core.chunked_seq_QMARK_(seq__16450_16917__$1)){
var c__5525__auto___16918 = cljs.core.chunk_first(seq__16450_16917__$1);
var G__16919 = cljs.core.chunk_rest(seq__16450_16917__$1);
var G__16920 = c__5525__auto___16918;
var G__16921 = cljs.core.count(c__5525__auto___16918);
var G__16922 = (0);
seq__16450_16902 = G__16919;
chunk__16452_16903 = G__16920;
count__16453_16904 = G__16921;
i__16454_16905 = G__16922;
continue;
} else {
var child_16925 = cljs.core.first(seq__16450_16917__$1);
if(cljs.core.truth_(child_16925)){
node.appendChild(child_16925);


var G__16928 = cljs.core.next(seq__16450_16917__$1);
var G__16929 = null;
var G__16930 = (0);
var G__16931 = (0);
seq__16450_16902 = G__16928;
chunk__16452_16903 = G__16929;
count__16453_16904 = G__16930;
i__16454_16905 = G__16931;
continue;
} else {
var G__16932 = cljs.core.next(seq__16450_16917__$1);
var G__16933 = null;
var G__16934 = (0);
var G__16935 = (0);
seq__16450_16902 = G__16932;
chunk__16452_16903 = G__16933;
count__16453_16904 = G__16934;
i__16454_16905 = G__16935;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_16901);
}
}


var G__16936 = seq__16396_16895;
var G__16937 = chunk__16398_16896;
var G__16938 = count__16399_16897;
var G__16939 = (i__16400_16898 + (1));
seq__16396_16895 = G__16936;
chunk__16398_16896 = G__16937;
count__16399_16897 = G__16938;
i__16400_16898 = G__16939;
continue;
} else {
var G__16943 = seq__16396_16895;
var G__16944 = chunk__16398_16896;
var G__16945 = count__16399_16897;
var G__16946 = (i__16400_16898 + (1));
seq__16396_16895 = G__16943;
chunk__16398_16896 = G__16944;
count__16399_16897 = G__16945;
i__16400_16898 = G__16946;
continue;
}
} else {
var temp__5804__auto___16947 = cljs.core.seq(seq__16396_16895);
if(temp__5804__auto___16947){
var seq__16396_16948__$1 = temp__5804__auto___16947;
if(cljs.core.chunked_seq_QMARK_(seq__16396_16948__$1)){
var c__5525__auto___16949 = cljs.core.chunk_first(seq__16396_16948__$1);
var G__16950 = cljs.core.chunk_rest(seq__16396_16948__$1);
var G__16951 = c__5525__auto___16949;
var G__16952 = cljs.core.count(c__5525__auto___16949);
var G__16953 = (0);
seq__16396_16895 = G__16950;
chunk__16398_16896 = G__16951;
count__16399_16897 = G__16952;
i__16400_16898 = G__16953;
continue;
} else {
var child_struct_16954 = cljs.core.first(seq__16396_16948__$1);
if((!((child_struct_16954 == null)))){
if(typeof child_struct_16954 === 'string'){
var text_16955 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_16955),child_struct_16954].join(''));
} else {
var children_16956 = shadow.dom.svg_node(child_struct_16954);
if(cljs.core.seq_QMARK_(children_16956)){
var seq__16478_16957 = cljs.core.seq(children_16956);
var chunk__16480_16958 = null;
var count__16481_16959 = (0);
var i__16482_16960 = (0);
while(true){
if((i__16482_16960 < count__16481_16959)){
var child_16961 = chunk__16480_16958.cljs$core$IIndexed$_nth$arity$2(null, i__16482_16960);
if(cljs.core.truth_(child_16961)){
node.appendChild(child_16961);


var G__16962 = seq__16478_16957;
var G__16963 = chunk__16480_16958;
var G__16964 = count__16481_16959;
var G__16965 = (i__16482_16960 + (1));
seq__16478_16957 = G__16962;
chunk__16480_16958 = G__16963;
count__16481_16959 = G__16964;
i__16482_16960 = G__16965;
continue;
} else {
var G__16966 = seq__16478_16957;
var G__16967 = chunk__16480_16958;
var G__16968 = count__16481_16959;
var G__16969 = (i__16482_16960 + (1));
seq__16478_16957 = G__16966;
chunk__16480_16958 = G__16967;
count__16481_16959 = G__16968;
i__16482_16960 = G__16969;
continue;
}
} else {
var temp__5804__auto___16971__$1 = cljs.core.seq(seq__16478_16957);
if(temp__5804__auto___16971__$1){
var seq__16478_16972__$1 = temp__5804__auto___16971__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16478_16972__$1)){
var c__5525__auto___16974 = cljs.core.chunk_first(seq__16478_16972__$1);
var G__16975 = cljs.core.chunk_rest(seq__16478_16972__$1);
var G__16976 = c__5525__auto___16974;
var G__16977 = cljs.core.count(c__5525__auto___16974);
var G__16978 = (0);
seq__16478_16957 = G__16975;
chunk__16480_16958 = G__16976;
count__16481_16959 = G__16977;
i__16482_16960 = G__16978;
continue;
} else {
var child_16979 = cljs.core.first(seq__16478_16972__$1);
if(cljs.core.truth_(child_16979)){
node.appendChild(child_16979);


var G__16980 = cljs.core.next(seq__16478_16972__$1);
var G__16981 = null;
var G__16982 = (0);
var G__16983 = (0);
seq__16478_16957 = G__16980;
chunk__16480_16958 = G__16981;
count__16481_16959 = G__16982;
i__16482_16960 = G__16983;
continue;
} else {
var G__16985 = cljs.core.next(seq__16478_16972__$1);
var G__16986 = null;
var G__16987 = (0);
var G__16988 = (0);
seq__16478_16957 = G__16985;
chunk__16480_16958 = G__16986;
count__16481_16959 = G__16987;
i__16482_16960 = G__16988;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_16956);
}
}


var G__16989 = cljs.core.next(seq__16396_16948__$1);
var G__16990 = null;
var G__16991 = (0);
var G__16992 = (0);
seq__16396_16895 = G__16989;
chunk__16398_16896 = G__16990;
count__16399_16897 = G__16991;
i__16400_16898 = G__16992;
continue;
} else {
var G__16993 = cljs.core.next(seq__16396_16948__$1);
var G__16994 = null;
var G__16995 = (0);
var G__16996 = (0);
seq__16396_16895 = G__16993;
chunk__16398_16896 = G__16994;
count__16399_16897 = G__16995;
i__16400_16898 = G__16996;
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
var len__5726__auto___17000 = arguments.length;
var i__5727__auto___17001 = (0);
while(true){
if((i__5727__auto___17001 < len__5726__auto___17000)){
args__5732__auto__.push((arguments[i__5727__auto___17001]));

var G__17002 = (i__5727__auto___17001 + (1));
i__5727__auto___17001 = G__17002;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq16512){
var G__16513 = cljs.core.first(seq16512);
var seq16512__$1 = cljs.core.next(seq16512);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16513,seq16512__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
