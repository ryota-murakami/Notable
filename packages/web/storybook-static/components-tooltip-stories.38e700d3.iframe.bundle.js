'use strict'
;(self.webpackChunk_notable_web = self.webpackChunk_notable_web || []).push([
  [3169],
  {
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
    './design-system/components/tooltip.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      ;(__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          ComplexLayout: () => ComplexLayout,
          CustomContent: () => CustomContent,
          Default: () => Default,
          DelayDurations: () => DelayDurations,
          DisabledTrigger: () => DisabledTrigger,
          FormFieldExample: () => FormFieldExample,
          Positions: () => Positions,
          WithIcons: () => WithIcons,
          WithKeyboardShortcut: () => WithKeyboardShortcut,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => tooltip_stories,
        }))
      var jsx_runtime = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        react = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
        ),
        dist = __webpack_require__(
          '../../node_modules/.pnpm/@radix-ui+react-tooltip@1.2.7_@types+react-dom@19.1.6_@types+react@19.1.8__@types+react_577567665b1888228a51cf76b71cde18/node_modules/@radix-ui/react-tooltip/dist/index.mjs'
        ),
        utils = __webpack_require__('./lib/utils.ts')
      function cov_s4y86tkrn() {
        var path =
            '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/tooltip.tsx',
          global = new Function('return this')(),
          gcv = '__coverage__',
          coverage = global[gcv] || (global[gcv] = {})
        ;(coverage[path] &&
          'fc276d90b499776fb492b399c6f426d486a60efb' === coverage[path].hash) ||
          (coverage[path] = {
            path: '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/tooltip.tsx',
            statementMap: {
              0: {
                start: { line: 6, column: 24 },
                end: { line: 6, column: 49 },
              },
              1: {
                start: { line: 7, column: 16 },
                end: { line: 7, column: 37 },
              },
              2: {
                start: { line: 8, column: 23 },
                end: { line: 8, column: 47 },
              },
              3: {
                start: { line: 9, column: 37 },
                end: { line: 14, column: 7 },
              },
              4: {
                start: { line: 9, column: 116 },
                end: { line: 14, column: 6 },
              },
              5: {
                start: { line: 15, column: 0 },
                end: { line: 15, column: 66 },
              },
              6: {
                start: { line: 17, column: 0 },
                end: { line: 29, column: 2 },
              },
            },
            fnMap: {
              0: {
                name: '(anonymous_0)',
                decl: {
                  start: { line: 9, column: 54 },
                  end: { line: 9, column: 55 },
                },
                loc: {
                  start: { line: 9, column: 116 },
                  end: { line: 14, column: 6 },
                },
                line: 9,
              },
            },
            branchMap: {
              0: {
                loc: {
                  start: { line: 9, column: 68 },
                  end: { line: 9, column: 82 },
                },
                type: 'default-arg',
                locations: [
                  {
                    start: { line: 9, column: 81 },
                    end: { line: 9, column: 82 },
                  },
                ],
                line: 9,
              },
            },
            s: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 },
            f: { 0: 0 },
            b: { 0: [0] },
            inputSourceMap: {
              version: 3,
              sources: [
                '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/tooltip.tsx',
              ],
              sourcesContent: [
                "'use client'\n\nimport * as React from 'react'\nimport * as TooltipPrimitive from '@radix-ui/react-tooltip'\n\nimport { cn } from '@/lib/utils'\n\nconst TooltipProvider = TooltipPrimitive.Provider\n\nconst Tooltip = TooltipPrimitive.Root\n\nconst TooltipTrigger = TooltipPrimitive.Trigger\n\nconst TooltipContent = React.forwardRef<\n  React.ElementRef<typeof TooltipPrimitive.Content>,\n  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>\n>(({ className, sideOffset = 4, ...props }, ref) => (\n  <TooltipPrimitive.Content\n    ref={ref}\n    sideOffset={sideOffset}\n    className={cn(\n      'z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',\n      className\n    )}\n    {...props}\n  />\n))\nTooltipContent.displayName = TooltipPrimitive.Content.displayName\n\nexport { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }\n",
              ],
              names: [],
              mappings:
                'AAAA,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;AAEX,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAC7B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAE1D,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAE/B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;AAEhD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;AAEpC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;AAE9C,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,eAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAGrC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,YAClD,KAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;QACtB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACR,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACtB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACX,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACnX,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QAET,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;AAGb,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;AAEhE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC',
            },
            _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
            hash: 'fc276d90b499776fb492b399c6f426d486a60efb',
          })
        var actualCoverage = coverage[path]
        return (
          (cov_s4y86tkrn = function () {
            return actualCoverage
          }),
          actualCoverage
        )
      }
      cov_s4y86tkrn()
      const TooltipProvider = (cov_s4y86tkrn().s[0]++, dist.Kq),
        Tooltip = (cov_s4y86tkrn().s[1]++, dist.bL),
        TooltipTrigger = (cov_s4y86tkrn().s[2]++, dist.l9),
        TooltipContent =
          (cov_s4y86tkrn().s[3]++,
          react.forwardRef(
            (
              {
                className,
                sideOffset = (cov_s4y86tkrn().b[0][0]++, 4),
                ...props
              },
              ref
            ) => (
              cov_s4y86tkrn().f[0]++,
              cov_s4y86tkrn().s[4]++,
              (0, jsx_runtime.jsx)(dist.UC, {
                ref,
                sideOffset,
                className: (0, utils.cn)(
                  'z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
                  className
                ),
                ...props,
              })
            )
          ))
      ;(cov_s4y86tkrn().s[5]++,
        (TooltipContent.displayName = dist.UC.displayName),
        cov_s4y86tkrn().s[6]++,
        (TooltipContent.__docgenInfo = {
          description: '',
          methods: [],
          props: {
            sideOffset: {
              defaultValue: { value: '4', computed: !1 },
              required: !1,
            },
          },
        }))
      var ui_button = __webpack_require__('./components/ui/button.tsx'),
        bold = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/bold.js'
        ),
        italic = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/italic.js'
        ),
        underline = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/underline.js'
        ),
        copy = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/copy.js'
        ),
        settings = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/settings.js'
        ),
        circle_help = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-help.js'
        ),
        info = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/info.js'
        ),
        plus = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/plus.js'
        )
      const tooltip_stories = {
          title: 'Design System/Overlay/Tooltip',
          component: Tooltip,
          tags: ['autodocs'],
          decorators: [
            (Story) =>
              (0, jsx_runtime.jsx)(TooltipProvider, {
                children: (0, jsx_runtime.jsx)(Story, {}),
              }),
          ],
          parameters: { layout: 'centered' },
        },
        Default = {
          render: () =>
            (0, jsx_runtime.jsxs)(Tooltip, {
              children: [
                (0, jsx_runtime.jsx)(TooltipTrigger, {
                  asChild: !0,
                  children: (0, jsx_runtime.jsx)(ui_button.$, {
                    variant: 'outline',
                    children: 'Hover me',
                  }),
                }),
                (0, jsx_runtime.jsx)(TooltipContent, {
                  children: (0, jsx_runtime.jsx)('p', {
                    children: 'This is a tooltip',
                  }),
                }),
              ],
            }),
        },
        Positions = {
          render: () =>
            (0, jsx_runtime.jsxs)('div', {
              className: 'grid grid-cols-2 gap-8',
              children: [
                (0, jsx_runtime.jsxs)(Tooltip, {
                  children: [
                    (0, jsx_runtime.jsx)(TooltipTrigger, {
                      asChild: !0,
                      children: (0, jsx_runtime.jsx)(ui_button.$, {
                        variant: 'outline',
                        children: 'Top',
                      }),
                    }),
                    (0, jsx_runtime.jsx)(TooltipContent, {
                      side: 'top',
                      children: (0, jsx_runtime.jsx)('p', {
                        children: 'Tooltip on top',
                      }),
                    }),
                  ],
                }),
                (0, jsx_runtime.jsxs)(Tooltip, {
                  children: [
                    (0, jsx_runtime.jsx)(TooltipTrigger, {
                      asChild: !0,
                      children: (0, jsx_runtime.jsx)(ui_button.$, {
                        variant: 'outline',
                        children: 'Right',
                      }),
                    }),
                    (0, jsx_runtime.jsx)(TooltipContent, {
                      side: 'right',
                      children: (0, jsx_runtime.jsx)('p', {
                        children: 'Tooltip on right',
                      }),
                    }),
                  ],
                }),
                (0, jsx_runtime.jsxs)(Tooltip, {
                  children: [
                    (0, jsx_runtime.jsx)(TooltipTrigger, {
                      asChild: !0,
                      children: (0, jsx_runtime.jsx)(ui_button.$, {
                        variant: 'outline',
                        children: 'Bottom',
                      }),
                    }),
                    (0, jsx_runtime.jsx)(TooltipContent, {
                      side: 'bottom',
                      children: (0, jsx_runtime.jsx)('p', {
                        children: 'Tooltip on bottom',
                      }),
                    }),
                  ],
                }),
                (0, jsx_runtime.jsxs)(Tooltip, {
                  children: [
                    (0, jsx_runtime.jsx)(TooltipTrigger, {
                      asChild: !0,
                      children: (0, jsx_runtime.jsx)(ui_button.$, {
                        variant: 'outline',
                        children: 'Left',
                      }),
                    }),
                    (0, jsx_runtime.jsx)(TooltipContent, {
                      side: 'left',
                      children: (0, jsx_runtime.jsx)('p', {
                        children: 'Tooltip on left',
                      }),
                    }),
                  ],
                }),
              ],
            }),
        },
        WithIcons = {
          render: () =>
            (0, jsx_runtime.jsxs)('div', {
              className: 'flex gap-2',
              children: [
                (0, jsx_runtime.jsxs)(Tooltip, {
                  children: [
                    (0, jsx_runtime.jsx)(TooltipTrigger, {
                      asChild: !0,
                      children: (0, jsx_runtime.jsx)(ui_button.$, {
                        variant: 'ghost',
                        size: 'icon',
                        children: (0, jsx_runtime.jsx)(bold.A, {
                          className: 'h-4 w-4',
                        }),
                      }),
                    }),
                    (0, jsx_runtime.jsx)(TooltipContent, {
                      children: (0, jsx_runtime.jsx)('p', { children: 'Bold' }),
                    }),
                  ],
                }),
                (0, jsx_runtime.jsxs)(Tooltip, {
                  children: [
                    (0, jsx_runtime.jsx)(TooltipTrigger, {
                      asChild: !0,
                      children: (0, jsx_runtime.jsx)(ui_button.$, {
                        variant: 'ghost',
                        size: 'icon',
                        children: (0, jsx_runtime.jsx)(italic.A, {
                          className: 'h-4 w-4',
                        }),
                      }),
                    }),
                    (0, jsx_runtime.jsx)(TooltipContent, {
                      children: (0, jsx_runtime.jsx)('p', {
                        children: 'Italic',
                      }),
                    }),
                  ],
                }),
                (0, jsx_runtime.jsxs)(Tooltip, {
                  children: [
                    (0, jsx_runtime.jsx)(TooltipTrigger, {
                      asChild: !0,
                      children: (0, jsx_runtime.jsx)(ui_button.$, {
                        variant: 'ghost',
                        size: 'icon',
                        children: (0, jsx_runtime.jsx)(underline.A, {
                          className: 'h-4 w-4',
                        }),
                      }),
                    }),
                    (0, jsx_runtime.jsx)(TooltipContent, {
                      children: (0, jsx_runtime.jsx)('p', {
                        children: 'Underline',
                      }),
                    }),
                  ],
                }),
              ],
            }),
        },
        WithKeyboardShortcut = {
          render: () =>
            (0, jsx_runtime.jsxs)('div', {
              className: 'flex gap-2',
              children: [
                (0, jsx_runtime.jsxs)(Tooltip, {
                  children: [
                    (0, jsx_runtime.jsx)(TooltipTrigger, {
                      asChild: !0,
                      children: (0, jsx_runtime.jsx)(ui_button.$, {
                        variant: 'ghost',
                        size: 'icon',
                        children: (0, jsx_runtime.jsx)(copy.A, {
                          className: 'h-4 w-4',
                        }),
                      }),
                    }),
                    (0, jsx_runtime.jsxs)(TooltipContent, {
                      children: [
                        (0, jsx_runtime.jsx)('p', { children: 'Copy' }),
                        (0, jsx_runtime.jsx)('kbd', {
                          className: 'ml-2 text-xs opacity-60',
                          children: '⌘C',
                        }),
                      ],
                    }),
                  ],
                }),
                (0, jsx_runtime.jsxs)(Tooltip, {
                  children: [
                    (0, jsx_runtime.jsx)(TooltipTrigger, {
                      asChild: !0,
                      children: (0, jsx_runtime.jsx)(ui_button.$, {
                        variant: 'ghost',
                        size: 'icon',
                        children: (0, jsx_runtime.jsx)(settings.A, {
                          className: 'h-4 w-4',
                        }),
                      }),
                    }),
                    (0, jsx_runtime.jsxs)(TooltipContent, {
                      children: [
                        (0, jsx_runtime.jsx)('p', { children: 'Settings' }),
                        (0, jsx_runtime.jsx)('kbd', {
                          className: 'ml-2 text-xs opacity-60',
                          children: '⌘,',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
        },
        CustomContent = {
          render: () =>
            (0, jsx_runtime.jsxs)(Tooltip, {
              children: [
                (0, jsx_runtime.jsx)(TooltipTrigger, {
                  asChild: !0,
                  children: (0, jsx_runtime.jsxs)(ui_button.$, {
                    variant: 'outline',
                    children: [
                      (0, jsx_runtime.jsx)(circle_help.A, {
                        className: 'h-4 w-4 mr-2',
                      }),
                      'Help',
                    ],
                  }),
                }),
                (0, jsx_runtime.jsx)(TooltipContent, {
                  className: 'max-w-xs',
                  children: (0, jsx_runtime.jsxs)('div', {
                    className: 'space-y-2',
                    children: [
                      (0, jsx_runtime.jsx)('p', {
                        className: 'font-semibold',
                        children: 'Need assistance?',
                      }),
                      (0, jsx_runtime.jsx)('p', {
                        className: 'text-xs',
                        children:
                          'Click here to open our help documentation or contact support.',
                      }),
                    ],
                  }),
                }),
              ],
            }),
        },
        DelayDurations = {
          render: () =>
            (0, jsx_runtime.jsxs)('div', {
              className: 'flex gap-4',
              children: [
                (0, jsx_runtime.jsxs)(Tooltip, {
                  delayDuration: 0,
                  children: [
                    (0, jsx_runtime.jsx)(TooltipTrigger, {
                      asChild: !0,
                      children: (0, jsx_runtime.jsx)(ui_button.$, {
                        variant: 'outline',
                        children: 'Instant (0ms)',
                      }),
                    }),
                    (0, jsx_runtime.jsx)(TooltipContent, {
                      children: (0, jsx_runtime.jsx)('p', {
                        children: 'No delay',
                      }),
                    }),
                  ],
                }),
                (0, jsx_runtime.jsxs)(Tooltip, {
                  delayDuration: 500,
                  children: [
                    (0, jsx_runtime.jsx)(TooltipTrigger, {
                      asChild: !0,
                      children: (0, jsx_runtime.jsx)(ui_button.$, {
                        variant: 'outline',
                        children: 'Quick (500ms)',
                      }),
                    }),
                    (0, jsx_runtime.jsx)(TooltipContent, {
                      children: (0, jsx_runtime.jsx)('p', {
                        children: '500ms delay',
                      }),
                    }),
                  ],
                }),
                (0, jsx_runtime.jsxs)(Tooltip, {
                  delayDuration: 1e3,
                  children: [
                    (0, jsx_runtime.jsx)(TooltipTrigger, {
                      asChild: !0,
                      children: (0, jsx_runtime.jsx)(ui_button.$, {
                        variant: 'outline',
                        children: 'Slow (1000ms)',
                      }),
                    }),
                    (0, jsx_runtime.jsx)(TooltipContent, {
                      children: (0, jsx_runtime.jsx)('p', {
                        children: '1 second delay',
                      }),
                    }),
                  ],
                }),
              ],
            }),
        },
        DisabledTrigger = {
          render: () =>
            (0, jsx_runtime.jsxs)(Tooltip, {
              children: [
                (0, jsx_runtime.jsx)(TooltipTrigger, {
                  asChild: !0,
                  children: (0, jsx_runtime.jsx)('span', {
                    tabIndex: 0,
                    children: (0, jsx_runtime.jsx)(ui_button.$, {
                      disabled: !0,
                      children: 'Disabled Button',
                    }),
                  }),
                }),
                (0, jsx_runtime.jsx)(TooltipContent, {
                  children: (0, jsx_runtime.jsx)('p', {
                    children: 'This feature is currently unavailable',
                  }),
                }),
              ],
            }),
        },
        FormFieldExample = {
          render: () =>
            (0, jsx_runtime.jsx)('div', {
              className: 'space-y-4 w-full max-w-sm',
              children: (0, jsx_runtime.jsxs)('div', {
                className: 'space-y-2',
                children: [
                  (0, jsx_runtime.jsxs)('div', {
                    className: 'flex items-center gap-2',
                    children: [
                      (0, jsx_runtime.jsx)('label', {
                        htmlFor: 'username',
                        className: 'text-sm font-medium',
                        children: 'Username',
                      }),
                      (0, jsx_runtime.jsxs)(Tooltip, {
                        children: [
                          (0, jsx_runtime.jsx)(TooltipTrigger, {
                            asChild: !0,
                            children: (0, jsx_runtime.jsx)(info.A, {
                              className:
                                'h-3 w-3 text-muted-foreground cursor-help',
                            }),
                          }),
                          (0, jsx_runtime.jsx)(TooltipContent, {
                            children: (0, jsx_runtime.jsx)('p', {
                              children: 'Your username must be unique',
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, jsx_runtime.jsx)('input', {
                    id: 'username',
                    type: 'text',
                    placeholder: 'Enter username',
                    className: 'w-full px-3 py-2 border rounded-md',
                  }),
                ],
              }),
            }),
        },
        ComplexLayout = {
          render: () =>
            (0, jsx_runtime.jsxs)('div', {
              className: 'border rounded-lg p-4 space-y-4',
              children: [
                (0, jsx_runtime.jsxs)('div', {
                  className: 'flex items-center justify-between',
                  children: [
                    (0, jsx_runtime.jsx)('h3', {
                      className: 'text-lg font-semibold',
                      children: 'Project Settings',
                    }),
                    (0, jsx_runtime.jsxs)('div', {
                      className: 'flex gap-1',
                      children: [
                        (0, jsx_runtime.jsxs)(Tooltip, {
                          children: [
                            (0, jsx_runtime.jsx)(TooltipTrigger, {
                              asChild: !0,
                              children: (0, jsx_runtime.jsx)(ui_button.$, {
                                variant: 'ghost',
                                size: 'icon',
                                children: (0, jsx_runtime.jsx)(settings.A, {
                                  className: 'h-4 w-4',
                                }),
                              }),
                            }),
                            (0, jsx_runtime.jsx)(TooltipContent, {
                              children: (0, jsx_runtime.jsx)('p', {
                                children: 'Configure project',
                              }),
                            }),
                          ],
                        }),
                        (0, jsx_runtime.jsxs)(Tooltip, {
                          children: [
                            (0, jsx_runtime.jsx)(TooltipTrigger, {
                              asChild: !0,
                              children: (0, jsx_runtime.jsx)(ui_button.$, {
                                variant: 'ghost',
                                size: 'icon',
                                children: (0, jsx_runtime.jsx)(plus.A, {
                                  className: 'h-4 w-4',
                                }),
                              }),
                            }),
                            (0, jsx_runtime.jsx)(TooltipContent, {
                              children: (0, jsx_runtime.jsx)('p', {
                                children: 'Add new item',
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, jsx_runtime.jsxs)('div', {
                  className: 'space-y-2',
                  children: [
                    (0, jsx_runtime.jsxs)('div', {
                      className:
                        'flex items-center justify-between p-2 hover:bg-muted rounded',
                      children: [
                        (0, jsx_runtime.jsx)('span', {
                          className: 'text-sm',
                          children: 'Enable notifications',
                        }),
                        (0, jsx_runtime.jsxs)(Tooltip, {
                          children: [
                            (0, jsx_runtime.jsx)(TooltipTrigger, {
                              asChild: !0,
                              children: (0, jsx_runtime.jsx)(info.A, {
                                className:
                                  'h-4 w-4 text-muted-foreground cursor-help',
                              }),
                            }),
                            (0, jsx_runtime.jsx)(TooltipContent, {
                              side: 'left',
                              children: (0, jsx_runtime.jsx)('p', {
                                children:
                                  'Receive updates about project changes',
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, jsx_runtime.jsxs)('div', {
                      className:
                        'flex items-center justify-between p-2 hover:bg-muted rounded',
                      children: [
                        (0, jsx_runtime.jsx)('span', {
                          className: 'text-sm',
                          children: 'Auto-save drafts',
                        }),
                        (0, jsx_runtime.jsxs)(Tooltip, {
                          children: [
                            (0, jsx_runtime.jsx)(TooltipTrigger, {
                              asChild: !0,
                              children: (0, jsx_runtime.jsx)(info.A, {
                                className:
                                  'h-4 w-4 text-muted-foreground cursor-help',
                              }),
                            }),
                            (0, jsx_runtime.jsx)(TooltipContent, {
                              side: 'left',
                              children: (0, jsx_runtime.jsx)('p', {
                                children:
                                  'Automatically save your work every 30 seconds',
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
        },
        __namedExportsOrder = [
          'Default',
          'Positions',
          'WithIcons',
          'WithKeyboardShortcut',
          'CustomContent',
          'DelayDurations',
          'DisabledTrigger',
          'FormFieldExample',
          'ComplexLayout',
        ]
      ;((Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              "{\n  render: () => <Tooltip>\n      <TooltipTrigger asChild>\n        <Button variant='outline'>Hover me</Button>\n      </TooltipTrigger>\n      <TooltipContent>\n        <p>This is a tooltip</p>\n      </TooltipContent>\n    </Tooltip>\n}",
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (Positions.parameters = {
          ...Positions.parameters,
          docs: {
            ...Positions.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <div className='grid grid-cols-2 gap-8'>\n      <Tooltip>\n        <TooltipTrigger asChild>\n          <Button variant='outline'>Top</Button>\n        </TooltipTrigger>\n        <TooltipContent side='top'>\n          <p>Tooltip on top</p>\n        </TooltipContent>\n      </Tooltip>\n\n      <Tooltip>\n        <TooltipTrigger asChild>\n          <Button variant='outline'>Right</Button>\n        </TooltipTrigger>\n        <TooltipContent side='right'>\n          <p>Tooltip on right</p>\n        </TooltipContent>\n      </Tooltip>\n\n      <Tooltip>\n        <TooltipTrigger asChild>\n          <Button variant='outline'>Bottom</Button>\n        </TooltipTrigger>\n        <TooltipContent side='bottom'>\n          <p>Tooltip on bottom</p>\n        </TooltipContent>\n      </Tooltip>\n\n      <Tooltip>\n        <TooltipTrigger asChild>\n          <Button variant='outline'>Left</Button>\n        </TooltipTrigger>\n        <TooltipContent side='left'>\n          <p>Tooltip on left</p>\n        </TooltipContent>\n      </Tooltip>\n    </div>\n}",
              ...Positions.parameters?.docs?.source,
            },
          },
        }),
        (WithIcons.parameters = {
          ...WithIcons.parameters,
          docs: {
            ...WithIcons.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <div className='flex gap-2'>\n      <Tooltip>\n        <TooltipTrigger asChild>\n          <Button variant='ghost' size='icon'>\n            <Bold className='h-4 w-4' />\n          </Button>\n        </TooltipTrigger>\n        <TooltipContent>\n          <p>Bold</p>\n        </TooltipContent>\n      </Tooltip>\n\n      <Tooltip>\n        <TooltipTrigger asChild>\n          <Button variant='ghost' size='icon'>\n            <Italic className='h-4 w-4' />\n          </Button>\n        </TooltipTrigger>\n        <TooltipContent>\n          <p>Italic</p>\n        </TooltipContent>\n      </Tooltip>\n\n      <Tooltip>\n        <TooltipTrigger asChild>\n          <Button variant='ghost' size='icon'>\n            <Underline className='h-4 w-4' />\n          </Button>\n        </TooltipTrigger>\n        <TooltipContent>\n          <p>Underline</p>\n        </TooltipContent>\n      </Tooltip>\n    </div>\n}",
              ...WithIcons.parameters?.docs?.source,
            },
          },
        }),
        (WithKeyboardShortcut.parameters = {
          ...WithKeyboardShortcut.parameters,
          docs: {
            ...WithKeyboardShortcut.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <div className='flex gap-2'>\n      <Tooltip>\n        <TooltipTrigger asChild>\n          <Button variant='ghost' size='icon'>\n            <Copy className='h-4 w-4' />\n          </Button>\n        </TooltipTrigger>\n        <TooltipContent>\n          <p>Copy</p>\n          <kbd className='ml-2 text-xs opacity-60'>⌘C</kbd>\n        </TooltipContent>\n      </Tooltip>\n\n      <Tooltip>\n        <TooltipTrigger asChild>\n          <Button variant='ghost' size='icon'>\n            <Settings className='h-4 w-4' />\n          </Button>\n        </TooltipTrigger>\n        <TooltipContent>\n          <p>Settings</p>\n          <kbd className='ml-2 text-xs opacity-60'>⌘,</kbd>\n        </TooltipContent>\n      </Tooltip>\n    </div>\n}",
              ...WithKeyboardShortcut.parameters?.docs?.source,
            },
          },
        }),
        (CustomContent.parameters = {
          ...CustomContent.parameters,
          docs: {
            ...CustomContent.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <Tooltip>\n      <TooltipTrigger asChild>\n        <Button variant='outline'>\n          <HelpCircle className='h-4 w-4 mr-2' />\n          Help\n        </Button>\n      </TooltipTrigger>\n      <TooltipContent className='max-w-xs'>\n        <div className='space-y-2'>\n          <p className='font-semibold'>Need assistance?</p>\n          <p className='text-xs'>\n            Click here to open our help documentation or contact support.\n          </p>\n        </div>\n      </TooltipContent>\n    </Tooltip>\n}",
              ...CustomContent.parameters?.docs?.source,
            },
          },
        }),
        (DelayDurations.parameters = {
          ...DelayDurations.parameters,
          docs: {
            ...DelayDurations.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <div className='flex gap-4'>\n      <Tooltip delayDuration={0}>\n        <TooltipTrigger asChild>\n          <Button variant='outline'>Instant (0ms)</Button>\n        </TooltipTrigger>\n        <TooltipContent>\n          <p>No delay</p>\n        </TooltipContent>\n      </Tooltip>\n\n      <Tooltip delayDuration={500}>\n        <TooltipTrigger asChild>\n          <Button variant='outline'>Quick (500ms)</Button>\n        </TooltipTrigger>\n        <TooltipContent>\n          <p>500ms delay</p>\n        </TooltipContent>\n      </Tooltip>\n\n      <Tooltip delayDuration={1000}>\n        <TooltipTrigger asChild>\n          <Button variant='outline'>Slow (1000ms)</Button>\n        </TooltipTrigger>\n        <TooltipContent>\n          <p>1 second delay</p>\n        </TooltipContent>\n      </Tooltip>\n    </div>\n}",
              ...DelayDurations.parameters?.docs?.source,
            },
          },
        }),
        (DisabledTrigger.parameters = {
          ...DisabledTrigger.parameters,
          docs: {
            ...DisabledTrigger.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <Tooltip>\n      <TooltipTrigger asChild>\n        <span tabIndex={0}>\n          <Button disabled>Disabled Button</Button>\n        </span>\n      </TooltipTrigger>\n      <TooltipContent>\n        <p>This feature is currently unavailable</p>\n      </TooltipContent>\n    </Tooltip>\n}',
              ...DisabledTrigger.parameters?.docs?.source,
            },
          },
        }),
        (FormFieldExample.parameters = {
          ...FormFieldExample.parameters,
          docs: {
            ...FormFieldExample.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <div className='space-y-4 w-full max-w-sm'>\n      <div className='space-y-2'>\n        <div className='flex items-center gap-2'>\n          <label htmlFor='username' className='text-sm font-medium'>\n            Username\n          </label>\n          <Tooltip>\n            <TooltipTrigger asChild>\n              <Info className='h-3 w-3 text-muted-foreground cursor-help' />\n            </TooltipTrigger>\n            <TooltipContent>\n              <p>Your username must be unique</p>\n            </TooltipContent>\n          </Tooltip>\n        </div>\n        <input id='username' type='text' placeholder='Enter username' className='w-full px-3 py-2 border rounded-md' />\n      </div>\n    </div>\n}",
              ...FormFieldExample.parameters?.docs?.source,
            },
          },
        }),
        (ComplexLayout.parameters = {
          ...ComplexLayout.parameters,
          docs: {
            ...ComplexLayout.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <div className='border rounded-lg p-4 space-y-4'>\n      <div className='flex items-center justify-between'>\n        <h3 className='text-lg font-semibold'>Project Settings</h3>\n        <div className='flex gap-1'>\n          <Tooltip>\n            <TooltipTrigger asChild>\n              <Button variant='ghost' size='icon'>\n                <Settings className='h-4 w-4' />\n              </Button>\n            </TooltipTrigger>\n            <TooltipContent>\n              <p>Configure project</p>\n            </TooltipContent>\n          </Tooltip>\n\n          <Tooltip>\n            <TooltipTrigger asChild>\n              <Button variant='ghost' size='icon'>\n                <Plus className='h-4 w-4' />\n              </Button>\n            </TooltipTrigger>\n            <TooltipContent>\n              <p>Add new item</p>\n            </TooltipContent>\n          </Tooltip>\n        </div>\n      </div>\n\n      <div className='space-y-2'>\n        <div className='flex items-center justify-between p-2 hover:bg-muted rounded'>\n          <span className='text-sm'>Enable notifications</span>\n          <Tooltip>\n            <TooltipTrigger asChild>\n              <Info className='h-4 w-4 text-muted-foreground cursor-help' />\n            </TooltipTrigger>\n            <TooltipContent side='left'>\n              <p>Receive updates about project changes</p>\n            </TooltipContent>\n          </Tooltip>\n        </div>\n\n        <div className='flex items-center justify-between p-2 hover:bg-muted rounded'>\n          <span className='text-sm'>Auto-save drafts</span>\n          <Tooltip>\n            <TooltipTrigger asChild>\n              <Info className='h-4 w-4 text-muted-foreground cursor-help' />\n            </TooltipTrigger>\n            <TooltipContent side='left'>\n              <p>Automatically save your work every 30 seconds</p>\n            </TooltipContent>\n          </Tooltip>\n        </div>\n      </div>\n    </div>\n}",
              ...ComplexLayout.parameters?.docs?.source,
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
