!(function(e) {
  function n(n) {
    for (
      var r, a, u = n[0], c = n[1], p = n[2], l = 0, g = [];
      l < u.length;
      l++
    )
      (a = u[l]), o[a] && g.push(o[a][0]), (o[a] = 0);
    for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (e[r] = c[r]);
    for (s && s(n); g.length; ) g.shift()();
    return i.push.apply(i, p || []), t();
  }
  function t() {
    for (var e, n = 0; n < i.length; n++) {
      for (var t = i[n], r = !0, u = 1; u < t.length; u++) {
        var c = t[u];
        0 !== o[c] && (r = !1);
      }
      r && (i.splice(n--, 1), (e = a((a.s = t[0]))));
    }
    return e;
  }
  var r = {},
    o = { 27: 0 },
    i = [];
  function a(n) {
    if (r[n]) return r[n].exports;
    var t = (r[n] = { i: n, l: !1, exports: {} });
    return e[n].call(t.exports, t, t.exports, a), (t.l = !0), t.exports;
  }
  (a.e = function(e) {
    var n = [],
      t = o[e];
    if (0 !== t)
      if (t) n.push(t[2]);
      else {
        var r = new Promise(function(n, r) {
          t = o[e] = [n, r];
        });
        n.push((t[2] = r));
        var i,
          u = document.createElement('script');
        (u.charset = 'utf-8'),
          (u.timeout = 120),
          a.nc && u.setAttribute('nonce', a.nc),
          (u.src = (function(e) {
            return (
              a.p +
              '' +
              ({
                0: 'vendors~README~autorc~both-worlds~canary~changelog~circleci~comment~getting-started~github-actions~h~7da87329',
                1: 'README',
                2: 'autorc',
                3: 'both-worlds',
                4: 'canary',
                5: 'changelog',
                6: 'circleci',
                7: 'comment',
                8: 'getting-started',
                9: 'github-actions',
                10: 'home',
                11: 'image-auto.gif',
                12: 'image-changelog.png',
                13: 'image-comment.png',
                14: 'image-complete-auto.png',
                15: 'image-default-auto.png',
                16: 'image-next-branch.png',
                17: 'image-pr-to-pr.png',
                18: 'image-pr.png',
                19: 'image-release.png',
                20: 'image-shipit.png',
                21: 'image-version.png',
                22: 'index',
                23: 'init',
                24: 'introduction',
                25: 'jenkins',
                26: 'label',
                28: 'next',
                29: 'non-npm',
                30: 'npm-canary-scope',
                31: 'plugin-embed',
                32: 'plugins',
                33: 'pr-body',
                34: 'pr-check',
                35: 'pr-in-progress',
                36: 'pr-interaction',
                37: 'pr-status',
                38: 'publishing',
                39: 'quick-merge',
                40: 'release',
                41: 'search-files',
                42: 'shipit',
                43: 'travis',
                44: 'troubleshooting',
                45: 'using-shipit',
                46: 'v8',
                48: 'version',
                49: 'why',
                50: 'writing-plugins'
              }[e] || e) +
              '.js'
            );
          })(e));
        var c = new Error();
        i = function(n) {
          (u.onerror = u.onload = null), clearTimeout(p);
          var t = o[e];
          if (0 !== t) {
            if (t) {
              var r = n && ('load' === n.type ? 'missing' : n.type),
                i = n && n.target && n.target.src;
              (c.message =
                'Loading chunk ' + e + ' failed.\n(' + r + ': ' + i + ')'),
                (c.name = 'ChunkLoadError'),
                (c.type = r),
                (c.request = i),
                t[1](c);
            }
            o[e] = void 0;
          }
        };
        var p = setTimeout(function() {
          i({ type: 'timeout', target: u });
        }, 12e4);
        (u.onerror = u.onload = i), document.head.appendChild(u);
      }
    return Promise.all(n);
  }),
    (a.m = e),
    (a.c = r),
    (a.d = function(e, n, t) {
      a.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: t });
    }),
    (a.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (a.t = function(e, n) {
      if ((1 & n && (e = a(e)), 8 & n)) return e;
      if (4 & n && 'object' == typeof e && e && e.__esModule) return e;
      var t = Object.create(null);
      if (
        (a.r(t),
        Object.defineProperty(t, 'default', { enumerable: !0, value: e }),
        2 & n && 'string' != typeof e)
      )
        for (var r in e)
          a.d(
            t,
            r,
            function(n) {
              return e[n];
            }.bind(null, r)
          );
      return t;
    }),
    (a.n = function(e) {
      var n =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return a.d(n, 'a', n), n;
    }),
    (a.o = function(e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (a.p = '/auto/'),
    (a.oe = function(e) {
      throw (console.error(e), e);
    });
  var u = (window.webpackJsonp = window.webpackJsonp || []),
    c = u.push.bind(u);
  (u.push = n), (u = u.slice());
  for (var p = 0; p < u.length; p++) n(u[p]);
  var s = c;
  i.push([10, 47]), t();
})({
  0: function(e, n) {
    e.exports = React;
  },
  10: function(e, n, t) {
    t(11), t(12), (e.exports = t(18));
  },
  11: function(e, n, t) {
    e.exports = t.p + 'e67c59643715620203abd1f00a7dc942.gif';
  },
  19: function(e, n) {
    e.exports = ReactDOM;
  }
});
//# sourceMappingURL=main.js.map
