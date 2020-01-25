(window.webpackJsonp = window.webpackJsonp || []).push([
  [35],
  {
    54: function(e, t, o) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var a,
        r = l(o(3)),
        n = (function(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var o in e)
              if (Object.prototype.hasOwnProperty.call(e, o)) {
                var a =
                  Object.defineProperty && Object.getOwnPropertyDescriptor
                    ? Object.getOwnPropertyDescriptor(e, o)
                    : {};
                a.get || a.set ? Object.defineProperty(t, o, a) : (t[o] = e[o]);
              }
          return (t.default = e), t;
        })(o(0)),
        s = l(o(2)),
        i = l(o(106));
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function c(e, t, o, r) {
        a ||
          (a =
            ('function' == typeof Symbol &&
              Symbol.for &&
              Symbol.for('react.element')) ||
            60103);
        var n = e && e.defaultProps,
          s = arguments.length - 3;
        if ((t || 0 === s || (t = { children: void 0 }), t && n))
          for (var i in n) void 0 === t[i] && (t[i] = n[i]);
        else t || (t = n || {});
        if (1 === s) t.children = r;
        else if (s > 1) {
          for (var l = new Array(s), c = 0; c < s; c++) l[c] = arguments[c + 3];
          t.children = l;
        }
        return {
          $$typeof: a,
          type: e,
          key: void 0 === o ? null : '' + o,
          ref: null,
          props: t,
          _owner: null
        };
      }
      function d(e, t, o) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = o),
          e
        );
      }
      function h() {
        return (h =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var o = arguments[t];
              for (var a in o)
                Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
            }
            return e;
          }).apply(this, arguments);
      }
      function p(e, t) {
        if (null == e) return {};
        var o,
          a,
          r = (function(e, t) {
            if (null == e) return {};
            var o,
              a,
              r = {},
              n = Object.keys(e);
            for (a = 0; a < n.length; a++)
              (o = n[a]), t.indexOf(o) >= 0 || (r[o] = e[o]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          for (a = 0; a < n.length; a++)
            (o = n[a]),
              t.indexOf(o) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, o) &&
                  (r[o] = e[o]));
        }
        return r;
      }
      const u = e => {
        let { to: t } = e,
          o = p(e, ['to']);
        return t.includes('http')
          ? n.default.createElement('a', h({}, e, { href: t }))
          : ('#' === t[0] &&
              (t = r.default.join('/auto/', 'blog/pr-in-progress.html') + t),
            n.default.createElement(
              'a',
              h({}, o, {
                href: t,
                onClick: o => {
                  if ((o.preventDefault(), '#' === e.to)) return !1;
                  const a = new URL(r.default.join(window.location.origin, t));
                  window.history.pushState(
                    (e => ({
                      href: e.href,
                      pathname: e.pathname,
                      hash: e.hash,
                      query: e.query
                    }))(a),
                    null,
                    t
                  ),
                    e.onClick();
                  const n = new CustomEvent('changeLocation', { detail: a });
                  return dispatchEvent(n), !1;
                }
              })
            ));
      };
      u.defaultProps = { href: '', onClick: () => {} };
      const m = {
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
          }),
        'https://i.giphy.com/media/l4HodBpDmoMA5p9bG/200w.webp': () =>
          Promise.resolve({
            default: {
              src: {
                src: 'https://i.giphy.com/media/l4HodBpDmoMA5p9bG/200w.webp'
              },
              preSrc: 'https://i.giphy.com/media/l4HodBpDmoMA5p9bG/200w.webp',
              height: 200,
              width: 200
            }
          }),
        '../images/pr-to-pr.png': () => o.e(17).then(o.t.bind(null, 133, 7))
      };
      class g extends n.default.Component {
        constructor(...e) {
          super(...e),
            d(this, 'state', { image: null, ImageProvider: m[this.props.src] });
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
            ? n.default.createElement(
                i.default,
                h({}, this.props, {
                  className: (0, s.default)('image', this.props.className),
                  src: e.src.src,
                  width: e.src.width || e.width,
                  height: e.src.height || e.height,
                  placeholder: { lqip: e.preSrc },
                  srcSet: e.src.images
                    ? e.src.images.map(e =>
                        (function(e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var o = null != arguments[t] ? arguments[t] : {},
                              a = Object.keys(o);
                            'function' == typeof Object.getOwnPropertySymbols &&
                              (a = a.concat(
                                Object.getOwnPropertySymbols(o).filter(function(
                                  e
                                ) {
                                  return Object.getOwnPropertyDescriptor(o, e)
                                    .enumerable;
                                })
                              )),
                              a.forEach(function(t) {
                                d(e, t, o[t]);
                              });
                          }
                          return e;
                        })({}, e, { src: e.path })
                      )
                    : [{ src: e.src, width: e.width }]
                })
              )
            : c('img', {
                className: (0, s.default)('image', this.props.className),
                src: e
              });
        }
      }
      const b = e => {
        var t, o;
        return (
          (o = t = class extends n.default.Component {
            constructor(...e) {
              super(...e), d(this, 'state', { Comp: null });
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
          d(t, 'defaultProps', { shouldLoad: !0 }),
          o
        );
      };
      b(() => o.e(31).then(o.bind(null, 107))),
        b(() => o.e(31).then(o.bind(null, 108)));
      var v = c(g, {
          src: '//www.gravatar.com/avatar/ff725a631f869cdb78beeb003825bb40',
          className: 'authorImage'
        }),
        f = c(
          'p',
          { className: 'title blogTitle' },
          void 0,
          'Merging PRs to other PRs'
        ),
        w = c('span', {}, void 0, ' on May 4, 2019', c('span', {})),
        y = c(
          'p',
          {},
          void 0,
          'Sometimes you are working on a big feature and you know it will require a lot of changes. These types of pull requests can be a nightmare to review. Taking in all the changes at once can be overwhelming. It makes it easy to miss smaller mistakes and can make it hard to guess the intent of the changes. Multiple features, bug fixes, or even breaking changes may make up this large PR.'
        ),
        P = c(
          'p',
          {},
          void 0,
          'One way to manage this problem is by making a PR to the large PR. Other contributors can review a smaller subset of changes and also follow along with development. In previous versions of ',
          c('code', {}, void 0, 'auto'),
          ', large PRs would not be represented well in the changelog and release notes. It would only include the main PR that got merged into master as the only changelog note.'
        ),
        k = c(
          'div',
          { className: 'has-text-centered learnMore' },
          void 0,
          c(u, { to: '/auto/blog/pr-in-progress.html' }, void 0, 'Read More')
        ),
        O = c(g, {
          src: '//www.gravatar.com/avatar/ff725a631f869cdb78beeb003825bb40',
          className: 'authorImage'
        }),
        N = c(
          'p',
          { className: 'title blogTitle' },
          void 0,
          'Merging PRs to other PRs'
        ),
        R = c('span', {}, void 0, ' on May 4, 2019', c('span', {})),
        j = c(
          'p',
          {},
          void 0,
          'Sometimes you are working on a big feature and you know it will require a lot of changes. These types of pull requests can be a nightmare to review. Taking in all the changes at once can be overwhelming. It makes it easy to miss smaller mistakes and can make it hard to guess the intent of the changes. Multiple features, bug fixes, or even breaking changes may make up this large PR.'
        ),
        S = c(
          'p',
          {},
          void 0,
          'One way to manage this problem is by making a PR to the large PR. Other contributors can review a smaller subset of changes and also follow along with development. In previous versions of ',
          c('code', {}, void 0, 'auto'),
          ', large PRs would not be represented well in the changelog and release notes. It would only include the main PR that got merged into master as the only changelog note.'
        ),
        x = c(
          'p',
          { className: 'smallImage' },
          void 0,
          c(g, {
            src: 'https://i.giphy.com/media/l4HodBpDmoMA5p9bG/200w.webp',
            alt: 'Clapping'
          })
        ),
        M = c(
          'p',
          { className: 'has-text-centered' },
          void 0,
          c('em', {}, void 0, 'Score!')
        ),
        I = c('hr', {}),
        _ = c('code', {}, void 0, 'shipit'),
        B = c('code', {}, void 0, 'shipit'),
        C = c('code', {}, void 0, 'latest'),
        D = c('code', {}, void 0, 'shipit'),
        H = c('code', {}, void 0, 'master'),
        q = c('code', {}, void 0, 'master'),
        A = c('code', {}, void 0, 'baseBranch'),
        E = c(
          'p',
          {},
          void 0,
          'Instead of waiting for #351 to get merged to write the ',
          c('code', {}, void 0, 'baseBranch'),
          ' functionality, I could make a PR to #351 and both PRs would be represented in the changelog!'
        ),
        T = c(
          'p',
          {},
          void 0,
          c(g, { src: '../images/pr-to-pr.png', alt: 'Sample release notes' })
        ),
        L = c('hr', {}),
        G = c(
          'p',
          {},
          void 0,
          'Now you can be a little more creative with how you manage large PR and have even more detailed changelogs.'
        );
      var J = class extends n.default.Component {
        componentDidMount() {
          this.props.atIndex ||
            window.configuration.setBlogHero(
              'https://images.unsplash.com/photo-1554520735-0a6b8b6ce8b7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1200&h=600&fit=crop&ixid=eyJhcHBfaWQiOjF9'
            );
        }
        render() {
          return c(
            'div',
            { className: (0, s.default)('blogPost', this.props.className) },
            void 0,
            c('p', {}, void 0, this.props.heroUrl),
            c(
              'section',
              {},
              void 0,
              this.props.stub
                ? c(
                    'div',
                    { className: 'card' },
                    void 0,
                    c(
                      'div',
                      { className: 'card-content' },
                      void 0,
                      c(
                        'div',
                        { className: 'media blogHeader' },
                        void 0,
                        c(
                          'div',
                          { className: 'media-content has-text-centered' },
                          void 0,
                          v,
                          f,
                          c(
                            'p',
                            { className: 'subtitle is-6 blogSubtitle' },
                            void 0,
                            c(
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
                      c(
                        'div',
                        { className: 'blogBody' },
                        void 0,
                        y,
                        P,
                        c(
                          'p',
                          {},
                          void 0,
                          'But thanks to ',
                          c(
                            u,
                            {
                              currentPage: ((this && this.props) || props)
                                .currentPage,
                              target: '_blank',
                              to: 'https://github.com/intuit/auto/pull/359',
                              className: 'external-link'
                            },
                            void 0,
                            'this PR'
                          ),
                          " that isn't true anymore! Now when you merge one PR to another both changes will be represented in the changelog."
                        ),
                        k
                      )
                    )
                  )
                : c(
                    'div',
                    { className: 'card' },
                    void 0,
                    c(
                      'div',
                      { className: 'card-content' },
                      void 0,
                      c(
                        'div',
                        { className: 'media blogHeader' },
                        void 0,
                        c(
                          'div',
                          { className: 'media-content has-text-centered' },
                          void 0,
                          O,
                          N,
                          c(
                            'p',
                            { className: 'subtitle is-6 blogSubtitle' },
                            void 0,
                            c(
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
                            R
                          )
                        )
                      ),
                      c(
                        'div',
                        { className: 'blogBody' },
                        void 0,
                        c(
                          'div',
                          {},
                          void 0,
                          j,
                          S,
                          c(
                            'p',
                            {},
                            void 0,
                            'But thanks to ',
                            c(
                              u,
                              {
                                currentPage: ((this && this.props) || props)
                                  .currentPage,
                                target: '_blank',
                                to: 'https://github.com/intuit/auto/pull/359',
                                className: 'external-link'
                              },
                              void 0,
                              'this PR'
                            ),
                            " that isn't true anymore! Now when you merge one PR to another both changes will be represented in the changelog."
                          ),
                          x,
                          M,
                          I,
                          c(
                            'p',
                            {},
                            void 0,
                            'For example in ',
                            c(
                              u,
                              {
                                currentPage: ((this && this.props) || props)
                                  .currentPage,
                                target: '_blank',
                                to: 'https://github.com/intuit/auto/pull/351',
                                className: 'external-link'
                              },
                              void 0,
                              'PR #351'
                            ),
                            ' we changed what happens when you call ',
                            _,
                            ' from a PR. Previously if you called ',
                            B,
                            ' it would create a new release and publish it to the ',
                            C,
                            ' tag. The PR made it so ',
                            D,
                            ' would create a canary release when run in a PR and only publish to latest from the ',
                            H,
                            ' branch.'
                          ),
                          c(
                            'p',
                            {},
                            void 0,
                            'Another ',
                            c(
                              u,
                              {
                                currentPage: ((this && this.props) || props)
                                  .currentPage,
                                target: '_blank',
                                to: 'https://github.com/zephraph',
                                className: 'external-link'
                              },
                              void 0,
                              'contributor'
                            ),
                            ' to the project pointed out that some users might not be using ',
                            q,
                            ' as their base branch, so the ',
                            A,
                            ' should be configurable.'
                          ),
                          E,
                          T,
                          L,
                          G
                        )
                      )
                    )
                  )
            )
          );
        }
      };
      (t.default = J), (e.exports = t.default);
    }
  }
]);
//# sourceMappingURL=pr-in-progress.js.map
