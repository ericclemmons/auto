(window.webpackJsonp = window.webpackJsonp || []).push([
  [33],
  {
    84: function(e, t, o) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var r,
        n = i(o(3)),
        d = (function(e) {
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
      function a(e, t, o, n) {
        r ||
          (r =
            ('function' == typeof Symbol &&
              Symbol.for &&
              Symbol.for('react.element')) ||
            60103);
        var d = e && e.defaultProps,
          i = arguments.length - 3;
        if ((t || 0 === i || (t = { children: void 0 }), t && d))
          for (var a in d) void 0 === t[a] && (t[a] = d[a]);
        else t || (t = d || {});
        if (1 === i) t.children = n;
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
      function u(e, t) {
        if (null == e) return {};
        var o,
          r,
          n = (function(e, t) {
            if (null == e) return {};
            var o,
              r,
              n = {},
              d = Object.keys(e);
            for (r = 0; r < d.length; r++)
              (o = d[r]), t.indexOf(o) >= 0 || (n[o] = e[o]);
            return n;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var d = Object.getOwnPropertySymbols(e);
          for (r = 0; r < d.length; r++)
            (o = d[r]),
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
          ? d.default.createElement('a', s({}, e, { href: t }))
          : ('#' === t[0] &&
              (t =
                n.default.join('/auto/', 'pages/generated/pr-body.html') + t),
            d.default.createElement(
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
                  const d = new CustomEvent('changeLocation', { detail: r });
                  return dispatchEvent(d), !1;
                }
              })
            ));
      };
      c.defaultProps = { href: '', onClick: () => {} };
      const p = e => {
        var t, o;
        return (
          (o = t = class extends d.default.Component {
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
                ? d.default.createElement(
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
      var v = a('h1', {}, void 0, a('code', {}, void 0, 'pr-body')),
        h = a(
          'p',
          {},
          void 0,
          'Update the body of a PR with a message. Appends to PR and will not overwrite user content. Each comment has a context, and each context only has one comment.'
        ),
        f = a(
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
              a('td', {}, void 0, a('code', {}, void 0, '--pr')),
              a('td', {}, void 0, 'Number'),
              a(
                'td',
                {},
                void 0,
                'The pull request the command should use. Detects PR number in CI'
              )
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
              a('td', {}, void 0, a('code', {}, void 0, '--delete')),
              a('td', {}, void 0, 'Boolean'),
              a('td', {}, void 0, 'Delete old PR body update')
            ),
            a(
              'tr',
              {},
              void 0,
              a(
                'td',
                {},
                void 0,
                a('code', {}, void 0, '--message'),
                ', ',
                a('code', {}, void 0, '-m')
              ),
              a('td', {}, void 0, 'String'),
              a('td', {}, void 0, 'Message to post to PR body')
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
            'auto pr-body --delete',
            a('br', {})
          )
        ),
        y = a(
          'pre',
          {},
          void 0,
          a(
            'code',
            { className: 'language-sh' },
            void 0,
            'auto pr-body --pr 123 --comment ',
            a(
              'span',
              { className: 'hljs-string' },
              void 0,
              '"The new version is: 1.2.3"'
            ),
            a('br', {})
          )
        );
      var b = e =>
        a(
          'div',
          { className: e.className },
          void 0,
          a(
            'section',
            {},
            void 0,
            v,
            h,
            a(
              'h2',
              { id: 'options' },
              void 0,
              'Options ',
              a(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#options',
                'aria-hidden': 'true'
              })
            ),
            f,
            a(
              'h2',
              { id: 'examples' },
              void 0,
              'Examples ',
              a(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#examples',
                'aria-hidden': 'true'
              })
            ),
            m,
            y
          )
        );
      (t.default = b), (e.exports = t.default);
    }
  }
]);
//# sourceMappingURL=pr-body.js.map
