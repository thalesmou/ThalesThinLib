var AcuantConfig = function () {
    "use strict";
    return {
        acuantVersion: "11.9.3"
    }
}
();
let config = {};
"undefined" != typeof acuantConfig && 0 !== Object.keys(acuantConfig).length && acuantConfig.constructor === Object && (config = acuantConfig), document.addEventListener("DOMContentLoaded", (function () {
        void 0 === AcuantJavascriptWebSdk && loadAcuantSdk(),
        document.removeEventListener("DOMContentLoaded", this)
    }));
var AcuantJavascriptWebSdk = void 0;
function loadAcuantSdk() {
    AcuantJavascriptWebSdk = function (e) {
        let t = {
            ACUANT_IMAGE_WORKER: "AcuantImageWorker",
            ACUANT_METRICS_WORKER: "AcuantMetricsWorker",
            SEQUENCE_BREAK_CODE: "sequence-break",
            START_FAIL_CODE: "start-fail",
            REPEAT_FAIL_CODE: "repeat-fail",
            HEIC_NOT_SUPPORTED_CODE: "heic-not-supported",
            BARCODE_READER_ID: "acuant-barcode-reader",
            singleWorkerModel: !1,
            startInitializer: function (n, a = 0) {
                if (!n)
                    return void M("startInitializer did not have a user callback set");
                if (y)
                    return;
                L = 1 == a,
                T(i, n);
                let r = null;
                e && e.cdnPath && e.cdnPath.initializerUrl ? r = e.cdnPath.initializerUrl : e.path && (r = e.path),
                y = new Worker(O(r, "AcuantInitializerWorker.min.js", a)),
                y.onmessage = w,
                function () {
                    if (document.getElementById(t.BARCODE_READER_ID))
                        return;
                    const e = document.createElement("div");
                    e.id = t.BARCODE_READER_ID,
                    e.style.display = "none",
                    document.body.appendChild(e)
                }
                ()
            },
            endInitializer: function () {
                y && (y.terminate(), y.onmessage = null, g = !1, y = null)
            },
            startImageWorker: function (e) {
                e ? S ? e() : (T(a, e), I(L ? 1 : 0)) : M("startImageWorker did not have a user callback set")
            },
            startMetricsWorker: function (e) {
                e ? R ? e() : (T(r, e), b(L ? 1 : 0)) : M("startMetricsWorker did not have a user callback set")
            },
            endImageWorker: function () {
                S.terminate(),
                S.onmessage = null,
                P = !1,
                S = null
            },
            endMetricsWorker: function () {
                R.terminate(),
                R.onmessage = null,
                C = !1,
                R = null
            },
            start: function (e, t = !1) {
                if (!e)
                    return void M("start did not have a user callback set");
                const i = L ? 1 : 0;
                this.singleWorkerModel = t,
                T(n, e),
                this.singleWorkerModel ? S || I(i) : (S || I(i), R || b(i))
            },
            end: function () {
                S && this.endImageWorker(),
                R && this.endMetricsWorker()
            },
            startWorkers: function (e, t = [this.ACUANT_IMAGE_WORKER, this.ACUANT_METRICS_WORKER], i = 0) {
                e ? (T(n, e), t.includes(this.ACUANT_IMAGE_WORKER) && !S && I(i), t.includes(this.ACUANT_METRICS_WORKER) && !R && b(i)) : M("startWorkers did not have a user callback set")
            },
            endWorkers: function (e = [this.ACUANT_IMAGE_WORKER, this.ACUANT_METRICS_WORKER]) {
                e.includes(this.ACUANT_IMAGE_WORKER) && S && (S.terminate(), S.onmessage = null, P = !1, S = null),
                e.includes(this.ACUANT_METRICS_WORKER) && R && (R.terminate(), R.onmessage = null, C = !1, R = null)
            },
            initialize: function (e, t, i, n = 0) {
                i ? (T(o, i), y ? B(y, "initialize", {
                        creds: e,
                        endpoint: t
                    }) : this.startInitializer((() => {
                            B(y, "initialize", {
                                creds: e,
                                endpoint: t
                            })
                        }), n)) : M("initialize did not have a user callback set")
            },
            initializeWithToken: function (e, t, i, n = 0) {
                i ? (T(o, i), y ? B(y, "initializeWithToken", {
                        token: e,
                        endpoint: t
                    }) : this.startInitializer((() => {
                            B(y, "initializeWithToken", {
                                token: e,
                                endpoint: t
                            })
                        }), n)) : M("initializeWithToken did not have a user callback set")
            },
            crop: function (e, t, i, n) {
                h ? n ? P && null != e ? (T(l, n), B(S, "crop", {
                        imgData: e.data,
                        width: t,
                        height: i
                    })) : n.onFail() : M("crop did not have a user callback set") : M("SDK was not initialized")
            },
            detect: function (e, t, i, n) {
                h ? n ? P && null != e ? (T(s, n), B(S, "detect", {
                        imgData: e.data,
                        width: t,
                        height: i
                    })) : n.onFail() : M("detect did not have a user callback set") : M("SDK was not initialized")
            },
            metrics: function (e, t, i, n) {
                h ? n ? C && null != e ? (T(m, n), B(R, "metrics", {
                        imgData: e.data,
                        width: t,
                        height: i
                    })) : n.onFail() : M("metrics did not have a user callback set") : M("SDK was not initialized")
            },
            moire: function (e, t, i, n) {
                h ? n ? C && null != e ? (T(c, n), B(R, "moire", {
                        imgData: e.data,
                        width: t,
                        height: i
                    })) : n.onFail() : M("moire did not have a user callback set") : M("SDK was not initialized")
            },
            sign: function (e, t) {
                h ? t ? P && e ? (T(p, t), B(S, "sign", {
                        imgData: e
                    })) : t.onFail() : M("sign did not have a user callback set") : M("SDK was not initialized")
            },
            verify: function (e, t) {
                h ? t ? P && e ? (T(u, t), B(S, "verify", {
                        imgData: e
                    })) : t.onFail() : M("verify did not have a user callback set") : M("SDK was not initialized")
            },
            getCvmlVersion: function (e) {
                h ? e ? P ? (T(d, e), B(S, d)) : e.onFail() : M("verify did not have a user callback set") : M("SDK was not initialized")
            },
            addMetadata: function (e, {
                make: t = navigator.platform,
                model: i = navigator.userAgent,
                software: n = "Acuant JavascriptWeb SDK " + AcuantConfig.acuantVersion,
                imageDescription: a = null,
                dateTimeOriginal: r,
                userComment: o = "=".repeat(100)
            }) {
                if (!h)
                    return void M("SDK was not initialized");
                let l = {},
                s = {};
                l[piexif.ImageIFD.Make] = t,
                l[piexif.ImageIFD.Model] = i,
                l[piexif.ImageIFD.Software] = n,
                a && (l[piexif.ImageIFD.ImageDescription] = a),
                s[piexif.ExifIFD.DateTimeOriginal] = r,
                s[piexif.ExifIFD.UserComment] = o;
                let m = {
                    "0th": l,
                    Exif: s
                },
                c = piexif.dump(m);
                return piexif.insert(c, e)
            },
            setUnexpectedErrorCallback: function (e) {
                T(f, e)
            }
        };
        const i = "initStart",
        n = "workersStart",
        a = "imageWorkerStart",
        r = "metricsWorkerStart",
        o = "init",
        l = "crop",
        s = "detect",
        m = "metrics",
        c = "moire",
        p = "sign",
        u = "verify",
        d = "getCvmlVersion",
        f = "unexpectedError";
        let h = !1,
        y = null,
        g = !1,
        S = null,
        P = !1,
        R = null,
        C = !1,
        A = 0,
        k = {},
        D = {},
        L = !1;
        function I(t = 0) {
            let i = null;
            e && e.cdnPath && e.cdnPath.imageUrl ? i = e.cdnPath.imageUrl : e.path && (i = e.path),
            A++,
            S = new Worker(O(i, "AcuantImageWorker.min.js", t)),
            S.onmessage = E,
            S.onerror = function () {
                M("imageWorker has failed")
            }
        }
        function b(t = 0) {
            let i = null;
            e && e.cdnPath && e.cdnPath.metricsUrl ? i = e.cdnPath.metricsUrl : e.path && (i = e.path),
            A++,
            R = new Worker(O(i, "AcuantMetricsWorker.min.js", t)),
            R.onmessage = x,
            R.onerror = function () {
                M("metricsWorker has failed")
            }
        }
        function w(e) {
            if (h = !1, e) {
                let n = e.data;
                if (g)
                    if (n && "initialize" === n.func) {
                        let e = n.status,
                        i = k[o];
                        t.endInitializer(),
                        i ? 1 == e ? (h = !0, i.onSuccess()) : i.onFail(e, function (e) {
                            switch (e) {
                            case 401:
                                return "Server returned a 401 (missing credentials).";
                            case 403:
                                return "Server returned a 403 (invalid credentials).";
                            case 400:
                                return "Server returned a 400.";
                            case 2:
                                return "Token Validation Failed (Recieved token, but token was null/corrupt).";
                            case 3:
                                return "Token Validation Failed (Recieved token, but token was missing part of body).";
                            case 4:
                                return "Token Validation Failed (Recieved token, but token body was missing fields).";
                            case 5:
                                return "Token Validation Failed (Recieved token, but token body failed validation).";
                            case 6:
                                return "At least one param was null/invalid.";
                            case 7:
                                return "Incorrectly formatted message to worker.";
                            default:
                                return "Unexpected error code."
                            }
                        }
                            (e)) : M("initialize did not have a user callback set")
                    } else
                        M("initworker sent message without correct function tagging");
                else {
                    g = !0;
                    let e = k[i];
                    e && e()
                }
            } else
                M("initworker sent message without anything in the body")
        }
        function E(e) {
            if (e) {
                let t = e.data;
                if (P)
                    if (t && "detect" === t.func) {
                        const e = k[s];
                        e ? t.type && t.x1 && t.y1 && t.x2 && t.y2 && t.x3 && t.y3 && t.x4 && t.y4 ? function (e, t, i, n, a, r, o, l, s, m) {
                            if (m)
                                if (-1 == e)
                                    m.onFail();
                                else {
                                    let c = function (e, t, i, n, a, r, o, l) {
                                        let s = {
                                            x: e,
                                            y: t
                                        },
                                        m = {
                                            x: i,
                                            y: n
                                        },
                                        c = {
                                            x: a,
                                            y: r
                                        },
                                        p = {
                                            x: o,
                                            y: l
                                        },
                                        u = G(s, m),
                                        d = G(m, c),
                                        f = G(c, p),
                                        h = G(p, s),
                                        y = (u + f) / 2,
                                        g = (d + h) / 2;
                                        return y > g ? {
                                            width: y,
                                            height: g
                                        }
                                         : {
                                            width: g,
                                            height: y
                                        }
                                    }
                                    (t, i, n, a, r, o, l, s),
                                    p = function (e, t) {
                                        let i = !1,
                                        n = 5,
                                        a = 1.42,
                                        r = 1.5887;
                                        if (2 == t) {
                                            let t = (100 + n) / 100 * a;
                                            e >= (100 - n) / 100 * a && e <= t && (i = !0)
                                        } else if (1 == t) {
                                            let t = (100 + n) / 100 * r;
                                            e >= (100 - n) / 100 * r && e <= t && (i = !0)
                                        }
                                        return i
                                    }
                                    (c.width / c.height, e),
                                    u = F(c.width, c.height, 2 == e),
                                    d = function (e) {
                                        let t = [-1, -1, -1, -1];
                                        e && 4 === e.length && (v(t, e[0], e[2]), v(t, e[1], e[3]));
                                        return t
                                    }
                                    ([{
                                                x: t,
                                                y: i
                                            }, {
                                                x: n,
                                                y: a
                                            }, {
                                                x: r,
                                                y: o
                                            }, {
                                                x: l,
                                                y: s
                                            }
                                        ]);
                                    m.onSuccess({
                                        type: e,
                                        dimensions: c,
                                        dpi: u,
                                        isCorrectAspectRatio: p,
                                        points: d
                                    })
                                }
                        }
                        (t.type, t.x1, t.y1, t.x2, t.y2, t.x3, t.y3, t.x4, t.y4, e) : e.onFail() : M("detect did not have a user callback set")
                    } else if (t && "crop" === t.func) {
                        const e = k[l];
                        e ? t.imgData && t.width && t.height && t.type ? function (e, t, i, n, a) {
                            a && (null != e && t >= 0 && i >= 0 && n >= 0 ? (D = {
                                        image: {
                                            data: e,
                                            width: t,
                                            height: i
                                        },
                                        cardType: n,
                                        dpi: F(t, i, 2 == n)
                                    }, a.onSuccess(D)) : a.onFail())
                        }
                        (t.imgData, t.width, t.height, t.type, e) : t.error ? e.onFail(t.error) : e.onFail() : M("crop did not have a user callback set")
                    } else if (t && "sign" === t.func) {
                        const e = k[p];
                        e ? t.imgData ? function (e, t) {
                            t && (e ? t.onSuccess(e) : t.onFail())
                        }
                        (t.imgData, e) : t.error ? e.onFail(t.error) : e.onFail() : M("sign did not have a user callback set")
                    } else if (t && "verify" === t.func) {
                        const e = k[u];
                        e ? t.result || !1 === t.result ? function (e, t) {
                            t && (e || !1 === e ? t.onSuccess(e) : t.onFail())
                        }
                        (t.result, e) : e.onFail() : M("verify did not have a user callback set")
                    } else if (t && t.func === d) {
                        let e = k[d];
                        e ? function (e, t) {
                            e ? t.onSuccess(e) : t.onFail()
                        }
                        (t.cvmlVersion, e) : M("getCvmlVersion did not have a user callback set")
                    } else
                        M("imageworker sent message without correct function tagging");
                else
                    P = !0, _()
            } else
                M("imageworker sent message without anything in the body")
        }
        function x(e) {
            if (e) {
                let t = e.data;
                if (C)
                    if (t && "metrics" === t.func) {
                        const e = k[m];
                        e ? t.sharpness && t.glare ? function (e, t, i) {
                            if (i)
                                if (t >= 0 && e >= 0) {
                                    let n = Math.floor(100 * e),
                                    a = Math.floor(100 * t);
                                    i.onSuccess(n, a)
                                } else
                                    i.onFail()
                        }
                        (t.sharpness, t.glare, e) : t.error ? e.onFail(t.error) : e.onFail() : M("metrics did not have a user callback set")
                    } else if ("moire" === t.func) {
                        const e = k[c];
                        e ? t.moire && t.moireraw ? function (e, t, i) {
                            if (i)
                                if (e >= 0 && t >= 0) {
                                    let n = Math.floor(100 * e),
                                    a = Math.floor(100 * t);
                                    i.onSuccess(n, a)
                                } else
                                    i.onFail()
                        }
                        (t.moire, t.moireraw, e) : t.error ? e.onFail(t.error) : e.onFail() : M("moire did not have a user callback set")
                    } else
                        M("metricsworker sent message without correct function tagging");
                else
                    C = !0, _()
            } else
                M("metricsworker sent message without anything in the body")
        }
        function v(e, t, i) {
            return t.x < i.x && t.y < i.y ? (e[0] = t, e[2] = i) : t.x > i.x && t.y > i.y ? (e[0] = i, e[2] = t) : t.x > i.x && t.y < i.y ? (e[1] = t, e[3] = i) : (e[1] = i, e[3] = t),
            e
        }
        function G(e, t) {
            return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
        }
        function F(e, t, i) {
            let n = e > t ? e : t,
            a = i ? 4.92 : 3.37;
            return Math.round(n / a)
        }
        function T(e, t) {
            k[e] = t
        }
        function M(e) {
            let t = k[f];
            t ? e ? t(e) : t() : console.error("Error: ", e)
        }
        function O(e, t, i) {
            let n;
            return null != e && e.length > 0 && 0 == i ? (n = "/" === e.charAt(e.length - 1) ? e : e + "/", n += t) : n = 0 != i ? e : t,
            n
        }
        function B(e, t, i, n = !1) {
            let a = {
                func: t,
                data: i
            };
            n && i && i.imgData && i.imgData.buffer ? e.postMessage(a, [a.data.imgData.buffer]) : e.postMessage(a)
        }
        function _() {
            const e = k[n],
            t = k[a],
            i = k[r];
            --A,
            0 == A && (e ? (T(n, null), e()) : t ? (T(a, null), t()) : i && (T(r, null), i()))
        }
        return t
    }
    (config),
    "function" == typeof onAcuantSdkLoaded && onAcuantSdkLoaded()
}
!function () {
    "use strict";
    let e = {};
    function t(e) {
        return m(">" + p("B", e.length), e)
    }
    function i(e) {
        return m(">" + p("H", e.length), e)
    }
    function n(e) {
        return m(">" + p("L", e.length), e)
    }
    function a(e, a, r) {
        let o,
        l,
        s,
        c,
        u = "",
        d = "";
        if ("Byte" == a)
            o = e.length, o <= 4 ? d = t(e) + p("\0", 4 - o) : (d = m(">L", [r]), u = t(e));
        else if ("Short" == a)
            o = e.length, o <= 2 ? d = i(e) + p("\0\0", 2 - o) : (d = m(">L", [r]), u = i(e));
        else if ("Long" == a)
            o = e.length, o <= 1 ? d = n(e) : (d = m(">L", [r]), u = n(e));
        else if ("Ascii" == a)
            l = e + "\0", o = l.length, o > 4 ? (d = m(">L", [r]), u = l) : d = l + p("\0", 4 - o);
        else if ("Rational" == a) {
            if ("number" == typeof e[0])
                o = 1, s = e[0], c = e[1], l = m(">L", [s]) + m(">L", [c]);
            else {
                o = e.length,
                l = "";
                for (var f = 0; f < o; f++)
                    s = e[f][0], c = e[f][1], l += m(">L", [s]) + m(">L", [c])
            }
            d = m(">L", [r]),
            u = l
        } else if ("SRational" == a) {
            if ("number" == typeof e[0])
                o = 1, s = e[0], c = e[1], l = m(">l", [s]) + m(">l", [c]);
            else {
                o = e.length,
                l = "";
                for (f = 0; f < o; f++)
                    s = e[f][0], c = e[f][1], l += m(">l", [s]) + m(">l", [c])
            }
            d = m(">L", [r]),
            u = l
        } else
            "Undefined" == a && (o = e.length, o > 4 ? (d = m(">L", [r]), u = e) : d = e + p("\0", 4 - o));
        return [m(">L", [o]), d, u]
    }
    function r(e, t, i) {
        let n,
        r = Object.keys(e).length,
        o = m(">H", [r]);
        n = ["0th", "1st"].indexOf(t) > -1 ? 2 + 12 * r + 4 : 2 + 12 * r;
        let l = "",
        s = "";
        for (var c in e) {
            if ("string" == typeof c && (c = parseInt(c)), "0th" == t && [34665, 34853].indexOf(c) > -1)
                continue;
            if ("Exif" == t && 40965 == c)
                continue;
            if ("1st" == t && [513, 514].indexOf(c) > -1)
                continue;
            let r = e[c],
            o = m(">H", [c]),
            p = f[t][c].type,
            u = m(">H", [d[p]]);
            "number" == typeof r && (r = [r]);
            let h = a(r, p, 8 + n + i + s.length);
            l += o + u + h[0] + h[1],
            s += h[2]
        }
        return [o + l, s]
    }
    function o(e) {
        let t,
        i;
        if ("ÿØ" == e.slice(0, 2))
            t = u(e), i = function (e) {
                let t;
                for (let i = 0; i < e.length; i++)
                    if (t = e[i], "ÿá" == t.slice(0, 2) && "Exif\0\0" == t.slice(4, 10))
                        return t;
                return null
            }
        (t),
        this.tiftag = i ? i.slice(10) : null;
        else if (["II", "MM"].indexOf(e.slice(0, 2)) > -1)
            this.tiftag = e;
        else {
            if ("Exif" != e.slice(0, 4))
                throw new Error("Given file is neither JPEG nor TIFF.");
            this.tiftag = e.slice(6)
        }
    }
    if (e.version = "1.0.4", e.remove = function (e) {
        let t = !1;
        if ("ÿØ" == e.slice(0, 2));
        else {
            if ("data:image/jpeg;base64," != e.slice(0, 23) && "data:image/jpg;base64," != e.slice(0, 22))
                throw new Error("Given data is not jpeg.");
                e = s(e.split(",")[1]),
                t = !0
            }
            let i = u(e).filter((function (e) {
                        return !("ÿá" == e.slice(0, 2) && "Exif\0\0" == e.slice(4, 10))
                    })).join("");
            return t && (i = "data:image/jpeg;base64," + l(i)),
            i
        }, e.insert = function (e, t) {
            let i = !1;
            if ("Exif\0\0" != e.slice(0, 6))
                throw new Error("Given data is not exif.");
            if ("ÿØ" == t.slice(0, 2));
            else {
                if ("data:image/jpeg;base64," != t.slice(0, 23) && "data:image/jpg;base64," != t.slice(0, 22))
                    throw new Error("Given data is not jpeg.");
                t = s(t.split(",")[1]),
                i = !0
            }
            let n = "ÿá" + m(">H", [e.length + 2]) + e,
            a = function (e, t) {
                let i = !1,
                n = [];
                e.forEach((function (a, r) {
                        "ÿá" == a.slice(0, 2) && "Exif\0\0" == a.slice(4, 10) && (i ? n.unshift(r) : (e[r] = t, i = !0))
                    })),
                n.forEach((function (t) {
                        e.splice(t, 1)
                    })),
                !i && t && (e = [e[0], t].concat(e.slice(1)));
                return e.join("")
            }
            (u(t), n);
            return i && (a = "data:image/jpeg;base64," + l(a)),
            a
        }, e.load = function (e) {
            let t;
            if ("string" != typeof e)
                throw new Error("'load' gots invalid type argument.");
            if ("ÿØ" == e.slice(0, 2))
                t = e;
            else if ("data:image/jpeg;base64," == e.slice(0, 23) || "data:image/jpg;base64," == e.slice(0, 22))
                t = s(e.split(",")[1]);
            else {
                if ("Exif" != e.slice(0, 4))
                    throw new Error("'load' gots invalid file data.");
                t = e.slice(6)
            }
            let i = {
                "0th": {},
                Exif: {},
                GPS: {},
                Interop: {},
                "1st": {},
                thumbnail: null
            },
            n = new o(t);
            if (null === n.tiftag)
                return i;
            "II" == n.tiftag.slice(0, 2) ? n.endian_mark = "<" : n.endian_mark = ">";
            let a = c(n.endian_mark + "L", n.tiftag.slice(4, 8))[0];
            i["0th"] = n.get_ifd(a, "0th");
            let r = i["0th"].first_ifd_pointer;
            if (delete i["0th"].first_ifd_pointer, 34665 in i["0th"] && (a = i["0th"][34665], i.Exif = n.get_ifd(a, "Exif")), 34853 in i["0th"] && (a = i["0th"][34853], i.GPS = n.get_ifd(a, "GPS")), 40965 in i.Exif && (a = i.Exif[40965], i.Interop = n.get_ifd(a, "Interop")), "\0\0\0\0" != r && (a = c(n.endian_mark + "L", r)[0], i["1st"] = n.get_ifd(a, "1st"), 513 in i["1st"] && 514 in i["1st"])) {
                let e = i["1st"][513] + i["1st"][514],
                t = n.tiftag.slice(i["1st"][513], e);
                i.thumbnail = t
            }
            return i
        }, e.dump = function (t) {
            let i = (n = t, JSON.parse(JSON.stringify(n)));
            var n;
            let a,
            o,
            l,
            s,
            c,
            p = !1,
            f = !1,
            h = !1,
            y = !1;
            a = "0th" in i ? i["0th"] : {},
            "Exif" in i && Object.keys(i.Exif).length || "Interop" in i && Object.keys(i.Interop).length ? (a[34665] = 1, p = !0, o = i.Exif, "Interop" in i && Object.keys(i.Interop).length ? (o[40965] = 1, h = !0, l = i.Interop) : Object.keys(o).indexOf(e.ExifIFD.InteroperabilityTag.toString()) > -1 && delete o[40965]) : Object.keys(a).indexOf(e.ImageIFD.ExifTag.toString()) > -1 && delete a[34665],
            "GPS" in i && Object.keys(i.GPS).length ? (a[e.ImageIFD.GPSTag] = 1, f = !0, s = i.GPS) : Object.keys(a).indexOf(e.ImageIFD.GPSTag.toString()) > -1 && delete a[e.ImageIFD.GPSTag],
            "1st" in i && "thumbnail" in i && null != i.thumbnail && (y = !0, i["1st"][513] = 1, i["1st"][514] = 1, c = i["1st"]);
            let g,
            S,
            P,
            R,
            C,
            A = r(a, "0th", 0),
            k = A[0].length + 12 * p + 12 * f + 4 + A[1].length,
            D = "",
            L = 0,
            I = "",
            b = 0,
            w = "",
            E = 0,
            x = "";
            (p && (g = r(o, "Exif", k), L = g[0].length + 12 * h + g[1].length), f && (S = r(s, "GPS", k + L), I = S.join(""), b = I.length), h) && (P = r(l, "Interop", k + L + b), w = P.join(""), E = w.length);
            if (y && (R = r(c, "1st", k + L + b + E), C = function (e) {
                    let t = u(e);
                    for (; "ÿà" <= t[1].slice(0, 2) && t[1].slice(0, 2) <= "ÿï"; )
                        t = [t[0]].concat(t.slice(2));
                        return t.join("")
                    }
                        (i.thumbnail), C.length > 64e3))throw new Error("Given thumbnail is too large. max 64kB");
            let v = "",
            G = "",
            F = "",
            T = "\0\0\0\0";
            if (p) {
                var M = m(">L", [O = 8 + k]);
                v = m(">H", [34665]) + m(">H", [d.Long]) + m(">L", [1]) + M
            }
            if (f) {
                M = m(">L", [O = 8 + k + L]);
                G = m(">H", [34853]) + m(">H", [d.Long]) + m(">L", [1]) + M
            }
            if (h) {
                M = m(">L", [O = 8 + k + L + b]);
                F = m(">H", [40965]) + m(">H", [d.Long]) + m(">L", [1]) + M
            }
            if (y) {
                var O;
                T = m(">L", [O = 8 + k + L + b + E]);
                let e = "\0\0\0\0" + m(">L", [O + R[0].length + 24 + 4 + R[1].length]),
                t = "\0\0\0\0" + m(">L", [C.length]);
                x = R[0] + e + t + "\0\0\0\0" + R[1] + C
            }
            let B = A[0] + v + G + T + A[1];
            return p && (D = g[0] + F + g[1]),
            "Exif\0\0MM\0*\0\0\0\b" + B + D + I + w + x
        }, o.prototype = {
                get_ifd: function (e, t) {
                    let i,
                    n = {},
                    a = c(this.endian_mark + "H", this.tiftag.slice(e, e + 2))[0],
                    r = e + 2;
                    i = ["0th", "1st"].indexOf(t) > -1 ? "Image" : t;
                    for (let t = 0; t < a; t++) {
                        e = r + 12 * t;
                        let a = c(this.endian_mark + "H", this.tiftag.slice(e, e + 2))[0],
                        o = [c(this.endian_mark + "H", this.tiftag.slice(e + 2, e + 4))[0], c(this.endian_mark + "L", this.tiftag.slice(e + 4, e + 8))[0], this.tiftag.slice(e + 8, e + 12)];
                        a in f[i] && (n[a] = this.convert_value(o))
                    }
                    return "0th" == t && (e = r + 12 * a, n.first_ifd_pointer = this.tiftag.slice(e, e + 4)),
                    n
                },
                convert_value: function (e) {
                    let t,
                    i = null,
                    n = e[0],
                    a = e[1],
                    r = e[2];
                    if (1 == n)
                        a > 4 ? (t = c(this.endian_mark + "L", r)[0], i = c(this.endian_mark + p("B", a), this.tiftag.slice(t, t + a))) : i = c(this.endian_mark + p("B", a), r.slice(0, a));
                    else if (2 == n)
                        a > 4 ? (t = c(this.endian_mark + "L", r)[0], i = this.tiftag.slice(t, t + a - 1)) : i = r.slice(0, a - 1);
                    else if (3 == n)
                        a > 2 ? (t = c(this.endian_mark + "L", r)[0], i = c(this.endian_mark + p("H", a), this.tiftag.slice(t, t + 2 * a))) : i = c(this.endian_mark + p("H", a), r.slice(0, 2 * a));
                    else if (4 == n)
                        a > 1 ? (t = c(this.endian_mark + "L", r)[0], i = c(this.endian_mark + p("L", a), this.tiftag.slice(t, t + 4 * a))) : i = c(this.endian_mark + p("L", a), r);
                    else if (5 == n)
                        if (t = c(this.endian_mark + "L", r)[0], a > 1) {
                            i = [];
                            for (var o = 0; o < a; o++)
                                i.push([c(this.endian_mark + "L", this.tiftag.slice(t + 8 * o, t + 4 + 8 * o))[0], c(this.endian_mark + "L", this.tiftag.slice(t + 4 + 8 * o, t + 8 + 8 * o))[0]])
                        } else
                            i = [c(this.endian_mark + "L", this.tiftag.slice(t, t + 4))[0], c(this.endian_mark + "L", this.tiftag.slice(t + 4, t + 8))[0]];
                    else if (7 == n)
                        a > 4 ? (t = c(this.endian_mark + "L", r)[0], i = this.tiftag.slice(t, t + a)) : i = r.slice(0, a);
                    else if (9 == n)
                        a > 1 ? (t = c(this.endian_mark + "L", r)[0], i = c(this.endian_mark + p("l", a), this.tiftag.slice(t, t + 4 * a))) : i = c(this.endian_mark + p("l", a), r);
                    else {
                        if (10 != n)
                            throw new Error("Exif might be wrong. Got incorrect value type to decode. type:" + n);
                        if (t = c(this.endian_mark + "L", r)[0], a > 1) {
                            i = [];
                            for (o = 0; o < a; o++)
                                i.push([c(this.endian_mark + "l", this.tiftag.slice(t + 8 * o, t + 4 + 8 * o))[0], c(this.endian_mark + "l", this.tiftag.slice(t + 4 + 8 * o, t + 8 + 8 * o))[0]])
                        } else
                            i = [c(this.endian_mark + "l", this.tiftag.slice(t, t + 4))[0], c(this.endian_mark + "l", this.tiftag.slice(t + 4, t + 8))[0]]
                    }
                    return i instanceof Array && 1 == i.length ? i[0] : i
                }
            }, "undefined" != typeof window && "function" == typeof window.btoa)var l = window.btoa;
    if (void 0 === l)
        l = function (e) {
            let t,
            i,
            n,
            a,
            r,
            o,
            l,
            s = "",
            m = 0,
            c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            for (; m < e.length; )
                t = e.charCodeAt(m++), i = e.charCodeAt(m++), n = e.charCodeAt(m++), a = t >> 2, r = (3 & t) << 4 | i >> 4, o = (15 & i) << 2 | n >> 6, l = 63 & n, isNaN(i) ? o = l = 64 : isNaN(n) && (l = 64), s = s + c.charAt(a) + c.charAt(r) + c.charAt(o) + c.charAt(l);
            return s
        };
    if ("undefined" != typeof window && "function" == typeof window.atob)
        var s = window.atob;
    if (void 0 === s)
        s = function (e) {
            let t,
            i,
            n,
            a,
            r,
            o,
            l,
            s = "",
            m = 0,
            c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            for (e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); m < e.length; )
                a = c.indexOf(e.charAt(m++)), r = c.indexOf(e.charAt(m++)), o = c.indexOf(e.charAt(m++)), l = c.indexOf(e.charAt(m++)), t = a << 2 | r >> 4, i = (15 & r) << 4 | o >> 2, n = (3 & o) << 6 | l, s += String.fromCharCode(t), 64 != o && (s += String.fromCharCode(i)), 64 != l && (s += String.fromCharCode(n));
            return s
        };
    function m(e, t) {
        if (!(t instanceof Array))
            throw new Error("'pack' error. Got invalid type argument.");
        if (e.length - 1 != t.length)
            throw new Error("'pack' error. " + (e.length - 1) + " marks, " + t.length + " elements.");
        let i;
        if ("<" == e[0])
            i = !0;
        else {
            if (">" != e[0])
                throw new Error("");
            i = !1
        }
        let n = "",
        a = 1,
        r = null,
        o = null,
        l = null;
        for (; o = e[a]; ) {
            if ("b" == o.toLowerCase()) {
                if (r = t[a - 1], "b" == o && r < 0 && (r += 256), r > 255 || r < 0)
                    throw new Error("'pack' error.");
                l = String.fromCharCode(r)
            } else if ("H" == o) {
                if (r = t[a - 1], r > 65535 || r < 0)
                    throw new Error("'pack' error.");
                l = String.fromCharCode(Math.floor(r % 65536 / 256)) + String.fromCharCode(r % 256),
                i && (l = l.split("").reverse().join(""))
            } else {
                if ("l" != o.toLowerCase())
                    throw new Error("'pack' error.");
                if (r = t[a - 1], "l" == o && r < 0 && (r += 4294967296), r > 4294967295 || r < 0)
                    throw new Error("'pack' error.");
                l = String.fromCharCode(Math.floor(r / 16777216)) + String.fromCharCode(Math.floor(r % 16777216 / 65536)) + String.fromCharCode(Math.floor(r % 65536 / 256)) + String.fromCharCode(r % 256),
                i && (l = l.split("").reverse().join(""))
            }
            n += l,
            a += 1
        }
        return n
    }
    function c(e, t) {
        if ("string" != typeof t)
            throw new Error("'unpack' error. Got invalid type argument.");
        let i,
        n = 0;
        for (let t = 1; t < e.length; t++)
            if ("b" == e[t].toLowerCase())
                n += 1;
            else if ("h" == e[t].toLowerCase())
                n += 2;
            else {
                if ("l" != e[t].toLowerCase())
                    throw new Error("'unpack' error. Got invalid mark.");
                n += 4
            }
        if (n != t.length)
            throw new Error("'unpack' error. Mismatch between symbol and string length. " + n + ":" + t.length);
        if ("<" == e[0])
            i = !0;
        else {
            if (">" != e[0])
                throw new Error("'unpack' error.");
            i = !1
        }
        let a = [],
        r = 0,
        o = 1,
        l = null,
        s = null,
        m = null,
        c = "";
        for (; s = e[o]; ) {
            if ("b" == s.toLowerCase())
                m = 1, c = t.slice(r, r + m), l = c.charCodeAt(0), "b" == s && l >= 128 && (l -= 256);
            else if ("H" == s)
                m = 2, c = t.slice(r, r + m), i && (c = c.split("").reverse().join("")), l = 256 * c.charCodeAt(0) + c.charCodeAt(1);
            else {
                if ("l" != s.toLowerCase())
                    throw new Error("'unpack' error. " + s);
                m = 4,
                c = t.slice(r, r + m),
                i && (c = c.split("").reverse().join("")),
                l = 16777216 * c.charCodeAt(0) + 65536 * c.charCodeAt(1) + 256 * c.charCodeAt(2) + c.charCodeAt(3),
                "l" == s && l >= 2147483648 && (l -= 4294967296)
            }
            a.push(l),
            r += m,
            o += 1
        }
        return a
    }
    function p(e, t) {
        let i = "";
        for (let n = 0; n < t; n++)
            i += e;
        return i
    }
    function u(e) {
        if ("ÿØ" != e.slice(0, 2))
            throw new Error("Given data isn't JPEG.");
        let t = 2,
        i = ["ÿØ"];
        for (; ; ) {
            if ("ÿÚ" == e.slice(t, t + 2)) {
                i.push(e.slice(t));
                break
            } {
                let n = t + c(">H", e.slice(t + 2, t + 4))[0] + 2;
                i.push(e.slice(t, n)),
                t = n
            }
            if (t >= e.length)
                throw new Error("Wrong JPEG data.")
        }
        return i
    }
    var d = {
        Byte: 1,
        Ascii: 2,
        Short: 3,
        Long: 4,
        Rational: 5,
        Undefined: 7,
        SLong: 9,
        SRational: 10
    },
    f = {
        Image: {
            11: {
                name: "ProcessingSoftware",
                type: "Ascii"
            },
            254: {
                name: "NewSubfileType",
                type: "Long"
            },
            255: {
                name: "SubfileType",
                type: "Short"
            },
            256: {
                name: "ImageWidth",
                type: "Long"
            },
            257: {
                name: "ImageLength",
                type: "Long"
            },
            258: {
                name: "BitsPerSample",
                type: "Short"
            },
            259: {
                name: "Compression",
                type: "Short"
            },
            262: {
                name: "PhotometricInterpretation",
                type: "Short"
            },
            263: {
                name: "Threshholding",
                type: "Short"
            },
            264: {
                name: "CellWidth",
                type: "Short"
            },
            265: {
                name: "CellLength",
                type: "Short"
            },
            266: {
                name: "FillOrder",
                type: "Short"
            },
            269: {
                name: "DocumentName",
                type: "Ascii"
            },
            270: {
                name: "ImageDescription",
                type: "Ascii"
            },
            271: {
                name: "Make",
                type: "Ascii"
            },
            272: {
                name: "Model",
                type: "Ascii"
            },
            273: {
                name: "StripOffsets",
                type: "Long"
            },
            274: {
                name: "Orientation",
                type: "Short"
            },
            277: {
                name: "SamplesPerPixel",
                type: "Short"
            },
            278: {
                name: "RowsPerStrip",
                type: "Long"
            },
            279: {
                name: "StripByteCounts",
                type: "Long"
            },
            282: {
                name: "XResolution",
                type: "Rational"
            },
            283: {
                name: "YResolution",
                type: "Rational"
            },
            284: {
                name: "PlanarConfiguration",
                type: "Short"
            },
            290: {
                name: "GrayResponseUnit",
                type: "Short"
            },
            291: {
                name: "GrayResponseCurve",
                type: "Short"
            },
            292: {
                name: "T4Options",
                type: "Long"
            },
            293: {
                name: "T6Options",
                type: "Long"
            },
            296: {
                name: "ResolutionUnit",
                type: "Short"
            },
            301: {
                name: "TransferFunction",
                type: "Short"
            },
            305: {
                name: "Software",
                type: "Ascii"
            },
            306: {
                name: "DateTime",
                type: "Ascii"
            },
            315: {
                name: "Artist",
                type: "Ascii"
            },
            316: {
                name: "HostComputer",
                type: "Ascii"
            },
            317: {
                name: "Predictor",
                type: "Short"
            },
            318: {
                name: "WhitePoint",
                type: "Rational"
            },
            319: {
                name: "PrimaryChromaticities",
                type: "Rational"
            },
            320: {
                name: "ColorMap",
                type: "Short"
            },
            321: {
                name: "HalftoneHints",
                type: "Short"
            },
            322: {
                name: "TileWidth",
                type: "Short"
            },
            323: {
                name: "TileLength",
                type: "Short"
            },
            324: {
                name: "TileOffsets",
                type: "Short"
            },
            325: {
                name: "TileByteCounts",
                type: "Short"
            },
            330: {
                name: "SubIFDs",
                type: "Long"
            },
            332: {
                name: "InkSet",
                type: "Short"
            },
            333: {
                name: "InkNames",
                type: "Ascii"
            },
            334: {
                name: "NumberOfInks",
                type: "Short"
            },
            336: {
                name: "DotRange",
                type: "Byte"
            },
            337: {
                name: "TargetPrinter",
                type: "Ascii"
            },
            338: {
                name: "ExtraSamples",
                type: "Short"
            },
            339: {
                name: "SampleFormat",
                type: "Short"
            },
            340: {
                name: "SMinSampleValue",
                type: "Short"
            },
            341: {
                name: "SMaxSampleValue",
                type: "Short"
            },
            342: {
                name: "TransferRange",
                type: "Short"
            },
            343: {
                name: "ClipPath",
                type: "Byte"
            },
            344: {
                name: "XClipPathUnits",
                type: "Long"
            },
            345: {
                name: "YClipPathUnits",
                type: "Long"
            },
            346: {
                name: "Indexed",
                type: "Short"
            },
            347: {
                name: "JPEGTables",
                type: "Undefined"
            },
            351: {
                name: "OPIProxy",
                type: "Short"
            },
            512: {
                name: "JPEGProc",
                type: "Long"
            },
            513: {
                name: "JPEGInterchangeFormat",
                type: "Long"
            },
            514: {
                name: "JPEGInterchangeFormatLength",
                type: "Long"
            },
            515: {
                name: "JPEGRestartInterval",
                type: "Short"
            },
            517: {
                name: "JPEGLosslessPredictors",
                type: "Short"
            },
            518: {
                name: "JPEGPointTransforms",
                type: "Short"
            },
            519: {
                name: "JPEGQTables",
                type: "Long"
            },
            520: {
                name: "JPEGDCTables",
                type: "Long"
            },
            521: {
                name: "JPEGACTables",
                type: "Long"
            },
            529: {
                name: "YCbCrCoefficients",
                type: "Rational"
            },
            530: {
                name: "YCbCrSubSampling",
                type: "Short"
            },
            531: {
                name: "YCbCrPositioning",
                type: "Short"
            },
            532: {
                name: "ReferenceBlackWhite",
                type: "Rational"
            },
            700: {
                name: "XMLPacket",
                type: "Byte"
            },
            18246: {
                name: "Rating",
                type: "Short"
            },
            18249: {
                name: "RatingPercent",
                type: "Short"
            },
            32781: {
                name: "ImageID",
                type: "Ascii"
            },
            33421: {
                name: "CFARepeatPatternDim",
                type: "Short"
            },
            33422: {
                name: "CFAPattern",
                type: "Byte"
            },
            33423: {
                name: "BatteryLevel",
                type: "Rational"
            },
            33432: {
                name: "Copyright",
                type: "Ascii"
            },
            33434: {
                name: "ExposureTime",
                type: "Rational"
            },
            34377: {
                name: "ImageResources",
                type: "Byte"
            },
            34665: {
                name: "ExifTag",
                type: "Long"
            },
            34675: {
                name: "InterColorProfile",
                type: "Undefined"
            },
            34853: {
                name: "GPSTag",
                type: "Long"
            },
            34857: {
                name: "Interlace",
                type: "Short"
            },
            34858: {
                name: "TimeZoneOffset",
                type: "Long"
            },
            34859: {
                name: "SelfTimerMode",
                type: "Short"
            },
            37387: {
                name: "FlashEnergy",
                type: "Rational"
            },
            37388: {
                name: "SpatialFrequencyResponse",
                type: "Undefined"
            },
            37389: {
                name: "Noise",
                type: "Undefined"
            },
            37390: {
                name: "FocalPlaneXResolution",
                type: "Rational"
            },
            37391: {
                name: "FocalPlaneYResolution",
                type: "Rational"
            },
            37392: {
                name: "FocalPlaneResolutionUnit",
                type: "Short"
            },
            37393: {
                name: "ImageNumber",
                type: "Long"
            },
            37394: {
                name: "SecurityClassification",
                type: "Ascii"
            },
            37395: {
                name: "ImageHistory",
                type: "Ascii"
            },
            37397: {
                name: "ExposureIndex",
                type: "Rational"
            },
            37398: {
                name: "TIFFEPStandardID",
                type: "Byte"
            },
            37399: {
                name: "SensingMethod",
                type: "Short"
            },
            40091: {
                name: "XPTitle",
                type: "Byte"
            },
            40092: {
                name: "XPComment",
                type: "Byte"
            },
            40093: {
                name: "XPAuthor",
                type: "Byte"
            },
            40094: {
                name: "XPKeywords",
                type: "Byte"
            },
            40095: {
                name: "XPSubject",
                type: "Byte"
            },
            50341: {
                name: "PrintImageMatching",
                type: "Undefined"
            },
            50706: {
                name: "DNGVersion",
                type: "Byte"
            },
            50707: {
                name: "DNGBackwardVersion",
                type: "Byte"
            },
            50708: {
                name: "UniqueCameraModel",
                type: "Ascii"
            },
            50709: {
                name: "LocalizedCameraModel",
                type: "Byte"
            },
            50710: {
                name: "CFAPlaneColor",
                type: "Byte"
            },
            50711: {
                name: "CFALayout",
                type: "Short"
            },
            50712: {
                name: "LinearizationTable",
                type: "Short"
            },
            50713: {
                name: "BlackLevelRepeatDim",
                type: "Short"
            },
            50714: {
                name: "BlackLevel",
                type: "Rational"
            },
            50715: {
                name: "BlackLevelDeltaH",
                type: "SRational"
            },
            50716: {
                name: "BlackLevelDeltaV",
                type: "SRational"
            },
            50717: {
                name: "WhiteLevel",
                type: "Short"
            },
            50718: {
                name: "DefaultScale",
                type: "Rational"
            },
            50719: {
                name: "DefaultCropOrigin",
                type: "Short"
            },
            50720: {
                name: "DefaultCropSize",
                type: "Short"
            },
            50721: {
                name: "ColorMatrix1",
                type: "SRational"
            },
            50722: {
                name: "ColorMatrix2",
                type: "SRational"
            },
            50723: {
                name: "CameraCalibration1",
                type: "SRational"
            },
            50724: {
                name: "CameraCalibration2",
                type: "SRational"
            },
            50725: {
                name: "ReductionMatrix1",
                type: "SRational"
            },
            50726: {
                name: "ReductionMatrix2",
                type: "SRational"
            },
            50727: {
                name: "AnalogBalance",
                type: "Rational"
            },
            50728: {
                name: "AsShotNeutral",
                type: "Short"
            },
            50729: {
                name: "AsShotWhiteXY",
                type: "Rational"
            },
            50730: {
                name: "BaselineExposure",
                type: "SRational"
            },
            50731: {
                name: "BaselineNoise",
                type: "Rational"
            },
            50732: {
                name: "BaselineSharpness",
                type: "Rational"
            },
            50733: {
                name: "BayerGreenSplit",
                type: "Long"
            },
            50734: {
                name: "LinearResponseLimit",
                type: "Rational"
            },
            50735: {
                name: "CameraSerialNumber",
                type: "Ascii"
            },
            50736: {
                name: "LensInfo",
                type: "Rational"
            },
            50737: {
                name: "ChromaBlurRadius",
                type: "Rational"
            },
            50738: {
                name: "AntiAliasStrength",
                type: "Rational"
            },
            50739: {
                name: "ShadowScale",
                type: "SRational"
            },
            50740: {
                name: "DNGPrivateData",
                type: "Byte"
            },
            50741: {
                name: "MakerNoteSafety",
                type: "Short"
            },
            50778: {
                name: "CalibrationIlluminant1",
                type: "Short"
            },
            50779: {
                name: "CalibrationIlluminant2",
                type: "Short"
            },
            50780: {
                name: "BestQualityScale",
                type: "Rational"
            },
            50781: {
                name: "RawDataUniqueID",
                type: "Byte"
            },
            50827: {
                name: "OriginalRawFileName",
                type: "Byte"
            },
            50828: {
                name: "OriginalRawFileData",
                type: "Undefined"
            },
            50829: {
                name: "ActiveArea",
                type: "Short"
            },
            50830: {
                name: "MaskedAreas",
                type: "Short"
            },
            50831: {
                name: "AsShotICCProfile",
                type: "Undefined"
            },
            50832: {
                name: "AsShotPreProfileMatrix",
                type: "SRational"
            },
            50833: {
                name: "CurrentICCProfile",
                type: "Undefined"
            },
            50834: {
                name: "CurrentPreProfileMatrix",
                type: "SRational"
            },
            50879: {
                name: "ColorimetricReference",
                type: "Short"
            },
            50931: {
                name: "CameraCalibrationSignature",
                type: "Byte"
            },
            50932: {
                name: "ProfileCalibrationSignature",
                type: "Byte"
            },
            50934: {
                name: "AsShotProfileName",
                type: "Byte"
            },
            50935: {
                name: "NoiseReductionApplied",
                type: "Rational"
            },
            50936: {
                name: "ProfileName",
                type: "Byte"
            },
            50937: {
                name: "ProfileHueSatMapDims",
                type: "Long"
            },
            50938: {
                name: "ProfileHueSatMapData1",
                type: "Float"
            },
            50939: {
                name: "ProfileHueSatMapData2",
                type: "Float"
            },
            50940: {
                name: "ProfileToneCurve",
                type: "Float"
            },
            50941: {
                name: "ProfileEmbedPolicy",
                type: "Long"
            },
            50942: {
                name: "ProfileCopyright",
                type: "Byte"
            },
            50964: {
                name: "ForwardMatrix1",
                type: "SRational"
            },
            50965: {
                name: "ForwardMatrix2",
                type: "SRational"
            },
            50966: {
                name: "PreviewApplicationName",
                type: "Byte"
            },
            50967: {
                name: "PreviewApplicationVersion",
                type: "Byte"
            },
            50968: {
                name: "PreviewSettingsName",
                type: "Byte"
            },
            50969: {
                name: "PreviewSettingsDigest",
                type: "Byte"
            },
            50970: {
                name: "PreviewColorSpace",
                type: "Long"
            },
            50971: {
                name: "PreviewDateTime",
                type: "Ascii"
            },
            50972: {
                name: "RawImageDigest",
                type: "Undefined"
            },
            50973: {
                name: "OriginalRawFileDigest",
                type: "Undefined"
            },
            50974: {
                name: "SubTileBlockSize",
                type: "Long"
            },
            50975: {
                name: "RowInterleaveFactor",
                type: "Long"
            },
            50981: {
                name: "ProfileLookTableDims",
                type: "Long"
            },
            50982: {
                name: "ProfileLookTableData",
                type: "Float"
            },
            51008: {
                name: "OpcodeList1",
                type: "Undefined"
            },
            51009: {
                name: "OpcodeList2",
                type: "Undefined"
            },
            51022: {
                name: "OpcodeList3",
                type: "Undefined"
            }
        },
        Exif: {
            33434: {
                name: "ExposureTime",
                type: "Rational"
            },
            33437: {
                name: "FNumber",
                type: "Rational"
            },
            34850: {
                name: "ExposureProgram",
                type: "Short"
            },
            34852: {
                name: "SpectralSensitivity",
                type: "Ascii"
            },
            34855: {
                name: "ISOSpeedRatings",
                type: "Short"
            },
            34856: {
                name: "OECF",
                type: "Undefined"
            },
            34864: {
                name: "SensitivityType",
                type: "Short"
            },
            34865: {
                name: "StandardOutputSensitivity",
                type: "Long"
            },
            34866: {
                name: "RecommendedExposureIndex",
                type: "Long"
            },
            34867: {
                name: "ISOSpeed",
                type: "Long"
            },
            34868: {
                name: "ISOSpeedLatitudeyyy",
                type: "Long"
            },
            34869: {
                name: "ISOSpeedLatitudezzz",
                type: "Long"
            },
            36864: {
                name: "ExifVersion",
                type: "Undefined"
            },
            36867: {
                name: "DateTimeOriginal",
                type: "Ascii"
            },
            36868: {
                name: "DateTimeDigitized",
                type: "Ascii"
            },
            37121: {
                name: "ComponentsConfiguration",
                type: "Undefined"
            },
            37122: {
                name: "CompressedBitsPerPixel",
                type: "Rational"
            },
            37377: {
                name: "ShutterSpeedValue",
                type: "SRational"
            },
            37378: {
                name: "ApertureValue",
                type: "Rational"
            },
            37379: {
                name: "BrightnessValue",
                type: "SRational"
            },
            37380: {
                name: "ExposureBiasValue",
                type: "SRational"
            },
            37381: {
                name: "MaxApertureValue",
                type: "Rational"
            },
            37382: {
                name: "SubjectDistance",
                type: "Rational"
            },
            37383: {
                name: "MeteringMode",
                type: "Short"
            },
            37384: {
                name: "LightSource",
                type: "Short"
            },
            37385: {
                name: "Flash",
                type: "Short"
            },
            37386: {
                name: "FocalLength",
                type: "Rational"
            },
            37396: {
                name: "SubjectArea",
                type: "Short"
            },
            37500: {
                name: "MakerNote",
                type: "Undefined"
            },
            37510: {
                name: "UserComment",
                type: "Ascii"
            },
            37520: {
                name: "SubSecTime",
                type: "Ascii"
            },
            37521: {
                name: "SubSecTimeOriginal",
                type: "Ascii"
            },
            37522: {
                name: "SubSecTimeDigitized",
                type: "Ascii"
            },
            40960: {
                name: "FlashpixVersion",
                type: "Undefined"
            },
            40961: {
                name: "ColorSpace",
                type: "Short"
            },
            40962: {
                name: "PixelXDimension",
                type: "Long"
            },
            40963: {
                name: "PixelYDimension",
                type: "Long"
            },
            40964: {
                name: "RelatedSoundFile",
                type: "Ascii"
            },
            40965: {
                name: "InteroperabilityTag",
                type: "Long"
            },
            41483: {
                name: "FlashEnergy",
                type: "Rational"
            },
            41484: {
                name: "SpatialFrequencyResponse",
                type: "Undefined"
            },
            41486: {
                name: "FocalPlaneXResolution",
                type: "Rational"
            },
            41487: {
                name: "FocalPlaneYResolution",
                type: "Rational"
            },
            41488: {
                name: "FocalPlaneResolutionUnit",
                type: "Short"
            },
            41492: {
                name: "SubjectLocation",
                type: "Short"
            },
            41493: {
                name: "ExposureIndex",
                type: "Rational"
            },
            41495: {
                name: "SensingMethod",
                type: "Short"
            },
            41728: {
                name: "FileSource",
                type: "Undefined"
            },
            41729: {
                name: "SceneType",
                type: "Undefined"
            },
            41730: {
                name: "CFAPattern",
                type: "Undefined"
            },
            41985: {
                name: "CustomRendered",
                type: "Short"
            },
            41986: {
                name: "ExposureMode",
                type: "Short"
            },
            41987: {
                name: "WhiteBalance",
                type: "Short"
            },
            41988: {
                name: "DigitalZoomRatio",
                type: "Rational"
            },
            41989: {
                name: "FocalLengthIn35mmFilm",
                type: "Short"
            },
            41990: {
                name: "SceneCaptureType",
                type: "Short"
            },
            41991: {
                name: "GainControl",
                type: "Short"
            },
            41992: {
                name: "Contrast",
                type: "Short"
            },
            41993: {
                name: "Saturation",
                type: "Short"
            },
            41994: {
                name: "Sharpness",
                type: "Short"
            },
            41995: {
                name: "DeviceSettingDescription",
                type: "Undefined"
            },
            41996: {
                name: "SubjectDistanceRange",
                type: "Short"
            },
            42016: {
                name: "ImageUniqueID",
                type: "Ascii"
            },
            42032: {
                name: "CameraOwnerName",
                type: "Ascii"
            },
            42033: {
                name: "BodySerialNumber",
                type: "Ascii"
            },
            42034: {
                name: "LensSpecification",
                type: "Rational"
            },
            42035: {
                name: "LensMake",
                type: "Ascii"
            },
            42036: {
                name: "LensModel",
                type: "Ascii"
            },
            42037: {
                name: "LensSerialNumber",
                type: "Ascii"
            },
            42240: {
                name: "Gamma",
                type: "Rational"
            }
        },
        GPS: {
            0: {
                name: "GPSVersionID",
                type: "Byte"
            },
            1: {
                name: "GPSLatitudeRef",
                type: "Ascii"
            },
            2: {
                name: "GPSLatitude",
                type: "Rational"
            },
            3: {
                name: "GPSLongitudeRef",
                type: "Ascii"
            },
            4: {
                name: "GPSLongitude",
                type: "Rational"
            },
            5: {
                name: "GPSAltitudeRef",
                type: "Byte"
            },
            6: {
                name: "GPSAltitude",
                type: "Rational"
            },
            7: {
                name: "GPSTimeStamp",
                type: "Rational"
            },
            8: {
                name: "GPSSatellites",
                type: "Ascii"
            },
            9: {
                name: "GPSStatus",
                type: "Ascii"
            },
            10: {
                name: "GPSMeasureMode",
                type: "Ascii"
            },
            11: {
                name: "GPSDOP",
                type: "Rational"
            },
            12: {
                name: "GPSSpeedRef",
                type: "Ascii"
            },
            13: {
                name: "GPSSpeed",
                type: "Rational"
            },
            14: {
                name: "GPSTrackRef",
                type: "Ascii"
            },
            15: {
                name: "GPSTrack",
                type: "Rational"
            },
            16: {
                name: "GPSImgDirectionRef",
                type: "Ascii"
            },
            17: {
                name: "GPSImgDirection",
                type: "Rational"
            },
            18: {
                name: "GPSMapDatum",
                type: "Ascii"
            },
            19: {
                name: "GPSDestLatitudeRef",
                type: "Ascii"
            },
            20: {
                name: "GPSDestLatitude",
                type: "Rational"
            },
            21: {
                name: "GPSDestLongitudeRef",
                type: "Ascii"
            },
            22: {
                name: "GPSDestLongitude",
                type: "Rational"
            },
            23: {
                name: "GPSDestBearingRef",
                type: "Ascii"
            },
            24: {
                name: "GPSDestBearing",
                type: "Rational"
            },
            25: {
                name: "GPSDestDistanceRef",
                type: "Ascii"
            },
            26: {
                name: "GPSDestDistance",
                type: "Rational"
            },
            27: {
                name: "GPSProcessingMethod",
                type: "Undefined"
            },
            28: {
                name: "GPSAreaInformation",
                type: "Undefined"
            },
            29: {
                name: "GPSDateStamp",
                type: "Ascii"
            },
            30: {
                name: "GPSDifferential",
                type: "Short"
            },
            31: {
                name: "GPSHPositioningError",
                type: "Rational"
            }
        },
        Interop: {
            1: {
                name: "InteroperabilityIndex",
                type: "Ascii"
            }
        }
    };
    f["0th"] = f.Image,
    f["1st"] = f.Image,
    e.TAGS = f,
    e.ImageIFD = {
        ProcessingSoftware: 11,
        NewSubfileType: 254,
        SubfileType: 255,
        ImageWidth: 256,
        ImageLength: 257,
        BitsPerSample: 258,
        Compression: 259,
        PhotometricInterpretation: 262,
        Threshholding: 263,
        CellWidth: 264,
        CellLength: 265,
        FillOrder: 266,
        DocumentName: 269,
        ImageDescription: 270,
        Make: 271,
        Model: 272,
        StripOffsets: 273,
        Orientation: 274,
        SamplesPerPixel: 277,
        RowsPerStrip: 278,
        StripByteCounts: 279,
        XResolution: 282,
        YResolution: 283,
        PlanarConfiguration: 284,
        GrayResponseUnit: 290,
        GrayResponseCurve: 291,
        T4Options: 292,
        T6Options: 293,
        ResolutionUnit: 296,
        TransferFunction: 301,
        Software: 305,
        DateTime: 306,
        Artist: 315,
        HostComputer: 316,
        Predictor: 317,
        WhitePoint: 318,
        PrimaryChromaticities: 319,
        ColorMap: 320,
        HalftoneHints: 321,
        TileWidth: 322,
        TileLength: 323,
        TileOffsets: 324,
        TileByteCounts: 325,
        SubIFDs: 330,
        InkSet: 332,
        InkNames: 333,
        NumberOfInks: 334,
        DotRange: 336,
        TargetPrinter: 337,
        ExtraSamples: 338,
        SampleFormat: 339,
        SMinSampleValue: 340,
        SMaxSampleValue: 341,
        TransferRange: 342,
        ClipPath: 343,
        XClipPathUnits: 344,
        YClipPathUnits: 345,
        Indexed: 346,
        JPEGTables: 347,
        OPIProxy: 351,
        JPEGProc: 512,
        JPEGInterchangeFormat: 513,
        JPEGInterchangeFormatLength: 514,
        JPEGRestartInterval: 515,
        JPEGLosslessPredictors: 517,
        JPEGPointTransforms: 518,
        JPEGQTables: 519,
        JPEGDCTables: 520,
        JPEGACTables: 521,
        YCbCrCoefficients: 529,
        YCbCrSubSampling: 530,
        YCbCrPositioning: 531,
        ReferenceBlackWhite: 532,
        XMLPacket: 700,
        Rating: 18246,
        RatingPercent: 18249,
        ImageID: 32781,
        CFARepeatPatternDim: 33421,
        CFAPattern: 33422,
        BatteryLevel: 33423,
        Copyright: 33432,
        ExposureTime: 33434,
        ImageResources: 34377,
        ExifTag: 34665,
        InterColorProfile: 34675,
        GPSTag: 34853,
        Interlace: 34857,
        TimeZoneOffset: 34858,
        SelfTimerMode: 34859,
        FlashEnergy: 37387,
        SpatialFrequencyResponse: 37388,
        Noise: 37389,
        FocalPlaneXResolution: 37390,
        FocalPlaneYResolution: 37391,
        FocalPlaneResolutionUnit: 37392,
        ImageNumber: 37393,
        SecurityClassification: 37394,
        ImageHistory: 37395,
        ExposureIndex: 37397,
        TIFFEPStandardID: 37398,
        SensingMethod: 37399,
        XPTitle: 40091,
        XPComment: 40092,
        XPAuthor: 40093,
        XPKeywords: 40094,
        XPSubject: 40095,
        PrintImageMatching: 50341,
        DNGVersion: 50706,
        DNGBackwardVersion: 50707,
        UniqueCameraModel: 50708,
        LocalizedCameraModel: 50709,
        CFAPlaneColor: 50710,
        CFALayout: 50711,
        LinearizationTable: 50712,
        BlackLevelRepeatDim: 50713,
        BlackLevel: 50714,
        BlackLevelDeltaH: 50715,
        BlackLevelDeltaV: 50716,
        WhiteLevel: 50717,
        DefaultScale: 50718,
        DefaultCropOrigin: 50719,
        DefaultCropSize: 50720,
        ColorMatrix1: 50721,
        ColorMatrix2: 50722,
        CameraCalibration1: 50723,
        CameraCalibration2: 50724,
        ReductionMatrix1: 50725,
        ReductionMatrix2: 50726,
        AnalogBalance: 50727,
        AsShotNeutral: 50728,
        AsShotWhiteXY: 50729,
        BaselineExposure: 50730,
        BaselineNoise: 50731,
        BaselineSharpness: 50732,
        BayerGreenSplit: 50733,
        LinearResponseLimit: 50734,
        CameraSerialNumber: 50735,
        LensInfo: 50736,
        ChromaBlurRadius: 50737,
        AntiAliasStrength: 50738,
        ShadowScale: 50739,
        DNGPrivateData: 50740,
        MakerNoteSafety: 50741,
        CalibrationIlluminant1: 50778,
        CalibrationIlluminant2: 50779,
        BestQualityScale: 50780,
        RawDataUniqueID: 50781,
        OriginalRawFileName: 50827,
        OriginalRawFileData: 50828,
        ActiveArea: 50829,
        MaskedAreas: 50830,
        AsShotICCProfile: 50831,
        AsShotPreProfileMatrix: 50832,
        CurrentICCProfile: 50833,
        CurrentPreProfileMatrix: 50834,
        ColorimetricReference: 50879,
        CameraCalibrationSignature: 50931,
        ProfileCalibrationSignature: 50932,
        AsShotProfileName: 50934,
        NoiseReductionApplied: 50935,
        ProfileName: 50936,
        ProfileHueSatMapDims: 50937,
        ProfileHueSatMapData1: 50938,
        ProfileHueSatMapData2: 50939,
        ProfileToneCurve: 50940,
        ProfileEmbedPolicy: 50941,
        ProfileCopyright: 50942,
        ForwardMatrix1: 50964,
        ForwardMatrix2: 50965,
        PreviewApplicationName: 50966,
        PreviewApplicationVersion: 50967,
        PreviewSettingsName: 50968,
        PreviewSettingsDigest: 50969,
        PreviewColorSpace: 50970,
        PreviewDateTime: 50971,
        RawImageDigest: 50972,
        OriginalRawFileDigest: 50973,
        SubTileBlockSize: 50974,
        RowInterleaveFactor: 50975,
        ProfileLookTableDims: 50981,
        ProfileLookTableData: 50982,
        OpcodeList1: 51008,
        OpcodeList2: 51009,
        OpcodeList3: 51022,
        NoiseProfile: 51041
    },
    e.ExifIFD = {
        ExposureTime: 33434,
        FNumber: 33437,
        ExposureProgram: 34850,
        SpectralSensitivity: 34852,
        ISOSpeedRatings: 34855,
        OECF: 34856,
        SensitivityType: 34864,
        StandardOutputSensitivity: 34865,
        RecommendedExposureIndex: 34866,
        ISOSpeed: 34867,
        ISOSpeedLatitudeyyy: 34868,
        ISOSpeedLatitudezzz: 34869,
        ExifVersion: 36864,
        DateTimeOriginal: 36867,
        DateTimeDigitized: 36868,
        ComponentsConfiguration: 37121,
        CompressedBitsPerPixel: 37122,
        ShutterSpeedValue: 37377,
        ApertureValue: 37378,
        BrightnessValue: 37379,
        ExposureBiasValue: 37380,
        MaxApertureValue: 37381,
        SubjectDistance: 37382,
        MeteringMode: 37383,
        LightSource: 37384,
        Flash: 37385,
        FocalLength: 37386,
        SubjectArea: 37396,
        MakerNote: 37500,
        UserComment: 37510,
        SubSecTime: 37520,
        SubSecTimeOriginal: 37521,
        SubSecTimeDigitized: 37522,
        FlashpixVersion: 40960,
        ColorSpace: 40961,
        PixelXDimension: 40962,
        PixelYDimension: 40963,
        RelatedSoundFile: 40964,
        InteroperabilityTag: 40965,
        FlashEnergy: 41483,
        SpatialFrequencyResponse: 41484,
        FocalPlaneXResolution: 41486,
        FocalPlaneYResolution: 41487,
        FocalPlaneResolutionUnit: 41488,
        SubjectLocation: 41492,
        ExposureIndex: 41493,
        SensingMethod: 41495,
        FileSource: 41728,
        SceneType: 41729,
        CFAPattern: 41730,
        CustomRendered: 41985,
        ExposureMode: 41986,
        WhiteBalance: 41987,
        DigitalZoomRatio: 41988,
        FocalLengthIn35mmFilm: 41989,
        SceneCaptureType: 41990,
        GainControl: 41991,
        Contrast: 41992,
        Saturation: 41993,
        Sharpness: 41994,
        DeviceSettingDescription: 41995,
        SubjectDistanceRange: 41996,
        ImageUniqueID: 42016,
        CameraOwnerName: 42032,
        BodySerialNumber: 42033,
        LensSpecification: 42034,
        LensMake: 42035,
        LensModel: 42036,
        LensSerialNumber: 42037,
        Gamma: 42240
    },
    e.GPSIFD = {
        GPSVersionID: 0,
        GPSLatitudeRef: 1,
        GPSLatitude: 2,
        GPSLongitudeRef: 3,
        GPSLongitude: 4,
        GPSAltitudeRef: 5,
        GPSAltitude: 6,
        GPSTimeStamp: 7,
        GPSSatellites: 8,
        GPSStatus: 9,
        GPSMeasureMode: 10,
        GPSDOP: 11,
        GPSSpeedRef: 12,
        GPSSpeed: 13,
        GPSTrackRef: 14,
        GPSTrack: 15,
        GPSImgDirectionRef: 16,
        GPSImgDirection: 17,
        GPSMapDatum: 18,
        GPSDestLatitudeRef: 19,
        GPSDestLatitude: 20,
        GPSDestLongitudeRef: 21,
        GPSDestLongitude: 22,
        GPSDestBearingRef: 23,
        GPSDestBearing: 24,
        GPSDestDistanceRef: 25,
        GPSDestDistance: 26,
        GPSProcessingMethod: 27,
        GPSAreaInformation: 28,
        GPSDateStamp: 29,
        GPSDifferential: 30,
        GPSHPositioningError: 31
    },
    e.InteropIFD = {
        InteroperabilityIndex: 1
    },
    e.GPSHelper = {
        degToDmsRational: function (e) {
            let t = Math.abs(e),
            i = t % 1 * 60,
            n = i % 1 * 60;
            return [[Math.floor(t), 1], [Math.floor(i), 1], [Math.round(100 * n), 100]]
        },
        dmsRationalToDeg: function (e, t) {
            let i = "S" === t || "W" === t ? -1 : 1;
            return (e[0][0] / e[0][1] + e[1][0] / e[1][1] / 60 + e[2][0] / e[2][1] / 3600) * i
        }
    },
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = e), exports.piexif = e) : window.piexif = e
}
();
