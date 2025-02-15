/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [1909],
  {
    48194: (t) => {
      t.exports = {
        notificationRowHeight: "72px",
        NotificationPageCtn: "notifications_NotificationPageCtn_2DCeN",
        NotificationsBody: "notifications_NotificationsBody_35hlM",
        NotificationsHeader: "notifications_NotificationsHeader_1bLYa",
        NotificationsHeaderTitle:
          "notifications_NotificationsHeaderTitle_39iFF",
        NotificationsHeaderUnread:
          "notifications_NotificationsHeaderUnread_3iXuG",
        NotificationListCtn: "notifications_NotificationListCtn_1cj-7",
        NotificationsList: "notifications_NotificationsList_KG3qM",
        AllNotificationsRowCtn: "notifications_AllNotificationsRowCtn_3Y-y3",
        NotificationFiltersCtn: "notifications_NotificationFiltersCtn_1uSw_",
        EmptyNotifications: "notifications_EmptyNotifications_3t24B",
        EmptyNotificationsTitle: "notifications_EmptyNotificationsTitle__uGFL",
        EmptyNotificationsBody: "notifications_EmptyNotificationsBody_3Iomc",
        SettingsButtons: "notifications_SettingsButtons_3B7mJ",
        SettingsTooltip: "notifications_SettingsTooltip_3ZlbZ",
        MarkAllReadButton: "notifications_MarkAllReadButton_37Ujw",
        SettingsButton: "notifications_SettingsButton_T8q00",
        SettingsImg: "notifications_SettingsImg_1XXJX",
        SettingsFiltersTitle: "notifications_SettingsFiltersTitle_4T-jW",
        SettingsFilters: "notifications_SettingsFilters_1YDIA",
        FilterCheckbox: "notifications_FilterCheckbox_2C4dM",
        ResetButton: "notifications_ResetButton_3Z8ot",
        CommentIcon: "notifications_CommentIcon_o_I3v",
        CommentFilterCtn: "notifications_CommentFilterCtn_-GWy_",
        AdvancedCommentFilters: "notifications_AdvancedCommentFilters_irq6k",
        Expanded: "notifications_Expanded_2hRRl",
        CommentRadioGroup: "notifications_CommentRadioGroup_2_xVH",
        Expander: "notifications_Expander_MjW-I",
      };
    },
    6914: (t, e, i) => {
      "use strict";
      i.r(e), i.d(e, { default: () => $ });
      var n,
        o = i(89526),
        s = i(65756),
        a = i(32765),
        l = i(44973),
        r = i(701),
        c = i(46132),
        m = i(27070),
        f = i(57605),
        d = i(77427),
        p = i(14826),
        u = i(48194),
        y = i.n(u),
        _ = i(33940),
        h = i(50265),
        N = i(25125),
        g = i(47742),
        F = i(47165),
        E = i(24448),
        C = i(36041);
      !(function (t) {
        (t[(t.k_All = 0)] = "k_All"),
          (t[(t.k_Owned = 1)] = "k_Owned"),
          (t[(t.k_Subscribed = 2)] = "k_Subscribed");
      })(n || (n = {}));
      class S {
        constructor() {
          (this.rgFilterState = new Map()),
            (this.commentFilter = {
              type: n.k_All,
              setItemTypes: new Set([]),
              fnFilter: () => !0,
            }),
            (this.k_rgFilterCheckboxes = [
              {
                type: 3,
                display: (0, p.Xx)("#NotificationsFilters_Comments"),
                hash: "comments",
              },
              {
                type: 8,
                display: (0, p.Xx)("#NotificationsFilters_Wishlist"),
                hash: "wishlist",
              },
              {
                type: 5,
                display: (0, p.Xx)("#NotificationsFilters_FriendRequest"),
                hash: "invites",
              },
              {
                type: 2,
                display: (0, p.Xx)("#NotificationsFilters_Gifts"),
                hash: "gifts",
              },
              {
                type: 4,
                display: (0, p.Xx)("#NotificationsFilters_Inventory"),
                hash: "inventory",
              },
              {
                type: 12,
                display: (0, p.Xx)("#NotificationsFilters_AsyncGame"),
                hash: "asyncgame",
              },
              {
                type: 11,
                display: (0, p.Xx)("#NotificationsFilters_HelpRequest"),
                hash: "help",
              },
              {
                type: 9,
                display: (0, p.Xx)("#NotificationsFilters_TradeOffer"),
                hash: "trade",
              },
              {
                type: 10,
                display: (0, p.Xx)("#NotificationsFilters_General"),
                hash: "general",
              },
            ]),
            (this.k_rgCommentFilters = [
              {
                type: n.k_All,
                display: (0, p.Xx)("#NotificationsList_CommentFilters_All"),
                fnFilter: () => !0,
              },
              {
                type: n.k_Owned,
                display: (0, p.Xx)(
                  "#NotificationsList_CommentFilters_YourItems"
                ),
                fnFilter: this.IsCommentOwned,
              },
              {
                type: n.k_Subscribed,
                display: (0, p.Xx)(
                  "#NotificationsList_CommentFilters_Subscribed"
                ),
                fnFilter: this.IsCommentSubscribed,
              },
            ]);
        }
        IsCommentOwned(t, e) {
          return t.bis_owner || t.owner_steam_id.ConvertTo64BitString() == e;
        }
        IsCommentSubscribed(t, e) {
          return t.bsubscribed;
        }
        ProcessHash(t) {
          if (
            (this.rgFilterState.clear(),
            this.commentFilter.setItemTypes.clear(),
            t)
          ) {
            t.split(",").forEach((t) => {
              const e = this.k_rgFilterCheckboxes.findIndex((e) => e.hash == t);
              -1 !== e
                ? this.rgFilterState.set(this.k_rgFilterCheckboxes[e].type, !0)
                : (0, C.kE)(t) &&
                  this.rgFilterState.has(3) &&
                  this.commentFilter.setItemTypes.add(parseInt(t));
            });
          }
        }
        SetFilter(t, e, i) {
          i &&
            (this.rgFilterState.clear(),
            this.commentFilter.setItemTypes.clear()),
            t &&
              (this.rgFilterState.set(t, e),
              3 != t || e || this.commentFilter.setItemTypes.clear()),
            this.UpdateLocationHash();
        }
        SetCommentFilter(t) {
          var e;
          (this.commentFilter = t),
            (this.commentFilter.fnFilter =
              null ===
                (e = this.k_rgCommentFilters.find((e) => e.type == t.type)) ||
              void 0 === e
                ? void 0
                : e.fnFilter),
            this.UpdateLocationHash();
        }
        UpdateLocationHash() {
          let t = "";
          this.rgFilterState.forEach((e, i) => {
            var n;
            e &&
              (t +=
                (t ? "," : "") +
                (null ===
                  (n = this.k_rgFilterCheckboxes.find((t) => t.type == i)) ||
                void 0 === n
                  ? void 0
                  : n.hash));
          }),
            this.rgFilterState.has(3) &&
              this.commentFilter.setItemTypes.forEach(
                (e) => (t += (t ? "," : "") + e)
              ),
            window.history.pushState(
              {},
              null,
              window.location.pathname + (t ? "#" + t : "")
            );
        }
      }
      function k() {
        (0, N.SZ)(() => [...T.rgFilterState]);
        let t = 0;
        return (
          T.rgFilterState.forEach((e) => {
            t += e ? 1 : 0;
          }),
          { numActive: t, filters: T.rgFilterState }
        );
      }
      function v() {
        return (0, N.SZ)(() => T.commentFilter);
      }
      function x() {
        return o.useMemo(() => {
          var t;
          const e = new Map();
          for (const i of w.m_rgNotificationRollups.filter(
            (t) => 3 == t.type
          )) {
            const n = (0, s.dh)(
              null === (t = i.item) || void 0 === t ? void 0 : t.body_data
            );
            e.set(n.comment_type, 1 + (e.get(n.comment_type) || 0));
          }
          return e;
        }, []);
      }
      function b() {
        const { numActive: t, filters: e } = k(),
          i = v(),
          o = (0, g.M)();
        return (
          (0, N.SZ)(() => (0, s.RY)(w.m_summary)),
          t
            ? w.m_rgNotificationRollups.filter((t) => {
                if (!e.get(t.type)) return !1;
                if (
                  3 == t.type &&
                  (i.type != n.k_All || i.setItemTypes.size > 0)
                ) {
                  const e = (0, s.dh)(t.item.body_data);
                  let n = !i.fnFilter || i.fnFilter(e, o);
                  return (
                    i.setItemTypes.size > 0 &&
                      !i.setItemTypes.has(e.comment_type) &&
                      (n = !1),
                    n
                  );
                }
                return !0;
              })
            : w.m_rgNotificationRollups
        );
      }
      (0, _.gn)([h.LO], S.prototype, "rgFilterState", void 0),
        (0, _.gn)([h.LO], S.prototype, "commentFilter", void 0);
      const I = 300;
      const T = new S(),
        w = new s.tL();
      var R = i(51438),
        L = i(84343),
        A = i(4306),
        B = i(19304),
        X = i(87458),
        H = i(86770);
      function M(t) {
        const { hash: e } = t;
        (0, o.useEffect)(() => {
          T.ProcessHash(e);
        }, [e]);
        const i = (0, m.bY)();
        (0, o.useEffect)(() => {
          w.setTransport(i);
        }, [i]);
        const n = (0, a.kQ)("notifications", "application_config");
        return (
          w.ProcessNewNotificationPayload(n),
          (function () {
            let t = [];
            w.m_rgNotificationRollups.forEach((e) => {
              var i;
              let n = null;
              if (3 == e.type) {
                const o = (0, s.dh)(e.item.body_data);
                if ((0, s.gt)(o)) {
                  let e =
                    null === (i = null == o ? void 0 : o.account_steam_id) ||
                    void 0 === i
                      ? void 0
                      : i.ConvertTo64BitString();
                  e && !t.includes(e) && t.push(e);
                }
                (0, s.g1)(o) && (n = null == o ? void 0 : o.owner_steam_id);
              } else if (5 == e.type) {
                const t = (0, s.gs)(e.item.body_data);
                n = F.K.InitFromAccountID(parseInt(t.requestorID));
              } else if (9 == e.type) {
                const t = (0, s.VE)(e.item.body_data);
                n = F.K.InitFromAccountID(parseInt(t));
              } else if (2 == e.type) {
                const t = (0, s.sS)(e.item.body_data);
                n = F.K.InitFromAccountID(parseInt(t));
              }
              let o = null == n ? void 0 : n.ConvertTo64BitString();
              n && !t.includes(o) && t.push(o);
            });
            do {
              E.y$.LoadProfiles(t.splice(0, I));
            } while (t.length > I);
            E.y$.LoadProfiles(t);
          })(),
          w.m_rgNotificationRollups.length
            ? o.createElement(
                o.Fragment,
                null,
                o.createElement(
                  "div",
                  { className: y().NotificationPageCtn },
                  o.createElement(
                    "div",
                    { className: y().NotificationsHeader },
                    o.createElement(
                      "span",
                      { className: y().NotificationsHeaderTitle },
                      (0, p.Xx)("#NotificationsList_Header")
                    ),
                    o.createElement(O, null)
                  ),
                  o.createElement(
                    "div",
                    { className: y().NotificationsBody },
                    o.createElement(
                      "div",
                      { className: y().NotificationListCtn },
                      o.createElement(P, null)
                    ),
                    o.createElement(
                      "div",
                      { className: y().NotificationFiltersCtn },
                      o.createElement(Z, null)
                    )
                  )
                )
              )
            : o.createElement(
                "div",
                { className: y().NotificationPageCtn },
                o.createElement(U, null)
              )
        );
      }
      function O() {
        const t = (function () {
            const t = b(),
              e = (0, s.fw)();
            return (
              t.map((t) => {
                var i;
                (0, s.UN)(
                  e,
                  t.type,
                  null === (i = t.rgunread) || void 0 === i ? void 0 : i.length
                );
              }),
              (0, s.RY)(e)
            );
          })(),
          e = (0, p.Xx)("#NotificationsList_Unread", t);
        return o.createElement(
          "span",
          { className: y().NotificationsHeaderUnread },
          e
        );
      }
      function P() {
        const t = b();
        return o.createElement(
          R.s,
          { className: y().NotificationsList },
          t.map((t, e) => o.createElement(W, { key: e, rollup: t }))
        );
      }
      function U() {
        return o.createElement(
          R.s,
          { className: y().EmptyNotifications },
          o.createElement(
            R.s,
            { className: y().EmptyNotificationsTitle },
            (0, p.Xx)("#NotificationsList_EmptyTitle")
          ),
          o.createElement(
            R.s,
            { className: y().EmptyNotificationsBody },
            (0, p.Xx)("#NotificationsList_EmptyBody")
          )
        );
      }
      function Z() {
        const t = b(),
          e = o.useMemo(() => {
            const t = new Map();
            for (const e of w.m_rgNotificationRollups)
              t.set(e.type, 1 + (t.get(e.type) || 0));
            return t;
          }, []),
          i = (0, X.k0)();
        return o.createElement(
          "div",
          { className: y().NotificationsFilterCtn },
          o.createElement(
            "div",
            { className: y().SettingsButtons },
            o.createElement(
              "div",
              { className: y().SettingsTooltip },
              o.createElement(
                f.zx,
                {
                  className: y().MarkAllReadButton,
                  onClick: () => w.MarkAllItemsRead(t),
                },
                (0, p.Xx)("#NotificationsList_MarkAllRead")
              )
            ),
            o.createElement(
              L.HP,
              {
                toolTipContent: i
                  ? void 0
                  : (0, p.Xx)("#NotificationsList_SettingsToolip"),
                className: y().SettingsTooltip,
              },
              o.createElement(
                f.zx,
                {
                  className: y().SettingsButton,
                  disabled: !i,
                  onClick: () =>
                    window.location.assign(
                      `${l.De.STORE_BASE_URL}account/notificationsettings`
                    ),
                },
                o.createElement(r.Zrf, { className: y().SettingsImg }),
                (0, p.Xx)("#NotificationsList_Settings")
              )
            )
          ),
          o.createElement(
            "div",
            { className: y().SettingsFiltersTitle },
            (0, p.Xx)("#NotificationsList_FilterTo")
          ),
          o.createElement(
            "div",
            { className: y().SettingsFilters },
            T.k_rgFilterCheckboxes
              .filter((t) => e.has(t.type))
              .map((t) => o.createElement(G, { key: t.type, filterOptions: t }))
          ),
          o.createElement(
            f.zx,
            {
              className: y().ResetButton,
              onClick: () => T.SetFilter(null, !1, !0),
            },
            (0, p.Xx)("#NotificationsList_Reset")
          )
        );
      }
      function G(t) {
        const { filterOptions: e } = t,
          { filters: i } = k();
        return 3 == e.type
          ? o.createElement(Y, { filterOptions: e, checked: i.get(e.type) })
          : o.createElement(f.ji, {
              className: y().FilterCheckbox,
              key: e.type,
              label: e.display,
              checked: i.get(e.type),
              onChange: (t) => T.SetFilter(e.type, t),
            });
      }
      function j(t) {
        const { threadType: e } = t,
          i = v();
        return o.createElement(f.ji, {
          className: y().AdvancedCommentFilterCheckbox,
          label: (0, p.Xx)("#CommentThreadType_" + e),
          checked: i.setItemTypes.has(e),
          onChange: (t) => {
            t
              ? (i.setItemTypes.add(Number(e)),
                T.SetCommentFilter({
                  type: i.type,
                  setItemTypes: i.setItemTypes,
                }))
              : (i.setItemTypes.delete(Number(e)),
                T.SetCommentFilter({
                  type: i.type,
                  setItemTypes: i.setItemTypes,
                }));
          },
        });
      }
      function z(t) {
        const { className: e } = t,
          i = x();
        return o.createElement(
          "div",
          { className: (0, B.Z)(y().AdvancedCommentFilters, e) },
          Array.from(i.keys()).map((t) =>
            o.createElement(j, { key: t, threadType: t })
          )
        );
      }
      function D(t) {
        const { expanded: e, children: i } = t,
          [n, s] = (0, o.useState)(void 0),
          a = (0, A.yU)((t) => {
            const e = t.target;
            s(e.scrollHeight);
          });
        return o.createElement(
          "div",
          {
            className: (0, B.Z)(y().Expander, y().Expanded),
            style: { height: e ? n : 0 },
          },
          o.createElement("div", { ref: a }, i)
        );
      }
      function Y(t) {
        const { filterOptions: e, checked: i } = t,
          n = (function () {
            const t = (0, g.M)();
            return o.useMemo(() => {
              var e;
              const i = new Map();
              for (const n of T.k_rgCommentFilters)
                for (const o of w.m_rgNotificationRollups.filter(
                  (t) => 3 == t.type
                )) {
                  const a = (0, s.dh)(
                    null === (e = o.item) || void 0 === e ? void 0 : e.body_data
                  );
                  n.fnFilter(a, t) && i.set(n.type, 1 + (i.get(n.type) || 0));
                }
              return i;
            }, [t]);
          })(),
          a = x(),
          l = n.size > 2,
          r = a.size > 1,
          c = l || r;
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(f.ji, {
            className: y().FilterCheckbox,
            key: e.type,
            label: e.display,
            checked: i,
            onChange: (t) => {
              T.SetFilter(e.type, t);
            },
          }),
          c &&
            o.createElement(
              "div",
              { className: (0, B.Z)(y().CommentFilterCtn, i && y().Expanded) },
              o.createElement(
                D,
                { expanded: i },
                o.createElement(
                  "div",
                  { className: y().CommentFilters },
                  r && o.createElement(z, { className: y().Expanded })
                )
              )
            )
        );
      }
      function q(t, e) {
        e.read || w.MarkItemRead(e.notification_id), t();
      }
      function W(t) {
        const { rollup: e } = t,
          i = s.Zm[e.type],
          [n, a] = o.useState(!1),
          l = (0, A.S1)(
            (0, o.useCallback)((t) => {
              t.isIntersecting && a(!0);
            }, []),
            { rootMargin: "600px" }
          );
        if (e.item.hidden && 5 == e.type) {
          const t = (0, s.gs)(e.item.body_data);
          if ((0, c.fk)(t.state) || 1 == t.state) return null;
        }
        const r = i.bBasic ? H.PO : H.k6[e.type];
        return r
          ? o.createElement(
              K,
              { ref: l },
              n &&
                o.createElement(r, {
                  rollup: e,
                  onNotificationClick: q,
                  location: d.IS.AllNotificationsTray,
                  uimode: 7,
                })
            )
          : null;
      }
      const K = o.forwardRef((t, e) =>
        o.createElement(
          "div",
          { className: y().AllNotificationsRowCtn, ref: e },
          t.children
        )
      );
      function $(t) {
        let e = t.location.hash;
        return (
          e && e.startsWith("#") && (e = e.slice(1)),
          o.createElement(M, { hash: e })
        );
      }
    },
  },
]);
