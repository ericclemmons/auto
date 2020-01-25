(window.webpackJsonp = window.webpackJsonp || []).push([
  [25],
  {
    70: function(e, s, r) {
      'use strict';
      Object.defineProperty(s, '__esModule', { value: !0 }),
        (s.default = void 0);
      var t,
        n = o(r(3)),
        i = (function(e) {
          if (e && e.__esModule) return e;
          var s = {};
          if (null != e)
            for (var r in e)
              if (Object.prototype.hasOwnProperty.call(e, r)) {
                var t =
                  Object.defineProperty && Object.getOwnPropertyDescriptor
                    ? Object.getOwnPropertyDescriptor(e, r)
                    : {};
                t.get || t.set ? Object.defineProperty(s, r, t) : (s[r] = e[r]);
              }
          return (s.default = e), s;
        })(r(0));
      o(r(2)), o(r(106));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function a(e, s, r, n) {
        t ||
          (t =
            ('function' == typeof Symbol &&
              Symbol.for &&
              Symbol.for('react.element')) ||
            60103);
        var i = e && e.defaultProps,
          o = arguments.length - 3;
        if ((s || 0 === o || (s = { children: void 0 }), s && i))
          for (var a in i) void 0 === s[a] && (s[a] = i[a]);
        else s || (s = i || {});
        if (1 === o) s.children = n;
        else if (o > 1) {
          for (var l = new Array(o), c = 0; c < o; c++) l[c] = arguments[c + 3];
          s.children = l;
        }
        return {
          $$typeof: t,
          type: e,
          key: void 0 === r ? null : '' + r,
          ref: null,
          props: s,
          _owner: null
        };
      }
      function l(e, s, r) {
        return (
          s in e
            ? Object.defineProperty(e, s, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[s] = r),
          e
        );
      }
      function c() {
        return (c =
          Object.assign ||
          function(e) {
            for (var s = 1; s < arguments.length; s++) {
              var r = arguments[s];
              for (var t in r)
                Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t]);
            }
            return e;
          }).apply(this, arguments);
      }
      function d(e, s) {
        if (null == e) return {};
        var r,
          t,
          n = (function(e, s) {
            if (null == e) return {};
            var r,
              t,
              n = {},
              i = Object.keys(e);
            for (t = 0; t < i.length; t++)
              (r = i[t]), s.indexOf(r) >= 0 || (n[r] = e[r]);
            return n;
          })(e, s);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (t = 0; t < i.length; t++)
            (r = i[t]),
              s.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (n[r] = e[r]));
        }
        return n;
      }
      const u = e => {
        let { to: s } = e,
          r = d(e, ['to']);
        return s.includes('http')
          ? i.default.createElement('a', c({}, e, { href: s }))
          : ('#' === s[0] &&
              (s =
                n.default.join('/auto/', 'pages/build-platforms/jenkins.html') +
                s),
            i.default.createElement(
              'a',
              c({}, r, {
                href: s,
                onClick: r => {
                  if ((r.preventDefault(), '#' === e.to)) return !1;
                  const t = new URL(n.default.join(window.location.origin, s));
                  window.history.pushState(
                    (e => ({
                      href: e.href,
                      pathname: e.pathname,
                      hash: e.hash,
                      query: e.query
                    }))(t),
                    null,
                    s
                  ),
                    e.onClick();
                  const i = new CustomEvent('changeLocation', { detail: t });
                  return dispatchEvent(i), !1;
                }
              })
            ));
      };
      u.defaultProps = { href: '', onClick: () => {} };
      const p = e => {
        var s, r;
        return (
          (r = s = class extends i.default.Component {
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
          l(s, 'defaultProps', { shouldLoad: !0 }),
          r
        );
      };
      p(() => r.e(31).then(r.bind(null, 107))),
        p(() => r.e(31).then(r.bind(null, 108)));
      var h = a('h1', {}, void 0, 'Jenkins 2'),
        b = a(
          'p',
          {},
          void 0,
          'The following config declares the ',
          a('code', {}, void 0, 'release'),
          ' action that run on all branches. The job will either release:'
        ),
        f = a(
          'ul',
          {},
          void 0,
          a(
            'li',
            {},
            void 0,
            'a new ',
            a('code', {}, void 0, 'latest'),
            ' version from ',
            a('code', {}, void 0, 'master')
          ),
          a(
            'li',
            {},
            void 0,
            'a ',
            a('code', {}, void 0, 'canary'),
            ' build from a pull request (only on the main fork and if your package manager plugin implements them)'
          )
        ),
        g = a(
          'p',
          {},
          void 0,
          a('strong', {}, void 0, a('code', {}, void 0, 'Jenkinsfile'))
        ),
        v = a(
          'article',
          { className: 'message column is-warning' },
          void 0,
          a(
            'div',
            { className: 'message-body' },
            void 0,
            a(
              'p',
              {},
              void 0,
              'You must use some sort of step that implements ',
              a('code', {}, void 0, 'skip ci'),
              ' functionality. Otherwise you will get stuck in a release loop!'
            )
          )
        ),
        m = a(
          'pre',
          {},
          void 0,
          a(
            'code',
            { className: 'language-groovy' },
            void 0,
            a('br', {}),
            'pipeline {',
            a('br', {}),
            '  environment {',
            a('br', {}),
            '    NPM_TOKEN = credentials(',
            a('span', { className: 'hljs-string' }, void 0, "'NPM_TOKEN'"),
            ')',
            a('br', {}),
            '    GH_TOKEN = credentials(',
            a('span', { className: 'hljs-string' }, void 0, "'GH_TOKEN'"),
            ')',
            a('br', {}),
            '  }',
            a('br', {}),
            '  stages {',
            a('br', {}),
            '    stage(',
            a('span', { className: 'hljs-string' }, void 0, "'Check Skip CI'"),
            ') {',
            a('br', {}),
            '      steps {',
            a('br', {}),
            '        script {',
            a('br', {}),
            '          result = sh (',
            a('span', { className: 'hljs-string' }, void 0, 'script:'),
            ' ',
            a(
              'span',
              { className: 'hljs-string' },
              void 0,
              '"git log -1 | grep \'.*\\\\[skip ci\\\\].*\'"'
            ),
            ', ',
            a('span', { className: 'hljs-string' }, void 0, 'returnStatus:'),
            ' ',
            a('span', { className: 'hljs-literal' }, void 0, 'true'),
            ')',
            a('br', {}),
            '          ',
            a('span', { className: 'hljs-keyword' }, void 0, 'if'),
            ' (result == ',
            a('span', { className: 'hljs-number' }, void 0, '0'),
            ') {',
            a('br', {}),
            '              echo (',
            a(
              'span',
              { className: 'hljs-string' },
              void 0,
              '"\'Skip CI\' spotted in git commit. Aborting."'
            ),
            ')',
            a('br', {}),
            '              currentBuild.result = ',
            a('span', { className: 'hljs-string' }, void 0, "'ABORTED'"),
            a('br', {}),
            '              error(',
            a('span', { className: 'hljs-string' }, void 0, "'Exiting job'"),
            ');',
            a('br', {}),
            '          }',
            a('br', {}),
            '        }',
            a('br', {}),
            '      }',
            a('br', {}),
            '    }',
            a('br', {}),
            '    stage(',
            a('span', { className: 'hljs-string' }, void 0, "'Auth'"),
            ') {',
            a('br', {}),
            '      steps {',
            a('br', {}),
            '        sh ',
            a(
              'span',
              { className: 'hljs-string' },
              void 0,
              "'''",
              a('br', {}),
              '          echo "https://${GITHUB_TOKEN}@github.com" >> /tmp/gitcredfile',
              a('br', {}),
              '          git config --global user.name "Andrew Lisowski"',
              a('br', {}),
              '          git config --global user.email "lisowski54@gmail.com"',
              a('br', {}),
              '          git config --global credential.helper "store --file=/tmp/gitcredfile"',
              a('br', {}),
              "        '''"
            ),
            a('br', {}),
            '      }',
            a('br', {}),
            '    }',
            a('br', {}),
            '    stage(',
            a('span', { className: 'hljs-string' }, void 0, "'Install'"),
            ') {',
            a('br', {}),
            '      steps {',
            a('br', {}),
            '        sh ',
            a(
              'span',
              { className: 'hljs-string' },
              void 0,
              "'yarn install --frozen-lockfile'"
            ),
            a('br', {}),
            '      }',
            a('br', {}),
            '    }',
            a('br', {}),
            '    stage(',
            a('span', { className: 'hljs-string' }, void 0, "'Build'"),
            ') {',
            a('br', {}),
            '      steps {',
            a('br', {}),
            '          sh ',
            a('span', { className: 'hljs-string' }, void 0, "'yarn build'"),
            a('br', {}),
            '      }',
            a('br', {}),
            '    }',
            a('br', {}),
            '    stage(',
            a('span', { className: 'hljs-string' }, void 0, "'Publish'"),
            ') {',
            a('br', {}),
            '        when { branch ',
            a('span', { className: 'hljs-string' }, void 0, "'master'"),
            ' }',
            a('br', {}),
            '        steps {',
            a('br', {}),
            '          sh ',
            a('span', { className: 'hljs-string' }, void 0, "'auto shipit'"),
            a('br', {}),
            '        }',
            a('br', {}),
            '    }',
            a('br', {}),
            '    stage(',
            a('span', { className: 'hljs-string' }, void 0, "'Canary'"),
            ') {',
            a('br', {}),
            '      when { changeRequest() }',
            a('br', {}),
            '      steps {',
            a('br', {}),
            '        sh ',
            a(
              'span',
              { className: 'hljs-string' },
              void 0,
              "'auto canary --pr $CHANGE_ID --build $BUILD_NUMBER'"
            ),
            a('br', {}),
            '      }',
            a('br', {}),
            '    }',
            a('br', {}),
            '  }',
            a('br', {}),
            '}',
            a('br', {})
          )
        ),
        y = a(
          'p',
          {},
          void 0,
          'If you are having problems make sure you have done the following:'
        ),
        N = a(
          'ul',
          {},
          void 0,
          a('li', {}, void 0, a('code', {}, void 0, 'GH_TOKEN'), ' is set'),
          a(
            'li',
            {},
            void 0,
            'Any other secrets for plugins are set (Ex; ',
            a('code', {}, void 0, 'NPM_TOKEN'),
            ' with the NPM plugin)'
          )
        );
      var j = e =>
        a(
          'div',
          { className: e.className },
          void 0,
          a(
            'section',
            {},
            void 0,
            h,
            b,
            f,
            g,
            v,
            m,
            a(
              'h2',
              { id: 'troubleshooting' },
              void 0,
              'Troubleshooting ',
              a(u, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#troubleshooting',
                'aria-hidden': 'true'
              })
            ),
            y,
            N
          )
        );
      (s.default = j), (e.exports = s.default);
    }
  }
]);
//# sourceMappingURL=jenkins.js.map
