(window.webpackJsonp = window.webpackJsonp || []).push([
  [29],
  {
    61: function(e, a, t) {
      'use strict';
      Object.defineProperty(a, '__esModule', { value: !0 }),
        (a.default = void 0);
      var o,
        i = r(t(3)),
        n = (function(e) {
          if (e && e.__esModule) return e;
          var a = {};
          if (null != e)
            for (var t in e)
              if (Object.prototype.hasOwnProperty.call(e, t)) {
                var o =
                  Object.defineProperty && Object.getOwnPropertyDescriptor
                    ? Object.getOwnPropertyDescriptor(e, t)
                    : {};
                o.get || o.set ? Object.defineProperty(a, t, o) : (a[t] = e[t]);
              }
          return (a.default = e), a;
        })(t(0));
      r(t(2)), r(t(106));
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function s(e, a, t, i) {
        o ||
          (o =
            ('function' == typeof Symbol &&
              Symbol.for &&
              Symbol.for('react.element')) ||
            60103);
        var n = e && e.defaultProps,
          r = arguments.length - 3;
        if ((a || 0 === r || (a = { children: void 0 }), a && n))
          for (var s in n) void 0 === a[s] && (a[s] = n[s]);
        else a || (a = n || {});
        if (1 === r) a.children = i;
        else if (r > 1) {
          for (var l = new Array(r), d = 0; d < r; d++) l[d] = arguments[d + 3];
          a.children = l;
        }
        return {
          $$typeof: o,
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
      function d() {
        return (d =
          Object.assign ||
          function(e) {
            for (var a = 1; a < arguments.length; a++) {
              var t = arguments[a];
              for (var o in t)
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            }
            return e;
          }).apply(this, arguments);
      }
      function c(e, a) {
        if (null == e) return {};
        var t,
          o,
          i = (function(e, a) {
            if (null == e) return {};
            var t,
              o,
              i = {},
              n = Object.keys(e);
            for (o = 0; o < n.length; o++)
              (t = n[o]), a.indexOf(t) >= 0 || (i[t] = e[t]);
            return i;
          })(e, a);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          for (o = 0; o < n.length; o++)
            (t = n[o]),
              a.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (i[t] = e[t]));
        }
        return i;
      }
      const u = e => {
        let { to: a } = e,
          t = c(e, ['to']);
        return a.includes('http')
          ? n.default.createElement('a', d({}, e, { href: a }))
          : ('#' === a[0] &&
              (a = i.default.join('/auto/', 'pages/non-npm.html') + a),
            n.default.createElement(
              'a',
              d({}, t, {
                href: a,
                onClick: t => {
                  if ((t.preventDefault(), '#' === e.to)) return !1;
                  const o = new URL(i.default.join(window.location.origin, a));
                  window.history.pushState(
                    (e => ({
                      href: e.href,
                      pathname: e.pathname,
                      hash: e.hash,
                      query: e.query
                    }))(o),
                    null,
                    a
                  ),
                    e.onClick();
                  const n = new CustomEvent('changeLocation', { detail: o });
                  return dispatchEvent(n), !1;
                }
              })
            ));
      };
      u.defaultProps = { href: '', onClick: () => {} };
      const p = e => {
        var a, t;
        return (
          (t = a = class extends n.default.Component {
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
          l(a, 'defaultProps', { shouldLoad: !0 }),
          t
        );
      };
      p(() => t.e(31).then(t.bind(null, 107))),
        p(() => t.e(31).then(t.bind(null, 108)));
      var h = s('h1', {}, void 0, 'Non-npm Usage'),
        g = s('code', {}, void 0, 'auto'),
        v = s('code', {}, void 0, 'auto'),
        m = s('code', {}, void 0, 'auto'),
        f = s('code', {}, void 0, 'linux'),
        b = s('code', {}, void 0, 'osx'),
        w = s('code', {}, void 0, 'windows'),
        y = s(
          'p',
          {},
          void 0,
          'Simply download the appropriate version for your operating system and make it executable.'
        ),
        j = s(
          'pre',
          {},
          void 0,
          s(
            'code',
            { className: 'language-sh' },
            void 0,
            s(
              'span',
              { className: 'hljs-comment' },
              void 0,
              '# Download a platform specific version of auto'
            ),
            s('br', {}),
            'curl -vkL -o - https://github.com/intuit/auto/releases/download/v7.2.0/auto-linux.gz | gunzip > ~/auto',
            s('br', {}),
            s(
              'span',
              { className: 'hljs-comment' },
              void 0,
              '# Make auto executable'
            ),
            s('br', {}),
            'chmod a+x ~/auto',
            s('br', {})
          )
        ),
        k = s('code', {}, void 0, 'auto'),
        N = s('code', {}, void 0, 'auto'),
        P = s(
          'p',
          {},
          void 0,
          'If you are on OSX you can install ',
          s('code', {}, void 0, 'auto'),
          ' with brew.'
        ),
        x = s(
          'pre',
          {},
          void 0,
          s(
            'code',
            { className: 'language-sh' },
            void 0,
            'brew tap intuit/auto https://github.com/intuit/auto',
            s('br', {}),
            'brew install auto',
            s('br', {})
          )
        ),
        O = s(
          'p',
          {},
          void 0,
          'To configure ',
          s('code', {}, void 0, 'auto'),
          ' to work with your project you will need to do two things'
        ),
        _ = s('code', {}, void 0, 'GH_TOKEN'),
        E = s(
          'li',
          {},
          void 0,
          'Create an ',
          s('code', {}, void 0, '.autorc'),
          ' for your project'
        ),
        C = s('code', {}, void 0, '.autorc'),
        L = s('code', {}, void 0, 'auto'),
        S = s('code', {}, void 0, '.autorc'),
        M = s('code', {}, void 0, '.autorc'),
        D = s('code', {}, void 0, 'shipit'),
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
            s('span', { className: 'hljs-attr' }, void 0, '"repo"'),
            ': ',
            s('span', { className: 'hljs-string' }, void 0, '"my-project"'),
            ',',
            s('br', {}),
            '  ',
            s('span', { className: 'hljs-attr' }, void 0, '"owner"'),
            ': ',
            s(
              'span',
              { className: 'hljs-string' },
              void 0,
              '"hipstersmoothie"'
            ),
            ',',
            s('br', {}),
            '  ',
            s('span', { className: 'hljs-attr' }, void 0, '"name"'),
            ': ',
            s(
              'span',
              { className: 'hljs-string' },
              void 0,
              '"Andrew Lisowski"'
            ),
            ',',
            s('br', {}),
            '  ',
            s('span', { className: 'hljs-attr' }, void 0, '"email"'),
            ': ',
            s(
              'span',
              { className: 'hljs-string' },
              void 0,
              '"lisowski54@gmail.com"'
            ),
            ',',
            s('br', {}),
            '  ',
            s('span', { className: 'hljs-attr' }, void 0, '"plugins"'),
            ': []',
            s('br', {}),
            '}',
            s('br', {})
          )
        ),
        A = s('code', {}, void 0, '.autorc'),
        T = s('code', {}, void 0, 'git-tag'),
        U = s('code', {}, void 0, 'shipit'),
        q = s(
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
            s('span', { className: 'hljs-attr' }, void 0, '"repo"'),
            ': ',
            s('span', { className: 'hljs-string' }, void 0, '"my-project"'),
            ',',
            s('br', {}),
            '  ',
            s('span', { className: 'hljs-attr' }, void 0, '"owner"'),
            ': ',
            s(
              'span',
              { className: 'hljs-string' },
              void 0,
              '"hipstersmoothie"'
            ),
            ',',
            s('br', {}),
            '  ',
            s('span', { className: 'hljs-attr' }, void 0, '"name"'),
            ': ',
            s(
              'span',
              { className: 'hljs-string' },
              void 0,
              '"Andrew Lisowski"'
            ),
            ',',
            s('br', {}),
            '  ',
            s('span', { className: 'hljs-attr' }, void 0, '"email"'),
            ': ',
            s(
              'span',
              { className: 'hljs-string' },
              void 0,
              '"lisowski54@gmail.com"'
            ),
            ',',
            s('br', {}),
            '  ',
            s('span', { className: 'hljs-attr' }, void 0, '"plugins"'),
            ': [',
            s('span', { className: 'hljs-string' }, void 0, '"git-tag"'),
            ']',
            s('br', {}),
            '}',
            s('br', {})
          )
        ),
        R = s('code', {}, void 0, '.autorc'),
        z = s('code', {}, void 0, 'shipit'),
        J = s('code', {}, void 0, 'repo'),
        X = s('code', {}, void 0, 'owner'),
        $ = s('code', {}, void 0, 'name'),
        F = s('code', {}, void 0, 'email'),
        G = s('code', {}, void 0, 'pom.xml'),
        H = s(
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
            s('span', { className: 'hljs-string' }, void 0, '"maven"'),
            ']',
            s('br', {}),
            '}',
            s('br', {})
          )
        ),
        K = s(
          'p',
          {},
          void 0,
          'Now that you have ',
          s('code', {}, void 0, 'auto'),
          " all set up you can use all of it's commands!"
        ),
        W = s(
          'pre',
          {},
          void 0,
          s(
            'code',
            { className: 'language-sh' },
            void 0,
            '~/auto shipit',
            s('br', {})
          )
        ),
        B = s('code', {}, void 0, 'auto'),
        Q = s('code', {}, void 0, '.env');
      var V = e =>
        s(
          'div',
          { className: e.className },
          void 0,
          s(
            'section',
            {},
            void 0,
            h,
            s(
              'p',
              {},
              void 0,
              g,
              ' by distributed through ',
              s(
                u,
                {
                  currentPage: e.currentPage,
                  target: '_blank',
                  to: 'https://npmjs.com',
                  className: 'external-link'
                },
                void 0,
                'npm'
              ),
              ' but you can use it with a variety of package management platforms.'
            ),
            s(
              'h2',
              { id: 'installation' },
              void 0,
              'Installation ',
              s(u, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#installation',
                'aria-hidden': 'true'
              })
            ),
            s(
              'p',
              {},
              void 0,
              "If you're on some platform other than ",
              s(
                u,
                {
                  currentPage: e.currentPage,
                  target: '_blank',
                  to: 'https://npmjs.com',
                  className: 'external-link'
                },
                void 0,
                'npm'
              ),
              " it doesn't make sense to download ",
              v,
              ' through ',
              s(
                u,
                {
                  currentPage: e.currentPage,
                  target: '_blank',
                  to: 'https://npmjs.com',
                  className: 'external-link'
                },
                void 0,
                'npm'
              ),
              '. For these situations we package ',
              m,
              ' for all major operating systems (',
              f,
              ', ',
              b,
              ', ',
              w,
              ').'
            ),
            y,
            j,
            s(
              'p',
              {},
              void 0,
              'This executable contains all of the official ',
              k,
              ' plugins so you do not have to download anything extra. This version of ',
              N,
              ' uses the ',
              s(
                u,
                {
                  currentPage: e.currentPage,
                  to: '/auto/plugins/git-tag/README.html'
                },
                void 0,
                'git-tag'
              ),
              ' plugins as the default instead of ',
              s(
                u,
                {
                  currentPage: e.currentPage,
                  to: '/auto/plugins/npm/README.html'
                },
                void 0,
                'npm'
              ),
              '. If you specify any plugins this will be overriden.'
            ),
            s(
              'h3',
              { id: 'installation-via-brew-(osx)' },
              void 0,
              'Installation via brew (OSX) ',
              s(u, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#installation-via-brew-(osx)',
                'aria-hidden': 'true'
              })
            ),
            P,
            x,
            s(
              'h2',
              { id: 'configuration' },
              void 0,
              'Configuration ',
              s(u, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#configuration',
                'aria-hidden': 'true'
              })
            ),
            O,
            s(
              'ol',
              {},
              void 0,
              s(
                'li',
                {},
                void 0,
                'Create and configure a ',
                s(
                  u,
                  {
                    currentPage: e.currentPage,
                    target: '_blank',
                    to: 'https://github.com/settings/tokens',
                    className: 'external-link'
                  },
                  void 0,
                  _
                ),
                ' environment variable'
              ),
              E
            ),
            s(
              'h3',
              { id: 'making-an-.autorc' },
              void 0,
              'Making an ',
              C,
              ' ',
              s(u, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#making-an-.autorc',
                'aria-hidden': 'true'
              })
            ),
            s(
              'p',
              {},
              void 0,
              'Using ',
              L,
              ' with any other package manager than ',
              s(
                u,
                {
                  currentPage: e.currentPage,
                  target: '_blank',
                  to: 'https://npmjs.com',
                  className: 'external-link'
                },
                void 0,
                'npm'
              ),
              ' requires that you create an ',
              s(
                u,
                { currentPage: e.currentPage, to: '/auto/pages/autorc.html' },
                void 0,
                S
              ),
              ' at the root of your project.'
            ),
            s(
              'ol',
              {},
              void 0,
              s(
                'li',
                {},
                void 0,
                s(
                  'p',
                  {},
                  void 0,
                  M,
                  ' - No plugins, ',
                  D,
                  " doesn't work. Enables ",
                  s(
                    u,
                    {
                      currentPage: e.currentPage,
                      target: '_blank',
                      to:
                        'https://intuit.github.io/auto/pages/getting-started.html#detailed-setup',
                      className: 'external-link'
                    },
                    void 0,
                    'advanced setup'
                  )
                ),
                I
              ),
              s(
                'li',
                {},
                void 0,
                s(
                  'p',
                  {},
                  void 0,
                  A,
                  ' - ',
                  T,
                  ' plugin compatible with any platform. Enables ',
                  s(
                    u,
                    {
                      currentPage: e.currentPage,
                      target: '_blank',
                      to:
                        'https://intuit.github.io/auto/pages/generated/shipit.html',
                      className: 'external-link'
                    },
                    void 0,
                    U,
                    ' usage'
                  )
                ),
                q
              ),
              s(
                'li',
                {},
                void 0,
                s(
                  'p',
                  {},
                  void 0,
                  R,
                  ' - With package manager plugin. ',
                  s(
                    u,
                    {
                      currentPage: e.currentPage,
                      target: '_blank',
                      to:
                        'https://intuit.github.io/auto/pages/generated/shipit.html',
                      className: 'external-link'
                    },
                    void 0,
                    z
                  ),
                  ' works, some configuration picked up from package manager package definition files. In the following ',
                  J,
                  ', ',
                  X,
                  ', ',
                  $,
                  ', and ',
                  F,
                  ' are picked up from the ',
                  G
                ),
                H
              )
            ),
            s(
              'h2',
              { id: 'usage' },
              void 0,
              'Usage ',
              s(u, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#usage',
                'aria-hidden': 'true'
              })
            ),
            K,
            W,
            s(
              'article',
              { className: 'message column is-info' },
              void 0,
              s(
                'div',
                { className: 'message-body' },
                void 0,
                s(
                  'p',
                  {},
                  void 0,
                  'ℹ️ Tip: Using ',
                  B,
                  ' locally with an ',
                  Q,
                  ' file is a great experience. See how ',
                  s(
                    u,
                    {
                      currentPage: e.currentPage,
                      to: './getting-started.md#local-.env'
                    },
                    void 0,
                    'here'
                  ),
                  '.'
                )
              )
            )
          )
        );
      (a.default = V), (e.exports = a.default);
    }
  }
]);
//# sourceMappingURL=non-npm.js.map
