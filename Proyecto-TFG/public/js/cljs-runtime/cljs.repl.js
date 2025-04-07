goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__21102){
var map__21105 = p__21102;
var map__21105__$1 = cljs.core.__destructure_map(map__21105);
var m = map__21105__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21105__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21105__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__21111_21478 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21112_21479 = null;
var count__21113_21480 = (0);
var i__21114_21481 = (0);
while(true){
if((i__21114_21481 < count__21113_21480)){
var f_21482 = chunk__21112_21479.cljs$core$IIndexed$_nth$arity$2(null, i__21114_21481);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_21482], 0));


var G__21483 = seq__21111_21478;
var G__21484 = chunk__21112_21479;
var G__21485 = count__21113_21480;
var G__21486 = (i__21114_21481 + (1));
seq__21111_21478 = G__21483;
chunk__21112_21479 = G__21484;
count__21113_21480 = G__21485;
i__21114_21481 = G__21486;
continue;
} else {
var temp__5804__auto___21488 = cljs.core.seq(seq__21111_21478);
if(temp__5804__auto___21488){
var seq__21111_21489__$1 = temp__5804__auto___21488;
if(cljs.core.chunked_seq_QMARK_(seq__21111_21489__$1)){
var c__5525__auto___21490 = cljs.core.chunk_first(seq__21111_21489__$1);
var G__21491 = cljs.core.chunk_rest(seq__21111_21489__$1);
var G__21492 = c__5525__auto___21490;
var G__21493 = cljs.core.count(c__5525__auto___21490);
var G__21494 = (0);
seq__21111_21478 = G__21491;
chunk__21112_21479 = G__21492;
count__21113_21480 = G__21493;
i__21114_21481 = G__21494;
continue;
} else {
var f_21496 = cljs.core.first(seq__21111_21489__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_21496], 0));


var G__21497 = cljs.core.next(seq__21111_21489__$1);
var G__21498 = null;
var G__21499 = (0);
var G__21500 = (0);
seq__21111_21478 = G__21497;
chunk__21112_21479 = G__21498;
count__21113_21480 = G__21499;
i__21114_21481 = G__21500;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_21501 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_21501], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_21501)))?cljs.core.second(arglists_21501):arglists_21501)], 0));
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
var seq__21132_21507 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21133_21508 = null;
var count__21134_21509 = (0);
var i__21135_21510 = (0);
while(true){
if((i__21135_21510 < count__21134_21509)){
var vec__21160_21512 = chunk__21133_21508.cljs$core$IIndexed$_nth$arity$2(null, i__21135_21510);
var name_21513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21160_21512,(0),null);
var map__21163_21514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21160_21512,(1),null);
var map__21163_21515__$1 = cljs.core.__destructure_map(map__21163_21514);
var doc_21516 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21163_21515__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_21517 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21163_21515__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_21513], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_21517], 0));

if(cljs.core.truth_(doc_21516)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_21516], 0));
} else {
}


var G__21520 = seq__21132_21507;
var G__21521 = chunk__21133_21508;
var G__21522 = count__21134_21509;
var G__21523 = (i__21135_21510 + (1));
seq__21132_21507 = G__21520;
chunk__21133_21508 = G__21521;
count__21134_21509 = G__21522;
i__21135_21510 = G__21523;
continue;
} else {
var temp__5804__auto___21524 = cljs.core.seq(seq__21132_21507);
if(temp__5804__auto___21524){
var seq__21132_21525__$1 = temp__5804__auto___21524;
if(cljs.core.chunked_seq_QMARK_(seq__21132_21525__$1)){
var c__5525__auto___21526 = cljs.core.chunk_first(seq__21132_21525__$1);
var G__21530 = cljs.core.chunk_rest(seq__21132_21525__$1);
var G__21531 = c__5525__auto___21526;
var G__21532 = cljs.core.count(c__5525__auto___21526);
var G__21533 = (0);
seq__21132_21507 = G__21530;
chunk__21133_21508 = G__21531;
count__21134_21509 = G__21532;
i__21135_21510 = G__21533;
continue;
} else {
var vec__21164_21534 = cljs.core.first(seq__21132_21525__$1);
var name_21535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21164_21534,(0),null);
var map__21167_21536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21164_21534,(1),null);
var map__21167_21537__$1 = cljs.core.__destructure_map(map__21167_21536);
var doc_21538 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21167_21537__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_21539 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21167_21537__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_21535], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_21539], 0));

if(cljs.core.truth_(doc_21538)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_21538], 0));
} else {
}


var G__21547 = cljs.core.next(seq__21132_21525__$1);
var G__21548 = null;
var G__21549 = (0);
var G__21550 = (0);
seq__21132_21507 = G__21547;
chunk__21133_21508 = G__21548;
count__21134_21509 = G__21549;
i__21135_21510 = G__21550;
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

var seq__21168 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__21169 = null;
var count__21170 = (0);
var i__21171 = (0);
while(true){
if((i__21171 < count__21170)){
var role = chunk__21169.cljs$core$IIndexed$_nth$arity$2(null, i__21171);
var temp__5804__auto___21552__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___21552__$1)){
var spec_21553 = temp__5804__auto___21552__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_21553)], 0));
} else {
}


var G__21558 = seq__21168;
var G__21559 = chunk__21169;
var G__21560 = count__21170;
var G__21561 = (i__21171 + (1));
seq__21168 = G__21558;
chunk__21169 = G__21559;
count__21170 = G__21560;
i__21171 = G__21561;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__21168);
if(temp__5804__auto____$1){
var seq__21168__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__21168__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21168__$1);
var G__21562 = cljs.core.chunk_rest(seq__21168__$1);
var G__21563 = c__5525__auto__;
var G__21564 = cljs.core.count(c__5525__auto__);
var G__21565 = (0);
seq__21168 = G__21562;
chunk__21169 = G__21563;
count__21170 = G__21564;
i__21171 = G__21565;
continue;
} else {
var role = cljs.core.first(seq__21168__$1);
var temp__5804__auto___21566__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___21566__$2)){
var spec_21567 = temp__5804__auto___21566__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_21567)], 0));
} else {
}


