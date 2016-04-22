(function() {
  var engines = [
    ['Google', 'q', /\.google\./ ],
    ['Yahoo!', 'p', /search\.yahoo\./ ],
    ['MSN', 'q', /\.msn\./ ],
    ['Live', 'q', /\.live\./ ],
    ['AlltheWeb', 'q', /\.alltheweb\./ ],
    ['AOL', 'query', /\.aol\./ ],
    ['Ask', 'q', /\.ask\./ ],
    ['AltaVista', 'q', /\.altavista\./ ],
    ['BBC', 'q', /\.bbc\./ ],
    ['HotBot', 'query', /\.hotbot\./ ],
    ['Lycos', 'query', /\.lycos\./],
    ['Bing', 'q', /bing\./],
    ['Daum', 'q', /\.daum\./],
    ['Eniro', 'search_word', /\.eniro\./],
    ['Naver', 'query', /\.naver\./],
    ['About', 'terms', /\.about\./],
    ['Mamma', 'query', /\.mamma\./],
    ['Alltheweb', 'q', /\.alltheweb\./],
    ['Voila', 'rdata', /\.voila\./],
    ['Baidu', 'wd', /\.baidu\./],
    ['Alice', 'qs', /\.alice\./],
    ['Yandex', 'text', /\.yandex\./],
    ['Search', 'q', /\.search\./],
    ['PCHome', 'q', /\.pchome\./],
    ['Ozu', 'q', /\.ozu\./],
    ['Terra', 'query', /\.terra\./],
    ['Mynet', 'q', /\.mynet\./],
    ['Ekolay', 'q', /\.ekolay\./],
    ['Rambler', 'words', /\.rambler\./]
  ];

  var ref = '';
  var query  = '';
  var engine = '';
  // var referrer = (window.decodeURI)?window.decodeURI(document.referrer):document.referrer;
  var referrer = document.referrer;
  var resource = (window.decodeURI)?window.decodeURI(document.URL):document.URL;

  function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') { c = c.substring(1,c.length); } 
      if (c.indexOf(nameEQ) === 0) { return c.substring(nameEQ.length,c.length); }
    }
    return null;
  }

  function setCookie(permanent, cookieName, cookieValue) {
    var increment = (permanent) ? 1000*60*60*24*360*20 : 1000*60*30;
    writeCookie(cookieName, cookieValue, today.getTime() + increment);
  }

  function writeCookie(cookieName, cookieValue, msec_in_utc) {
    var expire = new Date(msec_in_utc);
    document.cookie = cookieName + "=" + escape(cookieValue) + ";path=/" +";expires=" + expire.toUTCString();
  }

  function readStorage(permanent, cookieName) {
    var storage = permanent ? 'localStorage' : 'sessionStorage';

    if (storage in window) { return window[storage].getItem(cookieName); }
    else { return false; }
  }

  function setStorage(permanent, cookieName, cookieValue) {
    var storage = permanent ? 'localStorage' : 'sessionStorage';
    if (storage in window) { window[storage].setItem(cookieName, cookieValue); }
  }

  function fetch(permanent, cookieName, func) {
    var cookie = readCookie(cookieName);
    if (cookie == 'undefined') {
      cookie = undefined;
    }
    var local  = readStorage(permanent, cookieName);
    if (local == 'undefined') {
      local = undefined;
    }
    var cookieValue  = cookie || local || func.call();

    if (!cookie || !permanent) { setCookie(permanent, cookieName, cookieValue); }
    if (!local)  { setStorage(permanent, cookieName, cookieValue); }

    return cookieValue;
  }

  function uniqueId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
      return v.toString(16);
    }).toUpperCase();
  }

  if (referrer && referrer !== '') {
    if(referrer.match('\:\/\/'+window.location.host + '[^\w]')) {
      ref = '';
    }
    else {
      ref = 'r';
      for(var i = 0; i<engines.length;i++) {
        if (referrer.match(engines[i][2])) {
          var match = referrer.match(engines[i][1] + '=([^&$]{2,})');
          if (match) {
            query = match[1];
          }          
          engine = engines[i][0];
          ref = 's';
        }
      }
    }
  }
  else {
    referrer = '';
  }

  var today = new Date();
  var visit = '';
  var uniq  = '';
  var uniqToken, visitToken;

  if ( window.__st && !window.__st['offsite'] && window.location.host != 'checkout.shopify.com' ) {

    // If we're not "offsite" (checkout.shopify.com), we'll continue to rely on
    // these boolean cookies in order to maintain the midnight expiry.
    if (readCookie('_shopify_visit')) { visit = 1; }
    if (readCookie('_shopify_uniq')) { uniq = 1; }

    // set return visit cookie
    var expire_time_in_msec = today.getTime() + (30*60*1000); // expire 30 minutes from now 
    writeCookie('_shopify_visit', 't', expire_time_in_msec);

    // set unique visitor cookie - expires tomorrow midnight of the shop's TZ.
    // Today @ midnight + 2years (in msec) - shop offset (in msec) (all in UTC)
    var expire_time = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(),0,0,0,0) + 2*365*86400*1000 - window.__st.offset*1000;
    writeCookie('_shopify_uniq', 'x', expire_time);

  } else {

    // If we're "offsite" (checkout.shopify.com), then we'll just rely on the
    // token cookies themselves as indicators of a new visit/unique, as they
    // are the cookies that will be propagated across domains.
    if (readCookie('_shopify_s')) { visit = 1; }
    if (readCookie('_shopify_y')) { uniq = 1; }

  }

  uniqToken = fetch(true, '_shopify_y', function() { return uniqueId(); });
  visitToken = fetch(false, '_shopify_s', function() { return uniqueId(); });

  setTimeout(function() {

    var params = "";
    for(var name in window.__st) {
      if (window.__st.hasOwnProperty(name)) {
        params+= "&" + name + "=" + encodeURIComponent(window.__st[name]);
      }
    }
    var req = '/visit/record.gif?'+
              '&v=' +ref+
              '&e=' +encodeURIComponent(engine)+
              '&q=' +query+
              '&r=' +encodeURIComponent(referrer)+
              '&vi='+visit+
              '&uq='+uniq+
              '&su='+uniqToken+
              '&sv='+visitToken+
              '&tu='+uniqueId()+
              params;

    new Image().src = '//s.shopify.com' + req;
  }, 50);

  // NOTE:: needed to make below available to seperate
  // js shopify widget
  window.__st_uniqToken = uniqToken;
  window.__st_visitToken = visitToken;

}());
