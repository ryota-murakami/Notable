'use strict'
;(self.webpackChunk_notable_web = self.webpackChunk_notable_web || []).push([
  [8360],
  {
    './components/ui/label.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { J: () => Label })
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
        ),
        _lib_utils__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__('./lib/utils.ts')
      function cov_avo87xxpi() {
        var path =
            '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/label.tsx',
          global = new Function('return this')(),
          gcv = '__coverage__',
          coverage = global[gcv] || (global[gcv] = {})
        ;(coverage[path] &&
          '793fd541fe3f75b2c5c7c366593aead322006f1a' === coverage[path].hash) ||
          (coverage[path] = {
            path: '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/label.tsx',
            statementMap: {
              0: {
                start: { line: 4, column: 28 },
                end: { line: 10, column: 2 },
              },
              1: { start: { line: 5, column: 4 }, end: { line: 9, column: 7 } },
              2: {
                start: { line: 11, column: 0 },
                end: { line: 11, column: 28 },
              },
              3: {
                start: { line: 13, column: 0 },
                end: { line: 17, column: 2 },
              },
            },
            fnMap: {
              0: {
                name: '(anonymous_0)',
                decl: {
                  start: { line: 4, column: 45 },
                  end: { line: 4, column: 46 },
                },
                loc: {
                  start: { line: 4, column: 77 },
                  end: { line: 10, column: 1 },
                },
                line: 4,
              },
            },
            branchMap: {},
            s: { 0: 0, 1: 0, 2: 0, 3: 0 },
            f: { 0: 0 },
            b: {},
            inputSourceMap: {
              version: 3,
              sources: [
                '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/label.tsx',
              ],
              sourcesContent: [
                "import * as React from 'react'\nimport { cn } from '@/lib/utils'\n\nexport interface LabelProps\n  extends React.LabelHTMLAttributes<HTMLLabelElement> {}\n\nconst Label = React.forwardRef<HTMLLabelElement, LabelProps>(\n  ({ className, ...props }, ref) => {\n    return (\n      <label\n        ref={ref}\n        className={cn(\n          'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',\n          className\n        )}\n        {...props}\n      />\n    )\n  }\n)\nLabel.displayName = 'Label'\n\nexport { Label }\n",
              ],
              names: [],
              mappings:
                ';AAAA,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAC7B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAK/B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,eAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,AAC7B,CAD8B,AAC7B,CAD8B,AAC7B,CAD8B,AAC7B,CAD8B,AAC7B,CAD8B,AAC7B,CAAC,AAD6B,CAAC,AAC7B,CAD8B,AAC7B,CAD8B,AAC7B,CAD8B,AAC7B,CAD8B,AAC7B,CAD8B,AAC7B,CAD8B,AAC7B,CAD8B,AAC7B,CAAC,AAD6B,CAC5B,AAD6B,CAAC,AAC7B,CAD8B,AAC7B,CAD8B,AAC7B,CAD8B,AAC7B,CAAC,AAD6B,CAAC,AAC7B,CAD8B,AAC7B,CAD8B,AAC7B,CAD8B,AAC7B,CAD8B,AAC7B,CAD8B,AAC7B,CAD8B,AAC7B,CAAC,AAD6B,CAC5B,CAAC,CAAC,CAAC,CAAC;IAChC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,cACL,KAAC,CAAC,CAAC,CAAC,CAAC;QACH,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACR,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACX,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAC5F,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QAET,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;AAGf;AAEF,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;AAE1B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC',
            },
            _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
            hash: '793fd541fe3f75b2c5c7c366593aead322006f1a',
          })
        var actualCoverage = coverage[path]
        return (
          (cov_avo87xxpi = function () {
            return actualCoverage
          }),
          actualCoverage
        )
      }
      cov_avo87xxpi()
      const Label =
        (cov_avo87xxpi().s[0]++,
        react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(
          ({ className, ...props }, ref) => (
            cov_avo87xxpi().f[0]++,
            cov_avo87xxpi().s[1]++,
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('label', {
              ref,
              className: (0, _lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(
                'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
                className
              ),
              ...props,
            })
          )
        ))
      ;(cov_avo87xxpi().s[2]++,
        (Label.displayName = 'Label'),
        cov_avo87xxpi().s[3]++,
        (Label.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Label',
        }))
    },
    './components/ui/switch.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { d: () => Switch })
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
        ),
        _radix_ui_react_switch__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            '../../node_modules/.pnpm/@radix-ui+react-switch@1.2.5_@types+react-dom@19.1.6_@types+react@19.1.8__@types+react@_493359caf905e3ba119eff41a016151d/node_modules/@radix-ui/react-switch/dist/index.mjs'
          ),
        _lib_utils__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__('./lib/utils.ts')
      function cov_2c8z57cccj() {
        var path =
            '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/switch.tsx',
          global = new Function('return this')(),
          gcv = '__coverage__',
          coverage = global[gcv] || (global[gcv] = {})
        ;(coverage[path] &&
          'a0b7f2277fc2479c060d7946fd9aaaeecfbf0668' === coverage[path].hash) ||
          (coverage[path] = {
            path: '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/switch.tsx',
            statementMap: {
              0: {
                start: { line: 6, column: 29 },
                end: { line: 13, column: 7 },
              },
              1: {
                start: { line: 6, column: 92 },
                end: { line: 13, column: 6 },
              },
              2: {
                start: { line: 14, column: 0 },
                end: { line: 14, column: 55 },
              },
              3: {
                start: { line: 16, column: 0 },
                end: { line: 19, column: 2 },
              },
            },
            fnMap: {
              0: {
                name: '(anonymous_0)',
                decl: {
                  start: { line: 6, column: 46 },
                  end: { line: 6, column: 47 },
                },
                loc: {
                  start: { line: 6, column: 92 },
                  end: { line: 13, column: 6 },
                },
                line: 6,
              },
            },
            branchMap: {},
            s: { 0: 0, 1: 0, 2: 0, 3: 0 },
            f: { 0: 0 },
            b: {},
            inputSourceMap: {
              version: 3,
              sources: [
                '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/switch.tsx',
              ],
              sourcesContent: [
                "'use client'\n\nimport * as React from 'react'\nimport * as SwitchPrimitives from '@radix-ui/react-switch'\n\nimport { cn } from '@/lib/utils'\n\nconst Switch = React.forwardRef<\n  React.ElementRef<typeof SwitchPrimitives.Root>,\n  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>\n>(({ className, ...props }, ref) => (\n  <SwitchPrimitives.Root\n    className={cn(\n      'peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input',\n      className\n    )}\n    {...props}\n    ref={ref}\n  >\n    <SwitchPrimitives.Thumb\n      className={cn(\n        'pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0'\n      )}\n    />\n  </SwitchPrimitives.Root>\n))\nSwitch.displayName = SwitchPrimitives.Root.displayName\n\nexport { Switch }\n",
              ],
              names: [],
              mappings:
                'AAAA,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;AAEX,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAC7B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAEzD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAE/B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,eAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAG7B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,YAClC,KAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;QACnB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACX,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAC7X,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QAET,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACT,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gCAER,KAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;YACpB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACX,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;;AAKnL,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;AAErD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC',
            },
            _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
            hash: 'a0b7f2277fc2479c060d7946fd9aaaeecfbf0668',
          })
        var actualCoverage = coverage[path]
        return (
          (cov_2c8z57cccj = function () {
            return actualCoverage
          }),
          actualCoverage
        )
      }
      cov_2c8z57cccj()
      const Switch =
        (cov_2c8z57cccj().s[0]++,
        react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(
          ({ className, ...props }, ref) => (
            cov_2c8z57cccj().f[0]++,
            cov_2c8z57cccj().s[1]++,
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _radix_ui_react_switch__WEBPACK_IMPORTED_MODULE_3__.bL,
              {
                className: (0, _lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(
                  'peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input',
                  className
                ),
                ...props,
                ref,
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _radix_ui_react_switch__WEBPACK_IMPORTED_MODULE_3__.zi,
                  {
                    className: (0, _lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(
                      'pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0'
                    ),
                  }
                ),
              }
            )
          )
        ))
      ;(cov_2c8z57cccj().s[2]++,
        (Switch.displayName =
          _radix_ui_react_switch__WEBPACK_IMPORTED_MODULE_3__.bL.displayName),
        cov_2c8z57cccj().s[3]++,
        (Switch.__docgenInfo = { description: '', methods: [] }))
    },
    './design-system/components/switch.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      ;(__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Checked: () => Checked,
          Controlled: () => Controlled,
          Default: () => Default,
          Disabled: () => Disabled,
          DisabledChecked: () => DisabledChecked,
          FormExample: () => FormExample,
          Sizes: () => Sizes,
          WithDescription: () => WithDescription,
          WithLabel: () => WithLabel,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        }))
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
        ),
        _components_ui_switch__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__('./components/ui/switch.tsx'),
        _components_ui_label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          './components/ui/label.tsx'
        ),
        _storybook_test__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          '../../node_modules/.pnpm/@storybook+test@8.6.14_storybook@9.0.18_@testing-library+dom@10.4.0_prettier@3.6.2_/node_modules/@storybook/test/dist/index.mjs'
        )
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: 'Design System/Forms/Switch',
          component: _components_ui_switch__WEBPACK_IMPORTED_MODULE_2__.d,
          tags: ['autodocs'],
          argTypes: {
            checked: {
              control: 'boolean',
              description: 'Controlled checked state',
            },
            defaultChecked: {
              control: 'boolean',
              description: 'Default checked state',
            },
            disabled: { control: 'boolean', description: 'Disabled state' },
            onCheckedChange: { action: 'checked-changed' },
          },
        },
        Default = {
          play: async ({ canvasElement }) => {
            const switchElement = (0,
            _storybook_test__WEBPACK_IMPORTED_MODULE_4__.ux)(
              canvasElement
            ).getByRole('switch')
            ;(await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
              switchElement
            ).toBeVisible(),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                switchElement
              ).toBeEnabled(),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                switchElement
              ).not.toBeChecked(),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_4__.Q4.click(
                switchElement
              ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                switchElement
              ).toBeChecked(),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                switchElement
              ).toHaveAttribute('data-state', 'checked'),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_4__.Q4.click(
                switchElement
              ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                switchElement
              ).not.toBeChecked(),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                switchElement
              ).toHaveAttribute('data-state', 'unchecked'),
              await switchElement.focus(),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_4__.Q4.keyboard(
                ' '
              ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                switchElement
              ).toBeChecked())
          },
        },
        Checked = {
          args: { defaultChecked: !0 },
          play: async ({ canvasElement }) => {
            const switchElement = (0,
            _storybook_test__WEBPACK_IMPORTED_MODULE_4__.ux)(
              canvasElement
            ).getByRole('switch')
            ;(await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
              switchElement
            ).toBeChecked(),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                switchElement
              ).toBeEnabled(),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                switchElement
              ).toHaveAttribute('data-state', 'checked'))
          },
        },
        Disabled = {
          args: { disabled: !0 },
          play: async ({ canvasElement }) => {
            const switchElement = (0,
            _storybook_test__WEBPACK_IMPORTED_MODULE_4__.ux)(
              canvasElement
            ).getByRole('switch')
            ;(await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
              switchElement
            ).toBeDisabled(),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                switchElement
              ).not.toBeChecked(),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_4__.Q4.click(
                switchElement
              ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                switchElement
              ).not.toBeChecked())
          },
        },
        DisabledChecked = {
          args: { defaultChecked: !0, disabled: !0 },
          play: async ({ canvasElement }) => {
            const switchElement = (0,
            _storybook_test__WEBPACK_IMPORTED_MODULE_4__.ux)(
              canvasElement
            ).getByRole('switch')
            ;(await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
              switchElement
            ).toBeDisabled(),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                switchElement
              ).toBeChecked(),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_4__.Q4.click(
                switchElement
              ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                switchElement
              ).toBeChecked())
          },
        },
        WithLabel = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              className: 'flex items-center space-x-2',
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _components_ui_switch__WEBPACK_IMPORTED_MODULE_2__.d,
                  { id: 'airplane-mode' }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _components_ui_label__WEBPACK_IMPORTED_MODULE_3__.J,
                  { htmlFor: 'airplane-mode', children: 'Airplane Mode' }
                ),
              ],
            }),
          play: async ({ canvasElement }) => {
            const canvas = (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.ux)(
                canvasElement
              ),
              switchElement = canvas.getByRole('switch'),
              label = canvas.getByText('Airplane Mode')
            ;(await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
              label
            ).toBeVisible(),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_4__.Q4.click(
                label
              ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                switchElement
              ).toBeChecked(),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_4__.Q4.click(
                label
              ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                switchElement
              ).not.toBeChecked())
            const labelElement = canvas.getByLabelText('Airplane Mode')
            await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
              labelElement
            ).toBe(switchElement)
          },
        },
        WithDescription = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              className: 'space-y-4',
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                  'div',
                  {
                    className: 'flex items-center space-x-2',
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _components_ui_switch__WEBPACK_IMPORTED_MODULE_2__.d,
                        { id: 'notifications', defaultChecked: !0 }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _components_ui_label__WEBPACK_IMPORTED_MODULE_3__.J,
                        {
                          htmlFor: 'notifications',
                          children: 'Enable notifications',
                        }
                      ),
                    ],
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                  className: 'text-sm text-muted-foreground',
                  children:
                    'Receive notifications about updates and new features.',
                }),
              ],
            }),
          play: async ({ canvasElement }) => {
            const canvas = (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.ux)(
                canvasElement
              ),
              switchElement = canvas.getByRole('switch'),
              label = canvas.getByText('Enable notifications'),
              description = canvas.getByText(
                'Receive notifications about updates and new features.'
              )
            ;(await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
              label
            ).toBeVisible(),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                description
              ).toBeVisible(),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                switchElement
              ).toBeChecked(),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                description
              ).toHaveClass('text-sm', 'text-muted-foreground'))
          },
        },
        Controlled = {
          render: () => {
            const [checked, setChecked] =
              react__WEBPACK_IMPORTED_MODULE_1__.useState(!1)
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
              'div',
              {
                className: 'space-y-4',
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                    'div',
                    {
                      className: 'flex items-center space-x-2',
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _components_ui_switch__WEBPACK_IMPORTED_MODULE_2__.d,
                          {
                            id: 'controlled-switch',
                            checked,
                            onCheckedChange: setChecked,
                          }
                        ),
                        (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                          _components_ui_label__WEBPACK_IMPORTED_MODULE_3__.J,
                          {
                            htmlFor: 'controlled-switch',
                            children: [
                              'Controlled switch (currently ',
                              checked ? 'on' : 'off',
                              ')',
                            ],
                          }
                        ),
                      ],
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    'button',
                    {
                      onClick: () => setChecked(!checked),
                      className:
                        'px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90',
                      children: 'Toggle Switch',
                    }
                  ),
                ],
              }
            )
          },
          play: async ({ canvasElement }) => {
            const canvas = (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.ux)(
                canvasElement
              ),
              switchElement = canvas.getByRole('switch'),
              label = canvas.getByText(/Controlled switch/),
              button = canvas.getByRole('button', { name: 'Toggle Switch' })
            ;(await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
              switchElement
            ).not.toBeChecked(),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                label
              ).toHaveTextContent('Controlled switch (currently off)'),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_4__.Q4.click(
                switchElement
              ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                switchElement
              ).toBeChecked(),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                label
              ).toHaveTextContent('Controlled switch (currently on)'),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_4__.Q4.click(
                button
              ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                switchElement
              ).not.toBeChecked(),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                label
              ).toHaveTextContent('Controlled switch (currently off)'),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_4__.Q4.click(
                button
              ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                switchElement
              ).toBeChecked(),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                label
              ).toHaveTextContent('Controlled switch (currently on)'))
          },
        },
        FormExample = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('form', {
              className: 'space-y-6 max-w-md',
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                  'div',
                  {
                    className: 'space-y-4',
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        'h3',
                        {
                          className: 'text-lg font-medium',
                          children: 'Notification Settings',
                        }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                        'div',
                        {
                          className: 'space-y-4',
                          children: [
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                              'div',
                              {
                                className: 'flex items-center justify-between',
                                children: [
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                    'div',
                                    {
                                      className: 'space-y-1',
                                      children: [
                                        (0,
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                          _components_ui_label__WEBPACK_IMPORTED_MODULE_3__.J,
                                          {
                                            htmlFor: 'email-notifications',
                                            children: 'Email notifications',
                                          }
                                        ),
                                        (0,
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                          'p',
                                          {
                                            className:
                                              'text-sm text-muted-foreground',
                                            children:
                                              'Receive email updates about your account',
                                          }
                                        ),
                                      ],
                                    }
                                  ),
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    _components_ui_switch__WEBPACK_IMPORTED_MODULE_2__.d,
                                    {
                                      id: 'email-notifications',
                                      defaultChecked: !0,
                                    }
                                  ),
                                ],
                              }
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                              'div',
                              {
                                className: 'flex items-center justify-between',
                                children: [
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                    'div',
                                    {
                                      className: 'space-y-1',
                                      children: [
                                        (0,
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                          _components_ui_label__WEBPACK_IMPORTED_MODULE_3__.J,
                                          {
                                            htmlFor: 'push-notifications',
                                            children: 'Push notifications',
                                          }
                                        ),
                                        (0,
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                          'p',
                                          {
                                            className:
                                              'text-sm text-muted-foreground',
                                            children:
                                              'Receive push notifications on your device',
                                          }
                                        ),
                                      ],
                                    }
                                  ),
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    _components_ui_switch__WEBPACK_IMPORTED_MODULE_2__.d,
                                    { id: 'push-notifications' }
                                  ),
                                ],
                              }
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                              'div',
                              {
                                className: 'flex items-center justify-between',
                                children: [
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                    'div',
                                    {
                                      className: 'space-y-1',
                                      children: [
                                        (0,
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                          _components_ui_label__WEBPACK_IMPORTED_MODULE_3__.J,
                                          {
                                            htmlFor: 'marketing',
                                            children: 'Marketing emails',
                                          }
                                        ),
                                        (0,
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                          'p',
                                          {
                                            className:
                                              'text-sm text-muted-foreground',
                                            children:
                                              'Receive emails about new features and updates',
                                          }
                                        ),
                                      ],
                                    }
                                  ),
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    _components_ui_switch__WEBPACK_IMPORTED_MODULE_2__.d,
                                    { id: 'marketing' }
                                  ),
                                ],
                              }
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                              'div',
                              {
                                className: 'flex items-center justify-between',
                                children: [
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                    'div',
                                    {
                                      className: 'space-y-1',
                                      children: [
                                        (0,
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                          _components_ui_label__WEBPACK_IMPORTED_MODULE_3__.J,
                                          {
                                            htmlFor: 'security',
                                            children: 'Security alerts',
                                          }
                                        ),
                                        (0,
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                          'p',
                                          {
                                            className:
                                              'text-sm text-muted-foreground',
                                            children:
                                              'Receive alerts about unusual activity',
                                          }
                                        ),
                                      ],
                                    }
                                  ),
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    _components_ui_switch__WEBPACK_IMPORTED_MODULE_2__.d,
                                    {
                                      id: 'security',
                                      defaultChecked: !0,
                                      disabled: !0,
                                    }
                                  ),
                                ],
                              }
                            ),
                          ],
                        }
                      ),
                    ],
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  'button',
                  {
                    type: 'submit',
                    className:
                      'px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90',
                    children: 'Save Settings',
                  }
                ),
              ],
            }),
          play: async ({ canvasElement }) => {
            const canvas = (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.ux)(
              canvasElement
            )
            await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
              canvas.getByText('Notification Settings')
            ).toBeVisible()
            const emailSwitch = canvas.getByLabelText('Email notifications'),
              pushSwitch = canvas.getByLabelText('Push notifications'),
              marketingSwitch = canvas.getByLabelText('Marketing emails'),
              securitySwitch = canvas.getByLabelText('Security alerts')
            ;(await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
              emailSwitch
            ).toBeChecked(),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                pushSwitch
              ).not.toBeChecked(),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                marketingSwitch
              ).not.toBeChecked(),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                securitySwitch
              ).toBeChecked(),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                securitySwitch
              ).toBeDisabled(),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                canvas.getByText('Receive email updates about your account')
              ).toBeVisible(),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                canvas.getByText('Receive push notifications on your device')
              ).toBeVisible(),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                canvas.getByText(
                  'Receive emails about new features and updates'
                )
              ).toBeVisible(),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                canvas.getByText('Receive alerts about unusual activity')
              ).toBeVisible(),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_4__.Q4.click(
                pushSwitch
              ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                pushSwitch
              ).toBeChecked(),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_4__.Q4.click(
                marketingSwitch
              ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                marketingSwitch
              ).toBeChecked(),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_4__.Q4.click(
                securitySwitch
              ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                securitySwitch
              ).toBeChecked())
            const saveButton = canvas.getByRole('button', {
              name: 'Save Settings',
            })
            ;(await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
              saveButton
            ).toBeVisible(),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                saveButton
              ).toBeEnabled())
          },
        },
        Sizes = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              className: 'space-y-4',
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                  'div',
                  {
                    className: 'flex items-center space-x-4',
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _components_ui_switch__WEBPACK_IMPORTED_MODULE_2__.d,
                        { className: 'scale-75', id: 'small' }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _components_ui_label__WEBPACK_IMPORTED_MODULE_3__.J,
                        { htmlFor: 'small', children: 'Small (75%)' }
                      ),
                    ],
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                  'div',
                  {
                    className: 'flex items-center space-x-4',
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _components_ui_switch__WEBPACK_IMPORTED_MODULE_2__.d,
                        { id: 'medium' }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _components_ui_label__WEBPACK_IMPORTED_MODULE_3__.J,
                        { htmlFor: 'medium', children: 'Medium (Default)' }
                      ),
                    ],
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                  'div',
                  {
                    className: 'flex items-center space-x-4',
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _components_ui_switch__WEBPACK_IMPORTED_MODULE_2__.d,
                        { className: 'scale-125', id: 'large' }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _components_ui_label__WEBPACK_IMPORTED_MODULE_3__.J,
                        { htmlFor: 'large', children: 'Large (125%)' }
                      ),
                    ],
                  }
                ),
              ],
            }),
          play: async ({ canvasElement }) => {
            const canvas = (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.ux)(
                canvasElement
              ),
              smallSwitch = canvas.getByLabelText('Small (75%)'),
              mediumSwitch = canvas.getByLabelText('Medium (Default)'),
              largeSwitch = canvas.getByLabelText('Large (125%)')
            ;(await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
              smallSwitch
            ).toBeVisible(),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                smallSwitch
              ).toBeEnabled(),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                mediumSwitch
              ).toBeVisible(),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                mediumSwitch
              ).toBeEnabled(),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                largeSwitch
              ).toBeVisible(),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                largeSwitch
              ).toBeEnabled(),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                smallSwitch
              ).toHaveClass('scale-75'),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                largeSwitch
              ).toHaveClass('scale-125'),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_4__.Q4.click(
                smallSwitch
              ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                smallSwitch
              ).toBeChecked(),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_4__.Q4.click(
                mediumSwitch
              ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                mediumSwitch
              ).toBeChecked(),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_4__.Q4.click(
                largeSwitch
              ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                largeSwitch
              ).toBeChecked())
          },
        },
        __namedExportsOrder = [
          'Default',
          'Checked',
          'Disabled',
          'DisabledChecked',
          'WithLabel',
          'WithDescription',
          'Controlled',
          'FormExample',
          'Sizes',
        ]
      ;((Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              "{\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const switchElement = canvas.getByRole('switch');\n\n    // Test switch is visible and enabled\n    await expect(switchElement).toBeVisible();\n    await expect(switchElement).toBeEnabled();\n    await expect(switchElement).not.toBeChecked();\n\n    // Test clicking switch\n    await userEvent.click(switchElement);\n    await expect(switchElement).toBeChecked();\n    await expect(switchElement).toHaveAttribute('data-state', 'checked');\n\n    // Test clicking again to turn off\n    await userEvent.click(switchElement);\n    await expect(switchElement).not.toBeChecked();\n    await expect(switchElement).toHaveAttribute('data-state', 'unchecked');\n\n    // Test keyboard interaction (space key)\n    await switchElement.focus();\n    await userEvent.keyboard(' ');\n    await expect(switchElement).toBeChecked();\n  }\n}",
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (Checked.parameters = {
          ...Checked.parameters,
          docs: {
            ...Checked.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    defaultChecked: true\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const switchElement = canvas.getByRole('switch');\n\n    // Test switch is checked by default\n    await expect(switchElement).toBeChecked();\n    await expect(switchElement).toBeEnabled();\n    await expect(switchElement).toHaveAttribute('data-state', 'checked');\n  }\n}",
              ...Checked.parameters?.docs?.source,
            },
          },
        }),
        (Disabled.parameters = {
          ...Disabled.parameters,
          docs: {
            ...Disabled.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    disabled: true\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const switchElement = canvas.getByRole('switch');\n\n    // Test switch is disabled\n    await expect(switchElement).toBeDisabled();\n    await expect(switchElement).not.toBeChecked();\n\n    // Test clicking disabled switch (should not change state)\n    await userEvent.click(switchElement);\n    await expect(switchElement).not.toBeChecked();\n  }\n}",
              ...Disabled.parameters?.docs?.source,
            },
          },
        }),
        (DisabledChecked.parameters = {
          ...DisabledChecked.parameters,
          docs: {
            ...DisabledChecked.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    defaultChecked: true,\n    disabled: true\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const switchElement = canvas.getByRole('switch');\n\n    // Test switch is disabled and checked\n    await expect(switchElement).toBeDisabled();\n    await expect(switchElement).toBeChecked();\n\n    // Test clicking disabled switch (should not change state)\n    await userEvent.click(switchElement);\n    await expect(switchElement).toBeChecked();\n  }\n}",
              ...DisabledChecked.parameters?.docs?.source,
            },
          },
        }),
        (WithLabel.parameters = {
          ...WithLabel.parameters,
          docs: {
            ...WithLabel.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <div className='flex items-center space-x-2'>\n      <Switch id='airplane-mode' />\n      <Label htmlFor='airplane-mode'>Airplane Mode</Label>\n    </div>,\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const switchElement = canvas.getByRole('switch');\n    const label = canvas.getByText('Airplane Mode');\n\n    // Test label is visible\n    await expect(label).toBeVisible();\n\n    // Test clicking label toggles switch\n    await userEvent.click(label);\n    await expect(switchElement).toBeChecked();\n    await userEvent.click(label);\n    await expect(switchElement).not.toBeChecked();\n\n    // Test label has correct association\n    const labelElement = canvas.getByLabelText('Airplane Mode');\n    await expect(labelElement).toBe(switchElement);\n  }\n}",
              ...WithLabel.parameters?.docs?.source,
            },
          },
        }),
        (WithDescription.parameters = {
          ...WithDescription.parameters,
          docs: {
            ...WithDescription.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <div className='space-y-4'>\n      <div className='flex items-center space-x-2'>\n        <Switch id='notifications' defaultChecked />\n        <Label htmlFor='notifications'>Enable notifications</Label>\n      </div>\n      <p className='text-sm text-muted-foreground'>\n        Receive notifications about updates and new features.\n      </p>\n    </div>,\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const switchElement = canvas.getByRole('switch');\n    const label = canvas.getByText('Enable notifications');\n    const description = canvas.getByText('Receive notifications about updates and new features.');\n\n    // Test elements are visible\n    await expect(label).toBeVisible();\n    await expect(description).toBeVisible();\n\n    // Test switch is checked by default\n    await expect(switchElement).toBeChecked();\n\n    // Test description text has correct styling\n    await expect(description).toHaveClass('text-sm', 'text-muted-foreground');\n  }\n}",
              ...WithDescription.parameters?.docs?.source,
            },
          },
        }),
        (Controlled.parameters = {
          ...Controlled.parameters,
          docs: {
            ...Controlled.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => {\n    const [checked, setChecked] = React.useState(false);\n    return <div className='space-y-4'>\n        <div className='flex items-center space-x-2'>\n          <Switch id='controlled-switch' checked={checked} onCheckedChange={setChecked} />\n          <Label htmlFor='controlled-switch'>\n            Controlled switch (currently {checked ? 'on' : 'off'})\n          </Label>\n        </div>\n        <button onClick={() => setChecked(!checked)} className='px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90'>\n          Toggle Switch\n        </button>\n      </div>;\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const switchElement = canvas.getByRole('switch');\n    const label = canvas.getByText(/Controlled switch/);\n    const button = canvas.getByRole('button', {\n      name: 'Toggle Switch'\n    });\n\n    // Test initial state\n    await expect(switchElement).not.toBeChecked();\n    await expect(label).toHaveTextContent('Controlled switch (currently off)');\n\n    // Test clicking switch updates label\n    await userEvent.click(switchElement);\n    await expect(switchElement).toBeChecked();\n    await expect(label).toHaveTextContent('Controlled switch (currently on)');\n\n    // Test external button controls switch\n    await userEvent.click(button);\n    await expect(switchElement).not.toBeChecked();\n    await expect(label).toHaveTextContent('Controlled switch (currently off)');\n\n    // Test button again\n    await userEvent.click(button);\n    await expect(switchElement).toBeChecked();\n    await expect(label).toHaveTextContent('Controlled switch (currently on)');\n  }\n}",
              ...Controlled.parameters?.docs?.source,
            },
          },
        }),
        (FormExample.parameters = {
          ...FormExample.parameters,
          docs: {
            ...FormExample.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <form className='space-y-6 max-w-md'>\n      <div className='space-y-4'>\n        <h3 className='text-lg font-medium'>Notification Settings</h3>\n\n        <div className='space-y-4'>\n          <div className='flex items-center justify-between'>\n            <div className='space-y-1'>\n              <Label htmlFor='email-notifications'>Email notifications</Label>\n              <p className='text-sm text-muted-foreground'>\n                Receive email updates about your account\n              </p>\n            </div>\n            <Switch id='email-notifications' defaultChecked />\n          </div>\n\n          <div className='flex items-center justify-between'>\n            <div className='space-y-1'>\n              <Label htmlFor='push-notifications'>Push notifications</Label>\n              <p className='text-sm text-muted-foreground'>\n                Receive push notifications on your device\n              </p>\n            </div>\n            <Switch id='push-notifications' />\n          </div>\n\n          <div className='flex items-center justify-between'>\n            <div className='space-y-1'>\n              <Label htmlFor='marketing'>Marketing emails</Label>\n              <p className='text-sm text-muted-foreground'>\n                Receive emails about new features and updates\n              </p>\n            </div>\n            <Switch id='marketing' />\n          </div>\n\n          <div className='flex items-center justify-between'>\n            <div className='space-y-1'>\n              <Label htmlFor='security'>Security alerts</Label>\n              <p className='text-sm text-muted-foreground'>\n                Receive alerts about unusual activity\n              </p>\n            </div>\n            <Switch id='security' defaultChecked disabled />\n          </div>\n        </div>\n      </div>\n\n      <button type='submit' className='px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90'>\n        Save Settings\n      </button>\n    </form>,\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Test form heading is present\n    await expect(canvas.getByText('Notification Settings')).toBeVisible();\n\n    // Test switches\n    const emailSwitch = canvas.getByLabelText('Email notifications');\n    const pushSwitch = canvas.getByLabelText('Push notifications');\n    const marketingSwitch = canvas.getByLabelText('Marketing emails');\n    const securitySwitch = canvas.getByLabelText('Security alerts');\n\n    // Verify initial states\n    await expect(emailSwitch).toBeChecked();\n    await expect(pushSwitch).not.toBeChecked();\n    await expect(marketingSwitch).not.toBeChecked();\n    await expect(securitySwitch).toBeChecked();\n    await expect(securitySwitch).toBeDisabled();\n\n    // Test descriptions are visible\n    await expect(canvas.getByText('Receive email updates about your account')).toBeVisible();\n    await expect(canvas.getByText('Receive push notifications on your device')).toBeVisible();\n    await expect(canvas.getByText('Receive emails about new features and updates')).toBeVisible();\n    await expect(canvas.getByText('Receive alerts about unusual activity')).toBeVisible();\n\n    // Test form interactions\n    await userEvent.click(pushSwitch);\n    await expect(pushSwitch).toBeChecked();\n    await userEvent.click(marketingSwitch);\n    await expect(marketingSwitch).toBeChecked();\n\n    // Test security switch is truly disabled\n    await userEvent.click(securitySwitch);\n    await expect(securitySwitch).toBeChecked(); // Should remain checked\n\n    // Test save button\n    const saveButton = canvas.getByRole('button', {\n      name: 'Save Settings'\n    });\n    await expect(saveButton).toBeVisible();\n    await expect(saveButton).toBeEnabled();\n  }\n}",
              ...FormExample.parameters?.docs?.source,
            },
          },
        }),
        (Sizes.parameters = {
          ...Sizes.parameters,
          docs: {
            ...Sizes.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <div className='space-y-4'>\n      <div className='flex items-center space-x-4'>\n        <Switch className='scale-75' id='small' />\n        <Label htmlFor='small'>Small (75%)</Label>\n      </div>\n      <div className='flex items-center space-x-4'>\n        <Switch id='medium' />\n        <Label htmlFor='medium'>Medium (Default)</Label>\n      </div>\n      <div className='flex items-center space-x-4'>\n        <Switch className='scale-125' id='large' />\n        <Label htmlFor='large'>Large (125%)</Label>\n      </div>\n    </div>,\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Get all switches\n    const smallSwitch = canvas.getByLabelText('Small (75%)');\n    const mediumSwitch = canvas.getByLabelText('Medium (Default)');\n    const largeSwitch = canvas.getByLabelText('Large (125%)');\n\n    // Test all switches are visible and enabled\n    await expect(smallSwitch).toBeVisible();\n    await expect(smallSwitch).toBeEnabled();\n    await expect(mediumSwitch).toBeVisible();\n    await expect(mediumSwitch).toBeEnabled();\n    await expect(largeSwitch).toBeVisible();\n    await expect(largeSwitch).toBeEnabled();\n\n    // Test scale classes are applied\n    await expect(smallSwitch).toHaveClass('scale-75');\n    await expect(largeSwitch).toHaveClass('scale-125');\n\n    // Test all switches function correctly\n    await userEvent.click(smallSwitch);\n    await expect(smallSwitch).toBeChecked();\n    await userEvent.click(mediumSwitch);\n    await expect(mediumSwitch).toBeChecked();\n    await userEvent.click(largeSwitch);\n    await expect(largeSwitch).toBeChecked();\n  }\n}",
              ...Sizes.parameters?.docs?.source,
            },
          },
        }))
    },
    './lib/utils.ts': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { cn: () => cn })
      var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs'
        ),
        tailwind_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          '../../node_modules/.pnpm/tailwind-merge@2.6.0/node_modules/tailwind-merge/dist/bundle-mjs.mjs'
        )
      function cov_2q9uxw2ujq() {
        var path =
            '/Users/ryota.murakami/repository/Notable/packages/web/lib/utils.ts',
          global = new Function('return this')(),
          gcv = '__coverage__',
          coverage = global[gcv] || (global[gcv] = {})
        ;(coverage[path] &&
          '1ab603e1092f59772e7f858dd62f043983f965a0' === coverage[path].hash) ||
          (coverage[path] = {
            path: '/Users/ryota.murakami/repository/Notable/packages/web/lib/utils.ts',
            statementMap: {
              0: {
                start: { line: 4, column: 4 },
                end: { line: 4, column: 33 },
              },
              1: {
                start: { line: 7, column: 17 },
                end: { line: 7, column: 37 },
              },
              2: {
                start: { line: 8, column: 4 },
                end: { line: 14, column: 20 },
              },
            },
            fnMap: {
              0: {
                name: 'cn',
                decl: {
                  start: { line: 3, column: 16 },
                  end: { line: 3, column: 18 },
                },
                loc: {
                  start: { line: 3, column: 30 },
                  end: { line: 5, column: 1 },
                },
                line: 3,
              },
              1: {
                name: 'formatDate',
                decl: {
                  start: { line: 6, column: 16 },
                  end: { line: 6, column: 26 },
                },
                loc: {
                  start: { line: 6, column: 39 },
                  end: { line: 15, column: 1 },
                },
                line: 6,
              },
            },
            branchMap: {},
            s: { 0: 0, 1: 0, 2: 0 },
            f: { 0: 0, 1: 0 },
            b: {},
            inputSourceMap: {
              version: 3,
              sources: [
                '/Users/ryota.murakami/repository/Notable/packages/web/lib/utils.ts',
              ],
              sourcesContent: [
                "import { type ClassValue, clsx } from 'clsx'\nimport { twMerge } from 'tailwind-merge'\n\nexport function cn(...inputs: ClassValue[]) {\n  return twMerge(clsx(inputs))\n}\n\nexport function formatDate(dateString: string): string {\n  const date = new Date(dateString)\n  return new Intl.DateTimeFormat('en-US', {\n    month: 'short',\n    day: 'numeric',\n    year: 'numeric',\n    hour: 'numeric',\n    minute: 'numeric',\n  }).format(date)\n}\n",
              ],
              names: [
                'clsx',
                'twMerge',
                'cn',
                'inputs',
                'formatDate',
                'dateString',
                'date',
                'Date',
                'Intl',
                'DateTimeFormat',
                'month',
                'day',
                'year',
                'hour',
                'minute',
                'format',
              ],
              mappings:
                'AAAA,SAA0BA,IAAI,QAAQ,OAAM;AAC5C,SAASC,OAAO,QAAQ,iBAAgB;AAExC,OAAO,SAASC,GAAG,GAAGC,MAAoB;IACxC,OAAOF,QAAQD,KAAKG;AACtB;AAEA,OAAO,SAASC,WAAWC,UAAkB;IAC3C,MAAMC,OAAO,IAAIC,KAAKF;IACtB,OAAO,IAAIG,KAAKC,cAAc,CAAC,SAAS;QACtCC,OAAO;QACPC,KAAK;QACLC,MAAM;QACNC,MAAM;QACNC,QAAQ;IACV,GAAGC,MAAM,CAACT;AACZ',
            },
            _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
            hash: '1ab603e1092f59772e7f858dd62f043983f965a0',
          })
        var actualCoverage = coverage[path]
        return (
          (cov_2q9uxw2ujq = function () {
            return actualCoverage
          }),
          actualCoverage
        )
      }
      function cn(...inputs) {
        return (
          cov_2q9uxw2ujq().f[0]++,
          cov_2q9uxw2ujq().s[0]++,
          (0, tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.QP)(
            (0, clsx__WEBPACK_IMPORTED_MODULE_1__.$)(inputs)
          )
        )
      }
      cov_2q9uxw2ujq()
    },
  },
])