var G__21568 = cljs.core.next(seq__21168__$1);
var G__21569 = null;
var G__21570 = (0);
var G__21571 = (0);
seq__21168 = G__21568;
chunk__21169 = G__21569;
count__21170 = G__21570;
i__21171 = G__21571;
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
var map__21206 = datafied_throwable;
var map__21206__$1 = cljs.core.__destructure_map(map__21206);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21206__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21206__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21206__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__21208 = cljs.core.last(via);
var map__21208__$1 = cljs.core.__destructure_map(map__21208);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21208__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21208__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21208__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__21209 = data;
var map__21209__$1 = cljs.core.__destructure_map(map__21209);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21209__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21209__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21209__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__21210 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__21210__$1 = cljs.core.__destructure_map(map__21210);
var top_data = map__21210__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21210__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__21226 = phase;
var G__21226__$1 = (((G__21226 instanceof cljs.core.Keyword))?G__21226.fqn:null);
switch (G__21226__$1) {
case "read-source":
var map__21238 = data;
var map__21238__$1 = cljs.core.__destructure_map(map__21238);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21238__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21238__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__21239 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__21239__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21239,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__21239);
var G__21239__$2 = (cljs.core.truth_((function (){var fexpr__21252 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__21252.cljs$core$IFn$_invoke$arity$1 ? fexpr__21252.cljs$core$IFn$_invoke$arity$1(source) : fexpr__21252.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__21239__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__21239__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21239__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__21239__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__21254 = top_data;
var G__21254__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21254,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__21254);
var G__21254__$2 = (cljs.core.truth_((function (){var fexpr__21265 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__21265.cljs$core$IFn$_invoke$arity$1 ? fexpr__21265.cljs$core$IFn$_invoke$arity$1(source) : fexpr__21265.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__21254__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__21254__$1);
var G__21254__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21254__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__21254__$2);
var G__21254__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21254__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__21254__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21254__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__21254__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__21305 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21305,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21305,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21305,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21305,(3),null);
var G__21310 = top_data;
var G__21310__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21310,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__21310);
var G__21310__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21310__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__21310__$1);
var G__21310__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21310__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__21310__$2);
var G__21310__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21310__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__21310__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21310__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__21310__$4;
}

break;
case "execution":
var vec__21330 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21330,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21330,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21330,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21330,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__21197_SHARP_){
var or__5002__auto__ = (p1__21197_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__21345 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__21345.cljs$core$IFn$_invoke$arity$1 ? fexpr__21345.cljs$core$IFn$_invoke$arity$1(p1__21197_SHARP_) : fexpr__21345.call(null, p1__21197_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__21360 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__21360__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21360,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__21360);
var G__21360__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21360__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__21360__$1);
var G__21360__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21360__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__21360__$2);
var G__21360__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21360__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__21360__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21360__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__21360__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21226__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__21373){
var map__21378 = p__21373;
var map__21378__$1 = cljs.core.__destructure_map(map__21378);
var triage_data = map__21378__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21378__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21378__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21378__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21378__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21378__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21378__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21378__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21378__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__21390 = phase;
var G__21390__$1 = (((G__21390 instanceof cljs.core.Keyword))?G__21390.fqn:null);
switch (G__21390__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null, "Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__21392 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__21393 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21394 = loc;
var G__21395 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__21398_21605 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__21399_21606 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__21400_21607 = true;
var _STAR_print_fn_STAR__temp_val__21401_21608 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__21400_21607);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__21401_21608);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21366_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__21366_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__21399_21606);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__21398_21605);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null, "%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__21392,G__21393,G__21394,G__21395) : format.call(null, G__21392,G__21393,G__21394,G__21395));

break;
case "macroexpansion":
var G__21411 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__21412 = cause_type;
var G__21413 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21414 = loc;
var G__21415 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__21411,G__21412,G__21413,G__21414,G__21415) : format.call(null, G__21411,G__21412,G__21413,G__21414,G__21415));

break;
case "compile-syntax-check":
var G__21417 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__21418 = cause_type;
var G__21419 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21420 = loc;
var G__21421 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__21417,G__21418,G__21419,G__21420,G__21421) : format.call(null, G__21417,G__21418,G__21419,G__21420,G__21421));

break;
case "compilation":
var G__21424 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__21425 = cause_type;
var G__21426 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21427 = loc;
var G__21428 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__21424,G__21425,G__21426,G__21427,G__21428) : format.call(null, G__21424,G__21425,G__21426,G__21427,G__21428));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__21431 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__21432 = symbol;
var G__21433 = loc;
var G__21434 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__21437_21629 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__21438_21630 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__21439_21631 = true;
var _STAR_print_fn_STAR__temp_val__21440_21632 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__21439_21631);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__21440_21632);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21368_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__21368_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__21438_21630);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__21437_21629);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__21431,G__21432,G__21433,G__21434) : format.call(null, G__21431,G__21432,G__21433,G__21434));
} else {
var G__21450 = "Execution error%s at %s(%s).\n%s\n";
var G__21451 = cause_type;
var G__21452 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21453 = loc;
var G__21454 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__21450,G__21451,G__21452,G__21453,G__21454) : format.call(null, G__21450,G__21451,G__21452,G__21453,G__21454));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21390__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
