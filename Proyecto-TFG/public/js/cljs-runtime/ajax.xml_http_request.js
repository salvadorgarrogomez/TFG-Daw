goog.provide('ajax.xml_http_request');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__13309 = e.target.readyState;
var fexpr__13308 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__13308.cljs$core$IFn$_invoke$arity$1 ? fexpr__13308.cljs$core$IFn$_invoke$arity$1(G__13309) : fexpr__13308.call(null, G__13309));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
ajax.xml_http_request.goog$module$goog$object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():XMLHttpRequest);
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__13324,handler){
var map__13325 = p__13324;
var map__13325__$1 = cljs.core.__destructure_map(map__13325);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13325__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13325__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13325__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13325__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13325__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13325__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13325__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__13323_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__13323_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null, this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5804__auto___13359 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5804__auto___13359)){
var response_type_13360 = temp__5804__auto___13359;
(this$__$1.responseType = cljs.core.name(response_type_13360));
} else {
}

var seq__13331_13361 = cljs.core.seq(headers);
var chunk__13332_13362 = null;
var count__13333_13363 = (0);
var i__13334_13364 = (0);
while(true){
if((i__13334_13364 < count__13333_13363)){
var vec__13344_13366 = chunk__13332_13362.cljs$core$IIndexed$_nth$arity$2(null, i__13334_13364);
var k_13367 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13344_13366,(0),null);
var v_13368 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13344_13366,(1),null);
this$__$1.setRequestHeader(k_13367,v_13368);


var G__13369 = seq__13331_13361;
var G__13370 = chunk__13332_13362;
var G__13371 = count__13333_13363;
var G__13372 = (i__13334_13364 + (1));
seq__13331_13361 = G__13369;
chunk__13332_13362 = G__13370;
count__13333_13363 = G__13371;
i__13334_13364 = G__13372;
continue;
} else {
var temp__5804__auto___13373 = cljs.core.seq(seq__13331_13361);
if(temp__5804__auto___13373){
var seq__13331_13374__$1 = temp__5804__auto___13373;
if(cljs.core.chunked_seq_QMARK_(seq__13331_13374__$1)){
var c__5525__auto___13375 = cljs.core.chunk_first(seq__13331_13374__$1);
var G__13376 = cljs.core.chunk_rest(seq__13331_13374__$1);
var G__13377 = c__5525__auto___13375;
var G__13378 = cljs.core.count(c__5525__auto___13375);
var G__13379 = (0);
seq__13331_13361 = G__13376;
chunk__13332_13362 = G__13377;
count__13333_13363 = G__13378;
i__13334_13364 = G__13379;
continue;
} else {
var vec__13349_13380 = cljs.core.first(seq__13331_13374__$1);
var k_13381 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13349_13380,(0),null);
var v_13382 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13349_13380,(1),null);
this$__$1.setRequestHeader(k_13381,v_13382);


var G__13383 = cljs.core.next(seq__13331_13374__$1);
var G__13384 = null;
var G__13385 = (0);
var G__13386 = (0);
seq__13331_13361 = G__13383;
chunk__13332_13362 = G__13384;
count__13333_13363 = G__13385;
i__13334_13364 = G__13386;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__5002__auto__ = body;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));

//# sourceMappingURL=ajax.xml_http_request.js.map
