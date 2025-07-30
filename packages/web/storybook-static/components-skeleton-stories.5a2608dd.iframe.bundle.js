'use strict'
;(self.webpackChunk_notable_web = self.webpackChunk_notable_web || []).push([
  [9477],
  {
    './design-system/components/skeleton.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      ;(__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          BlogPost: () => BlogPost,
          Card: () => Card,
          Circle: () => Circle,
          CustomAnimation: () => CustomAnimation,
          Default: () => Default,
          Form: () => Form,
          Grid: () => Grid,
          Lines: () => Lines,
          Navigation: () => Navigation,
          ProfileCard: () => ProfileCard,
          Shimmer: () => Shimmer,
          Table: () => Table,
          Wave: () => Wave,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => skeleton_stories,
        }))
      var jsx_runtime = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        utils =
          (__webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
          ),
          __webpack_require__('./lib/utils.ts'))
      function cov_1xocrjmn8m() {
        var path =
            '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/skeleton.tsx',
          global = new Function('return this')(),
          gcv = '__coverage__',
          coverage = global[gcv] || (global[gcv] = {})
        ;(coverage[path] &&
          '364f150d1b57692e6e1dbbf4d5ce26dca3f156f6' === coverage[path].hash) ||
          (coverage[path] = {
            path: '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/skeleton.tsx',
            statementMap: {
              0: {
                start: { line: 5, column: 27 },
                end: { line: 11, column: 5 },
              },
              1: {
                start: { line: 12, column: 27 },
                end: { line: 16, column: 5 },
              },
              2: {
                start: { line: 17, column: 4 },
                end: { line: 20, column: 7 },
              },
              3: {
                start: { line: 23, column: 0 },
                end: { line: 89, column: 2 },
              },
            },
            fnMap: {
              0: {
                name: 'Skeleton',
                decl: {
                  start: { line: 4, column: 9 },
                  end: { line: 4, column: 17 },
                },
                loc: {
                  start: { line: 4, column: 80 },
                  end: { line: 21, column: 1 },
                },
                line: 4,
              },
            },
            branchMap: {
              0: {
                loc: {
                  start: { line: 4, column: 31 },
                  end: { line: 4, column: 50 },
                },
                type: 'default-arg',
                locations: [
                  {
                    start: { line: 4, column: 41 },
                    end: { line: 4, column: 50 },
                  },
                ],
                line: 4,
              },
              1: {
                loc: {
                  start: { line: 4, column: 52 },
                  end: { line: 4, column: 66 },
                },
                type: 'default-arg',
                locations: [
                  {
                    start: { line: 4, column: 62 },
                    end: { line: 4, column: 66 },
                  },
                ],
                line: 4,
              },
            },
            s: { 0: 0, 1: 0, 2: 0, 3: 0 },
            f: { 0: 0 },
            b: { 0: [0], 1: [0] },
            inputSourceMap: {
              version: 3,
              sources: [
                '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/skeleton.tsx',
              ],
              sourcesContent: [
                "import * as React from 'react'\nimport { cn } from '@/lib/utils'\n\ninterface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {\n  variant?: 'default' | 'shimmer' | 'wave'\n  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'\n}\n\nfunction Skeleton({\n  className,\n  variant = 'default',\n  rounded = 'md',\n  ...props\n}: SkeletonProps) {\n  const roundedClasses = {\n    none: 'rounded-none',\n    sm: 'rounded-sm',\n    md: 'rounded-md',\n    lg: 'rounded-lg',\n    full: 'rounded-full',\n  }\n\n  const variantClasses = {\n    default: 'animate-pulse bg-muted',\n    shimmer:\n      'bg-gradient-to-r from-muted via-muted-foreground/10 to-muted bg-[length:200%_100%] animate-shimmer',\n    wave: 'bg-muted relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-wave before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent',\n  }\n\n  return (\n    <div\n      className={cn(\n        variantClasses[variant],\n        roundedClasses[rounded],\n        className\n      )}\n      {...props}\n    />\n  )\n}\n\nexport { Skeleton, type SkeletonProps }\n",
              ],
              names: [],
              mappings:
                ';AAAA,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAC7B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAO/B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAChB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACT,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACnB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACd,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GACO,CAAC,CAAC;IAChB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACrB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACpB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QAChB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QAChB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QAChB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;IACtB;IAEA,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACrB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACjC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACL,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACtG,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;IACjN;IAEA,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,cACL,KAAC,CAAC,CAAC;QACD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACX,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACvB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACvB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QAET,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;AAGf;AAEA,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC',
            },
            _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
            hash: '364f150d1b57692e6e1dbbf4d5ce26dca3f156f6',
          })
        var actualCoverage = coverage[path]
        return (
          (cov_1xocrjmn8m = function () {
            return actualCoverage
          }),
          actualCoverage
        )
      }
      function Skeleton({
        className,
        variant = (cov_1xocrjmn8m().b[0][0]++, 'default'),
        rounded = (cov_1xocrjmn8m().b[1][0]++, 'md'),
        ...props
      }) {
        cov_1xocrjmn8m().f[0]++
        const roundedClasses =
            (cov_1xocrjmn8m().s[0]++,
            {
              none: 'rounded-none',
              sm: 'rounded-sm',
              md: 'rounded-md',
              lg: 'rounded-lg',
              full: 'rounded-full',
            }),
          variantClasses =
            (cov_1xocrjmn8m().s[1]++,
            {
              default: 'animate-pulse bg-muted',
              shimmer:
                'bg-gradient-to-r from-muted via-muted-foreground/10 to-muted bg-[length:200%_100%] animate-shimmer',
              wave: 'bg-muted relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-wave before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent',
            })
        return (
          cov_1xocrjmn8m().s[2]++,
          (0, jsx_runtime.jsx)('div', {
            className: (0, utils.cn)(
              variantClasses[variant],
              roundedClasses[rounded],
              className
            ),
            ...props,
          })
        )
      }
      ;(cov_1xocrjmn8m(),
        cov_1xocrjmn8m().s[3]++,
        (Skeleton.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Skeleton',
          props: {
            variant: {
              required: !1,
              tsType: {
                name: 'union',
                raw: "'default' | 'shimmer' | 'wave'",
                elements: [
                  { name: 'literal', value: "'default'" },
                  { name: 'literal', value: "'shimmer'" },
                  { name: 'literal', value: "'wave'" },
                ],
              },
              description: '',
              defaultValue: { value: "'default'", computed: !1 },
            },
            rounded: {
              required: !1,
              tsType: {
                name: 'union',
                raw: "'none' | 'sm' | 'md' | 'lg' | 'full'",
                elements: [
                  { name: 'literal', value: "'none'" },
                  { name: 'literal', value: "'sm'" },
                  { name: 'literal', value: "'md'" },
                  { name: 'literal', value: "'lg'" },
                  { name: 'literal', value: "'full'" },
                ],
              },
              description: '',
              defaultValue: { value: "'md'", computed: !1 },
            },
          },
        }))
      const skeleton_stories = {
          title: 'Design System/Skeleton',
          component: Skeleton,
          parameters: { layout: 'centered' },
          tags: ['autodocs'],
        },
        Default = {
          render: () =>
            (0, jsx_runtime.jsx)(Skeleton, { className: 'h-12 w-48' }),
        },
        Shimmer = {
          render: () =>
            (0, jsx_runtime.jsx)(Skeleton, {
              variant: 'shimmer',
              className: 'h-12 w-48',
            }),
        },
        Wave = {
          render: () =>
            (0, jsx_runtime.jsx)(Skeleton, {
              variant: 'wave',
              className: 'h-12 w-48',
            }),
        },
        Circle = {
          render: () =>
            (0, jsx_runtime.jsx)(Skeleton, {
              className: 'h-12 w-12 rounded-full',
            }),
        },
        Lines = {
          render: () =>
            (0, jsx_runtime.jsxs)('div', {
              className: 'space-y-2',
              children: [
                (0, jsx_runtime.jsx)(Skeleton, { className: 'h-4 w-full' }),
                (0, jsx_runtime.jsx)(Skeleton, { className: 'h-4 w-full' }),
                (0, jsx_runtime.jsx)(Skeleton, { className: 'h-4 w-3/4' }),
              ],
            }),
        },
        Card = {
          render: () =>
            (0, jsx_runtime.jsxs)('div', {
              className: 'flex flex-col space-y-3',
              children: [
                (0, jsx_runtime.jsx)(Skeleton, {
                  className: 'h-[125px] w-[250px] rounded-xl',
                }),
                (0, jsx_runtime.jsxs)('div', {
                  className: 'space-y-2',
                  children: [
                    (0, jsx_runtime.jsx)(Skeleton, {
                      className: 'h-4 w-[250px]',
                    }),
                    (0, jsx_runtime.jsx)(Skeleton, {
                      className: 'h-4 w-[200px]',
                    }),
                  ],
                }),
              ],
            }),
        },
        ProfileCard = {
          render: () =>
            (0, jsx_runtime.jsxs)('div', {
              className: 'flex items-center space-x-4',
              children: [
                (0, jsx_runtime.jsx)(Skeleton, {
                  className: 'h-12 w-12 rounded-full',
                }),
                (0, jsx_runtime.jsxs)('div', {
                  className: 'space-y-2',
                  children: [
                    (0, jsx_runtime.jsx)(Skeleton, {
                      className: 'h-4 w-[150px]',
                    }),
                    (0, jsx_runtime.jsx)(Skeleton, {
                      className: 'h-4 w-[100px]',
                    }),
                  ],
                }),
              ],
            }),
        },
        Table = {
          render: () =>
            (0, jsx_runtime.jsx)('div', {
              className: 'w-full',
              children: (0, jsx_runtime.jsx)('div', {
                className: 'space-y-2',
                children: Array.from({ length: 5 }).map((_, i) =>
                  (0, jsx_runtime.jsxs)(
                    'div',
                    {
                      className: 'flex items-center space-x-4',
                      children: [
                        (0, jsx_runtime.jsx)(Skeleton, {
                          className: 'h-10 w-10 rounded',
                        }),
                        (0, jsx_runtime.jsx)(Skeleton, {
                          className: 'h-4 flex-1',
                        }),
                        (0, jsx_runtime.jsx)(Skeleton, {
                          className: 'h-4 w-20',
                        }),
                        (0, jsx_runtime.jsx)(Skeleton, {
                          className: 'h-4 w-16',
                        }),
                      ],
                    },
                    i
                  )
                ),
              }),
            }),
        },
        Form = {
          render: () =>
            (0, jsx_runtime.jsxs)('div', {
              className: 'w-[400px] space-y-4',
              children: [
                (0, jsx_runtime.jsxs)('div', {
                  className: 'space-y-2',
                  children: [
                    (0, jsx_runtime.jsx)(Skeleton, { className: 'h-4 w-20' }),
                    (0, jsx_runtime.jsx)(Skeleton, {
                      className: 'h-10 w-full',
                    }),
                  ],
                }),
                (0, jsx_runtime.jsxs)('div', {
                  className: 'space-y-2',
                  children: [
                    (0, jsx_runtime.jsx)(Skeleton, { className: 'h-4 w-24' }),
                    (0, jsx_runtime.jsx)(Skeleton, {
                      className: 'h-10 w-full',
                    }),
                  ],
                }),
                (0, jsx_runtime.jsxs)('div', {
                  className: 'space-y-2',
                  children: [
                    (0, jsx_runtime.jsx)(Skeleton, { className: 'h-4 w-28' }),
                    (0, jsx_runtime.jsx)(Skeleton, {
                      className: 'h-20 w-full',
                    }),
                  ],
                }),
                (0, jsx_runtime.jsx)(Skeleton, { className: 'h-10 w-32' }),
              ],
            }),
        },
        Grid = {
          render: () =>
            (0, jsx_runtime.jsx)('div', {
              className: 'grid grid-cols-3 gap-4',
              children: Array.from({ length: 9 }).map((_, i) =>
                (0, jsx_runtime.jsx)(Skeleton, { className: 'h-20 w-full' }, i)
              ),
            }),
        },
        BlogPost = {
          render: () =>
            (0, jsx_runtime.jsxs)('article', {
              className: 'w-full max-w-3xl',
              children: [
                (0, jsx_runtime.jsx)(Skeleton, { className: 'h-8 w-3/4 mb-4' }),
                (0, jsx_runtime.jsxs)('div', {
                  className: 'flex items-center space-x-4 mb-6',
                  children: [
                    (0, jsx_runtime.jsx)(Skeleton, {
                      className: 'h-10 w-10 rounded-full',
                    }),
                    (0, jsx_runtime.jsxs)('div', {
                      className: 'space-y-2',
                      children: [
                        (0, jsx_runtime.jsx)(Skeleton, {
                          className: 'h-4 w-24',
                        }),
                        (0, jsx_runtime.jsx)(Skeleton, {
                          className: 'h-3 w-32',
                        }),
                      ],
                    }),
                  ],
                }),
                (0, jsx_runtime.jsx)(Skeleton, {
                  className: 'h-[400px] w-full rounded-lg mb-6',
                }),
                (0, jsx_runtime.jsxs)('div', {
                  className: 'space-y-3',
                  children: [
                    (0, jsx_runtime.jsx)(Skeleton, { className: 'h-4 w-full' }),
                    (0, jsx_runtime.jsx)(Skeleton, { className: 'h-4 w-full' }),
                    (0, jsx_runtime.jsx)(Skeleton, { className: 'h-4 w-5/6' }),
                    (0, jsx_runtime.jsx)(Skeleton, { className: 'h-4 w-full' }),
                    (0, jsx_runtime.jsx)(Skeleton, { className: 'h-4 w-4/5' }),
                  ],
                }),
              ],
            }),
        },
        Navigation = {
          render: () =>
            (0, jsx_runtime.jsxs)('nav', {
              className: 'flex items-center justify-between w-full p-4',
              children: [
                (0, jsx_runtime.jsx)(Skeleton, { className: 'h-8 w-32' }),
                (0, jsx_runtime.jsxs)('div', {
                  className: 'flex items-center space-x-4',
                  children: [
                    (0, jsx_runtime.jsx)(Skeleton, { className: 'h-8 w-20' }),
                    (0, jsx_runtime.jsx)(Skeleton, { className: 'h-8 w-20' }),
                    (0, jsx_runtime.jsx)(Skeleton, { className: 'h-8 w-20' }),
                    (0, jsx_runtime.jsx)(Skeleton, {
                      className: 'h-8 w-8 rounded-full',
                    }),
                  ],
                }),
              ],
            }),
        },
        CustomAnimation = {
          render: () =>
            (0, jsx_runtime.jsxs)('div', {
              className: 'space-y-4',
              children: [
                (0, jsx_runtime.jsxs)('div', {
                  children: [
                    (0, jsx_runtime.jsx)('p', {
                      className: 'text-sm text-muted-foreground mb-2',
                      children: 'Default animation',
                    }),
                    (0, jsx_runtime.jsx)(Skeleton, { className: 'h-12 w-48' }),
                  ],
                }),
                (0, jsx_runtime.jsxs)('div', {
                  children: [
                    (0, jsx_runtime.jsx)('p', {
                      className: 'text-sm text-muted-foreground mb-2',
                      children: 'Slower animation',
                    }),
                    (0, jsx_runtime.jsx)(Skeleton, {
                      className:
                        'h-12 w-48 animate-pulse [animation-duration:2s]',
                    }),
                  ],
                }),
                (0, jsx_runtime.jsxs)('div', {
                  children: [
                    (0, jsx_runtime.jsx)('p', {
                      className: 'text-sm text-muted-foreground mb-2',
                      children: 'No animation',
                    }),
                    (0, jsx_runtime.jsx)(Skeleton, {
                      className: 'h-12 w-48 animate-none bg-muted',
                    }),
                  ],
                }),
              ],
            }),
        },
        __namedExportsOrder = [
          'Default',
          'Shimmer',
          'Wave',
          'Circle',
          'Lines',
          'Card',
          'ProfileCard',
          'Table',
          'Form',
          'Grid',
          'BlogPost',
          'Navigation',
          'CustomAnimation',
        ]
      ;((Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              "{\n  render: () => <Skeleton className='h-12 w-48' />\n}",
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (Shimmer.parameters = {
          ...Shimmer.parameters,
          docs: {
            ...Shimmer.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <Skeleton variant='shimmer' className='h-12 w-48' />\n}",
              ...Shimmer.parameters?.docs?.source,
            },
          },
        }),
        (Wave.parameters = {
          ...Wave.parameters,
          docs: {
            ...Wave.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <Skeleton variant='wave' className='h-12 w-48' />\n}",
              ...Wave.parameters?.docs?.source,
            },
          },
        }),
        (Circle.parameters = {
          ...Circle.parameters,
          docs: {
            ...Circle.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <Skeleton className='h-12 w-12 rounded-full' />\n}",
              ...Circle.parameters?.docs?.source,
            },
          },
        }),
        (Lines.parameters = {
          ...Lines.parameters,
          docs: {
            ...Lines.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <div className='space-y-2'>\n      <Skeleton className='h-4 w-full' />\n      <Skeleton className='h-4 w-full' />\n      <Skeleton className='h-4 w-3/4' />\n    </div>\n}",
              ...Lines.parameters?.docs?.source,
            },
          },
        }),
        (Card.parameters = {
          ...Card.parameters,
          docs: {
            ...Card.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <div className='flex flex-col space-y-3'>\n      <Skeleton className='h-[125px] w-[250px] rounded-xl' />\n      <div className='space-y-2'>\n        <Skeleton className='h-4 w-[250px]' />\n        <Skeleton className='h-4 w-[200px]' />\n      </div>\n    </div>\n}",
              ...Card.parameters?.docs?.source,
            },
          },
        }),
        (ProfileCard.parameters = {
          ...ProfileCard.parameters,
          docs: {
            ...ProfileCard.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <div className='flex items-center space-x-4'>\n      <Skeleton className='h-12 w-12 rounded-full' />\n      <div className='space-y-2'>\n        <Skeleton className='h-4 w-[150px]' />\n        <Skeleton className='h-4 w-[100px]' />\n      </div>\n    </div>\n}",
              ...ProfileCard.parameters?.docs?.source,
            },
          },
        }),
        (Table.parameters = {
          ...Table.parameters,
          docs: {
            ...Table.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <div className='w-full'>\n      <div className='space-y-2'>\n        {Array.from({\n        length: 5\n      }).map((_, i) => <div key={i} className='flex items-center space-x-4'>\n            <Skeleton className='h-10 w-10 rounded' />\n            <Skeleton className='h-4 flex-1' />\n            <Skeleton className='h-4 w-20' />\n            <Skeleton className='h-4 w-16' />\n          </div>)}\n      </div>\n    </div>\n}",
              ...Table.parameters?.docs?.source,
            },
          },
        }),
        (Form.parameters = {
          ...Form.parameters,
          docs: {
            ...Form.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <div className='w-[400px] space-y-4'>\n      <div className='space-y-2'>\n        <Skeleton className='h-4 w-20' />\n        <Skeleton className='h-10 w-full' />\n      </div>\n      <div className='space-y-2'>\n        <Skeleton className='h-4 w-24' />\n        <Skeleton className='h-10 w-full' />\n      </div>\n      <div className='space-y-2'>\n        <Skeleton className='h-4 w-28' />\n        <Skeleton className='h-20 w-full' />\n      </div>\n      <Skeleton className='h-10 w-32' />\n    </div>\n}",
              ...Form.parameters?.docs?.source,
            },
          },
        }),
        (Grid.parameters = {
          ...Grid.parameters,
          docs: {
            ...Grid.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <div className='grid grid-cols-3 gap-4'>\n      {Array.from({\n      length: 9\n    }).map((_, i) => <Skeleton key={i} className='h-20 w-full' />)}\n    </div>\n}",
              ...Grid.parameters?.docs?.source,
            },
          },
        }),
        (BlogPost.parameters = {
          ...BlogPost.parameters,
          docs: {
            ...BlogPost.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <article className='w-full max-w-3xl'>\n      <Skeleton className='h-8 w-3/4 mb-4' />\n      <div className='flex items-center space-x-4 mb-6'>\n        <Skeleton className='h-10 w-10 rounded-full' />\n        <div className='space-y-2'>\n          <Skeleton className='h-4 w-24' />\n          <Skeleton className='h-3 w-32' />\n        </div>\n      </div>\n      <Skeleton className='h-[400px] w-full rounded-lg mb-6' />\n      <div className='space-y-3'>\n        <Skeleton className='h-4 w-full' />\n        <Skeleton className='h-4 w-full' />\n        <Skeleton className='h-4 w-5/6' />\n        <Skeleton className='h-4 w-full' />\n        <Skeleton className='h-4 w-4/5' />\n      </div>\n    </article>\n}",
              ...BlogPost.parameters?.docs?.source,
            },
          },
        }),
        (Navigation.parameters = {
          ...Navigation.parameters,
          docs: {
            ...Navigation.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <nav className='flex items-center justify-between w-full p-4'>\n      <Skeleton className='h-8 w-32' />\n      <div className='flex items-center space-x-4'>\n        <Skeleton className='h-8 w-20' />\n        <Skeleton className='h-8 w-20' />\n        <Skeleton className='h-8 w-20' />\n        <Skeleton className='h-8 w-8 rounded-full' />\n      </div>\n    </nav>\n}",
              ...Navigation.parameters?.docs?.source,
            },
          },
        }),
        (CustomAnimation.parameters = {
          ...CustomAnimation.parameters,
          docs: {
            ...CustomAnimation.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <div className='space-y-4'>\n      <div>\n        <p className='text-sm text-muted-foreground mb-2'>Default animation</p>\n        <Skeleton className='h-12 w-48' />\n      </div>\n      <div>\n        <p className='text-sm text-muted-foreground mb-2'>Slower animation</p>\n        <Skeleton className='h-12 w-48 animate-pulse [animation-duration:2s]' />\n      </div>\n      <div>\n        <p className='text-sm text-muted-foreground mb-2'>No animation</p>\n        <Skeleton className='h-12 w-48 animate-none bg-muted' />\n      </div>\n    </div>\n}",
              ...CustomAnimation.parameters?.docs?.source,
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
