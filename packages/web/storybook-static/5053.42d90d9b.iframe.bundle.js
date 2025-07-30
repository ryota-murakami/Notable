/*! For license information please see 5053.42d90d9b.iframe.bundle.js.LICENSE.txt */
'use strict'
;(self.webpackChunk_notable_web = self.webpackChunk_notable_web || []).push([
  [5053],
  {
    '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react-dom/cjs/react-dom-test-utils.production.js':
      (__unused_webpack_module, exports, __webpack_require__) => {
        var console = __webpack_require__(
            '../../node_modules/.pnpm/console-browserify@1.2.0/node_modules/console-browserify/index.js'
          ),
          React = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
          ),
          didWarnAboutUsingAct = !1
        exports.act = function (callback) {
          return (
            !1 === didWarnAboutUsingAct &&
              ((didWarnAboutUsingAct = !0),
              console.error(
                '`ReactDOMTestUtils.act` is deprecated in favor of `React.act`. Import `act` from `react` instead of `react-dom/test-utils`. See https://react.dev/warnings/react-dom-test-utils for more info.'
              )),
            React.act(callback)
          )
        }
      },
  },
])
