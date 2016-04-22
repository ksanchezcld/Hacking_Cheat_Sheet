/**
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */
 
jQuery.cookie=function(b,j,m){if(typeof j!="undefined"){m=m||{};if(j===null){j="";m.expires=-1}var e="";if(m.expires&&(typeof m.expires=="number"||m.expires.toUTCString)){var f;if(typeof m.expires=="number"){f=new Date();f.setTime(f.getTime()+(m.expires*24*60*60*1000))}else{f=m.expires}e="; expires="+f.toUTCString()}var l=m.path?"; path="+(m.path):"";var g=m.domain?"; domain="+(m.domain):"";var a=m.secure?"; secure":"";document.cookie=[b,"=",encodeURIComponent(j),e,l,g,a].join("")}else{var d=null;if(document.cookie&&document.cookie!=""){var k=document.cookie.split(";");for(var h=0;h<k.length;h++){var c=jQuery.trim(k[h]);if(c.substring(0,b.length+1)==(b+"=")){d=decodeURIComponent(c.substring(b.length+1));break}}}return d}};

/**
 * Module to show Recently Viewed Products
 *
 * Copyright (c) 2011 Caroline Schnapp (11heavens.com)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */
 
Shopify.Products=(function(){var a={howManyToShow:3,howManyToStoreInMemory:10,wrapperId:"recently-viewed-products",templateId:"recently-viewed-product-template",onComplete:null};var b={configuration:{expires:90,path:"/",domain:window.location.hostname},name:"shopify_recently_viewed",write:function(c){jQuery.cookie(this.name,c.join(" "),this.configuration)},read:function(){var c=[];var d=jQuery.cookie(this.name);if(d!==null){c=d.split(" ")}return c},destroy:function(){jQuery.cookie(this.name,null,this.configuration)}};return{showRecentlyViewed:function(h){var h=h||{};jQuery.extend(a,h);var g=b.read();var c=Math.min(g.length,a.howManyToShow);if(c){var f=jQuery("#"+a.templateId);var j=jQuery("#"+a.wrapperId);if(f.length&&j.length){var d=0;for(var e=0;e<c;e++){jQuery.getJSON("/products/"+g[e]+".js",function(k){f.tmpl(k).appendTo(j);d++;if(d===c){j.show();if(a.onComplete){try{a.onComplete()}catch(i){}}}})}}}},getConfig:function(){return a},clearList:function(){b.destroy()},recordRecentlyViewed:function(g){var g=g||{};jQuery.extend(a,g);var e=b.read();if(window.location.pathname.indexOf("/products/")!==-1){var f=window.location.pathname.match(/\/products\/([a-z0-9\-]+)/)[1];var c=jQuery.inArray(f,e);if(c===-1){var d=e.unshift(f);e=e.splice(0,a.howManyToStoreInMemory)}else{e.splice(c,1);e.unshift(f)}b.write(e)}}}})();