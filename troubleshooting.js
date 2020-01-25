(window.webpackJsonp = window.webpackJsonp || []).push([
  [44],
  {
    66: function(e, o, t) {
      'use strict';
      Object.defineProperty(o, '__esModule', { value: !0 }),
        (o.default = void 0);
      var r,
        a = i(t(3)),
        n = (function(e) {
          if (e && e.__esModule) return e;
          var o = {};
          if (null != e)
            for (var t in e)
              if (Object.prototype.hasOwnProperty.call(e, t)) {
                var r =
                  Object.defineProperty && Object.getOwnPropertyDescriptor
                    ? Object.getOwnPropertyDescriptor(e, t)
                    : {};
                r.get || r.set ? Object.defineProperty(o, t, r) : (o[t] = e[t]);
              }
          return (o.default = e), o;
        })(t(0));
      i(t(2)), i(t(106));
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function s(e, o, t, a) {
        r ||
          (r =
            ('function' == typeof Symbol &&
              Symbol.for &&
              Symbol.for('react.element')) ||
            60103);
        var n = e && e.defaultProps,
          i = arguments.length - 3;
        if ((o || 0 === i || (o = { children: void 0 }), o && n))
          for (var s in n) void 0 === o[s] && (o[s] = n[s]);
        else o || (o = n || {});
        if (1 === i) o.children = a;
        else if (i > 1) {
          for (var u = new Array(i), l = 0; l < i; l++) u[l] = arguments[l + 3];
          o.children = u;
        }
        return {
          $$typeof: r,
          type: e,
          key: void 0 === t ? null : '' + t,
          ref: null,
          props: o,
          _owner: null
        };
      }
      function u(e, o, t) {
        return (
          o in e
            ? Object.defineProperty(e, o, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[o] = t),
          e
        );
      }
      function l() {
        return (l =
          Object.assign ||
          function(e) {
            for (var o = 1; o < arguments.length; o++) {
              var t = arguments[o];
              for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function d(e, o) {
        if (null == e) return {};
        var t,
          r,
          a = (function(e, o) {
            if (null == e) return {};
            var t,
              r,
              a = {},
              n = Object.keys(e);
            for (r = 0; r < n.length; r++)
              (t = n[r]), o.indexOf(t) >= 0 || (a[t] = e[t]);
            return a;
          })(e, o);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          for (r = 0; r < n.length; r++)
            (t = n[r]),
              o.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (a[t] = e[t]));
        }
        return a;
      }
      const h = e => {
        let { to: o } = e,
          t = d(e, ['to']);
        return o.includes('http')
          ? n.default.createElement('a', l({}, e, { href: o }))
          : ('#' === o[0] &&
              (o = a.default.join('/auto/', 'pages/troubleshooting.html') + o),
            n.default.createElement(
              'a',
              l({}, t, {
                href: o,
                onClick: t => {
                  if ((t.preventDefault(), '#' === e.to)) return !1;
                  const r = new URL(a.default.join(window.location.origin, o));
                  window.history.pushState(
                    (e => ({
                      href: e.href,
                      pathname: e.pathname,
                      hash: e.hash,
                      query: e.query
                    }))(r),
                    null,
                    o
                  ),
                    e.onClick();
                  const n = new CustomEvent('changeLocation', { detail: r });
                  return dispatchEvent(n), !1;
                }
              })
            ));
      };
      h.defaultProps = { href: '', onClick: () => {} };
      const c = e => {
        var o, t;
        return (
          (t = o = class extends n.default.Component {
            constructor(...e) {
              super(...e), u(this, 'state', { Comp: null });
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
          u(o, 'defaultProps', { shouldLoad: !0 }),
          t
        );
      };
      c(() => t.e(31).then(t.bind(null, 107))),
        c(() => t.e(31).then(t.bind(null, 108)));
      var p = s('h1', {}, void 0, 'Troubleshooting'),
        g = s('code', {}, void 0, 'GH_TOKEN'),
        f = s('code', {}, void 0, 'auto'),
        v = s('code', {}, void 0, 'NPM_TOKEN'),
        m = s(
          'p',
          {},
          void 0,
          "To version and publish you cannot have any changes in the git repo during publish. This means that if you build some files before release that aren't git-ignored ",
          s('code', {}, void 0, 'auto'),
          ' will fail to continue. To fix this either add those ',
          s('code', {}, void 0, 'dist'),
          ' files to your ',
          s('code', {}, void 0, '.gitignore'),
          ' or commit them somehow before the release.'
        ),
        b = s(
          'p',
          {},
          void 0,
          'This error will occur when you do not have a ',
          s('code', {}, void 0, 'NPM_TOKEN'),
          ' set.'
        ),
        y = s(
          'p',
          {},
          void 0,
          'Make sure that ',
          s('code', {}, void 0, 'npm'),
          ' is trying to publish to the correct registry. Force ',
          s('code', {}, void 0, 'npm'),
          '/',
          s('code', {}, void 0, 'lerna'),
          ' to use the public registry by adding the following to your package.json:'
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
            s('span', { className: 'hljs-attr' }, void 0, '"publishConfig"'),
            ': {',
            s('br', {}),
            '    ',
            s('span', { className: 'hljs-attr' }, void 0, '"registry"'),
            ': ',
            s(
              'span',
              { className: 'hljs-string' },
              void 0,
              '"https://registry.npmjs.org/"'
            ),
            ',',
            s('br', {}),
            '    ',
            s('span', { className: 'hljs-attr' }, void 0, '"access"'),
            ': ',
            s('span', { className: 'hljs-string' }, void 0, '"public"'),
            s('br', {}),
            '  }',
            s('br', {}),
            '}',
            s('br', {})
          )
        ),
        k = s(
          'p',
          {},
          void 0,
          'This mean your environment does not trust github. To change this add this command somewhere before ',
          s('code', {}, void 0, 'auto')
        ),
        j = s('p', {}, void 0, 'public:'),
        N = s(
          'pre',
          {},
          void 0,
          s(
            'code',
            { className: 'language-sh' },
            void 0,
            'mkdir ~/.ssh/ && ',
            s('span', { className: 'hljs-built_in' }, void 0, 'echo'),
            ' -e ',
            s(
              'span',
              { className: 'hljs-string' },
              void 0,
              '"Host github.com\\n\\tStrictHostKeyChecking no\\n"'
            ),
            ' > ~/.ssh/config',
            s('br', {})
          )
        ),
        P = s('p', {}, void 0, 'enterprise:'),
        O = s(
          'pre',
          {},
          void 0,
          s(
            'code',
            { className: 'language-sh' },
            void 0,
            'mkdir ~/.ssh/ && ',
            s('span', { className: 'hljs-built_in' }, void 0, 'echo'),
            ' -e ',
            s(
              'span',
              { className: 'hljs-string' },
              void 0,
              '"Host github.YOUR_COMPANY.com\\n\\tStrictHostKeyChecking no\\n"'
            ),
            ' > ~/.ssh/config',
            s('br', {})
          )
        ),
        T = s(
          'p',
          {},
          void 0,
          "If you've encountered any of these errors you'll probably run into this problem. If the whole release process doesn't complete you can end up in a state when ",
          s('code', {}, void 0, 'auto'),
          ' published the new version, but doesn\'t push that back to github. To fix this just bump the version number to the "previously published version".'
        ),
        C = s(
          'p',
          {},
          void 0,
          'This means that you do not have a repository set in your package.json. Add something along the line of:'
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
            '  "repository": {',
            s('br', {}),
            '    "type": "git",',
            s('br', {}),
            '    "url": "https://github.com/intuit/auto"',
            s('br', {}),
            '  },',
            s('br', {}),
            '  // or simply',
            s('br', {}),
            '  "repository": "intuit/auto"',
            s('br', {}),
            '}',
            s('br', {})
          )
        ),
        L = s(
          'p',
          {},
          void 0,
          "If auto doesn't find a last release it will default to the first commit for version calculation (and a log of other things). If you have forked a repo, you fork all the merge commit messages as well. This confuses ",
          s('code', {}, void 0, 'auto'),
          ' since it will look for those pull requests in your fork and not the main one.'
        ),
        E = s(
          'p',
          {},
          void 0,
          'To remedy this first tag your first commit in the fork with your first version. If the tags from the original repo are still in your repo you should just bump that version. This will let ',
          s('code', {}, void 0, 'auto'),
          ' ignore all the old merge commits.'
        ),
        S = s(
          'article',
          { className: 'message column is-warning' },
          void 0,
          s(
            'div',
            { className: 'message-body' },
            void 0,
            s(
              'p',
              {},
              void 0,
              '⚠️ You must also match this new tag version in your package.json'
            )
          )
        ),
        H = s(
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
              '# Set head to last release and tag it with 2.10.1'
            ),
            s('br', {}),
            'git tag v2.10.1',
            s('br', {})
          )
        ),
        F = s(
          'p',
          {},
          void 0,
          'Then on GitHub go to your project, click release, then draft a new release. Select the tag you just published and ',
          s('code', {}, void 0, 'publish release'),
          '. Now auto will be able to use the correct version and git log!'
        );
      var A = e =>
        s(
          'div',
          { className: e.className },
          void 0,
          s(
            'section',
            {},
            void 0,
            p,
            s(
              'h2',
              { id: "error%3A-can't-find-a-github-token-to-use" },
              void 0,
              "Error: Can't find a GitHub token to use ",
              s(h, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: "#error%3A-can't-find-a-github-token-to-use",
                'aria-hidden': 'true'
              })
            ),
            s(
              'p',
              {},
              void 0,
              'You must set a ',
              s(
                h,
                {
                  currentPage: e.currentPage,
                  target: '_blank',
                  to: 'https://github.com/settings/tokens',
                  className: 'external-link'
                },
                void 0,
                g
              ),
              ' for ',
              f,
              ' to work. If you publish to npm make sure to add your ',
              v,
              " while you're at it as well."
            ),
            s(
              'h2',
              { id: 'npm-err!-git-working-directory-not-clean' },
              void 0,
              'npm ERR! Git working directory not clean ',
              s(h, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#npm-err!-git-working-directory-not-clean',
                'aria-hidden': 'true'
              })
            ),
            m,
            s(
              'h2',
              { id: 'npm-err!-need-auth-auth-required-for-publishing' },
              void 0,
              'npm ERR! need auth auth required for publishing ',
              s(h, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#npm-err!-need-auth-auth-required-for-publishing',
                'aria-hidden': 'true'
              })
            ),
            b,
            s(
              'h3',
              { id: 'still-getting-errors%3F!' },
              void 0,
              'Still getting errors?! ',
              s(h, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#still-getting-errors%3F!',
                'aria-hidden': 'true'
              })
            ),
            y,
            w,
            s(
              'h2',
              {
                id:
                  'hangs-on%3A-are-you-sure-you-want-to-continue-connecting-(yes%2Fno)%3F'
              },
              void 0,
              'Hangs on: Are you sure you want to continue connecting (yes/no)? ',
              s(h, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to:
                  '#hangs-on%3A-are-you-sure-you-want-to-continue-connecting-(yes%2Fno)%3F',
                'aria-hidden': 'true'
              })
            ),
            k,
            j,
            N,
            P,
            O,
            s(
              'h2',
              {
                id: 'you-cannot-publish-over-the-previously-published-versions'
              },
              void 0,
              'You cannot publish over the previously published versions ',
              s(h, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to:
                  '#you-cannot-publish-over-the-previously-published-versions',
                'aria-hidden': 'true'
              })
            ),
            T,
            s(
              'h2',
              {
                id:
                  'cannot-read-owner-and-package-name-from-github-url-in-package.json'
              },
              void 0,
              'Cannot read owner and package name from GitHub URL in package.json ',
              s(h, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to:
                  '#cannot-read-owner-and-package-name-from-github-url-in-package.json',
                'aria-hidden': 'true'
              })
            ),
            C,
            _,
            s(
              'h2',
              { id: 'how-do-i-auto-a-fork-of-another-repo%3F' },
              void 0,
              'How do I auto a fork of another repo? ',
              s(h, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#how-do-i-auto-a-fork-of-another-repo%3F',
                'aria-hidden': 'true'
              })
            ),
            L,
            E,
            S,
            H,
            F
          )
        );
      (o.default = A), (e.exports = o.default);
    }
  }
]);
//# sourceMappingURL=troubleshooting.js.map
