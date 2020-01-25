(window.webpackJsonp = window.webpackJsonp || []).push([
  [50],
  {
    67: function(e, s, a) {
      'use strict';
      Object.defineProperty(s, '__esModule', { value: !0 }),
        (s.default = void 0);
      var o,
        r = n(a(3)),
        i = (function(e) {
          if (e && e.__esModule) return e;
          var s = {};
          if (null != e)
            for (var a in e)
              if (Object.prototype.hasOwnProperty.call(e, a)) {
                var o =
                  Object.defineProperty && Object.getOwnPropertyDescriptor
                    ? Object.getOwnPropertyDescriptor(e, a)
                    : {};
                o.get || o.set ? Object.defineProperty(s, a, o) : (s[a] = e[a]);
              }
          return (s.default = e), s;
        })(a(0));
      n(a(2)), n(a(106));
      function n(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function t(e, s, a, r) {
        o ||
          (o =
            ('function' == typeof Symbol &&
              Symbol.for &&
              Symbol.for('react.element')) ||
            60103);
        var i = e && e.defaultProps,
          n = arguments.length - 3;
        if ((s || 0 === n || (s = { children: void 0 }), s && i))
          for (var t in i) void 0 === s[t] && (s[t] = i[t]);
        else s || (s = i || {});
        if (1 === n) s.children = r;
        else if (n > 1) {
          for (var l = new Array(n), d = 0; d < n; d++) l[d] = arguments[d + 3];
          s.children = l;
        }
        return {
          $$typeof: o,
          type: e,
          key: void 0 === a ? null : '' + a,
          ref: null,
          props: s,
          _owner: null
        };
      }
      function l(e, s, a) {
        return (
          s in e
            ? Object.defineProperty(e, s, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[s] = a),
          e
        );
      }
      function d() {
        return (d =
          Object.assign ||
          function(e) {
            for (var s = 1; s < arguments.length; s++) {
              var a = arguments[s];
              for (var o in a)
                Object.prototype.hasOwnProperty.call(a, o) && (e[o] = a[o]);
            }
            return e;
          }).apply(this, arguments);
      }
      function h(e, s) {
        if (null == e) return {};
        var a,
          o,
          r = (function(e, s) {
            if (null == e) return {};
            var a,
              o,
              r = {},
              i = Object.keys(e);
            for (o = 0; o < i.length; o++)
              (a = i[o]), s.indexOf(a) >= 0 || (r[a] = e[a]);
            return r;
          })(e, s);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (o = 0; o < i.length; o++)
            (a = i[o]),
              s.indexOf(a) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, a) &&
                  (r[a] = e[a]));
        }
        return r;
      }
      const c = e => {
        let { to: s } = e,
          a = h(e, ['to']);
        return s.includes('http')
          ? i.default.createElement('a', d({}, e, { href: s }))
          : ('#' === s[0] &&
              (s = r.default.join('/auto/', 'pages/writing-plugins.html') + s),
            i.default.createElement(
              'a',
              d({}, a, {
                href: s,
                onClick: a => {
                  if ((a.preventDefault(), '#' === e.to)) return !1;
                  const o = new URL(r.default.join(window.location.origin, s));
                  window.history.pushState(
                    (e => ({
                      href: e.href,
                      pathname: e.pathname,
                      hash: e.hash,
                      query: e.query
                    }))(o),
                    null,
                    s
                  ),
                    e.onClick();
                  const i = new CustomEvent('changeLocation', { detail: o });
                  return dispatchEvent(i), !1;
                }
              })
            ));
      };
      c.defaultProps = { href: '', onClick: () => {} };
      const m = e => {
        var s, a;
        return (
          (a = s = class extends i.default.Component {
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
          a
        );
      };
      m(() => a.e(31).then(a.bind(null, 107))),
        m(() => a.e(31).then(a.bind(null, 108)));
      var p = t('h1', {}, void 0, 'Writing Plugins'),
        g = t(
          'p',
          {},
          void 0,
          "If you've ever written a webpack plugin it's a lot like that."
        ),
        v = t('p', {}, void 0, 'A plugin definition is:'),
        u = t(
          'ul',
          {},
          void 0,
          t(
            'li',
            {},
            void 0,
            'a class the has an ',
            t('code', {}, void 0, 'apply'),
            ' function where a plugin hooks into various functions in auto (REQUIRED)'
          ),
          t(
            'li',
            {},
            void 0,
            'a constructor where you can load plugin specific config'
          )
        ),
        b = t(
          'pre',
          {},
          void 0,
          t(
            'code',
            { className: 'language-ts' },
            void 0,
            t('span', { className: 'hljs-keyword' }, void 0, 'import'),
            ' { Auto, IPlugin } ',
            t('span', { className: 'hljs-keyword' }, void 0, 'from'),
            ' ',
            t('span', { className: 'hljs-string' }, void 0, "'auto'"),
            ';',
            t('br', {}),
            t('br', {}),
            t('span', { className: 'hljs-keyword' }, void 0, 'export'),
            ' ',
            t('span', { className: 'hljs-keyword' }, void 0, 'default'),
            ' ',
            t('span', { className: 'hljs-keyword' }, void 0, 'class'),
            ' TestPlugin ',
            t('span', { className: 'hljs-keyword' }, void 0, 'implements'),
            ' IPlugin {',
            t('br', {}),
            '  ',
            t('span', { className: 'hljs-keyword' }, void 0, 'private'),
            ' readonly config: ',
            t('span', { className: 'hljs-built_in' }, void 0, 'any'),
            ';',
            t('br', {}),
            t('br', {}),
            '  ',
            t('span', { className: 'hljs-keyword' }, void 0, 'constructor'),
            '(',
            t(
              'span',
              { className: 'hljs-params' },
              void 0,
              'config: ',
              t('span', { className: 'hljs-built_in' }, void 0, 'any')
            ),
            ') {',
            t('br', {}),
            '    ',
            t('span', { className: 'hljs-keyword' }, void 0, 'this'),
            '.config = config;',
            t('br', {}),
            '  }',
            t('br', {}),
            t('br', {}),
            '  apply(auto: Auto) {',
            t('br', {}),
            '    ',
            t(
              'span',
              { className: 'hljs-comment' },
              void 0,
              '// hook into auto'
            ),
            t('br', {}),
            '  }',
            t('br', {}),
            '}',
            t('br', {})
          )
        ),
        N = t('p', {}, void 0, 'Or in JavaScript:'),
        f = t(
          'pre',
          {},
          void 0,
          t(
            'code',
            { className: 'language-js' },
            void 0,
            t('span', { className: 'hljs-built_in' }, void 0, 'module'),
            '.exports = ',
            t(
              'span',
              { className: 'hljs-class' },
              void 0,
              t('span', { className: 'hljs-keyword' }, void 0, 'class'),
              ' ',
              t('span', { className: 'hljs-title' }, void 0, 'TestPlugin'),
              ' '
            ),
            '{',
            t('br', {}),
            '  ',
            t('span', { className: 'hljs-keyword' }, void 0, 'constructor'),
            '(config) {',
            t('br', {}),
            '    ',
            t('span', { className: 'hljs-keyword' }, void 0, 'this'),
            '.config = config;',
            t('br', {}),
            '  }',
            t('br', {}),
            t('br', {}),
            '  ',
            t(
              'span',
              { className: 'hljs-comment' },
              void 0,
              '/**',
              t('br', {}),
              '   * Setup the plugin',
              t('br', {}),
              "   * @param {import('@auto-it/core').default} auto",
              t('br', {}),
              '   */'
            ),
            t('br', {}),
            '  apply(auto) {',
            t('br', {}),
            '    ',
            t(
              'span',
              { className: 'hljs-comment' },
              void 0,
              '// hook into auto'
            ),
            t('br', {}),
            '  }',
            t('br', {}),
            '};',
            t('br', {})
          )
        ),
        j = t(
          'p',
          {},
          void 0,
          'In the constructor you have access to any plugin specific config provided in the ',
          t('code', {}, void 0, '.autorc'),
          '. It might be useful to write a more type-safe interface for your config.'
        ),
        k = t(
          'pre',
          {},
          void 0,
          t(
            'code',
            { className: 'language-ts' },
            void 0,
            t('span', { className: 'hljs-keyword' }, void 0, 'import'),
            ' { Auto, IPlugin } ',
            t('span', { className: 'hljs-keyword' }, void 0, 'from'),
            ' ',
            t('span', { className: 'hljs-string' }, void 0, "'auto'"),
            ';',
            t('br', {}),
            t('br', {}),
            t('span', { className: 'hljs-keyword' }, void 0, 'interface'),
            ' ITestPluginConfig {',
            t('br', {}),
            '  foo?: ',
            t('span', { className: 'hljs-built_in' }, void 0, 'string'),
            ';',
            t('br', {}),
            '  bar?: ',
            t('span', { className: 'hljs-built_in' }, void 0, 'boolean'),
            ';',
            t('br', {}),
            '}',
            t('br', {}),
            t('br', {}),
            t('span', { className: 'hljs-keyword' }, void 0, 'export'),
            ' ',
            t('span', { className: 'hljs-keyword' }, void 0, 'default'),
            ' ',
            t('span', { className: 'hljs-keyword' }, void 0, 'class'),
            ' TestPlugin ',
            t('span', { className: 'hljs-keyword' }, void 0, 'implements'),
            ' IPlugin {',
            t('br', {}),
            '  ',
            t('span', { className: 'hljs-keyword' }, void 0, 'private'),
            ' readonly config: ITestPluginConfig;',
            t('br', {}),
            t('br', {}),
            '  ',
            t('span', { className: 'hljs-keyword' }, void 0, 'constructor'),
            '(',
            t(
              'span',
              { className: 'hljs-params' },
              void 0,
              'config: ITestPluginConfig'
            ),
            ') {',
            t('br', {}),
            '    ',
            t('span', { className: 'hljs-keyword' }, void 0, 'this'),
            '.config = config;',
            t('br', {}),
            '  }',
            t('br', {}),
            '}',
            t('br', {})
          )
        ),
        y = t(
          'p',
          {},
          void 0,
          'Plugins work by hooking into various actions that ',
          t('code', {}, void 0, 'auto'),
          ' has to do in order to facilitate a release or interact with your GitHub repo. The hooks that it exposes are:'
        ),
        w = t('hr', {}),
        P = t(
          'p',
          {},
          void 0,
          'Happens before anything is done. This is a great place to check for platform specific secrets such as a npm token.'
        ),
        C = t(
          'pre',
          {},
          void 0,
          t(
            'code',
            { className: 'language-ts' },
            void 0,
            'auto.hooks.beforeRun.tapPromise(',
            t('span', { className: 'hljs-string' }, void 0, "'NPM'"),
            ', ',
            t('span', { className: 'hljs-keyword' }, void 0, 'async'),
            ' config => {',
            t('br', {}),
            '  ',
            t('span', { className: 'hljs-keyword' }, void 0, 'if'),
            ' (!process.env.NPM_TOKEN) {',
            t('br', {}),
            '    auto.logger.log.warn(',
            t(
              'span',
              { className: 'hljs-string' },
              void 0,
              "'NPM Token is needed for the NPM plugin!'"
            ),
            ');',
            t('br', {}),
            '  }',
            t('br', {}),
            '});',
            t('br', {})
          )
        ),
        L = t(
          'p',
          {},
          void 0,
          'Modify what is in the config. You must return the config in this hook.'
        ),
        T = t(
          'pre',
          {},
          void 0,
          t(
            'code',
            { className: 'language-ts' },
            void 0,
            'auto.hooks.modifyConfig.tap(',
            t('span', { className: 'hljs-string' }, void 0, "'test'"),
            ', ',
            t(
              'span',
              { className: 'hljs-function' },
              void 0,
              t('span', { className: 'hljs-params' }, void 0, 'config'),
              ' =>'
            ),
            ' {',
            t('br', {}),
            '  config.labels.released = {',
            t('br', {}),
            '    name: ',
            t('span', { className: 'hljs-string' }, void 0, "'released'"),
            ',',
            t('br', {}),
            '    description: ',
            t(
              'span',
              { className: 'hljs-string' },
              void 0,
              "'This issue/pull request has been released'"
            ),
            t('br', {}),
            '  };',
            t('br', {}),
            t('br', {}),
            '  ',
            t('span', { className: 'hljs-keyword' }, void 0, 'return'),
            ' config;',
            t('br', {}),
            '});',
            t('br', {})
          )
        ),
        x = t(
          'p',
          {},
          void 0,
          'Happens before ',
          t('code', {}, void 0, 'shipit'),
          ' is run. This is a great way to throw an error if a token or key is not present.'
        ),
        R = t(
          'pre',
          {},
          void 0,
          t(
            'code',
            { className: 'language-ts' },
            void 0,
            'auto.hooks.beforeRun.tapPromise(',
            t('span', { className: 'hljs-string' }, void 0, "'NPM'"),
            ', ',
            t('span', { className: 'hljs-keyword' }, void 0, 'async'),
            ' config => {',
            t('br', {}),
            '  ',
            t('span', { className: 'hljs-keyword' }, void 0, 'if'),
            ' (!process.env.NPM_TOKEN) {',
            t('br', {}),
            '    ',
            t('span', { className: 'hljs-keyword' }, void 0, 'throw'),
            ' ',
            t('span', { className: 'hljs-keyword' }, void 0, 'new'),
            ' ',
            t('span', { className: 'hljs-built_in' }, void 0, 'Error'),
            '(',
            t(
              'span',
              { className: 'hljs-string' },
              void 0,
              "'NPM Token is needed for the NPM plugin!'"
            ),
            ');',
            t('br', {}),
            '  }',
            t('br', {}),
            '});',
            t('br', {})
          )
        ),
        M = t(
          'p',
          {},
          void 0,
          'Ran before the ',
          t('code', {}, void 0, 'changelog'),
          ' command commits the new release notes to ',
          t('code', {}, void 0, 'CHANGELOG.md'),
          '. Useful for modifying the changelog as a whole or creating extra ',
          t('code', {}, void 0, 'changelog'),
          ' files. These files can be apart of the commit that updates the changelog.'
        ),
        S = t(
          'ul',
          {},
          void 0,
          t('li', {}, void 0, 'bump - the semver bump'),
          t('li', {}, void 0, 'commits - the commits in the changelog'),
          t(
            'li',
            {},
            void 0,
            'currentVersion - version that was just released'
          ),
          t(
            'li',
            {},
            void 0,
            'lastRelease - the version before the current version'
          ),
          t(
            'li',
            {},
            void 0,
            'releaseNotes - generated release notes for the release'
          )
        ),
        O = t(
          'pre',
          {},
          void 0,
          t(
            'code',
            { className: 'language-ts' },
            void 0,
            'auto.hooks.beforeCommitChangelog.tap(',
            t('br', {}),
            '  ',
            t('span', { className: 'hljs-string' }, void 0, "'MyPlugin'"),
            ',',
            t('br', {}),
            '  ',
            t('span', { className: 'hljs-keyword' }, void 0, 'async'),
            ' ({ currentVersion, commits, releaseNotes, lastRelease }) => {',
            t('br', {}),
            '    ',
            t('span', { className: 'hljs-comment' }, void 0, '// do something'),
            t('br', {}),
            '  }',
            t('br', {}),
            ');',
            t('br', {})
          )
        ),
        E = t(
          'p',
          {},
          void 0,
          'Ran after the ',
          t('code', {}, void 0, 'changelog'),
          ' command adds the new release notes to ',
          t('code', {}, void 0, 'CHANGELOG.md'),
          '. Useful for getting extra commits into a release before publishing.'
        ),
        V = t(
          'ul',
          {},
          void 0,
          t('li', {}, void 0, 'bump - the semver bump'),
          t('li', {}, void 0, 'commits - the commits in the changelog'),
          t(
            'li',
            {},
            void 0,
            'currentVersion - version that was just released'
          ),
          t(
            'li',
            {},
            void 0,
            'lastRelease - the version before the current version'
          ),
          t(
            'li',
            {},
            void 0,
            'releaseNotes - generated release notes for the release'
          )
        ),
        _ = t(
          'pre',
          {},
          void 0,
          t(
            'code',
            { className: 'language-ts' },
            void 0,
            'auto.hooks.afterAddToChangelog.tap(',
            t('br', {}),
            '  ',
            t('span', { className: 'hljs-string' }, void 0, "'MyPlugin'"),
            ',',
            t('br', {}),
            '  ',
            t('span', { className: 'hljs-keyword' }, void 0, 'async'),
            ' ({ currentVersion, commits, releaseNotes, lastRelease }) => {',
            t('br', {}),
            '    ',
            t('span', { className: 'hljs-comment' }, void 0, '// do something'),
            t('br', {}),
            '  }',
            t('br', {}),
            ');',
            t('br', {})
          )
        ),
        A = t(
          'p',
          {},
          void 0,
          'Ran after the ',
          t('code', {}, void 0, 'release'),
          ' command has run. This async hooks gets the following arguments:'
        ),
        I = t(
          'ul',
          {},
          void 0,
          t(
            'li',
            {},
            void 0,
            'lastVersion - the version that existed prior to the current release'
          ),
          t('li', {}, void 0, 'nextVersion - version that was just released'),
          t('li', {}, void 0, 'commits - the commits in the release'),
          t(
            'li',
            {},
            void 0,
            'releaseNotes - generated release notes for the release'
          ),
          t(
            'li',
            {},
            void 0,
            'response - the response returned from making the release'
          )
        ),
        G = t(
          'pre',
          {},
          void 0,
          t(
            'code',
            { className: 'language-ts' },
            void 0,
            'auto.hooks.afterRelease.tap(',
            t('br', {}),
            '  ',
            t('span', { className: 'hljs-string' }, void 0, "'MyPlugin'"),
            ',',
            t('br', {}),
            '  ',
            t('span', { className: 'hljs-keyword' }, void 0, 'async'),
            ' ({ lastVersion, nextVersion, commits, releaseNotes, response }) => {',
            t('br', {}),
            '    ',
            t('span', { className: 'hljs-comment' }, void 0, '// do something'),
            t('br', {}),
            '  }',
            t('br', {}),
            ');',
            t('br', {})
          )
        ),
        $ = t(
          'p',
          {},
          void 0,
          'Ran after the ',
          t('code', {}, void 0, 'shipit'),
          ' command has run.'
        ),
        H = t(
          'ul',
          {},
          void 0,
          t(
            'li',
            {},
            void 0,
            t('code', {}, void 0, 'newVersion'),
            ' - The new version that was release'
          ),
          t(
            'li',
            {},
            void 0,
            t('code', {}, void 0, 'commits'),
            ' - the commits in the release'
          ),
          t(
            'li',
            {},
            void 0,
            t('code', {}, void 0, 'data'),
            t(
              'ul',
              {},
              void 0,
              t(
                'li',
                {},
                void 0,
                t('code', {}, void 0, 'context'),
                ' - The type of release that was created (',
                t('code', {}, void 0, 'latest'),
                ', ',
                t('code', {}, void 0, 'next'),
                ', ',
                t('code', {}, void 0, 'canary'),
                ', or ',
                t('code', {}, void 0, 'old'),
                ')'
              )
            )
          )
        ),
        F = t(
          'pre',
          {},
          void 0,
          t(
            'code',
            { className: 'language-ts' },
            void 0,
            'auto.hooks.afterShipIt.tap(',
            t('br', {}),
            '  ',
            t('span', { className: 'hljs-string' }, void 0, "'MyPlugin'"),
            ',',
            t('br', {}),
            '  ',
            t('span', { className: 'hljs-keyword' }, void 0, 'async'),
            ' (newVersion, commits, { context }) => {',
            t('br', {}),
            '    ',
            t('span', { className: 'hljs-comment' }, void 0, '// do something'),
            t('br', {}),
            '  }',
            t('br', {}),
            ');',
            t('br', {})
          )
        ),
        J = t(
          'p',
          {},
          void 0,
          'Get git author. Typically from a package distribution description file.'
        ),
        B = t(
          'pre',
          {},
          void 0,
          t(
            'code',
            { className: 'language-ts' },
            void 0,
            'auto.hooks.getAuthor.tapPromise(',
            t('span', { className: 'hljs-string' }, void 0, "'NPM'"),
            ', ',
            t('span', { className: 'hljs-keyword' }, void 0, 'async'),
            ' () => {',
            t('br', {}),
            '  ',
            t('span', { className: 'hljs-keyword' }, void 0, 'const'),
            ' { author } = ',
            t('span', { className: 'hljs-built_in' }, void 0, 'JSON'),
            '.parse(',
            t('span', { className: 'hljs-keyword' }, void 0, 'await'),
            ' readFile(',
            t('span', { className: 'hljs-string' }, void 0, "'package.json'"),
            ', ',
            t('span', { className: 'hljs-string' }, void 0, "'utf-8'"),
            '));',
            t('br', {}),
            t('br', {}),
            '  ',
            t('span', { className: 'hljs-keyword' }, void 0, 'if'),
            ' (author) {',
            t('br', {}),
            '    ',
            t('span', { className: 'hljs-keyword' }, void 0, 'return'),
            ' author;',
            t('br', {}),
            '  }',
            t('br', {}),
            '});',
            t('br', {})
          )
        ),
        D = t(
          'p',
          {},
          void 0,
          'Get the previous version. Typically from a package distribution description file.'
        ),
        Y = t(
          'pre',
          {},
          void 0,
          t(
            'code',
            { className: 'language-ts' },
            void 0,
            'auto.hooks.getPreviousVersion.tapPromise(',
            t('span', { className: 'hljs-string' }, void 0, "'NPM'"),
            ', ',
            t('span', { className: 'hljs-keyword' }, void 0, 'async'),
            ' () => {',
            t('br', {}),
            '  ',
            t('span', { className: 'hljs-keyword' }, void 0, 'const'),
            ' { version } = ',
            t('span', { className: 'hljs-built_in' }, void 0, 'JSON'),
            '.parse(',
            t('span', { className: 'hljs-keyword' }, void 0, 'await'),
            ' readFile(',
            t('span', { className: 'hljs-string' }, void 0, "'package.json'"),
            ', ',
            t('span', { className: 'hljs-string' }, void 0, "'utf-8'"),
            '));',
            t('br', {}),
            t('br', {}),
            '  ',
            t('span', { className: 'hljs-keyword' }, void 0, 'if'),
            ' (version) {',
            t('br', {}),
            '    ',
            t('span', { className: 'hljs-keyword' }, void 0, 'return'),
            ' auto.prefixRelease(',
            t('br', {}),
            '      ',
            t('span', { className: 'hljs-built_in' }, void 0, 'JSON'),
            '.parse(',
            t('span', { className: 'hljs-keyword' }, void 0, 'await'),
            ' readFile(',
            t('span', { className: 'hljs-string' }, void 0, "'package.json'"),
            ', ',
            t('span', { className: 'hljs-string' }, void 0, "'utf-8'"),
            ')).version',
            t('br', {}),
            '    );',
            t('br', {}),
            '  }',
            t('br', {}),
            '});',
            t('br', {})
          )
        ),
        U = t(
          'p',
          {},
          void 0,
          'Get owner and repository. Typically from a package distribution description file.'
        ),
        q = t(
          'pre',
          {},
          void 0,
          t(
            'code',
            { className: 'language-ts' },
            void 0,
            'auto.hooks.getRepository.tapPromise(',
            t('span', { className: 'hljs-string' }, void 0, "'NPM'"),
            ', ',
            t('span', { className: 'hljs-keyword' }, void 0, 'async'),
            ' () => {',
            t('br', {}),
            '  ',
            t('span', { className: 'hljs-keyword' }, void 0, 'const'),
            ' owner = ',
            t(
              'span',
              { className: 'hljs-comment' },
              void 0,
              '// get the owner from package.json'
            ),
            t('br', {}),
            '  ',
            t('span', { className: 'hljs-keyword' }, void 0, 'const'),
            ' repo = ',
            t(
              'span',
              { className: 'hljs-comment' },
              void 0,
              '// get the repo from package.json'
            ),
            t('br', {}),
            t('br', {}),
            '  ',
            t('span', { className: 'hljs-keyword' }, void 0, 'return'),
            ' {',
            t('br', {}),
            '    owner,',
            t('br', {}),
            '    repo',
            t('br', {}),
            '  }',
            t('br', {}),
            '});',
            t('br', {})
          )
        ),
        K = t(
          'p',
          {},
          void 0,
          "Tap into the things the Release class makes. This isn't the same as ",
          t('code', {}, void 0, 'auto release'),
          ', but the main class that does most of the work.'
        ),
        W = t('p', {}, void 0, 'Available hooks:'),
        Q = t(
          'pre',
          {},
          void 0,
          t(
            'code',
            { className: 'language-ts' },
            void 0,
            t('span', { className: 'hljs-keyword' }, void 0, 'this'),
            '.hooks.onCreateRelease.tap(',
            t('span', { className: 'hljs-string' }, void 0, "'MyPlugin'"),
            ', ',
            t(
              'span',
              { className: 'hljs-function' },
              void 0,
              t('span', { className: 'hljs-params' }, void 0, 'release'),
              ' =>'
            ),
            ' {',
            t('br', {}),
            '  release.hooks.onCreateLogParse.tap(',
            t(
              'span',
              { className: 'hljs-string' },
              void 0,
              "'Change log parseing'"
            ),
            ', ',
            t(
              'span',
              { className: 'hljs-function' },
              void 0,
              t('span', { className: 'hljs-params' }, void 0, 'logParse'),
              ' =>'
            ),
            t('br', {}),
            '    ',
            t(
              'span',
              { className: 'hljs-comment' },
              void 0,
              '// extend logParse'
            ),
            t('br', {}),
            '  );',
            t('br', {}),
            t('br', {}),
            '  release.hooks.onCreateChangelog.tap(',
            t('br', {}),
            '    ',
            t(
              'span',
              { className: 'hljs-string' },
              void 0,
              "'Change changelog'"
            ),
            ',',
            t('br', {}),
            '    ',
            t(
              'span',
              { className: 'hljs-function' },
              void 0,
              t('span', { className: 'hljs-params' }, void 0, 'changelog'),
              ' =>'
            ),
            ' {',
            t('br', {}),
            '      ',
            t(
              'span',
              { className: 'hljs-comment' },
              void 0,
              '// extend changelog'
            ),
            t('br', {}),
            '    }',
            t('br', {}),
            '  );',
            t('br', {}),
            '});',
            t('br', {})
          )
        ),
        z = t('code', {}, void 0, 'this.hooks.onCreateRelease'),
        X = t('code', {}, void 0, 'this.hooks'),
        Z = t('code', {}, void 0, 'this.hooks.onCreateRelease'),
        ee = t('code', {}, void 0, 'this.hooks'),
        se = t(
          'p',
          {},
          void 0,
          'Version the package. This is a good opportunity to ',
          t('code', {}, void 0, 'git tag'),
          ' the release also. Here ',
          t('code', {}, void 0, 'npm'),
          ' does it for us.'
        ),
        ae = t(
          'pre',
          {},
          void 0,
          t(
            'code',
            { className: 'language-ts' },
            void 0,
            'auto.hooks.version.tapPromise(',
            t('span', { className: 'hljs-string' }, void 0, "'NPM'"),
            ', ',
            t('span', { className: 'hljs-keyword' }, void 0, 'async'),
            ' (version: SEMVER) => {',
            t('br', {}),
            '  ',
            t('span', { className: 'hljs-keyword' }, void 0, 'await'),
            ' execPromise(',
            t('span', { className: 'hljs-string' }, void 0, "'npm'"),
            ', [',
            t('br', {}),
            '    ',
            t('span', { className: 'hljs-string' }, void 0, "'version'"),
            ',',
            t('br', {}),
            '    version,',
            t('br', {}),
            '    ',
            t('span', { className: 'hljs-string' }, void 0, "'-m'"),
            ',',
            t('br', {}),
            '    ',
            t(
              'span',
              { className: 'hljs-string' },
              void 0,
              "'Bump version to: %s [skip ci]'"
            ),
            t('br', {}),
            '  ]);',
            t('br', {}),
            '});',
            t('br', {})
          )
        ),
        oe = t('p', {}, void 0, 'Ran after the package has been versioned.'),
        re = t(
          'p',
          {},
          void 0,
          'Publish the package to some package distributor. You must push the tags to github!'
        ),
        ie = t(
          'pre',
          {},
          void 0,
          t(
            'code',
            { className: 'language-ts' },
            void 0,
            'auto.hooks.publish.tapPromise(',
            t('span', { className: 'hljs-string' }, void 0, "'NPM'"),
            ', ',
            t('span', { className: 'hljs-keyword' }, void 0, 'async'),
            ' (version: SEMVER) => {',
            t('br', {}),
            '  ',
            t('span', { className: 'hljs-keyword' }, void 0, 'await'),
            ' execPromise(',
            t('span', { className: 'hljs-string' }, void 0, "'npm'"),
            ', [',
            t('br', {}),
            '    ',
            t('span', { className: 'hljs-string' }, void 0, "'version'"),
            ',',
            t('br', {}),
            '    version,',
            t('br', {}),
            '    ',
            t('span', { className: 'hljs-string' }, void 0, "'-m'"),
            ',',
            t('br', {}),
            '    ',
            t(
              'span',
              { className: 'hljs-string' },
              void 0,
              "'Bump version to: %s [skip ci]'"
            ),
            t('br', {}),
            '  ]);',
            t('br', {}),
            '  ',
            t('span', { className: 'hljs-keyword' }, void 0, 'await'),
            ' execPromise(',
            t('span', { className: 'hljs-string' }, void 0, "'npm'"),
            ', [',
            t('span', { className: 'hljs-string' }, void 0, "'publish'"),
            ']);',
            t('br', {}),
            '  ',
            t('span', { className: 'hljs-keyword' }, void 0, 'await'),
            ' execPromise(',
            t('span', { className: 'hljs-string' }, void 0, "'git'"),
            ', [',
            t('br', {}),
            '    ',
            t('span', { className: 'hljs-string' }, void 0, "'push'"),
            ',',
            t('br', {}),
            '    ',
            t('span', { className: 'hljs-string' }, void 0, "'--follow-tags'"),
            ',',
            t('br', {}),
            '    ',
            t('span', { className: 'hljs-string' }, void 0, "'--set-upstream'"),
            ',',
            t('br', {}),
            '    ',
            t('span', { className: 'hljs-string' }, void 0, "'origin'"),
            ',',
            t('br', {}),
            '    ',
            t('span', { className: 'hljs-string' }, void 0, "'$branch'"),
            t('br', {}),
            '  ]);',
            t('br', {}),
            '});',
            t('br', {})
          )
        ),
        ne = t('p', {}, void 0, 'Ran after the package has been published.'),
        te = t('hr', {}),
        le = t(
          'p',
          {},
          void 0,
          'Used to publish a canary release. In this hook you get the semver bump and the unique canary postfix ID.'
        ),
        de = t(
          'pre',
          {},
          void 0,
          t(
            'code',
            { className: 'language-ts' },
            void 0,
            'auto.hooks.canary.tapPromise(',
            t('span', { className: 'hljs-keyword' }, void 0, 'this'),
            '.name, ',
            t('span', { className: 'hljs-keyword' }, void 0, 'async'),
            ' (version, postFix) => {',
            t('br', {}),
            '  ',
            t('span', { className: 'hljs-keyword' }, void 0, 'const'),
            ' lastRelease = ',
            t('span', { className: 'hljs-keyword' }, void 0, 'await'),
            ' auto.git!.getLatestRelease();',
            t('br', {}),
            '  ',
            t('span', { className: 'hljs-keyword' }, void 0, 'const'),
            ' current = ',
            t('span', { className: 'hljs-keyword' }, void 0, 'await'),
            ' auto.getCurrentVersion(lastRelease);',
            t('br', {}),
            '  ',
            t('span', { className: 'hljs-keyword' }, void 0, 'const'),
            ' nextVersion = inc(current, version ',
            t('span', { className: 'hljs-keyword' }, void 0, 'as'),
            ' ReleaseType);',
            t('br', {}),
            '  ',
            t('span', { className: 'hljs-keyword' }, void 0, 'const'),
            ' isScopedPackage = name.match(',
            t('span', { className: 'hljs-regexp' }, void 0, '/@\\S+\\/\\S+/'),
            ');',
            t('br', {}),
            '  ',
            t('span', { className: 'hljs-keyword' }, void 0, 'const'),
            ' canaryVersion = `${nextVersion}-canary${postFix}`;',
            t('br', {}),
            t('br', {}),
            '  ',
            t('span', { className: 'hljs-keyword' }, void 0, 'await'),
            ' execPromise(',
            t('span', { className: 'hljs-string' }, void 0, "'npm'"),
            ', [',
            t('span', { className: 'hljs-string' }, void 0, "'version'"),
            ', canaryVersion, ',
            t(
              'span',
              { className: 'hljs-string' },
              void 0,
              "'--no-git-tag-version'"
            ),
            ']);',
            t('br', {}),
            '  ',
            t('span', { className: 'hljs-keyword' }, void 0, 'await'),
            ' execPromise(',
            t('span', { className: 'hljs-string' }, void 0, "'npm'"),
            ', [',
            t('span', { className: 'hljs-string' }, void 0, "'publish'"),
            ', ',
            t('span', { className: 'hljs-string' }, void 0, "'--tag'"),
            ', ',
            t('span', { className: 'hljs-string' }, void 0, "'canary'"),
            ']);',
            t('br', {}),
            t('br', {}),
            '  auto.logger.verbose.info(',
            t(
              'span',
              { className: 'hljs-string' },
              void 0,
              "'Successfully published canary version'"
            ),
            ');',
            t('br', {}),
            '  ',
            t('span', { className: 'hljs-keyword' }, void 0, 'return'),
            ' canaryVersion;',
            t('br', {}),
            '});',
            t('br', {})
          )
        ),
        he = t(
          'p',
          {},
          void 0,
          'Add extra content to your changelogs. This hook provide all the current "extra" notes and all of the commits for the changelog. You must return the notes array.'
        ),
        ce = t(
          'pre',
          {},
          void 0,
          t(
            'code',
            { className: 'language-ts' },
            void 0,
            'auto.hooks.onCreateChangelog.tapPromise(',
            t('span', { className: 'hljs-string' }, void 0, "'Giphy'"),
            ', ',
            t(
              'span',
              { className: 'hljs-function' },
              void 0,
              t('span', { className: 'hljs-params' }, void 0, 'changelog'),
              ' =>'
            ),
            t('br', {}),
            '  changelog.hooks.renderChangelogLine.tapPromise(',
            t('br', {}),
            '    ',
            t('span', { className: 'hljs-string' }, void 0, "'Giphy'"),
            ',',
            t('br', {}),
            '    ',
            t('span', { className: 'hljs-keyword' }, void 0, 'async'),
            ' (notes, commits) => {',
            t('br', {}),
            '      ',
            t('span', { className: 'hljs-keyword' }, void 0, 'const'),
            ' response = ',
            t('span', { className: 'hljs-keyword' }, void 0, 'await'),
            ' fetch(`https:',
            t(
              'span',
              { className: 'hljs-comment' },
              void 0,
              '//api.giphy.com/v1/gifs/random?api_key=${process.env.GIPHY_KEY}`);'
            ),
            t('br', {}),
            '      ',
            t('span', { className: 'hljs-keyword' }, void 0, 'const'),
            ' json = ',
            t('span', { className: 'hljs-keyword' }, void 0, 'await'),
            ' response.json();',
            t('br', {}),
            '      ',
            t('span', { className: 'hljs-keyword' }, void 0, 'const'),
            ' { data: gif } = json;',
            t('br', {}),
            t('br', {}),
            '      ',
            t('span', { className: 'hljs-keyword' }, void 0, 'return'),
            ' [...notes, `![${gif.title}](${gif.url})\\n`]',
            t('br', {}),
            '    }',
            t('br', {}),
            '  );',
            t('br', {}),
            ');',
            t('br', {})
          )
        ),
        me = t(
          'p',
          {},
          void 0,
          'Change how the changelog renders lines. This hook provides the commit and the current state of the line render. You must return the commit and the line string state as a tuple ([commit, line]).'
        ),
        pe = t(
          'p',
          {},
          void 0,
          'The following plugin would change all the bullet points in the changelog to star emojis.'
        ),
        ge = t(
          'pre',
          {},
          void 0,
          t(
            'code',
            { className: 'language-ts' },
            void 0,
            'auto.hooks.onCreateChangelog.tapPromise(',
            t('span', { className: 'hljs-string' }, void 0, "'Stars'"),
            ', ',
            t(
              'span',
              { className: 'hljs-function' },
              void 0,
              t('span', { className: 'hljs-params' }, void 0, 'changelog'),
              ' =>'
            ),
            t('br', {}),
            '  changelog.hooks.renderChangelogLine.tapPromise(',
            t('br', {}),
            '    ',
            t('span', { className: 'hljs-string' }, void 0, "'Stars'"),
            ',',
            t('br', {}),
            '    ',
            t('span', { className: 'hljs-keyword' }, void 0, 'async'),
            ' (commit, line) =>',
            t('br', {}),
            '      [commit, `${line.replace(',
            t('span', { className: 'hljs-string' }, void 0, "'-'"),
            ', ',
            t('span', { className: 'hljs-string' }, void 0, "':star:'"),
            ')}\\n`]',
            t('br', {}),
            '  );',
            t('br', {}),
            ');',
            t('br', {})
          )
        ),
        ve = t(
          'p',
          {},
          void 0,
          'Change how the changelog renders titles. The hook provides the current label for the section and all the configured changelog titles.'
        ),
        ue = t(
          'pre',
          {},
          void 0,
          t(
            'code',
            { className: 'language-ts' },
            void 0,
            'auto.hooks.onCreateChangelog.tapPromise(',
            t('span', { className: 'hljs-string' }, void 0, "'Stars'"),
            ', ',
            t(
              'span',
              { className: 'hljs-function' },
              void 0,
              t('span', { className: 'hljs-params' }, void 0, 'changelog'),
              ' =>'
            ),
            t('br', {}),
            '  changelog.hooks.renderChangelogTitle.tap(',
            t('br', {}),
            '    ',
            t('span', { className: 'hljs-string' }, void 0, "'My Titles'"),
            ',',
            t('br', {}),
            '    ',
            t(
              'span',
              { className: 'hljs-function' },
              void 0,
              '(',
              t(
                'span',
                { className: 'hljs-params' },
                void 0,
                'label, changelogTitles'
              ),
              ') =>'
            ),
            ' `:heart: ${changelogTitles[label]} :heart:`',
            t('br', {}),
            '  );',
            t('br', {}),
            ');',
            t('br', {})
          )
        ),
        be = t(
          'p',
          {},
          void 0,
          'Change how the changelog renders authors. This is both the author on each commit note and the user in the author section (the part between parentheses). This is generally a link to some profile.'
        ),
        Ne = t(
          'pre',
          {},
          void 0,
          t(
            'code',
            { className: 'language-ts' },
            void 0,
            'auto.hooks.onCreateChangelog.tapPromise(',
            t('span', { className: 'hljs-string' }, void 0, "'Stars'"),
            ', ',
            t(
              'span',
              { className: 'hljs-function' },
              void 0,
              t('span', { className: 'hljs-params' }, void 0, 'changelog'),
              ' =>'
            ),
            t('br', {}),
            '  changelog.hooks.renderChangelogAuthor.tap(',
            t('br', {}),
            '    ',
            t('span', { className: 'hljs-string' }, void 0, "'test'"),
            ',',
            t('br', {}),
            '    ',
            t(
              'span',
              { className: 'hljs-function' },
              void 0,
              '(',
              t('span', { className: 'hljs-params' }, void 0, 'author, commit'),
              ') =>'
            ),
            ' `:heart: ${author.name}/${commit.authorEmail} :heart:`',
            t('br', {}),
            '  );',
            t('br', {}),
            ');',
            t('br', {})
          )
        ),
        fe = t(
          'p',
          {},
          void 0,
          'Change how the changelog renders authors in the authors section. The hook provides the author object and the user created with ',
          t('code', {}, void 0, 'renderChangelogAuthor'),
          '. Here is where you might display extra info about the author, such as their full name.'
        ),
        je = t(
          'pre',
          {},
          void 0,
          t(
            'code',
            { className: 'language-ts' },
            void 0,
            'auto.hooks.onCreateChangelog.tapPromise(',
            t('span', { className: 'hljs-string' }, void 0, "'Stars'"),
            ', ',
            t(
              'span',
              { className: 'hljs-function' },
              void 0,
              t('span', { className: 'hljs-params' }, void 0, 'changelog'),
              ' =>'
            ),
            t('br', {}),
            '  changelog.hooks.renderChangelogAuthorLine.tap(',
            t('br', {}),
            '    ',
            t('span', { className: 'hljs-string' }, void 0, "'test'"),
            ',',
            t('br', {}),
            '    ',
            t(
              'span',
              { className: 'hljs-function' },
              void 0,
              '(',
              t('span', { className: 'hljs-params' }, void 0, 'author, user'),
              ') =>'
            ),
            ' `:shipit: ${author.name} (${user})\\n`',
            t('br', {}),
            '  );',
            t('br', {}),
            ');',
            t('br', {})
          )
        ),
        ke = t(
          'p',
          {},
          void 0,
          'Control the titles in the ',
          t('code', {}, void 0, 'CHANGELOG.md')
        ),
        ye = t(
          'pre',
          {},
          void 0,
          t(
            'code',
            { className: 'language-ts' },
            void 0,
            t(
              'span',
              { className: 'hljs-comment' },
              void 0,
              '// Render only the date in the title'
            ),
            t('br', {}),
            'auto.hooks.onCreateRelease.tap(',
            t('span', { className: 'hljs-keyword' }, void 0, 'this'),
            '.name, ',
            t(
              'span',
              { className: 'hljs-function' },
              void 0,
              t('span', { className: 'hljs-params' }, void 0, 'release'),
              ' =>'
            ),
            ' {',
            t('br', {}),
            '  release.hooks.createChangelogTitle.tap(',
            t('br', {}),
            '    `${',
            t('span', { className: 'hljs-keyword' }, void 0, 'this'),
            '.name} - lerna independent`,',
            t('br', {}),
            '    ',
            t(
              'span',
              { className: 'hljs-function' },
              void 0,
              t('span', { className: 'hljs-params' }, void 0, '()'),
              ' =>'
            ),
            ' ',
            t('span', { className: 'hljs-string' }, void 0, "''"),
            t('br', {}),
            '  );',
            t('br', {}),
            '});',
            t('br', {})
          )
        ),
        we = t('hr', {}),
        Pe = t(
          'p',
          {},
          void 0,
          'Control what commits effect the additional release notes section.'
        ),
        Ce = t(
          'pre',
          {},
          void 0,
          t(
            'code',
            { className: 'language-ts' },
            void 0,
            'auto.hooks.onCreateChangelog.tap(',
            t('span', { className: 'hljs-keyword' }, void 0, 'this'),
            '.name, ',
            t(
              'span',
              { className: 'hljs-function' },
              void 0,
              t('span', { className: 'hljs-params' }, void 0, 'changelog'),
              ' =>'
            ),
            ' {',
            t('br', {}),
            '  changelog.hooks.omitReleaseNotes.tap(',
            t('span', { className: 'hljs-keyword' }, void 0, 'this'),
            '.name, ',
            t(
              'span',
              { className: 'hljs-function' },
              void 0,
              t('span', { className: 'hljs-params' }, void 0, 'commit'),
              ' =>'
            ),
            t('br', {}),
            '    commit.subject.includes(',
            t('span', { className: 'hljs-string' }, void 0, "'WIP'"),
            ')',
            t('br', {}),
            '  );',
            t('br', {}),
            '});',
            t('br', {})
          )
        ),
        Le = t('hr', {}),
        Te = t(
          'p',
          {},
          void 0,
          'Parse information about a commit from a commit. Here is where ',
          t('code', {}, void 0, 'auto'),
          ' gets the PR number from the merge commits.'
        ),
        xe = t(
          'pre',
          {},
          void 0,
          t(
            'code',
            { className: 'language-ts' },
            void 0,
            'auto.hooks.onCreateLogParse.tapPromise(',
            t('span', { className: 'hljs-string' }, void 0, "'Stars'"),
            ', ',
            t(
              'span',
              { className: 'hljs-function' },
              void 0,
              t('span', { className: 'hljs-params' }, void 0, 'logParse'),
              ' =>'
            ),
            t('br', {}),
            '  logParse.hooks.parseCommit.tap(',
            t('br', {}),
            '    ',
            t('span', { className: 'hljs-string' }, void 0, "'test'"),
            ',',
            t('br', {}),
            '    ',
            t(
              'span',
              { className: 'hljs-function' },
              void 0,
              '(',
              t('span', { className: 'hljs-params' }, void 0, 'commit'),
              ') =>'
            ),
            ' {',
            t('br', {}),
            '      ',
            t('span', { className: 'hljs-keyword' }, void 0, 'const'),
            ' bump = getBump(commit.subject, logParse.options.versionLabels);',
            t('br', {}),
            '      commit.labels = [bump]',
            t('br', {}),
            '      ',
            t('span', { className: 'hljs-keyword' }, void 0, 'return'),
            ' commit;',
            t('br', {}),
            '    }',
            t('br', {}),
            '  );',
            t('br', {}),
            ');',
            t('br', {})
          )
        ),
        Re = t(
          'p',
          {},
          void 0,
          "Choose to omit certain commits. If you return true the commit will be omitted. Be sure to return nothing if you don't want the commit omitted."
        ),
        Me = t(
          'pre',
          {},
          void 0,
          t(
            'code',
            { className: 'language-ts' },
            void 0,
            'auto.hooks.onCreateLogParse.tapPromise(',
            t('span', { className: 'hljs-string' }, void 0, "'Stars'"),
            ', ',
            t(
              'span',
              { className: 'hljs-function' },
              void 0,
              t('span', { className: 'hljs-params' }, void 0, 'changelog'),
              ' =>'
            ),
            t('br', {}),
            '  changelog.hooks.omitCommit.tap(',
            t('br', {}),
            '    ',
            t('span', { className: 'hljs-string' }, void 0, "'test'"),
            ',',
            t('br', {}),
            '    ',
            t(
              'span',
              { className: 'hljs-function' },
              void 0,
              '(',
              t('span', { className: 'hljs-params' }, void 0, 'commit'),
              ') =>'
            ),
            ' {',
            t('br', {}),
            '      ',
            t('span', { className: 'hljs-keyword' }, void 0, 'if'),
            ' (someTest(commit.subject)) {',
            t('br', {}),
            '        ',
            t('span', { className: 'hljs-keyword' }, void 0, 'return'),
            ' ',
            t('span', { className: 'hljs-literal' }, void 0, 'true'),
            ';',
            t('br', {}),
            '      }',
            t('br', {}),
            '    }',
            t('br', {}),
            '  );',
            t('br', {}),
            ');',
            t('br', {})
          )
        ),
        Se = t(
          'p',
          {},
          void 0,
          'To create a plugin simply make a class with an ',
          t('code', {}, void 0, 'apply'),
          ' method and tap into the hooks you need.'
        ),
        Oe = t(
          'pre',
          {},
          void 0,
          t(
            'code',
            { className: 'language-ts' },
            void 0,
            t('span', { className: 'hljs-keyword' }, void 0, 'import'),
            ' * ',
            t('span', { className: 'hljs-keyword' }, void 0, 'as'),
            ' fs ',
            t('span', { className: 'hljs-keyword' }, void 0, 'from'),
            ' ',
            t('span', { className: 'hljs-string' }, void 0, "'fs'"),
            ';',
            t('br', {}),
            t('span', { className: 'hljs-keyword' }, void 0, 'import'),
            ' { promisify } ',
            t('span', { className: 'hljs-keyword' }, void 0, 'from'),
            ' ',
            t('span', { className: 'hljs-string' }, void 0, "'util'"),
            ';',
            t('br', {}),
            t('br', {}),
            t('span', { className: 'hljs-keyword' }, void 0, 'import'),
            ' { IAutoHooks, Auto, SEMVER, execPromise } ',
            t('span', { className: 'hljs-keyword' }, void 0, 'from'),
            ' ',
            t('span', { className: 'hljs-string' }, void 0, "'auto'"),
            ';',
            t('br', {}),
            t('span', { className: 'hljs-keyword' }, void 0, 'import'),
            ' getConfigFromPackageJson ',
            t('span', { className: 'hljs-keyword' }, void 0, 'from'),
            ' ',
            t(
              'span',
              { className: 'hljs-string' },
              void 0,
              "'./package-config'"
            ),
            ';',
            t('br', {}),
            t('br', {}),
            t('span', { className: 'hljs-keyword' }, void 0, 'const'),
            ' readFile = promisify(fs.readFile);',
            t('br', {}),
            t('br', {}),
            t('span', { className: 'hljs-keyword' }, void 0, 'export'),
            ' ',
            t('span', { className: 'hljs-keyword' }, void 0, 'default'),
            ' ',
            t('span', { className: 'hljs-keyword' }, void 0, 'class'),
            ' NPMPlugin {',
            t('br', {}),
            '  ',
            t('span', { className: 'hljs-keyword' }, void 0, 'public'),
            ' apply(auto: Auto) {',
            t('br', {}),
            '    auto.hooks.getAuthor.tapPromise(',
            t('span', { className: 'hljs-string' }, void 0, "'NPM'"),
            ', ',
            t('span', { className: 'hljs-keyword' }, void 0, 'async'),
            ' () => {',
            t('br', {}),
            '      ',
            t('span', { className: 'hljs-keyword' }, void 0, 'const'),
            ' { author } = ',
            t('span', { className: 'hljs-built_in' }, void 0, 'JSON'),
            '.parse(',
            t('span', { className: 'hljs-keyword' }, void 0, 'await'),
            ' readFile(',
            t('span', { className: 'hljs-string' }, void 0, "'package.json'"),
            ', ',
            t('span', { className: 'hljs-string' }, void 0, "'utf-8'"),
            '));',
            t('br', {}),
            t('br', {}),
            '      ',
            t('span', { className: 'hljs-keyword' }, void 0, 'if'),
            ' (author) {',
            t('br', {}),
            '        auto.logger.log.info(',
            t(
              'span',
              { className: 'hljs-string' },
              void 0,
              "'NPM: Got author information from package.json'"
            ),
            ');',
            t('br', {}),
            '        ',
            t('span', { className: 'hljs-keyword' }, void 0, 'return'),
            ' author;',
            t('br', {}),
            '      }',
            t('br', {}),
            '    });',
            t('br', {}),
            t('br', {}),
            '    auto.hooks.getPreviousVersion.tapPromise(',
            t('span', { className: 'hljs-string' }, void 0, "'NPM'"),
            ', ',
            t('span', { className: 'hljs-keyword' }, void 0, 'async'),
            ' () => {',
            t('br', {}),
            '      ',
            t('span', { className: 'hljs-keyword' }, void 0, 'const'),
            ' { version } = ',
            t('span', { className: 'hljs-built_in' }, void 0, 'JSON'),
            '.parse(',
            t('span', { className: 'hljs-keyword' }, void 0, 'await'),
            ' readFile(',
            t('span', { className: 'hljs-string' }, void 0, "'package.json'"),
            ', ',
            t('span', { className: 'hljs-string' }, void 0, "'utf-8'"),
            '));',
            t('br', {}),
            t('br', {}),
            '      auto.logger.log.info(',
            t('br', {}),
            '        ',
            t(
              'span',
              { className: 'hljs-string' },
              void 0,
              "'NPM: Got previous version from package.json - '"
            ),
            ',',
            t('br', {}),
            '        version',
            t('br', {}),
            '      );',
            t('br', {}),
            t('br', {}),
            '      ',
            t('span', { className: 'hljs-keyword' }, void 0, 'if'),
            ' (version) {',
            t('br', {}),
            '        ',
            t('span', { className: 'hljs-keyword' }, void 0, 'return'),
            ' auto.prefixRelease(',
            t('br', {}),
            '          ',
            t('span', { className: 'hljs-built_in' }, void 0, 'JSON'),
            '.parse(',
            t('span', { className: 'hljs-keyword' }, void 0, 'await'),
            ' readFile(',
            t('span', { className: 'hljs-string' }, void 0, "'package.json'"),
            ', ',
            t('span', { className: 'hljs-string' }, void 0, "'utf-8'"),
            ')).version',
            t('br', {}),
            '        );',
            t('br', {}),
            '      }',
            t('br', {}),
            '    });',
            t('br', {}),
            t('br', {}),
            '    auto.hooks.getRepository.tapPromise(',
            t('span', { className: 'hljs-string' }, void 0, "'NPM'"),
            ', ',
            t('span', { className: 'hljs-keyword' }, void 0, 'async'),
            ' () => {',
            t('br', {}),
            '      auto.logger.log.info(',
            t(
              'span',
              { className: 'hljs-string' },
              void 0,
              "'NPM: getting repo information from package.json'"
            ),
            ');',
            t('br', {}),
            '      ',
            t('span', { className: 'hljs-keyword' }, void 0, 'return'),
            ' getConfigFromPackageJson();',
            t('br', {}),
            '    });',
            t('br', {}),
            t('br', {}),
            '    auto.hooks.publish.tapPromise(',
            t('span', { className: 'hljs-string' }, void 0, "'NPM'"),
            ', ',
            t('span', { className: 'hljs-keyword' }, void 0, 'async'),
            ' (version: SEMVER) => {',
            t('br', {}),
            '      ',
            t('span', { className: 'hljs-keyword' }, void 0, 'await'),
            ' execPromise(',
            t('span', { className: 'hljs-string' }, void 0, "'npm'"),
            ', [',
            t('br', {}),
            '        ',
            t('span', { className: 'hljs-string' }, void 0, "'version'"),
            ',',
            t('br', {}),
            '        version,',
            t('br', {}),
            '        ',
            t('span', { className: 'hljs-string' }, void 0, "'-m'"),
            ',',
            t('br', {}),
            '        ',
            t(
              'span',
              { className: 'hljs-string' },
              void 0,
              "'Bump version to: %s [skip ci]'"
            ),
            t('br', {}),
            '      ]);',
            t('br', {}),
            '      ',
            t('span', { className: 'hljs-keyword' }, void 0, 'await'),
            ' execPromise(',
            t('span', { className: 'hljs-string' }, void 0, "'npm'"),
            ', [',
            t('span', { className: 'hljs-string' }, void 0, "'publish'"),
            ']);',
            t('br', {}),
            '      ',
            t('span', { className: 'hljs-keyword' }, void 0, 'await'),
            ' execPromise(',
            t('span', { className: 'hljs-string' }, void 0, "'git'"),
            ', [',
            t('br', {}),
            '        ',
            t('span', { className: 'hljs-string' }, void 0, "'push'"),
            ',',
            t('br', {}),
            '        ',
            t('span', { className: 'hljs-string' }, void 0, "'--follow-tags'"),
            ',',
            t('br', {}),
            '        ',
            t('span', { className: 'hljs-string' }, void 0, "'--set-upstream'"),
            ',',
            t('br', {}),
            '        ',
            t('span', { className: 'hljs-string' }, void 0, "'origin'"),
            ',',
            t('br', {}),
            '        ',
            t('span', { className: 'hljs-string' }, void 0, "'$branch'"),
            t('br', {}),
            '      ]);',
            t('br', {}),
            '    });',
            t('br', {}),
            '  }',
            t('br', {}),
            '}',
            t('br', {})
          )
        );
      var Ee = e =>
        t(
          'div',
          { className: e.className },
          void 0,
          t(
            'section',
            {},
            void 0,
            p,
            g,
            v,
            u,
            b,
            N,
            f,
            t(
              'h2',
              { id: 'constructor' },
              void 0,
              'Constructor ',
              t(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#constructor',
                'aria-hidden': 'true'
              })
            ),
            j,
            k,
            t(
              'h2',
              { id: 'hooks' },
              void 0,
              'Hooks ',
              t(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#hooks',
                'aria-hidden': 'true'
              })
            ),
            y,
            w,
            t(
              'h3',
              { id: 'main-hooks' },
              void 0,
              'Main Hooks ',
              t(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#main-hooks',
                'aria-hidden': 'true'
              })
            ),
            t(
              'h4',
              { id: 'beforerun' },
              void 0,
              'beforeRun ',
              t(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#beforerun',
                'aria-hidden': 'true'
              })
            ),
            P,
            C,
            t(
              'h4',
              { id: 'modifyconfig' },
              void 0,
              'modifyConfig ',
              t(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#modifyconfig',
                'aria-hidden': 'true'
              })
            ),
            L,
            T,
            t(
              'h4',
              { id: 'beforeshipit' },
              void 0,
              'beforeShipIt ',
              t(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#beforeshipit',
                'aria-hidden': 'true'
              })
            ),
            x,
            R,
            t(
              'h4',
              { id: 'beforecommitchangelog' },
              void 0,
              'beforeCommitChangelog ',
              t(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#beforecommitchangelog',
                'aria-hidden': 'true'
              })
            ),
            M,
            S,
            O,
            t(
              'h4',
              { id: 'afteraddtochangelog' },
              void 0,
              'afterAddToChangelog ',
              t(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#afteraddtochangelog',
                'aria-hidden': 'true'
              })
            ),
            E,
            V,
            _,
            t(
              'h4',
              { id: 'afterrelease' },
              void 0,
              'afterRelease ',
              t(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#afterrelease',
                'aria-hidden': 'true'
              })
            ),
            A,
            I,
            G,
            t(
              'h4',
              { id: 'aftershipit' },
              void 0,
              'afterShipIt ',
              t(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#aftershipit',
                'aria-hidden': 'true'
              })
            ),
            $,
            H,
            F,
            t(
              'h4',
              { id: 'getauthor' },
              void 0,
              'getAuthor ',
              t(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#getauthor',
                'aria-hidden': 'true'
              })
            ),
            J,
            B,
            t(
              'h4',
              { id: 'getpreviousversion' },
              void 0,
              'getPreviousVersion ',
              t(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#getpreviousversion',
                'aria-hidden': 'true'
              })
            ),
            D,
            Y,
            t(
              'h4',
              { id: 'getrepository' },
              void 0,
              'getRepository ',
              t(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#getrepository',
                'aria-hidden': 'true'
              })
            ),
            U,
            q,
            t(
              'h4',
              { id: 'oncreaterelease' },
              void 0,
              'onCreateRelease ',
              t(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#oncreaterelease',
                'aria-hidden': 'true'
              })
            ),
            K,
            W,
            t(
              'ul',
              {},
              void 0,
              t(
                'li',
                {},
                void 0,
                'onCreateLogParse (detailed ',
                t(c, { currentPage: e.currentPage, to: '' }, void 0, 'below'),
                ')'
              ),
              t(
                'li',
                {},
                void 0,
                'onCreateChangelog (detailed ',
                t(c, { currentPage: e.currentPage, to: '' }, void 0, 'below'),
                ')'
              )
            ),
            Q,
            t(
              'h4',
              { id: 'oncreatechangelog' },
              void 0,
              'onCreateChangelog ',
              t(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#oncreatechangelog',
                'aria-hidden': 'true'
              })
            ),
            t(
              'p',
              {},
              void 0,
              "This is where you hook into the changelog's hooks. See usage ",
              t(
                c,
                { currentPage: e.currentPage, to: '#changelog-hooks' },
                void 0,
                'below'
              ),
              '. This hook is exposed for convenience on during ',
              z,
              ' and at the root ',
              X
            ),
            t(
              'h4',
              { id: 'oncreatelogparse' },
              void 0,
              'onCreateLogParse ',
              t(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#oncreatelogparse',
                'aria-hidden': 'true'
              })
            ),
            t(
              'p',
              {},
              void 0,
              "This is where you hook into the LogParse's hooks. See usage ",
              t(
                c,
                { currentPage: e.currentPage, to: '#logparse-hooks' },
                void 0,
                'below'
              ),
              '. This hook is exposed for convenience on during ',
              Z,
              ' and at the root ',
              ee
            ),
            t(
              'h4',
              { id: 'version' },
              void 0,
              'version ',
              t(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#version',
                'aria-hidden': 'true'
              })
            ),
            se,
            ae,
            t(
              'h4',
              { id: 'afterversion' },
              void 0,
              'afterVersion ',
              t(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#afterversion',
                'aria-hidden': 'true'
              })
            ),
            oe,
            t(
              'h4',
              { id: 'publish' },
              void 0,
              'publish ',
              t(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#publish',
                'aria-hidden': 'true'
              })
            ),
            re,
            ie,
            t(
              'h4',
              { id: 'afterpublish' },
              void 0,
              'afterPublish ',
              t(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#afterpublish',
                'aria-hidden': 'true'
              })
            ),
            ne,
            te,
            t(
              'h4',
              { id: 'canary' },
              void 0,
              'canary ',
              t(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#canary',
                'aria-hidden': 'true'
              })
            ),
            le,
            de,
            t(
              'h3',
              { id: 'changelog-hooks' },
              void 0,
              'Changelog Hooks ',
              t(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#changelog-hooks',
                'aria-hidden': 'true'
              })
            ),
            t(
              'h4',
              { id: 'addtobody' },
              void 0,
              'addToBody ',
              t(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#addtobody',
                'aria-hidden': 'true'
              })
            ),
            he,
            t(
              'p',
              {},
              void 0,
              'The following adds a random GIF from ',
              t(
                c,
                {
                  currentPage: e.currentPage,
                  target: '_blank',
                  to: 'https://giphy.com',
                  className: 'external-link'
                },
                void 0,
                'giphy'
              ),
              ' to each new changelog.'
            ),
            ce,
            t(
              'h4',
              { id: 'renderchangelogline' },
              void 0,
              'renderChangelogLine ',
              t(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#renderchangelogline',
                'aria-hidden': 'true'
              })
            ),
            me,
            pe,
            ge,
            t(
              'h4',
              { id: 'renderchangelogtitle' },
              void 0,
              'renderChangelogTitle ',
              t(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#renderchangelogtitle',
                'aria-hidden': 'true'
              })
            ),
            ve,
            ue,
            t(
              'h4',
              { id: 'renderchangelogauthor' },
              void 0,
              'renderChangelogAuthor ',
              t(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#renderchangelogauthor',
                'aria-hidden': 'true'
              })
            ),
            be,
            Ne,
            t(
              'h4',
              { id: 'renderchangelogauthorline' },
              void 0,
              'renderChangelogAuthorLine ',
              t(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#renderchangelogauthorline',
                'aria-hidden': 'true'
              })
            ),
            fe,
            je,
            t(
              'h4',
              { id: 'createchangelogtitle' },
              void 0,
              'createChangelogTitle ',
              t(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#createchangelogtitle',
                'aria-hidden': 'true'
              })
            ),
            ke,
            ye,
            we,
            t(
              'h4',
              { id: 'omitreleasenotes' },
              void 0,
              'omitReleaseNotes ',
              t(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#omitreleasenotes',
                'aria-hidden': 'true'
              })
            ),
            Pe,
            Ce,
            Le,
            t(
              'h3',
              { id: 'logparse-hooks' },
              void 0,
              'LogParse Hooks ',
              t(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#logparse-hooks',
                'aria-hidden': 'true'
              })
            ),
            t(
              'h4',
              { id: 'parsecommit' },
              void 0,
              'parseCommit ',
              t(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#parsecommit',
                'aria-hidden': 'true'
              })
            ),
            Te,
            xe,
            t(
              'h4',
              { id: 'omitcommit' },
              void 0,
              'omitCommit ',
              t(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#omitcommit',
                'aria-hidden': 'true'
              })
            ),
            Re,
            Me,
            t(
              'h2',
              { id: 'example-plugin---npm-(simple)' },
              void 0,
              'Example Plugin - NPM (simple) ',
              t(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#example-plugin---npm-(simple)',
                'aria-hidden': 'true'
              })
            ),
            Se,
            Oe
          )
        );
      (s.default = Ee), (e.exports = s.default);
    }
  }
]);
//# sourceMappingURL=writing-plugins.js.map
