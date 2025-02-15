/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [938],
  {
    35350: (e) => {
      e.exports = {
        Frame: "replay2022_Frame_1C1Yh",
        SteamLogo: "replay2022_SteamLogo_1pv40",
        ReplayLogo: "replay2022_ReplayLogo_3dizB",
        Hashtag: "replay2022_Hashtag_2rfOn",
        Content: "replay2022_Content_2snHz",
        Avatar: "replay2022_Avatar_1UrOy",
        DataBlock: "replay2022_DataBlock_1RIqD",
        PersonaName: "replay2022_PersonaName_npXR-",
        ReplayHighlight: "replay2022_ReplayHighlight_3swaC",
        GenericTitleBlock: "replay2022_GenericTitleBlock_GlPgK",
        ViewPageButton: "replay2022_ViewPageButton_3epsf",
        Description: "replay2022_Description_NyKPE",
      };
    },
    92994: (e) => {
      "use strict";
      var t,
        r = (function () {
          function e(e, t) {
            if ("function" != typeof e)
              throw new TypeError(
                "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but got: " +
                  e +
                  "."
              );
            (this._batchLoadFn = e),
              (this._maxBatchSize = (function (e) {
                var t = !e || !1 !== e.batch;
                if (!t) return 1;
                var r = e && e.maxBatchSize;
                if (void 0 === r) return 1 / 0;
                if ("number" != typeof r || r < 1)
                  throw new TypeError(
                    "maxBatchSize must be a positive number: " + r
                  );
                return r;
              })(t)),
              (this._batchScheduleFn = (function (e) {
                var t = e && e.batchScheduleFn;
                if (void 0 === t) return n;
                if ("function" != typeof t)
                  throw new TypeError(
                    "batchScheduleFn must be a function: " + t
                  );
                return t;
              })(t)),
              (this._cacheKeyFn = (function (e) {
                var t = e && e.cacheKeyFn;
                if (void 0 === t)
                  return function (e) {
                    return e;
                  };
                if ("function" != typeof t)
                  throw new TypeError("cacheKeyFn must be a function: " + t);
                return t;
              })(t)),
              (this._cacheMap = (function (e) {
                var t = !e || !1 !== e.cache;
                if (!t) return null;
                var r = e && e.cacheMap;
                if (void 0 === r) return new Map();
                if (null !== r) {
                  var n = ["get", "set", "delete", "clear"].filter(function (
                    e
                  ) {
                    return r && "function" != typeof r[e];
                  });
                  if (0 !== n.length)
                    throw new TypeError(
                      "Custom cacheMap missing methods: " + n.join(", ")
                    );
                }
                return r;
              })(t)),
              (this._batch = null),
              (this.name = (function (e) {
                if (e && e.name) return e.name;
                return null;
              })(t));
          }
          var t = e.prototype;
          return (
            (t.load = function (e) {
              if (null == e)
                throw new TypeError(
                  "The loader.load() function must be called with a value, but got: " +
                    String(e) +
                    "."
                );
              var t = (function (e) {
                  var t = e._batch;
                  if (
                    null !== t &&
                    !t.hasDispatched &&
                    t.keys.length < e._maxBatchSize
                  )
                    return t;
                  var r = { hasDispatched: !1, keys: [], callbacks: [] };
                  return (
                    (e._batch = r),
                    e._batchScheduleFn(function () {
                      !(function (e, t) {
                        if (((t.hasDispatched = !0), 0 === t.keys.length))
                          return void c(t);
                        var r;
                        try {
                          r = e._batchLoadFn(t.keys);
                        } catch (r) {
                          return a(
                            e,
                            t,
                            new TypeError(
                              "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function errored synchronously: " +
                                String(r) +
                                "."
                            )
                          );
                        }
                        if (!r || "function" != typeof r.then)
                          return a(
                            e,
                            t,
                            new TypeError(
                              "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise: " +
                                String(r) +
                                "."
                            )
                          );
                        r.then(function (e) {
                          if (!o(e))
                            throw new TypeError(
                              "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array: " +
                                String(e) +
                                "."
                            );
                          if (e.length !== t.keys.length)
                            throw new TypeError(
                              "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys.\n\nKeys:\n" +
                                String(t.keys) +
                                "\n\nValues:\n" +
                                String(e)
                            );
                          c(t);
                          for (var r = 0; r < t.callbacks.length; r++) {
                            var n = e[r];
                            n instanceof Error
                              ? t.callbacks[r].reject(n)
                              : t.callbacks[r].resolve(n);
                          }
                        }).catch(function (r) {
                          a(e, t, r);
                        });
                      })(e, r);
                    }),
                    r
                  );
                })(this),
                r = this._cacheMap,
                n = this._cacheKeyFn(e);
              if (r) {
                var i = r.get(n);
                if (i) {
                  var l = t.cacheHits || (t.cacheHits = []);
                  return new Promise(function (e) {
                    l.push(function () {
                      e(i);
                    });
                  });
                }
              }
              t.keys.push(e);
              var s = new Promise(function (e, r) {
                t.callbacks.push({ resolve: e, reject: r });
              });
              return r && r.set(n, s), s;
            }),
            (t.loadMany = function (e) {
              if (!o(e))
                throw new TypeError(
                  "The loader.loadMany() function must be called with Array<key> but got: " +
                    e +
                    "."
                );
              for (var t = [], r = 0; r < e.length; r++)
                t.push(
                  this.load(e[r]).catch(function (e) {
                    return e;
                  })
                );
              return Promise.all(t);
            }),
            (t.clear = function (e) {
              var t = this._cacheMap;
              if (t) {
                var r = this._cacheKeyFn(e);
                t.delete(r);
              }
              return this;
            }),
            (t.clearAll = function () {
              var e = this._cacheMap;
              return e && e.clear(), this;
            }),
            (t.prime = function (e, t) {
              var r = this._cacheMap;
              if (r) {
                var n,
                  a = this._cacheKeyFn(e);
                if (void 0 === r.get(a))
                  t instanceof Error
                    ? (n = Promise.reject(t)).catch(function () {})
                    : (n = Promise.resolve(t)),
                    r.set(a, n);
              }
              return this;
            }),
            e
          );
        })(),
        n =
          "object" == typeof process && "function" == typeof process.nextTick
            ? function (e) {
                t || (t = Promise.resolve()),
                  t.then(function () {
                    process.nextTick(e);
                  });
              }
            : "function" == typeof setImmediate
            ? function (e) {
                setImmediate(e);
              }
            : function (e) {
                setTimeout(e);
              };
      function a(e, t, r) {
        c(t);
        for (var n = 0; n < t.keys.length; n++)
          e.clear(t.keys[n]), t.callbacks[n].reject(r);
      }
      function c(e) {
        if (e.cacheHits)
          for (var t = 0; t < e.cacheHits.length; t++) e.cacheHits[t]();
      }
      function o(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          "number" == typeof e.length &&
          (0 === e.length ||
            (e.length > 0 &&
              Object.prototype.hasOwnProperty.call(e, e.length - 1)))
        );
      }
      e.exports = r;
    },
    20285: (e, t, r) => {
      "use strict";
      r.d(t, { F: () => d, t: () => m });
      var n = r(33940),
        a = r(52868),
        c = r.n(a),
        o = r(92994),
        i = r.n(o),
        l = r(89526),
        s = r(5615),
        u = r(47165),
        C = r(23217),
        h = r(32765);
      const f = new (i())(
          (e) =>
            (function (e) {
              var t, r, a, o;
              return (0, n.mG)(this, void 0, void 0, function* () {
                if (!e || 0 == e.length) return [];
                const n =
                  "community" == (0, h.Zv)()
                    ? h.De.COMMUNITY_BASE_URL
                    : h.De.STORE_BASE_URL;
                if (1 == e.length) {
                  const a = { accountid: e[0], origin: self.origin },
                    o = yield c().get(`${n}actions/ajaxgetavatarpersona`, {
                      params: a,
                    });
                  if (
                    !o ||
                    200 != o.status ||
                    1 !=
                      (null === (t = o.data) || void 0 === t
                        ? void 0
                        : t.success) ||
                    !(null === (r = o.data) || void 0 === r
                      ? void 0
                      : r.userinfo)
                  )
                    throw `Load single avatar/persona failed ${
                      (0, C.l)(o).strErrorMsg
                    }`;
                  return [o.data.userinfo];
                }
                {
                  const t = { accountids: e.join(","), origin: self.origin },
                    r = yield c().get(`${n}actions/ajaxgetmultiavatarpersona`, {
                      params: t,
                    });
                  if (
                    !r ||
                    200 != r.status ||
                    1 !=
                      (null === (a = r.data) || void 0 === a
                        ? void 0
                        : a.success) ||
                    !(null === (o = r.data) || void 0 === o
                      ? void 0
                      : o.userinfos)
                  )
                    throw `Load single avatar/persona failed ${
                      (0, C.l)(r).strErrorMsg
                    }`;
                  const i = new Map();
                  return (
                    r.data.userinfos.forEach((e) =>
                      i.set(new u.K(e.steamid).GetAccountID(), e)
                    ),
                    e.map((e) => i.get(e))
                  );
                }
              });
            })(e),
          { cache: !1 }
        ),
        p = "avatarandpersonas";
      function d(e) {
        const { data: t, isLoading: r } = (0, s.useQuery)([p, e], () =>
          f.load(e)
        );
        return [t, r];
      }
      function m(e) {
        const t = (0, s.useQueryClient)(),
          { data: r, isLoading: n } = (0, s.useQuery)({
            queryKey: [p, e],
            queryFn: () => f.loadMany(e),
            onSuccess(e) {
              e.forEach((e) => {
                const r = [p, new u.K(e.steamid).GetAccountID()];
                t.setQueryData(r, e);
              });
            },
            enabled: (null == e ? void 0 : e.length) > 0,
          }),
          a = (0, l.useMemo)(() => {
            const e = new Array();
            return (
              null == r ||
                r.forEach((t) => {
                  t instanceof Error || e.push(t);
                }),
              e
            );
          }, [r]);
        return n ? null : a;
      }
    },
    75176: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => h });
      var n = r(89526),
        a = r(35350),
        c = r(20285),
        o = r(32765),
        i = r(14826),
        l = r(51438),
        s = r(71161),
        u = r(60161),
        C = r(10317);
      function h(e) {
        const t = v();
        return n.createElement(
          "div",
          { className: a.Frame, onClick: t },
          n.createElement(m, { className: a.ReplayLogo }),
          n.createElement(d, { className: a.SteamLogo }),
          n.createElement(y, null),
          n.createElement(
            "div",
            { className: a.Content },
            n.createElement(f, null),
            n.createElement(p, null),
            n.createElement(
              "div",
              { className: a.Description },
              (0, i.Xx)("#YIR_MM_Generic_Desc")
            )
          )
        );
      }
      function f() {
        const [e] = (0, c.F)(o.L7.accountid);
        return e
          ? n.createElement(
              n.Fragment,
              null,
              n.createElement(
                "div",
                { className: a.Avatar },
                e &&
                  e.avatar_url &&
                  n.createElement("img", {
                    src: e.avatar_url.replace(/\.jpg$/, "_full.jpg"),
                  })
              ),
              n.createElement(
                "div",
                { className: a.DataBlock },
                n.createElement(
                  "div",
                  { className: a.PersonaName },
                  e ? e.persona_name : ""
                ),
                n.createElement(
                  "div",
                  { className: a.GenericTitleBlock },
                  (0, i.yu)(
                    "#YIR_MM_Generic_Title",
                    n.createElement("span", { className: a.ReplayHighlight })
                  )
                )
              )
            )
          : null;
      }
      function p() {
        const e = v();
        return n.createElement(
          l.s,
          { className: a.ViewPageButton, onActivate: e },
          (0, i.Xx)("#YIR_MM_Generic_Action")
        );
      }
      function d(e) {
        return n.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 476 600",
              fill: "none",
            },
            e
          ),
          n.createElement("path", {
            fill: "currentColor",
            d: "M120.149 -86.0844C-66.5487 -86.0844 -219.429 57.91 -234 240.963L-43.5621 319.782C-27.4326 308.711 -7.95244 302.318 13.0861 302.318C14.9562 302.318 16.8263 302.318 18.6964 302.474L103.396 179.608C103.396 179.062 103.396 178.438 103.396 177.892C103.396 103.985 163.551 43.7991 237.419 43.7991C311.288 43.7991 371.443 103.985 371.443 177.892C371.443 251.8 311.288 311.986 237.419 311.986C236.406 311.986 235.394 311.986 234.381 311.986L113.604 398.211C113.604 399.77 113.682 401.407 113.682 402.966C113.682 458.475 68.5656 503.614 13.0861 503.614C-35.6142 503.614 -76.2888 468.844 -85.5613 422.769L-221.766 366.325C-179.611 515.542 -42.5491 625 120.149 625C316.431 625 475.467 465.803 475.467 269.497C475.467 73.1904 316.353 -86.0844 120.149 -86.0844Z",
            fillOpacity: "0.15",
          }),
          n.createElement("path", {
            fill: "currentColor",
            d: "M-11.3061 453.406L-54.9417 435.397C-47.2275 451.535 -33.8252 465.022 -16.0593 472.429C22.3556 488.411 66.6145 470.168 82.6661 431.733C90.3802 413.1 90.4582 392.596 82.744 373.964C75.1078 355.331 60.6146 340.752 41.9915 333.034C23.5244 325.316 3.73256 325.628 -13.6437 332.176L31.4723 350.809C59.8354 362.659 73.2377 395.169 61.3938 423.547C49.6278 451.925 17.057 465.334 -11.3061 453.484V453.406Z",
            fillOpacity: "0.15",
          }),
          n.createElement("path", {
            fill: "currentColor",
            d: "M326.71 177.812C326.71 128.541 286.659 88.4688 237.413 88.4688C188.167 88.4688 148.116 128.541 148.116 177.812C148.116 227.084 188.167 267.156 237.413 267.156C286.659 267.156 326.71 227.084 326.71 177.812ZM170.479 177.656C170.479 140.625 200.557 110.532 237.569 110.532C274.581 110.532 304.658 140.547 304.658 177.656C304.658 214.766 274.659 244.781 237.569 244.781C200.479 244.781 170.479 214.766 170.479 177.656Z",
            fillOpacity: "0.15",
          })
        );
      }
      function m(e) {
        return n.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 181 73",
              fill: "none",
            },
            e
          ),
          n.createElement("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M23.2213 0C17.4482 0.00172977 11.8873 2.17351 7.64545 6.08314C3.40358 9.99277 0.791694 15.3536 0.32959 21.0987L12.6419 26.1835C13.7181 25.445 14.9936 25.0504 16.2994 25.0519H16.6621L22.1382 17.1305V17.0399C22.1382 15.329 22.6464 13.6564 23.5985 12.2338C24.5506 10.8112 25.9039 9.70245 27.4872 9.0477C29.0705 8.39295 30.8128 8.22163 32.4936 8.55542C34.1745 8.88921 35.7184 9.71311 36.9303 10.9229C38.1421 12.1328 38.9673 13.6742 39.3017 15.3522C39.636 17.0303 39.4644 18.7697 38.8086 20.3504C38.1528 21.9311 37.0421 23.2822 35.6172 24.2327C34.1922 25.1833 32.517 25.6907 30.8032 25.6907H30.6218L22.8132 31.2533V31.5601C22.8098 33.1681 22.2087 34.7177 21.1265 35.9087C20.0443 37.0998 18.5579 37.8475 16.9551 38.0071C15.3524 38.1668 13.7473 37.7269 12.4507 36.7729C11.1541 35.8188 10.2583 34.4183 9.93666 32.8426L1.1306 29.2063C2.29301 33.3131 4.58013 37.0146 7.7347 39.8946C10.8893 42.7746 14.7862 44.7187 18.987 45.5082C23.1879 46.2978 27.5261 45.9015 31.5138 44.364C35.5014 42.8264 38.9802 40.2086 41.5589 36.805C44.1376 33.4013 45.7139 29.3468 46.1105 25.0976C46.5071 20.8484 45.7083 16.5729 43.8039 12.7522C41.8995 8.9315 38.9651 5.71705 35.3307 3.47042C31.6963 1.2238 27.5061 0.034119 23.2314 0.0352101L23.2213 0ZM14.7278 34.804L11.9016 33.6371C12.3115 34.4904 12.9613 35.2061 13.7719 35.6969C14.5824 36.1876 15.5185 36.4321 16.4659 36.4006C17.4133 36.369 18.331 36.0628 19.107 35.5193C19.8829 34.9757 20.4836 34.2184 20.8357 33.3397C21.1877 32.461 21.2759 31.499 21.0895 30.5712C20.903 29.6433 20.45 28.7897 19.7858 28.1145C19.1215 27.4394 18.2747 26.9719 17.3488 26.7692C16.4229 26.5665 15.4579 26.6373 14.5716 26.973L17.4885 28.1801C18.3439 28.5615 19.0162 29.2614 19.362 30.1307C19.7079 30.9999 19.6998 31.9696 19.3397 32.833C18.9796 33.6964 18.2958 34.3852 17.4343 34.7524C16.5727 35.1197 15.6015 35.1364 14.7278 34.7989V34.804ZM35.606 13.8365C36.2398 14.785 36.5776 15.8999 36.5766 17.04C36.5726 18.567 35.9629 20.0302 34.8809 21.1095C33.7989 22.1887 32.3327 22.7962 30.8032 22.7988C29.6612 22.7988 28.5448 22.4606 27.5953 21.8271C26.6457 21.1935 25.9058 20.293 25.4689 19.2396C25.0321 18.1861 24.9181 17.0269 25.1413 15.9087C25.3644 14.7905 25.9148 13.7635 26.7227 12.9576C27.5306 12.1517 28.5598 11.6032 29.68 11.3814C30.8003 11.1595 31.9612 11.2744 33.0161 11.7114C34.0709 12.1484 34.9723 12.888 35.606 13.8365ZM27.2044 14.6328C26.7283 15.3456 26.4748 16.1834 26.4758 17.04C26.4771 18.1877 26.9347 19.2878 27.748 20.0988C28.5613 20.9099 29.6638 21.3654 30.8133 21.3654C31.6714 21.3654 32.5102 21.1113 33.2237 20.6353C33.9371 20.1592 34.493 19.4826 34.8212 18.691C35.1493 17.8995 35.2349 17.0285 35.0672 16.1883C34.8994 15.3482 34.4858 14.5766 33.8786 13.9712C33.2715 13.3658 32.4982 12.9537 31.6565 12.7872C30.8147 12.6207 29.9424 12.7072 29.1499 13.0357C28.3574 13.3642 27.6804 13.92 27.2044 14.6328Z",
          }),
          n.createElement("path", {
            fill: "#4AD4FF",
            d: "M31.635 45.874C31.5218 45.874 31.4969 45.716 31.6033 45.6773C40.8922 42.2999 47.5266 33.3932 47.5266 22.937C47.5266 12.4808 40.8922 3.57411 31.6033 0.196722C31.4969 0.15803 31.5218 0 31.635 0C44.3028 0 54.5721 10.2692 54.5721 22.937C54.5721 35.6048 44.3028 45.874 31.635 45.874Z",
          }),
          n.createElement("path", {
            fill: "#4AD4FF",
            d: "M39.9974 45.874C39.8841 45.874 39.8592 45.716 39.9656 45.6773C49.2545 42.2999 55.8889 33.3932 55.8889 22.937C55.8889 12.4808 49.2545 3.57411 39.9656 0.196722C39.8592 0.15803 39.8841 0 39.9974 0C52.6651 0 62.9344 10.2692 62.9344 22.937C62.9344 35.6048 52.6651 45.874 39.9974 45.874Z",
          }),
          n.createElement("path", {
            fill: "#4AD4FF",
            d: "M133.101 67.4439H141.063V72.1116H126.127V67.691L131.7 63.243C132.744 62.401 133.467 61.7329 133.869 61.2387C134.29 60.7262 134.501 60.1679 134.501 59.5638C134.501 58.85 134.208 58.31 133.622 57.9439C133.055 57.5778 132.341 57.3948 131.481 57.3948C130.126 57.3948 128.854 57.7334 127.664 58.4107L125.962 54.3196C127.811 53.1481 129.98 52.5624 132.469 52.5624C134.867 52.5624 136.798 53.0474 138.263 54.0176C139.745 54.9694 140.487 56.4155 140.487 58.3557C140.487 59.5821 140.139 60.7079 139.443 61.7329C138.766 62.758 137.732 63.8196 136.341 64.9179L133.101 67.4439Z",
          }),
          n.createElement("path", {
            fill: "#4AD4FF",
            d: "M115.425 67.4439H123.388V72.1116H108.451V67.691L114.025 63.243C115.068 62.401 115.791 61.7329 116.194 61.2387C116.615 60.7262 116.826 60.1679 116.826 59.5638C116.826 58.85 116.533 58.31 115.947 57.9439C115.38 57.5778 114.666 57.3948 113.805 57.3948C112.451 57.3948 111.179 57.7334 109.989 58.4107L108.287 54.3196C110.135 53.1481 112.304 52.5624 114.794 52.5624C117.192 52.5624 119.123 53.0474 120.587 54.0176C122.07 54.9694 122.811 56.4155 122.811 58.3557C122.811 59.5821 122.463 60.7079 121.768 61.7329C121.091 62.758 120.056 63.8196 118.665 64.9179L115.425 67.4439Z",
          }),
          n.createElement("path", {
            fill: "#4AD4FF",
            d: "M97.7846 52.1334C99.4137 52.1334 100.887 52.4995 102.205 53.2317C103.541 53.9456 104.603 55.0347 105.39 56.499C106.177 57.9634 106.571 59.7664 106.571 61.908C106.571 63.9581 106.205 65.7703 105.473 67.3444C104.74 68.9186 103.706 70.145 102.37 71.0236C101.034 71.884 99.487 72.3141 97.7297 72.3141C96.1006 72.3141 94.618 71.9389 93.2817 71.1884C91.9455 70.4196 90.8747 69.2939 90.0693 67.8112C89.2822 66.3102 88.8887 64.4889 88.8887 62.3473C88.8887 60.3155 89.2548 58.5308 89.9869 56.9933C90.7191 55.4374 91.7533 54.2384 93.0895 53.3964C94.4441 52.5544 96.0091 52.1334 97.7846 52.1334ZM97.7572 56.8285C95.7803 56.8285 94.7919 58.5857 94.7919 62.1002C94.7919 63.8208 95.0298 65.1754 95.5057 66.1638C95.9817 67.1339 96.723 67.619 97.7297 67.619C98.7365 67.619 99.4778 67.1431 99.9537 66.1913C100.43 65.2211 100.668 63.8574 100.668 62.1002C100.668 58.5857 99.6975 56.8285 97.7572 56.8285Z",
          }),
          n.createElement("path", {
            fill: "#4AD4FF",
            d: "M79.21 67.4439H87.1725V72.1116H72.236V67.691L77.8097 63.243C78.8531 62.401 79.5761 61.7329 79.9788 61.2387C80.3998 60.7262 80.6103 60.1679 80.6103 59.5638C80.6103 58.85 80.3175 58.31 79.7317 57.9439C79.1643 57.5778 78.4504 57.3948 77.5901 57.3948C76.2356 57.3948 74.9634 57.7334 73.7736 58.4107L72.0713 54.3196C73.92 53.1481 76.0891 52.5624 78.5785 52.5624C80.9764 52.5624 82.9075 53.0474 84.3719 54.0176C85.8546 54.9694 86.5959 56.4155 86.5959 58.3557C86.5959 59.5821 86.2481 60.7079 85.5525 61.7329C84.8753 62.758 83.8411 63.8196 82.4499 64.9179L79.21 67.4439Z",
          }),
          n.createElement("path", {
            fill: "currentColor",
            d: "M173.658 45.6982H168.166V38.0378L161.522 26.4785H167.837L171.104 32.7112L174.454 26.4785H180.33L173.658 38.0927V45.6982Z",
          }),
          n.createElement("path", {
            fill: "currentColor",
            d: "M164.514 45.6982H158.611L157.623 42.8153H151.198L150.264 45.6982H144.526L151.774 26.4785H156.936L164.514 45.6982ZM154.328 33.0407L152.571 38.5595H156.195L154.328 33.0407Z",
          }),
          n.createElement("path", {
            fill: "currentColor",
            d: "M141.952 45.6982H127.949V26.4785H133.441V40.756H141.952V45.6982Z",
          }),
          n.createElement("path", {
            fill: "currentColor",
            d: "M109.378 45.6982V26.4785H116.874C119.491 26.4785 121.486 27.0643 122.859 28.2357C124.25 29.3889 124.946 30.9448 124.946 32.9034C124.946 34.2213 124.635 35.4294 124.012 36.5277C123.408 37.6076 122.493 38.4771 121.267 39.1361C120.04 39.7767 118.567 40.097 116.846 40.097H114.869V45.6982H109.378ZM116.819 35.4294C117.533 35.4294 118.082 35.2281 118.466 34.8254C118.869 34.4227 119.07 33.8827 119.07 33.2054C119.07 32.5464 118.869 32.0431 118.466 31.6953C118.063 31.3292 117.496 31.1462 116.764 31.1462H114.869V35.4294H116.819Z",
          }),
          n.createElement("path", {
            fill: "currentColor",
            d: "M92.2725 26.4785H105.946V31.1462H97.7638V33.7271H104.628V38.3947H97.7638V41.0306H105.946V45.6982H92.2725V26.4785Z",
          }),
          n.createElement("path", {
            fill: "currentColor",
            d: "M89.6986 45.6982H83.6032L80.226 40.0147H78.1393V45.6982H72.6479V26.4785H80.4182C83.2737 26.4785 85.397 27.0277 86.7882 28.1259C88.1793 29.2059 88.8749 30.7801 88.8749 32.8485C88.8749 35.7223 87.7125 37.7449 85.3879 38.9164L89.6986 45.6982ZM78.1393 31.1462V35.347H80.1436C81.0222 35.347 81.7178 35.1731 82.2303 34.8254C82.7429 34.4593 82.9991 33.8827 82.9991 33.0956C82.9991 32.4366 82.7703 31.9516 82.3127 31.6404C81.8734 31.3109 81.1687 31.1462 80.1985 31.1462H78.1393Z",
          }),
          n.createElement("path", {
            fill: "currentColor",
            d: "M145.367 19.6489H139.464L138.475 16.7659H132.05L131.117 19.6489H125.378L132.627 0.429199H137.789L145.367 19.6489ZM135.18 6.99135L133.423 12.5102H137.048L135.18 6.99135Z",
          }),
          n.createElement("path", {
            fill: "currentColor",
            d: "M158.814 12.0159L163.921 0.429199H169.33V19.6489H164.113V9.59974L160.132 18.7428H157.002L152.883 9.87431V19.6489H147.941V0.429199H153.048L158.814 12.0159Z",
          }),
          n.createElement("path", {
            fill: "currentColor",
            d: "M99.9157 19.6489H94.4244V5.09684H89.0703V0.429199H105.27V5.09684H99.9157V19.6489Z",
          }),
          n.createElement("path", {
            fill: "currentColor",
            d: "M108.702 0.429199H122.376V5.09684H114.193V7.67777H121.058V12.3454H114.193V14.9813H122.376V19.6489H108.702V0.429199Z",
          }),
          n.createElement("path", {
            fill: "currentColor",
            d: "M79.7866 0C81.1412 0 82.4225 0.192197 83.6306 0.576592C84.8387 0.960985 85.818 1.4369 86.5684 2.00434L84.2621 6.06793C83.6397 5.61032 82.9075 5.23508 82.0655 4.94221C81.2418 4.63103 80.4822 4.47545 79.7866 4.47545C79.1826 4.47545 78.725 4.59442 78.4138 4.83238C78.1026 5.07034 77.947 5.37236 77.947 5.73845C77.947 6.19607 78.185 6.553 78.6609 6.80927C79.1368 7.06553 79.8873 7.34925 80.9124 7.66042C82.1388 8.04482 83.1455 8.42921 83.9326 8.81361C84.738 9.198 85.4336 9.78374 86.0193 10.5708C86.6234 11.3579 86.9254 12.3921 86.9254 13.6734C86.9254 15.0097 86.5684 16.1629 85.8546 17.133C85.159 18.0848 84.198 18.8079 82.9716 19.3021C81.7452 19.7963 80.3541 20.0434 78.7982 20.0434C77.5535 20.0434 76.2996 19.8878 75.0366 19.5766C73.7736 19.2655 72.6662 18.8262 71.7144 18.2587L73.3343 13.7009C75.3844 14.726 77.2515 15.2385 78.9355 15.2385C79.5944 15.2385 80.0978 15.1195 80.4456 14.8815C80.7934 14.6253 80.9673 14.2958 80.9673 13.8931C80.9673 13.4721 80.7568 13.1426 80.3358 12.9047C79.9331 12.6667 79.2833 12.4287 78.3863 12.1908C77.0318 11.8064 75.9335 11.4311 75.0915 11.0651C74.2678 10.699 73.5631 10.1224 72.9774 9.33528C72.3916 8.52989 72.0987 7.45907 72.0987 6.12285C72.0987 4.84154 72.4191 3.74327 73.0597 2.82804C73.7187 1.91282 74.6248 1.21725 75.7779 0.741332C76.9494 0.247111 78.2857 0 79.7866 0Z",
          })
        );
      }
      function y() {
        return n.createElement(
          "div",
          { className: a.Hashtag },
          (0, i.Xx)("#YIR_MM_HashTag")
        );
      }
      function v() {
        const e = (0, C.U)().GetTemplateVars();
        let t = (0, s.YR)(e.linkurl);
        return (
          t.startsWith("steam://") || (t = `steam://openurl/${t}`),
          n.useCallback(
            (e) => {
              (0, u.RA)(e).location.href = t;
            },
            [t]
          )
        );
      }
    },
  },
]);
