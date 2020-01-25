(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    58: function(e, a, s) {
      'use strict';
      Object.defineProperty(a, '__esModule', { value: !0 }),
        (a.default = void 0);
      var o,
        i = r(s(3)),
        t = (function(e) {
          if (e && e.__esModule) return e;
          var a = {};
          if (null != e)
            for (var s in e)
              if (Object.prototype.hasOwnProperty.call(e, s)) {
                var o =
                  Object.defineProperty && Object.getOwnPropertyDescriptor
                    ? Object.getOwnPropertyDescriptor(e, s)
                    : {};
                o.get || o.set ? Object.defineProperty(a, s, o) : (a[s] = e[s]);
              }
          return (a.default = e), a;
        })(s(0));
      r(s(2)), r(s(106));
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function n(e, a, s, i) {
        o ||
          (o =
            ('function' == typeof Symbol &&
              Symbol.for &&
              Symbol.for('react.element')) ||
            60103);
        var t = e && e.defaultProps,
          r = arguments.length - 3;
        if ((a || 0 === r || (a = { children: void 0 }), a && t))
          for (var n in t) void 0 === a[n] && (a[n] = t[n]);
        else a || (a = t || {});
        if (1 === r) a.children = i;
        else if (r > 1) {
          for (var l = new Array(r), d = 0; d < r; d++) l[d] = arguments[d + 3];
          a.children = l;
        }
        return {
          $$typeof: o,
          type: e,
          key: void 0 === s ? null : '' + s,
          ref: null,
          props: a,
          _owner: null
        };
      }
      function l(e, a, s) {
        return (
          a in e
            ? Object.defineProperty(e, a, {
                value: s,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[a] = s),
          e
        );
      }
      function d() {
        return (d =
          Object.assign ||
          function(e) {
            for (var a = 1; a < arguments.length; a++) {
              var s = arguments[a];
              for (var o in s)
                Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o]);
            }
            return e;
          }).apply(this, arguments);
      }
      function c(e, a) {
        if (null == e) return {};
        var s,
          o,
          i = (function(e, a) {
            if (null == e) return {};
            var s,
              o,
              i = {},
              t = Object.keys(e);
            for (o = 0; o < t.length; o++)
              (s = t[o]), a.indexOf(s) >= 0 || (i[s] = e[s]);
            return i;
          })(e, a);
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(e);
          for (o = 0; o < t.length; o++)
            (s = t[o]),
              a.indexOf(s) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, s) &&
                  (i[s] = e[s]));
        }
        return i;
      }
      const h = e => {
        let { to: a } = e,
          s = c(e, ['to']);
        return a.includes('http')
          ? t.default.createElement('a', d({}, e, { href: a }))
          : ('#' === a[0] &&
              (a = i.default.join('/auto/', 'pages/autorc.html') + a),
            t.default.createElement(
              'a',
              d({}, s, {
                href: a,
                onClick: s => {
                  if ((s.preventDefault(), '#' === e.to)) return !1;
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
                  const t = new CustomEvent('changeLocation', { detail: o });
                  return dispatchEvent(t), !1;
                }
              })
            ));
      };
      h.defaultProps = { href: '', onClick: () => {} };
      class p extends t.Component {
        constructor(...e) {
          super(...e), l(this, 'state', { open: this.props.open });
        }
        render() {
          return n(
            'details',
            { open: this.state.open },
            void 0,
            this.props.children
          );
        }
      }
      const v = e => {
        var a, s;
        return (
          (s = a = class extends t.default.Component {
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
                ? t.default.createElement(
                    e,
                    this.props,
                    this.props.children || null
                  )
                : null;
            }
          }),
          l(a, 'defaultProps', { shouldLoad: !0 }),
          s
        );
      };
      v(() => s.e(31).then(s.bind(null, 107))),
        v(() => s.e(31).then(s.bind(null, 108)));
      var g = n('h1', {}, void 0, n('code', {}, void 0, 'auto'), ' RC File'),
        u = n(
          'p',
          {},
          void 0,
          'All options for the CLI tools can also be configured via the ',
          n('code', {}, void 0, '.autorc'),
          '. As CLI options you supply them in snake-case (',
          n('code', {}, void 0, '--foo-bar'),
          '), but as ',
          n('code', {}, void 0, '.autorc'),
          ' options you supply them in camelCase (',
          n('code', {}, void 0, 'fooBar'),
          '),'
        ),
        m = n('code', {}, void 0, 'cosmiconfig'),
        b = n(
          'ul',
          {},
          void 0,
          n('li', {}, void 0, 'a JSON or YAML, extension-less "rc file"'),
          n(
            'li',
            {},
            void 0,
            'an "rc file" with the extensions ',
            n('code', {}, void 0, '.json'),
            ', ',
            n('code', {}, void 0, '.yaml'),
            ', or ',
            n('code', {}, void 0, '.yml')
          ),
          n('li', {}, void 0, 'a package.json property')
        ),
        f = n(
          'p',
          {},
          void 0,
          'We do not support writing configuration files in JavaScript.'
        ),
        j = n(
          'p',
          {},
          void 0,
          'To interactively create an ',
          n('code', {}, void 0, '.autorc'),
          ' use the ',
          n('code', {}, void 0, 'init'),
          ' command. You can configure most flags and all labels/changelogTitles.'
        ),
        N = n(
          'pre',
          {},
          void 0,
          n(
            'code',
            { className: 'language-sh' },
            void 0,
            'auto init',
            n('br', {})
          )
        ),
        y = n(
          'p',
          {},
          void 0,
          'These options can be set exclusively in the ',
          n('code', {}, void 0, '.autorc'),
          ' and do not exist as CLI flags.'
        ),
        P = n('p', {}, void 0, 'Create and manage old major releases.'),
        w = n(
          'pre',
          {},
          void 0,
          n(
            'code',
            { className: 'language-json' },
            void 0,
            '{',
            n('br', {}),
            '  "versionBranches": true,',
            n('br', {}),
            '  // or customize the branch prefix',
            n('br', {}),
            '  "versionBranches": "major-"',
            n('br', {}),
            '}',
            n('br', {})
          )
        ),
        T = n(
          'p',
          {},
          void 0,
          'You can configure what branches ',
          n('code', {}, void 0, 'auto'),
          ' treats as prerelease branches. By default only ',
          n('code', {}, void 0, 'next'),
          ' is treated as a prerelease branch. If you configure ',
          n('code', {}, void 0, 'prereleaseBranches'),
          ' it will override the default.'
        ),
        k = n(
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
            n(
              'span',
              { className: 'hljs-attr' },
              void 0,
              '"prereleaseBranches"'
            ),
            ': [',
            n('span', { className: 'hljs-string' }, void 0, '"next"'),
            ', ',
            n('span', { className: 'hljs-string' }, void 0, '"beta"'),
            ']',
            n('br', {}),
            '}',
            n('br', {})
          )
        ),
        L = n(
          'p',
          {},
          void 0,
          'If you want to share your auto configuration between projects you can use the ',
          n('code', {}, void 0, 'extends'),
          " property. This property will load from a module's package.json or from a custom path. It's expected that the extended configuration be under the ",
          n('code', {}, void 0, 'auto'),
          ' key in the package.json file.'
        ),
        C = n(
          'p',
          {},
          void 0,
          'Auto can load ',
          n('code', {}, void 0, 'extends'),
          ' configs in the following ways:'
        ),
        O = n(
          'ul',
          {},
          void 0,
          n(
            'li',
            {},
            void 0,
            'from a path ',
            n('code', {}, void 0, './path/to/config'),
            ' (this file must be in JSON format)'
          ),
          n(
            'li',
            {},
            void 0,
            'from a scoped package ',
            n('code', {}, void 0, '@YOUR_SCOPE/auto-config'),
            ' (under the ',
            n('code', {}, void 0, 'auto'),
            ' key in the package.json)'
          ),
          n(
            'li',
            {},
            void 0,
            'from a package ',
            n('code', {}, void 0, 'auto-config-YOUR_NAME')
          ),
          n(
            'li',
            {},
            void 0,
            'from a url ',
            n('code', {}, void 0, 'https://yourdomain.com/auto-config.json'),
            ' (must return the content type ',
            n('code', {}, void 0, 'application/json'),
            ')'
          )
        ),
        x = n(
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
            n('span', { className: 'hljs-attr' }, void 0, '"extends"'),
            ': ',
            n('span', { className: 'hljs-string' }, void 0, '"@YOUR_SCOPE"'),
            n('br', {}),
            '}',
            n('br', {})
          )
        ),
        I = n(
          'p',
          {},
          void 0,
          'Will use the package ',
          n('code', {}, void 0, '@YOUR_SCOPE/auto-config')
        ),
        A = n(
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
            n('span', { className: 'hljs-attr' }, void 0, '"extends"'),
            ': ',
            n('span', { className: 'hljs-string' }, void 0, '"joe"'),
            n('br', {}),
            '}',
            n('br', {})
          )
        ),
        R = n(
          'p',
          {},
          void 0,
          'Will use the package ',
          n('code', {}, void 0, 'auto-config-joe')
        ),
        S = n(
          'article',
          { className: 'message column is-warning' },
          void 0,
          n(
            'div',
            { className: 'message-body' },
            void 0,
            n(
              'p',
              {},
              void 0,
              "If extending from a config package make sure it's a dependency of your project"
            )
          )
        ),
        E = n(
          'p',
          {},
          void 0,
          "If you're extending from a local file it can be any file in JSON format or a ",
          n('code', {}, void 0, 'package.json'),
          ' file.'
        ),
        _ = n(
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
            n('span', { className: 'hljs-attr' }, void 0, '"extends"'),
            ': ',
            n(
              'span',
              { className: 'hljs-string' },
              void 0,
              '"./path/to/config.json"'
            ),
            n('br', {}),
            '}',
            n('br', {})
          )
        ),
        B = n(
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
            n('span', { className: 'hljs-attr' }, void 0, '"extends"'),
            ': ',
            n(
              'span',
              { className: 'hljs-string' },
              void 0,
              '"./path/to/other/package.json"'
            ),
            n('br', {}),
            '}',
            n('br', {})
          )
        ),
        U = n(
          'p',
          {},
          void 0,
          "To customize your project's labels use the ",
          n('code', {}, void 0, 'labels'),
          ' section in your ',
          n('code', {}, void 0, '.autorc'),
          '.'
        ),
        z = n(
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
            n('span', { className: 'hljs-attr' }, void 0, '"labels"'),
            ': [',
            n('br', {}),
            '    { ',
            n('span', { className: 'hljs-attr' }, void 0, '"releaseType"'),
            ': ',
            n('span', { className: 'hljs-string' }, void 0, '"major"'),
            ', ',
            n('span', { className: 'hljs-attr' }, void 0, '"name"'),
            ': ',
            n('span', { className: 'hljs-string' }, void 0, '"Version: Major"'),
            ' },',
            n('br', {}),
            '    { ',
            n('span', { className: 'hljs-attr' }, void 0, '"releaseType"'),
            ': ',
            n('span', { className: 'hljs-string' }, void 0, '"minor"'),
            ', ',
            n('span', { className: 'hljs-attr' }, void 0, '"name"'),
            ': ',
            n('span', { className: 'hljs-string' }, void 0, '"Version: Minor"'),
            ' },',
            n('br', {}),
            '    { ',
            n('span', { className: 'hljs-attr' }, void 0, '"releaseType"'),
            ': ',
            n('span', { className: 'hljs-string' }, void 0, '"patch"'),
            ', ',
            n('span', { className: 'hljs-attr' }, void 0, '"name"'),
            ': ',
            n('span', { className: 'hljs-string' }, void 0, '"Version: Patch"'),
            ' },',
            n('br', {}),
            '    { ',
            n('span', { className: 'hljs-attr' }, void 0, '"releaseType"'),
            ': ',
            n('span', { className: 'hljs-string' }, void 0, '"skip"'),
            ', ',
            n('span', { className: 'hljs-attr' }, void 0, '"name"'),
            ': ',
            n('span', { className: 'hljs-string' }, void 0, '"NO!"'),
            ' },',
            n('br', {}),
            '    { ',
            n('span', { className: 'hljs-attr' }, void 0, '"releaseType"'),
            ': ',
            n('span', { className: 'hljs-string' }, void 0, '"release"'),
            ', ',
            n('span', { className: 'hljs-attr' }, void 0, '"name"'),
            ': ',
            n(
              'span',
              { className: 'hljs-string' },
              void 0,
              '"Autobots, rollout!"'
            ),
            ' }',
            n('br', {}),
            '  ]',
            n('br', {}),
            '}',
            n('br', {})
          )
        ),
        M = n(
          p,
          {},
          void 0,
          n(
            'summary',
            {},
            void 0,
            'Click here to see the default label configuration'
          ),
          n(
            'pre',
            {},
            void 0,
            n(
              'code',
              { className: 'language-json' },
              void 0,
              '[',
              n('br', {}),
              '  {',
              n('br', {}),
              '    ',
              n('span', { className: 'hljs-attr' }, void 0, '"name"'),
              ': ',
              n('span', { className: 'hljs-string' }, void 0, '"major"'),
              ',',
              n('br', {}),
              '    ',
              n('span', { className: 'hljs-attr' }, void 0, '"changelogTitle"'),
              ': ',
              n(
                'span',
                { className: 'hljs-string' },
                void 0,
                '"💥  Breaking Change"'
              ),
              ',',
              n('br', {}),
              '    ',
              n('span', { className: 'hljs-attr' }, void 0, '"description"'),
              ': ',
              n(
                'span',
                { className: 'hljs-string' },
                void 0,
                '"Increment the major version when merged"'
              ),
              ',',
              n('br', {}),
              '    ',
              n('span', { className: 'hljs-attr' }, void 0, '"releaseType"'),
              ': ',
              n('span', { className: 'hljs-string' }, void 0, '"major"'),
              n('br', {}),
              '  },',
              n('br', {}),
              '  {',
              n('br', {}),
              '    ',
              n('span', { className: 'hljs-attr' }, void 0, '"name"'),
              ': ',
              n('span', { className: 'hljs-string' }, void 0, '"minor"'),
              ',',
              n('br', {}),
              '    ',
              n('span', { className: 'hljs-attr' }, void 0, '"changelogTitle"'),
              ': ',
              n(
                'span',
                { className: 'hljs-string' },
                void 0,
                '"🚀  Enhancement"'
              ),
              ',',
              n('br', {}),
              '    ',
              n('span', { className: 'hljs-attr' }, void 0, '"description"'),
              ': ',
              n(
                'span',
                { className: 'hljs-string' },
                void 0,
                '"Increment the minor version when merged"'
              ),
              ',',
              n('br', {}),
              '    ',
              n('span', { className: 'hljs-attr' }, void 0, '"releaseType"'),
              ': ',
              n('span', { className: 'hljs-string' }, void 0, '"minor"'),
              n('br', {}),
              '  },',
              n('br', {}),
              '  {',
              n('br', {}),
              '    ',
              n('span', { className: 'hljs-attr' }, void 0, '"name"'),
              ': ',
              n('span', { className: 'hljs-string' }, void 0, '"patch"'),
              ',',
              n('br', {}),
              '    ',
              n('span', { className: 'hljs-attr' }, void 0, '"changelogTitle"'),
              ': ',
              n('span', { className: 'hljs-string' }, void 0, '"🐛  Bug Fix"'),
              ',',
              n('br', {}),
              '    ',
              n('span', { className: 'hljs-attr' }, void 0, '"description"'),
              ': ',
              n(
                'span',
                { className: 'hljs-string' },
                void 0,
                '"Increment the patch version when merged"'
              ),
              ',',
              n('br', {}),
              '    ',
              n('span', { className: 'hljs-attr' }, void 0, '"releaseType"'),
              ': ',
              n('span', { className: 'hljs-string' }, void 0, '"patch"'),
              n('br', {}),
              '  },',
              n('br', {}),
              '  {',
              n('br', {}),
              '    ',
              n('span', { className: 'hljs-attr' }, void 0, '"name"'),
              ': ',
              n('span', { className: 'hljs-string' }, void 0, '"skip-release"'),
              ',',
              n('br', {}),
              '    ',
              n('span', { className: 'hljs-attr' }, void 0, '"description"'),
              ': ',
              n(
                'span',
                { className: 'hljs-string' },
                void 0,
                '"Preserve the current version when merged"'
              ),
              ',',
              n('br', {}),
              '    ',
              n('span', { className: 'hljs-attr' }, void 0, '"releaseType"'),
              ': ',
              n('span', { className: 'hljs-string' }, void 0, '"skip"'),
              n('br', {}),
              '  },',
              n('br', {}),
              '  {',
              n('br', {}),
              '    ',
              n('span', { className: 'hljs-attr' }, void 0, '"name"'),
              ': ',
              n('span', { className: 'hljs-string' }, void 0, '"release"'),
              ',',
              n('br', {}),
              '    ',
              n('span', { className: 'hljs-attr' }, void 0, '"description"'),
              ': ',
              n(
                'span',
                { className: 'hljs-string' },
                void 0,
                '"Create a release when this pr is merged"'
              ),
              ',',
              n('br', {}),
              '    ',
              n('span', { className: 'hljs-attr' }, void 0, '"releaseType"'),
              ': ',
              n('span', { className: 'hljs-string' }, void 0, '"release"'),
              n('br', {}),
              '  },',
              n('br', {}),
              '  {',
              n('br', {}),
              '    ',
              n('span', { className: 'hljs-attr' }, void 0, '"name"'),
              ': ',
              n('span', { className: 'hljs-string' }, void 0, '"internal"'),
              ',',
              n('br', {}),
              '    ',
              n('span', { className: 'hljs-attr' }, void 0, '"changelogTitle"'),
              ': ',
              n('span', { className: 'hljs-string' }, void 0, '"🏠  Internal"'),
              ',',
              n('br', {}),
              '    ',
              n('span', { className: 'hljs-attr' }, void 0, '"description"'),
              ': ',
              n(
                'span',
                { className: 'hljs-string' },
                void 0,
                '"Changes only affect the internal API"'
              ),
              ',',
              n('br', {}),
              '    ',
              n('span', { className: 'hljs-attr' }, void 0, '"releaseType"'),
              ': ',
              n('span', { className: 'hljs-string' }, void 0, '"none"'),
              n('br', {}),
              '  },',
              n('br', {}),
              '  {',
              n('br', {}),
              '    ',
              n('span', { className: 'hljs-attr' }, void 0, '"name"'),
              ': ',
              n(
                'span',
                { className: 'hljs-string' },
                void 0,
                '"documentation"'
              ),
              ',',
              n('br', {}),
              '    ',
              n('span', { className: 'hljs-attr' }, void 0, '"changelogTitle"'),
              ': ',
              n(
                'span',
                { className: 'hljs-string' },
                void 0,
                '"📝  Documentation"'
              ),
              ',',
              n('br', {}),
              '    ',
              n('span', { className: 'hljs-attr' }, void 0, '"description"'),
              ': ',
              n(
                'span',
                { className: 'hljs-string' },
                void 0,
                '"Changes only affect the documentation"'
              ),
              ',',
              n('br', {}),
              '    ',
              n('span', { className: 'hljs-attr' }, void 0, '"releaseType"'),
              ': ',
              n('span', { className: 'hljs-string' }, void 0, '"none"'),
              n('br', {}),
              '  }',
              n('br', {}),
              ']',
              n('br', {})
            )
          )
        ),
        q = n('p', {}, void 0, 'You can customize everything about a label'),
        D = n(
          'li',
          {},
          void 0,
          n('code', {}, void 0, 'name'),
          ' - The label text used for the label. If omitted defaults to the ',
          n('code', {}, void 0, 'key'),
          ' value'
        ),
        Y = n(
          'li',
          {},
          void 0,
          n('code', {}, void 0, 'releaseType'),
          ' - The type of release to trigger (major, minor, patch, skip, release, or none)'
        ),
        G = n(
          'li',
          {},
          void 0,
          n('code', {}, void 0, 'overwrite'),
          ' - Overwrite the default label(s) associated with the ',
          n('code', {}, void 0, 'releaseType'),
          '. (default: ',
          n('code', {}, void 0, 'false'),
          ')'
        ),
        J = n(
          'li',
          {},
          void 0,
          n('code', {}, void 0, 'changelogTitle'),
          ' - The title to use in the changelog'
        ),
        W = n(
          'li',
          {},
          void 0,
          n('code', {}, void 0, 'description'),
          ' - The description to use when creating the label'
        ),
        V = n('code', {}, void 0, 'color'),
        F = n(
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
            n('span', { className: 'hljs-attr' }, void 0, '"labels"'),
            ': [',
            n('br', {}),
            '    {',
            n('br', {}),
            '      ',
            n('span', { className: 'hljs-attr' }, void 0, '"name"'),
            ': ',
            n('span', { className: 'hljs-string' }, void 0, '"Version: Major"'),
            ',',
            n('br', {}),
            '      ',
            n('span', { className: 'hljs-attr' }, void 0, '"changelogTitle"'),
            ': ',
            n(
              'span',
              { className: 'hljs-string' },
              void 0,
              '"The API has changed:"'
            ),
            ',',
            n('br', {}),
            '      ',
            n('span', { className: 'hljs-attr' }, void 0, '"description"'),
            ': ',
            n(
              'span',
              { className: 'hljs-string' },
              void 0,
              '"Add this label to a PR to create a major release"'
            ),
            ',',
            n('br', {}),
            '      ',
            n('span', { className: 'hljs-attr' }, void 0, '"color"'),
            ': ',
            n('span', { className: 'hljs-string' }, void 0, '"blue"'),
            ',',
            n('br', {}),
            '      ',
            n('span', { className: 'hljs-attr' }, void 0, '"releaseType"'),
            ': ',
            n('span', { className: 'hljs-string' }, void 0, '"major"'),
            n('br', {}),
            '    }',
            n('br', {}),
            '  ]',
            n('br', {}),
            '}',
            n('br', {})
          )
        ),
        $ = n('code', {}, void 0, 'none'),
        K = n(
          'p',
          {},
          void 0,
          'A label with the ',
          n('code', {}, void 0, 'none'),
          ' release type will not create a release when merged. If paired with a SEMVER label, the release is not skipped.'
        ),
        H = n(
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
            n('span', { className: 'hljs-attr' }, void 0, '"labels"'),
            ': [',
            n('br', {}),
            '    {',
            n('br', {}),
            '      ',
            n('span', { className: 'hljs-attr' }, void 0, '"name"'),
            ': ',
            n('span', { className: 'hljs-string' }, void 0, '"documentation"'),
            ',',
            n('br', {}),
            '      ',
            n('span', { className: 'hljs-attr' }, void 0, '"releaseType"'),
            ': ',
            n('span', { className: 'hljs-string' }, void 0, '"none"'),
            n('br', {}),
            '    }',
            n('br', {}),
            '  ]',
            n('br', {}),
            '}',
            n('br', {})
          )
        ),
        Q = n(
          'p',
          {},
          void 0,
          'Each PR included in the release will be assigned to a label section based upon the matching label with the highest ',
          n('code', {}, void 0, 'releaseType'),
          ' that has a ',
          n('code', {}, void 0, 'changelogTitle'),
          '.'
        ),
        X = n(
          'ul',
          {},
          void 0,
          n(
            'li',
            {},
            void 0,
            'Priority order of ',
            n('code', {}, void 0, 'releaseType'),
            ' from highest to lowest is: major, minor, patch, and then all others'
          ),
          n(
            'li',
            {},
            void 0,
            'If a PR has multiple labels of the same ',
            n('code', {}, void 0, 'releaseType'),
            ', then the PR is assigned based upon the label that is assigned first in the config'
          )
        ),
        Z = n(
          'p',
          {},
          void 0,
          'By default auto will create sections in the changelog for the following labels:'
        ),
        ee = n(
          'ul',
          {},
          void 0,
          n('li', {}, void 0, 'major'),
          n('li', {}, void 0, 'minor'),
          n('li', {}, void 0, 'patch'),
          n('li', {}, void 0, 'internal'),
          n('li', {}, void 0, 'documentation')
        ),
        ae = n('p', {}, void 0, 'For example:'),
        se = n(
          'ul',
          {},
          void 0,
          n(
            'li',
            {},
            void 0,
            'Using the default config, if a given PR has the labels ',
            n('code', {}, void 0, 'minor'),
            ' and ',
            n('code', {}, void 0, 'internal'),
            ', then it will be included in the ',
            n('code', {}, void 0, 'minor'),
            ' label section'
          ),
          n(
            'li',
            {},
            void 0,
            'Using the default config, if a given PR has the labels ',
            n('code', {}, void 0, 'documentation'),
            ' and ',
            n('code', {}, void 0, 'internal'),
            ', then it will be included in the ',
            n('code', {}, void 0, 'internal'),
            ' label section'
          )
        ),
        oe = n(
          'p',
          {},
          void 0,
          'To customize the title for the section in the changelog you can'
        ),
        ie = n(
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
            n('span', { className: 'hljs-attr' }, void 0, '"labels"'),
            ': [',
            n('br', {}),
            '    {',
            n('br', {}),
            '      ',
            n('span', { className: 'hljs-attr' }, void 0, '"name"'),
            ': ',
            n('span', { className: 'hljs-string' }, void 0, '"documentation"'),
            ',',
            n('br', {}),
            '      ',
            n('span', { className: 'hljs-attr' }, void 0, '"changelogTitle"'),
            ': ',
            n('span', { className: 'hljs-string' }, void 0, '"Docz"'),
            n('br', {}),
            '    }',
            n('br', {}),
            '  ]',
            n('br', {}),
            '}',
            n('br', {})
          )
        ),
        te = n(
          'p',
          {},
          void 0,
          'If you want more sections in your changelog to further detail the change-set you can use the ',
          n('code', {}, void 0, 'labels'),
          ' section to add more. Any label in the label section with a changelogTitle will become a special section in your changelog.'
        ),
        re = n(
          'p',
          {},
          void 0,
          'The following adds a ',
          n('code', {}, void 0, 'typescript'),
          ' label to the project that we can use to denote changes related to a TypeScript re-write.'
        ),
        ne = n(
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
            n('span', { className: 'hljs-attr' }, void 0, '"labels"'),
            ': [',
            n('br', {}),
            '    {',
            n('br', {}),
            '      ',
            n('span', { className: 'hljs-attr' }, void 0, '"name"'),
            ': ',
            n('span', { className: 'hljs-string' }, void 0, '"typescript"'),
            ',',
            n('br', {}),
            '      ',
            n('span', { className: 'hljs-attr' }, void 0, '"changelogTitle"'),
            ': ',
            n(
              'span',
              { className: 'hljs-string' },
              void 0,
              '"TypeScript Rewrite"'
            ),
            n('br', {}),
            '    }',
            n('br', {}),
            '  ]',
            n('br', {}),
            '}',
            n('br', {})
          )
        ),
        le = n(
          'p',
          {},
          void 0,
          'You can remove the existing default label sections by adding a custom overwrite label with the same ',
          n('code', {}, void 0, 'releaseType'),
          '.'
        ),
        de = n(
          'p',
          {},
          void 0,
          'The following removes the default internal and documentation label sections:'
        ),
        ce = n(
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
            n('span', { className: 'hljs-attr' }, void 0, '"labels"'),
            ': [',
            n('br', {}),
            '    {',
            n('br', {}),
            '      ',
            n('span', { className: 'hljs-attr' }, void 0, '"name"'),
            ': ',
            n(
              'span',
              { className: 'hljs-string' },
              void 0,
              '"Custom Doc Label"'
            ),
            ',',
            n('br', {}),
            '      ',
            n('span', { className: 'hljs-attr' }, void 0, '"changelogTitle"'),
            ': ',
            n('span', { className: 'hljs-string' }, void 0, '"Docz"'),
            ',',
            n('br', {}),
            '      ',
            n('span', { className: 'hljs-attr' }, void 0, '"releaseType"'),
            ': ',
            n('span', { className: 'hljs-string' }, void 0, '"none"'),
            ',',
            n('br', {}),
            '      ',
            n('span', { className: 'hljs-attr' }, void 0, '"overwrite"'),
            ': ',
            n('span', { className: 'hljs-literal' }, void 0, 'true'),
            n('br', {}),
            '    }',
            n('br', {}),
            '  ]',
            n('br', {}),
            '}',
            n('br', {})
          )
        ),
        he = n(
          'p',
          {},
          void 0,
          'You can set any CLI option in the ',
          n('code', {}, void 0, '.autorc'),
          ' these options will get overridden by the CLI flags.'
        ),
        pe = n(
          'p',
          {},
          void 0,
          'The following are options that might be more useful to set in the ',
          n('code', {}, void 0, '.autorc'),
          ' rather than with a flag.'
        ),
        ve = n(
          'p',
          {},
          void 0,
          'Configure what your repo considers the "master" branch.'
        ),
        ge = n(
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
            n('span', { className: 'hljs-attr' }, void 0, '"baseBranch"'),
            ': ',
            n('span', { className: 'hljs-string' }, void 0, '"trunk"'),
            n('br', {}),
            '}',
            n('br', {})
          )
        ),
        ue = n('p', {}, void 0, 'Configure the default release behavior.'),
        me = n(
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
            n(
              'span',
              { className: 'hljs-attr' },
              void 0,
              '"onlyPublishWithReleaseLabel"'
            ),
            ': ',
            n('span', { className: 'hljs-literal' }, void 0, 'true'),
            n('br', {}),
            '}',
            n('br', {})
          )
        ),
        be = n(
          'p',
          {},
          void 0,
          'It is useful to specify your plugins in the rc file rather than in all the commands.'
        ),
        fe = n(
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
            n('span', { className: 'hljs-attr' }, void 0, '"plugins"'),
            ': [',
            n('span', { className: 'hljs-string' }, void 0, '"npm"'),
            ', ',
            n(
              'span',
              { className: 'hljs-string' },
              void 0,
              '"../path/to/plugin.js"'
            ),
            ', ',
            n(
              'span',
              { className: 'hljs-string' },
              void 0,
              '"NPM_PACKAGE_NAME"'
            ),
            ']',
            n('br', {}),
            '}',
            n('br', {})
          )
        ),
        je = n(
          'p',
          {},
          void 0,
          'If you are using enterprise github, ',
          n('code', {}, void 0, 'auto'),
          ' lets you configure the github API URL that it uses.'
        ),
        Ne = n(
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
            n('span', { className: 'hljs-attr' }, void 0, '"githubApi"'),
            ': ',
            n(
              'span',
              { className: 'hljs-string' },
              void 0,
              '"https://github.mine.com/api/v3"'
            ),
            n('br', {}),
            '}',
            n('br', {})
          )
        ),
        ye = n(
          'p',
          {},
          void 0,
          'This is used for doing some searches in ',
          n('code', {}, void 0, 'auto'),
          '.'
        ),
        Pe = n(
          'p',
          {},
          void 0,
          'If you are using enterprise github and your company hosts the graphql at some other URL than the ',
          n('code', {}, void 0, 'githubApi'),
          ', you can use ',
          n('code', {}, void 0, 'githubGraphqlApi'),
          ' to set the base path for ',
          n('code', {}, void 0, 'auto'),
          '. The ',
          n('code', {}, void 0, 'githubGraphqlApi'),
          ' get merged with ',
          n('code', {}, void 0, '/graphql'),
          ' to build the final URL.'
        ),
        we = n(
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
            n('span', { className: 'hljs-attr' }, void 0, '"githubGraphqlApi"'),
            ': ',
            n(
              'span',
              { className: 'hljs-string' },
              void 0,
              '"https://github.mine.com/api/"'
            ),
            n('br', {}),
            '}',
            n('br', {})
          )
        ),
        Te = n(
          'p',
          {},
          void 0,
          'Git name to commit and release with. Used in ',
          n('code', {}, void 0, 'auto changelog'),
          ' and ',
          n('code', {}, void 0, 'auto release')
        ),
        ke = n(
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
            n('span', { className: 'hljs-attr' }, void 0, '"name"'),
            ': ',
            n('span', { className: 'hljs-string' }, void 0, '"Joe Schmo"'),
            n('br', {}),
            '}',
            n('br', {})
          )
        ),
        Le = n(
          'p',
          {},
          void 0,
          'Git email to commit and release with. Used in ',
          n('code', {}, void 0, 'auto changelog'),
          ' and ',
          n('code', {}, void 0, 'auto release')
        ),
        Ce = n(
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
            n('span', { className: 'hljs-attr' }, void 0, '"email"'),
            ': ',
            n('span', { className: 'hljs-string' }, void 0, '"joe@schmo.com"'),
            n('br', {}),
            '}',
            n('br', {})
          )
        );
      var Oe = e =>
        n(
          'div',
          { className: e.className },
          void 0,
          n(
            'section',
            {},
            void 0,
            g,
            u,
            n(
              'p',
              {},
              void 0,
              'We use ',
              n(
                h,
                {
                  currentPage: e.currentPage,
                  target: '_blank',
                  to: 'https://github.com/davidtheclark/cosmiconfig',
                  className: 'external-link'
                },
                void 0,
                'cosmiconfig'
              ),
              ' to find your config. This means you can define this file a variety of ways. Our ',
              m,
              ' setup is a little custom and will start at the root of your project and start to search up the directory tree for the following:'
            ),
            b,
            f,
            n(
              'h2',
              { id: 'initialization' },
              void 0,
              'Initialization ',
              n(h, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#initialization',
                'aria-hidden': 'true'
              })
            ),
            j,
            N,
            n(
              'h2',
              { id: 'exclusive' },
              void 0,
              'Exclusive ',
              n(h, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#exclusive',
                'aria-hidden': 'true'
              })
            ),
            y,
            n(
              'h3',
              { id: 'versionbranches' },
              void 0,
              'versionBranches ',
              n(h, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#versionbranches',
                'aria-hidden': 'true'
              })
            ),
            P,
            w,
            n(
              'h3',
              { id: 'prerelease-branches' },
              void 0,
              'Prerelease Branches ',
              n(h, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#prerelease-branches',
                'aria-hidden': 'true'
              })
            ),
            T,
            k,
            n(
              'h3',
              { id: 'extending' },
              void 0,
              'Extending ',
              n(h, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#extending',
                'aria-hidden': 'true'
              })
            ),
            L,
            C,
            O,
            x,
            I,
            A,
            R,
            S,
            E,
            _,
            B,
            n(
              'h3',
              { id: 'labels' },
              void 0,
              'Labels ',
              n(h, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#labels',
                'aria-hidden': 'true'
              })
            ),
            U,
            z,
            M,
            n(
              'h4',
              { id: 'label-customization' },
              void 0,
              'Label Customization ',
              n(h, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#label-customization',
                'aria-hidden': 'true'
              })
            ),
            q,
            n(
              'ul',
              {},
              void 0,
              D,
              Y,
              G,
              J,
              W,
              n(
                'li',
                {},
                void 0,
                V,
                ' - The color of the label. Can be specified as a string in any of ',
                n(
                  h,
                  {
                    currentPage: e.currentPage,
                    target: '_blank',
                    to:
                      'https://github.com/bgrins/TinyColor#accepted-string-input',
                    className: 'external-link'
                  },
                  void 0,
                  'these'
                ),
                ' ways. If not specified the color is random'
              )
            ),
            F,
            n(
              'h4',
              { id: 'release-type%3A-none' },
              void 0,
              'Release Type: ',
              $,
              ' ',
              n(h, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#release-type%3A-none',
                'aria-hidden': 'true'
              })
            ),
            K,
            H,
            n(
              'h4',
              { id: 'changelog-titles' },
              void 0,
              'Changelog Titles ',
              n(h, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#changelog-titles',
                'aria-hidden': 'true'
              })
            ),
            Q,
            X,
            Z,
            ee,
            ae,
            se,
            n(
              'h5',
              { id: 'updating-default-label-changelog-titles' },
              void 0,
              'Updating Default Label Changelog Titles ',
              n(h, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#updating-default-label-changelog-titles',
                'aria-hidden': 'true'
              })
            ),
            oe,
            ie,
            n(
              'h5',
              { id: 'adding-additional-changelog-title-sections' },
              void 0,
              'Adding Additional Changelog Title Sections ',
              n(h, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#adding-additional-changelog-title-sections',
                'aria-hidden': 'true'
              })
            ),
            te,
            re,
            ne,
            n(
              'h5',
              { id: 'removing-default-label-changelog-title-sections' },
              void 0,
              'Removing Default Label Changelog Title Sections ',
              n(h, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#removing-default-label-changelog-title-sections',
                'aria-hidden': 'true'
              })
            ),
            le,
            de,
            ce,
            n(
              'h2',
              { id: 'cli-args' },
              void 0,
              'CLI args ',
              n(h, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#cli-args',
                'aria-hidden': 'true'
              })
            ),
            he,
            pe,
            n(
              'h3',
              { id: 'base-branch' },
              void 0,
              'Base Branch ',
              n(h, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#base-branch',
                'aria-hidden': 'true'
              })
            ),
            ve,
            ge,
            n(
              'h3',
              { id: 'only-publish-with-release-label' },
              void 0,
              'Only Publish With Release Label ',
              n(h, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#only-publish-with-release-label',
                'aria-hidden': 'true'
              })
            ),
            ue,
            me,
            n(
              'h3',
              { id: 'plugins' },
              void 0,
              'Plugins ',
              n(h, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#plugins',
                'aria-hidden': 'true'
              })
            ),
            be,
            fe,
            n(
              'h3',
              { id: 'githubapi' },
              void 0,
              'githubApi ',
              n(h, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#githubapi',
                'aria-hidden': 'true'
              })
            ),
            je,
            Ne,
            n(
              'h3',
              { id: 'githubgraphqlapi' },
              void 0,
              'githubGraphqlApi ',
              n(h, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#githubgraphqlapi',
                'aria-hidden': 'true'
              })
            ),
            ye,
            Pe,
            we,
            n(
              'h3',
              { id: 'name' },
              void 0,
              'name ',
              n(h, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#name',
                'aria-hidden': 'true'
              })
            ),
            Te,
            ke,
            n(
              'h3',
              { id: 'email' },
              void 0,
              'email ',
              n(h, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#email',
                'aria-hidden': 'true'
              })
            ),
            Le,
            Ce
          )
        );
      (a.default = Oe), (e.exports = a.default);
    }
  }
]);
//# sourceMappingURL=autorc.js.map
