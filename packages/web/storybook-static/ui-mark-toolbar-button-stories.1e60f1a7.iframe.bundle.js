'use strict'
;(self.webpackChunk_notable_web = self.webpackChunk_notable_web || []).push([
  [3224],
  {
    './components/editor/plugins/basic-nodes-kit.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { u: () => BasicNodesKit })
      var _basic_blocks_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './components/editor/plugins/basic-blocks-kit.tsx'
        ),
        _basic_marks_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './components/editor/plugins/basic-marks-kit.tsx'
        )
      function cov_tfhxzc70i() {
        var path =
            '/Users/ryota.murakami/repository/Notable/packages/web/components/editor/plugins/basic-nodes-kit.tsx',
          global = new Function('return this')(),
          gcv = '__coverage__',
          coverage = global[gcv] || (global[gcv] = {})
        ;(coverage[path] &&
          'ae7d14de3d8d54c93bd22693ad62804ad6ee1804' === coverage[path].hash) ||
          (coverage[path] = {
            path: '/Users/ryota.murakami/repository/Notable/packages/web/components/editor/plugins/basic-nodes-kit.tsx',
            statementMap: {
              0: {
                start: { line: 4, column: 29 },
                end: { line: 7, column: 1 },
              },
            },
            fnMap: {},
            branchMap: {},
            s: { 0: 0 },
            f: {},
            b: {},
            inputSourceMap: {
              version: 3,
              sources: [
                '/Users/ryota.murakami/repository/Notable/packages/web/components/editor/plugins/basic-nodes-kit.tsx',
              ],
              sourcesContent: [
                "'use client'\n\nimport { BasicBlocksKit } from './basic-blocks-kit'\nimport { BasicMarksKit } from './basic-marks-kit'\n\nexport const BasicNodesKit = [...BasicBlocksKit, ...BasicMarksKit]\n",
              ],
              names: ['BasicBlocksKit', 'BasicMarksKit', 'BasicNodesKit'],
              mappings:
                'AAAA;AAEA,SAASA,cAAc,QAAQ,qBAAoB;AACnD,SAASC,aAAa,QAAQ,oBAAmB;AAEjD,OAAO,MAAMC,gBAAgB;OAAIF;OAAmBC;CAAc,CAAA',
            },
            _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
            hash: 'ae7d14de3d8d54c93bd22693ad62804ad6ee1804',
          })
        var actualCoverage = coverage[path]
        return (
          (cov_tfhxzc70i = function () {
            return actualCoverage
          }),
          actualCoverage
        )
      }
      cov_tfhxzc70i()
      const BasicNodesKit =
        (cov_tfhxzc70i().s[0]++,
        [
          ..._basic_blocks_kit__WEBPACK_IMPORTED_MODULE_0__.h,
          ..._basic_marks_kit__WEBPACK_IMPORTED_MODULE_1__.N,
        ])
    },
    './components/ui/button.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { $: () => Button })
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
        ),
        _lib_utils__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__('./lib/utils.ts')
      function cov_1u1ay4p3n7() {
        var path =
            '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/button.tsx',
          global = new Function('return this')(),
          gcv = '__coverage__',
          coverage = global[gcv] || (global[gcv] = {})
        ;(coverage[path] &&
          'b0fd7d1bdd36265955b32fe01eaeee2d1a4e24fe' === coverage[path].hash) ||
          (coverage[path] = {
            path: '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/button.tsx',
            statementMap: {
              0: {
                start: { line: 4, column: 29 },
                end: { line: 24, column: 2 },
              },
              1: {
                start: { line: 5, column: 21 },
                end: { line: 12, column: 5 },
              },
              2: {
                start: { line: 13, column: 18 },
                end: { line: 18, column: 5 },
              },
              3: {
                start: { line: 19, column: 4 },
                end: { line: 23, column: 7 },
              },
              4: {
                start: { line: 25, column: 0 },
                end: { line: 25, column: 30 },
              },
              5: {
                start: { line: 27, column: 0 },
                end: { line: 101, column: 2 },
              },
            },
            fnMap: {
              0: {
                name: '(anonymous_0)',
                decl: {
                  start: { line: 4, column: 46 },
                  end: { line: 4, column: 47 },
                },
                loc: {
                  start: { line: 4, column: 117 },
                  end: { line: 24, column: 1 },
                },
                line: 4,
              },
            },
            branchMap: {
              0: {
                loc: {
                  start: { line: 4, column: 60 },
                  end: { line: 4, column: 79 },
                },
                type: 'default-arg',
                locations: [
                  {
                    start: { line: 4, column: 70 },
                    end: { line: 4, column: 79 },
                  },
                ],
                line: 4,
              },
              1: {
                loc: {
                  start: { line: 4, column: 81 },
                  end: { line: 4, column: 97 },
                },
                type: 'default-arg',
                locations: [
                  {
                    start: { line: 4, column: 88 },
                    end: { line: 4, column: 97 },
                  },
                ],
                line: 4,
              },
            },
            s: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
            f: { 0: 0 },
            b: { 0: [0], 1: [0] },
            inputSourceMap: {
              version: 3,
              sources: [
                '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/button.tsx',
              ],
              sourcesContent: [
                "import * as React from 'react'\nimport { cn } from '@/lib/utils'\n\nexport interface ButtonProps\n  extends React.ButtonHTMLAttributes<HTMLButtonElement> {\n  variant?:\n    | 'default'\n    | 'destructive'\n    | 'outline'\n    | 'secondary'\n    | 'ghost'\n    | 'link'\n  size?: 'default' | 'sm' | 'lg' | 'icon'\n}\n\nconst Button = React.forwardRef<HTMLButtonElement, ButtonProps>(\n  ({ className, variant = 'default', size = 'default', ...props }, ref) => {\n    const variants = {\n      default: 'bg-primary text-primary-foreground hover:bg-primary/90',\n      destructive:\n        'bg-destructive text-destructive-foreground hover:bg-destructive/90',\n      outline:\n        'border border-input bg-background hover:bg-accent hover:text-accent-foreground',\n      secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',\n      ghost: 'hover:bg-accent hover:text-accent-foreground',\n      link: 'text-primary underline-offset-4 hover:underline',\n    }\n\n    const sizes = {\n      default: 'h-10 px-4 py-2',\n      sm: 'h-9 rounded-md px-3',\n      lg: 'h-11 rounded-md px-8',\n      icon: 'h-10 w-10',\n    }\n\n    return (\n      <button\n        className={cn(\n          'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',\n          variants[variant],\n          sizes[size],\n          className\n        )}\n        ref={ref}\n        {...props}\n      />\n    )\n  }\n)\nButton.displayName = 'Button'\n\nexport { Button }\n",
              ],
              names: [],
              mappings:
                ';AAAA,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAC7B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAc/B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,eAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,AAC9B,CAD+B,AAC9B,CAD+B,AAC9B,CAD+B,AAC9B,CAD+B,AAC9B,CAD+B,AAC9B,CAAC,AAD8B,CAAC,AAC9B,CAAC,AAD8B,CAC7B,AAD8B,CAC7B,AAD8B,CAAC,AAC9B,CAD+B,AAC9B,CAD+B,AAC9B,CAAC,AAD8B,CAC7B,AAD8B,CAAC,AAC9B,CAD+B,AAC9B,CAAC,AAD8B,CAAC,AAC9B,CAD+B,AAC9B,CAD+B,AAC9B,CAD+B,AAC9B,CAD+B,AAC9B,CAD+B,AAC9B,CAD+B,AAC9B,CAD+B,AAC9B,CAAC,AAD8B,CAC7B,AAD8B,CAC7B,AAD8B,CAC7B,AAD8B,CAAC,AAC9B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;IACvE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACf,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACjE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACT,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACtE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACL,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QAClF,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACzE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACrD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;IACzD;IAEA,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACZ,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACzB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACzB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QAC1B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;IACnB;IAEA,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,cACL,KAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACJ,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACX,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACtQ,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACjB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACX,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QAEV,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACP,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;AAGf;AAEF,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;AAE5B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC',
            },
            _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
            hash: 'b0fd7d1bdd36265955b32fe01eaeee2d1a4e24fe',
          })
        var actualCoverage = coverage[path]
        return (
          (cov_1u1ay4p3n7 = function () {
            return actualCoverage
          }),
          actualCoverage
        )
      }
      cov_1u1ay4p3n7()
      const Button =
        (cov_1u1ay4p3n7().s[0]++,
        react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(
          (
            {
              className,
              variant = (cov_1u1ay4p3n7().b[0][0]++, 'default'),
              size = (cov_1u1ay4p3n7().b[1][0]++, 'default'),
              ...props
            },
            ref
          ) => {
            cov_1u1ay4p3n7().f[0]++
            const variants =
                (cov_1u1ay4p3n7().s[1]++,
                {
                  default:
                    'bg-primary text-primary-foreground hover:bg-primary/90',
                  destructive:
                    'bg-destructive text-destructive-foreground hover:bg-destructive/90',
                  outline:
                    'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
                  secondary:
                    'bg-secondary text-secondary-foreground hover:bg-secondary/80',
                  ghost: 'hover:bg-accent hover:text-accent-foreground',
                  link: 'text-primary underline-offset-4 hover:underline',
                }),
              sizes =
                (cov_1u1ay4p3n7().s[2]++,
                {
                  default: 'h-10 px-4 py-2',
                  sm: 'h-9 rounded-md px-3',
                  lg: 'h-11 rounded-md px-8',
                  icon: 'h-10 w-10',
                })
            return (
              cov_1u1ay4p3n7().s[3]++,
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                'button',
                {
                  className: (0, _lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(
                    'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
                    variants[variant],
                    sizes[size],
                    className
                  ),
                  ref,
                  ...props,
                }
              )
            )
          }
        ))
      ;(cov_1u1ay4p3n7().s[4]++,
        (Button.displayName = 'Button'),
        cov_1u1ay4p3n7().s[5]++,
        (Button.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Button',
          props: {
            variant: {
              required: !1,
              tsType: {
                name: 'union',
                raw: "| 'default'\n| 'destructive'\n| 'outline'\n| 'secondary'\n| 'ghost'\n| 'link'",
                elements: [
                  { name: 'literal', value: "'default'" },
                  { name: 'literal', value: "'destructive'" },
                  { name: 'literal', value: "'outline'" },
                  { name: 'literal', value: "'secondary'" },
                  { name: 'literal', value: "'ghost'" },
                  { name: 'literal', value: "'link'" },
                ],
              },
              description: '',
              defaultValue: { value: "'default'", computed: !1 },
            },
            size: {
              required: !1,
              tsType: {
                name: 'union',
                raw: "'default' | 'sm' | 'lg' | 'icon'",
                elements: [
                  { name: 'literal', value: "'default'" },
                  { name: 'literal', value: "'sm'" },
                  { name: 'literal', value: "'lg'" },
                  { name: 'literal', value: "'icon'" },
                ],
              },
              description: '',
              defaultValue: { value: "'default'", computed: !1 },
            },
          },
        }))
    },
    './components/ui/mark-toolbar-button.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      ;(__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          BoldButton: () => BoldButton,
          CustomStyling: () => CustomStyling,
          DisabledToolbarButton: () => DisabledToolbarButton,
          InteractiveMarkButton: () => InteractiveMarkButton,
          InteractiveSimpleButton: () => InteractiveSimpleButton,
          ItalicButton: () => ItalicButton,
          MultipleButtons: () => MultipleButtons,
          RealWorldToolbar: () => RealWorldToolbar,
          SimpleToolbarButton: () => SimpleToolbarButton,
          SimpleToolbarButtonGroup: () => SimpleToolbarButtonGroup,
          TooltipHover: () => TooltipHover,
          UnderlineButton: () => UnderlineButton,
          WithClearMarks: () => WithClearMarks,
          WithFormattedText: () => WithFormattedText,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => mark_toolbar_button_stories,
        }))
      var jsx_runtime = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        react = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
        ),
        dist_react = __webpack_require__(
          '../../node_modules/.pnpm/@platejs+utils@49.1.13_@types+react@19.1.8_immer@10.1.1_react-dom@19.1.0_react@19.1.0___fb257a7d31367cd01f4acae344d44fb2/node_modules/@platejs/utils/dist/react/index.mjs'
        ),
        ui_button = __webpack_require__('./components/ui/button.tsx'),
        utils = __webpack_require__('./lib/utils.ts')
      function cov_19dsijszo4() {
        var path =
            '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/simple-toolbar-button.tsx',
          global = new Function('return this')(),
          gcv = '__coverage__',
          coverage = global[gcv] || (global[gcv] = {})
        ;(coverage[path] &&
          '3d102236ec4d3f2281a06b617be0d4ec4210dae5' === coverage[path].hash) ||
          (coverage[path] = {
            path: '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/simple-toolbar-button.tsx',
            statementMap: {
              0: {
                start: { line: 6, column: 43 },
                end: { line: 21, column: 2 },
              },
              1: {
                start: { line: 7, column: 24 },
                end: { line: 10, column: 5 },
              },
              2: {
                start: { line: 8, column: 8 },
                end: { line: 8, column: 100 },
              },
              3: {
                start: { line: 9, column: 8 },
                end: { line: 9, column: 69 },
              },
              4: {
                start: { line: 11, column: 4 },
                end: { line: 20, column: 7 },
              },
              5: {
                start: { line: 22, column: 0 },
                end: { line: 22, column: 44 },
              },
              6: {
                start: { line: 23, column: 0 },
                end: { line: 65, column: 2 },
              },
            },
            fnMap: {
              0: {
                name: '(anonymous_0)',
                decl: {
                  start: { line: 6, column: 60 },
                  end: { line: 6, column: 61 },
                },
                loc: {
                  start: { line: 6, column: 146 },
                  end: { line: 21, column: 1 },
                },
                line: 6,
              },
              1: {
                name: '(anonymous_1)',
                decl: {
                  start: { line: 7, column: 24 },
                  end: { line: 7, column: 25 },
                },
                loc: {
                  start: { line: 7, column: 29 },
                  end: { line: 10, column: 5 },
                },
                line: 7,
              },
            },
            branchMap: {
              0: {
                loc: {
                  start: { line: 8, column: 8 },
                  end: { line: 8, column: 99 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 8, column: 65 },
                    end: { line: 8, column: 71 },
                  },
                  {
                    start: { line: 8, column: 74 },
                    end: { line: 8, column: 99 },
                  },
                ],
                line: 8,
              },
              1: {
                loc: {
                  start: { line: 8, column: 8 },
                  end: { line: 8, column: 62 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 8, column: 8 },
                    end: { line: 8, column: 32 },
                  },
                  {
                    start: { line: 8, column: 36 },
                    end: { line: 8, column: 62 },
                  },
                ],
                line: 8,
              },
              2: {
                loc: {
                  start: { line: 9, column: 8 },
                  end: { line: 9, column: 68 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 9, column: 49 },
                    end: { line: 9, column: 55 },
                  },
                  {
                    start: { line: 9, column: 58 },
                    end: { line: 9, column: 68 },
                  },
                ],
                line: 9,
              },
              3: {
                loc: {
                  start: { line: 9, column: 8 },
                  end: { line: 9, column: 46 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 9, column: 8 },
                    end: { line: 9, column: 24 },
                  },
                  {
                    start: { line: 9, column: 28 },
                    end: { line: 9, column: 46 },
                  },
                ],
                line: 9,
              },
              4: {
                loc: {
                  start: { line: 13, column: 17 },
                  end: { line: 13, column: 46 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 13, column: 27 },
                    end: { line: 13, column: 36 },
                  },
                  {
                    start: { line: 13, column: 39 },
                    end: { line: 13, column: 46 },
                  },
                ],
                line: 13,
              },
            },
            s: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 },
            f: { 0: 0, 1: 0 },
            b: { 0: [0, 0], 1: [0, 0], 2: [0, 0], 3: [0, 0], 4: [0, 0] },
            inputSourceMap: {
              version: 3,
              sources: [
                '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/simple-toolbar-button.tsx',
              ],
              sourcesContent: [
                "'use client'\n\nimport React from 'react'\nimport { Button } from '@/components/ui/button'\nimport { cn } from '@/lib/utils'\n\nexport interface ToolbarButtonProps\n  extends React.ComponentProps<typeof Button> {\n  pressed?: boolean\n  onPressedChange?: (pressed: boolean) => void\n  tooltip?: string\n}\n\nexport const ToolbarButton = React.forwardRef<\n  React.ElementRef<typeof Button>,\n  ToolbarButtonProps\n>(\n  (\n    {\n      className,\n      pressed,\n      onPressedChange,\n      tooltip,\n      children,\n      onClick,\n      ...props\n    },\n    ref\n  ) => {\n    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {\n      onPressedChange?.(!pressed)\n      onClick?.(e)\n    }\n\n    return (\n      <Button\n        ref={ref}\n        variant={pressed ? 'default' : 'ghost'}\n        size='sm'\n        className={cn('h-8 px-2', className)}\n        onClick={handleClick}\n        title={tooltip}\n        {...props}\n      >\n        {children}\n      </Button>\n    )\n  }\n)\n\nToolbarButton.displayName = 'ToolbarButton'\n",
              ],
              names: [],
              mappings:
                'AAAA,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;AAEX,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AACxB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAC9C,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAS/B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,eAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAI3C,CACE,EACE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACT,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACP,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACf,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACP,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACR,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACP,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GACR,EACD,CAAC,CAAC;IAEF,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;0EAC9D,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,AAAE,CAAD,AAAE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;0DAC1B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,AAAE,CAAD,AAAE;IACb;IAEA,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,cACL,KAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACJ,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACR,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACtC,CAAC,CAAC,CAAC,CAAC,EAAC,CAAC,CAAC,CAAC;QACR,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACpC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACpB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACb,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;kBAER,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;AAGf,GACF;AAEA,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC',
            },
            _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
            hash: '3d102236ec4d3f2281a06b617be0d4ec4210dae5',
          })
        var actualCoverage = coverage[path]
        return (
          (cov_19dsijszo4 = function () {
            return actualCoverage
          }),
          actualCoverage
        )
      }
      cov_19dsijszo4()
      const ToolbarButton =
        (cov_19dsijszo4().s[0]++,
        react.forwardRef(
          (
            {
              className,
              pressed,
              onPressedChange,
              tooltip,
              children,
              onClick,
              ...props
            },
            ref
          ) => {
            ;(cov_19dsijszo4().f[0]++, cov_19dsijszo4().s[1]++)
            return (
              cov_19dsijszo4().s[4]++,
              (0, jsx_runtime.jsx)(ui_button.$, {
                ref,
                variant: pressed
                  ? (cov_19dsijszo4().b[4][0]++, 'default')
                  : (cov_19dsijszo4().b[4][1]++, 'ghost'),
                size: 'sm',
                className: (0, utils.cn)('h-8 px-2', className),
                onClick: (e) => {
                  ;(cov_19dsijszo4().f[1]++,
                    cov_19dsijszo4().s[2]++,
                    cov_19dsijszo4().b[1][0]++,
                    null === onPressedChange ||
                    (cov_19dsijszo4().b[1][1]++, void 0 === onPressedChange)
                      ? cov_19dsijszo4().b[0][0]++
                      : (cov_19dsijszo4().b[0][1]++, onPressedChange(!pressed)),
                    cov_19dsijszo4().s[3]++,
                    cov_19dsijszo4().b[3][0]++,
                    null === onClick ||
                    (cov_19dsijszo4().b[3][1]++, void 0 === onClick)
                      ? cov_19dsijszo4().b[2][0]++
                      : (cov_19dsijszo4().b[2][1]++, onClick(e)))
                },
                title: tooltip,
                ...props,
                children,
              })
            )
          }
        ))
      function cov_2g9x0fmug9() {
        var path =
            '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/mark-toolbar-button.tsx',
          global = new Function('return this')(),
          gcv = '__coverage__',
          coverage = global[gcv] || (global[gcv] = {})
        ;(coverage[path] &&
          '93340529b65129c1946531fe6c7b718e40249ab6' === coverage[path].hash) ||
          (coverage[path] = {
            path: '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/mark-toolbar-button.tsx',
            statementMap: {
              0: {
                start: { line: 7, column: 18 },
                end: { line: 10, column: 6 },
              },
              1: {
                start: { line: 11, column: 35 },
                end: { line: 11, column: 62 },
              },
              2: {
                start: { line: 12, column: 4 },
                end: { line: 15, column: 7 },
              },
              3: {
                start: { line: 17, column: 0 },
                end: { line: 52, column: 2 },
              },
            },
            fnMap: {
              0: {
                name: 'MarkToolbarButton',
                decl: {
                  start: { line: 6, column: 16 },
                  end: { line: 6, column: 33 },
                },
                loc: {
                  start: { line: 6, column: 65 },
                  end: { line: 16, column: 1 },
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
                '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/mark-toolbar-button.tsx',
              ],
              sourcesContent: [
                "'use client'\n\nimport * as React from 'react'\n\nimport { useMarkToolbarButton, useMarkToolbarButtonState } from 'platejs/react'\n\nimport { ToolbarButton } from './simple-toolbar-button'\n\nexport function MarkToolbarButton({\n  clear,\n  nodeType,\n  ...props\n}: React.ComponentProps<typeof ToolbarButton> & {\n  nodeType: string\n  clear?: string[] | string\n}) {\n  const state = useMarkToolbarButtonState({ clear, nodeType })\n  const { props: buttonProps } = useMarkToolbarButton(state)\n\n  return <ToolbarButton {...props} {...buttonProps} />\n}\n",
              ],
              names: [],
              mappings:
                'AAAA,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;AAEX,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAE7B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAE9E,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAEtD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAChC,CAAC,CAAC,CAAC,CAAC,CAAC,EACL,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACR,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAIR,CAAC,CAAC;IACD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;IAAC,CAAC;IAC3D,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;IAEzD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,eAAC,KAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;AACrD',
            },
            _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
            hash: '93340529b65129c1946531fe6c7b718e40249ab6',
          })
        var actualCoverage = coverage[path]
        return (
          (cov_2g9x0fmug9 = function () {
            return actualCoverage
          }),
          actualCoverage
        )
      }
      function MarkToolbarButton({ clear, nodeType, ...props }) {
        cov_2g9x0fmug9().f[0]++
        const state =
            (cov_2g9x0fmug9().s[0]++, (0, dist_react.l4)({ clear, nodeType })),
          { props: buttonProps } =
            (cov_2g9x0fmug9().s[1]++, (0, dist_react._K)(state))
        return (
          cov_2g9x0fmug9().s[2]++,
          (0, jsx_runtime.jsx)(ToolbarButton, { ...props, ...buttonProps })
        )
      }
      ;(cov_19dsijszo4().s[5]++,
        (ToolbarButton.displayName = 'ToolbarButton'),
        cov_19dsijszo4().s[6]++,
        (ToolbarButton.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'ToolbarButton',
          props: {
            pressed: {
              required: !1,
              tsType: { name: 'boolean' },
              description: '',
            },
            onPressedChange: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '(pressed: boolean) => void',
                signature: {
                  arguments: [{ type: { name: 'boolean' }, name: 'pressed' }],
                  return: { name: 'void' },
                },
              },
              description: '',
            },
            tooltip: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
          },
        }),
        cov_2g9x0fmug9(),
        cov_2g9x0fmug9().s[3]++,
        (MarkToolbarButton.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'MarkToolbarButton',
          props: {
            nodeType: {
              required: !0,
              tsType: { name: 'string' },
              description: '',
            },
            clear: {
              required: !1,
              tsType: {
                name: 'union',
                raw: 'string[] | string',
                elements: [
                  {
                    name: 'Array',
                    elements: [{ name: 'string' }],
                    raw: 'string[]',
                  },
                  { name: 'string' },
                ],
              },
              description: '',
            },
          },
        }))
      var core_dist_react = __webpack_require__(
          '../../node_modules/.pnpm/@platejs+core@49.1.13_@types+react@19.1.8_immer@10.1.1_react-dom@19.1.0_react@19.1.0__r_fc8440c0ba2acbec6acd6c03c7e5303e/node_modules/@platejs/core/dist/react/index.mjs'
        ),
        basic_nodes_kit = __webpack_require__(
          './components/editor/plugins/basic-nodes-kit.tsx'
        ),
        ui_editor = __webpack_require__('./components/ui/editor.tsx'),
        bold = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/bold.js'
        ),
        italic = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/italic.js'
        ),
        underline = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/underline.js'
        ),
        strikethrough = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/strikethrough.js'
        ),
        code = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/code.js'
        ),
        highlighter = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/highlighter.js'
        ),
        dist = __webpack_require__(
          '../../node_modules/.pnpm/@storybook+test@8.6.14_storybook@9.0.18_@testing-library+dom@10.4.0_prettier@3.6.2_/node_modules/@storybook/test/dist/index.mjs'
        )
      const mark_toolbar_button_stories = {
          title: 'UI/MarkToolbarButton',
          component: MarkToolbarButton,
          parameters: { layout: 'centered' },
          tags: ['autodocs'],
          argTypes: {
            nodeType: {
              control: 'text',
              description: 'The mark type (e.g., bold, italic, underline)',
            },
            clear: {
              control: 'text',
              description: 'Marks to clear when this mark is applied',
            },
            tooltip: { control: 'text', description: 'Tooltip text on hover' },
          },
          decorators: [
            (Story) =>
              (0, jsx_runtime.jsx)('div', {
                className: 'min-w-[600px] p-8',
                children: (0, jsx_runtime.jsx)(Story, {}),
              }),
          ],
        },
        MarkToolbarDemo = ({
          children,
          initialValue = [
            {
              type: 'p',
              children: [
                { text: 'Select some text and click the toolbar buttons' },
              ],
            },
          ],
        }) => {
          const editor = (0, core_dist_react.FI)({
            plugins: basic_nodes_kit.u,
            value: initialValue,
          })
          return (0, jsx_runtime.jsx)(core_dist_react.T6, {
            editor,
            children: (0, jsx_runtime.jsxs)('div', {
              className: 'space-y-4',
              children: [
                (0, jsx_runtime.jsx)('div', {
                  className: 'flex items-center gap-1 p-1 border rounded-lg',
                  children,
                }),
                (0, jsx_runtime.jsx)(ui_editor.nG, {
                  children: (0, jsx_runtime.jsx)(ui_editor.KE, {
                    variant: 'demo',
                  }),
                }),
              ],
            }),
          })
        },
        BoldButton = {
          args: { nodeType: 'bold' },
          render: () =>
            (0, jsx_runtime.jsx)(MarkToolbarDemo, {
              children: (0, jsx_runtime.jsx)(MarkToolbarButton, {
                nodeType: 'bold',
                tooltip: 'Bold (Cmd+B)',
                children: (0, jsx_runtime.jsx)(bold.A, {
                  className: 'h-4 w-4',
                }),
              }),
            }),
        },
        ItalicButton = {
          args: { nodeType: 'italic' },
          render: () =>
            (0, jsx_runtime.jsx)(MarkToolbarDemo, {
              children: (0, jsx_runtime.jsx)(MarkToolbarButton, {
                nodeType: 'italic',
                tooltip: 'Italic (Cmd+I)',
                children: (0, jsx_runtime.jsx)(italic.A, {
                  className: 'h-4 w-4',
                }),
              }),
            }),
        },
        UnderlineButton = {
          args: { nodeType: 'underline' },
          render: () =>
            (0, jsx_runtime.jsx)(MarkToolbarDemo, {
              children: (0, jsx_runtime.jsx)(MarkToolbarButton, {
                nodeType: 'underline',
                tooltip: 'Underline (Cmd+U)',
                children: (0, jsx_runtime.jsx)(underline.A, {
                  className: 'h-4 w-4',
                }),
              }),
            }),
        },
        MultipleButtons = {
          args: { nodeType: 'bold' },
          render: () =>
            (0, jsx_runtime.jsxs)(MarkToolbarDemo, {
              children: [
                (0, jsx_runtime.jsx)(MarkToolbarButton, {
                  nodeType: 'bold',
                  tooltip: 'Bold (Cmd+B)',
                  children: (0, jsx_runtime.jsx)(bold.A, {
                    className: 'h-4 w-4',
                  }),
                }),
                (0, jsx_runtime.jsx)(MarkToolbarButton, {
                  nodeType: 'italic',
                  tooltip: 'Italic (Cmd+I)',
                  children: (0, jsx_runtime.jsx)(italic.A, {
                    className: 'h-4 w-4',
                  }),
                }),
                (0, jsx_runtime.jsx)(MarkToolbarButton, {
                  nodeType: 'underline',
                  tooltip: 'Underline (Cmd+U)',
                  children: (0, jsx_runtime.jsx)(underline.A, {
                    className: 'h-4 w-4',
                  }),
                }),
                (0, jsx_runtime.jsx)(MarkToolbarButton, {
                  nodeType: 'strikethrough',
                  tooltip: 'Strikethrough',
                  children: (0, jsx_runtime.jsx)(strikethrough.A, {
                    className: 'h-4 w-4',
                  }),
                }),
                (0, jsx_runtime.jsx)(MarkToolbarButton, {
                  nodeType: 'code',
                  tooltip: 'Code (Cmd+E)',
                  children: (0, jsx_runtime.jsx)(code.A, {
                    className: 'h-4 w-4',
                  }),
                }),
              ],
            }),
        },
        WithFormattedText = {
          args: { nodeType: 'bold' },
          render: () =>
            (0, jsx_runtime.jsxs)(MarkToolbarDemo, {
              initialValue: [
                {
                  type: 'p',
                  children: [
                    { text: 'This text has ' },
                    { text: 'bold', bold: !0 },
                    { text: ', ' },
                    { text: 'italic', italic: !0 },
                    { text: ', and ' },
                    { text: 'underline', underline: !0 },
                    { text: ' formatting.' },
                  ],
                },
              ],
              children: [
                (0, jsx_runtime.jsx)(MarkToolbarButton, {
                  nodeType: 'bold',
                  tooltip: 'Bold',
                  children: (0, jsx_runtime.jsx)(bold.A, {
                    className: 'h-4 w-4',
                  }),
                }),
                (0, jsx_runtime.jsx)(MarkToolbarButton, {
                  nodeType: 'italic',
                  tooltip: 'Italic',
                  children: (0, jsx_runtime.jsx)(italic.A, {
                    className: 'h-4 w-4',
                  }),
                }),
                (0, jsx_runtime.jsx)(MarkToolbarButton, {
                  nodeType: 'underline',
                  tooltip: 'Underline',
                  children: (0, jsx_runtime.jsx)(underline.A, {
                    className: 'h-4 w-4',
                  }),
                }),
              ],
            }),
        },
        WithClearMarks = {
          args: { nodeType: 'code' },
          render: () =>
            (0, jsx_runtime.jsxs)(MarkToolbarDemo, {
              initialValue: [
                {
                  type: 'p',
                  children: [
                    { text: 'Apply ' },
                    { text: 'code formatting', code: !0, italic: !0 },
                    { text: ' to clear italic marks' },
                  ],
                },
              ],
              children: [
                (0, jsx_runtime.jsx)(MarkToolbarButton, {
                  nodeType: 'italic',
                  tooltip: 'Italic',
                  children: (0, jsx_runtime.jsx)(italic.A, {
                    className: 'h-4 w-4',
                  }),
                }),
                (0, jsx_runtime.jsx)(MarkToolbarButton, {
                  nodeType: 'code',
                  clear: 'italic',
                  tooltip: 'Code (clears italic)',
                  children: (0, jsx_runtime.jsx)(code.A, {
                    className: 'h-4 w-4',
                  }),
                }),
              ],
            }),
        },
        SimpleToolbarButton = {
          args: { nodeType: 'bold' },
          render: () => {
            const [pressed, setPressed] = (0, react.useState)(!1)
            return (0, jsx_runtime.jsxs)('div', {
              className: 'space-y-4',
              children: [
                (0, jsx_runtime.jsx)(ToolbarButton, {
                  pressed,
                  onPressedChange: setPressed,
                  tooltip: 'Click to toggle',
                  children: (0, jsx_runtime.jsx)(bold.A, {
                    className: 'h-4 w-4',
                  }),
                }),
                (0, jsx_runtime.jsxs)('p', {
                  className: 'text-sm text-muted-foreground',
                  children: ['Button is ', pressed ? 'pressed' : 'not pressed'],
                }),
              ],
            })
          },
        },
        SimpleToolbarButtonGroup = {
          args: { nodeType: 'bold' },
          render: () => {
            const [activeButtons, setActiveButtons] = (0, react.useState)(
                new Set()
              ),
              toggleButton = (id) => {
                const newActive = new Set(activeButtons)
                ;(newActive.has(id) ? newActive.delete(id) : newActive.add(id),
                  setActiveButtons(newActive))
              }
            return (0, jsx_runtime.jsxs)('div', {
              className: 'space-y-4',
              children: [
                (0, jsx_runtime.jsxs)('div', {
                  className: 'flex items-center gap-1 p-1 border rounded-lg',
                  children: [
                    (0, jsx_runtime.jsx)(ToolbarButton, {
                      pressed: activeButtons.has('bold'),
                      onPressedChange: () => toggleButton('bold'),
                      tooltip: 'Bold',
                      children: (0, jsx_runtime.jsx)(bold.A, {
                        className: 'h-4 w-4',
                      }),
                    }),
                    (0, jsx_runtime.jsx)(ToolbarButton, {
                      pressed: activeButtons.has('italic'),
                      onPressedChange: () => toggleButton('italic'),
                      tooltip: 'Italic',
                      children: (0, jsx_runtime.jsx)(italic.A, {
                        className: 'h-4 w-4',
                      }),
                    }),
                    (0, jsx_runtime.jsx)(ToolbarButton, {
                      pressed: activeButtons.has('underline'),
                      onPressedChange: () => toggleButton('underline'),
                      tooltip: 'Underline',
                      children: (0, jsx_runtime.jsx)(underline.A, {
                        className: 'h-4 w-4',
                      }),
                    }),
                    (0, jsx_runtime.jsx)('div', {
                      className: 'w-px h-6 bg-border mx-1',
                    }),
                    (0, jsx_runtime.jsx)(ToolbarButton, {
                      pressed: activeButtons.has('code'),
                      onPressedChange: () => toggleButton('code'),
                      tooltip: 'Code',
                      children: (0, jsx_runtime.jsx)(code.A, {
                        className: 'h-4 w-4',
                      }),
                    }),
                    (0, jsx_runtime.jsx)(ToolbarButton, {
                      pressed: activeButtons.has('highlight'),
                      onPressedChange: () => toggleButton('highlight'),
                      tooltip: 'Highlight',
                      children: (0, jsx_runtime.jsx)(highlighter.A, {
                        className: 'h-4 w-4',
                      }),
                    }),
                  ],
                }),
                (0, jsx_runtime.jsxs)('p', {
                  className: 'text-sm text-muted-foreground',
                  children: [
                    'Active: ',
                    Array.from(activeButtons).join(', ') || 'None',
                  ],
                }),
              ],
            })
          },
        },
        DisabledToolbarButton = {
          args: { nodeType: 'bold' },
          render: () =>
            (0, jsx_runtime.jsxs)('div', {
              className: 'flex items-center gap-2',
              children: [
                (0, jsx_runtime.jsx)(ToolbarButton, {
                  tooltip: 'Enabled button',
                  children: (0, jsx_runtime.jsx)(bold.A, {
                    className: 'h-4 w-4',
                  }),
                }),
                (0, jsx_runtime.jsx)(ToolbarButton, {
                  disabled: !0,
                  tooltip: 'Disabled button',
                  children: (0, jsx_runtime.jsx)(italic.A, {
                    className: 'h-4 w-4',
                  }),
                }),
                (0, jsx_runtime.jsx)(ToolbarButton, {
                  pressed: !0,
                  disabled: !0,
                  tooltip: 'Pressed and disabled',
                  children: (0, jsx_runtime.jsx)(underline.A, {
                    className: 'h-4 w-4',
                  }),
                }),
              ],
            }),
        },
        CustomStyling = {
          args: { nodeType: 'bold' },
          render: () =>
            (0, jsx_runtime.jsxs)('div', {
              className: 'flex items-center gap-2',
              children: [
                (0, jsx_runtime.jsx)(ToolbarButton, {
                  className: 'bg-blue-500 hover:bg-blue-600 text-white',
                  tooltip: 'Custom blue button',
                  children: (0, jsx_runtime.jsx)(bold.A, {
                    className: 'h-4 w-4',
                  }),
                }),
                (0, jsx_runtime.jsxs)(ToolbarButton, {
                  className: 'h-10 px-4',
                  tooltip: 'Larger button',
                  children: [
                    (0, jsx_runtime.jsx)(italic.A, { className: 'h-5 w-5' }),
                    (0, jsx_runtime.jsx)('span', {
                      className: 'ml-2',
                      children: 'Italic',
                    }),
                  ],
                }),
                (0, jsx_runtime.jsx)(ToolbarButton, {
                  className: 'rounded-full',
                  tooltip: 'Rounded button',
                  children: (0, jsx_runtime.jsx)(code.A, {
                    className: 'h-4 w-4',
                  }),
                }),
              ],
            }),
        },
        InteractiveMarkButton = {
          args: { nodeType: 'bold' },
          render: () =>
            (0, jsx_runtime.jsx)(MarkToolbarDemo, {
              initialValue: [
                {
                  type: 'p',
                  children: [
                    { text: 'Select this text and click the bold button' },
                  ],
                },
              ],
              children: (0, jsx_runtime.jsx)(MarkToolbarButton, {
                nodeType: 'bold',
                tooltip: 'Bold',
                children: (0, jsx_runtime.jsx)(bold.A, {
                  className: 'h-4 w-4',
                }),
              }),
            }),
          play: async ({ canvasElement }) => {
            const canvas = (0, dist.ux)(canvasElement)
            await new Promise((resolve) => setTimeout(resolve, 100))
            const editor = canvas.getByRole('textbox')
            await dist.Q4.tripleClick(editor)
            const boldButton = canvas.getByRole('button', { name: 'Bold' })
            ;(await dist.Q4.click(boldButton),
              await (0, dist.E3)(boldButton).toHaveClass(/bg-primary/))
          },
        },
        InteractiveSimpleButton = {
          args: { nodeType: 'bold' },
          render: () => {
            const [clickCount, setClickCount] = (0, react.useState)(0)
            return (0, jsx_runtime.jsx)('div', {
              className: 'space-y-4',
              children: (0, jsx_runtime.jsxs)(ToolbarButton, {
                onClick: () => setClickCount(clickCount + 1),
                tooltip: 'Click me!',
                children: ['Click Count: ', clickCount],
              }),
            })
          },
          play: async ({ canvasElement }) => {
            const button = (0, dist.ux)(canvasElement).getByRole('button')
            ;(await dist.Q4.click(button),
              await (0, dist.E3)(button).toHaveTextContent('Click Count: 1'),
              await dist.Q4.click(button),
              await (0, dist.E3)(button).toHaveTextContent('Click Count: 2'),
              await dist.Q4.click(button),
              await (0, dist.E3)(button).toHaveTextContent('Click Count: 3'))
          },
        },
        TooltipHover = {
          args: { nodeType: 'bold' },
          render: () =>
            (0, jsx_runtime.jsxs)('div', {
              className: 'flex items-center gap-2',
              children: [
                (0, jsx_runtime.jsx)(ToolbarButton, {
                  tooltip: 'This is a helpful tooltip',
                  children: 'Hover me',
                }),
                (0, jsx_runtime.jsx)(ToolbarButton, {
                  tooltip: 'Keyboard shortcut: Cmd+B',
                  children: (0, jsx_runtime.jsx)(bold.A, {
                    className: 'h-4 w-4',
                  }),
                }),
              ],
            }),
          play: async ({ canvasElement }) => {
            const button = (0, dist.ux)(canvasElement).getByText('Hover me')
            ;(await dist.Q4.hover(button),
              await (0, dist.E3)(button).toHaveAttribute(
                'title',
                'This is a helpful tooltip'
              ))
          },
        },
        RealWorldToolbar = {
          args: { nodeType: 'bold' },
          render: () =>
            (0, jsx_runtime.jsxs)(MarkToolbarDemo, {
              initialValue: [
                {
                  type: 'p',
                  children: [
                    {
                      text: 'Try formatting this text with the toolbar buttons above. ',
                    },
                    { text: 'You can apply ', italic: !0 },
                    { text: 'multiple', bold: !0, italic: !0 },
                    { text: ' formats', underline: !0, italic: !0 },
                    { text: ' at once.' },
                  ],
                },
              ],
              children: [
                (0, jsx_runtime.jsx)(MarkToolbarButton, {
                  nodeType: 'bold',
                  tooltip: 'Bold (Cmd+B)',
                  children: (0, jsx_runtime.jsx)(bold.A, {
                    className: 'h-4 w-4',
                  }),
                }),
                (0, jsx_runtime.jsx)(MarkToolbarButton, {
                  nodeType: 'italic',
                  tooltip: 'Italic (Cmd+I)',
                  children: (0, jsx_runtime.jsx)(italic.A, {
                    className: 'h-4 w-4',
                  }),
                }),
                (0, jsx_runtime.jsx)(MarkToolbarButton, {
                  nodeType: 'underline',
                  tooltip: 'Underline (Cmd+U)',
                  children: (0, jsx_runtime.jsx)(underline.A, {
                    className: 'h-4 w-4',
                  }),
                }),
                (0, jsx_runtime.jsx)(MarkToolbarButton, {
                  nodeType: 'strikethrough',
                  tooltip: 'Strikethrough',
                  children: (0, jsx_runtime.jsx)(strikethrough.A, {
                    className: 'h-4 w-4',
                  }),
                }),
                (0, jsx_runtime.jsx)('div', {
                  className: 'w-px h-6 bg-border mx-1',
                }),
                (0, jsx_runtime.jsx)(MarkToolbarButton, {
                  nodeType: 'code',
                  tooltip: 'Code (Cmd+E)',
                  children: (0, jsx_runtime.jsx)(code.A, {
                    className: 'h-4 w-4',
                  }),
                }),
                (0, jsx_runtime.jsx)(MarkToolbarButton, {
                  nodeType: 'highlight',
                  tooltip: 'Highlight',
                  children: (0, jsx_runtime.jsx)(highlighter.A, {
                    className: 'h-4 w-4',
                  }),
                }),
              ],
            }),
        },
        __namedExportsOrder = [
          'BoldButton',
          'ItalicButton',
          'UnderlineButton',
          'MultipleButtons',
          'WithFormattedText',
          'WithClearMarks',
          'SimpleToolbarButton',
          'SimpleToolbarButtonGroup',
          'DisabledToolbarButton',
          'CustomStyling',
          'InteractiveMarkButton',
          'InteractiveSimpleButton',
          'TooltipHover',
          'RealWorldToolbar',
        ]
      ;((BoldButton.parameters = {
        ...BoldButton.parameters,
        docs: {
          ...BoldButton.parameters?.docs,
          source: {
            originalSource:
              "{\n  args: {\n    nodeType: 'bold'\n  },\n  render: () => <MarkToolbarDemo>\n      <MarkToolbarButton nodeType='bold' tooltip='Bold (Cmd+B)'>\n        <BoldIcon className='h-4 w-4' />\n      </MarkToolbarButton>\n    </MarkToolbarDemo>\n}",
            ...BoldButton.parameters?.docs?.source,
          },
        },
      }),
        (ItalicButton.parameters = {
          ...ItalicButton.parameters,
          docs: {
            ...ItalicButton.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    nodeType: 'italic'\n  },\n  render: () => <MarkToolbarDemo>\n      <MarkToolbarButton nodeType='italic' tooltip='Italic (Cmd+I)'>\n        <ItalicIcon className='h-4 w-4' />\n      </MarkToolbarButton>\n    </MarkToolbarDemo>\n}",
              ...ItalicButton.parameters?.docs?.source,
            },
          },
        }),
        (UnderlineButton.parameters = {
          ...UnderlineButton.parameters,
          docs: {
            ...UnderlineButton.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    nodeType: 'underline'\n  },\n  render: () => <MarkToolbarDemo>\n      <MarkToolbarButton nodeType='underline' tooltip='Underline (Cmd+U)'>\n        <UnderlineIcon className='h-4 w-4' />\n      </MarkToolbarButton>\n    </MarkToolbarDemo>\n}",
              ...UnderlineButton.parameters?.docs?.source,
            },
          },
        }),
        (MultipleButtons.parameters = {
          ...MultipleButtons.parameters,
          docs: {
            ...MultipleButtons.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    nodeType: 'bold'\n  },\n  render: () => <MarkToolbarDemo>\n      <MarkToolbarButton nodeType='bold' tooltip='Bold (Cmd+B)'>\n        <BoldIcon className='h-4 w-4' />\n      </MarkToolbarButton>\n      <MarkToolbarButton nodeType='italic' tooltip='Italic (Cmd+I)'>\n        <ItalicIcon className='h-4 w-4' />\n      </MarkToolbarButton>\n      <MarkToolbarButton nodeType='underline' tooltip='Underline (Cmd+U)'>\n        <UnderlineIcon className='h-4 w-4' />\n      </MarkToolbarButton>\n      <MarkToolbarButton nodeType='strikethrough' tooltip='Strikethrough'>\n        <StrikethroughIcon className='h-4 w-4' />\n      </MarkToolbarButton>\n      <MarkToolbarButton nodeType='code' tooltip='Code (Cmd+E)'>\n        <CodeIcon className='h-4 w-4' />\n      </MarkToolbarButton>\n    </MarkToolbarDemo>\n}",
              ...MultipleButtons.parameters?.docs?.source,
            },
          },
        }),
        (WithFormattedText.parameters = {
          ...WithFormattedText.parameters,
          docs: {
            ...WithFormattedText.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    nodeType: 'bold'\n  },\n  render: () => <MarkToolbarDemo initialValue={[{\n    type: 'p',\n    children: [{\n      text: 'This text has '\n    }, {\n      text: 'bold',\n      bold: true\n    }, {\n      text: ', '\n    }, {\n      text: 'italic',\n      italic: true\n    }, {\n      text: ', and '\n    }, {\n      text: 'underline',\n      underline: true\n    }, {\n      text: ' formatting.'\n    }]\n  }]}>\n      <MarkToolbarButton nodeType='bold' tooltip='Bold'>\n        <BoldIcon className='h-4 w-4' />\n      </MarkToolbarButton>\n      <MarkToolbarButton nodeType='italic' tooltip='Italic'>\n        <ItalicIcon className='h-4 w-4' />\n      </MarkToolbarButton>\n      <MarkToolbarButton nodeType='underline' tooltip='Underline'>\n        <UnderlineIcon className='h-4 w-4' />\n      </MarkToolbarButton>\n    </MarkToolbarDemo>\n}",
              ...WithFormattedText.parameters?.docs?.source,
            },
          },
        }),
        (WithClearMarks.parameters = {
          ...WithClearMarks.parameters,
          docs: {
            ...WithClearMarks.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    nodeType: 'code'\n  },\n  render: () => <MarkToolbarDemo initialValue={[{\n    type: 'p',\n    children: [{\n      text: 'Apply '\n    }, {\n      text: 'code formatting',\n      code: true,\n      italic: true\n    }, {\n      text: ' to clear italic marks'\n    }]\n  }]}>\n      <MarkToolbarButton nodeType='italic' tooltip='Italic'>\n        <ItalicIcon className='h-4 w-4' />\n      </MarkToolbarButton>\n      <MarkToolbarButton nodeType='code' clear='italic' tooltip='Code (clears italic)'>\n        <CodeIcon className='h-4 w-4' />\n      </MarkToolbarButton>\n    </MarkToolbarDemo>\n}",
              ...WithClearMarks.parameters?.docs?.source,
            },
          },
        }),
        (SimpleToolbarButton.parameters = {
          ...SimpleToolbarButton.parameters,
          docs: {
            ...SimpleToolbarButton.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    nodeType: 'bold'\n  },\n  render: () => {\n    const [pressed, setPressed] = useState(false);\n    return <div className='space-y-4'>\n        <ToolbarButton pressed={pressed} onPressedChange={setPressed} tooltip='Click to toggle'>\n          <BoldIcon className='h-4 w-4' />\n        </ToolbarButton>\n        <p className='text-sm text-muted-foreground'>\n          Button is {pressed ? 'pressed' : 'not pressed'}\n        </p>\n      </div>;\n  }\n}",
              ...SimpleToolbarButton.parameters?.docs?.source,
            },
          },
        }),
        (SimpleToolbarButtonGroup.parameters = {
          ...SimpleToolbarButtonGroup.parameters,
          docs: {
            ...SimpleToolbarButtonGroup.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    nodeType: 'bold'\n  },\n  render: () => {\n    const [activeButtons, setActiveButtons] = useState(new Set<string>());\n    const toggleButton = (id: string) => {\n      const newActive = new Set(activeButtons);\n      if (newActive.has(id)) {\n        newActive.delete(id);\n      } else {\n        newActive.add(id);\n      }\n      setActiveButtons(newActive);\n    };\n    return <div className='space-y-4'>\n        <div className='flex items-center gap-1 p-1 border rounded-lg'>\n          <ToolbarButton pressed={activeButtons.has('bold')} onPressedChange={() => toggleButton('bold')} tooltip='Bold'>\n            <BoldIcon className='h-4 w-4' />\n          </ToolbarButton>\n          <ToolbarButton pressed={activeButtons.has('italic')} onPressedChange={() => toggleButton('italic')} tooltip='Italic'>\n            <ItalicIcon className='h-4 w-4' />\n          </ToolbarButton>\n          <ToolbarButton pressed={activeButtons.has('underline')} onPressedChange={() => toggleButton('underline')} tooltip='Underline'>\n            <UnderlineIcon className='h-4 w-4' />\n          </ToolbarButton>\n          <div className='w-px h-6 bg-border mx-1' />\n          <ToolbarButton pressed={activeButtons.has('code')} onPressedChange={() => toggleButton('code')} tooltip='Code'>\n            <CodeIcon className='h-4 w-4' />\n          </ToolbarButton>\n          <ToolbarButton pressed={activeButtons.has('highlight')} onPressedChange={() => toggleButton('highlight')} tooltip='Highlight'>\n            <HighlighterIcon className='h-4 w-4' />\n          </ToolbarButton>\n        </div>\n        <p className='text-sm text-muted-foreground'>\n          Active: {Array.from(activeButtons).join(', ') || 'None'}\n        </p>\n      </div>;\n  }\n}",
              ...SimpleToolbarButtonGroup.parameters?.docs?.source,
            },
          },
        }),
        (DisabledToolbarButton.parameters = {
          ...DisabledToolbarButton.parameters,
          docs: {
            ...DisabledToolbarButton.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    nodeType: 'bold'\n  },\n  render: () => <div className='flex items-center gap-2'>\n      <ToolbarButton tooltip='Enabled button'>\n        <BoldIcon className='h-4 w-4' />\n      </ToolbarButton>\n      <ToolbarButton disabled tooltip='Disabled button'>\n        <ItalicIcon className='h-4 w-4' />\n      </ToolbarButton>\n      <ToolbarButton pressed disabled tooltip='Pressed and disabled'>\n        <UnderlineIcon className='h-4 w-4' />\n      </ToolbarButton>\n    </div>\n}",
              ...DisabledToolbarButton.parameters?.docs?.source,
            },
          },
        }),
        (CustomStyling.parameters = {
          ...CustomStyling.parameters,
          docs: {
            ...CustomStyling.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    nodeType: 'bold'\n  },\n  render: () => <div className='flex items-center gap-2'>\n      <ToolbarButton className='bg-blue-500 hover:bg-blue-600 text-white' tooltip='Custom blue button'>\n        <BoldIcon className='h-4 w-4' />\n      </ToolbarButton>\n      <ToolbarButton className='h-10 px-4' tooltip='Larger button'>\n        <ItalicIcon className='h-5 w-5' />\n        <span className='ml-2'>Italic</span>\n      </ToolbarButton>\n      <ToolbarButton className='rounded-full' tooltip='Rounded button'>\n        <CodeIcon className='h-4 w-4' />\n      </ToolbarButton>\n    </div>\n}",
              ...CustomStyling.parameters?.docs?.source,
            },
          },
        }),
        (InteractiveMarkButton.parameters = {
          ...InteractiveMarkButton.parameters,
          docs: {
            ...InteractiveMarkButton.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    nodeType: 'bold'\n  },\n  render: () => <MarkToolbarDemo initialValue={[{\n    type: 'p',\n    children: [{\n      text: 'Select this text and click the bold button'\n    }]\n  }]}>\n      <MarkToolbarButton nodeType='bold' tooltip='Bold'>\n        <BoldIcon className='h-4 w-4' />\n      </MarkToolbarButton>\n    </MarkToolbarDemo>,\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Wait for render\n    await new Promise(resolve => setTimeout(resolve, 100));\n\n    // Select text\n    const editor = canvas.getByRole('textbox');\n    await userEvent.tripleClick(editor);\n\n    // Click bold button\n    const boldButton = canvas.getByRole('button', {\n      name: 'Bold'\n    });\n    await userEvent.click(boldButton);\n\n    // Button should be pressed\n    await expect(boldButton).toHaveClass(/bg-primary/);\n  }\n}",
              ...InteractiveMarkButton.parameters?.docs?.source,
            },
          },
        }),
        (InteractiveSimpleButton.parameters = {
          ...InteractiveSimpleButton.parameters,
          docs: {
            ...InteractiveSimpleButton.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    nodeType: 'bold'\n  },\n  render: () => {\n    const [clickCount, setClickCount] = useState(0);\n    return <div className='space-y-4'>\n        <ToolbarButton onClick={() => setClickCount(clickCount + 1)} tooltip='Click me!'>\n          Click Count: {clickCount}\n        </ToolbarButton>\n      </div>;\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const button = canvas.getByRole('button');\n\n    // Click multiple times\n    await userEvent.click(button);\n    await expect(button).toHaveTextContent('Click Count: 1');\n    await userEvent.click(button);\n    await expect(button).toHaveTextContent('Click Count: 2');\n    await userEvent.click(button);\n    await expect(button).toHaveTextContent('Click Count: 3');\n  }\n}",
              ...InteractiveSimpleButton.parameters?.docs?.source,
            },
          },
        }),
        (TooltipHover.parameters = {
          ...TooltipHover.parameters,
          docs: {
            ...TooltipHover.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    nodeType: 'bold'\n  },\n  render: () => <div className='flex items-center gap-2'>\n      <ToolbarButton tooltip='This is a helpful tooltip'>\n        Hover me\n      </ToolbarButton>\n      <ToolbarButton tooltip='Keyboard shortcut: Cmd+B'>\n        <BoldIcon className='h-4 w-4' />\n      </ToolbarButton>\n    </div>,\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const button = canvas.getByText('Hover me');\n\n    // Hover to show tooltip\n    await userEvent.hover(button);\n\n    // Check title attribute\n    await expect(button).toHaveAttribute('title', 'This is a helpful tooltip');\n  }\n}",
              ...TooltipHover.parameters?.docs?.source,
            },
          },
        }),
        (RealWorldToolbar.parameters = {
          ...RealWorldToolbar.parameters,
          docs: {
            ...RealWorldToolbar.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    nodeType: 'bold'\n  },\n  render: () => <MarkToolbarDemo initialValue={[{\n    type: 'p',\n    children: [{\n      text: 'Try formatting this text with the toolbar buttons above. '\n    }, {\n      text: 'You can apply ',\n      italic: true\n    }, {\n      text: 'multiple',\n      bold: true,\n      italic: true\n    }, {\n      text: ' formats',\n      underline: true,\n      italic: true\n    }, {\n      text: ' at once.'\n    }]\n  }]}>\n      <MarkToolbarButton nodeType='bold' tooltip='Bold (Cmd+B)'>\n        <BoldIcon className='h-4 w-4' />\n      </MarkToolbarButton>\n      <MarkToolbarButton nodeType='italic' tooltip='Italic (Cmd+I)'>\n        <ItalicIcon className='h-4 w-4' />\n      </MarkToolbarButton>\n      <MarkToolbarButton nodeType='underline' tooltip='Underline (Cmd+U)'>\n        <UnderlineIcon className='h-4 w-4' />\n      </MarkToolbarButton>\n      <MarkToolbarButton nodeType='strikethrough' tooltip='Strikethrough'>\n        <StrikethroughIcon className='h-4 w-4' />\n      </MarkToolbarButton>\n      <div className='w-px h-6 bg-border mx-1' />\n      <MarkToolbarButton nodeType='code' tooltip='Code (Cmd+E)'>\n        <CodeIcon className='h-4 w-4' />\n      </MarkToolbarButton>\n      <MarkToolbarButton nodeType='highlight' tooltip='Highlight'>\n        <HighlighterIcon className='h-4 w-4' />\n      </MarkToolbarButton>\n    </MarkToolbarDemo>\n}",
              ...RealWorldToolbar.parameters?.docs?.source,
            },
          },
        }))
    },
  },
])
