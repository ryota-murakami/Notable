'use strict'
;(self.webpackChunk_notable_web = self.webpackChunk_notable_web || []).push([
  [7042],
  {
    './components/editor/plugins/basic-blocks-kit.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { h: () => BasicBlocksKit })
      var react = __webpack_require__(
          '../../node_modules/.pnpm/@platejs+core@49.1.13_@types+react@19.1.8_immer@10.1.1_react-dom@19.1.0_react@19.1.0__r_fc8440c0ba2acbec6acd6c03c7e5303e/node_modules/@platejs/core/dist/react/index.mjs'
        ),
        jsx_runtime = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
        )
      function cov_1mgoia4lm1() {
        var path =
            '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/blockquote-node.tsx',
          global = new Function('return this')(),
          gcv = '__coverage__',
          coverage = global[gcv] || (global[gcv] = {})
        ;(coverage[path] &&
          '6a2e90dcaa7f8eedd12fa0e50b199a34f79c280f' === coverage[path].hash) ||
          (coverage[path] = {
            path: '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/blockquote-node.tsx',
            statementMap: {
              0: { start: { line: 5, column: 4 }, end: { line: 9, column: 7 } },
              1: {
                start: { line: 11, column: 0 },
                end: { line: 15, column: 2 },
              },
            },
            fnMap: {
              0: {
                name: 'BlockquoteElement',
                decl: {
                  start: { line: 4, column: 16 },
                  end: { line: 4, column: 33 },
                },
                loc: {
                  start: { line: 4, column: 41 },
                  end: { line: 10, column: 1 },
                },
                line: 4,
              },
            },
            branchMap: {},
            s: { 0: 0, 1: 0 },
            f: { 0: 0 },
            b: {},
            inputSourceMap: {
              version: 3,
              sources: [
                '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/blockquote-node.tsx',
              ],
              sourcesContent: [
                "'use client'\n\nimport { PlateElement, type PlateElementProps } from 'platejs/react'\n\nexport function BlockquoteElement(props: PlateElementProps) {\n  return (\n    <PlateElement\n      as='blockquote'\n      className='my-1 border-l-2 pl-6 italic'\n      {...props}\n    />\n  )\n}\n",
              ],
              names: [],
              mappings:
                'AAAA,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;AAEX,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,AAAwB,CAAvB,AAAwB,CAAvB,AAAwB,CAAC,AAAxB,CAAC,AAAwB,CAAvB,AAAwB,CAAvB,AAAwB,CAAvB,AAAwB,CAAC,AAAxB,CAAC,AAAwB,CAAvB,AAAwB,CAAvB,AAAwB,CAAvB,AAAwB,CAAvB,AAAwB,CAAvB,AAAwB,CAAvB,CAAC,AAAsB,CAArB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;AAEpD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,AAAmB,CAAlB,AAAmB,CAAlB,AAAmB,CAAlB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;IACvD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,cACL,KAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACV,CAAC,CAAC,EAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACd,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACrC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;AAGf',
            },
            _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
            hash: '6a2e90dcaa7f8eedd12fa0e50b199a34f79c280f',
          })
        var actualCoverage = coverage[path]
        return (
          (cov_1mgoia4lm1 = function () {
            return actualCoverage
          }),
          actualCoverage
        )
      }
      function BlockquoteElement(props) {
        return (
          cov_1mgoia4lm1().f[0]++,
          cov_1mgoia4lm1().s[0]++,
          (0, jsx_runtime.jsx)(react.tc, {
            as: 'blockquote',
            className: 'my-1 border-l-2 pl-6 italic',
            ...props,
          })
        )
      }
      ;(cov_1mgoia4lm1(),
        cov_1mgoia4lm1().s[1]++,
        (BlockquoteElement.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'BlockquoteElement',
        }))
      __webpack_require__(
        '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
      )
      var dist = __webpack_require__(
        '../../node_modules/.pnpm/class-variance-authority@0.7.1/node_modules/class-variance-authority/dist/index.mjs'
      )
      function cov_1z8eueayne() {
        var path =
            '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/heading-node.tsx',
          global = new Function('return this')(),
          gcv = '__coverage__',
          coverage = global[gcv] || (global[gcv] = {})
        ;(coverage[path] &&
          '0ed968e6aeaf011763b643fb7202e4968f34cb01' === coverage[path].hash) ||
          (coverage[path] = {
            path: '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/heading-node.tsx',
            statementMap: {
              0: {
                start: { line: 6, column: 24 },
                end: { line: 17, column: 2 },
              },
              1: {
                start: { line: 19, column: 4 },
                end: { line: 26, column: 7 },
              },
              2: {
                start: { line: 29, column: 4 },
                end: { line: 32, column: 7 },
              },
              3: {
                start: { line: 35, column: 4 },
                end: { line: 38, column: 7 },
              },
              4: {
                start: { line: 41, column: 4 },
                end: { line: 44, column: 7 },
              },
              5: {
                start: { line: 47, column: 4 },
                end: { line: 50, column: 7 },
              },
              6: {
                start: { line: 53, column: 4 },
                end: { line: 56, column: 7 },
              },
              7: {
                start: { line: 59, column: 4 },
                end: { line: 62, column: 7 },
              },
              8: {
                start: { line: 64, column: 0 },
                end: { line: 77, column: 2 },
              },
              9: {
                start: { line: 78, column: 0 },
                end: { line: 82, column: 2 },
              },
              10: {
                start: { line: 83, column: 0 },
                end: { line: 87, column: 2 },
              },
              11: {
                start: { line: 88, column: 0 },
                end: { line: 92, column: 2 },
              },
              12: {
                start: { line: 93, column: 0 },
                end: { line: 97, column: 2 },
              },
              13: {
                start: { line: 98, column: 0 },
                end: { line: 102, column: 2 },
              },
              14: {
                start: { line: 103, column: 0 },
                end: { line: 107, column: 2 },
              },
            },
            fnMap: {
              0: {
                name: 'HeadingElement',
                decl: {
                  start: { line: 18, column: 16 },
                  end: { line: 18, column: 30 },
                },
                loc: {
                  start: { line: 18, column: 61 },
                  end: { line: 27, column: 1 },
                },
                line: 18,
              },
              1: {
                name: 'H1Element',
                decl: {
                  start: { line: 28, column: 16 },
                  end: { line: 28, column: 25 },
                },
                loc: {
                  start: { line: 28, column: 33 },
                  end: { line: 33, column: 1 },
                },
                line: 28,
              },
              2: {
                name: 'H2Element',
                decl: {
                  start: { line: 34, column: 16 },
                  end: { line: 34, column: 25 },
                },
                loc: {
                  start: { line: 34, column: 33 },
                  end: { line: 39, column: 1 },
                },
                line: 34,
              },
              3: {
                name: 'H3Element',
                decl: {
                  start: { line: 40, column: 16 },
                  end: { line: 40, column: 25 },
                },
                loc: {
                  start: { line: 40, column: 33 },
                  end: { line: 45, column: 1 },
                },
                line: 40,
              },
              4: {
                name: 'H4Element',
                decl: {
                  start: { line: 46, column: 16 },
                  end: { line: 46, column: 25 },
                },
                loc: {
                  start: { line: 46, column: 33 },
                  end: { line: 51, column: 1 },
                },
                line: 46,
              },
              5: {
                name: 'H5Element',
                decl: {
                  start: { line: 52, column: 16 },
                  end: { line: 52, column: 25 },
                },
                loc: {
                  start: { line: 52, column: 33 },
                  end: { line: 57, column: 1 },
                },
                line: 52,
              },
              6: {
                name: 'H6Element',
                decl: {
                  start: { line: 58, column: 16 },
                  end: { line: 58, column: 25 },
                },
                loc: {
                  start: { line: 58, column: 33 },
                  end: { line: 63, column: 1 },
                },
                line: 58,
              },
            },
            branchMap: {
              0: {
                loc: {
                  start: { line: 18, column: 33 },
                  end: { line: 18, column: 47 },
                },
                type: 'default-arg',
                locations: [
                  {
                    start: { line: 18, column: 43 },
                    end: { line: 18, column: 47 },
                  },
                ],
                line: 18,
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
            },
            f: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 },
            b: { 0: [0] },
            inputSourceMap: {
              version: 3,
              sources: [
                '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/heading-node.tsx',
              ],
              sourcesContent: [
                "'use client'\n\nimport * as React from 'react'\n\nimport type { PlateElementProps } from 'platejs/react'\n\nimport { cva, type VariantProps } from 'class-variance-authority'\nimport { PlateElement } from 'platejs/react'\n\nconst headingVariants = cva('relative mb-1', {\n  variants: {\n    variant: {\n      h1: 'mt-[1.6em] pb-1 font-heading text-4xl font-bold',\n      h2: 'mt-[1.4em] pb-px font-heading text-2xl font-semibold tracking-tight',\n      h3: 'mt-[1em] pb-px font-heading text-xl font-semibold tracking-tight',\n      h4: 'mt-[0.75em] font-heading text-lg font-semibold tracking-tight',\n      h5: 'mt-[0.75em] text-lg font-semibold tracking-tight',\n      h6: 'mt-[0.75em] text-base font-semibold tracking-tight',\n    },\n  },\n})\n\nexport function HeadingElement({\n  variant = 'h1',\n  ...props\n}: PlateElementProps & VariantProps<typeof headingVariants>) {\n  return (\n    <PlateElement\n      as={variant!}\n      className={headingVariants({ variant })}\n      {...props}\n    >\n      {props.children}\n    </PlateElement>\n  )\n}\n\nexport function H1Element(props: PlateElementProps) {\n  return <HeadingElement variant='h1' {...props} />\n}\n\nexport function H2Element(props: PlateElementProps) {\n  return <HeadingElement variant='h2' {...props} />\n}\n\nexport function H3Element(props: PlateElementProps) {\n  return <HeadingElement variant='h3' {...props} />\n}\n\nexport function H4Element(props: PlateElementProps) {\n  return <HeadingElement variant='h4' {...props} />\n}\n\nexport function H5Element(props: PlateElementProps) {\n  return <HeadingElement variant='h5' {...props} />\n}\n\nexport function H6Element(props: PlateElementProps) {\n  return <HeadingElement variant='h6' {...props} />\n}\n",
              ],
              names: [],
              mappings:
                'AAAA,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;AAEX,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAI7B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,AAAmB,CAAlB,AAAmB,CAAlB,AAAmB,CAAlB,AAAmB,CAAlB,AAAmB,CAAlB,AAAmB,CAAlB,AAAmB,CAAlB,AAAmB,CAAlB,AAAmB,CAAlB,AAAmB,CAAlB,AAAmB,CAAC,AAAnB,CAAoB,AAAnB,CAAoB,AAAnB,CAAoB,AAAnB,CAAoB,AAAnB,CAAC,AAAmB,CAAlB,AAAmB,CAAlB,AAAmB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAChE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAE3C,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;IAC3C,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACR,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YACP,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YACrD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YACzE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YACtE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CA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',
            },
            _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
            hash: '0ed968e6aeaf011763b643fb7202e4968f34cb01',
          })
        var actualCoverage = coverage[path]
        return (
          (cov_1z8eueayne = function () {
            return actualCoverage
          }),
          actualCoverage
        )
      }
      cov_1z8eueayne()
      const headingVariants =
        (cov_1z8eueayne().s[0]++,
        (0, dist.F)('relative mb-1', {
          variants: {
            variant: {
              h1: 'mt-[1.6em] pb-1 font-heading text-4xl font-bold',
              h2: 'mt-[1.4em] pb-px font-heading text-2xl font-semibold tracking-tight',
              h3: 'mt-[1em] pb-px font-heading text-xl font-semibold tracking-tight',
              h4: 'mt-[0.75em] font-heading text-lg font-semibold tracking-tight',
              h5: 'mt-[0.75em] text-lg font-semibold tracking-tight',
              h6: 'mt-[0.75em] text-base font-semibold tracking-tight',
            },
          },
        }))
      function HeadingElement({
        variant = (cov_1z8eueayne().b[0][0]++, 'h1'),
        ...props
      }) {
        return (
          cov_1z8eueayne().f[0]++,
          cov_1z8eueayne().s[1]++,
          (0, jsx_runtime.jsx)(react.tc, {
            as: variant,
            className: headingVariants({ variant }),
            ...props,
            children: props.children,
          })
        )
      }
      function H1Element(props) {
        return (
          cov_1z8eueayne().f[1]++,
          cov_1z8eueayne().s[2]++,
          (0, jsx_runtime.jsx)(HeadingElement, { variant: 'h1', ...props })
        )
      }
      function H2Element(props) {
        return (
          cov_1z8eueayne().f[2]++,
          cov_1z8eueayne().s[3]++,
          (0, jsx_runtime.jsx)(HeadingElement, { variant: 'h2', ...props })
        )
      }
      function H3Element(props) {
        return (
          cov_1z8eueayne().f[3]++,
          cov_1z8eueayne().s[4]++,
          (0, jsx_runtime.jsx)(HeadingElement, { variant: 'h3', ...props })
        )
      }
      function H4Element(props) {
        return (
          cov_1z8eueayne().f[4]++,
          cov_1z8eueayne().s[5]++,
          (0, jsx_runtime.jsx)(HeadingElement, { variant: 'h4', ...props })
        )
      }
      function H5Element(props) {
        return (
          cov_1z8eueayne().f[5]++,
          cov_1z8eueayne().s[6]++,
          (0, jsx_runtime.jsx)(HeadingElement, { variant: 'h5', ...props })
        )
      }
      function H6Element(props) {
        return (
          cov_1z8eueayne().f[6]++,
          cov_1z8eueayne().s[7]++,
          (0, jsx_runtime.jsx)(HeadingElement, { variant: 'h6', ...props })
        )
      }
      ;(cov_1z8eueayne().s[8]++,
        (HeadingElement.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'HeadingElement',
          props: {
            variant: {
              defaultValue: { value: "'h1'", computed: !1 },
              required: !1,
            },
          },
        }),
        cov_1z8eueayne().s[9]++,
        (H1Element.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'H1Element',
        }),
        cov_1z8eueayne().s[10]++,
        (H2Element.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'H2Element',
        }),
        cov_1z8eueayne().s[11]++,
        (H3Element.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'H3Element',
        }),
        cov_1z8eueayne().s[12]++,
        (H4Element.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'H4Element',
        }),
        cov_1z8eueayne().s[13]++,
        (H5Element.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'H5Element',
        }),
        cov_1z8eueayne().s[14]++,
        (H6Element.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'H6Element',
        }))
      var index_es = __webpack_require__(
          '../../node_modules/.pnpm/slate-react@0.117.4_react-dom@19.1.0_react@19.1.0__react@19.1.0_slate-dom@0.117.4_slate@0.117.2__slate@0.117.2/node_modules/slate-react/dist/index.es.js'
        ),
        utils = __webpack_require__('./lib/utils.ts')
      function cov_izhece8h0() {
        var path =
            '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/hr-node.tsx',
          global = new Function('return this')(),
          gcv = '__coverage__',
          coverage = global[gcv] || (global[gcv] = {})
        ;(coverage[path] &&
          '8d08247e07526e8487d5b845dfe60820ef4d3595' === coverage[path].hash) ||
          (coverage[path] = {
            path: '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/hr-node.tsx',
            statementMap: {
              0: {
                start: { line: 7, column: 21 },
                end: { line: 7, column: 34 },
              },
              1: {
                start: { line: 8, column: 21 },
                end: { line: 8, column: 34 },
              },
              2: {
                start: { line: 9, column: 20 },
                end: { line: 9, column: 32 },
              },
              3: {
                start: { line: 10, column: 4 },
                end: { line: 22, column: 7 },
              },
              4: {
                start: { line: 24, column: 0 },
                end: { line: 28, column: 2 },
              },
            },
            fnMap: {
              0: {
                name: 'HrElement',
                decl: {
                  start: { line: 6, column: 16 },
                  end: { line: 6, column: 25 },
                },
                loc: {
                  start: { line: 6, column: 33 },
                  end: { line: 23, column: 1 },
                },
                line: 6,
              },
            },
            branchMap: {
              0: {
                loc: {
                  start: { line: 17, column: 91 },
                  end: { line: 17, column: 146 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 17, column: 91 },
                    end: { line: 17, column: 99 },
                  },
                  {
                    start: { line: 17, column: 103 },
                    end: { line: 17, column: 110 },
                  },
                  {
                    start: { line: 17, column: 114 },
                    end: { line: 17, column: 146 },
                  },
                ],
                line: 17,
              },
              1: {
                loc: {
                  start: { line: 17, column: 148 },
                  end: { line: 17, column: 177 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 17, column: 148 },
                    end: { line: 17, column: 157 },
                  },
                  {
                    start: { line: 17, column: 161 },
                    end: { line: 17, column: 177 },
                  },
                ],
                line: 17,
              },
            },
            s: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 },
            f: { 0: 0 },
            b: { 0: [0, 0, 0], 1: [0, 0] },
            inputSourceMap: {
              version: 3,
              sources: [
                '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/hr-node.tsx',
              ],
              sourcesContent: [
                "'use client'\n\nimport * as React from 'react'\n\nimport type { PlateElementProps } from 'platejs/react'\n\nimport {\n  PlateElement,\n  useFocused,\n  useReadOnly,\n  useSelected,\n} from 'platejs/react'\n\nimport { cn } from '@/lib/utils'\n\nexport function HrElement(props: PlateElementProps) {\n  const readOnly = useReadOnly()\n  const selected = useSelected()\n  const focused = useFocused()\n\n  return (\n    <PlateElement {...props}>\n      <div className='py-6' contentEditable={false}>\n        <hr\n          className={cn(\n            'h-0.5 rounded-sm border-none bg-muted bg-clip-content',\n            selected && focused && 'ring-2 ring-ring ring-offset-2',\n            !readOnly && 'cursor-pointer'\n          )}\n        />\n      </div>\n      {props.children}\n    </PlateElement>\n  )\n}\n",
              ],
              names: [],
              mappings:
                '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',
            },
            _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
            hash: '8d08247e07526e8487d5b845dfe60820ef4d3595',
          })
        var actualCoverage = coverage[path]
        return (
          (cov_izhece8h0 = function () {
            return actualCoverage
          }),
          actualCoverage
        )
      }
      function HrElement(props) {
        cov_izhece8h0().f[0]++
        const readOnly = (cov_izhece8h0().s[0]++, (0, index_es.cQ)()),
          selected = (cov_izhece8h0().s[1]++, (0, index_es.f7)()),
          focused = (cov_izhece8h0().s[2]++, (0, index_es.zL)())
        return (
          cov_izhece8h0().s[3]++,
          (0, jsx_runtime.jsxs)(react.tc, {
            ...props,
            children: [
              (0, jsx_runtime.jsx)('div', {
                className: 'py-6',
                contentEditable: !1,
                children: (0, jsx_runtime.jsx)('hr', {
                  className: (0, utils.cn)(
                    'h-0.5 rounded-sm border-none bg-muted bg-clip-content',
                    (cov_izhece8h0().b[0][0]++,
                    selected &&
                      (cov_izhece8h0().b[0][1]++, focused) &&
                      (cov_izhece8h0().b[0][2]++,
                      'ring-2 ring-ring ring-offset-2')),
                    (cov_izhece8h0().b[1][0]++,
                    !readOnly && (cov_izhece8h0().b[1][1]++, 'cursor-pointer'))
                  ),
                }),
              }),
              props.children,
            ],
          })
        )
      }
      function cov_1ojqcrgaer() {
        var path =
            '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/paragraph-node.tsx',
          global = new Function('return this')(),
          gcv = '__coverage__',
          coverage = global[gcv] || (global[gcv] = {})
        ;(coverage[path] &&
          '6412d1d1c60e4c07a491a1526e5be93946218504' === coverage[path].hash) ||
          (coverage[path] = {
            path: '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/paragraph-node.tsx',
            statementMap: {
              0: {
                start: { line: 7, column: 4 },
                end: { line: 11, column: 7 },
              },
              1: {
                start: { line: 13, column: 0 },
                end: { line: 17, column: 2 },
              },
            },
            fnMap: {
              0: {
                name: 'ParagraphElement',
                decl: {
                  start: { line: 6, column: 16 },
                  end: { line: 6, column: 32 },
                },
                loc: {
                  start: { line: 6, column: 40 },
                  end: { line: 12, column: 1 },
                },
                line: 6,
              },
            },
            branchMap: {},
            s: { 0: 0, 1: 0 },
            f: { 0: 0 },
            b: {},
            inputSourceMap: {
              version: 3,
              sources: [
                '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/paragraph-node.tsx',
              ],
              sourcesContent: [
                "'use client'\n\nimport * as React from 'react'\n\nimport type { PlateElementProps } from 'platejs/react'\n\nimport { PlateElement } from 'platejs/react'\n\nimport { cn } from '@/lib/utils'\n\nexport function ParagraphElement(props: PlateElementProps) {\n  return (\n    <PlateElement {...props} className={cn('m-0 px-0 py-1')}>\n      {props.children}\n    </PlateElement>\n  )\n}\n",
              ],
              names: [],
              mappings:
                'AAAA,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;AAEX,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAI7B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAE3C,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAE/B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,AAAmB,CAAlB,AAAmB,CAAlB,AAAmB,CAAlB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;IACtD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,cACL,KAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;kBACrD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;AAGrB',
            },
            _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
            hash: '6412d1d1c60e4c07a491a1526e5be93946218504',
          })
        var actualCoverage = coverage[path]
        return (
          (cov_1ojqcrgaer = function () {
            return actualCoverage
          }),
          actualCoverage
        )
      }
      function ParagraphElement(props) {
        return (
          cov_1ojqcrgaer().f[0]++,
          cov_1ojqcrgaer().s[0]++,
          (0, jsx_runtime.jsx)(react.tc, {
            ...props,
            className: (0, utils.cn)('m-0 px-0 py-1'),
            children: props.children,
          })
        )
      }
      function cov_2cqkus68kw() {
        var path =
            '/Users/ryota.murakami/repository/Notable/packages/web/components/editor/plugins/basic-blocks-kit.tsx',
          global = new Function('return this')(),
          gcv = '__coverage__',
          coverage = global[gcv] || (global[gcv] = {})
        ;(coverage[path] &&
          '44e4b352c6d148772bc19337c8f8ba8c52d47ccf' === coverage[path].hash) ||
          (coverage[path] = {
            path: '/Users/ryota.murakami/repository/Notable/packages/web/components/editor/plugins/basic-blocks-kit.tsx',
            statementMap: {
              0: {
                start: { line: 9, column: 17 },
                end: { line: 16, column: 2 },
              },
              1: {
                start: { line: 17, column: 17 },
                end: { line: 24, column: 2 },
              },
              2: {
                start: { line: 25, column: 17 },
                end: { line: 32, column: 2 },
              },
              3: {
                start: { line: 33, column: 17 },
                end: { line: 40, column: 2 },
              },
              4: {
                start: { line: 41, column: 17 },
                end: { line: 48, column: 2 },
              },
              5: {
                start: { line: 49, column: 17 },
                end: { line: 56, column: 2 },
              },
              6: {
                start: { line: 57, column: 25 },
                end: { line: 64, column: 2 },
              },
              7: {
                start: { line: 65, column: 29 },
                end: { line: 73, column: 2 },
              },
              8: {
                start: { line: 74, column: 30 },
                end: { line: 84, column: 1 },
              },
            },
            fnMap: {},
            branchMap: {},
            s: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0 },
            f: {},
            b: {},
            inputSourceMap: {
              version: 3,
              sources: [
                '/Users/ryota.murakami/repository/Notable/packages/web/components/editor/plugins/basic-blocks-kit.tsx',
              ],
              sourcesContent: [
                "'use client'\n\nimport { createPlatePlugin } from 'platejs/react'\nimport { ParagraphPlugin } from 'platejs/react'\n\nimport { BlockquoteElement } from '@/components/ui/blockquote-node'\nimport {\n  H1Element,\n  H2Element,\n  H3Element,\n  H4Element,\n  H5Element,\n  H6Element,\n} from '@/components/ui/heading-node'\nimport { HrElement } from '@/components/ui/hr-node'\nimport { ParagraphElement } from '@/components/ui/paragraph-node'\n\n// Core Block Plugins with proper v49 configuration\nconst H1Plugin = createPlatePlugin({\n  key: 'h1',\n  node: {\n    isElement: true,\n    type: 'h1',\n    component: H1Element,\n  },\n})\n\nconst H2Plugin = createPlatePlugin({\n  key: 'h2',\n  node: {\n    isElement: true,\n    type: 'h2',\n    component: H2Element,\n  },\n})\n\nconst H3Plugin = createPlatePlugin({\n  key: 'h3',\n  node: {\n    isElement: true,\n    type: 'h3',\n    component: H3Element,\n  },\n})\n\nconst H4Plugin = createPlatePlugin({\n  key: 'h4',\n  node: {\n    isElement: true,\n    type: 'h4',\n    component: H4Element,\n  },\n})\n\nconst H5Plugin = createPlatePlugin({\n  key: 'h5',\n  node: {\n    isElement: true,\n    type: 'h5',\n    component: H5Element,\n  },\n})\n\nconst H6Plugin = createPlatePlugin({\n  key: 'h6',\n  node: {\n    isElement: true,\n    type: 'h6',\n    component: H6Element,\n  },\n})\n\nconst BlockquotePlugin = createPlatePlugin({\n  key: 'blockquote',\n  node: {\n    isElement: true,\n    type: 'blockquote',\n    component: BlockquoteElement,\n  },\n})\n\nconst HorizontalRulePlugin = createPlatePlugin({\n  key: 'hr',\n  node: {\n    isElement: true,\n    type: 'hr',\n    component: HrElement,\n    isVoid: true, // HR elements don't have children\n  },\n})\n\nexport const BasicBlocksKit = [\n  ParagraphPlugin.withComponent(ParagraphElement),\n  H1Plugin,\n  H2Plugin,\n  H3Plugin,\n  H4Plugin,\n  H5Plugin,\n  H6Plugin,\n  BlockquotePlugin,\n  HorizontalRulePlugin,\n]\n",
              ],
              names: [
                'createPlatePlugin',
                'ParagraphPlugin',
                'BlockquoteElement',
                'H1Element',
                'H2Element',
                'H3Element',
                'H4Element',
                'H5Element',
                'H6Element',
                'HrElement',
                'ParagraphElement',
                'H1Plugin',
                'key',
                'node',
                'isElement',
                'type',
                'component',
                'H2Plugin',
                'H3Plugin',
                'H4Plugin',
                'H5Plugin',
                'H6Plugin',
                'BlockquotePlugin',
                'HorizontalRulePlugin',
                'isVoid',
                'BasicBlocksKit',
                'withComponent',
              ],
              mappings:
                'AAAA;AAEA,SAASA,iBAAiB,QAAQ,gBAAe;AACjD,SAASC,eAAe,QAAQ,gBAAe;AAE/C,SAASC,iBAAiB,QAAQ,kCAAiC;AACnE,SACEC,SAAS,EACTC,SAAS,EACTC,SAAS,EACTC,SAAS,EACTC,SAAS,EACTC,SAAS,QACJ,+BAA8B;AACrC,SAASC,SAAS,QAAQ,0BAAyB;AACnD,SAASC,gBAAgB,QAAQ,iCAAgC;AAEjE,mDAAmD;AACnD,MAAMC,WAAWX,kBAAkB;IACjCY,KAAK;IACLC,MAAM;QACJC,WAAW;QACXC,MAAM;QACNC,WAAWb;IACb;AACF;AAEA,MAAMc,WAAWjB,kBAAkB;IACjCY,KAAK;IACLC,MAAM;QACJC,WAAW;QACXC,MAAM;QACNC,WAAWZ;IACb;AACF;AAEA,MAAMc,WAAWlB,kBAAkB;IACjCY,KAAK;IACLC,MAAM;QACJC,WAAW;QACXC,MAAM;QACNC,WAAWX;IACb;AACF;AAEA,MAAMc,WAAWnB,kBAAkB;IACjCY,KAAK;IACLC,MAAM;QACJC,WAAW;QACXC,MAAM;QACNC,WAAWV;IACb;AACF;AAEA,MAAMc,WAAWpB,kBAAkB;IACjCY,KAAK;IACLC,MAAM;QACJC,WAAW;QACXC,MAAM;QACNC,WAAWT;IACb;AACF;AAEA,MAAMc,WAAWrB,kBAAkB;IACjCY,KAAK;IACLC,MAAM;QACJC,WAAW;QACXC,MAAM;QACNC,WAAWR;IACb;AACF;AAEA,MAAMc,mBAAmBtB,kBAAkB;IACzCY,KAAK;IACLC,MAAM;QACJC,WAAW;QACXC,MAAM;QACNC,WAAWd;IACb;AACF;AAEA,MAAMqB,uBAAuBvB,kBAAkB;IAC7CY,KAAK;IACLC,MAAM;QACJC,WAAW;QACXC,MAAM;QACNC,WAAWP;QACXe,QAAQ;IACV;AACF;AAEA,OAAO,MAAMC,iBAAiB;IAC5BxB,gBAAgByB,aAAa,CAAChB;IAC9BC;IACAM;IACAC;IACAC;IACAC;IACAC;IACAC;IACAC;CACD,CAAA',
            },
            _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
            hash: '44e4b352c6d148772bc19337c8f8ba8c52d47ccf',
          })
        var actualCoverage = coverage[path]
        return (
          (cov_2cqkus68kw = function () {
            return actualCoverage
          }),
          actualCoverage
        )
      }
      ;(cov_izhece8h0(),
        cov_izhece8h0().s[4]++,
        (HrElement.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'HrElement',
        }),
        cov_1ojqcrgaer(),
        cov_1ojqcrgaer().s[1]++,
        (ParagraphElement.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'ParagraphElement',
        }),
        cov_2cqkus68kw())
      const H1Plugin =
          (cov_2cqkus68kw().s[0]++,
          (0, react.SU)({
            key: 'h1',
            node: { isElement: !0, type: 'h1', component: H1Element },
          })),
        H2Plugin =
          (cov_2cqkus68kw().s[1]++,
          (0, react.SU)({
            key: 'h2',
            node: { isElement: !0, type: 'h2', component: H2Element },
          })),
        H3Plugin =
          (cov_2cqkus68kw().s[2]++,
          (0, react.SU)({
            key: 'h3',
            node: { isElement: !0, type: 'h3', component: H3Element },
          })),
        H4Plugin =
          (cov_2cqkus68kw().s[3]++,
          (0, react.SU)({
            key: 'h4',
            node: { isElement: !0, type: 'h4', component: H4Element },
          })),
        H5Plugin =
          (cov_2cqkus68kw().s[4]++,
          (0, react.SU)({
            key: 'h5',
            node: { isElement: !0, type: 'h5', component: H5Element },
          })),
        H6Plugin =
          (cov_2cqkus68kw().s[5]++,
          (0, react.SU)({
            key: 'h6',
            node: { isElement: !0, type: 'h6', component: H6Element },
          })),
        BlockquotePlugin =
          (cov_2cqkus68kw().s[6]++,
          (0, react.SU)({
            key: 'blockquote',
            node: {
              isElement: !0,
              type: 'blockquote',
              component: BlockquoteElement,
            },
          })),
        HorizontalRulePlugin =
          (cov_2cqkus68kw().s[7]++,
          (0, react.SU)({
            key: 'hr',
            node: {
              isElement: !0,
              type: 'hr',
              component: HrElement,
              isVoid: !0,
            },
          })),
        BasicBlocksKit =
          (cov_2cqkus68kw().s[8]++,
          [
            react.mv.withComponent(ParagraphElement),
            H1Plugin,
            H2Plugin,
            H3Plugin,
            H4Plugin,
            H5Plugin,
            H6Plugin,
            BlockquotePlugin,
            HorizontalRulePlugin,
          ])
    },
    './components/editor/plugins/basic-marks-kit.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { N: () => BasicMarksKit })
      var react = __webpack_require__(
          '../../node_modules/.pnpm/@platejs+core@49.1.13_@types+react@19.1.8_immer@10.1.1_react-dom@19.1.0_react@19.1.0__r_fc8440c0ba2acbec6acd6c03c7e5303e/node_modules/@platejs/core/dist/react/index.mjs'
        ),
        jsx_runtime = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
        )
      __webpack_require__(
        '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
      )
      function cov_eyfaa36ml() {
        var path =
            '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/code-node.tsx',
          global = new Function('return this')(),
          gcv = '__coverage__',
          coverage = global[gcv] || (global[gcv] = {})
        ;(coverage[path] &&
          'ffa674e961474f05cd35010d8d0a9962f5b5b30d' === coverage[path].hash) ||
          (coverage[path] = {
            path: '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/code-node.tsx',
            statementMap: {
              0: {
                start: { line: 6, column: 4 },
                end: { line: 11, column: 7 },
              },
              1: {
                start: { line: 13, column: 0 },
                end: { line: 17, column: 2 },
              },
            },
            fnMap: {
              0: {
                name: 'CodeLeaf',
                decl: {
                  start: { line: 5, column: 16 },
                  end: { line: 5, column: 24 },
                },
                loc: {
                  start: { line: 5, column: 32 },
                  end: { line: 12, column: 1 },
                },
                line: 5,
              },
            },
            branchMap: {},
            s: { 0: 0, 1: 0 },
            f: { 0: 0 },
            b: {},
            inputSourceMap: {
              version: 3,
              sources: [
                '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/code-node.tsx',
              ],
              sourcesContent: [
                "'use client'\n\nimport * as React from 'react'\n\nimport type { PlateLeafProps } from 'platejs/react'\n\nimport { PlateLeaf } from 'platejs/react'\n\nexport function CodeLeaf(props: PlateLeafProps) {\n  return (\n    <PlateLeaf\n      {...props}\n      as='code'\n      className='rounded-md bg-muted px-[0.3em] py-[0.2em] font-mono text-sm whitespace-pre-wrap'\n    >\n      {props.children}\n    </PlateLeaf>\n  )\n}\n",
              ],
              names: [],
              mappings:
                'AAAA,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;AAEX,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAI7B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAExC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,AAAgB,CAAf,AAAgB,CAAf,AAAgB,CAAf,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;IAC3C,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,cACL,KAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACN,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACT,CAAC,CAAC,EAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACR,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;kBAEzF,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;AAGrB',
            },
            _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
            hash: 'ffa674e961474f05cd35010d8d0a9962f5b5b30d',
          })
        var actualCoverage = coverage[path]
        return (
          (cov_eyfaa36ml = function () {
            return actualCoverage
          }),
          actualCoverage
        )
      }
      function CodeLeaf(props) {
        return (
          cov_eyfaa36ml().f[0]++,
          cov_eyfaa36ml().s[0]++,
          (0, jsx_runtime.jsx)(react.nK, {
            ...props,
            as: 'code',
            className:
              'rounded-md bg-muted px-[0.3em] py-[0.2em] font-mono text-sm whitespace-pre-wrap',
            children: props.children,
          })
        )
      }
      function cov_1r8t6811fn() {
        var path =
            '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/highlight-node.tsx',
          global = new Function('return this')(),
          gcv = '__coverage__',
          coverage = global[gcv] || (global[gcv] = {})
        ;(coverage[path] &&
          '66f479d93ed25cc2c28ca11a0a0d2f4a9af718c4' === coverage[path].hash) ||
          (coverage[path] = {
            path: '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/highlight-node.tsx',
            statementMap: {
              0: {
                start: { line: 6, column: 4 },
                end: { line: 11, column: 7 },
              },
              1: {
                start: { line: 13, column: 0 },
                end: { line: 17, column: 2 },
              },
            },
            fnMap: {
              0: {
                name: 'HighlightLeaf',
                decl: {
                  start: { line: 5, column: 16 },
                  end: { line: 5, column: 29 },
                },
                loc: {
                  start: { line: 5, column: 37 },
                  end: { line: 12, column: 1 },
                },
                line: 5,
              },
            },
            branchMap: {},
            s: { 0: 0, 1: 0 },
            f: { 0: 0 },
            b: {},
            inputSourceMap: {
              version: 3,
              sources: [
                '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/highlight-node.tsx',
              ],
              sourcesContent: [
                "'use client'\n\nimport * as React from 'react'\n\nimport type { PlateLeafProps } from 'platejs/react'\n\nimport { PlateLeaf } from 'platejs/react'\n\nexport function HighlightLeaf(props: PlateLeafProps) {\n  return (\n    <PlateLeaf {...props} as='mark' className='bg-highlight/30 text-inherit'>\n      {props.children}\n    </PlateLeaf>\n  )\n}\n",
              ],
              names: [],
              mappings:
                'AAAA,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;AAEX,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAI7B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAExC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,AAAgB,CAAC,AAAhB,CAAC,AAAgB,CAAf,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;IAChD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,cACL,KAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QAAC,CAAC,CAAC,EAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;kBACrE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;AAGrB',
            },
            _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
            hash: '66f479d93ed25cc2c28ca11a0a0d2f4a9af718c4',
          })
        var actualCoverage = coverage[path]
        return (
          (cov_1r8t6811fn = function () {
            return actualCoverage
          }),
          actualCoverage
        )
      }
      function HighlightLeaf(props) {
        return (
          cov_1r8t6811fn().f[0]++,
          cov_1r8t6811fn().s[0]++,
          (0, jsx_runtime.jsx)(react.nK, {
            ...props,
            as: 'mark',
            className: 'bg-highlight/30 text-inherit',
            children: props.children,
          })
        )
      }
      function cov_2jhrwozq7b() {
        var path =
            '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/kbd-node.tsx',
          global = new Function('return this')(),
          gcv = '__coverage__',
          coverage = global[gcv] || (global[gcv] = {})
        ;(coverage[path] &&
          '30ab14bab129964186d8a0b718737f425c97b7c1' === coverage[path].hash) ||
          (coverage[path] = {
            path: '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/kbd-node.tsx',
            statementMap: {
              0: {
                start: { line: 6, column: 4 },
                end: { line: 11, column: 7 },
              },
              1: {
                start: { line: 13, column: 0 },
                end: { line: 17, column: 2 },
              },
            },
            fnMap: {
              0: {
                name: 'KbdLeaf',
                decl: {
                  start: { line: 5, column: 16 },
                  end: { line: 5, column: 23 },
                },
                loc: {
                  start: { line: 5, column: 31 },
                  end: { line: 12, column: 1 },
                },
                line: 5,
              },
            },
            branchMap: {},
            s: { 0: 0, 1: 0 },
            f: { 0: 0 },
            b: {},
            inputSourceMap: {
              version: 3,
              sources: [
                '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/kbd-node.tsx',
              ],
              sourcesContent: [
                "'use client'\n\nimport * as React from 'react'\n\nimport type { PlateLeafProps } from 'platejs/react'\n\nimport { PlateLeaf } from 'platejs/react'\n\nexport function KbdLeaf(props: PlateLeafProps) {\n  return (\n    <PlateLeaf\n      {...props}\n      as='kbd'\n      className='rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-sm shadow-[rgba(255,_255,_255,_0.1)_0px_0.5px_0px_0px_inset,_rgb(248,_249,_250)_0px_1px_5px_0px_inset,_rgb(193,_200,_205)_0px_0px_0px_0.5px,_rgb(193,_200,_205)_0px_2px_1px_-1px,_rgb(193,_200,_205)_0px_1px_0px_0px] dark:shadow-[rgba(255,_255,_255,_0.1)_0px_0.5px_0px_0px_inset,_rgb(26,_29,_30)_0px_1px_5px_0px_inset,_rgb(76,_81,_85)_0px_0px_0px_0.5px,_rgb(76,_81,_85)_0px_2px_1px_-1px,_rgb(76,_81,_85)_0px_1px_0px_0px]'\n    >\n      {props.children}\n    </PlateLeaf>\n  )\n}\n",
              ],
              names: [],
              mappings:
                'AAAA,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;AAEX,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAI7B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAExC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,AAAgB,CAAC,AAAhB,CAAC,AAAgB,CAAf,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;IAC1C,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,cACL,KAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACN,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACT,CAAC,CAAC,EAAC,CAAC,CAAC,CAAC,CAAC;QACP,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;kBAE9e,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;AAGrB',
            },
            _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
            hash: '30ab14bab129964186d8a0b718737f425c97b7c1',
          })
        var actualCoverage = coverage[path]
        return (
          (cov_2jhrwozq7b = function () {
            return actualCoverage
          }),
          actualCoverage
        )
      }
      function KbdLeaf(props) {
        return (
          cov_2jhrwozq7b().f[0]++,
          cov_2jhrwozq7b().s[0]++,
          (0, jsx_runtime.jsx)(react.nK, {
            ...props,
            as: 'kbd',
            className:
              'rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-sm shadow-[rgba(255,_255,_255,_0.1)_0px_0.5px_0px_0px_inset,_rgb(248,_249,_250)_0px_1px_5px_0px_inset,_rgb(193,_200,_205)_0px_0px_0px_0.5px,_rgb(193,_200,_205)_0px_2px_1px_-1px,_rgb(193,_200,_205)_0px_1px_0px_0px] dark:shadow-[rgba(255,_255,_255,_0.1)_0px_0.5px_0px_0px_inset,_rgb(26,_29,_30)_0px_1px_5px_0px_inset,_rgb(76,_81,_85)_0px_0px_0px_0.5px,_rgb(76,_81,_85)_0px_2px_1px_-1px,_rgb(76,_81,_85)_0px_1px_0px_0px]',
            children: props.children,
          })
        )
      }
      function cov_2gvg98n0cy() {
        var path =
            '/Users/ryota.murakami/repository/Notable/packages/web/components/editor/plugins/basic-marks-kit.tsx',
          global = new Function('return this')(),
          gcv = '__coverage__',
          coverage = global[gcv] || (global[gcv] = {})
        ;(coverage[path] &&
          '1110fde0f30eb07212c1694d3d4a93ba1d7ad705' === coverage[path].hash) ||
          (coverage[path] = {
            path: '/Users/ryota.murakami/repository/Notable/packages/web/components/editor/plugins/basic-marks-kit.tsx',
            statementMap: {
              0: {
                start: { line: 7, column: 19 },
                end: { line: 13, column: 2 },
              },
              1: {
                start: { line: 14, column: 21 },
                end: { line: 20, column: 2 },
              },
              2: {
                start: { line: 21, column: 24 },
                end: { line: 27, column: 2 },
              },
              3: {
                start: { line: 28, column: 19 },
                end: { line: 35, column: 2 },
              },
              4: {
                start: { line: 36, column: 28 },
                end: { line: 42, column: 2 },
              },
              5: {
                start: { line: 43, column: 24 },
                end: { line: 49, column: 2 },
              },
              6: {
                start: { line: 50, column: 26 },
                end: { line: 56, column: 2 },
              },
              7: {
                start: { line: 57, column: 24 },
                end: { line: 64, column: 2 },
              },
              8: {
                start: { line: 65, column: 18 },
                end: { line: 72, column: 2 },
              },
              9: {
                start: { line: 73, column: 29 },
                end: { line: 83, column: 1 },
              },
            },
            fnMap: {},
            branchMap: {},
            s: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 },
            f: {},
            b: {},
            inputSourceMap: {
              version: 3,
              sources: [
                '/Users/ryota.murakami/repository/Notable/packages/web/components/editor/plugins/basic-marks-kit.tsx',
              ],
              sourcesContent: [
                "'use client'\n\nimport { createPlatePlugin } from 'platejs/react'\n\nimport { CodeLeaf } from '@/components/ui/code-node'\nimport { HighlightLeaf } from '@/components/ui/highlight-node'\nimport { KbdLeaf } from '@/components/ui/kbd-node'\n\n// Text Mark Plugins with proper v49 configuration\nconst BoldPlugin = createPlatePlugin({\n  key: 'bold',\n  node: {\n    isLeaf: true,\n    type: 'bold',\n  },\n})\n\nconst ItalicPlugin = createPlatePlugin({\n  key: 'italic',\n  node: {\n    isLeaf: true,\n    type: 'italic',\n  },\n})\n\nconst UnderlinePlugin = createPlatePlugin({\n  key: 'underline',\n  node: {\n    isLeaf: true,\n    type: 'underline',\n  },\n})\n\nconst CodePlugin = createPlatePlugin({\n  key: 'code',\n  node: {\n    isLeaf: true,\n    type: 'code',\n    component: CodeLeaf,\n  },\n})\n\nconst StrikethroughPlugin = createPlatePlugin({\n  key: 'strikethrough',\n  node: {\n    isLeaf: true,\n    type: 'strikethrough',\n  },\n})\n\nconst SubscriptPlugin = createPlatePlugin({\n  key: 'subscript',\n  node: {\n    isLeaf: true,\n    type: 'subscript',\n  },\n})\n\nconst SuperscriptPlugin = createPlatePlugin({\n  key: 'superscript',\n  node: {\n    isLeaf: true,\n    type: 'superscript',\n  },\n})\n\nconst HighlightPlugin = createPlatePlugin({\n  key: 'highlight',\n  node: {\n    isLeaf: true,\n    type: 'highlight',\n    component: HighlightLeaf,\n  },\n})\n\nconst KbdPlugin = createPlatePlugin({\n  key: 'kbd',\n  node: {\n    isLeaf: true,\n    type: 'kbd',\n    component: KbdLeaf,\n  },\n})\n\nexport const BasicMarksKit = [\n  BoldPlugin,\n  ItalicPlugin,\n  UnderlinePlugin,\n  CodePlugin,\n  StrikethroughPlugin,\n  SubscriptPlugin,\n  SuperscriptPlugin,\n  HighlightPlugin,\n  KbdPlugin,\n]\n",
              ],
              names: [
                'createPlatePlugin',
                'CodeLeaf',
                'HighlightLeaf',
                'KbdLeaf',
                'BoldPlugin',
                'key',
                'node',
                'isLeaf',
                'type',
                'ItalicPlugin',
                'UnderlinePlugin',
                'CodePlugin',
                'component',
                'StrikethroughPlugin',
                'SubscriptPlugin',
                'SuperscriptPlugin',
                'HighlightPlugin',
                'KbdPlugin',
                'BasicMarksKit',
              ],
              mappings:
                'AAAA;AAEA,SAASA,iBAAiB,QAAQ,gBAAe;AAEjD,SAASC,QAAQ,QAAQ,4BAA2B;AACpD,SAASC,aAAa,QAAQ,iCAAgC;AAC9D,SAASC,OAAO,QAAQ,2BAA0B;AAElD,kDAAkD;AAClD,MAAMC,aAAaJ,kBAAkB;IACnCK,KAAK;IACLC,MAAM;QACJC,QAAQ;QACRC,MAAM;IACR;AACF;AAEA,MAAMC,eAAeT,kBAAkB;IACrCK,KAAK;IACLC,MAAM;QACJC,QAAQ;QACRC,MAAM;IACR;AACF;AAEA,MAAME,kBAAkBV,kBAAkB;IACxCK,KAAK;IACLC,MAAM;QACJC,QAAQ;QACRC,MAAM;IACR;AACF;AAEA,MAAMG,aAAaX,kBAAkB;IACnCK,KAAK;IACLC,MAAM;QACJC,QAAQ;QACRC,MAAM;QACNI,WAAWX;IACb;AACF;AAEA,MAAMY,sBAAsBb,kBAAkB;IAC5CK,KAAK;IACLC,MAAM;QACJC,QAAQ;QACRC,MAAM;IACR;AACF;AAEA,MAAMM,kBAAkBd,kBAAkB;IACxCK,KAAK;IACLC,MAAM;QACJC,QAAQ;QACRC,MAAM;IACR;AACF;AAEA,MAAMO,oBAAoBf,kBAAkB;IAC1CK,KAAK;IACLC,MAAM;QACJC,QAAQ;QACRC,MAAM;IACR;AACF;AAEA,MAAMQ,kBAAkBhB,kBAAkB;IACxCK,KAAK;IACLC,MAAM;QACJC,QAAQ;QACRC,MAAM;QACNI,WAAWV;IACb;AACF;AAEA,MAAMe,YAAYjB,kBAAkB;IAClCK,KAAK;IACLC,MAAM;QACJC,QAAQ;QACRC,MAAM;QACNI,WAAWT;IACb;AACF;AAEA,OAAO,MAAMe,gBAAgB;IAC3Bd;IACAK;IACAC;IACAC;IACAE;IACAC;IACAC;IACAC;IACAC;CACD,CAAA',
            },
            _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
            hash: '1110fde0f30eb07212c1694d3d4a93ba1d7ad705',
          })
        var actualCoverage = coverage[path]
        return (
          (cov_2gvg98n0cy = function () {
            return actualCoverage
          }),
          actualCoverage
        )
      }
      ;(cov_eyfaa36ml(),
        cov_eyfaa36ml().s[1]++,
        (CodeLeaf.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'CodeLeaf',
        }),
        cov_1r8t6811fn(),
        cov_1r8t6811fn().s[1]++,
        (HighlightLeaf.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'HighlightLeaf',
        }),
        cov_2jhrwozq7b(),
        cov_2jhrwozq7b().s[1]++,
        (KbdLeaf.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'KbdLeaf',
        }),
        cov_2gvg98n0cy())
      const BoldPlugin =
          (cov_2gvg98n0cy().s[0]++,
          (0, react.SU)({ key: 'bold', node: { isLeaf: !0, type: 'bold' } })),
        ItalicPlugin =
          (cov_2gvg98n0cy().s[1]++,
          (0, react.SU)({
            key: 'italic',
            node: { isLeaf: !0, type: 'italic' },
          })),
        UnderlinePlugin =
          (cov_2gvg98n0cy().s[2]++,
          (0, react.SU)({
            key: 'underline',
            node: { isLeaf: !0, type: 'underline' },
          })),
        CodePlugin =
          (cov_2gvg98n0cy().s[3]++,
          (0, react.SU)({
            key: 'code',
            node: { isLeaf: !0, type: 'code', component: CodeLeaf },
          })),
        StrikethroughPlugin =
          (cov_2gvg98n0cy().s[4]++,
          (0, react.SU)({
            key: 'strikethrough',
            node: { isLeaf: !0, type: 'strikethrough' },
          })),
        SubscriptPlugin =
          (cov_2gvg98n0cy().s[5]++,
          (0, react.SU)({
            key: 'subscript',
            node: { isLeaf: !0, type: 'subscript' },
          })),
        SuperscriptPlugin =
          (cov_2gvg98n0cy().s[6]++,
          (0, react.SU)({
            key: 'superscript',
            node: { isLeaf: !0, type: 'superscript' },
          })),
        HighlightPlugin =
          (cov_2gvg98n0cy().s[7]++,
          (0, react.SU)({
            key: 'highlight',
            node: { isLeaf: !0, type: 'highlight', component: HighlightLeaf },
          })),
        KbdPlugin =
          (cov_2gvg98n0cy().s[8]++,
          (0, react.SU)({
            key: 'kbd',
            node: { isLeaf: !0, type: 'kbd', component: KbdLeaf },
          })),
        BasicMarksKit =
          (cov_2gvg98n0cy().s[9]++,
          [
            BoldPlugin,
            ItalicPlugin,
            UnderlinePlugin,
            CodePlugin,
            StrikethroughPlugin,
            SubscriptPlugin,
            SuperscriptPlugin,
            HighlightPlugin,
            KbdPlugin,
          ])
    },
    './components/ui/editor.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        KE: () => Editor,
        nG: () => EditorContainer,
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
        platejs_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          '../../node_modules/.pnpm/@platejs+core@49.1.13_@types+react@19.1.8_immer@10.1.1_react-dom@19.1.0_react@19.1.0__r_fc8440c0ba2acbec6acd6c03c7e5303e/node_modules/@platejs/core/dist/react/index.mjs'
        ),
        _lib_utils__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__('./lib/utils.ts')
      function cov_9c8gunncp() {
        var path =
            '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/editor.tsx',
          global = new Function('return this')(),
          gcv = '__coverage__',
          coverage = global[gcv] || (global[gcv] = {})
        ;(coverage[path] &&
          '64f6b7c28bb098a86b6366cadbd23c66164fd581' === coverage[path].hash) ||
          (coverage[path] = {
            path: '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/editor.tsx',
            statementMap: {
              0: {
                start: { line: 7, column: 32 },
                end: { line: 19, column: 2 },
              },
              1: {
                start: { line: 21, column: 4 },
                end: { line: 26, column: 7 },
              },
              2: {
                start: { line: 28, column: 23 },
                end: { line: 50, column: 2 },
              },
              3: {
                start: { line: 51, column: 36 },
                end: { line: 63, column: 2 },
              },
              4: {
                start: { line: 52, column: 4 },
                end: { line: 62, column: 7 },
              },
              5: {
                start: { line: 64, column: 0 },
                end: { line: 64, column: 30 },
              },
              6: {
                start: { line: 66, column: 4 },
                end: { line: 71, column: 7 },
              },
              7: {
                start: { line: 73, column: 0 },
                end: { line: 73, column: 38 },
              },
              8: {
                start: { line: 74, column: 0 },
                end: { line: 78, column: 2 },
              },
              9: {
                start: { line: 79, column: 0 },
                end: { line: 83, column: 2 },
              },
              10: {
                start: { line: 84, column: 0 },
                end: { line: 88, column: 2 },
              },
            },
            fnMap: {
              0: {
                name: 'EditorContainer',
                decl: {
                  start: { line: 20, column: 16 },
                  end: { line: 20, column: 31 },
                },
                loc: {
                  start: { line: 20, column: 66 },
                  end: { line: 27, column: 1 },
                },
                line: 20,
              },
              1: {
                name: '(anonymous_1)',
                decl: {
                  start: { line: 51, column: 53 },
                  end: { line: 51, column: 54 },
                },
                loc: {
                  start: { line: 51, column: 113 },
                  end: { line: 63, column: 1 },
                },
                line: 51,
              },
              2: {
                name: 'EditorView',
                decl: {
                  start: { line: 65, column: 16 },
                  end: { line: 65, column: 26 },
                },
                loc: {
                  start: { line: 65, column: 61 },
                  end: { line: 72, column: 1 },
                },
                line: 65,
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
            },
            f: { 0: 0, 1: 0, 2: 0 },
            b: {},
            inputSourceMap: {
              version: 3,
              sources: [
                '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/editor.tsx',
              ],
              sourcesContent: [
                "'use client'\n\nimport * as React from 'react'\n\nimport type { VariantProps } from 'class-variance-authority'\nimport type { PlateContentProps, PlateViewProps } from 'platejs/react'\n\nimport { cva } from 'class-variance-authority'\nimport { PlateContainer, PlateContent, PlateView } from 'platejs/react'\n\nimport { cn } from '@/lib/utils'\n\nconst editorContainerVariants = cva(\n  'relative w-full cursor-text overflow-y-auto caret-primary select-text selection:bg-brand/25 focus-visible:outline-none [&_.slate-selection-area]:z-50 [&_.slate-selection-area]:border [&_.slate-selection-area]:border-brand/25 [&_.slate-selection-area]:bg-brand/15',\n  {\n    defaultVariants: {\n      variant: 'default',\n    },\n    variants: {\n      variant: {\n        comment: cn(\n          'flex flex-wrap justify-between gap-1 px-1 py-0.5 text-sm',\n          'rounded-md border-[1.5px] border-transparent bg-transparent',\n          'has-[[data-slate-editor]:focus]:border-brand/50 has-[[data-slate-editor]:focus]:ring-2 has-[[data-slate-editor]:focus]:ring-brand/30',\n          'has-aria-disabled:border-input has-aria-disabled:bg-muted'\n        ),\n        default: 'h-full',\n        demo: 'h-[650px]',\n        select: cn(\n          'group rounded-md border border-input ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2',\n          'has-data-readonly:w-fit has-data-readonly:cursor-default has-data-readonly:border-transparent has-data-readonly:focus-within:[box-shadow:none]'\n        ),\n      },\n    },\n  }\n)\n\nexport function EditorContainer({\n  className,\n  variant,\n  ...props\n}: React.ComponentProps<'div'> & VariantProps<typeof editorContainerVariants>) {\n  return (\n    <PlateContainer\n      className={cn(\n        'ignore-click-outside/toolbar',\n        editorContainerVariants({ variant }),\n        className\n      )}\n      {...props}\n    />\n  )\n}\n\nconst editorVariants = cva(\n  cn(\n    'group/editor',\n    'relative w-full cursor-text overflow-x-hidden break-words whitespace-pre-wrap select-text',\n    'rounded-md ring-offset-background focus-visible:outline-none',\n    'placeholder:text-muted-foreground/80 **:data-slate-placeholder:!top-1/2 **:data-slate-placeholder:-translate-y-1/2 **:data-slate-placeholder:text-muted-foreground/80 **:data-slate-placeholder:opacity-100!',\n    '[&_strong]:font-bold'\n  ),\n  {\n    defaultVariants: {\n      variant: 'default',\n    },\n    variants: {\n      disabled: {\n        true: 'cursor-not-allowed opacity-50',\n      },\n      focused: {\n        true: 'ring-2 ring-ring ring-offset-2',\n      },\n      variant: {\n        ai: 'w-full px-0 text-base md:text-sm',\n        aiChat:\n          'max-h-[min(70vh,320px)] w-full max-w-[700px] overflow-y-auto px-3 py-2 text-base md:text-sm',\n        comment: cn('rounded-none border-none bg-transparent text-sm'),\n        default:\n          'size-full px-16 pt-4 pb-72 text-base sm:px-[max(64px,calc(50%-350px))]',\n        demo: 'size-full px-16 pt-4 pb-72 text-base sm:px-[max(64px,calc(50%-350px))]',\n        fullWidth: 'size-full px-16 pt-4 pb-72 text-base sm:px-24',\n        none: '',\n        select: 'px-3 py-2 text-base data-readonly:w-fit',\n      },\n    },\n  }\n)\n\nexport type EditorProps = PlateContentProps &\n  VariantProps<typeof editorVariants>\n\nexport const Editor = React.forwardRef<HTMLDivElement, EditorProps>(\n  ({ className, disabled, focused, variant, ...props }, ref) => {\n    return (\n      <PlateContent\n        ref={ref}\n        className={cn(\n          editorVariants({\n            disabled,\n            focused,\n            variant,\n          }),\n          className\n        )}\n        disabled={disabled}\n        disableDefaultStyles\n        {...props}\n      />\n    )\n  }\n)\n\nEditor.displayName = 'Editor'\n\nexport function EditorView({\n  className,\n  variant,\n  ...props\n}: PlateViewProps & VariantProps<typeof editorVariants>) {\n  return (\n    <PlateView\n      {...props}\n      className={cn(editorVariants({ variant }), className)}\n    />\n  )\n}\n\nEditorView.displayName = 'EditorView'\n",
              ],
              names: [],
              mappings:
                'AAAA,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;AAEX,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAK7B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAC7C,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAEtE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAE/B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACjC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACxQ;IACE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACf,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;IACpB,CAAC;IACD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACR,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YACP,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACT,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAC1D,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAC7D,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACtI,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YAE5D,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YACjB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YACjB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACR,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACnI,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QAEnJ,CAAC;IACH,CAAC;AACH;AAGF,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAC9B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACT,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACP,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GACoE,CAAC,CAAC;IAC7E,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,cACL,KAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACZ,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACX,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAC9B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QAAC,CAAC,CAAC,EACpC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QAET,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;AAGf;AAEA,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACxB,CAAC,CAAC,CACA,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACd,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAC3F,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAC9D,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAC9M,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAEvB;IACE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACf,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;IACpB,CAAC;IACD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACR,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YACR,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACvC,CAAC;QACD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YACP,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACxC,CAAC;QACD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YACP,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YACtC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACJ,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YAC/F,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YAC9D,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACL,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YAC1E,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YAC9E,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,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',
            },
            _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
            hash: '64f6b7c28bb098a86b6366cadbd23c66164fd581',
          })
        var actualCoverage = coverage[path]
        return (
          (cov_9c8gunncp = function () {
            return actualCoverage
          }),
          actualCoverage
        )
      }
      cov_9c8gunncp()
      const editorContainerVariants =
        (cov_9c8gunncp().s[0]++,
        (0, class_variance_authority__WEBPACK_IMPORTED_MODULE_3__.F)(
          'relative w-full cursor-text overflow-y-auto caret-primary select-text selection:bg-brand/25 focus-visible:outline-none [&_.slate-selection-area]:z-50 [&_.slate-selection-area]:border [&_.slate-selection-area]:border-brand/25 [&_.slate-selection-area]:bg-brand/15',
          {
            defaultVariants: { variant: 'default' },
            variants: {
              variant: {
                comment: (0, _lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(
                  'flex flex-wrap justify-between gap-1 px-1 py-0.5 text-sm',
                  'rounded-md border-[1.5px] border-transparent bg-transparent',
                  'has-[[data-slate-editor]:focus]:border-brand/50 has-[[data-slate-editor]:focus]:ring-2 has-[[data-slate-editor]:focus]:ring-brand/30',
                  'has-aria-disabled:border-input has-aria-disabled:bg-muted'
                ),
                default: 'h-full',
                demo: 'h-[650px]',
                select: (0, _lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(
                  'group rounded-md border border-input ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2',
                  'has-data-readonly:w-fit has-data-readonly:cursor-default has-data-readonly:border-transparent has-data-readonly:focus-within:[box-shadow:none]'
                ),
              },
            },
          }
        ))
      function EditorContainer({ className, variant, ...props }) {
        return (
          cov_9c8gunncp().f[0]++,
          cov_9c8gunncp().s[1]++,
          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            platejs_react__WEBPACK_IMPORTED_MODULE_4__.ww,
            {
              className: (0, _lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(
                'ignore-click-outside/toolbar',
                editorContainerVariants({ variant }),
                className
              ),
              ...props,
            }
          )
        )
      }
      const editorVariants =
          (cov_9c8gunncp().s[2]++,
          (0, class_variance_authority__WEBPACK_IMPORTED_MODULE_3__.F)(
            (0, _lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(
              'group/editor',
              'relative w-full cursor-text overflow-x-hidden break-words whitespace-pre-wrap select-text',
              'rounded-md ring-offset-background focus-visible:outline-none',
              'placeholder:text-muted-foreground/80 **:data-slate-placeholder:!top-1/2 **:data-slate-placeholder:-translate-y-1/2 **:data-slate-placeholder:text-muted-foreground/80 **:data-slate-placeholder:opacity-100!',
              '[&_strong]:font-bold'
            ),
            {
              defaultVariants: { variant: 'default' },
              variants: {
                disabled: { true: 'cursor-not-allowed opacity-50' },
                focused: { true: 'ring-2 ring-ring ring-offset-2' },
                variant: {
                  ai: 'w-full px-0 text-base md:text-sm',
                  aiChat:
                    'max-h-[min(70vh,320px)] w-full max-w-[700px] overflow-y-auto px-3 py-2 text-base md:text-sm',
                  comment: (0, _lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(
                    'rounded-none border-none bg-transparent text-sm'
                  ),
                  default:
                    'size-full px-16 pt-4 pb-72 text-base sm:px-[max(64px,calc(50%-350px))]',
                  demo: 'size-full px-16 pt-4 pb-72 text-base sm:px-[max(64px,calc(50%-350px))]',
                  fullWidth: 'size-full px-16 pt-4 pb-72 text-base sm:px-24',
                  none: '',
                  select: 'px-3 py-2 text-base data-readonly:w-fit',
                },
              },
            }
          )),
        Editor =
          (cov_9c8gunncp().s[3]++,
          react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(
            ({ className, disabled, focused, variant, ...props }, ref) => (
              cov_9c8gunncp().f[1]++,
              cov_9c8gunncp().s[4]++,
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                platejs_react__WEBPACK_IMPORTED_MODULE_4__.wP,
                {
                  ref,
                  className: (0, _lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(
                    editorVariants({ disabled, focused, variant }),
                    className
                  ),
                  disabled,
                  disableDefaultStyles: !0,
                  ...props,
                }
              )
            )
          ))
      function EditorView({ className, variant, ...props }) {
        return (
          cov_9c8gunncp().f[2]++,
          cov_9c8gunncp().s[6]++,
          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            platejs_react__WEBPACK_IMPORTED_MODULE_4__.Am,
            {
              ...props,
              className: (0, _lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(
                editorVariants({ variant }),
                className
              ),
            }
          )
        )
      }
      ;(cov_9c8gunncp().s[5]++,
        (Editor.displayName = 'Editor'),
        cov_9c8gunncp().s[7]++,
        (EditorView.displayName = 'EditorView'),
        cov_9c8gunncp().s[8]++,
        (EditorContainer.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'EditorContainer',
        }),
        cov_9c8gunncp().s[9]++,
        (Editor.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Editor',
        }),
        cov_9c8gunncp().s[10]++,
        (EditorView.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'EditorView',
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
