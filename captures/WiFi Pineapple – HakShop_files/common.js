
/* Using a self-executing anonymous function - (function(){})(); - so that all variables and functions defined within
 aren’t available to the outside world. */

var Shopify = Shopify || {};

(function(){
    var APP_FOLDER = 'in-stock-reminder';
    var APP_PREFIX = 'ISR';
    var APP_URL = 'http://shopify-apps.spur-i-t.com/' + APP_FOLDER + '/requests/subscribe';
//    var APP_URL = 'http://testing.shopify-apps.spur-i-t.com/in-stock-reminder/requests/subscribe';

    if (typeof ISRParams == 'undefined') {
        return;
    };

    /* Load Script function we may need to load jQuery from the Google's CDN */
    /* That code is world-reknown. */
    /* One source: http://snipplr.com/view/18756/loadscript/ */

    var loadScript = function(url, callback){

        var script = document.createElement("script");
        script.type = "text/javascript";

        // If the browser is Internet Explorer.
        if (script.readyState){
            script.onreadystatechange = function(){
                if (script.readyState == "loaded" || script.readyState == "complete"){
                    script.onreadystatechange = null;
                    callback();
                }
            };
            // For any other browser.
        } else {
            script.onload = function(){
                callback();
            };
        }

        script.src = url;
        document.getElementsByTagName("head")[0].appendChild(script);

    };

    /* This is my app's JavaScript */
    var myAppJavaScript = function($, baseJquery){
        var jQuery = $;
        // $ in this scope references the jQuery object we'll use.

        // protection from secondary run of the script
        if ($('#ISR_popup').length) {
            return;
        }

        /**
         * Based on jQuery.browser.mobile (http://detectmobilebrowser.com/)
         *
         * isMobile will be true if the browser is a mobile device
         *
         **/
        var isMobile = (function(a) {
            return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))
        })(navigator.userAgent||navigator.vendor||window.opera);

        if (typeof jQuery.spuritmodal == 'undefined') {
/*
* SimpleModal 1.4.3 - jQuery Plugin
* http://simplemodal.com/
* Copyright (c) 2012 Eric Martin
* Licensed under MIT and GPL
* Date: Sat, Sep 8 2012 07:52:31 -0700
*/
(function(b){var j=[],l=b(document),m=b.browser.msie&&6===parseInt(b.browser.version)&&"object"!==typeof window.XMLHttpRequest,o=b.browser.msie&&7===parseInt(b.browser.version),n=null,k=b(window),h=[];b.spuritmodal=function(a,d){return b.spuritmodal.impl.init(a,d)};b.spuritmodal.close=function(){b.spuritmodal.impl.close()};b.spuritmodal.focus=function(a){b.spuritmodal.impl.focus(a)};b.spuritmodal.setContainerDimensions=function(){b.spuritmodal.impl.setContainerDimensions()};
b.spuritmodal.setPosition=function(){b.spuritmodal.impl.setPosition()};b.spuritmodal.update=function(a,d){b.spuritmodal.impl.update(a,d)};b.fn.spuritmodal=function(a){return b.spuritmodal.impl.init(this,a)};b.spuritmodal.defaults={appendTo:"body",focus:!0,opacity:50,overlayId:"spurit-simplemodal-overlay",overlayCss:{},containerId:"spurit-simplemodal-container",containerCss:{},dataId:"spurit-simplemodal-data",dataCss:{},minHeight:null,minWidth:null,maxHeight:null,maxWidth:null,autoResize:!1,autoPosition:!0,zIndex:1E3,close:!0,closeHTML:'<a class="modalCloseImg" title="Close"></a>',
closeClass:"spurit-simplemodal-close",escClose:!0,overlayClose:!1,fixed:!0,position:null,persist:!1,modal:!0,onOpen:null,onShow:null,onClose:null};b.spuritmodal.impl={d:{},init:function(a,d){if(this.d.data)return!1;n=b.browser.msie&&!b.support.boxModel;this.o=b.extend({},b.spuritmodal.defaults,d);this.zIndex=this.o.zIndex;this.occb=!1;if("object"===typeof a){if(a=a instanceof b?a:b(a),this.d.placeholder=!1,0<a.parent().parent().size()&&(a.before(b("<span></span>").attr("id","spurit-simplemodal-placeholder").css({display:"none"})),
this.d.placeholder=!0,this.display=a.css("display"),!this.o.persist))this.d.orig=a.clone(!0)}else if("string"===typeof a||"number"===typeof a)a=b("<div></div>").html(a);else return alert("SimpleModal Error: Unsupported data type: "+typeof a),this;this.create(a);this.open();b.isFunction(this.o.onShow)&&this.o.onShow.apply(this,[this.d]);return this},create:function(a){this.getDimensions();if(this.o.modal&&m)this.d.iframe=b('<iframe src="javascript:false;"></iframe>').css(b.extend(this.o.iframeCss,
{display:"none",opacity:0,position:"fixed",height:h[0],width:h[1],zIndex:this.o.zIndex,top:0,left:0})).appendTo(this.o.appendTo);this.d.overlay=b("<div></div>").attr("id",this.o.overlayId).addClass("spurit-simplemodal-overlay").css(b.extend(this.o.overlayCss,{display:"none",opacity:this.o.opacity/100,height:this.o.modal?j[0]:0,width:this.o.modal?j[1]:0,position:"fixed",left:0,top:0,zIndex:this.o.zIndex+1})).appendTo(this.o.appendTo);this.d.container=b("<div></div>").attr("id",this.o.containerId).addClass("spurit-simplemodal-container").css(b.extend({position:this.o.fixed?
"fixed":"absolute"},this.o.containerCss,{display:"none",zIndex:this.o.zIndex+2})).append(this.o.close&&this.o.closeHTML?b(this.o.closeHTML).addClass(this.o.closeClass):"").appendTo(this.o.appendTo);this.d.wrap=b("<div></div>").attr("tabIndex",-1).addClass("spurit-simplemodal-wrap").css({height:"100%",outline:0,width:"100%"}).appendTo(this.d.container);this.d.data=a.attr("id",a.attr("id")||this.o.dataId).addClass("spurit-simplemodal-data").css(b.extend(this.o.dataCss,{display:"none"})).appendTo("body");this.setContainerDimensions();
this.d.data.appendTo(this.d.wrap);(m||n)&&this.fixIE()},bindEvents:function(){var a=this;b("."+a.o.closeClass).bind("click.spurit-simplemodal",function(b){b.preventDefault();a.close()});a.o.modal&&a.o.close&&a.o.overlayClose&&a.d.overlay.bind("click.spurit-simplemodal",function(b){b.preventDefault();a.close()});l.bind("keydown.spurit-simplemodal",function(b){a.o.modal&&9===b.keyCode?a.watchTab(b):a.o.close&&a.o.escClose&&27===b.keyCode&&(b.preventDefault(),a.close())});k.bind("resize.spurit-simplemodal orientationchange.spurit-simplemodal",
function(){a.getDimensions();a.o.autoResize?a.setContainerDimensions():a.o.autoPosition&&a.setPosition();m||n?a.fixIE():a.o.modal&&(a.d.iframe&&a.d.iframe.css({height:h[0],width:h[1]}),a.d.overlay.css({height:j[0],width:j[1]}))})},unbindEvents:function(){b("."+this.o.closeClass).unbind("click.spurit-simplemodal");l.unbind("keydown.spurit-simplemodal");k.unbind(".spurit-simplemodal");this.d.overlay.unbind("click.spurit-simplemodal")},fixIE:function(){var a=this.o.position;b.each([this.d.iframe||null,!this.o.modal?null:this.d.overlay,
"fixed"===this.d.container.css("position")?this.d.container:null],function(b,f){if(f){var g=f[0].style;g.position="absolute";if(2>b)g.removeExpression("height"),g.removeExpression("width"),g.setExpression("height",'document.body.scrollHeight > document.body.clientHeight ? document.body.scrollHeight : document.body.clientHeight + "px"'),g.setExpression("width",'document.body.scrollWidth > document.body.clientWidth ? document.body.scrollWidth : document.body.clientWidth + "px"');else{var c,e;a&&a.constructor===
Array?(c=a[0]?"number"===typeof a[0]?a[0].toString():a[0].replace(/px/,""):f.css("top").replace(/px/,""),c=-1===c.indexOf("%")?c+' + (t = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"':parseInt(c.replace(/%/,""))+' * ((document.documentElement.clientHeight || document.body.clientHeight) / 100) + (t = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"',a[1]&&(e="number"===typeof a[1]?
a[1].toString():a[1].replace(/px/,""),e=-1===e.indexOf("%")?e+' + (t = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft) + "px"':parseInt(e.replace(/%/,""))+' * ((document.documentElement.clientWidth || document.body.clientWidth) / 100) + (t = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft) + "px"')):(c='(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (t = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"',
e='(document.documentElement.clientWidth || document.body.clientWidth) / 2 - (this.offsetWidth / 2) + (t = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft) + "px"');g.removeExpression("top");g.removeExpression("left");g.setExpression("top",c);g.setExpression("left",e)}}})},focus:function(a){var d=this,a=a&&-1!==b.inArray(a,["first","last"])?a:"first",f=b(":input:enabled:visible:"+a,d.d.wrap);setTimeout(function(){0<f.length?f.focus():d.d.wrap.focus()},
10)},getDimensions:function(){var a="undefined"===typeof window.innerHeight?k.height():window.innerHeight;j=[l.height(),l.width()];h=[a,k.width()]},getVal:function(a,b){return a?"number"===typeof a?a:"auto"===a?0:0<a.indexOf("%")?parseInt(a.replace(/%/,""))/100*("h"===b?h[0]:h[1]):parseInt(a.replace(/px/,"")):null},update:function(a,b){if(!this.d.data)return!1;this.d.origHeight=this.getVal(a,"h");this.d.origWidth=this.getVal(b,"w");this.d.data.hide();a&&this.d.container.css("height",a);b&&this.d.container.css("width",
b);this.setContainerDimensions();this.d.data.show();this.o.focus&&this.focus();this.unbindEvents();this.bindEvents()},setContainerDimensions:function(){var a=m||o,d=this.d.origHeight?this.d.origHeight:b.browser.opera?this.d.container.height():this.getVal(a?this.d.container[0].currentStyle.height:this.d.container.css("height"),"h"),a=this.d.origWidth?this.d.origWidth:b.browser.opera?this.d.container.width():this.getVal(a?this.d.container[0].currentStyle.width:this.d.container.css("width"),"w"),f=this.d.data.outerHeight(!0),
g=this.d.data.outerWidth(!0);this.d.origHeight=this.d.origHeight||d;this.d.origWidth=this.d.origWidth||a;var c=this.o.maxHeight?this.getVal(this.o.maxHeight,"h"):null,e=this.o.maxWidth?this.getVal(this.o.maxWidth,"w"):null,c=c&&c<h[0]?c:h[0],e=e&&e<h[1]?e:h[1],i=this.o.minHeight?this.getVal(this.o.minHeight,"h"):"auto",d=d?this.o.autoResize&&d>c?c:d<i?i:d:f?f>c?c:this.o.minHeight&&"auto"!==i&&f<i?i:f:i,c=this.o.minWidth?this.getVal(this.o.minWidth,"w"):"auto",a=a?this.o.autoResize&&a>e?e:a<c?c:a:
g?g>e?e:this.o.minWidth&&"auto"!==c&&g<c?c:g:c;this.d.container.css({height:d,width:a});this.d.wrap.css({overflow:f>d||g>a?"auto":"visible"});this.o.autoPosition&&this.setPosition()},setPosition:function(){var a,b;a=h[0]/2-this.d.container.outerHeight(!0)/2;b=h[1]/2-this.d.container.outerWidth(!0)/2;var f="fixed"!==this.d.container.css("position")?k.scrollTop():0;this.o.position&&"[object Array]"===Object.prototype.toString.call(this.o.position)?(a=f+(this.o.position[0]||a),b=this.o.position[1]||
b):a=f+a;this.d.container.css({left:b,top:a})},watchTab:function(a){if(0<b(a.target).parents(".spurit-simplemodal-container").length){if(this.inputs=b(":input:enabled:visible:first, :input:enabled:visible:last",this.d.data[0]),!a.shiftKey&&a.target===this.inputs[this.inputs.length-1]||a.shiftKey&&a.target===this.inputs[0]||0===this.inputs.length)a.preventDefault(),this.focus(a.shiftKey?"last":"first")}else a.preventDefault(),this.focus()},open:function(){this.d.iframe&&this.d.iframe.show();b.isFunction(this.o.onOpen)?
this.o.onOpen.apply(this,[this.d]):(this.d.overlay.show(),this.d.container.show(),this.d.data.show());this.o.focus&&this.focus();this.bindEvents()},close:function(){if(!this.d.data)return!1;this.unbindEvents();if(b.isFunction(this.o.onClose)&&!this.occb)this.occb=!0,this.o.onClose.apply(this,[this.d]);else{if(this.d.placeholder){var a=b("#spurit-simplemodal-placeholder");this.o.persist?a.replaceWith(this.d.data.removeClass("spurit-simplemodal-data").css("display",this.display)):(this.d.data.hide().remove(),a.replaceWith(this.d.orig))}else this.d.data.hide().remove();
this.d.container.hide().remove();this.d.overlay.hide();this.d.iframe&&this.d.iframe.hide().remove();this.d.overlay.remove();this.d={}}}}})(jQuery);

        }

        if (!$("meta[name*=viewport]").length) {
            $('head').append('<meta name="viewport" content="width=device-width, minimum-scale=0.1, maximum-scale=1.0" />');
        }

        // !!Uncomment line below in production mode!!!
        $('head').append('<link rel="stylesheet" href="//s3.amazonaws.com/shopify-apps/' + APP_FOLDER + '/js/common.css" type="text/css" />');
        $('head').append('<link rel="stylesheet" href="//s3.amazonaws.com/shopify-apps/' + APP_FOLDER + '/store/' + ISRParams.id + '.css?' + Math.random() + '" type="text/css" />');

//        loadScript('//s3.amazonaws.com/shopify-apps/js/jquery.simplemodal.js', function(){});//s3.amazonaws.com/shopify-apps/js/jquery.simplemodal.js

        loadScript('//s3.amazonaws.com/shopify-apps/' + APP_FOLDER + '/store/' + ISRParams.id + '.js?' + Math.random(), function(){
            // Including api.jquery.js conditionnally.
            if (typeof SpurShopify == "undefined" || typeof SpurShopify.resizeImage === "undefined") {
                loadScript('//s3.amazonaws.com/all-apps/js/jquery.spurit.api.js', function(){
                    App.init();
                });
    //            loadScript(ISRParams.apiScript, function(){});
            } else {
                App.init();
            }
        });

        var __ = function(key) {
            var translation = key;
            if (typeof ISR_config.translates[key] !== 'undefined') {
                translation = ISR_config.translates[key];
            }

            return translation;
        };

        var __l = function(translationId, key) {
            var idPrefix = '#isr_t_';
            var translation = key;

            if ( $(idPrefix + translationId).length ) {
                translation = $(idPrefix + translationId).html();
            } else {
                translation = __(key);
            }

            return translation;
        }

        var getParam = function(param, defaultValue) {
            if ( (typeof param == 'undefined') || (param === null) ) {
                if (typeof defaultValue != 'undefined') {
                    param = defaultValue;
                } else {
                    param = false;
                }
            }

            return param;
        };

        /*** Main code ***/
        var App = {
            product : null,
            variant : null,
            variants: {},
            variantsById: [],
            unavailableVariants: [],
            variantsUpdated: false,
            activeModal: null,
            priceBox: null,
            variantSelector: null,
            optionSelects: null,
            optionSelectsSelector: null,
            submitButton: null,
            justLoaded: true,
            button: $('#ISR_button'),
            activeVariant: null,
            // popup or inline form should be used
            popupForm: true,
            instantForm: false,
            inlineFormWrapper: $('#ISR-form-wrapper'),
            preOrderCheckInterval: null,
            popupShowed: false,

            init : function() {
                App.setConfigParams();
                var saveInstantParam = false;
                if (typeof ISR_config.instant_control == 'undefined') {
                    ISR_config.instant_control = '0';
                    saveInstantParam = true;
                }
                if (ISR_config.instant_control == '1') {
                    if (ISR_config.inline_form != '1') {
                        App.setGlobalVar('ISR_instantButton', true, saveInstantParam);
                        App.setGlobalVar('ISR_instantForm', false, saveInstantParam);
                    } else {
                        App.setGlobalVar('ISR_instantButton', false, saveInstantParam);
                        App.setGlobalVar('ISR_instantForm', true, saveInstantParam);
                    }
                } else {
                    App.setGlobalVar('ISR_instantButton', false, saveInstantParam);
                    App.setGlobalVar('ISR_instantForm', false, saveInstantParam);
                }

                App.instantForm = ISR_instantForm;

                if (ISR_config.inline_form == '1' && App.inlineFormWrapper.length) {
                    App.popupForm = false;
                    App.initInlineElements();
                } else {
                    App.instantForm = false;
                    App.initPopupElements();
                }

                if (typeof Shopify.spuritProduct == 'undefined') {
                    $.getJSON((window.location.pathname.replace(/\/$/, '')) + '.js', function(product) {
                        Shopify.spuritProduct = product;

                        App.setVariants();
                        App.bindHandlers();
                        App.showIfInstant();
                    });
                } else {
                    App.setVariants();
                    App.bindHandlers();
                    App.showIfInstant();
                }

                if (typeof window.location.protocol != 'undefined' && window.location.protocol == 'https:') {
                    APP_URL = APP_URL.replace('http:', 'https:');
                }

            },

            setConfigParams: function() {
                ISR_config.product_tag = ISR_config.product_tag || ISRParams.product_tag;
                ISR_config.button_hide_tag = ISR_config.button_hide_tag || ISRParams.button_hide_tag;
                ISR_config.button_hide_selector = ISR_config.button_hide_selector || ISRParams.button_hide_selector;
            },

            initInlineElements: function() {
                App.inlineFormWrapper.append('<div id="ISR_popup_container"><div id="ISR_popup"><h3>' + ISR_config.price_popup_title +
                    '</h3><div id="ISR_popup_description">' + __l('formDescription', ISR_config.price_popup_description) +
                    '</div><div id="ISR_popup_content"></div><div id="ISR_result"></div>' +
                    //'<div id="ISR_powered">Powered by <a href="http://spur-i-t.com">SpurIT</a></div>' +
                    '</div></div>');
            },

            initPopupElements: function() {
                var $body = $('body');
                var badgePosition = '';
                var xShift = ISR_config.label_x_shift + ISR_config.label_x_shift_units;
                var yShift = ISR_config.label_y_shift + ISR_config.label_y_shift_units;
                switch (ISR_config.label_position) {
                    case 'left-top':
                        badgePosition = 'left: ' + xShift + '; top: ' + yShift + ';';
                        break;
                    case 'right-top':
                        badgePosition = 'right: ' + xShift + '; top: ' + yShift + ';';
                        break;
                    case 'left-bottom':
                        badgePosition = 'left: ' + xShift + '; bottom: ' + yShift + ';';
                        break;
                    case 'right-bottom':
                        badgePosition = 'right: ' + xShift + '; bottom: ' + yShift + ';';
                        break;
                    default:
                }

                $body.append(
                    '<div style="display: none"><div id="ISR_popup"><h3>' + ISR_config.price_popup_title +
                        '</h3><div id="ISR_popup_description">' + ISR_config.price_popup_description +
                        '</div><div id="ISR_popup_content"></div><div id="ISR_result"></div>' +
                        //'<div id="ISR_powered">Powered by <a href="http://spur-i-t.com">SpurIT</a></div>' +
                        '</div></div>'
                );

                var badgeImage = ISR_config.image;
                if (isMobile) {
                    badgeImage = ISR_config.m_image;
                }

                if (ISR_config.custom_button == '1' && App.button.length) {
                    // action not required
                } else {
                    if (ISR_config.custom_button != '1' && App.button.length) {
                        App.button.remove();
                    }
                    App.button = $('<div id="ISR_button" class="ISR_button_spurit" style="' + badgePosition + '">');
                    App.button.html('<img src="//s3.amazonaws.com/shopify-apps/' + APP_FOLDER + '/store/img/'
                        + badgeImage + '" alt="' + ISR_config.label_title + '" />');
                    $body.append(App.button);
                }
            },

            showIfInstant: function() {
                if (ISR_instantButton) {
                    App.showBadge();
                }
                if (App.instantForm) {
                    App.showInlineForm();
                }
            },

            setVariants: function(productAvailable) {
                var isAnyVariantOut = false;
                App.unavailableVariants = [];
                App.product = Shopify.spuritProduct;
                for(var len = App.product.variants.length, i=0; i < len; i++) {
                    App.variants[App.product.variants[i].title] = App.product.variants[i];
                    App.variantsById[App.product.variants[i].id] = App.product.variants[i].title;
                    if ( App.product.variants[i].available == false ) {
                        isAnyVariantOut = true;
                        App.unavailableVariants.push(App.product.variants[i]);
                    } else if ( (App.product.variants[i].inventory_quantity <= 0) && (typeof spoProduct != 'undefined') ) {
                        if ( typeof productAvailable !== 'undefined' && !productAvailable ) {
                            App.product.variants[i].available = false;
                            isAnyVariantOut = true;
                            App.unavailableVariants.push(App.product.variants[i]);
                        }
                    }
                }

                if (!isAnyVariantOut) {
                    ISR_instantButton = false;
                    App.instantForm = false;
                }
            },

            getVariantByTitle: function(variantTitle) {
                var variant = null;
                if (typeof App.variants[variantTitle] != 'undefined') {
                    variant = App.variants[variantTitle];
                }

                return variant;
            },

            getVariantTitleById: function(variantId) {
                var variantTitle = null;
                if (typeof App.variantsById[variantId] != 'undefined') {
                    variantTitle = App.variantsById[variantId];
                }

                return variantTitle;
            },

            setGlobalVar: function(varName, value, save) {
                if (typeof save == 'undefined') {
                    save = false;
                }
                if (!save || (save && (typeof window[varName] == 'undefined')) ) {
                    window[varName] = value;
                }

                return window[varName];
            },

            buildVariantName : function() {
                var options = [];
                var $optionSelects = App.getOptionSelects();
                $optionSelects.each(function(){
                    options.push($(this).val());
                });

                return options.join(' / ');
            },

            getOptionSelects: function() {
                if (!App.optionSelects) {
                    var selector, optionSelect, optionElement = 'select';
                    var prefixes = ['product-select', 'productSelect', 'product-variants', 'product-selectors', 'variant-listbox'];

                    if (typeof ISRParams.optionElement != 'undefined') {
                        optionElement = ISRParams.optionElement;
                    }
                    if (typeof ISR_variantsSelectorId == 'undefined') {
                        for (var len = prefixes.length, i=0; i < len; i++) {
                            selector = optionElement + "[id|='" + prefixes[i] + "-option']";
                            optionSelect = $(selector);
                            if (optionSelect.length) {
                                break;
                            }
                            // some selects can contain product id in id
                            selector = optionElement + "[id|='" + prefixes[i] + '-' + Shopify.spuritProduct.id + "-option']";
                            optionSelect = $(selector);
                            if (optionSelect.length) {
                                break;
                            }
                        }

                    } else {
                        selector = optionElement + "[id|='" + ISR_variantsSelectorId + "-option']";
                        optionSelect = $(selector);
                    }

                    App.optionSelectsSelector = selector;
                    App.optionSelects = optionSelect;

                    // last try to find option selects
                    //if (!App.optionSelects.length) {
                    //    App.optionSelectsSelector = optionElement + "[id|='" + 'product-select-' + Shopify.spuritProduct.id + "-option']";
                    //    App.optionSelects = $(App.optionSelectsSelector);
                    //}

                }

                return App.optionSelects;
            },

            showButton: function(variantName) {
                var isrActive = App.isISRActive();
                if (!isrActive) {return;}
                // try to find variant by it's id in URL
                if ( !variantName ) {
                    var variantId = App.getUrlParam('variant');
                    if ( variantId ) {
                        variantName = App.getVariantTitleById(variantId);
                        var variant = App.getVariantByTitle(variantName);
                    }
                } else {
                    var variant = App.getVariantByTitle(variantName);
                }
                App.activeVariant = variantName;
                App.variant = variant;
                if (!App.popupForm) {
                    if ( typeof variant == 'undefined' || variant.available == true ) {
                        App.hideInlineForm();
                    } else {
                        App.showInlineForm();
                    }

                    return;
                }
                if (typeof variant == 'undefined' || !variant) {
                    App.hideBadge();
                    return;
                }
                if ( variant.available == false ) {
                    App.showBadge();
                    if (App.isAutoShow('load')) {
                        if (App.justLoaded) {
                            App.showPopup(variantName);
                        }
                    } else if (App.isAutoShow('select')) {
                        App.showPopup(variantName);
                    }

                } else {
                    App.hideBadge();
                    App.checkPreOrder();
                }
            },

            checkPreOrder: function() {
                if ( !App.showIfNotAvailable() ) {
                    //setTimeout(App.checkPreOrder, 1000);
                    setTimeout(App.showIfNotAvailable, 1000);
                }
            },

            showIfNotAvailable: function() {
                if ( typeof spoProduct != 'undefined' ) {
                    var isAvailable = spoProduct.isAvailable();
                    if ( isAvailable === null ) {
                        return false;
                    }
                    if ( !isAvailable ) {
                        App.showBadge();
                        if ( !App.variantsUpdated ) {
                            App.setVariants(isAvailable);
                            App.variantsUpdated = true;
                        }
                    }

                    return true;
                }

                return false;
            },

            showBadge: function() {
                App.button.show();
                App.hideAddButton();
            },

            hideBadge: function() {
                if (!ISR_instantButton) {
                    App.button.hide();
                }
                App.showAddButton();
            },

            showInlineForm: function() {
                App.setInlineTemplate();
                App.inlineFormWrapper.show();
                App.hideAddButton();
            },

            hideInlineForm: function() {
                App.inlineFormWrapper.hide();
                App.showAddButton();
            },

            showPopup: function(activeVariant) {
                if (App.activeModal) {
                    return;
                }
                App.activeVariant = activeVariant;
                App.button.trigger('click');
            },

            showAddButton: function() {
                App.toggleAddButton(true);
            },

            hideAddButton: function() {
                App.toggleAddButton(false);
            },

            toggleAddButton: function(show) {
                var hideTag = getParam(ISR_config.button_hide_tag);
                var buttonSelector = getParam(ISR_config.button_hide_selector);

                if ( hideTag && $.inArray(hideTag, App.product.tags) ) {
                    if ( show ) {
                        $(buttonSelector).show();
                    } else {
                        $(buttonSelector).hide();
                    }
                }
            },

            isISRActive: function() {
                var productTagMode = getParam(ISR_config.product_tag_mode, '');
                var productTag = getParam(ISR_config.product_tag, '');

                if ( !productTagMode || !productTag ) {
                    return true;
                }
                if ( productTagMode == 'show' ) {
                    if ( $.inArray(productTag, App.product.tags) != -1 ) {
                        return true;
                    }
                } else {
                    if ( $.inArray(productTag, App.product.tags) == -1 ) {
                        return true;
                    }
                }

                return false;
            },

            isAutoShow: function(event) {
                var result = false;

                if (!parseInt(getParam(ISR_config.auto_popup))) return result;

                event = getParam(event, 'load');
                switch (event) {
                    case 'load':
                        if ( getParam(ISR_config.auto_popup_mode) == 'load' ) {
                            result = true;
                        }
                        break;

                    case 'select':
                        if ( getParam(ISR_config.auto_popup_mode) == 'select' ) {
                            result = true;
                        }
                        break;

                    default:
                }

                return result;
            },

            bindHandlers: function() {
                var $optionSelectors = baseJquery(App.getOptionSelects());

                if (App.popupForm) {
                    App.button.click(function(){
                        App.setPopupTemplate(App.product);
                        var minWidth = 420;
                        if (isMobile) {
                            minWidth = 305;
                        }
                        var mobileCss = (isMobile) ? {position:"absolute !important"} : {};
                        $('#ISR_popup').spuritmodal({
                            containerId: 'ISR_popup_container',
                            containerCss: mobileCss,
                            overlayId: 'ISR_popup_overlay',
                            onShow: function(dialog) {
                                App.onModalShow(dialog);
                            },
                            minWidth: minWidth,
                            maxWidth: 420,
                            zIndex: 3100100100,
                            close: true,
                            closeHTML: '<a href="#" class="modalCloseImg">×</a>',
                            onClose: function() {
                                App.activeModal = null;
                                $.spuritmodal.close();
                            }
                        });
                    });
                }

                // Set onChange handlers if form is not permanently visible
                if (!App.instantForm) {
                    $optionSelectors.bind('change', function() {
                        if ($optionSelectors.length == 1) {
                            App.showButton($('option:selected', this).val());
                            App.justLoaded = false;
                        } else {
                            App.showButton(App.buildVariantName());
                        }
                    });

                    if (App.product.variants.length > 1 && $optionSelectors.length) {
                        if ($optionSelectors.length == 1) {
                            App.showButton($('option:selected', $optionSelectors).val());
                        } else {
                            App.showButton(App.buildVariantName());
                        }
                        //$optionSelectors.eq(0).trigger('change');
                    } else {
                        App.showButton(App.product.variants[0].title);
                    }
                }

            },

            onModalShow: function(dialog) {
                App.activeModal = dialog;
                dialog.container.css('height', 'auto');

                App.priceBox = $('#ISR_popup_price');
//                App.variantSelector = $('#ISR_form_variant');
                App.variantSelector.change(function(){
                    App.updatePrice();
                });

                if (getParam(App.activeVariant)) {
                    if (App.variants[App.activeVariant] && !App.variants[App.activeVariant].available) {
                        App.variantSelector.val(App.variants[App.activeVariant].id);
                    }
                    
                    //App.activeVariant = null; 
                }

                App.updatePrice();
            },

            setPopupTemplate : function(product) {
                var photo = null;
                if (product.images.length) {
                    photo = SpurShopify.resizeImage(product.images[0], 'small');
                } else {
                    photo = 'http://cdn.shopify.com/s/images/admin/no-image-small.gif';
                }

                photo = '<div id="ISR_popup_photo"><img src="' + photo + '" /></div>';
                var productName = '<h4>' + product['title'] + '</h4><div id="ISR_popup_price"></div>';

                var form = App.getFormTemplate();

                var content = photo + productName + form;
                $('#ISR_popup_content').html(content);
                App.bindFormHandler();
            },

            setInlineTemplate: function() {
                var form = App.getFormTemplate();

                $('#ISR_popup_content').html(form);
                App.bindFormHandler();
            },

            getFormTemplate: function() {
                var attr = '',
                    variants = '',
                    emailValue = '' ;

                if (App.popupForm || App.instantForm) {
                    if (App.unavailableVariants.length == 1) {
                        attr = ' style="display: none;"';
                        variants = App.form.input('hidden', 'vid', App.unavailableVariants[0].id, 'ISR_form_variant')
                            + '<p class="ISR-variant">' + App.unavailableVariants[0].title + '</p>';
                    } else {
                        variants = App.form.createFormElement('select', 'ISR_form_variant', {
                            options: App.unavailableVariants,
                            attributes: attr,
//                    label: 'Select product variant',
                            name: 'vid'
                        });
                    }
                } else {
                    variants = App.form.input('hidden', 'vid', App.variant.id, 'ISR_form_variant');
                }

                if (ISRParams.customer) {
                    emailValue = ISRParams.customer['email'];
                } else {
                    emailValue = '';
                }
                var emailField = App.form.createFormElement('email', 'ISR_form_email', {
                    label:__('Email:'),
                    name: 'email',
                    value: emailValue,
                    required: true
                });

                // 'Actually with' list
                if (typeof ISR_config.hide_period_list == 'undefined') {
                    ISR_config.hide_period_list = '0';
                }
                if (ISR_config.hide_period_list == '1') {
//                    period = App.form.input('hidden', 'period', 'm-1', 'ISR_form_period_hidden');
                    period = ''; // not set period
                } else {
                    var listOptions = [];
                    for (var i in ISR_config.periods) {
                        listOptions.push({"id":i,"title":ISR_config.periods[i].replace(/([^\s]\w*)$/gi, function(m){return __(m)})});
                    }
                    listOptions.push({"id": '', "title": __('choose period...')});
                    var period = App.form.createFormElement('select', 'ISR_form_period', {
                        label: __('I can wait for:'),
                        name: 'period',
                        options: listOptions
                    });

                    var periodCustom = App.form.wrap(
                        App.form.label(__('Period:'), 'ISR_form_customPeriod') +
                            App.form.text('customPeriod', '', 'ISR_form_customPeriod') +
                            App.form.select(
                                'customPeriodType',
                                {
                                    'options': [
                                        {'id':'d', 'title':__('day(s)')},
                                        {'id':'w', 'title':__('week(s)')},
                                        {'id':'m', 'title':__('month(s)')},
                                        {'id':'y', 'title':__('year(s)')}
                                    ],
                                    'id': 'ISR_form_customPeriodType'
                                }
                            )
                        ,
                        'ISR_form_customPeriod-wrapper'
                    );

                    period += periodCustom;
                }

                var form = '<form id="ISR_form">'
                    + variants
                    + emailField
                    + period
                    + '<div><button type="submit" id="ISR_form_submit">' + __l('buttonText', 'Subscribe') + '</button></div></form>';

                return form;
            },

            bindFormHandler: function() {
                App.variantSelector = $('#ISR_form_variant');
                $('#ISR_form_period').change(function(e){
                    var select = $(this);
                    if (select.val() == '') {
                        $('#ISR_form_customPeriod-wrapper').show();
                        $.spuritmodal.setPosition();
                    } else {
                        $('#ISR_form_customPeriod-wrapper').hide();
                    }
                });
                App.submitButton = $('#ISR_form_submit');
                $('#ISR_form').submit(function(){
                    App.submitButton.attr('disabled', 'disabled');
                    App.getVariantById();
                    App.form.submit(this);
                    return false;
                });
            },

            getVariantById: function() {
                var formVariantId = parseInt(App.variantSelector.val());
                if (formVariantId) {
                    for (var vIndex = 0; vIndex < App.product.variants.length; vIndex++) {
                        if (App.product.variants[vIndex].id == formVariantId) {
                            App.variant = App.product.variants[vIndex];
                            break;
                        }
                    }
                } else {
                    App.variant = App.product.variants[0];
                }
            },

            updatePrice: function() {
//                var index = App.variantSelector[0].selectedIndex;
                App.getVariantById();
                App.priceBox.html(SpurShopify.formatMoney(App.variant.price, ISRParams.moneyFormat));
            },

            closePopup: function() {
                $.spuritmodal.close();
            },

            getUrlParam: function(paramName) {
                var params = {};
                window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(str,key,value) {
                    params[key] = value;
                });
                
                return params[paramName];
            },

            enableSpinner: function($element) {
                $element.data('saved-text', $element.html());
                $element.html('<div class="isr-bounce1"></div><div class="isr-bounce2"></div><div class="isr-bounce3"></div>');
                $element.addClass('isr-spinner');
            },

            disableSpinner: function($element) {
                $element.html($element.data('saved-text'));
                $element.removeClass('isr-spinner');
                $element.data('saved-text', null)
            },

            /*** Form ***/
            "form" : {
                createFormElement : function(type, elId, params) {
                    var label = '';
                    var element = '';
                    var elementName = '';
                    var value = '';
                    var decoratorTag = 'div';
                    var required = '';

                    // set name of the form element
                    if (typeof params.name == 'undefined') {
                        elementName = elId;
                    } else {
                        elementName = params.name;
                    }

                    // construct label
                    if (typeof params.label != 'undefined') {
                        label = this.label(params.label, elId);
                    }

                    // required
                    if ( (typeof params.required != 'undefined') && (params.required) ) {
                        required = ' required="required" ';
                    }

                    // additional attributes string
                    if (typeof params.attributes == 'undefined') {
                        params.attributes = '';
                    }

                    // construct html of the element
                    switch (type) {
                        case 'select':
                            params.id = elId;
                            params.attributes += required;
                            element = this.select(elementName, params);
                            break;

                        case 'text':
                        default:
                            if (typeof params.value != 'undefined') {
                                value = params.value;
                            }
                            element = this.input(type, elementName, value, elId, required);

                            break;
                    }

                    // wrap element with container
                    return this.wrap( label + element, elId + '-wrapper', decoratorTag);
                },

                label: function(text, forId) {
                    return '<label for="' + forId + '">' + text + '</label>';
                },

                select: function(name, params) {
                    var optionsHtml = '';
                    if (typeof params.optionsHtml == 'undefined') {
                        for (var oIndex = 0; oIndex < params.options.length; oIndex++) {
                            optionsHtml += '<option value="' + params.options[oIndex].id + '">' + params.options[oIndex].title + '</option>';
                        }
                    } else {
                        optionsHtml = params.optionsHtml;
                    }
                    if (typeof params.attributes == 'undefined') {
                        params.attributes = '';
                    }

                    return '<select name="' + name + '" id="' + params.id + '" ' + params.attributes + '>' + optionsHtml + '</select>';
                },

                email: function(name, value, id, attributesString) {
                    return this.input('email', name, value, id, attributesString);
                },

                text: function(name, value, id, attributesString) {
                    return this.input('text', name, value, id, attributesString);
                },

                input: function(type, name, value, id, attributesString) {
                    name = ' name="' + name + '"';
                    if (typeof value == 'undefined') {
                        value = '';
                    } else {
                        value = ' value="' + value + '"';
                    }
                    if (typeof id == 'undefined') {
                        id = '';
                    } else {
                        id = ' id="' + id + '"';
                    }
                    if (typeof attributesString == 'undefined') {
                        attributesString = '';
                    }

                    return '<input type="' + type + '" ' +  name + id + value + attributesString + ' />';
                },

                wrap: function(element, elId, tag) {
                    if (typeof elId == 'undefined' ) {
                        elId = '';
                    } else {
                        elId = ' id="' + elId + '"';
                    }
                    if ( (typeof tag == 'undefined') || (tag == '') ) {
                        tag = 'div';
                    }
                    return '<' + tag + elId + '>' + element + '</' + tag + '>';
                },

                submit: function(button) {
                    var variant = App.variant;
                    //App.submitButton = $('#ISR_form_submit');
                    //App.submitButton.attr('disabled', 'disabled');
                    App.enableSpinner(App.submitButton);

                    var formData = $("#ISR_form").serialize();
                    formData = formData
                        + '&type=stock'
                        + '&shop=' + Shopify.shop
                        + '&pid=' + App.product.id
                        + '&handle=' + App.product.handle
                        + '&image=' + SpurShopify.resizeImage(App.product.images[0], 'compact')
                        + '&ptitle=' + encodeURIComponent(App.product.title);

                    if (ISRParams.customer && ISRParams.customer["country_code"]) {
                        formData += '&country_code='+ISRParams.customer["country_code"];
                    }

                    if (variant) {
                        formData += '&vtitle=' + variant.title + '&price=' + variant.price;
                    }

                    $.post(APP_URL, formData, function(data){
                        var resultBox = $('#ISR_result');
                        var closeLink = $('<a/>', {'id':'ISR_close', 'text':__l('closeText', 'Close')});

                        if (data.status == 'error') {
                            resultBox.html(__(data.message) + ' ');
                            resultBox.addClass('ISR-result-error');
                            closeLink.click(function(){
                                resultBox.empty();
                                resultBox.removeClass();
                            });
                        } else {
                            resultBox.html(__l('successText', data.message) + ' ');
                            if (App.popupForm) {
                                closeLink.click(function(){
                                    App.closePopup();
                                });
                            } else {
                                closeLink.click(function(){
                                    resultBox.empty();
                                    resultBox.removeClass();
                                });
                            }

                            resultBox.addClass('ISR-result-success');
                        }
                        closeLink.appendTo(resultBox);
                        App.submitButton.attr('disabled', false);
                        App.disableSpinner(App.submitButton);

                    }, 'jsonp');
                }
            }
        };

    };

    if (window.location.toString().match(/\/products\//) === null) {
        return false;
    }

    if ( (typeof ISRParams.product != 'undefined') && ISRParams.product) {
        Shopify.spuritProduct = ISRParams.product;
    }


    /* If jQuery has not yet been loaded or if it has but it's too old for our needs,
     we will load jQuery from the Google CDN, and when it's fully loaded, we will run
     our app's JavaScript. Set your own limits here, the sample's code below uses 1.7
     as the minimum version we are ready to use, and if the jQuery is older, we load 1.9. */
    if ( (typeof jQuery === 'undefined') || (parseFloat(jQuery.fn.jquery) < 1.7) || (parseFloat(jQuery.fn.jquery) >= 1.9) ) {
        var doNoConflict = true;
        if (typeof jQuery === 'undefined') {doNoConflict = false;}
        loadScript('//ajax.googleapis.com/ajax/libs/jquery/1.8/jquery.min.js', function(){
            if (doNoConflict) {
                jQuery17 = jQuery.noConflict(true);
            } else {
                jQuery17 = jQuery;
            }
            myAppJavaScript(jQuery17, jQuery);
        });
    } else {
        myAppJavaScript(jQuery, jQuery);
    }

})();


