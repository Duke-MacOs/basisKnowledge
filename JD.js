/* jdf-1.0.0/ base.js Date:2017-12-19 10:41:04 */
if (!function(a, b) {
    function c(a) {
        return function(b) {
            return {}.toString.call(b) == "[object " + a + "]"
        }
    }
    function d() {
        return A++
    }
    function e(a) {
        return a.match(D)[0]
    }
    function f(a) {
        for (a = a.replace(E, "/"); a.match(F); )
            a = a.replace(F, "/");
        return a = a.replace(G, "$1/")
    }
    function g(a) {
        var b = a.length - 1
          , c = a.charAt(b);
        return "#" === c ? a.substring(0, b) : ".js" === a.substring(b - 2) || a.indexOf("?") > 0 || ".css" === a.substring(b - 3) || "/" === c ? a : a + ".js"
    }
    function h(a) {
        var b = v.alias;
        return b && x(b[a]) ? b[a] : a
    }
    function i(a) {
        var c, b = v.paths;
        return b && (c = a.match(H)) && x(b[c[1]]) && (a = b[c[1]] + c[2]),
        a
    }
    function j(a) {
        var b = v.vars;
        return b && a.indexOf("{") > -1 && (a = a.replace(I, function(a, c) {
            return x(b[c]) ? b[c] : a
        })),
        a
    }
    function k(a) {
        var b = v.map
          , c = a;
        if (b)
            for (var d = 0, e = b.length; e > d; d++) {
                var f = b[d];
                if (c = z(f) ? f(a) || a : a.replace(f[0], f[1]),
                c !== a)
                    break
            }
        return c
    }
    function l(a, b) {
        var c, d = a.charAt(0);
        if (J.test(a))
            c = a;
        else if ("." === d)
            c = f((b ? e(b) : v.cwd) + a);
        else if ("/" === d) {
            var g = v.cwd.match(K);
            c = g ? g[0] + a.substring(1) : a
        } else
            c = v.base + a;
        return 0 === c.indexOf("//") && (c = ("https:" == location.protocol ? "https:" : "http:") + c),
        c
    }
    function m(a, b) {
        if (!a)
            return "";
        a = h(a),
        a = i(a),
        a = j(a),
        a = g(a);
        var c = l(a, b);
        return c = k(c)
    }
    function n(a) {
        return a.hasAttribute ? a.src : a.getAttribute("src", 4)
    }
    function o(a, b, c) {
        var d = S.test(a)
          , e = L.createElement(d ? "link" : "script");
        if (c) {
            var f = z(c) ? c(a) : c;
            f && (e.charset = f)
        }
        p(e, b, d, a),
        d ? (e.rel = "stylesheet",
        e.href = a) : (e.async = !0,
        e.src = a),
        T = e,
        R ? Q.insertBefore(e, R) : Q.appendChild(e),
        T = null
    }
    function p(a, c, d, e) {
        function f() {
            a.onload = a.onerror = a.onreadystatechange = null,
            d || v.debug || Q.removeChild(a),
            a = null,
            c()
        }
        var g = "onload"in a;
        return !d || !V && g ? (g ? (a.onload = f,
        a.onerror = function() {
            C("error", {
                uri: e,
                node: a
            }),
            f()
        }
        ) : a.onreadystatechange = function() {
            /loaded|complete/.test(a.readyState) && f()
        }
        ,
        b) : (setTimeout(function() {
            q(a, c)
        }, 1),
        b)
    }
    function q(a, b) {
        var d, c = a.sheet;
        if (V)
            c && (d = !0);
        else if (c)
            try {
                c.cssRules && (d = !0)
            } catch (e) {
                "NS_ERROR_DOM_SECURITY_ERR" === e.name && (d = !0)
            }
        setTimeout(function() {
            d ? b() : q(a, b)
        }, 20)
    }
    function r() {
        if (T)
            return T;
        if (U && "interactive" === U.readyState)
            return U;
        for (var a = Q.getElementsByTagName("script"), b = a.length - 1; b >= 0; b--) {
            var c = a[b];
            if ("interactive" === c.readyState)
                return U = c
        }
    }
    function s(a) {
        var b = [];
        return a.replace(X, "").replace(W, function(a, c, d) {
            d && b.push(d)
        }),
        b
    }
    function t(a, b) {
        this.uri = a,
        this.dependencies = b || [],
        this.exports = null,
        this.status = 0,
        this._waitings = {},
        this._remain = 0
    }
    if (!a.seajs) {
        var u = a.seajs = {
            version: "2.2.0"
        }
          , v = u.data = {}
          , w = c("Object")
          , x = c("String")
          , y = Array.isArray || c("Array")
          , z = c("Function")
          , A = 0
          , B = v.events = {};
        u.on = function(a, b) {
            var c = B[a] || (B[a] = []);
            return c.push(b),
            u
        }
        ,
        u.off = function(a, b) {
            if (!a && !b)
                return B = v.events = {},
                u;
            var c = B[a];
            if (c)
                if (b)
                    for (var d = c.length - 1; d >= 0; d--)
                        c[d] === b && c.splice(d, 1);
                else
                    delete B[a];
            return u
        }
        ;
        var C = u.emit = function(a, b) {
            var d, c = B[a];
            if (c)
                for (c = c.slice(); d = c.shift(); )
                    d(b);
            return u
        }
          , D = /[^?#]*\//
          , E = /\/\.\//g
          , F = /\/[^/]+\/\.\.\//
          , G = /([^:/])\/\//g
          , H = /^([^/:]+)(\/.+)$/
          , I = /{([^{]+)}/g
          , J = /^\/\/.|:\//
          , K = /^.*?\/\/.*?\//
          , L = document
          , M = e(L.URL)
          , N = L.scripts
          , O = L.getElementById("seajsnode") || N[N.length - 1]
          , P = e(n(O) || M);
        u.resolve = m;
        var T, U, Q = L.getElementsByTagName("head")[0] || L.documentElement, R = Q.getElementsByTagName("base")[0], S = /\.css(?:\?|$)/i, V = +navigator.userAgent.replace(/.*AppleWebKit\/(\d+)\..*/, "$1") < 536;
        u.request = o;
        var Z, W = /"(?:\\"|[^"])*"|'(?:\\'|[^'])*'|\/\*[\S\s]*?\*\/|\/(?:\\\/|[^\/\r\n])+\/(?=[^\/])|\/\/.*|\.\s*require|(?:^|[^$])\brequire\s*\(\s*(["'])(.+?)\1\s*\)/g, X = /\\\\/g, Y = u.cache = {}, $ = {}, _ = {}, ab = {}, bb = t.STATUS = {
            FETCHING: 1,
            SAVED: 2,
            LOADING: 3,
            LOADED: 4,
            EXECUTING: 5,
            EXECUTED: 6
        };
        t.prototype.resolve = function() {
            for (var a = this, b = a.dependencies, c = [], d = 0, e = b.length; e > d; d++)
                c[d] = t.resolve(b[d], a.uri);
            return c
        }
        ,
        t.prototype.load = function() {
            var a = this;
            if (!(a.status >= bb.LOADING)) {
                a.status = bb.LOADING;
                var c = a.resolve();
                C("load", c);
                for (var e, d = a._remain = c.length, f = 0; d > f; f++)
                    e = t.get(c[f]),
                    e.status < bb.LOADED ? e._waitings[a.uri] = (e._waitings[a.uri] || 0) + 1 : a._remain--;
                if (0 === a._remain)
                    return a.onload(),
                    b;
                var g = {};
                for (f = 0; d > f; f++)
                    e = Y[c[f]],
                    e.status < bb.FETCHING ? e.fetch(g) : e.status === bb.SAVED && e.load();
                for (var h in g)
                    g.hasOwnProperty(h) && g[h]()
            }
        }
        ,
        t.prototype.onload = function() {
            var a = this;
            a.status = bb.LOADED,
            a.callback && a.callback();
            var c, d, b = a._waitings;
            for (c in b)
                b.hasOwnProperty(c) && (d = Y[c],
                d._remain -= b[c],
                0 === d._remain && d.onload());
            delete a._waitings,
            delete a._remain
        }
        ,
        t.prototype.fetch = function(a) {
            function c() {
                u.request(g.requestUri, g.onRequest, g.charset)
            }
            function d() {
                delete $[h],
                _[h] = !0,
                Z && (t.save(f, Z),
                Z = null);
                var a, b = ab[h];
                for (delete ab[h]; a = b.shift(); )
                    a.load()
            }
            var e = this
              , f = e.uri;
            e.status = bb.FETCHING;
            var g = {
                uri: f
            };
            C("fetch", g);
            var h = g.requestUri || f;
            return !h || _[h] ? (e.load(),
            b) : $[h] ? (ab[h].push(e),
            b) : ($[h] = !0,
            ab[h] = [e],
            C("request", g = {
                uri: f,
                requestUri: h,
                onRequest: d,
                charset: v.charset
            }),
            g.requested || (a ? a[g.requestUri] = c : c()),
            b)
        }
        ,
        t.prototype.exec = function() {
            function a(b) {
                return t.get(a.resolve(b)).exec()
            }
            var c = this;
            if (c.status >= bb.EXECUTING)
                return c.exports;
            c.status = bb.EXECUTING;
            var e = c.uri;
            a.resolve = function(a) {
                return t.resolve(a, e)
            }
            ,
            a.async = function(b, c) {
                return t.use(b, c, e + "_async_" + d()),
                a
            }
            ;
            var f = c.factory
              , g = z(f) ? f(a, c.exports = {}, c) : f;
            return g === b && (g = c.exports),
            delete c.factory,
            c.exports = g,
            c.status = bb.EXECUTED,
            C("exec", c),
            g
        }
        ,
        t.resolve = function(a, b) {
            var c = {
                id: a,
                refUri: b
            };
            return C("resolve", c),
            c.uri || u.resolve(c.id, b)
        }
        ,
        t.define = function(a, c, d) {
            var e = arguments.length;
            1 === e ? (d = a,
            a = b) : 2 === e && (d = c,
            y(a) ? (c = a,
            a = b) : c = b),
            !y(c) && z(d) && (c = s("" + d));
            var f = {
                id: a,
                uri: t.resolve(a),
                deps: c,
                factory: d
            };
            if (!f.uri && L.attachEvent) {
                var g = r();
                g && (f.uri = g.src)
            }
            C("define", f),
            f.uri ? t.save(f.uri, f) : Z = f
        }
        ,
        t.save = function(a, b) {
            var c = t.get(a);
            c.status < bb.SAVED && (c.id = b.id || a,
            c.dependencies = b.deps || [],
            c.factory = b.factory,
            c.status = bb.SAVED)
        }
        ,
        t.get = function(a, b) {
            return Y[a] || (Y[a] = new t(a,b))
        }
        ,
        t.use = function(b, c, d) {
            var e = t.get(d, y(b) ? b : [b]);
            e.callback = function() {
                for (var b = [], d = e.resolve(), f = 0, g = d.length; g > f; f++)
                    b[f] = Y[d[f]].exec();
                c && c.apply(a, b),
                delete e.callback
            }
            ,
            e.load()
        }
        ,
        t.preload = function(a) {
            var b = v.preload
              , c = b.length;
            c ? t.use(b, function() {
                b.splice(0, c),
                t.preload(a)
            }, v.cwd + "_preload_" + d()) : a()
        }
        ,
        u.use = function(a, b) {
            return t.preload(function() {
                t.use(a, b, v.cwd + "_use_" + d())
            }),
            u
        }
        ,
        t.define.cmd = {},
        a.define = t.define,
        u.Module = t,
        v.fetchedList = _,
        v.cid = d,
        u.require = function(a) {
            var b = t.get(t.resolve(a));
            return b.status < bb.EXECUTING && b.exec(),
            b.exports
        }
        ;
        var cb = /^(.+?\/)(\?\?)?(seajs\/)+/;
        v.base = (P.match(cb) || ["", P])[1],
        v.dir = P,
        v.cwd = M,
        v.charset = "utf-8",
        v.preload = function() {
            var a = []
              , b = location.search.replace(/(seajs-\w+)(&|$)/g, "$1=1$2");
            return b += " " + L.cookie,
            b.replace(/(seajs-\w+)=1/g, function(b, c) {
                a.push(c)
            }),
            a
        }(),
        u.config = function(a) {
            for (var b in a) {
                var c = a[b]
                  , d = v[b];
                if (d && w(d))
                    for (var e in c)
                        d[e] = c[e];
                else
                    y(d) ? c = d.concat(c) : "base" === b && ("/" !== c.slice(-1) && (c += "/"),
                    c = l(c)),
                    v[b] = c
            }
            return C("config", a),
            u
        }
    }
}(this),
!function() {
    function a(a) {
        var b = a.length;
        if (!(2 > b)) {
            q.comboSyntax && (s = q.comboSyntax),
            q.comboMaxLength && (t = q.comboMaxLength),
            n = q.comboExcludes;
            for (var d = [], e = 0; b > e; e++) {
                var f = a[e];
                if (!r[f]) {
                    var h = o.get(f);
                    h.status < p && !l(f) && !m(f) && d.push(f)
                }
            }
            d.length > 1 && g(c(d))
        }
    }
    function b(a) {
        a.requestUri = r[a.uri] || a.uri
    }
    function c(a) {
        return e(d(a))
    }
    function d(a) {
        for (var b = {
            __KEYS: []
        }, c = 0, d = a.length; d > c; c++)
            for (var e = a[c].replace("://", "__").split("/"), f = b, g = 0, h = e.length; h > g; g++) {
                var i = e[g];
                f[i] || (f[i] = {
                    __KEYS: []
                },
                f.__KEYS.push(i)),
                f = f[i]
            }
        return b
    }
    function e(a) {
        for (var b = [], c = a.__KEYS, d = 0, e = c.length; e > d; d++) {
            for (var g = c[d], h = g, i = a[g], j = i.__KEYS; 1 === j.length; )
                h += "/" + j[0],
                i = i[j[0]],
                j = i.__KEYS;
            j.length && b.push([h.replace("__", "://"), f(i)])
        }
        return b
    }
    function f(a) {
        for (var b = [], c = a.__KEYS, d = 0, e = c.length; e > d; d++) {
            var g = c[d]
              , h = f(a[g])
              , i = h.length;
            if (i)
                for (var j = 0; i > j; j++)
                    b.push(g + "/" + h[j]);
            else
                b.push(g)
        }
        return b
    }
    function g(a) {
        for (var b = 0, c = a.length; c > b; b++)
            for (var d = a[b], e = d[0] + "/", f = j(d[1]), g = 0, i = f.length; i > g; g++)
                h(e, f[g]);
        return r
    }
    function h(a, b) {
        var c = a + s[0] + b.join(s[1])
          , d = c.length > t;
        if (b.length > 1 && d) {
            var e = i(b, t - (a + s[0]).length);
            h(a, e[0]),
            h(a, e[1])
        } else {
            if (d)
                throw new Error("The combo url is too long: " + c);
            for (var f = 0, g = b.length; g > f; f++)
                r[a + b[f]] = c
        }
    }
    function i(a, b) {
        for (var c = s[1], d = a[0], e = 1, f = a.length; f > e; e++)
            if (d += c + a[e],
            d.length > b)
                return [a.splice(0, e), a]
    }
    function j(a) {
        for (var b = [], c = {}, d = 0, e = a.length; e > d; d++) {
            var f = a[d]
              , g = k(f);
            g && (c[g] || (c[g] = [])).push(f)
        }
        for (var h in c)
            c.hasOwnProperty(h) && b.push(c[h]);
        return b
    }
    function k(a) {
        var b = a.lastIndexOf(".");
        return b >= 0 ? a.substring(b) : ""
    }
    function l(a) {
        return n ? n.test ? n.test(a) : n(a) : void 0
    }
    function m(a) {
        var b = q.comboSyntax || ["??", ","]
          , c = b[0]
          , d = b[1];
        return c && a.indexOf(c) > 0 || d && a.indexOf(d) > 0
    }
    var n, o = seajs.Module, p = o.STATUS.FETCHING, q = seajs.data, r = q.comboHash = {}, s = ["??", ","], t = 2e3;
    if (seajs.on("load", a),
    seajs.on("fetch", b),
    q.test) {
        var u = seajs.test || (seajs.test = {});
        u.uris2paths = c,
        u.paths2hash = g
    }
    define("seajs/seajs-combo/1.0.1/seajs-combo", [], {})
}(),
window.pageConfig = window.pageConfig || {},
"undefined" == typeof pageConfig.autoConfig && (pageConfig.autoConfig = !0),
"undefined" == typeof pageConfig.preload && (pageConfig.preload = !0),
pageConfig.jdfVersion || (pageConfig.jdfVersion = "1.0.0"),
pageConfig.jdfBaseUri || (pageConfig.jdfBaseUri = ("https:" == document.location.protocol ? "https://" : "http://") + "misc.360buyimg.com/"),
pageConfig.autoConfig) {
    var preloadArray = pageConfig.preload ? [pageConfig.jdfBaseUri + "jdf/" + pageConfig.jdfVersion + "/ui/ui/1.0.0/ui.js"] : [];
    var seajsConfig = {
        base: pageConfig.jdfBaseUri,
        alias: {
            "home/widget/mobile_pop": "//nfa.jd.com/loadFa.action?aid=0_0_8762"
        },
        map: [],
        preload: preloadArray,
        debug: 0
    };
    ("localhost" == location.hostname || /isdebug=.*\-1(\D|$)/.test(location.search)) && (seajsConfig.comboExcludes = /.*/),
    seajs.config(seajsConfig)
}
if (pageConfig.wideVersion = function() {
    return /isdebug=.*\-2(\D|$)/.test(location.search) ? !1 : /isdebug=.*\-3(\D|$)/.test(location.search) ? !0 : screen.width >= 1210 && pageConfig.compatible
}(),
pageConfig.wideVersion ? document.getElementsByTagName("html")[0].className = pageConfig.gridWideClass ? pageConfig.gridWideClass : "root61" : "string" == typeof pageConfig.gridNarClass && (document.getElementsByTagName("html")[0].className = pageConfig.gridNarClass),
function() {
    var a = "";
    !pageConfig.jd_mac && navigator.userAgent.indexOf("Macintosh") > -1 && (pageConfig.jd_mac = !0,
    a += " jd_mac"),
    !pageConfig.jd_retina && window.devicePixelRatio && window.devicePixelRatio > 1 && (pageConfig.jd_retina = window.devicePixelRatio,
    a += " jd_retina"),
    document.getElementsByTagName("html")[0].className += a
}(),
pageConfig.FN_getDomain = function() {
    var a = location.hostname;
    var b = "jd.com";
    return /\byiyaojd.com\b/.test(a) ? b = "yiyaojd.com" : /jd.com/.test(a) ? b = "jd.com" : /jd360.hk/.test(a) ? b = "jd360.hk" : /jd.hk/.test(a) ? b = "jd.hk" : /360buy.com/.test(a) && (b = "360buy.com"),
    b
}
,
/jd\.com|360buy\.com|jd\.hk|jd360\.hk/.test(location.hostname))
    try {
        document.domain = pageConfig.FN_getDomain()
    } catch (e) {}
pageConfig.FN_GetImageDomain = function(a) {
    var b, a = String(a);
    switch (a.match(/(\d)$/)[1] % 5) {
    case 0:
        b = 10;
        break;
    case 1:
        b = 11;
        break;
    case 2:
        b = 12;
        break;
    case 3:
        b = 13;
        break;
    case 4:
        b = 14;
        break;
    default:
        b = 10
    }
    return "//img{0}.360buyimg.com/".replace("{0}", b)
}
,
pageConfig.FN_ImgError = function(a) {
    var b = a.getElementsByTagName("img");
    for (var c = 0; c < b.length; c++)
        b[c].onerror = function() {
            var a = ""
              , b = this.getAttribute("data-img");
            if (b) {
                switch (b) {
                case "1":
                    a = "err-product";
                    break;
                case "2":
                    a = "err-poster";
                    break;
                case "3":
                    a = "err-price";
                    break;
                default:
                    return
                }
                this.src = "//misc.360buyimg.com/lib/img/e/blank.gif",
                this.className = a
            }
        }
}
,
pageConfig.FN_GetRandomData = function(a) {
    var d, b = 0, c = 0, e = [];
    for (var f = 0; f < a.length; f++)
        d = a[f].weight ? parseInt(a[f].weight) : 1,
        e[f] = [],
        e[f].push(b),
        b += d,
        e[f].push(b);
    c = Math.ceil(b * Math.random());
    for (var f = 0; f < e.length; f++)
        if (c > e[f][0] && c <= e[f][1])
            return a[f]
}
;
var login = function() {
    return location.href = "https://passport.jd.com/new/login.aspx?ReturnUrl=" + escape(location.href).replace(/\//g, "%2F"),
    !1
};
var regist = function() {
    return location.href = "https://reg.jd.com/reg/person?ReturnUrl=" + escape(location.href),
    !1
};
var createCookie = function(a, b, c, d) {
    var d = d ? d : "/";
    if (c) {
        var e = new Date;
        e.setTime(e.getTime() + 24 * c * 60 * 60 * 1e3);
        var f = "; expires=" + e.toGMTString()
    } else
        var f = "";
    document.cookie = a + "=" + b + f + "; path=" + d
};
var readCookie = function(a) {
    var b = a + "=";
    var c = document.cookie.split(";");
    for (var d = 0; d < c.length; d++) {
        var e = c[d];
        for (; " " == e.charAt(0); )
            e = e.substring(1, e.length);
        if (0 == e.indexOf(b))
            return e.substring(b.length, e.length)
    }
    return null
};
var addToFavorite = function() {
    var a = "//www.jd.com/";
    var b = "\u4eac\u4e1cJD.COM-\u7f51\u8d2d\u4e0a\u4eac\u4e1c\uff0c\u7701\u94b1\u53c8\u653e\u5fc3";
    document.all ? window.external.AddFavorite(a, b) : window.sidebar && window.sidebar.addPanel ? window.sidebar.addPanel(b, a, "") : alert("\u5bf9\u4e0d\u8d77\uff0c\u60a8\u7684\u6d4f\u89c8\u5668\u4e0d\u652f\u6301\u6b64\u64cd\u4f5c!\n\u8bf7\u60a8\u4f7f\u7528\u83dc\u5355\u680f\u6216Ctrl+D\u6536\u85cf\u672c\u7ad9\u3002"),
    createCookie("_fv", "1", 30, "/;domain=jd.com")
};
pageConfig.getHashProbability = function(a, b) {
    var c = function(a) {
        for (var b = 0, c = 0; c < a.length; c++)
            b = (b << 5) - b + a.charCodeAt(c),
            b &= b;
        return b
    };
    return Math.abs(c(a)) % b
}
,
/isdebug=.*\-1(\D|$)/.test(location.search) && !function() {
    function a() {
        var a = document.getElementsByTagName("link");
        var b = null
          , c = null;
        for (var d = 0; d < a.length; d++) {
            var e = a[d];
            if (e) {
                var f = e.getAttribute("href");
                if (f) {
                    var g = f.indexOf("??");
                    var h = [];
                    var i = "";
                    if (-1 != g && (c = document.createDocumentFragment(),
                    h = f.substring(g + 2).split(","),
                    i = f.substring(0, g),
                    h.length)) {
                        for (var j = 0, k = h.length; k > j; j++)
                            h[j].replace(/ /g) && (b = document.createElement("link"),
                            b.type = "text/css",
                            b.rel = "stylesheet",
                            b.href = i + h[j],
                            c.appendChild(b),
                            d++);
                        e.parentNode.insertBefore(c, e),
                        e.parentNode.removeChild(e),
                        d--
                    }
                }
            }
        }
    }
    var b = setInterval(function() {
        document.body && (clearInterval(b),
        a())
    }, 10)
}(),
pageConfig.insertStyles = function(a) {
    var b = document
      , c = b.getElementsByTagName("head")
      , d = b.createElement("style")
      , e = b.createElement("link");
    if (/\.css$/.test(a))
        e.rel = "stylesheet",
        e.type = "text/css",
        e.href = a,
        c.length ? c[0].appendChild(e) : b.documentElement.appendChild(e);
    else {
        if (d.setAttribute("type", "text/css"),
        d.styleSheet)
            d.styleSheet.cssText = a;
        else {
            var f = b.createTextNode(a);
            d.appendChild(f)
        }
        c.length && c[0].appendChild(d)
    }
}
,
function() {
    function a() {
        if ("undefined" == typeof getJdEid) {
            var a = document.createElement("script");
            a.src = "//payrisk.jd.com/js/td.js",
            document.body.appendChild(a)
        }
    }
    window.addEventListener ? window.addEventListener("load", function() {
        a()
    }, !1) : window.attachEvent("load", function() {
        a()
    })
}();
/* jdf- jquery-1.6.4.js Date:2014-03-20 17:05:52 */
!function(a, b) {
    function k(a, c, d) {
        if (d === b && 1 === a.nodeType) {
            var e = "data-" + c.replace(j, "-$1").toLowerCase();
            if (d = a.getAttribute(e),
            "string" == typeof d) {
                try {
                    d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null : f.isNaN(d) ? i.test(d) ? f.parseJSON(d) : d : parseFloat(d)
                } catch (g) {}
                f.data(a, c, d)
            } else
                d = b
        }
        return d
    }
    function l(a) {
        for (var b in a)
            if ("toJSON" !== b)
                return !1;
        return !0
    }
    function m(a, c, d) {
        var e = c + "defer"
          , g = c + "queue"
          , h = c + "mark"
          , i = f.data(a, e, b, !0);
        !i || "queue" !== d && f.data(a, g, b, !0) || "mark" !== d && f.data(a, h, b, !0) || setTimeout(function() {
            f.data(a, g, b, !0) || f.data(a, h, b, !0) || (f.removeData(a, e, !0),
            i.resolve())
        }, 0)
    }
    function C() {
        return !1
    }
    function D() {
        return !0
    }
    function J(a, c, d) {
        var e = f.extend({}, d[0]);
        e.type = a,
        e.originalEvent = {},
        e.liveFired = b,
        f.event.handle.call(c, e),
        e.isDefaultPrevented() && d[0].preventDefault()
    }
    function L(a) {
        var b, c, d, e, g, h, i, j, k, m, n, o, p = [], q = [], r = f._data(this, "events");
        if (a.liveFired !== this && r && r.live && !a.target.disabled && (!a.button || "click" !== a.type)) {
            a.namespace && (n = new RegExp("(^|\\.)" + a.namespace.split(".").join("\\.(?:.*\\.)?") + "(\\.|$)")),
            a.liveFired = this;
            var s = r.live.slice(0);
            for (i = 0; i < s.length; i++)
                g = s[i],
                g.origType.replace(w, "") === a.type ? q.push(g.selector) : s.splice(i--, 1);
            for (e = f(a.target).closest(q, a.currentTarget),
            j = 0,
            k = e.length; k > j; j++)
                for (m = e[j],
                i = 0; i < s.length; i++)
                    g = s[i],
                    m.selector !== g.selector || n && !n.test(g.namespace) || m.elem.disabled || (h = m.elem,
                    d = null,
                    ("mouseenter" === g.preType || "mouseleave" === g.preType) && (a.type = g.preType,
                    d = f(a.relatedTarget).closest(g.selector)[0],
                    d && f.contains(h, d) && (d = h)),
                    d && d === h || p.push({
                        "elem": h,
                        "handleObj": g,
                        "level": m.level
                    }));
            for (j = 0,
            k = p.length; k > j && (e = p[j],
            !(c && e.level > c)) && (a.currentTarget = e.elem,
            a.data = e.handleObj.data,
            a.handleObj = e.handleObj,
            o = e.handleObj.origHandler.apply(e.elem, arguments),
            o !== !1 && !a.isPropagationStopped() || (c = e.level,
            o === !1 && (b = !1),
            !a.isImmediatePropagationStopped())); j++)
                ;
            return b
        }
    }
    function M(a, b) {
        return (a && "*" !== a ? a + "." : "") + b.replace(y, "`").replace(z, "&")
    }
    function U(a) {
        return !a || !a.parentNode || 11 === a.parentNode.nodeType
    }
    function V(a, b, c) {
        if (b = b || 0,
        f.isFunction(b))
            return f.grep(a, function(a, d) {
                var e = !!b.call(a, d, a);
                return e === c
            });
        if (b.nodeType)
            return f.grep(a, function(a) {
                return a === b === c
            });
        if ("string" == typeof b) {
            var d = f.grep(a, function(a) {
                return 1 === a.nodeType
            });
            if (Q.test(b))
                return f.filter(b, d, !c);
            b = f.filter(b, d)
        }
        return f.grep(a, function(a) {
            return f.inArray(a, b) >= 0 === c
        })
    }
    function fb(a) {
        return f.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }
    function gb(a, b) {
        if (1 === b.nodeType && f.hasData(a)) {
            var c = f.expando
              , d = f.data(a)
              , e = f.data(b, d);
            if (d = d[c]) {
                var g = d.events;
                if (e = e[c] = f.extend({}, d),
                g) {
                    delete e.handle,
                    e.events = {};
                    for (var h in g)
                        for (var i = 0, j = g[h].length; j > i; i++)
                            f.event.add(b, h + (g[h][i].namespace ? "." : "") + g[h][i].namespace, g[h][i], g[h][i].data)
                }
            }
        }
    }
    function hb(a, b) {
        var c;
        1 === b.nodeType && (b.clearAttributes && b.clearAttributes(),
        b.mergeAttributes && b.mergeAttributes(a),
        c = b.nodeName.toLowerCase(),
        "object" === c ? b.outerHTML = a.outerHTML : "input" !== c || "checkbox" !== a.type && "radio" !== a.type ? "option" === c ? b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue) : (a.checked && (b.defaultChecked = b.checked = a.checked),
        b.value !== a.value && (b.value = a.value)),
        b.removeAttribute(f.expando))
    }
    function ib(a) {
        return "getElementsByTagName"in a ? a.getElementsByTagName("*") : "querySelectorAll"in a ? a.querySelectorAll("*") : []
    }
    function jb(a) {
        ("checkbox" === a.type || "radio" === a.type) && (a.defaultChecked = a.checked)
    }
    function kb(a) {
        f.nodeName(a, "input") ? jb(a) : "getElementsByTagName"in a && f.grep(a.getElementsByTagName("input"), jb)
    }
    function lb(a, b) {
        b.src ? f.ajax({
            "url": b.src,
            "async": !1,
            "dataType": "script"
        }) : f.globalEval((b.text || b.textContent || b.innerHTML || "").replace(db, "/*$0*/")),
        b.parentNode && b.parentNode.removeChild(b)
    }
    function yb(a, b, c) {
        var d = "width" === b ? a.offsetWidth : a.offsetHeight
          , e = "width" === b ? tb : ub;
        return d > 0 ? ("border" !== c && f.each(e, function() {
            c || (d -= parseFloat(f.css(a, "padding" + this)) || 0),
            "margin" === c ? d += parseFloat(f.css(a, c + this)) || 0 : d -= parseFloat(f.css(a, "border" + this + "Width")) || 0
        }),
        d + "px") : (d = vb(a, b, b),
        (0 > d || null == d) && (d = a.style[b] || 0),
        d = parseFloat(d) || 0,
        c && f.each(e, function() {
            d += parseFloat(f.css(a, "padding" + this)) || 0,
            "padding" !== c && (d += parseFloat(f.css(a, "border" + this + "Width")) || 0),
            "margin" === c && (d += parseFloat(f.css(a, c + this)) || 0)
        }),
        d + "px")
    }
    function Vb(a) {
        return function(b, c) {
            if ("string" != typeof b && (c = b,
            b = "*"),
            f.isFunction(c))
                for (var h, i, j, d = b.toLowerCase().split(Lb), e = 0, g = d.length; g > e; e++)
                    h = d[e],
                    j = /^\+/.test(h),
                    j && (h = h.substr(1) || "*"),
                    i = a[h] = a[h] || [],
                    i[j ? "unshift" : "push"](c)
        }
    }
    function Wb(a, c, d, e, f, g) {
        f = f || c.dataTypes[0],
        g = g || {},
        g[f] = !0;
        for (var l, h = a[f], i = 0, j = h ? h.length : 0, k = a === Pb; j > i && (k || !l); i++)
            l = h[i](c, d, e),
            "string" == typeof l && (!k || g[l] ? l = b : (c.dataTypes.unshift(l),
            l = Wb(a, c, d, e, l, g)));
        return !k && l || g["*"] || (l = Wb(a, c, d, e, "*", g)),
        l
    }
    function Xb(a, c) {
        var d, e, g = f.ajaxSettings.flatOptions || {};
        for (d in c)
            c[d] !== b && ((g[d] ? a : e || (e = {}))[d] = c[d]);
        e && f.extend(!0, a, e)
    }
    function Yb(a, b, c, d) {
        if (f.isArray(b))
            f.each(b, function(b, e) {
                c || Ab.test(a) ? d(a, e) : Yb(a + "[" + ("object" == typeof e || f.isArray(e) ? b : "") + "]", e, c, d)
            });
        else if (c || null == b || "object" != typeof b)
            d(a, b);
        else
            for (var e in b)
                Yb(a + "[" + e + "]", b[e], c, d)
    }
    function Zb(a, c, d) {
        var h, i, j, k, e = a.contents, f = a.dataTypes, g = a.responseFields;
        for (i in g)
            i in d && (c[g[i]] = d[i]);
        for (; "*" === f[0]; )
            f.shift(),
            h === b && (h = a.mimeType || c.getResponseHeader("content-type"));
        if (h)
            for (i in e)
                if (e[i] && e[i].test(h)) {
                    f.unshift(i);
                    break
                }
        if (f[0]in d)
            j = f[0];
        else {
            for (i in d) {
                if (!f[0] || a.converters[i + " " + f[0]]) {
                    j = i;
                    break
                }
                k || (k = i)
            }
            j = j || k
        }
        return j ? (j !== f[0] && f.unshift(j),
        d[j]) : void 0
    }
    function $b(a, c) {
        a.dataFilter && (c = a.dataFilter(c, a.dataType));
        var g, h, j, l, m, n, o, p, d = a.dataTypes, e = {}, i = d.length, k = d[0];
        for (g = 1; i > g; g++) {
            if (1 === g)
                for (h in a.converters)
                    "string" == typeof h && (e[h.toLowerCase()] = a.converters[h]);
            if (l = k,
            k = d[g],
            "*" === k)
                k = l;
            else if ("*" !== l && l !== k) {
                if (m = l + " " + k,
                n = e[m] || e["* " + k],
                !n) {
                    p = b;
                    for (o in e)
                        if (j = o.split(" "),
                        (j[0] === l || "*" === j[0]) && (p = e[j[1] + " " + k])) {
                            o = e[o],
                            o === !0 ? n = p : p === !0 && (n = o);
                            break
                        }
                }
                n || p || f.error("No conversion from " + m.replace(" ", " to ")),
                n !== !0 && (c = n ? n(c) : p(o(c)))
            }
        }
        return c
    }
    function ec() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }
    function fc() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }
    function oc() {
        return setTimeout(pc, 0),
        nc = f.now()
    }
    function pc() {
        nc = b
    }
    function qc(a, b) {
        var c = {};
        return f.each(mc.concat.apply([], mc.slice(0, b)), function() {
            c[this] = a
        }),
        c
    }
    function rc(a) {
        if (!gc[a]) {
            var b = c.body
              , d = f("<" + a + ">").appendTo(b)
              , e = d.css("display");
            d.remove(),
            ("none" === e || "" === e) && (hc || (hc = c.createElement("iframe"),
            hc.frameBorder = hc.width = hc.height = 0),
            b.appendChild(hc),
            ic && hc.createElement || (ic = (hc.contentWindow || hc.contentDocument).document,
            ic.write(("CSS1Compat" === c.compatMode ? "<!doctype html>" : "") + "<html><body>"),
            ic.close()),
            d = ic.createElement(a),
            ic.body.appendChild(d),
            e = f.css(d, "display"),
            b.removeChild(hc)),
            gc[a] = e
        }
        return gc[a]
    }
    function uc(a) {
        return f.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    var c = a.document
      , d = a.navigator
      , e = a.location
      , f = function() {
        function K() {
            if (!e.isReady) {
                try {
                    c.documentElement.doScroll("left")
                } catch (a) {
                    return void setTimeout(K, 1)
                }
                e.ready()
            }
        }
        var h, A, B, C, e = function(a, b) {
            return new e.fn.init(a,b,h)
        }, f = a.jQuery, g = a.$, i = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, j = /\S/, k = /^\s+/, l = /\s+$/, m = /\d/, n = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, o = /^[\],:{}\s]*$/, p = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, q = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, r = /(?:^|:|,)(?:\s*\[)+/g, s = /(webkit)[ \/]([\w.]+)/, t = /(opera)(?:.*version)?[ \/]([\w.]+)/, u = /(msie) ([\w.]+)/, v = /(mozilla)(?:.*? rv:([\w.]+))?/, w = /-([a-z]|[0-9])/gi, x = /^-ms-/, y = function(a, b) {
            return (b + "").toUpperCase()
        }, z = d.userAgent, D = Object.prototype.toString, E = Object.prototype.hasOwnProperty, F = Array.prototype.push, G = Array.prototype.slice, H = String.prototype.trim, I = Array.prototype.indexOf, J = {};
        return e.fn = e.prototype = {
            "constructor": e,
            "init": function(a, d, f) {
                var g, h, j, k;
                if (!a)
                    return this;
                if (a.nodeType)
                    return this.context = this[0] = a,
                    this.length = 1,
                    this;
                if ("body" === a && !d && c.body)
                    return this.context = c,
                    this[0] = c.body,
                    this.selector = a,
                    this.length = 1,
                    this;
                if ("string" == typeof a) {
                    if (g = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : i.exec(a),
                    !g || !g[1] && d)
                        return !d || d.jquery ? (d || f).find(a) : this.constructor(d).find(a);
                    if (g[1])
                        return d = d instanceof e ? d[0] : d,
                        k = d ? d.ownerDocument || d : c,
                        j = n.exec(a),
                        j ? e.isPlainObject(d) ? (a = [c.createElement(j[1])],
                        e.fn.attr.call(a, d, !0)) : a = [k.createElement(j[1])] : (j = e.buildFragment([g[1]], [k]),
                        a = (j.cacheable ? e.clone(j.fragment) : j.fragment).childNodes),
                        e.merge(this, a);
                    if (h = c.getElementById(g[2]),
                    h && h.parentNode) {
                        if (h.id !== g[2])
                            return f.find(a);
                        this.length = 1,
                        this[0] = h
                    }
                    return this.context = c,
                    this.selector = a,
                    this
                }
                return e.isFunction(a) ? f.ready(a) : (a.selector !== b && (this.selector = a.selector,
                this.context = a.context),
                e.makeArray(a, this))
            },
            "selector": "",
            "jquery": "1.6.4",
            "length": 0,
            "size": function() {
                return this.length
            },
            "toArray": function() {
                return G.call(this, 0)
            },
            "get": function(a) {
                return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a]
            },
            "pushStack": function(a, b, c) {
                var d = this.constructor();
                return e.isArray(a) ? F.apply(d, a) : e.merge(d, a),
                d.prevObject = this,
                d.context = this.context,
                "find" === b ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")"),
                d
            },
            "each": function(a, b) {
                return e.each(this, a, b)
            },
            "ready": function(a) {
                return e.bindReady(),
                B.done(a),
                this
            },
            "eq": function(a) {
                return -1 === a ? this.slice(a) : this.slice(a, +a + 1)
            },
            "first": function() {
                return this.eq(0)
            },
            "last": function() {
                return this.eq(-1)
            },
            "slice": function() {
                return this.pushStack(G.apply(this, arguments), "slice", G.call(arguments).join(","))
            },
            "map": function(a) {
                return this.pushStack(e.map(this, function(b, c) {
                    return a.call(b, c, b)
                }))
            },
            "end": function() {
                return this.prevObject || this.constructor(null)
            },
            "push": F,
            "sort": [].sort,
            "splice": [].splice
        },
        e.fn.init.prototype = e.fn,
        e.extend = e.fn.extend = function() {
            var a, c, d, f, g, h, i = arguments[0] || {}, j = 1, k = arguments.length, l = !1;
            for ("boolean" == typeof i && (l = i,
            i = arguments[1] || {},
            j = 2),
            "object" == typeof i || e.isFunction(i) || (i = {}),
            k === j && (i = this,
            --j); k > j; j++)
                if (null != (a = arguments[j]))
                    for (c in a)
                        d = i[c],
                        f = a[c],
                        i !== f && (l && f && (e.isPlainObject(f) || (g = e.isArray(f))) ? (g ? (g = !1,
                        h = d && e.isArray(d) ? d : []) : h = d && e.isPlainObject(d) ? d : {},
                        i[c] = e.extend(l, h, f)) : f !== b && (i[c] = f));
            return i
        }
        ,
        e.extend({
            "noConflict": function(b) {
                return a.$ === e && (a.$ = g),
                b && a.jQuery === e && (a.jQuery = f),
                e
            },
            "isReady": !1,
            "readyWait": 1,
            "holdReady": function(a) {
                a ? e.readyWait++ : e.ready(!0)
            },
            "ready": function(a) {
                if (a === !0 && !--e.readyWait || a !== !0 && !e.isReady) {
                    if (!c.body)
                        return setTimeout(e.ready, 1);
                    if (e.isReady = !0,
                    a !== !0 && --e.readyWait > 0)
                        return;
                    B.resolveWith(c, [e]),
                    e.fn.trigger && e(c).trigger("ready").unbind("ready")
                }
            },
            "bindReady": function() {
                if (!B) {
                    if (B = e._Deferred(),
                    "complete" === c.readyState)
                        return setTimeout(e.ready, 1);
                    if (c.addEventListener)
                        c.addEventListener("DOMContentLoaded", C, !1),
                        a.addEventListener("load", e.ready, !1);
                    else if (c.attachEvent) {
                        c.attachEvent("onreadystatechange", C),
                        a.attachEvent("onload", e.ready);
                        var b = !1;
                        try {
                            b = null == a.frameElement
                        } catch (d) {}
                        c.documentElement.doScroll && b && K()
                    }
                }
            },
            "isFunction": function(a) {
                return "function" === e.type(a)
            },
            "isArray": Array.isArray || function(a) {
                return "array" === e.type(a)
            }
            ,
            "isWindow": function(a) {
                return a && "object" == typeof a && "setInterval"in a
            },
            "isNaN": function(a) {
                return null == a || !m.test(a) || isNaN(a)
            },
            "type": function(a) {
                return null == a ? String(a) : J[D.call(a)] || "object"
            },
            "isPlainObject": function(a) {
                if (!a || "object" !== e.type(a) || a.nodeType || e.isWindow(a))
                    return !1;
                try {
                    if (a.constructor && !E.call(a, "constructor") && !E.call(a.constructor.prototype, "isPrototypeOf"))
                        return !1
                } catch (c) {
                    return !1
                }
                var d;
                for (d in a)
                    ;
                return d === b || E.call(a, d)
            },
            "isEmptyObject": function(a) {
                for (var b in a)
                    return !1;
                return !0
            },
            "error": function(a) {
                throw a
            },
            "parseJSON": function(b) {
                return "string" == typeof b && b ? (b = e.trim(b),
                a.JSON && a.JSON.parse ? a.JSON.parse(b) : o.test(b.replace(p, "@").replace(q, "]").replace(r, "")) ? new Function("return " + b)() : void e.error("Invalid JSON: " + b)) : null
            },
            "parseXML": function(c) {
                var d, f;
                try {
                    a.DOMParser ? (f = new DOMParser,
                    d = f.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"),
                    d.async = "false",
                    d.loadXML(c))
                } catch (g) {
                    d = b
                }
                return d && d.documentElement && !d.getElementsByTagName("parsererror").length || e.error("Invalid XML: " + c),
                d
            },
            "noop": function() {},
            "globalEval": function(b) {
                b && j.test(b) && (a.execScript || function(b) {
                    a.eval.call(a, b)
                }
                )(b)
            },
            "camelCase": function(a) {
                return a.replace(x, "ms-").replace(w, y)
            },
            "nodeName": function(a, b) {
                return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
            },
            "each": function(a, c, d) {
                var f, g = 0, h = a.length, i = h === b || e.isFunction(a);
                if (d)
                    if (i) {
                        for (f in a)
                            if (c.apply(a[f], d) === !1)
                                break
                    } else
                        for (; h > g && c.apply(a[g++], d) !== !1; )
                            ;
                else if (i) {
                    for (f in a)
                        if (c.call(a[f], f, a[f]) === !1)
                            break
                } else
                    for (; h > g && c.call(a[g], g, a[g++]) !== !1; )
                        ;
                return a
            },
            "trim": H ? function(a) {
                return null == a ? "" : H.call(a)
            }
            : function(a) {
                return null == a ? "" : a.toString().replace(k, "").replace(l, "")
            }
            ,
            "makeArray": function(a, b) {
                var c = b || [];
                if (null != a) {
                    var d = e.type(a);
                    null == a.length || "string" === d || "function" === d || "regexp" === d || e.isWindow(a) ? F.call(c, a) : e.merge(c, a)
                }
                return c
            },
            "inArray": function(a, b) {
                if (!b)
                    return -1;
                if (I)
                    return I.call(b, a);
                for (var c = 0, d = b.length; d > c; c++)
                    if (b[c] === a)
                        return c;
                return -1
            },
            "merge": function(a, c) {
                var d = a.length
                  , e = 0;
                if ("number" == typeof c.length)
                    for (var f = c.length; f > e; e++)
                        a[d++] = c[e];
                else
                    for (; c[e] !== b; )
                        a[d++] = c[e++];
                return a.length = d,
                a
            },
            "grep": function(a, b, c) {
                var e, d = [];
                c = !!c;
                for (var f = 0, g = a.length; g > f; f++)
                    e = !!b(a[f], f),
                    c !== e && d.push(a[f]);
                return d
            },
            "map": function(a, c, d) {
                var f, g, h = [], i = 0, j = a.length, k = a instanceof e || j !== b && "number" == typeof j && (j > 0 && a[0] && a[j - 1] || 0 === j || e.isArray(a));
                if (k)
                    for (; j > i; i++)
                        f = c(a[i], i, d),
                        null != f && (h[h.length] = f);
                else
                    for (g in a)
                        f = c(a[g], g, d),
                        null != f && (h[h.length] = f);
                return h.concat.apply([], h)
            },
            "guid": 1,
            "proxy": function(a, c) {
                if ("string" == typeof c) {
                    var d = a[c];
                    c = a,
                    a = d
                }
                if (!e.isFunction(a))
                    return b;
                var f = G.call(arguments, 2)
                  , g = function() {
                    return a.apply(c, f.concat(G.call(arguments)))
                };
                return g.guid = a.guid = a.guid || g.guid || e.guid++,
                g
            },
            "access": function(a, c, d, f, g, h) {
                var i = a.length;
                if ("object" == typeof c) {
                    for (var j in c)
                        e.access(a, j, c[j], f, g, d);
                    return a
                }
                if (d !== b) {
                    f = !h && f && e.isFunction(d);
                    for (var k = 0; i > k; k++)
                        g(a[k], c, f ? d.call(a[k], k, g(a[k], c)) : d, h);
                    return a
                }
                return i ? g(a[0], c) : b
            },
            "now": function() {
                return (new Date).getTime()
            },
            "uaMatch": function(a) {
                a = a.toLowerCase();
                var b = s.exec(a) || t.exec(a) || u.exec(a) || a.indexOf("compatible") < 0 && v.exec(a) || [];
                return {
                    "browser": b[1] || "",
                    "version": b[2] || "0"
                }
            },
            "sub": function() {
                function a(b, c) {
                    return new a.fn.init(b,c)
                }
                e.extend(!0, a, this),
                a.superclass = this,
                a.fn = a.prototype = this(),
                a.fn.constructor = a,
                a.sub = this.sub,
                a.fn.init = function(c, d) {
                    return d && d instanceof e && !(d instanceof a) && (d = a(d)),
                    e.fn.init.call(this, c, d, b)
                }
                ,
                a.fn.init.prototype = a.fn;
                var b = a(c);
                return a
            },
            "browser": {}
        }),
        e.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(a, b) {
            J["[object " + b + "]"] = b.toLowerCase()
        }),
        A = e.uaMatch(z),
        A.browser && (e.browser[A.browser] = !0,
        e.browser.version = A.version),
        e.browser.webkit && (e.browser.safari = !0),
        j.test("\xa0") && (k = /^[\s\xA0]+/,
        l = /[\s\xA0]+$/),
        h = e(c),
        c.addEventListener ? C = function() {
            c.removeEventListener("DOMContentLoaded", C, !1),
            e.ready()
        }
        : c.attachEvent && (C = function() {
            "complete" === c.readyState && (c.detachEvent("onreadystatechange", C),
            e.ready())
        }
        ),
        e
    }()
      , g = "done fail isResolved isRejected promise then always pipe".split(" ")
      , h = [].slice;
    f.extend({
        "_Deferred": function() {
            var b, c, d, a = [], e = {
                "done": function() {
                    if (!d) {
                        var g, h, i, j, k, c = arguments;
                        for (b && (k = b,
                        b = 0),
                        g = 0,
                        h = c.length; h > g; g++)
                            i = c[g],
                            j = f.type(i),
                            "array" === j ? e.done.apply(e, i) : "function" === j && a.push(i);
                        k && e.resolveWith(k[0], k[1])
                    }
                    return this
                },
                "resolveWith": function(e, f) {
                    if (!d && !b && !c) {
                        f = f || [],
                        c = 1;
                        try {
                            for (; a[0]; )
                                a.shift().apply(e, f)
                        } finally {
                            b = [e, f],
                            c = 0
                        }
                    }
                    return this
                },
                "resolve": function() {
                    return e.resolveWith(this, arguments),
                    this
                },
                "isResolved": function() {
                    return !(!c && !b)
                },
                "cancel": function() {
                    return d = 1,
                    a = [],
                    this
                }
            };
            return e
        },
        "Deferred": function(a) {
            var d, b = f._Deferred(), c = f._Deferred();
            return f.extend(b, {
                "then": function(a, c) {
                    return b.done(a).fail(c),
                    this
                },
                "always": function() {
                    return b.done.apply(b, arguments).fail.apply(this, arguments)
                },
                "fail": c.done,
                "rejectWith": c.resolveWith,
                "reject": c.resolve,
                "isRejected": c.isResolved,
                "pipe": function(a, c) {
                    return f.Deferred(function(d) {
                        f.each({
                            "done": [a, "resolve"],
                            "fail": [c, "reject"]
                        }, function(a, c) {
                            var h, e = c[0], g = c[1];
                            b[a](f.isFunction(e) ? function() {
                                h = e.apply(this, arguments),
                                h && f.isFunction(h.promise) ? h.promise().then(d.resolve, d.reject) : d[g + "With"](this === b ? d : this, [h])
                            }
                            : d[g])
                        })
                    }).promise()
                },
                "promise": function(a) {
                    if (null == a) {
                        if (d)
                            return d;
                        d = a = {}
                    }
                    for (var c = g.length; c--; )
                        a[g[c]] = b[g[c]];
                    return a
                }
            }),
            b.done(c.cancel).fail(b.cancel),
            delete b.cancel,
            a && a.call(b, b),
            b
        },
        "when": function(a) {
            function i(a) {
                return function(c) {
                    b[a] = arguments.length > 1 ? h.call(arguments, 0) : c,
                    --e || g.resolveWith(g, h.call(b, 0))
                }
            }
            var b = arguments
              , c = 0
              , d = b.length
              , e = d
              , g = 1 >= d && a && f.isFunction(a.promise) ? a : f.Deferred();
            if (d > 1) {
                for (; d > c; c++)
                    b[c] && f.isFunction(b[c].promise) ? b[c].promise().then(i(c), g.reject) : --e;
                e || g.resolveWith(g, b)
            } else
                g !== a && g.resolveWith(g, d ? [a] : []);
            return g.promise()
        }
    }),
    f.support = function() {
        var d, e, g, h, i, j, k, l, m, n, o, p, q, s, t, u, a = c.createElement("div"), b = c.documentElement;
        if (a.setAttribute("className", "t"),
        a.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",
        d = a.getElementsByTagName("*"),
        e = a.getElementsByTagName("a")[0],
        !d || !d.length || !e)
            return {};
        g = c.createElement("select"),
        h = g.appendChild(c.createElement("option")),
        i = a.getElementsByTagName("input")[0],
        k = {
            "leadingWhitespace": 3 === a.firstChild.nodeType,
            "tbody": !a.getElementsByTagName("tbody").length,
            "htmlSerialize": !!a.getElementsByTagName("link").length,
            "style": /top/.test(e.getAttribute("style")),
            "hrefNormalized": "/a" === e.getAttribute("href"),
            "opacity": /^0.55$/.test(e.style.opacity),
            "cssFloat": !!e.style.cssFloat,
            "checkOn": "on" === i.value,
            "optSelected": h.selected,
            "getSetAttribute": "t" !== a.className,
            "submitBubbles": !0,
            "changeBubbles": !0,
            "focusinBubbles": !1,
            "deleteExpando": !0,
            "noCloneEvent": !0,
            "inlineBlockNeedsLayout": !1,
            "shrinkWrapBlocks": !1,
            "reliableMarginRight": !0
        },
        i.checked = !0,
        k.noCloneChecked = i.cloneNode(!0).checked,
        g.disabled = !0,
        k.optDisabled = !h.disabled;
        try {
            delete a.test
        } catch (v) {
            k.deleteExpando = !1
        }
        !a.addEventListener && a.attachEvent && a.fireEvent && (a.attachEvent("onclick", function() {
            k.noCloneEvent = !1
        }),
        a.cloneNode(!0).fireEvent("onclick")),
        i = c.createElement("input"),
        i.value = "t",
        i.setAttribute("type", "radio"),
        k.radioValue = "t" === i.value,
        i.setAttribute("checked", "checked"),
        a.appendChild(i),
        l = c.createDocumentFragment(),
        l.appendChild(a.firstChild),
        k.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked,
        a.innerHTML = "",
        a.style.width = a.style.paddingLeft = "1px",
        m = c.getElementsByTagName("body")[0],
        o = c.createElement(m ? "div" : "body"),
        p = {
            "visibility": "hidden",
            "width": 0,
            "height": 0,
            "border": 0,
            "margin": 0,
            "background": "none"
        },
        m && f.extend(p, {
            "position": "absolute",
            "left": "-1000px",
            "top": "-1000px"
        });
        for (t in p)
            o.style[t] = p[t];
        if (o.appendChild(a),
        n = m || b,
        n.insertBefore(o, n.firstChild),
        k.appendChecked = i.checked,
        k.boxModel = 2 === a.offsetWidth,
        "zoom"in a.style && (a.style.display = "inline",
        a.style.zoom = 1,
        k.inlineBlockNeedsLayout = 2 === a.offsetWidth,
        a.style.display = "",
        a.innerHTML = "<div style='width:4px;'></div>",
        k.shrinkWrapBlocks = 2 !== a.offsetWidth),
        a.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",
        q = a.getElementsByTagName("td"),
        u = 0 === q[0].offsetHeight,
        q[0].style.display = "",
        q[1].style.display = "none",
        k.reliableHiddenOffsets = u && 0 === q[0].offsetHeight,
        a.innerHTML = "",
        c.defaultView && c.defaultView.getComputedStyle && (j = c.createElement("div"),
        j.style.width = "0",
        j.style.marginRight = "0",
        a.appendChild(j),
        k.reliableMarginRight = 0 === (parseInt((c.defaultView.getComputedStyle(j, null) || {
            "marginRight": 0
        }).marginRight, 10) || 0)),
        o.innerHTML = "",
        n.removeChild(o),
        a.attachEvent)
            for (t in {
                "submit": 1,
                "change": 1,
                "focusin": 1
            })
                s = "on" + t,
                u = s in a,
                u || (a.setAttribute(s, "return;"),
                u = "function" == typeof a[s]),
                k[t + "Bubbles"] = u;
        return o = l = g = h = m = j = a = i = null,
        k
    }(),
    f.boxModel = f.support.boxModel;
    var i = /^(?:\{.*\}|\[.*\])$/
      , j = /([A-Z])/g;
    f.extend({
        "cache": {},
        "uuid": 0,
        "expando": "jQuery" + (f.fn.jquery + Math.random()).replace(/\D/g, ""),
        "noData": {
            "embed": !0,
            "object": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            "applet": !0
        },
        "hasData": function(a) {
            return a = a.nodeType ? f.cache[a[f.expando]] : a[f.expando],
            !!a && !l(a)
        },
        "data": function(a, c, d, e) {
            if (f.acceptData(a)) {
                var g, h, i = f.expando, j = "string" == typeof c, k = a.nodeType, l = k ? f.cache : a, m = k ? a[f.expando] : a[f.expando] && f.expando;
                if (!(!m || e && m && l[m] && !l[m][i]) || !j || d !== b)
                    return m || (k ? a[f.expando] = m = ++f.uuid : m = f.expando),
                    l[m] || (l[m] = {},
                    k || (l[m].toJSON = f.noop)),
                    ("object" == typeof c || "function" == typeof c) && (e ? l[m][i] = f.extend(l[m][i], c) : l[m] = f.extend(l[m], c)),
                    g = l[m],
                    e && (g[i] || (g[i] = {}),
                    g = g[i]),
                    d !== b && (g[f.camelCase(c)] = d),
                    "events" !== c || g[c] ? (j ? (h = g[c],
                    null == h && (h = g[f.camelCase(c)])) : h = g,
                    h) : g[i] && g[i].events
            }
        },
        "removeData": function(a, b, c) {
            if (f.acceptData(a)) {
                var d, e = f.expando, g = a.nodeType, h = g ? f.cache : a, i = g ? a[f.expando] : f.expando;
                if (h[i] && !(b && (d = c ? h[i][e] : h[i],
                d && (d[b] || (b = f.camelCase(b)),
                delete d[b],
                !l(d))) || c && (delete h[i][e],
                !l(h[i])))) {
                    var j = h[i][e];
                    f.support.deleteExpando || !h.setInterval ? delete h[i] : h[i] = null,
                    j ? (h[i] = {},
                    g || (h[i].toJSON = f.noop),
                    h[i][e] = j) : g && (f.support.deleteExpando ? delete a[f.expando] : a.removeAttribute ? a.removeAttribute(f.expando) : a[f.expando] = null)
                }
            }
        },
        "_data": function(a, b, c) {
            return f.data(a, b, c, !0)
        },
        "acceptData": function(a) {
            if (a.nodeName) {
                var b = f.noData[a.nodeName.toLowerCase()];
                if (b)
                    return !(b === !0 || a.getAttribute("classid") !== b)
            }
            return !0
        }
    }),
    f.fn.extend({
        "data": function(a, c) {
            var d = null;
            if ("undefined" == typeof a) {
                if (this.length && (d = f.data(this[0]),
                1 === this[0].nodeType))
                    for (var g, e = this[0].attributes, h = 0, i = e.length; i > h; h++)
                        g = e[h].name,
                        0 === g.indexOf("data-") && (g = f.camelCase(g.substring(5)),
                        k(this[0], g, d[g]));
                return d
            }
            if ("object" == typeof a)
                return this.each(function() {
                    f.data(this, a)
                });
            var j = a.split(".");
            return j[1] = j[1] ? "." + j[1] : "",
            c === b ? (d = this.triggerHandler("getData" + j[1] + "!", [j[0]]),
            d === b && this.length && (d = f.data(this[0], a),
            d = k(this[0], a, d)),
            d === b && j[1] ? this.data(j[0]) : d) : this.each(function() {
                var b = f(this)
                  , d = [j[0], c];
                b.triggerHandler("setData" + j[1] + "!", d),
                f.data(this, a, c),
                b.triggerHandler("changeData" + j[1] + "!", d)
            })
        },
        "removeData": function(a) {
            return this.each(function() {
                f.removeData(this, a)
            })
        }
    }),
    f.extend({
        "_mark": function(a, c) {
            a && (c = (c || "fx") + "mark",
            f.data(a, c, (f.data(a, c, b, !0) || 0) + 1, !0))
        },
        "_unmark": function(a, c, d) {
            if (a !== !0 && (d = c,
            c = a,
            a = !1),
            c) {
                d = d || "fx";
                var e = d + "mark"
                  , g = a ? 0 : (f.data(c, e, b, !0) || 1) - 1;
                g ? f.data(c, e, g, !0) : (f.removeData(c, e, !0),
                m(c, d, "mark"))
            }
        },
        "queue": function(a, c, d) {
            if (a) {
                c = (c || "fx") + "queue";
                var e = f.data(a, c, b, !0);
                return d && (!e || f.isArray(d) ? e = f.data(a, c, f.makeArray(d), !0) : e.push(d)),
                e || []
            }
        },
        "dequeue": function(a, b) {
            b = b || "fx";
            var c = f.queue(a, b)
              , d = c.shift();
            "inprogress" === d && (d = c.shift()),
            d && ("fx" === b && c.unshift("inprogress"),
            d.call(a, function() {
                f.dequeue(a, b)
            })),
            c.length || (f.removeData(a, b + "queue", !0),
            m(a, b, "queue"))
        }
    }),
    f.fn.extend({
        "queue": function(a, c) {
            return "string" != typeof a && (c = a,
            a = "fx"),
            c === b ? f.queue(this[0], a) : this.each(function() {
                var b = f.queue(this, a, c);
                "fx" === a && "inprogress" !== b[0] && f.dequeue(this, a)
            })
        },
        "dequeue": function(a) {
            return this.each(function() {
                f.dequeue(this, a)
            })
        },
        "delay": function(a, b) {
            return a = f.fx ? f.fx.speeds[a] || a : a,
            b = b || "fx",
            this.queue(b, function() {
                var c = this;
                setTimeout(function() {
                    f.dequeue(c, b)
                }, a)
            })
        },
        "clearQueue": function(a) {
            return this.queue(a || "fx", [])
        },
        "promise": function(a, c) {
            function m() {
                --h || d.resolveWith(e, [e])
            }
            "string" != typeof a && (c = a,
            a = b),
            a = a || "fx";
            for (var l, d = f.Deferred(), e = this, g = e.length, h = 1, i = a + "defer", j = a + "queue", k = a + "mark"; g--; )
                (l = f.data(e[g], i, b, !0) || (f.data(e[g], j, b, !0) || f.data(e[g], k, b, !0)) && f.data(e[g], i, f._Deferred(), !0)) && (h++,
                l.done(m));
            return m(),
            d.promise()
        }
    });
    var u, v, n = /[\n\t\r]/g, o = /\s+/, p = /\r/g, q = /^(?:button|input)$/i, r = /^(?:button|input|object|select|textarea)$/i, s = /^a(?:rea)?$/i, t = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i;
    f.fn.extend({
        "attr": function(a, b) {
            return f.access(this, a, b, !0, f.attr)
        },
        "removeAttr": function(a) {
            return this.each(function() {
                f.removeAttr(this, a)
            })
        },
        "prop": function(a, b) {
            return f.access(this, a, b, !0, f.prop)
        },
        "removeProp": function(a) {
            return a = f.propFix[a] || a,
            this.each(function() {
                try {
                    this[a] = b,
                    delete this[a]
                } catch (c) {}
            })
        },
        "addClass": function(a) {
            var b, c, d, e, g, h, i;
            if (f.isFunction(a))
                return this.each(function(b) {
                    f(this).addClass(a.call(this, b, this.className))
                });
            if (a && "string" == typeof a)
                for (b = a.split(o),
                c = 0,
                d = this.length; d > c; c++)
                    if (e = this[c],
                    1 === e.nodeType)
                        if (e.className || 1 !== b.length) {
                            for (g = " " + e.className + " ",
                            h = 0,
                            i = b.length; i > h; h++)
                                ~g.indexOf(" " + b[h] + " ") || (g += b[h] + " ");
                            e.className = f.trim(g)
                        } else
                            e.className = a;
            return this
        },
        "removeClass": function(a) {
            var c, d, e, g, h, i, j;
            if (f.isFunction(a))
                return this.each(function(b) {
                    f(this).removeClass(a.call(this, b, this.className))
                });
            if (a && "string" == typeof a || a === b)
                for (c = (a || "").split(o),
                d = 0,
                e = this.length; e > d; d++)
                    if (g = this[d],
                    1 === g.nodeType && g.className)
                        if (a) {
                            for (h = (" " + g.className + " ").replace(n, " "),
                            i = 0,
                            j = c.length; j > i; i++)
                                h = h.replace(" " + c[i] + " ", " ");
                            g.className = f.trim(h)
                        } else
                            g.className = "";
            return this
        },
        "toggleClass": function(a, b) {
            var c = typeof a
              , d = "boolean" == typeof b;
            return this.each(f.isFunction(a) ? function(c) {
                f(this).toggleClass(a.call(this, c, this.className, b), b)
            }
            : function() {
                if ("string" === c)
                    for (var e, g = 0, h = f(this), i = b, j = a.split(o); e = j[g++]; )
                        i = d ? i : !h.hasClass(e),
                        h[i ? "addClass" : "removeClass"](e);
                else
                    ("undefined" === c || "boolean" === c) && (this.className && f._data(this, "__className__", this.className),
                    this.className = this.className || a === !1 ? "" : f._data(this, "__className__") || "")
            }
            )
        },
        "hasClass": function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(n, " ").indexOf(b) > -1)
                    return !0;
            return !1
        },
        "val": function(a) {
            var c, d, e = this[0];
            if (!arguments.length)
                return e ? (c = f.valHooks[e.nodeName.toLowerCase()] || f.valHooks[e.type],
                c && "get"in c && (d = c.get(e, "value")) !== b ? d : (d = e.value,
                "string" == typeof d ? d.replace(p, "") : null == d ? "" : d)) : b;
            var g = f.isFunction(a);
            return this.each(function(d) {
                var h, e = f(this);
                1 === this.nodeType && (h = g ? a.call(this, d, e.val()) : a,
                null == h ? h = "" : "number" == typeof h ? h += "" : f.isArray(h) && (h = f.map(h, function(a) {
                    return null == a ? "" : a + ""
                })),
                c = f.valHooks[this.nodeName.toLowerCase()] || f.valHooks[this.type],
                c && "set"in c && c.set(this, h, "value") !== b || (this.value = h))
            })
        }
    }),
    f.extend({
        "valHooks": {
            "option": {
                "get": function(a) {
                    var b = a.attributes.value;
                    return !b || b.specified ? a.value : a.text
                }
            },
            "select": {
                "get": function(a) {
                    var b, c = a.selectedIndex, d = [], e = a.options, g = "select-one" === a.type;
                    if (0 > c)
                        return null;
                    for (var h = g ? c : 0, i = g ? c + 1 : e.length; i > h; h++) {
                        var j = e[h];
                        if (!(!j.selected || (f.support.optDisabled ? j.disabled : null !== j.getAttribute("disabled")) || j.parentNode.disabled && f.nodeName(j.parentNode, "optgroup"))) {
                            if (b = f(j).val(),
                            g)
                                return b;
                            d.push(b)
                        }
                    }
                    return g && !d.length && e.length ? f(e[c]).val() : d
                },
                "set": function(a, b) {
                    var c = f.makeArray(b);
                    return f(a).find("option").each(function() {
                        this.selected = f.inArray(f(this).val(), c) >= 0
                    }),
                    c.length || (a.selectedIndex = -1),
                    c
                }
            }
        },
        "attrFn": {
            "val": !0,
            "css": !0,
            "html": !0,
            "text": !0,
            "data": !0,
            "width": !0,
            "height": !0,
            "offset": !0
        },
        "attrFix": {
            "tabindex": "tabIndex"
        },
        "attr": function(a, c, d, e) {
            var g = a.nodeType;
            if (!a || 3 === g || 8 === g || 2 === g)
                return b;
            if (e && c in f.attrFn)
                return f(a)[c](d);
            if (!("getAttribute"in a))
                return f.prop(a, c, d);
            var h, i, j = 1 !== g || !f.isXMLDoc(a);
            return j && (c = f.attrFix[c] || c,
            i = f.attrHooks[c],
            i || (t.test(c) ? i = v : u && (i = u))),
            d !== b ? null === d ? (f.removeAttr(a, c),
            b) : i && "set"in i && j && (h = i.set(a, d, c)) !== b ? h : (a.setAttribute(c, "" + d),
            d) : i && "get"in i && j && null !== (h = i.get(a, c)) ? h : (h = a.getAttribute(c),
            null === h ? b : h)
        },
        "removeAttr": function(a, b) {
            var c;
            1 === a.nodeType && (b = f.attrFix[b] || b,
            f.attr(a, b, ""),
            a.removeAttribute(b),
            t.test(b) && (c = f.propFix[b] || b)in a && (a[c] = !1))
        },
        "attrHooks": {
            "type": {
                "set": function(a, b) {
                    if (q.test(a.nodeName) && a.parentNode)
                        f.error("type property can't be changed");
                    else if (!f.support.radioValue && "radio" === b && f.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b),
                        c && (a.value = c),
                        b
                    }
                }
            },
            "value": {
                "get": function(a, b) {
                    return u && f.nodeName(a, "button") ? u.get(a, b) : b in a ? a.value : null
                },
                "set": function(a, b, c) {
                    return u && f.nodeName(a, "button") ? u.set(a, b, c) : void (a.value = b)
                }
            }
        },
        "propFix": {
            "tabindex": "tabIndex",
            "readonly": "readOnly",
            "for": "htmlFor",
            "class": "className",
            "maxlength": "maxLength",
            "cellspacing": "cellSpacing",
            "cellpadding": "cellPadding",
            "rowspan": "rowSpan",
            "colspan": "colSpan",
            "usemap": "useMap",
            "frameborder": "frameBorder",
            "contenteditable": "contentEditable"
        },
        "prop": function(a, c, d) {
            var e = a.nodeType;
            if (!a || 3 === e || 8 === e || 2 === e)
                return b;
            var g, h, i = 1 !== e || !f.isXMLDoc(a);
            return i && (c = f.propFix[c] || c,
            h = f.propHooks[c]),
            d !== b ? h && "set"in h && (g = h.set(a, d, c)) !== b ? g : a[c] = d : h && "get"in h && null !== (g = h.get(a, c)) ? g : a[c]
        },
        "propHooks": {
            "tabIndex": {
                "get": function(a) {
                    var c = a.getAttributeNode("tabindex");
                    return c && c.specified ? parseInt(c.value, 10) : r.test(a.nodeName) || s.test(a.nodeName) && a.href ? 0 : b
                }
            }
        }
    }),
    f.attrHooks.tabIndex = f.propHooks.tabIndex,
    v = {
        "get": function(a, c) {
            var d;
            return f.prop(a, c) === !0 || (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b
        },
        "set": function(a, b, c) {
            var d;
            return b === !1 ? f.removeAttr(a, c) : (d = f.propFix[c] || c,
            d in a && (a[d] = !0),
            a.setAttribute(c, c.toLowerCase())),
            c
        }
    },
    f.support.getSetAttribute || (u = f.valHooks.button = {
        "get": function(a, c) {
            var d;
            return d = a.getAttributeNode(c),
            d && "" !== d.nodeValue ? d.nodeValue : b
        },
        "set": function(a, b, d) {
            var e = a.getAttributeNode(d);
            return e || (e = c.createAttribute(d),
            a.setAttributeNode(e)),
            e.nodeValue = b + ""
        }
    },
    f.each(["width", "height"], function(a, b) {
        f.attrHooks[b] = f.extend(f.attrHooks[b], {
            "set": function(a, c) {
                return "" === c ? (a.setAttribute(b, "auto"),
                c) : void 0
            }
        })
    })),
    f.support.hrefNormalized || f.each(["href", "src", "width", "height"], function(a, c) {
        f.attrHooks[c] = f.extend(f.attrHooks[c], {
            "get": function(a) {
                var d = a.getAttribute(c, 2);
                return null === d ? b : d
            }
        })
    }),
    f.support.style || (f.attrHooks.style = {
        "get": function(a) {
            return a.style.cssText.toLowerCase() || b
        },
        "set": function(a, b) {
            return a.style.cssText = "" + b
        }
    }),
    f.support.optSelected || (f.propHooks.selected = f.extend(f.propHooks.selected, {
        "get": function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex,
            b.parentNode && b.parentNode.selectedIndex),
            null
        }
    })),
    f.support.checkOn || f.each(["radio", "checkbox"], function() {
        f.valHooks[this] = {
            "get": function(a) {
                return null === a.getAttribute("value") ? "on" : a.value
            }
        }
    }),
    f.each(["radio", "checkbox"], function() {
        f.valHooks[this] = f.extend(f.valHooks[this], {
            "set": function(a, b) {
                return f.isArray(b) ? a.checked = f.inArray(f(a).val(), b) >= 0 : void 0
            }
        })
    });
    var w = /\.(.*)$/
      , x = /^(?:textarea|input|select)$/i
      , y = /\./g
      , z = / /g
      , A = /[^\w\s.|`]/g
      , B = function(a) {
        return a.replace(A, "\\$&")
    };
    f.event = {
        "add": function(a, c, d, e) {
            if (3 !== a.nodeType && 8 !== a.nodeType) {
                if (d === !1)
                    d = C;
                else if (!d)
                    return;
                var g, h;
                d.handler && (g = d,
                d = g.handler),
                d.guid || (d.guid = f.guid++);
                var i = f._data(a);
                if (i) {
                    var j = i.events
                      , k = i.handle;
                    j || (i.events = j = {}),
                    k || (i.handle = k = function(a) {
                        return "undefined" == typeof f || a && f.event.triggered === a.type ? b : f.event.handle.apply(k.elem, arguments)
                    }
                    ),
                    k.elem = a,
                    c = c.split(" ");
                    for (var l, n, m = 0; l = c[m++]; ) {
                        h = g ? f.extend({}, g) : {
                            "handler": d,
                            "data": e
                        },
                        l.indexOf(".") > -1 ? (n = l.split("."),
                        l = n.shift(),
                        h.namespace = n.slice(0).sort().join(".")) : (n = [],
                        h.namespace = ""),
                        h.type = l,
                        h.guid || (h.guid = d.guid);
                        var o = j[l]
                          , p = f.event.special[l] || {};
                        o || (o = j[l] = [],
                        p.setup && p.setup.call(a, e, n, k) !== !1 || (a.addEventListener ? a.addEventListener(l, k, !1) : a.attachEvent && a.attachEvent("on" + l, k))),
                        p.add && (p.add.call(a, h),
                        h.handler.guid || (h.handler.guid = d.guid)),
                        o.push(h),
                        f.event.global[l] = !0
                    }
                    a = null
                }
            }
        },
        "global": {},
        "remove": function(a, c, d, e) {
            if (3 !== a.nodeType && 8 !== a.nodeType) {
                d === !1 && (d = C);
                var g, h, j, l, m, n, o, p, q, r, k = 0, s = f.hasData(a) && f._data(a), t = s && s.events;
                if (s && t)
                    if (c && c.type && (d = c.handler,
                    c = c.type),
                    !c || "string" == typeof c && "." === c.charAt(0)) {
                        c = c || "";
                        for (h in t)
                            f.event.remove(a, h + c)
                    } else {
                        for (c = c.split(" "); h = c[k++]; )
                            if (r = h,
                            q = null,
                            l = h.indexOf(".") < 0,
                            m = [],
                            l || (m = h.split("."),
                            h = m.shift(),
                            n = new RegExp("(^|\\.)" + f.map(m.slice(0).sort(), B).join("\\.(?:.*\\.)?") + "(\\.|$)")),
                            p = t[h])
                                if (d) {
                                    for (o = f.event.special[h] || {},
                                    j = e || 0; j < p.length && (q = p[j],
                                    d.guid !== q.guid || ((l || n.test(q.namespace)) && (null == e && p.splice(j--, 1),
                                    o.remove && o.remove.call(a, q)),
                                    null == e)); j++)
                                        ;
                                    (0 === p.length || null != e && 1 === p.length) && (o.teardown && o.teardown.call(a, m) !== !1 || f.removeEvent(a, h, s.handle),
                                    g = null,
                                    delete t[h])
                                } else
                                    for (j = 0; j < p.length; j++)
                                        q = p[j],
                                        (l || n.test(q.namespace)) && (f.event.remove(a, r, q.handler, j),
                                        p.splice(j--, 1));
                        if (f.isEmptyObject(t)) {
                            var u = s.handle;
                            u && (u.elem = null),
                            delete s.events,
                            delete s.handle,
                            f.isEmptyObject(s) && f.removeData(a, b, !0)
                        }
                    }
            }
        },
        "customEvent": {
            "getData": !0,
            "setData": !0,
            "changeData": !0
        },
        "trigger": function(c, d, e, g) {
            var j, h = c.type || c, i = [];
            if (h.indexOf("!") >= 0 && (h = h.slice(0, -1),
            j = !0),
            h.indexOf(".") >= 0 && (i = h.split("."),
            h = i.shift(),
            i.sort()),
            e && !f.event.customEvent[h] || f.event.global[h]) {
                if (c = "object" == typeof c ? c[f.expando] ? c : new f.Event(h,c) : new f.Event(h),
                c.type = h,
                c.exclusive = j,
                c.namespace = i.join("."),
                c.namespace_re = new RegExp("(^|\\.)" + i.join("\\.(?:.*\\.)?") + "(\\.|$)"),
                (g || !e) && (c.preventDefault(),
                c.stopPropagation()),
                !e)
                    return void f.each(f.cache, function() {
                        var a = f.expando
                          , b = this[a];
                        b && b.events && b.events[h] && f.event.trigger(c, d, b.handle.elem)
                    });
                if (3 !== e.nodeType && 8 !== e.nodeType) {
                    c.result = b,
                    c.target = e,
                    d = null != d ? f.makeArray(d) : [],
                    d.unshift(c);
                    var k = e
                      , l = h.indexOf(":") < 0 ? "on" + h : "";
                    do {
                        var m = f._data(k, "handle");
                        c.currentTarget = k,
                        m && m.apply(k, d),
                        l && f.acceptData(k) && k[l] && k[l].apply(k, d) === !1 && (c.result = !1,
                        c.preventDefault()),
                        k = k.parentNode || k.ownerDocument || k === c.target.ownerDocument && a
                    } while (k && !c.isPropagationStopped());if (!c.isDefaultPrevented()) {
                        var n, o = f.event.special[h] || {};
                        if (!(o._default && o._default.call(e.ownerDocument, c) !== !1 || "click" === h && f.nodeName(e, "a") || !f.acceptData(e))) {
                            try {
                                l && e[h] && (n = e[l],
                                n && (e[l] = null),
                                f.event.triggered = h,
                                e[h]())
                            } catch (p) {}
                            n && (e[l] = n),
                            f.event.triggered = b
                        }
                    }
                    return c.result
                }
            }
        },
        "handle": function(c) {
            c = f.event.fix(c || a.event);
            var d = ((f._data(this, "events") || {})[c.type] || []).slice(0)
              , e = !c.exclusive && !c.namespace
              , g = Array.prototype.slice.call(arguments, 0);
            g[0] = c,
            c.currentTarget = this;
            for (var h = 0, i = d.length; i > h; h++) {
                var j = d[h];
                if (e || c.namespace_re.test(j.namespace)) {
                    c.handler = j.handler,
                    c.data = j.data,
                    c.handleObj = j;
                    var k = j.handler.apply(this, g);
                    if (k !== b && (c.result = k,
                    k === !1 && (c.preventDefault(),
                    c.stopPropagation())),
                    c.isImmediatePropagationStopped())
                        break
                }
            }
            return c.result
        },
        "props": "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
        "fix": function(a) {
            if (a[f.expando])
                return a;
            var d = a;
            a = f.Event(d);
            for (var g, e = this.props.length; e; )
                g = this.props[--e],
                a[g] = d[g];
            if (a.target || (a.target = a.srcElement || c),
            3 === a.target.nodeType && (a.target = a.target.parentNode),
            !a.relatedTarget && a.fromElement && (a.relatedTarget = a.fromElement === a.target ? a.toElement : a.fromElement),
            null == a.pageX && null != a.clientX) {
                var h = a.target.ownerDocument || c
                  , i = h.documentElement
                  , j = h.body;
                a.pageX = a.clientX + (i && i.scrollLeft || j && j.scrollLeft || 0) - (i && i.clientLeft || j && j.clientLeft || 0),
                a.pageY = a.clientY + (i && i.scrollTop || j && j.scrollTop || 0) - (i && i.clientTop || j && j.clientTop || 0)
            }
            return null != a.which || null == a.charCode && null == a.keyCode || (a.which = null != a.charCode ? a.charCode : a.keyCode),
            !a.metaKey && a.ctrlKey && (a.metaKey = a.ctrlKey),
            a.which || a.button === b || (a.which = 1 & a.button ? 1 : 2 & a.button ? 3 : 4 & a.button ? 2 : 0),
            a
        },
        "guid": 1e8,
        "proxy": f.proxy,
        "special": {
            "ready": {
                "setup": f.bindReady,
                "teardown": f.noop
            },
            "live": {
                "add": function(a) {
                    f.event.add(this, M(a.origType, a.selector), f.extend({}, a, {
                        "handler": L,
                        "guid": a.handler.guid
                    }))
                },
                "remove": function(a) {
                    f.event.remove(this, M(a.origType, a.selector), a)
                }
            },
            "beforeunload": {
                "setup": function(a, b, c) {
                    f.isWindow(this) && (this.onbeforeunload = c)
                },
                "teardown": function(a, b) {
                    this.onbeforeunload === b && (this.onbeforeunload = null)
                }
            }
        }
    },
    f.removeEvent = c.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }
    : function(a, b, c) {
        a.detachEvent && a.detachEvent("on" + b, c)
    }
    ,
    f.Event = function(a, b) {
        return this.preventDefault ? (a && a.type ? (this.originalEvent = a,
        this.type = a.type,
        this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? D : C) : this.type = a,
        b && f.extend(this, b),
        this.timeStamp = f.now(),
        void (this[f.expando] = !0)) : new f.Event(a,b)
    }
    ,
    f.Event.prototype = {
        "preventDefault": function() {
            this.isDefaultPrevented = D;
            var a = this.originalEvent;
            a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        "stopPropagation": function() {
            this.isPropagationStopped = D;
            var a = this.originalEvent;
            a && (a.stopPropagation && a.stopPropagation(),
            a.cancelBubble = !0)
        },
        "stopImmediatePropagation": function() {
            this.isImmediatePropagationStopped = D,
            this.stopPropagation()
        },
        "isDefaultPrevented": C,
        "isPropagationStopped": C,
        "isImmediatePropagationStopped": C
    };
    var E = function(a) {
        var b = a.relatedTarget
          , c = !1
          , d = a.type;
        a.type = a.data,
        b !== this && (b && (c = f.contains(this, b)),
        c || (f.event.handle.apply(this, arguments),
        a.type = d))
    }
      , F = function(a) {
        a.type = a.data,
        f.event.handle.apply(this, arguments)
    };
    if (f.each({
        "mouseenter": "mouseover",
        "mouseleave": "mouseout"
    }, function(a, b) {
        f.event.special[a] = {
            "setup": function(c) {
                f.event.add(this, b, c && c.selector ? F : E, a)
            },
            "teardown": function(a) {
                f.event.remove(this, b, a && a.selector ? F : E)
            }
        }
    }),
    f.support.submitBubbles || (f.event.special.submit = {
        "setup": function() {
            return f.nodeName(this, "form") ? !1 : (f.event.add(this, "click.specialSubmit", function(a) {
                var b = a.target
                  , c = f.nodeName(b, "input") || f.nodeName(b, "button") ? b.type : "";
                "submit" !== c && "image" !== c || !f(b).closest("form").length || J("submit", this, arguments)
            }),
            void f.event.add(this, "keypress.specialSubmit", function(a) {
                var b = a.target
                  , c = f.nodeName(b, "input") || f.nodeName(b, "button") ? b.type : "";
                "text" !== c && "password" !== c || !f(b).closest("form").length || 13 !== a.keyCode || J("submit", this, arguments)
            }))
        },
        "teardown": function() {
            f.event.remove(this, ".specialSubmit")
        }
    }),
    !f.support.changeBubbles) {
        var G, H = function(a) {
            var b = f.nodeName(a, "input") ? a.type : ""
              , c = a.value;
            return "radio" === b || "checkbox" === b ? c = a.checked : "select-multiple" === b ? c = a.selectedIndex > -1 ? f.map(a.options, function(a) {
                return a.selected
            }).join("-") : "" : f.nodeName(a, "select") && (c = a.selectedIndex),
            c
        }, I = function(a) {
            var d, e, c = a.target;
            x.test(c.nodeName) && !c.readOnly && (d = f._data(c, "_change_data"),
            e = H(c),
            ("focusout" !== a.type || "radio" !== c.type) && f._data(c, "_change_data", e),
            d !== b && e !== d && (null != d || e) && (a.type = "change",
            a.liveFired = b,
            f.event.trigger(a, arguments[1], c)))
        };
        f.event.special.change = {
            "filters": {
                "focusout": I,
                "beforedeactivate": I,
                "click": function(a) {
                    var b = a.target
                      , c = f.nodeName(b, "input") ? b.type : "";
                    ("radio" === c || "checkbox" === c || f.nodeName(b, "select")) && I.call(this, a)
                },
                "keydown": function(a) {
                    var b = a.target
                      , c = f.nodeName(b, "input") ? b.type : "";
                    (13 === a.keyCode && !f.nodeName(b, "textarea") || 32 === a.keyCode && ("checkbox" === c || "radio" === c) || "select-multiple" === c) && I.call(this, a)
                },
                "beforeactivate": function(a) {
                    var b = a.target;
                    f._data(b, "_change_data", H(b))
                }
            },
            "setup": function() {
                if ("file" === this.type)
                    return !1;
                for (var c in G)
                    f.event.add(this, c + ".specialChange", G[c]);
                return x.test(this.nodeName)
            },
            "teardown": function() {
                return f.event.remove(this, ".specialChange"),
                x.test(this.nodeName)
            }
        },
        G = f.event.special.change.filters,
        G.focus = G.beforeactivate
    }
    f.support.focusinBubbles || f.each({
        "focus": "focusin",
        "blur": "focusout"
    }, function(a, b) {
        function e(a) {
            var c = f.event.fix(a);
            c.type = b,
            c.originalEvent = {},
            f.event.trigger(c, null, c.target),
            c.isDefaultPrevented() && a.preventDefault()
        }
        var d = 0;
        f.event.special[b] = {
            "setup": function() {
                0 === d++ && c.addEventListener(a, e, !0)
            },
            "teardown": function() {
                0 === --d && c.removeEventListener(a, e, !0)
            }
        }
    }),
    f.each(["bind", "one"], function(a, c) {
        f.fn[c] = function(a, d, e) {
            var g;
            if ("object" == typeof a) {
                for (var h in a)
                    this[c](h, d, a[h], e);
                return this
            }
            if ((2 === arguments.length || d === !1) && (e = d,
            d = b),
            "one" === c ? (g = function(a) {
                return f(this).unbind(a, g),
                e.apply(this, arguments)
            }
            ,
            g.guid = e.guid || f.guid++) : g = e,
            "unload" === a && "one" !== c)
                this.one(a, d, e);
            else
                for (var i = 0, j = this.length; j > i; i++)
                    f.event.add(this[i], a, g, d);
            return this
        }
    }),
    f.fn.extend({
        "unbind": function(a, b) {
            if ("object" != typeof a || a.preventDefault)
                for (var d = 0, e = this.length; e > d; d++)
                    f.event.remove(this[d], a, b);
            else
                for (var c in a)
                    this.unbind(c, a[c]);
            return this
        },
        "delegate": function(a, b, c, d) {
            return this.live(b, c, d, a)
        },
        "undelegate": function(a, b, c) {
            return 0 === arguments.length ? this.unbind("live") : this.die(b, null, c, a)
        },
        "trigger": function(a, b) {
            return this.each(function() {
                f.event.trigger(a, b, this)
            })
        },
        "triggerHandler": function(a, b) {
            return this[0] ? f.event.trigger(a, b, this[0], !0) : void 0
        },
        "toggle": function(a) {
            var b = arguments
              , c = a.guid || f.guid++
              , d = 0
              , e = function(c) {
                var e = (f.data(this, "lastToggle" + a.guid) || 0) % d;
                return f.data(this, "lastToggle" + a.guid, e + 1),
                c.preventDefault(),
                b[e].apply(this, arguments) || !1
            };
            for (e.guid = c; d < b.length; )
                b[d++].guid = c;
            return this.click(e)
        },
        "hover": function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    });
    var K = {
        "focus": "focusin",
        "blur": "focusout",
        "mouseenter": "mouseover",
        "mouseleave": "mouseout"
    };
    f.each(["live", "die"], function(a, c) {
        f.fn[c] = function(a, d, e, g) {
            var h, j, k, l, i = 0, m = g || this.selector, n = g ? this : f(this.context);
            if ("object" == typeof a && !a.preventDefault) {
                for (var o in a)
                    n[c](o, d, a[o], m);
                return this
            }
            if ("die" === c && !a && g && "." === g.charAt(0))
                return n.unbind(g),
                this;
            for ((d === !1 || f.isFunction(d)) && (e = d || C,
            d = b),
            a = (a || "").split(" "); null != (h = a[i++]); )
                if (j = w.exec(h),
                k = "",
                j && (k = j[0],
                h = h.replace(w, "")),
                "hover" !== h)
                    if (l = h,
                    K[h] ? (a.push(K[h] + k),
                    h += k) : h = (K[h] || h) + k,
                    "live" === c)
                        for (var p = 0, q = n.length; q > p; p++)
                            f.event.add(n[p], "live." + M(h, m), {
                                "data": d,
                                "selector": m,
                                "handler": e,
                                "origType": h,
                                "origHandler": e,
                                "preType": l
                            });
                    else
                        n.unbind("live." + M(h, m), e);
                else
                    a.push("mouseenter" + k, "mouseleave" + k);
            return this
        }
    }),
    f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "), function(a, b) {
        f.fn[b] = function(a, c) {
            return null == c && (c = a,
            a = null),
            arguments.length > 0 ? this.bind(b, a, c) : this.trigger(b)
        }
        ,
        f.attrFn && (f.attrFn[b] = !0)
    }),
    function() {
        function t(a, b, c, d, e, f) {
            for (var g = 0, h = d.length; h > g; g++) {
                var i = d[g];
                if (i) {
                    var j = !1;
                    for (i = i[a]; i; ) {
                        if (i.sizcache === c) {
                            j = d[i.sizset];
                            break
                        }
                        if (1 !== i.nodeType || f || (i.sizcache = c,
                        i.sizset = g),
                        i.nodeName.toLowerCase() === b) {
                            j = i;
                            break
                        }
                        i = i[a]
                    }
                    d[g] = j
                }
            }
        }
        function u(a, b, c, d, e, f) {
            for (var g = 0, h = d.length; h > g; g++) {
                var i = d[g];
                if (i) {
                    var j = !1;
                    for (i = i[a]; i; ) {
                        if (i.sizcache === c) {
                            j = d[i.sizset];
                            break
                        }
                        if (1 === i.nodeType)
                            if (f || (i.sizcache = c,
                            i.sizset = g),
                            "string" != typeof b) {
                                if (i === b) {
                                    j = !0;
                                    break
                                }
                            } else if (k.filter(b, [i]).length > 0) {
                                j = i;
                                break
                            }
                        i = i[a]
                    }
                    d[g] = j
                }
            }
        }
        var a = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g
          , d = 0
          , e = Object.prototype.toString
          , g = !1
          , h = !0
          , i = /\\/g
          , j = /\W/;
        [0, 0].sort(function() {
            return h = !1,
            0
        });
        var k = function(b, d, f, g) {
            f = f || [],
            d = d || c;
            var h = d;
            if (1 !== d.nodeType && 9 !== d.nodeType)
                return [];
            if (!b || "string" != typeof b)
                return f;
            var i, j, n, o, q, r, s, t, u = !0, w = k.isXML(d), x = [], y = b;
            do
                if (a.exec(""),
                i = a.exec(y),
                i && (y = i[3],
                x.push(i[1]),
                i[2])) {
                    o = i[3];
                    break
                }
            while (i);if (x.length > 1 && m.exec(b))
                if (2 === x.length && l.relative[x[0]])
                    j = v(x[0] + x[1], d);
                else
                    for (j = l.relative[x[0]] ? [d] : k(x.shift(), d); x.length; )
                        b = x.shift(),
                        l.relative[b] && (b += x.shift()),
                        j = v(b, j);
            else if (!g && x.length > 1 && 9 === d.nodeType && !w && l.match.ID.test(x[0]) && !l.match.ID.test(x[x.length - 1]) && (q = k.find(x.shift(), d, w),
            d = q.expr ? k.filter(q.expr, q.set)[0] : q.set[0]),
            d)
                for (q = g ? {
                    "expr": x.pop(),
                    "set": p(g)
                } : k.find(x.pop(), 1 !== x.length || "~" !== x[0] && "+" !== x[0] || !d.parentNode ? d : d.parentNode, w),
                j = q.expr ? k.filter(q.expr, q.set) : q.set,
                x.length > 0 ? n = p(j) : u = !1; x.length; )
                    r = x.pop(),
                    s = r,
                    l.relative[r] ? s = x.pop() : r = "",
                    null == s && (s = d),
                    l.relative[r](n, s, w);
            else
                n = x = [];
            if (n || (n = j),
            n || k.error(r || b),
            "[object Array]" === e.call(n))
                if (u)
                    if (d && 1 === d.nodeType)
                        for (t = 0; null != n[t]; t++)
                            n[t] && (n[t] === !0 || 1 === n[t].nodeType && k.contains(d, n[t])) && f.push(j[t]);
                    else
                        for (t = 0; null != n[t]; t++)
                            n[t] && 1 === n[t].nodeType && f.push(j[t]);
                else
                    f.push.apply(f, n);
            else
                p(n, f);
            return o && (k(o, h, f, g),
            k.uniqueSort(f)),
            f
        };
        k.uniqueSort = function(a) {
            if (r && (g = h,
            a.sort(r),
            g))
                for (var b = 1; b < a.length; b++)
                    a[b] === a[b - 1] && a.splice(b--, 1);
            return a
        }
        ,
        k.matches = function(a, b) {
            return k(a, null, null, b)
        }
        ,
        k.matchesSelector = function(a, b) {
            return k(b, null, null, [a]).length > 0
        }
        ,
        k.find = function(a, b, c) {
            var d;
            if (!a)
                return [];
            for (var e = 0, f = l.order.length; f > e; e++) {
                var g, h = l.order[e];
                if (g = l.leftMatch[h].exec(a)) {
                    var j = g[1];
                    if (g.splice(1, 1),
                    "\\" !== j.substr(j.length - 1) && (g[1] = (g[1] || "").replace(i, ""),
                    d = l.find[h](g, b, c),
                    null != d)) {
                        a = a.replace(l.match[h], "");
                        break
                    }
                }
            }
            return d || (d = "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName("*") : []),
            {
                "set": d,
                "expr": a
            }
        }
        ,
        k.filter = function(a, c, d, e) {
            for (var f, g, h = a, i = [], j = c, m = c && c[0] && k.isXML(c[0]); a && c.length; ) {
                for (var n in l.filter)
                    if (null != (f = l.leftMatch[n].exec(a)) && f[2]) {
                        var o, p, q = l.filter[n], r = f[1];
                        if (g = !1,
                        f.splice(1, 1),
                        "\\" === r.substr(r.length - 1))
                            continue;
                        if (j === i && (i = []),
                        l.preFilter[n])
                            if (f = l.preFilter[n](f, j, d, i, e, m)) {
                                if (f === !0)
                                    continue
                            } else
                                g = o = !0;
                        if (f)
                            for (var s = 0; null != (p = j[s]); s++)
                                if (p) {
                                    o = q(p, f, s, j);
                                    var t = e ^ !!o;
                                    d && null != o ? t ? g = !0 : j[s] = !1 : t && (i.push(p),
                                    g = !0)
                                }
                        if (o !== b) {
                            if (d || (j = i),
                            a = a.replace(l.match[n], ""),
                            !g)
                                return [];
                            break
                        }
                    }
                if (a === h) {
                    if (null != g)
                        break;
                    k.error(a)
                }
                h = a
            }
            return j
        }
        ,
        k.error = function(a) {
            throw "Syntax error, unrecognized expression: " + a
        }
        ;
        var l = k.selectors = {
            "order": ["ID", "NAME", "TAG"],
            "match": {
                "ID": /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                "CLASS": /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                "NAME": /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                "ATTR": /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                "TAG": /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                "CHILD": /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                "POS": /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                "PSEUDO": /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
            },
            "leftMatch": {},
            "attrMap": {
                "class": "className",
                "for": "htmlFor"
            },
            "attrHandle": {
                "href": function(a) {
                    return a.getAttribute("href")
                },
                "type": function(a) {
                    return a.getAttribute("type")
                }
            },
            "relative": {
                "+": function(a, b) {
                    var c = "string" == typeof b
                      , d = c && !j.test(b)
                      , e = c && !d;
                    d && (b = b.toLowerCase());
                    for (var h, f = 0, g = a.length; g > f; f++)
                        if (h = a[f]) {
                            for (; (h = h.previousSibling) && 1 !== h.nodeType; )
                                ;
                            a[f] = e || h && h.nodeName.toLowerCase() === b ? h || !1 : h === b
                        }
                    e && k.filter(b, a, !0)
                },
                ">": function(a, b) {
                    var c, d = "string" == typeof b, e = 0, f = a.length;
                    if (d && !j.test(b)) {
                        for (b = b.toLowerCase(); f > e; e++)
                            if (c = a[e]) {
                                var g = c.parentNode;
                                a[e] = g.nodeName.toLowerCase() === b ? g : !1
                            }
                    } else {
                        for (; f > e; e++)
                            c = a[e],
                            c && (a[e] = d ? c.parentNode : c.parentNode === b);
                        d && k.filter(b, a, !0)
                    }
                },
                "": function(a, b, c) {
                    var e, f = d++, g = u;
                    "string" != typeof b || j.test(b) || (b = b.toLowerCase(),
                    e = b,
                    g = t),
                    g("parentNode", b, f, a, e, c)
                },
                "~": function(a, b, c) {
                    var e, f = d++, g = u;
                    "string" != typeof b || j.test(b) || (b = b.toLowerCase(),
                    e = b,
                    g = t),
                    g("previousSibling", b, f, a, e, c)
                }
            },
            "find": {
                "ID": function(a, b, c) {
                    if ("undefined" != typeof b.getElementById && !c) {
                        var d = b.getElementById(a[1]);
                        return d && d.parentNode ? [d] : []
                    }
                },
                "NAME": function(a, b) {
                    if ("undefined" != typeof b.getElementsByName) {
                        for (var c = [], d = b.getElementsByName(a[1]), e = 0, f = d.length; f > e; e++)
                            d[e].getAttribute("name") === a[1] && c.push(d[e]);
                        return 0 === c.length ? null : c
                    }
                },
                "TAG": function(a, b) {
                    return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a[1]) : void 0
                }
            },
            "preFilter": {
                "CLASS": function(a, b, c, d, e, f) {
                    if (a = " " + a[1].replace(i, "") + " ",
                    f)
                        return a;
                    for (var h, g = 0; null != (h = b[g]); g++)
                        h && (e ^ (h.className && (" " + h.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? c || d.push(h) : c && (b[g] = !1));
                    return !1
                },
                "ID": function(a) {
                    return a[1].replace(i, "")
                },
                "TAG": function(a) {
                    return a[1].replace(i, "").toLowerCase()
                },
                "CHILD": function(a) {
                    if ("nth" === a[1]) {
                        a[2] || k.error(a[0]),
                        a[2] = a[2].replace(/^\+|\s*/g, "");
                        var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec("even" === a[2] && "2n" || "odd" === a[2] && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
                        a[2] = b[1] + (b[2] || 1) - 0,
                        a[3] = b[3] - 0
                    } else
                        a[2] && k.error(a[0]);
                    return a[0] = d++,
                    a
                },
                "ATTR": function(a, b, c, d, e, f) {
                    var g = a[1] = a[1].replace(i, "");
                    return !f && l.attrMap[g] && (a[1] = l.attrMap[g]),
                    a[4] = (a[4] || a[5] || "").replace(i, ""),
                    "~=" === a[2] && (a[4] = " " + a[4] + " "),
                    a
                },
                "PSEUDO": function(b, c, d, e, f) {
                    if ("not" === b[1]) {
                        if (!((a.exec(b[3]) || "").length > 1 || /^\w/.test(b[3]))) {
                            var g = k.filter(b[3], c, d, !0 ^ f);
                            return d || e.push.apply(e, g),
                            !1
                        }
                        b[3] = k(b[3], null, null, c)
                    } else if (l.match.POS.test(b[0]) || l.match.CHILD.test(b[0]))
                        return !0;
                    return b
                },
                "POS": function(a) {
                    return a.unshift(!0),
                    a
                }
            },
            "filters": {
                "enabled": function(a) {
                    return a.disabled === !1 && "hidden" !== a.type
                },
                "disabled": function(a) {
                    return a.disabled === !0
                },
                "checked": function(a) {
                    return a.checked === !0
                },
                "selected": function(a) {
                    return a.parentNode && a.parentNode.selectedIndex,
                    a.selected === !0
                },
                "parent": function(a) {
                    return !!a.firstChild
                },
                "empty": function(a) {
                    return !a.firstChild
                },
                "has": function(a, b, c) {
                    return !!k(c[3], a).length
                },
                "header": function(a) {
                    return /h\d/i.test(a.nodeName)
                },
                "text": function(a) {
                    var b = a.getAttribute("type")
                      , c = a.type;
                    return "input" === a.nodeName.toLowerCase() && "text" === c && (b === c || null === b)
                },
                "radio": function(a) {
                    return "input" === a.nodeName.toLowerCase() && "radio" === a.type
                },
                "checkbox": function(a) {
                    return "input" === a.nodeName.toLowerCase() && "checkbox" === a.type
                },
                "file": function(a) {
                    return "input" === a.nodeName.toLowerCase() && "file" === a.type
                },
                "password": function(a) {
                    return "input" === a.nodeName.toLowerCase() && "password" === a.type
                },
                "submit": function(a) {
                    var b = a.nodeName.toLowerCase();
                    return ("input" === b || "button" === b) && "submit" === a.type
                },
                "image": function(a) {
                    return "input" === a.nodeName.toLowerCase() && "image" === a.type
                },
                "reset": function(a) {
                    var b = a.nodeName.toLowerCase();
                    return ("input" === b || "button" === b) && "reset" === a.type
                },
                "button": function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                "input": function(a) {
                    return /input|select|textarea|button/i.test(a.nodeName)
                },
                "focus": function(a) {
                    return a === a.ownerDocument.activeElement
                }
            },
            "setFilters": {
                "first": function(a, b) {
                    return 0 === b
                },
                "last": function(a, b, c, d) {
                    return b === d.length - 1
                },
                "even": function(a, b) {
                    return b % 2 === 0
                },
                "odd": function(a, b) {
                    return b % 2 === 1
                },
                "lt": function(a, b, c) {
                    return b < c[3] - 0
                },
                "gt": function(a, b, c) {
                    return b > c[3] - 0
                },
                "nth": function(a, b, c) {
                    return c[3] - 0 === b
                },
                "eq": function(a, b, c) {
                    return c[3] - 0 === b
                }
            },
            "filter": {
                "PSEUDO": function(a, b, c, d) {
                    var e = b[1]
                      , f = l.filters[e];
                    if (f)
                        return f(a, c, b, d);
                    if ("contains" === e)
                        return (a.textContent || a.innerText || k.getText([a]) || "").indexOf(b[3]) >= 0;
                    if ("not" === e) {
                        for (var g = b[3], h = 0, i = g.length; i > h; h++)
                            if (g[h] === a)
                                return !1;
                        return !0
                    }
                    k.error(e)
                },
                "CHILD": function(a, b) {
                    var c = b[1]
                      , d = a;
                    switch (c) {
                    case "only":
                    case "first":
                        for (; d = d.previousSibling; )
                            if (1 === d.nodeType)
                                return !1;
                        if ("first" === c)
                            return !0;
                        d = a;
                    case "last":
                        for (; d = d.nextSibling; )
                            if (1 === d.nodeType)
                                return !1;
                        return !0;
                    case "nth":
                        var e = b[2]
                          , f = b[3];
                        if (1 === e && 0 === f)
                            return !0;
                        var g = b[0]
                          , h = a.parentNode;
                        if (h && (h.sizcache !== g || !a.nodeIndex)) {
                            var i = 0;
                            for (d = h.firstChild; d; d = d.nextSibling)
                                1 === d.nodeType && (d.nodeIndex = ++i);
                            h.sizcache = g
                        }
                        var j = a.nodeIndex - f;
                        return 0 === e ? 0 === j : j % e === 0 && j / e >= 0
                    }
                },
                "ID": function(a, b) {
                    return 1 === a.nodeType && a.getAttribute("id") === b
                },
                "TAG": function(a, b) {
                    return "*" === b && 1 === a.nodeType || a.nodeName.toLowerCase() === b
                },
                "CLASS": function(a, b) {
                    return (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1
                },
                "ATTR": function(a, b) {
                    var c = b[1]
                      , d = l.attrHandle[c] ? l.attrHandle[c](a) : null != a[c] ? a[c] : a.getAttribute(c)
                      , e = d + ""
                      , f = b[2]
                      , g = b[4];
                    return null == d ? "!=" === f : "=" === f ? e === g : "*=" === f ? e.indexOf(g) >= 0 : "~=" === f ? (" " + e + " ").indexOf(g) >= 0 : g ? "!=" === f ? e !== g : "^=" === f ? 0 === e.indexOf(g) : "$=" === f ? e.substr(e.length - g.length) === g : "|=" === f ? e === g || e.substr(0, g.length + 1) === g + "-" : !1 : e && d !== !1
                },
                "POS": function(a, b, c, d) {
                    var e = b[2]
                      , f = l.setFilters[e];
                    return f ? f(a, c, b, d) : void 0
                }
            }
        }
          , m = l.match.POS
          , n = function(a, b) {
            return "\\" + (b - 0 + 1)
        };
        for (var o in l.match)
            l.match[o] = new RegExp(l.match[o].source + /(?![^\[]*\])(?![^\(]*\))/.source),
            l.leftMatch[o] = new RegExp(/(^(?:.|\r|\n)*?)/.source + l.match[o].source.replace(/\\(\d+)/g, n));
        var p = function(a, b) {
            return a = Array.prototype.slice.call(a, 0),
            b ? (b.push.apply(b, a),
            b) : a
        };
        try {
            Array.prototype.slice.call(c.documentElement.childNodes, 0)[0].nodeType
        } catch (q) {
            p = function(a, b) {
                var c = 0
                  , d = b || [];
                if ("[object Array]" === e.call(a))
                    Array.prototype.push.apply(d, a);
                else if ("number" == typeof a.length)
                    for (var f = a.length; f > c; c++)
                        d.push(a[c]);
                else
                    for (; a[c]; c++)
                        d.push(a[c]);
                return d
            }
        }
        var r, s;
        c.documentElement.compareDocumentPosition ? r = function(a, b) {
            return a === b ? (g = !0,
            0) : a.compareDocumentPosition && b.compareDocumentPosition ? 4 & a.compareDocumentPosition(b) ? -1 : 1 : a.compareDocumentPosition ? -1 : 1
        }
        : (r = function(a, b) {
            if (a === b)
                return g = !0,
                0;
            if (a.sourceIndex && b.sourceIndex)
                return a.sourceIndex - b.sourceIndex;
            var c, d, e = [], f = [], h = a.parentNode, i = b.parentNode, j = h;
            if (h === i)
                return s(a, b);
            if (!h)
                return -1;
            if (!i)
                return 1;
            for (; j; )
                e.unshift(j),
                j = j.parentNode;
            for (j = i; j; )
                f.unshift(j),
                j = j.parentNode;
            c = e.length,
            d = f.length;
            for (var k = 0; c > k && d > k; k++)
                if (e[k] !== f[k])
                    return s(e[k], f[k]);
            return k === c ? s(a, f[k], -1) : s(e[k], b, 1)
        }
        ,
        s = function(a, b, c) {
            if (a === b)
                return c;
            for (var d = a.nextSibling; d; ) {
                if (d === b)
                    return -1;
                d = d.nextSibling
            }
            return 1
        }
        ),
        k.getText = function(a) {
            for (var c, b = "", d = 0; a[d]; d++)
                c = a[d],
                3 === c.nodeType || 4 === c.nodeType ? b += c.nodeValue : 8 !== c.nodeType && (b += k.getText(c.childNodes));
            return b
        }
        ,
        function() {
            var a = c.createElement("div")
              , d = "script" + (new Date).getTime()
              , e = c.documentElement;
            a.innerHTML = "<a name='" + d + "'/>",
            e.insertBefore(a, e.firstChild),
            c.getElementById(d) && (l.find.ID = function(a, c, d) {
                if ("undefined" != typeof c.getElementById && !d) {
                    var e = c.getElementById(a[1]);
                    return e ? e.id === a[1] || "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id").nodeValue === a[1] ? [e] : b : []
                }
            }
            ,
            l.filter.ID = function(a, b) {
                var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                return 1 === a.nodeType && c && c.nodeValue === b
            }
            ),
            e.removeChild(a),
            e = a = null
        }(),
        function() {
            var a = c.createElement("div");
            a.appendChild(c.createComment("")),
            a.getElementsByTagName("*").length > 0 && (l.find.TAG = function(a, b) {
                var c = b.getElementsByTagName(a[1]);
                if ("*" === a[1]) {
                    for (var d = [], e = 0; c[e]; e++)
                        1 === c[e].nodeType && d.push(c[e]);
                    c = d
                }
                return c
            }
            ),
            a.innerHTML = "<a href='#'></a>",
            a.firstChild && "undefined" != typeof a.firstChild.getAttribute && "#" !== a.firstChild.getAttribute("href") && (l.attrHandle.href = function(a) {
                return a.getAttribute("href", 2)
            }
            ),
            a = null
        }(),
        c.querySelectorAll && !function() {
            var a = k
              , b = c.createElement("div")
              , d = "__sizzle__";
            if (b.innerHTML = "<p class='TEST'></p>",
            !b.querySelectorAll || 0 !== b.querySelectorAll(".TEST").length) {
                k = function(b, e, f, g) {
                    if (e = e || c,
                    !g && !k.isXML(e)) {
                        var h = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
                        if (h && (1 === e.nodeType || 9 === e.nodeType)) {
                            if (h[1])
                                return p(e.getElementsByTagName(b), f);
                            if (h[2] && l.find.CLASS && e.getElementsByClassName)
                                return p(e.getElementsByClassName(h[2]), f)
                        }
                        if (9 === e.nodeType) {
                            if ("body" === b && e.body)
                                return p([e.body], f);
                            if (h && h[3]) {
                                var i = e.getElementById(h[3]);
                                if (!i || !i.parentNode)
                                    return p([], f);
                                if (i.id === h[3])
                                    return p([i], f)
                            }
                            try {
                                return p(e.querySelectorAll(b), f)
                            } catch (j) {}
                        } else if (1 === e.nodeType && "object" !== e.nodeName.toLowerCase()) {
                            var m = e
                              , n = e.getAttribute("id")
                              , o = n || d
                              , q = e.parentNode
                              , r = /^\s*[+~]/.test(b);
                            n ? o = o.replace(/'/g, "\\$&") : e.setAttribute("id", o),
                            r && q && (e = e.parentNode);
                            try {
                                if (!r || q)
                                    return p(e.querySelectorAll("[id='" + o + "'] " + b), f)
                            } catch (s) {} finally {
                                n || m.removeAttribute("id")
                            }
                        }
                    }
                    return a(b, e, f, g)
                }
                ;
                for (var e in a)
                    k[e] = a[e];
                b = null
            }
        }(),
        function() {
            var a = c.documentElement
              , b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
            if (b) {
                var d = !b.call(c.createElement("div"), "div")
                  , e = !1;
                try {
                    b.call(c.documentElement, "[test!='']:sizzle")
                } catch (f) {
                    e = !0
                }
                k.matchesSelector = function(a, c) {
                    if (c = c.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']"),
                    !k.isXML(a))
                        try {
                            if (e || !l.match.PSEUDO.test(c) && !/!=/.test(c)) {
                                var f = b.call(a, c);
                                if (f || !d || a.document && 11 !== a.document.nodeType)
                                    return f
                            }
                        } catch (g) {}
                    return k(c, null, null, [a]).length > 0
                }
            }
        }(),
        function() {
            var a = c.createElement("div");
            a.innerHTML = "<div class='test e'></div><div class='test'></div>",
            a.getElementsByClassName && 0 !== a.getElementsByClassName("e").length && (a.lastChild.className = "e",
            1 !== a.getElementsByClassName("e").length && (l.order.splice(1, 0, "CLASS"),
            l.find.CLASS = function(a, b, c) {
                return "undefined" == typeof b.getElementsByClassName || c ? void 0 : b.getElementsByClassName(a[1])
            }
            ,
            a = null))
        }(),
        k.contains = c.documentElement.contains ? function(a, b) {
            return a !== b && (a.contains ? a.contains(b) : !0)
        }
        : c.documentElement.compareDocumentPosition ? function(a, b) {
            return !!(16 & a.compareDocumentPosition(b))
        }
        : function() {
            return !1
        }
        ,
        k.isXML = function(a) {
            var b = (a ? a.ownerDocument || a : 0).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }
        ;
        var v = function(a, b) {
            for (var c, d = [], e = "", f = b.nodeType ? [b] : b; c = l.match.PSEUDO.exec(a); )
                e += c[0],
                a = a.replace(l.match.PSEUDO, "");
            a = l.relative[a] ? a + "*" : a;
            for (var g = 0, h = f.length; h > g; g++)
                k(a, f[g], d);
            return k.filter(e, d)
        };
        f.find = k,
        f.expr = k.selectors,
        f.expr[":"] = f.expr.filters,
        f.unique = k.uniqueSort,
        f.text = k.getText,
        f.isXMLDoc = k.isXML,
        f.contains = k.contains
    }();
    var N = /Until$/
      , O = /^(?:parents|prevUntil|prevAll)/
      , P = /,/
      , Q = /^.[^:#\[\.,]*$/
      , R = Array.prototype.slice
      , S = f.expr.match.POS
      , T = {
        "children": !0,
        "contents": !0,
        "next": !0,
        "prev": !0
    };
    f.fn.extend({
        "find": function(a) {
            var c, d, b = this;
            if ("string" != typeof a)
                return f(a).filter(function() {
                    for (c = 0,
                    d = b.length; d > c; c++)
                        if (f.contains(b[c], this))
                            return !0
                });
            var g, h, i, e = this.pushStack("", "find", a);
            for (c = 0,
            d = this.length; d > c; c++)
                if (g = e.length,
                f.find(a, this[c], e),
                c > 0)
                    for (h = g; h < e.length; h++)
                        for (i = 0; g > i; i++)
                            if (e[i] === e[h]) {
                                e.splice(h--, 1);
                                break
                            }
            return e
        },
        "has": function(a) {
            var b = f(a);
            return this.filter(function() {
                for (var a = 0, c = b.length; c > a; a++)
                    if (f.contains(this, b[a]))
                        return !0
            })
        },
        "not": function(a) {
            return this.pushStack(V(this, a, !1), "not", a)
        },
        "filter": function(a) {
            return this.pushStack(V(this, a, !0), "filter", a)
        },
        "is": function(a) {
            return !!a && ("string" == typeof a ? f.filter(a, this).length > 0 : this.filter(a).length > 0)
        },
        "closest": function(a, b) {
            var d, e, c = [], g = this[0];
            if (f.isArray(a)) {
                var h, i, j = {}, k = 1;
                if (g && a.length) {
                    for (d = 0,
                    e = a.length; e > d; d++)
                        i = a[d],
                        j[i] || (j[i] = S.test(i) ? f(i, b || this.context) : i);
                    for (; g && g.ownerDocument && g !== b; ) {
                        for (i in j)
                            h = j[i],
                            (h.jquery ? h.index(g) > -1 : f(g).is(h)) && c.push({
                                "selector": i,
                                "elem": g,
                                "level": k
                            });
                        g = g.parentNode,
                        k++
                    }
                }
                return c
            }
            var l = S.test(a) || "string" != typeof a ? f(a, b || this.context) : 0;
            for (d = 0,
            e = this.length; e > d; d++)
                for (g = this[d]; g; ) {
                    if (l ? l.index(g) > -1 : f.find.matchesSelector(g, a)) {
                        c.push(g);
                        break
                    }
                    if (g = g.parentNode,
                    !g || !g.ownerDocument || g === b || 11 === g.nodeType)
                        break
                }
            return c = c.length > 1 ? f.unique(c) : c,
            this.pushStack(c, "closest", a)
        },
        "index": function(a) {
            return a ? "string" == typeof a ? f.inArray(this[0], f(a)) : f.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        "add": function(a, b) {
            var c = "string" == typeof a ? f(a, b) : f.makeArray(a && a.nodeType ? [a] : a)
              , d = f.merge(this.get(), c);
            return this.pushStack(U(c[0]) || U(d[0]) ? d : f.unique(d))
        },
        "andSelf": function() {
            return this.add(this.prevObject)
        }
    }),
    f.each({
        "parent": function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        "parents": function(a) {
            return f.dir(a, "parentNode")
        },
        "parentsUntil": function(a, b, c) {
            return f.dir(a, "parentNode", c)
        },
        "next": function(a) {
            return f.nth(a, 2, "nextSibling")
        },
        "prev": function(a) {
            return f.nth(a, 2, "previousSibling")
        },
        "nextAll": function(a) {
            return f.dir(a, "nextSibling")
        },
        "prevAll": function(a) {
            return f.dir(a, "previousSibling")
        },
        "nextUntil": function(a, b, c) {
            return f.dir(a, "nextSibling", c)
        },
        "prevUntil": function(a, b, c) {
            return f.dir(a, "previousSibling", c)
        },
        "siblings": function(a) {
            return f.sibling(a.parentNode.firstChild, a)
        },
        "children": function(a) {
            return f.sibling(a.firstChild)
        },
        "contents": function(a) {
            return f.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : f.makeArray(a.childNodes)
        }
    }, function(a, b) {
        f.fn[a] = function(c, d) {
            var e = f.map(this, b, c)
              , g = R.call(arguments);
            return N.test(a) || (d = c),
            d && "string" == typeof d && (e = f.filter(d, e)),
            e = this.length > 1 && !T[a] ? f.unique(e) : e,
            (this.length > 1 || P.test(d)) && O.test(a) && (e = e.reverse()),
            this.pushStack(e, a, g.join(","))
        }
    }),
    f.extend({
        "filter": function(a, b, c) {
            return c && (a = ":not(" + a + ")"),
            1 === b.length ? f.find.matchesSelector(b[0], a) ? [b[0]] : [] : f.find.matches(a, b)
        },
        "dir": function(a, c, d) {
            for (var e = [], g = a[c]; g && 9 !== g.nodeType && (d === b || 1 !== g.nodeType || !f(g).is(d)); )
                1 === g.nodeType && e.push(g),
                g = g[c];
            return e
        },
        "nth": function(a, b, c) {
            b = b || 1;
            for (var e = 0; a && (1 !== a.nodeType || ++e !== b); a = a[c])
                ;
            return a
        },
        "sibling": function(a, b) {
            for (var c = []; a; a = a.nextSibling)
                1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    });
    var W = / jQuery\d+="(?:\d+|null)"/g
      , X = /^\s+/
      , Y = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
      , Z = /<([\w:]+)/
      , $ = /<tbody/i
      , _ = /<|&#?\w+;/
      , ab = /<(?:script|object|embed|option|style)/i
      , bb = /checked\s*(?:[^=]|=\s*.checked.)/i
      , cb = /\/(java|ecma)script/i
      , db = /^\s*<!(?:\[CDATA\[|\-\-)/
      , eb = {
        "option": [1, "<select multiple='multiple'>", "</select>"],
        "legend": [1, "<fieldset>", "</fieldset>"],
        "thead": [1, "<table>", "</table>"],
        "tr": [2, "<table><tbody>", "</tbody></table>"],
        "td": [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        "col": [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        "area": [1, "<map>", "</map>"],
        "_default": [0, "", ""]
    };
    eb.optgroup = eb.option,
    eb.tbody = eb.tfoot = eb.colgroup = eb.caption = eb.thead,
    eb.th = eb.td,
    f.support.htmlSerialize || (eb._default = [1, "div<div>", "</div>"]),
    f.fn.extend({
        "text": function(a) {
            return f.isFunction(a) ? this.each(function(b) {
                var c = f(this);
                c.text(a.call(this, b, c.text()))
            }) : "object" != typeof a && a !== b ? this.empty().append((this[0] && this[0].ownerDocument || c).createTextNode(a)) : f.text(this)
        },
        "wrapAll": function(a) {
            if (f.isFunction(a))
                return this.each(function(b) {
                    f(this).wrapAll(a.call(this, b))
                });
            if (this[0]) {
                var b = f(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]),
                b.map(function() {
                    for (var a = this; a.firstChild && 1 === a.firstChild.nodeType; )
                        a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        "wrapInner": function(a) {
            return this.each(f.isFunction(a) ? function(b) {
                f(this).wrapInner(a.call(this, b))
            }
            : function() {
                var b = f(this)
                  , c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            }
            )
        },
        "wrap": function(a) {
            return this.each(function() {
                f(this).wrapAll(a)
            })
        },
        "unwrap": function() {
            return this.parent().each(function() {
                f.nodeName(this, "body") || f(this).replaceWith(this.childNodes)
            }).end()
        },
        "append": function() {
            return this.domManip(arguments, !0, function(a) {
                1 === this.nodeType && this.appendChild(a)
            })
        },
        "prepend": function() {
            return this.domManip(arguments, !0, function(a) {
                1 === this.nodeType && this.insertBefore(a, this.firstChild)
            })
        },
        "before": function() {
            if (this[0] && this[0].parentNode)
                return this.domManip(arguments, !1, function(a) {
                    this.parentNode.insertBefore(a, this)
                });
            if (arguments.length) {
                var a = f(arguments[0]);
                return a.push.apply(a, this.toArray()),
                this.pushStack(a, "before", arguments)
            }
        },
        "after": function() {
            if (this[0] && this[0].parentNode)
                return this.domManip(arguments, !1, function(a) {
                    this.parentNode.insertBefore(a, this.nextSibling)
                });
            if (arguments.length) {
                var a = this.pushStack(this, "after", arguments);
                return a.push.apply(a, f(arguments[0]).toArray()),
                a
            }
        },
        "remove": function(a, b) {
            for (var d, c = 0; null != (d = this[c]); c++)
                (!a || f.filter(a, [d]).length) && (b || 1 !== d.nodeType || (f.cleanData(d.getElementsByTagName("*")),
                f.cleanData([d])),
                d.parentNode && d.parentNode.removeChild(d));
            return this
        },
        "empty": function() {
            for (var b, a = 0; null != (b = this[a]); a++)
                for (1 === b.nodeType && f.cleanData(b.getElementsByTagName("*")); b.firstChild; )
                    b.removeChild(b.firstChild);
            return this
        },
        "clone": function(a, b) {
            return a = null == a ? !1 : a,
            b = null == b ? a : b,
            this.map(function() {
                return f.clone(this, a, b)
            })
        },
        "html": function(a) {
            if (a === b)
                return this[0] && 1 === this[0].nodeType ? this[0].innerHTML.replace(W, "") : null;
            if ("string" != typeof a || ab.test(a) || !f.support.leadingWhitespace && X.test(a) || eb[(Z.exec(a) || ["", ""])[1].toLowerCase()])
                f.isFunction(a) ? this.each(function(b) {
                    var c = f(this);
                    c.html(a.call(this, b, c.html()))
                }) : this.empty().append(a);
            else {
                a = a.replace(Y, "<$1></$2>");
                try {
                    for (var c = 0, d = this.length; d > c; c++)
                        1 === this[c].nodeType && (f.cleanData(this[c].getElementsByTagName("*")),
                        this[c].innerHTML = a)
                } catch (e) {
                    this.empty().append(a)
                }
            }
            return this
        },
        "replaceWith": function(a) {
            return this[0] && this[0].parentNode ? f.isFunction(a) ? this.each(function(b) {
                var c = f(this)
                  , d = c.html();
                c.replaceWith(a.call(this, b, d))
            }) : ("string" != typeof a && (a = f(a).detach()),
            this.each(function() {
                var b = this.nextSibling
                  , c = this.parentNode;
                f(this).remove(),
                b ? f(b).before(a) : f(c).append(a)
            })) : this.length ? this.pushStack(f(f.isFunction(a) ? a() : a), "replaceWith", a) : this
        },
        "detach": function(a) {
            return this.remove(a, !0)
        },
        "domManip": function(a, c, d) {
            var e, g, h, i, j = a[0], k = [];
            if (!f.support.checkClone && 3 === arguments.length && "string" == typeof j && bb.test(j))
                return this.each(function() {
                    f(this).domManip(a, c, d, !0)
                });
            if (f.isFunction(j))
                return this.each(function(e) {
                    var g = f(this);
                    a[0] = j.call(this, e, c ? g.html() : b),
                    g.domManip(a, c, d)
                });
            if (this[0]) {
                if (i = j && j.parentNode,
                e = f.support.parentNode && i && 11 === i.nodeType && i.childNodes.length === this.length ? {
                    "fragment": i
                } : f.buildFragment(a, this, k),
                h = e.fragment,
                g = 1 === h.childNodes.length ? h = h.firstChild : h.firstChild) {
                    c = c && f.nodeName(g, "tr");
                    for (var l = 0, m = this.length, n = m - 1; m > l; l++)
                        d.call(c ? fb(this[l], g) : this[l], e.cacheable || m > 1 && n > l ? f.clone(h, !0, !0) : h)
                }
                k.length && f.each(k, lb)
            }
            return this
        }
    }),
    f.buildFragment = function(a, b, d) {
        var e, g, h, i;
        return b && b[0] && (i = b[0].ownerDocument || b[0]),
        i.createDocumentFragment || (i = c),
        1 === a.length && "string" == typeof a[0] && a[0].length < 512 && i === c && "<" === a[0].charAt(0) && !ab.test(a[0]) && (f.support.checkClone || !bb.test(a[0])) && (g = !0,
        h = f.fragments[a[0]],
        h && 1 !== h && (e = h)),
        e || (e = i.createDocumentFragment(),
        f.clean(a, i, e, d)),
        g && (f.fragments[a[0]] = h ? e : 1),
        {
            "fragment": e,
            "cacheable": g
        }
    }
    ,
    f.fragments = {},
    f.each({
        "appendTo": "append",
        "prependTo": "prepend",
        "insertBefore": "before",
        "insertAfter": "after",
        "replaceAll": "replaceWith"
    }, function(a, b) {
        f.fn[a] = function(c) {
            var d = []
              , e = f(c)
              , g = 1 === this.length && this[0].parentNode;
            if (g && 11 === g.nodeType && 1 === g.childNodes.length && 1 === e.length)
                return e[b](this[0]),
                this;
            for (var h = 0, i = e.length; i > h; h++) {
                var j = (h > 0 ? this.clone(!0) : this).get();
                f(e[h])[b](j),
                d = d.concat(j)
            }
            return this.pushStack(d, a, e.selector)
        }
    }),
    f.extend({
        "clone": function(a, b, c) {
            var e, g, h, d = a.cloneNode(!0);
            if (!(f.support.noCloneEvent && f.support.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || f.isXMLDoc(a)))
                for (hb(a, d),
                e = ib(a),
                g = ib(d),
                h = 0; e[h]; ++h)
                    g[h] && hb(e[h], g[h]);
            if (b && (gb(a, d),
            c))
                for (e = ib(a),
                g = ib(d),
                h = 0; e[h]; ++h)
                    gb(e[h], g[h]);
            return e = g = null,
            d
        },
        "clean": function(a, b, d, e) {
            var g;
            b = b || c,
            "undefined" == typeof b.createElement && (b = b.ownerDocument || b[0] && b[0].ownerDocument || c);
            for (var i, k, h = [], j = 0; null != (k = a[j]); j++)
                if ("number" == typeof k && (k += ""),
                k) {
                    if ("string" == typeof k)
                        if (_.test(k)) {
                            k = k.replace(Y, "<$1></$2>");
                            var l = (Z.exec(k) || ["", ""])[1].toLowerCase()
                              , m = eb[l] || eb._default
                              , n = m[0]
                              , o = b.createElement("div");
                            for (o.innerHTML = m[1] + k + m[2]; n--; )
                                o = o.lastChild;
                            if (!f.support.tbody) {
                                var p = $.test(k)
                                  , q = "table" !== l || p ? "<table>" !== m[1] || p ? [] : o.childNodes : o.firstChild && o.firstChild.childNodes;
                                for (i = q.length - 1; i >= 0; --i)
                                    f.nodeName(q[i], "tbody") && !q[i].childNodes.length && q[i].parentNode.removeChild(q[i])
                            }
                            !f.support.leadingWhitespace && X.test(k) && o.insertBefore(b.createTextNode(X.exec(k)[0]), o.firstChild),
                            k = o.childNodes
                        } else
                            k = b.createTextNode(k);
                    var r;
                    if (!f.support.appendChecked)
                        if (k[0] && "number" == typeof (r = k.length))
                            for (i = 0; r > i; i++)
                                kb(k[i]);
                        else
                            kb(k);
                    k.nodeType ? h.push(k) : h = f.merge(h, k)
                }
            if (d)
                for (g = function(a) {
                    return !a.type || cb.test(a.type)
                }
                ,
                j = 0; h[j]; j++)
                    if (!e || !f.nodeName(h[j], "script") || h[j].type && "text/javascript" !== h[j].type.toLowerCase()) {
                        if (1 === h[j].nodeType) {
                            var s = f.grep(h[j].getElementsByTagName("script"), g);
                            h.splice.apply(h, [j + 1, 0].concat(s))
                        }
                        d.appendChild(h[j])
                    } else
                        e.push(h[j].parentNode ? h[j].parentNode.removeChild(h[j]) : h[j]);
            return h
        },
        "cleanData": function(a) {
            for (var b, c, j, d = f.cache, e = f.expando, g = f.event.special, h = f.support.deleteExpando, i = 0; null != (j = a[i]); i++)
                if ((!j.nodeName || !f.noData[j.nodeName.toLowerCase()]) && (c = j[f.expando])) {
                    if (b = d[c] && d[c][e],
                    b && b.events) {
                        for (var k in b.events)
                            g[k] ? f.event.remove(j, k) : f.removeEvent(j, k, b.handle);
                        b.handle && (b.handle.elem = null)
                    }
                    h ? delete j[f.expando] : j.removeAttribute && j.removeAttribute(f.expando),
                    delete d[c]
                }
        }
    });
    var vb, wb, xb, mb = /alpha\([^)]*\)/i, nb = /opacity=([^)]*)/, ob = /([A-Z]|^ms)/g, pb = /^-?\d+(?:px)?$/i, qb = /^-?\d/, rb = /^([\-+])=([\-+.\de]+)/, sb = {
        "position": "absolute",
        "visibility": "hidden",
        "display": "block"
    }, tb = ["Left", "Right"], ub = ["Top", "Bottom"];
    f.fn.css = function(a, c) {
        return 2 === arguments.length && c === b ? this : f.access(this, a, c, !0, function(a, c, d) {
            return d !== b ? f.style(a, c, d) : f.css(a, c)
        })
    }
    ,
    f.extend({
        "cssHooks": {
            "opacity": {
                "get": function(a, b) {
                    if (b) {
                        var c = vb(a, "opacity", "opacity");
                        return "" === c ? "1" : c
                    }
                    return a.style.opacity
                }
            }
        },
        "cssNumber": {
            "fillOpacity": !0,
            "fontWeight": !0,
            "lineHeight": !0,
            "opacity": !0,
            "orphans": !0,
            "widows": !0,
            "zIndex": !0,
            "zoom": !0
        },
        "cssProps": {
            "float": f.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        "style": function(a, c, d, e) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var g, h, i = f.camelCase(c), j = a.style, k = f.cssHooks[i];
                if (c = f.cssProps[i] || i,
                d === b)
                    return k && "get"in k && (g = k.get(a, !1, e)) !== b ? g : j[c];
                if (h = typeof d,
                "string" === h && (g = rb.exec(d)) && (d = +(g[1] + 1) * +g[2] + parseFloat(f.css(a, c)),
                h = "number"),
                !(null == d || "number" === h && isNaN(d) || ("number" !== h || f.cssNumber[i] || (d += "px"),
                k && "set"in k && (d = k.set(a, d)) === b)))
                    try {
                        j[c] = d
                    } catch (l) {}
            }
        },
        "css": function(a, c, d) {
            var e, g;
            return c = f.camelCase(c),
            g = f.cssHooks[c],
            c = f.cssProps[c] || c,
            "cssFloat" === c && (c = "float"),
            g && "get"in g && (e = g.get(a, !0, d)) !== b ? e : vb ? vb(a, c) : void 0
        },
        "swap": function(a, b, c) {
            var d = {};
            for (var e in b)
                d[e] = a.style[e],
                a.style[e] = b[e];
            c.call(a);
            for (e in b)
                a.style[e] = d[e]
        }
    }),
    f.curCSS = f.css,
    f.each(["height", "width"], function(a, b) {
        f.cssHooks[b] = {
            "get": function(a, c, d) {
                var e;
                return c ? 0 !== a.offsetWidth ? yb(a, b, d) : (f.swap(a, sb, function() {
                    e = yb(a, b, d)
                }),
                e) : void 0
            },
            "set": function(a, b) {
                return pb.test(b) ? (b = parseFloat(b),
                b >= 0 ? b + "px" : void 0) : b
            }
        }
    }),
    f.support.opacity || (f.cssHooks.opacity = {
        "get": function(a, b) {
            return nb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
        },
        "set": function(a, b) {
            var c = a.style
              , d = a.currentStyle
              , e = f.isNaN(b) ? "" : "alpha(opacity=" + 100 * b + ")"
              , g = d && d.filter || c.filter || "";
            c.zoom = 1,
            b >= 1 && "" === f.trim(g.replace(mb, "")) && (c.removeAttribute("filter"),
            d && !d.filter) || (c.filter = mb.test(g) ? g.replace(mb, e) : g + " " + e)
        }
    }),
    f(function() {
        f.support.reliableMarginRight || (f.cssHooks.marginRight = {
            "get": function(a, b) {
                var c;
                return f.swap(a, {
                    "display": "inline-block"
                }, function() {
                    c = b ? vb(a, "margin-right", "marginRight") : a.style.marginRight
                }),
                c
            }
        })
    }),
    c.defaultView && c.defaultView.getComputedStyle && (wb = function(a, c) {
        var d, e, g;
        return c = c.replace(ob, "-$1").toLowerCase(),
        (e = a.ownerDocument.defaultView) ? ((g = e.getComputedStyle(a, null)) && (d = g.getPropertyValue(c),
        "" !== d || f.contains(a.ownerDocument.documentElement, a) || (d = f.style(a, c))),
        d) : b
    }
    ),
    c.documentElement.currentStyle && (xb = function(a, b) {
        var c, d = a.currentStyle && a.currentStyle[b], e = a.runtimeStyle && a.runtimeStyle[b], f = a.style;
        return !pb.test(d) && qb.test(d) && (c = f.left,
        e && (a.runtimeStyle.left = a.currentStyle.left),
        f.left = "fontSize" === b ? "1em" : d || 0,
        d = f.pixelLeft + "px",
        f.left = c,
        e && (a.runtimeStyle.left = e)),
        "" === d ? "auto" : d
    }
    ),
    vb = wb || xb,
    f.expr && f.expr.filters && (f.expr.filters.hidden = function(a) {
        var b = a.offsetWidth
          , c = a.offsetHeight;
        return 0 === b && 0 === c || !f.support.reliableHiddenOffsets && "none" === (a.style.display || f.css(a, "display"))
    }
    ,
    f.expr.filters.visible = function(a) {
        return !f.expr.filters.hidden(a)
    }
    );
    var Rb, Sb, zb = /%20/g, Ab = /\[\]$/, Bb = /\r?\n/g, Cb = /#.*$/, Db = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Eb = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i, Fb = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, Gb = /^(?:GET|HEAD)$/, Hb = /^\/\//, Ib = /\?/, Jb = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, Kb = /^(?:select|textarea)/i, Lb = /\s+/, Mb = /([?&])_=[^&]*/, Nb = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/, Ob = f.fn.load, Pb = {}, Qb = {}, Tb = ["*/"] + ["*"];
    try {
        Rb = e.href
    } catch (Ub) {
        Rb = c.createElement("a"),
        Rb.href = "",
        Rb = Rb.href
    }
    Sb = Nb.exec(Rb.toLowerCase()) || [],
    f.fn.extend({
        "load": function(a, c, d) {
            if ("string" != typeof a && Ob)
                return Ob.apply(this, arguments);
            if (!this.length)
                return this;
            var e = a.indexOf(" ");
            if (e >= 0) {
                var g = a.slice(e, a.length);
                a = a.slice(0, e)
            }
            var h = "GET";
            c && (f.isFunction(c) ? (d = c,
            c = b) : "object" == typeof c && (c = f.param(c, f.ajaxSettings.traditional),
            h = "POST"));
            var i = this;
            return f.ajax({
                "url": a,
                "type": h,
                "dataType": "html",
                "data": c,
                "complete": function(a, b, c) {
                    c = a.responseText,
                    a.isResolved() && (a.done(function(a) {
                        c = a
                    }),
                    i.html(g ? f("<div>").append(c.replace(Jb, "")).find(g) : c)),
                    d && i.each(d, [c, b, a])
                }
            }),
            this
        },
        "serialize": function() {
            return f.param(this.serializeArray())
        },
        "serializeArray": function() {
            return this.map(function() {
                return this.elements ? f.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || Kb.test(this.nodeName) || Eb.test(this.type))
            }).map(function(a, b) {
                var c = f(this).val();
                return null == c ? null : f.isArray(c) ? f.map(c, function(a) {
                    return {
                        "name": b.name,
                        "value": a.replace(Bb, "\r\n")
                    }
                }) : {
                    "name": b.name,
                    "value": c.replace(Bb, "\r\n")
                }
            }).get()
        }
    }),
    f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
        f.fn[b] = function(a) {
            return this.bind(b, a)
        }
    }),
    f.each(["get", "post"], function(a, c) {
        f[c] = function(a, d, e, g) {
            return f.isFunction(d) && (g = g || e,
            e = d,
            d = b),
            f.ajax({
                "type": c,
                "url": a,
                "data": d,
                "success": e,
                "dataType": g
            })
        }
    }),
    f.extend({
        "getScript": function(a, c) {
            return f.get(a, b, c, "script")
        },
        "getJSON": function(a, b, c) {
            return f.get(a, b, c, "json")
        },
        "ajaxSetup": function(a, b) {
            return b ? Xb(a, f.ajaxSettings) : (b = a,
            a = f.ajaxSettings),
            Xb(a, b),
            a
        },
        "ajaxSettings": {
            "url": Rb,
            "isLocal": Fb.test(Sb[1]),
            "global": !0,
            "type": "GET",
            "contentType": "application/x-www-form-urlencoded",
            "processData": !0,
            "async": !0,
            "accepts": {
                "xml": "application/xml, text/xml",
                "html": "text/html",
                "text": "text/plain",
                "json": "application/json, text/javascript",
                "*": Tb
            },
            "contents": {
                "xml": /xml/,
                "html": /html/,
                "json": /json/
            },
            "responseFields": {
                "xml": "responseXML",
                "text": "responseText"
            },
            "converters": {
                "* text": a.String,
                "text html": !0,
                "text json": f.parseJSON,
                "text xml": f.parseXML
            },
            "flatOptions": {
                "context": !0,
                "url": !0
            }
        },
        "ajaxPrefilter": Vb(Pb),
        "ajaxTransport": Vb(Qb),
        "ajax": function(a, c) {
            function w(a, c, l, m) {
                if (2 !== s) {
                    s = 2,
                    q && clearTimeout(q),
                    p = b,
                    n = m || "",
                    v.readyState = a > 0 ? 4 : 0;
                    var o, r, u, y, z, w = c, x = l ? Zb(d, v, l) : b;
                    if (a >= 200 && 300 > a || 304 === a)
                        if (d.ifModified && ((y = v.getResponseHeader("Last-Modified")) && (f.lastModified[k] = y),
                        (z = v.getResponseHeader("Etag")) && (f.etag[k] = z)),
                        304 === a)
                            w = "notmodified",
                            o = !0;
                        else
                            try {
                                r = $b(d, x),
                                w = "success",
                                o = !0
                            } catch (A) {
                                w = "parsererror",
                                u = A
                            }
                    else
                        u = w,
                        (!w || a) && (w = "error",
                        0 > a && (a = 0));
                    v.status = a,
                    v.statusText = "" + (c || w),
                    o ? h.resolveWith(e, [r, w, v]) : h.rejectWith(e, [v, w, u]),
                    v.statusCode(j),
                    j = b,
                    t && g.trigger("ajax" + (o ? "Success" : "Error"), [v, d, o ? r : u]),
                    i.resolveWith(e, [v, w]),
                    t && (g.trigger("ajaxComplete", [v, d]),
                    --f.active || f.event.trigger("ajaxStop"))
                }
            }
            "object" == typeof a && (c = a,
            a = b),
            c = c || {};
            var k, n, o, p, q, r, t, u, d = f.ajaxSetup({}, c), e = d.context || d, g = e !== d && (e.nodeType || e instanceof f) ? f(e) : f.event, h = f.Deferred(), i = f._Deferred(), j = d.statusCode || {}, l = {}, m = {}, s = 0, v = {
                "readyState": 0,
                "setRequestHeader": function(a, b) {
                    if (!s) {
                        var c = a.toLowerCase();
                        a = m[c] = m[c] || a,
                        l[a] = b
                    }
                    return this
                },
                "getAllResponseHeaders": function() {
                    return 2 === s ? n : null
                },
                "getResponseHeader": function(a) {
                    var c;
                    if (2 === s) {
                        if (!o)
                            for (o = {}; c = Db.exec(n); )
                                o[c[1].toLowerCase()] = c[2];
                        c = o[a.toLowerCase()]
                    }
                    return c === b ? null : c
                },
                "overrideMimeType": function(a) {
                    return s || (d.mimeType = a),
                    this
                },
                "abort": function(a) {
                    return a = a || "abort",
                    p && p.abort(a),
                    w(0, a),
                    this
                }
            };
            if (h.promise(v),
            v.success = v.done,
            v.error = v.fail,
            v.complete = i.done,
            v.statusCode = function(a) {
                if (a) {
                    var b;
                    if (2 > s)
                        for (b in a)
                            j[b] = [j[b], a[b]];
                    else
                        b = a[v.status],
                        v.then(b, b)
                }
                return this
            }
            ,
            d.url = ((a || d.url) + "").replace(Cb, "").replace(Hb, Sb[1] + "//"),
            d.dataTypes = f.trim(d.dataType || "*").toLowerCase().split(Lb),
            null == d.crossDomain && (r = Nb.exec(d.url.toLowerCase()),
            d.crossDomain = !(!r || r[1] == Sb[1] && r[2] == Sb[2] && (r[3] || ("http:" === r[1] ? 80 : 443)) == (Sb[3] || ("http:" === Sb[1] ? 80 : 443)))),
            d.data && d.processData && "string" != typeof d.data && (d.data = f.param(d.data, d.traditional)),
            Wb(Pb, d, c, v),
            2 === s)
                return !1;
            if (t = d.global,
            d.type = d.type.toUpperCase(),
            d.hasContent = !Gb.test(d.type),
            t && 0 === f.active++ && f.event.trigger("ajaxStart"),
            !d.hasContent && (d.data && (d.url += (Ib.test(d.url) ? "&" : "?") + d.data,
            delete d.data),
            k = d.url,
            d.cache === !1)) {
                var x = f.now()
                  , y = d.url.replace(Mb, "$1_=" + x);
                d.url = y + (y === d.url ? (Ib.test(d.url) ? "&" : "?") + "_=" + x : "")
            }
            (d.data && d.hasContent && d.contentType !== !1 || c.contentType) && v.setRequestHeader("Content-Type", d.contentType),
            d.ifModified && (k = k || d.url,
            f.lastModified[k] && v.setRequestHeader("If-Modified-Since", f.lastModified[k]),
            f.etag[k] && v.setRequestHeader("If-None-Match", f.etag[k])),
            v.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Tb + "; q=0.01" : "") : d.accepts["*"]);
            for (u in d.headers)
                v.setRequestHeader(u, d.headers[u]);
            if (d.beforeSend && (d.beforeSend.call(e, v, d) === !1 || 2 === s))
                return v.abort(),
                !1;
            for (u in {
                "success": 1,
                "error": 1,
                "complete": 1
            })
                v[u](d[u]);
            if (p = Wb(Qb, d, c, v)) {
                v.readyState = 1,
                t && g.trigger("ajaxSend", [v, d]),
                d.async && d.timeout > 0 && (q = setTimeout(function() {
                    v.abort("timeout")
                }, d.timeout));
                try {
                    s = 1,
                    p.send(l, w)
                } catch (z) {
                    2 > s ? w(-1, z) : f.error(z)
                }
            } else
                w(-1, "No Transport");
            return v
        },
        "param": function(a, c) {
            var d = []
              , e = function(a, b) {
                b = f.isFunction(b) ? b() : b,
                d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
            if (c === b && (c = f.ajaxSettings.traditional),
            f.isArray(a) || a.jquery && !f.isPlainObject(a))
                f.each(a, function() {
                    e(this.name, this.value)
                });
            else
                for (var g in a)
                    Yb(g, a[g], c, e);
            return d.join("&").replace(zb, "+")
        }
    }),
    f.extend({
        "active": 0,
        "lastModified": {},
        "etag": {}
    });
    var ac = (f.now(),
    /(\=)\?(&|$)|\?\?/i);
    f.ajaxSetup({
        "jsonp": "callback",
        "jsonpCallback": function() {
            return "jQuery" + Math.floor(1e7 * Math.random())
        }
    }),
    f.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e = "application/x-www-form-urlencoded" === b.contentType && "string" == typeof b.data;
        if ("jsonp" === b.dataTypes[0] || b.jsonp !== !1 && (ac.test(b.url) || e && ac.test(b.data))) {
            var g, h = b.jsonpCallback = f.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, i = a[h], j = b.url, k = b.data, l = "$1" + h + "$2";
            return b.jsonp !== !1 && (j = j.replace(ac, l),
            b.url === j && (e && (k = k.replace(ac, l)),
            b.data === k && (j += (/\?/.test(j) ? "&" : "?") + b.jsonp + "=" + h))),
            b.url = j,
            b.data = k,
            a[h] = function(a) {
                g = [a]
            }
            ,
            d.always(function() {
                a[h] = i,
                g && f.isFunction(i) && a[h](g[0])
            }),
            b.converters["script json"] = function() {
                return g || f.error(h + " was not called"),
                g[0]
            }
            ,
            b.dataTypes[0] = "json",
            "script"
        }
    }),
    f.ajaxSetup({
        "accepts": {
            "script": "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        "contents": {
            "script": /javascript|ecmascript/
        },
        "converters": {
            "text script": function(a) {
                return f.globalEval(a),
                a
            }
        }
    }),
    f.ajaxPrefilter("script", function(a) {
        a.cache === b && (a.cache = !1),
        a.crossDomain && (a.type = "GET",
        a.global = !1)
    }),
    f.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var d, e = c.head || c.getElementsByTagName("head")[0] || c.documentElement;
            return {
                "send": function(f, g) {
                    d = c.createElement("script"),
                    d.async = "async",
                    a.scriptCharset && (d.charset = a.scriptCharset),
                    d.src = a.url,
                    d.onload = d.onreadystatechange = function(a, c) {
                        (c || !d.readyState || /loaded|complete/.test(d.readyState)) && (d.onload = d.onreadystatechange = null,
                        e && d.parentNode && e.removeChild(d),
                        d = b,
                        c || g(200, "success"))
                    }
                    ,
                    e.insertBefore(d, e.firstChild)
                },
                "abort": function() {
                    d && d.onload(0, 1)
                }
            }
        }
    });
    var dc, bc = a.ActiveXObject ? function() {
        for (var a in dc)
            dc[a](0, 1)
    }
    : !1, cc = 0;
    f.ajaxSettings.xhr = a.ActiveXObject ? function() {
        return !this.isLocal && ec() || fc()
    }
    : ec,
    function(a) {
        f.extend(f.support, {
            "ajax": !!a,
            "cors": !!a && "withCredentials"in a
        })
    }(f.ajaxSettings.xhr()),
    f.support.ajax && f.ajaxTransport(function(c) {
        if (!c.crossDomain || f.support.cors) {
            var d;
            return {
                "send": function(e, g) {
                    var i, j, h = c.xhr();
                    if (c.username ? h.open(c.type, c.url, c.async, c.username, c.password) : h.open(c.type, c.url, c.async),
                    c.xhrFields)
                        for (j in c.xhrFields)
                            h[j] = c.xhrFields[j];
                    c.mimeType && h.overrideMimeType && h.overrideMimeType(c.mimeType),
                    c.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (j in e)
                            h.setRequestHeader(j, e[j])
                    } catch (k) {}
                    h.send(c.hasContent && c.data || null),
                    d = function(a, e) {
                        var j, k, l, m, n;
                        try {
                            if (d && (e || 4 === h.readyState))
                                if (d = b,
                                i && (h.onreadystatechange = f.noop,
                                bc && delete dc[i]),
                                e)
                                    4 !== h.readyState && h.abort();
                                else {
                                    j = h.status,
                                    l = h.getAllResponseHeaders(),
                                    m = {},
                                    n = h.responseXML,
                                    n && n.documentElement && (m.xml = n),
                                    m.text = h.responseText;
                                    try {
                                        k = h.statusText
                                    } catch (o) {
                                        k = ""
                                    }
                                    j || !c.isLocal || c.crossDomain ? 1223 === j && (j = 204) : j = m.text ? 200 : 404
                                }
                        } catch (p) {
                            e || g(-1, p)
                        }
                        m && g(j, k, m, l)
                    }
                    ,
                    c.async && 4 !== h.readyState ? (i = ++cc,
                    bc && (dc || (dc = {},
                    f(a).unload(bc)),
                    dc[i] = d),
                    h.onreadystatechange = d) : d()
                },
                "abort": function() {
                    d && d(0, 1)
                }
            }
        }
    });
    var hc, ic, lc, nc, gc = {}, jc = /^(?:toggle|show|hide)$/, kc = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i, mc = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]];
    f.fn.extend({
        "show": function(a, b, c) {
            var d, e;
            if (a || 0 === a)
                return this.animate(qc("show", 3), a, b, c);
            for (var g = 0, h = this.length; h > g; g++)
                d = this[g],
                d.style && (e = d.style.display,
                f._data(d, "olddisplay") || "none" !== e || (e = d.style.display = ""),
                "" === e && "none" === f.css(d, "display") && f._data(d, "olddisplay", rc(d.nodeName)));
            for (g = 0; h > g; g++)
                d = this[g],
                d.style && (e = d.style.display,
                ("" === e || "none" === e) && (d.style.display = f._data(d, "olddisplay") || ""));
            return this
        },
        "hide": function(a, b, c) {
            if (a || 0 === a)
                return this.animate(qc("hide", 3), a, b, c);
            for (var d = 0, e = this.length; e > d; d++)
                if (this[d].style) {
                    var g = f.css(this[d], "display");
                    "none" === g || f._data(this[d], "olddisplay") || f._data(this[d], "olddisplay", g)
                }
            for (d = 0; e > d; d++)
                this[d].style && (this[d].style.display = "none");
            return this
        },
        "_toggle": f.fn.toggle,
        "toggle": function(a, b, c) {
            var d = "boolean" == typeof a;
            return f.isFunction(a) && f.isFunction(b) ? this._toggle.apply(this, arguments) : null == a || d ? this.each(function() {
                var b = d ? a : f(this).is(":hidden");
                f(this)[b ? "show" : "hide"]()
            }) : this.animate(qc("toggle", 3), a, b, c),
            this
        },
        "fadeTo": function(a, b, c, d) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                "opacity": b
            }, a, c, d)
        },
        "animate": function(a, b, c, d) {
            var e = f.speed(b, c, d);
            return f.isEmptyObject(a) ? this.each(e.complete, [!1]) : (a = f.extend({}, a),
            this[e.queue === !1 ? "each" : "queue"](function() {
                e.queue === !1 && f._mark(this);
                var g, h, i, j, k, l, m, n, o, b = f.extend({}, e), c = 1 === this.nodeType, d = c && f(this).is(":hidden");
                b.animatedProperties = {};
                for (i in a) {
                    if (g = f.camelCase(i),
                    i !== g && (a[g] = a[i],
                    delete a[i]),
                    h = a[g],
                    f.isArray(h) ? (b.animatedProperties[g] = h[1],
                    h = a[g] = h[0]) : b.animatedProperties[g] = b.specialEasing && b.specialEasing[g] || b.easing || "swing",
                    "hide" === h && d || "show" === h && !d)
                        return b.complete.call(this);
                    !c || "height" !== g && "width" !== g || (b.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY],
                    "inline" === f.css(this, "display") && "none" === f.css(this, "float") && (f.support.inlineBlockNeedsLayout ? (j = rc(this.nodeName),
                    "inline" === j ? this.style.display = "inline-block" : (this.style.display = "inline",
                    this.style.zoom = 1)) : this.style.display = "inline-block"))
                }
                null != b.overflow && (this.style.overflow = "hidden");
                for (i in a)
                    k = new f.fx(this,b,i),
                    h = a[i],
                    jc.test(h) ? k["toggle" === h ? d ? "show" : "hide" : h]() : (l = kc.exec(h),
                    m = k.cur(),
                    l ? (n = parseFloat(l[2]),
                    o = l[3] || (f.cssNumber[i] ? "" : "px"),
                    "px" !== o && (f.style(this, i, (n || 1) + o),
                    m = (n || 1) / k.cur() * m,
                    f.style(this, i, m + o)),
                    l[1] && (n = ("-=" === l[1] ? -1 : 1) * n + m),
                    k.custom(m, n, o)) : k.custom(m, h, ""));
                return !0
            }))
        },
        "stop": function(a, b) {
            return a && this.queue([]),
            this.each(function() {
                var a = f.timers
                  , c = a.length;
                for (b || f._unmark(!0, this); c--; )
                    a[c].elem === this && (b && a[c](!0),
                    a.splice(c, 1))
            }),
            b || this.dequeue(),
            this
        }
    }),
    f.each({
        "slideDown": qc("show", 1),
        "slideUp": qc("hide", 1),
        "slideToggle": qc("toggle", 1),
        "fadeIn": {
            "opacity": "show"
        },
        "fadeOut": {
            "opacity": "hide"
        },
        "fadeToggle": {
            "opacity": "toggle"
        }
    }, function(a, b) {
        f.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }),
    f.extend({
        "speed": function(a, b, c) {
            var d = a && "object" == typeof a ? f.extend({}, a) : {
                "complete": c || !c && b || f.isFunction(a) && a,
                "duration": a,
                "easing": c && b || b && !f.isFunction(b) && b
            };
            return d.duration = f.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in f.fx.speeds ? f.fx.speeds[d.duration] : f.fx.speeds._default,
            d.old = d.complete,
            d.complete = function(a) {
                f.isFunction(d.old) && d.old.call(this),
                d.queue !== !1 ? f.dequeue(this) : a !== !1 && f._unmark(this)
            }
            ,
            d
        },
        "easing": {
            "linear": function(a, b, c, d) {
                return c + d * a
            },
            "swing": function(a, b, c, d) {
                return (-Math.cos(a * Math.PI) / 2 + .5) * d + c
            }
        },
        "timers": [],
        "fx": function(a, b, c) {
            this.options = b,
            this.elem = a,
            this.prop = c,
            b.orig = b.orig || {}
        }
    }),
    f.fx.prototype = {
        "update": function() {
            this.options.step && this.options.step.call(this.elem, this.now, this),
            (f.fx.step[this.prop] || f.fx.step._default)(this)
        },
        "cur": function() {
            if (null != this.elem[this.prop] && (!this.elem.style || null == this.elem.style[this.prop]))
                return this.elem[this.prop];
            var a, b = f.css(this.elem, this.prop);
            return isNaN(a = parseFloat(b)) ? b && "auto" !== b ? b : 0 : a
        },
        "custom": function(a, b, c) {
            function g(a) {
                return d.step(a)
            }
            var d = this
              , e = f.fx;
            this.startTime = nc || oc(),
            this.start = a,
            this.end = b,
            this.unit = c || this.unit || (f.cssNumber[this.prop] ? "" : "px"),
            this.now = this.start,
            this.pos = this.state = 0,
            g.elem = this.elem,
            g() && f.timers.push(g) && !lc && (lc = setInterval(e.tick, e.interval))
        },
        "show": function() {
            this.options.orig[this.prop] = f.style(this.elem, this.prop),
            this.options.show = !0,
            this.custom("width" === this.prop || "height" === this.prop ? 1 : 0, this.cur()),
            f(this.elem).show()
        },
        "hide": function() {
            this.options.orig[this.prop] = f.style(this.elem, this.prop),
            this.options.hide = !0,
            this.custom(this.cur(), 0)
        },
        "step": function(a) {
            var g, h, b = nc || oc(), c = !0, d = this.elem, e = this.options;
            if (a || b >= e.duration + this.startTime) {
                this.now = this.end,
                this.pos = this.state = 1,
                this.update(),
                e.animatedProperties[this.prop] = !0;
                for (g in e.animatedProperties)
                    e.animatedProperties[g] !== !0 && (c = !1);
                if (c) {
                    if (null == e.overflow || f.support.shrinkWrapBlocks || f.each(["", "X", "Y"], function(a, b) {
                        d.style["overflow" + b] = e.overflow[a]
                    }),
                    e.hide && f(d).hide(),
                    e.hide || e.show)
                        for (var i in e.animatedProperties)
                            f.style(d, i, e.orig[i]);
                    e.complete.call(d)
                }
                return !1
            }
            return 1 / 0 == e.duration ? this.now = b : (h = b - this.startTime,
            this.state = h / e.duration,
            this.pos = f.easing[e.animatedProperties[this.prop]](this.state, h, 0, 1, e.duration),
            this.now = this.start + (this.end - this.start) * this.pos),
            this.update(),
            !0
        }
    },
    f.extend(f.fx, {
        "tick": function() {
            for (var a = f.timers, b = 0; b < a.length; ++b)
                a[b]() || a.splice(b--, 1);
            a.length || f.fx.stop()
        },
        "interval": 13,
        "stop": function() {
            clearInterval(lc),
            lc = null
        },
        "speeds": {
            "slow": 600,
            "fast": 200,
            "_default": 400
        },
        "step": {
            "opacity": function(a) {
                f.style(a.elem, "opacity", a.now)
            },
            "_default": function(a) {
                a.elem.style && null != a.elem.style[a.prop] ? a.elem.style[a.prop] = ("width" === a.prop || "height" === a.prop ? Math.max(0, a.now) : a.now) + a.unit : a.elem[a.prop] = a.now
            }
        }
    }),
    f.expr && f.expr.filters && (f.expr.filters.animated = function(a) {
        return f.grep(f.timers, function(b) {
            return a === b.elem
        }).length
    }
    );
    var sc = /^t(?:able|d|h)$/i
      , tc = /^(?:body|html)$/i;
    f.fn.offset = "getBoundingClientRect"in c.documentElement ? function(a) {
        var c, b = this[0];
        if (a)
            return this.each(function(b) {
                f.offset.setOffset(this, a, b)
            });
        if (!b || !b.ownerDocument)
            return null;
        if (b === b.ownerDocument.body)
            return f.offset.bodyOffset(b);
        try {
            c = b.getBoundingClientRect()
        } catch (d) {}
        var e = b.ownerDocument
          , g = e.documentElement;
        if (!c || !f.contains(g, b))
            return c ? {
                "top": c.top,
                "left": c.left
            } : {
                "top": 0,
                "left": 0
            };
        var h = e.body
          , i = uc(e)
          , j = g.clientTop || h.clientTop || 0
          , k = g.clientLeft || h.clientLeft || 0
          , l = i.pageYOffset || f.support.boxModel && g.scrollTop || h.scrollTop
          , m = i.pageXOffset || f.support.boxModel && g.scrollLeft || h.scrollLeft
          , n = c.top + l - j
          , o = c.left + m - k;
        return {
            "top": n,
            "left": o
        }
    }
    : function(a) {
        var b = this[0];
        if (a)
            return this.each(function(b) {
                f.offset.setOffset(this, a, b)
            });
        if (!b || !b.ownerDocument)
            return null;
        if (b === b.ownerDocument.body)
            return f.offset.bodyOffset(b);
        f.offset.initialize();
        for (var c, d = b.offsetParent, e = b, g = b.ownerDocument, h = g.documentElement, i = g.body, j = g.defaultView, k = j ? j.getComputedStyle(b, null) : b.currentStyle, l = b.offsetTop, m = b.offsetLeft; (b = b.parentNode) && b !== i && b !== h && (!f.offset.supportsFixedPosition || "fixed" !== k.position); )
            c = j ? j.getComputedStyle(b, null) : b.currentStyle,
            l -= b.scrollTop,
            m -= b.scrollLeft,
            b === d && (l += b.offsetTop,
            m += b.offsetLeft,
            !f.offset.doesNotAddBorder || f.offset.doesAddBorderForTableAndCells && sc.test(b.nodeName) || (l += parseFloat(c.borderTopWidth) || 0,
            m += parseFloat(c.borderLeftWidth) || 0),
            e = d,
            d = b.offsetParent),
            f.offset.subtractsBorderForOverflowNotVisible && "visible" !== c.overflow && (l += parseFloat(c.borderTopWidth) || 0,
            m += parseFloat(c.borderLeftWidth) || 0),
            k = c;
        return ("relative" === k.position || "static" === k.position) && (l += i.offsetTop,
        m += i.offsetLeft),
        f.offset.supportsFixedPosition && "fixed" === k.position && (l += Math.max(h.scrollTop, i.scrollTop),
        m += Math.max(h.scrollLeft, i.scrollLeft)),
        {
            "top": l,
            "left": m
        }
    }
    ,
    f.offset = {
        "initialize": function() {
            var d, e, h, a = c.body, b = c.createElement("div"), i = parseFloat(f.css(a, "marginTop")) || 0, j = "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
            f.extend(b.style, {
                "position": "absolute",
                "top": 0,
                "left": 0,
                "margin": 0,
                "border": 0,
                "width": "1px",
                "height": "1px",
                "visibility": "hidden"
            }),
            b.innerHTML = j,
            a.insertBefore(b, a.firstChild),
            d = b.firstChild,
            e = d.firstChild,
            h = d.nextSibling.firstChild.firstChild,
            this.doesNotAddBorder = 5 !== e.offsetTop,
            this.doesAddBorderForTableAndCells = 5 === h.offsetTop,
            e.style.position = "fixed",
            e.style.top = "20px",
            this.supportsFixedPosition = 20 === e.offsetTop || 15 === e.offsetTop,
            e.style.position = e.style.top = "",
            d.style.overflow = "hidden",
            d.style.position = "relative",
            this.subtractsBorderForOverflowNotVisible = -5 === e.offsetTop,
            this.doesNotIncludeMarginInBodyOffset = a.offsetTop !== i,
            a.removeChild(b),
            f.offset.initialize = f.noop
        },
        "bodyOffset": function(a) {
            var b = a.offsetTop
              , c = a.offsetLeft;
            return f.offset.initialize(),
            f.offset.doesNotIncludeMarginInBodyOffset && (b += parseFloat(f.css(a, "marginTop")) || 0,
            c += parseFloat(f.css(a, "marginLeft")) || 0),
            {
                "top": b,
                "left": c
            }
        },
        "setOffset": function(a, b, c) {
            var d = f.css(a, "position");
            "static" === d && (a.style.position = "relative");
            var m, n, e = f(a), g = e.offset(), h = f.css(a, "top"), i = f.css(a, "left"), j = ("absolute" === d || "fixed" === d) && f.inArray("auto", [h, i]) > -1, k = {}, l = {};
            j ? (l = e.position(),
            m = l.top,
            n = l.left) : (m = parseFloat(h) || 0,
            n = parseFloat(i) || 0),
            f.isFunction(b) && (b = b.call(a, c, g)),
            null != b.top && (k.top = b.top - g.top + m),
            null != b.left && (k.left = b.left - g.left + n),
            "using"in b ? b.using.call(a, k) : e.css(k)
        }
    },
    f.fn.extend({
        "position": function() {
            if (!this[0])
                return null;
            var a = this[0]
              , b = this.offsetParent()
              , c = this.offset()
              , d = tc.test(b[0].nodeName) ? {
                "top": 0,
                "left": 0
            } : b.offset();
            return c.top -= parseFloat(f.css(a, "marginTop")) || 0,
            c.left -= parseFloat(f.css(a, "marginLeft")) || 0,
            d.top += parseFloat(f.css(b[0], "borderTopWidth")) || 0,
            d.left += parseFloat(f.css(b[0], "borderLeftWidth")) || 0,
            {
                "top": c.top - d.top,
                "left": c.left - d.left
            }
        },
        "offsetParent": function() {
            return this.map(function() {
                for (var a = this.offsetParent || c.body; a && !tc.test(a.nodeName) && "static" === f.css(a, "position"); )
                    a = a.offsetParent;
                return a
            })
        }
    }),
    f.each(["Left", "Top"], function(a, c) {
        var d = "scroll" + c;
        f.fn[d] = function(c) {
            var e, g;
            return c === b ? (e = this[0]) ? (g = uc(e),
            g ? "pageXOffset"in g ? g[a ? "pageYOffset" : "pageXOffset"] : f.support.boxModel && g.document.documentElement[d] || g.document.body[d] : e[d]) : null : this.each(function() {
                g = uc(this),
                g ? g.scrollTo(a ? f(g).scrollLeft() : c, a ? c : f(g).scrollTop()) : this[d] = c
            })
        }
    }),
    f.each(["Height", "Width"], function(a, c) {
        var d = c.toLowerCase();
        f.fn["inner" + c] = function() {
            var a = this[0];
            return a && a.style ? parseFloat(f.css(a, d, "padding")) : null
        }
        ,
        f.fn["outer" + c] = function(a) {
            var b = this[0];
            return b && b.style ? parseFloat(f.css(b, d, a ? "margin" : "border")) : null
        }
        ,
        f.fn[d] = function(a) {
            var e = this[0];
            if (!e)
                return null == a ? null : this;
            if (f.isFunction(a))
                return this.each(function(b) {
                    var c = f(this);
                    c[d](a.call(this, b, c[d]()))
                });
            if (f.isWindow(e)) {
                var g = e.document.documentElement["client" + c]
                  , h = e.document.body;
                return "CSS1Compat" === e.document.compatMode && g || h && h["client" + c] || g
            }
            if (9 === e.nodeType)
                return Math.max(e.documentElement["client" + c], e.body["scroll" + c], e.documentElement["scroll" + c], e.body["offset" + c], e.documentElement["offset" + c]);
            if (a === b) {
                var i = f.css(e, d)
                  , j = parseFloat(i);
                return f.isNaN(j) ? i : j
            }
            return this.css(d, "string" == typeof a ? a : a + "px")
        }
    }),
    a.jQuery = a.$ = f
}(window);
/* jdf-2.0.0/ ui.js Date:2017-12-19 10:31:08 */
!function(a, b) {
    !function() {
        var a = navigator.userAgent.toLowerCase();
        "undefined" == typeof b.browser ? b.browser = {
            version: (a.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [])[1],
            safari: /webkit/.test(a),
            opera: /opera/.test(a),
            msie: /msie/.test(a) && !/opera/.test(a) || /trident/.test(a),
            mozilla: /mozilla/.test(a) && !/(compatible|webkit)/.test(a)
        } : (b.browser.webkit || (b.browser.webkit = /webkit/.test(a)),
        b.browser.mozilla && (b.browser.msie = /trident/.test(a))),
        b.extend(b.browser, function() {
            {
                var a = navigator.userAgent;
                navigator.appVersion
            }
            return {
                mobile: !!a.match(/AppleWebKit.*Mobile.*/),
                ios: !!a.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
                android: a.indexOf("Android") > -1 || a.indexOf("Linux") > -1,
                iPhone: a.indexOf("iPhone") > -1,
                iPad: a.indexOf("iPad") > -1,
                webApp: -1 == a.indexOf("Safari")
            }
        }()),
        b.browser.isMobile = function(a) {
            return function() {
                return a
            }
        }(b.browser.mobile || b.browser.ios || b.browser.android),
        b.each([6, 7, 8, 9, 10, 11, 12], function(a, c) {
            b.browser["isIE" + c] = function(a) {
                return function() {
                    return a
                }
            }(!(!b.browser.msie || b.browser.version != c))
        })
    }(),
    b.page = b.extend(b.page || {}, {
        document: "BackCompat" == document.compatMode ? document.body : document.documentElement,
        doc: function() {
            return this.document
        },
        clientWidth: function() {
            return this.document.clientWidth
        },
        clientHeight: function() {
            return this.document.clientHeight
        },
        docWidth: function() {
            return Math.max(this.document.clientWidth, this.document.scrollWidth)
        },
        docHeight: function() {
            return Math.max(this.document.clientHeight, this.document.scrollHeight)
        }
    }),
    "undefined" == typeof b.contains && (b.contains = function(a, b) {
        return a.compareDocumentPosition ? !!(16 & a.compareDocumentPosition(b)) : a !== b && a.contains(b)
    }
    ),
    b.T = {
        throttle: function(a, c, d) {
            var e = -1;
            return 1 > c ? function() {
                b.T.call(null, d, -1);
                try {
                    a.apply(this, arguments)
                } catch (c) {
                    console.error(c)
                }
            }
            : function() {
                var f = arguments;
                var g = this;
                clearTimeout(e),
                e = setTimeout(function() {
                    clearTimeout(e);
                    try {
                        a.apply(g, f)
                    } catch (b) {
                        console.error(b)
                    }
                }, c),
                b.T.call(null, d, e)
            }
        },
        call: function(a, c) {
            var e = 1;
            var f = this;
            var g = a;
            b.isFunction(a) || (f = a,
            g = c,
            e = 2),
            b.isFunction(g) && g.apply(f, [].slice.call(arguments, e))
        },
        apply: function(a, c, d) {
            var e = a;
            var f = c;
            var g = d;
            b.isFunction(a) && (e = this,
            f = a,
            g = c),
            b.isFunction(f) && f.apply(e, [].concat(g))
        },
        tpl: function() {
            var a = {};
            return function(b, c, d) {
                var e = "string" == typeof d ? d : b;
                var f = "boolean" == typeof d ? d : !0;
                var g = a[e] || new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + b.replace(/[\r\t\n]/g, " ").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("	").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');");
                return f && (a[e] = g),
                c ? g(c) : g
            }
        }(),
        isBlank: function(a) {
            var c = arguments;
            if (c.length > 1) {
                for (var d = 0, e = c.length; e > d; d++)
                    if (arguments.callee(c[d]))
                        return !0;
                return !1
            }
            return "undefined" === String(a) || "null" === String(a) || ("string" == typeof a ? "" === b.trim(a) : !1) || b.isEmptyObject(a)
        },
        search: function() {
            var a = {};
            var c = "_@separating@_";
            return b.each(location.search.substring(1).split("&"), function(d, e) {
                if (e = e.replace(/\%20/g, "").replace("=", c).split(c),
                e[0])
                    if ("isdebug" == e[0] && e[1]) {
                        var f = {};
                        b.each(e[1].replace(/^\-/, "").split("-"), function(a, b) {
                            b && (f[b] = !0)
                        }),
                        a[e[0]] = f
                    } else
                        a[e[0]] = e[1]
            }),
            function(c, d) {
                if (!c)
                    return a;
                if (!b.isPlainObject(c) && null == d)
                    return a[c];
                if ("isdebug" == c)
                    return !(!a[c] || !a[c][d]);
                var e = arguments.callee;
                if (b.isPlainObject(c)) {
                    var f = !0;
                    var g = 0 == d;
                    return b.each(c, function(a, b) {
                        var c = e(a, b);
                        return g && c ? (f = !0,
                        !1) : g || c ? void 0 : f = !1
                    }),
                    f
                }
                return !(!a[c] || a[c] != d)
            }
        }(),
        getAllUI: function(a) {
            var c = [];
            return b.each(JDFUI.classes(), function(b) {
                c = c.concat(JDFUI[b].get(a))
            }),
            c
        }
    },
    b.tpl = b.T.tpl,
    b.T.defer = b.T.throttle
}(window, jQuery),
function(a) {
    if (a.browser.isMobile()) {
        var c, b = {};
        function d(a) {
            return "tagName"in a ? a : a.parentNode
        }
        function e(a, b, c, d) {
            var e = Math.abs(a - b)
              , f = Math.abs(c - d);
            return e >= f ? a - b > 0 ? "Left" : "Right" : c - d > 0 ? "Up" : "Down"
        }
        var g, f = 750;
        function h() {
            g = null,
            b.last && (b.el.trigger("longTap"),
            b = {})
        }
        function i() {
            g && clearTimeout(g),
            g = null
        }
        a(document).ready(function() {
            var j, k;
            a(document.body).bind("touchstart", function(e) {
                j = Date.now(),
                k = j - (b.last || j),
                b.el = a(d(e.target)),
                c && clearTimeout(c),
                b.x1 = e.pageX,
                b.y1 = e.pageY,
                k > 0 && 250 >= k && (b.isDoubleTap = !0),
                b.last = j,
                g = setTimeout(h, f)
            }).bind("touchmove", function(a) {
                i(),
                b.x2 = a.pageX,
                b.y2 = a.pageY
            }).bind("touchend", function() {
                i(),
                b.isDoubleTap ? (b.el.trigger("doubleTap"),
                b = {}) : b.x2 && Math.abs(b.x1 - b.x2) > 30 || b.y2 && Math.abs(b.y1 - b.y2) > 30 ? (b.el.trigger("swipe") && b.el.trigger("swipe" + e(b.x1, b.x2, b.y1, b.y2)),
                b = {}) : "last"in b && (b.el.trigger("tap"),
                c = setTimeout(function() {
                    c = null,
                    b.el.trigger("singleTap"),
                    b = {}
                }, 250))
            }).bind("touchcancel", function() {
                c && clearTimeout(c),
                g && clearTimeout(g),
                g = c = null,
                b = {}
            })
        }),
        ["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap"].forEach(function(b) {
            a.fn[b] = function(a) {
                return this.bind(b, a)
            }
        })
    }
}($),
function(a, b, c) {
    if (!b)
        return !1;
    var d = a.JDFUI;
    if (d && "2.0.0" == d.version && "JDF" == d.author || (d = function() {
        function d() {}
        "undefined" == typeof console && (a.console = {
            info: d,
            log: d,
            warn: d,
            error: d
        });
        var e = -1;
        var f = {
            id: -1,
            uuid: null,
            guid: -1,
            name: null,
            version: "2.0.0",
            el: null,
            selector: null,
            eventNamespace: null,
            options: {
                isAutoInit: !0,
                hasCssLink: !1,
                baseVersion: "1.0.0",
                cssLinkVersion: "1.0.0"
            },
            constructor: function() {},
            init: d,
            cache: function() {},
            show: function() {
                this.el.show()
            },
            hide: function() {
                this.el.hide()
            }
        };
        var g = {
            isAdvanced: !0,
            initCount: 0,
            _: {},
            event: {},
            isAlive: !0,
            options: {
                SSCode: 0,
                SSKeys: null,
                hasCssLink: !1,
                onReady: d,
                onDestroy: d
            },
            on: function() {},
            one: function() {},
            off: function() {},
            trigger: function() {},
            eventHandler: function() {},
            delegate: function() {},
            call: function(a) {
                if (b.isFunction(a)) {
                    var d = [].slice.call(arguments, 1);
                    a.apply(this, d)
                }
            },
            unbindEvent: d,
            loadAllEls: d,
            destroy: d
        };
        var h = ["id", "guid", "name", "eventNamespace", "selector", "cache"];
        var i = "abort,blur,change,click,dblclick,drag,dragend,dragenter,dragleave,dragover,dragstart,drop,durationchange,focus,input,keydown,keypress,keyup,mousedown,mouseenter,mouseleave,mousemove,mouseout,mouseover,mouseup,mousewheel,scroll,select,submit,wheel".split(",");
        var j = /\b(\w)/g;
        var k = /El$/;
        var l = /Evt$/;
        var m = /\btimer\b|Timer$/;
        var n = /\binterval\b|Interval$/;
        var o = /^on[A-Z]/;
        var p = /\w\#\w/;
        var q = /^(author|version|define|all|classes|helper|loadRootUI|gc)$/;
        var r = /\w+#$/;
        var s = /#\w*/;
        var t = "data-options";
        var u = "data-opt-";
        var v = "ui-on-event";
        var w = /^(el|selector|hover)$/;
        var x = /^on|callback|complete$/;
        var y = /\s+/g;
        var z = /^static_/;
        var A = /^(create|get|all|forEach)$/;
        var B = {};
        var C = {};
        var D = {
            create: function(a, c, d) {
                var f = C[c];
                var g = b(a);
                if (!f)
                    return null;
                var h = V(f.options || {}, g);
                var i = b.extend(!0, {}, f, {
                    options: h
                }, {
                    options: d,
                    guid: e + 1,
                    id: f.id + 1
                });
                i.el = g,
                i.selector = g.selector = a.selector,
                i.eventNamespace = ".ui-" + c + "-" + i.id;
                var j = i.options;
                if ("1.0.0" == j.baseVersion)
                    O(i);
                else {
                    var k = M(c, g, j);
                    if (!k)
                        return !1;
                    if (k !== !0)
                        return k.selector = a.selector,
                        k.init(d),
                        k.cache("origin_options", b.extend(i.cache("origin_options"), d)),
                        k;
                    H.createClass(i),
                    i.cache("origin_options", d),
                    N(i)
                }
                return B[c].push(i),
                W(c),
                C[c].id++,
                e++,
                K(i),
                i
            },
            register: function(a, c) {
                var d = C[c.uuid];
                if (d)
                    return !1;
                var e = this.getClasses(c.extend);
                var h = {};
                return c.isAdvanced && (h = g),
                e.length ? d = b.extend.apply(b, [!0, {}, f, h].concat(e).concat([c])) : (_(c.uuid, c),
                d = b.extend(!0, {}, f, h, c)),
                C[c.uuid] = d,
                d.name = a,
                B[c.uuid] = [],
                !0
            },
            getClasses: function(a) {
                var c = [];
                var d = null;
                var e = [];
                return a ? (b.isArray(a) ? e = a : e.push(a),
                b.each(e, function(a, b) {
                    if (d = C[b],
                    !d)
                        throw new Error(b + " is not exist!");
                    c.push(d)
                }),
                c) : c
            }
        };
        var E = {
            author: "JDF",
            version: "2.0.0",
            define: I("define", function(a, c) {
                if (!a || !c || "string" != typeof a || q.test(a) || !b.isPlainObject(c))
                    return !1;
                c.options = c.options || {},
                c.options.baseVersion = c.options.baseVersion || "1.0.0";
                var d = {};
                return b.each(c, function(a, b) {
                    if (z.test(a)) {
                        var e = a.substring(7);
                        c[e] && console.warn('static method "' + a + '" will be overwrite "' + e + '" method! '),
                        c[e] = d[e] = b,
                        delete c[a]
                    }
                }),
                r.test(a) ? (a = a.replace(s, ""),
                c.isAdvanced = !0,
                c.options.baseVersion = "2.0.0") : c.isAdvanced = !1,
                c.uuid = a + (c.isAdvanced ? 2 : 1),
                E[c.uuid] ? E[c.uuid] : D.register(a, c) ? (E[c.uuid] = Z(C[c.uuid], d),
                E[a] || (E[a] = E[c.uuid]),
                X(a),
                Y(a),
                E[c.uuid]) : !1
            }),
            all: I("all", function() {
                return b.extend(!0, {}, B)
            }),
            classes: I("classes", function() {
                return b.extend(!0, {}, C)
            }),
            helper: I("helper", function(a) {
                if ("object" != typeof seajs)
                    return console.warn("require seajs.js!"),
                    !1;
                var c = ["jdf/2.0.0/ui/helper/1.0.0/helper.js"];
                b.each(C, function(a, b) {
                    b.isAdvanced && c.push("jdf/" + b.options.baseVersion + "/ui/" + b.name + "/" + b.options.cssLinkVersion + "/helper.js")
                }),
                c.length && seajs.use(c, function(c) {
                    b.T.call(c, a, B)
                })
            }),
            loadRootUI: I("loadRootUI", function() {
                var a = "data-root-ui";
                var c = "data-root-ui-url";
                var d = "data-root-install";
                var e = [];
                var f = b("[" + a + "][" + d + '!="done"]');
                return f.each(function() {
                    var d = b(this);
                    var f = d.attr(a);
                    var g = d.attr(c);
                    return !g && q.test(f) ? !0 : void e.push(g || "jdf/2.0.0/ui/" + f + "/1.0.0/" + f + ".js")
                }),
                e.length ? void seajs.use(e, function() {
                    f.each(function() {
                        var e = b(this);
                        var f = e.attr(a);
                        var g = E[f + "2"];
                        if (!g || !e.attr(c) && q.test(f))
                            return !0;
                        var h = g({
                            el: e,
                            isAutoInit: !1
                        });
                        return h ? (h.on("ready", function() {
                            e.attr(d, "done")
                        }),
                        void h.init()) : !0
                    })
                }) : !1
            }),
            gc: I("gc", function() {
                var a = F.list;
                return a.length ? (b.each(a, function(a, c) {
                    delete c.data,
                    delete c.event,
                    delete c.eventIDs,
                    b.each(c.instance, function(a) {
                        delete c.instance[a]
                    }),
                    delete c.instance
                }),
                F.list = [],
                !0) : !1
            })
        };
        var F = {
            list: [],
            push: function(a) {
                this.list.push(a),
                this.clear()
            },
            clear: b.T.throttle(function() {
                E.gc()
            }, 3e3)
        };
        function G(a, b) {
            this.name = a,
            this.ui = b
        }
        G.createClass = function(a, c) {
            var d = new G(a,c);
            b.each(["create", "get", "forEach"], function(a, b) {
                c[b] = I(b, function() {
                    return d[b].apply(d, arguments)
                })
            }),
            c.all = B[a]
        }
        ,
        G.prototype.create = function(a, c, d) {
            var e = this.name;
            var f = [];
            var g = a.selector;
            return b.each(a, function(a, b) {
                b.selector = g + ":eq(" + a + ")",
                f.push(D.create(b, e, c))
            }),
            1 == d ? this : 1 == f.length ? f.pop() : f
        }
        ,
        G.prototype.get = function(a) {
            var c = this.name;
            var d = [];
            return a instanceof b && b.each(a, function(a, e) {
                e = b(e).get(0),
                b.each(B[c], function(a, b) {
                    e == b.el.get(0) && d.push(b)
                })
            }),
            d.length && b.each(d[0], function(a, c) {
                b.isFunction(c) && !A.test(a) && (d[a] = function() {
                    var c = arguments;
                    return b.each(d, function() {
                        this[a].apply(this, c)
                    }),
                    d
                }
                )
            }),
            d
        }
        ,
        G.prototype.forEach = function(a) {
            if (b.isFunction(a)) {
                var c = B[this.name];
                for (var d = c.length - 1; d >= 0; d--)
                    a.call(c[d], d, c[d])
            }
            return this.ui
        }
        ;
        function H(a) {
            var b = this;
            b.data = {},
            b.event = {},
            b.eventIDs = {},
            b.instance = a
        }
        H.createClass = function(a) {
            var c = new H(a);
            b.each(["on", "one", "off", "trigger", "eventHandler", "delegate"], function(b, d) {
                a[d] = I(d, function() {
                    return c[d].apply(c, arguments),
                    a
                })
            }),
            a.cache = I("cache", function() {
                return c.cache.apply(c, arguments)
            });
            var e = b.isFunction(a.unbindEvent) ? a.unbindEvent : d;
            a.unbindEvent = I("unbindEvent", function() {
                return c.unbindEvent.apply(c, arguments),
                e.apply(a, arguments),
                a
            });
            var f = b.isFunction(a.loadAllEls) ? a.loadAllEls : d;
            a.loadAllEls = I("loadAllEls", function() {
                return c.loadAllEls.apply(c, arguments),
                f.apply(a, arguments),
                a
            });
            var g = b.isFunction(a.destroy) ? a.destroy : d;
            a.destroy = I("destroy", function() {
                return g.apply(a, arguments),
                b.T.call(a, a.options.onDestroy),
                c.destroy.apply(c, arguments),
                a
            })
        }
        ,
        H.prototype.cache = function(a, b) {
            var d = this;
            if (a)
                return b === c ? d.data[a] : null !== b ? d.data[a] = b : void delete d.data[a]
        }
        ,
        H.prototype.on = function(a, c) {
            if (a && b.isFunction(c)) {
                var d = this;
                if (a = a.toLowerCase(),
                p.test(a)) {
                    var e = a.split("#");
                    if (d.eventIDs[a])
                        return d.off(a, d.eventIDs[a]),
                        d.on(a, c),
                        !1;
                    d.eventIDs[a] = c,
                    a = e[0]
                }
                d.event[a] = (d.event[a] || []).concat([c])
            }
        }
        ,
        H.prototype.one = function(a, c) {
            if (a && b.isFunction(c)) {
                var d = this;
                a = a.toLowerCase(),
                d.on(a, function() {
                    return c.apply(this, arguments),
                    d.off(a, arguments.callee),
                    v
                })
            }
        }
        ,
        H.prototype.off = function(a, c) {
            if (a || b.isFunction(c)) {
                var d = this;
                if (a = a.toLowerCase(),
                p.test(a)) {
                    var e = a.split("#");
                    if (!d.eventIDs[a])
                        return !1;
                    c = d.eventIDs[a],
                    delete d.eventIDs[a],
                    a = e[0]
                } else
                    b.each(d.eventIDs, function(b) {
                        0 == b.indexOf(a + "#") && delete d.eventIDs[b]
                    });
                var f = d.event[a] || [];
                if (b.isFunction(c)) {
                    for (var g = f.length - 1, h = null; g >= 0; g--)
                        if (h = f[g],
                        f[g] == c) {
                            f.splice(g, 1);
                            break
                        }
                } else
                    f = [];
                d.event[a] = f
            }
        }
        ,
        H.prototype.trigger = function(a, c) {
            if (a) {
                var d = this;
                var e = d.instance;
                if (a = a.toLowerCase(),
                d.event[a]) {
                    c = [].slice.call(arguments, 1);
                    for (var f = 0; f < d.event[a].length; f++) {
                        var g = d.event[a][f];
                        b.isFunction(g) && (f -= g.apply(e, c) == v ? 1 : 0)
                    }
                }
            }
        }
        ,
        H.prototype.eventHandler = function(a) {
            var c = this;
            var d = c.instance;
            if (!a)
                return d;
            if (a.el = a.el || d.el,
            b.each(a, function(b, c) {
                w.test(b) || (a.selector ? a.el.delegate(a.selector, S(d, b), c) : a.el.bind(S(d, b), c))
            }),
            a.hover) {
                var e = a.hover;
                b.isArray(e) ? 1 == e.length && e.push(e[0]) : e = [e, e],
                arguments.callee.call(c, {
                    el: a.el,
                    selector: a.selector,
                    mouseenter: e[0],
                    mouseleave: e[1]
                })
            }
            return d
        }
        ,
        H.prototype.delegate = function(a, c, d) {
            var e = this.instance;
            a instanceof b ? a.bind(c, d) : "string" == typeof a && e.el.delegate(a, c, d)
        }
        ,
        H.prototype.unbindEvent = function() {
            var a = this;
            var c = a.instance;
            c.el.unbind(c.eventNamespace),
            b.each(c.options, function(a, d) {
                k.test(a) && d instanceof b && d.unbind(c.eventNamespace)
            }),
            !b.isEmptyObject(c._) && b.isPlainObject(c._) && b.each(c._, function(a, d) {
                k.test(a) && d instanceof b ? d.unbind(c.eventNamespace) : m.test(a) ? clearTimeout(d) : n.test(a) && clearInterval(d)
            })
        }
        ,
        H.prototype.loadAllEls = function() {
            var a = this;
            var c = a.instance;
            var d = c.cache("options");
            var e = null;
            b.each(d, function(a, d) {
                !k.test(a) || d instanceof b || (d ? (c.options[a] = b(d, c.el),
                c.options[a.replace(k, "") + "Selector"] = d) : (d = '[data-root="' + a.substring(0, a.length - 2) + '"]',
                e = b(d, c.el),
                e.length && (c.options[a] = e,
                c.options[a.replace(k, "") + "Selector"] = d)))
            })
        }
        ,
        H.prototype.destroy = function() {
            var a = this;
            var b = a.instance;
            b.unbindEvent(),
            b.isAlive = !1,
            J(b),
            F.push(a)
        }
        ;
        function I(a, b) {
            return b.toString = function() {
                return a + " { [native code] }"
            }
            ,
            b
        }
        function J(a) {
            var c = a.uuid;
            var d = B[c];
            var e = d.length;
            b.each(d, function(b, c) {
                return c.id == a.id ? (d.splice(b, 1),
                !1) : void 0
            }),
            W(c, e)
        }
        function K(a) {
            var b = a.options;
            if (b.hasCssLink && "undefined" != typeof seajs && b.cssLinkVersion && b.baseVersion)
                seajs.use(("https:" == document.location.protocol ? "https:" : "http:") + "//misc.360buyimg.com/jdf/" + b.baseVersion + "/ui/" + a.name + "/" + b.cssLinkVersion + "/" + a.name + ".css", function() {
                    b.isAutoInit && a.init()
                });
            else if (b.isAutoInit) {
                var c = a.init();
                c !== !1 || a.isAdvanced || J(a)
            }
        }
        function L(a, c) {
            if (!b.isPlainObject(a))
                return "";
            if (!b.isArray(c))
                return "";
            var d = [];
            var e = "";
            return b.each(c, function(c, f) {
                e = a[f],
                k.test(f) && e instanceof b && (e = e.selector),
                d.push(f + ":" + String(e))
            }),
            d.join(",")
        }
        function M(a, c, d) {
            var e = d.SSCode;
            if (e > 0) {
                var f = E[a].get(c);
                if (f.length) {
                    if (d.SSKeys) {
                        var g = L(d, d.SSKeys);
                        var h = [];
                        if (g && b.each(f, function(a, b) {
                            L(b.cache("options"), d.SSKeys) == g && h.push(b)
                        }),
                        !h.length)
                            return !0;
                        f = h
                    }
                    switch (e % 2 != 0 && console.warn(c, c.selector + " has been bind " + a + " component!", f),
                    e) {
                    case 1:
                        break;
                    case 2:
                        return f[0];
                    case 3:
                        return !1
                    }
                }
            }
            return !0
        }
        function N(a) {
            a.cache("options", b.extend({}, a.options, !0)),
            Q(a),
            T(a),
            U(a)
        }
        function O(a) {
            a.cache("options", b.extend({}, a.options, !0)),
            b.each(a.options, function(c, d) {
                x.test(c.toLowerCase()) && b.isFunction(a.options[c]) && (a.options[c] = function(a) {
                    var c = [a];
                    var d = function() {
                        var a = this;
                        var d = arguments;
                        b.each(c, function(b, c) {
                            c.apply(a, d)
                        })
                    };
                    return d.callbacks = c,
                    d.add = function(a) {
                        d.callbacks.push(a)
                    }
                    ,
                    d
                }(d))
            })
        }
        function P() {
            var a = this;
            var c = a.options;
            var d = a.cache("options");
            var e;
            var f = {};
            b.each([].slice.call(arguments, 0), function(g, h) {
                e ? (c[e] = f[e] = d[e] = h,
                e = null) : b.isPlainObject(h) ? (f = h,
                b.extend(d, f),
                b.extend(a.options, f)) : e = String(h).replace(y, "")
            }),
            a.cache("options", d),
            a.cache("origin_options", b.extend(a.cache("origin_options"), f)),
            b.each(f, function(b, c) {
                R(a, b, c)
            })
        }
        function Q(a) {
            b.each(a.options, function(b, c) {
                R(a, b, c)
            })
        }
        function R(a, b, c) {
            if ((l.test(b) || "evt" == b) && c)
                a.options[b] = S(a, c);
            else if (o.test(b)) {
                var d = b.substring(2);
                a.on(d + "#__id_" + a.id, c),
                a.options[b] = I(b, function() {
                    var b = [].slice.call(arguments);
                    b.unshift(d),
                    a.trigger.apply(null, b)
                })
            }
        }
        function S(a, b) {
            return b + a.eventNamespace
        }
        function T(a) {
            var c = {};
            b.each(i, function(b, d) {
                c[d] = S(a, d)
            }),
            a.event = c
        }
        function U(a) {
            var c = a.init;
            a.init = I("init", function() {
                var d = {};
                return a.unbindEvent(),
                a.initCount++,
                arguments.length && P.apply(a, arguments),
                a.loadAllEls(),
                $(a),
                b.isFunction(c) && (d = c.apply(a, arguments),
                d === !1) ? void 0 : (b.T.call(a, a.options.onReady, d),
                a)
            })
        }
        function V(c, d) {
            var e = d.attr(t);
            var f = null;
            var g, h = d[0].attributes;
            var i = 9;
            if (e && e.length > 2)
                try {
                    f = a.eval("(" + e + ")")
                } catch (j) {}
            return f || (f = {}),
            h && h.length && b.each(h, function(a, d) {
                0 == d.name.indexOf(u) && d.name.length > i && (g = d.name.substring(i).toLocaleLowerCase(),
                b.each(c, function(a) {
                    a.toLocaleLowerCase() == g && (f[a] = d.value)
                }))
            }),
            f
        }
        function W(a, c) {
            c = Math.max(c || 0, B[a].length);
            for (var d = 0; c > d; d++)
                delete E[a][d];
            b.each(B[a], function(b, c) {
                E[a][b] = c
            })
        }
        function X(a) {
            return b.fn[a] ? (b.T.search("isdebug", 1) && console.warn('$.fn["' + a + '"] is exist!'),
            !1) : void (b.fn[a] = function(b, c) {
                return E[a].create(this, b, c)
            }
            )
        }
        function Y(a) {
            var c = "get" + a.replace(j, function(a) {
                return a.toUpperCase()
            });
            return b.fn[c] ? (b.T.search("isdebug", 1) && console.warn("$.fn[" + c + "] is exist!"),
            !1) : void (b.fn[c] = function() {
                return E[a].get(this)
            }
            )
        }
        function Z(a, c) {
            var d = a.uuid;
            function e(c) {
                return c ? (c.el instanceof b || (c.el = b(c.el ? c.el : "body")),
                E[d].create(c.el, c)) : a
            }
            return G.createClass(d, e),
            b.each(a, function(a, c) {
                b.isFunction(c) && !A.test(a) && (e.all[a] = function() {
                    var b = arguments;
                    return e.forEach(function() {
                        this[a].apply(this, b)
                    }),
                    e.all
                }
                )
            }),
            b.each(c || [], function(a, b) {
                e[a] = b
            }),
            e
        }
        function $(a) {
            b.T.search("isdebug", 1) && E.helper(function() {
                var c = this;
                c && b.T.call(c.test, a)
            })
        }
        function _(a, d) {
            b.each(h, function(b, e) {
                d[e] !== c && console.error("SyntaxError: " + a + "." + e + "  is a reserved identifier")
            })
        }
        return a.JDFUI = E,
        b(function() {
            E.loadRootUI()
        }),
        E
    }()),
    "function" == typeof define && define("//misc.360buyimg.com/jdf/2.0.0/ui/ui/1.0.0/ui.js", [], function() {
        return d
    }),
    !b.ui && (b.ui = d,
    a.seajs && b.isPlainObject(seajs.data) && b.isArray(seajs.data.preload))) {
        var e = seajs.data.preload;
        for (var f = e.length - 1; f >= 0; f--)
            -1 != e[f].indexOf("//misc.360buyimg.com/jdf/1.0.0/ui/ui/1.0.0/ui.js") && e.splice(f, 1);
        seajs.data.preload = e
    }
}(window, jQuery);
var o2 = o2 || {};
o2.detect = {
    browser: function() {
        var ua = navigator.userAgent.toLowerCase(), opera = window.opera, result = {
            engine: 0,
            system: 0,
            browser: 0,
            version: 0
        }, systemList = {}, ieBrowserList = {}, engineList = {}, i;
        systemList = {
            macintosh: ua.indexOf("macintosh") > -1,
            windows: ua.indexOf("windows") > -1,
            linux: ua.indexOf("linux") > -1,
            android: ua.indexOf("android") > -1,
            ipad: ua.indexOf("ipad") > -1,
            iphone: ua.indexOf("iphone") > -1
        };
        ieBrowserList = {
            ie6: !window.XMLHttpRequest || engineList.quirk,
            ie7: /msie 7/i.test(ua),
            ie8: document.documentMode == 8,
            ie9: document.documentMode == 9,
            ie10: document.documentMode == 10,
            ie11: document.documentMode == 11
        };
        engineList = {
            ie: /msie/i.test(ua),
            quirk: document.compatMode == "BackCompat",
            webkit: ua.indexOf(" applewebkit/") > -1,
            opera: (!!opera && opera.version),
            gecko: navigator.product == "Gecko" && !engineList.webkit && !engineList.opera
        };
        if (engineList.ie) {
            for (i in ieBrowserList) {
                if (ieBrowserList[i]) {
                    result.engine = "ie";
                    result.browser = i;
                    result.version = /msie 7/i.test(ua) ? 7 : document.documentMode;
                    getSystem();
                    return result
                }
            }
        }
        if (engineList.webkit) {
            if (ua.indexOf("safari") > -1) {
                if (ua.indexOf("chrome") > -1) {
                    result.browser = "chrome";
                    result.version = "latest"
                } else {
                    result.browser = "safari";
                    result.version = parseInt(ua.match(/ applewebkit\/(\d+)/)[1])
                }
            } else {
                result.browser = "webkit";
                result.version = "unknown"
            }
            result.engine = "webkit";
            getSystem();
            return result
        }
        if (engineList.opera) {
            result.engine = "opera";
            result.browser = "opera";
            result.version = parseInt(opera.version());
            getSystem();
            return result
        }
        if (engineList.gecko) {
            if (ua.indexOf("firefox") > -1) {
                result.browser = "firefox";
                result.version = ua.match(/rv:(\d+)/)[1]
            } else {
                result.browser = "unknown";
                result.version = "unknown"
            }
            result.engine = "gecko";
            getSystem();
            return result
        }
        return result;
        function getSystem() {
            var i;
            for (i in systemList) {
                if (systemList[i]) {
                    result.system = i
                }
            }
        }
    },
    css3test: function(prop) {
        var div = document.createElement("div")
          , vendors = "Khtml Ms O Moz Webkit".split(" ")
          , len = vendors.length - 1;
        if (prop in div.style) {
            return true
        }
        prop = prop.replace(/^[a-z]/, function(val) {
            return val.toUpperCase()
        });
        len = vendors.length - 1;
        while (len >= 0) {
            if (vendors[len] + prop in div.style) {
                return true
            }
            len--
        }
        return false
    }
};
o2.init = function() {
    var browser = o2.detect.browser();
    var cssTest = o2.detect.css3test("transition") ? ("csstransitions") : ("no-csstransitions");
    cssTest = o2.detect.css3test("animation") ? (cssTest + " cssanimations") : (cssTest + " no-cssanimations");
    var classList = [];
    classList.push(cssTest, browser.engine, browser.browser, browser.version);
    $("html").addClass(classList.join(" o2_"))
}
;
o2.init();
!function(e) {
    "use strict";
    function t(e) {
        for (var t = {}, r = t.toString, n = "Boolean Number String Function Array Date RegExp Object Error".split(" "), o = 0; o < n.length; o++) {
            var i = n[o];
            t["[object " + i + "]"] = i.toLowerCase()
        }
        return null === e ? e + "" : "object" == typeof e || "function" == typeof e ? t[r.call(e)] || "object" : typeof e
    }
    function r(e) {
        return "function" === t(e)
    }
    var n = e._ || (e._ = {})
      , o = !1
      , i = /xyz/.test(function() {}) ? /\bsuper\b/ : /.*/;
    n.Class = function() {}
    ,
    n.Class.extend = function a(e) {
        function t(e, t, r) {
            return function() {
                return this._super = e[t],
                r.apply(this, arguments)
            }
        }
        function n() {
            !o && r(this.construct) && this.construct.apply(this, arguments)
        }
        var s = this.prototype;
        o = !0;
        var c = new this;
        o = !1;
        for (var u in e)
            if ("statics" === u) {
                var f = e[u];
                for (var l in f)
                    n[l] = f[l]
            } else
                r(s[u]) && r(e[u]) && i.test(e[u]) ? c[u] = t(s, u, e[u]) : c[u] = e[u];
        return n.prototype = c,
        n.prototype.constructor = n,
        n.extend = a,
        n
    }
}(window, void 0),
function(e) {
    "use strict";
    function t(e, t, r) {
        var n;
        return n = t && t.hasOwnProperty("constructor") ? t.constructor : function() {
            e.apply(this, arguments)
        }
        ,
        $.extend(n, e),
        s.prototype = e.prototype,
        n.prototype = new s,
        t && $.extend(n.prototype, t),
        r && $.extend(n, r),
        n.prototype.constructor = n,
        n.__super__ = e.prototype,
        n
    }
    function r(e, r) {
        var n = t(this, e, r);
        return n.extend = this.extend,
        n
    }
    function n(e) {
        "undefined" != typeof e && e.callbacks ? this.callbacks = e.callbacks : this.callbacks = {}
    }
    var o = /\s+/
      , i = [].slice
      , a = e._ || (e._ = {})
      , s = function() {};
    n.extend = r,
    n.prototype = {
        on: function(e, t, r) {
            var n, i, a, s, c;
            if (!t)
                return this;
            for (e = e.split(o),
            n = this.callbacks; i = e.shift(); )
                c = n[i],
                a = c ? c.tail : {},
                a.next = s = {},
                a.context = r,
                a.callback = t,
                n[i] = {
                    tail: s,
                    next: c ? c.next : a
                };
            return this
        },
        off: function(e, t, r) {
            var n, i, s, c, u, f;
            if (i = this.callbacks) {
                if (!(e || t || r))
                    return delete this.callbacks,
                    this;
                for (e = e ? e.split(o) : a.keys(i); n = e.shift(); )
                    if (s = i[n],
                    delete i[n],
                    s && (t || r))
                        for (c = s.tail; (s = s.next) !== c; )
                            u = s.callback,
                            f = s.context,
                            (t && u !== t || r && f !== r) && this.on(n, u, f);
                return this
            }
        },
        trigger: function(e) {
            var t, r, n, a, s, c, u;
            if (!(n = this.callbacks))
                return this;
            for (c = n.all,
            e = e.split(o),
            u = i.call(arguments, 1); t = e.shift(); ) {
                if (r = n[t])
                    for (a = r.tail; (r = r.next) !== a; )
                        r.callback.apply(r.context || this, u);
                if (r = c)
                    for (a = r.tail,
                    s = [t].concat(u); (r = r.next) !== a; )
                        r.callback.apply(r.context || this, s)
            }
            return this
        }
    },
    a.Events = n,
    a.eventCenter = new n
}(window, void 0),
"object" != typeof JSON && (JSON = {}),
function() {
    "use strict";
    function f(e) {
        return e < 10 ? "0" + e : e
    }
    function this_value() {
        return this.valueOf()
    }
    function quote(e) {
        return rx_escapable.lastIndex = 0,
        rx_escapable.test(e) ? '"' + e.replace(rx_escapable, function(e) {
            var t = meta[e];
            return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + e + '"'
    }
    function str(e, t) {
        var r, n, o, i, a, s = gap, c = t[e];
        switch (c && "object" == typeof c && "function" == typeof c.toJSON && (c = c.toJSON(e)),
        "function" == typeof rep && (c = rep.call(t, e, c)),
        typeof c) {
        case "string":
            return quote(c);
        case "number":
            return isFinite(c) ? String(c) : "null";
        case "boolean":
        case "null":
            return String(c);
        case "object":
            if (!c)
                return "null";
            if (gap += indent,
            a = [],
            "[object Array]" === Object.prototype.toString.apply(c)) {
                for (i = c.length,
                r = 0; r < i; r += 1)
                    a[r] = str(r, c) || "null";
                return o = 0 === a.length ? "[]" : gap ? "[\n" + gap + a.join(",\n" + gap) + "\n" + s + "]" : "[" + a.join(",") + "]",
                gap = s,
                o
            }
            if (rep && "object" == typeof rep)
                for (i = rep.length,
                r = 0; r < i; r += 1)
                    "string" == typeof rep[r] && (n = rep[r],
                    o = str(n, c),
                    o && a.push(quote(n) + (gap ? ": " : ":") + o));
            else
                for (n in c)
                    Object.prototype.hasOwnProperty.call(c, n) && (o = str(n, c),
                    o && a.push(quote(n) + (gap ? ": " : ":") + o));
            return o = 0 === a.length ? "{}" : gap ? "{\n" + gap + a.join(",\n" + gap) + "\n" + s + "}" : "{" + a.join(",") + "}",
            gap = s,
            o
        }
    }
    var rx_one = /^[\],:{}\s]*$/
      , rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g
      , rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g
      , rx_four = /(?:^|:|,)(?:\s*\[)+/g
      , rx_escapable = /[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g
      , rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
    "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
    }
    ,
    Boolean.prototype.toJSON = this_value,
    Number.prototype.toJSON = this_value,
    String.prototype.toJSON = this_value);
    var gap, indent, meta, rep;
    "function" != typeof JSON.stringify && (meta = {
        "\b": "\\b",
        "\t": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\"
    },
    JSON.stringify = function(e, t, r) {
        var n;
        if (gap = "",
        indent = "",
        "number" == typeof r)
            for (n = 0; n < r; n += 1)
                indent += " ";
        else
            "string" == typeof r && (indent = r);
        if (rep = t,
        t && "function" != typeof t && ("object" != typeof t || "number" != typeof t.length))
            throw new Error("JSON.stringify");
        return str("", {
            "": e
        })
    }
    ),
    "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
        function walk(e, t) {
            var r, n, o = e[t];
            if (o && "object" == typeof o)
                for (r in o)
                    Object.prototype.hasOwnProperty.call(o, r) && (n = walk(o, r),
                    void 0 !== n ? o[r] = n : delete o[r]);
            return reviver.call(e, t, o)
        }
        var j;
        if (text = String(text),
        rx_dangerous.lastIndex = 0,
        rx_dangerous.test(text) && (text = text.replace(rx_dangerous, function(e) {
            return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
        })),
        rx_one.test(text.replace(rx_two, "@").replace(rx_three, "]").replace(rx_four, "")))
            return j = eval("(" + text + ")"),
            "function" == typeof reviver ? walk({
                "": j
            }, "") : j;
        throw new SyntaxError("JSON.parse")
    }
    )
}(),
define("o2console", function() {
    "use strict";
    return {
        consoleConfig: {
            staff: "%c本页面由%c 凹凸实验室（JDC-多终端研发部） %c负责开发，你可以通过 https://aotu.io 了解我们。\n\n如果你对我们在做的事情也有兴趣，欢迎加入 %caotu@jd.com%c（注明来自console）\n\n",
            freshTec: "%c%c",
            funExp: "%c%c"
        },
        consoleConfigFunc: function() {
            if (window.console && console.log && navigator.userAgent.toLowerCase().match(/chrome\/([\d.]+)/)) {
                var e = "undefined" != typeof o2ConsoleConfig ? o2ConsoleConfig : this.consoleConfig
                  , t = "font-weight: bold;color: #6190e8;"
                  , r = "font-size: 12px;color: #6190e8;";
                console.log(e.staff + e.freshTec + e.funExp, "color: #6190e8;", t, r, t, r, t, r, t, r)
            }
        }
    }
}),
define("store", function() {
    "use strict";
    function e() {
        try {
            return o in n && n[o]
        } catch (e) {
            return !1
        }
    }
    var t, r = {}, n = "undefined" != typeof window ? window : global, o = (n.document,
    "localStorage");
    r.disabled = !1,
    r.version = "1.3.20",
    r.set = function(e, t) {}
    ,
    r.get = function(e, t) {}
    ,
    r.has = function(e) {
        return void 0 !== r.get(e)
    }
    ,
    r.remove = function(e) {}
    ,
    r.clearByReg = function(e) {}
    ,
    r.clear = function() {}
    ,
    r.transact = function(e, t, n) {
        null == n && (n = t,
        t = null),
        null == t && (t = {});
        var o = r.get(e, t);
        n(o),
        r.set(e, o)
    }
    ,
    r.getAll = function() {
        var e = {};
        return r.forEach(function(t, r) {
            e[t] = r
        }),
        e
    }
    ,
    r.forEach = function() {}
    ,
    r.serialize = function(e) {
        return JSON.stringify(e)
    }
    ,
    r.deserialize = function(e) {
        if ("string" == typeof e)
            try {
                return JSON.parse(e)
            } catch (t) {
                return e || void 0
            }
    }
    ,
    e() && (t = n[o],
    r.set = function(e, n) {
        return void 0 === n ? r.remove(e) : (t.setItem(e, r.serialize(n)),
        n)
    }
    ,
    r.get = function(e, n) {
        var o = r.deserialize(t.getItem(e));
        return void 0 === o ? n : o
    }
    ,
    r.remove = function(e) {
        t.removeItem(e)
    }
    ,
    r.clearByReg = function(e) {
        var r = new RegExp(e);
        for (var n in t)
            r.test(n) && this.remove(n)
    }
    ,
    r.clear = function() {
        t.clear()
    }
    ,
    r.forEach = function(e) {
        for (var n = 0; n < t.length; n++) {
            var o = t.key(n);
            e(o, r.get(o))
        }
    }
    );
    try {
        var i = "__storejs__";
        r.set(i, i),
        r.get(i) != i && (r.disabled = !0),
        r.remove(i)
    } catch (a) {
        r.disabled = !0
    }
    return r.enabled = !r.disabled,
    r
}),
define("o2tpl", function() {
    "use strict";
    var e = function(t, r) {
        var n = /[^\w\-\.:]/.test(t) ? new Function(e.arg + ",tmpl","var _e=tmpl.encode" + e.helper + ",_s='" + t.replace(e.regexp, e.func) + "';return _s;") : e.cache[t] = e.cache[t] || e(e.load(t));
        return r ? n(r, e) : function(t) {
            return n(t, e)
        }
    };
    return e.cache = {},
    e.load = function(e) {
        return document.getElementById(e).innerHTML
    }
    ,
    e.regexp = /([\s'\\])(?!(?:[^{]|\{(?!%))*%\})|(?:\{%(=|#)([\s\S]+?)%\})|(\{%)|(%\})/g,
    e.func = function(e, t, r, n, o, i) {
        return t ? {
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            " ": " "
        }[t] || "\\" + t : r ? "=" === r ? "'+_e(" + n + ")+'" : "'+(" + n + "==null?'':" + n + ")+'" : o ? "';" : i ? "_s+='" : void 0
    }
    ,
    e.encReg = /[<>&"'\x00]/g,
    e.encMap = {
        "<": "&lt;",
        ">": "&gt;",
        "&": "&amp;",
        '"': "&quot;",
        "'": "&#39;"
    },
    e.encode = function(t) {
        return (null == t ? "" : "" + t).replace(e.encReg, function(t) {
            return e.encMap[t] || ""
        })
    }
    ,
    e.arg = "o",
    e.helper = ",print=function(s,e){_s+=e?(s==null?'':s):_e(s);},include=function(s,d){_s+=tmpl(s,d);}",
    e
}),
function(e) {
    "use strict";
    function t(e) {
        var t = !1
          , r = e.split("?")[1];
        if (r)
            if (r = r.split("#")[0]) {
                r = r.split("&");
                for (var n = 0, o = r.length; n < o; n++) {
                    var i = r[n].split("=");
                    t = 2 === i.length && ("debug" === i[0] && "true" === i[1])
                }
            } else
                t = !1;
        else
            t = !1;
        return t
    }
    for (var r, n = e._ || (e._ = {}), o = {}, i = ["assert", "cd", "clear", "count", "countReset", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "select", "table", "time", "timeEnd", "timeStamp", "timeline", "timelineEnd", "trace", "warn"], a = i.length, s = window.console = window.console || {}, c = function() {}; a--; )
        r = i[a],
        s[r] || (s[r] = c);
    var u = t(window.location.href);
    o = function(e) {
        this.debug = u
    }
    ,
    o.prototype = {
        log: function(e) {
            this.debug && s.log(e)
        },
        warn: function(e) {
            this.debug && s.warn(e)
        },
        error: function(e) {
            this.debug && s.error(e)
        },
        debug: function(e) {
            this.debug && s.debug(e)
        },
        info: function(e) {
            this.debug && s.debug(e)
        }
    },
    o.prototype.errorReport = function(e, t) {}
    ,
    n.console = new o
}(window, void 0),
function() {
    var e = {
        getDownloadSpeed: function() {
            try {
                var e = (window.performance || window.webkitPerformance || {}).timing;
                if (e) {
                    var t = $("html").html().length
                      , r = t / 1024
                      , n = performance.timing.responseEnd - performance.timing.requestStart;
                    return Math.round(.25 * r / (n / 1e3))
                }
            } catch (o) {}
            return 0
        },
        getRank: function() {
            var e = this.getDownloadSpeed();
            return e < 25 ? 31 : e < 50 ? 32 : e < 75 ? 33 : e < 100 ? 34 : e < 150 ? 35 : e < 200 ? 36 : e < 250 ? 37 : e < 300 ? 38 : e < 350 ? 39 : e < 400 ? 40 : e < 450 ? 41 : e < 500 ? 42 : e < 1e3 ? 43 : 44
        },
        getSpeedInfo: function() {
            var e = Math.floor(100 * Math.random())
              , t = this.getDownloadSpeed()
              , r = window.pageConfig || {}
              , n = r && r.O2_REPORT;
            return void 0 !== n && "number" == typeof n || (n = 100),
            n > 0 && e >= 0 && e <= n && t > 0 ? "s" + this.getRank() + "=" + t : ""
        },
        getScreenSection: function() {
            var e = document.documentElement.clientWidth;
            return e >= 1190 ? 68 : e >= 990 ? 69 : 70
        },
        getScreenRatio: function() {
            var e = window.screen.width
              , t = window.screen.height
              , r = {
                51: {
                    width: 800,
                    height: 600
                },
                52: {
                    width: 960,
                    height: 640
                },
                53: {
                    width: 1024,
                    height: 768
                },
                54: {
                    width: 1136,
                    height: 640
                },
                55: {
                    width: 1152,
                    height: 864
                },
                56: {
                    width: 1280,
                    height: 768
                },
                57: {
                    width: 1280,
                    height: 800
                },
                58: {
                    width: 1280,
                    height: 960
                },
                59: {
                    width: 1280,
                    height: 1024
                },
                60: {
                    width: 1366,
                    height: 768
                },
                61: {
                    width: 1440,
                    height: 900
                },
                62: {
                    width: 1600,
                    height: 1024
                },
                63: {
                    width: 1600,
                    height: 1200
                },
                64: {
                    width: 1920,
                    height: 1080
                },
                65: {
                    width: 1920,
                    height: 1200
                },
                66: {
                    width: 2560,
                    height: 1440
                },
                67: {
                    width: 2560,
                    height: 1600
                }
            };
            for (var n in r)
                if (e === r[n].width && t === r[n].height)
                    return n
        },
        getBrowser: function() {
            var e, t = {}, r = navigator.userAgent.toLowerCase();
            return (e = r.match(/rv:([\d.]+)\) like gecko/)) ? t.ie = e[1] : (e = r.match(/msie ([\d.]+)/)) ? t.ie = e[1] : (e = r.match(/firefox\/([\d.]+)/)) ? t.firefox = e[1] : (e = r.match(/metasr/)) ? t.sougou = !0 : (e = r.match(/qqbrowser/)) ? t.qq = !0 : (e = r.match(/version\/([\d.]+).*safari/)) ? t.safari = e[1] : (e = r.match(/chrome\/([\d.]+)/)) ? t.chrome = e[1] : (e = r.match(/opera.([\d.]+)/)) ? t.opera = e[1] : (e = r.match(/ipad/)) ? t.ipad = !0 : 0,
            t.chrome ? 11 : t.firefox ? 12 : t.safari ? 13 : t.opera ? 14 : t.ie ? "6.0" === t.ie ? 15 : "7.0" === t.ie ? 16 : "8.0" === t.ie ? 17 : "9.0" === t.ie ? 18 : "10.0" === t.ie ? 19 : "11.0" === t.ie ? 20 : 21 : t.sougou ? 22 : t.qq ? 23 : t.ipad ? 24 : 25
        },
        getBaseData: function() {
            var e = window._REPORT_
              , t = e && e.START
              , r = [];
            if (e && t) {
                var n = e.CSS
                  , o = e.FS
                  , i = e.JS
                  , a = e.DOM;
                n && r.push("s72=" + (n.getTime() - t.getTime())),
                o && r.push("s73=" + (o.getTime() - t.getTime())),
                i && r.push("s74=" + (i.getTime() - t.getTime())),
                a && r.push("s75=" + (a.getTime() - t.getTime())),
                r.push("s76=" + ((new Date).getTime() - t.getTime()))
            }
            return r.join("&")
        },
        getRetina: function() {
            return window.devicePixelRatio > 1 || window.matchMedia && window.matchMedia("(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-device-pixel-ratio: 1.5), (min-resolution: 144dpi), (min-resolution: 1.5dppx)").matches ? "s71=1" : ""
        },
        processRetina: function() {
            var e = this.getRetina();
            e && this.processCore(e)
        },
        getSystem: function() {
            var e = navigator.userAgent.toLowerCase();
            if (e.indexOf("macintosh") !== -1 || e.indexOf("mac os x") !== -1)
                return 6;
            if (e.indexOf("linux") !== -1)
                return 7;
            var t = {
                "nt 5.1": 1,
                "nt 5.2": 1,
                "nt 6.0": 2,
                "nt 6.1": 3,
                "nt 6.2": 4,
                "nt 6.3": 4,
                "nt 6.4": 5,
                "nt 10.0": 5
            };
            for (var r in t)
                if (e.indexOf(r) !== -1)
                    return t[r];
            return 8
        },
        _getErrorInfo: function(e) {
            var t = [];
            t.push("s" + this.getSystem() + "=1"),
            t.push("s" + this.getBrowser() + "=1"),
            t.push("s30=1");
            var r = this.getDownloadSpeed();
            return r > 0 && t.push("s" + this.getRank() + "=" + r),
            t.push("s" + (50 + e) + "=1"),
            t.join("&")
        },
        processBackup: function(e) {
            this.pBackupId && this.processCore(this._getErrorInfo(e), this.pBackupId)
        },
        processHidedFloor: function(e) {
            this.pFloorId && this.processCore(this._getErrorInfo(e), this.pFloorId)
        },
        processTempl: function(e) {
            this.pTemplId && this.processCore(this._getErrorInfo(e), this.pTemplId)
        },
        processSpeed: function() {
            var e = this.getSpeedInfo();
            e && this.processCore(e)
        },
        processJsError: function() {
            var e = window
              , t = window.pageConfig || {}
              , r = Math.floor(100 * Math.random())
              , n = t && t.O2_ERROR_REPORT;
            void 0 !== n && "number" == typeof n || (n = 100),
            n > 0 && r >= 0 && r <= n && $(e).bind("error.o2report", function(t, r, n, o, i) {
                var a = "";
                if (o = o || e.event && e.event.errorCharacter || 0,
                i && i.stack)
                    t = i.stack.toString();
                else if (arguments.callee) {
                    for (var s = [t], c = arguments.callee.caller, u = 3; c && --u > 0 && (s.push(c.toString()),
                    c !== c.caller); )
                        c = c.caller;
                    t = s.join(",")
                }
                if (a = JSON.stringify(t) + (r ? ";URL:" + r : "") + (n ? ";Line:" + n : "") + (o ? ";Column:" + o : ""),
                e.lastErrMsg) {
                    if (e.lastErrMsg.indexOf(t) > -1)
                        return;
                    e.lastErrMsg += "|" + t
                } else
                    e.lastErrMsg = t;
                setTimeout(function() {
                    a = encodeURIComponent(a);
                    var e = new Image;
                    e.src = "//wq.jd.com/webmonitor/collect/badjs.json?Content=" + a + "&t=" + Math.random()
                }, 1e3)
            })
        },
        _firstReport: !1,
        processAllData: function() {
            if (!this._firstReport) {
                this._firstReport = !0;
                var e = this.getSpeedInfo()
                  , t = this.getRetina();
                if (t || e) {
                    var r = this.getBaseData()
                      , n = this.getBrowser()
                      , o = this.getScreenRatio()
                      , i = this.getSystem()
                      , a = [];
                    a.push("s" + i + "=1"),
                    a.push("s" + n + "=1"),
                    a.push("s30=1"),
                    e && a.push(e),
                    o && a.push("s" + o + "=1"),
                    a.push("s" + this.getScreenSection() + "=1"),
                    t && a.push(t),
                    r && a.push(r),
                    this.processCore(a.join("&"))
                }
            }
        },
        image: null,
        processCore: function(e, t) {
            var r = t || this.pid;
            this.image = new Image,
            this.image.src = "//fd.3.cn/cesu/r?pid=" + r + "&" + e + "&_=" + (new Date).getTime()
        },
        debug: function(e) {
            "undefined" != typeof console.log && console.log(e)
        },
        pid: 0,
        pFloorId: 0,
        pBackupId: 0,
        pTemplId: 0,
        init: function(e, t, r, n) {
            var o = this;
            return e ? (o.pid = e,
            o.pFloorId = r,
            o.pBackupId = t,
            o.pTemplId = n,
            $(window).bind("load.o2report", function() {
                o.processAllData()
            }),
            void o.processJsError()) : void o.debug("pageId must be provided!")
        }
    };
    "function" == typeof define && (define.amd || define.cmd) ? define("report", function() {
        return e
    }) : window.o2Report = e
}(),
define("ajax_setup", function(e) {
    var t = e("store");
    !function() {
        function e(e, r) {
            var n = r.times
              , o = e.timeout
              , i = null;
            return function(a, s, c) {
                function u(e) {
                    e.isBackup && (e.cache = !0,
                    _.eventCenter.trigger(l.jsonpCallback + ":backup", e.url)),
                    l.data = l.__data || {},
                    $.extend(l, {
                        url: l.originalUrl,
                        forceStore: !1
                    }, e),
                    $.ajax(l).retry({
                        times: e.times,
                        timeout: r.timeout,
                        statusCodes: r.statusCodes,
                        backup: r.backup
                    }).pipe(p.resolve, p.reject)
                }
                function f() {
                    var e = t.get(l.storeKey);
                    e ? u({
                        forceStore: !0,
                        times: 0
                    }) : p.rejectWith(this, arguments)
                }
                var l = this
                  , p = new $.Deferred
                  , h = e.getResponseHeader("Retry-After");
                return i && clearTimeout(i),
                l.forceBackup && (n = 0),
                n > 0 && (!e.statusCodes || $.inArray(a.status, e.statusCodes) > -1) ? (h && (o = isNaN(h) ? new Date(h).getTime() - $.now() : 1e3 * parseInt(h, 10),
                (isNaN(o) || o < 0) && (o = e.timeout)),
                void 0 !== o && n !== r.times ? i = setTimeout(function() {
                    u({
                        times: n - 1
                    })
                }, o) : u({
                    times: n - 1
                })) : 0 === n && (r.backup && r.backup.length ? u({
                    url: r.backup.shift(),
                    times: 0,
                    isBackup: !0
                }) : f()),
                p
            }
        }
        $.ajaxPrefilter(function(r, n, o) {
            function i(e) {
                var n = r.needStore
                  , o = r.storeKey
                  , i = r.storeCheck;
                if (n = !!n && t.enabled) {
                    var a = t.get(o);
                    if (!a || !i(a)) {
                        if ("string" == typeof e)
                            try {
                                e = JSON.parse(e)
                            } catch (s) {
                                e = {}
                            }
                        t.set(o, e)
                    }
                }
            }
            var a = $.Deferred();
            return o.done(function(e) {
                var t = r.dataCheck;
                $.isFunction(t) && !t(e) ? (n.url = n.backup,
                n.dataCheck = null,
                n.forceBackup = !0,
                a.rejectWith(n, arguments)) : (i(e),
                a.resolveWith(n, arguments))
            }),
            o.fail(a.reject),
            o.retry = function(t) {
                return t.timeout && (this.timeout = t.timeout),
                t.statusCodes && (this.statusCodes = t.statusCodes),
                t.backup && ($.isArray(t.backup) ? t.backup = Array.prototype.slice.call(t.backup) : t.backup = [t.backup]),
                this.pipe(null, e(this, t))
            }
            ,
            a.promise(o)
        }),
        $.ajaxTransport("+script", function(e) {
            var r = e.needStore
              , n = e.storeKey
              , o = e.storeCheck
              , i = e.dataType
              , a = e.forceStore;
            if (r = !!r && t.enabled) {
                var s = t.get(n);
                if (s && (o(s) || a))
                    return {
                        send: function(t, r) {
                            var n = {};
                            n[i] = e.jsonpCallback + "(" + JSON.stringify(s) + ")",
                            r(200, "success", n, "")
                        },
                        abort: function() {
                            _.console.log("abort ajax transport for local cache")
                        }
                    }
            }
        })
    }()
}),
define("load_async", ["ajax_setup"], function(e) {
    return e("ajax_setup"),
    function(e) {
        e = $.extend({
            url: "",
            params: {},
            timeout: 3e3,
            times: 2,
            backup: null,
            needStore: !1,
            storeSign: null,
            cache: !1,
            dataCheck: null,
            dataType: "jsonp",
            type: "get",
            scriptCharset: "UTF-8"
        }, e);
        var t = function(e) {
            var t = e;
            return /forcebot/i.test(location.href) && (t = $.extend({
                forceBot: 1
            }, t)),
            t
        };
        return $.ajax({
            type: e.type,
            url: e.url,
            scriptCharset: e.scriptCharset,
            originalUrl: e.url,
            data: t(e.params),
            __data: t(e.params),
            dataType: e.dataType,
            jsonp: "callback",
            jsonpCallback: e.jsonpCallback,
            cache: e.cache,
            timeout: e.timeout,
            dataCheck: e.dataCheck,
            storeKey: e.url,
            needStore: e.needStore,
            storeCheck: function(t) {
                return !!t && t.version && t.version === e.storeSign
            }
        }).retry({
            timeout: e.timeout,
            times: e.times,
            backup: e.backup
        }).then(function(t) {
            if (t && (t.__uri = e.url),
            e.params && e.params.__trigger) {
                var r = e.jsonpCallback + ":end";
                _.eventCenter.trigger(r, t)
            }
        }, function(t) {
            _.console.log(e.url),
            _.console.log("请求接口和兜底都失败了")
        })
    }
});
var base_library = function(e) {
    function __webpack_require__(n) {
        if (t[n])
            return t[n].exports;
        var r = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(r.exports, r, r.exports, __webpack_require__),
        r.l = !0,
        r.exports
    }
    var t = {};
    return __webpack_require__.m = e,
    __webpack_require__.c = t,
    __webpack_require__.d = function(e, t, n) {
        __webpack_require__.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }
    ,
    __webpack_require__.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        }
        : function() {
            return e
        }
        ;
        return __webpack_require__.d(t, "a", t),
        t
    }
    ,
    __webpack_require__.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    __webpack_require__.p = "",
    __webpack_require__(__webpack_require__.s = 1)
}([function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || Function("return this")() || (0,
        eval)("this")
    } catch (r) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}
, function(e, t, n) {
    e.exports = n
}
, function(e, t, n) {
    "use strict";
    function assign(e, t) {
        if (e === undefined || null === e)
            throw new TypeError("Cannot convert first argument to object");
        for (var n = Object(e), r = 1; r < arguments.length; r++) {
            var o = arguments[r];
            if (o !== undefined && null !== o)
                for (var i = Object.keys(Object(o)), a = 0, s = i.length; a < s; a++) {
                    var u = i[a]
                      , c = Object.getOwnPropertyDescriptor(o, u);
                    c !== undefined && c.enumerable && (n[u] = o[u])
                }
        }
        return n
    }
    function polyfill() {
        Object.assign || Object.defineProperty(Object, "assign", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: assign
        })
    }
    e.exports = {
        assign: assign,
        polyfill: polyfill
    }
}
, function(e, t, n) {
    (function(t, r) {
        !function(t, n) {
            e.exports = n()
        }(0, function() {
            "use strict";
            function objectOrFunction(e) {
                var t = typeof e;
                return null !== e && ("object" === t || "function" === t)
            }
            function isFunction(e) {
                return "function" == typeof e
            }
            function setScheduler(e) {
                s = e
            }
            function setAsap(e) {
                u = e
            }
            function useVertxTimer() {
                return void 0 !== a ? function() {
                    a(flush)
                }
                : useSetTimeout()
            }
            function useSetTimeout() {
                var e = setTimeout;
                return function() {
                    return e(flush, 1)
                }
            }
            function flush() {
                for (var e = 0; e < i; e += 2) {
                    (0,
                    h[e])(h[e + 1]),
                    h[e] = undefined,
                    h[e + 1] = undefined
                }
                i = 0
            }
            function then(e, t) {
                var n = arguments
                  , r = this
                  , o = new this.constructor(noop);
                o[v] === undefined && makePromise(o);
                var i = r._state;
                return i ? function() {
                    var e = n[i - 1];
                    u(function() {
                        return invokeCallback(i, o, e, r._result)
                    })
                }() : subscribe(r, o, e, t),
                o
            }
            function resolve$1(e) {
                var t = this;
                if (e && "object" == typeof e && e.constructor === t)
                    return e;
                var n = new t(noop);
                return resolve(n, e),
                n
            }
            function noop() {}
            function selfFulfillment() {
                return new TypeError("You cannot resolve a promise with itself")
            }
            function cannotReturnOwn() {
                return new TypeError("A promises callback cannot return that same promise.")
            }
            function getThen(e) {
                try {
                    return e.then
                } catch (t) {
                    return k.error = t,
                    k
                }
            }
            function tryThen(e, t, n, r) {
                try {
                    e.call(t, n, r)
                } catch (o) {
                    return o
                }
            }
            function handleForeignThenable(e, t, n) {
                u(function(e) {
                    var r = !1
                      , o = tryThen(n, t, function(n) {
                        r || (r = !0,
                        t !== n ? resolve(e, n) : fulfill(e, n))
                    }, function(t) {
                        r || (r = !0,
                        reject(e, t))
                    }, "Settle: " + (e._label || " unknown promise"));
                    !r && o && (r = !0,
                    reject(e, o))
                }, e)
            }
            function handleOwnThenable(e, t) {
                t._state === y ? fulfill(e, t._result) : t._state === b ? reject(e, t._result) : subscribe(t, undefined, function(t) {
                    return resolve(e, t)
                }, function(t) {
                    return reject(e, t)
                })
            }
            function handleMaybeThenable(e, t, n) {
                t.constructor === e.constructor && n === then && t.constructor.resolve === resolve$1 ? handleOwnThenable(e, t) : n === k ? (reject(e, k.error),
                k.error = null) : n === undefined ? fulfill(e, t) : isFunction(n) ? handleForeignThenable(e, t, n) : fulfill(e, t)
            }
            function resolve(e, t) {
                e === t ? reject(e, selfFulfillment()) : objectOrFunction(t) ? handleMaybeThenable(e, t, getThen(t)) : fulfill(e, t)
            }
            function publishRejection(e) {
                e._onerror && e._onerror(e._result),
                publish(e)
            }
            function fulfill(e, t) {
                e._state === g && (e._result = t,
                e._state = y,
                0 !== e._subscribers.length && u(publish, e))
            }
            function reject(e, t) {
                e._state === g && (e._state = b,
                e._result = t,
                u(publishRejection, e))
            }
            function subscribe(e, t, n, r) {
                var o = e._subscribers
                  , i = o.length;
                e._onerror = null,
                o[i] = t,
                o[i + y] = n,
                o[i + b] = r,
                0 === i && e._state && u(publish, e)
            }
            function publish(e) {
                var t = e._subscribers
                  , n = e._state;
                if (0 !== t.length) {
                    for (var r = undefined, o = undefined, i = e._result, a = 0; a < t.length; a += 3)
                        r = t[a],
                        o = t[a + n],
                        r ? invokeCallback(n, r, o, i) : o(i);
                    e._subscribers.length = 0
                }
            }
            function ErrorObject() {
                this.error = null
            }
            function tryCatch(e, t) {
                try {
                    return e(t)
                } catch (n) {
                    return w.error = n,
                    w
                }
            }
            function invokeCallback(e, t, n, r) {
                var o = isFunction(n)
                  , i = undefined
                  , a = undefined
                  , s = undefined
                  , u = undefined;
                if (o) {
                    if (i = tryCatch(n, r),
                    i === w ? (u = !0,
                    a = i.error,
                    i.error = null) : s = !0,
                    t === i)
                        return void reject(t, cannotReturnOwn())
                } else
                    i = r,
                    s = !0;
                t._state !== g || (o && s ? resolve(t, i) : u ? reject(t, a) : e === y ? fulfill(t, i) : e === b && reject(t, i))
            }
            function initializePromise(e, t) {
                try {
                    t(function(t) {
                        resolve(e, t)
                    }, function(t) {
                        reject(e, t)
                    })
                } catch (n) {
                    reject(e, n)
                }
            }
            function nextId() {
                return _++
            }
            function makePromise(e) {
                e[v] = _++,
                e._state = undefined,
                e._result = undefined,
                e._subscribers = []
            }
            function Enumerator$1(e, t) {
                this._instanceConstructor = e,
                this.promise = new e(noop),
                this.promise[v] || makePromise(this.promise),
                o(t) ? (this.length = t.length,
                this._remaining = t.length,
                this._result = new Array(this.length),
                0 === this.length ? fulfill(this.promise, this._result) : (this.length = this.length || 0,
                this._enumerate(t),
                0 === this._remaining && fulfill(this.promise, this._result))) : reject(this.promise, validationError())
            }
            function validationError() {
                return new Error("Array Methods must be provided an Array")
            }
            function all$1(e) {
                return new Enumerator$1(this,e).promise
            }
            function race$1(e) {
                var t = this;
                return new t(o(e) ? function(n, r) {
                    for (var o = e.length, i = 0; i < o; i++)
                        t.resolve(e[i]).then(n, r)
                }
                : function(e, t) {
                    return t(new TypeError("You must pass an array to race."))
                }
                )
            }
            function reject$1(e) {
                var t = this
                  , n = new t(noop);
                return reject(n, e),
                n
            }
            function needsResolver() {
                throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
            }
            function needsNew() {
                throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
            }
            function Promise$2(e) {
                this[v] = nextId(),
                this._result = this._state = undefined,
                this._subscribers = [],
                noop !== e && ("function" != typeof e && needsResolver(),
                this instanceof Promise$2 ? initializePromise(this, e) : needsNew())
            }
            function polyfill$1() {
                var e = undefined;
                if (void 0 !== r)
                    e = r;
                else if ("undefined" != typeof self)
                    e = self;
                else
                    try {
                        e = Function("return this")()
                    } catch (o) {
                        throw new Error("polyfill failed because global object is unavailable in this environment")
                    }
                var t = e.Promise;
                if (t) {
                    var n = null;
                    try {
                        n = Object.prototype.toString.call(t.resolve())
                    } catch (o) {}
                    if ("[object Promise]" === n && !t.cast)
                        return
                }
                e.Promise = Promise$2
            }
            var e = undefined;
            e = Array.isArray ? Array.isArray : function(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            }
            ;
            var o = e
              , i = 0
              , a = undefined
              , s = undefined
              , u = function(e, t) {
                h[i] = e,
                h[i + 1] = t,
                2 === (i += 2) && (s ? s(flush) : m())
            }
              , c = "undefined" != typeof window ? window : undefined
              , l = c || {}
              , p = l.MutationObserver || l.WebKitMutationObserver
              , f = "undefined" == typeof self && void 0 !== t && "[object process]" === {}.toString.call(t)
              , d = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel
              , h = new Array(1e3)
              , m = undefined;
            m = f ? function() {
                return function() {
                    return t.nextTick(flush)
                }
            }() : p ? function() {
                var e = 0
                  , t = new p(flush)
                  , n = document.createTextNode("");
                return t.observe(n, {
                    characterData: !0
                }),
                function() {
                    n.data = e = ++e % 2
                }
            }() : d ? function() {
                var e = new MessageChannel;
                return e.port1.onmessage = flush,
                function() {
                    return e.port2.postMessage(0)
                }
            }() : c === undefined ? function() {
                try {
                    var e = n(5);
                    return a = e.runOnLoop || e.runOnContext,
                    useVertxTimer()
                } catch (t) {
                    return useSetTimeout()
                }
            }() : useSetTimeout();
            var v = Math.random().toString(36).substring(16)
              , g = void 0
              , y = 1
              , b = 2
              , k = new ErrorObject
              , w = new ErrorObject
              , _ = 0;
            return Enumerator$1.prototype._enumerate = function(e) {
                for (var t = 0; this._state === g && t < e.length; t++)
                    this._eachEntry(e[t], t)
            }
            ,
            Enumerator$1.prototype._eachEntry = function(e, t) {
                var n = this._instanceConstructor
                  , r = n.resolve;
                if (r === resolve$1) {
                    var o = getThen(e);
                    if (o === then && e._state !== g)
                        this._settledAt(e._state, t, e._result);
                    else if ("function" != typeof o)
                        this._remaining--,
                        this._result[t] = e;
                    else if (n === Promise$2) {
                        var i = new n(noop);
                        handleMaybeThenable(i, e, o),
                        this._willSettleAt(i, t)
                    } else
                        this._willSettleAt(new n(function(t) {
                            return t(e)
                        }
                        ), t)
                } else
                    this._willSettleAt(r(e), t)
            }
            ,
            Enumerator$1.prototype._settledAt = function(e, t, n) {
                var r = this.promise;
                r._state === g && (this._remaining--,
                e === b ? reject(r, n) : this._result[t] = n),
                0 === this._remaining && fulfill(r, this._result)
            }
            ,
            Enumerator$1.prototype._willSettleAt = function(e, t) {
                var n = this;
                subscribe(e, undefined, function(e) {
                    return n._settledAt(y, t, e)
                }, function(e) {
                    return n._settledAt(b, t, e)
                })
            }
            ,
            Promise$2.all = all$1,
            Promise$2.race = race$1,
            Promise$2.resolve = resolve$1,
            Promise$2.reject = reject$1,
            Promise$2._setScheduler = setScheduler,
            Promise$2._setAsap = setAsap,
            Promise$2._asap = u,
            Promise$2.prototype = {
                constructor: Promise$2,
                then: then,
                "catch": function(e) {
                    return this.then(null, e)
                }
            },
            Promise$2.polyfill = polyfill$1,
            Promise$2.Promise = Promise$2,
            Promise$2
        })
    }
    ).call(t, n(4), n(0))
}
, function(e, t) {
    function defaultSetTimout() {
        throw new Error("setTimeout has not been defined")
    }
    function defaultClearTimeout() {
        throw new Error("clearTimeout has not been defined")
    }
    function runTimeout(e) {
        if (n === setTimeout)
            return setTimeout(e, 0);
        if ((n === defaultSetTimout || !n) && setTimeout)
            return n = setTimeout,
            setTimeout(e, 0);
        try {
            return n(e, 0)
        } catch (t) {
            try {
                return n.call(null, e, 0)
            } catch (t) {
                return n.call(this, e, 0)
            }
        }
    }
    function runClearTimeout(e) {
        if (r === clearTimeout)
            return clearTimeout(e);
        if ((r === defaultClearTimeout || !r) && clearTimeout)
            return r = clearTimeout,
            clearTimeout(e);
        try {
            return r(e)
        } catch (t) {
            try {
                return r.call(null, e)
            } catch (t) {
                return r.call(this, e)
            }
        }
    }
    function cleanUpNextTick() {
        s && i && (s = !1,
        i.length ? a = i.concat(a) : u = -1,
        a.length && drainQueue())
    }
    function drainQueue() {
        if (!s) {
            var e = runTimeout(cleanUpNextTick);
            s = !0;
            for (var t = a.length; t; ) {
                for (i = a,
                a = []; ++u < t; )
                    i && i[u].run();
                u = -1,
                t = a.length
            }
            i = null,
            s = !1,
            runClearTimeout(e)
        }
    }
    function Item(e, t) {
        this.fun = e,
        this.array = t
    }
    function noop() {}
    var n, r, o = e.exports = {};
    !function() {
        try {
            n = "function" == typeof setTimeout ? setTimeout : defaultSetTimout
        } catch (e) {
            n = defaultSetTimout
        }
        try {
            r = "function" == typeof clearTimeout ? clearTimeout : defaultClearTimeout
        } catch (e) {
            r = defaultClearTimeout
        }
    }();
    var i, a = [], s = !1, u = -1;
    o.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
        a.push(new Item(e,t)),
        1 !== a.length || s || runTimeout(drainQueue)
    }
    ,
    Item.prototype.run = function() {
        this.fun.apply(null, this.array)
    }
    ,
    o.title = "browser",
    o.browser = !0,
    o.env = {},
    o.argv = [],
    o.version = "",
    o.versions = {},
    o.on = noop,
    o.addListener = noop,
    o.once = noop,
    o.off = noop,
    o.removeListener = noop,
    o.removeAllListeners = noop,
    o.emit = noop,
    o.prependListener = noop,
    o.prependOnceListener = noop,
    o.listeners = function(e) {
        return []
    }
    ,
    o.binding = function(e) {
        throw new Error("process.binding is not supported")
    }
    ,
    o.cwd = function() {
        return "/"
    }
    ,
    o.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }
    ,
    o.umask = function() {
        return 0
    }
}
, function(e, t) {}
, function(e, t, n) {
    (function(t) {
        !function(t, n) {
            e.exports = n()
        }(0, function() {
            "use strict";
            function toObject(e) {
                if (null === e || void 0 === e)
                    throw new TypeError("Object.assign cannot be called with null or undefined");
                return Object(e)
            }
            function serializeParams(e) {
                return e ? Object.keys(e).map(function(t) {
                    return t + "=" + i(e[t])
                }).join("&") : ""
            }
            function isFunction(e) {
                return "function" == typeof e
            }
            function getUrlQueryParamByName(e, t) {
                e || (e = window.location.href),
                t = t.replace(/[[]]/g, "\\$&");
                var n = new RegExp("[?&]" + t + "(=([^&#]*)|&|#|$)")
                  , r = n.exec(e);
                return r ? r[2] ? decodeURIComponent(r[2].replace(/\+/g, " ")) : "" : null
            }
            function updateQueryStringParamByName(e, t, n) {
                var r = new RegExp("([?&])" + t + "=.*?(&|$)","i")
                  , o = -1 !== e.indexOf("?") ? "&" : "?";
                return e.match(r) ? e.replace(r, "$1" + t + "=" + n + "$2") : e + o + t + "=" + n
            }
            function jsonp$1(e, t, n) {
                if (isFunction(e) ? (n = e,
                t = {}) : e && "object" === (void 0 === e ? "undefined" : c(e)) && (n = t,
                t = e || {},
                e = t.url),
                isFunction(t) && (n = t,
                t = {}),
                t || (t = {}),
                t = o({}, g, t),
                e = e || t.url,
                n = n || f,
                e && "string" == typeof e) {
                    var r = generateJsonpUrlWithParams(e, t.params)
                      , i = getDataFromStore({
                        useStore: t.useStore,
                        storeKey: r,
                        storeCheck: t.storeCheck,
                        storeCheckKey: t.storeCheckKey,
                        storeSign: t.storeSign,
                        dataCheck: t.dataCheck
                    });
                    if (i) {
                        if (n(null, i),
                        !jsonp$1.promiseClose && p)
                            return new Promise(function(e) {
                                return e(i)
                            }
                            )
                    } else {
                        if (t.originalUrl = r,
                        !jsonp$1.promiseClose && p)
                            return new Promise(function(e, o) {
                                fetchData(r, t, function(t, r) {
                                    if (t)
                                        return n(t),
                                        o(t);
                                    n(null, r),
                                    e(r)
                                })
                            }
                            );
                        fetchData(r, t, n)
                    }
                } else if (n(new Error("Param url is needed!")),
                !jsonp$1.promiseClose && p)
                    return new Promise(function(e, t) {
                        return t(new Error("Param url is needed!"))
                    }
                    )
            }
            function generateJsonpUrlWithParams(e, t) {
                return t = "string" == typeof t ? t : serializeParams(t),
                e += (~e.indexOf("?") ? "&" : "?") + t,
                e = e.replace("?&", "?")
            }
            function fetchData(e, t, n) {
                function cleanup(e) {
                    u.parentNode && u.parentNode.removeChild(u),
                    l[e] = f,
                    p && clearTimeout(p)
                }
                var r = t.originalUrl
                  , o = t.charset
                  , i = t.name || "__jsonp" + y++
                  , a = getUrlQueryParamByName(e, t.jsonp)
                  , s = arguments[3] || null;
                a ? "?" === a && (e = updateQueryStringParamByName(e, t.jsonp, d(i))) : e += ("&" === e.split("").pop() ? "" : "&") + t.jsonp + "=" + d(i),
                t.cache || (e += "&_=" + (new Date).getTime()),
                l[i] = function(e) {
                    if (cleanup(i),
                    s && (e.__$$backupCall = s),
                    t.dataCheck) {
                        if (!1 !== t.dataCheck(e))
                            return setDataToStore({
                                useStore: t.useStore,
                                storeKey: r,
                                data: e
                            }),
                            n(null, e);
                        !1 === fallback(r, t, n) && n(new Error("Data check error, and no fallback"))
                    } else
                        setDataToStore({
                            useStore: t.useStore,
                            storeKey: r,
                            data: e
                        }),
                        n(null, e)
                }
                ;
                var u = appendScriptTagToHead({
                    url: e,
                    charset: o
                })
                  , c = null != t.timeout ? t.timeout : v
                  , p = setTimeout(function() {
                    return cleanup(i),
                    "number" == typeof t.retryTimes && t.retryTimes > 0 ? (t.retryTimes--,
                    fetchData(r, t, n)) : !1 === fallback(r, t, n) ? n(new Error("Timeout and no data return")) : void 0
                }, c)
            }
            function storeCheckFn(e, t, n) {
                return !!(e && t && n) && (e[t] && e[t] === n)
            }
            function getDataFromStore(e) {
                var t = e.useStore
                  , n = e.storeKey
                  , r = e.storeCheck
                  , o = e.storeCheckKey
                  , i = e.storeSign
                  , a = e.dataCheck;
                if (t = !!t && u.enabled) {
                    var s = u.get(n);
                    if ((r = r || storeCheckFn)(s, o, i) && (!a || s && a && !1 !== a(s)))
                        return s
                }
                return null
            }
            function getDataFromStoreWithoutCheck(e) {
                var t = e.useStore
                  , n = e.storeKey
                  , r = e.dataCheck;
                if (t = !!t && u.enabled) {
                    var o = u.get(n);
                    if (!r || o && r && !1 !== r(o))
                        return o
                }
                return null
            }
            function setDataToStore(e) {
                var t = e.useStore
                  , n = e.storeKey
                  , r = e.data;
                (t = !!t && u.enabled) && u.set(n, r)
            }
            function fallback(e, t, n) {
                var r = t.backup
                  , o = void 0;
                if (r) {
                    if ("string" == typeof r)
                        return delete t.backup,
                        o = generateJsonpUrlWithParams(r, t.params),
                        fetchData(o, t, n, {
                            backup: r
                        });
                    if (Array.isArray(r) && r.length) {
                        var i = r.shift();
                        return o = generateJsonpUrlWithParams(i, t.params),
                        fetchData(o, t, n, {
                            backup: i
                        })
                    }
                }
                var a = getDataFromStoreWithoutCheck({
                    useStore: t.useStore,
                    storeKey: e,
                    dataCheck: t.dataCheck
                });
                return !!a && (n(null, a),
                !0)
            }
            function appendScriptTagToHead(e) {
                var t = e.url
                  , n = e.charset
                  , r = h.createElement("script");
                return r.type = "text/javascript",
                n && (r.charset = n),
                r.src = t,
                m.appendChild(r),
                r
            }
            var e = Object.getOwnPropertySymbols
              , n = Object.prototype.hasOwnProperty
              , r = Object.prototype.propertyIsEnumerable
              , o = function() {
                try {
                    if (!Object.assign)
                        return !1;
                    var e = new String("abc");
                    if (e[5] = "de",
                    "5" === Object.getOwnPropertyNames(e)[0])
                        return !1;
                    for (var t = {}, n = 0; n < 10; n++)
                        t["_" + String.fromCharCode(n)] = n;
                    if ("0123456789" !== Object.getOwnPropertyNames(t).map(function(e) {
                        return t[e]
                    }).join(""))
                        return !1;
                    var r = {};
                    return "abcdefghijklmnopqrst".split("").forEach(function(e) {
                        r[e] = e
                    }),
                    "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
                } catch (o) {
                    return !1
                }
            }() ? Object.assign : function(t, o) {
                for (var i, a, s = toObject(t), u = 1; u < arguments.length; u++) {
                    i = Object(arguments[u]);
                    for (var c in i)
                        n.call(i, c) && (s[c] = i[c]);
                    if (e) {
                        a = e(i);
                        for (var l = 0; l < a.length; l++)
                            r.call(i, a[l]) && (s[a[l]] = i[a[l]])
                    }
                }
                return s
            }
              , i = encodeURIComponent
              , a = "undefined" != typeof window ? window : t
              , s = a["localStorage"]
              , u = {
                disabled: !1,
                set: function(e, t) {
                    return void 0 === t ? u.remove(e) : (s.setItem(e, u.serialize(t)),
                    t)
                },
                get: function(e, t) {
                    var n = u.deserialize(s.getItem(e));
                    return void 0 === n ? t : n
                },
                remove: function(e) {
                    s.removeItem(e)
                },
                clear: function() {
                    s.clear()
                },
                has: function(e) {
                    return void 0 !== u.get(e)
                },
                forEach: function(e) {
                    for (var t = 0; t < s.length; t++) {
                        var n = s.key(t);
                        e(n, u.get(n))
                    }
                },
                getAll: function() {
                    var e = {};
                    return u.forEach(function(t, n) {
                        e[t] = n
                    }),
                    e
                },
                serialize: function(e) {
                    return JSON.stringify(e)
                },
                deserialize: function(e) {
                    if ("string" == typeof e)
                        try {
                            return JSON.parse(e)
                        } catch (t) {
                            return e || void 0
                        }
                }
            };
            try {
                u.set("__store__", "__store__"),
                "__store__" !== u.get("__store__") && (u.disabled = !0),
                u.remove("__store__")
            } catch (b) {
                u.disabled = !0
            }
            u.enabled = !u.disabled;
            var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
              , l = window
              , p = function() {
                return "Promise"in l && c(isFunction(Promise))
            }()
              , f = function() {}
              , d = encodeURIComponent
              , h = document
              , m = h.head || h.getElementsByTagName("head")[0]
              , v = 2e3
              , g = {
                timeout: v,
                retryTimes: 2,
                backup: null,
                params: {},
                jsonp: "callback",
                name: null,
                cache: !1,
                useStore: !1,
                storeCheck: null,
                storeSign: null,
                storeCheckKey: null,
                dataCheck: null,
                charset: "UTF-8"
            }
              , y = (new Date).getTime();
            return jsonp$1
        })
    }
    ).call(t, n(0))
}
, function(e, t, n) {
    "use strict";
    var r = n(8);
    e.exports = r,
    e.exports["default"] = e.exports
}
, function(e, t, n) {
    !function(e, n) {
        n(t)
    }(0, function(e) {
        "use strict";
        function isNumber(e) {
            return "number" == typeof e
        }
        function isString(e) {
            return "string" == typeof e
        }
        function isFunction(e) {
            return "function" == typeof e
        }
        function isBoolean(e) {
            return !0 === e || !1 === e
        }
        function getPrototype(e) {
            return Object.getPrototypeOf ? Object.getPrototypeOf(e) : e.__proto__ ? e.__proto__ : e.constructor.prototype
        }
        function isObject(e) {
            return e === Object(e) && !isFunction(e)
        }
        function isNative(e) {
            return isFunction(e) && /native code/.test(e.toString())
        }
        function extend(e, t) {
            if (!t)
                return e;
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n]);
            return e
        }
        function clone(e) {
            return extend({}, e)
        }
        function nextHandler() {
            i = !1;
            var e = o.slice(0);
            o = [],
            e.forEach(function(e) {
                return e()
            })
        }
        function nextTick(e, n) {
            var r;
            if (o.push(function() {
                if (e)
                    try {
                        e.call(n)
                    } catch (t) {
                        console.error(t)
                    }
                else
                    r && r(n)
            }),
            i || (i = !0,
            t()),
            !e && a)
                return new Promise(function(e) {
                    r = e
                }
                )
        }
        function isVNode(e) {
            return e && "VirtualNode" === e.type
        }
        function isVText(e) {
            return e && "VirtualText" === e.type
        }
        function isWidget(e) {
            return e && "Widget" === e.type
        }
        function isHook(e) {
            return !!(e && "function" == typeof e.hook && !e.hasOwnProperty("hook") || e && "function" == typeof e.unhook && !e.hasOwnProperty("unhook"))
        }
        function createElement(e, t) {
            if (isWidget(e))
                return e.init();
            if (isString(e) || isNumber(e))
                return p.createTextNode(e);
            if (isVText(e))
                return p.createTextNode(e.text);
            if (null === e || !1 === e)
                return p.createComment("Empty dom node");
            if (isVNode(e)) {
                e.isSvg ? t = !0 : "svg" === e.tagName ? t = !0 : "foreignObject" === e.tagName && (t = !1),
                f || (t = !1),
                t && (e.namespace = l,
                e.isSvg = t);
                var n = null === e.namespace ? p.createElement(e.tagName) : f ? p.createElementNS(e.namespace, e.tagName) : p.createElement(e.tagName);
                setProps(n, e.props, t),
                c.debug && (n._props = e.props);
                var r = e.children;
                return r.length && r.forEach(function(r) {
                    if (r !== undefined && null !== r && !1 !== r && n.appendChild) {
                        (isWidget(r) || isVNode(r)) && (r.parentContext = e.parentContext || {});
                        var o = createElement(r, t);
                        o && n.appendChild(o)
                    }
                }),
                n
            }
            if (Array.isArray(e)) {
                var o = p.createDocumentFragment();
                return e.forEach(function(e) {
                    if (e !== undefined && null !== e && !1 !== e && o.appendChild) {
                        var n = createElement(e, t);
                        return n && o.appendChild(n),
                        o.appendChild(n)
                    }
                }),
                o
            }
            return null
        }
        function setProps(e, t, n) {
            for (var r in t)
                if ("children" !== r) {
                    var o = t[r];
                    if (isHook(o))
                        o.hook && o.hook(e, r);
                    else if ("style" !== r)
                        if (isObject(o))
                            if (r in e)
                                try {
                                    e[r] = o
                                } catch (s) {
                                    console.warn("set prop failed, prop value:", o)
                                }
                            else
                                e.setAttribute(r, o);
                        else if ("list" !== r && "type" !== r && !n && r in e) {
                            try {
                                e[r] = null == o ? "" : o
                            } catch (s) {
                                console.warn("set prop failed, prop value:", o)
                            }
                            null != o && !1 !== o || e.removeAttribute(r)
                        } else
                            null == o || !1 === o ? e.removeAttribute(r) : isFunction(o) || e.setAttribute(r, o);
                    else if (isString(o))
                        e.setAttribute(r, o);
                    else if (isObject(o))
                        for (var i in o) {
                            var a = o[i];
                            if (a !== undefined)
                                try {
                                    e[r][i] = a
                                } catch (s) {
                                    console.warn("Can't set empty style")
                                }
                        }
                }
        }
        function createVText(e) {
            return new d(e)
        }
        function diff(e, t) {
            var n = {
                old: e
            };
            return walk(e, t, n, 0),
            n
        }
        function walk(e, t, n, r) {
            if (e !== t) {
                var o = n[r]
                  , i = !1;
                if (null == t)
                    isWidget(e) || (clearState(e, n, r),
                    o = n[r]),
                    o = appendPatch(o, new m(m.REMOVE,e,null));
                else if (isVText(t))
                    isVText(e) ? e.text !== t.text && (o = appendPatch(o, new m(m.VTEXT,e,t))) : (i = !0,
                    o = appendPatch(o, new m(m.VTEXT,e,t)));
                else if (isVNode(t))
                    if (isVNode(e))
                        if (e.tagName === t.tagName && e.key === t.key) {
                            var a = diffProps(e.props, t.props);
                            a && (o = appendPatch(o, new m(m.PROPS,e,a))),
                            o = diffChildren(e, t, o, n, r)
                        } else
                            o = appendPatch(o, new m(m.VNODE,e,t)),
                            i = !0;
                    else
                        o = appendPatch(o, new m(m.VNODE,e,t)),
                        i = !0;
                else
                    isWidget(t) ? (isWidget(e) || (i = !0),
                    o = appendPatch(o, new m(m.WIDGET,e,t))) : Array.isArray(t) && (i = !0,
                    t.forEach(function(e) {
                        walk(null, e, n, r),
                        r++
                    }));
                o && (n[r] = o),
                i && clearState(e, n, r)
            }
        }
        function diffProps(e, t) {
            var n = null;
            for (var r in e)
                if ("children" !== r) {
                    t.hasOwnProperty(r) || (n = n || {},
                    n[r] = undefined);
                    var o = e[r]
                      , i = t[r];
                    if (o !== i)
                        if (isObject(o) && isObject(i))
                            if (getPrototype(o) !== getPrototype(i))
                                n = n || {},
                                n[r] = i;
                            else if (isHook(i))
                                n = n || {},
                                n[r] = i;
                            else {
                                var a = diffProps(o, i);
                                a && (n = n || {},
                                n[r] = a)
                            }
                        else
                            n = n || {},
                            n[r] = i
                }
            for (var s in t)
                e.hasOwnProperty(s) || (n = n || {},
                n[s] = t[s]);
            return n
        }
        function diffChildren(e, t, n, r, o) {
            for (var i = e.children, a = diffList(i, t.children, "key"), s = a.list, u = Math.max(i.length, s.length), c = 0; c < u; c++) {
                var l = i[c]
                  , p = s[c];
                o += 1,
                l ? walk(l, p, r, o) : p && (n = appendPatch(n, new m(m.INSERT,null,p))),
                isVNode(l) && l.count && (o += l.count)
            }
            return a.moves && (n = appendPatch(n, new m(m.ORDER,e,a.moves))),
            n
        }
        function diffList(e, t, n) {
            var r = mapListKeyIndex(t, n)
              , o = r.keyMap
              , i = r.free;
            if (i.length === t.length)
                return {
                    list: t,
                    moves: null
                };
            var a = mapListKeyIndex(e, n)
              , s = a.keyMap;
            if (a.free.length === e.length)
                return {
                    list: t,
                    moves: null
                };
            var u = 0
              , c = i.length
              , l = 0
              , p = e.map(function(e) {
                var r = e[n];
                return r ? o.hasOwnProperty(r) ? t[o[r]] : (l++,
                null) : u < c ? t[i[u++]] : (l++,
                null)
            })
              , f = u >= i.length ? t.length : i[u];
            t.forEach(function(e, t) {
                var r = e[n];
                r ? s.hasOwnProperty(r) || p.push(e) : t >= f && p.push(e)
            });
            for (var d, h = p.slice(), m = 0, v = [], g = [], y = 0; y < t.length; ) {
                var b = t[y];
                for (d = h[m]; null === d && h.length; )
                    v.push(remove(h, m, null)),
                    d = h[m];
                var k = b[n];
                d && d[n] === k ? (m++,
                y++) : k ? (d && d[n] && o[d[n]] !== y + 1 ? (v.push(remove(h, m, d[n])),
                d = h[m],
                d && d[n] === k ? m++ : g.push({
                    key: k,
                    to: y
                })) : g.push({
                    key: k,
                    to: y
                }),
                y++) : d && d[n] && v.push(remove(h, m, d[n]))
            }
            for (; m < h.length; )
                d = h[m],
                v.push(remove(h, m, d && d.key));
            return v.length !== l || g.length ? {
                list: p,
                moves: {
                    removes: v,
                    inserts: g
                }
            } : {
                list: p,
                moves: null
            }
        }
        function remove(e, t, n) {
            return e.splice(t, 1),
            {
                from: t,
                key: n
            }
        }
        function clearState(e, t, n) {
            unhookAll(e, t, n),
            destroyWidgets(e, t, n)
        }
        function unhookAll(e, t, n) {
            if (isVNode(e) && (e.hooks && (t[n] = appendPatch(t[n], new m(m.PROPS,e,undefinedKeys(e.hooks)))),
            e.descendantHooks))
                for (var r = e.children, o = r.length, i = 0; i < o; i++) {
                    var a = r[i];
                    n += 1,
                    unhookAll(a, t, n),
                    isVNode(a) && a.count && (n += a.count)
                }
        }
        function destroyWidgets(e, t, n) {
            isWidget(e) ? isFunction(e.destroy) && (t[n] = appendPatch(t[n], new m(m.REMOVE,e,null))) : isVNode(e) && e.hasWidgets && e.children.forEach(function(e) {
                n += 1,
                destroyWidgets(e, t, n),
                isVNode(e) && e.count && (n += e.count)
            })
        }
        function mapListKeyIndex(e, t) {
            var n = {}
              , r = [];
            return e.forEach(function(e, o) {
                e[t] ? n[e[t]] = o : r.push(o)
            }),
            {
                keyMap: n,
                free: r
            }
        }
        function undefinedKeys(e) {
            var t = {};
            for (var n in e)
                t[n] = undefined;
            return t
        }
        function appendPatch(e, t) {
            return e ? (Array.isArray(e) ? e.push(t) : e = [e, t],
            e) : [t]
        }
        function domIndex(e, t, n, r) {
            return n && 0 !== n.length ? (n.sort(function(e, t) {
                return e - t
            }),
            recurse(e, t, n, r)) : {}
        }
        function recurse(e, t, n, r, o) {
            if (void 0 === r && (r = {}),
            void 0 === o && (o = 0),
            e) {
                indexInRange(n, o, o) && (r[o] = e);
                var i = t && t.children;
                if (i) {
                    var a = e.childNodes;
                    i.forEach(function(e, t) {
                        o++,
                        e = e || {};
                        var i = o + (e.count || 0);
                        indexInRange(n, o, i) && recurse(a[t], e, n, r, o),
                        o = i
                    })
                }
            }
            return r
        }
        function indexInRange(e, t, n) {
            if (0 === e.length)
                return !1;
            for (var r, o, i = 0, a = e.length - 1; i <= a; ) {
                if (r = (a + i) / 2 >> 0,
                o = e[r],
                i === a)
                    return o >= t && o <= n;
                if (o < t)
                    i = r + 1;
                else {
                    if (!(o > n))
                        return !0;
                    a = r - 1
                }
            }
            return !1
        }
        function patch(e, t, n) {
            var r = getPatchIndices(t);
            if (0 === r.length)
                return e;
            var o = t.old
              , i = domIndex(e, o, r);
            return r.forEach(function(r) {
                e = applyPatch(e, i[r], t[r], n)
            }),
            e
        }
        function applyPatch(e, t, n, r) {
            if (!t)
                return e;
            var o;
            return Array.isArray(n) || (n = [n]),
            n.forEach(function(n) {
                o = patchSingle(t, n, r),
                t === e && (e = o)
            }),
            e
        }
        function patchSingle(e, t, n) {
            var r = t.type
              , o = t.vnode
              , i = t.patch;
            switch (r) {
            case m.VTEXT:
                return patchVText(e, i);
            case m.VNODE:
                return patchVNode(e, i, n);
            case m.INSERT:
                return patchInsert(e, i, n);
            case m.WIDGET:
                return patchWidget(e, o, i);
            case m.PROPS:
                return patchProps(e, i, o.props, o.isSvg);
            case m.ORDER:
                return patchOrder(e, i);
            case m.REMOVE:
                return patchRemove(e, o);
            default:
                return e
            }
        }
        function patchVText(e, t) {
            if (null === e)
                return createElement(t);
            if (e.splitText !== undefined)
                return e.nodeValue = t.text,
                e;
            var n = e.parentNode
              , r = createElement(t);
            return n && n.replaceChild(r, e),
            r
        }
        function patchVNode(e, t, n) {
            if ((isWidget(t) || isVNode(t)) && (t.parentContext = n),
            null === e)
                return createElement(t);
            var r = e.parentNode
              , o = createElement(t);
            return r && o !== e && r.replaceChild(o, e),
            o
        }
        function patchInsert(e, t, n) {
            (isWidget(t) || isVNode(t)) && (t.parentContext = n);
            var r = createElement(t);
            return e && r && e.appendChild(r),
            e
        }
        function patchWidget(e, t, n) {
            var r = isUpdateWidget(t, n);
            t && (n.parentContext = t.parentContext);
            var o = r ? n.update(t, n, e) || e : createElement(n)
              , i = e.parentNode;
            return i && e !== o && i.replaceChild(o, e),
            !r && t && destroyWidget(e, t),
            o
        }
        function destroyWidget(e, t) {
            isFunction(t.destroy) && isWidget(t) && t.destroy(e)
        }
        function patchProps(e, t, n, r) {
            for (var o in t)
                if ("children" !== o) {
                    var i = t[o]
                      , a = n[o];
                    if (null == i || !1 === i) {
                        if (isHook(a) && a.unhook) {
                            a.unhook(e, o, i);
                            continue
                        }
                        if ("style" === o) {
                            isString(a) || e.removeAttribute(o);
                            continue
                        }
                        o in e ? (e[o] = isString(a) ? "" : null,
                        e.removeAttribute(o)) : e.removeAttribute(o)
                    } else {
                        if (isHook(i)) {
                            isHook(a) && a.unhook && a.unhook(e, o, i),
                            i && i.hook && i.hook(e, o, a);
                            continue
                        }
                        if ("style" === o) {
                            if (isString(i))
                                e.setAttribute(o, i);
                            else
                                for (var s in i) {
                                    var u = i[s];
                                    if (null != u && !1 !== u)
                                        try {
                                            e[o][s] = u
                                        } catch (c) {}
                                }
                            continue
                        }
                        if (isObject(i)) {
                            if (a && isObject(a) && getPrototype(a) !== getPrototype(i))
                                if (o in e)
                                    try {
                                        e[o] = i
                                    } catch (c) {}
                                else
                                    e.setAttribute(o, i);
                            continue
                        }
                        if ("list" !== o && "type" !== o && !r && o in e) {
                            try {
                                e[o] = i
                            } catch (c) {}
                            continue
                        }
                        isFunction(i) || e.setAttribute(o, i)
                    }
                }
            return e
        }
        function patchOrder(e, t) {
            for (var n, r, o, i = t.removes, a = t.inserts, s = e.childNodes, u = {}, c = 0; c < i.length; c++)
                r = i[c],
                n = s[r.from],
                r.key && (u[r.key] = n),
                e.removeChild(n);
            for (var l = s.length, p = 0; p < a.length; p++)
                o = a[p],
                n = u[o.key],
                e.insertBefore(n, o.to >= l++ ? null : s[o.to]);
            return e
        }
        function patchRemove(e, t) {
            var n = e.parentNode;
            return n && n.removeChild(e),
            isWidget(t) && destroyWidget(e, t),
            null
        }
        function isUpdateWidget(e, t) {
            if (isWidget(e) && isWidget(t)) {
                var n = e.props.key
                  , r = t.props.key;
                return "name"in e && "name"in t ? e.name === t.name && n === r : e.init === t.init && n === r
            }
            return !1
        }
        function getPatchIndices(e) {
            var t = [];
            if (e)
                for (var n in e)
                    "old" !== n && e.hasOwnProperty(n) && t.push(Number(n));
            return t
        }
        function mountVNode(e, t) {
            return isObject(e) && (e.parentContext = t),
            createElement(e)
        }
        function mountComponent(e) {
            var t = e.parentContext
              , n = e.tagName.prototype;
            n && isFunction(n.render) && (e.component = new e.tagName(e.props,t));
            var r = e.component;
            isFunction(r.componentWillMount) && (r.componentWillMount(),
            r.state = r.getState()),
            r._dirty = !1;
            var o = renderComponent(r);
            r._rendered = o,
            isFunction(r.componentDidMount) && g.push(r),
            isFunction(e.props.ref) && g.push(function() {
                return e.props.ref(r)
            });
            var i = mountVNode(o, getChildContext(r, t));
            return r.dom = i,
            r._disable = !1,
            null !== c.afterMount && c.afterMount(e),
            i
        }
        function mountStatelessComponent(e) {
            var t = e.props.ref;
            delete e.props.ref,
            e._rendered = e.tagName(e.props, e.parentContext);
            var n = e._rendered;
            return isVNode(n) && isFunction(t) && (t = new v(t),
            n.props.ref = t),
            mountVNode(n, e.parentContext)
        }
        function getChildContext(e, t) {
            return e.getChildContext ? extend(t, e.getChildContext()) : t
        }
        function renderComponent(e) {
            u.current = e;
            var t = e.render();
            return (isNumber(t) || isString(t)) && (t = createVText(t)),
            u.current = null,
            t
        }
        function flushMount() {
            if (g.length) {
                var e = g.slice(0);
                g.length = 0,
                e.forEach(function(e) {
                    isFunction(e) ? e() : e.componentDidMount && e.componentDidMount()
                })
            }
        }
        function reRenderComponent(e, t, n) {
            var r = t.component = e.component
              , o = t.props
              , i = r.context;
            return r._disable = !0,
            isFunction(r.componentWillReceiveProps) && r.componentWillReceiveProps(o, i),
            r._disable = !1,
            r.prevProps = r.props,
            r.prevState = r.state,
            r.prevContext = r.context,
            r.props = o,
            r.context = i,
            r.dom = n,
            isFunction(t.props.ref) && t.props.ref(r),
            updateComponent(r),
            r.dom
        }
        function reRenderStatelessComponent(e, t, n) {
            var r = e._rendered
              , o = t.tagName(t.props, t.parentContext);
            return t._rendered = o,
            updateVNode(o, r, n, e.parentContext)
        }
        function updateComponent(e, t) {
            void 0 === t && (t = !1);
            var n = e.dom
              , r = e.props
              , o = e.getState()
              , i = e.context
              , a = e.prevProps || r
              , s = e.prevState || o
              , u = e.prevContext || i;
            e.props = a,
            e.context = u;
            var l = !1;
            if (!t && isFunction(e.shouldComponentUpdate) && !1 === e.shouldComponentUpdate(r, o, i) ? l = !0 : isFunction(e.componentWillUpdate) && e.componentWillUpdate(r, o, i),
            e.props = r,
            e.state = o,
            e.context = i,
            e._dirty = !1,
            !l) {
                var p = e._rendered
                  , f = renderComponent(e)
                  , d = getChildContext(e, i);
                e._rendered = f,
                e.dom = updateVNode(f, p, n, d),
                e.componentDidUpdate && e.componentDidUpdate(a, s, i)
            }
            if (e.prevProps = e.props,
            e.prevState = e.state,
            e.prevContext = e.context,
            e._pendingCallbacks)
                for (; e._pendingCallbacks.length; )
                    e._pendingCallbacks.pop().call(e);
            null !== c.afterUpdate && c.afterUpdate(e),
            flushMount()
        }
        function updateVNode(e, t, n, r) {
            return isObject(e) && (e.parentContext = r),
            patch(n, diff(t, e), r)
        }
        function unmountComponent(e) {
            var t = e.component;
            null !== c.beforeUnmount && c.beforeUnmount(t),
            isFunction(t.componentWillUnmount) && t.componentWillUnmount(),
            updateVNode(null, t._rendered, t.dom, t.context),
            t.dom = t._rendered = null,
            isFunction(e.props.ref) && e.props.ref(null)
        }
        function unmountStatelessComponent(e, t) {
            updateVNode(null, e._rendered, t, e.parentContext),
            e._rendered = null,
            isFunction(e.props.ref) && e.props.ref(null)
        }
        function enqueueRender(e) {
            !e._dirty && (e._dirty = !0) && 1 === y.push(e) && nextTick(rerender)
        }
        function rerender() {
            var e, t = y;
            for (y = []; e = t.pop(); )
                e._dirty && updateComponent(e)
        }
        function shallowEqual(e, t) {
            if (null === e || null === t)
                return !1;
            if (Object.is(e, t))
                return !0;
            var n = e ? Object.keys(e) : []
              , r = t ? Object.keys(t) : [];
            if (n.length !== r.length)
                return !1;
            for (var o = 0; o < n.length; o++) {
                var i = n[o];
                if (!t.hasOwnProperty(i) || !Object.is(e[i], t[i]))
                    return !1
            }
            return !0
        }
        function isVChild(e) {
            return isVNode(e) || isString(e) || isNumber(e)
        }
        function render(e, t, n) {
            if (!isVChild(e) && !isWidget(e))
                return null;
            if (!t || 1 !== t.nodeType)
                throw new Error(t + " should be a DOM Element");
            var r = mountVNode(e, {});
            return r && t.appendChild(r),
            t && (t._component = e),
            flushMount(),
            n && n(),
            e.component || r
        }
        function h(e, t, n) {
            var r, o, i, a = [];
            return !n && isChildren(t) && (n = t,
            t = {}),
            t = t || {},
            t.hasOwnProperty("key") && t.key && (r = t.key,
            delete t.key),
            t.hasOwnProperty("namespace") && t.namespace && (o = t.namespace,
            delete t.namespace),
            t.hasOwnProperty("owner") && (i = t.owner,
            delete t.owner),
            t.hasOwnProperty("children") && t.children && (n && n.length || (n = t.children),
            delete t.children),
            n && addChildren(a, n, e),
            new w(e,t,a,r,o,i)
        }
        function addChildren(e, t, r) {
            isString(t) || isNumber(t) ? (t = String(t),
            e.push(createVText(t))) : isChild(t) ? e.push(t) : n(t) && t.forEach(function(t) {
                return addChildren(e, t, r)
            })
        }
        function isChild(e) {
            return isVNode(e) || isVText(e) || isWidget(e)
        }
        function isChildren(e) {
            return isString(e) || n(e) || isChild(e)
        }
        function getEventName(e) {
            return "onDoubleClick" === e ? e = "ondblclick" : "onTouchTap" === e && (e = "onclick"),
            e.toLowerCase()
        }
        function propertyChangeHandler(e) {
            if ("value" === e.propertyName) {
                var t = e.target || e.srcElement
                  , n = t.value;
                n !== W && (W = n,
                isFunction(I) && I.call(t, e))
            }
        }
        function processOnPropertyChangeEvent(e, t) {
            I = t,
            M || (M = !0,
            V.addEventListener("focusin", function() {
                unbindOnPropertyChange(),
                bindOnPropertyChange(e)
            }, !1),
            V.addEventListener("focusout", unbindOnPropertyChange, !1))
        }
        function bindOnPropertyChange(e) {
            U = e,
            W = e.value,
            $ = Object.getOwnPropertyDescriptor(e.constructor.prototype, "value"),
            Object.defineProperty(U, "value", {
                get: function() {
                    return $.get.call(this)
                },
                set: function(e) {
                    W = e,
                    $.set.call(this, e)
                }
            }),
            U.addEventListener("propertychange", propertyChangeHandler, !1)
        }
        function unbindOnPropertyChange() {
            U && (delete U.value,
            U.removeEventListener("propertychange", propertyChangeHandler, !1),
            U = null,
            W = null,
            $ = null)
        }
        function detectCanUseOnInputNode(e) {
            var t = e.nodeName && e.nodeName.toLowerCase()
              , n = e.type;
            return "input" === t && /text|password/.test(n) || "textarea" === t
        }
        function fixEvent(e, t) {
            return detectCanUseOnInputNode(e) && "onchange" === t && (t = S in window ? S : N),
            t
        }
        function parseEventName(e) {
            return e.substr(2)
        }
        function stopPropagation() {
            this.cancelBubble = !0,
            this.stopImmediatePropagation()
        }
        function dispatchEvent(e, t, n, r, o) {
            var i = n.get(t);
            if ((!i || (r--,
            o.currentTarget = t,
            i(e),
            !e.cancelBubble)) && r > 0) {
                var a = t.parentNode;
                if (null === a || "click" === e.type && 1 === a.nodeType && a.disabled)
                    return;
                dispatchEvent(e, a, n, r, o)
            }
        }
        function attachEventToDocument(e, t, n) {
            var r = function(e) {
                var t = n.items
                  , r = t.size;
                if (r > 0) {
                    var o = {
                        currentTarget: e.target
                    };
                    Object.defineProperties(e, {
                        currentTarget: {
                            configurable: !0,
                            get: function() {
                                return o.currentTarget
                            }
                        },
                        stopPropagation: {
                            value: stopPropagation
                        }
                    }),
                    dispatchEvent(e, e.target, n.items, r, o)
                }
            };
            return e.addEventListener(parseEventName(t), r, !1),
            r
        }
        function attachEventToNode(e, t, n) {
            var r = function(t) {
                var r = n.get(e);
                if (r && r.eventHandler) {
                    var o = {
                        currentTarget: e
                    };
                    Object.defineProperties(t, {
                        currentTarget: {
                            configurable: !0,
                            get: function() {
                                return o.currentTarget
                            }
                        }
                    }),
                    r.eventHandler(t)
                }
            };
            return e.addEventListener(parseEventName(t), r, !1),
            r
        }
        function transformPropsForRealTag(e, t) {
            var n = {}
              , r = C.DOMAttributeNamespaces;
            for (var o in t) {
                var i = t[o]
                  , a = o;
                if ("id" !== (o = C.DOMAttributeNames[o] || o) && "className" !== o && "namespace" !== o || i === undefined)
                    if ("ref" !== o)
                        if ("dangerouslySetInnerHTML" !== o)
                            if ("o" !== o.charAt(0) || "n" !== o.charAt(1))
                                if (q && r.hasOwnProperty(a) && (isString(i) || isNumber(i) || isBoolean(i))) {
                                    var s = r[a];
                                    n[o] = i instanceof H ? i : new H(s,i)
                                } else if ("defaultValue" !== o) {
                                    if ("style" !== o)
                                        n[o] = i;
                                    else if (isString(i))
                                        n[o] = i;
                                    else if (isObject(i))
                                        for (var u in i) {
                                            var c = i[u];
                                            c === undefined || !isString(c) && isNaN(c) || (c = isNumber(c) && !1 === L.test(u) ? c + "px" : c,
                                            n[o] = n[o] || {},
                                            "float" === u ? (n[o]["cssFloat"] = c,
                                            n[o]["styleFloat"] = c) : n[o][u] = c)
                                        }
                                } else
                                    n.value = t.value || t.defaultValue;
                            else
                                n[o] = i instanceof D ? i : new D(o,i);
                        else
                            n[o] = i instanceof P ? i : new P(i);
                    else
                        n[o] = i instanceof v ? i : new v(i);
                else
                    n[o] = i
            }
            return n
        }
        function transformPropsForComponent(e, t) {
            var n = {};
            for (var r in e) {
                var o = e[r];
                n[r] = o
            }
            if (t)
                for (var i in t)
                    n[i] === undefined && (n[i] = t[i]);
            return n
        }
        function createElement$2(e, t) {
            for (var n = arguments, r = [], o = arguments.length - 2; o-- > 0; )
                r[o] = arguments[o + 2];
            for (var i = z, a = 2, s = arguments.length; a < s; a++) {
                var c = n[a];
                Array.isArray(c) ? c.forEach(function(e) {
                    i === z ? i = [e] : i.push(e)
                }) : i === z ? i = [c] : i.push(c)
            }
            var l;
            return null == e && (e = ""),
            isString(e) ? (l = transformPropsForRealTag(e, t),
            l.owner = u.current,
            h(e, l, i)) : isFunction(e) ? (l = transformPropsForComponent(t, e.defaultProps),
            l.children ? Array.isArray(l.children) || (l.children = [l.children]) : l.children = i,
            l.owner = u.current,
            e.prototype && e.prototype.render ? new E(e,l) : new T(e,l)) : e
        }
        function cloneElement(e, t) {
            if (isVText(e))
                return e;
            var n = extend(clone(e.props), t);
            return e.namespace && (n.namespace = e.namespace),
            createElement$2(e.tagName, n, arguments.length > 2 ? [].slice.call(arguments, 2) : e.children)
        }
        function unmountComponentAtNode(e) {
            var t = e._component;
            return !!isWidget(t) && (t.destroy(e),
            !0)
        }
        function findDOMNode(e) {
            return e || e.dom && e
        }
        var t, n = Array.isArray, r = function() {
            var e = document;
            return function() {
                return !!e.createElementNS && !!e.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect
            }
        }(), o = [], i = !1, a = function() {
            return "Promise"in window && isNative(Promise)
        }(), s = function() {
            return "MutationObserver"in window && (isNative(MutationObserver) || "[object MutationObserverConstructor]" === MutationObserver.toString())
        }();
        a ? function() {
            var e = Promise.resolve();
            t = function() {
                e.then(nextHandler)
            }
        }() : s ? function() {
            var e = 1
              , n = document.createTextNode(e);
            new MutationObserver(nextHandler).observe(n, {
                characterData: !0
            }),
            t = function() {
                e = (e + 1) % 2,
                n.data = e
            }
        }() : function() {
            t = function() {
                setTimeout(nextHandler, 0)
            }
        }();
        var u = {
            current: null
        }
          , c = {
            afterMount: null,
            afterUpdate: null,
            beforeUnmount: null,
            roots: {},
            debug: !1
        }
          , l = "http://www.w3.org/2000/svg"
          , p = document
          , f = r()
          , d = function(e) {
            this.type = "VirtualText",
            this.text = e || ""
        }
          , m = function(e, t, n) {
            void 0 === e && (e = "VirtualPatch"),
            this.type = e,
            this.vnode = t,
            this.patch = n
        };
        m.NODE = "NODE",
        m.VTEXT = "VTEXT",
        m.VNODE = "VNODE",
        m.WIDGET = "WIDGET",
        m.STATELESS = "STATELESS",
        m.PROPS = "PROPS",
        m.ORDER = "ORDER",
        m.INSERT = "INSERT",
        m.REMOVE = "REMOVE";
        var v = function(e) {
            this.callback = e
        };
        v.prototype.hook = function(e) {
            this.callback(e)
        }
        ,
        v.prototype.unhook = function() {
            this.callback(null)
        }
        ;
        var g = []
          , y = []
          , b = function(e, t) {
            this._dirty = !0,
            this._disable = !0,
            this._pendingStates = [],
            this.state || (this.state = {}),
            this.props = e || {},
            this.context = t || {}
        };
        b.prototype.setState = function(e, t) {
            e && (this._pendingStates = this._pendingStates || []).push(e),
            isFunction(t) && (this._pendingCallbacks = this._pendingCallbacks || []).push(t),
            this._disable || enqueueRender(this)
        }
        ,
        b.prototype.getState = function() {
            var e = this
              , t = this
              , n = t._pendingStates
              , r = t.state
              , o = t.props;
            if (!n.length)
                return r;
            var i = clone(r)
              , a = n.concat();
            return this._pendingStates.length = 0,
            a.forEach(function(t) {
                isFunction(t) && (t = t.call(e, r, o)),
                extend(i, t)
            }),
            i
        }
        ,
        b.prototype.forceUpdate = function(e) {
            isFunction(e) && (this._pendingCallbacks = this._pendingCallbacks || []).push(e),
            updateComponent(this, !0)
        }
        ,
        b.prototype.render = function(e, t, n) {}
        ,
        Object.is = Object.is || function(e, t) {
            return e === t ? 0 !== e || 1 / e == 1 / t : e !== e && t !== t
        }
        ;
        var k = function(e) {
            function PureComponent() {
                e.apply(this, arguments),
                this.isPureComponent = !0
            }
            return e && (PureComponent.__proto__ = e),
            PureComponent.prototype = Object.create(e && e.prototype),
            PureComponent.prototype.constructor = PureComponent,
            PureComponent.prototype.shouldComponentUpdate = function(e, t) {
                return !shallowEqual(this.props, e) || !shallowEqual(this.state, t)
            }
            ,
            PureComponent
        }(b)
          , w = function(e, t, n, r, o, i) {
            this.type = "VirtualNode",
            this.tagName = e || "DIV",
            this.props = t || {},
            this.children = n || [],
            this.key = r || null,
            this.namespace = isString(o) ? o : null,
            this._owner = i;
            var a, s = this.children.length || 0, u = 0, c = !1, l = !1;
            for (var p in t)
                if (t.hasOwnProperty(p)) {
                    var f = t[p];
                    isHook(f) && f.unhook && (a || (a = {}),
                    a[p] = f)
                }
            s && this.children.forEach(function(e) {
                isVNode(e) ? (u += e.count || 0,
                !c && e.hasWidgets && (c = !0),
                l || !e.hooks && !e.descendantHooks || (l = !0)) : !c && isWidget(e) && isFunction(e.destroy) && (c = !0)
            }),
            this.count = s + u,
            this.hasWidgets = c,
            this.hooks = a,
            this.descendantHooks = l
        }
          , _ = {
            ev: "http://www.w3.org/2001/xml-events",
            xlink: "http://www.w3.org/1999/xlink",
            xml: "http://www.w3.org/XML/1998/namespace"
        }
          , x = {
            accentHeight: "accent-height",
            accumulate: 0,
            additive: 0,
            alignmentBaseline: "alignment-baseline",
            allowReorder: "allowReorder",
            alphabetic: 0,
            amplitude: 0,
            arabicForm: "arabic-form",
            ascent: 0,
            attributeName: "attributeName",
            attributeType: "attributeType",
            autoReverse: "autoReverse",
            azimuth: 0,
            baseFrequency: "baseFrequency",
            baseProfile: "baseProfile",
            baselineShift: "baseline-shift",
            bbox: 0,
            begin: 0,
            bias: 0,
            by: 0,
            calcMode: "calcMode",
            capHeight: "cap-height",
            clip: 0,
            clipPath: "clip-path",
            clipRule: "clip-rule",
            clipPathUnits: "clipPathUnits",
            colorInterpolation: "color-interpolation",
            colorInterpolationFilters: "color-interpolation-filters",
            colorProfile: "color-profile",
            colorRendering: "color-rendering",
            contentScriptType: "contentScriptType",
            contentStyleType: "contentStyleType",
            cursor: 0,
            cx: 0,
            cy: 0,
            d: 0,
            decelerate: 0,
            descent: 0,
            diffuseConstant: "diffuseConstant",
            direction: 0,
            display: 0,
            divisor: 0,
            dominantBaseline: "dominant-baseline",
            dur: 0,
            dx: 0,
            dy: 0,
            edgeMode: "edgeMode",
            elevation: 0,
            enableBackground: "enable-background",
            end: 0,
            evEvent: "ev:event",
            exponent: 0,
            externalResourcesRequired: "externalResourcesRequired",
            fill: 0,
            fillOpacity: "fill-opacity",
            fillRule: "fill-rule",
            filter: 0,
            filterRes: "filterRes",
            filterUnits: "filterUnits",
            floodColor: "flood-color",
            floodOpacity: "flood-opacity",
            focusable: 0,
            fontFamily: "font-family",
            fontSize: "font-size",
            fontSizeAdjust: "font-size-adjust",
            fontStretch: "font-stretch",
            fontStyle: "font-style",
            fontVariant: "font-variant",
            fontWeight: "font-weight",
            format: 0,
            from: 0,
            fx: 0,
            fy: 0,
            g1: 0,
            g2: 0,
            glyphName: "glyph-name",
            glyphOrientationHorizontal: "glyph-orientation-horizontal",
            glyphOrientationVertical: "glyph-orientation-vertical",
            glyphRef: "glyphRef",
            gradientTransform: "gradientTransform",
            gradientUnits: "gradientUnits",
            hanging: 0,
            horizAdvX: "horiz-adv-x",
            horizOriginX: "horiz-origin-x",
            ideographic: 0,
            imageRendering: "image-rendering",
            "in": 0,
            in2: 0,
            intercept: 0,
            k: 0,
            k1: 0,
            k2: 0,
            k3: 0,
            k4: 0,
            kernelMatrix: "kernelMatrix",
            kernelUnitLength: "kernelUnitLength",
            kerning: 0,
            keyPoints: "keyPoints",
            keySplines: "keySplines",
            keyTimes: "keyTimes",
            lengthAdjust: "lengthAdjust",
            letterSpacing: "letter-spacing",
            lightingColor: "lighting-color",
            limitingConeAngle: "limitingConeAngle",
            local: 0,
            markerEnd: "marker-end",
            markerMid: "marker-mid",
            markerStart: "marker-start",
            markerHeight: "markerHeight",
            markerUnits: "markerUnits",
            markerWidth: "markerWidth",
            mask: 0,
            maskContentUnits: "maskContentUnits",
            maskUnits: "maskUnits",
            mathematical: 0,
            mode: 0,
            numOctaves: "numOctaves",
            offset: 0,
            opacity: 0,
            operator: 0,
            order: 0,
            orient: 0,
            orientation: 0,
            origin: 0,
            overflow: 0,
            overlinePosition: "overline-position",
            overlineThickness: "overline-thickness",
            paintOrder: "paint-order",
            panose1: "panose-1",
            pathLength: "pathLength",
            patternContentUnits: "patternContentUnits",
            patternTransform: "patternTransform",
            patternUnits: "patternUnits",
            pointerEvents: "pointer-events",
            points: 0,
            pointsAtX: "pointsAtX",
            pointsAtY: "pointsAtY",
            pointsAtZ: "pointsAtZ",
            preserveAlpha: "preserveAlpha",
            preserveAspectRatio: "preserveAspectRatio",
            primitiveUnits: "primitiveUnits",
            r: 0,
            radius: 0,
            refX: "refX",
            refY: "refY",
            renderingIntent: "rendering-intent",
            repeatCount: "repeatCount",
            repeatDur: "repeatDur",
            requiredExtensions: "requiredExtensions",
            requiredFeatures: "requiredFeatures",
            restart: 0,
            result: 0,
            rotate: 0,
            rx: 0,
            ry: 0,
            scale: 0,
            seed: 0,
            shapeRendering: "shape-rendering",
            slope: 0,
            spacing: 0,
            specularConstant: "specularConstant",
            specularExponent: "specularExponent",
            speed: 0,
            spreadMethod: "spreadMethod",
            startOffset: "startOffset",
            stdDeviation: "stdDeviation",
            stemh: 0,
            stemv: 0,
            stitchTiles: "stitchTiles",
            stopColor: "stop-color",
            stopOpacity: "stop-opacity",
            strikethroughPosition: "strikethrough-position",
            strikethroughThickness: "strikethrough-thickness",
            string: 0,
            stroke: 0,
            strokeDasharray: "stroke-dasharray",
            strokeDashoffset: "stroke-dashoffset",
            strokeLinecap: "stroke-linecap",
            strokeLinejoin: "stroke-linejoin",
            strokeMiterlimit: "stroke-miterlimit",
            strokeOpacity: "stroke-opacity",
            strokeWidth: "stroke-width",
            surfaceScale: "surfaceScale",
            systemLanguage: "systemLanguage",
            tableValues: "tableValues",
            targetX: "targetX",
            targetY: "targetY",
            textAnchor: "text-anchor",
            textDecoration: "text-decoration",
            textRendering: "text-rendering",
            textLength: "textLength",
            to: 0,
            transform: 0,
            u1: 0,
            u2: 0,
            underlinePosition: "underline-position",
            underlineThickness: "underline-thickness",
            unicode: 0,
            unicodeBidi: "unicode-bidi",
            unicodeRange: "unicode-range",
            unitsPerEm: "units-per-em",
            vAlphabetic: "v-alphabetic",
            vHanging: "v-hanging",
            vIdeographic: "v-ideographic",
            vMathematical: "v-mathematical",
            values: 0,
            vectorEffect: "vector-effect",
            version: 0,
            vertAdvY: "vert-adv-y",
            vertOriginX: "vert-origin-x",
            vertOriginY: "vert-origin-y",
            viewBox: "viewBox",
            viewTarget: "viewTarget",
            visibility: 0,
            widths: 0,
            wordSpacing: "word-spacing",
            writingMode: "writing-mode",
            x: 0,
            xHeight: "x-height",
            x1: 0,
            x2: 0,
            xChannelSelector: "xChannelSelector",
            xlinkActuate: "xlink:actuate",
            xlinkArcrole: "xlink:arcrole",
            xlinkHref: "xlink:href",
            xlinkRole: "xlink:role",
            xlinkShow: "xlink:show",
            xlinkTitle: "xlink:title",
            xlinkType: "xlink:type",
            xmlBase: "xml:base",
            xmlId: "xml:id",
            xmlns: 0,
            xmlnsXlink: "xmlns:xlink",
            xmlLang: "xml:lang",
            xmlSpace: "xml:space",
            y: 0,
            y1: 0,
            y2: 0,
            yChannelSelector: "yChannelSelector",
            z: 0,
            zoomAndPan: "zoomAndPan"
        }
          , C = {
            Properties: {},
            DOMAttributeNamespaces: {
                evEvent: _.ev,
                xlinkActuate: _.xlink,
                xlinkArcrole: _.xlink,
                xlinkHref: _.xlink,
                xlinkRole: _.xlink,
                xlinkShow: _.xlink,
                xlinkTitle: _.xlink,
                xlinkType: _.xlink,
                xmlBase: _.xml,
                xmlId: _.xml,
                xmlLang: _.xml,
                xmlSpace: _.xml
            },
            DOMAttributeNames: {}
        };
        Object.keys(x).forEach(function(e) {
            C.Properties[e] = 0,
            x[e] && (C.DOMAttributeNames[e] = x[e])
        });
        var E = function(e, t) {
            this.type = "Widget",
            this.tagName = e,
            this.name = e.name || e.toString().match(/^function\s*([^\s(]+)/)[1],
            e.displayName = this.name,
            this._owner = t.owner,
            delete t.owner,
            this.key = t.key,
            this.props = t
        };
        E.prototype.init = function() {
            return mountComponent(this)
        }
        ,
        E.prototype.update = function(e, t, n) {
            return reRenderComponent(e, this, n)
        }
        ,
        E.prototype.destroy = function(e) {
            unmountComponent(this)
        }
        ;
        var T = function(e, t) {
            this.type = "Widget",
            this.tagName = e,
            this._owner = t.owner,
            delete t.owner,
            this.props = t
        };
        T.prototype.init = function() {
            return mountStatelessComponent(this)
        }
        ,
        T.prototype.update = function(e, t, n) {
            var r = e.props
              , o = t.props;
            return e.tagName === t.tagName && shallowEqual(r, o) ? n : reRenderStatelessComponent(e, this, n)
        }
        ,
        T.prototype.destroy = function(e) {
            unmountStatelessComponent(this, e)
        }
        ;
        var P = function(e) {
            this.type = "HtmlHook",
            this.value = e
        };
        P.prototype.hook = function(e, t, n) {
            n && "HtmlHook" === n.type && n.value.__html === this.value.__html || (e.innerHTML = this.value.__html || "")
        }
        ;
        var O = function() {
            this.cache = [],
            this.size = 0
        };
        O.prototype.set = function(e, t) {
            var n = this
              , r = this.cache.length;
            if (!r)
                return this.cache.push({
                    k: e,
                    v: t
                }),
                void (this.size += 1);
            for (var o = 0; o < r; o++) {
                var i = n.cache[o];
                if (i.k === e)
                    return void (i.v = t)
            }
            this.cache.push({
                k: e,
                v: t
            }),
            this.size += 1
        }
        ,
        O.prototype.get = function(e) {
            var t = this
              , n = this.cache.length;
            if (n)
                for (var r = 0; r < n; r++) {
                    var o = t.cache[r];
                    if (o.k === e)
                        return o.v
                }
        }
        ,
        O.prototype.has = function(e) {
            var t = this
              , n = this.cache.length;
            if (!n)
                return !1;
            for (var r = 0; r < n; r++) {
                if (t.cache[r].k === e)
                    return !0
            }
            return !1
        }
        ,
        O.prototype["delete"] = function(e) {
            for (var t = this, n = this.cache.length, r = 0; r < n; r++) {
                if (t.cache[r].k === e)
                    return t.cache.splice(r, 1),
                    t.size -= 1,
                    !0
            }
            return !1
        }
        ,
        O.prototype.clear = function() {
            var e = this
              , t = this.cache.length;
            if (this.size = 0,
            t)
                for (; t; )
                    e.cache.pop(),
                    t--
        }
        ;
        var S = "oninput"
          , N = "onpropertychange"
          , j = function() {
            return "Map"in window && isNative(Map)
        }()
          , A = j ? Map : O
          , R = new A
          , V = document
          , F = {
            onmousemove: 1,
            ontouchmove: 1,
            onmouseleave: 1,
            onmouseenter: 1,
            onload: 1,
            onunload: 1,
            onscroll: 1,
            onfocus: 1,
            onblur: 1,
            onrowexit: 1,
            onbeforeunload: 1,
            onstop: 1,
            ondragdrop: 1,
            ondragenter: 1,
            ondragexit: 1,
            ondraggesture: 1,
            ondragover: 1,
            oncontextmenu: 1,
            onerror: 1,
            onabort: 1,
            oncanplay: 1,
            oncanplaythrough: 1,
            ondurationchange: 1,
            onemptied: 1,
            onended: 1,
            onloadeddata: 1,
            onloadedmetadata: 1,
            onloadstart: 1,
            onencrypted: 1,
            onpause: 1,
            onplay: 1,
            onplaying: 1,
            onprogress: 1,
            onratechange: 1,
            onseeking: 1,
            onseeked: 1,
            onstalled: 1,
            onsuspend: 1,
            ontimeupdate: 1,
            onvolumechange: 1,
            onwaiting: 1
        };
        F[N] = 1;
        var M = !1;
        navigator.userAgent.indexOf("MSIE 9") >= 0 && V.addEventListener("selectionchange", function() {
            var e = V.activeElement;
            if (detectCanUseOnInputNode(e)) {
                var t = V.createEvent("CustomEvent");
                t.initCustomEvent("input", !0, !0, {}),
                e.dispatchEvent(t)
            }
        });
        var D = function(e, t) {
            this.type = "EventHook",
            this.eventName = getEventName(e),
            this.handler = t
        };
        D.prototype.hook = function(e, t, n) {
            if (!n || "EventHook" !== n.type || n.handler !== this.handler || n.eventName !== this.eventName) {
                var r = fixEvent(e, this.eventName);
                if (this.eventName = r,
                r === N)
                    return void processOnPropertyChangeEvent(e, this.handler);
                var o = R.get(r);
                if (1 === F[r]) {
                    o || (o = new A);
                    var i = attachEventToNode(e, r, o);
                    R.set(r, o),
                    isFunction(this.handler) && o.set(e, {
                        eventHandler: this.handler,
                        event: i
                    })
                } else
                    o || (o = {
                        items: new A
                    },
                    o.event = attachEventToDocument(V, r, o),
                    R.set(r, o)),
                    isFunction(this.handler) && o.items.set(e, this.handler)
            }
        }
        ,
        D.prototype.unhook = function(e, t, n) {
            if (!n || "EventHook" !== n.type || n.handler !== this.handler || n.eventName !== n.eventName) {
                var r = fixEvent(e, this.eventName);
                if (r !== N) {
                    var o = R.get(r);
                    if (1 === F[r] && o) {
                        var i = o.get(e);
                        e.removeEventListener(parseEventName(r), i.event, !1);
                        var a = o.size;
                        o["delete"](e) && 0 === a && R["delete"](r)
                    } else if (o && o.items) {
                        var s = o.items;
                        s["delete"](e) && 0 === s.size && (V.removeEventListener(parseEventName(r), o.event, !1),
                        R["delete"](r))
                    }
                }
            }
        }
        ;
        var U, W, $, I, H = function(e, t) {
            this.type = "AttributeHook",
            this.namespace = e,
            this.value = t
        };
        H.prototype.hook = function(e, t, n) {
            n && "AttributeHook" === n.type && n.value === this.value && n.namespace === this.namespace || e.setAttributeNS(this.namespace, t, this.value)
        }
        ,
        H.prototype.unhook = function(e, t, n) {
            if (!n || "AttributeHook" !== n.type || n.namespace !== this.namespace) {
                var r = t.indexOf(":")
                  , o = r > -1 ? t.substr(r + 1) : t;
                e.removeAttributeNS(this.namespace, o)
            }
        }
        ;
        var L = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i
          , z = []
          , q = r()
          , B = {
            Component: b,
            PureComponent: k,
            createElement: createElement$2,
            cloneElement: cloneElement,
            render: render,
            nextTick: nextTick,
            options: c,
            findDOMNode: findDOMNode
        };
        e.Component = b,
        e.PureComponent = k,
        e.createElement = createElement$2,
        e.cloneElement = cloneElement,
        e.render = render,
        e.nextTick = nextTick,
        e.options = c,
        e.unmountComponentAtNode = unmountComponentAtNode,
        e["default"] = B
    })
}
]);
!function(e) {
    function __webpack_require__(t) {
        if (n[t])
            return n[t].exports;
        var i = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(i.exports, i, i.exports, __webpack_require__),
        i.l = !0,
        i.exports
    }
    var t = window["webpackJsonp"];
    window["webpackJsonp"] = function(n, o, a) {
        for (var r, s, c = 0, l = []; c < n.length; c++)
            s = n[c],
            i[s] && l.push(i[s][0]),
            i[s] = 0;
        for (r in o)
            Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
        for (t && t(n, o, a); l.length; )
            l.shift()()
    }
    ;
    var n = {}
      , i = {
        15: 0
    };
    __webpack_require__.e = function(e) {
        function onScriptComplete() {
            a.onerror = a.onload = null,
            clearTimeout(r);
            var t = i[e];
            0 !== t && (t && t[1](new Error("Loading chunk " + e + " failed.")),
            i[e] = undefined)
        }
        var t = i[e];
        if (0 === t)
            return new Promise(function(e) {
                e()
            }
            );
        if (t)
            return t[2];
        var n = new Promise(function(n, o) {
            t = i[e] = [n, o]
        }
        );
        t[2] = n;
        var o = document.getElementsByTagName("head")[0]
          , a = document.createElement("script");
        a.type = "text/javascript",
        a.charset = "utf-8",
        a.async = !0,
        a.timeout = 12e4,
        __webpack_require__.nc && a.setAttribute("nonce", __webpack_require__.nc),
        a.src = __webpack_require__.p + "chunk/" + ({
            0: "chn",
            1: "corechn1",
            2: "corechn2",
            3: "special",
            4: "live",
            5: "more",
            6: "company",
            7: "seckill",
            8: "enjoy",
            9: "footer",
            10: "newpeople",
            11: "floorhd",
            12: "toolbar",
            13: "sidePopMenu",
            14: "head_mobile"
        }[e] || e) + ".chunk.js";
        var r = setTimeout(onScriptComplete, 12e4);
        return a.onerror = a.onload = onScriptComplete,
        o.appendChild(a),
        n
    }
    ,
    __webpack_require__.m = e,
    __webpack_require__.c = n,
    __webpack_require__.d = function(e, t, n) {
        __webpack_require__.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }
    ,
    __webpack_require__.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        }
        : function() {
            return e
        }
        ;
        return __webpack_require__.d(t, "a", t),
        t
    }
    ,
    __webpack_require__.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    __webpack_require__.p = "//misc.360buyimg.com/mtd/pc/index_2017/1.0.2/",
    __webpack_require__.oe = function(e) {
        throw console.error(e),
        e
    }
    ,
    __webpack_require__(__webpack_require__.s = 18)
}([function(e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.getHash = t.getJda = t.getUuid = t.getPin = t.webpSupported = t.padding = t.getDomInfo = t.splitArr = t.throttle = t.getDomain = t.getPlusPromo = t.getNewuserinfo = t.afterLoad = t.getCompanyinfo = t.getUserinfo = t.getLoginstatus = t.getBiAttr = t.getRandomData = t.loadAsync = t.createCookie = t.readCookie = t.dconsole = t.mergeClassName = t.isWide = t.isdebug = t.processImage = t.replaceMImageUrl = t.getImageDomain = t.setImageQuality = t.clipImage = t.resizeImage = undefined;
    var i = function() {
        function sliceIterator(e, t) {
            var n = []
              , i = !0
              , o = !1
              , a = undefined;
            try {
                for (var r, s = e[Symbol.iterator](); !(i = (r = s.next()).done) && (n.push(r.value),
                !t || n.length !== t); i = !0)
                    ;
            } catch (c) {
                o = !0,
                a = c
            } finally {
                try {
                    !i && s["return"] && s["return"]()
                } finally {
                    if (o)
                        throw a
                }
            }
            return n
        }
        return function(e, t) {
            if (Array.isArray(e))
                return e;
            if (Symbol.iterator in Object(e))
                return sliceIterator(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }()
      , o = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
        }
        return e
    }
    ;
    n(8);
    var a = n(29)
      , r = function(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }(a)
      , s = n(1);
    pageConfig.sendClog = function(e) {
        if (e.length) {
            var t = []
              , n = {}
              , i = pageConfig.clog;
            e.each(function(e) {
                var i = $(this).attr("fclog");
                n[i] || (n[i] = !0,
                t.push(i))
            }),
            i && i.logDomain && t.length > 0 && ((new Image).src = i.logDomain + t.join("||") + "&v=" + i.logV)
        }
    }
    ;
    var c = function() {}
      , l = function(e) {
        return String(e)in pageConfig.isdebug
    }
      , d = function(e) {
        for (var t = e + "=", n = document.cookie.split(";"), i = 0; i < n.length; i++) {
            for (var o = n[i]; " " === o.charAt(0); )
                o = o.substring(1, o.length);
            if (0 === o.indexOf(t))
                return o.substring(t.length, o.length)
        }
        return null
    }
      , u = function(e, t, n, i) {
        var o = i || "/"
          , a = void 0
          , r = void 0;
        n ? (a = new Date,
        a.setTime(a.getTime() + 24 * n * 60 * 60 * 1e3),
        r = "; expires=" + a.toGMTString()) : r = "",
        document.cookie = e + "=" + t + r + "; path=" + o
    }
      , f = !!function() {
        if (window.devicePixelRatio > 1 || window.matchMedia && window.matchMedia("(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-device-pixel-ratio: 1.5), (min-resolution: 144dpi), (min-resolution: 1.5dppx)").matches)
            return !0
    }()
      , p = [10, 11, 12, 13, 14, 20, 30]
      , h = function(e, t, n) {
        return !e || /\.gif/.test(e) ? e : e.replace(/^https?:/, "").replace(/(360buyimg\.com\/[^\/]+)\/([^\/]+)/, function(e, i, o) {
            var a = o.replace(/s\d+x\d+_([\s\S]+)/, function(e, t) {
                return t
            });
            return i + "/s" + (f ? t : n) + "_" + a
        })
    }
      , m = function(e, t) {
        if (!e || /\.gif/.test(e))
            return e;
        var n = "";
        return e.replace(/!cc_\d+x\d+/, "").replace(/(!q\d{0,2}.(jpg|jpeg|png|bmp|webp))/, function(e, t) {
            return n = t,
            ""
        }) + "!cc_" + t + n
    }
      , g = function(e, t) {
        if (!e || /\.gif/.test(e))
            return e;
        var n = String(Math.max(+t, 0) % 100 + 100).substr(1)
          , i = "";
        return e.replace(/!q[^!]+/, "").replace(/!c[cr][^!]+/, function(e) {
            return i = e,
            ""
        }) + "!q" + n + i
    }
      , v = !1;
    l(11) ? t.webpSupported = v = !0 : l(12) ? t.webpSupported = v = !1 : pageConfig.disableWebp ? t.webpSupported = v = !1 : function() {
        var e = window.o2Control;
        if (e.get("webp") !== undefined)
            return void (t.webpSupported = v = e.get("webp"));
        var n = new Image;
        n.onload = function() {
            t.webpSupported = v = n.width > 0 && n.height > 0,
            e.set("webp", v)
        }
        ,
        n.onerror = function() {
            t.webpSupported = v = !1,
            e.set("webp", !1)
        }
        ,
        n.src = "data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA"
    }();
    var y = function(e) {
        var t = String(e).match(/(\d)/);
        return t = t && t[1] ? t[1] : String(10 * Math.random()).substring(0, 1),
        "//img" + p[t % 7] + ".360buyimg.com/"
    }
      , b = function() {
        var e = location.hostname
          , t = "jd.com";
        return /\byiyaojd.com\b/.test(e) ? t = "yiyaojd.com" : /jd.com/.test(e) ? t = "jd.com" : /jd360.hk/.test(e) ? t = "jd360.hk" : /jd.hk/.test(e) ? t = "jd.hk" : /360buy.com/.test(e) && (t = "360buy.com"),
        t
    };
    pageConfig.FN_getDomain = b;
    var w = function(e, t) {
        return e ? e.replace(/^http(s?):/, "").replace(/\/\/m.360buyimg.com\//, function() {
            return y(t)
        }) : ""
    }
      , k = function(e) {
        return !e || /\.gif/.test(e) ? e : e.replace(/^([\s\S]*)(\.jpg|\.jpeg|\.png|\.bmp|\.webp)([\s\S]*)$/, function(e, t, n, i) {
            return "" + t + n + i + ".webp"
        })
    }
      , C = function(e, t) {
        var n = o({
            clip: !1,
            resize: !1,
            quality: 90,
            replacem: !0,
            webp: !1
        }, t);
        if (n.resize) {
            var a = i(n.resize, 2)
              , r = a[0]
              , s = a[1];
            e = pageConfig.enableRetina ? h(e, r, s) : h(e, s, s)
        }
        return n.clip && (e = m(e, n.clip)),
        n.quality && (e = g(e, n.quality)),
        n.replacem && (e = w(e, n.replacem)),
        !0 === v && n.webp && (e = k(e)),
        e
    }
      , S = function() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
        return t.filter(function(e) {
            return !!e
        }).join(" ")
    }
      , x = function() {
        if (l(1))
            return window.console;
        var e = ["debug", "error", "info", "log", "warn", "dir", "dirxml", "table", "trace", "group", "groupCollapsed", "groupEnd", "clear", "count", "assert", "markTimeline", "profile", "profileEnd", "timeline", "timelineEnd", "time", "timeEnd", "timeStamp", "memory"]
          , t = {};
        return e.forEach(function(e) {
            t[e] = c
        }),
        t
    }()
      , j = function(e) {
        if (!Array.isArray(e))
            return e;
        for (var t = 0, n = 0, i = void 0, o = [], a = 0; a < e.length; a++)
            i = e[a].weight ? parseInt(e[a].weight) : 1,
            o[a] = [],
            o[a].push(t),
            t += i,
            o[a].push(t);
        n = Math.ceil(t * Math.random());
        for (var r = 0; r < o.length; r++)
            if (n > o[r][0] && n <= o[r][1])
                return e[r]
    }
      , I = ""
      , T = "-1"
      , P = ""
      , A = function(e) {
        return e && I || (I = d("pin") || I),
        I
    }
      , E = function(e) {
        if (!e || !I) {
            var t = d("__jda") || "";
            T = t.split(".")[1] || T
        }
        return T
    }
      , L = function(e) {
        return e && P || (P = d("__jda") || P),
        P
    }
      , O = function(e, t) {
        return Math.abs(function(t) {
            for (var n = 0, i = 0; i < e.length; i++)
                n = (n << 5) - n + e.charCodeAt(i),
                n &= n;
            return n
        }()) % t
    }
      , U = function(e) {
        var t = o({
            jsonp: "callback",
            retryTimes: 3,
            timeout: pageConfig.reqTimeout || 5e3
        }, e);
        t.name && (window[t.name] = c),
        l(6) && (t.url = "//loadAsyncError.jd.com",
        t.timeout = 1500),
        l(7) && (t.url = "//loadAsyncError.jd.com",
        t.retryTimes = 0,
        t.timeout = 1500,
        t.backup = null),
        l(8) && (t.url = "//loadAsyncError.jd.com",
        t.timeout = 999999999);
        var n = (0,
        r["default"])(t);
        return l(9) && (n.then(function(n) {
            x.groupCollapsed("%c请求成功: " + e.url, "color: #B1B479"),
            x.log("请求参数:", t),
            x.log("返回结果:", n),
            x.groupEnd()
        }),
        n["catch"](function(n) {
            x.groupCollapsed("%c请求失败: " + e.url, "color: #D05A6E"),
            x.log("请求参数:", t),
            x.log("错误对象:", n),
            x.groupEnd()
        })),
        n
    }
      , R = c
      , N = {}
      , D = function(e) {
        return N.loginstatus || (N.loginstatus = new Promise(function(e, t) {
            U({
                url: s.APIS.ISLOGIN,
                timeout: 1e3,
                jsonpCallback: "jsonpLogin",
                dataCheck: function() {
                    function dataCheck(e) {
                        return !!(e && e.Identity && e.Identity.IsAuthenticated)
                    }
                    return dataCheck
                }()
            }).then(function(t) {
                e({
                    isLogin: !0,
                    nick: t.Identity.Unick,
                    name: t.Identity.Name
                })
            }, function() {
                e({
                    isLogin: !1
                })
            })
        }
        )),
        N.loginstatus
    }
      , M = function(e) {
        return N.userinfo || (N.userinfo = new Promise(function(e, t) {
            D().then(function(t) {
                t.isLogin ? U({
                    url: s.APIS.USERINFO,
                    timeout: 1e3,
                    jsonpCallback: "jsonpUserinfo"
                }).then(function(t) {
                    t.isCompany = 7 === t.userLevel,
                    e(t)
                }, function() {
                    e({})
                }) : e({})
            })
        }
        )),
        N.userinfo
    }
      , B = function(e) {
        return N.userlevel || (N.userlevel = new Promise(function(e, t) {
            M().then(function(t) {
                e(7 === t.userLevel ? {
                    isCompany: !0
                } : {
                    isCompany: !1
                })
            })
        }
        )),
        N.userlevel
    }
      , z = function() {
        return N.afterload || (N.afterload = new Promise(function(e, t) {
            var n = function onload() {
                window.removeEventListener("load", onload),
                e()
            };
            "complete" === document.readyState ? n() : window.addEventListener("load", n)
        }
        )),
        N.afterload
    }
      , J = function() {
        return N.newuserinfo || (N.newuserinfo = new Promise(function(e, t) {
            U({
                url: s.APIS.USER_ISNEW,
                name: "jsonpNewuserinfo",
                dataCheck: function() {
                    function dataCheck(e) {
                        if (!e || "10000" !== e.STATE)
                            return !1
                    }
                    return dataCheck
                }()
            }).then(function(t) {
                pageConfig.isNewUser = t.isNew,
                e({
                    isNew: t.isNew
                })
            }, function() {
                pageConfig.isNewUser = !1,
                e({
                    isNew: !1
                })
            })
        }
        )),
        N.newuserinfo
    }
      , q = function() {
        return ["//jd.com", "test"]
    }
      , F = function(e, t, n) {
        var i = void 0
          , o = void 0
          , a = void 0
          , r = null
          , s = 0;
        n || (n = {});
        var c = function() {
            s = !1 === n.leading ? 0 : (new Date).getTime(),
            r = null,
            a = e.apply(i, o),
            r || (i = o = null)
        };
        return function() {
            var l = (new Date).getTime();
            s || !1 !== n.leading || (s = l);
            var d = t - (l - s);
            return i = this,
            o = arguments,
            d <= 0 || d > t ? (clearTimeout(r),
            r = null,
            s = l,
            a = e.apply(i, o),
            r || (i = o = null)) : r || !1 === n.trailing || (r = setTimeout(c, d)),
            a
        }
    }
      , H = function(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0
          , n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "0"
          , i = String(e)
          , o = t - i.length;
        return "" + (o > 0 ? Array(1 + o).join(n) : "") + i
    }
      , W = function(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1
          , n = !(arguments.length > 2 && arguments[2] !== undefined) || arguments[2]
          , i = Array.prototype.slice.call(e)
          , o = [];
        if (n) {
            var a = void 0;
            for (e.length % t != 0 && (a = e.slice(-1 * t)); i.length >= t; )
                o.push(i.splice(0, t));
            a && o.push(a)
        } else
            for (; i.length > 0; )
                o.push(i.splice(0, t));
        return o
    }
      , K = function(e) {
        var t = $(e)
          , n = t.offset();
        return {
            left: n.left,
            top: n.top,
            width: t.width(),
            height: t.height()
        }
    }
      , G = void 0;
    window.addEventListener("resize", function() {
        var e = null
          , n = null
          , i = null
          , o = $("html")
          , a = function onResize() {
            var a = window.innerWidth
              , r = window.innerHeight;
            l(2) ? t.isWide = G = !1 : l(3) ? t.isWide = G = !0 : t.isWide = G = a >= 1190,
            pageConfig.wideVersion !== G && (pageConfig.wideVersion = G,
            G ? (o.removeClass("o2_mini"),
            o.addClass("o2_wide"),
            o.addClass("root61")) : (o.removeClass("o2_wide"),
            o.removeClass("root61"),
            o.addClass("o2_mini")),
            _.eventCenter.trigger("isWideChange", {
                detail: {
                    isWide: G
                }
            })),
            _.eventCenter.trigger("home:resize"),
            e === a && n === r || (i && window.clearTimeout(i),
            i = window.setTimeout(onResize, 100)),
            e = a,
            n = r
        };
        return a(),
        a
    }()),
    t.resizeImage = h,
    t.clipImage = m,
    t.setImageQuality = g,
    t.getImageDomain = y,
    t.replaceMImageUrl = w,
    t.processImage = C,
    t.isdebug = l,
    t.isWide = G,
    t.mergeClassName = S,
    t.dconsole = x,
    t.readCookie = d,
    t.createCookie = u,
    t.loadAsync = U,
    t.getRandomData = j,
    t.getBiAttr = R,
    t.getLoginstatus = D,
    t.getUserinfo = M,
    t.getCompanyinfo = B,
    t.afterLoad = z,
    t.getNewuserinfo = J,
    t.getPlusPromo = q,
    t.getDomain = b,
    t.throttle = F,
    t.splitArr = W,
    t.getDomInfo = K,
    t.padding = H,
    t.webpSupported = v,
    t.getPin = A,
    t.getUuid = E,
    t.getJda = L,
    t.getHash = O
}
, function(e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.PLUSMAP = t.CONSTS = t.URLS = t.APIS = undefined;
    var i = n(4)
      , o = function(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }(i)
      , a = (n(0),
    {
        BLANK_IMG: "//misc.360buyimg.com/mtd/pc/common/img/blank.png",
        BLANK_AVATAR: "//misc.360buyimg.com/mtd/pc/common/img/no_login.jpg",
        SECKILL: "//miaosha.jd.com",
        SECKILL_BRAND: "//miaosha.jd.com/pinpailist.html",
        SECKILL_TYPE: "//miaosha.jd.com/brandlist.html",
        SECKILL_PREFIX: "//miaosha.jd.com/#",
        TOP_PREFIX: "//top.jd.com/",
        MIME_PREFIX: "//jdiscover.jd.com",
        SHOPPINGCART: "//cart.jd.com/",
        MASSHOP: "//huiguang.jd.com",
        HOME: "//home.jd.com",
        LOGIN: "//passport.jd.com",
        LOGOUT: "//passport.jd.com/uc/login?ltype=logout",
        REGIST: "//reg.jd.com",
        XINREN: "//xinren.jd.com/?channel=99",
        VIP: "//vip.jd.com",
        MIAOSHA: "//miaosha.jd.com",
        DAILY: "//ypzj.jd.com",
        GOODREC: "//fxhh.jd.com",
        GOODREC_PREFIX: "//fxhh.jd.com/#",
        SHOP_PREFIX: "http://mall.jd.com/index-",
        SHOP_SUFIX: ".html",
        TOP: "//top.jd.com",
        PLUS: "//plus.jd.com",
        PLUS_TOPBAR: "//plus.jd.com/index?flow_system=appicon&flow_entrance=appicon1&flow_channel=pc",
        PLUS_USERINFO_Y: "//plus.jd.com/index?flow_system=appicon&flow_entrance=appicon2&flow_channel=pc",
        PLUS_USERINFO_N: "//plus.jd.com/index?flow_system=appicon&flow_entrance=appicon3&flow_channel=pc",
        PLUSSALE: "//sale.jd.com/act/Xno3MQRklCIm.html",
        LIVE: "//jdlive.jd.com/home.html"
    })
      , r = {
        SECKILL: "//ai.jd.com/index_new.php?app=Seckill&action=pcIndexMiaoShaArea&isAdvance=0",
        SECKILL_BACKUP: "//www.3.cn/bup/index_new.php?app=Seckill&action=pcIndexMiaoShaArea",
        SECKILL_STOBACKUP: "//storage.jd.com/7ff749b346d2f947/90a25281b9.js",
        TOPCATE: "//ch.jd.com/homecate2?source=pc",
        TOPCATE_BACKUP: "//www.3.cn/bup/homecate2",
        TOPCATE_STOBACKUP: "//storage.jd.com/7ff749b346d2f947/9a50600072.js",
        TOPRANK: "//ch.jd.com/homepro?source=pc",
        TOPRANK_BACKUP: "//www.3.cn/bup/homepro",
        DAILY: "//f.3.cn/recommend/list/get",
        DAILY_BACKUP: "//www.3.cn/index/recommend_bak/list",
        DAILY_STOBACKUP: "//storage.jd.com/7ff749b346d2f947/621e5ff1e7.js",
        MIME: "//f.3.cn/recommend/info/get",
        MIME_BACKUP: "//www.3.cn/index/recommend_bak/info",
        MIME_STOBACKUP: "//storage.jd.com/7ff749b346d2f947/d5c5fac495.js",
        GOODREC: "//ai.jd.com/index_new.php?app=Discovergoods&action=getDiscZdmGoodsListForIndex&tag=0",
        GOODREC_BACKUP: "//www.3.cn/bup/index_new.php?app=Discovergoods&action=getDiscZdmGoodsListForIndex&tag=0",
        GOODREC_STOBACKUP: "//storage.jd.com/7ff749b346d2f947/a38657e597.js",
        MASSHOP: "//f.3.cn/index-floor?argv=stroll",
        MASSHOP_BACKUP: "//www.3.cn/index/bak/stroll",
        MASSHOP_STOBACKUP: "//storage.jd.com/7ff749b346d2f947/e17565c9a0.js",
        COUPON: "//f.3.cn/index-floor?argv=coupon",
        COUPON_BACKUP: "//www.3.cn/index/bak/coupon",
        COUPON_STOBACKUP: "//storage.jd.com/7ff749b346d2f947/89481b7ed6.js",
        ENJOY: "//f.3.cn/index-floor?argv=enjoy",
        ENJOY_BACKUP: "//www.3.cn/index/bak/enjoy",
        ENJOY_STOBACKUP: "//storage.jd.com/7ff749b346d2f947/42d3760bef.js",
        NEWPEOPLE: "//f.3.cn/index-floor?argv=npeople",
        NEWPEOPLE_BACKUP: "//www.3.cn/index/bak/npeople",
        NEWPEOPLE_STOBACKUP: "//storage.jd.com/7ff749b346d2f947/c2103cb719.js",
        COMPANY: "//f.3.cn/index-floor?argv=company",
        COMPANY_BACKUP: "//www.3.cn/index/bak/company",
        COMPANY_STOBACKUP: "//storage.jd.com/7ff749b346d2f947/040f301456.js",
        STAGEINFO: "//f.3.cn/index-floor?argv=info",
        STAGEINFO_BACKUP: "//www.3.cn/index/bak/info",
        STAGEINFO_STOBACKUP: "//storage.jd.com/7ff749b346d2f947/a5fb919e44.js",
        CHN: "//f.3.cn/index-floor",
        CHN_BAK: "//www.3.cn/index/bak",
        SPECIAL: "//f.3.cn/index-floor?argv=special",
        SPECIAL_BACKUP: "//www.3.cn/index/bak/special",
        SPECIAL_STOBACKUP: "//storage.jd.com/7ff749b346d2f947/c7a873e001.js",
        LIVE: "//f.3.cn/index-floor?argv=live",
        LIVE_BACKUP: "//www.3.cn/index/bak/live",
        LIVE_STOBACKUP: "//storage.jd.com/7ff749b346d2f947/1aaf0a677e.js",
        PRICE: "//p.3.cn/prices/mgets",
        CATEA: "//dc.3.cn/category/get",
        CATEA_STOBACKUP: "//storage.jd.com/7ff749b346d2f947/98f0d0ea3a.js",
        CATEB: "//ai.jd.com/index_new.php?app=ABdata&action=ABData&key=BtestData",
        CATEB_BACKUP: "//www.3.cn/bup/index_new.php?app=ABdata&action=ABData&key=BtestData",
        CATEB_STOBACKUP: "//storage.jd.com/7ff749b346d2f947/7cb47c9ae4.js",
        FOCUS: "//f.3.cn/recommend/focus/get",
        FOCUS_BACKUP: "//www.3.cn/index/recommend_bak/focus",
        FOCUS_STOBACKUP: "//storage.jd.com/7ff749b346d2f947/293c3a4359.js",
        REC: "//f.3.cn/recommend/today/get",
        REC_BACKUP: "//www.3.cn/index/recommend_bak/today",
        REC_STOBACKUP: "//storage.jd.com/7ff749b346d2f947/3741125c32.js",
        REC_ERRLOG: "//mercury.jd.com/log.gif?t=rec.619066&v=src=rec$errorcode=",
        ISLOGIN: "//passport.jd.com/loginservice.aspx?method=Login",
        USERINFO: "//passport.jd.com/user/petName/getUserInfoForMiniJd.action",
        USER_SPOINT: "//f.3.cn/bi/export/get",
        USER_NAME: "//passport.jd.com/new/helloService.ashx",
        USER_ISNEW: "//ai.jd.com/index_new.php?app=Newuser&action=isNewuser",
        USER_ISCOMPANY: "//corp.jd.com/publicSoa/userInfo/getUserLevel",
        HOTWORDS: "//ai.jd.com/index/hotWords.php",
        HOTWORDS_STOBACKUP: "//storage.jd.com/7ff749b346d2f947/2b340c1a7e.js",
        MYJD_GETHOMECOUNT: "//minijd.jd.com/getHomeCount",
        MYJD_GETMYJDANSWERCOUNT: "//question.jd.com/myjd/getMyJdAnswerCount.action",
        MYJD_REDUCEPRODUCTCOUNT: "//follow-soa.jd.com/rpc/product/queryForReduceProductCount.action?sysName=misc",
        MYJD_GETCOUPONCOUNT: "//quan.jd.com/getcouponcount.action",
        MYJD_MSGCENTER: "//joycenter.jd.com/msgCenter/init.action",
        MYJD_QUERYBT: "//btshow.jd.com/ious/queryBT.do?sourceType=137",
        MORE_GOODS: "//diviner.jd.com/diviner?p=610009&lid=1",
        MORE_GOODS_STOBACKUP: "//storage.jd.com/7ff749b346d2f947/7a55efa35e.js",
        MORE_PRESELL: "//ai.jd.com/index/preSale.php",
        MORE_PRESELLPRICE: "//yuding.jd.com/presaleInfo/getPresaleInfo.action",
        MORE_OTHERS: "//f.3.cn/index-floor?argv=feed",
        MORE_OTHERS_BACKUP: "//www.3.cn/index/bak/feed",
        MORE_OTHERS_STOBACKUP: "//storage.jd.com/7ff749b346d2f947/143d03c33e.js",
        MORE_FIND: "//diviner.jd.com/diviner?p=619028&&lid=1&ec=utf-8"
    }
      , s = {
        REQ_TIMES: 3e3,
        REQ_TIMEOUT: 3e3,
        CLSTAGPREFIX: pageConfig.clstagPrefix.replace(/\|$/, ""),
        LAZYIMGOPTS: {
            once: !0,
            offset: [300, 300],
            placeholder: o["default"].createElement("div", {
                className: "mod_loading"
            })
        }
    }
      , c = "您可享钻石特惠，开通PLUS>"
      , l = "您可享金牌特惠，开通PLUS>"
      , d = "您可享银牌特惠，开通PLUS>"
      , u = "试用PLUS会员领运费券>"
      , f = '试用PLUS会员享更多特权 <span class="style-red">购买</span>'
      , p = "购买PLUS会员尊享顶级特权>"
      , h = '续费PLUS会员尊享顶级特权 <span class="style-red">续费</span>'
      , m = [[u, f, p, "PLUS专享商品每周更新>", h], [u, f, p, "PLUS专享商品每周更新>", h], [d, d, d, "您可享银牌特惠，续费PLUS>", "您可享银牌特惠，续费PLUS>"], [l, l, l, "您可享金牌特惠，续费PLUS>", "您可享金牌特惠，续费PLUS>"], [c, c, c, "您可享钻石特惠，续费PLUS>", "您可享钻石特惠，续费PLUS>"], [u, f, p, "PLUS专享商品每周更新>", h], [u, f, p, "PLUS专享商品每周更新>", h]];
    t.APIS = r,
    t.URLS = a,
    t.CONSTS = s,
    t.PLUSMAP = m
}
, function(e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.initClicklogger = t.getjQLogParams = t.generateLogParams = t.logClick = t.logImpr = undefined;
    var i = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
        }
        return e
    }
      , o = n(0)
      , a = function(e) {
        var t = e || ""
          , n = t.match(/c-nfa\.jd\.com[\s\S]+url=([\s\S]+)$/);
        return n && n[1] ? n[1] : e
    }
      , r = function(e) {
        var t = e.rept
          , n = t === undefined ? "impr" : t
          , i = e.poi
          , r = i === undefined ? null : i
          , s = e.text
          , c = s === undefined ? null : s
          , l = e.url
          , d = l === undefined ? null : l
          , u = e.desc
          , f = u === undefined ? null : u
          , p = e.mcinfo
          , h = p === undefined ? null : p
          , m = e.biclk
          , g = m === undefined ? null : m
          , v = e.comment
          , _ = v === undefined ? "" : v
          , y = c || "";
        y = String(y).replace(/ +/g, " ").replace(/[\r\n]/g, ""),
        y = 0 === y.length ? null : y;
        var b = f || "";
        b = String(b).replace(/ +/g, " ").replace(/[\r\n]/g, ""),
        b = 0 === b.length ? null : b;
        var w = a(d);
        if ((0,
        o.isdebug)(13)) {
            o.dconsole.groupCollapsed("%c" + _ + "曝光: " + r, "color: rgb(255, 208, 64)"),
            o.dconsole.log({
                rept: n,
                poi: r,
                text: y,
                url: w,
                desc: b,
                mcinfo: h,
                biclk: g
            }),
            o.dconsole.groupEnd()
        }
        (0,
        o.isdebug)(5) || window.expLogJSON && window.expLogJSON("pc_homepage", "basic", JSON.stringify({
            rept: n,
            poi: r,
            text: y,
            url: w,
            desc: b,
            mcinfo: h,
            biclk: g
        }))
    }
      , s = function(e) {
        var t = e.rept
          , n = t === undefined ? "clk" : t
          , i = e.poi
          , r = i === undefined ? null : i
          , s = e.text
          , c = s === undefined ? null : s
          , l = e.url
          , d = l === undefined ? null : l
          , u = e.desc
          , f = u === undefined ? null : u
          , p = e.mcinfo
          , h = p === undefined ? null : p
          , m = e.biclk
          , g = m === undefined ? null : m
          , v = e.comment
          , _ = v === undefined ? "" : v
          , y = c || "";
        y = String(y).replace(/ +/g, " ").replace(/[\r\n]/g, ""),
        y = 0 === y.length ? null : y;
        var b = f || "";
        b = String(b).replace(/ +/g, " ").replace(/[\r\n]/g, ""),
        b = 0 === b.length ? null : b;
        var w = a(d);
        if ((0,
        o.isdebug)(13)) {
            o.dconsole.groupCollapsed("%c" + _ + "点击: " + r, "color: #2EA9DF"),
            o.dconsole.log({
                rept: n,
                poi: r,
                text: y,
                url: w,
                desc: b,
                mcinfo: h,
                biclk: g
            }),
            o.dconsole.groupEnd()
        }
        (0,
        o.isdebug)(5) || window.log && window.log("pc_homepage", "basic", n, r, y, w, b, h, g)
    }
      , c = ["text", "url", "desc", "mcinfo", "biclk"]
      , l = function(e) {
        var t = e || {}
          , n = t.ext_columns || t
          , i = {};
        c.forEach(function(e) {
            e in n && (i[e] = n[e])
        });
        var o = JSON.stringify(i);
        return ' data-log="' + encodeURIComponent(o) + '" '
    }
      , d = function(e) {
        var t = void 0
          , n = void 0;
        e.target && e.currentTarget ? (t = $(e.target),
        n = $(e.currentTarget)) : (t = $(e),
        n = t);
        var i = t.text() || null
          , o = t.closest("a").eq(0).attr("href") || null;
        o = /javascript/.test(o) ? null : o;
        var a = n.attr("clstag") || ""
          , r = a.match(/h\|keycount\|([\s\S]+)$/)
          , s = r ? r[1] : null
          , l = {
            text: i,
            url: o,
            poi: s
        }
          , d = t.closest("[data-log]").eq(0).attr("data-log") || "{}"
          , u = JSON.parse(decodeURIComponent(d));
        return c.forEach(function(e) {
            u[e] && (l[e] = u[e])
        }),
        l
    }
      , u = function() {
        $("#logo").delegate("[clstag]", "click", function(e) {
            var t = d(e)
              , n = t.url
              , i = t.poi;
            n && i && s({
                poi: i,
                url: n,
                comment: "京东Logo"
            })
        }),
        $("#shortcut").delegate("[clstag]", "click", function(e) {
            var t = d(e)
              , n = t.text
              , i = t.url
              , o = t.poi;
            n && i && o ? (n = n.replace(/<[\s\S]*>/, ""),
            s({
                poi: o,
                url: i,
                text: n,
                comment: "Topbar"
            })) : o && s({
                poi: o,
                comment: "Topbar"
            })
        }),
        $("#search").delegate("[clstag]", "click", function(e) {
            var t = d(e)
              , n = t.text
              , i = t.url
              , o = t.poi;
            n && i && o ? s({
                poi: o,
                url: i,
                text: n,
                comment: "搜索区 - 主体"
            }) : o && s({
                poi: o,
                comment: "搜索区 - 主体"
            })
        }),
        $("#hotwords").delegate("[clstag]", "click", function(e) {
            var t = d(e)
              , n = t.text
              , i = t.url
              , o = t.poi;
            n && i && o && s({
                poi: o,
                url: i,
                text: n,
                comment: "搜索区 - 热词"
            })
        }),
        $("#navitems").delegate("[clstag]", "click", function(e) {
            var t = d(e)
              , n = t.text
              , i = t.url
              , o = t.poi;
            n && i && o && s({
                poi: o,
                url: i,
                text: n,
                comment: "横导航"
            })
        }),
        $("#settleup").bind("click", function(e) {
            var t = d(e)
              , n = t.url
              , i = t.poi;
            n && i ? s({
                poi: i,
                url: n,
                comment: "购物车"
            }) : i && s({
                poi: i,
                comment: "购物车"
            })
        }),
        $("#treasure").bind("click", function(e) {
            var t = d(e)
              , n = t.url
              , i = t.poi;
            n && i && s({
                poi: i,
                url: n,
                comment: "直通车"
            })
        }),
        $("#J_event").delegate("[clstag]", "click", function(e) {
            var t = d(e)
              , n = t.url
              , i = t.poi;
            n && i && s({
                poi: i,
                url: n,
                comment: "顶通"
            })
        }),
        $("#J_cate").delegate("[clstag]", "click", function(e) {
            var t = d(e)
              , n = t.text
              , i = t.url
              , o = t.poi;
            o && s({
                poi: o,
                url: i,
                text: n,
                comment: "左侧分类"
            })
        }),
        $("#J_focus").delegate("[clstag]", "click", function(e) {
            var t = d(e);
            s(t.poi && t.url ? i({}, t, {
                comment: "首焦"
            }) : {
                poi: t.poi,
                comment: "首焦"
            })
        }),
        $("#J_rec").delegate("[clstag]", "click", function(e) {
            var t = d(e);
            t.url && t.poi && s(i({}, t, {
                comment: "今日推荐"
            }))
        }),
        $("#J_user").delegate("[clstag]", "click", function(e) {
            var t = d(e)
              , n = t.text
              , i = t.url
              , o = t.poi;
            i && o && s({
                poi: o,
                url: i,
                text: n,
                comment: "登录卡片"
            })
        }),
        $("#J_news").delegate("[clstag]", "click", function(e) {
            var t = d(e)
              , n = t.text
              , i = t.url
              , o = t.poi;
            n && o && s({
                poi: o,
                url: i,
                text: n,
                comment: "快报"
            })
        }),
        $("#J_service").delegate("[clstag]", "click", function(e) {
            var t = d(e)
              , n = t.text
              , i = t.url
              , o = t.poi;
            i && o && s({
                poi: o,
                url: i,
                text: n,
                comment: "生活服务"
            })
        })
    };
    t.logImpr = r,
    t.logClick = s,
    t.generateLogParams = l,
    t.getjQLogParams = d,
    t.initClicklogger = u
}
, function(e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.USER = undefined;
    var i = n(0)
      , o = (0,
    i.getUuid)()
      , a = {
        pin: decodeURIComponent((0,
        i.getPin)()),
        uuid: o,
        jda: (0,
        i.getJda)(),
        unifiedHash: (0,
        i.getHash)(o, 1e4)
    };
    t.USER = a,
    t["default"] = a
}
, function(e, t, n) {
    e.exports = n(5)(7)
}
, function(e, t) {
    e.exports = base_library
}
, function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = {
        getDownloadSpeed: function() {
            function getDownloadSpeed() {
                try {
                    if ((window.performance || window.webkitPerformance || {}).timing) {
                        var e = $("html").html().length
                          , t = e / 1024
                          , n = performance.timing.responseEnd - performance.timing.requestStart;
                        return Math.round(.25 * t / (n / 1e3))
                    }
                } catch (i) {}
                return 0
            }
            return getDownloadSpeed
        }(),
        getRank: function() {
            function getRank() {
                var e = this.getDownloadSpeed();
                return e < 25 ? 31 : e < 50 ? 32 : e < 75 ? 33 : e < 100 ? 34 : e < 150 ? 35 : e < 200 ? 36 : e < 250 ? 37 : e < 300 ? 38 : e < 350 ? 39 : e < 400 ? 40 : e < 450 ? 41 : e < 500 ? 42 : e < 1e3 ? 43 : 44
            }
            return getRank
        }(),
        getSpeedInfo: function() {
            function getSpeedInfo() {
                var e = Math.floor(100 * Math.random())
                  , t = this.getDownloadSpeed()
                  , n = window.pageConfig || {}
                  , i = n && n.O2_REPORT;
                return void 0 !== i && "number" == typeof i || (i = 100),
                i > 0 && e >= 0 && e <= i && t > 0 ? "s" + this.getRank() + "=" + t + "&s50=" + t : ""
            }
            return getSpeedInfo
        }(),
        getScreenSection: function() {
            function getScreenSection() {
                var e = document.documentElement.clientWidth;
                return e >= 1190 ? 68 : e >= 990 ? 69 : 70
            }
            return getScreenSection
        }(),
        getScreenRatio: function() {
            function getScreenRatio() {
                var e = window.screen.width
                  , t = window.screen.height
                  , n = {
                    51: {
                        width: 800,
                        height: 600
                    },
                    52: {
                        width: 960,
                        height: 640
                    },
                    53: {
                        width: 1024,
                        height: 768
                    },
                    54: {
                        width: 1136,
                        height: 640
                    },
                    55: {
                        width: 1152,
                        height: 864
                    },
                    56: {
                        width: 1280,
                        height: 768
                    },
                    57: {
                        width: 1280,
                        height: 800
                    },
                    58: {
                        width: 1280,
                        height: 960
                    },
                    59: {
                        width: 1280,
                        height: 1024
                    },
                    60: {
                        width: 1366,
                        height: 768
                    },
                    61: {
                        width: 1440,
                        height: 900
                    },
                    62: {
                        width: 1600,
                        height: 1024
                    },
                    63: {
                        width: 1600,
                        height: 1200
                    },
                    64: {
                        width: 1920,
                        height: 1080
                    },
                    65: {
                        width: 1920,
                        height: 1200
                    },
                    66: {
                        width: 2560,
                        height: 1440
                    },
                    67: {
                        width: 2560,
                        height: 1600
                    }
                };
                for (var i in n)
                    if (e === n[i].width && t === n[i].height)
                        return i
            }
            return getScreenRatio
        }(),
        getBrowser: function() {
            function getBrowser() {
                var e, t = {}, n = navigator.userAgent.toLowerCase();
                return (e = n.match(/rv:([\d.]+)\) like gecko/)) ? t.ie = e[1] : (e = n.match(/msie ([\d.]+)/)) ? t.ie = e[1] : (e = n.match(/firefox\/([\d.]+)/)) ? t.firefox = e[1] : (e = n.match(/metasr/)) ? t.sougou = !0 : (e = n.match(/qqbrowser/)) ? t.qq = !0 : (e = n.match(/version\/([\d.]+).*safari/)) ? t.safari = e[1] : (e = n.match(/chrome\/([\d.]+)/)) ? t.chrome = e[1] : (e = n.match(/opera.([\d.]+)/)) ? t.opera = e[1] : (e = n.match(/ipad/)) && (t.ipad = !0),
                t.chrome ? 11 : t.firefox ? 12 : t.safari ? 13 : t.opera ? 14 : t.ie ? "6.0" === t.ie ? 15 : "7.0" === t.ie ? 16 : "8.0" === t.ie ? 17 : "9.0" === t.ie ? 18 : "10.0" === t.ie ? 19 : "11.0" === t.ie ? 20 : 21 : t.sougou ? 22 : t.qq ? 23 : t.ipad ? 24 : 25
            }
            return getBrowser
        }(),
        getBaseData: function() {
            function getBaseData() {
                var e = window["_REPORT_"]
                  , t = e && e["START"]
                  , n = [];
                if (e && t) {
                    var i = e["CSS"]
                      , o = e["FS"]
                      , a = e["JS"]
                      , r = e["DOM"];
                    i && n.push("s72=" + (i.getTime() - t.getTime())),
                    o && n.push("s73=" + (o.getTime() - t.getTime())),
                    a && n.push("s74=" + (a.getTime() - t.getTime())),
                    r && n.push("s75=" + (r.getTime() - t.getTime())),
                    n.push("s76=" + ((new Date).getTime() - t.getTime()))
                }
                return n.join("&")
            }
            return getBaseData
        }(),
        getRetina: function() {
            function getRetina() {
                return window.devicePixelRatio > 1 || window.matchMedia && window.matchMedia("(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-device-pixel-ratio: 1.5), (min-resolution: 144dpi), (min-resolution: 1.5dppx)").matches ? "s71=1" : ""
            }
            return getRetina
        }(),
        processRetina: function() {
            function processRetina() {
                var e = this.getRetina();
                e && this.processCore(e)
            }
            return processRetina
        }(),
        getSystem: function() {
            function getSystem() {
                var e = navigator.userAgent.toLowerCase();
                if (-1 !== e.indexOf("macintosh") || -1 !== e.indexOf("mac os x"))
                    return 6;
                if (-1 !== e.indexOf("linux"))
                    return 7;
                var t = {
                    "nt 5.1": 1,
                    "nt 5.2": 1,
                    "nt 6.0": 2,
                    "nt 6.1": 3,
                    "nt 6.2": 4,
                    "nt 6.3": 4,
                    "nt 6.4": 5,
                    "nt 10.0": 5
                };
                for (var n in t)
                    if (-1 !== e.indexOf(n))
                        return t[n];
                return 8
            }
            return getSystem
        }(),
        _getErrorInfo: function() {
            function _getErrorInfo(e) {
                var t = [];
                t.push("s" + this.getSystem() + "=1"),
                t.push("s" + this.getBrowser() + "=1"),
                t.push("s30=1");
                var n = this.getDownloadSpeed();
                return n > 0 && t.push("s" + this.getRank() + "=" + n),
                t.push("s" + (50 + e) + "=1"),
                t.join("&")
            }
            return _getErrorInfo
        }(),
        processBackup: function() {
            function processBackup(e) {
                this.pBackupId && this.processCore(this._getErrorInfo(e), this.pBackupId)
            }
            return processBackup
        }(),
        processHidedFloor: function() {
            function processHidedFloor(e) {
                this.pFloorId && this.processCore(this._getErrorInfo(e), this.pFloorId)
            }
            return processHidedFloor
        }(),
        processTempl: function() {
            function processTempl(e) {
                this.pTemplId && this.processCore(this._getErrorInfo(e), this.pTemplId)
            }
            return processTempl
        }(),
        processSpeed: function() {
            function processSpeed() {
                var e = this.getSpeedInfo();
                e && this.processCore(e)
            }
            return processSpeed
        }(),
        processJsError: function() {
            function processJsError() {
                var e = window
                  , t = window.pageConfig || {}
                  , n = Math.floor(100 * Math.random())
                  , i = t && t.O2_ERROR_REPORT;
                void 0 !== i && "number" == typeof i || (i = 100),
                i > 0 && n >= 0 && n <= i && $(e).bind("error.o2report", function(t, n, i, o, a) {
                    var r = "";
                    if (o = o || e.event && e.event.errorCharacter || 0,
                    a && a.stack)
                        t = a.stack.toString();
                    else if (arguments.callee) {
                        for (var s = [t], c = arguments.callee.caller, l = 3; c && --l > 0 && (s.push(c.toString()),
                        c !== c.caller); )
                            c = c.caller;
                        t = s.join(",")
                    }
                    if (r = JSON.stringify(t) + (n ? ";URL:" + n : "") + (i ? ";Line:" + i : "") + (o ? ";Column:" + o : ""),
                    e.lastErrMsg) {
                        if (e.lastErrMsg.indexOf(t) > -1)
                            return;
                        e.lastErrMsg += "|" + t
                    } else
                        e.lastErrMsg = t;
                    setTimeout(function() {
                        r = encodeURIComponent(r),
                        (new Image).src = "//wq.jd.com/webmonitor/collect/badjs.json?Content=" + r + "&t=" + Math.random()
                    }, 1e3)
                })
            }
            return processJsError
        }(),
        _firstReport: !1,
        processAllData: function() {
            function processAllData() {
                if (!this._firstReport) {
                    this._firstReport = !0;
                    var e = this.getSpeedInfo()
                      , t = this.getRetina();
                    if (t || e) {
                        var n = this.getBaseData()
                          , i = this.getBrowser()
                          , o = this.getScreenRatio()
                          , a = this.getSystem()
                          , r = [];
                        r.push("s" + a + "=1"),
                        r.push("s" + i + "=1"),
                        r.push("s30=1"),
                        e && r.push(e),
                        o && r.push("s" + o + "=1"),
                        r.push("s" + this.getScreenSection() + "=1"),
                        t && r.push(t),
                        n && r.push(n),
                        this.processCore(r.join("&"))
                    }
                }
            }
            return processAllData
        }(),
        image: null,
        processCore: function() {
            function processCore(e, t) {
                var n = t || this.pid;
                this.image = new Image,
                this.image.src = "//fd.3.cn/cesu/r?pid=" + n + "&" + e + "&_=" + (new Date).getTime()
            }
            return processCore
        }(),
        debug: function() {
            function debug(e) {
                "undefined" != typeof console.log && console.log(e)
            }
            return debug
        }(),
        pid: 0,
        pFloorId: 0,
        pBackupId: 0,
        pTemplId: 0,
        init: function() {
            function init(e, t, n, i) {
                var o = this;
                if (!e)
                    return void o.debug("pageId must be provided!");
                o.pid = e,
                o.pFloorId = n,
                o.pBackupId = t,
                o.pTemplId = i,
                $(window).bind("load.o2report", function() {
                    o.processAllData()
                }),
                o.processJsError()
            }
            return init
        }()
    };
    window.o2Report = n,
    t["default"] = n
}
, function(e, t) {
    !function(e) {
        e.ui.define("dropdown", {
            options: {
                hasCssLink: !1,
                baseVersion: "1.0.0",
                cssLinkVersion: "1.0.0",
                item: "ui-dropdown-item",
                trigger: !1,
                current: "ui-dropdown-hover",
                bodyClass: "ui-dropdown-bd",
                subBodyClass: "ui-dropdown-sub",
                topspeed: !1,
                boundary: 10,
                enterDelay: 0,
                leaveDelay: 0,
                zIndex: 1e3,
                align: "bottom",
                left: null,
                top: null,
                submenuLeft: 0,
                submenuTop: 0,
                onchange: null,
                onmouseleave: null
            },
            init: function() {
                function init() {
                    this.mouseLocs = [],
                    this.lastDelayLoc = null,
                    this._create(),
                    this.bind()
                }
                return init
            }(),
            _create: function() {
                function _create() {
                    var e = this.options;
                    e.trigger ? this.item = this.el : this.item = this.el.find("." + e.item),
                    this.body = this.el.find("." + e.bodyClass);
                    var t = e.top
                      , n = e.left;
                    "bottom" === e.align && null == e.top && (e.top = this.item.outerHeight()),
                    "right" === e.align && (e.top = 0,
                    null == e.left && (e.left = this.item.outerWidth())),
                    null == t && null == n || this.body.css({
                        position: "absolute",
                        top: e.top,
                        left: e.left,
                        zIndex: e.zIndex
                    }),
                    this.el.find("." + e.subBodyClass).css({
                        zIndex: e.zIndex + 1
                    }),
                    this.bodyOuterWidth = this.body.outerWidth(),
                    this.bodyBorderWidth = 2 * this.getStyle(this.body[0], "borderWidth")
                }
                return _create
            }(),
            bind: function() {
                function bind() {
                    var t, n, i = this, o = this.options, a = !1, r = null, s = null, c = !1;
                    this.el.bind("mouseenter", function() {
                        clearTimeout(t)
                    }),
                    this.el.bind("mouseleave", function() {
                        a && (t = setTimeout(function() {
                            i.removeClass()
                        }, o.leaveDelay)),
                        o.onmouseleave && o.onmouseleave(e(this)),
                        r = null
                    }),
                    this.item.bind("mouseenter", function() {
                        if (c)
                            return !1;
                        var t = e(this)
                          , l = function() {
                            function trigger() {
                                c = !0,
                                r = t.index(),
                                i.removeClass(),
                                t.addClass(o.current),
                                a = !0,
                                o.onchange && o.onchange(t)
                            }
                            return trigger
                        }();
                        n = setTimeout(function() {
                            0 === i.topspeed(t) && (l(),
                            clearTimeout(s))
                        }, o.enterDelay),
                        o.topspeed && (s = setTimeout(function() {
                            r !== t.index() && l()
                        }, 700))
                    }),
                    this.item.bind("mouseleave", function() {
                        clearTimeout(n),
                        clearTimeout(s),
                        c = !1
                    }),
                    this.el.find("." + o.subBodyClass).bind("mouseenter", function() {
                        var t = i.bodyOuterWidth - i.bodyBorderWidth + o.submenuLeft
                          , n = i.getStyle(e(this)[0], "paddingLeft");
                        t = e.browser.isIE6() ? t - n : t;
                        var a = 0 + o.submenuTop;
                        e(this).find("." + o.bodyClass).show().css({
                            left: t,
                            top: a
                        })
                    }).bind("mouseleave", function() {
                        e(this).find("." + o.bodyClass).hide()
                    }),
                    o.topspeed && e(document).mousemove(function(e) {
                        i.mouseLocs.push({
                            x: e.pageX,
                            y: e.pageY
                        }),
                        i.mouseLocs.length > 3 && i.mouseLocs.shift()
                    })
                }
                return bind
            }(),
            removeClass: function() {
                function removeClass() {
                    this.item.removeClass(this.options.current)
                }
                return removeClass
            }(),
            getStyle: function() {
                function getStyle(e, t) {
                    if (e) {
                        var n = window.getComputedStyle ? window.getComputedStyle(e, null)[t] : e.currentStyle[t];
                        return n = parseInt(n),
                        n || (n = 0),
                        n
                    }
                }
                return getStyle
            }(),
            topspeed: function() {
                function topspeed() {
                    function slope(e, t) {
                        return (t.y - e.y) / (t.x - e.x)
                    }
                    var e = this.options;
                    if (!e.topspeed)
                        return 0;
                    var t = this.el
                      , n = t.offset()
                      , i = {
                        x: n.left,
                        y: n.top
                    }
                      , o = {
                        x: n.left + t.outerWidth(),
                        y: i.y
                    }
                      , a = {
                        x: n.left,
                        y: n.top + t.outerHeight()
                    }
                      , r = {
                        x: n.left + t.outerWidth(),
                        y: a.y
                    }
                      , s = this.mouseLocs[this.mouseLocs.length - 1]
                      , c = this.mouseLocs[0];
                    if (!s)
                        return 0;
                    if (c || (c = s),
                    c.x < n.left || c.x > r.x || c.y < n.top || c.y > r.y)
                        return 0;
                    if (this.lastDelayLoc && s.x === this.lastDelayLoc.x && s.y === this.lastDelayLoc.y)
                        return 0;
                    var l = o
                      , d = r
                      , u = slope(s, l)
                      , f = slope(c, l)
                      , p = slope(s, d)
                      , h = slope(c, d);
                    return u < f && p > h ? c.x - i.x < e.boundary ? 0 : (this.lastDelayLoc = s,
                    300) : (this.lastDelayLoc = null,
                    0)
                }
                return topspeed
            }()
        })
    }(jQuery)
}
, function(e, t, n) {
    "use strict";
    e.exports = n(22).polyfill()
}
, function(e, t) {
    !function(e, t) {
        e.ui.define("dialog", {
            options: {
                hasCssLink: !0,
                baseVersion: "1.0.0",
                cssLinkVersion: "1.0.0",
                maskHas: !0,
                maskClass: "ui-mask",
                maskIframe: !1,
                maskClose: !1,
                opacity: .15,
                zIndex: 9998,
                type: "text",
                source: null,
                extendMainClass: null,
                autoIframe: !0,
                autoOpen: !0,
                autoCloseTime: 0,
                title: !0,
                hasButton: !1,
                submitButton: "确认",
                cancelButton: "取消",
                onSubmit: null,
                onCancel: null,
                onBeforeClose: null,
                closeButton: !0,
                onReady: null,
                width: 480,
                height: null,
                fixed: !1,
                autoUpdate: !1,
                maskId: null,
                mainId: null,
                contentId: null,
                titleId: null,
                iframeName: "dialogIframe",
                iframeTimestamp: !0
            },
            init: function() {
                function init() {
                    var t = this.options;
                    e.browser.isIE6() && (t.fixed = !1),
                    this.createMain(),
                    this.createMask(),
                    this.mainStyle(),
                    t.autoOpen ? this.open() : this.hide(),
                    this.bind()
                }
                return init
            }(),
            show: function() {
                function show() {
                    this.mask && this.mask.show(),
                    this.el.show()
                }
                return show
            }(),
            hide: function() {
                function hide() {
                    this.mask && this.mask.hide(),
                    this.el.hide()
                }
                return hide
            }(),
            tpl: {
                mask: '<div class="ui-mask"></div>',
                close: '<a class="ui-dialog-close" title="关闭"><span class="ui-icon ui-icon-delete"></span></a>',
                title: '<div class="ui-dialog-title">\t\t\t\t\t\t<span><%=title%></span>\t\t\t\t\t</div>\t\t\t\t',
                wrap: '<div class="ui-dialog"></div>',
                conten: '<div class="ui-dialog-content"></div>',
                button: '<div class="ui-dialog-btn">\t\t\t\t\t\t<%if($.trim(submit)){%><a class="ui-dialog-btn-submit"><%=submit%></a><%}%>\t\t\t\t\t\t<%if($.trim(cancel)){%><a class="ui-dialog-btn-cancel"><%=cancel%></a><%}%>\t\t\t\t\t</div>\t\t\t\t'
            },
            createMain: function() {
                function createMain() {
                    var t = this.options
                      , n = "";
                    t.title && (n = e.tpl(this.tpl.title, {
                        title: t.title
                    }));
                    var i = e.tpl(this.tpl.button, {
                        submit: this.options.submitButton,
                        cancel: this.options.cancelButton
                    })
                      , o = n + this.tpl.conten + (t.hasButton ? i : "");
                    this.el = e(this.tpl.wrap),
                    t.extendMainClass && this.el.addClass(t.extendMainClass),
                    e(o).appendTo(this.el),
                    this.el.appendTo("body"),
                    this.content = this.el.find(".ui-dialog-content"),
                    this.title = this.el.find(".ui-dialog-title"),
                    t.mainId && this.el.attr("id", t.mainId),
                    t.contentId && this.content.attr("id", t.contentId),
                    t.titleId && this.title.attr("id", t.titleId),
                    t.closeButton && this.el.append(this.tpl.close)
                }
                return createMain
            }(),
            createMask: function() {
                function createMask() {
                    var t = this
                      , n = this.options;
                    if (n.maskHas) {
                        this.mask = e(document.createElement("div"));
                        this.mask.addClass(n.maskClass).css({
                            position: "absolute",
                            left: 0,
                            top: 0,
                            opacity: n.opacity,
                            zIndex: n.zIndex,
                            backgroundColor: "#000",
                            width: e.page.docWidth(),
                            height: e.page.docHeight()
                        }),
                        n.maskId && this.mask.attr("id", n.maskId),
                        e("." + n.maskClass)[0] || this.mask.appendTo("body"),
                        (e.browser.isIE6() || n.maskIframe) && this.mask.append('<iframe src="about:blank" class="jdMaskIframe" frameBorder="0" style="width:100%;height:100%;position:absolute;z-index:' + (n.zIndex + 1) + ';opacity:0;filter:alpha(opacity=0);top:0;left:0;">'),
                        e(window).resize(function() {
                            t.mask.css({
                                width: e.page.docWidth(),
                                height: e.page.docHeight()
                            })
                        })
                    }
                }
                return createMask
            }(),
            getPadding: function() {
                function getPadding(e) {
                    return {
                        width: parseInt(e.css("paddingLeft"), 10) + parseInt(e.css("paddingRight"), 10),
                        height: parseInt(e.css("paddingTop"), 10) + parseInt(e.css("paddingBottom"), 10)
                    }
                }
                return getPadding
            }(),
            mainStyle: function() {
                function mainStyle() {
                    var t = this.options;
                    t.title && (t.height = t.height ? t.height + 28 : t.height,
                    this.title.css({
                        width: t.width - this.getPadding(this.content).width
                    })),
                    this.content.css({
                        height: t.height ? t.height : "",
                        width: t.width ? t.width - this.getPadding(this.content).width : "",
                        overflow: "hidden"
                    }),
                    t.width && this.el.css({
                        width: t.width
                    });
                    var n = t.fixed && !e.browser.isIE6() ? "fixed" : "absolute";
                    this.el.css({
                        position: n,
                        zIndex: t.zIndex + 2,
                        display: "block",
                        overflow: "hidden"
                    }),
                    this.updateMain()
                }
                return mainStyle
            }(),
            updateMain: function() {
                function updateMain() {
                    var t = this.options
                      , n = e.page.docWidth() != e.page.clientWidth() ? 16 : 0
                      , i = t.fixed ? 0 : e(document).scrollTop()
                      , o = t.fixed ? 0 : e(document).scrollLeft()
                      , a = (e.page.clientHeight() - this.el.outerHeight()) / 2 + i
                      , r = e.browser.msie && e.browser.version < 10 ? 0 : 8
                      , s = (e.page.clientWidth() - n - (t.width ? t.width + r : 0)) / 2 + o;
                    a < 0 && (a = 0),
                    s < 0 && (s = 0),
                    this.el.css({
                        top: a,
                        left: s
                    })
                }
                return updateMain
            }(),
            bind: function() {
                function bind() {
                    var t = this
                      , n = this.options;
                    this.options.closeButton && this.el.find(".ui-dialog-close").bind("click", function() {
                        t.close()
                    }),
                    this.options.autoUpdate && e(window).resize(function() {
                        t.updateMain()
                    }),
                    n.hasButton && (this.el.find(".ui-dialog-btn-submit").bind("click", function() {
                        n.onSubmit && n.onSubmit.call(this)
                    }),
                    this.el.find(".ui-dialog-btn-cancel").bind("click", function() {
                        t.close()
                    })),
                    this.options.maskHas && this.options.maskClose && e(this.mask).bind("click", function() {
                        t.close()
                    })
                }
                return bind
            }(),
            open: function() {
                function open() {
                    this.openType(),
                    this.autoClose(),
                    this.show(),
                    this.iframeSet(),
                    this.options.onReady && this.options.onReady.call(this)
                }
                return open
            }(),
            openType: function() {
                function openType() {
                    var t = this.options
                      , n = this;
                    switch (t.type) {
                    case "text":
                        this.content.html(t.source);
                        break;
                    case "html":
                        e(t.source).clone().appendTo(this.content);
                        break;
                    case "iframe":
                        var i = {
                            width: "100%",
                            height: "100%"
                        };
                        t.iframeTimestamp && !/&t=/.test(t.source) && (t.source += (t.source.indexOf("?") > -1 ? "&" : "?") + "t=" + (new Date).getTime()),
                        this.iframe = e('<iframe src="' + t.source + '" id="' + t.iframeName + '" name="' + t.iframeName + '" marginwidth="0" marginheight="0" frameborder="0" scrolling="no" style="border:0"></iframe>').css(i).appendTo(this.content);
                        break;
                    case "image":
                        var o = t.width ? 'width="' + t.width + '"' : ""
                          , a = t.height ? 'height="' + t.height + '"' : ""
                          , r = e("<img src=" + t.source + " " + o + a + "/>");
                        r.appendTo(this.content),
                        r.bind("load", function() {
                            n.updateMain()
                        })
                    }
                    n.updateMain()
                }
                return openType
            }(),
            close: function() {
                function close() {
                    var e = this.options;
                    this.options.autoCloseTime;
                    e.onBeforeClose && e.onBeforeClose.call(this),
                    this.el.remove(),
                    this.mask && this.mask.remove(),
                    e.onCancel && e.onCancel.call(this)
                }
                return close
            }(),
            autoClose: function() {
                function autoClose() {
                    var t = this
                      , n = this.options.autoCloseTime;
                    if (n) {
                        var i = n;
                        e("<div class='ui-dialog-autoclose'><span id='ui-autoclose'>" + i + "</span>秒后自动关闭</div>").appendTo(this.el),
                        clearInterval(window.autoCloseTimerDialog),
                        window.autoCloseTimerDialog = setInterval(function() {
                            i--,
                            e("#ui-autoclose").html(i),
                            0 == i && (i = n,
                            t.close(),
                            clearInterval(window.autoCloseTimerDialog))
                        }, 1e3),
                        this.updateMain()
                    }
                }
                return autoClose
            }(),
            getIframeHeight: function() {
                function getIframeHeight(e) {
                    var t = e[0].contentWindow.document;
                    return t.body.scrollHeight && t.documentElement.scrollHeight ? Math.min(t.body.scrollHeight, t.documentElement.scrollHeight) : t.documentElement.scrollHeight ? t.documentElement.scrollHeight : t.body.scrollHeight ? t.body.scrollHeight : void 0
                }
                return getIframeHeight
            }(),
            syncHeight: function() {
                function syncHeight() {
                    var e, t = this;
                    try {
                        e = t.getIframeHeight(t.iframe)
                    } catch (n) {}
                    e && (t.iframe.css({
                        height: e
                    }),
                    t.updateMain())
                }
                return syncHeight
            }(),
            iframeSet: function() {
                function iframeSet() {
                    var e = this
                      , t = this.options;
                    "iframe" == t.type && t.autoIframe && this.iframe.one("load", function() {
                        e.syncHeight()
                    })
                }
                return iframeSet
            }()
        }),
        e.closeDialog = function() {
            e(".ui-dialog,.ui-mask").remove(),
            clearInterval(window.autoCloseTimerDialog)
        }
    }(jQuery)
}
, function(e, t, n) {
    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    function checkLogin(e, t) {
        $.ajax({
            url: e.loginService,
            data: {
                method: e.loginMethod
            },
            dataType: "jsonp",
            scriptCharset: "gbk",
            success: function() {
                function success(e) {
                    t(e)
                }
                return success
            }()
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(31)
      , o = _interopRequireDefault(i)
      , a = n(11)
      , r = _interopRequireDefault(a)
      , s = n(9)
      , c = (_interopRequireDefault(s),
    {});
    window.jdModelCallCenter = c;
    var l = "https:" === document.location.protocol ? "https://" : "http://";
    r["default"].on("loginSuccessByIframe", function(e) {
        (0,
        o["default"])({
            callback: function() {
                function callback(e) {
                    $.closeDialog(),
                    $.ajax({
                        url: l + "passport.jd.com/loginservice.aspx?callback=?",
                        data: {
                            method: "Login"
                        },
                        dataType: "json",
                        success: function() {
                            function success(e) {
                                null != e && e.Identity.IsAuthenticated && r["default"].trigger("loginSuccessCallback", e)
                            }
                            return success
                        }()
                    })
                }
                return callback
            }()
        })
    });
    var d = {
        loginService: l + "passport.jd.com/loginservice.aspx?callback=?",
        loginMethod: "Login",
        loginUrl: l + "passport.jd.com/new/login.aspx",
        returnUrl: location.href,
        automatic: !1,
        complete: null,
        modal: !1,
        clstag1: 0,
        clstag2: 0,
        firstCheck: !0
    }
      , u = function(e) {
        e = $.extend({}, d, e || {});
        var t = {
            login: function() {
                function login() {
                    var t = navigator.userAgent.toLowerCase();
                    if ("ucweb" === t.match(/ucweb/i) || "rv:1.2.3.4" === t.match(/rv:1.2.3.4/i))
                        return void (location.href = e.loginUrl + "?ReturnUrl=" + escape(returnUrl));
                    $.closeDialog(),
                    this.loginDialog = $("body").dialog({
                        title: "您尚未登录",
                        width: 410,
                        height: 420,
                        autoIframe: !1,
                        type: "iframe",
                        fixed: !0,
                        mainId: "loginDialogBody",
                        source: "https://passport.jd.com/uc/popupLogin2013?clstag1=" + e.clstag1 + "&clstag2=" + e.clstag2 + "&r=" + Math.random(),
                        autoUpdate: !0
                    })
                }
                return login
            }(),
            regist: function() {
                function regist() {
                    $.closeDialog(),
                    this.registDialog = $("body").dialog({
                        title: "您尚未登录",
                        width: 410,
                        height: 470,
                        type: "iframe",
                        fixed: !0,
                        mainId: "registDialogBody",
                        source: "https://reg.jd.com/reg/popupPerson?clstag1=" + e.clstag1 + "&clstag2=" + e.clstag2 + "&r=" + Math.random(),
                        autoUpdate: !0
                    })
                }
                return regist
            }()
        };
        if (c.regist = function() {
            t.regist()
        }
        ,
        c.login = function() {
            t.login()
        }
        ,
        c.init = function(e) {
            r["default"].trigger("loginSuccessByIframe", e)
        }
        ,
        "" !== e.loginService && "" !== e.loginMethod) {
            var n = function(n) {
                function loginSuccess(t) {
                    null != e.complete && e.complete(t)
                }
                null != n && (e.automatic && null != e.complete && e.complete(n),
                n.Identity.IsAuthenticated && null != e.complete && !e.automatic && e.complete(n),
                n.Identity.IsAuthenticated || "" === e.loginUrl || e.automatic || (e.modal ? e.firstCheck && (t.login(),
                r["default"].off("loginSuccessCallback"),
                r["default"].on("loginSuccessCallback", loginSuccess)) : location.href = e.loginUrl + "?ReturnUrl=" + escape(e.returnUrl)))
            };
            e.firstCheck ? checkLogin(e, n) : (t.login(),
            r["default"].on("loginSuccessCallback", function(t) {
                null != e.complete && e.complete(t)
            }))
        }
    };
    u.isLogin = function(e, t) {
        $.isFunction(e) ? (t = e,
        e = d) : e = $.extend({}, d, e || {}),
        $.isFunction(t) || (t = function() {}
        ),
        checkLogin(e, function(e) {
            e && e.Identity ? t(e.Identity.IsAuthenticated, e) : t(!1, null)
        })
    }
    ,
    t["default"] = u
}
, function(e, t, n) {
    var i, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    ;
    (i = function(e, t, n) {
        return {
            on: function() {
                function on(e, t) {
                    var n = this;
                    this.list = this.list || (this.list = []),
                    this.list[e] = this.list[e] || [];
                    void 0 === t || o(t);
                    if (void 0 === t)
                        var t = function() {
                            function fun() {
                                n[e] && n[e]()
                            }
                            return fun
                        }();
                    "function" == typeof t && this.list[e].push(t)
                }
                return on
            }(),
            off: function() {
                function off(e, t) {
                    if ("function" == typeof t) {
                        if ("undefined" != typeof this.list) {
                            var n = this.list[e];
                            if (n)
                                for (var i = n.length; i--; )
                                    n[i] === t && n.splice(i, 1)
                        }
                    } else
                        this.list[e] = []
                }
                return off
            }(),
            trigger: function() {
                function trigger(e, t) {
                    if ("undefined" != typeof this.list) {
                        var n = this.list[e];
                        if (n)
                            for (var i in n)
                                n.hasOwnProperty(i) && "function" == typeof n[i] && n[i](t)
                    }
                }
                return trigger
            }(),
            removeAll: function() {
                function removeAll(e) {
                    this.list = []
                }
                return removeAll
            }()
        }
    }
    .call(t, n, t, e)) !== undefined && (e.exports = i)
}
, function(e, t, n) {
    var i;
    (i = function(e, t, n) {
        var i = function(e) {
            if (this.param = $.extend({
                lid: readCookie("ipLoc-djd") || "",
                lim: 6,
                ec: "utf-8",
                uuid: -1,
                pin: readCookie("pin") || ""
            }, e.param),
            this.$el = e.$el,
            this.template = e.template,
            this.reBuildJSON = e.reBuildJSON,
            this.skuHooks = e.skuHooks || "SKUS_recommend",
            this.ext = e.ext || {},
            this.callback = e.callback || function() {}
            ,
            this.debug = e.debug,
            !this.param.p)
                throw new Error("The param [p] is not Specificed");
            this.init()
        };
        return i.prototype = {
            init: function() {
                function init() {
                    var e = readCookie("__jda");
                    this.param.lid.indexOf("-") > 0 ? this.param.lid = this.param.lid.split("-")[0] : this.param.lid = "1",
                    e ? "-" == e.split(".")[1] ? this.param.uuid = -1 : this.param.uuid = e.split(".")[1] : this.param.uuid = -1,
                    this.get(this.rid)
                }
                return init
            }(),
            get: function() {
                function get(e, t) {
                    var n, i = this, o = pageConfig.queryParam, a = [];
                    if (pageConfig.product)
                        for (n = 0; n < pageConfig.product.cat.length; n++)
                            this.param["c" + (n + 1)] = pageConfig.product.cat[n];
                    if (o) {
                        for (var r in o)
                            o.hasOwnProperty(r) && ("c1" == r || "c2" == r || "c3" == r ? i.param[r] = o[r] : a.push(r + ":" + o[r]));
                        i.param.hi = a.join(",")
                    }
                    this.debug && console.info("//diviner.jd.com/diviner?" + decodeURIComponent($.param(this.param))),
                    $.ajax({
                        url: "//diviner.jd.com/diviner?" + decodeURIComponent($.param(this.param)),
                        dataType: "jsonp",
                        scriptCharset: this.param.ec,
                        cache: !0,
                        jsonpCallback: "call" + parseInt(1e5 * Math.random(), 10),
                        success: function() {
                            function success(e) {
                                var t = !!(e.success && e && e.data && e.data.length);
                                t ? i.set(e) : i.$el.html('<div class="ac">「暂无数据」</div>'),
                                this.debug && console.log(e),
                                i.callback.apply(i, [t, e])
                            }
                            return success
                        }()
                    })
                }
                return get
            }(),
            set: function() {
                function set(e) {
                    pageConfig[this.skuHooks] = [],
                    e.skuHooks = this.skuHooks,
                    e.ext = this.ext,
                    this.reBuildJSON && this.reBuildJSON > 0 && (e.data = tools.reBuildJSON(e.data, this.reBuildJSON)),
                    this.debug && alert(this.template.process(e));
                    try {
                        this.$el.show().html(this.template.process(e))
                    } catch (t) {
                        /isdebug/.test(location.href) && "undefined" != typeof console && console.error("[pid=" + this.param.p + "] " + t)
                    }
                    this.setTrackCode(e.impr)
                }
                return set
            }(),
            setTrackCode: function() {
                function setTrackCode(e) {
                    var t = this.$el.find("li")
                      , n = this
                      , i = "&m=UA-J2011-1&ref=" + encodeURIComponent(document.referrer);
                    t.each(function() {
                        var e = $(this).attr("data-clk");
                        $(this).bind("click", function(t) {
                            var o = $(t.target);
                            (o.is("a") || o.is("img") || o.is("span")) && n.newImage(e + i, !0),
                            o.is("input") && 1 == o.attr("checked") && n.newImage(e + i, !0)
                        })
                    }),
                    this.newImage(e + i, !0)
                }
                return setTrackCode
            }(),
            newImage: function() {
                function newImage(e, t, n) {
                    var i = new Image;
                    e = t ? e + "&random=" + Math.random() + new Date : e,
                    i.onload = function() {
                        void 0 !== n && n(e)
                    }
                    ,
                    i.setAttribute("src", e)
                }
                return newImage
            }()
        },
        i
    }
    .call(t, n, t, e)) !== undefined && (e.exports = i)
}
, function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function(e, t, n) {
        if (void 0 === t) {
            var i = null;
            if (document.cookie && "" !== document.cookie)
                for (var o = document.cookie.split(";"), a = 0; a < o.length; a++) {
                    var r = jQuery.trim(o[a]).split("=");
                    if (r[0] === e && r.length > 1) {
                        try {
                            i = decodeURIComponent(r[1])
                        } catch (f) {
                            i = r[1]
                        }
                        break
                    }
                }
            return i
        }
        n = n || {},
        null === t && (t = "",
        n.expires = -1);
        var s = "";
        if (n.expires && ("number" == typeof n.expires || n.expires.toUTCString)) {
            var c;
            "number" == typeof n.expires ? (c = new Date,
            c.setTime(c.getTime() + 24 * n.expires * 60 * 60 * 1e3)) : c = n.expires,
            s = "; expires=" + c.toUTCString()
        }
        var l = n.path ? "; path=" + n.path : ""
          , d = n.domain ? "; domain=" + n.domain : ""
          , u = n.secure ? "; secure" : "";
        document.cookie = [e, "=", encodeURIComponent(t), s, l, d, u].join("")
    };
    t["default"] = n
}
, function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function tmpl(e, t) {
        var n = /[^\w\-.:]/.test(e) ? new Function(tmpl.arg + ",tmpl","var _e=tmpl.encode" + tmpl.helper + ",_s='" + e.replace(tmpl.regexp, tmpl.func) + "';return _s;") : tmpl.cache[e] = tmpl.cache[e] || tmpl(tmpl.load(e));
        return t ? n(t, tmpl) : function(e) {
            return n(e, tmpl)
        }
    };
    n.cache = {},
    n.load = function(e) {
        return document.getElementById(e).innerHTML
    }
    ,
    n.regexp = /([\s'\\])(?!(?:[^{]|\{(?!%))*%\})|(?:\{%(=|#)([\s\S]+?)%\})|(\{%)|(%\})/g,
    n.func = function(e, t, n, i, o, a) {
        return t ? {
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            " ": " "
        }[t] || "\\" + t : n ? "=" === n ? "'+_e(" + i + ")+'" : "'+(" + i + "==null?'':" + i + ")+'" : o ? "';" : a ? "_s+='" : void 0
    }
    ,
    n.encReg = /[<>&"'\x00]/g,
    n.encMap = {
        "<": "&lt;",
        ">": "&gt;",
        "&": "&amp;",
        '"': "&quot;",
        "'": "&#39;"
    },
    n.encode = function(e) {
        return (null == e ? "" : "" + e).replace(n.encReg, function(e) {
            return n.encMap[e] || ""
        })
    }
    ,
    n.arg = "o",
    n.helper = ",print=function(s,e){_s+=e?(s==null?'':s):_e(s);},include=function(s,d){_s+=tmpl(s,d);}",
    t["default"] = n
}
, function(e, t) {
    function _classCallCheck(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function defineProperties(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(e, t, n) {
            return t && defineProperties(e.prototype, t),
            n && defineProperties(e, n),
            e
        }
    }()
      , i = function() {
        function Tab(e) {
            _classCallCheck(this, Tab),
            this.conf = $.extend({
                container: null,
                head: null,
                headItems: null,
                content: null,
                contentItems: null,
                startAt: 0,
                activeClass: "active",
                hash: !1,
                hoverToSwitch: !1,
                onBeforeSwitch: function() {
                    function onBeforeSwitch() {}
                    return onBeforeSwitch
                }(),
                onAfterSwitch: function() {
                    function onAfterSwitch() {}
                    return onAfterSwitch
                }(),
                onFirstShow: function() {
                    function onFirstShow() {}
                    return onFirstShow
                }()
            }, e),
            this.index = undefined;
            var t = this.conf;
            this.$el = $(t.container),
            this.$head = t.head ? $(t.head) : this.$el.children(".mod_tab_head, .J_tab_head"),
            this.$headItems = t.headItems ? "string" == typeof t.headItems ? this.$head.children(t.headItems) : $(t.headItems) : this.$head.children(".mod_tab_head_item, .J_tab_head_item"),
            this.$content = t.content ? $(t.content) : this.$el.children(".mod_tab_content, .J_tab_content"),
            this.$contentItems = t.contentItems ? "string" == typeof t.contentItems ? this.$content.children(t.contentItems) : $(t.contentItems) : this.$content.children(".mod_tab_content_item, .J_tab_content_item"),
            this.tabLength = this.$headItems.length;
            for (var n = 0, i = this.$headItems.length; n < i; n++)
                this.$headItems[n].hasShown = !1;
            this.init()
        }
        return n(Tab, [{
            key: "init",
            value: function() {
                function init() {
                    var e = this.conf
                      , t = -1
                      , n = window.location.hash;
                    e.hash && n.length > 1 ? this.switchTo(n) : ("string" == typeof e.startAt ? (this.$active = this.$headItems.filter(e.startAt),
                    t = this.$active.length ? this.$active.index() : 0) : t = "number" == typeof e.startAt ? e.startAt : 0,
                    this.switchTo(t)),
                    this.initEvent()
                }
                return init
            }()
        }, {
            key: "initEvent",
            value: function() {
                function initEvent() {
                    var e = this
                      , t = e.conf
                      , n = "click";
                    t.hoverToSwitch && (n = "mouseenter"),
                    this.$head.delegate(".mod_tab_head_item, .J_tab_head_item", n, function(t) {
                        t && t.preventDefault();
                        var n = $(this).index();
                        e.switchTo(n)
                    })
                }
                return initEvent
            }()
        }, {
            key: "switchTo",
            value: function() {
                function switchTo(e) {
                    var t = this.conf;
                    if (t.hash) {
                        var n;
                        if ("string" == typeof e && (n = e.replace("#", ""),
                        this.$active = this.$headItems.filter("[data-hash$=" + n + "]"),
                        e = this.$active.index()),
                        "number" == typeof e && (n = this.$headItems.eq(e).attr("data-hash")),
                        -1 === e)
                            return -1;
                        window.location.hash = n
                    }
                    if ((e = parseInt(e, 10)) !== this.index)
                        return this.index = e,
                        "function" == typeof t.onBeforeSwitch && t.onBeforeSwitch.call(this, e, this),
                        this.$headItems.removeClass(t.activeClass).eq(e).addClass(t.activeClass),
                        this.$contentItems.hide().eq(e).show(),
                        "function" == typeof t.onAfterSwitch && t.onAfterSwitch.call(this, e, this),
                        this.$headItems[e].hasShown || "function" != typeof t.onFirstShow || (t.onFirstShow.call(this, e, this),
                        this.$headItems[e].hasShown = !0),
                        this
                }
                return switchTo
            }()
        }, {
            key: "switchToNext",
            value: function() {
                function switchToNext() {
                    var e = this.index + 1;
                    return e >= this.tabLength && (e = 0),
                    this.switchTo(e),
                    this
                }
                return switchToNext
            }()
        }, {
            key: "switchToPrev",
            value: function() {
                function switchToPrev() {
                    var e = this.index - 1;
                    return e < 0 && (e = this.tabLength - 1),
                    this.switchTo(e),
                    this
                }
                return switchToPrev
            }()
        }, {
            key: "destroy",
            value: function() {
                function destroy() {
                    this.unbind(),
                    this.$el.remove()
                }
                return destroy
            }()
        }, {
            key: "unbind",
            value: function() {
                function unbind() {
                    return this.$head.undelegate(),
                    this
                }
                return unbind
            }()
        }, {
            key: "setOptions",
            value: function() {
                function setOptions(e) {
                    return $.extend(this.conf, e),
                    this
                }
                return setOptions
            }()
        }]),
        Tab
    }();
    t["default"] = i
}
, function(e, t, n) {
    function _classCallCheck(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function _possibleConstructorReturn(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function _inherits(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    function debounce(e, t, n) {
        var i = void 0
          , o = void 0
          , a = void 0
          , r = void 0
          , s = void 0
          , c = function() {
            function later() {
                var c = +new Date - r;
                c < t && c >= 0 ? i = setTimeout(later, t - c) : (i = null,
                n || (s = e.apply(a, o),
                i || (a = null,
                o = null)))
            }
            return later
        }();
        return function() {
            function debounced() {
                a = this,
                o = arguments,
                r = +new Date;
                var l = n && !i;
                return i || (i = setTimeout(c, t)),
                l && (s = e.apply(a, o),
                a = null,
                o = null),
                s
            }
            return debounced
        }()
    }
    function throttle(e, t, n) {
        t || (t = 250);
        var i = void 0
          , o = void 0;
        return function() {
            var a = n || this
              , r = +new Date
              , s = arguments;
            i && r < i + t ? (clearTimeout(o),
            o = setTimeout(function() {
                i = r,
                e.apply(a, s)
            }, t)) : (i = r,
            e.apply(a, s))
        }
    }
    function getWinSize() {
        return {
            width: window.innerWidth || document.documentElement.clientWidth,
            height: window.innerHeight || document.documentElement.clientHeight
        }
    }
    function lazyLoadHandler() {
        l.forEach(function(e) {
            return checkVisible(e)
        }),
        clearOnce()
    }
    function clearOnce() {
        d.forEach(function(e) {
            var t = l.indexOf(e);
            t >= 0 && l.splice(t, 1)
        }),
        d = []
    }
    function checkVisible(e) {
        var t = e.dom;
        if (t) {
            var n = void 0
              , i = void 0;
            e.props.overflow && (n = getScrollParent(t)),
            i = n && n !== window ? checkOverflowVisible(e, n) : checkNormalVisible(e),
            i ? e.visible || (e.props.once && d.push(e),
            e.visible = !0,
            e.forceUpdate()) : e.props.once && e.visible || (e.visible = !1,
            e.props.unmountIfInvisible && e.forceUpdate())
        }
    }
    function checkOverflowVisible(e, t) {
        var n = e.dom
          , i = void 0
          , o = void 0;
        try {
            var a = t.getBoundingClientRect();
            i = a.top,
            o = a.height
        } catch (m) {
            i = h.top,
            o = h.height
        }
        var r = getWinSize().height
          , s = Math.max(i, 0)
          , c = Math.min(r, i + o) - s
          , l = void 0
          , d = void 0;
        try {
            var u = n.getBoundingClientRect();
            l = u.top,
            d = u.height
        } catch (m) {
            l = h.top,
            d = h.height
        }
        var f = l - s
          , p = Array.isArray(e.props.offset) ? e.props.offset : [0 | e.props.offset, 0 | e.props.offset];
        return f - p[0] <= c && f + d + p[1] >= 0
    }
    function checkNormalVisible(e) {
        var t = e.dom;
        if (!(t.offsetWidth || t.offsetHeight || t.getClientRects().length))
            return !1;
        var n = void 0
          , i = void 0;
        try {
            var o = t.getBoundingClientRect();
            n = o.top,
            i = o.height
        } catch (s) {
            n = h.top,
            i = h.height
        }
        var a = getWinSize().height
          , r = Array.isArray(e.props.offset) ? e.props.offset : [0 | e.props.offset, 0 | e.props.offset];
        return n - r[0] <= a && n + i + r[1] >= 0
    }
    function getScrollParent(e) {
        if (!e || 1 !== e.nodeType || !e.nodeName)
            return window;
        for (var t = e, n = /(scroll|auto)/; t; ) {
            if (!e.parentNode)
                return window;
            var i = getStyle(t)
              , o = i.overflow
              , a = i["overflow-x"]
              , r = i["overflow-y"];
            if (n.test(o) && n.test(a) && n.test(r))
                return t;
            t = t.parentNode
        }
        return window
    }
    function isNative(e) {
        return "function" == typeof e && /native code/.test(e.toString())
    }
    function getStyle(e) {
        return isNative(window.getComputedStyle) ? window.getComputedStyle(e, null) : e.currentStyle
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
        function defineProperties(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(e, t, n) {
            return t && defineProperties(e.prototype, t),
            n && defineProperties(e, n),
            e
        }
    }()
      , o = n(4)
      , a = function(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }(o)
      , r = "throttle"
      , s = "debounce"
      , c = "data-lazyload-listened"
      , l = []
      , d = []
      , u = null
      , f = null
      , p = r
      , h = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        width: 0,
        height: 0
    }
      , m = {
        throttle: throttle,
        debounce: debounce
    }
      , g = function(e) {
        function LazyLoad() {
            _classCallCheck(this, LazyLoad);
            var e = _possibleConstructorReturn(this, (LazyLoad.__proto__ || Object.getPrototypeOf(LazyLoad)).apply(this, arguments));
            return e.visible = !1,
            e
        }
        return _inherits(LazyLoad, e),
        i(LazyLoad, [{
            key: "componentDidMount",
            value: function() {
                function componentDidMount() {
                    var e = window
                      , t = this.props
                      , n = t.throttle
                      , i = t.debounce
                      , o = t.overflow
                      , a = t.scroll
                      , d = t.resize
                      , h = !1
                      , g = 300;
                    void 0 !== n && p !== r ? (h = !0,
                    p = r,
                    g = n >>> 0) : void 0 !== i && p !== s && (h = !0,
                    p = s,
                    g = i >>> 0),
                    h && (e.removeEventListener("scroll", u),
                    e.removeEventListener("resize", f),
                    u = null,
                    f = null),
                    u || (u = m[p](lazyLoadHandler, g));
                    var v = void 0;
                    if (o && (v = getScrollParent(this.dom)),
                    v && v !== window) {
                        if (v.getAttribute) {
                            var _ = 1 + v.getAttribute(c) | 0;
                            1 === _ && v.addEventListener("scroll", u),
                            v.setAttribute(c, _)
                        }
                    } else if ((0 === l.length || h) && (a && e.addEventListener("scroll", u),
                    d)) {
                        var y = getWinSize()
                          , b = y.width
                          , w = y.height
                          , k = null;
                        f = function() {
                            function resizeLazyHandler() {
                                var e = getWinSize()
                                  , t = e.width
                                  , n = e.height;
                                b === t && w === n || (k && clearTimeout(k),
                                k = setTimeout(u, 0)),
                                b = t,
                                w = n
                            }
                            return resizeLazyHandler
                        }(),
                        e.addEventListener("resize", f)
                    }
                    l.push(this),
                    checkVisible(this)
                }
                return componentDidMount
            }()
        }, {
            key: "shouldComponentUpdate",
            value: function() {
                function shouldComponentUpdate() {
                    return this.visible
                }
                return shouldComponentUpdate
            }()
        }, {
            key: "componentWillUnmount",
            value: function() {
                function componentWillUnmount() {
                    var e = window;
                    if (this.props.overflow) {
                        var t = getScrollParent(this.dom);
                        if (t && t.getAttribute) {
                            var n = -1 | t.getAttribute(c);
                            0 === n ? (t.removeEventListener("scroll", u),
                            t.removeAttribute(c)) : t.setAttribute(c, n)
                        }
                    }
                    var i = l.indexOf(this);
                    i >= 0 && l.splice(i, 1),
                    0 === l.length && (e.removeEventListener("scroll", u),
                    e.removeEventListener("scroll", u))
                }
                return componentWillUnmount
            }()
        }, {
            key: "render",
            value: function() {
                function render() {
                    var e = this.props
                      , t = e.children
                      , n = e.placeholder
                      , i = e.placeholderClassName
                      , o = e.height;
                    return this.visible ? 1 === t.length ? t[0] : t : n && "Widget" === n.type ? n : a["default"].createElement("div", {
                        className: i,
                        style: {
                            height: o
                        }
                    })
                }
                return render
            }()
        }]),
        LazyLoad
    }(a["default"].Component);
    g.defaultProps = {
        once: !1,
        throttle: 300,
        offset: 0,
        scroll: !0,
        resize: !0,
        unmountIfInvisible: !1,
        placeholderClassName: "mod_lazyload_placeholder"
    },
    t["default"] = g
}
, function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t["default"] = {
        throttle: function() {
            function throttle(e, t, n) {
                var i, o, a, r = null, s = 0;
                n || (n = {});
                var c = function() {
                    function later() {
                        s = !1 === n.leading ? 0 : (new Date).getTime(),
                        r = null,
                        a = e.apply(i, o),
                        r || (i = o = null)
                    }
                    return later
                }();
                return function() {
                    var l = (new Date).getTime();
                    s || !1 !== n.leading || (s = l);
                    var d = t - (l - s);
                    return i = this,
                    o = arguments,
                    d <= 0 || d > t ? (clearTimeout(r),
                    r = null,
                    s = l,
                    a = e.apply(i, o),
                    r || (i = o = null)) : r || !1 === n.trailing || (r = setTimeout(c, d)),
                    a
                }
            }
            return throttle
        }(),
        debounce: function() {
            function debounce(e, t, n) {
                var i, o, a, r, s, c = function() {
                    function later() {
                        var c = (new Date).getTime() - r;
                        c < t && c > 0 ? i = setTimeout(later, t - c) : (i = null,
                        n || (s = e.apply(a, o),
                        i || (a = o = null)))
                    }
                    return later
                }();
                return function() {
                    a = this,
                    o = arguments,
                    r = (new Date).getTime();
                    var l = n && !i;
                    return i || (i = setTimeout(c, t)),
                    l && (s = e.apply(a, o),
                    a = o = null),
                    s
                }
            }
            return debounce
        }(),
        indexOf: function() {
            function indexOf(e, t) {
                var n = e.length
                  , i = Number(arguments[2]) || 0;
                for (i < 0 && (i += n); i < n; ) {
                    if (i in e && e[i] === t)
                        return i;
                    i++
                }
                return -1
            }
            return indexOf
        }(),
        getCalendar: function() {
            function getCalendar(e, t) {
                if (e instanceof Date) {
                    var n = e.getMonth() + 1
                      , i = e.getFullYear()
                      , o = e.getDate() + (t || 0);
                    switch (0 === o && 0 === (n -= 1) && (n = 12,
                    i -= 1),
                    n) {
                    case 1:
                    case 3:
                    case 5:
                    case 7:
                    case 8:
                    case 10:
                    case 12:
                        o = 0 === o ? 31 : o,
                        o > 31 && (n += 1,
                        o = 1);
                        break;
                    case 4:
                    case 6:
                    case 9:
                    case 11:
                        o = 0 === o ? 30 : o,
                        o > 30 && (n += 1,
                        o = 1);
                        break;
                    case 2:
                        i % 4 == 0 ? (o = 0 === o ? 29 : o) > 29 && (n += 1,
                        o = 1) : (o = 0 === o ? 28 : o) > 28 && (n += 1,
                        o = 1)
                    }
                    return n > 12 && (n = 1,
                    i += 1),
                    i + "/" + n + "/" + o
                }
            }
            return getCalendar
        }()
    }
}
, function(e, t, n) {
    e.exports = n(19)
}
, function(e, t, n) {
    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    function _classCallCheck(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function _possibleConstructorReturn(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function _inherits(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var i = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
        }
        return e
    }
      , o = function() {
        function sliceIterator(e, t) {
            var n = []
              , i = !0
              , o = !1
              , a = undefined;
            try {
                for (var r, s = e[Symbol.iterator](); !(i = (r = s.next()).done) && (n.push(r.value),
                !t || n.length !== t); i = !0)
                    ;
            } catch (c) {
                o = !0,
                a = c
            } finally {
                try {
                    !i && s["return"] && s["return"]()
                } finally {
                    if (o)
                        throw a
                }
            }
            return n
        }
        return function(e, t) {
            if (Array.isArray(e))
                return e;
            if (Symbol.iterator in Object(e))
                return sliceIterator(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }()
      , a = function() {
        function defineProperties(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(e, t, n) {
            return t && defineProperties(e.prototype, t),
            n && defineProperties(e, n),
            e
        }
    }();
    n(20),
    n(8),
    n(23);
    var r = n(4)
      , s = _interopRequireDefault(r)
      , c = n(16)
      , l = _interopRequireDefault(c);
    n(24);
    var d = n(25)
      , u = _interopRequireDefault(d);
    n(26),
    n(28);
    var f = n(1)
      , p = n(0)
      , h = n(3)
      , m = n(6)
      , g = _interopRequireDefault(m)
      , v = n(30)
      , y = _interopRequireDefault(v)
      , b = n(41)
      , w = _interopRequireDefault(b)
      , k = n(2);
    g["default"].init(939, 951, 941, 942),
    (0,
    y["default"])(),
    (0,
    w["default"])(),
    (0,
    k.initClicklogger)(),
    window.addEventListener("DOMContentLoaded", function() {
        (0,
        k.logImpr)({
            poi: "head|null|null",
            comment: "区域"
        })
    });
    var C = function(e, t) {
        var n = t.error;
        return t.pastDelay ? s["default"].createElement("div", {
            className: "mod_lazyload",
            style: e
        }) : n ? "" : s["default"].createElement("div", {
            className: "mod_lazyload",
            style: e
        })
    }
      , S = (0,
    u["default"])({
        loader: function() {
            function loader() {
                return n.e(7).then(n.bind(null, 61))
            }
            return loader
        }(),
        loading: C.bind(null, {
            height: "315px"
        }),
        delay: 0
    })
      , x = (0,
    u["default"])({
        loader: function() {
            function loader() {
                return n.e(1).then(n.bind(null, 62))
            }
            return loader
        }(),
        loading: C.bind(null, {
            height: "480px"
        }),
        delay: 0
    })
      , j = (0,
    u["default"])({
        loader: function() {
            function loader() {
                return n.e(2).then(n.bind(null, 63))
            }
            return loader
        }(),
        loading: C.bind(null, {
            height: "480px"
        }),
        delay: 0
    })
      , I = (0,
    u["default"])({
        loader: function() {
            function loader() {
                return n.e(8).then(n.bind(null, 64))
            }
            return loader
        }(),
        loading: C.bind(null, {
            height: "715px"
        }),
        delay: 0
    })
      , T = (0,
    u["default"])({
        loader: function() {
            function loader() {
                return n.e(10).then(n.bind(null, 65))
            }
            return loader
        }(),
        loading: C.bind(null, {
            height: "185px"
        }),
        delay: 0
    })
      , P = (0,
    u["default"])({
        loader: function() {
            function loader() {
                return n.e(6).then(n.bind(null, 66))
            }
            return loader
        }(),
        loading: C.bind(null, {
            height: "280px"
        }),
        delay: 0
    })
      , A = (0,
    u["default"])({
        loader: function() {
            function loader() {
                return n.e(0).then(n.bind(null, 67))
            }
            return loader
        }(),
        loading: C.bind(null, {
            height: "97px"
        }),
        delay: 0
    })
      , E = (0,
    u["default"])({
        loader: function() {
            function loader() {
                return n.e(11).then(n.bind(null, 58))
            }
            return loader
        }(),
        loading: C.bind(null, {
            height: "480px"
        }),
        delay: 0
    })
      , L = (0,
    u["default"])({
        loader: function() {
            function loader() {
                return n.e(3).then(n.bind(null, 68))
            }
            return loader
        }(),
        loading: C.bind(null, {
            height: "425px"
        }),
        delay: 0
    })
      , O = (0,
    u["default"])({
        loader: function() {
            function loader() {
                return n.e(4).then(n.bind(null, 69))
            }
            return loader
        }(),
        loading: C.bind(null, {
            height: "550px"
        }),
        delay: 0
    })
      , U = (0,
    u["default"])({
        loader: function() {
            function loader() {
                return n.e(5).then(n.bind(null, 70))
            }
            return loader
        }(),
        loading: C.bind(null, {
            height: "730px"
        }),
        delay: 0
    })
      , R = (0,
    u["default"])({
        loader: function() {
            function loader() {
                return n.e(9).then(n.bind(null, 71))
            }
            return loader
        }(),
        loading: C.bind(null, {
            height: "500px"
        }),
        delay: 0
    })
      , N = function(e) {
        function Index() {
            _classCallCheck(this, Index);
            var e = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
            return e.chnHideMap = {},
            e.lazyloadOptions = {
                offset: 500,
                placeholderClassName: "mod_lazyload"
            },
            e.chnOnHide = function(t, n) {
                e.chnHideMap[t] ? e.chnHideMap[t]++ : e.chnHideMap[t] = 1,
                e.chnHideMap[t] === n && (document.getElementById("J_" + t).style.display = "none")
            }
            ,
            e.state = {
                isNew: !1,
                list: [{
                    isPlaceholder: !0,
                    cnt: 2
                }, {
                    isPlaceholder: !0,
                    cnt: 2
                }, {
                    isPlaceholder: !0,
                    cnt: 3
                }, {
                    isPlaceholder: !0,
                    cnt: 2
                }]
            },
            e
        }
        return _inherits(Index, e),
        a(Index, [{
            key: "requestStageInfo",
            value: function() {
                function requestStageInfo() {
                    var e = (0,
                    p.loadAsync)({
                        url: f.APIS.STAGEINFO,
                        name: "jsonpStageinfo",
                        params: {
                            pin: h.USER.pin,
                            uuid: h.USER.uuid
                        },
                        backup: [f.APIS.STAGEINFO_BACKUP, f.APIS.STAGEINFO_STOBACKUP]
                    });
                    return e.then(function(e) {
                        e.__$$backupCall && g["default"].processBackup(25)
                    })["catch"](function(e) {
                        g["default"].processBackup(25),
                        g["default"].processHidedFloor(25)
                    }),
                    e
                }
                return requestStageInfo
            }()
        }, {
            key: "componentDidMount",
            value: function() {
                function componentDidMount() {
                    var e = this;
                    this.requestStageInfo().then(function(t) {
                        e.setState({
                            list: t.data || []
                        })
                    })["catch"](function() {
                        e.setState({
                            list: []
                        })
                    }),
                    (0,
                    p.afterLoad)().then(function() {
                        e.runDelayedWorks(),
                        pageConfig.enableEnjoy || Promise.all([(0,
                        p.getNewuserinfo)(), (0,
                        p.getUserinfo)()]).then(function(t) {
                            var n = o(t, 2)
                              , i = n[0]
                              , a = n[1]
                              , r = i.isNew
                              , s = a.isCompany;
                            e.setState({
                                isNew: r,
                                isCompany: s
                            })
                        })
                    })
                }
                return componentDidMount
            }()
        }, {
            key: "runDelayedWorks",
            value: function() {
                function runDelayedWorks() {
                    null === (0,
                    p.readCookie)("PCSYCityID") && ((new Image).src = "//floor.jd.com/recommend/lbs/get?t=" + (new Date).getTime()),
                    setTimeout(function() {
                        n.e(12).then(n.bind(null, 72)),
                        /iPad/i.test(window.navigator.userAgent) && seajs.use("//nfa.jd.com/loadFa.js?aid=2_955_8766")
                    }, 1e3)
                }
                return runDelayedWorks
            }()
        }, {
            key: "getEnjoy",
            value: function() {
                function getEnjoy() {
                    return pageConfig.enableEnjoy ? s["default"].createElement(l["default"], i({
                        height: 715
                    }, this.lazyloadOptions), s["default"].createElement(I, null)) : ""
                }
                return getEnjoy
            }()
        }, {
            key: "getNew",
            value: function() {
                function getNew() {
                    var e = this.state.isNew;
                    return !this.state.isCompany && e ? (_.eventCenter.trigger("render:userinfo"),
                    s["default"].createElement(l["default"], i({
                        height: 185
                    }, this.lazyloadOptions), s["default"].createElement(T, null))) : ""
                }
                return getNew
            }()
        }, {
            key: "getCompany",
            value: function() {
                function getCompany() {
                    return this.state.isCompany ? s["default"].createElement(l["default"], i({
                        height: 280
                    }, this.lazyloadOptions), s["default"].createElement(P, null)) : ""
                }
                return getCompany
            }()
        }, {
            key: "render",
            value: function() {
                function render() {
                    var e = this
                      , t = this.state.list;
                    return s["default"].createElement("div", {
                        className: "floors"
                    }, this.getCompany(), s["default"].createElement(l["default"], i({
                        height: 315
                    }, this.lazyloadOptions), s["default"].createElement(S, null)), this.getNew(), this.getEnjoy(), s["default"].createElement(l["default"], i({
                        height: 480
                    }, this.lazyloadOptions), s["default"].createElement(x, null)), s["default"].createElement(l["default"], i({
                        height: 480
                    }, this.lazyloadOptions), s["default"].createElement(j, null)), t && t.map(function(t, n) {
                        for (var o = [], a = 0; a < t.cnt; a++) {
                            var r = a === t.cnt - 1;
                            o.push(s["default"].createElement(l["default"], i({
                                height: 480
                            }, e.lazyloadOptions), t.isPlaceholder ? s["default"].createElement("div", {
                                className: "chn mod_lazyload"
                            }) : s["default"].createElement(A, {
                                stage: t.name,
                                idx: 1 + a,
                                needLogImpr: r,
                                onError: e.chnOnHide.bind(e, t.name, t.cnt)
                            })))
                        }
                        return s["default"].createElement("div", {
                            id: "J_" + t.name,
                            className: (0,
                            p.mergeClassName)("stage", "stage_" + (1 + n))
                        }, s["default"].createElement(l["default"], i({
                            height: 97
                        }, e.lazyloadOptions), t.isPlaceholder ? s["default"].createElement("div", {
                            style: "height: 97px;"
                        }) : s["default"].createElement(E, {
                            title: t.title
                        })), o)
                    }), s["default"].createElement(l["default"], i({
                        height: 425
                    }, this.lazyloadOptions), s["default"].createElement(L, null)), s["default"].createElement(l["default"], i({
                        height: 550
                    }, this.lazyloadOptions), s["default"].createElement(O, null)), s["default"].createElement(l["default"], i({
                        height: 730
                    }, this.lazyloadOptions), s["default"].createElement(U, null)), s["default"].createElement(l["default"], i({
                        height: 500
                    }, this.lazyloadOptions), s["default"].createElement(R, null)))
                }
                return render
            }()
        }]),
        Index
    }(s["default"].Component);
    s["default"].render(s["default"].createElement(N, null), document.getElementById("app")),
    $("body").o2lazyload()
}
, function(e, t, n) {
    "use strict";
    n(21).polyfill()
}
, function(e, t, n) {
    e.exports = n(5)(2)
}
, function(e, t, n) {
    e.exports = n(5)(3)
}
, function(e, t) {
    var n = {
        staff: "%c本页面由%c 凹凸实验室（JDC-多终端研发部） %c负责开发，你可以通过 https://aotu.io 了解我们。\n\n如果你对我们在做的事情也有兴趣，欢迎加入 %caotu@jd.com%c（注明来自console）\n\n",
        freshTec: "%c%c",
        funExp: "%c%c"
    };
    !function() {
        if (window.console && console.log && navigator.userAgent.toLowerCase().match(/chrome\/([\d.]+)/)) {
            var e = "font-weight: bold;color: #6190e8;"
              , t = "font-size: 12px;color: #6190e8;";
            console.log(n.staff + n.freshTec + n.funExp, "color: #6190e8;", e, t, e, t, e, t, e, t)
        }
    }()
}
, function(e, t) {
    var n = $(window)
      , i = n.height()
      , o = n.scrollTop()
      , a = new _.Events
      , r = function() {
        return window.innerHeight
    };
    _.eventCenter.on("lazyload:DOMUpdate", function(e) {
        var t = e.detail.$el;
        i = r(),
        a.trigger("lazyload:load", t)
    }),
    n.bind("scroll.o2-lazyload", function(e) {
        o = n.scrollTop(),
        a.trigger("lazyload:load")
    }),
    n.bind("resize.o2-lazyload", function(e) {
        i = r(),
        o = n.scrollTop(),
        a.trigger("lazyload:load")
    });
    var s = {
        setCookie: function() {
            function setCookie(e, t, n, i) {
                if (i || (i = location.hostname),
                arguments.length > 2) {
                    var o = new Date((new Date).getTime() + parseInt(60 * n * 60 * 24 * 30 * 1e3));
                    document.cookie = e + "=" + escape(t) + "; path=/; domain=" + i + "; expires=" + o.toGMTString()
                } else
                    document.cookie = e + "=" + escape(t) + "; path=/; domain=" + i
            }
            return setCookie
        }(),
        getCookie: function() {
            function getCookie(e) {
                try {
                    return null == document.cookie.match(new RegExp("(^" + e + "| " + e + ")=([^;]*)")) ? "" : decodeURIComponent(RegExp.$2)
                } catch (t) {
                    return null == document.cookie.match(new RegExp("(^" + e + "| " + e + ")=([^;]*)")) ? "" : RegExp.$2
                }
            }
            return getCookie
        }(),
        getUrlParams: function() {
            function getUrlParams(e) {
                var t = location.search
                  , n = new RegExp("/^.*[\\?|\\&]" + e + "\\=([^\\&]*)/")
                  , i = t.match(n);
                return null != i ? decodeURIComponent(i[1]) : ""
            }
            return getUrlParams
        }(),
        inviewport: function() {
            var e = function(e, t) {
                return i + o <= e.top - t
            }
              , t = function(e, t) {
                return o >= e.top + t + e.height
            };
            return function(n, i) {
                return !e(n, i) && !t(n, i)
            }
        }()
    }
      , c = function(e) {
        this.$self = e.$self,
        this.webpSupported = !1,
        this.forceOpenWebP = !1,
        this._loadTimer = null,
        this._imgInfo = [],
        this._loaded = {},
        this.settings = e.settings
    };
    c.prototype._setImg = function(e, t, n) {
        t.attr("src", n),
        e.onload = null
    }
    ,
    c.prototype._loadImg = function(e) {
        var t = e.$el
          , n = e.src
          , i = n
          , o = e.webpDisable
          , a = this;
        if (!e.loading) {
            e.loading = !0;
            var r = new Image
              , s = !1
              , c = this.settings;
            this.webpSupported && c.webpReg.test(n) && o !== c.webpDisableValue || this.forceOpenWebP ? i = n + "!q" + c.webpQuality + c.webpSuffix : -1 !== c.quality && (i = n + "!q" + c.quality),
            r.onload = function() {
                s = !0,
                e.loading = !1,
                e.done = !0,
                t.attr(c.source, "done"),
                a._setImg(r, t, i)
            }
            ,
            r.onerror = function() {
                e.webpDisable = "no",
                e.loading = !1
            }
            ,
            r.src = i,
            !0 !== r.complete || s || (s = !0,
            e.loading = !1,
            e.done = !0,
            t.attr(c.source, "done"),
            this._setImg(r, t, i))
        }
    }
    ,
    c.prototype._loadImgs = function() {
        var e = this._imgInfo.length
          , t = this;
        for ($.each(this._imgInfo, function(e, n, i) {
            var o = n.$el;
            !n.done && s.inviewport(n, t.settings.threshold) && (n.src || o.attr("src", t.settings.placeholder),
            t._loadImg(n))
        }); e--; )
            !0 === this._imgInfo[e].done && this._imgInfo.splice(e, 1)
    }
    ,
    c.prototype._update = function() {
        clearTimeout(this._loadTimer),
        this._loadTimer = setTimeout($.proxy(this._loadImgs, this), this.settings.delay)
    }
    ,
    c.prototype._refreshDOMPos = function(e) {
        $.each(this._imgInfo, function(t, n, i) {
            i[t].top = e.offset().top,
            i[t].height = e.height()
        })
    }
    ,
    c.prototype._initEvent = function() {
        var e = this;
        $(document).ready($.proxy(this._update, this)),
        _.eventCenter.on("lazyload:DOMUpdate", function(t) {
            var n = t.detail.$el;
            if ("true" !== n.attr("data-inlazyqueue")) {
                n.attr("data-inlazyqueue", !0);
                var i = e;
                $("img", n).each(function(e, t) {
                    var n = $(t)
                      , o = n.attr(i.settings.source);
                    o && "done" !== o && i._imgInfo.push({
                        $el: n,
                        src: o,
                        done: !1,
                        top: n.offset().top,
                        height: n.height(),
                        loading: !1,
                        webpDisable: n.attr(i.settings.webpDisableKey)
                    })
                })
            }
        }),
        a.on("lazyload:load", $.proxy(this._update, this))
    }
    ,
    c.prototype._isInit = function() {
        return "1" === this.$self.attr(this.settings.source + "-install") || (this.$self.attr(this.settings.source + "-install", "1"),
        !1)
    }
    ,
    c.prototype.init = function(e) {
        if (!this._isInit()) {
            var t = s.getUrlParams(this.settings.forceOpenOrCloseWebP);
            this.webpSupported = e,
            "1" === t && (this.forceOpenWebP = !0),
            this._initEvent()
        }
    }
    ,
    $.fn.o2lazyload = function(e) {
        var t = this
          , n = $(t)
          , i = void 0;
        i = $.extend({
            threshold: 200,
            delay: 100,
            source: "data-lazy-img",
            supportWebp: !0,
            cacheSupportWebp: !0,
            cacheSupportWebpKey: "o2-webp",
            quality: -1,
            webpReg: /\/\/img\d+.360buyimg.com\/.+\.(jpg|png)$/,
            webpSuffix: ".webp",
            webpQuality: 80,
            webpDisableKey: "data-webp",
            webpDisableValue: "no",
            forceOpenOrCloseWebP: "o2-webp",
            placeholder: "//misc.360buyimg.com/lib/img/e/blank.gif"
        }, e);
        var o = new c({
            $self: n,
            settings: i
        });
        return function(e) {
            if ("0" === s.getUrlParams(i.forceOpenOrCloseWebP))
                return void e(null, !1);
            if (!i.supportWebp)
                return void e(null, !1);
            if (i.cacheSupportWebp) {
                var t = s.getCookie(i.cacheSupportWebpKey);
                if ("" !== t)
                    return void ("true" === t || !0 === t ? e(null, !0) : e(null, !1))
            }
            var n = new Image;
            n.onload = function() {
                var t = n.width > 0 && n.height > 0;
                e(null, t),
                i.cacheSupportWebp && s.setCookie(i.cacheSupportWebpKey, t, 1)
            }
            ,
            n.onerror = function() {
                e(null, !1),
                i.cacheSupportWebp && s.setCookie(i.cacheSupportWebpKey, !1, 1)
            }
            ,
            n.src = "data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA"
        }(function(e, t) {
            e ? o.init(!1) : o.init(t)
        }),
        this
    }
}
, function(e, t, n) {
    function _classCallCheck(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function _possibleConstructorReturn(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function _inherits(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    function isWebpackReady(e) {
        return "object" === o(n.m) && e().every(function(e) {
            return void 0 !== e && "undefined" != typeof n.m[e]
        })
    }
    function load(e) {
        var t = e()
          , n = {
            loading: !0,
            loaded: null,
            error: null
        };
        return n.promise = t.then(function(e) {
            return n.loading = !1,
            n.loaded = e,
            e
        })["catch"](function(e) {
            throw n.loading = !1,
            n.error = e,
            e
        }),
        n
    }
    function loadMap(e) {
        var t = {
            loading: !1,
            loaded: {},
            error: null
        }
          , n = [];
        try {
            Object.keys(e).forEach(function(i) {
                var o = load(e[i]);
                o.loading ? t.loading = !0 : (t.loaded[i] = o.loaded,
                t.error = o.error),
                n.push(o.promise),
                o.promise.then(function(e) {
                    t.loaded[i] = e
                })["catch"](function(e) {
                    t.error = e
                })
            })
        } catch (i) {
            t.error = i
        }
        return t.promise = Promise.all(n).then(function(e) {
            return t.loading = !1,
            e
        })["catch"](function(e) {
            throw t.loading = !1,
            e
        }),
        t
    }
    function resolve(e) {
        return e && e.__esModule ? e["default"] : e
    }
    function render(e, t) {
        return r["default"].createElement(resolve(e), t)
    }
    function createLoadableComponent(e, t) {
        function init() {
            return o || (o = e(n.loader)),
            o.promise
        }
        if (!t.loading)
            throw new Error("Nerv-loadable requires a `loading` component");
        var n = Object.assign({
            loader: null,
            loading: null,
            delay: 200,
            timeout: null,
            render: render,
            webpack: null,
            modules: null
        }, t)
          , o = null;
        return s.push(init),
        "function" == typeof n.webpack && c.push(function() {
            if (isWebpackReady(n.webpack))
                return init()
        }),
        function(e) {
            function LoadableComponent(e) {
                _classCallCheck(this, LoadableComponent);
                var t = _possibleConstructorReturn(this, (LoadableComponent.__proto__ || Object.getPrototypeOf(LoadableComponent)).call(this, e));
                return init(),
                t.state = {
                    error: o.error,
                    pastDelay: !1,
                    timedOut: !1,
                    loading: o.loading,
                    loaded: o.loaded
                },
                t
            }
            return _inherits(LoadableComponent, e),
            i(LoadableComponent, [{
                key: "componentWillMount",
                value: function() {
                    function componentWillMount() {
                        var e = this;
                        if (this._mounted = !0,
                        this.context.loadable && Array.isArray(n.modules) && n.modules.forEach(function(t) {
                            e.context.loadable.report(t)
                        }),
                        o.loading) {
                            "number" == typeof n.delay && (0 === n.delay ? this.setState({
                                pastDelay: !0
                            }) : this._delay = setTimeout(function() {
                                e.setState({
                                    pastDelay: !0
                                })
                            }, n.delay)),
                            "number" == typeof n.timeout && (this._timeout = setTimeout(function() {
                                e.setState({
                                    timedOut: !0
                                })
                            }, n.timeout));
                            var t = function() {
                                function update() {
                                    e._mounted && (e.setState({
                                        error: o.error,
                                        loaded: o.loaded,
                                        loading: o.loading
                                    }),
                                    e._clearTimeouts())
                                }
                                return update
                            }();
                            o.promise.then(function() {
                                t()
                            })["catch"](function(e) {
                                throw t(),
                                e
                            })
                        }
                    }
                    return componentWillMount
                }()
            }, {
                key: "componentWillUnmount",
                value: function() {
                    function componentWillUnmount() {
                        this._mounted = !1,
                        this._clearTimeouts()
                    }
                    return componentWillUnmount
                }()
            }, {
                key: "_clearTimeouts",
                value: function() {
                    function _clearTimeouts() {
                        clearTimeout(this._delay),
                        clearTimeout(this._timeout)
                    }
                    return _clearTimeouts
                }()
            }, {
                key: "render",
                value: function() {
                    function render() {
                        return this.state.loading || this.state.error ? r["default"].createElement(n.loading, {
                            isLoading: this.state.loading,
                            pastDelay: this.state.pastDelay,
                            timedOut: this.state.timedOut,
                            error: this.state.error
                        }) : this.state.loaded ? n.render(this.state.loaded, this.props) : null
                    }
                    return render
                }()
            }], [{
                key: "preload",
                value: function() {
                    function preload() {
                        return init()
                    }
                    return preload
                }()
            }]),
            LoadableComponent
        }(r["default"].Component)
    }
    function Loadable(e) {
        return createLoadableComponent(load, e)
    }
    function LoadableMap(e) {
        if ("function" != typeof e.render)
            throw new Error("LoadableMap requires a `render(loaded, props)` function");
        return createLoadableComponent(loadMap, e)
    }
    function flushInitializers(e) {
        for (var t = []; e.length; ) {
            var n = e.pop();
            t.push(n())
        }
        return Promise.all(t).then(function() {
            if (e.length)
                return flushInitializers(e)
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
        function defineProperties(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(e, t, n) {
            return t && defineProperties(e.prototype, t),
            n && defineProperties(e, n),
            e
        }
    }()
      , o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
      , a = n(4)
      , r = function(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }(a)
      , s = []
      , c = [];
    Loadable.Map = LoadableMap;
    var l = function(e) {
        function Capture() {
            return _classCallCheck(this, Capture),
            _possibleConstructorReturn(this, (Capture.__proto__ || Object.getPrototypeOf(Capture)).apply(this, arguments))
        }
        return _inherits(Capture, e),
        i(Capture, [{
            key: "getChildContext",
            value: function() {
                function getChildContext() {
                    return {
                        loadable: {
                            report: this.props.report
                        }
                    }
                }
                return getChildContext
            }()
        }, {
            key: "render",
            value: function() {
                function render() {
                    return this.props.children[0]
                }
                return render
            }()
        }]),
        Capture
    }(r["default"].Component);
    Loadable.Capture = l,
    Loadable.preloadAll = function() {
        return new Promise(function(e, t) {
            flushInitializers(s).then(e, t)
        }
        )
    }
    ,
    Loadable.preloadReady = function() {
        return new Promise(function(e, t) {
            flushInitializers(c).then(e, e)
        }
        )
    }
    ,
    t["default"] = Loadable
}
, function(e, t) {}
, function(e, t) {
    e.exports = function(e) {
        var t = "undefined" != typeof window && window.location;
        if (!t)
            throw new Error("fixUrls requires window.location");
        if (!e || "string" != typeof e)
            return e;
        var n = t.protocol + "//" + t.host
          , i = n + t.pathname.replace(/\/[^\/]*$/, "/");
        return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(e, t) {
            var o = t.trim().replace(/^"(.*)"$/, function(e, t) {
                return t
            }).replace(/^'(.*)'$/, function(e, t) {
                return t
            });
            if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))
                return e;
            var a;
            return a = 0 === o.indexOf("//") ? o : 0 === o.indexOf("/") ? n + o : i + o.replace(/^\.\//, ""),
            "url(" + JSON.stringify(a) + ")"
        })
    }
}
, function(e, t) {}
, function(e, t, n) {
    e.exports = n(5)(6)
}
, function(e, t, n) {
    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    ;
    n(7);
    var o = n(0)
      , a = n(2)
      , r = n(1)
      , s = n(3);
    n(9),
    n(10),
    n(11);
    var c = n(32)
      , l = _interopRequireDefault(c);
    n(12);
    var d = n(13)
      , u = _interopRequireDefault(d);
    n(33);
    var f = n(34)
      , p = _interopRequireDefault(f);
    n(35),
    n(36);
    var h = n(37)
      , m = _interopRequireDefault(h)
      , g = n(38)
      , v = _interopRequireDefault(g)
      , _ = n(39)
      , y = _interopRequireDefault(_);
    n(40);
    var b = '<div class="dd-spacer"></div><div class="dd-inner"><span class="loading"></span></div>'
      , w = function() {
        (0,
        l["default"])()
    }
      , k = function() {
        var e = r.CONSTS.CLSTAGPREFIX + "|head|search";
        (0,
        o.loadAsync)({
            url: r.APIS.HOTWORDS,
            params: {
                pin: s.USER.pin,
                uuid: s.USER.uuid
            },
            backup: [r.APIS.HOTWORDS_STOBACKUP],
            charset: "utf-8",
            cache: !0,
            name: "jsonpHotWords"
        }).then(function(t) {
            if (t && "object" === (void 0 === t ? "undefined" : i(t))) {
                var n = t.data
                  , o = ""
                  , a = []
                  , r = 0
                  , s = 0
                  , c = $("#key")
                  , l = $("#search .button");
                if ($.each(n, function(t, n) {
                    if (n.n)
                        if (2 === n.c && r++ < 10)
                            a.push(n);
                        else if (s < 9) {
                            var i = 1 === n.c ? 'class="style-red"' : "";
                            o += '<a href="' + n.u + '" target="_blank" ' + i + ' clstag="' + e + '|04">' + n.n + "</a>",
                            s++
                        }
                }),
                $("#hotwords").html(o),
                a.length) {
                    var d = 0
                      , u = a.length
                      , f = void 0
                      , p = !1
                      , h = void 0
                      , m = void 0;
                    m = function(e) {
                        clearTimeout(f),
                        p = e,
                        e && (h = a[d],
                        c.val(h.n),
                        f = setTimeout(function() {
                            d = (d + 1) % u,
                            m(!0)
                        }, 6e3))
                    }
                    ,
                    c.bind("focus", function() {
                        m(!1),
                        c.val() === h.n && c.val("").css("color", "#333")
                    }).bind("blur", function() {
                        c.val() || (m(!0),
                        c.val(h.n).css("color", "#999"))
                    }),
                    c.removeAttr("onkeydown"),
                    c.bind("keydown", function(e) {
                        if (13 === e.keyCode)
                            return search("key"),
                            m(!1),
                            !1
                    }),
                    l.removeAttr("onclick"),
                    l.bind("click", function(e) {
                        return p ? search("key", h.d || h.n) : search("key"),
                        m(!1),
                        !1
                    }),
                    c.is(":focus") || m(!0)
                }
            }
        })
    }
      , C = function() {
        var e = $(window)
          , t = $("#search")
          , n = !1
          , i = function() {
            e.scrollTop() > 660 && !1 === n ? (n = !0,
            t.addClass("search-fix")) : e.scrollTop() <= 660 && !0 === n && (n = !1,
            t.removeClass("search-fix"))
        };
        e.bind("scroll.searchFix", (0,
        o.throttle)(function() {
            i()
        }, 100)),
        i()
    }
      , S = function() {
        (0,
        y["default"])()
    }
      , x = function() {
        $("#ttbar-mycity").html('\n    <div class="dt cw-icon ui-areamini-text-wrap" style="display:none;">\n      <i class="ci-right"><s>◇</s></i>\n      <i class="ci-left"></i>\n      <span class="ui-areamini-text"></span> \n    </div>\n    <div class="dd dorpdown-layer">\n      <div class="dd-spacer"></div>\n      <div class="ui-areamini-content-wrap"> \n        <div class="ui-areamini-content"></div> \n      </div> \n    </div>').areamini({
            hasCssLink: !1,
            className: {
                hover: "hover",
                selected: "selected"
            },
            provinceList: [],
            tplContentWrap: '<div class="ui-areamini-content-list"><%=list%></div>',
            tplContentItem: '<div class="item"><a data-id="<%=id%>" href="javascript:void(0)"><%=name%></a></div>',
            syncServer: !0,
            writeCookie: !1,
            threeWordDeal: function() {
                function threeWordDeal(e) {
                    var t = e.find(".ui-areamini-text").html()
                      , n = e.find(".dd-spacer");
                    3 === t.length ? n.addClass("dd-spacer-extend") : n.removeClass("dd-spacer-extend")
                }
                return threeWordDeal
            }(),
            onReady: function() {
                function onReady(e) {
                    this.el.find(".ui-areamini-text-wrap").show();
                    var t = (0,
                    u["default"])("areaId");
                    if (p["default"].check() && t) {
                        var n = "areaId";
                        p["default"].get(n) ? p["default"].get(n) !== t && (p["default"].set(n, t),
                        p["default"].clearByReg("^jd_home_2015_")) : p["default"].set(n, t)
                    }
                    this.options.threeWordDeal(this.el)
                }
                return onReady
            }(),
            onChange: function() {
                function onChange(e, t, n) {
                    this.options.threeWordDeal(this.el),
                    void 0 !== t && window.location.reload()
                }
                return onChange
            }()
        })
    }
      , j = function() {
        (0,
        m["default"])()
    }
      , I = function() {
        (0,
        v["default"])({
            $userName: $("#ttbar-login")
        })
    }
      , T = function() {
        var e = $("#J_mobile")
          , t = $("#J_mobile_pop")
          , i = !1
          , o = null
          , r = Date.now();
        e.bind("mouseenter", function(a) {
            r = Date.now(),
            clearTimeout(o),
            o = setTimeout(function() {
                e.addClass("mobile_on"),
                i || (i = !0,
                n.e(14).then(n.bind(null, 59)).then(function(e) {
                    (0,
                    e["default"])({
                        $el: t
                    })
                }))
            }, 200)
        }),
        e.bind("mouseleave", function(t) {
            clearTimeout(o),
            e.removeClass("mobile_on"),
            Date.now() - r < 1e3 || (0,
            a.logImpr)({
                poi: "head|topbar|qrcode"
            })
        })
    }
      , P = function() {
        $("#ttbar-serv .dd").html(b);
        var e;
        $("#ttbar-serv").dropdown({
            enterDelay: 50,
            trigger: !0,
            current: "hover",
            onchange: function() {
                function onchange(t) {
                    e = Date.now(),
                    t.attr("data-load") || (t.attr("data-load", 1),
                    (0,
                    o.loadAsync)({
                        url: "//dc.3.cn/client/get",
                        backup: "//d.jd.com/client/get",
                        dataType: "jsonp",
                        charset: "gb2312",
                        cache: !0,
                        jsonpCallback: "getClientCallback"
                    }).then(function(e) {
                        if (e && "object" === (void 0 === e ? "undefined" : i(e))) {
                            e = e.data;
                            var t = '<div class="dd-spacer"></div>'
                              , n = ['<div class="item-client">客户</div>']
                              , o = ['<div class="item-business">商户</div>'];
                            $.each(e, function(t) {
                                var i = e[t]
                                  , a = !i.type;
                                0 === i.c && n.push('<div class="item"><a href="' + i.u + '" target="_blank" ' + a + ">" + i.n + "</a></div>"),
                                1 === i.c && o.push('<div class="item"><a href="' + i.u + '" target="_blank" ' + a + ">" + i.n + "</a></div>")
                            }),
                            t += n.join(""),
                            o.length > 1 && (t += o.join("")),
                            $("#ttbar-serv .dd").html(t)
                        }
                    }))
                }
                return onchange
            }(),
            onmouseleave: function() {
                function onmouseleave() {
                    !e || Date.now() - e < 1e3 || (e = null,
                    (0,
                    a.logImpr)({
                        poi: "head|topbar|client"
                    }))
                }
                return onmouseleave
            }()
        })
    }
      , A = function() {
        $("#ttbar-navs .dd").html(b);
        var e;
        $("#ttbar-navs").dropdown({
            enterDelay: 50,
            trigger: !0,
            current: "hover",
            leaveDelay: 100,
            onchange: function() {
                function onchange(t) {
                    e = Date.now(),
                    t.attr("data-load") || (t.attr("data-load", 1),
                    (0,
                    o.loadAsync)({
                        url: "//dc.3.cn/navigation/get",
                        backup: "//d.jd.com/navigation/get",
                        dataType: "jsonp",
                        charset: "gb2312",
                        cache: !0,
                        jsonpCallback: "getNavigationCallback"
                    }).then(function(e) {
                        if (e && "object" === (void 0 === e ? "undefined" : i(e))) {
                            e = e.data;
                            var t = '<div class="dd-spacer"></div>';
                            $.each(e, function(n) {
                                var i = e[n]
                                  , o = i.s
                                  , a = "";
                                $.each(o, function(e) {
                                    var t = o[e]
                                      , n = t.c ? 'class="' + t.c + '"' : "";
                                    a += '<div class="item"><a href="' + t.u + '" target="_blank" ' + n + ">" + t.n + "</a></div>"
                                });
                                var r = i.n
                                  , s = i.c ? 'class="' + i.c + '"' : "";
                                i.u && (r = '<a href="' + i.u + '" target="_blank" ' + s + ">" + i.n + "</a>"),
                                t += '<dl class="fore' + (n + 1) + '">\n              <dt>' + r + "</dt>\n              <dd>" + a + "</dd>\n            </dl>"
                            }),
                            $("#ttbar-navs .dd").html(t)
                        }
                    }))
                }
                return onchange
            }(),
            onmouseleave: function() {
                function onmouseleave() {
                    !e || Date.now() - e < 1e3 || (e = null,
                    (0,
                    a.logImpr)({
                        poi: "head|topbar|website"
                    }))
                }
                return onmouseleave
            }()
        })
    }
      , E = function() {
        $("#ttbar-mycity .ui-areamini-text-wrap").prepend('<i class="iconfont">&#xe604;</i>'),
        (0,
        o.getUserinfo)().then(function(e) {
            e.isCompany && $("#shortcut li.fore4 a").attr("href", "//sale.jd.com/act/rw4GgcjhpSQ.html")
        })
    }
      , L = function() {
        w(),
        k(),
        C(),
        S(),
        x(),
        j(),
        I(),
        T(),
        P(),
        A(),
        E()
    };
    t["default"] = L
}
, function(e, t, n) {
    var i;
    (i = function(e, t, n) {
        return function(e) {
            e = $.extend({
                el: $("#loginbar,#ttbar-login"),
                callback: null
            }, e || {});
            $.ajax({
                url: function() {
                    return "https:" == document.location.protocol ? "https://" : "http://"
                }() + "passport.jd.com/new/helloService.ashx",
                dataType: "jsonp",
                scriptCharset: "GBK",
                success: function() {
                    function success(t) {
                        if (!t)
                            return !1;
                        t.info && e.el.html(t.info);
                        var n = function() {
                            function callback() {
                                clearTimeout(i),
                                $.isFunction(e.callback) && e.callback(t),
                                n = $.noop
                            }
                            return callback
                        }()
                          , i = setTimeout(function() {
                            n()
                        }, 2e3);
                        if (t.sso) {
                            var o = t.sso.length;
                            $.each(t.sso, function(e, t) {
                                $.getJSON(t).complete(function() {
                                    0 == --o && n()
                                })
                            })
                        } else
                            n()
                    }
                    return success
                }()
            })
        }
    }
    .call(t, n, t, e)) !== undefined && (e.exports = i)
}
, function(e, t, n) {
    var i;
    (i = function(e, t, n) {
        function init() {
            document.onkeyup = function(e) {
                var t = document.activeElement.tagName.toLowerCase();
                if ("input" != t && "textarea" != t) {
                    var e = e || window.event;
                    switch (e.keyCode || e.which) {
                    case 68:
                        window.pageConfig.clientViewTop || (window.pageConfig.clientViewTop = 0),
                        window.pageConfig.clientViewTop += document.documentElement.clientHeight,
                        window.scrollTo(0, pageConfig.clientViewTop);
                        break;
                    case 83:
                        window.scrollTo(0, 0),
                        window.pageConfig.clientViewTop = 0,
                        document.getElementById("key").focus();
                        break;
                    case 84:
                        window.scrollTo(0, 0),
                        window.pageConfig.clientViewTop = 0
                    }
                }
            }
        }
        return init
    }
    .call(t, n, t, e)) !== undefined && (e.exports = i)
}
, function(e, t) {
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    ;
    window.searchlog = window.searchlog || function() {
        var e = "//sstat." + pageConfig.FN_getDomain() + "/scslog?args="
          , t = "{keyword}^#psort#^#page#^#cid#^" + encodeURIComponent(document.referrer)
          , n = "2"
          , i = ""
          , o = "";
        return function() {
            function searchlog() {
                var a = ""
                  , r = ""
                  , s = ""
                  , c = "0";
                if (arguments.length > 0)
                    if (0 == arguments[0])
                        a = e + n + "^" + t + "^^^58^^" + o + "^" + i;
                    else if (1 == arguments[0]) {
                        a = 10 != n ? e + "1^" + t + "^" : e + "11^" + t + "^";
                        for (var l = 1; l < arguments.length; l++)
                            a += encodeURI(arguments[l]) + "^";
                        arguments.length > 3 && "51" == arguments[3] && (r = arguments[1]),
                        arguments.length > 3 && "55" == arguments[3] && (s = arguments[1]),
                        arguments.length > 3 && "56" == arguments[3] && (c = arguments[1]);
                        for (var l = 0, d = 5 - arguments.length; l < d; l++)
                            a += "^";
                        a += o + "^" + i
                    }
                a = a.replace("#cid#", r),
                a = a.replace("#psort#", s),
                a = a.replace("#page#", c),
                $.getScript(a);
                try {
                    JA.tracker.ngloader("search.000006", {
                        url: window.location.href
                    })
                } catch (u) {}
            }
            return searchlog
        }()
    }(),
    window.search = function(e, t) {
        var i, o = "//search.jd.com/Search?keyword={keyword}&enc={enc}{additional}", a = search.additinal || "";
        if ("string" == typeof t && "" != t ? a += "&spm=a.0.0" : t = document.getElementById(e).value,
        t = t.replace(/^\s*(.*?)\s*$/, "$1"),
        t.length > 100 && (t = t.substring(0, 100)),
        "" == t)
            return void (window.location.href = window.location.href);
        var r = 0;
        "undefined" != typeof window.pageConfig && "undefined" != typeof window.pageConfig.searchType && (r = window.pageConfig.searchType);
        var s = "&cid{level}={cid}"
          , c = "string" == typeof search.cid ? search.cid : ""
          , l = "string" == typeof search.cLevel ? search.cLevel : ""
          , d = "string" == typeof search.ev_val ? search.ev_val : "";
        switch (r) {
        case 0:
            break;
        case 1:
            l = "-1",
            a += "&book=y";
            break;
        case 2:
            l = "-1",
            a += "&mvd=music";
            break;
        case 3:
            l = "-1",
            a += "&mvd=movie";
            break;
        case 4:
            l = "-1",
            a += "&mvd=education";
            break;
        case 5:
            var u = "&other_filters=%3Bcid1%2CL{cid1}M{cid1}[cid2]";
            switch (l) {
            case "51":
                s = u.replace(/\[cid2]/, ""),
                s = s.replace(/\{cid1}/g, "5272");
                break;
            case "52":
                s = u.replace(/\{cid1}/g, "5272"),
                s = s.replace(/\[cid2]/, "%3Bcid2%2CL{cid}M{cid}");
                break;
            case "61":
                s = u.replace(/\[cid2]/, ""),
                s = s.replace(/\{cid1}/g, "5273");
                break;
            case "62":
                s = u.replace(/\{cid1}/g, "5273"),
                s = s.replace(/\[cid2]/, "%3Bcid2%2CL{cid}M{cid}");
                break;
            case "71":
                s = u.replace(/\[cid2]/, ""),
                s = s.replace(/\{cid1}/g, "5274");
                break;
            case "72":
                s = u.replace(/\{cid1}/g, "5274"),
                s = s.replace(/\[cid2]/, "%3Bcid2%2CL{cid}M{cid}");
                break;
            case "81":
                s = u.replace(/\[cid2]/, ""),
                s = s.replace(/\{cid1}/g, "5275");
                break;
            case "82":
                s = u.replace(/\{cid1}/g, "5275"),
                s = s.replace(/\[cid2]/, "%3Bcid2%2CL{cid}M{cid}")
            }
            o = "//search-e.jd.com/searchDigitalBook?ajaxSearch=0&enc=utf-8&key={keyword}&page=1{additional}";
            break;
        case 6:
            l = "-1",
            o = "//music.jd.com/8_0_desc_0_0_1_15.html?key={keyword}";
            break;
        case 7:
            o = "//s-e.jd.com/Search?key={keyword}&enc=utf-8";
            break;
        case 8:
            o = "//search.jd.hk/Search?keyword={keyword}&enc=utf-8";
            break;
        case 9:
            a += "&market=1";
            break;
        case 10:
            a += "&gp=2"
        }
        if ("string" == typeof c && "" != c && "string" == typeof l) {
            var f = /^(?:[1-8])?([1-3])$/;
            l = "-1" == l ? "" : f.test(l) ? RegExp.$1 : "";
            var p = s.replace(/\{level}/, l);
            p = p.replace(/\{cid}/g, c),
            a += p
        }
        if ("string" == typeof d && "" != d && (a += "&ev=" + d),
        t = encodeURIComponent(t),
        i = o.replace(/\{keyword}/, t),
        i = i.replace(/\{enc}/, "utf-8"),
        i = i.replace(/\{additional}/, a),
        "object" === ("undefined" == typeof $o ? "undefined" : n($o)) && ("string" == typeof $o.lastKeyword && (i += "&wq=" + encodeURIComponent($o.lastKeyword)),
        "string" == typeof $o.pvid && (i += "&pvid=" + $o.pvid)),
        i.indexOf("/search.jd.com/") > 0)
            try {
                JA.tracker.ngloader("search.000009", {
                    "key": t,
                    "posid": e,
                    "target": i
                })
            } catch (h) {}
        "undefined" != typeof search.isSubmitted && 0 != search.isSubmitted || (setTimeout(function() {
            window.location.href = i
        }, 50),
        search.isSubmitted = !0)
    }
    ,
    window.$o = function(e) {
        function SearchBox() {
            this.length = 0,
            this.index = -1,
            this.iLastModified = 0,
            this.lastKeyword = !1,
            this.keep_keyword = "",
            this.pvid = s,
            this.enable_remind = !0,
            this.IME = !1
        }
        var t = $("#key");
        if (!(t.length < 1)) {
            var i = {};
            i.replace = function(e, t) {
                return e.replace(/#{(.*?)}/g, function() {
                    var e = arguments[1];
                    return "undefined" != typeof t[e] ? t[e] : arguments[0]
                })
            }
            ,
            i.genPvid = function() {
                var e = (new Date).getTime();
                return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(t) {
                    var n = (e + 16 * Math.random()) % 16 | 0;
                    return e = Math.floor(e / 16),
                    ("x" == t ? n : 3 & n | 8).toString(16)
                })
            }
            ,
            i.getQueryString = function(t, n) {
                var i = new RegExp("(^|\\?|&)" + t + "=([^&]*)(\\s|&|$)","i")
                  , o = n || e.location.search;
                return i.test(o) ? RegExp.$2 : ""
            }
            ,
            i.htmlspecialchars = function(e) {
                return "string" == typeof e ? e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : ""
            }
            ,
            i.htmlspecialcharsDecode = function(e) {
                return "string" == typeof e ? e.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&quot;/g, '"') : ""
            }
            ,
            String.prototype.isEmpty = function() {
                return 0 == this.length
            }
            ,
            i.textSelect = function(e, t, n) {
                if ("string" == typeof e && (e = document.getElementById(e)),
                e) {
                    var i = 1 * t
                      , o = 1 * n
                      , a = e.value.length;
                    if (a)
                        if (i || (i = 0),
                        o || (o = a),
                        i > a && (i = a),
                        i < 0 && (i = a + i),
                        o < 0 && (o = a + o),
                        e.createTextRange) {
                            var r = e.createTextRange();
                            r.moveStart("character", -a),
                            r.moveEnd("character", -a),
                            r.moveStart("character", i),
                            r.moveEnd("character", o),
                            r.select()
                        } else
                            e.setSelectionRange(i, o),
                            e.focus()
                }
            }
            ,
            i.getSelectText = function(e) {
                return document.selection ? document.selection.createRange().text : e ? e.value.substring(e.selectionStart, e.selectionEnd) : ""
            }
            ;
            var o = '<a style="color:#005AA0" onclick="$o.del(event)">删除</a>'
              , a = $("#shelper")
              , r = null != navigator.userAgent.toLowerCase().match(/chrome/)
              , s = i.genPvid()
              , c = "//hiswd.jd.com/?pvid=" + s
              , l = function(e) {
                var t = ""
                  , n = "";
                switch (e.location.host) {
                case "cn.jd.com":
                case "global.jd.com":
                    t += "//suggest-squanqiu.jd.com/?terminal=shouquanqiu";
                    break;
                default:
                    t += "//dd-search.jd.com/?terminal=pc"
                }
                if (t += "&ver=2&zip=1&key=#{keyword}&pvid=" + s + "&t=#{time}&curr_url=" + encodeURIComponent(e.location.host + e.location.pathname),
                e.QUERY_KEYWORD && (t += "&search_key=" + encodeURIComponent(e.QUERY_KEYWORD)),
                e.pageConfig && e.pageConfig.product && e.pageConfig.product.cat)
                    n = "&cid1=" + (e.pageConfig.product.cat[0] || ""),
                    n += "&cid2=" + (e.pageConfig.product.cat[1] || ""),
                    n += "&cid3=" + (e.pageConfig.product.cat[2] || "");
                else if ("list.jd.com" == e.location.host)
                    if (e.pageConfig && e.pageConfig.queryParam)
                        n = "&cid1=" + (e.pageConfig.queryParam.c1 || ""),
                        n += "&cid2=" + (e.pageConfig.queryParam.c2 || ""),
                        n += "&cid3=" + (e.pageConfig.queryParam.c3 || "");
                    else {
                        var o = decodeURIComponent(i.getQueryString("cat")).split(",");
                        n = "&cid1=" + (o[0] || ""),
                        n += "&cid2=" + (o[1] || ""),
                        n += "&cid3=" + (o[2] || "")
                    }
                return t + n
            }(e);
            SearchBox.prototype.init = function() {
                this.length = 0,
                this.index = -1,
                this.version = 0,
                search.additinal = ""
            }
            ,
            SearchBox.prototype.hideTip = function() {
                this.init(),
                this.lastKeyword = !1;
                var e = i.getSelectText(t[0]);
                this.keep_keyword && e && this.keep_keyword + e == t.val() && t.val(this.keep_keyword),
                a.html("").hide()
            }
            ,
            SearchBox.prototype.clickItem = function(e) {
                var n = e.getAttribute("cid")
                  , o = "&suggest=" + e.getAttribute("suggest-pos") + "." + this.version;
                search.cid = null != n && "" != n ? n : null;
                var a = e.getAttribute("cLevel");
                search.cLevel = null != a && "" != a ? a : null;
                var r = e.getAttribute("title");
                null == r || $.trim(r).isEmpty() || t.val(i.htmlspecialcharsDecode(r)),
                null !== e.getAttribute("gp") && (o += "&gp=1"),
                null !== e.getAttribute("act") && (o += e.getAttribute("act")),
                search.additinal = o,
                search("key")
            }
            ,
            SearchBox.prototype.mouseenter = function(e) {
                var e = $(e);
                e.attr("history") && e.find(".search-count").html(o),
                e.hasClass("J_shop_box") ? e.find(".name").css("text-decoration", "underline") : e.css("background", "#FFDFC6");
                var t = e.attr("id").split("_")
                  , n = parseInt(t[1], 10);
                if (n != this.index) {
                    if (this.index > -1) {
                        var i = $("#d_" + this.index);
                        i.css("background", "#FFF"),
                        i.attr("history") && i.find(".search-count").html("搜索历史"),
                        i.hasClass("J_shop_box") && i.find(".name").css("text-decoration", "none")
                    }
                    this.index = n
                }
            }
            ,
            SearchBox.prototype.mouseleave = function(e) {
                e.css("background", "#FFF"),
                e.attr("history") && e.find(".search-count").html("搜索历史")
            }
            ,
            SearchBox.prototype.selectItemNode = function(e) {
                var n = this
                  , a = $("#d_" + n.index + ":visible");
                a.css("background-color", "#FFF"),
                a.attr("history") && a.find(".search-count").html("搜索历史"),
                a.hasClass("J_shop_box") && a.find(".name").css("text-decoration", "none"),
                -1 == n.index && -1 == e && (e = 0),
                n.index = (n.length + n.index + e) % n.length;
                var r = $("#d_" + n.index)
                  , s = "&suggest=" + r.attr("suggest-pos") + "." + n.version;
                if (r.length > 0) {
                    r.attr("history") && r.find(".search-count").html(o),
                    r.hasClass("J_shop_box") ? r.find(".name").css("text-decoration", "underline") : r.css("background-color", "#FFDFC6");
                    var c = r.attr("title");
                    null == c || $.trim(c).isEmpty() || t.val(i.htmlspecialcharsDecode(c));
                    var l = r.attr("cid");
                    search.cid = null != l && "" != l ? l : null;
                    var d = r.attr("cLevel");
                    search.cLevel = null != d && "" != d ? d : null,
                    void 0 !== r.attr("gp") && (s += "&gp=1"),
                    void 0 !== r.attr("act") && (s += r.attr("act")),
                    search.additinal = s
                }
            }
            ,
            SearchBox.prototype.input = function() {
                var e = this;
                e.timeoutId && clearTimeout(e.timeoutId),
                e.timeoutId = setTimeout(function() {
                    var n = $.trim(t.val());
                    if (n === e.lastKeyword)
                        return !1;
                    e.lastKeyword = n,
                    $.ajax({
                        url: n ? i.replace(l, {
                            keyword: encodeURIComponent(n),
                            time: (new Date).getTime()
                        }) : c,
                        dataType: "jsonp",
                        scriptCharset: "utf-8",
                        jsonp: "callback",
                        cache: !0,
                        success: function(t) {
                            return function(n) {
                                e.iLastModified > t || (e.iLastModified = t,
                                e.onloadItems(n))
                            }
                        }((new Date).getTime())
                    })
                }, 150)
            }
            ,
            SearchBox.prototype.keydown_up = function(n) {
                var i = this
                  , o = n || e.event;
                0 == t.length && (t = $("#key")),
                0 == a.length && (a = $("tie"));
                var r = o.keyCode;
                switch (r) {
                case 38:
                    i.selectItemNode(-1);
                    break;
                case 40:
                    i.selectItemNode(1);
                    break;
                case 27:
                    i.hideTip();
                    break;
                case 37:
                case 39:
                    break;
                default:
                    i.IME = 229 == r,
                    8 == r || 46 == r ? i.disableRemind() : i.enable_remind = !0,
                    $.browser.mozilla || i.input()
                }
            }
            ,
            SearchBox.prototype.onloadItems = function(o) {
                if (!o || !o.length)
                    return this.hideTip(),
                    !1;
                this.init();
                var r = this
                  , s = e.pageConfig && e.pageConfig.searchType ? e.pageConfig.searchType : 0
                  , c = 1
                  , l = ""
                  , d = ""
                  , u = 0
                  , f = 0
                  , p = 0
                  , h = o.length
                  , m = i.htmlspecialchars(t.val());
                for (o[h - 1] && o[h - 1].version && (r.version = o[h - 1].version); u < h; u++) {
                    var g = o[u];
                    if (g.rem && r.remindKey(g.rem.rei, g.rem.req),
                    !(!g || !g.key && !g.sho || g.sho && 0 != p || g.key == m && 0 != p)) {
                        var v = i.htmlspecialchars(g.key)
                          , _ = g.his ? "搜索历史" : i.replace("约#{amount}个商品", {
                            amount: g.qre
                        })
                          , y = g.his ? 'history="1"' : ""
                          , b = g.his ? 'style="color:#005AA0"' : ""
                          , w = v.indexOf(m)
                          , k = v;
                        if (m.length && 0 == w && !g.his && (k = m + "<strong>" + v.substring(w + m.length) + "</strong>"),
                        0 == p) {
                            if (g.sho) {
                                if ("object" == n(g.sho) && g.sho.length && g.sho[0].sid) {
                                    var C = g.sho[0];
                                    d += i.replace('<div id="d_#{id}" class="bs-item J_shop_box"><a class="logo" href="//mall.jd.com/index-#{shop_id}.html"><img width="90" height="30" src="#{shop_logo}"/></a><a class="name" href="//mall.jd.com/index-#{shop_id}.html">#{shop_name}</a></div>', {
                                        id: ++f,
                                        shop_id: C.sid,
                                        shop_name: C.sna,
                                        shop_logo: "//img30.360buyimg.com/n1/s90x30_" + C.spi
                                    }),
                                    l += i.replace('<li class="brand-search"><div id="d_#{id}" class="info J_shop_box" style="cursor:default;">#{guide}</div>#{categorys}</li>', {
                                        id: 0,
                                        guide: C.ssq,
                                        categorys: d
                                    }),
                                    p++
                                }
                                continue
                            }
                            if (0 != s && 1 != s || (g.ptt && g.pul && (d += i.replace('<div id="d_#{id}" class="#{className}"><a href="#{link}" style="float:left;width:100%;">#{prom_name}</a></div>', {
                                id: ++f,
                                className: "item1",
                                link: g.pul + (g.pul.indexOf("?") > 0 ? "&" : "?") + "suggest=1.prom.0." + r.version + "&wq=" + encodeURIComponent(t.val()),
                                prom_name: g.ptt.replace("&", ' <img src="' + g.ppc + '"> ')
                            })),
                            g.acq && g.acu && (d += i.replace('<div id="d_#{id}" suggest-pos="#{suggest_pos}" class="#{className}" title="#{title}" act="#{act_value}" onclick="$o.clickItem(this)"><div class="search-item">在#{act_name}中搜索</div><div class="search-count">约#{amount}个商品</div></div>', {
                                id: ++f,
                                title: v,
                                className: "item1",
                                act_name: g.acp ? ' <img src="//img11.360buyimg.com/img/' + g.acp + '"> ' : "<strong> " + g.acq + " </strong>",
                                act_value: g.acu,
                                amount: g.acc,
                                suggest_pos: c + ".acq.0"
                            })),
                            g.wor && (d += i.replace('<div id="d_#{id}" suggest-pos="#{suggest_pos}" class="#{className}" title="#{title}" gp="1" onclick="$o.clickItem(this)"><div class="search-item">在<strong> 全球购 </strong>中搜索</div><div class="search-count">约#{amount}个商品</div></div>', {
                                id: ++f,
                                title: v,
                                className: "item1",
                                amount: g.wor,
                                suggest_pos: c + ".wor.0"
                            }))),
                            g.ci && g.ci.length > 0)
                                for (var S = 0, x = g.ci.length; S < x; S++) {
                                    var j = g.ci[S].cid;
                                    if (0 == s) {
                                        if ("string" == typeof j && /^[1-8]4$/.test(j))
                                            continue
                                    } else if (5 == s) {
                                        if ("string" == typeof j && !/^[5-8]2$/.test(j))
                                            continue
                                    } else if (1 == s || 2 == s || 3 == s || 4 == s)
                                        continue;
                                    d += i.replace('<div id="d_#{id}" suggest-pos="#{suggest_pos}" class="#{className}" title="#{title}" cid="#{cid}" cLevel="#{cLevel}" onclick="$o.clickItem(this)"><div class="search-item">在<strong>#{cname}</strong>分类中搜索</div><div class="search-count">约#{amount}个商品</div></div>', {
                                        id: ++f,
                                        title: v,
                                        cid: j,
                                        cLevel: g.ci[S].cle,
                                        className: "item1",
                                        cname: g.ci[S].cna,
                                        amount: g.ci[S].cre,
                                        suggest_pos: c + ".cid." + (S + 1)
                                    })
                                }
                            0 == f && (f = -1)
                        }
                        l += 0 == p && f > 0 ? i.replace('<li class="fore1"><div id="d_#{id}" suggest-pos="#{suggest_pos}" class="fore1" title="#{title}" onclick="$o.clickItem(this)" #{history_mark}><div class="search-item" #{history_style}>#{keyword}</div><div class="search-count">#{search_count}</div></div>#{categorys}</li>', {
                            id: 0,
                            title: v,
                            keyword: k,
                            suggest_pos: c++ + (g.his ? ".his.0" : ".def.0"),
                            categorys: d,
                            search_count: _,
                            history_mark: y,
                            history_style: b
                        }) : i.replace('<li id="d_#{id}" suggest-pos="#{suggest_pos}" title="#{title}" onclick="$o.clickItem(this)" #{history_mark}><div class="search-item" #{history_style}>#{keyword}</div><div class="search-count">#{search_count}</div></li>', {
                            id: ++f,
                            title: v,
                            keyword: k,
                            suggest_pos: c++ + (g.his ? ".his.0" : ".def.0"),
                            search_count: _,
                            history_mark: y,
                            history_style: b
                        }),
                        p++
                    }
                }
                r.length = ++f,
                "" != l ? (l += "object" == (void 0 === g ? "undefined" : n(g)) && g.his ? '<li class="close" onclick="$o.del(event)">全部删除</li>' : '<li class="close" onclick="$o.hideTip()">关闭</li>',
                a.html(l).show().find('[id^="d_"]').bind("mouseleave", function() {
                    r.mouseleave($(this))
                }).bind("mouseenter", function() {
                    r.mouseenter($(this))
                })) : a.html("").hide()
            }
            ,
            SearchBox.prototype.disableRemind = function() {
                search.additinal = "&suggest=1.rem.0." + this.version,
                this.enable_remind = !1
            }
            ,
            SearchBox.prototype.remindKey = function(e, n) {
                t.val() == e && this.enable_remind && (r && this.IME && /\w/.test(e.substr(-1)) || (t.val(n),
                this.keep_keyword = e,
                search.additinal = "&suggest=1.rem.1." + this.version,
                i.textSelect("key", e.length)))
            }
            ,
            SearchBox.prototype.bind_input = function() {
                $.browser.mozilla ? (t.bind("keydown", function(e) {
                    d.keydown_up(e)
                }),
                t.bind("input", function(e) {
                    d.input(e)
                })) : t.bind("keydown", function(e) {
                    d.keydown_up(e)
                }),
                t.focus(function() {
                    setTimeout(function() {
                        d.input()
                    }, 10)
                }),
                a.parent().bind("mouseenter", function() {
                    d.e_position = !0,
                    d.timeoutId && clearTimeout(d.timeoutId)
                }).bind("mouseleave", function() {
                    d.e_position = !1,
                    d.timeoutId = setTimeout(function() {
                        d.hideTip()
                    }, 500)
                }),
                $(document).click(function() {
                    d.e_position || (d.hideTip(),
                    d.uploader.clear())
                })
            }
            ,
            SearchBox.prototype.del = function(t) {
                var n = this;
                t = t || e.event,
                e.event ? (t.cancelBubble = !0,
                t.returnValue = !1) : (t.stopPropagation(),
                t.preventDefault());
                var i = $(t.srcElement ? t.srcElement : t.target)
                  , o = i.parent().parent().attr("title");
                $.ajax({
                    url: c + (o == undefined ? "&delall=1" : "&del=" + encodeURIComponent(o)),
                    dataType: "jsonp",
                    scriptCharset: "utf-8",
                    success: function() {
                        function success(e) {
                            n.onloadItems(e)
                        }
                        return success
                    }()
                })
            }
            ,
            SearchBox.prototype.uploader = {
                init: function() {
                    function init() {
                        var n = this;
                        switch (e.location.host) {
                        case "search.jd.com":
                        case "www.jd.com":
                            break;
                        default:
                            return !1
                        }
                        t.bind("click", function() {
                            n.clear()
                        }).after('<span class="photo-search-btn"><form id="search-img-upload" clstag="h|keycount|2016|03d" method="post" action="//search.jd.com/image?op=upload" enctype="multipart/form-data" target="search_upload"><span class="upload-bg"></span><input type="file" name="file" class="upload-trigger" accept="image/png,image/jpeg,image/jpg"></form></span>'),
                        $("#search-img-upload").find("input").click(function() {
                            d.hideTip(),
                            n.clear()
                        }).change(function() {
                            n.msg("图片上传中，大批相似商品正在赶来，请稍等......"),
                            n.old_domain = document.domain,
                            document.domain = "jd.com",
                            $("body").append('<iframe id="J_image_upload" name="search_upload" style="display:none;"></iframe>'),
                            $("#J_image_upload").load(function() {
                                !n.is_callback && n.msg("抱歉，图片上传失败", "网络状况不好，请重新上传试试~")
                            });
                            try {
                                JA.tracker.ngloader("search.000013", {
                                    url: e.location.href
                                })
                            } catch (t) {}
                            $("#search-img-upload").submit()
                        })
                    }
                    return init
                }(),
                msg: function() {
                    function msg(e, t) {
                        var n = $("#photo-search-dropdown");
                        n = n.length ? n : $('<div id="photo-search-dropdown"><div class="photo-search-tip"><div class="tip-inner tip-error"><i class="tip-icon"></i><div class="tip-main"><h5 class="tip-title"></h5><div class="tip-hint"></div></div></div></div></div>').insertAfter("#shelper");
                        var i = n.find(".tip-inner");
                        t ? i.addClass("tip-error").find(".tip-title").show().html(e).next().html(t) : i.removeClass("tip-error").find(".tip-title").hide().next().html(e)
                    }
                    return msg
                }(),
                callback: function() {
                    function callback(t) {
                        if (this.is_callback = 1,
                        "ERROR" == t.split(".")[0])
                            switch (t.split(".")[1]) {
                            case "UPLOAD_RETRY":
                                this.msg("抱歉，图片上传失败", "网络状况不好，请重新上传试试~");
                                break;
                            case "UPLOAD_SIZE":
                                this.msg("抱歉，图片上传失败", "图片不能大于4M，请换一张图试试~");
                                break;
                            case "UPLOAD_MIN_WH":
                                this.msg("抱歉，图片上传失败", "图片尺寸不能小于201x201 px");
                                break;
                            case "UPLOAD_FORMAT":
                                this.msg("抱歉，图片上传失败", "只支持jpg或png格式的图片");
                                break;
                            case "UPLOAD_JSF":
                                this.msg("抱歉，图片上传失败", "网络状况不好，请重新上传试试~");
                                break;
                            default:
                                this.clear()
                            }
                        else
                            e.location.href = "//search.jd.com/image?path=" + encodeURIComponent(t) + "&op=search"
                    }
                    return callback
                }(),
                clear: function() {
                    function clear() {
                        this.old_domain && (document.domain = this.old_domain),
                        this.is_callback = 0,
                        $("#J_image_upload").remove(),
                        $("#photo-search-dropdown").remove()
                    }
                    return clear
                }()
            };
            var d = new SearchBox;
            return d.bind_input(),
            d.uploader.init(),
            d
        }
    }(window)
}
, function(e, t, n) {
    var i, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    ;
    (i = function(e, t, n) {
        return {
            check: function() {
                function check() {
                    return "object" === o(window.localStorage)
                }
                return check
            }(),
            has: function() {
                function has(e) {
                    return !!localStorage.getItem(e)
                }
                return has
            }(),
            set: function() {
                function set(e, t) {
                    try {
                        localStorage.setItem(e, JSON.stringify(t))
                    } catch (n) {}
                }
                return set
            }(),
            get: function() {
                function get(e) {
                    try {
                        return JSON.parse(localStorage.getItem(e))
                    } catch (t) {}
                }
                return get
            }(),
            remove: function() {
                function remove(e) {
                    localStorage.removeItem(e)
                }
                return remove
            }(),
            clearByReg: function() {
                function clearByReg(e) {
                    var t = new RegExp(e)
                      , n = window.localStorage;
                    for (var i in n)
                        t.test(i) && this.remove(i)
                }
                return clearByReg
            }(),
            clear: function() {
                function clear() {
                    localStorage.clear()
                }
                return clear
            }()
        }
    }
    .call(t, n, t, e)) !== undefined && (e.exports = i)
}
, function(e, t) {
    function _defineProperty(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    !function() {
        function inArray(e, t) {
            for (var n = !1, i = 0, o = e.length; i < o; i++) {
                var a = e[i];
                a = a.replace(/\[/gm, "\\["),
                a = a.replace(/\]/gm, "\\]");
                if (new RegExp(a).test(t)) {
                    n = e[i];
                    break
                }
            }
            return n
        }
        function siblingIndex(e) {
            for (var t = 0, n = e.parentNode.firstChild; n; n = n.nextSibling)
                if (1 === n.nodeType) {
                    if (n === e)
                        break;
                    t += 1
                }
            return t
        }
        function getDomByTreeStr(e) {
            var t = e.substr(1).split("/")
              , n = t.shift()
              , i = [];
            if (n.indexOf("id") > -1) {
                var o = /\".*?\"/gi;
                n = n.match(o)[0].replace(/\"/gi, function() {
                    return ""
                });
                for (var a = 0; a < t.length; a++) {
                    var r = t[a];
                    r = r.match(/\d+/)[0],
                    i.push(parseInt(r))
                }
                for (var s = document.getElementById(n), c = 0; c < i.length; c++) {
                    var l = i[c];
                    s = s.children[l]
                }
                return s
            }
        }
        function getDomTree(e) {
            if ("html" == e.nodeName.toLowerCase() || "body" == e.nodeName.toLowerCase())
                return null;
            var t;
            return t = e.getAttribute("id") ? e.nodeName.toLowerCase() + '[id="' + e.getAttribute("id") + '"]/' : e.nodeName.toLowerCase() + "[" + siblingIndex(e) + "]/" + function getDomTreeParent(e) {
                var t = e.parentNode
                  , n = "";
                if (t)
                    try {
                        var i = t.getAttribute("id")
                          , o = /^ad\d+/gi;
                        i && !o.test(i) ? n += t.nodeName.toLowerCase() + '[id="' + t.getAttribute("id") + '"]/' : (n += t.nodeName.toLowerCase() + "[" + siblingIndex(t) + "]/",
                        n += getDomTreeParent(t))
                    } catch (a) {}
                return n
            }(e),
            t.split("/").reverse().join("/")
        }
        function getDomTreeBind(e) {
            var t = i.getTarget(e)
              , n = getDomTree(t);
            if (!document.getElementById("tracelessLogDebug")) {
                var o = document.createElement("textarea");
                o.id = "tracelessLogDebug",
                o.style.border = "1px #C81623 solid",
                o.style.padding = "5px 10px",
                o.style.width = "900px",
                o.style.height = "20px",
                o.style.background = "#C81623",
                o.style.color = "#fff",
                o.style.zIndex = 100,
                o.style.opacity = .7,
                o.style.position = "fixed",
                o.style.left = "50%",
                o.style.top = "0px",
                o.style.marginLeft = "-450px",
                document.getElementsByTagName("body")[0].appendChild(o)
            }
            "tracelessLogDebug" != t.getAttribute("id") && (document.getElementById("tracelessLogDebug").innerHTML = n),
            i.preventDefault(e)
        }
        function getScrollTop() {
            var e = 0;
            return document.documentElement && document.documentElement.scrollTop ? e = document.documentElement.scrollTop : document.body && (e = document.body.scrollTop),
            e
        }
        function initDeepGather() {
            function getRange() {
                var e = o.scrollTop()
                  , t = o.height() + e;
                return t = t < 3e4 ? t : 3e4,
                {
                    t: e,
                    b: t
                }
            }
            function sendData() {
                if (a.length > 0) {
                    for (var e = 0; e < a.length; e++)
                        a[e]["d"] = parseFloat(a[e]["d"].toFixed(2));
                    var t = JSON.stringify(a);
                    f(t)
                }
            }
            function timeOutTrigger() {
                window.clearTimeout(n),
                window.clearInterval(t),
                n = window.setTimeout(function() {
                    i = getRange(),
                    i.d = .5,
                    a.push(i),
                    t = window.setInterval(function() {
                        e && (!1 === document.hidden ? (r = !1,
                        0 === a.length ? (i.d = 0,
                        a.push(i)) : i.d += .01) : !1 === r && (sendData(),
                        a = [],
                        r = !0))
                    }, 10)
                }, 500)
            }
            var e = "boolean" == typeof document.hidden;
            if (e) {
                var t, n, i, o = $(window), a = [];
                setInterval(function() {
                    e && !1 === document.hidden && (sendData(),
                    a = [])
                }, 5e3);
                var r = !1;
                o.bind("scroll", function(e) {
                    timeOutTrigger()
                }),
                timeOutTrigger()
            }
        }
        function getBrowserInfo(e) {
            return function(e) {
                e === undefined && (e = window.navigator.userAgent),
                e = e.toLowerCase();
                var t = /(edge)\/([\w.]+)/.exec(e) || /(opr)[\/]([\w.]+)/.exec(e) || /(chrome)[ \/]([\w.]+)/.exec(e) || /(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || []
                  , n = /(win)/.exec(e) || /(mac)/.exec(e) || /(linux)/.exec(e) || /(cros)/.exec(e) || []
                  , i = {}
                  , o = {
                    browser: t[5] || t[3] || t[1] || "",
                    version: t[2] || t[4] || "0",
                    versionNumber: t[4] || t[2] || "0",
                    platform: n[0] || ""
                };
                if (o.browser && (i[o.browser] = !0,
                i.version = o.version,
                i.versionNumber = parseInt(o.versionNumber, 10)),
                o.platform && (i[o.platform] = !0),
                (i.cros || i.mac || i.linux || i.win) && (i.desktop = !0),
                (i.chrome || i.opr || i.safari) && (i.webkit = !0),
                i.rv || i.iemobile) {
                    o.browser = "msie",
                    i["msie"] = !0
                }
                if (i.edge) {
                    delete i.edge;
                    o.browser = "msedge",
                    i["msedge"] = !0
                }
                if (i.opr) {
                    o.browser = "opera",
                    i["opera"] = !0
                }
                i.name = o.browser,
                i.platform = o.platform;
                var a = !1;
                return (t = /liebaofast\/([\w.]+)/.exec(e) || /liebao\/([\w.]+)/.exec(e) || /lbbrowser/.exec(e)) && (i.name = "liebao",
                i.version = t[1] || "0",
                a = !0),
                /metasr/.test(e) && (i.name = "sougou",
                i.version = "0",
                i.versionNumber = 0),
                (t = /maxthon\/([\w.]+)/.exec(e) || /maxthon/.exec(e)) && (i.name = "maxthon",
                i.version = t[1] || "0",
                a = !0),
                /360[se]e/.test(e) && (i.name = "360",
                i.version = "0",
                i.versionNumber = "0"),
                (t = /qqbrowser\/([\w.]+)/.exec(e) || /tencenttraveler ([\w.]+)/.exec(e)) && (i.name = "qq",
                i.version = t[1] || "0",
                a = !0),
                a && (i.versionNumber = parseInt(i.version, 10)),
                i
            }(e || window.navigator.userAgent)
        }
        var e;
        if (!window.uba_lab_tag) {
            window.uba_lab_tag = !0;
            var t = {
                "www.jd.com": ['/div[id="cate_item1"]', '/div[id="cate_item2"]', '/div[id="cate_item3"]', '/div[id="cate_item4"]', '/div[id="cate_item5"]', '/div[id="cate_item6"]', '/div[id="cate_item7"]', '/div[id="cate_item8"]', '/div[id="cate_item9"]', '/div[id="cate_item10"]', '/div[id="cate_item11"]', '/div[id="cate_item12"]', '/div[id="cate_item13"]', '/div[id="cate_item14"]', '/div[id="cate_item15"]', '/li[id="ttbar-myjd"]/div[1]', '/li[id="ttbar-serv"]/div[1]', '/li[id="ttbar-navs"]/div[1]', '/div[id="settleup-content"]']
            }
              , n = {
                "universal": ['/li[id="d_0"]', '/li[id="d_1"]', '/li[id="d_2"]', '/li[id="d_3"]', '/li[id="d_4"]', '/li[id="d_5"]', '/li[id="d_6"]', '/li[id="d_7"]', '/li[id="d_8"]', '/li[id="d_9"]', '/li[id="nav-licai"]/ul[1]', '/li[id="nav-zhongchou"]/ul[1]', '/li[id="nav-baoxian"]/ul[1]', '/li[id="nav-baitiao"]/ul[2]', '/li[id="nav-loan"]/ul[1]', '/li[id="nav-caimi"]/ul[1]', '/li[id="nav-dongjia"]/ul[1]', '/div[id="J_searchRecommend"]', '/div[id="J_searchKeyWords"]', '/div[id="J_userCenterBoard"]', '/div[id="ceilinglamp"]'],
                "urls": (e = {
                    "www.jd.com": ['/li[id="ttbar-myjd"]/div[1]', '/div[id="ttbar-apps-main"]', '/div[id="ttbar-atte-main"]', '/li[id="ttbar-serv"]/div[1]', '/li[id="ttbar-navs"]/div[1]', '/div[id="cate_item', '/div[id="lift"]/ul[0]', '/div[id="settleup-content"]', '/ul[id="mcart-sigle"]', '/div[id="settleup-content"]', '/div[id="category-item', '/div[id="J-global-toolbar'],
                    "shouji.jd.com": ['/div[id="phoneCategorys"]/div[0]/div[1]'],
                    "channel.jd.com/fashion.html": ['/div[id="p-categroy"]/div[1]'],
                    "jr.jd.com": ['/div[id="container"]/div[0]/div[0]/div[0]/div[1]'],
                    "tuan.jd.com/quanguo-index.html": ['/div[id="categorys-2015"]/div[1]/div[7]/div[1]', '/div[id="categorys-2015"]/div[1]/div[8]/div[1]', '/div[id="categorys-2015"]/div[1]/div[9]/div[1]', '/div[id="categorys-2015"]/div[1]/div[10]/div[1]', '/ul[id="shelperTuan"]'],
                    "chaoshi.jd.com": [],
                    "book.jd.com": ['/div[id="p-category"]/div[0]/div[1]'],
                    "diannao.jd.com": ['/div[id="oaCategorys"]/div[0]/div[1]'],
                    "channel.jd.com/electronic.html": ['/div[id="comCategorys"]/div[1]/div[1]/div[0]/div[1]'],
                    "www.jd.hk": [],
                    "channel.jd.com/sports.html": ['/div[id="sortlist"]/div[0]'],
                    "auction.jd.com/home.html": ['/div[id="focus"]/div[0]/div[0]'],
                    "channel.jd.com/food.html": ['/div[id="p-category"]/div[0]/div[1]'],
                    "e.jd.com/ebook.html": ['/div[id="p-category"]/div[0]/div[1]'],
                    "channel.jd.com/beauty.html": ['/div[id="beauty"]/div[0]/div[0]/div[0]/div[0]/div[1]'],
                    "channel.jd.com/luxury.html": ['/div[id="p-categroy"]/div[1]'],
                    "channel.jd.com/furniture.html": ['/div[id="sortlist"]/div[0]'],
                    "shuma.jd.com": ['/div[id="oaCategorys"]/div[0]/div[1]'],
                    "baby.jd.com": ['/div[id="p-category"]/div[0]/div[1]'],
                    "channel.jd.com/home.html": ['/div[id="sortlist"]/div[0]'],
                    "channel.jd.com/health.html": ['/div[id="p-category"]/div[0]/div[1]'],
                    "channel.jd.com/1620-1625.html": ['/div[id="p-category"]/div[1]'],
                    "channel.jd.com/watch.html": ['/div[id="p-category"]/div[0]/div[2]']
                },
                _defineProperty(e, "channel.jd.com/luxury.html", ['/div[id="p-categroy"]/div[1]']),
                _defineProperty(e, "channel.jd.com/wine.html", ['/div[id="p-category"]/div[0]/div[1]']),
                _defineProperty(e, "fresh.jd.com", ["/html[0]/body[1]/div[5]/div[0]/div[0]/ul[1]"]),
                _defineProperty(e, "china.jd.com", ['/div[id="p-category"]/div[0]/div[1]']),
                _defineProperty(e, "mvd.jd.com", ['/div[id="p-category"]/div[0]/div[1]']),
                _defineProperty(e, "e.jd.com/ebook.html", ['/div[id="p-category"]/div[0]/div[1]']),
                e)
            }
              , i = {
                addHandler: function() {
                    function addHandler(e, t, n) {
                        e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent ? e.attachEvent("on" + t, n) : e["on" + t] = n
                    }
                    return addHandler
                }(),
                removeHandler: function() {
                    function removeHandler(e, t, n) {
                        e.addEventListener ? e.removeEventListener(t, n, !1) : e.attachEvent ? e.detachEvent("on" + t, n) : e["on" + t] = null
                    }
                    return removeHandler
                }(),
                getEvent: function() {
                    function getEvent(e) {
                        return e || window.event
                    }
                    return getEvent
                }(),
                getTarget: function() {
                    function getTarget(e) {
                        return e.target || e.srcElement
                    }
                    return getTarget
                }(),
                preventDefault: function() {
                    function preventDefault(e) {
                        e.preventDefault ? e.preventDefault() : e.returnValue = !1
                    }
                    return preventDefault
                }(),
                stopPropagation: function() {
                    function stopPropagation(e) {
                        e.stopPropagaiton ? e.stopPropagaiton() : e.cancelBubble = !0
                    }
                    return stopPropagation
                }()
            }
              , o = function(e, t) {
                return Math.abs(function(e) {
                    for (var t = 0, n = 0; n < e.length; n++)
                        t = (t << 5) - t + e.charCodeAt(n),
                        t &= t;
                    return t
                }(e)) % t
            }
              , a = function(e) {
                for (var t = e + "=", n = document.cookie.split(";"), i = 0; i < n.length; i++) {
                    for (var o = n[i]; " " == o.charAt(0); )
                        o = o.substring(1, o.length);
                    if (0 == o.indexOf(t))
                        return o.substring(t.length, o.length)
                }
                return null
            }
              , r = function(e) {
                var t = "uas_log_" + (new Date).getTime()
                  , n = window[t] = new Image;
                n.onload = n.onerror = function() {
                    window[t] = null
                }
                ,
                n.src = e,
                n = null
            }
              , s = a("pin") ? a("pin") : ""
              , c = a("__jda") ? a("__jda").split(".")[1] : ""
              , l = a("__jdb") ? a("__jdb").split(".")[2] : ""
              , d = a("__jda") ? a("__jda").split(".")[5] : ""
              , u = function(e) {
                if (e.clientX > 1 && e.clientY > 1) {
                    var t = e.clientX - window.screen.width / 2
                      , n = e.clientY + getScrollTop()
                      , i = window.screen.width
                      , o = "cw=" + t + "$ch=" + n + "$sw=" + i + "$zb=" + d + "$labt=1";
                    o = encodeURIComponent(o);
                    var a = encodeURIComponent(document.referrer)
                      , u = "//mercury.jd.com/log.gif?t=uas.000000&m=UA-J2011-1&pin=" + s + "&uid=" + c + "&sid=" + l + "&v=" + o + "&ref=" + a + "&rm=" + (new Date).getTime();
                    r(u)
                }
            }
              , f = function(e) {
                var t = "d=" + e + "$zb=" + d + "$labt=2";
                t = encodeURIComponent(t);
                var n = encodeURIComponent(document.referrer)
                  , i = "//mercury.jd.com/log.gif?t=uas.000000&m=UA-J2011-1&pin=" + s + "&uid=" + c + "&sid=" + l + "&v=" + t + "&ref=" + n + "&rm=" + (new Date).getTime();
                r(i)
            }
              , p = function(e, t) {
                if (e.clientX > 1 && e.clientY > 1) {
                    var n = getDomByTreeStr(t)
                      , i = $(n).offset()
                      , o = e.clientX
                      , a = e.clientY + getScrollTop()
                      , u = window.screen.width
                      , f = "cw=" + (o - i.left) + "$ch=" + (a - i.top) + "$sw=" + u + "$zb=" + d + "$labt=3$smid=" + t;
                    f = encodeURIComponent(f);
                    var p = encodeURIComponent(document.referrer)
                      , h = "//mercury.jd.com/log.gif?t=uas.000000&m=UA-J2011-1&pin=" + s + "&uid=" + c + "&sid=" + l + "&v=" + f + "&ref=" + p + "&rm=" + (new Date).getTime();
                    r(h)
                }
            };
            /isdebug=(-\d)*-30/.test(location.search) && i.addHandler(document, "click", function(e) {
                i.getEvent(e);
                getDomTreeBind(e)
            });
            var h = function(e) {
                var t = e.url.toLowerCase()
                  , n = /http.*?\/\//gi
                  , i = location.href.toLowerCase();
                if (i = i.replace(n, function(e) {
                    return ""
                }),
                i.indexOf(t) > -1)
                    return !0;
                if (e.skus && i.indexOf("item.jd.com") > -1)
                    for (var o in e.skus) {
                        var a = e.skus[o] + ".html";
                        if (i.indexOf(a) > -1)
                            return !0
                    }
                return !1
            }
              , m = function() {
                var e = [];
                return function(t, n) {
                    if (n = n || !1,
                    e = e.concat(t || []),
                    n) {
                        var i = e.join("$");
                        e = [],
                        i = encodeURIComponent(i);
                        var o = encodeURIComponent(document.referrer)
                          , a = "//mercury.jd.com/log.gif?t=uas.000000&m=UA-J2011-1&pin=" + s + "&uid=" + c + "&sid=" + l + "&v=" + i + "&ref=" + o + "&rm=" + (new Date).getTime();
                        r(a)
                    }
                }
            }();
            i.addHandler(window, "load", function(e) {
                c && $.ajax({
                    url: "//d.jd.com/lab/get",
                    dataType: "jsonp",
                    jsonpCallback: "lab",
                    cache: !0,
                    success: function() {
                        function success(e) {
                            e && $.each(e, function(a) {
                                var r = e[a]
                                  , s = r.url.toLowerCase()
                                  , l = (new Date).getTime();
                                if (r.url && r.startOn && r.endOn && r.percent && h(r) && l >= r.startOn && l <= r.endOn + 864e5 && o(c, 1e4) <= 100 * parseInt(r.percent))
                                    return i.addHandler(document, "click", function(e) {
                                        f('[{"t":0,"b":0,"d":0}]'),
                                        i.removeHandler(document, "click", arguments.callee)
                                    }),
                                    i.addHandler(document, "click", function(e) {
                                        var o = i.getEvent(e)
                                          , a = i.getTarget(e);
                                        if (a.parentNode) {
                                            var r = getDomTree(a);
                                            if (inArray(n.universal, r) || n.urls[s] && inArray(n.urls[s], r) || u(o),
                                            t[s]) {
                                                var c = inArray(t[s], r);
                                                c && p(o, c)
                                            }
                                        }
                                    }),
                                    initDeepGather(),
                                    !1
                            })
                        }
                        return success
                    }()
                })
            });
            var g = null;
            switch (location.href) {
            case "http://train.jd.com/":
                g = "train";
                break;
            case "http://menpiao.jd.com/":
                g = "menpiao";
                break;
            case "http://what.jd.com/what/index":
            case "http://what.jd.com/index":
                g = "what";
                break;
            case "http://faner.jd.com/":
                g = "faner";
                break;
            case "http://chaoshi.jd.com/":
                g = "chaoshi"
            }
            c && null != g && (m([g + "_pv=1"], !0),
            function() {
                function makesureLoad() {
                    if (a || 3 == s)
                        return void clearInterval(r);
                    s++,
                    onload()
                }
                function onload(t) {
                    function delayLoad() {
                        var e = r.domContentLoadedEventEnd - s
                          , t = r.loadEventEnd - s;
                        if (!(t < 0 && "msie" === o.name && 9 === o.versionNumber)) {
                            var c = r.domInteractive - s;
                            if (window.chrome && window.chrome.loadTimes) {
                                var l = window.chrome.loadTimes();
                                n = parseInt(1e3 * (l.firstPaintTime - l.startLoadTime), 10)
                            } else
                                "number" == typeof r.msFirstPaint && (n = r.msFirstPaint - s);
                            n = Math.max(0, n),
                            t = Math.max(0, t);
                            var u = {
                                dr: e,
                                lp: t,
                                fp: n,
                                di: c,
                                labt: 100,
                                zb: void 0 !== d ? d : 0,
                                ecr: i
                            };
                            a = !0,
                            m(obj2Array(u), !0)
                        }
                    }
                    var r = e.timing
                      , s = r.navigationStart;
                    window.setTimeout(delayLoad, 0)
                }
                function obj2Array(e) {
                    var t = [];
                    for (var n in e)
                        e.hasOwnProperty(n) && t.push(n + "=" + e[n]);
                    return t
                }
                function contentLoad(e) {
                    for (var n = t.body.querySelectorAll("*"), o = 0, a = 0; o < n.length; ++o) {
                        var r = n[o].tagName.toLowerCase();
                        "script" !== r && "link" !== r && "noscript" !== r && a++
                    }
                    i = a
                }
                var e = window.performance || window.webkitPerformance || window.mozPerformance || window.msPerformance
                  , t = window.document
                  , n = -1
                  , i = -1
                  , o = getBrowserInfo()
                  , a = !1
                  , r = null
                  , s = 0;
                m(["br=" + [o.platform, o.name, o.versionNumber].join(".")]),
                e && window.addEventListener ? ("complete" === t.readyState || "interactive" === t.readyState ? contentLoad() : t.addEventListener("DOMContentLoaded", contentLoad),
                "msie" === o.name && 9 === o.versionNumber && (r = setInterval(makesureLoad, 1e3)),
                window.addEventListener("load", onload)) : m(obj2Array({
                    dr: 0,
                    lp: 0,
                    fp: 0,
                    di: 0,
                    labt: 100,
                    zb: void 0 !== d ? d : 0,
                    ecr: 0
                }), !0)
            }())
        }
    }()
}
, function(e, t) {
    function trim(e) {
        return (e || "").replace(/(^\s*)|(\s*$)/g, "")
    }
    function isBlank(e) {
        var t = arguments;
        if (t.length > 1) {
            for (var n = 0, i = t.length; n < i; n++)
                if (isBlank(t[n]))
                    return !0;
            return !1
        }
        return "undefined" === String(e) || "null" === String(e) || "string" == typeof e && "" === trim(e)
    }
    function changeAreaByIdSeq(e, t) {
        var n = {
            provinceId: 0,
            provinceName: "",
            cityId: 0,
            cityName: "",
            districtId: 0,
            districtName: "",
            townId: 0,
            townName: ""
        }
          , i = e.split("-");
        "0" === i[0] && (i = o);
        var a = getProvince(i[0]).value;
        n.provinceId = a.id,
        n.provinceName = a.name,
        t(n)
    }
    function getProvinceList() {
        var e = [];
        return s.provinceList && s.provinceList.length > 0 ? e = s.provinceList : ($.each(s.province, function(t, n) {
            e.push({
                id: t.replace("_", ""),
                name: n
            })
        }),
        s.provinceList = e),
        e
    }
    function getProvince(e) {
        var t = {
            id: e,
            name: ""
        }
          , n = 0
          , i = s.province["_" + e];
        return i || (i = s.province["_" + o[0]],
        n = 1,
        t.id = o[0]),
        t.name = i,
        {
            value: t,
            isDefault: n
        }
    }
    function loadLocal(e, t) {
        var n = e.initArea || l(e.cookieMapping.allLocal) || e.defaultArea || a;
        isBlank(e.initArea) && e.syncServer ? c.sync(function(e) {
            changeAreaByIdSeq(e && e.adds || n || n, t)
        }) : changeAreaByIdSeq(n, t)
    }
    function localObjectToList(e) {
        return e && [{
            id: e.provinceId,
            name: e.provinceName
        }, {
            id: e.cityId,
            name: e.cityName
        }, {
            id: e.districtId,
            name: e.districtName
        }, {
            id: e.townId,
            name: e.townName
        }] || []
    }
    function localObjectToArray(e, t, n) {
        $.each(localObjectToList(e), function(e, i) {
            isBlank(i.id) || 0 === i.id || (t.push(i.id),
            n.push(i.name))
        })
    }
    function longAreaNameProcess(e, t, n, i) {
        var o = "";
        if (t.name.length >= n.longerAreaSize ? o = "longer-area" : t.name.length >= n.longAreaSize && (o = "long-area"),
        i && n.className.selected || o) {
            var a = $(e);
            i && n.className.selected && a.find("a:first").addClass(n.className.selected),
            o && a.addClass(o),
            e = $("<div/>").html(a).html(),
            e = e.replace(/&lt;/g, "<").replace(/&gt;/g, ">")
        }
        return t.tpl ? $.tpl(t.tpl, t) : $.tpl(e, t)
    }
    function renderProvinceList(e, t, n, i) {
        var o = this
          , a = o.options.provinceList
          , r = []
          , s = [];
        return s = a || getProvinceList(),
        $.each(s, function(e, n) {
            r.push(longAreaNameProcess(t, n, o.options, n.id == i.provinceId))
        }),
        $.tpl(e, {
            list: r.join(""),
            index: n
        })
    }
    function bindAreaSelectEvent() {
        var e = this
          , t = e.el
          , n = e.options
          , i = n.className;
        $("." + i.content_content, t).undelegate("a[data-id]", "click").delegate("a[data-id]", "click", function(o) {
            o.preventDefault();
            var a = $(this)
              , r = {
                id: a.data("id"),
                name: a.html()
            }
              , s = saveSelectedLocal(t, r.id, 0);
            n.className.selected && $("." + i.content_content + " a." + n.className.selected, t).removeClass(n.className.selected),
            changeAreaByIdSeq(s, function(t) {
                n.className.selected && a.addClass(n.className.selected),
                n.selectedClose && showAreaContent.call(e, !1),
                drawSelectAreaText.call(e, t),
                $.isFunction(n.onChange) && n.onChange.call(e, a, r, t),
                n.writeCookie && writeCookie(n, t.provinceId, s),
                n.syncServer && n.writeServer && writeServer(s, t.provinceId)
            })
        }),
        $("." + i.content_content, t).undelegate("a[data-onchange=1]", "click").delegate("a[data-onchange=1]", "click", function() {
            var o = $(this);
            n.className.selected && ($("." + i.content_content + " a." + n.className.selected, t).removeClass(n.className.selected),
            o.addClass(n.className.selected)),
            n.selectedClose && showAreaContent.call(e, !1),
            $.isFunction(n.onChange) && n.onChange.call(e, o)
        })
    }
    function writeCookie(e, t, n) {
        l(e.cookieMapping.areaId, t, e.cookieOpts),
        l(e.cookieMapping.allLocal, n, e.cookieOpts)
    }
    function writeServer(e, t) {
        c.sync(e, t)
    }
    function showAreaContent(e) {
        var t = this
          , n = t.options.className.hover;
        e ? (r > -1 && (clearTimeout(r),
        r = -1),
        offsetBoxLeft.call(t),
        t.el.addClass(n),
        r = setTimeout(function() {
            t.el.addClass(n)
        }, 1)) : (r > -1 && (clearTimeout(r),
        r = -1),
        t.el.removeClass(n))
    }
    function offsetBoxLeft() {
        var e = this
          , t = e.el
          , n = $(e.css.content)
          , o = $(e.css.text).width()
          , a = n.width()
          , r = $(i).width()
          , s = t.offset().left
          , c = $(e.css.text).offset().left;
        if (n.data("left") ? n.css("left", n.data("left")) : n.data("left", n.css("left")),
        s + a > r) {
            var l = a - o - 10;
            l > c && (l -= l - c + o - 20),
            n.css({
                left: "-" + l + "px"
            })
        } else
            s < -1 * parseInt(n.css("left")) && n.css({
                left: "0px"
            })
    }
    function convertAreaIdList(e) {
        return e ? [e.provinceId, e.cityId, e.districtId, e.townId] : [0, 0, 0, 0]
    }
    function saveSelectedLocal(e, t, i) {
        var o = e.data("select-local");
        return o = o && o.split("-") || [0, 0, 0, 0],
        "object" === (void 0 === t ? "undefined" : n(t)) ? o = convertAreaIdList(t) : (o = s.city[t]) && (o = (o + "-0").split("-")),
        o = o.join("-"),
        e.data("select-local", o),
        o
    }
    function drawSelectAreaContent(e, t) {
        var n = this
          , i = n.el
          , o = n.options
          , a = o.tplContentWrap
          , r = o.tplContentItem;
        $(n.css.content_content).html(renderProvinceList.call(n, a, r, 0, e)),
        -1 == t && saveSelectedLocal(i, e),
        bindAreaSelectEvent.call(n, o)
    }
    function drawSelectAreaText(e) {
        var t = this
          , n = []
          , i = [];
        localObjectToArray(e, i, n),
        i = i.join("-"),
        n = n.join(""),
        $(t.css.text_text).html(n).attr("data-id", i).attr("title", n)
    }
    function transformClassName(e, t) {
        var n = {};
        return $.each(t, function(i, o) {
            var a = i.split("_")
              , r = []
              , s = a.length;
            $.each(a, function(e, n) {
                if (r.push("." + t[n]),
                s > 1 && 2 + e == s)
                    return r.push("." + o),
                    !1
            }),
            n[i] = e + " " + r.join(" ")
        }),
        n
    }
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
      , i = window
      , o = [1, 72, 0, 0]
      , a = o.join("-")
      , r = -1
      , s = {
        province: {
            "北京": 1,
            "上海": 2,
            "天津": 3,
            "重庆": 4,
            "河北": 5,
            "山西": 6,
            "河南": 7,
            "辽宁": 8,
            "吉林": 9,
            "黑龙江": 10,
            "内蒙古": 11,
            "江苏": 12,
            "山东": 13,
            "安徽": 14,
            "浙江": 15,
            "福建": 16,
            "湖北": 17,
            "湖南": 18,
            "广东": 19,
            "广西": 20,
            "江西": 21,
            "四川": 22,
            "海南": 23,
            "贵州": 24,
            "云南": 25,
            "西藏": 26,
            "陕西": 27,
            "甘肃": 28,
            "青海": 29,
            "宁夏": 30,
            "新疆": 31,
            "港澳": 52993,
            "台湾": 32,
            "钓鱼岛": 84,
            "海外": 53283
        },
        city: {
            1: "1-72-2799",
            2: "2-2813-51976",
            3: "3-51035-39620",
            4: "4-113-9775",
            5: "5-142-143",
            6: "6-303-304",
            7: "7-412-415",
            8: "8-560-567",
            9: "9-639-640",
            10: "10-727-728",
            11: "11-799-801",
            12: "12-904-905",
            13: "13-2900-2908",
            14: "14-1151-1153",
            15: "15-1158-1224",
            16: "16-1303-1305",
            17: "17-1432-1435",
            18: "18-1482-1485",
            19: "19-1601-3633",
            20: "20-3168-3169",
            21: "21-1827-1828",
            22: "22-2103-2105",
            23: "23-3690-3693",
            24: "24-2144-2145",
            25: "25-4108-6823",
            26: "26-3970-3972",
            27: "27-2428-2429",
            28: "28-2525-2526",
            29: "29-2580-2581",
            30: "30-2628-2629",
            31: "31-4110-4122",
            52993: "52993-52994-52996",
            32: "32-2768-2769",
            84: "84-1310-0",
            53283: "53283-53284-0"
        },
        area: {},
        serverLocal: null,
        provinceList: null
    };
    s.province = function() {
        var e = {};
        return $.each(s.province, function(t, n) {
            e["_" + n] = t
        }),
        e
    }();
    var c = {
        getUrl: "//uprofile.jd.com/u/getadds?callback=?",
        setUrl: "//uprofile.jd.com/u/setadds",
        sync: function() {
            function sync(e, t) {
                var n = "jd.com" === document.domain;
                if ($.isFunction(e)) {
                    if (s.serverLocal)
                        return s.serverLocal;
                    n ? e({
                        addr: l("ipLoc-djd")
                    }) : $.getJSON(this.getUrl, function(t) {
                        s.serverLocal = t,
                        e(t)
                    })
                } else if (n) {
                    var i = {
                        domain: ".jd.com",
                        path: "/",
                        expires: 10
                    };
                    l("areaId", t, i),
                    l("ipLoc-djd", e, i)
                } else
                    s.serverLocal = {
                        adds: e
                    },
                    $.ajax({
                        url: this.setUrl,
                        type: "get",
                        dataType: "jsonp",
                        data: s.serverLocal
                    })
            }
            return sync
        }()
    }
      , l = function(e, t, n) {
        if (void 0 === t) {
            var i = null;
            if (document.cookie && "" !== document.cookie)
                for (var o = document.cookie.split(";"), a = 0; a < o.length; a++) {
                    var r = jQuery.trim(o[a]).split("=");
                    if (r[0] === e && r.length > 1) {
                        try {
                            i = decodeURIComponent(r[1])
                        } catch (f) {
                            i = r[1]
                        }
                        break
                    }
                }
            return i
        }
        n = n || {},
        null === t && (t = "",
        n.expires = -1);
        var s = "";
        if (n.expires && ("number" == typeof n.expires || n.expires.toUTCString)) {
            var c;
            "number" == typeof n.expires ? (c = new Date,
            c.setTime(c.getTime() + 24 * n.expires * 60 * 60 * 1e3)) : c = n.expires,
            s = "; expires=" + c.toUTCString()
        }
        var l = n.path ? "; path=" + n.path : ""
          , d = n.domain ? "; domain=" + n.domain : ""
          , u = n.secure ? "; secure" : "";
        document.cookie = [e, "=", encodeURIComponent(t), s, l, d, u].join("")
    };
    $.ui.define("areamini", {
        options: {
            hasCssLink: !0,
            baseVersion: "1.0.0",
            cssLinkVersion: "1.0.0",
            syncServer: !1,
            initArea: null,
            defaultArea: null,
            provinceList: null,
            provinceExtend: !0,
            longAreaSize: 4,
            longerAreaSize: 12,
            cookieMapping: {
                areaId: "areaId",
                allLocal: "ipLoc-djd"
            },
            writeCookie: !0,
            cookieOpts: {
                expires: null,
                path: null,
                domain: null,
                secure: null
            },
            writeServer: !0,
            className: {
                hover: "ui-areamini-hover",
                text: "ui-areamini-text-wrap",
                text_text: "ui-areamini-text",
                content: "ui-areamini-content-wrap",
                close: "ui-areamini-close",
                content_tab: "ui-areamini-tab",
                content_content: "ui-areamini-content",
                content_content_list: "ui-areamini-content-list",
                selected: ""
            },
            tplContentWrap: '<ul class="ui-areamini-content-list"><%=list%></ul>',
            tplContentItem: '<li><a data-id="<%=id%>" href="javascript:void(0)"><%=name%></a></li>',
            event: "hover",
            onReady: null,
            onChange: null,
            selectedClose: !0
        },
        css: {},
        init: function() {
            function init() {
                var e = this
                  , t = e.options
                  , n = e.el;
                t.scopeLevel = 1,
                e.css = transformClassName("#" + n[0].id, t.className),
                t.provinceList && t.provinceExtend && (t.provinceList = $.extend(!0, [], getProvinceList().concat(t.provinceList))),
                loadLocal(t, function(i) {
                    drawSelectAreaText.call(e, i),
                    drawSelectAreaContent.call(e, i, -1);
                    var o = "hover" == t.event ? "mouseenter" : "click";
                    $(e.css.text).bind(o, function() {
                        return showAreaContent.call(e, !0),
                        !1
                    }),
                    $(n).bind("mouseleave", function(t) {
                        showAreaContent.call(e, !1)
                    }),
                    $(e.css.close).bind("click", function() {
                        showAreaContent.call(e, !1)
                    }),
                    $.isFunction(t.onReady) && t.onReady.call(e, i)
                })
            }
            return init
        }(),
        hide: function() {
            function hide() {
                var e = this
                  , t = e.options.className.hover;
                e.el.removeClass(t)
            }
            return hide
        }(),
        show: function() {
            function show() {
                var e = this
                  , t = e.options.className.hover;
                e.el.addClass(t)
            }
            return show
        }()
    })
}
, function(e, t, n) {
    function init() {
        l.init()
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    n(7);
    var i = n(1)
      , o = n(3)
      , a = n(0)
      , r = n(2)
      , s = n(10)
      , c = function(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }(s);
    n(12),
    n(13);
    var l = {
        init: function() {
            function init() {
                var e = $("#ttbar-myjd");
                e.find(".dd").html('<div class="dd-spacer"></div><div class="dd-inner"><span class="loading"></span></div>'),
                this.el = e,
                this.bind()
            }
            return init
        }(),
        bind: function() {
            function bind(e) {
                var t = this
                  , n = null;
                this.el.dropdown({
                    enterDelay: 100,
                    trigger: !0,
                    current: "hover",
                    onchange: function() {
                        function onchange(e) {
                            e.attr("data-load") || (e.attr("data-load", 1),
                            t.checkLoginInit()),
                            n = Date.now()
                        }
                        return onchange
                    }(),
                    onmouseleave: function() {
                        function onmouseleave() {
                            !n || Date.now() - n < 1e3 || (n = null,
                            (0,
                            r.logImpr)({
                                poi: "head|topbar|myJD"
                            }))
                        }
                        return onmouseleave
                    }()
                })
            }
            return bind
        }(),
        checkLoginInit: function() {
            function checkLoginInit() {
                var e = this;
                (0,
                c["default"])({
                    automatic: !0,
                    complete: function() {
                        function complete(t) {
                            if (t) {
                                var n;
                                n = e.tpl(),
                                t.Identity.IsAuthenticated && e.hasLoginInit(),
                                e.el.find(".dd").html(n),
                                e.baitiaoInit()
                            }
                        }
                        return complete
                    }()
                })
            }
            return checkLoginInit
        }(),
        tpl: function() {
            function tpl() {
                return '\n      <div class="dd-spacer"></div>\n      <div class="myjdlist">\n        <div class="fore1">\n          <div class="item">\n            <a href="//order.jd.com/center/list.action" clstag="" target="_blank">待处理订单<span id="num-unfinishedorder"></span></a>\n          </div>\n          <div class="item">\n            <a href="//myjd.jd.com/afs/indexNew.action?entry=1" clstag="" target="_blank">返修退换货</a>\n          </div>\n          <div class="item">\n            <a href="//t.jd.com/product/followProductList.action?isReduce=true" clstag="" target="_blank">降价商品<span id="num-reduction"></span></a>\n          </div>\n        </div>\n        <div class="fore2">\n          <div class="item">\n            <a href="//joycenter.jd.com/msgCenter/queryHistoryMessage.action" target="_blank">消息<span id="num-tip"></span></a>\n          </div>\n          <div class="item">\n            <a href="http://question.jd.com/myjd/getMyjdAnswerList.action" clstag="" target="_blank">我的问答<span id="num-consultation"></span></a>\n          </div>\n          <div class="item">\n            <a href="//t.jd.com/home/follow" clstag="" target="_blank">我的关注</a>\n          </div>\n        </div>\n      </div>\n      <div class="myjdlist myjdlist_2">\n        <div class="fore1">\n          <div class="item">\n            <a href="//bean.jd.com/myJingBean/list" clstag="" target="_blank">我的京豆</a>\n          </div>\n          <div class="item baitiao">\n            <a href="//baitiao.jd.com/" clstag="jr|keycount|njdhome|wdbaitiao" target="_blank">我的白条</a>\n          </div>\n        </div>\n        <div class="fore2">\n          <div class="item">\n            <a href="//quan.jd.com/user_quan.action" target="_blank">我的优惠券<span id="num-ticket"></span></a>\n          </div>\n          <div class="item">\n            <a href="//trade.jr.jd.com/centre/browse.action" clstag="" target="_blank">我的理财</a>\n          </div>\n        </div>\n      </div>\n      <div class="viewlist" style="display:none;">\n        <div class="smt">\n          <h4>我的足迹</h4>\n          <span class="extra">\n            <a target="_blank" href="//my.jd.com/history/list.html">更多&nbsp;&gt;</a>\n          </span>\n        </div>\n        <div class="smc"></div>\n      </div>'
            }
            return tpl
        }(),
        hasLoginInit: function() {
            function hasLoginInit() {
                var e = this;
                (0,
                a.loadAsync)({
                    url: i.APIS.MYJD_GETHOMECOUNT,
                    name: "jsonpMyJDHomeCount",
                    dataCheck: function() {
                        function dataCheck(e) {
                            return !(!e || "0" !== e.error)
                        }
                        return dataCheck
                    }()
                }).then(function(t) {
                    e.el.find("#num-unfinishedorder").html(e.numStyleSet(t.orderCount))
                }),
                (0,
                a.loadAsync)({
                    url: i.APIS.MYJD_GETMYJDANSWERCOUNT,
                    name: "jsonpMyJDAnswerCount",
                    dataCheck: function() {
                        function dataCheck(e) {
                            return !(!e.data || !e.data.success)
                        }
                        return dataCheck
                    }()
                }).then(function(t) {
                    var n = t.data;
                    e.el.find("#num-consultation").html(e.numStyleSet(n.result.answerCount))
                }),
                (0,
                a.loadAsync)({
                    url: i.APIS.MYJD_REDUCEPRODUCTCOUNT,
                    name: "jsonpMyJDReduceProduct",
                    dataCheck: function() {
                        function dataCheck(e) {
                            return !!(e && e.data > 0)
                        }
                        return dataCheck
                    }()
                }).then(function(t) {
                    e.el.find("#num-reduction").html(e.numStyleSet(t.data))
                }),
                (0,
                a.loadAsync)({
                    url: i.APIS.MYJD_GETCOUPONCOUNT,
                    name: "jsonpMyJDGetCouponCount",
                    dataCheck: function() {
                        function dataCheck(e) {
                            return !(!e || !e.CouponCount)
                        }
                        return dataCheck
                    }()
                }).then(function(t) {
                    e.el.find("#num-ticket").html(e.numStyleSet(t.CouponCount))
                }),
                (0,
                a.loadAsync)({
                    url: i.APIS.MYJD_MSGCENTER,
                    name: "jsonpMyJDMsgCenter",
                    dataCheck: function() {
                        function dataCheck(e) {
                            return !(!e || "G001001" !== e.result)
                        }
                        return dataCheck
                    }()
                }).then(function(t) {
                    e.el.find("#num-tip").html(e.numStyleSet(t.msgUnreadCount))
                })
            }
            return hasLoginInit
        }(),
        numStyleSet: function() {
            function numStyleSet(e) {
                return 0 === e ? "" : '<span class="num style-red">&nbsp;' + e + "</span>"
            }
            return numStyleSet
        }(),
        baitiaoInit: function() {
            function baitiaoInit(e) {
                var t = this;
                (0,
                a.getLoginstatus)().then(function(e) {
                    e && e.Identity && e.Identity.IsAuthenticated ? t.companySet() : o.USER.pin && t.baitiaoSet()
                }, function() {
                    t.baitiaoSet()
                })
            }
            return baitiaoInit
        }(),
        companySet: function() {
            function companySet() {
                var e = this
                  , t = e.el.find(".baitiao");
                (0,
                a.getCompanyinfo)().then(function(n) {
                    "90" === n.userLevel ? t.html('<a href="//jc.jd.com" target="_blank">我的金采</a>') : e.baitiaoSet()
                }, function() {
                    e.baitiaoSet()
                })
            }
            return companySet
        }(),
        baitiaoSet: function() {
            function baitiaoSet() {
                var e = this
                  , t = e.el.find(".baitiao");
                (0,
                a.loadAsync)({
                    url: i.APIS.MYJD_QUERYBT,
                    charset: "utf-8",
                    name: "jsonpMyJDBt",
                    dataCheck: function() {
                        function dataCheck(e) {
                            return !!(e && e.btList && e.btList[0])
                        }
                        return dataCheck
                    }()
                }).then(function(e) {
                    var n = e.btList[0];
                    n.btName && n.btUrl && t.html('<a href="' + n.btUrl + '" target="_blank">' + n.btName + "</a>")
                })
            }
            return baitiaoSet
        }()
    };
    t["default"] = init
}
, function(e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
        }
        return e
    }
      , o = n(0)
      , a = n(2)
      , r = n(1)
      , s = n(3)
      , c = function(e) {
        $.each(["$con", "$btnp", "$btnn"], function(t, n) {
            e[n]instanceof $ || (e[n] = 0 === t ? $(e[n]) : $(e[n], e.$ctn))
        }),
        this.opts = {},
        $.extend(this, new _.Events),
        $.extend(this.opts, {}, e),
        this._pageSize = e.pageSize || e.$ctn.width(),
        this._slideSize = e.slideSize || e.$con.width(),
        this._windowSize = e.windowSize || e.$ctn.width(),
        this._pageNow = 0,
        this._pos = 0,
        this._toPos = 0,
        this._pageCnt = this._slideSize / this._pageSize,
        this._pagePerWindow = this._windowSize / this._pageSize
    };
    c.prototype = $.extend({}, _.Events.prototype),
    c.prototype.init = function() {
        this.opts.infinite && (this._fakeDom = this.opts.$con.children().clone(),
        this.opts.$con.append(this._fakeDom).css("width", 2 * this._slideSize + "px")),
        this._bind()
    }
    ,
    c.prototype._bind = function() {
        var e, t = this;
        e = function(e) {
            return function() {
                t.opts.$con.is(":animated") || e()
            }
        }
        ,
        this.opts.$btnp.bind("click", e(function() {
            t._prev()
        })),
        this.opts.$btnn.bind("click", e(function() {
            t._next()
        }))
    }
    ,
    c.prototype._switchTo = function(e) {
        var t = this;
        this.opts.$con.stop().animate({
            left: -e * this._pageSize + "px"
        }, this.opts.speed, function() {
            t._pos = -e * t._pageSize
        })
    }
    ,
    c.prototype._next = function() {
        var e = this._pageNow + 1;
        if (this.opts.infinite)
            e > 2 * this._pageCnt - this._pagePerWindow - .01 && (e -= this._pageCnt,
            this.opts.$con.css("left", this._pos + this._slideSize)),
            this._pageNow = e;
        else {
            if (e > this._pageCnt - .01)
                return;
            this._pageNow = Math.round(e % this._pageCnt)
        }
        this._switchTo(this._pageNow)
    }
    ,
    c.prototype._prev = function() {
        if (!this.opts.$con.is(":animated")) {
            var e = this._pageNow - 1;
            if (this.opts.infinite)
                e < -.01 && (e = this._pageCnt + e,
                this.opts.$con.css("left", this._pos - this._slideSize)),
                this._pageNow = e;
            else {
                if (e < -.01)
                    return;
                this._pageNow = Math.round((this._pageCnt + e) % this._pageCnt)
            }
            this._switchTo(this._pageNow)
        }
    }
    ;
    var l = function(e, t) {
        if (t.nick) {
            var n = e.$userName;
            n.html('\n    <div class="dt cw-icon">\n      <i class="icon-plus-nickname"></i>\n      <i class="ci-right"><s>◇</s></i>\n      <a class="nickname" target="_blank" href="//home.jd.com/">' + t.nick + '</a>\n      <i class="iconfont">&#xe605;</i>\n    </div>\n    <div class="dd dorpdown-layer"></div>');
            var i;
            if (n.addClass("dorpdown").dropdown({
                enterDelay: 100,
                trigger: !0,
                current: "hover",
                onchange: function() {
                    function onchange() {
                        (0,
                        o.createCookie)("userInfo2016", "1", 1e4, "/"),
                        $(".u-place-tip").hide(),
                        i = Date.now()
                    }
                    return onchange
                }(),
                onmouseleave: function() {
                    function onmouseleave() {
                        !i || Date.now() - i < 1e3 || (i = null,
                        (0,
                        a.logImpr)({
                            poi: "head|topbar|login"
                        }))
                    }
                    return onmouseleave
                }()
            }),
            !(0,
            o.readCookie)("userInfo2016")) {
                var r = $('\n      <div class="u-place-tip">        <i class="iconfont u-place-tip-ico">&#xe604;</i>        我的福利特权都在这里了哟～        <i class="iconfont u-place-tip-close J_utipclose">&#xe600;</i>      </div>').css("left", n.offset().left);
                window.addEventListener("home:resize", function() {
                    r.css("left", n.offset().left)
                }),
                $(document.body).append(r),
                r.delegate(".J_utipclose", "click", function(e) {
                    (0,
                    o.createCookie)("userInfo2016", "1", 10, "/"),
                    r.hide()
                })
            }
        } else
            e.$userName.html(t.info)
    }
      , d = function(e, t) {
        t.sso && $.each(t.sso, function(e, t) {
            $.getJSON(t)
        })
    }
      , u = function(e) {
        var t, n, i, a;
        t = {
            zymyf: {
                url: "//vip.jd.com/help.html#mypri-01",
                name: "自营运费补贴",
                isLong: !0
            },
            shfw: {
                url: "//vip.jd.com/help.html#mypri-02",
                name: "售后服务"
            },
            pjjl: {
                url: "//vip.jd.com/help.html#mypri-03",
                name: "评价奖励"
            },
            zjfw: {
                url: "//vip.jd.com/help.html#mypri-06",
                name: "装机服务"
            },
            hytj: {
                url: "//vip.jd.com/help.html#mypri-04",
                name: "会员特价"
            },
            srlb: {
                url: "//vip.jd.com/help.html#mypri-05",
                name: "生日礼包"
            },
            zxlb: {
                url: "//vip.jd.com/help.html#mypri-07",
                name: "专享礼包"
            },
            gbzx: {
                url: "//vip.jd.com/help.html#mypri-08",
                name: "贵宾专线"
            },
            yfq: {
                url: "//vip.jd.com/help.html#mypri-09",
                name: "运费券"
            }
        },
        n = {
            1: [["zymyf", "shfw", "pjjl", "zjfw"], ["hytj", "srlb", "zxlb", "gbzx", "yfq"]],
            2: [["zymyf", "shfw", "pjjl", "hytj", "zjfw"], ["srlb", "zxlb", "gbzx", "yfq"]],
            3: [["zymyf", "shfw", "pjjl", "hytj", "srlb", "zjfw"], ["zxlb", "gbzx", "yfq"]],
            4: [["zymyf", "shfw", "pjjl", "hytj", "srlb", "zxlb", "zjfw"], ["gbzx", "yfq"]],
            5: [["zymyf", "shfw", "pjjl", "hytj", "srlb", "zxlb", "zjfw", "gbzx", "yfq"]]
        },
        i = function(e) {
            var i = n[e] || n[5]
              , o = i[0]
              , a = i[1] || []
              , r = [];
            return $.each(o, function(e, n) {
                var i = t[n]
                  , o = i.isLong ? " badge-panel_long" : "";
                r.push('<div class="badge-panel' + o + '"><a href="' + i.url + '" target="_blank"><i class="icobadage icobadage_' + n + '"></i><p class="u-name">' + i.name + "</p></a></div>")
            }),
            $.each(a, function(e, n) {
                var i = t[n];
                r.push('<div class="badge-panel u-dis"><a href="' + i.url + '" target="_blank"><i class="icobadage icobadage_' + n + '"></i><p class="u-name">' + i.name + "</p></a></div>")
            }),
            r.join("")
        }
        ,
        a = function(t) {
            var n, a, s, l, d, u = t || {}, f = u.imgUrl || r.URLS.BLANK_AVATAR, p = u.userLevel || 1, h = Number(u.plusStatus) || "5";
            switch (h) {
            case 1:
                s = !0,
                l = "开通正式版";
                break;
            case 2:
                s = !1,
                l = "开通正式版";
                break;
            case 3:
                s = !0,
                l = "PLUS专享";
                break;
            case 4:
                s = !1,
                l = "PLUS续费";
                break;
            default:
                s = !1,
                l = "免费试用",
                h = 0
            }
            var m, g, v = (0,
            o.isdebug)(10) ? Date.now() : new Date(pageConfig.timestamp).getTime();
            m = r.PLUSMAP[p - 1] || r.PLUSMAP[0],
            m = m[h] || m[4],
            a = '<a href="' + r.URLS.PLUS_TOPBAR + '" target="_blank">' + m + "</a>",
            g = '<div class="badge-panel fore1' + (s ? "" : " u-dis ") + '">\n      <a href="https://plus.jd.com/index" target="_blank">\n        <i class="icobadage icobadage_plus"></i>\n        <p class="u-name">' + l + "</p>\n      </a>\n    </div>",
            pageConfig.testStart && pageConfig.testEnd && v < new Date(pageConfig.testEnd).getTime() && v > new Date(pageConfig.testStart).getTime() && 0 === h && (g = ""),
            n = '\n      <div class="dd-spacer"></div>\n      <div class="userinfo">\n        <div class="u-pic">\n          <a target="_blank" href="//home.jd.com/">\n            <img class="J_upic_img" src="//misc.360buyimg.com/mtd/pc/common/img/no_login.jpg" width="60" height="60" />\n          </a>\n        </div>\n        <div class="u-plus">\n          <a href="https://passport.jd.com/uc/login?ltype=logout" class="link-logout">退出</a>\n          <a href="https://plus.jd.com/index" target="_blank" class="icon-plus-dropdown"></a>\n        </div>\n        <div class="u-msg">' + a + "</div>\n      </div>",
            d = '\n      <div class="badge-list J_sliderwrap">\n        <a href="javascript:void(0);" class="badge-list-prev J_slider_btnp"><i class="iconfont">&#xe602;</i></a>\n        <div class="u-badges J_slider_ctn">\n          <div class="badge-panel-main J_slider_con">' + g + i(p) + '\n          </div>\n        </div>\n        <a href="javascript:void(0);" class="badge-list-next J_slider_btnn"><i class="iconfont">&#xe601;</i></a>\n      </div>',
            $(".dd", e.$userName).html(n + d);
            var _ = $(".J_sliderwrap", e.$userName);
            $(function() {
                $(".J_upic_img").attr("src", f)
            }),
            new c({
                $ctn: $(".J_slider_ctn", _),
                $con: $(".J_slider_con", _),
                $btnp: $(".J_slider_btnp", _),
                $btnn: $(".J_slider_btnn", _),
                pageSize: 140,
                windowSize: 210,
                infinite: !1,
                speed: 200
            }).init(),
            e.$userName.addClass("icon-plus-state" + h)
        }
        ,
        (0,
        o.getLoginstatus)().then(function(e) {
            e.isLogin && (0,
            o.getUserinfo)().then(function(e) {
                a(e)
            }, function() {
                a()
            })
        })
    }
      , f = function(e) {
        var t = i({}, e);
        (0,
        o.loadAsync)({
            url: r.APIS.USER_NAME,
            timeout: 1e3,
            params: {
                pin: s.USER.pin,
                uuid: s.USER.uuid
            },
            charset: "gb2312",
            name: "jsonpHelloService"
        }).then(function(e) {
            e && (l(t, e),
            d(0, e),
            u(t))
        })
    };
    t["default"] = f
}
, function(e, t, n) {
    function init() {
        s.init()
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    n(7);
    var i = n(14)
      , o = function(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }(i)
      , a = n(0)
      , r = n(1)
      , s = {
        el: null,
        init: function() {
            function init() {
                var e = this;
                e.el = $("#settleup"),
                e.el.find(".ci-right").html("&gt;"),
                e.el.find(".dorpdown-layer").html('<div id="J_cart_pop"><span class="loading"></span></div>'),
                e.el.find(".cw-icon .ci-right").after('<i class="ci-count" id="shopping-amount"></i>'),
                null != e.DATA_Amount && $("#shopping-amount").text(e.DATA_Amount),
                null != this.el && this.el.dropdown({
                    enterDelay: 500,
                    trigger: !0,
                    current: "hover",
                    onchange: function() {
                        function onchange() {
                            e.FN_Refresh()
                        }
                        return onchange
                    }()
                })
            }
            return init
        }(),
        DATA_Cookie: "cn",
        DATA_Amount: (0,
        a.readCookie)("cn") || "0",
        URL_Serv: "//cart.jd.com/cart/miniCartServiceNew.action",
        TPL_NoGoods: '\n    <div class="cart_pop">\n      <div class="cart_empty">\n        <i class="cart_empty_img"></i>\n        购物车中还没有商品，赶紧选购吧！\n      </div>\n    </div>',
        TPL_List: {
            wrap: '\n      <div id="J_cart_pop" class="cart_pop">\n        <div class="cart_hd">\n          <h4 class="cart_hd_title">最新加入的商品</h4>\n        </div>\n        <div class="cart_bd J_cart_bd"></div>\n        <div class="cart_ft">\n          <div class="cart_ft_info">\n            共<span class="cart_num">{%= o.Num %}</span>件商品 共计<span class="cart_num">&yen; {%= o.TotalPromotionPrice.toFixed(2) %}</span>\n          </div>\n          <a class="cart_ft_lk" href="{%= o.URLS.SHOPPINGCART %}" title="去购物车">去购物车</a>\n        </div>\n      </div>',
            single: '\n      <ul class="cart_singlelist">\n        {% $.each(o.TheSkus, function (k, list) { %}\n          <li class="cart_item">\n            <div class="cart_item_inner">\n              <div class="cart_img">\n                <a class="cart_img_lk" href="//item.jd.com/{%= list.Id %}.html" target="_blank">\n                  <img src="{%= o.getImageDomain(list.Id) %}n5/{%= list.ImgUrl %}" width="50" height="50" alt="">\n                </a>\n              </div>\n              <div class="cart_name">\n                <a class="cart_name_lk" href="//item.jd.com/{%= list.Id %}.html" title="{%= list.Name %}" target="_blank">{%= list.Name %}</a>\n              </div>\n              <div class="cart_info">\n                <div class="cart_price">&yen;{%= list.PromotionPrice.toFixed(2) %}×{%= list.Num %}</div>\n                {% if (parseInt(list.FanPrice) > 0) { %}\n                  <div class="cart_tag cart_tag_green">返现：&yen;{%= list.FanPrice %}</div>\n                {% } %}\n                {% if (parseInt(list.Score) > 0) { %}\n                  <div class="cart_tag cart_tag_orange">送京豆：{%= list.Score %}</div>\n                {% } %}\n                <a class="cart_delete J_delete" data-id="{%= list.Id %}" data-method="RemoveProduct" data-type="{%= list.ItemType %}" href="javascript:;">删除</a>\n              </div>\n              {% $.each(list.CouponAD, function (k, jq) { %}\n                <div class="cart_gift cart_gift_jq">[赠券] 赠送{%= jq.Jing %}京券 {%= jq.LimitAd %}\n              </div>\n              {% }); %}\n            </div>\n          </li>\n        {% }); %}\n      </ul>',
            gift: '\n      <ul class="cart_giftlist">\n        {% $.each(o.TheGifts, function (k, list) { %}\n          <li class="cart_item">\n            <div class="cart_item_inner">\n              <div class="cart_img">\n                <a class="cart_img_lk" href="//item.jd.com/{%= list.MainSKU.Id %}.html" target="_blank">\n                  <img src="{%= o.getImageDomain(list.MainSKU.Id) %}n5/{%= list.MainSKU.ImgUrl %}" width="50" height="50" alt="">\n                </a>\n              </div>\n              <div class="cart_name">\n                <a class="cart_name_lk" href="//item.jd.com/{%= list.MainSKU.Id %}.html" title="{%= list.MainSKU.Name %}" target="_blank">{%= list.MainSKU.Name %}</a>\n              </div>\n              <div class="cart_info">\n                <div class="cart_price">&yen;{%= list.PromotionPrice.toFixed(2) %}×{%= list.Num %}</div>\n                {% if (parseInt(list.FanPrice) > 0) { %}\n                  <div class="cart_tag cart_tag_green">返现：&yen;{%= list.FanPrice %}</div>\n                {% } %}\n                {% if (parseInt(list.Score) > 0) { %}\n                  <div class="cart_tag cart_tag_orange">送京豆：{%= list.Score %}</div>\n                {% } %}\n                <a class="cart_delete J_delete" data-id="{%= list.MainSKU.Id %}" data-method="RemoveProduct" data-type="{%= list.MainSKU.ItemType %}" href="javascript:;">删除</a>\n              </div>\n              {% $.each(list.Skus, function (k, gift) { %}\n                <div class="cart_gift">\n                  <a class="cart_gift_lk" href="//item.jd.com/{%= gift.Id %}.html" target="_blank">[{% if(gift.Type==2) { %}赠品{% } %}{% if(gift.Type==1) { %}附件{% } %}] {%= gift.Name %}</a>\n                </div>\n              {% }); %}\n              {% $.each(list.CouponAD, function (k, jq) { %}\n                <div class="cart_gift cart_gift_jq">[赠券] 赠送{%= jq.Jing %}元京券 {%= jq.LimitAd %}\n              </div>\n              {% }); %}\n            </div>\n          </li>\n        {% }); %}\n      </ul>',
            suit: '\n      <ul class="cart_suitlist">\n        {% $.each(o.TheSuit, function (k, suit) { %}\n          {% var isVirtual = !!suit.VskuId; %}\n          <li class="cart_item cart_suit{%= isVirtual ? " cart_suit_virtual" : "" %}">\n            <div class="cart_item_hd">\n              <div class="cart_item_hd_info">\n                {% if (isVirtual) { %}\n                  <a href="//item.jd.com/{%= suit.VskuId %}.html" target="_blank">\n                    <span class="cart_suit_tag">[套装]</span> {%= suit.Name %}\n                  </a>\n                {% } else { %}\n                  <span class="cart_suit_tag">[套装]</span> {%= suit.Name %}\n                {% } %}\n              </div>\n              {% if (isVirtual) { %}\n                <a class="cart_delete J_delete" data-id="{%= suit.VskuId %}" data-method="RemoveSuit" data-type="{%= suit.SuitType %}" href="javascript:;">删除</a>\n              {% } %}\n              <div class="cart_item_hd_price">小计：<span class="cart_num">&yen;{%= (suit.PromotionPrice*suit.Num).toFixed(2) %}</span></div>\n            </div>\n            <ul class="cart_item_bd">\n              {% $.each(suit.Skus, function (k, list) { %}\n                <li class="cart_item">\n                  <div class="cart_item_inner">\n                    <div class="cart_img">\n                      <a class="cart_img_lk" href="//item.jd.com/{%= list.Id %}.html" target="_blank">\n                        <img src="{%= o.getImageDomain(list.Id) %}n5/{%= list.ImgUrl %}" width="50" height="50" alt="">\n                      </a>\n                    </div>\n                    <div class="cart_name">\n                      <a class="cart_name_lk" href="//item.jd.com/{%= list.Id %}.html" title="{%= list.Name %}" target="_blank">{%= list.Name %}</a>\n                    </div>\n                    <div class="cart_info">\n                      <div class="cart_price">&yen;{%= list.PromotionPrice.toFixed(2) %}×{%= list.Num %}</div>\n                      {% if (parseInt(list.FanPrice) > 0) { %}\n                        <div class="cart_tag cart_tag_green">返现：&yen;{%= list.FanPrice %}</div>\n                      {% } %}\n                      {% if (parseInt(list.Score) > 0) { %}\n                        <div class="cart_tag cart_tag_orange">送京豆：{%= list.Score %}</div>\n                      {% } %}\n                      {% if (!isVirtual) { %}\n                        <a class="cart_delete J_delete" data-id="{%= list.Id %}|{%= suit.Id %}" data-method="RemoveSuit" data-type="{%= list.ItemType %}" href="javascript:;">删除</a>\n                      {% } %}\n                    </div>\n                    {% $.each(list.Gifts, function (k, gift) { %}\n                      <div class="cart_gift">\n                        <a class="cart_gift_lk" href="//item.jd.com/{%= gift.Id %}.html" target="_blank">[{% if(gift.Type==2) { %}赠品{% } %}{% if(gift.Type==1) { %}附件{% } %}] {%= gift.Name %}</a>\n                      </div>\n                    {% }); %}\n                    {% $.each(list.CouponAD, function (k, jq) { %}\n                      <div class="cart_gift cart_gift_jq">[赠券] 赠送{%= jq.Jing %}元京券 {%= jq.LimitAd %}\n                    </div>\n                    {% }); %}\n                  </div>\n                </li>\n              {% }); %}\n            </ul>\n          </li>\n        {% }); %}\n      </ul>',
            mj: '\n      <ul class="cart_manjianlist">\n        {% $.each(o.ManJian, function (k, mj) { %}\n          <li class="cart_item">\n            <div class="cart_item_hd">\n              <div class="cart_item_hd_info">\n                <span class="cart_tag cart_tag_green">满减</span>\n                {% if (mj.ManFlag) { %}已购满{% if (mj.ManNum > 0) { %}{%= mj.ManNum %}件{% } else { %}{%= mj.ManPrice %}元{% } %}，已减{%= mj.JianPrice %}元\n                {% } else { %}购满{% if (mj.ManNum > 0) { %}{%= mj.ManNum %}件{% } else { %}{%= mj.ManPrice %}元{% } %}，即可享受满减优惠{% } %}\n                </div>\n              <div class="cart_item_hd_price">小计：&yen;{%= (mj.PromotionPrice*mj.Num).toFixed(2) %}</div>\n            </div>\n            {% if ($.isArray(mj.Skus) && mj.Skus.length) { %}\n              <ul class="cart_item_bd">\n                {% $.each(mj.Skus, function (k, list) { %}\n                  <li class="cart_item">\n                    <div class="cart_item_inner">\n                      <div class="cart_img">\n                        <a class="cart_img_lk" href="//item.jd.com/{%= list.Id %}.html" target="_blank">\n                          <img src="{%= o.getImageDomain(list.Id) %}n5/{%= list.ImgUrl %}" width="50" height="50" alt="">\n                        </a>\n                      </div>\n                      <div class="cart_name">\n                        <a class="cart_name_lk" href="//item.jd.com/{%= list.Id %}.html" title="{%= list.Name %}" target="_blank">{%= list.Name %}</a>\n                      </div>\n                      <div class="cart_info">\n                        <div class="cart_price">&yen;{%= list.PromotionPrice.toFixed(2) %}×{%= list.Num %}</div>\n                        {% if (parseInt(list.FanPrice) > 0) { %}\n                          <div class="cart_tag cart_tag_green">返现：&yen;{%= list.FanPrice %}</div>\n                        {% } %}\n                        {% if (parseInt(list.Score) > 0) { %}\n                          <div class="cart_tag cart_tag_orange">送京豆：{%= list.Score %}</div>\n                        {% } %}\n                        <a class="cart_delete J_delete" data-id="{%= list.Id %}|{%= mj.Id %}" data-method="RemoveSuit" data-type="{%= list.ItemType %}" href="javascript:;">删除</a>\n                      </div>\n                      {% $.each(list.Gifts, function (k, gift) { %}\n                        <div class="cart_gift">\n                          <a class="cart_gift_lk" href="//item.jd.com/{%= gift.Id %}.html" target="_blank">[{% if(gift.Type==2) { %}赠品{% } %}{% if(gift.Type==1) { %}附件{% } %}] {%= gift.Name %}</a>\n                        </div>\n                      {% }); %}\n                      {% $.each(list.CouponAD, function (k, jq) { %}\n                        <div class="cart_gift cart_gift_jq">[赠券] 赠送{%= jq.Jing %}元京券 {%= jq.LimitAd %}\n                      </div>\n                      {% }); %}\n                    </div>\n                  </li>\n                {% }); %}\n              </ul>\n            {% } %}\n            {% if ($.isArray(mj.Suits) && mj.Suits.length) { %}\n              <ul class="cart_item_bd">\n                {% $.each(mj.Suits, function (k, suit) { %}\n                  {% var isVirtual = !!suit.VskuId; %}\n                  <li class="cart_item cart_suit{%= isVirtual ? " cart_suit_virtual" : "" %}">\n                    <div class="cart_item_hd">\n                      <div class="cart_item_hd_info">\n                        {% if (isVirtual) { %}\n                          <a href="//item.jd.com/{%= suit.VskuId %}.html" target="_blank">\n                            <span class="cart_suit_tag">[套装]</span> {%= suit.Name %}\n                          </a>\n                        {% } else { %}\n                          <span class="cart_suit_tag">[套装]</span> {%= suit.Name %}\n                        {% } %}\n                      </div>\n                      {% if (isVirtual) { %}\n                        <a class="cart_delete J_delete" data-id="{%= suit.VskuId %}|{%= mj.Id %}" data-method="RemoveSuit" data-type="{%= suit.SuitType %}" href="javascript:;">删除</a>\n                      {% } %}\n                      <div class="cart_item_hd_price">小计：<span class="cart_num">&yen;{%= (suit.PromotionPrice*suit.Num).toFixed(2) %}</span></div>\n                    </div>\n                    <ul class="cart_item_bd">\n                      {% $.each(suit.Skus, function (k, list) { %}\n                        <li class="cart_item">\n                          <div class="cart_item_inner">\n                            <div class="cart_img">\n                              <a class="cart_img_lk" href="//item.jd.com/{%= list.Id %}.html" target="_blank">\n                                <img src="{%= o.getImageDomain(list.Id) %}n5/{%= list.ImgUrl %}" width="50" height="50" alt="">\n                              </a>\n                            </div>\n                            <div class="cart_name">\n                              <a class="cart_name_lk" href="//item.jd.com/{%= list.Id %}.html" title="{%= list.Name %}" target="_blank">{%= list.Name %}</a>\n                            </div>\n                            <div class="cart_info">\n                              <div class="cart_price">&yen;{%= list.PromotionPrice.toFixed(2) %}×{%= list.Num %}</div>\n                              {% if (parseInt(list.FanPrice) > 0) { %}\n                                <div class="cart_tag cart_tag_green">返现：&yen;{%= list.FanPrice %}</div>\n                              {% } %}\n                              {% if (parseInt(list.Score) > 0) { %}\n                                <div class="cart_tag cart_tag_orange">送京豆：{%= list.Score %}</div>\n                              {% } %}\n                              {% if (!isVirtual) { %}\n                                <a class="cart_delete J_delete" data-id="{%= list.Id %}|{%= suit.Id %}" data-method="RemoveSuit" data-type="{%= list.ItemType %}" href="javascript:;">删除</a>\n                              {% } %}\n                            </div>\n                            {% $.each(list.Gifts, function (k, gift) { %}\n                              <div class="cart_gift">\n                                <a class="cart_gift_lk" href="//item.jd.com/{%= gift.Id %}.html" target="_blank">[{% if(gift.Type==2) { %}赠品{% } %}{% if(gift.Type==1) { %}附件{% } %}] {%= gift.Name %}</a>\n                              </div>\n                            {% }); %}\n                            {% $.each(list.CouponAD, function (k, jq) { %}\n                              <div class="cart_gift cart_gift_jq">[赠券] 赠送{%= jq.Jing %}元京券 {%= jq.LimitAd %}\n                            </div>\n                            {% }); %}\n                          </div>\n                        </li>\n                      {% }); %}\n                    </ul>\n                  </li>\n                {% }); %}\n              </ul>\n            {% } %}\n          </li>\n        {% }); %}\n      </ul>',
            mz: '\n      <ul class="cart_manzenglist">\n        {% $.each(o.ManZeng, function (k, mz) { %}\n          <li class="cart_item">\n            <div class="cart_item_hd">\n              <div class="cart_item_hd_info">\n                <span class="cart_tag cart_tag_orange">{% if(mz.FullRefundType == 24) { %}换购{% } else if (mz.AddMoney > 0) { %}加价购{% } else { %}满赠{% } %}</span>\n                {% if(mz.AddMoney > 0 || mz.FullRefundType == 24) { %}\n                  {% if(mz.ManFlag) { %}\n                    已购满{% if (mz.FullRefundType == 24) { %}{%= mz.ManNum %}件{% } else { %}{%= mz.ManPrice %}元{% } %}，您{% if(mz.ManGifts.length > 0) { %}已{% } else { %}可{% } %}加价换购商品\n                  {% } else { %}\n                    购满{% if (mz.FullRefundType == 24) { %}{%= mz.ManNum %}件{% } else { %}{%= mz.ManPrice %}元{% } %}，即可加价换购商品\n                  {% } %}\n                {% } else { %}\n                  {% if(mz.ManFlag) { %}\n                    已购满{%= mz.ManPrice %}元，您{% if(mz.ManGifts.length > 0) { %}已{% } else { %}可{% } %}领赠品\n                  {% } else { %}\n                    购满{%= mz.ManPrice %}元，即可领取赠品\n                  {% } %}\n                {% } %}\n              </div>\n              <div class="cart_item_hd_price">小计：&yen;{%= (mz.PromotionPrice*mz.Num).toFixed(2) %}</div>\n            </div>\n            {% if ($.isArray(mz.ManGifts) && mz.ManGifts.length) { %}\n              <ul class="cart_item_bd">\n                {% $.each(mz.ManGifts, function (k, gift) { %}\n                  <li class="cart_item cart_item_mz">\n                    <div class="cart_item_inner">\n                      <div class="cart_gift">\n                        <a class="cart_gift_lk" href="{%= gift.Id %}" target="_blank">[{% if(mz.AddMoney > 0 || mz.FullRefundType == 24) { %}换购品{% } else { %}赠品{% } %}]{%= gift.Name %}</a>×{%= gift.Num %}\n                      </div>\n                    </div>\n                  </li>\n                {% }); %}\n              </ul>\n            {% } %}\n            {% if ($.isArray(mz.Skus) && mz.Skus.length) { %}\n              <ul class="cart_item_bd">\n                {% $.each(mz.Skus, function (k, list) { %}\n                  <li class="cart_item">\n                    <div class="cart_item_inner">\n                      <div class="cart_img">\n                        <a class="cart_img_lk" href="//item.jd.com/{%= list.Id %}.html" target="_blank">\n                          <img src="{%= o.getImageDomain(list.Id) %}n5/{%= list.ImgUrl %}" width="50" height="50" alt="">\n                        </a>\n                      </div>\n                      <div class="cart_name">\n                        <a class="cart_name_lk" href="//item.jd.com/{%= list.Id %}.html" title="{%= list.Name %}" target="_blank">{%= list.Name %}</a>\n                      </div>\n                      <div class="cart_info">\n                        <div class="cart_price">&yen;{%= list.PromotionPrice.toFixed(2) %}×{%= list.Num %}</div>\n                        {% if (parseInt(list.FanPrice) > 0) { %}\n                          <div class="cart_tag cart_tag_green">返现：&yen;{%= list.FanPrice %}</div>\n                        {% } %}\n                        {% if (parseInt(list.Score) > 0) { %}\n                          <div class="cart_tag cart_tag_orange">送京豆：{%= list.Score %}</div>\n                        {% } %}\n                        <a class="cart_delete J_delete" data-id="{%= list.Id %}|{%= mz.Id %}" data-method="RemoveSuit" data-type="{%= list.ItemType %}" href="javascript:;">删除</a>\n                      </div>\n                      {% $.each(list.Gifts, function (k, gift) { %}\n                        <div class="cart_gift">\n                          <a class="cart_gift_lk" href="//item.jd.com/{%= gift.Id %}.html" target="_blank">[{% if(gift.Type==2) { %}赠品{% } %}{% if(gift.Type==1) { %}附件{% } %}] {%= gift.Name %}</a>\n                        </div>\n                      {% }); %}\n                      {% $.each(list.CouponAD, function (k, jq) { %}\n                        <div class="cart_gift cart_gift_jq">[赠券] 赠送{%= jq.Jing %}元京券 {%= jq.LimitAd %}\n                      </div>\n                      {% }); %}\n                    </div>\n                  </li>\n                {% }); %}\n              </ul>\n            {% } %}\n            {% if ($.isArray(mz.Suits) && mz.Suits.length) { %}\n              <ul class="cart_item_bd">\n                {% $.each(mz.Suits, function (k, suit) { %}\n                  {% var isVirtual = !!suit.VskuId; %}\n                  <li class="cart_item cart_suit{%= isVirtual ? " cart_suit_virtual" : "" %}">\n                    <div class="cart_item_hd">\n                      <div class="cart_item_hd_info">\n                        {% if (isVirtual) { %}\n                          <a href="//item.jd.com/{%= suit.VskuId %}.html" target="_blank">\n                            <span class="cart_suit_tag">[套装]</span> {%= suit.Name %}\n                          </a>\n                        {% } else { %}\n                          <span class="cart_suit_tag">[套装]</span> {%= suit.Name %}\n                        {% } %}\n                      </div>\n                      {% if (isVirtual) { %}\n                        <a class="cart_delete J_delete" data-id="{%= suit.VskuId %}|{%= mz.Id %}" data-method="RemoveSuit" data-type="{%= suit.SuitType %}" href="javascript:;">删除</a>\n                      {% } %}\n                      <div class="cart_item_hd_price">小计：<span class="cart_num">&yen;{%= (suit.PromotionPrice*suit.Num).toFixed(2) %}</span></div>\n                    </div>\n                    <ul class="cart_item_bd">\n                      {% $.each(suit.Skus, function (k, list) { %}\n                        <li class="cart_item">\n                          <div class="cart_item_inner">\n                            <div class="cart_img">\n                              <a class="cart_img_lk" href="//item.jd.com/{%= list.Id %}.html" target="_blank">\n                                <img src="{%= o.getImageDomain(list.Id) %}n5/{%= list.ImgUrl %}" width="50" height="50" alt="">\n                              </a>\n                            </div>\n                            <div class="cart_name">\n                              <a class="cart_name_lk" href="//item.jd.com/{%= list.Id %}.html" title="{%= list.Name %}" target="_blank">{%= list.Name %}</a>\n                            </div>\n                            <div class="cart_info">\n                              <div class="cart_price">&yen;{%= list.PromotionPrice.toFixed(2) %}×{%= list.Num %}</div>\n                              {% if (parseInt(list.FanPrice) > 0) { %}\n                                <div class="cart_tag cart_tag_green">返现：&yen;{%= list.FanPrice %}</div>\n                              {% } %}\n                              {% if (parseInt(list.Score) > 0) { %}\n                                <div class="cart_tag cart_tag_orange">送京豆：{%= list.Score %}</div>\n                              {% } %}\n                              {% if (!isVirtual) { %}\n                                <a class="cart_delete J_delete" data-id="{%= list.Id %}|{%= suit.Id %}" data-method="RemoveSuit" data-type="{%= list.ItemType %}" href="javascript:;">删除</a>\n                              {% } %}\n                            </div>\n                            {% $.each(list.Gifts, function (k, gift) { %}\n                              <div class="cart_gift">\n                                <a class="cart_gift_lk" href="//item.jd.com/{%= gift.Id %}.html" target="_blank">[{% if(gift.Type==2) { %}赠品{% } %}{% if(gift.Type==1) { %}附件{% } %}] {%= gift.Name %}</a>\n                              </div>\n                            {% }); %}\n                            {% $.each(list.CouponAD, function (k, jq) { %}\n                              <div class="cart_gift cart_gift_jq">[赠券] 赠送{%= jq.Jing %}元京券 {%= jq.LimitAd %}\n                            </div>\n                            {% }); %}\n                          </div>\n                        </li>\n                      {% }); %}\n                    </ul>\n                  </li>\n                {% }); %}\n              </ul>\n            {% } %}\n          </li>\n        {% }); %}\n      </ul>'
        },
        FN_BindEvents: function() {
            function FN_BindEvents() {
                var e = this;
                $("#J_cart_pop .J_delete").bind("click", function() {
                    var t = $(this).attr("data-id").split("|")
                      , n = $(this).attr("data-method")
                      , i = $(this).attr("data-type")
                      , o = {
                        method: n,
                        type: i,
                        cartId: t[0]
                    };
                    t && (t.length > 1 && t[1] && (o.targetId = t[1]),
                    (0,
                    a.loadAsync)({
                        url: e.URL_Serv,
                        params: o,
                        dataType: "jsonp"
                    }).then(function(t) {
                        t.Result && e.FN_Refresh()
                    }))
                })
            }
            return FN_BindEvents
        }(),
        FN_Refresh: function() {
            function FN_Refresh() {
                var e = this
                  , t = this.el
                  , n = t.find(".dorpdown-layer").eq(0);
                (0,
                a.loadAsync)({
                    url: e.URL_Serv,
                    params: {
                        method: "GetCart"
                    },
                    dataType: "jsonp"
                }).then(function(t) {
                    var i = t.Cart
                      , s = i.TheSkus.length + i.TheSuit.length + i.TheGifts.length + i.ManJian.length + i.ManZeng.length;
                    t.Cart.getImageDomain = a.getImageDomain,
                    t.Cart.URLS = r.URLS;
                    var c = (0,
                    o["default"])(e.TPL_List.single, t.Cart)
                      , l = (0,
                    o["default"])(e.TPL_List.gift, t.Cart)
                      , d = (0,
                    o["default"])(e.TPL_List.suit, t.Cart)
                      , u = (0,
                    o["default"])(e.TPL_List.mz, t.Cart)
                      , f = (0,
                    o["default"])(e.TPL_List.mj, t.Cart);
                    s > 0 ? (n.html((0,
                    o["default"])(e.TPL_List.wrap, t.Cart)),
                    n.find(".J_cart_bd").html(c + l + d + f + u)) : n.html(e.TPL_NoGoods),
                    e.FN_BindEvents()
                }),
                e.DATA_Amount = (0,
                a.readCookie)(e.DATA_Cookie),
                null != e.DATA_Amount && $("#shopping-amount").text(e.DATA_Amount).parent().show()
            }
            return FN_Refresh
        }()
    };
    t["default"] = init
}
, function(e, t) {}
, function(e, t, n) {
    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    n(42);
    var i = n(43)
      , o = _interopRequireDefault(i)
      , a = n(45)
      , r = _interopRequireDefault(a)
      , s = n(48)
      , c = _interopRequireDefault(s)
      , l = n(50)
      , d = _interopRequireDefault(l)
      , u = n(52)
      , f = _interopRequireDefault(u)
      , p = n(54)
      , h = _interopRequireDefault(p)
      , m = n(2)
      , g = function() {
        return [$("#J_fs_act").delegate("[clstag]", "click", function(e) {
            var t = (0,
            m.getjQLogParams)(e)
              , n = t.url
              , i = t.poi;
            n && i && (0,
            m.logClick)({
                poi: i,
                url: n,
                comment: "背板"
            })
        })]
    };
    t["default"] = function() {
        new o["default"]({
            $el: $(".J_cate")
        }),
        new r["default"]({
            $el: $(".J_focus")
        }),
        new c["default"]({
            $el: $(".J_rec")
        }),
        new d["default"]({
            $el: $(".J_user")
        }),
        new f["default"]({
            $el: $(".J_news")
        }),
        new h["default"]({
            container: $("#J_service"),
            col: $("#J_fs_col4")
        });
        g()
    }
}
, function(e, t) {}
, function(e, t, n) {
    function _classCallCheck(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
        function defineProperties(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(e, t, n) {
            return t && defineProperties(e.prototype, t),
            n && defineProperties(e, n),
            e
        }
    }();
    n(44);
    var o = n(1)
      , a = n(3)
      , r = n(0)
      , s = (n(2),
    function() {
        function Cate(e) {
            _classCallCheck(this, Cate),
            this.conf = $.extend({
                $el: null
            }, e),
            this.init()
        }
        return i(Cate, [{
            key: "init",
            value: function() {
                function init() {
                    var e = this.conf
                      , t = e.$el.attr("data-type")
                      , n = pageConfig.leftCateABtestSwitch;
                    e.type = t || "home",
                    e.isSubDataLoaded = !1,
                    e.isPopMenuBinded = !1,
                    e.dataUrl = o.APIS.CATEA,
                    e.dataBackupUrl = o.APIS.CATEA_STOBACKUP,
                    e.scriptCharset = "gb2312";
                    var i = a.USER.jda
                      , r = !0;
                    if (n && "string" == typeof i) {
                        var s = pageConfig.leftCateABtestSection || {
                            start: 1e3,
                            end: 2e3
                        }
                          , c = a.USER.unifiedHash;
                        c > s.start && c <= s.end && (r = !1)
                    }
                    "boolean" == typeof pageConfig.isCateUseA ? pageConfig.isCateUseA || (e.dataUrl = o.APIS.CATEB,
                    e.dataBackupUrl = o.APIS.CATEB_BACKUP,
                    e.scriptCharset = "utf-8") : r || (e.dataUrl = o.APIS.CATEB,
                    e.dataBackupUrl = o.APIS.CATEB_BACKUP,
                    e.scriptCharset = "utf-8"),
                    pageConfig.leftCateABtestUseA = r,
                    e.imgIndex = 0,
                    this.$popCtn = $(".JS_popCtn", this.conf.$el),
                    this.loaded = !1,
                    this.initEvent()
                }
                return init
            }()
        }, {
            key: "initEvent",
            value: function() {
                function initEvent() {
                    var e = this
                      , t = this.conf.$el
                      , n = null
                      , i = null
                      , o = null
                      , a = !1;
                    t.bind("mouseenter", function() {
                        i && clearTimeout(i),
                        i = setTimeout(function() {
                            a || (a = !0,
                            e.initSubCate())
                        }, 200)
                    }).one("mousemove", function() {
                        o && clearTimeout(o),
                        o = setTimeout(function() {
                            a || (a = !0,
                            e.initSubCate())
                        }, 200)
                    }).one("mouseleave", function() {
                        t.find(".cate_menu_item").removeClass("hover")
                    }).delegate(".cate_menu_item", "mouseenter", function(t) {
                        n && clearTimeout(n),
                        n = setTimeout(function() {
                            e.conf.isPopMenuBinded || (e._hoverel = $(t.currentTarget),
                            e.$popCtn.show())
                        }, 200)
                    }).bind("mouseleave", function() {
                        n && clearTimeout(n),
                        i && clearTimeout(i),
                        e.conf.isPopMenuBinded || e.$popCtn.hide()
                    })
                }
                return initEvent
            }()
        }, {
            key: "initSubCate",
            value: function() {
                function initSubCate() {
                    var e = this
                      , t = e.conf.$el;
                    e.conf.isSubDataLoaded || e.getSubCateData(this.conf.type, function() {
                        var i = $("#J_popCtn");
                        n.e(13).then(n.bind(null, 60)).then(function(n) {
                            var o = n["default"];
                            new o({
                                $container: t,
                                navItemHook: ".cate_menu_item",
                                navItemOn: "cate_menu_item_on",
                                popItemHook: ".cate_part",
                                itemEnterCallBack: function() {
                                    function itemEnterCallBack(e) {
                                        var n = $(window).scrollTop()
                                          , o = t.offset().top
                                          , a = 0;
                                        n > o && (a = n - o),
                                        i.css({
                                            top: a
                                        }),
                                        _.eventCenter.trigger("lazyload:DOMUpdate", {
                                            detail: {
                                                $el: e.$displayEl
                                            }
                                        })
                                    }
                                    return itemEnterCallBack
                                }()
                            });
                            e.$popCtn.is(":hidden") || e._hoverel.trigger("mouseenter.itemEnter"),
                            e.conf.isPopMenuBinded = !0
                        })
                    })
                }
                return initSubCate
            }()
        }, {
            key: "getSubCateData",
            value: function() {
                function getSubCateData(e, t) {
                    var n = this.conf;
                    (0,
                    r.loadAsync)({
                        url: n.dataUrl,
                        charset: n.scriptCharset,
                        cache: !0,
                        name: "getCategoryCallback",
                        backup: n.dataBackupUrl,
                        timeout: o.CONSTS.REQ_TIMEOUT,
                        dataCheck: function() {
                            function dataCheck(e) {
                                return !!(e && e.data && e.data.length)
                            }
                            return dataCheck
                        }()
                    }).then($.proxy(function(e) {
                        this.render(e),
                        this.conf.isSubDataLoaded = !0,
                        t && t()
                    }, this))
                }
                return getSubCateData
            }()
        }, {
            key: "padding",
            value: function() {
                function padding(e) {
                    return (e < 9 ? "0" : "") + (1 + e)
                }
                return padding
            }()
        }, {
            key: "render",
            value: function() {
                function render(e) {
                    var t = this
                      , n = e.data
                      , i = t.padding
                      , o = ""
                      , a = function() {
                        function clstagPrefix(e, t, n, i) {
                            return "h|keycount|head|category|" + Array.prototype.slice.call(arguments).join("")
                        }
                        return clstagPrefix
                    }()
                      , r = void 0
                      , s = n.length
                      , c = void 0
                      , l = void 0
                      , d = void 0
                      , u = void 0
                      , f = void 0
                      , p = void 0
                      , h = void 0
                      , m = void 0
                      , g = void 0
                      , v = void 0
                      , _ = void 0
                      , y = void 0
                      , b = void 0
                      , w = void 0
                      , k = void 0
                      , C = void 0
                      , S = void 0
                      , x = void 0
                      , j = void 0;
                    for (r = 0; r < s; r++) {
                        for (c = n[r],
                        S = '<div class="cate_part_col1">',
                        x = '<div class="cate_part_col2">',
                        w = "",
                        d = c.t.length,
                        l = 0; l < d; l++)
                            w += t.getLinkHtml({
                                str: c.t[l],
                                linkClass: "cate_channel_lk",
                                imagesWidth: null,
                                imagesHeight: 24,
                                level: null,
                                textPrefix: null,
                                textSuffix: '<i class="iconfont cate_channel_arrow">&#xe601;</i>',
                                clstag: a(i(r), "b", i(l))
                            });
                        for (w = '<div class="cate_channel">' + w + "</div>",
                        S += w,
                        b = "",
                        d = c.s.length,
                        l = 0; l < d; l++)
                            for (u = c.s[l],
                            p = u.s.length,
                            f = 0; f < p; f++) {
                                if (h = u.s[f].s,
                                v = t.getLinkHtml({
                                    str: u.s[f].n,
                                    linkClass: "cate_detail_tit_lk",
                                    imagesWidth: null,
                                    imagesHeight: null,
                                    level: 2,
                                    textPrefix: null,
                                    textSuffix: '<i class="iconfont cate_detail_tit_arrow">&#xe601;</i>'
                                }),
                                y = '<dt class="cate_detail_tit" clstag="' + a(i(r), "c", i(f)) + '">' + v + "</dt>",
                                _ = "",
                                0 !== h)
                                    for (g = h.length,
                                    m = 0; m < g; m++)
                                        _ += t.getLinkHtml({
                                            str: h[m].n,
                                            linkClass: "cate_detail_con_lk",
                                            imagesWidth: null,
                                            imagesHeight: 16,
                                            level: 3,
                                            textPrefix: null,
                                            textSuffix: null,
                                            index: m
                                        });
                                _ = '<dd class="cate_detail_con" clstag="' + a(i(r), "d", i(f)) + '">' + _ + "</dd>",
                                b += '<dl class="cate_detail_item cate_detail_item' + (f + 1) + '">' + y + _ + "</dl>"
                            }
                        for (b = '<div class="cate_detail">' + b + "</div>",
                        S += b + "</div>",
                        k = "",
                        C = 0,
                        d = c.b.length,
                        l = 0; l < d; l++)
                            l < 8 && (k += t.getLinkHtml({
                                str: c.b[l],
                                linkClass: "cate_brand_lk",
                                imagesWidth: 83,
                                imagesHeight: 35,
                                clstag: a(i(r), "e", i(l))
                            }),
                            C += 1);
                        for (C > 0 && C % 2 == 1 && (k += '<a><img data-lazy-img="//img10.360buyimg.com/da/jfs/t757/162/604852976/158/9ed36f8/54c8699bNc2cfc6a1.png" src="//misc.360buyimg.com/mtd/pc/common/img/blank.png" /></a>'),
                        k = '<div class="cate_brand">' + k + "</div>",
                        x += k,
                        j = "",
                        d = c.p.length,
                        l = 0; l < d; l++)
                            l < 2 && (j += t.getLinkHtml({
                                str: c.p[l],
                                linkClass: "cate_promotion_lk",
                                imagesWidth: 168,
                                imagesHeight: 134,
                                clstag: a(i(r), "f", i(l))
                            }));
                        j = '<div class="cate_promotion">' + j + "</div>",
                        x += j + "</div>",
                        o += '<div class="cate_part clearfix" id="cate_item' + (r + 1) + '" data-id="' + c.id + '">' + S + x + "</div>"
                    }
                    this.$popCtn.html(o).removeClass("mod_loading")
                }
                return render
            }()
        }, {
            key: "getLinkHtml",
            value: function() {
                function getLinkHtml(e) {
                    var t = e.str
                      , n = e.linkClass
                      , i = e.imagesWidth
                      , o = e.imagesHeight
                      , a = e.level
                      , r = e.textPrefix
                      , s = e.textSuffix
                      , c = e.index
                      , l = e.clstag ? ' clstag="' + e.clstag + '"' : ""
                      , d = t.split("|")
                      , u = []
                      , f = "";
                    d[0] = d[0].replace(/ /g, "");
                    var p = /^\d.*\d$/.test(d[0]) ? d[0] : d[0].replace(/^(http:\/\/|\/\/)/, "");
                    void 0 !== a && /^\d.*\d$/.test(d[0]) && (2 === a ? p = "channel.jd.com/" + d[0] + ".html" : 3 === a && (2 === d[0].split("-").length ? p = "channel.jd.com/" + d[0] + ".html" : 3 === d[0].split("-").length && (p = "list.jd.com/list.html?cat=" + d[0].replace(/-/g, ",")))),
                    p = "//" + p,
                    "https:" === location.protocol && Cate.NO_HTTPS_DOMAIN_REG.test(p) && (p = "http:" + p),
                    d[2],
                    n && u.push(n),
                    u.length > 0 && (f = 'class="' + u.join(" ") + '"');
                    var h = "";
                    return h = d[0] ? '<a href="' + p + '" ' + f + l + ' target="_blank">' : "<span " + f.replace(/lk/, "txt") + ">",
                    d[2] ? (this.conf.imgIndex > 4 && (this.conf.imgIndex = 0),
                    i = i ? ' width="' + i + '"' : "",
                    o = o ? ' height="' + o + '"' : "",
                    h += '<img data-lazy-img="//img1' + this.conf.imgIndex + ".360buyimg.com/" + d[2] + '"  ' + i + o + ' src="//misc.360buyimg.com/mtd/pc/common/img/blank.png" data-webp="no"/>',
                    this.conf.imgIndex += 1) : h += (r || "") + d[1] + (s || ""),
                    d[0] ? h += "</a>" : h += "</span>",
                    3 === a && 0 === c && 1 === parseInt(d[3], 10) && d[0] && (u.push(n + "_hot"),
                    f = 'class="' + u.join(" ") + '"',
                    h = '<a href="' + p + '" ' + f + ' target="_blank"><i class="cate_con_hot_l"></i>' + (r || "") + d[1] + (s || "") + '<i class="cate_con_hot_r"></i></a>'),
                    h
                }
                return getLinkHtml
            }()
        }]),
        Cate
    }());
    s.NO_HTTPS_DOMAIN_REG = /^\/\/(car\.jd\.com|group\.jd\.com|huishou\.jd\.com|dujia\.jd\.com)/,
    t["default"] = s
}
, function(e, t) {}
, function(e, t, n) {
    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    function _classCallCheck(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
        }
        return e
    }
      , o = function() {
        function defineProperties(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(e, t, n) {
            return t && defineProperties(e.prototype, t),
            n && defineProperties(e, n),
            e
        }
    }();
    n(46);
    var a = n(1)
      , r = n(3)
      , s = n(0)
      , c = n(2)
      , l = n(17)
      , d = _interopRequireDefault(l)
      , u = n(47)
      , f = _interopRequireDefault(u)
      , p = n(6)
      , h = _interopRequireDefault(p)
      , m = function() {
        function Focus(e) {
            _classCallCheck(this, Focus),
            this.conf = $.extend({
                $el: null
            }, e),
            this.width = 790,
            this.init()
        }
        return o(Focus, [{
            key: "init",
            value: function() {
                function init() {
                    this.buildCarouselDom(),
                    this.initEvent()
                }
                return init
            }()
        }, {
            key: "buildCarouselDom",
            value: function() {
                function buildCarouselDom() {
                    var e = this
                      , t = [];
                    (0,
                    s.loadAsync)({
                        url: a.APIS.FOCUS,
                        params: {
                            pin: r.USER.pin,
                            uuid: r.USER.uuid
                        },
                        name: "jsonpFocus",
                        retryTimes: 0,
                        timeout: 1e3,
                        backup: [a.APIS.FOCUS_BACKUP, a.APIS.FOCUS_STOBACKUP],
                        dataCheck: function() {
                            function dataCheck(e) {
                                if (e.data && $.isArray(e.data))
                                    return !0
                            }
                            return dataCheck
                        }(),
                        jsonpCallback: "jsonpFocus"
                    }).then(function(n) {
                        n.__$$backupCall && h["default"].processBackup(1),
                        n.data && $.isArray(n.data) && (t = n.data,
                        e.createCarsouelDom(t))
                    })["catch"](function() {
                        h["default"].processBackup(1),
                        h["default"].processHidedFloor(1)
                    })
                }
                return buildCarouselDom
            }()
        }, {
            key: "createCarsouelDom",
            value: function() {
                function createCarsouelDom(e) {
                    var t = ""
                      , n = ""
                      , i = this.conf.$el
                      , o = $(".J_focus_main", i)
                      , r = i.find(".J_focus_list")
                      , l = a.CONSTS.CLSTAGPREFIX
                      , d = "head|focus";
                    pageConfig.clog = {},
                    e.splice(6, 2, e.pop()),
                    $.each(e, function(e, n) {
                        if (n && n.length) {
                            var i = void 0
                              , o = void 0
                              , a = void 0;
                            n = (0,
                            s.getRandomData)(n),
                            pageConfig.clog.logDomain = pageConfig.clog.logDomain || n.logDomain,
                            pageConfig.clog.logV = pageConfig.clog.logV || n.logV,
                            i = (0,
                            s.processImage)(n.src, {
                                resize: ["590x470", "590x470"],
                                clip: "590x470",
                                replacem: e,
                                webp: !0
                            }),
                            n.clog ? o = '\n          <li class="J_focus_item focus_item">\n            <a href="' + n.href + '"\n              class="focus_item_lk mod_loading J_focus_item_lk"\n              fclog="' + n.clog + '"\n              clstag="' + l + "|head|focus|" + (0,
                            s.padding)(2 + e, 2) + '"\n              target="_blank"\n              ' + (0,
                            c.generateLogParams)(n) + '>\n              <img data-lazy-src="' + i + '"\n                alt="' + n.alt + '"\n                src="//misc.360buyimg.com/mtd/pc/common/img/blank.png"\n                class="J_focus_item_img focus_item_img" />\n            </a>\n          </li>' : (a = (0,
                            s.getBiAttr)(n),
                            o = '\n          <li class="J_focus_item focus_item">\n            <a href="' + n.href + '"\n              class="focus_item_lk mod_loading J_focus_item_lk J_log"\n              clstag="' + l + "|head|focus|" + (0,
                            s.padding)(2 + e, 2) + '"\n              target="_blank"' + a + "\n              " + (0,
                            c.generateLogParams)(n) + '>\n              <img data-lazy-src="' + i + '"\n                alt="' + n.alt + '"\n                src="//misc.360buyimg.com/mtd/pc/common/img/blank.png"\n                class="J_focus_item_img focus_item_img" />\'\n            </a>\n          </li>'),
                            t += o
                        }
                    }),
                    r.length || (n = '\n        <ul class="focus_list J_focus_list">' + t + '</ul>\n        <div class="J_slider_indicator slider_indicators"></div>\n        <a href="javascript:void(0)"\n          class="J_focus_control_prev focus_control_item focus_control_prev"\n          clstag="' + l + "|" + d + '|sl">\n          <i class="iconfont">&#xe602;</i>\n        </a>\n        <a href="javascript:void(0)"\n          class="J_focus_control_next focus_control_item focus_control_next"\n          clstag="' + l + "|" + d + '|sr">\n          <i class="iconfont">&#xe601;</i>\n        </a>',
                    o.append(n).removeClass("mod_lazyload")),
                    r.append(t),
                    pageConfig.enableActMark && $(".J_focus_item_lk:eq(0)", r).append('<i class="mod_actmark mod_actmark_focus"></i>'),
                    this.initCarousel(),
                    this.initCarouselNav()
                }
                return createCarsouelDom
            }()
        }, {
            key: "monitor",
            value: function() {
                function monitor(e) {
                    if (e) {
                        var t = new Image;
                        t.src = e + "&m=UA-J2011-1&ref=" + encodeURIComponent(document.referrer) + "&random=" + Math.random(),
                        t = null
                    }
                }
                return monitor
            }()
        }, {
            key: "errorMonitor",
            value: function() {
                function errorMonitor(e, t) {
                    var n = a.APIS.FOCUS_BOTTOM_REC_ERR_LOG;
                    e ? e.data && e.data.length || this.monitor(n + "2") : "timeout" === t ? this.monitor(n + "3") : this.monitor(n + "4")
                }
                return errorMonitor
            }()
        }, {
            key: "initCarousel",
            value: function() {
                function initCarousel() {
                    var e = this.conf.$el
                      , t = e.find(".focus_list")
                      , n = t.children().length;
                    this.carousel = new f["default"]({
                        container: t,
                        itemSelector: ".focus_item",
                        activeClass: "focus_item_active",
                        startIndex: 0,
                        duration: 300,
                        delay: 3e3,
                        zIndex: 1,
                        switchType: "fade",
                        onFirstSwitch: $.proxy(function(e) {
                            var o = $(".J_focus_item", t).eq(e)
                              , a = $(".J_focus_item_lk", o)
                              , r = $(".J_focus_item_img", o)
                              , l = e + 1;
                            l === n && (l = 0);
                            var d = $(".J_focus_item", t).eq(l).find(".J_focus_item_img");
                            this.loadImage(r),
                            this.loadImage(d);
                            var u = (0,
                            c.getjQLogParams)(a);
                            (0,
                            s.afterLoad)().then(function() {
                                (0,
                                c.logImpr)(i({}, u, {
                                    comment: "首焦"
                                })),
                                a.attr("fclog") && pageConfig.sendClog(a)
                            })
                        }, this),
                        onBeforeSwitch: $.proxy(function(e, t) {
                            $(".slider_indicators_btn", this.conf.$el).eq(t).siblings().removeClass("slider_indicators_btn_active").end().addClass("slider_indicators_btn_active")
                        }, this)
                    })
                }
                return initCarousel
            }()
        }, {
            key: "loadImage",
            value: function() {
                function loadImage(e) {
                    if (e.length) {
                        var t = e.data("lazy-src");
                        t && t.length && e.attr("src", t).one("load", function() {
                            $(this).removeAttr("data-lazy-src").parent().removeClass("mod_loading")
                        }).each(function() {
                            this.complete && $(this).load()
                        })
                    }
                }
                return loadImage
            }()
        }, {
            key: "initEvent",
            value: function() {
                function initEvent() {
                    var e = this;
                    this.conf.$el.delegate(".slider_indicators_btn", "mouseenter", d["default"].throttle(function() {
                        var t = e.carousel;
                        if (t) {
                            var n = $(this).index();
                            t.stop(),
                            n !== t.getCurrent() && ($(this).siblings().removeClass("slider_indicators_btn_active").end().addClass("slider_indicators_btn_active"),
                            t.switchTo(n))
                        }
                    }, 500)).delegate(".J_focus_bottom_btn[data-clk]", "click", function() {
                        var t = $(this);
                        e.monitor(t.data("clk"))
                    }).delegate(".J_focus_control_prev", "click", $.proxy(this.prevCarousel, this)).delegate(".J_focus_control_prev", "mouseenter", function() {
                        var t = e.carousel;
                        t && (t.stop(),
                        e.restartCarousel())
                    }).delegate(".J_focus_control_next", "click", $.proxy(this.nextCarousel, this)).delegate(".J_focus_control_next", "mouseenter", function() {
                        var t = e.carousel;
                        t && (t.stop(),
                        e.restartCarousel())
                    })
                }
                return initEvent
            }()
        }, {
            key: "prevCarousel",
            value: function() {
                function prevCarousel(e) {
                    e && e.preventDefault();
                    var t = this.carousel;
                    t && (t.stop().switchToPrev(),
                    this.restartCarousel())
                }
                return prevCarousel
            }()
        }, {
            key: "nextCarousel",
            value: function() {
                function nextCarousel(e) {
                    e && e.preventDefault();
                    var t = this.carousel;
                    t && (t.stop().switchToNext(),
                    this.restartCarousel())
                }
                return nextCarousel
            }()
        }, {
            key: "restartCarousel",
            value: function() {
                function restartCarousel() {
                    var e = this.carousel;
                    e && (clearTimeout(this.restartTimer),
                    this.restartTimer = setTimeout(function() {
                        e.start()
                    }, 4e3))
                }
                return restartCarousel
            }()
        }, {
            key: "initCarouselNav",
            value: function() {
                function initCarouselNav() {
                    for (var e = this.carousel.length, t = [], n = a.CONSTS.CLSTAGPREFIX, i = 0; i < e; i++) {
                        var o = null
                          , r = "";
                        i === e - 1 ? o = "slider_indicators_btn_last" : 0 === i && (o = "slider_indicators_btn_active"),
                        o = "string" == typeof o ? o : "",
                        r = '<i class="slider_indicators_btn ' + o + '"\n        clstag="' + n + "|head|focus|s" + (0,
                        s.padding)(1 + i, 2) + '"></i>',
                        t.push(r)
                    }
                    var c = this.conf.$el.find(".J_slider_indicator");
                    c.html(t.join("")).css("marginLeft", -c.outerWidth() / 2 + "px").show()
                }
                return initCarouselNav
            }()
        }]),
        Focus
    }();
    t["default"] = m
}
, function(e, t) {}
, function(e, t) {
    function _classCallCheck(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function defineProperties(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(e, t, n) {
            return t && defineProperties(e.prototype, t),
            n && defineProperties(e, n),
            e
        }
    }()
      , i = function() {
        function Carousel(e) {
            _classCallCheck(this, Carousel),
            $.extend(this, {
                container: null,
                itemSelector: null,
                itemWidth: 0,
                activeClass: "active",
                startIndex: 0,
                duration: 500,
                delay: 2e3,
                switchType: "fade",
                isAuto: !0,
                zIndex: 5,
                onFirstSwitch: function() {
                    function onFirstSwitch() {}
                    return onFirstSwitch
                }(),
                onBeforeSwitch: function() {
                    function onBeforeSwitch() {}
                    return onBeforeSwitch
                }(),
                onAfterSwitch: function() {
                    function onAfterSwitch() {}
                    return onAfterSwitch
                }()
            }, e),
            this.$container = $(this.container),
            this.init()
        }
        return n(Carousel, [{
            key: "init",
            value: function() {
                function init() {
                    this.initElements(),
                    this.initEvent(),
                    this.hasSwitched = [],
                    this.setCurrent(this.startIndex),
                    this.isAuto && this.start()
                }
                return init
            }()
        }, {
            key: "initElements",
            value: function() {
                function initElements() {
                    switch (this.$items = this.$container.find(this.itemSelector),
                    this.length = this.$items.length,
                    this.switchType) {
                    case "fade":
                        this.$items.css({
                            opacity: 0,
                            zIndex: 0,
                            position: "absolute"
                        });
                        break;
                    case "slide":
                        var e = this.$items
                          , t = $(e.get(0)).clone()
                          , n = $(e.get(this.length - 1)).clone();
                        this.$container.append(t).prepend(n),
                        this.$items = this.$container.find(this.itemSelector),
                        this.$container.css({
                            width: (this.length + 2) * this.itemWidth,
                            position: "absolute",
                            top: 0,
                            left: -this.itemWidth
                        })
                    }
                    return this
                }
                return initElements
            }()
        }, {
            key: "initEvent",
            value: function() {
                function initEvent() {
                    return this.$container.bind("mouseenter", $.proxy(this.stop, this)).bind("mouseleave", $.proxy(this.start, this)),
                    this
                }
                return initEvent
            }()
        }, {
            key: "setCurrent",
            value: function() {
                function setCurrent(e) {
                    this.currentIndex = e,
                    $.inArray(e, this.hasSwitched) < 0 && $.isFunction(this.onFirstSwitch) && (this.onFirstSwitch(e),
                    this.hasSwitched.push(e));
                    var t = this.$items
                      , n = $(t.get(e));
                    switch (t.removeClass(this.activeClass),
                    n.addClass(this.activeClass),
                    this.switchType) {
                    case "fade":
                        $(t.get(e)).css({
                            opacity: 1,
                            zIndex: this.zIndex
                        })
                    }
                    return this
                }
                return setCurrent
            }()
        }, {
            key: "getCurrent",
            value: function() {
                function getCurrent() {
                    return this.currentIndex
                }
                return getCurrent
            }()
        }, {
            key: "switchTo",
            value: function() {
                function switchTo(e) {
                    var t = void 0
                      , n = void 0;
                    switch (this.switchType) {
                    case "fade":
                        t = this.$items;
                        var i = this.currentIndex;
                        n = $(t.get(i));
                        var o = null;
                        e >= this.length ? e = 0 : e <= -1 && (e = this.length - 1),
                        o = $(t.get(e)),
                        $.isFunction(this.onBeforeSwitch) && this.onBeforeSwitch(i, e),
                        t.each(function(e) {
                            var t = $(this);
                            parseFloat(t.css("opacity")) > 0 && e !== i && t.stop().fadeTo(this.duration, 0).css("zIndex", "0")
                        }),
                        n.stop().fadeTo(this.duration, 0, $.proxy(function() {
                            n.css("zIndex", "0")
                        }, this)),
                        o.stop().fadeTo(this.duration, 1, $.proxy(function() {
                            this.setCurrent(e),
                            o.css({
                                opacity: 1,
                                zIndex: this.zIndex
                            }),
                            $.isFunction(this.onAfterSwitch) && this.onAfterSwitch(this.currentIndex)
                        }, this));
                        break;
                    case "slide":
                        t = this.$items,
                        n = $(t.get(this.currentIndex)),
                        $.isFunction(this.onBeforeSwitch) && this.onBeforeSwitch(this.currentIndex, e),
                        this.$container.animate({
                            "left": -(e + 1) * this.itemWidth
                        }, this.duration, $.proxy(function() {
                            e >= this.length ? (e = 0,
                            this.$container.css("left", -this.itemWidth * (e + 1))) : e <= -1 && (e = this.length - 1,
                            this.$container.css("left", -this.itemWidth * (e + 1))),
                            this.setCurrent(e),
                            $.isFunction(this.onAfterSwitch) && this.onAfterSwitch(this.currentIndex)
                        }, this))
                    }
                    return this
                }
                return switchTo
            }()
        }, {
            key: "switchToPrev",
            value: function() {
                function switchToPrev() {
                    var e = this.currentIndex - 1;
                    return this.switchTo(e),
                    this
                }
                return switchToPrev
            }()
        }, {
            key: "switchToNext",
            value: function() {
                function switchToNext() {
                    var e = this.currentIndex + 1;
                    return this.switchTo(e),
                    this
                }
                return switchToNext
            }()
        }, {
            key: "start",
            value: function() {
                function start() {
                    return this.isAuto && (clearTimeout(this.autoTimer),
                    this.autoTimer = setTimeout($.proxy(function() {
                        this.switchToNext().start()
                    }, this), this.delay)),
                    this
                }
                return start
            }()
        }, {
            key: "stop",
            value: function() {
                function stop() {
                    return this.isAuto && clearTimeout(this.autoTimer),
                    this
                }
                return stop
            }()
        }, {
            key: "destroy",
            value: function() {
                function destroy() {
                    this.unbind(),
                    this.$container.remove()
                }
                return destroy
            }()
        }, {
            key: "unbind",
            value: function() {
                function unbind() {
                    return this.$container.unbind(),
                    this
                }
                return unbind
            }()
        }]),
        Carousel
    }();
    t["default"] = i
}
, function(e, t, n) {
    function _classCallCheck(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
        }
        return e
    }
      , o = function() {
        function defineProperties(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(e, t, n) {
            return t && defineProperties(e.prototype, t),
            n && defineProperties(e, n),
            e
        }
    }();
    n(49);
    var a = n(1)
      , r = n(3)
      , s = n(0)
      , c = n(2)
      , l = n(6)
      , d = function(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }(l)
      , u = function() {
        function Rec(e) {
            _classCallCheck(this, Rec),
            this.conf = $.extend({
                $el: null
            }, e),
            this.init()
        }
        return o(Rec, [{
            key: "monitor",
            value: function() {
                function monitor(e) {
                    if (e) {
                        var t = new Image;
                        t.src = e + "&m=UA-J2011-1&ref=" + encodeURIComponent(document.referrer) + "&random=" + Math.random(),
                        t = null
                    }
                }
                return monitor
            }()
        }, {
            key: "init",
            value: function() {
                function init() {
                    var e = pageConfig.recData || {
                        data: []
                    }
                      , t = !1
                      , n = this
                      , i = [];
                    $.each(e.data, function(e, n) {
                        n.isTop ? i.push(e) : t = !1
                    }),
                    t ? n.createBottomDom(e.data) : (0,
                    s.loadAsync)({
                        url: a.APIS.REC,
                        params: {
                            pin: r.USER.pin,
                            uuid: r.USER.uuid
                        },
                        backup: [a.APIS.REC_BACKUP, a.APIS.REC_STOBACKUP],
                        name: "jsonpRec",
                        retryTimes: 2,
                        timeout: 1e3,
                        dataCheck: function() {
                            function dataCheck(e) {
                                if (2 !== e.errCode && e && e.data && e.data.length)
                                    return !0
                            }
                            return dataCheck
                        }()
                    }).then(function(t) {
                        t.__$$backupCall && d["default"].processBackup(2);
                        var o = t.data;
                        n.ext_columns = o.ext_columns || {};
                        var a = e.data;
                        $.each(o, function(e) {
                            if ($.inArray(e, i) >= 0 && a[e]) {
                                var t = o[e];
                                o[e] = a[e],
                                o[e + 1] && (o[e + 1] = t)
                            }
                        }),
                        o.length < 2 && a.length && o.push(a[0]),
                        n.createBottomDom(o),
                        _.eventCenter.on("home:load", function() {
                            t.impr && n.monitor(t.impr)
                        })
                    })["catch"](function(t, i) {
                        d["default"].processBackup(2),
                        d["default"].processHidedFloor(2),
                        n.createBottomDom(e.data)
                    })
                }
                return init
            }()
        }, {
            key: "createBottomDom",
            value: function() {
                function createBottomDom(e) {
                    var t = ""
                      , n = this
                      , o = n.conf.$el;
                    e && e.length && e.forEach(function(e, n) {
                        var i = Array.isArray(e) ? (0,
                        s.getRandomData)(e) : e
                          , o = i.t.replace(/^http(s?):/, "")
                          , a = "";
                        if (/\/\//.test(i.img))
                            a = i.img;
                        else {
                            var r = String(i.sku).match(/(\d)$/) ? i.sku : "11";
                            a = (0,
                            s.getImageDomain)(r) + i.img
                        }
                        a = (0,
                        s.processImage)(a, {
                            resize: ["380x300", "190x150"],
                            clip: "190x150",
                            replacem: n,
                            quality: 90
                        }),
                        t += "\n          <div class='rec_item'\n            data-clk=\"" + i.clk + '"\n            data-sku="' + i.sku + "\">\n            <a class='rec_lk mod_loading' href=\"" + o + '" target="_blank"\n              clstag="' + pageConfig.clstagPrefix + "head|recom|" + (0,
                        s.padding)(1 + n, 2) + '"\n              ' + (0,
                        c.generateLogParams)(e) + '>\n              <img data-lazy-src="' + a + '"\n                class="J_rec_img rec_img"\n                src="//misc.360buyimg.com/mtd/pc/common/img/blank.png">\n            </a>\n          </div>'
                    }),
                    o.append(t).removeClass("mod_lazyload").find(".J_rec_img").each(function() {
                        var e = $(this);
                        n.loadImage(e)
                    }),
                    o.find(".rec_lk").each(function(e, t) {
                        var n = (0,
                        c.getjQLogParams)(t);
                        (0,
                        c.logImpr)(i({
                            poi: "head|recom|" + (0,
                            s.padding)(1 + e, 2)
                        }, n, {
                            comment: "今日推荐"
                        }))
                    })
                }
                return createBottomDom
            }()
        }, {
            key: "loadImage",
            value: function() {
                function loadImage(e) {
                    if (e.length) {
                        var t = e.data("lazy-src");
                        t && t.length && e.attr("src", t).one("load", function() {
                            $(this).removeAttr("data-lazy-src").parent().removeClass("mod_loading")
                        }).each(function() {
                            this.complete && $(this).load()
                        })
                    }
                }
                return loadImage
            }()
        }]),
        Rec
    }();
    t["default"] = u
}
, function(e, t) {}
, function(e, t, n) {
    function _classCallCheck(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
        function sliceIterator(e, t) {
            var n = []
              , i = !0
              , o = !1
              , a = undefined;
            try {
                for (var r, s = e[Symbol.iterator](); !(i = (r = s.next()).done) && (n.push(r.value),
                !t || n.length !== t); i = !0)
                    ;
            } catch (c) {
                o = !0,
                a = c
            } finally {
                try {
                    !i && s["return"] && s["return"]()
                } finally {
                    if (o)
                        throw a
                }
            }
            return n
        }
        return function(e, t) {
            if (Array.isArray(e))
                return e;
            if (Symbol.iterator in Object(e))
                return sliceIterator(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }()
      , o = function() {
        function defineProperties(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(e, t, n) {
            return t && defineProperties(e.prototype, t),
            n && defineProperties(e, n),
            e
        }
    }();
    n(51);
    var a = n(1)
      , r = n(3)
      , s = n(0)
      , c = n(14)
      , l = function(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }(c)
      , d = function() {
        function User(e) {
            _classCallCheck(this, User),
            this.userinfo = {
                homeUrl: a.URLS.HOME,
                loginUrl: a.URLS.LOGIN,
                logoutUrl: a.URLS.LOGOUT,
                registUrl: a.URLS.REGIST,
                xinrenUrl: a.URLS.XINREN,
                plusUrl: a.URLS.PLUS_USERINFO_N,
                vipUrl: a.URLS.PLUS_USERINFO_Y,
                vipPromo: "",
                plusState: 0,
                userLevel: "",
                isLogin: !1,
                isNew: !1,
                nickName: r.USER.pin,
                imgUrl: "//misc.360buyimg.com/mtd/pc/common/img/no_login.jpg"
            },
            this.conf = $.extend({
                $el: null
            }, e),
            this.init()
        }
        return o(User, [{
            key: "init",
            value: function() {
                function init() {
                    var e = this;
                    Promise.all([(0,
                    s.getLoginstatus)(), (0,
                    s.getUserinfo)(), (0,
                    s.getCompanyinfo)()]).then(function(t) {
                        var n, o = i(t, 3), r = o[0], c = o[1], l = o[2], d = Number(c.userLevel) || 1, u = Number(c.plusStatus), f = {
                            1: "注册会员",
                            2: "铜牌会员",
                            3: "银牌会员",
                            4: "金牌会员",
                            5: "钻石会员",
                            6: "VIP会员",
                            7: "企业会员"
                        }[d] || "注册会员";
                        if (n = a.PLUSMAP[d - 1] || a.PLUSMAP[0],
                        n = n[u] || n[4],
                        $.extend(e.userinfo, {
                            vipPromo: n.replace(/<span[ \s\S]+span>/g, "").replace(/>/g, ""),
                            plusState: u,
                            userLevel: d - 1,
                            userLevelTxt: f,
                            isCompany: l.isCompany,
                            realImgUrl: c.imgUrl
                        }),
                        r.isLogin) {
                            var p = r.nick || r.name;
                            e.isLogin = r.isLogin,
                            e.userinfo.isLogin = r.isLogin;
                            var h = (0,
                            s.loadAsync)({
                                url: a.APIS.USER_SPOINT,
                                params: {
                                    pin: (0,
                                    s.getPin)()
                                },
                                name: "jsonpSpoint",
                                dataCheck: function() {
                                    function dataCheck(e) {
                                        return !(!e || !e.user_score)
                                    }
                                    return dataCheck
                                }()
                            }).then(function(t) {
                                var n = Number(t.user_score.totalScore);
                                e.userinfo.spoint = n
                            })
                              , m = (0,
                            s.getNewuserinfo)().then(function(t) {
                                "string" == typeof p && p.length && (e.userinfo.nickName = p),
                                e.userinfo.isNew = t.isNew
                            });
                            Promise.all([m, h]).then(function() {
                                e.render(e.userinfo)
                            }, function() {
                                e.render(e.userinfo)
                            })
                        } else
                            e.render(e.userinfo)
                    }, function() {
                        this.render(this.userinfo)
                    })
                }
                return init
            }()
        }, {
            key: "getTpl",
            value: function() {
                function getTpl(e) {
                    return '\n      {% var clstagPrefix = pageConfig.clstagPrefix + "head|login|"; %}\n      <div class="user_inner user_level{%= o.userLevel %} user_plus{%= o.plusState %}"">\n        <div class="J_user_avatar user_avatar">\n          <img class="J_user_avatar_img" src="{%= o.imgUrl %}" />\n          <a class="user_avatar_lk" href="{%= o.homeUrl %}" target="_blank" clstag="{%= clstagPrefix + "01" %}"></a>\n        </div>\n        {% if (o.isLogin && o.nickName && o.nickName.length) { %}\n          <div class="user_show">\n            <p>\n              <i class="user_plusico"></i>\n              Hi，<a href="{%= o.homeUrl %}">{%= o.nickName %}</a>\n            </p>\n            <p class="user_sl">\n              {% if (o.isCompany) { %}\n                <a class="user_company" href="//sale.jd.com/act/rw4GgcjhpSQ.html" target="_blank" title="企业会员">\n                  <i class="user_company_ico"></i>企业会员\n                </a>\n              {% } else { %}\n                <a class="user_spoint" href="//vip.jd.com/" target="_blank" title="京享值{%= o.spoint %}">\n                  <i class="user_spoint_ico"></i>\n                </a>\n                <a class="user_lv" href="//vip.jd.com" target="_blank" title="{%= o.userLevelTxt %}">\n                  <i class="user_lvico"></i>\n                </a>\n              {% } %}\n              <a class="user_logout" href="{%= o.logoutUrl %}">退出</a>\n            </p>\n          </div>\n        {% } else { %}\n          <div class="user_show">\n            {% if (o.nickName && o.nickName.length) { %}\n              <p>Hi，<a href="{%= o.homeUrl %}">{%= o.nickName %}</a></p>\n            {% } else { %}\n              <p class="user_tip">Hi~欢迎来到京东！</p>\n            {% } %}\n            <p>\n              <a href="javascript:login();" class="user_login">登录</a>\n              <a href="javascript:regist();" class="user_reg">注册</a>\n            </p>\n          </div>\n        {% } %}\n      </div>\n      <div class="user_profit">\n        {% if (o.isNew || !o.isLogin) { %}\n          <a class="user_profit_lk" href="{%= o.xinrenUrl %}" target="_blank" clstag="{%= clstagPrefix + "02" %}">新人福利</a>\n          <a class="user_profit_lk user_profit_lk_plus" href="{%= o.plusUrl %}" target="_blank" clstag="{%= clstagPrefix + "03" %}">PLUS会员</a>\n        {% } else { %}\n          <a class="user_profit_lk user_profit_lk_long" href="{%= o.vipUrl %}" target="_blank" clstag="{%= clstagPrefix + "04" %}">\n            {%= o.vipPromo %}\n          </a>\n        {% } %}\n      </div>'
                }
                return getTpl
            }()
        }, {
            key: "render",
            value: function() {
                function render(e) {
                    var t = this
                      , n = this.conf.$el
                      , i = (0,
                    l["default"])(this.getTpl(), e);
                    n.removeClass("mod_loading").html(i),
                    (0,
                    s.afterLoad)().then(function(e) {
                        t.userinfo.realImgUrl && $(".J_user_avatar_img", t.conf.$el).attr("src", t.userinfo.realImgUrl)
                    })
                }
                return render
            }()
        }]),
        User
    }();
    t["default"] = d
}
, function(e, t) {}
, function(e, t, n) {
    function _classCallCheck(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
        function defineProperties(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(e, t, n) {
            return t && defineProperties(e.prototype, t),
            n && defineProperties(e, n),
            e
        }
    }();
    n(53);
    var o = n(15)
      , a = function(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }(o)
      , r = function() {
        function News(e) {
            _classCallCheck(this, News),
            this.conf = $.extend({
                $el: null
            }, e),
            this.conf.$el && (this.supportTransform = o2.detect.css3test("transform"),
            this.initTab())
        }
        return i(News, [{
            key: "initTab",
            value: function() {
                function initTab() {
                    var e = this.conf.$el
                      , t = $(".J_news_tab", e);
                    new a["default"]({
                        container: t,
                        startAt: 0,
                        hash: !1,
                        activeClass: "mod_tab_head_item_on",
                        hoverToSwitch: !0,
                        onBeforeSwitch: function() {
                            function onBeforeSwitch() {}
                            return onBeforeSwitch
                        }(),
                        onAfterSwitch: $.proxy(function(e) {
                            var n = 0
                              , i = t.find(".J_news_tab_active");
                            this.supportTransform ? (n = 54 * e,
                            i.css({
                                "transform": "translateX(" + n + "px)",
                                "-webkit-transform": "translateX(" + n + "px)",
                                "-moz-transform": "translateX(" + n + "px)",
                                "-ms-transform": "translateX(" + n + "px)"
                            })) : (n = 54 * e,
                            i.css("left", n + "px"))
                        }, this)
                    })
                }
                return initTab
            }()
        }]),
        News
    }();
    t["default"] = r
}
, function(e, t) {}
, function(e, t, n) {
    function _classCallCheck(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
        function defineProperties(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(e, t, n) {
            return t && defineProperties(e.prototype, t),
            n && defineProperties(e, n),
            e
        }
    }();
    n(55);
    var o = n(15)
      , a = function(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }(o)
      , r = !0
      , s = function() {
        function Service(e) {
            _classCallCheck(this, Service);
            var t = this
              , n = e.container;
            seajs.config({
                alias: {
                    "virtuals/squares/2.0/js/jipiao.js": "//misc.360buyimg.com/virtuals/squares/2.0/js/jipiao.js",
                    "virtuals/squares/2.0/js/hotel.js": "//misc.360buyimg.com/virtuals/squares/2.0/js/hotel.js",
                    "virtuals/squares/2.0/js/game.js": "//misc.360buyimg.com/virtuals/squares/2.0/js/game.js"
                }
            }),
            this.opts = $.extend({
                container: n,
                head: $(".J_tab_head", n),
                content: $(".J_tab_content", n),
                close: $(".J_service_pop_close", n),
                expandClass: "service_expand",
                colExpandClass: "col_expand",
                activeClass: "service_frame_on",
                hoverToSwitch: !0,
                afterSwitch: null,
                data: [{
                    isIframe: !0,
                    url: "//chongzhi.jd.com/jdhome-czindex-2017.html"
                }, {
                    url: "//misc.360buyimg.com/virtuals/squares/2.0/js/jipiao.js"
                }, {
                    url: "//misc.360buyimg.com/virtuals/squares/2.0/js/hotel.js"
                }, {
                    url: "//misc.360buyimg.com/virtuals/squares/2.0/js/game.js"
                }],
                onAfterSwitch: function() {
                    function onAfterSwitch(e, n) {
                        var i = n.$contentItems.eq(e)
                          , o = t.opts.data[e];
                        i[0].loaded || (o.isIframe ? (i.removeClass("mod_loading"),
                        i.html($('<iframe width="160" height="180" frameborder="0" scrolling="no" src="' + o.url + '">'))) : seajs.use(o.url, function(e) {
                            i.removeClass("mod_loading"),
                            e.init({
                                el: i
                            })
                        }),
                        i[0].loaded = !0)
                    }
                    return onAfterSwitch
                }()
            }, e),
            this.bind()
        }
        return i(Service, [{
            key: "bind",
            value: function() {
                function bind() {
                    var e = !1
                      , t = !1
                      , n = this
                      , i = null;
                    this.opts.head.delegate(".mod_tab_head_item", "mouseenter", function(o) {
                        r && (r = !1,
                        n.opts.startAt = $(o.currentTarget).index(),
                        n.tab = new a["default"](n.opts)),
                        clearTimeout(i),
                        i = setTimeout(function() {
                            e || t || (n.opts.col.addClass(n.opts.colExpandClass),
                            n.opts.container.addClass(n.opts.expandClass),
                            e = !0)
                        }, 200)
                    }),
                    this.opts.container.delegate(".mod_tab_head_item, .J_tab_head", "mouseleave", function(e) {
                        t = !1,
                        clearTimeout(i)
                    }),
                    this.opts.close.bind("click", function(o) {
                        clearTimeout(i),
                        e = !1,
                        t = !0,
                        n.opts.col.removeClass(n.opts.colExpandClass),
                        n.opts.container.removeClass(n.opts.expandClass)
                    })
                }
                return bind
            }()
        }]),
        Service
    }();
    t["default"] = s
}
, function(e, t) {}
, function(e, t) {
    function cssWithMappingToString(e, t) {
        var n = e[1] || ""
          , i = e[3];
        if (!i)
            return n;
        if (t && "function" == typeof btoa) {
            var o = toComment(i);
            return [n].concat(i.sources.map(function(e) {
                return "/*# sourceURL=" + i.sourceRoot + e + " */"
            })).concat([o]).join("\n")
        }
        return [n].join("\n")
    }
    function toComment(e) {
        return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(e)))) + " */"
    }
    e.exports = function(e) {
        var t = [];
        return t.toString = function() {
            return this.map(function(t) {
                var n = cssWithMappingToString(t, e);
                return t[2] ? "@media " + t[2] + "{" + n + "}" : n
            }).join("")
        }
        ,
        t.i = function(e, n) {
            "string" == typeof e && (e = [[null, e, ""]]);
            for (var i = {}, o = 0; o < this.length; o++) {
                var a = this[o][0];
                "number" == typeof a && (i[a] = !0)
            }
            for (o = 0; o < e.length; o++) {
                var r = e[o];
                "number" == typeof r[0] && i[r[0]] || (n && !r[2] ? r[2] = n : n && (r[2] = "(" + r[2] + ") and (" + n + ")"),
                t.push(r))
            }
        }
        ,
        t
    }
}
, function(e, t, n) {
    function addStylesToDom(e, t) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n]
              , a = i[o.id];
            if (a) {
                a.refs++;
                for (var r = 0; r < a.parts.length; r++)
                    a.parts[r](o.parts[r]);
                for (; r < o.parts.length; r++)
                    a.parts.push(addStyle(o.parts[r], t))
            } else {
                for (var s = [], r = 0; r < o.parts.length; r++)
                    s.push(addStyle(o.parts[r], t));
                i[o.id] = {
                    id: o.id,
                    refs: 1,
                    parts: s
                }
            }
        }
    }
    function listToStyles(e, t) {
        for (var n = [], i = {}, o = 0; o < e.length; o++) {
            var a = e[o]
              , r = t.base ? a[0] + t.base : a[0]
              , s = a[1]
              , c = a[2]
              , l = a[3]
              , d = {
                css: s,
                media: c,
                sourceMap: l
            };
            i[r] ? i[r].parts.push(d) : n.push(i[r] = {
                id: r,
                parts: [d]
            })
        }
        return n
    }
    function insertStyleElement(e, t) {
        var n = a(e.insertInto);
        if (!n)
            throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var i = c[c.length - 1];
        if ("top" === e.insertAt)
            i ? i.nextSibling ? n.insertBefore(t, i.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild),
            c.push(t);
        else {
            if ("bottom" !== e.insertAt)
                throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
            n.appendChild(t)
        }
    }
    function removeStyleElement(e) {
        if (null === e.parentNode)
            return !1;
        e.parentNode.removeChild(e);
        var t = c.indexOf(e);
        t >= 0 && c.splice(t, 1)
    }
    function createStyleElement(e) {
        var t = document.createElement("style");
        return e.attrs.type = "text/css",
        addAttrs(t, e.attrs),
        insertStyleElement(e, t),
        t
    }
    function createLinkElement(e) {
        var t = document.createElement("link");
        return e.attrs.type = "text/css",
        e.attrs.rel = "stylesheet",
        addAttrs(t, e.attrs),
        insertStyleElement(e, t),
        t
    }
    function addAttrs(e, t) {
        Object.keys(t).forEach(function(n) {
            e.setAttribute(n, t[n])
        })
    }
    function addStyle(e, t) {
        var n, i, o, a;
        if (t.transform && e.css) {
            if (!(a = t.transform(e.css)))
                return function() {}
                ;
            e.css = a
        }
        if (t.singleton) {
            var c = s++;
            n = r || (r = createStyleElement(t)),
            i = applyToSingletonTag.bind(null, n, c, !1),
            o = applyToSingletonTag.bind(null, n, c, !0)
        } else
            e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = createLinkElement(t),
            i = updateLink.bind(null, n, t),
            o = function() {
                removeStyleElement(n),
                n.href && URL.revokeObjectURL(n.href)
            }
            ) : (n = createStyleElement(t),
            i = applyToTag.bind(null, n),
            o = function() {
                removeStyleElement(n)
            }
            );
        return i(e),
        function(t) {
            if (t) {
                if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap)
                    return;
                i(e = t)
            } else
                o()
        }
    }
    function applyToSingletonTag(e, t, n, i) {
        var o = n ? "" : i.css;
        if (e.styleSheet)
            e.styleSheet.cssText = d(t, o);
        else {
            var a = document.createTextNode(o)
              , r = e.childNodes;
            r[t] && e.removeChild(r[t]),
            r.length ? e.insertBefore(a, r[t]) : e.appendChild(a)
        }
    }
    function applyToTag(e, t) {
        var n = t.css
          , i = t.media;
        if (i && e.setAttribute("media", i),
        e.styleSheet)
            e.styleSheet.cssText = n;
        else {
            for (; e.firstChild; )
                e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n))
        }
    }
    function updateLink(e, t, n) {
        var i = n.css
          , o = n.sourceMap
          , a = t.convertToAbsoluteUrls === undefined && o;
        (t.convertToAbsoluteUrls || a) && (i = l(i)),
        o && (i += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
        var r = new Blob([i],{
            type: "text/css"
        })
          , s = e.href;
        e.href = URL.createObjectURL(r),
        s && URL.revokeObjectURL(s)
    }
    var i = {}
      , o = function(e) {
        var t;
        return function() {
            return void 0 === t && (t = e.apply(this, arguments)),
            t
        }
    }(function() {
        return window && document && document.all && !window.atob
    })
      , a = function(e) {
        var t = {};
        return function(n) {
            return "undefined" == typeof t[n] && (t[n] = e.call(this, n)),
            t[n]
        }
    }(function(e) {
        return document.querySelector(e)
    })
      , r = null
      , s = 0
      , c = []
      , l = n(27);
    e.exports = function(e, t) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document)
            throw new Error("The style-loader cannot be used in a non-browser environment");
        t = t || {},
        t.attrs = "object" == typeof t.attrs ? t.attrs : {},
        t.singleton || (t.singleton = o()),
        t.insertInto || (t.insertInto = "head"),
        t.insertAt || (t.insertAt = "bottom");
        var n = listToStyles(e, t);
        return addStylesToDom(n, t),
        function(e) {
            for (var o = [], a = 0; a < n.length; a++) {
                var r = n[a]
                  , s = i[r.id];
                s.refs--,
                o.push(s)
            }
            if (e) {
                addStylesToDom(listToStyles(e, t), t)
            }
            for (var a = 0; a < o.length; a++) {
                var s = o[a];
                if (0 === s.refs) {
                    for (var c = 0; c < s.parts.length; c++)
                        s.parts[c]();
                    delete i[s.id]
                }
            }
        }
    }
    ;
    var d = function() {
        var e = [];
        return function(t, n) {
            return e[t] = n,
            e.filter(Boolean).join("\n")
        }
    }()
}
]);
