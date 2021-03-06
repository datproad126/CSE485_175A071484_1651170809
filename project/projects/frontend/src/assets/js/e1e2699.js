! function(a, b) {
   "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
       if (!a.document) throw new Error("jQuery requires a window with a document");
       return b(a)
   } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
   var c = [],
       d = c.slice,
       e = c.concat,
       f = c.push,
       g = c.indexOf,
       h = {},
       i = h.toString,
       j = h.hasOwnProperty,
       k = {},
       l = a.document,
       m = "2.1.4",
       n = function(a, b) {
           return new n.fn.init(a, b)
       },
       o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
       p = /^-ms-/,
       q = /-([\da-z])/gi,
       r = function(a, b) {
           return b.toUpperCase()
       };
   n.fn = n.prototype = {
       jquery: m,
       constructor: n,
       selector: "",
       length: 0,
       toArray: function() {
           return d.call(this)
       },
       get: function(a) {
           return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
       },
       pushStack: function(a) {
           var b = n.merge(this.constructor(), a);
           return b.prevObject = this, b.context = this.context, b
       },
       each: function(a, b) {
           return n.each(this, a, b)
       },
       map: function(a) {
           return this.pushStack(n.map(this, function(b, c) {
               return a.call(b, c, b)
           }))
       },
       slice: function() {
           return this.pushStack(d.apply(this, arguments))
       },
       first: function() {
           return this.eq(0)
       },
       last: function() {
           return this.eq(-1)
       },
       eq: function(a) {
           var b = this.length,
               c = +a + (0 > a ? b : 0);
           return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
       },
       end: function() {
           return this.prevObject || this.constructor(null)
       },
       push: f,
       sort: c.sort,
       splice: c.splice
   }, n.extend = n.fn.extend = function() {
       var a, b, c, d, e, f, g = arguments[0] || {},
           h = 1,
           i = arguments.length,
           j = !1;
       for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
           if (null != (a = arguments[h]))
               for (b in a) c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
       return g
   }, n.extend({
       expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
       isReady: !0,
       error: function(a) {
           throw new Error(a)
       },
       noop: function() {},
       isFunction: function(a) {
           return "function" === n.type(a)
       },
       isArray: Array.isArray,
       isWindow: function(a) {
           return null != a && a === a.window
       },
       isNumeric: function(a) {
           return !n.isArray(a) && a - parseFloat(a) + 1 >= 0
       },
       isPlainObject: function(a) {
           return "object" !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
       },
       isEmptyObject: function(a) {
           var b;
           for (b in a) return !1;
           return !0
       },
       type: function(a) {
           return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
       },
       globalEval: function(a) {
           var b, c = eval;
           a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = l.createElement("script"), b.text = a, l.head.appendChild(b).parentNode.removeChild(b)) : c(a))
       },
       camelCase: function(a) {
           return a.replace(p, "ms-").replace(q, r)
       },
       nodeName: function(a, b) {
           return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
       },
       each: function(a, b, c) {
           var d, e = 0,
               f = a.length,
               g = s(a);
           if (c) {
               if (g) {
                   for (; f > e; e++)
                       if (d = b.apply(a[e], c), d === !1) break
               } else
                   for (e in a)
                       if (d = b.apply(a[e], c), d === !1) break
           } else if (g) {
               for (; f > e; e++)
                   if (d = b.call(a[e], e, a[e]), d === !1) break
           } else
               for (e in a)
                   if (d = b.call(a[e], e, a[e]), d === !1) break;
           return a
       },
       trim: function(a) {
           return null == a ? "" : (a + "").replace(o, "")
       },
       makeArray: function(a, b) {
           var c = b || [];
           return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
       },
       inArray: function(a, b, c) {
           return null == b ? -1 : g.call(b, a, c)
       },
       merge: function(a, b) {
           for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
           return a.length = e, a
       },
       grep: function(a, b, c) {
           for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
           return e
       },
       map: function(a, b, c) {
           var d, f = 0,
               g = a.length,
               h = s(a),
               i = [];
           if (h)
               for (; g > f; f++) d = b(a[f], f, c), null != d && i.push(d);
           else
               for (f in a) d = b(a[f], f, c), null != d && i.push(d);
           return e.apply([], i)
       },
       guid: 1,
       proxy: function(a, b) {
           var c, e, f;
           return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (e = d.call(arguments, 2), f = function() {
               return a.apply(b || this, e.concat(d.call(arguments)))
           }, f.guid = a.guid = a.guid || n.guid++, f) : void 0
       },
       now: Date.now,
       support: k
   }), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
       h["[object " + b + "]"] = b.toLowerCase()
   });

   function s(a) {
       var b = "length" in a && a.length,
           c = n.type(a);
       return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
   }
   var t = function(a) {
       var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
           v = a.document,
           w = 0,
           x = 0,
           y = ha(),
           z = ha(),
           A = ha(),
           B = function(a, b) {
               return a === b && (l = !0), 0
           },
           C = 1 << 31,
           D = {}.hasOwnProperty,
           E = [],
           F = E.pop,
           G = E.push,
           H = E.push,
           I = E.slice,
           J = function(a, b) {
               for (var c = 0, d = a.length; d > c; c++)
                   if (a[c] === b) return c;
               return -1
           },
           K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
           L = "[\\x20\\t\\r\\n\\f]",
           M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
           N = M.replace("w", "w#"),
           O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]",
           P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)",
           Q = new RegExp(L + "+", "g"),
           R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
           S = new RegExp("^" + L + "*," + L + "*"),
           T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
           U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
           V = new RegExp(P),
           W = new RegExp("^" + N + "$"),
           X = {
               ID: new RegExp("^#(" + M + ")"),
               CLASS: new RegExp("^\\.(" + M + ")"),
               TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
               ATTR: new RegExp("^" + O),
               PSEUDO: new RegExp("^" + P),
               CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
               bool: new RegExp("^(?:" + K + ")$", "i"),
               needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
           },
           Y = /^(?:input|select|textarea|button)$/i,
           Z = /^h\d$/i,
           $ = /^[^{]+\{\s*\[native \w/,
           _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
           aa = /[+~]/,
           ba = /'|\\/g,
           ca = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
           da = function(a, b, c) {
               var d = "0x" + b - 65536;
               return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
           },
           ea = function() {
               m()
           };
       try {
           H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
       } catch (fa) {
           H = {
               apply: E.length ? function(a, b) {
                   G.apply(a, I.call(b))
               } : function(a, b) {
                   var c = a.length,
                       d = 0;
                   while (a[c++] = b[d++]);
                   a.length = c - 1
               }
           }
       }

       function ga(a, b, d, e) {
           var f, h, j, k, l, o, r, s, w, x;
           if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k) return d;
           if (!e && p) {
               if (11 !== k && (f = _.exec(a)))
                   if (j = f[1]) {
                       if (9 === k) {
                           if (h = b.getElementById(j), !h || !h.parentNode) return d;
                           if (h.id === j) return d.push(h), d
                       } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), d
                   } else {
                       if (f[2]) return H.apply(d, b.getElementsByTagName(a)), d;
                       if ((j = f[3]) && c.getElementsByClassName) return H.apply(d, b.getElementsByClassName(j)), d
                   } if (c.qsa && (!q || !q.test(a))) {
                   if (s = r = u, w = b, x = 1 !== k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
                       o = g(a), (r = b.getAttribute("id")) ? s = r.replace(ba, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;
                       while (l--) o[l] = s + ra(o[l]);
                       w = aa.test(a) && pa(b.parentNode) || b, x = o.join(",")
                   }
                   if (x) try {
                       return H.apply(d, w.querySelectorAll(x)), d
                   } catch (y) {} finally {
                       r || b.removeAttribute("id")
                   }
               }
           }
           return i(a.replace(R, "$1"), b, d, e)
       }

       function ha() {
           var a = [];

           function b(c, e) {
               return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
           }
           return b
       }

       function ia(a) {
           return a[u] = !0, a
       }

       function ja(a) {
           var b = n.createElement("div");
           try {
               return !!a(b)
           } catch (c) {
               return !1
           } finally {
               b.parentNode && b.parentNode.removeChild(b), b = null
           }
       }

       function ka(a, b) {
           var c = a.split("|"),
               e = a.length;
           while (e--) d.attrHandle[c[e]] = b
       }

       function la(a, b) {
           var c = b && a,
               d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
           if (d) return d;
           if (c)
               while (c = c.nextSibling)
                   if (c === b) return -1;
           return a ? 1 : -1
       }

       function ma(a) {
           return function(b) {
               var c = b.nodeName.toLowerCase();
               return "input" === c && b.type === a
           }
       }

       function na(a) {
           return function(b) {
               var c = b.nodeName.toLowerCase();
               return ("input" === c || "button" === c) && b.type === a
           }
       }

       function oa(a) {
           return ia(function(b) {
               return b = +b, ia(function(c, d) {
                   var e, f = a([], c.length, b),
                       g = f.length;
                   while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
               })
           })
       }

       function pa(a) {
           return a && "undefined" != typeof a.getElementsByTagName && a
       }
       c = ga.support = {}, f = ga.isXML = function(a) {
           var b = a && (a.ownerDocument || a).documentElement;
           return b ? "HTML" !== b.nodeName : !1
       }, m = ga.setDocument = function(a) {
           var b, e, g = a ? a.ownerDocument || a : v;
           return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", ea, !1) : e.attachEvent && e.attachEvent("onunload", ea)), p = !f(g), c.attributes = ja(function(a) {
               return a.className = "i", !a.getAttribute("className")
           }), c.getElementsByTagName = ja(function(a) {
               return a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length
           }), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = ja(function(a) {
               return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length
           }), c.getById ? (d.find.ID = function(a, b) {
               if ("undefined" != typeof b.getElementById && p) {
                   var c = b.getElementById(a);
                   return c && c.parentNode ? [c] : []
               }
           }, d.filter.ID = function(a) {
               var b = a.replace(ca, da);
               return function(a) {
                   return a.getAttribute("id") === b
               }
           }) : (delete d.find.ID, d.filter.ID = function(a) {
               var b = a.replace(ca, da);
               return function(a) {
                   var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                   return c && c.value === b
               }
           }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
               return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
           } : function(a, b) {
               var c, d = [],
                   e = 0,
                   f = b.getElementsByTagName(a);
               if ("*" === a) {
                   while (c = f[e++]) 1 === c.nodeType && d.push(c);
                   return d
               }
               return f
           }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
               return p ? b.getElementsByClassName(a) : void 0
           }, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (ja(function(a) {
               o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
           }), ja(function(a) {
               var b = g.createElement("input");
               b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
           })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function(a) {
               c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P)
           }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function(a, b) {
               var c = 9 === a.nodeType ? a.documentElement : a,
                   d = b && b.parentNode;
               return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
           } : function(a, b) {
               if (b)
                   while (b = b.parentNode)
                       if (b === a) return !0;
               return !1
           }, B = b ? function(a, b) {
               if (a === b) return l = !0, 0;
               var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
               return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
           } : function(a, b) {
               if (a === b) return l = !0, 0;
               var c, d = 0,
                   e = a.parentNode,
                   f = b.parentNode,
                   h = [a],
                   i = [b];
               if (!e || !f) return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
               if (e === f) return la(a, b);
               c = a;
               while (c = c.parentNode) h.unshift(c);
               c = b;
               while (c = c.parentNode) i.unshift(c);
               while (h[d] === i[d]) d++;
               return d ? la(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
           }, g) : n
       }, ga.matches = function(a, b) {
           return ga(a, null, null, b)
       }, ga.matchesSelector = function(a, b) {
           if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try {
               var d = s.call(a, b);
               if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
           } catch (e) {}
           return ga(b, n, null, [a]).length > 0
       }, ga.contains = function(a, b) {
           return (a.ownerDocument || a) !== n && m(a), t(a, b)
       }, ga.attr = function(a, b) {
           (a.ownerDocument || a) !== n && m(a);
           var e = d.attrHandle[b.toLowerCase()],
               f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
           return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
       }, ga.error = function(a) {
           throw new Error("Syntax error, unrecognized expression: " + a)
       }, ga.uniqueSort = function(a) {
           var b, d = [],
               e = 0,
               f = 0;
           if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
               while (b = a[f++]) b === a[f] && (e = d.push(f));
               while (e--) a.splice(d[e], 1)
           }
           return k = null, a
       }, e = ga.getText = function(a) {
           var b, c = "",
               d = 0,
               f = a.nodeType;
           if (f) {
               if (1 === f || 9 === f || 11 === f) {
                   if ("string" == typeof a.textContent) return a.textContent;
                   for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
               } else if (3 === f || 4 === f) return a.nodeValue
           } else
               while (b = a[d++]) c += e(b);
           return c
       }, d = ga.selectors = {
           cacheLength: 50,
           createPseudo: ia,
           match: X,
           attrHandle: {},
           find: {},
           relative: {
               ">": {
                   dir: "parentNode",
                   first: !0
               },
               " ": {
                   dir: "parentNode"
               },
               "+": {
                   dir: "previousSibling",
                   first: !0
               },
               "~": {
                   dir: "previousSibling"
               }
           },
           preFilter: {
               ATTR: function(a) {
                   return a[1] = a[1].replace(ca, da), a[3] = (a[3] || a[4] || a[5] || "").replace(ca, da), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
               },
               CHILD: function(a) {
                   return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a
               },
               PSEUDO: function(a) {
                   var b, c = !a[6] && a[2];
                   return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
               }
           },
           filter: {
               TAG: function(a) {
                   var b = a.replace(ca, da).toLowerCase();
                   return "*" === a ? function() {
                       return !0
                   } : function(a) {
                       return a.nodeName && a.nodeName.toLowerCase() === b
                   }
               },
               CLASS: function(a) {
                   var b = y[a + " "];
                   return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                       return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                   })
               },
               ATTR: function(a, b, c) {
                   return function(d) {
                       var e = ga.attr(d, a);
                       return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                   }
               },
               CHILD: function(a, b, c, d, e) {
                   var f = "nth" !== a.slice(0, 3),
                       g = "last" !== a.slice(-4),
                       h = "of-type" === b;
                   return 1 === d && 0 === e ? function(a) {
                       return !!a.parentNode
                   } : function(b, c, i) {
                       var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                           q = b.parentNode,
                           r = h && b.nodeName.toLowerCase(),
                           s = !i && !h;
                       if (q) {
                           if (f) {
                               while (p) {
                                   l = b;
                                   while (l = l[p])
                                       if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                   o = p = "only" === a && !o && "nextSibling"
                               }
                               return !0
                           }
                           if (o = [g ? q.firstChild : q.lastChild], g && s) {
                               k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
                               while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                   if (1 === l.nodeType && ++m && l === b) {
                                       k[a] = [w, n, m];
                                       break
                                   }
                           } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1];
                           else
                               while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                   if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)) break;
                           return m -= e, m === d || m % d === 0 && m / d >= 0
                       }
                   }
               },
               PSEUDO: function(a, b) {
                   var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
                   return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function(a, c) {
                       var d, f = e(a, b),
                           g = f.length;
                       while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g])
                   }) : function(a) {
                       return e(a, 0, c)
                   }) : e
               }
           },
           pseudos: {
               not: ia(function(a) {
                   var b = [],
                       c = [],
                       d = h(a.replace(R, "$1"));
                   return d[u] ? ia(function(a, b, c, e) {
                       var f, g = d(a, null, e, []),
                           h = a.length;
                       while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                   }) : function(a, e, f) {
                       return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                   }
               }),
               has: ia(function(a) {
                   return function(b) {
                       return ga(a, b).length > 0
                   }
               }),
               contains: ia(function(a) {
                   return a = a.replace(ca, da),
                       function(b) {
                           return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                       }
               }),
               lang: ia(function(a) {
                   return W.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(ca, da).toLowerCase(),
                       function(b) {
                           var c;
                           do
                               if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                           return !1
                       }
               }),
               target: function(b) {
                   var c = a.location && a.location.hash;
                   return c && c.slice(1) === b.id
               },
               root: function(a) {
                   return a === o
               },
               focus: function(a) {
                   return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
               },
               enabled: function(a) {
                   return a.disabled === !1
               },
               disabled: function(a) {
                   return a.disabled === !0
               },
               checked: function(a) {
                   var b = a.nodeName.toLowerCase();
                   return "input" === b && !!a.checked || "option" === b && !!a.selected
               },
               selected: function(a) {
                   return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
               },
               empty: function(a) {
                   for (a = a.firstChild; a; a = a.nextSibling)
                       if (a.nodeType < 6) return !1;
                   return !0
               },
               parent: function(a) {
                   return !d.pseudos.empty(a)
               },
               header: function(a) {
                   return Z.test(a.nodeName)
               },
               input: function(a) {
                   return Y.test(a.nodeName)
               },
               button: function(a) {
                   var b = a.nodeName.toLowerCase();
                   return "input" === b && "button" === a.type || "button" === b
               },
               text: function(a) {
                   var b;
                   return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
               },
               first: oa(function() {
                   return [0]
               }),
               last: oa(function(a, b) {
                   return [b - 1]
               }),
               eq: oa(function(a, b, c) {
                   return [0 > c ? c + b : c]
               }),
               even: oa(function(a, b) {
                   for (var c = 0; b > c; c += 2) a.push(c);
                   return a
               }),
               odd: oa(function(a, b) {
                   for (var c = 1; b > c; c += 2) a.push(c);
                   return a
               }),
               lt: oa(function(a, b, c) {
                   for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                   return a
               }),
               gt: oa(function(a, b, c) {
                   for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                   return a
               })
           }
       }, d.pseudos.nth = d.pseudos.eq;
       for (b in {
               radio: !0,
               checkbox: !0,
               file: !0,
               password: !0,
               image: !0
           }) d.pseudos[b] = ma(b);
       for (b in {
               submit: !0,
               reset: !0
           }) d.pseudos[b] = na(b);

       function qa() {}
       qa.prototype = d.filters = d.pseudos, d.setFilters = new qa, g = ga.tokenize = function(a, b) {
           var c, e, f, g, h, i, j, k = z[a + " "];
           if (k) return b ? 0 : k.slice(0);
           h = a, i = [], j = d.preFilter;
           while (h) {
               (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
                   value: c,
                   type: e[0].replace(R, " ")
               }), h = h.slice(c.length));
               for (g in d.filter) !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                   value: c,
                   type: g,
                   matches: e
               }), h = h.slice(c.length));
               if (!c) break
           }
           return b ? h.length : h ? ga.error(a) : z(a, i).slice(0)
       };

       function ra(a) {
           for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
           return d
       }

       function sa(a, b, c) {
           var d = b.dir,
               e = c && "parentNode" === d,
               f = x++;
           return b.first ? function(b, c, f) {
               while (b = b[d])
                   if (1 === b.nodeType || e) return a(b, c, f)
           } : function(b, c, g) {
               var h, i, j = [w, f];
               if (g) {
                   while (b = b[d])
                       if ((1 === b.nodeType || e) && a(b, c, g)) return !0
               } else
                   while (b = b[d])
                       if (1 === b.nodeType || e) {
                           if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2];
                           if (i[d] = j, j[2] = a(b, c, g)) return !0
                       }
           }
       }

       function ta(a) {
           return a.length > 1 ? function(b, c, d) {
               var e = a.length;
               while (e--)
                   if (!a[e](b, c, d)) return !1;
               return !0
           } : a[0]
       }

       function ua(a, b, c) {
           for (var d = 0, e = b.length; e > d; d++) ga(a, b[d], c);
           return c
       }

       function va(a, b, c, d, e) {
           for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
           return g
       }

       function wa(a, b, c, d, e, f) {
           return d && !d[u] && (d = wa(d)), e && !e[u] && (e = wa(e, f)), ia(function(f, g, h, i) {
               var j, k, l, m = [],
                   n = [],
                   o = g.length,
                   p = f || ua(b || "*", h.nodeType ? [h] : h, []),
                   q = !a || !f && b ? p : va(p, m, a, h, i),
                   r = c ? e || (f ? a : o || d) ? [] : g : q;
               if (c && c(q, r, h, i), d) {
                   j = va(r, n), d(j, [], h, i), k = j.length;
                   while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
               }
               if (f) {
                   if (e || a) {
                       if (e) {
                           j = [], k = r.length;
                           while (k--)(l = r[k]) && j.push(q[k] = l);
                           e(null, r = [], j, i)
                       }
                       k = r.length;
                       while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                   }
               } else r = va(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
           })
       }

       function xa(a) {
           for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sa(function(a) {
                   return a === b
               }, h, !0), l = sa(function(a) {
                   return J(b, a) > -1
               }, h, !0), m = [function(a, c, d) {
                   var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                   return b = null, e
               }]; f > i; i++)
               if (c = d.relative[a[i].type]) m = [sa(ta(m), c)];
               else {
                   if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                       for (e = ++i; f > e; e++)
                           if (d.relative[a[e].type]) break;
                       return wa(i > 1 && ta(m), i > 1 && ra(a.slice(0, i - 1).concat({
                           value: " " === a[i - 2].type ? "*" : ""
                       })).replace(R, "$1"), c, e > i && xa(a.slice(i, e)), f > e && xa(a = a.slice(e)), f > e && ra(a))
                   }
                   m.push(c)
               } return ta(m)
       }

       function ya(a, b) {
           var c = b.length > 0,
               e = a.length > 0,
               f = function(f, g, h, i, k) {
                   var l, m, o, p = 0,
                       q = "0",
                       r = f && [],
                       s = [],
                       t = j,
                       u = f || e && d.find.TAG("*", k),
                       v = w += null == t ? 1 : Math.random() || .1,
                       x = u.length;
                   for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                       if (e && l) {
                           m = 0;
                           while (o = a[m++])
                               if (o(l, g, h)) {
                                   i.push(l);
                                   break
                               } k && (w = v)
                       }
                       c && ((l = !o && l) && p--, f && r.push(l))
                   }
                   if (p += q, c && q !== p) {
                       m = 0;
                       while (o = b[m++]) o(r, s, g, h);
                       if (f) {
                           if (p > 0)
                               while (q--) r[q] || s[q] || (s[q] = F.call(i));
                           s = va(s)
                       }
                       H.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i)
                   }
                   return k && (w = v, j = t), r
               };
           return c ? ia(f) : f
       }
       return h = ga.compile = function(a, b) {
           var c, d = [],
               e = [],
               f = A[a + " "];
           if (!f) {
               b || (b = g(a)), c = b.length;
               while (c--) f = xa(b[c]), f[u] ? d.push(f) : e.push(f);
               f = A(a, ya(e, d)), f.selector = a
           }
           return f
       }, i = ga.select = function(a, b, e, f) {
           var i, j, k, l, m, n = "function" == typeof a && a,
               o = !f && g(a = n.selector || a);
           if (e = e || [], 1 === o.length) {
               if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                   if (b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0], !b) return e;
                   n && (b = b.parentNode), a = a.slice(j.shift().value.length)
               }
               i = X.needsContext.test(a) ? 0 : j.length;
               while (i--) {
                   if (k = j[i], d.relative[l = k.type]) break;
                   if ((m = d.find[l]) && (f = m(k.matches[0].replace(ca, da), aa.test(j[0].type) && pa(b.parentNode) || b))) {
                       if (j.splice(i, 1), a = f.length && ra(j), !a) return H.apply(e, f), e;
                       break
                   }
               }
           }
           return (n || h(a, o))(f, b, !p, e, aa.test(a) && pa(b.parentNode) || b), e
       }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function(a) {
           return 1 & a.compareDocumentPosition(n.createElement("div"))
       }), ja(function(a) {
           return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
       }) || ka("type|href|height|width", function(a, b, c) {
           return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
       }), c.attributes && ja(function(a) {
           return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
       }) || ka("value", function(a, b, c) {
           return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
       }), ja(function(a) {
           return null == a.getAttribute("disabled")
       }) || ka(K, function(a, b, c) {
           var d;
           return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
       }), ga
   }(a);
   n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
   var u = n.expr.match.needsContext,
       v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
       w = /^.[^:#\[\.,]*$/;

   function x(a, b, c) {
       if (n.isFunction(b)) return n.grep(a, function(a, d) {
           return !!b.call(a, d, a) !== c
       });
       if (b.nodeType) return n.grep(a, function(a) {
           return a === b !== c
       });
       if ("string" == typeof b) {
           if (w.test(b)) return n.filter(b, a, c);
           b = n.filter(b, a)
       }
       return n.grep(a, function(a) {
           return g.call(b, a) >= 0 !== c
       })
   }
   n.filter = function(a, b, c) {
       var d = b[0];
       return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
           return 1 === a.nodeType
       }))
   }, n.fn.extend({
       find: function(a) {
           var b, c = this.length,
               d = [],
               e = this;
           if ("string" != typeof a) return this.pushStack(n(a).filter(function() {
               for (b = 0; c > b; b++)
                   if (n.contains(e[b], this)) return !0
           }));
           for (b = 0; c > b; b++) n.find(a, e[b], d);
           return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
       },
       filter: function(a) {
           return this.pushStack(x(this, a || [], !1))
       },
       not: function(a) {
           return this.pushStack(x(this, a || [], !0))
       },
       is: function(a) {
           return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length
       }
   });
   var y, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
       A = n.fn.init = function(a, b) {
           var c, d;
           if (!a) return this;
           if ("string" == typeof a) {
               if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
               if (c[1]) {
                   if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)), v.test(c[1]) && n.isPlainObject(b))
                       for (c in b) n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                   return this
               }
               return d = l.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = l, this.selector = a, this
           }
           return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
       };
   A.prototype = n.fn, y = n(l);
   var B = /^(?:parents|prev(?:Until|All))/,
       C = {
           children: !0,
           contents: !0,
           next: !0,
           prev: !0
       };
   n.extend({
       dir: function(a, b, c) {
           var d = [],
               e = void 0 !== c;
           while ((a = a[b]) && 9 !== a.nodeType)
               if (1 === a.nodeType) {
                   if (e && n(a).is(c)) break;
                   d.push(a)
               } return d
       },
       sibling: function(a, b) {
           for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
           return c
       }
   }), n.fn.extend({
       has: function(a) {
           var b = n(a, this),
               c = b.length;
           return this.filter(function() {
               for (var a = 0; c > a; a++)
                   if (n.contains(this, b[a])) return !0
           })
       },
       closest: function(a, b) {
           for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
               for (c = this[d]; c && c !== b; c = c.parentNode)
                   if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                       f.push(c);
                       break
                   } return this.pushStack(f.length > 1 ? n.unique(f) : f)
       },
       index: function(a) {
           return a ? "string" == typeof a ? g.call(n(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
       },
       add: function(a, b) {
           return this.pushStack(n.unique(n.merge(this.get(), n(a, b))))
       },
       addBack: function(a) {
           return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
       }
   });

   function D(a, b) {
       while ((a = a[b]) && 1 !== a.nodeType);
       return a
   }
   n.each({
       parent: function(a) {
           var b = a.parentNode;
           return b && 11 !== b.nodeType ? b : null
       },
       parents: function(a) {
           return n.dir(a, "parentNode")
       },
       parentsUntil: function(a, b, c) {
           return n.dir(a, "parentNode", c)
       },
       next: function(a) {
           return D(a, "nextSibling")
       },
       prev: function(a) {
           return D(a, "previousSibling")
       },
       nextAll: function(a) {
           return n.dir(a, "nextSibling")
       },
       prevAll: function(a) {
           return n.dir(a, "previousSibling")
       },
       nextUntil: function(a, b, c) {
           return n.dir(a, "nextSibling", c)
       },
       prevUntil: function(a, b, c) {
           return n.dir(a, "previousSibling", c)
       },
       siblings: function(a) {
           return n.sibling((a.parentNode || {}).firstChild, a)
       },
       children: function(a) {
           return n.sibling(a.firstChild)
       },
       contents: function(a) {
           return a.contentDocument || n.merge([], a.childNodes)
       }
   }, function(a, b) {
       n.fn[a] = function(c, d) {
           var e = n.map(this, b, c);
           return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()), this.pushStack(e)
       }
   });
   var E = /\S+/g,
       F = {};

   function G(a) {
       var b = F[a] = {};
       return n.each(a.match(E) || [], function(a, c) {
           b[c] = !0
       }), b
   }
   n.Callbacks = function(a) {
       a = "string" == typeof a ? F[a] || G(a) : n.extend({}, a);
       var b, c, d, e, f, g, h = [],
           i = !a.once && [],
           j = function(l) {
               for (b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0; h && f > g; g++)
                   if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                       b = !1;
                       break
                   } d = !1, h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable())
           },
           k = {
               add: function() {
                   if (h) {
                       var c = h.length;
                       ! function g(b) {
                           n.each(b, function(b, c) {
                               var d = n.type(c);
                               "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && g(c)
                           })
                       }(arguments), d ? f = h.length : b && (e = c, j(b))
                   }
                   return this
               },
               remove: function() {
                   return h && n.each(arguments, function(a, b) {
                       var c;
                       while ((c = n.inArray(b, h, c)) > -1) h.splice(c, 1), d && (f >= c && f--, g >= c && g--)
                   }), this
               },
               has: function(a) {
                   return a ? n.inArray(a, h) > -1 : !(!h || !h.length)
               },
               empty: function() {
                   return h = [], f = 0, this
               },
               disable: function() {
                   return h = i = b = void 0, this
               },
               disabled: function() {
                   return !h
               },
               lock: function() {
                   return i = void 0, b || k.disable(), this
               },
               locked: function() {
                   return !i
               },
               fireWith: function(a, b) {
                   return !h || c && !i || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? i.push(b) : j(b)), this
               },
               fire: function() {
                   return k.fireWith(this, arguments), this
               },
               fired: function() {
                   return !!c
               }
           };
       return k
   }, n.extend({
       Deferred: function(a) {
           var b = [
                   ["resolve", "done", n.Callbacks("once memory"), "resolved"],
                   ["reject", "fail", n.Callbacks("once memory"), "rejected"],
                   ["notify", "progress", n.Callbacks("memory")]
               ],
               c = "pending",
               d = {
                   state: function() {
                       return c
                   },
                   always: function() {
                       return e.done(arguments).fail(arguments), this
                   },
                   then: function() {
                       var a = arguments;
                       return n.Deferred(function(c) {
                           n.each(b, function(b, f) {
                               var g = n.isFunction(a[b]) && a[b];
                               e[f[1]](function() {
                                   var a = g && g.apply(this, arguments);
                                   a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                               })
                           }), a = null
                       }).promise()
                   },
                   promise: function(a) {
                       return null != a ? n.extend(a, d) : d
                   }
               },
               e = {};
           return d.pipe = d.then, n.each(b, function(a, f) {
               var g = f[2],
                   h = f[3];
               d[f[1]] = g.add, h && g.add(function() {
                   c = h
               }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                   return e[f[0] + "With"](this === e ? d : this, arguments), this
               }, e[f[0] + "With"] = g.fireWith
           }), d.promise(e), a && a.call(e, e), e
       },
       when: function(a) {
           var b = 0,
               c = d.call(arguments),
               e = c.length,
               f = 1 !== e || a && n.isFunction(a.promise) ? e : 0,
               g = 1 === f ? a : n.Deferred(),
               h = function(a, b, c) {
                   return function(e) {
                       b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                   }
               },
               i, j, k;
           if (e > 1)
               for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
           return f || g.resolveWith(k, c), g.promise()
       }
   });
   var H;
   n.fn.ready = function(a) {
       return n.ready.promise().done(a), this
   }, n.extend({
       isReady: !1,
       readyWait: 1,
       holdReady: function(a) {
           a ? n.readyWait++ : n.ready(!0)
       },
       ready: function(a) {
           (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (H.resolveWith(l, [n]), n.fn.triggerHandler && (n(l).triggerHandler("ready"), n(l).off("ready"))))
       }
   });

   function I() {
       l.removeEventListener("DOMContentLoaded", I, !1), a.removeEventListener("load", I, !1), n.ready()
   }
   n.ready.promise = function(b) {
       return H || (H = n.Deferred(), "complete" === l.readyState ? setTimeout(n.ready) : (l.addEventListener("DOMContentLoaded", I, !1), a.addEventListener("load", I, !1))), H.promise(b)
   }, n.ready.promise();
   var J = n.access = function(a, b, c, d, e, f, g) {
       var h = 0,
           i = a.length,
           j = null == c;
       if ("object" === n.type(c)) {
           e = !0;
           for (h in c) n.access(a, b, h, c[h], !0, f, g)
       } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
               return j.call(n(a), c)
           })), b))
           for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
       return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
   };
   n.acceptData = function(a) {
       return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
   };

   function K() {
       Object.defineProperty(this.cache = {}, 0, {
           get: function() {
               return {}
           }
       }), this.expando = n.expando + K.uid++
   }
   K.uid = 1, K.accepts = n.acceptData, K.prototype = {
       key: function(a) {
           if (!K.accepts(a)) return 0;
           var b = {},
               c = a[this.expando];
           if (!c) {
               c = K.uid++;
               try {
                   b[this.expando] = {
                       value: c
                   }, Object.defineProperties(a, b)
               } catch (d) {
                   b[this.expando] = c, n.extend(a, b)
               }
           }
           return this.cache[c] || (this.cache[c] = {}), c
       },
       set: function(a, b, c) {
           var d, e = this.key(a),
               f = this.cache[e];
           if ("string" == typeof b) f[b] = c;
           else if (n.isEmptyObject(f)) n.extend(this.cache[e], b);
           else
               for (d in b) f[d] = b[d];
           return f
       },
       get: function(a, b) {
           var c = this.cache[this.key(a)];
           return void 0 === b ? c : c[b]
       },
       access: function(a, b, c) {
           var d;
           return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
       },
       remove: function(a, b) {
           var c, d, e, f = this.key(a),
               g = this.cache[f];
           if (void 0 === b) this.cache[f] = {};
           else {
               n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(E) || [])), c = d.length;
               while (c--) delete g[d[c]]
           }
       },
       hasData: function(a) {
           return !n.isEmptyObject(this.cache[a[this.expando]] || {})
       },
       discard: function(a) {
           a[this.expando] && delete this.cache[a[this.expando]]
       }
   };
   var L = new K,
       M = new K,
       N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
       O = /([A-Z])/g;

   function P(a, b, c) {
       var d;
       if (void 0 === c && 1 === a.nodeType)
           if (d = "data-" + b.replace(O, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
               try {
                   c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
               } catch (e) {}
               M.set(a, b, c)
           } else c = void 0;
       return c
   }
   n.extend({
       hasData: function(a) {
           return M.hasData(a) || L.hasData(a)
       },
       data: function(a, b, c) {
           return M.access(a, b, c)
       },
       removeData: function(a, b) {
           M.remove(a, b)
       },
       _data: function(a, b, c) {
           return L.access(a, b, c)
       },
       _removeData: function(a, b) {
           L.remove(a, b)
       }
   }), n.fn.extend({
       data: function(a, b) {
           var c, d, e, f = this[0],
               g = f && f.attributes;
           if (void 0 === a) {
               if (this.length && (e = M.get(f), 1 === f.nodeType && !L.get(f, "hasDataAttrs"))) {
                   c = g.length;
                   while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
                   L.set(f, "hasDataAttrs", !0)
               }
               return e
           }
           return "object" == typeof a ? this.each(function() {
               M.set(this, a)
           }) : J(this, function(b) {
               var c, d = n.camelCase(a);
               if (f && void 0 === b) {
                   if (c = M.get(f, a), void 0 !== c) return c;
                   if (c = M.get(f, d), void 0 !== c) return c;
                   if (c = P(f, d, void 0), void 0 !== c) return c
               } else this.each(function() {
                   var c = M.get(this, d);
                   M.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && M.set(this, a, b)
               })
           }, null, b, arguments.length > 1, null, !0)
       },
       removeData: function(a) {
           return this.each(function() {
               M.remove(this, a)
           })
       }
   }), n.extend({
       queue: function(a, b, c) {
           var d;
           return a ? (b = (b || "fx") + "queue", d = L.get(a, b), c && (!d || n.isArray(c) ? d = L.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
       },
       dequeue: function(a, b) {
           b = b || "fx";
           var c = n.queue(a, b),
               d = c.length,
               e = c.shift(),
               f = n._queueHooks(a, b),
               g = function() {
                   n.dequeue(a, b)
               };
           "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
       },
       _queueHooks: function(a, b) {
           var c = b + "queueHooks";
           return L.get(a, c) || L.access(a, c, {
               empty: n.Callbacks("once memory").add(function() {
                   L.remove(a, [b + "queue", c])
               })
           })
       }
   }), n.fn.extend({
       queue: function(a, b) {
           var c = 2;
           return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
               var c = n.queue(this, a, b);
               n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
           })
       },
       dequeue: function(a) {
           return this.each(function() {
               n.dequeue(this, a)
           })
       },
       clearQueue: function(a) {
           return this.queue(a || "fx", [])
       },
       promise: function(a, b) {
           var c, d = 1,
               e = n.Deferred(),
               f = this,
               g = this.length,
               h = function() {
                   --d || e.resolveWith(f, [f])
               };
           "string" != typeof a && (b = a, a = void 0), a = a || "fx";
           while (g--) c = L.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
           return h(), e.promise(b)
       }
   });
   var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
       R = ["Top", "Right", "Bottom", "Left"],
       S = function(a, b) {
           return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
       },
       T = /^(?:checkbox|radio)$/i;
   ! function() {
       var a = l.createDocumentFragment(),
           b = a.appendChild(l.createElement("div")),
           c = l.createElement("input");
       c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
   }();
   var U = "undefined";
   k.focusinBubbles = "onfocusin" in a;
   var V = /^key/,
       W = /^(?:mouse|pointer|contextmenu)|click/,
       X = /^(?:focusinfocus|focusoutblur)$/,
       Y = /^([^.]*)(?:\.(.+)|)$/;

   function Z() {
       return !0
   }

   function $() {
       return !1
   }

   function _() {
       try {
           return l.activeElement
       } catch (a) {}
   }
   n.event = {
       global: {},
       add: function(a, b, c, d, e) {
           var f, g, h, i, j, k, l, m, o, p, q, r = L.get(a);
           if (r) {
               c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function(b) {
                   return typeof n !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0
               }), b = (b || "").match(E) || [""], j = b.length;
               while (j--) h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({
                   type: o,
                   origType: q,
                   data: d,
                   handler: c,
                   guid: c.guid,
                   selector: e,
                   needsContext: e && n.expr.match.needsContext.test(e),
                   namespace: p.join(".")
               }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0)
           }
       },
       remove: function(a, b, c, d, e) {
           var f, g, h, i, j, k, l, m, o, p, q, r = L.hasData(a) && L.get(a);
           if (r && (i = r.events)) {
               b = (b || "").match(E) || [""], j = b.length;
               while (j--)
                   if (h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                       l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
                       while (f--) k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                       g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o])
                   } else
                       for (o in i) n.event.remove(a, o + b[j], c, d, !0);
               n.isEmptyObject(i) && (delete r.handle, L.remove(a, "events"))
           }
       },
       trigger: function(b, c, d, e) {
           var f, g, h, i, k, m, o, p = [d || l],
               q = j.call(b, "type") ? b.type : b,
               r = j.call(b, "namespace") ? b.namespace.split(".") : [];
           if (g = h = d = d || l, 3 !== d.nodeType && 8 !== d.nodeType && !X.test(q + n.event.triggered) && (q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), k = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = r.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, e || !o.trigger || o.trigger.apply(d, c) !== !1)) {
               if (!e && !o.noBubble && !n.isWindow(d)) {
                   for (i = o.delegateType || q, X.test(i + q) || (g = g.parentNode); g; g = g.parentNode) p.push(g), h = g;
                   h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a)
               }
               f = 0;
               while ((g = p[f++]) && !b.isPropagationStopped()) b.type = f > 1 ? i : o.bindType || q, m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle"), m && m.apply(g, c), m = k && g[k], m && m.apply && n.acceptData(g) && (b.result = m.apply(g, c), b.result === !1 && b.preventDefault());
               return b.type = q, e || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !n.acceptData(d) || k && n.isFunction(d[q]) && !n.isWindow(d) && (h = d[k], h && (d[k] = null), n.event.triggered = q, d[q](), n.event.triggered = void 0, h && (d[k] = h)), b.result
           }
       },
       dispatch: function(a) {
           a = n.event.fix(a);
           var b, c, e, f, g, h = [],
               i = d.call(arguments),
               j = (L.get(this, "events") || {})[a.type] || [],
               k = n.event.special[a.type] || {};
           if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
               h = n.event.handlers.call(this, a, j), b = 0;
               while ((f = h[b++]) && !a.isPropagationStopped()) {
                   a.currentTarget = f.elem, c = 0;
                   while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())(!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()))
               }
               return k.postDispatch && k.postDispatch.call(this, a), a.result
           }
       },
       handlers: function(a, b) {
           var c, d, e, f, g = [],
               h = b.delegateCount,
               i = a.target;
           if (h && i.nodeType && (!a.button || "click" !== a.type))
               for (; i !== this; i = i.parentNode || this)
                   if (i.disabled !== !0 || "click" !== a.type) {
                       for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
                       d.length && g.push({
                           elem: i,
                           handlers: d
                       })
                   } return h < b.length && g.push({
               elem: this,
               handlers: b.slice(h)
           }), g
       },
       props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
       fixHooks: {},
       keyHooks: {
           props: "char charCode key keyCode".split(" "),
           filter: function(a, b) {
               return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
           }
       },
       mouseHooks: {
           props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
           filter: function(a, b) {
               var c, d, e, f = b.button;
               return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || l, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
           }
       },
       fix: function(a) {
           if (a[n.expando]) return a;
           var b, c, d, e = a.type,
               f = a,
               g = this.fixHooks[e];
           g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length;
           while (b--) c = d[b], a[c] = f[c];
           return a.target || (a.target = l), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
       },
       special: {
           load: {
               noBubble: !0
           },
           focus: {
               trigger: function() {
                   return this !== _() && this.focus ? (this.focus(), !1) : void 0
               },
               delegateType: "focusin"
           },
           blur: {
               trigger: function() {
                   return this === _() && this.blur ? (this.blur(), !1) : void 0
               },
               delegateType: "focusout"
           },
           click: {
               trigger: function() {
                   return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0
               },
               _default: function(a) {
                   return n.nodeName(a.target, "a")
               }
           },
           beforeunload: {
               postDispatch: function(a) {
                   void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
               }
           }
       },
       simulate: function(a, b, c, d) {
           var e = n.extend(new n.Event, c, {
               type: a,
               isSimulated: !0,
               originalEvent: {}
           });
           d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
       }
   }, n.removeEvent = function(a, b, c) {
       a.removeEventListener && a.removeEventListener(b, c, !1)
   }, n.Event = function(a, b) {
       return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? Z : $) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
   }, n.Event.prototype = {
       isDefaultPrevented: $,
       isPropagationStopped: $,
       isImmediatePropagationStopped: $,
       preventDefault: function() {
           var a = this.originalEvent;
           this.isDefaultPrevented = Z, a && a.preventDefault && a.preventDefault()
       },
       stopPropagation: function() {
           var a = this.originalEvent;
           this.isPropagationStopped = Z, a && a.stopPropagation && a.stopPropagation()
       },
       stopImmediatePropagation: function() {
           var a = this.originalEvent;
           this.isImmediatePropagationStopped = Z, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
       }
   }, n.each({
       mouseenter: "mouseover",
       mouseleave: "mouseout",
       pointerenter: "pointerover",
       pointerleave: "pointerout"
   }, function(a, b) {
       n.event.special[a] = {
           delegateType: b,
           bindType: b,
           handle: function(a) {
               var c, d = this,
                   e = a.relatedTarget,
                   f = a.handleObj;
               return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
           }
       }
   }), k.focusinBubbles || n.each({
       focus: "focusin",
       blur: "focusout"
   }, function(a, b) {
       var c = function(a) {
           n.event.simulate(b, a.target, n.event.fix(a), !0)
       };
       n.event.special[b] = {
           setup: function() {
               var d = this.ownerDocument || this,
                   e = L.access(d, b);
               e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1)
           },
           teardown: function() {
               var d = this.ownerDocument || this,
                   e = L.access(d, b) - 1;
               e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0), L.remove(d, b))
           }
       }
   }), n.fn.extend({
       on: function(a, b, c, d, e) {
           var f, g;
           if ("object" == typeof a) {
               "string" != typeof b && (c = c || b, b = void 0);
               for (g in a) this.on(g, b, c, a[g], e);
               return this
           }
           if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = $;
           else if (!d) return this;
           return 1 === e && (f = d, d = function(a) {
               return n().off(a), f.apply(this, arguments)
           }, d.guid = f.guid || (f.guid = n.guid++)), this.each(function() {
               n.event.add(this, a, d, c, b)
           })
       },
       one: function(a, b, c, d) {
           return this.on(a, b, c, d, 1)
       },
       off: function(a, b, c) {
           var d, e;
           if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
           if ("object" == typeof a) {
               for (e in a) this.off(e, b, a[e]);
               return this
           }
           return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = $), this.each(function() {
               n.event.remove(this, a, c, b)
           })
       },
       trigger: function(a, b) {
           return this.each(function() {
               n.event.trigger(a, b, this)
           })
       },
       triggerHandler: function(a, b) {
           var c = this[0];
           return c ? n.event.trigger(a, b, c, !0) : void 0
       }
   });
   var aa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
       ba = /<([\w:]+)/,
       ca = /<|&#?\w+;/,
       da = /<(?:script|style|link)/i,
       ea = /checked\s*(?:[^=]|=\s*.checked.)/i,
       fa = /^$|\/(?:java|ecma)script/i,
       ga = /^true\/(.*)/,
       ha = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
       ia = {
           option: [1, "<select multiple='multiple'>", "</select>"],
           thead: [1, "<table>", "</table>"],
           col: [2, "<table><colgroup>", "</colgroup></table>"],
           tr: [2, "<table><tbody>", "</tbody></table>"],
           td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
           _default: [0, "", ""]
       };
   ia.optgroup = ia.option, ia.tbody = ia.tfoot = ia.colgroup = ia.caption = ia.thead, ia.th = ia.td;

   function ja(a, b) {
       return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
   }

   function ka(a) {
       return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
   }

   function la(a) {
       var b = ga.exec(a.type);
       return b ? a.type = b[1] : a.removeAttribute("type"), a
   }

   function ma(a, b) {
       for (var c = 0, d = a.length; d > c; c++) L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"))
   }

   function na(a, b) {
       var c, d, e, f, g, h, i, j;
       if (1 === b.nodeType) {
           if (L.hasData(a) && (f = L.access(a), g = L.set(b, f), j = f.events)) {
               delete g.handle, g.events = {};
               for (e in j)
                   for (c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c])
           }
           M.hasData(a) && (h = M.access(a), i = n.extend({}, h), M.set(b, i))
       }
   }

   function oa(a, b) {
       var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
       return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c
   }

   function pa(a, b) {
       var c = b.nodeName.toLowerCase();
       "input" === c && T.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
   }
   n.extend({
       clone: function(a, b, c) {
           var d, e, f, g, h = a.cloneNode(!0),
               i = n.contains(a.ownerDocument, a);
           if (!(k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
               for (g = oa(h), f = oa(a), d = 0, e = f.length; e > d; d++) pa(f[d], g[d]);
           if (b)
               if (c)
                   for (f = f || oa(a), g = g || oa(h), d = 0, e = f.length; e > d; d++) na(f[d], g[d]);
               else na(a, h);
           return g = oa(h, "script"), g.length > 0 && ma(g, !i && oa(a, "script")), h
       },
       buildFragment: function(a, b, c, d) {
           for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, o = a.length; o > m; m++)
               if (e = a[m], e || 0 === e)
                   if ("object" === n.type(e)) n.merge(l, e.nodeType ? [e] : e);
                   else if (ca.test(e)) {
               f = f || k.appendChild(b.createElement("div")), g = (ba.exec(e) || ["", ""])[1].toLowerCase(), h = ia[g] || ia._default, f.innerHTML = h[1] + e.replace(aa, "<$1></$2>") + h[2], j = h[0];
               while (j--) f = f.lastChild;
               n.merge(l, f.childNodes), f = k.firstChild, f.textContent = ""
           } else l.push(b.createTextNode(e));
           k.textContent = "", m = 0;
           while (e = l[m++])
               if ((!d || -1 === n.inArray(e, d)) && (i = n.contains(e.ownerDocument, e), f = oa(k.appendChild(e), "script"), i && ma(f), c)) {
                   j = 0;
                   while (e = f[j++]) fa.test(e.type || "") && c.push(e)
               } return k
       },
       cleanData: function(a) {
           for (var b, c, d, e, f = n.event.special, g = 0; void 0 !== (c = a[g]); g++) {
               if (n.acceptData(c) && (e = c[L.expando], e && (b = L.cache[e]))) {
                   if (b.events)
                       for (d in b.events) f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
                   L.cache[e] && delete L.cache[e]
               }
               delete M.cache[c[M.expando]]
           }
       }
   }), n.fn.extend({
       text: function(a) {
           return J(this, function(a) {
               return void 0 === a ? n.text(this) : this.empty().each(function() {
                   (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
               })
           }, null, a, arguments.length)
       },
       append: function() {
           return this.domManip(arguments, function(a) {
               if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                   var b = ja(this, a);
                   b.appendChild(a)
               }
           })
       },
       prepend: function() {
           return this.domManip(arguments, function(a) {
               if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                   var b = ja(this, a);
                   b.insertBefore(a, b.firstChild)
               }
           })
       },
       before: function() {
           return this.domManip(arguments, function(a) {
               this.parentNode && this.parentNode.insertBefore(a, this)
           })
       },
       after: function() {
           return this.domManip(arguments, function(a) {
               this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
           })
       },
       remove: function(a, b) {
           for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || n.cleanData(oa(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && ma(oa(c, "script")), c.parentNode.removeChild(c));
           return this
       },
       empty: function() {
           for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (n.cleanData(oa(a, !1)), a.textContent = "");
           return this
       },
       clone: function(a, b) {
           return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
               return n.clone(this, a, b)
           })
       },
       html: function(a) {
           return J(this, function(a) {
               var b = this[0] || {},
                   c = 0,
                   d = this.length;
               if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
               if ("string" == typeof a && !da.test(a) && !ia[(ba.exec(a) || ["", ""])[1].toLowerCase()]) {
                   a = a.replace(aa, "<$1></$2>");
                   try {
                       for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(oa(b, !1)), b.innerHTML = a);
                       b = 0
                   } catch (e) {}
               }
               b && this.empty().append(a)
           }, null, a, arguments.length)
       },
       replaceWith: function() {
           var a = arguments[0];
           return this.domManip(arguments, function(b) {
               a = this.parentNode, n.cleanData(oa(this)), a && a.replaceChild(b, this)
           }), a && (a.length || a.nodeType) ? this : this.remove()
       },
       detach: function(a) {
           return this.remove(a, !0)
       },
       domManip: function(a, b) {
           a = e.apply([], a);
           var c, d, f, g, h, i, j = 0,
               l = this.length,
               m = this,
               o = l - 1,
               p = a[0],
               q = n.isFunction(p);
           if (q || l > 1 && "string" == typeof p && !k.checkClone && ea.test(p)) return this.each(function(c) {
               var d = m.eq(c);
               q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
           });
           if (l && (c = n.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
               for (f = n.map(oa(c, "script"), ka), g = f.length; l > j; j++) h = c, j !== o && (h = n.clone(h, !0, !0), g && n.merge(f, oa(h, "script"))), b.call(this[j], h, j);
               if (g)
                   for (i = f[f.length - 1].ownerDocument, n.map(f, la), j = 0; g > j; j++) h = f[j], fa.test(h.type || "") && !L.access(h, "globalEval") && n.contains(i, h) && (h.src ? n._evalUrl && n._evalUrl(h.src) : n.globalEval(h.textContent.replace(ha, "")))
           }
           return this
       }
   }), n.each({
       appendTo: "append",
       prependTo: "prepend",
       insertBefore: "before",
       insertAfter: "after",
       replaceAll: "replaceWith"
   }, function(a, b) {
       n.fn[a] = function(a) {
           for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++) c = h === g ? this : this.clone(!0), n(e[h])[b](c), f.apply(d, c.get());
           return this.pushStack(d)
       }
   });
   var qa, ra = {};

   function sa(b, c) {
       var d, e = n(c.createElement(b)).appendTo(c.body),
           f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : n.css(e[0], "display");
       return e.detach(), f
   }

   function ta(a) {
       var b = l,
           c = ra[a];
       return c || (c = sa(a, b), "none" !== c && c || (qa = (qa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = qa[0].contentDocument, b.write(), b.close(), c = sa(a, b), qa.detach()), ra[a] = c), c
   }
   var ua = /^margin/,
       va = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"),
       wa = function(b) {
           return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
       };

   function xa(a, b, c) {
       var d, e, f, g, h = a.style;
       return c = c || wa(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), va.test(g) && ua.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
   }

   function ya(a, b) {
       return {
           get: function() {
               return a() ? void delete this.get : (this.get = b).apply(this, arguments)
           }
       }
   }! function() {
       var b, c, d = l.documentElement,
           e = l.createElement("div"),
           f = l.createElement("div");
       if (f.style) {
           f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === f.style.backgroundClip, e.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", e.appendChild(f);

           function g() {
               f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", f.innerHTML = "", d.appendChild(e);
               var g = a.getComputedStyle(f, null);
               b = "1%" !== g.top, c = "4px" === g.width, d.removeChild(e)
           }
           a.getComputedStyle && n.extend(k, {
               pixelPosition: function() {
                   return g(), b
               },
               boxSizingReliable: function() {
                   return null == c && g(), c
               },
               reliableMarginRight: function() {
                   var b, c = f.appendChild(l.createElement("div"));
                   return c.style.cssText = f.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", f.style.width = "1px", d.appendChild(e), b = !parseFloat(a.getComputedStyle(c, null).marginRight), d.removeChild(e), f.removeChild(c), b
               }
           })
       }
   }(), n.swap = function(a, b, c, d) {
       var e, f, g = {};
       for (f in b) g[f] = a.style[f], a.style[f] = b[f];
       e = c.apply(a, d || []);
       for (f in b) a.style[f] = g[f];
       return e
   };
   var za = /^(none|table(?!-c[ea]).+)/,
       Aa = new RegExp("^(" + Q + ")(.*)$", "i"),
       Ba = new RegExp("^([+-])=(" + Q + ")", "i"),
       Ca = {
           position: "absolute",
           visibility: "hidden",
           display: "block"
       },
       Da = {
           letterSpacing: "0",
           fontWeight: "400"
       },
       Ea = ["Webkit", "O", "Moz", "ms"];

   function Fa(a, b) {
       if (b in a) return b;
       var c = b[0].toUpperCase() + b.slice(1),
           d = b,
           e = Ea.length;
       while (e--)
           if (b = Ea[e] + c, b in a) return b;
       return d
   }

   function Ga(a, b, c) {
       var d = Aa.exec(b);
       return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
   }

   function Ha(a, b, c, d, e) {
       for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + R[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + R[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + R[f] + "Width", !0, e))) : (g += n.css(a, "padding" + R[f], !0, e), "padding" !== c && (g += n.css(a, "border" + R[f] + "Width", !0, e)));
       return g
   }

   function Ia(a, b, c) {
       var d = !0,
           e = "width" === b ? a.offsetWidth : a.offsetHeight,
           f = wa(a),
           g = "border-box" === n.css(a, "boxSizing", !1, f);
       if (0 >= e || null == e) {
           if (e = xa(a, b, f), (0 > e || null == e) && (e = a.style[b]), va.test(e)) return e;
           d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
       }
       return e + Ha(a, b, c || (g ? "border" : "content"), d, f) + "px"
   }

   function Ja(a, b) {
       for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = L.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && S(d) && (f[g] = L.access(d, "olddisplay", ta(d.nodeName)))) : (e = S(d), "none" === c && e || L.set(d, "olddisplay", e ? c : n.css(d, "display"))));
       for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
       return a
   }
   n.extend({
       cssHooks: {
           opacity: {
               get: function(a, b) {
                   if (b) {
                       var c = xa(a, "opacity");
                       return "" === c ? "1" : c
                   }
               }
           }
       },
       cssNumber: {
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
       cssProps: {
           float: "cssFloat"
       },
       style: function(a, b, c, d) {
           if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
               var e, f, g, h = n.camelCase(b),
                   i = a.style;
               return b = n.cssProps[h] || (n.cssProps[h] = Fa(i, h)), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Ba.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
           }
       },
       css: function(a, b, c, d) {
           var e, f, g, h = n.camelCase(b);
           return b = n.cssProps[h] || (n.cssProps[h] = Fa(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = xa(a, b, d)), "normal" === e && b in Da && (e = Da[b]), "" === c || c ? (f = parseFloat(e), c === !0 || n.isNumeric(f) ? f || 0 : e) : e
       }
   }), n.each(["height", "width"], function(a, b) {
       n.cssHooks[b] = {
           get: function(a, c, d) {
               return c ? za.test(n.css(a, "display")) && 0 === a.offsetWidth ? n.swap(a, Ca, function() {
                   return Ia(a, b, d)
               }) : Ia(a, b, d) : void 0
           },
           set: function(a, c, d) {
               var e = d && wa(a);
               return Ga(a, c, d ? Ha(a, b, d, "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
           }
       }
   }), n.cssHooks.marginRight = ya(k.reliableMarginRight, function(a, b) {
       return b ? n.swap(a, {
           display: "inline-block"
       }, xa, [a, "marginRight"]) : void 0
   }), n.each({
       margin: "",
       padding: "",
       border: "Width"
   }, function(a, b) {
       n.cssHooks[a + b] = {
           expand: function(c) {
               for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
               return e
           }
       }, ua.test(a) || (n.cssHooks[a + b].set = Ga)
   }), n.fn.extend({
       css: function(a, b) {
           return J(this, function(a, b, c) {
               var d, e, f = {},
                   g = 0;
               if (n.isArray(b)) {
                   for (d = wa(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
                   return f
               }
               return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
           }, a, b, arguments.length > 1)
       },
       show: function() {
           return Ja(this, !0)
       },
       hide: function() {
           return Ja(this)
       },
       toggle: function(a) {
           return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
               S(this) ? n(this).show() : n(this).hide()
           })
       }
   });

   function Ka(a, b, c, d, e) {
       return new Ka.prototype.init(a, b, c, d, e)
   }
   n.Tween = Ka, Ka.prototype = {
       constructor: Ka,
       init: function(a, b, c, d, e, f) {
           this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
       },
       cur: function() {
           var a = Ka.propHooks[this.prop];
           return a && a.get ? a.get(this) : Ka.propHooks._default.get(this)
       },
       run: function(a) {
           var b, c = Ka.propHooks[this.prop];
           return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ka.propHooks._default.set(this), this
       }
   }, Ka.prototype.init.prototype = Ka.prototype, Ka.propHooks = {
       _default: {
           get: function(a) {
               var b;
               return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
           },
           set: function(a) {
               n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
           }
       }
   }, Ka.propHooks.scrollTop = Ka.propHooks.scrollLeft = {
       set: function(a) {
           a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
       }
   }, n.easing = {
       linear: function(a) {
           return a
       },
       swing: function(a) {
           return .5 - Math.cos(a * Math.PI) / 2
       }
   }, n.fx = Ka.prototype.init, n.fx.step = {};
   var La, Ma, Na = /^(?:toggle|show|hide)$/,
       Oa = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"),
       Pa = /queueHooks$/,
       Qa = [Va],
       Ra = {
           "*": [function(a, b) {
               var c = this.createTween(a, b),
                   d = c.cur(),
                   e = Oa.exec(b),
                   f = e && e[3] || (n.cssNumber[a] ? "" : "px"),
                   g = (n.cssNumber[a] || "px" !== f && +d) && Oa.exec(n.css(c.elem, a)),
                   h = 1,
                   i = 20;
               if (g && g[3] !== f) {
                   f = f || g[3], e = e || [], g = +d || 1;
                   do h = h || ".5", g /= h, n.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
               }
               return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
           }]
       };

   function Sa() {
       return setTimeout(function() {
           La = void 0
       }), La = n.now()
   }

   function Ta(a, b) {
       var c, d = 0,
           e = {
               height: a
           };
       for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = R[d], e["margin" + c] = e["padding" + c] = a;
       return b && (e.opacity = e.width = a), e
   }

   function Ua(a, b, c) {
       for (var d, e = (Ra[b] || []).concat(Ra["*"]), f = 0, g = e.length; g > f; f++)
           if (d = e[f].call(c, b, a)) return d
   }

   function Va(a, b, c) {
       var d, e, f, g, h, i, j, k, l = this,
           m = {},
           o = a.style,
           p = a.nodeType && S(a),
           q = L.get(a, "fxshow");
       c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
           h.unqueued || i()
       }), h.unqueued++, l.always(function() {
           l.always(function() {
               h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
           })
       })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? L.get(a, "olddisplay") || ta(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function() {
           o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
       }));
       for (d in b)
           if (e = b[d], Na.exec(e)) {
               if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                   if ("show" !== e || !q || void 0 === q[d]) continue;
                   p = !0
               }
               m[d] = q && q[d] || n.style(a, d)
           } else j = void 0;
       if (n.isEmptyObject(m)) "inline" === ("none" === j ? ta(a.nodeName) : j) && (o.display = j);
       else {
           q ? "hidden" in q && (p = q.hidden) : q = L.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function() {
               n(a).hide()
           }), l.done(function() {
               var b;
               L.remove(a, "fxshow");
               for (b in m) n.style(a, b, m[b])
           });
           for (d in m) g = Ua(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
       }
   }

   function Wa(a, b) {
       var c, d, e, f, g;
       for (c in a)
           if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
               f = g.expand(f), delete a[d];
               for (c in f) c in a || (a[c] = f[c], b[c] = e)
           } else b[d] = e
   }

   function Xa(a, b, c) {
       var d, e, f = 0,
           g = Qa.length,
           h = n.Deferred().always(function() {
               delete i.elem
           }),
           i = function() {
               if (e) return !1;
               for (var b = La || Sa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
               return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
           },
           j = h.promise({
               elem: a,
               props: n.extend({}, b),
               opts: n.extend(!0, {
                   specialEasing: {}
               }, c),
               originalProperties: b,
               originalOptions: c,
               startTime: La || Sa(),
               duration: c.duration,
               tweens: [],
               createTween: function(b, c) {
                   var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                   return j.tweens.push(d), d
               },
               stop: function(b) {
                   var c = 0,
                       d = b ? j.tweens.length : 0;
                   if (e) return this;
                   for (e = !0; d > c; c++) j.tweens[c].run(1);
                   return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
               }
           }),
           k = j.props;
       for (Wa(k, j.opts.specialEasing); g > f; f++)
           if (d = Qa[f].call(j, a, k, j.opts)) return d;
       return n.map(k, Ua, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
           elem: a,
           anim: j,
           queue: j.opts.queue
       })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
   }
   n.Animation = n.extend(Xa, {
           tweener: function(a, b) {
               n.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
               for (var c, d = 0, e = a.length; e > d; d++) c = a[d], Ra[c] = Ra[c] || [], Ra[c].unshift(b)
           },
           prefilter: function(a, b) {
               b ? Qa.unshift(a) : Qa.push(a)
           }
       }), n.speed = function(a, b, c) {
           var d = a && "object" == typeof a ? n.extend({}, a) : {
               complete: c || !c && b || n.isFunction(a) && a,
               duration: a,
               easing: c && b || b && !n.isFunction(b) && b
           };
           return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
               n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
           }, d
       }, n.fn.extend({
           fadeTo: function(a, b, c, d) {
               return this.filter(S).css("opacity", 0).show().end().animate({
                   opacity: b
               }, a, c, d)
           },
           animate: function(a, b, c, d) {
               var e = n.isEmptyObject(a),
                   f = n.speed(b, c, d),
                   g = function() {
                       var b = Xa(this, n.extend({}, a), f);
                       (e || L.get(this, "finish")) && b.stop(!0)
                   };
               return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
           },
           stop: function(a, b, c) {
               var d = function(a) {
                   var b = a.stop;
                   delete a.stop, b(c)
               };
               return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                   var b = !0,
                       e = null != a && a + "queueHooks",
                       f = n.timers,
                       g = L.get(this);
                   if (e) g[e] && g[e].stop && d(g[e]);
                   else
                       for (e in g) g[e] && g[e].stop && Pa.test(e) && d(g[e]);
                   for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                   (b || !c) && n.dequeue(this, a)
               })
           },
           finish: function(a) {
               return a !== !1 && (a = a || "fx"), this.each(function() {
                   var b, c = L.get(this),
                       d = c[a + "queue"],
                       e = c[a + "queueHooks"],
                       f = n.timers,
                       g = d ? d.length : 0;
                   for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                   for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                   delete c.finish
               })
           }
       }), n.each(["toggle", "show", "hide"], function(a, b) {
           var c = n.fn[b];
           n.fn[b] = function(a, d, e) {
               return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Ta(b, !0), a, d, e)
           }
       }), n.each({
           slideDown: Ta("show"),
           slideUp: Ta("hide"),
           slideToggle: Ta("toggle"),
           fadeIn: {
               opacity: "show"
           },
           fadeOut: {
               opacity: "hide"
           },
           fadeToggle: {
               opacity: "toggle"
           }
       }, function(a, b) {
           n.fn[a] = function(a, c, d) {
               return this.animate(b, a, c, d)
           }
       }), n.timers = [], n.fx.tick = function() {
           var a, b = 0,
               c = n.timers;
           for (La = n.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
           c.length || n.fx.stop(), La = void 0
       }, n.fx.timer = function(a) {
           n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
       }, n.fx.interval = 13, n.fx.start = function() {
           Ma || (Ma = setInterval(n.fx.tick, n.fx.interval))
       }, n.fx.stop = function() {
           clearInterval(Ma), Ma = null
       }, n.fx.speeds = {
           slow: 600,
           fast: 200,
           _default: 400
       }, n.fn.delay = function(a, b) {
           return a = n.fx ? n.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
               var d = setTimeout(b, a);
               c.stop = function() {
                   clearTimeout(d)
               }
           })
       },
       function() {
           var a = l.createElement("input"),
               b = l.createElement("select"),
               c = b.appendChild(l.createElement("option"));
           a.type = "checkbox", k.checkOn = "" !== a.value, k.optSelected = c.selected, b.disabled = !0, k.optDisabled = !c.disabled, a = l.createElement("input"), a.value = "t", a.type = "radio", k.radioValue = "t" === a.value
       }();
   var Ya, Za, $a = n.expr.attrHandle;
   n.fn.extend({
       attr: function(a, b) {
           return J(this, n.attr, a, b, arguments.length > 1)
       },
       removeAttr: function(a) {
           return this.each(function() {
               n.removeAttr(this, a)
           })
       }
   }), n.extend({
       attr: function(a, b, c) {
           var d, e, f = a.nodeType;
           if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === U ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Za : Ya)),
               void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void n.removeAttr(a, b))
       },
       removeAttr: function(a, b) {
           var c, d, e = 0,
               f = b && b.match(E);
           if (f && 1 === a.nodeType)
               while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
       },
       attrHooks: {
           type: {
               set: function(a, b) {
                   if (!k.radioValue && "radio" === b && n.nodeName(a, "input")) {
                       var c = a.value;
                       return a.setAttribute("type", b), c && (a.value = c), b
                   }
               }
           }
       }
   }), Za = {
       set: function(a, b, c) {
           return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c
       }
   }, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
       var c = $a[b] || n.find.attr;
       $a[b] = function(a, b, d) {
           var e, f;
           return d || (f = $a[b], $a[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, $a[b] = f), e
       }
   });
   var _a = /^(?:input|select|textarea|button)$/i;
   n.fn.extend({
       prop: function(a, b) {
           return J(this, n.prop, a, b, arguments.length > 1)
       },
       removeProp: function(a) {
           return this.each(function() {
               delete this[n.propFix[a] || a]
           })
       }
   }), n.extend({
       propFix: {
           for: "htmlFor",
           class: "className"
       },
       prop: function(a, b, c) {
           var d, e, f, g = a.nodeType;
           if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
       },
       propHooks: {
           tabIndex: {
               get: function(a) {
                   return a.hasAttribute("tabindex") || _a.test(a.nodeName) || a.href ? a.tabIndex : -1
               }
           }
       }
   }), k.optSelected || (n.propHooks.selected = {
       get: function(a) {
           var b = a.parentNode;
           return b && b.parentNode && b.parentNode.selectedIndex, null
       }
   }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
       n.propFix[this.toLowerCase()] = this
   });
   var ab = /[\t\r\n\f]/g;
   n.fn.extend({
       addClass: function(a) {
           var b, c, d, e, f, g, h = "string" == typeof a && a,
               i = 0,
               j = this.length;
           if (n.isFunction(a)) return this.each(function(b) {
               n(this).addClass(a.call(this, b, this.className))
           });
           if (h)
               for (b = (a || "").match(E) || []; j > i; i++)
                   if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : " ")) {
                       f = 0;
                       while (e = b[f++]) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                       g = n.trim(d), c.className !== g && (c.className = g)
                   } return this
       },
       removeClass: function(a) {
           var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a,
               i = 0,
               j = this.length;
           if (n.isFunction(a)) return this.each(function(b) {
               n(this).removeClass(a.call(this, b, this.className))
           });
           if (h)
               for (b = (a || "").match(E) || []; j > i; i++)
                   if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : "")) {
                       f = 0;
                       while (e = b[f++])
                           while (d.indexOf(" " + e + " ") >= 0) d = d.replace(" " + e + " ", " ");
                       g = a ? n.trim(d) : "", c.className !== g && (c.className = g)
                   } return this
       },
       toggleClass: function(a, b) {
           var c = typeof a;
           return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function(c) {
               n(this).toggleClass(a.call(this, c, this.className, b), b)
           } : function() {
               if ("string" === c) {
                   var b, d = 0,
                       e = n(this),
                       f = a.match(E) || [];
                   while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
               } else(c === U || "boolean" === c) && (this.className && L.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : L.get(this, "__className__") || "")
           })
       },
       hasClass: function(a) {
           for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
               if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ab, " ").indexOf(b) >= 0) return !0;
           return !1
       }
   });
   var bb = /\r/g;
   n.fn.extend({
       val: function(a) {
           var b, c, d, e = this[0]; {
               if (arguments.length) return d = n.isFunction(a), this.each(function(c) {
                   var e;
                   1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
                       return null == a ? "" : a + ""
                   })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
               });
               if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(bb, "") : null == c ? "" : c)
           }
       }
   }), n.extend({
       valHooks: {
           option: {
               get: function(a) {
                   var b = n.find.attr(a, "value");
                   return null != b ? b : n.trim(n.text(a))
               }
           },
           select: {
               get: function(a) {
                   for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                       if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) {
                           if (b = n(c).val(), f) return b;
                           g.push(b)
                       } return g
               },
               set: function(a, b) {
                   var c, d, e = a.options,
                       f = n.makeArray(b),
                       g = e.length;
                   while (g--) d = e[g], (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);
                   return c || (a.selectedIndex = -1), f
               }
           }
       }
   }), n.each(["radio", "checkbox"], function() {
       n.valHooks[this] = {
           set: function(a, b) {
               return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0
           }
       }, k.checkOn || (n.valHooks[this].get = function(a) {
           return null === a.getAttribute("value") ? "on" : a.value
       })
   }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
       n.fn[b] = function(a, c) {
           return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
       }
   }), n.fn.extend({
       hover: function(a, b) {
           return this.mouseenter(a).mouseleave(b || a)
       },
       bind: function(a, b, c) {
           return this.on(a, null, b, c)
       },
       unbind: function(a, b) {
           return this.off(a, null, b)
       },
       delegate: function(a, b, c, d) {
           return this.on(b, a, c, d)
       },
       undelegate: function(a, b, c) {
           return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
       }
   });
   var cb = n.now(),
       db = /\?/;
   n.parseJSON = function(a) {
       return JSON.parse(a + "")
   }, n.parseXML = function(a) {
       var b, c;
       if (!a || "string" != typeof a) return null;
       try {
           c = new DOMParser, b = c.parseFromString(a, "text/xml")
       } catch (d) {
           b = void 0
       }
       return (!b || b.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + a), b
   };
   var eb = /#.*$/,
       fb = /([?&])_=[^&]*/,
       gb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
       hb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
       ib = /^(?:GET|HEAD)$/,
       jb = /^\/\//,
       kb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
       lb = {},
       mb = {},
       nb = "*/".concat("*"),
       ob = a.location.href,
       pb = kb.exec(ob.toLowerCase()) || [];

   function qb(a) {
       return function(b, c) {
           "string" != typeof b && (c = b, b = "*");
           var d, e = 0,
               f = b.toLowerCase().match(E) || [];
           if (n.isFunction(c))
               while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
       }
   }

   function rb(a, b, c, d) {
       var e = {},
           f = a === mb;

       function g(h) {
           var i;
           return e[h] = !0, n.each(a[h] || [], function(a, h) {
               var j = h(b, c, d);
               return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
           }), i
       }
       return g(b.dataTypes[0]) || !e["*"] && g("*")
   }

   function sb(a, b) {
       var c, d, e = n.ajaxSettings.flatOptions || {};
       for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
       return d && n.extend(!0, a, d), a
   }

   function tb(a, b, c) {
       var d, e, f, g, h = a.contents,
           i = a.dataTypes;
       while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
       if (d)
           for (e in h)
               if (h[e] && h[e].test(d)) {
                   i.unshift(e);
                   break
               } if (i[0] in c) f = i[0];
       else {
           for (e in c) {
               if (!i[0] || a.converters[e + " " + i[0]]) {
                   f = e;
                   break
               }
               g || (g = e)
           }
           f = f || g
       }
       return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
   }

   function ub(a, b, c, d) {
       var e, f, g, h, i, j = {},
           k = a.dataTypes.slice();
       if (k[1])
           for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
       f = k.shift();
       while (f)
           if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
               if ("*" === f) f = i;
               else if ("*" !== i && i !== f) {
           if (g = j[i + " " + f] || j["* " + f], !g)
               for (e in j)
                   if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                       g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                       break
                   } if (g !== !0)
               if (g && a["throws"]) b = g(b);
               else try {
                   b = g(b)
               } catch (l) {
                   return {
                       state: "parsererror",
                       error: g ? l : "No conversion from " + i + " to " + f
                   }
               }
       }
       return {
           state: "success",
           data: b
       }
   }
   n.extend({
       active: 0,
       lastModified: {},
       etag: {},
       ajaxSettings: {
           url: ob,
           type: "GET",
           isLocal: hb.test(pb[1]),
           global: !0,
           processData: !0,
           async: !0,
           contentType: "application/x-www-form-urlencoded; charset=UTF-8",
           accepts: {
               "*": nb,
               text: "text/plain",
               html: "text/html",
               xml: "application/xml, text/xml",
               json: "application/json, text/javascript"
           },
           contents: {
               xml: /xml/,
               html: /html/,
               json: /json/
           },
           responseFields: {
               xml: "responseXML",
               text: "responseText",
               json: "responseJSON"
           },
           converters: {
               "* text": String,
               "text html": !0,
               "text json": n.parseJSON,
               "text xml": n.parseXML
           },
           flatOptions: {
               url: !0,
               context: !0
           }
       },
       ajaxSetup: function(a, b) {
           return b ? sb(sb(a, n.ajaxSettings), b) : sb(n.ajaxSettings, a)
       },
       ajaxPrefilter: qb(lb),
       ajaxTransport: qb(mb),
       ajax: function(a, b) {
           "object" == typeof a && (b = a, a = void 0), b = b || {};
           var c, d, e, f, g, h, i, j, k = n.ajaxSetup({}, b),
               l = k.context || k,
               m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event,
               o = n.Deferred(),
               p = n.Callbacks("once memory"),
               q = k.statusCode || {},
               r = {},
               s = {},
               t = 0,
               u = "canceled",
               v = {
                   readyState: 0,
                   getResponseHeader: function(a) {
                       var b;
                       if (2 === t) {
                           if (!f) {
                               f = {};
                               while (b = gb.exec(e)) f[b[1].toLowerCase()] = b[2]
                           }
                           b = f[a.toLowerCase()]
                       }
                       return null == b ? null : b
                   },
                   getAllResponseHeaders: function() {
                       return 2 === t ? e : null
                   },
                   setRequestHeader: function(a, b) {
                       var c = a.toLowerCase();
                       return t || (a = s[c] = s[c] || a, r[a] = b), this
                   },
                   overrideMimeType: function(a) {
                       return t || (k.mimeType = a), this
                   },
                   statusCode: function(a) {
                       var b;
                       if (a)
                           if (2 > t)
                               for (b in a) q[b] = [q[b], a[b]];
                           else v.always(a[v.status]);
                       return this
                   },
                   abort: function(a) {
                       var b = a || u;
                       return c && c.abort(b), x(0, b), this
                   }
               };
           if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || ob) + "").replace(eb, "").replace(jb, pb[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (h = kb.exec(k.url.toLowerCase()), k.crossDomain = !(!h || h[1] === pb[1] && h[2] === pb[2] && (h[3] || ("http:" === h[1] ? "80" : "443")) === (pb[3] || ("http:" === pb[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)), rb(lb, k, b, v), 2 === t) return v;
           i = n.event && k.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !ib.test(k.type), d = k.url, k.hasContent || (k.data && (d = k.url += (db.test(d) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = fb.test(d) ? d.replace(fb, "$1_=" + cb++) : d + (db.test(d) ? "&" : "?") + "_=" + cb++)), k.ifModified && (n.lastModified[d] && v.setRequestHeader("If-Modified-Since", n.lastModified[d]), n.etag[d] && v.setRequestHeader("If-None-Match", n.etag[d])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + nb + "; q=0.01" : "") : k.accepts["*"]);
           for (j in k.headers) v.setRequestHeader(j, k.headers[j]);
           if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();
           u = "abort";
           for (j in {
                   success: 1,
                   error: 1,
                   complete: 1
               }) v[j](k[j]);
           if (c = rb(mb, k, b, v)) {
               v.readyState = 1, i && m.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function() {
                   v.abort("timeout")
               }, k.timeout));
               try {
                   t = 1, c.send(r, x)
               } catch (w) {
                   if (!(2 > t)) throw w;
                   x(-1, w)
               }
           } else x(-1, "No Transport");

           function x(a, b, f, h) {
               var j, r, s, u, w, x = b;
               2 !== t && (t = 2, g && clearTimeout(g), c = void 0, e = h || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, f && (u = tb(k, v, f)), u = ub(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (n.lastModified[d] = w), w = v.getResponseHeader("etag"), w && (n.etag[d] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), i && (m.trigger("ajaxComplete", [v, k]), --n.active || n.event.trigger("ajaxStop")))
           }
           return v
       },
       getJSON: function(a, b, c) {
           return n.get(a, b, c, "json")
       },
       getScript: function(a, b) {
           return n.get(a, void 0, b, "script")
       }
   }), n.each(["get", "post"], function(a, b) {
       n[b] = function(a, c, d, e) {
           return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({
               url: a,
               type: b,
               dataType: e,
               data: c,
               success: d
           })
       }
   }), n._evalUrl = function(a) {
       return n.ajax({
           url: a,
           type: "GET",
           dataType: "script",
           async: !1,
           global: !1,
           throws: !0
       })
   }, n.fn.extend({
       wrapAll: function(a) {
           var b;
           return n.isFunction(a) ? this.each(function(b) {
               n(this).wrapAll(a.call(this, b))
           }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
               var a = this;
               while (a.firstElementChild) a = a.firstElementChild;
               return a
           }).append(this)), this)
       },
       wrapInner: function(a) {
           return this.each(n.isFunction(a) ? function(b) {
               n(this).wrapInner(a.call(this, b))
           } : function() {
               var b = n(this),
                   c = b.contents();
               c.length ? c.wrapAll(a) : b.append(a)
           })
       },
       wrap: function(a) {
           var b = n.isFunction(a);
           return this.each(function(c) {
               n(this).wrapAll(b ? a.call(this, c) : a)
           })
       },
       unwrap: function() {
           return this.parent().each(function() {
               n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
           }).end()
       }
   }), n.expr.filters.hidden = function(a) {
       return a.offsetWidth <= 0 && a.offsetHeight <= 0
   }, n.expr.filters.visible = function(a) {
       return !n.expr.filters.hidden(a)
   };
   var vb = /%20/g,
       wb = /\[\]$/,
       xb = /\r?\n/g,
       yb = /^(?:submit|button|image|reset|file)$/i,
       zb = /^(?:input|select|textarea|keygen)/i;

   function Ab(a, b, c, d) {
       var e;
       if (n.isArray(b)) n.each(b, function(b, e) {
           c || wb.test(a) ? d(a, e) : Ab(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
       });
       else if (c || "object" !== n.type(b)) d(a, b);
       else
           for (e in b) Ab(a + "[" + e + "]", b[e], c, d)
   }
   n.param = function(a, b) {
       var c, d = [],
           e = function(a, b) {
               b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
           };
       if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function() {
           e(this.name, this.value)
       });
       else
           for (c in a) Ab(c, a[c], b, e);
       return d.join("&").replace(vb, "+")
   }, n.fn.extend({
       serialize: function() {
           return n.param(this.serializeArray())
       },
       serializeArray: function() {
           return this.map(function() {
               var a = n.prop(this, "elements");
               return a ? n.makeArray(a) : this
           }).filter(function() {
               var a = this.type;
               return this.name && !n(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !T.test(a))
           }).map(function(a, b) {
               var c = n(this).val();
               return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
                   return {
                       name: b.name,
                       value: a.replace(xb, "\r\n")
                   }
               }) : {
                   name: b.name,
                   value: c.replace(xb, "\r\n")
               }
           }).get()
       }
   }), n.ajaxSettings.xhr = function() {
       try {
           return new XMLHttpRequest
       } catch (a) {}
   };
   var Bb = 0,
       Cb = {},
       Db = {
           0: 200,
           1223: 204
       },
       Eb = n.ajaxSettings.xhr();
   a.attachEvent && a.attachEvent("onunload", function() {
       for (var a in Cb) Cb[a]()
   }), k.cors = !!Eb && "withCredentials" in Eb, k.ajax = Eb = !!Eb, n.ajaxTransport(function(a) {
       var b;
       return k.cors || Eb && !a.crossDomain ? {
           send: function(c, d) {
               var e, f = a.xhr(),
                   g = ++Bb;
               if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                   for (e in a.xhrFields) f[e] = a.xhrFields[e];
               a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
               for (e in c) f.setRequestHeader(e, c[e]);
               b = function(a) {
                   return function() {
                       b && (delete Cb[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Db[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {
                           text: f.responseText
                       } : void 0, f.getAllResponseHeaders()))
                   }
               }, f.onload = b(), f.onerror = b("error"), b = Cb[g] = b("abort");
               try {
                   f.send(a.hasContent && a.data || null)
               } catch (h) {
                   if (b) throw h
               }
           },
           abort: function() {
               b && b()
           }
       } : void 0
   }), n.ajaxSetup({
       accepts: {
           script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
       },
       contents: {
           script: /(?:java|ecma)script/
       },
       converters: {
           "text script": function(a) {
               return n.globalEval(a), a
           }
       }
   }), n.ajaxPrefilter("script", function(a) {
       void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
   }), n.ajaxTransport("script", function(a) {
       if (a.crossDomain) {
           var b, c;
           return {
               send: function(d, e) {
                   b = n("<script>").prop({
                       async: !0,
                       charset: a.scriptCharset,
                       src: a.url
                   }).on("load error", c = function(a) {
                       b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
                   }), l.head.appendChild(b[0])
               },
               abort: function() {
                   c && c()
               }
           }
       }
   });
   var Fb = [],
       Gb = /(=)\?(?=&|$)|\?\?/;
   n.ajaxSetup({
       jsonp: "callback",
       jsonpCallback: function() {
           var a = Fb.pop() || n.expando + "_" + cb++;
           return this[a] = !0, a
       }
   }), n.ajaxPrefilter("json jsonp", function(b, c, d) {
       var e, f, g, h = b.jsonp !== !1 && (Gb.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Gb.test(b.data) && "data");
       return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Gb, "$1" + e) : b.jsonp !== !1 && (b.url += (db.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
           return g || n.error(e + " was not called"), g[0]
       }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
           g = arguments
       }, d.always(function() {
           a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Fb.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
       }), "script") : void 0
   }), n.parseHTML = function(a, b, c) {
       if (!a || "string" != typeof a) return null;
       "boolean" == typeof b && (c = b, b = !1), b = b || l;
       var d = v.exec(a),
           e = !c && [];
       return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e), e && e.length && n(e).remove(), n.merge([], d.childNodes))
   };
   var Hb = n.fn.load;
   n.fn.load = function(a, b, c) {
       if ("string" != typeof a && Hb) return Hb.apply(this, arguments);
       var d, e, f, g = this,
           h = a.indexOf(" ");
       return h >= 0 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
           url: a,
           type: e,
           dataType: "html",
           data: b
       }).done(function(a) {
           f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
       }).complete(c && function(a, b) {
           g.each(c, f || [a.responseText, b, a])
       }), this
   }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
       n.fn[b] = function(a) {
           return this.on(b, a)
       }
   }), n.expr.filters.animated = function(a) {
       return n.grep(n.timers, function(b) {
           return a === b.elem
       }).length
   };
   var Ib = a.document.documentElement;

   function Jb(a) {
       return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
   }
   n.offset = {
       setOffset: function(a, b, c) {
           var d, e, f, g, h, i, j, k = n.css(a, "position"),
               l = n(a),
               m = {};
           "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
       }
   }, n.fn.extend({
       offset: function(a) {
           if (arguments.length) return void 0 === a ? this : this.each(function(b) {
               n.offset.setOffset(this, a, b)
           });
           var b, c, d = this[0],
               e = {
                   top: 0,
                   left: 0
               },
               f = d && d.ownerDocument;
           if (f) return b = f.documentElement, n.contains(b, d) ? (typeof d.getBoundingClientRect !== U && (e = d.getBoundingClientRect()), c = Jb(f), {
               top: e.top + c.pageYOffset - b.clientTop,
               left: e.left + c.pageXOffset - b.clientLeft
           }) : e
       },
       position: function() {
           if (this[0]) {
               var a, b, c = this[0],
                   d = {
                       top: 0,
                       left: 0
                   };
               return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), {
                   top: b.top - d.top - n.css(c, "marginTop", !0),
                   left: b.left - d.left - n.css(c, "marginLeft", !0)
               }
           }
       },
       offsetParent: function() {
           return this.map(function() {
               var a = this.offsetParent || Ib;
               while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) a = a.offsetParent;
               return a || Ib
           })
       }
   }), n.each({
       scrollLeft: "pageXOffset",
       scrollTop: "pageYOffset"
   }, function(b, c) {
       var d = "pageYOffset" === c;
       n.fn[b] = function(e) {
           return J(this, function(b, e, f) {
               var g = Jb(b);
               return void 0 === f ? g ? g[c] : b[e] : void(g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
           }, b, e, arguments.length, null)
       }
   }), n.each(["top", "left"], function(a, b) {
       n.cssHooks[b] = ya(k.pixelPosition, function(a, c) {
           return c ? (c = xa(a, b), va.test(c) ? n(a).position()[b] + "px" : c) : void 0
       })
   }), n.each({
       Height: "height",
       Width: "width"
   }, function(a, b) {
       n.each({
           padding: "inner" + a,
           content: b,
           "": "outer" + a
       }, function(c, d) {
           n.fn[d] = function(d, e) {
               var f = arguments.length && (c || "boolean" != typeof d),
                   g = c || (d === !0 || e === !0 ? "margin" : "border");
               return J(this, function(b, c, d) {
                   var e;
                   return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
               }, b, f ? d : void 0, f, null)
           }
       })
   }), n.fn.size = function() {
       return this.length
   }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
       return n
   });
   var Kb = a.jQuery,
       Lb = a.$;
   return n.noConflict = function(b) {
       return a.$ === n && (a.$ = Lb), b && a.jQuery === n && (a.jQuery = Kb), n
   }, typeof b === U && (a.jQuery = a.$ = n), n
});
! function(t, e) {
   "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e(require, exports, module) : t.Tether = e()
}(this, function(t, e, o) {
   "use strict";

   function n(t, e) {
       if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
   }

   function i(t) {
       var e = t.getBoundingClientRect(),
           o = {};
       for (var n in e) o[n] = e[n];
       if (t.ownerDocument !== document) {
           var r = t.ownerDocument.defaultView.frameElement;
           if (r) {
               var s = i(r);
               o.top += s.top, o.bottom += s.top, o.left += s.left, o.right += s.left
           }
       }
       return o
   }

   function r(t) {
       var e = getComputedStyle(t) || {},
           o = e.position,
           n = [];
       if ("fixed" === o) return [t];
       for (var i = t;
           (i = i.parentNode) && i && 1 === i.nodeType;) {
           var r = void 0;
           try {
               r = getComputedStyle(i)
           } catch (s) {}
           if ("undefined" == typeof r || null === r) return n.push(i), n;
           var a = r,
               f = a.overflow,
               l = a.overflowX,
               h = a.overflowY;
           /(auto|scroll)/.test(f + h + l) && ("absolute" !== o || ["relative", "absolute", "fixed"].indexOf(r.position) >= 0) && n.push(i)
       }
       return n.push(t.ownerDocument.body), t.ownerDocument !== document && n.push(t.ownerDocument.defaultView), n
   }

   function s() {
       A && document.body.removeChild(A), A = null
   }

   function a(t) {
       var e = void 0;
       t === document ? (e = document, t = document.documentElement) : e = t.ownerDocument;
       var o = e.documentElement,
           n = i(t),
           r = P();
       return n.top -= r.top, n.left -= r.left, "undefined" == typeof n.width && (n.width = document.body.scrollWidth - n.left - n.right), "undefined" == typeof n.height && (n.height = document.body.scrollHeight - n.top - n.bottom), n.top = n.top - o.clientTop, n.left = n.left - o.clientLeft, n.right = e.body.clientWidth - n.width - n.left, n.bottom = e.body.clientHeight - n.height - n.top, n
   }

   function f(t) {
       return t.offsetParent || document.documentElement
   }

   function l() {
       var t = document.createElement("div");
       t.style.width = "100%", t.style.height = "200px";
       var e = document.createElement("div");
       h(e.style, {
           position: "absolute",
           top: 0,
           left: 0,
           pointerEvents: "none",
           visibility: "hidden",
           width: "200px",
           height: "150px",
           overflow: "hidden"
       }), e.appendChild(t), document.body.appendChild(e);
       var o = t.offsetWidth;
       e.style.overflow = "scroll";
       var n = t.offsetWidth;
       o === n && (n = e.clientWidth), document.body.removeChild(e);
       var i = o - n;
       return {
           width: i,
           height: i
       }
   }

   function h() {
       var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
           e = [];
       return Array.prototype.push.apply(e, arguments), e.slice(1).forEach(function(e) {
           if (e)
               for (var o in e)({}).hasOwnProperty.call(e, o) && (t[o] = e[o])
       }), t
   }

   function u(t, e) {
       if ("undefined" != typeof t.classList) e.split(" ").forEach(function(e) {
           e.trim() && t.classList.remove(e)
       });
       else {
           var o = new RegExp("(^| )" + e.split(" ").join("|") + "( |$)", "gi"),
               n = c(t).replace(o, " ");
           g(t, n)
       }
   }

   function d(t, e) {
       if ("undefined" != typeof t.classList) e.split(" ").forEach(function(e) {
           e.trim() && t.classList.add(e)
       });
       else {
           u(t, e);
           var o = c(t) + (" " + e);
           g(t, o)
       }
   }

   function p(t, e) {
       if ("undefined" != typeof t.classList) return t.classList.contains(e);
       var o = c(t);
       return new RegExp("(^| )" + e + "( |$)", "gi").test(o)
   }

   function c(t) {
       return t.className instanceof t.ownerDocument.defaultView.SVGAnimatedString ? t.className.baseVal : t.className
   }

   function g(t, e) {
       t.setAttribute("class", e)
   }

   function m(t, e, o) {
       o.forEach(function(o) {
           -1 === e.indexOf(o) && p(t, o) && u(t, o)
       }), e.forEach(function(e) {
           p(t, e) || d(t, e)
       })
   }

   function n(t, e) {
       if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
   }

   function v(t, e) {
       if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
       t.prototype = Object.create(e && e.prototype, {
           constructor: {
               value: t,
               enumerable: !1,
               writable: !0,
               configurable: !0
           }
       }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
   }

   function y(t, e) {
       var o = arguments.length <= 2 || void 0 === arguments[2] ? 1 : arguments[2];
       return t + o >= e && e >= t - o
   }

   function b() {
       return "undefined" != typeof performance && "undefined" != typeof performance.now ? performance.now() : +new Date
   }

   function w() {
       for (var t = {
               top: 0,
               left: 0
           }, e = arguments.length, o = Array(e), n = 0; e > n; n++) o[n] = arguments[n];
       return o.forEach(function(e) {
           var o = e.top,
               n = e.left;
           "string" == typeof o && (o = parseFloat(o, 10)), "string" == typeof n && (n = parseFloat(n, 10)), t.top += o, t.left += n
       }), t
   }

   function C(t, e) {
       return "string" == typeof t.left && -1 !== t.left.indexOf("%") && (t.left = parseFloat(t.left, 10) / 100 * e.width), "string" == typeof t.top && -1 !== t.top.indexOf("%") && (t.top = parseFloat(t.top, 10) / 100 * e.height), t
   }

   function O(t, e) {
       return "scrollParent" === e ? e = t.scrollParents[0] : "window" === e && (e = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset]), e === document && (e = e.documentElement), "undefined" != typeof e.nodeType && ! function() {
           var t = e,
               o = a(e),
               n = o,
               i = getComputedStyle(e);
           if (e = [n.left, n.top, o.width + n.left, o.height + n.top], t.ownerDocument !== document) {
               var r = t.ownerDocument.defaultView;
               e[0] += r.pageXOffset, e[1] += r.pageYOffset, e[2] += r.pageXOffset, e[3] += r.pageYOffset
           }
           $.forEach(function(t, o) {
               t = t[0].toUpperCase() + t.substr(1), "Top" === t || "Left" === t ? e[o] += parseFloat(i["border" + t + "Width"]) : e[o] -= parseFloat(i["border" + t + "Width"])
           })
       }(), e
   }
   var E = function() {
           function t(t, e) {
               for (var o = 0; o < e.length; o++) {
                   var n = e[o];
                   n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
               }
           }
           return function(e, o, n) {
               return o && t(e.prototype, o), n && t(e, n), e
           }
       }(),
       x = void 0;
   "undefined" == typeof x && (x = {
       modules: []
   });
   var A = null,
       T = function() {
           var t = 0;
           return function() {
               return ++t
           }
       }(),
       S = {},
       P = function() {
           var t = A;
           t || (t = document.createElement("div"), t.setAttribute("data-tether-id", T()), h(t.style, {
               top: 0,
               left: 0,
               position: "absolute"
           }), document.body.appendChild(t), A = t);
           var e = t.getAttribute("data-tether-id");
           return "undefined" == typeof S[e] && (S[e] = i(t), M(function() {
               delete S[e]
           })), S[e]
       },
       W = [],
       M = function(t) {
           W.push(t)
       },
       _ = function() {
           for (var t = void 0; t = W.pop();) t()
       },
       k = function() {
           function t() {
               n(this, t)
           }
           return E(t, [{
               key: "on",
               value: function(t, e, o) {
                   var n = arguments.length <= 3 || void 0 === arguments[3] ? !1 : arguments[3];
                   "undefined" == typeof this.bindings && (this.bindings = {}), "undefined" == typeof this.bindings[t] && (this.bindings[t] = []), this.bindings[t].push({
                       handler: e,
                       ctx: o,
                       once: n
                   })
               }
           }, {
               key: "once",
               value: function(t, e, o) {
                   this.on(t, e, o, !0)
               }
           }, {
               key: "off",
               value: function(t, e) {
                   if ("undefined" != typeof this.bindings && "undefined" != typeof this.bindings[t])
                       if ("undefined" == typeof e) delete this.bindings[t];
                       else
                           for (var o = 0; o < this.bindings[t].length;) this.bindings[t][o].handler === e ? this.bindings[t].splice(o, 1) : ++o
               }
           }, {
               key: "trigger",
               value: function(t) {
                   if ("undefined" != typeof this.bindings && this.bindings[t]) {
                       for (var e = 0, o = arguments.length, n = Array(o > 1 ? o - 1 : 0), i = 1; o > i; i++) n[i - 1] = arguments[i];
                       for (; e < this.bindings[t].length;) {
                           var r = this.bindings[t][e],
                               s = r.handler,
                               a = r.ctx,
                               f = r.once,
                               l = a;
                           "undefined" == typeof l && (l = this), s.apply(l, n), f ? this.bindings[t].splice(e, 1) : ++e
                       }
                   }
               }
           }]), t
       }();
   x.Utils = {
       getActualBoundingClientRect: i,
       getScrollParents: r,
       getBounds: a,
       getOffsetParent: f,
       extend: h,
       addClass: d,
       removeClass: u,
       hasClass: p,
       updateClasses: m,
       defer: M,
       flush: _,
       uniqueId: T,
       Evented: k,
       getScrollBarSize: l,
       removeUtilElements: s
   };
   var B = function() {
           function t(t, e) {
               var o = [],
                   n = !0,
                   i = !1,
                   r = void 0;
               try {
                   for (var s, a = t[Symbol.iterator](); !(n = (s = a.next()).done) && (o.push(s.value), !e || o.length !== e); n = !0);
               } catch (f) {
                   i = !0, r = f
               } finally {
                   try {
                       !n && a["return"] && a["return"]()
                   } finally {
                       if (i) throw r
                   }
               }
               return o
           }
           return function(e, o) {
               if (Array.isArray(e)) return e;
               if (Symbol.iterator in Object(e)) return t(e, o);
               throw new TypeError("Invalid attempt to destructure non-iterable instance")
           }
       }(),
       E = function() {
           function t(t, e) {
               for (var o = 0; o < e.length; o++) {
                   var n = e[o];
                   n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
               }
           }
           return function(e, o, n) {
               return o && t(e.prototype, o), n && t(e, n), e
           }
       }(),
       z = function(t, e, o) {
           for (var n = !0; n;) {
               var i = t,
                   r = e,
                   s = o;
               n = !1, null === i && (i = Function.prototype);
               var a = Object.getOwnPropertyDescriptor(i, r);
               if (void 0 !== a) {
                   if ("value" in a) return a.value;
                   var f = a.get;
                   if (void 0 === f) return;
                   return f.call(s)
               }
               var l = Object.getPrototypeOf(i);
               if (null === l) return;
               t = l, e = r, o = s, n = !0, a = l = void 0
           }
       };
   if ("undefined" == typeof x) throw new Error("You must include the utils.js file before tether.js");
   var j = x.Utils,
       r = j.getScrollParents,
       a = j.getBounds,
       f = j.getOffsetParent,
       h = j.extend,
       d = j.addClass,
       u = j.removeClass,
       m = j.updateClasses,
       M = j.defer,
       _ = j.flush,
       l = j.getScrollBarSize,
       s = j.removeUtilElements,
       Y = function() {
           if ("undefined" == typeof document) return "";
           for (var t = document.createElement("div"), e = ["transform", "WebkitTransform", "OTransform", "MozTransform", "msTransform"], o = 0; o < e.length; ++o) {
               var n = e[o];
               if (void 0 !== t.style[n]) return n
           }
       }(),
       L = [],
       D = function() {
           L.forEach(function(t) {
               t.position(!1)
           }), _()
       };
   ! function() {
       var t = null,
           e = null,
           o = null,
           n = function i() {
               return "undefined" != typeof e && e > 16 ? (e = Math.min(e - 16, 250), void(o = setTimeout(i, 250))) : void("undefined" != typeof t && b() - t < 10 || (null != o && (clearTimeout(o), o = null), t = b(), D(), e = b() - t))
           };
       "undefined" != typeof window && "undefined" != typeof window.addEventListener && ["resize", "scroll", "touchmove"].forEach(function(t) {
           window.addEventListener(t, n)
       })
   }();
   var X = {
           center: "center",
           left: "right",
           right: "left"
       },
       F = {
           middle: "middle",
           top: "bottom",
           bottom: "top"
       },
       H = {
           top: 0,
           left: 0,
           middle: "50%",
           center: "50%",
           bottom: "100%",
           right: "100%"
       },
       N = function(t, e) {
           var o = t.left,
               n = t.top;
           return "auto" === o && (o = X[e.left]), "auto" === n && (n = F[e.top]), {
               left: o,
               top: n
           }
       },
       U = function(t) {
           var e = t.left,
               o = t.top;
           return "undefined" != typeof H[t.left] && (e = H[t.left]), "undefined" != typeof H[t.top] && (o = H[t.top]), {
               left: e,
               top: o
           }
       },
       V = function(t) {
           var e = t.split(" "),
               o = B(e, 2),
               n = o[0],
               i = o[1];
           return {
               top: n,
               left: i
           }
       },
       R = V,
       q = function(t) {
           function e(t) {
               var o = this;
               n(this, e), z(Object.getPrototypeOf(e.prototype), "constructor", this).call(this), this.position = this.position.bind(this), L.push(this), this.history = [], this.setOptions(t, !1), x.modules.forEach(function(t) {
                   "undefined" != typeof t.initialize && t.initialize.call(o)
               }), this.position()
           }
           return v(e, t), E(e, [{
               key: "getClass",
               value: function() {
                   var t = arguments.length <= 0 || void 0 === arguments[0] ? "" : arguments[0],
                       e = this.options.classes;
                   return "undefined" != typeof e && e[t] ? this.options.classes[t] : this.options.classPrefix ? this.options.classPrefix + "-" + t : t
               }
           }, {
               key: "setOptions",
               value: function(t) {
                   var e = this,
                       o = arguments.length <= 1 || void 0 === arguments[1] ? !0 : arguments[1],
                       n = {
                           offset: "0 0",
                           targetOffset: "0 0",
                           targetAttachment: "auto auto",
                           classPrefix: "tether"
                       };
                   this.options = h(n, t);
                   var i = this.options,
                       s = i.element,
                       a = i.target,
                       f = i.targetModifier;
                   if (this.element = s, this.target = a, this.targetModifier = f, "viewport" === this.target ? (this.target = document.body, this.targetModifier = "visible") : "scroll-handle" === this.target && (this.target = document.body, this.targetModifier = "scroll-handle"), ["element", "target"].forEach(function(t) {
                           if ("undefined" == typeof e[t]) throw new Error("Tether Error: Both element and target must be defined");
                           "undefined" != typeof e[t].jquery ? e[t] = e[t][0] : "string" == typeof e[t] && (e[t] = document.querySelector(e[t]))
                       }), d(this.element, this.getClass("element")), this.options.addTargetClasses !== !1 && d(this.target, this.getClass("target")), !this.options.attachment) throw new Error("Tether Error: You must provide an attachment");
                   this.targetAttachment = R(this.options.targetAttachment), this.attachment = R(this.options.attachment), this.offset = V(this.options.offset), this.targetOffset = V(this.options.targetOffset), "undefined" != typeof this.scrollParents && this.disable(), "scroll-handle" === this.targetModifier ? this.scrollParents = [this.target] : this.scrollParents = r(this.target), this.options.enabled !== !1 && this.enable(o)
               }
           }, {
               key: "getTargetBounds",
               value: function() {
                   if ("undefined" == typeof this.targetModifier) return a(this.target);
                   if ("visible" === this.targetModifier) {
                       if (this.target === document.body) return {
                           top: pageYOffset,
                           left: pageXOffset,
                           height: innerHeight,
                           width: innerWidth
                       };
                       var t = a(this.target),
                           e = {
                               height: t.height,
                               width: t.width,
                               top: t.top,
                               left: t.left
                           };
                       return e.height = Math.min(e.height, t.height - (pageYOffset - t.top)), e.height = Math.min(e.height, t.height - (t.top + t.height - (pageYOffset + innerHeight))), e.height = Math.min(innerHeight, e.height), e.height -= 2, e.width = Math.min(e.width, t.width - (pageXOffset - t.left)), e.width = Math.min(e.width, t.width - (t.left + t.width - (pageXOffset + innerWidth))), e.width = Math.min(innerWidth, e.width), e.width -= 2, e.top < pageYOffset && (e.top = pageYOffset), e.left < pageXOffset && (e.left = pageXOffset), e
                   }
                   if ("scroll-handle" === this.targetModifier) {
                       var t = void 0,
                           o = this.target;
                       o === document.body ? (o = document.documentElement, t = {
                           left: pageXOffset,
                           top: pageYOffset,
                           height: innerHeight,
                           width: innerWidth
                       }) : t = a(o);
                       var n = getComputedStyle(o),
                           i = o.scrollWidth > o.clientWidth || [n.overflow, n.overflowX].indexOf("scroll") >= 0 || this.target !== document.body,
                           r = 0;
                       i && (r = 15);
                       var s = t.height - parseFloat(n.borderTopWidth) - parseFloat(n.borderBottomWidth) - r,
                           e = {
                               width: 15,
                               height: .975 * s * (s / o.scrollHeight),
                               left: t.left + t.width - parseFloat(n.borderLeftWidth) - 15
                           },
                           f = 0;
                       408 > s && this.target === document.body && (f = -11e-5 * Math.pow(s, 2) - .00727 * s + 22.58), this.target !== document.body && (e.height = Math.max(e.height, 24));
                       var l = this.target.scrollTop / (o.scrollHeight - s);
                       return e.top = l * (s - e.height - f) + t.top + parseFloat(n.borderTopWidth), this.target === document.body && (e.height = Math.max(e.height, 24)), e
                   }
               }
           }, {
               key: "clearCache",
               value: function() {
                   this._cache = {}
               }
           }, {
               key: "cache",
               value: function(t, e) {
                   return "undefined" == typeof this._cache && (this._cache = {}), "undefined" == typeof this._cache[t] && (this._cache[t] = e.call(this)), this._cache[t]
               }
           }, {
               key: "enable",
               value: function() {
                   var t = this,
                       e = arguments.length <= 0 || void 0 === arguments[0] ? !0 : arguments[0];
                   this.options.addTargetClasses !== !1 && d(this.target, this.getClass("enabled")), d(this.element, this.getClass("enabled")), this.enabled = !0, this.scrollParents.forEach(function(e) {
                       e !== t.target.ownerDocument && e.addEventListener("scroll", t.position)
                   }), e && this.position()
               }
           }, {
               key: "disable",
               value: function() {
                   var t = this;
                   u(this.target, this.getClass("enabled")), u(this.element, this.getClass("enabled")), this.enabled = !1, "undefined" != typeof this.scrollParents && this.scrollParents.forEach(function(e) {
                       e.removeEventListener("scroll", t.position)
                   })
               }
           }, {
               key: "destroy",
               value: function() {
                   var t = this;
                   this.disable(), L.forEach(function(e, o) {
                       e === t && L.splice(o, 1)
                   }), 0 === L.length && s()
               }
           }, {
               key: "updateAttachClasses",
               value: function(t, e) {
                   var o = this;
                   t = t || this.attachment, e = e || this.targetAttachment;
                   var n = ["left", "top", "bottom", "right", "middle", "center"];
                   "undefined" != typeof this._addAttachClasses && this._addAttachClasses.length && this._addAttachClasses.splice(0, this._addAttachClasses.length), "undefined" == typeof this._addAttachClasses && (this._addAttachClasses = []);
                   var i = this._addAttachClasses;
                   t.top && i.push(this.getClass("element-attached") + "-" + t.top), t.left && i.push(this.getClass("element-attached") + "-" + t.left), e.top && i.push(this.getClass("target-attached") + "-" + e.top), e.left && i.push(this.getClass("target-attached") + "-" + e.left);
                   var r = [];
                   n.forEach(function(t) {
                       r.push(o.getClass("element-attached") + "-" + t), r.push(o.getClass("target-attached") + "-" + t)
                   }), M(function() {
                       "undefined" != typeof o._addAttachClasses && (m(o.element, o._addAttachClasses, r), o.options.addTargetClasses !== !1 && m(o.target, o._addAttachClasses, r), delete o._addAttachClasses)
                   })
               }
           }, {
               key: "position",
               value: function() {
                   var t = this,
                       e = arguments.length <= 0 || void 0 === arguments[0] ? !0 : arguments[0];
                   if (this.enabled) {
                       this.clearCache();
                       var o = N(this.targetAttachment, this.attachment);
                       this.updateAttachClasses(this.attachment, o);
                       var n = this.cache("element-bounds", function() {
                               return a(t.element)
                           }),
                           i = n.width,
                           r = n.height;
                       if (0 === i && 0 === r && "undefined" != typeof this.lastSize) {
                           var s = this.lastSize;
                           i = s.width, r = s.height
                       } else this.lastSize = {
                           width: i,
                           height: r
                       };
                       var h = this.cache("target-bounds", function() {
                               return t.getTargetBounds()
                           }),
                           u = h,
                           d = C(U(this.attachment), {
                               width: i,
                               height: r
                           }),
                           p = C(U(o), u),
                           c = C(this.offset, {
                               width: i,
                               height: r
                           }),
                           g = C(this.targetOffset, u);
                       d = w(d, c), p = w(p, g);
                       for (var m = h.left + p.left - d.left, v = h.top + p.top - d.top, y = 0; y < x.modules.length; ++y) {
                           var b = x.modules[y],
                               O = b.position.call(this, {
                                   left: m,
                                   top: v,
                                   targetAttachment: o,
                                   targetPos: h,
                                   elementPos: n,
                                   offset: d,
                                   targetOffset: p,
                                   manualOffset: c,
                                   manualTargetOffset: g,
                                   scrollbarSize: S,
                                   attachment: this.attachment
                               });
                           if (O === !1) return !1;
                           "undefined" != typeof O && "object" == typeof O && (v = O.top, m = O.left)
                       }
                       var E = {
                               page: {
                                   top: v,
                                   left: m
                               },
                               viewport: {
                                   top: v - pageYOffset,
                                   bottom: pageYOffset - v - r + innerHeight,
                                   left: m - pageXOffset,
                                   right: pageXOffset - m - i + innerWidth
                               }
                           },
                           A = this.target.ownerDocument,
                           T = A.defaultView,
                           S = void 0;
                       return A.body.scrollWidth > T.innerWidth && (S = this.cache("scrollbar-size", l), E.viewport.bottom -= S.height), A.body.scrollHeight > T.innerHeight && (S = this.cache("scrollbar-size", l), E.viewport.right -= S.width), (-1 === ["", "static"].indexOf(A.body.style.position) || -1 === ["", "static"].indexOf(A.body.parentElement.style.position)) && (E.page.bottom = A.body.scrollHeight - v - r, E.page.right = A.body.scrollWidth - m - i), "undefined" != typeof this.options.optimizations && this.options.optimizations.moveElement !== !1 && "undefined" == typeof this.targetModifier && ! function() {
                           var e = t.cache("target-offsetparent", function() {
                                   return f(t.target)
                               }),
                               o = t.cache("target-offsetparent-bounds", function() {
                                   return a(e)
                               }),
                               n = getComputedStyle(e),
                               i = o,
                               r = {};
                           if (["Top", "Left", "Bottom", "Right"].forEach(function(t) {
                                   r[t.toLowerCase()] = parseFloat(n["border" + t + "Width"])
                               }), o.right = A.body.scrollWidth - o.left - i.width + r.right, o.bottom = A.body.scrollHeight - o.top - i.height + r.bottom, E.page.top >= o.top + r.top && E.page.bottom >= o.bottom && E.page.left >= o.left + r.left && E.page.right >= o.right) {
                               var s = e.scrollTop,
                                   l = e.scrollLeft;
                               E.offset = {
                                   top: E.page.top - o.top + s - r.top,
                                   left: E.page.left - o.left + l - r.left
                               }
                           }
                       }(), this.move(E), this.history.unshift(E), this.history.length > 3 && this.history.pop(), e && _(), !0
                   }
               }
           }, {
               key: "move",
               value: function(t) {
                   var e = this;
                   if ("undefined" != typeof this.element.parentNode) {
                       var o = {};
                       for (var n in t) {
                           o[n] = {};
                           for (var i in t[n]) {
                               for (var r = !1, s = 0; s < this.history.length; ++s) {
                                   var a = this.history[s];
                                   if ("undefined" != typeof a[n] && !y(a[n][i], t[n][i])) {
                                       r = !0;
                                       break
                                   }
                               }
                               r || (o[n][i] = !0)
                           }
                       }
                       var l = {
                               top: "",
                               left: "",
                               right: "",
                               bottom: ""
                           },
                           u = function(t, o) {
                               var n = "undefined" != typeof e.options.optimizations,
                                   i = n ? e.options.optimizations.gpu : null;
                               if (i !== !1) {
                                   var r = void 0,
                                       s = void 0;
                                   t.top ? (l.top = 0, r = o.top) : (l.bottom = 0, r = -o.bottom), t.left ? (l.left = 0, s = o.left) : (l.right = 0, s = -o.right), l[Y] = "translateX(" + Math.round(s) + "px) translateY(" + Math.round(r) + "px)", "msTransform" !== Y && (l[Y] += " translateZ(0)")
                               } else t.top ? l.top = o.top + "px" : l.bottom = o.bottom + "px", t.left ? l.left = o.left + "px" : l.right = o.right + "px"
                           },
                           d = !1;
                       if ((o.page.top || o.page.bottom) && (o.page.left || o.page.right) ? (l.position = "absolute", u(o.page, t.page)) : (o.viewport.top || o.viewport.bottom) && (o.viewport.left || o.viewport.right) ? (l.position = "fixed", u(o.viewport, t.viewport)) : "undefined" != typeof o.offset && o.offset.top && o.offset.left ? ! function() {
                               l.position = "absolute";
                               var n = e.cache("target-offsetparent", function() {
                                   return f(e.target)
                               });
                               f(e.element) !== n && M(function() {
                                   e.element.parentNode.removeChild(e.element), n.appendChild(e.element)
                               }), u(o.offset, t.offset), d = !0
                           }() : (l.position = "absolute", u({
                               top: !0,
                               left: !0
                           }, t.page)), !d) {
                           for (var p = !0, c = this.element.parentNode; c && 1 === c.nodeType && "BODY" !== c.tagName;) {
                               if ("static" !== getComputedStyle(c).position) {
                                   p = !1;
                                   break
                               }
                               c = c.parentNode
                           }
                           p || (this.element.parentNode.removeChild(this.element), this.element.ownerDocument.body.appendChild(this.element))
                       }
                       var g = {},
                           m = !1;
                       for (var i in l) {
                           var v = l[i],
                               b = this.element.style[i];
                           b !== v && (m = !0, g[i] = v)
                       }
                       m && M(function() {
                           h(e.element.style, g)
                       })
                   }
               }
           }]), e
       }(k);
   q.modules = [], x.position = D;
   var I = h(q, x),
       B = function() {
           function t(t, e) {
               var o = [],
                   n = !0,
                   i = !1,
                   r = void 0;
               try {
                   for (var s, a = t[Symbol.iterator](); !(n = (s = a.next()).done) && (o.push(s.value), !e || o.length !== e); n = !0);
               } catch (f) {
                   i = !0, r = f
               } finally {
                   try {
                       !n && a["return"] && a["return"]()
                   } finally {
                       if (i) throw r
                   }
               }
               return o
           }
           return function(e, o) {
               if (Array.isArray(e)) return e;
               if (Symbol.iterator in Object(e)) return t(e, o);
               throw new TypeError("Invalid attempt to destructure non-iterable instance")
           }
       }(),
       j = x.Utils,
       a = j.getBounds,
       h = j.extend,
       m = j.updateClasses,
       M = j.defer,
       $ = ["left", "top", "right", "bottom"];
   x.modules.push({
       position: function(t) {
           var e = this,
               o = t.top,
               n = t.left,
               i = t.targetAttachment;
           if (!this.options.constraints) return !0;
           var r = this.cache("element-bounds", function() {
                   return a(e.element)
               }),
               s = r.height,
               f = r.width;
           if (0 === f && 0 === s && "undefined" != typeof this.lastSize) {
               var l = this.lastSize;
               f = l.width, s = l.height
           }
           var u = this.cache("target-bounds", function() {
                   return e.getTargetBounds()
               }),
               d = u.height,
               p = u.width,
               c = [this.getClass("pinned"), this.getClass("out-of-bounds")];
           this.options.constraints.forEach(function(t) {
               var e = t.outOfBoundsClass,
                   o = t.pinnedClass;
               e && c.push(e), o && c.push(o)
           }), c.forEach(function(t) {
               ["left", "top", "right", "bottom"].forEach(function(e) {
                   c.push(t + "-" + e)
               })
           });
           var g = [],
               v = h({}, i),
               y = h({}, this.attachment);
           return this.options.constraints.forEach(function(t) {
               var r = t.to,
                   a = t.attachment,
                   l = t.pin;
               "undefined" == typeof a && (a = "");
               var h = void 0,
                   u = void 0;
               if (a.indexOf(" ") >= 0) {
                   var c = a.split(" "),
                       m = B(c, 2);
                   u = m[0], h = m[1]
               } else h = u = a;
               var b = O(e, r);
               ("target" === u || "both" === u) && (o < b[1] && "top" === v.top && (o += d, v.top = "bottom"), o + s > b[3] && "bottom" === v.top && (o -= d, v.top = "top")), "together" === u && ("top" === v.top && ("bottom" === y.top && o < b[1] ? (o += d, v.top = "bottom", o += s, y.top = "top") : "top" === y.top && o + s > b[3] && o - (s - d) >= b[1] && (o -= s - d, v.top = "bottom", y.top = "bottom")), "bottom" === v.top && ("top" === y.top && o + s > b[3] ? (o -= d, v.top = "top", o -= s, y.top = "bottom") : "bottom" === y.top && o < b[1] && o + (2 * s - d) <= b[3] && (o += s - d, v.top = "top", y.top = "top")), "middle" === v.top && (o + s > b[3] && "top" === y.top ? (o -= s, y.top = "bottom") : o < b[1] && "bottom" === y.top && (o += s, y.top = "top"))), ("target" === h || "both" === h) && (n < b[0] && "left" === v.left && (n += p, v.left = "right"), n + f > b[2] && "right" === v.left && (n -= p, v.left = "left")), "together" === h && (n < b[0] && "left" === v.left ? "right" === y.left ? (n += p, v.left = "right", n += f, y.left = "left") : "left" === y.left && (n += p, v.left = "right", n -= f, y.left = "right") : n + f > b[2] && "right" === v.left ? "left" === y.left ? (n -= p, v.left = "left", n -= f, y.left = "right") : "right" === y.left && (n -= p, v.left = "left", n += f, y.left = "left") : "center" === v.left && (n + f > b[2] && "left" === y.left ? (n -= f, y.left = "right") : n < b[0] && "right" === y.left && (n += f, y.left = "left"))), ("element" === u || "both" === u) && (o < b[1] && "bottom" === y.top && (o += s, y.top = "top"), o + s > b[3] && "top" === y.top && (o -= s, y.top = "bottom")), ("element" === h || "both" === h) && (n < b[0] && ("right" === y.left ? (n += f, y.left = "left") : "center" === y.left && (n += f / 2, y.left = "left")), n + f > b[2] && ("left" === y.left ? (n -= f, y.left = "right") : "center" === y.left && (n -= f / 2, y.left = "right"))), "string" == typeof l ? l = l.split(",").map(function(t) {
                   return t.trim()
               }) : l === !0 && (l = ["top", "left", "right", "bottom"]), l = l || [];
               var w = [],
                   C = [];
               o < b[1] && (l.indexOf("top") >= 0 ? (o = b[1], w.push("top")) : C.push("top")), o + s > b[3] && (l.indexOf("bottom") >= 0 ? (o = b[3] - s, w.push("bottom")) : C.push("bottom")), n < b[0] && (l.indexOf("left") >= 0 ? (n = b[0], w.push("left")) : C.push("left")), n + f > b[2] && (l.indexOf("right") >= 0 ? (n = b[2] - f, w.push("right")) : C.push("right")), w.length && ! function() {
                   var t = void 0;
                   t = "undefined" != typeof e.options.pinnedClass ? e.options.pinnedClass : e.getClass("pinned"), g.push(t), w.forEach(function(e) {
                       g.push(t + "-" + e)
                   })
               }(), C.length && ! function() {
                   var t = void 0;
                   t = "undefined" != typeof e.options.outOfBoundsClass ? e.options.outOfBoundsClass : e.getClass("out-of-bounds"), g.push(t), C.forEach(function(e) {
                       g.push(t + "-" + e)
                   })
               }(), (w.indexOf("left") >= 0 || w.indexOf("right") >= 0) && (y.left = v.left = !1), (w.indexOf("top") >= 0 || w.indexOf("bottom") >= 0) && (y.top = v.top = !1), (v.top !== i.top || v.left !== i.left || y.top !== e.attachment.top || y.left !== e.attachment.left) && (e.updateAttachClasses(y, v), e.trigger("update", {
                   attachment: y,
                   targetAttachment: v
               }))
           }), M(function() {
               e.options.addTargetClasses !== !1 && m(e.target, g, c), m(e.element, g, c)
           }), {
               top: o,
               left: n
           }
       }
   });
   var j = x.Utils,
       a = j.getBounds,
       m = j.updateClasses,
       M = j.defer;
   x.modules.push({
       position: function(t) {
           var e = this,
               o = t.top,
               n = t.left,
               i = this.cache("element-bounds", function() {
                   return a(e.element)
               }),
               r = i.height,
               s = i.width,
               f = this.getTargetBounds(),
               l = o + r,
               h = n + s,
               u = [];
           o <= f.bottom && l >= f.top && ["left", "right"].forEach(function(t) {
               var e = f[t];
               (e === n || e === h) && u.push(t)
           }), n <= f.right && h >= f.left && ["top", "bottom"].forEach(function(t) {
               var e = f[t];
               (e === o || e === l) && u.push(t)
           });
           var d = [],
               p = [],
               c = ["left", "top", "right", "bottom"];
           return d.push(this.getClass("abutted")), c.forEach(function(t) {
               d.push(e.getClass("abutted") + "-" + t)
           }), u.length && p.push(this.getClass("abutted")), u.forEach(function(t) {
               p.push(e.getClass("abutted") + "-" + t)
           }), M(function() {
               e.options.addTargetClasses !== !1 && m(e.target, p, d), m(e.element, p, d)
           }), !0
       }
   });
   var B = function() {
       function t(t, e) {
           var o = [],
               n = !0,
               i = !1,
               r = void 0;
           try {
               for (var s, a = t[Symbol.iterator](); !(n = (s = a.next()).done) && (o.push(s.value), !e || o.length !== e); n = !0);
           } catch (f) {
               i = !0, r = f
           } finally {
               try {
                   !n && a["return"] && a["return"]()
               } finally {
                   if (i) throw r
               }
           }
           return o
       }
       return function(e, o) {
           if (Array.isArray(e)) return e;
           if (Symbol.iterator in Object(e)) return t(e, o);
           throw new TypeError("Invalid attempt to destructure non-iterable instance")
       }
   }();
   return x.modules.push({
       position: function(t) {
           var e = t.top,
               o = t.left;
           if (this.options.shift) {
               var n = this.options.shift;
               "function" == typeof this.options.shift && (n = this.options.shift.call(this, {
                   top: e,
                   left: o
               }));
               var i = void 0,
                   r = void 0;
               if ("string" == typeof n) {
                   n = n.split(" "), n[1] = n[1] || n[0];
                   var s = n,
                       a = B(s, 2);
                   i = a[0], r = a[1], i = parseFloat(i, 10), r = parseFloat(r, 10)
               } else i = n.top, r = n.left;
               return e += i, o += r, {
                   top: e,
                   left: o
               }
           }
       }
   }), I
});
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."); + function(t) {
   var e = t.fn.jquery.split(" ")[0].split(".");
   if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
}(jQuery), + function() {
   function t(t, e) {
       if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
       return !e || "object" != typeof e && "function" != typeof e ? t : e
   }

   function e(t, e) {
       if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
       t.prototype = Object.create(e && e.prototype, {
           constructor: {
               value: t,
               enumerable: !1,
               writable: !0,
               configurable: !0
           }
       }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
   }

   function n(t, e) {
       if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
   }
   var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
           return typeof t
       } : function(t) {
           return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
       },
       o = function() {
           function t(t, e) {
               for (var n = 0; n < e.length; n++) {
                   var i = e[n];
                   i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
               }
           }
           return function(e, n, i) {
               return n && t(e.prototype, n), i && t(e, i), e
           }
       }(),
       r = function(t) {
           function e(t) {
               return {}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
           }

           function n(t) {
               return (t[0] || t).nodeType
           }

           function i() {
               return {
                   bindType: a.end,
                   delegateType: a.end,
                   handle: function(e) {
                       if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
                   }
               }
           }

           function o() {
               if (window.QUnit) return !1;
               var t = document.createElement("bootstrap");
               for (var e in h)
                   if (void 0 !== t.style[e]) return {
                       end: h[e]
                   };
               return !1
           }

           function r(e) {
               var n = this,
                   i = !1;
               return t(this).one(c.TRANSITION_END, function() {
                   i = !0
               }), setTimeout(function() {
                   i || c.triggerTransitionEnd(n)
               }, e), this
           }

           function s() {
               a = o(), t.fn.emulateTransitionEnd = r, c.supportsTransitionEnd() && (t.event.special[c.TRANSITION_END] = i())
           }
           var a = !1,
               l = 1e6,
               h = {
                   WebkitTransition: "webkitTransitionEnd",
                   MozTransition: "transitionend",
                   OTransition: "oTransitionEnd otransitionend",
                   transition: "transitionend"
               },
               c = {
                   TRANSITION_END: "bsTransitionEnd",
                   getUID: function(t) {
                       do t += ~~(Math.random() * l); while (document.getElementById(t));
                       return t
                   },
                   getSelectorFromElement: function(t) {
                       var e = t.getAttribute("data-target");
                       return e || (e = t.getAttribute("href") || "", e = /^#[a-z]/i.test(e) ? e : null), e
                   },
                   reflow: function(t) {
                       return t.offsetHeight
                   },
                   triggerTransitionEnd: function(e) {
                       t(e).trigger(a.end)
                   },
                   supportsTransitionEnd: function() {
                       return Boolean(a)
                   },
                   typeCheckConfig: function(t, i, o) {
                       for (var r in o)
                           if (o.hasOwnProperty(r)) {
                               var s = o[r],
                                   a = i[r],
                                   l = a && n(a) ? "element" : e(a);
                               if (!new RegExp(s).test(l)) throw new Error(t.toUpperCase() + ": " + ('Option "' + r + '" provided type "' + l + '" ') + ('but expected type "' + s + '".'))
                           }
                   }
               };
           return s(), c
       }(jQuery),
       s = (function(t) {
           var e = "alert",
               i = "4.0.0-alpha.6",
               s = "bs.alert",
               a = "." + s,
               l = ".data-api",
               h = t.fn[e],
               c = 150,
               u = {
                   DISMISS: '[data-dismiss="alert"]'
               },
               d = {
                   CLOSE: "close" + a,
                   CLOSED: "closed" + a,
                   CLICK_DATA_API: "click" + a + l
               },
               f = {
                   ALERT: "alert",
                   FADE: "fade",
                   SHOW: "show"
               },
               _ = function() {
                   function e(t) {
                       n(this, e), this._element = t
                   }
                   return e.prototype.close = function(t) {
                       t = t || this._element;
                       var e = this._getRootElement(t),
                           n = this._triggerCloseEvent(e);
                       n.isDefaultPrevented() || this._removeElement(e)
                   }, e.prototype.dispose = function() {
                       t.removeData(this._element, s), this._element = null
                   }, e.prototype._getRootElement = function(e) {
                       var n = r.getSelectorFromElement(e),
                           i = !1;
                       return n && (i = t(n)[0]), i || (i = t(e).closest("." + f.ALERT)[0]), i
                   }, e.prototype._triggerCloseEvent = function(e) {
                       var n = t.Event(d.CLOSE);
                       return t(e).trigger(n), n
                   }, e.prototype._removeElement = function(e) {
                       var n = this;
                       return t(e).removeClass(f.SHOW), r.supportsTransitionEnd() && t(e).hasClass(f.FADE) ? void t(e).one(r.TRANSITION_END, function(t) {
                           return n._destroyElement(e, t)
                       }).emulateTransitionEnd(c) : void this._destroyElement(e)
                   }, e.prototype._destroyElement = function(e) {
                       t(e).detach().trigger(d.CLOSED).remove()
                   }, e._jQueryInterface = function(n) {
                       return this.each(function() {
                           var i = t(this),
                               o = i.data(s);
                           o || (o = new e(this), i.data(s, o)), "close" === n && o[n](this)
                       })
                   }, e._handleDismiss = function(t) {
                       return function(e) {
                           e && e.preventDefault(), t.close(this)
                       }
                   }, o(e, null, [{
                       key: "VERSION",
                       get: function() {
                           return i
                       }
                   }]), e
               }();
           return t(document).on(d.CLICK_DATA_API, u.DISMISS, _._handleDismiss(new _)), t.fn[e] = _._jQueryInterface, t.fn[e].Constructor = _, t.fn[e].noConflict = function() {
               return t.fn[e] = h, _._jQueryInterface
           }, _
       }(jQuery), function(t) {
           var e = "button",
               i = "4.0.0-alpha.6",
               r = "bs.button",
               s = "." + r,
               a = ".data-api",
               l = t.fn[e],
               h = {
                   ACTIVE: "active",
                   BUTTON: "btn",
                   FOCUS: "focus"
               },
               c = {
                   DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
                   DATA_TOGGLE: '[data-toggle="buttons"]',
                   INPUT: "input",
                   ACTIVE: ".active",
                   BUTTON: ".btn"
               },
               u = {
                   CLICK_DATA_API: "click" + s + a,
                   FOCUS_BLUR_DATA_API: "focus" + s + a + " " + ("blur" + s + a)
               },
               d = function() {
                   function e(t) {
                       n(this, e), this._element = t
                   }
                   return e.prototype.toggle = function() {
                       var e = !0,
                           n = t(this._element).closest(c.DATA_TOGGLE)[0];
                       if (n) {
                           var i = t(this._element).find(c.INPUT)[0];
                           if (i) {
                               if ("radio" === i.type)
                                   if (i.checked && t(this._element).hasClass(h.ACTIVE)) e = !1;
                                   else {
                                       var o = t(n).find(c.ACTIVE)[0];
                                       o && t(o).removeClass(h.ACTIVE)
                                   } e && (i.checked = !t(this._element).hasClass(h.ACTIVE), t(i).trigger("change")), i.focus()
                           }
                       }
                       this._element.setAttribute("aria-pressed", !t(this._element).hasClass(h.ACTIVE)), e && t(this._element).toggleClass(h.ACTIVE)
                   }, e.prototype.dispose = function() {
                       t.removeData(this._element, r), this._element = null
                   }, e._jQueryInterface = function(n) {
                       return this.each(function() {
                           var i = t(this).data(r);
                           i || (i = new e(this), t(this).data(r, i)), "toggle" === n && i[n]()
                       })
                   }, o(e, null, [{
                       key: "VERSION",
                       get: function() {
                           return i
                       }
                   }]), e
               }();
           return t(document).on(u.CLICK_DATA_API, c.DATA_TOGGLE_CARROT, function(e) {
               e.preventDefault();
               var n = e.target;
               t(n).hasClass(h.BUTTON) || (n = t(n).closest(c.BUTTON)), d._jQueryInterface.call(t(n), "toggle")
           }).on(u.FOCUS_BLUR_DATA_API, c.DATA_TOGGLE_CARROT, function(e) {
               var n = t(e.target).closest(c.BUTTON)[0];
               t(n).toggleClass(h.FOCUS, /^focus(in)?$/.test(e.type))
           }), t.fn[e] = d._jQueryInterface, t.fn[e].Constructor = d, t.fn[e].noConflict = function() {
               return t.fn[e] = l, d._jQueryInterface
           }, d
       }(jQuery), function(t) {
           var e = "carousel",
               s = "4.0.0-alpha.6",
               a = "bs.carousel",
               l = "." + a,
               h = ".data-api",
               c = t.fn[e],
               u = 600,
               d = 37,
               f = 39,
               _ = {
                   interval: 5e3,
                   keyboard: !0,
                   slide: !1,
                   pause: "hover",
                   wrap: !0
               },
               g = {
                   interval: "(number|boolean)",
                   keyboard: "boolean",
                   slide: "(boolean|string)",
                   pause: "(string|boolean)",
                   wrap: "boolean"
               },
               p = {
                   NEXT: "next",
                   PREV: "prev",
                   LEFT: "left",
                   RIGHT: "right"
               },
               m = {
                   SLIDE: "slide" + l,
                   SLID: "slid" + l,
                   KEYDOWN: "keydown" + l,
                   MOUSEENTER: "mouseenter" + l,
                   MOUSELEAVE: "mouseleave" + l,
                   LOAD_DATA_API: "load" + l + h,
                   CLICK_DATA_API: "click" + l + h
               },
               E = {
                   CAROUSEL: "carousel",
                   ACTIVE: "active",
                   SLIDE: "slide",
                   RIGHT: "carousel-item-right",
                   LEFT: "carousel-item-left",
                   NEXT: "carousel-item-next",
                   PREV: "carousel-item-prev",
                   ITEM: "carousel-item"
               },
               v = {
                   ACTIVE: ".active",
                   ACTIVE_ITEM: ".active.carousel-item",
                   ITEM: ".carousel-item",
                   NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
                   INDICATORS: ".carousel-indicators",
                   DATA_SLIDE: "[data-slide], [data-slide-to]",
                   DATA_RIDE: '[data-ride="carousel"]'
               },
               T = function() {
                   function h(e, i) {
                       n(this, h), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this._config = this._getConfig(i), this._element = t(e)[0], this._indicatorsElement = t(this._element).find(v.INDICATORS)[0], this._addEventListeners()
                   }
                   return h.prototype.next = function() {
                       if (this._isSliding) throw new Error("Carousel is sliding");
                       this._slide(p.NEXT)
                   }, h.prototype.nextWhenVisible = function() {
                       document.hidden || this.next()
                   }, h.prototype.prev = function() {
                       if (this._isSliding) throw new Error("Carousel is sliding");
                       this._slide(p.PREVIOUS)
                   }, h.prototype.pause = function(e) {
                       e || (this._isPaused = !0), t(this._element).find(v.NEXT_PREV)[0] && r.supportsTransitionEnd() && (r.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
                   }, h.prototype.cycle = function(t) {
                       t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
                   }, h.prototype.to = function(e) {
                       var n = this;
                       this._activeElement = t(this._element).find(v.ACTIVE_ITEM)[0];
                       var i = this._getItemIndex(this._activeElement);
                       if (!(e > this._items.length - 1 || e < 0)) {
                           if (this._isSliding) return void t(this._element).one(m.SLID, function() {
                               return n.to(e)
                           });
                           if (i === e) return this.pause(), void this.cycle();
                           var o = e > i ? p.NEXT : p.PREVIOUS;
                           this._slide(o, this._items[e])
                       }
                   }, h.prototype.dispose = function() {
                       t(this._element).off(l), t.removeData(this._element, a), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
                   }, h.prototype._getConfig = function(n) {
                       return n = t.extend({}, _, n), r.typeCheckConfig(e, n, g), n
                   }, h.prototype._addEventListeners = function() {
                       var e = this;
                       this._config.keyboard && t(this._element).on(m.KEYDOWN, function(t) {
                           return e._keydown(t)
                       }), "hover" !== this._config.pause || "ontouchstart" in document.documentElement || t(this._element).on(m.MOUSEENTER, function(t) {
                           return e.pause(t)
                       }).on(m.MOUSELEAVE, function(t) {
                           return e.cycle(t)
                       })
                   }, h.prototype._keydown = function(t) {
                       if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
                           case d:
                               t.preventDefault(), this.prev();
                               break;
                           case f:
                               t.preventDefault(), this.next();
                               break;
                           default:
                               return
                       }
                   }, h.prototype._getItemIndex = function(e) {
                       return this._items = t.makeArray(t(e).parent().find(v.ITEM)), this._items.indexOf(e)
                   }, h.prototype._getItemByDirection = function(t, e) {
                       var n = t === p.NEXT,
                           i = t === p.PREVIOUS,
                           o = this._getItemIndex(e),
                           r = this._items.length - 1,
                           s = i && 0 === o || n && o === r;
                       if (s && !this._config.wrap) return e;
                       var a = t === p.PREVIOUS ? -1 : 1,
                           l = (o + a) % this._items.length;
                       return l === -1 ? this._items[this._items.length - 1] : this._items[l]
                   }, h.prototype._triggerSlideEvent = function(e, n) {
                       var i = t.Event(m.SLIDE, {
                           relatedTarget: e,
                           direction: n
                       });
                       return t(this._element).trigger(i), i
                   }, h.prototype._setActiveIndicatorElement = function(e) {
                       if (this._indicatorsElement) {
                           t(this._indicatorsElement).find(v.ACTIVE).removeClass(E.ACTIVE);
                           var n = this._indicatorsElement.children[this._getItemIndex(e)];
                           n && t(n).addClass(E.ACTIVE)
                       }
                   }, h.prototype._slide = function(e, n) {
                       var i = this,
                           o = t(this._element).find(v.ACTIVE_ITEM)[0],
                           s = n || o && this._getItemByDirection(e, o),
                           a = Boolean(this._interval),
                           l = void 0,
                           h = void 0,
                           c = void 0;
                       if (e === p.NEXT ? (l = E.LEFT, h = E.NEXT, c = p.LEFT) : (l = E.RIGHT, h = E.PREV, c = p.RIGHT), s && t(s).hasClass(E.ACTIVE)) return void(this._isSliding = !1);
                       var d = this._triggerSlideEvent(s, c);
                       if (!d.isDefaultPrevented() && o && s) {
                           this._isSliding = !0, a && this.pause(), this._setActiveIndicatorElement(s);
                           var f = t.Event(m.SLID, {
                               relatedTarget: s,
                               direction: c
                           });
                           r.supportsTransitionEnd() && t(this._element).hasClass(E.SLIDE) ? (t(s).addClass(h), r.reflow(s), t(o).addClass(l), t(s).addClass(l), t(o).one(r.TRANSITION_END, function() {
                               t(s).removeClass(l + " " + h).addClass(E.ACTIVE), t(o).removeClass(E.ACTIVE + " " + h + " " + l), i._isSliding = !1, setTimeout(function() {
                                   return t(i._element).trigger(f)
                               }, 0)
                           }).emulateTransitionEnd(u)) : (t(o).removeClass(E.ACTIVE), t(s).addClass(E.ACTIVE), this._isSliding = !1, t(this._element).trigger(f)), a && this.cycle()
                       }
                   }, h._jQueryInterface = function(e) {
                       return this.each(function() {
                           var n = t(this).data(a),
                               o = t.extend({}, _, t(this).data());
                           "object" === ("undefined" == typeof e ? "undefined" : i(e)) && t.extend(o, e);
                           var r = "string" == typeof e ? e : o.slide;
                           if (n || (n = new h(this, o), t(this).data(a, n)), "number" == typeof e) n.to(e);
                           else if ("string" == typeof r) {
                               if (void 0 === n[r]) throw new Error('No method named "' + r + '"');
                               n[r]()
                           } else o.interval && (n.pause(), n.cycle())
                       })
                   }, h._dataApiClickHandler = function(e) {
                       var n = r.getSelectorFromElement(this);
                       if (n) {
                           var i = t(n)[0];
                           if (i && t(i).hasClass(E.CAROUSEL)) {
                               var o = t.extend({}, t(i).data(), t(this).data()),
                                   s = this.getAttribute("data-slide-to");
                               s && (o.interval = !1), h._jQueryInterface.call(t(i), o), s && t(i).data(a).to(s), e.preventDefault()
                           }
                       }
                   }, o(h, null, [{
                       key: "VERSION",
                       get: function() {
                           return s
                       }
                   }, {
                       key: "Default",
                       get: function() {
                           return _
                       }
                   }]), h
               }();
           return t(document).on(m.CLICK_DATA_API, v.DATA_SLIDE, T._dataApiClickHandler), t(window).on(m.LOAD_DATA_API, function() {
               t(v.DATA_RIDE).each(function() {
                   var e = t(this);
                   T._jQueryInterface.call(e, e.data())
               })
           }), t.fn[e] = T._jQueryInterface, t.fn[e].Constructor = T, t.fn[e].noConflict = function() {
               return t.fn[e] = c, T._jQueryInterface
           }, T
       }(jQuery), function(t) {
           var e = "collapse",
               s = "4.0.0-alpha.6",
               a = "bs.collapse",
               l = "." + a,
               h = ".data-api",
               c = t.fn[e],
               u = 600,
               d = {
                   toggle: !0,
                   parent: ""
               },
               f = {
                   toggle: "boolean",
                   parent: "string"
               },
               _ = {
                   SHOW: "show" + l,
                   SHOWN: "shown" + l,
                   HIDE: "hide" + l,
                   HIDDEN: "hidden" + l,
                   CLICK_DATA_API: "click" + l + h
               },
               g = {
                   SHOW: "show",
                   COLLAPSE: "collapse",
                   COLLAPSING: "collapsing",
                   COLLAPSED: "collapsed"
               },
               p = {
                   WIDTH: "width",
                   HEIGHT: "height"
               },
               m = {
                   ACTIVES: ".card > .show, .card > .collapsing",
                   DATA_TOGGLE: '[data-toggle="collapse"]'
               },
               E = function() {
                   function l(e, i) {
                       n(this, l), this._isTransitioning = !1, this._element = e, this._config = this._getConfig(i), this._triggerArray = t.makeArray(t('[data-toggle="collapse"][href="#' + e.id + '"],' + ('[data-toggle="collapse"][data-target="#' + e.id + '"]'))), this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
                   }
                   return l.prototype.toggle = function() {
                       t(this._element).hasClass(g.SHOW) ? this.hide() : this.show()
                   }, l.prototype.show = function() {
                       var e = this;
                       if (this._isTransitioning) throw new Error("Collapse is transitioning");
                       if (!t(this._element).hasClass(g.SHOW)) {
                           var n = void 0,
                               i = void 0;
                           if (this._parent && (n = t.makeArray(t(this._parent).find(m.ACTIVES)), n.length || (n = null)), !(n && (i = t(n).data(a), i && i._isTransitioning))) {
                               var o = t.Event(_.SHOW);
                               if (t(this._element).trigger(o), !o.isDefaultPrevented()) {
                                   n && (l._jQueryInterface.call(t(n), "hide"), i || t(n).data(a, null));
                                   var s = this._getDimension();
                                   t(this._element).removeClass(g.COLLAPSE).addClass(g.COLLAPSING), this._element.style[s] = 0, this._element.setAttribute("aria-expanded", !0), this._triggerArray.length && t(this._triggerArray).removeClass(g.COLLAPSED).attr("aria-expanded", !0), this.setTransitioning(!0);
                                   var h = function() {
                                       t(e._element).removeClass(g.COLLAPSING).addClass(g.COLLAPSE).addClass(g.SHOW), e._element.style[s] = "", e.setTransitioning(!1), t(e._element).trigger(_.SHOWN)
                                   };
                                   if (!r.supportsTransitionEnd()) return void h();
                                   var c = s[0].toUpperCase() + s.slice(1),
                                       d = "scroll" + c;
                                   t(this._element).one(r.TRANSITION_END, h).emulateTransitionEnd(u), this._element.style[s] = this._element[d] + "px"
                               }
                           }
                       }
                   }, l.prototype.hide = function() {
                       var e = this;
                       if (this._isTransitioning) throw new Error("Collapse is transitioning");
                       if (t(this._element).hasClass(g.SHOW)) {
                           var n = t.Event(_.HIDE);
                           if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
                               var i = this._getDimension(),
                                   o = i === p.WIDTH ? "offsetWidth" : "offsetHeight";
                               this._element.style[i] = this._element[o] + "px", r.reflow(this._element), t(this._element).addClass(g.COLLAPSING).removeClass(g.COLLAPSE).removeClass(g.SHOW), this._element.setAttribute("aria-expanded", !1), this._triggerArray.length && t(this._triggerArray).addClass(g.COLLAPSED).attr("aria-expanded", !1), this.setTransitioning(!0);
                               var s = function() {
                                   e.setTransitioning(!1), t(e._element).removeClass(g.COLLAPSING).addClass(g.COLLAPSE).trigger(_.HIDDEN)
                               };
                               return this._element.style[i] = "", r.supportsTransitionEnd() ? void t(this._element).one(r.TRANSITION_END, s).emulateTransitionEnd(u) : void s()
                           }
                       }
                   }, l.prototype.setTransitioning = function(t) {
                       this._isTransitioning = t
                   }, l.prototype.dispose = function() {
                       t.removeData(this._element, a), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
                   }, l.prototype._getConfig = function(n) {
                       return n = t.extend({}, d, n), n.toggle = Boolean(n.toggle), r.typeCheckConfig(e, n, f), n
                   }, l.prototype._getDimension = function() {
                       var e = t(this._element).hasClass(p.WIDTH);
                       return e ? p.WIDTH : p.HEIGHT
                   }, l.prototype._getParent = function() {
                       var e = this,
                           n = t(this._config.parent)[0],
                           i = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                       return t(n).find(i).each(function(t, n) {
                           e._addAriaAndCollapsedClass(l._getTargetFromElement(n), [n])
                       }), n
                   }, l.prototype._addAriaAndCollapsedClass = function(e, n) {
                       if (e) {
                           var i = t(e).hasClass(g.SHOW);
                           e.setAttribute("aria-expanded", i), n.length && t(n).toggleClass(g.COLLAPSED, !i).attr("aria-expanded", i)
                       }
                   }, l._getTargetFromElement = function(e) {
                       var n = r.getSelectorFromElement(e);
                       return n ? t(n)[0] : null
                   }, l._jQueryInterface = function(e) {
                       return this.each(function() {
                           var n = t(this),
                               o = n.data(a),
                               r = t.extend({}, d, n.data(), "object" === ("undefined" == typeof e ? "undefined" : i(e)) && e);
                           if (!o && r.toggle && /show|hide/.test(e) && (r.toggle = !1), o || (o = new l(this, r), n.data(a, o)), "string" == typeof e) {
                               if (void 0 === o[e]) throw new Error('No method named "' + e + '"');
                               o[e]()
                           }
                       })
                   }, o(l, null, [{
                       key: "VERSION",
                       get: function() {
                           return s
                       }
                   }, {
                       key: "Default",
                       get: function() {
                           return d
                       }
                   }]), l
               }();
           return t(document).on(_.CLICK_DATA_API, m.DATA_TOGGLE, function(e) {
               e.preventDefault();
               var n = E._getTargetFromElement(this),
                   i = t(n).data(a),
                   o = i ? "toggle" : t(this).data();
               E._jQueryInterface.call(t(n), o)
           }), t.fn[e] = E._jQueryInterface, t.fn[e].Constructor = E, t.fn[e].noConflict = function() {
               return t.fn[e] = c, E._jQueryInterface
           }, E
       }(jQuery), function(t) {
           var e = "dropdown",
               i = "4.0.0-alpha.6",
               s = "bs.dropdown",
               a = "." + s,
               l = ".data-api",
               h = t.fn[e],
               c = 27,
               u = 38,
               d = 40,
               f = 3,
               _ = {
                   HIDE: "hide" + a,
                   HIDDEN: "hidden" + a,
                   SHOW: "show" + a,
                   SHOWN: "shown" + a,
                   CLICK: "click" + a,
                   CLICK_DATA_API: "click" + a + l,
                   FOCUSIN_DATA_API: "focusin" + a + l,
                   KEYDOWN_DATA_API: "keydown" + a + l
               },
               g = {
                   BACKDROP: "dropdown-backdrop",
                   DISABLED: "disabled",
                   SHOW: "show"
               },
               p = {
                   BACKDROP: ".dropdown-backdrop",
                   DATA_TOGGLE: '[data-toggle="dropdown"]',
                   FORM_CHILD: ".dropdown form",
                   ROLE_MENU: '[role="menu"]',
                   ROLE_LISTBOX: '[role="listbox"]',
                   NAVBAR_NAV: ".navbar-nav",
                   VISIBLE_ITEMS: '[role="menu"] li:not(.disabled) a, [role="listbox"] li:not(.disabled) a'
               },
               m = function() {
                   function e(t) {
                       n(this, e), this._element = t, this._addEventListeners()
                   }
                   return e.prototype.toggle = function() {
                       if (this.disabled || t(this).hasClass(g.DISABLED)) return !1;
                       var n = e._getParentFromElement(this),
                           i = t(n).hasClass(g.SHOW);
                       if (e._clearMenus(), i) return !1;
                       if ("ontouchstart" in document.documentElement && !t(n).closest(p.NAVBAR_NAV).length) {
                           var o = document.createElement("div");
                           o.className = g.BACKDROP, t(o).insertBefore(this), t(o).on("click", e._clearMenus)
                       }
                       var r = {
                               relatedTarget: this
                           },
                           s = t.Event(_.SHOW, r);
                       return t(n).trigger(s), !s.isDefaultPrevented() && (this.focus(), this.setAttribute("aria-expanded", !0), t(n).toggleClass(g.SHOW), t(n).trigger(t.Event(_.SHOWN, r)), !1)
                   }, e.prototype.dispose = function() {
                       t.removeData(this._element, s), t(this._element).off(a), this._element = null
                   }, e.prototype._addEventListeners = function() {
                       t(this._element).on(_.CLICK, this.toggle)
                   }, e._jQueryInterface = function(n) {
                       return this.each(function() {
                           var i = t(this).data(s);
                           if (i || (i = new e(this), t(this).data(s, i)), "string" == typeof n) {
                               if (void 0 === i[n]) throw new Error('No method named "' + n + '"');
                               i[n].call(this)
                           }
                       })
                   }, e._clearMenus = function(n) {
                       if (!n || n.which !== f) {
                           var i = t(p.BACKDROP)[0];
                           i && i.parentNode.removeChild(i);
                           for (var o = t.makeArray(t(p.DATA_TOGGLE)), r = 0; r < o.length; r++) {
                               var s = e._getParentFromElement(o[r]),
                                   a = {
                                       relatedTarget: o[r]
                                   };
                               if (t(s).hasClass(g.SHOW) && !(n && ("click" === n.type && /input|textarea/i.test(n.target.tagName) || "focusin" === n.type) && t.contains(s, n.target))) {
                                   var l = t.Event(_.HIDE, a);
                                   t(s).trigger(l), l.isDefaultPrevented() || (o[r].setAttribute("aria-expanded", "false"), t(s).removeClass(g.SHOW).trigger(t.Event(_.HIDDEN, a)))
                               }
                           }
                       }
                   }, e._getParentFromElement = function(e) {
                       var n = void 0,
                           i = r.getSelectorFromElement(e);
                       return i && (n = t(i)[0]), n || e.parentNode
                   }, e._dataApiKeydownHandler = function(n) {
                       if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName) && (n.preventDefault(), n.stopPropagation(), !this.disabled && !t(this).hasClass(g.DISABLED))) {
                           var i = e._getParentFromElement(this),
                               o = t(i).hasClass(g.SHOW);
                           if (!o && n.which !== c || o && n.which === c) {
                               if (n.which === c) {
                                   var r = t(i).find(p.DATA_TOGGLE)[0];
                                   t(r).trigger("focus")
                               }
                               return void t(this).trigger("click")
                           }
                           var s = t(i).find(p.VISIBLE_ITEMS).get();
                           if (s.length) {
                               var a = s.indexOf(n.target);
                               n.which === u && a > 0 && a--, n.which === d && a < s.length - 1 && a++, a < 0 && (a = 0), s[a].focus()
                           }
                       }
                   }, o(e, null, [{
                       key: "VERSION",
                       get: function() {
                           return i
                       }
                   }]), e
               }();
           return t(document).on(_.KEYDOWN_DATA_API, p.DATA_TOGGLE, m._dataApiKeydownHandler).on(_.KEYDOWN_DATA_API, p.ROLE_MENU, m._dataApiKeydownHandler).on(_.KEYDOWN_DATA_API, p.ROLE_LISTBOX, m._dataApiKeydownHandler).on(_.CLICK_DATA_API + " " + _.FOCUSIN_DATA_API, m._clearMenus).on(_.CLICK_DATA_API, p.DATA_TOGGLE, m.prototype.toggle).on(_.CLICK_DATA_API, p.FORM_CHILD, function(t) {
               t.stopPropagation()
           }), t.fn[e] = m._jQueryInterface, t.fn[e].Constructor = m, t.fn[e].noConflict = function() {
               return t.fn[e] = h, m._jQueryInterface
           }, m
       }(jQuery), function(t) {
           var e = "modal",
               s = "4.0.0-alpha.6",
               a = "bs.modal",
               l = "." + a,
               h = ".data-api",
               c = t.fn[e],
               u = 300,
               d = 150,
               f = 27,
               _ = {
                   backdrop: !0,
                   keyboard: !0,
                   focus: !0,
                   show: !0
               },
               g = {
                   backdrop: "(boolean|string)",
                   keyboard: "boolean",
                   focus: "boolean",
                   show: "boolean"
               },
               p = {
                   HIDE: "hide" + l,
                   HIDDEN: "hidden" + l,
                   SHOW: "show" + l,
                   SHOWN: "shown" + l,
                   FOCUSIN: "focusin" + l,
                   RESIZE: "resize" + l,
                   CLICK_DISMISS: "click.dismiss" + l,
                   KEYDOWN_DISMISS: "keydown.dismiss" + l,
                   MOUSEUP_DISMISS: "mouseup.dismiss" + l,
                   MOUSEDOWN_DISMISS: "mousedown.dismiss" + l,
                   CLICK_DATA_API: "click" + l + h
               },
               m = {
                   SCROLLBAR_MEASURER: "modal-scrollbar-measure",
                   BACKDROP: "modal-backdrop",
                   OPEN: "modal-open",
                   FADE: "fade",
                   SHOW: "show"
               },
               E = {
                   DIALOG: ".modal-dialog",
                   DATA_TOGGLE: '[data-toggle="modal"]',
                   DATA_DISMISS: '[data-dismiss="modal"]',
                   FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
               },
               v = function() {
                   function h(e, i) {
                       n(this, h), this._config = this._getConfig(i), this._element = e, this._dialog = t(e).find(E.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0
                   }
                   return h.prototype.toggle = function(t) {
                       return this._isShown ? this.hide() : this.show(t)
                   }, h.prototype.show = function(e) {
                       var n = this;
                       if (this._isTransitioning) throw new Error("Modal is transitioning");
                       r.supportsTransitionEnd() && t(this._element).hasClass(m.FADE) && (this._isTransitioning = !0);
                       var i = t.Event(p.SHOW, {
                           relatedTarget: e
                       });
                       t(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), t(document.body).addClass(m.OPEN), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on(p.CLICK_DISMISS, E.DATA_DISMISS, function(t) {
                           return n.hide(t)
                       }), t(this._dialog).on(p.MOUSEDOWN_DISMISS, function() {
                           t(n._element).one(p.MOUSEUP_DISMISS, function(e) {
                               t(e.target).is(n._element) && (n._ignoreBackdropClick = !0)
                           })
                       }), this._showBackdrop(function() {
                           return n._showElement(e)
                       }))
                   }, h.prototype.hide = function(e) {
                       var n = this;
                       if (e && e.preventDefault(), this._isTransitioning) throw new Error("Modal is transitioning");
                       var i = r.supportsTransitionEnd() && t(this._element).hasClass(m.FADE);
                       i && (this._isTransitioning = !0);
                       var o = t.Event(p.HIDE);
                       t(this._element).trigger(o), this._isShown && !o.isDefaultPrevented() && (this._isShown = !1, this._setEscapeEvent(), this._setResizeEvent(), t(document).off(p.FOCUSIN), t(this._element).removeClass(m.SHOW), t(this._element).off(p.CLICK_DISMISS), t(this._dialog).off(p.MOUSEDOWN_DISMISS), i ? t(this._element).one(r.TRANSITION_END, function(t) {
                           return n._hideModal(t)
                       }).emulateTransitionEnd(u) : this._hideModal())
                   }, h.prototype.dispose = function() {
                       t.removeData(this._element, a), t(window, document, this._element, this._backdrop).off(l), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._originalBodyPadding = null, this._scrollbarWidth = null
                   }, h.prototype._getConfig = function(n) {
                       return n = t.extend({}, _, n), r.typeCheckConfig(e, n, g), n
                   }, h.prototype._showElement = function(e) {
                       var n = this,
                           i = r.supportsTransitionEnd() && t(this._element).hasClass(m.FADE);
                       this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, i && r.reflow(this._element), t(this._element).addClass(m.SHOW), this._config.focus && this._enforceFocus();
                       var o = t.Event(p.SHOWN, {
                               relatedTarget: e
                           }),
                           s = function() {
                               n._config.focus && n._element.focus(), n._isTransitioning = !1, t(n._element).trigger(o)
                           };
                       i ? t(this._dialog).one(r.TRANSITION_END, s).emulateTransitionEnd(u) : s()
                   }, h.prototype._enforceFocus = function() {
                       var e = this;
                       t(document).off(p.FOCUSIN).on(p.FOCUSIN, function(n) {
                           document === n.target || e._element === n.target || t(e._element).has(n.target).length || e._element.focus()
                       })
                   }, h.prototype._setEscapeEvent = function() {
                       var e = this;
                       this._isShown && this._config.keyboard ? t(this._element).on(p.KEYDOWN_DISMISS, function(t) {
                           t.which === f && e.hide()
                       }) : this._isShown || t(this._element).off(p.KEYDOWN_DISMISS)
                   }, h.prototype._setResizeEvent = function() {
                       var e = this;
                       this._isShown ? t(window).on(p.RESIZE, function(t) {
                           return e._handleUpdate(t)
                       }) : t(window).off(p.RESIZE)
                   }, h.prototype._hideModal = function() {
                       var e = this;
                       this._element.style.display = "none", this._element.setAttribute("aria-hidden", "true"), this._isTransitioning = !1, this._showBackdrop(function() {
                           t(document.body).removeClass(m.OPEN), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger(p.HIDDEN)
                       })
                   }, h.prototype._removeBackdrop = function() {
                       this._backdrop && (t(this._backdrop).remove(), this._backdrop = null)
                   }, h.prototype._showBackdrop = function(e) {
                       var n = this,
                           i = t(this._element).hasClass(m.FADE) ? m.FADE : "";
                       if (this._isShown && this._config.backdrop) {
                           var o = r.supportsTransitionEnd() && i;
                           if (this._backdrop = document.createElement("div"), this._backdrop.className = m.BACKDROP, i && t(this._backdrop).addClass(i), t(this._backdrop).appendTo(document.body), t(this._element).on(p.CLICK_DISMISS, function(t) {
                                   return n._ignoreBackdropClick ? void(n._ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide()))
                               }), o && r.reflow(this._backdrop), t(this._backdrop).addClass(m.SHOW), !e) return;
                           if (!o) return void e();
                           t(this._backdrop).one(r.TRANSITION_END, e).emulateTransitionEnd(d)
                       } else if (!this._isShown && this._backdrop) {
                           t(this._backdrop).removeClass(m.SHOW);
                           var s = function() {
                               n._removeBackdrop(), e && e()
                           };
                           r.supportsTransitionEnd() && t(this._element).hasClass(m.FADE) ? t(this._backdrop).one(r.TRANSITION_END, s).emulateTransitionEnd(d) : s()
                       } else e && e()
                   }, h.prototype._handleUpdate = function() {
                       this._adjustDialog()
                   }, h.prototype._adjustDialog = function() {
                       var t = this._element.scrollHeight > document.documentElement.clientHeight;
                       !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                   }, h.prototype._resetAdjustments = function() {
                       this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                   }, h.prototype._checkScrollbar = function() {
                       this._isBodyOverflowing = document.body.clientWidth < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
                   }, h.prototype._setScrollbar = function() {
                       var e = parseInt(t(E.FIXED_CONTENT).css("padding-right") || 0, 10);
                       this._originalBodyPadding = document.body.style.paddingRight || "", this._isBodyOverflowing && (document.body.style.paddingRight = e + this._scrollbarWidth + "px")
                   }, h.prototype._resetScrollbar = function() {
                       document.body.style.paddingRight = this._originalBodyPadding
                   }, h.prototype._getScrollbarWidth = function() {
                       var t = document.createElement("div");
                       t.className = m.SCROLLBAR_MEASURER, document.body.appendChild(t);
                       var e = t.offsetWidth - t.clientWidth;
                       return document.body.removeChild(t), e
                   }, h._jQueryInterface = function(e, n) {
                       return this.each(function() {
                           var o = t(this).data(a),
                               r = t.extend({}, h.Default, t(this).data(), "object" === ("undefined" == typeof e ? "undefined" : i(e)) && e);
                           if (o || (o = new h(this, r), t(this).data(a, o)), "string" == typeof e) {
                               if (void 0 === o[e]) throw new Error('No method named "' + e + '"');
                               o[e](n)
                           } else r.show && o.show(n)
                       })
                   }, o(h, null, [{
                       key: "VERSION",
                       get: function() {
                           return s
                       }
                   }, {
                       key: "Default",
                       get: function() {
                           return _
                       }
                   }]), h
               }();
           return t(document).on(p.CLICK_DATA_API, E.DATA_TOGGLE, function(e) {
               var n = this,
                   i = void 0,
                   o = r.getSelectorFromElement(this);
               o && (i = t(o)[0]);
               var s = t(i).data(a) ? "toggle" : t.extend({}, t(i).data(), t(this).data());
               "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
               var l = t(i).one(p.SHOW, function(e) {
                   e.isDefaultPrevented() || l.one(p.HIDDEN, function() {
                       t(n).is(":visible") && n.focus()
                   })
               });
               v._jQueryInterface.call(t(i), s, this)
           }), t.fn[e] = v._jQueryInterface, t.fn[e].Constructor = v, t.fn[e].noConflict = function() {
               return t.fn[e] = c, v._jQueryInterface
           }, v
       }(jQuery), function(t) {
           var e = "scrollspy",
               s = "4.0.0-alpha.6",
               a = "bs.scrollspy",
               l = "." + a,
               h = ".data-api",
               c = t.fn[e],
               u = {
                   offset: 10,
                   method: "auto",
                   target: ""
               },
               d = {
                   offset: "number",
                   method: "string",
                   target: "(string|element)"
               },
               f = {
                   ACTIVATE: "activate" + l,
                   SCROLL: "scroll" + l,
                   LOAD_DATA_API: "load" + l + h
               },
               _ = {
                   DROPDOWN_ITEM: "dropdown-item",
                   DROPDOWN_MENU: "dropdown-menu",
                   NAV_LINK: "nav-link",
                   NAV: "nav",
                   ACTIVE: "active"
               },
               g = {
                   DATA_SPY: '[data-spy="scroll"]',
                   ACTIVE: ".active",
                   LIST_ITEM: ".list-item",
                   LI: "li",
                   LI_DROPDOWN: "li.dropdown",
                   NAV_LINKS: ".nav-link",
                   DROPDOWN: ".dropdown",
                   DROPDOWN_ITEMS: ".dropdown-item",
                   DROPDOWN_TOGGLE: ".dropdown-toggle"
               },
               p = {
                   OFFSET: "offset",
                   POSITION: "position"
               },
               m = function() {
                   function h(e, i) {
                       var o = this;
                       n(this, h), this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(i), this._selector = this._config.target + " " + g.NAV_LINKS + "," + (this._config.target + " " + g.DROPDOWN_ITEMS), this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t(this._scrollElement).on(f.SCROLL, function(t) {
                           return o._process(t)
                       }), this.refresh(), this._process()
                   }
                   return h.prototype.refresh = function() {
                       var e = this,
                           n = this._scrollElement !== this._scrollElement.window ? p.POSITION : p.OFFSET,
                           i = "auto" === this._config.method ? n : this._config.method,
                           o = i === p.POSITION ? this._getScrollTop() : 0;
                       this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight();
                       var s = t.makeArray(t(this._selector));
                       s.map(function(e) {
                           var n = void 0,
                               s = r.getSelectorFromElement(e);
                           return s && (n = t(s)[0]), n && (n.offsetWidth || n.offsetHeight) ? [t(n)[i]().top + o, s] : null
                       }).filter(function(t) {
                           return t
                       }).sort(function(t, e) {
                           return t[0] - e[0]
                       }).forEach(function(t) {
                           e._offsets.push(t[0]), e._targets.push(t[1])
                       })
                   }, h.prototype.dispose = function() {
                       t.removeData(this._element, a), t(this._scrollElement).off(l), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
                   }, h.prototype._getConfig = function(n) {
                       if (n = t.extend({}, u, n), "string" != typeof n.target) {
                           var i = t(n.target).attr("id");
                           i || (i = r.getUID(e), t(n.target).attr("id", i)), n.target = "#" + i
                       }
                       return r.typeCheckConfig(e, n, d), n
                   }, h.prototype._getScrollTop = function() {
                       return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                   }, h.prototype._getScrollHeight = function() {
                       return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                   }, h.prototype._getOffsetHeight = function() {
                       return this._scrollElement === window ? window.innerHeight : this._scrollElement.offsetHeight
                   }, h.prototype._process = function() {
                       var t = this._getScrollTop() + this._config.offset,
                           e = this._getScrollHeight(),
                           n = this._config.offset + e - this._getOffsetHeight();
                       if (this._scrollHeight !== e && this.refresh(), t >= n) {
                           var i = this._targets[this._targets.length - 1];
                           return void(this._activeTarget !== i && this._activate(i))
                       }
                       if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                       for (var o = this._offsets.length; o--;) {
                           var r = this._activeTarget !== this._targets[o] && t >= this._offsets[o] && (void 0 === this._offsets[o + 1] || t < this._offsets[o + 1]);
                           r && this._activate(this._targets[o])
                       }
                   }, h.prototype._activate = function(e) {
                       this._activeTarget = e, this._clear();
                       var n = this._selector.split(",");
                       n = n.map(function(t) {
                           return t + '[data-target="' + e + '"],' + (t + '[href="' + e + '"]')
                       });
                       var i = t(n.join(","));
                       i.hasClass(_.DROPDOWN_ITEM) ? (i.closest(g.DROPDOWN).find(g.DROPDOWN_TOGGLE).addClass(_.ACTIVE), i.addClass(_.ACTIVE)) : i.parents(g.LI).find("> " + g.NAV_LINKS).addClass(_.ACTIVE), t(this._scrollElement).trigger(f.ACTIVATE, {
                           relatedTarget: e
                       })
                   }, h.prototype._clear = function() {
                       t(this._selector).filter(g.ACTIVE).removeClass(_.ACTIVE)
                   }, h._jQueryInterface = function(e) {
                       return this.each(function() {
                           var n = t(this).data(a),
                               o = "object" === ("undefined" == typeof e ? "undefined" : i(e)) && e;
                           if (n || (n = new h(this, o), t(this).data(a, n)), "string" == typeof e) {
                               if (void 0 === n[e]) throw new Error('No method named "' + e + '"');
                               n[e]()
                           }
                       })
                   }, o(h, null, [{
                       key: "VERSION",
                       get: function() {
                           return s
                       }
                   }, {
                       key: "Default",
                       get: function() {
                           return u
                       }
                   }]), h
               }();
           return t(window).on(f.LOAD_DATA_API, function() {
               for (var e = t.makeArray(t(g.DATA_SPY)), n = e.length; n--;) {
                   var i = t(e[n]);
                   m._jQueryInterface.call(i, i.data())
               }
           }), t.fn[e] = m._jQueryInterface, t.fn[e].Constructor = m, t.fn[e].noConflict = function() {
               return t.fn[e] = c, m._jQueryInterface
           }, m
       }(jQuery), function(t) {
           var e = "tab",
               i = "4.0.0-alpha.6",
               s = "bs.tab",
               a = "." + s,
               l = ".data-api",
               h = t.fn[e],
               c = 150,
               u = {
                   HIDE: "hide" + a,
                   HIDDEN: "hidden" + a,
                   SHOW: "show" + a,
                   SHOWN: "shown" + a,
                   CLICK_DATA_API: "click" + a + l
               },
               d = {
                   DROPDOWN_MENU: "dropdown-menu",
                   ACTIVE: "active",
                   DISABLED: "disabled",
                   FADE: "fade",
                   SHOW: "show"
               },
               f = {
                   A: "a",
                   LI: "li",
                   DROPDOWN: ".dropdown",
                   LIST: "ul:not(.dropdown-menu), ol:not(.dropdown-menu), nav:not(.dropdown-menu)",
                   FADE_CHILD: "> .nav-item .fade, > .fade",
                   ACTIVE: ".active",
                   ACTIVE_CHILD: "> .nav-item > .active, > .active",
                   DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"]',
                   DROPDOWN_TOGGLE: ".dropdown-toggle",
                   DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active"
               },
               _ = function() {
                   function e(t) {
                       n(this, e), this._element = t
                   }
                   return e.prototype.show = function() {
                       var e = this;
                       if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(d.ACTIVE) || t(this._element).hasClass(d.DISABLED))) {
                           var n = void 0,
                               i = void 0,
                               o = t(this._element).closest(f.LIST)[0],
                               s = r.getSelectorFromElement(this._element);
                           o && (i = t.makeArray(t(o).find(f.ACTIVE)), i = i[i.length - 1]);
                           var a = t.Event(u.HIDE, {
                                   relatedTarget: this._element
                               }),
                               l = t.Event(u.SHOW, {
                                   relatedTarget: i
                               });
                           if (i && t(i).trigger(a), t(this._element).trigger(l), !l.isDefaultPrevented() && !a.isDefaultPrevented()) {
                               s && (n = t(s)[0]), this._activate(this._element, o);
                               var h = function() {
                                   var n = t.Event(u.HIDDEN, {
                                           relatedTarget: e._element
                                       }),
                                       o = t.Event(u.SHOWN, {
                                           relatedTarget: i
                                       });
                                   t(i).trigger(n), t(e._element).trigger(o)
                               };
                               n ? this._activate(n, n.parentNode, h) : h()
                           }
                       }
                   }, e.prototype.dispose = function() {
                       t.removeClass(this._element, s), this._element = null
                   }, e.prototype._activate = function(e, n, i) {
                       var o = this,
                           s = t(n).find(f.ACTIVE_CHILD)[0],
                           a = i && r.supportsTransitionEnd() && (s && t(s).hasClass(d.FADE) || Boolean(t(n).find(f.FADE_CHILD)[0])),
                           l = function() {
                               return o._transitionComplete(e, s, a, i)
                           };
                       s && a ? t(s).one(r.TRANSITION_END, l).emulateTransitionEnd(c) : l(), s && t(s).removeClass(d.SHOW)
                   }, e.prototype._transitionComplete = function(e, n, i, o) {
                       if (n) {
                           t(n).removeClass(d.ACTIVE);
                           var s = t(n.parentNode).find(f.DROPDOWN_ACTIVE_CHILD)[0];
                           s && t(s).removeClass(d.ACTIVE), n.setAttribute("aria-expanded", !1)
                       }
                       if (t(e).addClass(d.ACTIVE), e.setAttribute("aria-expanded", !0), i ? (r.reflow(e), t(e).addClass(d.SHOW)) : t(e).removeClass(d.FADE), e.parentNode && t(e.parentNode).hasClass(d.DROPDOWN_MENU)) {
                           var a = t(e).closest(f.DROPDOWN)[0];
                           a && t(a).find(f.DROPDOWN_TOGGLE).addClass(d.ACTIVE), e.setAttribute("aria-expanded", !0)
                       }
                       o && o()
                   }, e._jQueryInterface = function(n) {
                       return this.each(function() {
                           var i = t(this),
                               o = i.data(s);
                           if (o || (o = new e(this), i.data(s, o)), "string" == typeof n) {
                               if (void 0 === o[n]) throw new Error('No method named "' + n + '"');
                               o[n]()
                           }
                       })
                   }, o(e, null, [{
                       key: "VERSION",
                       get: function() {
                           return i
                       }
                   }]), e
               }();
           return t(document).on(u.CLICK_DATA_API, f.DATA_TOGGLE, function(e) {
               e.preventDefault(), _._jQueryInterface.call(t(this), "show")
           }), t.fn[e] = _._jQueryInterface, t.fn[e].Constructor = _, t.fn[e].noConflict = function() {
               return t.fn[e] = h, _._jQueryInterface
           }, _
       }(jQuery), function(t) {
           if ("undefined" == typeof Tether) throw new Error("Bootstrap tooltips require Tether (http://tether.io/)");
           var e = "tooltip",
               s = "4.0.0-alpha.6",
               a = "bs.tooltip",
               l = "." + a,
               h = t.fn[e],
               c = 150,
               u = "bs-tether",
               d = {
                   animation: !0,
                   template: '<div class="tooltip" role="tooltip"><div class="tooltip-inner"></div></div>',
                   trigger: "hover focus",
                   title: "",
                   delay: 0,
                   html: !1,
                   selector: !1,
                   placement: "top",
                   offset: "0 0",
                   constraints: [],
                   container: !1
               },
               f = {
                   animation: "boolean",
                   template: "string",
                   title: "(string|element|function)",
                   trigger: "string",
                   delay: "(number|object)",
                   html: "boolean",
                   selector: "(string|boolean)",
                   placement: "(string|function)",
                   offset: "string",
                   constraints: "array",
                   container: "(string|element|boolean)"
               },
               _ = {
                   TOP: "bottom center",
                   RIGHT: "middle left",
                   BOTTOM: "top center",
                   LEFT: "middle right"
               },
               g = {
                   SHOW: "show",
                   OUT: "out"
               },
               p = {
                   HIDE: "hide" + l,
                   HIDDEN: "hidden" + l,
                   SHOW: "show" + l,
                   SHOWN: "shown" + l,
                   INSERTED: "inserted" + l,
                   CLICK: "click" + l,
                   FOCUSIN: "focusin" + l,
                   FOCUSOUT: "focusout" + l,
                   MOUSEENTER: "mouseenter" + l,
                   MOUSELEAVE: "mouseleave" + l
               },
               m = {
                   FADE: "fade",
                   SHOW: "show"
               },
               E = {
                   TOOLTIP: ".tooltip",
                   TOOLTIP_INNER: ".tooltip-inner"
               },
               v = {
                   element: !1,
                   enabled: !1
               },
               T = {
                   HOVER: "hover",
                   FOCUS: "focus",
                   CLICK: "click",
                   MANUAL: "manual"
               },
               I = function() {
                   function h(t, e) {
                       n(this, h), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._isTransitioning = !1, this._tether = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
                   }
                   return h.prototype.enable = function() {
                       this._isEnabled = !0
                   }, h.prototype.disable = function() {
                       this._isEnabled = !1
                   }, h.prototype.toggleEnabled = function() {
                       this._isEnabled = !this._isEnabled
                   }, h.prototype.toggle = function(e) {
                       if (e) {
                           var n = this.constructor.DATA_KEY,
                               i = t(e.currentTarget).data(n);
                           i || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                       } else {
                           if (t(this.getTipElement()).hasClass(m.SHOW)) return void this._leave(null, this);
                           this._enter(null, this)
                       }
                   }, h.prototype.dispose = function() {
                       clearTimeout(this._timeout), this.cleanupTether(), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), t(this.element).closest(".modal").off("hide.bs.modal"), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._tether = null, this.element = null, this.config = null, this.tip = null
                   }, h.prototype.show = function() {
                       var e = this;
                       if ("none" === t(this.element).css("display")) throw new Error("Please use show on visible elements");
                       var n = t.Event(this.constructor.Event.SHOW);
                       if (this.isWithContent() && this._isEnabled) {
                           if (this._isTransitioning) throw new Error("Tooltip is transitioning");
                           t(this.element).trigger(n);
                           var i = t.contains(this.element.ownerDocument.documentElement, this.element);
                           if (n.isDefaultPrevented() || !i) return;
                           var o = this.getTipElement(),
                               s = r.getUID(this.constructor.NAME);
                           o.setAttribute("id", s), this.element.setAttribute("aria-describedby", s), this.setContent(), this.config.animation && t(o).addClass(m.FADE);
                           var a = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
                               l = this._getAttachment(a),
                               c = this.config.container === !1 ? document.body : t(this.config.container);
                           t(o).data(this.constructor.DATA_KEY, this).appendTo(c), t(this.element).trigger(this.constructor.Event.INSERTED), this._tether = new Tether({
                               attachment: l,
                               element: o,
                               target: this.element,
                               classes: v,
                               classPrefix: u,
                               offset: this.config.offset,
                               constraints: this.config.constraints,
                               addTargetClasses: !1
                           }), r.reflow(o), this._tether.position(), t(o).addClass(m.SHOW);
                           var d = function() {
                               var n = e._hoverState;
                               e._hoverState = null, e._isTransitioning = !1, t(e.element).trigger(e.constructor.Event.SHOWN), n === g.OUT && e._leave(null, e)
                           };
                           if (r.supportsTransitionEnd() && t(this.tip).hasClass(m.FADE)) return this._isTransitioning = !0, void t(this.tip).one(r.TRANSITION_END, d).emulateTransitionEnd(h._TRANSITION_DURATION);
                           d()
                       }
                   }, h.prototype.hide = function(e) {
                       var n = this,
                           i = this.getTipElement(),
                           o = t.Event(this.constructor.Event.HIDE);
                       if (this._isTransitioning) throw new Error("Tooltip is transitioning");
                       var s = function() {
                           n._hoverState !== g.SHOW && i.parentNode && i.parentNode.removeChild(i), n.element.removeAttribute("aria-describedby"), t(n.element).trigger(n.constructor.Event.HIDDEN), n._isTransitioning = !1, n.cleanupTether(), e && e()
                       };
                       t(this.element).trigger(o), o.isDefaultPrevented() || (t(i).removeClass(m.SHOW), this._activeTrigger[T.CLICK] = !1, this._activeTrigger[T.FOCUS] = !1, this._activeTrigger[T.HOVER] = !1, r.supportsTransitionEnd() && t(this.tip).hasClass(m.FADE) ? (this._isTransitioning = !0, t(i).one(r.TRANSITION_END, s).emulateTransitionEnd(c)) : s(), this._hoverState = "")
                   }, h.prototype.isWithContent = function() {
                       return Boolean(this.getTitle())
                   }, h.prototype.getTipElement = function() {
                       return this.tip = this.tip || t(this.config.template)[0]
                   }, h.prototype.setContent = function() {
                       var e = t(this.getTipElement());
                       this.setElementContent(e.find(E.TOOLTIP_INNER), this.getTitle()), e.removeClass(m.FADE + " " + m.SHOW), this.cleanupTether()
                   }, h.prototype.setElementContent = function(e, n) {
                       var o = this.config.html;
                       "object" === ("undefined" == typeof n ? "undefined" : i(n)) && (n.nodeType || n.jquery) ? o ? t(n).parent().is(e) || e.empty().append(n) : e.text(t(n).text()): e[o ? "html" : "text"](n)
                   }, h.prototype.getTitle = function() {
                       var t = this.element.getAttribute("data-original-title");
                       return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t
                   }, h.prototype.cleanupTether = function() {
                       this._tether && this._tether.destroy()
                   }, h.prototype._getAttachment = function(t) {
                       return _[t.toUpperCase()]
                   }, h.prototype._setListeners = function() {
                       var e = this,
                           n = this.config.trigger.split(" ");
                       n.forEach(function(n) {
                           if ("click" === n) t(e.element).on(e.constructor.Event.CLICK, e.config.selector, function(t) {
                               return e.toggle(t)
                           });
                           else if (n !== T.MANUAL) {
                               var i = n === T.HOVER ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                                   o = n === T.HOVER ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                               t(e.element).on(i, e.config.selector, function(t) {
                                   return e._enter(t)
                               }).on(o, e.config.selector, function(t) {
                                   return e._leave(t)
                               })
                           }
                           t(e.element).closest(".modal").on("hide.bs.modal", function() {
                               return e.hide()
                           })
                       }), this.config.selector ? this.config = t.extend({}, this.config, {
                           trigger: "manual",
                           selector: ""
                       }) : this._fixTitle()
                   }, h.prototype._fixTitle = function() {
                       var t = i(this.element.getAttribute("data-original-title"));
                       (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                   }, h.prototype._enter = function(e, n) {
                       var i = this.constructor.DATA_KEY;
                       return n = n || t(e.currentTarget).data(i), n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusin" === e.type ? T.FOCUS : T.HOVER] = !0), t(n.getTipElement()).hasClass(m.SHOW) || n._hoverState === g.SHOW ? void(n._hoverState = g.SHOW) : (clearTimeout(n._timeout), n._hoverState = g.SHOW, n.config.delay && n.config.delay.show ? void(n._timeout = setTimeout(function() {
                           n._hoverState === g.SHOW && n.show()
                       }, n.config.delay.show)) : void n.show())
                   }, h.prototype._leave = function(e, n) {
                       var i = this.constructor.DATA_KEY;
                       if (n = n || t(e.currentTarget).data(i), n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusout" === e.type ? T.FOCUS : T.HOVER] = !1), !n._isWithActiveTrigger()) return clearTimeout(n._timeout), n._hoverState = g.OUT, n.config.delay && n.config.delay.hide ? void(n._timeout = setTimeout(function() {
                           n._hoverState === g.OUT && n.hide()
                       }, n.config.delay.hide)) : void n.hide()
                   }, h.prototype._isWithActiveTrigger = function() {
                       for (var t in this._activeTrigger)
                           if (this._activeTrigger[t]) return !0;
                       return !1
                   }, h.prototype._getConfig = function(n) {
                       return n = t.extend({}, this.constructor.Default, t(this.element).data(), n), n.delay && "number" == typeof n.delay && (n.delay = {
                           show: n.delay,
                           hide: n.delay
                       }), r.typeCheckConfig(e, n, this.constructor.DefaultType), n
                   }, h.prototype._getDelegateConfig = function() {
                       var t = {};
                       if (this.config)
                           for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                       return t
                   }, h._jQueryInterface = function(e) {
                       return this.each(function() {
                           var n = t(this).data(a),
                               o = "object" === ("undefined" == typeof e ? "undefined" : i(e)) && e;
                           if ((n || !/dispose|hide/.test(e)) && (n || (n = new h(this, o), t(this).data(a, n)), "string" == typeof e)) {
                               if (void 0 === n[e]) throw new Error('No method named "' + e + '"');
                               n[e]()
                           }
                       })
                   }, o(h, null, [{
                       key: "VERSION",
                       get: function() {
                           return s
                       }
                   }, {
                       key: "Default",
                       get: function() {
                           return d
                       }
                   }, {
                       key: "NAME",
                       get: function() {
                           return e
                       }
                   }, {
                       key: "DATA_KEY",
                       get: function() {
                           return a
                       }
                   }, {
                       key: "Event",
                       get: function() {
                           return p
                       }
                   }, {
                       key: "EVENT_KEY",
                       get: function() {
                           return l
                       }
                   }, {
                       key: "DefaultType",
                       get: function() {
                           return f
                       }
                   }]), h
               }();
           return t.fn[e] = I._jQueryInterface, t.fn[e].Constructor = I, t.fn[e].noConflict = function() {
               return t.fn[e] = h, I._jQueryInterface
           }, I
       }(jQuery));
   (function(r) {
       var a = "popover",
           l = "4.0.0-alpha.6",
           h = "bs.popover",
           c = "." + h,
           u = r.fn[a],
           d = r.extend({}, s.Default, {
               placement: "right",
               trigger: "click",
               content: "",
               template: '<div class="popover" role="tooltip"><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
           }),
           f = r.extend({}, s.DefaultType, {
               content: "(string|element|function)"
           }),
           _ = {
               FADE: "fade",
               SHOW: "show"
           },
           g = {
               TITLE: ".popover-title",
               CONTENT: ".popover-content"
           },
           p = {
               HIDE: "hide" + c,
               HIDDEN: "hidden" + c,
               SHOW: "show" + c,
               SHOWN: "shown" + c,
               INSERTED: "inserted" + c,
               CLICK: "click" + c,
               FOCUSIN: "focusin" + c,
               FOCUSOUT: "focusout" + c,
               MOUSEENTER: "mouseenter" + c,
               MOUSELEAVE: "mouseleave" + c
           },
           m = function(s) {
               function u() {
                   return n(this, u), t(this, s.apply(this, arguments))
               }
               return e(u, s), u.prototype.isWithContent = function() {
                   return this.getTitle() || this._getContent()
               }, u.prototype.getTipElement = function() {
                   return this.tip = this.tip || r(this.config.template)[0]
               }, u.prototype.setContent = function() {
                   var t = r(this.getTipElement());
                   this.setElementContent(t.find(g.TITLE), this.getTitle()), this.setElementContent(t.find(g.CONTENT), this._getContent()), t.removeClass(_.FADE + " " + _.SHOW), this.cleanupTether()
               }, u.prototype._getContent = function() {
                   return this.element.getAttribute("data-content") || ("function" == typeof this.config.content ? this.config.content.call(this.element) : this.config.content)
               }, u._jQueryInterface = function(t) {
                   return this.each(function() {
                       var e = r(this).data(h),
                           n = "object" === ("undefined" == typeof t ? "undefined" : i(t)) ? t : null;
                       if ((e || !/destroy|hide/.test(t)) && (e || (e = new u(this, n), r(this).data(h, e)), "string" == typeof t)) {
                           if (void 0 === e[t]) throw new Error('No method named "' + t + '"');
                           e[t]()
                       }
                   })
               }, o(u, null, [{
                   key: "VERSION",
                   get: function() {
                       return l
                   }
               }, {
                   key: "Default",
                   get: function() {
                       return d
                   }
               }, {
                   key: "NAME",
                   get: function() {
                       return a
                   }
               }, {
                   key: "DATA_KEY",
                   get: function() {
                       return h
                   }
               }, {
                   key: "Event",
                   get: function() {
                       return p
                   }
               }, {
                   key: "EVENT_KEY",
                   get: function() {
                       return c
                   }
               }, {
                   key: "DefaultType",
                   get: function() {
                       return f
                   }
               }]), u
           }(s);
       return r.fn[a] = m._jQueryInterface, r.fn[a].Constructor = m, r.fn[a].noConflict = function() {
           return r.fn[a] = u, m._jQueryInterface
       }, m
   })(jQuery)
}();
(function(jQuery) {
   $.fn.breakingNews = function(params) {
       var defaults = {
           width: "100%",
           modul: "breakingnews",
           color: "default",
           border: false,
           effect: "fade",
           fontstyle: "normal",
           autoplay: false,
           timer: 4e3,
           feed: false,
           feedlabels: false,
           feedcount: 5
       };
       var feeds = [];
       var labels = [];
       var params = $.extend(defaults, params);
       return this.each(function() {
           params.modul = $("#" + $(this).attr("id"));
           var timername = params.modul;
           var active = 0;
           var previous = 0;
           var count = params.modul.find("ul li").length;
           var changestate = true;
           if (params.feed != false) {
               getRSS()
           } else {
               params.modul.find("ul li").eq(active).fadeIn()
           }
           resizeEvent();
           if (params.autoplay) {
               timername = setInterval(function() {
                   autoPlay()
               }, params.timer);
               $(params.modul).on("mouseenter", function() {
                   clearInterval(timername)
               });
               $(params.modul).on("mouseleave", function() {
                   timername = setInterval(function() {
                       autoPlay()
                   }, params.timer)
               })
           } else {
               clearInterval(timername)
           }
           if (!params.border) {
               params.modul.addClass("bn-bordernone")
           }
           if (params.fontstyle == "italic") params.modul.addClass("bn-italic");
           if (params.fontstyle == "bold") params.modul.addClass("bn-bold");
           if (params.fontstyle == "bold-italic") params.modul.addClass("bn-bold bn-italic");
           params.modul.addClass("bn-" + params.color);
           $(window).on("resize", function() {
               resizeEvent()
           });
           params.modul.find(".bn-navi span").on("click", function() {
               if (changestate) {
                   changestate = false;
                   if ($(this).index() == 0) {
                       active--;
                       if (active < 0) active = count - 1;
                       changeNews()
                   } else {
                       active++;
                       if (active == count) active = 0;
                       changeNews()
                   }
               }
           });

           function resizeEvent() {
               if (params.modul.width() < 480) {
                   params.modul.find(".bn-title h2").css({
                       display: "none"
                   });
                   params.modul.find(".bn-title").css({
                       width: 10
                   });
                   params.modul.find("ul").css({
                       left: 30
                   })
               } else {
                   params.modul.find(".bn-title h2").css({
                       display: "inline-block"
                   });
                   params.modul.find(".bn-title").css({
                       width: "auto"
                   });
                   params.modul.find("ul").css({
                       left: $(params.modul).find(".bn-title").width() + 30
                   })
               }
           }

           function autoPlay() {
               active++;
               if (active == count) active = 0;
               changeNews()
           }

           function changeNews() {
               if (params.effect == "fade") {
                   params.modul.find("ul li").css({
                       display: "none"
                   });
                   params.modul.find("ul li").eq(active).fadeIn("normal", function() {
                       changestate = true
                   })
               } else if (params.effect == "slide-h") {
                   params.modul.find("ul li").eq(previous).animate({
                       width: 0
                   }, function() {
                       $(this).css({
                           display: "none",
                           width: "100%"
                       });
                       params.modul.find("ul li").eq(active).css({
                           width: 0,
                           display: "block"
                       });
                       params.modul.find("ul li").eq(active).animate({
                           width: "100%"
                       }, function() {
                           changestate = true;
                           previous = active
                       })
                   })
               } else if (params.effect == "slide-v") {
                   if (previous <= active) {
                       params.modul.find("ul li").eq(previous).animate({
                           top: -60
                       });
                       params.modul.find("ul li").eq(active).css({
                           top: 60,
                           display: "block"
                       });
                       params.modul.find("ul li").eq(active).animate({
                           top: 0
                       }, function() {
                           previous = active;
                           changestate = true
                       })
                   } else {
                       params.modul.find("ul li").eq(previous).animate({
                           top: 60
                       });
                       params.modul.find("ul li").eq(active).css({
                           top: -60,
                           display: "block"
                       });
                       params.modul.find("ul li").eq(active).animate({
                           top: 0
                       }, function() {
                           previous = active;
                           changestate = true
                       })
                   }
               }
           }

           function getRSSx(a, b, c) {
               c = new XMLHttpRequest;
               c.open("GET", a);
               c.onload = b;
               c.send()
           }

           function yql(a, b) {
               return "http://query.yahooapis.com/v1/public/yql?q=" + encodeURIComponent("select * from " + b + ' where url="' + a + '" limit ' + params.feedcount) + "&format=json"
           }

           function getRSS() {
               feeds = params.feed.split(",");
               labels = params.feedlabels.split(",");
               count = 0;
               params.modul.find("ul").html("");
               xx = 0;
               for (k = 0; k < feeds.length; k++) {
                   getRSSx(yql(feeds[k].trim(), "rss"), function() {
                       var resultx = JSON.parse(this.response);
                       resultx = resultx.query.results.item;
                       $(resultx).each(function(index, element) {
                           count++;
                           dataLink = $("<a>").prop("href", resultx[index].link).prop("hostname");
                           params.modul.find("ul").append('<li><a target="_blank" href="' + resultx[index].link + '"><span>' + dataLink + "</span> - " + resultx[index].title + "</a></li>");
                           if (xx == 0) params.modul.find("ul li").eq(0).fadeIn();
                           xx++
                       })
                   })
               }
           }
       })
   }
})(jQuery);
! function(t) {
   var e = {},
       s = {
           mode: "horizontal",
           slideSelector: "",
           infiniteLoop: !0,
           hideControlOnEnd: !1,
           speed: 500,
           easing: null,
           slideMargin: 0,
           startSlide: 0,
           randomStart: !1,
           captions: !1,
           ticker: !1,
           tickerHover: !1,
           adaptiveHeight: !1,
           adaptiveHeightSpeed: 500,
           video: !1,
           useCSS: !0,
           preloadImages: "visible",
           responsive: !0,
           slideZIndex: 50,
           touchEnabled: !0,
           swipeThreshold: 50,
           oneToOneTouch: !0,
           preventDefaultSwipeX: !0,
           preventDefaultSwipeY: !1,
           pager: !0,
           pagerType: "full",
           pagerShortSeparator: " / ",
           pagerSelector: null,
           buildPager: null,
           pagerCustom: null,
           controls: !0,
           nextText: "Next",
           prevText: "Prev",
           nextSelector: null,
           prevSelector: null,
           autoControls: !1,
           startText: "Start",
           stopText: "Stop",
           autoControlsCombine: !1,
           autoControlsSelector: null,
           auto: !1,
           pause: 4e3,
           autoStart: !0,
           autoDirection: "next",
           autoHover: !1,
           autoDelay: 0,
           minSlides: 1,
           maxSlides: 1,
           moveSlides: 0,
           slideWidth: 0,
           onSliderLoad: function() {},
           onSlideBefore: function() {},
           onSlideAfter: function() {},
           onSlideNext: function() {},
           onSlidePrev: function() {},
           onSliderResize: function() {}
       };
   t.fn.bxSlider = function(n) {
       if (0 == this.length) return this;
       if (this.length > 1) return this.each(function() {
           t(this).bxSlider(n)
       }), this;
       var o = {},
           r = this;
       e.el = this;
       var a = t(window).width(),
           l = t(window).height(),
           d = function() {
               o.settings = t.extend({}, s, n), o.settings.slideWidth = parseInt(o.settings.slideWidth), o.children = r.children(o.settings.slideSelector), o.children.length < o.settings.minSlides && (o.settings.minSlides = o.children.length), o.children.length < o.settings.maxSlides && (o.settings.maxSlides = o.children.length), o.settings.randomStart && (o.settings.startSlide = Math.floor(Math.random() * o.children.length)), o.active = {
                   index: o.settings.startSlide
               }, o.carousel = o.settings.minSlides > 1 || o.settings.maxSlides > 1, o.carousel && (o.settings.preloadImages = "all"), o.minThreshold = o.settings.minSlides * o.settings.slideWidth + (o.settings.minSlides - 1) * o.settings.slideMargin, o.maxThreshold = o.settings.maxSlides * o.settings.slideWidth + (o.settings.maxSlides - 1) * o.settings.slideMargin, o.working = !1, o.controls = {}, o.interval = null, o.animProp = "vertical" == o.settings.mode ? "top" : "left", o.usingCSS = o.settings.useCSS && "fade" != o.settings.mode && function() {
                   var t = document.createElement("div"),
                       e = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                   for (var i in e)
                       if (void 0 !== t.style[e[i]]) return o.cssPrefix = e[i].replace("Perspective", "").toLowerCase(), o.animProp = "-" + o.cssPrefix + "-transform", !0;
                   return !1
               }(), "vertical" == o.settings.mode && (o.settings.maxSlides = o.settings.minSlides), r.data("origStyle", r.attr("style")), r.children(o.settings.slideSelector).each(function() {
                   t(this).data("origStyle", t(this).attr("style"))
               }), c()
           },
           c = function() {
               r.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'), o.viewport = r.parent(), o.loader = t('<div class="bx-loading" />'), o.viewport.prepend(o.loader), r.css({
                   width: "horizontal" == o.settings.mode ? 100 * o.children.length + 215 + "%" : "auto",
                   position: "relative"
               }), o.usingCSS && o.settings.easing ? r.css("-" + o.cssPrefix + "-transition-timing-function", o.settings.easing) : o.settings.easing || (o.settings.easing = "swing"), f(), o.viewport.css({
                   width: "100%",
                   overflow: "hidden",
                   position: "relative"
               }), o.viewport.parent().css({
                   maxWidth: p()
               }), o.settings.pager || o.viewport.parent().css({
                   margin: "0 auto 0px"
               }), o.children.css({
                   float: "horizontal" == o.settings.mode ? "left" : "none",
                   listStyle: "none",
                   position: "relative"
               }), o.children.css("width", u()), "horizontal" == o.settings.mode && o.settings.slideMargin > 0 && o.children.css("marginRight", o.settings.slideMargin), "vertical" == o.settings.mode && o.settings.slideMargin > 0 && o.children.css("marginBottom", o.settings.slideMargin), "fade" == o.settings.mode && (o.children.css({
                   position: "absolute",
                   zIndex: 0,
                   display: "none"
               }), o.children.eq(o.settings.startSlide).css({
                   zIndex: o.settings.slideZIndex,
                   display: "block"
               })), o.controls.el = t('<div class="bx-controls" />'), o.settings.captions && P(), o.active.last = o.settings.startSlide == x() - 1, o.settings.video && r.fitVids();
               var e = o.children.eq(o.settings.startSlide);
               "all" == o.settings.preloadImages && (e = o.children), o.settings.ticker ? o.settings.pager = !1 : (o.settings.pager && T(), o.settings.controls && C(), o.settings.auto && o.settings.autoControls && E(), (o.settings.controls || o.settings.autoControls || o.settings.pager) && o.viewport.after(o.controls.el)), g(e, h)
           },
           g = function(e, i) {
               var s = e.find("img, iframe").length;
               if (0 == s) return i(), void 0;
               var n = 0;
               e.find("img, iframe").each(function() {
                   t(this).one("load", function() {
                       ++n == s && i()
                   }).each(function() {
                       this.complete && t(this).load()
                   })
               })
           },
           h = function() {
               if (o.settings.infiniteLoop && "fade" != o.settings.mode && !o.settings.ticker) {
                   var e = "vertical" == o.settings.mode ? o.settings.minSlides : o.settings.maxSlides,
                       i = o.children.slice(0, e).clone().addClass("bx-clone"),
                       s = o.children.slice(-e).clone().addClass("bx-clone");
                   r.append(i).prepend(s)
               }
               o.loader.remove(), S(), "vertical" == o.settings.mode && (o.settings.adaptiveHeight = !0), o.viewport.height(v()), r.redrawSlider(), o.settings.onSliderLoad(o.active.index), o.initialized = !0, o.settings.responsive && t(window).bind("resize", Z), o.settings.auto && o.settings.autoStart && H(), o.settings.ticker && L(), o.settings.pager && q(o.settings.startSlide), o.settings.controls && W(), o.settings.touchEnabled && !o.settings.ticker && O()
           },
           v = function() {
               var e = 0,
                   s = t();
               if ("vertical" == o.settings.mode || o.settings.adaptiveHeight)
                   if (o.carousel) {
                       var n = 1 == o.settings.moveSlides ? o.active.index : o.active.index * m();
                       for (s = o.children.eq(n), i = 1; i <= o.settings.maxSlides - 1; i++) s = n + i >= o.children.length ? s.add(o.children.eq(i - 1)) : s.add(o.children.eq(n + i))
                   } else s = o.children.eq(o.active.index);
               else s = o.children;
               return "vertical" == o.settings.mode ? (s.each(function() {
                   e += t(this).outerHeight()
               }), o.settings.slideMargin > 0 && (e += o.settings.slideMargin * (o.settings.minSlides - 1))) : e = Math.max.apply(Math, s.map(function() {
                   return t(this).outerHeight(!1)
               }).get()), e
           },
           p = function() {
               var t = "100%";
               return o.settings.slideWidth > 0 && (t = "horizontal" == o.settings.mode ? o.settings.maxSlides * o.settings.slideWidth + (o.settings.maxSlides - 1) * o.settings.slideMargin : o.settings.slideWidth), t
           },
           u = function() {
               var t = o.settings.slideWidth,
                   e = o.viewport.width();
               return 0 == o.settings.slideWidth || o.settings.slideWidth > e && !o.carousel || "vertical" == o.settings.mode ? t = e : o.settings.maxSlides > 1 && "horizontal" == o.settings.mode && (e > o.maxThreshold || e < o.minThreshold && (t = (e - o.settings.slideMargin * (o.settings.minSlides - 1)) / o.settings.minSlides)), t
           },
           f = function() {
               var t = 1;
               if ("horizontal" == o.settings.mode && o.settings.slideWidth > 0)
                   if (o.viewport.width() < o.minThreshold) t = o.settings.minSlides;
                   else if (o.viewport.width() > o.maxThreshold) t = o.settings.maxSlides;
               else {
                   var e = o.children.first().width();
                   t = Math.floor(o.viewport.width() / e)
               } else "vertical" == o.settings.mode && (t = o.settings.minSlides);
               return t
           },
           x = function() {
               var t = 0;
               if (o.settings.moveSlides > 0)
                   if (o.settings.infiniteLoop) t = o.children.length / m();
                   else
                       for (var e = 0, i = 0; e < o.children.length;) ++t, e = i + f(), i += o.settings.moveSlides <= f() ? o.settings.moveSlides : f();
               else t = Math.ceil(o.children.length / f());
               return t
           },
           m = function() {
               return o.settings.moveSlides > 0 && o.settings.moveSlides <= f() ? o.settings.moveSlides : f()
           },
           S = function() {
               if (o.children.length > o.settings.maxSlides && o.active.last && !o.settings.infiniteLoop) {
                   if ("horizontal" == o.settings.mode) {
                       var t = o.children.last(),
                           e = t.position();
                       b(-(e.left - (o.viewport.width() - t.width())), "reset", 0)
                   } else if ("vertical" == o.settings.mode) {
                       var i = o.children.length - o.settings.minSlides,
                           e = o.children.eq(i).position();
                       b(-e.top, "reset", 0)
                   }
               } else {
                   var e = o.children.eq(o.active.index * m()).position();
                   o.active.index == x() - 1 && (o.active.last = !0), void 0 != e && ("horizontal" == o.settings.mode ? b(-e.left, "reset", 0) : "vertical" == o.settings.mode && b(-e.top, "reset", 0))
               }
           },
           b = function(t, e, i, s) {
               if (o.usingCSS) {
                   var n = "vertical" == o.settings.mode ? "translate3d(0, " + t + "px, 0)" : "translate3d(" + t + "px, 0, 0)";
                   r.css("-" + o.cssPrefix + "-transition-duration", i / 1e3 + "s"), "slide" == e ? (r.css(o.animProp, n), r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                       r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), D()
                   })) : "reset" == e ? r.css(o.animProp, n) : "ticker" == e && (r.css("-" + o.cssPrefix + "-transition-timing-function", "linear"), r.css(o.animProp, n), r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                       r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), b(s.resetValue, "reset", 0), N()
                   }))
               } else {
                   var a = {};
                   a[o.animProp] = t, "slide" == e ? r.animate(a, i, o.settings.easing, function() {
                       D()
                   }) : "reset" == e ? r.css(o.animProp, t) : "ticker" == e && r.animate(a, speed, "linear", function() {
                       b(s.resetValue, "reset", 0), N()
                   })
               }
           },
           w = function() {
               for (var e = "", i = x(), s = 0; i > s; s++) {
                   var n = "";
                   o.settings.buildPager && t.isFunction(o.settings.buildPager) ? (n = o.settings.buildPager(s), o.pagerEl.addClass("bx-custom-pager")) : (n = s + 1, o.pagerEl.addClass("bx-default-pager")), e += '<div class="bx-pager-item"><a href="" data-slide-index="' + s + '" class="bx-pager-link">' + n + "</a></div>"
               }
               o.pagerEl.html(e)
           },
           T = function() {
               o.settings.pagerCustom ? o.pagerEl = t(o.settings.pagerCustom) : (o.pagerEl = t('<div class="bx-pager" />'), o.settings.pagerSelector ? t(o.settings.pagerSelector).html(o.pagerEl) : o.controls.el.addClass("bx-has-pager").append(o.pagerEl), w()), o.pagerEl.on("click", "a", I)
           },
           C = function() {
               o.controls.next = t('<a class="bx-next" href="">' + o.settings.nextText + "</a>"), o.controls.prev = t('<a class="bx-prev" href="">' + o.settings.prevText + "</a>"), o.controls.next.bind("click", y), o.controls.prev.bind("click", z), o.settings.nextSelector && t(o.settings.nextSelector).append(o.controls.next), o.settings.prevSelector && t(o.settings.prevSelector).append(o.controls.prev), o.settings.nextSelector || o.settings.prevSelector || (o.controls.directionEl = t('<div class="bx-controls-direction" />'), o.controls.directionEl.append(o.controls.prev).append(o.controls.next), o.controls.el.addClass("bx-has-controls-direction").append(o.controls.directionEl))
           },
           E = function() {
               o.controls.start = t('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + o.settings.startText + "</a></div>"), o.controls.stop = t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + o.settings.stopText + "</a></div>"), o.controls.autoEl = t('<div class="bx-controls-auto" />'), o.controls.autoEl.on("click", ".bx-start", k), o.controls.autoEl.on("click", ".bx-stop", M), o.settings.autoControlsCombine ? o.controls.autoEl.append(o.controls.start) : o.controls.autoEl.append(o.controls.start).append(o.controls.stop), o.settings.autoControlsSelector ? t(o.settings.autoControlsSelector).html(o.controls.autoEl) : o.controls.el.addClass("bx-has-controls-auto").append(o.controls.autoEl), A(o.settings.autoStart ? "stop" : "start")
           },
           P = function() {
               o.children.each(function() {
                   var e = t(this).find("img:first").attr("title");
                   void 0 != e && ("" + e).length && t(this).append('<div class="bx-caption"><span>' + e + "</span></div>")
               })
           },
           y = function(t) {
               o.settings.auto && r.stopAuto(), r.goToNextSlide(), t.preventDefault()
           },
           z = function(t) {
               o.settings.auto && r.stopAuto(), r.goToPrevSlide(), t.preventDefault()
           },
           k = function(t) {
               r.startAuto(), t.preventDefault()
           },
           M = function(t) {
               r.stopAuto(), t.preventDefault()
           },
           I = function(e) {
               o.settings.auto && r.stopAuto();
               var i = t(e.currentTarget),
                   s = parseInt(i.attr("data-slide-index"));
               s != o.active.index && r.goToSlide(s), e.preventDefault()
           },
           q = function(e) {
               var i = o.children.length;
               return "short" == o.settings.pagerType ? (o.settings.maxSlides > 1 && (i = Math.ceil(o.children.length / o.settings.maxSlides)), o.pagerEl.html(e + 1 + o.settings.pagerShortSeparator + i), void 0) : (o.pagerEl.find("a").removeClass("active"), o.pagerEl.each(function(i, s) {
                   t(s).find("a").eq(e).addClass("active")
               }), void 0)
           },
           D = function() {
               if (o.settings.infiniteLoop) {
                   var t = "";
                   0 == o.active.index ? t = o.children.eq(0).position() : o.active.index == x() - 1 && o.carousel ? t = o.children.eq((x() - 1) * m()).position() : o.active.index == o.children.length - 1 && (t = o.children.eq(o.children.length - 1).position()), t && ("horizontal" == o.settings.mode ? b(-t.left, "reset", 0) : "vertical" == o.settings.mode && b(-t.top, "reset", 0))
               }
               o.working = !1, o.settings.onSlideAfter(o.children.eq(o.active.index), o.oldIndex, o.active.index)
           },
           A = function(t) {
               o.settings.autoControlsCombine ? o.controls.autoEl.html(o.controls[t]) : (o.controls.autoEl.find("a").removeClass("active"), o.controls.autoEl.find("a:not(.bx-" + t + ")").addClass("active"))
           },
           W = function() {
               1 == x() ? (o.controls.prev.addClass("disabled"), o.controls.next.addClass("disabled")) : !o.settings.infiniteLoop && o.settings.hideControlOnEnd && (0 == o.active.index ? (o.controls.prev.addClass("disabled"), o.controls.next.removeClass("disabled")) : o.active.index == x() - 1 ? (o.controls.next.addClass("disabled"), o.controls.prev.removeClass("disabled")) : (o.controls.prev.removeClass("disabled"), o.controls.next.removeClass("disabled")))
           },
           H = function() {
               o.settings.autoDelay > 0 ? setTimeout(r.startAuto, o.settings.autoDelay) : r.startAuto(), o.settings.autoHover && r.hover(function() {
                   o.interval && (r.stopAuto(!0), o.autoPaused = !0)
               }, function() {
                   o.autoPaused && (r.startAuto(!0), o.autoPaused = null)
               })
           },
           L = function() {
               var e = 0;
               if ("next" == o.settings.autoDirection) r.append(o.children.clone().addClass("bx-clone"));
               else {
                   r.prepend(o.children.clone().addClass("bx-clone"));
                   var i = o.children.first().position();
                   e = "horizontal" == o.settings.mode ? -i.left : -i.top
               }
               b(e, "reset", 0), o.settings.pager = !1, o.settings.controls = !1, o.settings.autoControls = !1, o.settings.tickerHover && !o.usingCSS && o.viewport.hover(function() {
                   r.stop()
               }, function() {
                   var e = 0;
                   o.children.each(function() {
                       e += "horizontal" == o.settings.mode ? t(this).outerWidth(!0) : t(this).outerHeight(!0)
                   });
                   var i = o.settings.speed / e,
                       s = "horizontal" == o.settings.mode ? "left" : "top",
                       n = i * (e - Math.abs(parseInt(r.css(s))));
                   N(n)
               }), N()
           },
           N = function(t) {
               speed = t ? t : o.settings.speed;
               var e = {
                       left: 0,
                       top: 0
                   },
                   i = {
                       left: 0,
                       top: 0
                   };
               "next" == o.settings.autoDirection ? e = r.find(".bx-clone").first().position() : i = o.children.first().position();
               var s = "horizontal" == o.settings.mode ? -e.left : -e.top,
                   n = "horizontal" == o.settings.mode ? -i.left : -i.top,
                   a = {
                       resetValue: n
                   };
               b(s, "ticker", speed, a)
           },
           O = function() {
               o.touch = {
                   start: {
                       x: 0,
                       y: 0
                   },
                   end: {
                       x: 0,
                       y: 0
                   }
               }, o.viewport.bind("touchstart", X)
           },
           X = function(t) {
               if (o.working) t.preventDefault();
               else {
                   o.touch.originalPos = r.position();
                   var e = t.originalEvent;
                   o.touch.start.x = e.changedTouches[0].pageX, o.touch.start.y = e.changedTouches[0].pageY, o.viewport.bind("touchmove", Y), o.viewport.bind("touchend", V)
               }
           },
           Y = function(t) {
               var e = t.originalEvent,
                   i = Math.abs(e.changedTouches[0].pageX - o.touch.start.x),
                   s = Math.abs(e.changedTouches[0].pageY - o.touch.start.y);
               if (3 * i > s && o.settings.preventDefaultSwipeX ? t.preventDefault() : 3 * s > i && o.settings.preventDefaultSwipeY && t.preventDefault(), "fade" != o.settings.mode && o.settings.oneToOneTouch) {
                   var n = 0;
                   if ("horizontal" == o.settings.mode) {
                       var r = e.changedTouches[0].pageX - o.touch.start.x;
                       n = o.touch.originalPos.left + r
                   } else {
                       var r = e.changedTouches[0].pageY - o.touch.start.y;
                       n = o.touch.originalPos.top + r
                   }
                   b(n, "reset", 0)
               }
           },
           V = function(t) {
               o.viewport.unbind("touchmove", Y);
               var e = t.originalEvent,
                   i = 0;
               if (o.touch.end.x = e.changedTouches[0].pageX, o.touch.end.y = e.changedTouches[0].pageY, "fade" == o.settings.mode) {
                   var s = Math.abs(o.touch.start.x - o.touch.end.x);
                   s >= o.settings.swipeThreshold && (o.touch.start.x > o.touch.end.x ? r.goToNextSlide() : r.goToPrevSlide(), r.stopAuto())
               } else {
                   var s = 0;
                   "horizontal" == o.settings.mode ? (s = o.touch.end.x - o.touch.start.x, i = o.touch.originalPos.left) : (s = o.touch.end.y - o.touch.start.y, i = o.touch.originalPos.top), !o.settings.infiniteLoop && (0 == o.active.index && s > 0 || o.active.last && 0 > s) ? b(i, "reset", 200) : Math.abs(s) >= o.settings.swipeThreshold ? (0 > s ? r.goToNextSlide() : r.goToPrevSlide(), r.stopAuto()) : b(i, "reset", 200)
               }
               o.viewport.unbind("touchend", V)
           },
           Z = function() {
               var e = t(window).width(),
                   i = t(window).height();
               (a != e || l != i) && (a = e, l = i, r.redrawSlider(), o.settings.onSliderResize.call(r, o.active.index))
           };
       return r.goToSlide = function(e, i) {
           if (!o.working && o.active.index != e)
               if (o.working = !0, o.oldIndex = o.active.index, o.active.index = 0 > e ? x() - 1 : e >= x() ? 0 : e, o.settings.onSlideBefore(o.children.eq(o.active.index), o.oldIndex, o.active.index), "next" == i ? o.settings.onSlideNext(o.children.eq(o.active.index), o.oldIndex, o.active.index) : "prev" == i && o.settings.onSlidePrev(o.children.eq(o.active.index), o.oldIndex, o.active.index), o.active.last = o.active.index >= x() - 1, o.settings.pager && q(o.active.index), o.settings.controls && W(), "fade" == o.settings.mode) o.settings.adaptiveHeight && o.viewport.height() != v() && o.viewport.animate({
                   height: v()
               }, o.settings.adaptiveHeightSpeed), o.children.filter(":visible").fadeOut(o.settings.speed).css({
                   zIndex: 0
               }), o.children.eq(o.active.index).css("zIndex", o.settings.slideZIndex + 1).fadeIn(o.settings.speed, function() {
                   t(this).css("zIndex", o.settings.slideZIndex), D()
               });
               else {
                   o.settings.adaptiveHeight && o.viewport.height() != v() && o.viewport.animate({
                       height: v()
                   }, o.settings.adaptiveHeightSpeed);
                   var s = 0,
                       n = {
                           left: 0,
                           top: 0
                       };
                   if (!o.settings.infiniteLoop && o.carousel && o.active.last)
                       if ("horizontal" == o.settings.mode) {
                           var a = o.children.eq(o.children.length - 1);
                           n = a.position(), s = o.viewport.width() - a.outerWidth()
                       } else {
                           var l = o.children.length - o.settings.minSlides;
                           n = o.children.eq(l).position()
                       }
                   else if (o.carousel && o.active.last && "prev" == i) {
                       var d = 1 == o.settings.moveSlides ? o.settings.maxSlides - m() : (x() - 1) * m() - (o.children.length - o.settings.maxSlides),
                           a = r.children(".bx-clone").eq(d);
                       n = a.position()
                   } else if ("next" == i && 0 == o.active.index) n = r.find("> .bx-clone").eq(o.settings.maxSlides).position(), o.active.last = !1;
                   else if (e >= 0) {
                       var c = e * m();
                       n = o.children.eq(c).position()
                   }
                   if ("undefined" != typeof n) {
                       var g = "horizontal" == o.settings.mode ? -(n.left - s) : -n.top;
                       b(g, "slide", o.settings.speed)
                   }
               }
       }, r.goToNextSlide = function() {
           if (o.settings.infiniteLoop || !o.active.last) {
               var t = parseInt(o.active.index) + 1;
               r.goToSlide(t, "next")
           }
       }, r.goToPrevSlide = function() {
           if (o.settings.infiniteLoop || 0 != o.active.index) {
               var t = parseInt(o.active.index) - 1;
               r.goToSlide(t, "prev")
           }
       }, r.startAuto = function(t) {
           o.interval || (o.interval = setInterval(function() {
               "next" == o.settings.autoDirection ? r.goToNextSlide() : r.goToPrevSlide()
           }, o.settings.pause), o.settings.autoControls && 1 != t && A("stop"))
       }, r.stopAuto = function(t) {
           o.interval && (clearInterval(o.interval), o.interval = null, o.settings.autoControls && 1 != t && A("start"))
       }, r.getCurrentSlide = function() {
           return o.active.index
       }, r.getCurrentSlideElement = function() {
           return o.children.eq(o.active.index)
       }, r.getSlideCount = function() {
           return o.children.length
       }, r.redrawSlider = function() {
           o.children.add(r.find(".bx-clone")).outerWidth(u()), o.viewport.css("height", v()), o.settings.ticker || S(), o.active.last && (o.active.index = x() - 1), o.active.index >= x() && (o.active.last = !0), o.settings.pager && !o.settings.pagerCustom && (w(), q(o.active.index))
       }, r.destroySlider = function() {
           o.initialized && (o.initialized = !1, t(".bx-clone", this).remove(), o.children.each(function() {
               void 0 != t(this).data("origStyle") ? t(this).attr("style", t(this).data("origStyle")) : t(this).removeAttr("style")
           }), void 0 != t(this).data("origStyle") ? this.attr("style", t(this).data("origStyle")) : t(this).removeAttr("style"), t(this).unwrap().unwrap(), o.controls.el && o.controls.el.remove(), o.controls.next && o.controls.next.remove(), o.controls.prev && o.controls.prev.remove(), o.pagerEl && o.settings.controls && o.pagerEl.remove(), t(".bx-caption", this).remove(), o.controls.autoEl && o.controls.autoEl.remove(), clearInterval(o.interval), o.settings.responsive && t(window).unbind("resize", Z))
       }, r.reloadSlider = function(t) {
           void 0 != t && (n = t), r.destroySlider(), d()
       }, d(), this
   }
}(jQuery);
! function(a) {
   "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof module && module.exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function(a) {
   a.extend(a.fn, {
       validate: function(b) {
           if (!this.length) return void(b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
           var c = a.data(this[0], "validator");
           return c ? c : (this.attr("novalidate", "novalidate"), c = new a.validator(b, this[0]), a.data(this[0], "validator", c), c.settings.onsubmit && (this.on("click.validate", ":submit", function(b) {
               c.settings.submitHandler && (c.submitButton = b.target), a(this).hasClass("cancel") && (c.cancelSubmit = !0), void 0 !== a(this).attr("formnovalidate") && (c.cancelSubmit = !0)
           }), this.on("submit.validate", function(b) {
               function d() {
                   var d, e;
                   return c.settings.submitHandler ? (c.submitButton && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)), e = c.settings.submitHandler.call(c, c.currentForm, b), c.submitButton && d.remove(), void 0 !== e ? e : !1) : !0
               }
               return c.settings.debug && b.preventDefault(), c.cancelSubmit ? (c.cancelSubmit = !1, d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0, !1) : d() : (c.focusInvalid(), !1)
           })), c)
       },
       valid: function() {
           var b, c, d;
           return a(this[0]).is("form") ? b = this.validate().form() : (d = [], b = !0, c = a(this[0].form).validate(), this.each(function() {
               b = c.element(this) && b, b || (d = d.concat(c.errorList))
           }), c.errorList = d), b
       },
       rules: function(b, c) {
           if (this.length) {
               var d, e, f, g, h, i, j = this[0];
               if (b) switch (d = a.data(j.form, "validator").settings, e = d.rules, f = a.validator.staticRules(j), b) {
                   case "add":
                       a.extend(f, a.validator.normalizeRule(c)), delete f.messages, e[j.name] = f, c.messages && (d.messages[j.name] = a.extend(d.messages[j.name], c.messages));
                       break;
                   case "remove":
                       return c ? (i = {}, a.each(c.split(/\s/), function(b, c) {
                           i[c] = f[c], delete f[c], "required" === c && a(j).removeAttr("aria-required")
                       }), i) : (delete e[j.name], f)
               }
               return g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(j), a.validator.attributeRules(j), a.validator.dataRules(j), a.validator.staticRules(j)), j), g.required && (h = g.required, delete g.required, g = a.extend({
                   required: h
               }, g), a(j).attr("aria-required", "true")), g.remote && (h = g.remote, delete g.remote, g = a.extend(g, {
                   remote: h
               })), g
           }
       }
   }), a.extend(a.expr[":"], {
       blank: function(b) {
           return !a.trim("" + a(b).val())
       },
       filled: function(b) {
           var c = a(b).val();
           return null !== c && !!a.trim("" + c)
       },
       unchecked: function(b) {
           return !a(b).prop("checked")
       }
   }), a.validator = function(b, c) {
       this.settings = a.extend(!0, {}, a.validator.defaults, b), this.currentForm = c, this.init()
   }, a.validator.format = function(b, c) {
       return 1 === arguments.length ? function() {
           var c = a.makeArray(arguments);
           return c.unshift(b), a.validator.format.apply(this, c)
       } : void 0 === c ? b : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)), c.constructor !== Array && (c = [c]), a.each(c, function(a, c) {
           b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function() {
               return c
           })
       }), b)
   }, a.extend(a.validator, {
       defaults: {
           messages: {},
           groups: {},
           rules: {},
           errorClass: "error",
           pendingClass: "pending",
           validClass: "valid",
           errorElement: "label",
           focusCleanup: !1,
           focusInvalid: !0,
           errorContainer: a([]),
           errorLabelContainer: a([]),
           onsubmit: !0,
           ignore: ":hidden",
           ignoreTitle: !1,
           onfocusin: function(a) {
               this.lastActive = a, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(a)))
           },
           onfocusout: function(a) {
               this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a)
           },
           onkeyup: function(b, c) {
               var d = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
               9 === c.which && "" === this.elementValue(b) || -1 !== a.inArray(c.keyCode, d) || (b.name in this.submitted || b.name in this.invalid) && this.element(b)
           },
           onclick: function(a) {
               a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode)
           },
           highlight: function(b, c, d) {
               "radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d)
           },
           unhighlight: function(b, c, d) {
               "radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d)
           }
       },
       setDefaults: function(b) {
           a.extend(a.validator.defaults, b)
       },
       messages: {
           required: "This field is required.",
           remote: "Please fix this field.",
           email: "Please enter a valid email address.",
           url: "Please enter a valid URL.",
           date: "Please enter a valid date.",
           dateISO: "Please enter a valid date ( ISO ).",
           number: "Please enter a valid number.",
           digits: "Please enter only digits.",
           equalTo: "Please enter the same value again.",
           maxlength: a.validator.format("Please enter no more than {0} characters."),
           minlength: a.validator.format("Please enter at least {0} characters."),
           rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
           range: a.validator.format("Please enter a value between {0} and {1}."),
           max: a.validator.format("Please enter a value less than or equal to {0}."),
           min: a.validator.format("Please enter a value greater than or equal to {0}."),
           step: a.validator.format("Please enter a multiple of {0}.")
       },
       autoCreateRanges: !1,
       prototype: {
           init: function() {
               function b(b) {
                   var c = a.data(this.form, "validator"),
                       d = "on" + b.type.replace(/^validate/, ""),
                       e = c.settings;
                   e[d] && !a(this).is(e.ignore) && e[d].call(c, this, b)
               }
               this.labelContainer = a(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm), this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
               var c, d = this.groups = {};
               a.each(this.settings.groups, function(b, c) {
                   "string" == typeof c && (c = c.split(/\s/)), a.each(c, function(a, c) {
                       d[c] = b
                   })
               }), c = this.settings.rules, a.each(c, function(b, d) {
                   c[b] = a.validator.normalizeRule(d)
               }), a(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable]", b).on("click.validate", "select, option, [type='radio'], [type='checkbox']", b), this.settings.invalidHandler && a(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler), a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
           },
           form: function() {
               return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
           },
           checkForm: function() {
               this.prepareForm();
               for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++) this.check(b[a]);
               return this.valid()
           },
           element: function(b) {
               var c, d, e = this.clean(b),
                   f = this.validationTargetFor(e),
                   g = this,
                   h = !0;
               return void 0 === f ? delete this.invalid[e.name] : (this.prepareElement(f), this.currentElements = a(f), d = this.groups[f.name], d && a.each(this.groups, function(a, b) {
                   b === d && a !== f.name && (e = g.validationTargetFor(g.clean(g.findByName(a))), e && e.name in g.invalid && (g.currentElements.push(e), h = h && g.check(e)))
               }), c = this.check(f) !== !1, h = h && c, c ? this.invalid[f.name] = !1 : this.invalid[f.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), a(b).attr("aria-invalid", !c)), h
           },
           showErrors: function(b) {
               if (b) {
                   var c = this;
                   a.extend(this.errorMap, b), this.errorList = a.map(this.errorMap, function(a, b) {
                       return {
                           message: a,
                           element: c.findByName(b)[0]
                       }
                   }), this.successList = a.grep(this.successList, function(a) {
                       return !(a.name in b)
                   })
               }
               this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
           },
           resetForm: function() {
               a.fn.resetForm && a(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
               var b = this.elements().removeData("previousValue").removeAttr("aria-invalid");
               this.resetElements(b)
           },
           resetElements: function(a) {
               var b;
               if (this.settings.unhighlight)
                   for (b = 0; a[b]; b++) this.settings.unhighlight.call(this, a[b], this.settings.errorClass, ""), this.findByName(a[b].name).removeClass(this.settings.validClass);
               else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
           },
           numberOfInvalids: function() {
               return this.objectLength(this.invalid)
           },
           objectLength: function(a) {
               var b, c = 0;
               for (b in a) a[b] && c++;
               return c
           },
           hideErrors: function() {
               this.hideThese(this.toHide)
           },
           hideThese: function(a) {
               a.not(this.containers).text(""), this.addWrapper(a).hide()
           },
           valid: function() {
               return 0 === this.size()
           },
           size: function() {
               return this.errorList.length
           },
           focusInvalid: function() {
               if (this.settings.focusInvalid) try {
                   a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
               } catch (b) {}
           },
           findLastActive: function() {
               var b = this.lastActive;
               return b && 1 === a.grep(this.errorList, function(a) {
                   return a.element.name === b.name
               }).length && b
           },
           elements: function() {
               var b = this,
                   c = {};
               return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
                   var d = this.name || a(this).attr("name");
                   return !d && b.settings.debug && window.console && console.error("%o has no name assigned", this), this.hasAttribute("contenteditable") && (this.form = a(this).closest("form")[0]), d in c || !b.objectLength(a(this).rules()) ? !1 : (c[d] = !0, !0)
               })
           },
           clean: function(b) {
               return a(b)[0]
           },
           errors: function() {
               var b = this.settings.errorClass.split(" ").join(".");
               return a(this.settings.errorElement + "." + b, this.errorContext)
           },
           resetInternals: function() {
               this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = a([]), this.toHide = a([])
           },
           reset: function() {
               this.resetInternals(), this.currentElements = a([])
           },
           prepareForm: function() {
               this.reset(), this.toHide = this.errors().add(this.containers)
           },
           prepareElement: function(a) {
               this.reset(), this.toHide = this.errorsFor(a)
           },
           elementValue: function(b) {
               var c, d, e = a(b),
                   f = b.type;
               return "radio" === f || "checkbox" === f ? this.findByName(b.name).filter(":checked").val() : "number" === f && "undefined" != typeof b.validity ? b.validity.badInput ? "NaN" : e.val() : (c = b.hasAttribute("contenteditable") ? e.text() : e.val(), "file" === f ? "C:\\fakepath\\" === c.substr(0, 12) ? c.substr(12) : (d = c.lastIndexOf("/"), d >= 0 ? c.substr(d + 1) : (d = c.lastIndexOf("\\"), d >= 0 ? c.substr(d + 1) : c)) : "string" == typeof c ? c.replace(/\r/g, "") : c)
           },
           check: function(b) {
               b = this.validationTargetFor(this.clean(b));
               var c, d, e, f = a(b).rules(),
                   g = a.map(f, function(a, b) {
                       return b
                   }).length,
                   h = !1,
                   i = this.elementValue(b);
               if ("function" == typeof f.normalizer) {
                   if (i = f.normalizer.call(b, i), "string" != typeof i) throw new TypeError("The normalizer should return a string value.");
                   delete f.normalizer
               }
               for (d in f) {
                   e = {
                       method: d,
                       parameters: f[d]
                   };
                   try {
                       if (c = a.validator.methods[d].call(this, i, b, e.parameters), "dependency-mismatch" === c && 1 === g) {
                           h = !0;
                           continue
                       }
                       if (h = !1, "pending" === c) return void(this.toHide = this.toHide.not(this.errorsFor(b)));
                       if (!c) return this.formatAndAdd(b, e), !1
                   } catch (j) {
                       throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method.", j), j instanceof TypeError && (j.message += ".  Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method."), j
                   }
               }
               if (!h) return this.objectLength(f) && this.successList.push(b), !0
           },
           customDataMessage: function(b, c) {
               return a(b).data("msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()) || a(b).data("msg")
           },
           customMessage: function(a, b) {
               var c = this.settings.messages[a];
               return c && (c.constructor === String ? c : c[b])
           },
           findDefined: function() {
               for (var a = 0; a < arguments.length; a++)
                   if (void 0 !== arguments[a]) return arguments[a]
           },
           defaultMessage: function(b, c) {
               var d = this.findDefined(this.customMessage(b.name, c.method), this.customDataMessage(b, c.method), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c.method], "<strong>Warning: No message defined for " + b.name + "</strong>"),
                   e = /\$?\{(\d+)\}/g;
               return "function" == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)), d
           },
           formatAndAdd: function(a, b) {
               var c = this.defaultMessage(a, b);
               this.errorList.push({
                   message: c,
                   element: a,
                   method: b.method
               }), this.errorMap[a.name] = c, this.submitted[a.name] = c
           },
           addWrapper: function(a) {
               return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a
           },
           defaultShowErrors: function() {
               var a, b, c;
               for (a = 0; this.errorList[a]; a++) c = this.errorList[a], this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass), this.showLabel(c.element, c.message);
               if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                   for (a = 0; this.successList[a]; a++) this.showLabel(this.successList[a]);
               if (this.settings.unhighlight)
                   for (a = 0, b = this.validElements(); b[a]; a++) this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
               this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
           },
           validElements: function() {
               return this.currentElements.not(this.invalidElements())
           },
           invalidElements: function() {
               return a(this.errorList).map(function() {
                   return this.element
               })
           },
           showLabel: function(b, c) {
               var d, e, f, g, h = this.errorsFor(b),
                   i = this.idOrName(b),
                   j = a(b).attr("aria-describedby");
               h.length ? (h.removeClass(this.settings.validClass).addClass(this.settings.errorClass), h.html(c)) : (h = a("<" + this.settings.errorElement + ">").attr("id", i + "-error").addClass(this.settings.errorClass).html(c || ""), d = h, this.settings.wrapper && (d = h.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(d) : this.settings.errorPlacement ? this.settings.errorPlacement(d, a(b)) : d.insertAfter(b), h.is("label") ? h.attr("for", i) : 0 === h.parents("label[for='" + this.escapeCssMeta(i) + "']").length && (f = h.attr("id"), j ? j.match(new RegExp("\\b" + this.escapeCssMeta(f) + "\\b")) || (j += " " + f) : j = f, a(b).attr("aria-describedby", j), e = this.groups[b.name], e && (g = this, a.each(g.groups, function(b, c) {
                   c === e && a("[name='" + g.escapeCssMeta(b) + "']", g.currentForm).attr("aria-describedby", h.attr("id"))
               })))), !c && this.settings.success && (h.text(""), "string" == typeof this.settings.success ? h.addClass(this.settings.success) : this.settings.success(h, b)), this.toShow = this.toShow.add(h)
           },
           errorsFor: function(b) {
               var c = this.escapeCssMeta(this.idOrName(b)),
                   d = a(b).attr("aria-describedby"),
                   e = "label[for='" + c + "'], label[for='" + c + "'] *";
               return d && (e = e + ", #" + this.escapeCssMeta(d).replace(/\s+/g, ", #")), this.errors().filter(e)
           },
           escapeCssMeta: function(a) {
               return a.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g, "\\$1")
           },
           idOrName: function(a) {
               return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
           },
           validationTargetFor: function(b) {
               return this.checkable(b) && (b = this.findByName(b.name)), a(b).not(this.settings.ignore)[0]
           },
           checkable: function(a) {
               return /radio|checkbox/i.test(a.type)
           },
           findByName: function(b) {
               return a(this.currentForm).find("[name='" + this.escapeCssMeta(b) + "']")
           },
           getLength: function(b, c) {
               switch (c.nodeName.toLowerCase()) {
                   case "select":
                       return a("option:selected", c).length;
                   case "input":
                       if (this.checkable(c)) return this.findByName(c.name).filter(":checked").length
               }
               return b.length
           },
           depend: function(a, b) {
               return this.dependTypes[typeof a] ? this.dependTypes[typeof a](a, b) : !0
           },
           dependTypes: {
               boolean: function(a) {
                   return a
               },
               string: function(b, c) {
                   return !!a(b, c.form).length
               },
               function: function(a, b) {
                   return a(b)
               }
           },
           optional: function(b) {
               var c = this.elementValue(b);
               return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch"
           },
           startRequest: function(b) {
               this.pending[b.name] || (this.pendingRequest++, a(b).addClass(this.settings.pendingClass), this.pending[b.name] = !0)
           },
           stopRequest: function(b, c) {
               this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[b.name], a(b).removeClass(this.settings.pendingClass), c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
           },
           previousValue: function(b, c) {
               return a.data(b, "previousValue") || a.data(b, "previousValue", {
                   old: null,
                   valid: !0,
                   message: this.defaultMessage(b, {
                       method: c
                   })
               })
           },
           destroy: function() {
               this.resetForm(), a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")
           }
       },
       classRuleSettings: {
           required: {
               required: !0
           },
           email: {
               email: !0
           },
           url: {
               url: !0
           },
           date: {
               date: !0
           },
           dateISO: {
               dateISO: !0
           },
           number: {
               number: !0
           },
           digits: {
               digits: !0
           },
           creditcard: {
               creditcard: !0
           }
       },
       addClassRules: function(b, c) {
           b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b)
       },
       classRules: function(b) {
           var c = {},
               d = a(b).attr("class");
           return d && a.each(d.split(" "), function() {
               this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this])
           }), c
       },
       normalizeAttributeRule: function(a, b, c, d) {
           /min|max|step/.test(c) && (null === b || /number|range|text/.test(b)) && (d = Number(d), isNaN(d) && (d = void 0)), d || 0 === d ? a[c] = d : b === c && "range" !== b && (a[c] = !0)
       },
       attributeRules: function(b) {
           var c, d, e = {},
               f = a(b),
               g = b.getAttribute("type");
           for (c in a.validator.methods) "required" === c ? (d = b.getAttribute(c), "" === d && (d = !0), d = !!d) : d = f.attr(c), this.normalizeAttributeRule(e, g, c, d);
           return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength, e
       },
       dataRules: function(b) {
           var c, d, e = {},
               f = a(b),
               g = b.getAttribute("type");
           for (c in a.validator.methods) d = f.data("rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()), this.normalizeAttributeRule(e, g, c, d);
           return e
       },
       staticRules: function(b) {
           var c = {},
               d = a.data(b.form, "validator");
           return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}), c
       },
       normalizeRules: function(b, c) {
           return a.each(b, function(d, e) {
               if (e === !1) return void delete b[d];
               if (e.param || e.depends) {
                   var f = !0;
                   switch (typeof e.depends) {
                       case "string":
                           f = !!a(e.depends, c.form).length;
                           break;
                       case "function":
                           f = e.depends.call(c, c)
                   }
                   f ? b[d] = void 0 !== e.param ? e.param : !0 : (a.data(c.form, "validator").resetElements(a(c)), delete b[d])
               }
           }), a.each(b, function(d, e) {
               b[d] = a.isFunction(e) && "normalizer" !== d ? e(c) : e
           }), a.each(["minlength", "maxlength"], function() {
               b[this] && (b[this] = Number(b[this]))
           }), a.each(["rangelength", "range"], function() {
               var c;
               b[this] && (a.isArray(b[this]) ? b[this] = [Number(b[this][0]), Number(b[this][1])] : "string" == typeof b[this] && (c = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/), b[this] = [Number(c[0]), Number(c[1])]))
           }), a.validator.autoCreateRanges && (null != b.min && null != b.max && (b.range = [b.min, b.max], delete b.min, delete b.max), null != b.minlength && null != b.maxlength && (b.rangelength = [b.minlength, b.maxlength], delete b.minlength, delete b.maxlength)), b
       },
       normalizeRule: function(b) {
           if ("string" == typeof b) {
               var c = {};
               a.each(b.split(/\s/), function() {
                   c[this] = !0
               }), b = c
           }
           return b
       },
       addMethod: function(b, c, d) {
           a.validator.methods[b] = c, a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b], c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b))
       },
       methods: {
           required: function(b, c, d) {
               if (!this.depend(d, c)) return "dependency-mismatch";
               if ("select" === c.nodeName.toLowerCase()) {
                   var e = a(c).val();
                   return e && e.length > 0
               }
               return this.checkable(c) ? this.getLength(b, c) > 0 : b.length > 0
           },
           email: function(a, b) {
               return this.optional(b) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)
           },
           url: function(a, b) {
               return this.optional(b) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(a)
           },
           date: function(a, b) {
               return this.optional(b) || !/Invalid|NaN/.test(new Date(a).toString())
           },
           dateISO: function(a, b) {
               return this.optional(b) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)
           },
           number: function(a, b) {
               return this.optional(b) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
           },
           digits: function(a, b) {
               return this.optional(b) || /^\d+$/.test(a)
           },
           minlength: function(b, c, d) {
               var e = a.isArray(b) ? b.length : this.getLength(b, c);
               return this.optional(c) || e >= d
           },
           maxlength: function(b, c, d) {
               var e = a.isArray(b) ? b.length : this.getLength(b, c);
               return this.optional(c) || d >= e
           },
           rangelength: function(b, c, d) {
               var e = a.isArray(b) ? b.length : this.getLength(b, c);
               return this.optional(c) || e >= d[0] && e <= d[1]
           },
           min: function(a, b, c) {
               return this.optional(b) || a >= c
           },
           max: function(a, b, c) {
               return this.optional(b) || c >= a
           },
           range: function(a, b, c) {
               return this.optional(b) || a >= c[0] && a <= c[1]
           },
           step: function(b, c, d) {
               var e = a(c).attr("type"),
                   f = "Step attribute on input type " + e + " is not supported.",
                   g = ["text", "number", "range"],
                   h = new RegExp("\\b" + e + "\\b"),
                   i = e && !h.test(g.join());
               if (i) throw new Error(f);
               return this.optional(c) || b % d === 0
           },
           equalTo: function(b, c, d) {
               var e = a(d);
               return this.settings.onfocusout && e.not(".validate-equalTo-blur").length && e.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() {
                   a(c).valid()
               }), b === e.val()
           },
           remote: function(b, c, d, e) {
               if (this.optional(c)) return "dependency-mismatch";
               e = "string" == typeof e && e || "remote";
               var f, g, h, i = this.previousValue(c, e);
               return this.settings.messages[c.name] || (this.settings.messages[c.name] = {}), i.originalMessage = i.originalMessage || this.settings.messages[c.name][e], this.settings.messages[c.name][e] = i.message, d = "string" == typeof d && {
                   url: d
               } || d, h = a.param(a.extend({
                   data: b
               }, d.data)), i.old === h ? i.valid : (i.old = h, f = this, this.startRequest(c), g = {}, g[c.name] = b, a.ajax(a.extend(!0, {
                   mode: "abort",
                   port: "validate" + c.name,
                   dataType: "json",
                   data: g,
                   context: f.currentForm,
                   success: function(a) {
                       var d, g, h, j = a === !0 || "true" === a;
                       f.settings.messages[c.name][e] = i.originalMessage, j ? (h = f.formSubmitted, f.resetInternals(), f.toHide = f.errorsFor(c), f.formSubmitted = h, f.successList.push(c), f.invalid[c.name] = !1, f.showErrors()) : (d = {}, g = a || f.defaultMessage(c, {
                           method: e,
                           parameters: b
                       }), d[c.name] = i.message = g, f.invalid[c.name] = !0, f.showErrors(d)), i.valid = j, f.stopRequest(c, j)
                   }
               }, d)), "pending")
           }
       }
   });
   var b, c = {};
   a.ajaxPrefilter ? a.ajaxPrefilter(function(a, b, d) {
       var e = a.port;
       "abort" === a.mode && (c[e] && c[e].abort(), c[e] = d)
   }) : (b = a.ajax, a.ajax = function(d) {
       var e = ("mode" in d ? d : a.ajaxSettings).mode,
           f = ("port" in d ? d : a.ajaxSettings).port;
       return "abort" === e ? (c[f] && c[f].abort(), c[f] = b.apply(this, arguments), c[f]) : b.apply(this, arguments)
   })
});
$(document).ready(function() {
   toggledMenu();
   slideMulti();
   breakingPhone();
   $("#contactForm").validate({
       rules: {
           name: "required",
           phone: {
               required: true,
               number: true,
               minlength: 10,
               maxlength: 11
           },
           subject: "required",
           "content-mail": "required",
           email: {
               required: true,
               email: true
           }
       },
       errorPlacement: function(label, element) {
           label.addClass("c-red");
           label.insertAfter(element)
       }
   })
});

