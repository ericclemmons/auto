(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    59: function(e, a, o) {
      'use strict';
      Object.defineProperty(a, '__esModule', { value: !0 }),
        (a.default = void 0);
      var t,
        i = r(o(3)),
        s = (function(e) {
          if (e && e.__esModule) return e;
          var a = {};
          if (null != e)
            for (var o in e)
              if (Object.prototype.hasOwnProperty.call(e, o)) {
                var t =
                  Object.defineProperty && Object.getOwnPropertyDescriptor
                    ? Object.getOwnPropertyDescriptor(e, o)
                    : {};
                t.get || t.set ? Object.defineProperty(a, o, t) : (a[o] = e[o]);
              }
          return (a.default = e), a;
        })(o(0));
      r(o(2)), r(o(106));
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function n(e, a, o, i) {
        t ||
          (t =
            ('function' == typeof Symbol &&
              Symbol.for &&
              Symbol.for('react.element')) ||
            60103);
        var s = e && e.defaultProps,
          r = arguments.length - 3;
        if ((a || 0 === r || (a = { children: void 0 }), a && s))
          for (var n in s) void 0 === a[n] && (a[n] = s[n]);
        else a || (a = s || {});
        if (1 === r) a.children = i;
        else if (r > 1) {
          for (var l = new Array(r), d = 0; d < r; d++) l[d] = arguments[d + 3];
          a.children = l;
        }
        return {
          $$typeof: t,
          type: e,
          key: void 0 === o ? null : '' + o,
          ref: null,
          props: a,
          _owner: null
        };
      }
      function l(e, a, o) {
        return (
          a in e
            ? Object.defineProperty(e, a, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[a] = o),
          e
        );
      }
      function d() {
        return (d =
          Object.assign ||
          function(e) {
            for (var a = 1; a < arguments.length; a++) {
              var o = arguments[a];
              for (var t in o)
                Object.prototype.hasOwnProperty.call(o, t) && (e[t] = o[t]);
            }
            return e;
          }).apply(this, arguments);
      }
      function u(e, a) {
        if (null == e) return {};
        var o,
          t,
          i = (function(e, a) {
            if (null == e) return {};
            var o,
              t,
              i = {},
              s = Object.keys(e);
            for (t = 0; t < s.length; t++)
              (o = s[t]), a.indexOf(o) >= 0 || (i[o] = e[o]);
            return i;
          })(e, a);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          for (t = 0; t < s.length; t++)
            (o = s[t]),
              a.indexOf(o) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, o) &&
                  (i[o] = e[o]));
        }
        return i;
      }
      const c = e => {
        let { to: a } = e,
          o = u(e, ['to']);
        return a.includes('http')
          ? s.default.createElement('a', d({}, e, { href: a }))
          : ('#' === a[0] &&
              (a = i.default.join('/auto/', 'pages/getting-started.html') + a),
            s.default.createElement(
              'a',
              d({}, o, {
                href: a,
                onClick: o => {
                  if ((o.preventDefault(), '#' === e.to)) return !1;
                  const t = new URL(i.default.join(window.location.origin, a));
                  window.history.pushState(
                    (e => ({
                      href: e.href,
                      pathname: e.pathname,
                      hash: e.hash,
                      query: e.query
                    }))(t),
                    null,
                    a
                  ),
                    e.onClick();
                  const s = new CustomEvent('changeLocation', { detail: t });
                  return dispatchEvent(s), !1;
                }
              })
            ));
      };
      c.defaultProps = { href: '', onClick: () => {} };
      const h = e => {
        var a, o;
        return (
          (o = a = class extends s.default.Component {
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
                ? s.default.createElement(
                    e,
                    this.props,
                    this.props.children || null
                  )
                : null;
            }
          }),
          l(a, 'defaultProps', { shouldLoad: !0 }),
          o
        );
      };
      h(() => o.e(31).then(o.bind(null, 107))),
        h(() => o.e(31).then(o.bind(null, 108)));
      var p = n('h1', {}, void 0, 'Getting Started'),
        v = n(
          'p',
          {},
          void 0,
          'Before we do anything we must first install ',
          n('code', {}, void 0, 'auto'),
          ' as a dev dependency.'
        ),
        g = n(
          'pre',
          {},
          void 0,
          n(
            'code',
            { className: 'language-sh' },
            void 0,
            'yarn add -D auto',
            n('br', {})
          )
        ),
        b = n('code', {}, void 0, 'auto'),
        m = n('code', {}, void 0, 'auto'),
        f = n('code', {}, void 0, 'auto'),
        y = n('code', {}, void 0, 'node'),
        N = n(
          'p',
          {},
          void 0,
          'To get detailed help for any command use the ',
          n('code', {}, void 0, '--help'),
          ' flag.'
        ),
        j = n(
          'pre',
          {},
          void 0,
          n(
            'code',
            { className: 'language-sh' },
            void 0,
            'auto --',
            n('span', { className: 'hljs-built_in' }, void 0, 'help'),
            n('br', {}),
            n(
              'span',
              { className: 'hljs-comment' },
              void 0,
              '# or command help'
            ),
            n('br', {}),
            'auto comment --',
            n('span', { className: 'hljs-built_in' }, void 0, 'help'),
            n('br', {})
          )
        ),
        P = n('code', {}, void 0, 'auto'),
        w = n('code', {}, void 0, '--github-api'),
        k = n('code', {}, void 0, 'auto init'),
        O = n(
          'p',
          {},
          void 0,
          "If your project is already published then you need to make sure that your last release is tagged and that it's the ",
          n('code', {}, void 0, 'Latest Release'),
          ' on GitHub.'
        ),
        T = n(
          'p',
          {},
          void 0,
          'To tag your last release find that last commit where you bumped the version and run the following commands with your version number.'
        ),
        _ = n(
          'pre',
          {},
          void 0,
          n(
            'code',
            { className: 'language-sh' },
            void 0,
            'git tag v1.2.3',
            n('br', {}),
            'git push --tags',
            n('br', {})
          )
        ),
        E = n(
          'p',
          {},
          void 0,
          "Then on GitHub go to your project's releases and click ",
          n('code', {}, void 0, 'Draft a new release'),
          '. In the ',
          n('code', {}, void 0, 'Tag version'),
          ' field enter the version number you just tagged and click ',
          n('code', {}, void 0, 'Publish release'),
          '.'
        ),
        L = n(
          'p',
          {},
          void 0,
          'Now your github project is set up to use ',
          n('code', {}, void 0, 'auto'),
          '.'
        ),
        S = n(
          'p',
          {},
          void 0,
          'Getting started with ',
          n('code', {}, void 0, 'auto'),
          ' is super easy.'
        ),
        I = n(
          'ol',
          {},
          void 0,
          n(
            'li',
            {},
            void 0,
            n('code', {}, void 0, 'auto init'),
            ' (optional)'
          ),
          n('li', {}, void 0, 'Configure environment variables'),
          n('li', {}, void 0, n('code', {}, void 0, 'auto create-labels')),
          n('li', {}, void 0, 'Set up script')
        ),
        R = n(
          'p',
          {},
          void 0,
          'Initialize all options and configure label text. If this is not run then ',
          n('code', {}, void 0, 'auto'),
          ' will use the default configuration. This command will produce and ',
          n('code', {}, void 0, '.autorc'),
          ', this contains advanced configuration and might not be needed.'
        ),
        H = n(
          'p',
          {},
          void 0,
          'You must configure some environment variables for publishing and releasing to work properly.'
        ),
        x = n('code', {}, void 0, 'GH_TOKEN'),
        C = n(
          'li',
          {},
          void 0,
          n('code', {}, void 0, 'NPM_TOKEN'),
          ' - Used to publish to npm. (only with NPM plugin)'
        ),
        G = n('code', {}, void 0, '.env'),
        $ = n(
          'p',
          {},
          void 0,
          'You can also store these values in a local file at the root of your project named ',
          n('code', {}, void 0, '.env'),
          '. You should make sure to add this file to your ',
          n('code', {}, void 0, '.gitignore'),
          " so you don't commit any keys! These env vars will override these any variable already set on the process. This enables you to have a per project configuration that isn't effected by your global setup."
        ),
        K = n(
          'p',
          {},
          void 0,
          n(
            'strong',
            {},
            void 0,
            n('code', {}, void 0, 'PROJECT_ROOT/.env'),
            ':'
          )
        ),
        A = n(
          'pre',
          {},
          void 0,
          n(
            'code',
            { className: 'language-bash' },
            void 0,
            'GH_TOKEN=YOUR_TOKEN',
            n('br', {}),
            'NPM_TOKEN=PUBLISH_TOKEN',
            n('br', {})
          )
        ),
        D = n(
          'p',
          {},
          void 0,
          'If you are running auto behind a ',
          n('code', {}, void 0, 'http'),
          ' or ',
          n('code', {}, void 0, 'https'),
          ' proxy, add either the ',
          n('code', {}, void 0, 'http_proxy'),
          ' or ',
          n('code', {}, void 0, 'https_proxy'),
          ' environment variable to your environment. To test locally add it to .env file. Remember this file is only local, so you will need to set the variable in your CI as well.'
        ),
        M = n(
          'pre',
          {},
          void 0,
          n(
            'code',
            { className: 'language-bash' },
            void 0,
            'https_proxy=<PROXYHOST>:<PROXYPORT>',
            n('br', {})
          )
        ),
        U = n(
          'p',
          {},
          void 0,
          'After that, you need to set up the labels on your github project. The types of labels that ',
          n('code', {}, void 0, 'auto'),
          ' uses are:'
        ),
        V = n(
          'p',
          {},
          void 0,
          'To create the labels for your project on GitHub, run the following command with your ',
          n('code', {}, void 0, 'GH_TOKEN'),
          '.'
        ),
        Y = n(
          'pre',
          {},
          void 0,
          n(
            'code',
            { className: 'language-sh' },
            void 0,
            'GH_TOKEN=YOUR_TOKEN auto create-labels',
            n('br', {}),
            n(
              'span',
              { className: 'hljs-comment' },
              void 0,
              '# or with .env file'
            ),
            n('br', {}),
            'auto create-labels',
            n('br', {})
          )
        ),
        z = n(
          'p',
          {},
          void 0,
          n('code', {}, void 0, 'auto'),
          " is written so that each tool it exposes is useful in isolation. It also provides workflows for those who don't care about the Details of each tool and just want their code released."
        ),
        B = n(
          'p',
          {},
          void 0,
          "To version, changelog, publish and release your code all at the same time, we've included the ",
          n('code', {}, void 0, 'shipit'),
          ' tool. This tool takes the default ',
          n('code', {}, void 0, 'auto'),
          ' workflow and puts it into one command.'
        ),
        q = n('p', {}, void 0, 'It will:'),
        J = n(
          'ol',
          {},
          void 0,
          n(
            'li',
            {},
            void 0,
            'Publish canary releases when run from a PR or locally on any branch other than the ',
            n('code', {}, void 0, 'baseBranch')
          ),
          n(
            'li',
            {},
            void 0,
            'Generate a changelog and publish a "latest" release to a package manager when run from the ',
            n('code', {}, void 0, 'baseBranch')
          )
        ),
        W = n(
          'pre',
          {},
          void 0,
          n(
            'code',
            { className: 'language-json' },
            void 0,
            '{',
            n('br', {}),
            '  ',
            n('span', { className: 'hljs-attr' }, void 0, '"scripts"'),
            ': {',
            n('br', {}),
            '    ',
            n('span', { className: 'hljs-attr' }, void 0, '"release"'),
            ': ',
            n('span', { className: 'hljs-string' }, void 0, '"auto shipit"'),
            n('br', {}),
            '  }',
            n('br', {}),
            '}',
            n('br', {})
          )
        ),
        X = n(
          'p',
          {},
          void 0,
          'The simplest workflow to get set up in just the ',
          n('code', {}, void 0, 'package.json'),
          ' is by adding the following to your ',
          n('code', {}, void 0, 'package.json'),
          '. With this setup your application will not be able to use the ',
          n('code', {}, void 0, 'skip-release'),
          ' flag, but everything else will work just fine'
        ),
        Q = n(
          'pre',
          {},
          void 0,
          n(
            'code',
            { className: 'language-json' },
            void 0,
            '{',
            n('br', {}),
            '  ',
            n('span', { className: 'hljs-attr' }, void 0, '"scripts"'),
            ': {',
            n('br', {}),
            '    ',
            n('span', { className: 'hljs-attr' }, void 0, '"version"'),
            ': ',
            n(
              'span',
              { className: 'hljs-string' },
              void 0,
              '"npm version `auto version` -m \'Bump version to: %s [skip ci]\'"'
            ),
            ',',
            n('br', {}),
            '    ',
            n('span', { className: 'hljs-attr' }, void 0, '"publish"'),
            ': ',
            n(
              'span',
              { className: 'hljs-string' },
              void 0,
              '"npm publish && git push --follow-tags --set-upstream origin $branch"'
            ),
            ',',
            n('br', {}),
            '    ',
            n('span', { className: 'hljs-attr' }, void 0, '"release"'),
            ': ',
            n(
              'span',
              { className: 'hljs-string' },
              void 0,
              '"auto changelog && npm run version && npm run publish && auto release"'
            ),
            n('br', {}),
            '  }',
            n('br', {}),
            '}',
            n('br', {})
          )
        ),
        F = n('code', {}, void 0, 'skip-release'),
        Z = n(
          'p',
          {},
          void 0,
          'To use the ',
          n('code', {}, void 0, 'skip-release'),
          ' label you have to get a little more involved and use a shell script. We could do the ',
          n('code', {}, void 0, 'if'),
          ' checks in the ',
          n('code', {}, void 0, 'package.json'),
          ', but this would get messy and hard to read very quickly.'
        ),
        ee = n(
          'pre',
          {},
          void 0,
          n(
            'code',
            { className: 'language-json' },
            void 0,
            '{',
            n('br', {}),
            '  ',
            n('span', { className: 'hljs-attr' }, void 0, '"scripts"'),
            ': {',
            n('br', {}),
            '    ',
            n('span', { className: 'hljs-attr' }, void 0, '"release"'),
            ': ',
            n(
              'span',
              { className: 'hljs-string' },
              void 0,
              '"./scripts/release.sh"'
            ),
            n('br', {}),
            '  }',
            n('br', {}),
            '}',
            n('br', {})
          )
        ),
        ae = n(
          'p',
          {},
          void 0,
          'Here is an example release script for a single NPM package:'
        ),
        oe = n(
          'pre',
          {},
          void 0,
          n(
            'code',
            { className: 'language-sh' },
            void 0,
            n('span', { className: 'hljs-built_in' }, void 0, 'export'),
            ' PATH=$(npm bin):',
            n('span', { className: 'hljs-variable' }, void 0, '$PATH'),
            n('br', {}),
            n('br', {}),
            'VERSION=`auto version`',
            n('br', {}),
            n('br', {}),
            n(
              'span',
              { className: 'hljs-comment' },
              void 0,
              "## Support for label 'skip-release'"
            ),
            n('br', {}),
            n('span', { className: 'hljs-keyword' }, void 0, 'if'),
            ' [ ! -z ',
            n(
              'span',
              { className: 'hljs-string' },
              void 0,
              '"',
              n('span', { className: 'hljs-variable' }, void 0, '$VERSION'),
              '"'
            ),
            ' ]; ',
            n('span', { className: 'hljs-keyword' }, void 0, 'then'),
            n('br', {}),
            '  ',
            n(
              'span',
              { className: 'hljs-comment' },
              void 0,
              '## Update Changelog'
            ),
            n('br', {}),
            '  auto changelog',
            n('br', {}),
            n('br', {}),
            '  ',
            n(
              'span',
              { className: 'hljs-comment' },
              void 0,
              '## Publish Package'
            ),
            n('br', {}),
            '  npm version ',
            n('span', { className: 'hljs-variable' }, void 0, '$VERSION'),
            ' -m ',
            n(
              'span',
              { className: 'hljs-string' },
              void 0,
              '"Bump version to: %s [skip ci]"'
            ),
            n('br', {}),
            '  npm publish',
            n('br', {}),
            n('br', {}),
            '  ',
            n(
              'span',
              { className: 'hljs-comment' },
              void 0,
              '## Create GitHub Release'
            ),
            n('br', {}),
            '  git push --follow-tags --',
            n('span', { className: 'hljs-built_in' }, void 0, 'set'),
            '-upstream origin ',
            n('span', { className: 'hljs-variable' }, void 0, '$branch'),
            n('br', {}),
            '  auto release',
            n('br', {}),
            n('span', { className: 'hljs-keyword' }, void 0, 'fi'),
            n('br', {})
          )
        ),
        te = n(
          'p',
          {},
          void 0,
          'or if you are using lerna to manage a monorepo.'
        ),
        ie = n(
          'pre',
          {},
          void 0,
          n(
            'code',
            { className: 'language-sh' },
            void 0,
            n('span', { className: 'hljs-built_in' }, void 0, 'export'),
            ' PATH=$(npm bin):',
            n('span', { className: 'hljs-variable' }, void 0, '$PATH'),
            n('br', {}),
            n('br', {}),
            'VERSION=`auto version`',
            n('br', {}),
            n('br', {}),
            n('span', { className: 'hljs-keyword' }, void 0, 'if'),
            ' [ ! -z ',
            n(
              'span',
              { className: 'hljs-string' },
              void 0,
              '"',
              n('span', { className: 'hljs-variable' }, void 0, '$VERSION'),
              '"'
            ),
            ' ]; ',
            n('span', { className: 'hljs-keyword' }, void 0, 'then'),
            n('br', {}),
            '  auto changelog',
            n('br', {}),
            '  lerna publish --yes ',
            n('span', { className: 'hljs-variable' }, void 0, '$VERSION'),
            ' -m ',
            n('span', { className: 'hljs-string' }, void 0, "'%v [skip ci]'"),
            n('br', {}),
            '  auto release',
            n('br', {}),
            n('span', { className: 'hljs-keyword' }, void 0, 'fi'),
            n('br', {})
          )
        );
      var se = e =>
        n(
          'div',
          { className: e.className },
          void 0,
          n(
            'section',
            {},
            void 0,
            p,
            v,
            g,
            n(
              'p',
              {},
              void 0,
              'If you are using ',
              b,
              ' in a non-javascript project, you can install ',
              m,
              " and all it's official plugins via the ",
              n(
                c,
                {
                  currentPage: e.currentPage,
                  target: '_blank',
                  to: 'https://github.com/intuit/auto/releases',
                  className: 'external-link'
                },
                void 0,
                'releases'
              ),
              ' page. Here you will find a build of ',
              f,
              ' for all major OSes. This build has ',
              y,
              " bundled so you don't need it installed!"
            ),
            n(
              'h2',
              { id: 'help' },
              void 0,
              'Help ',
              n(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#help',
                'aria-hidden': 'true'
              })
            ),
            N,
            j,
            n(
              'h2',
              { id: 'enterprise' },
              void 0,
              'Enterprise ',
              n(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#enterprise',
                'aria-hidden': 'true'
              })
            ),
            n(
              'p',
              {},
              void 0,
              'If you are using enterprise github ',
              P,
              ' lets you configure the github API URL that it uses. You can configure this by using the CLI option ',
              w,
              ', by setting the value in your ',
              n(
                c,
                {
                  currentPage: e.currentPage,
                  to: '/auto/pages/autorc.html#githubApi'
                },
                void 0,
                '.autorc'
              ),
              ', or during ',
              k,
              '.'
            ),
            n(
              'h3',
              { id: 'project-already-published' },
              void 0,
              'Project already published ',
              n(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#project-already-published',
                'aria-hidden': 'true'
              })
            ),
            O,
            T,
            _,
            E,
            L,
            n(
              'h2',
              { id: 'configuration' },
              void 0,
              'Configuration ',
              n(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#configuration',
                'aria-hidden': 'true'
              })
            ),
            S,
            I,
            n(
              'h3',
              { id: '1.-initialize-options' },
              void 0,
              '1. Initialize Options ',
              n(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#1.-initialize-options',
                'aria-hidden': 'true'
              })
            ),
            R,
            n(
              'h3',
              { id: '2.-environment-variables' },
              void 0,
              '2. Environment Variables ',
              n(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#2.-environment-variables',
                'aria-hidden': 'true'
              })
            ),
            H,
            n(
              'ul',
              {},
              void 0,
              n(
                'li',
                {},
                void 0,
                x,
                ' - Used for updating the changelog and publishing the GitHub release (',
                n(
                  c,
                  {
                    currentPage: e.currentPage,
                    target: '_blank',
                    to: 'https://github.com/settings/tokens',
                    className: 'external-link'
                  },
                  void 0,
                  'create one here'
                ),
                ')'
              ),
              C
            ),
            n(
              'h4',
              { id: 'local-.env' },
              void 0,
              'Local ',
              G,
              ' ',
              n(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#local-.env',
                'aria-hidden': 'true'
              })
            ),
            $,
            K,
            A,
            n(
              'h4',
              { id: 'http-proxy' },
              void 0,
              'HTTP Proxy ',
              n(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#http-proxy',
                'aria-hidden': 'true'
              })
            ),
            D,
            M,
            n(
              'h3',
              { id: '3.-labels' },
              void 0,
              '3. Labels ',
              n(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#3.-labels',
                'aria-hidden': 'true'
              })
            ),
            U,
            n(
              'ul',
              {},
              void 0,
              n(
                'li',
                {},
                void 0,
                'Versioning Labels - used to calculate version numbers and make releases. To change them refer to ',
                n(
                  c,
                  {
                    currentPage: e.currentPage,
                    to: '/auto/pages/autorc.html#versioning-labels'
                  },
                  void 0,
                  'this'
                ),
                '.'
              ),
              n(
                'li',
                {},
                void 0,
                'Changelog Labels - These labels do not effect the version calculation but they will change the section the PR displays in the changelog. These are customizable too, and you can even add your own sections. Read more ',
                n(
                  c,
                  {
                    currentPage: e.currentPage,
                    to: '/auto/pages/autorc.html#changelog-titles'
                  },
                  void 0,
                  'here'
                )
              )
            ),
            V,
            Y,
            n(
              'h3',
              { id: '4.-script' },
              void 0,
              '4. Script ',
              n(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#4.-script',
                'aria-hidden': 'true'
              })
            ),
            z,
            n(
              'h4',
              { id: 'quick-setup' },
              void 0,
              'Quick Setup ',
              n(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#quick-setup',
                'aria-hidden': 'true'
              })
            ),
            B,
            q,
            J,
            W,
            n(
              'h4',
              { id: 'detailed-setup' },
              void 0,
              'Detailed Setup ',
              n(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#detailed-setup',
                'aria-hidden': 'true'
              })
            ),
            X,
            Q,
            n(
              'h5',
              { id: 'enabling-skip-release-label' },
              void 0,
              'Enabling ',
              F,
              ' label ',
              n(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#enabling-skip-release-label',
                'aria-hidden': 'true'
              })
            ),
            Z,
            ee,
            ae,
            oe,
            te,
            ie
          )
        );
      (a.default = se), (e.exports = a.default);
    }
  }
]);
//# sourceMappingURL=getting-started.js.map
