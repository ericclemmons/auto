(window.webpackJsonp = window.webpackJsonp || []).push([
  [48],
  {
    77: function(e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var o,
        n = a(r(3)),
        i = (function(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var r in e)
              if (Object.prototype.hasOwnProperty.call(e, r)) {
                var o =
                  Object.defineProperty && Object.getOwnPropertyDescriptor
                    ? Object.getOwnPropertyDescriptor(e, r)
                    : {};
                o.get || o.set ? Object.defineProperty(t, r, o) : (t[r] = e[r]);
              }
          return (t.default = e), t;
        })(r(0));
      a(r(2)), a(r(106));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function l(e, t, r, n) {
        o ||
          (o =
            ('function' == typeof Symbol &&
              Symbol.for &&
              Symbol.for('react.element')) ||
            60103);
        var i = e && e.defaultProps,
          a = arguments.length - 3;
        if ((t || 0 === a || (t = { children: void 0 }), t && i))
          for (var l in i) void 0 === t[l] && (t[l] = i[l]);
        else t || (t = i || {});
        if (1 === a) t.children = n;
        else if (a > 1) {
          for (var s = new Array(a), u = 0; u < a; u++) s[u] = arguments[u + 3];
          t.children = s;
        }
        return {
          $$typeof: o,
          type: e,
          key: void 0 === r ? null : '' + r,
          ref: null,
          props: t,
          _owner: null
        };
      }
      function s(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = r),
          e
        );
      }
      function u() {
        return (u =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var o in r)
                Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
            }
            return e;
          }).apply(this, arguments);
      }
      function d(e, t) {
        if (null == e) return {};
        var r,
          o,
          n = (function(e, t) {
            if (null == e) return {};
            var r,
              o,
              n = {},
              i = Object.keys(e);
            for (o = 0; o < i.length; o++)
              (r = i[o]), t.indexOf(r) >= 0 || (n[r] = e[r]);
            return n;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (o = 0; o < i.length; o++)
            (r = i[o]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (n[r] = e[r]));
        }
        return n;
      }
      const c = e => {
        let { to: t } = e,
          r = d(e, ['to']);
        return t.includes('http')
          ? i.default.createElement('a', u({}, e, { href: t }))
          : ('#' === t[0] &&
              (t = n.default.join('/auto/', 'pages/extras/version.html') + t),
            i.default.createElement(
              'a',
              u({}, r, {
                href: t,
                onClick: r => {
                  if ((r.preventDefault(), '#' === e.to)) return !1;
                  const o = new URL(n.default.join(window.location.origin, t));
                  window.history.pushState(
                    (e => ({
                      href: e.href,
                      pathname: e.pathname,
                      hash: e.hash,
                      query: e.query
                    }))(o),
                    null,
                    t
                  ),
                    e.onClick();
                  const i = new CustomEvent('changeLocation', { detail: o });
                  return dispatchEvent(i), !1;
                }
              })
            ));
      };
      c.defaultProps = { href: '', onClick: () => {} };
      const f = e => {
        var t, r;
        return (
          (r = t = class extends i.default.Component {
            constructor(...e) {
              super(...e), s(this, 'state', { Comp: null });
            }
            componentDidMount() {
              !this.state.Comp &&
                this.props.shouldLoad &&
                e().then(e => {
                  this.setState({ Comp: e.default });
                });
            }
            render() {
              const { Comp: e } = this.state;
              return e
                ? i.default.createElement(
                    e,
                    this.props,
                    this.props.children || null
                  )
                : null;
            }
          }),
          s(t, 'defaultProps', { shouldLoad: !0 }),
          r
        );
      };
      f(() => r.e(31).then(r.bind(null, 107))),
        f(() => r.e(31).then(r.bind(null, 108)));
      var h = l(
          'p',
          {},
          void 0,
          'Useful in conjunction with ',
          l('code', {}, void 0, 'npm version'),
          ' to auto-version releases.'
        ),
        p = l('code', {}, void 0, '.autorc');
      var v = e =>
        l(
          'div',
          { className: e.className },
          void 0,
          l(
            'section',
            {},
            void 0,
            h,
            l(
              'h2',
              { id: 'configure-versioning-labels' },
              void 0,
              'Configure Versioning Labels ',
              l(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#configure-versioning-labels',
                'aria-hidden': 'true'
              })
            ),
            l(
              'p',
              {},
              void 0,
              'You can customize the versioning labels in the ',
              p,
              '. To see configuration ',
              l(
                c,
                {
                  currentPage: e.currentPage,
                  to: '/auto/pages/extras/autorc.html#versioning-labels'
                },
                void 0,
                'go here'
              ),
              '.'
            )
          )
        );
      (t.default = v), (e.exports = t.default);
    },
    89: function(e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var o,
        n = a(r(3)),
        i = (function(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var r in e)
              if (Object.prototype.hasOwnProperty.call(e, r)) {
                var o =
                  Object.defineProperty && Object.getOwnPropertyDescriptor
                    ? Object.getOwnPropertyDescriptor(e, r)
                    : {};
                o.get || o.set ? Object.defineProperty(t, r, o) : (t[r] = e[r]);
              }
          return (t.default = e), t;
        })(r(0));
      a(r(2)), a(r(106));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function l(e, t, r, n) {
        o ||
          (o =
            ('function' == typeof Symbol &&
              Symbol.for &&
              Symbol.for('react.element')) ||
            60103);
        var i = e && e.defaultProps,
          a = arguments.length - 3;
        if ((t || 0 === a || (t = { children: void 0 }), t && i))
          for (var l in i) void 0 === t[l] && (t[l] = i[l]);
        else t || (t = i || {});
        if (1 === a) t.children = n;
        else if (a > 1) {
          for (var s = new Array(a), u = 0; u < a; u++) s[u] = arguments[u + 3];
          t.children = s;
        }
        return {
          $$typeof: o,
          type: e,
          key: void 0 === r ? null : '' + r,
          ref: null,
          props: t,
          _owner: null
        };
      }
      function s(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = r),
          e
        );
      }
      function u() {
        return (u =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var o in r)
                Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
            }
            return e;
          }).apply(this, arguments);
      }
      function d(e, t) {
        if (null == e) return {};
        var r,
          o,
          n = (function(e, t) {
            if (null == e) return {};
            var r,
              o,
              n = {},
              i = Object.keys(e);
            for (o = 0; o < i.length; o++)
              (r = i[o]), t.indexOf(r) >= 0 || (n[r] = e[r]);
            return n;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (o = 0; o < i.length; o++)
            (r = i[o]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (n[r] = e[r]));
        }
        return n;
      }
      const c = e => {
        let { to: t } = e,
          r = d(e, ['to']);
        return t.includes('http')
          ? i.default.createElement('a', u({}, e, { href: t }))
          : ('#' === t[0] &&
              (t =
                n.default.join('/auto/', 'pages/generated/version.html') + t),
            i.default.createElement(
              'a',
              u({}, r, {
                href: t,
                onClick: r => {
                  if ((r.preventDefault(), '#' === e.to)) return !1;
                  const o = new URL(n.default.join(window.location.origin, t));
                  window.history.pushState(
                    (e => ({
                      href: e.href,
                      pathname: e.pathname,
                      hash: e.hash,
                      query: e.query
                    }))(o),
                    null,
                    t
                  ),
                    e.onClick();
                  const i = new CustomEvent('changeLocation', { detail: o });
                  return dispatchEvent(i), !1;
                }
              })
            ));
      };
      c.defaultProps = { href: '', onClick: () => {} };
      const f = e => {
        var t, r;
        return (
          (r = t = class extends i.default.Component {
            constructor(...e) {
              super(...e), s(this, 'state', { Comp: null });
            }
            componentDidMount() {
              !this.state.Comp &&
                this.props.shouldLoad &&
                e().then(e => {
                  this.setState({ Comp: e.default });
                });
            }
            render() {
              const { Comp: e } = this.state;
              return e
                ? i.default.createElement(
                    e,
                    this.props,
                    this.props.children || null
                  )
                : null;
            }
          }),
          s(t, 'defaultProps', { shouldLoad: !0 }),
          r
        );
      };
      f(() => r.e(31).then(r.bind(null, 107))),
        f(() => r.e(31).then(r.bind(null, 108)));
      var h = l('h1', {}, void 0, l('code', {}, void 0, 'version')),
        p = l(
          'p',
          {},
          void 0,
          'Get the semantic version bump for the given changes. Requires all PRs to have labels for the change type. If a PR does not have a label associated with it, it will default to ',
          l('code', {}, void 0, 'patch'),
          '.'
        ),
        v = l(
          'table',
          {},
          void 0,
          l(
            'thead',
            {},
            void 0,
            l(
              'tr',
              {},
              void 0,
              l('th', {}, void 0, 'Flag'),
              l('th', {}, void 0, 'Type'),
              l('th', {}, void 0, 'Description')
            )
          ),
          l(
            'tbody',
            {},
            void 0,
            l(
              'tr',
              {},
              void 0,
              l(
                'td',
                {},
                void 0,
                l('code', {}, void 0, '--only-publish-with-release-label')
              ),
              l('td', {}, void 0, 'Boolean'),
              l(
                'td',
                {},
                void 0,
                "Only bump version if 'release' label is on pull request"
              )
            ),
            l(
              'tr',
              {},
              void 0,
              l('td', {}, void 0, l('code', {}, void 0, '--from')),
              l('td', {}, void 0, 'String'),
              l(
                'td',
                {},
                void 0,
                'Git revision (tag, commit sha, ...) to calculate version bump from. Defaults to latest github release'
              )
            )
          )
        ),
        g = l(
          'p',
          {},
          void 0,
          'Get the new version using the last release to head'
        ),
        b = l(
          'pre',
          {},
          void 0,
          l(
            'code',
            { className: 'language-sh' },
            void 0,
            'auto version',
            l('br', {})
          )
        ),
        m = l(
          'p',
          {},
          void 0,
          'Useful in conjunction with ',
          l('code', {}, void 0, 'npm version'),
          ' to auto-version releases.'
        ),
        y = l('code', {}, void 0, '.autorc');
      var O = e =>
        l(
          'div',
          { className: e.className },
          void 0,
          l(
            'section',
            {},
            void 0,
            h,
            p,
            l(
              'h2',
              { id: 'options' },
              void 0,
              'Options ',
              l(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#options',
                'aria-hidden': 'true'
              })
            ),
            v,
            l(
              'h2',
              { id: 'examples' },
              void 0,
              'Examples ',
              l(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#examples',
                'aria-hidden': 'true'
              })
            ),
            g,
            b,
            m,
            l(
              'h2',
              { id: 'configure-versioning-labels' },
              void 0,
              'Configure Versioning Labels ',
              l(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#configure-versioning-labels',
                'aria-hidden': 'true'
              })
            ),
            l(
              'p',
              {},
              void 0,
              'You can customize the versioning labels in the ',
              y,
              '. To see configuration ',
              l(
                c,
                {
                  currentPage: e.currentPage,
                  to: '/auto/pages/generated/autorc.html#versioning-labels'
                },
                void 0,
                'go here'
              ),
              '.'
            )
          )
        );
      (t.default = O), (e.exports = t.default);
    }
  }
]);
//# sourceMappingURL=version.js.map