function toggledMenu() {
   $("body").on("click", "#hnav-trigger, #menu-trigger", function(e) {
       e.preventDefault();
       var x = $(this).data("trigger");
       $(x).toggleClass("toggled");
       if (x == "#hnav") {
           $elem = "#hnav";
           $elem2 = "#hnav-trigger";
           if (!$("#menu").hasClass("toggled")) {
               $("body").toggleClass("sidebar-toggled")
           } else {
               $("#menu").removeClass("toggled")
           }
       }
       if (x == "#menu") {
           $elem = "#menu";
           $elem2 = "#menu-trigger";
           $("#menu-trigger").removeClass("open");
           if (!$("#hnav").hasClass("toggled")) {
               $("body").toggleClass("sidebar-toggled")
           } else {
               $("#hnav").removeClass("toggled")
           }
       }
       if ($("body").hasClass("sidebar-toggled")) {
           $(document).on("click", function(e) {
               if ($(e.target).closest($elem).length === 0 && $(e.target).closest($elem2).length === 0) {
                   setTimeout(function() {
                       $($elem).removeClass("toggled");
                       $("body").removeClass("sidebar-toggled")
                   })
               }
           })
       }
   })
}

function slideMulti() {
   $(".multi-slide").bxSlider({
       slideWidth: $(".multi-slide .slide").width(),
       minSlides: 1,
       maxSlides: 3,
       moveSlides: 1,
       slideMargin: 0,
       pager: false,
       nextText: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
       prevText: '<i class="fa fa-angle-left" aria-hidden="true"></i>'
   });
   $(".multi-slide-2").bxSlider({
       slideWidth: $(".multi-slide-2 .slide").width(),
       minSlides: 1,
       maxSlides: 4,
       moveSlides: 1,
       slideMargin: 0,
       pager: false,
       prevText: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
       nextText: '<i class="fa fa-angle-right" aria-hidden="true"></i>'
   })
}

function breakingPhone() {
   $("#phoneList").breakingNews({
       effect: "slide-v",
       autoplay: true,
       timer: 3e3
   })
}