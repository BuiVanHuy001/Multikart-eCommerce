!function (t, e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function (t, e) {
    "use strict";
    var n = [], i = t.document, o = Object.getPrototypeOf, r = n.slice, s = n.concat, a = n.push, l = n.indexOf, u = {},
        c = u.toString, h = u.hasOwnProperty, f = h.toString, d = f.call(Object), p = {}, m = function (t) {
            return "function" == typeof t && "number" != typeof t.nodeType
        }, g = function (t) {
            return null != t && t === t.window
        }, v = {type: !0, src: !0, noModule: !0};

    function y(t, e, n) {
        var o, r = (e = e || i).createElement("script");
        if (r.text = t, n) for (o in v) n[o] && (r[o] = n[o]);
        e.head.appendChild(r).parentNode.removeChild(r)
    }

    function b(t) {
        return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? u[c.call(t)] || "object" : typeof t
    }

    var _ = function (t, e) {
        return new _.fn.init(t, e)
    }, w = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function x(t) {
        var e = !!t && "length" in t && t.length, n = b(t);
        return !m(t) && !g(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
    }

    _.fn = _.prototype = {
        jquery: "3.3.1", constructor: _, length: 0, toArray: function () {
            return r.call(this)
        }, get: function (t) {
            return null == t ? r.call(this) : t < 0 ? this[t + this.length] : this[t]
        }, pushStack: function (t) {
            var e = _.merge(this.constructor(), t);
            return e.prevObject = this, e
        }, each: function (t) {
            return _.each(this, t)
        }, map: function (t) {
            return this.pushStack(_.map(this, function (e, n) {
                return t.call(e, n, e)
            }))
        }, slice: function () {
            return this.pushStack(r.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (t) {
            var e = this.length, n = +t + (t < 0 ? e : 0);
            return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: a, sort: n.sort, splice: n.splice
    }, _.extend = _.fn.extend = function () {
        var t, e, n, i, o, r, s = arguments[0] || {}, a = 1, l = arguments.length, u = !1;
        for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || m(s) || (s = {}), a === l && (s = this, a--); a < l; a++) if (null != (t = arguments[a])) for (e in t) n = s[e], s !== (i = t[e]) && (u && i && (_.isPlainObject(i) || (o = Array.isArray(i))) ? (o ? (o = !1, r = n && Array.isArray(n) ? n : []) : r = n && _.isPlainObject(n) ? n : {}, s[e] = _.extend(u, r, i)) : void 0 !== i && (s[e] = i));
        return s
    }, _.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (t) {
            throw new Error(t)
        }, noop: function () {
        }, isPlainObject: function (t) {
            var e, n;
            return !(!t || "[object Object]" !== c.call(t) || (e = o(t)) && ("function" != typeof (n = h.call(e, "constructor") && e.constructor) || f.call(n) !== d))
        }, isEmptyObject: function (t) {
            var e;
            for (e in t) return !1;
            return !0
        }, globalEval: function (t) {
            y(t)
        }, each: function (t, e) {
            var n, i = 0;
            if (x(t)) for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++) ; else for (i in t) if (!1 === e.call(t[i], i, t[i])) break;
            return t
        }, trim: function (t) {
            return null == t ? "" : (t + "").replace(w, "")
        }, makeArray: function (t, e) {
            var n = e || [];
            return null != t && (x(Object(t)) ? _.merge(n, "string" == typeof t ? [t] : t) : a.call(n, t)), n
        }, inArray: function (t, e, n) {
            return null == e ? -1 : l.call(e, t, n)
        }, merge: function (t, e) {
            for (var n = +e.length, i = 0, o = t.length; i < n; i++) t[o++] = e[i];
            return t.length = o, t
        }, grep: function (t, e, n) {
            for (var i = [], o = 0, r = t.length, s = !n; o < r; o++) !e(t[o], o) !== s && i.push(t[o]);
            return i
        }, map: function (t, e, n) {
            var i, o, r = 0, a = [];
            if (x(t)) for (i = t.length; r < i; r++) null != (o = e(t[r], r, n)) && a.push(o); else for (r in t) null != (o = e(t[r], r, n)) && a.push(o);
            return s.apply([], a)
        }, guid: 1, support: p
    }), "function" == typeof Symbol && (_.fn[Symbol.iterator] = n[Symbol.iterator]), _.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
        u["[object " + e + "]"] = e.toLowerCase()
    });
    var E = function (t) {
        var e, n, i, o, r, s, a, l, u, c, h, f, d, p, m, g, v, y, b, _ = "sizzle" + 1 * new Date, w = t.document, x = 0,
            E = 0, C = st(), T = st(), S = st(), I = function (t, e) {
                return t === e && (h = !0), 0
            }, A = {}.hasOwnProperty, D = [], k = D.pop, O = D.push, j = D.push, L = D.slice, N = function (t, e) {
                for (var n = 0, i = t.length; n < i; n++) if (t[n] === e) return n;
                return -1
            },
            P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]", R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            z = "\\[" + M + "*(" + R + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + M + "*\\]",
            H = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + z + ")*)|.*)\\)|)",
            q = new RegExp(M + "+", "g"), $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            W = new RegExp("^" + M + "*," + M + "*"), F = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            B = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"), U = new RegExp(H),
            V = new RegExp("^" + R + "$"), Y = {
                ID: new RegExp("^#(" + R + ")"),
                CLASS: new RegExp("^\\.(" + R + ")"),
                TAG: new RegExp("^(" + R + "|[*])"),
                ATTR: new RegExp("^" + z),
                PSEUDO: new RegExp("^" + H),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + P + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
            }, Q = /^(?:input|select|textarea|button)$/i, X = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/,
            G = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Z = /[+~]/,
            J = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"), tt = function (t, e, n) {
                var i = "0x" + e - 65536;
                return i != i || n ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            }, et = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, nt = function (t, e) {
                return e ? "\0" === t ? "Ã¯Â¿Â½" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
            }, it = function () {
                f()
            }, ot = yt(function (t) {
                return !0 === t.disabled && ("form" in t || "label" in t)
            }, {dir: "parentNode", next: "legend"});
        try {
            j.apply(D = L.call(w.childNodes), w.childNodes), D[w.childNodes.length].nodeType
        } catch (t) {
            j = {
                apply: D.length ? function (t, e) {
                    O.apply(t, L.call(e))
                } : function (t, e) {
                    for (var n = t.length, i = 0; t[n++] = e[i++];) ;
                    t.length = n - 1
                }
            }
        }

        function rt(t, e, i, o) {
            var r, a, u, c, h, p, v, y = e && e.ownerDocument, x = e ? e.nodeType : 9;
            if (i = i || [], "string" != typeof t || !t || 1 !== x && 9 !== x && 11 !== x) return i;
            if (!o && ((e ? e.ownerDocument || e : w) !== d && f(e), e = e || d, m)) {
                if (11 !== x && (h = G.exec(t))) if (r = h[1]) {
                    if (9 === x) {
                        if (!(u = e.getElementById(r))) return i;
                        if (u.id === r) return i.push(u), i
                    } else if (y && (u = y.getElementById(r)) && b(e, u) && u.id === r) return i.push(u), i
                } else {
                    if (h[2]) return j.apply(i, e.getElementsByTagName(t)), i;
                    if ((r = h[3]) && n.getElementsByClassName && e.getElementsByClassName) return j.apply(i, e.getElementsByClassName(r)), i
                }
                if (n.qsa && !S[t + " "] && (!g || !g.test(t))) {
                    if (1 !== x) y = e, v = t; else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((c = e.getAttribute("id")) ? c = c.replace(et, nt) : e.setAttribute("id", c = _), a = (p = s(t)).length; a--;) p[a] = "#" + c + " " + vt(p[a]);
                        v = p.join(","), y = Z.test(t) && mt(e.parentNode) || e
                    }
                    if (v) try {
                        return j.apply(i, y.querySelectorAll(v)), i
                    } catch (t) {
                    } finally {
                        c === _ && e.removeAttribute("id")
                    }
                }
            }
            return l(t.replace($, "$1"), e, i, o)
        }

        function st() {
            var t = [];
            return function e(n, o) {
                return t.push(n + " ") > i.cacheLength && delete e[t.shift()], e[n + " "] = o
            }
        }

        function at(t) {
            return t[_] = !0, t
        }

        function lt(t) {
            var e = d.createElement("fieldset");
            try {
                return !!t(e)
            } catch (t) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function ut(t, e) {
            for (var n = t.split("|"), o = n.length; o--;) i.attrHandle[n[o]] = e
        }

        function ct(t, e) {
            var n = e && t, i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
            if (i) return i;
            if (n) for (; n = n.nextSibling;) if (n === e) return -1;
            return t ? 1 : -1
        }

        function ht(t) {
            return function (e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function ft(t) {
            return function (e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t
            }
        }

        function dt(t) {
            return function (e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ot(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function pt(t) {
            return at(function (e) {
                return e = +e, at(function (n, i) {
                    for (var o, r = t([], n.length, e), s = r.length; s--;) n[o = r[s]] && (n[o] = !(i[o] = n[o]))
                })
            })
        }

        function mt(t) {
            return t && void 0 !== t.getElementsByTagName && t
        }

        for (e in n = rt.support = {}, r = rt.isXML = function (t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return !!e && "HTML" !== e.nodeName
        }, f = rt.setDocument = function (t) {
            var e, o, s = t ? t.ownerDocument || t : w;
            return s !== d && 9 === s.nodeType && s.documentElement ? (p = (d = s).documentElement, m = !r(d), w !== d && (o = d.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", it, !1) : o.attachEvent && o.attachEvent("onunload", it)), n.attributes = lt(function (t) {
                return t.className = "i", !t.getAttribute("className")
            }), n.getElementsByTagName = lt(function (t) {
                return t.appendChild(d.createComment("")), !t.getElementsByTagName("*").length
            }), n.getElementsByClassName = K.test(d.getElementsByClassName), n.getById = lt(function (t) {
                return p.appendChild(t).id = _, !d.getElementsByName || !d.getElementsByName(_).length
            }), n.getById ? (i.filter.ID = function (t) {
                var e = t.replace(J, tt);
                return function (t) {
                    return t.getAttribute("id") === e
                }
            }, i.find.ID = function (t, e) {
                if (void 0 !== e.getElementById && m) {
                    var n = e.getElementById(t);
                    return n ? [n] : []
                }
            }) : (i.filter.ID = function (t) {
                var e = t.replace(J, tt);
                return function (t) {
                    var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                    return n && n.value === e
                }
            }, i.find.ID = function (t, e) {
                if (void 0 !== e.getElementById && m) {
                    var n, i, o, r = e.getElementById(t);
                    if (r) {
                        if ((n = r.getAttributeNode("id")) && n.value === t) return [r];
                        for (o = e.getElementsByName(t), i = 0; r = o[i++];) if ((n = r.getAttributeNode("id")) && n.value === t) return [r]
                    }
                    return []
                }
            }), i.find.TAG = n.getElementsByTagName ? function (t, e) {
                return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : n.qsa ? e.querySelectorAll(t) : void 0
            } : function (t, e) {
                var n, i = [], o = 0, r = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return r
            }, i.find.CLASS = n.getElementsByClassName && function (t, e) {
                if (void 0 !== e.getElementsByClassName && m) return e.getElementsByClassName(t)
            }, v = [], g = [], (n.qsa = K.test(d.querySelectorAll)) && (lt(function (t) {
                p.appendChild(t).innerHTML = "<a id='" + _ + "'></a><select id='" + _ + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + M + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || g.push("\\[" + M + "*(?:value|" + P + ")"), t.querySelectorAll("[id~=" + _ + "-]").length || g.push("~="), t.querySelectorAll(":checked").length || g.push(":checked"), t.querySelectorAll("a#" + _ + "+*").length || g.push(".#.+[+~]")
            }), lt(function (t) {
                t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var e = d.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && g.push("name" + M + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), p.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), g.push(",.*:")
            })), (n.matchesSelector = K.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && lt(function (t) {
                n.disconnectedMatch = y.call(t, "*"), y.call(t, "[s!='']:x"), v.push("!=", H)
            }), g = g.length && new RegExp(g.join("|")), v = v.length && new RegExp(v.join("|")), e = K.test(p.compareDocumentPosition), b = e || K.test(p.contains) ? function (t, e) {
                var n = 9 === t.nodeType ? t.documentElement : t, i = e && e.parentNode;
                return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
            } : function (t, e) {
                if (e) for (; e = e.parentNode;) if (e === t) return !0;
                return !1
            }, I = e ? function (t, e) {
                if (t === e) return h = !0, 0;
                var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return i || (1 & (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !n.sortDetached && e.compareDocumentPosition(t) === i ? t === d || t.ownerDocument === w && b(w, t) ? -1 : e === d || e.ownerDocument === w && b(w, e) ? 1 : c ? N(c, t) - N(c, e) : 0 : 4 & i ? -1 : 1)
            } : function (t, e) {
                if (t === e) return h = !0, 0;
                var n, i = 0, o = t.parentNode, r = e.parentNode, s = [t], a = [e];
                if (!o || !r) return t === d ? -1 : e === d ? 1 : o ? -1 : r ? 1 : c ? N(c, t) - N(c, e) : 0;
                if (o === r) return ct(t, e);
                for (n = t; n = n.parentNode;) s.unshift(n);
                for (n = e; n = n.parentNode;) a.unshift(n);
                for (; s[i] === a[i];) i++;
                return i ? ct(s[i], a[i]) : s[i] === w ? -1 : a[i] === w ? 1 : 0
            }, d) : d
        }, rt.matches = function (t, e) {
            return rt(t, null, null, e)
        }, rt.matchesSelector = function (t, e) {
            if ((t.ownerDocument || t) !== d && f(t), e = e.replace(B, "='$1']"), n.matchesSelector && m && !S[e + " "] && (!v || !v.test(e)) && (!g || !g.test(e))) try {
                var i = y.call(t, e);
                if (i || n.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
            } catch (t) {
            }
            return rt(e, d, null, [t]).length > 0
        }, rt.contains = function (t, e) {
            return (t.ownerDocument || t) !== d && f(t), b(t, e)
        }, rt.attr = function (t, e) {
            (t.ownerDocument || t) !== d && f(t);
            var o = i.attrHandle[e.toLowerCase()],
                r = o && A.call(i.attrHandle, e.toLowerCase()) ? o(t, e, !m) : void 0;
            return void 0 !== r ? r : n.attributes || !m ? t.getAttribute(e) : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
        }, rt.escape = function (t) {
            return (t + "").replace(et, nt)
        }, rt.error = function (t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, rt.uniqueSort = function (t) {
            var e, i = [], o = 0, r = 0;
            if (h = !n.detectDuplicates, c = !n.sortStable && t.slice(0), t.sort(I), h) {
                for (; e = t[r++];) e === t[r] && (o = i.push(r));
                for (; o--;) t.splice(i[o], 1)
            }
            return c = null, t
        }, o = rt.getText = function (t) {
            var e, n = "", i = 0, r = t.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) n += o(t)
                } else if (3 === r || 4 === r) return t.nodeValue
            } else for (; e = t[i++];) n += o(e);
            return n
        }, (i = rt.selectors = {
            cacheLength: 50,
            createPseudo: at,
            match: Y,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (t) {
                    return t[1] = t[1].replace(J, tt), t[3] = (t[3] || t[4] || t[5] || "").replace(J, tt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                }, CHILD: function (t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || rt.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && rt.error(t[0]), t
                }, PSEUDO: function (t) {
                    var e, n = !t[6] && t[2];
                    return Y.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && U.test(n) && (e = s(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function (t) {
                    var e = t.replace(J, tt).toLowerCase();
                    return "*" === t ? function () {
                        return !0
                    } : function (t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                }, CLASS: function (t) {
                    var e = C[t + " "];
                    return e || (e = new RegExp("(^|" + M + ")" + t + "(" + M + "|$)")) && C(t, function (t) {
                        return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                    })
                }, ATTR: function (t, e, n) {
                    return function (i) {
                        var o = rt.attr(i, t);
                        return null == o ? "!=" === e : !e || (o += "", "=" === e ? o === n : "!=" === e ? o !== n : "^=" === e ? n && 0 === o.indexOf(n) : "*=" === e ? n && o.indexOf(n) > -1 : "$=" === e ? n && o.slice(-n.length) === n : "~=" === e ? (" " + o.replace(q, " ") + " ").indexOf(n) > -1 : "|=" === e && (o === n || o.slice(0, n.length + 1) === n + "-"))
                    }
                }, CHILD: function (t, e, n, i, o) {
                    var r = "nth" !== t.slice(0, 3), s = "last" !== t.slice(-4), a = "of-type" === e;
                    return 1 === i && 0 === o ? function (t) {
                        return !!t.parentNode
                    } : function (e, n, l) {
                        var u, c, h, f, d, p, m = r !== s ? "nextSibling" : "previousSibling", g = e.parentNode,
                            v = a && e.nodeName.toLowerCase(), y = !l && !a, b = !1;
                        if (g) {
                            if (r) {
                                for (; m;) {
                                    for (f = e; f = f[m];) if (a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                                    p = m = "only" === t && !p && "nextSibling"
                                }
                                return !0
                            }
                            if (p = [s ? g.firstChild : g.lastChild], s && y) {
                                for (b = (d = (u = (c = (h = (f = g)[_] || (f[_] = {}))[f.uniqueID] || (h[f.uniqueID] = {}))[t] || [])[0] === x && u[1]) && u[2], f = d && g.childNodes[d]; f = ++d && f && f[m] || (b = d = 0) || p.pop();) if (1 === f.nodeType && ++b && f === e) {
                                    c[t] = [x, d, b];
                                    break
                                }
                            } else if (y && (b = d = (u = (c = (h = (f = e)[_] || (f[_] = {}))[f.uniqueID] || (h[f.uniqueID] = {}))[t] || [])[0] === x && u[1]), !1 === b) for (; (f = ++d && f && f[m] || (b = d = 0) || p.pop()) && ((a ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++b || (y && ((c = (h = f[_] || (f[_] = {}))[f.uniqueID] || (h[f.uniqueID] = {}))[t] = [x, b]), f !== e));) ;
                            return (b -= o) === i || b % i == 0 && b / i >= 0
                        }
                    }
                }, PSEUDO: function (t, e) {
                    var n, o = i.pseudos[t] || i.setFilters[t.toLowerCase()] || rt.error("unsupported pseudo: " + t);
                    return o[_] ? o(e) : o.length > 1 ? (n = [t, t, "", e], i.setFilters.hasOwnProperty(t.toLowerCase()) ? at(function (t, n) {
                        for (var i, r = o(t, e), s = r.length; s--;) t[i = N(t, r[s])] = !(n[i] = r[s])
                    }) : function (t) {
                        return o(t, 0, n)
                    }) : o
                }
            },
            pseudos: {
                not: at(function (t) {
                    var e = [], n = [], i = a(t.replace($, "$1"));
                    return i[_] ? at(function (t, e, n, o) {
                        for (var r, s = i(t, null, o, []), a = t.length; a--;) (r = s[a]) && (t[a] = !(e[a] = r))
                    }) : function (t, o, r) {
                        return e[0] = t, i(e, null, r, n), e[0] = null, !n.pop()
                    }
                }), has: at(function (t) {
                    return function (e) {
                        return rt(t, e).length > 0
                    }
                }), contains: at(function (t) {
                    return t = t.replace(J, tt), function (e) {
                        return (e.textContent || e.innerText || o(e)).indexOf(t) > -1
                    }
                }), lang: at(function (t) {
                    return V.test(t || "") || rt.error("unsupported lang: " + t), t = t.replace(J, tt).toLowerCase(), function (e) {
                        var n;
                        do {
                            if (n = m ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }), target: function (e) {
                    var n = t.location && t.location.hash;
                    return n && n.slice(1) === e.id
                }, root: function (t) {
                    return t === p
                }, focus: function (t) {
                    return t === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                }, enabled: dt(!1), disabled: dt(!0), checked: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                }, selected: function (t) {
                    return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                }, empty: function (t) {
                    for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return !1;
                    return !0
                }, parent: function (t) {
                    return !i.pseudos.empty(t)
                }, header: function (t) {
                    return X.test(t.nodeName)
                }, input: function (t) {
                    return Q.test(t.nodeName)
                }, button: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                }, text: function (t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                }, first: pt(function () {
                    return [0]
                }), last: pt(function (t, e) {
                    return [e - 1]
                }), eq: pt(function (t, e, n) {
                    return [n < 0 ? n + e : n]
                }), even: pt(function (t, e) {
                    for (var n = 0; n < e; n += 2) t.push(n);
                    return t
                }), odd: pt(function (t, e) {
                    for (var n = 1; n < e; n += 2) t.push(n);
                    return t
                }), lt: pt(function (t, e, n) {
                    for (var i = n < 0 ? n + e : n; --i >= 0;) t.push(i);
                    return t
                }), gt: pt(function (t, e, n) {
                    for (var i = n < 0 ? n + e : n; ++i < e;) t.push(i);
                    return t
                })
            }
        }).pseudos.nth = i.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) i.pseudos[e] = ht(e);
        for (e in {submit: !0, reset: !0}) i.pseudos[e] = ft(e);

        function gt() {
        }

        function vt(t) {
            for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
            return i
        }

        function yt(t, e, n) {
            var i = e.dir, o = e.next, r = o || i, s = n && "parentNode" === r, a = E++;
            return e.first ? function (e, n, o) {
                for (; e = e[i];) if (1 === e.nodeType || s) return t(e, n, o);
                return !1
            } : function (e, n, l) {
                var u, c, h, f = [x, a];
                if (l) {
                    for (; e = e[i];) if ((1 === e.nodeType || s) && t(e, n, l)) return !0
                } else for (; e = e[i];) if (1 === e.nodeType || s) if (c = (h = e[_] || (e[_] = {}))[e.uniqueID] || (h[e.uniqueID] = {}), o && o === e.nodeName.toLowerCase()) e = e[i] || e; else {
                    if ((u = c[r]) && u[0] === x && u[1] === a) return f[2] = u[2];
                    if (c[r] = f, f[2] = t(e, n, l)) return !0
                }
                return !1
            }
        }

        function bt(t) {
            return t.length > 1 ? function (e, n, i) {
                for (var o = t.length; o--;) if (!t[o](e, n, i)) return !1;
                return !0
            } : t[0]
        }

        function _t(t, e, n, i, o) {
            for (var r, s = [], a = 0, l = t.length, u = null != e; a < l; a++) (r = t[a]) && (n && !n(r, i, o) || (s.push(r), u && e.push(a)));
            return s
        }

        function wt(t, e, n, i, o, r) {
            return i && !i[_] && (i = wt(i)), o && !o[_] && (o = wt(o, r)), at(function (r, s, a, l) {
                var u, c, h, f = [], d = [], p = s.length, m = r || function (t, e, n) {
                        for (var i = 0, o = e.length; i < o; i++) rt(t, e[i], n);
                        return n
                    }(e || "*", a.nodeType ? [a] : a, []), g = !t || !r && e ? m : _t(m, f, t, a, l),
                    v = n ? o || (r ? t : p || i) ? [] : s : g;
                if (n && n(g, v, a, l), i) for (u = _t(v, d), i(u, [], a, l), c = u.length; c--;) (h = u[c]) && (v[d[c]] = !(g[d[c]] = h));
                if (r) {
                    if (o || t) {
                        if (o) {
                            for (u = [], c = v.length; c--;) (h = v[c]) && u.push(g[c] = h);
                            o(null, v = [], u, l)
                        }
                        for (c = v.length; c--;) (h = v[c]) && (u = o ? N(r, h) : f[c]) > -1 && (r[u] = !(s[u] = h))
                    }
                } else v = _t(v === s ? v.splice(p, v.length) : v), o ? o(null, s, v, l) : j.apply(s, v)
            })
        }

        function xt(t) {
            for (var e, n, o, r = t.length, s = i.relative[t[0].type], a = s || i.relative[" "], l = s ? 1 : 0, c = yt(function (t) {
                return t === e
            }, a, !0), h = yt(function (t) {
                return N(e, t) > -1
            }, a, !0), f = [function (t, n, i) {
                var o = !s && (i || n !== u) || ((e = n).nodeType ? c(t, n, i) : h(t, n, i));
                return e = null, o
            }]; l < r; l++) if (n = i.relative[t[l].type]) f = [yt(bt(f), n)]; else {
                if ((n = i.filter[t[l].type].apply(null, t[l].matches))[_]) {
                    for (o = ++l; o < r && !i.relative[t[o].type]; o++) ;
                    return wt(l > 1 && bt(f), l > 1 && vt(t.slice(0, l - 1).concat({value: " " === t[l - 2].type ? "*" : ""})).replace($, "$1"), n, l < o && xt(t.slice(l, o)), o < r && xt(t = t.slice(o)), o < r && vt(t))
                }
                f.push(n)
            }
            return bt(f)
        }

        function Et(t, e) {
            var n = e.length > 0, o = t.length > 0, r = function (r, s, a, l, c) {
                var h, p, g, v = 0, y = "0", b = r && [], _ = [], w = u, E = r || o && i.find.TAG("*", c),
                    C = x += null == w ? 1 : Math.random() || .1, T = E.length;
                for (c && (u = s === d || s || c); y !== T && null != (h = E[y]); y++) {
                    if (o && h) {
                        for (p = 0, s || h.ownerDocument === d || (f(h), a = !m); g = t[p++];) if (g(h, s || d, a)) {
                            l.push(h);
                            break
                        }
                        c && (x = C)
                    }
                    n && ((h = !g && h) && v--, r && b.push(h))
                }
                if (v += y, n && y !== v) {
                    for (p = 0; g = e[p++];) g(b, _, s, a);
                    if (r) {
                        if (v > 0) for (; y--;) b[y] || _[y] || (_[y] = k.call(l));
                        _ = _t(_)
                    }
                    j.apply(l, _), c && !r && _.length > 0 && v + e.length > 1 && rt.uniqueSort(l)
                }
                return c && (x = C, u = w), b
            };
            return n ? at(r) : r
        }

        return gt.prototype = i.filters = i.pseudos, i.setFilters = new gt, s = rt.tokenize = function (t, e) {
            var n, o, r, s, a, l, u, c = T[t + " "];
            if (c) return e ? 0 : c.slice(0);
            for (a = t, l = [], u = i.preFilter; a;) {
                for (s in n && !(o = W.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), n = !1, (o = F.exec(a)) && (n = o.shift(), r.push({
                    value: n,
                    type: o[0].replace($, " ")
                }), a = a.slice(n.length)), i.filter) !(o = Y[s].exec(a)) || u[s] && !(o = u[s](o)) || (n = o.shift(), r.push({
                    value: n,
                    type: s,
                    matches: o
                }), a = a.slice(n.length));
                if (!n) break
            }
            return e ? a.length : a ? rt.error(t) : T(t, l).slice(0)
        }, a = rt.compile = function (t, e) {
            var n, i = [], o = [], r = S[t + " "];
            if (!r) {
                for (e || (e = s(t)), n = e.length; n--;) (r = xt(e[n]))[_] ? i.push(r) : o.push(r);
                (r = S(t, Et(o, i))).selector = t
            }
            return r
        }, l = rt.select = function (t, e, n, o) {
            var r, l, u, c, h, f = "function" == typeof t && t, d = !o && s(t = f.selector || t);
            if (n = n || [], 1 === d.length) {
                if ((l = d[0] = d[0].slice(0)).length > 2 && "ID" === (u = l[0]).type && 9 === e.nodeType && m && i.relative[l[1].type]) {
                    if (!(e = (i.find.ID(u.matches[0].replace(J, tt), e) || [])[0])) return n;
                    f && (e = e.parentNode), t = t.slice(l.shift().value.length)
                }
                for (r = Y.needsContext.test(t) ? 0 : l.length; r-- && (u = l[r], !i.relative[c = u.type]);) if ((h = i.find[c]) && (o = h(u.matches[0].replace(J, tt), Z.test(l[0].type) && mt(e.parentNode) || e))) {
                    if (l.splice(r, 1), !(t = o.length && vt(l))) return j.apply(n, o), n;
                    break
                }
            }
            return (f || a(t, d))(o, e, !m, n, !e || Z.test(t) && mt(e.parentNode) || e), n
        }, n.sortStable = _.split("").sort(I).join("") === _, n.detectDuplicates = !!h, f(), n.sortDetached = lt(function (t) {
            return 1 & t.compareDocumentPosition(d.createElement("fieldset"))
        }), lt(function (t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || ut("type|href|height|width", function (t, e, n) {
            if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), n.attributes && lt(function (t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || ut("value", function (t, e, n) {
            if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
        }), lt(function (t) {
            return null == t.getAttribute("disabled")
        }) || ut(P, function (t, e, n) {
            var i;
            if (!n) return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }), rt
    }(t);
    _.find = E, _.expr = E.selectors, _.expr[":"] = _.expr.pseudos, _.uniqueSort = _.unique = E.uniqueSort, _.text = E.getText, _.isXMLDoc = E.isXML, _.contains = E.contains, _.escapeSelector = E.escape;
    var C = function (t, e, n) {
        for (var i = [], o = void 0 !== n; (t = t[e]) && 9 !== t.nodeType;) if (1 === t.nodeType) {
            if (o && _(t).is(n)) break;
            i.push(t)
        }
        return i
    }, T = function (t, e) {
        for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
        return n
    }, S = _.expr.match.needsContext;

    function I(t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
    }

    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function D(t, e, n) {
        return m(e) ? _.grep(t, function (t, i) {
            return !!e.call(t, i, t) !== n
        }) : e.nodeType ? _.grep(t, function (t) {
            return t === e !== n
        }) : "string" != typeof e ? _.grep(t, function (t) {
            return l.call(e, t) > -1 !== n
        }) : _.filter(e, t, n)
    }

    _.filter = function (t, e, n) {
        var i = e[0];
        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? _.find.matchesSelector(i, t) ? [i] : [] : _.find.matches(t, _.grep(e, function (t) {
            return 1 === t.nodeType
        }))
    }, _.fn.extend({
        find: function (t) {
            var e, n, i = this.length, o = this;
            if ("string" != typeof t) return this.pushStack(_(t).filter(function () {
                for (e = 0; e < i; e++) if (_.contains(o[e], this)) return !0
            }));
            for (n = this.pushStack([]), e = 0; e < i; e++) _.find(t, o[e], n);
            return i > 1 ? _.uniqueSort(n) : n
        }, filter: function (t) {
            return this.pushStack(D(this, t || [], !1))
        }, not: function (t) {
            return this.pushStack(D(this, t || [], !0))
        }, is: function (t) {
            return !!D(this, "string" == typeof t && S.test(t) ? _(t) : t || [], !1).length
        }
    });
    var k, O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (_.fn.init = function (t, e, n) {
        var o, r;
        if (!t) return this;
        if (n = n || k, "string" == typeof t) {
            if (!(o = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : O.exec(t)) || !o[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
            if (o[1]) {
                if (e = e instanceof _ ? e[0] : e, _.merge(this, _.parseHTML(o[1], e && e.nodeType ? e.ownerDocument || e : i, !0)), A.test(o[1]) && _.isPlainObject(e)) for (o in e) m(this[o]) ? this[o](e[o]) : this.attr(o, e[o]);
                return this
            }
            return (r = i.getElementById(o[2])) && (this[0] = r, this.length = 1), this
        }
        return t.nodeType ? (this[0] = t, this.length = 1, this) : m(t) ? void 0 !== n.ready ? n.ready(t) : t(_) : _.makeArray(t, this)
    }).prototype = _.fn, k = _(i);
    var j = /^(?:parents|prev(?:Until|All))/, L = {children: !0, contents: !0, next: !0, prev: !0};

    function N(t, e) {
        for (; (t = t[e]) && 1 !== t.nodeType;) ;
        return t
    }

    _.fn.extend({
        has: function (t) {
            var e = _(t, this), n = e.length;
            return this.filter(function () {
                for (var t = 0; t < n; t++) if (_.contains(this, e[t])) return !0
            })
        }, closest: function (t, e) {
            var n, i = 0, o = this.length, r = [], s = "string" != typeof t && _(t);
            if (!S.test(t)) for (; i < o; i++) for (n = this[i]; n && n !== e; n = n.parentNode) if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && _.find.matchesSelector(n, t))) {
                r.push(n);
                break
            }
            return this.pushStack(r.length > 1 ? _.uniqueSort(r) : r)
        }, index: function (t) {
            return t ? "string" == typeof t ? l.call(_(t), this[0]) : l.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (t, e) {
            return this.pushStack(_.uniqueSort(_.merge(this.get(), _(t, e))))
        }, addBack: function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), _.each({
        parent: function (t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        }, parents: function (t) {
            return C(t, "parentNode")
        }, parentsUntil: function (t, e, n) {
            return C(t, "parentNode", n)
        }, next: function (t) {
            return N(t, "nextSibling")
        }, prev: function (t) {
            return N(t, "previousSibling")
        }, nextAll: function (t) {
            return C(t, "nextSibling")
        }, prevAll: function (t) {
            return C(t, "previousSibling")
        }, nextUntil: function (t, e, n) {
            return C(t, "nextSibling", n)
        }, prevUntil: function (t, e, n) {
            return C(t, "previousSibling", n)
        }, siblings: function (t) {
            return T((t.parentNode || {}).firstChild, t)
        }, children: function (t) {
            return T(t.firstChild)
        }, contents: function (t) {
            return I(t, "iframe") ? t.contentDocument : (I(t, "template") && (t = t.content || t), _.merge([], t.childNodes))
        }
    }, function (t, e) {
        _.fn[t] = function (n, i) {
            var o = _.map(this, e, n);
            return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (o = _.filter(i, o)), this.length > 1 && (L[t] || _.uniqueSort(o), j.test(t) && o.reverse()), this.pushStack(o)
        }
    });
    var P = /[^\x20\t\r\n\f]+/g;

    function M(t) {
        return t
    }

    function R(t) {
        throw t
    }

    function z(t, e, n, i) {
        var o;
        try {
            t && m(o = t.promise) ? o.call(t).done(e).fail(n) : t && m(o = t.then) ? o.call(t, e, n) : e.apply(void 0, [t].slice(i))
        } catch (t) {
            n.apply(void 0, [t])
        }
    }

    _.Callbacks = function (t) {
        t = "string" == typeof t ? function (t) {
            var e = {};
            return _.each(t.match(P) || [], function (t, n) {
                e[n] = !0
            }), e
        }(t) : _.extend({}, t);
        var e, n, i, o, r = [], s = [], a = -1, l = function () {
            for (o = o || t.once, i = e = !0; s.length; a = -1) for (n = s.shift(); ++a < r.length;) !1 === r[a].apply(n[0], n[1]) && t.stopOnFalse && (a = r.length, n = !1);
            t.memory || (n = !1), e = !1, o && (r = n ? [] : "")
        }, u = {
            add: function () {
                return r && (n && !e && (a = r.length - 1, s.push(n)), function e(n) {
                    _.each(n, function (n, i) {
                        m(i) ? t.unique && u.has(i) || r.push(i) : i && i.length && "string" !== b(i) && e(i)
                    })
                }(arguments), n && !e && l()), this
            }, remove: function () {
                return _.each(arguments, function (t, e) {
                    for (var n; (n = _.inArray(e, r, n)) > -1;) r.splice(n, 1), n <= a && a--
                }), this
            }, has: function (t) {
                return t ? _.inArray(t, r) > -1 : r.length > 0
            }, empty: function () {
                return r && (r = []), this
            }, disable: function () {
                return o = s = [], r = n = "", this
            }, disabled: function () {
                return !r
            }, lock: function () {
                return o = s = [], n || e || (r = n = ""), this
            }, locked: function () {
                return !!o
            }, fireWith: function (t, n) {
                return o || (n = [t, (n = n || []).slice ? n.slice() : n], s.push(n), e || l()), this
            }, fire: function () {
                return u.fireWith(this, arguments), this
            }, fired: function () {
                return !!i
            }
        };
        return u
    }, _.extend({
        Deferred: function (e) {
            var n = [["notify", "progress", _.Callbacks("memory"), _.Callbacks("memory"), 2], ["resolve", "done", _.Callbacks("once memory"), _.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", _.Callbacks("once memory"), _.Callbacks("once memory"), 1, "rejected"]],
                i = "pending", o = {
                    state: function () {
                        return i
                    }, always: function () {
                        return r.done(arguments).fail(arguments), this
                    }, catch: function (t) {
                        return o.then(null, t)
                    }, pipe: function () {
                        var t = arguments;
                        return _.Deferred(function (e) {
                            _.each(n, function (n, i) {
                                var o = m(t[i[4]]) && t[i[4]];
                                r[i[1]](function () {
                                    var t = o && o.apply(this, arguments);
                                    t && m(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[i[0] + "With"](this, o ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    }, then: function (e, i, o) {
                        var r = 0;

                        function s(e, n, i, o) {
                            return function () {
                                var a = this, l = arguments, u = function () {
                                    var t, u;
                                    if (!(e < r)) {
                                        if ((t = i.apply(a, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                        u = t && ("object" == typeof t || "function" == typeof t) && t.then, m(u) ? o ? u.call(t, s(r, n, M, o), s(r, n, R, o)) : (r++, u.call(t, s(r, n, M, o), s(r, n, R, o), s(r, n, M, n.notifyWith))) : (i !== M && (a = void 0, l = [t]), (o || n.resolveWith)(a, l))
                                    }
                                }, c = o ? u : function () {
                                    try {
                                        u()
                                    } catch (t) {
                                        _.Deferred.exceptionHook && _.Deferred.exceptionHook(t, c.stackTrace), e + 1 >= r && (i !== R && (a = void 0, l = [t]), n.rejectWith(a, l))
                                    }
                                };
                                e ? c() : (_.Deferred.getStackHook && (c.stackTrace = _.Deferred.getStackHook()), t.setTimeout(c))
                            }
                        }

                        return _.Deferred(function (t) {
                            n[0][3].add(s(0, t, m(o) ? o : M, t.notifyWith)), n[1][3].add(s(0, t, m(e) ? e : M)), n[2][3].add(s(0, t, m(i) ? i : R))
                        }).promise()
                    }, promise: function (t) {
                        return null != t ? _.extend(t, o) : o
                    }
                }, r = {};
            return _.each(n, function (t, e) {
                var s = e[2], a = e[5];
                o[e[1]] = s.add, a && s.add(function () {
                    i = a
                }, n[3 - t][2].disable, n[3 - t][3].disable, n[0][2].lock, n[0][3].lock), s.add(e[3].fire), r[e[0]] = function () {
                    return r[e[0] + "With"](this === r ? void 0 : this, arguments), this
                }, r[e[0] + "With"] = s.fireWith
            }), o.promise(r), e && e.call(r, r), r
        }, when: function (t) {
            var e = arguments.length, n = e, i = Array(n), o = r.call(arguments), s = _.Deferred(), a = function (t) {
                return function (n) {
                    i[t] = this, o[t] = arguments.length > 1 ? r.call(arguments) : n, --e || s.resolveWith(i, o)
                }
            };
            if (e <= 1 && (z(t, s.done(a(n)).resolve, s.reject, !e), "pending" === s.state() || m(o[n] && o[n].then))) return s.then();
            for (; n--;) z(o[n], a(n), s.reject);
            return s.promise()
        }
    });
    var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    _.Deferred.exceptionHook = function (e, n) {
        t.console && t.console.warn && e && H.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, n)
    }, _.readyException = function (e) {
        t.setTimeout(function () {
            throw e
        })
    };
    var q = _.Deferred();

    function $() {
        i.removeEventListener("DOMContentLoaded", $), t.removeEventListener("load", $), _.ready()
    }

    _.fn.ready = function (t) {
        return q.then(t).catch(function (t) {
            _.readyException(t)
        }), this
    }, _.extend({
        isReady: !1, readyWait: 1, ready: function (t) {
            (!0 === t ? --_.readyWait : _.isReady) || (_.isReady = !0, !0 !== t && --_.readyWait > 0 || q.resolveWith(i, [_]))
        }
    }), _.ready.then = q.then, "complete" === i.readyState || "loading" !== i.readyState && !i.documentElement.doScroll ? t.setTimeout(_.ready) : (i.addEventListener("DOMContentLoaded", $), t.addEventListener("load", $));
    var W = function (t, e, n, i, o, r, s) {
        var a = 0, l = t.length, u = null == n;
        if ("object" === b(n)) for (a in o = !0, n) W(t, e, a, n[a], !0, r, s); else if (void 0 !== i && (o = !0, m(i) || (s = !0), u && (s ? (e.call(t, i), e = null) : (u = e, e = function (t, e, n) {
            return u.call(_(t), n)
        })), e)) for (; a < l; a++) e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
        return o ? t : u ? e.call(t) : l ? e(t[0], n) : r
    }, F = /^-ms-/, B = /-([a-z])/g;

    function U(t, e) {
        return e.toUpperCase()
    }

    function V(t) {
        return t.replace(F, "ms-").replace(B, U)
    }

    var Y = function (t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
    };

    function Q() {
        this.expando = _.expando + Q.uid++
    }

    Q.uid = 1, Q.prototype = {
        cache: function (t) {
            var e = t[this.expando];
            return e || (e = {}, Y(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                value: e,
                configurable: !0
            }))), e
        }, set: function (t, e, n) {
            var i, o = this.cache(t);
            if ("string" == typeof e) o[V(e)] = n; else for (i in e) o[V(i)] = e[i];
            return o
        }, get: function (t, e) {
            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][V(e)]
        }, access: function (t, e, n) {
            return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e)
        }, remove: function (t, e) {
            var n, i = t[this.expando];
            if (void 0 !== i) {
                if (void 0 !== e) {
                    n = (e = Array.isArray(e) ? e.map(V) : (e = V(e)) in i ? [e] : e.match(P) || []).length;
                    for (; n--;) delete i[e[n]]
                }
                (void 0 === e || _.isEmptyObject(i)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
            }
        }, hasData: function (t) {
            var e = t[this.expando];
            return void 0 !== e && !_.isEmptyObject(e)
        }
    };
    var X = new Q, K = new Q, G = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Z = /[A-Z]/g;

    function J(t, e, n) {
        var i;
        if (void 0 === n && 1 === t.nodeType) if (i = "data-" + e.replace(Z, "-$&").toLowerCase(), "string" == typeof (n = t.getAttribute(i))) {
            try {
                n = function (t) {
                    return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : G.test(t) ? JSON.parse(t) : t)
                }(n)
            } catch (t) {
            }
            K.set(t, e, n)
        } else n = void 0;
        return n
    }

    _.extend({
        hasData: function (t) {
            return K.hasData(t) || X.hasData(t)
        }, data: function (t, e, n) {
            return K.access(t, e, n)
        }, removeData: function (t, e) {
            K.remove(t, e)
        }, _data: function (t, e, n) {
            return X.access(t, e, n)
        }, _removeData: function (t, e) {
            X.remove(t, e)
        }
    }), _.fn.extend({
        data: function (t, e) {
            var n, i, o, r = this[0], s = r && r.attributes;
            if (void 0 === t) {
                if (this.length && (o = K.get(r), 1 === r.nodeType && !X.get(r, "hasDataAttrs"))) {
                    for (n = s.length; n--;) s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = V(i.slice(5)), J(r, i, o[i]));
                    X.set(r, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof t ? this.each(function () {
                K.set(this, t)
            }) : W(this, function (e) {
                var n;
                if (r && void 0 === e) {
                    if (void 0 !== (n = K.get(r, t))) return n;
                    if (void 0 !== (n = J(r, t))) return n
                } else this.each(function () {
                    K.set(this, t, e)
                })
            }, null, e, arguments.length > 1, null, !0)
        }, removeData: function (t) {
            return this.each(function () {
                K.remove(this, t)
            })
        }
    }), _.extend({
        queue: function (t, e, n) {
            var i;
            if (t) return e = (e || "fx") + "queue", i = X.get(t, e), n && (!i || Array.isArray(n) ? i = X.access(t, e, _.makeArray(n)) : i.push(n)), i || []
        }, dequeue: function (t, e) {
            e = e || "fx";
            var n = _.queue(t, e), i = n.length, o = n.shift(), r = _._queueHooks(t, e);
            "inprogress" === o && (o = n.shift(), i--), o && ("fx" === e && n.unshift("inprogress"), delete r.stop, o.call(t, function () {
                _.dequeue(t, e)
            }, r)), !i && r && r.empty.fire()
        }, _queueHooks: function (t, e) {
            var n = e + "queueHooks";
            return X.get(t, n) || X.access(t, n, {
                empty: _.Callbacks("once memory").add(function () {
                    X.remove(t, [e + "queue", n])
                })
            })
        }
    }), _.fn.extend({
        queue: function (t, e) {
            var n = 2;
            return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? _.queue(this[0], t) : void 0 === e ? this : this.each(function () {
                var n = _.queue(this, t, e);
                _._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && _.dequeue(this, t)
            })
        }, dequeue: function (t) {
            return this.each(function () {
                _.dequeue(this, t)
            })
        }, clearQueue: function (t) {
            return this.queue(t || "fx", [])
        }, promise: function (t, e) {
            var n, i = 1, o = _.Deferred(), r = this, s = this.length, a = function () {
                --i || o.resolveWith(r, [r])
            };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;) (n = X.get(r[s], t + "queueHooks")) && n.empty && (i++, n.empty.add(a));
            return a(), o.promise(e)
        }
    });
    var tt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, et = new RegExp("^(?:([+-])=|)(" + tt + ")([a-z%]*)$", "i"),
        nt = ["Top", "Right", "Bottom", "Left"], it = function (t, e) {
            return "none" === (t = e || t).style.display || "" === t.style.display && _.contains(t.ownerDocument, t) && "none" === _.css(t, "display")
        }, ot = function (t, e, n, i) {
            var o, r, s = {};
            for (r in e) s[r] = t.style[r], t.style[r] = e[r];
            for (r in o = n.apply(t, i || []), e) t.style[r] = s[r];
            return o
        };

    function rt(t, e, n, i) {
        var o, r, s = 20, a = i ? function () {
                return i.cur()
            } : function () {
                return _.css(t, e, "")
            }, l = a(), u = n && n[3] || (_.cssNumber[e] ? "" : "px"),
            c = (_.cssNumber[e] || "px" !== u && +l) && et.exec(_.css(t, e));
        if (c && c[3] !== u) {
            for (l /= 2, u = u || c[3], c = +l || 1; s--;) _.style(t, e, c + u), (1 - r) * (1 - (r = a() / l || .5)) <= 0 && (s = 0), c /= r;
            c *= 2, _.style(t, e, c + u), n = n || []
        }
        return n && (c = +c || +l || 0, o = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = o)), o
    }

    var st = {};

    function at(t) {
        var e, n = t.ownerDocument, i = t.nodeName, o = st[i];
        return o || (e = n.body.appendChild(n.createElement(i)), o = _.css(e, "display"), e.parentNode.removeChild(e), "none" === o && (o = "block"), st[i] = o, o)
    }

    function lt(t, e) {
        for (var n, i, o = [], r = 0, s = t.length; r < s; r++) (i = t[r]).style && (n = i.style.display, e ? ("none" === n && (o[r] = X.get(i, "display") || null, o[r] || (i.style.display = "")), "" === i.style.display && it(i) && (o[r] = at(i))) : "none" !== n && (o[r] = "none", X.set(i, "display", n)));
        for (r = 0; r < s; r++) null != o[r] && (t[r].style.display = o[r]);
        return t
    }

    _.fn.extend({
        show: function () {
            return lt(this, !0)
        }, hide: function () {
            return lt(this)
        }, toggle: function (t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                it(this) ? _(this).show() : _(this).hide()
            })
        }
    });
    var ut = /^(?:checkbox|radio)$/i, ct = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, ht = /^$|^module$|\/(?:java|ecma)script/i,
        ft = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function dt(t, e) {
        var n;
        return n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && I(t, e) ? _.merge([t], n) : n
    }

    function pt(t, e) {
        for (var n = 0, i = t.length; n < i; n++) X.set(t[n], "globalEval", !e || X.get(e[n], "globalEval"))
    }

    ft.optgroup = ft.option, ft.tbody = ft.tfoot = ft.colgroup = ft.caption = ft.thead, ft.th = ft.td;
    var mt = /<|&#?\w+;/;

    function gt(t, e, n, i, o) {
        for (var r, s, a, l, u, c, h = e.createDocumentFragment(), f = [], d = 0, p = t.length; d < p; d++) if ((r = t[d]) || 0 === r) if ("object" === b(r)) _.merge(f, r.nodeType ? [r] : r); else if (mt.test(r)) {
            for (s = s || h.appendChild(e.createElement("div")), a = (ct.exec(r) || ["", ""])[1].toLowerCase(), l = ft[a] || ft._default, s.innerHTML = l[1] + _.htmlPrefilter(r) + l[2], c = l[0]; c--;) s = s.lastChild;
            _.merge(f, s.childNodes), (s = h.firstChild).textContent = ""
        } else f.push(e.createTextNode(r));
        for (h.textContent = "", d = 0; r = f[d++];) if (i && _.inArray(r, i) > -1) o && o.push(r); else if (u = _.contains(r.ownerDocument, r), s = dt(h.appendChild(r), "script"), u && pt(s), n) for (c = 0; r = s[c++];) ht.test(r.type || "") && n.push(r);
        return h
    }

    !function () {
        var t = i.createDocumentFragment().appendChild(i.createElement("div")), e = i.createElement("input");
        e.setAttribute("type", "radio"), e.setAttribute("checked", "checked"), e.setAttribute("name", "t"), t.appendChild(e), p.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", p.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var vt = i.documentElement, yt = /^key/, bt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        _t = /^([^.]*)(?:\.(.+)|)/;

    function wt() {
        return !0
    }

    function xt() {
        return !1
    }

    function Et() {
        try {
            return i.activeElement
        } catch (t) {
        }
    }

    function Ct(t, e, n, i, o, r) {
        var s, a;
        if ("object" == typeof e) {
            for (a in "string" != typeof n && (i = i || n, n = void 0), e) Ct(t, a, n, i, e[a], r);
            return t
        }
        if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = xt; else if (!o) return t;
        return 1 === r && (s = o, (o = function (t) {
            return _().off(t), s.apply(this, arguments)
        }).guid = s.guid || (s.guid = _.guid++)), t.each(function () {
            _.event.add(this, e, o, i, n)
        })
    }

    _.event = {
        global: {}, add: function (t, e, n, i, o) {
            var r, s, a, l, u, c, h, f, d, p, m, g = X.get(t);
            if (g) for (n.handler && (n = (r = n).handler, o = r.selector), o && _.find.matchesSelector(vt, o), n.guid || (n.guid = _.guid++), (l = g.events) || (l = g.events = {}), (s = g.handle) || (s = g.handle = function (e) {
                return void 0 !== _ && _.event.triggered !== e.type ? _.event.dispatch.apply(t, arguments) : void 0
            }), u = (e = (e || "").match(P) || [""]).length; u--;) d = m = (a = _t.exec(e[u]) || [])[1], p = (a[2] || "").split(".").sort(), d && (h = _.event.special[d] || {}, d = (o ? h.delegateType : h.bindType) || d, h = _.event.special[d] || {}, c = _.extend({
                type: d,
                origType: m,
                data: i,
                handler: n,
                guid: n.guid,
                selector: o,
                needsContext: o && _.expr.match.needsContext.test(o),
                namespace: p.join(".")
            }, r), (f = l[d]) || ((f = l[d] = []).delegateCount = 0, h.setup && !1 !== h.setup.call(t, i, p, s) || t.addEventListener && t.addEventListener(d, s)), h.add && (h.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), o ? f.splice(f.delegateCount++, 0, c) : f.push(c), _.event.global[d] = !0)
        }, remove: function (t, e, n, i, o) {
            var r, s, a, l, u, c, h, f, d, p, m, g = X.hasData(t) && X.get(t);
            if (g && (l = g.events)) {
                for (u = (e = (e || "").match(P) || [""]).length; u--;) if (d = m = (a = _t.exec(e[u]) || [])[1], p = (a[2] || "").split(".").sort(), d) {
                    for (h = _.event.special[d] || {}, f = l[d = (i ? h.delegateType : h.bindType) || d] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = f.length; r--;) c = f[r], !o && m !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (f.splice(r, 1), c.selector && f.delegateCount--, h.remove && h.remove.call(t, c));
                    s && !f.length && (h.teardown && !1 !== h.teardown.call(t, p, g.handle) || _.removeEvent(t, d, g.handle), delete l[d])
                } else for (d in l) _.event.remove(t, d + e[u], n, i, !0);
                _.isEmptyObject(l) && X.remove(t, "handle events")
            }
        }, dispatch: function (t) {
            var e, n, i, o, r, s, a = _.event.fix(t), l = new Array(arguments.length),
                u = (X.get(this, "events") || {})[a.type] || [], c = _.event.special[a.type] || {};
            for (l[0] = a, e = 1; e < arguments.length; e++) l[e] = arguments[e];
            if (a.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, a)) {
                for (s = _.event.handlers.call(this, a, u), e = 0; (o = s[e++]) && !a.isPropagationStopped();) for (a.currentTarget = o.elem, n = 0; (r = o.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(r.namespace) || (a.handleObj = r, a.data = r.data, void 0 !== (i = ((_.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, a), a.result
            }
        }, handlers: function (t, e) {
            var n, i, o, r, s, a = [], l = e.delegateCount, u = t.target;
            if (l && u.nodeType && !("click" === t.type && t.button >= 1)) for (; u !== this; u = u.parentNode || this) if (1 === u.nodeType && ("click" !== t.type || !0 !== u.disabled)) {
                for (r = [], s = {}, n = 0; n < l; n++) void 0 === s[o = (i = e[n]).selector + " "] && (s[o] = i.needsContext ? _(o, this).index(u) > -1 : _.find(o, this, null, [u]).length), s[o] && r.push(i);
                r.length && a.push({elem: u, handlers: r})
            }
            return u = this, l < e.length && a.push({elem: u, handlers: e.slice(l)}), a
        }, addProp: function (t, e) {
            Object.defineProperty(_.Event.prototype, t, {
                enumerable: !0, configurable: !0, get: m(e) ? function () {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[t]
                }, set: function (e) {
                    Object.defineProperty(this, t, {enumerable: !0, configurable: !0, writable: !0, value: e})
                }
            })
        }, fix: function (t) {
            return t[_.expando] ? t : new _.Event(t)
        }, special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== Et() && this.focus) return this.focus(), !1
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    if (this === Et() && this.blur) return this.blur(), !1
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && I(this, "input")) return this.click(), !1
                }, _default: function (t) {
                    return I(t.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        }
    }, _.removeEvent = function (t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n)
    }, _.Event = function (t, e) {
        if (!(this instanceof _.Event)) return new _.Event(t, e);
        t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? wt : xt, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && _.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[_.expando] = !0
    }, _.Event.prototype = {
        constructor: _.Event,
        isDefaultPrevented: xt,
        isPropagationStopped: xt,
        isImmediatePropagationStopped: xt,
        isSimulated: !1,
        preventDefault: function () {
            var t = this.originalEvent;
            this.isDefaultPrevented = wt, t && !this.isSimulated && t.preventDefault()
        },
        stopPropagation: function () {
            var t = this.originalEvent;
            this.isPropagationStopped = wt, t && !this.isSimulated && t.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = wt, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, _.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (t) {
            var e = t.button;
            return null == t.which && yt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && bt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
        }
    }, _.event.addProp), _.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (t, e) {
        _.event.special[t] = {
            delegateType: e, bindType: e, handle: function (t) {
                var n, i = t.relatedTarget, o = t.handleObj;
                return i && (i === this || _.contains(this, i)) || (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
            }
        }
    }), _.fn.extend({
        on: function (t, e, n, i) {
            return Ct(this, t, e, n, i)
        }, one: function (t, e, n, i) {
            return Ct(this, t, e, n, i, 1)
        }, off: function (t, e, n) {
            var i, o;
            if (t && t.preventDefault && t.handleObj) return i = t.handleObj, _(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof t) {
                for (o in t) this.off(o, e, t[o]);
                return this
            }
            return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = xt), this.each(function () {
                _.event.remove(this, t, n, e)
            })
        }
    });
    var Tt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        St = /<script|<style|<link/i, It = /checked\s*(?:[^=]|=\s*.checked.)/i,
        At = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Dt(t, e) {
        return I(t, "table") && I(11 !== e.nodeType ? e : e.firstChild, "tr") && _(t).children("tbody")[0] || t
    }

    function kt(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function Ot(t) {
        return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t
    }

    function jt(t, e) {
        var n, i, o, r, s, a, l, u;
        if (1 === e.nodeType) {
            if (X.hasData(t) && (r = X.access(t), s = X.set(e, r), u = r.events)) for (o in delete s.handle, s.events = {}, u) for (n = 0, i = u[o].length; n < i; n++) _.event.add(e, o, u[o][n]);
            K.hasData(t) && (a = K.access(t), l = _.extend({}, a), K.set(e, l))
        }
    }

    function Lt(t, e) {
        var n = e.nodeName.toLowerCase();
        "input" === n && ut.test(t.type) ? e.checked = t.checked : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
    }

    function Nt(t, e, n, i) {
        e = s.apply([], e);
        var o, r, a, l, u, c, h = 0, f = t.length, d = f - 1, g = e[0], v = m(g);
        if (v || f > 1 && "string" == typeof g && !p.checkClone && It.test(g)) return t.each(function (o) {
            var r = t.eq(o);
            v && (e[0] = g.call(this, o, r.html())), Nt(r, e, n, i)
        });
        if (f && (r = (o = gt(e, t[0].ownerDocument, !1, t, i)).firstChild, 1 === o.childNodes.length && (o = r), r || i)) {
            for (l = (a = _.map(dt(o, "script"), kt)).length; h < f; h++) u = o, h !== d && (u = _.clone(u, !0, !0), l && _.merge(a, dt(u, "script"))), n.call(t[h], u, h);
            if (l) for (c = a[a.length - 1].ownerDocument, _.map(a, Ot), h = 0; h < l; h++) u = a[h], ht.test(u.type || "") && !X.access(u, "globalEval") && _.contains(c, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? _._evalUrl && _._evalUrl(u.src) : y(u.textContent.replace(At, ""), c, u))
        }
        return t
    }

    function Pt(t, e, n) {
        for (var i, o = e ? _.filter(e, t) : t, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || _.cleanData(dt(i)), i.parentNode && (n && _.contains(i.ownerDocument, i) && pt(dt(i, "script")), i.parentNode.removeChild(i));
        return t
    }

    _.extend({
        htmlPrefilter: function (t) {
            return t.replace(Tt, "<$1></$2>")
        }, clone: function (t, e, n) {
            var i, o, r, s, a = t.cloneNode(!0), l = _.contains(t.ownerDocument, t);
            if (!(p.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || _.isXMLDoc(t))) for (s = dt(a), i = 0, o = (r = dt(t)).length; i < o; i++) Lt(r[i], s[i]);
            if (e) if (n) for (r = r || dt(t), s = s || dt(a), i = 0, o = r.length; i < o; i++) jt(r[i], s[i]); else jt(t, a);
            return (s = dt(a, "script")).length > 0 && pt(s, !l && dt(t, "script")), a
        }, cleanData: function (t) {
            for (var e, n, i, o = _.event.special, r = 0; void 0 !== (n = t[r]); r++) if (Y(n)) {
                if (e = n[X.expando]) {
                    if (e.events) for (i in e.events) o[i] ? _.event.remove(n, i) : _.removeEvent(n, i, e.handle);
                    n[X.expando] = void 0
                }
                n[K.expando] && (n[K.expando] = void 0)
            }
        }
    }), _.fn.extend({
        detach: function (t) {
            return Pt(this, t, !0)
        }, remove: function (t) {
            return Pt(this, t)
        }, text: function (t) {
            return W(this, function (t) {
                return void 0 === t ? _.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                })
            }, null, t, arguments.length)
        }, append: function () {
            return Nt(this, arguments, function (t) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Dt(this, t).appendChild(t)
            })
        }, prepend: function () {
            return Nt(this, arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = Dt(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        }, before: function () {
            return Nt(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        }, after: function () {
            return Nt(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        }, empty: function () {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (_.cleanData(dt(t, !1)), t.textContent = "");
            return this
        }, clone: function (t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function () {
                return _.clone(this, t, e)
            })
        }, html: function (t) {
            return W(this, function (t) {
                var e = this[0] || {}, n = 0, i = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !St.test(t) && !ft[(ct.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = _.htmlPrefilter(t);
                    try {
                        for (; n < i; n++) 1 === (e = this[n] || {}).nodeType && (_.cleanData(dt(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (t) {
                    }
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        }, replaceWith: function () {
            var t = [];
            return Nt(this, arguments, function (e) {
                var n = this.parentNode;
                _.inArray(this, t) < 0 && (_.cleanData(dt(this)), n && n.replaceChild(e, this))
            }, t)
        }
    }), _.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (t, e) {
        _.fn[t] = function (t) {
            for (var n, i = [], o = _(t), r = o.length - 1, s = 0; s <= r; s++) n = s === r ? this : this.clone(!0), _(o[s])[e](n), a.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var Mt = new RegExp("^(" + tt + ")(?!px)[a-z%]+$", "i"), Rt = function (e) {
        var n = e.ownerDocument.defaultView;
        return n && n.opener || (n = t), n.getComputedStyle(e)
    }, zt = new RegExp(nt.join("|"), "i");

    function Ht(t, e, n) {
        var i, o, r, s, a = t.style;
        return (n = n || Rt(t)) && ("" !== (s = n.getPropertyValue(e) || n[e]) || _.contains(t.ownerDocument, t) || (s = _.style(t, e)), !p.pixelBoxStyles() && Mt.test(s) && zt.test(e) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r)), void 0 !== s ? s + "" : s
    }

    function qt(t, e) {
        return {
            get: function () {
                if (!t()) return (this.get = e).apply(this, arguments);
                delete this.get
            }
        }
    }

    !function () {
        function e() {
            if (c) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", vt.appendChild(u).appendChild(c);
                var e = t.getComputedStyle(c);
                o = "1%" !== e.top, l = 12 === n(e.marginLeft), c.style.right = "60%", a = 36 === n(e.right), r = 36 === n(e.width), c.style.position = "absolute", s = 36 === c.offsetWidth || "absolute", vt.removeChild(u), c = null
            }
        }

        function n(t) {
            return Math.round(parseFloat(t))
        }

        var o, r, s, a, l, u = i.createElement("div"), c = i.createElement("div");
        c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", p.clearCloneStyle = "content-box" === c.style.backgroundClip, _.extend(p, {
            boxSizingReliable: function () {
                return e(), r
            }, pixelBoxStyles: function () {
                return e(), a
            }, pixelPosition: function () {
                return e(), o
            }, reliableMarginLeft: function () {
                return e(), l
            }, scrollboxSize: function () {
                return e(), s
            }
        }))
    }();
    var $t = /^(none|table(?!-c[ea]).+)/, Wt = /^--/,
        Ft = {position: "absolute", visibility: "hidden", display: "block"},
        Bt = {letterSpacing: "0", fontWeight: "400"}, Ut = ["Webkit", "Moz", "ms"], Vt = i.createElement("div").style;

    function Yt(t) {
        var e = _.cssProps[t];
        return e || (e = _.cssProps[t] = function (t) {
            if (t in Vt) return t;
            for (var e = t[0].toUpperCase() + t.slice(1), n = Ut.length; n--;) if ((t = Ut[n] + e) in Vt) return t
        }(t) || t), e
    }

    function Qt(t, e, n) {
        var i = et.exec(e);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
    }

    function Xt(t, e, n, i, o, r) {
        var s = "width" === e ? 1 : 0, a = 0, l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; s < 4; s += 2) "margin" === n && (l += _.css(t, n + nt[s], !0, o)), i ? ("content" === n && (l -= _.css(t, "padding" + nt[s], !0, o)), "margin" !== n && (l -= _.css(t, "border" + nt[s] + "Width", !0, o))) : (l += _.css(t, "padding" + nt[s], !0, o), "padding" !== n ? l += _.css(t, "border" + nt[s] + "Width", !0, o) : a += _.css(t, "border" + nt[s] + "Width", !0, o));
        return !i && r >= 0 && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - r - l - a - .5))), l
    }

    function Kt(t, e, n) {
        var i = Rt(t), o = Ht(t, e, i), r = "border-box" === _.css(t, "boxSizing", !1, i), s = r;
        if (Mt.test(o)) {
            if (!n) return o;
            o = "auto"
        }
        return s = s && (p.boxSizingReliable() || o === t.style[e]), ("auto" === o || !parseFloat(o) && "inline" === _.css(t, "display", !1, i)) && (o = t["offset" + e[0].toUpperCase() + e.slice(1)], s = !0), (o = parseFloat(o) || 0) + Xt(t, e, n || (r ? "border" : "content"), s, i, o) + "px"
    }

    function Gt(t, e, n, i, o) {
        return new Gt.prototype.init(t, e, n, i, o)
    }

    _.extend({
        cssHooks: {
            opacity: {
                get: function (t, e) {
                    if (e) {
                        var n = Ht(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function (t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var o, r, s, a = V(e), l = Wt.test(e), u = t.style;
                if (l || (e = Yt(a)), s = _.cssHooks[e] || _.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (o = s.get(t, !1, i)) ? o : u[e];
                "string" == (r = typeof n) && (o = et.exec(n)) && o[1] && (n = rt(t, e, o), r = "number"), null != n && n == n && ("number" === r && (n += o && o[3] || (_.cssNumber[a] ? "" : "px")), p.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (u[e] = "inherit"), s && "set" in s && void 0 === (n = s.set(t, n, i)) || (l ? u.setProperty(e, n) : u[e] = n))
            }
        },
        css: function (t, e, n, i) {
            var o, r, s, a = V(e);
            return Wt.test(e) || (e = Yt(a)), (s = _.cssHooks[e] || _.cssHooks[a]) && "get" in s && (o = s.get(t, !0, n)), void 0 === o && (o = Ht(t, e, i)), "normal" === o && e in Bt && (o = Bt[e]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o
        }
    }), _.each(["height", "width"], function (t, e) {
        _.cssHooks[e] = {
            get: function (t, n, i) {
                if (n) return !$t.test(_.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? Kt(t, e, i) : ot(t, Ft, function () {
                    return Kt(t, e, i)
                })
            }, set: function (t, n, i) {
                var o, r = Rt(t), s = "border-box" === _.css(t, "boxSizing", !1, r), a = i && Xt(t, e, i, s, r);
                return s && p.scrollboxSize() === r.position && (a -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(r[e]) - Xt(t, e, "border", !1, r) - .5)), a && (o = et.exec(n)) && "px" !== (o[3] || "px") && (t.style[e] = n, n = _.css(t, e)), Qt(0, n, a)
            }
        }
    }), _.cssHooks.marginLeft = qt(p.reliableMarginLeft, function (t, e) {
        if (e) return (parseFloat(Ht(t, "marginLeft")) || t.getBoundingClientRect().left - ot(t, {marginLeft: 0}, function () {
            return t.getBoundingClientRect().left
        })) + "px"
    }), _.each({margin: "", padding: "", border: "Width"}, function (t, e) {
        _.cssHooks[t + e] = {
            expand: function (n) {
                for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) o[t + nt[i] + e] = r[i] || r[i - 2] || r[0];
                return o
            }
        }, "margin" !== t && (_.cssHooks[t + e].set = Qt)
    }), _.fn.extend({
        css: function (t, e) {
            return W(this, function (t, e, n) {
                var i, o, r = {}, s = 0;
                if (Array.isArray(e)) {
                    for (i = Rt(t), o = e.length; s < o; s++) r[e[s]] = _.css(t, e[s], !1, i);
                    return r
                }
                return void 0 !== n ? _.style(t, e, n) : _.css(t, e)
            }, t, e, arguments.length > 1)
        }
    }), _.Tween = Gt, Gt.prototype = {
        constructor: Gt, init: function (t, e, n, i, o, r) {
            this.elem = t, this.prop = n, this.easing = o || _.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = r || (_.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var t = Gt.propHooks[this.prop];
            return t && t.get ? t.get(this) : Gt.propHooks._default.get(this)
        }, run: function (t) {
            var e, n = Gt.propHooks[this.prop];
            return this.options.duration ? this.pos = e = _.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Gt.propHooks._default.set(this), this
        }
    }, Gt.prototype.init.prototype = Gt.prototype, Gt.propHooks = {
        _default: {
            get: function (t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = _.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
            }, set: function (t) {
                _.fx.step[t.prop] ? _.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[_.cssProps[t.prop]] && !_.cssHooks[t.prop] ? t.elem[t.prop] = t.now : _.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }, Gt.propHooks.scrollTop = Gt.propHooks.scrollLeft = {
        set: function (t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, _.easing = {
        linear: function (t) {
            return t
        }, swing: function (t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }, _default: "swing"
    }, _.fx = Gt.prototype.init, _.fx.step = {};
    var Zt, Jt, te = /^(?:toggle|show|hide)$/, ee = /queueHooks$/;

    function ne() {
        Jt && (!1 === i.hidden && t.requestAnimationFrame ? t.requestAnimationFrame(ne) : t.setTimeout(ne, _.fx.interval), _.fx.tick())
    }

    function ie() {
        return t.setTimeout(function () {
            Zt = void 0
        }), Zt = Date.now()
    }

    function oe(t, e) {
        var n, i = 0, o = {height: t};
        for (e = e ? 1 : 0; i < 4; i += 2 - e) o["margin" + (n = nt[i])] = o["padding" + n] = t;
        return e && (o.opacity = o.width = t), o
    }

    function re(t, e, n) {
        for (var i, o = (se.tweeners[e] || []).concat(se.tweeners["*"]), r = 0, s = o.length; r < s; r++) if (i = o[r].call(n, e, t)) return i
    }

    function se(t, e, n) {
        var i, o, r = 0, s = se.prefilters.length, a = _.Deferred().always(function () {
            delete l.elem
        }), l = function () {
            if (o) return !1;
            for (var e = Zt || ie(), n = Math.max(0, u.startTime + u.duration - e), i = 1 - (n / u.duration || 0), r = 0, s = u.tweens.length; r < s; r++) u.tweens[r].run(i);
            return a.notifyWith(t, [u, i, n]), i < 1 && s ? n : (s || a.notifyWith(t, [u, 1, 0]), a.resolveWith(t, [u]), !1)
        }, u = a.promise({
            elem: t,
            props: _.extend({}, e),
            opts: _.extend(!0, {specialEasing: {}, easing: _.easing._default}, n),
            originalProperties: e,
            originalOptions: n,
            startTime: Zt || ie(),
            duration: n.duration,
            tweens: [],
            createTween: function (e, n) {
                var i = _.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
                return u.tweens.push(i), i
            },
            stop: function (e) {
                var n = 0, i = e ? u.tweens.length : 0;
                if (o) return this;
                for (o = !0; n < i; n++) u.tweens[n].run(1);
                return e ? (a.notifyWith(t, [u, 1, 0]), a.resolveWith(t, [u, e])) : a.rejectWith(t, [u, e]), this
            }
        }), c = u.props;
        for (function (t, e) {
            var n, i, o, r, s;
            for (n in t) if (o = e[i = V(n)], r = t[n], Array.isArray(r) && (o = r[1], r = t[n] = r[0]), n !== i && (t[i] = r, delete t[n]), (s = _.cssHooks[i]) && "expand" in s) for (n in r = s.expand(r), delete t[i], r) n in t || (t[n] = r[n], e[n] = o); else e[i] = o
        }(c, u.opts.specialEasing); r < s; r++) if (i = se.prefilters[r].call(u, t, c, u.opts)) return m(i.stop) && (_._queueHooks(u.elem, u.opts.queue).stop = i.stop.bind(i)), i;
        return _.map(c, re, u), m(u.opts.start) && u.opts.start.call(t, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), _.fx.timer(_.extend(l, {
            elem: t,
            anim: u,
            queue: u.opts.queue
        })), u
    }

    _.Animation = _.extend(se, {
        tweeners: {
            "*": [function (t, e) {
                var n = this.createTween(t, e);
                return rt(n.elem, t, et.exec(e), n), n
            }]
        }, tweener: function (t, e) {
            m(t) ? (e = t, t = ["*"]) : t = t.match(P);
            for (var n, i = 0, o = t.length; i < o; i++) n = t[i], se.tweeners[n] = se.tweeners[n] || [], se.tweeners[n].unshift(e)
        }, prefilters: [function (t, e, n) {
            var i, o, r, s, a, l, u, c, h = "width" in e || "height" in e, f = this, d = {}, p = t.style,
                m = t.nodeType && it(t), g = X.get(t, "fxshow");
            for (i in n.queue || (null == (s = _._queueHooks(t, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
                s.unqueued || a()
            }), s.unqueued++, f.always(function () {
                f.always(function () {
                    s.unqueued--, _.queue(t, "fx").length || s.empty.fire()
                })
            })), e) if (o = e[i], te.test(o)) {
                if (delete e[i], r = r || "toggle" === o, o === (m ? "hide" : "show")) {
                    if ("show" !== o || !g || void 0 === g[i]) continue;
                    m = !0
                }
                d[i] = g && g[i] || _.style(t, i)
            }
            if ((l = !_.isEmptyObject(e)) || !_.isEmptyObject(d)) for (i in h && 1 === t.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (u = g && g.display) && (u = X.get(t, "display")), "none" === (c = _.css(t, "display")) && (u ? c = u : (lt([t], !0), u = t.style.display || u, c = _.css(t, "display"), lt([t]))), ("inline" === c || "inline-block" === c && null != u) && "none" === _.css(t, "float") && (l || (f.done(function () {
                p.display = u
            }), null == u && (c = p.display, u = "none" === c ? "" : c)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", f.always(function () {
                p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
            })), l = !1, d) l || (g ? "hidden" in g && (m = g.hidden) : g = X.access(t, "fxshow", {display: u}), r && (g.hidden = !m), m && lt([t], !0), f.done(function () {
                for (i in m || lt([t]), X.remove(t, "fxshow"), d) _.style(t, i, d[i])
            })), l = re(m ? g[i] : 0, i, f), i in g || (g[i] = l.start, m && (l.end = l.start, l.start = 0))
        }], prefilter: function (t, e) {
            e ? se.prefilters.unshift(t) : se.prefilters.push(t)
        }
    }), _.speed = function (t, e, n) {
        var i = t && "object" == typeof t ? _.extend({}, t) : {
            complete: n || !n && e || m(t) && t,
            duration: t,
            easing: n && e || e && !m(e) && e
        };
        return _.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in _.fx.speeds ? i.duration = _.fx.speeds[i.duration] : i.duration = _.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
            m(i.old) && i.old.call(this), i.queue && _.dequeue(this, i.queue)
        }, i
    }, _.fn.extend({
        fadeTo: function (t, e, n, i) {
            return this.filter(it).css("opacity", 0).show().end().animate({opacity: e}, t, n, i)
        }, animate: function (t, e, n, i) {
            var o = _.isEmptyObject(t), r = _.speed(e, n, i), s = function () {
                var e = se(this, _.extend({}, t), r);
                (o || X.get(this, "finish")) && e.stop(!0)
            };
            return s.finish = s, o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
        }, stop: function (t, e, n) {
            var i = function (t) {
                var e = t.stop;
                delete t.stop, e(n)
            };
            return "string" != typeof t && (n = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function () {
                var e = !0, o = null != t && t + "queueHooks", r = _.timers, s = X.get(this);
                if (o) s[o] && s[o].stop && i(s[o]); else for (o in s) s[o] && s[o].stop && ee.test(o) && i(s[o]);
                for (o = r.length; o--;) r[o].elem !== this || null != t && r[o].queue !== t || (r[o].anim.stop(n), e = !1, r.splice(o, 1));
                !e && n || _.dequeue(this, t)
            })
        }, finish: function (t) {
            return !1 !== t && (t = t || "fx"), this.each(function () {
                var e, n = X.get(this), i = n[t + "queue"], o = n[t + "queueHooks"], r = _.timers, s = i ? i.length : 0;
                for (n.finish = !0, _.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
                for (e = 0; e < s; e++) i[e] && i[e].finish && i[e].finish.call(this);
                delete n.finish
            })
        }
    }), _.each(["toggle", "show", "hide"], function (t, e) {
        var n = _.fn[e];
        _.fn[e] = function (t, i, o) {
            return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(oe(e, !0), t, i, o)
        }
    }), _.each({
        slideDown: oe("show"),
        slideUp: oe("hide"),
        slideToggle: oe("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (t, e) {
        _.fn[t] = function (t, n, i) {
            return this.animate(e, t, n, i)
        }
    }), _.timers = [], _.fx.tick = function () {
        var t, e = 0, n = _.timers;
        for (Zt = Date.now(); e < n.length; e++) (t = n[e])() || n[e] !== t || n.splice(e--, 1);
        n.length || _.fx.stop(), Zt = void 0
    }, _.fx.timer = function (t) {
        _.timers.push(t), _.fx.start()
    }, _.fx.interval = 13, _.fx.start = function () {
        Jt || (Jt = !0, ne())
    }, _.fx.stop = function () {
        Jt = null
    }, _.fx.speeds = {slow: 600, fast: 200, _default: 400}, _.fn.delay = function (e, n) {
        return e = _.fx && _.fx.speeds[e] || e, n = n || "fx", this.queue(n, function (n, i) {
            var o = t.setTimeout(n, e);
            i.stop = function () {
                t.clearTimeout(o)
            }
        })
    }, function () {
        var t = i.createElement("input"), e = i.createElement("select").appendChild(i.createElement("option"));
        t.type = "checkbox", p.checkOn = "" !== t.value, p.optSelected = e.selected, (t = i.createElement("input")).value = "t", t.type = "radio", p.radioValue = "t" === t.value
    }();
    var ae, le = _.expr.attrHandle;
    _.fn.extend({
        attr: function (t, e) {
            return W(this, _.attr, t, e, arguments.length > 1)
        }, removeAttr: function (t) {
            return this.each(function () {
                _.removeAttr(this, t)
            })
        }
    }), _.extend({
        attr: function (t, e, n) {
            var i, o, r = t.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return void 0 === t.getAttribute ? _.prop(t, e, n) : (1 === r && _.isXMLDoc(t) || (o = _.attrHooks[e.toLowerCase()] || (_.expr.match.bool.test(e) ? ae : void 0)), void 0 !== n ? null === n ? void _.removeAttr(t, e) : o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : o && "get" in o && null !== (i = o.get(t, e)) ? i : null == (i = _.find.attr(t, e)) ? void 0 : i)
        }, attrHooks: {
            type: {
                set: function (t, e) {
                    if (!p.radioValue && "radio" === e && I(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e
                    }
                }
            }
        }, removeAttr: function (t, e) {
            var n, i = 0, o = e && e.match(P);
            if (o && 1 === t.nodeType) for (; n = o[i++];) t.removeAttribute(n)
        }
    }), ae = {
        set: function (t, e, n) {
            return !1 === e ? _.removeAttr(t, n) : t.setAttribute(n, n), n
        }
    }, _.each(_.expr.match.bool.source.match(/\w+/g), function (t, e) {
        var n = le[e] || _.find.attr;
        le[e] = function (t, e, i) {
            var o, r, s = e.toLowerCase();
            return i || (r = le[s], le[s] = o, o = null != n(t, e, i) ? s : null, le[s] = r), o
        }
    });
    var ue = /^(?:input|select|textarea|button)$/i, ce = /^(?:a|area)$/i;

    function he(t) {
        return (t.match(P) || []).join(" ")
    }

    function fe(t) {
        return t.getAttribute && t.getAttribute("class") || ""
    }

    function de(t) {
        return Array.isArray(t) ? t : "string" == typeof t && t.match(P) || []
    }

    _.fn.extend({
        prop: function (t, e) {
            return W(this, _.prop, t, e, arguments.length > 1)
        }, removeProp: function (t) {
            return this.each(function () {
                delete this[_.propFix[t] || t]
            })
        }
    }), _.extend({
        prop: function (t, e, n) {
            var i, o, r = t.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return 1 === r && _.isXMLDoc(t) || (e = _.propFix[e] || e, o = _.propHooks[e]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : t[e] = n : o && "get" in o && null !== (i = o.get(t, e)) ? i : t[e]
        }, propHooks: {
            tabIndex: {
                get: function (t) {
                    var e = _.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : ue.test(t.nodeName) || ce.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        }, propFix: {for: "htmlFor", class: "className"}
    }), p.optSelected || (_.propHooks.selected = {
        get: function (t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        }, set: function (t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }), _.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        _.propFix[this.toLowerCase()] = this
    }), _.fn.extend({
        addClass: function (t) {
            var e, n, i, o, r, s, a, l = 0;
            if (m(t)) return this.each(function (e) {
                _(this).addClass(t.call(this, e, fe(this)))
            });
            if ((e = de(t)).length) for (; n = this[l++];) if (o = fe(n), i = 1 === n.nodeType && " " + he(o) + " ") {
                for (s = 0; r = e[s++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                o !== (a = he(i)) && n.setAttribute("class", a)
            }
            return this
        }, removeClass: function (t) {
            var e, n, i, o, r, s, a, l = 0;
            if (m(t)) return this.each(function (e) {
                _(this).removeClass(t.call(this, e, fe(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((e = de(t)).length) for (; n = this[l++];) if (o = fe(n), i = 1 === n.nodeType && " " + he(o) + " ") {
                for (s = 0; r = e[s++];) for (; i.indexOf(" " + r + " ") > -1;) i = i.replace(" " + r + " ", " ");
                o !== (a = he(i)) && n.setAttribute("class", a)
            }
            return this
        }, toggleClass: function (t, e) {
            var n = typeof t, i = "string" === n || Array.isArray(t);
            return "boolean" == typeof e && i ? e ? this.addClass(t) : this.removeClass(t) : m(t) ? this.each(function (n) {
                _(this).toggleClass(t.call(this, n, fe(this), e), e)
            }) : this.each(function () {
                var e, o, r, s;
                if (i) for (o = 0, r = _(this), s = de(t); e = s[o++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e); else void 0 !== t && "boolean" !== n || ((e = fe(this)) && X.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : X.get(this, "__className__") || ""))
            })
        }, hasClass: function (t) {
            var e, n, i = 0;
            for (e = " " + t + " "; n = this[i++];) if (1 === n.nodeType && (" " + he(fe(n)) + " ").indexOf(e) > -1) return !0;
            return !1
        }
    });
    var pe = /\r/g;
    _.fn.extend({
        val: function (t) {
            var e, n, i, o = this[0];
            return arguments.length ? (i = m(t), this.each(function (n) {
                var o;
                1 === this.nodeType && (null == (o = i ? t.call(this, n, _(this).val()) : t) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = _.map(o, function (t) {
                    return null == t ? "" : t + ""
                })), (e = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o))
            })) : o ? (e = _.valHooks[o.type] || _.valHooks[o.nodeName.toLowerCase()]) && "get" in e && void 0 !== (n = e.get(o, "value")) ? n : "string" == typeof (n = o.value) ? n.replace(pe, "") : null == n ? "" : n : void 0
        }
    }), _.extend({
        valHooks: {
            option: {
                get: function (t) {
                    var e = _.find.attr(t, "value");
                    return null != e ? e : he(_.text(t))
                }
            }, select: {
                get: function (t) {
                    var e, n, i, o = t.options, r = t.selectedIndex, s = "select-one" === t.type, a = s ? null : [],
                        l = s ? r + 1 : o.length;
                    for (i = r < 0 ? l : s ? r : 0; i < l; i++) if (((n = o[i]).selected || i === r) && !n.disabled && (!n.parentNode.disabled || !I(n.parentNode, "optgroup"))) {
                        if (e = _(n).val(), s) return e;
                        a.push(e)
                    }
                    return a
                }, set: function (t, e) {
                    for (var n, i, o = t.options, r = _.makeArray(e), s = o.length; s--;) ((i = o[s]).selected = _.inArray(_.valHooks.option.get(i), r) > -1) && (n = !0);
                    return n || (t.selectedIndex = -1), r
                }
            }
        }
    }), _.each(["radio", "checkbox"], function () {
        _.valHooks[this] = {
            set: function (t, e) {
                if (Array.isArray(e)) return t.checked = _.inArray(_(t).val(), e) > -1
            }
        }, p.checkOn || (_.valHooks[this].get = function (t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    }), p.focusin = "onfocusin" in t;
    var me = /^(?:focusinfocus|focusoutblur)$/, ge = function (t) {
        t.stopPropagation()
    };
    _.extend(_.event, {
        trigger: function (e, n, o, r) {
            var s, a, l, u, c, f, d, p, v = [o || i], y = h.call(e, "type") ? e.type : e,
                b = h.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = p = l = o = o || i, 3 !== o.nodeType && 8 !== o.nodeType && !me.test(y + _.event.triggered) && (y.indexOf(".") > -1 && (y = (b = y.split(".")).shift(), b.sort()), c = y.indexOf(":") < 0 && "on" + y, (e = e[_.expando] ? e : new _.Event(y, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = b.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = o), n = null == n ? [e] : _.makeArray(n, [e]), d = _.event.special[y] || {}, r || !d.trigger || !1 !== d.trigger.apply(o, n))) {
                if (!r && !d.noBubble && !g(o)) {
                    for (u = d.delegateType || y, me.test(u + y) || (a = a.parentNode); a; a = a.parentNode) v.push(a), l = a;
                    l === (o.ownerDocument || i) && v.push(l.defaultView || l.parentWindow || t)
                }
                for (s = 0; (a = v[s++]) && !e.isPropagationStopped();) p = a, e.type = s > 1 ? u : d.bindType || y, (f = (X.get(a, "events") || {})[e.type] && X.get(a, "handle")) && f.apply(a, n), (f = c && a[c]) && f.apply && Y(a) && (e.result = f.apply(a, n), !1 === e.result && e.preventDefault());
                return e.type = y, r || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !Y(o) || c && m(o[y]) && !g(o) && ((l = o[c]) && (o[c] = null), _.event.triggered = y, e.isPropagationStopped() && p.addEventListener(y, ge), o[y](), e.isPropagationStopped() && p.removeEventListener(y, ge), _.event.triggered = void 0, l && (o[c] = l)), e.result
            }
        }, simulate: function (t, e, n) {
            var i = _.extend(new _.Event, n, {type: t, isSimulated: !0});
            _.event.trigger(i, null, e)
        }
    }), _.fn.extend({
        trigger: function (t, e) {
            return this.each(function () {
                _.event.trigger(t, e, this)
            })
        }, triggerHandler: function (t, e) {
            var n = this[0];
            if (n) return _.event.trigger(t, e, n, !0)
        }
    }), p.focusin || _.each({focus: "focusin", blur: "focusout"}, function (t, e) {
        var n = function (t) {
            _.event.simulate(e, t.target, _.event.fix(t))
        };
        _.event.special[e] = {
            setup: function () {
                var i = this.ownerDocument || this, o = X.access(i, e);
                o || i.addEventListener(t, n, !0), X.access(i, e, (o || 0) + 1)
            }, teardown: function () {
                var i = this.ownerDocument || this, o = X.access(i, e) - 1;
                o ? X.access(i, e, o) : (i.removeEventListener(t, n, !0), X.remove(i, e))
            }
        }
    });
    var ve = t.location, ye = Date.now(), be = /\?/;
    _.parseXML = function (e) {
        var n;
        if (!e || "string" != typeof e) return null;
        try {
            n = (new t.DOMParser).parseFromString(e, "text/xml")
        } catch (t) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || _.error("Invalid XML: " + e), n
    };
    var _e = /\[\]$/, we = /\r?\n/g, xe = /^(?:submit|button|image|reset|file)$/i,
        Ee = /^(?:input|select|textarea|keygen)/i;

    function Ce(t, e, n, i) {
        var o;
        if (Array.isArray(e)) _.each(e, function (e, o) {
            n || _e.test(t) ? i(t, o) : Ce(t + "[" + ("object" == typeof o && null != o ? e : "") + "]", o, n, i)
        }); else if (n || "object" !== b(e)) i(t, e); else for (o in e) Ce(t + "[" + o + "]", e[o], n, i)
    }

    _.param = function (t, e) {
        var n, i = [], o = function (t, e) {
            var n = m(e) ? e() : e;
            i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (Array.isArray(t) || t.jquery && !_.isPlainObject(t)) _.each(t, function () {
            o(this.name, this.value)
        }); else for (n in t) Ce(n, t[n], e, o);
        return i.join("&")
    }, _.fn.extend({
        serialize: function () {
            return _.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var t = _.prop(this, "elements");
                return t ? _.makeArray(t) : this
            }).filter(function () {
                var t = this.type;
                return this.name && !_(this).is(":disabled") && Ee.test(this.nodeName) && !xe.test(t) && (this.checked || !ut.test(t))
            }).map(function (t, e) {
                var n = _(this).val();
                return null == n ? null : Array.isArray(n) ? _.map(n, function (t) {
                    return {name: e.name, value: t.replace(we, "\r\n")}
                }) : {name: e.name, value: n.replace(we, "\r\n")}
            }).get()
        }
    });
    var Te = /%20/g, Se = /#.*$/, Ie = /([?&])_=[^&]*/, Ae = /^(.*?):[ \t]*([^\r\n]*)$/gm, De = /^(?:GET|HEAD)$/,
        ke = /^\/\//, Oe = {}, je = {}, Le = "*/".concat("*"), Ne = i.createElement("a");

    function Pe(t) {
        return function (e, n) {
            "string" != typeof e && (n = e, e = "*");
            var i, o = 0, r = e.toLowerCase().match(P) || [];
            if (m(n)) for (; i = r[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
        }
    }

    function Me(t, e, n, i) {
        var o = {}, r = t === je;

        function s(a) {
            var l;
            return o[a] = !0, _.each(t[a] || [], function (t, a) {
                var u = a(e, n, i);
                return "string" != typeof u || r || o[u] ? r ? !(l = u) : void 0 : (e.dataTypes.unshift(u), s(u), !1)
            }), l
        }

        return s(e.dataTypes[0]) || !o["*"] && s("*")
    }

    function Re(t, e) {
        var n, i, o = _.ajaxSettings.flatOptions || {};
        for (n in e) void 0 !== e[n] && ((o[n] ? t : i || (i = {}))[n] = e[n]);
        return i && _.extend(!0, t, i), t
    }

    Ne.href = ve.href, _.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ve.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ve.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Le,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": _.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (t, e) {
            return e ? Re(Re(t, _.ajaxSettings), e) : Re(_.ajaxSettings, t)
        },
        ajaxPrefilter: Pe(Oe),
        ajaxTransport: Pe(je),
        ajax: function (e, n) {
            "object" == typeof e && (n = e, e = void 0), n = n || {};
            var o, r, s, a, l, u, c, h, f, d, p = _.ajaxSetup({}, n), m = p.context || p,
                g = p.context && (m.nodeType || m.jquery) ? _(m) : _.event, v = _.Deferred(),
                y = _.Callbacks("once memory"), b = p.statusCode || {}, w = {}, x = {}, E = "canceled", C = {
                    readyState: 0, getResponseHeader: function (t) {
                        var e;
                        if (c) {
                            if (!a) for (a = {}; e = Ae.exec(s);) a[e[1].toLowerCase()] = e[2];
                            e = a[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    }, getAllResponseHeaders: function () {
                        return c ? s : null
                    }, setRequestHeader: function (t, e) {
                        return null == c && (t = x[t.toLowerCase()] = x[t.toLowerCase()] || t, w[t] = e), this
                    }, overrideMimeType: function (t) {
                        return null == c && (p.mimeType = t), this
                    }, statusCode: function (t) {
                        var e;
                        if (t) if (c) C.always(t[C.status]); else for (e in t) b[e] = [b[e], t[e]];
                        return this
                    }, abort: function (t) {
                        var e = t || E;
                        return o && o.abort(e), T(0, e), this
                    }
                };
            if (v.promise(C), p.url = ((e || p.url || ve.href) + "").replace(ke, ve.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(P) || [""], null == p.crossDomain) {
                u = i.createElement("a");
                try {
                    u.href = p.url, u.href = u.href, p.crossDomain = Ne.protocol + "//" + Ne.host != u.protocol + "//" + u.host
                } catch (t) {
                    p.crossDomain = !0
                }
            }
            if (p.data && p.processData && "string" != typeof p.data && (p.data = _.param(p.data, p.traditional)), Me(Oe, p, n, C), c) return C;
            for (f in (h = _.event && p.global) && 0 == _.active++ && _.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !De.test(p.type), r = p.url.replace(Se, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Te, "+")) : (d = p.url.slice(r.length), p.data && (p.processData || "string" == typeof p.data) && (r += (be.test(r) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (r = r.replace(Ie, "$1"), d = (be.test(r) ? "&" : "?") + "_=" + ye++ + d), p.url = r + d), p.ifModified && (_.lastModified[r] && C.setRequestHeader("If-Modified-Since", _.lastModified[r]), _.etag[r] && C.setRequestHeader("If-None-Match", _.etag[r])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && C.setRequestHeader("Content-Type", p.contentType), C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Le + "; q=0.01" : "") : p.accepts["*"]), p.headers) C.setRequestHeader(f, p.headers[f]);
            if (p.beforeSend && (!1 === p.beforeSend.call(m, C, p) || c)) return C.abort();
            if (E = "abort", y.add(p.complete), C.done(p.success), C.fail(p.error), o = Me(je, p, n, C)) {
                if (C.readyState = 1, h && g.trigger("ajaxSend", [C, p]), c) return C;
                p.async && p.timeout > 0 && (l = t.setTimeout(function () {
                    C.abort("timeout")
                }, p.timeout));
                try {
                    c = !1, o.send(w, T)
                } catch (t) {
                    if (c) throw t;
                    T(-1, t)
                }
            } else T(-1, "No Transport");

            function T(e, n, i, a) {
                var u, f, d, w, x, E = n;
                c || (c = !0, l && t.clearTimeout(l), o = void 0, s = a || "", C.readyState = e > 0 ? 4 : 0, u = e >= 200 && e < 300 || 304 === e, i && (w = function (t, e, n) {
                    for (var i, o, r, s, a = t.contents, l = t.dataTypes; "*" === l[0];) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
                    if (i) for (o in a) if (a[o] && a[o].test(i)) {
                        l.unshift(o);
                        break
                    }
                    if (l[0] in n) r = l[0]; else {
                        for (o in n) {
                            if (!l[0] || t.converters[o + " " + l[0]]) {
                                r = o;
                                break
                            }
                            s || (s = o)
                        }
                        r = r || s
                    }
                    if (r) return r !== l[0] && l.unshift(r), n[r]
                }(p, C, i)), w = function (t, e, n, i) {
                    var o, r, s, a, l, u = {}, c = t.dataTypes.slice();
                    if (c[1]) for (s in t.converters) u[s.toLowerCase()] = t.converters[s];
                    for (r = c.shift(); r;) if (t.responseFields[r] && (n[t.responseFields[r]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = c.shift()) if ("*" === r) r = l; else if ("*" !== l && l !== r) {
                        if (!(s = u[l + " " + r] || u["* " + r])) for (o in u) if ((a = o.split(" "))[1] === r && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                            !0 === s ? s = u[o] : !0 !== u[o] && (r = a[0], c.unshift(a[1]));
                            break
                        }
                        if (!0 !== s) if (s && t.throws) e = s(e); else try {
                            e = s(e)
                        } catch (t) {
                            return {state: "parsererror", error: s ? t : "No conversion from " + l + " to " + r}
                        }
                    }
                    return {state: "success", data: e}
                }(p, w, C, u), u ? (p.ifModified && ((x = C.getResponseHeader("Last-Modified")) && (_.lastModified[r] = x), (x = C.getResponseHeader("etag")) && (_.etag[r] = x)), 204 === e || "HEAD" === p.type ? E = "nocontent" : 304 === e ? E = "notmodified" : (E = w.state, f = w.data, u = !(d = w.error))) : (d = E, !e && E || (E = "error", e < 0 && (e = 0))), C.status = e, C.statusText = (n || E) + "", u ? v.resolveWith(m, [f, E, C]) : v.rejectWith(m, [C, E, d]), C.statusCode(b), b = void 0, h && g.trigger(u ? "ajaxSuccess" : "ajaxError", [C, p, u ? f : d]), y.fireWith(m, [C, E]), h && (g.trigger("ajaxComplete", [C, p]), --_.active || _.event.trigger("ajaxStop")))
            }

            return C
        },
        getJSON: function (t, e, n) {
            return _.get(t, e, n, "json")
        },
        getScript: function (t, e) {
            return _.get(t, void 0, e, "script")
        }
    }), _.each(["get", "post"], function (t, e) {
        _[e] = function (t, n, i, o) {
            return m(n) && (o = o || i, i = n, n = void 0), _.ajax(_.extend({
                url: t,
                type: e,
                dataType: o,
                data: n,
                success: i
            }, _.isPlainObject(t) && t))
        }
    }), _._evalUrl = function (t) {
        return _.ajax({url: t, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0})
    }, _.fn.extend({
        wrapAll: function (t) {
            var e;
            return this[0] && (m(t) && (t = t.call(this[0])), e = _(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                return t
            }).append(this)), this
        }, wrapInner: function (t) {
            return m(t) ? this.each(function (e) {
                _(this).wrapInner(t.call(this, e))
            }) : this.each(function () {
                var e = _(this), n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        }, wrap: function (t) {
            var e = m(t);
            return this.each(function (n) {
                _(this).wrapAll(e ? t.call(this, n) : t)
            })
        }, unwrap: function (t) {
            return this.parent(t).not("body").each(function () {
                _(this).replaceWith(this.childNodes)
            }), this
        }
    }), _.expr.pseudos.hidden = function (t) {
        return !_.expr.pseudos.visible(t)
    }, _.expr.pseudos.visible = function (t) {
        return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
    }, _.ajaxSettings.xhr = function () {
        try {
            return new t.XMLHttpRequest
        } catch (t) {
        }
    };
    var ze = {0: 200, 1223: 204}, He = _.ajaxSettings.xhr();
    p.cors = !!He && "withCredentials" in He, p.ajax = He = !!He, _.ajaxTransport(function (e) {
        var n, i;
        if (p.cors || He && !e.crossDomain) return {
            send: function (o, r) {
                var s, a = e.xhr();
                if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (s in e.xhrFields) a[s] = e.xhrFields[s];
                for (s in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o) a.setRequestHeader(s, o[s]);
                n = function (t) {
                    return function () {
                        n && (n = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(ze[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {binary: a.response} : {text: a.responseText}, a.getAllResponseHeaders()))
                    }
                }, a.onload = n(), i = a.onerror = a.ontimeout = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function () {
                    4 === a.readyState && t.setTimeout(function () {
                        n && i()
                    })
                }, n = n("abort");
                try {
                    a.send(e.hasContent && e.data || null)
                } catch (t) {
                    if (n) throw t
                }
            }, abort: function () {
                n && n()
            }
        }
    }), _.ajaxPrefilter(function (t) {
        t.crossDomain && (t.contents.script = !1)
    }), _.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {
            "text script": function (t) {
                return _.globalEval(t), t
            }
        }
    }), _.ajaxPrefilter("script", function (t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    }), _.ajaxTransport("script", function (t) {
        var e, n;
        if (t.crossDomain) return {
            send: function (o, r) {
                e = _("<script>").prop({charset: t.scriptCharset, src: t.url}).on("load error", n = function (t) {
                    e.remove(), n = null, t && r("error" === t.type ? 404 : 200, t.type)
                }), i.head.appendChild(e[0])
            }, abort: function () {
                n && n()
            }
        }
    });
    var qe = [], $e = /(=)\?(?=&|$)|\?\?/;
    _.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var t = qe.pop() || _.expando + "_" + ye++;
            return this[t] = !0, t
        }
    }), _.ajaxPrefilter("json jsonp", function (e, n, i) {
        var o, r, s,
            a = !1 !== e.jsonp && ($e.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && $e.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return o = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace($e, "$1" + o) : !1 !== e.jsonp && (e.url += (be.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function () {
            return s || _.error(o + " was not called"), s[0]
        }, e.dataTypes[0] = "json", r = t[o], t[o] = function () {
            s = arguments
        }, i.always(function () {
            void 0 === r ? _(t).removeProp(o) : t[o] = r, e[o] && (e.jsonpCallback = n.jsonpCallback, qe.push(o)), s && m(r) && r(s[0]), s = r = void 0
        }), "script"
    }), p.createHTMLDocument = function () {
        var t = i.implementation.createHTMLDocument("").body;
        return t.innerHTML = "<form></form><form></form>", 2 === t.childNodes.length
    }(), _.parseHTML = function (t, e, n) {
        return "string" != typeof t ? [] : ("boolean" == typeof e && (n = e, e = !1), e || (p.createHTMLDocument ? ((o = (e = i.implementation.createHTMLDocument("")).createElement("base")).href = i.location.href, e.head.appendChild(o)) : e = i), s = !n && [], (r = A.exec(t)) ? [e.createElement(r[1])] : (r = gt([t], e, s), s && s.length && _(s).remove(), _.merge([], r.childNodes)));
        var o, r, s
    }, _.fn.load = function (t, e, n) {
        var i, o, r, s = this, a = t.indexOf(" ");
        return a > -1 && (i = he(t.slice(a)), t = t.slice(0, a)), m(e) ? (n = e, e = void 0) : e && "object" == typeof e && (o = "POST"), s.length > 0 && _.ajax({
            url: t,
            type: o || "GET",
            dataType: "html",
            data: e
        }).done(function (t) {
            r = arguments, s.html(i ? _("<div>").append(_.parseHTML(t)).find(i) : t)
        }).always(n && function (t, e) {
            s.each(function () {
                n.apply(this, r || [t.responseText, e, t])
            })
        }), this
    }, _.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
        _.fn[e] = function (t) {
            return this.on(e, t)
        }
    }), _.expr.pseudos.animated = function (t) {
        return _.grep(_.timers, function (e) {
            return t === e.elem
        }).length
    }, _.offset = {
        setOffset: function (t, e, n) {
            var i, o, r, s, a, l, u = _.css(t, "position"), c = _(t), h = {};
            "static" === u && (t.style.position = "relative"), a = c.offset(), r = _.css(t, "top"), l = _.css(t, "left"), ("absolute" === u || "fixed" === u) && (r + l).indexOf("auto") > -1 ? (s = (i = c.position()).top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), m(e) && (e = e.call(t, n, _.extend({}, a))), null != e.top && (h.top = e.top - a.top + s), null != e.left && (h.left = e.left - a.left + o), "using" in e ? e.using.call(t, h) : c.css(h)
        }
    }, _.fn.extend({
        offset: function (t) {
            if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                _.offset.setOffset(this, t, e)
            });
            var e, n, i = this[0];
            return i ? i.getClientRects().length ? (e = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {top: 0, left: 0} : void 0
        }, position: function () {
            if (this[0]) {
                var t, e, n, i = this[0], o = {top: 0, left: 0};
                if ("fixed" === _.css(i, "position")) e = i.getBoundingClientRect(); else {
                    for (e = this.offset(), n = i.ownerDocument, t = i.offsetParent || n.documentElement; t && (t === n.body || t === n.documentElement) && "static" === _.css(t, "position");) t = t.parentNode;
                    t && t !== i && 1 === t.nodeType && ((o = _(t).offset()).top += _.css(t, "borderTopWidth", !0), o.left += _.css(t, "borderLeftWidth", !0))
                }
                return {
                    top: e.top - o.top - _.css(i, "marginTop", !0),
                    left: e.left - o.left - _.css(i, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var t = this.offsetParent; t && "static" === _.css(t, "position");) t = t.offsetParent;
                return t || vt
            })
        }
    }), _.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, e) {
        var n = "pageYOffset" === e;
        _.fn[t] = function (i) {
            return W(this, function (t, i, o) {
                var r;
                if (g(t) ? r = t : 9 === t.nodeType && (r = t.defaultView), void 0 === o) return r ? r[e] : t[i];
                r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : t[i] = o
            }, t, i, arguments.length)
        }
    }), _.each(["top", "left"], function (t, e) {
        _.cssHooks[e] = qt(p.pixelPosition, function (t, n) {
            if (n) return n = Ht(t, e), Mt.test(n) ? _(t).position()[e] + "px" : n
        })
    }), _.each({Height: "height", Width: "width"}, function (t, e) {
        _.each({padding: "inner" + t, content: e, "": "outer" + t}, function (n, i) {
            _.fn[i] = function (o, r) {
                var s = arguments.length && (n || "boolean" != typeof o),
                    a = n || (!0 === o || !0 === r ? "margin" : "border");
                return W(this, function (e, n, o) {
                    var r;
                    return g(e) ? 0 === i.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === o ? _.css(e, n, a) : _.style(e, n, o, a)
                }, e, s ? o : void 0, s)
            }
        })
    }), _.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, e) {
        _.fn[e] = function (t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }), _.fn.extend({
        hover: function (t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    }), _.fn.extend({
        bind: function (t, e, n) {
            return this.on(t, null, e, n)
        }, unbind: function (t, e) {
            return this.off(t, null, e)
        }, delegate: function (t, e, n, i) {
            return this.on(e, t, n, i)
        }, undelegate: function (t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        }
    }), _.proxy = function (t, e) {
        var n, i, o;
        if ("string" == typeof e && (n = t[e], e = t, t = n), m(t)) return i = r.call(arguments, 2), (o = function () {
            return t.apply(e || this, i.concat(r.call(arguments)))
        }).guid = t.guid = t.guid || _.guid++, o
    }, _.holdReady = function (t) {
        t ? _.readyWait++ : _.ready(!0)
    }, _.isArray = Array.isArray, _.parseJSON = JSON.parse, _.nodeName = I, _.isFunction = m, _.isWindow = g, _.camelCase = V, _.type = b, _.now = Date.now, _.isNumeric = function (t) {
        var e = _.type(t);
        return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
    }, "function" == typeof define && define.amd && define("jquery", [], function () {
        return _
    });
    var We = t.jQuery, Fe = t.$;
    return _.noConflict = function (e) {
        return t.$ === _ && (t.$ = Fe), e && t.jQuery === _ && (t.jQuery = We), _
    }, e || (t.jQuery = t.$ = _), _
}), function (t, e, n, i) {
    function o(e, n) {
        this.settings = null, this.options = t.extend({}, o.Defaults, n), this.$element = t(e), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {start: null, current: null},
            direction: null
        }, this._states = {
            current: {},
            tags: {initializing: ["busy"], animating: ["busy"], dragging: ["interacting"]}
        }, t.each(["onResize", "onThrottledResize"], t.proxy(function (e, n) {
            this._handlers[n] = t.proxy(this[n], this)
        }, this)), t.each(o.Plugins, t.proxy(function (t, e) {
            this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this)
        }, this)), t.each(o.Workers, t.proxy(function (e, n) {
            this._pipe.push({filter: n.filter, run: t.proxy(n.run, this)})
        }, this)), this.setup(), this.initialize()
    }

    o.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: e,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab"
    }, o.Width = {Default: "default", Inner: "inner", Outer: "outer"}, o.Type = {
        Event: "event",
        State: "state"
    }, o.Plugins = {}, o.Workers = [{
        filter: ["width", "settings"], run: function () {
            this._width = this.$element.width()
        }
    }, {
        filter: ["width", "items", "settings"], run: function (t) {
            t.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"], run: function () {
            this.$stage.children(".cloned").remove()
        }
    }, {
        filter: ["width", "items", "settings"], run: function (t) {
            var e = this.settings.margin || "", n = !this.settings.autoWidth, i = this.settings.rtl,
                o = {width: "auto", "margin-left": i ? e : "", "margin-right": i ? "" : e};
            !n && this.$stage.children().css(o), t.css = o
        }
    }, {
        filter: ["width", "items", "settings"], run: function (t) {
            var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin, n = null,
                i = this._items.length, o = !this.settings.autoWidth, r = [];
            for (t.items = {
                merge: !1,
                width: e
            }; i--;) n = this._mergers[i], n = this.settings.mergeFit && Math.min(n, this.settings.items) || n, t.items.merge = n > 1 || t.items.merge, r[i] = o ? e * n : this._items[i].width();
            this._widths = r
        }
    }, {
        filter: ["items", "settings"], run: function () {
            var e = [], n = this._items, i = this.settings, o = Math.max(2 * i.items, 4),
                r = 2 * Math.ceil(n.length / 2), s = i.loop && n.length ? i.rewind ? o : Math.max(o, r) : 0, a = "",
                l = "";
            for (s /= 2; s--;) e.push(this.normalize(e.length / 2, !0)), a += n[e[e.length - 1]][0].outerHTML, e.push(this.normalize(n.length - 1 - (e.length - 1) / 2, !0)), l = n[e[e.length - 1]][0].outerHTML + l;
            this._clones = e, t(a).addClass("cloned").appendTo(this.$stage), t(l).addClass("cloned").prependTo(this.$stage)
        }
    }, {
        filter: ["width", "items", "settings"], run: function () {
            for (var t = this.settings.rtl ? 1 : -1, e = this._clones.length + this._items.length, n = -1, i = 0, o = 0, r = []; ++n < e;) i = r[n - 1] || 0, o = this._widths[this.relative(n)] + this.settings.margin, r.push(i + o * t);
            this._coordinates = r
        }
    }, {
        filter: ["width", "items", "settings"], run: function () {
            var t = this.settings.stagePadding, e = this._coordinates, n = {
                width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
                "padding-left": t || "",
                "padding-right": t || ""
            };
            this.$stage.css(n)
        }
    }, {
        filter: ["width", "items", "settings"], run: function (t) {
            var e = this._coordinates.length, n = !this.settings.autoWidth, i = this.$stage.children();
            if (n && t.items.merge) for (; e--;) t.css.width = this._widths[this.relative(e)], i.eq(e).css(t.css); else n && (t.css.width = t.items.width, i.css(t.css))
        }
    }, {
        filter: ["items"], run: function () {
            this._coordinates.length < 1 && this.$stage.removeAttr("style")
        }
    }, {
        filter: ["width", "items", "settings"], run: function (t) {
            t.current = t.current ? this.$stage.children().index(t.current) : 0, t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current)), this.reset(t.current)
        }
    }, {
        filter: ["position"], run: function () {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"], run: function () {
            var t, e, n, i, o = this.settings.rtl ? 1 : -1, r = 2 * this.settings.stagePadding,
                s = this.coordinates(this.current()) + r, a = s + this.width() * o, l = [];
            for (n = 0, i = this._coordinates.length; n < i; n++) t = this._coordinates[n - 1] || 0, e = Math.abs(this._coordinates[n]) + r * o, (this.op(t, "<=", s) && this.op(t, ">", a) || this.op(e, "<", s) && this.op(e, ">", a)) && l.push(n);
            this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
        }
    }], o.prototype.initialize = function () {
        var e, n, o;
        (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) && (e = this.$element.find("img"), n = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : i, o = this.$element.children(n).width(), e.length && o <= 0 && this.preloadAutoWidthImages(e));
        this.$element.addClass(this.options.loadingClass), this.$stage = t("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
    }, o.prototype.setup = function () {
        var e = this.viewport(), n = this.options.responsive, i = -1, o = null;
        n ? (t.each(n, function (t) {
            t <= e && t > i && (i = Number(t))
        }), "function" == typeof (o = t.extend({}, this.options, n[i])).stagePadding && (o.stagePadding = o.stagePadding()), delete o.responsive, o.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + i))) : o = t.extend({}, this.options), this.trigger("change", {
            property: {
                name: "settings",
                value: o
            }
        }), this._breakpoint = i, this.settings = o, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        })
    }, o.prototype.optionsLogic = function () {
        this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, o.prototype.prepare = function (e) {
        var n = this.trigger("prepare", {content: e});
        return n.data || (n.data = t("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(e)), this.trigger("prepared", {content: n.data}), n.data
    }, o.prototype.update = function () {
        for (var e = 0, n = this._pipe.length, i = t.proxy(function (t) {
            return this[t]
        }, this._invalidated), o = {}; e < n;) (this._invalidated.all || t.grep(this._pipe[e].filter, i).length > 0) && this._pipe[e].run(o), e++;
        this._invalidated = {}, !this.is("valid") && this.enter("valid")
    }, o.prototype.width = function (t) {
        switch (t = t || o.Width.Default) {
            case o.Width.Inner:
            case o.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, o.prototype.refresh = function () {
        this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
    }, o.prototype.onThrottledResize = function () {
        e.clearTimeout(this.resizeTimer), this.resizeTimer = e.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
    }, o.prototype.onResize = function () {
        return !!this._items.length && this._width !== this.$element.width() && !!this.$element.is(":visible") && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))
    }, o.prototype.registerEventHandlers = function () {
        t.support.transition && this.$stage.on(t.support.transition.end + ".owl.core", t.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(e, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
            return !1
        })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", t.proxy(this.onDragEnd, this)))
    }, o.prototype.onDragStart = function (e) {
        var i = null;
        3 !== e.which && (t.support.transform ? i = {
            x: (i = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","))[16 === i.length ? 12 : 4],
            y: i[16 === i.length ? 13 : 5]
        } : (i = this.$stage.position(), i = {
            x: this.settings.rtl ? i.left + this.$stage.width() - this.width() + this.settings.margin : i.left,
            y: i.top
        }), this.is("animating") && (t.support.transform ? this.animate(i.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === e.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = t(e.target), this._drag.stage.start = i, this._drag.stage.current = i, this._drag.pointer = this.pointer(e), t(n).on("mouseup.owl.core touchend.owl.core", t.proxy(this.onDragEnd, this)), t(n).one("mousemove.owl.core touchmove.owl.core", t.proxy(function (e) {
            var i = this.difference(this._drag.pointer, this.pointer(e));
            t(n).on("mousemove.owl.core touchmove.owl.core", t.proxy(this.onDragMove, this)), Math.abs(i.x) < Math.abs(i.y) && this.is("valid") || (e.preventDefault(), this.enter("dragging"), this.trigger("drag"))
        }, this)))
    }, o.prototype.onDragMove = function (t) {
        var e = null, n = null, i = null, o = this.difference(this._drag.pointer, this.pointer(t)),
            r = this.difference(this._drag.stage.start, o);
        this.is("dragging") && (t.preventDefault(), this.settings.loop ? (e = this.coordinates(this.minimum()), n = this.coordinates(this.maximum() + 1) - e, r.x = ((r.x - e) % n + n) % n + e) : (e = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), n = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), i = this.settings.pullDrag ? -1 * o.x / 5 : 0, r.x = Math.max(Math.min(r.x, e + i), n + i)), this._drag.stage.current = r, this.animate(r.x))
    }, o.prototype.onDragEnd = function (e) {
        var i = this.difference(this._drag.pointer, this.pointer(e)), o = this._drag.stage.current,
            r = i.x > 0 ^ this.settings.rtl ? "left" : "right";
        t(n).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== i.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(o.x, 0 !== i.x ? r : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = r, (Math.abs(i.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function () {
            return !1
        })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
    }, o.prototype.closest = function (e, n) {
        var i = -1, o = this.width(), r = this.coordinates();
        return this.settings.freeDrag || t.each(r, t.proxy(function (t, s) {
            return "left" === n && e > s - 30 && e < s + 30 ? i = t : "right" === n && e > s - o - 30 && e < s - o + 30 ? i = t + 1 : this.op(e, "<", s) && this.op(e, ">", r[t + 1] || s - o) && (i = "left" === n ? t + 1 : t), -1 === i
        }, this)), this.settings.loop || (this.op(e, ">", r[this.minimum()]) ? i = e = this.minimum() : this.op(e, "<", r[this.maximum()]) && (i = e = this.maximum())), i
    }, o.prototype.animate = function (e) {
        var n = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd(), n && (this.enter("animating"), this.trigger("translate")), t.support.transform3d && t.support.transition ? this.$stage.css({
            transform: "translate3d(" + e + "px,0px,0px)",
            transition: this.speed() / 1e3 + "s"
        }) : n ? this.$stage.animate({left: e + "px"}, this.speed(), this.settings.fallbackEasing, t.proxy(this.onTransitionEnd, this)) : this.$stage.css({left: e + "px"})
    }, o.prototype.is = function (t) {
        return this._states.current[t] && this._states.current[t] > 0
    }, o.prototype.current = function (t) {
        if (t === i) return this._current;
        if (0 === this._items.length) return i;
        if (t = this.normalize(t), this._current !== t) {
            var e = this.trigger("change", {property: {name: "position", value: t}});
            e.data !== i && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }, o.prototype.invalidate = function (e) {
        return "string" === t.type(e) && (this._invalidated[e] = !0, this.is("valid") && this.leave("valid")), t.map(this._invalidated, function (t, e) {
            return e
        })
    }, o.prototype.reset = function (t) {
        (t = this.normalize(t)) !== i && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
    }, o.prototype.normalize = function (t, e) {
        var n = this._items.length, o = e ? 0 : this._clones.length;
        return !this.isNumeric(t) || n < 1 ? t = i : (t < 0 || t >= n + o) && (t = ((t - o / 2) % n + n) % n + o / 2), t
    }, o.prototype.relative = function (t) {
        return t -= this._clones.length / 2, this.normalize(t, !0)
    }, o.prototype.maximum = function (t) {
        var e, n, i, o = this.settings, r = this._coordinates.length;
        if (o.loop) r = this._clones.length / 2 + this._items.length - 1; else if (o.autoWidth || o.merge) {
            for (e = this._items.length, n = this._items[--e].width(), i = this.$element.width(); e-- && !((n += this._items[e].width() + this.settings.margin) > i);) ;
            r = e + 1
        } else r = o.center ? this._items.length - 1 : this._items.length - o.items;
        return t && (r -= this._clones.length / 2), Math.max(r, 0)
    }, o.prototype.minimum = function (t) {
        return t ? 0 : this._clones.length / 2
    }, o.prototype.items = function (t) {
        return t === i ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
    }, o.prototype.mergers = function (t) {
        return t === i ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
    }, o.prototype.clones = function (e) {
        var n = this._clones.length / 2, o = n + this._items.length, r = function (t) {
            return t % 2 == 0 ? o + t / 2 : n - (t + 1) / 2
        };
        return e === i ? t.map(this._clones, function (t, e) {
            return r(e)
        }) : t.map(this._clones, function (t, n) {
            return t === e ? r(n) : null
        })
    }, o.prototype.speed = function (t) {
        return t !== i && (this._speed = t), this._speed
    }, o.prototype.coordinates = function (e) {
        var n, o = 1, r = e - 1;
        return e === i ? t.map(this._coordinates, t.proxy(function (t, e) {
            return this.coordinates(e)
        }, this)) : (this.settings.center ? (this.settings.rtl && (o = -1, r = e + 1), n = this._coordinates[e], n += (this.width() - n + (this._coordinates[r] || 0)) / 2 * o) : n = this._coordinates[r] || 0, n = Math.ceil(n))
    }, o.prototype.duration = function (t, e, n) {
        return 0 === n ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(n || this.settings.smartSpeed)
    }, o.prototype.to = function (t, e) {
        var n = this.current(), i = null, o = t - this.relative(n), r = (o > 0) - (o < 0), s = this._items.length,
            a = this.minimum(), l = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(o) > s / 2 && (o += -1 * r * s), (i = (((t = n + o) - a) % s + s) % s + a) !== t && i - o <= l && i - o > 0 && (n = i - o, t = i, this.reset(n))) : this.settings.rewind ? t = (t % (l += 1) + l) % l : t = Math.max(a, Math.min(l, t)), this.speed(this.duration(n, t, e)), this.current(t), this.$element.is(":visible") && this.update()
    }, o.prototype.next = function (t) {
        t = t || !1, this.to(this.relative(this.current()) + 1, t)
    }, o.prototype.prev = function (t) {
        t = t || !1, this.to(this.relative(this.current()) - 1, t)
    }, o.prototype.onTransitionEnd = function (t) {
        if (t !== i && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0))) return !1;
        this.leave("animating"), this.trigger("translated")
    }, o.prototype.viewport = function () {
        var i;
        return this.options.responsiveBaseElement !== e ? i = t(this.options.responsiveBaseElement).width() : e.innerWidth ? i = e.innerWidth : n.documentElement && n.documentElement.clientWidth ? i = n.documentElement.clientWidth : console.warn("Can not detect viewport width."), i
    }, o.prototype.replace = function (e) {
        this.$stage.empty(), this._items = [], e && (e = e instanceof jQuery ? e : t(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter(function () {
            return 1 === this.nodeType
        }).each(t.proxy(function (t, e) {
            e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, o.prototype.add = function (e, n) {
        var o = this.relative(this._current);
        n = n === i ? this._items.length : this.normalize(n, !0), e = e instanceof jQuery ? e : t(e), this.trigger("add", {
            content: e,
            position: n
        }), e = this.prepare(e), 0 === this._items.length || n === this._items.length ? (0 === this._items.length && this.$stage.append(e), 0 !== this._items.length && this._items[n - 1].after(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[n].before(e), this._items.splice(n, 0, e), this._mergers.splice(n, 0, 1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[o] && this.reset(this._items[o].index()), this.invalidate("items"), this.trigger("added", {
            content: e,
            position: n
        })
    }, o.prototype.remove = function (t) {
        (t = this.normalize(t, !0)) !== i && (this.trigger("remove", {
            content: this._items[t],
            position: t
        }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: t
        }))
    }, o.prototype.preloadAutoWidthImages = function (e) {
        e.each(t.proxy(function (e, n) {
            this.enter("pre-loading"), n = t(n), t(new Image).one("load", t.proxy(function (t) {
                n.attr("src", t.target.src), n.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
            }, this)).attr("src", n.attr("src") || n.attr("data-src") || n.attr("data-src-retina"))
        }, this))
    }, o.prototype.destroy = function () {
        for (var i in this.$element.off(".owl.core"), this.$stage.off(".owl.core"), t(n).off(".owl.core"), !1 !== this.settings.responsive && (e.clearTimeout(this.resizeTimer), this.off(e, "resize", this._handlers.onThrottledResize)), this._plugins) this._plugins[i].destroy();
        this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
    }, o.prototype.op = function (t, e, n) {
        var i = this.settings.rtl;
        switch (e) {
            case "<":
                return i ? t > n : t < n;
            case ">":
                return i ? t < n : t > n;
            case ">=":
                return i ? t <= n : t >= n;
            case "<=":
                return i ? t >= n : t <= n
        }
    }, o.prototype.on = function (t, e, n, i) {
        t.addEventListener ? t.addEventListener(e, n, i) : t.attachEvent && t.attachEvent("on" + e, n)
    }, o.prototype.off = function (t, e, n, i) {
        t.removeEventListener ? t.removeEventListener(e, n, i) : t.detachEvent && t.detachEvent("on" + e, n)
    }, o.prototype.trigger = function (e, n, i, r, s) {
        var a = {item: {count: this._items.length, index: this.current()}},
            l = t.camelCase(t.grep(["on", e, i], function (t) {
                return t
            }).join("-").toLowerCase()),
            u = t.Event([e, "owl", i || "carousel"].join(".").toLowerCase(), t.extend({relatedTarget: this}, a, n));
        return this._supress[e] || (t.each(this._plugins, function (t, e) {
            e.onTrigger && e.onTrigger(u)
        }), this.register({
            type: o.Type.Event,
            name: e
        }), this.$element.trigger(u), this.settings && "function" == typeof this.settings[l] && this.settings[l].call(this, u)), u
    }, o.prototype.enter = function (e) {
        t.each([e].concat(this._states.tags[e] || []), t.proxy(function (t, e) {
            this._states.current[e] === i && (this._states.current[e] = 0), this._states.current[e]++
        }, this))
    }, o.prototype.leave = function (e) {
        t.each([e].concat(this._states.tags[e] || []), t.proxy(function (t, e) {
            this._states.current[e]--
        }, this))
    }, o.prototype.register = function (e) {
        if (e.type === o.Type.Event) {
            if (t.event.special[e.name] || (t.event.special[e.name] = {}), !t.event.special[e.name].owl) {
                var n = t.event.special[e.name]._default;
                t.event.special[e.name]._default = function (t) {
                    return !n || !n.apply || t.namespace && -1 !== t.namespace.indexOf("owl") ? t.namespace && t.namespace.indexOf("owl") > -1 : n.apply(this, arguments)
                }, t.event.special[e.name].owl = !0
            }
        } else e.type === o.Type.State && (this._states.tags[e.name] ? this._states.tags[e.name] = this._states.tags[e.name].concat(e.tags) : this._states.tags[e.name] = e.tags, this._states.tags[e.name] = t.grep(this._states.tags[e.name], t.proxy(function (n, i) {
            return t.inArray(n, this._states.tags[e.name]) === i
        }, this)))
    }, o.prototype.suppress = function (e) {
        t.each(e, t.proxy(function (t, e) {
            this._supress[e] = !0
        }, this))
    }, o.prototype.release = function (e) {
        t.each(e, t.proxy(function (t, e) {
            delete this._supress[e]
        }, this))
    }, o.prototype.pointer = function (t) {
        var n = {x: null, y: null};
        return (t = (t = t.originalEvent || t || e.event).touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t).pageX ? (n.x = t.pageX, n.y = t.pageY) : (n.x = t.clientX, n.y = t.clientY), n
    }, o.prototype.isNumeric = function (t) {
        return !isNaN(parseFloat(t))
    }, o.prototype.difference = function (t, e) {
        return {x: t.x - e.x, y: t.y - e.y}
    }, t.fn.owlCarousel = function (e) {
        var n = Array.prototype.slice.call(arguments, 1);
        return this.each(function () {
            var i = t(this), r = i.data("owl.carousel");
            r || (r = new o(this, "object" == typeof e && e), i.data("owl.carousel", r), t.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (e, n) {
                r.register({
                    type: o.Type.Event,
                    name: n
                }), r.$element.on(n + ".owl.carousel.core", t.proxy(function (t) {
                    t.namespace && t.relatedTarget !== this && (this.suppress([n]), r[n].apply(this, [].slice.call(arguments, 1)), this.release([n]))
                }, r))
            })), "string" == typeof e && "_" !== e.charAt(0) && r[e].apply(r, n)
        })
    }, t.fn.owlCarousel.Constructor = o
}(window.Zepto || window.jQuery, window, document), function (t, e, n, i) {
    var o = function (e) {
        this._core = e, this._interval = null, this._visible = null, this._handlers = {
            "initialized.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.settings.autoRefresh && this.watch()
            }, this)
        }, this._core.options = t.extend({}, o.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    o.Defaults = {autoRefresh: !0, autoRefreshInterval: 500}, o.prototype.watch = function () {
        this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = e.setInterval(t.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
    }, o.prototype.refresh = function () {
        this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
    }, o.prototype.destroy = function () {
        var t, n;
        for (t in e.clearInterval(this._interval), this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = o
}(window.Zepto || window.jQuery, window, document), function (t, e, n, i) {
    var o = function (e) {
        this._core = e, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": t.proxy(function (e) {
                if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type)) for (var n = this._core.settings, i = n.center && Math.ceil(n.items / 2) || n.items, o = n.center && -1 * i || 0, r = (e.property && void 0 !== e.property.value ? e.property.value : this._core.current()) + o, s = this._core.clones().length, a = t.proxy(function (t, e) {
                    this.load(e)
                }, this); o++ < i;) this.load(s / 2 + this._core.relative(r)), s && t.each(this._core.clones(this._core.relative(r)), a), r++
            }, this)
        }, this._core.options = t.extend({}, o.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    o.Defaults = {lazyLoad: !1}, o.prototype.load = function (n) {
        var i = this._core.$stage.children().eq(n), o = i && i.find(".owl-lazy");
        !o || t.inArray(i.get(0), this._loaded) > -1 || (o.each(t.proxy(function (n, i) {
            var o, r = t(i), s = e.devicePixelRatio > 1 && r.attr("data-src-retina") || r.attr("data-src");
            this._core.trigger("load", {
                element: r,
                url: s
            }, "lazy"), r.is("img") ? r.one("load.owl.lazy", t.proxy(function () {
                r.css("opacity", 1), this._core.trigger("loaded", {element: r, url: s}, "lazy")
            }, this)).attr("src", s) : ((o = new Image).onload = t.proxy(function () {
                r.css({"background-image": 'url("' + s + '")', opacity: "1"}), this._core.trigger("loaded", {
                    element: r,
                    url: s
                }, "lazy")
            }, this), o.src = s)
        }, this)), this._loaded.push(i.get(0)))
    }, o.prototype.destroy = function () {
        var t, e;
        for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Lazy = o
}(window.Zepto || window.jQuery, window, document), function (t, e, n, i) {
    var o = function (e) {
        this._core = e, this._handlers = {
            "initialized.owl.carousel refreshed.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.settings.autoHeight && this.update()
            }, this), "changed.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.settings.autoHeight && "position" == t.property.name && this.update()
            }, this), "loaded.owl.lazy": t.proxy(function (t) {
                t.namespace && this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
            }, this)
        }, this._core.options = t.extend({}, o.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    o.Defaults = {autoHeight: !1, autoHeightClass: "owl-height"}, o.prototype.update = function () {
        var e, n = this._core._current, i = n + this._core.settings.items,
            o = this._core.$stage.children().toArray().slice(n, i), r = [];
        t.each(o, function (e, n) {
            r.push(t(n).height())
        }), e = Math.max.apply(null, r), this._core.$stage.parent().height(e).addClass(this._core.settings.autoHeightClass)
    }, o.prototype.destroy = function () {
        var t, e;
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.AutoHeight = o
}(window.Zepto || window.jQuery, window, document), function (t, e, n, i) {
    var o = function (e) {
        this._core = e, this._videos = {}, this._playing = null, this._handlers = {
            "initialized.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.register({type: "state", name: "playing", tags: ["interacting"]})
            }, this), "resize.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault()
            }, this), "refreshed.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
            }, this), "changed.owl.carousel": t.proxy(function (t) {
                t.namespace && "position" === t.property.name && this._playing && this.stop()
            }, this), "prepared.owl.carousel": t.proxy(function (e) {
                if (e.namespace) {
                    var n = t(e.content).find(".owl-video");
                    n.length && (n.css("display", "none"), this.fetch(n, t(e.content)))
                }
            }, this)
        }, this._core.options = t.extend({}, o.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy(function (t) {
            this.play(t)
        }, this))
    };
    o.Defaults = {video: !1, videoHeight: !1, videoWidth: !1}, o.prototype.fetch = function (t, e) {
        var n = t.attr("data-vimeo-id") ? "vimeo" : t.attr("data-vzaar-id") ? "vzaar" : "youtube",
            i = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id"),
            o = t.attr("data-width") || this._core.settings.videoWidth,
            r = t.attr("data-height") || this._core.settings.videoHeight, s = t.attr("href");
        if (!s) throw new Error("Missing video URL.");
        if ((i = s.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu") > -1) n = "youtube"; else if (i[3].indexOf("vimeo") > -1) n = "vimeo"; else {
            if (!(i[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
            n = "vzaar"
        }
        i = i[6], this._videos[s] = {
            type: n,
            id: i,
            width: o,
            height: r
        }, e.attr("data-video", s), this.thumbnail(t, this._videos[s])
    }, o.prototype.thumbnail = function (e, n) {
        var i, o, r = n.width && n.height ? 'style="width:' + n.width + "px;height:" + n.height + 'px;"' : "",
            s = e.find("img"), a = "src", l = "", u = this._core.settings, c = function (t) {
                '<div class="owl-video-play-icon"></div>', i = u.lazyLoad ? '<div class="owl-video-tn ' + l + '" ' + a + '="' + t + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + t + ')"></div>', e.after(i), e.after('<div class="owl-video-play-icon"></div>')
            };
        if (e.wrap('<div class="owl-video-wrapper"' + r + "></div>"), this._core.settings.lazyLoad && (a = "data-src", l = "owl-lazy"), s.length) return c(s.attr(a)), s.remove(), !1;
        "youtube" === n.type ? (o = "//img.youtube.com/vi/" + n.id + "/hqdefault.jpg", c(o)) : "vimeo" === n.type ? t.ajax({
            type: "GET",
            url: "//vimeo.com/api/v2/video/" + n.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function (t) {
                o = t[0].thumbnail_large, c(o)
            }
        }) : "vzaar" === n.type && t.ajax({
            type: "GET",
            url: "//vzaar.com/api/videos/" + n.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function (t) {
                o = t.framegrab_url, c(o)
            }
        })
    }, o.prototype.stop = function () {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
    }, o.prototype.play = function (e) {
        var n, i = t(e.target).closest("." + this._core.settings.itemClass), o = this._videos[i.attr("data-video")],
            r = o.width || "100%", s = o.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), i = this._core.items(this._core.relative(i.index())), this._core.reset(i.index()), "youtube" === o.type ? n = '<iframe width="' + r + '" height="' + s + '" src="//www.youtube.com/embed/' + o.id + "?autoplay=1&rel=0&v=" + o.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === o.type ? n = '<iframe src="//player.vimeo.com/video/' + o.id + '?autoplay=1" width="' + r + '" height="' + s + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === o.type && (n = '<iframe frameborder="0"height="' + s + '"width="' + r + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + o.id + '/player?autoplay=true"></iframe>'), t('<div class="owl-video-frame">' + n + "</div>").insertAfter(i.find(".owl-video")), this._playing = i.addClass("owl-video-playing"))
    }, o.prototype.isInFullScreen = function () {
        var e = n.fullscreenElement || n.mozFullScreenElement || n.webkitFullscreenElement;
        return e && t(e).parent().hasClass("owl-video-frame")
    }, o.prototype.destroy = function () {
        var t, e;
        for (t in this._core.$element.off("click.owl.video"), this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Video = o
}(window.Zepto || window.jQuery, window, document), function (t, e, n, i) {
    var o = function (e) {
        this.core = e, this.core.options = t.extend({}, o.Defaults, this.core.options), this.swapping = !0, this.previous = i, this.next = i, this.handlers = {
            "change.owl.carousel": t.proxy(function (t) {
                t.namespace && "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
            }, this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(function (t) {
                t.namespace && (this.swapping = "translated" == t.type)
            }, this), "translate.owl.carousel": t.proxy(function (t) {
                t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    o.Defaults = {animateOut: !1, animateIn: !1}, o.prototype.swap = function () {
        if (1 === this.core.settings.items && t.support.animation && t.support.transition) {
            this.core.speed(0);
            var e, n = t.proxy(this.clear, this), i = this.core.$stage.children().eq(this.previous),
                o = this.core.$stage.children().eq(this.next), r = this.core.settings.animateIn,
                s = this.core.settings.animateOut;
            this.core.current() !== this.previous && (s && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), i.one(t.support.animation.end, n).css({left: e + "px"}).addClass("animated owl-animated-out").addClass(s)), r && o.one(t.support.animation.end, n).addClass("animated owl-animated-in").addClass(r))
        }
    }, o.prototype.clear = function (e) {
        t(e.target).css({left: ""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
    }, o.prototype.destroy = function () {
        var t, e;
        for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Animate = o
}(window.Zepto || window.jQuery, window, document), function (t, e, n, i) {
    var o = function (e) {
        this._core = e, this._timeout = null, this._paused = !1, this._handlers = {
            "changed.owl.carousel": t.proxy(function (t) {
                t.namespace && "settings" === t.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : t.namespace && "position" === t.property.name && this._core.settings.autoplay && this._setAutoPlayInterval()
            }, this), "initialized.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.settings.autoplay && this.play()
            }, this), "play.owl.autoplay": t.proxy(function (t, e, n) {
                t.namespace && this.play(e, n)
            }, this), "stop.owl.autoplay": t.proxy(function (t) {
                t.namespace && this.stop()
            }, this), "mouseover.owl.autoplay": t.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this), "mouseleave.owl.autoplay": t.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
            }, this), "touchstart.owl.core": t.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this), "touchend.owl.core": t.proxy(function () {
                this._core.settings.autoplayHoverPause && this.play()
            }, this)
        }, this._core.$element.on(this._handlers), this._core.options = t.extend({}, o.Defaults, this._core.options)
    };
    o.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }, o.prototype.play = function (t, e) {
        this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval())
    }, o.prototype._getNextTimeout = function (i, o) {
        return this._timeout && e.clearTimeout(this._timeout), e.setTimeout(t.proxy(function () {
            this._paused || this._core.is("busy") || this._core.is("interacting") || n.hidden || this._core.next(o || this._core.settings.autoplaySpeed)
        }, this), i || this._core.settings.autoplayTimeout)
    }, o.prototype._setAutoPlayInterval = function () {
        this._timeout = this._getNextTimeout()
    }, o.prototype.stop = function () {
        this._core.is("rotating") && (e.clearTimeout(this._timeout), this._core.leave("rotating"))
    }, o.prototype.pause = function () {
        this._core.is("rotating") && (this._paused = !0)
    }, o.prototype.destroy = function () {
        var t, e;
        for (t in this.stop(), this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.autoplay = o
}(window.Zepto || window.jQuery, window, document), function (t, e, n, i) {
    "use strict";
    var o = function (e) {
        this._core = e, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": t.proxy(function (e) {
                e.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + t(e.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
            }, this), "added.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop())
            }, this), "remove.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1)
            }, this), "changed.owl.carousel": t.proxy(function (t) {
                t.namespace && "position" == t.property.name && this.draw()
            }, this), "initialized.owl.carousel": t.proxy(function (t) {
                t.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
            }, this), "refreshed.owl.carousel": t.proxy(function (t) {
                t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
            }, this)
        }, this._core.options = t.extend({}, o.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    o.Defaults = {
        nav: !1,
        navText: ["prev", "next"],
        navSpeed: !1,
        navElement: "div",
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotsData: !1,
        dotsSpeed: !1,
        dotsContainer: !1
    }, o.prototype.initialize = function () {
        var e, n = this._core.settings;
        for (e in this._controls.$relative = (n.navContainer ? t(n.navContainer) : t("<div>").addClass(n.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = t("<" + n.navElement + ">").addClass(n.navClass[0]).html(n.navText[0]).prependTo(this._controls.$relative).on("click", t.proxy(function (t) {
            this.prev(n.navSpeed)
        }, this)), this._controls.$next = t("<" + n.navElement + ">").addClass(n.navClass[1]).html(n.navText[1]).appendTo(this._controls.$relative).on("click", t.proxy(function (t) {
            this.next(n.navSpeed)
        }, this)), n.dotsData || (this._templates = [t("<div>").addClass(n.dotClass).append(t("<span>")).prop("outerHTML")]), this._controls.$absolute = (n.dotsContainer ? t(n.dotsContainer) : t("<div>").addClass(n.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", t.proxy(function (e) {
            var i = t(e.target).parent().is(this._controls.$absolute) ? t(e.target).index() : t(e.target).parent().index();
            e.preventDefault(), this.to(i, n.dotsSpeed)
        }, this)), this._overrides) this._core[e] = t.proxy(this[e], this)
    }, o.prototype.destroy = function () {
        var t, e, n, i;
        for (t in this._handlers) this.$element.off(t, this._handlers[t]);
        for (e in this._controls) this._controls[e].remove();
        for (i in this.overides) this._core[i] = this._overrides[i];
        for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
    }, o.prototype.update = function () {
        var t, e, n = this._core.clones().length / 2, i = n + this._core.items().length, o = this._core.maximum(!0),
            r = this._core.settings, s = r.center || r.autoWidth || r.dotsData ? 1 : r.dotsEach || r.items;
        if ("page" !== r.slideBy && (r.slideBy = Math.min(r.slideBy, r.items)), r.dots || "page" == r.slideBy) for (this._pages = [], t = n, e = 0, 0; t < i; t++) {
            if (e >= s || 0 === e) {
                if (this._pages.push({start: Math.min(o, t - n), end: t - n + s - 1}), Math.min(o, t - n) === o) break;
                e = 0, 0
            }
            e += this._core.mergers(this._core.relative(t))
        }
    }, o.prototype.draw = function () {
        var e, n = this._core.settings, i = this._core.items().length <= n.items,
            o = this._core.relative(this._core.current()), r = n.loop || n.rewind;
        this._controls.$relative.toggleClass("disabled", !n.nav || i), n.nav && (this._controls.$previous.toggleClass("disabled", !r && o <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !r && o >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !n.dots || i), n.dots && (e = this._pages.length - this._controls.$absolute.children().length, n.dotsData && 0 !== e ? this._controls.$absolute.html(this._templates.join("")) : e > 0 ? this._controls.$absolute.append(new Array(e + 1).join(this._templates[0])) : e < 0 && this._controls.$absolute.children().slice(e).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(t.inArray(this.current(), this._pages)).addClass("active"))
    }, o.prototype.onTrigger = function (e) {
        var n = this._core.settings;
        e.page = {
            index: t.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: n && (n.center || n.autoWidth || n.dotsData ? 1 : n.dotsEach || n.items)
        }
    }, o.prototype.current = function () {
        var e = this._core.relative(this._core.current());
        return t.grep(this._pages, t.proxy(function (t, n) {
            return t.start <= e && t.end >= e
        }, this)).pop()
    }, o.prototype.getPosition = function (e) {
        var n, i, o = this._core.settings;
        return "page" == o.slideBy ? (n = t.inArray(this.current(), this._pages), i = this._pages.length, e ? ++n : --n, n = this._pages[(n % i + i) % i].start) : (n = this._core.relative(this._core.current()), i = this._core.items().length, e ? n += o.slideBy : n -= o.slideBy), n
    }, o.prototype.next = function (e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e)
    }, o.prototype.prev = function (e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e)
    }, o.prototype.to = function (e, n, i) {
        var o;
        !i && this._pages.length ? (o = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % o + o) % o].start, n)) : t.proxy(this._overrides.to, this._core)(e, n)
    }, t.fn.owlCarousel.Constructor.Plugins.Navigation = o
}(window.Zepto || window.jQuery, window, document), function (t, e, n, i) {
    "use strict";
    var o = function (n) {
        this._core = n, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": t.proxy(function (n) {
                n.namespace && "URLHash" === this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation")
            }, this), "prepared.owl.carousel": t.proxy(function (e) {
                if (e.namespace) {
                    var n = t(e.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                    if (!n) return;
                    this._hashes[n] = e.content
                }
            }, this), "changed.owl.carousel": t.proxy(function (n) {
                if (n.namespace && "position" === n.property.name) {
                    var i = this._core.items(this._core.relative(this._core.current())),
                        o = t.map(this._hashes, function (t, e) {
                            return t === i ? e : null
                        }).join();
                    if (!o || e.location.hash.slice(1) === o) return;
                    e.location.hash = o
                }
            }, this)
        }, this._core.options = t.extend({}, o.Defaults, this._core.options), this.$element.on(this._handlers), t(e).on("hashchange.owl.navigation", t.proxy(function (t) {
            var n = e.location.hash.substring(1), i = this._core.$stage.children(),
                o = this._hashes[n] && i.index(this._hashes[n]);
            void 0 !== o && o !== this._core.current() && this._core.to(this._core.relative(o), !1, !0)
        }, this))
    };
    o.Defaults = {URLhashListener: !1}, o.prototype.destroy = function () {
        var n, i;
        for (n in t(e).off("hashchange.owl.navigation"), this._handlers) this._core.$element.off(n, this._handlers[n]);
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Hash = o
}(window.Zepto || window.jQuery, window, document), function (t, e, n, i) {
    function o(e, n) {
        var o = !1, r = e.charAt(0).toUpperCase() + e.slice(1);
        return t.each((e + " " + a.join(r + " ") + r).split(" "), function (t, e) {
            if (s[e] !== i) return o = !n || e, !1
        }), o
    }

    function r(t) {
        return o(t, !0)
    }

    var s = t("<support>").get(0).style, a = "Webkit Moz O ms".split(" "), l = {
        transition: {
            end: {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd",
                transition: "transitionend"
            }
        },
        animation: {
            end: {
                WebkitAnimation: "webkitAnimationEnd",
                MozAnimation: "animationend",
                OAnimation: "oAnimationEnd",
                animation: "animationend"
            }
        }
    }, u = function () {
        return !!o("transform")
    }, c = function () {
        return !!o("perspective")
    }, h = function () {
        return !!o("animation")
    };
    (function () {
        return !!o("transition")
    })() && (t.support.transition = new String(r("transition")), t.support.transition.end = l.transition.end[t.support.transition]), h() && (t.support.animation = new String(r("animation")), t.support.animation.end = l.animation.end[t.support.animation]), u() && (t.support.transform = new String(r("transform")), t.support.transform3d = c())
}(window.Zepto || window.jQuery, window, document), function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function (t) {
    var e, n, i, o, r, s, a = "Close", l = "BeforeClose", u = "MarkupParse", c = "Open", h = "Change", f = "mfp",
        d = "." + f, p = "mfp-ready", m = "mfp-removing", g = "mfp-prevent-close", v = function () {
        }, y = !!window.jQuery, b = t(window), _ = function (t, n) {
            e.ev.on(f + t + d, n)
        }, w = function (e, n, i, o) {
            var r = document.createElement("div");
            return r.className = "mfp-" + e, i && (r.innerHTML = i), o ? n && n.appendChild(r) : (r = t(r), n && r.appendTo(n)), r
        }, x = function (n, i) {
            e.ev.triggerHandler(f + n, i), e.st.callbacks && (n = n.charAt(0).toLowerCase() + n.slice(1), e.st.callbacks[n] && e.st.callbacks[n].apply(e, t.isArray(i) ? i : [i]))
        }, E = function (n) {
            return n === s && e.currTemplate.closeBtn || (e.currTemplate.closeBtn = t(e.st.closeMarkup.replace("%title%", e.st.tClose)), s = n), e.currTemplate.closeBtn
        }, C = function () {
            t.magnificPopup.instance || ((e = new v).init(), t.magnificPopup.instance = e)
        };
    v.prototype = {
        constructor: v, init: function () {
            var n = navigator.appVersion;
            e.isIE7 = -1 !== n.indexOf("MSIE 7."), e.isIE8 = -1 !== n.indexOf("MSIE 8."), e.isLowIE = e.isIE7 || e.isIE8, e.isAndroid = /android/gi.test(n), e.isIOS = /iphone|ipad|ipod/gi.test(n), e.supportsTransition = function () {
                var t = document.createElement("p").style, e = ["ms", "O", "Moz", "Webkit"];
                if (void 0 !== t.transition) return !0;
                for (; e.length;) if (e.pop() + "Transition" in t) return !0;
                return !1
            }(), e.probablyMobile = e.isAndroid || e.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), i = t(document), e.popupsCache = {}
        }, open: function (n) {
            var o;
            if (!1 === n.isObj) {
                e.items = n.items.toArray(), e.index = 0;
                var s, a = n.items;
                for (o = 0; o < a.length; o++) if ((s = a[o]).parsed && (s = s.el[0]), s === n.el[0]) {
                    e.index = o;
                    break
                }
            } else e.items = t.isArray(n.items) ? n.items : [n.items], e.index = n.index || 0;
            if (!e.isOpen) {
                e.types = [], r = "", n.mainEl && n.mainEl.length ? e.ev = n.mainEl.eq(0) : e.ev = i, n.key ? (e.popupsCache[n.key] || (e.popupsCache[n.key] = {}), e.currTemplate = e.popupsCache[n.key]) : e.currTemplate = {}, e.st = t.extend(!0, {}, t.magnificPopup.defaults, n), e.fixedContentPos = "auto" === e.st.fixedContentPos ? !e.probablyMobile : e.st.fixedContentPos, e.st.modal && (e.st.closeOnContentClick = !1, e.st.closeOnBgClick = !1, e.st.showCloseBtn = !1, e.st.enableEscapeKey = !1), e.bgOverlay || (e.bgOverlay = w("bg").on("click" + d, function () {
                    e.close()
                }), e.wrap = w("wrap").attr("tabindex", -1).on("click" + d, function (t) {
                    e._checkIfClose(t.target) && e.close()
                }), e.container = w("container", e.wrap)), e.contentContainer = w("content"), e.st.preloader && (e.preloader = w("preloader", e.container, e.st.tLoading));
                var l = t.magnificPopup.modules;
                for (o = 0; o < l.length; o++) {
                    var h = l[o];
                    h = h.charAt(0).toUpperCase() + h.slice(1), e["init" + h].call(e)
                }
                x("BeforeOpen"), e.st.showCloseBtn && (e.st.closeBtnInside ? (_(u, function (t, e, n, i) {
                    n.close_replaceWith = E(i.type)
                }), r += " mfp-close-btn-in") : e.wrap.append(E())), e.st.alignTop && (r += " mfp-align-top"), e.fixedContentPos ? e.wrap.css({
                    overflow: e.st.overflowY,
                    overflowX: "hidden",
                    overflowY: e.st.overflowY
                }) : e.wrap.css({
                    top: b.scrollTop(),
                    position: "absolute"
                }), (!1 === e.st.fixedBgPos || "auto" === e.st.fixedBgPos && !e.fixedContentPos) && e.bgOverlay.css({
                    height: i.height(),
                    position: "absolute"
                }), e.st.enableEscapeKey && i.on("keyup" + d, function (t) {
                    27 === t.keyCode && e.close()
                }), b.on("resize" + d, function () {
                    e.updateSize()
                }), e.st.closeOnContentClick || (r += " mfp-auto-cursor"), r && e.wrap.addClass(r);
                var f = e.wH = b.height(), m = {};
                if (e.fixedContentPos && e._hasScrollBar(f)) {
                    var g = e._getScrollbarSize();
                    g && (m.marginRight = g)
                }
                e.fixedContentPos && (e.isIE7 ? t("body, html").css("overflow", "hidden") : m.overflow = "hidden");
                var v = e.st.mainClass;
                return e.isIE7 && (v += " mfp-ie7"), v && e._addClassToMFP(v), e.updateItemHTML(), x("BuildControls"), t("html").css(m), e.bgOverlay.add(e.wrap).prependTo(e.st.prependTo || t(document.body)), e._lastFocusedEl = document.activeElement, setTimeout(function () {
                    e.content ? (e._addClassToMFP(p), e._setFocus()) : e.bgOverlay.addClass(p), i.on("focusin" + d, e._onFocusIn)
                }, 16), e.isOpen = !0, e.updateSize(f), x(c), n
            }
            e.updateItemHTML()
        }, close: function () {
            e.isOpen && (x(l), e.isOpen = !1, e.st.removalDelay && !e.isLowIE && e.supportsTransition ? (e._addClassToMFP(m), setTimeout(function () {
                e._close()
            }, e.st.removalDelay)) : e._close())
        }, _close: function () {
            x(a);
            var n = m + " " + p + " ";
            if (e.bgOverlay.detach(), e.wrap.detach(), e.container.empty(), e.st.mainClass && (n += e.st.mainClass + " "), e._removeClassFromMFP(n), e.fixedContentPos) {
                var o = {marginRight: ""};
                e.isIE7 ? t("body, html").css("overflow", "") : o.overflow = "", t("html").css(o)
            }
            i.off("keyup.mfp focusin" + d), e.ev.off(d), e.wrap.attr("class", "mfp-wrap").removeAttr("style"), e.bgOverlay.attr("class", "mfp-bg"), e.container.attr("class", "mfp-container"), !e.st.showCloseBtn || e.st.closeBtnInside && !0 !== e.currTemplate[e.currItem.type] || e.currTemplate.closeBtn && e.currTemplate.closeBtn.detach(), e.st.autoFocusLast && e._lastFocusedEl && t(e._lastFocusedEl).focus(), e.currItem = null, e.content = null, e.currTemplate = null, e.prevHeight = 0, x("AfterClose")
        }, updateSize: function (t) {
            if (e.isIOS) {
                var n = document.documentElement.clientWidth / window.innerWidth, i = window.innerHeight * n;
                e.wrap.css("height", i), e.wH = i
            } else e.wH = t || b.height();
            e.fixedContentPos || e.wrap.css("height", e.wH), x("Resize")
        }, updateItemHTML: function () {
            var n = e.items[e.index];
            e.contentContainer.detach(), e.content && e.content.detach(), n.parsed || (n = e.parseEl(e.index));
            var i = n.type;
            if (x("BeforeChange", [e.currItem ? e.currItem.type : "", i]), e.currItem = n, !e.currTemplate[i]) {
                var r = !!e.st[i] && e.st[i].markup;
                x("FirstMarkupParse", r), e.currTemplate[i] = !r || t(r)
            }
            o && o !== n.type && e.container.removeClass("mfp-" + o + "-holder");
            var s = e["get" + i.charAt(0).toUpperCase() + i.slice(1)](n, e.currTemplate[i]);
            e.appendContent(s, i), n.preloaded = !0, x(h, n), o = n.type, e.container.prepend(e.contentContainer), x("AfterChange")
        }, appendContent: function (t, n) {
            e.content = t, t ? e.st.showCloseBtn && e.st.closeBtnInside && !0 === e.currTemplate[n] ? e.content.find(".mfp-close").length || e.content.append(E()) : e.content = t : e.content = "", x("BeforeAppend"), e.container.addClass("mfp-" + n + "-holder"), e.contentContainer.append(e.content)
        }, parseEl: function (n) {
            var i, o = e.items[n];
            if (o.tagName ? o = {el: t(o)} : (i = o.type, o = {data: o, src: o.src}), o.el) {
                for (var r = e.types, s = 0; s < r.length; s++) if (o.el.hasClass("mfp-" + r[s])) {
                    i = r[s];
                    break
                }
                o.src = o.el.attr("data-mfp-src"), o.src || (o.src = o.el.attr("href"))
            }
            return o.type = i || e.st.type || "inline", o.index = n, o.parsed = !0, e.items[n] = o, x("ElementParse", o), e.items[n]
        }, addGroup: function (t, n) {
            var i = function (i) {
                i.mfpEl = this, e._openClick(i, t, n)
            };
            n || (n = {});
            var o = "click.magnificPopup";
            n.mainEl = t, n.items ? (n.isObj = !0, t.off(o).on(o, i)) : (n.isObj = !1, n.delegate ? t.off(o).on(o, n.delegate, i) : (n.items = t, t.off(o).on(o, i)))
        }, _openClick: function (n, i, o) {
            if ((void 0 !== o.midClick ? o.midClick : t.magnificPopup.defaults.midClick) || !(2 === n.which || n.ctrlKey || n.metaKey || n.altKey || n.shiftKey)) {
                var r = void 0 !== o.disableOn ? o.disableOn : t.magnificPopup.defaults.disableOn;
                if (r) if (t.isFunction(r)) {
                    if (!r.call(e)) return !0
                } else if (b.width() < r) return !0;
                n.type && (n.preventDefault(), e.isOpen && n.stopPropagation()), o.el = t(n.mfpEl), o.delegate && (o.items = i.find(o.delegate)), e.open(o)
            }
        }, updateStatus: function (t, i) {
            if (e.preloader) {
                n !== t && e.container.removeClass("mfp-s-" + n), i || "loading" !== t || (i = e.st.tLoading);
                var o = {status: t, text: i};
                x("UpdateStatus", o), t = o.status, i = o.text, e.preloader.html(i), e.preloader.find("a").on("click", function (t) {
                    t.stopImmediatePropagation()
                }), e.container.addClass("mfp-s-" + t), n = t
            }
        }, _checkIfClose: function (n) {
            if (!t(n).hasClass(g)) {
                var i = e.st.closeOnContentClick, o = e.st.closeOnBgClick;
                if (i && o) return !0;
                if (!e.content || t(n).hasClass("mfp-close") || e.preloader && n === e.preloader[0]) return !0;
                if (n === e.content[0] || t.contains(e.content[0], n)) {
                    if (i) return !0
                } else if (o && t.contains(document, n)) return !0;
                return !1
            }
        }, _addClassToMFP: function (t) {
            e.bgOverlay.addClass(t), e.wrap.addClass(t)
        }, _removeClassFromMFP: function (t) {
            this.bgOverlay.removeClass(t), e.wrap.removeClass(t)
        }, _hasScrollBar: function (t) {
            return (e.isIE7 ? i.height() : document.body.scrollHeight) > (t || b.height())
        }, _setFocus: function () {
            (e.st.focus ? e.content.find(e.st.focus).eq(0) : e.wrap).focus()
        }, _onFocusIn: function (n) {
            return n.target === e.wrap[0] || t.contains(e.wrap[0], n.target) ? void 0 : (e._setFocus(), !1)
        }, _parseMarkup: function (e, n, i) {
            var o;
            i.data && (n = t.extend(i.data, n)), x(u, [e, n, i]), t.each(n, function (t, n) {
                if (void 0 === n || !1 === n) return !0;
                if ((o = t.split("_")).length > 1) {
                    var i = e.find(d + "-" + o[0]);
                    if (i.length > 0) {
                        var r = o[1];
                        "replaceWith" === r ? i[0] !== n[0] && i.replaceWith(n) : "img" === r ? i.is("img") ? i.attr("src", n) : i.replaceWith('<img src="' + n + '" class="' + i.attr("class") + '" />') : i.attr(o[1], n)
                    }
                } else e.find(d + "-" + t).html(n)
            })
        }, _getScrollbarSize: function () {
            if (void 0 === e.scrollbarSize) {
                var t = document.createElement("div");
                t.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(t), e.scrollbarSize = t.offsetWidth - t.clientWidth, document.body.removeChild(t)
            }
            return e.scrollbarSize
        }
    }, t.magnificPopup = {
        instance: null,
        proto: v.prototype,
        modules: [],
        open: function (e, n) {
            return C(), (e = e ? t.extend(!0, {}, e) : {}).isObj = !0, e.index = n || 0, this.instance.open(e)
        },
        close: function () {
            return t.magnificPopup.instance && t.magnificPopup.instance.close()
        },
        registerModule: function (e, n) {
            n.options && (t.magnificPopup.defaults[e] = n.options), t.extend(this.proto, n.proto), this.modules.push(e)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading...",
            autoFocusLast: !0
        }
    }, t.fn.magnificPopup = function (n) {
        C();
        var i = t(this);
        if ("string" == typeof n) if ("open" === n) {
            var o, r = y ? i.data("magnificPopup") : i[0].magnificPopup, s = parseInt(arguments[1], 10) || 0;
            r.items ? o = r.items[s] : (o = i, r.delegate && (o = o.find(r.delegate)), o = o.eq(s)), e._openClick({mfpEl: o}, i, r)
        } else e.isOpen && e[n].apply(e, Array.prototype.slice.call(arguments, 1)); else n = t.extend(!0, {}, n), y ? i.data("magnificPopup", n) : i[0].magnificPopup = n, e.addGroup(i, n);
        return i
    };
    var T, S, I, A = "inline", D = function () {
        I && (S.after(I.addClass(T)).detach(), I = null)
    };
    t.magnificPopup.registerModule(A, {
        options: {hiddenClass: "hide", markup: "", tNotFound: "Content not found"},
        proto: {
            initInline: function () {
                e.types.push(A), _(a + "." + A, function () {
                    D()
                })
            }, getInline: function (n, i) {
                if (D(), n.src) {
                    var o = e.st.inline, r = t(n.src);
                    if (r.length) {
                        var s = r[0].parentNode;
                        s && s.tagName && (S || (T = o.hiddenClass, S = w(T), T = "mfp-" + T), I = r.after(S).detach().removeClass(T)), e.updateStatus("ready")
                    } else e.updateStatus("error", o.tNotFound), r = t("<div>");
                    return n.inlineElement = r, r
                }
                return e.updateStatus("ready"), e._parseMarkup(i, {}, n), i
            }
        }
    });
    var k, O = "ajax", j = function () {
        k && t(document.body).removeClass(k)
    }, L = function () {
        j(), e.req && e.req.abort()
    };
    t.magnificPopup.registerModule(O, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        }, proto: {
            initAjax: function () {
                e.types.push(O), k = e.st.ajax.cursor, _(a + "." + O, L), _("BeforeChange." + O, L)
            }, getAjax: function (n) {
                k && t(document.body).addClass(k), e.updateStatus("loading");
                var i = t.extend({
                    url: n.src, success: function (i, o, r) {
                        var s = {data: i, xhr: r};
                        x("ParseAjax", s), e.appendContent(t(s.data), O), n.finished = !0, j(), e._setFocus(), setTimeout(function () {
                            e.wrap.addClass(p)
                        }, 16), e.updateStatus("ready"), x("AjaxContentAdded")
                    }, error: function () {
                        j(), n.finished = n.loadError = !0, e.updateStatus("error", e.st.ajax.tError.replace("%url%", n.src))
                    }
                }, e.st.ajax.settings);
                return e.req = t.ajax(i), ""
            }
        }
    });
    var N, P = function (n) {
        if (n.data && void 0 !== n.data.title) return n.data.title;
        var i = e.st.image.titleSrc;
        if (i) {
            if (t.isFunction(i)) return i.call(e, n);
            if (n.el) return n.el.attr(i) || ""
        }
        return ""
    };
    t.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        }, proto: {
            initImage: function () {
                var n = e.st.image, i = ".image";
                e.types.push("image"), _(c + i, function () {
                    "image" === e.currItem.type && n.cursor && t(document.body).addClass(n.cursor)
                }), _(a + i, function () {
                    n.cursor && t(document.body).removeClass(n.cursor), b.off("resize" + d)
                }), _("Resize" + i, e.resizeImage), e.isLowIE && _("AfterChange", e.resizeImage)
            }, resizeImage: function () {
                var t = e.currItem;
                if (t && t.img && e.st.image.verticalFit) {
                    var n = 0;
                    e.isLowIE && (n = parseInt(t.img.css("padding-top"), 10) + parseInt(t.img.css("padding-bottom"), 10)), t.img.css("max-height", e.wH - n)
                }
            }, _onImageHasSize: function (t) {
                t.img && (t.hasSize = !0, N && clearInterval(N), t.isCheckingImgSize = !1, x("ImageHasSize", t), t.imgHidden && (e.content && e.content.removeClass("mfp-loading"), t.imgHidden = !1))
            }, findImageSize: function (t) {
                var n = 0, i = t.img[0], o = function (r) {
                    N && clearInterval(N), N = setInterval(function () {
                        return i.naturalWidth > 0 ? void e._onImageHasSize(t) : (n > 200 && clearInterval(N), void (3 === ++n ? o(10) : 40 === n ? o(50) : 100 === n && o(500)))
                    }, r)
                };
                o(1)
            }, getImage: function (n, i) {
                var o = 0, r = function () {
                    n && (n.img[0].complete ? (n.img.off(".mfploader"), n === e.currItem && (e._onImageHasSize(n), e.updateStatus("ready")), n.hasSize = !0, n.loaded = !0, x("ImageLoadComplete")) : 200 > ++o ? setTimeout(r, 100) : s())
                }, s = function () {
                    n && (n.img.off(".mfploader"), n === e.currItem && (e._onImageHasSize(n), e.updateStatus("error", a.tError.replace("%url%", n.src))), n.hasSize = !0, n.loaded = !0, n.loadError = !0)
                }, a = e.st.image, l = i.find(".mfp-img");
                if (l.length) {
                    var u = document.createElement("img");
                    u.className = "mfp-img", n.el && n.el.find("img").length && (u.alt = n.el.find("img").attr("alt")), n.img = t(u).on("load.mfploader", r).on("error.mfploader", s), u.src = n.src, l.is("img") && (n.img = n.img.clone()), (u = n.img[0]).naturalWidth > 0 ? n.hasSize = !0 : u.width || (n.hasSize = !1)
                }
                return e._parseMarkup(i, {
                    title: P(n),
                    img_replaceWith: n.img
                }, n), e.resizeImage(), n.hasSize ? (N && clearInterval(N), n.loadError ? (i.addClass("mfp-loading"), e.updateStatus("error", a.tError.replace("%url%", n.src))) : (i.removeClass("mfp-loading"), e.updateStatus("ready")), i) : (e.updateStatus("loading"), n.loading = !0, n.hasSize || (n.imgHidden = !0, i.addClass("mfp-loading"), e.findImageSize(n)), i)
            }
        }
    });
    var M;
    t.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1, easing: "ease-in-out", duration: 300, opener: function (t) {
                return t.is("img") ? t : t.find("img")
            }
        }, proto: {
            initZoom: function () {
                var t, n = e.st.zoom, i = ".zoom";
                if (n.enabled && e.supportsTransition) {
                    var o, r, s = n.duration, u = function (t) {
                        var e = t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                            i = "all " + n.duration / 1e3 + "s " + n.easing, o = {
                                position: "fixed",
                                zIndex: 9999,
                                left: 0,
                                top: 0,
                                "-webkit-backface-visibility": "hidden"
                            }, r = "transition";
                        return o["-webkit-" + r] = o["-moz-" + r] = o["-o-" + r] = o[r] = i, e.css(o), e
                    }, c = function () {
                        e.content.css("visibility", "visible")
                    };
                    _("BuildControls" + i, function () {
                        if (e._allowZoom()) {
                            if (clearTimeout(o), e.content.css("visibility", "hidden"), !(t = e._getItemToZoom())) return void c();
                            (r = u(t)).css(e._getOffset()), e.wrap.append(r), o = setTimeout(function () {
                                r.css(e._getOffset(!0)), o = setTimeout(function () {
                                    c(), setTimeout(function () {
                                        r.remove(), t = r = null, x("ZoomAnimationEnded")
                                    }, 16)
                                }, s)
                            }, 16)
                        }
                    }), _(l + i, function () {
                        if (e._allowZoom()) {
                            if (clearTimeout(o), e.st.removalDelay = s, !t) {
                                if (!(t = e._getItemToZoom())) return;
                                r = u(t)
                            }
                            r.css(e._getOffset(!0)), e.wrap.append(r), e.content.css("visibility", "hidden"), setTimeout(function () {
                                r.css(e._getOffset())
                            }, 16)
                        }
                    }), _(a + i, function () {
                        e._allowZoom() && (c(), r && r.remove(), t = null)
                    })
                }
            }, _allowZoom: function () {
                return "image" === e.currItem.type
            }, _getItemToZoom: function () {
                return !!e.currItem.hasSize && e.currItem.img
            }, _getOffset: function (n) {
                var i, o = (i = n ? e.currItem.img : e.st.zoom.opener(e.currItem.el || e.currItem)).offset(),
                    r = parseInt(i.css("padding-top"), 10), s = parseInt(i.css("padding-bottom"), 10);
                o.top -= t(window).scrollTop() - r;
                var a = {width: i.width(), height: (y ? i.innerHeight() : i[0].offsetHeight) - s - r};
                return void 0 === M && (M = void 0 !== document.createElement("p").style.MozTransform), M ? a["-moz-transform"] = a.transform = "translate(" + o.left + "px," + o.top + "px)" : (a.left = o.left, a.top = o.top), a
            }
        }
    });
    var R = "iframe", z = function (t) {
        if (e.currTemplate[R]) {
            var n = e.currTemplate[R].find("iframe");
            n.length && (t || (n[0].src = "//about:blank"), e.isIE8 && n.css("display", t ? "block" : "none"))
        }
    };
    t.magnificPopup.registerModule(R, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1"},
                vimeo: {index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1"},
                gmaps: {index: "//maps.google.", src: "%id%&output=embed"}
            }
        }, proto: {
            initIframe: function () {
                e.types.push(R), _("BeforeChange", function (t, e, n) {
                    e !== n && (e === R ? z() : n === R && z(!0))
                }), _(a + "." + R, function () {
                    z()
                })
            }, getIframe: function (n, i) {
                var o = n.src, r = e.st.iframe;
                t.each(r.patterns, function () {
                    return o.indexOf(this.index) > -1 ? (this.id && (o = "string" == typeof this.id ? o.substr(o.lastIndexOf(this.id) + this.id.length, o.length) : this.id.call(this, o)), o = this.src.replace("%id%", o), !1) : void 0
                });
                var s = {};
                return r.srcAction && (s[r.srcAction] = o), e._parseMarkup(i, s, n), e.updateStatus("ready"), i
            }
        }
    });
    var H = function (t) {
        var n = e.items.length;
        return t > n - 1 ? t - n : 0 > t ? n + t : t
    }, q = function (t, e, n) {
        return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, n)
    };
    t.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        }, proto: {
            initGallery: function () {
                var n = e.st.gallery, o = ".mfp-gallery", s = Boolean(t.fn.mfpFastClick);
                return e.direction = !0, !(!n || !n.enabled) && (r += " mfp-gallery", _(c + o, function () {
                    n.navigateByImgClick && e.wrap.on("click" + o, ".mfp-img", function () {
                        return e.items.length > 1 ? (e.next(), !1) : void 0
                    }), i.on("keydown" + o, function (t) {
                        37 === t.keyCode ? e.prev() : 39 === t.keyCode && e.next()
                    })
                }), _("UpdateStatus" + o, function (t, n) {
                    n.text && (n.text = q(n.text, e.currItem.index, e.items.length))
                }), _(u + o, function (t, i, o, r) {
                    var s = e.items.length;
                    o.counter = s > 1 ? q(n.tCounter, r.index, s) : ""
                }), _("BuildControls" + o, function () {
                    if (e.items.length > 1 && n.arrows && !e.arrowLeft) {
                        var i = n.arrowMarkup,
                            o = e.arrowLeft = t(i.replace(/%title%/gi, n.tPrev).replace(/%dir%/gi, "left")).addClass(g),
                            r = e.arrowRight = t(i.replace(/%title%/gi, n.tNext).replace(/%dir%/gi, "right")).addClass(g),
                            a = s ? "mfpFastClick" : "click";
                        o[a](function () {
                            e.prev()
                        }), r[a](function () {
                            e.next()
                        }), e.isIE7 && (w("b", o[0], !1, !0), w("a", o[0], !1, !0), w("b", r[0], !1, !0), w("a", r[0], !1, !0)), e.container.append(o.add(r))
                    }
                }), _(h + o, function () {
                    e._preloadTimeout && clearTimeout(e._preloadTimeout), e._preloadTimeout = setTimeout(function () {
                        e.preloadNearbyImages(), e._preloadTimeout = null
                    }, 16)
                }), void _(a + o, function () {
                    i.off(o), e.wrap.off("click" + o), e.arrowLeft && s && e.arrowLeft.add(e.arrowRight).destroyMfpFastClick(), e.arrowRight = e.arrowLeft = null
                }))
            }, next: function () {
                e.direction = !0, e.index = H(e.index + 1), e.updateItemHTML()
            }, prev: function () {
                e.direction = !1, e.index = H(e.index - 1), e.updateItemHTML()
            }, goTo: function (t) {
                e.direction = t >= e.index, e.index = t, e.updateItemHTML()
            }, preloadNearbyImages: function () {
                var t, n = e.st.gallery.preload, i = Math.min(n[0], e.items.length), o = Math.min(n[1], e.items.length);
                for (t = 1; t <= (e.direction ? o : i); t++) e._preloadItem(e.index + t);
                for (t = 1; t <= (e.direction ? i : o); t++) e._preloadItem(e.index - t)
            }, _preloadItem: function (n) {
                if (n = H(n), !e.items[n].preloaded) {
                    var i = e.items[n];
                    i.parsed || (i = e.parseEl(n)), x("LazyLoad", i), "image" === i.type && (i.img = t('<img class="mfp-img" />').on("load.mfploader", function () {
                        i.hasSize = !0
                    }).on("error.mfploader", function () {
                        i.hasSize = !0, i.loadError = !0, x("LazyLoadError", i)
                    }).attr("src", i.src)), i.preloaded = !0
                }
            }
        }
    });
    var $ = "retina";
    t.magnificPopup.registerModule($, {
        options: {
            replaceSrc: function (t) {
                return t.src.replace(/\.\w+$/, function (t) {
                    return "@2x" + t
                })
            }, ratio: 1
        }, proto: {
            initRetina: function () {
                if (window.devicePixelRatio > 1) {
                    var t = e.st.retina, n = t.ratio;
                    (n = isNaN(n) ? n() : n) > 1 && (_("ImageHasSize." + $, function (t, e) {
                        e.img.css({"max-width": e.img[0].naturalWidth / n, width: "100%"})
                    }), _("ElementParse." + $, function (e, i) {
                        i.src = t.replaceSrc(i, n)
                    }))
                }
            }
        }
    }), function () {
        var e = "ontouchstart" in window, n = function () {
            b.off("touchmove" + i + " touchend" + i)
        }, i = ".mfpFastClick";
        t.fn.mfpFastClick = function (o) {
            return t(this).each(function () {
                var r, s, a, l, u, c, h, f = t(this);
                e && f.on("touchstart" + i, function (t) {
                    u = !1, h = 1, c = t.originalEvent ? t.originalEvent.touches[0] : t.touches[0], a = c.clientX, l = c.clientY, b.on("touchmove" + i, function (t) {
                        c = t.originalEvent ? t.originalEvent.touches : t.touches, h = c.length, c = c[0], (Math.abs(c.clientX - a) > 10 || Math.abs(c.clientY - l) > 10) && (u = !0, n())
                    }).on("touchend" + i, function (t) {
                        n(), u || h > 1 || (r = !0, t.preventDefault(), clearTimeout(s), s = setTimeout(function () {
                            r = !1
                        }, 1e3), o())
                    })
                });
                f.on("click" + i, function () {
                    r || o()
                })
            })
        }, t.fn.destroyMfpFastClick = function () {
            t(this).off("touchstart" + i + " click" + i), e && b.off("touchmove" + i + " touchend" + i)
        }
    }(), C()
}), function (t) {
    var e = {};

    function n(i) {
        if (e[i]) return e[i].exports;
        var o = e[i] = {i: i, l: !1, exports: {}};
        return t[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }

    n.m = t, n.c = e, n.d = function (t, e, i) {
        n.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: i})
    }, n.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
    }, n.t = function (t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t) for (var o in t) n.d(i, o, function (e) {
            return t[e]
        }.bind(null, o));
        return i
    }, n.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 11)
}([, , function (t, e, n) {
    "use strict";
    t.exports = function (t) {
        "complete" === document.readyState || "interactive" === document.readyState ? t.call() : document.attachEvent ? document.attachEvent("onreadystatechange", function () {
            "interactive" === document.readyState && t.call()
        }) : document.addEventListener && document.addEventListener("DOMContentLoaded", t)
    }
}, , function (t, e, n) {
    "use strict";
    (function (e) {
        var n;
        n = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {}, t.exports = n
    }).call(this, n(5))
}, function (t, e, n) {
    "use strict";
    var i, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
    } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    };
    i = function () {
        return this
    }();
    try {
        i = i || Function("return this")() || (0, eval)("this")
    } catch (t) {
        "object" === ("undefined" == typeof window ? "undefined" : o(window)) && (i = window)
    }
    t.exports = i
}, , , , , , function (t, e, n) {
    t.exports = n(12)
}, function (t, e, n) {
    "use strict";
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
    } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, o = a(n(2)), r = n(4), s = a(n(13));

    function a(t) {
        return t && t.__esModule ? t : {default: t}
    }

    var l = r.window.jarallax;
    if (r.window.jarallax = s.default, r.window.jarallax.noConflict = function () {
        return r.window.jarallax = l, this
    }, void 0 !== r.jQuery) {
        var u = function () {
            var t = arguments || [];
            Array.prototype.unshift.call(t, this);
            var e = s.default.apply(r.window, t);
            return "object" !== (void 0 === e ? "undefined" : i(e)) ? e : this
        };
        u.constructor = s.default.constructor;
        var c = r.jQuery.fn.jarallax;
        r.jQuery.fn.jarallax = u, r.jQuery.fn.jarallax.noConflict = function () {
            return r.jQuery.fn.jarallax = c, this
        }
    }
    (0, o.default)(function () {
        (0, s.default)(document.querySelectorAll("[data-jarallax]"))
    })
}, function (t, e, n) {
    "use strict";
    (function (t) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var i = function (t, e) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return function (t, e) {
                var n = [], i = !0, o = !1, r = void 0;
                try {
                    for (var s, a = t[Symbol.iterator](); !(i = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); i = !0) ;
                } catch (t) {
                    o = !0, r = t
                } finally {
                    try {
                        !i && a.return && a.return()
                    } finally {
                        if (o) throw r
                    }
                }
                return n
            }(t, e);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }, o = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }

            return function (e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(), r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, s = u(n(2)), a = u(n(14)), l = n(4);

        function u(t) {
            return t && t.__esModule ? t : {default: t}
        }

        var c = -1 < navigator.userAgent.indexOf("MSIE ") || -1 < navigator.userAgent.indexOf("Trident/") || -1 < navigator.userAgent.indexOf("Edge/"),
            h = function () {
                for (var t = "transform WebkitTransform MozTransform".split(" "), e = document.createElement("div"), n = 0; n < t.length; n++) if (e && void 0 !== e.style[t[n]]) return t[n];
                return !1
            }(), f = void 0, d = void 0, p = void 0, m = !1, g = !1;

        function v(t) {
            f = l.window.innerWidth || document.documentElement.clientWidth, d = l.window.innerHeight || document.documentElement.clientHeight, "object" !== (void 0 === t ? "undefined" : r(t)) || "load" !== t.type && "dom-loaded" !== t.type || (m = !0)
        }

        v(), l.window.addEventListener("resize", v), l.window.addEventListener("orientationchange", v), l.window.addEventListener("load", v), (0, s.default)(function () {
            v({type: "dom-loaded"})
        });
        var y = [], b = !1;

        function _() {
            if (y.length) {
                p = void 0 !== l.window.pageYOffset ? l.window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
                var t = m || !b || b.width !== f || b.height !== d, e = g || t || !b || b.y !== p;
                g = m = !1, (t || e) && (y.forEach(function (n) {
                    t && n.onResize(), e && n.onScroll()
                }), b = {width: f, height: d, y: p}), (0, a.default)(_)
            }
        }

        var w = !!t.ResizeObserver && new t.ResizeObserver(function (t) {
            t && t.length && (0, a.default)(function () {
                t.forEach(function (t) {
                    t.target && t.target.jarallax && (m || t.target.jarallax.onResize(), g = !0)
                })
            })
        }), x = 0, E = function () {
            function t(e, n) {
                !function (e, n) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this);
                var o = this;
                o.instanceID = x++, o.$item = e, o.defaults = {
                    type: "scroll",
                    speed: .5,
                    imgSrc: null,
                    imgElement: ".jarallax-img",
                    imgSize: "cover",
                    imgPosition: "50% 50%",
                    imgRepeat: "no-repeat",
                    keepImg: !1,
                    elementInViewport: null,
                    zIndex: -100,
                    disableParallax: !1,
                    disableVideo: !1,
                    automaticResize: !0,
                    videoSrc: null,
                    videoStartTime: 0,
                    videoEndTime: 0,
                    videoVolume: 0,
                    videoLoop: !0,
                    videoPlayOnlyVisible: !0,
                    onScroll: null,
                    onInit: null,
                    onDestroy: null,
                    onCoverImage: null
                };
                var s = o.$item.getAttribute("data-jarallax"), a = JSON.parse(s || "{}");
                s && console.warn("Detected usage of deprecated data-jarallax JSON options, you should use pure data-attribute options. See info here - https://github.com/nk-o/jarallax/issues/53");
                var l = o.$item.dataset || {}, u = {};
                if (Object.keys(l).forEach(function (t) {
                    var e = t.substr(0, 1).toLowerCase() + t.substr(1);
                    e && void 0 !== o.defaults[e] && (u[e] = l[t])
                }), o.options = o.extend({}, o.defaults, a, u, n), o.pureOptions = o.extend({}, o.options), Object.keys(o.options).forEach(function (t) {
                    "true" === o.options[t] ? o.options[t] = !0 : "false" === o.options[t] && (o.options[t] = !1)
                }), o.options.speed = Math.min(2, Math.max(-1, parseFloat(o.options.speed))), (o.options.noAndroid || o.options.noIos) && (console.warn("Detected usage of deprecated noAndroid or noIos options, you should use disableParallax option. See info here - https://github.com/nk-o/jarallax/#disable-on-mobile-devices"), o.options.disableParallax || (o.options.noIos && o.options.noAndroid ? o.options.disableParallax = /iPad|iPhone|iPod|Android/ : o.options.noIos ? o.options.disableParallax = /iPad|iPhone|iPod/ : o.options.noAndroid && (o.options.disableParallax = /Android/))), "string" == typeof o.options.disableParallax && (o.options.disableParallax = new RegExp(o.options.disableParallax)), o.options.disableParallax instanceof RegExp) {
                    var c = o.options.disableParallax;
                    o.options.disableParallax = function () {
                        return c.test(navigator.userAgent)
                    }
                }
                if ("function" != typeof o.options.disableParallax && (o.options.disableParallax = function () {
                    return !1
                }), "string" == typeof o.options.disableVideo && (o.options.disableVideo = new RegExp(o.options.disableVideo)), o.options.disableVideo instanceof RegExp) {
                    var h = o.options.disableVideo;
                    o.options.disableVideo = function () {
                        return h.test(navigator.userAgent)
                    }
                }
                "function" != typeof o.options.disableVideo && (o.options.disableVideo = function () {
                    return !1
                });
                var f = o.options.elementInViewport;
                f && "object" === (void 0 === f ? "undefined" : r(f)) && void 0 !== f.length && (f = i(f, 1)[0]), f instanceof Element || (f = null), o.options.elementInViewport = f, o.image = {
                    src: o.options.imgSrc || null,
                    $container: null,
                    useImgTag: !1,
                    position: /iPad|iPhone|iPod|Android/.test(navigator.userAgent) ? "absolute" : "fixed"
                }, o.initImg() && o.canInitParallax() && o.init()
            }

            return o(t, [{
                key: "css", value: function (t, e) {
                    return "string" == typeof e ? l.window.getComputedStyle(t).getPropertyValue(e) : (e.transform && h && (e[h] = e.transform), Object.keys(e).forEach(function (n) {
                        t.style[n] = e[n]
                    }), t)
                }
            }, {
                key: "extend", value: function (t) {
                    var e = arguments;
                    return t = t || {}, Object.keys(arguments).forEach(function (n) {
                        e[n] && Object.keys(e[n]).forEach(function (i) {
                            t[i] = e[n][i]
                        })
                    }), t
                }
            }, {
                key: "getWindowData", value: function () {
                    return {width: f, height: d, y: p}
                }
            }, {
                key: "initImg", value: function () {
                    var t = this, e = t.options.imgElement;
                    return e && "string" == typeof e && (e = t.$item.querySelector(e)), e instanceof Element || (e = null), e && (t.options.keepImg ? t.image.$item = e.cloneNode(!0) : (t.image.$item = e, t.image.$itemParent = e.parentNode), t.image.useImgTag = !0), !(!t.image.$item && (null === t.image.src && (t.image.src = t.css(t.$item, "background-image").replace(/^url\(['"]?/g, "").replace(/['"]?\)$/g, "")), !t.image.src || "none" === t.image.src))
                }
            }, {
                key: "canInitParallax", value: function () {
                    return h && !this.options.disableParallax()
                }
            }, {
                key: "init", value: function () {
                    var t = this, e = {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        overflow: "hidden",
                        pointerEvents: "none"
                    }, n = {};
                    if (!t.options.keepImg) {
                        var i = t.$item.getAttribute("style");
                        if (i && t.$item.setAttribute("data-jarallax-original-styles", i), t.image.useImgTag) {
                            var o = t.image.$item.getAttribute("style");
                            o && t.image.$item.setAttribute("data-jarallax-original-styles", o)
                        }
                    }
                    if ("static" === t.css(t.$item, "position") && t.css(t.$item, {position: "relative"}), "auto" === t.css(t.$item, "z-index") && t.css(t.$item, {zIndex: 0}), t.image.$container = document.createElement("div"), t.css(t.image.$container, e), t.css(t.image.$container, {"z-index": t.options.zIndex}), c && t.css(t.image.$container, {opacity: .9999}), t.image.$container.setAttribute("id", "jarallax-container-" + t.instanceID), t.$item.appendChild(t.image.$container), t.image.useImgTag ? n = t.extend({
                        "object-fit": t.options.imgSize,
                        "object-position": t.options.imgPosition,
                        "font-family": "object-fit: " + t.options.imgSize + "; object-position: " + t.options.imgPosition + ";",
                        "max-width": "none"
                    }, e, n) : (t.image.$item = document.createElement("div"), t.image.src && (n = t.extend({
                        "background-position": t.options.imgPosition,
                        "background-size": t.options.imgSize,
                        "background-repeat": t.options.imgRepeat,
                        "background-image": 'url("' + t.image.src + '")'
                    }, e, n))), "opacity" !== t.options.type && "scale" !== t.options.type && "scale-opacity" !== t.options.type && 1 !== t.options.speed || (t.image.position = "absolute"), "fixed" === t.image.position) for (var r = 0, s = t.$item; null !== s && s !== document && 0 === r;) {
                        var a = t.css(s, "-webkit-transform") || t.css(s, "-moz-transform") || t.css(s, "transform");
                        a && "none" !== a && (r = 1, t.image.position = "absolute"), s = s.parentNode
                    }
                    n.position = t.image.position, t.css(t.image.$item, n), t.image.$container.appendChild(t.image.$item), t.onResize(), t.onScroll(!0), t.options.automaticResize && w && w.observe(t.$item), t.options.onInit && t.options.onInit.call(t), "none" !== t.css(t.$item, "background-image") && t.css(t.$item, {"background-image": "none"}), t.addToParallaxList()
                }
            }, {
                key: "addToParallaxList", value: function () {
                    y.push(this), 1 === y.length && _()
                }
            }, {
                key: "removeFromParallaxList", value: function () {
                    var t = this;
                    y.forEach(function (e, n) {
                        e.instanceID === t.instanceID && y.splice(n, 1)
                    })
                }
            }, {
                key: "destroy", value: function () {
                    var t = this;
                    t.removeFromParallaxList();
                    var e = t.$item.getAttribute("data-jarallax-original-styles");
                    if (t.$item.removeAttribute("data-jarallax-original-styles"), e ? t.$item.setAttribute("style", e) : t.$item.removeAttribute("style"), t.image.useImgTag) {
                        var n = t.image.$item.getAttribute("data-jarallax-original-styles");
                        t.image.$item.removeAttribute("data-jarallax-original-styles"), n ? t.image.$item.setAttribute("style", e) : t.image.$item.removeAttribute("style"), t.image.$itemParent && t.image.$itemParent.appendChild(t.image.$item)
                    }
                    t.$clipStyles && t.$clipStyles.parentNode.removeChild(t.$clipStyles), t.image.$container && t.image.$container.parentNode.removeChild(t.image.$container), t.options.onDestroy && t.options.onDestroy.call(t), delete t.$item.jarallax
                }
            }, {
                key: "clipContainer", value: function () {
                    if ("fixed" === this.image.position) {
                        var t = this, e = t.image.$container.getBoundingClientRect(), n = e.width, i = e.height;
                        t.$clipStyles || (t.$clipStyles = document.createElement("style"), t.$clipStyles.setAttribute("type", "text/css"), t.$clipStyles.setAttribute("id", "jarallax-clip-" + t.instanceID), (document.head || document.getElementsByTagName("head")[0]).appendChild(t.$clipStyles));
                        var o = "#jarallax-container-" + t.instanceID + " {\n           clip: rect(0 " + n + "px " + i + "px 0);\n           clip: rect(0, " + n + "px, " + i + "px, 0);\n        }";
                        t.$clipStyles.styleSheet ? t.$clipStyles.styleSheet.cssText = o : t.$clipStyles.innerHTML = o
                    }
                }
            }, {
                key: "coverImage", value: function () {
                    var t, e = this, n = e.image.$container.getBoundingClientRect(), i = n.height, o = e.options.speed,
                        r = "scroll" === e.options.type || "scroll-opacity" === e.options.type, s = 0, a = i;
                    return r && (o < 0 ? (s = o * Math.max(i, d), d < i && (s -= o * (i - d))) : s = o * (i + d), 1 < o ? a = Math.abs(s - d) : o < 0 ? a = s / o + Math.abs(s) : a += (d - i) * (1 - o), s /= 2), e.parallaxScrollDistance = s, t = r ? (d - a) / 2 : (i - a) / 2, e.css(e.image.$item, {
                        height: a + "px",
                        marginTop: t + "px",
                        left: "fixed" === e.image.position ? n.left + "px" : "0",
                        width: n.width + "px"
                    }), e.options.onCoverImage && e.options.onCoverImage.call(e), {
                        image: {height: a, marginTop: t},
                        container: n
                    }
                }
            }, {
                key: "isVisible", value: function () {
                    return this.isElementInViewport || !1
                }
            }, {
                key: "onScroll", value: function (t) {
                    var e = this, n = e.$item.getBoundingClientRect(), i = n.top, o = n.height, r = {}, s = n;
                    if (e.options.elementInViewport && (s = e.options.elementInViewport.getBoundingClientRect()), e.isElementInViewport = 0 <= s.bottom && 0 <= s.right && s.top <= d && s.left <= f, t || e.isElementInViewport) {
                        var a = Math.max(0, i), l = Math.max(0, o + i), u = Math.max(0, -i), c = Math.max(0, i + o - d),
                            h = Math.max(0, o - (i + o - d)), p = Math.max(0, -i + d - o),
                            m = 1 - 2 * (d - i) / (d + o), g = 1;
                        if (o < d ? g = 1 - (u || c) / o : l <= d ? g = l / d : h <= d && (g = h / d), "opacity" !== e.options.type && "scale-opacity" !== e.options.type && "scroll-opacity" !== e.options.type || (r.transform = "translate3d(0,0,0)", r.opacity = g), "scale" === e.options.type || "scale-opacity" === e.options.type) {
                            var v = 1;
                            e.options.speed < 0 ? v -= e.options.speed * g : v += e.options.speed * (1 - g), r.transform = "scale(" + v + ") translate3d(0,0,0)"
                        }
                        if ("scroll" === e.options.type || "scroll-opacity" === e.options.type) {
                            var y = e.parallaxScrollDistance * m;
                            "absolute" === e.image.position && (y -= i), r.transform = "translate3d(0," + y + "px,0)"
                        }
                        e.css(e.image.$item, r), e.options.onScroll && e.options.onScroll.call(e, {
                            section: n,
                            beforeTop: a,
                            beforeTopEnd: l,
                            afterTop: u,
                            beforeBottom: c,
                            beforeBottomEnd: h,
                            afterBottom: p,
                            visiblePercent: g,
                            fromViewportCenter: m
                        })
                    }
                }
            }, {
                key: "onResize", value: function () {
                    this.coverImage(), this.clipContainer()
                }
            }]), t
        }(), C = function (t) {
            ("object" === ("undefined" == typeof HTMLElement ? "undefined" : r(HTMLElement)) ? t instanceof HTMLElement : t && "object" === (void 0 === t ? "undefined" : r(t)) && null !== t && 1 === t.nodeType && "string" == typeof t.nodeName) && (t = [t]);
            for (var e = arguments[1], n = Array.prototype.slice.call(arguments, 2), i = t.length, o = 0, s = void 0; o < i; o++) if ("object" === (void 0 === e ? "undefined" : r(e)) || void 0 === e ? t[o].jarallax || (t[o].jarallax = new E(t[o], e)) : t[o].jarallax && (s = t[o].jarallax[e].apply(t[o].jarallax, n)), void 0 !== s) return s;
            return t
        };
        C.constructor = E, e.default = C
    }).call(this, n(5))
}, function (t, e, n) {
    "use strict";
    var i = n(4),
        o = i.requestAnimationFrame || i.webkitRequestAnimationFrame || i.mozRequestAnimationFrame || function (t) {
            var e = +new Date, n = Math.max(0, 16 - (e - r)), i = setTimeout(t, n);
            return r = e, i
        }, r = +new Date,
        s = i.cancelAnimationFrame || i.webkitCancelAnimationFrame || i.mozCancelAnimationFrame || clearTimeout;
    Function.prototype.bind && (o = o.bind(i), s = s.bind(i)), (t.exports = o).cancel = s
}]), function (t) {
    var e = {};

    function n(i) {
        if (e[i]) return e[i].exports;
        var o = e[i] = {i: i, l: !1, exports: {}};
        return t[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }

    n.m = t, n.c = e, n.d = function (t, e, i) {
        n.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: i})
    }, n.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
    }, n.t = function (t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t) for (var o in t) n.d(i, o, function (e) {
            return t[e]
        }.bind(null, o));
        return i
    }, n.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 0)
}([function (t, e, n) {
    t.exports = n(1)
}, function (t, e, n) {
    "use strict";
    var i = o(n(2));

    function o(t) {
        return t && t.__esModule ? t : {default: t}
    }

    (0, o(n(3)).default)(), (0, i.default)(function () {
        "undefined" != typeof jarallax && jarallax(document.querySelectorAll("[data-jarallax-element]"))
    })
}, function (t, e, n) {
    "use strict";
    t.exports = function (t) {
        "complete" === document.readyState || "interactive" === document.readyState ? t.call() : document.attachEvent ? document.attachEvent("onreadystatechange", function () {
            "interactive" === document.readyState && t.call()
        }) : document.addEventListener && document.addEventListener("DOMContentLoaded", t)
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = function () {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : o.default.jarallax;
        if (void 0 !== t) {
            var e = t.constructor;
            ["initImg", "canInitParallax", "init", "destroy", "clipContainer", "coverImage", "isVisible", "onScroll", "onResize"].forEach(function (t) {
                var n = e.prototype[t];
                e.prototype[t] = function () {
                    var e = this, i = arguments || [];
                    if ("initImg" === t && null !== e.$item.getAttribute("data-jarallax-element") && (e.options.type = "element", e.pureOptions.speed = e.$item.getAttribute("data-jarallax-element") || e.pureOptions.speed), "element" !== e.options.type) return n.apply(e, i);
                    switch (e.pureOptions.threshold = e.$item.getAttribute("data-threshold") || "", t) {
                        case "init":
                            var o = e.pureOptions.speed.split(" ");
                            e.options.speed = e.pureOptions.speed || 0, e.options.speedY = o[0] ? parseFloat(o[0]) : 0, e.options.speedX = o[1] ? parseFloat(o[1]) : 0;
                            var r = e.pureOptions.threshold.split(" ");
                            e.options.thresholdY = r[0] ? parseFloat(r[0]) : null, e.options.thresholdX = r[1] ? parseFloat(r[1]) : null;
                            break;
                        case "onResize":
                            var s = e.css(e.$item, "transform");
                            e.css(e.$item, {transform: ""});
                            var a = e.$item.getBoundingClientRect();
                            e.itemData = {
                                width: a.width,
                                height: a.height,
                                y: a.top + e.getWindowData().y,
                                x: a.left
                            }, e.css(e.$item, {transform: s});
                            break;
                        case "onScroll":
                            var l = e.getWindowData(),
                                u = (l.y + l.height / 2 - e.itemData.y - e.itemData.height / 2) / (l.height / 2),
                                c = u * e.options.speedY, h = u * e.options.speedX, f = c, d = h;
                            null !== e.options.thresholdY && c > e.options.thresholdY && (f = 0), null !== e.options.thresholdX && h > e.options.thresholdX && (d = 0), e.css(e.$item, {transform: "translate3d(" + d + "px," + f + "px,0)"});
                            break;
                        case "initImg":
                        case "isVisible":
                        case "clipContainer":
                        case "coverImage":
                            return !0
                    }
                    return n.apply(e, i)
                }
            })
        }
    };
    var i, o = (i = n(4)) && i.__esModule ? i : {default: i}
}, function (t, e, n) {
    "use strict";
    (function (e) {
        var n;
        n = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {}, t.exports = n
    }).call(this, n(5))
}, function (t, e, n) {
    "use strict";
    var i, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
    } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    };
    i = function () {
        return this
    }();
    try {
        i = i || Function("return this")() || (0, eval)("this")
    } catch (t) {
        "object" === ("undefined" == typeof window ? "undefined" : o(window)) && (i = window)
    }
    t.exports = i
}]), function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.Popper = e()
}(this, function () {
    "use strict";

    function t(t) {
        return t && "[object Function]" === {}.toString.call(t)
    }

    function e(t, e) {
        if (1 !== t.nodeType) return [];
        var n = t.ownerDocument.defaultView.getComputedStyle(t, null);
        return e ? n[e] : n
    }

    function n(t) {
        return "HTML" === t.nodeName ? t : t.parentNode || t.host
    }

    function i(t) {
        if (!t) return document.body;
        switch (t.nodeName) {
            case "HTML":
            case "BODY":
                return t.ownerDocument.body;
            case "#document":
                return t.body
        }
        var o = e(t), r = o.overflow, s = o.overflowX, a = o.overflowY;
        return /(auto|scroll|overlay)/.test(r + a + s) ? t : i(n(t))
    }

    function o(t) {
        return 11 === t ? Y : 10 === t ? Q : Y || Q
    }

    function r(t) {
        if (!t) return document.documentElement;
        for (var n = o(10) ? document.body : null, i = t.offsetParent || null; i === n && t.nextElementSibling;) i = (t = t.nextElementSibling).offsetParent;
        var s = i && i.nodeName;
        return s && "BODY" !== s && "HTML" !== s ? -1 !== ["TH", "TD", "TABLE"].indexOf(i.nodeName) && "static" === e(i, "position") ? r(i) : i : t ? t.ownerDocument.documentElement : document.documentElement
    }

    function s(t) {
        return null === t.parentNode ? t : s(t.parentNode)
    }

    function a(t, e) {
        if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;
        var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING, i = n ? t : e, o = n ? e : t,
            l = document.createRange();
        l.setStart(i, 0), l.setEnd(o, 0);
        var u = l.commonAncestorContainer;
        if (t !== u && e !== u || i.contains(o)) return function (t) {
            var e = t.nodeName;
            return "BODY" !== e && ("HTML" === e || r(t.firstElementChild) === t)
        }(u) ? u : r(u);
        var c = s(t);
        return c.host ? a(c.host, e) : a(t, s(e).host)
    }

    function l(t) {
        var e = "top" === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
            n = t.nodeName;
        if ("BODY" === n || "HTML" === n) {
            var i = t.ownerDocument.documentElement;
            return (t.ownerDocument.scrollingElement || i)[e]
        }
        return t[e]
    }

    function u(t, e) {
        var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], i = l(e, "top"), o = l(e, "left"),
            r = n ? -1 : 1;
        return t.top += i * r, t.bottom += i * r, t.left += o * r, t.right += o * r, t
    }

    function c(t, e) {
        var n = "x" === e ? "Left" : "Top", i = "Left" == n ? "Right" : "Bottom";
        return parseFloat(t["border" + n + "Width"], 10) + parseFloat(t["border" + i + "Width"], 10)
    }

    function h(t, e, n, i) {
        return $(e["offset" + t], e["scroll" + t], n["client" + t], n["offset" + t], n["scroll" + t], o(10) ? parseInt(n["offset" + t]) + parseInt(i["margin" + ("Height" === t ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === t ? "Bottom" : "Right")]) : 0)
    }

    function f(t) {
        var e = t.body, n = t.documentElement, i = o(10) && getComputedStyle(n);
        return {height: h("Height", e, n, i), width: h("Width", e, n, i)}
    }

    function d(t) {
        return Z({}, t, {right: t.left + t.width, bottom: t.top + t.height})
    }

    function p(t) {
        var n = {};
        try {
            if (o(10)) {
                n = t.getBoundingClientRect();
                var i = l(t, "top"), r = l(t, "left");
                n.top += i, n.left += r, n.bottom += i, n.right += r
            } else n = t.getBoundingClientRect()
        } catch (t) {
        }
        var s = {left: n.left, top: n.top, width: n.right - n.left, height: n.bottom - n.top},
            a = "HTML" === t.nodeName ? f(t.ownerDocument) : {}, u = a.width || t.clientWidth || s.right - s.left,
            h = a.height || t.clientHeight || s.bottom - s.top, p = t.offsetWidth - u, m = t.offsetHeight - h;
        if (p || m) {
            var g = e(t);
            p -= c(g, "x"), m -= c(g, "y"), s.width -= p, s.height -= m
        }
        return d(s)
    }

    function m(t, n) {
        var r = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], s = o(10), a = "HTML" === n.nodeName,
            l = p(t), c = p(n), h = i(t), f = e(n), m = parseFloat(f.borderTopWidth, 10),
            g = parseFloat(f.borderLeftWidth, 10);
        r && a && (c.top = $(c.top, 0), c.left = $(c.left, 0));
        var v = d({top: l.top - c.top - m, left: l.left - c.left - g, width: l.width, height: l.height});
        if (v.marginTop = 0, v.marginLeft = 0, !s && a) {
            var y = parseFloat(f.marginTop, 10), b = parseFloat(f.marginLeft, 10);
            v.top -= m - y, v.bottom -= m - y, v.left -= g - b, v.right -= g - b, v.marginTop = y, v.marginLeft = b
        }
        return (s && !r ? n.contains(h) : n === h && "BODY" !== h.nodeName) && (v = u(v, n)), v
    }

    function g(t) {
        var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], n = t.ownerDocument.documentElement,
            i = m(t, n), o = $(n.clientWidth, window.innerWidth || 0), r = $(n.clientHeight, window.innerHeight || 0),
            s = e ? 0 : l(n), a = e ? 0 : l(n, "left");
        return d({top: s - i.top + i.marginTop, left: a - i.left + i.marginLeft, width: o, height: r})
    }

    function v(t) {
        var i = t.nodeName;
        return "BODY" !== i && "HTML" !== i && ("fixed" === e(t, "position") || v(n(t)))
    }

    function y(t) {
        if (!t || !t.parentElement || o()) return document.documentElement;
        for (var n = t.parentElement; n && "none" === e(n, "transform");) n = n.parentElement;
        return n || document.documentElement
    }

    function b(t, e, o, r) {
        var s = 4 < arguments.length && void 0 !== arguments[4] && arguments[4], l = {top: 0, left: 0},
            u = s ? y(t) : a(t, e);
        if ("viewport" === r) l = g(u, s); else {
            var c;
            "scrollParent" === r ? "BODY" === (c = i(n(e))).nodeName && (c = t.ownerDocument.documentElement) : c = "window" === r ? t.ownerDocument.documentElement : r;
            var h = m(c, u, s);
            if ("HTML" !== c.nodeName || v(u)) l = h; else {
                var d = f(t.ownerDocument), p = d.height, b = d.width;
                l.top += h.top - h.marginTop, l.bottom = p + h.top, l.left += h.left - h.marginLeft, l.right = b + h.left
            }
        }
        var _ = "number" == typeof (o = o || 0);
        return l.left += _ ? o : o.left || 0, l.top += _ ? o : o.top || 0, l.right -= _ ? o : o.right || 0, l.bottom -= _ ? o : o.bottom || 0, l
    }

    function _(t) {
        return t.width * t.height
    }

    function w(t, e, n, i, o) {
        var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === t.indexOf("auto")) return t;
        var s = b(n, i, r, o), a = {
            top: {width: s.width, height: e.top - s.top},
            right: {width: s.right - e.right, height: s.height},
            bottom: {width: s.width, height: s.bottom - e.bottom},
            left: {width: e.left - s.left, height: s.height}
        }, l = Object.keys(a).map(function (t) {
            return Z({key: t}, a[t], {area: _(a[t])})
        }).sort(function (t, e) {
            return e.area - t.area
        }), u = l.filter(function (t) {
            var e = t.width, i = t.height;
            return e >= n.clientWidth && i >= n.clientHeight
        }), c = 0 < u.length ? u[0].key : l[0].key, h = t.split("-")[1];
        return c + (h ? "-" + h : "")
    }

    function x(t, e, n) {
        var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return m(n, i ? y(e) : a(e, n), i)
    }

    function E(t) {
        var e = t.ownerDocument.defaultView.getComputedStyle(t),
            n = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0),
            i = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0);
        return {width: t.offsetWidth + i, height: t.offsetHeight + n}
    }

    function C(t) {
        var e = {left: "right", right: "left", bottom: "top", top: "bottom"};
        return t.replace(/left|right|bottom|top/g, function (t) {
            return e[t]
        })
    }

    function T(t, e, n) {
        n = n.split("-")[0];
        var i = E(t), o = {width: i.width, height: i.height}, r = -1 !== ["right", "left"].indexOf(n),
            s = r ? "top" : "left", a = r ? "left" : "top", l = r ? "height" : "width", u = r ? "width" : "height";
        return o[s] = e[s] + e[l] / 2 - i[l] / 2, o[a] = n === a ? e[a] - i[u] : e[C(a)], o
    }

    function S(t, e) {
        return Array.prototype.find ? t.find(e) : t.filter(e)[0]
    }

    function I(e, n, i) {
        return (void 0 === i ? e : e.slice(0, function (t, e, n) {
            if (Array.prototype.findIndex) return t.findIndex(function (t) {
                return t[e] === n
            });
            var i = S(t, function (t) {
                return t[e] === n
            });
            return t.indexOf(i)
        }(e, "name", i))).forEach(function (e) {
            e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var i = e.function || e.fn;
            e.enabled && t(i) && (n.offsets.popper = d(n.offsets.popper), n.offsets.reference = d(n.offsets.reference), n = i(n, e))
        }), n
    }

    function A(t, e) {
        return t.some(function (t) {
            var n = t.name;
            return t.enabled && n === e
        })
    }

    function D(t) {
        for (var e = [!1, "ms", "Webkit", "Moz", "O"], n = t.charAt(0).toUpperCase() + t.slice(1), i = 0; i < e.length; i++) {
            var o = e[i], r = o ? "" + o + n : t;
            if (void 0 !== document.body.style[r]) return r
        }
        return null
    }

    function k(t) {
        var e = t.ownerDocument;
        return e ? e.defaultView : window
    }

    function O(t, e, n, o) {
        n.updateBound = o, k(t).addEventListener("resize", n.updateBound, {passive: !0});
        var r = i(t);
        return function t(e, n, o, r) {
            var s = "BODY" === e.nodeName, a = s ? e.ownerDocument.defaultView : e;
            a.addEventListener(n, o, {passive: !0}), s || t(i(a.parentNode), n, o, r), r.push(a)
        }(r, "scroll", n.updateBound, n.scrollParents), n.scrollElement = r, n.eventsEnabled = !0, n
    }

    function j() {
        var t, e;
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (t = this.reference, e = this.state, k(t).removeEventListener("resize", e.updateBound), e.scrollParents.forEach(function (t) {
            t.removeEventListener("scroll", e.updateBound)
        }), e.updateBound = null, e.scrollParents = [], e.scrollElement = null, e.eventsEnabled = !1, e))
    }

    function L(t) {
        return "" !== t && !isNaN(parseFloat(t)) && isFinite(t)
    }

    function N(t, e) {
        Object.keys(e).forEach(function (n) {
            var i = "";
            -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && L(e[n]) && (i = "px"), t.style[n] = e[n] + i
        })
    }

    function P(t, e, n) {
        var i = S(t, function (t) {
            return t.name === e
        }), o = !!i && t.some(function (t) {
            return t.name === n && t.enabled && t.order < i.order
        });
        if (!o) {
            var r = "`" + e + "`";
            console.warn("`" + n + "` modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!")
        }
        return o
    }

    function M(t) {
        var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], n = et.indexOf(t),
            i = et.slice(n + 1).concat(et.slice(0, n));
        return e ? i.reverse() : i
    }

    function R(t, e, n, i) {
        var o = [0, 0], r = -1 !== ["right", "left"].indexOf(i), s = t.split(/(\+|\-)/).map(function (t) {
            return t.trim()
        }), a = s.indexOf(S(s, function (t) {
            return -1 !== t.search(/,|\s/)
        }));
        s[a] && -1 === s[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var l = /\s*,\s*|\s+/,
            u = -1 === a ? [s] : [s.slice(0, a).concat([s[a].split(l)[0]]), [s[a].split(l)[1]].concat(s.slice(a + 1))];
        return (u = u.map(function (t, i) {
            var o = (1 === i ? !r : r) ? "height" : "width", s = !1;
            return t.reduce(function (t, e) {
                return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? (t[t.length - 1] = e, s = !0, t) : s ? (t[t.length - 1] += e, s = !1, t) : t.concat(e)
            }, []).map(function (t) {
                return function (t, e, n, i) {
                    var o = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), r = +o[1], s = o[2];
                    if (!r) return t;
                    if (0 === s.indexOf("%")) {
                        var a;
                        switch (s) {
                            case "%p":
                                a = n;
                                break;
                            case "%":
                            case "%r":
                            default:
                                a = i
                        }
                        return d(a)[e] / 100 * r
                    }
                    return "vh" === s || "vw" === s ? ("vh" === s ? $(document.documentElement.clientHeight, window.innerHeight || 0) : $(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * r : r
                }(t, o, e, n)
            })
        })).forEach(function (t, e) {
            t.forEach(function (n, i) {
                L(n) && (o[e] += n * ("-" === t[i - 1] ? -1 : 1))
            })
        }), o
    }

    for (var z = Math.min, H = Math.floor, q = Math.round, $ = Math.max, W = "undefined" != typeof window && "undefined" != typeof document, F = ["Edge", "Trident", "Firefox"], B = 0, U = 0; U < F.length; U += 1) if (W && 0 <= navigator.userAgent.indexOf(F[U])) {
        B = 1;
        break
    }
    var V = W && window.Promise ? function (t) {
            var e = !1;
            return function () {
                e || (e = !0, window.Promise.resolve().then(function () {
                    e = !1, t()
                }))
            }
        } : function (t) {
            var e = !1;
            return function () {
                e || (e = !0, setTimeout(function () {
                    e = !1, t()
                }, B))
            }
        }, Y = W && !(!window.MSInputMethodContext || !document.documentMode), Q = W && /MSIE 10/.test(navigator.userAgent),
        X = function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }, K = function () {
            function t(t, e) {
                for (var n, i = 0; i < e.length; i++) (n = e[i]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }

            return function (e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(), G = function (t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }, Z = Object.assign || function (t) {
            for (var e, n = 1; n < arguments.length; n++) for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t
        }, J = W && /Firefox/i.test(navigator.userAgent),
        tt = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        et = tt.slice(3), nt = "flip", it = "clockwise", ot = "counterclockwise", rt = function () {
            function e(n, i) {
                var o = this, r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                X(this, e), this.scheduleUpdate = function () {
                    return requestAnimationFrame(o.update)
                }, this.update = V(this.update.bind(this)), this.options = Z({}, e.Defaults, r), this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: []
                }, this.reference = n && n.jquery ? n[0] : n, this.popper = i && i.jquery ? i[0] : i, this.options.modifiers = {}, Object.keys(Z({}, e.Defaults.modifiers, r.modifiers)).forEach(function (t) {
                    o.options.modifiers[t] = Z({}, e.Defaults.modifiers[t] || {}, r.modifiers ? r.modifiers[t] : {})
                }), this.modifiers = Object.keys(this.options.modifiers).map(function (t) {
                    return Z({name: t}, o.options.modifiers[t])
                }).sort(function (t, e) {
                    return t.order - e.order
                }), this.modifiers.forEach(function (e) {
                    e.enabled && t(e.onLoad) && e.onLoad(o.reference, o.popper, o.options, e, o.state)
                }), this.update();
                var s = this.options.eventsEnabled;
                s && this.enableEventListeners(), this.state.eventsEnabled = s
            }

            return K(e, [{
                key: "update", value: function () {
                    return function () {
                        if (!this.state.isDestroyed) {
                            var t = {instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {}};
                            t.offsets.reference = x(this.state, this.popper, this.reference, this.options.positionFixed), t.placement = w(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), t.originalPlacement = t.placement, t.positionFixed = this.options.positionFixed, t.offsets.popper = T(this.popper, t.offsets.reference, t.placement), t.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", t = I(this.modifiers, t), this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0, this.options.onCreate(t))
                        }
                    }.call(this)
                }
            }, {
                key: "destroy", value: function () {
                    return function () {
                        return this.state.isDestroyed = !0, A(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[D("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
                    }.call(this)
                }
            }, {
                key: "enableEventListeners", value: function () {
                    return function () {
                        this.state.eventsEnabled || (this.state = O(this.reference, this.options, this.state, this.scheduleUpdate))
                    }.call(this)
                }
            }, {
                key: "disableEventListeners", value: function () {
                    return j.call(this)
                }
            }]), e
        }();
    return rt.Utils = ("undefined" == typeof window ? global : window).PopperUtils, rt.placements = tt, rt.Defaults = {
        placement: "bottom", positionFixed: !1, eventsEnabled: !0, removeOnDestroy: !1, onCreate: function () {
        }, onUpdate: function () {
        }, modifiers: {
            shift: {
                order: 100, enabled: !0, fn: function (t) {
                    var e = t.placement, n = e.split("-")[0], i = e.split("-")[1];
                    if (i) {
                        var o = t.offsets, r = o.reference, s = o.popper, a = -1 !== ["bottom", "top"].indexOf(n),
                            l = a ? "left" : "top", u = a ? "width" : "height",
                            c = {start: G({}, l, r[l]), end: G({}, l, r[l] + r[u] - s[u])};
                        t.offsets.popper = Z({}, s, c[i])
                    }
                    return t
                }
            }, offset: {
                order: 200, enabled: !0, fn: function (t, e) {
                    var n, i = e.offset, o = t.placement, r = t.offsets, s = r.popper, a = r.reference,
                        l = o.split("-")[0];
                    return n = L(+i) ? [+i, 0] : R(i, s, a, l), "left" === l ? (s.top += n[0], s.left -= n[1]) : "right" === l ? (s.top += n[0], s.left += n[1]) : "top" === l ? (s.left += n[0], s.top -= n[1]) : "bottom" === l && (s.left += n[0], s.top += n[1]), t.popper = s, t
                }, offset: 0
            }, preventOverflow: {
                order: 300, enabled: !0, fn: function (t, e) {
                    var n = e.boundariesElement || r(t.instance.popper);
                    t.instance.reference === n && (n = r(n));
                    var i = D("transform"), o = t.instance.popper.style, s = o.top, a = o.left, l = o[i];
                    o.top = "", o.left = "", o[i] = "";
                    var u = b(t.instance.popper, t.instance.reference, e.padding, n, t.positionFixed);
                    o.top = s, o.left = a, o[i] = l, e.boundaries = u;
                    var c = e.priority, h = t.offsets.popper, f = {
                        primary: function (t) {
                            var n = h[t];
                            return h[t] < u[t] && !e.escapeWithReference && (n = $(h[t], u[t])), G({}, t, n)
                        }, secondary: function (t) {
                            var n = "right" === t ? "left" : "top", i = h[n];
                            return h[t] > u[t] && !e.escapeWithReference && (i = z(h[n], u[t] - ("right" === t ? h.width : h.height))), G({}, n, i)
                        }
                    };
                    return c.forEach(function (t) {
                        var e = -1 === ["left", "top"].indexOf(t) ? "secondary" : "primary";
                        h = Z({}, h, f[e](t))
                    }), t.offsets.popper = h, t
                }, priority: ["left", "right", "top", "bottom"], padding: 5, boundariesElement: "scrollParent"
            }, keepTogether: {
                order: 400, enabled: !0, fn: function (t) {
                    var e = t.offsets, n = e.popper, i = e.reference, o = t.placement.split("-")[0], r = H,
                        s = -1 !== ["top", "bottom"].indexOf(o), a = s ? "right" : "bottom", l = s ? "left" : "top",
                        u = s ? "width" : "height";
                    return n[a] < r(i[l]) && (t.offsets.popper[l] = r(i[l]) - n[u]), n[l] > r(i[a]) && (t.offsets.popper[l] = r(i[a])), t
                }
            }, arrow: {
                order: 500, enabled: !0, fn: function (t, n) {
                    var i;
                    if (!P(t.instance.modifiers, "arrow", "keepTogether")) return t;
                    var o = n.element;
                    if ("string" == typeof o) {
                        if (!(o = t.instance.popper.querySelector(o))) return t
                    } else if (!t.instance.popper.contains(o)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), t;
                    var r = t.placement.split("-")[0], s = t.offsets, a = s.popper, l = s.reference,
                        u = -1 !== ["left", "right"].indexOf(r), c = u ? "height" : "width", h = u ? "Top" : "Left",
                        f = h.toLowerCase(), p = u ? "left" : "top", m = u ? "bottom" : "right", g = E(o)[c];
                    l[m] - g < a[f] && (t.offsets.popper[f] -= a[f] - (l[m] - g)), l[f] + g > a[m] && (t.offsets.popper[f] += l[f] + g - a[m]), t.offsets.popper = d(t.offsets.popper);
                    var v = l[f] + l[c] / 2 - g / 2, y = e(t.instance.popper), b = parseFloat(y["margin" + h], 10),
                        _ = parseFloat(y["border" + h + "Width"], 10), w = v - t.offsets.popper[f] - b - _;
                    return w = $(z(a[c] - g, w), 0), t.arrowElement = o, t.offsets.arrow = (G(i = {}, f, q(w)), G(i, p, ""), i), t
                }, element: "[x-arrow]"
            }, flip: {
                order: 600, enabled: !0, fn: function (t, e) {
                    if (A(t.instance.modifiers, "inner")) return t;
                    if (t.flipped && t.placement === t.originalPlacement) return t;
                    var n = b(t.instance.popper, t.instance.reference, e.padding, e.boundariesElement, t.positionFixed),
                        i = t.placement.split("-")[0], o = C(i), r = t.placement.split("-")[1] || "", s = [];
                    switch (e.behavior) {
                        case nt:
                            s = [i, o];
                            break;
                        case it:
                            s = M(i);
                            break;
                        case ot:
                            s = M(i, !0);
                            break;
                        default:
                            s = e.behavior
                    }
                    return s.forEach(function (a, l) {
                        if (i !== a || s.length === l + 1) return t;
                        i = t.placement.split("-")[0], o = C(i);
                        var u = t.offsets.popper, c = t.offsets.reference, h = H,
                            f = "left" === i && h(u.right) > h(c.left) || "right" === i && h(u.left) < h(c.right) || "top" === i && h(u.bottom) > h(c.top) || "bottom" === i && h(u.top) < h(c.bottom),
                            d = h(u.left) < h(n.left), p = h(u.right) > h(n.right), m = h(u.top) < h(n.top),
                            g = h(u.bottom) > h(n.bottom),
                            v = "left" === i && d || "right" === i && p || "top" === i && m || "bottom" === i && g,
                            y = -1 !== ["top", "bottom"].indexOf(i),
                            b = !!e.flipVariations && (y && "start" === r && d || y && "end" === r && p || !y && "start" === r && m || !y && "end" === r && g);
                        (f || v || b) && (t.flipped = !0, (f || v) && (i = s[l + 1]), b && (r = function (t) {
                            return "end" === t ? "start" : "start" === t ? "end" : t
                        }(r)), t.placement = i + (r ? "-" + r : ""), t.offsets.popper = Z({}, t.offsets.popper, T(t.instance.popper, t.offsets.reference, t.placement)), t = I(t.instance.modifiers, t, "flip"))
                    }), t
                }, behavior: "flip", padding: 5, boundariesElement: "viewport"
            }, inner: {
                order: 700, enabled: !1, fn: function (t) {
                    var e = t.placement, n = e.split("-")[0], i = t.offsets, o = i.popper, r = i.reference,
                        s = -1 !== ["left", "right"].indexOf(n), a = -1 === ["top", "left"].indexOf(n);
                    return o[s ? "left" : "top"] = r[n] - (a ? o[s ? "width" : "height"] : 0), t.placement = C(e), t.offsets.popper = d(o), t
                }
            }, hide: {
                order: 800, enabled: !0, fn: function (t) {
                    if (!P(t.instance.modifiers, "hide", "preventOverflow")) return t;
                    var e = t.offsets.reference, n = S(t.instance.modifiers, function (t) {
                        return "preventOverflow" === t.name
                    }).boundaries;
                    if (e.bottom < n.top || e.left > n.right || e.top > n.bottom || e.right < n.left) {
                        if (!0 === t.hide) return t;
                        t.hide = !0, t.attributes["x-out-of-boundaries"] = ""
                    } else {
                        if (!1 === t.hide) return t;
                        t.hide = !1, t.attributes["x-out-of-boundaries"] = !1
                    }
                    return t
                }
            }, computeStyle: {
                order: 850, enabled: !0, fn: function (t, e) {
                    var n = e.x, i = e.y, o = t.offsets.popper, s = S(t.instance.modifiers, function (t) {
                        return "applyStyle" === t.name
                    }).gpuAcceleration;
                    void 0 !== s && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                    var a, l, u = void 0 === s ? e.gpuAcceleration : s, c = r(t.instance.popper), h = p(c),
                        f = {position: o.position}, d = function (t, e) {
                            var n = t.offsets, i = n.popper, o = n.reference,
                                r = -1 !== ["left", "right"].indexOf(t.placement), s = -1 !== t.placement.indexOf("-"),
                                a = o.width % 2 == i.width % 2, l = 1 == o.width % 2 && 1 == i.width % 2, u = function (t) {
                                    return t
                                }, c = e ? r || s || a ? q : H : u, h = e ? q : u;
                            return {
                                left: c(l && !s && e ? i.left - 1 : i.left),
                                top: h(i.top),
                                bottom: h(i.bottom),
                                right: c(i.right)
                            }
                        }(t, 2 > window.devicePixelRatio || !J), m = "bottom" === n ? "top" : "bottom",
                        g = "right" === i ? "left" : "right", v = D("transform");
                    if (l = "bottom" == m ? "HTML" === c.nodeName ? -c.clientHeight + d.bottom : -h.height + d.bottom : d.top, a = "right" == g ? "HTML" === c.nodeName ? -c.clientWidth + d.right : -h.width + d.right : d.left, u && v) f[v] = "translate3d(" + a + "px, " + l + "px, 0)", f[m] = 0, f[g] = 0, f.willChange = "transform"; else {
                        var y = "bottom" == m ? -1 : 1, b = "right" == g ? -1 : 1;
                        f[m] = l * y, f[g] = a * b, f.willChange = m + ", " + g
                    }
                    var _ = {"x-placement": t.placement};
                    return t.attributes = Z({}, _, t.attributes), t.styles = Z({}, f, t.styles), t.arrowStyles = Z({}, t.offsets.arrow, t.arrowStyles), t
                }, gpuAcceleration: !0, x: "bottom", y: "right"
            }, applyStyle: {
                order: 900, enabled: !0, fn: function (t) {
                    return N(t.instance.popper, t.styles), function (t, e) {
                        Object.keys(e).forEach(function (n) {
                            !1 === e[n] ? t.removeAttribute(n) : t.setAttribute(n, e[n])
                        })
                    }(t.instance.popper, t.attributes), t.arrowElement && Object.keys(t.arrowStyles).length && N(t.arrowElement, t.arrowStyles), t
                }, onLoad: function (t, e, n, i, o) {
                    var r = x(o, e, t, n.positionFixed),
                        s = w(n.placement, r, e, t, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                    return e.setAttribute("x-placement", s), N(e, {position: n.positionFixed ? "fixed" : "absolute"}), n
                }, gpuAcceleration: void 0
            }
        }
    }, rt
}), function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports, require("popper.js"), require("jquery")) : "function" == typeof define && define.amd ? define(["exports", "popper.js", "jquery"], e) : e(t.bootstrap = {}, t.Popper, t.jQuery)
}(this, function (t, e, n) {
    "use strict";

    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    function o(t, e, n) {
        return e && i(t.prototype, e), n && i(t, n), t
    }

    function r(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {}, i = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function (t) {
                return Object.getOwnPropertyDescriptor(n, t).enumerable
            }))), i.forEach(function (e) {
                var i, o, r;
                i = t, r = n[o = e], o in i ? Object.defineProperty(i, o, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : i[o] = r
            })
        }
        return t
    }

    e = e && e.hasOwnProperty("default") ? e.default : e, n = n && n.hasOwnProperty("default") ? n.default : n;
    var s = "transitionend";
    var a = {
        TRANSITION_END: "bsTransitionEnd", getUID: function (t) {
            for (; t += ~~(1e6 * Math.random()), document.getElementById(t);) ;
            return t
        }, getSelectorFromElement: function (t) {
            var e = t.getAttribute("data-target");
            if (!e || "#" === e) {
                var n = t.getAttribute("href");
                e = n && "#" !== n ? n.trim() : ""
            }
            return e && document.querySelector(e) ? e : null
        }, getTransitionDurationFromElement: function (t) {
            if (!t) return 0;
            var e = n(t).css("transition-duration"), i = n(t).css("transition-delay"), o = parseFloat(e),
                r = parseFloat(i);
            return o || r ? (e = e.split(",")[0], i = i.split(",")[0], 1e3 * (parseFloat(e) + parseFloat(i))) : 0
        }, reflow: function (t) {
            return t.offsetHeight
        }, triggerTransitionEnd: function (t) {
            n(t).trigger(s)
        }, supportsTransitionEnd: function () {
            return Boolean(s)
        }, isElement: function (t) {
            return (t[0] || t).nodeType
        }, typeCheckConfig: function (t, e, n) {
            for (var i in n) if (Object.prototype.hasOwnProperty.call(n, i)) {
                var o = n[i], r = e[i],
                    s = r && a.isElement(r) ? "element" : (l = r, {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase());
                if (!new RegExp(o).test(s)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + o + '".')
            }
            var l
        }, findShadowRoot: function (t) {
            if (!document.documentElement.attachShadow) return null;
            if ("function" != typeof t.getRootNode) return t instanceof ShadowRoot ? t : t.parentNode ? a.findShadowRoot(t.parentNode) : null;
            var e = t.getRootNode();
            return e instanceof ShadowRoot ? e : null
        }
    };
    n.fn.emulateTransitionEnd = function (t) {
        var e = this, i = !1;
        return n(this).one(a.TRANSITION_END, function () {
            i = !0
        }), setTimeout(function () {
            i || a.triggerTransitionEnd(e)
        }, t), this
    }, n.event.special[a.TRANSITION_END] = {
        bindType: s, delegateType: s, handle: function (t) {
            if (n(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
        }
    };
    var l = "alert", u = "bs.alert", c = "." + u, h = n.fn[l],
        f = {CLOSE: "close" + c, CLOSED: "closed" + c, CLICK_DATA_API: "click" + c + ".data-api"}, d = function () {
            function t(t) {
                this._element = t
            }

            var e = t.prototype;
            return e.close = function (t) {
                var e = this._element;
                t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
            }, e.dispose = function () {
                n.removeData(this._element, u), this._element = null
            }, e._getRootElement = function (t) {
                var e = a.getSelectorFromElement(t), i = !1;
                return e && (i = document.querySelector(e)), i || (i = n(t).closest(".alert")[0]), i
            }, e._triggerCloseEvent = function (t) {
                var e = n.Event(f.CLOSE);
                return n(t).trigger(e), e
            }, e._removeElement = function (t) {
                var e = this;
                if (n(t).removeClass("show"), n(t).hasClass("fade")) {
                    var i = a.getTransitionDurationFromElement(t);
                    n(t).one(a.TRANSITION_END, function (n) {
                        return e._destroyElement(t, n)
                    }).emulateTransitionEnd(i)
                } else this._destroyElement(t)
            }, e._destroyElement = function (t) {
                n(t).detach().trigger(f.CLOSED).remove()
            }, t._jQueryInterface = function (e) {
                return this.each(function () {
                    var i = n(this), o = i.data(u);
                    o || (o = new t(this), i.data(u, o)), "close" === e && o[e](this)
                })
            }, t._handleDismiss = function (t) {
                return function (e) {
                    e && e.preventDefault(), t.close(this)
                }
            }, o(t, null, [{
                key: "VERSION", get: function () {
                    return "4.2.1"
                }
            }]), t
        }();
    n(document).on(f.CLICK_DATA_API, '[data-dismiss="alert"]', d._handleDismiss(new d)), n.fn[l] = d._jQueryInterface, n.fn[l].Constructor = d, n.fn[l].noConflict = function () {
        return n.fn[l] = h, d._jQueryInterface
    };
    var p = "button", m = "bs.button", g = "." + m, v = ".data-api", y = n.fn[p], b = "active",
        _ = '[data-toggle^="button"]', w = ".btn",
        x = {CLICK_DATA_API: "click" + g + v, FOCUS_BLUR_DATA_API: "focus" + g + v + " blur" + g + v}, E = function () {
            function t(t) {
                this._element = t
            }

            var e = t.prototype;
            return e.toggle = function () {
                var t = !0, e = !0, i = n(this._element).closest('[data-toggle="buttons"]')[0];
                if (i) {
                    var o = this._element.querySelector('input:not([type="hidden"])');
                    if (o) {
                        if ("radio" === o.type) if (o.checked && this._element.classList.contains(b)) t = !1; else {
                            var r = i.querySelector(".active");
                            r && n(r).removeClass(b)
                        }
                        if (t) {
                            if (o.hasAttribute("disabled") || i.hasAttribute("disabled") || o.classList.contains("disabled") || i.classList.contains("disabled")) return;
                            o.checked = !this._element.classList.contains(b), n(o).trigger("change")
                        }
                        o.focus(), e = !1
                    }
                }
                e && this._element.setAttribute("aria-pressed", !this._element.classList.contains(b)), t && n(this._element).toggleClass(b)
            }, e.dispose = function () {
                n.removeData(this._element, m), this._element = null
            }, t._jQueryInterface = function (e) {
                return this.each(function () {
                    var i = n(this).data(m);
                    i || (i = new t(this), n(this).data(m, i)), "toggle" === e && i[e]()
                })
            }, o(t, null, [{
                key: "VERSION", get: function () {
                    return "4.2.1"
                }
            }]), t
        }();
    n(document).on(x.CLICK_DATA_API, _, function (t) {
        t.preventDefault();
        var e = t.target;
        n(e).hasClass("btn") || (e = n(e).closest(w)), E._jQueryInterface.call(n(e), "toggle")
    }).on(x.FOCUS_BLUR_DATA_API, _, function (t) {
        var e = n(t.target).closest(w)[0];
        n(e).toggleClass("focus", /^focus(in)?$/.test(t.type))
    }), n.fn[p] = E._jQueryInterface, n.fn[p].Constructor = E, n.fn[p].noConflict = function () {
        return n.fn[p] = y, E._jQueryInterface
    };
    var C = "carousel", T = "bs.carousel", S = "." + T, I = ".data-api", A = n.fn[C],
        D = {interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0}, k = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean"
        }, O = "next", j = "prev", L = {
            SLIDE: "slide" + S,
            SLID: "slid" + S,
            KEYDOWN: "keydown" + S,
            MOUSEENTER: "mouseenter" + S,
            MOUSELEAVE: "mouseleave" + S,
            TOUCHSTART: "touchstart" + S,
            TOUCHMOVE: "touchmove" + S,
            TOUCHEND: "touchend" + S,
            POINTERDOWN: "pointerdown" + S,
            POINTERUP: "pointerup" + S,
            DRAG_START: "dragstart" + S,
            LOAD_DATA_API: "load" + S + I,
            CLICK_DATA_API: "click" + S + I
        }, N = "active", P = ".active.carousel-item", M = ".carousel-indicators", R = {TOUCH: "touch", PEN: "pen"},
        z = function () {
            function t(t, e) {
                this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._element = t, this._indicatorsElement = this._element.querySelector(M), this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners()
            }

            var e = t.prototype;
            return e.next = function () {
                this._isSliding || this._slide(O)
            }, e.nextWhenVisible = function () {
                !document.hidden && n(this._element).is(":visible") && "hidden" !== n(this._element).css("visibility") && this.next()
            }, e.prev = function () {
                this._isSliding || this._slide(j)
            }, e.pause = function (t) {
                t || (this._isPaused = !0), this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (a.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
            }, e.cycle = function (t) {
                t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }, e.to = function (t) {
                var e = this;
                this._activeElement = this._element.querySelector(P);
                var i = this._getItemIndex(this._activeElement);
                if (!(t > this._items.length - 1 || t < 0)) if (this._isSliding) n(this._element).one(L.SLID, function () {
                    return e.to(t)
                }); else {
                    if (i === t) return this.pause(), void this.cycle();
                    var o = i < t ? O : j;
                    this._slide(o, this._items[t])
                }
            }, e.dispose = function () {
                n(this._element).off(S), n.removeData(this._element, T), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
            }, e._getConfig = function (t) {
                return t = r({}, D, t), a.typeCheckConfig(C, t, k), t
            }, e._handleSwipe = function () {
                var t = Math.abs(this.touchDeltaX);
                if (!(t <= 40)) {
                    var e = t / this.touchDeltaX;
                    0 < e && this.prev(), e < 0 && this.next()
                }
            }, e._addEventListeners = function () {
                var t = this;
                this._config.keyboard && n(this._element).on(L.KEYDOWN, function (e) {
                    return t._keydown(e)
                }), "hover" === this._config.pause && n(this._element).on(L.MOUSEENTER, function (e) {
                    return t.pause(e)
                }).on(L.MOUSELEAVE, function (e) {
                    return t.cycle(e)
                }), this._addTouchEventListeners()
            }, e._addTouchEventListeners = function () {
                var t = this;
                if (this._touchSupported) {
                    var e = function (e) {
                        t._pointerEvent && R[e.originalEvent.pointerType.toUpperCase()] ? t.touchStartX = e.originalEvent.clientX : t._pointerEvent || (t.touchStartX = e.originalEvent.touches[0].clientX)
                    }, i = function (e) {
                        t._pointerEvent && R[e.originalEvent.pointerType.toUpperCase()] && (t.touchDeltaX = e.originalEvent.clientX - t.touchStartX), t._handleSwipe(), "hover" === t._config.pause && (t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout(function (e) {
                            return t.cycle(e)
                        }, 500 + t._config.interval))
                    };
                    n(this._element.querySelectorAll(".carousel-item img")).on(L.DRAG_START, function (t) {
                        return t.preventDefault()
                    }), this._pointerEvent ? (n(this._element).on(L.POINTERDOWN, function (t) {
                        return e(t)
                    }), n(this._element).on(L.POINTERUP, function (t) {
                        return i(t)
                    }), this._element.classList.add("pointer-event")) : (n(this._element).on(L.TOUCHSTART, function (t) {
                        return e(t)
                    }), n(this._element).on(L.TOUCHMOVE, function (e) {
                        var n;
                        (n = e).originalEvent.touches && 1 < n.originalEvent.touches.length ? t.touchDeltaX = 0 : t.touchDeltaX = n.originalEvent.touches[0].clientX - t.touchStartX
                    }), n(this._element).on(L.TOUCHEND, function (t) {
                        return i(t)
                    }))
                }
            }, e._keydown = function (t) {
                if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
                    case 37:
                        t.preventDefault(), this.prev();
                        break;
                    case 39:
                        t.preventDefault(), this.next()
                }
            }, e._getItemIndex = function (t) {
                return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(".carousel-item")) : [], this._items.indexOf(t)
            }, e._getItemByDirection = function (t, e) {
                var n = t === O, i = t === j, o = this._getItemIndex(e), r = this._items.length - 1;
                if ((i && 0 === o || n && o === r) && !this._config.wrap) return e;
                var s = (o + (t === j ? -1 : 1)) % this._items.length;
                return -1 === s ? this._items[this._items.length - 1] : this._items[s]
            }, e._triggerSlideEvent = function (t, e) {
                var i = this._getItemIndex(t), o = this._getItemIndex(this._element.querySelector(P)),
                    r = n.Event(L.SLIDE, {relatedTarget: t, direction: e, from: o, to: i});
                return n(this._element).trigger(r), r
            }, e._setActiveIndicatorElement = function (t) {
                if (this._indicatorsElement) {
                    var e = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
                    n(e).removeClass(N);
                    var i = this._indicatorsElement.children[this._getItemIndex(t)];
                    i && n(i).addClass(N)
                }
            }, e._slide = function (t, e) {
                var i, o, r, s = this, l = this._element.querySelector(P), u = this._getItemIndex(l),
                    c = e || l && this._getItemByDirection(t, l), h = this._getItemIndex(c),
                    f = Boolean(this._interval);
                if (r = t === O ? (i = "carousel-item-left", o = "carousel-item-next", "left") : (i = "carousel-item-right", o = "carousel-item-prev", "right"), c && n(c).hasClass(N)) this._isSliding = !1; else if (!this._triggerSlideEvent(c, r).isDefaultPrevented() && l && c) {
                    this._isSliding = !0, f && this.pause(), this._setActiveIndicatorElement(c);
                    var d = n.Event(L.SLID, {relatedTarget: c, direction: r, from: u, to: h});
                    if (n(this._element).hasClass("slide")) {
                        n(c).addClass(o), a.reflow(c), n(l).addClass(i), n(c).addClass(i);
                        var p = parseInt(c.getAttribute("data-interval"), 10);
                        this._config.interval = p ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, p) : this._config.defaultInterval || this._config.interval;
                        var m = a.getTransitionDurationFromElement(l);
                        n(l).one(a.TRANSITION_END, function () {
                            n(c).removeClass(i + " " + o).addClass(N), n(l).removeClass(N + " " + o + " " + i), s._isSliding = !1, setTimeout(function () {
                                return n(s._element).trigger(d)
                            }, 0)
                        }).emulateTransitionEnd(m)
                    } else n(l).removeClass(N), n(c).addClass(N), this._isSliding = !1, n(this._element).trigger(d);
                    f && this.cycle()
                }
            }, t._jQueryInterface = function (e) {
                return this.each(function () {
                    var i = n(this).data(T), o = r({}, D, n(this).data());
                    "object" == typeof e && (o = r({}, o, e));
                    var s = "string" == typeof e ? e : o.slide;
                    if (i || (i = new t(this, o), n(this).data(T, i)), "number" == typeof e) i.to(e); else if ("string" == typeof s) {
                        if (void 0 === i[s]) throw new TypeError('No method named "' + s + '"');
                        i[s]()
                    } else o.interval && (i.pause(), i.cycle())
                })
            }, t._dataApiClickHandler = function (e) {
                var i = a.getSelectorFromElement(this);
                if (i) {
                    var o = n(i)[0];
                    if (o && n(o).hasClass("carousel")) {
                        var s = r({}, n(o).data(), n(this).data()), l = this.getAttribute("data-slide-to");
                        l && (s.interval = !1), t._jQueryInterface.call(n(o), s), l && n(o).data(T).to(l), e.preventDefault()
                    }
                }
            }, o(t, null, [{
                key: "VERSION", get: function () {
                    return "4.2.1"
                }
            }, {
                key: "Default", get: function () {
                    return D
                }
            }]), t
        }();
    n(document).on(L.CLICK_DATA_API, "[data-slide], [data-slide-to]", z._dataApiClickHandler), n(window).on(L.LOAD_DATA_API, function () {
        for (var t = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), e = 0, i = t.length; e < i; e++) {
            var o = n(t[e]);
            z._jQueryInterface.call(o, o.data())
        }
    }), n.fn[C] = z._jQueryInterface, n.fn[C].Constructor = z, n.fn[C].noConflict = function () {
        return n.fn[C] = A, z._jQueryInterface
    };
    var H = "collapse", q = "bs.collapse", $ = "." + q, W = n.fn[H], F = {toggle: !0, parent: ""},
        B = {toggle: "boolean", parent: "(string|element)"}, U = {
            SHOW: "show" + $,
            SHOWN: "shown" + $,
            HIDE: "hide" + $,
            HIDDEN: "hidden" + $,
            CLICK_DATA_API: "click" + $ + ".data-api"
        }, V = "show", Y = "collapse", Q = "collapsing", X = "collapsed", K = '[data-toggle="collapse"]', G = function () {
            function t(t, e) {
                this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
                for (var n = [].slice.call(document.querySelectorAll(K)), i = 0, o = n.length; i < o; i++) {
                    var r = n[i], s = a.getSelectorFromElement(r),
                        l = [].slice.call(document.querySelectorAll(s)).filter(function (e) {
                            return e === t
                        });
                    null !== s && 0 < l.length && (this._selector = s, this._triggerArray.push(r))
                }
                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
            }

            var e = t.prototype;
            return e.toggle = function () {
                n(this._element).hasClass(V) ? this.hide() : this.show()
            }, e.show = function () {
                var e, i, o = this;
                if (!(this._isTransitioning || n(this._element).hasClass(V) || (this._parent && 0 === (e = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter(function (t) {
                    return "string" == typeof o._config.parent ? t.getAttribute("data-parent") === o._config.parent : t.classList.contains(Y)
                })).length && (e = null), e && (i = n(e).not(this._selector).data(q)) && i._isTransitioning))) {
                    var r = n.Event(U.SHOW);
                    if (n(this._element).trigger(r), !r.isDefaultPrevented()) {
                        e && (t._jQueryInterface.call(n(e).not(this._selector), "hide"), i || n(e).data(q, null));
                        var s = this._getDimension();
                        n(this._element).removeClass(Y).addClass(Q), this._element.style[s] = 0, this._triggerArray.length && n(this._triggerArray).removeClass(X).attr("aria-expanded", !0), this.setTransitioning(!0);
                        var l = "scroll" + (s[0].toUpperCase() + s.slice(1)),
                            u = a.getTransitionDurationFromElement(this._element);
                        n(this._element).one(a.TRANSITION_END, function () {
                            n(o._element).removeClass(Q).addClass(Y).addClass(V), o._element.style[s] = "", o.setTransitioning(!1), n(o._element).trigger(U.SHOWN)
                        }).emulateTransitionEnd(u), this._element.style[s] = this._element[l] + "px"
                    }
                }
            }, e.hide = function () {
                var t = this;
                if (!this._isTransitioning && n(this._element).hasClass(V)) {
                    var e = n.Event(U.HIDE);
                    if (n(this._element).trigger(e), !e.isDefaultPrevented()) {
                        var i = this._getDimension();
                        this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", a.reflow(this._element), n(this._element).addClass(Q).removeClass(Y).removeClass(V);
                        var o = this._triggerArray.length;
                        if (0 < o) for (var r = 0; r < o; r++) {
                            var s = this._triggerArray[r], l = a.getSelectorFromElement(s);
                            null !== l && (n([].slice.call(document.querySelectorAll(l))).hasClass(V) || n(s).addClass(X).attr("aria-expanded", !1))
                        }
                        this.setTransitioning(!0), this._element.style[i] = "";
                        var u = a.getTransitionDurationFromElement(this._element);
                        n(this._element).one(a.TRANSITION_END, function () {
                            t.setTransitioning(!1), n(t._element).removeClass(Q).addClass(Y).trigger(U.HIDDEN)
                        }).emulateTransitionEnd(u)
                    }
                }
            }, e.setTransitioning = function (t) {
                this._isTransitioning = t
            }, e.dispose = function () {
                n.removeData(this._element, q), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
            }, e._getConfig = function (t) {
                return (t = r({}, F, t)).toggle = Boolean(t.toggle), a.typeCheckConfig(H, t, B), t
            }, e._getDimension = function () {
                return n(this._element).hasClass("width") ? "width" : "height"
            }, e._getParent = function () {
                var e, i = this;
                a.isElement(this._config.parent) ? (e = this._config.parent, void 0 !== this._config.parent.jquery && (e = this._config.parent[0])) : e = document.querySelector(this._config.parent);
                var o = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                    r = [].slice.call(e.querySelectorAll(o));
                return n(r).each(function (e, n) {
                    i._addAriaAndCollapsedClass(t._getTargetFromElement(n), [n])
                }), e
            }, e._addAriaAndCollapsedClass = function (t, e) {
                var i = n(t).hasClass(V);
                e.length && n(e).toggleClass(X, !i).attr("aria-expanded", i)
            }, t._getTargetFromElement = function (t) {
                var e = a.getSelectorFromElement(t);
                return e ? document.querySelector(e) : null
            }, t._jQueryInterface = function (e) {
                return this.each(function () {
                    var i = n(this), o = i.data(q), s = r({}, F, i.data(), "object" == typeof e && e ? e : {});
                    if (!o && s.toggle && /show|hide/.test(e) && (s.toggle = !1), o || (o = new t(this, s), i.data(q, o)), "string" == typeof e) {
                        if (void 0 === o[e]) throw new TypeError('No method named "' + e + '"');
                        o[e]()
                    }
                })
            }, o(t, null, [{
                key: "VERSION", get: function () {
                    return "4.2.1"
                }
            }, {
                key: "Default", get: function () {
                    return F
                }
            }]), t
        }();
    n(document).on(U.CLICK_DATA_API, K, function (t) {
        "A" === t.currentTarget.tagName && t.preventDefault();
        var e = n(this), i = a.getSelectorFromElement(this), o = [].slice.call(document.querySelectorAll(i));
        n(o).each(function () {
            var t = n(this), i = t.data(q) ? "toggle" : e.data();
            G._jQueryInterface.call(t, i)
        })
    }), n.fn[H] = G._jQueryInterface, n.fn[H].Constructor = G, n.fn[H].noConflict = function () {
        return n.fn[H] = W, G._jQueryInterface
    };
    var Z = "dropdown", J = "bs.dropdown", tt = "." + J, et = ".data-api", nt = n.fn[Z], it = new RegExp("38|40|27"),
        ot = {
            HIDE: "hide" + tt,
            HIDDEN: "hidden" + tt,
            SHOW: "show" + tt,
            SHOWN: "shown" + tt,
            CLICK: "click" + tt,
            CLICK_DATA_API: "click" + tt + et,
            KEYDOWN_DATA_API: "keydown" + tt + et,
            KEYUP_DATA_API: "keyup" + tt + et
        }, rt = "disabled", st = "show", at = "dropdown-menu-right", lt = '[data-toggle="dropdown"]',
        ut = ".dropdown-menu",
        ct = {offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic"}, ht = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string"
        }, ft = function () {
            function t(t, e) {
                this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
            }

            var i = t.prototype;
            return i.toggle = function () {
                if (!this._element.disabled && !n(this._element).hasClass(rt)) {
                    var i = t._getParentFromElement(this._element), o = n(this._menu).hasClass(st);
                    if (t._clearMenus(), !o) {
                        var r = {relatedTarget: this._element}, s = n.Event(ot.SHOW, r);
                        if (n(i).trigger(s), !s.isDefaultPrevented()) {
                            if (!this._inNavbar) {
                                if (void 0 === e) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                                var l = this._element;
                                "parent" === this._config.reference ? l = i : a.isElement(this._config.reference) && (l = this._config.reference, void 0 !== this._config.reference.jquery && (l = this._config.reference[0])), "scrollParent" !== this._config.boundary && n(i).addClass("position-static"), this._popper = new e(l, this._menu, this._getPopperConfig())
                            }
                            "ontouchstart" in document.documentElement && 0 === n(i).closest(".navbar-nav").length && n(document.body).children().on("mouseover", null, n.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), n(this._menu).toggleClass(st), n(i).toggleClass(st).trigger(n.Event(ot.SHOWN, r))
                        }
                    }
                }
            }, i.show = function () {
                if (!(this._element.disabled || n(this._element).hasClass(rt) || n(this._menu).hasClass(st))) {
                    var e = {relatedTarget: this._element}, i = n.Event(ot.SHOW, e),
                        o = t._getParentFromElement(this._element);
                    n(o).trigger(i), i.isDefaultPrevented() || (n(this._menu).toggleClass(st), n(o).toggleClass(st).trigger(n.Event(ot.SHOWN, e)))
                }
            }, i.hide = function () {
                if (!this._element.disabled && !n(this._element).hasClass(rt) && n(this._menu).hasClass(st)) {
                    var e = {relatedTarget: this._element}, i = n.Event(ot.HIDE, e),
                        o = t._getParentFromElement(this._element);
                    n(o).trigger(i), i.isDefaultPrevented() || (n(this._menu).toggleClass(st), n(o).toggleClass(st).trigger(n.Event(ot.HIDDEN, e)))
                }
            }, i.dispose = function () {
                n.removeData(this._element, J), n(this._element).off(tt), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null)
            }, i.update = function () {
                this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
            }, i._addEventListeners = function () {
                var t = this;
                n(this._element).on(ot.CLICK, function (e) {
                    e.preventDefault(), e.stopPropagation(), t.toggle()
                })
            }, i._getConfig = function (t) {
                return t = r({}, this.constructor.Default, n(this._element).data(), t), a.typeCheckConfig(Z, t, this.constructor.DefaultType), t
            }, i._getMenuElement = function () {
                if (!this._menu) {
                    var e = t._getParentFromElement(this._element);
                    e && (this._menu = e.querySelector(ut))
                }
                return this._menu
            }, i._getPlacement = function () {
                var t = n(this._element.parentNode), e = "bottom-start";
                return t.hasClass("dropup") ? (e = "top-start", n(this._menu).hasClass(at) && (e = "top-end")) : t.hasClass("dropright") ? e = "right-start" : t.hasClass("dropleft") ? e = "left-start" : n(this._menu).hasClass(at) && (e = "bottom-end"), e
            }, i._detectNavbar = function () {
                return 0 < n(this._element).closest(".navbar").length
            }, i._getPopperConfig = function () {
                var t = this, e = {};
                "function" == typeof this._config.offset ? e.fn = function (e) {
                    return e.offsets = r({}, e.offsets, t._config.offset(e.offsets) || {}), e
                } : e.offset = this._config.offset;
                var n = {
                    placement: this._getPlacement(),
                    modifiers: {
                        offset: e,
                        flip: {enabled: this._config.flip},
                        preventOverflow: {boundariesElement: this._config.boundary}
                    }
                };
                return "static" === this._config.display && (n.modifiers.applyStyle = {enabled: !1}), n
            }, t._jQueryInterface = function (e) {
                return this.each(function () {
                    var i = n(this).data(J);
                    if (i || (i = new t(this, "object" == typeof e ? e : null), n(this).data(J, i)), "string" == typeof e) {
                        if (void 0 === i[e]) throw new TypeError('No method named "' + e + '"');
                        i[e]()
                    }
                })
            }, t._clearMenus = function (e) {
                if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which)) for (var i = [].slice.call(document.querySelectorAll(lt)), o = 0, r = i.length; o < r; o++) {
                    var s = t._getParentFromElement(i[o]), a = n(i[o]).data(J), l = {relatedTarget: i[o]};
                    if (e && "click" === e.type && (l.clickEvent = e), a) {
                        var u = a._menu;
                        if (n(s).hasClass(st) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && n.contains(s, e.target))) {
                            var c = n.Event(ot.HIDE, l);
                            n(s).trigger(c), c.isDefaultPrevented() || ("ontouchstart" in document.documentElement && n(document.body).children().off("mouseover", null, n.noop), i[o].setAttribute("aria-expanded", "false"), n(u).removeClass(st), n(s).removeClass(st).trigger(n.Event(ot.HIDDEN, l)))
                        }
                    }
                }
            }, t._getParentFromElement = function (t) {
                var e, n = a.getSelectorFromElement(t);
                return n && (e = document.querySelector(n)), e || t.parentNode
            }, t._dataApiKeydownHandler = function (e) {
                if ((/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || n(e.target).closest(ut).length)) : it.test(e.which)) && (e.preventDefault(), e.stopPropagation(), !this.disabled && !n(this).hasClass(rt))) {
                    var i = t._getParentFromElement(this), o = n(i).hasClass(st);
                    if (o && (!o || 27 !== e.which && 32 !== e.which)) {
                        var r = [].slice.call(i.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"));
                        if (0 !== r.length) {
                            var s = r.indexOf(e.target);
                            38 === e.which && 0 < s && s--, 40 === e.which && s < r.length - 1 && s++, s < 0 && (s = 0), r[s].focus()
                        }
                    } else {
                        if (27 === e.which) {
                            var a = i.querySelector(lt);
                            n(a).trigger("focus")
                        }
                        n(this).trigger("click")
                    }
                }
            }, o(t, null, [{
                key: "VERSION", get: function () {
                    return "4.2.1"
                }
            }, {
                key: "Default", get: function () {
                    return ct
                }
            }, {
                key: "DefaultType", get: function () {
                    return ht
                }
            }]), t
        }();
    n(document).on(ot.KEYDOWN_DATA_API, lt, ft._dataApiKeydownHandler).on(ot.KEYDOWN_DATA_API, ut, ft._dataApiKeydownHandler).on(ot.CLICK_DATA_API + " " + ot.KEYUP_DATA_API, ft._clearMenus).on(ot.CLICK_DATA_API, lt, function (t) {
        t.preventDefault(), t.stopPropagation(), ft._jQueryInterface.call(n(this), "toggle")
    }).on(ot.CLICK_DATA_API, ".dropdown form", function (t) {
        t.stopPropagation()
    }), n.fn[Z] = ft._jQueryInterface, n.fn[Z].Constructor = ft, n.fn[Z].noConflict = function () {
        return n.fn[Z] = nt, ft._jQueryInterface
    };
    var dt = "modal", pt = "bs.modal", mt = "." + pt, gt = n.fn[dt],
        vt = {backdrop: !0, keyboard: !0, focus: !0, show: !0},
        yt = {backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean"}, bt = {
            HIDE: "hide" + mt,
            HIDDEN: "hidden" + mt,
            SHOW: "show" + mt,
            SHOWN: "shown" + mt,
            FOCUSIN: "focusin" + mt,
            RESIZE: "resize" + mt,
            CLICK_DISMISS: "click.dismiss" + mt,
            KEYDOWN_DISMISS: "keydown.dismiss" + mt,
            MOUSEUP_DISMISS: "mouseup.dismiss" + mt,
            MOUSEDOWN_DISMISS: "mousedown.dismiss" + mt,
            CLICK_DATA_API: "click" + mt + ".data-api"
        }, _t = "modal-open", wt = "fade", xt = "show", Et = ".modal-dialog",
        Ct = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", Tt = ".sticky-top", St = function () {
            function t(t, e) {
                this._config = this._getConfig(e), this._element = t, this._dialog = t.querySelector(Et), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0
            }

            var e = t.prototype;
            return e.toggle = function (t) {
                return this._isShown ? this.hide() : this.show(t)
            }, e.show = function (t) {
                var e = this;
                if (!this._isShown && !this._isTransitioning) {
                    n(this._element).hasClass(wt) && (this._isTransitioning = !0);
                    var i = n.Event(bt.SHOW, {relatedTarget: t});
                    n(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), n(this._element).on(bt.CLICK_DISMISS, '[data-dismiss="modal"]', function (t) {
                        return e.hide(t)
                    }), n(this._dialog).on(bt.MOUSEDOWN_DISMISS, function () {
                        n(e._element).one(bt.MOUSEUP_DISMISS, function (t) {
                            n(t.target).is(e._element) && (e._ignoreBackdropClick = !0)
                        })
                    }), this._showBackdrop(function () {
                        return e._showElement(t)
                    }))
                }
            }, e.hide = function (t) {
                var e = this;
                if (t && t.preventDefault(), this._isShown && !this._isTransitioning) {
                    var i = n.Event(bt.HIDE);
                    if (n(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
                        this._isShown = !1;
                        var o = n(this._element).hasClass(wt);
                        if (o && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), n(document).off(bt.FOCUSIN), n(this._element).removeClass(xt), n(this._element).off(bt.CLICK_DISMISS), n(this._dialog).off(bt.MOUSEDOWN_DISMISS), o) {
                            var r = a.getTransitionDurationFromElement(this._element);
                            n(this._element).one(a.TRANSITION_END, function (t) {
                                return e._hideModal(t)
                            }).emulateTransitionEnd(r)
                        } else this._hideModal()
                    }
                }
            }, e.dispose = function () {
                [window, this._element, this._dialog].forEach(function (t) {
                    return n(t).off(mt)
                }), n(document).off(bt.FOCUSIN), n.removeData(this._element, pt), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
            }, e.handleUpdate = function () {
                this._adjustDialog()
            }, e._getConfig = function (t) {
                return t = r({}, vt, t), a.typeCheckConfig(dt, t, yt), t
            }, e._showElement = function (t) {
                var e = this, i = n(this._element).hasClass(wt);
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.scrollTop = 0, i && a.reflow(this._element), n(this._element).addClass(xt), this._config.focus && this._enforceFocus();
                var o = n.Event(bt.SHOWN, {relatedTarget: t}), r = function () {
                    e._config.focus && e._element.focus(), e._isTransitioning = !1, n(e._element).trigger(o)
                };
                if (i) {
                    var s = a.getTransitionDurationFromElement(this._dialog);
                    n(this._dialog).one(a.TRANSITION_END, r).emulateTransitionEnd(s)
                } else r()
            }, e._enforceFocus = function () {
                var t = this;
                n(document).off(bt.FOCUSIN).on(bt.FOCUSIN, function (e) {
                    document !== e.target && t._element !== e.target && 0 === n(t._element).has(e.target).length && t._element.focus()
                })
            }, e._setEscapeEvent = function () {
                var t = this;
                this._isShown && this._config.keyboard ? n(this._element).on(bt.KEYDOWN_DISMISS, function (e) {
                    27 === e.which && (e.preventDefault(), t.hide())
                }) : this._isShown || n(this._element).off(bt.KEYDOWN_DISMISS)
            }, e._setResizeEvent = function () {
                var t = this;
                this._isShown ? n(window).on(bt.RESIZE, function (e) {
                    return t.handleUpdate(e)
                }) : n(window).off(bt.RESIZE)
            }, e._hideModal = function () {
                var t = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop(function () {
                    n(document.body).removeClass(_t), t._resetAdjustments(), t._resetScrollbar(), n(t._element).trigger(bt.HIDDEN)
                })
            }, e._removeBackdrop = function () {
                this._backdrop && (n(this._backdrop).remove(), this._backdrop = null)
            }, e._showBackdrop = function (t) {
                var e = this, i = n(this._element).hasClass(wt) ? wt : "";
                if (this._isShown && this._config.backdrop) {
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", i && this._backdrop.classList.add(i), n(this._backdrop).appendTo(document.body), n(this._element).on(bt.CLICK_DISMISS, function (t) {
                        e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide())
                    }), i && a.reflow(this._backdrop), n(this._backdrop).addClass(xt), !t) return;
                    if (!i) return void t();
                    var o = a.getTransitionDurationFromElement(this._backdrop);
                    n(this._backdrop).one(a.TRANSITION_END, t).emulateTransitionEnd(o)
                } else if (!this._isShown && this._backdrop) {
                    n(this._backdrop).removeClass(xt);
                    var r = function () {
                        e._removeBackdrop(), t && t()
                    };
                    if (n(this._element).hasClass(wt)) {
                        var s = a.getTransitionDurationFromElement(this._backdrop);
                        n(this._backdrop).one(a.TRANSITION_END, r).emulateTransitionEnd(s)
                    } else r()
                } else t && t()
            }, e._adjustDialog = function () {
                var t = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }, e._resetAdjustments = function () {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
            }, e._checkScrollbar = function () {
                var t = document.body.getBoundingClientRect();
                this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
            }, e._setScrollbar = function () {
                var t = this;
                if (this._isBodyOverflowing) {
                    var e = [].slice.call(document.querySelectorAll(Ct)), i = [].slice.call(document.querySelectorAll(Tt));
                    n(e).each(function (e, i) {
                        var o = i.style.paddingRight, r = n(i).css("padding-right");
                        n(i).data("padding-right", o).css("padding-right", parseFloat(r) + t._scrollbarWidth + "px")
                    }), n(i).each(function (e, i) {
                        var o = i.style.marginRight, r = n(i).css("margin-right");
                        n(i).data("margin-right", o).css("margin-right", parseFloat(r) - t._scrollbarWidth + "px")
                    });
                    var o = document.body.style.paddingRight, r = n(document.body).css("padding-right");
                    n(document.body).data("padding-right", o).css("padding-right", parseFloat(r) + this._scrollbarWidth + "px")
                }
                n(document.body).addClass(_t)
            }, e._resetScrollbar = function () {
                var t = [].slice.call(document.querySelectorAll(Ct));
                n(t).each(function (t, e) {
                    var i = n(e).data("padding-right");
                    n(e).removeData("padding-right"), e.style.paddingRight = i || ""
                });
                var e = [].slice.call(document.querySelectorAll("" + Tt));
                n(e).each(function (t, e) {
                    var i = n(e).data("margin-right");
                    void 0 !== i && n(e).css("margin-right", i).removeData("margin-right")
                });
                var i = n(document.body).data("padding-right");
                n(document.body).removeData("padding-right"), document.body.style.paddingRight = i || ""
            }, e._getScrollbarWidth = function () {
                var t = document.createElement("div");
                t.className = "modal-scrollbar-measure", document.body.appendChild(t);
                var e = t.getBoundingClientRect().width - t.clientWidth;
                return document.body.removeChild(t), e
            }, t._jQueryInterface = function (e, i) {
                return this.each(function () {
                    var o = n(this).data(pt), s = r({}, vt, n(this).data(), "object" == typeof e && e ? e : {});
                    if (o || (o = new t(this, s), n(this).data(pt, o)), "string" == typeof e) {
                        if (void 0 === o[e]) throw new TypeError('No method named "' + e + '"');
                        o[e](i)
                    } else s.show && o.show(i)
                })
            }, o(t, null, [{
                key: "VERSION", get: function () {
                    return "4.2.1"
                }
            }, {
                key: "Default", get: function () {
                    return vt
                }
            }]), t
        }();
    n(document).on(bt.CLICK_DATA_API, '[data-toggle="modal"]', function (t) {
        var e, i = this, o = a.getSelectorFromElement(this);
        o && (e = document.querySelector(o));
        var s = n(e).data(pt) ? "toggle" : r({}, n(e).data(), n(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
        var l = n(e).one(bt.SHOW, function (t) {
            t.isDefaultPrevented() || l.one(bt.HIDDEN, function () {
                n(i).is(":visible") && i.focus()
            })
        });
        St._jQueryInterface.call(n(e), s, this)
    }), n.fn[dt] = St._jQueryInterface, n.fn[dt].Constructor = St, n.fn[dt].noConflict = function () {
        return n.fn[dt] = gt, St._jQueryInterface
    };
    var It = "tooltip", At = "bs.tooltip", Dt = "." + At, kt = n.fn[It], Ot = "bs-tooltip",
        jt = new RegExp("(^|\\s)" + Ot + "\\S+", "g"), Lt = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)"
        }, Nt = {AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left"}, Pt = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent"
        }, Mt = "show", Rt = {
            HIDE: "hide" + Dt,
            HIDDEN: "hidden" + Dt,
            SHOW: "show" + Dt,
            SHOWN: "shown" + Dt,
            INSERTED: "inserted" + Dt,
            CLICK: "click" + Dt,
            FOCUSIN: "focusin" + Dt,
            FOCUSOUT: "focusout" + Dt,
            MOUSEENTER: "mouseenter" + Dt,
            MOUSELEAVE: "mouseleave" + Dt
        }, zt = "fade", Ht = "show", qt = "hover", $t = "focus", Wt = function () {
            function t(t, n) {
                if (void 0 === e) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(n), this.tip = null, this._setListeners()
            }

            var i = t.prototype;
            return i.enable = function () {
                this._isEnabled = !0
            }, i.disable = function () {
                this._isEnabled = !1
            }, i.toggleEnabled = function () {
                this._isEnabled = !this._isEnabled
            }, i.toggle = function (t) {
                if (this._isEnabled) if (t) {
                    var e = this.constructor.DATA_KEY, i = n(t.currentTarget).data(e);
                    i || (i = new this.constructor(t.currentTarget, this._getDelegateConfig()), n(t.currentTarget).data(e, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                } else {
                    if (n(this.getTipElement()).hasClass(Ht)) return void this._leave(null, this);
                    this._enter(null, this)
                }
            }, i.dispose = function () {
                clearTimeout(this._timeout), n.removeData(this.element, this.constructor.DATA_KEY), n(this.element).off(this.constructor.EVENT_KEY), n(this.element).closest(".modal").off("hide.bs.modal"), this.tip && n(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
            }, i.show = function () {
                var t = this;
                if ("none" === n(this.element).css("display")) throw new Error("Please use show on visible elements");
                var i = n.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    n(this.element).trigger(i);
                    var o = a.findShadowRoot(this.element),
                        r = n.contains(null !== o ? o : this.element.ownerDocument.documentElement, this.element);
                    if (i.isDefaultPrevented() || !r) return;
                    var s = this.getTipElement(), l = a.getUID(this.constructor.NAME);
                    s.setAttribute("id", l), this.element.setAttribute("aria-describedby", l), this.setContent(), this.config.animation && n(s).addClass(zt);
                    var u = "function" == typeof this.config.placement ? this.config.placement.call(this, s, this.element) : this.config.placement,
                        c = this._getAttachment(u);
                    this.addAttachmentClass(c);
                    var h = this._getContainer();
                    n(s).data(this.constructor.DATA_KEY, this), n.contains(this.element.ownerDocument.documentElement, this.tip) || n(s).appendTo(h), n(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new e(this.element, s, {
                        placement: c,
                        modifiers: {
                            offset: {offset: this.config.offset},
                            flip: {behavior: this.config.fallbackPlacement},
                            arrow: {element: ".arrow"},
                            preventOverflow: {boundariesElement: this.config.boundary}
                        },
                        onCreate: function (e) {
                            e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                        },
                        onUpdate: function (e) {
                            return t._handlePopperPlacementChange(e)
                        }
                    }), n(s).addClass(Ht), "ontouchstart" in document.documentElement && n(document.body).children().on("mouseover", null, n.noop);
                    var f = function () {
                        t.config.animation && t._fixTransition();
                        var e = t._hoverState;
                        t._hoverState = null, n(t.element).trigger(t.constructor.Event.SHOWN), "out" === e && t._leave(null, t)
                    };
                    if (n(this.tip).hasClass(zt)) {
                        var d = a.getTransitionDurationFromElement(this.tip);
                        n(this.tip).one(a.TRANSITION_END, f).emulateTransitionEnd(d)
                    } else f()
                }
            }, i.hide = function (t) {
                var e = this, i = this.getTipElement(), o = n.Event(this.constructor.Event.HIDE), r = function () {
                    e._hoverState !== Mt && i.parentNode && i.parentNode.removeChild(i), e._cleanTipClass(), e.element.removeAttribute("aria-describedby"), n(e.element).trigger(e.constructor.Event.HIDDEN), null !== e._popper && e._popper.destroy(), t && t()
                };
                if (n(this.element).trigger(o), !o.isDefaultPrevented()) {
                    if (n(i).removeClass(Ht), "ontouchstart" in document.documentElement && n(document.body).children().off("mouseover", null, n.noop), this._activeTrigger.click = !1, this._activeTrigger[$t] = !1, this._activeTrigger[qt] = !1, n(this.tip).hasClass(zt)) {
                        var s = a.getTransitionDurationFromElement(i);
                        n(i).one(a.TRANSITION_END, r).emulateTransitionEnd(s)
                    } else r();
                    this._hoverState = ""
                }
            }, i.update = function () {
                null !== this._popper && this._popper.scheduleUpdate()
            }, i.isWithContent = function () {
                return Boolean(this.getTitle())
            }, i.addAttachmentClass = function (t) {
                n(this.getTipElement()).addClass(Ot + "-" + t)
            }, i.getTipElement = function () {
                return this.tip = this.tip || n(this.config.template)[0], this.tip
            }, i.setContent = function () {
                var t = this.getTipElement();
                this.setElementContent(n(t.querySelectorAll(".tooltip-inner")), this.getTitle()), n(t).removeClass(zt + " " + Ht)
            }, i.setElementContent = function (t, e) {
                var i = this.config.html;
                "object" == typeof e && (e.nodeType || e.jquery) ? i ? n(e).parent().is(t) || t.empty().append(e) : t.text(n(e).text()) : t[i ? "html" : "text"](e)
            }, i.getTitle = function () {
                var t = this.element.getAttribute("data-original-title");
                return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t
            }, i._getContainer = function () {
                return !1 === this.config.container ? document.body : a.isElement(this.config.container) ? n(this.config.container) : n(document).find(this.config.container)
            }, i._getAttachment = function (t) {
                return Nt[t.toUpperCase()]
            }, i._setListeners = function () {
                var t = this;
                this.config.trigger.split(" ").forEach(function (e) {
                    if ("click" === e) n(t.element).on(t.constructor.Event.CLICK, t.config.selector, function (e) {
                        return t.toggle(e)
                    }); else if ("manual" !== e) {
                        var i = e === qt ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                            o = e === qt ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                        n(t.element).on(i, t.config.selector, function (e) {
                            return t._enter(e)
                        }).on(o, t.config.selector, function (e) {
                            return t._leave(e)
                        })
                    }
                }), n(this.element).closest(".modal").on("hide.bs.modal", function () {
                    t.element && t.hide()
                }), this.config.selector ? this.config = r({}, this.config, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle()
            }, i._fixTitle = function () {
                var t = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
            }, i._enter = function (t, e) {
                var i = this.constructor.DATA_KEY;
                (e = e || n(t.currentTarget).data(i)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), n(t.currentTarget).data(i, e)), t && (e._activeTrigger["focusin" === t.type ? $t : qt] = !0), n(e.getTipElement()).hasClass(Ht) || e._hoverState === Mt ? e._hoverState = Mt : (clearTimeout(e._timeout), e._hoverState = Mt, e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function () {
                    e._hoverState === Mt && e.show()
                }, e.config.delay.show) : e.show())
            }, i._leave = function (t, e) {
                var i = this.constructor.DATA_KEY;
                (e = e || n(t.currentTarget).data(i)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), n(t.currentTarget).data(i, e)), t && (e._activeTrigger["focusout" === t.type ? $t : qt] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = "out", e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function () {
                    "out" === e._hoverState && e.hide()
                }, e.config.delay.hide) : e.hide())
            }, i._isWithActiveTrigger = function () {
                for (var t in this._activeTrigger) if (this._activeTrigger[t]) return !0;
                return !1
            }, i._getConfig = function (t) {
                return "number" == typeof (t = r({}, this.constructor.Default, n(this.element).data(), "object" == typeof t && t ? t : {})).delay && (t.delay = {
                    show: t.delay,
                    hide: t.delay
                }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), a.typeCheckConfig(It, t, this.constructor.DefaultType), t
            }, i._getDelegateConfig = function () {
                var t = {};
                if (this.config) for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                return t
            }, i._cleanTipClass = function () {
                var t = n(this.getTipElement()), e = t.attr("class").match(jt);
                null !== e && e.length && t.removeClass(e.join(""))
            }, i._handlePopperPlacementChange = function (t) {
                var e = t.instance;
                this.tip = e.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement))
            }, i._fixTransition = function () {
                var t = this.getTipElement(), e = this.config.animation;
                null === t.getAttribute("x-placement") && (n(t).removeClass(zt), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e)
            }, t._jQueryInterface = function (e) {
                return this.each(function () {
                    var i = n(this).data(At), o = "object" == typeof e && e;
                    if ((i || !/dispose|hide/.test(e)) && (i || (i = new t(this, o), n(this).data(At, i)), "string" == typeof e)) {
                        if (void 0 === i[e]) throw new TypeError('No method named "' + e + '"');
                        i[e]()
                    }
                })
            }, o(t, null, [{
                key: "VERSION", get: function () {
                    return "4.2.1"
                }
            }, {
                key: "Default", get: function () {
                    return Pt
                }
            }, {
                key: "NAME", get: function () {
                    return It
                }
            }, {
                key: "DATA_KEY", get: function () {
                    return At
                }
            }, {
                key: "Event", get: function () {
                    return Rt
                }
            }, {
                key: "EVENT_KEY", get: function () {
                    return Dt
                }
            }, {
                key: "DefaultType", get: function () {
                    return Lt
                }
            }]), t
        }();
    n.fn[It] = Wt._jQueryInterface, n.fn[It].Constructor = Wt, n.fn[It].noConflict = function () {
        return n.fn[It] = kt, Wt._jQueryInterface
    };
    var Ft = "popover", Bt = "bs.popover", Ut = "." + Bt, Vt = n.fn[Ft], Yt = "bs-popover",
        Qt = new RegExp("(^|\\s)" + Yt + "\\S+", "g"), Xt = r({}, Wt.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }), Kt = r({}, Wt.DefaultType, {content: "(string|element|function)"}), Gt = {
            HIDE: "hide" + Ut,
            HIDDEN: "hidden" + Ut,
            SHOW: "show" + Ut,
            SHOWN: "shown" + Ut,
            INSERTED: "inserted" + Ut,
            CLICK: "click" + Ut,
            FOCUSIN: "focusin" + Ut,
            FOCUSOUT: "focusout" + Ut,
            MOUSEENTER: "mouseenter" + Ut,
            MOUSELEAVE: "mouseleave" + Ut
        }, Zt = function (t) {
            var e, i;

            function r() {
                return t.apply(this, arguments) || this
            }

            i = t, (e = r).prototype = Object.create(i.prototype), (e.prototype.constructor = e).__proto__ = i;
            var s = r.prototype;
            return s.isWithContent = function () {
                return this.getTitle() || this._getContent()
            }, s.addAttachmentClass = function (t) {
                n(this.getTipElement()).addClass(Yt + "-" + t)
            }, s.getTipElement = function () {
                return this.tip = this.tip || n(this.config.template)[0], this.tip
            }, s.setContent = function () {
                var t = n(this.getTipElement());
                this.setElementContent(t.find(".popover-header"), this.getTitle());
                var e = this._getContent();
                "function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(".popover-body"), e), t.removeClass("fade show")
            }, s._getContent = function () {
                return this.element.getAttribute("data-content") || this.config.content
            }, s._cleanTipClass = function () {
                var t = n(this.getTipElement()), e = t.attr("class").match(Qt);
                null !== e && 0 < e.length && t.removeClass(e.join(""))
            }, r._jQueryInterface = function (t) {
                return this.each(function () {
                    var e = n(this).data(Bt), i = "object" == typeof t ? t : null;
                    if ((e || !/dispose|hide/.test(t)) && (e || (e = new r(this, i), n(this).data(Bt, e)), "string" == typeof t)) {
                        if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
                        e[t]()
                    }
                })
            }, o(r, null, [{
                key: "VERSION", get: function () {
                    return "4.2.1"
                }
            }, {
                key: "Default", get: function () {
                    return Xt
                }
            }, {
                key: "NAME", get: function () {
                    return Ft
                }
            }, {
                key: "DATA_KEY", get: function () {
                    return Bt
                }
            }, {
                key: "Event", get: function () {
                    return Gt
                }
            }, {
                key: "EVENT_KEY", get: function () {
                    return Ut
                }
            }, {
                key: "DefaultType", get: function () {
                    return Kt
                }
            }]), r
        }(Wt);
    n.fn[Ft] = Zt._jQueryInterface, n.fn[Ft].Constructor = Zt, n.fn[Ft].noConflict = function () {
        return n.fn[Ft] = Vt, Zt._jQueryInterface
    };
    var Jt = "scrollspy", te = "bs.scrollspy", ee = "." + te, ne = n.fn[Jt],
        ie = {offset: 10, method: "auto", target: ""},
        oe = {offset: "number", method: "string", target: "(string|element)"},
        re = {ACTIVATE: "activate" + ee, SCROLL: "scroll" + ee, LOAD_DATA_API: "load" + ee + ".data-api"},
        se = "active", ae = ".nav, .list-group", le = ".nav-link", ue = ".list-group-item", ce = ".dropdown-item",
        he = "position", fe = function () {
            function t(t, e) {
                var i = this;
                this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " " + le + "," + this._config.target + " " + ue + "," + this._config.target + " " + ce, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, n(this._scrollElement).on(re.SCROLL, function (t) {
                    return i._process(t)
                }), this.refresh(), this._process()
            }

            var e = t.prototype;
            return e.refresh = function () {
                var t = this, e = this._scrollElement === this._scrollElement.window ? "offset" : he,
                    i = "auto" === this._config.method ? e : this._config.method, o = i === he ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function (t) {
                    var e, r = a.getSelectorFromElement(t);
                    if (r && (e = document.querySelector(r)), e) {
                        var s = e.getBoundingClientRect();
                        if (s.width || s.height) return [n(e)[i]().top + o, r]
                    }
                    return null
                }).filter(function (t) {
                    return t
                }).sort(function (t, e) {
                    return t[0] - e[0]
                }).forEach(function (e) {
                    t._offsets.push(e[0]), t._targets.push(e[1])
                })
            }, e.dispose = function () {
                n.removeData(this._element, te), n(this._scrollElement).off(ee), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
            }, e._getConfig = function (t) {
                if ("string" != typeof (t = r({}, ie, "object" == typeof t && t ? t : {})).target) {
                    var e = n(t.target).attr("id");
                    e || (e = a.getUID(Jt), n(t.target).attr("id", e)), t.target = "#" + e
                }
                return a.typeCheckConfig(Jt, t, oe), t
            }, e._getScrollTop = function () {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }, e._getScrollHeight = function () {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }, e._getOffsetHeight = function () {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }, e._process = function () {
                var t = this._getScrollTop() + this._config.offset, e = this._getScrollHeight(),
                    n = this._config.offset + e - this._getOffsetHeight();
                if (this._scrollHeight !== e && this.refresh(), n <= t) {
                    var i = this._targets[this._targets.length - 1];
                    this._activeTarget !== i && this._activate(i)
                } else {
                    if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();
                    for (var o = this._offsets.length; o--;) this._activeTarget !== this._targets[o] && t >= this._offsets[o] && (void 0 === this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o])
                }
            }, e._activate = function (t) {
                this._activeTarget = t, this._clear();
                var e = this._selector.split(",").map(function (e) {
                    return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
                }), i = n([].slice.call(document.querySelectorAll(e.join(","))));
                i.hasClass("dropdown-item") ? (i.closest(".dropdown").find(".dropdown-toggle").addClass(se), i.addClass(se)) : (i.addClass(se), i.parents(ae).prev(le + ", " + ue).addClass(se), i.parents(ae).prev(".nav-item").children(le).addClass(se)), n(this._scrollElement).trigger(re.ACTIVATE, {relatedTarget: t})
            }, e._clear = function () {
                [].slice.call(document.querySelectorAll(this._selector)).filter(function (t) {
                    return t.classList.contains(se)
                }).forEach(function (t) {
                    return t.classList.remove(se)
                })
            }, t._jQueryInterface = function (e) {
                return this.each(function () {
                    var i = n(this).data(te);
                    if (i || (i = new t(this, "object" == typeof e && e), n(this).data(te, i)), "string" == typeof e) {
                        if (void 0 === i[e]) throw new TypeError('No method named "' + e + '"');
                        i[e]()
                    }
                })
            }, o(t, null, [{
                key: "VERSION", get: function () {
                    return "4.2.1"
                }
            }, {
                key: "Default", get: function () {
                    return ie
                }
            }]), t
        }();
    n(window).on(re.LOAD_DATA_API, function () {
        for (var t = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), e = t.length; e--;) {
            var i = n(t[e]);
            fe._jQueryInterface.call(i, i.data())
        }
    }), n.fn[Jt] = fe._jQueryInterface, n.fn[Jt].Constructor = fe, n.fn[Jt].noConflict = function () {
        return n.fn[Jt] = ne, fe._jQueryInterface
    };
    var de = "bs.tab", pe = "." + de, me = n.fn.tab, ge = {
        HIDE: "hide" + pe,
        HIDDEN: "hidden" + pe,
        SHOW: "show" + pe,
        SHOWN: "shown" + pe,
        CLICK_DATA_API: "click" + pe + ".data-api"
    }, ve = "active", ye = ".active", be = "> li > .active", _e = function () {
        function t(t) {
            this._element = t
        }

        var e = t.prototype;
        return e.show = function () {
            var t = this;
            if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && n(this._element).hasClass(ve) || n(this._element).hasClass("disabled"))) {
                var e, i, o = n(this._element).closest(".nav, .list-group")[0],
                    r = a.getSelectorFromElement(this._element);
                if (o) {
                    var s = "UL" === o.nodeName || "OL" === o.nodeName ? be : ye;
                    i = (i = n.makeArray(n(o).find(s)))[i.length - 1]
                }
                var l = n.Event(ge.HIDE, {relatedTarget: this._element}), u = n.Event(ge.SHOW, {relatedTarget: i});
                if (i && n(i).trigger(l), n(this._element).trigger(u), !u.isDefaultPrevented() && !l.isDefaultPrevented()) {
                    r && (e = document.querySelector(r)), this._activate(this._element, o);
                    var c = function () {
                        var e = n.Event(ge.HIDDEN, {relatedTarget: t._element}),
                            o = n.Event(ge.SHOWN, {relatedTarget: i});
                        n(i).trigger(e), n(t._element).trigger(o)
                    };
                    e ? this._activate(e, e.parentNode, c) : c()
                }
            }
        }, e.dispose = function () {
            n.removeData(this._element, de), this._element = null
        }, e._activate = function (t, e, i) {
            var o = this, r = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? n(e).children(ye) : n(e).find(be))[0],
                s = i && r && n(r).hasClass("fade"), l = function () {
                    return o._transitionComplete(t, r, i)
                };
            if (r && s) {
                var u = a.getTransitionDurationFromElement(r);
                n(r).removeClass("show").one(a.TRANSITION_END, l).emulateTransitionEnd(u)
            } else l()
        }, e._transitionComplete = function (t, e, i) {
            if (e) {
                n(e).removeClass(ve);
                var o = n(e.parentNode).find("> .dropdown-menu .active")[0];
                o && n(o).removeClass(ve), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
            }
            if (n(t).addClass(ve), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), a.reflow(t), n(t).addClass("show"), t.parentNode && n(t.parentNode).hasClass("dropdown-menu")) {
                var r = n(t).closest(".dropdown")[0];
                if (r) {
                    var s = [].slice.call(r.querySelectorAll(".dropdown-toggle"));
                    n(s).addClass(ve)
                }
                t.setAttribute("aria-expanded", !0)
            }
            i && i()
        }, t._jQueryInterface = function (e) {
            return this.each(function () {
                var i = n(this), o = i.data(de);
                if (o || (o = new t(this), i.data(de, o)), "string" == typeof e) {
                    if (void 0 === o[e]) throw new TypeError('No method named "' + e + '"');
                    o[e]()
                }
            })
        }, o(t, null, [{
            key: "VERSION", get: function () {
                return "4.2.1"
            }
        }]), t
    }();
    n(document).on(ge.CLICK_DATA_API, '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function (t) {
        t.preventDefault(), _e._jQueryInterface.call(n(this), "show")
    }), n.fn.tab = _e._jQueryInterface, n.fn.tab.Constructor = _e, n.fn.tab.noConflict = function () {
        return n.fn.tab = me, _e._jQueryInterface
    };
    var we = "toast", xe = "bs.toast", Ee = "." + xe, Ce = n.fn[we], Te = {
            CLICK_DISMISS: "click.dismiss" + Ee,
            HIDE: "hide" + Ee,
            HIDDEN: "hidden" + Ee,
            SHOW: "show" + Ee,
            SHOWN: "shown" + Ee
        }, Se = "show", Ie = "showing", Ae = {animation: "boolean", autohide: "boolean", delay: "number"},
        De = {animation: !0, autohide: !0, delay: 500}, ke = function () {
            function t(t, e) {
                this._element = t, this._config = this._getConfig(e), this._timeout = null, this._setListeners()
            }

            var e = t.prototype;
            return e.show = function () {
                var t = this;
                n(this._element).trigger(Te.SHOW), this._config.animation && this._element.classList.add("fade");
                var e = function () {
                    t._element.classList.remove(Ie), t._element.classList.add(Se), n(t._element).trigger(Te.SHOWN), t._config.autohide && t.hide()
                };
                if (this._element.classList.remove("hide"), this._element.classList.add(Ie), this._config.animation) {
                    var i = a.getTransitionDurationFromElement(this._element);
                    n(this._element).one(a.TRANSITION_END, e).emulateTransitionEnd(i)
                } else e()
            }, e.hide = function (t) {
                var e = this;
                this._element.classList.contains(Se) && (n(this._element).trigger(Te.HIDE), t ? this._close() : this._timeout = setTimeout(function () {
                    e._close()
                }, this._config.delay))
            }, e.dispose = function () {
                clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(Se) && this._element.classList.remove(Se), n(this._element).off(Te.CLICK_DISMISS), n.removeData(this._element, xe), this._element = null, this._config = null
            }, e._getConfig = function (t) {
                return t = r({}, De, n(this._element).data(), "object" == typeof t && t ? t : {}), a.typeCheckConfig(we, t, this.constructor.DefaultType), t
            }, e._setListeners = function () {
                var t = this;
                n(this._element).on(Te.CLICK_DISMISS, '[data-dismiss="toast"]', function () {
                    return t.hide(!0)
                })
            }, e._close = function () {
                var t = this, e = function () {
                    t._element.classList.add("hide"), n(t._element).trigger(Te.HIDDEN)
                };
                if (this._element.classList.remove(Se), this._config.animation) {
                    var i = a.getTransitionDurationFromElement(this._element);
                    n(this._element).one(a.TRANSITION_END, e).emulateTransitionEnd(i)
                } else e()
            }, t._jQueryInterface = function (e) {
                return this.each(function () {
                    var i = n(this), o = i.data(xe);
                    if (o || (o = new t(this, "object" == typeof e && e), i.data(xe, o)), "string" == typeof e) {
                        if (void 0 === o[e]) throw new TypeError('No method named "' + e + '"');
                        o[e](this)
                    }
                })
            }, o(t, null, [{
                key: "VERSION", get: function () {
                    return "4.2.1"
                }
            }, {
                key: "DefaultType", get: function () {
                    return Ae
                }
            }]), t
        }();
    n.fn[we] = ke._jQueryInterface, n.fn[we].Constructor = ke, n.fn[we].noConflict = function () {
        return n.fn[we] = Ce, ke._jQueryInterface
    }, function () {
        if (void 0 === n) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var t = n.fn.jquery.split(" ")[0].split(".");
        if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || 4 <= t[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
    }(), t.Util = a, t.Alert = d, t.Button = E, t.Carousel = z, t.Collapse = G, t.Dropdown = ft, t.Modal = St, t.Popover = Zt, t.Scrollspy = fe, t.Tab = _e, t.Toast = ke, t.Tooltip = Wt, Object.defineProperty(t, "__esModule", {value: !0})
});
var ScrollReveal = function () {
    "use strict";
    var t = {
        delay: 0,
        distance: "0",
        duration: 600,
        easing: "cubic-bezier(0.5, 0, 0, 1)",
        interval: 0,
        opacity: 0,
        origin: "bottom",
        rotate: {x: 0, y: 0, z: 0},
        scale: 1,
        cleanup: !0,
        container: document.documentElement,
        desktop: !0,
        mobile: !0,
        reset: !1,
        useDelay: "always",
        viewFactor: 0,
        viewOffset: {top: 0, right: 0, bottom: 0, left: 0},
        afterReset: function () {
        },
        afterReveal: function () {
        },
        beforeReset: function () {
        },
        beforeReveal: function () {
        }
    }, e = {
        success: function () {
            document.documentElement.classList.add("sr"), document.body ? document.body.style.height = "100%" : document.addEventListener("DOMContentLoaded", function () {
                document.body.style.height = "100%"
            })
        }, failure: function () {
            return document.documentElement.classList.remove("sr"), {
                clean: function () {
                }, destroy: function () {
                }, reveal: function () {
                }, sync: function () {
                }, get noop() {
                    return !0
                }
            }
        }
    };

    function n(t) {
        return "object" == typeof window.Node ? t instanceof window.Node : null !== t && "object" == typeof t && "number" == typeof t.nodeType && "string" == typeof t.nodeName
    }

    function i(t, e) {
        if (void 0 === e && (e = document), t instanceof Array) return t.filter(n);
        if (n(t)) return [t];
        if (i = t, o = Object.prototype.toString.call(i), "object" == typeof window.NodeList ? i instanceof window.NodeList : null !== i && "object" == typeof i && "number" == typeof i.length && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(o) && (0 === i.length || n(i[0]))) return Array.prototype.slice.call(t);
        var i, o;
        if ("string" == typeof t) try {
            var r = e.querySelectorAll(t);
            return Array.prototype.slice.call(r)
        } catch (t) {
            return []
        }
        return []
    }

    function o(t) {
        return null !== t && t instanceof Object && (t.constructor === Object || "[object Object]" === Object.prototype.toString.call(t))
    }

    function r(t, e) {
        if (o(t)) return Object.keys(t).forEach(function (n) {
            return e(t[n], n, t)
        });
        if (t instanceof Array) return t.forEach(function (n, i) {
            return e(n, i, t)
        });
        throw new TypeError("Expected either an array or object literal.")
    }

    function s(t) {
        for (var e = [], n = arguments.length - 1; 0 < n--;) e[n] = arguments[n + 1];
        if (this.constructor.debug && console) {
            var i = "%cScrollReveal: " + t;
            e.forEach(function (t) {
                return i += "\n ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â " + t
            }), console.log(i, "color: #ea654b;")
        }
    }

    function a() {
        var t = this, e = {active: [], stale: []}, n = {active: [], stale: []}, o = {active: [], stale: []};
        try {
            r(i("[data-sr-id]"), function (t) {
                var n = parseInt(t.getAttribute("data-sr-id"));
                e.active.push(n)
            })
        } catch (t) {
            throw t
        }
        r(this.store.elements, function (t) {
            -1 === e.active.indexOf(t.id) && e.stale.push(t.id)
        }), r(e.stale, function (e) {
            return delete t.store.elements[e]
        }), r(this.store.elements, function (t) {
            -1 === o.active.indexOf(t.containerId) && o.active.push(t.containerId), t.hasOwnProperty("sequence") && -1 === n.active.indexOf(t.sequence.id) && n.active.push(t.sequence.id)
        }), r(this.store.containers, function (t) {
            -1 === o.active.indexOf(t.id) && o.stale.push(t.id)
        }), r(o.stale, function (e) {
            var n = t.store.containers[e].node;
            n.removeEventListener("scroll", t.delegate), n.removeEventListener("resize", t.delegate), delete t.store.containers[e]
        }), r(this.store.sequences, function (t) {
            -1 === n.active.indexOf(t.id) && n.stale.push(t.id)
        }), r(n.stale, function (e) {
            return delete t.store.sequences[e]
        })
    }

    function l(t) {
        var e, n = this;
        try {
            r(i(t), function (t) {
                var i = t.getAttribute("data-sr-id");
                if (null !== i) {
                    e = !0;
                    var o = n.store.elements[i];
                    o.callbackTimer && window.clearTimeout(o.callbackTimer.clock), t.setAttribute("style", o.styles.inline.generated), t.removeAttribute("data-sr-id"), delete n.store.elements[i]
                }
            })
        } catch (t) {
            return s.call(this, "Clean failed.", t.message)
        }
        if (e) try {
            a.call(this)
        } catch (t) {
            return s.call(this, "Clean failed.", t.message)
        }
    }

    function u(t) {
        if (t.constructor !== Array) throw new TypeError("Expected array.");
        if (16 === t.length) return t;
        if (6 === t.length) {
            var e = c();
            return e[0] = t[0], e[1] = t[1], e[4] = t[2], e[5] = t[3], e[12] = t[4], e[13] = t[5], e
        }
        throw new RangeError("Expected array with either 6 or 16 values.")
    }

    function c() {
        for (var t = [], e = 0; e < 16; e++) e % 5 == 0 ? t.push(1) : t.push(0);
        return t
    }

    function h(t, e) {
        for (var n = u(t), i = u(e), o = [], r = 0; r < 4; r++) for (var s = [n[r], n[r + 4], n[r + 8], n[r + 12]], a = 0; a < 4; a++) {
            var l = 4 * a, c = [i[l], i[l + 1], i[l + 2], i[l + 3]],
                h = s[0] * c[0] + s[1] * c[1] + s[2] * c[2] + s[3] * c[3];
            o[r + l] = h
        }
        return o
    }

    function f(t, e) {
        var n = c();
        return n[0] = t, n[5] = "number" == typeof e ? e : t, n
    }

    var d = function () {
        var t = {}, e = document.documentElement.style;

        function n(n, i) {
            if (void 0 === i && (i = e), n && "string" == typeof n) {
                if (t[n]) return t[n];
                if ("string" == typeof i[n]) return t[n] = n;
                if ("string" == typeof i["-webkit-" + n]) return t[n] = "-webkit-" + n;
                throw new RangeError('Unable to find "' + n + '" style property.')
            }
            throw new TypeError("Expected a string.")
        }

        return n.clearCache = function () {
            return t = {}
        }, n
    }();

    function p(t, e) {
        void 0 === e && (e = {});
        var n = e.pristine || this.pristine,
            i = "always" === t.config.useDelay || "onload" === t.config.useDelay && n || "once" === t.config.useDelay && !t.seen,
            o = t.visible && !t.revealed, r = !t.visible && t.revealed && t.config.reset;
        return e.reveal || o ? function (t, e) {
            var n = [t.styles.inline.generated, t.styles.opacity.computed, t.styles.transform.generated.final];
            e ? n.push(t.styles.transition.generated.delayed) : n.push(t.styles.transition.generated.instant), t.revealed = t.seen = !0, t.node.setAttribute("style", n.filter(function (t) {
                return "" !== t
            }).join(" ")), m.call(this, t, e)
        }.call(this, t, i) : e.reset || r ? function (t) {
            var e = [t.styles.inline.generated, t.styles.opacity.generated, t.styles.transform.generated.initial, t.styles.transition.generated.instant];
            t.revealed = !1, t.node.setAttribute("style", e.filter(function (t) {
                return "" !== t
            }).join(" ")), m.call(this, t)
        }.call(this, t) : void 0
    }

    function m(t, e) {
        var n = this, i = e ? t.config.duration + t.config.delay : t.config.duration,
            o = t.revealed ? t.config.beforeReveal : t.config.beforeReset,
            r = t.revealed ? t.config.afterReveal : t.config.afterReset, s = 0;
        t.callbackTimer && (s = Date.now() - t.callbackTimer.start, window.clearTimeout(t.callbackTimer.clock)), o(t.node), t.callbackTimer = {
            start: Date.now(),
            clock: window.setTimeout(function () {
                r(t.node), t.callbackTimer = null, t.revealed && !t.config.reset && t.config.cleanup && l.call(n, t.node)
            }, i - s)
        }
    }

    var g, v = (g = 0, function () {
        return g++
    });

    function y(t, e) {
        if (void 0 === e && (e = this.pristine), !t.visible && t.revealed && t.config.reset) return p.call(this, t, {reset: !0});
        var n = this.store.sequences[t.sequence.id], i = t.sequence.index;
        if (n) {
            var o = new _(n, "visible", this.store), r = new _(n, "revealed", this.store);
            if (n.models = {visible: o, revealed: r}, !r.body.length) {
                var s = n.members[o.body[0]], a = this.store.elements[s];
                if (a) return w.call(this, n, o.body[0], -1, e), w.call(this, n, o.body[0], 1, e), p.call(this, a, {
                    reveal: !0,
                    pristine: e
                })
            }
            if (!n.blocked.head && i === [].concat(r.head).pop() && i >= [].concat(o.body).shift()) return w.call(this, n, i, -1, e), p.call(this, t, {
                reveal: !0,
                pristine: e
            });
            if (!n.blocked.foot && i === [].concat(r.foot).shift() && i <= [].concat(o.body).pop()) return w.call(this, n, i, 1, e), p.call(this, t, {
                reveal: !0,
                pristine: e
            })
        }
    }

    function b(t) {
        var e = Math.abs(t);
        if (isNaN(e)) throw new RangeError("Invalid sequence interval.");
        this.id = v(), this.interval = Math.max(e, 16), this.members = [], this.models = {}, this.blocked = {
            head: !1,
            foot: !1
        }
    }

    function _(t, e, n) {
        var i = this;
        this.head = [], this.body = [], this.foot = [], r(t.members, function (t, o) {
            var r = n.elements[t];
            r && r[e] && i.body.push(o)
        }), this.body.length && r(t.members, function (t, o) {
            var r = n.elements[t];
            r && !r[e] && (o < i.body[0] ? i.head.push(o) : i.foot.push(o))
        })
    }

    function w(t, e, n, i) {
        var o = this, r = ["head", null, "foot"][1 + n], s = t.members[e + n], a = this.store.elements[s];
        t.blocked[r] = !0, setTimeout(function () {
            t.blocked[r] = !1, a && y.call(o, a, i)
        }, t.interval)
    }

    function x() {
        var t = this;
        a.call(this), r(this.store.elements, function (t) {
            var e = [t.styles.inline.generated];
            t.visible ? (e.push(t.styles.opacity.computed), e.push(t.styles.transform.generated.final)) : (e.push(t.styles.opacity.generated), e.push(t.styles.transform.generated.initial)), t.node.setAttribute("style", e.filter(function (t) {
                return "" !== t
            }).join(" "))
        }), r(this.store.containers, function (e) {
            var n = e.node === document.documentElement ? window : e.node;
            n.addEventListener("scroll", t.delegate), n.addEventListener("resize", t.delegate)
        }), this.delegate(), this.initTimeout = null
    }

    function E(t) {
        return void 0 === t && (t = navigator.userAgent), /Android|iPhone|iPad|iPod/i.test(t)
    }

    function C(t) {
        for (var e = [], n = arguments.length - 1; 0 < n--;) e[n] = arguments[n + 1];
        if (o(t)) return r(e, function (e) {
            r(e, function (e, n) {
                o(e) ? (t[n] && o(t[n]) || (t[n] = {}), C(t[n], e)) : t[n] = e
            })
        }), t;
        throw new TypeError("Target must be an object literal.")
    }

    function T(e, n, o) {
        var a = this;
        void 0 === n && (n = {}), void 0 === o && (o = !1);
        var p, m = [], g = n.interval || t.interval;
        try {
            g && (p = new b(g));
            var y = i(e);
            if (!y.length) throw new Error("Invalid reveal target.");
            r(y.reduce(function (t, e) {
                var o = {}, s = e.getAttribute("data-sr-id");
                s ? (C(o, a.store.elements[s]), o.node.setAttribute("style", o.styles.inline.computed)) : (o.id = v(), o.node = e, o.seen = !1, o.revealed = !1, o.visible = !1);
                var g = C({}, o.config || a.defaults, n);
                if (!g.mobile && E() || !g.desktop && !E()) return s && l.call(a, o), t;
                var y, b = i(g.container)[0];
                if (!b) throw new Error("Invalid container.");
                return b.contains(e) && (null === (y = function (t) {
                    for (var e = [], n = arguments.length - 1; 0 < n--;) e[n] = arguments[n + 1];
                    var i = null;
                    return r(e, function (e) {
                        r(e, function (e) {
                            null === i && e.node === t && (i = e.id)
                        })
                    }), i
                }(b, m, a.store.containers)) && (y = v(), m.push({
                    id: y,
                    node: b
                })), o.config = g, o.containerId = y, o.styles = function (t) {
                    var e = window.getComputedStyle(t.node), n = e.position, i = t.config, o = {},
                        r = (t.node.getAttribute("style") || "").match(/[\w-]+\s*:\s*[^;]+\s*/gi) || [];
                    o.computed = r ? r.map(function (t) {
                        return t.trim()
                    }).join("; ") + ";" : "", o.generated = r.some(function (t) {
                        return t.match(/visibility\s?:\s?visible/i)
                    }) ? o.computed : r.concat(["visibility: visible"]).map(function (t) {
                        return t.trim()
                    }).join("; ") + ";";
                    var s, a, l, p, m, g, v, y, b, _, w, x, E, C = parseFloat(e.opacity),
                        T = isNaN(parseFloat(i.opacity)) ? parseFloat(e.opacity) : parseFloat(i.opacity), S = {
                            computed: C !== T ? "opacity: " + C + ";" : "",
                            generated: C !== T ? "opacity: " + T + ";" : ""
                        }, I = [];
                    if (parseFloat(i.distance)) {
                        var A = "top" === i.origin || "bottom" === i.origin ? "Y" : "X", D = i.distance;
                        "top" !== i.origin && "left" !== i.origin || (D = /^-/.test(D) ? D.substr(1) : "-" + D);
                        var k = D.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g), O = k[0];
                        switch (k[1]) {
                            case "em":
                                D = parseInt(e.fontSize) * O;
                                break;
                            case "px":
                                D = O;
                                break;
                            case "%":
                                D = "Y" === A ? t.node.getBoundingClientRect().height * O / 100 : t.node.getBoundingClientRect().width * O / 100;
                                break;
                            default:
                                throw new RangeError("Unrecognized or missing distance unit.")
                        }
                        "Y" === A ? I.push((l = D, (p = c())[13] = l, p)) : I.push((s = D, (a = c())[12] = s, a))
                    }
                    i.rotate.x && I.push((m = i.rotate.x, g = Math.PI / 180 * m, (v = c())[5] = v[10] = Math.cos(g), v[6] = v[9] = Math.sin(g), v[9] *= -1, v)), i.rotate.y && I.push((y = i.rotate.y, b = Math.PI / 180 * y, (_ = c())[0] = _[10] = Math.cos(b), _[2] = _[8] = Math.sin(b), _[2] *= -1, _)), i.rotate.z && I.push((w = i.rotate.z, x = Math.PI / 180 * w, (E = c())[0] = E[5] = Math.cos(x), E[1] = E[4] = Math.sin(x), E[4] *= -1, E)), 1 !== i.scale && (0 === i.scale ? I.push(f(2e-4)) : I.push(f(i.scale)));
                    var j = {};
                    if (I.length) {
                        j.property = d("transform"), j.computed = {
                            raw: e[j.property], matrix: function (t) {
                                if ("string" == typeof t) {
                                    var e = t.match(/matrix(3d)?\(([^)]+)\)/);
                                    if (e) return u(e[2].split(", ").map(parseFloat))
                                }
                                return c()
                            }(e[j.property])
                        }, I.unshift(j.computed.matrix);
                        var L = I.reduce(h);
                        j.generated = {
                            initial: j.property + ": matrix3d(" + L.join(", ") + ");",
                            final: j.property + ": matrix3d(" + j.computed.matrix.join(", ") + ");"
                        }
                    } else j.generated = {initial: "", final: ""};
                    var N = {};
                    if (S.generated || j.generated.initial) {
                        N.property = d("transition"), N.computed = e[N.property], N.fragments = [];
                        var P = i.delay, M = i.duration, R = i.easing;
                        S.generated && N.fragments.push({
                            delayed: "opacity " + M / 1e3 + "s " + R + " " + P / 1e3 + "s",
                            instant: "opacity " + M / 1e3 + "s " + R + " 0s"
                        }), j.generated.initial && N.fragments.push({
                            delayed: j.property + " " + M / 1e3 + "s " + R + " " + P / 1e3 + "s",
                            instant: j.property + " " + M / 1e3 + "s " + R + " 0s"
                        }), N.computed && !N.computed.match(/all 0s/) && N.fragments.unshift({
                            delayed: N.computed,
                            instant: N.computed
                        });
                        var z = N.fragments.reduce(function (t, e, n) {
                            return t.delayed += 0 === n ? e.delayed : ", " + e.delayed, t.instant += 0 === n ? e.instant : ", " + e.instant, t
                        }, {delayed: "", instant: ""});
                        N.generated = {
                            delayed: N.property + ": " + z.delayed + ";",
                            instant: N.property + ": " + z.instant + ";"
                        }
                    } else N.generated = {delayed: "", instant: ""};
                    return {inline: o, opacity: S, position: n, transform: j, transition: N}
                }(o), p && (o.sequence = {id: p.id, index: p.members.length}, p.members.push(o.id)), t.push(o)), t
            }, []), function (t) {
                (a.store.elements[t.id] = t).node.setAttribute("data-sr-id", t.id)
            })
        } catch (e) {
            return s.call(this, "Reveal failed.", e.message)
        }
        r(m, function (t) {
            a.store.containers[t.id] = {id: t.id, node: t.node}
        }), p && (this.store.sequences[p.id] = p), !0 !== o && (this.store.history.push({
            target: e,
            options: n
        }), this.initTimeout && window.clearTimeout(this.initTimeout), this.initTimeout = window.setTimeout(x.bind(this), 0))
    }

    var S, I = Math.sign || function (t) {
        return (0 < t) - (t < 0) || +t
    }, A = (S = Date.now(), function (t) {
        var e = Date.now();
        16 < e - S ? t(S = e) : setTimeout(function () {
            return A(t)
        }, 0)
    }), D = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || A;

    function k(t, e) {
        for (var n = e ? t.node.clientHeight : t.node.offsetHeight, i = e ? t.node.clientWidth : t.node.offsetWidth, o = 0, r = 0, s = t.node; isNaN(s.offsetTop) || (o += s.offsetTop), isNaN(s.offsetLeft) || (r += s.offsetLeft), s = s.offsetParent;) ;
        return {bounds: {top: o, right: r + i, bottom: o + n, left: r}, height: n, width: i}
    }

    var O, j, L, N, P, M, R, z, H = "4.0.2";

    function q(n) {
        var o;
        if (void 0 === n && (n = {}), void 0 === this || Object.getPrototypeOf(this) !== q.prototype) return new q(n);
        if (!q.isSupported()) return s.call(this, "Instantiation failed.", "This browser is not supported."), e.failure();
        try {
            o = C({}, M || t, n)
        } catch (n) {
            return s.call(this, "Invalid configuration.", n.message), e.failure()
        }
        try {
            if (!i(o.container)[0]) throw new Error("Invalid container.")
        } catch (n) {
            return s.call(this, n.message), e.failure()
        }
        return !(M = o).mobile && E() || !M.desktop && !E() ? (s.call(this, "This device is disabled.", "desktop: " + M.desktop, "mobile: " + M.mobile), e.failure()) : (e.success(), this.store = {
            containers: {},
            elements: {},
            history: [],
            sequences: {}
        }, this.pristine = !0, O = O || function (t, e) {
            var n = this;
            void 0 === t && (t = {type: "init"}), void 0 === e && (e = this.store.elements), D(function () {
                var i = "init" === t.type || "resize" === t.type;
                r(n.store.containers, function (t) {
                    i && (t.geometry = k.call(n, t, !0));
                    var e = function (t) {
                        var e, n;
                        return t.node === document.documentElement ? (e = window.pageYOffset, n = window.pageXOffset) : (e = t.node.scrollTop, n = t.node.scrollLeft), {
                            top: e,
                            left: n
                        }
                    }.call(n, t);
                    t.scroll && (t.direction = {x: I(e.left - t.scroll.left), y: I(e.top - t.scroll.top)}), t.scroll = e
                }), r(e, function (t) {
                    i && (t.geometry = k.call(n, t)), t.visible = function (t) {
                        void 0 === t && (t = {});
                        var e = this.store.containers[t.containerId];
                        if (e) {
                            var n = Math.max(0, Math.min(1, t.config.viewFactor)), i = t.config.viewOffset,
                                o = t.geometry.bounds.top + t.geometry.height * n,
                                r = t.geometry.bounds.right - t.geometry.width * n,
                                s = t.geometry.bounds.bottom - t.geometry.height * n,
                                a = t.geometry.bounds.left + t.geometry.width * n,
                                l = e.geometry.bounds.top + e.scroll.top + i.top,
                                u = e.geometry.bounds.right + e.scroll.left - i.right,
                                c = e.geometry.bounds.bottom + e.scroll.top - i.bottom,
                                h = e.geometry.bounds.left + e.scroll.left + i.left;
                            return o < c && h < r && l < s && a < u || "fixed" === t.styles.position
                        }
                    }.call(n, t)
                }), r(e, function (t) {
                    t.sequence ? y.call(n, t) : p.call(n, t)
                }), n.pristine = !1
            })
        }.bind(this), j = j || function () {
            var t = this;
            r(this.store.elements, function (t) {
                t.node.setAttribute("style", t.styles.inline.generated), t.node.removeAttribute("data-sr-id")
            }), r(this.store.containers, function (e) {
                var n = e.node === document.documentElement ? window : e.node;
                n.removeEventListener("scroll", t.delegate), n.removeEventListener("resize", t.delegate)
            }), this.store = {containers: {}, elements: {}, history: [], sequences: {}}
        }.bind(this), L = L || T.bind(this), N = N || l.bind(this), P = P || function () {
            var t = this;
            r(this.store.history, function (e) {
                T.call(t, e.target, e.options, !0)
            }), x.call(this)
        }.bind(this), Object.defineProperty(this, "delegate", {
            get: function () {
                return O
            }
        }), Object.defineProperty(this, "destroy", {
            get: function () {
                return j
            }
        }), Object.defineProperty(this, "reveal", {
            get: function () {
                return L
            }
        }), Object.defineProperty(this, "clean", {
            get: function () {
                return N
            }
        }), Object.defineProperty(this, "sync", {
            get: function () {
                return P
            }
        }), Object.defineProperty(this, "defaults", {
            get: function () {
                return M
            }
        }), Object.defineProperty(this, "version", {
            get: function () {
                return H
            }
        }), Object.defineProperty(this, "noop", {
            get: function () {
                return !1
            }
        }), z || (z = this))
    }

    return q.isSupported = function () {
        return ("transform" in (e = document.documentElement.style) || "WebkitTransform" in e) && ("transition" in (t = document.documentElement.style) || "WebkitTransition" in t);
        var t, e
    }, Object.defineProperty(q, "debug", {
        get: function () {
            return R || !1
        }, set: function (t) {
            return R = "boolean" == typeof t ? t : R
        }
    }), q(), q
}();
(function () {
    function t() {
    }

    function e(t, e) {
        for (var n = t.length; n--;) if (t[n].listener === e) return n;
        return -1
    }

    function n(t) {
        return function () {
            return this[t].apply(this, arguments)
        }
    }

    var i = t.prototype, o = this, r = o.EventEmitter;
    i.getListeners = function (t) {
        var e, n, i = this._getEvents();
        if ("object" == typeof t) for (n in e = {}, i) i.hasOwnProperty(n) && t.test(n) && (e[n] = i[n]); else e = i[t] || (i[t] = []);
        return e
    }, i.flattenListeners = function (t) {
        var e, n = [];
        for (e = 0; t.length > e; e += 1) n.push(t[e].listener);
        return n
    }, i.getListenersAsObject = function (t) {
        var e, n = this.getListeners(t);
        return n instanceof Array && ((e = {})[t] = n), e || n
    }, i.addListener = function (t, n) {
        var i, o = this.getListenersAsObject(t), r = "object" == typeof n;
        for (i in o) o.hasOwnProperty(i) && -1 === e(o[i], n) && o[i].push(r ? n : {listener: n, once: !1});
        return this
    }, i.on = n("addListener"), i.addOnceListener = function (t, e) {
        return this.addListener(t, {listener: e, once: !0})
    }, i.once = n("addOnceListener"), i.defineEvent = function (t) {
        return this.getListeners(t), this
    }, i.defineEvents = function (t) {
        for (var e = 0; t.length > e; e += 1) this.defineEvent(t[e]);
        return this
    }, i.removeListener = function (t, n) {
        var i, o, r = this.getListenersAsObject(t);
        for (o in r) r.hasOwnProperty(o) && (-1 !== (i = e(r[o], n)) && r[o].splice(i, 1));
        return this
    }, i.off = n("removeListener"), i.addListeners = function (t, e) {
        return this.manipulateListeners(!1, t, e)
    }, i.removeListeners = function (t, e) {
        return this.manipulateListeners(!0, t, e)
    }, i.manipulateListeners = function (t, e, n) {
        var i, o, r = t ? this.removeListener : this.addListener, s = t ? this.removeListeners : this.addListeners;
        if ("object" != typeof e || e instanceof RegExp) for (i = n.length; i--;) r.call(this, e, n[i]); else for (i in e) e.hasOwnProperty(i) && (o = e[i]) && ("function" == typeof o ? r.call(this, i, o) : s.call(this, i, o));
        return this
    }, i.removeEvent = function (t) {
        var e, n = typeof t, i = this._getEvents();
        if ("string" === n) delete i[t]; else if ("object" === n) for (e in i) i.hasOwnProperty(e) && t.test(e) && delete i[e]; else delete this._events;
        return this
    }, i.removeAllListeners = n("removeEvent"), i.emitEvent = function (t, e) {
        var n, i, o, r = this.getListenersAsObject(t);
        for (o in r) if (r.hasOwnProperty(o)) for (i = r[o].length; i--;) !0 === (n = r[o][i]).once && this.removeListener(t, n.listener), n.listener.apply(this, e || []) === this._getOnceReturnValue() && this.removeListener(t, n.listener);
        return this
    }, i.trigger = n("emitEvent"), i.emit = function (t) {
        var e = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(t, e)
    }, i.setOnceReturnValue = function (t) {
        return this._onceReturnValue = t, this
    }, i._getOnceReturnValue = function () {
        return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
    }, i._getEvents = function () {
        return this._events || (this._events = {})
    }, t.noConflict = function () {
        return o.EventEmitter = r, t
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () {
        return t
    }) : "object" == typeof module && module.exports ? module.exports = t : this.EventEmitter = t
}).call(this), function (t) {
    function e(e) {
        var n = t.event;
        return n.target = n.target || n.srcElement || e, n
    }

    var n = document.documentElement, i = function () {
    };
    n.addEventListener ? i = function (t, e, n) {
        t.addEventListener(e, n, !1)
    } : n.attachEvent && (i = function (t, n, i) {
        t[n + i] = i.handleEvent ? function () {
            var n = e(t);
            i.handleEvent.call(i, n)
        } : function () {
            var n = e(t);
            i.call(t, n)
        }, t.attachEvent("on" + n, t[n + i])
    });
    var o = function () {
    };
    n.removeEventListener ? o = function (t, e, n) {
        t.removeEventListener(e, n, !1)
    } : n.detachEvent && (o = function (t, e, n) {
        t.detachEvent("on" + e, t[e + n]);
        try {
            delete t[e + n]
        } catch (i) {
            t[e + n] = void 0
        }
    });
    var r = {bind: i, unbind: o};
    "function" == typeof define && define.amd ? define("eventie/eventie", r) : t.eventie = r
}(this), function (t, e) {
    "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function (n, i) {
        return e(t, n, i)
    }) : "object" == typeof exports ? module.exports = e(t, require("wolfy87-eventemitter"), require("eventie")) : t.imagesLoaded = e(t, t.EventEmitter, t.eventie)
}(window, function (t, e, n) {
    function i(t, e) {
        for (var n in e) t[n] = e[n];
        return t
    }

    function o(t) {
        var e = [];
        if (function (t) {
            return "[object Array]" === h.call(t)
        }(t)) e = t; else if ("number" == typeof t.length) for (var n = 0, i = t.length; i > n; n++) e.push(t[n]); else e.push(t);
        return e
    }

    function r(t, e, n) {
        if (!(this instanceof r)) return new r(t, e);
        "string" == typeof t && (t = document.querySelectorAll(t)), this.elements = o(t), this.options = i({}, this.options), "function" == typeof e ? n = e : i(this.options, e), n && this.on("always", n), this.getImages(), l && (this.jqDeferred = new l.Deferred);
        var s = this;
        setTimeout(function () {
            s.check()
        })
    }

    function s(t) {
        this.img = t
    }

    function a(t) {
        this.src = t, f[t] = this
    }

    var l = t.jQuery, u = t.console, c = void 0 !== u, h = Object.prototype.toString;
    r.prototype = new e, r.prototype.options = {}, r.prototype.getImages = function () {
        this.images = [];
        for (var t = 0, e = this.elements.length; e > t; t++) {
            var n = this.elements[t];
            "IMG" === n.nodeName && this.addImage(n);
            var i = n.nodeType;
            if (i && (1 === i || 9 === i || 11 === i)) for (var o = n.querySelectorAll("img"), r = 0, s = o.length; s > r; r++) {
                var a = o[r];
                this.addImage(a)
            }
        }
    }, r.prototype.addImage = function (t) {
        var e = new s(t);
        this.images.push(e)
    }, r.prototype.check = function () {
        function t(t, o) {
            return e.options.debug && c && u.log("confirm", t, o), e.progress(t), ++n === i && e.complete(), !0
        }

        var e = this, n = 0, i = this.images.length;
        if (this.hasAnyBroken = !1, i) for (var o = 0; i > o; o++) {
            var r = this.images[o];
            r.on("confirm", t), r.check()
        } else this.complete()
    }, r.prototype.progress = function (t) {
        this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded;
        var e = this;
        setTimeout(function () {
            e.emit("progress", e, t), e.jqDeferred && e.jqDeferred.notify && e.jqDeferred.notify(e, t)
        })
    }, r.prototype.complete = function () {
        var t = this.hasAnyBroken ? "fail" : "done";
        this.isComplete = !0;
        var e = this;
        setTimeout(function () {
            if (e.emit(t, e), e.emit("always", e), e.jqDeferred) {
                var n = e.hasAnyBroken ? "reject" : "resolve";
                e.jqDeferred[n](e)
            }
        })
    }, l && (l.fn.imagesLoaded = function (t, e) {
        return new r(this, t, e).jqDeferred.promise(l(this))
    }), s.prototype = new e, s.prototype.check = function () {
        var t = f[this.img.src] || new a(this.img.src);
        if (t.isConfirmed) this.confirm(t.isLoaded, "cached was confirmed"); else if (this.img.complete && void 0 !== this.img.naturalWidth) this.confirm(0 !== this.img.naturalWidth, "naturalWidth"); else {
            var e = this;
            t.on("confirm", function (t, n) {
                return e.confirm(t.isLoaded, n), !0
            }), t.check()
        }
    }, s.prototype.confirm = function (t, e) {
        this.isLoaded = t, this.emit("confirm", this, e)
    };
    var f = {};
    return a.prototype = new e, a.prototype.check = function () {
        if (!this.isChecked) {
            var t = new Image;
            n.bind(t, "load", this), n.bind(t, "error", this), t.src = this.src, this.isChecked = !0
        }
    }, a.prototype.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, a.prototype.onload = function (t) {
        this.confirm(!0, "onload"), this.unbindProxyEvents(t)
    }, a.prototype.onerror = function (t) {
        this.confirm(!1, "onerror"), this.unbindProxyEvents(t)
    }, a.prototype.confirm = function (t, e) {
        this.isConfirmed = !0, this.isLoaded = t, this.emit("confirm", this, e)
    }, a.prototype.unbindProxyEvents = function (t) {
        n.unbind(t.target, "load", this), n.unbind(t.target, "error", this)
    }, r
}), function (t) {
    function e() {
    }

    function n(t) {
        function n(e) {
            e.prototype.option || (e.prototype.option = function (e) {
                t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e))
            })
        }

        function o(e, n) {
            t.fn[e] = function (o) {
                if ("string" == typeof o) {
                    for (var s = i.call(arguments, 1), a = 0, l = this.length; l > a; a++) {
                        var u = this[a], c = t.data(u, e);
                        if (c) if (t.isFunction(c[o]) && "_" !== o.charAt(0)) {
                            var h = c[o].apply(c, s);
                            if (void 0 !== h) return h
                        } else r("no such method '" + o + "' for " + e + " instance"); else r("cannot call methods on " + e + " prior to initialization; attempted to call '" + o + "'")
                    }
                    return this
                }
                return this.each(function () {
                    var i = t.data(this, e);
                    i ? (i.option(o), i._init()) : (i = new n(this, o), t.data(this, e, i))
                })
            }
        }

        if (t) {
            var r = "undefined" == typeof console ? e : function (t) {
                console.error(t)
            };
            return t.bridget = function (t, e) {
                n(e), o(t, e)
            }, t.bridget
        }
    }

    var i = Array.prototype.slice;
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], n) : n("object" == typeof exports ? require("jquery") : t.jQuery)
}(window), function (t) {
    function e(e) {
        var n = t.event;
        return n.target = n.target || n.srcElement || e, n
    }

    var n = document.documentElement, i = function () {
    };
    n.addEventListener ? i = function (t, e, n) {
        t.addEventListener(e, n, !1)
    } : n.attachEvent && (i = function (t, n, i) {
        t[n + i] = i.handleEvent ? function () {
            var n = e(t);
            i.handleEvent.call(i, n)
        } : function () {
            var n = e(t);
            i.call(t, n)
        }, t.attachEvent("on" + n, t[n + i])
    });
    var o = function () {
    };
    n.removeEventListener ? o = function (t, e, n) {
        t.removeEventListener(e, n, !1)
    } : n.detachEvent && (o = function (t, e, n) {
        t.detachEvent("on" + e, t[e + n]);
        try {
            delete t[e + n]
        } catch (i) {
            t[e + n] = void 0
        }
    });
    var r = {bind: i, unbind: o};
    "function" == typeof define && define.amd ? define("eventie/eventie", r) : "object" == typeof exports ? module.exports = r : t.eventie = r
}(window), function () {
    function t() {
    }

    function e(t, e) {
        for (var n = t.length; n--;) if (t[n].listener === e) return n;
        return -1
    }

    function n(t) {
        return function () {
            return this[t].apply(this, arguments)
        }
    }

    var i = t.prototype, o = this, r = o.EventEmitter;
    i.getListeners = function (t) {
        var e, n, i = this._getEvents();
        if (t instanceof RegExp) for (n in e = {}, i) i.hasOwnProperty(n) && t.test(n) && (e[n] = i[n]); else e = i[t] || (i[t] = []);
        return e
    }, i.flattenListeners = function (t) {
        var e, n = [];
        for (e = 0; e < t.length; e += 1) n.push(t[e].listener);
        return n
    }, i.getListenersAsObject = function (t) {
        var e, n = this.getListeners(t);
        return n instanceof Array && ((e = {})[t] = n), e || n
    }, i.addListener = function (t, n) {
        var i, o = this.getListenersAsObject(t), r = "object" == typeof n;
        for (i in o) o.hasOwnProperty(i) && -1 === e(o[i], n) && o[i].push(r ? n : {listener: n, once: !1});
        return this
    }, i.on = n("addListener"), i.addOnceListener = function (t, e) {
        return this.addListener(t, {listener: e, once: !0})
    }, i.once = n("addOnceListener"), i.defineEvent = function (t) {
        return this.getListeners(t), this
    }, i.defineEvents = function (t) {
        for (var e = 0; e < t.length; e += 1) this.defineEvent(t[e]);
        return this
    }, i.removeListener = function (t, n) {
        var i, o, r = this.getListenersAsObject(t);
        for (o in r) r.hasOwnProperty(o) && (-1 !== (i = e(r[o], n)) && r[o].splice(i, 1));
        return this
    }, i.off = n("removeListener"), i.addListeners = function (t, e) {
        return this.manipulateListeners(!1, t, e)
    }, i.removeListeners = function (t, e) {
        return this.manipulateListeners(!0, t, e)
    }, i.manipulateListeners = function (t, e, n) {
        var i, o, r = t ? this.removeListener : this.addListener, s = t ? this.removeListeners : this.addListeners;
        if ("object" != typeof e || e instanceof RegExp) for (i = n.length; i--;) r.call(this, e, n[i]); else for (i in e) e.hasOwnProperty(i) && (o = e[i]) && ("function" == typeof o ? r.call(this, i, o) : s.call(this, i, o));
        return this
    }, i.removeEvent = function (t) {
        var e, n = typeof t, i = this._getEvents();
        if ("string" === n) delete i[t]; else if (t instanceof RegExp) for (e in i) i.hasOwnProperty(e) && t.test(e) && delete i[e]; else delete this._events;
        return this
    }, i.removeAllListeners = n("removeEvent"), i.emitEvent = function (t, e) {
        var n, i, o, r = this.getListenersAsObject(t);
        for (o in r) if (r.hasOwnProperty(o)) for (i = r[o].length; i--;) !0 === (n = r[o][i]).once && this.removeListener(t, n.listener), n.listener.apply(this, e || []) === this._getOnceReturnValue() && this.removeListener(t, n.listener);
        return this
    }, i.trigger = n("emitEvent"), i.emit = function (t) {
        var e = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(t, e)
    }, i.setOnceReturnValue = function (t) {
        return this._onceReturnValue = t, this
    }, i._getOnceReturnValue = function () {
        return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
    }, i._getEvents = function () {
        return this._events || (this._events = {})
    }, t.noConflict = function () {
        return o.EventEmitter = r, t
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () {
        return t
    }) : "object" == typeof module && module.exports ? module.exports = t : o.EventEmitter = t
}.call(this), function (t) {
    function e(t) {
        if (t) {
            if ("string" == typeof i[t]) return t;
            t = t.charAt(0).toUpperCase() + t.slice(1);
            for (var e, o = 0, r = n.length; r > o; o++) if (e = n[o] + t, "string" == typeof i[e]) return e
        }
    }

    var n = "Webkit Moz ms Ms O".split(" "), i = document.documentElement.style;
    "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function () {
        return e
    }) : "object" == typeof exports ? module.exports = e : t.getStyleProperty = e
}(window), function (t) {
    function e(t) {
        var e = parseFloat(t);
        return -1 === t.indexOf("%") && !isNaN(e) && e
    }

    function n(n) {
        function r() {
            if (!c) {
                c = !0;
                var o = t.getComputedStyle;
                if (a = function () {
                    var t = o ? function (t) {
                        return o(t, null)
                    } : function (t) {
                        return t.currentStyle
                    };
                    return function (e) {
                        var n = t(e);
                        return n || i("Style returned " + n + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), n
                    }
                }(), l = n("boxSizing")) {
                    var r = document.createElement("div");
                    r.style.width = "200px", r.style.padding = "1px 2px 3px 4px", r.style.borderStyle = "solid", r.style.borderWidth = "1px 2px 3px 4px", r.style[l] = "border-box";
                    var s = document.body || document.documentElement;
                    s.appendChild(r);
                    var h = a(r);
                    u = 200 === e(h.width), s.removeChild(r)
                }
            }
        }

        function s(e, n) {
            if (t.getComputedStyle || -1 === n.indexOf("%")) return n;
            var i = e.style, o = i.left, r = e.runtimeStyle, s = r && r.left;
            return s && (r.left = e.currentStyle.left), i.left = n, n = i.pixelLeft, i.left = o, s && (r.left = s), n
        }

        var a, l, u, c = !1;
        return function (t) {
            if (r(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
                var n = a(t);
                if ("none" === n.display) return function () {
                    for (var t = {
                        width: 0,
                        height: 0,
                        innerWidth: 0,
                        innerHeight: 0,
                        outerWidth: 0,
                        outerHeight: 0
                    }, e = 0, n = o.length; n > e; e++) t[o[e]] = 0;
                    return t
                }();
                var i = {};
                i.width = t.offsetWidth, i.height = t.offsetHeight;
                for (var c = i.isBorderBox = !(!l || !n[l] || "border-box" !== n[l]), h = 0, f = o.length; f > h; h++) {
                    var d = o[h], p = n[d];
                    p = s(t, p);
                    var m = parseFloat(p);
                    i[d] = isNaN(m) ? 0 : m
                }
                var g = i.paddingLeft + i.paddingRight, v = i.paddingTop + i.paddingBottom,
                    y = i.marginLeft + i.marginRight, b = i.marginTop + i.marginBottom,
                    _ = i.borderLeftWidth + i.borderRightWidth, w = i.borderTopWidth + i.borderBottomWidth, x = c && u,
                    E = e(n.width);
                !1 !== E && (i.width = E + (x ? 0 : g + _));
                var C = e(n.height);
                return !1 !== C && (i.height = C + (x ? 0 : v + w)), i.innerWidth = i.width - (g + _), i.innerHeight = i.height - (v + w), i.outerWidth = i.width + y, i.outerHeight = i.height + b, i
            }
        }
    }

    var i = "undefined" == typeof console ? function () {
        } : function (t) {
            console.error(t)
        },
        o = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
    "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], n) : "object" == typeof exports ? module.exports = n(require("desandro-get-style-property")) : t.getSize = n(t.getStyleProperty)
}(window), function (t) {
    function e(t) {
        "function" == typeof t && (e.isReady ? t() : s.push(t))
    }

    function n(t) {
        var n = "readystatechange" === t.type && "complete" !== r.readyState;
        e.isReady || n || i()
    }

    function i() {
        e.isReady = !0;
        for (var t = 0, n = s.length; n > t; t++) {
            (0, s[t])()
        }
    }

    function o(o) {
        return "complete" === r.readyState ? i() : (o.bind(r, "DOMContentLoaded", n), o.bind(r, "readystatechange", n), o.bind(t, "load", n)), e
    }

    var r = t.document, s = [];
    e.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], o) : "object" == typeof exports ? module.exports = o(require("eventie")) : t.docReady = o(t.eventie)
}(window), function (t) {
    function e(t, e) {
        return t[o](e)
    }

    function n(t) {
        t.parentNode || document.createDocumentFragment().appendChild(t)
    }

    var i, o = function () {
        if (t.matches) return "matches";
        if (t.matchesSelector) return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], n = 0, i = e.length; i > n; n++) {
            var o = e[n] + "MatchesSelector";
            if (t[o]) return o
        }
    }();
    if (o) {
        var r = e(document.createElement("div"), "div");
        i = r ? e : function (t, i) {
            return n(t), e(t, i)
        }
    } else i = function (t, e) {
        n(t);
        for (var i = t.parentNode.querySelectorAll(e), o = 0, r = i.length; r > o; o++) if (i[o] === t) return !0;
        return !1
    };
    "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function () {
        return i
    }) : "object" == typeof exports ? module.exports = i : window.matchesSelector = i
}(Element.prototype), function (t, e) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["doc-ready/doc-ready", "matches-selector/matches-selector"], function (n, i) {
        return e(t, n, i)
    }) : "object" == typeof exports ? module.exports = e(t, require("doc-ready"), require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.docReady, t.matchesSelector)
}(window, function (t, e, n) {
    var i = {
        extend: function (t, e) {
            for (var n in e) t[n] = e[n];
            return t
        }, modulo: function (t, e) {
            return (t % e + e) % e
        }
    }, o = Object.prototype.toString;
    i.isArray = function (t) {
        return "[object Array]" == o.call(t)
    }, i.makeArray = function (t) {
        var e = [];
        if (i.isArray(t)) e = t; else if (t && "number" == typeof t.length) for (var n = 0, o = t.length; o > n; n++) e.push(t[n]); else e.push(t);
        return e
    }, i.indexOf = Array.prototype.indexOf ? function (t, e) {
        return t.indexOf(e)
    } : function (t, e) {
        for (var n = 0, i = t.length; i > n; n++) if (t[n] === e) return n;
        return -1
    }, i.removeFrom = function (t, e) {
        var n = i.indexOf(t, e);
        -1 != n && t.splice(n, 1)
    }, i.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function (t) {
        return t instanceof HTMLElement
    } : function (t) {
        return t && "object" == typeof t && 1 == t.nodeType && "string" == typeof t.nodeName
    }, i.setText = function () {
        var t;
        return function (e, n) {
            e[t = t || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText")] = n
        }
    }(), i.getParent = function (t, e) {
        for (; t != document.body;) if (t = t.parentNode, n(t, e)) return t
    }, i.getQueryElement = function (t) {
        return "string" == typeof t ? document.querySelector(t) : t
    }, i.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, i.filterFindElements = function (t, e) {
        for (var o = [], r = 0, s = (t = i.makeArray(t)).length; s > r; r++) {
            var a = t[r];
            if (i.isElement(a)) if (e) {
                n(a, e) && o.push(a);
                for (var l = a.querySelectorAll(e), u = 0, c = l.length; c > u; u++) o.push(l[u])
            } else o.push(a)
        }
        return o
    }, i.debounceMethod = function (t, e, n) {
        var i = t.prototype[e], o = e + "Timeout";
        t.prototype[e] = function () {
            var t = this[o];
            t && clearTimeout(t);
            var e = arguments, r = this;
            this[o] = setTimeout(function () {
                i.apply(r, e), delete r[o]
            }, n || 100)
        }
    }, i.toDashed = function (t) {
        return t.replace(/(.)([A-Z])/g, function (t, e, n) {
            return e + "-" + n
        }).toLowerCase()
    };
    var r = t.console;
    return i.htmlInit = function (n, o) {
        e(function () {
            for (var e = i.toDashed(o), s = document.querySelectorAll(".js-" + e), a = "data-" + e + "-options", l = 0, u = s.length; u > l; l++) {
                var c, h = s[l], f = h.getAttribute(a);
                try {
                    c = f && JSON.parse(f)
                } catch (t) {
                    r && r.error("Error parsing " + a + " on " + h.nodeName.toLowerCase() + (h.id ? "#" + h.id : "") + ": " + t);
                    continue
                }
                var d = new n(h, c), p = t.jQuery;
                p && p.data(h, o, d)
            }
        })
    }, i
}), function (t, e) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property", "fizzy-ui-utils/utils"], function (n, i, o, r) {
        return e(t, n, i, o, r)
    }) : "object" == typeof exports ? module.exports = e(t, require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property"), require("fizzy-ui-utils")) : (t.Outlayer = {}, t.Outlayer.Item = e(t, t.EventEmitter, t.getSize, t.getStyleProperty, t.fizzyUIUtils))
}(window, function (t, e, n, i, o) {
    function r(t, e) {
        t && (this.element = t, this.layout = e, this.position = {x: 0, y: 0}, this._create())
    }

    var s = t.getComputedStyle, a = s ? function (t) {
        return s(t, null)
    } : function (t) {
        return t.currentStyle
    }, l = i("transition"), u = i("transform"), c = l && u, h = !!i("perspective"), f = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "otransitionend",
        transition: "transitionend"
    }[l], d = ["transform", "transition", "transitionDuration", "transitionProperty"], p = function () {
        for (var t = {}, e = 0, n = d.length; n > e; e++) {
            var o = d[e], r = i(o);
            r && r !== o && (t[o] = r)
        }
        return t
    }();
    o.extend(r.prototype, e.prototype), r.prototype._create = function () {
        this._transn = {ingProperties: {}, clean: {}, onEnd: {}}, this.css({position: "absolute"})
    }, r.prototype.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, r.prototype.getSize = function () {
        this.size = n(this.element)
    }, r.prototype.css = function (t) {
        var e = this.element.style;
        for (var n in t) {
            e[p[n] || n] = t[n]
        }
    }, r.prototype.getPosition = function () {
        var t = a(this.element), e = this.layout.options, n = e.isOriginLeft, i = e.isOriginTop,
            o = t[n ? "left" : "right"], r = t[i ? "top" : "bottom"], s = this.layout.size,
            l = -1 != o.indexOf("%") ? parseFloat(o) / 100 * s.width : parseInt(o, 10),
            u = -1 != r.indexOf("%") ? parseFloat(r) / 100 * s.height : parseInt(r, 10);
        l = isNaN(l) ? 0 : l, u = isNaN(u) ? 0 : u, l -= n ? s.paddingLeft : s.paddingRight, u -= i ? s.paddingTop : s.paddingBottom, this.position.x = l, this.position.y = u
    }, r.prototype.layoutPosition = function () {
        var t = this.layout.size, e = this.layout.options, n = {}, i = e.isOriginLeft ? "paddingLeft" : "paddingRight",
            o = e.isOriginLeft ? "left" : "right", r = e.isOriginLeft ? "right" : "left", s = this.position.x + t[i];
        n[o] = this.getXValue(s), n[r] = "";
        var a = e.isOriginTop ? "paddingTop" : "paddingBottom", l = e.isOriginTop ? "top" : "bottom",
            u = e.isOriginTop ? "bottom" : "top", c = this.position.y + t[a];
        n[l] = this.getYValue(c), n[u] = "", this.css(n), this.emitEvent("layout", [this])
    }, r.prototype.getXValue = function (t) {
        var e = this.layout.options;
        return e.percentPosition && !e.isHorizontal ? t / this.layout.size.width * 100 + "%" : t + "px"
    }, r.prototype.getYValue = function (t) {
        var e = this.layout.options;
        return e.percentPosition && e.isHorizontal ? t / this.layout.size.height * 100 + "%" : t + "px"
    }, r.prototype._transitionTo = function (t, e) {
        this.getPosition();
        var n = this.position.x, i = this.position.y, o = parseInt(t, 10), r = parseInt(e, 10),
            s = o === this.position.x && r === this.position.y;
        if (this.setPosition(t, e), !s || this.isTransitioning) {
            var a = t - n, l = e - i, u = {};
            u.transform = this.getTranslate(a, l), this.transition({
                to: u,
                onTransitionEnd: {transform: this.layoutPosition},
                isCleaning: !0
            })
        } else this.layoutPosition()
    }, r.prototype.getTranslate = function (t, e) {
        var n = this.layout.options;
        return t = n.isOriginLeft ? t : -t, e = n.isOriginTop ? e : -e, h ? "translate3d(" + t + "px, " + e + "px, 0)" : "translate(" + t + "px, " + e + "px)"
    }, r.prototype.goTo = function (t, e) {
        this.setPosition(t, e), this.layoutPosition()
    }, r.prototype.moveTo = c ? r.prototype._transitionTo : r.prototype.goTo, r.prototype.setPosition = function (t, e) {
        this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
    }, r.prototype._nonTransition = function (t) {
        for (var e in this.css(t.to), t.isCleaning && this._removeStyles(t.to), t.onTransitionEnd) t.onTransitionEnd[e].call(this)
    }, r.prototype._transition = function (t) {
        if (parseFloat(this.layout.options.transitionDuration)) {
            var e = this._transn;
            for (var n in t.onTransitionEnd) e.onEnd[n] = t.onTransitionEnd[n];
            for (n in t.to) e.ingProperties[n] = !0, t.isCleaning && (e.clean[n] = !0);
            if (t.from) {
                this.css(t.from);
                this.element.offsetHeight;
                null
            }
            this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
        } else this._nonTransition(t)
    };
    var m = "opacity," + function (t) {
        return t.replace(/([A-Z])/g, function (t) {
            return "-" + t.toLowerCase()
        })
    }(p.transform || "transform");
    r.prototype.enableTransition = function () {
        this.isTransitioning || (this.css({
            transitionProperty: m,
            transitionDuration: this.layout.options.transitionDuration
        }), this.element.addEventListener(f, this, !1))
    }, r.prototype.transition = r.prototype[l ? "_transition" : "_nonTransition"], r.prototype.onwebkitTransitionEnd = function (t) {
        this.ontransitionend(t)
    }, r.prototype.onotransitionend = function (t) {
        this.ontransitionend(t)
    };
    var g = {"-webkit-transform": "transform", "-moz-transform": "transform", "-o-transform": "transform"};
    r.prototype.ontransitionend = function (t) {
        if (t.target === this.element) {
            var e = this._transn, n = g[t.propertyName] || t.propertyName;
            if (delete e.ingProperties[n], function (t) {
                for (var e in t) return !1;
                return !0
            }(e.ingProperties) && this.disableTransition(), n in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[n]), n in e.onEnd) e.onEnd[n].call(this), delete e.onEnd[n];
            this.emitEvent("transitionEnd", [this])
        }
    }, r.prototype.disableTransition = function () {
        this.removeTransitionStyles(), this.element.removeEventListener(f, this, !1), this.isTransitioning = !1
    }, r.prototype._removeStyles = function (t) {
        var e = {};
        for (var n in t) e[n] = "";
        this.css(e)
    };
    var v = {transitionProperty: "", transitionDuration: ""};
    return r.prototype.removeTransitionStyles = function () {
        this.css(v)
    }, r.prototype.removeElem = function () {
        this.element.parentNode.removeChild(this.element), this.css({display: ""}), this.emitEvent("remove", [this])
    }, r.prototype.remove = function () {
        if (l && parseFloat(this.layout.options.transitionDuration)) {
            var t = this;
            this.once("transitionEnd", function () {
                t.removeElem()
            }), this.hide()
        } else this.removeElem()
    }, r.prototype.reveal = function () {
        delete this.isHidden, this.css({display: ""});
        var t = this.layout.options, e = {};
        e[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd, this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }, r.prototype.onRevealTransitionEnd = function () {
        this.isHidden || this.emitEvent("reveal")
    }, r.prototype.getHideRevealTransitionEndProperty = function (t) {
        var e = this.layout.options[t];
        if (e.opacity) return "opacity";
        for (var n in e) return n
    }, r.prototype.hide = function () {
        this.isHidden = !0, this.css({display: ""});
        var t = this.layout.options, e = {};
        e[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd, this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }, r.prototype.onHideTransitionEnd = function () {
        this.isHidden && (this.css({display: "none"}), this.emitEvent("hide"))
    }, r.prototype.destroy = function () {
        this.css({position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: ""})
    }, r
}), function (t, e) {
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "eventEmitter/EventEmitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (n, i, o, r, s) {
        return e(t, n, i, o, r, s)
    }) : "object" == typeof exports ? module.exports = e(t, require("eventie"), require("wolfy87-eventemitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.eventie, t.EventEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}(window, function (t, e, n, i, o, r) {
    function s(t, e) {
        var n = o.getQueryElement(t);
        if (n) {
            this.element = n, l && (this.$element = l(this.element)), this.options = o.extend({}, this.constructor.defaults), this.option(e);
            var i = ++c;
            this.element.outlayerGUID = i, h[i] = this, this._create(), this.options.isInitLayout && this.layout()
        } else a && a.error("Bad element for " + this.constructor.namespace + ": " + (n || t))
    }

    var a = t.console, l = t.jQuery, u = function () {
    }, c = 0, h = {};
    return s.namespace = "outlayer", s.Item = r, s.defaults = {
        containerStyle: {position: "relative"},
        isInitLayout: !0,
        isOriginLeft: !0,
        isOriginTop: !0,
        isResizeBound: !0,
        isResizingContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {opacity: 0, transform: "scale(0.001)"},
        visibleStyle: {opacity: 1, transform: "scale(1)"}
    }, o.extend(s.prototype, n.prototype), s.prototype.option = function (t) {
        o.extend(this.options, t)
    }, s.prototype._create = function () {
        this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), o.extend(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
    }, s.prototype.reloadItems = function () {
        this.items = this._itemize(this.element.children)
    }, s.prototype._itemize = function (t) {
        for (var e = this._filterFindItemElements(t), n = this.constructor.Item, i = [], o = 0, r = e.length; r > o; o++) {
            var s = new n(e[o], this);
            i.push(s)
        }
        return i
    }, s.prototype._filterFindItemElements = function (t) {
        return o.filterFindElements(t, this.options.itemSelector)
    }, s.prototype.getItemElements = function () {
        for (var t = [], e = 0, n = this.items.length; n > e; e++) t.push(this.items[e].element);
        return t
    }, s.prototype.layout = function () {
        this._resetLayout(), this._manageStamps();
        var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
        this.layoutItems(this.items, t), this._isLayoutInited = !0
    }, s.prototype._init = s.prototype.layout, s.prototype._resetLayout = function () {
        this.getSize()
    }, s.prototype.getSize = function () {
        this.size = i(this.element)
    }, s.prototype._getMeasurement = function (t, e) {
        var n, r = this.options[t];
        r ? ("string" == typeof r ? n = this.element.querySelector(r) : o.isElement(r) && (n = r), this[t] = n ? i(n)[e] : r) : this[t] = 0
    }, s.prototype.layoutItems = function (t, e) {
        t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
    }, s.prototype._getItemsForLayout = function (t) {
        for (var e = [], n = 0, i = t.length; i > n; n++) {
            var o = t[n];
            o.isIgnored || e.push(o)
        }
        return e
    }, s.prototype._layoutItems = function (t, e) {
        if (this._emitCompleteOnItems("layout", t), t && t.length) {
            for (var n = [], i = 0, o = t.length; o > i; i++) {
                var r = t[i], s = this._getItemLayoutPosition(r);
                s.item = r, s.isInstant = e || r.isLayoutInstant, n.push(s)
            }
            this._processLayoutQueue(n)
        }
    }, s.prototype._getItemLayoutPosition = function () {
        return {x: 0, y: 0}
    }, s.prototype._processLayoutQueue = function (t) {
        for (var e = 0, n = t.length; n > e; e++) {
            var i = t[e];
            this._positionItem(i.item, i.x, i.y, i.isInstant)
        }
    }, s.prototype._positionItem = function (t, e, n, i) {
        i ? t.goTo(e, n) : t.moveTo(e, n)
    }, s.prototype._postLayout = function () {
        this.resizeContainer()
    }, s.prototype.resizeContainer = function () {
        if (this.options.isResizingContainer) {
            var t = this._getContainerSize();
            t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
        }
    }, s.prototype._getContainerSize = u, s.prototype._setContainerMeasure = function (t, e) {
        if (void 0 !== t) {
            var n = this.size;
            n.isBorderBox && (t += e ? n.paddingLeft + n.paddingRight + n.borderLeftWidth + n.borderRightWidth : n.paddingBottom + n.paddingTop + n.borderTopWidth + n.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
        }
    }, s.prototype._emitCompleteOnItems = function (t, e) {
        function n() {
            o.dispatchEvent(t + "Complete", null, [e])
        }

        function i() {
            ++s === r && n()
        }

        var o = this, r = e.length;
        if (e && r) for (var s = 0, a = 0, l = e.length; l > a; a++) {
            e[a].once(t, i)
        } else n()
    }, s.prototype.dispatchEvent = function (t, e, n) {
        var i = e ? [e].concat(n) : n;
        if (this.emitEvent(t, i), l) if (this.$element = this.$element || l(this.element), e) {
            var o = l.Event(e);
            o.type = t, this.$element.trigger(o, n)
        } else this.$element.trigger(t, n)
    }, s.prototype.ignore = function (t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0)
    }, s.prototype.unignore = function (t) {
        var e = this.getItem(t);
        e && delete e.isIgnored
    }, s.prototype.stamp = function (t) {
        if (t = this._find(t)) {
            this.stamps = this.stamps.concat(t);
            for (var e = 0, n = t.length; n > e; e++) {
                var i = t[e];
                this.ignore(i)
            }
        }
    }, s.prototype.unstamp = function (t) {
        if (t = this._find(t)) for (var e = 0, n = t.length; n > e; e++) {
            var i = t[e];
            o.removeFrom(this.stamps, i), this.unignore(i)
        }
    }, s.prototype._find = function (t) {
        return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = o.makeArray(t)) : void 0
    }, s.prototype._manageStamps = function () {
        if (this.stamps && this.stamps.length) {
            this._getBoundingRect();
            for (var t = 0, e = this.stamps.length; e > t; t++) {
                var n = this.stamps[t];
                this._manageStamp(n)
            }
        }
    }, s.prototype._getBoundingRect = function () {
        var t = this.element.getBoundingClientRect(), e = this.size;
        this._boundingRect = {
            left: t.left + e.paddingLeft + e.borderLeftWidth,
            top: t.top + e.paddingTop + e.borderTopWidth,
            right: t.right - (e.paddingRight + e.borderRightWidth),
            bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
        }
    }, s.prototype._manageStamp = u, s.prototype._getElementOffset = function (t) {
        var e = t.getBoundingClientRect(), n = this._boundingRect, o = i(t);
        return {
            left: e.left - n.left - o.marginLeft,
            top: e.top - n.top - o.marginTop,
            right: n.right - e.right - o.marginRight,
            bottom: n.bottom - e.bottom - o.marginBottom
        }
    }, s.prototype.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, s.prototype.bindResize = function () {
        this.isResizeBound || (e.bind(t, "resize", this), this.isResizeBound = !0)
    }, s.prototype.unbindResize = function () {
        this.isResizeBound && e.unbind(t, "resize", this), this.isResizeBound = !1
    }, s.prototype.onresize = function () {
        this.resizeTimeout && clearTimeout(this.resizeTimeout);
        var t = this;
        this.resizeTimeout = setTimeout(function () {
            t.resize(), delete t.resizeTimeout
        }, 100)
    }, s.prototype.resize = function () {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }, s.prototype.needsResizeLayout = function () {
        var t = i(this.element);
        return this.size && t && t.innerWidth !== this.size.innerWidth
    }, s.prototype.addItems = function (t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)), e
    }, s.prototype.appended = function (t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e))
    }, s.prototype.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
            var n = this.items.slice(0);
            this.items = e.concat(n), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(n)
        }
    }, s.prototype.reveal = function (t) {
        this._emitCompleteOnItems("reveal", t);
        for (var e = t && t.length, n = 0; e && e > n; n++) {
            t[n].reveal()
        }
    }, s.prototype.hide = function (t) {
        this._emitCompleteOnItems("hide", t);
        for (var e = t && t.length, n = 0; e && e > n; n++) {
            t[n].hide()
        }
    }, s.prototype.revealItemElements = function (t) {
        var e = this.getItems(t);
        this.reveal(e)
    }, s.prototype.hideItemElements = function (t) {
        var e = this.getItems(t);
        this.hide(e)
    }, s.prototype.getItem = function (t) {
        for (var e = 0, n = this.items.length; n > e; e++) {
            var i = this.items[e];
            if (i.element === t) return i
        }
    }, s.prototype.getItems = function (t) {
        for (var e = [], n = 0, i = (t = o.makeArray(t)).length; i > n; n++) {
            var r = t[n], s = this.getItem(r);
            s && e.push(s)
        }
        return e
    }, s.prototype.remove = function (t) {
        var e = this.getItems(t);
        if (this._emitCompleteOnItems("remove", e), e && e.length) for (var n = 0, i = e.length; i > n; n++) {
            var r = e[n];
            r.remove(), o.removeFrom(this.items, r)
        }
    }, s.prototype.destroy = function () {
        var t = this.element.style;
        t.height = "", t.position = "", t.width = "";
        for (var e = 0, n = this.items.length; n > e; e++) {
            this.items[e].destroy()
        }
        this.unbindResize();
        var i = this.element.outlayerGUID;
        delete h[i], delete this.element.outlayerGUID, l && l.removeData(this.element, this.constructor.namespace)
    }, s.data = function (t) {
        var e = (t = o.getQueryElement(t)) && t.outlayerGUID;
        return e && h[e]
    }, s.create = function (t, e) {
        function n() {
            s.apply(this, arguments)
        }

        return Object.create ? n.prototype = Object.create(s.prototype) : o.extend(n.prototype, s.prototype), n.prototype.constructor = n, n.defaults = o.extend({}, s.defaults), o.extend(n.defaults, e), n.prototype.settings = {}, n.namespace = t, n.data = s.data, n.Item = function () {
            r.apply(this, arguments)
        }, n.Item.prototype = new r, o.htmlInit(n, t), l && l.bridget && l.bridget(t, n), n
    }, s.Item = r, s
}), function (t, e) {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "fizzy-ui-utils/utils"], e) : "object" == typeof exports ? module.exports = e(require("outlayer"), require("get-size"), require("fizzy-ui-utils")) : t.Masonry = e(t.Outlayer, t.getSize, t.fizzyUIUtils)
}(window, function (t, e, n) {
    var i = t.create("masonry");
    return i.prototype._resetLayout = function () {
        this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
        var t = this.cols;
        for (this.colYs = []; t--;) this.colYs.push(0);
        this.maxY = 0
    }, i.prototype.measureColumns = function () {
        if (this.getContainerWidth(), !this.columnWidth) {
            var t = this.items[0], n = t && t.element;
            this.columnWidth = n && e(n).outerWidth || this.containerWidth
        }
        var i = this.columnWidth += this.gutter, o = this.containerWidth + this.gutter, r = o / i, s = i - o % i;
        r = Math[s && 1 > s ? "round" : "floor"](r), this.cols = Math.max(r, 1)
    }, i.prototype.getContainerWidth = function () {
        var t = this.options.isFitWidth ? this.element.parentNode : this.element, n = e(t);
        this.containerWidth = n && n.innerWidth
    }, i.prototype._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth,
            i = Math[e && 1 > e ? "round" : "ceil"](t.size.outerWidth / this.columnWidth);
        i = Math.min(i, this.cols);
        for (var o = this._getColGroup(i), r = Math.min.apply(Math, o), s = n.indexOf(o, r), a = {
            x: this.columnWidth * s,
            y: r
        }, l = r + t.size.outerHeight, u = this.cols + 1 - o.length, c = 0; u > c; c++) this.colYs[s + c] = l;
        return a
    }, i.prototype._getColGroup = function (t) {
        if (2 > t) return this.colYs;
        for (var e = [], n = this.cols + 1 - t, i = 0; n > i; i++) {
            var o = this.colYs.slice(i, i + t);
            e[i] = Math.max.apply(Math, o)
        }
        return e
    }, i.prototype._manageStamp = function (t) {
        var n = e(t), i = this._getElementOffset(t), o = this.options.isOriginLeft ? i.left : i.right,
            r = o + n.outerWidth, s = Math.floor(o / this.columnWidth);
        s = Math.max(0, s);
        var a = Math.floor(r / this.columnWidth);
        a -= r % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a);
        for (var l = (this.options.isOriginTop ? i.top : i.bottom) + n.outerHeight, u = s; a >= u; u++) this.colYs[u] = Math.max(l, this.colYs[u])
    }, i.prototype._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = {height: this.maxY};
        return this.options.isFitWidth && (t.width = this._getContainerFitWidth()), t
    }, i.prototype._getContainerFitWidth = function () {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
        return (this.cols - t) * this.columnWidth - this.gutter
    }, i.prototype.needsResizeLayout = function () {
        var t = this.containerWidth;
        return this.getContainerWidth(), t !== this.containerWidth
    }, i
}), function () {
    var t, e, n, i, o, r, s, a, l, u, c, h, f, d, p, m, g, v, y, b, _, w, x, E, C, T, S, I, A, D, k, O, j, L, N, P, M,
        R, z, H, q, $, W, F, B, U, V, Y, Q, X, K, G, Z, J, tt, et, nt, it = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        };
    D = function () {
        return "visible" === document.visibilityState || null != S.tests
    }, N = function () {
        var t;
        return t = [], "undefined" != typeof document && null !== document && document.addEventListener("visibilitychange", function () {
            var e, n, i, o;
            for (o = [], n = 0, i = t.length; i > n; n++) e = t[n], o.push(e(D()));
            return o
        }), function (e) {
            return t.push(e)
        }
    }(), x = function (t) {
        var e, n, i;
        for (e in n = {}, t) i = t[e], n[e] = i;
        return n
    }, _ = function (t) {
        var e;
        return e = {}, function () {
            var n, i, o, r;
            for (n = "", o = 0, r = arguments.length; r > o; o++) n += arguments[o].toString() + ",";
            return (i = e[n]) || (e[n] = i = t.apply(this, arguments)), i
        }
    }, L = function (t) {
        return function (e) {
            var n, i;
            return e instanceof Array || e instanceof NodeList || e instanceof HTMLCollection ? function () {
                var o, r, s;
                for (s = [], i = o = 0, r = e.length; r >= 0 ? r > o : o > r; i = r >= 0 ? ++o : --o) (n = Array.prototype.slice.call(arguments, 1)).splice(0, 0, e[i]), s.push(t.apply(this, n));
                return s
            }.apply(this, arguments) : t.apply(this, arguments)
        }
    }, g = function (t, e) {
        var n, i, o;
        for (n in o = [], e) i = e[n], o.push(null != t[n] ? t[n] : t[n] = i);
        return o
    }, v = function (t, e) {
        var n, i, o;
        if (null != t.style) return y(t, e);
        for (n in o = [], e) i = e[n], o.push(t[n] = i.format());
        return o
    }, y = function (t, e) {
        var n, i, o, r, s;
        for (i in e = P(e), r = [], n = k(t), e) s = e[i], tt.contains(i) ? r.push([i, s]) : (null != s.format && (s = s.format()), "number" == typeof s && (s = "" + s + nt(i, s)), n && X.contains(i) ? t.setAttribute(i, s) : t.style[R(i)] = s);
        return r.length > 0 ? n ? ((o = new u).applyProperties(r), t.setAttribute("transform", o.decompose().format())) : (s = r.map(function (t) {
            return et(t[0], t[1])
        }).join(" "), t.style[R("transform")] = s) : void 0
    }, k = function (t) {
        var e, n;
        return "undefined" != typeof SVGElement && null !== SVGElement && "undefined" != typeof SVGSVGElement && null !== SVGSVGElement ? t instanceof SVGElement && !(t instanceof SVGSVGElement) : null != (e = null != (n = S.tests) && "function" == typeof n.isSVG ? n.isSVG(t) : void 0) && e
    }, q = function (t, e) {
        var n;
        return n = Math.pow(10, e), Math.round(t * n) / n
    }, c = function () {
        function t(t) {
            var e, n, i;
            for (this.obj = {}, n = 0, i = t.length; i > n; n++) e = t[n], this.obj[e] = 1
        }

        return t.prototype.contains = function (t) {
            return 1 === this.obj[t]
        }, t
    }(), J = function (t) {
        return t.replace(/([A-Z])/g, function (t) {
            return "-" + t.toLowerCase()
        })
    }, z = new c("marginTop,marginLeft,marginBottom,marginRight,paddingTop,paddingLeft,paddingBottom,paddingRight,top,left,bottom,right,translateX,translateY,translateZ,perspectiveX,perspectiveY,perspectiveZ,width,height,maxWidth,maxHeight,minWidth,minHeight,borderRadius".split(",")), T = new c("rotate,rotateX,rotateY,rotateZ,skew,skewX,skewY,skewZ".split(",")), tt = new c("translate,translateX,translateY,translateZ,scale,scaleX,scaleY,scaleZ,rotate,rotateX,rotateY,rotateZ,rotateC,rotateCX,rotateCY,skew,skewX,skewY,skewZ,perspective".split(",")), X = new c("accent-height,ascent,azimuth,baseFrequency,baseline-shift,bias,cx,cy,d,diffuseConstant,divisor,dx,dy,elevation,filterRes,fx,fy,gradientTransform,height,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,letter-spacing,limitingConeAngle,markerHeight,markerWidth,numOctaves,order,overline-position,overline-thickness,pathLength,points,pointsAtX,pointsAtY,pointsAtZ,r,radius,rx,ry,seed,specularConstant,specularExponent,stdDeviation,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,surfaceScale,target,targetX,targetY,transform,underline-position,underline-thickness,viewBox,width,x,x1,x2,y,y1,y2,z".split(",")), nt = function (t, e) {
        return "number" != typeof e ? "" : z.contains(t) ? "px" : T.contains(t) ? "deg" : ""
    }, et = function (t, e) {
        var n, i;
        return null != (n = ("" + e).match(/^([0-9.-]*)([^0-9]*)$/)) ? (e = n[1], i = n[2]) : e = parseFloat(e), e = q(parseFloat(e), 10), (null == i || "" === i) && (i = nt(t, e)), t + "(" + e + i + ")"
    }, P = function (t) {
        var e, n, i, o, r, s, a, l;
        for (o in i = {}, t) if (r = t[o], tt.contains(o)) if ((n = o.match(/(translate|rotateC|rotate|skew|scale|perspective)(X|Y|Z|)/)) && n[2].length > 0) i[o] = r; else for (s = 0, a = (l = ["X", "Y", "Z"]).length; a > s; s++) e = l[s], i[n[1] + e] = r; else i[o] = r;
        return i
    }, C = function (t) {
        var e;
        return "" + (e = "opacity" === t ? 1 : 0) + nt(t, e)
    }, I = function (t, e) {
        var n, i, o, r, s, a, c, h, f, d, p;
        if (r = {}, n = k(t), null != t.style) for (s = window.getComputedStyle(t, null), c = 0, f = e.length; f > c; c++) i = e[c], tt.contains(i) ? null == r.transform && (o = n ? new u(null != (p = t.transform.baseVal.consolidate()) ? p.matrix : void 0) : l.fromTransform(s[R("transform")]), r.transform = o.decompose()) : (null == (a = s[i]) && X.contains(i) && (a = t.getAttribute(i)), ("" === a || null == a) && (a = C(i)), r[i] = E(a)); else for (h = 0, d = e.length; d > h; h++) r[i = e[h]] = E(t[i]);
        return r
    }, E = function (t) {
        var e, n, o, l;
        for (o = 0, l = (n = [i, s, r, a]).length; l > o; o++) if (null != (e = n[o].create(t))) return e;
        return null
    }, a = function () {
        function t(t) {
            this.parts = t, this.format = it(this.format, this), this.interpolate = it(this.interpolate, this)
        }

        return t.prototype.interpolate = function (e, n) {
            var i, o, r, s, a, l;
            for (s = this.parts, i = e.parts, r = [], o = a = 0, l = Math.min(s.length, i.length); l >= 0 ? l > a : a > l; o = l >= 0 ? ++a : --a) r.push(null != s[o].interpolate ? s[o].interpolate(i[o], n) : s[o]);
            return new t(r)
        }, t.prototype.format = function () {
            return this.parts.map(function (t) {
                return null != t.format ? t.format() : t
            }).join("")
        }, t.create = function (e) {
            var n, i, s, a, l, u, c, h, f, d, p;
            for (e = "" + e, s = [], h = 0, d = (c = [{
                re: /(#[a-f\d]{3,6})/gi, klass: o, parse: function (t) {
                    return t
                }
            }, {
                re: /(rgba?\([0-9.]*, ?[0-9.]*, ?[0-9.]*(?:, ?[0-9.]*)?\))/gi, klass: o, parse: function (t) {
                    return t
                }
            }, {
                re: /([-+]?[\d.]+)/gi,
                klass: r,
                parse: parseFloat
            }]).length; d > h; h++) for (l = (u = c[h]).re; i = l.exec(e);) s.push({
                index: i.index,
                length: i[1].length,
                interpolable: u.klass.create(u.parse(i[1]))
            });
            for (a = [], n = 0, f = 0, p = (s = s.sort(function (t, e) {
                return t.index > e.index
            })).length; p > f; f++) (i = s[f]).index < n || (i.index > n && a.push(e.substring(n, i.index)), a.push(i.interpolable), n = i.index + i.length);
            return n < e.length && a.push(e.substring(n)), new t(a)
        }, t
    }(), s = function () {
        function t(t) {
            this.format = it(this.format, this), this.interpolate = it(this.interpolate, this), this.obj = t
        }

        return t.prototype.interpolate = function (e, n) {
            var i, o, r, s, a;
            for (o in s = this.obj, i = e.obj, r = {}, s) a = s[o], r[o] = null != a.interpolate ? a.interpolate(i[o], n) : a;
            return new t(r)
        }, t.prototype.format = function () {
            return this.obj
        }, t.create = function (e) {
            var n, i, o;
            if (e instanceof Object) {
                for (n in i = {}, e) o = e[n], i[n] = E(o);
                return new t(i)
            }
            return null
        }, t
    }(), r = function () {
        function t(t) {
            this.format = it(this.format, this), this.interpolate = it(this.interpolate, this), this.value = parseFloat(t)
        }

        return t.prototype.interpolate = function (e, n) {
            var i;
            return i = this.value, new t((e.value - i) * n + i)
        }, t.prototype.format = function () {
            return q(this.value, 5)
        }, t.create = function (e) {
            return "number" == typeof e ? new t(e) : null
        }, t
    }(), i = function () {
        function t(t) {
            this.values = t, this.format = it(this.format, this), this.interpolate = it(this.interpolate, this)
        }

        return t.prototype.interpolate = function (e, n) {
            var i, o, r, s, a, l;
            for (s = this.values, i = e.values, r = [], o = a = 0, l = Math.min(s.length, i.length); l >= 0 ? l > a : a > l; o = l >= 0 ? ++a : --a) r.push(null != s[o].interpolate ? s[o].interpolate(i[o], n) : s[o]);
            return new t(r)
        }, t.prototype.format = function () {
            return this.values.map(function (t) {
                return null != t.format ? t.format() : t
            })
        }, t.createFromArray = function (e) {
            return new t(e.map(function (t) {
                return E(t) || t
            }).filter(function (t) {
                return null != t
            }))
        }, t.create = function (e) {
            return e instanceof Array ? t.createFromArray(e) : null
        }, t
    }(), t = function () {
        function t(t, e) {
            this.rgb = null != t ? t : {}, this.format = e, this.toRgba = it(this.toRgba, this), this.toRgb = it(this.toRgb, this), this.toHex = it(this.toHex, this)
        }

        return t.fromHex = function (e) {
            var n, i;
            return null != (n = e.match(/^#([a-f\d]{1})([a-f\d]{1})([a-f\d]{1})$/i)) && (e = "#" + n[1] + n[1] + n[2] + n[2] + n[3] + n[3]), null != (i = e.match(/^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i)) ? new t({
                r: parseInt(i[1], 16),
                g: parseInt(i[2], 16),
                b: parseInt(i[3], 16),
                a: 1
            }, "hex") : null
        }, t.fromRgb = function (e) {
            var n, i;
            return null != (n = e.match(/^rgba?\(([0-9.]*), ?([0-9.]*), ?([0-9.]*)(?:, ?([0-9.]*))?\)$/)) ? new t({
                r: parseFloat(n[1]),
                g: parseFloat(n[2]),
                b: parseFloat(n[3]),
                a: parseFloat(null != (i = n[4]) ? i : 1)
            }, null != n[4] ? "rgba" : "rgb") : null
        }, t.componentToHex = function (t) {
            var e;
            return 1 === (e = t.toString(16)).length ? "0" + e : e
        }, t.prototype.toHex = function () {
            return "#" + t.componentToHex(this.rgb.r) + t.componentToHex(this.rgb.g) + t.componentToHex(this.rgb.b)
        }, t.prototype.toRgb = function () {
            return "rgb(" + this.rgb.r + ", " + this.rgb.g + ", " + this.rgb.b + ")"
        }, t.prototype.toRgba = function () {
            return "rgba(" + this.rgb.r + ", " + this.rgb.g + ", " + this.rgb.b + ", " + this.rgb.a + ")"
        }, t
    }(), o = function () {
        function e(t) {
            this.color = t, this.format = it(this.format, this), this.interpolate = it(this.interpolate, this)
        }

        return e.prototype.interpolate = function (n, i) {
            var o, r, s, a, l, u, c, h;
            for (a = this.color, o = n.color, s = {}, u = 0, c = (h = ["r", "g", "b"]).length; c > u; u++) r = h[u], l = Math.round((o.rgb[r] - a.rgb[r]) * i + a.rgb[r]), s[r] = Math.min(255, Math.max(0, l));
            return r = "a", l = q((o.rgb[r] - a.rgb[r]) * i + a.rgb[r], 5), s[r] = Math.min(1, Math.max(0, l)), new e(new t(s, o.format))
        }, e.prototype.format = function () {
            return "hex" === this.color.format ? this.color.toHex() : "rgb" === this.color.format ? this.color.toRgb() : "rgba" === this.color.format ? this.color.toRgba() : void 0
        }, e.create = function (n) {
            var i;
            if ("string" == typeof n) return null != (i = t.fromHex(n) || t.fromRgb(n)) ? new e(i) : null
        }, e
    }(), n = function () {
        function t(t) {
            this.props = t, this.applyRotateCenter = it(this.applyRotateCenter, this), this.format = it(this.format, this), this.interpolate = it(this.interpolate, this)
        }

        return t.prototype.interpolate = function (e, n) {
            var i, o, r, s, a, l, u, c, h, f, d, p;
            for (r = {}, s = 0, c = (f = ["translate", "scale", "rotate"]).length; c > s; s++) for (r[o = f[s]] = [], i = a = 0, d = this.props[o].length; d >= 0 ? d > a : a > d; i = d >= 0 ? ++a : --a) r[o][i] = (e.props[o][i] - this.props[o][i]) * n + this.props[o][i];
            for (i = l = 1; 2 >= l; i = ++l) r.rotate[i] = e.props.rotate[i];
            for (u = 0, h = (p = ["skew"]).length; h > u; u++) r[o = p[u]] = (e.props[o] - this.props[o]) * n + this.props[o];
            return new t(r)
        }, t.prototype.format = function () {
            return "translate(" + this.props.translate.join(",") + ") rotate(" + this.props.rotate.join(",") + ") skewX(" + this.props.skew + ") scale(" + this.props.scale.join(",") + ")"
        }, t.prototype.applyRotateCenter = function (t) {
            var e, n, i, o, r;
            for (n = (n = (n = (n = b.createSVGMatrix()).translate(t[0], t[1])).rotate(this.props.rotate[0])).translate(-t[0], -t[1]), i = new u(n).decompose().props.translate, r = [], e = o = 0; 1 >= o; e = ++o) r.push(this.props.translate[e] -= i[e]);
            return r
        }, t
    }(), b = "undefined" != typeof document && null !== document ? document.createElementNS("http://www.w3.org/2000/svg", "svg") : void 0, u = function () {
        function t(t) {
            this.m = t, this.applyProperties = it(this.applyProperties, this), this.decompose = it(this.decompose, this), this.m || (this.m = b.createSVGMatrix())
        }

        return t.prototype.decompose = function () {
            var t, e, i, o, r;
            return o = new h([this.m.a, this.m.b]), r = new h([this.m.c, this.m.d]), t = o.length(), i = o.dot(r), o = o.normalize(), e = r.combine(o, 1, -i).length(), new n({
                translate: [this.m.e, this.m.f],
                rotate: [180 * Math.atan2(this.m.b, this.m.a) / Math.PI, this.rotateCX, this.rotateCY],
                scale: [t, e],
                skew: i / e * 180 / Math.PI
            })
        }, t.prototype.applyProperties = function (t) {
            var e, n, i, o, r, s, a, l;
            for (e = {}, r = 0, s = t.length; s > r; r++) e[(i = t[r])[0]] = i[1];
            for (n in e) o = e[n], "translateX" === n ? this.m = this.m.translate(o, 0) : "translateY" === n ? this.m = this.m.translate(0, o) : "scaleX" === n ? this.m = this.m.scale(o, 1) : "scaleY" === n ? this.m = this.m.scale(1, o) : "rotateZ" === n ? this.m = this.m.rotate(o) : "skewX" === n ? this.m = this.m.skewX(o) : "skewY" === n && (this.m = this.m.skewY(o));
            return this.rotateCX = null != (a = e.rotateCX) ? a : 0, this.rotateCY = null != (l = e.rotateCY) ? l : 0
        }, t
    }(), h = function () {
        function t(t) {
            this.els = t, this.combine = it(this.combine, this), this.normalize = it(this.normalize, this), this.length = it(this.length, this), this.cross = it(this.cross, this), this.dot = it(this.dot, this), this.e = it(this.e, this)
        }

        return t.prototype.e = function (t) {
            return 1 > t || t > this.els.length ? null : this.els[t - 1]
        }, t.prototype.dot = function (t) {
            var e, n, i;
            if (e = t.els || t, i = 0, (n = this.els.length) !== e.length) return null;
            for (n += 1; --n;) i += this.els[n - 1] * e[n - 1];
            return i
        }, t.prototype.cross = function (e) {
            var n, i;
            return i = e.els || e, 3 !== this.els.length || 3 !== i.length ? null : new t([(n = this.els)[1] * i[2] - n[2] * i[1], n[2] * i[0] - n[0] * i[2], n[0] * i[1] - n[1] * i[0]])
        }, t.prototype.length = function () {
            var t, e, n, i, o;
            for (t = 0, n = 0, i = (o = this.els).length; i > n; n++) e = o[n], t += Math.pow(e, 2);
            return Math.sqrt(t)
        }, t.prototype.normalize = function () {
            var e, n, i, o, r;
            for (n in i = this.length(), o = [], r = this.els) e = r[n], o[n] = e / i;
            return new t(o)
        }, t.prototype.combine = function (e, n, i) {
            var o, r, s, a;
            for (r = [], o = s = 0, a = this.els.length; a >= 0 ? a > s : s > a; o = a >= 0 ? ++s : --s) r[o] = n * this.els[o] + i * e.els[o];
            return new t(r)
        }, t
    }(), e = function () {
        function t() {
            this.toMatrix = it(this.toMatrix, this), this.format = it(this.format, this), this.interpolate = it(this.interpolate, this)
        }

        return t.prototype.interpolate = function (e, n, i) {
            var o, r, s, a, l, u, c, h, f, d, p, m, g, v, y, b, _, w;
            for (null == i && (i = null), s = this, r = new t, m = 0, b = (_ = ["translate", "scale", "skew", "perspective"]).length; b > m; m++) for (r[c = _[m]] = [], a = g = 0, w = s[c].length - 1; w >= 0 ? w >= g : g >= w; a = w >= 0 ? ++g : --g) r[c][a] = null == i || i.indexOf(c) > -1 || i.indexOf("" + c + ["x", "y", "z"][a]) > -1 ? (e[c][a] - s[c][a]) * n + s[c][a] : s[c][a];
            if (null == i || -1 !== i.indexOf("rotate")) {
                if (h = s.quaternion, f = e.quaternion, 0 > (o = h[0] * f[0] + h[1] * f[1] + h[2] * f[2] + h[3] * f[3])) {
                    for (a = v = 0; 3 >= v; a = ++v) h[a] = -h[a];
                    o = -o
                }
                for (o + 1 > .05 ? 1 - o >= .05 ? (p = Math.acos(o), u = 1 / Math.sin(p), d = Math.sin(p * (1 - n)) * u, l = Math.sin(p * n) * u) : (d = 1 - n, l = n) : (f[0] = -h[1], f[1] = h[0], f[2] = -h[3], f[3] = h[2], d = Math.sin(piDouble * (.5 - n)), l = Math.sin(piDouble * n)), r.quaternion = [], a = y = 0; 3 >= y; a = ++y) r.quaternion[a] = h[a] * d + f[a] * l
            } else r.quaternion = s.quaternion;
            return r
        }, t.prototype.format = function () {
            return this.toMatrix().toString()
        }, t.prototype.toMatrix = function () {
            var t, e, n, i, o, r, s, a, u, c, h, f, d, p, m, g;
            for (t = this, o = l.I(4), e = d = 0; 3 >= d; e = ++d) o.els[e][3] = t.perspective[e];
            for (c = (r = t.quaternion)[0], h = r[1], f = r[2], u = r[3], s = t.skew, i = [[1, 0], [2, 0], [2, 1]], e = p = 2; p >= 0; e = --p) s[e] && ((a = l.I(4)).els[i[e][0]][i[e][1]] = s[e], o = o.multiply(a));
            for (o = o.multiply(new l([[1 - 2 * (h * h + f * f), 2 * (c * h - f * u), 2 * (c * f + h * u), 0], [2 * (c * h + f * u), 1 - 2 * (c * c + f * f), 2 * (h * f - c * u), 0], [2 * (c * f - h * u), 2 * (h * f + c * u), 1 - 2 * (c * c + h * h), 0], [0, 0, 0, 1]])), e = m = 0; 2 >= m; e = ++m) {
                for (n = g = 0; 2 >= g; n = ++g) o.els[e][n] *= t.scale[e];
                o.els[3][e] = t.translate[e]
            }
            return o
        }, t
    }(), l = function () {
        function t(t) {
            this.els = t, this.toString = it(this.toString, this), this.decompose = it(this.decompose, this), this.inverse = it(this.inverse, this), this.augment = it(this.augment, this), this.toRightTriangular = it(this.toRightTriangular, this), this.transpose = it(this.transpose, this), this.multiply = it(this.multiply, this), this.dup = it(this.dup, this), this.e = it(this.e, this)
        }

        return t.prototype.e = function (t, e) {
            return 1 > t || t > this.els.length || 1 > e || e > this.els[0].length ? null : this.els[t - 1][e - 1]
        }, t.prototype.dup = function () {
            return new t(this.els)
        }, t.prototype.multiply = function (e) {
            var n, i, o, r, s, a, l, u, c, h, f, d, p;
            for (d = !!e.modulus, void 0 === (n = e.els || e)[0][0] && (n = new t(n).els), l = h = this.els.length, u = n[0].length, o = this.els[0].length, r = [], h += 1; --h;) for (r[s = l - h] = [], f = u, f += 1; --f;) {
                for (a = u - f, p = 0, c = o, c += 1; --c;) i = o - c, p += this.els[s][i] * n[i][a];
                r[s][a] = p
            }
            return n = new t(r), d ? n.col(1) : n
        }, t.prototype.transpose = function () {
            var e, n, i, o, r, s, a;
            for (a = this.els.length, n = [], r = e = this.els[0].length, r += 1; --r;) for (n[i = e - r] = [], s = a, s += 1; --s;) o = a - s, n[i][o] = this.els[o][i];
            return new t(n)
        }, t.prototype.toRightTriangular = function () {
            var t, e, n, i, o, r, s, a, l, u, c, h, f, d;
            for (t = this.dup(), o = a = this.els.length, r = this.els[0].length; --a;) {
                if (n = o - a, 0 === t.els[n][n]) for (i = c = f = n + 1; o >= f ? o > c : c > o; i = o >= f ? ++c : --c) if (0 !== t.els[i][n]) {
                    for (e = [], l = r, l += 1; --l;) u = r - l, e.push(t.els[n][u] + t.els[i][u]);
                    t.els[n] = e;
                    break
                }
                if (0 !== t.els[n][n]) for (i = h = d = n + 1; o >= d ? o > h : h > o; i = o >= d ? ++h : --h) {
                    for (s = t.els[i][n] / t.els[n][n], e = [], l = r, l += 1; --l;) u = r - l, e.push(n >= u ? 0 : t.els[i][u] - t.els[n][u] * s);
                    t.els[i] = e
                }
            }
            return t
        }, t.prototype.augment = function (e) {
            var n, i, o, r, s, a, l, u, c;
            if (void 0 === (n = e.els || e)[0][0] && (n = new t(n).els), o = (i = this.dup()).els[0].length, a = u = i.els.length, l = n[0].length, u !== n.length) return null;
            for (u += 1; --u;) for (r = a - u, c = l, c += 1; --c;) s = l - c, i.els[r][o + s] = n[r][s];
            return i
        }, t.prototype.inverse = function () {
            var e, n, i, o, r, s, a, l, u, c, h, f, d;
            for (a = c = this.els.length, l = (e = this.augment(t.I(c)).toRightTriangular()).els[0].length, r = [], c += 1; --c;) {
                for (i = [], h = l, r[o = c - 1] = [], n = e.els[o][o], h += 1; --h;) f = l - h, u = e.els[o][f] / n, i.push(u), f >= a && r[o].push(u);
                for (e.els[o] = i, s = d = 0; o >= 0 ? o > d : d > o; s = o >= 0 ? ++d : --d) {
                    for (i = [], h = l, h += 1; --h;) f = l - h, i.push(e.els[s][f] - e.els[o][f] * e.els[s][o]);
                    e.els[s] = i
                }
            }
            return new t(r)
        }, t.I = function (e) {
            var n, i, o, r, s;
            for (n = [], r = e, e += 1; --e;) for (n[i = r - e] = [], s = r, s += 1; --s;) o = r - s, n[i][o] = i === o ? 1 : 0;
            return new t(n)
        }, t.prototype.decompose = function () {
            var t, n, i, o, r, s, a, l, u, c, f, d, p, m, g, v, y, b, _, w, x, E, C, T, S, I, A, D, k, O, j, L, N, P, M;
            for (this, b = [], g = [], v = [], [], s = [], t = [], n = I = 0; 3 >= I; n = ++I) for (t[n] = [], i = A = 0; 3 >= A; i = ++A) t[n][i] = this.els[n][i];
            if (0 === t[3][3]) return !1;
            for (n = D = 0; 3 >= D; n = ++D) for (i = k = 0; 3 >= k; i = ++k) t[n][i] /= t[3][3];
            for (a = this.dup(), n = O = 0; 2 >= O; n = ++O) a.els[n][3] = 0;
            if (a.els[3][3] = 1, 0 !== t[0][3] || 0 !== t[1][3] || 0 !== t[2][3]) {
                for (c = new h(t.slice(0, 4)[3]), s = a.inverse().transpose().multiply(c).els, n = j = 0; 2 >= j; n = ++j) t[n][3] = 0;
                t[3][3] = 1
            } else s = [0, 0, 0, 1];
            for (n = L = 0; 2 >= L; n = ++L) b[n] = t[3][n], t[3][n] = 0;
            for (d = [], n = N = 0; 2 >= N; n = ++N) d[n] = new h(t[n].slice(0, 3));
            if (g[0] = d[0].length(), d[0] = d[0].normalize(), v[0] = d[0].dot(d[1]), d[1] = d[1].combine(d[0], 1, -v[0]), g[1] = d[1].length(), d[1] = d[1].normalize(), v[0] /= g[1], v[1] = d[0].dot(d[2]), d[2] = d[2].combine(d[0], 1, -v[1]), v[2] = d[1].dot(d[2]), d[2] = d[2].combine(d[1], 1, -v[2]), g[2] = d[2].length(), d[2] = d[2].normalize(), v[1] /= g[2], v[2] /= g[2], r = d[1].cross(d[2]), d[0].dot(r) < 0) for (n = P = 0; 2 >= P; n = ++P) for (g[n] *= -1, i = M = 0; 2 >= M; i = ++M) d[n].els[i] *= -1;
            for (w in p = function (t, e) {
                return d[t].els[e]
            }, (f = [])[1] = Math.asin(-p(0, 2)), 0 !== Math.cos(f[1]) ? (f[0] = Math.atan2(p(1, 2), p(2, 2)), f[2] = Math.atan2(p(0, 1), p(0, 0))) : (f[0] = Math.atan2(-p(2, 0), p(1, 1)), f[1] = 0), (y = p(0, 0) + p(1, 1) + p(2, 2) + 1) > 1e-4 ? (E = .25 / (m = .5 / Math.sqrt(y)), C = (p(2, 1) - p(1, 2)) * m, T = (p(0, 2) - p(2, 0)) * m, S = (p(1, 0) - p(0, 1)) * m) : p(0, 0) > p(1, 1) && p(0, 0) > p(2, 2) ? (C = .25 * (m = 2 * Math.sqrt(1 + p(0, 0) - p(1, 1) - p(2, 2))), T = (p(0, 1) + p(1, 0)) / m, S = (p(0, 2) + p(2, 0)) / m, E = (p(2, 1) - p(1, 2)) / m) : p(1, 1) > p(2, 2) ? (m = 2 * Math.sqrt(1 + p(1, 1) - p(0, 0) - p(2, 2)), C = (p(0, 1) + p(1, 0)) / m, T = .25 * m, S = (p(1, 2) + p(2, 1)) / m, E = (p(0, 2) - p(2, 0)) / m) : (m = 2 * Math.sqrt(1 + p(2, 2) - p(0, 0) - p(1, 1)), C = (p(0, 2) + p(2, 0)) / m, T = (p(1, 2) + p(2, 1)) / m, S = .25 * m, E = (p(1, 0) - p(0, 1)) / m), l = [C, T, S, E], (u = new e).translate = b, u.scale = g, u.skew = v, u.quaternion = l, u.perspective = s, u.rotate = f, u) for (o in _ = u[w]) x = _[o], isNaN(x) && (_[o] = 0);
            return u
        }, t.prototype.toString = function () {
            var t, e, n, i, o;
            for (n = "matrix3d(", t = i = 0; 3 >= i; t = ++i) for (e = o = 0; 3 >= o; e = ++o) n += q(this.els[t][e], 10), (3 !== t || 3 !== e) && (n += ",");
            return n + ")"
        }, t.matrixForTransform = _(function (t) {
            var e, n, i, o, r, s;
            return (e = document.createElement("div")).style.position = "absolute", e.style.visibility = "hidden", e.style[R("transform")] = t, document.body.appendChild(e), n = null != (o = null != (r = (i = window.getComputedStyle(e, null)).transform) ? r : i[R("transform")]) ? o : null != (s = S.tests) ? s.matrixForTransform(t) : void 0, document.body.removeChild(e), n
        }), t.fromTransform = function (e) {
            var n, i, o, r, s, a;
            for ((r = null != e ? e.match(/matrix3?d?\(([-0-9,e \.]*)\)/) : void 0) ? i = 6 === (n = (n = r[1].split(",")).map(parseFloat)).length ? [n[0], n[1], 0, 0, n[2], n[3], 0, 0, 0, 0, 1, 0, n[4], n[5], 0, 1] : n : i = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], s = [], o = a = 0; 3 >= a; o = ++a) s.push(i.slice(4 * o, 4 * o + 4));
            return new t(s)
        }, t
    }(), M = _(function (t) {
        var e, n, i, o, r, s, a, l, u, c;
        if (void 0 !== document.body.style[t]) return "";
        for (r = "", s = 0, l = (o = t.split("-")).length; l > s; s++) r += (i = o[s]).substring(0, 1).toUpperCase() + i.substring(1);
        for (a = 0, u = (c = ["Webkit", "Moz", "ms"]).length; u > a; a++) if (e = (n = c[a]) + r, void 0 !== document.body.style[e]) return n;
        return ""
    }), R = _(function (t) {
        var e;
        return "Moz" === (e = M(t)) ? "" + e + (t.substring(0, 1).toUpperCase() + t.substring(1)) : "" !== e ? "-" + e.toLowerCase() + "-" + J(t) : J(t)
    }), H = "undefined" != typeof window && null !== window ? window.requestAnimationFrame : void 0, p = [], m = [], U = !1, V = 1, "undefined" != typeof window && null !== window && window.addEventListener("keyup", function (t) {
        return 68 === t.keyCode && t.shiftKey && t.ctrlKey ? S.toggleSlow() : void 0
    }), null == H && (O = 0, H = function (t) {
        var e, n, i;
        return e = Date.now(), i = Math.max(0, 16 - (e - O)), n = window.setTimeout(function () {
            return t(e + i)
        }, i), O = e + i, n
    }), W = !1, $ = !1, Q = function () {
        return W ? void 0 : (W = !0, H(F))
    }, F = function (t) {
        var e, n, i, o;
        if (!$) {
            for (n = [], i = 0, o = p.length; o > i; i++) e = p[i], d(t, e) || n.push(e);
            return 0 === (p = p.filter(function (t) {
                return -1 === n.indexOf(t)
            })).length ? W = !1 : H(F)
        }
        H(F)
    }, d = function (t, e) {
        var n, i, o, r, s, a, l, u;
        if (null == e.tStart && (e.tStart = t), r = (t - e.tStart) / e.options.duration, s = e.curve(r), i = {}, r >= 1) i = e.curve.returnsToSelf ? e.properties.start : e.properties.end; else for (n in u = e.properties.start) o = u[n], i[n] = A(o, e.properties.end[n], s);
        return v(e.el, i), "function" == typeof (a = e.options).change && a.change(e.el), r >= 1 && "function" == typeof (l = e.options).complete && l.complete(e.el), 1 > r
    }, A = function (t, e, n) {
        return null != t && null != t.interpolate ? t.interpolate(e, n) : null
    }, Y = function (t, e, n, i) {
        var o, s, c, h, f, d, g, v;
        if (null != i && (m = m.filter(function (t) {
            return t.id !== i
        })), S.stop(t, {timeout: !1}), !n.animated) return S.css(t, e), void ("function" == typeof n.complete && n.complete(this));
        for (h in e = P(e), d = I(t, Object.keys(e)), o = {}, g = [], e) v = e[h], null != t.style && tt.contains(h) ? g.push([h, v]) : ((s = E(v)) instanceof r && null != t.style && (s = new a([s, nt(h, 0)])), o[h] = s);
        return g.length > 0 && ((c = k(t)) ? (f = new u).applyProperties(g) : (v = g.map(function (t) {
            return et(t[0], t[1])
        }).join(" "), f = l.fromTransform(l.matrixForTransform(v))), o.transform = f.decompose(), c && d.transform.applyRotateCenter([o.transform.props.rotate[1], o.transform.props.rotate[2]])), p.push({
            el: t,
            properties: {start: d, end: o},
            options: n,
            curve: n.type.call(n.type, n)
        }), Q()
    }, Z = [], G = 0, B = function (t) {
        return D() ? t.realTimeoutId = setTimeout(function () {
            return t.fn(), w(t.id)
        }, t.delay) : void 0
    }, f = function (t, e) {
        var n;
        return n = {id: G += 1, tStart: Date.now(), fn: t, delay: e, originalDelay: e}, B(n), Z.push(n), G
    }, w = function (t) {
        return Z = Z.filter(function (e) {
            return e.id === t && clearTimeout(e.realTimeoutId), e.id !== t
        })
    }, j = function (t, e) {
        var n;
        return null != t ? (n = t - e.tStart, e.originalDelay - n) : e.originalDelay
    }, "undefined" != typeof window && null !== window && window.addEventListener("unload", function () {
    }), K = null, N(function (t) {
        var e, n, i, o, r, s, a, l, u, c;
        if ($ = !t, t) {
            if (W) for (n = Date.now() - K, r = 0, l = p.length; l > r; r++) null != (e = p[r]).tStart && (e.tStart += n);
            for (s = 0, u = Z.length; u > s; s++) (i = Z[s]).delay = j(K, i), B(i);
            return K = null
        }
        for (K = Date.now(), c = [], o = 0, a = Z.length; a > o; o++) i = Z[o], c.push(clearTimeout(i.realTimeoutId));
        return c
    }), (S = {}).linear = function () {
        return function (t) {
            return t
        }
    }, S.spring = function (t) {
        var e, n, i, o, r;
        return null == t && (t = {}), g(t, S.spring.defaults), i = Math.max(1, t.frequency / 20), o = Math.pow(20, t.friction / 100), r = t.anticipationSize / 1e3, Math.max(0, r), e = function (e) {
            var n, i;
            return .8, 0, (.8 - (n = ((i = r / (1 - r)) - 0) / (i - 0))) / i * e * t.anticipationStrength / 100 + n
        }, n = function (t) {
            return Math.pow(o / 10, -t) * (1 - t)
        }, function (t) {
            var o, s, a, l, u, c, h, f;
            return c = t / (1 - r) - r / (1 - r), r > t ? (f = r / (1 - r) - r / (1 - r), h = 0 / (1 - r) - r / (1 - r), u = Math.acos(1 / e(f)), a = (Math.acos(1 / e(h)) - u) / (i * -r), o = e) : (o = n, u = 0, a = 1), s = o(c), l = i * (t - r) * a + u, 1 - s * Math.cos(l)
        }
    }, S.bounce = function (t) {
        var e, n, i, o;
        return null == t && (t = {}), g(t, S.bounce.defaults), i = Math.max(1, t.frequency / 20), o = Math.pow(20, t.friction / 100), e = function (t) {
            return Math.pow(o / 10, -t) * (1 - t)
        }, (n = function (t) {
            var n, o;
            return -1.57, 1, n = e(t), o = i * t * 1 - 1.57, n * Math.cos(o)
        }).returnsToSelf = !0, n
    }, S.gravity = function (t) {
        var e, n, i, o, r, s;
        return null == t && (t = {}), g(t, S.gravity.defaults), n = Math.min(t.bounciness / 1250, .8), o = t.elasticity / 1e3, 100, i = [], e = function () {
            var i, o;
            for (o = {
                a: -(i = Math.sqrt(.02)),
                b: i,
                H: 1
            }, t.returnsToSelf && (o.a = 0, o.b = 2 * o.b); o.H > .001;) e = o.b - o.a, o = {
                a: o.b,
                b: o.b + e * n,
                H: o.H * n * n
            };
            return o.b
        }(), s = function (n, i, o, r) {
            var s, a;
            return s = (a = 2 / (e = i - n) * r - 1 - 2 * n / e) * a * o - o + 1, t.returnsToSelf && (s = 1 - s), s
        }, function () {
            var r, s, a, l;
            for (a = {
                a: -(s = Math.sqrt(2 / (100 * e * e))),
                b: s,
                H: 1
            }, t.returnsToSelf && (a.a = 0, a.b = 2 * a.b), i.push(a), r = e, l = []; a.b < 1 && a.H > .001;) r = a.b - a.a, a = {
                a: a.b,
                b: a.b + r * n,
                H: a.H * o
            }, l.push(i.push(a))
        }(), (r = function (e) {
            var n, o;
            for (n = i[o = 0]; !(e >= n.a && e <= n.b) && (n = i[o += 1]);) ;
            return n ? s(n.a, n.b, n.H, e) : t.returnsToSelf ? 0 : 1
        }).returnsToSelf = t.returnsToSelf, r
    }, S.forceWithGravity = function (t) {
        return null == t && (t = {}), g(t, S.forceWithGravity.defaults), t.returnsToSelf = !0, S.gravity(t)
    }, S.bezier = function () {
        var t, e, n;
        return e = function (t, e, n, i, o) {
            return Math.pow(1 - t, 3) * e + 3 * Math.pow(1 - t, 2) * t * n + 3 * (1 - t) * Math.pow(t, 2) * i + Math.pow(t, 3) * o
        }, t = function (t, n, i, o, r) {
            return {x: e(t, n.x, i.x, o.x, r.x), y: e(t, n.y, i.y, o.y, r.y)}
        }, n = function (t, e, n) {
            var i, o, r, s, a, l, u, c, h;
            for (i = null, c = 0, h = e.length; h > c && (t >= (o = e[c])(0).x && t <= o(1).x && (i = o), null === i); c++) ;
            if (!i) return n ? 0 : 1;
            for (1e-4, u = i(a = ((l = 1) + (s = 0)) / 2).x, r = 0; Math.abs(t - u) > 1e-4 && 100 > r;) t > u ? s = a : l = a, u = i(a = (l + s) / 2).x, r += 1;
            return i(a).y
        }, function (e) {
            var i, o, r;
            return null == e && (e = {}), r = e.points, i = function () {
                var e, n, o;
                for (e in i = [], o = function (e, n) {
                    var o;
                    return o = function (i) {
                        return t(i, e, e.cp[e.cp.length - 1], n.cp[0], n)
                    }, i.push(o)
                }, r) {
                    if ((n = parseInt(e)) >= r.length - 1) break;
                    o(r[n], r[n + 1])
                }
                return i
            }(), (o = function (t) {
                return 0 === t ? 0 : 1 === t ? 1 : n(t, i, this.returnsToSelf)
            }).returnsToSelf = 0 === r[r.length - 1].y, o
        }
    }(), S.easeInOut = function (t) {
        var e, n;
        return null == t && (t = {}), e = null != (n = t.friction) ? n : S.easeInOut.defaults.friction, S.bezier({
            points: [{
                x: 0,
                y: 0,
                cp: [{x: .92 - e / 1e3, y: 0}]
            }, {x: 1, y: 1, cp: [{x: .08 + e / 1e3, y: 1}]}]
        })
    }, S.easeIn = function (t) {
        var e, n;
        return null == t && (t = {}), e = null != (n = t.friction) ? n : S.easeIn.defaults.friction, S.bezier({
            points: [{
                x: 0,
                y: 0,
                cp: [{x: .92 - e / 1e3, y: 0}]
            }, {x: 1, y: 1, cp: [{x: 1, y: 1}]}]
        })
    }, S.easeOut = function (t) {
        var e, n;
        return null == t && (t = {}), e = null != (n = t.friction) ? n : S.easeOut.defaults.friction, S.bezier({
            points: [{
                x: 0,
                y: 0,
                cp: [{x: 0, y: 0}]
            }, {x: 1, y: 1, cp: [{x: .08 + e / 1e3, y: 1}]}]
        })
    }, S.spring.defaults = {
        frequency: 300,
        friction: 200,
        anticipationSize: 0,
        anticipationStrength: 0
    }, S.bounce.defaults = {
        frequency: 300,
        friction: 200
    }, S.forceWithGravity.defaults = S.gravity.defaults = {
        bounciness: 400,
        elasticity: 200
    }, S.easeInOut.defaults = S.easeIn.defaults = S.easeOut.defaults = {friction: 500}, S.css = L(function (t, e) {
        return y(t, e, !0)
    }), S.animate = L(function (t, e, n) {
        var i;
        return null == n && (n = {}), n = x(n), g(n, {
            type: S.easeInOut,
            duration: 1e3,
            delay: 0,
            animated: !0
        }), n.duration = Math.max(0, n.duration * V), n.delay = Math.max(0, n.delay), 0 === n.delay ? Y(t, e, n) : (i = S.setTimeout(function () {
            return Y(t, e, n, i)
        }, n.delay), m.push({id: i, el: t}))
    }), S.stop = L(function (t, e) {
        return null == e && (e = {}), null == e.timeout && (e.timeout = !0), e.timeout && (m = m.filter(function (n) {
            return n.el !== t || null != e.filter && !e.filter(n) || (S.clearTimeout(n.id), !1)
        })), p = p.filter(function (e) {
            return e.el !== t
        })
    }), S.setTimeout = function (t, e) {
        return f(t, e * V)
    }, S.clearTimeout = function (t) {
        return w(t)
    }, S.toggleSlow = function () {
        return V = (U = !U) ? 3 : 1, "undefined" != typeof console && null !== console && "function" == typeof console.log ? console.log("dynamics.js: slow animations " + (U ? "enabled" : "disabled")) : void 0
    }, "object" == typeof module && "object" == typeof module.exports ? module.exports = S : "function" == typeof define ? define("dynamics", function () {
        return S
    }) : window.dynamics = S
}.call(this), function (t) {
    "use strict";

    function e(t) {
        return new RegExp("(^|\\s+)" + t + "(\\s+|$)")
    }

    var n, i, o;

    function r(t, e) {
        (n(t, e) ? o : i)(t, e)
    }

    "classList" in document.documentElement ? (n = function (t, e) {
        return t.classList.contains(e)
    }, i = function (t, e) {
        t.classList.add(e)
    }, o = function (t, e) {
        t.classList.remove(e)
    }) : (n = function (t, n) {
        return e(n).test(t.className)
    }, i = function (t, e) {
        n(t, e) || (t.className = t.className + " " + e)
    }, o = function (t, n) {
        t.className = t.className.replace(e(n), " ")
    });
    var s = {hasClass: n, addClass: i, removeClass: o, toggleClass: r, has: n, add: i, remove: o, toggle: r};
    "function" == typeof define && define.amd ? define(s) : "object" == typeof exports ? module.exports = s : t.classie = s
}(window);