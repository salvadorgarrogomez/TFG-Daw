goog.provide('o2w.ui.responsive');
o2w.ui.responsive.viewport = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
o2w.ui.responsive.height = reagent.core.cursor(o2w.ui.responsive.viewport,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"height","height",1025178622)], null));
o2w.ui.responsive.width = reagent.core.cursor(o2w.ui.responsive.viewport,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"width","width",-384071477)], null));
o2w.ui.responsive.device = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"desktop","desktop",1494219798));
o2w.ui.responsive.scroll_top = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
o2w.ui.responsive.mobile_QMARK_ = reagent.ratom.make_reaction((function (){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(o2w.ui.responsive.device),new cljs.core.Keyword(null,"mobile","mobile",1403078170));
}));
o2w.ui.responsive.tablet_QMARK_ = reagent.ratom.make_reaction((function (){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(o2w.ui.responsive.device),new cljs.core.Keyword(null,"tablet","tablet",-318585919));
}));
o2w.ui.responsive.desktop_QMARK_ = reagent.ratom.make_reaction((function (){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(o2w.ui.responsive.device),new cljs.core.Keyword(null,"desktop","desktop",1494219798));
}));
o2w.ui.responsive.detect_device = (function o2w$ui$responsive$detect_device(){
var _viewport = goog.dom.getViewportSize();
var width = (_viewport["width"]);
var height = (_viewport["height"]);
var _device = (((width < (753)))?new cljs.core.Keyword(null,"mobile","mobile",1403078170):(((width < (1010)))?new cljs.core.Keyword(null,"tablet","tablet",-318585919):new cljs.core.Keyword(null,"desktop","desktop",1494219798)
));
cljs.core.reset_BANG_(o2w.ui.responsive.viewport,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null));

return cljs.core.reset_BANG_(o2w.ui.responsive.device,_device);
});
o2w.ui.responsive.detect_offset_top = (function o2w$ui$responsive$detect_offset_top(){
return cljs.core.reset_BANG_(o2w.ui.responsive.scroll_top,goog.style.getPageOffsetTop(document));
});
o2w.ui.responsive.start_BANG_ = (function o2w$ui$responsive$start_BANG_(){
o2w.ui.responsive.detect_device();

goog.events.listen(window,goog.events.EventType.RESIZE,(function (){
return o2w.ui.responsive.detect_device();
}));

o2w.ui.responsive.detect_offset_top();

return goog.events.listen(window,goog.events.EventType.SCROLL,(function (){
return o2w.ui.responsive.detect_offset_top();
}));
});
o2w.ui.responsive.angle_up = (function o2w$ui$responsive$angle_up(p__12582){
var map__12583 = p__12582;
var map__12583__$1 = cljs.core.__destructure_map(map__12583);
var top = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12583__$1,new cljs.core.Keyword(null,"top","top",-1856271961),(200));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12583__$1,new cljs.core.Keyword(null,"class","class",-2030961996),"icon-angle-up");
var inner = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12583__$1,new cljs.core.Keyword(null,"inner","inner",-1383171215));
if((cljs.core.deref(o2w.ui.responsive.scroll_top) > top)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#gotoTop","div#gotoTop",1217028013),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"on-click","on-click",1632826543),o2w.ui.scroll.top], null),(cljs.core.truth_(inner)?inner:null)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);
}
});

//# sourceMappingURL=o2w.ui.responsive.js.map
