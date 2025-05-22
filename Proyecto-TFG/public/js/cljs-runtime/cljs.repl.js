goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__22375){
var map__22377 = p__22375;
var map__22377__$1 = cljs.core.__destructure_map(map__22377);
var m = map__22377__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22377__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22377__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__22386_22665 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__22387_22666 = null;
var count__22388_22667 = (0);
var i__22389_22668 = (0);
while(true){
if((i__22389_22668 < count__22388_22667)){
var f_22669 = chunk__22387_22666.cljs$core$IIndexed$_nth$arity$2(null, i__22389_22668);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_22669], 0));


var G__22670 = seq__22386_22665;
var G__22671 = chunk__22387_22666;
var G__22672 = count__22388_22667;
var G__22673 = (i__22389_22668 + (1));
seq__22386_22665 = G__22670;
chunk__22387_22666 = G__22671;
count__22388_22667 = G__22672;
i__22389_22668 = G__22673;
continue;
} else {
var temp__5804__auto___22674 = cljs.core.seq(seq__22386_22665);
if(temp__5804__auto___22674){
var seq__22386_22675__$1 = temp__5804__auto___22674;
if(cljs.core.chunked_seq_QMARK_(seq__22386_22675__$1)){
var c__5525__auto___22676 = cljs.core.chunk_first(seq__22386_22675__$1);
var G__22677 = cljs.core.chunk_rest(seq__22386_22675__$1);
var G__22678 = c__5525__auto___22676;
var G__22679 = cljs.core.count(c__5525__auto___22676);
var G__22680 = (0);
seq__22386_22665 = G__22677;
chunk__22387_22666 = G__22678;
count__22388_22667 = G__22679;
i__22389_22668 = G__22680;
continue;
} else {
var f_22681 = cljs.core.first(seq__22386_22675__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_22681], 0));


var G__22683 = cljs.core.next(seq__22386_22675__$1);
var G__22684 = null;
var G__22685 = (0);
var G__22686 = (0);
seq__22386_22665 = G__22683;
chunk__22387_22666 = G__22684;
count__22388_22667 = G__22685;
i__22389_22668 = G__22686;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_22687 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_22687], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_22687)))?cljs.core.second(arglists_22687):arglists_22687)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__22411_22688 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__22412_22689 = null;
var count__22413_22690 = (0);
var i__22414_22691 = (0);
while(true){
if((i__22414_22691 < count__22413_22690)){
var vec__22468_22692 = chunk__22412_22689.cljs$core$IIndexed$_nth$arity$2(null, i__22414_22691);
var name_22693 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22468_22692,(0),null);
var map__22471_22694 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22468_22692,(1),null);
var map__22471_22695__$1 = cljs.core.__destructure_map(map__22471_22694);
var doc_22696 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22471_22695__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_22697 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22471_22695__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_22693], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_22697], 0));

if(cljs.core.truth_(doc_22696)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_22696], 0));
} else {
}


var G__22702 = seq__22411_22688;
var G__22703 = chunk__22412_22689;
var G__22704 = count__22413_22690;
var G__22705 = (i__22414_22691 + (1));
seq__22411_22688 = G__22702;
chunk__22412_22689 = G__22703;
count__22413_22690 = G__22704;
i__22414_22691 = G__22705;
continue;
} else {
var temp__5804__auto___22706 = cljs.core.seq(seq__22411_22688);
if(temp__5804__auto___22706){
var seq__22411_22707__$1 = temp__5804__auto___22706;
if(cljs.core.chunked_seq_QMARK_(seq__22411_22707__$1)){
var c__5525__auto___22708 = cljs.core.chunk_first(seq__22411_22707__$1);
var G__22709 = cljs.core.chunk_rest(seq__22411_22707__$1);
var G__22710 = c__5525__auto___22708;
var G__22711 = cljs.core.count(c__5525__auto___22708);
var G__22712 = (0);
seq__22411_22688 = G__22709;
chunk__22412_22689 = G__22710;
count__22413_22690 = G__22711;
i__22414_22691 = G__22712;
continue;
} else {
var vec__22493_22713 = cljs.core.first(seq__22411_22707__$1);
var name_22714 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22493_22713,(0),null);
var map__22496_22715 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22493_22713,(1),null);
var map__22496_22716__$1 = cljs.core.__destructure_map(map__22496_22715);
var doc_22717 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22496_22716__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_22718 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22496_22716__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_22714], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_22718], 0));

if(cljs.core.truth_(doc_22717)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_22717], 0));
} else {
}


var G__22721 = cljs.core.next(seq__22411_22707__$1);
var G__22722 = null;
var G__22723 = (0);
var G__22724 = (0);
seq__22411_22688 = G__22721;
chunk__22412_22689 = G__22722;
count__22413_22690 = G__22723;
i__22414_22691 = G__22724;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__22524 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__22526 = null;
var count__22528 = (0);
var i__22529 = (0);
while(true){
if((i__22529 < count__22528)){
var role = chunk__22526.cljs$core$IIndexed$_nth$arity$2(null, i__22529);
var temp__5804__auto___22729__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___22729__$1)){
var spec_22730 = temp__5804__auto___22729__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_22730)], 0));
} else {
}


var G__22733 = seq__22524;
var G__22734 = chunk__22526;
var G__22735 = count__22528;
var G__22736 = (i__22529 + (1));
seq__22524 = G__22733;
chunk__22526 = G__22734;
count__22528 = G__22735;
i__22529 = G__22736;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__22524);
if(temp__5804__auto____$1){
var seq__22524__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__22524__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__22524__$1);
var G__22740 = cljs.core.chunk_rest(seq__22524__$1);
var G__22741 = c__5525__auto__;
var G__22742 = cljs.core.count(c__5525__auto__);
var G__22743 = (0);
seq__22524 = G__22740;
chunk__22526 = G__22741;
count__22528 = G__22742;
i__22529 = G__22743;
continue;
} else {
var role = cljs.core.first(seq__22524__$1);
var temp__5804__auto___22744__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___22744__$2)){
var spec_22749 = temp__5804__auto___22744__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_22749)], 0));
} else {
}


