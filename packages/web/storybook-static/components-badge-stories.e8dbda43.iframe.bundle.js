'use strict'
;(self.webpackChunk_notable_web = self.webpackChunk_notable_web || []).push([
  [1],
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
    './design-system/components/badge.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      ;(__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          AllVariants: () => AllVariants,
          CountBadges: () => CountBadges,
          Default: () => Default,
          Destructive: () => Destructive,
          FeatureBadges: () => FeatureBadges,
          Info: () => Info,
          Outline: () => Outline,
          Secondary: () => Secondary,
          StatusBadges: () => StatusBadges,
          Success: () => Success,
          TagBadges: () => TagBadges,
          Warning: () => Warning,
          WithIcons: () => WithIcons,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        }))
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        _badge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './design-system/components/badge.tsx'
        )
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: 'Design System/Components/Badge',
          component: _badge__WEBPACK_IMPORTED_MODULE_1__.E,
          parameters: { layout: 'centered' },
          tags: ['autodocs'],
          argTypes: {
            variant: {
              control: { type: 'select' },
              options: [
                'default',
                'secondary',
                'destructive',
                'outline',
                'success',
                'warning',
                'info',
              ],
            },
          },
        },
        Default = { args: { children: 'Badge' } },
        Secondary = { args: { variant: 'secondary', children: 'Secondary' } },
        Destructive = {
          args: { variant: 'destructive', children: 'Destructive' },
        },
        Outline = { args: { variant: 'outline', children: 'Outline' } },
        Success = { args: { variant: 'success', children: 'Success' } },
        Warning = { args: { variant: 'warning', children: 'Warning' } },
        Info = { args: { variant: 'info', children: 'Info' } },
        AllVariants = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              style: {
                display: 'flex',
                gap: '0.5rem',
                flexWrap: 'wrap',
                alignItems: 'center',
              },
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _badge__WEBPACK_IMPORTED_MODULE_1__.E,
                  { children: 'Default' }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _badge__WEBPACK_IMPORTED_MODULE_1__.E,
                  { variant: 'secondary', children: 'Secondary' }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _badge__WEBPACK_IMPORTED_MODULE_1__.E,
                  { variant: 'destructive', children: 'Destructive' }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _badge__WEBPACK_IMPORTED_MODULE_1__.E,
                  { variant: 'outline', children: 'Outline' }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _badge__WEBPACK_IMPORTED_MODULE_1__.E,
                  { variant: 'success', children: 'Success' }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _badge__WEBPACK_IMPORTED_MODULE_1__.E,
                  { variant: 'warning', children: 'Warning' }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _badge__WEBPACK_IMPORTED_MODULE_1__.E,
                  { variant: 'info', children: 'Info' }
                ),
              ],
            }),
        },
        StatusBadges = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              style: {
                display: 'flex',
                gap: '0.5rem',
                flexWrap: 'wrap',
                alignItems: 'center',
              },
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _badge__WEBPACK_IMPORTED_MODULE_1__.E,
                  { variant: 'success', children: 'Active' }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _badge__WEBPACK_IMPORTED_MODULE_1__.E,
                  { variant: 'warning', children: 'Pending' }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _badge__WEBPACK_IMPORTED_MODULE_1__.E,
                  { variant: 'destructive', children: 'Failed' }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _badge__WEBPACK_IMPORTED_MODULE_1__.E,
                  { variant: 'info', children: 'Draft' }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _badge__WEBPACK_IMPORTED_MODULE_1__.E,
                  { variant: 'secondary', children: 'Archived' }
                ),
              ],
            }),
        },
        CountBadges = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              style: { display: 'flex', gap: '0.5rem', alignItems: 'center' },
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _badge__WEBPACK_IMPORTED_MODULE_1__.E,
                  { children: '3' }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _badge__WEBPACK_IMPORTED_MODULE_1__.E,
                  { variant: 'secondary', children: '12' }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _badge__WEBPACK_IMPORTED_MODULE_1__.E,
                  { variant: 'destructive', children: '99+' }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _badge__WEBPACK_IMPORTED_MODULE_1__.E,
                  { variant: 'info', children: 'NEW' }
                ),
              ],
            }),
        },
        WithIcons = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              style: {
                display: 'flex',
                gap: '0.5rem',
                flexWrap: 'wrap',
                alignItems: 'center',
              },
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                  _badge__WEBPACK_IMPORTED_MODULE_1__.E,
                  {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        'span',
                        { style: { marginRight: '0.25rem' }, children: '🔥' }
                      ),
                      'Hot',
                    ],
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                  _badge__WEBPACK_IMPORTED_MODULE_1__.E,
                  {
                    variant: 'success',
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        'span',
                        { style: { marginRight: '0.25rem' }, children: '✓' }
                      ),
                      'Verified',
                    ],
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                  _badge__WEBPACK_IMPORTED_MODULE_1__.E,
                  {
                    variant: 'warning',
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        'span',
                        { style: { marginRight: '0.25rem' }, children: '⚠️' }
                      ),
                      'Attention',
                    ],
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                  _badge__WEBPACK_IMPORTED_MODULE_1__.E,
                  {
                    variant: 'info',
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        'span',
                        { style: { marginRight: '0.25rem' }, children: 'ℹ️' }
                      ),
                      'Info',
                    ],
                  }
                ),
              ],
            }),
        },
        TagBadges = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              style: { display: 'flex', gap: '0.5rem', flexWrap: 'wrap' },
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _badge__WEBPACK_IMPORTED_MODULE_1__.E,
                  { variant: 'outline', children: 'React' }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _badge__WEBPACK_IMPORTED_MODULE_1__.E,
                  { variant: 'outline', children: 'TypeScript' }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _badge__WEBPACK_IMPORTED_MODULE_1__.E,
                  { variant: 'outline', children: 'Next.js' }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _badge__WEBPACK_IMPORTED_MODULE_1__.E,
                  { variant: 'outline', children: 'Tailwind CSS' }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _badge__WEBPACK_IMPORTED_MODULE_1__.E,
                  { variant: 'outline', children: 'Plate.js' }
                ),
              ],
            }),
        },
        FeatureBadges = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              style: { display: 'flex', gap: '0.5rem', flexWrap: 'wrap' },
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _badge__WEBPACK_IMPORTED_MODULE_1__.E,
                  { variant: 'info', children: 'Beta' }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _badge__WEBPACK_IMPORTED_MODULE_1__.E,
                  { variant: 'success', children: 'Pro' }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _badge__WEBPACK_IMPORTED_MODULE_1__.E,
                  { variant: 'warning', children: 'Experimental' }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _badge__WEBPACK_IMPORTED_MODULE_1__.E,
                  { variant: 'destructive', children: 'Deprecated' }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _badge__WEBPACK_IMPORTED_MODULE_1__.E,
                  { children: 'Free' }
                ),
              ],
            }),
        },
        __namedExportsOrder = [
          'Default',
          'Secondary',
          'Destructive',
          'Outline',
          'Success',
          'Warning',
          'Info',
          'AllVariants',
          'StatusBadges',
          'CountBadges',
          'WithIcons',
          'TagBadges',
          'FeatureBadges',
        ]
      ;((Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource: "{\n  args: {\n    children: 'Badge'\n  }\n}",
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (Secondary.parameters = {
          ...Secondary.parameters,
          docs: {
            ...Secondary.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    variant: 'secondary',\n    children: 'Secondary'\n  }\n}",
              ...Secondary.parameters?.docs?.source,
            },
          },
        }),
        (Destructive.parameters = {
          ...Destructive.parameters,
          docs: {
            ...Destructive.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    variant: 'destructive',\n    children: 'Destructive'\n  }\n}",
              ...Destructive.parameters?.docs?.source,
            },
          },
        }),
        (Outline.parameters = {
          ...Outline.parameters,
          docs: {
            ...Outline.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    variant: 'outline',\n    children: 'Outline'\n  }\n}",
              ...Outline.parameters?.docs?.source,
            },
          },
        }),
        (Success.parameters = {
          ...Success.parameters,
          docs: {
            ...Success.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    variant: 'success',\n    children: 'Success'\n  }\n}",
              ...Success.parameters?.docs?.source,
            },
          },
        }),
        (Warning.parameters = {
          ...Warning.parameters,
          docs: {
            ...Warning.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    variant: 'warning',\n    children: 'Warning'\n  }\n}",
              ...Warning.parameters?.docs?.source,
            },
          },
        }),
        (Info.parameters = {
          ...Info.parameters,
          docs: {
            ...Info.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    variant: 'info',\n    children: 'Info'\n  }\n}",
              ...Info.parameters?.docs?.source,
            },
          },
        }),
        (AllVariants.parameters = {
          ...AllVariants.parameters,
          docs: {
            ...AllVariants.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <div style={{\n    display: 'flex',\n    gap: '0.5rem',\n    flexWrap: 'wrap',\n    alignItems: 'center'\n  }}>\n      <Badge>Default</Badge>\n      <Badge variant='secondary'>Secondary</Badge>\n      <Badge variant='destructive'>Destructive</Badge>\n      <Badge variant='outline'>Outline</Badge>\n      <Badge variant='success'>Success</Badge>\n      <Badge variant='warning'>Warning</Badge>\n      <Badge variant='info'>Info</Badge>\n    </div>\n}",
              ...AllVariants.parameters?.docs?.source,
            },
          },
        }),
        (StatusBadges.parameters = {
          ...StatusBadges.parameters,
          docs: {
            ...StatusBadges.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <div style={{\n    display: 'flex',\n    gap: '0.5rem',\n    flexWrap: 'wrap',\n    alignItems: 'center'\n  }}>\n      <Badge variant='success'>Active</Badge>\n      <Badge variant='warning'>Pending</Badge>\n      <Badge variant='destructive'>Failed</Badge>\n      <Badge variant='info'>Draft</Badge>\n      <Badge variant='secondary'>Archived</Badge>\n    </div>\n}",
              ...StatusBadges.parameters?.docs?.source,
            },
          },
        }),
        (CountBadges.parameters = {
          ...CountBadges.parameters,
          docs: {
            ...CountBadges.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <div style={{\n    display: 'flex',\n    gap: '0.5rem',\n    alignItems: 'center'\n  }}>\n      <Badge>3</Badge>\n      <Badge variant='secondary'>12</Badge>\n      <Badge variant='destructive'>99+</Badge>\n      <Badge variant='info'>NEW</Badge>\n    </div>\n}",
              ...CountBadges.parameters?.docs?.source,
            },
          },
        }),
        (WithIcons.parameters = {
          ...WithIcons.parameters,
          docs: {
            ...WithIcons.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <div style={{\n    display: 'flex',\n    gap: '0.5rem',\n    flexWrap: 'wrap',\n    alignItems: 'center'\n  }}>\n      <Badge>\n        <span style={{\n        marginRight: '0.25rem'\n      }}>🔥</span>\n        Hot\n      </Badge>\n      <Badge variant='success'>\n        <span style={{\n        marginRight: '0.25rem'\n      }}>✓</span>\n        Verified\n      </Badge>\n      <Badge variant='warning'>\n        <span style={{\n        marginRight: '0.25rem'\n      }}>⚠️</span>\n        Attention\n      </Badge>\n      <Badge variant='info'>\n        <span style={{\n        marginRight: '0.25rem'\n      }}>ℹ️</span>\n        Info\n      </Badge>\n    </div>\n}",
              ...WithIcons.parameters?.docs?.source,
            },
          },
        }),
        (TagBadges.parameters = {
          ...TagBadges.parameters,
          docs: {
            ...TagBadges.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <div style={{\n    display: 'flex',\n    gap: '0.5rem',\n    flexWrap: 'wrap'\n  }}>\n      <Badge variant='outline'>React</Badge>\n      <Badge variant='outline'>TypeScript</Badge>\n      <Badge variant='outline'>Next.js</Badge>\n      <Badge variant='outline'>Tailwind CSS</Badge>\n      <Badge variant='outline'>Plate.js</Badge>\n    </div>\n}",
              ...TagBadges.parameters?.docs?.source,
            },
          },
        }),
        (FeatureBadges.parameters = {
          ...FeatureBadges.parameters,
          docs: {
            ...FeatureBadges.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <div style={{\n    display: 'flex',\n    gap: '0.5rem',\n    flexWrap: 'wrap'\n  }}>\n      <Badge variant='info'>Beta</Badge>\n      <Badge variant='success'>Pro</Badge>\n      <Badge variant='warning'>Experimental</Badge>\n      <Badge variant='destructive'>Deprecated</Badge>\n      <Badge>Free</Badge>\n    </div>\n}",
              ...FeatureBadges.parameters?.docs?.source,
            },
          },
        }))
    },
    './design-system/components/badge.tsx': (
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
      function cov_2re9urm0tj() {
        var path =
            '/Users/ryota.murakami/repository/Notable/packages/web/design-system/components/badge.tsx',
          global = new Function('return this')(),
          gcv = '__coverage__',
          coverage = global[gcv] || (global[gcv] = {})
        ;(coverage[path] &&
          '6d33ae1fe9c25ade8dd796905a9cbae18584556f' === coverage[path].hash) ||
          (coverage[path] = {
            path: '/Users/ryota.murakami/repository/Notable/packages/web/design-system/components/badge.tsx',
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
                '/Users/ryota.murakami/repository/Notable/packages/web/design-system/components/badge.tsx',
              ],
              sourcesContent: [
                "import * as React from 'react'\nimport { cva, type VariantProps } from 'class-variance-authority'\nimport { cn } from '../../lib/utils'\n\nconst badgeVariants = cva(\n  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',\n  {\n    variants: {\n      variant: {\n        default:\n          'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',\n        secondary:\n          'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',\n        destructive:\n          'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',\n        outline: 'text-foreground',\n        success:\n          'border-transparent bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',\n        warning:\n          'border-transparent bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400',\n        info: 'border-transparent bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400',\n      },\n    },\n    defaultVariants: {\n      variant: 'default',\n    },\n  }\n)\n\nexport interface BadgeProps\n  extends React.HTMLAttributes<HTMLDivElement>,\n    VariantProps<typeof badgeVariants> {}\n\nfunction Badge({ className, variant, ...props }: BadgeProps) {\n  return (\n    <div className={cn(badgeVariants({ variant }), className)} {...props} />\n  )\n}\n\nexport { Badge, badgeVariants }\n",
              ],
              names: [],
              mappings:
                ';AAAA,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAC7B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,AAAmB,CAAlB,AAAmB,CAAlB,AAAmB,CAAlB,AAAmB,CAAlB,AAAmB,CAAlB,AAAmB,CAAlB,AAAmB,CAAlB,AAAmB,CAAlB,AAAmB,CAAlB,AAAmB,CAAlB,AAAmB,CAAlB,AAAmB,CAAlB,AAAmB,CAAlB,AAAmB,CAAC,AAAnB,CAAoB,AAAnB,CAAoB,AAAnB,CAAoB,AAAnB,CAAoB,AAAnB,CAAoB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAChE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAEnC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACvB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACxK;IACE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACR,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YACP,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACL,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YAC7E,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACP,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YACnF,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACT,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YACzF,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YAC1B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACL,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YAC3F,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACL,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YAC/F,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QAC7F,CAAC;IACH,CAAC;IACD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACf,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;IACpB,CAAC;AACH;AAOF,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,AAAY,CAAX,AAAY,CAAX,AAAY,CAAX,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;IACxD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,cACL,KAAC,CAAC,CAAC,CAAC;QAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;AAE3E;AAEA,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC',
            },
            _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
            hash: '6d33ae1fe9c25ade8dd796905a9cbae18584556f',
          })
        var actualCoverage = coverage[path]
        return (
          (cov_2re9urm0tj = function () {
            return actualCoverage
          }),
          actualCoverage
        )
      }
      cov_2re9urm0tj()
      const badgeVariants =
        (cov_2re9urm0tj().s[0]++,
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
          cov_2re9urm0tj().f[0]++,
          cov_2re9urm0tj().s[1]++,
          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
            className: (0, _lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(
              badgeVariants({ variant }),
              className
            ),
            ...props,
          })
        )
      }
      ;(cov_2re9urm0tj().s[2]++,
        (Badge.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Badge',
          composes: ['VariantProps'],
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
