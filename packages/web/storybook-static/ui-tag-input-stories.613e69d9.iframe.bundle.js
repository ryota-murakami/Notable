/*! For license information please see ui-tag-input-stories.613e69d9.iframe.bundle.js.LICENSE.txt */
'use strict'
;(self.webpackChunk_notable_web = self.webpackChunk_notable_web || []).push([
  [1933],
  {
    '../../node_modules/.pnpm/class-variance-authority@0.7.1/node_modules/class-variance-authority/dist/index.mjs':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { F: () => cva })
        var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          '../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs'
        )
        const falsyToString = (value) =>
            'boolean' == typeof value ? `${value}` : 0 === value ? '0' : value,
          cx = clsx__WEBPACK_IMPORTED_MODULE_0__.$,
          cva = (base, config) => (props) => {
            var _config_compoundVariants
            if (null == (null == config ? void 0 : config.variants))
              return cx(
                base,
                null == props ? void 0 : props.class,
                null == props ? void 0 : props.className
              )
            const { variants, defaultVariants } = config,
              getVariantClassNames = Object.keys(variants).map((variant) => {
                const variantProp = null == props ? void 0 : props[variant],
                  defaultVariantProp =
                    null == defaultVariants ? void 0 : defaultVariants[variant]
                if (null === variantProp) return null
                const variantKey =
                  falsyToString(variantProp) ||
                  falsyToString(defaultVariantProp)
                return variants[variant][variantKey]
              }),
              propsWithoutUndefined =
                props &&
                Object.entries(props).reduce((acc, param) => {
                  let [key, value] = param
                  return (void 0 === value || (acc[key] = value), acc)
                }, {}),
              getCompoundVariantClassNames =
                null == config ||
                null === (_config_compoundVariants = config.compoundVariants) ||
                void 0 === _config_compoundVariants
                  ? void 0
                  : _config_compoundVariants.reduce((acc, param) => {
                      let {
                        class: cvClass,
                        className: cvClassName,
                        ...compoundVariantOptions
                      } = param
                      return Object.entries(compoundVariantOptions).every(
                        (param) => {
                          let [key, value] = param
                          return Array.isArray(value)
                            ? value.includes(
                                {
                                  ...defaultVariants,
                                  ...propsWithoutUndefined,
                                }[key]
                              )
                            : { ...defaultVariants, ...propsWithoutUndefined }[
                                key
                              ] === value
                        }
                      )
                        ? [...acc, cvClass, cvClassName]
                        : acc
                    }, [])
            return cx(
              base,
              getVariantClassNames,
              getCompoundVariantClassNames,
              null == props ? void 0 : props.class,
              null == props ? void 0 : props.className
            )
          }
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/plus.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Plus })
        const Plus = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Plus', [
          ['path', { d: 'M5 12h14', key: '1ays0h' }],
          ['path', { d: 'M12 5v14', key: 's699le' }],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/x.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => X })
        const X = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('X', [
          ['path', { d: 'M18 6 6 18', key: '1bl5f8' }],
          ['path', { d: 'm6 6 12 12', key: 'd8bk6v' }],
        ])
      },
    './components/ui/badge.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { E: () => Badge })
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        class_variance_authority__WEBPACK_IMPORTED_MODULE_3__ =
          (__webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
          ),
          __webpack_require__(
            '../../node_modules/.pnpm/class-variance-authority@0.7.1/node_modules/class-variance-authority/dist/index.mjs'
          )),
        _lib_utils__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__('./lib/utils.ts')
      function cov_ev42gf5xl() {
        var path =
            '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/badge.tsx',
          global = new Function('return this')(),
          gcv = '__coverage__',
          coverage = global[gcv] || (global[gcv] = {})
        ;(coverage[path] &&
          '156d0648a3f7e24752743511235533fb579bef5e' === coverage[path].hash) ||
          (coverage[path] = {
            path: '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/badge.tsx',
            statementMap: {
              0: {
                start: { line: 5, column: 22 },
                end: { line: 20, column: 2 },
              },
              1: {
                start: { line: 22, column: 4 },
                end: { line: 27, column: 7 },
              },
              2: {
                start: { line: 30, column: 0 },
                end: { line: 37, column: 2 },
              },
            },
            fnMap: {
              0: {
                name: 'Badge',
                decl: {
                  start: { line: 21, column: 9 },
                  end: { line: 21, column: 14 },
                },
                loc: {
                  start: { line: 21, column: 49 },
                  end: { line: 28, column: 1 },
                },
                line: 21,
              },
            },
            branchMap: {},
            s: { 0: 0, 1: 0, 2: 0 },
            f: { 0: 0 },
            b: {},
            inputSourceMap: {
              version: 3,
              sources: [
                '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/badge.tsx',
              ],
              sourcesContent: [
                "import * as React from 'react'\nimport { cva, type VariantProps } from 'class-variance-authority'\nimport { cn } from '@/lib/utils'\n\nconst badgeVariants = cva(\n  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',\n  {\n    variants: {\n      variant: {\n        default:\n          'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',\n        secondary:\n          'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',\n        destructive:\n          'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',\n        outline: 'text-foreground',\n        success:\n          'border-transparent bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',\n        warning:\n          'border-transparent bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400',\n        info: 'border-transparent bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400',\n      },\n    },\n    defaultVariants: {\n      variant: 'default',\n    },\n  }\n)\n\nexport interface BadgeProps\n  extends React.HTMLAttributes<HTMLDivElement>,\n    VariantProps<typeof badgeVariants> {}\n\nfunction Badge({ className, variant, ...props }: BadgeProps) {\n  return (\n    <div className={cn(badgeVariants({ variant }), className)} {...props} />\n  )\n}\n\nexport { Badge, badgeVariants }\n",
              ],
              names: [],
              mappings:
                ';AAAA,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAC7B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,AAAmB,CAAlB,AAAmB,CAAlB,AAAmB,CAAlB,AAAmB,CAAlB,AAAmB,CAAlB,AAAmB,CAAlB,AAAmB,CAAlB,AAAmB,CAAlB,AAAmB,CAAlB,AAAmB,CAAlB,AAAmB,CAAlB,AAAmB,CAAlB,AAAmB,CAAlB,AAAmB,CAAC,AAAnB,CAAoB,AAAnB,CAAoB,AAAnB,CAAoB,AAAnB,CAAoB,AAAnB,CAAoB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAChE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAE/B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACvB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACxK;IACE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACR,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YACP,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACL,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YAC7E,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACP,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YACnF,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACT,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YACzF,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YAC1B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACL,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YAC3F,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACL,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YAC/F,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QAC7F,CAAC;IACH,CAAC;IACD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACf,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;IACpB,CAAC;AACH;AAOF,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,AAAY,CAAX,AAAY,CAAX,AAAY,CAAX,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;IACxD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,cACL,KAAC,CAAC,CAAC,CAAC;QAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;AAE3E;AAEA,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC',
            },
            _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
            hash: '156d0648a3f7e24752743511235533fb579bef5e',
          })
        var actualCoverage = coverage[path]
        return (
          (cov_ev42gf5xl = function () {
            return actualCoverage
          }),
          actualCoverage
        )
      }
      cov_ev42gf5xl()
      const badgeVariants =
        (cov_ev42gf5xl().s[0]++,
        (0, class_variance_authority__WEBPACK_IMPORTED_MODULE_3__.F)(
          'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
          {
            variants: {
              variant: {
                default:
                  'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
                secondary:
                  'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
                destructive:
                  'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
                outline: 'text-foreground',
                success:
                  'border-transparent bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
                warning:
                  'border-transparent bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400',
                info: 'border-transparent bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400',
              },
            },
            defaultVariants: { variant: 'default' },
          }
        ))
      function Badge({ className, variant, ...props }) {
        return (
          cov_ev42gf5xl().f[0]++,
          cov_ev42gf5xl().s[1]++,
          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
            className: (0, _lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(
              badgeVariants({ variant }),
              className
            ),
            ...props,
          })
        )
      }
      ;(cov_ev42gf5xl().s[2]++,
        (Badge.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Badge',
          composes: ['VariantProps'],
        }))
    },
    './components/ui/tag-input.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      ;(__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          ClickOutsideToClose: () => ClickOutsideToClose,
          ColorfulTags: () => ColorfulTags,
          CreateNewTag: () => CreateNewTag,
          CustomPlaceholder: () => CustomPlaceholder,
          DarkMode: () => DarkMode,
          Default: () => Default,
          Disabled: () => Disabled,
          EmptyState: () => EmptyState,
          EscapeKey: () => EscapeKey,
          KeyboardNavigation: () => KeyboardNavigation,
          LoadingState: () => LoadingState,
          LongTagNames: () => LongTagNames,
          ManyTags: () => ManyTags,
          MaxTagsLimit: () => MaxTagsLimit,
          MaxTagsReached: () => MaxTagsReached,
          MobileResponsive: () => MobileResponsive,
          NoCreate: () => NoCreate,
          NoCreateEmptyState: () => NoCreateEmptyState,
          RemoveTag: () => RemoveTag,
          SelectFromSuggestions: () => SelectFromSuggestions,
          TypeAndSearch: () => TypeAndSearch,
          WithSelectedTags: () => WithSelectedTags,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        }))
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
        ),
        _storybook_test__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          '../../node_modules/.pnpm/@storybook+test@8.6.14_storybook@9.0.18_@testing-library+dom@10.4.0_prettier@3.6.2_/node_modules/@storybook/test/dist/index.mjs'
        ),
        _barrel_optimize_names_Plus_X_lucide_react__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/x.js'
          ),
        _barrel_optimize_names_Plus_X_lucide_react__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/plus.js'
          ),
        _components_ui_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          './components/ui/input.tsx'
        ),
        _components_ui_badge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          './components/ui/badge.tsx'
        ),
        _components_ui_popover__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__('./components/ui/popover.tsx')
      const mockTags = [
          {
            id: '1',
            name: 'work',
            color: '#3B82F6',
            usage_count: 12,
            created_at: new Date('2024-01-01').toISOString(),
            user_id: 'user1',
            parent_id: null,
          },
          {
            id: '2',
            name: 'personal',
            color: '#10B981',
            usage_count: 8,
            created_at: new Date('2024-01-05').toISOString(),
            user_id: 'user1',
            parent_id: null,
          },
          {
            id: '3',
            name: 'project',
            color: '#F59E0B',
            usage_count: 15,
            created_at: new Date('2024-01-10').toISOString(),
            user_id: 'user1',
            parent_id: null,
          },
          {
            id: '4',
            name: 'ideas',
            color: '#8B5CF6',
            usage_count: 6,
            created_at: new Date('2024-01-15').toISOString(),
            user_id: 'user1',
            parent_id: null,
          },
          {
            id: '5',
            name: 'research',
            color: '#EF4444',
            usage_count: 10,
            created_at: new Date('2024-01-20').toISOString(),
            user_id: 'user1',
            parent_id: null,
          },
          {
            id: '6',
            name: 'documentation',
            color: '#6366F1',
            usage_count: 4,
            created_at: new Date('2024-02-01').toISOString(),
            user_id: 'user1',
            parent_id: null,
          },
          {
            id: '7',
            name: 'meeting-notes',
            color: '#EC4899',
            usage_count: 7,
            created_at: new Date('2024-02-05').toISOString(),
            user_id: 'user1',
            parent_id: null,
          },
          {
            id: '8',
            name: 'todo',
            color: '#14B8A6',
            usage_count: 20,
            created_at: new Date('2024-02-10').toISOString(),
            user_id: 'user1',
            parent_id: null,
          },
        ],
        TagInputMock = ({
          tags,
          onTagsChange,
          placeholder = 'Add tags...',
          maxTags,
          disabled = !1,
          allowCreate = !0,
          className,
        }) => {
          const [inputValue, setInputValue] = (0,
            react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
            [isOpen, setIsOpen] = (0,
            react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),
            [isCreating, setIsCreating] = (0,
            react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),
            availableTags = mockTags.filter(
              (mockTag) => !tags.find((t) => t.id === mockTag.id)
            ),
            filteredSuggestions = inputValue
              ? availableTags.filter((tag) =>
                  tag.name.toLowerCase().includes(inputValue.toLowerCase())
                )
              : availableTags,
            handleAddTag = (tag) => {
              ;(maxTags && tags.length >= maxTags) ||
                (onTagsChange([...tags, tag]), setInputValue(''), setIsOpen(!1))
            },
            handleRemoveTag = (tagId) => {
              onTagsChange(tags.filter((t) => t.id !== tagId))
            },
            handleCreateTag = async () => {
              if (!inputValue.trim() || !allowCreate) return
              ;(setIsCreating(!0),
                await new Promise((resolve) => setTimeout(resolve, 500)))
              const newTag = {
                id: `new-${Date.now()}`,
                name: inputValue.trim(),
                color: '#6B7280',
                usage_count: 0,
                created_at: new Date().toISOString(),
                user_id: 'user1',
                parent_id: null,
              }
              ;(handleAddTag(newTag), setIsCreating(!1))
            },
            isMaxTagsReached = !!maxTags && tags.length >= maxTags
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            'div',
            {
              className,
              children: (0,
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                className:
                  'flex flex-wrap gap-2 p-3 border rounded-md bg-background',
                children: [
                  tags.map((tag) =>
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                      _components_ui_badge__WEBPACK_IMPORTED_MODULE_4__.E,
                      {
                        variant: 'secondary',
                        className: 'gap-1',
                        style: { borderColor: tag.color },
                        children: [
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            'div',
                            {
                              className: 'w-2 h-2 rounded-full',
                              style: { backgroundColor: tag.color },
                            }
                          ),
                          tag.name,
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            'button',
                            {
                              onClick: () => handleRemoveTag(tag.id),
                              className: 'ml-1 hover:opacity-70',
                              disabled,
                              children: (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                _barrel_optimize_names_Plus_X_lucide_react__WEBPACK_IMPORTED_MODULE_6__.A,
                                { className: 'h-3 w-3' }
                              ),
                            }
                          ),
                        ],
                      },
                      tag.id
                    )
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                    _components_ui_popover__WEBPACK_IMPORTED_MODULE_5__.AM,
                    {
                      open: isOpen && !disabled,
                      onOpenChange: setIsOpen,
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _components_ui_popover__WEBPACK_IMPORTED_MODULE_5__.Wv,
                          {
                            asChild: !0,
                            children: (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              _components_ui_input__WEBPACK_IMPORTED_MODULE_3__.p,
                              {
                                value: inputValue,
                                onChange: (e) => setInputValue(e.target.value),
                                onKeyDown: (e) => {
                                  'Enter' === e.key && inputValue
                                    ? (e.preventDefault(),
                                      filteredSuggestions.length > 0
                                        ? handleAddTag(filteredSuggestions[0])
                                        : allowCreate && handleCreateTag())
                                    : 'Backspace' === e.key &&
                                        !inputValue &&
                                        tags.length > 0
                                      ? handleRemoveTag(
                                          tags[tags.length - 1].id
                                        )
                                      : 'Escape' === e.key &&
                                        (setInputValue(''),
                                        setIsOpen(!1),
                                        e.target.blur())
                                },
                                onFocus: () => setIsOpen(!0),
                                placeholder: isMaxTagsReached
                                  ? `Maximum ${maxTags} tags reached`
                                  : placeholder,
                                disabled: disabled || isMaxTagsReached,
                                className:
                                  'flex-1 min-w-[120px] border-0 shadow-none focus-visible:ring-0 px-0',
                              }
                            ),
                          }
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _components_ui_popover__WEBPACK_IMPORTED_MODULE_5__.hl,
                          {
                            className: 'w-[300px] p-2',
                            align: 'start',
                            children:
                              filteredSuggestions.length > 0
                                ? (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    'div',
                                    {
                                      className: 'space-y-1',
                                      children: filteredSuggestions.map((tag) =>
                                        (0,
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                          'button',
                                          {
                                            onClick: () => handleAddTag(tag),
                                            className:
                                              'flex items-center gap-2 w-full p-2 text-sm rounded hover:bg-accent',
                                            children: [
                                              (0,
                                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                                'div',
                                                {
                                                  className:
                                                    'w-3 h-3 rounded-full',
                                                  style: {
                                                    backgroundColor: tag.color,
                                                  },
                                                }
                                              ),
                                              (0,
                                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                                'span',
                                                {
                                                  className: 'flex-1 text-left',
                                                  children: tag.name,
                                                }
                                              ),
                                              (0,
                                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                                'span',
                                                {
                                                  className:
                                                    'text-xs text-muted-foreground',
                                                  children: [
                                                    tag.usage_count,
                                                    ' notes',
                                                  ],
                                                }
                                              ),
                                            ],
                                          },
                                          tag.id
                                        )
                                      ),
                                    }
                                  )
                                : (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    'div',
                                    {
                                      className: 'text-center py-4',
                                      children:
                                        inputValue && allowCreate
                                          ? (0,
                                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                              'button',
                                              {
                                                onClick: handleCreateTag,
                                                disabled: isCreating,
                                                className:
                                                  'flex items-center gap-2 justify-center w-full p-2 text-sm rounded hover:bg-accent',
                                                children: [
                                                  (0,
                                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                                    _barrel_optimize_names_Plus_X_lucide_react__WEBPACK_IMPORTED_MODULE_7__.A,
                                                    { className: 'h-4 w-4' }
                                                  ),
                                                  (0,
                                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                                    'span',
                                                    {
                                                      children: [
                                                        'Create "',
                                                        inputValue,
                                                        '"',
                                                      ],
                                                    }
                                                  ),
                                                ],
                                              }
                                            )
                                          : (0,
                                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                              'p',
                                              {
                                                className:
                                                  'text-sm text-muted-foreground',
                                                children: 'No tags found',
                                              }
                                            ),
                                    }
                                  ),
                          }
                        ),
                      ],
                    }
                  ),
                ],
              }),
            }
          )
        },
        __WEBPACK_DEFAULT_EXPORT__ = {
          title: 'UI/Forms/TagInput',
          component: TagInputMock,
          parameters: { layout: 'centered' },
          tags: ['autodocs'],
          argTypes: {
            tags: { control: 'object', description: 'Currently selected tags' },
            onTagsChange: {
              action: 'onTagsChange',
              description: 'Callback when tags change',
            },
            placeholder: {
              control: 'text',
              description: 'Placeholder text for the input',
            },
            maxTags: {
              control: 'number',
              description: 'Maximum number of tags allowed',
            },
            disabled: {
              control: 'boolean',
              description: 'Whether the input is disabled',
            },
            allowCreate: {
              control: 'boolean',
              description: 'Whether to allow creating new tags',
            },
            className: {
              control: 'text',
              description: 'Additional CSS classes',
            },
          },
          decorators: [
            (Story) =>
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                className: 'min-w-[400px] p-8',
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story, {}),
              }),
          ],
        },
        TagInputDemo = ({ initialTags = [], ...props }) => {
          const [tags, setTags] = (0,
          react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialTags)
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
            'div',
            {
              className: 'space-y-4',
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  TagInputMock,
                  { tags, onTagsChange: setTags, ...props }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                  'div',
                  {
                    className: 'text-sm text-muted-foreground',
                    children: [
                      'Selected tags:',
                      ' ',
                      tags.length > 0
                        ? tags.map((t) => t.name).join(', ')
                        : 'None',
                    ],
                  }
                ),
              ],
            }
          )
        },
        Default = {
          args: { tags: [], onTagsChange: () => {} },
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              TagInputDemo,
              {}
            ),
        },
        WithSelectedTags = {
          args: { tags: mockTags.slice(0, 3), onTagsChange: () => {} },
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              TagInputDemo,
              { initialTags: [mockTags[0], mockTags[1], mockTags[2]] }
            ),
        },
        CustomPlaceholder = {
          args: {
            tags: [],
            onTagsChange: () => {},
            placeholder: 'Add your tags here...',
          },
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              TagInputDemo,
              { placeholder: 'Type to add tags (e.g., work, personal, ideas)' }
            ),
        },
        MaxTagsLimit = {
          args: {
            tags: mockTags.slice(0, 3),
            onTagsChange: () => {},
            maxTags: 5,
          },
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              TagInputDemo,
              {
                initialTags: [mockTags[0], mockTags[1], mockTags[2]],
                maxTags: 5,
              }
            ),
        },
        Disabled = {
          args: {
            tags: mockTags.slice(0, 2),
            onTagsChange: () => {},
            disabled: !0,
          },
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              TagInputDemo,
              { initialTags: [mockTags[0], mockTags[1]], disabled: !0 }
            ),
        },
        NoCreate = {
          args: { tags: [], onTagsChange: () => {}, allowCreate: !1 },
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              TagInputDemo,
              { allowCreate: !1, placeholder: 'Select from existing tags only' }
            ),
        },
        ColorfulTags = {
          args: { tags: mockTags.slice(0, 6), onTagsChange: () => {} },
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              TagInputDemo,
              { initialTags: mockTags.slice(0, 6) }
            ),
        },
        TypeAndSearch = {
          args: { tags: [], onTagsChange: () => {} },
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              TagInputDemo,
              {}
            ),
          play: async ({ canvasElement }) => {
            const canvas = (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.ux)(
                canvasElement
              ),
              input = canvas.getByPlaceholderText('Add tags...')
            ;(await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.type(
              input,
              'pro'
            ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.fm)(() => {
                ;((0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                  canvas.getByText('project')
                ).toBeInTheDocument(),
                  (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                    canvas.getByText('15 notes')
                  ).toBeInTheDocument())
              }),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.clear(
                input
              ),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.type(
                input,
                'work'
              ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.fm)(() => {
                ;((0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                  canvas.getByText('work')
                ).toBeInTheDocument(),
                  (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                    canvas.getByText('12 notes')
                  ).toBeInTheDocument())
              }))
          },
        },
        SelectFromSuggestions = {
          args: { tags: [], onTagsChange: () => {} },
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              TagInputDemo,
              {}
            ),
          play: async ({ canvasElement }) => {
            const canvas = (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.ux)(
                canvasElement
              ),
              input = canvas.getByPlaceholderText('Add tags...')
            await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.type(
              input,
              'per'
            )
            const suggestion = await canvas.findByRole('button', {
              name: /personal/,
            })
            ;(await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.click(
              suggestion
            ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.fm)(() => {
                ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                  canvas.getByText('Selected tags: personal')
                ).toBeInTheDocument()
              }),
              (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                input
              ).toHaveValue(''))
          },
        },
        CreateNewTag = {
          args: { tags: [], onTagsChange: () => {} },
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              TagInputDemo,
              {}
            ),
          play: async ({ canvasElement }) => {
            const canvas = (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.ux)(
                canvasElement
              ),
              input = canvas.getByPlaceholderText('Add tags...')
            ;(await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.type(
              input,
              'new-feature'
            ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.fm)(() => {
                ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                  canvas.getByText('Create "new-feature"')
                ).toBeInTheDocument()
              }))
            const createButton = canvas.getByRole('button', {
              name: /Create "new-feature"/,
            })
            ;(await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.click(
              createButton
            ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.fm)(() => {
                ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                  canvas.getByText('Selected tags: new-feature')
                ).toBeInTheDocument()
              }))
          },
        },
        KeyboardNavigation = {
          args: { tags: [], onTagsChange: () => {} },
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              TagInputDemo,
              {}
            ),
          play: async ({ canvasElement }) => {
            const canvas = (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.ux)(
                canvasElement
              ),
              input = canvas.getByPlaceholderText('Add tags...')
            ;(await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.type(
              input,
              'work'
            ),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.keyboard(
                '{Enter}'
              ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.fm)(() => {
                ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                  canvas.getByText('Selected tags: work')
                ).toBeInTheDocument()
              }),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.type(
                input,
                'urgent-task'
              ),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.keyboard(
                '{Enter}'
              ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.fm)(() => {
                ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                  canvas.getByText('Selected tags: work, urgent-task')
                ).toBeInTheDocument()
              }),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.keyboard(
                '{Backspace}'
              ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.fm)(() => {
                ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                  canvas.getByText('Selected tags: work')
                ).toBeInTheDocument()
              }))
          },
        },
        RemoveTag = {
          args: { tags: mockTags.slice(0, 3), onTagsChange: () => {} },
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              TagInputDemo,
              { initialTags: [mockTags[0], mockTags[1], mockTags[2]] }
            ),
          play: async ({ canvasElement }) => {
            const canvas = (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.ux)(
                canvasElement
              ),
              personalTag = canvas
                .getByText('personal')
                .closest('[class*="badge"]'),
              removeButton = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_2__.ux)(
                personalTag
              ).getByRole('button')
            ;(await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.click(
              removeButton
            ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.fm)(() => {
                ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                  canvas.getByText('Selected tags: work, project')
                ).toBeInTheDocument()
              }))
          },
        },
        EscapeKey = {
          args: { tags: [], onTagsChange: () => {} },
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              TagInputDemo,
              {}
            ),
          play: async ({ canvasElement }) => {
            const input = (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.ux)(
              canvasElement
            ).getByPlaceholderText('Add tags...')
            ;(await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.type(
              input,
              'test'
            ),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.keyboard(
                '{Escape}'
              ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.fm)(() => {
                ;((0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                  input
                ).toHaveValue(''),
                  (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                    input
                  ).not.toHaveFocus())
              }))
          },
        },
        MaxTagsReached = {
          args: {
            tags: mockTags.slice(0, 5),
            onTagsChange: () => {},
            maxTags: 5,
          },
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              TagInputDemo,
              {
                initialTags: [mockTags[0], mockTags[1], mockTags[2]],
                maxTags: 3,
              }
            ),
          play: async ({ canvasElement }) => {
            const canvas = (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.ux)(
                canvasElement
              ),
              input = canvas.getByPlaceholderText(/Maximum 3 tags reached/)
            ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
              input
            ).toBeDisabled()
            const removeButtons = canvas
              .getAllByRole('button')
              .filter((btn) => {
                var _btn_querySelector
                return null ===
                  (_btn_querySelector = btn.querySelector('svg')) ||
                  void 0 === _btn_querySelector
                  ? void 0
                  : _btn_querySelector.classList.contains('lucide-x')
              })
            ;(await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.click(
              removeButtons[0]
            ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.fm)(() => {
                const enabledInput = canvas.getByPlaceholderText('Add tags...')
                ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                  enabledInput
                ).not.toBeDisabled()
              }))
          },
        },
        ClickOutsideToClose = {
          args: { tags: [], onTagsChange: () => {} },
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              TagInputDemo,
              {}
            ),
          play: async ({ canvasElement }) => {
            const canvas = (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.ux)(
                canvasElement
              ),
              input = canvas.getByPlaceholderText('Add tags...')
            ;(await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.type(
              input,
              'work'
            ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.fm)(() => {
                ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                  canvas.getByText('work')
                ).toBeInTheDocument()
              }),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.click(
                document.body
              ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.fm)(() => {
                const suggestions = canvas.queryByText('12 notes')
                ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                  suggestions
                ).not.toBeInTheDocument()
              }))
          },
        },
        EmptyState = {
          args: { tags: [], onTagsChange: () => {} },
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              TagInputDemo,
              {}
            ),
          play: async ({ canvasElement }) => {
            const canvas = (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.ux)(
                canvasElement
              ),
              input = canvas.getByPlaceholderText('Add tags...')
            ;(await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.type(
              input,
              'xyz123'
            ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.fm)(() => {
                ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                  canvas.getByText('Create "xyz123"')
                ).toBeInTheDocument()
              }))
          },
        },
        NoCreateEmptyState = {
          args: { tags: [], onTagsChange: () => {}, allowCreate: !1 },
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              TagInputDemo,
              { allowCreate: !1 }
            ),
          play: async ({ canvasElement }) => {
            const canvas = (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.ux)(
                canvasElement
              ),
              input = canvas.getByPlaceholderText(
                'Select from existing tags only'
              )
            ;(await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.type(
              input,
              'xyz123'
            ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.fm)(() => {
                ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                  canvas.getByText('No tags found')
                ).toBeInTheDocument()
              }))
          },
        },
        LoadingState = {
          args: { tags: [], onTagsChange: () => {} },
          render: () => {
            const [tags, setTags] = (0,
              react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
              [isLoading, setIsLoading] = (0,
              react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1)
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
              'div',
              {
                className: 'space-y-4',
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    TagInputMock,
                    {
                      tags,
                      onTagsChange: async (newTags) => {
                        ;(setIsLoading(!0),
                          await new Promise((resolve) =>
                            setTimeout(resolve, 1e3)
                          ),
                          setTags(newTags),
                          setIsLoading(!1))
                      },
                      disabled: isLoading,
                    }
                  ),
                  isLoading &&
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      'p',
                      {
                        className: 'text-sm text-muted-foreground',
                        children: 'Loading...',
                      }
                    ),
                ],
              }
            )
          },
        },
        ManyTags = {
          args: { tags: mockTags, onTagsChange: () => {} },
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              TagInputDemo,
              { initialTags: mockTags }
            ),
        },
        LongTagNames = {
          args: { tags: [], onTagsChange: () => {} },
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              TagInputDemo,
              {
                initialTags: [
                  {
                    id: '1',
                    name: 'very-long-tag-name-that-might-wrap',
                    color: '#3B82F6',
                    usage_count: 5,
                    created_at: new Date().toISOString(),
                    user_id: 'user1',
                    parent_id: null,
                  },
                  {
                    id: '2',
                    name: 'another-extremely-long-tag-name-for-testing',
                    color: '#10B981',
                    usage_count: 3,
                    created_at: new Date().toISOString(),
                    user_id: 'user1',
                    parent_id: null,
                  },
                ],
              }
            ),
        },
        MobileResponsive = {
          args: { tags: [mockTags[0], mockTags[1]], onTagsChange: () => {} },
          parameters: { viewport: { defaultViewport: 'mobile1' } },
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              TagInputDemo,
              { initialTags: [mockTags[0], mockTags[1]] }
            ),
        },
        DarkMode = {
          args: {
            tags: [mockTags[0], mockTags[1], mockTags[2]],
            onTagsChange: () => {},
          },
          parameters: { backgrounds: { default: 'dark' } },
          decorators: [
            (Story) =>
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                className: 'dark bg-gray-900 p-8',
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story, {}),
              }),
          ],
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              TagInputDemo,
              { initialTags: [mockTags[0], mockTags[1], mockTags[2]] }
            ),
        },
        __namedExportsOrder = [
          'Default',
          'WithSelectedTags',
          'CustomPlaceholder',
          'MaxTagsLimit',
          'Disabled',
          'NoCreate',
          'ColorfulTags',
          'TypeAndSearch',
          'SelectFromSuggestions',
          'CreateNewTag',
          'KeyboardNavigation',
          'RemoveTag',
          'EscapeKey',
          'MaxTagsReached',
          'ClickOutsideToClose',
          'EmptyState',
          'NoCreateEmptyState',
          'LoadingState',
          'ManyTags',
          'LongTagNames',
          'MobileResponsive',
          'DarkMode',
        ]
      ;((Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              '{\n  args: {\n    tags: [],\n    onTagsChange: () => {}\n  },\n  render: () => <TagInputDemo />\n}',
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (WithSelectedTags.parameters = {
          ...WithSelectedTags.parameters,
          docs: {
            ...WithSelectedTags.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    tags: mockTags.slice(0, 3),\n    onTagsChange: () => {}\n  },\n  render: () => <TagInputDemo initialTags={[mockTags[0], mockTags[1], mockTags[2]]} />\n}',
              ...WithSelectedTags.parameters?.docs?.source,
            },
          },
        }),
        (CustomPlaceholder.parameters = {
          ...CustomPlaceholder.parameters,
          docs: {
            ...CustomPlaceholder.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    tags: [],\n    onTagsChange: () => {},\n    placeholder: 'Add your tags here...'\n  },\n  render: () => <TagInputDemo placeholder='Type to add tags (e.g., work, personal, ideas)' />\n}",
              ...CustomPlaceholder.parameters?.docs?.source,
            },
          },
        }),
        (MaxTagsLimit.parameters = {
          ...MaxTagsLimit.parameters,
          docs: {
            ...MaxTagsLimit.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    tags: mockTags.slice(0, 3),\n    onTagsChange: () => {},\n    maxTags: 5\n  },\n  render: () => <TagInputDemo initialTags={[mockTags[0], mockTags[1], mockTags[2]]} maxTags={5} />\n}',
              ...MaxTagsLimit.parameters?.docs?.source,
            },
          },
        }),
        (Disabled.parameters = {
          ...Disabled.parameters,
          docs: {
            ...Disabled.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    tags: mockTags.slice(0, 2),\n    onTagsChange: () => {},\n    disabled: true\n  },\n  render: () => <TagInputDemo initialTags={[mockTags[0], mockTags[1]]} disabled />\n}',
              ...Disabled.parameters?.docs?.source,
            },
          },
        }),
        (NoCreate.parameters = {
          ...NoCreate.parameters,
          docs: {
            ...NoCreate.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    tags: [],\n    onTagsChange: () => {},\n    allowCreate: false\n  },\n  render: () => <TagInputDemo allowCreate={false} placeholder='Select from existing tags only' />\n}",
              ...NoCreate.parameters?.docs?.source,
            },
          },
        }),
        (ColorfulTags.parameters = {
          ...ColorfulTags.parameters,
          docs: {
            ...ColorfulTags.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    tags: mockTags.slice(0, 6),\n    onTagsChange: () => {}\n  },\n  render: () => <TagInputDemo initialTags={mockTags.slice(0, 6)} />\n}',
              ...ColorfulTags.parameters?.docs?.source,
            },
          },
        }),
        (TypeAndSearch.parameters = {
          ...TypeAndSearch.parameters,
          docs: {
            ...TypeAndSearch.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    tags: [],\n    onTagsChange: () => {}\n  },\n  render: () => <TagInputDemo />,\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Find input\n    const input = canvas.getByPlaceholderText('Add tags...');\n\n    // Type to search\n    await userEvent.type(input, 'pro');\n\n    // Should show suggestions\n    await waitFor(() => {\n      expect(canvas.getByText('project')).toBeInTheDocument();\n      expect(canvas.getByText('15 notes')).toBeInTheDocument();\n    });\n\n    // Clear and search again\n    await userEvent.clear(input);\n    await userEvent.type(input, 'work');\n    await waitFor(() => {\n      expect(canvas.getByText('work')).toBeInTheDocument();\n      expect(canvas.getByText('12 notes')).toBeInTheDocument();\n    });\n  }\n}",
              ...TypeAndSearch.parameters?.docs?.source,
            },
          },
        }),
        (SelectFromSuggestions.parameters = {
          ...SelectFromSuggestions.parameters,
          docs: {
            ...SelectFromSuggestions.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    tags: [],\n    onTagsChange: () => {}\n  },\n  render: () => <TagInputDemo />,\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const input = canvas.getByPlaceholderText('Add tags...');\n\n    // Type to get suggestions\n    await userEvent.type(input, 'per');\n\n    // Click suggestion\n    const suggestion = await canvas.findByRole('button', {\n      name: /personal/\n    });\n    await userEvent.click(suggestion);\n\n    // Tag should be added\n    await waitFor(() => {\n      expect(canvas.getByText('Selected tags: personal')).toBeInTheDocument();\n    });\n\n    // Input should be cleared\n    expect(input).toHaveValue('');\n  }\n}",
              ...SelectFromSuggestions.parameters?.docs?.source,
            },
          },
        }),
        (CreateNewTag.parameters = {
          ...CreateNewTag.parameters,
          docs: {
            ...CreateNewTag.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    tags: [],\n    onTagsChange: () => {}\n  },\n  render: () => <TagInputDemo />,\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const input = canvas.getByPlaceholderText('Add tags...');\n\n    // Type new tag name\n    await userEvent.type(input, 'new-feature');\n\n    // Should show create option\n    await waitFor(() => {\n      expect(canvas.getByText('Create \"new-feature\"')).toBeInTheDocument();\n    });\n\n    // Click create\n    const createButton = canvas.getByRole('button', {\n      name: /Create \"new-feature\"/\n    });\n    await userEvent.click(createButton);\n\n    // Should create and add tag\n    await waitFor(() => {\n      expect(canvas.getByText('Selected tags: new-feature')).toBeInTheDocument();\n    });\n  }\n}",
              ...CreateNewTag.parameters?.docs?.source,
            },
          },
        }),
        (KeyboardNavigation.parameters = {
          ...KeyboardNavigation.parameters,
          docs: {
            ...KeyboardNavigation.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    tags: [],\n    onTagsChange: () => {}\n  },\n  render: () => <TagInputDemo />,\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const input = canvas.getByPlaceholderText('Add tags...');\n\n    // Type and press Enter to add\n    await userEvent.type(input, 'work');\n    await userEvent.keyboard('{Enter}');\n    await waitFor(() => {\n      expect(canvas.getByText('Selected tags: work')).toBeInTheDocument();\n    });\n\n    // Type another tag\n    await userEvent.type(input, 'urgent-task');\n    await userEvent.keyboard('{Enter}');\n    await waitFor(() => {\n      expect(canvas.getByText('Selected tags: work, urgent-task')).toBeInTheDocument();\n    });\n\n    // Backspace to remove last tag\n    await userEvent.keyboard('{Backspace}');\n    await waitFor(() => {\n      expect(canvas.getByText('Selected tags: work')).toBeInTheDocument();\n    });\n  }\n}",
              ...KeyboardNavigation.parameters?.docs?.source,
            },
          },
        }),
        (RemoveTag.parameters = {
          ...RemoveTag.parameters,
          docs: {
            ...RemoveTag.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    tags: mockTags.slice(0, 3),\n    onTagsChange: () => {}\n  },\n  render: () => <TagInputDemo initialTags={[mockTags[0], mockTags[1], mockTags[2]]} />,\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Find remove button for 'personal' tag\n    const personalTag = canvas.getByText('personal').closest('[class*=\"badge\"]') as HTMLElement;\n    const removeButton = within(personalTag).getByRole('button');\n    await userEvent.click(removeButton);\n\n    // Tag should be removed\n    await waitFor(() => {\n      expect(canvas.getByText('Selected tags: work, project')).toBeInTheDocument();\n    });\n  }\n}",
              ...RemoveTag.parameters?.docs?.source,
            },
          },
        }),
        (EscapeKey.parameters = {
          ...EscapeKey.parameters,
          docs: {
            ...EscapeKey.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    tags: [],\n    onTagsChange: () => {}\n  },\n  render: () => <TagInputDemo />,\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const input = canvas.getByPlaceholderText('Add tags...');\n\n    // Type something\n    await userEvent.type(input, 'test');\n\n    // Press Escape\n    await userEvent.keyboard('{Escape}');\n\n    // Input should be cleared and blurred\n    await waitFor(() => {\n      expect(input).toHaveValue('');\n      expect(input).not.toHaveFocus();\n    });\n  }\n}",
              ...EscapeKey.parameters?.docs?.source,
            },
          },
        }),
        (MaxTagsReached.parameters = {
          ...MaxTagsReached.parameters,
          docs: {
            ...MaxTagsReached.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    tags: mockTags.slice(0, 5),\n    onTagsChange: () => {},\n    maxTags: 5\n  },\n  render: () => <TagInputDemo initialTags={[mockTags[0], mockTags[1], mockTags[2]]} maxTags={3} />,\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Input should be disabled\n    const input = canvas.getByPlaceholderText(/Maximum 3 tags reached/);\n    expect(input).toBeDisabled();\n\n    // Remove a tag\n    const removeButtons = canvas.getAllByRole('button').filter(btn => btn.querySelector('svg')?.classList.contains('lucide-x'));\n    await userEvent.click(removeButtons[0]);\n\n    // Input should be enabled again\n    await waitFor(() => {\n      const enabledInput = canvas.getByPlaceholderText('Add tags...');\n      expect(enabledInput).not.toBeDisabled();\n    });\n  }\n}",
              ...MaxTagsReached.parameters?.docs?.source,
            },
          },
        }),
        (ClickOutsideToClose.parameters = {
          ...ClickOutsideToClose.parameters,
          docs: {
            ...ClickOutsideToClose.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    tags: [],\n    onTagsChange: () => {}\n  },\n  render: () => <TagInputDemo />,\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const input = canvas.getByPlaceholderText('Add tags...');\n\n    // Type to show suggestions\n    await userEvent.type(input, 'work');\n\n    // Verify suggestions are visible\n    await waitFor(() => {\n      expect(canvas.getByText('work')).toBeInTheDocument();\n    });\n\n    // Click outside\n    await userEvent.click(document.body);\n\n    // Suggestions should close\n    await waitFor(() => {\n      const suggestions = canvas.queryByText('12 notes');\n      expect(suggestions).not.toBeInTheDocument();\n    });\n  }\n}",
              ...ClickOutsideToClose.parameters?.docs?.source,
            },
          },
        }),
        (EmptyState.parameters = {
          ...EmptyState.parameters,
          docs: {
            ...EmptyState.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    tags: [],\n    onTagsChange: () => {}\n  },\n  render: () => <TagInputDemo />,\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const input = canvas.getByPlaceholderText('Add tags...');\n\n    // Type something that doesn't match\n    await userEvent.type(input, 'xyz123');\n\n    // Should show \"No tags found\" or create option\n    await waitFor(() => {\n      expect(canvas.getByText('Create \"xyz123\"')).toBeInTheDocument();\n    });\n  }\n}",
              ...EmptyState.parameters?.docs?.source,
            },
          },
        }),
        (NoCreateEmptyState.parameters = {
          ...NoCreateEmptyState.parameters,
          docs: {
            ...NoCreateEmptyState.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    tags: [],\n    onTagsChange: () => {},\n    allowCreate: false\n  },\n  render: () => <TagInputDemo allowCreate={false} />,\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const input = canvas.getByPlaceholderText('Select from existing tags only');\n\n    // Type something that doesn't match\n    await userEvent.type(input, 'xyz123');\n\n    // Should show \"No tags found\"\n    await waitFor(() => {\n      expect(canvas.getByText('No tags found')).toBeInTheDocument();\n    });\n  }\n}",
              ...NoCreateEmptyState.parameters?.docs?.source,
            },
          },
        }),
        (LoadingState.parameters = {
          ...LoadingState.parameters,
          docs: {
            ...LoadingState.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    tags: [],\n    onTagsChange: () => {}\n  },\n  render: () => {\n    const [tags, setTags] = useState<EnhancedTag[]>([]);\n    const [isLoading, setIsLoading] = useState(false);\n    const handleTagsChange = async (newTags: EnhancedTag[]) => {\n      setIsLoading(true);\n      await new Promise(resolve => setTimeout(resolve, 1000));\n      setTags(newTags);\n      setIsLoading(false);\n    };\n    return <div className='space-y-4'>\n        <TagInputMock tags={tags} onTagsChange={handleTagsChange} disabled={isLoading} />\n        {isLoading && <p className='text-sm text-muted-foreground'>Loading...</p>}\n      </div>;\n  }\n}",
              ...LoadingState.parameters?.docs?.source,
            },
          },
        }),
        (ManyTags.parameters = {
          ...ManyTags.parameters,
          docs: {
            ...ManyTags.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    tags: mockTags,\n    onTagsChange: () => {}\n  },\n  render: () => <TagInputDemo initialTags={mockTags} />\n}',
              ...ManyTags.parameters?.docs?.source,
            },
          },
        }),
        (LongTagNames.parameters = {
          ...LongTagNames.parameters,
          docs: {
            ...LongTagNames.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    tags: [],\n    onTagsChange: () => {}\n  },\n  render: () => <TagInputDemo initialTags={[{\n    id: '1',\n    name: 'very-long-tag-name-that-might-wrap',\n    color: '#3B82F6',\n    usage_count: 5,\n    created_at: new Date().toISOString(),\n    user_id: 'user1',\n    parent_id: null\n  }, {\n    id: '2',\n    name: 'another-extremely-long-tag-name-for-testing',\n    color: '#10B981',\n    usage_count: 3,\n    created_at: new Date().toISOString(),\n    user_id: 'user1',\n    parent_id: null\n  }]} />\n}",
              ...LongTagNames.parameters?.docs?.source,
            },
          },
        }),
        (MobileResponsive.parameters = {
          ...MobileResponsive.parameters,
          docs: {
            ...MobileResponsive.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    tags: [mockTags[0], mockTags[1]],\n    onTagsChange: () => {}\n  },\n  parameters: {\n    viewport: {\n      defaultViewport: 'mobile1'\n    }\n  },\n  render: () => <TagInputDemo initialTags={[mockTags[0], mockTags[1]]} />\n}",
              ...MobileResponsive.parameters?.docs?.source,
            },
          },
        }),
        (DarkMode.parameters = {
          ...DarkMode.parameters,
          docs: {
            ...DarkMode.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    tags: [mockTags[0], mockTags[1], mockTags[2]],\n    onTagsChange: () => {}\n  },\n  parameters: {\n    backgrounds: {\n      default: 'dark'\n    }\n  },\n  decorators: [Story => <div className='dark bg-gray-900 p-8'>\n        <Story />\n      </div>],\n  render: () => <TagInputDemo initialTags={[mockTags[0], mockTags[1], mockTags[2]]} />\n}",
              ...DarkMode.parameters?.docs?.source,
            },
          },
        }))
    },
  },
])
