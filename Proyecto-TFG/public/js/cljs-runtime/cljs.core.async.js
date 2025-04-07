goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18342 = (function (f,blockable,meta18343){
this.f = f;
this.blockable = blockable;
this.meta18343 = meta18343;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18342.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18344,meta18343__$1){
var self__ = this;
var _18344__$1 = this;
return (new cljs.core.async.t_cljs$core$async18342(self__.f,self__.blockable,meta18343__$1));
}));

(cljs.core.async.t_cljs$core$async18342.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18344){
var self__ = this;
var _18344__$1 = this;
return self__.meta18343;
}));

(cljs.core.async.t_cljs$core$async18342.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18342.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18342.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async18342.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async18342.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta18343","meta18343",348456215,null)], null);
}));

(cljs.core.async.t_cljs$core$async18342.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18342.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18342");

(cljs.core.async.t_cljs$core$async18342.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async18342");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18342.
 */
cljs.core.async.__GT_t_cljs$core$async18342 = (function cljs$core$async$__GT_t_cljs$core$async18342(f,blockable,meta18343){
return (new cljs.core.async.t_cljs$core$async18342(f,blockable,meta18343));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__18341 = arguments.length;
switch (G__18341) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async18342(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__18365 = arguments.length;
switch (G__18365) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__18373 = arguments.length;
switch (G__18373) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__18401 = arguments.length;
switch (G__18401) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_20570 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_20570) : fn1.call(null, val_20570));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_20570) : fn1.call(null, val_20570));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__18409 = arguments.length;
switch (G__18409) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___20572 = n;
var x_20573 = (0);
while(true){
if((x_20573 < n__5593__auto___20572)){
(a[x_20573] = x_20573);

var G__20575 = (x_20573 + (1));
x_20573 = G__20575;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18435 = (function (flag,meta18436){
this.flag = flag;
this.meta18436 = meta18436;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18435.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18437,meta18436__$1){
var self__ = this;
var _18437__$1 = this;
return (new cljs.core.async.t_cljs$core$async18435(self__.flag,meta18436__$1));
}));

(cljs.core.async.t_cljs$core$async18435.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18437){
var self__ = this;
var _18437__$1 = this;
return self__.meta18436;
}));

(cljs.core.async.t_cljs$core$async18435.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18435.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async18435.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18435.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async18435.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta18436","meta18436",236183060,null)], null);
}));

(cljs.core.async.t_cljs$core$async18435.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18435.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18435");

(cljs.core.async.t_cljs$core$async18435.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async18435");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18435.
 */
cljs.core.async.__GT_t_cljs$core$async18435 = (function cljs$core$async$__GT_t_cljs$core$async18435(flag,meta18436){
return (new cljs.core.async.t_cljs$core$async18435(flag,meta18436));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async18435(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18439 = (function (flag,cb,meta18440){
this.flag = flag;
this.cb = cb;
this.meta18440 = meta18440;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18439.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18441,meta18440__$1){
var self__ = this;
var _18441__$1 = this;
return (new cljs.core.async.t_cljs$core$async18439(self__.flag,self__.cb,meta18440__$1));
}));

(cljs.core.async.t_cljs$core$async18439.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18441){
var self__ = this;
var _18441__$1 = this;
return self__.meta18440;
}));

(cljs.core.async.t_cljs$core$async18439.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18439.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async18439.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18439.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async18439.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta18440","meta18440",-837435716,null)], null);
}));

