(window.webpackJsonp = window.webpackJsonp || []).push([
  [9],
  {
    69: function(s, e, a) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t,
        r = n(a(3)),
        o = (function(s) {
          if (s && s.__esModule) return s;
          var e = {};
          if (null != s)
            for (var a in s)
              if (Object.prototype.hasOwnProperty.call(s, a)) {
                var t =
                  Object.defineProperty && Object.getOwnPropertyDescriptor
                    ? Object.getOwnPropertyDescriptor(s, a)
                    : {};
                t.get || t.set ? Object.defineProperty(e, a, t) : (e[a] = s[a]);
              }
          return (e.default = s), e;
        })(a(0));
      n(a(2)), n(a(106));
      function n(s) {
        return s && s.__esModule ? s : { default: s };
      }
      function i(s, e, a, r) {
        t ||
          (t =
            ('function' == typeof Symbol &&
              Symbol.for &&
              Symbol.for('react.element')) ||
            60103);
        var o = s && s.defaultProps,
          n = arguments.length - 3;
        if ((e || 0 === n || (e = { children: void 0 }), e && o))
          for (var i in o) void 0 === e[i] && (e[i] = o[i]);
        else e || (e = o || {});
        if (1 === n) e.children = r;
        else if (n > 1) {
          for (var l = new Array(n), c = 0; c < n; c++) l[c] = arguments[c + 3];
          e.children = l;
        }
        return {
          $$typeof: t,
          type: s,
          key: void 0 === a ? null : '' + a,
          ref: null,
          props: e,
          _owner: null
        };
      }
      function l(s, e, a) {
        return (
          e in s
            ? Object.defineProperty(s, e, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (s[e] = a),
          s
        );
      }
      function c() {
        return (c =
          Object.assign ||
          function(s) {
            for (var e = 1; e < arguments.length; e++) {
              var a = arguments[e];
              for (var t in a)
                Object.prototype.hasOwnProperty.call(a, t) && (s[t] = a[t]);
            }
            return s;
          }).apply(this, arguments);
      }
      function d(s, e) {
        if (null == s) return {};
        var a,
          t,
          r = (function(s, e) {
            if (null == s) return {};
            var a,
              t,
              r = {},
              o = Object.keys(s);
            for (t = 0; t < o.length; t++)
              (a = o[t]), e.indexOf(a) >= 0 || (r[a] = s[a]);
            return r;
          })(s, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(s);
          for (t = 0; t < o.length; t++)
            (a = o[t]),
              e.indexOf(a) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(s, a) &&
                  (r[a] = s[a]));
        }
        return r;
      }
      const h = s => {
        let { to: e } = s,
          a = d(s, ['to']);
        return e.includes('http')
          ? o.default.createElement('a', c({}, s, { href: e }))
          : ('#' === e[0] &&
              (e =
                r.default.join(
                  '/auto/',
                  'pages/build-platforms/github-actions.html'
                ) + e),
            o.default.createElement(
              'a',
              c({}, a, {
                href: e,
                onClick: a => {
                  if ((a.preventDefault(), '#' === s.to)) return !1;
                  const t = new URL(r.default.join(window.location.origin, e));
                  window.history.pushState(
                    (s => ({
                      href: s.href,
                      pathname: s.pathname,
                      hash: s.hash,
                      query: s.query
                    }))(t),
                    null,
                    e
                  ),
                    s.onClick();
                  const o = new CustomEvent('changeLocation', { detail: t });
                  return dispatchEvent(o), !1;
                }
              })
            ));
      };
      h.defaultProps = { href: '', onClick: () => {} };
      const p = s => {
        var e, a;
        return (
          (a = e = class extends o.default.Component {
            constructor(...s) {
              super(...s), l(this, 'state', { Comp: null });
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
                ? o.default.createElement(
                    s,
                    this.props,
                    this.props.children || null
                  )
                : null;
            }
          }),
          l(e, 'defaultProps', { shouldLoad: !0 }),
          a
        );
      };
      p(() => a.e(31).then(a.bind(null, 107))),
        p(() => a.e(31).then(a.bind(null, 108)));
      var u = i('h1', {}, void 0, 'GitHub Actions'),
        m = i(
          'p',
          {},
          void 0,
          'The following config declares the ',
          i('code', {}, void 0, 'release'),
          ' action that run on all branches. The job will either release:'
        ),
        v = i(
          'ul',
          {},
          void 0,
          i(
            'li',
            {},
            void 0,
            'a new ',
            i('code', {}, void 0, 'latest'),
            ' version from ',
            i('code', {}, void 0, 'master')
          ),
          i(
            'li',
            {},
            void 0,
            'a ',
            i('code', {}, void 0, 'canary'),
            ' build from a pull request (only on the main fork and if your package manager plugin implements them)'
          )
        ),
        g = i(
          'p',
          {},
          void 0,
          i(
            'strong',
            {},
            void 0,
            i('code', {}, void 0, '.github/workflows/release.yml')
          )
        ),
        b = i(
          'article',
          { className: 'message column is-warning' },
          void 0,
          i(
            'div',
            { className: 'message-body' },
            void 0,
            i(
              'p',
              {},
              void 0,
              'You must use some sort of action that implements ',
              i('code', {}, void 0, 'skip ci'),
              ' functionality. Otherwise you will get stuck in a release loop!'
            )
          )
        ),
        f = i(
          'pre',
          {},
          void 0,
          i(
            'code',
            { className: 'language-yaml' },
            void 0,
            i('span', { className: 'hljs-attr' }, void 0, 'name:'),
            ' ',
            i('span', { className: 'hljs-string' }, void 0, 'Release'),
            i('br', {}),
            i('br', {}),
            i('span', { className: 'hljs-attr' }, void 0, 'on:'),
            ' ',
            i('span', { className: 'hljs-string' }, void 0, '[push]'),
            i('br', {}),
            i('br', {}),
            i('span', { className: 'hljs-attr' }, void 0, 'jobs:'),
            i('br', {}),
            i('span', { className: 'hljs-attr' }, void 0, '  release:'),
            i('br', {}),
            i('span', { className: 'hljs-attr' }, void 0, '    runs-on:'),
            ' ',
            i('span', { className: 'hljs-string' }, void 0, 'ubuntu-latest'),
            i('br', {}),
            i('span', { className: 'hljs-attr' }, void 0, '    if:'),
            ' ',
            i(
              'span',
              { className: 'hljs-string' },
              void 0,
              "\"!contains(github.event.head_commit.message, 'ci skip') && !contains(github.event.head_commit.message, 'skip ci')\""
            ),
            i('br', {}),
            i('span', { className: 'hljs-attr' }, void 0, '    steps:'),
            i('br', {}),
            i('span', { className: 'hljs-attr' }, void 0, '      - uses:'),
            ' ',
            i(
              'span',
              { className: 'hljs-string' },
              void 0,
              'actions/checkout@v1'
            ),
            i('br', {}),
            i('span', { className: 'hljs-attr' }, void 0, '      - name:'),
            ' ',
            i('span', { className: 'hljs-string' }, void 0, 'Prepare'),
            ' ',
            i('span', { className: 'hljs-string' }, void 0, 'repository'),
            i('br', {}),
            i('span', { className: 'hljs-attr' }, void 0, '        run:'),
            ' ',
            i(
              'span',
              { className: 'hljs-string' },
              void 0,
              '|',
              i('br', {}),
              '          git checkout ${GITHUB_REF:11} --',
              i('br', {}),
              '          git remote rm origin',
              i('br', {}),
              '          git remote add origin https://$<your-github-user>:GITHUB_TOKEN@github.com/<project-owner>/<project-repo>',
              i('br', {}),
              '          git fetch origin --tags',
              i('br', {}),
              '          git branch --set-upstream-to origin/${GITHUB_REF:11} ${GITHUB_REF:11}',
              i('br', {})
            ),
            i('span', { className: 'hljs-attr' }, void 0, '      - name:'),
            ' ',
            i('span', { className: 'hljs-string' }, void 0, 'Use'),
            ' ',
            i('span', { className: 'hljs-string' }, void 0, 'Node.js'),
            ' ',
            i('span', { className: 'hljs-number' }, void 0, '12.'),
            i('span', { className: 'hljs-string' }, void 0, 'x'),
            i('br', {}),
            i('span', { className: 'hljs-attr' }, void 0, '        uses:'),
            ' ',
            i(
              'span',
              { className: 'hljs-string' },
              void 0,
              'actions/setup-node@v1'
            ),
            i('br', {}),
            i('span', { className: 'hljs-attr' }, void 0, '        with:'),
            i('br', {}),
            i(
              'span',
              { className: 'hljs-attr' },
              void 0,
              '          node-version:'
            ),
            ' ',
            i('span', { className: 'hljs-number' }, void 0, '12.'),
            i('span', { className: 'hljs-string' }, void 0, 'x'),
            i('br', {}),
            i('span', { className: 'hljs-attr' }, void 0, '      - name:'),
            ' ',
            i('span', { className: 'hljs-string' }, void 0, 'Cache'),
            ' ',
            i('span', { className: 'hljs-string' }, void 0, 'node'),
            ' ',
            i('span', { className: 'hljs-string' }, void 0, 'modules'),
            i('br', {}),
            i('span', { className: 'hljs-attr' }, void 0, '        uses:'),
            ' ',
            i('span', { className: 'hljs-string' }, void 0, 'actions/cache@v1'),
            i('br', {}),
            i('span', { className: 'hljs-attr' }, void 0, '        with:'),
            i('br', {}),
            i('span', { className: 'hljs-attr' }, void 0, '          path:'),
            ' ',
            i('span', { className: 'hljs-string' }, void 0, 'node_modules'),
            i('br', {}),
            i('span', { className: 'hljs-attr' }, void 0, '          key:'),
            ' ',
            i('span', { className: 'hljs-string' }, void 0, 'yarn-deps-${{'),
            ' ',
            i(
              'span',
              { className: 'hljs-string' },
              void 0,
              "hashFiles('yarn.lock')"
            ),
            ' ',
            i('span', { className: 'hljs-string' }, void 0, '}}'),
            i('br', {}),
            i(
              'span',
              { className: 'hljs-attr' },
              void 0,
              '          restore-keys:'
            ),
            ' ',
            i(
              'span',
              { className: 'hljs-string' },
              void 0,
              '|',
              i('br', {}),
              '            yarn-deps-$',
              i(
                'span',
                { className: 'hljs-template-variable' },
                void 0,
                "{{ hashFiles('yarn.lock') }}"
              ),
              i('br', {})
            ),
            i('span', { className: 'hljs-attr' }, void 0, '      - name:'),
            ' ',
            i('span', { className: 'hljs-string' }, void 0, 'Create'),
            ' ',
            i('span', { className: 'hljs-string' }, void 0, 'Release'),
            i('br', {}),
            i('span', { className: 'hljs-attr' }, void 0, '        env:'),
            i('br', {}),
            i(
              'span',
              { className: 'hljs-attr' },
              void 0,
              '          GH_TOKEN:'
            ),
            ' ',
            i('span', { className: 'hljs-string' }, void 0, '${{'),
            ' ',
            i(
              'span',
              { className: 'hljs-string' },
              void 0,
              'secrets.GITHUB_TOKEN'
            ),
            ' ',
            i('span', { className: 'hljs-string' }, void 0, '}}'),
            i('br', {}),
            i(
              'span',
              { className: 'hljs-attr' },
              void 0,
              '          NPM_TOKEN:'
            ),
            ' ',
            i('span', { className: 'hljs-string' }, void 0, '${{'),
            ' ',
            i(
              'span',
              { className: 'hljs-string' },
              void 0,
              'secrets.NPM_TOKEN'
            ),
            ' ',
            i('span', { className: 'hljs-string' }, void 0, '}}'),
            i('br', {}),
            i('span', { className: 'hljs-attr' }, void 0, '        run:'),
            ' ',
            i(
              'span',
              { className: 'hljs-string' },
              void 0,
              '|',
              i('br', {}),
              '          yarn',
              i('br', {}),
              '          yarn build ',
              i('br', {}),
              '          npx auto shipit',
              i('br', {})
            )
          )
        ),
        j = i(
          'p',
          {},
          void 0,
          'If you are having problems make sure you have done the following:'
        ),
        N = i(
          'ul',
          {},
          void 0,
          i(
            'li',
            {},
            void 0,
            'Any required secrets for plugins are set (Ex; ',
            i('code', {}, void 0, 'NPM_TOKEN'),
            ' with the NPM plugin)'
          ),
          i(
            'li',
            {},
            void 0,
            'Update references of ',
            i('code', {}, void 0, '<your-github-user>'),
            ', ',
            i('code', {}, void 0, '<project-owner>'),
            ', and ',
            i('code', {}, void 0, '<project-repo>'),
            ' with the appropriate values'
          )
        ),
        y = i(
          'p',
          {},
          void 0,
          'To add a secret for actions go to ',
          i(
            'code',
            {},
            void 0,
            'https://github.com/<owner>/<repo>/settings/secrets/new'
          )
        ),
        w = i('code', {}, void 0, 'create-check'),
        k = i('code', {}, void 0, 'octokit-cli');
      var O = s =>
        i(
          'div',
          { className: s.className },
          void 0,
          i(
            'section',
            {},
            void 0,
            u,
            m,
            v,
            g,
            b,
            f,
            i(
              'h2',
              { id: 'troubleshooting' },
              void 0,
              'Troubleshooting ',
              i(h, {
                currentPage: s.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#troubleshooting',
                'aria-hidden': 'true'
              })
            ),
            j,
            N,
            y,
            i(
              'h2',
              { id: 'examples' },
              void 0,
              'Examples ',
              i(h, {
                currentPage: s.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#examples',
                'aria-hidden': 'true'
              })
            ),
            i(
              'ul',
              {},
              void 0,
              i(
                'li',
                {},
                void 0,
                i(
                  h,
                  {
                    currentPage: s.currentPage,
                    target: '_blank',
                    to:
                      'https://github.com/hipstersmoothie/create-check/blob/master/.github/workflows/push.yml',
                    className: 'external-link'
                  },
                  void 0,
                  w
                )
              ),
              i(
                'li',
                {},
                void 0,
                i(
                  h,
                  {
                    currentPage: s.currentPage,
                    target: '_blank',
                    to:
                      'https://github.com/hipstersmoothie/octokit-cli/blob/master/.github/workflows/push.yml',
                    className: 'external-link'
                  },
                  void 0,
                  k
                )
              )
            )
          )
        );
      (e.default = O), (s.exports = e.default);
    }
  }
]);
//# sourceMappingURL=github-actions.js.map
