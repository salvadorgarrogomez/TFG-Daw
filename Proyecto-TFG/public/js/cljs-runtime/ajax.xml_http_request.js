goog.provide('ajax.xml_http_request');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__25879 = e.target.readyState;
var fexpr__25878 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__25878.cljs$core$IFn$_invoke$arity$1 ? fexpr__25878.cljs$core$IFn$_invoke$arity$1(G__25879) : fexpr__25878.call(null, G__25879));
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
ajax.xml_http_request.xmlhttprequest = (((typeof goog !== 'undefined') && (typeof goog.global !== 'undefined') && (typeof goog.global.XMLHttpRequest !== 'undefined'))?goog.global.XMLHttpRequest:(((typeof require !== 'undefined'))?(function (){var req = require;
return (req.cljs$core$IFn$_invoke$arity$1 ? req.cljs$core$IFn$_invoke$arity$1("xmlhttprequest") : req.call(null, "xmlhttprequest")).XMLHttpRequest;
})():null));
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__25884,handler){
var map__25885 = p__25884;
var map__25885__$1 = cljs.core.__destructure_map(map__25885);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25885__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25885__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25885__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25885__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__25885__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__25885__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25885__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__25881_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__25881_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null, this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5804__auto___25912 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5804__auto___25912)){
var response_type_25913 = temp__5804__auto___25912;
(this$__$1.responseType = cljs.core.name(response_type_25913));
} else {
}

var seq__25890_25914 = cljs.core.seq(headers);
var chunk__25891_25915 = null;
var count__25892_25916 = (0);
var i__25893_25917 = (0);
while(true){
if((i__25893_25917 < count__25892_25916)){
var vec__25902_25919 = chunk__25891_25915.cljs$core$IIndexed$_nth$arity$2(null, i__25893_25917);
var k_25920 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25902_25919,(0),null);
var v_25921 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25902_25919,(1),null);
this$__$1.setRequestHeader(k_25920,v_25921);


var G__25922 = seq__25890_25914;
var G__25923 = chunk__25891_25915;
var G__25924 = count__25892_25916;
var G__25925 = (i__25893_25917 + (1));
seq__25890_25914 = G__25922;
chunk__25891_25915 = G__25923;
count__25892_25916 = G__25924;
i__25893_25917 = G__25925;
continue;
} else {
var temp__5804__auto___25926 = cljs.core.seq(seq__25890_25914);
if(temp__5804__auto___25926){
var seq__25890_25927__$1 = temp__5804__auto___25926;
if(cljs.core.chunked_seq_QMARK_(seq__25890_25927__$1)){
var c__5525__auto___25928 = cljs.core.chunk_first(seq__25890_25927__$1);
var G__25929 = cljs.core.chunk_rest(seq__25890_25927__$1);
var G__25930 = c__5525__auto___25928;
var G__25931 = cljs.core.count(c__5525__auto___25928);
var G__25932 = (0);
seq__25890_25914 = G__25929;
chunk__25891_25915 = G__25930;
count__25892_25916 = G__25931;
i__25893_25917 = G__25932;
continue;
} else {
var vec__25909_25933 = cljs.core.first(seq__25890_25927__$1);
var k_25934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25909_25933,(0),null);
var v_25935 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25909_25933,(1),null);
this$__$1.setRequestHeader(k_25934,v_25935);


var G__25936 = cljs.core.next(seq__25890_25927__$1);
var G__25937 = null;
var G__25938 = (0);
var G__25939 = (0);
seq__25890_25914 = G__25936;
chunk__25891_25915 = G__25937;
count__25892_25916 = G__25938;
i__25893_25917 = G__25939;
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
