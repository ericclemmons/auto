(window.webpackJsonp = window.webpackJsonp || []).push([
  [37],
  {
    86: function(t, e, o) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var r,
        i = d(o(3)),
        n = (function(t) {
          if (t && t.__esModule) return t;
          var e = {};
          if (null != t)
            for (var o in t)
              if (Object.prototype.hasOwnProperty.call(t, o)) {
                var r =
                  Object.defineProperty && Object.getOwnPropertyDescriptor
                    ? Object.getOwnPropertyDescriptor(t, o)
                    : {};
                r.get || r.set ? Object.defineProperty(e, o, r) : (e[o] = t[o]);
              }
          return (e.default = t), e;
        })(o(0));
      d(o(2)), d(o(106));
      function d(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function a(t, e, o, i) {
        r ||
          (r =
            ('function' == typeof Symbol &&
              Symbol.for &&
              Symbol.for('react.element')) ||
            60103);
        var n = t && t.defaultProps,
          d = arguments.length - 3;
        if ((e || 0 === d || (e = { children: void 0 }), e && n))
          for (var a in n) void 0 === e[a] && (e[a] = n[a]);
        else e || (e = n || {});
        if (1 === d) e.children = i;
        else if (d > 1) {
          for (var s = new Array(d), l = 0; l < d; l++) s[l] = arguments[l + 3];
          e.children = s;
        }
        return {
          $$typeof: r,
          type: t,
          key: void 0 === o ? null : '' + o,
          ref: null,
          props: e,
          _owner: null
        };
      }
      function s(t, e, o) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = o),
          t
        );
      }
      function l() {
        return (l =
          Object.assign ||
          function(t) {
            for (var e = 1; e < arguments.length; e++) {
              var o = arguments[e];
              for (var r in o)
                Object.prototype.hasOwnProperty.call(o, r) && (t[r] = o[r]);
            }
            return t;
          }).apply(this, arguments);
      }
      function u(t, e) {
        if (null == t) return {};
        var o,
          r,
          i = (function(t, e) {
            if (null == t) return {};
            var o,
              r,
              i = {},
              n = Object.keys(t);
            for (r = 0; r < n.length; r++)
              (o = n[r]), e.indexOf(o) >= 0 || (i[o] = t[o]);
            return i;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          for (r = 0; r < n.length; r++)
            (o = n[r]),
              e.indexOf(o) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, o) &&
                  (i[o] = t[o]));
        }
        return i;
      }
      const c = t => {
        let { to: e } = t,
          o = u(t, ['to']);
        return e.includes('http')
          ? n.default.createElement('a', l({}, t, { href: e }))
          : ('#' === e[0] &&
              (e =
                i.default.join('/auto/', 'pages/generated/pr-status.html') + e),
            n.default.createElement(
              'a',
              l({}, o, {
                href: e,
                onClick: o => {
                  if ((o.preventDefault(), '#' === t.to)) return !1;
                  const r = new URL(i.default.join(window.location.origin, e));
                  window.history.pushState(
                    (t => ({
                      href: t.href,
                      pathname: t.pathname,
                      hash: t.hash,
                      query: t.query
                    }))(r),
                    null,
                    e
                  ),
                    t.onClick();
                  const n = new CustomEvent('changeLocation', { detail: r });
                  return dispatchEvent(n), !1;
                }
              })
            ));
      };
      c.defaultProps = { href: '', onClick: () => {} };
      const p = t => {
        var e, o;
        return (
          (o = e = class extends n.default.Component {
            constructor(...t) {
              super(...t), s(this, 'state', { Comp: null });
            }
            componentDidMount() {
              !this.state.Comp &&
                this.props.shouldLoad &&
                t().then(t => {
                  this.setState({ Comp: t.default });
                });
            }
            render() {
              const { Comp: t } = this.state;
              return t
                ? n.default.createElement(
                    t,
                    this.props,
                    this.props.children || null
                  )
                : null;
            }
          }),
          s(e, 'defaultProps', { shouldLoad: !0 }),
          o
        );
      };
      p(() => o.e(31).then(o.bind(null, 107))),
        p(() => o.e(31).then(o.bind(null, 108)));
      var v = a('h1', {}, void 0, a('code', {}, void 0, 'pr-status')),
        f = a('p', {}, void 0, 'Set the status on a PR commit'),
        h = a(
          'table',
          {},
          void 0,
          a(
            'thead',
            {},
            void 0,
            a(
              'tr',
              {},
              void 0,
              a('th', {}, void 0, 'Flag'),
              a('th', {}, void 0, 'Type'),
              a('th', {}, void 0, 'Description')
            )
          ),
          a(
            'tbody',
            {},
            void 0,
            a(
              'tr',
              {},
              void 0,
              a('td', {}, void 0, a('code', {}, void 0, '--sha')),
              a('td', {}, void 0, 'String'),
              a(
                'td',
                {},
                void 0,
                'Specify a custom git sha. Defaults to the HEAD for a git repo in the current repository'
              )
            ),
            a(
              'tr',
              {},
              void 0,
              a('td', {}, void 0, a('code', {}, void 0, '--pr')),
              a('td', {}, void 0, 'Number'),
              a(
                'td',
                {},
                void 0,
                'PR to set the status on. Detects PR number in CI'
              )
            ),
            a(
              'tr',
              {},
              void 0,
              a('td', {}, void 0, a('code', {}, void 0, '--url')),
              a('td', {}, void 0, 'String'),
              a('td', {}, void 0, 'URL to associate with this status')
            ),
            a(
              'tr',
              {},
              void 0,
              a('td', {}, void 0, a('code', {}, void 0, '--state')),
              a('td', {}, void 0, 'String'),
              a(
                'td',
                {},
                void 0,
                "State of the PR. ['pending', 'success', 'error', 'failure']"
              )
            ),
            a(
              'tr',
              {},
              void 0,
              a('td', {}, void 0, a('code', {}, void 0, '--description')),
              a('td', {}, void 0, 'String'),
              a('td', {}, void 0, 'A description of the status')
            ),
            a(
              'tr',
              {},
              void 0,
              a('td', {}, void 0, a('code', {}, void 0, '--context')),
              a('td', {}, void 0, 'String'),
              a(
                'td',
                {},
                void 0,
                'A string label to differentiate this status from others'
              )
            ),
            a(
              'tr',
              {},
              void 0,
              a(
                'td',
                {},
                void 0,
                a('code', {}, void 0, '--dry-run'),
                ', ',
                a('code', {}, void 0, '-d')
              ),
              a('td', {}, void 0, 'Boolean'),
              a(
                'td',
                {},
                void 0,
                'Report what command will do but do not actually do anything'
              )
            )
          )
        ),
        m = a(
          'pre',
          {},
          void 0,
          a(
            'code',
            { className: 'language-sh' },
            void 0,
            'auto pr \\\\ ',
            a('br', {}),
            '   --state pending \\\\ ',
            a('br', {}),
            '   --description ',
            a(
              'span',
              { className: 'hljs-string' },
              void 0,
              '"Build still running..."'
            ),
            ' \\\\ ',
            a('br', {}),
            '   --context build-check',
            a('br', {})
          )
        );
      var b = t =>
        a(
          'div',
          { className: t.className },
          void 0,
          a(
            'section',
            {},
            void 0,
            v,
            f,
            a(
              'h2',
              { id: 'options' },
              void 0,
              'Options ',
              a(c, {
                currentPage: t.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#options',
                'aria-hidden': 'true'
              })
            ),
            h,
            a(
              'h2',
              { id: 'examples' },
              void 0,
              'Examples ',
              a(c, {
                currentPage: t.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#examples',
                'aria-hidden': 'true'
              })
            ),
            m
          )
        );
      (e.default = b), (t.exports = e.default);
    }
  }
]);
//# sourceMappingURL=pr-status.js.map
