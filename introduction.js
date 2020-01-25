(window.webpackJsonp = window.webpackJsonp || []).push([
  [24],
  {
    60: function(e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      n(r(3));
      var o,
        a = (function(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var r in e)
              if (Object.prototype.hasOwnProperty.call(e, r)) {
                var o =
                  Object.defineProperty && Object.getOwnPropertyDescriptor
                    ? Object.getOwnPropertyDescriptor(e, r)
                    : {};
                o.get || o.set ? Object.defineProperty(t, r, o) : (t[r] = e[r]);
              }
          return (t.default = e), t;
        })(r(0)),
        s = n(r(2)),
        i = n(r(106));
      function n(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function l(e, t, r, a) {
        o ||
          (o =
            ('function' == typeof Symbol &&
              Symbol.for &&
              Symbol.for('react.element')) ||
            60103);
        var s = e && e.defaultProps,
          i = arguments.length - 3;
        if ((t || 0 === i || (t = { children: void 0 }), t && s))
          for (var n in s) void 0 === t[n] && (t[n] = s[n]);
        else t || (t = s || {});
        if (1 === i) t.children = a;
        else if (i > 1) {
          for (var l = new Array(i), c = 0; c < i; c++) l[c] = arguments[c + 3];
          t.children = l;
        }
        return {
          $$typeof: o,
          type: e,
          key: void 0 === r ? null : '' + r,
          ref: null,
          props: t,
          _owner: null
        };
      }
      function c(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = r),
          e
        );
      }
      function u() {
        return (u =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var o in r)
                Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
            }
            return e;
          }).apply(this, arguments);
      }
      const d = {
        '../images/auto.gif': () => r.e(11).then(r.t.bind(null, 134, 7))
      };
      const p = e => {
        var t, r;
        return (
          (r = t = class extends a.default.Component {
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
                ? a.default.createElement(
                    e,
                    this.props,
                    this.props.children || null
                  )
                : null;
            }
          }),
          c(t, 'defaultProps', { shouldLoad: !0 }),
          r
        );
      };
      p(() => r.e(31).then(r.bind(null, 107))),
        p(() => r.e(31).then(r.bind(null, 108)));
      var h = l(
        'section',
        {},
        void 0,
        l(
          'p',
          {},
          void 0,
          l(
            class extends a.default.Component {
              constructor(...e) {
                super(...e),
                  c(this, 'state', {
                    image: null,
                    ImageProvider: d[this.props.src]
                  });
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
                  ? a.default.createElement(
                      i.default,
                      u({}, this.props, {
                        className: (0, s.default)(
                          'image',
                          this.props.className
                        ),
                        src: e.src.src,
                        width: e.src.width || e.width,
                        height: e.src.height || e.height,
                        placeholder: { lqip: e.preSrc },
                        srcSet: e.src.images
                          ? e.src.images.map(e =>
                              (function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                  var r =
                                      null != arguments[t] ? arguments[t] : {},
                                    o = Object.keys(r);
                                  'function' ==
                                    typeof Object.getOwnPropertySymbols &&
                                    (o = o.concat(
                                      Object.getOwnPropertySymbols(r).filter(
                                        function(e) {
                                          return Object.getOwnPropertyDescriptor(
                                            r,
                                            e
                                          ).enumerable;
                                        }
                                      )
                                    )),
                                    o.forEach(function(t) {
                                      c(e, t, r[t]);
                                    });
                                }
                                return e;
                              })({}, e, { src: e.path })
                            )
                          : [{ src: e.src, width: e.width }]
                      })
                    )
                  : l('img', {
                      className: (0, s.default)('image', this.props.className),
                      src: e
                    });
              }
            },
            {
              src: '../images/auto.gif',
              alt: 'Markdown',
              className: 'header-image'
            }
          )
        ),
        l('h1', { className: 'has-text-centered' }, void 0, '🚀 auto 🚀'),
        l(
          'p',
          {},
          void 0,
          'Automated releases powered by pull request labels. Streamline your release workflow and publish constantly! ',
          l('code', {}, void 0, 'auto'),
          ' is meant to be run in a continuous integration (CI) environment, but all the commands work locally as well.'
        ),
        l('p', {}, void 0, 'Release Features:'),
        l(
          'ul',
          {},
          void 0,
          l('li', {}, void 0, 'Calculate semantic version bumps from PRs'),
          l(
            'li',
            {},
            void 0,
            'Skip a release with the ',
            l('code', {}, void 0, 'skip-release'),
            ' label'
          ),
          l('li', {}, void 0, 'Publish canary releases from PRs or locally'),
          l(
            'li',
            {},
            void 0,
            'Generate changelogs with fancy headers, authors, and monorepo package association'
          ),
          l('li', {}, void 0, 'Use labels to create new changelog sections'),
          l('li', {}, void 0, 'Generate a GitHub release')
        ),
        l('p', {}, void 0, 'Pull Request Interaction Features:'),
        l(
          'ul',
          {},
          void 0,
          l('li', {}, void 0, 'Get the labels for a PR'),
          l('li', {}, void 0, 'Set the status of a PR'),
          l('li', {}, void 0, 'Check that a pull request has a SemVer label'),
          l('li', {}, void 0, 'Comment on a PR with markdown'),
          l(
            'li',
            {},
            void 0,
            'Update the PR body with contextual build metadata'
          )
        )
      );
      var f = e => l('div', { className: e.className }, void 0, h);
      (t.default = f), (e.exports = t.default);
    }
  }
]);
//# sourceMappingURL=introduction.js.map
