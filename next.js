(window.webpackJsonp = window.webpackJsonp || []).push([
  [28],
  {
    74: function(e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var o,
        n = i(r(3)),
        a = (function(e) {
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
      i(r(2)), i(r(106));
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function l(e, t, r, n) {
        o ||
          (o =
            ('function' == typeof Symbol &&
              Symbol.for &&
              Symbol.for('react.element')) ||
            60103);
        var a = e && e.defaultProps,
          i = arguments.length - 3;
        if ((t || 0 === i || (t = { children: void 0 }), t && a))
          for (var l in a) void 0 === t[l] && (t[l] = a[l]);
        else t || (t = a || {});
        if (1 === i) t.children = n;
        else if (i > 1) {
          for (var s = new Array(i), d = 0; d < i; d++) s[d] = arguments[d + 3];
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
      function d() {
        return (d =
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
      function u(e, t) {
        if (null == e) return {};
        var r,
          o,
          n = (function(e, t) {
            if (null == e) return {};
            var r,
              o,
              n = {},
              a = Object.keys(e);
            for (o = 0; o < a.length; o++)
              (r = a[o]), t.indexOf(r) >= 0 || (n[r] = e[r]);
            return n;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (o = 0; o < a.length; o++)
            (r = a[o]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (n[r] = e[r]));
        }
        return n;
      }
      const c = e => {
        let { to: t } = e,
          r = u(e, ['to']);
        return t.includes('http')
          ? a.default.createElement('a', d({}, e, { href: t }))
          : ('#' === t[0] &&
              (t = n.default.join('/auto/', 'pages/extras/next.html') + t),
            a.default.createElement(
              'a',
              d({}, r, {
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
                  const a = new CustomEvent('changeLocation', { detail: o });
                  return dispatchEvent(a), !1;
                }
              })
            ));
      };
      c.defaultProps = { href: '', onClick: () => {} };
      const p = e => {
        var t, r;
        return (
          (r = t = class extends a.default.Component {
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
                ? a.default.createElement(
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
      p(() => r.e(31).then(r.bind(null, 107))),
        p(() => r.e(31).then(r.bind(null, 108)));
      var h = l(
          'p',
          {},
          void 0,
          'You should make your pre-release branches protected on GitHub. This will prevent a bunch of unwanted behavior from happening.'
        ),
        f = l('li', {}, void 0, 'Click ', l('code', {}, void 0, 'Branches')),
        v = l('li', {}, void 0, 'Click ', l('code', {}, void 0, 'Add Rule')),
        b = l(
          'li',
          {},
          void 0,
          'Enter the name of your prerelease branch (ex: ',
          l('code', {}, void 0, 'next'),
          ')'
        ),
        g = l('li', {}, void 0, 'Configure extra branch protection settings'),
        m = l(
          'li',
          {},
          void 0,
          '(Optional) Set the base branch in GitHub to your prerelease branch (this ensure new PRs go to this branch)'
        );
      var y = e =>
        l(
          'div',
          { className: e.className },
          void 0,
          l(
            'section',
            {},
            void 0,
            l(
              'h3',
              { id: 'setting-up-protected-branches' },
              void 0,
              'Setting up Protected Branches ',
              l(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#setting-up-protected-branches',
                'aria-hidden': 'true'
              })
            ),
            h,
            l(
              'ol',
              {},
              void 0,
              l(
                'li',
                {},
                void 0,
                "Go to you project's setting on ",
                l(
                  c,
                  {
                    currentPage: e.currentPage,
                    target: '_blank',
                    to: 'https://github.com',
                    className: 'external-link'
                  },
                  void 0,
                  'GitHub'
                )
              ),
              f,
              v,
              b,
              g,
              m
            )
          )
        );
      (t.default = y), (e.exports = t.default);
    },
    83: function(e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var o,
        n = i(r(3)),
        a = (function(e) {
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
      i(r(2)), i(r(106));
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function l(e, t, r, n) {
        o ||
          (o =
            ('function' == typeof Symbol &&
              Symbol.for &&
              Symbol.for('react.element')) ||
            60103);
        var a = e && e.defaultProps,
          i = arguments.length - 3;
        if ((t || 0 === i || (t = { children: void 0 }), t && a))
          for (var l in a) void 0 === t[l] && (t[l] = a[l]);
        else t || (t = a || {});
        if (1 === i) t.children = n;
        else if (i > 1) {
          for (var s = new Array(i), d = 0; d < i; d++) s[d] = arguments[d + 3];
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
      function d() {
        return (d =
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
      function u(e, t) {
        if (null == e) return {};
        var r,
          o,
          n = (function(e, t) {
            if (null == e) return {};
            var r,
              o,
              n = {},
              a = Object.keys(e);
            for (o = 0; o < a.length; o++)
              (r = a[o]), t.indexOf(r) >= 0 || (n[r] = e[r]);
            return n;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (o = 0; o < a.length; o++)
            (r = a[o]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (n[r] = e[r]));
        }
        return n;
      }
      const c = e => {
        let { to: t } = e,
          r = u(e, ['to']);
        return t.includes('http')
          ? a.default.createElement('a', d({}, e, { href: t }))
          : ('#' === t[0] &&
              (t = n.default.join('/auto/', 'pages/generated/next.html') + t),
            a.default.createElement(
              'a',
              d({}, r, {
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
                  const a = new CustomEvent('changeLocation', { detail: o });
                  return dispatchEvent(a), !1;
                }
              })
            ));
      };
      c.defaultProps = { href: '', onClick: () => {} };
      const p = e => {
        var t, r;
        return (
          (r = t = class extends a.default.Component {
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
                ? a.default.createElement(
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
      p(() => r.e(31).then(r.bind(null, 107))),
        p(() => r.e(31).then(r.bind(null, 108)));
      var h = l('h1', {}, void 0, l('code', {}, void 0, 'next')),
        f = l(
          'p',
          {},
          void 0,
          'Make a release for your "prerelease" release line. This is ran automatically from "shipit".'
        ),
        v = l(
          'ol',
          {},
          void 0,
          l(
            'li',
            {},
            void 0,
            'Creates a prerelease on package management platform'
          ),
          l(
            'li',
            {},
            void 0,
            'Creates a "Pre Release" on GitHub releases page.'
          )
        ),
        b = l(
          'p',
          {},
          void 0,
          'Calling the ',
          l('code', {}, void 0, 'next'),
          ' command from a prerelease branch will publish a prerelease, otherwise it will publish to the default prerelease branch.'
        ),
        g = l(
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
                l('code', {}, void 0, '--dry-run'),
                ', ',
                l('code', {}, void 0, '-d')
              ),
              l('td', {}, void 0, 'Boolean'),
              l(
                'td',
                {},
                void 0,
                'Report what command will do but do not actually do anything'
              )
            ),
            l(
              'tr',
              {},
              void 0,
              l(
                'td',
                {},
                void 0,
                l('code', {}, void 0, '--message'),
                ', ',
                l('code', {}, void 0, '-m')
              ),
              l('td', {}, void 0, 'String'),
              l(
                'td',
                {},
                void 0,
                'The message used when attaching the prerelease version to a PR'
              )
            )
          )
        ),
        m = l(
          'pre',
          {},
          void 0,
          l(
            'code',
            { className: 'language-sh' },
            void 0,
            'auto next',
            l('br', {})
          )
        ),
        y = l(
          'p',
          {},
          void 0,
          'You should make your pre-release branches protected on GitHub. This will prevent a bunch of unwanted behavior from happening.'
        ),
        w = l('li', {}, void 0, 'Click ', l('code', {}, void 0, 'Branches')),
        O = l('li', {}, void 0, 'Click ', l('code', {}, void 0, 'Add Rule')),
        P = l(
          'li',
          {},
          void 0,
          'Enter the name of your prerelease branch (ex: ',
          l('code', {}, void 0, 'next'),
          ')'
        ),
        j = l('li', {}, void 0, 'Configure extra branch protection settings'),
        k = l(
          'li',
          {},
          void 0,
          '(Optional) Set the base branch in GitHub to your prerelease branch (this ensure new PRs go to this branch)'
        );
      var C = e =>
        l(
          'div',
          { className: e.className },
          void 0,
          l(
            'section',
            {},
            void 0,
            h,
            f,
            v,
            b,
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
            g,
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
            m,
            l(
              'h3',
              { id: 'setting-up-protected-branches' },
              void 0,
              'Setting up Protected Branches ',
              l(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#setting-up-protected-branches',
                'aria-hidden': 'true'
              })
            ),
            y,
            l(
              'ol',
              {},
              void 0,
              l(
                'li',
                {},
                void 0,
                "Go to you project's setting on ",
                l(
                  c,
                  {
                    currentPage: e.currentPage,
                    target: '_blank',
                    to: 'https://github.com',
                    className: 'external-link'
                  },
                  void 0,
                  'GitHub'
                )
              ),
              w,
              O,
              P,
              j,
              k
            )
          )
        );
      (t.default = C), (e.exports = t.default);
    }
  }
]);
//# sourceMappingURL=next.js.map
