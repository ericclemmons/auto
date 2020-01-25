(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    78: function(e, t, o) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var r,
        a = i(o(3)),
        n = (function(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var o in e)
              if (Object.prototype.hasOwnProperty.call(e, o)) {
                var r =
                  Object.defineProperty && Object.getOwnPropertyDescriptor
                    ? Object.getOwnPropertyDescriptor(e, o)
                    : {};
                r.get || r.set ? Object.defineProperty(t, o, r) : (t[o] = e[o]);
              }
          return (t.default = e), t;
        })(o(0));
      i(o(2)), i(o(106));
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function d(e, t, o, a) {
        r ||
          (r =
            ('function' == typeof Symbol &&
              Symbol.for &&
              Symbol.for('react.element')) ||
            60103);
        var n = e && e.defaultProps,
          i = arguments.length - 3;
        if ((t || 0 === i || (t = { children: void 0 }), t && n))
          for (var d in n) void 0 === t[d] && (t[d] = n[d]);
        else t || (t = n || {});
        if (1 === i) t.children = a;
        else if (i > 1) {
          for (var l = new Array(i), s = 0; s < i; s++) l[s] = arguments[s + 3];
          t.children = l;
        }
        return {
          $$typeof: r,
          type: e,
          key: void 0 === o ? null : '' + o,
          ref: null,
          props: t,
          _owner: null
        };
      }
      function l(e, t, o) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = o),
          e
        );
      }
      function s() {
        return (s =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var o = arguments[t];
              for (var r in o)
                Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function c(e, t) {
        if (null == e) return {};
        var o,
          r,
          a = (function(e, t) {
            if (null == e) return {};
            var o,
              r,
              a = {},
              n = Object.keys(e);
            for (r = 0; r < n.length; r++)
              (o = n[r]), t.indexOf(o) >= 0 || (a[o] = e[o]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          for (r = 0; r < n.length; r++)
            (o = n[r]),
              t.indexOf(o) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, o) &&
                  (a[o] = e[o]));
        }
        return a;
      }
      const u = e => {
        let { to: t } = e,
          o = c(e, ['to']);
        return t.includes('http')
          ? n.default.createElement('a', s({}, e, { href: t }))
          : ('#' === t[0] &&
              (t = a.default.join('/auto/', 'pages/generated/canary.html') + t),
            n.default.createElement(
              'a',
              s({}, o, {
                href: t,
                onClick: o => {
                  if ((o.preventDefault(), '#' === e.to)) return !1;
                  const r = new URL(a.default.join(window.location.origin, t));
                  window.history.pushState(
                    (e => ({
                      href: e.href,
                      pathname: e.pathname,
                      hash: e.hash,
                      query: e.query
                    }))(r),
                    null,
                    t
                  ),
                    e.onClick();
                  const n = new CustomEvent('changeLocation', { detail: r });
                  return dispatchEvent(n), !1;
                }
              })
            ));
      };
      u.defaultProps = { href: '', onClick: () => {} };
      const v = e => {
        var t, o;
        return (
          (o = t = class extends n.default.Component {
            constructor(...e) {
              super(...e), l(this, 'state', { Comp: null });
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
                ? n.default.createElement(
                    e,
                    this.props,
                    this.props.children || null
                  )
                : null;
            }
          }),
          l(t, 'defaultProps', { shouldLoad: !0 }),
          o
        );
      };
      v(() => o.e(31).then(o.bind(null, 107))),
        v(() => o.e(31).then(o.bind(null, 108)));
      var p = d('h1', {}, void 0, d('code', {}, void 0, 'canary')),
        f = d(
          'p',
          {},
          void 0,
          'Make a canary release of the project. Useful on PRs. If ran locally, ',
          d('code', {}, void 0, 'canary'),
          ' will release a canary version for your current git HEAD. This is ran automatically from "shipit".'
        ),
        h = d(
          'ol',
          {},
          void 0,
          d(
            'li',
            {},
            void 0,
            'In PR: 1.2.3-canary.123.0 + add version to PR body'
          ),
          d('li', {}, void 0, 'Locally: 1.2.3-canary.1810cfd')
        ),
        y = d(
          'table',
          {},
          void 0,
          d(
            'thead',
            {},
            void 0,
            d(
              'tr',
              {},
              void 0,
              d('th', {}, void 0, 'Flag'),
              d('th', {}, void 0, 'Type'),
              d('th', {}, void 0, 'Description')
            )
          ),
          d(
            'tbody',
            {},
            void 0,
            d(
              'tr',
              {},
              void 0,
              d(
                'td',
                {},
                void 0,
                d('code', {}, void 0, '--dry-run'),
                ', ',
                d('code', {}, void 0, '-d')
              ),
              d('td', {}, void 0, 'Boolean'),
              d(
                'td',
                {},
                void 0,
                'Report what command will do but do not actually do anything'
              )
            ),
            d(
              'tr',
              {},
              void 0,
              d('td', {}, void 0, d('code', {}, void 0, '--pr')),
              d('td', {}, void 0, 'Number'),
              d(
                'td',
                {},
                void 0,
                'PR number to use to create the canary version. Detected in CI env'
              )
            ),
            d(
              'tr',
              {},
              void 0,
              d('td', {}, void 0, d('code', {}, void 0, '--build')),
              d('td', {}, void 0, 'String'),
              d(
                'td',
                {},
                void 0,
                'Build number to use to create the canary version. Detected in CI env'
              )
            ),
            d(
              'tr',
              {},
              void 0,
              d(
                'td',
                {},
                void 0,
                d('code', {}, void 0, '--message'),
                ', ',
                d('code', {}, void 0, '-m')
              ),
              d('td', {}, void 0, 'String'),
              d(
                'td',
                {},
                void 0,
                "Message to comment on PR with. Defaults to 'Published PR with canary version: %v'. Pass false to disable the comment"
              )
            )
          )
        ),
        m = d(
          'pre',
          {},
          void 0,
          d(
            'code',
            { className: 'language-sh' },
            void 0,
            'auto canary',
            d('br', {})
          )
        ),
        b = d(
          'pre',
          {},
          void 0,
          d(
            'code',
            { className: 'language-sh' },
            void 0,
            'auto canary --pr 123 --build 5',
            d('br', {})
          )
        ),
        g = d(
          'pre',
          {},
          void 0,
          d(
            'code',
            { className: 'language-sh' },
            void 0,
            'auto canary --message ',
            d(
              'span',
              { className: 'hljs-string' },
              void 0,
              '"Install PR version: `yarn add -D my-project@%v`"'
            ),
            d('br', {})
          )
        ),
        w = d(
          'pre',
          {},
          void 0,
          d(
            'code',
            { className: 'language-sh' },
            void 0,
            'auto canary --message ',
            d('span', { className: 'hljs-literal' }, void 0, 'false'),
            d('br', {})
          )
        );
      var P = e =>
        d(
          'div',
          { className: e.className },
          void 0,
          d(
            'section',
            {},
            void 0,
            p,
            f,
            h,
            d(
              'h2',
              { id: 'options' },
              void 0,
              'Options ',
              d(u, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#options',
                'aria-hidden': 'true'
              })
            ),
            y,
            d(
              'h2',
              { id: 'examples' },
              void 0,
              'Examples ',
              d(u, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#examples',
                'aria-hidden': 'true'
              })
            ),
            m,
            b,
            g,
            w
          )
        );
      (t.default = P), (e.exports = t.default);
    }
  }
]);
//# sourceMappingURL=canary.js.map
