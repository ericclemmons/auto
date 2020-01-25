(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    100: function(e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var r,
        o = s(a(3)),
        n = (function(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var a in e)
              if (Object.prototype.hasOwnProperty.call(e, a)) {
                var r =
                  Object.defineProperty && Object.getOwnPropertyDescriptor
                    ? Object.getOwnPropertyDescriptor(e, a)
                    : {};
                r.get || r.set ? Object.defineProperty(t, a, r) : (t[a] = e[a]);
              }
          return (t.default = e), t;
        })(a(0));
      s(a(2)), s(a(106));
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i(e, t, a, o) {
        r ||
          (r =
            ('function' == typeof Symbol &&
              Symbol.for &&
              Symbol.for('react.element')) ||
            60103);
        var n = e && e.defaultProps,
          s = arguments.length - 3;
        if ((t || 0 === s || (t = { children: void 0 }), t && n))
          for (var i in n) void 0 === t[i] && (t[i] = n[i]);
        else t || (t = n || {});
        if (1 === s) t.children = o;
        else if (s > 1) {
          for (var l = new Array(s), d = 0; d < s; d++) l[d] = arguments[d + 3];
          t.children = l;
        }
        return {
          $$typeof: r,
          type: e,
          key: void 0 === a ? null : '' + a,
          ref: null,
          props: t,
          _owner: null
        };
      }
      function l(e, t, a) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = a),
          e
        );
      }
      function d() {
        return (d =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var a = arguments[t];
              for (var r in a)
                Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function u(e, t) {
        if (null == e) return {};
        var a,
          r,
          o = (function(e, t) {
            if (null == e) return {};
            var a,
              r,
              o = {},
              n = Object.keys(e);
            for (r = 0; r < n.length; r++)
              (a = n[r]), t.indexOf(a) >= 0 || (o[a] = e[a]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          for (r = 0; r < n.length; r++)
            (a = n[r]),
              t.indexOf(a) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, a) &&
                  (o[a] = e[a]));
        }
        return o;
      }
      const c = e => {
        let { to: t } = e,
          a = u(e, ['to']);
        return t.includes('http')
          ? n.default.createElement('a', d({}, e, { href: t }))
          : ('#' === t[0] &&
              (t =
                o.default.join(
                  '/auto/',
                  '../plugins/omit-commits/README.html'
                ) + t),
            n.default.createElement(
              'a',
              d({}, a, {
                href: t,
                onClick: a => {
                  if ((a.preventDefault(), '#' === e.to)) return !1;
                  const r = new URL(o.default.join(window.location.origin, t));
                  window.history.pushState(
                    (e => ({
                      href: e.href,
                      pathname: e.pathname,
                      hash: e.hash,
                      query: e.query
                    }))(r),
                    null,
                    t
                  ),
                    e.onClick();
                  const n = new CustomEvent('changeLocation', { detail: r });
                  return dispatchEvent(n), !1;
                }
              })
            ));
      };
      c.defaultProps = { href: '', onClick: () => {} };
      const p = e => {
        var t, a;
        return (
          (a = t = class extends n.default.Component {
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
          l(t, 'defaultProps', { shouldLoad: !0 }),
          a
        );
      };
      p(() => a.e(31).then(a.bind(null, 107))),
        p(() => a.e(31).then(a.bind(null, 108)));
      var h = i('h1', {}, void 0, 'Omit Commits Plugin'),
        v = i(
          'p',
          {},
          void 0,
          'Filter certain commits out of the changelog and version calculation.'
        ),
        f = i(
          'p',
          {},
          void 0,
          'This plugin is not included with the ',
          i('code', {}, void 0, 'auto'),
          ' CLI installed via NPM. To install:'
        ),
        m = i(
          'pre',
          {},
          void 0,
          i(
            'code',
            { className: 'language-sh' },
            void 0,
            'npm i --save-dev @auto-it/omit-commits',
            i('br', {}),
            i('span', { className: 'hljs-comment' }, void 0, '# or'),
            i('br', {}),
            'yarn add -D @auto-it/omit-commits',
            i('br', {})
          )
        ),
        g = i(
          'p',
          {},
          void 0,
          'Yarn can omit by most any field available on a commit. Each options accepts either a string or an array of strings.'
        ),
        b = i(
          'pre',
          {},
          void 0,
          i(
            'code',
            { className: 'language-json' },
            void 0,
            '{',
            i('br', {}),
            '  "plugins": [',
            i('br', {}),
            '    [',
            i('br', {}),
            '      "omit-commits",',
            i('br', {}),
            '      {',
            i('br', {}),
            '        // By usernames',
            i('br', {}),
            '        "username": ["pdbf", "ghost"],',
            i('br', {}),
            '        // By name',
            i('br', {}),
            '        "name": "Adam",',
            i('br', {}),
            '        // By emails',
            i('br', {}),
            '        "email": ["foo@gmail.com", "doesnt-exits@yahoo.com"],',
            i('br', {}),
            '        // By presence of string in subject',
            i('br', {}),
            '        "subject": ["WIP", "SPIKE"],',
            i('br', {}),
            '        // By labels',
            i('br', {}),
            '        "labels": "grunt-work"',
            i('br', {}),
            '      }',
            i('br', {}),
            '    ]',
            i('br', {}),
            '  ]',
            i('br', {}),
            '}',
            i('br', {})
          )
        );
      var y = e =>
        i(
          'div',
          { className: e.className },
          void 0,
          i(
            'section',
            {},
            void 0,
            h,
            v,
            i(
              'h2',
              { id: 'installation' },
              void 0,
              'Installation ',
              i(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#installation',
                'aria-hidden': 'true'
              })
            ),
            f,
            m,
            i(
              'h2',
              { id: 'usage' },
              void 0,
              'Usage ',
              i(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#usage',
                'aria-hidden': 'true'
              })
            ),
            g,
            b
          )
        );
      (t.default = y), (e.exports = t.default);
    },
    101: function(e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var r,
        o = s(a(3)),
        n = (function(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var a in e)
              if (Object.prototype.hasOwnProperty.call(e, a)) {
                var r =
                  Object.defineProperty && Object.getOwnPropertyDescriptor
                    ? Object.getOwnPropertyDescriptor(e, a)
                    : {};
                r.get || r.set ? Object.defineProperty(t, a, r) : (t[a] = e[a]);
              }
          return (t.default = e), t;
        })(a(0));
      s(a(2)), s(a(106));
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i(e, t, a, o) {
        r ||
          (r =
            ('function' == typeof Symbol &&
              Symbol.for &&
              Symbol.for('react.element')) ||
            60103);
        var n = e && e.defaultProps,
          s = arguments.length - 3;
        if ((t || 0 === s || (t = { children: void 0 }), t && n))
          for (var i in n) void 0 === t[i] && (t[i] = n[i]);
        else t || (t = n || {});
        if (1 === s) t.children = o;
        else if (s > 1) {
          for (var l = new Array(s), d = 0; d < s; d++) l[d] = arguments[d + 3];
          t.children = l;
        }
        return {
          $$typeof: r,
          type: e,
          key: void 0 === a ? null : '' + a,
          ref: null,
          props: t,
          _owner: null
        };
      }
      function l(e, t, a) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = a),
          e
        );
      }
      function d() {
        return (d =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var a = arguments[t];
              for (var r in a)
                Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function u(e, t) {
        if (null == e) return {};
        var a,
          r,
          o = (function(e, t) {
            if (null == e) return {};
            var a,
              r,
              o = {},
              n = Object.keys(e);
            for (r = 0; r < n.length; r++)
              (a = n[r]), t.indexOf(a) >= 0 || (o[a] = e[a]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          for (r = 0; r < n.length; r++)
            (a = n[r]),
              t.indexOf(a) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, a) &&
                  (o[a] = e[a]));
        }
        return o;
      }
      const c = e => {
        let { to: t } = e,
          a = u(e, ['to']);
        return t.includes('http')
          ? n.default.createElement('a', d({}, e, { href: t }))
          : ('#' === t[0] &&
              (t =
                o.default.join(
                  '/auto/',
                  '../plugins/omit-release-notes/README.html'
                ) + t),
            n.default.createElement(
              'a',
              d({}, a, {
                href: t,
                onClick: a => {
                  if ((a.preventDefault(), '#' === e.to)) return !1;
                  const r = new URL(o.default.join(window.location.origin, t));
                  window.history.pushState(
                    (e => ({
                      href: e.href,
                      pathname: e.pathname,
                      hash: e.hash,
                      query: e.query
                    }))(r),
                    null,
                    t
                  ),
                    e.onClick();
                  const n = new CustomEvent('changeLocation', { detail: r });
                  return dispatchEvent(n), !1;
                }
              })
            ));
      };
      c.defaultProps = { href: '', onClick: () => {} };
      const p = e => {
        var t, a;
        return (
          (a = t = class extends n.default.Component {
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
          l(t, 'defaultProps', { shouldLoad: !0 }),
          a
        );
      };
      p(() => a.e(31).then(a.bind(null, 107))),
        p(() => a.e(31).then(a.bind(null, 108)));
      var h = i('h1', {}, void 0, 'Omit Release Notes Plugin'),
        v = i('code', {}, void 0, 'auto'),
        f = i('code', {}, void 0, 'Release Notes'),
        m = i(
          'p',
          {},
          void 0,
          'This plugin is not included with the ',
          i('code', {}, void 0, 'auto'),
          ' CLI installed via NPM. To install:'
        ),
        g = i(
          'pre',
          {},
          void 0,
          i(
            'code',
            { className: 'language-sh' },
            void 0,
            'npm i --save-dev @auto-it/omit-release-notes',
            i('br', {}),
            i('span', { className: 'hljs-comment' }, void 0, '# or'),
            i('br', {}),
            'yarn add -D @auto-it/omit-release-notes',
            i('br', {})
          )
        ),
        b = i(
          'p',
          {},
          void 0,
          'Yarn can omit by most any field available on a PR. Each options accepts either a string or an array of strings.'
        ),
        y = i(
          'pre',
          {},
          void 0,
          i(
            'code',
            { className: 'language-json' },
            void 0,
            '{',
            i('br', {}),
            '  "plugins": [',
            i('br', {}),
            '    [',
            i('br', {}),
            '      "omit-release-notes",',
            i('br', {}),
            '      {',
            i('br', {}),
            '        // By usernames',
            i('br', {}),
            '        "username": ["pdbf", "ghost"],',
            i('br', {}),
            '        // By name',
            i('br', {}),
            '        "name": "Adam",',
            i('br', {}),
            '        // By emails',
            i('br', {}),
            '        "email": ["foo@gmail.com", "doesnt-exits@yahoo.com"],',
            i('br', {}),
            '        // By labels',
            i('br', {}),
            '        "labels": "grunt-work"',
            i('br', {}),
            '      }',
            i('br', {}),
            '    ]',
            i('br', {}),
            '  ]',
            i('br', {}),
            '}',
            i('br', {})
          )
        );
      var j = e =>
        i(
          'div',
          { className: e.className },
          void 0,
          i(
            'section',
            {},
            void 0,
            h,
            i(
              'p',
              {},
              void 0,
              "Filter PRs with release notes that shouldn't make it into a release. By default ",
              v,
              ' will not include and ',
              f,
              ' from ',
              i(
                c,
                {
                  currentPage: e.currentPage,
                  target: '_blank',
                  to: 'https://renovatebot.com/',
                  className: 'external-link'
                },
                void 0,
                'renovate'
              ),
              ' PRs. This plugin allows you to omit more PRs from effecting you releases.'
            ),
            i(
              'h2',
              { id: 'installation' },
              void 0,
              'Installation ',
              i(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#installation',
                'aria-hidden': 'true'
              })
            ),
            m,
            g,
            i(
              'h2',
              { id: 'usage' },
              void 0,
              'Usage ',
              i(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#usage',
                'aria-hidden': 'true'
              })
            ),
            b,
            y
          )
        );
      (t.default = j), (e.exports = t.default);
    },
    102: function(e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var r,
        o = s(a(3)),
        n = (function(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var a in e)
              if (Object.prototype.hasOwnProperty.call(e, a)) {
                var r =
                  Object.defineProperty && Object.getOwnPropertyDescriptor
                    ? Object.getOwnPropertyDescriptor(e, a)
                    : {};
                r.get || r.set ? Object.defineProperty(t, a, r) : (t[a] = e[a]);
              }
          return (t.default = e), t;
        })(a(0));
      s(a(2)), s(a(106));
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i(e, t, a, o) {
        r ||
          (r =
            ('function' == typeof Symbol &&
              Symbol.for &&
              Symbol.for('react.element')) ||
            60103);
        var n = e && e.defaultProps,
          s = arguments.length - 3;
        if ((t || 0 === s || (t = { children: void 0 }), t && n))
          for (var i in n) void 0 === t[i] && (t[i] = n[i]);
        else t || (t = n || {});
        if (1 === s) t.children = o;
        else if (s > 1) {
          for (var l = new Array(s), d = 0; d < s; d++) l[d] = arguments[d + 3];
          t.children = l;
        }
        return {
          $$typeof: r,
          type: e,
          key: void 0 === a ? null : '' + a,
          ref: null,
          props: t,
          _owner: null
        };
      }
      function l(e, t, a) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = a),
          e
        );
      }
      function d() {
        return (d =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var a = arguments[t];
              for (var r in a)
                Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function u(e, t) {
        if (null == e) return {};
        var a,
          r,
          o = (function(e, t) {
            if (null == e) return {};
            var a,
              r,
              o = {},
              n = Object.keys(e);
            for (r = 0; r < n.length; r++)
              (a = n[r]), t.indexOf(a) >= 0 || (o[a] = e[a]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          for (r = 0; r < n.length; r++)
            (a = n[r]),
              t.indexOf(a) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, a) &&
                  (o[a] = e[a]));
        }
        return o;
      }
      const c = e => {
        let { to: t } = e,
          a = u(e, ['to']);
        return t.includes('http')
          ? n.default.createElement('a', d({}, e, { href: t }))
          : ('#' === t[0] &&
              (t =
                o.default.join('/auto/', '../plugins/released/README.html') +
                t),
            n.default.createElement(
              'a',
              d({}, a, {
                href: t,
                onClick: a => {
                  if ((a.preventDefault(), '#' === e.to)) return !1;
                  const r = new URL(o.default.join(window.location.origin, t));
                  window.history.pushState(
                    (e => ({
                      href: e.href,
                      pathname: e.pathname,
                      hash: e.hash,
                      query: e.query
                    }))(r),
                    null,
                    t
                  ),
                    e.onClick();
                  const n = new CustomEvent('changeLocation', { detail: r });
                  return dispatchEvent(n), !1;
                }
              })
            ));
      };
      c.defaultProps = { href: '', onClick: () => {} };
      const p = e => {
        var t, a;
        return (
          (a = t = class extends n.default.Component {
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
          l(t, 'defaultProps', { shouldLoad: !0 }),
          a
        );
      };
      p(() => a.e(31).then(a.bind(null, 107))),
        p(() => a.e(31).then(a.bind(null, 108)));
      var h = i('h1', {}, void 0, 'Released Plugin'),
        v = i('p', {}, void 0, 'This plugin'),
        f = i(
          'ul',
          {},
          void 0,
          i('li', {}, void 0, 'comments on the merged PR with the new version'),
          i('li', {}, void 0, 'comments on closed issues with the new version'),
          i(
            'li',
            {},
            void 0,
            'adds a ',
            i('code', {}, void 0, 'released'),
            ' label to the pull request'
          ),
          i(
            'li',
            {},
            void 0,
            'adds a ',
            i('code', {}, void 0, 'released'),
            ' label to closed issues'
          )
        ),
        m = i(
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
              'Make sure that you create the ',
              i('code', {}, void 0, 'released'),
              ' label on you project'
            )
          )
        ),
        g = i(
          'p',
          {},
          void 0,
          'This plugin is included with the ',
          i('code', {}, void 0, 'auto'),
          ' CLI so you do not have to install it. To install if you are using the ',
          i('code', {}, void 0, 'auto'),
          ' API directly:'
        ),
        b = i(
          'pre',
          {},
          void 0,
          i(
            'code',
            { className: 'language-sh' },
            void 0,
            'npm i --save-dev @auto-it/released',
            i('br', {}),
            i('span', { className: 'hljs-comment' }, void 0, '# or'),
            i('br', {}),
            'yarn add -D @auto-it/released',
            i('br', {})
          )
        ),
        y = i(
          'p',
          {},
          void 0,
          'To use the plugin include it in your ',
          i('code', {}, void 0, '.autorc')
        ),
        j = i(
          'pre',
          {},
          void 0,
          i(
            'code',
            { className: 'language-json' },
            void 0,
            '{',
            i('br', {}),
            '  ',
            i('span', { className: 'hljs-attr' }, void 0, '"plugins"'),
            ': [',
            i('span', { className: 'hljs-string' }, void 0, '"released"'),
            ']',
            i('br', {}),
            '}',
            i('br', {})
          )
        ),
        N = i(
          'p',
          {},
          void 0,
          'Customize the label this plugin attaches to merged pull requests.'
        ),
        P = i(
          'pre',
          {},
          void 0,
          i(
            'code',
            { className: 'language-json' },
            void 0,
            '{',
            i('br', {}),
            '  ',
            i('span', { className: 'hljs-attr' }, void 0, '"plugins"'),
            ': [',
            i('br', {}),
            '    [',
            i('br', {}),
            '      ',
            i('span', { className: 'hljs-string' }, void 0, '"released"'),
            ',',
            i('br', {}),
            '      {',
            i('br', {}),
            '        ',
            i('span', { className: 'hljs-attr' }, void 0, '"label"'),
            ': ',
            i('span', { className: 'hljs-string' }, void 0, '":shipit:"'),
            i('br', {}),
            '      }',
            i('br', {}),
            '    ]',
            i('br', {}),
            '  ]',
            i('br', {}),
            '}',
            i('br', {})
          )
        ),
        w = i(
          'p',
          {},
          void 0,
          'Customize the prerelease label this plugin attaches to pull requests merged to prerelease branches.'
        ),
        O = i(
          'pre',
          {},
          void 0,
          i(
            'code',
            { className: 'language-json' },
            void 0,
            '{',
            i('br', {}),
            '  ',
            i('span', { className: 'hljs-attr' }, void 0, '"plugins"'),
            ': [',
            i('br', {}),
            '    [',
            i('br', {}),
            '      ',
            i('span', { className: 'hljs-string' }, void 0, '"released"'),
            ',',
            i('br', {}),
            '      {',
            i('br', {}),
            '        ',
            i('span', { className: 'hljs-attr' }, void 0, '"prereleaseLabel"'),
            ': ',
            i('span', { className: 'hljs-string' }, void 0, '"🚧"'),
            i('br', {}),
            '      }',
            i('br', {}),
            '    ]',
            i('br', {}),
            '  ]',
            i('br', {}),
            '}',
            i('br', {})
          )
        ),
        k = i(
          'p',
          {},
          void 0,
          'To customize the message this plugin uses on issues and pull requests use the following format.'
        ),
        E = i(
          'ul',
          {},
          void 0,
          i(
            'li',
            {},
            void 0,
            i('code', {}, void 0, '%TYPE'),
            ' - Either ',
            i('code', {}, void 0, 'PR'),
            ' or ',
            i('code', {}, void 0, 'Issue')
          ),
          i(
            'li',
            {},
            void 0,
            i('code', {}, void 0, '%VERSION'),
            ' - The version that was just published'
          )
        ),
        C = i(
          'pre',
          {},
          void 0,
          i(
            'code',
            { className: 'language-json' },
            void 0,
            '{',
            i('br', {}),
            '  ',
            i('span', { className: 'hljs-attr' }, void 0, '"plugins"'),
            ': [',
            i('br', {}),
            '    [',
            i('br', {}),
            '      ',
            i('span', { className: 'hljs-string' }, void 0, '"released"'),
            ',',
            i('br', {}),
            '      {',
            i('br', {}),
            '        ',
            i('span', { className: 'hljs-attr' }, void 0, '"message"'),
            ': ',
            i(
              'span',
              { className: 'hljs-string' },
              void 0,
              '"%TYPE went out with version: %VERSION"'
            ),
            i('br', {}),
            '      }',
            i('br', {}),
            '    ]',
            i('br', {}),
            '  ]',
            i('br', {}),
            '}',
            i('br', {})
          )
        ),
        _ = i('p', {}, void 0, 'Lock issues that have been merged in PRs.'),
        S = i(
          'pre',
          {},
          void 0,
          i(
            'code',
            { className: 'language-json' },
            void 0,
            '{',
            i('br', {}),
            '  ',
            i('span', { className: 'hljs-attr' }, void 0, '"plugins"'),
            ': [[',
            i('span', { className: 'hljs-string' }, void 0, '"released"'),
            ', { ',
            i('span', { className: 'hljs-attr' }, void 0, '"lockIssues"'),
            ': ',
            i('span', { className: 'hljs-literal' }, void 0, 'true'),
            ' }]]',
            i('br', {}),
            '}',
            i('br', {})
          )
        );
      var L = e =>
        i(
          'div',
          { className: e.className },
          void 0,
          i(
            'section',
            {},
            void 0,
            h,
            v,
            f,
            m,
            i(
              'h2',
              { id: 'installation' },
              void 0,
              'Installation ',
              i(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#installation',
                'aria-hidden': 'true'
              })
            ),
            g,
            b,
            i(
              'h2',
              { id: 'usage' },
              void 0,
              'Usage ',
              i(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#usage',
                'aria-hidden': 'true'
              })
            ),
            y,
            j,
            i(
              'h2',
              { id: 'options' },
              void 0,
              'Options ',
              i(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#options',
                'aria-hidden': 'true'
              })
            ),
            i(
              'h3',
              { id: 'label' },
              void 0,
              'Label ',
              i(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#label',
                'aria-hidden': 'true'
              })
            ),
            N,
            P,
            i(
              'h3',
              { id: 'prerelease-label' },
              void 0,
              'Prerelease Label ',
              i(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#prerelease-label',
                'aria-hidden': 'true'
              })
            ),
            w,
            O,
            i(
              'h3',
              { id: 'message' },
              void 0,
              'Message ',
              i(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#message',
                'aria-hidden': 'true'
              })
            ),
            k,
            E,
            C,
            i(
              'h3',
              { id: 'lock-issue' },
              void 0,
              'Lock Issue ',
              i(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#lock-issue',
                'aria-hidden': 'true'
              })
            ),
            _,
            S
          )
        );
      (t.default = L), (e.exports = t.default);
    },
    103: function(e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var r,
        o = s(a(3)),
        n = (function(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var a in e)
              if (Object.prototype.hasOwnProperty.call(e, a)) {
                var r =
                  Object.defineProperty && Object.getOwnPropertyDescriptor
                    ? Object.getOwnPropertyDescriptor(e, a)
                    : {};
                r.get || r.set ? Object.defineProperty(t, a, r) : (t[a] = e[a]);
              }
          return (t.default = e), t;
        })(a(0));
      s(a(2)), s(a(106));
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i(e, t, a, o) {
        r ||
          (r =
            ('function' == typeof Symbol &&
              Symbol.for &&
              Symbol.for('react.element')) ||
            60103);
        var n = e && e.defaultProps,
          s = arguments.length - 3;
        if ((t || 0 === s || (t = { children: void 0 }), t && n))
          for (var i in n) void 0 === t[i] && (t[i] = n[i]);
        else t || (t = n || {});
        if (1 === s) t.children = o;
        else if (s > 1) {
          for (var l = new Array(s), d = 0; d < s; d++) l[d] = arguments[d + 3];
          t.children = l;
        }
        return {
          $$typeof: r,
          type: e,
          key: void 0 === a ? null : '' + a,
          ref: null,
          props: t,
          _owner: null
        };
      }
      function l(e, t, a) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = a),
          e
        );
      }
      function d() {
        return (d =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var a = arguments[t];
              for (var r in a)
                Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function u(e, t) {
        if (null == e) return {};
        var a,
          r,
          o = (function(e, t) {
            if (null == e) return {};
            var a,
              r,
              o = {},
              n = Object.keys(e);
            for (r = 0; r < n.length; r++)
              (a = n[r]), t.indexOf(a) >= 0 || (o[a] = e[a]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          for (r = 0; r < n.length; r++)
            (a = n[r]),
              t.indexOf(a) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, a) &&
                  (o[a] = e[a]));
        }
        return o;
      }
      const c = e => {
        let { to: t } = e,
          a = u(e, ['to']);
        return t.includes('http')
          ? n.default.createElement('a', d({}, e, { href: t }))
          : ('#' === t[0] &&
              (t =
                o.default.join('/auto/', '../plugins/slack/README.html') + t),
            n.default.createElement(
              'a',
              d({}, a, {
                href: t,
                onClick: a => {
                  if ((a.preventDefault(), '#' === e.to)) return !1;
                  const r = new URL(o.default.join(window.location.origin, t));
                  window.history.pushState(
                    (e => ({
                      href: e.href,
                      pathname: e.pathname,
                      hash: e.hash,
                      query: e.query
                    }))(r),
                    null,
                    t
                  ),
                    e.onClick();
                  const n = new CustomEvent('changeLocation', { detail: r });
                  return dispatchEvent(n), !1;
                }
              })
            ));
      };
      c.defaultProps = { href: '', onClick: () => {} };
      const p = e => {
        var t, a;
        return (
          (a = t = class extends n.default.Component {
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
          l(t, 'defaultProps', { shouldLoad: !0 }),
          a
        );
      };
      p(() => a.e(31).then(a.bind(null, 107))),
        p(() => a.e(31).then(a.bind(null, 108)));
      var h = i('h1', {}, void 0, 'Slack Plugin'),
        v = i('p', {}, void 0, 'Post your release notes to a slack channel'),
        f = i(
          'p',
          {},
          void 0,
          'This plugin is not included with the ',
          i('code', {}, void 0, 'auto'),
          ' CLI installed via NPM. To install:'
        ),
        m = i(
          'pre',
          {},
          void 0,
          i(
            'code',
            { className: 'language-sh' },
            void 0,
            'npm i --save-dev @auto-it/slack',
            i('br', {}),
            i('span', { className: 'hljs-comment' }, void 0, '# or'),
            i('br', {}),
            'yarn add -D @auto-it/slack',
            i('br', {})
          )
        ),
        g = i(
          'p',
          {},
          void 0,
          'To use the plugin include it in your ',
          i('code', {}, void 0, '.autorc'),
          '.'
        ),
        b = i(
          'pre',
          {},
          void 0,
          i(
            'code',
            { className: 'language-json' },
            void 0,
            '{',
            i('br', {}),
            '  ',
            i('span', { className: 'hljs-attr' }, void 0, '"plugins"'),
            ': [',
            i('br', {}),
            '    [',
            i('span', { className: 'hljs-string' }, void 0, '"slack"'),
            ', { ',
            i('span', { className: 'hljs-attr' }, void 0, '"url"'),
            ': ',
            i(
              'span',
              { className: 'hljs-string' },
              void 0,
              '"https://url-to-your-slack-hook.com"'
            ),
            ' }],',
            i('br', {}),
            '    // or',
            i('br', {}),
            '    [',
            i('span', { className: 'hljs-string' }, void 0, '"slack"'),
            ', ',
            i(
              'span',
              { className: 'hljs-string' },
              void 0,
              '"https://url-to-your-slack-hook.com"'
            ),
            '],',
            i('br', {}),
            '    // or',
            i('br', {}),
            '    [',
            i('br', {}),
            '      ',
            i('span', { className: 'hljs-string' }, void 0, '"slack"'),
            ',',
            i('br', {}),
            '      { ',
            i('span', { className: 'hljs-attr' }, void 0, '"url"'),
            ': ',
            i(
              'span',
              { className: 'hljs-string' },
              void 0,
              '"https://url-to-your-slack-hook.com"'
            ),
            ', ',
            i('span', { className: 'hljs-attr' }, void 0, '"atTarget"'),
            ': ',
            i('span', { className: 'hljs-string' }, void 0, '"here"'),
            ' }',
            i('br', {}),
            '    ]',
            i('br', {}),
            '  ]',
            i('br', {}),
            '}',
            i('br', {})
          )
        ),
        y = i(
          'p',
          {},
          void 0,
          'This URL should be to you webhook. If you require a token to post to a slack hook, make sure you have a ',
          i('code', {}, void 0, 'SLACK_TOKEN'),
          ' variable available on your environment. This token will be added to eh URL as a query string parameter.'
        ),
        j = i(
          'p',
          {},
          void 0,
          'If you are using a ',
          i('code', {}, void 0, 'prerelease'),
          ' branch like ',
          i('code', {}, void 0, 'next'),
          ', Slack will not post a message by default. This is done to avoid spamming your consumers every time you make a preview release. However, if you would like to configure it such that Slack ',
          i('em', {}, void 0, 'does'),
          ' post on prerelease, you can add the ',
          i('code', {}, void 0, 'publishPreRelease'),
          ' to your ',
          i('code', {}, void 0, '.autorc'),
          ' like so:'
        ),
        N = i(
          'pre',
          {},
          void 0,
          i(
            'code',
            { className: 'language-json' },
            void 0,
            '{',
            i('br', {}),
            '  ',
            i('span', { className: 'hljs-attr' }, void 0, '"plugins"'),
            ': [',
            i('br', {}),
            '    [',
            i('br', {}),
            '      ',
            i('span', { className: 'hljs-string' }, void 0, '"slack"'),
            ',',
            i('br', {}),
            '      { ',
            i('span', { className: 'hljs-attr' }, void 0, '"url"'),
            ': ',
            i(
              'span',
              { className: 'hljs-string' },
              void 0,
              '"https://url-to-your-slack-hook.com"'
            ),
            ', ',
            i(
              'span',
              { className: 'hljs-attr' },
              void 0,
              '"publishPreRelease"'
            ),
            ': ',
            i('span', { className: 'hljs-literal' }, void 0, 'true'),
            ' }',
            i('br', {}),
            '    ],',
            i('br', {}),
            '    // or',
            i('br', {}),
            '    [',
            i('span', { className: 'hljs-string' }, void 0, '"slack"'),
            ', ',
            i(
              'span',
              { className: 'hljs-string' },
              void 0,
              '"https://url-to-your-slack-hook.com"'
            ),
            '],',
            i('br', {}),
            '    // or',
            i('br', {}),
            '    [',
            i('br', {}),
            '      ',
            i('span', { className: 'hljs-string' }, void 0, '"slack"'),
            ',',
            i('br', {}),
            '      {',
            i('br', {}),
            '        ',
            i('span', { className: 'hljs-attr' }, void 0, '"url"'),
            ': ',
            i(
              'span',
              { className: 'hljs-string' },
              void 0,
              '"https://url-to-your-slack-hook.com"'
            ),
            ',',
            i('br', {}),
            '        ',
            i('span', { className: 'hljs-attr' }, void 0, '"atTarget"'),
            ': ',
            i('span', { className: 'hljs-string' }, void 0, '"here"'),
            ',',
            i('br', {}),
            '        ',
            i(
              'span',
              { className: 'hljs-attr' },
              void 0,
              '"publishPreRelease"'
            ),
            ': ',
            i('span', { className: 'hljs-literal' }, void 0, 'true'),
            i('br', {}),
            '      }',
            i('br', {}),
            '    ]',
            i('br', {}),
            '  ]',
            i('br', {}),
            '}',
            i('br', {})
          )
        );
      var P = e =>
        i(
          'div',
          { className: e.className },
          void 0,
          i(
            'section',
            {},
            void 0,
            h,
            v,
            i(
              'h2',
              { id: 'installation' },
              void 0,
              'Installation ',
              i(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#installation',
                'aria-hidden': 'true'
              })
            ),
            f,
            m,
            i(
              'h2',
              { id: 'usage' },
              void 0,
              'Usage ',
              i(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#usage',
                'aria-hidden': 'true'
              })
            ),
            g,
            b,
            y,
            i(
              'h3',
              { id: 'next' },
              void 0,
              'Next ',
              i(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#next',
                'aria-hidden': 'true'
              })
            ),
            j,
            N
          )
        );
      (t.default = P), (e.exports = t.default);
    },
    104: function(e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var r,
        o = s(a(3)),
        n = (function(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var a in e)
              if (Object.prototype.hasOwnProperty.call(e, a)) {
                var r =
                  Object.defineProperty && Object.getOwnPropertyDescriptor
                    ? Object.getOwnPropertyDescriptor(e, a)
                    : {};
                r.get || r.set ? Object.defineProperty(t, a, r) : (t[a] = e[a]);
              }
          return (t.default = e), t;
        })(a(0));
      s(a(2)), s(a(106));
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i(e, t, a, o) {
        r ||
          (r =
            ('function' == typeof Symbol &&
              Symbol.for &&
              Symbol.for('react.element')) ||
            60103);
        var n = e && e.defaultProps,
          s = arguments.length - 3;
        if ((t || 0 === s || (t = { children: void 0 }), t && n))
          for (var i in n) void 0 === t[i] && (t[i] = n[i]);
        else t || (t = n || {});
        if (1 === s) t.children = o;
        else if (s > 1) {
          for (var l = new Array(s), d = 0; d < s; d++) l[d] = arguments[d + 3];
          t.children = l;
        }
        return {
          $$typeof: r,
          type: e,
          key: void 0 === a ? null : '' + a,
          ref: null,
          props: t,
          _owner: null
        };
      }
      function l(e, t, a) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = a),
          e
        );
      }
      function d() {
        return (d =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var a = arguments[t];
              for (var r in a)
                Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function u(e, t) {
        if (null == e) return {};
        var a,
          r,
          o = (function(e, t) {
            if (null == e) return {};
            var a,
              r,
              o = {},
              n = Object.keys(e);
            for (r = 0; r < n.length; r++)
              (a = n[r]), t.indexOf(a) >= 0 || (o[a] = e[a]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          for (r = 0; r < n.length; r++)
            (a = n[r]),
              t.indexOf(a) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, a) &&
                  (o[a] = e[a]));
        }
        return o;
      }
      const c = e => {
        let { to: t } = e,
          a = u(e, ['to']);
        return t.includes('http')
          ? n.default.createElement('a', d({}, e, { href: t }))
          : ('#' === t[0] &&
              (t =
                o.default.join('/auto/', '../plugins/twitter/README.html') + t),
            n.default.createElement(
              'a',
              d({}, a, {
                href: t,
                onClick: a => {
                  if ((a.preventDefault(), '#' === e.to)) return !1;
                  const r = new URL(o.default.join(window.location.origin, t));
                  window.history.pushState(
                    (e => ({
                      href: e.href,
                      pathname: e.pathname,
                      hash: e.hash,
                      query: e.query
                    }))(r),
                    null,
                    t
                  ),
                    e.onClick();
                  const n = new CustomEvent('changeLocation', { detail: r });
                  return dispatchEvent(n), !1;
                }
              })
            ));
      };
      c.defaultProps = { href: '', onClick: () => {} };
      const p = e => {
        var t, a;
        return (
          (a = t = class extends n.default.Component {
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
          l(t, 'defaultProps', { shouldLoad: !0 }),
          a
        );
      };
      p(() => a.e(31).then(a.bind(null, 107))),
        p(() => a.e(31).then(a.bind(null, 108)));
      var h = i('h1', {}, void 0, 'Twitter Plugin'),
        v = i('p', {}, void 0, 'Post tweets after a release is made.'),
        f = i(
          'p',
          {},
          void 0,
          'To post tweets to twitter you need the following secrets set in your environment:'
        ),
        m = i(
          'ul',
          {},
          void 0,
          i('li', {}, void 0, i('code', {}, void 0, 'TWITTER_ACCESS_TOKEN')),
          i(
            'li',
            {},
            void 0,
            i('code', {}, void 0, 'TWITTER_ACCESS_TOKEN_SECRET')
          ),
          i('li', {}, void 0, i('code', {}, void 0, 'TWITTER_CONSUMER_KEY')),
          i(
            'li',
            {},
            void 0,
            i('code', {}, void 0, 'TWITTER_CONSUMER_KEY_SECRET')
          )
        ),
        g = i(
          'p',
          {},
          void 0,
          'This plugin is not included with the ',
          i('code', {}, void 0, 'auto'),
          ' CLI installed via NPM. To install:'
        ),
        b = i(
          'pre',
          {},
          void 0,
          i(
            'code',
            { className: 'language-sh' },
            void 0,
            'npm i --save-dev @auto-it/twitter',
            i('br', {}),
            i('span', { className: 'hljs-comment' }, void 0, '# or'),
            i('br', {}),
            'yarn add -D @auto-it/twitter',
            i('br', {})
          )
        ),
        y = i(
          'p',
          {},
          void 0,
          'Simply supply the names of the account to filter'
        ),
        j = i(
          'pre',
          {},
          void 0,
          i(
            'code',
            { className: 'language-json' },
            void 0,
            '{',
            i('br', {}),
            '  "plugins": [',
            i('br', {}),
            '    [',
            i('br', {}),
            '      "twitter",',
            i('br', {}),
            '      {',
            i('br', {}),
            '        /* options */',
            i('br', {}),
            '      }',
            i('br', {}),
            '    ]',
            i('br', {}),
            '  ]',
            i('br', {}),
            '}',
            i('br', {})
          )
        ),
        N = i(
          'p',
          {},
          void 0,
          'You can configure the message posted to twitter. The ',
          i('code', {}, void 0, 'message'),
          ' option should use the following special tokens to create a tweet.'
        ),
        P = i(
          'ul',
          {},
          void 0,
          i(
            'li',
            {},
            void 0,
            i('code', {}, void 0, '%release'),
            ' - The version bump (major, minor, patch)'
          ),
          i(
            'li',
            {},
            void 0,
            i('code', {}, void 0, '%package'),
            ' - The name of the package'
          ),
          i(
            'li',
            {},
            void 0,
            i('code', {}, void 0, '%notes'),
            ' - Your release notes truncated to fit in the tweet'
          ),
          i(
            'li',
            {},
            void 0,
            i('code', {}, void 0, '%link'),
            ' - A link to your the release on GitHub'
          ),
          i(
            'li',
            {},
            void 0,
            i('code', {}, void 0, '%version'),
            ' - The latest version number'
          )
        ),
        w = i('p', {}, void 0, 'Default:'),
        O = i(
          'pre',
          {},
          void 0,
          i(
            'code',
            { className: 'language-txt' },
            void 0,
            'A new %release version of %package was released!',
            i('br', {}),
            i('br', {}),
            '%notes',
            i('br', {}),
            i('br', {}),
            '%link',
            i('br', {})
          )
        ),
        k = i(
          'pre',
          {},
          void 0,
          i(
            'code',
            { className: 'language-json' },
            void 0,
            '{',
            i('br', {}),
            '  ',
            i('span', { className: 'hljs-attr' }, void 0, '"plugins"'),
            ': [',
            i('br', {}),
            '    [',
            i('span', { className: 'hljs-string' }, void 0, '"twitter"'),
            ', { ',
            i('span', { className: 'hljs-attr' }, void 0, '"message"'),
            ': ',
            i(
              'span',
              { className: 'hljs-string' },
              void 0,
              '"v%version of %package was released!\\n\\n%link"'
            ),
            ' }]',
            i('br', {}),
            '  ]',
            i('br', {}),
            '}',
            i('br', {})
          )
        ),
        E = i(
          'p',
          {},
          void 0,
          'By default the ',
          i('code', {}, void 0, 'twitter'),
          ' plugin will only tweet if the version difference between the latest and the last release is greater than a ',
          i('code', {}, void 0, 'minor'),
          '.'
        ),
        C = i(
          'pre',
          {},
          void 0,
          i(
            'code',
            { className: 'language-json' },
            void 0,
            '{',
            i('br', {}),
            '  ',
            i('span', { className: 'hljs-attr' }, void 0, '"plugins"'),
            ': [[',
            i('span', { className: 'hljs-string' }, void 0, '"twitter"'),
            ', { ',
            i('span', { className: 'hljs-attr' }, void 0, '"threshold"'),
            ': ',
            i('span', { className: 'hljs-string' }, void 0, '"major"'),
            ' }]]',
            i('br', {}),
            '}',
            i('br', {})
          )
        );
      var _ = e =>
        i(
          'div',
          { className: e.className },
          void 0,
          i(
            'section',
            {},
            void 0,
            h,
            v,
            i(
              'h2',
              { id: 'prerequisites' },
              void 0,
              'Prerequisites ',
              i(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#prerequisites',
                'aria-hidden': 'true'
              })
            ),
            f,
            m,
            i(
              'h2',
              { id: 'installation' },
              void 0,
              'Installation ',
              i(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#installation',
                'aria-hidden': 'true'
              })
            ),
            g,
            b,
            i(
              'h2',
              { id: 'usage' },
              void 0,
              'Usage ',
              i(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#usage',
                'aria-hidden': 'true'
              })
            ),
            y,
            j,
            i(
              'h2',
              { id: 'options' },
              void 0,
              'Options ',
              i(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#options',
                'aria-hidden': 'true'
              })
            ),
            i(
              'h3',
              { id: 'message' },
              void 0,
              'Message ',
              i(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#message',
                'aria-hidden': 'true'
              })
            ),
            N,
            P,
            w,
            O,
            k,
            i(
              'h3',
              { id: 'threshold' },
              void 0,
              'Threshold ',
              i(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#threshold',
                'aria-hidden': 'true'
              })
            ),
            E,
            C
          )
        );
      (t.default = _), (e.exports = t.default);
    },
    105: function(e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var r,
        o = s(a(3)),
        n = (function(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var a in e)
              if (Object.prototype.hasOwnProperty.call(e, a)) {
                var r =
                  Object.defineProperty && Object.getOwnPropertyDescriptor
                    ? Object.getOwnPropertyDescriptor(e, a)
                    : {};
                r.get || r.set ? Object.defineProperty(t, a, r) : (t[a] = e[a]);
              }
          return (t.default = e), t;
        })(a(0));
      s(a(2)), s(a(106));
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i(e, t, a, o) {
        r ||
          (r =
            ('function' == typeof Symbol &&
              Symbol.for &&
              Symbol.for('react.element')) ||
            60103);
        var n = e && e.defaultProps,
          s = arguments.length - 3;
        if ((t || 0 === s || (t = { children: void 0 }), t && n))
          for (var i in n) void 0 === t[i] && (t[i] = n[i]);
        else t || (t = n || {});
        if (1 === s) t.children = o;
        else if (s > 1) {
          for (var l = new Array(s), d = 0; d < s; d++) l[d] = arguments[d + 3];
          t.children = l;
        }
        return {
          $$typeof: r,
          type: e,
          key: void 0 === a ? null : '' + a,
          ref: null,
          props: t,
          _owner: null
        };
      }
      function l(e, t, a) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = a),
          e
        );
      }
      function d() {
        return (d =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var a = arguments[t];
              for (var r in a)
                Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function u(e, t) {
        if (null == e) return {};
        var a,
          r,
          o = (function(e, t) {
            if (null == e) return {};
            var a,
              r,
              o = {},
              n = Object.keys(e);
            for (r = 0; r < n.length; r++)
              (a = n[r]), t.indexOf(a) >= 0 || (o[a] = e[a]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          for (r = 0; r < n.length; r++)
            (a = n[r]),
              t.indexOf(a) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, a) &&
                  (o[a] = e[a]));
        }
        return o;
      }
      const c = e => {
        let { to: t } = e,
          a = u(e, ['to']);
        return t.includes('http')
          ? n.default.createElement('a', d({}, e, { href: t }))
          : ('#' === t[0] &&
              (t =
                o.default.join(
                  '/auto/',
                  '../plugins/upload-assets/README.html'
                ) + t),
            n.default.createElement(
              'a',
              d({}, a, {
                href: t,
                onClick: a => {
                  if ((a.preventDefault(), '#' === e.to)) return !1;
                  const r = new URL(o.default.join(window.location.origin, t));
                  window.history.pushState(
                    (e => ({
                      href: e.href,
                      pathname: e.pathname,
                      hash: e.hash,
                      query: e.query
                    }))(r),
                    null,
                    t
                  ),
                    e.onClick();
                  const n = new CustomEvent('changeLocation', { detail: r });
                  return dispatchEvent(n), !1;
                }
              })
            ));
      };
      c.defaultProps = { href: '', onClick: () => {} };
      const p = e => {
        var t, a;
        return (
          (a = t = class extends n.default.Component {
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
          l(t, 'defaultProps', { shouldLoad: !0 }),
          a
        );
      };
      p(() => a.e(31).then(a.bind(null, 107))),
        p(() => a.e(31).then(a.bind(null, 108)));
      var h = i('h1', {}, void 0, 'Upload Assets Plugin'),
        v = i(
          'p',
          {},
          void 0,
          'Upload assets to the release. Good for executables and extra downloadable files.'
        ),
        f = i(
          'p',
          {},
          void 0,
          'This plugin is not included with the ',
          i('code', {}, void 0, 'auto'),
          ' CLI installed via NPM. To install:'
        ),
        m = i(
          'pre',
          {},
          void 0,
          i(
            'code',
            { className: 'language-sh' },
            void 0,
            'npm i --save-dev @auto-it/upload-assets',
            i('br', {}),
            i('span', { className: 'hljs-comment' }, void 0, '# or'),
            i('br', {}),
            'yarn add -D @auto-it/upload-assets',
            i('br', {})
          )
        ),
        g = i(
          'p',
          {},
          void 0,
          'Simply supply the paths to the assets to add to the release.'
        ),
        b = i(
          'pre',
          {},
          void 0,
          i(
            'code',
            { className: 'language-json' },
            void 0,
            '{',
            i('br', {}),
            '  ',
            i('span', { className: 'hljs-attr' }, void 0, '"plugins"'),
            ': [',
            i('br', {}),
            '    [',
            i('span', { className: 'hljs-string' }, void 0, '"upload-assets"'),
            ', { ',
            i('span', { className: 'hljs-attr' }, void 0, '"assets"'),
            ': [',
            i('span', { className: 'hljs-string' }, void 0, '"./path/to/file"'),
            '] }],',
            i('br', {}),
            '    // or',
            i('br', {}),
            '    [',
            i('span', { className: 'hljs-string' }, void 0, '"upload-assets"'),
            ', [',
            i('span', { className: 'hljs-string' }, void 0, '"./path/to/file"'),
            ']],',
            i('br', {}),
            '    // or use globs to upload multiple things',
            i('br', {}),
            '    [',
            i('span', { className: 'hljs-string' }, void 0, '"upload-assets"'),
            ', [',
            i(
              'span',
              { className: 'hljs-string' },
              void 0,
              '"./path/**/to/*.file"'
            ),
            ']]',
            i('br', {}),
            '  ]',
            i('br', {}),
            '}',
            i('br', {})
          )
        );
      var y = e =>
        i(
          'div',
          { className: e.className },
          void 0,
          i(
            'section',
            {},
            void 0,
            h,
            v,
            i(
              'h2',
              { id: 'installation' },
              void 0,
              'Installation ',
              i(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#installation',
                'aria-hidden': 'true'
              })
            ),
            f,
            m,
            i(
              'h2',
              { id: 'usage' },
              void 0,
              'Usage ',
              i(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#usage',
                'aria-hidden': 'true'
              })
            ),
            g,
            b
          )
        );
      (t.default = y), (e.exports = t.default);
    },
    90: function(e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var r,
        o = s(a(3)),
        n = (function(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var a in e)
              if (Object.prototype.hasOwnProperty.call(e, a)) {
                var r =
                  Object.defineProperty && Object.getOwnPropertyDescriptor
                    ? Object.getOwnPropertyDescriptor(e, a)
                    : {};
                r.get || r.set ? Object.defineProperty(t, a, r) : (t[a] = e[a]);
              }
          return (t.default = e), t;
        })(a(0));
      s(a(2)), s(a(106));
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i(e, t, a, o) {
        r ||
          (r =
            ('function' == typeof Symbol &&
              Symbol.for &&
              Symbol.for('react.element')) ||
            60103);
        var n = e && e.defaultProps,
          s = arguments.length - 3;
        if ((t || 0 === s || (t = { children: void 0 }), t && n))
          for (var i in n) void 0 === t[i] && (t[i] = n[i]);
        else t || (t = n || {});
        if (1 === s) t.children = o;
        else if (s > 1) {
          for (var l = new Array(s), d = 0; d < s; d++) l[d] = arguments[d + 3];
          t.children = l;
        }
        return {
          $$typeof: r,
          type: e,
          key: void 0 === a ? null : '' + a,
          ref: null,
          props: t,
          _owner: null
        };
      }
      function l(e, t, a) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = a),
          e
        );
      }
      function d() {
        return (d =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var a = arguments[t];
              for (var r in a)
                Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function u(e, t) {
        if (null == e) return {};
        var a,
          r,
          o = (function(e, t) {
            if (null == e) return {};
            var a,
              r,
              o = {},
              n = Object.keys(e);
            for (r = 0; r < n.length; r++)
              (a = n[r]), t.indexOf(a) >= 0 || (o[a] = e[a]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          for (r = 0; r < n.length; r++)
            (a = n[r]),
              t.indexOf(a) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, a) &&
                  (o[a] = e[a]));
        }
        return o;
      }
      const c = e => {
        let { to: t } = e,
          a = u(e, ['to']);
        return t.includes('http')
          ? n.default.createElement('a', d({}, e, { href: t }))
          : ('#' === t[0] &&
              (t =
                o.default.join('/auto/', '../plugins/chrome/README.html') + t),
            n.default.createElement(
              'a',
              d({}, a, {
                href: t,
                onClick: a => {
                  if ((a.preventDefault(), '#' === e.to)) return !1;
                  const r = new URL(o.default.join(window.location.origin, t));
                  window.history.pushState(
                    (e => ({
                      href: e.href,
                      pathname: e.pathname,
                      hash: e.hash,
                      query: e.query
                    }))(r),
                    null,
                    t
                  ),
                    e.onClick();
                  const n = new CustomEvent('changeLocation', { detail: r });
                  return dispatchEvent(n), !1;
                }
              })
            ));
      };
      c.defaultProps = { href: '', onClick: () => {} };
      const p = e => {
        var t, a;
        return (
          (a = t = class extends n.default.Component {
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
          l(t, 'defaultProps', { shouldLoad: !0 }),
          a
        );
      };
      p(() => a.e(31).then(a.bind(null, 107))),
        p(() => a.e(31).then(a.bind(null, 108)));
      var h = i('h1', {}, void 0, 'Chrome Web Store'),
        v = i(
          'p',
          {},
          void 0,
          'This plugin allows you to automate the publishing of chrome extensions'
        ),
        f = i(
          'ul',
          {},
          void 0,
          i('li', {}, void 0, i('code', {}, void 0, 'CLIENT_ID')),
          i('li', {}, void 0, i('code', {}, void 0, 'CLIENT_SECRET')),
          i('li', {}, void 0, i('code', {}, void 0, 'REFRESH_TOKEN'))
        ),
        m = i(
          'p',
          {},
          void 0,
          'This plugin is not included with the ',
          i('code', {}, void 0, 'auto'),
          ' CLI installed via NPM. To install:'
        ),
        g = i(
          'pre',
          {},
          void 0,
          i(
            'code',
            { className: 'language-sh' },
            void 0,
            'npm i --save-dev @auto-it/chrome',
            i('br', {}),
            i('span', { className: 'hljs-comment' }, void 0, '# or'),
            i('br', {}),
            'yarn add -D @auto-it/chrome',
            i('br', {})
          )
        ),
        b = i(
          'p',
          {},
          void 0,
          'You must first pack/zip your plugin before running ',
          i('code', {}, void 0, 'auto'),
          '.'
        ),
        y = i(
          'p',
          {},
          void 0,
          'These environment variables tell ',
          i('code', {}, void 0, 'auto'),
          ' what to publish.'
        ),
        j = i(
          'ul',
          {},
          void 0,
          i(
            'li',
            {},
            void 0,
            'EXTENSION_ID - your chrome extensions unique ID (REQUIRED)'
          ),
          i(
            'li',
            {},
            void 0,
            'EXTENSION_BUILD - Path to either a zip file, or a directory to be zip. defaults to ',
            i('code', {}, void 0, 'extension.zip')
          )
        ),
        N = i('p', {}, void 0, 'Or you can set these values in the autorc:'),
        P = i(
          'pre',
          {},
          void 0,
          i(
            'code',
            { className: 'language-json' },
            void 0,
            '{',
            i('br', {}),
            '  ',
            i('span', { className: 'hljs-attr' }, void 0, '"plugins"'),
            ': [',
            i('br', {}),
            '    [',
            i('br', {}),
            '      ',
            i('span', { className: 'hljs-string' }, void 0, '"chrome"'),
            ',',
            i('br', {}),
            '      {',
            i('br', {}),
            '        ',
            i('span', { className: 'hljs-attr' }, void 0, '"id"'),
            ': ',
            i('span', { className: 'hljs-string' }, void 0, '"1234"'),
            ',',
            i('br', {}),
            '        ',
            i('span', { className: 'hljs-attr' }, void 0, '"build"'),
            ': ',
            i(
              'span',
              { className: 'hljs-string' },
              void 0,
              '"path/to/zip/or/folder"'
            ),
            ',',
            i('br', {}),
            '        ',
            i('span', { className: 'hljs-attr' }, void 0, '"manifest"'),
            ': ',
            i(
              'span',
              { className: 'hljs-string' },
              void 0,
              '"path/tp/manifest.json"'
            ),
            i('br', {}),
            '      }',
            i('br', {}),
            '    ]',
            i('br', {}),
            '  ]',
            i('br', {}),
            '}',
            i('br', {})
          )
        ),
        w = i(
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
              '⚠️ You must have a manifest.json for this plugin to work.'
            )
          )
        );
      var O = e =>
        i(
          'div',
          { className: e.className },
          void 0,
          i(
            'section',
            {},
            void 0,
            h,
            v,
            i(
              'article',
              { className: 'message column is-success' },
              void 0,
              i(
                'div',
                { className: 'message-body' },
                void 0,
                i(
                  'p',
                  {},
                  void 0,
                  'Example Repo: ',
                  i(
                    c,
                    {
                      currentPage: e.currentPage,
                      target: '_blank',
                      to: 'https://github.com/hipstersmoothie/auto-chrome',
                      className: 'external-link'
                    },
                    void 0,
                    'here'
                  )
                )
              )
            ),
            i(
              'h2',
              { id: 'prerequisites' },
              void 0,
              'Prerequisites ',
              i(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#prerequisites',
                'aria-hidden': 'true'
              })
            ),
            i(
              'p',
              {},
              void 0,
              'To publish to the chrome web store you will need the following secrets set in your environment. See ',
              i(
                c,
                {
                  currentPage: e.currentPage,
                  target: '_blank',
                  to:
                    'https://github.com/DrewML/chrome-webstore-upload/blob/master/How%20to%20generate%20Google%20API%20keys.md',
                  className: 'external-link'
                },
                void 0,
                'here'
              ),
              ' for a guide one how to get these values.'
            ),
            f,
            i(
              'h2',
              { id: 'installation' },
              void 0,
              'Installation ',
              i(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#installation',
                'aria-hidden': 'true'
              })
            ),
            m,
            g,
            i(
              'h2',
              { id: 'usage' },
              void 0,
              'Usage ',
              i(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#usage',
                'aria-hidden': 'true'
              })
            ),
            b,
            y,
            j,
            N,
            P,
            w
          )
        );
      (t.default = O), (e.exports = t.default);
    },
    91: function(e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var r,
        o = s(a(3)),
        n = (function(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var a in e)
              if (Object.prototype.hasOwnProperty.call(e, a)) {
                var r =
                  Object.defineProperty && Object.getOwnPropertyDescriptor
                    ? Object.getOwnPropertyDescriptor(e, a)
                    : {};
                r.get || r.set ? Object.defineProperty(t, a, r) : (t[a] = e[a]);
              }
          return (t.default = e), t;
        })(a(0));
      s(a(2)), s(a(106));
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i(e, t, a, o) {
        r ||
          (r =
            ('function' == typeof Symbol &&
              Symbol.for &&
              Symbol.for('react.element')) ||
            60103);
        var n = e && e.defaultProps,
          s = arguments.length - 3;
        if ((t || 0 === s || (t = { children: void 0 }), t && n))
          for (var i in n) void 0 === t[i] && (t[i] = n[i]);
        else t || (t = n || {});
        if (1 === s) t.children = o;
        else if (s > 1) {
          for (var l = new Array(s), d = 0; d < s; d++) l[d] = arguments[d + 3];
          t.children = l;
        }
        return {
          $$typeof: r,
          type: e,
          key: void 0 === a ? null : '' + a,
          ref: null,
          props: t,
          _owner: null
        };
      }
      function l(e, t, a) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = a),
          e
        );
      }
      function d() {
        return (d =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var a = arguments[t];
              for (var r in a)
                Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function u(e, t) {
        if (null == e) return {};
        var a,
          r,
          o = (function(e, t) {
            if (null == e) return {};
            var a,
              r,
              o = {},
              n = Object.keys(e);
            for (r = 0; r < n.length; r++)
              (a = n[r]), t.indexOf(a) >= 0 || (o[a] = e[a]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          for (r = 0; r < n.length; r++)
            (a = n[r]),
              t.indexOf(a) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, a) &&
                  (o[a] = e[a]));
        }
        return o;
      }
      const c = e => {
        let { to: t } = e,
          a = u(e, ['to']);
        return t.includes('http')
          ? n.default.createElement('a', d({}, e, { href: t }))
          : ('#' === t[0] &&
              (t =
                o.default.join('/auto/', '../plugins/crates/README.html') + t),
            n.default.createElement(
              'a',
              d({}, a, {
                href: t,
                onClick: a => {
                  if ((a.preventDefault(), '#' === e.to)) return !1;
                  const r = new URL(o.default.join(window.location.origin, t));
                  window.history.pushState(
                    (e => ({
                      href: e.href,
                      pathname: e.pathname,
                      hash: e.hash,
                      query: e.query
                    }))(r),
                    null,
                    t
                  ),
                    e.onClick();
                  const n = new CustomEvent('changeLocation', { detail: r });
                  return dispatchEvent(n), !1;
                }
              })
            ));
      };
      c.defaultProps = { href: '', onClick: () => {} };
      const p = e => {
        var t, a;
        return (
          (a = t = class extends n.default.Component {
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
          l(t, 'defaultProps', { shouldLoad: !0 }),
          a
        );
      };
      p(() => a.e(31).then(a.bind(null, 107))),
        p(() => a.e(31).then(a.bind(null, 108)));
      var h = i('h1', {}, void 0, 'Crates Plugin'),
        v = i(
          'p',
          {},
          void 0,
          'This plugin is not included with the ',
          i('code', {}, void 0, 'auto'),
          ' CLI installed via NPM. To install:'
        ),
        f = i(
          'pre',
          {},
          void 0,
          i(
            'code',
            { className: 'language-sh' },
            void 0,
            'npm i --save-dev @auto-it/crates',
            i('br', {}),
            i('span', { className: 'hljs-comment' }, void 0, '# or'),
            i('br', {}),
            'yarn add -D @auto-it/crates',
            i('br', {})
          )
        ),
        m = i(
          'pre',
          {},
          void 0,
          i(
            'code',
            { className: 'language-json' },
            void 0,
            '{',
            i('br', {}),
            '  ',
            i('span', { className: 'hljs-attr' }, void 0, '"plugins"'),
            ': [',
            i('span', { className: 'hljs-string' }, void 0, '"crates"'),
            ']',
            i('br', {}),
            '}',
            i('br', {})
          )
        ),
        g = i('code', {}, void 0, '~/cargo/credentials'),
        b = i('code', {}, void 0, 'CARGO_REGISTRY_TOKEN');
      var y = e =>
        i(
          'div',
          { className: e.className },
          void 0,
          i(
            'section',
            {},
            void 0,
            h,
            i(
              'p',
              {},
              void 0,
              'Deploy Rust crates to ',
              i(
                c,
                {
                  currentPage: e.currentPage,
                  target: '_blank',
                  to: 'https://crates.io/',
                  className: 'external-link'
                },
                void 0,
                'crates.io'
              ),
              '.'
            ),
            i(
              'h2',
              { id: 'installation' },
              void 0,
              'Installation ',
              i(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#installation',
                'aria-hidden': 'true'
              })
            ),
            v,
            f,
            i(
              'h2',
              { id: 'usage' },
              void 0,
              'Usage ',
              i(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#usage',
                'aria-hidden': 'true'
              })
            ),
            m,
            i(
              'h2',
              { id: 'crates-project-configuration' },
              void 0,
              'Crates Project Configuration ',
              i(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#crates-project-configuration',
                'aria-hidden': 'true'
              })
            ),
            i(
              'p',
              {},
              void 0,
              'This plugin handles incrementing the crate version, but it requires that your crate be ready for publishing. You can view ',
              i(
                c,
                {
                  currentPage: e.currentPage,
                  target: '_blank',
                  to:
                    'https://doc.rust-lang.org/cargo/reference/publishing.html',
                  className: 'external-link'
                },
                void 0,
                'the publishing reference'
              ),
              ' for more information on that process.'
            ),
            i(
              'p',
              {},
              void 0,
              'When ran on a machine with ',
              g,
              ', that file will automatically be used by Cargo. For machines that do not have this file (like CI builds), the ',
              b,
              " environment variable is expected for Cargo's publish command as per the ",
              i(
                c,
                {
                  currentPage: e.currentPage,
                  target: '_blank',
                  to:
                    'https://doc.rust-lang.org/cargo/commands/cargo-publish.html#cargo_publish_options',
                  className: 'external-link'
                },
                void 0,
                'publish options'
              ),
              '.'
            )
          )
        );
      (t.default = y), (e.exports = t.default);
    },
    92: function(e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var r,
        o = s(a(3)),
        n = (function(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var a in e)
              if (Object.prototype.hasOwnProperty.call(e, a)) {
                var r =
                  Object.defineProperty && Object.getOwnPropertyDescriptor
                    ? Object.getOwnPropertyDescriptor(e, a)
                    : {};
                r.get || r.set ? Object.defineProperty(t, a, r) : (t[a] = e[a]);
              }
          return (t.default = e), t;
        })(a(0));
      s(a(2)), s(a(106));
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i(e, t, a, o) {
        r ||
          (r =
            ('function' == typeof Symbol &&
              Symbol.for &&
              Symbol.for('react.element')) ||
            60103);
        var n = e && e.defaultProps,
          s = arguments.length - 3;
        if ((t || 0 === s || (t = { children: void 0 }), t && n))
          for (var i in n) void 0 === t[i] && (t[i] = n[i]);
        else t || (t = n || {});
        if (1 === s) t.children = o;
        else if (s > 1) {
          for (var l = new Array(s), d = 0; d < s; d++) l[d] = arguments[d + 3];
          t.children = l;
        }
        return {
          $$typeof: r,
          type: e,
          key: void 0 === a ? null : '' + a,
          ref: null,
          props: t,
          _owner: null
        };
      }
      function l(e, t, a) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = a),
          e
        );
      }
      function d() {
        return (d =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var a = arguments[t];
              for (var r in a)
                Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function u(e, t) {
        if (null == e) return {};
        var a,
          r,
          o = (function(e, t) {
            if (null == e) return {};
            var a,
              r,
              o = {},
              n = Object.keys(e);
            for (r = 0; r < n.length; r++)
              (a = n[r]), t.indexOf(a) >= 0 || (o[a] = e[a]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          for (r = 0; r < n.length; r++)
            (a = n[r]),
              t.indexOf(a) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, a) &&
                  (o[a] = e[a]));
        }
        return o;
      }
      const c = e => {
        let { to: t } = e,
          a = u(e, ['to']);
        return t.includes('http')
          ? n.default.createElement('a', d({}, e, { href: t }))
          : ('#' === t[0] &&
              (t =
                o.default.join('/auto/', '../plugins/git-tag/README.html') + t),
            n.default.createElement(
              'a',
              d({}, a, {
                href: t,
                onClick: a => {
                  if ((a.preventDefault(), '#' === e.to)) return !1;
                  const r = new URL(o.default.join(window.location.origin, t));
                  window.history.pushState(
                    (e => ({
                      href: e.href,
                      pathname: e.pathname,
                      hash: e.hash,
                      query: e.query
                    }))(r),
                    null,
                    t
                  ),
                    e.onClick();
                  const n = new CustomEvent('changeLocation', { detail: r });
                  return dispatchEvent(n), !1;
                }
              })
            ));
      };
      c.defaultProps = { href: '', onClick: () => {} };
      const p = e => {
        var t, a;
        return (
          (a = t = class extends n.default.Component {
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
          l(t, 'defaultProps', { shouldLoad: !0 }),
          a
        );
      };
      p(() => a.e(31).then(a.bind(null, 107))),
        p(() => a.e(31).then(a.bind(null, 108)));
      var h = i('h1', {}, void 0, 'Git Tag Plugin'),
        v = i(
          'p',
          {},
          void 0,
          'Manage your projects version through just a git tag. This plugin is loaded by default when ',
          i('code', {}, void 0, 'auto'),
          ' is installed through the binaries released on GitHub.'
        ),
        f = i(
          'p',
          {},
          void 0,
          "If you're using this plugin you aren't releasing your code to any platform (npm, maven, etc). Instead you version calculations is done entirely though git tags."
        ),
        m = i('p', {}, void 0, 'This plugin only:'),
        g = i(
          'ol',
          {},
          void 0,
          i('li', {}, void 0, 'gets last git tag'),
          i('li', {}, void 0, 'bump it to new version'),
          i('li', {}, void 0, 'create new tags'),
          i('li', {}, void 0, 'push to github')
        ),
        b = i(
          'p',
          {},
          void 0,
          'This plugin is not included with the ',
          i('code', {}, void 0, 'auto'),
          ' CLI installed via NPM. To install:'
        ),
        y = i(
          'pre',
          {},
          void 0,
          i(
            'code',
            { className: 'language-sh' },
            void 0,
            'npm i --save-dev @auto-it/git-tag',
            i('br', {}),
            i('span', { className: 'hljs-comment' }, void 0, '# or'),
            i('br', {}),
            'yarn add -D @auto-it/git-tag',
            i('br', {})
          )
        ),
        j = i(
          'p',
          {},
          void 0,
          'Simply add the plugins to your auto configuration.'
        ),
        N = i(
          'pre',
          {},
          void 0,
          i(
            'code',
            { className: 'language-json' },
            void 0,
            '{',
            i('br', {}),
            '  ',
            i('span', { className: 'hljs-attr' }, void 0, '"plugins"'),
            ': [',
            i('span', { className: 'hljs-string' }, void 0, '"git-tag"'),
            ']',
            i('br', {}),
            '}',
            i('br', {})
          )
        );
      var P = e =>
        i(
          'div',
          { className: e.className },
          void 0,
          i(
            'section',
            {},
            void 0,
            h,
            v,
            f,
            m,
            g,
            i(
              'h2',
              { id: 'installation' },
              void 0,
              'Installation ',
              i(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#installation',
                'aria-hidden': 'true'
              })
            ),
            b,
            y,
            i(
              'h2',
              { id: 'usage' },
              void 0,
              'Usage ',
              i(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#usage',
                'aria-hidden': 'true'
              })
            ),
            j,
            N
          )
        );
      (t.default = P), (e.exports = t.default);
    },
    93: function(e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var r,
        o = s(a(3)),
        n = (function(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var a in e)
              if (Object.prototype.hasOwnProperty.call(e, a)) {
                var r =
                  Object.defineProperty && Object.getOwnPropertyDescriptor
                    ? Object.getOwnPropertyDescriptor(e, a)
                    : {};
                r.get || r.set ? Object.defineProperty(t, a, r) : (t[a] = e[a]);
              }
          return (t.default = e), t;
        })(a(0));
      s(a(2)), s(a(106));
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i(e, t, a, o) {
        r ||
          (r =
            ('function' == typeof Symbol &&
              Symbol.for &&
              Symbol.for('react.element')) ||
            60103);
        var n = e && e.defaultProps,
          s = arguments.length - 3;
        if ((t || 0 === s || (t = { children: void 0 }), t && n))
          for (var i in n) void 0 === t[i] && (t[i] = n[i]);
        else t || (t = n || {});
        if (1 === s) t.children = o;
        else if (s > 1) {
          for (var l = new Array(s), d = 0; d < s; d++) l[d] = arguments[d + 3];
          t.children = l;
        }
        return {
          $$typeof: r,
          type: e,
          key: void 0 === a ? null : '' + a,
          ref: null,
          props: t,
          _owner: null
        };
      }
      function l(e, t, a) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = a),
          e
        );
      }
      function d() {
        return (d =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var a = arguments[t];
              for (var r in a)
                Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function u(e, t) {
        if (null == e) return {};
        var a,
          r,
          o = (function(e, t) {
            if (null == e) return {};
            var a,
              r,
              o = {},
              n = Object.keys(e);
            for (r = 0; r < n.length; r++)
              (a = n[r]), t.indexOf(a) >= 0 || (o[a] = e[a]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          for (r = 0; r < n.length; r++)
            (a = n[r]),
              t.indexOf(a) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, a) &&
                  (o[a] = e[a]));
        }
        return o;
      }
      const c = e => {
        let { to: t } = e,
          a = u(e, ['to']);
        return t.includes('http')
          ? n.default.createElement('a', d({}, e, { href: t }))
          : ('#' === t[0] &&
              (t = o.default.join('/auto/', '../plugins/npm/README.html') + t),
            n.default.createElement(
              'a',
              d({}, a, {
                href: t,
                onClick: a => {
                  if ((a.preventDefault(), '#' === e.to)) return !1;
                  const r = new URL(o.default.join(window.location.origin, t));
                  window.history.pushState(
                    (e => ({
                      href: e.href,
                      pathname: e.pathname,
                      hash: e.hash,
                      query: e.query
                    }))(r),
                    null,
                    t
                  ),
                    e.onClick();
                  const n = new CustomEvent('changeLocation', { detail: r });
                  return dispatchEvent(n), !1;
                }
              })
            ));
      };
      c.defaultProps = { href: '', onClick: () => {} };
      const p = e => {
        var t, a;
        return (
          (a = t = class extends n.default.Component {
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
          l(t, 'defaultProps', { shouldLoad: !0 }),
          a
        );
      };
      p(() => a.e(31).then(a.bind(null, 107))),
        p(() => a.e(31).then(a.bind(null, 108)));
      var h = i('h1', {}, void 0, 'NPM Plugin'),
        v = i(
          'p',
          {},
          void 0,
          'Publish to NPM. Works in both a monorepo setting and for a single package. This plugin is loaded by default when ',
          i('code', {}, void 0, 'auto'),
          ' is installed through ',
          i('code', {}, void 0, 'npm'),
          '. If you configure ',
          i('code', {}, void 0, 'auto'),
          ' to use any other plugin this will be lost. So you must add the ',
          i('code', {}, void 0, 'npm'),
          ' plugin to your plugins array if you still want NPM functionality.'
        ),
        f = i(
          'p',
          {},
          void 0,
          'To publish to npm you will need an ',
          i('code', {}, void 0, 'NPM_TOKEN'),
          ' set in your environment.'
        ),
        m = i(
          'p',
          {},
          void 0,
          'This plugin is included with the ',
          i('code', {}, void 0, 'auto'),
          ' CLI so you do not have to install it. To install if you are using the ',
          i('code', {}, void 0, 'auto'),
          ' API directly:'
        ),
        g = i(
          'pre',
          {},
          void 0,
          i(
            'code',
            { className: 'language-sh' },
            void 0,
            'npm i --save-dev @auto-it/npm',
            i('br', {}),
            i('span', { className: 'hljs-comment' }, void 0, '# or'),
            i('br', {}),
            'yarn add -D @auto-it/npm',
            i('br', {})
          )
        ),
        b = i(
          'pre',
          {},
          void 0,
          i(
            'code',
            { className: 'language-json' },
            void 0,
            '{',
            i('br', {}),
            '  ',
            i('span', { className: 'hljs-attr' }, void 0, '"plugins"'),
            ': [',
            i('br', {}),
            '    ',
            i('span', { className: 'hljs-string' }, void 0, '"npm"'),
            ',',
            i('br', {}),
            '    // or with options',
            i('br', {}),
            '    [',
            i('span', { className: 'hljs-string' }, void 0, '"npm"'),
            ', { ',
            i('span', { className: 'hljs-attr' }, void 0, '"forcePublish"'),
            ': ',
            i('span', { className: 'hljs-literal' }, void 0, 'false'),
            ' }]',
            i('br', {}),
            '    // other plugins',
            i('br', {}),
            '  ]',
            i('br', {}),
            '}',
            i('br', {})
          )
        ),
        y = i('code', {}, void 0, 'npm'),
        j = i('code', {}, void 0, 'lerna'),
        N = i('code', {}, void 0, 'independent'),
        P = i('code', {}, void 0, 'fixed'),
        w = i('code', {}, void 0, 'auto'),
        O = i(
          'p',
          {},
          void 0,
          'When running the ',
          i('code', {}, void 0, 'shipit'),
          ' command auto will try to set your ',
          i('code', {}, void 0, '.npmrc'),
          ' token while publishing. To disable this feature you must set the ',
          i('code', {}, void 0, 'setRcToken'),
          ' to false.'
        ),
        k = i(
          'pre',
          {},
          void 0,
          i(
            'code',
            { className: 'language-json' },
            void 0,
            '{',
            i('br', {}),
            '  ',
            i('span', { className: 'hljs-attr' }, void 0, '"plugins"'),
            ': [',
            i('br', {}),
            '    [',
            i('br', {}),
            '      ',
            i('span', { className: 'hljs-string' }, void 0, '"npm"'),
            ',',
            i('br', {}),
            '      {',
            i('br', {}),
            '        ',
            i('span', { className: 'hljs-attr' }, void 0, '"setRcToken"'),
            ': ',
            i('span', { className: 'hljs-literal' }, void 0, 'false'),
            i('br', {}),
            '      }',
            i('br', {}),
            '    ]',
            i('br', {}),
            '  ]',
            i('br', {}),
            '}',
            i('br', {})
          )
        ),
        E = i(
          'p',
          {},
          void 0,
          'By default ',
          i('code', {}, void 0, 'auto'),
          ' will force publish all packages for monorepos. To disable this behavior you must set the ',
          i('code', {}, void 0, 'setRcToken'),
          ' to false.'
        ),
        C = i(
          'pre',
          {},
          void 0,
          i(
            'code',
            { className: 'language-json' },
            void 0,
            '{',
            i('br', {}),
            '  ',
            i('span', { className: 'hljs-attr' }, void 0, '"plugins"'),
            ': [',
            i('br', {}),
            '    [',
            i('br', {}),
            '      ',
            i('span', { className: 'hljs-string' }, void 0, '"npm"'),
            ',',
            i('br', {}),
            '      {',
            i('br', {}),
            '        ',
            i('span', { className: 'hljs-attr' }, void 0, '"forcePublish"'),
            ': ',
            i('span', { className: 'hljs-literal' }, void 0, 'false'),
            i('br', {}),
            '      }',
            i('br', {}),
            '    ]',
            i('br', {}),
            '  ]',
            i('br', {}),
            '}',
            i('br', {})
          )
        ),
        _ = i(
          'pre',
          {},
          void 0,
          i(
            'code',
            { className: 'language-json' },
            void 0,
            '{',
            i('br', {}),
            '  ',
            i('span', { className: 'hljs-attr' }, void 0, '"plugins"'),
            ': [',
            i('br', {}),
            '    [',
            i('br', {}),
            '      ',
            i('span', { className: 'hljs-string' }, void 0, '"npm"'),
            ',',
            i('br', {}),
            '      {',
            i('br', {}),
            '        ',
            i('span', { className: 'hljs-attr' }, void 0, '"exact"'),
            ': ',
            i('span', { className: 'hljs-literal' }, void 0, 'true'),
            i('br', {}),
            '      }',
            i('br', {}),
            '    ]',
            i('br', {}),
            '  ]',
            i('br', {}),
            '}',
            i('br', {})
          )
        ),
        S = i(
          'p',
          {},
          void 0,
          i('code', {}, void 0, 'auto'),
          ' will create a changelog for each sub-package in a monorepo. You can disable this behavior by using the ',
          i('code', {}, void 0, 'subPackageChangelogs'),
          ' option.'
        ),
        L = i(
          'pre',
          {},
          void 0,
          i(
            'code',
            { className: 'language-json' },
            void 0,
            '{',
            i('br', {}),
            '  ',
            i('span', { className: 'hljs-attr' }, void 0, '"plugins"'),
            ': [',
            i('br', {}),
            '    [',
            i('br', {}),
            '      ',
            i('span', { className: 'hljs-string' }, void 0, '"npm"'),
            ',',
            i('br', {}),
            '      {',
            i('br', {}),
            '        ',
            i(
              'span',
              { className: 'hljs-attr' },
              void 0,
              '"subPackageChangelogs"'
            ),
            ': ',
            i('span', { className: 'hljs-literal' }, void 0, 'false'),
            i('br', {}),
            '      }',
            i('br', {}),
            '    ]',
            i('br', {}),
            '  ]',
            i('br', {}),
            '}',
            i('br', {})
          )
        ),
        M = i(
          'p',
          {},
          void 0,
          'Publishing canary versions comes with some security risks. If your project is private you have nothing to worry about and can skip these, but if your project is open source there are some security holes.'
        ),
        x = i(
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
              'This feature works pretty easily/well for single packages. In a monorepo we have to deal with a lot more, and this options should be treated as experimental.'
            )
          )
        ),
        T = i(
          'ol',
          {},
          void 0,
          i(
            'li',
            {},
            void 0,
            'Create a test scope that you publish canaries under (ex: ',
            i('code', {}, void 0, '@auto-canary'),
            ' or ',
            i('code', {}, void 0, '@auto-test'),
            ')'
          ),
          i(
            'li',
            {},
            void 0,
            'Create a user that only has access to that scope'
          ),
          i(
            'li',
            {},
            void 0,
            'Set the default ',
            i('code', {}, void 0, 'NPM_TOKEN'),
            ' to a token that can publish to that scope (this is used for any pull request)'
          ),
          i(
            'li',
            {},
            void 0,
            'Set up a ',
            i('code', {}, void 0, 'secure'),
            ' token that is only accessible on the main fork (still named ',
            i('code', {}, void 0, 'NPM_TOKEN'),
            ')'
          ),
          i('li', {}, void 0, 'Set up alias (only monorepos)')
        ),
        D = i(
          'p',
          {},
          void 0,
          'Step 3 might not be possible on your build platform.'
        ),
        I = i(
          'p',
          {},
          void 0,
          'The following are the ways the ',
          i('code', {}, void 0, 'auto'),
          ' team knows how to do it. If you do not see the method for you build platform, please make a pull request!'
        ),
        R = i('p', {}, void 0, i('strong', {}, void 0, 'Platform Solutions:')),
        A = i(
          'pre',
          {},
          void 0,
          i(
            'code',
            { className: 'language-json' },
            void 0,
            '{',
            i('br', {}),
            '  ',
            i('span', { className: 'hljs-attr' }, void 0, '"plugins"'),
            ': [',
            i('br', {}),
            '    [',
            i('br', {}),
            '      ',
            i('span', { className: 'hljs-string' }, void 0, '"npm"'),
            ',',
            i('br', {}),
            '      {',
            i('br', {}),
            '        ',
            i('span', { className: 'hljs-attr' }, void 0, '"canaryScope"'),
            ': ',
            i('span', { className: 'hljs-string' }, void 0, '"@auto-canary"'),
            i('br', {}),
            '      }',
            i('br', {}),
            '    ]',
            i('br', {}),
            '  ]',
            i('br', {}),
            '}',
            i('br', {})
          )
        ),
        q = i(
          'p',
          {},
          void 0,
          'If you are managing a non-monorepo you do not have to do anything for this step! If you manage a monorepo we still have to do handle our packages importing each other. Since we just changed the name of the package all imports to our packages are now broken!'
        ),
        U = i(
          'p',
          {},
          void 0,
          'There are multiple ways to make this work and the solution might be different depending on your build target.'
        ),
        $ = i('code', {}, void 0, 'auto');
      var B = e =>
        i(
          'div',
          { className: e.className },
          void 0,
          i(
            'section',
            {},
            void 0,
            h,
            v,
            i(
              'h2',
              { id: 'prerequisites' },
              void 0,
              'Prerequisites ',
              i(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#prerequisites',
                'aria-hidden': 'true'
              })
            ),
            f,
            i(
              'h2',
              { id: 'installation' },
              void 0,
              'Installation ',
              i(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#installation',
                'aria-hidden': 'true'
              })
            ),
            m,
            g,
            i(
              'h2',
              { id: 'usage' },
              void 0,
              'Usage ',
              i(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#usage',
                'aria-hidden': 'true'
              })
            ),
            b,
            i(
              'h2',
              { id: 'monorepo-usage' },
              void 0,
              'Monorepo Usage ',
              i(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#monorepo-usage',
                'aria-hidden': 'true'
              })
            ),
            i(
              'p',
              {},
              void 0,
              'The ',
              y,
              ' plugin works out of the box with ',
              j,
              ' in both ',
              i(
                c,
                {
                  currentPage: e.currentPage,
                  target: '_blank',
                  to: 'https://github.com/lerna/lerna#independent-mode',
                  className: 'external-link'
                },
                void 0,
                N
              ),
              ' and ',
              i(
                c,
                {
                  currentPage: e.currentPage,
                  target: '_blank',
                  to: 'https://github.com/lerna/lerna#fixedlocked-mode-default',
                  className: 'external-link'
                },
                void 0,
                P
              ),
              ' mode. ',
              w,
              ' works on a repo basis and should be run from the root of the repo, not on each sub-package. No additional setup is required.'
            ),
            i(
              'h2',
              { id: 'options' },
              void 0,
              'Options ',
              i(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#options',
                'aria-hidden': 'true'
              })
            ),
            i(
              'h3',
              { id: 'setrctoken' },
              void 0,
              'setRcToken ',
              i(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#setrctoken',
                'aria-hidden': 'true'
              })
            ),
            O,
            k,
            i(
              'h3',
              { id: 'forcepublish' },
              void 0,
              'forcePublish ',
              i(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#forcepublish',
                'aria-hidden': 'true'
              })
            ),
            E,
            C,
            i(
              'h3',
              { id: 'exact' },
              void 0,
              'exact ',
              i(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#exact',
                'aria-hidden': 'true'
              })
            ),
            i(
              'p',
              {},
              void 0,
              'To force all packages publish with ',
              i(
                c,
                {
                  currentPage: e.currentPage,
                  target: '_blank',
                  to:
                    'https://github.com/lerna/lerna/blob/master/commands/version/README.md#--exact',
                  className: 'external-link'
                },
                void 0,
                'exact versions'
              ),
              '.'
            ),
            _,
            i(
              'h3',
              { id: 'subpackagechangelogs' },
              void 0,
              'subPackageChangelogs ',
              i(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#subpackagechangelogs',
                'aria-hidden': 'true'
              })
            ),
            S,
            L,
            i(
              'h3',
              { id: 'canaryscope' },
              void 0,
              'canaryScope ',
              i(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#canaryscope',
                'aria-hidden': 'true'
              })
            ),
            M,
            x,
            i(
              'h4',
              { id: 'setup' },
              void 0,
              'Setup ',
              i(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#setup',
                'aria-hidden': 'true'
              })
            ),
            T,
            D,
            I,
            R,
            i(
              'ul',
              {},
              void 0,
              i(
                'li',
                {},
                void 0,
                i(
                  c,
                  {
                    currentPage: e.currentPage,
                    target: '_blank',
                    to: 'https://circleci.com/docs/2.0/contexts/',
                    className: 'external-link'
                  },
                  void 0,
                  'CircleCI Context'
                ),
                ' - Contexts provide a mechanism for securing and sharing environment variables across projects. The environment variables are defined as name/value pairs and are injected at runtime.'
              )
            ),
            A,
            i(
              'h5',
              { id: 'set-up-alias' },
              void 0,
              'Set up alias ',
              i(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#set-up-alias',
                'aria-hidden': 'true'
              })
            ),
            q,
            U,
            i(
              'ul',
              {},
              void 0,
              i(
                'li',
                {},
                void 0,
                i(
                  c,
                  {
                    currentPage: e.currentPage,
                    target: '_blank',
                    to: 'https://www.npmjs.com/package/module-alias',
                    className: 'external-link'
                  },
                  void 0,
                  'module-alias'
                ),
                " - Modifiy node's require for your canary deploys (This is what ",
                $,
                ' uses). Useful for node packages'
              ),
              i(
                'li',
                {},
                void 0,
                i(
                  c,
                  {
                    currentPage: e.currentPage,
                    target: '_blank',
                    to: 'https://webpack.js.org/configuration/resolve/',
                    className: 'external-link'
                  },
                  void 0,
                  'Webpack Aliases'
                ),
                ' Modify scoped requires for webpack based projects.'
              ),
              i(
                'li',
                {},
                void 0,
                i(
                  c,
                  {
                    currentPage: e.currentPage,
                    target: '_blank',
                    to:
                      'https://www.npmjs.com/package/babel-plugin-module-resolver',
                    className: 'external-link'
                  },
                  void 0,
                  'babel-plugin-module-resolver'
                ),
                ' - A Babel plugin to add a new resolver for your modules when compiling your code using Babel.'
              )
            )
          )
        );
      (t.default = B), (e.exports = t.default);
    },
    94: function(e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var r,
        o = s(a(3)),
        n = (function(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var a in e)
              if (Object.prototype.hasOwnProperty.call(e, a)) {
                var r =
                  Object.defineProperty && Object.getOwnPropertyDescriptor
                    ? Object.getOwnPropertyDescriptor(e, a)
                    : {};
                r.get || r.set ? Object.defineProperty(t, a, r) : (t[a] = e[a]);
              }
          return (t.default = e), t;
        })(a(0));
      s(a(2)), s(a(106));
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i(e, t, a, o) {
        r ||
          (r =
            ('function' == typeof Symbol &&
              Symbol.for &&
              Symbol.for('react.element')) ||
            60103);
        var n = e && e.defaultProps,
          s = arguments.length - 3;
        if ((t || 0 === s || (t = { children: void 0 }), t && n))
          for (var i in n) void 0 === t[i] && (t[i] = n[i]);
        else t || (t = n || {});
        if (1 === s) t.children = o;
        else if (s > 1) {
          for (var l = new Array(s), d = 0; d < s; d++) l[d] = arguments[d + 3];
          t.children = l;
        }
        return {
          $$typeof: r,
          type: e,
          key: void 0 === a ? null : '' + a,
          ref: null,
          props: t,
          _owner: null
        };
      }
      function l(e, t, a) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = a),
          e
        );
      }
      function d() {
        return (d =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var a = arguments[t];
              for (var r in a)
                Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function u(e, t) {
        if (null == e) return {};
        var a,
          r,
          o = (function(e, t) {
            if (null == e) return {};
            var a,
              r,
              o = {},
              n = Object.keys(e);
            for (r = 0; r < n.length; r++)
              (a = n[r]), t.indexOf(a) >= 0 || (o[a] = e[a]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          for (r = 0; r < n.length; r++)
            (a = n[r]),
              t.indexOf(a) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, a) &&
                  (o[a] = e[a]));
        }
        return o;
      }
      const c = e => {
        let { to: t } = e,
          a = u(e, ['to']);
        return t.includes('http')
          ? n.default.createElement('a', d({}, e, { href: t }))
          : ('#' === t[0] &&
              (t =
                o.default.join('/auto/', '../plugins/maven/README.html') + t),
            n.default.createElement(
              'a',
              d({}, a, {
                href: t,
                onClick: a => {
                  if ((a.preventDefault(), '#' === e.to)) return !1;
                  const r = new URL(o.default.join(window.location.origin, t));
                  window.history.pushState(
                    (e => ({
                      href: e.href,
                      pathname: e.pathname,
                      hash: e.hash,
                      query: e.query
                    }))(r),
                    null,
                    t
                  ),
                    e.onClick();
                  const n = new CustomEvent('changeLocation', { detail: r });
                  return dispatchEvent(n), !1;
                }
              })
            ));
      };
      c.defaultProps = { href: '', onClick: () => {} };
      const p = e => {
        var t, a;
        return (
          (a = t = class extends n.default.Component {
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
          l(t, 'defaultProps', { shouldLoad: !0 }),
          a
        );
      };
      p(() => a.e(31).then(a.bind(null, 107))),
        p(() => a.e(31).then(a.bind(null, 108)));
      var h = i('h1', {}, void 0, 'Maven Plugin'),
        v = i(
          'p',
          {},
          void 0,
          'This plugin is not included with the ',
          i('code', {}, void 0, 'auto'),
          ' CLI installed via NPM. To install:'
        ),
        f = i(
          'pre',
          {},
          void 0,
          i(
            'code',
            { className: 'language-sh' },
            void 0,
            'npm i --save-dev @auto-it/maven',
            i('br', {}),
            i('span', { className: 'hljs-comment' }, void 0, '# or'),
            i('br', {}),
            'yarn add -D @auto-it/maven',
            i('br', {})
          )
        ),
        m = i(
          'pre',
          {},
          void 0,
          i(
            'code',
            { className: 'language-json' },
            void 0,
            '{',
            i('br', {}),
            '  ',
            i('span', { className: 'hljs-attr' }, void 0, '"plugins"'),
            ': [',
            i('span', { className: 'hljs-string' }, void 0, '"maven"'),
            ']',
            i('br', {}),
            '}',
            i('br', {})
          )
        ),
        g = i(
          'p',
          {},
          void 0,
          'Your project must be using the maven release plugin. Make sure the the latest ',
          i('code', {}, void 0, 'maven-release-plugin'),
          ' is in your ',
          i('code', {}, void 0, 'pom.xml'),
          '.'
        ),
        b = i(
          'pre',
          {},
          void 0,
          i(
            'code',
            { className: 'language-xml' },
            void 0,
            i(
              'span',
              { className: 'hljs-tag' },
              void 0,
              '<',
              i('span', { className: 'hljs-name' }, void 0, 'plugin'),
              '>'
            ),
            i('br', {}),
            '  ',
            i(
              'span',
              { className: 'hljs-tag' },
              void 0,
              '<',
              i('span', { className: 'hljs-name' }, void 0, 'groupId'),
              '>'
            ),
            'org.apache.maven.plugins',
            i(
              'span',
              { className: 'hljs-tag' },
              void 0,
              '</',
              i('span', { className: 'hljs-name' }, void 0, 'groupId'),
              '>'
            ),
            i('br', {}),
            '  ',
            i(
              'span',
              { className: 'hljs-tag' },
              void 0,
              '<',
              i('span', { className: 'hljs-name' }, void 0, 'artifactId'),
              '>'
            ),
            'maven-release-plugin',
            i(
              'span',
              { className: 'hljs-tag' },
              void 0,
              '</',
              i('span', { className: 'hljs-name' }, void 0, 'artifactId'),
              '>'
            ),
            i('br', {}),
            '  ',
            i(
              'span',
              { className: 'hljs-tag' },
              void 0,
              '<',
              i('span', { className: 'hljs-name' }, void 0, 'version'),
              '>'
            ),
            '2.5.3',
            i(
              'span',
              { className: 'hljs-tag' },
              void 0,
              '</',
              i('span', { className: 'hljs-name' }, void 0, 'version'),
              '>'
            ),
            i('br', {}),
            '  ',
            i(
              'span',
              { className: 'hljs-tag' },
              void 0,
              '<',
              i('span', { className: 'hljs-name' }, void 0, 'configuration'),
              '>'
            ),
            i('br', {}),
            '    ',
            i(
              'span',
              { className: 'hljs-tag' },
              void 0,
              '<',
              i('span', { className: 'hljs-name' }, void 0, 'preparationGoals'),
              '>'
            ),
            'initialize',
            i(
              'span',
              { className: 'hljs-tag' },
              void 0,
              '</',
              i('span', { className: 'hljs-name' }, void 0, 'preparationGoals'),
              '>'
            ),
            i('br', {}),
            '    ',
            i(
              'span',
              { className: 'hljs-tag' },
              void 0,
              '<',
              i('span', { className: 'hljs-name' }, void 0, 'goals'),
              '>'
            ),
            'deploy',
            i(
              'span',
              { className: 'hljs-tag' },
              void 0,
              '</',
              i('span', { className: 'hljs-name' }, void 0, 'goals'),
              '>'
            ),
            i('br', {}),
            '  ',
            i(
              'span',
              { className: 'hljs-tag' },
              void 0,
              '</',
              i('span', { className: 'hljs-name' }, void 0, 'configuration'),
              '>'
            ),
            i('br', {}),
            i(
              'span',
              { className: 'hljs-tag' },
              void 0,
              '</',
              i('span', { className: 'hljs-name' }, void 0, 'plugin'),
              i('br', {})
            )
          )
        ),
        y = i(
          'p',
          {},
          void 0,
          'You will also need all of the following configuration blocks for all parts of ',
          i('code', {}, void 0, 'auto'),
          ' to function:'
        ),
        j = i(
          'ol',
          {},
          void 0,
          i(
            'li',
            {},
            void 0,
            i('p', {}, void 0, 'Author'),
            i(
              'pre',
              {},
              void 0,
              i(
                'code',
                { className: 'language-xml' },
                void 0,
                i(
                  'span',
                  { className: 'hljs-tag' },
                  void 0,
                  '<',
                  i('span', { className: 'hljs-name' }, void 0, 'developers'),
                  '>'
                ),
                i('br', {}),
                '  ',
                i(
                  'span',
                  { className: 'hljs-tag' },
                  void 0,
                  '<',
                  i('span', { className: 'hljs-name' }, void 0, 'developer'),
                  '>'
                ),
                i('br', {}),
                '    ',
                i(
                  'span',
                  { className: 'hljs-tag' },
                  void 0,
                  '<',
                  i('span', { className: 'hljs-name' }, void 0, 'name'),
                  '>'
                ),
                'Andrew Lisowski',
                i(
                  'span',
                  { className: 'hljs-tag' },
                  void 0,
                  '</',
                  i('span', { className: 'hljs-name' }, void 0, 'name'),
                  '>'
                ),
                i('br', {}),
                '    ',
                i(
                  'span',
                  { className: 'hljs-tag' },
                  void 0,
                  '<',
                  i('span', { className: 'hljs-name' }, void 0, 'email'),
                  '>'
                ),
                'test@email.com',
                i(
                  'span',
                  { className: 'hljs-tag' },
                  void 0,
                  '</',
                  i('span', { className: 'hljs-name' }, void 0, 'email'),
                  '>'
                ),
                i('br', {}),
                '  ',
                i(
                  'span',
                  { className: 'hljs-tag' },
                  void 0,
                  '</',
                  i('span', { className: 'hljs-name' }, void 0, 'developer'),
                  '>'
                ),
                i('br', {}),
                i(
                  'span',
                  { className: 'hljs-tag' },
                  void 0,
                  '</',
                  i('span', { className: 'hljs-name' }, void 0, 'developers'),
                  '>'
                ),
                i('br', {})
              )
            )
          ),
          i(
            'li',
            {},
            void 0,
            i('p', {}, void 0, 'SCM'),
            i(
              'pre',
              {},
              void 0,
              i(
                'code',
                { className: 'language-xml' },
                void 0,
                i(
                  'span',
                  { className: 'hljs-tag' },
                  void 0,
                  '<',
                  i('span', { className: 'hljs-name' }, void 0, 'scm'),
                  '>'
                ),
                i('br', {}),
                '  ',
                i(
                  'span',
                  { className: 'hljs-tag' },
                  void 0,
                  '<',
                  i('span', { className: 'hljs-name' }, void 0, 'connection'),
                  '>'
                ),
                'scm:git:https://github.com/Fuego-Tools/java-test-project.git',
                i(
                  'span',
                  { className: 'hljs-tag' },
                  void 0,
                  '</',
                  i('span', { className: 'hljs-name' }, void 0, 'connection'),
                  '>'
                ),
                i('br', {}),
                '  ',
                i(
                  'span',
                  { className: 'hljs-tag' },
                  void 0,
                  '<',
                  i('span', { className: 'hljs-name' }, void 0, 'url'),
                  '>'
                ),
                'https://github.com/Fuego-Tools/java-test-project',
                i(
                  'span',
                  { className: 'hljs-tag' },
                  void 0,
                  '</',
                  i('span', { className: 'hljs-name' }, void 0, 'url'),
                  '>'
                ),
                i('br', {}),
                '  ',
                i(
                  'span',
                  { className: 'hljs-tag' },
                  void 0,
                  '<',
                  i('span', { className: 'hljs-name' }, void 0, 'tag'),
                  '>'
                ),
                'HEAD',
                i(
                  'span',
                  { className: 'hljs-tag' },
                  void 0,
                  '</',
                  i('span', { className: 'hljs-name' }, void 0, 'tag'),
                  '>'
                ),
                i('br', {}),
                i(
                  'span',
                  { className: 'hljs-tag' },
                  void 0,
                  '</',
                  i('span', { className: 'hljs-name' }, void 0, 'scm'),
                  '>'
                ),
                i('br', {})
              )
            )
          ),
          i(
            'li',
            {},
            void 0,
            i('p', {}, void 0, 'Version'),
            i(
              'pre',
              {},
              void 0,
              i(
                'code',
                { className: 'language-xml' },
                void 0,
                i(
                  'span',
                  { className: 'hljs-tag' },
                  void 0,
                  '<',
                  i('span', { className: 'hljs-name' }, void 0, 'version'),
                  '>'
                ),
                '1.0.0-SNAPSHOT',
                i(
                  'span',
                  { className: 'hljs-tag' },
                  void 0,
                  '</',
                  i('span', { className: 'hljs-name' }, void 0, 'version'),
                  '>'
                ),
                i('br', {})
              )
            )
          )
        );
      var N = e =>
        i(
          'div',
          { className: e.className },
          void 0,
          i(
            'section',
            {},
            void 0,
            h,
            i(
              'p',
              {},
              void 0,
              'Release a Java project to a ',
              i(
                c,
                {
                  currentPage: e.currentPage,
                  target: '_blank',
                  to: 'https://maven.apache.org/',
                  className: 'external-link'
                },
                void 0,
                'maven'
              ),
              ' instance.'
            ),
            i(
              'h2',
              { id: 'installation' },
              void 0,
              'Installation ',
              i(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#installation',
                'aria-hidden': 'true'
              })
            ),
            v,
            f,
            i(
              'h2',
              { id: 'usage' },
              void 0,
              'Usage ',
              i(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#usage',
                'aria-hidden': 'true'
              })
            ),
            m,
            i(
              'h2',
              { id: 'maven-project-configuration' },
              void 0,
              'Maven Project Configuration ',
              i(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#maven-project-configuration',
                'aria-hidden': 'true'
              })
            ),
            g,
            b,
            y,
            j
          )
        );
      (t.default = N), (e.exports = t.default);
    },
    95: function(e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var r,
        o = s(a(3)),
        n = (function(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var a in e)
              if (Object.prototype.hasOwnProperty.call(e, a)) {
                var r =
                  Object.defineProperty && Object.getOwnPropertyDescriptor
                    ? Object.getOwnPropertyDescriptor(e, a)
                    : {};
                r.get || r.set ? Object.defineProperty(t, a, r) : (t[a] = e[a]);
              }
          return (t.default = e), t;
        })(a(0));
      s(a(2)), s(a(106));
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i(e, t, a, o) {
        r ||
          (r =
            ('function' == typeof Symbol &&
              Symbol.for &&
              Symbol.for('react.element')) ||
            60103);
        var n = e && e.defaultProps,
          s = arguments.length - 3;
        if ((t || 0 === s || (t = { children: void 0 }), t && n))
          for (var i in n) void 0 === t[i] && (t[i] = n[i]);
        else t || (t = n || {});
        if (1 === s) t.children = o;
        else if (s > 1) {
          for (var l = new Array(s), d = 0; d < s; d++) l[d] = arguments[d + 3];
          t.children = l;
        }
        return {
          $$typeof: r,
          type: e,
          key: void 0 === a ? null : '' + a,
          ref: null,
          props: t,
          _owner: null
        };
      }
      function l(e, t, a) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = a),
          e
        );
      }
      function d() {
        return (d =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var a = arguments[t];
              for (var r in a)
                Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function u(e, t) {
        if (null == e) return {};
        var a,
          r,
          o = (function(e, t) {
            if (null == e) return {};
            var a,
              r,
              o = {},
              n = Object.keys(e);
            for (r = 0; r < n.length; r++)
              (a = n[r]), t.indexOf(a) >= 0 || (o[a] = e[a]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          for (r = 0; r < n.length; r++)
            (a = n[r]),
              t.indexOf(a) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, a) &&
                  (o[a] = e[a]));
        }
        return o;
      }
      const c = e => {
        let { to: t } = e,
          a = u(e, ['to']);
        return t.includes('http')
          ? n.default.createElement('a', d({}, e, { href: t }))
          : ('#' === t[0] &&
              (t =
                o.default.join(
                  '/auto/',
                  '../plugins/all-contributors/README.html'
                ) + t),
            n.default.createElement(
              'a',
              d({}, a, {
                href: t,
                onClick: a => {
                  if ((a.preventDefault(), '#' === e.to)) return !1;
                  const r = new URL(o.default.join(window.location.origin, t));
                  window.history.pushState(
                    (e => ({
                      href: e.href,
                      pathname: e.pathname,
                      hash: e.hash,
                      query: e.query
                    }))(r),
                    null,
                    t
                  ),
                    e.onClick();
                  const n = new CustomEvent('changeLocation', { detail: r });
                  return dispatchEvent(n), !1;
                }
              })
            ));
      };
      c.defaultProps = { href: '', onClick: () => {} };
      const p = e => {
        var t, a;
        return (
          (a = t = class extends n.default.Component {
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
          l(t, 'defaultProps', { shouldLoad: !0 }),
          a
        );
      };
      p(() => a.e(31).then(a.bind(null, 107))),
        p(() => a.e(31).then(a.bind(null, 108)));
      var h = i('h1', {}, void 0, 'All Contributors Plugin'),
        v = i(
          'p',
          {},
          void 0,
          'Automatically add contributors as changelogs are produced.'
        ),
        f = i(
          'ul',
          {},
          void 0,
          i(
            'li',
            {},
            void 0,
            '📖 ',
            i('code', {}, void 0, 'doc'),
            ' - Edits to any README ',
            i(
              'code',
              {},
              void 0,
              "['**/*.mdx', '**/*.md', '**/docs/**/*', '**/documentation/**/*']"
            )
          ),
          i(
            'li',
            {},
            void 0,
            '💡 ',
            i('code', {}, void 0, 'example'),
            ' - Edits to ',
            i('code', {}, void 0, "['**/*.stories*', '**/*.story.*']")
          ),
          i(
            'li',
            {},
            void 0,
            '🚇 ',
            i('code', {}, void 0, 'infra'),
            ' - Edits to ',
            i(
              'code',
              {},
              void 0,
              "['**/.circle/**/*', '**/.github/**/*', '**/travis.yml'],"
            )
          ),
          i(
            'li',
            {},
            void 0,
            '⚠️ ',
            i('code', {}, void 0, 'test'),
            ' - Edits to ',
            i('code', {}, void 0, "['**/*.test.*']")
          ),
          i(
            'li',
            {},
            void 0,
            '💻 ',
            i('code', {}, void 0, 'code'),
            ' - Edits to ',
            i(
              'code',
              {},
              void 0,
              "['**/src/**/*', '**/lib/**/*', '**/package.json', '**/tsconfig.json']"
            )
          )
        ),
        m = i(
          'p',
          {},
          void 0,
          'This plugin is not included with the ',
          i('code', {}, void 0, 'auto'),
          ' CLI installed via NPM. To install:'
        ),
        g = i(
          'pre',
          {},
          void 0,
          i(
            'code',
            { className: 'language-sh' },
            void 0,
            'npx install-peerdeps --dev @auto-it/all-contributors',
            i('br', {})
          )
        ),
        b = i(
          'p',
          {},
          void 0,
          'You must have already installed and initialized ',
          i('code', {}, void 0, 'all-contributors-cli'),
          ';'
        ),
        y = i(
          'pre',
          {},
          void 0,
          i(
            'code',
            { className: 'language-sh' },
            void 0,
            'npx all-contributors init',
            i('br', {})
          )
        ),
        j = i(
          'pre',
          {},
          void 0,
          i(
            'code',
            { className: 'language-json' },
            void 0,
            '{',
            i('br', {}),
            '  ',
            i('span', { className: 'hljs-attr' }, void 0, '"plugins"'),
            ': [',
            i(
              'span',
              { className: 'hljs-string' },
              void 0,
              '"all-contributors"'
            ),
            ']',
            i('br', {}),
            '}',
            i('br', {})
          )
        ),
        N = i(
          'p',
          {},
          void 0,
          i('strong', {}, void 0, i('code', {}, void 0, 'auto.rc'))
        ),
        P = i(
          'pre',
          {},
          void 0,
          i(
            'code',
            { className: 'language-json' },
            void 0,
            '{',
            i('br', {}),
            '  ',
            i('span', { className: 'hljs-attr' }, void 0, '"plugins"'),
            ': [',
            i('br', {}),
            '    [',
            i('br', {}),
            '      ',
            i(
              'span',
              { className: 'hljs-string' },
              void 0,
              '"all-contributors"'
            ),
            ',',
            i('br', {}),
            '      {',
            i('br', {}),
            '        ',
            i('span', { className: 'hljs-attr' }, void 0, '"types"'),
            ': {',
            i('br', {}),
            '          ',
            i('span', { className: 'hljs-attr' }, void 0, '"plugin"'),
            ': ',
            i('span', { className: 'hljs-string' }, void 0, '"**/plugin/**/*"'),
            ',',
            i('br', {}),
            '          ',
            i('span', { className: 'hljs-attr' }, void 0, '"example"'),
            ': [',
            i('span', { className: 'hljs-string' }, void 0, '"**/*.stories.*"'),
            ', ',
            i(
              'span',
              { className: 'hljs-string' },
              void 0,
              '"**/*.examples.*"'
            ),
            ', ',
            i('span', { className: 'hljs-string' }, void 0, '"**/*.snippet.*"'),
            ']',
            i('br', {}),
            '        }',
            i('br', {}),
            '      }',
            i('br', {}),
            '    ]',
            i('br', {}),
            '  ]',
            i('br', {}),
            '}',
            i('br', {})
          )
        ),
        w = i(
          'p',
          {},
          void 0,
          'Useful for excluding bots from getting into your contributors.'
        ),
        O = i(
          'p',
          {},
          void 0,
          i('strong', {}, void 0, i('code', {}, void 0, 'auto.rc'))
        ),
        k = i(
          'pre',
          {},
          void 0,
          i(
            'code',
            { className: 'language-json' },
            void 0,
            '{',
            i('br', {}),
            '  ',
            i('span', { className: 'hljs-attr' }, void 0, '"plugins"'),
            ': [',
            i('br', {}),
            '    [',
            i('br', {}),
            '      ',
            i(
              'span',
              { className: 'hljs-string' },
              void 0,
              '"all-contributors"'
            ),
            ',',
            i('br', {}),
            '      {',
            i('br', {}),
            '        ',
            i('span', { className: 'hljs-attr' }, void 0, '"exclude"'),
            ': [',
            i('span', { className: 'hljs-string' }, void 0, '"dependabot"'),
            ', ',
            i('span', { className: 'hljs-string' }, void 0, '"ci-services"'),
            ']',
            i('br', {}),
            '      }',
            i('br', {}),
            '    ]',
            i('br', {}),
            '  ]',
            i('br', {}),
            '}',
            i('br', {})
          )
        ),
        E = i(
          'p',
          {},
          void 0,
          'Maintain contributors lists for sub-packages in a monorepo setup (',
          i('code', {}, void 0, 'lerna'),
          '/',
          i('code', {}, void 0, 'yarn'),
          ').'
        ),
        C = i(
          'p',
          {},
          void 0,
          'All you need to do is initialize each sub-package you want contributors tracked in with an ',
          i('code', {}, void 0, '.all-contributorsrc'),
          '. If no rc file is found nothing will happen for that package.'
        ),
        _ = i(
          'pre',
          {},
          void 0,
          i(
            'code',
            { className: 'language-sh' },
            void 0,
            i('span', { className: 'hljs-built_in' }, void 0, 'cd'),
            ' packages/your-package',
            i('br', {}),
            'npx all-contributors init',
            i('br', {})
          )
        ),
        S = i(
          'article',
          { className: 'message column is-info' },
          void 0,
          i(
            'div',
            { className: 'message-body' },
            void 0,
            i(
              'p',
              {},
              void 0,
              'ℹ️ Tip: If you only want 1 commit for new contributions set ',
              i('code', {}, void 0, 'commit'),
              ' to false in all of your ',
              i('code', {}, void 0, '.all-contributorsrc'),
              ". Otherwise a commit will be made for each package's contributor update."
            )
          )
        );
      var L = e =>
        i(
          'div',
          { className: e.className },
          void 0,
          i(
            'section',
            {},
            void 0,
            h,
            v,
            i(
              'p',
              {},
              void 0,
              'This plugin maps one of the ',
              i(
                c,
                {
                  currentPage: e.currentPage,
                  to: 'vhttps://allcontributors.org/docs/en/emoji-key',
                  className: 'external-link'
                },
                void 0,
                'contribution type'
              ),
              ' to a glob or array of globs. Out of the box the plugin will only detect the following contribution types:'
            ),
            f,
            i(
              'h2',
              { id: 'installation' },
              void 0,
              'Installation ',
              i(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#installation',
                'aria-hidden': 'true'
              })
            ),
            m,
            g,
            i(
              'h2',
              { id: 'prerequisites' },
              void 0,
              'Prerequisites ',
              i(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#prerequisites',
                'aria-hidden': 'true'
              })
            ),
            b,
            y,
            i(
              'h2',
              { id: 'usage' },
              void 0,
              'Usage ',
              i(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#usage',
                'aria-hidden': 'true'
              })
            ),
            j,
            i(
              'h3',
              { id: 'configure-contribution-type-matching' },
              void 0,
              'Configure Contribution Type Matching ',
              i(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#configure-contribution-type-matching',
                'aria-hidden': 'true'
              })
            ),
            i(
              'p',
              {},
              void 0,
              'You use any of the ',
              i(
                c,
                {
                  currentPage: e.currentPage,
                  to: 'vhttps://allcontributors.org/docs/en/emoji-key',
                  className: 'external-link'
                },
                void 0,
                'contribution type'
              ),
              '. If you configure an pre-configured contribution type the arrays are not merged, it is overridden.'
            ),
            N,
            P,
            i(
              'h3',
              { id: 'exclude-users' },
              void 0,
              'Exclude Users ',
              i(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#exclude-users',
                'aria-hidden': 'true'
              })
            ),
            w,
            O,
            k,
            i(
              'h3',
              { id: 'sub-package-contributors-list' },
              void 0,
              'Sub-Package Contributors list ',
              i(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#sub-package-contributors-list',
                'aria-hidden': 'true'
              })
            ),
            E,
            C,
            _,
            S
          )
        );
      (t.default = L), (e.exports = t.default);
    },
    96: function(e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var r,
        o = s(a(3)),
        n = (function(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var a in e)
              if (Object.prototype.hasOwnProperty.call(e, a)) {
                var r =
                  Object.defineProperty && Object.getOwnPropertyDescriptor
                    ? Object.getOwnPropertyDescriptor(e, a)
                    : {};
                r.get || r.set ? Object.defineProperty(t, a, r) : (t[a] = e[a]);
              }
          return (t.default = e), t;
        })(a(0));
      s(a(2)), s(a(106));
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i(e, t, a, o) {
        r ||
          (r =
            ('function' == typeof Symbol &&
              Symbol.for &&
              Symbol.for('react.element')) ||
            60103);
        var n = e && e.defaultProps,
          s = arguments.length - 3;
        if ((t || 0 === s || (t = { children: void 0 }), t && n))
          for (var i in n) void 0 === t[i] && (t[i] = n[i]);
        else t || (t = n || {});
        if (1 === s) t.children = o;
        else if (s > 1) {
          for (var l = new Array(s), d = 0; d < s; d++) l[d] = arguments[d + 3];
          t.children = l;
        }
        return {
          $$typeof: r,
          type: e,
          key: void 0 === a ? null : '' + a,
          ref: null,
          props: t,
          _owner: null
        };
      }
      function l(e, t, a) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = a),
          e
        );
      }
      function d() {
        return (d =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var a = arguments[t];
              for (var r in a)
                Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function u(e, t) {
        if (null == e) return {};
        var a,
          r,
          o = (function(e, t) {
            if (null == e) return {};
            var a,
              r,
              o = {},
              n = Object.keys(e);
            for (r = 0; r < n.length; r++)
              (a = n[r]), t.indexOf(a) >= 0 || (o[a] = e[a]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          for (r = 0; r < n.length; r++)
            (a = n[r]),
              t.indexOf(a) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, a) &&
                  (o[a] = e[a]));
        }
        return o;
      }
      const c = e => {
        let { to: t } = e,
          a = u(e, ['to']);
        return t.includes('http')
          ? n.default.createElement('a', d({}, e, { href: t }))
          : ('#' === t[0] &&
              (t = o.default.join('/auto/', '../plugins/s3/README.html') + t),
            n.default.createElement(
              'a',
              d({}, a, {
                href: t,
                onClick: a => {
                  if ((a.preventDefault(), '#' === e.to)) return !1;
                  const r = new URL(o.default.join(window.location.origin, t));
                  window.history.pushState(
                    (e => ({
                      href: e.href,
                      pathname: e.pathname,
                      hash: e.hash,
                      query: e.query
                    }))(r),
                    null,
                    t
                  ),
                    e.onClick();
                  const n = new CustomEvent('changeLocation', { detail: r });
                  return dispatchEvent(n), !1;
                }
              })
            ));
      };
      c.defaultProps = { href: '', onClick: () => {} };
      const p = e => {
        var t, a;
        return (
          (a = t = class extends n.default.Component {
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
          l(t, 'defaultProps', { shouldLoad: !0 }),
          a
        );
      };
      p(() => a.e(31).then(a.bind(null, 107))),
        p(() => a.e(31).then(a.bind(null, 108)));
      var h = i('h1', {}, void 0, 'S3 Plugin'),
        v = i('p', {}, void 0, 'Post your built artifacts to s3.'),
        f = i(
          'ul',
          {},
          void 0,
          i('li', {}, void 0, i('code', {}, void 0, 'AWS_ACCESS_KEY')),
          i('li', {}, void 0, i('code', {}, void 0, 'AWS_SECRET_KEY')),
          i('li', {}, void 0, i('code', {}, void 0, 'AWS_SESSION_TOKEN'))
        ),
        m = i(
          'p',
          {},
          void 0,
          'This plugin is not included with the ',
          i('code', {}, void 0, 'auto'),
          ' CLI installed via NPM. To install:'
        ),
        g = i(
          'pre',
          {},
          void 0,
          i(
            'code',
            { className: 'language-sh' },
            void 0,
            'npm i --save-dev @auto-it/s3',
            i('br', {}),
            i('span', { className: 'hljs-comment' }, void 0, '# or'),
            i('br', {}),
            'yarn add -D @auto-it/s3',
            i('br', {})
          )
        ),
        b = i('p', {}, void 0, 'Publish a single asset to s3.'),
        y = i(
          'p',
          {},
          void 0,
          i('code', {}, void 0, 'bucket'),
          ': Bucket to deploy to',
          i('code', {}, void 0, 'region'),
          ': Region to deploy to',
          i('code', {}, void 0, 'files'),
          ': An array of tuples mapping local build files to remote deploy paths.'
        ),
        j = i(
          'pre',
          {},
          void 0,
          i(
            'code',
            { className: 'language-txt' },
            void 0,
            'EX:',
            i('br', {}),
            i('br', {}),
            'given: `[["components/button/dist", "components/button"]]`',
            i('br', {}),
            i('br', {}),
            '=> Deploy the files in "components/button/dist" to s3://bucket/components/button on `region`',
            i('br', {})
          )
        ),
        N = i('p', {}, void 0, i('strong', {}, void 0, 'Full'), ':'),
        P = i(
          'pre',
          {},
          void 0,
          i(
            'code',
            { className: 'language-json' },
            void 0,
            '{',
            i('br', {}),
            '  ',
            i('span', { className: 'hljs-attr' }, void 0, '"plugins"'),
            ': [',
            i('br', {}),
            '    [',
            i('br', {}),
            '      ',
            i('span', { className: 'hljs-string' }, void 0, '"s3"'),
            ',',
            i('br', {}),
            '      {',
            i('br', {}),
            '        ',
            i('span', { className: 'hljs-attr' }, void 0, '"bucket"'),
            ': ',
            i('span', { className: 'hljs-string' }, void 0, '"BUCKET_NAME"'),
            ',',
            i('br', {}),
            '        ',
            i('span', { className: 'hljs-attr' }, void 0, '"region"'),
            ': ',
            i('span', { className: 'hljs-string' }, void 0, '"REGION_NAME"'),
            ',',
            i('br', {}),
            '        ',
            i('span', { className: 'hljs-attr' }, void 0, '"files"'),
            ': [[',
            i(
              'span',
              { className: 'hljs-string' },
              void 0,
              '"components/button/dist"'
            ),
            ', ',
            i(
              'span',
              { className: 'hljs-string' },
              void 0,
              '"components/button"'
            ),
            ']]',
            i('br', {}),
            '      }',
            i('br', {}),
            '    ]',
            i('br', {}),
            '    // other plugins',
            i('br', {}),
            '  ]',
            i('br', {}),
            '}',
            i('br', {})
          )
        ),
        w = i(
          'p',
          {},
          void 0,
          'To version your deployed assets simply add ',
          i('code', {}, void 0, '$VERSION'),
          ' in the ',
          i('code', {}, void 0, 'remote'),
          ' path. This will be replaced with the new version being released.'
        ),
        O = i(
          'pre',
          {},
          void 0,
          i(
            'code',
            { className: 'language-json' },
            void 0,
            '{',
            i('br', {}),
            '  ',
            i('span', { className: 'hljs-attr' }, void 0, '"plugins"'),
            ': [',
            i('br', {}),
            '    [',
            i('br', {}),
            '      ',
            i('span', { className: 'hljs-string' }, void 0, '"s3"'),
            ',',
            i('br', {}),
            '      {',
            i('br', {}),
            '        ',
            i('span', { className: 'hljs-attr' }, void 0, '"bucket"'),
            ': ',
            i('span', { className: 'hljs-string' }, void 0, '"BUCKET_NAME"'),
            ',',
            i('br', {}),
            '        ',
            i('span', { className: 'hljs-attr' }, void 0, '"region"'),
            ': ',
            i('span', { className: 'hljs-string' }, void 0, '"REGION_NAME"'),
            ',',
            i('br', {}),
            '        ',
            i('span', { className: 'hljs-attr' }, void 0, '"files"'),
            ': [[',
            i(
              'span',
              { className: 'hljs-string' },
              void 0,
              '"components/button/dist"'
            ),
            ', ',
            i(
              'span',
              { className: 'hljs-string' },
              void 0,
              '"$VERSION/components/button"'
            ),
            ']]',
            i('br', {}),
            '      }',
            i('br', {}),
            '    ]',
            i('br', {}),
            '    // other plugins',
            i('br', {}),
            '  ]',
            i('br', {}),
            '}',
            i('br', {})
          )
        ),
        k = i('p', {}, void 0, 'Publish multiple assets to s3.'),
        E = i(
          'pre',
          {},
          void 0,
          i(
            'code',
            { className: 'language-json' },
            void 0,
            '{',
            i('br', {}),
            '  ',
            i('span', { className: 'hljs-attr' }, void 0, '"plugins"'),
            ': [',
            i('br', {}),
            '    [',
            i('br', {}),
            '      ',
            i('span', { className: 'hljs-string' }, void 0, '"s3"'),
            ',',
            i('br', {}),
            '      {',
            i('br', {}),
            '        ',
            i('span', { className: 'hljs-attr' }, void 0, '"bucket"'),
            ': ',
            i('span', { className: 'hljs-string' }, void 0, '"BUCKET_NAME"'),
            ',',
            i('br', {}),
            '        ',
            i('span', { className: 'hljs-attr' }, void 0, '"region"'),
            ': ',
            i('span', { className: 'hljs-string' }, void 0, '"REGION_NAME"'),
            ',',
            i('br', {}),
            '        ',
            i('span', { className: 'hljs-attr' }, void 0, '"files"'),
            ': [',
            i('br', {}),
            '          [',
            i(
              'span',
              { className: 'hljs-string' },
              void 0,
              '"components/button/dist"'
            ),
            ', ',
            i(
              'span',
              { className: 'hljs-string' },
              void 0,
              '"components/button"'
            ),
            '],',
            i('br', {}),
            '          [',
            i(
              'span',
              { className: 'hljs-string' },
              void 0,
              '"components/card/dist"'
            ),
            ', ',
            i(
              'span',
              { className: 'hljs-string' },
              void 0,
              '"components/card"'
            ),
            '],',
            i('br', {}),
            '          [',
            i(
              'span',
              { className: 'hljs-string' },
              void 0,
              '"components/select/dist"'
            ),
            ', ',
            i(
              'span',
              { className: 'hljs-string' },
              void 0,
              '"components/select"'
            ),
            ']',
            i('br', {}),
            '        ]',
            i('br', {}),
            '      }',
            i('br', {}),
            '    ]',
            i('br', {}),
            '  ]',
            i('br', {}),
            '}',
            i('br', {})
          )
        ),
        C = i('p', {}, void 0, 'Publish assets to multiple s3 buckets.'),
        _ = i(
          'pre',
          {},
          void 0,
          i(
            'code',
            { className: 'language-json' },
            void 0,
            '{',
            i('br', {}),
            '  ',
            i('span', { className: 'hljs-attr' }, void 0, '"plugins"'),
            ': [',
            i('br', {}),
            '    [',
            i('br', {}),
            '      ',
            i('span', { className: 'hljs-string' }, void 0, '"s3"'),
            ',',
            i('br', {}),
            '      [',
            i('br', {}),
            '        {',
            i('br', {}),
            '          ',
            i('span', { className: 'hljs-attr' }, void 0, '"bucket"'),
            ': ',
            i('span', { className: 'hljs-string' }, void 0, '"BUCKET_NAME"'),
            ',',
            i('br', {}),
            '          ',
            i('span', { className: 'hljs-attr' }, void 0, '"region"'),
            ': ',
            i('span', { className: 'hljs-string' }, void 0, '"REGION_NAME"'),
            ',',
            i('br', {}),
            '          ',
            i('span', { className: 'hljs-attr' }, void 0, '"files"'),
            ': [[',
            i(
              'span',
              { className: 'hljs-string' },
              void 0,
              '"components/button/dist"'
            ),
            ', ',
            i(
              'span',
              { className: 'hljs-string' },
              void 0,
              '"components/button"'
            ),
            ']]',
            i('br', {}),
            '        },',
            i('br', {}),
            '        {',
            i('br', {}),
            '          ',
            i('span', { className: 'hljs-attr' }, void 0, '"bucket"'),
            ': ',
            i(
              'span',
              { className: 'hljs-string' },
              void 0,
              '"ANOTHER_BUCKET_NAME"'
            ),
            ',',
            i('br', {}),
            '          ',
            i('span', { className: 'hljs-attr' }, void 0, '"region"'),
            ': ',
            i('span', { className: 'hljs-string' }, void 0, '"REGION_NAME"'),
            ',',
            i('br', {}),
            '          ',
            i('span', { className: 'hljs-attr' }, void 0, '"files"'),
            ': [[',
            i(
              'span',
              { className: 'hljs-string' },
              void 0,
              '"components/card/dist"'
            ),
            ', ',
            i(
              'span',
              { className: 'hljs-string' },
              void 0,
              '"components/card"'
            ),
            ']]',
            i('br', {}),
            '        }',
            i('br', {}),
            '      ]',
            i('br', {}),
            '    ]',
            i('br', {}),
            '  ]',
            i('br', {}),
            '}',
            i('br', {})
          )
        ),
        S = i(
          'p',
          {},
          void 0,
          'By default this plugin will overwrite any bucket path you give it. To prevent it from overwriting your bucket path if it already exists set ',
          i('code', {}, void 0, 'overwrite'),
          ' to false'
        ),
        L = i(
          'pre',
          {},
          void 0,
          i(
            'code',
            { className: 'language-json' },
            void 0,
            '{',
            i('br', {}),
            '  "plugins": [',
            i('br', {}),
            '    [',
            i('br', {}),
            '      "s3",',
            i('br', {}),
            '      {',
            i('br', {}),
            '        "bucket": "BUCKET_NAME",',
            i('br', {}),
            '        "region": "REGION_NAME",',
            i('br', {}),
            '        "overwrite": false,',
            i('br', {}),
            '        ...',
            i('br', {}),
            '      }',
            i('br', {}),
            '    ]',
            i('br', {}),
            '  ]',
            i('br', {}),
            '}',
            i('br', {})
          )
        );
      var M = e =>
        i(
          'div',
          { className: e.className },
          void 0,
          i(
            'section',
            {},
            void 0,
            h,
            v,
            i(
              'h2',
              { id: 'prerequisites' },
              void 0,
              'Prerequisites ',
              i(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#prerequisites',
                'aria-hidden': 'true'
              })
            ),
            i(
              'p',
              {},
              void 0,
              'Must have the ',
              i(
                c,
                {
                  currentPage: e.currentPage,
                  target: '_blank',
                  to: 'https://docs.aws.amazon.com/cli/index.html',
                  className: 'external-link'
                },
                void 0,
                'aws-cli'
              ),
              ' on your machine and all of the following environment variables set:'
            ),
            f,
            i(
              'h2',
              { id: 'installation' },
              void 0,
              'Installation ',
              i(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#installation',
                'aria-hidden': 'true'
              })
            ),
            m,
            g,
            i(
              'h2',
              { id: 'usage' },
              void 0,
              'Usage ',
              i(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#usage',
                'aria-hidden': 'true'
              })
            ),
            b,
            y,
            j,
            N,
            P,
            i(
              'h3',
              { id: 'versioning-deploys' },
              void 0,
              'Versioning Deploys ',
              i(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#versioning-deploys',
                'aria-hidden': 'true'
              })
            ),
            w,
            O,
            i(
              'h3',
              { id: 'multiple-files' },
              void 0,
              'Multiple Files ',
              i(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#multiple-files',
                'aria-hidden': 'true'
              })
            ),
            k,
            E,
            i(
              'h3',
              { id: 'multiple-buckets' },
              void 0,
              'Multiple Buckets ',
              i(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#multiple-buckets',
                'aria-hidden': 'true'
              })
            ),
            C,
            _,
            i(
              'h3',
              { id: 'overwrite' },
              void 0,
              'Overwrite ',
              i(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#overwrite',
                'aria-hidden': 'true'
              })
            ),
            S,
            L
          )
        );
      (t.default = M), (e.exports = t.default);
    },
    97: function(e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var r,
        o = s(a(3)),
        n = (function(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var a in e)
              if (Object.prototype.hasOwnProperty.call(e, a)) {
                var r =
                  Object.defineProperty && Object.getOwnPropertyDescriptor
                    ? Object.getOwnPropertyDescriptor(e, a)
                    : {};
                r.get || r.set ? Object.defineProperty(t, a, r) : (t[a] = e[a]);
              }
          return (t.default = e), t;
        })(a(0));
      s(a(2)), s(a(106));
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i(e, t, a, o) {
        r ||
          (r =
            ('function' == typeof Symbol &&
              Symbol.for &&
              Symbol.for('react.element')) ||
            60103);
        var n = e && e.defaultProps,
          s = arguments.length - 3;
        if ((t || 0 === s || (t = { children: void 0 }), t && n))
          for (var i in n) void 0 === t[i] && (t[i] = n[i]);
        else t || (t = n || {});
        if (1 === s) t.children = o;
        else if (s > 1) {
          for (var l = new Array(s), d = 0; d < s; d++) l[d] = arguments[d + 3];
          t.children = l;
        }
        return {
          $$typeof: r,
          type: e,
          key: void 0 === a ? null : '' + a,
          ref: null,
          props: t,
          _owner: null
        };
      }
      function l(e, t, a) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = a),
          e
        );
      }
      function d() {
        return (d =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var a = arguments[t];
              for (var r in a)
                Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function u(e, t) {
        if (null == e) return {};
        var a,
          r,
          o = (function(e, t) {
            if (null == e) return {};
            var a,
              r,
              o = {},
              n = Object.keys(e);
            for (r = 0; r < n.length; r++)
              (a = n[r]), t.indexOf(a) >= 0 || (o[a] = e[a]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          for (r = 0; r < n.length; r++)
            (a = n[r]),
              t.indexOf(a) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, a) &&
                  (o[a] = e[a]));
        }
        return o;
      }
      const c = e => {
        let { to: t } = e,
          a = u(e, ['to']);
        return t.includes('http')
          ? n.default.createElement('a', d({}, e, { href: t }))
          : ('#' === t[0] &&
              (t =
                o.default.join(
                  '/auto/',
                  '../plugins/conventional-commits/README.html'
                ) + t),
            n.default.createElement(
              'a',
              d({}, a, {
                href: t,
                onClick: a => {
                  if ((a.preventDefault(), '#' === e.to)) return !1;
                  const r = new URL(o.default.join(window.location.origin, t));
                  window.history.pushState(
                    (e => ({
                      href: e.href,
                      pathname: e.pathname,
                      hash: e.hash,
                      query: e.query
                    }))(r),
                    null,
                    t
                  ),
                    e.onClick();
                  const n = new CustomEvent('changeLocation', { detail: r });
                  return dispatchEvent(n), !1;
                }
              })
            ));
      };
      c.defaultProps = { href: '', onClick: () => {} };
      const p = e => {
        var t, a;
        return (
          (a = t = class extends n.default.Component {
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
          l(t, 'defaultProps', { shouldLoad: !0 }),
          a
        );
      };
      p(() => a.e(31).then(a.bind(null, 107))),
        p(() => a.e(31).then(a.bind(null, 108)));
      var h = i('h1', {}, void 0, 'Conventional Commits Plugin'),
        v = i(
          'p',
          {},
          void 0,
          'This plugin is not included with the ',
          i('code', {}, void 0, 'auto'),
          ' CLI installed via NPM. To install:'
        ),
        f = i(
          'pre',
          {},
          void 0,
          i(
            'code',
            { className: 'language-sh' },
            void 0,
            'npm i --save-dev @auto-it/conventional-commits',
            i('br', {}),
            i('span', { className: 'hljs-comment' }, void 0, '# or'),
            i('br', {}),
            'yarn add -D @auto-it/conventional-commits',
            i('br', {})
          )
        ),
        m = i(
          'pre',
          {},
          void 0,
          i(
            'code',
            { className: 'language-json' },
            void 0,
            '{',
            i('br', {}),
            '  ',
            i('span', { className: 'hljs-attr' }, void 0, '"plugins"'),
            ': [',
            i('br', {}),
            '    ',
            i('span', { className: 'hljs-string' }, void 0, '"npm"'),
            ',',
            i('br', {}),
            '    ',
            i(
              'span',
              { className: 'hljs-string' },
              void 0,
              '"conventional-commits"'
            ),
            i('br', {}),
            '    // other plugins',
            i('br', {}),
            '  ]',
            i('br', {}),
            '}',
            i('br', {})
          )
        );
      var g = e =>
        i(
          'div',
          { className: e.className },
          void 0,
          i(
            'section',
            {},
            void 0,
            h,
            i(
              'p',
              {},
              void 0,
              'Parse ',
              i(
                c,
                {
                  currentPage: e.currentPage,
                  target: '_blank',
                  to: 'https://www.conventionalcommits.org/en/v1.0.0-beta.4/',
                  className: 'external-link'
                },
                void 0,
                'conventional commit messages'
              ),
              " and use them to calculate the version. This plugin will omit the PR HEAD if it isn't labeled and has a commit with a conventional-commit commit message."
            ),
            i(
              'h2',
              { id: 'installation' },
              void 0,
              'Installation ',
              i(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#installation',
                'aria-hidden': 'true'
              })
            ),
            v,
            f,
            i(
              'h2',
              { id: 'usage' },
              void 0,
              'Usage ',
              i(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#usage',
                'aria-hidden': 'true'
              })
            ),
            m
          )
        );
      (t.default = g), (e.exports = t.default);
    },
    98: function(e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var r,
        o = s(a(3)),
        n = (function(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var a in e)
              if (Object.prototype.hasOwnProperty.call(e, a)) {
                var r =
                  Object.defineProperty && Object.getOwnPropertyDescriptor
                    ? Object.getOwnPropertyDescriptor(e, a)
                    : {};
                r.get || r.set ? Object.defineProperty(t, a, r) : (t[a] = e[a]);
              }
          return (t.default = e), t;
        })(a(0));
      s(a(2)), s(a(106));
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i(e, t, a, o) {
        r ||
          (r =
            ('function' == typeof Symbol &&
              Symbol.for &&
              Symbol.for('react.element')) ||
            60103);
        var n = e && e.defaultProps,
          s = arguments.length - 3;
        if ((t || 0 === s || (t = { children: void 0 }), t && n))
          for (var i in n) void 0 === t[i] && (t[i] = n[i]);
        else t || (t = n || {});
        if (1 === s) t.children = o;
        else if (s > 1) {
          for (var l = new Array(s), d = 0; d < s; d++) l[d] = arguments[d + 3];
          t.children = l;
        }
        return {
          $$typeof: r,
          type: e,
          key: void 0 === a ? null : '' + a,
          ref: null,
          props: t,
          _owner: null
        };
      }
      function l(e, t, a) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = a),
          e
        );
      }
      function d() {
        return (d =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var a = arguments[t];
              for (var r in a)
                Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function u(e, t) {
        if (null == e) return {};
        var a,
          r,
          o = (function(e, t) {
            if (null == e) return {};
            var a,
              r,
              o = {},
              n = Object.keys(e);
            for (r = 0; r < n.length; r++)
              (a = n[r]), t.indexOf(a) >= 0 || (o[a] = e[a]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          for (r = 0; r < n.length; r++)
            (a = n[r]),
              t.indexOf(a) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, a) &&
                  (o[a] = e[a]));
        }
        return o;
      }
      const c = e => {
        let { to: t } = e,
          a = u(e, ['to']);
        return t.includes('http')
          ? n.default.createElement('a', d({}, e, { href: t }))
          : ('#' === t[0] &&
              (t =
                o.default.join(
                  '/auto/',
                  '../plugins/first-time-contributor/README.html'
                ) + t),
            n.default.createElement(
              'a',
              d({}, a, {
                href: t,
                onClick: a => {
                  if ((a.preventDefault(), '#' === e.to)) return !1;
                  const r = new URL(o.default.join(window.location.origin, t));
                  window.history.pushState(
                    (e => ({
                      href: e.href,
                      pathname: e.pathname,
                      hash: e.hash,
                      query: e.query
                    }))(r),
                    null,
                    t
                  ),
                    e.onClick();
                  const n = new CustomEvent('changeLocation', { detail: r });
                  return dispatchEvent(n), !1;
                }
              })
            ));
      };
      c.defaultProps = { href: '', onClick: () => {} };
      const p = e => {
        var t, a;
        return (
          (a = t = class extends n.default.Component {
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
          l(t, 'defaultProps', { shouldLoad: !0 }),
          a
        );
      };
      p(() => a.e(31).then(a.bind(null, 107))),
        p(() => a.e(31).then(a.bind(null, 108)));
      var h = i('h1', {}, void 0, 'First Time Contributor Plugin'),
        v = i(
          'p',
          {},
          void 0,
          'Thank first time contributors for their work right in your release notes.'
        ),
        f = i(
          'p',
          {},
          void 0,
          'This plugin is not included with the ',
          i('code', {}, void 0, 'auto'),
          ' CLI installed via NPM. To install:'
        ),
        m = i(
          'pre',
          {},
          void 0,
          i(
            'code',
            { className: 'language-sh' },
            void 0,
            'npm i --save-dev @auto-it/first-time-contributor',
            i('br', {}),
            i('span', { className: 'hljs-comment' }, void 0, '# or'),
            i('br', {}),
            'yarn add -D @auto-it/first-time-contributor',
            i('br', {})
          )
        ),
        g = i(
          'p',
          {},
          void 0,
          'Simply add the plugins to your auto configuration.'
        ),
        b = i(
          'pre',
          {},
          void 0,
          i(
            'code',
            { className: 'language-json' },
            void 0,
            '{',
            i('br', {}),
            '  ',
            i('span', { className: 'hljs-attr' }, void 0, '"plugins"'),
            ': [',
            i(
              'span',
              { className: 'hljs-string' },
              void 0,
              '"first-time-contributor"'
            ),
            ']',
            i('br', {}),
            '}',
            i('br', {})
          )
        );
      var y = e =>
        i(
          'div',
          { className: e.className },
          void 0,
          i(
            'section',
            {},
            void 0,
            h,
            v,
            i(
              'h2',
              { id: 'installation' },
              void 0,
              'Installation ',
              i(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#installation',
                'aria-hidden': 'true'
              })
            ),
            f,
            m,
            i(
              'h2',
              { id: 'usage' },
              void 0,
              'Usage ',
              i(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#usage',
                'aria-hidden': 'true'
              })
            ),
            g,
            b
          )
        );
      (t.default = y), (e.exports = t.default);
    },
    99: function(e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var r,
        o = s(a(3)),
        n = (function(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var a in e)
              if (Object.prototype.hasOwnProperty.call(e, a)) {
                var r =
                  Object.defineProperty && Object.getOwnPropertyDescriptor
                    ? Object.getOwnPropertyDescriptor(e, a)
                    : {};
                r.get || r.set ? Object.defineProperty(t, a, r) : (t[a] = e[a]);
              }
          return (t.default = e), t;
        })(a(0));
      s(a(2)), s(a(106));
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i(e, t, a, o) {
        r ||
          (r =
            ('function' == typeof Symbol &&
              Symbol.for &&
              Symbol.for('react.element')) ||
            60103);
        var n = e && e.defaultProps,
          s = arguments.length - 3;
        if ((t || 0 === s || (t = { children: void 0 }), t && n))
          for (var i in n) void 0 === t[i] && (t[i] = n[i]);
        else t || (t = n || {});
        if (1 === s) t.children = o;
        else if (s > 1) {
          for (var l = new Array(s), d = 0; d < s; d++) l[d] = arguments[d + 3];
          t.children = l;
        }
        return {
          $$typeof: r,
          type: e,
          key: void 0 === a ? null : '' + a,
          ref: null,
          props: t,
          _owner: null
        };
      }
      function l(e, t, a) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = a),
          e
        );
      }
      function d() {
        return (d =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var a = arguments[t];
              for (var r in a)
                Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function u(e, t) {
        if (null == e) return {};
        var a,
          r,
          o = (function(e, t) {
            if (null == e) return {};
            var a,
              r,
              o = {},
              n = Object.keys(e);
            for (r = 0; r < n.length; r++)
              (a = n[r]), t.indexOf(a) >= 0 || (o[a] = e[a]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          for (r = 0; r < n.length; r++)
            (a = n[r]),
              t.indexOf(a) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, a) &&
                  (o[a] = e[a]));
        }
        return o;
      }
      const c = e => {
        let { to: t } = e,
          a = u(e, ['to']);
        return t.includes('http')
          ? n.default.createElement('a', d({}, e, { href: t }))
          : ('#' === t[0] &&
              (t = o.default.join('/auto/', '../plugins/jira/README.html') + t),
            n.default.createElement(
              'a',
              d({}, a, {
                href: t,
                onClick: a => {
                  if ((a.preventDefault(), '#' === e.to)) return !1;
                  const r = new URL(o.default.join(window.location.origin, t));
                  window.history.pushState(
                    (e => ({
                      href: e.href,
                      pathname: e.pathname,
                      hash: e.hash,
                      query: e.query
                    }))(r),
                    null,
                    t
                  ),
                    e.onClick();
                  const n = new CustomEvent('changeLocation', { detail: r });
                  return dispatchEvent(n), !1;
                }
              })
            ));
      };
      c.defaultProps = { href: '', onClick: () => {} };
      const p = e => {
        var t, a;
        return (
          (a = t = class extends n.default.Component {
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
          l(t, 'defaultProps', { shouldLoad: !0 }),
          a
        );
      };
      p(() => a.e(31).then(a.bind(null, 107))),
        p(() => a.e(31).then(a.bind(null, 108)));
      var h = i('h1', {}, void 0, 'Jira Plugin'),
        v = i(
          'p',
          {},
          void 0,
          'To include Jira story information in your changelogs you must include a URL to your hosted JIRA instance.'
        ),
        f = i(
          'p',
          {},
          void 0,
          'This plugin is not included with the ',
          i('code', {}, void 0, 'auto'),
          ' CLI installed via NPM. To install:'
        ),
        m = i(
          'pre',
          {},
          void 0,
          i(
            'code',
            { className: 'language-sh' },
            void 0,
            'npm i --save-dev @auto-it/jira',
            i('br', {}),
            i('span', { className: 'hljs-comment' }, void 0, '# or'),
            i('br', {}),
            'yarn add -D @auto-it/jira',
            i('br', {})
          )
        ),
        g = i(
          'p',
          {},
          void 0,
          'To use the plugin include it in your ',
          i('code', {}, void 0, '.autorc')
        ),
        b = i(
          'pre',
          {},
          void 0,
          i(
            'code',
            { className: 'language-json' },
            void 0,
            '{',
            i('br', {}),
            '  ',
            i('span', { className: 'hljs-attr' }, void 0, '"plugins"'),
            ': [',
            i('br', {}),
            '    [',
            i('span', { className: 'hljs-string' }, void 0, '"jira"'),
            ', { ',
            i('span', { className: 'hljs-attr' }, void 0, '"url"'),
            ': ',
            i(
              'span',
              { className: 'hljs-string' },
              void 0,
              '"https://url-to-your-jira.com"'
            ),
            ' }],',
            i('br', {}),
            '    // or',
            i('br', {}),
            '    [',
            i('span', { className: 'hljs-string' }, void 0, '"jira"'),
            ', ',
            i(
              'span',
              { className: 'hljs-string' },
              void 0,
              '"https://url-to-your-jira.com"'
            ),
            ']',
            i('br', {}),
            '  ]',
            i('br', {}),
            '}',
            i('br', {})
          )
        );
      var y = e =>
        i(
          'div',
          { className: e.className },
          void 0,
          i(
            'section',
            {},
            void 0,
            h,
            v,
            i(
              'h2',
              { id: 'installation' },
              void 0,
              'Installation ',
              i(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#installation',
                'aria-hidden': 'true'
              })
            ),
            f,
            m,
            i(
              'h2',
              { id: 'usage' },
              void 0,
              'Usage ',
              i(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#usage',
                'aria-hidden': 'true'
              })
            ),
            g,
            b
          )
        );
      (t.default = y), (e.exports = t.default);
    }
  }
]);
//# sourceMappingURL=README.js.map
