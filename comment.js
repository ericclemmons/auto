(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    80: function(e, t, o) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var n,
        r = i(o(3)),
        d = (function(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var o in e)
              if (Object.prototype.hasOwnProperty.call(e, o)) {
                var n =
                  Object.defineProperty && Object.getOwnPropertyDescriptor
                    ? Object.getOwnPropertyDescriptor(e, o)
                    : {};
                n.get || n.set ? Object.defineProperty(t, o, n) : (t[o] = e[o]);
              }
          return (t.default = e), t;
        })(o(0));
      i(o(2)), i(o(106));
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function a(e, t, o, r) {
        n ||
          (n =
            ('function' == typeof Symbol &&
              Symbol.for &&
              Symbol.for('react.element')) ||
            60103);
        var d = e && e.defaultProps,
          i = arguments.length - 3;
        if ((t || 0 === i || (t = { children: void 0 }), t && d))
          for (var a in d) void 0 === t[a] && (t[a] = d[a]);
        else t || (t = d || {});
        if (1 === i) t.children = r;
        else if (i > 1) {
          for (var l = new Array(i), s = 0; s < i; s++) l[s] = arguments[s + 3];
          t.children = l;
        }
        return {
          $$typeof: n,
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
              for (var n in o)
                Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function c(e, t) {
        if (null == e) return {};
        var o,
          n,
          r = (function(e, t) {
            if (null == e) return {};
            var o,
              n,
              r = {},
              d = Object.keys(e);
            for (n = 0; n < d.length; n++)
              (o = d[n]), t.indexOf(o) >= 0 || (r[o] = e[o]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var d = Object.getOwnPropertySymbols(e);
          for (n = 0; n < d.length; n++)
            (o = d[n]),
              t.indexOf(o) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, o) &&
                  (r[o] = e[o]));
        }
        return r;
      }
      const u = e => {
        let { to: t } = e,
          o = c(e, ['to']);
        return t.includes('http')
          ? d.default.createElement('a', s({}, e, { href: t }))
          : ('#' === t[0] &&
              (t =
                r.default.join('/auto/', 'pages/generated/comment.html') + t),
            d.default.createElement(
              'a',
              s({}, o, {
                href: t,
                onClick: o => {
                  if ((o.preventDefault(), '#' === e.to)) return !1;
                  const n = new URL(r.default.join(window.location.origin, t));
                  window.history.pushState(
                    (e => ({
                      href: e.href,
                      pathname: e.pathname,
                      hash: e.hash,
                      query: e.query
                    }))(n),
                    null,
                    t
                  ),
                    e.onClick();
                  const d = new CustomEvent('changeLocation', { detail: n });
                  return dispatchEvent(d), !1;
                }
              })
            ));
      };
      u.defaultProps = { href: '', onClick: () => {} };
      const v = e => {
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
      v(() => o.e(31).then(o.bind(null, 107))),
        v(() => o.e(31).then(o.bind(null, 108)));
      var p = a('h1', {}, void 0, a('code', {}, void 0, 'comment')),
        h = a(
          'p',
          {},
          void 0,
          'Comment on a pull request with a markdown message. Each comment has a context, and each context only has one comment.'
        ),
        m = a(
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
              a(
                'td',
                {},
                void 0,
                a('code', {}, void 0, '--edit'),
                ', ',
                a('code', {}, void 0, '-e')
              ),
              a('td', {}, void 0, 'Boolean'),
              a('td', {}, void 0, 'Edit old comment')
            ),
            a(
              'tr',
              {},
              void 0,
              a('td', {}, void 0, a('code', {}, void 0, '--delete')),
              a('td', {}, void 0, 'Boolean'),
              a('td', {}, void 0, 'Delete old comment')
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
              a('td', {}, void 0, 'Message to post to comment')
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
        f = a(
          'pre',
          {},
          void 0,
          a(
            'code',
            { className: 'language-sh' },
            void 0,
            'auto comment --delete',
            a('br', {})
          )
        ),
        g = a(
          'pre',
          {},
          void 0,
          a(
            'code',
            { className: 'language-sh' },
            void 0,
            'auto comment --pr 123 --message ',
            a(
              'span',
              { className: 'hljs-string' },
              void 0,
              '"# Why you\'re wrong..."'
            ),
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
            'auto comment --pr 123 --edit --message ',
            a('span', { className: 'hljs-string' }, void 0, '"This smells..."'),
            ' --context code-smell',
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
            p,
            h,
            a(
              'h2',
              { id: 'options' },
              void 0,
              'Options ',
              a(u, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#options',
                'aria-hidden': 'true'
              })
            ),
            m,
            a(
              'h2',
              { id: 'examples' },
              void 0,
              'Examples ',
              a(u, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#examples',
                'aria-hidden': 'true'
              })
            ),
            f,
            g,
            y
          )
        );
      (t.default = b), (e.exports = t.default);
    }
  }
]);
//# sourceMappingURL=comment.js.map
