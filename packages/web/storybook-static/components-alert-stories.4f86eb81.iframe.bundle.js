/*! For license information please see components-alert-stories.4f86eb81.iframe.bundle.js.LICENSE.txt */
'use strict'
;(self.webpackChunk_notable_web = self.webpackChunk_notable_web || []).push([
  [1750],
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
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-alert.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => CircleAlert })
        const CircleAlert = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('CircleAlert', [
          ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
          ['line', { x1: '12', x2: '12', y1: '8', y2: '12', key: '1pkeuh' }],
          [
            'line',
            { x1: '12', x2: '12.01', y1: '16', y2: '16', key: '4dfq90' },
          ],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/info.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Info })
        const Info = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Info', [
          ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
          ['path', { d: 'M12 16v-4', key: '1dtifu' }],
          ['path', { d: 'M12 8h.01', key: 'e9boi3' }],
        ])
      },
    './components/ui/alert.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        Fc: () => Alert,
        TN: () => AlertDescription,
        XL: () => AlertTitle,
      })
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
        ),
        class_variance_authority__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            '../../node_modules/.pnpm/class-variance-authority@0.7.1/node_modules/class-variance-authority/dist/index.mjs'
          ),
        _lib_utils__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__('./lib/utils.ts')
      function cov_1wrzoz81rj() {
        var path =
            '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/alert.tsx',
          global = new Function('return this')(),
          gcv = '__coverage__',
          coverage = global[gcv] || (global[gcv] = {})
        ;(coverage[path] &&
          '3d7b536550677cb53f80f064fe3df2c34ff460e3' === coverage[path].hash) ||
          (coverage[path] = {
            path: '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/alert.tsx',
            statementMap: {
              0: {
                start: { line: 5, column: 22 },
                end: { line: 18, column: 2 },
              },
              1: {
                start: { line: 19, column: 28 },
                end: { line: 26, column: 7 },
              },
              2: {
                start: { line: 19, column: 100 },
                end: { line: 26, column: 6 },
              },
              3: {
                start: { line: 27, column: 0 },
                end: { line: 27, column: 28 },
              },
              4: {
                start: { line: 28, column: 33 },
                end: { line: 32, column: 7 },
              },
              5: {
                start: { line: 28, column: 96 },
                end: { line: 32, column: 6 },
              },
              6: {
                start: { line: 33, column: 0 },
                end: { line: 33, column: 38 },
              },
              7: {
                start: { line: 34, column: 39 },
                end: { line: 38, column: 7 },
              },
              8: {
                start: { line: 34, column: 102 },
                end: { line: 38, column: 6 },
              },
              9: {
                start: { line: 39, column: 0 },
                end: { line: 39, column: 50 },
              },
              10: {
                start: { line: 41, column: 0 },
                end: { line: 45, column: 2 },
              },
              11: {
                start: { line: 46, column: 0 },
                end: { line: 50, column: 2 },
              },
              12: {
                start: { line: 51, column: 0 },
                end: { line: 55, column: 2 },
              },
            },
            fnMap: {
              0: {
                name: '(anonymous_0)',
                decl: {
                  start: { line: 19, column: 45 },
                  end: { line: 19, column: 46 },
                },
                loc: {
                  start: { line: 19, column: 100 },
                  end: { line: 26, column: 6 },
                },
                line: 19,
              },
              1: {
                name: '(anonymous_1)',
                decl: {
                  start: { line: 28, column: 50 },
                  end: { line: 28, column: 51 },
                },
                loc: {
                  start: { line: 28, column: 96 },
                  end: { line: 32, column: 6 },
                },
                line: 28,
              },
              2: {
                name: '(anonymous_2)',
                decl: {
                  start: { line: 34, column: 56 },
                  end: { line: 34, column: 57 },
                },
                loc: {
                  start: { line: 34, column: 102 },
                  end: { line: 38, column: 6 },
                },
                line: 34,
              },
            },
            branchMap: {},
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
            },
            f: { 0: 0, 1: 0, 2: 0 },
            b: {},
            inputSourceMap: {
              version: 3,
              sources: [
                '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/alert.tsx',
              ],
              sourcesContent: [
                "import * as React from 'react'\nimport { cva, type VariantProps } from 'class-variance-authority'\n\nimport { cn } from '@/lib/utils'\n\nconst alertVariants = cva(\n  'relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground transition-all duration-200',\n  {\n    variants: {\n      variant: {\n        default: 'bg-background text-foreground border-border',\n        destructive:\n          'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive bg-destructive/10',\n        success:\n          'border-green-500/50 text-green-600 dark:border-green-500 [&>svg]:text-green-600 bg-green-50/50 dark:bg-green-950/20',\n        warning:\n          'border-yellow-500/50 text-yellow-600 dark:border-yellow-500 [&>svg]:text-yellow-600 bg-yellow-50/50 dark:bg-yellow-950/20',\n        info: 'border-blue-500/50 text-blue-600 dark:border-blue-500 [&>svg]:text-blue-600 bg-blue-50/50 dark:bg-blue-950/20',\n      },\n    },\n    defaultVariants: {\n      variant: 'default',\n    },\n  }\n)\n\nconst Alert = React.forwardRef<\n  HTMLDivElement,\n  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>\n>(({ className, variant, ...props }, ref) => (\n  <div\n    ref={ref}\n    role='alert'\n    className={cn(alertVariants({ variant }), className)}\n    {...props}\n  />\n))\nAlert.displayName = 'Alert'\n\nconst AlertTitle = React.forwardRef<\n  HTMLParagraphElement,\n  React.HTMLAttributes<HTMLHeadingElement>\n>(({ className, ...props }, ref) => (\n  <h5\n    ref={ref}\n    className={cn('mb-1 font-medium leading-none tracking-tight', className)}\n    {...props}\n  />\n))\nAlertTitle.displayName = 'AlertTitle'\n\nconst AlertDescription = React.forwardRef<\n  HTMLParagraphElement,\n  React.HTMLAttributes<HTMLParagraphElement>\n>(({ className, ...props }, ref) => (\n  <div\n    ref={ref}\n    className={cn('text-sm [&_p]:leading-relaxed', className)}\n    {...props}\n  />\n))\nAlertDescription.displayName = 'AlertDescription'\n\nexport { Alert, AlertTitle, AlertDescription }\n",
              ],
              names: [],
              mappings:
                ';AAAA,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAC7B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,AAAmB,CAAlB,AAAmB,CAAlB,AAAmB,CAAlB,AAAmB,CAAlB,AAAmB,CAAC,AAAnB,CAAoB,AAAnB,CAAoB,AAAnB,CAAoB,AAAnB,CAAC,AAAmB,CAAlB,AAAmB,CAAlB,AAAmB,CAAC,AAAnB,CAAC,AAAmB,CAAlB,AAAmB,CAAC,AAAnB,CAAoB,AAAnB,CAAoB,AAAnB,CAAoB,AAAnB,CAAoB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAEhE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAE/B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACvB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACvL;IACE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACR,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YACP,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YACtD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACT,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YAC7G,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACL,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YACvH,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACL,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YAC7H,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACvH,CAAC;IACH,CAAC;IACD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACf,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,C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C;QACD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACR,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACxD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;AAGb,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;AAEhD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC',
            },
            _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
            hash: '3d7b536550677cb53f80f064fe3df2c34ff460e3',
          })
        var actualCoverage = coverage[path]
        return (
          (cov_1wrzoz81rj = function () {
            return actualCoverage
          }),
          actualCoverage
        )
      }
      cov_1wrzoz81rj()
      const alertVariants =
          (cov_1wrzoz81rj().s[0]++,
          (0, class_variance_authority__WEBPACK_IMPORTED_MODULE_3__.F)(
            'relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground transition-all duration-200',
            {
              variants: {
                variant: {
                  default: 'bg-background text-foreground border-border',
                  destructive:
                    'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive bg-destructive/10',
                  success:
                    'border-green-500/50 text-green-600 dark:border-green-500 [&>svg]:text-green-600 bg-green-50/50 dark:bg-green-950/20',
                  warning:
                    'border-yellow-500/50 text-yellow-600 dark:border-yellow-500 [&>svg]:text-yellow-600 bg-yellow-50/50 dark:bg-yellow-950/20',
                  info: 'border-blue-500/50 text-blue-600 dark:border-blue-500 [&>svg]:text-blue-600 bg-blue-50/50 dark:bg-blue-950/20',
                },
              },
              defaultVariants: { variant: 'default' },
            }
          )),
        Alert =
          (cov_1wrzoz81rj().s[1]++,
          react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(
            ({ className, variant, ...props }, ref) => (
              cov_1wrzoz81rj().f[0]++,
              cov_1wrzoz81rj().s[2]++,
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                ref,
                role: 'alert',
                className: (0, _lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(
                  alertVariants({ variant }),
                  className
                ),
                ...props,
              })
            )
          ))
      ;(cov_1wrzoz81rj().s[3]++, (Alert.displayName = 'Alert'))
      const AlertTitle =
        (cov_1wrzoz81rj().s[4]++,
        react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(
          ({ className, ...props }, ref) => (
            cov_1wrzoz81rj().f[1]++,
            cov_1wrzoz81rj().s[5]++,
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('h5', {
              ref,
              className: (0, _lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(
                'mb-1 font-medium leading-none tracking-tight',
                className
              ),
              ...props,
            })
          )
        ))
      ;(cov_1wrzoz81rj().s[6]++, (AlertTitle.displayName = 'AlertTitle'))
      const AlertDescription =
        (cov_1wrzoz81rj().s[7]++,
        react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(
          ({ className, ...props }, ref) => (
            cov_1wrzoz81rj().f[2]++,
            cov_1wrzoz81rj().s[8]++,
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
              ref,
              className: (0, _lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(
                'text-sm [&_p]:leading-relaxed',
                className
              ),
              ...props,
            })
          )
        ))
      ;(cov_1wrzoz81rj().s[9]++,
        (AlertDescription.displayName = 'AlertDescription'),
        cov_1wrzoz81rj().s[10]++,
        (Alert.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Alert',
        }),
        cov_1wrzoz81rj().s[11]++,
        (AlertTitle.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'AlertTitle',
        }),
        cov_1wrzoz81rj().s[12]++,
        (AlertDescription.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'AlertDescription',
        }))
    },
    './design-system/components/alert.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      ;(__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          CustomStyling: () => CustomStyling,
          Default: () => Default,
          Destructive: () => Destructive,
          Info: () => Info,
          LongContent: () => LongContent,
          MultipleAlerts: () => MultipleAlerts,
          SimpleAlert: () => SimpleAlert,
          Success: () => Success,
          Warning: () => Warning,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => alert_stories,
        }))
      var jsx_runtime = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        ui_alert = __webpack_require__('./components/ui/alert.tsx'),
        createLucideIcon = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        )
      const Terminal = (0, createLucideIcon.A)('Terminal', [
        ['polyline', { points: '4 17 10 11 4 5', key: 'akl6gq' }],
        ['line', { x1: '12', x2: '20', y1: '19', y2: '19', key: 'q2wloq' }],
      ])
      var circle_alert = __webpack_require__(
        '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-alert.js'
      )
      const CircleCheck = (0, createLucideIcon.A)('CircleCheck', [
        ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
        ['path', { d: 'm9 12 2 2 4-4', key: 'dzmm74' }],
      ])
      var info = __webpack_require__(
        '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/info.js'
      )
      const alert_stories = {
          title: 'Design System/Alert',
          component: ui_alert.Fc,
          parameters: { layout: 'centered' },
          tags: ['autodocs'],
          argTypes: {
            variant: {
              control: { type: 'select' },
              options: ['default', 'destructive', 'success', 'warning', 'info'],
            },
          },
        },
        Default = {
          render: () =>
            (0, jsx_runtime.jsxs)(ui_alert.Fc, {
              children: [
                (0, jsx_runtime.jsx)(Terminal, { className: 'h-4 w-4' }),
                (0, jsx_runtime.jsx)(ui_alert.XL, { children: 'Heads up!' }),
                (0, jsx_runtime.jsx)(ui_alert.TN, {
                  children: 'You can add components to your app using the cli.',
                }),
              ],
            }),
        },
        Destructive = {
          render: () =>
            (0, jsx_runtime.jsxs)(ui_alert.Fc, {
              variant: 'destructive',
              children: [
                (0, jsx_runtime.jsx)(circle_alert.A, { className: 'h-4 w-4' }),
                (0, jsx_runtime.jsx)(ui_alert.XL, { children: 'Error' }),
                (0, jsx_runtime.jsx)(ui_alert.TN, {
                  children: 'Your session has expired. Please log in again.',
                }),
              ],
            }),
        },
        Success = {
          render: () =>
            (0, jsx_runtime.jsxs)(ui_alert.Fc, {
              variant: 'success',
              children: [
                (0, jsx_runtime.jsx)(CircleCheck, { className: 'h-4 w-4' }),
                (0, jsx_runtime.jsx)(ui_alert.XL, { children: 'Success!' }),
                (0, jsx_runtime.jsx)(ui_alert.TN, {
                  children: 'Your changes have been saved successfully.',
                }),
              ],
            }),
        },
        Info = {
          render: () =>
            (0, jsx_runtime.jsxs)(ui_alert.Fc, {
              variant: 'info',
              children: [
                (0, jsx_runtime.jsx)(info.A, { className: 'h-4 w-4' }),
                (0, jsx_runtime.jsx)(ui_alert.XL, { children: 'Information' }),
                (0, jsx_runtime.jsx)(ui_alert.TN, {
                  children:
                    'This is an informational message for your reference.',
                }),
              ],
            }),
        },
        Warning = {
          render: () =>
            (0, jsx_runtime.jsxs)(ui_alert.Fc, {
              variant: 'warning',
              children: [
                (0, jsx_runtime.jsx)(circle_alert.A, { className: 'h-4 w-4' }),
                (0, jsx_runtime.jsx)(ui_alert.XL, { children: 'Warning' }),
                (0, jsx_runtime.jsx)(ui_alert.TN, {
                  children:
                    'Please review this important information before proceeding.',
                }),
              ],
            }),
        },
        SimpleAlert = {
          render: () =>
            (0, jsx_runtime.jsx)(ui_alert.Fc, {
              children: (0, jsx_runtime.jsx)(ui_alert.TN, {
                children: 'This is a simple alert without a title or icon.',
              }),
            }),
        },
        MultipleAlerts = {
          render: () =>
            (0, jsx_runtime.jsxs)('div', {
              className: 'space-y-4',
              children: [
                (0, jsx_runtime.jsxs)(ui_alert.Fc, {
                  children: [
                    (0, jsx_runtime.jsx)(Terminal, { className: 'h-4 w-4' }),
                    (0, jsx_runtime.jsx)(ui_alert.XL, {
                      children: 'Default Alert',
                    }),
                    (0, jsx_runtime.jsx)(ui_alert.TN, {
                      children:
                        'This is a default alert with standard styling.',
                    }),
                  ],
                }),
                (0, jsx_runtime.jsxs)(ui_alert.Fc, {
                  variant: 'destructive',
                  children: [
                    (0, jsx_runtime.jsx)(circle_alert.A, {
                      className: 'h-4 w-4',
                    }),
                    (0, jsx_runtime.jsx)(ui_alert.XL, {
                      children: 'Destructive Alert',
                    }),
                    (0, jsx_runtime.jsx)(ui_alert.TN, {
                      children:
                        'This alert indicates an error or destructive action.',
                    }),
                  ],
                }),
                (0, jsx_runtime.jsxs)(ui_alert.Fc, {
                  variant: 'success',
                  children: [
                    (0, jsx_runtime.jsx)(CircleCheck, { className: 'h-4 w-4' }),
                    (0, jsx_runtime.jsx)(ui_alert.XL, {
                      children: 'Success Alert',
                    }),
                    (0, jsx_runtime.jsx)(ui_alert.TN, {
                      children: 'This alert indicates a successful operation.',
                    }),
                  ],
                }),
                (0, jsx_runtime.jsxs)(ui_alert.Fc, {
                  variant: 'warning',
                  children: [
                    (0, jsx_runtime.jsx)(info.A, { className: 'h-4 w-4' }),
                    (0, jsx_runtime.jsx)(ui_alert.XL, {
                      children: 'Warning Alert',
                    }),
                    (0, jsx_runtime.jsx)(ui_alert.TN, {
                      children: 'This alert provides a warning message.',
                    }),
                  ],
                }),
                (0, jsx_runtime.jsxs)(ui_alert.Fc, {
                  variant: 'info',
                  children: [
                    (0, jsx_runtime.jsx)(info.A, { className: 'h-4 w-4' }),
                    (0, jsx_runtime.jsx)(ui_alert.XL, {
                      children: 'Info Alert',
                    }),
                    (0, jsx_runtime.jsx)(ui_alert.TN, {
                      children: 'This alert provides informational content.',
                    }),
                  ],
                }),
              ],
            }),
        },
        LongContent = {
          render: () =>
            (0, jsx_runtime.jsxs)(ui_alert.Fc, {
              className: 'max-w-2xl',
              children: [
                (0, jsx_runtime.jsx)(circle_alert.A, { className: 'h-4 w-4' }),
                (0, jsx_runtime.jsx)(ui_alert.XL, {
                  children: 'Important Notice',
                }),
                (0, jsx_runtime.jsx)(ui_alert.TN, {
                  children:
                    'This is an alert with longer content to demonstrate how it handles multiple lines of text. The alert component should gracefully handle longer descriptions while maintaining proper spacing and readability. You can include multiple paragraphs, lists, or any other content that needs to be displayed to the user.',
                }),
              ],
            }),
        },
        CustomStyling = {
          render: () =>
            (0, jsx_runtime.jsxs)(ui_alert.Fc, {
              className:
                'bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200 dark:from-purple-950 dark:to-pink-950 dark:border-purple-800',
              children: [
                (0, jsx_runtime.jsx)(ui_alert.XL, {
                  className: 'text-purple-900 dark:text-purple-100',
                  children: 'Custom Styled Alert',
                }),
                (0, jsx_runtime.jsx)(ui_alert.TN, {
                  className: 'text-purple-700 dark:text-purple-300',
                  children:
                    'This alert demonstrates custom styling with gradient backgrounds and custom colors.',
                }),
              ],
            }),
        },
        __namedExportsOrder = [
          'Default',
          'Destructive',
          'Success',
          'Info',
          'Warning',
          'SimpleAlert',
          'MultipleAlerts',
          'LongContent',
          'CustomStyling',
        ]
      ;((Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              "{\n  render: () => <Alert>\n      <Terminal className='h-4 w-4' />\n      <AlertTitle>Heads up!</AlertTitle>\n      <AlertDescription>\n        You can add components to your app using the cli.\n      </AlertDescription>\n    </Alert>\n}",
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (Destructive.parameters = {
          ...Destructive.parameters,
          docs: {
            ...Destructive.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <Alert variant='destructive'>\n      <AlertCircle className='h-4 w-4' />\n      <AlertTitle>Error</AlertTitle>\n      <AlertDescription>\n        Your session has expired. Please log in again.\n      </AlertDescription>\n    </Alert>\n}",
              ...Destructive.parameters?.docs?.source,
            },
          },
        }),
        (Success.parameters = {
          ...Success.parameters,
          docs: {
            ...Success.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <Alert variant='success'>\n      <CheckCircle2 className='h-4 w-4' />\n      <AlertTitle>Success!</AlertTitle>\n      <AlertDescription>\n        Your changes have been saved successfully.\n      </AlertDescription>\n    </Alert>\n}",
              ...Success.parameters?.docs?.source,
            },
          },
        }),
        (Info.parameters = {
          ...Info.parameters,
          docs: {
            ...Info.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <Alert variant='info'>\n      <InfoIcon className='h-4 w-4' />\n      <AlertTitle>Information</AlertTitle>\n      <AlertDescription>\n        This is an informational message for your reference.\n      </AlertDescription>\n    </Alert>\n}",
              ...Info.parameters?.docs?.source,
            },
          },
        }),
        (Warning.parameters = {
          ...Warning.parameters,
          docs: {
            ...Warning.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <Alert variant='warning'>\n      <AlertCircle className='h-4 w-4' />\n      <AlertTitle>Warning</AlertTitle>\n      <AlertDescription>\n        Please review this important information before proceeding.\n      </AlertDescription>\n    </Alert>\n}",
              ...Warning.parameters?.docs?.source,
            },
          },
        }),
        (SimpleAlert.parameters = {
          ...SimpleAlert.parameters,
          docs: {
            ...SimpleAlert.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <Alert>\n      <AlertDescription>\n        This is a simple alert without a title or icon.\n      </AlertDescription>\n    </Alert>\n}',
              ...SimpleAlert.parameters?.docs?.source,
            },
          },
        }),
        (MultipleAlerts.parameters = {
          ...MultipleAlerts.parameters,
          docs: {
            ...MultipleAlerts.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <div className='space-y-4'>\n      <Alert>\n        <Terminal className='h-4 w-4' />\n        <AlertTitle>Default Alert</AlertTitle>\n        <AlertDescription>\n          This is a default alert with standard styling.\n        </AlertDescription>\n      </Alert>\n\n      <Alert variant='destructive'>\n        <AlertCircle className='h-4 w-4' />\n        <AlertTitle>Destructive Alert</AlertTitle>\n        <AlertDescription>\n          This alert indicates an error or destructive action.\n        </AlertDescription>\n      </Alert>\n\n      <Alert variant='success'>\n        <CheckCircle2 className='h-4 w-4' />\n        <AlertTitle>Success Alert</AlertTitle>\n        <AlertDescription>\n          This alert indicates a successful operation.\n        </AlertDescription>\n      </Alert>\n\n      <Alert variant='warning'>\n        <InfoIcon className='h-4 w-4' />\n        <AlertTitle>Warning Alert</AlertTitle>\n        <AlertDescription>\n          This alert provides a warning message.\n        </AlertDescription>\n      </Alert>\n\n      <Alert variant='info'>\n        <InfoIcon className='h-4 w-4' />\n        <AlertTitle>Info Alert</AlertTitle>\n        <AlertDescription>\n          This alert provides informational content.\n        </AlertDescription>\n      </Alert>\n    </div>\n}",
              ...MultipleAlerts.parameters?.docs?.source,
            },
          },
        }),
        (LongContent.parameters = {
          ...LongContent.parameters,
          docs: {
            ...LongContent.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <Alert className='max-w-2xl'>\n      <AlertCircle className='h-4 w-4' />\n      <AlertTitle>Important Notice</AlertTitle>\n      <AlertDescription>\n        This is an alert with longer content to demonstrate how it handles\n        multiple lines of text. The alert component should gracefully handle\n        longer descriptions while maintaining proper spacing and readability.\n        You can include multiple paragraphs, lists, or any other content that\n        needs to be displayed to the user.\n      </AlertDescription>\n    </Alert>\n}",
              ...LongContent.parameters?.docs?.source,
            },
          },
        }),
        (CustomStyling.parameters = {
          ...CustomStyling.parameters,
          docs: {
            ...CustomStyling.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <Alert className='bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200 dark:from-purple-950 dark:to-pink-950 dark:border-purple-800'>\n      <AlertTitle className='text-purple-900 dark:text-purple-100'>\n        Custom Styled Alert\n      </AlertTitle>\n      <AlertDescription className='text-purple-700 dark:text-purple-300'>\n        This alert demonstrates custom styling with gradient backgrounds and\n        custom colors.\n      </AlertDescription>\n    </Alert>\n}",
              ...CustomStyling.parameters?.docs?.source,
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
