(window.webpackJsonp = window.webpackJsonp || []).push([
  [34],
  {
    85: function(e, t, o) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var r,
        n = a(o(3)),
        i = (function(e) {
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
      a(o(2)), a(o(106));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function d(e, t, o, n) {
        r ||
          (r =
            ('function' == typeof Symbol &&
              Symbol.for &&
              Symbol.for('react.element')) ||
            60103);
        var i = e && e.defaultProps,
          a = arguments.length - 3;
        if ((t || 0 === a || (t = { children: void 0 }), t && i))
          for (var d in i) void 0 === t[d] && (t[d] = i[d]);
        else t || (t = i || {});
        if (1 === a) t.children = n;
        else if (a > 1) {
          for (var l = new Array(a), s = 0; s < a; s++) l[s] = arguments[s + 3];
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
      function u(e, t) {
        if (null == e) return {};
        var o,
          r,
          n = (function(e, t) {
            if (null == e) return {};
            var o,
              r,
              n = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (o = i[r]), t.indexOf(o) >= 0 || (n[o] = e[o]);
            return n;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (o = i[r]),
              t.indexOf(o) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, o) &&
                  (n[o] = e[o]));
        }
        return n;
      }
      const c = e => {
        let { to: t } = e,
          o = u(e, ['to']);
        return t.includes('http')
          ? i.default.createElement('a', s({}, e, { href: t }))
          : ('#' === t[0] &&
              (t =
                n.default.join('/auto/', 'pages/generated/pr-check.html') + t),
            i.default.createElement(
              'a',
              s({}, o, {
                href: t,
                onClick: o => {
                  if ((o.preventDefault(), '#' === e.to)) return !1;
                  const r = new URL(n.default.join(window.location.origin, t));
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
                  const i = new CustomEvent('changeLocation', { detail: r });
                  return dispatchEvent(i), !1;
                }
              })
            ));
      };
      c.defaultProps = { href: '', onClick: () => {} };
      const p = e => {
        var t, o;
        return (
          (o = t = class extends i.default.Component {
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
                ? i.default.createElement(
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
      p(() => o.e(31).then(o.bind(null, 107))),
        p(() => o.e(31).then(o.bind(null, 108)));
      var h = d('h1', {}, void 0, d('code', {}, void 0, 'pr-check')),
        f = d('p', {}, void 0, 'Check that a pull request has a SemVer label'),
        v = d(
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
              d('td', {}, void 0, d('code', {}, void 0, '--pr')),
              d('td', {}, void 0, 'Number'),
              d(
                'td',
                {},
                void 0,
                'The pull request the command should use. Detects PR number in CI'
              )
            ),
            d(
              'tr',
              {},
              void 0,
              d('td', {}, void 0, d('code', {}, void 0, '--url')),
              d('td', {}, void 0, 'String'),
              d('td', {}, void 0, 'URL to associate with this status')
            ),
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
              d('td', {}, void 0, d('code', {}, void 0, '--context')),
              d('td', {}, void 0, 'String'),
              d(
                'td',
                {},
                void 0,
                'A string label to differentiate this status from others'
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
            'auto pr-check --url http://your-ci.com/build/123',
            d('br', {})
          )
        );
      var b = e =>
        d(
          'div',
          { className: e.className },
          void 0,
          d(
            'section',
            {},
            void 0,
            h,
            f,
            d(
              'h2',
              { id: 'options' },
              void 0,
              'Options ',
              d(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#options',
                'aria-hidden': 'true'
              })
            ),
            v,
            d(
              'h2',
              { id: 'examples' },
              void 0,
              'Examples ',
              d(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#examples',
                'aria-hidden': 'true'
              })
            ),
            m
          )
        );
      (t.default = b), (e.exports = t.default);
    }
  }
]);
//# sourceMappingURL=pr-check.js.map
