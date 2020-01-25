(window.webpackJsonp = window.webpackJsonp || []).push([
  [26],
  {
    73: function(e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var n,
        a = i(r(3)),
        o = (function(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var r in e)
              if (Object.prototype.hasOwnProperty.call(e, r)) {
                var n =
                  Object.defineProperty && Object.getOwnPropertyDescriptor
                    ? Object.getOwnPropertyDescriptor(e, r)
                    : {};
                n.get || n.set ? Object.defineProperty(t, r, n) : (t[r] = e[r]);
              }
          return (t.default = e), t;
        })(r(0));
      i(r(2)), i(r(106));
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function l(e, t, r, a) {
        n ||
          (n =
            ('function' == typeof Symbol &&
              Symbol.for &&
              Symbol.for('react.element')) ||
            60103);
        var o = e && e.defaultProps,
          i = arguments.length - 3;
        if ((t || 0 === i || (t = { children: void 0 }), t && o))
          for (var l in o) void 0 === t[l] && (t[l] = o[l]);
        else t || (t = o || {});
        if (1 === i) t.children = a;
        else if (i > 1) {
          for (var s = new Array(i), u = 0; u < i; u++) s[u] = arguments[u + 3];
          t.children = s;
        }
        return {
          $$typeof: n,
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
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function d(e, t) {
        if (null == e) return {};
        var r,
          n,
          a = (function(e, t) {
            if (null == e) return {};
            var r,
              n,
              a = {},
              o = Object.keys(e);
            for (n = 0; n < o.length; n++)
              (r = o[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (n = 0; n < o.length; n++)
            (r = o[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (a[r] = e[r]));
        }
        return a;
      }
      const h = e => {
        let { to: t } = e,
          r = d(e, ['to']);
        return t.includes('http')
          ? o.default.createElement('a', u({}, e, { href: t }))
          : ('#' === t[0] &&
              (t = a.default.join('/auto/', 'pages/extras/label.html') + t),
            o.default.createElement(
              'a',
              u({}, r, {
                href: t,
                onClick: r => {
                  if ((r.preventDefault(), '#' === e.to)) return !1;
                  const n = new URL(a.default.join(window.location.origin, t));
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
                  const o = new CustomEvent('changeLocation', { detail: n });
                  return dispatchEvent(o), !1;
                }
              })
            ));
      };
      h.defaultProps = { href: '', onClick: () => {} };
      const c = e => {
        var t, r;
        return (
          (r = t = class extends o.default.Component {
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
                ? o.default.createElement(
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
      c(() => r.e(31).then(r.bind(null, 107))),
        c(() => r.e(31).then(r.bind(null, 108)));
      var p = l(
          'p',
          {},
          void 0,
          'The following will only run the test:visual script when the PR has has the',
          l('br', {}),
          'Visual label.'
        ),
        f = l(
          'pre',
          {},
          void 0,
          l(
            'code',
            { className: 'language-sh' },
            void 0,
            l('span', { className: 'hljs-built_in' }, void 0, 'export'),
            ' PATH=$(npm bin):',
            l('span', { className: 'hljs-variable' }, void 0, '$PATH'),
            l('br', {}),
            l('br', {}),
            l('span', { className: 'hljs-keyword' }, void 0, 'if'),
            ' [ auto label --pr ',
            l('span', { className: 'hljs-variable' }, void 0, '$PR_NUMBER'),
            ' | grep -c ',
            l('span', { className: 'hljs-string' }, void 0, "'^Visual'"),
            ' -ne 0 ];',
            l('br', {}),
            l('span', { className: 'hljs-keyword' }, void 0, 'then'),
            l('br', {}),
            '  npm run ',
            l('span', { className: 'hljs-built_in' }, void 0, 'test'),
            ':visual',
            l('br', {}),
            l('span', { className: 'hljs-keyword' }, void 0, 'fi'),
            l('br', {})
          )
        ),
        v = l(
          'p',
          {},
          void 0,
          'Running ',
          l('code', {}, void 0, 'auto label'),
          ' without the PR number will:'
        ),
        b = l(
          'ul',
          {},
          void 0,
          l(
            'li',
            {},
            void 0,
            'When run in master will get the labels for the last merged PR'
          ),
          l(
            'li',
            {},
            void 0,
            "When run for a PR in CI will use the PR's number"
          )
        );
      var m = e =>
        l(
          'div',
          { className: e.className },
          void 0,
          l(
            'section',
            {},
            void 0,
            l(
              'h2',
              { id: 'using-in-scripts' },
              void 0,
              'Using in scripts ',
              l(h, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#using-in-scripts',
                'aria-hidden': 'true'
              })
            ),
            p,
            f,
            l(
              'h2',
              { id: 'without-pr-number' },
              void 0,
              'Without PR Number ',
              l(h, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#without-pr-number',
                'aria-hidden': 'true'
              })
            ),
            v,
            b
          )
        );
      (t.default = m), (e.exports = t.default);
    },
    82: function(e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var n,
        a = i(r(3)),
        o = (function(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var r in e)
              if (Object.prototype.hasOwnProperty.call(e, r)) {
                var n =
                  Object.defineProperty && Object.getOwnPropertyDescriptor
                    ? Object.getOwnPropertyDescriptor(e, r)
                    : {};
                n.get || n.set ? Object.defineProperty(t, r, n) : (t[r] = e[r]);
              }
          return (t.default = e), t;
        })(r(0));
      i(r(2)), i(r(106));
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function l(e, t, r, a) {
        n ||
          (n =
            ('function' == typeof Symbol &&
              Symbol.for &&
              Symbol.for('react.element')) ||
            60103);
        var o = e && e.defaultProps,
          i = arguments.length - 3;
        if ((t || 0 === i || (t = { children: void 0 }), t && o))
          for (var l in o) void 0 === t[l] && (t[l] = o[l]);
        else t || (t = o || {});
        if (1 === i) t.children = a;
        else if (i > 1) {
          for (var s = new Array(i), u = 0; u < i; u++) s[u] = arguments[u + 3];
          t.children = s;
        }
        return {
          $$typeof: n,
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
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function d(e, t) {
        if (null == e) return {};
        var r,
          n,
          a = (function(e, t) {
            if (null == e) return {};
            var r,
              n,
              a = {},
              o = Object.keys(e);
            for (n = 0; n < o.length; n++)
              (r = o[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (n = 0; n < o.length; n++)
            (r = o[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (a[r] = e[r]));
        }
        return a;
      }
      const h = e => {
        let { to: t } = e,
          r = d(e, ['to']);
        return t.includes('http')
          ? o.default.createElement('a', u({}, e, { href: t }))
          : ('#' === t[0] &&
              (t = a.default.join('/auto/', 'pages/generated/label.html') + t),
            o.default.createElement(
              'a',
              u({}, r, {
                href: t,
                onClick: r => {
                  if ((r.preventDefault(), '#' === e.to)) return !1;
                  const n = new URL(a.default.join(window.location.origin, t));
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
                  const o = new CustomEvent('changeLocation', { detail: n });
                  return dispatchEvent(o), !1;
                }
              })
            ));
      };
      h.defaultProps = { href: '', onClick: () => {} };
      const c = e => {
        var t, r;
        return (
          (r = t = class extends o.default.Component {
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
                ? o.default.createElement(
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
      c(() => r.e(31).then(r.bind(null, 107))),
        c(() => r.e(31).then(r.bind(null, 108)));
      var p = l('h1', {}, void 0, l('code', {}, void 0, 'label')),
        f = l(
          'p',
          {},
          void 0,
          "Get the labels for a pull request. Doesn't do much, but the return value lets you write you own scripts based off of the PR labels!"
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
              l('td', {}, void 0, l('code', {}, void 0, '--pr')),
              l('td', {}, void 0, 'Number'),
              l(
                'td',
                {},
                void 0,
                'The pull request the command should use. Detects PR number in CI (defaults to last merged PR)'
              )
            )
          )
        ),
        b = l(
          'pre',
          {},
          void 0,
          l(
            'code',
            { className: 'language-sh' },
            void 0,
            'auto label --pr 123',
            l('br', {})
          )
        ),
        m = l(
          'p',
          {},
          void 0,
          'The following will only run the test:visual script when the PR has has the',
          l('br', {}),
          'Visual label.'
        ),
        g = l(
          'pre',
          {},
          void 0,
          l(
            'code',
            { className: 'language-sh' },
            void 0,
            l('span', { className: 'hljs-built_in' }, void 0, 'export'),
            ' PATH=$(npm bin):',
            l('span', { className: 'hljs-variable' }, void 0, '$PATH'),
            l('br', {}),
            l('br', {}),
            l('span', { className: 'hljs-keyword' }, void 0, 'if'),
            ' [ auto label --pr ',
            l('span', { className: 'hljs-variable' }, void 0, '$PR_NUMBER'),
            ' | grep -c ',
            l('span', { className: 'hljs-string' }, void 0, "'^Visual'"),
            ' -ne 0 ];',
            l('br', {}),
            l('span', { className: 'hljs-keyword' }, void 0, 'then'),
            l('br', {}),
            '  npm run ',
            l('span', { className: 'hljs-built_in' }, void 0, 'test'),
            ':visual',
            l('br', {}),
            l('span', { className: 'hljs-keyword' }, void 0, 'fi'),
            l('br', {})
          )
        ),
        y = l(
          'p',
          {},
          void 0,
          'Running ',
          l('code', {}, void 0, 'auto label'),
          ' without the PR number will:'
        ),
        w = l(
          'ul',
          {},
          void 0,
          l(
            'li',
            {},
            void 0,
            'When run in master will get the labels for the last merged PR'
          ),
          l(
            'li',
            {},
            void 0,
            "When run for a PR in CI will use the PR's number"
          )
        );
      var P = e =>
        l(
          'div',
          { className: e.className },
          void 0,
          l(
            'section',
            {},
            void 0,
            p,
            f,
            l(
              'h2',
              { id: 'options' },
              void 0,
              'Options ',
              l(h, {
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
              l(h, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#examples',
                'aria-hidden': 'true'
              })
            ),
            b,
            l(
              'h2',
              { id: 'using-in-scripts' },
              void 0,
              'Using in scripts ',
              l(h, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#using-in-scripts',
                'aria-hidden': 'true'
              })
            ),
            m,
            g,
            l(
              'h2',
              { id: 'without-pr-number' },
              void 0,
              'Without PR Number ',
              l(h, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#without-pr-number',
                'aria-hidden': 'true'
              })
            ),
            y,
            w
          )
        );
      (t.default = P), (e.exports = t.default);
    }
  }
]);
//# sourceMappingURL=label.js.map