var G__22750 = cljs.core.next(seq__22524__$1);
var G__22751 = null;
var G__22752 = (0);
var G__22753 = (0);
seq__22524 = G__22750;
chunk__22526 = G__22751;
count__22528 = G__22752;
i__22529 = G__22753;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__22570 = datafied_throwable;
var map__22570__$1 = cljs.core.__destructure_map(map__22570);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22570__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22570__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22570__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__22571 = cljs.core.last(via);
var map__22571__$1 = cljs.core.__destructure_map(map__22571);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22571__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22571__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22571__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__22572 = data;
var map__22572__$1 = cljs.core.__destructure_map(map__22572);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22572__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22572__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22572__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__22573 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__22573__$1 = cljs.core.__destructure_map(map__22573);
var top_data = map__22573__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22573__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__22579 = phase;
var G__22579__$1 = (((G__22579 instanceof cljs.core.Keyword))?G__22579.fqn:null);
switch (G__22579__$1) {
case "read-source":
var map__22580 = data;
var map__22580__$1 = cljs.core.__destructure_map(map__22580);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22580__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22580__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__22581 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__22581__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22581,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__22581);
var G__22581__$2 = (cljs.core.truth_((function (){var fexpr__22583 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__22583.cljs$core$IFn$_invoke$arity$1 ? fexpr__22583.cljs$core$IFn$_invoke$arity$1(source) : fexpr__22583.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__22581__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__22581__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22581__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__22581__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__22584 = top_data;
var G__22584__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22584,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__22584);
var G__22584__$2 = (cljs.core.truth_((function (){var fexpr__22585 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__22585.cljs$core$IFn$_invoke$arity$1 ? fexpr__22585.cljs$core$IFn$_invoke$arity$1(source) : fexpr__22585.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__22584__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__22584__$1);
var G__22584__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22584__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__22584__$2);
var G__22584__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22584__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__22584__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22584__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__22584__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__22587 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22587,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22587,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22587,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22587,(3),null);
var G__22590 = top_data;
var G__22590__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22590,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__22590);
var G__22590__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22590__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__22590__$1);
var G__22590__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22590__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__22590__$2);
var G__22590__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22590__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__22590__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22590__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__22590__$4;
}

break;
case "execution":
var vec__22597 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22597,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22597,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22597,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22597,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__22568_SHARP_){
var or__5002__auto__ = (p1__22568_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__22604 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__22604.cljs$core$IFn$_invoke$arity$1 ? fexpr__22604.cljs$core$IFn$_invoke$arity$1(p1__22568_SHARP_) : fexpr__22604.call(null, p1__22568_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__22605 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__22605__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22605,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__22605);
var G__22605__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22605__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__22605__$1);
var G__22605__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22605__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__22605__$2);
var G__22605__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22605__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__22605__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22605__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__22605__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22579__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__22617){
var map__22618 = p__22617;
var map__22618__$1 = cljs.core.__destructure_map(map__22618);
var triage_data = map__22618__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22618__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22618__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22618__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22618__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22618__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22618__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22618__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22618__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__22620 = phase;
var G__22620__$1 = (((G__22620 instanceof cljs.core.Keyword))?G__22620.fqn:null);
switch (G__22620__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null, "Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__22621 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__22622 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__22623 = loc;
var G__22624 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__22625_22781 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__22626_22784 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__22627_22785 = true;
var _STAR_print_fn_STAR__temp_val__22628_22786 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__22627_22785);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__22628_22786);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22610_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__22610_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__22626_22784);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__22625_22781);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null, "%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__22621,G__22622,G__22623,G__22624) : format.call(null, G__22621,G__22622,G__22623,G__22624));

break;
case "macroexpansion":
var G__22629 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__22630 = cause_type;
var G__22631 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__22632 = loc;
var G__22633 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__22629,G__22630,G__22631,G__22632,G__22633) : format.call(null, G__22629,G__22630,G__22631,G__22632,G__22633));

break;
case "compile-syntax-check":
var G__22637 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__22638 = cause_type;
var G__22639 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__22640 = loc;
var G__22641 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__22637,G__22638,G__22639,G__22640,G__22641) : format.call(null, G__22637,G__22638,G__22639,G__22640,G__22641));

break;
case "compilation":
var G__22642 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__22643 = cause_type;
var G__22644 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__22645 = loc;
var G__22646 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__22642,G__22643,G__22644,G__22645,G__22646) : format.call(null, G__22642,G__22643,G__22644,G__22645,G__22646));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__22648 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__22649 = symbol;
var G__22650 = loc;
var G__22651 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__22652_22792 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__22653_22793 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__22654_22794 = true;
var _STAR_print_fn_STAR__temp_val__22655_22795 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__22654_22794);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__22655_22795);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22616_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__22616_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__22653_22793);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__22652_22792);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__22648,G__22649,G__22650,G__22651) : format.call(null, G__22648,G__22649,G__22650,G__22651));
} else {
var G__22660 = "Execution error%s at %s(%s).\n%s\n";
var G__22661 = cause_type;
var G__22662 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__22663 = loc;
var G__22664 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__22660,G__22661,G__22662,G__22663,G__22664) : format.call(null, G__22660,G__22661,G__22662,G__22663,G__22664));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22620__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
