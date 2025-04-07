goog.provide("goog.net.Cookies");
goog.require("goog.string");
goog.net.Cookies = function(context) {
  this.document_ = context || {cookie:""};
};
goog.net.Cookies.MAX_COOKIE_LENGTH = 3950;
goog.net.Cookies.TEST_COOKIE_NAME_ = "TESTCOOKIESENABLED";
goog.net.Cookies.TEST_COOKIE_VALUE_ = "1";
goog.net.Cookies.TEST_COOKIE_MAX_AGE_ = 60;
goog.net.Cookies.prototype.isEnabled = function() {
  if (!goog.global.navigator.cookieEnabled) {
    return false;
  }
  if (!this.isEmpty()) {
    return true;
  }
  this.set(goog.net.Cookies.TEST_COOKIE_NAME_, goog.net.Cookies.TEST_COOKIE_VALUE_, {maxAge:goog.net.Cookies.TEST_COOKIE_MAX_AGE_});
  if (this.get(goog.net.Cookies.TEST_COOKIE_NAME_) !== goog.net.Cookies.TEST_COOKIE_VALUE_) {
    return false;
  }
  this.remove(goog.net.Cookies.TEST_COOKIE_NAME_);
  return true;
};
goog.net.Cookies.prototype.isValidName = function(name) {
  return !/[;=\s]/.test(name);
};
goog.net.Cookies.prototype.isValidValue = function(value) {
  return !/[;\r\n]/.test(value);
};
goog.net.Cookies.prototype.set = function(name, value, options) {
  let maxAge;
  let path;
  let domain;
  let secure = false;
  let sameSite;
  if (typeof options === "object") {
    sameSite = options.sameSite;
    secure = options.secure || false;
    domain = options.domain || undefined;
    path = options.path || undefined;
    maxAge = options.maxAge;
  }
  if (!this.isValidName(name)) {
    throw new Error('Invalid cookie name "' + name + '"');
  }
  if (!this.isValidValue(value)) {
    throw new Error('Invalid cookie value "' + value + '"');
  }
  if (maxAge === undefined) {
    maxAge = -1;
  }
  const domainStr = domain ? ";domain\x3d" + domain : "";
  const pathStr = path ? ";path\x3d" + path : "";
  const secureStr = secure ? ";secure" : "";
  let expiresStr;
  if (maxAge < 0) {
    expiresStr = "";
  } else if (maxAge == 0) {
    const pastDate = new Date(1970, 1, 1);
    expiresStr = ";expires\x3d" + pastDate.toUTCString();
  } else {
    const futureDate = new Date(Date.now() + maxAge * 1000);
    expiresStr = ";expires\x3d" + futureDate.toUTCString();
  }
  const sameSiteStr = sameSite != null ? ";samesite\x3d" + sameSite : "";
  this.setCookie_(name + "\x3d" + value + domainStr + pathStr + expiresStr + secureStr + sameSiteStr);
};
goog.net.Cookies.prototype.get = function(name, opt_default) {
  const nameEq = name + "\x3d";
  const parts = this.getParts_();
  for (let i = 0, part; i < parts.length; i++) {
    part = goog.string.trim(parts[i]);
    if (part.lastIndexOf(nameEq, 0) == 0) {
      return part.slice(nameEq.length);
    }
    if (part == name) {
      return "";
    }
  }
  return opt_default;
};
goog.net.Cookies.prototype.remove = function(name, opt_path, opt_domain) {
  const rv = this.containsKey(name);
  this.set(name, "", {maxAge:0, path:opt_path, domain:opt_domain});
  return rv;
};
goog.net.Cookies.prototype.getKeys = function() {
  return this.getKeyValues_().keys;
};
goog.net.Cookies.prototype.getValues = function() {
  return this.getKeyValues_().values;
};
goog.net.Cookies.prototype.isEmpty = function() {
  return !this.getCookie_();
};
goog.net.Cookies.prototype.getCount = function() {
  const cookie = this.getCookie_();
  if (!cookie) {
    return 0;
  }
  return this.getParts_().length;
};
goog.net.Cookies.prototype.containsKey = function(key) {
  return this.get(key) !== undefined;
};
goog.net.Cookies.prototype.containsValue = function(value) {
  const values = this.getKeyValues_().values;
  for (let i = 0; i < values.length; i++) {
    if (values[i] == value) {
      return true;
    }
  }
  return false;
};
goog.net.Cookies.prototype.clear = function() {
  const keys = this.getKeyValues_().keys;
  for (let i = keys.length - 1; i >= 0; i--) {
    this.remove(keys[i]);
  }
};
goog.net.Cookies.prototype.setCookie_ = function(s) {
  this.document_.cookie = s;
};
goog.net.Cookies.prototype.getCookie_ = function() {
  return this.document_.cookie;
};
goog.net.Cookies.prototype.getParts_ = function() {
  return (this.getCookie_() || "").split(";");
};
goog.net.Cookies.prototype.getKeyValues_ = function() {
  const parts = this.getParts_();
  const keys = [];
  const values = [];
  let index;
  let part;
  for (let i = 0; i < parts.length; i++) {
    part = goog.string.trim(parts[i]);
    index = part.indexOf("\x3d");
    if (index == -1) {
      keys.push("");
      values.push(part);
    } else {
      keys.push(part.substring(0, index));
      values.push(part.substring(index + 1));
    }
  }
  return {keys:keys, values:values};
};
goog.net.Cookies.SetOptions = function() {
  this.maxAge;
  this.path;
  this.domain;
  this.secure;
  this.sameSite;
};
goog.net.Cookies.SameSite = {LAX:"lax", NONE:"none", STRICT:"strict"};
goog.net.Cookies.instance_ = new goog.net.Cookies(typeof document == "undefined" ? null : document);
goog.net.Cookies.getInstance = function() {
  return goog.net.Cookies.instance_;
};

//# sourceMappingURL=goog.net.cookies.js.map
