(function(){var g,aa=aa||{},m=this;function p(a){return void 0!==a}
function q(a,b,c){a=a.split(".");c=c||m;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&p(b)?c[d]=b:c[d]?c=c[d]:c=c[d]={}}
function r(a,b){for(var c=a.split("."),d=b||m,e;e=c.shift();)if(null!=d[e])d=d[e];else return null;return d}
function t(){}
function ba(a){a.getInstance=function(){return a.X?a.X:a.X=new a}}
function ca(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function da(a){return"array"==ca(a)}
function ea(a){var b=ca(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function v(a){return"string"==typeof a}
function ga(a){return"number"==typeof a}
function ha(a){return"function"==ca(a)}
function ia(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function ka(a){return a[ma]||(a[ma]=++na)}
var ma="closure_uid_"+(1E9*Math.random()>>>0),na=0;function oa(a,b,c){return a.call.apply(a.bind,arguments)}
function pa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function w(a,b,c){w=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?oa:pa;return w.apply(null,arguments)}
function qa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
var x=Date.now||function(){return+new Date};
function y(a,b){function c(){}
c.prototype=b.prototype;a.I=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(a,c,f){for(var h=Array(arguments.length-2),k=2;k<arguments.length;k++)h[k-2]=arguments[k];return b.prototype[c].apply(a,h)}}
;function ra(a){if(Error.captureStackTrace)Error.captureStackTrace(this,ra);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
y(ra,Error);ra.prototype.name="CustomError";var sa;var ta=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
function ua(a){return decodeURIComponent(a.replace(/\+/g," "))}
var va=/&/g,wa=/</g,xa=/>/g,ya=/"/g,za=/'/g,Aa=/\x00/g,Ba=/[\x00&<>"']/;function Ca(a){return-1!=a.indexOf("&")?"document"in m?Da(a):Ea(a):a}
function Da(a){var b={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"'},c;c=m.document.createElement("div");return a.replace(Fa,function(a,e){var f=b[a];if(f)return f;if("#"==e.charAt(0)){var h=Number("0"+e.substr(1));isNaN(h)||(f=String.fromCharCode(h))}f||(c.innerHTML=a+" ",f=c.firstChild.nodeValue.slice(0,-1));return b[a]=f})}
function Ea(a){return a.replace(/&([^;]+);/g,function(a,c){switch(c){case "amp":return"&";case "lt":return"<";case "gt":return">";case "quot":return'"';default:if("#"==c.charAt(0)){var d=Number("0"+c.substr(1));if(!isNaN(d))return String.fromCharCode(d)}return a}})}
var Fa=/&([^;\s<&]+);?/g,Ga={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"<"},Ha={"'":"\\'"};
function Ia(a,b){for(var c=0,d=ta(String(a)).split("."),e=ta(String(b)).split("."),f=Math.max(d.length,e.length),h=0;0==c&&h<f;h++){var k=d[h]||"",l=e[h]||"",n=RegExp("(\\d*)(\\D*)","g"),u=RegExp("(\\d*)(\\D*)","g");do{var fa=n.exec(k)||["","",""],la=u.exec(l)||["","",""];if(0==fa[0].length&&0==la[0].length)break;c=Ja(0==fa[1].length?0:parseInt(fa[1],10),0==la[1].length?0:parseInt(la[1],10))||Ja(0==fa[2].length,0==la[2].length)||Ja(fa[2],la[2])}while(0==c)}return c}
function Ja(a,b){return a<b?-1:a>b?1:0}
function Ka(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var La=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(v(a))return v(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},z=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=v(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ma=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,h=v(a)?a.split(""):a,k=0;k<d;k++)if(k in h){var l=h[k];
b.call(c,l,k,a)&&(e[f++]=l)}return e},A=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=v(a)?a.split(""):a,h=0;h<d;h++)h in f&&(e[h]=b.call(c,f[h],h,a));
return e},Na=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=v(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;
return!1},Oa=Array.prototype.every?function(a,b,c){return Array.prototype.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=v(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;
return!0};
function Pa(a,b,c){b=Qa(a,b,c);return 0>b?null:v(a)?a.charAt(b):a[b]}
function Qa(a,b,c){for(var d=a.length,e=v(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1}
function B(a,b){return 0<=La(a,b)}
function Ra(){var a=Sa;if(!da(a))for(var b=a.length-1;0<=b;b--)delete a[b];a.length=0}
function Ta(a,b){B(a,b)||a.push(b)}
function Ua(a,b){var c=La(a,b),d;(d=0<=c)&&Array.prototype.splice.call(a,c,1);return d}
function Va(a,b){var c=Qa(a,b,void 0);0<=c&&Array.prototype.splice.call(a,c,1)}
function Wa(a){return Array.prototype.concat.apply(Array.prototype,arguments)}
function Xa(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Ya(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(ea(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var h=0;h<f;h++)a[e+h]=d[h]}else a.push(d)}}
function Za(a,b,c,d){return Array.prototype.splice.apply(a,$a(arguments,1))}
function $a(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
function ab(a,b,c){if(!ea(a)||!ea(b)||a.length!=b.length)return!1;var d=a.length;c=c||bb;for(var e=0;e<d;e++)if(!c(a[e],b[e]))return!1;return!0}
function cb(a,b){return a>b?1:a<b?-1:0}
function bb(a,b){return a===b}
;function db(a,b,c){for(var d in a)b.call(c,a[d],d,a)}
function eb(a,b,c){var d={},e;for(e in a)b.call(c,a[e],e,a)&&(d[e]=a[e]);return d}
function fb(a){var b=0,c;for(c in a)b++;return b}
function gb(a,b){return ib(a,b)}
function jb(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}
function kb(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}
function lb(a){return null!==a&&"withCredentials"in a}
function ib(a,b){for(var c in a)if(a[c]==b)return!0;return!1}
function nb(a){var b=ob,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function pb(a){for(var b in a)return!1;return!0}
function qb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function sb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function tb(a){var b=ca(a);if("object"==b||"array"==b){if(ha(a.clone))return a.clone();var b="array"==b?[]:{},c;for(c in a)b[c]=tb(a[c]);return b}return a}
var ub="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function vb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ub.length;f++)c=ub[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var wb;a:{var xb=m.navigator;if(xb){var yb=xb.userAgent;if(yb){wb=yb;break a}}wb=""}function C(a){return-1!=wb.indexOf(a)}
;function zb(){return(C("Chrome")||C("CriOS"))&&!C("Edge")}
;function Ab(){this.f=""}
Ab.prototype.$b=!0;Ab.prototype.Vb=function(){return this.f};
Ab.prototype.toString=function(){return"Const{"+this.f+"}"};
function Bb(a){var b=new Ab;b.f=a;return b}
;function Cb(){this.f="";this.h=Db}
Cb.prototype.$b=!0;Cb.prototype.Vb=function(){return this.f};
function Eb(a){if(a instanceof Cb&&a.constructor===Cb&&a.h===Db)return a.f;ca(a);return"type_error:SafeUrl"}
var Fb=/^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i;function Gb(a){if(a instanceof Cb)return a;a=a.$b?a.Vb():String(a);Fb.test(a)||(a="about:invalid#zClosurez");return Hb(a)}
var Db={};function Hb(a){var b=new Cb;b.f=a;return b}
Hb("about:blank");function Ib(){this.f="";this.h=Jb;this.j=null}
Ib.prototype.$b=!0;Ib.prototype.Vb=function(){return this.f};
function Kb(a){if(a instanceof Ib&&a.constructor===Ib&&a.h===Jb)return a.f;ca(a);return"type_error:SafeHtml"}
var Jb={};function Lb(a,b){var c=new Ib;c.f=a;c.j=b;return c}
Lb("<!DOCTYPE html>",0);Lb("",0);Lb("<br>",0);function Mb(a,b){var c;c=b instanceof Cb?b:Gb(b);a.href=Eb(c)}
;function Nb(a,b,c){a&&(a.dataset?a.dataset[Ob(b)]=c:a.setAttribute("data-"+b,c))}
function D(a,b){return a?a.dataset?a.dataset[Ob(b)]:a.getAttribute("data-"+b):null}
function Pb(a,b){a&&(a.dataset?delete a.dataset[Ob(b)]:a.removeAttribute("data-"+b))}
var Rb={};function Ob(a){return Rb[a]||(Rb[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
;function Sb(a){m.setTimeout(function(){throw a;},0)}
var Tb;
function Ub(){var a=m.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!C("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=w(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!C("Trident")&&!C("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(p(c.next)){c=c.next;var a=c.sc;c.sc=null;a()}};
return function(a){d.next={sc:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){m.setTimeout(a,0)}}
;function Wb(a,b,c){this.l=c;this.j=a;this.o=b;this.h=0;this.f=null}
Wb.prototype.get=function(){var a;0<this.h?(this.h--,a=this.f,this.f=a.next,a.next=null):a=this.j();return a};
function Xb(a,b){a.o(b);a.h<a.l&&(a.h++,b.next=a.f,a.f=b)}
;function Yb(){this.h=this.f=null}
var $b=new Wb(function(){return new Zb},function(a){a.reset()},100);
Yb.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.h=null),a.next=null);return a};
function Zb(){this.next=this.h=this.f=null}
Zb.prototype.set=function(a,b){this.f=a;this.h=b;this.next=null};
Zb.prototype.reset=function(){this.next=this.h=this.f=null};function ac(a,b){bc||cc();dc||(bc(),dc=!0);var c=ec,d=$b.get();d.set(a,b);c.h?c.h.next=d:c.f=d;c.h=d}
var bc;function cc(){if(m.Promise&&m.Promise.resolve){var a=m.Promise.resolve(void 0);bc=function(){a.then(fc)}}else bc=function(){var a=fc;
!ha(m.setImmediate)||m.Window&&m.Window.prototype&&!C("Edge")&&m.Window.prototype.setImmediate==m.setImmediate?(Tb||(Tb=Ub()),Tb(a)):m.setImmediate(a)}}
var dc=!1,ec=new Yb;function fc(){for(var a=null;a=ec.remove();){try{a.f.call(a.h)}catch(b){Sb(b)}Xb($b,a)}dc=!1}
;function E(){this.sa=this.sa;this.K=this.K}
E.prototype.sa=!1;E.prototype.isDisposed=function(){return this.sa};
E.prototype.dispose=function(){this.sa||(this.sa=!0,this.G())};
function gc(a,b){a.sa?b.call(void 0):(a.K||(a.K=[]),a.K.push(p(void 0)?w(b,void 0):b))}
E.prototype.G=function(){if(this.K)for(;this.K.length;)this.K.shift()()};
function F(a){a&&"function"==typeof a.dispose&&a.dispose()}
function hc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];ea(d)?hc.apply(null,d):F(d)}}
;function G(a){E.call(this);this.l=1;this.h=[];this.j=0;this.f=[];this.ga={};this.o=!!a}
y(G,E);g=G.prototype;g.subscribe=function(a,b,c){var d=this.ga[a];d||(d=this.ga[a]=[]);var e=this.l;this.f[e]=a;this.f[e+1]=b;this.f[e+2]=c;this.l=e+3;d.push(e);return e};
g.unsubscribe=function(a,b,c){if(a=this.ga[a]){var d=this.f;if(a=Pa(a,function(a){return d[a+1]==b&&d[a+2]==c}))return this.oa(a)}return!1};
g.oa=function(a){var b=this.f[a];if(b){var c=this.ga[b];0!=this.j?(this.h.push(a),this.f[a+1]=t):(c&&Ua(c,a),delete this.f[a],delete this.f[a+1],delete this.f[a+2])}return!!b};
g.F=function(a,b){var c=this.ga[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.o)for(e=0;e<c.length;e++){var h=c[e];ic(this.f[h+1],this.f[h+2],d)}else{this.j++;try{for(e=0,f=c.length;e<f;e++)h=c[e],this.f[h+1].apply(this.f[h+2],d)}finally{if(this.j--,0<this.h.length&&0==this.j)for(;c=this.h.pop();)this.oa(c)}}return 0!=e}return!1};
function ic(a,b,c){ac(function(){a.apply(b,c)})}
g.clear=function(a){if(a){var b=this.ga[a];b&&(z(b,this.oa,this),delete this.ga[a])}else this.f.length=0,this.ga={}};
g.U=function(a){if(a){var b=this.ga[a];return b?b.length:0}a=0;for(b in this.ga)a+=this.U(b);return a};
g.G=function(){G.I.G.call(this);this.clear();this.h.length=0};var jc=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};q("yt.config_",jc,void 0);q("yt.tokens_",window.yt&&window.yt.tokens_||{},void 0);var kc=window.yt&&window.yt.msgs_||r("window.ytcfg.msgs")||{};q("yt.msgs_",kc,void 0);function lc(a){mc(jc,arguments)}
function H(a,b){return a in jc?jc[a]:b}
function I(a,b){ha(a)&&(a=nc(a));return window.setTimeout(a,b)}
function oc(a,b){ha(a)&&(a=nc(a));window.setInterval(a,b)}
function J(a){window.clearTimeout(a)}
function nc(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){throw pc(b),b;}}:a}
function pc(a,b){var c=r("yt.logging.errors.log");c?c(a,b,void 0,void 0,void 0):(c=H("ERRORS",[]),c.push([a,b,void 0,void 0,void 0]),lc("ERRORS",c))}
function qc(){var a={},b="FLASH_UPGRADE"in kc?kc.FLASH_UPGRADE:'You need to upgrade your Adobe Flash Player to watchthis video. <br> <a href="http://get.adobe.com/flashplayer/">Download it from Adobe.</a>';if(b)for(var c in a)b=b.replace(new RegExp("\\$"+c,"gi"),function(){return a[c]});
return b}
function mc(a,b){if(1<b.length){var c=b[0];a[c]=b[1]}else{var d=b[0];for(c in d)a[c]=d[c]}}
var rc=window.performance&&window.performance.timing&&window.performance.now&&window.__yt_experimental_now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()},sc="Microsoft Internet Explorer"==navigator.appName;var tc=r("yt.pubsub.instance_")||new G;G.prototype.subscribe=G.prototype.subscribe;G.prototype.unsubscribeByKey=G.prototype.oa;G.prototype.publish=G.prototype.F;G.prototype.clear=G.prototype.clear;q("yt.pubsub.instance_",tc,void 0);var uc=r("yt.pubsub.subscribedKeys_")||{};q("yt.pubsub.subscribedKeys_",uc,void 0);var vc=r("yt.pubsub.topicToKeys_")||{};q("yt.pubsub.topicToKeys_",vc,void 0);var wc=r("yt.pubsub.isSynchronous_")||{};q("yt.pubsub.isSynchronous_",wc,void 0);
var xc=r("yt.pubsub.skipSubId_")||null;q("yt.pubsub.skipSubId_",xc,void 0);function yc(a,b,c){var d=zc();if(d){var e=d.subscribe(a,function(){if(!xc||xc!=e){var d=arguments,h;h=function(){uc[e]&&b.apply(c||window,d)};
try{wc[a]?h():I(h,0)}catch(k){pc(k)}}},c);
uc[e]=!0;vc[a]||(vc[a]=[]);vc[a].push(e);return e}return 0}
function Ac(a){var b=zc();b&&("number"==typeof a?a=[a]:"string"==typeof a&&(a=[parseInt(a,10)]),z(a,function(a){b.unsubscribeByKey(a);delete uc[a]}))}
function K(a,b){var c=zc();return c?c.publish.apply(c,arguments):!1}
function Bc(a,b){wc[a]=!0;var c=zc();c&&c.publish.apply(c,arguments);wc[a]=!1}
function Cc(a){vc[a]&&(a=vc[a],z(a,function(a){uc[a]&&delete uc[a]}),a.length=0)}
function Dc(a){var b=zc();if(b)if(b.clear(a),a)Cc(a);else for(var c in vc)Cc(c)}
function zc(){return r("yt.pubsub.instance_")}
;function Ec(a,b){if(window.spf){var c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Fc,""),c=c.replace(Gc,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Hc(a,b)}
function Hc(a,b){var c=Ic(a),d=document.getElementById(c),e=d&&D(d,"loaded"),f=d&&!e;if(e)b&&b();else{if(b){var e=yc(c,b),h=""+ka(b);Jc[h]=e}f||(d=Kc(a,c,function(){D(d,"loaded")||(Nb(d,"loaded","true"),K(c),I(qa(Dc,c),0))}))}}
function Kc(a,b,c){var d=document.createElement("script");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
d.onreadystatechange=function(){switch(d.readyState){case "loaded":case "complete":d.onload()}};
d.src=a;a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(d,a.firstChild);return d}
function Lc(a,b){if(a&&b){var c=""+ka(b);(c=Jc[c])&&Ac(c)}}
function Ic(a){var b=document.createElement("a");Mb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Ka(a)}
var Fc=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Gc=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/,Jc={};var Mc=null;function Nc(){var a=H("BG_I",null),b=H("BG_IU",null),c=H("BG_P",void 0);b?Ec(b,function(){Mc=new botguard.bg(c)}):a&&(eval(a),Mc=new botguard.bg(c))}
function Oc(){return null!=Mc}
function Pc(){return Mc?Mc.invoke():null}
;function Qc(a,b){return Lb(b,null)}
;var Rc="StopIteration"in m?m.StopIteration:{message:"StopIteration",stack:""};function Sc(){}
Sc.prototype.next=function(){throw Rc;};
Sc.prototype.wa=function(){return this};
function Tc(a){if(a instanceof Sc)return a;if("function"==typeof a.wa)return a.wa(!1);if(ea(a)){var b=0,c=new Sc;c.next=function(){for(;;){if(b>=a.length)throw Rc;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Uc(a,b,c){if(ea(a))try{z(a,b,c)}catch(d){if(d!==Rc)throw d;}else{a=Tc(a);try{for(;;)b.call(c,a.next(),void 0,a)}catch(d){if(d!==Rc)throw d;}}}
function Vc(a){if(ea(a))return Xa(a);a=Tc(a);var b=[];Uc(a,function(a){b.push(a)});
return b}
;function Wc(a,b){this.h={};this.f=[];this.Ha=this.j=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a){a instanceof Wc?(c=a.ra(),d=a.V()):(c=kb(a),d=jb(a));for(var e=0;e<c.length;e++)this.set(c[e],d[e])}}
g=Wc.prototype;g.U=function(){return this.j};
g.V=function(){Xc(this);for(var a=[],b=0;b<this.f.length;b++)a.push(this.h[this.f[b]]);return a};
g.ra=function(){Xc(this);return this.f.concat()};
g.bb=function(a){for(var b=0;b<this.f.length;b++){var c=this.f[b];if(Yc(this.h,c)&&this.h[c]==a)return!0}return!1};
g.equals=function(a,b){if(this===a)return!0;if(this.j!=a.U())return!1;var c=b||Zc;Xc(this);for(var d,e=0;d=this.f[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function Zc(a,b){return a===b}
g.isEmpty=function(){return 0==this.j};
g.clear=function(){this.h={};this.Ha=this.j=this.f.length=0};
g.remove=function(a){return Yc(this.h,a)?(delete this.h[a],this.j--,this.Ha++,this.f.length>2*this.j&&Xc(this),!0):!1};
function Xc(a){if(a.j!=a.f.length){for(var b=0,c=0;b<a.f.length;){var d=a.f[b];Yc(a.h,d)&&(a.f[c++]=d);b++}a.f.length=c}if(a.j!=a.f.length){for(var e={},c=b=0;b<a.f.length;)d=a.f[b],Yc(e,d)||(a.f[c++]=d,e[d]=1),b++;a.f.length=c}}
g.get=function(a,b){return Yc(this.h,a)?this.h[a]:b};
g.set=function(a,b){Yc(this.h,a)||(this.j++,this.f.push(a),this.Ha++);this.h[a]=b};
g.forEach=function(a,b){for(var c=this.ra(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
g.clone=function(){return new Wc(this)};
g.wa=function(a){Xc(this);var b=0,c=this.Ha,d=this,e=new Sc;e.next=function(){if(c!=d.Ha)throw Error("The map has changed since the iterator was created");if(b>=d.f.length)throw Rc;var e=d.f[b++];return a?e:d.h[e]};
return e};
function Yc(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function $c(a){return a.U&&"function"==typeof a.U?a.U():ea(a)||v(a)?a.length:fb(a)}
function ad(a){if(a.V&&"function"==typeof a.V)return a.V();if(v(a))return a.split("");if(ea(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return jb(a)}
function bd(a){if(a.ra&&"function"==typeof a.ra)return a.ra();if(!a.V||"function"!=typeof a.V){if(ea(a)||v(a)){var b=[];a=a.length;for(var c=0;c<a;c++)b.push(c);return b}return kb(a)}}
function cd(a,b,c){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,c);else if(ea(a)||v(a))z(a,b,c);else for(var d=bd(a),e=ad(a),f=e.length,h=0;h<f;h++)b.call(c,e[h],d&&d[h],a)}
function dd(a,b){if("function"==typeof a.every)return a.every(b,void 0);if(ea(a)||v(a))return Oa(a,b,void 0);for(var c=bd(a),d=ad(a),e=d.length,f=0;f<e;f++)if(!b.call(void 0,d[f],c&&c[f],a))return!1;return!0}
;function ed(a){this.f=new Wc;a&&fd(this,a)}
function gd(a){var b=typeof a;return"object"==b&&a||"function"==b?"o"+ka(a):b.substr(0,1)+a}
g=ed.prototype;g.U=function(){return this.f.U()};
function fd(a,b){for(var c=ad(b),d=c.length,e=0;e<d;e++){var f=c[e];a.f.set(gd(f),f)}}
g.removeAll=function(a){a=ad(a);for(var b=a.length,c=0;c<b;c++)this.remove(a[c])};
g.remove=function(a){return this.f.remove(gd(a))};
g.clear=function(){this.f.clear()};
g.isEmpty=function(){return this.f.isEmpty()};
g.contains=function(a){a=gd(a);return Yc(this.f.h,a)};
g.V=function(){return this.f.V()};
g.clone=function(){return new ed(this)};
g.equals=function(a){return this.U()==$c(a)&&hd(this,a)};
function hd(a,b){var c=$c(b);if(a.U()>c)return!1;!(b instanceof ed)&&5<c&&(b=new ed(b));return dd(a,function(a){var c=b;return c.contains&&"function"==typeof c.contains?c.contains(a):c.bb&&"function"==typeof c.bb?c.bb(a):ea(c)||v(c)?B(c,a):ib(c,a)})}
g.wa=function(){return this.f.wa(!1)};function id(){return C("iPhone")&&!C("iPod")&&!C("iPad")}
;var jd=C("Opera"),L=C("Trident")||C("MSIE"),kd=C("Edge"),ld=C("Gecko")&&!(-1!=wb.toLowerCase().indexOf("webkit")&&!C("Edge"))&&!(C("Trident")||C("MSIE"))&&!C("Edge"),md=-1!=wb.toLowerCase().indexOf("webkit")&&!C("Edge"),nd=C("Macintosh"),od=C("Windows");function pd(){var a=m.document;return a?a.documentMode:void 0}
var qd;a:{var rd="",sd=function(){var a=wb;if(ld)return/rv\:([^\);]+)(\)|;)/.exec(a);if(kd)return/Edge\/([\d\.]+)/.exec(a);if(L)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(md)return/WebKit\/(\S+)/.exec(a);if(jd)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
sd&&(rd=sd?sd[1]:"");if(L){var td=pd();if(null!=td&&td>parseFloat(rd)){qd=String(td);break a}}qd=rd}var ud=qd,vd={};function wd(a){return vd[a]||(vd[a]=0<=Ia(ud,a))}
function xd(a){return Number(yd)>=a}
var zd=m.document,yd=zd&&L?pd()||("CSS1Compat"==zd.compatMode?parseInt(ud,10):5):void 0;function Ad(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}
function Bd(a){return eval("("+a+")")}
function M(a){return Cd(new Dd(void 0),a)}
function Dd(a){this.f=a}
function Cd(a,b){var c=[];Ed(a,b,c);return c.join("")}
function Ed(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(da(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),e=d[f],Ed(a,a.f?a.f.call(d,String(f),e):e,c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");f="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(e=b[d],"function"!=typeof e&&(c.push(f),Fd(d,c),c.push(":"),Ed(a,a.f?a.f.call(b,d,e):e,c),f=","));c.push("}");return}}switch(typeof b){case "string":Fd(b,
c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Gd={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Hd=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;function Fd(a,b){b.push('"',a.replace(Hd,function(a){var b=Gd[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Gd[a]=b);return b}),'"')}
;var Id=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;function Jd(a){return(a=a.match(Id)[3]||null)?decodeURI(a):a}
function Kd(a,b){if(a)for(var c=a.split("&"),d=0;d<c.length;d++){var e=c[d].indexOf("="),f=null,h=null;0<=e?(f=c[d].substring(0,e),h=c[d].substring(e+1)):f=c[d];b(f,h?ua(h):"")}}
function Ld(a){if(a[1]){var b=a[0],c=b.indexOf("#");0<=c&&(a.push(b.substr(c)),a[0]=b=b.substr(0,c));c=b.indexOf("?");0>c?a[1]="?":c==b.length-1&&(a[1]=void 0)}return a.join("")}
function Md(a,b,c){if(da(b))for(var d=0;d<b.length;d++)Md(a,String(b[d]),c);else null!=b&&c.push("&",a,""===b?"":"=",encodeURIComponent(String(b)))}
function Nd(a,b,c){for(c=c||0;c<b.length;c+=2)Md(b[c],b[c+1],a);return a}
function Od(a,b){for(var c in b)Md(c,b[c],a);return a}
function Pd(a){a=Od([],a);a[0]="";return a.join("")}
function Qd(a,b){return Ld(2==arguments.length?Nd([a],arguments[1],0):Nd([a],arguments,1))}
function Rd(a,b){return Ld(Od([a],b))}
;function Sd(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=ua(e[0]||""),e=ua(e[1]||"");f in b?da(b[f])?Ya(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
function Td(a,b){var c=a.split("#",2);a=c[0];var c=1<c.length?"#"+c[1]:"",d=a.split("?",2);a=d[0];var d=Sd(d[1]||""),e;for(e in b)d[e]=b[e];return Rd(a,d)+c}
function Ud(a){a=Jd(a);a=null===a?null:a.split(".").reverse();return(null===a?!1:"com"==a[0]&&a[1].match(/^youtube(?:-nocookie)?$/)?!0:!1)||(null===a?!1:"google"==a[1]?!0:"google"==a[2]?"au"==a[0]&&"com"==a[1]?!0:"uk"==a[0]&&"co"==a[1]?!0:!1:!1)}
;var Vd=null;"undefined"!=typeof XMLHttpRequest?Vd=function(){return new XMLHttpRequest}:"undefined"!=typeof ActiveXObject&&(Vd=function(){return new ActiveXObject("Microsoft.XMLHTTP")});
function Wd(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function Xd(a,b,c,d,e,f,h){function k(){4==(l&&"readyState"in l?l.readyState:0)&&b&&nc(b)(l)}
var l=Vd&&Vd();if(!("open"in l))return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;c=(c||"GET").toUpperCase();d=d||"";l.open(c,a,!0);f&&(l.responseType=f);h&&(l.withCredentials=!0);f="POST"==c;if(e=Yd(a,e))for(var n in e)l.setRequestHeader(n,e[n]),"content-type"==n.toLowerCase()&&(f=!1);f&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");l.send(d);return l}
function Yd(a,b){b=b||{};var c;c||(c=window.location.href);var d=a.match(Id)[1]||null,e=Jd(a);d&&e?(d=c,c=a.match(Id),d=d.match(Id),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?Jd(c)==e&&(Number(c.match(Id)[4]||null)||null)==(Number(a.match(Id)[4]||null)||null):!0;for(var f in Zd){if((e=d=H(Zd[f]))&&!(e=c)){var e=f,h=H("CORS_HEADER_WHITELIST")||{},k=Jd(a);e=k?(h=h[k])?B(h,e):!1:!0}e&&(b[f]=d)}return b}
function $d(a,b){var c=H("XSRF_FIELD_NAME",void 0),d;b.headers&&(d=b.headers["Content-Type"]);return!b.hf&&(!Jd(a)||b.withCredentials||Jd(a)==document.location.hostname)&&"POST"==b.method&&(!d||"application/x-www-form-urlencoded"==d)&&!(b.R&&b.R[c])}
function ae(a,b){var c=b.format||"JSON";b.jf&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var d=H("XSRF_FIELD_NAME",void 0),e=H("XSRF_TOKEN",void 0),f=b.hc;f&&(f[d]&&delete f[d],a=Td(a,f||{}));var h=b.kf||"",f=b.R;$d(a,b)&&(f||(f={}),f[d]=e);f&&v(h)&&(d=Sd(h),vb(d,f),h=Pd(d));var k=!1,l,n=Xd(a,function(a){if(!k){k=!0;l&&J(l);var d=Wd(a),e=null;if(d||400<=a.status&&500>a.status)e=be(c,a,b.gf);if(d)a:{switch(c){case "XML":d=
0==parseInt(e&&e.return_code,10);break a;case "RAW":d=!0;break a}d=!!e}var e=e||{},f=b.context||m;d?b.ca&&b.ca.call(f,a,e):b.onError&&b.onError.call(f,a,e);b.cc&&b.cc.call(f,a,e)}},b.method,h,b.headers,b.responseType,b.withCredentials);
b.kb&&0<b.timeout&&(l=I(function(){k||(k=!0,n.abort(),J(l),b.kb.call(b.context||m,n))},b.timeout));
return n}
function be(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=Bd(a));break;case "XML":if(b=(b=b.responseXML)?ce(b):null)d={},z(b.getElementsByTagName("*"),function(a){d[a.tagName]=de(a)})}c&&ee(d);
return d}
function ee(a){if(ia(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);c?a[b]=Qc(Bb("HTML that is escaped and sanitized server-side and passed through yt.net.ajax"),a[b]):ee(a[b])}}
function ce(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function de(a){var b="";z(a.childNodes,function(a){b+=a.nodeValue});
return b}
var Zd={"X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};var fe={},ge=0;function he(a,b){isNaN(b)&&(b=void 0);var c=r("yt.scheduler.instance.addJob");return c?c(a,0,b):void 0===b?(a(),NaN):I(a,b||0)}
;var ie=[],je=!1;function ke(){function a(){je=!0;"google_ad_status"in window?lc("DCLKSTAT",1):lc("DCLKSTAT",2)}
Ec("//static.doubleclick.net/instream/ad_status.js",a);ie.push(he(function(){je||"google_ad_status"in window||(Lc("//static.doubleclick.net/instream/ad_status.js",a),lc("DCLKSTAT",3))},5E3))}
function le(){return parseInt(H("DCLKSTAT",0),10)}
;function me(a){if(a.classList)return a.classList;a=a.className;return v(a)&&a.match(/\S+/g)||[]}
function ne(a,b){return a.classList?a.classList.contains(b):B(me(a),b)}
function oe(a,b){a.classList?a.classList.add(b):ne(a,b)||(a.className+=0<a.className.length?" "+b:b)}
function pe(a,b){a.classList?a.classList.remove(b):ne(a,b)&&(a.className=Ma(me(a),function(a){return a!=b}).join(" "))}
function qe(a,b,c){c?oe(a,b):pe(a,b)}
;function re(a,b){this.x=p(a)?a:0;this.y=p(b)?b:0}
re.prototype.clone=function(){return new re(this.x,this.y)};
re.prototype.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
re.prototype.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
re.prototype.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function se(a,b){this.width=a;this.height=b}
g=se.prototype;g.clone=function(){return new se(this.width,this.height)};
g.area=function(){return this.width*this.height};
g.isEmpty=function(){return!this.area()};
g.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};!ld&&!L||L&&xd(9)||ld&&wd("1.9.1");var te=L&&!wd("9");function ue(a){return a?new ve(we(a)):sa||(sa=new ve)}
function xe(a){return v(a)?document.getElementById(a):a}
function ye(a){var b=document;return v(a)?b.getElementById(a):a}
function ze(a){var b=document;return b.querySelectorAll&&b.querySelector?b.querySelectorAll("."+a):Ae(a,void 0)}
function Ae(a,b){var c,d,e,f;c=document;c=b||c;if(c.querySelectorAll&&c.querySelector&&a)return c.querySelectorAll(""+(a?"."+a:""));if(a&&c.getElementsByClassName){var h=c.getElementsByClassName(a);return h}h=c.getElementsByTagName("*");if(a){f={};for(d=e=0;c=h[d];d++){var k=c.className;"function"==typeof k.split&&B(k.split(/\s+/),a)&&(f[e++]=c)}f.length=e;return f}return h}
function Be(a){a=a.document;a=Ce(a)?a.documentElement:a.body;return new se(a.clientWidth,a.clientHeight)}
function De(a){var b=a.scrollingElement?a.scrollingElement:!md&&Ce(a)?a.documentElement:a.body||a.documentElement;a=a.parentWindow||a.defaultView;return L&&wd("10")&&a.pageYOffset!=b.scrollTop?new re(b.scrollLeft,b.scrollTop):new re(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)}
function Ce(a){return"CSS1Compat"==a.compatMode}
function Ee(a){for(var b;b=a.firstChild;)a.removeChild(b)}
function Fe(a){if(!a)return null;if(a.firstChild)return a.firstChild;for(;a&&!a.nextSibling;)a=a.parentNode;return a?a.nextSibling:null}
function Ge(a){if(!a)return null;if(!a.previousSibling)return a.parentNode;for(a=a.previousSibling;a&&a.lastChild;)a=a.lastChild;return a}
function we(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function He(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=b;else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=b}else{Ee(a);var c=we(a);a.appendChild(c.createTextNode(String(b)))}}
var Ie={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},Je={IMG:" ",BR:"\n"};function Ke(a){if(te&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];Le(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");te||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}
function Le(a,b,c){if(!(a.nodeName in Ie))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in Je)b.push(Je[a.nodeName]);else for(a=a.firstChild;a;)Le(a,b,c),a=a.nextSibling}
function Me(a){var b=Ne.jd;return b?Oe(a,function(a){return!b||v(a.className)&&B(a.className.split(/\s+/),b)},!0,void 0):null}
function Oe(a,b,c,d){c||(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null}
function ve(a){this.f=a||m.document||document}
ve.prototype.createElement=function(a){return this.f.createElement(a)};
ve.prototype.appendChild=function(a,b){a.appendChild(b)};
ve.prototype.isElement=function(a){return ia(a)&&1==a.nodeType};
ve.prototype.contains=function(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a};var Pe=md?"webkit":ld?"moz":L?"ms":jd?"o":"",Qe=r("yt.dom.getNextId_");if(!Qe){Qe=function(){return++Re};
q("yt.dom.getNextId_",Qe,void 0);var Re=0}function Se(){var a=document,b;Na(["fullscreenElement","fullScreenElement"],function(c){c in a?b=a[c]:(c=Pe+c.charAt(0).toUpperCase()+c.substr(1),b=c in a?a[c]:void 0);return!!b});
return b}
;function Te(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=null;if(a=a||window.event){this.event=a;for(var b in a)b in Ue||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==
this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey}}
Te.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Te.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Te.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};
var Ue={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};var ob=r("yt.events.listeners_")||{};q("yt.events.listeners_",ob,void 0);var Ve=r("yt.events.counter_")||{count:0};q("yt.events.counter_",Ve,void 0);function We(a,b,c,d){a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return nb(function(e){return e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})}
function N(a,b,c,d){if(!a||!a.addEventListener&&!a.attachEvent)return"";d=!!d;var e=We(a,b,c,d);if(e)return e;var e=++Ve.count+"",f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document),h;h=f?function(d){d=new Te(d);if(!Oe(d.relatedTarget,function(b){return b==a},!0))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new Te(b);
b.currentTarget=a;return c.call(a,b)};
h=nc(h);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,h,d)):a.attachEvent("on"+b,h);ob[e]=[a,b,c,h,d];return e}
function Xe(a){a&&("string"==typeof a&&(a=[a]),z(a,function(a){if(a in ob){var c=ob[a],d=c[0],e=c[1],f=c[3],c=c[4];d.removeEventListener?d.removeEventListener(e,f,c):d.detachEvent&&d.detachEvent("on"+e,f);delete ob[a]}}))}
;function Ye(){if(null==r("_lact",window)){var a=parseInt(H("LACT"),10),a=isFinite(a)?x()-Math.max(a,0):-1;q("_lact",a,window);-1==a&&Ze();N(document,"keydown",Ze);N(document,"keyup",Ze);N(document,"mousedown",Ze);N(document,"mouseup",Ze);yc("page-mouse",Ze);yc("page-scroll",Ze);yc("page-resize",Ze)}}
function Ze(){null==r("_lact",window)&&(Ye(),r("_lact",window));var a=x();q("_lact",a,window);K("USER_ACTIVE")}
function $e(){var a=r("_lact",window);return null==a?-1:Math.max(x()-a,0)}
;function af(){}
;function bf(a){this.f=a||{cookie:""}}
var cf=/\s*;\s*/;g=bf.prototype;g.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');p(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(x()+1E3*c)).toUTCString();this.f.cookie=a+"="+b+e+d+c+f};
g.get=function(a,b){for(var c=a+"=",d=(this.f.cookie||"").split(cf),e=0,f;f=d[e];e++){if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
g.remove=function(a,b,c){var d=p(this.get(a));this.set(a,"",0,b,c);return d};
g.ra=function(){return df(this).keys};
g.V=function(){return df(this).values};
g.isEmpty=function(){return!this.f.cookie};
g.U=function(){return this.f.cookie?(this.f.cookie||"").split(cf).length:0};
g.bb=function(a){for(var b=df(this).values,c=0;c<b.length;c++)if(b[c]==a)return!0;return!1};
g.clear=function(){for(var a=df(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function df(a){a=(a.f.cookie||"").split(cf);for(var b=[],c=[],d,e,f=0;e=a[f];f++)d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var ef=new bf("undefined"==typeof document?null:document);ef.h=3950;function ff(a,b,c){ef.set(""+a,b,c,"/","youtube.com")}
;function gf(a,b,c){var d=H("EVENT_ID");d&&(b||(b={}),b.ei||(b.ei=d));if(b){var d=H("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=Jd(window.location.href);e&&d.push(e);e=Jd(a);if(B(d,e)||!e&&0==a.lastIndexOf("/",0)){var f=a.match(Id),d=f[5],e=f[6],f=f[7],h="";d&&(h+=d);e&&(h+="?"+e);f&&(h+="#"+f);d=h;e=d.indexOf("#");if(d=0>e?d:d.substr(0,e))e=H("ST_BASE36",!0),f=H("ST_SHORT",!0)?"ST-":"s_tempdata-",d=f=e?f+Ka(d).toString(36):f+Ka(d),e=b?Pd(b):"",ff(d,e,5),b&&(b=b.itct||b.ved,d=r("yt.logging.screenreporter.storeParentElement"),
b&&d&&d(new af))}}if(c)return!1;(window.ytspf||{}).enabled?spf.navigate(a):(c=window.location,a=Rd(a,{})+"",a=a instanceof Cb?a:Gb(a),c.href=Eb(a));return!0}
;function hf(a){a=a||{};this.url=a.url||"";this.urlV9As2=a.url_v9as2||"";this.args=a.args||sb(jf);this.assets=a.assets||{};this.attrs=a.attrs||sb(kf);this.params=a.params||sb(lf);this.minVersion=a.min_version||"8.0.0";this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.f=a.messages||{}}
var jf={enablejsapi:1},kf={},lf={allowscriptaccess:"always",allowfullscreen:"true",bgcolor:"#000000"};function mf(a){a instanceof hf||(a=new hf(a));return a}
hf.prototype.clone=function(){var a=new hf,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==ca(c)?a[b]=sb(c):a[b]=c}return a};function nf(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}
g=nf.prototype;g.getHeight=function(){return this.bottom-this.top};
g.clone=function(){return new nf(this.top,this.right,this.bottom,this.left)};
g.contains=function(a){return this&&a?a instanceof nf?a.left>=this.left&&a.right<=this.right&&a.top>=this.top&&a.bottom<=this.bottom:a.x>=this.left&&a.x<=this.right&&a.y>=this.top&&a.y<=this.bottom:!1};
g.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
g.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
g.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};function of(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}
g=of.prototype;g.clone=function(){return new of(this.left,this.top,this.width,this.height)};
g.contains=function(a){return a instanceof of?this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height:a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height};
g.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function pf(a){pf[" "](a);return a}
pf[" "]=t;function qf(a,b){var c=we(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}
function rf(a,b){return qf(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}
function sf(a){var b;try{b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}L&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function tf(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a}
function uf(a){var b=vf;if("none"!=rf(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a}
function vf(a){var b=a.offsetWidth,c=a.offsetHeight,d=md&&!b&&!c;return p(b)&&!d||!a.getBoundingClientRect?new se(b,c):(a=sf(a),new se(a.right-a.left,a.bottom-a.top))}
function wf(a,b){if(/^\d+px?$/.test(b))return parseInt(b,10);var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;var e=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return e}
function xf(a,b){var c=a.currentStyle?a.currentStyle[b]:null;return c?wf(a,c):0}
var yf={thin:2,medium:4,thick:6};function zf(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null;return c in yf?yf[c]:wf(a,c)}
;var Af=C("Firefox"),Bf=id()||C("iPod"),Cf=C("iPad"),Df=C("Android")&&!(zb()||C("Firefox")||C("Opera")||C("Silk")),Ef=zb(),Ff=C("Safari")&&!(zb()||C("Coast")||C("Opera")||C("Edge")||C("Silk")||C("Android"))&&!(id()||C("iPad")||C("iPod"));function Gf(){var a;if(a=ef.get("PREF",void 0)){a=unescape(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Hf[d]=c.toString())}}}
ba(Gf);var Hf=r("yt.prefs.UserPrefs.prefs_")||{};q("yt.prefs.UserPrefs.prefs_",Hf,void 0);function If(a){if(/^f([1-9][0-9]*)$/.test(a))throw"ExpectedRegexMatch: "+a;}
function Jf(a){if(!/^\w+$/.test(a))throw"ExpectedRegexMismatch: "+a;}
function Kf(a){a=void 0!==Hf[a]?Hf[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Gf.prototype.get=function(a,b){Jf(a);If(a);var c=void 0!==Hf[a]?Hf[a].toString():null;return null!=c?c:b?b:""};
Gf.prototype.set=function(a,b){Jf(a);If(a);if(null==b)throw"ExpectedNotNull";Hf[a]=b.toString()};
function Lf(a,b){return!!((Kf("f"+(Math.floor(b/31)+1))||0)&1<<b%31)}
Gf.prototype.remove=function(a){Jf(a);If(a);delete Hf[a]};
Gf.prototype.clear=function(){Hf={}};function Mf(a,b){(a=xe(a))&&a.style&&(a.style.display=b?"":"none",qe(a,"hid",!b))}
function Nf(a){z(arguments,function(a){!ea(a)||a instanceof Element?Mf(a,!0):z(a,function(a){Nf(a)})})}
function Of(a){z(arguments,function(a){!ea(a)||a instanceof Element?Mf(a,!1):z(a,function(a){Of(a)})})}
;function Pf(){this.j=this.h=this.f=0;this.l="";var a=r("window.navigator.plugins"),b=r("window.navigator.mimeTypes"),a=a&&a["Shockwave Flash"],b=b&&b["application/x-shockwave-flash"],b=a&&b&&b.enabledPlugin&&a.description||"";if(a=b){var c=a.indexOf("Shockwave Flash");0<=c&&(a=a.substr(c+15));for(var c=a.split(" "),d="",a="",e=0,f=c.length;e<f;e++)if(d)if(a)break;else a=c[e];else d=c[e];d=d.split(".");c=parseInt(d[0],10)||0;d=parseInt(d[1],10)||0;e=0;if("r"==a.charAt(0)||"d"==a.charAt(0))e=parseInt(a.substr(1),
10)||0;a=[c,d,e]}else a=[0,0,0];this.l=b;b=a;this.f=b[0];this.h=b[1];this.j=b[2];if(0>=this.f){var h,k,l,n;if(sc)try{h=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(u){h=null}else l=document.body,n=document.createElement("object"),n.setAttribute("type","application/x-shockwave-flash"),h=l.appendChild(n);if(h&&"GetVariable"in h)try{k=h.GetVariable("$version")}catch(u){k=""}l&&n&&l.removeChild(n);(h=k||"")?(h=h.split(" ")[1].split(","),h=[parseInt(h[0],10)||0,parseInt(h[1],10)||0,parseInt(h[2],
10)||0]):h=[0,0,0];this.f=h[0];this.h=h[1];this.j=h[2]}}
ba(Pf);Pf.prototype.getVersion=function(){return[this.f,this.h,this.j]};
function Qf(a,b,c,d){b="string"==typeof b?b.split("."):[b,c,d];b[0]=parseInt(b[0],10)||0;b[1]=parseInt(b[1],10)||0;b[2]=parseInt(b[2],10)||0;return a.f>b[0]||a.f==b[0]&&a.h>b[1]||a.f==b[0]&&a.h==b[1]&&a.j>=b[2]}
function Rf(a){return-1<a.l.indexOf("Gnash")&&-1==a.l.indexOf("AVM2")||9==a.f&&1==a.h||9==a.f&&0==a.h&&1==a.j?!1:9<=a.f}
function Sf(a){return od?!Qf(a,11,2):nd?!Qf(a,11,3):!Rf(a)}
;function Tf(a,b,c){if(b){a=v(a)?ye(a):a;var d=sb(c.attrs);d.tabindex=0;var e=sb(c.params);e.flashvars=Pd(c.args);if(sc){d.classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";e.movie=b;b=document.createElement("object");for(var f in d)b.setAttribute(f,d[f]);for(f in e)d=document.createElement("param"),d.setAttribute("name",f),d.setAttribute("value",e[f]),b.appendChild(d)}else{d.type="application/x-shockwave-flash";d.src=b;b=document.createElement("embed");b.setAttribute("name",d.id);for(f in d)b.setAttribute(f,
d[f]);for(f in e)b.setAttribute(f,e[f])}e=document.createElement("div");e.appendChild(b);a.innerHTML=e.innerHTML}}
function Uf(a,b,c){if(a&&a.attrs&&a.attrs.id){a=mf(a);var d=!!b,e=xe(a.attrs.id),f=e?e.parentNode:null;if(e&&f){if(window!=window.top){var h=null;if(document.referrer){var k=document.referrer.substring(0,128);Ud(k)||(h=k)}else h="unknown";h&&(d=!0,a.args.framer=h)}h=Pf.getInstance();if(Qf(h,a.minVersion)){var k=Vf(a,h),l="";-1<navigator.userAgent.indexOf("Sony/COM2")||(l=e.getAttribute("src")||e.movie);(l!=k||d)&&Tf(f,k,a);Sf(h)&&Wf()}else Xf(f,a,h);c&&c()}else I(function(){Uf(a,b,c)},50)}}
function Xf(a,b,c){0==c.f&&b.fallback?b.fallback():0==c.f&&b.fallbackMessage?b.fallbackMessage():a.innerHTML='<div id="flash-upgrade">'+qc()+"</div>"}
function Vf(a,b){return Rf(b)&&a.url||(-1<navigator.userAgent.indexOf("Sony/COM2")&&!Qf(b,9,1,58)?!1:!0)&&a.urlV9As2||a.url}
function Wf(){var a=xe("flash10-promo-div"),b=Lf(Gf.getInstance(),107);a&&!b&&Nf(a)}
;function Yf(a){if(window.spf){var b=a.match(Zf);spf.style.load(a,b?b[1]:"",void 0)}else $f(a)}
function $f(a){var b=ag(a),c=document.getElementById(b),d=c&&D(c,"loaded");d||c&&!d||(c=bg(a,b,function(){D(c,"loaded")||(Nb(c,"loaded","true"),K(b),I(qa(Dc,b),0))}))}
function bg(a,b,c){var d=document.createElement("link");d.id=b;d.rel="stylesheet";d.onload=function(){c&&setTimeout(c,0)};
Mb(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function ag(a){var b=document.createElement("a");Mb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Ka(a)}
var Zf=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;var cg;var dg=wb,dg=dg.toLowerCase();if(-1!=dg.indexOf("android")){var eg=dg.match(/android\D*(\d\.\d)[^\;|\)]*[\;\)]/);if(eg)cg=Number(eg[1]);else{var fg={cupcake:1.5,donut:1.6,eclair:2,froyo:2.2,gingerbread:2.3,honeycomb:3,"ice cream sandwich":4,jellybean:4.1},gg=dg.match("("+kb(fg).join("|")+")");cg=gg?fg[gg[0]]:0}}else cg=void 0;var hg=Bf||Cf;var ig=['video/mp4; codecs="avc1.42001E, mp4a.40.2"','video/webm; codecs="vp8.0, vorbis"'],jg=['audio/mp4; codecs="mp4a.40.2"'];function kg(a){E.call(this);this.f=[];this.h=a||this}
y(kg,E);function lg(a,b,c,d){d=nc(w(d,a.h));b.addEventListener(c,d);a.f.push({target:b,name:c,Ob:d})}
kg.prototype.Gb=function(a){for(var b=0;b<this.f.length;b++)if(this.f[b]==a){this.f.splice(b,1);a.target.removeEventListener(a.name,a.Ob);break}};
function mg(a){for(;a.f.length;){var b=a.f.pop();b.target.removeEventListener(b.name,b.Ob)}}
kg.prototype.G=function(){mg(this);kg.I.G.call(this)};function ng(a,b){this.h=this.C=this.l="";this.B=null;this.o=this.f="";this.A=!1;var c;a instanceof ng?(this.A=p(b)?b:a.A,og(this,a.l),this.C=a.C,pg(this,a.h),qg(this,a.B),this.f=a.f,rg(this,a.j.clone()),this.o=a.o):a&&(c=String(a).match(Id))?(this.A=!!b,og(this,c[1]||"",!0),this.C=sg(c[2]||""),pg(this,c[3]||"",!0),qg(this,c[4]),this.f=sg(c[5]||"",!0),rg(this,c[6]||"",!0),this.o=sg(c[7]||"")):(this.A=!!b,this.j=new tg(null,0,this.A))}
ng.prototype.toString=function(){var a=[],b=this.l;b&&a.push(ug(b,vg,!0),":");var c=this.h;if(c||"file"==b)a.push("//"),(b=this.C)&&a.push(ug(b,vg,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.B,null!=c&&a.push(":",String(c));if(c=this.f)this.h&&"/"!=c.charAt(0)&&a.push("/"),a.push(ug(c,"/"==c.charAt(0)?wg:xg,!0));(c=this.j.toString())&&a.push("?",c);(c=this.o)&&a.push("#",ug(c,yg));return a.join("")};
ng.prototype.resolve=function(a){var b=this.clone(),c=!!a.l;c?og(b,a.l):c=!!a.C;c?b.C=a.C:c=!!a.h;c?pg(b,a.h):c=null!=a.B;var d=a.f;if(c)qg(b,a.B);else if(c=!!a.f){if("/"!=d.charAt(0))if(this.h&&!this.f)d="/"+d;else{var e=b.f.lastIndexOf("/");-1!=e&&(d=b.f.substr(0,e+1)+d)}e=d;if(".."==e||"."==e)d="";else if(-1!=e.indexOf("./")||-1!=e.indexOf("/.")){for(var d=0==e.lastIndexOf("/",0),e=e.split("/"),f=[],h=0;h<e.length;){var k=e[h++];"."==k?d&&h==e.length&&f.push(""):".."==k?((1<f.length||1==f.length&&
""!=f[0])&&f.pop(),d&&h==e.length&&f.push("")):(f.push(k),d=!0)}d=f.join("/")}else d=e}c?b.f=d:c=""!==a.j.toString();c?rg(b,sg(a.j.toString())):c=!!a.o;c&&(b.o=a.o);return b};
ng.prototype.clone=function(){return new ng(this)};
function og(a,b,c){a.l=c?sg(b,!0):b;a.l&&(a.l=a.l.replace(/:$/,""))}
function pg(a,b,c){a.h=c?sg(b,!0):b}
function qg(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.B=b}else a.B=null}
function rg(a,b,c){b instanceof tg?(a.j=b,zg(a.j,a.A)):(c||(b=ug(b,Ag)),a.j=new tg(b,0,a.A))}
function O(a,b,c){a.j.set(b,c)}
function Bg(a,b,c){da(c)||(c=[String(c)]);Cg(a.j,b,c)}
function Dg(a){O(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^x()).toString(36));return a}
function Eg(a){return a instanceof ng?a.clone():new ng(a,void 0)}
function Fg(a,b,c,d){var e=new ng(null,void 0);a&&og(e,a);b&&pg(e,b);c&&qg(e,c);d&&(e.f=d);return e}
function sg(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}
function ug(a,b,c){return v(a)?(a=encodeURI(a).replace(b,Gg),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}
function Gg(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)}
var vg=/[#\/\?@]/g,xg=/[\#\?:]/g,wg=/[\#\?]/g,Ag=/[\#\?@]/g,yg=/#/g;function tg(a,b,c){this.h=this.f=null;this.j=a||null;this.l=!!c}
function Hg(a){a.f||(a.f=new Wc,a.h=0,a.j&&Kd(a.j,function(b,c){Ig(a,ua(b),c)}))}
g=tg.prototype;g.U=function(){Hg(this);return this.h};
function Ig(a,b,c){Hg(a);a.j=null;b=Jg(a,b);var d=a.f.get(b);d||a.f.set(b,d=[]);d.push(c);a.h=a.h+1}
g.remove=function(a){Hg(this);a=Jg(this,a);return Yc(this.f.h,a)?(this.j=null,this.h=this.h-this.f.get(a).length,this.f.remove(a)):!1};
g.clear=function(){this.f=this.j=null;this.h=0};
g.isEmpty=function(){Hg(this);return 0==this.h};
function Kg(a,b){Hg(a);b=Jg(a,b);return Yc(a.f.h,b)}
g.bb=function(a){var b=this.V();return B(b,a)};
g.ra=function(){Hg(this);for(var a=this.f.V(),b=this.f.ra(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};
g.V=function(a){Hg(this);var b=[];if(v(a))Kg(this,a)&&(b=Wa(b,this.f.get(Jg(this,a))));else{a=this.f.V();for(var c=0;c<a.length;c++)b=Wa(b,a[c])}return b};
g.set=function(a,b){Hg(this);this.j=null;a=Jg(this,a);Kg(this,a)&&(this.h=this.h-this.f.get(a).length);this.f.set(a,[b]);this.h=this.h+1;return this};
g.get=function(a,b){var c=a?this.V(a):[];return 0<c.length?String(c[0]):b};
function Cg(a,b,c){a.remove(b);0<c.length&&(a.j=null,a.f.set(Jg(a,b),Xa(c)),a.h=a.h+c.length)}
g.toString=function(){if(this.j)return this.j;if(!this.f)return"";for(var a=[],b=this.f.ra(),c=0;c<b.length;c++)for(var d=b[c],e=encodeURIComponent(String(d)),d=this.V(d),f=0;f<d.length;f++){var h=e;""!==d[f]&&(h+="="+encodeURIComponent(String(d[f])));a.push(h)}return this.j=a.join("&")};
g.clone=function(){var a=new tg;a.j=this.j;this.f&&(a.f=this.f.clone(),a.h=this.h);return a};
function Jg(a,b){var c=String(b);a.l&&(c=c.toLowerCase());return c}
function zg(a,b){b&&!a.l&&(Hg(a),a.j=null,a.f.forEach(function(a,b){var e=b.toLowerCase();b!=e&&(this.remove(b),Cg(this,e,a))},a));
a.l=b}
g.extend=function(a){for(var b=0;b<arguments.length;b++)cd(arguments[b],function(a,b){Ig(this,b,a)},this)};var Lg="corp.google.com googleplex.com youtube.com youtube-nocookie.com youtubeeducation.com borg.google.com prod.google.com sandbox.google.com books.googleusercontent.com docs.google.com drive.google.com mail.google.com photos.google.com plus.google.com lh2.google.com picasaweb.google.com play.google.com googlevideo.com talkgadget.google.com survey.g.doubleclick.net youtube.googleapis.com vevo.com".split(" "),Mg="";
function Ng(a){return a&&a==Mg?!0:(new RegExp("^(https?:)?//([a-z0-9-]{1,63}\\.)*("+Lg.join("|").replace(/\./g,".")+")(:[0-9]+)?([/?#]|$)","i")).test(a)?(Mg=a,!0):!1}
;var Og={},Pg=0,Qg=r("yt.net.ping.workerUrl_")||null;q("yt.net.ping.workerUrl_",Qg,void 0);function Rg(a){try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")||a&&Sg(a)}catch(b){a&&Sg(a)}}
function Sg(a){var b=new Image,c=""+Pg++;Og[c]=b;b.onload=b.onerror=function(){delete Og[c]};
b.src=a}
;function P(a,b){this.version=a;this.args=b}
function Tg(a){if(!a.Ha){var b={};a.call(b);a.Ha=b.version}return a.Ha}
function Ug(a,b){function c(){a.apply(this,b.args)}
if(!b.args||!b.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");var d;try{d=Tg(a)}catch(e){}if(!d||b.version!=d)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");c.prototype=a.prototype;try{return new c}catch(e){throw e.message="yt.pubsub2.Data.deserialize(): "+e.message,e;}}
function Q(a,b){this.h=a;this.f=b}
Q.prototype.toString=function(){return this.h};var Vg=r("yt.pubsub2.instance_")||new G;G.prototype.subscribe=G.prototype.subscribe;G.prototype.unsubscribeByKey=G.prototype.oa;G.prototype.publish=G.prototype.F;G.prototype.clear=G.prototype.clear;q("yt.pubsub2.instance_",Vg,void 0);var Wg=r("yt.pubsub2.subscribedKeys_")||{};q("yt.pubsub2.subscribedKeys_",Wg,void 0);var Xg=r("yt.pubsub2.topicToKeys_")||{};q("yt.pubsub2.topicToKeys_",Xg,void 0);var Yg=r("yt.pubsub2.isAsync_")||{};q("yt.pubsub2.isAsync_",Yg,void 0);
q("yt.pubsub2.skipSubKey_",null,void 0);function R(a,b){var c=Zg();c&&c.publish.call(c,a.toString(),a,b)}
function $g(a,b,c){var d=Zg();if(!d)return 0;var e=d.subscribe(a.toString(),function(d,h){if(!window.yt.pubsub2.skipSubKey_||window.yt.pubsub2.skipSubKey_!=e){var k=function(){if(Wg[e])try{if(h&&a instanceof Q&&a!=d)try{h=Ug(a.f,h)}catch(k){throw k.message="yt.pubsub2 cross-binary conversion error for "+a.toString()+": "+k.message,k;}b.call(c||window,h)}catch(k){pc(k)}};
Yg[a.toString()]?r("yt.scheduler.instance")?he(k,void 0):I(k,0):k()}});
Wg[e]=!0;Xg[a.toString()]||(Xg[a.toString()]=[]);Xg[a.toString()].push(e);return e}
function ah(a){var b=Zg();b&&(ga(a)&&(a=[a]),z(a,function(a){b.unsubscribeByKey(a);delete Wg[a]}))}
function Zg(){return r("yt.pubsub2.instance_")}
;function bh(a){P.call(this,1,arguments)}
y(bh,P);var ch=new Q("timing-sent",bh);function dh(a){var b=a||window;if(!(b.performance&&b.performance.timing&&b.performance.getEntriesByType))return{Eb:0,Yc:0};a=Be(b||window);for(var c=[],d=b.document.getElementsByTagName("*"),e=0,f=d.length;e<f;e++){var h=d[e];if("IMG"==h.tagName||"IFRAME"==h.tagName){var k=eh(h,h.src,a);if(k){if("IFRAME"==h.tagName){var l;try{l=dh(h.contentWindow).Eb}catch(n){l=0}0<l&&(k.timing=l)}c.push(k)}}(k=b.getComputedStyle(h)["background-image"])&&(k=fh.exec(k))&&1<k.length&&(k=eh(h,k[1],a))&&c.push(k)}l=b.performance.getEntriesByType("resource");
h=b.performance.getEntriesByType("mark");d={};e=0;for(f=l.length;e<f;e++)k=l[e],d[k.name]=k.responseEnd;e=0;for(f=h.length;e<f;e++)k=h[e],"mark_iframe_loaded: "==k.name.slice(0,20)&&(d[k.name.slice(20)]=k.startTime);e=0;for(f=c.length;e<f;e++)h=c[e],h.timing||(h.timing=d[h.url]||0);b=gh(b,l);a=hh(b,a,c);h=c=0;if(a.length)for(d=l=0,e=a.length;d<e;d++)f=a[d],h=f.timing-h,0<h&&1>l&&(c+=(1-l)*h),h=f.timing,l=f.progress;return{Eb:Math.round(c||b),Yc:h}}
function eh(a,b,c){if(b&&a.getBoundingClientRect){var d=a.getBoundingClientRect();a=Math.max(d.top,0);var e=Math.min(d.right,c.width);c=Math.min(d.bottom,c.height);d=Math.max(d.left,0);if(c>a&&e>d)return new ih(a,e,c,d,b)}return null}
function gh(a,b){var c,d=a.performance.timing.navigationStart;if("msFirstPaint"in a.performance.timing)c=a.performance.timing.f-d;else if("chrome"in a&&"loadTimes"in a.chrome){var e=a.chrome.loadTimes(),f=e.firstPaintTime;if(0<f){var h=e.startLoadTime;"requestTime"in e&&(h=e.requestTime);f>=h&&(c=1E3*(f-h))}}if(void 0===c||0>c||12E4<c){c=a.performance.timing.responseStart-d;for(var k={},d=a.document.getElementsByTagName("head")[0].children,e=0,f=d.length;e<f;e++)h=d[e],"SCRIPT"==h.tagName&&h.src&&
!h.async?k[h.src]=!0:"LINK"==h.tagName&&"stylesheet"==h.rel&&h.href&&(k[h.href]=!0);b.some(function(a){if(!k[a.name]||"script"!=a.initiatorType&&"link"!=a.initiatorType)return!0;a=a.responseEnd;if(void 0===c||a>c)c=a})}return Math.max(c,0)||0}
function hh(a,b,c){for(var d={0:0},e=0,f=0,h=c.length;f<h;f++){var k=c[f],l=a;k.timing>a&&(l=k.timing);d[l]||(d[l]=0);k=(k.f-k.l)*(k.j-k.h);d[l]+=k;e+=k}f=b.width*b.height;0<f&&(f=.1*Math.max(f-e,0),a in d||(d[a]=0),d[a]+=f,e+=f);a=[];if(e){for(var n in d)b=new jh(parseFloat(n),d[n]),a.push(b);a.sort(function(a,b){return a.timing-b.timing});
f=d=0;for(h=a.length;f<h;f++)b=a[f],d+=b.area,b.progress=d/e}return a}
function ih(a,b,c,d,e){this.f=c;this.h=d;this.j=b;this.l=a;this.url=e}
function jh(a,b){this.area=b;this.timing=a}
var fh=/url\(["']?(http[^'"\)]+)['"]?\)/i;var kh={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile_polymer/mobile_polymer"]':"mpj",'link[rel="import"][name="mobile_polymer"]':"mph",'script[name="mobile-polymer-player/mobile-polymer-player"]':"mppj",'link[rel="stylesheet"][name="mobile-polymer-player"]':"mppc"},S=window.performance||window.mozPerformance||
window.msPerformance||window.webkitPerformance||{},lh=w(S.clearResourceTimings||S.webkitClearResourceTimings||S.mozClearResourceTimings||S.msClearResourceTimings||S.oClearResourceTimings||t,S),mh=S.mark?function(a){S.mark(a)}:t;
function nh(a){oh()[a]=rc();mh(a);var b;b=H("TIMING_ACTION",void 0);a=oh();if(r("yt.timing.ready_")&&b&&a._start&&ph()){b=!0;var c=H("TIMING_WAIT",[]);if(c.length)for(var d=0,e=c.length;d<e;++d)if(!(c[d]in a)){b=!1;break}if(b)if(c=oh(),a=qh().span,d=qh().info,b=r("yt.timing.reportbuilder_")){if(b=b(c,a,d,void 0))rh(b),sh()}else{var f=H("TIMING_ACTION",void 0),e=H("CSI_SERVICE_NAME","youtube");b={v:2,s:e,action:f};if(S.now&&S.timing){var h=S.timing.navigationStart+S.now(),h=Math.round(x()-h);d.yt_hrd=
h}var h=H("TIMING_INFO",{}),k;for(k in h)d[k]=h[k];k=d.srt;delete d.srt;var l;void 0===c.srt&&(k||0===k||(l=S.timing||{},k=Math.max(0,l.responseStart-l.navigationStart),isNaN(k)&&d.pt&&(k=d.pt)),k||0===k)&&(d.srt=Math.round(k));d.h5jse&&(h=window.location.protocol+r("ytplayer.config.assets.js"),(h=S.getEntriesByName?S.getEntriesByName(h)[0]:null)?d.h5jse=Math.round(d.h5jse-h.responseEnd):delete d.h5jse);c.aft=ph();h=c._start;if("cold"==d.yt_lt){l||(l=S.timing||{});var n;a:if(n=l,n.msFirstPaint)n=
Math.max(0,n.msFirstPaint);else{var u=window.chrome;if(u&&(u=u.loadTimes,ha(u))){var u=u(),fa=1E3*Math.min(u.requestTime||Infinity,u.startLoadTime||Infinity),fa=Infinity===fa?0:n.navigationStart-fa;n=Math.max(0,Math.round(1E3*u.firstPaintTime+fa)||0);break a}n=0}0<n&&n>h&&(c.fpt=n);n=a||qh().span;u=l.redirectEnd-l.redirectStart;0<u&&(n.rtime_=u);u=l.domainLookupEnd-l.domainLookupStart;0<u&&(n.dns_=u);u=l.connectEnd-l.connectStart;0<u&&(n.tcp_=u);u=l.connectEnd-l.secureConnectionStart;l.secureConnectionStart>=
l.navigationStart&&0<u&&(n.stcp_=u);u=l.responseStart-l.requestStart;0<u&&(n.req_=u);u=l.responseEnd-l.responseStart;0<u&&(n.rcv_=u);S.getEntriesByType&&th(c);(l=H("SPEEDINDEX_FOR_ACTIONS",void 0))&&-1<l.indexOf(f)&&(l=rc(),f=dh(),n=rc(),0<f.Eb&&(d.si=f.Eb,c.vsc=uh(f.Yc),c.sics=l,c.sice=n));l=[];if(document.querySelector&&S&&S.getEntriesByName)for(var la in kh)if(f=document.querySelector(la))n="",u=f.nodeName,"SCRIPT"==u?n=f.src:"LINK"==u&&(n=f.href),n&&(f=S.getEntriesByName(n))&&f[0]&&l.push(kh[la]+
"."+Math.round(f[0].duration));l.length&&(d.rs=l.join(","))}f=oh();la=f.pbr;l=f.vc;f=f.pbs;la&&l&&f&&la<l&&l<f&&1==qh().info.yt_vis&&"youtube"==e&&(qh().info.yt_lt="hot_bg",la=c.vc,e=c.pbs,delete c.aft,a.aft=Math.round(e-la));(la=H("PREVIOUS_ACTION"))&&(d.pa=la);d.p=H("CLIENT_PROTOCOL")||"unknown";d.t=H("CLIENT_TRANSPORT")||"unknown";window.navigator&&window.navigator.sendBeacon&&(d.ba=1);for(var Qb in d)"_"!=Qb.charAt(0)&&(b[Qb]=d[Qb]);c.ps=rc();Qb={};var d=[],Vb;for(Vb in c)"_"!=Vb.charAt(0)&&(n=
Math.max(Math.round(c[Vb]-h),0),Qb[Vb]=n,d.push(Vb+"."+n));b.rt=d.join(",");Vb=b;var c=[],rb;for(rb in a)"_"!=rb.charAt(0)&&c.push(rb+"."+Math.round(a[rb]));Vb.it=c.join(",");(rb=r("ytdebug.logTiming"))&&rb(b,Qb,a);sh();H("EXP_DEFER_CSI_PING")?(vh(),q("yt.timing.deferredPingArgs_",b,void 0),rb=I(vh,0),q("yt.timing.deferredPingTimer_",rb,void 0)):rh(b);R(ch,new bh(Qb.aft+(k||0)))}}}
function sh(){wh();lh();q("yt.timing.pingSent_",!1,void 0)}
function ph(){var a=oh();if(a.aft)return a.aft;for(var b=H("TIMING_AFT_KEYS",["ol"]),c=b.length,d=0;d<c;d++){var e=a[b[d]];if(e)return e}return NaN}
function uh(a){return Math.round(S.timing.navigationStart+a)}
function th(a){var b=window.location.protocol,c=S.getEntriesByType("resource"),d=c.filter(function(a){return 0==a.name.indexOf(b+"//fonts.googleapis.com/css?family=")})[0],c=c.filter(function(a){return 0==a.name.indexOf(b+"//fonts.gstatic.com/s/")}).reduce(function(a,b){return b.duration>a.duration?b:a},{duration:0});
d&&0<d.startTime&&0<d.responseEnd&&(a.wfcs=uh(d.startTime),a.wfce=uh(d.responseEnd));c&&0<c.startTime&&0<c.responseEnd&&(a.wffs=uh(c.startTime),a.wffe=uh(c.responseEnd))}
function rh(a){if(H("DEBUG_CSI_DATA")){var b=r("yt.timing.csiData");b||(b=[],q("yt.timing.csiData",b,void 0));b.push({page:location.href,time:new Date,args:a})}H("EXP_DEFER_CSI_PING")&&(J(r("yt.timing.deferredPingTimer_")),q("yt.timing.deferredPingArgs_",null,void 0));var c="https:"==window.location.protocol?"https://gg.google.com/csi":"http://csi.gstatic.com/csi",c=H("CSI_LOG_WITH_YT")?"/csi_204":c,b="",d;for(d in a)b+="&"+d+"="+a[d];a=c+"?"+b.substring(1);b=H("DOUBLE_LOG_CSI")?"/csi_204?"+b.substring(1):
null;window.navigator&&window.navigator.sendBeacon?(Rg(a),b&&Rg(b)):(a&&Sg(a),b&&b&&Sg(b));q("yt.timing.pingSent_",!0,void 0)}
function vh(a){if(H("EXP_DEFER_CSI_PING")){var b=r("yt.timing.deferredPingArgs_");b&&(a&&(b.yt_fss=a),rh(b))}}
function oh(){return qh().tick}
function qh(){return r("ytcsi.data_")||wh()}
function wh(){var a={tick:{},span:{},info:{}};q("ytcsi.data_",a,void 0);return a}
;var xh={"api.invalidparam":2,auth:150,"drm.auth":150,heartbeat:150,"html5.unsupportedads":5,"fmt.noneavailable":5,"fmt.decode":5,"fmt.unplayable":5,"html5.missingapi":5,"drm.unavailable":5};function yh(a,b){E.call(this);this.o=this.l=a;this.Z=b;this.C=!1;this.api={};this.va=this.T=null;this.ha=new G;gc(this,qa(F,this.ha));this.j={};this.A=this.Ba=this.h=this.Mb=this.f=null;this.qa=!1;this.J=this.B=this.P=this.S=null;this.Pa={};this.qd=["onReady"];this.ta=new kg(this);gc(this,qa(F,this.ta));this.Nb=null;this.nc=NaN;this.ua={};zh(this);this.xa("onDetailedError",w(this.Zd,this));this.xa("onTabOrderChange",w(this.sd,this));this.xa("onTabAnnounce",w(this.oc,this));this.xa("WATCH_LATER_VIDEO_ADDED",
w(this.$d,this));this.xa("WATCH_LATER_VIDEO_REMOVED",w(this.ae,this));Af||(this.xa("onMouseWheelCapture",w(this.Wd,this)),this.xa("onMouseWheelRelease",w(this.Xd,this)));this.xa("onAdAnnounce",w(this.oc,this));this.L=new kg(this);gc(this,qa(F,this.L));this.Lb=!1;this.$a=null}
y(yh,E);var Ah=["drm.unavailable","fmt.noneavailable","html5.missingapi","html5.unsupportedads","html5.unsupportedlive"];g=yh.prototype;g.jc=function(a,b){this.isDisposed()||(Bh(this,a),Ch(this,b),this.C&&Dh(this))};
function Bh(a,b){a.Mb=b;a.f=b.clone();a.h=a.f.attrs.id||a.h;"video-player"==a.h&&(a.h=a.Z,a.f.attrs.id=a.Z);a.o.id==a.h&&(a.h+="-player",a.f.attrs.id=a.h);a.f.args.enablejsapi="1";a.f.args.playerapiid=a.Z;a.Ba||(a.Ba=Eh(a,a.f.args.jsapicallback||"onYouTubePlayerReady"));a.f.args.jsapicallback=null;var c=a.f.attrs.width;c&&(a.o.style.width=tf(Number(c)||c,!0));if(c=a.f.attrs.height)a.o.style.height=tf(Number(c)||c,!0)}
g.Cd=function(){return this.Mb};
function Dh(a){a.f.loaded||(a.f.loaded=!0,"0"!=a.f.args.autoplay?a.api.loadVideoByPlayerVars(a.f.args):a.api.cueVideoByPlayerVars(a.f.args))}
function Fh(a){if(!p(a.f.disable.flash)){var b=a.f.disable,c;c=Qf(Pf.getInstance(),a.f.minVersion);b.flash=!c}return!a.f.disable.flash}
function Gh(a,b){if((!b||(5!=(xh[b.errorCode]||5)?0:-1!=Ah.indexOf(b.errorCode)))&&Fh(a)){var c=Hh(a);c&&c.stopVideo&&c.stopVideo();var d=a.f;c&&c.getUpdatedConfigurationData&&(c=c.getUpdatedConfigurationData(),d=mf(c));d.args.autoplay=1;d.args.html5_unavailable="1";Bh(a,d);Ch(a,"flash")}}
function Ch(a,b){if(!a.isDisposed()){if(!b){var c;if(!(c=!a.f.html5&&Fh(a))){if(!p(a.f.disable.html5)){var d;c=!0;void 0!=a.f.args.deviceHasDisplay&&(c=a.f.args.deviceHasDisplay);if(2.2==cg)d=!0;else{a:{var e=c;c=r("yt.player.utils.videoElement_");c||(c=document.createElement("video"),q("yt.player.utils.videoElement_",c,void 0));try{if(c.canPlayType)for(var e=e?ig:jg,f=0;f<e.length;f++)if(c.canPlayType(e[f])){d=null;break a}d="fmt.noneavailable"}catch(h){d="html5.missingapi"}}d=!d}d&&(d=Ih(a)||a.f.assets.js);
a.f.disable.html5=!d;d||(a.f.args.html5_unavailable="1")}c=!!a.f.disable.html5}b=c?Fh(a)?"flash":"unsupported":"html5"}("flash"==b?a.Ie:"html5"==b?a.Je:a.Ke).call(a)}}
function Ih(a){var b=!0,c=Hh(a);c&&a.f&&(a=a.f,b=D(c,"version")==a.assets.js);return b&&!!r("yt.player.Application.create")}
g.Je=function(){if(!this.qa){var a=Ih(this);a&&"html5"==Jh(this)?(this.A="html5",this.C||this.Va()):(Kh(this),this.A="html5",a&&this.P?(this.l.appendChild(this.P),this.Va()):(this.f.loaded=!0,this.S=w(function(){var a=this.l,c=this.f.clone();r("yt.player.Application.create")(a,c);this.Va()},this),this.qa=!0,a?this.S():(Ec(this.f.assets.js,this.S),Yf(this.f.assets.css))))}};
g.Ie=function(){var a=this.f.clone();if(!this.B){var b=Hh(this);b&&(this.B=document.createElement("span"),this.B.tabIndex=0,lg(this.ta,this.B,"focus",this.Ec),this.J=document.createElement("span"),this.J.tabIndex=0,lg(this.ta,this.J,"focus",this.Ec),b.parentNode&&b.parentNode.insertBefore(this.B,b),b.parentNode&&b.parentNode.insertBefore(this.J,b.nextSibling))}a.attrs.width=a.attrs.width||"100%";a.attrs.height=a.attrs.height||"100%";if("flash"==Jh(this))this.A="flash",this.C||Uf(a,!1,w(this.Va,this));
else{Kh(this);this.A="flash";this.f.loaded=!0;b=this.l;b=v(b)?ye(b):b;a=mf(a);if(window!=window.top){var c=null;document.referrer&&(c=document.referrer.substring(0,128));a.args.framer=c}c=Pf.getInstance();Qf(c,a.minVersion)?(c=Vf(a,c),Tf(b,c,a)):Xf(b,a,c);this.Va()}};
g.Ec=function(){Hh(this).focus()};
function Hh(a){var b=xe(a.h);!b&&a.o&&a.o.querySelector&&(b=a.o.querySelector("#"+a.h));return b}
g.Va=function(){if(!this.isDisposed()){var a=Hh(this),b=!1;try{a&&a.getApiInterface&&a.getApiInterface()&&(b=!0)}catch(f){}if(b)if(this.qa=!1,a.isNotServable&&a.isNotServable(this.f.args.video_id))Gh(this);else{zh(this);this.C=!0;a=Hh(this);a.addEventListener&&(this.T=Lh(this,a,"addEventListener"));a.removeEventListener&&(this.va=Lh(this,a,"removeEventListener"));for(var b=a.getApiInterface(),b=b.concat(a.getInternalApiInterface()),c=0;c<b.length;c++){var d=b[c];this.api[d]||(this.api[d]=Lh(this,
a,d))}for(var e in this.j)this.T(e,this.j[e]);Dh(this);this.Ba&&this.Ba(this.api);this.ha.F("onReady",this.api)}else this.nc=I(w(this.Va,this),50)}};
function Lh(a,b,c){var d=b[c];return function(){try{return a.Nb=null,d.apply(b,arguments)}catch(e){"Bad NPObject as private data!"!=e.message&&"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.Nb=e,pc(e,"WARNING"))}}}
function zh(a){a.C=!1;if(a.va)for(var b in a.j)a.va(b,a.j[b]);for(var c in a.ua)J(parseInt(c,10));a.ua={};a.T=null;a.va=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=w(a.xa,a);a.api.removeEventListener=w(a.ve,a);a.api.destroy=w(a.dispose,a);a.api.getLastError=w(a.Dd,a);a.api.getPlayerType=w(a.Ed,a);a.api.getCurrentVideoConfig=w(a.Cd,a);a.api.loadNewVideoConfig=w(a.jc,a);a.api.isReady=w(a.Ve,a)}
g.Ve=function(){return this.C};
g.xa=function(a,b){if(!this.isDisposed()){var c=Eh(this,b);if(c){if(!B(this.qd,a)&&!this.j[a]){var d=Mh(this,a);this.T&&this.T(a,d)}this.ha.subscribe(a,c);"onReady"==a&&this.C&&I(qa(c,this.api),0)}}};
g.ve=function(a,b){if(!this.isDisposed()){var c=Eh(this,b);c&&this.ha.unsubscribe(a,c)}};
function Eh(a,b){var c=b;if("string"==typeof b){if(a.Pa[b])return a.Pa[b];c=function(){var a=r(b);a&&a.apply(m,arguments)};
a.Pa[b]=c}return c?c:null}
function Mh(a,b){var c="ytPlayer"+b+a.Z;a.j[b]=c;m[c]=function(c){var e=I(function(){if(!a.isDisposed()){a.ha.F(b,c);var f=a.ua,h=String(e);h in f&&delete f[h]}},0);
qb(a.ua,String(e))};
return c}
g.sd=function(a){a=a?Ge:Fe;for(var b=a(document.activeElement);b&&(1!=b.nodeType||b==this.B||b==this.J||(b.focus(),b!=document.activeElement));)b=a(b)};
g.oc=function(a){K("a11y-announce",a)};
g.Zd=function(a){Gh(this,a)};
g.$d=function(a){K("WATCH_LATER_VIDEO_ADDED",a)};
g.ae=function(a){K("WATCH_LATER_VIDEO_REMOVED",a)};
g.Wd=function(){this.Lb||(Ef?(this.$a=De(document),lg(this.L,window,"scroll",this.qe),lg(this.L,this.l,"touchmove",this.ke)):(lg(this.L,this.l,"mousewheel",this.Hc),lg(this.L,this.l,"wheel",this.Hc)),this.Lb=!0)};
g.Xd=function(){mg(this.L);this.Lb=!1};
g.Hc=function(a){a=a||window.event;a.returnValue=!1;a.preventDefault&&a.preventDefault()};
g.qe=function(){window.scrollTo(this.$a.x,this.$a.y)};
g.ke=function(a){a.preventDefault()};
g.Ke=function(){Kh(this);this.A="unsupported";var a='Adobe Flash Player or an HTML5 supported browser is required for video playback. <br> <a href="http://get.adobe.com/flashplayer/">Get the latest Flash Player</a> <br> <a href="/html5">Learn more about upgrading to an HTML5 browser</a>',b=navigator.userAgent.match(/Version\/(\d).*Safari/);b&&5<=parseInt(b[1],10)&&(a='Adobe Flash Player or QuickTime is required for video playback. <br> <a href="http://get.adobe.com/flashplayer/"> Get the latest Flash Player</a> <br> <a href="http://www.apple.com/quicktime/download/">Get the latest version of QuickTime</a>');
b=this.f.f.player_fallback||a;a=xe("player-unavailable");if(xe("unavailable-submessage")&&a){xe("unavailable-submessage").innerHTML=b;var b=a||document,c=null;b.getElementsByClassName?c=b.getElementsByClassName("icon")[0]:b.querySelectorAll&&b.querySelector?c=b.querySelector(".icon"):c=Ae("icon",a)[0];if(c=b=c||null)c=b?b.dataset?Ob("icon")in b.dataset:b.hasAttribute?!!b.hasAttribute("data-icon"):!!b.getAttribute("data-icon"):!1;c&&(b.src=D(b,"icon"));a.style.display="";oe(xe("player"),"off-screen-trigger")}};
g.Ed=function(){return this.A||Jh(this)};
g.Dd=function(){return this.Nb};
function Jh(a){return(a=Hh(a))?"div"==a.tagName.toLowerCase()?"html5":"flash":null}
function Kh(a){nh("dcp");a.cancel();zh(a);a.A=null;a.f&&(a.f.loaded=!1);var b=Hh(a);"html5"==Jh(a)?a.P=b:b&&b.destroy&&b.destroy();Ee(a.l);mg(a.ta);a.B=null;a.J=null}
g.cancel=function(){this.S&&Lc(this.f.assets.js,this.S);J(this.nc);this.qa=!1};
g.G=function(){Kh(this);if(this.P&&this.f)try{this.P.destroy()}catch(b){pc(b)}this.Pa=null;for(var a in this.j)m[this.j[a]]=null;this.Mb=this.f=this.api=null;delete this.l;delete this.o;yh.I.G.call(this)};var Nh={},Oh="player_uid_"+(1E9*Math.random()>>>0);function Ph(a,b){a=v(a)?ye(a):a;b=mf(b);var c=Oh+"_"+ka(a),d=Nh[c];if(d)return d.jc(b),d.api;d=new yh(a,c);Nh[c]=d;K("player-added",d.api);gc(d,qa(Qh,d));I(function(){d.jc(b)},0);
return d.api}
function Qh(a){Nh[a.Z]=null}
function Rh(a){a=xe(a);if(!a)return null;var b=Oh+"_"+ka(a),c=Nh[b];c||(c=new yh(a,b),Nh[b]=c);return c.api}
;var Sh=r("yt.abuse.botguardInitialized")||Oc;q("yt.abuse.botguardInitialized",Sh,void 0);var Th=r("yt.abuse.invokeBotguard")||Pc;q("yt.abuse.invokeBotguard",Th,void 0);var Uh=r("yt.abuse.dclkstatus.checkDclkStatus")||le;q("yt.abuse.dclkstatus.checkDclkStatus",Uh,void 0);var Vh=r("yt.player.exports.navigate")||gf;q("yt.player.exports.navigate",Vh,void 0);var Wh=r("yt.player.embed")||Ph;q("yt.player.embed",Wh,void 0);var Xh=r("yt.player.getPlayerByElement")||Rh;q("yt.player.getPlayerByElement",Xh,void 0);
var Yh=r("yt.util.activity.init")||Ye;q("yt.util.activity.init",Yh,void 0);var Zh=r("yt.util.activity.getTimeSinceActive")||$e;q("yt.util.activity.getTimeSinceActive",Zh,void 0);var $h=r("yt.util.activity.setTimestamp")||Ze;q("yt.util.activity.setTimestamp",$h,void 0);function ai(a){P.call(this,1,arguments);this.f=a}
y(ai,P);function bi(a){P.call(this,1,arguments);this.f=a}
y(bi,P);function ci(a,b){P.call(this,1,arguments);this.f=a;this.h=b}
y(ci,P);function di(a,b,c,d,e){P.call(this,2,arguments);this.h=a;this.f=b;this.l=c||null;this.j=d||null;this.source=e||null}
y(di,P);function ei(a,b,c){P.call(this,1,arguments);this.f=a;this.subscriptionId=b}
y(ei,P);function fi(a,b,c,d,e,f,h){P.call(this,1,arguments);this.h=a;this.subscriptionId=b;this.f=c;this.o=d||null;this.l=e||null;this.j=f||null;this.source=h||null}
y(fi,P);
var gi=new Q("subscription-batch-subscribe",ai),hi=new Q("subscription-batch-unsubscribe",ai),ii=new Q("subscription-pref-email",ci),ji=new Q("subscription-subscribe",di),ki=new Q("subscription-subscribe-loading",bi),li=new Q("subscription-subscribe-loaded",bi),mi=new Q("subscription-subscribe-success",ei),ni=new Q("subscription-subscribe-external",di),oi=new Q("subscription-unsubscribe",fi),pi=new Q("subscription-unsubscirbe-loading",bi),qi=new Q("subscription-unsubscribe-loaded",bi),ri=new Q("subscription-unsubscribe-success",
bi),si=new Q("subscription-external-unsubscribe",fi),ti=new Q("subscription-enable-ypc",bi),ui=new Q("subscription-disable-ypc",bi);function vi(a,b){var c=document.location.protocol+"//"+document.domain+"/post_login";b&&(c=Qd(c,"mode",b));c=Qd("/signin?context=popup","next",c);c=Qd(c,"feature","sub_button");if(c=window.open(c,"loginPopup","width=375,height=440,resizable=yes,scrollbars=yes",!0)){var d=yc("LOGGED_IN",function(b){Ac(H("LOGGED_IN_PUBSUB_KEY",void 0));lc("LOGGED_IN",!0);a(b)});
lc("LOGGED_IN_PUBSUB_KEY",d);c.moveTo((screen.width-375)/2,(screen.height-440)/2)}}
q("yt.pubsub.publish",K,void 0);function wi(){var a=H("PLAYER_CONFIG");return a&&a.args&&void 0!==a.args.authuser?!0:!(!H("SESSION_INDEX")&&!H("LOGGED_IN"))}
;var xi={},yi="ontouchstart"in document;function zi(a,b,c){var d;switch(a){case "mouseover":case "mouseout":d=3;break;case "mouseenter":case "mouseleave":d=9}return Oe(c,function(a){return ne(a,b)},!0,d)}
function Ai(a){var b="mouseover"==a.type&&"mouseenter"in xi||"mouseout"==a.type&&"mouseleave"in xi,c=a.type in xi||b;if("HTML"!=a.target.tagName&&c){if(b){var b="mouseover"==a.type?"mouseenter":"mouseleave",c=xi[b],d;for(d in c.ga){var e=zi(b,d,a.target);e&&!Oe(a.relatedTarget,function(a){return a==e},!0)&&c.F(d,e,b,a)}}if(b=xi[a.type])for(d in b.ga)(e=zi(a.type,d,a.target))&&b.F(d,e,a.type,a)}}
N(document,"blur",Ai,!0);N(document,"change",Ai,!0);N(document,"click",Ai);N(document,"focus",Ai,!0);N(document,"mouseover",Ai);N(document,"mouseout",Ai);N(document,"mousedown",Ai);N(document,"keydown",Ai);N(document,"keyup",Ai);N(document,"keypress",Ai);N(document,"cut",Ai);N(document,"paste",Ai);yi&&(N(document,"touchstart",Ai),N(document,"touchend",Ai),N(document,"touchcancel",Ai));function Bi(a){this.o=a;this.j={};this.Ab=[];this.l=[]}
function T(a,b){return"yt-uix"+(a.o?"-"+a.o:"")+(b?"-"+b:"")}
Bi.prototype.unregister=function(){Ac(this.Ab);this.Ab.length=0;ah(this.l);this.l.length=0};
Bi.prototype.init=t;Bi.prototype.dispose=t;function Ci(a,b,c){a.l.push($g(b,c,a))}
function Di(a,b,c){var d=T(a,void 0),e=w(c,a);b in xi||(xi[b]=new G);xi[b].subscribe(d,e);a.j[c]=e}
function Ei(a,b,c){if(b in xi){var d=xi[b];d.unsubscribe(T(a,void 0),a.j[c]);0>=d.U()&&(d.dispose(),delete xi[b])}delete a.j[c]}
function Fi(a,b){Nb(a,"tooltip-text",b)}
;function Gi(){Bi.call(this,"tooltip");this.f=0;this.h={}}
y(Gi,Bi);ba(Gi);g=Gi.prototype;g.register=function(){Di(this,"mouseover",this.wb);Di(this,"mouseout",this.Na);Di(this,"focus",this.xc);Di(this,"blur",this.qc);Di(this,"click",this.Na);Di(this,"touchstart",this.Xc);Di(this,"touchend",this.Fb);Di(this,"touchcancel",this.Fb)};
g.unregister=function(){Ei(this,"mouseover",this.wb);Ei(this,"mouseout",this.Na);Ei(this,"focus",this.xc);Ei(this,"blur",this.qc);Ei(this,"click",this.Na);Ei(this,"touchstart",this.Xc);Ei(this,"touchend",this.Fb);Ei(this,"touchcancel",this.Fb);this.dispose();Gi.I.unregister.call(this)};
g.dispose=function(){for(var a in this.h)this.Na(this.h[a]);this.h={}};
g.wb=function(a){if(!(this.f&&1E3>x()-this.f)){var b=parseInt(D(a,"tooltip-hide-timer"),10);b&&(Pb(a,"tooltip-hide-timer"),J(b));var b=w(function(){Hi(this,a);Pb(a,"tooltip-show-timer")},this),c=parseInt(D(a,"tooltip-show-delay"),10)||0,b=I(b,c);
Nb(a,"tooltip-show-timer",b.toString());a.title&&(Fi(a,Ii(a)),a.title="");b=ka(a).toString();this.h[b]=a}};
g.Na=function(a){var b=parseInt(D(a,"tooltip-show-timer"),10);b&&(J(b),Pb(a,"tooltip-show-timer"));b=w(function(){if(a){var b=xe(Ji(this,a));b&&(Ki(b),b&&b.parentNode&&b.parentNode.removeChild(b),Pb(a,"content-id"));(b=xe(Ji(this,a,"arialabel")))&&b.parentNode&&b.parentNode.removeChild(b)}Pb(a,"tooltip-hide-timer")},this);
b=I(b,50);Nb(a,"tooltip-hide-timer",b.toString());if(b=D(a,"tooltip-text"))a.title=b;b=ka(a).toString();delete this.h[b]};
g.xc=function(a){this.f=0;this.wb(a)};
g.qc=function(a){this.f=0;this.Na(a)};
g.Xc=function(a,b,c){c.changedTouches&&(this.f=0,a=zi(b,T(this),c.changedTouches[0].target),this.wb(a))};
g.Fb=function(a,b,c){c.changedTouches&&(this.f=x(),a=zi(b,T(this),c.changedTouches[0].target),this.Na(a))};
function Li(a,b){Fi(a,b);var c=D(a,"content-id");(c=xe(c))&&He(c,b)}
function Ii(a){return D(a,"tooltip-text")||a.title}
function Hi(a,b){if(b){var c=Ii(b);if(c){var d=xe(Ji(a,b));if(!d){d=document.createElement("div");d.id=Ji(a,b);d.className=T(a,"tip");var e=document.createElement("div");e.className=T(a,"tip-body");var f=document.createElement("div");f.className=T(a,"tip-arrow");var h=document.createElement("div");h.setAttribute("aria-hidden","true");h.className=T(a,"tip-content");var k=Mi(a,b),l=Ji(a,b,"content");h.id=l;Nb(b,"content-id",l);e.appendChild(h);k&&d.appendChild(k);d.appendChild(e);d.appendChild(f);var l=
Ke(b),n=Ji(a,b,"arialabel"),f=document.createElement("div");oe(f,T(a,"arialabel"));f.id=n;"rtl"==document.body.getAttribute("dir")?He(f,c+" "+l):He(f,l+" "+c);b.setAttribute("aria-labelledby",n);l=Se()||document.body;l.appendChild(f);l.appendChild(d);Li(b,c);(c=parseInt(D(b,"tooltip-max-width"),10))&&e.offsetWidth>c&&(e.style.width=c+"px",oe(h,T(a,"normal-wrap")));h=ne(b,T(a,"reverse"));Ni(a,b,d,e,k,h)||Ni(a,b,d,e,k,!h);var u=T(a,"tip-visible");I(function(){oe(d,u)},0)}}}}
function Ni(a,b,c,d,e,f){qe(c,T(a,"tip-reverse"),f);var h=0;f&&(h=1);a=uf(b);f=new re((a.width-10)/2,f?a.height:0);var k=we(b),l=new re(0,0),n;n=k?we(k):document;n=!L||xd(9)||Ce(ue(n).f)?n.documentElement:n.body;b!=n&&(n=sf(b),k=De(ue(k).f),l.x=n.left+k.x,l.y=n.top+k.y);f=new re(l.x+f.x,l.y+f.y);f=f.clone();l=(h&8&&"rtl"==rf(c,"direction")?h^4:h)&-9;h=uf(c);k=h.clone();n=f.clone();k=k.clone();0!=l&&(l&4?n.x-=k.width+0:l&2&&(n.x-=k.width/2),l&1&&(n.y-=k.height+0));f=new of(0,0,0,0);f.left=n.x;f.top=
n.y;f.width=k.width;f.height=k.height;k=new re(f.left,f.top);k instanceof re?(l=k.x,k=k.y):(l=k,k=void 0);c.style.left=tf(l,!1);c.style.top=tf(k,!1);k=new se(f.width,f.height);if(!(h==k||h&&k&&h.width==k.width&&h.height==k.height))if(h=k,f=we(c),l=Ce(ue(f).f),!L||wd("10")||l&&wd("8"))f=c.style,ld?f.MozBoxSizing="border-box":md?f.WebkitBoxSizing="border-box":f.boxSizing="border-box",f.width=Math.max(h.width,0)+"px",f.height=Math.max(h.height,0)+"px";else if(f=c.style,l){if(L){l=xf(c,"paddingLeft");
k=xf(c,"paddingRight");n=xf(c,"paddingTop");var u=xf(c,"paddingBottom"),l=new nf(n,k,u,l)}else l=qf(c,"paddingLeft"),k=qf(c,"paddingRight"),n=qf(c,"paddingTop"),u=qf(c,"paddingBottom"),l=new nf(parseFloat(n),parseFloat(k),parseFloat(u),parseFloat(l));if(L&&!xd(9)){k=zf(c,"borderLeft");n=zf(c,"borderRight");var u=zf(c,"borderTop"),fa=zf(c,"borderBottom"),k=new nf(u,n,fa,k)}else k=qf(c,"borderLeftWidth"),n=qf(c,"borderRightWidth"),u=qf(c,"borderTopWidth"),fa=qf(c,"borderBottomWidth"),k=new nf(parseFloat(u),
parseFloat(n),parseFloat(fa),parseFloat(k));f.pixelWidth=h.width-k.left-l.left-l.right-k.right;f.pixelHeight=h.height-k.top-l.top-l.bottom-k.bottom}else f.pixelWidth=h.width,f.pixelHeight=h.height;f=Be(window);1==c.nodeType?(c=sf(c),k=new re(c.left,c.top)):(c=c.changedTouches?c.changedTouches[0]:c,k=new re(c.clientX,c.clientY));c=uf(d);n=Math.floor(c.width/2);h=!!(f.height<k.y+a.height);a=!!(k.y<a.height);l=!!(k.x<n);f=!!(f.width<k.x+n);k=(c.width+3)/-2- -5;b=D(b,"force-tooltip-direction");if("left"==
b||l)k=-5;else if("right"==b||f)k=20-c.width-3;b=Math.floor(k)+"px";d.style.left=b;e&&(e.style.left=b,e.style.height=c.height+"px",e.style.width=c.width+"px");return!(h||a)}
function Ji(a,b,c){a=T(a);var d=b.__yt_uid_key;d||(d=Qe(),b.__yt_uid_key=d);b=a+d;c&&(b+="-"+c);return b}
function Mi(a,b){var c=null;od&&ne(b,T(a,"masked"))&&((c=xe("yt-uix-tooltip-shared-mask"))?(c.parentNode.removeChild(c),Nf(c)):(c=document.createElement("iframe"),c.src='javascript:""',c.id="yt-uix-tooltip-shared-mask",c.className=T(a,"tip-mask")));return c}
function Ki(a){var b=xe("yt-uix-tooltip-shared-mask"),c=b&&Oe(b,function(b){return b==a},!1,2);
b&&c&&(b.parentNode.removeChild(b),Of(b),document.body.appendChild(b))}
;function Oi(){Bi.call(this,"subscription-button")}
y(Oi,Bi);ba(Oi);Oi.prototype.register=function(){Di(this,"click",this.Qb);Ci(this,ki,this.Gc);Ci(this,li,this.Fc);Ci(this,mi,this.ie);Ci(this,pi,this.Gc);Ci(this,qi,this.Fc);Ci(this,ri,this.oe);Ci(this,ti,this.Vd);Ci(this,ui,this.Ud)};
Oi.prototype.unregister=function(){Ei(this,"click",this.Qb);Oi.I.unregister.call(this)};
var Ne={kc:"hover-enabled",gd:"yt-uix-button-subscribe",hd:"yt-uix-button-subscribed",Xe:"ypc-enabled",jd:"yt-uix-button-subscription-container",kd:"yt-subscription-button-disabled-mask-container"},Pi={Ye:"channel-external-id",ld:"subscriber-count-show-when-subscribed",md:"subscriber-count-tooltip",nd:"subscriber-count-title",Ze:"href",lc:"is-subscribed",af:"parent-url",cf:"clicktracking",od:"style-type",mc:"subscription-id",ff:"target",pd:"ypc-enabled"};g=Oi.prototype;
g.Qb=function(a){var b=D(a,"href"),c=wi();if(b)a=D(a,"target")||"_self",window.open(b,a);else if(c){var b=D(a,"channel-external-id"),c=D(a,"clicktracking"),d;if(D(a,"ypc-enabled")){d=D(a,"ypc-item-type");var e=D(a,"ypc-item-id");d={itemType:d,itemId:e,subscriptionElement:a}}else d=null;e=D(a,"parent-url");if(D(a,"is-subscribed")){var f=D(a,"subscription-id");R(oi,new fi(b,f,d,a,c,e))}else R(ji,new di(b,d,c,e))}else Qi(this,a)};
g.Gc=function(a){this.Qa(a.f,this.Uc,!0)};
g.Fc=function(a){this.Qa(a.f,this.Uc,!1)};
g.ie=function(a){this.Qa(a.f,this.Vc,!0,a.subscriptionId)};
g.oe=function(a){this.Qa(a.f,this.Vc,!1)};
g.Vd=function(a){this.Qa(a.f,this.wd)};
g.Ud=function(a){this.Qa(a.f,this.vd)};
g.Vc=function(a,b,c){b?(Nb(a,Pi.lc,"true"),c&&Nb(a,Pi.mc,c)):(Pb(a,Pi.lc),Pb(a,Pi.mc));Ri(a)};
g.Uc=function(a,b){var c;c=Me(a);qe(c,Ne.kd,b);a.setAttribute("aria-busy",b?"true":"false");a.disabled=b};
function Ri(a){var b=D(a,Pi.od),c=!!D(a,"is-subscribed"),b="-"+b,d=Ne.hd+b;qe(a,Ne.gd+b,!c);qe(a,d,c);D(a,Pi.md)&&!D(a,Pi.ld)&&(b=T(Gi.getInstance()),qe(a,b,!c),a.title=c?"":D(a,Pi.nd));c?I(function(){oe(a,Ne.kc)},1E3):pe(a,Ne.kc)}
g.wd=function(a){var b=!!D(a,"ypc-item-type"),c=!!D(a,"ypc-item-id");!D(a,"ypc-enabled")&&b&&c&&(oe(a,"ypc-enabled"),Nb(a,Pi.pd,"true"))};
g.vd=function(a){D(a,"ypc-enabled")&&(pe(a,"ypc-enabled"),Pb(a,"ypc-enabled"))};
function Si(a,b){var c=ze(T(a));return Ma(c,function(a){return b==D(a,"channel-external-id")},a)}
g.rd=function(a,b,c){var d=$a(arguments,2);z(a,function(a){b.apply(this,Wa(a,d))},this)};
g.Qa=function(a,b,c){var d=Si(this,a),d=Wa([d],$a(arguments,1));this.rd.apply(this,d)};
function Qi(a,b){var c=w(function(a){a.discoverable_subscriptions&&lc("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS",a.discoverable_subscriptions);this.Qb(b)},a);
vi(c,"subscribe")}
;var Ti=window.yt&&window.yt.uix&&window.yt.uix.widgets_||{};q("yt.uix.widgets_",Ti,void 0);function Ui(a,b){this.source=null;this.l=a||null;this.origin="*";this.B=window.document.location.protocol+"//"+window.document.location.hostname;this.o=b;this.j=this.f=this.h=this.sourceId=null;N(window,"message",w(this.A,this))}
Ui.prototype.A=function(a){var b=this.o||H("POST_MESSAGE_ORIGIN",void 0)||this.B;if("*"!=b&&a.origin!=b)window.console&&window.console.warn("Untrusted origin: "+a.origin);else if(!this.l||a.source==this.l)if(this.source=a.source,this.origin="null"==a.origin?this.origin:a.origin,a=a.data,v(a)){try{a=Ad(a)}catch(c){return}this.sourceId=a.id;switch(a.event){case "listening":this.f&&(this.f(),this.f=null);break;case "command":this.h&&(this.j&&!B(this.j,a.func)||this.h(a.func,a.args))}}};
Ui.prototype.sendMessage=function(a){this.source&&(a.id=this.sourceId,a=M(a),this.source.postMessage(a,this.origin))};function Vi(){}
;function Wi(){}
y(Wi,Vi);Wi.prototype.U=function(){var a=0;Uc(this.wa(!0),function(){a++});
return a};
Wi.prototype.clear=function(){var a=Vc(this.wa(!0)),b=this;z(a,function(a){b.remove(a)})};function Xi(a){this.f=a}
y(Xi,Wi);g=Xi.prototype;g.isAvailable=function(){if(!this.f)return!1;try{return this.f.setItem("__sak","1"),this.f.removeItem("__sak"),!0}catch(a){return!1}};
g.set=function(a,b){try{this.f.setItem(a,b)}catch(c){if(0==this.f.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
g.get=function(a){a=this.f.getItem(a);if(!v(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.remove=function(a){this.f.removeItem(a)};
g.U=function(){return this.f.length};
g.wa=function(a){var b=0,c=this.f,d=new Sc;d.next=function(){if(b>=c.length)throw Rc;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!v(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
g.clear=function(){this.f.clear()};
g.key=function(a){return this.f.key(a)};function Yi(){var a=null;try{a=window.localStorage||null}catch(b){}this.f=a}
y(Yi,Xi);function Zi(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.f=a}
y(Zi,Xi);function $i(a){this.f=a}
$i.prototype.set=function(a,b){p(b)?this.f.set(a,M(b)):this.f.remove(a)};
$i.prototype.get=function(a){var b;try{b=this.f.get(a)}catch(c){return}if(null!==b)try{return Ad(b)}catch(c){throw"Storage: Invalid value was encountered";}};
$i.prototype.remove=function(a){this.f.remove(a)};function aj(a){this.f=a}
y(aj,$i);function bj(a){this.data=a}
function cj(a){return!p(a)||a instanceof bj?a:new bj(a)}
aj.prototype.set=function(a,b){aj.I.set.call(this,a,cj(b))};
aj.prototype.h=function(a){a=aj.I.get.call(this,a);if(!p(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
aj.prototype.get=function(a){if(a=this.h(a)){if(a=a.data,!p(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};function dj(a){this.f=a}
y(dj,aj);function ej(a){var b=a.creation;a=a.expiration;return!!a&&a<x()||!!b&&b>x()}
dj.prototype.set=function(a,b,c){if(b=cj(b)){if(c){if(c<x()){dj.prototype.remove.call(this,a);return}b.expiration=c}b.creation=x()}dj.I.set.call(this,a,b)};
dj.prototype.h=function(a,b){var c=dj.I.h.call(this,a);if(c)if(!b&&ej(c))dj.prototype.remove.call(this,a);else return c};function fj(a){this.f=a}
y(fj,dj);function gj(a,b){var c=[];Uc(b,function(a){var b;try{b=fj.prototype.h.call(this,a,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}p(b)?ej(b)&&c.push(a):c.push(a)},a);
return c}
function hj(a,b){var c=gj(a,b);z(c,function(a){fj.prototype.remove.call(this,a)},a)}
function ij(){var a=jj;hj(a,a.f.wa(!0))}
;function U(a,b,c){var d=c&&0<c?c:0;c=d?x()+1E3*d:0;if((d=d?jj:kj)&&window.JSON){v(b)||(b=JSON.stringify(b,void 0));try{d.set(a,b,c)}catch(e){d.remove(a)}}}
function lj(a){if(!kj&&!jj||!window.JSON)return null;var b;try{b=kj.get(a)}catch(c){}if(!v(b))try{b=jj.get(a)}catch(c){}if(!v(b))return null;try{b=JSON.parse(b,void 0)}catch(c){}return b}
function mj(a){kj&&kj.remove(a);jj&&jj.remove(a)}
var jj,nj=new Yi;jj=nj.isAvailable()?new fj(nj):null;var kj,oj=new Zi;kj=oj.isAvailable()?new fj(oj):null;function pj(a){return(0==a.search("cue")||0==a.search("load"))&&"loadModule"!=a}
function qj(a,b,c){v(a)&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});b=a;c=/\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);b.videoId=c&&c[2]?c[2]:null;return rj(a)}
function rj(a,b,c){if(ia(a)){b="endSeconds startSeconds mediaContentUrl suggestedQuality videoId two_stage_token".split(" ");c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}return{videoId:a,startSeconds:b,suggestedQuality:c}}
function sj(a,b,c,d){if(ia(a)&&!da(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}c={index:b,startSeconds:c,suggestedQuality:d};v(a)&&16==a.length?c.list="PL"+a:c.playlist=a;return c}
function tj(a){var b=a.video_id||a.videoId;if(v(b)){var c=lj("yt-player-two-stage-token")||{},d=lj("yt-player-two-stage-token")||{};p(void 0)?d[b]=void 0:delete d[b];U("yt-player-two-stage-token",d,300);(b=c[b])&&(a.two_stage_token=b)}}
;function uj(){var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);return a?50<=parseInt(a[1],10):!1}
var vj=document.currentScript&&-1!=document.currentScript.src.indexOf("?loadGamesSDK")?"/cast_game_sender.js":"/cast_sender.js",wj=["boadgeojelhgndaghljhdicfkmllpafd","dliochdbjfkdbacpmhlcpmleaejidimm","enhhojjnijigcajfphajepfemndkmdlo","fmfcbgogabcbclcofgocippekhfcmgfj"],xj=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","fjhoaacokmgbjemoflkofnenfaiekifl"],yj=uj()?xj.concat(wj):wj.concat(xj);function zj(a,b){var c=new XMLHttpRequest;c.onreadystatechange=function(){4==c.readyState&&200==c.status&&b(!0)};
c.onerror=function(){b(!1)};
try{c.open("GET",a,!0),c.send()}catch(d){b(!1)}}
function Aj(a){if(a>=yj.length)Bj();else{var b=yj[a],c="chrome-extension://"+b+vj;0<=wj.indexOf(b)?zj(c,function(d){d?(window.chrome.cast=window.chrome.cast||{},window.chrome.cast.extensionId=b,Cj(c,Bj)):Aj(a+1)}):Cj(c,function(){Aj(a+1)})}}
function Cj(a,b){var c=document.createElement("script");c.onerror=b;c.src=a;(document.head||document.documentElement).appendChild(c)}
function Bj(){var a=window.__onGCastApiAvailable;a&&"function"==typeof a&&a(!1,"No cast extension found")}
function Dj(){if(0<=window.navigator.userAgent.indexOf("CriOS")){var a=window.__gCrWeb&&window.__gCrWeb.message&&window.__gCrWeb.message.invokeOnHost;if(a){a({command:"cast.sender.init"});return}}window.chrome?(a=window.navigator.userAgent,0<=a.indexOf("Android")&&0<=a.indexOf("Chrome/")&&window.navigator.presentation?(a=uj()?"50":"",Cj("//www.gstatic.com/eureka/clank"+a+vj,Bj)):Aj(0)):Bj()}
;var Ej=x(),Fj=null,Gj=Array(50),Hj=-1,Ij=!1;function Jj(a){Kj();Fj.push(a);Lj(Fj)}
function Mj(a){var b=r("yt.mdx.remote.debug.handlers_");Ua(b||[],a)}
function Nj(a,b){Kj();var c=Fj,d=Oj(a,String(b));0==c.length?Pj(d):(Lj(c),z(c,function(a){a(d)}))}
function Kj(){Fj||(Fj=r("yt.mdx.remote.debug.handlers_")||[],q("yt.mdx.remote.debug.handlers_",Fj,void 0))}
function Pj(a){var b=(Hj+1)%50;Hj=b;Gj[b]=a;Ij||(Ij=49==b)}
function Lj(a){var b=Gj;if(b[0]){var c=Hj,d=Ij?c:-1;do{var d=(d+1)%50,e=b[d];z(a,function(a){a(e)})}while(d!=c);
Gj=Array(50);Hj=-1;Ij=!1}}
function Oj(a,b){var c=(x()-Ej)/1E3;c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")}
;function Qj(a){a=a||{};this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||""}
function Rj(a,b){return!!b&&(a.id==b||a.uuid==b)}
function Sj(a,b){return a||b?!a!=!b?!1:a.id==b.id:!0}
function Tj(a,b){return a||b?!a!=!b?!1:a.id==b.id&&a.token==b.token&&a.name==b.name&&a.uuid==b.uuid:!0}
function Uj(a){return{name:a.name,screenId:a.id,loungeToken:a.token,dialId:a.uuid}}
function Vj(a){return new Qj(a)}
function Wj(a){return da(a)?A(a,Vj):[]}
function Xj(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+(a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+"}":"null"}
function Yj(a){return da(a)?"["+A(a,Xj).join(",")+"]":"null"}
;var Zj={We:"atp",ef:"ska",bf:"que",$e:"mus",df:"sus"};function ak(a){this.l=this.j="";this.f="/api/lounge";this.h=!0;a=a||document.location.href;var b=Number(a.match(Id)[4]||null)||null||"";b&&(this.l=":"+b);this.j=Jd(a)||"";a=wb;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>Ia(a,"10.0")&&(this.h=!1))}
function bk(a,b,c,d){var e=a.f;if(p(d)?d:a.h)e="https://"+a.j+a.l+a.f;return Rd(e+b,c||{})}
function ck(a,b,c,d,e){a={format:"JSON",method:"POST",context:a,timeout:5E3,withCredentials:!1,ca:qa(a.A,d,!0),onError:qa(a.o,e),kb:qa(a.B,e)};c&&(a.R=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return ae(b,a)}
ak.prototype.A=function(a,b,c,d){b?a(d):a({text:c.responseText})};
ak.prototype.o=function(a,b){a(Error("Request error: "+b.status))};
ak.prototype.B=function(a){a(Error("request timed out"))};function dk(a){this.f=this.name=this.id="";this.status="UNKNOWN";a&&(this.id=a.id||"",this.name=a.name||"",this.f=a.activityId||"",this.status=a.status||"UNKNOWN")}
function ek(a){return{id:a.id,name:a.name,activityId:a.f,status:a.status}}
dk.prototype.toString=function(){return"{id:"+this.id+",name:"+this.name+",activityId:"+this.f+",status:"+this.status+"}"};
function fk(a){a=a||[];return"["+A(a,function(a){return a?a.toString():"null"}).join(",")+"]"}
;function gk(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0;return("x"==a?b:b&3|8).toString(16)})}
function hk(a,b){return Pa(a,function(a){return a.key==b})}
function ik(a){return A(a,function(a){return{key:a.id,name:a.name}})}
function jk(a){return A(a,function(a){return ek(a)})}
function kk(a){return A(a,function(a){return new dk(a)})}
function lk(a,b){return a||b?a&&b?a.id==b.id&&a.name==b.name:!1:!0}
function mk(a,b){return Pa(a,function(a){return a.id==b})}
function nk(a,b){return Pa(a,function(a){return Sj(a,b)})}
function ok(a,b){return Pa(a,function(a){return Rj(a,b)})}
;function V(){E.call(this);this.l=new G;gc(this,qa(F,this.l))}
y(V,E);V.prototype.subscribe=function(a,b,c){return this.isDisposed()?0:this.l.subscribe(a,b,c)};
V.prototype.unsubscribe=function(a,b,c){return this.isDisposed()?!1:this.l.unsubscribe(a,b,c)};
V.prototype.oa=function(a){return this.isDisposed()?!1:this.l.oa(a)};
V.prototype.F=function(a,b){return this.isDisposed()?!1:this.l.F.apply(this.l,arguments)};function pk(a){V.call(this);this.C=a;this.f=[]}
y(pk,V);pk.prototype.$=function(){return this.f};
pk.prototype.contains=function(a){return!!nk(this.f,a)};
pk.prototype.get=function(a){return a?ok(this.f,a):null};
function qk(a,b){var c=a.get(b.uuid)||a.get(b.id);if(c){var d=c.name;c.id=b.id||c.id;c.name=b.name;c.token=b.token;c.uuid=b.uuid||c.uuid;return c.name!=d}a.f.push(b);return!0}
function rk(a,b){var c=a.f.length!=b.length;a.f=Ma(a.f,function(a){return!!nk(b,a)});
for(var d=0,e=b.length;d<e;d++)c=qk(a,b[d])||c;return c}
function sk(a,b){var c=a.f.length;a.f=Ma(a.f,function(a){return!Sj(a,b)});
return a.f.length<c}
function tk(a,b){Nj(a.C,b)}
;function uk(a,b,c,d){V.call(this);this.C=a;this.B=b;this.o=c;this.A=d;this.j=0;this.f=null;this.h=NaN}
y(uk,V);var vk=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g=uk.prototype;g.stop=function(){this.f&&(this.f.abort(),this.f=null);isNaN(this.h)||(J(this.h),this.h=NaN)};
g.G=function(){this.stop();uk.I.G.call(this)};
g.Qc=function(){this.h=NaN;this.f=ae(bk(this.C,"/pairing/get_screen"),{method:"POST",R:{pairing_code:this.B},timeout:5E3,ca:w(this.Ne,this),onError:w(this.Me,this),kb:w(this.Oe,this)})};
g.Ne=function(a,b){this.f=null;var c=b.screen||{};c.dialId=this.o;c.name=this.A;this.F("pairingComplete",new Qj(c))};
g.Me=function(a){this.f=null;a.status&&404==a.status?this.j>=vk.length?this.F("pairingFailed",Error("DIAL polling timed out")):(a=vk[this.j],this.h=I(w(this.Qc,this),a),this.j++):this.F("pairingFailed",Error("Server error "+a.status))};
g.Oe=function(){this.f=null;this.F("pairingFailed",Error("Server not responding"))};function wk(a){this.app=this.name=this.id="";this.type="REMOTE_CONTROL";this.h=new ed;this.f=new ed;if(a){this.id=a.id||a.name;this.name=a.name;this.app=a.app;this.type=a.type||"REMOTE_CONTROL";var b=a.capabilities||"";this.h.clear();fd(this.h,Ma(b.split(","),qa(gb,Zj)));a=a.experiments||"";this.f.clear();fd(this.f,a.split(","))}}
wk.prototype.equals=function(a){return a?this.id==a.id:!1};var xk;function yk(){var a=zk(),b=Ak();B(a,b);if(Bk()){var c=a,d;d=0;for(var e=c.length,f;d<e;){var h=d+e>>1,k;k=cb(b,c[h]);0<k?d=h+1:(e=h,f=!k)}d=f?d:~d;0>d&&Za(c,-(d+1),0,b)}a=Ck(a);if(0==a.length)try{ef.remove("remote_sid","/","youtube.com")}catch(l){}else try{ff("remote_sid",a.join(","),-1)}catch(l){}}
function zk(){var a=lj("yt-remote-connected-devices")||[];a.sort(cb);return a}
function Ck(a){if(0==a.length)return[];var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return A(a,function(a,b){return 0==b?a:a.substring(c.length)})}
function Dk(a){U("yt-remote-connected-devices",a,86400)}
function Ak(){if(Ek)return Ek;var a=lj("yt-remote-device-id");a||(a=gk(),U("yt-remote-device-id",a,31536E3));for(var b=zk(),c=1,d=a;B(b,d);)c++,d=a+"#"+c;return Ek=d}
function Fk(){return lj("yt-remote-session-browser-channel")}
function Bk(){return lj("yt-remote-session-screen-id")}
function Gk(a){5<a.length&&(a=a.slice(a.length-5));var b=A(Hk(),function(a){return a.loungeToken}),c=A(a,function(a){return a.loungeToken});
Oa(c,function(a){return!B(b,a)})&&Ik();
U("yt-remote-local-screens",a,31536E3)}
function Hk(){return lj("yt-remote-local-screens")||[]}
function Ik(){U("yt-remote-lounge-token-expiration",!0,86400)}
function Jk(){return!lj("yt-remote-lounge-token-expiration")}
function Kk(a){U("yt-remote-online-screens",a,60)}
function Lk(){return lj("yt-remote-online-screens")||[]}
function Mk(a){U("yt-remote-online-dial-devices",a,30)}
function Nk(){return lj("yt-remote-online-dial-devices")||[]}
function Ok(a,b){U("yt-remote-session-browser-channel",a);U("yt-remote-session-screen-id",b);var c=zk(),d=Ak();B(c,d)||c.push(d);Dk(c);yk()}
function Pk(a){a||(mj("yt-remote-session-screen-id"),mj("yt-remote-session-video-id"));yk();a=zk();Ua(a,Ak());Dk(a)}
function Qk(){if(!xk){var a;a=new Yi;(a=a.isAvailable()?a:null)&&(xk=new $i(a))}return xk?!!xk.get("yt-remote-use-staging-server"):!1}
var Ek="";function Rk(a){pk.call(this,"LocalScreenService");this.j=a;this.h=NaN;Sk(this);tk(this,"Initializing with "+Yj(this.f))}
y(Rk,pk);g=Rk.prototype;g.Za=function(){Sk(this)&&this.F("screenChange");Jk()&&Tk(this);J(this.h);this.h=I(w(this.Za,this),1E4)};
g.Kb=function(a,b){Sk(this);qk(this,a);Uk(this,!1);this.F("screenChange");b(a);a.token||Tk(this)};
g.remove=function(a,b){var c=Sk(this);sk(this,a)&&(Uk(this,!1),c=!0);b(a);c&&this.F("screenChange")};
g.Hb=function(a,b,c,d){var e=Sk(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,Uk(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.F("screenChange")};
g.G=function(){J(this.h);Rk.I.G.call(this)};
function Tk(a){if(a.f.length){var b=A(a.f,function(a){return a.id}),c=bk(a.j,"/pairing/get_lounge_token_batch");
ck(a.j,c,{screen_ids:b.join(",")},w(a.Hd,a),w(a.Gd,a))}}
g.Hd=function(a){Sk(this);var b=this.f.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}Uk(this,!b);b&&Nj(this.C,"Missed "+b+" lounge tokens.")};
g.Gd=function(a){Nj(this.C,"Requesting lounge tokens failed: "+a)};
function Sk(a){var b=Wj(Hk()),b=Ma(b,function(a){return!a.uuid});
return rk(a,b)}
function Uk(a,b){Gk(A(a.f,Uj));b&&Ik()}
;function Vk(a,b){V.call(this);this.A=b;for(var c=lj("yt-remote-online-screen-ids")||"",c=c?c.split(","):[],d={},e=this.A(),f=0,h=e.length;f<h;++f){var k=e[f].id;d[k]=B(c,k)}this.f=d;this.B=a;this.j=this.o=NaN;this.h=null;Wk("Initialized with "+M(this.f))}
y(Vk,V);g=Vk.prototype;g.isEmpty=function(){return pb(this.f)};
g.update=function(){Wk("Updating availability on schedule.");var a=this.A(),b=eb(this.f,function(b,d){return b&&!!ok(a,d)},this);
Xk(this,b)};
function Yk(a,b,c){var d=bk(a.B,"/pairing/get_screen_availability");ck(a.B,d,{lounge_token:b.token},w(function(a){a=a.screens||[];for(var d=0,h=a.length;d<h;++d)if(a[d].loungeToken==b.token){c("online"==a[d].status);return}c(!1)},a),w(function(){c(!1)},a))}
g.G=function(){J(this.j);this.j=NaN;this.h&&(this.h.abort(),this.h=null);Vk.I.G.call(this)};
function Xk(a,b){var c;a:if(fb(b)!=fb(a.f))c=!1;else{c=kb(b);for(var d=0,e=c.length;d<e;++d)if(!a.f[c[d]]){c=!1;break a}c=!0}c||(Wk("Updated online screens: "+M(a.f)),a.f=b,a.F("screenChange"));Zk(a)}
function $k(a){isNaN(a.j)||J(a.j);a.j=I(w(a.ec,a),0<a.o&&a.o<x()?2E4:1E4)}
g.ec=function(){J(this.j);this.j=NaN;this.h&&this.h.abort();var a=al(this);if(fb(a)){var b=bk(this.B,"/pairing/get_screen_availability"),c={lounge_token:kb(a).join(",")};this.h=ck(this.B,b,c,w(this.ge,this,a),w(this.fe,this))}else Xk(this,{}),$k(this)};
g.ge=function(a,b){this.h=null;var c=kb(al(this));if(ab(c,kb(a))){for(var c=b.screens||[],d={},e=0,f=c.length;e<f;++e)d[a[c[e].loungeToken]]="online"==c[e].status;Xk(this,d);$k(this)}else this.N("Changing Screen set during request."),this.ec()};
g.fe=function(a){this.N("Screen availability failed: "+a);this.h=null;$k(this)};
function Wk(a){Nj("OnlineScreenService",a)}
g.N=function(a){Nj("OnlineScreenService",a)};
function al(a){var b={};z(a.A(),function(a){a.token?b[a.token]=a.id:this.N("Requesting availability of screen w/o lounge token.")});
return b}
function Zk(a){var b=kb(eb(a.f,function(a){return a}));
b.sort(cb);b.length?U("yt-remote-online-screen-ids",b.join(","),60):mj("yt-remote-online-screen-ids");a=Ma(a.A(),function(a){return!!this.f[a.id]},a);
Kk(A(a,Uj))}
;function W(a){pk.call(this,"ScreenService");this.B=a;this.h=this.j=null;this.o=[];this.A={};bl(this)}
y(W,pk);g=W.prototype;g.Za=function(){this.j.Za();var a=this.h,b;b=parseInt(lj("yt-remote-fast-check-period")||"0",10);b=x()-144E5<b?0:b;a.o=b;a.o?$k(a):(a.o=x()+3E5,U("yt-remote-fast-check-period",a.o),a.ec());this.f.length&&(this.F("screenChange"),this.h.isEmpty()||this.F("onlineScreenChange"))};
g.Kb=function(a,b,c){this.j.Kb(a,b,c)};
g.remove=function(a,b,c){this.j.remove(a,b,c);this.h.update()};
g.Hb=function(a,b,c,d){this.j.contains(a)?this.j.Hb(a,b,c,d):(a="Updating name of unknown screen: "+a.name,Nj(this.C,a),d(Error(a)))};
g.$=function(a){return a?this.f:Wa(this.f,Ma(this.o,function(a){return!this.contains(a)},this))};
g.$c=function(){return Ma(this.$(!0),function(a){return!!this.h.f[a.id]},this)};
function cl(a,b,c,d,e,f){tk(a,"getAutomaticScreenByIds "+c+" / "+b);c||(c=a.A[b]);var h=a.$();if(h=(c?ok(h,c):null)||ok(h,b)){h.uuid=b;var k=dl(a,h);Yk(a.h,k,function(a){e(a?k:null)})}else c?el(a,c,w(function(a){var f=dl(this,new Qj({name:d,
screenId:c,loungeToken:a,dialId:b||""}));Yk(this.h,f,function(a){e(a?f:null)})},a),f):e(null)}
g.ad=function(a,b,c,d,e){tk(this,"getDialScreenByPairingCode "+a+" / "+b);var f=new uk(this.B,a,b,c);f.subscribe("pairingComplete",w(function(a){F(f);d(dl(this,a))},this));
f.subscribe("pairingFailed",function(a){F(f);e(a)});
!f.f&&isNaN(f.h)&&f.Qc();return w(f.stop,f)};
function fl(a,b){for(var c=0,d=a.f.length;c<d;++c)if(a.f[c].name==b)return a.f[c];return null}
g.Ac=function(a,b){for(var c=2,d=b(a,c);fl(this,d);){c++;if(20<c)return a;d=b(a,c)}return d};
g.Qe=function(a,b,c,d){ae(bk(this.B,"/pairing/get_screen"),{method:"POST",R:{pairing_code:a},timeout:5E3,ca:w(function(a,d){var h=new Qj(d.screen||{});if(!h.name||fl(this,h.name))h.name=this.Ac(h.name,b);c(dl(this,h))},this),
onError:w(function(a){d(Error("pairing request failed: "+a.status))},this),
kb:w(function(){d(Error("pairing request timed out."))},this)})};
g.G=function(){F(this.j);F(this.h);W.I.G.call(this)};
function el(a,b,c,d){tk(a,"requestLoungeToken_ for "+b);var e={R:{screen_ids:b},method:"POST",context:a,ca:function(a,e){var k=e&&e.screens||[];k[0]&&k[0].screenId==b?c(k[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
ae(bk(a.B,"/pairing/get_lounge_token_batch"),e)}
function gl(a){a.f=a.j.$();var b=a.A,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.f.length;b<d;++b){var e=a.f[b];e.uuid=c[e.id]||""}tk(a,"Updated manual screens: "+Yj(a.f))}
g.Jd=function(){gl(this);this.F("screenChange");this.h.update()};
function bl(a){hl(a);a.j=new Rk(a.B);a.j.subscribe("screenChange",w(a.Jd,a));gl(a);a.o=Wj(lj("yt-remote-automatic-screen-cache")||[]);hl(a);tk(a,"Initializing automatic screens: "+Yj(a.o));a.h=new Vk(a.B,w(a.$,a,!0));a.h.subscribe("screenChange",w(function(){this.F("onlineScreenChange")},a))}
function dl(a,b){var c=a.get(b.id);c?(c.uuid=b.uuid,b=c):((c=ok(a.o,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.o.push(b),U("yt-remote-automatic-screen-cache",A(a.o,Uj)));hl(a);a.A[b.uuid]=b.id;U("yt-remote-device-id-map",a.A,31536E3);return b}
function hl(a){a.A=lj("yt-remote-device-id-map")||{}}
W.prototype.dispose=W.prototype.dispose;function il(a,b,c){V.call(this);this.T=c;this.L=a;this.h=b;this.j=null}
y(il,V);g=il.prototype;g.yb=function(a){this.j=a;this.F("sessionScreen",this.j)};
g.aa=function(a){this.isDisposed()||(a&&jl(this,""+a),this.j=null,this.F("sessionScreen",null))};
function kl(a,b){Nj(a.T,b)}
function jl(a,b){Nj(a.T,b)}
g.cd=function(){return null};
g.gc=function(a){var b=this.h;a?(b.displayStatus=new chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;chrome.cast.setReceiverDisplayStatus(b,w(function(){kl(this,"Updated receiver status for "+b.friendlyName+": "+a)},this),w(function(){jl(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.G=function(){this.gc("");il.I.G.call(this)};function ll(a,b){il.call(this,a,b,"CastSession");this.f=null;this.A=0;this.o=null;this.C=w(this.Re,this);this.B=w(this.re,this);this.A=I(w(function(){ml(this,null)},this),12E4)}
y(ll,il);g=ll.prototype;g.fc=function(a){if(this.f){if(this.f==a)return;jl(this,"Overriding cast sesison with new session object");this.f.removeUpdateListener(this.C);this.f.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.B)}this.f=a;this.f.addUpdateListener(this.C);this.f.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.B);this.o&&nl(this);ol(this,"getMdxSessionStatus")};
g.Ua=function(a){kl(this,"launchWithParams: "+M(a));this.o=a;this.f&&nl(this)};
g.stop=function(){this.f?this.f.stop(w(function(){this.aa()},this),w(function(){this.aa(Error("Failed to stop receiver app."))},this)):this.aa(Error("Stopping cast device witout session."))};
g.gc=t;g.G=function(){kl(this,"disposeInternal");J(this.A);this.A=0;this.f&&(this.f.removeUpdateListener(this.C),this.f.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.B));this.f=null;ll.I.G.call(this)};
function nl(a){var b=a.o.videoId||a.o.videoIds[a.o.index];b&&ol(a,"flingVideo",{videoId:b,currentTime:a.o.currentTime||0});a.o=null}
function ol(a,b,c){kl(a,"sendYoutubeMessage_: "+b+" "+M(c));var d={};d.type=b;c&&(d.data=c);a.f?a.f.sendMessage("urn:x-cast:com.google.youtube.mdx",d,t,w(function(){jl(this,"Failed to send message: "+b+".")},a)):jl(a,"Sending yt message without session: "+M(d))}
g.re=function(a,b){if(!this.isDisposed())if(b){var c=Bd(b);if(c){var d=""+c.type,c=c.data||{};kl(this,"onYoutubeMessage_: "+d+" "+M(c));switch(d){case "mdxSessionStatus":ml(this,c.screenId);break;default:jl(this,"Unknown youtube message: "+d)}}else jl(this,"Unable to parse message.")}else jl(this,"No data in message.")};
function ml(a,b){J(a.A);if(b){if(kl(a,"onConnectedScreenId_: Received screenId: "+b),!a.j||a.j.id!=b){var c=w(a.yb,a),d=w(a.aa,a);a.zc(b,c,d,5)}}else a.aa(Error("Waiting for session status timed out."))}
g.zc=function(a,b,c,d){cl(this.L,this.h.label,a,this.h.friendlyName,w(function(e){e?b(e):0<=d?(jl(this,"Screen "+a+" appears to be offline. "+d+" retries left."),I(w(this.zc,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.cd=function(){return this.f};
g.Re=function(a){this.isDisposed()||a||(jl(this,"Cast session died."),this.aa())};function pl(a,b){il.call(this,a,b,"DialSession");this.A=this.J=null;this.P="";this.o=null;this.C=t;this.B=NaN;this.S=w(this.Ue,this);this.f=t}
y(pl,il);g=pl.prototype;g.fc=function(a){this.A=a;this.A.addUpdateListener(this.S)};
g.Ua=function(a){this.o=a;this.C()};
g.stop=function(){this.f();this.f=t;J(this.B);this.A?this.A.stop(w(this.aa,this,null),w(this.aa,this,"Failed to stop DIAL device.")):this.aa()};
g.G=function(){this.f();this.f=t;J(this.B);this.A&&this.A.removeUpdateListener(this.S);this.A=null;pl.I.G.call(this)};
function ql(a){a.f=a.L.ad(a.P,a.h.label,a.h.friendlyName,w(function(a){this.f=t;this.yb(a)},a),w(function(a){this.f=t;
this.aa(a)},a))}
g.Ue=function(a){this.isDisposed()||a||(jl(this,"DIAL session died."),this.f(),this.f=t,this.aa())};
function rl(a){var b={};b.pairingCode=a.P;if(a.o){var c=a.o.index||0,d=a.o.currentTime||0;b.v=a.o.videoId||a.o.videoIds[c];b.t=d}Qk()&&(b.env_useStageMdx=1);return Pd(b)}
g.ac=function(a){this.P=gk();if(this.o){var b=new chrome.cast.DialLaunchResponse(!0,rl(this));a(b);ql(this)}else this.C=w(function(){J(this.B);this.C=t;this.B=NaN;var b=new chrome.cast.DialLaunchResponse(!0,rl(this));a(b);ql(this)},this),this.B=I(w(function(){this.C()},this),100)};
g.Kd=function(a,b){cl(this.L,this.J.receiver.label,a,this.h.friendlyName,w(function(a){a&&a.token?(this.yb(a),b(new chrome.cast.DialLaunchResponse(!1))):this.ac(b)},this),w(function(a){jl(this,"Failed to get DIAL screen: "+a);
this.ac(b)},this))};function sl(a,b){il.call(this,a,b,"ManualSession");this.f=I(w(this.Ua,this,null),150)}
y(sl,il);sl.prototype.stop=function(){this.aa()};
sl.prototype.fc=t;sl.prototype.Ua=function(){J(this.f);this.f=NaN;var a=ok(this.L.$(),this.h.label);a?this.yb(a):this.aa(Error("No such screen"))};
sl.prototype.G=function(){J(this.f);this.f=NaN;sl.I.G.call(this)};function tl(a){V.call(this);this.h=a;this.f=null;this.A=!1;this.j=[];this.o=w(this.de,this)}
y(tl,V);g=tl.prototype;
g.init=function(a,b){chrome.cast.timeout.requestSession=3E4;var c=new chrome.cast.SessionRequest("233637DE");c.dialRequest=new chrome.cast.DialRequest("YouTube");var d=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED,e=a?chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:chrome.cast.DefaultActionPolicy.CREATE_SESSION,c=new chrome.cast.ApiConfig(c,w(this.Kc,this),w(this.ee,this),d,e);c.customDialLaunchCallback=w(this.Td,this);chrome.cast.initialize(c,w(function(){this.isDisposed()||(chrome.cast.addReceiverActionListener(this.o),
Jj(ul),this.h.subscribe("onlineScreenChange",w(this.bd,this)),this.j=vl(this),chrome.cast.setCustomReceivers(this.j,t,w(function(a){this.N("Failed to set initial custom receivers: "+M(a))},this)),this.F("yt-remote-cast2-availability-change",wl(this)),b(!0))},this),w(function(a){this.N("Failed to initialize API: "+M(a));
b(!1)},this))};
g.De=function(a,b){xl("Setting connected screen ID: "+a+" -> "+b);if(this.f){var c=this.f.j;if(!a||c&&c.id!=a)xl("Unsetting old screen status: "+this.f.h.friendlyName),F(this.f),this.f=null}if(a&&b){if(!this.f){c=ok(this.h.$(),a);if(!c){xl("setConnectedScreenStatus: Unknown screen.");return}var d=yl(this,c);d||(xl("setConnectedScreenStatus: Connected receiver not custom..."),d=new chrome.cast.Receiver(c.uuid?c.uuid:c.id,c.name),d.receiverType=chrome.cast.ReceiverType.CUSTOM,this.j.push(d),chrome.cast.setCustomReceivers(this.j,
t,w(function(a){this.N("Failed to set initial custom receivers: "+M(a))},this)));
xl("setConnectedScreenStatus: new active receiver: "+d.friendlyName);zl(this,new sl(this.h,d),!0)}this.f.gc(b)}else xl("setConnectedScreenStatus: no screen.")};
function yl(a,b){return b?Pa(a.j,function(a){return Rj(b,a.label)},a):null}
g.Ee=function(a){this.isDisposed()?this.N("Setting connection data on disposed cast v2"):this.f?this.f.Ua(a):this.N("Setting connection data without a session")};
g.Te=function(){this.isDisposed()?this.N("Stopping session on disposed cast v2"):this.f?(this.f.stop(),F(this.f),this.f=null):xl("Stopping non-existing session")};
g.requestSession=function(){chrome.cast.requestSession(w(this.Kc,this),w(this.he,this))};
g.G=function(){this.h.unsubscribe("onlineScreenChange",w(this.bd,this));window.chrome&&chrome.cast&&chrome.cast.removeReceiverActionListener(this.o);Mj(ul);F(this.f);tl.I.G.call(this)};
function xl(a){Nj("Controller",a)}
g.N=function(a){Nj("Controller",a)};
function ul(a){window.chrome&&chrome.cast&&chrome.cast.logMessage&&chrome.cast.logMessage(a)}
function wl(a){return a.A||!!a.j.length||!!a.f}
function zl(a,b,c){F(a.f);(a.f=b)?(c?a.F("yt-remote-cast2-receiver-resumed",b.h):a.F("yt-remote-cast2-receiver-selected",b.h),b.subscribe("sessionScreen",w(a.Lc,a,b)),b.j?a.F("yt-remote-cast2-session-change",b.j):c&&a.f.Ua(null)):a.F("yt-remote-cast2-session-change",null)}
g.Lc=function(a,b){this.f==a&&(b||zl(this,null),this.F("yt-remote-cast2-session-change",b))};
g.de=function(a,b){if(!this.isDisposed())if(a)switch(xl("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case chrome.cast.ReceiverAction.CAST:if(this.f)if(this.f.h.label!=a.label)xl("onReceiverAction_: Stopping active receiver: "+this.f.h.friendlyName),this.f.stop();else{xl("onReceiverAction_: Casting to active receiver.");this.f.j&&this.F("yt-remote-cast2-session-change",this.f.j);break}switch(a.receiverType){case chrome.cast.ReceiverType.CUSTOM:zl(this,new sl(this.h,a));break;case chrome.cast.ReceiverType.DIAL:zl(this,
new pl(this.h,a));break;case chrome.cast.ReceiverType.CAST:zl(this,new ll(this.h,a));break;default:this.N("Unknown receiver type: "+a.receiverType)}break;case chrome.cast.ReceiverAction.STOP:this.f&&this.f.h.label==a.label?this.f.stop():this.N("Stopping receiver w/o session: "+a.friendlyName)}else this.N("onReceiverAction_ called without receiver.")};
g.Td=function(a){if(this.isDisposed())return Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=chrome.cast.ReceiverType.DIAL&&(this.N("Not DIAL receiver: "+b.friendlyName),b.receiverType=chrome.cast.ReceiverType.DIAL);var c=this.f?this.f.h:null;if(!c||c.label!=b.label)return this.N("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=chrome.cast.ReceiverType.DIAL){if(this.f.j)return xl("Reselecting dial screen."),
this.F("yt-remote-cast2-session-change",this.f.j),Promise.resolve(new chrome.cast.DialLaunchResponse(!1));this.N('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);zl(this,new pl(this.h,b))}b=this.f;b.J=a;return b.J.appState==chrome.cast.DialAppState.RUNNING?new Promise(w(b.Kd,b,(b.J.extraData||{}).screenId||null)):new Promise(w(b.ac,b))};
g.Kc=function(a){if(!this.isDisposed()){xl("New cast session ID: "+a.sessionId);var b=a.receiver;if(b.receiverType!=chrome.cast.ReceiverType.CUSTOM){if(!this.f)if(b.receiverType==chrome.cast.ReceiverType.CAST)xl("Got resumed cast session before resumed mdx connection."),zl(this,new ll(this.h,b),!0);else{this.N("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var c=this.f.h,d=ok(this.h.$(),c.label);d&&Rj(d,b.label)&&c.receiverType!=chrome.cast.ReceiverType.CAST&&b.receiverType==
chrome.cast.ReceiverType.CAST&&(xl("onSessionEstablished_: manual to cast session change "+b.friendlyName),F(this.f),this.f=new ll(this.h,b),this.f.subscribe("sessionScreen",w(this.Lc,this,this.f)),this.f.Ua(null));this.f.fc(a)}}};
g.Se=function(){return this.f?this.f.cd():null};
g.he=function(a){this.isDisposed()||(this.N("Failed to estabilish a session: "+M(a)),a.code!=chrome.cast.ErrorCode.CANCEL&&zl(this,null))};
g.ee=function(a){xl("Receiver availability updated: "+a);if(!this.isDisposed()){var b=wl(this);this.A=a==chrome.cast.ReceiverAvailability.AVAILABLE;wl(this)!=b&&this.F("yt-remote-cast2-availability-change",wl(this))}};
function vl(a){var b=a.h.$c(),c=a.f&&a.f.h;a=A(b,function(a){c&&Rj(a,c.label)&&(c=null);var b=a.uuid?a.uuid:a.id,f=yl(this,a);f?(f.label=b,f.friendlyName=a.name):(f=new chrome.cast.Receiver(b,a.name),f.receiverType=chrome.cast.ReceiverType.CUSTOM);return f},a);
c&&(c.receiverType!=chrome.cast.ReceiverType.CUSTOM&&(c=new chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=chrome.cast.ReceiverType.CUSTOM),a.push(c));return a}
g.bd=function(){if(!this.isDisposed()){var a=wl(this);this.j=vl(this);xl("Updating custom receivers: "+M(this.j));chrome.cast.setCustomReceivers(this.j,t,w(function(){this.N("Failed to set custom receivers.")},this));
var b=wl(this);b!=a&&this.F("yt-remote-cast2-availability-change",b)}};
tl.prototype.setLaunchParams=tl.prototype.Ee;tl.prototype.setConnectedScreenStatus=tl.prototype.De;tl.prototype.stopSession=tl.prototype.Te;tl.prototype.getCastSession=tl.prototype.Se;tl.prototype.requestSession=tl.prototype.requestSession;tl.prototype.init=tl.prototype.init;tl.prototype.dispose=tl.prototype.dispose;function Al(a,b,c){Bl()?Dl(a)&&(El(!0),window.chrome&&chrome.cast&&chrome.cast.isAvailable?Fl(b):(window.__onGCastApiAvailable=function(a,c){a?Fl(b):(Gl("Failed to load cast API: "+c),Hl(!1),El(!1),mj("yt-remote-cast-available"),mj("yt-remote-cast-receiver"),Il(),b(!1))},c?Ec("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"):Dj())):Cl("Cannot initialize because not running Chrome")}
function Il(){Cl("dispose");var a=Jl();a&&a.dispose();Kl=null;q("yt.mdx.remote.cloudview.instance_",null,void 0);Ll(!1);Ac(Ml);Ml.length=0}
function Nl(){return!!lj("yt-remote-cast-installed")}
function Ol(){var a=lj("yt-remote-cast-receiver");return a?Ca(a.friendlyName):null}
function Pl(){Cl("clearCurrentReciever");mj("yt-remote-cast-receiver")}
function Ql(){Nl()?Jl()?Rl()?(Cl("Requesting cast selector."),Kl.requestSession()):(Cl("Wait for cast API to be ready to request the session."),Ml.push(yc("yt-remote-cast2-api-ready",Ql))):Gl("requestCastSelector: Cast is not initialized."):Gl("requestCastSelector: Cast API is not installed!")}
function Sl(a){Rl()?Jl().setLaunchParams(a):Gl("setLaunchParams called before ready.")}
function Tl(a,b){Rl()?Jl().setConnectedScreenStatus(a,b):Gl("setConnectedScreenStatus called before ready.")}
var Kl=null;function Bl(){var a;a=0<=wb.search(/\ (CrMo|Chrome|CriOS)\//);return Ef||a}
function Dl(a){var b=!1;if(!Kl){var c=r("yt.mdx.remote.cloudview.instance_");c||(c=new tl(a),c.subscribe("yt-remote-cast2-availability-change",function(a){U("yt-remote-cast-available",a);K("yt-remote-cast2-availability-change",a)}),c.subscribe("yt-remote-cast2-receiver-selected",function(a){Cl("onReceiverSelected: "+a.friendlyName);
U("yt-remote-cast-receiver",a);K("yt-remote-cast2-receiver-selected",a)}),c.subscribe("yt-remote-cast2-receiver-resumed",function(a){Cl("onReceiverResumed: "+a.friendlyName);
U("yt-remote-cast-receiver",a)}),c.subscribe("yt-remote-cast2-session-change",function(a){Cl("onSessionChange: "+Xj(a));
a||mj("yt-remote-cast-receiver");K("yt-remote-cast2-session-change",a)}),q("yt.mdx.remote.cloudview.instance_",c,void 0),b=!0);
Kl=c}Cl("cloudview.createSingleton_: "+b);return b}
function Jl(){Kl||(Kl=r("yt.mdx.remote.cloudview.instance_"));return Kl}
function Fl(a){Hl(!0);El(!1);Kl.init(!0,function(b){b?(Ll(!0),K("yt-remote-cast2-api-ready")):(Gl("Failed to initialize cast API."),Hl(!1),mj("yt-remote-cast-available"),mj("yt-remote-cast-receiver"),Il());a(b)})}
function Cl(a){Nj("cloudview",a)}
function Gl(a){Nj("cloudview",a)}
function Hl(a){Cl("setCastInstalled_ "+a);U("yt-remote-cast-installed",a)}
function Rl(){return!!r("yt.mdx.remote.cloudview.apiReady_")}
function Ll(a){Cl("setApiReady_ "+a);q("yt.mdx.remote.cloudview.apiReady_",a,void 0)}
function El(a){q("yt.mdx.remote.cloudview.initializing_",a,void 0)}
var Ml=[];function Ul(){if(!("cast"in window))return!1;var a=window.cast||{};return"ActivityStatus"in a&&"Api"in a&&"LaunchRequest"in a&&"Receiver"in a}
function Vl(a){Nj("CAST",a)}
function Wl(a){var b=Xl();b&&b.logMessage&&b.logMessage(a)}
function Yl(a){if(a.event.source==window&&a.event.data&&"CastApi"==a.event.data.source&&"Hello"==a.event.data.event)for(;Zl.length;)Zl.shift()()}
function $l(){if(!r("yt.mdx.remote.castv2_")&&!am&&(0==Sa.length&&Ya(Sa,Nk()),Ul())){var a=Xl();a?(a.removeReceiverListener("YouTube",bm),a.addReceiverListener("YouTube",bm),Vl("API initialized in the other binary")):(a=new cast.Api,cm(a),a.addReceiverListener("YouTube",bm),a.setReloadTabRequestHandler&&a.setReloadTabRequestHandler(function(){I(function(){window.location.reload(!0)},1E3)}),Jj(Wl),Vl("API initialized"));
am=!0}}
function dm(){var a=Xl();a&&(Vl("API disposed"),Mj(Wl),a.setReloadTabRequestHandler&&a.setReloadTabRequestHandler(t),a.removeReceiverListener("YouTube",bm),cm(null));am=!1;Zl=null;(a=We(window,"message",Yl,!1))&&Xe(a)}
function em(a){var b=Qa(Sa,function(b){return b.id==a.id});
0<=b&&(Sa[b]=ek(a))}
function bm(a){a.length&&Vl("Updating receivers: "+M(a));fm(a);K("yt-remote-cast-device-list-update");z(gm(),function(a){hm(a.id)});
z(a,function(a){if(a.isTabProjected){var c=im(a.id);Vl("Detected device: "+c.id+" is tab projected. Firing DEVICE_TAB_PROJECTED event.");I(function(){K("yt-remote-cast-device-tab-projected",c.id)},1E3)}})}
function jm(a,b){Vl("Updating "+a+" activity status: "+M(b));var c=im(a);c?(b.activityId&&(c.f=b.activityId),c.status="running"==b.status?"RUNNING":"stopped"==b.status?"STOPPED":"error"==b.status?"ERROR":"UNKNOWN","RUNNING"!=c.status&&(c.f=""),em(c),K("yt-remote-cast-device-status-update",c)):Vl("Device not found")}
function gm(){$l();return kk(Sa)}
function fm(a){a=A(a,function(a){var c={id:a.id,name:Ca(a.name)};if(a=im(a.id))c.activityId=a.f,c.status=a.status;return c});
Ra();Ya(Sa,a)}
function im(a){var b=gm();return Pa(b,function(b){return b.id==a})||null}
function hm(a){var b=im(a),c=Xl();c&&b&&b.f&&c.getActivityStatus(b.f,function(b){"error"==b.status&&(b.status="stopped");jm(a,b)})}
function km(a){$l();var b=im(a),c=Xl();c&&b&&b.f?(Vl("Stopping cast activity"),c.stopActivity(b.f,qa(jm,a))):Vl("Dropping cast activity stop")}
function Xl(){return r("yt.mdx.remote.castapi.api_")}
function cm(a){q("yt.mdx.remote.castapi.api_",a,void 0)}
var am=!1,Zl=null,Sa=r("yt.mdx.remote.castapi.devices_")||[];q("yt.mdx.remote.castapi.devices_",Sa,void 0);function lm(a,b){this.h=a;this.f=b||null}
;function mm(){}
;function nm(){this.f=x()}
new nm;nm.prototype.set=function(a){this.f=a};
nm.prototype.reset=function(){this.set(x())};
nm.prototype.get=function(){return this.f};function om(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.f=!1;this.Sc=!0}
om.prototype.stopPropagation=function(){this.f=!0};
om.prototype.preventDefault=function(){this.defaultPrevented=!0;this.Sc=!1};var pm=!L||xd(9),qm=L&&!wd("9");!md||wd("528");ld&&wd("1.9b")||L&&wd("8")||jd&&wd("9.5")||md&&wd("528");ld&&!wd("8")||L&&wd("9");function rm(a,b){om.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.charCode=this.keyCode=this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.h=this.state=null;a&&this.init(a,b)}
y(rm,om);
rm.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;if(e){if(ld){var f;a:{try{pf(e.nodeName);f=!0;break a}catch(h){}f=!1}f||(e=null)}}else"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;null===d?(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||
0):(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.state=a.state;this.h=a;a.defaultPrevented&&this.preventDefault()};
rm.prototype.stopPropagation=function(){rm.I.stopPropagation.call(this);this.h.stopPropagation?this.h.stopPropagation():this.h.cancelBubble=!0};
rm.prototype.preventDefault=function(){rm.I.preventDefault.call(this);var a=this.h;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,qm)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var sm="closure_listenable_"+(1E6*Math.random()|0),tm=0;function um(a,b,c,d,e){this.listener=a;this.f=null;this.src=b;this.type=c;this.qb=!!d;this.ub=e;this.key=++tm;this.Wa=this.pb=!1}
function vm(a){a.Wa=!0;a.listener=null;a.f=null;a.src=null;a.ub=null}
;function wm(a){this.src=a;this.f={};this.h=0}
function xm(a,b,c,d,e){var f=b.toString();b=a.f[f];b||(b=a.f[f]=[],a.h++);var h=ym(b,c,d,e);-1<h?(a=b[h],a.pb=!1):(a=new um(c,a.src,f,!!d,e),a.pb=!1,b.push(a));return a}
wm.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.f))return!1;var e=this.f[a];b=ym(e,b,c,d);return-1<b?(vm(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.f[a],this.h--),!0):!1};
function zm(a,b){var c=b.type;c in a.f&&Ua(a.f[c],b)&&(vm(b),0==a.f[c].length&&(delete a.f[c],a.h--))}
wm.prototype.removeAll=function(a){a=a&&a.toString();var b=0,c;for(c in this.f)if(!a||c==a){for(var d=this.f[c],e=0;e<d.length;e++)++b,vm(d[e]);delete this.f[c];this.h--}return b};
function Am(a,b,c,d,e){a=a.f[b.toString()];b=-1;a&&(b=ym(a,c,d,e));return-1<b?a[b]:null}
function ym(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Wa&&f.listener==b&&f.qb==!!c&&f.ub==d)return e}return-1}
;var Bm="closure_lm_"+(1E6*Math.random()|0),Cm={},Dm=0;
function Em(a,b,c,d,e){if(da(b)){for(var f=0;f<b.length;f++)Em(a,b[f],c,d,e);return null}c=Fm(c);if(a&&a[sm])a=a.vb(b,c,d,e);else{if(!b)throw Error("Invalid event type");var f=!!d,h=Gm(a);h||(a[Bm]=h=new wm(a));c=xm(h,b,c,d,e);if(!c.f){d=Hm();c.f=d;d.src=a;d.listener=c;if(a.addEventListener)a.addEventListener(b.toString(),d,f);else if(a.attachEvent)a.attachEvent(Im(b.toString()),d);else throw Error("addEventListener and attachEvent are unavailable.");Dm++}a=c}return a}
function Hm(){var a=Jm,b=pm?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b}
function Km(a,b,c,d,e){if(da(b))for(var f=0;f<b.length;f++)Km(a,b[f],c,d,e);else c=Fm(c),a&&a[sm]?a.Gb(b,c,d,e):a&&(a=Gm(a))&&(b=Am(a,b,c,!!d,e))&&Lm(b)}
function Lm(a){if(!ga(a)&&a&&!a.Wa){var b=a.src;if(b&&b[sm])zm(b.j,a);else{var c=a.type,d=a.f;b.removeEventListener?b.removeEventListener(c,d,a.qb):b.detachEvent&&b.detachEvent(Im(c),d);Dm--;(c=Gm(b))?(zm(c,a),0==c.h&&(c.src=null,b[Bm]=null)):vm(a)}}}
function Im(a){return a in Cm?Cm[a]:Cm[a]="on"+a}
function Mm(a,b,c,d){var e=!0;if(a=Gm(a))if(b=a.f[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.qb==c&&!f.Wa&&(f=Nm(f,d),e=e&&!1!==f)}return e}
function Nm(a,b){var c=a.listener,d=a.ub||a.src;a.pb&&Lm(a);return c.call(d,b)}
function Jm(a,b){if(a.Wa)return!0;if(!pm){var c=b||r("window.event"),d=new rm(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(l){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.currentTarget;f;f=f.parentNode)c.push(f);for(var f=a.type,h=c.length-1;!d.f&&0<=h;h--){d.currentTarget=c[h];var k=Mm(c[h],f,!0,d),e=e&&k}for(h=0;!d.f&&h<c.length;h++)d.currentTarget=c[h],k=Mm(c[h],f,!1,d),e=e&&k}return e}return Nm(a,new rm(b,this))}
function Gm(a){a=a[Bm];return a instanceof wm?a:null}
var Om="__closure_events_fn_"+(1E9*Math.random()>>>0);function Fm(a){if(ha(a))return a;a[Om]||(a[Om]=function(b){return a.handleEvent(b)});
return a[Om]}
;function Pm(){E.call(this);this.j=new wm(this);this.Ba=this;this.qa=null}
y(Pm,E);Pm.prototype[sm]=!0;g=Pm.prototype;g.addEventListener=function(a,b,c,d){Em(this,a,b,c,d)};
g.removeEventListener=function(a,b,c,d){Km(this,a,b,c,d)};
function Qm(a,b){var c,d=a.qa;if(d){c=[];for(var e=1;d;d=d.qa)c.push(d),++e}var d=a.Ba,e=b,f=e.type||e;if(v(e))e=new om(e,d);else if(e instanceof om)e.target=e.target||d;else{var h=e,e=new om(f,d);vb(e,h)}var h=!0,k;if(c)for(var l=c.length-1;!e.f&&0<=l;l--)k=e.currentTarget=c[l],h=Rm(k,f,!0,e)&&h;e.f||(k=e.currentTarget=d,h=Rm(k,f,!0,e)&&h,e.f||(h=Rm(k,f,!1,e)&&h));if(c)for(l=0;!e.f&&l<c.length;l++)k=e.currentTarget=c[l],h=Rm(k,f,!1,e)&&h}
g.G=function(){Pm.I.G.call(this);this.removeAllListeners();this.qa=null};
g.vb=function(a,b,c,d){return xm(this.j,String(a),b,c,d)};
g.Gb=function(a,b,c,d){return this.j.remove(String(a),b,c,d)};
g.removeAllListeners=function(a){return this.j?this.j.removeAll(a):0};
function Rm(a,b,c,d){b=a.j.f[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var h=b[f];if(h&&!h.Wa&&h.qb==c){var k=h.listener,l=h.ub||h.src;h.pb&&zm(a.j,h);e=!1!==k.call(l,d)&&e}}return e&&0!=d.Sc}
;function Sm(a,b){this.h=new Dd(a);this.f=b?Bd:Ad}
Sm.prototype.stringify=function(a){return Cd(this.h,a)};
Sm.prototype.parse=function(a){return this.f(a)};function Tm(a,b){this.f=0;this.B=void 0;this.l=this.h=this.j=null;this.o=this.A=!1;if(a!=t)try{var c=this;a.call(b,function(a){Um(c,2,a)},function(a){Um(c,3,a)})}catch(d){Um(this,3,d)}}
function Vm(){this.next=this.context=this.h=this.l=this.f=null;this.j=!1}
Vm.prototype.reset=function(){this.context=this.h=this.l=this.f=null;this.j=!1};
var Wm=new Wb(function(){return new Vm},function(a){a.reset()},100);
function Xm(a,b,c){var d=Wm.get();d.l=a;d.h=b;d.context=c;return d}
function Ym(a){return new Tm(function(b,c){c(a)})}
Tm.prototype.then=function(a,b,c){return Zm(this,ha(a)?a:null,ha(b)?b:null,c)};
Tm.prototype.then=Tm.prototype.then;Tm.prototype.$goog_Thenable=!0;Tm.prototype.cancel=function(a){0==this.f&&ac(function(){var b=new $m(a);an(this,b)},this)};
function an(a,b){if(0==a.f)if(a.j){var c=a.j;if(c.h){for(var d=0,e=null,f=null,h=c.h;h&&(h.j||(d++,h.f==a&&(e=h),!(e&&1<d)));h=h.next)e||(f=h);e&&(0==c.f&&1==d?an(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):bn(c),cn(c,e,3,b)))}a.j=null}else Um(a,3,b)}
function dn(a,b){a.h||2!=a.f&&3!=a.f||en(a);a.l?a.l.next=b:a.h=b;a.l=b}
function Zm(a,b,c,d){var e=Xm(null,null,null);e.f=new Tm(function(a,h){e.l=b?function(c){try{var e=b.call(d,c);a(e)}catch(n){h(n)}}:a;
e.h=c?function(b){try{var e=c.call(d,b);!p(e)&&b instanceof $m?h(b):a(e)}catch(n){h(n)}}:h});
e.f.j=a;dn(a,e);return e.f}
Tm.prototype.K=function(a){this.f=0;Um(this,2,a)};
Tm.prototype.J=function(a){this.f=0;Um(this,3,a)};
function Um(a,b,c){if(0==a.f){a==c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.f=1;var d;a:{var e=c,f=a.K,h=a.J;if(e instanceof Tm)dn(e,Xm(f||t,h||null,a)),d=!0;else{var k;if(e)try{k=!!e.$goog_Thenable}catch(n){k=!1}else k=!1;if(k)e.then(f,h,a),d=!0;else{if(ia(e))try{var l=e.then;if(ha(l)){fn(e,l,f,h,a);d=!0;break a}}catch(n){h.call(a,n);d=!0;break a}d=!1}}}d||(a.B=c,a.f=b,a.j=null,en(a),3!=b||c instanceof $m||gn(a,c))}}
function fn(a,b,c,d,e){function f(a){k||(k=!0,d.call(e,a))}
function h(a){k||(k=!0,c.call(e,a))}
var k=!1;try{b.call(a,h,f)}catch(l){f(l)}}
function en(a){a.A||(a.A=!0,ac(a.C,a))}
function bn(a){var b=null;a.h&&(b=a.h,a.h=b.next,b.next=null);a.h||(a.l=null);return b}
Tm.prototype.C=function(){for(var a=null;a=bn(this);)cn(this,a,this.f,this.B);this.A=!1};
function cn(a,b,c,d){if(3==c&&b.h&&!b.j)for(;a&&a.o;a=a.j)a.o=!1;if(b.f)b.f.j=null,hn(b,c,d);else try{b.j?b.l.call(b.context):hn(b,c,d)}catch(e){jn.call(null,e)}Xb(Wm,b)}
function hn(a,b,c){2==b?a.l.call(a.context,c):a.h&&a.h.call(a.context,c)}
function gn(a,b){a.o=!0;ac(function(){a.o&&jn.call(null,b)})}
var jn=Sb;function $m(a){ra.call(this,a)}
y($m,ra);$m.prototype.name="cancel";function kn(a,b){Pm.call(this);this.f=a||1;this.h=b||m;this.l=w(this.Ge,this);this.o=x()}
y(kn,Pm);g=kn.prototype;g.za=!1;g.ea=null;function ln(a,b){a.f=b;a.ea&&a.za?(a.stop(),a.Fa()):a.ea&&a.stop()}
g.Ge=function(){if(this.za){var a=x()-this.o;0<a&&a<.8*this.f?this.ea=this.h.setTimeout(this.l,this.f-a):(this.ea&&(this.h.clearTimeout(this.ea),this.ea=null),Qm(this,"tick"),this.za&&(this.ea=this.h.setTimeout(this.l,this.f),this.o=x()))}};
g.Fa=function(){this.za=!0;this.ea||(this.ea=this.h.setTimeout(this.l,this.f),this.o=x())};
g.stop=function(){this.za=!1;this.ea&&(this.h.clearTimeout(this.ea),this.ea=null)};
g.G=function(){kn.I.G.call(this);this.stop();delete this.h};
function mn(a,b,c){if(ha(a))c&&(a=w(a,c));else if(a&&"function"==typeof a.handleEvent)a=w(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:m.setTimeout(a,b||0)}
;function nn(a,b,c){E.call(this);this.l=null!=c?w(a,c):a;this.j=b;this.h=w(this.je,this);this.f=[]}
y(nn,E);g=nn.prototype;g.Db=!1;g.dc=0;g.Sa=null;g.zd=function(a){this.f=arguments;this.Sa||this.dc?this.Db=!0:on(this)};
g.stop=function(){this.Sa&&(m.clearTimeout(this.Sa),this.Sa=null,this.Db=!1,this.f=[])};
g.pause=function(){this.dc++};
g.G=function(){nn.I.G.call(this);this.stop()};
g.je=function(){this.Sa=null;this.Db&&!this.dc&&(this.Db=!1,on(this))};
function on(a){a.Sa=mn(a.h,a.j);a.l.apply(null,a.f)}
;function pn(a){E.call(this);this.h=a;this.f={}}
y(pn,E);var qn=[];g=pn.prototype;g.vb=function(a,b,c,d){da(b)||(b&&(qn[0]=b.toString()),b=qn);for(var e=0;e<b.length;e++){var f=Em(a,b[e],c||this.handleEvent,d||!1,this.h||this);if(!f)break;this.f[f.key]=f}return this};
g.Gb=function(a,b,c,d,e){if(da(b))for(var f=0;f<b.length;f++)this.Gb(a,b[f],c,d,e);else c=c||this.handleEvent,e=e||this.h||this,c=Fm(c),d=!!d,b=a&&a[sm]?Am(a.j,String(b),c,d,e):a?(a=Gm(a))?Am(a,b,c,d,e):null:null,b&&(Lm(b),delete this.f[b.key]);return this};
g.removeAll=function(){db(this.f,function(a,b){this.f.hasOwnProperty(b)&&Lm(a)},this);
this.f={}};
g.G=function(){pn.I.G.call(this);this.removeAll()};
g.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};function rn(){}
rn.prototype.f=null;function sn(a){var b;(b=a.f)||(b={},tn(a)&&(b[0]=!0,b[1]=!0),b=a.f=b);return b}
;var un;function vn(){}
y(vn,rn);function wn(a){return(a=tn(a))?new ActiveXObject(a):new XMLHttpRequest}
function tn(a){if(!a.h&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.h=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.h}
un=new vn;function xn(a,b,c,d,e){this.f=a;this.j=c;this.C=d;this.B=e||1;this.o=45E3;this.l=new pn(this);this.h=new kn;ln(this.h,250)}
g=xn.prototype;g.La=null;g.ma=!1;g.Ya=null;g.ic=null;g.lb=null;g.Xa=null;g.Ca=null;g.Ga=null;g.Oa=null;g.O=null;g.ob=0;g.na=null;g.Jb=null;g.Ma=null;g.ib=-1;g.Tc=!0;g.Ia=!1;g.Zb=0;g.Bb=null;var yn={},zn={};g=xn.prototype;g.setTimeout=function(a){this.o=a};
function An(a,b,c){a.Xa=1;a.Ca=Dg(b.clone());a.Oa=c;a.A=!0;Bn(a,null)}
function Cn(a,b,c,d,e){a.Xa=1;a.Ca=Dg(b.clone());a.Oa=null;a.A=c;e&&(a.Tc=!1);Bn(a,d)}
function Bn(a,b){a.lb=x();Dn(a);a.Ga=a.Ca.clone();Bg(a.Ga,"t",a.B);a.ob=0;a.O=a.f.Sb(a.f.nb()?b:null);0<a.Zb&&(a.Bb=new nn(w(a.Zc,a,a.O),a.Zb));a.l.vb(a.O,"readystatechange",a.te);var c=a.La?sb(a.La):{};a.Oa?(a.Jb="POST",c["Content-Type"]="application/x-www-form-urlencoded",a.O.send(a.Ga,a.Jb,a.Oa,c)):(a.Jb="GET",a.Tc&&!md&&(c.Connection="close"),a.O.send(a.Ga,a.Jb,null,c));a.f.la(1)}
g.te=function(a){a=a.target;var b=this.Bb;b&&3==En(a)?b.zd():this.Zc(a)};
g.Zc=function(a){try{if(a==this.O)a:{var b=En(this.O),c=this.O.o,d=this.O.getStatus();if(L&&!xd(10)||md&&!wd("420+")){if(4>b)break a}else if(3>b||3==b&&!jd&&!Fn(this.O))break a;this.Ia||4!=b||7==c||(8==c||0>=d?this.f.la(3):this.f.la(2));Gn(this);var e=this.O.getStatus();this.ib=e;var f=Fn(this.O);(this.ma=200==e)?(4==b&&Hn(this),this.A?(In(this,b,f),jd&&this.ma&&3==b&&(this.l.vb(this.h,"tick",this.se),this.h.Fa())):Jn(this,f),this.ma&&!this.Ia&&(4==b?this.f.xb(this):(this.ma=!1,Dn(this)))):(this.Ma=
400==e&&0<f.indexOf("Unknown SID")?3:0,X(),Hn(this),Kn(this))}}catch(h){this.O&&Fn(this.O)}finally{}};
function In(a,b,c){for(var d=!0;!a.Ia&&a.ob<c.length;){var e=Ln(a,c);if(e==zn){4==b&&(a.Ma=4,X(),d=!1);break}else if(e==yn){a.Ma=4;X();d=!1;break}else Jn(a,e)}4==b&&0==c.length&&(a.Ma=1,X(),d=!1);a.ma=a.ma&&d;d||(Hn(a),Kn(a))}
g.se=function(){var a=En(this.O),b=Fn(this.O);this.ob<b.length&&(Gn(this),In(this,a,b),this.ma&&4!=a&&Dn(this))};
function Ln(a,b){var c=a.ob,d=b.indexOf("\n",c);if(-1==d)return zn;c=Number(b.substring(c,d));if(isNaN(c))return yn;d+=1;if(d+c>b.length)return zn;var e=b.substr(d,c);a.ob=d+c;return e}
function Mn(a,b){a.lb=x();Dn(a);var c=b?window.location.hostname:"";a.Ga=a.Ca.clone();O(a.Ga,"DOMAIN",c);O(a.Ga,"t",a.B);try{a.na=new ActiveXObject("htmlfile")}catch(n){Hn(a);a.Ma=7;X();Kn(a);return}var d="<html><body>";if(b){for(var e="",f=0;f<c.length;f++){var h=c.charAt(f);if("<"==h)e+="\\x3c";else if(">"==h)e+="\\x3e";else{if(h in Ha)h=Ha[h];else if(h in Ga)h=Ha[h]=Ga[h];else{var k=h,l=h.charCodeAt(0);if(31<l&&127>l)k=h;else{if(256>l){if(k="\\x",16>l||256<l)k+="0"}else k="\\u",4096>l&&(k+="0");
k+=l.toString(16).toUpperCase()}h=Ha[h]=k}e+=h}}d+='<script>document.domain="'+e+'"\x3c/script>'}d+="</body></html>";c=Qc(Bb("b/12014412"),d);a.na.open();a.na.write(Kb(c));a.na.close();a.na.parentWindow.m=w(a.ne,a);a.na.parentWindow.d=w(a.Oc,a,!0);a.na.parentWindow.rpcClose=w(a.Oc,a,!1);c=a.na.createElement("DIV");a.na.parentWindow.document.body.appendChild(c);d=Gb(a.Ga.toString());d=Eb(d);Ba.test(d)&&(-1!=d.indexOf("&")&&(d=d.replace(va,"&amp;")),-1!=d.indexOf("<")&&(d=d.replace(wa,"&lt;")),-1!=
d.indexOf(">")&&(d=d.replace(xa,"&gt;")),-1!=d.indexOf('"')&&(d=d.replace(ya,"&quot;")),-1!=d.indexOf("'")&&(d=d.replace(za,"&#39;")),-1!=d.indexOf("\x00")&&(d=d.replace(Aa,"&#0;")));d=Qc(Bb("b/12014412"),'<iframe src="'+d+'"></iframe>');c.innerHTML=Kb(d);a.f.la(1)}
g.ne=function(a){Nn(w(this.me,this,a),0)};
g.me=function(a){this.Ia||(Gn(this),Jn(this,a),Dn(this))};
g.Oc=function(a){Nn(w(this.le,this,a),0)};
g.le=function(a){this.Ia||(Hn(this),this.ma=a,this.f.xb(this),this.f.la(4))};
g.cancel=function(){this.Ia=!0;Hn(this)};
function Dn(a){a.ic=x()+a.o;On(a,a.o)}
function On(a,b){if(null!=a.Ya)throw Error("WatchDog timer not null");a.Ya=Nn(w(a.pe,a),b)}
function Gn(a){a.Ya&&(m.clearTimeout(a.Ya),a.Ya=null)}
g.pe=function(){this.Ya=null;var a=x();0<=a-this.ic?(2!=this.Xa&&this.f.la(3),Hn(this),this.Ma=2,X(),Kn(this)):On(this,this.ic-a)};
function Kn(a){a.f.Cc()||a.Ia||a.f.xb(a)}
function Hn(a){Gn(a);F(a.Bb);a.Bb=null;a.h.stop();a.l.removeAll();if(a.O){var b=a.O;a.O=null;Pn(b);b.dispose()}a.na&&(a.na=null)}
function Jn(a,b){try{a.f.Jc(a,b),a.f.la(4)}catch(c){}}
;function Qn(a,b,c,d,e){if(0==d)c(!1);else{var f=e||0;d--;Rn(a,b,function(e){e?c(!0):m.setTimeout(function(){Qn(a,b,c,d,f)},f)})}}
function Rn(a,b,c){var d=new Image;d.onload=function(){try{Sn(d),c(!0)}catch(a){}};
d.onerror=function(){try{Sn(d),c(!1)}catch(a){}};
d.onabort=function(){try{Sn(d),c(!1)}catch(a){}};
d.ontimeout=function(){try{Sn(d),c(!1)}catch(a){}};
m.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
d.src=a}
function Sn(a){a.onload=null;a.onerror=null;a.onabort=null;a.ontimeout=null}
;function Tn(a){this.f=a;this.h=new Sm(null,!0)}
g=Tn.prototype;g.Xb=null;g.da=null;g.Cb=!1;g.Wc=null;g.rb=null;g.bc=null;g.Yb=null;g.fa=null;g.Aa=-1;g.gb=null;g.ab=null;g.connect=function(a){this.Yb=a;a=Un(this.f,null,this.Yb);X();this.Wc=x();var b=this.f.C;null!=b?(this.gb=b[0],(this.ab=b[1])?(this.fa=1,Vn(this)):(this.fa=2,Wn(this))):(Bg(a,"MODE","init"),this.da=new xn(this,0,void 0,void 0,void 0),this.da.La=this.Xb,Cn(this.da,a,!1,null,!0),this.fa=0)};
function Vn(a){var b=Un(a.f,a.ab,"/mail/images/cleardot.gif");Dg(b);Qn(b.toString(),5E3,w(a.ud,a),3,2E3);a.la(1)}
g.ud=function(a){if(a)this.fa=2,Wn(this);else{X();var b=this.f;b.ia=b.Da.Aa;Xn(b,9)}a&&this.la(2)};
function Wn(a){var b=a.f.K;if(null!=b)X(),b?(X(),Yn(a.f,a,!1)):(X(),Yn(a.f,a,!0));else if(a.da=new xn(a,0,void 0,void 0,void 0),a.da.La=a.Xb,b=a.f,b=Un(b,b.nb()?a.gb:null,a.Yb),X(),!L||xd(10))Bg(b,"TYPE","xmlhttp"),Cn(a.da,b,!1,a.gb,!1);else{Bg(b,"TYPE","html");var c=a.da;a=!!a.gb;c.Xa=3;c.Ca=Dg(b.clone());Mn(c,a)}}
g.Sb=function(a){return this.f.Sb(a)};
g.Cc=function(){return!1};
g.Jc=function(a,b){this.Aa=a.ib;if(0==this.fa)if(b){try{var c=this.h.parse(b)}catch(d){c=this.f;c.ia=this.Aa;Xn(c,2);return}this.gb=c[0];this.ab=c[1]}else c=this.f,c.ia=this.Aa,Xn(c,2);else if(2==this.fa)if(this.Cb)X(),this.bc=x();else if("11111"==b){if(X(),this.Cb=!0,this.rb=x(),c=this.rb-this.Wc,!L||xd(10)||500>c)this.Aa=200,this.da.cancel(),X(),Yn(this.f,this,!0)}else X(),this.rb=this.bc=x(),this.Cb=!1};
g.xb=function(){this.Aa=this.da.ib;if(this.da.ma)0==this.fa?this.ab?(this.fa=1,Vn(this)):(this.fa=2,Wn(this)):2==this.fa&&(a=!1,(a=!L||xd(10)?this.Cb:200>this.bc-this.rb?!1:!0)?(X(),Yn(this.f,this,!0)):(X(),Yn(this.f,this,!1)));else{0==this.fa?X():2==this.fa&&X();var a=this.f;a.ia=this.Aa;Xn(a,2)}};
g.nb=function(){return this.f.nb()};
g.la=function(a){this.f.la(a)};function Zn(a){Pm.call(this);this.headers=new Wc;this.T=a||null;this.h=!1;this.S=this.f=null;this.ta=this.J="";this.o=0;this.A="";this.l=this.ha=this.C=this.Z=!1;this.B=0;this.L=null;this.ua="";this.P=this.va=!1}
y(Zn,Pm);var $n=/^https?$/i,ao=["POST","PUT"];g=Zn.prototype;
g.send=function(a,b,c,d){if(this.f)throw Error("[goog.net.XhrIo] Object is active with another request="+this.J+"; newUri="+a);b=b?b.toUpperCase():"GET";this.J=a;this.A="";this.o=0;this.ta=b;this.Z=!1;this.h=!0;this.f=this.T?wn(this.T):wn(un);this.S=this.T?sn(this.T):sn(un);this.f.onreadystatechange=w(this.Ic,this);try{mm(bo(this,"Opening Xhr")),this.ha=!0,this.f.open(b,String(a),!0),this.ha=!1}catch(f){mm(bo(this,"Error opening Xhr: "+f.message));co(this,f);return}a=c||"";var e=this.headers.clone();
d&&cd(d,function(a,b){e.set(b,a)});
d=Pa(e.ra(),eo);c=m.FormData&&a instanceof m.FormData;!B(ao,b)||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(a,b){this.f.setRequestHeader(b,a)},this);
this.ua&&(this.f.responseType=this.ua);lb(this.f)&&(this.f.withCredentials=this.va);try{fo(this),0<this.B&&(this.P=go(this.f),mm(bo(this,"Will abort after "+this.B+"ms if incomplete, xhr2 "+this.P)),this.P?(this.f.timeout=this.B,this.f.ontimeout=w(this.Bc,this)):this.L=mn(this.Bc,this.B,this)),mm(bo(this,"Sending request")),this.C=!0,this.f.send(a),this.C=!1}catch(f){mm(bo(this,"Send error: "+f.message)),co(this,f)}};
function go(a){return L&&wd(9)&&ga(a.timeout)&&p(a.ontimeout)}
function eo(a){return"content-type"==a.toLowerCase()}
g.Bc=function(){"undefined"!=typeof aa&&this.f&&(this.A="Timed out after "+this.B+"ms, aborting",this.o=8,bo(this,this.A),Qm(this,"timeout"),Pn(this,8))};
function co(a,b){a.h=!1;a.f&&(a.l=!0,a.f.abort(),a.l=!1);a.A=b;a.o=5;ho(a);io(a)}
function ho(a){a.Z||(a.Z=!0,Qm(a,"complete"),Qm(a,"error"))}
function Pn(a,b){a.f&&a.h&&(bo(a,"Aborting"),a.h=!1,a.l=!0,a.f.abort(),a.l=!1,a.o=b||7,Qm(a,"complete"),Qm(a,"abort"),io(a))}
g.G=function(){this.f&&(this.h&&(this.h=!1,this.l=!0,this.f.abort(),this.l=!1),io(this,!0));Zn.I.G.call(this)};
g.Ic=function(){this.isDisposed()||(this.ha||this.C||this.l?jo(this):this.be())};
g.be=function(){jo(this)};
function jo(a){if(a.h&&"undefined"!=typeof aa)if(a.S[1]&&4==En(a)&&2==a.getStatus())bo(a,"Local request error detected and ignored");else if(a.C&&4==En(a))mn(a.Ic,0,a);else if(Qm(a,"readystatechange"),4==En(a)){bo(a,"Request complete");a.h=!1;try{var b=a.getStatus(),c;a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=String(a.J).match(Id)[1]||null;if(!f&&m.self&&m.self.location)var h=m.self.location.protocol,
f=h.substr(0,h.length-1);e=!$n.test(f?f.toLowerCase():"")}d=e}if(d)Qm(a,"complete"),Qm(a,"success");else{a.o=6;var k;try{k=2<En(a)?a.f.statusText:""}catch(l){k=""}a.A=k+" ["+a.getStatus()+"]";ho(a)}}finally{io(a)}}}
function io(a,b){if(a.f){fo(a);var c=a.f,d=a.S[0]?t:null;a.f=null;a.S=null;b||Qm(a,"ready");try{c.onreadystatechange=d}catch(e){}}}
function fo(a){a.f&&a.P&&(a.f.ontimeout=null);ga(a.L)&&(m.clearTimeout(a.L),a.L=null)}
function En(a){return a.f?a.f.readyState:0}
g.getStatus=function(){try{return 2<En(this)?this.f.status:-1}catch(a){return-1}};
function Fn(a){try{return a.f?a.f.responseText:""}catch(b){return""}}
function bo(a,b){return b+" ["+a.ta+" "+a.J+" "+a.getStatus()+"]"}
;function ko(a,b,c){this.B=a||null;this.f=1;this.h=[];this.l=[];this.o=new Sm(null,!0);this.C=b||null;this.K=null!=c?c:null}
function lo(a,b){this.f=a;this.map=b;this.context=null}
g=ko.prototype;g.eb=null;g.Y=null;g.M=null;g.Wb=null;g.sb=null;g.pc=null;g.tb=null;g.jb=0;g.Md=0;g.W=null;g.Ea=null;g.ya=null;g.Ka=null;g.Da=null;g.Ib=null;g.Ta=-1;g.Dc=-1;g.ia=-1;g.fb=0;g.Ra=0;g.Ja=8;var mo=new Pm;function no(a){om.call(this,"statevent",a)}
y(no,om);function oo(a,b){om.call(this,"timingevent",a);this.size=b}
y(oo,om);function po(a){om.call(this,"serverreachability",a)}
y(po,om);g=ko.prototype;g.connect=function(a,b,c,d,e){X();this.Wb=b;this.eb=c||{};d&&p(e)&&(this.eb.OSID=d,this.eb.OAID=e);this.Da=new Tn(this);this.Da.Xb=null;this.Da.h=this.o;this.Da.connect(a)};
function qo(a){ro(a);if(3==a.f){var b=a.jb++,c=a.sb.clone();O(c,"SID",a.j);O(c,"RID",b);O(c,"TYPE","terminate");so(a,c);b=new xn(a,0,a.j,b,void 0);b.Xa=2;b.Ca=Dg(c.clone());(new Image).src=b.Ca;b.lb=x();Dn(b)}to(a)}
function ro(a){if(a.Da){var b=a.Da;b.da&&(b.da.cancel(),b.da=null);b.Aa=-1;a.Da=null}a.M&&(a.M.cancel(),a.M=null);a.ya&&(m.clearTimeout(a.ya),a.ya=null);uo(a);a.Y&&(a.Y.cancel(),a.Y=null);a.Ea&&(m.clearTimeout(a.Ea),a.Ea=null)}
function vo(a,b){if(0==a.f)throw Error("Invalid operation: sending map when state is closed");a.h.push(new lo(a.Md++,b));2!=a.f&&3!=a.f||wo(a)}
g.Cc=function(){return 0==this.f};
function wo(a){a.Y||a.Ea||(a.Ea=Nn(w(a.Nc,a),0),a.fb=0)}
g.Nc=function(a){this.Ea=null;xo(this,a)};
function xo(a,b){if(1==a.f){if(!b){a.jb=Math.floor(1E5*Math.random());var c=a.jb++,d=new xn(a,0,"",c,void 0);d.La=null;var e=yo(a),f=a.sb.clone();O(f,"RID",c);a.B&&O(f,"CVER",a.B);so(a,f);An(d,f,e);a.Y=d;a.f=2}}else 3==a.f&&(b?zo(a,b):0!=a.h.length&&(a.Y||zo(a)))}
function zo(a,b){var c,d;b?6<a.Ja?(a.h=a.l.concat(a.h),a.l.length=0,c=a.jb-1,d=yo(a)):(c=b.C,d=b.Oa):(c=a.jb++,d=yo(a));var e=a.sb.clone();O(e,"SID",a.j);O(e,"RID",c);O(e,"AID",a.Ta);so(a,e);c=new xn(a,0,a.j,c,a.fb+1);c.La=null;c.setTimeout(Math.round(1E4)+Math.round(1E4*Math.random()));a.Y=c;An(c,e,d)}
function so(a,b){if(a.W){var c=a.W.yc(a);c&&db(c,function(a,c){O(b,c,a)})}}
function yo(a){var b=Math.min(a.h.length,1E3),c=["count="+b],d;6<a.Ja&&0<b?(d=a.h[0].f,c.push("ofs="+d)):d=0;for(var e=0;e<b;e++){var f=a.h[e].f,h=a.h[e].map,f=6>=a.Ja?e:f-d;try{cd(h,function(a,b){c.push("req"+f+"_"+b+"="+encodeURIComponent(a))})}catch(k){c.push("req"+f+"_type="+encodeURIComponent("_badmap"))}}a.l=a.l.concat(a.h.splice(0,b));
return c.join("&")}
function Ao(a){a.M||a.ya||(a.A=1,a.ya=Nn(w(a.Mc,a),0),a.Ra=0)}
function Bo(a){if(a.M||a.ya||3<=a.Ra)return!1;a.A++;a.ya=Nn(w(a.Mc,a),Co(a,a.Ra));a.Ra++;return!0}
g.Mc=function(){this.ya=null;this.M=new xn(this,0,this.j,"rpc",this.A);this.M.La=null;this.M.Zb=0;var a=this.pc.clone();O(a,"RID","rpc");O(a,"SID",this.j);O(a,"CI",this.Ib?"0":"1");O(a,"AID",this.Ta);so(this,a);if(!L||xd(10))O(a,"TYPE","xmlhttp"),Cn(this.M,a,!0,this.tb,!1);else{O(a,"TYPE","html");var b=this.M,c=!!this.tb;b.Xa=3;b.Ca=Dg(a.clone());Mn(b,c)}};
function Yn(a,b,c){a.Ib=c;a.ia=b.Aa;a.xd(1,0);a.sb=Un(a,null,a.Wb);wo(a)}
g.Jc=function(a,b){if(0!=this.f&&(this.M==a||this.Y==a))if(this.ia=a.ib,this.Y==a&&3==this.f)if(7<this.Ja){var c;try{c=this.o.parse(b)}catch(f){c=null}if(da(c)&&3==c.length)if(0==c[0])a:{if(!this.ya){if(this.M)if(this.M.lb+3E3<this.Y.lb)uo(this),this.M.cancel(),this.M=null;else break a;Bo(this);X()}}else this.Dc=c[1],0<this.Dc-this.Ta&&37500>c[2]&&this.Ib&&0==this.Ra&&!this.Ka&&(this.Ka=Nn(w(this.Nd,this),6E3));else Xn(this,11)}else"y2f%"!=b&&Xn(this,11);else if(this.M==a&&uo(this),!/^[\s\xa0]*$/.test(b)){c=
this.o.parse(b);da(c);for(var d=0;d<c.length;d++){var e=c[d];this.Ta=e[0];e=e[1];2==this.f?"c"==e[0]?(this.j=e[1],this.tb=e[2],e=e[3],null!=e?this.Ja=e:this.Ja=6,this.f=3,this.W&&this.W.wc(this),this.pc=Un(this,this.nb()?this.tb:null,this.Wb),Ao(this)):"stop"==e[0]&&Xn(this,7):3==this.f&&("stop"==e[0]?Xn(this,7):"noop"!=e[0]&&this.W&&this.W.uc(this,e),this.Ra=0)}}};
g.Nd=function(){null!=this.Ka&&(this.Ka=null,this.M.cancel(),this.M=null,Bo(this),X())};
function uo(a){null!=a.Ka&&(m.clearTimeout(a.Ka),a.Ka=null)}
g.xb=function(a){var b;if(this.M==a)uo(this),this.M=null,b=2;else if(this.Y==a)this.Y=null,b=1;else return;this.ia=a.ib;if(0!=this.f)if(a.ma)1==b?(x(),Qm(mo,new oo(mo,a.Oa?a.Oa.length:0)),wo(this),this.l.length=0):Ao(this);else{var c=a.Ma,d;if(!(d=3==c||7==c||0==c&&0<this.ia)){if(d=1==b)this.Y||this.Ea||1==this.f||2<=this.fb?d=!1:(this.Ea=Nn(w(this.Nc,this,a),Co(this,this.fb)),this.fb++,d=!0);d=!(d||2==b&&Bo(this))}if(d)switch(c){case 1:Xn(this,5);break;case 4:Xn(this,10);break;case 3:Xn(this,6);
break;case 7:Xn(this,12);break;default:Xn(this,2)}}};
function Co(a,b){var c=5E3+Math.floor(1E4*Math.random());a.W||(c*=2);return c*b}
g.xd=function(a){if(!B(arguments,this.f))throw Error("Unexpected channel state: "+this.f);};
function Xn(a,b){if(2==b||9==b){var c=null;a.W&&(c=null);var d=w(a.Fe,a);c||(c=new ng("//www.google.com/images/cleardot.gif"),Dg(c));Rn(c.toString(),1E4,d)}else X();Do(a,b)}
g.Fe=function(a){a?X():(X(),Do(this,8))};
function Do(a,b){a.f=0;a.W&&a.W.tc(a,b);to(a);ro(a)}
function to(a){a.f=0;a.ia=-1;if(a.W)if(0==a.l.length&&0==a.h.length)a.W.Pb(a);else{var b=Xa(a.l),c=Xa(a.h);a.l.length=0;a.h.length=0;a.W.Pb(a,b,c)}}
function Un(a,b,c){var d=Eg(c);if(""!=d.h)b&&pg(d,b+"."+d.h),qg(d,d.B);else var e=window.location,d=Fg(e.protocol,b?b+"."+e.hostname:e.hostname,e.port,c);a.eb&&db(a.eb,function(a,b){O(d,b,a)});
O(d,"VER",a.Ja);so(a,d);return d}
g.Sb=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new Zn;a.va=!1;return a};
function Nn(a,b){if(!ha(a))throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){a()},b)}
g.la=function(){Qm(mo,new po(mo))};
function X(){Qm(mo,new no(mo))}
g.nb=function(){return!(!L||xd(10))};
function Eo(){}
g=Eo.prototype;g.wc=function(){};
g.uc=function(){};
g.tc=function(){};
g.Pb=function(){};
g.yc=function(){return{}};function Fo(a,b){kn.call(this);this.A=0;if(ha(a))b&&(a=w(a,b));else if(a&&ha(a.handleEvent))a=w(a.handleEvent,a);else throw Error("Invalid listener argument");this.C=a;Em(this,"tick",w(this.B,this));Go(this)}
y(Fo,kn);Fo.prototype.B=function(){if(500<this.f){var a=this.f;24E4>2*a&&(a*=2);ln(this,a)}this.C()};
Fo.prototype.Fa=function(){Fo.I.Fa.call(this);this.A=x()+this.f};
Fo.prototype.stop=function(){this.A=0;Fo.I.stop.call(this)};
function Go(a){a.stop();ln(a,5E3+2E4*Math.random())}
;function Ho(a,b){this.sa=a;this.l=b;this.j=new G;this.h=new Fo(this.Le,this);this.f=null;this.J=!1;this.A=null;this.K="";this.C=this.o=0;this.B=[]}
y(Ho,Eo);g=Ho.prototype;g.subscribe=function(a,b,c){return this.j.subscribe(a,b,c)};
g.unsubscribe=function(a,b,c){return this.j.unsubscribe(a,b,c)};
g.oa=function(a){return this.j.oa(a)};
g.F=function(a,b){return this.j.F.apply(this.j,arguments)};
g.dispose=function(){this.J||(this.J=!0,this.j.clear(),Io(this),F(this.j))};
g.isDisposed=function(){return this.J};
function Jo(a){return{firstTestResults:[""],secondTestResults:!a.f.Ib,sessionId:a.f.j,arrayId:a.f.Ta}}
g.connect=function(a,b,c){if(!this.f||2!=this.f.f){this.K="";this.h.stop();this.A=a||null;this.o=b||0;a=this.sa+"/test";b=this.sa+"/bind";var d=new ko("1",c?c.firstTestResults:null,c?c.secondTestResults:null),e=this.f;e&&(e.W=null);d.W=this;this.f=d;e?this.f.connect(a,b,this.l,e.j,e.Ta):c?this.f.connect(a,b,this.l,c.sessionId,c.arrayId):this.f.connect(a,b,this.l)}};
function Io(a,b){a.C=b||0;a.h.stop();a.f&&(3==a.f.f&&xo(a.f),qo(a.f));a.C=0}
g.sendMessage=function(a,b){var c={_sc:a};b&&vb(c,b);this.h.za||2==(this.f?this.f.f:0)?this.B.push(c):this.f&&3==this.f.f&&vo(this.f,c)};
g.wc=function(){Go(this.h);this.A=null;this.o=0;if(this.B.length){var a=this.B;this.B=[];for(var b=0,c=a.length;b<c;++b)vo(this.f,a[b])}this.F("handlerOpened")};
g.tc=function(a,b){var c=2==b&&401==this.f.ia;if(4!=b&&!c){if(6==b||410==this.f.ia)c=this.h,c.stop(),ln(c,500);this.h.Fa()}this.F("handlerError",b)};
g.Pb=function(a,b,c){if(!this.h.za)this.F("handlerClosed");else if(c)for(a=0,b=c.length;a<b;++a){var d=c[a].map;d&&this.B.push(d)}};
g.yc=function(){var a={v:2};this.K&&(a.gsessionid=this.K);0!=this.o&&(a.ui=""+this.o);0!=this.C&&(a.ui=""+this.C);this.A&&vb(a,this.A);return a};
g.uc=function(a,b){"S"==b[0]?this.K=b[1]:"gracefulReconnect"==b[0]?(Go(this.h),this.h.Fa(),qo(this.f)):this.F("handlerMessage",new lm(b[0],b[1]))};
function Ko(a,b){(a.l.loungeIdToken=b)||a.h.stop()}
g.Le=function(){this.h.stop();var a=this.f,b=0;a.M&&b++;a.Y&&b++;0!=b?this.h.Fa():this.connect(this.A,this.o)};function Lo(a){this.h=null;this.index=-1;this.f=this.j="";this.C=this.l=-1;this.B=!1;this.J=null;this.K=this.A=0;this.o=null;this.reset(a)}
function Mo(a,b){if(a.j)throw Error(b+" is not allowed in V3.");}
function No(a){a.J=null;a.o=null;a.l=-1;a.A=0;a.K=x()}
Lo.prototype.reset=function(a){this.h=[];this.j="";this.index=-1;this.f="";No(this);this.C=-1;this.B=!1;a&&(this.h=a.videoIds,this.index=a.index,this.j=a.listId,this.f=a.videoId,this.l=a.playerState,this.C=a.volume,this.B=a.muted,this.J=a.audioTrackId,this.o=a.trackData,this.A=a.playerTime,this.K=a.playerTimeAt)};
function Oo(a){return a.j?a.f:a.h[a.index]}
function Po(a){switch(a.l){case 1:return(x()-a.K)/1E3+a.A;case -1E3:return 0}return a.A}
function Qo(a,b){Mo(a,"setVideoId");var c=a.index;a.index=La(a.h,b);c!=a.index&&No(a)}
function Ro(a,b,c){Mo(a,"setPlaylist");c=c||Oo(a);ab(a.h,b)&&c==Oo(a)||(a.h=Xa(b),Qo(a,c))}
Lo.prototype.remove=function(a){Mo(this,"remove");var b=Oo(this);return Ua(this.h,a)?(this.index=La(this.h,b),!0):!1};
function So(a){var b={};b.videoIds=Xa(a.h);b.index=a.index;b.listId=a.j;b.videoId=a.f;b.playerState=a.l;b.volume=a.C;b.muted=a.B;b.audioTrackId=a.J;b.trackData=tb(a.o);b.playerTime=a.A;b.playerTimeAt=a.K;return b}
Lo.prototype.clone=function(){return new Lo(So(this))};function Y(a,b,c){V.call(this);this.A=NaN;this.T=!1;this.J=this.C=this.S=this.L=NaN;this.Z=[];this.j=this.D=this.f=null;this.Pa=a;this.Z.push(N(window,"beforeunload",w(this.Fd,this)));this.h=[];this.D=new Lo;3==c["mdx-version"]&&(this.D.j="RQ"+b.token);this.ha=b.id;this.f=To(this,c);this.f.subscribe("handlerOpened",this.Sd,this);this.f.subscribe("handlerClosed",this.Od,this);this.f.subscribe("handlerError",this.Pd,this);this.D.j?this.f.subscribe("handlerMessage",this.Qd,this):this.f.subscribe("handlerMessage",
this.Rd,this);Ko(this.f,b.token);this.subscribe("remoteQueueChange",function(){var a=this.D.f;Bk()&&U("yt-remote-session-video-id",a)},this)}
y(Y,V);g=Y.prototype;
g.connect=function(a,b){if(b){if(this.D.j){var c=b.listId,d=b.videoId,e=b.index,f=b.currentTime||0;5>=f&&(f=0);h={videoId:d,currentTime:f};c&&(h.listId=c);p(e)&&(h.currentIndex=e);c&&(this.D.j=c);this.D.f=d;this.D.index=e||0}else{var d=b.videoIds[b.index],f=b.currentTime||0;5>=f&&(f=0);var h={videoIds:d,videoId:d,currentTime:f};this.D.h=[d];this.D.index=0}this.D.state=3;c=this.D;c.A=f;c.K=x();this.H("Connecting with setPlaylist and params: "+M(h));this.f.connect({method:"setPlaylist",params:M(h)},
a,Fk())}else this.H("Connecting without params"),this.f.connect({},a,Fk());Uo(this)};
g.dispose=function(){this.isDisposed()||(this.F("beforeDispose"),Vo(this,3));Y.I.dispose.call(this)};
g.G=function(){Wo(this);Xo(this);Yo(this);J(this.C);this.C=NaN;J(this.J);this.J=NaN;this.j=null;Xe(this.Z);this.Z.length=0;this.f.dispose();Y.I.G.call(this);this.h=this.D=this.f=null};
g.H=function(a){Nj("conn",a)};
g.Fd=function(){this.o(2)};
function To(a,b){return new Ho(bk(a.Pa,"/bc",void 0,!1),b)}
function Vo(a,b){a.F("proxyStateChange",b)}
function Uo(a){a.A=I(w(function(){this.H("Connecting timeout");this.o(1)},a),2E4)}
function Wo(a){J(a.A);a.A=NaN}
function Yo(a){J(a.L);a.L=NaN}
function Zo(a){Xo(a);a.S=I(w(function(){$o(this,"getNowPlaying")},a),2E4)}
function Xo(a){J(a.S);a.S=NaN}
function ap(a){var b=a.f;return!!b.f&&3==b.f.f&&isNaN(a.A)}
g.Sd=function(){this.H("Channel opened");this.T&&(this.T=!1,Yo(this),this.L=I(w(function(){this.H("Timing out waiting for a screen.");this.o(1)},this),15E3));
Ok(Jo(this.f),this.ha)};
g.Od=function(){this.H("Channel closed");isNaN(this.A)?Pk(!0):Pk();this.dispose()};
g.Pd=function(a){Pk();isNaN(this.B())?(this.H("Channel error: "+a+" without reconnection"),this.dispose()):(this.T=!0,this.H("Channel error: "+a+" with reconnection in "+this.B()+" ms"),Vo(this,2))};
function bp(a,b){b&&(Wo(a),Yo(a));b==ap(a)?b&&(Vo(a,1),$o(a,"getSubtitlesTrack")):b?(a.P()&&a.D.reset(),Vo(a,1),$o(a,"getNowPlaying"),cp(a)):a.o(1)}
function dp(a,b){var c=b.f.videoId;delete b.f.videoId;c==a.D.f&&(pb(b.f)?a.D.o=null:a.D.o=b.f,a.F("remotePlayerChange"))}
function ep(a,b){var c=b.f.videoId||b.f.video_id,d=parseInt(b.f.currentIndex,10);a.D.j=b.f.listId||a.D.j;var e=a.D,f=e.f;e.f=c;e.index=d;c!=f&&No(e);a.F("remoteQueueChange")}
function fp(a,b){b.f=b.f||{};ep(a,b);gp(a,b)}
function gp(a,b){var c=parseInt(b.f.currentTime||b.f.current_time,10),d=a.D;d.A=isNaN(c)?0:c;d.K=x();c=parseInt(b.f.state,10);c=isNaN(c)?-1:c;-1==c&&-1E3==a.D.l&&(c=-1E3);a.D.l=c;1==a.D.l?Zo(a):Xo(a);a.F("remotePlayerChange")}
function hp(a,b){var c="true"==b.f.muted;a.D.C=parseInt(b.f.volume,10);a.D.B=c;a.F("remotePlayerChange")}
g.Qd=function(a){a.f?this.H("Received: action="+a.h+", params="+M(a.f)):this.H("Received: action="+a.h+" {}");switch(a.h){case "loungeStatus":a=Ad(a.f.devices);this.h=A(a,function(a){return new wk(a)});
a=!!Pa(this.h,function(a){return"LOUNGE_SCREEN"==a.type});
bp(this,a);break;case "loungeScreenConnected":bp(this,!0);break;case "loungeScreenDisconnected":Va(this.h,function(a){return"LOUNGE_SCREEN"==a.type});
bp(this,!1);break;case "remoteConnected":var b=new wk(Ad(a.f.device));Pa(this.h,function(a){return a.equals(b)})||Ta(this.h,b);
break;case "remoteDisconnected":b=new wk(Ad(a.f.device));Va(this.h,function(a){return a.equals(b)});
break;case "gracefulDisconnect":break;case "playlistModified":ep(this,a);break;case "nowPlaying":fp(this,a);break;case "onStateChange":gp(this,a);break;case "onVolumeChanged":hp(this,a);break;case "onSubtitlesTrackChanged":dp(this,a);break;default:this.H("Unrecognized action: "+a.h)}};
g.Rd=function(a){a.f?this.H("Received: action="+a.h+", params="+M(a.f)):this.H("Received: action="+a.h);ip(this,a);jp(this,a);if(ap(this)){var b=this.D.clone(),c=!1,d,e,f,h,k,l;a.f&&(d=a.f.videoId||a.f.video_id,e=a.f.videoIds||a.f.video_ids,f=a.f.state,h=a.f.currentTime||a.f.current_time,k=a.f.volume,l=a.f.muted,p(a.f.currentError)&&Ad(a.f.currentError));if("onSubtitlesTrackChanged"==a.h)d==Oo(this.D)&&(delete a.f.videoId,pb(a.f)?this.D.o=null:this.D.o=a.f,this.F("remotePlayerChange"));else if(Oo(this.D)||
"onStateChange"!=a.h){"playlistModified"!=a.h&&"nowPlayingPlaylist"!=a.h||e?(d||"nowPlaying"!=a.h&&"nowPlayingPlaylist"!=a.h?d||(d=Oo(this.D)):Qo(this.D,""),e&&(e=e.split(","),Ro(this.D,e,d))):Ro(this.D,[]);e=this.D;var n=d;Mo(e,"add");n&&!B(e.h,n)?(e.h.push(n),e=!0):e=!1;e&&$o(this,"getPlaylist");d&&Qo(this.D,d);b.index==this.D.index&&ab(b.h,this.D.h)?"playlistModified"!=a.h&&"nowPlayingPlaylist"!=a.h||this.F("remoteQueueChange"):this.F("remoteQueueChange");p(f)&&(a=parseInt(f,10),a=isNaN(a)?-1:
a,-1==a&&-1E3==this.D.l&&(a=-1E3),0==a&&"0"==h&&(a=-1),c=c||a!=this.D.l,this.D.l=a,1==this.D.l?Zo(this):Xo(this));h&&(a=parseInt(h,10),c=this.D,c.A=isNaN(a)?0:a,c.K=x(),c=!0);p(k)&&(a=parseInt(k,10),isNaN(a)||(c=c||this.D.C!=a,this.D.C=a),p(l)&&(l="true"==l,c=c||this.D.B!=l,this.D.B=l));c&&this.F("remotePlayerChange")}}};
function ip(a,b){switch(b.h){case "loungeStatus":var c=Ad(b.f.devices);a.h=A(c,function(a){return new wk(a)});
break;case "loungeScreenDisconnected":Va(a.h,function(a){return"LOUNGE_SCREEN"==a.type});
break;case "remoteConnected":var d=new wk(Ad(b.f.device));Pa(a.h,function(a){return a.equals(d)})||Ta(a.h,d);
break;case "remoteDisconnected":d=new wk(Ad(b.f.device)),Va(a.h,function(a){return a.equals(d)})}}
function jp(a,b){var c=!1;if("loungeStatus"==b.h)c=!!Pa(a.h,function(a){return"LOUNGE_SCREEN"==a.type});
else if("loungeScreenConnected"==b.h)c=!0;else if("loungeScreenDisconnected"==b.h)c=!1;else return;if(!isNaN(a.L))if(c)Yo(a);else return;c==ap(a)?c&&Vo(a,1):c?(Wo(a),a.P()&&a.D.reset(),Vo(a,1),$o(a,"getNowPlaying"),cp(a)):a.o(1)}
g.we=function(){if(this.j){var a=this.j;this.j=null;this.D.f!=a&&$o(this,"getNowPlaying")}};
Y.prototype.subscribe=Y.prototype.subscribe;Y.prototype.unsubscribeByKey=Y.prototype.oa;Y.prototype.ua=function(){var a=3;this.isDisposed()||(a=0,isNaN(this.B())?ap(this)&&(a=1):a=2);return a};
Y.prototype.getProxyState=Y.prototype.ua;Y.prototype.o=function(a){this.H("Disconnecting with "+a);Wo(this);this.F("beforeDisconnect",a);1==a&&Pk();Io(this.f,a);this.dispose()};
Y.prototype.disconnect=Y.prototype.o;Y.prototype.ta=function(){var a=this.D;if(this.j){var b=a=this.D.clone(),c=this.j,d=a.index,e=b.f;b.f=c;b.index=d;c!=e&&No(b)}return So(a)};
Y.prototype.getPlayerContextData=Y.prototype.ta;Y.prototype.Ba=function(a){var b=new Lo(a);b.f&&b.f!=this.D.f&&(this.j=b.f,J(this.C),this.C=I(w(this.we,this),5E3));var c=[];this.D.j==b.j&&this.D.f==b.f&&this.D.index==b.index&&ab(this.D.h,b.h)||c.push("remoteQueueChange");this.D.l==b.l&&this.D.C==b.C&&this.D.B==b.B&&Po(this.D)==Po(b)&&M(this.D.o)==M(b.o)||c.push("remotePlayerChange");this.D.reset(a);z(c,function(a){this.F(a)},this)};
Y.prototype.setPlayerContextData=Y.prototype.Ba;Y.prototype.qa=function(){return this.f.l.loungeIdToken};
Y.prototype.getLoungeToken=Y.prototype.qa;Y.prototype.P=function(){var a=this.f.l.id,b=Pa(this.h,function(b){return"REMOTE_CONTROL"==b.type&&b.id!=a});
return b?b.id:""};
Y.prototype.getOtherConnectedRemoteId=Y.prototype.P;Y.prototype.B=function(){var a=this.f;return a.h.za?a.h.A-x():NaN};
Y.prototype.getReconnectTimeout=Y.prototype.B;Y.prototype.$a=function(){if(!isNaN(this.B())){var a=this.f.h;a.za&&(a.stop(),a.Fa(),a.B())}};
Y.prototype.reconnect=Y.prototype.$a;function cp(a){J(a.J);a.J=I(w(a.o,a,1),864E5)}
function $o(a,b,c){c?a.H("Sending: action="+b+", params="+M(c)):a.H("Sending: action="+b);a.f.sendMessage(b,c)}
Y.prototype.va=function(a,b){$o(this,a,b);cp(this)};
Y.prototype.sendMessage=Y.prototype.va;function kp(a){V.call(this);this.o=0;this.ka=lp();this.cb=NaN;this.zb="";this.A=a;this.H("Initializing local screens: "+Yj(this.ka));this.j=mp();this.H("Initializing account screens: "+Yj(this.j));this.Rb=null;this.f=[];this.h=[];np(this,gm()||[]);this.H("Initializing DIAL devices: "+fk(this.h));a=Wj(Lk());op(this,a);this.H("Initializing online screens: "+Yj(this.f));this.o=x()+3E5;pp(this)}
y(kp,V);var qp=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g=kp.prototype;g.H=function(a){Nj("RM",a)};
g.N=function(a){Nj("RM",a)};
function mp(){var a=lp(),b=Wj(Lk());return Ma(b,function(b){return!nk(a,b)})}
function lp(){var a=Wj(Hk());return Ma(a,function(a){return!a.uuid})}
function pp(a){yc("yt-remote-cast-device-list-update",function(){var a=gm();np(this,a||[])},a);
yc("yt-remote-cast-device-status-update",a.He,a);a.Rc();var b=x()>a.o?2E4:1E4;oc(w(a.Rc,a),b)}
g.F=function(a,b){if(this.isDisposed())return!1;this.H("Firing "+a);return this.l.F.apply(this.l,arguments)};
g.Rc=function(){var a=gm()||[];0==a.length||np(this,a);a=rp(this);0==a.length||(Na(a,function(a){return!nk(this.j,a)},this)&&Jk()?sp(this):tp(this,a))};
function up(a,b){var c=rp(a);return Ma(b,function(a){return a.uuid?(a=mk(this.h,a.uuid),!!a&&"RUNNING"==a.status):!!nk(c,a)},a)}
function np(a,b){var c=!1;z(b,function(a){var b=ok(this.ka,a.id);b&&b.name!=a.name&&(this.H("Renaming screen id "+b.id+" from "+b.name+" to "+a.name),b.name=a.name,c=!0)},a);
c&&(a.H("Renaming due to DIAL."),vp(a));Mk(jk(b));var d=!ab(a.h,b,lk);d&&a.H("Updating DIAL devices: "+fk(a.h)+" to "+fk(b));a.h=b;op(a,a.f);d&&a.F("onlineReceiverChange")}
g.He=function(a){var b=mk(this.h,a.id);b&&(this.H("Updating DIAL device: "+b.id+"("+b.name+") from status: "+b.status+" to status: "+a.status+" and from activityId: "+b.f+" to activityId: "+a.f),b.f=a.f,b.status=a.status,Mk(jk(this.h)));op(this,this.f)};
function op(a,b,c){var d=up(a,b),e=!ab(a.f,d,Tj);if(e||c)0==b.length||Kk(A(d,Uj));e&&(a.H("Updating online screens: "+Yj(a.f)+" -> "+Yj(d)),a.f=d,a.F("onlineReceiverChange"))}
function tp(a,b){var c=[],d={};z(b,function(a){a.token&&(d[a.token]=a,c.push(a.token))});
var e={method:"POST",R:{lounge_token:c.join(",")},context:a,ca:function(a,b){var c=[];z(b.screens||[],function(a){"online"==a.status&&c.push(d[a.loungeToken])});
var e=this.Rb?wp(this,this.Rb):null;e&&!nk(c,e)&&c.push(e);op(this,c,!0)}};
ae(bk(a.A,"/pairing/get_screen_availability"),e)}
function sp(a){var b=rp(a),c=A(b,function(a){return a.id});
0!=c.length&&(a.H("Updating lounge tokens for: "+M(c)),ae(bk(a.A,"/pairing/get_lounge_token_batch"),{R:{screen_ids:c.join(",")},method:"POST",context:a,ca:function(a,c){xp(this,c.screens||[]);this.ka=Ma(this.ka,function(a){return!!a.token});
vp(this);tp(this,b)}}))}
function xp(a,b){z(Wa(a.ka,a.j),function(a){var d=Pa(b,function(b){return a.id==b.screenId});
d&&(a.token=d.loungeToken)})}
function vp(a){var b=lp();ab(a.ka,b,Tj)||(a.H("Saving local screens: "+Yj(b)+" to "+Yj(a.ka)),Gk(A(a.ka,Uj)),op(a,a.f,!0),np(a,gm()||[]),a.F("managedScreenChange",rp(a)))}
function yp(a,b,c){var d=Qa(b,function(a){return Sj(c,a)}),e=0>d;
0>d?b.push(c):b[d]=c;nk(a.f,c)||a.f.push(c);return e}
g.Ac=function(a,b){for(var c=rp(this),c=A(c,function(a){return a.name}),d=a,e=2;B(c,d);)d=b.call(m,e),e++;
return d};
g.Pc=function(a,b,c){var d=!1;b>=qp.length&&(this.H("Pairing DIAL device "+a+" with "+c+" timed out."),d=!0);var e=mk(this.h,a);if(!e)this.H("Pairing DIAL device "+a+" with "+c+" failed: no device for "+a),d=!0;else if("ERROR"==e.status||"STOPPED"==e.status)this.H("Pairing DIAL device "+a+" with "+c+" failed: launch error on "+a),d=!0;d?(zp(this),this.F("screenPair",null)):ae(bk(this.A,"/pairing/get_screen"),{method:"POST",R:{pairing_code:c},context:this,ca:function(a,b){if(c==this.zb){zp(this);var d=
new Qj(b.screen);d.name=e.name;d.uuid=e.id;this.H("Pairing "+c+" succeeded.");var l=yp(this,this.ka,d);this.H("Paired with "+(l?"a new":"an old")+" local screen:"+Xj(d));vp(this);this.F("screenPair",d)}},
onError:function(){c==this.zb&&(this.H("Polling pairing code: "+c),J(this.cb),this.cb=I(w(this.Pc,this,a,b+1,c),qp[b]))}})};
function Ap(a,b,c){var d=Z,e="";zp(d);if(mk(d.h,a)){if(!e){var f=e=gk();$l();var h=im(a),k=Xl();if(k&&h){var l=new cast.Receiver(h.id,h.name),l=new cast.LaunchRequest("YouTube",l);l.parameters="pairingCode="+f;l.description=new cast.LaunchDescription;l.description.text=document.title;b&&(l.parameters+="&v="+b,c&&(l.parameters+="&t="+Math.round(c)),l.description.url="http://i.ytimg.com/vi/"+b+"/default.jpg");"UNKNOWN"!=h.status&&(h.status="UNKNOWN",em(h),K("yt-remote-cast-device-status-update",h));
Vl("Sending a cast launch request with params: "+l.parameters);k.launch(l,qa(jm,a))}else Vl("No cast API or no cast device. Dropping cast launch.")}d.zb=e;d.cb=I(w(d.Pc,d,a,0,e),qp[0])}else d.H("No DIAL device with id: "+a)}
function zp(a){J(a.cb);a.cb=NaN;a.zb=""}
function wp(a,b){var c=ok(rp(a),b);a.H("Found screen: "+Xj(c)+" with key: "+b);return c}
function Bp(a){var b=Z,c=ok(b.f,a);b.H("Found online screen: "+Xj(c)+" with key: "+a);return c}
function Cp(a){var b=Z,c=mk(b.h,a);if(!c){var d=ok(b.ka,a);d&&(c=mk(b.h,d.uuid))}b.H("Found DIAL: "+(c?c.toString():"null")+" with key: "+a);return c}
function rp(a){return Wa(a.j,Ma(a.ka,function(a){return!nk(this.j,a)},a))}
;function Dp(a){pk.call(this,"ScreenServiceProxy");this.X=a;this.h=[];this.h.push(this.X.$_s("screenChange",w(this.Pe,this)));this.h.push(this.X.$_s("onlineScreenChange",w(this.Yd,this)))}
y(Dp,pk);g=Dp.prototype;g.$=function(a){return this.X.$_gs(a)};
g.contains=function(a){return!!this.X.$_c(a)};
g.get=function(a){return this.X.$_g(a)};
g.Za=function(){this.X.$_st()};
g.Kb=function(a,b,c){this.X.$_a(a,b,c)};
g.remove=function(a,b,c){this.X.$_r(a,b,c)};
g.Hb=function(a,b,c,d){this.X.$_un(a,b,c,d)};
g.G=function(){for(var a=0,b=this.h.length;a<b;++a)this.X.$_ubk(this.h[a]);this.h.length=0;this.X=null;Dp.I.G.call(this)};
g.Pe=function(){this.F("screenChange")};
g.Yd=function(){this.F("onlineScreenChange")};
W.prototype.$_st=W.prototype.Za;W.prototype.$_gspc=W.prototype.Qe;W.prototype.$_gsppc=W.prototype.ad;W.prototype.$_c=W.prototype.contains;W.prototype.$_g=W.prototype.get;W.prototype.$_a=W.prototype.Kb;W.prototype.$_un=W.prototype.Hb;W.prototype.$_r=W.prototype.remove;W.prototype.$_gs=W.prototype.$;W.prototype.$_gos=W.prototype.$c;W.prototype.$_s=W.prototype.subscribe;W.prototype.$_ubk=W.prototype.oa;function Ep(){var a=!!H("MDX_ENABLE_CASTV2"),b=!!H("MDX_ENABLE_QUEUE"),c={device:"Desktop",app:"youtube-desktop"};a?q("yt.mdx.remote.castv2_",!0,void 0):$l();jj&&ij();yk();Fp||(Fp=new ak,Qk()&&(Fp.f="/api/loungedev"));Z||a||(Z=new kp(Fp),Z.subscribe("screenPair",Gp),Z.subscribe("managedScreenChange",Hp),Z.subscribe("onlineReceiverChange",function(){K("yt-remote-receiver-availability-change")}));
Ip||(Ip=r("yt.mdx.remote.deferredProxies_")||[],q("yt.mdx.remote.deferredProxies_",Ip,void 0));Jp(b);b=Kp();if(a&&!b){var d=new W(Fp);q("yt.mdx.remote.screenService_",d,void 0);b=Kp();Al(d,function(a){a?Lp()&&Tl(Lp(),"YouTube TV"):d.subscribe("onlineScreenChange",function(){K("yt-remote-receiver-availability-change")})},!(!c||!c.loadCastApiSetupScript))}if(c&&!r("yt.mdx.remote.initialized_")){q("yt.mdx.remote.initialized_",!0,void 0);
Mp("Initializing: "+M(c));Np.push(yc("yt-remote-cast2-availability-change",function(){K("yt-remote-receiver-availability-change")}));
Np.push(yc("yt-remote-cast2-receiver-selected",function(){Op(null);K("yt-remote-auto-connect","cast-selector-receiver")}));
Np.push(yc("yt-remote-cast2-session-change",Pp));Np.push(yc("yt-remote-connection-change",function(a){a?Tl(Lp(),"YouTube TV"):Qp()||(Tl(null,null),Pl())}));
var e=Rp();c.isAuto&&(e.id+="#dial");e.name=c.device;e.app=c.app;Mp(" -- with channel params: "+M(e));Sp(e);a&&b.Za();Lp()||Tp()}}
function Up(){Ac(Np);Np.length=0;F(Vp);Vp=null;Ip&&(z(Ip,function(a){a(null)}),Ip.length=0,Ip=null,q("yt.mdx.remote.deferredProxies_",null,void 0));
Z&&(F(Z),Z=null);Fp=null;dm()}
function Wp(){if(Xp()&&Nl()){var a=[];if(lj("yt-remote-cast-available")||r("yt.mdx.remote.cloudview.castButtonShown_")||Yp())a.push({key:"cast-selector-receiver",name:Zp()}),q("yt.mdx.remote.cloudview.castButtonShown_",!0,void 0);return a}return r("yt.mdx.remote.cloudview.initializing_")?[]:$p()}
function $p(){var a=[],a=aq()?Kp().X.$_gos():Wj(Lk()),b=bq();b&&Yp()&&(nk(a,b)||a.push(b));aq()||(b=kk(Nk()),b=Ma(b,function(b){return!ok(a,b.id)}),a=Wa(a,b));
return ik(a)}
function cq(){if(Xp()&&Nl()){var a=Ol();return a?{key:"cast-selector-receiver",name:a}:null}return dq()}
function dq(){var a=$p(),b=eq(),c=bq();c||(c=Qp());return Pa(a,function(a){return c&&Rj(c,a.key)||b&&(a=Cp(a.key))&&a.id==b?!0:!1})}
function Zp(){if(Xp()&&Nl())return Ol();var a=bq();return a?a.name:null}
function bq(){var a=Lp();if(!a)return null;if(!Z){var b=Kp().$();return ok(b,a)}return wp(Z,a)}
function Pp(a){Mp("remote.onCastSessionChange_: "+Xj(a));if(a){var b=bq();b&&b.id==a.id?Tl(b.id,"YouTube TV"):(b&&fq(),gq(a,1))}else fq()}
function hq(a,b){Mp("Connecting to: "+M(a));if("cast-selector-receiver"==a.key)Op(b||null),Sl(b||null);else{fq();Op(b||null);var c=null;Z?c=Bp(a.key):(c=Kp().$(),c=ok(c,a.key));if(c)gq(c,1);else{if(Z&&(c=Cp(a.key))){iq(c);return}I(function(){jq(null)},0)}}}
function fq(){Z&&zp(Z);a:{var a=Yp();if(a&&(a=a.getOtherConnectedRemoteId())){Mp("Do not stop DIAL due to "+a);kq("");break a}(a=eq())?(Mp("Stopping DIAL: "+a),km(a),kq("")):(a=bq())&&a.uuid&&(Mp("Stopping DIAL: "+a.uuid),km(a.uuid))}Rl()?Jl().stopSession():Gl("stopSession called before API ready.");(a=Yp())?a.disconnect(1):(Bc("yt-remote-before-disconnect",1),Bc("yt-remote-connection-change",!1));jq(null)}
function Mp(a){Nj("remote",a)}
function Xp(){return!!r("yt.mdx.remote.castv2_")}
function aq(){return r("yt.mdx.remote.screenService_")}
function Kp(){if(!Vp){var a=aq();Vp=a?new Dp(a):null}return Vp}
function Lp(){return r("yt.mdx.remote.currentScreenId_")}
function lq(a){q("yt.mdx.remote.currentScreenId_",a,void 0);if(Z){var b=Z;b.o=x()+3E5;if((b.Rb=a)&&(a=wp(b,a))&&!nk(b.f,a)){var c=Xa(b.f);c.push(a);op(b,c,!0)}}}
function eq(){return r("yt.mdx.remote.currentDialId_")}
function kq(a){q("yt.mdx.remote.currentDialId_",a,void 0)}
function mq(){return r("yt.mdx.remote.connectData_")}
function Op(a){q("yt.mdx.remote.connectData_",a,void 0)}
function Yp(){return r("yt.mdx.remote.connection_")}
function jq(a){var b=Yp();Op(null);a?Yp():(lq(""),kq(""));q("yt.mdx.remote.connection_",a,void 0);Ip&&(z(Ip,function(b){b(a)}),Ip.length=0);
b&&!a?Bc("yt-remote-connection-change",!1):!b&&a&&K("yt-remote-connection-change",!0)}
function Qp(){var a=Bk();if(!a)return null;if(aq()){var b=Kp().$();return ok(b,a)}return Z?wp(Z,a):null}
function gq(a,b){Lp();lq(a.id);var c=new Y(Fp,a,Rp());c.connect(b,mq());c.subscribe("beforeDisconnect",function(a){Bc("yt-remote-before-disconnect",a)});
c.subscribe("beforeDispose",function(){Yp()&&(Yp(),jq(null))});
jq(c)}
function iq(a){eq();Mp("Connecting to: "+(a?a.toString():"null"));kq(a.id);var b=mq();b?Ap(a.id,b.videoIds[b.index],b.currentTime):Ap(a.id)}
function Tp(){var a=Qp();a?(Mp("Resume connection to: "+Xj(a)),gq(a,0)):(Pk(),Pl(),Mp("Skipping connecting because no session screen found."))}
function Gp(a){Mp("Paired with: "+Xj(a));a?gq(a,1):jq(null)}
function Hp(){var a=Lp();a&&!bq()&&(Mp("Dropping current screen with id: "+a),fq());Qp()||Pk()}
var Fp=null,Ip=null,Vp=null,Z=null;function Jp(a){var b=Rp();if(pb(b)){var b=Ak(),c=lj("yt-remote-session-name")||"",d=lj("yt-remote-session-app")||"",b={device:"REMOTE_CONTROL",id:b,name:c,app:d};a&&(b["mdx-version"]=3);q("yt.mdx.remote.channelParams_",b,void 0)}}
function Rp(){return r("yt.mdx.remote.channelParams_")||{}}
function Sp(a){a?(U("yt-remote-session-app",a.app),U("yt-remote-session-name",a.name)):(mj("yt-remote-session-app"),mj("yt-remote-session-name"));q("yt.mdx.remote.channelParams_",a,void 0)}
var Np=[];var nq=null,oq=[];function pq(){qq();if(cq()){var a=nq;"html5"!=a.getPlayerType()&&a.loadNewVideoConfig(a.getCurrentVideoConfig(),"html5")}}
function rq(a){"cast-selector-receiver"==a?Ql():sq(a)}
function sq(a){var b=Wp();if(a=hk(b,a)){var c=nq,d=c.getVideoData().video_id,e=c.getVideoData().list,f=c.getCurrentTime();hq(a,{videoIds:[d],listId:e,videoId:d,index:0,currentTime:f});"html5"!=c.getPlayerType()?c.loadNewVideoConfig(c.getCurrentVideoConfig(),"html5"):c.updateRemoteReceivers&&c.updateRemoteReceivers(b,a)}}
function qq(){var a=nq;a&&a.updateRemoteReceivers&&a.updateRemoteReceivers(Wp(),cq())}
;var tq=null,uq=[];function vq(a){return{Tb:a.externalChannelId,Ld:!!a.isChannelPaid,source:a.source,subscriptionId:a.subscriptionId}}
function wq(a){xq(vq(a))}
function xq(a){wi()?(R(ji,new di(a.Tb,a.Ld?{itemType:"U",itemId:a.Tb}:null)),(a="/gen_204?"+Pd({event:"subscribe",source:a.source}))&&Sg(a)):yq(a)}
function yq(a){vi(function(b){b.subscription_ajax&&xq(a)},null)}
function zq(a){a=vq(a);R(oi,new fi(a.Tb,a.subscriptionId,null));(a="/gen_204?"+Pd({event:"unsubscribe",source:a.source}))&&Sg(a)}
function Aq(a){tq&&tq.channelSubscribed(a.f,a.subscriptionId)}
function Bq(a){tq&&tq.channelUnsubscribed(a.f)}
;function Cq(a){E.call(this);this.h=a;this.h.subscribe("command",this.A,this);this.j={};this.l=!1}
y(Cq,E);Cq.prototype.A=function(a,b){if(this.l&&!this.isDisposed()){var c=b||{};switch(a){case "addEventListener":if(v(c.event)&&(c=c.event,!(c in this.j))){var d=w(this.B,this,c);this.j[c]=d;this.addEventListener(c,d)}break;case "removeEventListener":v(c.event)&&Dq(this,c.event);break;default:this.f.isReady()&&this.f[a]&&(c=Eq(a,b||{}),c=this.f[a].apply(this.f,c),(c=Fq(a,c))&&this.l&&!this.isDisposed()&&Gq(this.h,a,c))}}};
Cq.prototype.B=function(a,b){this.l&&!this.isDisposed()&&Gq(this.h,a,this.o(a,b))};
Cq.prototype.o=function(a,b){if(null!=b)return{value:b}};
function Dq(a,b){b in a.j&&(a.removeEventListener(b,a.j[b]),delete a.j[b])}
Cq.prototype.G=function(){this.h.unsubscribe("command",this.A,this);this.h=null;for(var a in this.j)Dq(this,a);Cq.I.G.call(this)};function Hq(a,b){Cq.call(this,b);this.f=a;this.l||this.isDisposed()||(this.l=!0,Gq(this.h,"RECEIVING"))}
y(Hq,Cq);Hq.prototype.addEventListener=function(a,b){this.f.addEventListener(a,b)};
Hq.prototype.removeEventListener=function(a,b){this.f.removeEventListener(a,b)};
function Eq(a,b){switch(a){case "loadVideoById":return b=rj(b),tj(b),[b];case "cueVideoById":return b=rj(b),tj(b),[b];case "loadVideoByPlayerVars":return tj(b),[b];case "cueVideoByPlayerVars":return tj(b),[b];case "loadPlaylist":return b=sj(b),tj(b),[b];case "cuePlaylist":return b=sj(b),tj(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];
case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey]}return[]}
function Fq(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
Hq.prototype.o=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Hq.I.o.call(this,a,b)};
Hq.prototype.G=function(){Hq.I.G.call(this);delete this.f};function Iq(){var a=this.h=new Ui,b=w(this.ue,this);a.h=b;a.j=null;this.l=[];this.A=!1;this.o={}}
g=Iq.prototype;g.ue=function(a,b){if("addEventListener"==a&&b){var c=b[0];this.o[c]||"onReady"==c||(this.addEventListener(c,Jq(this,c)),this.o[c]=!0)}else this.ed(a,b)};
g.ed=function(){};
function Jq(a,b){return w(function(a){this.sendMessage(b,a)},a)}
g.addEventListener=function(){};
g.Bd=function(){this.A=!0;this.sendMessage("initialDelivery",this.Ub());this.sendMessage("onReady");z(this.l,this.fd,this);this.l=[]};
g.Ub=function(){return null};
function Kq(a,b){a.sendMessage("infoDelivery",b)}
g.fd=function(a){this.A?this.h.sendMessage(a):this.l.push(a)};
g.sendMessage=function(a,b){this.fd({event:a,info:void 0==b?null:b})};
g.dispose=function(){this.h=null};function Lq(a){Iq.call(this);this.f=a;this.j=[];this.addEventListener("onReady",w(this.ce,this));this.addEventListener("onVideoProgress",w(this.Be,this));this.addEventListener("onVolumeChange",w(this.Ce,this));this.addEventListener("onApiChange",w(this.xe,this));this.addEventListener("onPlaybackQualityChange",w(this.ye,this));this.addEventListener("onPlaybackRateChange",w(this.ze,this));this.addEventListener("onStateChange",w(this.Ae,this))}
y(Lq,Iq);g=Lq.prototype;g.ed=function(a,b){if(this.f[a]){b=b||[];if(0<b.length&&pj(a)){var c;c=b;if(ia(c[0])&&!da(c[0]))c=c[0];else{var d={};switch(a){case "loadVideoById":case "cueVideoById":d=rj.apply(window,c);break;case "loadVideoByUrl":case "cueVideoByUrl":d=qj.apply(window,c);break;case "loadPlaylist":case "cuePlaylist":d=sj.apply(window,c)}c=d}tj(c);b.length=1;b[0]=c}this.f[a].apply(this.f,b);pj(a)&&Kq(this,this.Ub())}};
g.ce=function(){var a=w(this.Bd,this);this.h.f=a};
g.addEventListener=function(a,b){this.j.push({yd:a,listener:b});this.f.addEventListener(a,b)};
g.Ub=function(){if(!this.f)return null;var a=this.f.getApiInterface();Ua(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c],f=e;if(0==f.search("get")||0==f.search("is")){var f=e,h=0;0==f.search("get")?h=3:0==f.search("is")&&(h=2);f=f.charAt(h).toLowerCase()+f.substr(h+1);try{var k=this.f[e]();b[f]=k}catch(l){}}}b.videoData=this.f.getVideoData();return b};
g.Ae=function(a){a={playerState:a,currentTime:this.f.getCurrentTime(),duration:this.f.getDuration(),videoData:this.f.getVideoData(),videoStartBytes:0,videoBytesTotal:this.f.getVideoBytesTotal(),videoLoadedFraction:this.f.getVideoLoadedFraction(),playbackQuality:this.f.getPlaybackQuality(),availableQualityLevels:this.f.getAvailableQualityLevels(),videoUrl:this.f.getVideoUrl(),playlist:this.f.getPlaylist(),playlistIndex:this.f.getPlaylistIndex()};this.f.getProgressState&&(a.progressState=this.f.getProgressState());
this.f.getStoryboardFormat&&(a.storyboardFormat=this.f.getStoryboardFormat());Kq(this,a)};
g.ye=function(a){Kq(this,{playbackQuality:a})};
g.ze=function(a){Kq(this,{playbackRate:a})};
g.xe=function(){for(var a=this.f.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.f.getOptions(e);b[e]={options:f};for(var h=0,k=f.length;h<k;h++){var l=f[h],n=this.f.getOption(e,l);b[e][l]=n}}this.sendMessage("apiInfoDelivery",b)};
g.Ce=function(){Kq(this,{muted:this.f.isMuted(),volume:this.f.getVolume()})};
g.Be=function(a){a={currentTime:a,videoBytesLoaded:this.f.getVideoBytesLoaded(),videoLoadedFraction:this.f.getVideoLoadedFraction()};this.f.getProgressState&&(a.progressState=this.f.getProgressState());Kq(this,a)};
g.dispose=function(){Lq.I.dispose.call(this);for(var a=0;a<this.j.length;a++){var b=this.j[a];this.f.removeEventListener(b.yd,b.listener)}this.j=[]};function Mq(a,b,c){V.call(this);this.f=a;this.h=b;this.j=c}
y(Mq,V);function Gq(a,b,c){if(!a.isDisposed()){var d=a.f,e=a.h;a=a.j;d.isDisposed()||e!=d.f||(b={id:a,command:b},c&&(b.data=c),d.f.postMessage(M(b),d.j))}}
Mq.prototype.G=function(){this.h=this.f=null;Mq.I.G.call(this)};function Nq(a,b,c){E.call(this);this.f=a;this.j=c;this.l=N(window,"message",w(this.o,this));this.h=new Mq(this,a,b);gc(this,qa(F,this.h))}
y(Nq,E);Nq.prototype.o=function(a){var b;if(b=!this.isDisposed())if(b=a.origin==this.j)a:{b=this.f;do{var c;b:{c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(c=a.data,v(c))){try{c=Ad(c)}catch(d){return}c.command&&(a=this.h,b=c.command,c=c.data,a.isDisposed()||a.F("command",b,c))}};
Nq.prototype.G=function(){Xe(this.l);this.f=null;Nq.I.G.call(this)};var Oq=!1;function Pq(a){if(a=a.match(/[\d]+/g))a.length=3,a.join(".")}
(function(){if(navigator.plugins&&navigator.plugins.length){var a=navigator.plugins["Shockwave Flash"];if(a&&(Oq=!0,a.description)){Pq(a.description);return}if(navigator.plugins["Shockwave Flash 2.0"]){Oq=!0;return}}if(navigator.mimeTypes&&navigator.mimeTypes.length&&(a=navigator.mimeTypes["application/x-shockwave-flash"],Oq=!!a&&a.enabledPlugin)){Pq(a.enabledPlugin.description);return}try{var b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");Oq=!0;Pq(b.GetVariable("$version"));return}catch(c){}try{b=
new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");Oq=!0;return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),Oq=!0,Pq(b.GetVariable("$version"))}catch(c){}})();function Qq(a){return(a=a.exec(wb))?a[1]:""}
(function(){if(Af)return Qq(/Firefox\/([0-9.]+)/);if(L||kd||jd)return ud;if(Ef)return Qq(/Chrome\/([0-9.]+)/);if(Ff&&!(id()||C("iPad")||C("iPod")))return Qq(/Version\/([0-9.]+)/);if(Bf||Cf){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(wb);if(a)return a[1]+"."+a[2]}else if(Df)return(a=Qq(/Android\s+([0-9.]+)/))?a:Qq(/Version\/([0-9.]+)/);return""})();function Rq(){var a={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0};return new Tm(function(b,c){a.ca=function(a){Wd(a)?b(a):c(a)};
a.onError=c;a.kb=c;ae("//googleads.g.doubleclick.net/pagead/id",a)})}
;var Sq=null;function Tq(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))return Uq(""),"";a=JSON.parse(a.substr(4)).id;Uq(a);return a}
function Vq(){I(function(){Sq=null},3E5)}
function Uq(a){q("yt.www.ads.biscotti.lastId_",a,void 0)}
;function Wq(){}
;function Xq(a){for(var b=0;b<a.length;b++){var c=a[b];"send_follow_on_ping_action"==c.name&&c.data&&c.data.follow_on_url&&(c=c.data.follow_on_url)&&Sg(c)}}
;function Yq(a){P.call(this,1,arguments);this.Ob=a}
y(Yq,P);function Zq(a,b){P.call(this,2,arguments);this.h=a;this.f=b}
y(Zq,P);function $q(a,b,c,d){P.call(this,1,arguments);this.f=b;this.j=c||null;this.h=d||null}
y($q,P);function ar(a,b){P.call(this,1,arguments);this.h=a;this.f=b||null}
y(ar,P);function br(a){P.call(this,1,arguments)}
y(br,P);var cr=new Q("ypc-core-load",Yq),dr=new Q("ypc-guide-sync-success",Zq),er=new Q("ypc-purchase-success",$q),fr=new Q("ypc-subscription-cancel",br),gr=new Q("ypc-subscription-cancel-success",ar),hr=new Q("ypc-init-subscription",br);var ir=!1,jr=[],kr=[];function lr(a){a.f?ir?R(ni,a):R(cr,new Yq(function(){R(hr,new br(a.f))})):mr(a.h,a.l,a.j,a.source)}
function nr(a){a.f?ir?R(si,a):R(cr,new Yq(function(){R(fr,new br(a.f))})):or(a.h,a.subscriptionId,a.l,a.j,a.source)}
function pr(a){qr(Xa(a.f))}
function rr(a){sr(Xa(a.f))}
function tr(a){ur(a.f,a.h,null)}
function vr(a,b,c,d){ur(a,b,c,d)}
function wr(a){var b=a.h,c=a.f.subscriptionId;b&&c&&R(mi,new ei(b,c,a.f.channelInfo))}
function xr(a){var b=a.f;db(a.h,function(a,d){R(mi,new ei(d,a,b[d]))})}
function yr(a){R(ri,new bi(a.h.itemId));a.f&&a.f.length&&(zr(a.f,ri),zr(a.f,ti))}
function mr(a,b,c,d){var e=new bi(a);R(ki,e);var f={};f.c=a;c&&(f.eurl=c);d&&(f.source=d);c={};(d=H("PLAYBACK_ID"))&&(c.plid=d);(d=H("EVENT_ID"))&&(c.ei=d);b&&Ar(b,c);ae("/subscription_ajax?action_create_subscription_to_channel=1",{method:"POST",hc:f,R:c,ca:function(b,c){var d=c.response;R(mi,new ei(a,d.id,d.channel_info));d.show_feed_privacy_dialog&&K("SHOW-FEED-PRIVACY-SUBSCRIBE-DIALOG",a);d.actions&&Xq(d.actions)},
cc:function(){R(li,e)}})}
function or(a,b,c,d,e){var f=new bi(a);R(pi,f);var h={};d&&(h.eurl=d);e&&(h.source=e);d={};d.c=a;d.s=b;(a=H("PLAYBACK_ID"))&&(d.plid=a);(a=H("EVENT_ID"))&&(d.ei=a);c&&Ar(c,d);ae("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",hc:h,R:d,ca:function(a,b){var c=b.response;R(ri,f);c.actions&&Xq(c.actions)},
cc:function(){R(qi,f)}})}
function ur(a,b,c,d){if(null!==b||null!==c){var e={};a&&(e.channel_id=a);null===b||(e.email_on_upload=b);null===c||(e.receive_no_updates=c);ae("/subscription_ajax?action_update_subscription_preferences=1",{method:"POST",R:e,onError:function(){d&&d()}})}}
function qr(a){if(a.length){var b=Za(a,0,40);R("subscription-batch-subscribe-loading");zr(b,ki);var c={};c.a=b.join(",");var d=function(){R("subscription-batch-subscribe-loaded");zr(b,li)};
ae("/subscription_ajax?action_create_subscription_to_all=1",{method:"POST",R:c,ca:function(c,f){d();var h=f.response,k=h.id;if(da(k)&&k.length==b.length){var l=h.channel_info_map;z(k,function(a,c){var d=b[c];R(mi,new ei(d,a,l[d]))});
a.length?qr(a):R("subscription-batch-subscribe-finished")}},
onError:function(){d();R("subscription-batch-subscribe-failure")}})}}
function sr(a){if(a.length){var b=Za(a,0,40);R("subscription-batch-unsubscribe-loading");zr(b,pi);var c={};c.c=b.join(",");var d=function(){R("subscription-batch-unsubscribe-loaded");zr(b,qi)};
ae("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",R:c,ca:function(){d();zr(b,ri);a.length&&sr(a)},
onError:function(){d()}})}}
function zr(a,b){z(a,function(a){R(b,new bi(a))})}
function Ar(a,b){var c=Sd(a),d;for(d in c)b[d]=c[d]}
;var Br,Cr=null,Dr=null,Er=null,Fr=!1;
function Gr(){var a=H("PLAYER_CONFIG",void 0),b=H("REVERSE_MOBIUS_PERCENT",void 0);(b="1"!=a.privembed&&hg&&100*Math.random()<b)||(b=!!H("EXPERIMENT_FLAGS",{}).enable_server_side_ad_request_for_embeds);if(b)try{var c;try{var d=r("yt.www.ads.biscotti.getId_"),e;if(d)e=d();else{if(!Sq){var f=Rq().then(Tq),h=Xm(Vq,Vq,void 0);h.j=!0;dn(f,h);Sq=f}e=Sq}c=e}catch(k){c=Ym(k)}Zm(c,null,Wq,void 0)}catch(k){pc(k)}if(H("REQUEST_POST_MESSAGE_ORIGIN")){if(!Br){Br=new Ui;Br.f=Gr;return}Br.origin&&"*"!=Br.origin&&
(a.args.post_message_origin=Br.origin)}e=document.referrer;c=H("POST_MESSAGE_ORIGIN");d=!1;v(e)&&v(c)&&-1<e.indexOf(c)&&Ng(c)&&Ng(e)&&(d=!0);window!=window.top&&e&&e!=document.URL&&(a.args.loaderUrl=e);H("LIGHTWEIGHT_AUTOPLAY")&&(a.args.autoplay="1");a.args.autoplay&&tj(a.args);Cr=Ph("player",a);e=H("POST_MESSAGE_ID","player");H("ENABLE_JS_API")?Er=new Lq(Cr):H("ENABLE_POST_API")&&v(e)&&v(c)&&(Dr=new Nq(window.parent,e,c),Er=new Hq(Cr,Dr.h));(Fr=d&&!H("ENABLE_CAST_API"))?a.args.disableCast="1":(a=
Cr,Ep(),nq=a,nq.addEventListener("onReady",pq),nq.addEventListener("onRemoteReceiverSelected",rq),oq.push(yc("yt-remote-receiver-availability-change",qq)),oq.push(yc("yt-remote-auto-connect",sq)));H("BG_P")&&(H("BG_I")||H("BG_IU"))&&Nc();ke();tq=Cr;tq.addEventListener("SUBSCRIBE",wq);tq.addEventListener("UNSUBSCRIBE",zq);uq.push($g(mi,Aq),$g(ri,Bq))}
;q("yt.setConfig",lc,void 0);q("yt.setMsg",function(a){mc(kc,arguments)},void 0);
q("yt.logging.errors.log",function(a,b,c,d,e){c={name:c||"WEB",version:d||H("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0)};e=window&&window.yterr||e;if(a&&e&&!(5<=ge)){e=a.stacktrace;d=a.columnNumber;var f=r("window.location.href");if(v(a))a={message:a,name:"Unknown error",lineNumber:"Not available",fileName:f,stack:"Not available"};else{var h,k,l=!1;try{h=a.lineNumber||a.line||"Not available"}catch(fa){h="Not available",l=!0}try{k=a.fileName||a.filename||a.sourceURL||m.$googDebugFname||f}catch(fa){k=
"Not available",l=!0}a=!l&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:h,fileName:k,stack:a.stack||"Not available"}}e=e||a.stack;h=a.lineNumber.toString();isNaN(h)||isNaN(d)||(h=h+":"+d);if(!(fe[a.message]||0<=e.indexOf("/YouTubeCenter.js")||0<=e.indexOf("/mytube.js"))){b={hc:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,1E3),line:h,level:b||"ERROR"},R:{url:H("PAGE_NAME",window.location.href),file:a.fileName},
method:"POST"};e&&(b.R.stack=e);for(var n in c)b.R["client."+n]=c[n];if(n=H("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var u in n)b.R[u]=n[u];ae("/error_204",b);fe[a.message]=!0;ge++}}},void 0);
q("writeEmbed",Gr,void 0);q("yt.www.watch.ads.restrictioncookie.spr",function(a){(a+="mac_204?action_fcts=1")&&Sg(a);return!0},void 0);
var Hr=nc(function(){nh("ol");ir=!0;kr.push($g(ji,lr),$g(oi,nr));ir||(kr.push($g(ni,lr),$g(si,nr),$g(gi,pr),$g(hi,rr),$g(ii,tr)),jr.push(yc("subscription-prefs",vr)),kr.push($g(er,wr),$g(gr,yr),$g(dr,xr)));Gf.getInstance();var a=1<window.devicePixelRatio;if(Lf(0,119)!=a){var b="f"+(Math.floor(119/31)+1),c=Kf(b)||0,c=a?c|67108864:c&-67108865;0==c?delete Hf[b]:(a=c.toString(16),Hf[b]=a.toString());var d,b=[];for(d in Hf)b.push(d+"="+escape(Hf[d]));d=b.join("&");ff("PREF",d,63072E3)}}),Ir=nc(function(){var a=
Cr;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();H("PL_ATT")&&(Mc=null);for(var a=0,b=ie.length;a<b;a++){var c=ie[a];if(!isNaN(c)){var d=r("yt.scheduler.instance.cancelJob");d?d(c):J(c)}}ie.length=0;a=Ic("//static.doubleclick.net/instream/ad_status.js");if(b=document.getElementById(a))Dc(a),b.parentNode.removeChild(b);je=!1;lc("DCLKSTAT",0);Ac(jr);jr.length=0;ah(kr);kr.length=0;ir=!1;tq&&(tq.removeEventListener("SUBSCRIBE",xq),tq.removeEventListener("UNSUBSCRIBE",zq));tq=null;ah(uq);uq.length=0;
Fr||(Ac(oq),oq.length=0,nq&&(nq.removeEventListener("onRemoteReceiverSelected",rq),nq.removeEventListener("onReady",pq),nq=null),Up());hc(Er,Dr);Cr&&Cr.destroy()});
window.addEventListener?(window.addEventListener("load",Hr),window.addEventListener("unload",Ir)):window.attachEvent&&(window.attachEvent("onload",Hr),window.attachEvent("onunload",Ir));var Jr=Oi.getInstance(),Kr=T(Jr);Kr in Ti||(Jr.register(),Jr.Ab.push(yc("yt-uix-init-"+Kr,Jr.init,Jr)),Jr.Ab.push(yc("yt-uix-dispose-"+Kr,Jr.dispose,Jr)),Ti[Kr]=Jr);})();
