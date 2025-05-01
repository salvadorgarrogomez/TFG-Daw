goog.provide('ajax.xhrio');
(goog.net.XhrIo.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(goog.net.XhrIo.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__13301,handler){
var map__13303 = p__13301;
var map__13303__$1 = cljs.core.__destructure_map(map__13303);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13303__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13303__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13303__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13303__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13303__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13303__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13303__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var progress_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13303__$1,new cljs.core.Keyword(null,"progress-handler","progress-handler",333585589));
var this$__$1 = this;
var temp__5804__auto___13347 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5804__auto___13347)){
var response_type_13348 = temp__5804__auto___13347;
this$__$1.setResponseType(cljs.core.name(response_type_13348));
} else {
}

if(cljs.core.fn_QMARK_(progress_handler)){
var G__13316_13352 = this$__$1;
G__13316_13352.setProgressEventsEnabled(true);

goog.events.listen(G__13316_13352,goog.net.EventType.UPLOAD_PROGRESS,progress_handler);

} else {
}

var G__13317 = this$__$1;
goog.events.listen(G__13317,goog.net.EventType.COMPLETE,(function (p1__13297_SHARP_){
var G__13318 = p1__13297_SHARP_.target;
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__13318) : handler.call(null, G__13318));
}));

G__13317.setTimeoutInterval(timeout);

G__13317.setWithCredentials(with_credentials);

G__13317.send(uri,method,body,cljs.core.clj__GT_js(headers));

return G__13317;
}));

(goog.net.XhrIo.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(goog.net.XhrIo.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort(goog.net.ErrorCode.ABORT);
}));

(goog.net.XhrIo.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(goog.net.XhrIo.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getResponse();
}));

(goog.net.XhrIo.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getStatus();
}));

(goog.net.XhrIo.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getStatusText();
}));

(goog.net.XhrIo.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(this$__$1.getResponseHeaders());
}));

(goog.net.XhrIo.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(goog.net.XhrIo.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.getLastErrorCode(),goog.net.ErrorCode.ABORT);
}));
(goog.net.XhrManager.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(goog.net.XhrManager.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__13330,handler){
var map__13335 = p__13330;
var map__13335__$1 = cljs.core.__destructure_map(map__13335);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13335__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13335__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13335__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13335__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13335__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13335__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var priority = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13335__$1,new cljs.core.Keyword(null,"priority","priority",1431093715));
var max_retries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13335__$1,new cljs.core.Keyword(null,"max-retries","max-retries",-1933762121));
var this$__$1 = this;
return this$__$1.send(id,uri,method,body,cljs.core.clj__GT_js(headers),priority,handler,max_retries);
}));

//# sourceMappingURL=ajax.xhrio.js.map
