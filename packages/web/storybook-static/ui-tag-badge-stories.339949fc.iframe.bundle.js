/*! For license information please see ui-tag-badge-stories.339949fc.iframe.bundle.js.LICENSE.txt */
'use strict'
;(self.webpackChunk_notable_web = self.webpackChunk_notable_web || []).push([
  [5576],
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
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          A: () => createLucideIcon,
        })
        var react = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
        )
        const mergeClasses = (...classes) =>
          classes
            .filter(
              (className, index, array) =>
                Boolean(className) &&
                '' !== className.trim() &&
                array.indexOf(className) === index
            )
            .join(' ')
            .trim()
        var defaultAttributes = {
          xmlns: 'http://www.w3.org/2000/svg',
          width: 24,
          height: 24,
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: 'currentColor',
          strokeWidth: 2,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
        }
        const Icon = (0, react.forwardRef)(
            (
              {
                color = 'currentColor',
                size = 24,
                strokeWidth = 2,
                absoluteStrokeWidth,
                className = '',
                children,
                iconNode,
                ...rest
              },
              ref
            ) =>
              (0, react.createElement)(
                'svg',
                {
                  ref,
                  ...defaultAttributes,
                  width: size,
                  height: size,
                  stroke: color,
                  strokeWidth: absoluteStrokeWidth
                    ? (24 * Number(strokeWidth)) / Number(size)
                    : strokeWidth,
                  className: mergeClasses('lucide', className),
                  ...rest,
                },
                [
                  ...iconNode.map(([tag, attrs]) =>
                    (0, react.createElement)(tag, attrs)
                  ),
                  ...(Array.isArray(children) ? children : [children]),
                ]
              )
          ),
          createLucideIcon = (iconName, iconNode) => {
            const Component = (0, react.forwardRef)(
              ({ className, ...props }, ref) => {
                return (0, react.createElement)(Icon, {
                  ref,
                  iconNode,
                  className: mergeClasses(
                    `lucide-${((string = iconName), string.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase())}`,
                    className
                  ),
                  ...props,
                })
                var string
              }
            )
            return ((Component.displayName = `${iconName}`), Component)
          }
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/hash.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Hash })
        const Hash = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Hash', [
          ['line', { x1: '4', x2: '20', y1: '9', y2: '9', key: '4lhtct' }],
          ['line', { x1: '4', x2: '20', y1: '15', y2: '15', key: 'vyu0kd' }],
          ['line', { x1: '10', x2: '8', y1: '3', y2: '21', key: '1ggp8o' }],
          ['line', { x1: '16', x2: '14', y1: '3', y2: '21', key: 'weycgp' }],
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
    './components/ui/tag-badge.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      ;(__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Clickable: () => Clickable,
          CustomColors: () => CustomColors,
          Default: () => Default,
          InteractiveExample: () => InteractiveExample,
          Removable: () => Removable,
          Sizes: () => Sizes,
          TagListClickable: () => TagListClickable,
          TagListDefault: () => TagListDefault,
          TagListEmpty: () => TagListEmpty,
          TagListMaxTags: () => TagListMaxTags,
          TagListRemovable: () => TagListRemovable,
          TagListSizes: () => TagListSizes,
          TagListVertical: () => TagListVertical,
          Variants: () => Variants,
          WithoutIcon: () => WithoutIcon,
          WithoutUsageCount: () => WithoutUsageCount,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => tag_badge_stories,
        }))
      var jsx_runtime = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        react = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
        ),
        hash = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/hash.js'
        ),
        x = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/x.js'
        ),
        badge = __webpack_require__('./components/ui/badge.tsx'),
        utils = __webpack_require__('./lib/utils.ts')
      function cov_y0p3d5yub() {
        var path =
            '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/tag-badge.tsx',
          global = new Function('return this')(),
          gcv = '__coverage__',
          coverageData = {
            path: '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/tag-badge.tsx',
            statementMap: {
              0: {
                start: { line: 7, column: 17 },
                end: { line: 65, column: 1 },
              },
              1: {
                start: { line: 8, column: 24 },
                end: { line: 12, column: 5 },
              },
              2: {
                start: { line: 13, column: 22 },
                end: { line: 17, column: 5 },
              },
              3: {
                start: { line: 18, column: 24 },
                end: { line: 23, column: 5 },
              },
              4: {
                start: { line: 19, column: 8 },
                end: { line: 19, column: 28 },
              },
              5: {
                start: { line: 20, column: 8 },
                end: { line: 22, column: 9 },
              },
              6: {
                start: { line: 21, column: 12 },
                end: { line: 21, column: 25 },
              },
              7: {
                start: { line: 24, column: 25 },
                end: { line: 29, column: 5 },
              },
              8: {
                start: { line: 25, column: 8 },
                end: { line: 25, column: 28 },
              },
              9: {
                start: { line: 26, column: 8 },
                end: { line: 28, column: 9 },
              },
              10: {
                start: { line: 27, column: 12 },
                end: { line: 27, column: 26 },
              },
              11: {
                start: { line: 30, column: 4 },
                end: { line: 64, column: 7 },
              },
              12: {
                start: { line: 66, column: 16 },
                end: { line: 94, column: 1 },
              },
              13: {
                start: { line: 67, column: 24 },
                end: { line: 67, column: 63 },
              },
              14: {
                start: { line: 68, column: 24 },
                end: { line: 68, column: 84 },
              },
              15: {
                start: { line: 69, column: 4 },
                end: { line: 71, column: 5 },
              },
              16: {
                start: { line: 70, column: 8 },
                end: { line: 70, column: 20 },
              },
              17: {
                start: { line: 72, column: 4 },
                end: { line: 93, column: 7 },
              },
              18: {
                start: { line: 75, column: 49 },
                end: { line: 83, column: 26 },
              },
              19: {
                start: { line: 96, column: 32 },
                end: { line: 107, column: 1 },
              },
              20: {
                start: { line: 98, column: 16 },
                end: { line: 98, column: 48 },
              },
              21: {
                start: { line: 100, column: 14 },
                end: { line: 100, column: 44 },
              },
              22: {
                start: { line: 101, column: 14 },
                end: { line: 101, column: 44 },
              },
              23: {
                start: { line: 102, column: 14 },
                end: { line: 102, column: 44 },
              },
              24: {
                start: { line: 104, column: 22 },
                end: { line: 104, column: 63 },
              },
              25: {
                start: { line: 106, column: 4 },
                end: { line: 106, column: 51 },
              },
              26: {
                start: { line: 108, column: 20 },
                end: { line: 112, column: 1 },
              },
              27: {
                start: { line: 114, column: 0 },
                end: { line: 267, column: 2 },
              },
              28: {
                start: { line: 268, column: 0 },
                end: { line: 426, column: 2 },
              },
            },
            fnMap: {
              0: {
                name: '(anonymous_0)',
                decl: {
                  start: { line: 7, column: 17 },
                  end: { line: 7, column: 18 },
                },
                loc: {
                  start: { line: 7, column: 149 },
                  end: { line: 65, column: 1 },
                },
                line: 7,
              },
              1: {
                name: '(anonymous_1)',
                decl: {
                  start: { line: 18, column: 24 },
                  end: { line: 18, column: 25 },
                },
                loc: {
                  start: { line: 18, column: 29 },
                  end: { line: 23, column: 5 },
                },
                line: 18,
              },
              2: {
                name: '(anonymous_2)',
                decl: {
                  start: { line: 24, column: 25 },
                  end: { line: 24, column: 26 },
                },
                loc: {
                  start: { line: 24, column: 30 },
                  end: { line: 29, column: 5 },
                },
                line: 24,
              },
              3: {
                name: '(anonymous_3)',
                decl: {
                  start: { line: 66, column: 16 },
                  end: { line: 66, column: 17 },
                },
                loc: {
                  start: { line: 66, column: 167 },
                  end: { line: 94, column: 1 },
                },
                line: 66,
              },
              4: {
                name: '(anonymous_4)',
                decl: {
                  start: { line: 75, column: 28 },
                  end: { line: 75, column: 29 },
                },
                loc: {
                  start: { line: 75, column: 49 },
                  end: { line: 83, column: 26 },
                },
                line: 75,
              },
              5: {
                name: '(anonymous_5)',
                decl: {
                  start: { line: 96, column: 32 },
                  end: { line: 96, column: 33 },
                },
                loc: {
                  start: { line: 96, column: 51 },
                  end: { line: 107, column: 1 },
                },
                line: 96,
              },
            },
            branchMap: {
              0: {
                loc: {
                  start: { line: 7, column: 25 },
                  end: { line: 7, column: 36 },
                },
                type: 'default-arg',
                locations: [
                  {
                    start: { line: 7, column: 32 },
                    end: { line: 7, column: 36 },
                  },
                ],
                line: 7,
              },
              1: {
                loc: {
                  start: { line: 7, column: 38 },
                  end: { line: 7, column: 55 },
                },
                type: 'default-arg',
                locations: [
                  {
                    start: { line: 7, column: 50 },
                    end: { line: 7, column: 55 },
                  },
                ],
                line: 7,
              },
              2: {
                loc: {
                  start: { line: 7, column: 57 },
                  end: { line: 7, column: 74 },
                },
                type: 'default-arg',
                locations: [
                  {
                    start: { line: 7, column: 69 },
                    end: { line: 7, column: 74 },
                  },
                ],
                line: 7,
              },
              3: {
                loc: {
                  start: { line: 7, column: 76 },
                  end: { line: 7, column: 91 },
                },
                type: 'default-arg',
                locations: [
                  {
                    start: { line: 7, column: 87 },
                    end: { line: 7, column: 91 },
                  },
                ],
                line: 7,
              },
              4: {
                loc: {
                  start: { line: 7, column: 123 },
                  end: { line: 7, column: 144 },
                },
                type: 'default-arg',
                locations: [
                  {
                    start: { line: 7, column: 133 },
                    end: { line: 7, column: 144 },
                  },
                ],
                line: 7,
              },
              5: {
                loc: {
                  start: { line: 20, column: 8 },
                  end: { line: 22, column: 9 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 20, column: 8 },
                    end: { line: 22, column: 9 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 20,
              },
              6: {
                loc: {
                  start: { line: 20, column: 12 },
                  end: { line: 20, column: 32 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 20, column: 12 },
                    end: { line: 20, column: 21 },
                  },
                  {
                    start: { line: 20, column: 25 },
                    end: { line: 20, column: 32 },
                  },
                ],
                line: 20,
              },
              7: {
                loc: {
                  start: { line: 26, column: 8 },
                  end: { line: 28, column: 9 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 26, column: 8 },
                    end: { line: 28, column: 9 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 26,
              },
              8: {
                loc: {
                  start: { line: 32, column: 99 },
                  end: { line: 32, column: 145 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 32, column: 99 },
                    end: { line: 32, column: 108 },
                  },
                  {
                    start: { line: 32, column: 112 },
                    end: { line: 32, column: 145 },
                  },
                ],
                line: 32,
              },
              9: {
                loc: {
                  start: { line: 32, column: 147 },
                  end: { line: 32, column: 177 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 32, column: 147 },
                    end: { line: 32, column: 157 },
                  },
                  {
                    start: { line: 32, column: 161 },
                    end: { line: 32, column: 177 },
                  },
                ],
                line: 32,
              },
              10: {
                loc: {
                  start: { line: 32, column: 179 },
                  end: { line: 32, column: 198 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 32, column: 179 },
                    end: { line: 32, column: 188 },
                  },
                  {
                    start: { line: 32, column: 192 },
                    end: { line: 32, column: 198 },
                  },
                ],
                line: 32,
              },
              11: {
                loc: {
                  start: { line: 34, column: 29 },
                  end: { line: 34, column: 69 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 34, column: 41 },
                    end: { line: 34, column: 57 },
                  },
                  {
                    start: { line: 34, column: 60 },
                    end: { line: 34, column: 69 },
                  },
                ],
                line: 34,
              },
              12: {
                loc: {
                  start: { line: 35, column: 25 },
                  end: { line: 35, column: 47 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 35, column: 25 },
                    end: { line: 35, column: 34 },
                  },
                  {
                    start: { line: 35, column: 38 },
                    end: { line: 35, column: 47 },
                  },
                ],
                line: 35,
              },
              13: {
                loc: {
                  start: { line: 36, column: 19 },
                  end: { line: 36, column: 41 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 36, column: 19 },
                    end: { line: 36, column: 28 },
                  },
                  {
                    start: { line: 36, column: 32 },
                    end: { line: 36, column: 41 },
                  },
                ],
                line: 36,
              },
              14: {
                loc: {
                  start: { line: 40, column: 12 },
                  end: { line: 42, column: 14 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 40, column: 12 },
                    end: { line: 40, column: 20 },
                  },
                  {
                    start: { line: 40, column: 38 },
                    end: { line: 42, column: 14 },
                  },
                ],
                line: 40,
              },
              15: {
                loc: {
                  start: { line: 47, column: 12 },
                  end: { line: 54, column: 14 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 47, column: 12 },
                    end: { line: 47, column: 41 },
                  },
                  {
                    start: { line: 47, column: 45 },
                    end: { line: 47, column: 64 },
                  },
                  {
                    start: { line: 47, column: 82 },
                    end: { line: 54, column: 14 },
                  },
                ],
                line: 47,
              },
              16: {
                loc: {
                  start: { line: 55, column: 12 },
                  end: { line: 62, column: 14 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 55, column: 12 },
                    end: { line: 55, column: 21 },
                  },
                  {
                    start: { line: 55, column: 39 },
                    end: { line: 62, column: 14 },
                  },
                ],
                line: 55,
              },
              17: {
                loc: {
                  start: { line: 57, column: 146 },
                  end: { line: 57, column: 170 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 57, column: 146 },
                    end: { line: 57, column: 159 },
                  },
                  {
                    start: { line: 57, column: 163 },
                    end: { line: 57, column: 170 },
                  },
                ],
                line: 57,
              },
              18: {
                loc: {
                  start: { line: 57, column: 172 },
                  end: { line: 57, column: 196 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 57, column: 172 },
                    end: { line: 57, column: 185 },
                  },
                  {
                    start: { line: 57, column: 189 },
                    end: { line: 57, column: 196 },
                  },
                ],
                line: 57,
              },
              19: {
                loc: {
                  start: { line: 57, column: 198 },
                  end: { line: 57, column: 220 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 57, column: 198 },
                    end: { line: 57, column: 211 },
                  },
                  {
                    start: { line: 57, column: 215 },
                    end: { line: 57, column: 220 },
                  },
                ],
                line: 57,
              },
              20: {
                loc: {
                  start: { line: 66, column: 25 },
                  end: { line: 66, column: 36 },
                },
                type: 'default-arg',
                locations: [
                  {
                    start: { line: 66, column: 32 },
                    end: { line: 66, column: 36 },
                  },
                ],
                line: 66,
              },
              21: {
                loc: {
                  start: { line: 66, column: 38 },
                  end: { line: 66, column: 55 },
                },
                type: 'default-arg',
                locations: [
                  {
                    start: { line: 66, column: 50 },
                    end: { line: 66, column: 55 },
                  },
                ],
                line: 66,
              },
              22: {
                loc: {
                  start: { line: 66, column: 57 },
                  end: { line: 66, column: 74 },
                },
                type: 'default-arg',
                locations: [
                  {
                    start: { line: 66, column: 69 },
                    end: { line: 66, column: 74 },
                  },
                ],
                line: 66,
              },
              23: {
                loc: {
                  start: { line: 66, column: 76 },
                  end: { line: 66, column: 91 },
                },
                type: 'default-arg',
                locations: [
                  {
                    start: { line: 66, column: 87 },
                    end: { line: 66, column: 91 },
                  },
                ],
                line: 66,
              },
              24: {
                loc: {
                  start: { line: 66, column: 102 },
                  end: { line: 66, column: 126 },
                },
                type: 'default-arg',
                locations: [
                  {
                    start: { line: 66, column: 114 },
                    end: { line: 66, column: 126 },
                  },
                ],
                line: 66,
              },
              25: {
                loc: {
                  start: { line: 67, column: 24 },
                  end: { line: 67, column: 63 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 67, column: 34 },
                    end: { line: 67, column: 56 },
                  },
                  {
                    start: { line: 67, column: 59 },
                    end: { line: 67, column: 63 },
                  },
                ],
                line: 67,
              },
              26: {
                loc: {
                  start: { line: 68, column: 24 },
                  end: { line: 68, column: 84 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 68, column: 59 },
                    end: { line: 68, column: 80 },
                  },
                  {
                    start: { line: 68, column: 83 },
                    end: { line: 68, column: 84 },
                  },
                ],
                line: 68,
              },
              27: {
                loc: {
                  start: { line: 68, column: 24 },
                  end: { line: 68, column: 56 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 68, column: 24 },
                    end: { line: 68, column: 31 },
                  },
                  {
                    start: { line: 68, column: 35 },
                    end: { line: 68, column: 56 },
                  },
                ],
                line: 68,
              },
              28: {
                loc: {
                  start: { line: 69, column: 4 },
                  end: { line: 71, column: 5 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 69, column: 4 },
                    end: { line: 71, column: 5 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 69,
              },
              29: {
                loc: {
                  start: { line: 73, column: 59 },
                  end: { line: 73, column: 109 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 73, column: 59 },
                    end: { line: 73, column: 83 },
                  },
                  {
                    start: { line: 73, column: 87 },
                    end: { line: 73, column: 109 },
                  },
                ],
                line: 73,
              },
              30: {
                loc: {
                  start: { line: 84, column: 12 },
                  end: { line: 91, column: 14 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 84, column: 12 },
                    end: { line: 84, column: 27 },
                  },
                  {
                    start: { line: 84, column: 45 },
                    end: { line: 91, column: 14 },
                  },
                ],
                line: 84,
              },
              31: {
                loc: {
                  start: { line: 106, column: 11 },
                  end: { line: 106, column: 50 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 106, column: 29 },
                    end: { line: 106, column: 38 },
                  },
                  {
                    start: { line: 106, column: 41 },
                    end: { line: 106, column: 50 },
                  },
                ],
                line: 106,
              },
            },
            s: {
              0: 0,
              1: 0,
              2: 0,
              3: 0,
              4: 0,
              5: 0,
              6: 0,
              7: 0,
              8: 0,
              9: 0,
              10: 0,
              11: 0,
              12: 0,
              13: 0,
              14: 0,
              15: 0,
              16: 0,
              17: 0,
              18: 0,
              19: 0,
              20: 0,
              21: 0,
              22: 0,
              23: 0,
              24: 0,
              25: 0,
              26: 0,
              27: 0,
              28: 0,
            },
            f: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
            b: {
              0: [0],
              1: [0],
              2: [0],
              3: [0],
              4: [0],
              5: [0, 0],
              6: [0, 0],
              7: [0, 0],
              8: [0, 0],
              9: [0, 0],
              10: [0, 0],
              11: [0, 0],
              12: [0, 0],
              13: [0, 0],
              14: [0, 0],
              15: [0, 0, 0],
              16: [0, 0],
              17: [0, 0],
              18: [0, 0],
              19: [0, 0],
              20: [0],
              21: [0],
              22: [0],
              23: [0],
              24: [0],
              25: [0, 0],
              26: [0, 0],
              27: [0, 0],
              28: [0, 0],
              29: [0, 0],
              30: [0, 0],
              31: [0, 0],
            },
            inputSourceMap: {
              version: 3,
              sources: [
                '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/tag-badge.tsx',
              ],
              sourcesContent: [
                "'use client'\n\nimport * as React from 'react'\nimport { Hash, X } from 'lucide-react'\nimport { Badge } from '@/components/ui/badge'\nimport { cn } from '@/lib/utils'\nimport type { EnhancedTag } from '@/types/tags'\n\nexport interface TagBadgeProps {\n  /** The tag to display */\n  tag: EnhancedTag\n  /** Size variant */\n  size?: 'sm' | 'md' | 'lg'\n  /** Whether the tag is clickable */\n  clickable?: boolean\n  /** Whether to show remove button */\n  removable?: boolean\n  /** Whether to show tag icon */\n  showIcon?: boolean\n  /** Callback when tag is clicked */\n  onClick?: (tag: EnhancedTag) => void\n  /** Callback when remove button is clicked */\n  onRemove?: (tag: EnhancedTag) => void\n  /** Additional CSS classes */\n  className?: string\n  /** Custom badge variant */\n  variant?: 'default' | 'secondary' | 'outline' | 'destructive'\n}\n\nconst TagBadge: React.FC<TagBadgeProps> = ({\n  tag,\n  size = 'md',\n  clickable = false,\n  removable = false,\n  showIcon = true,\n  onClick,\n  onRemove,\n  className,\n  variant = 'secondary',\n}) => {\n  const sizeClasses = {\n    sm: 'text-xs px-1.5 py-0.5 gap-1',\n    md: 'text-xs px-2 py-1 gap-1',\n    lg: 'text-sm px-2.5 py-1.5 gap-1.5',\n  }\n\n  const iconSizes = {\n    sm: 'h-2.5 w-2.5',\n    md: 'h-3 w-3',\n    lg: 'h-3.5 w-3.5',\n  }\n\n  const handleClick = (e: React.MouseEvent) => {\n    e.stopPropagation()\n    if (clickable && onClick) {\n      onClick(tag)\n    }\n  }\n\n  const handleRemove = (e: React.MouseEvent) => {\n    e.stopPropagation()\n    if (onRemove) {\n      onRemove(tag)\n    }\n  }\n\n  return (\n    <Badge\n      variant={variant}\n      className={cn(\n        'inline-flex items-center font-medium transition-colors',\n        sizeClasses[size],\n        clickable && 'cursor-pointer hover:opacity-80',\n        !clickable && 'cursor-default',\n        removable && 'pr-1',\n        className\n      )}\n      style={{\n        backgroundColor: tag.color ? `${tag.color}20` : undefined,\n        borderColor: tag.color || undefined,\n        color: tag.color || undefined,\n      }}\n      onClick={handleClick}\n    >\n      {showIcon && <Hash className={iconSizes[size]} />}\n      <span className='truncate'>{tag.name}</span>\n      {tag.usage_count !== undefined && tag.usage_count > 0 && (\n        <span className='ml-1 text-xs opacity-60'>({tag.usage_count})</span>\n      )}\n      {removable && (\n        <button\n          onClick={handleRemove}\n          className={cn(\n            'ml-1 rounded-full p-0.5 hover:bg-black/10 focus:outline-none focus:ring-1 focus:ring-ring dark:hover:bg-white/10',\n            size === 'sm' && 'p-0.5',\n            size === 'md' && 'p-0.5',\n            size === 'lg' && 'p-1'\n          )}\n          aria-label={`Remove ${tag.name} tag`}\n        >\n          <X className={iconSizes[size]} />\n        </button>\n      )}\n    </Badge>\n  )\n}\n\nexport interface TagListProps {\n  /** Array of tags to display */\n  tags: EnhancedTag[]\n  /** Size variant for all badges */\n  size?: 'sm' | 'md' | 'lg'\n  /** Whether tags are clickable */\n  clickable?: boolean\n  /** Whether to show remove buttons */\n  removable?: boolean\n  /** Whether to show tag icons */\n  showIcon?: boolean\n  /** Maximum number of tags to show (rest will be hidden with +N) */\n  maxTags?: number\n  /** Layout direction */\n  direction?: 'horizontal' | 'vertical'\n  /** Callback when tag is clicked */\n  onTagClick?: (tag: EnhancedTag) => void\n  /** Callback when tag is removed */\n  onTagRemove?: (tag: EnhancedTag) => void\n  /** Additional CSS classes */\n  className?: string\n}\n\nconst TagList: React.FC<TagListProps> = ({\n  tags,\n  size = 'md',\n  clickable = false,\n  removable = false,\n  showIcon = true,\n  maxTags,\n  direction = 'horizontal',\n  onTagClick,\n  onTagRemove,\n  className,\n}) => {\n  const visibleTags = maxTags ? tags.slice(0, maxTags) : tags\n  const hiddenCount =\n    maxTags && tags.length > maxTags ? tags.length - maxTags : 0\n\n  if (tags.length === 0) {\n    return null\n  }\n\n  return (\n    <div\n      className={cn(\n        'flex flex-wrap items-center gap-1',\n        direction === 'vertical' && 'flex-col items-start',\n        className\n      )}\n    >\n      {visibleTags.map((tag) => (\n        <TagBadge\n          key={tag.id}\n          tag={tag}\n          size={size}\n          clickable={clickable}\n          removable={removable}\n          showIcon={showIcon}\n          onClick={onTagClick}\n          onRemove={onTagRemove}\n        />\n      ))}\n      {hiddenCount > 0 && (\n        <Badge\n          variant='outline'\n          className={cn('text-muted-foreground', sizeClasses[size])}\n        >\n          +{hiddenCount}\n        </Badge>\n      )}\n    </div>\n  )\n}\n\n// Helper function to get contrasting text color for a given background color\nexport const getContrastColor = (backgroundColor: string): string => {\n  // Remove # if present\n  const hex = backgroundColor.replace('#', '')\n\n  // Convert to RGB\n  const r = parseInt(hex.substr(0, 2), 16)\n  const g = parseInt(hex.substr(2, 2), 16)\n  const b = parseInt(hex.substr(4, 2), 16)\n\n  // Calculate relative luminance\n  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255\n\n  // Return black or white based on luminance\n  return luminance > 0.5 ? '#000000' : '#ffffff'\n}\n\nconst sizeClasses = {\n  sm: 'text-xs px-1.5 py-0.5 gap-1',\n  md: 'text-xs px-2 py-1 gap-1',\n  lg: 'text-sm px-2.5 py-1.5 gap-1.5',\n}\n\nexport { TagBadge, TagList }\n",
              ],
              names: [],
              mappings:
                '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AC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;oBAC3D;oBACI,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;;;;AAKvB;AAEA,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;AAC5E,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;IACnE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;IACrB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;IAE3C,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;IAChB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;IACvC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;IACvC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;IAEvC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;IAC9B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAC,CAAC,CAAC,CAAC,CAAE,AAAD,CAAE,CAAC;IAE1D,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;IAC1C,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;AAC/C,EAAA;AAEA,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;IAClB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;IACjC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;IAC7B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;AACrC;AAEA,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC',
            },
            _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
            hash: '45af95bcf263fe3e18957cbaecb26a4835bb7370',
          },
          coverage = global[gcv] || (global[gcv] = {})
        ;(coverage[path] &&
          '45af95bcf263fe3e18957cbaecb26a4835bb7370' === coverage[path].hash) ||
          (coverage[path] = coverageData)
        var actualCoverage = coverage[path]
        return (
          (cov_y0p3d5yub = function () {
            return actualCoverage
          }),
          actualCoverage
        )
      }
      ;(cov_y0p3d5yub(), cov_y0p3d5yub().s[0]++)
      const TagBadge = ({
        tag,
        size = (cov_y0p3d5yub().b[0][0]++, 'md'),
        clickable = (cov_y0p3d5yub().b[1][0]++, !1),
        removable = (cov_y0p3d5yub().b[2][0]++, !1),
        showIcon = (cov_y0p3d5yub().b[3][0]++, !0),
        onClick,
        onRemove,
        className,
        variant = (cov_y0p3d5yub().b[4][0]++, 'secondary'),
      }) => {
        cov_y0p3d5yub().f[0]++
        const sizeClasses =
            (cov_y0p3d5yub().s[1]++,
            {
              sm: 'text-xs px-1.5 py-0.5 gap-1',
              md: 'text-xs px-2 py-1 gap-1',
              lg: 'text-sm px-2.5 py-1.5 gap-1.5',
            }),
          iconSizes =
            (cov_y0p3d5yub().s[2]++,
            { sm: 'h-2.5 w-2.5', md: 'h-3 w-3', lg: 'h-3.5 w-3.5' })
        cov_y0p3d5yub().s[3]++
        cov_y0p3d5yub().s[7]++
        return (
          cov_y0p3d5yub().s[11]++,
          (0, jsx_runtime.jsxs)(badge.E, {
            variant,
            className: (0, utils.cn)(
              'inline-flex items-center font-medium transition-colors',
              sizeClasses[size],
              (cov_y0p3d5yub().b[8][0]++,
              clickable &&
                (cov_y0p3d5yub().b[8][1]++, 'cursor-pointer hover:opacity-80')),
              (cov_y0p3d5yub().b[9][0]++,
              !clickable && (cov_y0p3d5yub().b[9][1]++, 'cursor-default')),
              (cov_y0p3d5yub().b[10][0]++,
              removable && (cov_y0p3d5yub().b[10][1]++, 'pr-1')),
              className
            ),
            style: {
              backgroundColor: tag.color
                ? (cov_y0p3d5yub().b[11][0]++, `${tag.color}20`)
                : void cov_y0p3d5yub().b[11][1]++,
              borderColor:
                (cov_y0p3d5yub().b[12][0]++,
                tag.color || void cov_y0p3d5yub().b[12][1]++),
              color:
                (cov_y0p3d5yub().b[13][0]++,
                tag.color || void cov_y0p3d5yub().b[13][1]++),
            },
            onClick: (e) => {
              ;(cov_y0p3d5yub().f[1]++,
                cov_y0p3d5yub().s[4]++,
                e.stopPropagation(),
                cov_y0p3d5yub().s[5]++,
                cov_y0p3d5yub().b[6][0]++,
                clickable && (cov_y0p3d5yub().b[6][1]++, onClick)
                  ? (cov_y0p3d5yub().b[5][0]++,
                    cov_y0p3d5yub().s[6]++,
                    onClick(tag))
                  : cov_y0p3d5yub().b[5][1]++)
            },
            children: [
              (cov_y0p3d5yub().b[14][0]++,
              showIcon &&
                (cov_y0p3d5yub().b[14][1]++,
                (0, jsx_runtime.jsx)(hash.A, { className: iconSizes[size] }))),
              (0, jsx_runtime.jsx)('span', {
                className: 'truncate',
                children: tag.name,
              }),
              (cov_y0p3d5yub().b[15][0]++,
              void 0 !== tag.usage_count &&
                (cov_y0p3d5yub().b[15][1]++, tag.usage_count > 0) &&
                (cov_y0p3d5yub().b[15][2]++,
                (0, jsx_runtime.jsxs)('span', {
                  className: 'ml-1 text-xs opacity-60',
                  children: ['(', tag.usage_count, ')'],
                }))),
              (cov_y0p3d5yub().b[16][0]++,
              removable &&
                (cov_y0p3d5yub().b[16][1]++,
                (0, jsx_runtime.jsx)('button', {
                  onClick: (e) => {
                    ;(cov_y0p3d5yub().f[2]++,
                      cov_y0p3d5yub().s[8]++,
                      e.stopPropagation(),
                      cov_y0p3d5yub().s[9]++,
                      onRemove
                        ? (cov_y0p3d5yub().b[7][0]++,
                          cov_y0p3d5yub().s[10]++,
                          onRemove(tag))
                        : cov_y0p3d5yub().b[7][1]++)
                  },
                  className: (0, utils.cn)(
                    'ml-1 rounded-full p-0.5 hover:bg-black/10 focus:outline-none focus:ring-1 focus:ring-ring dark:hover:bg-white/10',
                    (cov_y0p3d5yub().b[17][0]++,
                    'sm' === size && (cov_y0p3d5yub().b[17][1]++, 'p-0.5')),
                    (cov_y0p3d5yub().b[18][0]++,
                    'md' === size && (cov_y0p3d5yub().b[18][1]++, 'p-0.5')),
                    (cov_y0p3d5yub().b[19][0]++,
                    'lg' === size && (cov_y0p3d5yub().b[19][1]++, 'p-1'))
                  ),
                  'aria-label': `Remove ${tag.name} tag`,
                  children: (0, jsx_runtime.jsx)(x.A, {
                    className: iconSizes[size],
                  }),
                }))),
            ],
          })
        )
      }
      cov_y0p3d5yub().s[12]++
      const TagList = ({
        tags,
        size = (cov_y0p3d5yub().b[20][0]++, 'md'),
        clickable = (cov_y0p3d5yub().b[21][0]++, !1),
        removable = (cov_y0p3d5yub().b[22][0]++, !1),
        showIcon = (cov_y0p3d5yub().b[23][0]++, !0),
        maxTags,
        direction = (cov_y0p3d5yub().b[24][0]++, 'horizontal'),
        onTagClick,
        onTagRemove,
        className,
      }) => {
        cov_y0p3d5yub().f[3]++
        const visibleTags =
            (cov_y0p3d5yub().s[13]++,
            maxTags
              ? (cov_y0p3d5yub().b[25][0]++, tags.slice(0, maxTags))
              : (cov_y0p3d5yub().b[25][1]++, tags)),
          hiddenCount =
            (cov_y0p3d5yub().s[14]++,
            cov_y0p3d5yub().b[27][0]++,
            maxTags && (cov_y0p3d5yub().b[27][1]++, tags.length > maxTags)
              ? (cov_y0p3d5yub().b[26][0]++, tags.length - maxTags)
              : (cov_y0p3d5yub().b[26][1]++, 0))
        return (
          cov_y0p3d5yub().s[15]++,
          0 === tags.length
            ? (cov_y0p3d5yub().b[28][0]++, cov_y0p3d5yub().s[16]++, null)
            : (cov_y0p3d5yub().b[28][1]++,
              cov_y0p3d5yub().s[17]++,
              (0, jsx_runtime.jsxs)('div', {
                className: (0, utils.cn)(
                  'flex flex-wrap items-center gap-1',
                  (cov_y0p3d5yub().b[29][0]++,
                  'vertical' === direction &&
                    (cov_y0p3d5yub().b[29][1]++, 'flex-col items-start')),
                  className
                ),
                children: [
                  visibleTags.map(
                    (tag) => (
                      cov_y0p3d5yub().f[4]++,
                      cov_y0p3d5yub().s[18]++,
                      (0, jsx_runtime.jsx)(
                        TagBadge,
                        {
                          tag,
                          size,
                          clickable,
                          removable,
                          showIcon,
                          onClick: onTagClick,
                          onRemove: onTagRemove,
                        },
                        tag.id
                      )
                    )
                  ),
                  (cov_y0p3d5yub().b[30][0]++,
                  hiddenCount > 0 &&
                    (cov_y0p3d5yub().b[30][1]++,
                    (0, jsx_runtime.jsxs)(badge.E, {
                      variant: 'outline',
                      className: (0, utils.cn)(
                        'text-muted-foreground',
                        sizeClasses[size]
                      ),
                      children: ['+', hiddenCount],
                    }))),
                ],
              }))
        )
      }
      cov_y0p3d5yub().s[19]++
      const sizeClasses =
        (cov_y0p3d5yub().s[26]++,
        {
          sm: 'text-xs px-1.5 py-0.5 gap-1',
          md: 'text-xs px-2 py-1 gap-1',
          lg: 'text-sm px-2.5 py-1.5 gap-1.5',
        })
      ;(cov_y0p3d5yub().s[27]++,
        (TagBadge.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'TagBadge',
          props: {
            tag: {
              required: !0,
              tsType: { name: 'EnhancedTag' },
              description: 'The tag to display',
            },
            size: {
              required: !1,
              tsType: {
                name: 'union',
                raw: "'sm' | 'md' | 'lg'",
                elements: [
                  { name: 'literal', value: "'sm'" },
                  { name: 'literal', value: "'md'" },
                  { name: 'literal', value: "'lg'" },
                ],
              },
              description: 'Size variant',
              defaultValue: { value: "'md'", computed: !1 },
            },
            clickable: {
              required: !1,
              tsType: { name: 'boolean' },
              description: 'Whether the tag is clickable',
              defaultValue: { value: 'false', computed: !1 },
            },
            removable: {
              required: !1,
              tsType: { name: 'boolean' },
              description: 'Whether to show remove button',
              defaultValue: { value: 'false', computed: !1 },
            },
            showIcon: {
              required: !1,
              tsType: { name: 'boolean' },
              description: 'Whether to show tag icon',
              defaultValue: { value: 'true', computed: !1 },
            },
            onClick: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '(tag: EnhancedTag) => void',
                signature: {
                  arguments: [{ type: { name: 'EnhancedTag' }, name: 'tag' }],
                  return: { name: 'void' },
                },
              },
              description: 'Callback when tag is clicked',
            },
            onRemove: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '(tag: EnhancedTag) => void',
                signature: {
                  arguments: [{ type: { name: 'EnhancedTag' }, name: 'tag' }],
                  return: { name: 'void' },
                },
              },
              description: 'Callback when remove button is clicked',
            },
            className: {
              required: !1,
              tsType: { name: 'string' },
              description: 'Additional CSS classes',
            },
            variant: {
              required: !1,
              tsType: {
                name: 'union',
                raw: "'default' | 'secondary' | 'outline' | 'destructive'",
                elements: [
                  { name: 'literal', value: "'default'" },
                  { name: 'literal', value: "'secondary'" },
                  { name: 'literal', value: "'outline'" },
                  { name: 'literal', value: "'destructive'" },
                ],
              },
              description: 'Custom badge variant',
              defaultValue: { value: "'secondary'", computed: !1 },
            },
          },
        }),
        cov_y0p3d5yub().s[28]++,
        (TagList.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'TagList',
          props: {
            tags: {
              required: !0,
              tsType: {
                name: 'Array',
                elements: [{ name: 'EnhancedTag' }],
                raw: 'EnhancedTag[]',
              },
              description: 'Array of tags to display',
            },
            size: {
              required: !1,
              tsType: {
                name: 'union',
                raw: "'sm' | 'md' | 'lg'",
                elements: [
                  { name: 'literal', value: "'sm'" },
                  { name: 'literal', value: "'md'" },
                  { name: 'literal', value: "'lg'" },
                ],
              },
              description: 'Size variant for all badges',
              defaultValue: { value: "'md'", computed: !1 },
            },
            clickable: {
              required: !1,
              tsType: { name: 'boolean' },
              description: 'Whether tags are clickable',
              defaultValue: { value: 'false', computed: !1 },
            },
            removable: {
              required: !1,
              tsType: { name: 'boolean' },
              description: 'Whether to show remove buttons',
              defaultValue: { value: 'false', computed: !1 },
            },
            showIcon: {
              required: !1,
              tsType: { name: 'boolean' },
              description: 'Whether to show tag icons',
              defaultValue: { value: 'true', computed: !1 },
            },
            maxTags: {
              required: !1,
              tsType: { name: 'number' },
              description:
                'Maximum number of tags to show (rest will be hidden with +N)',
            },
            direction: {
              required: !1,
              tsType: {
                name: 'union',
                raw: "'horizontal' | 'vertical'",
                elements: [
                  { name: 'literal', value: "'horizontal'" },
                  { name: 'literal', value: "'vertical'" },
                ],
              },
              description: 'Layout direction',
              defaultValue: { value: "'horizontal'", computed: !1 },
            },
            onTagClick: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '(tag: EnhancedTag) => void',
                signature: {
                  arguments: [{ type: { name: 'EnhancedTag' }, name: 'tag' }],
                  return: { name: 'void' },
                },
              },
              description: 'Callback when tag is clicked',
            },
            onTagRemove: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '(tag: EnhancedTag) => void',
                signature: {
                  arguments: [{ type: { name: 'EnhancedTag' }, name: 'tag' }],
                  return: { name: 'void' },
                },
              },
              description: 'Callback when tag is removed',
            },
            className: {
              required: !1,
              tsType: { name: 'string' },
              description: 'Additional CSS classes',
            },
          },
        }))
      var dist = __webpack_require__(
          '../../node_modules/.pnpm/@storybook+test@8.6.14_storybook@9.0.18_@testing-library+dom@10.4.0_prettier@3.6.2_/node_modules/@storybook/test/dist/index.mjs'
        ),
        console = __webpack_require__(
          '../../node_modules/.pnpm/console-browserify@1.2.0/node_modules/console-browserify/index.js'
        )
      const tag_badge_stories = {
          title: 'UI/Components/TagBadge',
          component: TagBadge,
          parameters: { layout: 'centered' },
          tags: ['autodocs'],
          argTypes: {
            size: { control: { type: 'select' }, options: ['sm', 'md', 'lg'] },
            variant: {
              control: { type: 'select' },
              options: ['default', 'secondary', 'outline', 'destructive'],
            },
            clickable: { control: { type: 'boolean' } },
            removable: { control: { type: 'boolean' } },
            showIcon: { control: { type: 'boolean' } },
          },
        },
        mockTag = {
          id: '1',
          name: 'javascript',
          user_id: 'user-1',
          parent_id: null,
          color: '#3b82f6',
          created_at: '2024-01-01T00:00:00Z',
          usage_count: 42,
        },
        mockTags = [
          {
            id: '1',
            name: 'javascript',
            user_id: 'user-1',
            parent_id: null,
            color: '#3b82f6',
            created_at: '2024-01-01T00:00:00Z',
            usage_count: 42,
          },
          {
            id: '2',
            name: 'react',
            user_id: 'user-1',
            parent_id: null,
            color: '#06b6d4',
            created_at: '2024-01-01T00:00:00Z',
            usage_count: 35,
          },
          {
            id: '3',
            name: 'typescript',
            user_id: 'user-1',
            parent_id: null,
            color: '#8b5cf6',
            created_at: '2024-01-01T00:00:00Z',
            usage_count: 28,
          },
          {
            id: '4',
            name: 'nextjs',
            user_id: 'user-1',
            parent_id: null,
            color: '#10b981',
            created_at: '2024-01-01T00:00:00Z',
            usage_count: 15,
          },
        ],
        Default = {
          args: { tag: mockTag },
          play: async ({ canvasElement }) => {
            const canvas = (0, dist.ux)(canvasElement),
              badge = canvas.getByText('javascript')
            ;(await (0, dist.E3)(badge).toBeVisible(),
              await (0, dist.E3)(canvas.getByText('(42)')).toBeVisible())
          },
        },
        Sizes = {
          args: { tag: mockTag },
          render: (args) =>
            (0, jsx_runtime.jsxs)('div', {
              className: 'flex items-center gap-4',
              children: [
                (0, jsx_runtime.jsx)(TagBadge, { ...args, size: 'sm' }),
                (0, jsx_runtime.jsx)(TagBadge, { ...args, size: 'md' }),
                (0, jsx_runtime.jsx)(TagBadge, { ...args, size: 'lg' }),
              ],
            }),
        },
        Variants = {
          args: { tag: mockTag },
          render: (args) =>
            (0, jsx_runtime.jsxs)('div', {
              className: 'flex items-center gap-4',
              children: [
                (0, jsx_runtime.jsx)(TagBadge, { ...args, variant: 'default' }),
                (0, jsx_runtime.jsx)(TagBadge, {
                  ...args,
                  variant: 'secondary',
                }),
                (0, jsx_runtime.jsx)(TagBadge, { ...args, variant: 'outline' }),
                (0, jsx_runtime.jsx)(TagBadge, {
                  ...args,
                  variant: 'destructive',
                }),
              ],
            }),
        },
        Clickable = {
          args: {
            tag: mockTag,
            clickable: !0,
            onClick: (tag) => console.info('Clicked tag:', tag.name),
          },
          play: async ({ canvasElement }) => {
            const badge = (0, dist.ux)(canvasElement).getByText('javascript')
            ;(await dist.Q4.hover(badge), await dist.Q4.click(badge))
          },
        },
        Removable = {
          args: {
            tag: mockTag,
            removable: !0,
            onRemove: (tag) => console.info('Removed tag:', tag.name),
          },
          play: async ({ canvasElement }) => {
            const removeButton = (0, dist.ux)(canvasElement).getByLabelText(
              'Remove javascript tag'
            )
            ;(await (0, dist.E3)(removeButton).toBeVisible(),
              await dist.Q4.click(removeButton))
          },
        },
        WithoutIcon = { args: { tag: mockTag, showIcon: !1 } },
        WithoutUsageCount = {
          args: { tag: { ...mockTag, usage_count: void 0 } },
        },
        CustomColors = {
          args: { tag: mockTag },
          render: () =>
            (0, jsx_runtime.jsxs)('div', {
              className: 'flex items-center gap-2 flex-wrap',
              children: [
                (0, jsx_runtime.jsx)(TagBadge, {
                  tag: { ...mockTag, color: '#ef4444', name: 'urgent' },
                }),
                (0, jsx_runtime.jsx)(TagBadge, {
                  tag: { ...mockTag, color: '#f59e0b', name: 'warning' },
                }),
                (0, jsx_runtime.jsx)(TagBadge, {
                  tag: { ...mockTag, color: '#10b981', name: 'success' },
                }),
                (0, jsx_runtime.jsx)(TagBadge, {
                  tag: { ...mockTag, color: '#8b5cf6', name: 'info' },
                }),
                (0, jsx_runtime.jsx)(TagBadge, {
                  tag: { ...mockTag, color: '#ec4899', name: 'design' },
                }),
                (0, jsx_runtime.jsx)(TagBadge, {
                  tag: { ...mockTag, color: '#64748b', name: 'archived' },
                }),
              ],
            }),
        },
        TagListDefault = {
          args: { tag: mockTag },
          render: () => (0, jsx_runtime.jsx)(TagList, { tags: mockTags }),
        },
        TagListClickable = {
          args: { tag: mockTag },
          render: () =>
            (0, jsx_runtime.jsx)(TagList, {
              tags: mockTags,
              clickable: !0,
              onTagClick: (tag) => console.info('Clicked:', tag.name),
            }),
        },
        TagListRemovable = {
          args: { tag: mockTag },
          render: () =>
            (0, jsx_runtime.jsx)(TagList, {
              tags: mockTags,
              removable: !0,
              onTagRemove: (tag) => console.info('Removed:', tag.name),
            }),
        },
        TagListSizes = {
          args: { tag: mockTag },
          render: () =>
            (0, jsx_runtime.jsxs)('div', {
              className: 'space-y-4',
              children: [
                (0, jsx_runtime.jsxs)('div', {
                  children: [
                    (0, jsx_runtime.jsx)('h3', {
                      className: 'text-sm font-medium mb-2',
                      children: 'Small',
                    }),
                    (0, jsx_runtime.jsx)(TagList, {
                      tags: mockTags,
                      size: 'sm',
                    }),
                  ],
                }),
                (0, jsx_runtime.jsxs)('div', {
                  children: [
                    (0, jsx_runtime.jsx)('h3', {
                      className: 'text-sm font-medium mb-2',
                      children: 'Medium',
                    }),
                    (0, jsx_runtime.jsx)(TagList, {
                      tags: mockTags,
                      size: 'md',
                    }),
                  ],
                }),
                (0, jsx_runtime.jsxs)('div', {
                  children: [
                    (0, jsx_runtime.jsx)('h3', {
                      className: 'text-sm font-medium mb-2',
                      children: 'Large',
                    }),
                    (0, jsx_runtime.jsx)(TagList, {
                      tags: mockTags,
                      size: 'lg',
                    }),
                  ],
                }),
              ],
            }),
        },
        TagListMaxTags = {
          args: { tag: mockTag },
          render: () =>
            (0, jsx_runtime.jsxs)('div', {
              className: 'space-y-4',
              children: [
                (0, jsx_runtime.jsxs)('div', {
                  children: [
                    (0, jsx_runtime.jsx)('h3', {
                      className: 'text-sm font-medium mb-2',
                      children: 'Show max 2 tags',
                    }),
                    (0, jsx_runtime.jsx)(TagList, {
                      tags: mockTags,
                      maxTags: 2,
                    }),
                  ],
                }),
                (0, jsx_runtime.jsxs)('div', {
                  children: [
                    (0, jsx_runtime.jsx)('h3', {
                      className: 'text-sm font-medium mb-2',
                      children: 'Show max 3 tags',
                    }),
                    (0, jsx_runtime.jsx)(TagList, {
                      tags: mockTags,
                      maxTags: 3,
                    }),
                  ],
                }),
              ],
            }),
        },
        TagListVertical = {
          args: { tag: mockTag },
          render: () =>
            (0, jsx_runtime.jsx)('div', {
              className: 'w-48',
              children: (0, jsx_runtime.jsx)(TagList, {
                tags: mockTags,
                direction: 'vertical',
              }),
            }),
        },
        TagListEmpty = {
          args: { tag: mockTag },
          render: () => (0, jsx_runtime.jsx)(TagList, { tags: [] }),
        },
        InteractiveExample = {
          args: { tag: mockTag },
          render: () => {
            const [tags, setTags] = react.useState(mockTags)
            return (0, jsx_runtime.jsxs)('div', {
              className: 'space-y-4',
              children: [
                (0, jsx_runtime.jsx)('h3', {
                  className: 'text-sm font-medium',
                  children: 'Click to remove tags:',
                }),
                (0, jsx_runtime.jsx)(TagList, {
                  tags,
                  removable: !0,
                  clickable: !0,
                  onTagRemove: (tagToRemove) => {
                    setTags(tags.filter((tag) => tag.id !== tagToRemove.id))
                  },
                  onTagClick: (tag) => console.info('Clicked:', tag.name),
                }),
                0 === tags.length &&
                  (0, jsx_runtime.jsx)('p', {
                    className: 'text-sm text-muted-foreground',
                    children: 'All tags removed!',
                  }),
              ],
            })
          },
        },
        __namedExportsOrder = [
          'Default',
          'Sizes',
          'Variants',
          'Clickable',
          'Removable',
          'WithoutIcon',
          'WithoutUsageCount',
          'CustomColors',
          'TagListDefault',
          'TagListClickable',
          'TagListRemovable',
          'TagListSizes',
          'TagListMaxTags',
          'TagListVertical',
          'TagListEmpty',
          'InteractiveExample',
        ]
      ;((Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              "{\n  args: {\n    tag: mockTag\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const badge = canvas.getByText('javascript');\n    await expect(badge).toBeVisible();\n    await expect(canvas.getByText('(42)')).toBeVisible();\n  }\n}",
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (Sizes.parameters = {
          ...Sizes.parameters,
          docs: {
            ...Sizes.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    tag: mockTag\n  },\n  render: args => <div className='flex items-center gap-4'>\n      <TagBadge {...args} size='sm' />\n      <TagBadge {...args} size='md' />\n      <TagBadge {...args} size='lg' />\n    </div>\n}",
              ...Sizes.parameters?.docs?.source,
            },
          },
        }),
        (Variants.parameters = {
          ...Variants.parameters,
          docs: {
            ...Variants.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    tag: mockTag\n  },\n  render: args => <div className='flex items-center gap-4'>\n      <TagBadge {...args} variant='default' />\n      <TagBadge {...args} variant='secondary' />\n      <TagBadge {...args} variant='outline' />\n      <TagBadge {...args} variant='destructive' />\n    </div>\n}",
              ...Variants.parameters?.docs?.source,
            },
          },
        }),
        (Clickable.parameters = {
          ...Clickable.parameters,
          docs: {
            ...Clickable.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    tag: mockTag,\n    clickable: true,\n    onClick: tag => console.info('Clicked tag:', tag.name)\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const badge = canvas.getByText('javascript');\n    await userEvent.hover(badge);\n    await userEvent.click(badge);\n  }\n}",
              ...Clickable.parameters?.docs?.source,
            },
          },
        }),
        (Removable.parameters = {
          ...Removable.parameters,
          docs: {
            ...Removable.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    tag: mockTag,\n    removable: true,\n    onRemove: tag => console.info('Removed tag:', tag.name)\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const removeButton = canvas.getByLabelText('Remove javascript tag');\n    await expect(removeButton).toBeVisible();\n    await userEvent.click(removeButton);\n  }\n}",
              ...Removable.parameters?.docs?.source,
            },
          },
        }),
        (WithoutIcon.parameters = {
          ...WithoutIcon.parameters,
          docs: {
            ...WithoutIcon.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    tag: mockTag,\n    showIcon: false\n  }\n}',
              ...WithoutIcon.parameters?.docs?.source,
            },
          },
        }),
        (WithoutUsageCount.parameters = {
          ...WithoutUsageCount.parameters,
          docs: {
            ...WithoutUsageCount.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    tag: {\n      ...mockTag,\n      usage_count: undefined\n    }\n  }\n}',
              ...WithoutUsageCount.parameters?.docs?.source,
            },
          },
        }),
        (CustomColors.parameters = {
          ...CustomColors.parameters,
          docs: {
            ...CustomColors.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    tag: mockTag\n  },\n  render: () => <div className='flex items-center gap-2 flex-wrap'>\n      <TagBadge tag={{\n      ...mockTag,\n      color: '#ef4444',\n      name: 'urgent'\n    }} />\n      <TagBadge tag={{\n      ...mockTag,\n      color: '#f59e0b',\n      name: 'warning'\n    }} />\n      <TagBadge tag={{\n      ...mockTag,\n      color: '#10b981',\n      name: 'success'\n    }} />\n      <TagBadge tag={{\n      ...mockTag,\n      color: '#8b5cf6',\n      name: 'info'\n    }} />\n      <TagBadge tag={{\n      ...mockTag,\n      color: '#ec4899',\n      name: 'design'\n    }} />\n      <TagBadge tag={{\n      ...mockTag,\n      color: '#64748b',\n      name: 'archived'\n    }} />\n    </div>\n}",
              ...CustomColors.parameters?.docs?.source,
            },
          },
        }),
        (TagListDefault.parameters = {
          ...TagListDefault.parameters,
          docs: {
            ...TagListDefault.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    tag: mockTag\n  },\n  render: () => <TagList tags={mockTags} />\n}',
              ...TagListDefault.parameters?.docs?.source,
            },
          },
        }),
        (TagListClickable.parameters = {
          ...TagListClickable.parameters,
          docs: {
            ...TagListClickable.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    tag: mockTag\n  },\n  render: () => <TagList tags={mockTags} clickable onTagClick={tag => console.info('Clicked:', tag.name)} />\n}",
              ...TagListClickable.parameters?.docs?.source,
            },
          },
        }),
        (TagListRemovable.parameters = {
          ...TagListRemovable.parameters,
          docs: {
            ...TagListRemovable.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    tag: mockTag\n  },\n  render: () => <TagList tags={mockTags} removable onTagRemove={tag => console.info('Removed:', tag.name)} />\n}",
              ...TagListRemovable.parameters?.docs?.source,
            },
          },
        }),
        (TagListSizes.parameters = {
          ...TagListSizes.parameters,
          docs: {
            ...TagListSizes.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    tag: mockTag\n  },\n  render: () => <div className='space-y-4'>\n      <div>\n        <h3 className='text-sm font-medium mb-2'>Small</h3>\n        <TagList tags={mockTags} size='sm' />\n      </div>\n      <div>\n        <h3 className='text-sm font-medium mb-2'>Medium</h3>\n        <TagList tags={mockTags} size='md' />\n      </div>\n      <div>\n        <h3 className='text-sm font-medium mb-2'>Large</h3>\n        <TagList tags={mockTags} size='lg' />\n      </div>\n    </div>\n}",
              ...TagListSizes.parameters?.docs?.source,
            },
          },
        }),
        (TagListMaxTags.parameters = {
          ...TagListMaxTags.parameters,
          docs: {
            ...TagListMaxTags.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    tag: mockTag\n  },\n  render: () => <div className='space-y-4'>\n      <div>\n        <h3 className='text-sm font-medium mb-2'>Show max 2 tags</h3>\n        <TagList tags={mockTags} maxTags={2} />\n      </div>\n      <div>\n        <h3 className='text-sm font-medium mb-2'>Show max 3 tags</h3>\n        <TagList tags={mockTags} maxTags={3} />\n      </div>\n    </div>\n}",
              ...TagListMaxTags.parameters?.docs?.source,
            },
          },
        }),
        (TagListVertical.parameters = {
          ...TagListVertical.parameters,
          docs: {
            ...TagListVertical.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    tag: mockTag\n  },\n  render: () => <div className='w-48'>\n      <TagList tags={mockTags} direction='vertical' />\n    </div>\n}",
              ...TagListVertical.parameters?.docs?.source,
            },
          },
        }),
        (TagListEmpty.parameters = {
          ...TagListEmpty.parameters,
          docs: {
            ...TagListEmpty.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    tag: mockTag\n  },\n  render: () => <TagList tags={[]} />\n}',
              ...TagListEmpty.parameters?.docs?.source,
            },
          },
        }),
        (InteractiveExample.parameters = {
          ...InteractiveExample.parameters,
          docs: {
            ...InteractiveExample.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    tag: mockTag\n  },\n  render: () => {\n    const [tags, setTags] = React.useState(mockTags);\n    const handleRemove = (tagToRemove: EnhancedTag) => {\n      setTags(tags.filter(tag => tag.id !== tagToRemove.id));\n    };\n    return <div className='space-y-4'>\n        <h3 className='text-sm font-medium'>Click to remove tags:</h3>\n        <TagList tags={tags} removable clickable onTagRemove={handleRemove} onTagClick={tag => console.info('Clicked:', tag.name)} />\n        {tags.length === 0 && <p className='text-sm text-muted-foreground'>All tags removed!</p>}\n      </div>;\n  }\n}",
              ...InteractiveExample.parameters?.docs?.source,
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
