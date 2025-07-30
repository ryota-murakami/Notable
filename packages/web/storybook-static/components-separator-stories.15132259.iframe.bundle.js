'use strict'
;(self.webpackChunk_notable_web = self.webpackChunk_notable_web || []).push([
  [7221],
  {
    './components/ui/separator.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { w: () => Separator })
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
        ),
        _lib_utils__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__('./lib/utils.ts')
      function cov_lsz184s3a() {
        var path =
            '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/separator.tsx',
          global = new Function('return this')(),
          gcv = '__coverage__',
          coverage = global[gcv] || (global[gcv] = {})
        ;(coverage[path] &&
          'ad53c0bf7a164bded3279daab5cb438b8ee6b452' === coverage[path].hash) ||
          (coverage[path] = {
            path: '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/separator.tsx',
            statementMap: {
              0: {
                start: { line: 4, column: 32 },
                end: { line: 12, column: 2 },
              },
              1: {
                start: { line: 5, column: 4 },
                end: { line: 11, column: 7 },
              },
              2: {
                start: { line: 13, column: 0 },
                end: { line: 13, column: 36 },
              },
              3: {
                start: { line: 15, column: 0 },
                end: { line: 54, column: 2 },
              },
            },
            fnMap: {
              0: {
                name: '(anonymous_0)',
                decl: {
                  start: { line: 4, column: 49 },
                  end: { line: 4, column: 50 },
                },
                loc: {
                  start: { line: 4, column: 128 },
                  end: { line: 12, column: 1 },
                },
                line: 4,
              },
            },
            branchMap: {
              0: {
                loc: {
                  start: { line: 4, column: 63 },
                  end: { line: 4, column: 89 },
                },
                type: 'default-arg',
                locations: [
                  {
                    start: { line: 4, column: 77 },
                    end: { line: 4, column: 89 },
                  },
                ],
                line: 4,
              },
              1: {
                loc: {
                  start: { line: 4, column: 91 },
                  end: { line: 4, column: 108 },
                },
                type: 'default-arg',
                locations: [
                  {
                    start: { line: 4, column: 104 },
                    end: { line: 4, column: 108 },
                  },
                ],
                line: 4,
              },
              2: {
                loc: {
                  start: { line: 7, column: 14 },
                  end: { line: 7, column: 47 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 7, column: 27 },
                    end: { line: 7, column: 33 },
                  },
                  {
                    start: { line: 7, column: 36 },
                    end: { line: 7, column: 47 },
                  },
                ],
                line: 7,
              },
              3: {
                loc: {
                  start: { line: 8, column: 28 },
                  end: { line: 8, column: 64 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 8, column: 41 },
                    end: { line: 8, column: 50 },
                  },
                  {
                    start: { line: 8, column: 53 },
                    end: { line: 8, column: 64 },
                  },
                ],
                line: 8,
              },
              4: {
                loc: {
                  start: { line: 9, column: 44 },
                  end: { line: 9, column: 110 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 9, column: 75 },
                    end: { line: 9, column: 91 },
                  },
                  {
                    start: { line: 9, column: 94 },
                    end: { line: 9, column: 110 },
                  },
                ],
                line: 9,
              },
            },
            s: { 0: 0, 1: 0, 2: 0, 3: 0 },
            f: { 0: 0 },
            b: { 0: [0], 1: [0], 2: [0, 0], 3: [0, 0], 4: [0, 0] },
            inputSourceMap: {
              version: 3,
              sources: [
                '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/separator.tsx',
              ],
              sourcesContent: [
                "import * as React from 'react'\nimport { cn } from '../../lib/utils'\n\nexport interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {\n  orientation?: 'horizontal' | 'vertical'\n  decorative?: boolean\n}\n\nconst Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(\n  (\n    { className, orientation = 'horizontal', decorative = true, ...props },\n    ref\n  ) => {\n    return (\n      <div\n        ref={ref}\n        role={decorative ? 'none' : 'separator'}\n        aria-orientation={decorative ? undefined : orientation}\n        className={cn(\n          'shrink-0 bg-border',\n          orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',\n          className\n        )}\n        {...props}\n      />\n    )\n  }\n)\n\nSeparator.displayName = 'Separator'\n\nexport { Separator }\n",
              ],
              names: [],
              mappings:
                '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',
            },
            _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
            hash: 'ad53c0bf7a164bded3279daab5cb438b8ee6b452',
          })
        var actualCoverage = coverage[path]
        return (
          (cov_lsz184s3a = function () {
            return actualCoverage
          }),
          actualCoverage
        )
      }
      cov_lsz184s3a()
      const Separator =
        (cov_lsz184s3a().s[0]++,
        react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(
          (
            {
              className,
              orientation = (cov_lsz184s3a().b[0][0]++, 'horizontal'),
              decorative = (cov_lsz184s3a().b[1][0]++, !0),
              ...props
            },
            ref
          ) => (
            cov_lsz184s3a().f[0]++,
            cov_lsz184s3a().s[1]++,
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
              ref,
              role: decorative
                ? (cov_lsz184s3a().b[2][0]++, 'none')
                : (cov_lsz184s3a().b[2][1]++, 'separator'),
              'aria-orientation': decorative
                ? void cov_lsz184s3a().b[3][0]++
                : (cov_lsz184s3a().b[3][1]++, orientation),
              className: (0, _lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(
                'shrink-0 bg-border',
                'horizontal' === orientation
                  ? (cov_lsz184s3a().b[4][0]++, 'h-[1px] w-full')
                  : (cov_lsz184s3a().b[4][1]++, 'h-full w-[1px]'),
                className
              ),
              ...props,
            })
          )
        ))
      ;(cov_lsz184s3a().s[2]++,
        (Separator.displayName = 'Separator'),
        cov_lsz184s3a().s[3]++,
        (Separator.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Separator',
          props: {
            orientation: {
              required: !1,
              tsType: {
                name: 'union',
                raw: "'horizontal' | 'vertical'",
                elements: [
                  { name: 'literal', value: "'horizontal'" },
                  { name: 'literal', value: "'vertical'" },
                ],
              },
              description: '',
              defaultValue: { value: "'horizontal'", computed: !1 },
            },
            decorative: {
              required: !1,
              tsType: { name: 'boolean' },
              description: '',
              defaultValue: { value: 'true', computed: !1 },
            },
          },
        }))
    },
    './design-system/components/separator.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      ;(__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          ContentDivider: () => ContentDivider,
          CustomStyles: () => CustomStyles,
          Default: () => Default,
          Horizontal: () => Horizontal,
          InCard: () => InCard,
          Navigation: () => Navigation,
          ProfileCard: () => ProfileCard,
          Timeline: () => Timeline,
          Toolbar: () => Toolbar,
          Vertical: () => Vertical,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        }))
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        _components_ui_separator__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__('./components/ui/separator.tsx')
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: 'Design System/Layout/Separator',
          component: _components_ui_separator__WEBPACK_IMPORTED_MODULE_1__.w,
          tags: ['autodocs'],
          argTypes: {
            orientation: {
              control: 'radio',
              options: ['horizontal', 'vertical'],
              description: 'The orientation of the separator',
            },
            decorative: {
              control: 'boolean',
              description: 'Whether the separator is decorative or semantic',
            },
          },
        },
        Default = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                  'div',
                  {
                    className: 'space-y-1',
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        'h4',
                        {
                          className: 'text-sm font-medium leading-none',
                          children: 'Notable',
                        }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        'p',
                        {
                          className: 'text-sm text-muted-foreground',
                          children: 'A modern note-taking application.',
                        }
                      ),
                    ],
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _components_ui_separator__WEBPACK_IMPORTED_MODULE_1__.w,
                  { className: 'my-4' }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                  'div',
                  {
                    className: 'flex h-5 items-center space-x-4 text-sm',
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        'div',
                        { children: 'Blog' }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _components_ui_separator__WEBPACK_IMPORTED_MODULE_1__.w,
                        { orientation: 'vertical' }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        'div',
                        { children: 'Docs' }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _components_ui_separator__WEBPACK_IMPORTED_MODULE_1__.w,
                        { orientation: 'vertical' }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        'div',
                        { children: 'Source' }
                      ),
                    ],
                  }
                ),
              ],
            }),
        },
        Horizontal = {
          args: { orientation: 'horizontal' },
          render: (args) =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              className: 'w-full',
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                  children: 'Content above separator',
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _components_ui_separator__WEBPACK_IMPORTED_MODULE_1__.w,
                  { ...args, className: 'my-4' }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                  children: 'Content below separator',
                }),
              ],
            }),
        },
        Vertical = {
          args: { orientation: 'vertical' },
          render: (args) =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              className: 'flex h-20 items-center',
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                  children: 'Left content',
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _components_ui_separator__WEBPACK_IMPORTED_MODULE_1__.w,
                  { ...args, className: 'mx-4' }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                  children: 'Right content',
                }),
              ],
            }),
        },
        InCard = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              className: 'w-96 rounded-lg border bg-card p-6',
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                  'div',
                  {
                    className: 'space-y-1',
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        'h3',
                        {
                          className: 'text-lg font-semibold',
                          children: 'Account Settings',
                        }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        'p',
                        {
                          className: 'text-sm text-muted-foreground',
                          children: 'Manage your account preferences',
                        }
                      ),
                    ],
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _components_ui_separator__WEBPACK_IMPORTED_MODULE_1__.w,
                  { className: 'my-6' }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                  'div',
                  {
                    className: 'space-y-4',
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                        'div',
                        {
                          className: 'space-y-2',
                          children: [
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              'label',
                              {
                                className: 'text-sm font-medium',
                                children: 'Username',
                              }
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              'input',
                              {
                                type: 'text',
                                placeholder: '@username',
                                className: 'w-full px-3 py-2 border rounded-md',
                              }
                            ),
                          ],
                        }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                        'div',
                        {
                          className: 'space-y-2',
                          children: [
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              'label',
                              {
                                className: 'text-sm font-medium',
                                children: 'Email',
                              }
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              'input',
                              {
                                type: 'email',
                                placeholder: 'email@example.com',
                                className: 'w-full px-3 py-2 border rounded-md',
                              }
                            ),
                          ],
                        }
                      ),
                    ],
                  }
                ),
              ],
            }),
        },
        Navigation = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('nav', {
              className: 'flex items-center space-x-4',
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('a', {
                  href: '#',
                  className: 'text-sm font-medium hover:underline',
                  children: 'Home',
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _components_ui_separator__WEBPACK_IMPORTED_MODULE_1__.w,
                  { orientation: 'vertical', className: 'h-4' }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('a', {
                  href: '#',
                  className: 'text-sm font-medium hover:underline',
                  children: 'About',
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _components_ui_separator__WEBPACK_IMPORTED_MODULE_1__.w,
                  { orientation: 'vertical', className: 'h-4' }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('a', {
                  href: '#',
                  className: 'text-sm font-medium hover:underline',
                  children: 'Services',
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _components_ui_separator__WEBPACK_IMPORTED_MODULE_1__.w,
                  { orientation: 'vertical', className: 'h-4' }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('a', {
                  href: '#',
                  className: 'text-sm font-medium hover:underline',
                  children: 'Contact',
                }),
              ],
            }),
        },
        ProfileCard = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              className: 'w-80 rounded-lg border bg-card',
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                  className: 'p-6',
                  children: (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                    className: 'flex items-center space-x-4',
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        'div',
                        { className: 'h-12 w-12 rounded-full bg-muted' }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                        'div',
                        {
                          children: [
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              'h3',
                              {
                                className: 'font-semibold',
                                children: 'John Doe',
                              }
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              'p',
                              {
                                className: 'text-sm text-muted-foreground',
                                children: 'Software Engineer',
                              }
                            ),
                          ],
                        }
                      ),
                    ],
                  }),
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _components_ui_separator__WEBPACK_IMPORTED_MODULE_1__.w,
                  {}
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                  className: 'p-6',
                  children: (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                    className: 'grid grid-cols-3 text-center',
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                        'div',
                        {
                          children: [
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              'p',
                              {
                                className: 'text-2xl font-semibold',
                                children: '152',
                              }
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              'p',
                              {
                                className: 'text-sm text-muted-foreground',
                                children: 'Notes',
                              }
                            ),
                          ],
                        }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _components_ui_separator__WEBPACK_IMPORTED_MODULE_1__.w,
                        { orientation: 'vertical', className: 'mx-auto' }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                        'div',
                        {
                          children: [
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              'p',
                              {
                                className: 'text-2xl font-semibold',
                                children: '28',
                              }
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              'p',
                              {
                                className: 'text-sm text-muted-foreground',
                                children: 'Tags',
                              }
                            ),
                          ],
                        }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _components_ui_separator__WEBPACK_IMPORTED_MODULE_1__.w,
                        { orientation: 'vertical', className: 'mx-auto' }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                        'div',
                        {
                          children: [
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              'p',
                              {
                                className: 'text-2xl font-semibold',
                                children: '1.2k',
                              }
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              'p',
                              {
                                className: 'text-sm text-muted-foreground',
                                children: 'Words',
                              }
                            ),
                          ],
                        }
                      ),
                    ],
                  }),
                }),
              ],
            }),
        },
        Timeline = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              className: 'space-y-4',
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                  'div',
                  {
                    className: 'flex gap-4',
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                        'div',
                        {
                          className: 'flex flex-col items-center',
                          children: [
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              'div',
                              { className: 'h-3 w-3 rounded-full bg-primary' }
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              _components_ui_separator__WEBPACK_IMPORTED_MODULE_1__.w,
                              { orientation: 'vertical', className: 'h-20' }
                            ),
                          ],
                        }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                        'div',
                        {
                          className: 'space-y-2 pb-4',
                          children: [
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              'p',
                              {
                                className: 'text-sm font-medium',
                                children: 'Project Started',
                              }
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              'p',
                              {
                                className: 'text-sm text-muted-foreground',
                                children: 'January 1, 2024',
                              }
                            ),
                          ],
                        }
                      ),
                    ],
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                  'div',
                  {
                    className: 'flex gap-4',
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                        'div',
                        {
                          className: 'flex flex-col items-center',
                          children: [
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              'div',
                              { className: 'h-3 w-3 rounded-full bg-primary' }
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              _components_ui_separator__WEBPACK_IMPORTED_MODULE_1__.w,
                              { orientation: 'vertical', className: 'h-20' }
                            ),
                          ],
                        }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                        'div',
                        {
                          className: 'space-y-2 pb-4',
                          children: [
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              'p',
                              {
                                className: 'text-sm font-medium',
                                children: 'First Release',
                              }
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              'p',
                              {
                                className: 'text-sm text-muted-foreground',
                                children: 'March 15, 2024',
                              }
                            ),
                          ],
                        }
                      ),
                    ],
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                  'div',
                  {
                    className: 'flex gap-4',
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        'div',
                        {
                          className: 'flex flex-col items-center',
                          children: (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            'div',
                            {
                              className:
                                'h-3 w-3 rounded-full bg-muted-foreground',
                            }
                          ),
                        }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                        'div',
                        {
                          className: 'space-y-2',
                          children: [
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              'p',
                              {
                                className: 'text-sm font-medium',
                                children: 'Next Milestone',
                              }
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              'p',
                              {
                                className: 'text-sm text-muted-foreground',
                                children: 'Coming Soon',
                              }
                            ),
                          ],
                        }
                      ),
                    ],
                  }
                ),
              ],
            }),
        },
        Toolbar = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              className: 'flex items-center rounded-md border p-1',
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  'button',
                  {
                    className: 'px-3 py-1.5 text-sm hover:bg-accent rounded',
                    children: 'Bold',
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  'button',
                  {
                    className: 'px-3 py-1.5 text-sm hover:bg-accent rounded',
                    children: 'Italic',
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  'button',
                  {
                    className: 'px-3 py-1.5 text-sm hover:bg-accent rounded',
                    children: 'Underline',
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _components_ui_separator__WEBPACK_IMPORTED_MODULE_1__.w,
                  { orientation: 'vertical', className: 'mx-1 h-6' }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  'button',
                  {
                    className: 'px-3 py-1.5 text-sm hover:bg-accent rounded',
                    children: 'Left',
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  'button',
                  {
                    className: 'px-3 py-1.5 text-sm hover:bg-accent rounded',
                    children: 'Center',
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  'button',
                  {
                    className: 'px-3 py-1.5 text-sm hover:bg-accent rounded',
                    children: 'Right',
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _components_ui_separator__WEBPACK_IMPORTED_MODULE_1__.w,
                  { orientation: 'vertical', className: 'mx-1 h-6' }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  'button',
                  {
                    className: 'px-3 py-1.5 text-sm hover:bg-accent rounded',
                    children: 'Link',
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  'button',
                  {
                    className: 'px-3 py-1.5 text-sm hover:bg-accent rounded',
                    children: 'Image',
                  }
                ),
              ],
            }),
        },
        CustomStyles = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              className: 'space-y-8',
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                  'div',
                  {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        'p',
                        {
                          className: 'text-sm text-muted-foreground mb-2',
                          children: 'Default',
                        }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _components_ui_separator__WEBPACK_IMPORTED_MODULE_1__.w,
                        {}
                      ),
                    ],
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                  'div',
                  {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        'p',
                        {
                          className: 'text-sm text-muted-foreground mb-2',
                          children: 'Thick (h-1)',
                        }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _components_ui_separator__WEBPACK_IMPORTED_MODULE_1__.w,
                        { className: 'h-1' }
                      ),
                    ],
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                  'div',
                  {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        'p',
                        {
                          className: 'text-sm text-muted-foreground mb-2',
                          children: 'Dashed',
                        }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _components_ui_separator__WEBPACK_IMPORTED_MODULE_1__.w,
                        { className: 'border-dashed border-t-2 h-0' }
                      ),
                    ],
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                  'div',
                  {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        'p',
                        {
                          className: 'text-sm text-muted-foreground mb-2',
                          children: 'Dotted',
                        }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _components_ui_separator__WEBPACK_IMPORTED_MODULE_1__.w,
                        { className: 'border-dotted border-t-2 h-0' }
                      ),
                    ],
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                  'div',
                  {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        'p',
                        {
                          className: 'text-sm text-muted-foreground mb-2',
                          children: 'Custom Color',
                        }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _components_ui_separator__WEBPACK_IMPORTED_MODULE_1__.w,
                        { className: 'bg-primary' }
                      ),
                    ],
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                  'div',
                  {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        'p',
                        {
                          className: 'text-sm text-muted-foreground mb-2',
                          children: 'Gradient',
                        }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        'div',
                        {
                          className:
                            'h-[1px] w-full bg-gradient-to-r from-transparent via-foreground to-transparent opacity-20',
                        }
                      ),
                    ],
                  }
                ),
              ],
            }),
        },
        ContentDivider = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
              'article',
              {
                className: 'prose max-w-2xl',
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    'h2',
                    {
                      className: 'text-2xl font-bold mb-4',
                      children: 'Introduction',
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                    className: 'text-muted-foreground mb-6',
                    children:
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                  }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _components_ui_separator__WEBPACK_IMPORTED_MODULE_1__.w,
                    { className: 'my-8' }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    'h2',
                    {
                      className: 'text-2xl font-bold mb-4',
                      children: 'Main Content',
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                    className: 'text-muted-foreground mb-4',
                    children:
                      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                  }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                    className: 'text-muted-foreground mb-6',
                    children:
                      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                  }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _components_ui_separator__WEBPACK_IMPORTED_MODULE_1__.w,
                    { className: 'my-8' }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    'h2',
                    {
                      className: 'text-2xl font-bold mb-4',
                      children: 'Conclusion',
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                    className: 'text-muted-foreground',
                    children:
                      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                  }),
                ],
              }
            ),
        },
        __namedExportsOrder = [
          'Default',
          'Horizontal',
          'Vertical',
          'InCard',
          'Navigation',
          'ProfileCard',
          'Timeline',
          'Toolbar',
          'CustomStyles',
          'ContentDivider',
        ]
      ;((Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              "{\n  render: () => <div>\n      <div className='space-y-1'>\n        <h4 className='text-sm font-medium leading-none'>Notable</h4>\n        <p className='text-sm text-muted-foreground'>\n          A modern note-taking application.\n        </p>\n      </div>\n      <Separator className='my-4' />\n      <div className='flex h-5 items-center space-x-4 text-sm'>\n        <div>Blog</div>\n        <Separator orientation='vertical' />\n        <div>Docs</div>\n        <Separator orientation='vertical' />\n        <div>Source</div>\n      </div>\n    </div>\n}",
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (Horizontal.parameters = {
          ...Horizontal.parameters,
          docs: {
            ...Horizontal.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    orientation: 'horizontal'\n  },\n  render: args => <div className='w-full'>\n      <p>Content above separator</p>\n      <Separator {...args} className='my-4' />\n      <p>Content below separator</p>\n    </div>\n}",
              ...Horizontal.parameters?.docs?.source,
            },
          },
        }),
        (Vertical.parameters = {
          ...Vertical.parameters,
          docs: {
            ...Vertical.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    orientation: 'vertical'\n  },\n  render: args => <div className='flex h-20 items-center'>\n      <div>Left content</div>\n      <Separator {...args} className='mx-4' />\n      <div>Right content</div>\n    </div>\n}",
              ...Vertical.parameters?.docs?.source,
            },
          },
        }),
        (InCard.parameters = {
          ...InCard.parameters,
          docs: {
            ...InCard.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <div className='w-96 rounded-lg border bg-card p-6'>\n      <div className='space-y-1'>\n        <h3 className='text-lg font-semibold'>Account Settings</h3>\n        <p className='text-sm text-muted-foreground'>\n          Manage your account preferences\n        </p>\n      </div>\n      <Separator className='my-6' />\n      <div className='space-y-4'>\n        <div className='space-y-2'>\n          <label className='text-sm font-medium'>Username</label>\n          <input type='text' placeholder='@username' className='w-full px-3 py-2 border rounded-md' />\n        </div>\n        <div className='space-y-2'>\n          <label className='text-sm font-medium'>Email</label>\n          <input type='email' placeholder='email@example.com' className='w-full px-3 py-2 border rounded-md' />\n        </div>\n      </div>\n    </div>\n}",
              ...InCard.parameters?.docs?.source,
            },
          },
        }),
        (Navigation.parameters = {
          ...Navigation.parameters,
          docs: {
            ...Navigation.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <nav className='flex items-center space-x-4'>\n      <a href='#' className='text-sm font-medium hover:underline'>\n        Home\n      </a>\n      <Separator orientation='vertical' className='h-4' />\n      <a href='#' className='text-sm font-medium hover:underline'>\n        About\n      </a>\n      <Separator orientation='vertical' className='h-4' />\n      <a href='#' className='text-sm font-medium hover:underline'>\n        Services\n      </a>\n      <Separator orientation='vertical' className='h-4' />\n      <a href='#' className='text-sm font-medium hover:underline'>\n        Contact\n      </a>\n    </nav>\n}",
              ...Navigation.parameters?.docs?.source,
            },
          },
        }),
        (ProfileCard.parameters = {
          ...ProfileCard.parameters,
          docs: {
            ...ProfileCard.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <div className='w-80 rounded-lg border bg-card'>\n      <div className='p-6'>\n        <div className='flex items-center space-x-4'>\n          <div className='h-12 w-12 rounded-full bg-muted' />\n          <div>\n            <h3 className='font-semibold'>John Doe</h3>\n            <p className='text-sm text-muted-foreground'>Software Engineer</p>\n          </div>\n        </div>\n      </div>\n      <Separator />\n      <div className='p-6'>\n        <div className='grid grid-cols-3 text-center'>\n          <div>\n            <p className='text-2xl font-semibold'>152</p>\n            <p className='text-sm text-muted-foreground'>Notes</p>\n          </div>\n          <Separator orientation='vertical' className='mx-auto' />\n          <div>\n            <p className='text-2xl font-semibold'>28</p>\n            <p className='text-sm text-muted-foreground'>Tags</p>\n          </div>\n          <Separator orientation='vertical' className='mx-auto' />\n          <div>\n            <p className='text-2xl font-semibold'>1.2k</p>\n            <p className='text-sm text-muted-foreground'>Words</p>\n          </div>\n        </div>\n      </div>\n    </div>\n}",
              ...ProfileCard.parameters?.docs?.source,
            },
          },
        }),
        (Timeline.parameters = {
          ...Timeline.parameters,
          docs: {
            ...Timeline.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <div className='space-y-4'>\n      <div className='flex gap-4'>\n        <div className='flex flex-col items-center'>\n          <div className='h-3 w-3 rounded-full bg-primary' />\n          <Separator orientation='vertical' className='h-20' />\n        </div>\n        <div className='space-y-2 pb-4'>\n          <p className='text-sm font-medium'>Project Started</p>\n          <p className='text-sm text-muted-foreground'>January 1, 2024</p>\n        </div>\n      </div>\n      <div className='flex gap-4'>\n        <div className='flex flex-col items-center'>\n          <div className='h-3 w-3 rounded-full bg-primary' />\n          <Separator orientation='vertical' className='h-20' />\n        </div>\n        <div className='space-y-2 pb-4'>\n          <p className='text-sm font-medium'>First Release</p>\n          <p className='text-sm text-muted-foreground'>March 15, 2024</p>\n        </div>\n      </div>\n      <div className='flex gap-4'>\n        <div className='flex flex-col items-center'>\n          <div className='h-3 w-3 rounded-full bg-muted-foreground' />\n        </div>\n        <div className='space-y-2'>\n          <p className='text-sm font-medium'>Next Milestone</p>\n          <p className='text-sm text-muted-foreground'>Coming Soon</p>\n        </div>\n      </div>\n    </div>\n}",
              ...Timeline.parameters?.docs?.source,
            },
          },
        }),
        (Toolbar.parameters = {
          ...Toolbar.parameters,
          docs: {
            ...Toolbar.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <div className='flex items-center rounded-md border p-1'>\n      <button className='px-3 py-1.5 text-sm hover:bg-accent rounded'>\n        Bold\n      </button>\n      <button className='px-3 py-1.5 text-sm hover:bg-accent rounded'>\n        Italic\n      </button>\n      <button className='px-3 py-1.5 text-sm hover:bg-accent rounded'>\n        Underline\n      </button>\n      <Separator orientation='vertical' className='mx-1 h-6' />\n      <button className='px-3 py-1.5 text-sm hover:bg-accent rounded'>\n        Left\n      </button>\n      <button className='px-3 py-1.5 text-sm hover:bg-accent rounded'>\n        Center\n      </button>\n      <button className='px-3 py-1.5 text-sm hover:bg-accent rounded'>\n        Right\n      </button>\n      <Separator orientation='vertical' className='mx-1 h-6' />\n      <button className='px-3 py-1.5 text-sm hover:bg-accent rounded'>\n        Link\n      </button>\n      <button className='px-3 py-1.5 text-sm hover:bg-accent rounded'>\n        Image\n      </button>\n    </div>\n}",
              ...Toolbar.parameters?.docs?.source,
            },
          },
        }),
        (CustomStyles.parameters = {
          ...CustomStyles.parameters,
          docs: {
            ...CustomStyles.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <div className='space-y-8'>\n      <div>\n        <p className='text-sm text-muted-foreground mb-2'>Default</p>\n        <Separator />\n      </div>\n      <div>\n        <p className='text-sm text-muted-foreground mb-2'>Thick (h-1)</p>\n        <Separator className='h-1' />\n      </div>\n      <div>\n        <p className='text-sm text-muted-foreground mb-2'>Dashed</p>\n        <Separator className='border-dashed border-t-2 h-0' />\n      </div>\n      <div>\n        <p className='text-sm text-muted-foreground mb-2'>Dotted</p>\n        <Separator className='border-dotted border-t-2 h-0' />\n      </div>\n      <div>\n        <p className='text-sm text-muted-foreground mb-2'>Custom Color</p>\n        <Separator className='bg-primary' />\n      </div>\n      <div>\n        <p className='text-sm text-muted-foreground mb-2'>Gradient</p>\n        <div className='h-[1px] w-full bg-gradient-to-r from-transparent via-foreground to-transparent opacity-20' />\n      </div>\n    </div>\n}",
              ...CustomStyles.parameters?.docs?.source,
            },
          },
        }),
        (ContentDivider.parameters = {
          ...ContentDivider.parameters,
          docs: {
            ...ContentDivider.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <article className='prose max-w-2xl'>\n      <h2 className='text-2xl font-bold mb-4'>Introduction</h2>\n      <p className='text-muted-foreground mb-6'>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod\n        tempor incididunt ut labore et dolore magna aliqua.\n      </p>\n\n      <Separator className='my-8' />\n\n      <h2 className='text-2xl font-bold mb-4'>Main Content</h2>\n      <p className='text-muted-foreground mb-4'>\n        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi\n        ut aliquip ex ea commodo consequat.\n      </p>\n      <p className='text-muted-foreground mb-6'>\n        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum\n        dolore eu fugiat nulla pariatur.\n      </p>\n\n      <Separator className='my-8' />\n\n      <h2 className='text-2xl font-bold mb-4'>Conclusion</h2>\n      <p className='text-muted-foreground'>\n        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\n        officia deserunt mollit anim id est laborum.\n      </p>\n    </article>\n}",
              ...ContentDivider.parameters?.docs?.source,
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
