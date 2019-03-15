/*
    获取浏览器信息。
*/
var BrowserInfo = {
    userAgent: navigator.userAgent.toLowerCase(),
    isAndroid: Boolean(navigator.userAgent.match(/android/ig)),
    isIphone: Boolean(navigator.userAgent.match(/iphone|ipod/ig)),
    isIpad: Boolean(navigator.userAgent.match(/ipad/ig)),
    isWeixin: Boolean(navigator.userAgent.match(/MicroMessenger/ig)),
}

/*
    获取字符串字节数。
*/
function strLength( str) {
    var len = 0;
    for(var i=0; i<str.length; i++) {
        if(str.charCodeAt(i) > 255) {
            len += 2;
        } else {
            len++;
        }
    }
    return len;
}

/*
    获取浏览器的js版本。
*/
function getjsversion() {
    var n = navigator;
    var u = n.userAgent;
    var apn = n.appName;
    var v = n.appVersion;
    var ie = v.indexOf('MSIE ');
    if (ie > 0) {
        apv = parseInt(i = v.substring(ie + 5));
        if (apv > 3) {
            apv = parseFloat(i);
        }
    } else {
        apv = parseFloat(v);
    }
    var isie = (apn == 'Microsoft Internet Explorer');
    var ismac = (u.indexOf('Mac') >= 0);
    var javascriptVersion = "1.0";
    if (String && String.prototype) {
        javascriptVersion = '1.1';
        if (javascriptVersion.match) {
            javascriptVersion = '1.2';
            var tm = new Date;
            if (tm.setUTCDate) {
                javascriptVersion = '1.3';
                if (isie && ismac && apv >= 5) javascriptVersion = '1.4';
                var pn = 0;
                if (pn.toPrecision) {
                    javascriptVersion = '1.5';
                    a = new Array;
                    if (a.forEach) {
                        javascriptVersion = '1.6';
                        i = 0;
                        o = new Object;
                        tcf = new Function('o', 'var e,i=0;try{i=new Iterator(o)}catch(e){}return i');
                        i = tcf(o);
                        if (i && i.next) {
                            javascriptVersion = '1.7';
                        }
                    }
                }
            }
        }
    }
    return javascriptVersion;
}