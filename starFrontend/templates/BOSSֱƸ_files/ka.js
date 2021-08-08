var BossAnalytics=function(){function localStorageSupport(){return"localStorage"in window&&null!==window["localStorage"]}function __post(a,b){return b.method="POST",Ajax(a,b)}function __get(){}function __extend(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"!=typeof g&&(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d?(e?(e=!1,f=c?c:[]):f=c?c:{},g[b]=__extend(j,f,d)):void 0!==d&&(g[b]=d));return g}function getVersion(){return"2.0"}function getCid(){var a=cookie.get("__a")||"",b=a.split(".");return b.length<2?"":b.slice(0,2).join(".")}function getFid(){return""}function getSid(){return cookie.get("__g")||""}function getVisitIdx(){return cookie.get("__a")||""}function getQueryParams(a){var c,d,e,f,b={};if(!a)return b;for(c=(a+"").split("?").length>1?a.split("?")[1]:a,d=c.split("&"),e=0;e<d.length;e++)f=d[e].split("="),f.length>1&&(b[f[0]]=f[1]);return b}function getFirstReferrer(){var a=getQueryParams(cookie.get("__l"));return a.r||""}function getLandingUrl(){var a=getQueryParams(cookie.get("__l"));return a.l||""}function getReferrerUrl(){return document.referrer}function getLastReferrer(){return document.referrer}function getUrl(){return window.location.href}function getPk(){return document.getElementById("page_key_name")?document.getElementById("page_key_name").value:""}function getPlatForm(){var a=navigator.userAgent;return a.indexOf("BossZhipin")>-1&&a.indexOf("iPhone")>-1?"app-iphone":a.indexOf("BossZhipin")>-1&&a.indexOf("Android")>-1?"app-android":a.indexOf("MicroMessenger")>-1?"wechat":a.indexOf("Android")>-1?"m-android":a.indexOf("iPhone")>-1?"m-iphone":a.indexOf("Windows")>-1?"pc-win":a.indexOf("Macintosh")>-1?"pc-mac":a.indexOf("iPad")>-1?"m-ipad":"unknown"}function isMobile(){return/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)}function getMobileSystem(){var a=navigator.userAgent;return a.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)?"iOS":a.indexOf("iPhone")>-1?"iPhone":a.indexOf("Android")>-1||a.indexOf("Linux")>-1?"Android":"other"}function getPcSystem(){var d,e,f,g,h,i,j,k,a=navigator.userAgent,b="Win32"==navigator.platform||"Windows"==navigator.platform,c="Mac68K"==navigator.platform||"MacPPC"==navigator.platform||"Macintosh"==navigator.platform||"MacIntel"==navigator.platform;if(c)return"Mac";if(d="X11"==navigator.platform&&!b&&!c)return"Unix";if(e=String(navigator.platform).indexOf("Linux")>-1)return"Linux";if(b){if(f=a.indexOf("Windows NT 5.0")>-1||a.indexOf("Windows 2000")>-1)return"Win2000";if(g=a.indexOf("Windows NT 5.1")>-1||a.indexOf("Windows XP")>-1)return"WinXP";if(h=a.indexOf("Windows NT 5.2")>-1||a.indexOf("Windows 2003")>-1)return"Win2003";if(i=a.indexOf("Windows NT 6.0")>-1||a.indexOf("Windows Vista")>-1)return"WinVista";if(j=a.indexOf("Windows NT 6.1")>-1||a.indexOf("Windows 7")>-1)return"Win7";if(k=a.indexOf("Windows NT 10")>-1||a.indexOf("Windows 10")>-1)return"Win10"}return"other"}function getSystem(){return isMobile()?getMobileSystem():getPcSystem()}function getBrowerVersion(){return navigator.appVersion}function getResolution(){return window.screen.width+"*"+window.screen.height}function getAgent(){return navigator.userAgent}function getUrlHost(a){var b,c,d,e;return a?(b=(a+"").replace("http://","").replace("https://",""),c=b.split("/"),d=c.length?c[0]:"",e="",d.indexOf("?")>-1?e=d.split("?")[0]:d.indexOf("#")&&(e=d.split("#")[0]),e):""}function getSeoUUid(){return cookie.get("__zp_seo_uuid__")||""}function getPublishParam(){return document.getElementById("page_key_name")&&!param["pk"]&&(param["pk"]=document.getElementById("page_key_name").value),param}function transformRequest(a){var c,b="";for(c in a)b+=encodeURIComponent(c)+"="+encodeURIComponent(a[c])+"&";return b}function Ajax(a,b){var c,d,e,f,g,h,i;b=b||{},c=b.data||"",d=b.username||"",e=b.password||"",f=b.async||!0,g=(b.method||"GET").toUpperCase(),h=function(){if(window.ActiveXObject)try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(a){try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(a){}}return window.XMLHttpRequest?new XMLHttpRequest:void 0},i=h(),i.withCredentials=!0;try{"GET"==g&&c&&(a+=(a.indexOf("?")>=0?"&":"?")+c,c=null),d?i.open(g,a,f,d,e):i.open(g,a,f),"POST"==g&&i.setRequestHeader("Content-type","application/json"),i.onreadystatechange=function(){4==i.readyState&&200==i.status&&b.success&&b.success(__parse(i.responseText))},i.send(__stringify(c))}catch(j){}return i}var base={},CLIENT_ID="",serverUrl=("https:"===window.location.protocol?"https":"http")+"://logapi.zhipin.com/dap/api/json",store={set:function(a,b){if(!localStorageSupport())return"";var c=localStorage.getItem("__local__analytics__")?__parse(localStorage.getItem("__local__analytics__")):{};c[a]=b,localStorage.setItem("__local__analytics__",__stringify(c))},get:function(a){if(!localStorageSupport())return"";var b=localStorage.getItem("__local__analytics__")?__parse(localStorage.getItem("__local__analytics__")):{};return b[a]||""}},__set=function(){},__data=function(a){base=__extend(base,a)},__send=function(a){var b=(new Date).getTime(),c={_reqid:b.toString(32)+Math.random(1e7).toString(16),_v:getVersion(),_ts:b,_topic:CLIENT_ID,app_name:base.platform,distinct_id:getCid(),events:[__extend({app_ver:base.version||"",type:a.ckk?"event":"page_view",event_no:0,event_ts:(new Date).getTime(),uuid:getSeoUUid(),resolution:getResolution(),platform:getPlatForm(),system:getSystem(),user_agent:getAgent(),rurl:getReferrerUrl(),rurl_host:getUrlHost(),rpk:"",rpck:"",landing_url:getLandingUrl(),landing_pk:"",first_referrer:getFirstReferrer(),vistor_idx:getVisitIdx(),ckk:"",ckk_detail:"",pk:getPk()},a)]};__post(serverUrl,{data:c,success:function(){}})},__stringify=function(){function b(b){return/["\\\x00-\x1f]/.test(b)&&(b=b.replace(/["\\\x00-\x1f]/g,function(b){var c=a[b];return c?c:(c=b.charCodeAt(),"\\u00"+Math.floor(c/16).toString(16)+(c%16).toString(16))})),'"'+b+'"'}function c(a){var d,e,f,b=["["],c=a.length;for(e=0;c>e;e++)switch(f=a[e],typeof f){case"undefined":case"function":case"unknown":break;default:d&&b.push(","),b.push(__stringify(f)),d=1}return b.push("]"),b.join("")}function d(a){return 10>a?"0"+a:a}function e(a){return'"'+a.getFullYear()+"-"+d(a.getMonth()+1)+"-"+d(a.getDate())+"T"+d(a.getHours())+":"+d(a.getMinutes())+":"+d(a.getSeconds())+'"'}if(JSON.stringify)return JSON.stringify;var a={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};return function(a){var g,h,d,f,i;switch(typeof a){case"undefined":return"undefined";case"number":return isFinite(a)?String(a):"null";case"string":return b(a);case"boolean":return String(a);default:if(null===a)return"null";if(a instanceof Array)return c(a);if(a instanceof Date)return e(a);d=["{"],f=__stringify;for(i in a)if(Object.prototype.hasOwnProperty.call(a,i))switch(h=a[i],typeof h){case"undefined":case"unknown":case"function":break;default:g&&d.push(","),g=1,d.push(f(i)+":"+f(h))}return d.push("}"),d.join("")}}}(),cookie={get:function(a){var b,c=new RegExp("(^| )"+a+"=([^;]*)(;|$)");return(b=document.cookie.match(c))?unescape(b[2]):null},add:function(a,b,c,d,e,f){var h,g=new Date;g.setTime(g.getTime()),c&&(c=24*60*60*1e3*c),h=new Date(g.getTime()+c),document.cookie=a+"="+escape(b)+(c?";expires="+h.toGMTString():"")+(d?";path="+d:"")+(e?";domain="+e:"")+(f?";secure":"")},set:function(a,b,c){if(c){var d=new Date;d.setMinutes(c),document.cookie=a+"="+encodeURIComponent(b)+";expires="+d.toGMTString()}else document.cookie=a+"="+encodeURIComponent(b)},clearcookie:function(a,b,c){cookie.get(a)&&(document.cookie=a+"="+(b?";path="+b:"")+(c?";domain="+c:"")+";expires=Thu,01-Jan-1970 00:00:01 GMT")}},__parse=function(){return function(str){return eval("("+str+")")}}(),init=function(a,b){CLIENT_ID=a,b.server_url?serverUrl=b.server_url:b.offline===!0&&(serverUrl="https:"===window.location.protocol?"https://192.168.1.66:7778/dap/api/json":"http://192.168.1.66:17778/dap/api/json"),b&&__data(b),document.getElementById("page_key_name")&&BossAnalytics.trackEvent({pk:document.getElementById("page_key_name").value})};return{init:init,set:__set,config:__data,trackEvent:__send}}();!function(){function a(a,b,c){try{a.addEventListener(b,c,!0)}catch(d){try{a.attachEvent("on"+b,c)}catch(d){a["on"+b]=c}}}var b=document.getElementsByTagName("body")[0];a(b,"click",function(a){for(var c,d,e,f,g,b=a.target||a.srcElement;b!==document&&b!==document.body&&b.getAttribute&&!b.getAttribute("bga")&&b.parentNode;)b=b.parentNode;if(b.getAttribute&&(c=b.getAttribute("bga"))){for(d=c.split("&"),e={},f=0;f<d.length;f++)g=d[f].split("="),g.length>1&&(e[g[0]]=g[1]);BossAnalytics.trackEvent(e)}})}();


BossAnalytics.init('1F0D92CA5184116D61CFF516E44544F2', {
    platform: 'PC',
    offline: window.location.href.indexOf('weizhipin.com') > 0
});

!function() {
    function a(a, b) {
        var c, d;
        b = b || "&",
        c = [];
        if (a['r']) {
            var source = decodeURIComponent(a['r']);
            // 再次检验来源值的有效性
            if (source.indexOf('security-check.html') > -1) {
                a['r'] = getSrcReferer(source);
            } else {
                a['r'] = source;
            }
            // 这是修复一个cookie里记录了__l中的r为空的情况，修复之后当遇到新的r，就会更新__l中的r，不过为了不影响数据验证，暂时不上线
            /*if (a['__l'] && !getQueryParams(a['__l']).r) {
                a['__l'] = source.replace(/r=/, 'r=' + a['r']);
            }*/
        }

        for (d in a) {
            c.push(encodeURIComponent(d) + "=" + encodeURIComponent(a[d]))
        }
        c.push('friend_source=' + friend_source);
        return c.join(b)
    }
    function getSrcReferer(str) {
        var tempStr = '';
        var lastSrcReferer = '';
        var tempArr = [];
        for (var i = 0; i < 5; i++) {
            tempStr = decodeURIComponent(str);
        }
        tempArr = tempStr.split('srcReferer=');
        lastSrcReferer = tempArr[tempArr.length - 1];
        return lastSrcReferer
    }
    function b(b, c) {
        var d, e, f = new Image,
        g = c.__a,
        h = Math.floor(c._ / 100);
        if (g && h) {
            for (g += h, e = d = 0; e < g.length; e++) {
                d += g.charCodeAt(e)
            }
            c._ = 100 * h + d % 100
        }
        f.src = v ? "https://" + w + b + "?" + a(c) : "http://" + w + b + "?" + a(c)
    }
    function c(a, b, c, e) {
       
        var f, g = ""; (location.hostname.indexOf(".zhipin.com") >= 0 || "zhipin.com" == location.hostname) && (e = "zhipin.com", d("__a"), d("__c"), d("__l")),
        c && (f = new Date, f.setTime(f.getTime() + 86400000 * c), g = "; expires=" + f.toGMTString()),
        c && e && d(a),
        a = a + "=" + b + g + "; path=/",
        e && (a += ";domain=" + e),
        document.cookie = a
    }
    function d(a) {
      
        var b = a + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;",
        c = ".kanzhun.com www.kanzhun.com .www.kanzhun.com bosszhipin.kanzhun.com .bosszhipin.kanzhun.com m.kanzhun.com .m.kanzhun.com t.kanzhun.com .t.kanzhun.com wx.kanzhun.com .wx.kanzhun.com t.bosszhipin.com .t.bosszhipin.com yushanapp.com zdzhushou.cc".split(" ");
        for (a = 0; a < c.length; a++) {
            document.cookie = b + "domain=" + c[a],
            document.cookie = b + "domain=" + c[a] + "; path=/"
        }
        document.cookie = b,
        document.cookie = b + "; path=/"
    }
    function e(a) {
        var b, c = a + "=",
        d = document.cookie.split(";");
        for (a = 0; a < d.length; a++) {
            for (b = d[a];
            " " == b.charAt(0);) {
                b = b.substring(1, b.length)
            }
            if (0 == b.indexOf(c)) {
                return b.substring(c.length, b.length)
            }
        }
        return null
    }
    function f(a) {
        if (0 == a.indexOf("http")) {
            var b = a.indexOf("/", 7);
            b > 0 && (a = a.substr(b))
        }
        return a
    }

    function getQueryParams(url) {

        var params = {};
    
        var query = url.split("?").length > 1 ? url.split("?")[1] : url;
    
        var group = query.split("&");
        for (var i = 0; i < group.length; i++) {
    
            var item = group[i].split("=");
    
            if (item.length > 1) {
    
                params[item[0]] = item[1];
            }

        }
    
        return params;
    }

    function g(a, b) {
        var c, d, g, h, i, j, k, o = [n, p, q, "t", "ab_t", "wt"], // n: __a, p: __l, q:__g
        r = {};
        for (c = 0; c < o.length; c++) {
            d = o[c],
            (g = e(d)) && (r[d] = g)
        }
        if (h = getReferrer(), h && location.hostname == l(h) && (h = f(h, location.hostname)), b ? r.e = (new Date).getTime() - m: window.performance && window.performance.timing && (i = window.performance.timing, i.fetchStart && (r.e = m - i.fetchStart)), r.r = h, r._ = Math.round((new Date).getTime() / 1000), j = "undefined" != typeof _PK ? _PK: document.getElementById("page_key_name") && document.getElementById("page_key_name").getAttribute("value"), j && (r.pk = j), a) {
            for (k in a) {
                r[k] = a[k]
            }
        }
        return r
    }

    function getReferrer () {
        
        var __referrer = document.referrer + '';
        var __location = window.location.href + '';
        var __r = __referrer;
        if (decodeURIComponent(__r).indexOf('srcReferer=') > -1) {
            var tempReferers = decodeURIComponent(__r).split('srcReferer=');
            var tempRefererLast = tempReferers[tempReferers.length - 1];
            __r = tempRefererLast;
        }


        /*if (__referrer && __referrer.indexOf('web/common/security-check.html') > -1 && getQueryParams(__referrer).srcReferer !== undefined) {
            __r = getQueryParams(__referrer).srcReferer;
        }*/

        return __r;
    }

    function getLocationUrl () {

        var __location = location.href + '';
        var __l = __location + '';

        if (getQueryParams(__location).callbackUrl && getQueryParams(__location).callbackUrl !== '') {

            __l = getQueryParams(__location).callbackUrl;
        }
        
        return __l;
    }

    function getLadingPage () {

        var a = getLocationUrl();

        if (0 == a.indexOf("http")) {
            var b = a.indexOf("/", 7);
            b > 0 && (a = a.substr(b))
        }
        return a
    }

    function h() {
        var b, d, g, h, i, j, k, l, m, s, u, v, w, x, y, z;
        if (!r) {
            if (r = !0, b = e(n), d = e(o), g = e(p), z = {},
            g) {
                for (0 === g.indexOf("%22") && (g = g.substr(3, g.length - 6)), g = g.split("&"), i = 0; i < g.length; i++) {
                    y = g[i].split("="),
                    2 == y.length && (z[decodeURIComponent(y[0])] = decodeURIComponent(y[1]))
                }
            }
            g = Math.round((new Date).getTime() / 1000),
            d && z.l || (z.l = getLadingPage(location.href)),
            d || (z.r = getReferrer()),
            d || (c(o, g), d = g + "");
            a: {
                for (y = window.location.search.substring(1).split("&"), i = 0; i < y.length; i++) {
                    if (h = y[i].split("="), 2 == h.length && "sid" == decodeURIComponent(h[0])) {
                        h = decodeURIComponent(h[1]);
                        break a
                    }
                }
                h = ""
            }
            i = !1,
            h ? (h !== e(q) && (i = !0), c(q, h), z.g = f(location.href)) : (h = e(q), h || (h = "-", c(q, h))),
            c(p, a(z, "&")),
            b && 8 == b.split(".").length ? (x = b.split("."), j = x[0], k = x[1], l = x[2], m = x[3], s = +x[4], u = +x[5], v = +x[6], w = +x[7], s += 1, m != d ? (l = m, m = d, u += 1, v = 1) : v += 1) : (j = Math.floor(100000000 * Math.random()), k = g, l = "", m = d, s = 1, u = 1, v = 1, w = 0),
            i && (w = 0),
            b = [j, k, l, m, s, u, v, w + 1].join("."),
            t ? location.hostname.indexOf("kanzhun.com") >= 0 ? c(n, b, 3650, ".kanzhun.com") : location.hostname.indexOf("dianzhangzhipin.com") >= 0 ? c(n, b, 3650, ".dianzhangzhipin.com") : location.hostname.indexOf("bosszhipin.com") >= 0 ? c(n, b, 3650, ".bosszhipin.com") : location.hostname.indexOf("zhipin.com") >= 0 ? c(n, b, 3650, ".zhipin.com") : c(n, b, 3650) : c(n, b, 3650)
        }
    }
    function i() {
        h(),
        b("/_.gif", g());

    }
    function j(a) {
        return a && 0 !== a.indexOf("javascript") ? a: ""
    }
    function k(a, c, d, e) {
        if (!a) {
            throw "event track's label params is required"
        }
        h(),
        a = {
            ca: a
        },
        (c = j(c)) && (a.p1 = c),
        (d = j(d)) && (a.p2 = d),
        (e = j(e)) && (a.p3 = e),
        e = g(a, !0),
        b("/e.gif", e)
    }
    function kk(a, c, d, e) {
        if (!a) {
            throw "event track's label params is required"
        }
        h(),
        a = {
            ca: a
        },
        (c = j(c)) && (a.p1 = c),
        (d = j(d)) && (a.p2 = d),
        (e = j(e)) && (a.p3 = e),
        e = g(a, !0),
        b("/f.gif", e)
    }
    var l, m, n, o, p, q, r, s, t = 0 <= location.hostname.indexOf("kanzhun.com") || 0 <= location.hostname.indexOf("bosszhipin") || 0 <= location.hostname.indexOf("nnhfg.com") || 0 <= location.hostname.indexOf(".zhipin.com") || 0 <= location.hostname.indexOf("dianzhangzhipin") || 0 <= location.hostname.indexOf("qqchx.com") || 0 <= location.hostname.indexOf("yushanapp.com") || 0 <= location.hostname.indexOf("zdzhushou.cc"),
    u = location.hostname.toLowerCase(),
    v = !1,
    w = "";
    0 <= u.indexOf("bosszhipin") || 0 <= u.indexOf("weizhipin") || 0 <= u.indexOf(".zhipin") || 0 <= u.indexOf(".yushanapp") || 0 <= u.indexOf(".zdzhushou") || 0 <= u.indexOf(".wordhr") ? (v = !0, w = t ? "t.zhipin.com": "t.weizhipin.com") : w = t ? "t.kanzhun.com": "192.168.1.251",
    l = function() {
        var a = document.createElement("a");
        return function(b) {
            return b ? (a.href = b, a.hostname) : ""
        }
    } (),
    m = (new Date).getTime(),
    n = "__a",
    o = "__c",
    p = "__l",
    q = "__g",
    r = !1,
    friend_source = 0,
    window._T,
    window._T = {
        config: function(a) {
            a = a || {},
            w = a.domain || w
        },
        sendPageView: i,
        sendEvent: k,
        sendTracking: kk,
        setFriendSource: function (src) {

            friend_source = src
        }
    },
    i(),
    function() {
        var a, b, c = document.getElementsByTagName("impression");
        if (c.length) {
            for (a = [], b = 0; b < c.length;) {
                a.push(c[b].getAttribute("value")),
                b += 1
            }
            1 == a.length ? k("impression", a[0]) : 2 == a.length ? k("impression", a[0], a[1]) : 3 == a.length && k("impression", a[0], a[1], a[2])
        }
    } (),
    window.onerror = function(a, b, c, d, e) {
        return "Script error." == a || b ? (setTimeout(function() {
            var a, f, g, h;
            if (d = d || window.event && window.event.errorCharacter || 0, h = d, e && e.stack) {
                a = e.stack.toString()
            } else {
                if (arguments.callee) {
                    for (a = [], f = arguments.callee.caller, g = 3; f && 0 < --g && (a.push(f.toString()), f !== f.caller);) {
                        f = f.caller
                    }
                    a = a.join(",")
                }
            }
            kk("errorjs", b + ":" + c + ":" + h, a)
        },
        0), void 0) : !0
    },
    t && (s = e("t"), s && location.hostname && 0 <= location.hostname.indexOf("kanzhun.com") && (d("t"), c("t", s, 3650)))
} (); (function(win) {
    win.upp = function(url) {
        this._url = url;
        this._init()
    };
    upp.prototype = {
        _init: function() {
            var addressPair = this._url.split("?"),
            i = 0,
            keypairs = [];
            this.host = addressPair[0];
            this._params = {};
            if (addressPair.length > 1) {
                keypairs = addressPair[1].split("&");
                for (; i < keypairs.length; i++) {
                    var keypair = keypairs[i].split("=");
                    this.add(keypair[0], keypair[1])
                }
            }
        },
        add: function(_key, _value) {
            this._params[_key] = _value;
            return this
        },
        remove: function(key) {
            delete this._params[key];
            return this
        },
        contains: function(key, value) {
            return this._params[key] !== undefined
        },
        update: function(key, value) {
            this._params[key] = value
        },
        get: function(key) {
            return this._params[key]
        },
        all: function() {
            return this._params
        },
        url: function() {
            var queryStrings = [];
            for (var key in this._params) {
                queryStrings.push(key + "=" + this._params[key])
            }
            return this.host + (queryStrings.length > 0 ? "?": "") + queryStrings.join("&")
        }
    }
})(window);
(function() {
    if (window._T) {
        var _body = document.getElementsByTagName("body")[0], addEvent = function(obj, type, fn) {
            if (obj.addEventListener) obj.addEventListener(type, fn, false); else if (obj.attachEvent) {
                //保存指针 供removeEvent时使用
                obj["e" + type + fn] = fn;
                obj.attachEvent("on" + type, function() {
                    obj["e" + type + fn].call(obj, window.event);
                });
            }
        };
        if (_body) {
            addEvent(_body, "click", function(e) {
                var target = e.target || e.srcElement;
                while (target !== document && target !== document.body && target.getAttribute && !target.getAttribute("ka") && target.parentNode) {
                    target = target.parentNode;
                }
                if (!target.getAttribute) return;
                var k = target.getAttribute("ka");
                if (k) {
                    var p = target.getAttribute("href") || "";
                    if (p && p.indexOf("#") !== 0 && p.indexOf("javascript:;") === -1 && !target.getAttribute("noa")) {
                        var u = new window.upp(p);
                        //加白名单判断--start
                        var whiteLlist = [ "bosszhipin.com", "kanzhun.com", "weizhipin.com","zhipin.com" ];
                        var len = whiteLlist.length;
                        var flag = false;
                        if (p.indexOf("http://") >= 0 || p.indexOf("https://") >= 0) {
                            for (var i = 0; i < len; i++) {
                                if (p.indexOf(whiteLlist[i]) >= 0) {
                                    flag = true;
                                    break;
                                }
                            }
                        } else {
                            flag = true;
                        }
                        if (flag) {
                            u.add("ka", encodeURIComponent(k));
                            if (!target.getAttribute("xieyi") == "") {
                                target.setAttribute("href", u.url() + "#" + target.getAttribute("xieyi"));
                            } else if(p.indexOf("tel:") == -1 && p.indexOf("mailto:") == -1) {//排除tel和mailto
                                target.setAttribute("href", u.url());
                            }
                        }
                    }
                    _T.sendEvent(k, p);
                }
            });
        }
    }
    if (typeof $ != "undefined") {
        $("[iska]").each(function(index, element) {
            var T = $(this);
            T.click(function(e) {
                $("<i ka=" + T.attr("ka") + " style='display:none'></i>").appendTo("body").click().delay(200).remove();
                e.stopPropagation();
            });
        });
    }
})();