(cljs.core.async.t_cljs$core$async18439.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18439.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18439");

(cljs.core.async.t_cljs$core$async18439.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async18439");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18439.
 */
cljs.core.async.__GT_t_cljs$core$async18439 = (function cljs$core$async$__GT_t_cljs$core$async18439(flag,cb,meta18440){
return (new cljs.core.async.t_cljs$core$async18439(flag,cb,meta18440));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async18439(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null, (0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null, (1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18443_SHARP_){
var G__18447 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18443_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__18447) : fret.call(null, G__18447));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18444_SHARP_){
var G__18448 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18444_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__18448) : fret.call(null, G__18448));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__20584 = (i + (1));
i = G__20584;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null, );
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null, );
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___20585 = arguments.length;
var i__5727__auto___20586 = (0);
while(true){
if((i__5727__auto___20586 < len__5726__auto___20585)){
args__5732__auto__.push((arguments[i__5727__auto___20586]));

var G__20587 = (i__5727__auto___20586 + (1));
i__5727__auto___20586 = G__20587;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__18452){
var map__18453 = p__18452;
var map__18453__$1 = cljs.core.__destructure_map(map__18453);
var opts = map__18453__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq18450){
var G__18451 = cljs.core.first(seq18450);
var seq18450__$1 = cljs.core.next(seq18450);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18451,seq18450__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__18480 = arguments.length;
switch (G__18480) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__18257__auto___20595 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18258__auto__ = (function (){var switch__18040__auto__ = (function (state_18529){
var state_val_18534 = (state_18529[(1)]);
if((state_val_18534 === (7))){
var inst_18525 = (state_18529[(2)]);
var state_18529__$1 = state_18529;
var statearr_18537_20597 = state_18529__$1;
(statearr_18537_20597[(2)] = inst_18525);

(statearr_18537_20597[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18534 === (1))){
var state_18529__$1 = state_18529;
var statearr_18543_20598 = state_18529__$1;
(statearr_18543_20598[(2)] = null);

(statearr_18543_20598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18534 === (4))){
var inst_18508 = (state_18529[(7)]);
var inst_18508__$1 = (state_18529[(2)]);
var inst_18509 = (inst_18508__$1 == null);
var state_18529__$1 = (function (){var statearr_18556 = state_18529;
(statearr_18556[(7)] = inst_18508__$1);

return statearr_18556;
})();
if(cljs.core.truth_(inst_18509)){
var statearr_18557_20600 = state_18529__$1;
(statearr_18557_20600[(1)] = (5));

} else {
var statearr_18558_20601 = state_18529__$1;
(statearr_18558_20601[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18534 === (13))){
var state_18529__$1 = state_18529;
var statearr_18563_20602 = state_18529__$1;
(statearr_18563_20602[(2)] = null);

(statearr_18563_20602[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18534 === (6))){
var inst_18508 = (state_18529[(7)]);
var state_18529__$1 = state_18529;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18529__$1,(11),to,inst_18508);
} else {
if((state_val_18534 === (3))){
var inst_18527 = (state_18529[(2)]);
var state_18529__$1 = state_18529;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18529__$1,inst_18527);
} else {
if((state_val_18534 === (12))){
var state_18529__$1 = state_18529;
var statearr_18581_20603 = state_18529__$1;
(statearr_18581_20603[(2)] = null);

(statearr_18581_20603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18534 === (2))){
var state_18529__$1 = state_18529;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18529__$1,(4),from);
} else {
if((state_val_18534 === (11))){
var inst_18518 = (state_18529[(2)]);
var state_18529__$1 = state_18529;
if(cljs.core.truth_(inst_18518)){
var statearr_18582_20604 = state_18529__$1;
(statearr_18582_20604[(1)] = (12));

} else {
var statearr_18583_20605 = state_18529__$1;
(statearr_18583_20605[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18534 === (9))){
var state_18529__$1 = state_18529;
var statearr_18585_20606 = state_18529__$1;
(statearr_18585_20606[(2)] = null);

(statearr_18585_20606[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18534 === (5))){
var state_18529__$1 = state_18529;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18587_20607 = state_18529__$1;
(statearr_18587_20607[(1)] = (8));

} else {
var statearr_18588_20608 = state_18529__$1;
(statearr_18588_20608[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18534 === (14))){
var inst_18523 = (state_18529[(2)]);
var state_18529__$1 = state_18529;
var statearr_18589_20609 = state_18529__$1;
(statearr_18589_20609[(2)] = inst_18523);

(statearr_18589_20609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18534 === (10))){
var inst_18515 = (state_18529[(2)]);
var state_18529__$1 = state_18529;
var statearr_18590_20610 = state_18529__$1;
(statearr_18590_20610[(2)] = inst_18515);

(statearr_18590_20610[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18534 === (8))){
var inst_18512 = cljs.core.async.close_BANG_(to);
var state_18529__$1 = state_18529;
var statearr_18591_20611 = state_18529__$1;
(statearr_18591_20611[(2)] = inst_18512);

(statearr_18591_20611[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__18041__auto__ = null;
var cljs$core$async$state_machine__18041__auto____0 = (function (){
var statearr_18592 = [null,null,null,null,null,null,null,null];
(statearr_18592[(0)] = cljs$core$async$state_machine__18041__auto__);

(statearr_18592[(1)] = (1));

return statearr_18592;
});
var cljs$core$async$state_machine__18041__auto____1 = (function (state_18529){
while(true){
var ret_value__18042__auto__ = (function (){try{while(true){
var result__18043__auto__ = switch__18040__auto__(state_18529);
if(cljs.core.keyword_identical_QMARK_(result__18043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18043__auto__;
}
break;
}
}catch (e18594){var ex__18044__auto__ = e18594;
var statearr_18595_20613 = state_18529;
(statearr_18595_20613[(2)] = ex__18044__auto__);


if(cljs.core.seq((state_18529[(4)]))){
var statearr_18596_20614 = state_18529;
(statearr_18596_20614[(1)] = cljs.core.first((state_18529[(4)])));

} else {
throw ex__18044__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20615 = state_18529;
state_18529 = G__20615;
continue;
} else {
return ret_value__18042__auto__;
}
break;
}
});
cljs$core$async$state_machine__18041__auto__ = function(state_18529){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18041__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18041__auto____1.call(this,state_18529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18041__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18041__auto____0;
cljs$core$async$state_machine__18041__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18041__auto____1;
return cljs$core$async$state_machine__18041__auto__;
})()
})();
var state__18259__auto__ = (function (){var statearr_18605 = f__18258__auto__();
(statearr_18605[(6)] = c__18257__auto___20595);

return statearr_18605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18259__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__18612){
var vec__18613 = p__18612;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18613,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18613,(1),null);
var job = vec__18613;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__18257__auto___20620 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18258__auto__ = (function (){var switch__18040__auto__ = (function (state_18620){
var state_val_18621 = (state_18620[(1)]);
if((state_val_18621 === (1))){
var state_18620__$1 = state_18620;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18620__$1,(2),res,v);
} else {
if((state_val_18621 === (2))){
var inst_18617 = (state_18620[(2)]);
var inst_18618 = cljs.core.async.close_BANG_(res);
var state_18620__$1 = (function (){var statearr_18623 = state_18620;
(statearr_18623[(7)] = inst_18617);

return statearr_18623;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18620__$1,inst_18618);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18041__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18041__auto____0 = (function (){
var statearr_18624 = [null,null,null,null,null,null,null,null];
(statearr_18624[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18041__auto__);

(statearr_18624[(1)] = (1));

return statearr_18624;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18041__auto____1 = (function (state_18620){
while(true){
var ret_value__18042__auto__ = (function (){try{while(true){
var result__18043__auto__ = switch__18040__auto__(state_18620);
if(cljs.core.keyword_identical_QMARK_(result__18043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18043__auto__;
}
break;
}
}catch (e18625){var ex__18044__auto__ = e18625;
var statearr_18626_20622 = state_18620;
(statearr_18626_20622[(2)] = ex__18044__auto__);


if(cljs.core.seq((state_18620[(4)]))){
var statearr_18627_20624 = state_18620;
(statearr_18627_20624[(1)] = cljs.core.first((state_18620[(4)])));

} else {
throw ex__18044__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20626 = state_18620;
state_18620 = G__20626;
continue;
} else {
return ret_value__18042__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18041__auto__ = function(state_18620){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18041__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18041__auto____1.call(this,state_18620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18041__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18041__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18041__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18041__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18041__auto__;
})()
})();
var state__18259__auto__ = (function (){var statearr_18628 = f__18258__auto__();
(statearr_18628[(6)] = c__18257__auto___20620);

return statearr_18628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18259__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__18629){
var vec__18631 = p__18629;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18631,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18631,(1),null);
var job = vec__18631;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null, v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___20627 = n;
var __20628 = (0);
while(true){
if((__20628 < n__5593__auto___20627)){
var G__18634_20629 = type;
var G__18634_20630__$1 = (((G__18634_20629 instanceof cljs.core.Keyword))?G__18634_20629.fqn:null);
switch (G__18634_20630__$1) {
case "compute":
var c__18257__auto___20632 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__20628,c__18257__auto___20632,G__18634_20629,G__18634_20630__$1,n__5593__auto___20627,jobs,results,process__$1,async){
return (function (){
var f__18258__auto__ = (function (){var switch__18040__auto__ = ((function (__20628,c__18257__auto___20632,G__18634_20629,G__18634_20630__$1,n__5593__auto___20627,jobs,results,process__$1,async){
return (function (state_18647){
var state_val_18648 = (state_18647[(1)]);
if((state_val_18648 === (1))){
var state_18647__$1 = state_18647;
var statearr_18650_20633 = state_18647__$1;
(statearr_18650_20633[(2)] = null);

(statearr_18650_20633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18648 === (2))){
var state_18647__$1 = state_18647;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18647__$1,(4),jobs);
} else {
if((state_val_18648 === (3))){
var inst_18645 = (state_18647[(2)]);
var state_18647__$1 = state_18647;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18647__$1,inst_18645);
} else {
if((state_val_18648 === (4))){
var inst_18637 = (state_18647[(2)]);
var inst_18638 = process__$1(inst_18637);
var state_18647__$1 = state_18647;
if(cljs.core.truth_(inst_18638)){
var statearr_18651_20634 = state_18647__$1;
(statearr_18651_20634[(1)] = (5));

} else {
var statearr_18652_20635 = state_18647__$1;
(statearr_18652_20635[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18648 === (5))){
var state_18647__$1 = state_18647;
var statearr_18653_20641 = state_18647__$1;
(statearr_18653_20641[(2)] = null);

(statearr_18653_20641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18648 === (6))){
var state_18647__$1 = state_18647;
var statearr_18654_20642 = state_18647__$1;
(statearr_18654_20642[(2)] = null);

(statearr_18654_20642[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18648 === (7))){
var inst_18643 = (state_18647[(2)]);
var state_18647__$1 = state_18647;
var statearr_18655_20643 = state_18647__$1;
(statearr_18655_20643[(2)] = inst_18643);

(statearr_18655_20643[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__20628,c__18257__auto___20632,G__18634_20629,G__18634_20630__$1,n__5593__auto___20627,jobs,results,process__$1,async))
;
return ((function (__20628,switch__18040__auto__,c__18257__auto___20632,G__18634_20629,G__18634_20630__$1,n__5593__auto___20627,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18041__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18041__auto____0 = (function (){
var statearr_18657 = [null,null,null,null,null,null,null];
(statearr_18657[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18041__auto__);

(statearr_18657[(1)] = (1));

return statearr_18657;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18041__auto____1 = (function (state_18647){
while(true){
var ret_value__18042__auto__ = (function (){try{while(true){
var result__18043__auto__ = switch__18040__auto__(state_18647);
if(cljs.core.keyword_identical_QMARK_(result__18043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18043__auto__;
}
break;
}
}catch (e18658){var ex__18044__auto__ = e18658;
var statearr_18659_20645 = state_18647;
(statearr_18659_20645[(2)] = ex__18044__auto__);


if(cljs.core.seq((state_18647[(4)]))){
var statearr_18660_20646 = state_18647;
(statearr_18660_20646[(1)] = cljs.core.first((state_18647[(4)])));

} else {
throw ex__18044__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20647 = state_18647;
state_18647 = G__20647;
continue;
} else {
return ret_value__18042__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18041__auto__ = function(state_18647){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18041__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18041__auto____1.call(this,state_18647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18041__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18041__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18041__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18041__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18041__auto__;
})()
;})(__20628,switch__18040__auto__,c__18257__auto___20632,G__18634_20629,G__18634_20630__$1,n__5593__auto___20627,jobs,results,process__$1,async))
})();
var state__18259__auto__ = (function (){var statearr_18661 = f__18258__auto__();
(statearr_18661[(6)] = c__18257__auto___20632);

return statearr_18661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18259__auto__);
});})(__20628,c__18257__auto___20632,G__18634_20629,G__18634_20630__$1,n__5593__auto___20627,jobs,results,process__$1,async))
);


break;
case "async":
var c__18257__auto___20648 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__20628,c__18257__auto___20648,G__18634_20629,G__18634_20630__$1,n__5593__auto___20627,jobs,results,process__$1,async){
return (function (){
var f__18258__auto__ = (function (){var switch__18040__auto__ = ((function (__20628,c__18257__auto___20648,G__18634_20629,G__18634_20630__$1,n__5593__auto___20627,jobs,results,process__$1,async){
return (function (state_18675){
var state_val_18676 = (state_18675[(1)]);
if((state_val_18676 === (1))){
var state_18675__$1 = state_18675;
var statearr_18677_20649 = state_18675__$1;
(statearr_18677_20649[(2)] = null);

(statearr_18677_20649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18676 === (2))){
var state_18675__$1 = state_18675;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18675__$1,(4),jobs);
} else {
if((state_val_18676 === (3))){
var inst_18672 = (state_18675[(2)]);
var state_18675__$1 = state_18675;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18675__$1,inst_18672);
} else {
if((state_val_18676 === (4))){
var inst_18664 = (state_18675[(2)]);
var inst_18665 = async(inst_18664);
var state_18675__$1 = state_18675;
if(cljs.core.truth_(inst_18665)){
var statearr_18678_20650 = state_18675__$1;
(statearr_18678_20650[(1)] = (5));

} else {
var statearr_18679_20651 = state_18675__$1;
(statearr_18679_20651[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18676 === (5))){
var state_18675__$1 = state_18675;
var statearr_18680_20652 = state_18675__$1;
(statearr_18680_20652[(2)] = null);

(statearr_18680_20652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18676 === (6))){
var state_18675__$1 = state_18675;
var statearr_18681_20653 = state_18675__$1;
(statearr_18681_20653[(2)] = null);

(statearr_18681_20653[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18676 === (7))){
var inst_18670 = (state_18675[(2)]);
var state_18675__$1 = state_18675;
var statearr_18682_20657 = state_18675__$1;
(statearr_18682_20657[(2)] = inst_18670);

(statearr_18682_20657[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__20628,c__18257__auto___20648,G__18634_20629,G__18634_20630__$1,n__5593__auto___20627,jobs,results,process__$1,async))
;
return ((function (__20628,switch__18040__auto__,c__18257__auto___20648,G__18634_20629,G__18634_20630__$1,n__5593__auto___20627,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18041__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18041__auto____0 = (function (){
var statearr_18684 = [null,null,null,null,null,null,null];
(statearr_18684[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18041__auto__);

(statearr_18684[(1)] = (1));

return statearr_18684;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18041__auto____1 = (function (state_18675){
while(true){
var ret_value__18042__auto__ = (function (){try{while(true){
var result__18043__auto__ = switch__18040__auto__(state_18675);
if(cljs.core.keyword_identical_QMARK_(result__18043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18043__auto__;
}
break;
}
}catch (e18685){var ex__18044__auto__ = e18685;
var statearr_18686_20659 = state_18675;
(statearr_18686_20659[(2)] = ex__18044__auto__);


if(cljs.core.seq((state_18675[(4)]))){
var statearr_18687_20660 = state_18675;
(statearr_18687_20660[(1)] = cljs.core.first((state_18675[(4)])));

} else {
throw ex__18044__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20661 = state_18675;
state_18675 = G__20661;
continue;
} else {
return ret_value__18042__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18041__auto__ = function(state_18675){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18041__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18041__auto____1.call(this,state_18675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18041__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18041__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18041__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18041__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18041__auto__;
})()
;})(__20628,switch__18040__auto__,c__18257__auto___20648,G__18634_20629,G__18634_20630__$1,n__5593__auto___20627,jobs,results,process__$1,async))
})();
var state__18259__auto__ = (function (){var statearr_18688 = f__18258__auto__();
(statearr_18688[(6)] = c__18257__auto___20648);

return statearr_18688;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18259__auto__);
});})(__20628,c__18257__auto___20648,G__18634_20629,G__18634_20630__$1,n__5593__auto___20627,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18634_20630__$1)].join('')));

}

var G__20662 = (__20628 + (1));
__20628 = G__20662;
continue;
} else {
}
break;
}

var c__18257__auto___20663 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18258__auto__ = (function (){var switch__18040__auto__ = (function (state_18711){
var state_val_18712 = (state_18711[(1)]);
if((state_val_18712 === (7))){
var inst_18706 = (state_18711[(2)]);
var state_18711__$1 = state_18711;
var statearr_18713_20671 = state_18711__$1;
(statearr_18713_20671[(2)] = inst_18706);

(statearr_18713_20671[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18712 === (1))){
var state_18711__$1 = state_18711;
var statearr_18714_20672 = state_18711__$1;
(statearr_18714_20672[(2)] = null);

(statearr_18714_20672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18712 === (4))){
var inst_18691 = (state_18711[(7)]);
var inst_18691__$1 = (state_18711[(2)]);
var inst_18692 = (inst_18691__$1 == null);
var state_18711__$1 = (function (){var statearr_18715 = state_18711;
(statearr_18715[(7)] = inst_18691__$1);

return statearr_18715;
})();
if(cljs.core.truth_(inst_18692)){
var statearr_18716_20679 = state_18711__$1;
(statearr_18716_20679[(1)] = (5));

} else {
var statearr_18717_20680 = state_18711__$1;
(statearr_18717_20680[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18712 === (6))){
var inst_18691 = (state_18711[(7)]);
var inst_18696 = (state_18711[(8)]);
var inst_18696__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_18697 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18698 = [inst_18691,inst_18696__$1];
var inst_18699 = (new cljs.core.PersistentVector(null,2,(5),inst_18697,inst_18698,null));
var state_18711__$1 = (function (){var statearr_18718 = state_18711;
(statearr_18718[(8)] = inst_18696__$1);

return statearr_18718;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18711__$1,(8),jobs,inst_18699);
} else {
if((state_val_18712 === (3))){
var inst_18708 = (state_18711[(2)]);
var state_18711__$1 = state_18711;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18711__$1,inst_18708);
} else {
if((state_val_18712 === (2))){
var state_18711__$1 = state_18711;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18711__$1,(4),from);
} else {
if((state_val_18712 === (9))){
var inst_18703 = (state_18711[(2)]);
var state_18711__$1 = (function (){var statearr_18720 = state_18711;
(statearr_18720[(9)] = inst_18703);

return statearr_18720;
})();
var statearr_18721_20704 = state_18711__$1;
(statearr_18721_20704[(2)] = null);

(statearr_18721_20704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18712 === (5))){
var inst_18694 = cljs.core.async.close_BANG_(jobs);
var state_18711__$1 = state_18711;
var statearr_18722_20705 = state_18711__$1;
(statearr_18722_20705[(2)] = inst_18694);

(statearr_18722_20705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18712 === (8))){
var inst_18696 = (state_18711[(8)]);
var inst_18701 = (state_18711[(2)]);
var state_18711__$1 = (function (){var statearr_18723 = state_18711;
(statearr_18723[(10)] = inst_18701);

return statearr_18723;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18711__$1,(9),results,inst_18696);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18041__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18041__auto____0 = (function (){
var statearr_18724 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18724[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18041__auto__);

(statearr_18724[(1)] = (1));

return statearr_18724;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18041__auto____1 = (function (state_18711){
while(true){
var ret_value__18042__auto__ = (function (){try{while(true){
var result__18043__auto__ = switch__18040__auto__(state_18711);
if(cljs.core.keyword_identical_QMARK_(result__18043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18043__auto__;
}
break;
}
}catch (e18725){var ex__18044__auto__ = e18725;
var statearr_18726_20707 = state_18711;
(statearr_18726_20707[(2)] = ex__18044__auto__);


if(cljs.core.seq((state_18711[(4)]))){
var statearr_18727_20708 = state_18711;
(statearr_18727_20708[(1)] = cljs.core.first((state_18711[(4)])));

} else {
throw ex__18044__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20709 = state_18711;
state_18711 = G__20709;
continue;
} else {
return ret_value__18042__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18041__auto__ = function(state_18711){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18041__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18041__auto____1.call(this,state_18711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18041__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18041__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18041__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18041__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18041__auto__;
})()
})();
var state__18259__auto__ = (function (){var statearr_18728 = f__18258__auto__();
(statearr_18728[(6)] = c__18257__auto___20663);

return statearr_18728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18259__auto__);
}));


var c__18257__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18258__auto__ = (function (){var switch__18040__auto__ = (function (state_18767){
var state_val_18768 = (state_18767[(1)]);
if((state_val_18768 === (7))){
var inst_18763 = (state_18767[(2)]);
var state_18767__$1 = state_18767;
var statearr_18769_20713 = state_18767__$1;
(statearr_18769_20713[(2)] = inst_18763);

(statearr_18769_20713[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18768 === (20))){
var state_18767__$1 = state_18767;
var statearr_18770_20715 = state_18767__$1;
(statearr_18770_20715[(2)] = null);

(statearr_18770_20715[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18768 === (1))){
var state_18767__$1 = state_18767;
var statearr_18771_20716 = state_18767__$1;
(statearr_18771_20716[(2)] = null);

(statearr_18771_20716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18768 === (4))){
var inst_18732 = (state_18767[(7)]);
var inst_18732__$1 = (state_18767[(2)]);
var inst_18733 = (inst_18732__$1 == null);
var state_18767__$1 = (function (){var statearr_18773 = state_18767;
(statearr_18773[(7)] = inst_18732__$1);

return statearr_18773;
})();
if(cljs.core.truth_(inst_18733)){
var statearr_18774_20717 = state_18767__$1;
(statearr_18774_20717[(1)] = (5));

} else {
var statearr_18775_20718 = state_18767__$1;
(statearr_18775_20718[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18768 === (15))){
var inst_18745 = (state_18767[(8)]);
var state_18767__$1 = state_18767;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18767__$1,(18),to,inst_18745);
} else {
if((state_val_18768 === (21))){
var inst_18758 = (state_18767[(2)]);
var state_18767__$1 = state_18767;
var statearr_18776_20719 = state_18767__$1;
(statearr_18776_20719[(2)] = inst_18758);

(statearr_18776_20719[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18768 === (13))){
var inst_18760 = (state_18767[(2)]);
var state_18767__$1 = (function (){var statearr_18777 = state_18767;
(statearr_18777[(9)] = inst_18760);

return statearr_18777;
})();
var statearr_18778_20725 = state_18767__$1;
(statearr_18778_20725[(2)] = null);

(statearr_18778_20725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18768 === (6))){
var inst_18732 = (state_18767[(7)]);
var state_18767__$1 = state_18767;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18767__$1,(11),inst_18732);
} else {
if((state_val_18768 === (17))){
var inst_18753 = (state_18767[(2)]);
var state_18767__$1 = state_18767;
if(cljs.core.truth_(inst_18753)){
var statearr_18779_20730 = state_18767__$1;
(statearr_18779_20730[(1)] = (19));

} else {
var statearr_18780_20731 = state_18767__$1;
(statearr_18780_20731[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18768 === (3))){
var inst_18765 = (state_18767[(2)]);
var state_18767__$1 = state_18767;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18767__$1,inst_18765);
} else {
if((state_val_18768 === (12))){
var inst_18742 = (state_18767[(10)]);
var state_18767__$1 = state_18767;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18767__$1,(14),inst_18742);
} else {
if((state_val_18768 === (2))){
var state_18767__$1 = state_18767;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18767__$1,(4),results);
} else {
if((state_val_18768 === (19))){
var state_18767__$1 = state_18767;
var statearr_18781_20732 = state_18767__$1;
(statearr_18781_20732[(2)] = null);

(statearr_18781_20732[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18768 === (11))){
var inst_18742 = (state_18767[(2)]);
var state_18767__$1 = (function (){var statearr_18783 = state_18767;
(statearr_18783[(10)] = inst_18742);

return statearr_18783;
})();
var statearr_18784_20733 = state_18767__$1;
(statearr_18784_20733[(2)] = null);

(statearr_18784_20733[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18768 === (9))){
var state_18767__$1 = state_18767;
var statearr_18785_20734 = state_18767__$1;
(statearr_18785_20734[(2)] = null);

(statearr_18785_20734[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18768 === (5))){
var state_18767__$1 = state_18767;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18786_20735 = state_18767__$1;
(statearr_18786_20735[(1)] = (8));

} else {
var statearr_18787_20736 = state_18767__$1;
(statearr_18787_20736[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18768 === (14))){
var inst_18745 = (state_18767[(8)]);
var inst_18747 = (state_18767[(11)]);
var inst_18745__$1 = (state_18767[(2)]);
var inst_18746 = (inst_18745__$1 == null);
var inst_18747__$1 = cljs.core.not(inst_18746);
var state_18767__$1 = (function (){var statearr_18788 = state_18767;
(statearr_18788[(8)] = inst_18745__$1);

(statearr_18788[(11)] = inst_18747__$1);

return statearr_18788;
})();
if(inst_18747__$1){
var statearr_18789_20737 = state_18767__$1;
(statearr_18789_20737[(1)] = (15));

} else {
var statearr_18790_20738 = state_18767__$1;
(statearr_18790_20738[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18768 === (16))){
var inst_18747 = (state_18767[(11)]);
var state_18767__$1 = state_18767;
var statearr_18791_20739 = state_18767__$1;
(statearr_18791_20739[(2)] = inst_18747);

(statearr_18791_20739[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18768 === (10))){
var inst_18739 = (state_18767[(2)]);
var state_18767__$1 = state_18767;
var statearr_18793_20740 = state_18767__$1;
(statearr_18793_20740[(2)] = inst_18739);

(statearr_18793_20740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18768 === (18))){
var inst_18750 = (state_18767[(2)]);
var state_18767__$1 = state_18767;
var statearr_18794_20741 = state_18767__$1;
(statearr_18794_20741[(2)] = inst_18750);

(statearr_18794_20741[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18768 === (8))){
var inst_18736 = cljs.core.async.close_BANG_(to);
var state_18767__$1 = state_18767;
var statearr_18795_20742 = state_18767__$1;
(statearr_18795_20742[(2)] = inst_18736);

(statearr_18795_20742[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18041__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18041__auto____0 = (function (){
var statearr_18796 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18796[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18041__auto__);

(statearr_18796[(1)] = (1));

return statearr_18796;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18041__auto____1 = (function (state_18767){
while(true){
var ret_value__18042__auto__ = (function (){try{while(true){
var result__18043__auto__ = switch__18040__auto__(state_18767);
if(cljs.core.keyword_identical_QMARK_(result__18043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18043__auto__;
}
break;
}
}catch (e18797){var ex__18044__auto__ = e18797;
var statearr_18798_20743 = state_18767;
(statearr_18798_20743[(2)] = ex__18044__auto__);


if(cljs.core.seq((state_18767[(4)]))){
var statearr_18799_20744 = state_18767;
(statearr_18799_20744[(1)] = cljs.core.first((state_18767[(4)])));

} else {
throw ex__18044__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20745 = state_18767;
state_18767 = G__20745;
continue;
} else {
return ret_value__18042__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18041__auto__ = function(state_18767){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18041__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18041__auto____1.call(this,state_18767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18041__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18041__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18041__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18041__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18041__auto__;
})()
})();
var state__18259__auto__ = (function (){var statearr_18801 = f__18258__auto__();
(statearr_18801[(6)] = c__18257__auto__);

return statearr_18801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18259__auto__);
}));

return c__18257__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__18803 = arguments.length;
switch (G__18803) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__18806 = arguments.length;
switch (G__18806) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__18809 = arguments.length;
switch (G__18809) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__18257__auto___20753 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18258__auto__ = (function (){var switch__18040__auto__ = (function (state_18836){
var state_val_18837 = (state_18836[(1)]);
if((state_val_18837 === (7))){
var inst_18832 = (state_18836[(2)]);
var state_18836__$1 = state_18836;
var statearr_18838_20754 = state_18836__$1;
(statearr_18838_20754[(2)] = inst_18832);

(statearr_18838_20754[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18837 === (1))){
var state_18836__$1 = state_18836;
var statearr_18839_20755 = state_18836__$1;
(statearr_18839_20755[(2)] = null);

(statearr_18839_20755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18837 === (4))){
var inst_18813 = (state_18836[(7)]);
var inst_18813__$1 = (state_18836[(2)]);
var inst_18814 = (inst_18813__$1 == null);
var state_18836__$1 = (function (){var statearr_18841 = state_18836;
(statearr_18841[(7)] = inst_18813__$1);

return statearr_18841;
})();
if(cljs.core.truth_(inst_18814)){
var statearr_18842_20756 = state_18836__$1;
(statearr_18842_20756[(1)] = (5));

} else {
var statearr_18843_20757 = state_18836__$1;
(statearr_18843_20757[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18837 === (13))){
var state_18836__$1 = state_18836;
var statearr_18844_20758 = state_18836__$1;
(statearr_18844_20758[(2)] = null);

(statearr_18844_20758[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18837 === (6))){
var inst_18813 = (state_18836[(7)]);
var inst_18819 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18813) : p.call(null, inst_18813));
var state_18836__$1 = state_18836;
if(cljs.core.truth_(inst_18819)){
var statearr_18845_20759 = state_18836__$1;
(statearr_18845_20759[(1)] = (9));

} else {
var statearr_18846_20760 = state_18836__$1;
(statearr_18846_20760[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18837 === (3))){
var inst_18834 = (state_18836[(2)]);
var state_18836__$1 = state_18836;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18836__$1,inst_18834);
} else {
if((state_val_18837 === (12))){
var state_18836__$1 = state_18836;
var statearr_18847_20761 = state_18836__$1;
(statearr_18847_20761[(2)] = null);

(statearr_18847_20761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18837 === (2))){
var state_18836__$1 = state_18836;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18836__$1,(4),ch);
} else {
if((state_val_18837 === (11))){
var inst_18813 = (state_18836[(7)]);
var inst_18823 = (state_18836[(2)]);
var state_18836__$1 = state_18836;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18836__$1,(8),inst_18823,inst_18813);
} else {
if((state_val_18837 === (9))){
var state_18836__$1 = state_18836;
var statearr_18849_20766 = state_18836__$1;
(statearr_18849_20766[(2)] = tc);

(statearr_18849_20766[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18837 === (5))){
var inst_18816 = cljs.core.async.close_BANG_(tc);
var inst_18817 = cljs.core.async.close_BANG_(fc);
var state_18836__$1 = (function (){var statearr_18850 = state_18836;
(statearr_18850[(8)] = inst_18816);

return statearr_18850;
})();
var statearr_18851_20770 = state_18836__$1;
(statearr_18851_20770[(2)] = inst_18817);

(statearr_18851_20770[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18837 === (14))){
var inst_18830 = (state_18836[(2)]);
var state_18836__$1 = state_18836;
var statearr_18852_20771 = state_18836__$1;
(statearr_18852_20771[(2)] = inst_18830);

(statearr_18852_20771[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18837 === (10))){
var state_18836__$1 = state_18836;
var statearr_18853_20772 = state_18836__$1;
(statearr_18853_20772[(2)] = fc);

(statearr_18853_20772[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18837 === (8))){
var inst_18825 = (state_18836[(2)]);
var state_18836__$1 = state_18836;
if(cljs.core.truth_(inst_18825)){
var statearr_18854_20773 = state_18836__$1;
(statearr_18854_20773[(1)] = (12));

} else {
var statearr_18855_20774 = state_18836__$1;
(statearr_18855_20774[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__18041__auto__ = null;
var cljs$core$async$state_machine__18041__auto____0 = (function (){
var statearr_18856 = [null,null,null,null,null,null,null,null,null];
(statearr_18856[(0)] = cljs$core$async$state_machine__18041__auto__);

(statearr_18856[(1)] = (1));

return statearr_18856;
});
var cljs$core$async$state_machine__18041__auto____1 = (function (state_18836){
while(true){
var ret_value__18042__auto__ = (function (){try{while(true){
var result__18043__auto__ = switch__18040__auto__(state_18836);
if(cljs.core.keyword_identical_QMARK_(result__18043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18043__auto__;
}
break;
}
}catch (e18858){var ex__18044__auto__ = e18858;
var statearr_18859_20775 = state_18836;
(statearr_18859_20775[(2)] = ex__18044__auto__);


if(cljs.core.seq((state_18836[(4)]))){
var statearr_18860_20776 = state_18836;
(statearr_18860_20776[(1)] = cljs.core.first((state_18836[(4)])));

} else {
throw ex__18044__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20777 = state_18836;
state_18836 = G__20777;
continue;
} else {
return ret_value__18042__auto__;
}
break;
}
});
cljs$core$async$state_machine__18041__auto__ = function(state_18836){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18041__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18041__auto____1.call(this,state_18836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18041__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18041__auto____0;
cljs$core$async$state_machine__18041__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18041__auto____1;
return cljs$core$async$state_machine__18041__auto__;
})()
})();
var state__18259__auto__ = (function (){var statearr_18861 = f__18258__auto__();
(statearr_18861[(6)] = c__18257__auto___20753);

return statearr_18861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18259__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__18257__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18258__auto__ = (function (){var switch__18040__auto__ = (function (state_18884){
var state_val_18885 = (state_18884[(1)]);
if((state_val_18885 === (7))){
var inst_18880 = (state_18884[(2)]);
var state_18884__$1 = state_18884;
var statearr_18886_20778 = state_18884__$1;
(statearr_18886_20778[(2)] = inst_18880);

(statearr_18886_20778[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18885 === (1))){
var inst_18862 = init;
var inst_18863 = inst_18862;
var state_18884__$1 = (function (){var statearr_18887 = state_18884;
(statearr_18887[(7)] = inst_18863);

return statearr_18887;
})();
var statearr_18888_20779 = state_18884__$1;
(statearr_18888_20779[(2)] = null);

(statearr_18888_20779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18885 === (4))){
var inst_18866 = (state_18884[(8)]);
var inst_18866__$1 = (state_18884[(2)]);
var inst_18867 = (inst_18866__$1 == null);
var state_18884__$1 = (function (){var statearr_18889 = state_18884;
(statearr_18889[(8)] = inst_18866__$1);

return statearr_18889;
})();
if(cljs.core.truth_(inst_18867)){
var statearr_18890_20780 = state_18884__$1;
(statearr_18890_20780[(1)] = (5));

} else {
var statearr_18891_20781 = state_18884__$1;
(statearr_18891_20781[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18885 === (6))){
var inst_18871 = (state_18884[(9)]);
var inst_18863 = (state_18884[(7)]);
var inst_18866 = (state_18884[(8)]);
var inst_18871__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_18863,inst_18866) : f.call(null, inst_18863,inst_18866));
var inst_18872 = cljs.core.reduced_QMARK_(inst_18871__$1);
var state_18884__$1 = (function (){var statearr_18892 = state_18884;
(statearr_18892[(9)] = inst_18871__$1);

return statearr_18892;
})();
if(inst_18872){
var statearr_18894_20782 = state_18884__$1;
(statearr_18894_20782[(1)] = (8));

} else {
var statearr_18895_20783 = state_18884__$1;
(statearr_18895_20783[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18885 === (3))){
var inst_18882 = (state_18884[(2)]);
var state_18884__$1 = state_18884;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18884__$1,inst_18882);
} else {
if((state_val_18885 === (2))){
var state_18884__$1 = state_18884;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18884__$1,(4),ch);
} else {
if((state_val_18885 === (9))){
var inst_18871 = (state_18884[(9)]);
var inst_18863 = inst_18871;
var state_18884__$1 = (function (){var statearr_18896 = state_18884;
(statearr_18896[(7)] = inst_18863);

return statearr_18896;
})();
var statearr_18897_20787 = state_18884__$1;
(statearr_18897_20787[(2)] = null);

(statearr_18897_20787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18885 === (5))){
var inst_18863 = (state_18884[(7)]);
var state_18884__$1 = state_18884;
var statearr_18898_20788 = state_18884__$1;
(statearr_18898_20788[(2)] = inst_18863);

(statearr_18898_20788[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18885 === (10))){
var inst_18878 = (state_18884[(2)]);
var state_18884__$1 = state_18884;
var statearr_18899_20789 = state_18884__$1;
(statearr_18899_20789[(2)] = inst_18878);

(statearr_18899_20789[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18885 === (8))){
var inst_18871 = (state_18884[(9)]);
var inst_18874 = cljs.core.deref(inst_18871);
var state_18884__$1 = state_18884;
var statearr_18900_20790 = state_18884__$1;
(statearr_18900_20790[(2)] = inst_18874);

(statearr_18900_20790[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__18041__auto__ = null;
var cljs$core$async$reduce_$_state_machine__18041__auto____0 = (function (){
var statearr_18901 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18901[(0)] = cljs$core$async$reduce_$_state_machine__18041__auto__);

(statearr_18901[(1)] = (1));

return statearr_18901;
});
var cljs$core$async$reduce_$_state_machine__18041__auto____1 = (function (state_18884){
while(true){
var ret_value__18042__auto__ = (function (){try{while(true){
var result__18043__auto__ = switch__18040__auto__(state_18884);
if(cljs.core.keyword_identical_QMARK_(result__18043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18043__auto__;
}
break;
}
}catch (e18902){var ex__18044__auto__ = e18902;
var statearr_18903_20798 = state_18884;
(statearr_18903_20798[(2)] = ex__18044__auto__);


if(cljs.core.seq((state_18884[(4)]))){
var statearr_18904_20799 = state_18884;
(statearr_18904_20799[(1)] = cljs.core.first((state_18884[(4)])));

} else {
throw ex__18044__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20800 = state_18884;
state_18884 = G__20800;
continue;
} else {
return ret_value__18042__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__18041__auto__ = function(state_18884){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__18041__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__18041__auto____1.call(this,state_18884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__18041__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__18041__auto____0;
cljs$core$async$reduce_$_state_machine__18041__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__18041__auto____1;
return cljs$core$async$reduce_$_state_machine__18041__auto__;
})()
})();
var state__18259__auto__ = (function (){var statearr_18906 = f__18258__auto__();
(statearr_18906[(6)] = c__18257__auto__);

return statearr_18906;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18259__auto__);
}));

return c__18257__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null, f));
var c__18257__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18258__auto__ = (function (){var switch__18040__auto__ = (function (state_18912){
var state_val_18913 = (state_18912[(1)]);
if((state_val_18913 === (1))){
var inst_18907 = cljs.core.async.reduce(f__$1,init,ch);
var state_18912__$1 = state_18912;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18912__$1,(2),inst_18907);
} else {
if((state_val_18913 === (2))){
var inst_18909 = (state_18912[(2)]);
var inst_18910 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_18909) : f__$1.call(null, inst_18909));
var state_18912__$1 = state_18912;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18912__$1,inst_18910);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__18041__auto__ = null;
var cljs$core$async$transduce_$_state_machine__18041__auto____0 = (function (){
var statearr_18915 = [null,null,null,null,null,null,null];
(statearr_18915[(0)] = cljs$core$async$transduce_$_state_machine__18041__auto__);

(statearr_18915[(1)] = (1));

return statearr_18915;
});
var cljs$core$async$transduce_$_state_machine__18041__auto____1 = (function (state_18912){
while(true){
var ret_value__18042__auto__ = (function (){try{while(true){
var result__18043__auto__ = switch__18040__auto__(state_18912);
if(cljs.core.keyword_identical_QMARK_(result__18043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18043__auto__;
}
break;
}
}catch (e18916){var ex__18044__auto__ = e18916;
var statearr_18917_20804 = state_18912;
(statearr_18917_20804[(2)] = ex__18044__auto__);


if(cljs.core.seq((state_18912[(4)]))){
var statearr_18918_20805 = state_18912;
(statearr_18918_20805[(1)] = cljs.core.first((state_18912[(4)])));

} else {
throw ex__18044__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20806 = state_18912;
state_18912 = G__20806;
continue;
} else {
return ret_value__18042__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__18041__auto__ = function(state_18912){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__18041__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__18041__auto____1.call(this,state_18912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__18041__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__18041__auto____0;
cljs$core$async$transduce_$_state_machine__18041__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__18041__auto____1;
return cljs$core$async$transduce_$_state_machine__18041__auto__;
})()
})();
var state__18259__auto__ = (function (){var statearr_18920 = f__18258__auto__();
(statearr_18920[(6)] = c__18257__auto__);

return statearr_18920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18259__auto__);
}));

return c__18257__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__18922 = arguments.length;
switch (G__18922) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__18257__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18258__auto__ = (function (){var switch__18040__auto__ = (function (state_18948){
var state_val_18949 = (state_18948[(1)]);
if((state_val_18949 === (7))){
var inst_18930 = (state_18948[(2)]);
var state_18948__$1 = state_18948;
var statearr_18950_20811 = state_18948__$1;
(statearr_18950_20811[(2)] = inst_18930);

(statearr_18950_20811[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18949 === (1))){
var inst_18924 = cljs.core.seq(coll);
var inst_18925 = inst_18924;
var state_18948__$1 = (function (){var statearr_18951 = state_18948;
(statearr_18951[(7)] = inst_18925);

return statearr_18951;
})();
var statearr_18952_20812 = state_18948__$1;
(statearr_18952_20812[(2)] = null);

(statearr_18952_20812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18949 === (4))){
var inst_18925 = (state_18948[(7)]);
var inst_18928 = cljs.core.first(inst_18925);
var state_18948__$1 = state_18948;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18948__$1,(7),ch,inst_18928);
} else {
if((state_val_18949 === (13))){
var inst_18942 = (state_18948[(2)]);
var state_18948__$1 = state_18948;
var statearr_18954_20813 = state_18948__$1;
(statearr_18954_20813[(2)] = inst_18942);

(statearr_18954_20813[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18949 === (6))){
var inst_18933 = (state_18948[(2)]);
var state_18948__$1 = state_18948;
if(cljs.core.truth_(inst_18933)){
var statearr_18955_20814 = state_18948__$1;
(statearr_18955_20814[(1)] = (8));

} else {
var statearr_18956_20815 = state_18948__$1;
(statearr_18956_20815[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18949 === (3))){
var inst_18946 = (state_18948[(2)]);
var state_18948__$1 = state_18948;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18948__$1,inst_18946);
} else {
if((state_val_18949 === (12))){
var state_18948__$1 = state_18948;
var statearr_18957_20816 = state_18948__$1;
(statearr_18957_20816[(2)] = null);

(statearr_18957_20816[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18949 === (2))){
var inst_18925 = (state_18948[(7)]);
var state_18948__$1 = state_18948;
if(cljs.core.truth_(inst_18925)){
var statearr_18958_20817 = state_18948__$1;
(statearr_18958_20817[(1)] = (4));

} else {
var statearr_18959_20818 = state_18948__$1;
(statearr_18959_20818[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18949 === (11))){
var inst_18939 = cljs.core.async.close_BANG_(ch);
var state_18948__$1 = state_18948;
var statearr_18960_20822 = state_18948__$1;
(statearr_18960_20822[(2)] = inst_18939);

(statearr_18960_20822[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18949 === (9))){
var state_18948__$1 = state_18948;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18961_20823 = state_18948__$1;
(statearr_18961_20823[(1)] = (11));

} else {
var statearr_18962_20824 = state_18948__$1;
(statearr_18962_20824[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18949 === (5))){
var inst_18925 = (state_18948[(7)]);
var state_18948__$1 = state_18948;
var statearr_18964_20825 = state_18948__$1;
(statearr_18964_20825[(2)] = inst_18925);

(statearr_18964_20825[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18949 === (10))){
var inst_18944 = (state_18948[(2)]);
var state_18948__$1 = state_18948;
var statearr_18966_20826 = state_18948__$1;
(statearr_18966_20826[(2)] = inst_18944);

(statearr_18966_20826[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18949 === (8))){
var inst_18925 = (state_18948[(7)]);
var inst_18935 = cljs.core.next(inst_18925);
var inst_18925__$1 = inst_18935;
var state_18948__$1 = (function (){var statearr_18967 = state_18948;
(statearr_18967[(7)] = inst_18925__$1);

return statearr_18967;
})();
var statearr_18968_20827 = state_18948__$1;
(statearr_18968_20827[(2)] = null);

(statearr_18968_20827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__18041__auto__ = null;
var cljs$core$async$state_machine__18041__auto____0 = (function (){
var statearr_18969 = [null,null,null,null,null,null,null,null];
(statearr_18969[(0)] = cljs$core$async$state_machine__18041__auto__);

(statearr_18969[(1)] = (1));

return statearr_18969;
});
var cljs$core$async$state_machine__18041__auto____1 = (function (state_18948){
while(true){
var ret_value__18042__auto__ = (function (){try{while(true){
var result__18043__auto__ = switch__18040__auto__(state_18948);
if(cljs.core.keyword_identical_QMARK_(result__18043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18043__auto__;
}
break;
}
}catch (e18970){var ex__18044__auto__ = e18970;
var statearr_18971_20828 = state_18948;
(statearr_18971_20828[(2)] = ex__18044__auto__);


if(cljs.core.seq((state_18948[(4)]))){
var statearr_18972_20829 = state_18948;
(statearr_18972_20829[(1)] = cljs.core.first((state_18948[(4)])));

} else {
throw ex__18044__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20830 = state_18948;
state_18948 = G__20830;
continue;
} else {
return ret_value__18042__auto__;
}
break;
}
});
cljs$core$async$state_machine__18041__auto__ = function(state_18948){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18041__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18041__auto____1.call(this,state_18948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18041__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18041__auto____0;
cljs$core$async$state_machine__18041__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18041__auto____1;
return cljs$core$async$state_machine__18041__auto__;
})()
})();
var state__18259__auto__ = (function (){var statearr_18973 = f__18258__auto__();
(statearr_18973[(6)] = c__18257__auto__);

return statearr_18973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18259__auto__);
}));

return c__18257__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__18977 = arguments.length;
switch (G__18977) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_20832 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_20832(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_20833 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null, m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null, m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_20833(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_20836 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_20836(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_20838 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_20838(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18985 = (function (ch,cs,meta18986){
this.ch = ch;
this.cs = cs;
this.meta18986 = meta18986;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18985.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18987,meta18986__$1){
var self__ = this;
var _18987__$1 = this;
return (new cljs.core.async.t_cljs$core$async18985(self__.ch,self__.cs,meta18986__$1));
}));

(cljs.core.async.t_cljs$core$async18985.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18987){
var self__ = this;
var _18987__$1 = this;
return self__.meta18986;
}));

(cljs.core.async.t_cljs$core$async18985.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18985.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async18985.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18985.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async18985.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async18985.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async18985.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta18986","meta18986",1525569556,null)], null);
}));

(cljs.core.async.t_cljs$core$async18985.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18985.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18985");

(cljs.core.async.t_cljs$core$async18985.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async18985");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18985.
 */
cljs.core.async.__GT_t_cljs$core$async18985 = (function cljs$core$async$__GT_t_cljs$core$async18985(ch,cs,meta18986){
return (new cljs.core.async.t_cljs$core$async18985(ch,cs,meta18986));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async18985(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__18257__auto___20840 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18258__auto__ = (function (){var switch__18040__auto__ = (function (state_19168){
var state_val_19169 = (state_19168[(1)]);
if((state_val_19169 === (7))){
var inst_19160 = (state_19168[(2)]);
var state_19168__$1 = state_19168;
var statearr_19175_20841 = state_19168__$1;
(statearr_19175_20841[(2)] = inst_19160);

(statearr_19175_20841[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19169 === (20))){
var inst_19049 = (state_19168[(7)]);
var inst_19063 = cljs.core.first(inst_19049);
var inst_19065 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19063,(0),null);
var inst_19066 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19063,(1),null);
var state_19168__$1 = (function (){var statearr_19179 = state_19168;
(statearr_19179[(8)] = inst_19065);

return statearr_19179;
})();
if(cljs.core.truth_(inst_19066)){
var statearr_19180_20846 = state_19168__$1;
(statearr_19180_20846[(1)] = (22));

} else {
var statearr_19181_20847 = state_19168__$1;
(statearr_19181_20847[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19169 === (27))){
var inst_19098 = (state_19168[(9)]);
var inst_19100 = (state_19168[(10)]);
var inst_19006 = (state_19168[(11)]);
var inst_19106 = (state_19168[(12)]);
var inst_19106__$1 = cljs.core._nth(inst_19098,inst_19100);
var inst_19107 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_19106__$1,inst_19006,done);
var state_19168__$1 = (function (){var statearr_19186 = state_19168;
(statearr_19186[(12)] = inst_19106__$1);

return statearr_19186;
})();
if(cljs.core.truth_(inst_19107)){
var statearr_19187_20851 = state_19168__$1;
(statearr_19187_20851[(1)] = (30));

} else {
var statearr_19188_20852 = state_19168__$1;
(statearr_19188_20852[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19169 === (1))){
var state_19168__$1 = state_19168;
var statearr_19190_20853 = state_19168__$1;
(statearr_19190_20853[(2)] = null);

(statearr_19190_20853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19169 === (24))){
var inst_19049 = (state_19168[(7)]);
var inst_19072 = (state_19168[(2)]);
var inst_19073 = cljs.core.next(inst_19049);
var inst_19020 = inst_19073;
var inst_19021 = null;
var inst_19022 = (0);
var inst_19023 = (0);
var state_19168__$1 = (function (){var statearr_19194 = state_19168;
(statearr_19194[(13)] = inst_19021);

(statearr_19194[(14)] = inst_19020);

(statearr_19194[(15)] = inst_19072);

(statearr_19194[(16)] = inst_19022);

(statearr_19194[(17)] = inst_19023);

return statearr_19194;
})();
var statearr_19195_20854 = state_19168__$1;
(statearr_19195_20854[(2)] = null);

(statearr_19195_20854[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19169 === (39))){
var state_19168__$1 = state_19168;
var statearr_19204_20855 = state_19168__$1;
(statearr_19204_20855[(2)] = null);

(statearr_19204_20855[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19169 === (4))){
var inst_19006 = (state_19168[(11)]);
var inst_19006__$1 = (state_19168[(2)]);
var inst_19008 = (inst_19006__$1 == null);
var state_19168__$1 = (function (){var statearr_19208 = state_19168;
(statearr_19208[(11)] = inst_19006__$1);

return statearr_19208;
})();
if(cljs.core.truth_(inst_19008)){
var statearr_19210_20856 = state_19168__$1;
(statearr_19210_20856[(1)] = (5));

} else {
var statearr_19211_20857 = state_19168__$1;
(statearr_19211_20857[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19169 === (15))){
var inst_19021 = (state_19168[(13)]);
var inst_19020 = (state_19168[(14)]);
var inst_19022 = (state_19168[(16)]);
var inst_19023 = (state_19168[(17)]);
var inst_19042 = (state_19168[(2)]);
var inst_19043 = (inst_19023 + (1));
var tmp19199 = inst_19021;
var tmp19200 = inst_19020;
var tmp19201 = inst_19022;
var inst_19020__$1 = tmp19200;
var inst_19021__$1 = tmp19199;
var inst_19022__$1 = tmp19201;
var inst_19023__$1 = inst_19043;
var state_19168__$1 = (function (){var statearr_19215 = state_19168;
(statearr_19215[(13)] = inst_19021__$1);

(statearr_19215[(18)] = inst_19042);

(statearr_19215[(14)] = inst_19020__$1);

(statearr_19215[(16)] = inst_19022__$1);

(statearr_19215[(17)] = inst_19023__$1);

return statearr_19215;
})();
var statearr_19217_20859 = state_19168__$1;
(statearr_19217_20859[(2)] = null);

(statearr_19217_20859[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19169 === (21))){
var inst_19076 = (state_19168[(2)]);
var state_19168__$1 = state_19168;
var statearr_19224_20860 = state_19168__$1;
(statearr_19224_20860[(2)] = inst_19076);

(statearr_19224_20860[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19169 === (31))){
var inst_19106 = (state_19168[(12)]);
var inst_19111 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_19106);
var state_19168__$1 = state_19168;
var statearr_19228_20864 = state_19168__$1;
(statearr_19228_20864[(2)] = inst_19111);

(statearr_19228_20864[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19169 === (32))){
var inst_19098 = (state_19168[(9)]);
var inst_19097 = (state_19168[(19)]);
var inst_19100 = (state_19168[(10)]);
var inst_19099 = (state_19168[(20)]);
var inst_19113 = (state_19168[(2)]);
var inst_19114 = (inst_19100 + (1));
var tmp19221 = inst_19098;
var tmp19222 = inst_19097;
var tmp19223 = inst_19099;
var inst_19097__$1 = tmp19222;
var inst_19098__$1 = tmp19221;
var inst_19099__$1 = tmp19223;
var inst_19100__$1 = inst_19114;
var state_19168__$1 = (function (){var statearr_19234 = state_19168;
(statearr_19234[(9)] = inst_19098__$1);

(statearr_19234[(19)] = inst_19097__$1);

(statearr_19234[(21)] = inst_19113);

(statearr_19234[(10)] = inst_19100__$1);

(statearr_19234[(20)] = inst_19099__$1);

return statearr_19234;
})();
var statearr_19236_20865 = state_19168__$1;
(statearr_19236_20865[(2)] = null);

(statearr_19236_20865[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19169 === (40))){
var inst_19131 = (state_19168[(22)]);
var inst_19137 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_19131);
var state_19168__$1 = state_19168;
var statearr_19240_20869 = state_19168__$1;
(statearr_19240_20869[(2)] = inst_19137);

(statearr_19240_20869[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19169 === (33))){
var inst_19119 = (state_19168[(23)]);
var inst_19122 = cljs.core.chunked_seq_QMARK_(inst_19119);
var state_19168__$1 = state_19168;
if(inst_19122){
var statearr_19242_20870 = state_19168__$1;
(statearr_19242_20870[(1)] = (36));

} else {
var statearr_19243_20871 = state_19168__$1;
(statearr_19243_20871[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19169 === (13))){
var inst_19035 = (state_19168[(24)]);
var inst_19039 = cljs.core.async.close_BANG_(inst_19035);
var state_19168__$1 = state_19168;
var statearr_19247_20872 = state_19168__$1;
(statearr_19247_20872[(2)] = inst_19039);

(statearr_19247_20872[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19169 === (22))){
var inst_19065 = (state_19168[(8)]);
var inst_19069 = cljs.core.async.close_BANG_(inst_19065);
var state_19168__$1 = state_19168;
var statearr_19250_20873 = state_19168__$1;
(statearr_19250_20873[(2)] = inst_19069);

(statearr_19250_20873[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19169 === (36))){
var inst_19119 = (state_19168[(23)]);
var inst_19124 = cljs.core.chunk_first(inst_19119);
var inst_19126 = cljs.core.chunk_rest(inst_19119);
var inst_19127 = cljs.core.count(inst_19124);
var inst_19097 = inst_19126;
var inst_19098 = inst_19124;
var inst_19099 = inst_19127;
var inst_19100 = (0);
var state_19168__$1 = (function (){var statearr_19254 = state_19168;
(statearr_19254[(9)] = inst_19098);

(statearr_19254[(19)] = inst_19097);

(statearr_19254[(10)] = inst_19100);

(statearr_19254[(20)] = inst_19099);

return statearr_19254;
})();
var statearr_19256_20880 = state_19168__$1;
(statearr_19256_20880[(2)] = null);

(statearr_19256_20880[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19169 === (41))){
var inst_19119 = (state_19168[(23)]);
var inst_19139 = (state_19168[(2)]);
var inst_19140 = cljs.core.next(inst_19119);
var inst_19097 = inst_19140;
var inst_19098 = null;
var inst_19099 = (0);
var inst_19100 = (0);
var state_19168__$1 = (function (){var statearr_19262 = state_19168;
(statearr_19262[(9)] = inst_19098);

(statearr_19262[(19)] = inst_19097);

(statearr_19262[(25)] = inst_19139);

(statearr_19262[(10)] = inst_19100);

(statearr_19262[(20)] = inst_19099);

return statearr_19262;
})();
var statearr_19264_20884 = state_19168__$1;
(statearr_19264_20884[(2)] = null);

(statearr_19264_20884[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19169 === (43))){
var state_19168__$1 = state_19168;
var statearr_19267_20885 = state_19168__$1;
(statearr_19267_20885[(2)] = null);

(statearr_19267_20885[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19169 === (29))){
var inst_19148 = (state_19168[(2)]);
var state_19168__$1 = state_19168;
var statearr_19271_20886 = state_19168__$1;
(statearr_19271_20886[(2)] = inst_19148);

(statearr_19271_20886[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19169 === (44))){
var inst_19157 = (state_19168[(2)]);
var state_19168__$1 = (function (){var statearr_19272 = state_19168;
(statearr_19272[(26)] = inst_19157);

return statearr_19272;
})();
var statearr_19274_20887 = state_19168__$1;
(statearr_19274_20887[(2)] = null);

(statearr_19274_20887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19169 === (6))){
var inst_19087 = (state_19168[(27)]);
var inst_19086 = cljs.core.deref(cs);
var inst_19087__$1 = cljs.core.keys(inst_19086);
var inst_19088 = cljs.core.count(inst_19087__$1);
var inst_19089 = cljs.core.reset_BANG_(dctr,inst_19088);
var inst_19095 = cljs.core.seq(inst_19087__$1);
var inst_19097 = inst_19095;
var inst_19098 = null;
var inst_19099 = (0);
var inst_19100 = (0);
var state_19168__$1 = (function (){var statearr_19277 = state_19168;
(statearr_19277[(9)] = inst_19098);

(statearr_19277[(19)] = inst_19097);

(statearr_19277[(10)] = inst_19100);

(statearr_19277[(27)] = inst_19087__$1);

(statearr_19277[(20)] = inst_19099);

(statearr_19277[(28)] = inst_19089);

return statearr_19277;
})();
var statearr_19279_20888 = state_19168__$1;
(statearr_19279_20888[(2)] = null);

(statearr_19279_20888[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19169 === (28))){
var inst_19097 = (state_19168[(19)]);
var inst_19119 = (state_19168[(23)]);
var inst_19119__$1 = cljs.core.seq(inst_19097);
var state_19168__$1 = (function (){var statearr_19280 = state_19168;
(statearr_19280[(23)] = inst_19119__$1);

return statearr_19280;
})();
if(inst_19119__$1){
var statearr_19281_20889 = state_19168__$1;
(statearr_19281_20889[(1)] = (33));

} else {
var statearr_19282_20890 = state_19168__$1;
(statearr_19282_20890[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19169 === (25))){
var inst_19100 = (state_19168[(10)]);
var inst_19099 = (state_19168[(20)]);
var inst_19103 = (inst_19100 < inst_19099);
var inst_19104 = inst_19103;
var state_19168__$1 = state_19168;
if(cljs.core.truth_(inst_19104)){
var statearr_19284_20891 = state_19168__$1;
(statearr_19284_20891[(1)] = (27));

} else {
var statearr_19285_20892 = state_19168__$1;
(statearr_19285_20892[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19169 === (34))){
var state_19168__$1 = state_19168;
var statearr_19290_20893 = state_19168__$1;
(statearr_19290_20893[(2)] = null);

(statearr_19290_20893[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19169 === (17))){
var state_19168__$1 = state_19168;
var statearr_19292_20895 = state_19168__$1;
(statearr_19292_20895[(2)] = null);

(statearr_19292_20895[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19169 === (3))){
var inst_19163 = (state_19168[(2)]);
var state_19168__$1 = state_19168;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19168__$1,inst_19163);
} else {
if((state_val_19169 === (12))){
var inst_19082 = (state_19168[(2)]);
var state_19168__$1 = state_19168;
var statearr_19296_20900 = state_19168__$1;
(statearr_19296_20900[(2)] = inst_19082);

(statearr_19296_20900[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19169 === (2))){
var state_19168__$1 = state_19168;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19168__$1,(4),ch);
} else {
if((state_val_19169 === (23))){
var state_19168__$1 = state_19168;
var statearr_19301_20901 = state_19168__$1;
(statearr_19301_20901[(2)] = null);

(statearr_19301_20901[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19169 === (35))){
var inst_19146 = (state_19168[(2)]);
var state_19168__$1 = state_19168;
var statearr_19303_20902 = state_19168__$1;
(statearr_19303_20902[(2)] = inst_19146);

(statearr_19303_20902[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19169 === (19))){
var inst_19049 = (state_19168[(7)]);
var inst_19053 = cljs.core.chunk_first(inst_19049);
var inst_19055 = cljs.core.chunk_rest(inst_19049);
var inst_19056 = cljs.core.count(inst_19053);
var inst_19020 = inst_19055;
var inst_19021 = inst_19053;
var inst_19022 = inst_19056;
var inst_19023 = (0);
var state_19168__$1 = (function (){var statearr_19308 = state_19168;
(statearr_19308[(13)] = inst_19021);

(statearr_19308[(14)] = inst_19020);

(statearr_19308[(16)] = inst_19022);

(statearr_19308[(17)] = inst_19023);

return statearr_19308;
})();
var statearr_19309_20903 = state_19168__$1;
(statearr_19309_20903[(2)] = null);

(statearr_19309_20903[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19169 === (11))){
var inst_19020 = (state_19168[(14)]);
var inst_19049 = (state_19168[(7)]);
var inst_19049__$1 = cljs.core.seq(inst_19020);
var state_19168__$1 = (function (){var statearr_19314 = state_19168;
(statearr_19314[(7)] = inst_19049__$1);

return statearr_19314;
})();
if(inst_19049__$1){
var statearr_19315_20904 = state_19168__$1;
(statearr_19315_20904[(1)] = (16));

} else {
var statearr_19316_20905 = state_19168__$1;
(statearr_19316_20905[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19169 === (9))){
var inst_19084 = (state_19168[(2)]);
var state_19168__$1 = state_19168;
var statearr_19318_20906 = state_19168__$1;
(statearr_19318_20906[(2)] = inst_19084);

(statearr_19318_20906[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19169 === (5))){
var inst_19017 = cljs.core.deref(cs);
var inst_19018 = cljs.core.seq(inst_19017);
var inst_19020 = inst_19018;
var inst_19021 = null;
var inst_19022 = (0);
var inst_19023 = (0);
var state_19168__$1 = (function (){var statearr_19323 = state_19168;
(statearr_19323[(13)] = inst_19021);

(statearr_19323[(14)] = inst_19020);

(statearr_19323[(16)] = inst_19022);

(statearr_19323[(17)] = inst_19023);

return statearr_19323;
})();
var statearr_19325_20907 = state_19168__$1;
(statearr_19325_20907[(2)] = null);

(statearr_19325_20907[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19169 === (14))){
var state_19168__$1 = state_19168;
var statearr_19332_20912 = state_19168__$1;
(statearr_19332_20912[(2)] = null);

(statearr_19332_20912[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19169 === (45))){
var inst_19154 = (state_19168[(2)]);
var state_19168__$1 = state_19168;
var statearr_19334_20913 = state_19168__$1;
(statearr_19334_20913[(2)] = inst_19154);

(statearr_19334_20913[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19169 === (26))){
var inst_19087 = (state_19168[(27)]);
var inst_19150 = (state_19168[(2)]);
var inst_19151 = cljs.core.seq(inst_19087);
var state_19168__$1 = (function (){var statearr_19338 = state_19168;
(statearr_19338[(29)] = inst_19150);

return statearr_19338;
})();
if(inst_19151){
var statearr_19339_20914 = state_19168__$1;
(statearr_19339_20914[(1)] = (42));

} else {
var statearr_19341_20915 = state_19168__$1;
(statearr_19341_20915[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19169 === (16))){
var inst_19049 = (state_19168[(7)]);
var inst_19051 = cljs.core.chunked_seq_QMARK_(inst_19049);
var state_19168__$1 = state_19168;
if(inst_19051){
var statearr_19344_20920 = state_19168__$1;
(statearr_19344_20920[(1)] = (19));

} else {
var statearr_19346_20921 = state_19168__$1;
(statearr_19346_20921[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19169 === (38))){
var inst_19143 = (state_19168[(2)]);
var state_19168__$1 = state_19168;
var statearr_19348_20922 = state_19168__$1;
(statearr_19348_20922[(2)] = inst_19143);

(statearr_19348_20922[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19169 === (30))){
var state_19168__$1 = state_19168;
var statearr_19351_20923 = state_19168__$1;
(statearr_19351_20923[(2)] = null);

(statearr_19351_20923[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19169 === (10))){
var inst_19021 = (state_19168[(13)]);
var inst_19023 = (state_19168[(17)]);
var inst_19034 = cljs.core._nth(inst_19021,inst_19023);
var inst_19035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19034,(0),null);
var inst_19036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19034,(1),null);
var state_19168__$1 = (function (){var statearr_19356 = state_19168;
(statearr_19356[(24)] = inst_19035);

return statearr_19356;
})();
if(cljs.core.truth_(inst_19036)){
var statearr_19359_20924 = state_19168__$1;
(statearr_19359_20924[(1)] = (13));

} else {
var statearr_19361_20925 = state_19168__$1;
(statearr_19361_20925[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19169 === (18))){
var inst_19079 = (state_19168[(2)]);
var state_19168__$1 = state_19168;
var statearr_19363_20926 = state_19168__$1;
(statearr_19363_20926[(2)] = inst_19079);

(statearr_19363_20926[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19169 === (42))){
var state_19168__$1 = state_19168;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19168__$1,(45),dchan);
} else {
if((state_val_19169 === (37))){
var inst_19119 = (state_19168[(23)]);
var inst_19006 = (state_19168[(11)]);
var inst_19131 = (state_19168[(22)]);
var inst_19131__$1 = cljs.core.first(inst_19119);
var inst_19133 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_19131__$1,inst_19006,done);
var state_19168__$1 = (function (){var statearr_19371 = state_19168;
(statearr_19371[(22)] = inst_19131__$1);

return statearr_19371;
})();
if(cljs.core.truth_(inst_19133)){
var statearr_19372_20927 = state_19168__$1;
(statearr_19372_20927[(1)] = (39));

} else {
var statearr_19373_20928 = state_19168__$1;
(statearr_19373_20928[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19169 === (8))){
var inst_19022 = (state_19168[(16)]);
var inst_19023 = (state_19168[(17)]);
var inst_19025 = (inst_19023 < inst_19022);
var inst_19026 = inst_19025;
var state_19168__$1 = state_19168;
if(cljs.core.truth_(inst_19026)){
var statearr_19377_20929 = state_19168__$1;
(statearr_19377_20929[(1)] = (10));

} else {
var statearr_19378_20930 = state_19168__$1;
(statearr_19378_20930[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__18041__auto__ = null;
var cljs$core$async$mult_$_state_machine__18041__auto____0 = (function (){
var statearr_19379 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19379[(0)] = cljs$core$async$mult_$_state_machine__18041__auto__);

(statearr_19379[(1)] = (1));

return statearr_19379;
});
var cljs$core$async$mult_$_state_machine__18041__auto____1 = (function (state_19168){
while(true){
var ret_value__18042__auto__ = (function (){try{while(true){
var result__18043__auto__ = switch__18040__auto__(state_19168);
if(cljs.core.keyword_identical_QMARK_(result__18043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18043__auto__;
}
break;
}
}catch (e19380){var ex__18044__auto__ = e19380;
var statearr_19381_20933 = state_19168;
(statearr_19381_20933[(2)] = ex__18044__auto__);


if(cljs.core.seq((state_19168[(4)]))){
var statearr_19382_20934 = state_19168;
(statearr_19382_20934[(1)] = cljs.core.first((state_19168[(4)])));

} else {
throw ex__18044__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20935 = state_19168;
state_19168 = G__20935;
continue;
} else {
return ret_value__18042__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__18041__auto__ = function(state_19168){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__18041__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__18041__auto____1.call(this,state_19168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__18041__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__18041__auto____0;
cljs$core$async$mult_$_state_machine__18041__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__18041__auto____1;
return cljs$core$async$mult_$_state_machine__18041__auto__;
})()
})();
var state__18259__auto__ = (function (){var statearr_19383 = f__18258__auto__();
(statearr_19383[(6)] = c__18257__auto___20840);

return statearr_19383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18259__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__19385 = arguments.length;
switch (G__19385) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_20937 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_20937(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_20941 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_20941(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_20942 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_20942(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_20943 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null, m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null, m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_20943(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_20944 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null, m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null, m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_20944(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___20945 = arguments.length;
var i__5727__auto___20946 = (0);
while(true){
if((i__5727__auto___20946 < len__5726__auto___20945)){
args__5732__auto__.push((arguments[i__5727__auto___20946]));

var G__20947 = (i__5727__auto___20946 + (1));
i__5727__auto___20946 = G__20947;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__19392){
var map__19393 = p__19392;
var map__19393__$1 = cljs.core.__destructure_map(map__19393);
var opts = map__19393__$1;
var statearr_19394_20950 = state;
(statearr_19394_20950[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_19395_20951 = state;
(statearr_19395_20951[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_19397_20952 = state;
(statearr_19397_20952[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq19388){
var G__19389 = cljs.core.first(seq19388);
var seq19388__$1 = cljs.core.next(seq19388);
var G__19390 = cljs.core.first(seq19388__$1);
var seq19388__$2 = cljs.core.next(seq19388__$1);
var G__19391 = cljs.core.first(seq19388__$2);
var seq19388__$3 = cljs.core.next(seq19388__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19389,G__19390,G__19391,seq19388__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19420 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19421){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta19421 = meta19421;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19420.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19422,meta19421__$1){
var self__ = this;
var _19422__$1 = this;
return (new cljs.core.async.t_cljs$core$async19420(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta19421__$1));
}));

(cljs.core.async.t_cljs$core$async19420.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19422){
var self__ = this;
var _19422__$1 = this;
return self__.meta19421;
}));

(cljs.core.async.t_cljs$core$async19420.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19420.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async19420.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19420.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async19420.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async19420.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async19420.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async19420.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null, mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async19420.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta19421","meta19421",1915013714,null)], null);
}));

(cljs.core.async.t_cljs$core$async19420.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19420.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19420");

(cljs.core.async.t_cljs$core$async19420.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async19420");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19420.
 */
cljs.core.async.__GT_t_cljs$core$async19420 = (function cljs$core$async$__GT_t_cljs$core$async19420(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19421){
return (new cljs.core.async.t_cljs$core$async19420(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19421));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null, v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async19420(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__18257__auto___20963 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18258__auto__ = (function (){var switch__18040__auto__ = (function (state_19524){
var state_val_19525 = (state_19524[(1)]);
if((state_val_19525 === (7))){
var inst_19480 = (state_19524[(2)]);
var state_19524__$1 = state_19524;
if(cljs.core.truth_(inst_19480)){
var statearr_19530_20964 = state_19524__$1;
(statearr_19530_20964[(1)] = (8));

} else {
var statearr_19531_20968 = state_19524__$1;
(statearr_19531_20968[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19525 === (20))){
var inst_19472 = (state_19524[(7)]);
var state_19524__$1 = state_19524;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19524__$1,(23),out,inst_19472);
} else {
if((state_val_19525 === (1))){
var inst_19454 = calc_state();
var inst_19455 = cljs.core.__destructure_map(inst_19454);
var inst_19457 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19455,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19458 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19455,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19459 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19455,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_19460 = inst_19454;
var state_19524__$1 = (function (){var statearr_19536 = state_19524;
(statearr_19536[(8)] = inst_19459);

(statearr_19536[(9)] = inst_19457);

(statearr_19536[(10)] = inst_19458);

(statearr_19536[(11)] = inst_19460);

return statearr_19536;
})();
var statearr_19540_20969 = state_19524__$1;
(statearr_19540_20969[(2)] = null);

(statearr_19540_20969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19525 === (24))){
var inst_19463 = (state_19524[(12)]);
var inst_19460 = inst_19463;
var state_19524__$1 = (function (){var statearr_19542 = state_19524;
(statearr_19542[(11)] = inst_19460);

return statearr_19542;
})();
var statearr_19543_20970 = state_19524__$1;
(statearr_19543_20970[(2)] = null);

(statearr_19543_20970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19525 === (4))){
var inst_19475 = (state_19524[(13)]);
var inst_19472 = (state_19524[(7)]);
var inst_19471 = (state_19524[(2)]);
var inst_19472__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19471,(0),null);
var inst_19473 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19471,(1),null);
var inst_19475__$1 = (inst_19472__$1 == null);
var state_19524__$1 = (function (){var statearr_19548 = state_19524;
(statearr_19548[(14)] = inst_19473);

(statearr_19548[(13)] = inst_19475__$1);

(statearr_19548[(7)] = inst_19472__$1);

return statearr_19548;
})();
if(cljs.core.truth_(inst_19475__$1)){
var statearr_19549_20971 = state_19524__$1;
(statearr_19549_20971[(1)] = (5));

} else {
var statearr_19550_20972 = state_19524__$1;
(statearr_19550_20972[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19525 === (15))){
var inst_19494 = (state_19524[(15)]);
var inst_19464 = (state_19524[(16)]);
var inst_19494__$1 = cljs.core.empty_QMARK_(inst_19464);
var state_19524__$1 = (function (){var statearr_19551 = state_19524;
(statearr_19551[(15)] = inst_19494__$1);

return statearr_19551;
})();
if(inst_19494__$1){
var statearr_19552_20974 = state_19524__$1;
(statearr_19552_20974[(1)] = (17));

} else {
var statearr_19554_20975 = state_19524__$1;
(statearr_19554_20975[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19525 === (21))){
var inst_19463 = (state_19524[(12)]);
var inst_19460 = inst_19463;
var state_19524__$1 = (function (){var statearr_19555 = state_19524;
(statearr_19555[(11)] = inst_19460);

return statearr_19555;
})();
var statearr_19556_20976 = state_19524__$1;
(statearr_19556_20976[(2)] = null);

(statearr_19556_20976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19525 === (13))){
var inst_19487 = (state_19524[(2)]);
var inst_19488 = calc_state();
var inst_19460 = inst_19488;
var state_19524__$1 = (function (){var statearr_19557 = state_19524;
(statearr_19557[(17)] = inst_19487);

(statearr_19557[(11)] = inst_19460);

return statearr_19557;
})();
var statearr_19558_20977 = state_19524__$1;
(statearr_19558_20977[(2)] = null);

(statearr_19558_20977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19525 === (22))){
var inst_19514 = (state_19524[(2)]);
var state_19524__$1 = state_19524;
var statearr_19563_20978 = state_19524__$1;
(statearr_19563_20978[(2)] = inst_19514);

(statearr_19563_20978[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19525 === (6))){
var inst_19473 = (state_19524[(14)]);
var inst_19478 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19473,change);
var state_19524__$1 = state_19524;
var statearr_19568_20980 = state_19524__$1;
(statearr_19568_20980[(2)] = inst_19478);

(statearr_19568_20980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19525 === (25))){
var state_19524__$1 = state_19524;
var statearr_19569_20981 = state_19524__$1;
(statearr_19569_20981[(2)] = null);

(statearr_19569_20981[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19525 === (17))){
var inst_19473 = (state_19524[(14)]);
var inst_19465 = (state_19524[(18)]);
var inst_19496 = (inst_19465.cljs$core$IFn$_invoke$arity$1 ? inst_19465.cljs$core$IFn$_invoke$arity$1(inst_19473) : inst_19465.call(null, inst_19473));
var inst_19497 = cljs.core.not(inst_19496);
var state_19524__$1 = state_19524;
var statearr_19573_20985 = state_19524__$1;
(statearr_19573_20985[(2)] = inst_19497);

(statearr_19573_20985[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19525 === (3))){
var inst_19518 = (state_19524[(2)]);
var state_19524__$1 = state_19524;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19524__$1,inst_19518);
} else {
if((state_val_19525 === (12))){
var state_19524__$1 = state_19524;
var statearr_19575_20986 = state_19524__$1;
(statearr_19575_20986[(2)] = null);

(statearr_19575_20986[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19525 === (2))){
var inst_19463 = (state_19524[(12)]);
var inst_19460 = (state_19524[(11)]);
var inst_19463__$1 = cljs.core.__destructure_map(inst_19460);
var inst_19464 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19463__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19465 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19463__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19466 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19463__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_19524__$1 = (function (){var statearr_19580 = state_19524;
(statearr_19580[(18)] = inst_19465);

(statearr_19580[(12)] = inst_19463__$1);

(statearr_19580[(16)] = inst_19464);

return statearr_19580;
})();
return cljs.core.async.ioc_alts_BANG_(state_19524__$1,(4),inst_19466);
} else {
if((state_val_19525 === (23))){
var inst_19505 = (state_19524[(2)]);
var state_19524__$1 = state_19524;
if(cljs.core.truth_(inst_19505)){
var statearr_19584_20988 = state_19524__$1;
(statearr_19584_20988[(1)] = (24));

} else {
var statearr_19585_20989 = state_19524__$1;
(statearr_19585_20989[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19525 === (19))){
var inst_19500 = (state_19524[(2)]);
var state_19524__$1 = state_19524;
var statearr_19587_20990 = state_19524__$1;
(statearr_19587_20990[(2)] = inst_19500);

(statearr_19587_20990[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19525 === (11))){
var inst_19473 = (state_19524[(14)]);
var inst_19484 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_19473);
var state_19524__$1 = state_19524;
var statearr_19588_20991 = state_19524__$1;
(statearr_19588_20991[(2)] = inst_19484);

(statearr_19588_20991[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19525 === (9))){
var inst_19473 = (state_19524[(14)]);
var inst_19464 = (state_19524[(16)]);
var inst_19491 = (state_19524[(19)]);
var inst_19491__$1 = (inst_19464.cljs$core$IFn$_invoke$arity$1 ? inst_19464.cljs$core$IFn$_invoke$arity$1(inst_19473) : inst_19464.call(null, inst_19473));
var state_19524__$1 = (function (){var statearr_19589 = state_19524;
(statearr_19589[(19)] = inst_19491__$1);

return statearr_19589;
})();
if(cljs.core.truth_(inst_19491__$1)){
var statearr_19590_20992 = state_19524__$1;
(statearr_19590_20992[(1)] = (14));

} else {
var statearr_19591_20993 = state_19524__$1;
(statearr_19591_20993[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19525 === (5))){
var inst_19475 = (state_19524[(13)]);
var state_19524__$1 = state_19524;
var statearr_19592_20994 = state_19524__$1;
(statearr_19592_20994[(2)] = inst_19475);

(statearr_19592_20994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19525 === (14))){
var inst_19491 = (state_19524[(19)]);
var state_19524__$1 = state_19524;
var statearr_19593_20995 = state_19524__$1;
(statearr_19593_20995[(2)] = inst_19491);

(statearr_19593_20995[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19525 === (26))){
var inst_19510 = (state_19524[(2)]);
var state_19524__$1 = state_19524;
var statearr_19598_20996 = state_19524__$1;
(statearr_19598_20996[(2)] = inst_19510);

(statearr_19598_20996[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19525 === (16))){
var inst_19502 = (state_19524[(2)]);
var state_19524__$1 = state_19524;
if(cljs.core.truth_(inst_19502)){
var statearr_19599_20997 = state_19524__$1;
(statearr_19599_20997[(1)] = (20));

} else {
var statearr_19600_20998 = state_19524__$1;
(statearr_19600_20998[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19525 === (10))){
var inst_19516 = (state_19524[(2)]);
var state_19524__$1 = state_19524;
var statearr_19601_20999 = state_19524__$1;
(statearr_19601_20999[(2)] = inst_19516);

(statearr_19601_20999[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19525 === (18))){
var inst_19494 = (state_19524[(15)]);
var state_19524__$1 = state_19524;
var statearr_19603_21000 = state_19524__$1;
(statearr_19603_21000[(2)] = inst_19494);

(statearr_19603_21000[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19525 === (8))){
var inst_19472 = (state_19524[(7)]);
var inst_19482 = (inst_19472 == null);
var state_19524__$1 = state_19524;
if(cljs.core.truth_(inst_19482)){
var statearr_19604_21001 = state_19524__$1;
(statearr_19604_21001[(1)] = (11));

} else {
var statearr_19605_21002 = state_19524__$1;
(statearr_19605_21002[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__18041__auto__ = null;
var cljs$core$async$mix_$_state_machine__18041__auto____0 = (function (){
var statearr_19606 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19606[(0)] = cljs$core$async$mix_$_state_machine__18041__auto__);

(statearr_19606[(1)] = (1));

return statearr_19606;
});
var cljs$core$async$mix_$_state_machine__18041__auto____1 = (function (state_19524){
while(true){
var ret_value__18042__auto__ = (function (){try{while(true){
var result__18043__auto__ = switch__18040__auto__(state_19524);
if(cljs.core.keyword_identical_QMARK_(result__18043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18043__auto__;
}
break;
}
}catch (e19607){var ex__18044__auto__ = e19607;
var statearr_19608_21003 = state_19524;
(statearr_19608_21003[(2)] = ex__18044__auto__);


if(cljs.core.seq((state_19524[(4)]))){
var statearr_19609_21004 = state_19524;
(statearr_19609_21004[(1)] = cljs.core.first((state_19524[(4)])));

} else {
throw ex__18044__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21008 = state_19524;
state_19524 = G__21008;
continue;
} else {
return ret_value__18042__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__18041__auto__ = function(state_19524){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__18041__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__18041__auto____1.call(this,state_19524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__18041__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__18041__auto____0;
cljs$core$async$mix_$_state_machine__18041__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__18041__auto____1;
return cljs$core$async$mix_$_state_machine__18041__auto__;
})()
})();
var state__18259__auto__ = (function (){var statearr_19610 = f__18258__auto__();
(statearr_19610[(6)] = c__18257__auto___20963);

return statearr_19610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18259__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_21009 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null, p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null, p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_21009(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_21010 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null, p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null, p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_21010(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_21011 = (function() {
var G__21012 = null;
var G__21012__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null, p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null, p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__21012__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null, p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null, p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__21012 = function(p,v){
switch(arguments.length){
case 1:
return G__21012__1.call(this,p);
case 2:
return G__21012__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21012.cljs$core$IFn$_invoke$arity$1 = G__21012__1;
G__21012.cljs$core$IFn$_invoke$arity$2 = G__21012__2;
return G__21012;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__19614 = arguments.length;
switch (G__19614) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_21011(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_21011(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19622 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta19623){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta19623 = meta19623;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19622.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19624,meta19623__$1){
var self__ = this;
var _19624__$1 = this;
return (new cljs.core.async.t_cljs$core$async19622(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta19623__$1));
}));

(cljs.core.async.t_cljs$core$async19622.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19624){
var self__ = this;
var _19624__$1 = this;
return self__.meta19623;
}));

(cljs.core.async.t_cljs$core$async19622.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19622.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async19622.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19622.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null, topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async19622.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async19622.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async19622.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async19622.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta19623","meta19623",-697415032,null)], null);
}));

(cljs.core.async.t_cljs$core$async19622.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19622.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19622");

(cljs.core.async.t_cljs$core$async19622.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async19622");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19622.
 */
cljs.core.async.__GT_t_cljs$core$async19622 = (function cljs$core$async$__GT_t_cljs$core$async19622(ch,topic_fn,buf_fn,mults,ensure_mult,meta19623){
return (new cljs.core.async.t_cljs$core$async19622(ch,topic_fn,buf_fn,mults,ensure_mult,meta19623));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__19619 = arguments.length;
switch (G__19619) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__19617_SHARP_){
if(cljs.core.truth_((p1__19617_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__19617_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__19617_SHARP_.call(null, topic)))){
return p1__19617_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__19617_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null, topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async19622(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__18257__auto___21019 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18258__auto__ = (function (){var switch__18040__auto__ = (function (state_19704){
var state_val_19705 = (state_19704[(1)]);
if((state_val_19705 === (7))){
var inst_19700 = (state_19704[(2)]);
var state_19704__$1 = state_19704;
var statearr_19706_21020 = state_19704__$1;
(statearr_19706_21020[(2)] = inst_19700);

(statearr_19706_21020[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19705 === (20))){
var state_19704__$1 = state_19704;
var statearr_19708_21021 = state_19704__$1;
(statearr_19708_21021[(2)] = null);

(statearr_19708_21021[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19705 === (1))){
var state_19704__$1 = state_19704;
var statearr_19709_21022 = state_19704__$1;
(statearr_19709_21022[(2)] = null);

(statearr_19709_21022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19705 === (24))){
var inst_19679 = (state_19704[(7)]);
var inst_19689 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_19679);
var state_19704__$1 = state_19704;
var statearr_19711_21023 = state_19704__$1;
(statearr_19711_21023[(2)] = inst_19689);

(statearr_19711_21023[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19705 === (4))){
var inst_19629 = (state_19704[(8)]);
var inst_19629__$1 = (state_19704[(2)]);
var inst_19630 = (inst_19629__$1 == null);
var state_19704__$1 = (function (){var statearr_19712 = state_19704;
(statearr_19712[(8)] = inst_19629__$1);

return statearr_19712;
})();
if(cljs.core.truth_(inst_19630)){
var statearr_19713_21025 = state_19704__$1;
(statearr_19713_21025[(1)] = (5));

} else {
var statearr_19715_21026 = state_19704__$1;
(statearr_19715_21026[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19705 === (15))){
var inst_19673 = (state_19704[(2)]);
var state_19704__$1 = state_19704;
var statearr_19716_21027 = state_19704__$1;
(statearr_19716_21027[(2)] = inst_19673);

(statearr_19716_21027[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19705 === (21))){
var inst_19694 = (state_19704[(2)]);
var state_19704__$1 = (function (){var statearr_19719 = state_19704;
(statearr_19719[(9)] = inst_19694);

return statearr_19719;
})();
var statearr_19720_21030 = state_19704__$1;
(statearr_19720_21030[(2)] = null);

(statearr_19720_21030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19705 === (13))){
var inst_19655 = (state_19704[(10)]);
var inst_19657 = cljs.core.chunked_seq_QMARK_(inst_19655);
var state_19704__$1 = state_19704;
if(inst_19657){
var statearr_19721_21032 = state_19704__$1;
(statearr_19721_21032[(1)] = (16));

} else {
var statearr_19722_21033 = state_19704__$1;
(statearr_19722_21033[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19705 === (22))){
var inst_19686 = (state_19704[(2)]);
var state_19704__$1 = state_19704;
if(cljs.core.truth_(inst_19686)){
var statearr_19723_21034 = state_19704__$1;
(statearr_19723_21034[(1)] = (23));

} else {
var statearr_19724_21035 = state_19704__$1;
(statearr_19724_21035[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19705 === (6))){
var inst_19629 = (state_19704[(8)]);
var inst_19679 = (state_19704[(7)]);
var inst_19681 = (state_19704[(11)]);
var inst_19679__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_19629) : topic_fn.call(null, inst_19629));
var inst_19680 = cljs.core.deref(mults);
var inst_19681__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19680,inst_19679__$1);
var state_19704__$1 = (function (){var statearr_19728 = state_19704;
(statearr_19728[(7)] = inst_19679__$1);

(statearr_19728[(11)] = inst_19681__$1);

return statearr_19728;
})();
if(cljs.core.truth_(inst_19681__$1)){
var statearr_19729_21036 = state_19704__$1;
(statearr_19729_21036[(1)] = (19));

} else {
var statearr_19730_21037 = state_19704__$1;
(statearr_19730_21037[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19705 === (25))){
var inst_19691 = (state_19704[(2)]);
var state_19704__$1 = state_19704;
var statearr_19731_21038 = state_19704__$1;
(statearr_19731_21038[(2)] = inst_19691);

(statearr_19731_21038[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19705 === (17))){
var inst_19655 = (state_19704[(10)]);
var inst_19664 = cljs.core.first(inst_19655);
var inst_19665 = cljs.core.async.muxch_STAR_(inst_19664);
var inst_19666 = cljs.core.async.close_BANG_(inst_19665);
var inst_19667 = cljs.core.next(inst_19655);
var inst_19640 = inst_19667;
var inst_19641 = null;
var inst_19642 = (0);
var inst_19643 = (0);
var state_19704__$1 = (function (){var statearr_19732 = state_19704;
(statearr_19732[(12)] = inst_19640);

(statearr_19732[(13)] = inst_19643);

(statearr_19732[(14)] = inst_19666);

(statearr_19732[(15)] = inst_19642);

(statearr_19732[(16)] = inst_19641);

return statearr_19732;
})();
var statearr_19733_21040 = state_19704__$1;
(statearr_19733_21040[(2)] = null);

(statearr_19733_21040[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19705 === (3))){
var inst_19702 = (state_19704[(2)]);
var state_19704__$1 = state_19704;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19704__$1,inst_19702);
} else {
if((state_val_19705 === (12))){
var inst_19675 = (state_19704[(2)]);
var state_19704__$1 = state_19704;
var statearr_19734_21041 = state_19704__$1;
(statearr_19734_21041[(2)] = inst_19675);

(statearr_19734_21041[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19705 === (2))){
var state_19704__$1 = state_19704;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19704__$1,(4),ch);
} else {
if((state_val_19705 === (23))){
var state_19704__$1 = state_19704;
var statearr_19748_21042 = state_19704__$1;
(statearr_19748_21042[(2)] = null);

(statearr_19748_21042[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19705 === (19))){
var inst_19629 = (state_19704[(8)]);
var inst_19681 = (state_19704[(11)]);
var inst_19684 = cljs.core.async.muxch_STAR_(inst_19681);
var state_19704__$1 = state_19704;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19704__$1,(22),inst_19684,inst_19629);
} else {
if((state_val_19705 === (11))){
var inst_19655 = (state_19704[(10)]);
var inst_19640 = (state_19704[(12)]);
var inst_19655__$1 = cljs.core.seq(inst_19640);
var state_19704__$1 = (function (){var statearr_19755 = state_19704;
(statearr_19755[(10)] = inst_19655__$1);

return statearr_19755;
})();
if(inst_19655__$1){
var statearr_19756_21043 = state_19704__$1;
(statearr_19756_21043[(1)] = (13));

} else {
var statearr_19757_21044 = state_19704__$1;
(statearr_19757_21044[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19705 === (9))){
var inst_19677 = (state_19704[(2)]);
var state_19704__$1 = state_19704;
var statearr_19758_21045 = state_19704__$1;
(statearr_19758_21045[(2)] = inst_19677);

(statearr_19758_21045[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19705 === (5))){
var inst_19637 = cljs.core.deref(mults);
var inst_19638 = cljs.core.vals(inst_19637);
var inst_19639 = cljs.core.seq(inst_19638);
var inst_19640 = inst_19639;
var inst_19641 = null;
var inst_19642 = (0);
var inst_19643 = (0);
var state_19704__$1 = (function (){var statearr_19759 = state_19704;
(statearr_19759[(12)] = inst_19640);

(statearr_19759[(13)] = inst_19643);

(statearr_19759[(15)] = inst_19642);

(statearr_19759[(16)] = inst_19641);

return statearr_19759;
})();
var statearr_19763_21046 = state_19704__$1;
(statearr_19763_21046[(2)] = null);

(statearr_19763_21046[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19705 === (14))){
var state_19704__$1 = state_19704;
var statearr_19771_21047 = state_19704__$1;
(statearr_19771_21047[(2)] = null);

(statearr_19771_21047[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19705 === (16))){
var inst_19655 = (state_19704[(10)]);
var inst_19659 = cljs.core.chunk_first(inst_19655);
var inst_19660 = cljs.core.chunk_rest(inst_19655);
var inst_19661 = cljs.core.count(inst_19659);
var inst_19640 = inst_19660;
var inst_19641 = inst_19659;
var inst_19642 = inst_19661;
var inst_19643 = (0);
var state_19704__$1 = (function (){var statearr_19775 = state_19704;
(statearr_19775[(12)] = inst_19640);

(statearr_19775[(13)] = inst_19643);

(statearr_19775[(15)] = inst_19642);

(statearr_19775[(16)] = inst_19641);

return statearr_19775;
})();
var statearr_19776_21048 = state_19704__$1;
(statearr_19776_21048[(2)] = null);

(statearr_19776_21048[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19705 === (10))){
var inst_19640 = (state_19704[(12)]);
var inst_19643 = (state_19704[(13)]);
var inst_19642 = (state_19704[(15)]);
var inst_19641 = (state_19704[(16)]);
var inst_19649 = cljs.core._nth(inst_19641,inst_19643);
var inst_19650 = cljs.core.async.muxch_STAR_(inst_19649);
var inst_19651 = cljs.core.async.close_BANG_(inst_19650);
var inst_19652 = (inst_19643 + (1));
var tmp19768 = inst_19640;
var tmp19769 = inst_19642;
var tmp19770 = inst_19641;
var inst_19640__$1 = tmp19768;
var inst_19641__$1 = tmp19770;
var inst_19642__$1 = tmp19769;
var inst_19643__$1 = inst_19652;
var state_19704__$1 = (function (){var statearr_19780 = state_19704;
(statearr_19780[(12)] = inst_19640__$1);

(statearr_19780[(17)] = inst_19651);

(statearr_19780[(13)] = inst_19643__$1);

(statearr_19780[(15)] = inst_19642__$1);

(statearr_19780[(16)] = inst_19641__$1);

return statearr_19780;
})();
var statearr_19781_21049 = state_19704__$1;
(statearr_19781_21049[(2)] = null);

(statearr_19781_21049[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19705 === (18))){
var inst_19670 = (state_19704[(2)]);
var state_19704__$1 = state_19704;
var statearr_19782_21050 = state_19704__$1;
(statearr_19782_21050[(2)] = inst_19670);

(statearr_19782_21050[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19705 === (8))){
var inst_19643 = (state_19704[(13)]);
var inst_19642 = (state_19704[(15)]);
var inst_19646 = (inst_19643 < inst_19642);
var inst_19647 = inst_19646;
var state_19704__$1 = state_19704;
if(cljs.core.truth_(inst_19647)){
var statearr_19783_21051 = state_19704__$1;
(statearr_19783_21051[(1)] = (10));

} else {
var statearr_19784_21052 = state_19704__$1;
(statearr_19784_21052[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__18041__auto__ = null;
var cljs$core$async$state_machine__18041__auto____0 = (function (){
var statearr_19785 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19785[(0)] = cljs$core$async$state_machine__18041__auto__);

(statearr_19785[(1)] = (1));

return statearr_19785;
});
var cljs$core$async$state_machine__18041__auto____1 = (function (state_19704){
while(true){
var ret_value__18042__auto__ = (function (){try{while(true){
var result__18043__auto__ = switch__18040__auto__(state_19704);
if(cljs.core.keyword_identical_QMARK_(result__18043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18043__auto__;
}
break;
}
}catch (e19786){var ex__18044__auto__ = e19786;
var statearr_19787_21053 = state_19704;
(statearr_19787_21053[(2)] = ex__18044__auto__);


if(cljs.core.seq((state_19704[(4)]))){
var statearr_19792_21054 = state_19704;
(statearr_19792_21054[(1)] = cljs.core.first((state_19704[(4)])));

} else {
throw ex__18044__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21055 = state_19704;
state_19704 = G__21055;
continue;
} else {
return ret_value__18042__auto__;
}
break;
}
});
cljs$core$async$state_machine__18041__auto__ = function(state_19704){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18041__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18041__auto____1.call(this,state_19704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18041__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18041__auto____0;
cljs$core$async$state_machine__18041__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18041__auto____1;
return cljs$core$async$state_machine__18041__auto__;
})()
})();
var state__18259__auto__ = (function (){var statearr_19793 = f__18258__auto__();
(statearr_19793[(6)] = c__18257__auto___21019);

return statearr_19793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18259__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__19795 = arguments.length;
switch (G__19795) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__19803 = arguments.length;
switch (G__19803) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__19807 = arguments.length;
switch (G__19807) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__18257__auto___21063 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18258__auto__ = (function (){var switch__18040__auto__ = (function (state_19857){
var state_val_19858 = (state_19857[(1)]);
if((state_val_19858 === (7))){
var state_19857__$1 = state_19857;
var statearr_19859_21064 = state_19857__$1;
(statearr_19859_21064[(2)] = null);

(statearr_19859_21064[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19858 === (1))){
var state_19857__$1 = state_19857;
var statearr_19860_21069 = state_19857__$1;
(statearr_19860_21069[(2)] = null);

(statearr_19860_21069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19858 === (4))){
var inst_19812 = (state_19857[(7)]);
var inst_19811 = (state_19857[(8)]);
var inst_19815 = (inst_19812 < inst_19811);
var state_19857__$1 = state_19857;
if(cljs.core.truth_(inst_19815)){
var statearr_19861_21074 = state_19857__$1;
(statearr_19861_21074[(1)] = (6));

} else {
var statearr_19862_21076 = state_19857__$1;
(statearr_19862_21076[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19858 === (15))){
var inst_19840 = (state_19857[(9)]);
var inst_19848 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_19840);
var state_19857__$1 = state_19857;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19857__$1,(17),out,inst_19848);
} else {
if((state_val_19858 === (13))){
var inst_19840 = (state_19857[(9)]);
var inst_19840__$1 = (state_19857[(2)]);
var inst_19841 = cljs.core.some(cljs.core.nil_QMARK_,inst_19840__$1);
var state_19857__$1 = (function (){var statearr_19863 = state_19857;
(statearr_19863[(9)] = inst_19840__$1);

return statearr_19863;
})();
if(cljs.core.truth_(inst_19841)){
var statearr_19864_21077 = state_19857__$1;
(statearr_19864_21077[(1)] = (14));

} else {
var statearr_19865_21078 = state_19857__$1;
(statearr_19865_21078[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19858 === (6))){
var state_19857__$1 = state_19857;
var statearr_19866_21079 = state_19857__$1;
(statearr_19866_21079[(2)] = null);

(statearr_19866_21079[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19858 === (17))){
var inst_19850 = (state_19857[(2)]);
var state_19857__$1 = (function (){var statearr_19868 = state_19857;
(statearr_19868[(10)] = inst_19850);

return statearr_19868;
})();
var statearr_19869_21080 = state_19857__$1;
(statearr_19869_21080[(2)] = null);

(statearr_19869_21080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19858 === (3))){
var inst_19855 = (state_19857[(2)]);
var state_19857__$1 = state_19857;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19857__$1,inst_19855);
} else {
if((state_val_19858 === (12))){
var _ = (function (){var statearr_19870 = state_19857;
(statearr_19870[(4)] = cljs.core.rest((state_19857[(4)])));

return statearr_19870;
})();
var state_19857__$1 = state_19857;
var ex19867 = (state_19857__$1[(2)]);
var statearr_19871_21082 = state_19857__$1;
(statearr_19871_21082[(5)] = ex19867);


if((ex19867 instanceof Object)){
var statearr_19876_21083 = state_19857__$1;
(statearr_19876_21083[(1)] = (11));

(statearr_19876_21083[(5)] = null);

} else {
throw ex19867;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19858 === (2))){
var inst_19810 = cljs.core.reset_BANG_(dctr,cnt);
var inst_19811 = cnt;
var inst_19812 = (0);
var state_19857__$1 = (function (){var statearr_19880 = state_19857;
(statearr_19880[(11)] = inst_19810);

(statearr_19880[(7)] = inst_19812);

(statearr_19880[(8)] = inst_19811);

return statearr_19880;
})();
var statearr_19881_21084 = state_19857__$1;
(statearr_19881_21084[(2)] = null);

(statearr_19881_21084[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19858 === (11))){
var inst_19818 = (state_19857[(2)]);
var inst_19819 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_19857__$1 = (function (){var statearr_19882 = state_19857;
(statearr_19882[(12)] = inst_19818);

return statearr_19882;
})();
var statearr_19883_21085 = state_19857__$1;
(statearr_19883_21085[(2)] = inst_19819);

(statearr_19883_21085[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19858 === (9))){
var inst_19812 = (state_19857[(7)]);
var _ = (function (){var statearr_19884 = state_19857;
(statearr_19884[(4)] = cljs.core.cons((12),(state_19857[(4)])));

return statearr_19884;
})();
var inst_19825 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_19812) : chs__$1.call(null, inst_19812));
var inst_19826 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_19812) : done.call(null, inst_19812));
var inst_19827 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_19825,inst_19826);
var ___$1 = (function (){var statearr_19885 = state_19857;
(statearr_19885[(4)] = cljs.core.rest((state_19857[(4)])));

return statearr_19885;
})();
var state_19857__$1 = state_19857;
var statearr_19887_21087 = state_19857__$1;
(statearr_19887_21087[(2)] = inst_19827);

(statearr_19887_21087[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19858 === (5))){
var inst_19838 = (state_19857[(2)]);
var state_19857__$1 = (function (){var statearr_19889 = state_19857;
(statearr_19889[(13)] = inst_19838);

return statearr_19889;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19857__$1,(13),dchan);
} else {
if((state_val_19858 === (14))){
var inst_19843 = cljs.core.async.close_BANG_(out);
var state_19857__$1 = state_19857;
var statearr_19893_21088 = state_19857__$1;
(statearr_19893_21088[(2)] = inst_19843);

(statearr_19893_21088[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19858 === (16))){
var inst_19853 = (state_19857[(2)]);
var state_19857__$1 = state_19857;
var statearr_19894_21089 = state_19857__$1;
(statearr_19894_21089[(2)] = inst_19853);

(statearr_19894_21089[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19858 === (10))){
var inst_19812 = (state_19857[(7)]);
var inst_19830 = (state_19857[(2)]);
var inst_19832 = (inst_19812 + (1));
var inst_19812__$1 = inst_19832;
var state_19857__$1 = (function (){var statearr_19895 = state_19857;
(statearr_19895[(7)] = inst_19812__$1);

(statearr_19895[(14)] = inst_19830);

return statearr_19895;
})();
var statearr_19896_21091 = state_19857__$1;
(statearr_19896_21091[(2)] = null);

(statearr_19896_21091[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19858 === (8))){
var inst_19836 = (state_19857[(2)]);
var state_19857__$1 = state_19857;
var statearr_19897_21092 = state_19857__$1;
(statearr_19897_21092[(2)] = inst_19836);

(statearr_19897_21092[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__18041__auto__ = null;
var cljs$core$async$state_machine__18041__auto____0 = (function (){
var statearr_19898 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19898[(0)] = cljs$core$async$state_machine__18041__auto__);

(statearr_19898[(1)] = (1));

return statearr_19898;
});
var cljs$core$async$state_machine__18041__auto____1 = (function (state_19857){
while(true){
var ret_value__18042__auto__ = (function (){try{while(true){
var result__18043__auto__ = switch__18040__auto__(state_19857);
if(cljs.core.keyword_identical_QMARK_(result__18043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18043__auto__;
}
break;
}
}catch (e19899){var ex__18044__auto__ = e19899;
var statearr_19900_21093 = state_19857;
(statearr_19900_21093[(2)] = ex__18044__auto__);


if(cljs.core.seq((state_19857[(4)]))){
var statearr_19901_21094 = state_19857;
(statearr_19901_21094[(1)] = cljs.core.first((state_19857[(4)])));

} else {
throw ex__18044__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21095 = state_19857;
state_19857 = G__21095;
continue;
} else {
return ret_value__18042__auto__;
}
break;
}
});
cljs$core$async$state_machine__18041__auto__ = function(state_19857){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18041__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18041__auto____1.call(this,state_19857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18041__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18041__auto____0;
cljs$core$async$state_machine__18041__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18041__auto____1;
return cljs$core$async$state_machine__18041__auto__;
})()
})();
var state__18259__auto__ = (function (){var statearr_19902 = f__18258__auto__();
(statearr_19902[(6)] = c__18257__auto___21063);

return statearr_19902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18259__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__19905 = arguments.length;
switch (G__19905) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18257__auto___21101 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18258__auto__ = (function (){var switch__18040__auto__ = (function (state_19945){
var state_val_19946 = (state_19945[(1)]);
if((state_val_19946 === (7))){
var inst_19921 = (state_19945[(7)]);
var inst_19920 = (state_19945[(8)]);
var inst_19920__$1 = (state_19945[(2)]);
var inst_19921__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19920__$1,(0),null);
var inst_19922 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19920__$1,(1),null);
var inst_19923 = (inst_19921__$1 == null);
var state_19945__$1 = (function (){var statearr_19947 = state_19945;
(statearr_19947[(7)] = inst_19921__$1);

(statearr_19947[(9)] = inst_19922);

(statearr_19947[(8)] = inst_19920__$1);

return statearr_19947;
})();
if(cljs.core.truth_(inst_19923)){
var statearr_19948_21103 = state_19945__$1;
(statearr_19948_21103[(1)] = (8));

} else {
var statearr_19949_21104 = state_19945__$1;
(statearr_19949_21104[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19946 === (1))){
var inst_19910 = cljs.core.vec(chs);
var inst_19911 = inst_19910;
var state_19945__$1 = (function (){var statearr_19950 = state_19945;
(statearr_19950[(10)] = inst_19911);

return statearr_19950;
})();
var statearr_19951_21106 = state_19945__$1;
(statearr_19951_21106[(2)] = null);

(statearr_19951_21106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19946 === (4))){
var inst_19911 = (state_19945[(10)]);
var state_19945__$1 = state_19945;
return cljs.core.async.ioc_alts_BANG_(state_19945__$1,(7),inst_19911);
} else {
if((state_val_19946 === (6))){
var inst_19941 = (state_19945[(2)]);
var state_19945__$1 = state_19945;
var statearr_19952_21107 = state_19945__$1;
(statearr_19952_21107[(2)] = inst_19941);

(statearr_19952_21107[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19946 === (3))){
var inst_19943 = (state_19945[(2)]);
var state_19945__$1 = state_19945;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19945__$1,inst_19943);
} else {
if((state_val_19946 === (2))){
var inst_19911 = (state_19945[(10)]);
var inst_19913 = cljs.core.count(inst_19911);
var inst_19914 = (inst_19913 > (0));
var state_19945__$1 = state_19945;
if(cljs.core.truth_(inst_19914)){
var statearr_19954_21108 = state_19945__$1;
(statearr_19954_21108[(1)] = (4));

} else {
var statearr_19955_21109 = state_19945__$1;
(statearr_19955_21109[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19946 === (11))){
var inst_19911 = (state_19945[(10)]);
var inst_19934 = (state_19945[(2)]);
var tmp19953 = inst_19911;
var inst_19911__$1 = tmp19953;
var state_19945__$1 = (function (){var statearr_19956 = state_19945;
(statearr_19956[(10)] = inst_19911__$1);

(statearr_19956[(11)] = inst_19934);

return statearr_19956;
})();
var statearr_19957_21110 = state_19945__$1;
(statearr_19957_21110[(2)] = null);

(statearr_19957_21110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19946 === (9))){
var inst_19921 = (state_19945[(7)]);
var state_19945__$1 = state_19945;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19945__$1,(11),out,inst_19921);
} else {
if((state_val_19946 === (5))){
var inst_19939 = cljs.core.async.close_BANG_(out);
var state_19945__$1 = state_19945;
var statearr_19958_21115 = state_19945__$1;
(statearr_19958_21115[(2)] = inst_19939);

(statearr_19958_21115[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19946 === (10))){
var inst_19937 = (state_19945[(2)]);
var state_19945__$1 = state_19945;
var statearr_19959_21116 = state_19945__$1;
(statearr_19959_21116[(2)] = inst_19937);

(statearr_19959_21116[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19946 === (8))){
var inst_19911 = (state_19945[(10)]);
var inst_19921 = (state_19945[(7)]);
var inst_19922 = (state_19945[(9)]);
var inst_19920 = (state_19945[(8)]);
var inst_19926 = (function (){var cs = inst_19911;
var vec__19916 = inst_19920;
var v = inst_19921;
var c = inst_19922;
return (function (p1__19903_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__19903_SHARP_);
});
})();
var inst_19930 = cljs.core.filterv(inst_19926,inst_19911);
var inst_19911__$1 = inst_19930;
var state_19945__$1 = (function (){var statearr_19962 = state_19945;
(statearr_19962[(10)] = inst_19911__$1);

return statearr_19962;
})();
var statearr_19963_21117 = state_19945__$1;
(statearr_19963_21117[(2)] = null);

(statearr_19963_21117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__18041__auto__ = null;
var cljs$core$async$state_machine__18041__auto____0 = (function (){
var statearr_19964 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19964[(0)] = cljs$core$async$state_machine__18041__auto__);

(statearr_19964[(1)] = (1));

return statearr_19964;
});
var cljs$core$async$state_machine__18041__auto____1 = (function (state_19945){
while(true){
var ret_value__18042__auto__ = (function (){try{while(true){
var result__18043__auto__ = switch__18040__auto__(state_19945);
if(cljs.core.keyword_identical_QMARK_(result__18043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18043__auto__;
}
break;
}
}catch (e19965){var ex__18044__auto__ = e19965;
var statearr_19966_21118 = state_19945;
(statearr_19966_21118[(2)] = ex__18044__auto__);


if(cljs.core.seq((state_19945[(4)]))){
var statearr_19967_21119 = state_19945;
(statearr_19967_21119[(1)] = cljs.core.first((state_19945[(4)])));

} else {
throw ex__18044__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21120 = state_19945;
state_19945 = G__21120;
continue;
} else {
return ret_value__18042__auto__;
}
break;
}
});
cljs$core$async$state_machine__18041__auto__ = function(state_19945){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18041__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18041__auto____1.call(this,state_19945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18041__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18041__auto____0;
cljs$core$async$state_machine__18041__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18041__auto____1;
return cljs$core$async$state_machine__18041__auto__;
})()
})();
var state__18259__auto__ = (function (){var statearr_19968 = f__18258__auto__();
(statearr_19968[(6)] = c__18257__auto___21101);

return statearr_19968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18259__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__19973 = arguments.length;
switch (G__19973) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18257__auto___21124 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18258__auto__ = (function (){var switch__18040__auto__ = (function (state_19997){
var state_val_19998 = (state_19997[(1)]);
if((state_val_19998 === (7))){
var inst_19979 = (state_19997[(7)]);
var inst_19979__$1 = (state_19997[(2)]);
var inst_19980 = (inst_19979__$1 == null);
var inst_19981 = cljs.core.not(inst_19980);
var state_19997__$1 = (function (){var statearr_19999 = state_19997;
(statearr_19999[(7)] = inst_19979__$1);

return statearr_19999;
})();
if(inst_19981){
var statearr_20000_21127 = state_19997__$1;
(statearr_20000_21127[(1)] = (8));

} else {
var statearr_20001_21128 = state_19997__$1;
(statearr_20001_21128[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19998 === (1))){
var inst_19974 = (0);
var state_19997__$1 = (function (){var statearr_20002 = state_19997;
(statearr_20002[(8)] = inst_19974);

return statearr_20002;
})();
var statearr_20003_21129 = state_19997__$1;
(statearr_20003_21129[(2)] = null);

(statearr_20003_21129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19998 === (4))){
var state_19997__$1 = state_19997;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19997__$1,(7),ch);
} else {
if((state_val_19998 === (6))){
var inst_19992 = (state_19997[(2)]);
var state_19997__$1 = state_19997;
var statearr_20004_21131 = state_19997__$1;
(statearr_20004_21131[(2)] = inst_19992);

(statearr_20004_21131[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19998 === (3))){
var inst_19994 = (state_19997[(2)]);
var inst_19995 = cljs.core.async.close_BANG_(out);
var state_19997__$1 = (function (){var statearr_20005 = state_19997;
(statearr_20005[(9)] = inst_19994);

return statearr_20005;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19997__$1,inst_19995);
} else {
if((state_val_19998 === (2))){
var inst_19974 = (state_19997[(8)]);
var inst_19976 = (inst_19974 < n);
var state_19997__$1 = state_19997;
if(cljs.core.truth_(inst_19976)){
var statearr_20006_21137 = state_19997__$1;
(statearr_20006_21137[(1)] = (4));

} else {
var statearr_20007_21138 = state_19997__$1;
(statearr_20007_21138[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19998 === (11))){
var inst_19974 = (state_19997[(8)]);
var inst_19984 = (state_19997[(2)]);
var inst_19985 = (inst_19974 + (1));
var inst_19974__$1 = inst_19985;
var state_19997__$1 = (function (){var statearr_20008 = state_19997;
(statearr_20008[(10)] = inst_19984);

(statearr_20008[(8)] = inst_19974__$1);

return statearr_20008;
})();
var statearr_20009_21143 = state_19997__$1;
(statearr_20009_21143[(2)] = null);

(statearr_20009_21143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19998 === (9))){
var state_19997__$1 = state_19997;
var statearr_20010_21144 = state_19997__$1;
(statearr_20010_21144[(2)] = null);

(statearr_20010_21144[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19998 === (5))){
var state_19997__$1 = state_19997;
var statearr_20011_21146 = state_19997__$1;
(statearr_20011_21146[(2)] = null);

(statearr_20011_21146[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19998 === (10))){
var inst_19989 = (state_19997[(2)]);
var state_19997__$1 = state_19997;
var statearr_20012_21148 = state_19997__$1;
(statearr_20012_21148[(2)] = inst_19989);

(statearr_20012_21148[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19998 === (8))){
var inst_19979 = (state_19997[(7)]);
var state_19997__$1 = state_19997;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19997__$1,(11),out,inst_19979);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__18041__auto__ = null;
var cljs$core$async$state_machine__18041__auto____0 = (function (){
var statearr_20013 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20013[(0)] = cljs$core$async$state_machine__18041__auto__);

(statearr_20013[(1)] = (1));

return statearr_20013;
});
var cljs$core$async$state_machine__18041__auto____1 = (function (state_19997){
while(true){
var ret_value__18042__auto__ = (function (){try{while(true){
var result__18043__auto__ = switch__18040__auto__(state_19997);
if(cljs.core.keyword_identical_QMARK_(result__18043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18043__auto__;
}
break;
}
}catch (e20014){var ex__18044__auto__ = e20014;
var statearr_20015_21151 = state_19997;
(statearr_20015_21151[(2)] = ex__18044__auto__);


if(cljs.core.seq((state_19997[(4)]))){
var statearr_20016_21156 = state_19997;
(statearr_20016_21156[(1)] = cljs.core.first((state_19997[(4)])));

} else {
throw ex__18044__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21157 = state_19997;
state_19997 = G__21157;
continue;
} else {
return ret_value__18042__auto__;
}
break;
}
});
cljs$core$async$state_machine__18041__auto__ = function(state_19997){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18041__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18041__auto____1.call(this,state_19997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18041__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18041__auto____0;
cljs$core$async$state_machine__18041__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18041__auto____1;
return cljs$core$async$state_machine__18041__auto__;
})()
})();
var state__18259__auto__ = (function (){var statearr_20017 = f__18258__auto__();
(statearr_20017[(6)] = c__18257__auto___21124);

return statearr_20017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18259__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20022 = (function (f,ch,meta20020,_,fn1,meta20023){
this.f = f;
this.ch = ch;
this.meta20020 = meta20020;
this._ = _;
this.fn1 = fn1;
this.meta20023 = meta20023;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20022.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20024,meta20023__$1){
var self__ = this;
var _20024__$1 = this;
return (new cljs.core.async.t_cljs$core$async20022(self__.f,self__.ch,self__.meta20020,self__._,self__.fn1,meta20023__$1));
}));

(cljs.core.async.t_cljs$core$async20022.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20024){
var self__ = this;
var _20024__$1 = this;
return self__.meta20023;
}));

(cljs.core.async.t_cljs$core$async20022.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20022.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async20022.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async20022.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__20018_SHARP_){
var G__20026 = (((p1__20018_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__20018_SHARP_) : self__.f.call(null, p1__20018_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__20026) : f1.call(null, G__20026));
});
}));

(cljs.core.async.t_cljs$core$async20022.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20020","meta20020",1040639285,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async20019","cljs.core.async/t_cljs$core$async20019",1724848234,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta20023","meta20023",-2086696684,null)], null);
}));

(cljs.core.async.t_cljs$core$async20022.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20022.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20022");

(cljs.core.async.t_cljs$core$async20022.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async20022");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20022.
 */
cljs.core.async.__GT_t_cljs$core$async20022 = (function cljs$core$async$__GT_t_cljs$core$async20022(f,ch,meta20020,_,fn1,meta20023){
return (new cljs.core.async.t_cljs$core$async20022(f,ch,meta20020,_,fn1,meta20023));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20019 = (function (f,ch,meta20020){
this.f = f;
this.ch = ch;
this.meta20020 = meta20020;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20019.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20021,meta20020__$1){
var self__ = this;
var _20021__$1 = this;
return (new cljs.core.async.t_cljs$core$async20019(self__.f,self__.ch,meta20020__$1));
}));

(cljs.core.async.t_cljs$core$async20019.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20021){
var self__ = this;
var _20021__$1 = this;
return self__.meta20020;
}));

(cljs.core.async.t_cljs$core$async20019.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20019.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async20019.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async20019.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20019.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async20022(self__.f,self__.ch,self__.meta20020,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__20030 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__20030) : self__.f.call(null, G__20030));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async20019.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20019.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async20019.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20020","meta20020",1040639285,null)], null);
}));

(cljs.core.async.t_cljs$core$async20019.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20019.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20019");

(cljs.core.async.t_cljs$core$async20019.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async20019");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20019.
 */
cljs.core.async.__GT_t_cljs$core$async20019 = (function cljs$core$async$__GT_t_cljs$core$async20019(f,ch,meta20020){
return (new cljs.core.async.t_cljs$core$async20019(f,ch,meta20020));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async20019(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20035 = (function (f,ch,meta20036){
this.f = f;
this.ch = ch;
this.meta20036 = meta20036;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20035.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20037,meta20036__$1){
var self__ = this;
var _20037__$1 = this;
return (new cljs.core.async.t_cljs$core$async20035(self__.f,self__.ch,meta20036__$1));
}));

(cljs.core.async.t_cljs$core$async20035.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20037){
var self__ = this;
var _20037__$1 = this;
return self__.meta20036;
}));

(cljs.core.async.t_cljs$core$async20035.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20035.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async20035.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20035.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async20035.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20035.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null, val)),fn1);
}));

(cljs.core.async.t_cljs$core$async20035.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20036","meta20036",-2010726350,null)], null);
}));

(cljs.core.async.t_cljs$core$async20035.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20035.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20035");

(cljs.core.async.t_cljs$core$async20035.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async20035");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20035.
 */
cljs.core.async.__GT_t_cljs$core$async20035 = (function cljs$core$async$__GT_t_cljs$core$async20035(f,ch,meta20036){
return (new cljs.core.async.t_cljs$core$async20035(f,ch,meta20036));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async20035(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20038 = (function (p,ch,meta20039){
this.p = p;
this.ch = ch;
this.meta20039 = meta20039;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20038.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20040,meta20039__$1){
var self__ = this;
var _20040__$1 = this;
return (new cljs.core.async.t_cljs$core$async20038(self__.p,self__.ch,meta20039__$1));
}));

(cljs.core.async.t_cljs$core$async20038.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20040){
var self__ = this;
var _20040__$1 = this;
return self__.meta20039;
}));

(cljs.core.async.t_cljs$core$async20038.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20038.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async20038.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async20038.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20038.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async20038.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20038.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null, val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async20038.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20039","meta20039",-554958927,null)], null);
}));

(cljs.core.async.t_cljs$core$async20038.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20038.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20038");

(cljs.core.async.t_cljs$core$async20038.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async20038");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20038.
 */
cljs.core.async.__GT_t_cljs$core$async20038 = (function cljs$core$async$__GT_t_cljs$core$async20038(p,ch,meta20039){
return (new cljs.core.async.t_cljs$core$async20038(p,ch,meta20039));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async20038(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__20082 = arguments.length;
switch (G__20082) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18257__auto___21179 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18258__auto__ = (function (){var switch__18040__auto__ = (function (state_20106){
var state_val_20107 = (state_20106[(1)]);
if((state_val_20107 === (7))){
var inst_20102 = (state_20106[(2)]);
var state_20106__$1 = state_20106;
var statearr_20111_21180 = state_20106__$1;
(statearr_20111_21180[(2)] = inst_20102);

(statearr_20111_21180[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20107 === (1))){
var state_20106__$1 = state_20106;
var statearr_20112_21181 = state_20106__$1;
(statearr_20112_21181[(2)] = null);

(statearr_20112_21181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20107 === (4))){
var inst_20088 = (state_20106[(7)]);
var inst_20088__$1 = (state_20106[(2)]);
var inst_20089 = (inst_20088__$1 == null);
var state_20106__$1 = (function (){var statearr_20113 = state_20106;
(statearr_20113[(7)] = inst_20088__$1);

return statearr_20113;
})();
if(cljs.core.truth_(inst_20089)){
var statearr_20114_21183 = state_20106__$1;
(statearr_20114_21183[(1)] = (5));

} else {
var statearr_20115_21184 = state_20106__$1;
(statearr_20115_21184[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20107 === (6))){
var inst_20088 = (state_20106[(7)]);
var inst_20093 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_20088) : p.call(null, inst_20088));
var state_20106__$1 = state_20106;
if(cljs.core.truth_(inst_20093)){
var statearr_20116_21185 = state_20106__$1;
(statearr_20116_21185[(1)] = (8));

} else {
var statearr_20117_21186 = state_20106__$1;
(statearr_20117_21186[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20107 === (3))){
var inst_20104 = (state_20106[(2)]);
var state_20106__$1 = state_20106;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20106__$1,inst_20104);
} else {
if((state_val_20107 === (2))){
var state_20106__$1 = state_20106;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20106__$1,(4),ch);
} else {
if((state_val_20107 === (11))){
var inst_20096 = (state_20106[(2)]);
var state_20106__$1 = state_20106;
var statearr_20118_21188 = state_20106__$1;
(statearr_20118_21188[(2)] = inst_20096);

(statearr_20118_21188[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20107 === (9))){
var state_20106__$1 = state_20106;
var statearr_20119_21189 = state_20106__$1;
(statearr_20119_21189[(2)] = null);

(statearr_20119_21189[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20107 === (5))){
var inst_20091 = cljs.core.async.close_BANG_(out);
var state_20106__$1 = state_20106;
var statearr_20120_21190 = state_20106__$1;
(statearr_20120_21190[(2)] = inst_20091);

(statearr_20120_21190[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20107 === (10))){
var inst_20099 = (state_20106[(2)]);
var state_20106__$1 = (function (){var statearr_20121 = state_20106;
(statearr_20121[(8)] = inst_20099);

return statearr_20121;
})();
var statearr_20122_21191 = state_20106__$1;
(statearr_20122_21191[(2)] = null);

(statearr_20122_21191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20107 === (8))){
var inst_20088 = (state_20106[(7)]);
var state_20106__$1 = state_20106;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20106__$1,(11),out,inst_20088);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__18041__auto__ = null;
var cljs$core$async$state_machine__18041__auto____0 = (function (){
var statearr_20123 = [null,null,null,null,null,null,null,null,null];
(statearr_20123[(0)] = cljs$core$async$state_machine__18041__auto__);

(statearr_20123[(1)] = (1));

return statearr_20123;
});
var cljs$core$async$state_machine__18041__auto____1 = (function (state_20106){
while(true){
var ret_value__18042__auto__ = (function (){try{while(true){
var result__18043__auto__ = switch__18040__auto__(state_20106);
if(cljs.core.keyword_identical_QMARK_(result__18043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18043__auto__;
}
break;
}
}catch (e20124){var ex__18044__auto__ = e20124;
var statearr_20125_21193 = state_20106;
(statearr_20125_21193[(2)] = ex__18044__auto__);


if(cljs.core.seq((state_20106[(4)]))){
var statearr_20126_21194 = state_20106;
(statearr_20126_21194[(1)] = cljs.core.first((state_20106[(4)])));

} else {
throw ex__18044__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21195 = state_20106;
state_20106 = G__21195;
continue;
} else {
return ret_value__18042__auto__;
}
break;
}
});
cljs$core$async$state_machine__18041__auto__ = function(state_20106){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18041__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18041__auto____1.call(this,state_20106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18041__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18041__auto____0;
cljs$core$async$state_machine__18041__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18041__auto____1;
return cljs$core$async$state_machine__18041__auto__;
})()
})();
var state__18259__auto__ = (function (){var statearr_20127 = f__18258__auto__();
(statearr_20127[(6)] = c__18257__auto___21179);

return statearr_20127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18259__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__20129 = arguments.length;
switch (G__20129) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__18257__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18258__auto__ = (function (){var switch__18040__auto__ = (function (state_20202){
var state_val_20203 = (state_20202[(1)]);
if((state_val_20203 === (7))){
var inst_20198 = (state_20202[(2)]);
var state_20202__$1 = state_20202;
var statearr_20204_21207 = state_20202__$1;
(statearr_20204_21207[(2)] = inst_20198);

(statearr_20204_21207[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20203 === (20))){
var inst_20165 = (state_20202[(7)]);
var inst_20179 = (state_20202[(2)]);
var inst_20180 = cljs.core.next(inst_20165);
var inst_20143 = inst_20180;
var inst_20144 = null;
var inst_20145 = (0);
var inst_20146 = (0);
var state_20202__$1 = (function (){var statearr_20205 = state_20202;
(statearr_20205[(8)] = inst_20146);

(statearr_20205[(9)] = inst_20143);

(statearr_20205[(10)] = inst_20145);

(statearr_20205[(11)] = inst_20179);

(statearr_20205[(12)] = inst_20144);

return statearr_20205;
})();
var statearr_20206_21211 = state_20202__$1;
(statearr_20206_21211[(2)] = null);

(statearr_20206_21211[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20203 === (1))){
var state_20202__$1 = state_20202;
var statearr_20207_21212 = state_20202__$1;
(statearr_20207_21212[(2)] = null);

(statearr_20207_21212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20203 === (4))){
var inst_20132 = (state_20202[(13)]);
var inst_20132__$1 = (state_20202[(2)]);
var inst_20133 = (inst_20132__$1 == null);
var state_20202__$1 = (function (){var statearr_20208 = state_20202;
(statearr_20208[(13)] = inst_20132__$1);

return statearr_20208;
})();
if(cljs.core.truth_(inst_20133)){
var statearr_20209_21220 = state_20202__$1;
(statearr_20209_21220[(1)] = (5));

} else {
var statearr_20210_21225 = state_20202__$1;
(statearr_20210_21225[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20203 === (15))){
var state_20202__$1 = state_20202;
var statearr_20214_21236 = state_20202__$1;
(statearr_20214_21236[(2)] = null);

(statearr_20214_21236[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20203 === (21))){
var state_20202__$1 = state_20202;
var statearr_20215_21237 = state_20202__$1;
(statearr_20215_21237[(2)] = null);

(statearr_20215_21237[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20203 === (13))){
var inst_20146 = (state_20202[(8)]);
var inst_20143 = (state_20202[(9)]);
var inst_20145 = (state_20202[(10)]);
var inst_20144 = (state_20202[(12)]);
var inst_20159 = (state_20202[(2)]);
var inst_20162 = (inst_20146 + (1));
var tmp20211 = inst_20143;
var tmp20212 = inst_20145;
var tmp20213 = inst_20144;
var inst_20143__$1 = tmp20211;
var inst_20144__$1 = tmp20213;
var inst_20145__$1 = tmp20212;
var inst_20146__$1 = inst_20162;
var state_20202__$1 = (function (){var statearr_20216 = state_20202;
(statearr_20216[(8)] = inst_20146__$1);

(statearr_20216[(14)] = inst_20159);

(statearr_20216[(9)] = inst_20143__$1);

(statearr_20216[(10)] = inst_20145__$1);

(statearr_20216[(12)] = inst_20144__$1);

return statearr_20216;
})();
var statearr_20217_21243 = state_20202__$1;
(statearr_20217_21243[(2)] = null);

(statearr_20217_21243[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20203 === (22))){
var state_20202__$1 = state_20202;
var statearr_20218_21248 = state_20202__$1;
(statearr_20218_21248[(2)] = null);

(statearr_20218_21248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20203 === (6))){
var inst_20132 = (state_20202[(13)]);
var inst_20141 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_20132) : f.call(null, inst_20132));
var inst_20142 = cljs.core.seq(inst_20141);
var inst_20143 = inst_20142;
var inst_20144 = null;
var inst_20145 = (0);
var inst_20146 = (0);
var state_20202__$1 = (function (){var statearr_20219 = state_20202;
(statearr_20219[(8)] = inst_20146);

(statearr_20219[(9)] = inst_20143);

(statearr_20219[(10)] = inst_20145);

(statearr_20219[(12)] = inst_20144);

return statearr_20219;
})();
var statearr_20220_21253 = state_20202__$1;
(statearr_20220_21253[(2)] = null);

(statearr_20220_21253[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20203 === (17))){
var inst_20165 = (state_20202[(7)]);
var inst_20172 = cljs.core.chunk_first(inst_20165);
var inst_20173 = cljs.core.chunk_rest(inst_20165);
var inst_20174 = cljs.core.count(inst_20172);
var inst_20143 = inst_20173;
var inst_20144 = inst_20172;
var inst_20145 = inst_20174;
var inst_20146 = (0);
var state_20202__$1 = (function (){var statearr_20221 = state_20202;
(statearr_20221[(8)] = inst_20146);

(statearr_20221[(9)] = inst_20143);

(statearr_20221[(10)] = inst_20145);

(statearr_20221[(12)] = inst_20144);

return statearr_20221;
})();
var statearr_20222_21255 = state_20202__$1;
(statearr_20222_21255[(2)] = null);

(statearr_20222_21255[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20203 === (3))){
var inst_20200 = (state_20202[(2)]);
var state_20202__$1 = state_20202;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20202__$1,inst_20200);
} else {
if((state_val_20203 === (12))){
var inst_20188 = (state_20202[(2)]);
var state_20202__$1 = state_20202;
var statearr_20223_21266 = state_20202__$1;
(statearr_20223_21266[(2)] = inst_20188);

(statearr_20223_21266[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20203 === (2))){
var state_20202__$1 = state_20202;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20202__$1,(4),in$);
} else {
if((state_val_20203 === (23))){
var inst_20196 = (state_20202[(2)]);
var state_20202__$1 = state_20202;
var statearr_20226_21275 = state_20202__$1;
(statearr_20226_21275[(2)] = inst_20196);

(statearr_20226_21275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20203 === (19))){
var inst_20183 = (state_20202[(2)]);
var state_20202__$1 = state_20202;
var statearr_20229_21276 = state_20202__$1;
(statearr_20229_21276[(2)] = inst_20183);

(statearr_20229_21276[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20203 === (11))){
var inst_20143 = (state_20202[(9)]);
var inst_20165 = (state_20202[(7)]);
var inst_20165__$1 = cljs.core.seq(inst_20143);
var state_20202__$1 = (function (){var statearr_20230 = state_20202;
(statearr_20230[(7)] = inst_20165__$1);

return statearr_20230;
})();
if(inst_20165__$1){
var statearr_20231_21281 = state_20202__$1;
(statearr_20231_21281[(1)] = (14));

} else {
var statearr_20233_21286 = state_20202__$1;
(statearr_20233_21286[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20203 === (9))){
var inst_20190 = (state_20202[(2)]);
var inst_20191 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_20202__$1 = (function (){var statearr_20235 = state_20202;
(statearr_20235[(15)] = inst_20190);

return statearr_20235;
})();
if(cljs.core.truth_(inst_20191)){
var statearr_20236_21294 = state_20202__$1;
(statearr_20236_21294[(1)] = (21));

} else {
var statearr_20237_21295 = state_20202__$1;
(statearr_20237_21295[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20203 === (5))){
var inst_20135 = cljs.core.async.close_BANG_(out);
var state_20202__$1 = state_20202;
var statearr_20238_21309 = state_20202__$1;
(statearr_20238_21309[(2)] = inst_20135);

(statearr_20238_21309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20203 === (14))){
var inst_20165 = (state_20202[(7)]);
var inst_20167 = cljs.core.chunked_seq_QMARK_(inst_20165);
var state_20202__$1 = state_20202;
if(inst_20167){
var statearr_20241_21311 = state_20202__$1;
(statearr_20241_21311[(1)] = (17));

} else {
var statearr_20242_21312 = state_20202__$1;
(statearr_20242_21312[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20203 === (16))){
var inst_20186 = (state_20202[(2)]);
var state_20202__$1 = state_20202;
var statearr_20243_21313 = state_20202__$1;
(statearr_20243_21313[(2)] = inst_20186);

(statearr_20243_21313[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20203 === (10))){
var inst_20146 = (state_20202[(8)]);
var inst_20144 = (state_20202[(12)]);
var inst_20154 = cljs.core._nth(inst_20144,inst_20146);
var state_20202__$1 = state_20202;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20202__$1,(13),out,inst_20154);
} else {
if((state_val_20203 === (18))){
var inst_20165 = (state_20202[(7)]);
var inst_20177 = cljs.core.first(inst_20165);
var state_20202__$1 = state_20202;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20202__$1,(20),out,inst_20177);
} else {
if((state_val_20203 === (8))){
var inst_20146 = (state_20202[(8)]);
var inst_20145 = (state_20202[(10)]);
var inst_20148 = (inst_20146 < inst_20145);
var inst_20149 = inst_20148;
var state_20202__$1 = state_20202;
if(cljs.core.truth_(inst_20149)){
var statearr_20244_21323 = state_20202__$1;
(statearr_20244_21323[(1)] = (10));

} else {
var statearr_20245_21324 = state_20202__$1;
(statearr_20245_21324[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__18041__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__18041__auto____0 = (function (){
var statearr_20246 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20246[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__18041__auto__);

(statearr_20246[(1)] = (1));

return statearr_20246;
});
var cljs$core$async$mapcat_STAR__$_state_machine__18041__auto____1 = (function (state_20202){
while(true){
var ret_value__18042__auto__ = (function (){try{while(true){
var result__18043__auto__ = switch__18040__auto__(state_20202);
if(cljs.core.keyword_identical_QMARK_(result__18043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18043__auto__;
}
break;
}
}catch (e20247){var ex__18044__auto__ = e20247;
var statearr_20248_21342 = state_20202;
(statearr_20248_21342[(2)] = ex__18044__auto__);


if(cljs.core.seq((state_20202[(4)]))){
var statearr_20249_21343 = state_20202;
(statearr_20249_21343[(1)] = cljs.core.first((state_20202[(4)])));

} else {
throw ex__18044__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21344 = state_20202;
state_20202 = G__21344;
continue;
} else {
return ret_value__18042__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__18041__auto__ = function(state_20202){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__18041__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__18041__auto____1.call(this,state_20202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__18041__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__18041__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__18041__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__18041__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__18041__auto__;
})()
})();
var state__18259__auto__ = (function (){var statearr_20250 = f__18258__auto__();
(statearr_20250[(6)] = c__18257__auto__);

return statearr_20250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18259__auto__);
}));

return c__18257__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__20252 = arguments.length;
switch (G__20252) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__20257 = arguments.length;
switch (G__20257) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__20272 = arguments.length;
switch (G__20272) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18257__auto___21365 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18258__auto__ = (function (){var switch__18040__auto__ = (function (state_20303){
var state_val_20307 = (state_20303[(1)]);
if((state_val_20307 === (7))){
var inst_20298 = (state_20303[(2)]);
var state_20303__$1 = state_20303;
var statearr_20308_21367 = state_20303__$1;
(statearr_20308_21367[(2)] = inst_20298);

(statearr_20308_21367[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20307 === (1))){
var inst_20277 = null;
var state_20303__$1 = (function (){var statearr_20309 = state_20303;
(statearr_20309[(7)] = inst_20277);

return statearr_20309;
})();
var statearr_20310_21369 = state_20303__$1;
(statearr_20310_21369[(2)] = null);

(statearr_20310_21369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20307 === (4))){
var inst_20283 = (state_20303[(8)]);
var inst_20283__$1 = (state_20303[(2)]);
var inst_20284 = (inst_20283__$1 == null);
var inst_20285 = cljs.core.not(inst_20284);
var state_20303__$1 = (function (){var statearr_20317 = state_20303;
(statearr_20317[(8)] = inst_20283__$1);

return statearr_20317;
})();
if(inst_20285){
var statearr_20319_21370 = state_20303__$1;
(statearr_20319_21370[(1)] = (5));

} else {
var statearr_20323_21371 = state_20303__$1;
(statearr_20323_21371[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20307 === (6))){
var state_20303__$1 = state_20303;
var statearr_20324_21372 = state_20303__$1;
(statearr_20324_21372[(2)] = null);

(statearr_20324_21372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20307 === (3))){
var inst_20300 = (state_20303[(2)]);
var inst_20301 = cljs.core.async.close_BANG_(out);
var state_20303__$1 = (function (){var statearr_20329 = state_20303;
(statearr_20329[(9)] = inst_20300);

return statearr_20329;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20303__$1,inst_20301);
} else {
if((state_val_20307 === (2))){
var state_20303__$1 = state_20303;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20303__$1,(4),ch);
} else {
if((state_val_20307 === (11))){
var inst_20283 = (state_20303[(8)]);
var inst_20292 = (state_20303[(2)]);
var inst_20277 = inst_20283;
var state_20303__$1 = (function (){var statearr_20333 = state_20303;
(statearr_20333[(10)] = inst_20292);

(statearr_20333[(7)] = inst_20277);

return statearr_20333;
})();
var statearr_20334_21379 = state_20303__$1;
(statearr_20334_21379[(2)] = null);

(statearr_20334_21379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20307 === (9))){
var inst_20283 = (state_20303[(8)]);
var state_20303__$1 = state_20303;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20303__$1,(11),out,inst_20283);
} else {
if((state_val_20307 === (5))){
var inst_20283 = (state_20303[(8)]);
var inst_20277 = (state_20303[(7)]);
var inst_20287 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20283,inst_20277);
var state_20303__$1 = state_20303;
if(inst_20287){
var statearr_20338_21380 = state_20303__$1;
(statearr_20338_21380[(1)] = (8));

} else {
var statearr_20339_21381 = state_20303__$1;
(statearr_20339_21381[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20307 === (10))){
var inst_20295 = (state_20303[(2)]);
var state_20303__$1 = state_20303;
var statearr_20340_21383 = state_20303__$1;
(statearr_20340_21383[(2)] = inst_20295);

(statearr_20340_21383[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20307 === (8))){
var inst_20277 = (state_20303[(7)]);
var tmp20335 = inst_20277;
var inst_20277__$1 = tmp20335;
var state_20303__$1 = (function (){var statearr_20341 = state_20303;
(statearr_20341[(7)] = inst_20277__$1);

return statearr_20341;
})();
var statearr_20342_21384 = state_20303__$1;
(statearr_20342_21384[(2)] = null);

(statearr_20342_21384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__18041__auto__ = null;
var cljs$core$async$state_machine__18041__auto____0 = (function (){
var statearr_20343 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20343[(0)] = cljs$core$async$state_machine__18041__auto__);

(statearr_20343[(1)] = (1));

return statearr_20343;
});
var cljs$core$async$state_machine__18041__auto____1 = (function (state_20303){
while(true){
var ret_value__18042__auto__ = (function (){try{while(true){
var result__18043__auto__ = switch__18040__auto__(state_20303);
if(cljs.core.keyword_identical_QMARK_(result__18043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18043__auto__;
}
break;
}
}catch (e20344){var ex__18044__auto__ = e20344;
var statearr_20345_21385 = state_20303;
(statearr_20345_21385[(2)] = ex__18044__auto__);


if(cljs.core.seq((state_20303[(4)]))){
var statearr_20346_21387 = state_20303;
(statearr_20346_21387[(1)] = cljs.core.first((state_20303[(4)])));

} else {
throw ex__18044__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21388 = state_20303;
state_20303 = G__21388;
continue;
} else {
return ret_value__18042__auto__;
}
break;
}
});
cljs$core$async$state_machine__18041__auto__ = function(state_20303){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18041__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18041__auto____1.call(this,state_20303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18041__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18041__auto____0;
cljs$core$async$state_machine__18041__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18041__auto____1;
return cljs$core$async$state_machine__18041__auto__;
})()
})();
var state__18259__auto__ = (function (){var statearr_20347 = f__18258__auto__();
(statearr_20347[(6)] = c__18257__auto___21365);

return statearr_20347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18259__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__20349 = arguments.length;
switch (G__20349) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18257__auto___21396 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18258__auto__ = (function (){var switch__18040__auto__ = (function (state_20387){
var state_val_20388 = (state_20387[(1)]);
if((state_val_20388 === (7))){
var inst_20383 = (state_20387[(2)]);
var state_20387__$1 = state_20387;
var statearr_20389_21397 = state_20387__$1;
(statearr_20389_21397[(2)] = inst_20383);

(statearr_20389_21397[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20388 === (1))){
var inst_20350 = (new Array(n));
var inst_20351 = inst_20350;
var inst_20352 = (0);
var state_20387__$1 = (function (){var statearr_20390 = state_20387;
(statearr_20390[(7)] = inst_20351);

(statearr_20390[(8)] = inst_20352);

return statearr_20390;
})();
var statearr_20391_21402 = state_20387__$1;
(statearr_20391_21402[(2)] = null);

(statearr_20391_21402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20388 === (4))){
var inst_20355 = (state_20387[(9)]);
var inst_20355__$1 = (state_20387[(2)]);
var inst_20356 = (inst_20355__$1 == null);
var inst_20357 = cljs.core.not(inst_20356);
var state_20387__$1 = (function (){var statearr_20392 = state_20387;
(statearr_20392[(9)] = inst_20355__$1);

return statearr_20392;
})();
if(inst_20357){
var statearr_20393_21403 = state_20387__$1;
(statearr_20393_21403[(1)] = (5));

} else {
var statearr_20394_21404 = state_20387__$1;
(statearr_20394_21404[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20388 === (15))){
var inst_20377 = (state_20387[(2)]);
var state_20387__$1 = state_20387;
var statearr_20395_21406 = state_20387__$1;
(statearr_20395_21406[(2)] = inst_20377);

(statearr_20395_21406[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20388 === (13))){
var state_20387__$1 = state_20387;
var statearr_20396_21407 = state_20387__$1;
(statearr_20396_21407[(2)] = null);

(statearr_20396_21407[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20388 === (6))){
var inst_20352 = (state_20387[(8)]);
var inst_20373 = (inst_20352 > (0));
var state_20387__$1 = state_20387;
if(cljs.core.truth_(inst_20373)){
var statearr_20397_21408 = state_20387__$1;
(statearr_20397_21408[(1)] = (12));

} else {
var statearr_20398_21409 = state_20387__$1;
(statearr_20398_21409[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20388 === (3))){
var inst_20385 = (state_20387[(2)]);
var state_20387__$1 = state_20387;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20387__$1,inst_20385);
} else {
if((state_val_20388 === (12))){
var inst_20351 = (state_20387[(7)]);
var inst_20375 = cljs.core.vec(inst_20351);
var state_20387__$1 = state_20387;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20387__$1,(15),out,inst_20375);
} else {
if((state_val_20388 === (2))){
var state_20387__$1 = state_20387;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20387__$1,(4),ch);
} else {
if((state_val_20388 === (11))){
var inst_20367 = (state_20387[(2)]);
var inst_20368 = (new Array(n));
var inst_20351 = inst_20368;
var inst_20352 = (0);
var state_20387__$1 = (function (){var statearr_20401 = state_20387;
(statearr_20401[(10)] = inst_20367);

(statearr_20401[(7)] = inst_20351);

(statearr_20401[(8)] = inst_20352);

return statearr_20401;
})();
var statearr_20402_21422 = state_20387__$1;
(statearr_20402_21422[(2)] = null);

(statearr_20402_21422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20388 === (9))){
var inst_20351 = (state_20387[(7)]);
var inst_20365 = cljs.core.vec(inst_20351);
var state_20387__$1 = state_20387;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20387__$1,(11),out,inst_20365);
} else {
if((state_val_20388 === (5))){
var inst_20355 = (state_20387[(9)]);
var inst_20351 = (state_20387[(7)]);
var inst_20360 = (state_20387[(11)]);
var inst_20352 = (state_20387[(8)]);
var inst_20359 = (inst_20351[inst_20352] = inst_20355);
var inst_20360__$1 = (inst_20352 + (1));
var inst_20361 = (inst_20360__$1 < n);
var state_20387__$1 = (function (){var statearr_20404 = state_20387;
(statearr_20404[(12)] = inst_20359);

(statearr_20404[(11)] = inst_20360__$1);

return statearr_20404;
})();
if(cljs.core.truth_(inst_20361)){
var statearr_20405_21429 = state_20387__$1;
(statearr_20405_21429[(1)] = (8));

} else {
var statearr_20407_21430 = state_20387__$1;
(statearr_20407_21430[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20388 === (14))){
var inst_20380 = (state_20387[(2)]);
var inst_20381 = cljs.core.async.close_BANG_(out);
var state_20387__$1 = (function (){var statearr_20418 = state_20387;
(statearr_20418[(13)] = inst_20380);

return statearr_20418;
})();
var statearr_20419_21435 = state_20387__$1;
(statearr_20419_21435[(2)] = inst_20381);

(statearr_20419_21435[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20388 === (10))){
var inst_20371 = (state_20387[(2)]);
var state_20387__$1 = state_20387;
var statearr_20420_21436 = state_20387__$1;
(statearr_20420_21436[(2)] = inst_20371);

(statearr_20420_21436[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20388 === (8))){
var inst_20351 = (state_20387[(7)]);
var inst_20360 = (state_20387[(11)]);
var tmp20417 = inst_20351;
var inst_20351__$1 = tmp20417;
var inst_20352 = inst_20360;
var state_20387__$1 = (function (){var statearr_20421 = state_20387;
(statearr_20421[(7)] = inst_20351__$1);

(statearr_20421[(8)] = inst_20352);

return statearr_20421;
})();
var statearr_20422_21441 = state_20387__$1;
(statearr_20422_21441[(2)] = null);

(statearr_20422_21441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__18041__auto__ = null;
var cljs$core$async$state_machine__18041__auto____0 = (function (){
var statearr_20424 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20424[(0)] = cljs$core$async$state_machine__18041__auto__);

(statearr_20424[(1)] = (1));

return statearr_20424;
});
var cljs$core$async$state_machine__18041__auto____1 = (function (state_20387){
while(true){
var ret_value__18042__auto__ = (function (){try{while(true){
var result__18043__auto__ = switch__18040__auto__(state_20387);
if(cljs.core.keyword_identical_QMARK_(result__18043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18043__auto__;
}
break;
}
}catch (e20425){var ex__18044__auto__ = e20425;
var statearr_20426_21444 = state_20387;
(statearr_20426_21444[(2)] = ex__18044__auto__);


if(cljs.core.seq((state_20387[(4)]))){
var statearr_20428_21447 = state_20387;
(statearr_20428_21447[(1)] = cljs.core.first((state_20387[(4)])));

} else {
throw ex__18044__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21448 = state_20387;
state_20387 = G__21448;
continue;
} else {
return ret_value__18042__auto__;
}
break;
}
});
cljs$core$async$state_machine__18041__auto__ = function(state_20387){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18041__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18041__auto____1.call(this,state_20387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18041__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18041__auto____0;
cljs$core$async$state_machine__18041__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18041__auto____1;
return cljs$core$async$state_machine__18041__auto__;
})()
})();
var state__18259__auto__ = (function (){var statearr_20429 = f__18258__auto__();
(statearr_20429[(6)] = c__18257__auto___21396);

return statearr_20429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18259__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__20431 = arguments.length;
switch (G__20431) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18257__auto___21463 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18258__auto__ = (function (){var switch__18040__auto__ = (function (state_20476){
var state_val_20477 = (state_20476[(1)]);
if((state_val_20477 === (7))){
var inst_20472 = (state_20476[(2)]);
var state_20476__$1 = state_20476;
var statearr_20478_21464 = state_20476__$1;
(statearr_20478_21464[(2)] = inst_20472);

(statearr_20478_21464[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20477 === (1))){
var inst_20432 = [];
var inst_20433 = inst_20432;
var inst_20434 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_20476__$1 = (function (){var statearr_20479 = state_20476;
(statearr_20479[(7)] = inst_20433);

(statearr_20479[(8)] = inst_20434);

return statearr_20479;
})();
var statearr_20482_21465 = state_20476__$1;
(statearr_20482_21465[(2)] = null);

(statearr_20482_21465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20477 === (4))){
var inst_20437 = (state_20476[(9)]);
var inst_20437__$1 = (state_20476[(2)]);
var inst_20438 = (inst_20437__$1 == null);
var inst_20439 = cljs.core.not(inst_20438);
var state_20476__$1 = (function (){var statearr_20483 = state_20476;
(statearr_20483[(9)] = inst_20437__$1);

return statearr_20483;
})();
if(inst_20439){
var statearr_20484_21470 = state_20476__$1;
(statearr_20484_21470[(1)] = (5));

} else {
var statearr_20485_21471 = state_20476__$1;
(statearr_20485_21471[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20477 === (15))){
var inst_20433 = (state_20476[(7)]);
var inst_20464 = cljs.core.vec(inst_20433);
var state_20476__$1 = state_20476;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20476__$1,(18),out,inst_20464);
} else {
if((state_val_20477 === (13))){
var inst_20459 = (state_20476[(2)]);
var state_20476__$1 = state_20476;
var statearr_20487_21473 = state_20476__$1;
(statearr_20487_21473[(2)] = inst_20459);

(statearr_20487_21473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20477 === (6))){
var inst_20433 = (state_20476[(7)]);
var inst_20461 = inst_20433.length;
var inst_20462 = (inst_20461 > (0));
var state_20476__$1 = state_20476;
if(cljs.core.truth_(inst_20462)){
var statearr_20488_21474 = state_20476__$1;
(statearr_20488_21474[(1)] = (15));

} else {
var statearr_20489_21475 = state_20476__$1;
(statearr_20489_21475[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20477 === (17))){
var inst_20469 = (state_20476[(2)]);
var inst_20470 = cljs.core.async.close_BANG_(out);
var state_20476__$1 = (function (){var statearr_20490 = state_20476;
(statearr_20490[(10)] = inst_20469);

return statearr_20490;
})();
var statearr_20491_21476 = state_20476__$1;
(statearr_20491_21476[(2)] = inst_20470);

(statearr_20491_21476[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20477 === (3))){
var inst_20474 = (state_20476[(2)]);
var state_20476__$1 = state_20476;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20476__$1,inst_20474);
} else {
if((state_val_20477 === (12))){
var inst_20433 = (state_20476[(7)]);
var inst_20452 = cljs.core.vec(inst_20433);
var state_20476__$1 = state_20476;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20476__$1,(14),out,inst_20452);
} else {
if((state_val_20477 === (2))){
var state_20476__$1 = state_20476;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20476__$1,(4),ch);
} else {
if((state_val_20477 === (11))){
var inst_20433 = (state_20476[(7)]);
var inst_20437 = (state_20476[(9)]);
var inst_20441 = (state_20476[(11)]);
var inst_20449 = inst_20433.push(inst_20437);
var tmp20501 = inst_20433;
var inst_20433__$1 = tmp20501;
var inst_20434 = inst_20441;
var state_20476__$1 = (function (){var statearr_20502 = state_20476;
(statearr_20502[(7)] = inst_20433__$1);

(statearr_20502[(12)] = inst_20449);

(statearr_20502[(8)] = inst_20434);

return statearr_20502;
})();
var statearr_20503_21487 = state_20476__$1;
(statearr_20503_21487[(2)] = null);

(statearr_20503_21487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20477 === (9))){
var inst_20434 = (state_20476[(8)]);
var inst_20445 = cljs.core.keyword_identical_QMARK_(inst_20434,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_20476__$1 = state_20476;
var statearr_20505_21495 = state_20476__$1;
(statearr_20505_21495[(2)] = inst_20445);

(statearr_20505_21495[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20477 === (5))){
var inst_20434 = (state_20476[(8)]);
var inst_20437 = (state_20476[(9)]);
var inst_20441 = (state_20476[(11)]);
var inst_20442 = (state_20476[(13)]);
var inst_20441__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_20437) : f.call(null, inst_20437));
var inst_20442__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20441__$1,inst_20434);
var state_20476__$1 = (function (){var statearr_20506 = state_20476;
(statearr_20506[(11)] = inst_20441__$1);

(statearr_20506[(13)] = inst_20442__$1);

return statearr_20506;
})();
if(inst_20442__$1){
var statearr_20507_21502 = state_20476__$1;
(statearr_20507_21502[(1)] = (8));

} else {
var statearr_20508_21503 = state_20476__$1;
(statearr_20508_21503[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20477 === (14))){
var inst_20437 = (state_20476[(9)]);
var inst_20441 = (state_20476[(11)]);
var inst_20454 = (state_20476[(2)]);
var inst_20455 = [];
var inst_20456 = inst_20455.push(inst_20437);
var inst_20433 = inst_20455;
var inst_20434 = inst_20441;
var state_20476__$1 = (function (){var statearr_20509 = state_20476;
(statearr_20509[(7)] = inst_20433);

(statearr_20509[(8)] = inst_20434);

(statearr_20509[(14)] = inst_20456);

(statearr_20509[(15)] = inst_20454);

return statearr_20509;
})();
var statearr_20510_21504 = state_20476__$1;
(statearr_20510_21504[(2)] = null);

(statearr_20510_21504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20477 === (16))){
var state_20476__$1 = state_20476;
var statearr_20511_21505 = state_20476__$1;
(statearr_20511_21505[(2)] = null);

(statearr_20511_21505[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20477 === (10))){
var inst_20447 = (state_20476[(2)]);
var state_20476__$1 = state_20476;
if(cljs.core.truth_(inst_20447)){
var statearr_20512_21506 = state_20476__$1;
(statearr_20512_21506[(1)] = (11));

} else {
var statearr_20513_21511 = state_20476__$1;
(statearr_20513_21511[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20477 === (18))){
var inst_20466 = (state_20476[(2)]);
var state_20476__$1 = state_20476;
var statearr_20514_21518 = state_20476__$1;
(statearr_20514_21518[(2)] = inst_20466);

(statearr_20514_21518[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20477 === (8))){
var inst_20442 = (state_20476[(13)]);
var state_20476__$1 = state_20476;
var statearr_20515_21519 = state_20476__$1;
(statearr_20515_21519[(2)] = inst_20442);

(statearr_20515_21519[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__18041__auto__ = null;
var cljs$core$async$state_machine__18041__auto____0 = (function (){
var statearr_20516 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20516[(0)] = cljs$core$async$state_machine__18041__auto__);

(statearr_20516[(1)] = (1));

return statearr_20516;
});
var cljs$core$async$state_machine__18041__auto____1 = (function (state_20476){
while(true){
var ret_value__18042__auto__ = (function (){try{while(true){
var result__18043__auto__ = switch__18040__auto__(state_20476);
if(cljs.core.keyword_identical_QMARK_(result__18043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18043__auto__;
}
break;
}
}catch (e20517){var ex__18044__auto__ = e20517;
var statearr_20518_21540 = state_20476;
(statearr_20518_21540[(2)] = ex__18044__auto__);


if(cljs.core.seq((state_20476[(4)]))){
var statearr_20519_21541 = state_20476;
(statearr_20519_21541[(1)] = cljs.core.first((state_20476[(4)])));

} else {
throw ex__18044__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21546 = state_20476;
state_20476 = G__21546;
continue;
} else {
return ret_value__18042__auto__;
}
break;
}
});
cljs$core$async$state_machine__18041__auto__ = function(state_20476){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18041__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18041__auto____1.call(this,state_20476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18041__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18041__auto____0;
cljs$core$async$state_machine__18041__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18041__auto____1;
return cljs$core$async$state_machine__18041__auto__;
})()
})();
var state__18259__auto__ = (function (){var statearr_20520 = f__18258__auto__();
(statearr_20520[(6)] = c__18257__auto___21463);

return statearr_20520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18259__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
