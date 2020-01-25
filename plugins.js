(window.webpackJsonp = window.webpackJsonp || []).push([
  [32],
  {
    62: function(e, a, t) {
      'use strict';
      Object.defineProperty(a, '__esModule', { value: !0 }),
        (a.default = void 0);
      var n,
        o = r(t(3)),
        i = (function(e) {
          if (e && e.__esModule) return e;
          var a = {};
          if (null != e)
            for (var t in e)
              if (Object.prototype.hasOwnProperty.call(e, t)) {
                var n =
                  Object.defineProperty && Object.getOwnPropertyDescriptor
                    ? Object.getOwnPropertyDescriptor(e, t)
                    : {};
                n.get || n.set ? Object.defineProperty(a, t, n) : (a[t] = e[t]);
              }
          return (a.default = e), a;
        })(t(0));
      r(t(2)), r(t(106));
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function s(e, a, t, o) {
        n ||
          (n =
            ('function' == typeof Symbol &&
              Symbol.for &&
              Symbol.for('react.element')) ||
            60103);
        var i = e && e.defaultProps,
          r = arguments.length - 3;
        if ((a || 0 === r || (a = { children: void 0 }), a && i))
          for (var s in i) void 0 === a[s] && (a[s] = i[s]);
        else a || (a = i || {});
        if (1 === r) a.children = o;
        else if (r > 1) {
          for (var l = new Array(r), u = 0; u < r; u++) l[u] = arguments[u + 3];
          a.children = l;
        }
        return {
          $$typeof: n,
          type: e,
          key: void 0 === t ? null : '' + t,
          ref: null,
          props: a,
          _owner: null
        };
      }
      function l(e, a, t) {
        return (
          a in e
            ? Object.defineProperty(e, a, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[a] = t),
          e
        );
      }
      function u() {
        return (u =
          Object.assign ||
          function(e) {
            for (var a = 1; a < arguments.length; a++) {
              var t = arguments[a];
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function d(e, a) {
        if (null == e) return {};
        var t,
          n,
          o = (function(e, a) {
            if (null == e) return {};
            var t,
              n,
              o = {},
              i = Object.keys(e);
            for (n = 0; n < i.length; n++)
              (t = i[n]), a.indexOf(t) >= 0 || (o[t] = e[t]);
            return o;
          })(e, a);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (n = 0; n < i.length; n++)
            (t = i[n]),
              a.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (o[t] = e[t]));
        }
        return o;
      }
      const c = e => {
        let { to: a } = e,
          t = d(e, ['to']);
        return a.includes('http')
          ? i.default.createElement('a', u({}, e, { href: a }))
          : ('#' === a[0] &&
              (a = o.default.join('/auto/', 'pages/plugins.html') + a),
            i.default.createElement(
              'a',
              u({}, t, {
                href: a,
                onClick: t => {
                  if ((t.preventDefault(), '#' === e.to)) return !1;
                  const n = new URL(o.default.join(window.location.origin, a));
                  window.history.pushState(
                    (e => ({
                      href: e.href,
                      pathname: e.pathname,
                      hash: e.hash,
                      query: e.query
                    }))(n),
                    null,
                    a
                  ),
                    e.onClick();
                  const i = new CustomEvent('changeLocation', { detail: n });
                  return dispatchEvent(i), !1;
                }
              })
            ));
      };
      c.defaultProps = { href: '', onClick: () => {} };
      const p = e => {
        var a, t;
        return (
          (t = a = class extends i.default.Component {
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
          l(a, 'defaultProps', { shouldLoad: !0 }),
          t
        );
      };
      p(() => t.e(31).then(t.bind(null, 107))),
        p(() => t.e(31).then(t.bind(null, 108)));
      var g = s('h1', {}, void 0, 'Plugins'),
        h = s('code', {}, void 0, 'auto'),
        f = s(
          'p',
          {},
          void 0,
          "If you don't configure plugins in your ",
          s('code', {}, void 0, '.autorc'),
          ' configuration file ',
          s('code', {}, void 0, 'auto'),
          ' will use a default package manager plugin.'
        ),
        v = s('code', {}, void 0, 'npm'),
        m = s('code', {}, void 0, 'npm'),
        b = s('code', {}, void 0, 'git-tag'),
        y = s(
          'p',
          {},
          void 0,
          "If you don't want to include the default plugins, you can supply an empty array in the ",
          s('code', {}, void 0, '.autorc'),
          ' configuration file like the following:'
        ),
        P = s(
          'pre',
          {},
          void 0,
          s(
            'code',
            { className: 'language-json' },
            void 0,
            '{',
            s('br', {}),
            '  ',
            s('span', { className: 'hljs-attr' }, void 0, '"plugins"'),
            ': []',
            s('br', {}),
            '}',
            s('br', {})
          )
        ),
        j = s('p', {}, void 0, 'There are three ways to load a plugin.'),
        N = s(
          'p',
          {},
          void 0,
          'To use an official plugin all you have to do is supply the name.'
        ),
        w = s(
          'pre',
          {},
          void 0,
          s(
            'code',
            { className: 'language-json' },
            void 0,
            '{',
            s('br', {}),
            '  ',
            s('span', { className: 'hljs-attr' }, void 0, '"plugins"'),
            ': [',
            s('span', { className: 'hljs-string' }, void 0, '"npm"'),
            ']',
            s('br', {}),
            '}',
            s('br', {})
          )
        ),
        k = s('code', {}, void 0, 'npm'),
        O = s(
          'p',
          {},
          void 0,
          'Unofficial plugins pulled from NPM should be named in the format ',
          s('code', {}, void 0, 'auto-plugin-PLUGIN_NAME'),
          ' where ',
          s('code', {}, void 0, 'PLUGIN_NAME'),
          ' is the name of the plugin.'
        ),
        L = s(
          'p',
          {},
          void 0,
          'That name is provided to auto to use that particular plugin.'
        ),
        E = s(
          'pre',
          {},
          void 0,
          s(
            'code',
            { className: 'language-json' },
            void 0,
            '{',
            s('br', {}),
            '  ',
            s('span', { className: 'hljs-attr' }, void 0, '"plugins"'),
            ': [',
            s(
              'span',
              { className: 'hljs-string' },
              void 0,
              '"auto-plugin-my-cool-plugin"'
            ),
            ', ',
            s('span', { className: 'hljs-string' }, void 0, '"some-package"'),
            ']',
            s('br', {}),
            '}',
            s('br', {})
          )
        ),
        C = s(
          'p',
          {},
          void 0,
          'Or if you have a plugin locally supply the path.'
        ),
        _ = s(
          'pre',
          {},
          void 0,
          s(
            'code',
            { className: 'language-json' },
            void 0,
            '{',
            s('br', {}),
            '  ',
            s('span', { className: 'hljs-attr' }, void 0, '"plugins"'),
            ': [',
            s(
              'span',
              { className: 'hljs-string' },
              void 0,
              '"../path/to/plugin.js"'
            ),
            ']',
            s('br', {}),
            '}',
            s('br', {})
          )
        ),
        x = s(
          'p',
          {},
          void 0,
          'To provide plugin specific config change the following:'
        ),
        I = s(
          'pre',
          {},
          void 0,
          s(
            'code',
            { className: 'language-json' },
            void 0,
            '{',
            s('br', {}),
            '  ',
            s('span', { className: 'hljs-attr' }, void 0, '"plugins"'),
            ': [',
            s('span', { className: 'hljs-string' }, void 0, '"chrome"'),
            ']',
            s('br', {}),
            '}',
            s('br', {})
          )
        ),
        M = s('p', {}, void 0, 'To this:'),
        S = s(
          'pre',
          {},
          void 0,
          s(
            'code',
            { className: 'language-json' },
            void 0,
            '{',
            s('br', {}),
            '  ',
            s('span', { className: 'hljs-attr' }, void 0, '"plugins"'),
            ': [',
            s('br', {}),
            '    [',
            s('span', { className: 'hljs-string' }, void 0, '"chrome"'),
            ', { ',
            s('span', { className: 'hljs-attr' }, void 0, '"extensionId"'),
            ': ',
            s('span', { className: 'hljs-string' }, void 0, '"1234"'),
            ', ',
            s('span', { className: 'hljs-attr' }, void 0, '"build"'),
            ': ',
            s(
              'span',
              { className: 'hljs-string' },
              void 0,
              '"my-compiled-extension.zip"'
            ),
            ' }]',
            s('br', {}),
            '  ]',
            s('br', {}),
            '}',
            s('br', {})
          )
        );
      var D = e =>
        s(
          'div',
          { className: e.className },
          void 0,
          s(
            'section',
            {},
            void 0,
            g,
            s(
              'p',
              {},
              void 0,
              h,
              ' uses the package ',
              s(
                c,
                {
                  currentPage: e.currentPage,
                  target: '_blank',
                  to: 'https://github.com/webpack/tapable',
                  className: 'external-link'
                },
                void 0,
                'tapable'
              ),
              ' to expose a plugin system.'
            ),
            s(
              'h2',
              { id: 'using-plugins' },
              void 0,
              'Using Plugins ',
              s(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#using-plugins',
                'aria-hidden': 'true'
              })
            ),
            s(
              'p',
              {},
              void 0,
              'To use a plugin you can either supply the plugin via a CLI arg or in your ',
              s(
                c,
                {
                  currentPage: e.currentPage,
                  to: '/auto/pages/autorc.html#plugins'
                },
                void 0,
                '.autorc'
              ),
              '. Specifying a plugin overrides the defaults.'
            ),
            s(
              'h3',
              { id: 'defaults' },
              void 0,
              'Defaults ',
              s(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#defaults',
                'aria-hidden': 'true'
              })
            ),
            f,
            s(
              'ul',
              {},
              void 0,
              s(
                'li',
                {},
                void 0,
                'Installed through ',
                v,
                ' => uses ',
                s(
                  c,
                  {
                    currentPage: e.currentPage,
                    to: '/auto/plugins/npm/README.html'
                  },
                  void 0,
                  m
                )
              ),
              s(
                'li',
                {},
                void 0,
                'Installed through executable => uses ',
                s(
                  c,
                  {
                    currentPage: e.currentPage,
                    to: '/auto/plugins/git-tag/README.html'
                  },
                  void 0,
                  b
                )
              )
            ),
            s(
              'h3',
              { id: 'no-plugins' },
              void 0,
              'No Plugins ',
              s(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#no-plugins',
                'aria-hidden': 'true'
              })
            ),
            y,
            P,
            j,
            s(
              'h3',
              { id: '1.-official-plugins' },
              void 0,
              '1. Official Plugins ',
              s(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#1.-official-plugins',
                'aria-hidden': 'true'
              })
            ),
            N,
            w,
            s(
              'h3',
              { id: '2.-npm-package' },
              void 0,
              '2. ',
              k,
              ' package ',
              s(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#2.-npm-package',
                'aria-hidden': 'true'
              })
            ),
            O,
            L,
            E,
            s(
              'h3',
              { id: '3.-path' },
              void 0,
              '3. Path ',
              s(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#3.-path',
                'aria-hidden': 'true'
              })
            ),
            C,
            _,
            s(
              'h3',
              { id: 'plugin-configuration' },
              void 0,
              'Plugin Configuration ',
              s(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#plugin-configuration',
                'aria-hidden': 'true'
              })
            ),
            x,
            I,
            M,
            S
          )
        );
      (a.default = D), (e.exports = a.default);
    }
  }
]);
//# sourceMappingURL=plugins.js.map
