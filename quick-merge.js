(window.webpackJsonp = window.webpackJsonp || []).push([
  [39],
  {
    65: function(e, t, o) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var r,
        n = a(o(3)),
        i = (function(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var o in e)
              if (Object.prototype.hasOwnProperty.call(e, o)) {
                var r =
                  Object.defineProperty && Object.getOwnPropertyDescriptor
                    ? Object.getOwnPropertyDescriptor(e, o)
                    : {};
                r.get || r.set ? Object.defineProperty(t, o, r) : (t[o] = e[o]);
              }
          return (t.default = e), t;
        })(o(0));
      a(o(2)), a(o(106));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function s(e, t, o, n) {
        r ||
          (r =
            ('function' == typeof Symbol &&
              Symbol.for &&
              Symbol.for('react.element')) ||
            60103);
        var i = e && e.defaultProps,
          a = arguments.length - 3;
        if ((t || 0 === a || (t = { children: void 0 }), t && i))
          for (var s in i) void 0 === t[s] && (t[s] = i[s]);
        else t || (t = i || {});
        if (1 === a) t.children = n;
        else if (a > 1) {
          for (var l = new Array(a), u = 0; u < a; u++) l[u] = arguments[u + 3];
          t.children = l;
        }
        return {
          $$typeof: r,
          type: e,
          key: void 0 === o ? null : '' + o,
          ref: null,
          props: t,
          _owner: null
        };
      }
      function l(e, t, o) {
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
      function u() {
        return (u =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var o = arguments[t];
              for (var r in o)
                Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function d(e, t) {
        if (null == e) return {};
        var o,
          r,
          n = (function(e, t) {
            if (null == e) return {};
            var o,
              r,
              n = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (o = i[r]), t.indexOf(o) >= 0 || (n[o] = e[o]);
            return n;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (o = i[r]),
              t.indexOf(o) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, o) &&
                  (n[o] = e[o]));
        }
        return n;
      }
      const c = e => {
        let { to: t } = e,
          o = d(e, ['to']);
        return t.includes('http')
          ? i.default.createElement('a', u({}, e, { href: t }))
          : ('#' === t[0] &&
              (t = n.default.join('/auto/', 'pages/quick-merge.html') + t),
            i.default.createElement(
              'a',
              u({}, o, {
                href: t,
                onClick: o => {
                  if ((o.preventDefault(), '#' === e.to)) return !1;
                  const r = new URL(n.default.join(window.location.origin, t));
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
                  const i = new CustomEvent('changeLocation', { detail: r });
                  return dispatchEvent(i), !1;
                }
              })
            ));
      };
      c.defaultProps = { href: '', onClick: () => {} };
      const h = e => {
        var t, o;
        return (
          (o = t = class extends i.default.Component {
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
          l(t, 'defaultProps', { shouldLoad: !0 }),
          o
        );
      };
      h(() => o.e(31).then(o.bind(null, 107))),
        h(() => o.e(31).then(o.bind(null, 108)));
      var p = s('h1', {}, void 0, 'Merging Quickly'),
        f = s(
          'p',
          {},
          void 0,
          'One major caveat of ',
          s('code', {}, void 0, 'auto'),
          ' is that you need to be mindful of merging multiple PRs at once. You ',
          s('strong', {}, void 0, 'must not'),
          ' merge two PRs at once or you ',
          s('em', {}, void 0, 'will'),
          ' botch one of the releases.'
        ),
        v = s(
          'p',
          {},
          void 0,
          s('code', {}, void 0, 'auto'),
          ' works by looking at the ',
          s('code', {}, void 0, 'git'),
          ' tree to calculate the version bump then makes commits for the ',
          s('code', {}, void 0, 'CHANGELOG.md'),
          ' and the new version. If you merge two PRs at once:'
        ),
        m = s(
          'ol',
          {},
          void 0,
          s('li', {}, void 0, 'one might pick up the others changes'),
          s(
            'li',
            {},
            void 0,
            'they might try to publish the same version number'
          ),
          s(
            'li',
            {},
            void 0,
            "one will try to push over the other's changes and fail"
          )
        ),
        g = s(
          'article',
          { className: 'message column is-success' },
          void 0,
          s(
            'div',
            { className: 'message-body' },
            void 0,
            s(
              'p',
              {},
              void 0,
              "If you ensure that the last build on master has finished you shouldn't run into any problems!"
            )
          )
        ),
        b = s('code', {}, void 0, 'skip-release'),
        y = s(
          'p',
          {},
          void 0,
          'The one exception to this rule with when merging a bunch of PRs with ',
          s('code', {}, void 0, 'skip-release'),
          ' labels.'
        ),
        w = s(
          'p',
          {},
          void 0,
          "You still can't merge a PR that triggers a release and then merge a PR with ",
          s('code', {}, void 0, 'skip-release'),
          '. This will result in problem 3 from above.'
        ),
        P = s(
          'pre',
          {},
          void 0,
          s(
            'code',
            { className: 'language-txt' },
            void 0,
            '1. Merge PR #4 "patch"',
            s('br', {}),
            '2. Merge PR #5 "skip-release"',
            s('br', {}),
            s('br', {}),
            'Result: #4 tries to push commits over #5 and fails',
            s('br', {})
          )
        ),
        k = s(
          'p',
          {},
          void 0,
          'But you can merge a bunch of PRs with ',
          s('code', {}, void 0, 'skip-release'),
          ' then merge a PR that triggers a release.'
        ),
        O = s(
          'pre',
          {},
          void 0,
          s(
            'code',
            { className: 'language-txt' },
            void 0,
            '1. Merge PR #4 "skip-release"',
            s('br', {}),
            '2. Merge PR #5 "skip-release"',
            s('br', {}),
            '3. Merge PR #7 "patch"',
            s('br', {}),
            s('br', {}),
            'Result: 1 "patch" released w/all PRs',
            s('br', {})
          )
        ),
        R = s(
          'p',
          {},
          void 0,
          'Because ',
          s('code', {}, void 0, 'skip-release'),
          ' is present no commits are made and the release is fine!'
        );
      var j = e =>
        s(
          'div',
          { className: e.className },
          void 0,
          s(
            'section',
            {},
            void 0,
            p,
            f,
            v,
            m,
            g,
            s(
              'h2',
              { id: 'with-skip-release' },
              void 0,
              'With ',
              b,
              ' ',
              s(c, {
                currentPage: e.currentPage,
                className: 'fas fa-hashtag headerLink',
                to: '#with-skip-release',
                'aria-hidden': 'true'
              })
            ),
            y,
            w,
            P,
            k,
            O,
            R
          )
        );
      (t.default = j), (e.exports = t.default);
    }
  }
]);
//# sourceMappingURL=quick-merge.js.map
