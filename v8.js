(window.webpackJsonp = window.webpackJsonp || []).push([
  [46],
  {
    56: function(e, a, t) {
      'use strict';
      Object.defineProperty(a, '__esModule', { value: !0 }),
        (a.default = void 0);
      var o,
        s = l(t(3)),
        r = (function(e) {
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
        })(t(0)),
        i = l(t(2)),
        n = l(t(106));
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function d(e, a, t, s) {
        o ||
          (o =
            ('function' == typeof Symbol &&
              Symbol.for &&
              Symbol.for('react.element')) ||
            60103);
        var r = e && e.defaultProps,
          i = arguments.length - 3;
        if ((a || 0 === i || (a = { children: void 0 }), a && r))
          for (var n in r) void 0 === a[n] && (a[n] = r[n]);
        else a || (a = r || {});
        if (1 === i) a.children = s;
        else if (i > 1) {
          for (var l = new Array(i), d = 0; d < i; d++) l[d] = arguments[d + 3];
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
      function c(e, a, t) {
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
      function p() {
        return (p =
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
      function h(e, a) {
        if (null == e) return {};
        var t,
          o,
          s = (function(e, a) {
            if (null == e) return {};
            var t,
              o,
              s = {},
              r = Object.keys(e);
            for (o = 0; o < r.length; o++)
              (t = r[o]), a.indexOf(t) >= 0 || (s[t] = e[t]);
            return s;
          })(e, a);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (o = 0; o < r.length; o++)
            (t = r[o]),
              a.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (s[t] = e[t]));
        }
        return s;
      }
      const u = e => {
        let { to: a } = e,
          t = h(e, ['to']);
        return a.includes('http')
          ? r.default.createElement('a', p({}, e, { href: a }))
          : ('#' === a[0] && (a = s.default.join('/auto/', 'blog/v8.html') + a),
            r.default.createElement(
              'a',
              p({}, t, {
                href: a,
                onClick: t => {
                  if ((t.preventDefault(), '#' === e.to)) return !1;
                  const o = new URL(s.default.join(window.location.origin, a));
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
                  const r = new CustomEvent('changeLocation', { detail: o });
                  return dispatchEvent(r), !1;
                }
              })
            ));
      };
      u.defaultProps = { href: '', onClick: () => {} };
      const v = {
        '//www.gravatar.com/avatar/ff725a631f869cdb78beeb003825bb40': () =>
          Promise.resolve({
            default: {
              src: {
                src:
                  'http://www.gravatar.com/avatar/ff725a631f869cdb78beeb003825bb40'
              },
              preSrc:
                'http://www.gravatar.com/avatar/ff725a631f869cdb78beeb003825bb40',
              height: 80,
              width: 80
            }
          })
      };
      class m extends r.default.Component {
        constructor(...e) {
          super(...e),
            c(this, 'state', { image: null, ImageProvider: v[this.props.src] });
        }
        componentDidMount() {
          this.state.image ||
            this.state.ImageProvider().then(e => {
              this.setState({ image: e.default });
            });
        }
        render() {
          let { image: e } = this.state;
          return e && 'object' == typeof e
            ? r.default.createElement(
                n.default,
                p({}, this.props, {
                  className: (0, i.default)('image', this.props.className),
                  src: e.src.src,
                  width: e.src.width || e.width,
                  height: e.src.height || e.height,
                  placeholder: { lqip: e.preSrc },
                  srcSet: e.src.images
                    ? e.src.images.map(e =>
                        (function(e) {
                          for (var a = 1; a < arguments.length; a++) {
                            var t = null != arguments[a] ? arguments[a] : {},
                              o = Object.keys(t);
                            'function' == typeof Object.getOwnPropertySymbols &&
                              (o = o.concat(
                                Object.getOwnPropertySymbols(t).filter(function(
                                  e
                                ) {
                                  return Object.getOwnPropertyDescriptor(t, e)
                                    .enumerable;
                                })
                              )),
                              o.forEach(function(a) {
                                c(e, a, t[a]);
                              });
                          }
                          return e;
                        })({}, e, { src: e.path })
                      )
                    : [{ src: e.src, width: e.width }]
                })
              )
            : d('img', {
                className: (0, i.default)('image', this.props.className),
                src: e
              });
        }
      }
      const g = e => {
        var a, t;
        return (
          (t = a = class extends r.default.Component {
            constructor(...e) {
              super(...e), c(this, 'state', { Comp: null });
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
                ? r.default.createElement(
                    e,
                    this.props,
                    this.props.children || null
                  )
                : null;
            }
          }),
          c(a, 'defaultProps', { shouldLoad: !0 }),
          t
        );
      };
      g(() => t.e(31).then(t.bind(null, 107))),
        g(() => t.e(31).then(t.bind(null, 108)));
      var b = d(m, {
          src: '//www.gravatar.com/avatar/ff725a631f869cdb78beeb003825bb40',
          className: 'authorImage'
        }),
        f = d(
          'p',
          { className: 'title blogTitle' },
          void 0,
          'Announcing "auto" 8.0.0'
        ),
        w = d('span', {}, void 0, ' on December 10, 2019', d('span', {})),
        y = d(
          'p',
          {},
          void 0,
          'We are excited to announce the release of ',
          d('code', {}, void 0, 'auto'),
          ' 8.0.0. This release brings a new command ',
          d('code', {}, void 0, 'next'),
          ', a new use for ',
          d('code', {}, void 0, 'shipit'),
          ', more powerful label configuration, and more.'
        ),
        N = d('code', {}, void 0, 'auto'),
        j = d('code', {}, void 0, 'auto'),
        P = d(
          'p',
          {},
          void 0,
          "If you aren't already using ",
          d('code', {}, void 0, 'auto'),
          ' you can either install it through npm:'
        ),
        k = d(
          'div',
          { className: 'has-text-centered learnMore' },
          void 0,
          d(u, { to: '/auto/blog/v8.html' }, void 0, 'Read More')
        ),
        x = d(m, {
          src: '//www.gravatar.com/avatar/ff725a631f869cdb78beeb003825bb40',
          className: 'authorImage'
        }),
        O = d(
          'p',
          { className: 'title blogTitle' },
          void 0,
          'Announcing "auto" 8.0.0'
        ),
        C = d('span', {}, void 0, ' on December 10, 2019', d('span', {})),
        L = d(
          'p',
          {},
          void 0,
          'We are excited to announce the release of ',
          d('code', {}, void 0, 'auto'),
          ' 8.0.0. This release brings a new command ',
          d('code', {}, void 0, 'next'),
          ', a new use for ',
          d('code', {}, void 0, 'shipit'),
          ', more powerful label configuration, and more.'
        ),
        S = d('code', {}, void 0, 'auto'),
        T = d('code', {}, void 0, 'auto'),
        I = d(
          'p',
          {},
          void 0,
          "If you aren't already using ",
          d('code', {}, void 0, 'auto'),
          ' you can either install it through npm:'
        ),
        _ = d(
          'pre',
          {},
          void 0,
          d(
            'code',
            { className: 'language-sh' },
            void 0,
            'npm install auto',
            d('br', {})
          )
        ),
        M = d(
          'p',
          {},
          void 0,
          'Or if you are publishing to something other than npm:'
        ),
        D = d(
          'pre',
          {},
          void 0,
          d(
            'code',
            { className: 'language-sh' },
            void 0,
            d('span', { className: 'hljs-comment' }, void 0, '# On OSX'),
            d('br', {}),
            'brew tap intuit/auto https://github.com/intuit/auto',
            d('br', {}),
            'brew install auto',
            d('br', {}),
            d('br', {}),
            d('span', { className: 'hljs-comment' }, void 0, '# Or other OSs'),
            d('br', {}),
            d(
              'span',
              { className: 'hljs-comment' },
              void 0,
              '# Download a platform specific version of auto'
            ),
            d('br', {}),
            'curl -vkL -o - https://github.com/intuit/auto/releases/download/v8.0.0/auto-linux.gz | gunzip > ~/auto',
            d('br', {}),
            d(
              'span',
              { className: 'hljs-comment' },
              void 0,
              '# Make auto executable'
            ),
            d('br', {}),
            'chmod a+x ~/auto',
            d('br', {})
          )
        ),
        E = d('code', {}, void 0, 'next'),
        A = d(
          'p',
          {},
          void 0,
          'This new command will make a preview release of your code. This entails:'
        ),
        H = d(
          'ol',
          {},
          void 0,
          d(
            'li',
            {},
            void 0,
            'Creating a prerelease on package management platform (supported by ',
            d('code', {}, void 0, 'npm'),
            ' and ',
            d('code', {}, void 0, 'git-tag'),
            ' plugins)'
          ),
          d(
            'li',
            {},
            void 0,
            'Creating a tag and "Pre Release" on GitHub releases page'
          )
        ),
        R = d('code', {}, void 0, 'auto'),
        B = d('code', {}, void 0, 'next'),
        F = d('code', {}, void 0, '.autorc'),
        G = d('code', {}, void 0, 'auto'),
        q = d('code', {}, void 0, 'auto next'),
        V = d('p', {}, void 0, 'Given the following configuration:'),
        U = d(
          'pre',
          {},
          void 0,
          d(
            'code',
            { className: 'language-json' },
            void 0,
            '{',
            d('br', {}),
            '  ',
            d(
              'span',
              { className: 'hljs-attr' },
              void 0,
              '"prereleaseBranches"'
            ),
            ': [',
            d('span', { className: 'hljs-string' }, void 0, '"beta"'),
            ']',
            d('br', {}),
            '}',
            d('br', {})
          )
        ),
        W = d(
          'p',
          {},
          void 0,
          'Run ',
          d('code', {}, void 0, 'auto next'),
          ' from ',
          d('code', {}, void 0, 'beta'),
          ' branch => Publish prerelease to ',
          d('code', {}, void 0, 'beta'),
          ' tag. Run ',
          d('code', {}, void 0, 'auto next'),
          ' from ',
          d('code', {}, void 0, 'feature'),
          ' branch => Publish prerelease to ',
          d('code', {}, void 0, 'beta'),
          ' tag.'
        ),
        Y = d('code', {}, void 0, 'shipit'),
        J = d(
          'p',
          {},
          void 0,
          'The ',
          d('code', {}, void 0, 'shipit'),
          ' command will now also publish a prerelease when ran from a prerelease branch. You can use this in a few different ways:'
        ),
        z = d(
          'ol',
          {},
          void 0,
          d(
            'li',
            {},
            void 0,
            'Two release branches: ',
            d('code', {}, void 0, 'master'),
            ' and ',
            d('code', {}, void 0, 'next')
          ),
          d(
            'li',
            {},
            void 0,
            'Without ',
            d('code', {}, void 0, 'next'),
            ' Branch (',
            d('code', {}, void 0, '--only-graduate-with-release-label'),
            ')'
          ),
          d(
            'li',
            {},
            void 0,
            'Multiple ',
            d('code', {}, void 0, 'next'),
            ' Branches (ex: ',
            d('code', {}, void 0, 'alpha'),
            ', ',
            d('code', {}, void 0, 'beta'),
            ', ',
            d('code', {}, void 0, 'rc'),
            ')'
          ),
          d('li', {}, void 0, 'Feature Pre-releases')
        ),
        $ = d(
          'p',
          {},
          void 0,
          'Label configuration just got a whole lot simpler 🎉.'
        ),
        Q = d(
          'ol',
          {},
          void 0,
          d(
            'li',
            {},
            void 0,
            d(
              'p',
              {},
              void 0,
              'Labels can now only be supplied as an array of label objects.'
            ),
            d(
              'pre',
              {},
              void 0,
              d(
                'code',
                { className: 'language-json' },
                void 0,
                '{',
                d('br', {}),
                '  ',
                d('span', { className: 'hljs-attr' }, void 0, '"labels"'),
                ': [',
                d('br', {}),
                '    { ',
                d('span', { className: 'hljs-attr' }, void 0, '"releaseType"'),
                ': ',
                d('span', { className: 'hljs-string' }, void 0, '"major"'),
                ', ',
                d('span', { className: 'hljs-attr' }, void 0, '"name"'),
                ': ',
                d(
                  'span',
                  { className: 'hljs-string' },
                  void 0,
                  '"Version: Major"'
                ),
                ' },',
                d('br', {}),
                '    { ',
                d('span', { className: 'hljs-attr' }, void 0, '"releaseType"'),
                ': ',
                d('span', { className: 'hljs-string' }, void 0, '"minor"'),
                ', ',
                d('span', { className: 'hljs-attr' }, void 0, '"name"'),
                ': ',
                d(
                  'span',
                  { className: 'hljs-string' },
                  void 0,
                  '"Version: Minor"'
                ),
                ' },',
                d('br', {}),
                '    { ',
                d('span', { className: 'hljs-attr' }, void 0, '"releaseType"'),
                ': ',
                d('span', { className: 'hljs-string' }, void 0, '"patch"'),
                ', ',
                d('span', { className: 'hljs-attr' }, void 0, '"name"'),
                ': ',
                d(
                  'span',
                  { className: 'hljs-string' },
                  void 0,
                  '"Version: Patch"'
                ),
                ' }',
                d('br', {}),
                '  ]',
                d('br', {}),
                '}',
                d('br', {})
              )
            )
          ),
          d(
            'li',
            {},
            void 0,
            d(
              'p',
              {},
              void 0,
              'Instead of using ',
              d('code', {}, void 0, 'skipReleaseLabels'),
              " just set the label's ",
              d('code', {}, void 0, 'type'),
              ' to ',
              d('code', {}, void 0, 'skip')
            ),
            d(
              'pre',
              {},
              void 0,
              d(
                'code',
                { className: 'language-json' },
                void 0,
                '{',
                d('br', {}),
                '  ',
                d('span', { className: 'hljs-attr' }, void 0, '"labels"'),
                ': [{ ',
                d('span', { className: 'hljs-attr' }, void 0, '"releaseType"'),
                ': ',
                d('span', { className: 'hljs-string' }, void 0, '"skip"'),
                ', ',
                d('span', { className: 'hljs-attr' }, void 0, '"name"'),
                ': ',
                d('span', { className: 'hljs-string' }, void 0, '"NO!"'),
                ' }]',
                d('br', {}),
                '}',
                d('br', {})
              )
            )
          ),
          d(
            'li',
            {},
            void 0,
            d(
              'p',
              {},
              void 0,
              'Overwrite default labels using ',
              d('code', {}, void 0, 'overwrite')
            ),
            d(
              'pre',
              {},
              void 0,
              d(
                'code',
                { className: 'language-json' },
                void 0,
                '{',
                d('br', {}),
                '  ',
                d('span', { className: 'hljs-attr' }, void 0, '"labels"'),
                ': [',
                d('br', {}),
                '    { ',
                d('span', { className: 'hljs-attr' }, void 0, '"releaseType"'),
                ': ',
                d('span', { className: 'hljs-string' }, void 0, '"major"'),
                ', ',
                d('span', { className: 'hljs-attr' }, void 0, '"name"'),
                ': ',
                d(
                  'span',
                  { className: 'hljs-string' },
                  void 0,
                  '"Version: Major"'
                ),
                ', ',
                d('span', { className: 'hljs-attr' }, void 0, '"overwrite"'),
                ': ',
                d('span', { className: 'hljs-literal' }, void 0, 'true'),
                ' }',
                d('br', {}),
                '  ]',
                d('br', {}),
                '}',
                d('br', {})
              )
            )
          ),
          d(
            'li',
            {},
            void 0,
            d(
              'p',
              {},
              void 0,
              'Add ',
              d('code', {}, void 0, 'none'),
              ' ',
              d('code', {}, void 0, 'releaseType'),
              '. This will act as a ',
              d('code', {}, void 0, 'skip-release'),
              ' unless paired with a SEMVER label'
            ),
            d(
              'pre',
              {},
              void 0,
              d(
                'code',
                { className: 'language-json' },
                void 0,
                '{',
                d('br', {}),
                '  ',
                d('span', { className: 'hljs-attr' }, void 0, '"labels"'),
                ': [{ ',
                d('span', { className: 'hljs-attr' }, void 0, '"releaseType"'),
                ': ',
                d('span', { className: 'hljs-string' }, void 0, '"none"'),
                ', ',
                d('span', { className: 'hljs-attr' }, void 0, '"name"'),
                ': ',
                d(
                  'span',
                  { className: 'hljs-string' },
                  void 0,
                  '"documentation"'
                ),
                ' }]',
                d('br', {}),
                '}',
                d('br', {})
              )
            )
          ),
          d(
            'li',
            {},
            void 0,
            d(
              'p',
              {},
              void 0,
              'Changed ',
              d('code', {}, void 0, 'title'),
              ' to ',
              d('code', {}, void 0, 'changelogTitle'),
              '.'
            ),
            d(
              'pre',
              {},
              void 0,
              d(
                'code',
                { className: 'language-json' },
                void 0,
                '{',
                d('br', {}),
                '  ',
                d('span', { className: 'hljs-attr' }, void 0, '"labels"'),
                ': [{ ',
                d(
                  'span',
                  { className: 'hljs-attr' },
                  void 0,
                  '"changelogTitle"'
                ),
                ': ',
                d(
                  'span',
                  { className: 'hljs-string' },
                  void 0,
                  '"New Docs Yo!"'
                ),
                ', ',
                d('span', { className: 'hljs-attr' }, void 0, '"name"'),
                ': ',
                d(
                  'span',
                  { className: 'hljs-string' },
                  void 0,
                  '"documentation"'
                ),
                ' }]',
                d('br', {}),
                '}',
                d('br', {})
              )
            )
          )
        ),
        X = d(
          'pre',
          {},
          void 0,
          d(
            'code',
            { className: 'language-json' },
            void 0,
            '{',
            d('br', {}),
            '  ',
            d('span', { className: 'hljs-attr' }, void 0, '"plugins"'),
            ': [[',
            d('span', { className: 'hljs-string' }, void 0, '"upload-assets"'),
            ', [',
            d(
              'span',
              { className: 'hljs-string' },
              void 0,
              '"./path/**/to/*.file"'
            ),
            ']]]',
            d('br', {}),
            '}',
            d('br', {})
          )
        ),
        K = d('code', {}, void 0, '--very-verbose, -w'),
        Z = d(
          'p',
          {},
          void 0,
          'Using -w for very verbose logs was a very odd choice on my part (two ',
          d('code', {}, void 0, 'v'),
          's next to each other look like a ',
          d('code', {}, void 0, 'w'),
          ' 😓). Instead you can now just add another ',
          d('code', {}, void 0, '-v'),
          ' and get the very verbose logs!'
        ),
        ee = d(
          'pre',
          {},
          void 0,
          d(
            'code',
            { className: 'language-sh' },
            void 0,
            d('span', { className: 'hljs-comment' }, void 0, '# old'),
            d('br', {}),
            'auto shipit -w',
            d('br', {}),
            d('br', {}),
            d('span', { className: 'hljs-comment' }, void 0, '# new'),
            d('br', {}),
            'auto shipit -vv',
            d('br', {}),
            d('span', { className: 'hljs-comment' }, void 0, '# or'),
            d('br', {}),
            'auto shipit --verbose --verbose',
            d('br', {})
          )
        ),
        ae = d('hr', {}),
        te = d(
          'p',
          {},
          void 0,
          'We hope you enjoy the new ways you can release your code!'
        ),
        oe = d(
          'p',
          {},
          void 0,
          '– Andrew Lisowski and the ',
          d('code', {}, void 0, 'auto'),
          ' Team'
        );
      var se = class extends r.default.Component {
        componentDidMount() {
          this.props.atIndex ||
            window.configuration.setBlogHero(
              'https://images.unsplash.com/photo-1485795046599-702122cd1267?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1950'
            );
        }
        render() {
          return d(
            'div',
            { className: (0, i.default)('blogPost', this.props.className) },
            void 0,
            d('p', {}, void 0, this.props.heroUrl),
            d(
              'section',
              {},
              void 0,
              this.props.stub
                ? d(
                    'div',
                    { className: 'card' },
                    void 0,
                    d(
                      'div',
                      { className: 'card-content' },
                      void 0,
                      d(
                        'div',
                        { className: 'media blogHeader' },
                        void 0,
                        d(
                          'div',
                          { className: 'media-content has-text-centered' },
                          void 0,
                          b,
                          f,
                          d(
                            'p',
                            { className: 'subtitle is-6 blogSubtitle' },
                            void 0,
                            d(
                              u,
                              {
                                currentPage: ((this && this.props) || props)
                                  .currentPage,
                                target: '_blank',
                                to: 'https://twitter.com/HipsterSmoothie'
                              },
                              void 0,
                              'Andrew Lisowski'
                            ),
                            w
                          )
                        )
                      ),
                      d(
                        'div',
                        { className: 'blogBody' },
                        void 0,
                        y,
                        d(
                          'p',
                          {},
                          void 0,
                          'If you are unfamiliar, ',
                          N,
                          ' is a CLI tool which helps you version your code and automate any part of your release pipeline.',
                          j,
                          "'s main use is for automating your versioning with ",
                          d(
                            u,
                            {
                              currentPage: ((this && this.props) || props)
                                .currentPage,
                              target: '_blank',
                              to: 'https://semver.org/',
                              className: 'external-link'
                            },
                            void 0,
                            'semantic versioning'
                          ),
                          ' and ',
                          d(
                            u,
                            {
                              currentPage: ((this && this.props) || props)
                                .currentPage,
                              target: '_blank',
                              to: 'https://github.com/',
                              className: 'external-link'
                            },
                            void 0,
                            'GitHub'
                          ),
                          ' pull request labels. It handles determining the next version, creating changelogs, publishing to package managers, publishing ',
                          d(
                            u,
                            {
                              currentPage: ((this && this.props) || props)
                                .currentPage,
                              target: '_blank',
                              to:
                                'https://help.github.com/en/github/administering-a-repository/about-releases',
                              className: 'external-link'
                            },
                            void 0,
                            'GitHub Releases'
                          ),
                          ', and so much more through plugins.'
                        ),
                        P,
                        k
                      )
                    )
                  )
                : d(
                    'div',
                    { className: 'card' },
                    void 0,
                    d(
                      'div',
                      { className: 'card-content' },
                      void 0,
                      d(
                        'div',
                        { className: 'media blogHeader' },
                        void 0,
                        d(
                          'div',
                          { className: 'media-content has-text-centered' },
                          void 0,
                          x,
                          O,
                          d(
                            'p',
                            { className: 'subtitle is-6 blogSubtitle' },
                            void 0,
                            d(
                              u,
                              {
                                currentPage: ((this && this.props) || props)
                                  .currentPage,
                                target: '_blank',
                                to: 'https://twitter.com/HipsterSmoothie'
                              },
                              void 0,
                              'Andrew Lisowski'
                            ),
                            C
                          )
                        )
                      ),
                      d(
                        'div',
                        { className: 'blogBody' },
                        void 0,
                        d(
                          'div',
                          {},
                          void 0,
                          L,
                          d(
                            'p',
                            {},
                            void 0,
                            'If you are unfamiliar, ',
                            S,
                            ' is a CLI tool which helps you version your code and automate any part of your release pipeline.',
                            T,
                            "'s main use is for automating your versioning with ",
                            d(
                              u,
                              {
                                currentPage: ((this && this.props) || props)
                                  .currentPage,
                                target: '_blank',
                                to: 'https://semver.org/',
                                className: 'external-link'
                              },
                              void 0,
                              'semantic versioning'
                            ),
                            ' and ',
                            d(
                              u,
                              {
                                currentPage: ((this && this.props) || props)
                                  .currentPage,
                                target: '_blank',
                                to: 'https://github.com/',
                                className: 'external-link'
                              },
                              void 0,
                              'GitHub'
                            ),
                            ' pull request labels. It handles determining the next version, creating changelogs, publishing to package managers, publishing ',
                            d(
                              u,
                              {
                                currentPage: ((this && this.props) || props)
                                  .currentPage,
                                target: '_blank',
                                to:
                                  'https://help.github.com/en/github/administering-a-repository/about-releases',
                                className: 'external-link'
                              },
                              void 0,
                              'GitHub Releases'
                            ),
                            ', and so much more through plugins.'
                          ),
                          I,
                          _,
                          M,
                          D,
                          d(
                            'h2',
                            { id: 'next-command' },
                            void 0,
                            E,
                            ' Command ',
                            d(u, {
                              currentPage: ((this && this.props) || props)
                                .currentPage,
                              className: 'fas fa-hashtag headerLink',
                              to: '#next-command',
                              'aria-hidden': 'true'
                            })
                          ),
                          A,
                          H,
                          d(
                            'p',
                            {},
                            void 0,
                            'The only prerelease branch ',
                            R,
                            ' comes configured with is ',
                            B,
                            '. You can configure as many branches as you want with the ',
                            d(
                              u,
                              {
                                currentPage: ((this && this.props) || props)
                                  .currentPage,
                                to:
                                  '/auto/pages/autorc.html#prerelease-branches'
                              },
                              void 0,
                              'prereleaseBranches'
                            ),
                            ' ',
                            F,
                            ' option. If your package manager plugin supports release tags, such as the ',
                            d(
                              u,
                              {
                                currentPage: ((this && this.props) || props)
                                  .currentPage,
                                to: '/auto/plugins/npm/README.html'
                              },
                              void 0,
                              'npm'
                            ),
                            ' plugin, ',
                            G,
                            ' will publish the prerelease branch to a tag of the same name. Calling ',
                            q,
                            ' from a one of these branches will publish a prerelease, otherwise it will publish to your default prerelease branch/tag.'
                          ),
                          d(
                            'h3',
                            { id: 'example-usage' },
                            void 0,
                            'Example Usage ',
                            d(u, {
                              currentPage: ((this && this.props) || props)
                                .currentPage,
                              className: 'fas fa-hashtag headerLink',
                              to: '#example-usage',
                              'aria-hidden': 'true'
                            })
                          ),
                          V,
                          U,
                          W,
                          d(
                            'h2',
                            { id: 'prerelease-branches-with-shipit' },
                            void 0,
                            'Prerelease Branches with ',
                            Y,
                            ' ',
                            d(u, {
                              currentPage: ((this && this.props) || props)
                                .currentPage,
                              className: 'fas fa-hashtag headerLink',
                              to: '#prerelease-branches-with-shipit',
                              'aria-hidden': 'true'
                            })
                          ),
                          J,
                          z,
                          d(
                            'p',
                            {},
                            void 0,
                            'Read more ',
                            d(
                              u,
                              {
                                currentPage: ((this && this.props) || props)
                                  .currentPage,
                                to:
                                  '/auto/pages/generated/shipit.html#prereleases'
                              },
                              void 0,
                              'here'
                            ),
                            '.'
                          ),
                          d(
                            'h2',
                            { id: 'label-configuration' },
                            void 0,
                            'Label Configuration ',
                            d(u, {
                              currentPage: ((this && this.props) || props)
                                .currentPage,
                              className: 'fas fa-hashtag headerLink',
                              to: '#label-configuration',
                              'aria-hidden': 'true'
                            })
                          ),
                          $,
                          Q,
                          d(
                            'h2',
                            { id: 'upload-assets---globs' },
                            void 0,
                            'Upload Assets - Globs ',
                            d(u, {
                              currentPage: ((this && this.props) || props)
                                .currentPage,
                              className: 'fas fa-hashtag headerLink',
                              to: '#upload-assets---globs',
                              'aria-hidden': 'true'
                            })
                          ),
                          d(
                            'p',
                            {},
                            void 0,
                            'You might want to upload multiple files or you might not know the file-name (ex: a vscode extension w/ a version number in the name), but you know the pattern of the filenames that you want to upload. So now you can use ',
                            d(
                              u,
                              {
                                currentPage: ((this && this.props) || props)
                                  .currentPage,
                                target: '_blank',
                                to:
                                  'https://github.com/mrmlnc/fast-glob#basic-syntax',
                                className: 'external-link'
                              },
                              void 0,
                              'globs'
                            ),
                            '!'
                          ),
                          X,
                          d(
                            'h2',
                            {
                              id: '%F0%9F%92%A5-other-notable-breaking-changes'
                            },
                            void 0,
                            '💥 Other Notable Breaking Changes ',
                            d(u, {
                              currentPage: ((this && this.props) || props)
                                .currentPage,
                              className: 'fas fa-hashtag headerLink',
                              to:
                                '#%F0%9F%92%A5-other-notable-breaking-changes',
                              'aria-hidden': 'true'
                            })
                          ),
                          d(
                            'h3',
                            { id: 'deprecate---very-verbose%2C--w-flag' },
                            void 0,
                            'Deprecate ',
                            K,
                            ' Flag ',
                            d(u, {
                              currentPage: ((this && this.props) || props)
                                .currentPage,
                              className: 'fas fa-hashtag headerLink',
                              to: '#deprecate---very-verbose%2C--w-flag',
                              'aria-hidden': 'true'
                            })
                          ),
                          Z,
                          ee,
                          ae,
                          te,
                          oe,
                          d(
                            'p',
                            {},
                            void 0,
                            d(
                              u,
                              {
                                currentPage: ((this && this.props) || props)
                                  .currentPage,
                                target: '_blank',
                                to:
                                  'https://github.com/intuit/auto/releases/tag/v8.0.0',
                                className: 'external-link'
                              },
                              void 0,
                              'View the full release notes'
                            ),
                            '.'
                          )
                        )
                      )
                    )
                  )
            )
          );
        }
      };
      (a.default = se), (e.exports = a.default);
    }
  }
]);
//# sourceMappingURL=v8.js.map
