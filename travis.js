(window.webpackJsonp = window.webpackJsonp || []).push([
  [43],
  {
    71: function(s, a, e) {
      'use strict';
      Object.defineProperty(a, '__esModule', { value: !0 }),
        (a.default = void 0);
      var l,
        t = n(e(3)),
        i = (function(s) {
          if (s && s.__esModule) return s;
          var a = {};
          if (null != s)
            for (var e in s)
              if (Object.prototype.hasOwnProperty.call(s, e)) {
                var l =
                  Object.defineProperty && Object.getOwnPropertyDescriptor
                    ? Object.getOwnPropertyDescriptor(s, e)
                    : {};
                l.get || l.set ? Object.defineProperty(a, e, l) : (a[e] = s[e]);
              }
          return (a.default = s), a;
        })(e(0));
      n(e(2)), n(e(106));
      function n(s) {
        return s && s.__esModule ? s : { default: s };
      }
      function r(s, a, e, t) {
        l ||
          (l =
            ('function' == typeof Symbol &&
              Symbol.for &&
              Symbol.for('react.element')) ||
            60103);
        var i = s && s.defaultProps,
          n = arguments.length - 3;
        if ((a || 0 === n || (a = { children: void 0 }), a && i))
          for (var r in i) void 0 === a[r] && (a[r] = i[r]);
        else a || (a = i || {});
        if (1 === n) a.children = t;
        else if (n > 1) {
          for (var o = new Array(n), c = 0; c < n; c++) o[c] = arguments[c + 3];
          a.children = o;
        }
        return {
          $$typeof: l,
          type: s,
          key: void 0 === e ? null : '' + e,
          ref: null,
          props: a,
          _owner: null
        };
      }
      function o(s, a, e) {
        return (
          a in s
            ? Object.defineProperty(s, a, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (s[a] = e),
          s
        );
      }
      function c() {
        return (c =
          Object.assign ||
          function(s) {
            for (var a = 1; a < arguments.length; a++) {
              var e = arguments[a];
              for (var l in e)
                Object.prototype.hasOwnProperty.call(e, l) && (s[l] = e[l]);
            }
            return s;
          }).apply(this, arguments);
      }
      function d(s, a) {
        if (null == s) return {};
        var e,
          l,
          t = (function(s, a) {
            if (null == s) return {};
            var e,
              l,
              t = {},
              i = Object.keys(s);
            for (l = 0; l < i.length; l++)
              (e = i[l]), a.indexOf(e) >= 0 || (t[e] = s[e]);
            return t;
          })(s, a);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(s);
          for (l = 0; l < i.length; l++)
            (e = i[l]),
              a.indexOf(e) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(s, e) &&
                  (t[e] = s[e]));
        }
        return t;
      }
      const p = s => {
        let { to: a } = s,
          e = d(s, ['to']);
        return a.includes('http')
          ? i.default.createElement('a', c({}, s, { href: a }))
          : ('#' === a[0] &&
              (a =
                t.default.join('/auto/', 'pages/build-platforms/travis.html') +
                a),
            i.default.createElement(
              'a',
              c({}, e, {
                href: a,
                onClick: e => {
                  if ((e.preventDefault(), '#' === s.to)) return !1;
                  const l = new URL(t.default.join(window.location.origin, a));
                  window.history.pushState(
                    (s => ({
                      href: s.href,
                      pathname: s.pathname,
                      hash: s.hash,
                      query: s.query
                    }))(l),
                    null,
                    a
                  ),
                    s.onClick();
                  const i = new CustomEvent('changeLocation', { detail: l });
                  return dispatchEvent(i), !1;
                }
              })
            ));
      };
      p.defaultProps = { href: '', onClick: () => {} };
      const h = s => {
        var a, e;
        return (
          (e = a = class extends i.default.Component {
            constructor(...s) {
              super(...s), o(this, 'state', { Comp: null });
            }
            componentDidMount() {
              !this.state.Comp &&
                this.props.shouldLoad &&
                s().then(s => {
                  this.setState({ Comp: s.default });
                });
            }
            render() {
              const { Comp: s } = this.state;
              return s
                ? i.default.createElement(
                    s,
                    this.props,
                    this.props.children || null
                  )
                : null;
            }
          }),
          o(a, 'defaultProps', { shouldLoad: !0 }),
          e
        );
      };
      h(() => e.e(31).then(e.bind(null, 107))),
        h(() => e.e(31).then(e.bind(null, 108)));
      var v = r('h1', {}, void 0, 'Travis CI'),
        m = r(
          'p',
          {},
          void 0,
          'The following config declares the ',
          r('code', {}, void 0, 'deploy'),
          ' job that run on all branches. The job will either release:'
        ),
        u = r(
          'ul',
          {},
          void 0,
          r(
            'li',
            {},
            void 0,
            'a new ',
            r('code', {}, void 0, 'latest'),
            ' version from ',
            r('code', {}, void 0, 'master')
          ),
          r(
            'li',
            {},
            void 0,
            'a ',
            r('code', {}, void 0, 'canary'),
            ' build from a pull request (if your package manager plugin implements them)'
          )
        ),
        g = r(
          'p',
          {},
          void 0,
          r('strong', {}, void 0, r('code', {}, void 0, '.circleci/config.yml'))
        ),
        j = r(
          'pre',
          {},
          void 0,
          r(
            'code',
            { className: 'language-yaml' },
            void 0,
            r('span', { className: 'hljs-attr' }, void 0, 'language:'),
            ' ',
            r('span', { className: 'hljs-string' }, void 0, 'node_js'),
            r('br', {}),
            r('span', { className: 'hljs-attr' }, void 0, 'node_js:'),
            ' ',
            r('span', { className: 'hljs-string' }, void 0, "'10'"),
            r('br', {}),
            r('span', { className: 'hljs-attr' }, void 0, 'env:'),
            r('br', {}),
            r('span', { className: 'hljs-attr' }, void 0, '  global:'),
            r('br', {}),
            r('span', { className: 'hljs-bullet' }, void 0, '    -'),
            ' ',
            r('span', { className: 'hljs-string' }, void 0, 'GIT_NAME="Andrew'),
            ' ',
            r('span', { className: 'hljs-string' }, void 0, 'Lisowski"'),
            r('br', {}),
            r('span', { className: 'hljs-bullet' }, void 0, '    -'),
            ' ',
            r(
              'span',
              { className: 'hljs-string' },
              void 0,
              'GIT_EMAIL="lisowski54@gmail.com"'
            ),
            r('br', {}),
            r('br', {}),
            r('span', { className: 'hljs-attr' }, void 0, 'script:'),
            r('br', {}),
            r('span', { className: 'hljs-bullet' }, void 0, '  -'),
            ' ',
            r('span', { className: 'hljs-string' }, void 0, 'yarn'),
            ' ',
            r('span', { className: 'hljs-string' }, void 0, 'lint'),
            r('br', {}),
            r('span', { className: 'hljs-bullet' }, void 0, '  -'),
            ' ',
            r('span', { className: 'hljs-string' }, void 0, 'yarn'),
            ' ',
            r('span', { className: 'hljs-string' }, void 0, 'test'),
            r('br', {}),
            r('span', { className: 'hljs-bullet' }, void 0, '  -'),
            ' ',
            r('span', { className: 'hljs-string' }, void 0, 'yarn'),
            ' ',
            r('span', { className: 'hljs-string' }, void 0, 'build'),
            r('br', {}),
            r('br', {}),
            r('span', { className: 'hljs-attr' }, void 0, 'before_deploy:'),
            r('br', {}),
            r('span', { className: 'hljs-bullet' }, void 0, '  -'),
            ' ',
            r('span', { className: 'hljs-string' }, void 0, 'git'),
            ' ',
            r('span', { className: 'hljs-string' }, void 0, 'config'),
            ' ',
            r('span', { className: 'hljs-bullet' }, void 0, '--local'),
            ' ',
            r('span', { className: 'hljs-string' }, void 0, 'user.name'),
            ' ',
            r('span', { className: 'hljs-string' }, void 0, '"${GIT_NAME}"'),
            r('br', {}),
            r('span', { className: 'hljs-bullet' }, void 0, '  -'),
            ' ',
            r('span', { className: 'hljs-string' }, void 0, 'git'),
            ' ',
            r('span', { className: 'hljs-string' }, void 0, 'config'),
            ' ',
            r('span', { className: 'hljs-bullet' }, void 0, '--local'),
            ' ',
            r('span', { className: 'hljs-string' }, void 0, 'user.email'),
            ' ',
            r('span', { className: 'hljs-string' }, void 0, '"${GIT_EMAIL}"'),
            r('br', {}),
            r('span', { className: 'hljs-bullet' }, void 0, '  -'),
            ' ',
            r('span', { className: 'hljs-string' }, void 0, 'git'),
            ' ',
            r('span', { className: 'hljs-string' }, void 0, 'remote'),
            ' ',
            r('span', { className: 'hljs-string' }, void 0, 'rm'),
            ' ',
            r('span', { className: 'hljs-string' }, void 0, 'origin'),
            r('br', {}),
            r('span', { className: 'hljs-bullet' }, void 0, '  -'),
            ' ',
            r('span', { className: 'hljs-string' }, void 0, 'git'),
            ' ',
            r('span', { className: 'hljs-string' }, void 0, 'remote'),
            ' ',
            r('span', { className: 'hljs-string' }, void 0, 'add'),
            ' ',
            r('span', { className: 'hljs-string' }, void 0, 'origin'),
            ' ',
            r(
              'span',
              { className: 'hljs-attr' },
              void 0,
              'https://${GH_TOKEN}@github.com/hipstersmoothie/my-test-project'
            ),
            r('br', {}),
            r('span', { className: 'hljs-bullet' }, void 0, '  -'),
            ' ',
            r('span', { className: 'hljs-string' }, void 0, 'git'),
            ' ',
            r('span', { className: 'hljs-string' }, void 0, 'fetch'),
            ' ',
            r('span', { className: 'hljs-string' }, void 0, 'origin'),
            ' ',
            r('span', { className: 'hljs-bullet' }, void 0, '--tags'),
            r('br', {}),
            r('span', { className: 'hljs-bullet' }, void 0, '  -'),
            ' ',
            r('span', { className: 'hljs-string' }, void 0, 'git'),
            ' ',
            r('span', { className: 'hljs-string' }, void 0, 'checkout'),
            ' ',
            r('span', { className: 'hljs-string' }, void 0, 'master'),
            r('br', {}),
            r('span', { className: 'hljs-bullet' }, void 0, '  -'),
            ' ',
            r('span', { className: 'hljs-string' }, void 0, 'git'),
            ' ',
            r('span', { className: 'hljs-string' }, void 0, 'branch'),
            ' ',
            r(
              'span',
              { className: 'hljs-bullet' },
              void 0,
              '--set-upstream-to'
            ),
            ' ',
            r('span', { className: 'hljs-string' }, void 0, 'origin/master'),
            ' ',
            r('span', { className: 'hljs-string' }, void 0, 'master'),
            r('br', {}),
            r('span', { className: 'hljs-attr' }, void 0, 'deploy:'),
            r('br', {}),
            r('span', { className: 'hljs-attr' }, void 0, '  skip_cleanup:'),
            ' ',
            r('span', { className: 'hljs-literal' }, void 0, 'true'),
            r('br', {}),
            r('span', { className: 'hljs-attr' }, void 0, '  provider:'),
            ' ',
            r('span', { className: 'hljs-string' }, void 0, 'script'),
            r('br', {}),
            r('span', { className: 'hljs-attr' }, void 0, '  script:'),
            ' ',
            r('span', { className: 'hljs-string' }, void 0, 'npx'),
            ' ',
            r('span', { className: 'hljs-string' }, void 0, 'auto'),
            ' ',
            r('span', { className: 'hljs-string' }, void 0, 'shipit'),
            r('br', {}),
            r('span', { className: 'hljs-attr' }, void 0, '  on:'),
            r('br', {}),
            r('span', { className: 'hljs-attr' }, void 0, '    all_branches:'),
            ' ',
            r('span', { className: 'hljs-literal' }, void 0, 'true'),
            r('br', {})
          )
        ),
        b = r(
          'p',
          {},
          void 0,
          'If you are having problems make sure you have done the following:'
        ),
        N = r(
          'ul',
          {},
          void 0,
          r('li', {}, void 0, r('code', {}, void 0, 'GH_TOKEN'), ' is set'),
          r(
            'li',
            {},
            void 0,
            'Any other secrets for plugins are set (Ex; ',
            r('code', {}, void 0, 'NPM_TOKEN'),
            ' with the NPM plugin)'
          )
        ),
        f = r('code', {}, void 0, 'relay-compiler-language-typescript');
      var y = s =>
        r(
          'div',
          { className: s.className },
          void 0,
          r(
            'section',
            {},
            void 0,
            v,
            m,
            u,
            g,
            j,
            r(
              'h2',
              { id: 'troubleshooting' },
              void 0,
              'Troubleshooting ',
              r(p, {
                currentPage: s.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#troubleshooting',
                'aria-hidden': 'true'
              })
            ),
            b,
            N,
            r(
              'h2',
              { id: 'examples' },
              void 0,
              'Examples ',
              r(p, {
                currentPage: s.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#examples',
                'aria-hidden': 'true'
              })
            ),
            r(
              'ul',
              {},
              void 0,
              r(
                'li',
                {},
                void 0,
                r(
                  p,
                  {
                    currentPage: s.currentPage,
                    target: '_blank',
                    to:
                      'https://github.com/relay-tools/relay-compiler-language-typescript/blob/master/.travis.yml',
                    className: 'external-link'
                  },
                  void 0,
                  f
                )
              )
            )
          )
        );
      (a.default = y), (s.exports = a.default);
    }
  }
]);
//# sourceMappingURL=travis.js.map
