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
cljs.core.async.t_cljs$core$async19024 = (function (f,blockable,meta19025){
this.f = f;
this.blockable = blockable;
this.meta19025 = meta19025;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19024.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19026,meta19025__$1){
var self__ = this;
var _19026__$1 = this;
return (new cljs.core.async.t_cljs$core$async19024(self__.f,self__.blockable,meta19025__$1));
}));

(cljs.core.async.t_cljs$core$async19024.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19026){
var self__ = this;
var _19026__$1 = this;
return self__.meta19025;
}));

(cljs.core.async.t_cljs$core$async19024.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19024.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async19024.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async19024.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async19024.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta19025","meta19025",1997785870,null)], null);
}));

(cljs.core.async.t_cljs$core$async19024.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19024.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19024");

(cljs.core.async.t_cljs$core$async19024.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async19024");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19024.
 */
cljs.core.async.__GT_t_cljs$core$async19024 = (function cljs$core$async$__GT_t_cljs$core$async19024(f,blockable,meta19025){
return (new cljs.core.async.t_cljs$core$async19024(f,blockable,meta19025));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__19023 = arguments.length;
switch (G__19023) {
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
return (new cljs.core.async.t_cljs$core$async19024(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__19043 = arguments.length;
switch (G__19043) {
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
var G__19057 = arguments.length;
switch (G__19057) {
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
var G__19082 = arguments.length;
switch (G__19082) {
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
var val_21691 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_21691) : fn1.call(null, val_21691));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_21691) : fn1.call(null, val_21691));
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
var G__19092 = arguments.length;
switch (G__19092) {
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
var n__5593__auto___21695 = n;
var x_21696 = (0);
while(true){
if((x_21696 < n__5593__auto___21695)){
(a[x_21696] = x_21696);

var G__21697 = (x_21696 + (1));
x_21696 = G__21697;
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
cljs.core.async.t_cljs$core$async19107 = (function (flag,meta19108){
this.flag = flag;
this.meta19108 = meta19108;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19107.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19109,meta19108__$1){
var self__ = this;
var _19109__$1 = this;
return (new cljs.core.async.t_cljs$core$async19107(self__.flag,meta19108__$1));
}));

(cljs.core.async.t_cljs$core$async19107.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19109){
var self__ = this;
var _19109__$1 = this;
return self__.meta19108;
}));

(cljs.core.async.t_cljs$core$async19107.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19107.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async19107.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async19107.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async19107.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta19108","meta19108",2062813033,null)], null);
}));

(cljs.core.async.t_cljs$core$async19107.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19107.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19107");

(cljs.core.async.t_cljs$core$async19107.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async19107");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19107.
 */
cljs.core.async.__GT_t_cljs$core$async19107 = (function cljs$core$async$__GT_t_cljs$core$async19107(flag,meta19108){
return (new cljs.core.async.t_cljs$core$async19107(flag,meta19108));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async19107(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19124 = (function (flag,cb,meta19125){
this.flag = flag;
this.cb = cb;
this.meta19125 = meta19125;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19126,meta19125__$1){
var self__ = this;
var _19126__$1 = this;
return (new cljs.core.async.t_cljs$core$async19124(self__.flag,self__.cb,meta19125__$1));
}));

(cljs.core.async.t_cljs$core$async19124.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19126){
var self__ = this;
var _19126__$1 = this;
return self__.meta19125;
}));

(cljs.core.async.t_cljs$core$async19124.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19124.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async19124.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async19124.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async19124.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta19125","meta19125",-1033328982,null)], null);
}));

(cljs.core.async.t_cljs$core$async19124.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19124.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19124");

(cljs.core.async.t_cljs$core$async19124.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async19124");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19124.
 */
cljs.core.async.__GT_t_cljs$core$async19124 = (function cljs$core$async$__GT_t_cljs$core$async19124(flag,cb,meta19125){
return (new cljs.core.async.t_cljs$core$async19124(flag,cb,meta19125));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async19124(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__19143_SHARP_){
var G__19149 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19143_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__19149) : fret.call(null, G__19149));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19144_SHARP_){
var G__19150 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19144_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__19150) : fret.call(null, G__19150));
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
var G__21700 = (i + (1));
i = G__21700;
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
var len__5726__auto___21701 = arguments.length;
var i__5727__auto___21702 = (0);
while(true){
if((i__5727__auto___21702 < len__5726__auto___21701)){
args__5732__auto__.push((arguments[i__5727__auto___21702]));

var G__21703 = (i__5727__auto___21702 + (1));
i__5727__auto___21702 = G__21703;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__19153){
var map__19154 = p__19153;
var map__19154__$1 = cljs.core.__destructure_map(map__19154);
var opts = map__19154__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq19151){
var G__19152 = cljs.core.first(seq19151);
var seq19151__$1 = cljs.core.next(seq19151);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19152,seq19151__$1);
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
var G__19169 = arguments.length;
switch (G__19169) {
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
var c__12039__auto___21705 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__11942__auto__ = (function (state_19218){
var state_val_19220 = (state_19218[(1)]);
if((state_val_19220 === (7))){
var inst_19210 = (state_19218[(2)]);
var state_19218__$1 = state_19218;
var statearr_19265_21713 = state_19218__$1;
(statearr_19265_21713[(2)] = inst_19210);

(statearr_19265_21713[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19220 === (1))){
var state_19218__$1 = state_19218;
var statearr_19268_21714 = state_19218__$1;
(statearr_19268_21714[(2)] = null);

(statearr_19268_21714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19220 === (4))){
var inst_19183 = (state_19218[(7)]);
var inst_19183__$1 = (state_19218[(2)]);
var inst_19187 = (inst_19183__$1 == null);
var state_19218__$1 = (function (){var statearr_19280 = state_19218;
(statearr_19280[(7)] = inst_19183__$1);

return statearr_19280;
})();
if(cljs.core.truth_(inst_19187)){
var statearr_19281_21715 = state_19218__$1;
(statearr_19281_21715[(1)] = (5));

} else {
var statearr_19282_21717 = state_19218__$1;
(statearr_19282_21717[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19220 === (13))){
var state_19218__$1 = state_19218;
var statearr_19287_21718 = state_19218__$1;
(statearr_19287_21718[(2)] = null);

(statearr_19287_21718[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19220 === (6))){
var inst_19183 = (state_19218[(7)]);
var state_19218__$1 = state_19218;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19218__$1,(11),to,inst_19183);
} else {
if((state_val_19220 === (3))){
var inst_19212 = (state_19218[(2)]);
var state_19218__$1 = state_19218;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19218__$1,inst_19212);
} else {
if((state_val_19220 === (12))){
var state_19218__$1 = state_19218;
var statearr_19305_21719 = state_19218__$1;
(statearr_19305_21719[(2)] = null);

(statearr_19305_21719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19220 === (2))){
var state_19218__$1 = state_19218;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19218__$1,(4),from);
} else {
if((state_val_19220 === (11))){
var inst_19197 = (state_19218[(2)]);
var state_19218__$1 = state_19218;
if(cljs.core.truth_(inst_19197)){
var statearr_19326_21720 = state_19218__$1;
(statearr_19326_21720[(1)] = (12));

} else {
var statearr_19328_21721 = state_19218__$1;
(statearr_19328_21721[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19220 === (9))){
var state_19218__$1 = state_19218;
var statearr_19342_21722 = state_19218__$1;
(statearr_19342_21722[(2)] = null);

(statearr_19342_21722[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19220 === (5))){
var state_19218__$1 = state_19218;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19355_21732 = state_19218__$1;
(statearr_19355_21732[(1)] = (8));

} else {
var statearr_19357_21733 = state_19218__$1;
(statearr_19357_21733[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19220 === (14))){
var inst_19208 = (state_19218[(2)]);
var state_19218__$1 = state_19218;
var statearr_19381_21734 = state_19218__$1;
(statearr_19381_21734[(2)] = inst_19208);

(statearr_19381_21734[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19220 === (10))){
var inst_19194 = (state_19218[(2)]);
var state_19218__$1 = state_19218;
var statearr_19395_21735 = state_19218__$1;
(statearr_19395_21735[(2)] = inst_19194);

(statearr_19395_21735[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19220 === (8))){
var inst_19191 = cljs.core.async.close_BANG_(to);
var state_19218__$1 = state_19218;
var statearr_19396_21736 = state_19218__$1;
(statearr_19396_21736[(2)] = inst_19191);

(statearr_19396_21736[(1)] = (10));


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
var cljs$core$async$state_machine__11943__auto__ = null;
var cljs$core$async$state_machine__11943__auto____0 = (function (){
var statearr_19404 = [null,null,null,null,null,null,null,null];
(statearr_19404[(0)] = cljs$core$async$state_machine__11943__auto__);

(statearr_19404[(1)] = (1));

return statearr_19404;
});
var cljs$core$async$state_machine__11943__auto____1 = (function (state_19218){
while(true){
var ret_value__11944__auto__ = (function (){try{while(true){
var result__11945__auto__ = switch__11942__auto__(state_19218);
if(cljs.core.keyword_identical_QMARK_(result__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11945__auto__;
}
break;
}
}catch (e19414){var ex__11946__auto__ = e19414;
var statearr_19415_21741 = state_19218;
(statearr_19415_21741[(2)] = ex__11946__auto__);


if(cljs.core.seq((state_19218[(4)]))){
var statearr_19417_21742 = state_19218;
(statearr_19417_21742[(1)] = cljs.core.first((state_19218[(4)])));

} else {
throw ex__11946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21743 = state_19218;
state_19218 = G__21743;
continue;
} else {
return ret_value__11944__auto__;
}
break;
}
});
cljs$core$async$state_machine__11943__auto__ = function(state_19218){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11943__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11943__auto____1.call(this,state_19218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11943__auto____0;
cljs$core$async$state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11943__auto____1;
return cljs$core$async$state_machine__11943__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_19420 = f__12040__auto__();
(statearr_19420[(6)] = c__12039__auto___21705);

return statearr_19420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
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
var process__$1 = (function (p__19478){
var vec__19482 = p__19478;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19482,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19482,(1),null);
var job = vec__19482;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__12039__auto___21751 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__11942__auto__ = (function (state_19498){
var state_val_19499 = (state_19498[(1)]);
if((state_val_19499 === (1))){
var state_19498__$1 = state_19498;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19498__$1,(2),res,v);
} else {
if((state_val_19499 === (2))){
var inst_19487 = (state_19498[(2)]);
var inst_19492 = cljs.core.async.close_BANG_(res);
var state_19498__$1 = (function (){var statearr_19525 = state_19498;
(statearr_19525[(7)] = inst_19487);

return statearr_19525;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19498__$1,inst_19492);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11943__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11943__auto____0 = (function (){
var statearr_19527 = [null,null,null,null,null,null,null,null];
(statearr_19527[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11943__auto__);

(statearr_19527[(1)] = (1));

return statearr_19527;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11943__auto____1 = (function (state_19498){
while(true){
var ret_value__11944__auto__ = (function (){try{while(true){
var result__11945__auto__ = switch__11942__auto__(state_19498);
if(cljs.core.keyword_identical_QMARK_(result__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11945__auto__;
}
break;
}
}catch (e19528){var ex__11946__auto__ = e19528;
var statearr_19529_21753 = state_19498;
(statearr_19529_21753[(2)] = ex__11946__auto__);


if(cljs.core.seq((state_19498[(4)]))){
var statearr_19530_21754 = state_19498;
(statearr_19530_21754[(1)] = cljs.core.first((state_19498[(4)])));

} else {
throw ex__11946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21755 = state_19498;
state_19498 = G__21755;
continue;
} else {
return ret_value__11944__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11943__auto__ = function(state_19498){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11943__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11943__auto____1.call(this,state_19498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11943__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11943__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11943__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_19531 = f__12040__auto__();
(statearr_19531[(6)] = c__12039__auto___21751);

return statearr_19531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__19532){
var vec__19536 = p__19532;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19536,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19536,(1),null);
var job = vec__19536;
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
var n__5593__auto___21756 = n;
var __21757 = (0);
while(true){
if((__21757 < n__5593__auto___21756)){
var G__19540_21758 = type;
var G__19540_21759__$1 = (((G__19540_21758 instanceof cljs.core.Keyword))?G__19540_21758.fqn:null);
switch (G__19540_21759__$1) {
case "compute":
var c__12039__auto___21761 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__21757,c__12039__auto___21761,G__19540_21758,G__19540_21759__$1,n__5593__auto___21756,jobs,results,process__$1,async){
return (function (){
var f__12040__auto__ = (function (){var switch__11942__auto__ = ((function (__21757,c__12039__auto___21761,G__19540_21758,G__19540_21759__$1,n__5593__auto___21756,jobs,results,process__$1,async){
return (function (state_19553){
var state_val_19554 = (state_19553[(1)]);
if((state_val_19554 === (1))){
var state_19553__$1 = state_19553;
var statearr_19556_21764 = state_19553__$1;
(statearr_19556_21764[(2)] = null);

(statearr_19556_21764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19554 === (2))){
var state_19553__$1 = state_19553;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19553__$1,(4),jobs);
} else {
if((state_val_19554 === (3))){
var inst_19551 = (state_19553[(2)]);
var state_19553__$1 = state_19553;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19553__$1,inst_19551);
} else {
if((state_val_19554 === (4))){
var inst_19543 = (state_19553[(2)]);
var inst_19544 = process__$1(inst_19543);
var state_19553__$1 = state_19553;
if(cljs.core.truth_(inst_19544)){
var statearr_19566_21770 = state_19553__$1;
(statearr_19566_21770[(1)] = (5));

} else {
var statearr_19567_21771 = state_19553__$1;
(statearr_19567_21771[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19554 === (5))){
var state_19553__$1 = state_19553;
var statearr_19576_21772 = state_19553__$1;
(statearr_19576_21772[(2)] = null);

(statearr_19576_21772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19554 === (6))){
var state_19553__$1 = state_19553;
var statearr_19581_21774 = state_19553__$1;
(statearr_19581_21774[(2)] = null);

(statearr_19581_21774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19554 === (7))){
var inst_19549 = (state_19553[(2)]);
var state_19553__$1 = state_19553;
var statearr_19582_21776 = state_19553__$1;
(statearr_19582_21776[(2)] = inst_19549);

(statearr_19582_21776[(1)] = (3));


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
});})(__21757,c__12039__auto___21761,G__19540_21758,G__19540_21759__$1,n__5593__auto___21756,jobs,results,process__$1,async))
;
return ((function (__21757,switch__11942__auto__,c__12039__auto___21761,G__19540_21758,G__19540_21759__$1,n__5593__auto___21756,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11943__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11943__auto____0 = (function (){
var statearr_19583 = [null,null,null,null,null,null,null];
(statearr_19583[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11943__auto__);

(statearr_19583[(1)] = (1));

return statearr_19583;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11943__auto____1 = (function (state_19553){
while(true){
var ret_value__11944__auto__ = (function (){try{while(true){
var result__11945__auto__ = switch__11942__auto__(state_19553);
if(cljs.core.keyword_identical_QMARK_(result__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11945__auto__;
}
break;
}
}catch (e19586){var ex__11946__auto__ = e19586;
var statearr_19587_21778 = state_19553;
(statearr_19587_21778[(2)] = ex__11946__auto__);


if(cljs.core.seq((state_19553[(4)]))){
var statearr_19588_21779 = state_19553;
(statearr_19588_21779[(1)] = cljs.core.first((state_19553[(4)])));

} else {
throw ex__11946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21780 = state_19553;
state_19553 = G__21780;
continue;
} else {
return ret_value__11944__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11943__auto__ = function(state_19553){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11943__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11943__auto____1.call(this,state_19553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11943__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11943__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11943__auto__;
})()
;})(__21757,switch__11942__auto__,c__12039__auto___21761,G__19540_21758,G__19540_21759__$1,n__5593__auto___21756,jobs,results,process__$1,async))
})();
var state__12041__auto__ = (function (){var statearr_19590 = f__12040__auto__();
(statearr_19590[(6)] = c__12039__auto___21761);

return statearr_19590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
});})(__21757,c__12039__auto___21761,G__19540_21758,G__19540_21759__$1,n__5593__auto___21756,jobs,results,process__$1,async))
);


break;
case "async":
var c__12039__auto___21784 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__21757,c__12039__auto___21784,G__19540_21758,G__19540_21759__$1,n__5593__auto___21756,jobs,results,process__$1,async){
return (function (){
var f__12040__auto__ = (function (){var switch__11942__auto__ = ((function (__21757,c__12039__auto___21784,G__19540_21758,G__19540_21759__$1,n__5593__auto___21756,jobs,results,process__$1,async){
return (function (state_19605){
var state_val_19606 = (state_19605[(1)]);
if((state_val_19606 === (1))){
var state_19605__$1 = state_19605;
var statearr_19608_21786 = state_19605__$1;
(statearr_19608_21786[(2)] = null);

(statearr_19608_21786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19606 === (2))){
var state_19605__$1 = state_19605;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19605__$1,(4),jobs);
} else {
if((state_val_19606 === (3))){
var inst_19603 = (state_19605[(2)]);
var state_19605__$1 = state_19605;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19605__$1,inst_19603);
} else {
if((state_val_19606 === (4))){
var inst_19593 = (state_19605[(2)]);
var inst_19594 = async(inst_19593);
var state_19605__$1 = state_19605;
if(cljs.core.truth_(inst_19594)){
var statearr_19612_21787 = state_19605__$1;
(statearr_19612_21787[(1)] = (5));

} else {
var statearr_19613_21788 = state_19605__$1;
(statearr_19613_21788[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19606 === (5))){
var state_19605__$1 = state_19605;
var statearr_19614_21789 = state_19605__$1;
(statearr_19614_21789[(2)] = null);

(statearr_19614_21789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19606 === (6))){
var state_19605__$1 = state_19605;
var statearr_19622_21790 = state_19605__$1;
(statearr_19622_21790[(2)] = null);

(statearr_19622_21790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19606 === (7))){
var inst_19601 = (state_19605[(2)]);
var state_19605__$1 = state_19605;
var statearr_19628_21791 = state_19605__$1;
(statearr_19628_21791[(2)] = inst_19601);

(statearr_19628_21791[(1)] = (3));


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
});})(__21757,c__12039__auto___21784,G__19540_21758,G__19540_21759__$1,n__5593__auto___21756,jobs,results,process__$1,async))
;
return ((function (__21757,switch__11942__auto__,c__12039__auto___21784,G__19540_21758,G__19540_21759__$1,n__5593__auto___21756,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11943__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11943__auto____0 = (function (){
var statearr_19642 = [null,null,null,null,null,null,null];
(statearr_19642[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11943__auto__);

(statearr_19642[(1)] = (1));

return statearr_19642;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11943__auto____1 = (function (state_19605){
while(true){
var ret_value__11944__auto__ = (function (){try{while(true){
var result__11945__auto__ = switch__11942__auto__(state_19605);
if(cljs.core.keyword_identical_QMARK_(result__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11945__auto__;
}
break;
}
}catch (e19649){var ex__11946__auto__ = e19649;
var statearr_19654_21792 = state_19605;
(statearr_19654_21792[(2)] = ex__11946__auto__);


if(cljs.core.seq((state_19605[(4)]))){
var statearr_19662_21793 = state_19605;
(statearr_19662_21793[(1)] = cljs.core.first((state_19605[(4)])));

} else {
throw ex__11946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21795 = state_19605;
state_19605 = G__21795;
continue;
} else {
return ret_value__11944__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11943__auto__ = function(state_19605){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11943__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11943__auto____1.call(this,state_19605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11943__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11943__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11943__auto__;
})()
;})(__21757,switch__11942__auto__,c__12039__auto___21784,G__19540_21758,G__19540_21759__$1,n__5593__auto___21756,jobs,results,process__$1,async))
})();
var state__12041__auto__ = (function (){var statearr_19693 = f__12040__auto__();
(statearr_19693[(6)] = c__12039__auto___21784);

return statearr_19693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
});})(__21757,c__12039__auto___21784,G__19540_21758,G__19540_21759__$1,n__5593__auto___21756,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19540_21759__$1)].join('')));

}

var G__21796 = (__21757 + (1));
__21757 = G__21796;
continue;
} else {
}
break;
}

var c__12039__auto___21797 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__11942__auto__ = (function (state_19784){
var state_val_19785 = (state_19784[(1)]);
if((state_val_19785 === (7))){
var inst_19772 = (state_19784[(2)]);
var state_19784__$1 = state_19784;
var statearr_19792_21798 = state_19784__$1;
(statearr_19792_21798[(2)] = inst_19772);

(statearr_19792_21798[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19785 === (1))){
var state_19784__$1 = state_19784;
var statearr_19793_21799 = state_19784__$1;
(statearr_19793_21799[(2)] = null);

(statearr_19793_21799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19785 === (4))){
var inst_19731 = (state_19784[(7)]);
var inst_19731__$1 = (state_19784[(2)]);
var inst_19732 = (inst_19731__$1 == null);
var state_19784__$1 = (function (){var statearr_19804 = state_19784;
(statearr_19804[(7)] = inst_19731__$1);

return statearr_19804;
})();
if(cljs.core.truth_(inst_19732)){
var statearr_19807_21808 = state_19784__$1;
(statearr_19807_21808[(1)] = (5));

} else {
var statearr_19813_21809 = state_19784__$1;
(statearr_19813_21809[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19785 === (6))){
var inst_19731 = (state_19784[(7)]);
var inst_19741 = (state_19784[(8)]);
var inst_19741__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_19754 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19756 = [inst_19731,inst_19741__$1];
var inst_19757 = (new cljs.core.PersistentVector(null,2,(5),inst_19754,inst_19756,null));
var state_19784__$1 = (function (){var statearr_19818 = state_19784;
(statearr_19818[(8)] = inst_19741__$1);

return statearr_19818;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19784__$1,(8),jobs,inst_19757);
} else {
if((state_val_19785 === (3))){
var inst_19774 = (state_19784[(2)]);
var state_19784__$1 = state_19784;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19784__$1,inst_19774);
} else {
if((state_val_19785 === (2))){
var state_19784__$1 = state_19784;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19784__$1,(4),from);
} else {
if((state_val_19785 === (9))){
var inst_19765 = (state_19784[(2)]);
var state_19784__$1 = (function (){var statearr_19824 = state_19784;
(statearr_19824[(9)] = inst_19765);

return statearr_19824;
})();
var statearr_19825_21811 = state_19784__$1;
(statearr_19825_21811[(2)] = null);

(statearr_19825_21811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19785 === (5))){
var inst_19735 = cljs.core.async.close_BANG_(jobs);
var state_19784__$1 = state_19784;
var statearr_19832_21812 = state_19784__$1;
(statearr_19832_21812[(2)] = inst_19735);

(statearr_19832_21812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19785 === (8))){
var inst_19741 = (state_19784[(8)]);
var inst_19759 = (state_19784[(2)]);
var state_19784__$1 = (function (){var statearr_19840 = state_19784;
(statearr_19840[(10)] = inst_19759);

return statearr_19840;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19784__$1,(9),results,inst_19741);
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
var cljs$core$async$pipeline_STAR__$_state_machine__11943__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11943__auto____0 = (function (){
var statearr_19845 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19845[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11943__auto__);

(statearr_19845[(1)] = (1));

return statearr_19845;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11943__auto____1 = (function (state_19784){
while(true){
var ret_value__11944__auto__ = (function (){try{while(true){
var result__11945__auto__ = switch__11942__auto__(state_19784);
if(cljs.core.keyword_identical_QMARK_(result__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11945__auto__;
}
break;
}
}catch (e19851){var ex__11946__auto__ = e19851;
var statearr_19857_21814 = state_19784;
(statearr_19857_21814[(2)] = ex__11946__auto__);


if(cljs.core.seq((state_19784[(4)]))){
var statearr_19864_21815 = state_19784;
(statearr_19864_21815[(1)] = cljs.core.first((state_19784[(4)])));

} else {
throw ex__11946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21816 = state_19784;
state_19784 = G__21816;
continue;
} else {
return ret_value__11944__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11943__auto__ = function(state_19784){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11943__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11943__auto____1.call(this,state_19784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11943__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11943__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11943__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_19871 = f__12040__auto__();
(statearr_19871[(6)] = c__12039__auto___21797);

return statearr_19871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));


var c__12039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__11942__auto__ = (function (state_19910){
var state_val_19911 = (state_19910[(1)]);
if((state_val_19911 === (7))){
var inst_19906 = (state_19910[(2)]);
var state_19910__$1 = state_19910;
var statearr_19913_21818 = state_19910__$1;
(statearr_19913_21818[(2)] = inst_19906);

(statearr_19913_21818[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19911 === (20))){
var state_19910__$1 = state_19910;
var statearr_19914_21819 = state_19910__$1;
(statearr_19914_21819[(2)] = null);

(statearr_19914_21819[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19911 === (1))){
var state_19910__$1 = state_19910;
var statearr_19915_21820 = state_19910__$1;
(statearr_19915_21820[(2)] = null);

(statearr_19915_21820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19911 === (4))){
var inst_19874 = (state_19910[(7)]);
var inst_19874__$1 = (state_19910[(2)]);
var inst_19875 = (inst_19874__$1 == null);
var state_19910__$1 = (function (){var statearr_19920 = state_19910;
(statearr_19920[(7)] = inst_19874__$1);

return statearr_19920;
})();
if(cljs.core.truth_(inst_19875)){
var statearr_19921_21823 = state_19910__$1;
(statearr_19921_21823[(1)] = (5));

} else {
var statearr_19926_21824 = state_19910__$1;
(statearr_19926_21824[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19911 === (15))){
var inst_19887 = (state_19910[(8)]);
var state_19910__$1 = state_19910;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19910__$1,(18),to,inst_19887);
} else {
if((state_val_19911 === (21))){
var inst_19901 = (state_19910[(2)]);
var state_19910__$1 = state_19910;
var statearr_19931_21825 = state_19910__$1;
(statearr_19931_21825[(2)] = inst_19901);

(statearr_19931_21825[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19911 === (13))){
var inst_19903 = (state_19910[(2)]);
var state_19910__$1 = (function (){var statearr_19932 = state_19910;
(statearr_19932[(9)] = inst_19903);

return statearr_19932;
})();
var statearr_19933_21826 = state_19910__$1;
(statearr_19933_21826[(2)] = null);

(statearr_19933_21826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19911 === (6))){
var inst_19874 = (state_19910[(7)]);
var state_19910__$1 = state_19910;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19910__$1,(11),inst_19874);
} else {
if((state_val_19911 === (17))){
var inst_19895 = (state_19910[(2)]);
var state_19910__$1 = state_19910;
if(cljs.core.truth_(inst_19895)){
var statearr_19935_21827 = state_19910__$1;
(statearr_19935_21827[(1)] = (19));

} else {
var statearr_19936_21828 = state_19910__$1;
(statearr_19936_21828[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19911 === (3))){
var inst_19908 = (state_19910[(2)]);
var state_19910__$1 = state_19910;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19910__$1,inst_19908);
} else {
if((state_val_19911 === (12))){
var inst_19884 = (state_19910[(10)]);
var state_19910__$1 = state_19910;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19910__$1,(14),inst_19884);
} else {
if((state_val_19911 === (2))){
var state_19910__$1 = state_19910;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19910__$1,(4),results);
} else {
if((state_val_19911 === (19))){
var state_19910__$1 = state_19910;
var statearr_19938_21831 = state_19910__$1;
(statearr_19938_21831[(2)] = null);

(statearr_19938_21831[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19911 === (11))){
var inst_19884 = (state_19910[(2)]);
var state_19910__$1 = (function (){var statearr_19939 = state_19910;
(statearr_19939[(10)] = inst_19884);

return statearr_19939;
})();
var statearr_19940_21832 = state_19910__$1;
(statearr_19940_21832[(2)] = null);

(statearr_19940_21832[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19911 === (9))){
var state_19910__$1 = state_19910;
var statearr_19941_21833 = state_19910__$1;
(statearr_19941_21833[(2)] = null);

(statearr_19941_21833[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19911 === (5))){
var state_19910__$1 = state_19910;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19942_21834 = state_19910__$1;
(statearr_19942_21834[(1)] = (8));

} else {
var statearr_19943_21835 = state_19910__$1;
(statearr_19943_21835[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19911 === (14))){
var inst_19887 = (state_19910[(8)]);
var inst_19889 = (state_19910[(11)]);
var inst_19887__$1 = (state_19910[(2)]);
var inst_19888 = (inst_19887__$1 == null);
var inst_19889__$1 = cljs.core.not(inst_19888);
var state_19910__$1 = (function (){var statearr_19945 = state_19910;
(statearr_19945[(8)] = inst_19887__$1);

(statearr_19945[(11)] = inst_19889__$1);

return statearr_19945;
})();
if(inst_19889__$1){
var statearr_19946_21836 = state_19910__$1;
(statearr_19946_21836[(1)] = (15));

} else {
var statearr_19947_21837 = state_19910__$1;
(statearr_19947_21837[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19911 === (16))){
var inst_19889 = (state_19910[(11)]);
var state_19910__$1 = state_19910;
var statearr_19948_21838 = state_19910__$1;
(statearr_19948_21838[(2)] = inst_19889);

(statearr_19948_21838[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19911 === (10))){
var inst_19881 = (state_19910[(2)]);
var state_19910__$1 = state_19910;
var statearr_19949_21839 = state_19910__$1;
(statearr_19949_21839[(2)] = inst_19881);

(statearr_19949_21839[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19911 === (18))){
var inst_19892 = (state_19910[(2)]);
var state_19910__$1 = state_19910;
var statearr_19950_21841 = state_19910__$1;
(statearr_19950_21841[(2)] = inst_19892);

(statearr_19950_21841[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19911 === (8))){
var inst_19878 = cljs.core.async.close_BANG_(to);
var state_19910__$1 = state_19910;
var statearr_19951_21842 = state_19910__$1;
(statearr_19951_21842[(2)] = inst_19878);

(statearr_19951_21842[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__11943__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11943__auto____0 = (function (){
var statearr_19952 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19952[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11943__auto__);

(statearr_19952[(1)] = (1));

return statearr_19952;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11943__auto____1 = (function (state_19910){
while(true){
var ret_value__11944__auto__ = (function (){try{while(true){
var result__11945__auto__ = switch__11942__auto__(state_19910);
if(cljs.core.keyword_identical_QMARK_(result__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11945__auto__;
}
break;
}
}catch (e19953){var ex__11946__auto__ = e19953;
var statearr_19954_21844 = state_19910;
(statearr_19954_21844[(2)] = ex__11946__auto__);


if(cljs.core.seq((state_19910[(4)]))){
var statearr_19955_21845 = state_19910;
(statearr_19955_21845[(1)] = cljs.core.first((state_19910[(4)])));

} else {
throw ex__11946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21847 = state_19910;
state_19910 = G__21847;
continue;
} else {
return ret_value__11944__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11943__auto__ = function(state_19910){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11943__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11943__auto____1.call(this,state_19910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11943__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11943__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11943__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_19957 = f__12040__auto__();
(statearr_19957[(6)] = c__12039__auto__);

return statearr_19957;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
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
var G__19959 = arguments.length;
switch (G__19959) {
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
var G__19962 = arguments.length;
switch (G__19962) {
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
var G__19966 = arguments.length;
switch (G__19966) {
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
var c__12039__auto___21854 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__11942__auto__ = (function (state_19992){
var state_val_19993 = (state_19992[(1)]);
if((state_val_19993 === (7))){
var inst_19988 = (state_19992[(2)]);
var state_19992__$1 = state_19992;
var statearr_19995_21855 = state_19992__$1;
(statearr_19995_21855[(2)] = inst_19988);

(statearr_19995_21855[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19993 === (1))){
var state_19992__$1 = state_19992;
var statearr_19996_21856 = state_19992__$1;
(statearr_19996_21856[(2)] = null);

(statearr_19996_21856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19993 === (4))){
var inst_19969 = (state_19992[(7)]);
var inst_19969__$1 = (state_19992[(2)]);
var inst_19970 = (inst_19969__$1 == null);
var state_19992__$1 = (function (){var statearr_19997 = state_19992;
(statearr_19997[(7)] = inst_19969__$1);

return statearr_19997;
})();
if(cljs.core.truth_(inst_19970)){
var statearr_19998_21857 = state_19992__$1;
(statearr_19998_21857[(1)] = (5));

} else {
var statearr_19999_21858 = state_19992__$1;
(statearr_19999_21858[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19993 === (13))){
var state_19992__$1 = state_19992;
var statearr_20000_21859 = state_19992__$1;
(statearr_20000_21859[(2)] = null);

(statearr_20000_21859[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19993 === (6))){
var inst_19969 = (state_19992[(7)]);
var inst_19975 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_19969) : p.call(null, inst_19969));
var state_19992__$1 = state_19992;
if(cljs.core.truth_(inst_19975)){
var statearr_20001_21864 = state_19992__$1;
(statearr_20001_21864[(1)] = (9));

} else {
var statearr_20002_21865 = state_19992__$1;
(statearr_20002_21865[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19993 === (3))){
var inst_19990 = (state_19992[(2)]);
var state_19992__$1 = state_19992;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19992__$1,inst_19990);
} else {
if((state_val_19993 === (12))){
var state_19992__$1 = state_19992;
var statearr_20003_21868 = state_19992__$1;
(statearr_20003_21868[(2)] = null);

(statearr_20003_21868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19993 === (2))){
var state_19992__$1 = state_19992;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19992__$1,(4),ch);
} else {
if((state_val_19993 === (11))){
var inst_19969 = (state_19992[(7)]);
var inst_19979 = (state_19992[(2)]);
var state_19992__$1 = state_19992;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19992__$1,(8),inst_19979,inst_19969);
} else {
if((state_val_19993 === (9))){
var state_19992__$1 = state_19992;
var statearr_20005_21869 = state_19992__$1;
(statearr_20005_21869[(2)] = tc);

(statearr_20005_21869[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19993 === (5))){
var inst_19972 = cljs.core.async.close_BANG_(tc);
var inst_19973 = cljs.core.async.close_BANG_(fc);
var state_19992__$1 = (function (){var statearr_20006 = state_19992;
(statearr_20006[(8)] = inst_19972);

return statearr_20006;
})();
var statearr_20007_21871 = state_19992__$1;
(statearr_20007_21871[(2)] = inst_19973);

(statearr_20007_21871[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19993 === (14))){
var inst_19986 = (state_19992[(2)]);
var state_19992__$1 = state_19992;
var statearr_20008_21874 = state_19992__$1;
(statearr_20008_21874[(2)] = inst_19986);

(statearr_20008_21874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19993 === (10))){
var state_19992__$1 = state_19992;
var statearr_20009_21875 = state_19992__$1;
(statearr_20009_21875[(2)] = fc);

(statearr_20009_21875[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19993 === (8))){
var inst_19981 = (state_19992[(2)]);
var state_19992__$1 = state_19992;
if(cljs.core.truth_(inst_19981)){
var statearr_20010_21877 = state_19992__$1;
(statearr_20010_21877[(1)] = (12));

} else {
var statearr_20011_21878 = state_19992__$1;
(statearr_20011_21878[(1)] = (13));

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
var cljs$core$async$state_machine__11943__auto__ = null;
var cljs$core$async$state_machine__11943__auto____0 = (function (){
var statearr_20012 = [null,null,null,null,null,null,null,null,null];
(statearr_20012[(0)] = cljs$core$async$state_machine__11943__auto__);

(statearr_20012[(1)] = (1));

return statearr_20012;
});
var cljs$core$async$state_machine__11943__auto____1 = (function (state_19992){
while(true){
var ret_value__11944__auto__ = (function (){try{while(true){
var result__11945__auto__ = switch__11942__auto__(state_19992);
if(cljs.core.keyword_identical_QMARK_(result__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11945__auto__;
}
break;
}
}catch (e20013){var ex__11946__auto__ = e20013;
var statearr_20014_21879 = state_19992;
(statearr_20014_21879[(2)] = ex__11946__auto__);


if(cljs.core.seq((state_19992[(4)]))){
var statearr_20015_21880 = state_19992;
(statearr_20015_21880[(1)] = cljs.core.first((state_19992[(4)])));

} else {
throw ex__11946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21881 = state_19992;
state_19992 = G__21881;
continue;
} else {
return ret_value__11944__auto__;
}
break;
}
});
cljs$core$async$state_machine__11943__auto__ = function(state_19992){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11943__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11943__auto____1.call(this,state_19992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11943__auto____0;
cljs$core$async$state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11943__auto____1;
return cljs$core$async$state_machine__11943__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_20017 = f__12040__auto__();
(statearr_20017[(6)] = c__12039__auto___21854);

return statearr_20017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
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
var c__12039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__11942__auto__ = (function (state_20040){
var state_val_20041 = (state_20040[(1)]);
if((state_val_20041 === (7))){
var inst_20036 = (state_20040[(2)]);
var state_20040__$1 = state_20040;
var statearr_20042_21891 = state_20040__$1;
(statearr_20042_21891[(2)] = inst_20036);

(statearr_20042_21891[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20041 === (1))){
var inst_20018 = init;
var inst_20019 = inst_20018;
var state_20040__$1 = (function (){var statearr_20043 = state_20040;
(statearr_20043[(7)] = inst_20019);

return statearr_20043;
})();
var statearr_20044_21892 = state_20040__$1;
(statearr_20044_21892[(2)] = null);

(statearr_20044_21892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20041 === (4))){
var inst_20022 = (state_20040[(8)]);
var inst_20022__$1 = (state_20040[(2)]);
var inst_20023 = (inst_20022__$1 == null);
var state_20040__$1 = (function (){var statearr_20045 = state_20040;
(statearr_20045[(8)] = inst_20022__$1);

return statearr_20045;
})();
if(cljs.core.truth_(inst_20023)){
var statearr_20046_21893 = state_20040__$1;
(statearr_20046_21893[(1)] = (5));

} else {
var statearr_20048_21894 = state_20040__$1;
(statearr_20048_21894[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20041 === (6))){
var inst_20022 = (state_20040[(8)]);
var inst_20019 = (state_20040[(7)]);
var inst_20026 = (state_20040[(9)]);
var inst_20026__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_20019,inst_20022) : f.call(null, inst_20019,inst_20022));
var inst_20027 = cljs.core.reduced_QMARK_(inst_20026__$1);
var state_20040__$1 = (function (){var statearr_20049 = state_20040;
(statearr_20049[(9)] = inst_20026__$1);

return statearr_20049;
})();
if(inst_20027){
var statearr_20050_21899 = state_20040__$1;
(statearr_20050_21899[(1)] = (8));

} else {
var statearr_20051_21900 = state_20040__$1;
(statearr_20051_21900[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20041 === (3))){
var inst_20038 = (state_20040[(2)]);
var state_20040__$1 = state_20040;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20040__$1,inst_20038);
} else {
if((state_val_20041 === (2))){
var state_20040__$1 = state_20040;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20040__$1,(4),ch);
} else {
if((state_val_20041 === (9))){
var inst_20026 = (state_20040[(9)]);
var inst_20019 = inst_20026;
var state_20040__$1 = (function (){var statearr_20052 = state_20040;
(statearr_20052[(7)] = inst_20019);

return statearr_20052;
})();
var statearr_20053_21901 = state_20040__$1;
(statearr_20053_21901[(2)] = null);

(statearr_20053_21901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20041 === (5))){
var inst_20019 = (state_20040[(7)]);
var state_20040__$1 = state_20040;
var statearr_20054_21902 = state_20040__$1;
(statearr_20054_21902[(2)] = inst_20019);

(statearr_20054_21902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20041 === (10))){
var inst_20034 = (state_20040[(2)]);
var state_20040__$1 = state_20040;
var statearr_20055_21903 = state_20040__$1;
(statearr_20055_21903[(2)] = inst_20034);

(statearr_20055_21903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20041 === (8))){
var inst_20026 = (state_20040[(9)]);
var inst_20030 = cljs.core.deref(inst_20026);
var state_20040__$1 = state_20040;
var statearr_20056_21904 = state_20040__$1;
(statearr_20056_21904[(2)] = inst_20030);

(statearr_20056_21904[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__11943__auto__ = null;
var cljs$core$async$reduce_$_state_machine__11943__auto____0 = (function (){
var statearr_20058 = [null,null,null,null,null,null,null,null,null,null];
(statearr_20058[(0)] = cljs$core$async$reduce_$_state_machine__11943__auto__);

(statearr_20058[(1)] = (1));

return statearr_20058;
});
var cljs$core$async$reduce_$_state_machine__11943__auto____1 = (function (state_20040){
while(true){
var ret_value__11944__auto__ = (function (){try{while(true){
var result__11945__auto__ = switch__11942__auto__(state_20040);
if(cljs.core.keyword_identical_QMARK_(result__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11945__auto__;
}
break;
}
}catch (e20059){var ex__11946__auto__ = e20059;
var statearr_20060_21914 = state_20040;
(statearr_20060_21914[(2)] = ex__11946__auto__);


if(cljs.core.seq((state_20040[(4)]))){
var statearr_20061_21915 = state_20040;
(statearr_20061_21915[(1)] = cljs.core.first((state_20040[(4)])));

} else {
throw ex__11946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21916 = state_20040;
state_20040 = G__21916;
continue;
} else {
return ret_value__11944__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__11943__auto__ = function(state_20040){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__11943__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__11943__auto____1.call(this,state_20040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__11943__auto____0;
cljs$core$async$reduce_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__11943__auto____1;
return cljs$core$async$reduce_$_state_machine__11943__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_20062 = f__12040__auto__();
(statearr_20062[(6)] = c__12039__auto__);

return statearr_20062;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null, f));
var c__12039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__11942__auto__ = (function (state_20069){
var state_val_20070 = (state_20069[(1)]);
if((state_val_20070 === (1))){
var inst_20064 = cljs.core.async.reduce(f__$1,init,ch);
var state_20069__$1 = state_20069;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20069__$1,(2),inst_20064);
} else {
if((state_val_20070 === (2))){
var inst_20066 = (state_20069[(2)]);
var inst_20067 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_20066) : f__$1.call(null, inst_20066));
var state_20069__$1 = state_20069;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20069__$1,inst_20067);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__11943__auto__ = null;
var cljs$core$async$transduce_$_state_machine__11943__auto____0 = (function (){
var statearr_20071 = [null,null,null,null,null,null,null];
(statearr_20071[(0)] = cljs$core$async$transduce_$_state_machine__11943__auto__);

(statearr_20071[(1)] = (1));

return statearr_20071;
});
var cljs$core$async$transduce_$_state_machine__11943__auto____1 = (function (state_20069){
while(true){
var ret_value__11944__auto__ = (function (){try{while(true){
var result__11945__auto__ = switch__11942__auto__(state_20069);
if(cljs.core.keyword_identical_QMARK_(result__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11945__auto__;
}
break;
}
}catch (e20073){var ex__11946__auto__ = e20073;
var statearr_20074_21927 = state_20069;
(statearr_20074_21927[(2)] = ex__11946__auto__);


if(cljs.core.seq((state_20069[(4)]))){
var statearr_20075_21928 = state_20069;
(statearr_20075_21928[(1)] = cljs.core.first((state_20069[(4)])));

} else {
throw ex__11946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21929 = state_20069;
state_20069 = G__21929;
continue;
} else {
return ret_value__11944__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__11943__auto__ = function(state_20069){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__11943__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__11943__auto____1.call(this,state_20069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__11943__auto____0;
cljs$core$async$transduce_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__11943__auto____1;
return cljs$core$async$transduce_$_state_machine__11943__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_20076 = f__12040__auto__();
(statearr_20076[(6)] = c__12039__auto__);

return statearr_20076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
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
var G__20079 = arguments.length;
switch (G__20079) {
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
var c__12039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__11942__auto__ = (function (state_20105){
var state_val_20106 = (state_20105[(1)]);
if((state_val_20106 === (7))){
var inst_20087 = (state_20105[(2)]);
var state_20105__$1 = state_20105;
var statearr_20107_21932 = state_20105__$1;
(statearr_20107_21932[(2)] = inst_20087);

(statearr_20107_21932[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20106 === (1))){
var inst_20080 = cljs.core.seq(coll);
var inst_20081 = inst_20080;
var state_20105__$1 = (function (){var statearr_20108 = state_20105;
(statearr_20108[(7)] = inst_20081);

return statearr_20108;
})();
var statearr_20110_21934 = state_20105__$1;
(statearr_20110_21934[(2)] = null);

(statearr_20110_21934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20106 === (4))){
var inst_20081 = (state_20105[(7)]);
var inst_20085 = cljs.core.first(inst_20081);
var state_20105__$1 = state_20105;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20105__$1,(7),ch,inst_20085);
} else {
if((state_val_20106 === (13))){
var inst_20099 = (state_20105[(2)]);
var state_20105__$1 = state_20105;
var statearr_20111_21935 = state_20105__$1;
(statearr_20111_21935[(2)] = inst_20099);

(statearr_20111_21935[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20106 === (6))){
var inst_20090 = (state_20105[(2)]);
var state_20105__$1 = state_20105;
if(cljs.core.truth_(inst_20090)){
var statearr_20112_21936 = state_20105__$1;
(statearr_20112_21936[(1)] = (8));

} else {
var statearr_20113_21937 = state_20105__$1;
(statearr_20113_21937[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20106 === (3))){
var inst_20103 = (state_20105[(2)]);
var state_20105__$1 = state_20105;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20105__$1,inst_20103);
} else {
if((state_val_20106 === (12))){
var state_20105__$1 = state_20105;
var statearr_20114_21938 = state_20105__$1;
(statearr_20114_21938[(2)] = null);

(statearr_20114_21938[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20106 === (2))){
var inst_20081 = (state_20105[(7)]);
var state_20105__$1 = state_20105;
if(cljs.core.truth_(inst_20081)){
var statearr_20116_21939 = state_20105__$1;
(statearr_20116_21939[(1)] = (4));

} else {
var statearr_20117_21940 = state_20105__$1;
(statearr_20117_21940[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20106 === (11))){
var inst_20096 = cljs.core.async.close_BANG_(ch);
var state_20105__$1 = state_20105;
var statearr_20118_21941 = state_20105__$1;
(statearr_20118_21941[(2)] = inst_20096);

(statearr_20118_21941[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20106 === (9))){
var state_20105__$1 = state_20105;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20119_21947 = state_20105__$1;
(statearr_20119_21947[(1)] = (11));

} else {
var statearr_20120_21948 = state_20105__$1;
(statearr_20120_21948[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20106 === (5))){
var inst_20081 = (state_20105[(7)]);
var state_20105__$1 = state_20105;
var statearr_20121_21949 = state_20105__$1;
(statearr_20121_21949[(2)] = inst_20081);

(statearr_20121_21949[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20106 === (10))){
var inst_20101 = (state_20105[(2)]);
var state_20105__$1 = state_20105;
var statearr_20122_21950 = state_20105__$1;
(statearr_20122_21950[(2)] = inst_20101);

(statearr_20122_21950[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20106 === (8))){
var inst_20081 = (state_20105[(7)]);
var inst_20092 = cljs.core.next(inst_20081);
var inst_20081__$1 = inst_20092;
var state_20105__$1 = (function (){var statearr_20123 = state_20105;
(statearr_20123[(7)] = inst_20081__$1);

return statearr_20123;
})();
var statearr_20124_21960 = state_20105__$1;
(statearr_20124_21960[(2)] = null);

(statearr_20124_21960[(1)] = (2));


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
var cljs$core$async$state_machine__11943__auto__ = null;
var cljs$core$async$state_machine__11943__auto____0 = (function (){
var statearr_20126 = [null,null,null,null,null,null,null,null];
(statearr_20126[(0)] = cljs$core$async$state_machine__11943__auto__);

(statearr_20126[(1)] = (1));

return statearr_20126;
});
var cljs$core$async$state_machine__11943__auto____1 = (function (state_20105){
while(true){
var ret_value__11944__auto__ = (function (){try{while(true){
var result__11945__auto__ = switch__11942__auto__(state_20105);
if(cljs.core.keyword_identical_QMARK_(result__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11945__auto__;
}
break;
}
}catch (e20127){var ex__11946__auto__ = e20127;
var statearr_20128_21961 = state_20105;
(statearr_20128_21961[(2)] = ex__11946__auto__);


if(cljs.core.seq((state_20105[(4)]))){
var statearr_20129_21962 = state_20105;
(statearr_20129_21962[(1)] = cljs.core.first((state_20105[(4)])));

} else {
throw ex__11946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21963 = state_20105;
state_20105 = G__21963;
continue;
} else {
return ret_value__11944__auto__;
}
break;
}
});
cljs$core$async$state_machine__11943__auto__ = function(state_20105){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11943__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11943__auto____1.call(this,state_20105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11943__auto____0;
cljs$core$async$state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11943__auto____1;
return cljs$core$async$state_machine__11943__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_20130 = f__12040__auto__();
(statearr_20130[(6)] = c__12039__auto__);

return statearr_20130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
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
var G__20133 = arguments.length;
switch (G__20133) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_21967 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_21967(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_21976 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_21976(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_21977 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_21977(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_21978 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_21978(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20138 = (function (ch,cs,meta20139){
this.ch = ch;
this.cs = cs;
this.meta20139 = meta20139;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20138.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20140,meta20139__$1){
var self__ = this;
var _20140__$1 = this;
return (new cljs.core.async.t_cljs$core$async20138(self__.ch,self__.cs,meta20139__$1));
}));

(cljs.core.async.t_cljs$core$async20138.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20140){
var self__ = this;
var _20140__$1 = this;
return self__.meta20139;
}));

(cljs.core.async.t_cljs$core$async20138.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20138.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async20138.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20138.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async20138.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async20138.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async20138.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta20139","meta20139",152084626,null)], null);
}));

(cljs.core.async.t_cljs$core$async20138.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20138.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20138");

(cljs.core.async.t_cljs$core$async20138.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async20138");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20138.
 */
cljs.core.async.__GT_t_cljs$core$async20138 = (function cljs$core$async$__GT_t_cljs$core$async20138(ch,cs,meta20139){
return (new cljs.core.async.t_cljs$core$async20138(ch,cs,meta20139));
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
var m = (new cljs.core.async.t_cljs$core$async20138(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__12039__auto___21979 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__11942__auto__ = (function (state_20279){
var state_val_20280 = (state_20279[(1)]);
if((state_val_20280 === (7))){
var inst_20275 = (state_20279[(2)]);
var state_20279__$1 = state_20279;
var statearr_20281_21984 = state_20279__$1;
(statearr_20281_21984[(2)] = inst_20275);

(statearr_20281_21984[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20280 === (20))){
var inst_20178 = (state_20279[(7)]);
var inst_20190 = cljs.core.first(inst_20178);
var inst_20191 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20190,(0),null);
var inst_20192 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20190,(1),null);
var state_20279__$1 = (function (){var statearr_20282 = state_20279;
(statearr_20282[(8)] = inst_20191);

return statearr_20282;
})();
if(cljs.core.truth_(inst_20192)){
var statearr_20283_21988 = state_20279__$1;
(statearr_20283_21988[(1)] = (22));

} else {
var statearr_20284_21989 = state_20279__$1;
(statearr_20284_21989[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20280 === (27))){
var inst_20220 = (state_20279[(9)]);
var inst_20222 = (state_20279[(10)]);
var inst_20227 = (state_20279[(11)]);
var inst_20145 = (state_20279[(12)]);
var inst_20227__$1 = cljs.core._nth(inst_20220,inst_20222);
var inst_20228 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_20227__$1,inst_20145,done);
var state_20279__$1 = (function (){var statearr_20286 = state_20279;
(statearr_20286[(11)] = inst_20227__$1);

return statearr_20286;
})();
if(cljs.core.truth_(inst_20228)){
var statearr_20288_21990 = state_20279__$1;
(statearr_20288_21990[(1)] = (30));

} else {
var statearr_20289_21991 = state_20279__$1;
(statearr_20289_21991[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20280 === (1))){
var state_20279__$1 = state_20279;
var statearr_20290_21992 = state_20279__$1;
(statearr_20290_21992[(2)] = null);

(statearr_20290_21992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20280 === (24))){
var inst_20178 = (state_20279[(7)]);
var inst_20197 = (state_20279[(2)]);
var inst_20198 = cljs.core.next(inst_20178);
var inst_20154 = inst_20198;
var inst_20155 = null;
var inst_20156 = (0);
var inst_20157 = (0);
var state_20279__$1 = (function (){var statearr_20291 = state_20279;
(statearr_20291[(13)] = inst_20156);

(statearr_20291[(14)] = inst_20157);

(statearr_20291[(15)] = inst_20155);

(statearr_20291[(16)] = inst_20154);

(statearr_20291[(17)] = inst_20197);

return statearr_20291;
})();
var statearr_20292_21993 = state_20279__$1;
(statearr_20292_21993[(2)] = null);

(statearr_20292_21993[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20280 === (39))){
var state_20279__$1 = state_20279;
var statearr_20296_21994 = state_20279__$1;
(statearr_20296_21994[(2)] = null);

(statearr_20296_21994[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20280 === (4))){
var inst_20145 = (state_20279[(12)]);
var inst_20145__$1 = (state_20279[(2)]);
var inst_20146 = (inst_20145__$1 == null);
var state_20279__$1 = (function (){var statearr_20297 = state_20279;
(statearr_20297[(12)] = inst_20145__$1);

return statearr_20297;
})();
if(cljs.core.truth_(inst_20146)){
var statearr_20298_22002 = state_20279__$1;
(statearr_20298_22002[(1)] = (5));

} else {
var statearr_20299_22003 = state_20279__$1;
(statearr_20299_22003[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20280 === (15))){
var inst_20156 = (state_20279[(13)]);
var inst_20157 = (state_20279[(14)]);
var inst_20155 = (state_20279[(15)]);
var inst_20154 = (state_20279[(16)]);
var inst_20174 = (state_20279[(2)]);
var inst_20175 = (inst_20157 + (1));
var tmp20293 = inst_20156;
var tmp20294 = inst_20155;
var tmp20295 = inst_20154;
var inst_20154__$1 = tmp20295;
var inst_20155__$1 = tmp20294;
var inst_20156__$1 = tmp20293;
var inst_20157__$1 = inst_20175;
var state_20279__$1 = (function (){var statearr_20300 = state_20279;
(statearr_20300[(13)] = inst_20156__$1);

(statearr_20300[(14)] = inst_20157__$1);

(statearr_20300[(15)] = inst_20155__$1);

(statearr_20300[(16)] = inst_20154__$1);

(statearr_20300[(18)] = inst_20174);

return statearr_20300;
})();
var statearr_20301_22010 = state_20279__$1;
(statearr_20301_22010[(2)] = null);

(statearr_20301_22010[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20280 === (21))){
var inst_20201 = (state_20279[(2)]);
var state_20279__$1 = state_20279;
var statearr_20305_22011 = state_20279__$1;
(statearr_20305_22011[(2)] = inst_20201);

(statearr_20305_22011[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20280 === (31))){
var inst_20227 = (state_20279[(11)]);
var inst_20231 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_20227);
var state_20279__$1 = state_20279;
var statearr_20308_22012 = state_20279__$1;
(statearr_20308_22012[(2)] = inst_20231);

(statearr_20308_22012[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20280 === (32))){
var inst_20221 = (state_20279[(19)]);
var inst_20220 = (state_20279[(9)]);
var inst_20222 = (state_20279[(10)]);
var inst_20219 = (state_20279[(20)]);
var inst_20233 = (state_20279[(2)]);
var inst_20234 = (inst_20222 + (1));
var tmp20302 = inst_20221;
var tmp20303 = inst_20220;
var tmp20304 = inst_20219;
var inst_20219__$1 = tmp20304;
var inst_20220__$1 = tmp20303;
var inst_20221__$1 = tmp20302;
var inst_20222__$1 = inst_20234;
var state_20279__$1 = (function (){var statearr_20310 = state_20279;
(statearr_20310[(19)] = inst_20221__$1);

(statearr_20310[(9)] = inst_20220__$1);

(statearr_20310[(10)] = inst_20222__$1);

(statearr_20310[(20)] = inst_20219__$1);

(statearr_20310[(21)] = inst_20233);

return statearr_20310;
})();
var statearr_20312_22013 = state_20279__$1;
(statearr_20312_22013[(2)] = null);

(statearr_20312_22013[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20280 === (40))){
var inst_20248 = (state_20279[(22)]);
var inst_20252 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_20248);
var state_20279__$1 = state_20279;
var statearr_20315_22014 = state_20279__$1;
(statearr_20315_22014[(2)] = inst_20252);

(statearr_20315_22014[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20280 === (33))){
var inst_20237 = (state_20279[(23)]);
var inst_20241 = cljs.core.chunked_seq_QMARK_(inst_20237);
var state_20279__$1 = state_20279;
if(inst_20241){
var statearr_20319_22015 = state_20279__$1;
(statearr_20319_22015[(1)] = (36));

} else {
var statearr_20320_22016 = state_20279__$1;
(statearr_20320_22016[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20280 === (13))){
var inst_20168 = (state_20279[(24)]);
var inst_20171 = cljs.core.async.close_BANG_(inst_20168);
var state_20279__$1 = state_20279;
var statearr_20322_22017 = state_20279__$1;
(statearr_20322_22017[(2)] = inst_20171);

(statearr_20322_22017[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20280 === (22))){
var inst_20191 = (state_20279[(8)]);
var inst_20194 = cljs.core.async.close_BANG_(inst_20191);
var state_20279__$1 = state_20279;
var statearr_20326_22018 = state_20279__$1;
(statearr_20326_22018[(2)] = inst_20194);

(statearr_20326_22018[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20280 === (36))){
var inst_20237 = (state_20279[(23)]);
var inst_20243 = cljs.core.chunk_first(inst_20237);
var inst_20244 = cljs.core.chunk_rest(inst_20237);
var inst_20245 = cljs.core.count(inst_20243);
var inst_20219 = inst_20244;
var inst_20220 = inst_20243;
var inst_20221 = inst_20245;
var inst_20222 = (0);
var state_20279__$1 = (function (){var statearr_20336 = state_20279;
(statearr_20336[(19)] = inst_20221);

(statearr_20336[(9)] = inst_20220);

(statearr_20336[(10)] = inst_20222);

(statearr_20336[(20)] = inst_20219);

return statearr_20336;
})();
var statearr_20340_22022 = state_20279__$1;
(statearr_20340_22022[(2)] = null);

(statearr_20340_22022[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20280 === (41))){
var inst_20237 = (state_20279[(23)]);
var inst_20254 = (state_20279[(2)]);
var inst_20255 = cljs.core.next(inst_20237);
var inst_20219 = inst_20255;
var inst_20220 = null;
var inst_20221 = (0);
var inst_20222 = (0);
var state_20279__$1 = (function (){var statearr_20343 = state_20279;
(statearr_20343[(19)] = inst_20221);

(statearr_20343[(9)] = inst_20220);

(statearr_20343[(25)] = inst_20254);

(statearr_20343[(10)] = inst_20222);

(statearr_20343[(20)] = inst_20219);

return statearr_20343;
})();
var statearr_20346_22023 = state_20279__$1;
(statearr_20346_22023[(2)] = null);

(statearr_20346_22023[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20280 === (43))){
var state_20279__$1 = state_20279;
var statearr_20348_22024 = state_20279__$1;
(statearr_20348_22024[(2)] = null);

(statearr_20348_22024[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20280 === (29))){
var inst_20263 = (state_20279[(2)]);
var state_20279__$1 = state_20279;
var statearr_20352_22025 = state_20279__$1;
(statearr_20352_22025[(2)] = inst_20263);

(statearr_20352_22025[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20280 === (44))){
var inst_20272 = (state_20279[(2)]);
var state_20279__$1 = (function (){var statearr_20354 = state_20279;
(statearr_20354[(26)] = inst_20272);

return statearr_20354;
})();
var statearr_20357_22026 = state_20279__$1;
(statearr_20357_22026[(2)] = null);

(statearr_20357_22026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20280 === (6))){
var inst_20211 = (state_20279[(27)]);
var inst_20210 = cljs.core.deref(cs);
var inst_20211__$1 = cljs.core.keys(inst_20210);
var inst_20212 = cljs.core.count(inst_20211__$1);
var inst_20213 = cljs.core.reset_BANG_(dctr,inst_20212);
var inst_20218 = cljs.core.seq(inst_20211__$1);
var inst_20219 = inst_20218;
var inst_20220 = null;
var inst_20221 = (0);
var inst_20222 = (0);
var state_20279__$1 = (function (){var statearr_20360 = state_20279;
(statearr_20360[(19)] = inst_20221);

(statearr_20360[(9)] = inst_20220);

(statearr_20360[(27)] = inst_20211__$1);

(statearr_20360[(28)] = inst_20213);

(statearr_20360[(10)] = inst_20222);

(statearr_20360[(20)] = inst_20219);

return statearr_20360;
})();
var statearr_20364_22027 = state_20279__$1;
(statearr_20364_22027[(2)] = null);

(statearr_20364_22027[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20280 === (28))){
var inst_20237 = (state_20279[(23)]);
var inst_20219 = (state_20279[(20)]);
var inst_20237__$1 = cljs.core.seq(inst_20219);
var state_20279__$1 = (function (){var statearr_20368 = state_20279;
(statearr_20368[(23)] = inst_20237__$1);

return statearr_20368;
})();
if(inst_20237__$1){
var statearr_20370_22028 = state_20279__$1;
(statearr_20370_22028[(1)] = (33));

} else {
var statearr_20371_22029 = state_20279__$1;
(statearr_20371_22029[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20280 === (25))){
var inst_20221 = (state_20279[(19)]);
var inst_20222 = (state_20279[(10)]);
var inst_20224 = (inst_20222 < inst_20221);
var inst_20225 = inst_20224;
var state_20279__$1 = state_20279;
if(cljs.core.truth_(inst_20225)){
var statearr_20373_22030 = state_20279__$1;
(statearr_20373_22030[(1)] = (27));

} else {
var statearr_20374_22031 = state_20279__$1;
(statearr_20374_22031[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20280 === (34))){
var state_20279__$1 = state_20279;
var statearr_20378_22034 = state_20279__$1;
(statearr_20378_22034[(2)] = null);

(statearr_20378_22034[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20280 === (17))){
var state_20279__$1 = state_20279;
var statearr_20379_22035 = state_20279__$1;
(statearr_20379_22035[(2)] = null);

(statearr_20379_22035[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20280 === (3))){
var inst_20277 = (state_20279[(2)]);
var state_20279__$1 = state_20279;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20279__$1,inst_20277);
} else {
if((state_val_20280 === (12))){
var inst_20206 = (state_20279[(2)]);
var state_20279__$1 = state_20279;
var statearr_20384_22036 = state_20279__$1;
(statearr_20384_22036[(2)] = inst_20206);

(statearr_20384_22036[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20280 === (2))){
var state_20279__$1 = state_20279;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20279__$1,(4),ch);
} else {
if((state_val_20280 === (23))){
var state_20279__$1 = state_20279;
var statearr_20386_22038 = state_20279__$1;
(statearr_20386_22038[(2)] = null);

(statearr_20386_22038[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20280 === (35))){
var inst_20261 = (state_20279[(2)]);
var state_20279__$1 = state_20279;
var statearr_20390_22040 = state_20279__$1;
(statearr_20390_22040[(2)] = inst_20261);

(statearr_20390_22040[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20280 === (19))){
var inst_20178 = (state_20279[(7)]);
var inst_20182 = cljs.core.chunk_first(inst_20178);
var inst_20183 = cljs.core.chunk_rest(inst_20178);
var inst_20184 = cljs.core.count(inst_20182);
var inst_20154 = inst_20183;
var inst_20155 = inst_20182;
var inst_20156 = inst_20184;
var inst_20157 = (0);
var state_20279__$1 = (function (){var statearr_20392 = state_20279;
(statearr_20392[(13)] = inst_20156);

(statearr_20392[(14)] = inst_20157);

(statearr_20392[(15)] = inst_20155);

(statearr_20392[(16)] = inst_20154);

return statearr_20392;
})();
var statearr_20396_22041 = state_20279__$1;
(statearr_20396_22041[(2)] = null);

(statearr_20396_22041[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20280 === (11))){
var inst_20178 = (state_20279[(7)]);
var inst_20154 = (state_20279[(16)]);
var inst_20178__$1 = cljs.core.seq(inst_20154);
var state_20279__$1 = (function (){var statearr_20398 = state_20279;
(statearr_20398[(7)] = inst_20178__$1);

return statearr_20398;
})();
if(inst_20178__$1){
var statearr_20399_22042 = state_20279__$1;
(statearr_20399_22042[(1)] = (16));

} else {
var statearr_20400_22043 = state_20279__$1;
(statearr_20400_22043[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20280 === (9))){
var inst_20208 = (state_20279[(2)]);
var state_20279__$1 = state_20279;
var statearr_20404_22044 = state_20279__$1;
(statearr_20404_22044[(2)] = inst_20208);

(statearr_20404_22044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20280 === (5))){
var inst_20152 = cljs.core.deref(cs);
var inst_20153 = cljs.core.seq(inst_20152);
var inst_20154 = inst_20153;
var inst_20155 = null;
var inst_20156 = (0);
var inst_20157 = (0);
var state_20279__$1 = (function (){var statearr_20406 = state_20279;
(statearr_20406[(13)] = inst_20156);

(statearr_20406[(14)] = inst_20157);

(statearr_20406[(15)] = inst_20155);

(statearr_20406[(16)] = inst_20154);

return statearr_20406;
})();
var statearr_20409_22045 = state_20279__$1;
(statearr_20409_22045[(2)] = null);

(statearr_20409_22045[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20280 === (14))){
var state_20279__$1 = state_20279;
var statearr_20411_22046 = state_20279__$1;
(statearr_20411_22046[(2)] = null);

(statearr_20411_22046[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20280 === (45))){
var inst_20269 = (state_20279[(2)]);
var state_20279__$1 = state_20279;
var statearr_20413_22047 = state_20279__$1;
(statearr_20413_22047[(2)] = inst_20269);

(statearr_20413_22047[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20280 === (26))){
var inst_20211 = (state_20279[(27)]);
var inst_20265 = (state_20279[(2)]);
var inst_20266 = cljs.core.seq(inst_20211);
var state_20279__$1 = (function (){var statearr_20417 = state_20279;
(statearr_20417[(29)] = inst_20265);

return statearr_20417;
})();
if(inst_20266){
var statearr_20418_22052 = state_20279__$1;
(statearr_20418_22052[(1)] = (42));

} else {
var statearr_20420_22053 = state_20279__$1;
(statearr_20420_22053[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20280 === (16))){
var inst_20178 = (state_20279[(7)]);
var inst_20180 = cljs.core.chunked_seq_QMARK_(inst_20178);
var state_20279__$1 = state_20279;
if(inst_20180){
var statearr_20422_22057 = state_20279__$1;
(statearr_20422_22057[(1)] = (19));

} else {
var statearr_20425_22058 = state_20279__$1;
(statearr_20425_22058[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20280 === (38))){
var inst_20258 = (state_20279[(2)]);
var state_20279__$1 = state_20279;
var statearr_20426_22059 = state_20279__$1;
(statearr_20426_22059[(2)] = inst_20258);

(statearr_20426_22059[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20280 === (30))){
var state_20279__$1 = state_20279;
var statearr_20428_22060 = state_20279__$1;
(statearr_20428_22060[(2)] = null);

(statearr_20428_22060[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20280 === (10))){
var inst_20157 = (state_20279[(14)]);
var inst_20155 = (state_20279[(15)]);
var inst_20167 = cljs.core._nth(inst_20155,inst_20157);
var inst_20168 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20167,(0),null);
var inst_20169 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20167,(1),null);
var state_20279__$1 = (function (){var statearr_20432 = state_20279;
(statearr_20432[(24)] = inst_20168);

return statearr_20432;
})();
if(cljs.core.truth_(inst_20169)){
var statearr_20436_22061 = state_20279__$1;
(statearr_20436_22061[(1)] = (13));

} else {
var statearr_20438_22062 = state_20279__$1;
(statearr_20438_22062[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20280 === (18))){
var inst_20204 = (state_20279[(2)]);
var state_20279__$1 = state_20279;
var statearr_20439_22063 = state_20279__$1;
(statearr_20439_22063[(2)] = inst_20204);

(statearr_20439_22063[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20280 === (42))){
var state_20279__$1 = state_20279;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20279__$1,(45),dchan);
} else {
if((state_val_20280 === (37))){
var inst_20248 = (state_20279[(22)]);
var inst_20237 = (state_20279[(23)]);
var inst_20145 = (state_20279[(12)]);
var inst_20248__$1 = cljs.core.first(inst_20237);
var inst_20249 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_20248__$1,inst_20145,done);
var state_20279__$1 = (function (){var statearr_20444 = state_20279;
(statearr_20444[(22)] = inst_20248__$1);

return statearr_20444;
})();
if(cljs.core.truth_(inst_20249)){
var statearr_20445_22064 = state_20279__$1;
(statearr_20445_22064[(1)] = (39));

} else {
var statearr_20446_22065 = state_20279__$1;
(statearr_20446_22065[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20280 === (8))){
var inst_20156 = (state_20279[(13)]);
var inst_20157 = (state_20279[(14)]);
var inst_20160 = (inst_20157 < inst_20156);
var inst_20161 = inst_20160;
var state_20279__$1 = state_20279;
if(cljs.core.truth_(inst_20161)){
var statearr_20448_22069 = state_20279__$1;
(statearr_20448_22069[(1)] = (10));

} else {
var statearr_20449_22070 = state_20279__$1;
(statearr_20449_22070[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__11943__auto__ = null;
var cljs$core$async$mult_$_state_machine__11943__auto____0 = (function (){
var statearr_20456 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20456[(0)] = cljs$core$async$mult_$_state_machine__11943__auto__);

(statearr_20456[(1)] = (1));

return statearr_20456;
});
var cljs$core$async$mult_$_state_machine__11943__auto____1 = (function (state_20279){
while(true){
var ret_value__11944__auto__ = (function (){try{while(true){
var result__11945__auto__ = switch__11942__auto__(state_20279);
if(cljs.core.keyword_identical_QMARK_(result__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11945__auto__;
}
break;
}
}catch (e20458){var ex__11946__auto__ = e20458;
var statearr_20460_22071 = state_20279;
(statearr_20460_22071[(2)] = ex__11946__auto__);


if(cljs.core.seq((state_20279[(4)]))){
var statearr_20461_22072 = state_20279;
(statearr_20461_22072[(1)] = cljs.core.first((state_20279[(4)])));

} else {
throw ex__11946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22073 = state_20279;
state_20279 = G__22073;
continue;
} else {
return ret_value__11944__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__11943__auto__ = function(state_20279){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__11943__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__11943__auto____1.call(this,state_20279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__11943__auto____0;
cljs$core$async$mult_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__11943__auto____1;
return cljs$core$async$mult_$_state_machine__11943__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_20466 = f__12040__auto__();
(statearr_20466[(6)] = c__12039__auto___21979);

return statearr_20466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
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
var G__20475 = arguments.length;
switch (G__20475) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_22079 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_22079(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_22080 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_22080(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_22081 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_22081(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_22085 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_22085(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_22089 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_22089(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___22090 = arguments.length;
var i__5727__auto___22091 = (0);
while(true){
if((i__5727__auto___22091 < len__5726__auto___22090)){
args__5732__auto__.push((arguments[i__5727__auto___22091]));

var G__22092 = (i__5727__auto___22091 + (1));
i__5727__auto___22091 = G__22092;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__20538){
var map__20539 = p__20538;
var map__20539__$1 = cljs.core.__destructure_map(map__20539);
var opts = map__20539__$1;
var statearr_20541_22093 = state;
(statearr_20541_22093[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_20543_22094 = state;
(statearr_20543_22094[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_20545_22095 = state;
(statearr_20545_22095[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq20529){
var G__20530 = cljs.core.first(seq20529);
var seq20529__$1 = cljs.core.next(seq20529);
var G__20531 = cljs.core.first(seq20529__$1);
var seq20529__$2 = cljs.core.next(seq20529__$1);
var G__20532 = cljs.core.first(seq20529__$2);
var seq20529__$3 = cljs.core.next(seq20529__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20530,G__20531,G__20532,seq20529__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20562 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta20563){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta20563 = meta20563;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20562.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20564,meta20563__$1){
var self__ = this;
var _20564__$1 = this;
return (new cljs.core.async.t_cljs$core$async20562(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta20563__$1));
}));

(cljs.core.async.t_cljs$core$async20562.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20564){
var self__ = this;
var _20564__$1 = this;
return self__.meta20563;
}));

(cljs.core.async.t_cljs$core$async20562.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20562.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async20562.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20562.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async20562.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async20562.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async20562.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async20562.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null, mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async20562.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta20563","meta20563",-1941310013,null)], null);
}));

(cljs.core.async.t_cljs$core$async20562.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20562.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20562");

(cljs.core.async.t_cljs$core$async20562.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async20562");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20562.
 */
cljs.core.async.__GT_t_cljs$core$async20562 = (function cljs$core$async$__GT_t_cljs$core$async20562(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta20563){
return (new cljs.core.async.t_cljs$core$async20562(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta20563));
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
var m = (new cljs.core.async.t_cljs$core$async20562(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__12039__auto___22103 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__11942__auto__ = (function (state_20633){
var state_val_20634 = (state_20633[(1)]);
if((state_val_20634 === (7))){
var inst_20593 = (state_20633[(2)]);
var state_20633__$1 = state_20633;
if(cljs.core.truth_(inst_20593)){
var statearr_20635_22104 = state_20633__$1;
(statearr_20635_22104[(1)] = (8));

} else {
var statearr_20636_22105 = state_20633__$1;
(statearr_20636_22105[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20634 === (20))){
var inst_20586 = (state_20633[(7)]);
var state_20633__$1 = state_20633;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20633__$1,(23),out,inst_20586);
} else {
if((state_val_20634 === (1))){
var inst_20569 = calc_state();
var inst_20570 = cljs.core.__destructure_map(inst_20569);
var inst_20571 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_20570,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_20572 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_20570,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20573 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_20570,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_20574 = inst_20569;
var state_20633__$1 = (function (){var statearr_20637 = state_20633;
(statearr_20637[(8)] = inst_20574);

(statearr_20637[(9)] = inst_20573);

(statearr_20637[(10)] = inst_20572);

(statearr_20637[(11)] = inst_20571);

return statearr_20637;
})();
var statearr_20640_22106 = state_20633__$1;
(statearr_20640_22106[(2)] = null);

(statearr_20640_22106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20634 === (24))){
var inst_20577 = (state_20633[(12)]);
var inst_20574 = inst_20577;
var state_20633__$1 = (function (){var statearr_20641 = state_20633;
(statearr_20641[(8)] = inst_20574);

return statearr_20641;
})();
var statearr_20642_22109 = state_20633__$1;
(statearr_20642_22109[(2)] = null);

(statearr_20642_22109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20634 === (4))){
var inst_20588 = (state_20633[(13)]);
var inst_20586 = (state_20633[(7)]);
var inst_20585 = (state_20633[(2)]);
var inst_20586__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20585,(0),null);
var inst_20587 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20585,(1),null);
var inst_20588__$1 = (inst_20586__$1 == null);
var state_20633__$1 = (function (){var statearr_20643 = state_20633;
(statearr_20643[(13)] = inst_20588__$1);

(statearr_20643[(14)] = inst_20587);

(statearr_20643[(7)] = inst_20586__$1);

return statearr_20643;
})();
if(cljs.core.truth_(inst_20588__$1)){
var statearr_20644_22111 = state_20633__$1;
(statearr_20644_22111[(1)] = (5));

} else {
var statearr_20649_22112 = state_20633__$1;
(statearr_20649_22112[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20634 === (15))){
var inst_20607 = (state_20633[(15)]);
var inst_20578 = (state_20633[(16)]);
var inst_20607__$1 = cljs.core.empty_QMARK_(inst_20578);
var state_20633__$1 = (function (){var statearr_20650 = state_20633;
(statearr_20650[(15)] = inst_20607__$1);

return statearr_20650;
})();
if(inst_20607__$1){
var statearr_20651_22113 = state_20633__$1;
(statearr_20651_22113[(1)] = (17));

} else {
var statearr_20652_22114 = state_20633__$1;
(statearr_20652_22114[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20634 === (21))){
var inst_20577 = (state_20633[(12)]);
var inst_20574 = inst_20577;
var state_20633__$1 = (function (){var statearr_20657 = state_20633;
(statearr_20657[(8)] = inst_20574);

return statearr_20657;
})();
var statearr_20658_22115 = state_20633__$1;
(statearr_20658_22115[(2)] = null);

(statearr_20658_22115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20634 === (13))){
var inst_20600 = (state_20633[(2)]);
var inst_20601 = calc_state();
var inst_20574 = inst_20601;
var state_20633__$1 = (function (){var statearr_20660 = state_20633;
(statearr_20660[(8)] = inst_20574);

(statearr_20660[(17)] = inst_20600);

return statearr_20660;
})();
var statearr_20661_22116 = state_20633__$1;
(statearr_20661_22116[(2)] = null);

(statearr_20661_22116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20634 === (22))){
var inst_20627 = (state_20633[(2)]);
var state_20633__$1 = state_20633;
var statearr_20662_22117 = state_20633__$1;
(statearr_20662_22117[(2)] = inst_20627);

(statearr_20662_22117[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20634 === (6))){
var inst_20587 = (state_20633[(14)]);
var inst_20591 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20587,change);
var state_20633__$1 = state_20633;
var statearr_20667_22119 = state_20633__$1;
(statearr_20667_22119[(2)] = inst_20591);

(statearr_20667_22119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20634 === (25))){
var state_20633__$1 = state_20633;
var statearr_20671_22120 = state_20633__$1;
(statearr_20671_22120[(2)] = null);

(statearr_20671_22120[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20634 === (17))){
var inst_20587 = (state_20633[(14)]);
var inst_20579 = (state_20633[(18)]);
var inst_20609 = (inst_20579.cljs$core$IFn$_invoke$arity$1 ? inst_20579.cljs$core$IFn$_invoke$arity$1(inst_20587) : inst_20579.call(null, inst_20587));
var inst_20610 = cljs.core.not(inst_20609);
var state_20633__$1 = state_20633;
var statearr_20673_22121 = state_20633__$1;
(statearr_20673_22121[(2)] = inst_20610);

(statearr_20673_22121[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20634 === (3))){
var inst_20631 = (state_20633[(2)]);
var state_20633__$1 = state_20633;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20633__$1,inst_20631);
} else {
if((state_val_20634 === (12))){
var state_20633__$1 = state_20633;
var statearr_20677_22122 = state_20633__$1;
(statearr_20677_22122[(2)] = null);

(statearr_20677_22122[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20634 === (2))){
var inst_20574 = (state_20633[(8)]);
var inst_20577 = (state_20633[(12)]);
var inst_20577__$1 = cljs.core.__destructure_map(inst_20574);
var inst_20578 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_20577__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_20579 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_20577__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20580 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_20577__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_20633__$1 = (function (){var statearr_20679 = state_20633;
(statearr_20679[(16)] = inst_20578);

(statearr_20679[(18)] = inst_20579);

(statearr_20679[(12)] = inst_20577__$1);

return statearr_20679;
})();
return cljs.core.async.ioc_alts_BANG_(state_20633__$1,(4),inst_20580);
} else {
if((state_val_20634 === (23))){
var inst_20618 = (state_20633[(2)]);
var state_20633__$1 = state_20633;
if(cljs.core.truth_(inst_20618)){
var statearr_20683_22127 = state_20633__$1;
(statearr_20683_22127[(1)] = (24));

} else {
var statearr_20684_22128 = state_20633__$1;
(statearr_20684_22128[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20634 === (19))){
var inst_20613 = (state_20633[(2)]);
var state_20633__$1 = state_20633;
var statearr_20686_22129 = state_20633__$1;
(statearr_20686_22129[(2)] = inst_20613);

(statearr_20686_22129[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20634 === (11))){
var inst_20587 = (state_20633[(14)]);
var inst_20597 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_20587);
var state_20633__$1 = state_20633;
var statearr_20687_22130 = state_20633__$1;
(statearr_20687_22130[(2)] = inst_20597);

(statearr_20687_22130[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20634 === (9))){
var inst_20578 = (state_20633[(16)]);
var inst_20587 = (state_20633[(14)]);
var inst_20604 = (state_20633[(19)]);
var inst_20604__$1 = (inst_20578.cljs$core$IFn$_invoke$arity$1 ? inst_20578.cljs$core$IFn$_invoke$arity$1(inst_20587) : inst_20578.call(null, inst_20587));
var state_20633__$1 = (function (){var statearr_20691 = state_20633;
(statearr_20691[(19)] = inst_20604__$1);

return statearr_20691;
})();
if(cljs.core.truth_(inst_20604__$1)){
var statearr_20693_22131 = state_20633__$1;
(statearr_20693_22131[(1)] = (14));

} else {
var statearr_20694_22133 = state_20633__$1;
(statearr_20694_22133[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20634 === (5))){
var inst_20588 = (state_20633[(13)]);
var state_20633__$1 = state_20633;
var statearr_20695_22137 = state_20633__$1;
(statearr_20695_22137[(2)] = inst_20588);

(statearr_20695_22137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20634 === (14))){
var inst_20604 = (state_20633[(19)]);
var state_20633__$1 = state_20633;
var statearr_20696_22138 = state_20633__$1;
(statearr_20696_22138[(2)] = inst_20604);

(statearr_20696_22138[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20634 === (26))){
var inst_20623 = (state_20633[(2)]);
var state_20633__$1 = state_20633;
var statearr_20698_22139 = state_20633__$1;
(statearr_20698_22139[(2)] = inst_20623);

(statearr_20698_22139[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20634 === (16))){
var inst_20615 = (state_20633[(2)]);
var state_20633__$1 = state_20633;
if(cljs.core.truth_(inst_20615)){
var statearr_20699_22140 = state_20633__$1;
(statearr_20699_22140[(1)] = (20));

} else {
var statearr_20700_22141 = state_20633__$1;
(statearr_20700_22141[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20634 === (10))){
var inst_20629 = (state_20633[(2)]);
var state_20633__$1 = state_20633;
var statearr_20701_22142 = state_20633__$1;
(statearr_20701_22142[(2)] = inst_20629);

(statearr_20701_22142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20634 === (18))){
var inst_20607 = (state_20633[(15)]);
var state_20633__$1 = state_20633;
var statearr_20702_22143 = state_20633__$1;
(statearr_20702_22143[(2)] = inst_20607);

(statearr_20702_22143[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20634 === (8))){
var inst_20586 = (state_20633[(7)]);
var inst_20595 = (inst_20586 == null);
var state_20633__$1 = state_20633;
if(cljs.core.truth_(inst_20595)){
var statearr_20707_22144 = state_20633__$1;
(statearr_20707_22144[(1)] = (11));

} else {
var statearr_20708_22145 = state_20633__$1;
(statearr_20708_22145[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__11943__auto__ = null;
var cljs$core$async$mix_$_state_machine__11943__auto____0 = (function (){
var statearr_20713 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20713[(0)] = cljs$core$async$mix_$_state_machine__11943__auto__);

(statearr_20713[(1)] = (1));

return statearr_20713;
});
var cljs$core$async$mix_$_state_machine__11943__auto____1 = (function (state_20633){
while(true){
var ret_value__11944__auto__ = (function (){try{while(true){
var result__11945__auto__ = switch__11942__auto__(state_20633);
if(cljs.core.keyword_identical_QMARK_(result__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11945__auto__;
}
break;
}
}catch (e20714){var ex__11946__auto__ = e20714;
var statearr_20715_22147 = state_20633;
(statearr_20715_22147[(2)] = ex__11946__auto__);


if(cljs.core.seq((state_20633[(4)]))){
var statearr_20719_22148 = state_20633;
(statearr_20719_22148[(1)] = cljs.core.first((state_20633[(4)])));

} else {
throw ex__11946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22150 = state_20633;
state_20633 = G__22150;
continue;
} else {
return ret_value__11944__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__11943__auto__ = function(state_20633){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__11943__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__11943__auto____1.call(this,state_20633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__11943__auto____0;
cljs$core$async$mix_$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__11943__auto____1;
return cljs$core$async$mix_$_state_machine__11943__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_20721 = f__12040__auto__();
(statearr_20721[(6)] = c__12039__auto___22103);

return statearr_20721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_22151 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_22151(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_22152 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_22152(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_22155 = (function() {
var G__22156 = null;
var G__22156__1 = (function (p){
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
var G__22156__2 = (function (p,v){
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
G__22156 = function(p,v){
switch(arguments.length){
case 1:
return G__22156__1.call(this,p);
case 2:
return G__22156__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__22156.cljs$core$IFn$_invoke$arity$1 = G__22156__1;
G__22156.cljs$core$IFn$_invoke$arity$2 = G__22156__2;
return G__22156;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__20760 = arguments.length;
switch (G__20760) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_22155(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_22155(p,v);
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
cljs.core.async.t_cljs$core$async20777 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta20778){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta20778 = meta20778;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20777.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20779,meta20778__$1){
var self__ = this;
var _20779__$1 = this;
return (new cljs.core.async.t_cljs$core$async20777(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta20778__$1));
}));

(cljs.core.async.t_cljs$core$async20777.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20779){
var self__ = this;
var _20779__$1 = this;
return self__.meta20778;
}));

(cljs.core.async.t_cljs$core$async20777.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20777.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async20777.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20777.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null, topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async20777.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async20777.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async20777.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async20777.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta20778","meta20778",-894584271,null)], null);
}));

(cljs.core.async.t_cljs$core$async20777.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20777.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20777");

(cljs.core.async.t_cljs$core$async20777.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async20777");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20777.
 */
cljs.core.async.__GT_t_cljs$core$async20777 = (function cljs$core$async$__GT_t_cljs$core$async20777(ch,topic_fn,buf_fn,mults,ensure_mult,meta20778){
return (new cljs.core.async.t_cljs$core$async20777(ch,topic_fn,buf_fn,mults,ensure_mult,meta20778));
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
var G__20775 = arguments.length;
switch (G__20775) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__20769_SHARP_){
if(cljs.core.truth_((p1__20769_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__20769_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__20769_SHARP_.call(null, topic)))){
return p1__20769_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__20769_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null, topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async20777(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__12039__auto___22165 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__11942__auto__ = (function (state_20858){
var state_val_20859 = (state_20858[(1)]);
if((state_val_20859 === (7))){
var inst_20854 = (state_20858[(2)]);
var state_20858__$1 = state_20858;
var statearr_20860_22166 = state_20858__$1;
(statearr_20860_22166[(2)] = inst_20854);

(statearr_20860_22166[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20859 === (20))){
var state_20858__$1 = state_20858;
var statearr_20861_22167 = state_20858__$1;
(statearr_20861_22167[(2)] = null);

(statearr_20861_22167[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20859 === (1))){
var state_20858__$1 = state_20858;
var statearr_20862_22168 = state_20858__$1;
(statearr_20862_22168[(2)] = null);

(statearr_20862_22168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20859 === (24))){
var inst_20837 = (state_20858[(7)]);
var inst_20846 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_20837);
var state_20858__$1 = state_20858;
var statearr_20863_22169 = state_20858__$1;
(statearr_20863_22169[(2)] = inst_20846);

(statearr_20863_22169[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20859 === (4))){
var inst_20789 = (state_20858[(8)]);
var inst_20789__$1 = (state_20858[(2)]);
var inst_20790 = (inst_20789__$1 == null);
var state_20858__$1 = (function (){var statearr_20864 = state_20858;
(statearr_20864[(8)] = inst_20789__$1);

return statearr_20864;
})();
if(cljs.core.truth_(inst_20790)){
var statearr_20865_22170 = state_20858__$1;
(statearr_20865_22170[(1)] = (5));

} else {
var statearr_20866_22171 = state_20858__$1;
(statearr_20866_22171[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20859 === (15))){
var inst_20831 = (state_20858[(2)]);
var state_20858__$1 = state_20858;
var statearr_20867_22172 = state_20858__$1;
(statearr_20867_22172[(2)] = inst_20831);

(statearr_20867_22172[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20859 === (21))){
var inst_20851 = (state_20858[(2)]);
var state_20858__$1 = (function (){var statearr_20868 = state_20858;
(statearr_20868[(9)] = inst_20851);

return statearr_20868;
})();
var statearr_20869_22174 = state_20858__$1;
(statearr_20869_22174[(2)] = null);

(statearr_20869_22174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20859 === (13))){
var inst_20813 = (state_20858[(10)]);
var inst_20815 = cljs.core.chunked_seq_QMARK_(inst_20813);
var state_20858__$1 = state_20858;
if(inst_20815){
var statearr_20870_22175 = state_20858__$1;
(statearr_20870_22175[(1)] = (16));

} else {
var statearr_20871_22176 = state_20858__$1;
(statearr_20871_22176[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20859 === (22))){
var inst_20843 = (state_20858[(2)]);
var state_20858__$1 = state_20858;
if(cljs.core.truth_(inst_20843)){
var statearr_20872_22177 = state_20858__$1;
(statearr_20872_22177[(1)] = (23));

} else {
var statearr_20873_22178 = state_20858__$1;
(statearr_20873_22178[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20859 === (6))){
var inst_20839 = (state_20858[(11)]);
var inst_20837 = (state_20858[(7)]);
var inst_20789 = (state_20858[(8)]);
var inst_20837__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_20789) : topic_fn.call(null, inst_20789));
var inst_20838 = cljs.core.deref(mults);
var inst_20839__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_20838,inst_20837__$1);
var state_20858__$1 = (function (){var statearr_20874 = state_20858;
(statearr_20874[(11)] = inst_20839__$1);

(statearr_20874[(7)] = inst_20837__$1);

return statearr_20874;
})();
if(cljs.core.truth_(inst_20839__$1)){
var statearr_20875_22179 = state_20858__$1;
(statearr_20875_22179[(1)] = (19));

} else {
var statearr_20876_22180 = state_20858__$1;
(statearr_20876_22180[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20859 === (25))){
var inst_20848 = (state_20858[(2)]);
var state_20858__$1 = state_20858;
var statearr_20877_22181 = state_20858__$1;
(statearr_20877_22181[(2)] = inst_20848);

(statearr_20877_22181[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20859 === (17))){
var inst_20813 = (state_20858[(10)]);
var inst_20822 = cljs.core.first(inst_20813);
var inst_20823 = cljs.core.async.muxch_STAR_(inst_20822);
var inst_20824 = cljs.core.async.close_BANG_(inst_20823);
var inst_20825 = cljs.core.next(inst_20813);
var inst_20799 = inst_20825;
var inst_20800 = null;
var inst_20801 = (0);
var inst_20802 = (0);
var state_20858__$1 = (function (){var statearr_20878 = state_20858;
(statearr_20878[(12)] = inst_20802);

(statearr_20878[(13)] = inst_20801);

(statearr_20878[(14)] = inst_20800);

(statearr_20878[(15)] = inst_20824);

(statearr_20878[(16)] = inst_20799);

return statearr_20878;
})();
var statearr_20879_22186 = state_20858__$1;
(statearr_20879_22186[(2)] = null);

(statearr_20879_22186[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20859 === (3))){
var inst_20856 = (state_20858[(2)]);
var state_20858__$1 = state_20858;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20858__$1,inst_20856);
} else {
if((state_val_20859 === (12))){
var inst_20833 = (state_20858[(2)]);
var state_20858__$1 = state_20858;
var statearr_20880_22187 = state_20858__$1;
(statearr_20880_22187[(2)] = inst_20833);

(statearr_20880_22187[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20859 === (2))){
var state_20858__$1 = state_20858;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20858__$1,(4),ch);
} else {
if((state_val_20859 === (23))){
var state_20858__$1 = state_20858;
var statearr_20881_22188 = state_20858__$1;
(statearr_20881_22188[(2)] = null);

(statearr_20881_22188[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20859 === (19))){
var inst_20839 = (state_20858[(11)]);
var inst_20789 = (state_20858[(8)]);
var inst_20841 = cljs.core.async.muxch_STAR_(inst_20839);
var state_20858__$1 = state_20858;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20858__$1,(22),inst_20841,inst_20789);
} else {
if((state_val_20859 === (11))){
var inst_20813 = (state_20858[(10)]);
var inst_20799 = (state_20858[(16)]);
var inst_20813__$1 = cljs.core.seq(inst_20799);
var state_20858__$1 = (function (){var statearr_20884 = state_20858;
(statearr_20884[(10)] = inst_20813__$1);

return statearr_20884;
})();
if(inst_20813__$1){
var statearr_20885_22189 = state_20858__$1;
(statearr_20885_22189[(1)] = (13));

} else {
var statearr_20886_22190 = state_20858__$1;
(statearr_20886_22190[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20859 === (9))){
var inst_20835 = (state_20858[(2)]);
var state_20858__$1 = state_20858;
var statearr_20887_22191 = state_20858__$1;
(statearr_20887_22191[(2)] = inst_20835);

(statearr_20887_22191[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20859 === (5))){
var inst_20796 = cljs.core.deref(mults);
var inst_20797 = cljs.core.vals(inst_20796);
var inst_20798 = cljs.core.seq(inst_20797);
var inst_20799 = inst_20798;
var inst_20800 = null;
var inst_20801 = (0);
var inst_20802 = (0);
var state_20858__$1 = (function (){var statearr_20888 = state_20858;
(statearr_20888[(12)] = inst_20802);

(statearr_20888[(13)] = inst_20801);

(statearr_20888[(14)] = inst_20800);

(statearr_20888[(16)] = inst_20799);

return statearr_20888;
})();
var statearr_20889_22192 = state_20858__$1;
(statearr_20889_22192[(2)] = null);

(statearr_20889_22192[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20859 === (14))){
var state_20858__$1 = state_20858;
var statearr_20893_22193 = state_20858__$1;
(statearr_20893_22193[(2)] = null);

(statearr_20893_22193[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20859 === (16))){
var inst_20813 = (state_20858[(10)]);
var inst_20817 = cljs.core.chunk_first(inst_20813);
var inst_20818 = cljs.core.chunk_rest(inst_20813);
var inst_20819 = cljs.core.count(inst_20817);
var inst_20799 = inst_20818;
var inst_20800 = inst_20817;
var inst_20801 = inst_20819;
var inst_20802 = (0);
var state_20858__$1 = (function (){var statearr_20895 = state_20858;
(statearr_20895[(12)] = inst_20802);

(statearr_20895[(13)] = inst_20801);

(statearr_20895[(14)] = inst_20800);

(statearr_20895[(16)] = inst_20799);

return statearr_20895;
})();
var statearr_20896_22194 = state_20858__$1;
(statearr_20896_22194[(2)] = null);

(statearr_20896_22194[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20859 === (10))){
var inst_20802 = (state_20858[(12)]);
var inst_20801 = (state_20858[(13)]);
var inst_20800 = (state_20858[(14)]);
var inst_20799 = (state_20858[(16)]);
var inst_20807 = cljs.core._nth(inst_20800,inst_20802);
var inst_20808 = cljs.core.async.muxch_STAR_(inst_20807);
var inst_20809 = cljs.core.async.close_BANG_(inst_20808);
var inst_20810 = (inst_20802 + (1));
var tmp20890 = inst_20801;
var tmp20891 = inst_20800;
var tmp20892 = inst_20799;
var inst_20799__$1 = tmp20892;
var inst_20800__$1 = tmp20891;
var inst_20801__$1 = tmp20890;
var inst_20802__$1 = inst_20810;
var state_20858__$1 = (function (){var statearr_20898 = state_20858;
(statearr_20898[(12)] = inst_20802__$1);

(statearr_20898[(13)] = inst_20801__$1);

(statearr_20898[(14)] = inst_20800__$1);

(statearr_20898[(16)] = inst_20799__$1);

(statearr_20898[(17)] = inst_20809);

return statearr_20898;
})();
var statearr_20899_22195 = state_20858__$1;
(statearr_20899_22195[(2)] = null);

(statearr_20899_22195[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20859 === (18))){
var inst_20828 = (state_20858[(2)]);
var state_20858__$1 = state_20858;
var statearr_20900_22196 = state_20858__$1;
(statearr_20900_22196[(2)] = inst_20828);

(statearr_20900_22196[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20859 === (8))){
var inst_20802 = (state_20858[(12)]);
var inst_20801 = (state_20858[(13)]);
var inst_20804 = (inst_20802 < inst_20801);
var inst_20805 = inst_20804;
var state_20858__$1 = state_20858;
if(cljs.core.truth_(inst_20805)){
var statearr_20901_22197 = state_20858__$1;
(statearr_20901_22197[(1)] = (10));

} else {
var statearr_20902_22198 = state_20858__$1;
(statearr_20902_22198[(1)] = (11));

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
var cljs$core$async$state_machine__11943__auto__ = null;
var cljs$core$async$state_machine__11943__auto____0 = (function (){
var statearr_20904 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20904[(0)] = cljs$core$async$state_machine__11943__auto__);

(statearr_20904[(1)] = (1));

return statearr_20904;
});
var cljs$core$async$state_machine__11943__auto____1 = (function (state_20858){
while(true){
var ret_value__11944__auto__ = (function (){try{while(true){
var result__11945__auto__ = switch__11942__auto__(state_20858);
if(cljs.core.keyword_identical_QMARK_(result__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11945__auto__;
}
break;
}
}catch (e20906){var ex__11946__auto__ = e20906;
var statearr_20907_22199 = state_20858;
(statearr_20907_22199[(2)] = ex__11946__auto__);


if(cljs.core.seq((state_20858[(4)]))){
var statearr_20908_22200 = state_20858;
(statearr_20908_22200[(1)] = cljs.core.first((state_20858[(4)])));

} else {
throw ex__11946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22201 = state_20858;
state_20858 = G__22201;
continue;
} else {
return ret_value__11944__auto__;
}
break;
}
});
cljs$core$async$state_machine__11943__auto__ = function(state_20858){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11943__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11943__auto____1.call(this,state_20858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11943__auto____0;
cljs$core$async$state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11943__auto____1;
return cljs$core$async$state_machine__11943__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_20909 = f__12040__auto__();
(statearr_20909[(6)] = c__12039__auto___22165);

return statearr_20909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
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
var G__20911 = arguments.length;
switch (G__20911) {
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
var G__20913 = arguments.length;
switch (G__20913) {
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
var G__20921 = arguments.length;
switch (G__20921) {
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
var c__12039__auto___22212 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__11942__auto__ = (function (state_20972){
var state_val_20973 = (state_20972[(1)]);
if((state_val_20973 === (7))){
var state_20972__$1 = state_20972;
var statearr_20987_22213 = state_20972__$1;
(statearr_20987_22213[(2)] = null);

(statearr_20987_22213[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20973 === (1))){
var state_20972__$1 = state_20972;
var statearr_20994_22214 = state_20972__$1;
(statearr_20994_22214[(2)] = null);

(statearr_20994_22214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20973 === (4))){
var inst_20930 = (state_20972[(7)]);
var inst_20929 = (state_20972[(8)]);
var inst_20932 = (inst_20930 < inst_20929);
var state_20972__$1 = state_20972;
if(cljs.core.truth_(inst_20932)){
var statearr_20995_22215 = state_20972__$1;
(statearr_20995_22215[(1)] = (6));

} else {
var statearr_20996_22216 = state_20972__$1;
(statearr_20996_22216[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20973 === (15))){
var inst_20958 = (state_20972[(9)]);
var inst_20963 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_20958);
var state_20972__$1 = state_20972;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20972__$1,(17),out,inst_20963);
} else {
if((state_val_20973 === (13))){
var inst_20958 = (state_20972[(9)]);
var inst_20958__$1 = (state_20972[(2)]);
var inst_20959 = cljs.core.some(cljs.core.nil_QMARK_,inst_20958__$1);
var state_20972__$1 = (function (){var statearr_20997 = state_20972;
(statearr_20997[(9)] = inst_20958__$1);

return statearr_20997;
})();
if(cljs.core.truth_(inst_20959)){
var statearr_20998_22217 = state_20972__$1;
(statearr_20998_22217[(1)] = (14));

} else {
var statearr_21002_22218 = state_20972__$1;
(statearr_21002_22218[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20973 === (6))){
var state_20972__$1 = state_20972;
var statearr_21007_22219 = state_20972__$1;
(statearr_21007_22219[(2)] = null);

(statearr_21007_22219[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20973 === (17))){
var inst_20965 = (state_20972[(2)]);
var state_20972__$1 = (function (){var statearr_21015 = state_20972;
(statearr_21015[(10)] = inst_20965);

return statearr_21015;
})();
var statearr_21016_22220 = state_20972__$1;
(statearr_21016_22220[(2)] = null);

(statearr_21016_22220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20973 === (3))){
var inst_20970 = (state_20972[(2)]);
var state_20972__$1 = state_20972;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20972__$1,inst_20970);
} else {
if((state_val_20973 === (12))){
var _ = (function (){var statearr_21017 = state_20972;
(statearr_21017[(4)] = cljs.core.rest((state_20972[(4)])));

return statearr_21017;
})();
var state_20972__$1 = state_20972;
var ex21011 = (state_20972__$1[(2)]);
var statearr_21018_22222 = state_20972__$1;
(statearr_21018_22222[(5)] = ex21011);


if((ex21011 instanceof Object)){
var statearr_21019_22223 = state_20972__$1;
(statearr_21019_22223[(1)] = (11));

(statearr_21019_22223[(5)] = null);

} else {
throw ex21011;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20973 === (2))){
var inst_20928 = cljs.core.reset_BANG_(dctr,cnt);
var inst_20929 = cnt;
var inst_20930 = (0);
var state_20972__$1 = (function (){var statearr_21024 = state_20972;
(statearr_21024[(7)] = inst_20930);

(statearr_21024[(8)] = inst_20929);

(statearr_21024[(11)] = inst_20928);

return statearr_21024;
})();
var statearr_21025_22224 = state_20972__$1;
(statearr_21025_22224[(2)] = null);

(statearr_21025_22224[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20973 === (11))){
var inst_20937 = (state_20972[(2)]);
var inst_20938 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_20972__$1 = (function (){var statearr_21026 = state_20972;
(statearr_21026[(12)] = inst_20937);

return statearr_21026;
})();
var statearr_21027_22228 = state_20972__$1;
(statearr_21027_22228[(2)] = inst_20938);

(statearr_21027_22228[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20973 === (9))){
var inst_20930 = (state_20972[(7)]);
var _ = (function (){var statearr_21028 = state_20972;
(statearr_21028[(4)] = cljs.core.cons((12),(state_20972[(4)])));

return statearr_21028;
})();
var inst_20944 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_20930) : chs__$1.call(null, inst_20930));
var inst_20945 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_20930) : done.call(null, inst_20930));
var inst_20946 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_20944,inst_20945);
var ___$1 = (function (){var statearr_21029 = state_20972;
(statearr_21029[(4)] = cljs.core.rest((state_20972[(4)])));

return statearr_21029;
})();
var state_20972__$1 = state_20972;
var statearr_21030_22229 = state_20972__$1;
(statearr_21030_22229[(2)] = inst_20946);

(statearr_21030_22229[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20973 === (5))){
var inst_20956 = (state_20972[(2)]);
var state_20972__$1 = (function (){var statearr_21031 = state_20972;
(statearr_21031[(13)] = inst_20956);

return statearr_21031;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20972__$1,(13),dchan);
} else {
if((state_val_20973 === (14))){
var inst_20961 = cljs.core.async.close_BANG_(out);
var state_20972__$1 = state_20972;
var statearr_21032_22231 = state_20972__$1;
(statearr_21032_22231[(2)] = inst_20961);

(statearr_21032_22231[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20973 === (16))){
var inst_20968 = (state_20972[(2)]);
var state_20972__$1 = state_20972;
var statearr_21034_22232 = state_20972__$1;
(statearr_21034_22232[(2)] = inst_20968);

(statearr_21034_22232[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20973 === (10))){
var inst_20930 = (state_20972[(7)]);
var inst_20949 = (state_20972[(2)]);
var inst_20950 = (inst_20930 + (1));
var inst_20930__$1 = inst_20950;
var state_20972__$1 = (function (){var statearr_21038 = state_20972;
(statearr_21038[(7)] = inst_20930__$1);

(statearr_21038[(14)] = inst_20949);

return statearr_21038;
})();
var statearr_21039_22233 = state_20972__$1;
(statearr_21039_22233[(2)] = null);

(statearr_21039_22233[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20973 === (8))){
var inst_20954 = (state_20972[(2)]);
var state_20972__$1 = state_20972;
var statearr_21040_22234 = state_20972__$1;
(statearr_21040_22234[(2)] = inst_20954);

(statearr_21040_22234[(1)] = (5));


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
var cljs$core$async$state_machine__11943__auto__ = null;
var cljs$core$async$state_machine__11943__auto____0 = (function (){
var statearr_21043 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21043[(0)] = cljs$core$async$state_machine__11943__auto__);

(statearr_21043[(1)] = (1));

return statearr_21043;
});
var cljs$core$async$state_machine__11943__auto____1 = (function (state_20972){
while(true){
var ret_value__11944__auto__ = (function (){try{while(true){
var result__11945__auto__ = switch__11942__auto__(state_20972);
if(cljs.core.keyword_identical_QMARK_(result__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11945__auto__;
}
break;
}
}catch (e21044){var ex__11946__auto__ = e21044;
var statearr_21045_22235 = state_20972;
(statearr_21045_22235[(2)] = ex__11946__auto__);


if(cljs.core.seq((state_20972[(4)]))){
var statearr_21046_22236 = state_20972;
(statearr_21046_22236[(1)] = cljs.core.first((state_20972[(4)])));

} else {
throw ex__11946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22237 = state_20972;
state_20972 = G__22237;
continue;
} else {
return ret_value__11944__auto__;
}
break;
}
});
cljs$core$async$state_machine__11943__auto__ = function(state_20972){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11943__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11943__auto____1.call(this,state_20972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11943__auto____0;
cljs$core$async$state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11943__auto____1;
return cljs$core$async$state_machine__11943__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_21048 = f__12040__auto__();
(statearr_21048[(6)] = c__12039__auto___22212);

return statearr_21048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
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
var G__21052 = arguments.length;
switch (G__21052) {
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
var c__12039__auto___22239 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__11942__auto__ = (function (state_21087){
var state_val_21088 = (state_21087[(1)]);
if((state_val_21088 === (7))){
var inst_21064 = (state_21087[(7)]);
var inst_21063 = (state_21087[(8)]);
var inst_21063__$1 = (state_21087[(2)]);
var inst_21064__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21063__$1,(0),null);
var inst_21065 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21063__$1,(1),null);
var inst_21066 = (inst_21064__$1 == null);
var state_21087__$1 = (function (){var statearr_21093 = state_21087;
(statearr_21093[(7)] = inst_21064__$1);

(statearr_21093[(8)] = inst_21063__$1);

(statearr_21093[(9)] = inst_21065);

return statearr_21093;
})();
if(cljs.core.truth_(inst_21066)){
var statearr_21094_22240 = state_21087__$1;
(statearr_21094_22240[(1)] = (8));

} else {
var statearr_21095_22241 = state_21087__$1;
(statearr_21095_22241[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21088 === (1))){
var inst_21053 = cljs.core.vec(chs);
var inst_21054 = inst_21053;
var state_21087__$1 = (function (){var statearr_21096 = state_21087;
(statearr_21096[(10)] = inst_21054);

return statearr_21096;
})();
var statearr_21097_22242 = state_21087__$1;
(statearr_21097_22242[(2)] = null);

(statearr_21097_22242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21088 === (4))){
var inst_21054 = (state_21087[(10)]);
var state_21087__$1 = state_21087;
return cljs.core.async.ioc_alts_BANG_(state_21087__$1,(7),inst_21054);
} else {
if((state_val_21088 === (6))){
var inst_21082 = (state_21087[(2)]);
var state_21087__$1 = state_21087;
var statearr_21098_22243 = state_21087__$1;
(statearr_21098_22243[(2)] = inst_21082);

(statearr_21098_22243[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21088 === (3))){
var inst_21084 = (state_21087[(2)]);
var state_21087__$1 = state_21087;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21087__$1,inst_21084);
} else {
if((state_val_21088 === (2))){
var inst_21054 = (state_21087[(10)]);
var inst_21056 = cljs.core.count(inst_21054);
var inst_21057 = (inst_21056 > (0));
var state_21087__$1 = state_21087;
if(cljs.core.truth_(inst_21057)){
var statearr_21100_22248 = state_21087__$1;
(statearr_21100_22248[(1)] = (4));

} else {
var statearr_21101_22249 = state_21087__$1;
(statearr_21101_22249[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21088 === (11))){
var inst_21054 = (state_21087[(10)]);
var inst_21075 = (state_21087[(2)]);
var tmp21099 = inst_21054;
var inst_21054__$1 = tmp21099;
var state_21087__$1 = (function (){var statearr_21102 = state_21087;
(statearr_21102[(10)] = inst_21054__$1);

(statearr_21102[(11)] = inst_21075);

return statearr_21102;
})();
var statearr_21103_22250 = state_21087__$1;
(statearr_21103_22250[(2)] = null);

(statearr_21103_22250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21088 === (9))){
var inst_21064 = (state_21087[(7)]);
var state_21087__$1 = state_21087;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21087__$1,(11),out,inst_21064);
} else {
if((state_val_21088 === (5))){
var inst_21080 = cljs.core.async.close_BANG_(out);
var state_21087__$1 = state_21087;
var statearr_21104_22251 = state_21087__$1;
(statearr_21104_22251[(2)] = inst_21080);

(statearr_21104_22251[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21088 === (10))){
var inst_21078 = (state_21087[(2)]);
var state_21087__$1 = state_21087;
var statearr_21105_22252 = state_21087__$1;
(statearr_21105_22252[(2)] = inst_21078);

(statearr_21105_22252[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21088 === (8))){
var inst_21064 = (state_21087[(7)]);
var inst_21054 = (state_21087[(10)]);
var inst_21063 = (state_21087[(8)]);
var inst_21065 = (state_21087[(9)]);
var inst_21070 = (function (){var cs = inst_21054;
var vec__21059 = inst_21063;
var v = inst_21064;
var c = inst_21065;
return (function (p1__21050_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__21050_SHARP_);
});
})();
var inst_21071 = cljs.core.filterv(inst_21070,inst_21054);
var inst_21054__$1 = inst_21071;
var state_21087__$1 = (function (){var statearr_21106 = state_21087;
(statearr_21106[(10)] = inst_21054__$1);

return statearr_21106;
})();
var statearr_21111_22253 = state_21087__$1;
(statearr_21111_22253[(2)] = null);

(statearr_21111_22253[(1)] = (2));


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
var cljs$core$async$state_machine__11943__auto__ = null;
var cljs$core$async$state_machine__11943__auto____0 = (function (){
var statearr_21113 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21113[(0)] = cljs$core$async$state_machine__11943__auto__);

(statearr_21113[(1)] = (1));

return statearr_21113;
});
var cljs$core$async$state_machine__11943__auto____1 = (function (state_21087){
while(true){
var ret_value__11944__auto__ = (function (){try{while(true){
var result__11945__auto__ = switch__11942__auto__(state_21087);
if(cljs.core.keyword_identical_QMARK_(result__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11945__auto__;
}
break;
}
}catch (e21115){var ex__11946__auto__ = e21115;
var statearr_21117_22255 = state_21087;
(statearr_21117_22255[(2)] = ex__11946__auto__);


if(cljs.core.seq((state_21087[(4)]))){
var statearr_21118_22256 = state_21087;
(statearr_21118_22256[(1)] = cljs.core.first((state_21087[(4)])));

} else {
throw ex__11946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22257 = state_21087;
state_21087 = G__22257;
continue;
} else {
return ret_value__11944__auto__;
}
break;
}
});
cljs$core$async$state_machine__11943__auto__ = function(state_21087){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11943__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11943__auto____1.call(this,state_21087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11943__auto____0;
cljs$core$async$state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11943__auto____1;
return cljs$core$async$state_machine__11943__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_21119 = f__12040__auto__();
(statearr_21119[(6)] = c__12039__auto___22239);

return statearr_21119;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
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
var G__21126 = arguments.length;
switch (G__21126) {
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
var c__12039__auto___22259 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__11942__auto__ = (function (state_21150){
var state_val_21151 = (state_21150[(1)]);
if((state_val_21151 === (7))){
var inst_21132 = (state_21150[(7)]);
var inst_21132__$1 = (state_21150[(2)]);
var inst_21133 = (inst_21132__$1 == null);
var inst_21134 = cljs.core.not(inst_21133);
var state_21150__$1 = (function (){var statearr_21152 = state_21150;
(statearr_21152[(7)] = inst_21132__$1);

return statearr_21152;
})();
if(inst_21134){
var statearr_21153_22260 = state_21150__$1;
(statearr_21153_22260[(1)] = (8));

} else {
var statearr_21154_22261 = state_21150__$1;
(statearr_21154_22261[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21151 === (1))){
var inst_21127 = (0);
var state_21150__$1 = (function (){var statearr_21159 = state_21150;
(statearr_21159[(8)] = inst_21127);

return statearr_21159;
})();
var statearr_21160_22262 = state_21150__$1;
(statearr_21160_22262[(2)] = null);

(statearr_21160_22262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21151 === (4))){
var state_21150__$1 = state_21150;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21150__$1,(7),ch);
} else {
if((state_val_21151 === (6))){
var inst_21145 = (state_21150[(2)]);
var state_21150__$1 = state_21150;
var statearr_21161_22263 = state_21150__$1;
(statearr_21161_22263[(2)] = inst_21145);

(statearr_21161_22263[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21151 === (3))){
var inst_21147 = (state_21150[(2)]);
var inst_21148 = cljs.core.async.close_BANG_(out);
var state_21150__$1 = (function (){var statearr_21162 = state_21150;
(statearr_21162[(9)] = inst_21147);

return statearr_21162;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_21150__$1,inst_21148);
} else {
if((state_val_21151 === (2))){
var inst_21127 = (state_21150[(8)]);
var inst_21129 = (inst_21127 < n);
var state_21150__$1 = state_21150;
if(cljs.core.truth_(inst_21129)){
var statearr_21167_22264 = state_21150__$1;
(statearr_21167_22264[(1)] = (4));

} else {
var statearr_21168_22265 = state_21150__$1;
(statearr_21168_22265[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21151 === (11))){
var inst_21127 = (state_21150[(8)]);
var inst_21137 = (state_21150[(2)]);
var inst_21138 = (inst_21127 + (1));
var inst_21127__$1 = inst_21138;
var state_21150__$1 = (function (){var statearr_21169 = state_21150;
(statearr_21169[(8)] = inst_21127__$1);

(statearr_21169[(10)] = inst_21137);

return statearr_21169;
})();
var statearr_21170_22266 = state_21150__$1;
(statearr_21170_22266[(2)] = null);

(statearr_21170_22266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21151 === (9))){
var state_21150__$1 = state_21150;
var statearr_21171_22267 = state_21150__$1;
(statearr_21171_22267[(2)] = null);

(statearr_21171_22267[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21151 === (5))){
var state_21150__$1 = state_21150;
var statearr_21172_22268 = state_21150__$1;
(statearr_21172_22268[(2)] = null);

(statearr_21172_22268[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21151 === (10))){
var inst_21142 = (state_21150[(2)]);
var state_21150__$1 = state_21150;
var statearr_21173_22269 = state_21150__$1;
(statearr_21173_22269[(2)] = inst_21142);

(statearr_21173_22269[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21151 === (8))){
var inst_21132 = (state_21150[(7)]);
var state_21150__$1 = state_21150;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21150__$1,(11),out,inst_21132);
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
var cljs$core$async$state_machine__11943__auto__ = null;
var cljs$core$async$state_machine__11943__auto____0 = (function (){
var statearr_21174 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21174[(0)] = cljs$core$async$state_machine__11943__auto__);

(statearr_21174[(1)] = (1));

return statearr_21174;
});
var cljs$core$async$state_machine__11943__auto____1 = (function (state_21150){
while(true){
var ret_value__11944__auto__ = (function (){try{while(true){
var result__11945__auto__ = switch__11942__auto__(state_21150);
if(cljs.core.keyword_identical_QMARK_(result__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11945__auto__;
}
break;
}
}catch (e21175){var ex__11946__auto__ = e21175;
var statearr_21176_22270 = state_21150;
(statearr_21176_22270[(2)] = ex__11946__auto__);


if(cljs.core.seq((state_21150[(4)]))){
var statearr_21177_22271 = state_21150;
(statearr_21177_22271[(1)] = cljs.core.first((state_21150[(4)])));

} else {
throw ex__11946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22272 = state_21150;
state_21150 = G__22272;
continue;
} else {
return ret_value__11944__auto__;
}
break;
}
});
cljs$core$async$state_machine__11943__auto__ = function(state_21150){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11943__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11943__auto____1.call(this,state_21150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11943__auto____0;
cljs$core$async$state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11943__auto____1;
return cljs$core$async$state_machine__11943__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_21178 = f__12040__auto__();
(statearr_21178[(6)] = c__12039__auto___22259);

return statearr_21178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
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
cljs.core.async.t_cljs$core$async21188 = (function (f,ch,meta21182,_,fn1,meta21189){
this.f = f;
this.ch = ch;
this.meta21182 = meta21182;
this._ = _;
this.fn1 = fn1;
this.meta21189 = meta21189;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async21188.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21190,meta21189__$1){
var self__ = this;
var _21190__$1 = this;
return (new cljs.core.async.t_cljs$core$async21188(self__.f,self__.ch,self__.meta21182,self__._,self__.fn1,meta21189__$1));
}));

(cljs.core.async.t_cljs$core$async21188.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21190){
var self__ = this;
var _21190__$1 = this;
return self__.meta21189;
}));

(cljs.core.async.t_cljs$core$async21188.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21188.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async21188.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async21188.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__21179_SHARP_){
var G__21191 = (((p1__21179_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__21179_SHARP_) : self__.f.call(null, p1__21179_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__21191) : f1.call(null, G__21191));
});
}));

(cljs.core.async.t_cljs$core$async21188.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21182","meta21182",-743733179,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async21181","cljs.core.async/t_cljs$core$async21181",1617549651,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta21189","meta21189",-2044618485,null)], null);
}));

(cljs.core.async.t_cljs$core$async21188.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async21188.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21188");

(cljs.core.async.t_cljs$core$async21188.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async21188");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21188.
 */
cljs.core.async.__GT_t_cljs$core$async21188 = (function cljs$core$async$__GT_t_cljs$core$async21188(f,ch,meta21182,_,fn1,meta21189){
return (new cljs.core.async.t_cljs$core$async21188(f,ch,meta21182,_,fn1,meta21189));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21181 = (function (f,ch,meta21182){
this.f = f;
this.ch = ch;
this.meta21182 = meta21182;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async21181.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21183,meta21182__$1){
var self__ = this;
var _21183__$1 = this;
return (new cljs.core.async.t_cljs$core$async21181(self__.f,self__.ch,meta21182__$1));
}));

(cljs.core.async.t_cljs$core$async21181.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21183){
var self__ = this;
var _21183__$1 = this;
return self__.meta21182;
}));

(cljs.core.async.t_cljs$core$async21181.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21181.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async21181.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async21181.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21181.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async21188(self__.f,self__.ch,self__.meta21182,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__21192 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__21192) : self__.f.call(null, G__21192));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async21181.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21181.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async21181.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21182","meta21182",-743733179,null)], null);
}));

(cljs.core.async.t_cljs$core$async21181.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async21181.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21181");

(cljs.core.async.t_cljs$core$async21181.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async21181");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21181.
 */
cljs.core.async.__GT_t_cljs$core$async21181 = (function cljs$core$async$__GT_t_cljs$core$async21181(f,ch,meta21182){
return (new cljs.core.async.t_cljs$core$async21181(f,ch,meta21182));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async21181(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21193 = (function (f,ch,meta21194){
this.f = f;
this.ch = ch;
this.meta21194 = meta21194;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async21193.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21195,meta21194__$1){
var self__ = this;
var _21195__$1 = this;
return (new cljs.core.async.t_cljs$core$async21193(self__.f,self__.ch,meta21194__$1));
}));

(cljs.core.async.t_cljs$core$async21193.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21195){
var self__ = this;
var _21195__$1 = this;
return self__.meta21194;
}));

(cljs.core.async.t_cljs$core$async21193.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21193.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async21193.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21193.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async21193.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21193.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null, val)),fn1);
}));

(cljs.core.async.t_cljs$core$async21193.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21194","meta21194",-1204082110,null)], null);
}));

(cljs.core.async.t_cljs$core$async21193.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async21193.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21193");

(cljs.core.async.t_cljs$core$async21193.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async21193");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21193.
 */
cljs.core.async.__GT_t_cljs$core$async21193 = (function cljs$core$async$__GT_t_cljs$core$async21193(f,ch,meta21194){
return (new cljs.core.async.t_cljs$core$async21193(f,ch,meta21194));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async21193(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21196 = (function (p,ch,meta21197){
this.p = p;
this.ch = ch;
this.meta21197 = meta21197;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async21196.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21198,meta21197__$1){
var self__ = this;
var _21198__$1 = this;
return (new cljs.core.async.t_cljs$core$async21196(self__.p,self__.ch,meta21197__$1));
}));

(cljs.core.async.t_cljs$core$async21196.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21198){
var self__ = this;
var _21198__$1 = this;
return self__.meta21197;
}));

(cljs.core.async.t_cljs$core$async21196.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21196.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async21196.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async21196.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21196.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async21196.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21196.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null, val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async21196.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21197","meta21197",85415146,null)], null);
}));

(cljs.core.async.t_cljs$core$async21196.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async21196.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21196");

(cljs.core.async.t_cljs$core$async21196.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async21196");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21196.
 */
cljs.core.async.__GT_t_cljs$core$async21196 = (function cljs$core$async$__GT_t_cljs$core$async21196(p,ch,meta21197){
return (new cljs.core.async.t_cljs$core$async21196(p,ch,meta21197));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async21196(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__21204 = arguments.length;
switch (G__21204) {
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
var c__12039__auto___22283 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__11942__auto__ = (function (state_21225){
var state_val_21226 = (state_21225[(1)]);
if((state_val_21226 === (7))){
var inst_21221 = (state_21225[(2)]);
var state_21225__$1 = state_21225;
var statearr_21231_22284 = state_21225__$1;
(statearr_21231_22284[(2)] = inst_21221);

(statearr_21231_22284[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21226 === (1))){
var state_21225__$1 = state_21225;
var statearr_21232_22285 = state_21225__$1;
(statearr_21232_22285[(2)] = null);

(statearr_21232_22285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21226 === (4))){
var inst_21207 = (state_21225[(7)]);
var inst_21207__$1 = (state_21225[(2)]);
var inst_21208 = (inst_21207__$1 == null);
var state_21225__$1 = (function (){var statearr_21233 = state_21225;
(statearr_21233[(7)] = inst_21207__$1);

return statearr_21233;
})();
if(cljs.core.truth_(inst_21208)){
var statearr_21234_22287 = state_21225__$1;
(statearr_21234_22287[(1)] = (5));

} else {
var statearr_21235_22288 = state_21225__$1;
(statearr_21235_22288[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21226 === (6))){
var inst_21207 = (state_21225[(7)]);
var inst_21212 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_21207) : p.call(null, inst_21207));
var state_21225__$1 = state_21225;
if(cljs.core.truth_(inst_21212)){
var statearr_21236_22289 = state_21225__$1;
(statearr_21236_22289[(1)] = (8));

} else {
var statearr_21237_22290 = state_21225__$1;
(statearr_21237_22290[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21226 === (3))){
var inst_21223 = (state_21225[(2)]);
var state_21225__$1 = state_21225;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21225__$1,inst_21223);
} else {
if((state_val_21226 === (2))){
var state_21225__$1 = state_21225;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21225__$1,(4),ch);
} else {
if((state_val_21226 === (11))){
var inst_21215 = (state_21225[(2)]);
var state_21225__$1 = state_21225;
var statearr_21238_22291 = state_21225__$1;
(statearr_21238_22291[(2)] = inst_21215);

(statearr_21238_22291[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21226 === (9))){
var state_21225__$1 = state_21225;
var statearr_21239_22292 = state_21225__$1;
(statearr_21239_22292[(2)] = null);

(statearr_21239_22292[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21226 === (5))){
var inst_21210 = cljs.core.async.close_BANG_(out);
var state_21225__$1 = state_21225;
var statearr_21240_22293 = state_21225__$1;
(statearr_21240_22293[(2)] = inst_21210);

(statearr_21240_22293[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21226 === (10))){
var inst_21218 = (state_21225[(2)]);
var state_21225__$1 = (function (){var statearr_21241 = state_21225;
(statearr_21241[(8)] = inst_21218);

return statearr_21241;
})();
var statearr_21242_22294 = state_21225__$1;
(statearr_21242_22294[(2)] = null);

(statearr_21242_22294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21226 === (8))){
var inst_21207 = (state_21225[(7)]);
var state_21225__$1 = state_21225;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21225__$1,(11),out,inst_21207);
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
var cljs$core$async$state_machine__11943__auto__ = null;
var cljs$core$async$state_machine__11943__auto____0 = (function (){
var statearr_21243 = [null,null,null,null,null,null,null,null,null];
(statearr_21243[(0)] = cljs$core$async$state_machine__11943__auto__);

(statearr_21243[(1)] = (1));

return statearr_21243;
});
var cljs$core$async$state_machine__11943__auto____1 = (function (state_21225){
while(true){
var ret_value__11944__auto__ = (function (){try{while(true){
var result__11945__auto__ = switch__11942__auto__(state_21225);
if(cljs.core.keyword_identical_QMARK_(result__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11945__auto__;
}
break;
}
}catch (e21244){var ex__11946__auto__ = e21244;
var statearr_21245_22296 = state_21225;
(statearr_21245_22296[(2)] = ex__11946__auto__);


if(cljs.core.seq((state_21225[(4)]))){
var statearr_21246_22297 = state_21225;
(statearr_21246_22297[(1)] = cljs.core.first((state_21225[(4)])));

} else {
throw ex__11946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22298 = state_21225;
state_21225 = G__22298;
continue;
} else {
return ret_value__11944__auto__;
}
break;
}
});
cljs$core$async$state_machine__11943__auto__ = function(state_21225){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11943__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11943__auto____1.call(this,state_21225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11943__auto____0;
cljs$core$async$state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11943__auto____1;
return cljs$core$async$state_machine__11943__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_21247 = f__12040__auto__();
(statearr_21247[(6)] = c__12039__auto___22283);

return statearr_21247;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__21263 = arguments.length;
switch (G__21263) {
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
var c__12039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__11942__auto__ = (function (state_21353){
var state_val_21354 = (state_21353[(1)]);
if((state_val_21354 === (7))){
var inst_21349 = (state_21353[(2)]);
var state_21353__$1 = state_21353;
var statearr_21356_22308 = state_21353__$1;
(statearr_21356_22308[(2)] = inst_21349);

(statearr_21356_22308[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21354 === (20))){
var inst_21317 = (state_21353[(7)]);
var inst_21328 = (state_21353[(2)]);
var inst_21329 = cljs.core.next(inst_21317);
var inst_21297 = inst_21329;
var inst_21298 = null;
var inst_21299 = (0);
var inst_21300 = (0);
var state_21353__$1 = (function (){var statearr_21357 = state_21353;
(statearr_21357[(8)] = inst_21328);

(statearr_21357[(9)] = inst_21297);

(statearr_21357[(10)] = inst_21298);

(statearr_21357[(11)] = inst_21300);

(statearr_21357[(12)] = inst_21299);

return statearr_21357;
})();
var statearr_21358_22313 = state_21353__$1;
(statearr_21358_22313[(2)] = null);

(statearr_21358_22313[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21354 === (1))){
var state_21353__$1 = state_21353;
var statearr_21359_22314 = state_21353__$1;
(statearr_21359_22314[(2)] = null);

(statearr_21359_22314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21354 === (4))){
var inst_21280 = (state_21353[(13)]);
var inst_21280__$1 = (state_21353[(2)]);
var inst_21284 = (inst_21280__$1 == null);
var state_21353__$1 = (function (){var statearr_21360 = state_21353;
(statearr_21360[(13)] = inst_21280__$1);

return statearr_21360;
})();
if(cljs.core.truth_(inst_21284)){
var statearr_21361_22315 = state_21353__$1;
(statearr_21361_22315[(1)] = (5));

} else {
var statearr_21362_22316 = state_21353__$1;
(statearr_21362_22316[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21354 === (15))){
var state_21353__$1 = state_21353;
var statearr_21369_22317 = state_21353__$1;
(statearr_21369_22317[(2)] = null);

(statearr_21369_22317[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21354 === (21))){
var state_21353__$1 = state_21353;
var statearr_21370_22318 = state_21353__$1;
(statearr_21370_22318[(2)] = null);

(statearr_21370_22318[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21354 === (13))){
var inst_21297 = (state_21353[(9)]);
var inst_21298 = (state_21353[(10)]);
var inst_21300 = (state_21353[(11)]);
var inst_21299 = (state_21353[(12)]);
var inst_21313 = (state_21353[(2)]);
var inst_21314 = (inst_21300 + (1));
var tmp21366 = inst_21297;
var tmp21367 = inst_21298;
var tmp21368 = inst_21299;
var inst_21297__$1 = tmp21366;
var inst_21298__$1 = tmp21367;
var inst_21299__$1 = tmp21368;
var inst_21300__$1 = inst_21314;
var state_21353__$1 = (function (){var statearr_21371 = state_21353;
(statearr_21371[(14)] = inst_21313);

(statearr_21371[(9)] = inst_21297__$1);

(statearr_21371[(10)] = inst_21298__$1);

(statearr_21371[(11)] = inst_21300__$1);

(statearr_21371[(12)] = inst_21299__$1);

return statearr_21371;
})();
var statearr_21372_22319 = state_21353__$1;
(statearr_21372_22319[(2)] = null);

(statearr_21372_22319[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21354 === (22))){
var state_21353__$1 = state_21353;
var statearr_21373_22320 = state_21353__$1;
(statearr_21373_22320[(2)] = null);

(statearr_21373_22320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21354 === (6))){
var inst_21280 = (state_21353[(13)]);
var inst_21295 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_21280) : f.call(null, inst_21280));
var inst_21296 = cljs.core.seq(inst_21295);
var inst_21297 = inst_21296;
var inst_21298 = null;
var inst_21299 = (0);
var inst_21300 = (0);
var state_21353__$1 = (function (){var statearr_21374 = state_21353;
(statearr_21374[(9)] = inst_21297);

(statearr_21374[(10)] = inst_21298);

(statearr_21374[(11)] = inst_21300);

(statearr_21374[(12)] = inst_21299);

return statearr_21374;
})();
var statearr_21375_22321 = state_21353__$1;
(statearr_21375_22321[(2)] = null);

(statearr_21375_22321[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21354 === (17))){
var inst_21317 = (state_21353[(7)]);
var inst_21321 = cljs.core.chunk_first(inst_21317);
var inst_21322 = cljs.core.chunk_rest(inst_21317);
var inst_21323 = cljs.core.count(inst_21321);
var inst_21297 = inst_21322;
var inst_21298 = inst_21321;
var inst_21299 = inst_21323;
var inst_21300 = (0);
var state_21353__$1 = (function (){var statearr_21376 = state_21353;
(statearr_21376[(9)] = inst_21297);

(statearr_21376[(10)] = inst_21298);

(statearr_21376[(11)] = inst_21300);

(statearr_21376[(12)] = inst_21299);

return statearr_21376;
})();
var statearr_21377_22322 = state_21353__$1;
(statearr_21377_22322[(2)] = null);

(statearr_21377_22322[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21354 === (3))){
var inst_21351 = (state_21353[(2)]);
var state_21353__$1 = state_21353;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21353__$1,inst_21351);
} else {
if((state_val_21354 === (12))){
var inst_21337 = (state_21353[(2)]);
var state_21353__$1 = state_21353;
var statearr_21378_22323 = state_21353__$1;
(statearr_21378_22323[(2)] = inst_21337);

(statearr_21378_22323[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21354 === (2))){
var state_21353__$1 = state_21353;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21353__$1,(4),in$);
} else {
if((state_val_21354 === (23))){
var inst_21347 = (state_21353[(2)]);
var state_21353__$1 = state_21353;
var statearr_21379_22324 = state_21353__$1;
(statearr_21379_22324[(2)] = inst_21347);

(statearr_21379_22324[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21354 === (19))){
var inst_21332 = (state_21353[(2)]);
var state_21353__$1 = state_21353;
var statearr_21380_22325 = state_21353__$1;
(statearr_21380_22325[(2)] = inst_21332);

(statearr_21380_22325[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21354 === (11))){
var inst_21297 = (state_21353[(9)]);
var inst_21317 = (state_21353[(7)]);
var inst_21317__$1 = cljs.core.seq(inst_21297);
var state_21353__$1 = (function (){var statearr_21381 = state_21353;
(statearr_21381[(7)] = inst_21317__$1);

return statearr_21381;
})();
if(inst_21317__$1){
var statearr_21382_22326 = state_21353__$1;
(statearr_21382_22326[(1)] = (14));

} else {
var statearr_21383_22327 = state_21353__$1;
(statearr_21383_22327[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21354 === (9))){
var inst_21339 = (state_21353[(2)]);
var inst_21342 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_21353__$1 = (function (){var statearr_21384 = state_21353;
(statearr_21384[(15)] = inst_21339);

return statearr_21384;
})();
if(cljs.core.truth_(inst_21342)){
var statearr_21385_22328 = state_21353__$1;
(statearr_21385_22328[(1)] = (21));

} else {
var statearr_21386_22329 = state_21353__$1;
(statearr_21386_22329[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21354 === (5))){
var inst_21289 = cljs.core.async.close_BANG_(out);
var state_21353__$1 = state_21353;
var statearr_21387_22330 = state_21353__$1;
(statearr_21387_22330[(2)] = inst_21289);

(statearr_21387_22330[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21354 === (14))){
var inst_21317 = (state_21353[(7)]);
var inst_21319 = cljs.core.chunked_seq_QMARK_(inst_21317);
var state_21353__$1 = state_21353;
if(inst_21319){
var statearr_21388_22331 = state_21353__$1;
(statearr_21388_22331[(1)] = (17));

} else {
var statearr_21389_22332 = state_21353__$1;
(statearr_21389_22332[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21354 === (16))){
var inst_21335 = (state_21353[(2)]);
var state_21353__$1 = state_21353;
var statearr_21390_22333 = state_21353__$1;
(statearr_21390_22333[(2)] = inst_21335);

(statearr_21390_22333[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21354 === (10))){
var inst_21298 = (state_21353[(10)]);
var inst_21300 = (state_21353[(11)]);
var inst_21311 = cljs.core._nth(inst_21298,inst_21300);
var state_21353__$1 = state_21353;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21353__$1,(13),out,inst_21311);
} else {
if((state_val_21354 === (18))){
var inst_21317 = (state_21353[(7)]);
var inst_21326 = cljs.core.first(inst_21317);
var state_21353__$1 = state_21353;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21353__$1,(20),out,inst_21326);
} else {
if((state_val_21354 === (8))){
var inst_21300 = (state_21353[(11)]);
var inst_21299 = (state_21353[(12)]);
var inst_21302 = (inst_21300 < inst_21299);
var inst_21303 = inst_21302;
var state_21353__$1 = state_21353;
if(cljs.core.truth_(inst_21303)){
var statearr_21391_22334 = state_21353__$1;
(statearr_21391_22334[(1)] = (10));

} else {
var statearr_21392_22335 = state_21353__$1;
(statearr_21392_22335[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__11943__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__11943__auto____0 = (function (){
var statearr_21393 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21393[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__11943__auto__);

(statearr_21393[(1)] = (1));

return statearr_21393;
});
var cljs$core$async$mapcat_STAR__$_state_machine__11943__auto____1 = (function (state_21353){
while(true){
var ret_value__11944__auto__ = (function (){try{while(true){
var result__11945__auto__ = switch__11942__auto__(state_21353);
if(cljs.core.keyword_identical_QMARK_(result__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11945__auto__;
}
break;
}
}catch (e21394){var ex__11946__auto__ = e21394;
var statearr_21395_22336 = state_21353;
(statearr_21395_22336[(2)] = ex__11946__auto__);


if(cljs.core.seq((state_21353[(4)]))){
var statearr_21396_22337 = state_21353;
(statearr_21396_22337[(1)] = cljs.core.first((state_21353[(4)])));

} else {
throw ex__11946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22338 = state_21353;
state_21353 = G__22338;
continue;
} else {
return ret_value__11944__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__11943__auto__ = function(state_21353){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__11943__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__11943__auto____1.call(this,state_21353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__11943__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__11943__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__11943__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_21397 = f__12040__auto__();
(statearr_21397[(6)] = c__12039__auto__);

return statearr_21397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));

return c__12039__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__21410 = arguments.length;
switch (G__21410) {
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
var G__21412 = arguments.length;
switch (G__21412) {
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
var G__21414 = arguments.length;
switch (G__21414) {
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
var c__12039__auto___22344 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__11942__auto__ = (function (state_21444){
var state_val_21445 = (state_21444[(1)]);
if((state_val_21445 === (7))){
var inst_21438 = (state_21444[(2)]);
var state_21444__$1 = state_21444;
var statearr_21448_22345 = state_21444__$1;
(statearr_21448_22345[(2)] = inst_21438);

(statearr_21448_22345[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21445 === (1))){
var inst_21418 = null;
var state_21444__$1 = (function (){var statearr_21449 = state_21444;
(statearr_21449[(7)] = inst_21418);

return statearr_21449;
})();
var statearr_21450_22346 = state_21444__$1;
(statearr_21450_22346[(2)] = null);

(statearr_21450_22346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21445 === (4))){
var inst_21422 = (state_21444[(8)]);
var inst_21422__$1 = (state_21444[(2)]);
var inst_21423 = (inst_21422__$1 == null);
var inst_21424 = cljs.core.not(inst_21423);
var state_21444__$1 = (function (){var statearr_21451 = state_21444;
(statearr_21451[(8)] = inst_21422__$1);

return statearr_21451;
})();
if(inst_21424){
var statearr_21452_22347 = state_21444__$1;
(statearr_21452_22347[(1)] = (5));

} else {
var statearr_21453_22348 = state_21444__$1;
(statearr_21453_22348[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21445 === (6))){
var state_21444__$1 = state_21444;
var statearr_21454_22349 = state_21444__$1;
(statearr_21454_22349[(2)] = null);

(statearr_21454_22349[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21445 === (3))){
var inst_21440 = (state_21444[(2)]);
var inst_21441 = cljs.core.async.close_BANG_(out);
var state_21444__$1 = (function (){var statearr_21455 = state_21444;
(statearr_21455[(9)] = inst_21440);

return statearr_21455;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_21444__$1,inst_21441);
} else {
if((state_val_21445 === (2))){
var state_21444__$1 = state_21444;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21444__$1,(4),ch);
} else {
if((state_val_21445 === (11))){
var inst_21422 = (state_21444[(8)]);
var inst_21432 = (state_21444[(2)]);
var inst_21418 = inst_21422;
var state_21444__$1 = (function (){var statearr_21456 = state_21444;
(statearr_21456[(7)] = inst_21418);

(statearr_21456[(10)] = inst_21432);

return statearr_21456;
})();
var statearr_21457_22351 = state_21444__$1;
(statearr_21457_22351[(2)] = null);

(statearr_21457_22351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21445 === (9))){
var inst_21422 = (state_21444[(8)]);
var state_21444__$1 = state_21444;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21444__$1,(11),out,inst_21422);
} else {
if((state_val_21445 === (5))){
var inst_21418 = (state_21444[(7)]);
var inst_21422 = (state_21444[(8)]);
var inst_21426 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_21422,inst_21418);
var state_21444__$1 = state_21444;
if(inst_21426){
var statearr_21459_22355 = state_21444__$1;
(statearr_21459_22355[(1)] = (8));

} else {
var statearr_21460_22356 = state_21444__$1;
(statearr_21460_22356[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21445 === (10))){
var inst_21435 = (state_21444[(2)]);
var state_21444__$1 = state_21444;
var statearr_21461_22358 = state_21444__$1;
(statearr_21461_22358[(2)] = inst_21435);

(statearr_21461_22358[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21445 === (8))){
var inst_21418 = (state_21444[(7)]);
var tmp21458 = inst_21418;
var inst_21418__$1 = tmp21458;
var state_21444__$1 = (function (){var statearr_21465 = state_21444;
(statearr_21465[(7)] = inst_21418__$1);

return statearr_21465;
})();
var statearr_21466_22359 = state_21444__$1;
(statearr_21466_22359[(2)] = null);

(statearr_21466_22359[(1)] = (2));


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
var cljs$core$async$state_machine__11943__auto__ = null;
var cljs$core$async$state_machine__11943__auto____0 = (function (){
var statearr_21467 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21467[(0)] = cljs$core$async$state_machine__11943__auto__);

(statearr_21467[(1)] = (1));

return statearr_21467;
});
var cljs$core$async$state_machine__11943__auto____1 = (function (state_21444){
while(true){
var ret_value__11944__auto__ = (function (){try{while(true){
var result__11945__auto__ = switch__11942__auto__(state_21444);
if(cljs.core.keyword_identical_QMARK_(result__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11945__auto__;
}
break;
}
}catch (e21468){var ex__11946__auto__ = e21468;
var statearr_21469_22361 = state_21444;
(statearr_21469_22361[(2)] = ex__11946__auto__);


if(cljs.core.seq((state_21444[(4)]))){
var statearr_21470_22362 = state_21444;
(statearr_21470_22362[(1)] = cljs.core.first((state_21444[(4)])));

} else {
throw ex__11946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22363 = state_21444;
state_21444 = G__22363;
continue;
} else {
return ret_value__11944__auto__;
}
break;
}
});
cljs$core$async$state_machine__11943__auto__ = function(state_21444){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11943__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11943__auto____1.call(this,state_21444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11943__auto____0;
cljs$core$async$state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11943__auto____1;
return cljs$core$async$state_machine__11943__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_21471 = f__12040__auto__();
(statearr_21471[(6)] = c__12039__auto___22344);

return statearr_21471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__21473 = arguments.length;
switch (G__21473) {
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
var c__12039__auto___22368 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__11942__auto__ = (function (state_21524){
var state_val_21525 = (state_21524[(1)]);
if((state_val_21525 === (7))){
var inst_21520 = (state_21524[(2)]);
var state_21524__$1 = state_21524;
var statearr_21533_22369 = state_21524__$1;
(statearr_21533_22369[(2)] = inst_21520);

(statearr_21533_22369[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21525 === (1))){
var inst_21484 = (new Array(n));
var inst_21485 = inst_21484;
var inst_21486 = (0);
var state_21524__$1 = (function (){var statearr_21537 = state_21524;
(statearr_21537[(7)] = inst_21486);

(statearr_21537[(8)] = inst_21485);

return statearr_21537;
})();
var statearr_21538_22371 = state_21524__$1;
(statearr_21538_22371[(2)] = null);

(statearr_21538_22371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21525 === (4))){
var inst_21489 = (state_21524[(9)]);
var inst_21489__$1 = (state_21524[(2)]);
var inst_21490 = (inst_21489__$1 == null);
var inst_21491 = cljs.core.not(inst_21490);
var state_21524__$1 = (function (){var statearr_21539 = state_21524;
(statearr_21539[(9)] = inst_21489__$1);

return statearr_21539;
})();
if(inst_21491){
var statearr_21540_22372 = state_21524__$1;
(statearr_21540_22372[(1)] = (5));

} else {
var statearr_21541_22373 = state_21524__$1;
(statearr_21541_22373[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21525 === (15))){
var inst_21514 = (state_21524[(2)]);
var state_21524__$1 = state_21524;
var statearr_21542_22374 = state_21524__$1;
(statearr_21542_22374[(2)] = inst_21514);

(statearr_21542_22374[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21525 === (13))){
var state_21524__$1 = state_21524;
var statearr_21543_22376 = state_21524__$1;
(statearr_21543_22376[(2)] = null);

(statearr_21543_22376[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21525 === (6))){
var inst_21486 = (state_21524[(7)]);
var inst_21510 = (inst_21486 > (0));
var state_21524__$1 = state_21524;
if(cljs.core.truth_(inst_21510)){
var statearr_21547_22378 = state_21524__$1;
(statearr_21547_22378[(1)] = (12));

} else {
var statearr_21548_22379 = state_21524__$1;
(statearr_21548_22379[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21525 === (3))){
var inst_21522 = (state_21524[(2)]);
var state_21524__$1 = state_21524;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21524__$1,inst_21522);
} else {
if((state_val_21525 === (12))){
var inst_21485 = (state_21524[(8)]);
var inst_21512 = cljs.core.vec(inst_21485);
var state_21524__$1 = state_21524;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21524__$1,(15),out,inst_21512);
} else {
if((state_val_21525 === (2))){
var state_21524__$1 = state_21524;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21524__$1,(4),ch);
} else {
if((state_val_21525 === (11))){
var inst_21504 = (state_21524[(2)]);
var inst_21505 = (new Array(n));
var inst_21485 = inst_21505;
var inst_21486 = (0);
var state_21524__$1 = (function (){var statearr_21559 = state_21524;
(statearr_21559[(10)] = inst_21504);

(statearr_21559[(7)] = inst_21486);

(statearr_21559[(8)] = inst_21485);

return statearr_21559;
})();
var statearr_21560_22380 = state_21524__$1;
(statearr_21560_22380[(2)] = null);

(statearr_21560_22380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21525 === (9))){
var inst_21485 = (state_21524[(8)]);
var inst_21502 = cljs.core.vec(inst_21485);
var state_21524__$1 = state_21524;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21524__$1,(11),out,inst_21502);
} else {
if((state_val_21525 === (5))){
var inst_21489 = (state_21524[(9)]);
var inst_21494 = (state_21524[(11)]);
var inst_21486 = (state_21524[(7)]);
var inst_21485 = (state_21524[(8)]);
var inst_21493 = (inst_21485[inst_21486] = inst_21489);
var inst_21494__$1 = (inst_21486 + (1));
var inst_21495 = (inst_21494__$1 < n);
var state_21524__$1 = (function (){var statearr_21565 = state_21524;
(statearr_21565[(12)] = inst_21493);

(statearr_21565[(11)] = inst_21494__$1);

return statearr_21565;
})();
if(cljs.core.truth_(inst_21495)){
var statearr_21566_22381 = state_21524__$1;
(statearr_21566_22381[(1)] = (8));

} else {
var statearr_21567_22382 = state_21524__$1;
(statearr_21567_22382[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21525 === (14))){
var inst_21517 = (state_21524[(2)]);
var inst_21518 = cljs.core.async.close_BANG_(out);
var state_21524__$1 = (function (){var statearr_21569 = state_21524;
(statearr_21569[(13)] = inst_21517);

return statearr_21569;
})();
var statearr_21570_22385 = state_21524__$1;
(statearr_21570_22385[(2)] = inst_21518);

(statearr_21570_22385[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21525 === (10))){
var inst_21508 = (state_21524[(2)]);
var state_21524__$1 = state_21524;
var statearr_21573_22390 = state_21524__$1;
(statearr_21573_22390[(2)] = inst_21508);

(statearr_21573_22390[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21525 === (8))){
var inst_21494 = (state_21524[(11)]);
var inst_21485 = (state_21524[(8)]);
var tmp21568 = inst_21485;
var inst_21485__$1 = tmp21568;
var inst_21486 = inst_21494;
var state_21524__$1 = (function (){var statearr_21574 = state_21524;
(statearr_21574[(7)] = inst_21486);

(statearr_21574[(8)] = inst_21485__$1);

return statearr_21574;
})();
var statearr_21575_22391 = state_21524__$1;
(statearr_21575_22391[(2)] = null);

(statearr_21575_22391[(1)] = (2));


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
var cljs$core$async$state_machine__11943__auto__ = null;
var cljs$core$async$state_machine__11943__auto____0 = (function (){
var statearr_21576 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21576[(0)] = cljs$core$async$state_machine__11943__auto__);

(statearr_21576[(1)] = (1));

return statearr_21576;
});
var cljs$core$async$state_machine__11943__auto____1 = (function (state_21524){
while(true){
var ret_value__11944__auto__ = (function (){try{while(true){
var result__11945__auto__ = switch__11942__auto__(state_21524);
if(cljs.core.keyword_identical_QMARK_(result__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11945__auto__;
}
break;
}
}catch (e21577){var ex__11946__auto__ = e21577;
var statearr_21578_22393 = state_21524;
(statearr_21578_22393[(2)] = ex__11946__auto__);


if(cljs.core.seq((state_21524[(4)]))){
var statearr_21579_22397 = state_21524;
(statearr_21579_22397[(1)] = cljs.core.first((state_21524[(4)])));

} else {
throw ex__11946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22398 = state_21524;
state_21524 = G__22398;
continue;
} else {
return ret_value__11944__auto__;
}
break;
}
});
cljs$core$async$state_machine__11943__auto__ = function(state_21524){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11943__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11943__auto____1.call(this,state_21524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11943__auto____0;
cljs$core$async$state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11943__auto____1;
return cljs$core$async$state_machine__11943__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_21580 = f__12040__auto__();
(statearr_21580[(6)] = c__12039__auto___22368);

return statearr_21580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__21582 = arguments.length;
switch (G__21582) {
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
var c__12039__auto___22400 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12040__auto__ = (function (){var switch__11942__auto__ = (function (state_21627){
var state_val_21628 = (state_21627[(1)]);
if((state_val_21628 === (7))){
var inst_21623 = (state_21627[(2)]);
var state_21627__$1 = state_21627;
var statearr_21629_22402 = state_21627__$1;
(statearr_21629_22402[(2)] = inst_21623);

(statearr_21629_22402[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21628 === (1))){
var inst_21583 = [];
var inst_21584 = inst_21583;
var inst_21585 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_21627__$1 = (function (){var statearr_21630 = state_21627;
(statearr_21630[(7)] = inst_21585);

(statearr_21630[(8)] = inst_21584);

return statearr_21630;
})();
var statearr_21631_22403 = state_21627__$1;
(statearr_21631_22403[(2)] = null);

(statearr_21631_22403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21628 === (4))){
var inst_21588 = (state_21627[(9)]);
var inst_21588__$1 = (state_21627[(2)]);
var inst_21589 = (inst_21588__$1 == null);
var inst_21590 = cljs.core.not(inst_21589);
var state_21627__$1 = (function (){var statearr_21632 = state_21627;
(statearr_21632[(9)] = inst_21588__$1);

return statearr_21632;
})();
if(inst_21590){
var statearr_21633_22405 = state_21627__$1;
(statearr_21633_22405[(1)] = (5));

} else {
var statearr_21634_22406 = state_21627__$1;
(statearr_21634_22406[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21628 === (15))){
var inst_21584 = (state_21627[(8)]);
var inst_21615 = cljs.core.vec(inst_21584);
var state_21627__$1 = state_21627;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21627__$1,(18),out,inst_21615);
} else {
if((state_val_21628 === (13))){
var inst_21610 = (state_21627[(2)]);
var state_21627__$1 = state_21627;
var statearr_21637_22407 = state_21627__$1;
(statearr_21637_22407[(2)] = inst_21610);

(statearr_21637_22407[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21628 === (6))){
var inst_21584 = (state_21627[(8)]);
var inst_21612 = inst_21584.length;
var inst_21613 = (inst_21612 > (0));
var state_21627__$1 = state_21627;
if(cljs.core.truth_(inst_21613)){
var statearr_21638_22408 = state_21627__$1;
(statearr_21638_22408[(1)] = (15));

} else {
var statearr_21639_22409 = state_21627__$1;
(statearr_21639_22409[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21628 === (17))){
var inst_21620 = (state_21627[(2)]);
var inst_21621 = cljs.core.async.close_BANG_(out);
var state_21627__$1 = (function (){var statearr_21640 = state_21627;
(statearr_21640[(10)] = inst_21620);

return statearr_21640;
})();
var statearr_21641_22410 = state_21627__$1;
(statearr_21641_22410[(2)] = inst_21621);

(statearr_21641_22410[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21628 === (3))){
var inst_21625 = (state_21627[(2)]);
var state_21627__$1 = state_21627;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21627__$1,inst_21625);
} else {
if((state_val_21628 === (12))){
var inst_21584 = (state_21627[(8)]);
var inst_21603 = cljs.core.vec(inst_21584);
var state_21627__$1 = state_21627;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21627__$1,(14),out,inst_21603);
} else {
if((state_val_21628 === (2))){
var state_21627__$1 = state_21627;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21627__$1,(4),ch);
} else {
if((state_val_21628 === (11))){
var inst_21592 = (state_21627[(11)]);
var inst_21584 = (state_21627[(8)]);
var inst_21588 = (state_21627[(9)]);
var inst_21600 = inst_21584.push(inst_21588);
var tmp21642 = inst_21584;
var inst_21584__$1 = tmp21642;
var inst_21585 = inst_21592;
var state_21627__$1 = (function (){var statearr_21645 = state_21627;
(statearr_21645[(12)] = inst_21600);

(statearr_21645[(7)] = inst_21585);

(statearr_21645[(8)] = inst_21584__$1);

return statearr_21645;
})();
var statearr_21655_22415 = state_21627__$1;
(statearr_21655_22415[(2)] = null);

(statearr_21655_22415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21628 === (9))){
var inst_21585 = (state_21627[(7)]);
var inst_21596 = cljs.core.keyword_identical_QMARK_(inst_21585,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_21627__$1 = state_21627;
var statearr_21656_22420 = state_21627__$1;
(statearr_21656_22420[(2)] = inst_21596);

(statearr_21656_22420[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21628 === (5))){
var inst_21592 = (state_21627[(11)]);
var inst_21585 = (state_21627[(7)]);
var inst_21593 = (state_21627[(13)]);
var inst_21588 = (state_21627[(9)]);
var inst_21592__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_21588) : f.call(null, inst_21588));
var inst_21593__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_21592__$1,inst_21585);
var state_21627__$1 = (function (){var statearr_21657 = state_21627;
(statearr_21657[(11)] = inst_21592__$1);

(statearr_21657[(13)] = inst_21593__$1);

return statearr_21657;
})();
if(inst_21593__$1){
var statearr_21658_22421 = state_21627__$1;
(statearr_21658_22421[(1)] = (8));

} else {
var statearr_21659_22422 = state_21627__$1;
(statearr_21659_22422[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21628 === (14))){
var inst_21592 = (state_21627[(11)]);
var inst_21588 = (state_21627[(9)]);
var inst_21605 = (state_21627[(2)]);
var inst_21606 = [];
var inst_21607 = inst_21606.push(inst_21588);
var inst_21584 = inst_21606;
var inst_21585 = inst_21592;
var state_21627__$1 = (function (){var statearr_21661 = state_21627;
(statearr_21661[(14)] = inst_21607);

(statearr_21661[(15)] = inst_21605);

(statearr_21661[(7)] = inst_21585);

(statearr_21661[(8)] = inst_21584);

return statearr_21661;
})();
var statearr_21662_22423 = state_21627__$1;
(statearr_21662_22423[(2)] = null);

(statearr_21662_22423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21628 === (16))){
var state_21627__$1 = state_21627;
var statearr_21663_22425 = state_21627__$1;
(statearr_21663_22425[(2)] = null);

(statearr_21663_22425[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21628 === (10))){
var inst_21598 = (state_21627[(2)]);
var state_21627__$1 = state_21627;
if(cljs.core.truth_(inst_21598)){
var statearr_21665_22426 = state_21627__$1;
(statearr_21665_22426[(1)] = (11));

} else {
var statearr_21666_22431 = state_21627__$1;
(statearr_21666_22431[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21628 === (18))){
var inst_21617 = (state_21627[(2)]);
var state_21627__$1 = state_21627;
var statearr_21667_22432 = state_21627__$1;
(statearr_21667_22432[(2)] = inst_21617);

(statearr_21667_22432[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21628 === (8))){
var inst_21593 = (state_21627[(13)]);
var state_21627__$1 = state_21627;
var statearr_21668_22450 = state_21627__$1;
(statearr_21668_22450[(2)] = inst_21593);

(statearr_21668_22450[(1)] = (10));


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
var cljs$core$async$state_machine__11943__auto__ = null;
var cljs$core$async$state_machine__11943__auto____0 = (function (){
var statearr_21669 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21669[(0)] = cljs$core$async$state_machine__11943__auto__);

(statearr_21669[(1)] = (1));

return statearr_21669;
});
var cljs$core$async$state_machine__11943__auto____1 = (function (state_21627){
while(true){
var ret_value__11944__auto__ = (function (){try{while(true){
var result__11945__auto__ = switch__11942__auto__(state_21627);
if(cljs.core.keyword_identical_QMARK_(result__11945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11945__auto__;
}
break;
}
}catch (e21670){var ex__11946__auto__ = e21670;
var statearr_21671_22458 = state_21627;
(statearr_21671_22458[(2)] = ex__11946__auto__);


if(cljs.core.seq((state_21627[(4)]))){
var statearr_21672_22459 = state_21627;
(statearr_21672_22459[(1)] = cljs.core.first((state_21627[(4)])));

} else {
throw ex__11946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22464 = state_21627;
state_21627 = G__22464;
continue;
} else {
return ret_value__11944__auto__;
}
break;
}
});
cljs$core$async$state_machine__11943__auto__ = function(state_21627){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11943__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11943__auto____1.call(this,state_21627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11943__auto____0;
cljs$core$async$state_machine__11943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11943__auto____1;
return cljs$core$async$state_machine__11943__auto__;
})()
})();
var state__12041__auto__ = (function (){var statearr_21673 = f__12040__auto__();
(statearr_21673[(6)] = c__12039__auto___22400);

return statearr_21673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12041__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
