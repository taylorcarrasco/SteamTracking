/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [3207],
  {
    16646: (e) => {
      e.exports = {
        VideoReviewCtn: "twitchembed_VideoReviewCtn_nNaTz",
        YouTubePreviewImage: "twitchembed_YouTubePreviewImage__mxmF",
        TwitchPlayer: "twitchembed_TwitchPlayer_Ny5PH",
      };
    },
    95771: (e) => {
      e.exports = { BreadContainer: "breadcrumbs_BreadContainer_1QPim" };
    },
    51857: (e) => {
      e.exports = {
        YoutubePreviewImage: "youtubepreviewimage_YoutubePreviewImage_MzScK",
        YoutubePlayer: "youtubepreviewimage_YoutubePlayer_3uK6c",
      };
    },
    94608: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        CuratorListCtn: "curatorlist_CuratorListCtn_2gWFd",
        CuratorMoreCtn: "curatorlist_CuratorMoreCtn_16t3P",
        TopReviewInfo: "curatorlist_TopReviewInfo_3SZBz",
        SaleBanner: "curatorlist_SaleBanner_1wbf-",
        Title: "curatorlist_Title_1MhFd",
        Blurb: "curatorlist_Blurb_rrcHS",
        VideoReviewCtn: "curatorlist_VideoReviewCtn_Rojwr",
        YouTubePreviewImage: "curatorlist_YouTubePreviewImage_eObSf",
        CuratorList: "curatorlist_CuratorList_1VI6G",
        CuratorListGrid: "curatorlist_CuratorListGrid_qJM6j",
        CuratorReview: "curatorlist_CuratorReview_31hoQ",
        CapsuleCtn: "curatorlist_CapsuleCtn_MY9Lk",
        YouTubeCapsule: "curatorlist_YouTubeCapsule_1siEs",
        YouTubeCtn: "curatorlist_YouTubeCtn_1uz1W",
        YouTubeCapsuleBottomBar: "curatorlist_YouTubeCapsuleBottomBar_1d9Mp",
        GameImageCtn: "curatorlist_GameImageCtn_220F7",
        GameImage: "curatorlist_GameImage_7gTF4",
        FullWidth: "curatorlist_FullWidth_3ditF",
        ReviewTextSection: "curatorlist_ReviewTextSection_1597W",
        GameTitle: "curatorlist_GameTitle_nl2T_",
        RecommendationTypeAndDate:
          "curatorlist_RecommendationTypeAndDate_2lz6u",
        Recommended: "curatorlist_Recommended_3v9Qi",
        NotRecommended: "curatorlist_NotRecommended_3iOGo",
        Informational: "curatorlist_Informational_261Fh",
        ReviewDate: "curatorlist_ReviewDate_HCiYl",
        ReviewBlurb: "curatorlist_ReviewBlurb_1y_bx",
        FullReviewLink: "curatorlist_FullReviewLink_3_8G-",
        FullReviewAnchor: "curatorlist_FullReviewAnchor_3pWCN",
        FullReviewDomain: "curatorlist_FullReviewDomain_2R37N",
      };
    },
    11581: (e) => {
      e.exports = { BreadContainer: "curatorminiheader_BreadContainer_GkVFI" };
    },
    66294: (e, t, a) => {
      "use strict";
      a.d(t, { p: () => c });
      var r = a(33940),
        n = a(89526),
        l = a(44026),
        o = a(17589),
        i = a(4306),
        s = a(32765),
        u = a(94952);
      function c(e) {
        const { children: t, navTreeRef: a } = e,
          c = (0, r._T)(e, ["children", "navTreeRef"]),
          m = n.useRef(),
          d = (0, i.BE)(m, a),
          p = (0, s.id)(),
          _ = window.__virtual_keyboard_client;
        if (
          ((0, n.useEffect)(() => {
            u.Wz.SetHookFactory(() => _);
          }, [_]),
          p)
        ) {
          const e = window.__nav_tree_root;
          return n.createElement(
            l.Fe,
            Object.assign({}, c, {
              navTreeRef: d,
              secondary: !0,
              parentEmbeddedNavTree: e,
            }),
            n.createElement(o.O, null, t)
          );
        }
        return n.createElement(n.Fragment, null, t);
      }
    },
    26412: (e, t, a) => {
      "use strict";
      a.d(t, { HO: () => u, S6: () => m });
      const r = 20,
        n = /^.*youtube[^v]+v=(.{11}).*/,
        l = /^.*youtu\.be\/(.{11}).*/,
        o = /^.*youtube.*\/embed\/(.{11}).*/,
        i = /^.*[?&]t=([^&]+)(?:&|$)/,
        s = /^(?:(?:([\d]+)h)?(?:([\d]+)m)?(?:([\d]+)s)?|([\d]+))$/;
      function u(e) {
        return !!c(e);
      }
      function c(e) {
        const t =
          (null == e ? void 0 : e.length) < r
            ? void 0
            : n.exec(e) || l.exec(e) || o.exec(e);
        return null == t ? void 0 : t[1];
      }
      function m(e) {
        const t = c(e);
        if (!t) return;
        const a = (function (e) {
            const t = i.exec(e);
            return null == t ? void 0 : t[1];
          })(e),
          r = a
            ? (function (e) {
                const t = s.exec(e);
                if (
                  !(
                    (null == t ? void 0 : t[1]) ||
                    (null == t ? void 0 : t[2]) ||
                    (null == t ? void 0 : t[3]) ||
                    (null == t ? void 0 : t[4])
                  )
                )
                  return;
                if (null == t ? void 0 : t[4])
                  return parseInt(null == t ? void 0 : t[4]);
                let a = 0;
                return (
                  (null == t ? void 0 : t[1]) && (a += 3600 * parseInt(t[1])),
                  (null == t ? void 0 : t[2]) && (a += 60 * parseInt(t[2])),
                  (null == t ? void 0 : t[3]) && (a += parseInt(t[3])),
                  a
                );
              })(a)
            : void 0;
        return { strVideoID: t, nStartSeconds: r };
      }
    },
    65858: (e, t, a) => {
      "use strict";
      a.d(t, { b: () => u });
      var r = a(89526),
        n = a(95771),
        l = a(19304),
        o = a(565),
        i = a(44026),
        s = a(51438);
      function u(e) {
        const { crumbs: t, className: a } = e;
        return t && 0 != t.length
          ? r.createElement(
              "div",
              { className: (0, l.Z)(n.BreadContainer, a) },
              r.createElement(
                s.s,
                { className: "blockbg", "flow-children": "row" },
                t.map((e) => {
                  const t = new Array();
                  return (
                    e.url.startsWith("http")
                      ? t.push(
                          r.createElement(
                            i.IS,
                            { key: "anchor_" + e.name, href: e.url },
                            e.name
                          )
                        )
                      : t.push(
                          r.createElement(
                            o.rU,
                            { key: "link_" + e.name, to: e.url },
                            e.name
                          )
                        ),
                    t.push(
                      r.createElement("span", { key: e.name + "span" }, " > ")
                    ),
                    t
                  );
                })
              ),
              r.createElement("div", { style: { clear: "left" } })
            )
          : null;
      }
    },
    6049: (e, t, a) => {
      "use strict";
      a.d(t, { C: () => d, q: () => m });
      var r = a(89526),
        n = a(54297),
        l = a(701),
        o = a(86177),
        i = a(19304),
        s = a(14826),
        u = a(51857),
        c = a.n(u);
      const m = (e) => {
          const t = ["maxresdefault", "mqdefault", "default"],
            [a, l] = r.useState(0);
          r.useEffect(() => l(0), [e.video]);
          const o = r.useRef();
          if (e.altImgWithFallback && e.altImgWithFallback.length > 0)
            return r.createElement(n.J, {
              className: e.className,
              srcs: e.altImgWithFallback,
            });
          if (e.altImg)
            return r.createElement("img", {
              src: e.altImg,
              className: e.className,
            });
          {
            const n =
                "https://img.youtube.com/vi/" + e.video + "/" + t[a] + ".jpg",
              s = () => {
                a + 1 < t.length && l(a + 1);
              },
              u = () => {
                o.current && o.current.naturalHeight < 91 && s();
              };
            return r.createElement("img", {
              ref: o,
              onLoad: u,
              onError: s,
              src: n,
              className: (0, i.Z)(c().YoutubePreviewImage, e.className),
            });
          }
        },
        d = (e) => {
          const [t, a] = r.useState(!1);
          if (
            (r.useEffect(() => {
              e.preloadYoutubeScripts && (0, o.m)(() => {});
            }, [e.preloadYoutubeScripts]),
            t)
          )
            return r.createElement(
              o.e,
              Object.assign({}, e, {
                classnames: (0, i.Z)(c().YoutubePlayer, e.classnames),
              })
            );
          {
            const t = (t) => {
              e.onPlayerActivated && e.onPlayerActivated(),
                a(!0),
                t.stopPropagation(),
                t.preventDefault();
            };
            return r.createElement(
              "div",
              {
                className: (0, i.Z)(
                  "YoutubePreviewContainer",
                  c().YoutubePreviewImage,
                  e.imageClassnames
                ),
                onClick: t,
              },
              r.createElement(m, {
                className: "YoutubePreviewImage",
                altImgWithFallback: e.altImgWithFallback,
                altImg: e.altImg,
                video: e.video,
              }),
              r.createElement(
                "div",
                { className: "YoutubePreviewPlay" },
                r.createElement(l.GhU, null)
              ),
              r.createElement(
                "div",
                { className: "VideoHintText" },
                (0, s.Xx)("#EventCalendar_WatchYouTubeVideo")
              )
            );
          }
        };
    },
    45334: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { CuratorReviewListContainer: () => K, default: () => q });
      var r = a(88464),
        n = a(89526),
        l = a(14288),
        o = a(46132),
        i = a(44026),
        s = a(66294),
        u = a(51438),
        c = a(26412),
        m = a(68818),
        d = a(47165),
        p = a(98009),
        _ = a(33940),
        v = a(58218),
        b = a(52868),
        g = a.n(b),
        E = a(32765),
        h = a(23217);
      function f(e, t) {
        const [a, r] = (0, n.useState)(
            (null == e ? void 0 : e.BUsesContentHubForItemSource())
              ? new Set()
              : null
          ),
          l = (0, v.T)("useFilteredAppViaContentHub");
        return (
          (0, n.useEffect)(() => {
            (null == e ? void 0 : e.BUsesContentHubForItemSource()) &&
              !a &&
              (function (e, t) {
                var a;
                return (0, _.mG)(this, void 0, void 0, function* () {
                  const r =
                      E.De.STORE_BASE_URL +
                      "contenthub/ajaxfilterappsbycontenthub",
                    n = {
                      hubtype: e.GetContentHubType(),
                      category: e.GetContentHubCategory(),
                      tagid: e.GetContentHubTag(),
                      prune_list_optin_name: e.jsondata.prune_list_optin_name,
                      optin_tagid: e.jsondata.optin_tagid,
                      optin_prune_tagid: e.jsondata.optin_prune_tagid,
                      optin_only: e.jsondata.optin_only,
                      applist: t.sort().join(","),
                    };
                  let l = null;
                  const o = new Set();
                  try {
                    const e = yield g().get(r, { params: n });
                    if (
                      1 ==
                      (null === (a = null == e ? void 0 : e.data) ||
                      void 0 === a
                        ? void 0
                        : a.success)
                    )
                      return e.data.appids.forEach((e) => o.add(e)), o;
                    l = (0, h.l)(e);
                  } catch (e) {
                    l = (0, h.l)(e);
                  }
                  return (
                    console.error(
                      "LoadContentHubFilteredApps failed: " +
                        (null == l ? void 0 : l.strErrorMsg),
                      l
                    ),
                    o
                  );
                });
              })(e, t).then((e) => {
                l.token.reason || r(e);
              });
          }, [a, l.token.reason, e, t]),
          a
        );
      }
      var w = a(16468),
        C = a(83145),
        I = a(98210),
        S = a(54671),
        N = a(57858),
        R = a(85886),
        y = a(25871),
        T = a(95408),
        F = a(16646),
        B = a.n(F),
        k = a(701),
        D = a(19304),
        P = a(51857);
      const G = new RegExp(
        "(?:https?://)?(?:www.)?twitch.tv/videos/([0-9]+)S*"
      );
      function Y(e) {
        const t = G.exec(e);
        return (null == t ? void 0 : t.length) > 1 ? t[1] : null;
      }
      function x(e) {
        const {
            posterURL: t,
            videoid: a,
            muted: r,
            autoplay: l,
            bIsClipID: o,
            time: i,
            width: s,
            height: u,
          } = e,
          [c, m] = n.useState(Boolean(t)),
          d = null != l && null != l && l;
        if (c)
          return n.createElement(
            "div",
            {
              className: (0, D.Z)(
                "YoutubePreviewContainer",
                P.YoutubePreviewImage,
                e.imageClassnames
              ),
              onClick: () => m(!1),
            },
            n.createElement("img", {
              className: (0, D.Z)("YoutubePreviewImage", P.YoutubePreviewImage),
              src:
                t ||
                E.De.COMMUNITY_CDN_URL +
                  "public/shared/images/responsive/youtube_16x9_placeholder.gif",
            }),
            n.createElement(
              "div",
              { className: "YoutubePreviewPlay" },
              n.createElement(k.GhU, null)
            )
          );
        let p = (0, E.Kc)().replace("https://", "");
        const _ = p.indexOf("/");
        _ >= 0 && (p = p.substring(0, _));
        let v = o
          ? `https://clips.twitch.tv/embed?clip=${a}`
          : `https://player.twitch.tv/?video=${a}`;
        return (
          (v += `&parent=${p}&autoplay=${d}&muted=${Boolean(r)}`),
          i &&
            (v += `&time=${(function (e) {
              const t = Math.floor(e / 3600);
              e -= 60 * t * 60;
              const a = Math.floor(e / 60);
              return `${t}h${a}m${(e -= a * e)}s`;
            })(i)}`),
          n.createElement(
            "div",
            { className: (0, D.Z)("YoutubePlayer", B().TwitchPlayer) },
            n.createElement("img", {
              className: (0, D.Z)(
                "YoutubePreviewContainer",
                P.YoutubePreviewImage,
                e.imageClassnames
              ),
              src:
                E.De.COMMUNITY_CDN_URL +
                "public/shared/images/responsive/youtube_16x9_placeholder.gif",
            }),
            n.createElement("iframe", {
              src: v,
              allowFullScreen: !0,
              frameBorder: 0,
              width: s || 460,
              height: u || 300,
            })
          )
        );
      }
      var L = a(51441),
        A = a(70750),
        M = a(44421),
        U = a(31245),
        H = a(69338),
        W = a(66615),
        j = a(6049),
        V = a(14826),
        Z = a(207),
        O = a(94608),
        X = a.n(O),
        $ = a(65858),
        Q = a(11581);
      function z(e) {
        const { clanInfo: t } = e,
          { curator_link: a, curator_medium_avatar: r } = (0, E.kQ)(
            "curator_header",
            "application_config"
          );
        return n.createElement(
          u.s,
          {
            className: "page_content_ctn",
            "flow-children": "column",
            autoFocus: !0,
          },
          n.createElement(
            "div",
            { className: "page_content" },
            n.createElement(
              u.s,
              { className: "list_header_area", "flow-children": "row" },
              n.createElement(
                "div",
                { className: "curator_avatar_image" },
                n.createElement(
                  i.IS,
                  { href: a },
                  n.createElement("img", {
                    className: "curator_avatar",
                    src: r,
                  })
                )
              ),
              n.createElement(
                "div",
                { className: "curator_details" },
                n.createElement($.b, {
                  className: Q.BreadContainer,
                  crumbs: (0, E.kQ)("breadcrumbs", "application_config"),
                }),
                n.createElement(
                  i.IS,
                  { className: "pageheader curator_name", href: a },
                  (0, V.Xx)("#SteamCurator_List_Header_List", t.group_name)
                )
              )
            )
          )
        );
      }
      const q = function (e) {
        const t = (0, C.L)();
        return n.createElement(
          s.p,
          { navID: "StoreCuratorPageRoot", NavigationManager: t },
          n.createElement(K, { listid: e.listid })
        );
      };
      function K(e) {
        const t = parseInt(
            (0, E.kQ)("curator_account_id", "application_config")
          ),
          a = (0, w.P4)(t),
          r = (0, w.N)(null == a ? void 0 : a.clanSteamID, e.listid);
        return (
          (0, T.ue)(),
          r
            ? n.createElement(
                n.Fragment,
                null,
                n.createElement(z, { clanInfo: a }),
                n.createElement(
                  "div",
                  { className: "page_content_ctn grayscale" },
                  n.createElement(
                    "div",
                    { className: "page_content" },
                    n.createElement(
                      "div",
                      { className: X().CuratorListCtn },
                      n.createElement(te, { listDetails: r }),
                      (0, w.FG)(r)
                        ? n.createElement(J, { listDetails: r })
                        : n.createElement(ee, {
                            listDetails: r,
                            rgListItems: r.apps,
                          }),
                      n.createElement(
                        "div",
                        { className: X().CuratorMoreCtn },
                        n.createElement(
                          "h2",
                          null,
                          (0, V.Xx)("#SteamCurator_ExploreMoreTitle")
                        ),
                        n.createElement(
                          i.IS,
                          { href: a.vanity_url },
                          (0, V.kQ)("#SteamCurator_MoreReviews", a.group_name)
                        )
                      )
                    )
                  )
                )
              )
            : null
        );
      }
      function J(e) {
        const { listDetails: t } = e,
          [a, r] = (0, n.useState)(null),
          l = new d.K(t.sale_clan_steamid),
          o = (0, m.Mx)(l.GetAccountID(), t.sale_clan_event_gid),
          i = (0, n.useMemo)(
            () => (t.apps || []).map((e) => e.recommended_app.appid),
            [t]
          ),
          s = f(o, i);
        return (
          (0, n.useEffect)(() => {
            var e, a;
            if (o)
              if (o.BUsesContentHubForItemSource())
                s &&
                  r(
                    null === (e = t.apps) || void 0 === e
                      ? void 0
                      : e.filter((e) => {
                          var t;
                          return s.has(
                            null === (t = e.recommended_app) || void 0 === t
                              ? void 0
                              : t.appid
                          );
                        })
                  );
              else {
                const e = o.GetSaleFeaturedApps();
                r(
                  null === (a = t.apps) || void 0 === a
                    ? void 0
                    : a.filter((t) => {
                        var a;
                        return e.has(
                          null === (a = t.recommended_app) || void 0 === a
                            ? void 0
                            : a.appid
                        );
                      })
                );
              }
          }, [t, o, s]),
          n.createElement(ee, { listDetails: t, rgListItems: a })
        );
      }
      function ee(e) {
        const { listDetails: t, rgListItems: a } = e,
          [r, l] = (0, n.useState)(0),
          [o, s] = (0, n.useState)(null),
          c = (0, v.T)("CuratorAppListDisplay");
        if (
          (n.useEffect(() => {
            a &&
              (l((null == a ? void 0 : a.length) || 0),
              S.jg
                .Get()
                .HintLoad()
                .then(() => {
                  const e = a.map((e) => e.recommended_app.appid);
                  N.Z.Get()
                    .QueueMultipleAppRequests(e, A.NC)
                    .then(() => {
                      c.token.reason ||
                        s(
                          a.filter(
                            (e) =>
                              !(0, A.TR)(
                                N.Z.Get().GetApp(e.recommended_app.appid)
                              )
                          )
                        );
                    })
                    .catch(() => {
                      c.token.reason || s([]);
                    });
                }));
          }, [a, c]),
          null == o)
        )
          return n.createElement(H.V, {
            string: (0, V.Xx)("#Loading"),
            position: "center",
            size: "medium",
          });
        const m = 1 == t.list_type;
        return n.createElement(
          n.Fragment,
          null,
          n.createElement(
            u.s,
            {
              className: (0, D.Z)(X().CuratorList, m && X().CuratorListGrid),
              "flow-children": "grid",
            },
            o.map((e, a) =>
              n.createElement(ae, {
                key: "rec_" + e.recommended_app.appid,
                item: e,
                listDetails: t,
                bAutoFocus: 0 == a,
              })
            )
          ),
          Boolean(r > o.length) &&
            n.createElement(
              "div",
              null,
              n.createElement(
                "span",
                null,
                (0, V.kb)("#SteamCurator_Hidden", r - o.length),
                " "
              ),
              n.createElement(
                i.IS,
                { href: E.De.STORE_BASE_URL + "account/preferences/" },
                (0, V.Xx)("#SteamCurator_Setting")
              )
            )
        );
      }
      function te(e) {
        const { listDetails: t } = e,
          a = (0, w.yS)(t),
          r = (0, E.kQ)("showlisttitle", "application_config"),
          l = (0, E.kQ)("titleareaheight", "application_config"),
          s =
            t.list_jsondata.youtube_link &&
            (0, c.S6)(t.list_jsondata.youtube_link),
          u = t.list_jsondata.youtube_link && Y(t.list_jsondata.youtube_link),
          m = (0, o.jM)(E.De.LANGUAGE),
          d = V.LZ.GetWithFallback(t.localized_flat_title, m),
          p = V.LZ.GetWithFallback(t.localized_flat_blurb, m),
          _ = V.LZ.GetWithFallback(t.localized_flat_link, m),
          v =
            a &&
            a.GetImageURL(
              (0, W.p)() ? "product_mobile_banner" : "product_banner",
              m
            );
        return n.createElement(
          "div",
          { className: X().TopReviewInfo },
          Boolean(v) &&
            n.createElement(
              i.IS,
              { href: a.GetSaleURL() },
              n.createElement("img", { className: X().SaleBanner, src: v })
            ),
          r && d && n.createElement("div", { className: X().Title }, d),
          r && p && n.createElement("div", { className: X().Blurb }, p),
          Boolean(l > 0) && n.createElement("div", { style: { height: l } }),
          s &&
            n.createElement(
              "div",
              { className: X().VideoReviewCtn },
              n.createElement(j.C, {
                video: s.strVideoID,
                startSeconds: s.nStartSeconds,
                autoplay: !0,
                autopause: !0,
                showFullscreenBtn: !0,
                controls: !0,
                preloadYoutubeScripts: !0,
                playsInline: !0,
                imageClassnames: X().YouTubePreviewImage,
              })
            ),
          Boolean(u) &&
            n.createElement(
              "div",
              { className: X().VideoReviewCtn },
              n.createElement(x, {
                videoid: u,
                posterURL: "",
                imageClassnames: X().YouTubePreviewImage,
              })
            ),
          _ && n.createElement(le, { url: _ })
        );
      }
      const ae = (0, r.Pi)((e) => {
        var t, a;
        const { item: r, listDetails: l, bAutoFocus: o } = e,
          i = parseInt((0, E.kQ)("curator_account_id", "application_config")),
          s = (0, w.P4)(i),
          [m] = (0, y.vs)(
            null === (t = null == r ? void 0 : r.recommended_app) ||
              void 0 === t
              ? void 0
              : t.appid,
            { include_assets: !0, include_release: !0 }
          ),
          d = (0, n.useMemo)(
            () => ({
              id: null == m ? void 0 : m.GetID(),
              type: (0, R.Ds)(
                null == m ? void 0 : m.GetStoreItemType(),
                null == m ? void 0 : m.GetAppType()
              ),
            }),
            [m]
          );
        if (!s || !m) return null;
        const {
            appid: p,
            link_url: _,
            blurb: v,
            time_recommended: b,
            recommendation_state: g,
          } = r.recommended_app,
          h = s.is_creator_home && !s.is_ogg,
          f =
            null === (a = l.list_jsondata.app_data) || void 0 === a
              ? void 0
              : a[p],
          C = _ && (0, c.S6)(_),
          S = _ && Y(_),
          N = v != w.mb && v,
          T = I.ZP.Get().BHasDemoAppID(p),
          F = null == f ? void 0 : f.img_url,
          B = `curator_clanid=${s.clanAccountID}&curator_listid=${l.listid}`;
        return n.createElement(
          u.s,
          { className: X().CuratorReview, autoFocus: o },
          n.createElement(
            "div",
            { className: X().CapsuleCtn },
            Boolean(C || S)
              ? n.createElement(re, {
                  strVideoID: (null == C ? void 0 : C.strVideoID) || S,
                  nStartSeconds: null == C ? void 0 : C.nStartSeconds,
                  info: d,
                  strImgOverrideUrl: F,
                  bShowDemoButton: T,
                  strExtraParams: B,
                  bTwitchVideo: Boolean(S),
                })
              : n.createElement(U.B, {
                  imageType: "header",
                  capsule: d,
                  bShowDemoButton: T,
                  strExtraParams: B,
                })
          ),
          n.createElement(
            "div",
            { className: X().ReviewTextSection },
            n.createElement("div", { className: X().GameTitle }, m.GetName()),
            n.createElement(
              "div",
              { className: X().RecommendationTypeAndDate },
              n.createElement(ne, { type: g }),
              n.createElement(
                "div",
                { className: X().ReviewDate },
                h || !Boolean(b)
                  ? (0, V.Xx)(
                      "#EventModTile_ReleaseDate",
                      m.GetFormattedSteamReleaseDate()
                    )
                  : (0, V.vX)(b)
              )
            ),
            Boolean(N) &&
              n.createElement(
                "div",
                { className: X().ReviewBlurb },
                (0, V.Xx)("#SteamCurator_ReviewTextQuoted", N)
              ),
            Boolean(_) && n.createElement(le, { url: _ })
          )
        );
      });
      function re(e) {
        const {
            strVideoID: t,
            nStartSeconds: a,
            info: r,
            strImgOverrideUrl: l,
            bShowDemoButton: o,
            strExtraParams: i,
            bTwitchVideo: s,
          } = e,
          [u] = (0, y.jk)(r.id, (0, R.TM)(r.type), { include_assets: !0 });
        return n.createElement(
          "div",
          { className: X().YouTubeCapsule },
          n.createElement(
            "div",
            { className: X().YouTubeCtn },
            s
              ? n.createElement(x, {
                  videoid: t,
                  posterURL: null == u ? void 0 : u.GetAssets().GetHeaderURL(),
                  imageClassnames: X().YouTubePreviewImage,
                  autoplay: !0,
                })
              : n.createElement(j.C, {
                  video: t,
                  startSeconds: a,
                  autoplay: !0,
                  autopause: !0,
                  showFullscreenBtn: !0,
                  controls: !0,
                  preloadYoutubeScripts: !0,
                  playsInline: !0,
                  imageClassnames: X().YouTubePreviewImage,
                  altImg: l,
                })
          ),
          n.createElement(
            "div",
            { className: X().YouTubeCapsuleBottomBar },
            n.createElement(
              "div",
              { className: X().GameImageCtn },
              n.createElement(
                L.ll,
                {
                  item: r,
                  bShowDemoButton: o,
                  nDelayShowMs: 300,
                  strExtraParams: i,
                  hoverProps: {
                    direction: "overlay-center",
                    style: { minWidth: "300px" },
                  },
                },
                n.createElement("img", {
                  className: X().GameImage,
                  src:
                    null == u ? void 0 : u.GetAssets().GetLibraryCapsuleURL(),
                })
              )
            ),
            n.createElement(M.Hl, { info: r, strClassName: X().FullWidth })
          )
        );
      }
      function ne(e) {
        switch (e.type) {
          case 0:
            return n.createElement(
              "div",
              { className: X().Recommended },
              (0, V.Xx)("#SteamCurator_Recommended")
            );
          case 1:
            return n.createElement(
              "div",
              { className: X().NotRecommended },
              (0, V.Xx)("#SteamCurator_NotRecommended")
            );
          case 2:
            return n.createElement(
              "div",
              { className: X().Informational },
              (0, V.Xx)("#SteamCurator_Informational")
            );
          default:
            return null;
        }
      }
      function le(e) {
        let t = (0, p.B1)(e.url);
        (0, l.Ah)(t) &&
          (t =
            (E.De.IN_CLIENT ? "steam://openurl_external/" : "") +
            E.De.COMMUNITY_BASE_URL +
            "linkfilter/?url=" +
            t);
        const a = (0, Z.FM)(e.url),
          r = (0, c.HO)(e.url);
        return n.createElement(
          "div",
          { className: X().FullReviewLink },
          n.createElement(
            i.IS,
            {
              className: X().FullReviewAnchor,
              href: t,
              rel: "noopener nofollow",
              preferredFocus: !1,
              autoFocus: !1,
            },
            (0, V.Xx)(
              r
                ? "#SteamCurator_WatchFullReview"
                : "#SteamCurator_ReadFullReview"
            )
          ),
          n.createElement(
            "div",
            { className: X().FullReviewDomain },
            (0, V.Xx)("#SteamCurator_ReviewLinkHostnameBracketed", a)
          )
        );
      }
    },
  },
]);
