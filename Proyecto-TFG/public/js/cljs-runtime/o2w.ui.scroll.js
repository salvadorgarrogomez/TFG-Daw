goog.provide('o2w.ui.scroll');
o2w.ui.scroll.to = (function o2w$ui$scroll$to(var_args){
var args__5732__auto__ = [];
var len__5726__auto___12570 = arguments.length;
var i__5727__auto___12571 = (0);
while(true){
if((i__5727__auto___12571 < len__5726__auto___12570)){
args__5732__auto__.push((arguments[i__5727__auto___12571]));

var G__12572 = (i__5727__auto___12571 + (1));
i__5727__auto___12571 = G__12572;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return o2w.ui.scroll.to.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(o2w.ui.scroll.to.cljs$core$IFn$_invoke$arity$variadic = (function (to,p__12561){
var vec__12562 = p__12561;
var map__12565 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12562,(0),null);
var map__12565__$1 = cljs.core.__destructure_map(map__12565);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12565__$1,new cljs.core.Keyword(null,"time","time",1385887882),(200));
return (new goog.fx.dom.Scroll(goog.dom.getDocumentScrollElement(),cljs.core.clj__GT_js(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2((function (p1__12556_SHARP_){
return (p1__12556_SHARP_["x"]);
}),(function (p1__12557_SHARP_){
return (p1__12557_SHARP_["y"]);
}))(goog.dom.getDocumentScroll())),cljs.core.clj__GT_js(to),time)).play();
}));

(o2w.ui.scroll.to.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(o2w.ui.scroll.to.cljs$lang$applyTo = (function (seq12558){
var G__12559 = cljs.core.first(seq12558);
var seq12558__$1 = cljs.core.next(seq12558);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12559,seq12558__$1);
}));

o2w.ui.scroll.top = (function o2w$ui$scroll$top(){
return o2w.ui.scroll.to(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
});
o2w.ui.scroll.to_id = (function o2w$ui$scroll$to_id(target_id){
var top = document.getElementById(target_id).offsetTop;
return o2w.ui.scroll.to(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),top], null));
});

//# sourceMappingURL=o2w.ui.scroll.js.map
