'use strict'
;(self.webpackChunk_notable_web = self.webpackChunk_notable_web || []).push([
  [959],
  {
    './components/ui/toolbar.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      ;(__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          ActiveStates: () => ActiveStates,
          CompactVariant: () => CompactVariant,
          ContextToolbarDemo: () => ContextToolbarDemo,
          Default: () => Default,
          DisabledStates: () => DisabledStates,
          EditorToolbarCompact: () => EditorToolbarCompact,
          EditorToolbarDefault: () => EditorToolbarDefault,
          EditorToolbarFloating: () => EditorToolbarFloating,
          EditorToolbarWithViewMode: () => EditorToolbarWithViewMode,
          FloatingVariant: () => FloatingVariant,
          GroupSeparators: () => GroupSeparators,
          InteractiveToolbar: () => InteractiveToolbar,
          ManyActions: () => ManyActions,
          ToggleActiveState: () => ToggleActiveState,
          VerticalOrientation: () => VerticalOrientation,
          WithGroups: () => WithGroups,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => toolbar_stories,
        }))
      var jsx_runtime = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        react = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
        ),
        utils = __webpack_require__('./lib/utils.ts'),
        components_button = __webpack_require__(
          './design-system/components/button.tsx'
        ),
        undo = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/undo.js'
        ),
        redo = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/redo.js'
        ),
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
        list = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/list.js'
        ),
        list_ordered = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/list-ordered.js'
        ),
        square_check_big = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-check-big.js'
        ),
        quote = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/quote.js'
        ),
        divide = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/divide.js'
        ),
        icons_link = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/link.js'
        ),
        icons_image = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/image.js'
        ),
        table = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/table.js'
        ),
        square_pen = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-pen.js'
        ),
        eye = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/eye.js'
        ),
        maximize = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/maximize.js'
        )
      function cov_yyi2zsjcb() {
        var path =
            '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/toolbar.tsx',
          global = new Function('return this')(),
          gcv = '__coverage__',
          coverageData = {
            path: '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/toolbar.tsx',
            statementMap: {
              0: {
                start: { line: 8, column: 27 },
                end: { line: 20, column: 6 },
              },
              1: {
                start: { line: 9, column: 23 },
                end: { line: 9, column: 25 },
              },
              2: {
                start: { line: 10, column: 8 },
                end: { line: 16, column: 11 },
              },
              3: {
                start: { line: 11, column: 26 },
                end: { line: 11, column: 51 },
              },
              4: {
                start: { line: 12, column: 12 },
                end: { line: 14, column: 13 },
              },
              5: {
                start: { line: 13, column: 16 },
                end: { line: 13, column: 35 },
              },
              6: {
                start: { line: 15, column: 12 },
                end: { line: 15, column: 39 },
              },
              7: {
                start: { line: 17, column: 8 },
                end: { line: 17, column: 22 },
              },
              8: {
                start: { line: 21, column: 4 },
                end: { line: 44, column: 7 },
              },
              9: {
                start: { line: 25, column: 103 },
                end: { line: 43, column: 39 },
              },
              10: {
                start: { line: 32, column: 75 },
                end: { line: 40, column: 41 },
              },
              11: {
                start: { line: 56, column: 20 },
                end: { line: 285, column: 5 },
              },
              12: {
                start: { line: 286, column: 4 },
                end: { line: 290, column: 7 },
              },
              13: {
                start: { line: 294, column: 16 },
                end: { line: 294, column: 34 },
              },
              14: {
                start: { line: 295, column: 4 },
                end: { line: 308, column: 7 },
              },
              15: {
                start: { line: 297, column: 12 },
                end: { line: 299, column: 13 },
              },
              16: {
                start: { line: 298, column: 16 },
                end: { line: 298, column: 76 },
              },
              17: {
                start: { line: 301, column: 8 },
                end: { line: 304, column: 9 },
              },
              18: {
                start: { line: 302, column: 12 },
                end: { line: 302, column: 71 },
              },
              19: {
                start: { line: 303, column: 12 },
                end: { line: 303, column: 85 },
              },
              20: {
                start: { line: 303, column: 23 },
                end: { line: 303, column: 84 },
              },
              21: {
                start: { line: 309, column: 4 },
                end: { line: 309, column: 30 },
              },
              22: {
                start: { line: 309, column: 18 },
                end: { line: 309, column: 30 },
              },
              23: {
                start: { line: 310, column: 4 },
                end: { line: 321, column: 7 },
              },
              24: {
                start: { line: 323, column: 0 },
                end: { line: 401, column: 2 },
              },
              25: {
                start: { line: 402, column: 0 },
                end: { line: 809, column: 2 },
              },
              26: {
                start: { line: 810, column: 0 },
                end: { line: 872, column: 2 },
              },
            },
            fnMap: {
              0: {
                name: 'Toolbar',
                decl: {
                  start: { line: 7, column: 16 },
                  end: { line: 7, column: 23 },
                },
                loc: {
                  start: { line: 7, column: 102 },
                  end: { line: 45, column: 1 },
                },
                line: 7,
              },
              1: {
                name: '(anonymous_1)',
                decl: {
                  start: { line: 8, column: 41 },
                  end: { line: 8, column: 42 },
                },
                loc: {
                  start: { line: 8, column: 45 },
                  end: { line: 18, column: 5 },
                },
                line: 8,
              },
              2: {
                name: '(anonymous_2)',
                decl: {
                  start: { line: 10, column: 24 },
                  end: { line: 10, column: 25 },
                },
                loc: {
                  start: { line: 10, column: 34 },
                  end: { line: 16, column: 9 },
                },
                line: 10,
              },
              3: {
                name: '(anonymous_3)',
                decl: {
                  start: { line: 25, column: 53 },
                  end: { line: 25, column: 54 },
                },
                loc: {
                  start: { line: 25, column: 103 },
                  end: { line: 43, column: 39 },
                },
                line: 25,
              },
              4: {
                name: '(anonymous_4)',
                decl: {
                  start: { line: 32, column: 51 },
                  end: { line: 32, column: 52 },
                },
                loc: {
                  start: { line: 32, column: 75 },
                  end: { line: 40, column: 41 },
                },
                line: 32,
              },
              5: {
                name: 'EditorToolbar',
                decl: {
                  start: { line: 47, column: 16 },
                  end: { line: 47, column: 29 },
                },
                loc: {
                  start: { line: 55, column: 76 },
                  end: { line: 291, column: 1 },
                },
                line: 55,
              },
              6: {
                name: 'ContextToolbar',
                decl: {
                  start: { line: 293, column: 16 },
                  end: { line: 293, column: 30 },
                },
                loc: {
                  start: { line: 293, column: 79 },
                  end: { line: 322, column: 1 },
                },
                line: 293,
              },
              7: {
                name: '(anonymous_7)',
                decl: {
                  start: { line: 295, column: 20 },
                  end: { line: 295, column: 21 },
                },
                loc: {
                  start: { line: 295, column: 24 },
                  end: { line: 305, column: 5 },
                },
                line: 295,
              },
              8: {
                name: 'handleClickOutside',
                decl: {
                  start: { line: 296, column: 17 },
                  end: { line: 296, column: 35 },
                },
                loc: {
                  start: { line: 296, column: 43 },
                  end: { line: 300, column: 9 },
                },
                line: 296,
              },
              9: {
                name: '(anonymous_9)',
                decl: {
                  start: { line: 303, column: 19 },
                  end: { line: 303, column: 20 },
                },
                loc: {
                  start: { line: 303, column: 23 },
                  end: { line: 303, column: 84 },
                },
                line: 303,
              },
            },
            branchMap: {
              0: {
                loc: {
                  start: { line: 7, column: 26 },
                  end: { line: 7, column: 38 },
                },
                type: 'default-arg',
                locations: [
                  {
                    start: { line: 7, column: 36 },
                    end: { line: 7, column: 38 },
                  },
                ],
                line: 7,
              },
              1: {
                loc: {
                  start: { line: 7, column: 51 },
                  end: { line: 7, column: 70 },
                },
                type: 'default-arg',
                locations: [
                  {
                    start: { line: 7, column: 61 },
                    end: { line: 7, column: 70 },
                  },
                ],
                line: 7,
              },
              2: {
                loc: {
                  start: { line: 7, column: 72 },
                  end: { line: 7, column: 98 },
                },
                type: 'default-arg',
                locations: [
                  {
                    start: { line: 7, column: 86 },
                    end: { line: 7, column: 98 },
                  },
                ],
                line: 7,
              },
              3: {
                loc: {
                  start: { line: 11, column: 26 },
                  end: { line: 11, column: 51 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 11, column: 26 },
                    end: { line: 11, column: 38 },
                  },
                  {
                    start: { line: 11, column: 42 },
                    end: { line: 11, column: 51 },
                  },
                ],
                line: 11,
              },
              4: {
                loc: {
                  start: { line: 12, column: 12 },
                  end: { line: 14, column: 13 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 12, column: 12 },
                    end: { line: 14, column: 13 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 12,
              },
              5: {
                loc: {
                  start: { line: 22, column: 99 },
                  end: { line: 22, column: 147 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 22, column: 99 },
                    end: { line: 22, column: 121 },
                  },
                  {
                    start: { line: 22, column: 125 },
                    end: { line: 22, column: 147 },
                  },
                ],
                line: 22,
              },
              6: {
                loc: {
                  start: { line: 22, column: 149 },
                  end: { line: 22, column: 189 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 22, column: 149 },
                    end: { line: 22, column: 170 },
                  },
                  {
                    start: { line: 22, column: 174 },
                    end: { line: 22, column: 189 },
                  },
                ],
                line: 22,
              },
              7: {
                loc: {
                  start: { line: 22, column: 191 },
                  end: { line: 22, column: 231 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 22, column: 191 },
                    end: { line: 22, column: 217 },
                  },
                  {
                    start: { line: 22, column: 221 },
                    end: { line: 22, column: 231 },
                  },
                ],
                line: 22,
              },
              8: {
                loc: {
                  start: { line: 27, column: 20 },
                  end: { line: 29, column: 22 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 27, column: 20 },
                    end: { line: 27, column: 29 },
                  },
                  {
                    start: { line: 27, column: 47 },
                    end: { line: 29, column: 22 },
                  },
                ],
                line: 27,
              },
              9: {
                loc: {
                  start: { line: 28, column: 51 },
                  end: { line: 28, column: 115 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 28, column: 82 },
                    end: { line: 28, column: 97 },
                  },
                  {
                    start: { line: 28, column: 100 },
                    end: { line: 28, column: 115 },
                  },
                ],
                line: 28,
              },
              10: {
                loc: {
                  start: { line: 31, column: 46 },
                  end: { line: 31, column: 86 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 31, column: 46 },
                    end: { line: 31, column: 72 },
                  },
                  {
                    start: { line: 31, column: 76 },
                    end: { line: 31, column: 86 },
                  },
                ],
                line: 31,
              },
              11: {
                loc: {
                  start: { line: 33, column: 41 },
                  end: { line: 33, column: 78 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 33, column: 59 },
                    end: { line: 33, column: 68 },
                  },
                  {
                    start: { line: 33, column: 71 },
                    end: { line: 33, column: 78 },
                  },
                ],
                line: 33,
              },
              12: {
                loc: {
                  start: { line: 34, column: 38 },
                  end: { line: 34, column: 73 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 34, column: 62 },
                    end: { line: 34, column: 66 },
                  },
                  {
                    start: { line: 34, column: 69 },
                    end: { line: 34, column: 73 },
                  },
                ],
                line: 34,
              },
              13: {
                loc: {
                  start: { line: 37, column: 61 },
                  end: { line: 37, column: 116 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 37, column: 61 },
                    end: { line: 37, column: 76 },
                  },
                  {
                    start: { line: 37, column: 80 },
                    end: { line: 37, column: 116 },
                  },
                ],
                line: 37,
              },
              14: {
                loc: {
                  start: { line: 38, column: 57 },
                  end: { line: 38, column: 103 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 38, column: 75 },
                    end: { line: 38, column: 98 },
                  },
                  {
                    start: { line: 38, column: 101 },
                    end: { line: 38, column: 103 },
                  },
                ],
                line: 38,
              },
              15: {
                loc: {
                  start: { line: 47, column: 43 },
                  end: { line: 47, column: 62 },
                },
                type: 'default-arg',
                locations: [
                  {
                    start: { line: 47, column: 53 },
                    end: { line: 47, column: 62 },
                  },
                ],
                line: 47,
              },
              16: {
                loc: {
                  start: { line: 55, column: 0 },
                  end: { line: 55, column: 18 },
                },
                type: 'default-arg',
                locations: [
                  {
                    start: { line: 55, column: 16 },
                    end: { line: 55, column: 18 },
                  },
                ],
                line: 55,
              },
              17: {
                loc: {
                  start: { line: 55, column: 20 },
                  end: { line: 55, column: 35 },
                },
                type: 'default-arg',
                locations: [
                  {
                    start: { line: 55, column: 30 },
                    end: { line: 55, column: 35 },
                  },
                ],
                line: 55,
              },
              18: {
                loc: {
                  start: { line: 55, column: 37 },
                  end: { line: 55, column: 52 },
                },
                type: 'default-arg',
                locations: [
                  {
                    start: { line: 55, column: 47 },
                    end: { line: 55, column: 52 },
                  },
                ],
                line: 55,
              },
              19: {
                loc: {
                  start: { line: 55, column: 54 },
                  end: { line: 55, column: 72 },
                },
                type: 'default-arg',
                locations: [
                  {
                    start: { line: 55, column: 67 },
                    end: { line: 55, column: 72 },
                  },
                ],
                line: 55,
              },
              20: {
                loc: {
                  start: { line: 58, column: 11 },
                  end: { line: 70, column: 14 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 58, column: 20 },
                    end: { line: 70, column: 9 },
                  },
                  {
                    start: { line: 70, column: 12 },
                    end: { line: 70, column: 14 },
                  },
                ],
                line: 58,
              },
              21: {
                loc: {
                  start: { line: 71, column: 11 },
                  end: { line: 83, column: 14 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 71, column: 20 },
                    end: { line: 83, column: 9 },
                  },
                  {
                    start: { line: 83, column: 12 },
                    end: { line: 83, column: 14 },
                  },
                ],
                line: 71,
              },
              22: {
                loc: {
                  start: { line: 85, column: 11 },
                  end: { line: 97, column: 14 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 85, column: 20 },
                    end: { line: 97, column: 9 },
                  },
                  {
                    start: { line: 97, column: 12 },
                    end: { line: 97, column: 14 },
                  },
                ],
                line: 85,
              },
              23: {
                loc: {
                  start: { line: 98, column: 11 },
                  end: { line: 110, column: 14 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 98, column: 22 },
                    end: { line: 110, column: 9 },
                  },
                  {
                    start: { line: 110, column: 12 },
                    end: { line: 110, column: 14 },
                  },
                ],
                line: 98,
              },
              24: {
                loc: {
                  start: { line: 111, column: 11 },
                  end: { line: 123, column: 14 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 111, column: 25 },
                    end: { line: 123, column: 9 },
                  },
                  {
                    start: { line: 123, column: 12 },
                    end: { line: 123, column: 14 },
                  },
                ],
                line: 111,
              },
              25: {
                loc: {
                  start: { line: 124, column: 11 },
                  end: { line: 135, column: 14 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 124, column: 29 },
                    end: { line: 135, column: 9 },
                  },
                  {
                    start: { line: 135, column: 12 },
                    end: { line: 135, column: 14 },
                  },
                ],
                line: 124,
              },
              26: {
                loc: {
                  start: { line: 136, column: 11 },
                  end: { line: 148, column: 14 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 136, column: 20 },
                    end: { line: 148, column: 9 },
                  },
                  {
                    start: { line: 148, column: 12 },
                    end: { line: 148, column: 14 },
                  },
                ],
                line: 136,
              },
              27: {
                loc: {
                  start: { line: 150, column: 11 },
                  end: { line: 161, column: 14 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 150, column: 26 },
                    end: { line: 161, column: 9 },
                  },
                  {
                    start: { line: 161, column: 12 },
                    end: { line: 161, column: 14 },
                  },
                ],
                line: 150,
              },
              28: {
                loc: {
                  start: { line: 162, column: 11 },
                  end: { line: 173, column: 14 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 162, column: 27 },
                    end: { line: 173, column: 9 },
                  },
                  {
                    start: { line: 173, column: 12 },
                    end: { line: 173, column: 14 },
                  },
                ],
                line: 162,
              },
              29: {
                loc: {
                  start: { line: 174, column: 11 },
                  end: { line: 185, column: 14 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 174, column: 24 },
                    end: { line: 185, column: 9 },
                  },
                  {
                    start: { line: 185, column: 12 },
                    end: { line: 185, column: 14 },
                  },
                ],
                line: 174,
              },
              30: {
                loc: {
                  start: { line: 187, column: 11 },
                  end: { line: 198, column: 14 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 187, column: 21 },
                    end: { line: 198, column: 9 },
                  },
                  {
                    start: { line: 198, column: 12 },
                    end: { line: 198, column: 14 },
                  },
                ],
                line: 187,
              },
              31: {
                loc: {
                  start: { line: 199, column: 11 },
                  end: { line: 210, column: 14 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 199, column: 25 },
                    end: { line: 210, column: 9 },
                  },
                  {
                    start: { line: 210, column: 12 },
                    end: { line: 210, column: 14 },
                  },
                ],
                line: 199,
              },
              32: {
                loc: {
                  start: { line: 211, column: 11 },
                  end: { line: 221, column: 14 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 211, column: 23 },
                    end: { line: 221, column: 9 },
                  },
                  {
                    start: { line: 221, column: 12 },
                    end: { line: 221, column: 14 },
                  },
                ],
                line: 211,
              },
              33: {
                loc: {
                  start: { line: 223, column: 11 },
                  end: { line: 235, column: 14 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 223, column: 20 },
                    end: { line: 235, column: 9 },
                  },
                  {
                    start: { line: 235, column: 12 },
                    end: { line: 235, column: 14 },
                  },
                ],
                line: 223,
              },
              34: {
                loc: {
                  start: { line: 236, column: 11 },
                  end: { line: 246, column: 14 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 236, column: 21 },
                    end: { line: 246, column: 9 },
                  },
                  {
                    start: { line: 246, column: 12 },
                    end: { line: 246, column: 14 },
                  },
                ],
                line: 236,
              },
              35: {
                loc: {
                  start: { line: 247, column: 11 },
                  end: { line: 257, column: 14 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 247, column: 21 },
                    end: { line: 257, column: 9 },
                  },
                  {
                    start: { line: 257, column: 12 },
                    end: { line: 257, column: 14 },
                  },
                ],
                line: 247,
              },
              36: {
                loc: {
                  start: { line: 259, column: 11 },
                  end: { line: 272, column: 14 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 259, column: 26 },
                    end: { line: 272, column: 9 },
                  },
                  {
                    start: { line: 272, column: 12 },
                    end: { line: 272, column: 14 },
                  },
                ],
                line: 259,
              },
              37: {
                loc: {
                  start: { line: 262, column: 23 },
                  end: { line: 262, column: 61 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 262, column: 36 },
                    end: { line: 262, column: 47 },
                  },
                  {
                    start: { line: 262, column: 50 },
                    end: { line: 262, column: 61 },
                  },
                ],
                line: 262,
              },
              38: {
                loc: {
                  start: { line: 263, column: 22 },
                  end: { line: 267, column: 18 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 263, column: 49 },
                    end: { line: 265, column: 18 },
                  },
                  {
                    start: { line: 265, column: 35 },
                    end: { line: 267, column: 18 },
                  },
                ],
                line: 263,
              },
              39: {
                loc: {
                  start: { line: 273, column: 11 },
                  end: { line: 284, column: 14 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 273, column: 25 },
                    end: { line: 284, column: 9 },
                  },
                  {
                    start: { line: 284, column: 12 },
                    end: { line: 284, column: 14 },
                  },
                ],
                line: 273,
              },
              40: {
                loc: {
                  start: { line: 297, column: 12 },
                  end: { line: 299, column: 13 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 297, column: 12 },
                    end: { line: 299, column: 13 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 297,
              },
              41: {
                loc: {
                  start: { line: 297, column: 16 },
                  end: { line: 297, column: 66 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 297, column: 16 },
                    end: { line: 297, column: 27 },
                  },
                  {
                    start: { line: 297, column: 31 },
                    end: { line: 297, column: 66 },
                  },
                ],
                line: 297,
              },
              42: {
                loc: {
                  start: { line: 298, column: 16 },
                  end: { line: 298, column: 75 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 298, column: 57 },
                    end: { line: 298, column: 63 },
                  },
                  {
                    start: { line: 298, column: 66 },
                    end: { line: 298, column: 75 },
                  },
                ],
                line: 298,
              },
              43: {
                loc: {
                  start: { line: 298, column: 16 },
                  end: { line: 298, column: 54 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 298, column: 16 },
                    end: { line: 298, column: 32 },
                  },
                  {
                    start: { line: 298, column: 36 },
                    end: { line: 298, column: 54 },
                  },
                ],
                line: 298,
              },
              44: {
                loc: {
                  start: { line: 301, column: 8 },
                  end: { line: 304, column: 9 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 301, column: 8 },
                    end: { line: 304, column: 9 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 301,
              },
              45: {
                loc: {
                  start: { line: 309, column: 4 },
                  end: { line: 309, column: 30 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 309, column: 4 },
                    end: { line: 309, column: 30 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 309,
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
            },
            f: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 },
            b: {
              0: [0],
              1: [0],
              2: [0],
              3: [0, 0],
              4: [0, 0],
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
              15: [0],
              16: [0],
              17: [0],
              18: [0],
              19: [0],
              20: [0, 0],
              21: [0, 0],
              22: [0, 0],
              23: [0, 0],
              24: [0, 0],
              25: [0, 0],
              26: [0, 0],
              27: [0, 0],
              28: [0, 0],
              29: [0, 0],
              30: [0, 0],
              31: [0, 0],
              32: [0, 0],
              33: [0, 0],
              34: [0, 0],
              35: [0, 0],
              36: [0, 0],
              37: [0, 0],
              38: [0, 0],
              39: [0, 0],
              40: [0, 0],
              41: [0, 0],
              42: [0, 0],
              43: [0, 0],
              44: [0, 0],
              45: [0, 0],
            },
            inputSourceMap: {
              version: 3,
              sources: [
                '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/toolbar.tsx',
              ],
              sourcesContent: [
                "'use client'\n\nimport * as React from 'react'\nimport { cn } from '../../lib/utils'\nimport { Button } from '../../design-system/components/button'\nimport {\n  AlignCenterIcon,\n  AlignLeftIcon,\n  AlignRightIcon,\n  BoldIcon,\n  CheckSquareIcon,\n  CodeIcon,\n  DivideIcon,\n  EditIcon,\n  EyeIcon,\n  ImageIcon,\n  ItalicIcon,\n  LinkIcon,\n  ListIcon,\n  ListOrderedIcon,\n  MaximizeIcon,\n  MoreHorizontalIcon,\n  PaletteIcon,\n  QuoteIcon,\n  RedoIcon,\n  StrikethroughIcon,\n  TableIcon,\n  TypeIcon,\n  UnderlineIcon,\n  UndoIcon,\n} from 'lucide-react'\n\nexport interface ToolbarAction {\n  id: string\n  label: string\n  icon: React.ReactNode\n  action: () => void\n  isActive?: boolean\n  isDisabled?: boolean\n  shortcut?: string\n  group?: string\n}\n\ninterface ToolbarProps {\n  actions?: ToolbarAction[]\n  className?: string\n  variant?: 'default' | 'floating' | 'compact'\n  orientation?: 'horizontal' | 'vertical'\n}\n\nexport function Toolbar({\n  actions = [],\n  className,\n  variant = 'default',\n  orientation = 'horizontal',\n}: ToolbarProps) {\n  const groupedActions = React.useMemo(() => {\n    const groups: Record<string, ToolbarAction[]> = {}\n\n    actions.forEach((action) => {\n      const group = action.group || 'default'\n      if (!groups[group]) {\n        groups[group] = []\n      }\n      groups[group].push(action)\n    })\n\n    return groups\n  }, [actions])\n\n  return (\n    <div\n      className={cn(\n        'flex items-center gap-1 p-1 bg-background border border-border rounded-lg',\n        variant === 'floating' && 'shadow-lg bg-popover',\n        variant === 'compact' && 'gap-0.5 p-0.5',\n        orientation === 'vertical' && 'flex-col',\n        className\n      )}\n      role='toolbar'\n      aria-label='Formatting toolbar'\n    >\n      {Object.entries(groupedActions).map(\n        ([groupName, groupActions], index) => (\n          <React.Fragment key={`${groupName}-${index}`}>\n            {index > 0 && (\n              <div\n                className={cn(\n                  'bg-border',\n                  orientation === 'horizontal'\n                    ? 'w-px h-6 mx-1'\n                    : 'h-px w-6 my-1'\n                )}\n              />\n            )}\n            <div\n              className={cn('flex', orientation === 'vertical' && 'flex-col')}\n            >\n              {groupActions.map((action) => (\n                <Button\n                  key={action.id}\n                  variant={action.isActive ? 'default' : 'ghost'}\n                  size={variant === 'compact' ? 'sm' : 'sm'}\n                  onClick={action.action}\n                  disabled={action.isDisabled}\n                  className={cn(\n                    'h-8 w-8 p-0',\n                    action.isActive && 'bg-primary text-primary-foreground'\n                  )}\n                  title={`${action.label}${action.shortcut ? ` (${action.shortcut})` : ''}`}\n                >\n                  {action.icon}\n                </Button>\n              ))}\n            </div>\n          </React.Fragment>\n        )\n      )}\n    </div>\n  )\n}\n\n// Editor-specific toolbar with common formatting actions\nexport function EditorToolbar({\n  className,\n  variant = 'default',\n  // Text formatting callbacks\n  onBold,\n  onItalic,\n  onUnderline,\n  onStrikethrough,\n  onCode,\n  // List callbacks\n  onBulletList,\n  onOrderedList,\n  onTaskList,\n  // Block callbacks\n  onQuote,\n  onCodeBlock,\n  onDivider,\n  // Insert callbacks\n  onLink,\n  onImage,\n  onTable,\n  // Alignment callbacks\n  onAlignLeft,\n  onAlignCenter,\n  onAlignRight,\n  // History callbacks\n  onUndo,\n  onRedo,\n  // View callbacks\n  onToggleView,\n  onFocusMode,\n  // State\n  activeFormats = {},\n  canUndo = false,\n  canRedo = false,\n  isViewMode = false,\n}: {\n  className?: string\n  variant?: 'default' | 'floating' | 'compact'\n  // Text formatting\n  onBold?: () => void\n  onItalic?: () => void\n  onUnderline?: () => void\n  onStrikethrough?: () => void\n  onCode?: () => void\n  // Lists\n  onBulletList?: () => void\n  onOrderedList?: () => void\n  onTaskList?: () => void\n  // Blocks\n  onQuote?: () => void\n  onCodeBlock?: () => void\n  onDivider?: () => void\n  // Insert\n  onLink?: () => void\n  onImage?: () => void\n  onTable?: () => void\n  // Alignment\n  onAlignLeft?: () => void\n  onAlignCenter?: () => void\n  onAlignRight?: () => void\n  // History\n  onUndo?: () => void\n  onRedo?: () => void\n  // View\n  onToggleView?: () => void\n  onFocusMode?: () => void\n  // State\n  activeFormats?: Record<string, boolean>\n  canUndo?: boolean\n  canRedo?: boolean\n  isViewMode?: boolean\n}) {\n  const actions: ToolbarAction[] = [\n    // History\n    ...(onUndo\n      ? [\n          {\n            id: 'undo',\n            label: 'Undo',\n            icon: <UndoIcon className='h-4 w-4' />,\n            action: onUndo,\n            isDisabled: !canUndo,\n            shortcut: 'Cmd+Z',\n            group: 'history',\n          },\n        ]\n      : []),\n    ...(onRedo\n      ? [\n          {\n            id: 'redo',\n            label: 'Redo',\n            icon: <RedoIcon className='h-4 w-4' />,\n            action: onRedo,\n            isDisabled: !canRedo,\n            shortcut: 'Cmd+Shift+Z',\n            group: 'history',\n          },\n        ]\n      : []),\n\n    // Text formatting\n    ...(onBold\n      ? [\n          {\n            id: 'bold',\n            label: 'Bold',\n            icon: <BoldIcon className='h-4 w-4' />,\n            action: onBold,\n            isActive: activeFormats.bold,\n            shortcut: 'Cmd+B',\n            group: 'format',\n          },\n        ]\n      : []),\n    ...(onItalic\n      ? [\n          {\n            id: 'italic',\n            label: 'Italic',\n            icon: <ItalicIcon className='h-4 w-4' />,\n            action: onItalic,\n            isActive: activeFormats.italic,\n            shortcut: 'Cmd+I',\n            group: 'format',\n          },\n        ]\n      : []),\n    ...(onUnderline\n      ? [\n          {\n            id: 'underline',\n            label: 'Underline',\n            icon: <UnderlineIcon className='h-4 w-4' />,\n            action: onUnderline,\n            isActive: activeFormats.underline,\n            shortcut: 'Cmd+U',\n            group: 'format',\n          },\n        ]\n      : []),\n    ...(onStrikethrough\n      ? [\n          {\n            id: 'strikethrough',\n            label: 'Strikethrough',\n            icon: <StrikethroughIcon className='h-4 w-4' />,\n            action: onStrikethrough,\n            isActive: activeFormats.strikethrough,\n            group: 'format',\n          },\n        ]\n      : []),\n    ...(onCode\n      ? [\n          {\n            id: 'code',\n            label: 'Inline Code',\n            icon: <CodeIcon className='h-4 w-4' />,\n            action: onCode,\n            isActive: activeFormats.code,\n            shortcut: 'Cmd+E',\n            group: 'format',\n          },\n        ]\n      : []),\n\n    // Lists\n    ...(onBulletList\n      ? [\n          {\n            id: 'bullet-list',\n            label: 'Bullet List',\n            icon: <ListIcon className='h-4 w-4' />,\n            action: onBulletList,\n            isActive: activeFormats.bulletList,\n            group: 'list',\n          },\n        ]\n      : []),\n    ...(onOrderedList\n      ? [\n          {\n            id: 'ordered-list',\n            label: 'Numbered List',\n            icon: <ListOrderedIcon className='h-4 w-4' />,\n            action: onOrderedList,\n            isActive: activeFormats.orderedList,\n            group: 'list',\n          },\n        ]\n      : []),\n    ...(onTaskList\n      ? [\n          {\n            id: 'task-list',\n            label: 'Task List',\n            icon: <CheckSquareIcon className='h-4 w-4' />,\n            action: onTaskList,\n            isActive: activeFormats.taskList,\n            group: 'list',\n          },\n        ]\n      : []),\n\n    // Blocks\n    ...(onQuote\n      ? [\n          {\n            id: 'quote',\n            label: 'Quote',\n            icon: <QuoteIcon className='h-4 w-4' />,\n            action: onQuote,\n            isActive: activeFormats.quote,\n            group: 'block',\n          },\n        ]\n      : []),\n    ...(onCodeBlock\n      ? [\n          {\n            id: 'code-block',\n            label: 'Code Block',\n            icon: <CodeIcon className='h-4 w-4' />,\n            action: onCodeBlock,\n            isActive: activeFormats.codeBlock,\n            group: 'block',\n          },\n        ]\n      : []),\n    ...(onDivider\n      ? [\n          {\n            id: 'divider',\n            label: 'Divider',\n            icon: <DivideIcon className='h-4 w-4' />,\n            action: onDivider,\n            group: 'block',\n          },\n        ]\n      : []),\n\n    // Insert\n    ...(onLink\n      ? [\n          {\n            id: 'link',\n            label: 'Link',\n            icon: <LinkIcon className='h-4 w-4' />,\n            action: onLink,\n            isActive: activeFormats.link,\n            shortcut: 'Cmd+K',\n            group: 'insert',\n          },\n        ]\n      : []),\n    ...(onImage\n      ? [\n          {\n            id: 'image',\n            label: 'Image',\n            icon: <ImageIcon className='h-4 w-4' />,\n            action: onImage,\n            group: 'insert',\n          },\n        ]\n      : []),\n    ...(onTable\n      ? [\n          {\n            id: 'table',\n            label: 'Table',\n            icon: <TableIcon className='h-4 w-4' />,\n            action: onTable,\n            group: 'insert',\n          },\n        ]\n      : []),\n\n    // View\n    ...(onToggleView\n      ? [\n          {\n            id: 'toggle-view',\n            label: isViewMode ? 'Edit Mode' : 'View Mode',\n            icon: isViewMode ? (\n              <EditIcon className='h-4 w-4' />\n            ) : (\n              <EyeIcon className='h-4 w-4' />\n            ),\n            action: onToggleView,\n            shortcut: 'Cmd+Shift+E',\n            group: 'view',\n          },\n        ]\n      : []),\n    ...(onFocusMode\n      ? [\n          {\n            id: 'focus-mode',\n            label: 'Focus Mode',\n            icon: <MaximizeIcon className='h-4 w-4' />,\n            action: onFocusMode,\n            shortcut: 'Cmd+Shift+F',\n            group: 'view',\n          },\n        ]\n      : []),\n  ]\n\n  return <Toolbar actions={actions} className={className} variant={variant} />\n}\n\n// Context menu toolbar for floating/contextual actions\nexport function ContextToolbar({\n  x,\n  y,\n  visible,\n  onClose,\n  actions,\n  className,\n}: {\n  x: number\n  y: number\n  visible: boolean\n  onClose?: () => void\n  actions: ToolbarAction[]\n  className?: string\n}) {\n  const ref = React.useRef<HTMLDivElement>(null)\n\n  React.useEffect(() => {\n    function handleClickOutside(event: MouseEvent) {\n      if (ref.current && !ref.current.contains(event.target as Node)) {\n        onClose?.()\n      }\n    }\n\n    if (visible) {\n      document.addEventListener('mousedown', handleClickOutside)\n      return () => document.removeEventListener('mousedown', handleClickOutside)\n    }\n  }, [visible, onClose])\n\n  if (!visible) return null\n\n  return (\n    <div\n      ref={ref}\n      className={cn('fixed z-50 animate-in fade-in-0 zoom-in-95', className)}\n      style={{\n        left: x,\n        top: y,\n      }}\n    >\n      <Toolbar actions={actions} variant='floating' />\n    </div>\n  )\n}\n",
              ],
              names: [],
              mappings:
                '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L,KAAC,CAAC,CAAC;QACD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACX,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAC3E,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAChD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACxC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACxC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QAEV,CAAC,CAAC,CAAC,CAAC,EAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACb,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;kBAE7B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACjC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,YACpC,MAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;oBACjB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,cACZ,KAAC,CAAC,CAAC;wBACD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACX,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACX,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IACvB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IACd,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;kCAIxB,KAAC,CAAC,CAAC;wBACD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;kCAE9D,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,YAC5B,KAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gCAEJ,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gCAC9C,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gCACzC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gCACtB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gCAC3B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACX,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACb,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gCAExD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;0CAExE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;+BAXP,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;;eAhBD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;AAoCvD;AAEA,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;AACxD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAC5B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACT,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACnB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;AAC3B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACN,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACR,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACX,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACf,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACN,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;AAChB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACZ,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACb,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACV,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;AACjB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACP,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACX,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACT,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;AAClB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACN,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACP,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACP,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;AACrB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACX,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACb,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACZ,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;AACnB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACN,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACN,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;AAChB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACZ,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACX,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;AACP,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAClB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACf,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACf,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAqCnB,CAAC,CAAC;IACD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,AAAiB,CAAhB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QAC9B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;WACL,CAAC,CAAC,CAAC,CAAC,CAAC,IACL;YACE;gBACE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACV,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACb,CAAC,CAAC,CAAC,CAAC,CAAC,eAAC,KAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;oBAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;gBACtC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACd,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACpB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACjB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YAClB,CAAC;SACH,GACA,CAAC,CAAC,CAAC;WACH,CAAC,CAAC,CAAC,CAAC,CAAC,IACL;YACE;gBACE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACV,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACb,CAAC,CAAC,CAAC,CAAC,CAAC,eAAC,KAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;oBAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;gBACtC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACd,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACpB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACvB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YAClB,CAAC;SACH,GACA,CAAC,CAAC,CAAC;QAEP,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;WACb,CAAC,CAAC,CAAC,CAAC,CAAC,IACL;YACE;gBACE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACV,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACb,CAAC,CAAC,CAAC,CAAC,CAAC,eAAC,KAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;oBAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;gBACtC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACd,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBAC5B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACjB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YACjB,CAAC;SACH,GACA,CAAC,CAAC,CAAC;WACH,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IACP;YACE;gBACE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACZ,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACf,CAAC,CAAC,CAAC,CAAC,CAAC,eAAC,KAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;oBAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;gBACxC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBAChB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBAC9B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACjB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YACjB,CAAC;SACH,GACA,CAAC,CAAC,CAAC;WACH,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IACV;YACE;gBACE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACf,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBAClB,CAAC,CAAC,CAAC,CAAC,CAAC,eAAC,KAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;oBAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;gBAC3C,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACnB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACjC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACjB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YACjB,CAAC;SACH,GACA,CAAC,CAAC,CAAC;WACH,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IACd;YACE;gBACE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACnB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACtB,CAAC,CAAC,CAAC,CAAC,CAAC,eAAC,KAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;oBAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;gBAC/C,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACvB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACrC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YACjB,CAAC;SACH,GACA,CAAC,CAAC,CAAC;WACH,CAAC,CAAC,CAAC,CAAC,CAAC,IACL;YACE;gBACE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACV,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACpB,CAAC,CAAC,CAAC,CAAC,CAAC,eAAC,KAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;oBAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;gBACtC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACd,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBAC5B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACjB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YACjB,CAAC;SACH,GACA,CAAC,CAAC,CAAC;QAEP,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;WACH,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IACX;YACE;gBACE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACjB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACpB,CAAC,CAAC,CAAC,CAAC,CAAC,eAAC,KAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;oBAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;gBACtC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACpB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBAClC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YACf,CAAC;SACH,GACA,CAAC,CAAC,CAAC;WACH,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IACZ;YACE;gBACE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBAClB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACtB,CAAC,CAAC,CAAC,CAAC,CAAC,eAAC,KAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;oBAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;gBAC7C,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACrB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACnC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YACf,CAAC;SACH,GACA,CAAC,CAAC,CAAC;WACH,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IACT;YACE;gBACE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACf,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBAClB,CAAC,CAAC,CAAC,CAAC,CAAC,eAAC,KAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;oBAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;gBAC7C,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBAClB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBAChC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YACf,CAAC;SACH,GACA,CAAC,CAAC,CAAC;QAEP,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;WACJ,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IACN;YACE;gBACE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACX,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACd,CAAC,CAAC,CAAC,CAAC,CAAC,eAAC,KAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;oBAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;gBACvC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACf,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBAC7B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YAChB,CAAC;SACH,GACA,CAAC,CAAC,CAAC;WACH,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IACV;YACE;gBACE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBAChB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACnB,CAAC,CAAC,CAAC,CAAC,CAAC,eAAC,KAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;oBAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;gBACtC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACnB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACjC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YAChB,CAAC;SACH,GACA,CAAC,CAAC,CAAC;WACH,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IACR;YACE;gBACE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACb,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBAChB,CAAC,CAAC,CAAC,CAAC,CAAC,eAAC,KAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;oBAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;gBACxC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACjB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YAChB,CAAC;SACH,GACA,CAAC,CAAC,CAAC;QAEP,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;WACJ,CAAC,CAAC,CAAC,CAAC,CAAC,IACL;YACE;gBACE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACV,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACb,CAAC,CAAC,CAAC,CAAC,CAAC,eAAC,KAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;oBAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;gBACtC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACd,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBAC5B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACjB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YACjB,CAAC;SACH,GACA,CAAC,CAAC,CAAC;WACH,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IACN;YACE;gBACE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACX,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACd,CAAC,CAAC,CAAC,CAAC,CAAC,eAAC,KAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;oBAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;gBACvC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACf,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YACjB,CAAC;SACH,GACA,CAAC,CAAC,CAAC;WACH,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IACN;YACE;gBACE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACX,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACd,CAAC,CAAC,CAAC,CAAC,CAAC,eAAC,KAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;oBAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;gBACvC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACf,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YACjB,CAAC;SACH,GACA,CAAC,CAAC,CAAC;QAEP,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;WACF,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IACX;YACE;gBACE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACjB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBAC7C,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,cACjB,KAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;oBAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;mCAE/B,KAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;oBAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;gBAEhC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACpB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACvB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YACf,CAAC;SACH,GACA,CAAC,CAAC,CAAC;WACH,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IACV;YACE;gBACE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBAChB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACnB,CAAC,CAAC,CAAC,CAAC,CAAC,eAAC,KAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;oBAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;gBAC1C,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACnB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACvB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YACf,CAAC;SACH,GACA,CAAC,CAAC,CAAC;KACT;IAEA,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,eAAC,KAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;AAC7E;AAEA,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;AACtD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAC7B,CAAC,EACD,CAAC,EACD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACP,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACP,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACP,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAQV,CAAC,CAAC;IACD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAiB,AAAhB,CAAiB,AAAhB,CAAC,AAAgB,CAAf,AAAgB,CAAf,AAAgB,CAAf,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;IAExC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACpB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,AAAY,CAAX,AAAY,CAAX,AAAY,CAAX,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YAC1C,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,AAAQ,CAAP,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;kEAC7D,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YACZ;QACF;QAEA,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YACX,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YACzD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,AAAE,CAAD,AAAE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QAC3E;IACF,CAAC,CAAC,CAAC;QAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;KAAC;IAErB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;IAExB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,cACL,KAAC,CAAC,CAAC;QACD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACR,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACtE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YACL,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YACP,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACR,CAAC;gCAED,KAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;;AAGrD',
            },
            _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
            hash: 'ec5e030d31f8c39c7b077d3ca31ffaa937298ec7',
          },
          coverage = global[gcv] || (global[gcv] = {})
        ;(coverage[path] &&
          'ec5e030d31f8c39c7b077d3ca31ffaa937298ec7' === coverage[path].hash) ||
          (coverage[path] = coverageData)
        var actualCoverage = coverage[path]
        return (
          (cov_yyi2zsjcb = function () {
            return actualCoverage
          }),
          actualCoverage
        )
      }
      function Toolbar({
        actions = (cov_yyi2zsjcb().b[0][0]++, []),
        className,
        variant = (cov_yyi2zsjcb().b[1][0]++, 'default'),
        orientation = (cov_yyi2zsjcb().b[2][0]++, 'horizontal'),
      }) {
        cov_yyi2zsjcb().f[0]++
        const groupedActions =
          (cov_yyi2zsjcb().s[0]++,
          react.useMemo(() => {
            cov_yyi2zsjcb().f[1]++
            const groups = (cov_yyi2zsjcb().s[1]++, {})
            return (
              cov_yyi2zsjcb().s[2]++,
              actions.forEach((action) => {
                cov_yyi2zsjcb().f[2]++
                const group =
                  (cov_yyi2zsjcb().s[3]++,
                  cov_yyi2zsjcb().b[3][0]++,
                  action.group || (cov_yyi2zsjcb().b[3][1]++, 'default'))
                ;(cov_yyi2zsjcb().s[4]++,
                  groups[group]
                    ? cov_yyi2zsjcb().b[4][1]++
                    : (cov_yyi2zsjcb().b[4][0]++,
                      cov_yyi2zsjcb().s[5]++,
                      (groups[group] = [])),
                  cov_yyi2zsjcb().s[6]++,
                  groups[group].push(action))
              }),
              cov_yyi2zsjcb().s[7]++,
              groups
            )
          }, [actions]))
        return (
          cov_yyi2zsjcb().s[8]++,
          (0, jsx_runtime.jsx)('div', {
            className: (0, utils.cn)(
              'flex items-center gap-1 p-1 bg-background border border-border rounded-lg',
              (cov_yyi2zsjcb().b[5][0]++,
              'floating' === variant &&
                (cov_yyi2zsjcb().b[5][1]++, 'shadow-lg bg-popover')),
              (cov_yyi2zsjcb().b[6][0]++,
              'compact' === variant &&
                (cov_yyi2zsjcb().b[6][1]++, 'gap-0.5 p-0.5')),
              (cov_yyi2zsjcb().b[7][0]++,
              'vertical' === orientation &&
                (cov_yyi2zsjcb().b[7][1]++, 'flex-col')),
              className
            ),
            role: 'toolbar',
            'aria-label': 'Formatting toolbar',
            children: Object.entries(groupedActions).map(
              ([groupName, groupActions], index) => (
                cov_yyi2zsjcb().f[3]++,
                cov_yyi2zsjcb().s[9]++,
                (0, jsx_runtime.jsxs)(
                  react.Fragment,
                  {
                    children: [
                      (cov_yyi2zsjcb().b[8][0]++,
                      index > 0 &&
                        (cov_yyi2zsjcb().b[8][1]++,
                        (0, jsx_runtime.jsx)('div', {
                          className: (0, utils.cn)(
                            'bg-border',
                            'horizontal' === orientation
                              ? (cov_yyi2zsjcb().b[9][0]++, 'w-px h-6 mx-1')
                              : (cov_yyi2zsjcb().b[9][1]++, 'h-px w-6 my-1')
                          ),
                        }))),
                      (0, jsx_runtime.jsx)('div', {
                        className: (0, utils.cn)(
                          'flex',
                          (cov_yyi2zsjcb().b[10][0]++,
                          'vertical' === orientation &&
                            (cov_yyi2zsjcb().b[10][1]++, 'flex-col'))
                        ),
                        children: groupActions.map(
                          (action) => (
                            cov_yyi2zsjcb().f[4]++,
                            cov_yyi2zsjcb().s[10]++,
                            (0, jsx_runtime.jsx)(
                              components_button.$,
                              {
                                variant: action.isActive
                                  ? (cov_yyi2zsjcb().b[11][0]++, 'default')
                                  : (cov_yyi2zsjcb().b[11][1]++, 'ghost'),
                                size:
                                  'compact' === variant
                                    ? (cov_yyi2zsjcb().b[12][0]++, 'sm')
                                    : (cov_yyi2zsjcb().b[12][1]++, 'sm'),
                                onClick: action.action,
                                disabled: action.isDisabled,
                                className: (0, utils.cn)(
                                  'h-8 w-8 p-0',
                                  (cov_yyi2zsjcb().b[13][0]++,
                                  action.isActive &&
                                    (cov_yyi2zsjcb().b[13][1]++,
                                    'bg-primary text-primary-foreground'))
                                ),
                                title: `${action.label}${action.shortcut ? (cov_yyi2zsjcb().b[14][0]++, ` (${action.shortcut})`) : (cov_yyi2zsjcb().b[14][1]++, '')}`,
                                children: action.icon,
                              },
                              action.id
                            )
                          )
                        ),
                      }),
                    ],
                  },
                  `${groupName}-${index}`
                )
              )
            ),
          })
        )
      }
      function EditorToolbar({
        className,
        variant = (cov_yyi2zsjcb().b[15][0]++, 'default'),
        onBold,
        onItalic,
        onUnderline,
        onStrikethrough,
        onCode,
        onBulletList,
        onOrderedList,
        onTaskList,
        onQuote,
        onCodeBlock,
        onDivider,
        onLink,
        onImage,
        onTable,
        onAlignLeft,
        onAlignCenter,
        onAlignRight,
        onUndo,
        onRedo,
        onToggleView,
        onFocusMode,
        activeFormats = (cov_yyi2zsjcb().b[16][0]++, {}),
        canUndo = (cov_yyi2zsjcb().b[17][0]++, !1),
        canRedo = (cov_yyi2zsjcb().b[18][0]++, !1),
        isViewMode = (cov_yyi2zsjcb().b[19][0]++, !1),
      }) {
        cov_yyi2zsjcb().f[5]++
        const actions =
          (cov_yyi2zsjcb().s[11]++,
          [
            ...(onUndo
              ? (cov_yyi2zsjcb().b[20][0]++,
                [
                  {
                    id: 'undo',
                    label: 'Undo',
                    icon: (0, jsx_runtime.jsx)(undo.A, {
                      className: 'h-4 w-4',
                    }),
                    action: onUndo,
                    isDisabled: !canUndo,
                    shortcut: 'Cmd+Z',
                    group: 'history',
                  },
                ])
              : (cov_yyi2zsjcb().b[20][1]++, [])),
            ...(onRedo
              ? (cov_yyi2zsjcb().b[21][0]++,
                [
                  {
                    id: 'redo',
                    label: 'Redo',
                    icon: (0, jsx_runtime.jsx)(redo.A, {
                      className: 'h-4 w-4',
                    }),
                    action: onRedo,
                    isDisabled: !canRedo,
                    shortcut: 'Cmd+Shift+Z',
                    group: 'history',
                  },
                ])
              : (cov_yyi2zsjcb().b[21][1]++, [])),
            ...(onBold
              ? (cov_yyi2zsjcb().b[22][0]++,
                [
                  {
                    id: 'bold',
                    label: 'Bold',
                    icon: (0, jsx_runtime.jsx)(bold.A, {
                      className: 'h-4 w-4',
                    }),
                    action: onBold,
                    isActive: activeFormats.bold,
                    shortcut: 'Cmd+B',
                    group: 'format',
                  },
                ])
              : (cov_yyi2zsjcb().b[22][1]++, [])),
            ...(onItalic
              ? (cov_yyi2zsjcb().b[23][0]++,
                [
                  {
                    id: 'italic',
                    label: 'Italic',
                    icon: (0, jsx_runtime.jsx)(italic.A, {
                      className: 'h-4 w-4',
                    }),
                    action: onItalic,
                    isActive: activeFormats.italic,
                    shortcut: 'Cmd+I',
                    group: 'format',
                  },
                ])
              : (cov_yyi2zsjcb().b[23][1]++, [])),
            ...(onUnderline
              ? (cov_yyi2zsjcb().b[24][0]++,
                [
                  {
                    id: 'underline',
                    label: 'Underline',
                    icon: (0, jsx_runtime.jsx)(underline.A, {
                      className: 'h-4 w-4',
                    }),
                    action: onUnderline,
                    isActive: activeFormats.underline,
                    shortcut: 'Cmd+U',
                    group: 'format',
                  },
                ])
              : (cov_yyi2zsjcb().b[24][1]++, [])),
            ...(onStrikethrough
              ? (cov_yyi2zsjcb().b[25][0]++,
                [
                  {
                    id: 'strikethrough',
                    label: 'Strikethrough',
                    icon: (0, jsx_runtime.jsx)(strikethrough.A, {
                      className: 'h-4 w-4',
                    }),
                    action: onStrikethrough,
                    isActive: activeFormats.strikethrough,
                    group: 'format',
                  },
                ])
              : (cov_yyi2zsjcb().b[25][1]++, [])),
            ...(onCode
              ? (cov_yyi2zsjcb().b[26][0]++,
                [
                  {
                    id: 'code',
                    label: 'Inline Code',
                    icon: (0, jsx_runtime.jsx)(code.A, {
                      className: 'h-4 w-4',
                    }),
                    action: onCode,
                    isActive: activeFormats.code,
                    shortcut: 'Cmd+E',
                    group: 'format',
                  },
                ])
              : (cov_yyi2zsjcb().b[26][1]++, [])),
            ...(onBulletList
              ? (cov_yyi2zsjcb().b[27][0]++,
                [
                  {
                    id: 'bullet-list',
                    label: 'Bullet List',
                    icon: (0, jsx_runtime.jsx)(list.A, {
                      className: 'h-4 w-4',
                    }),
                    action: onBulletList,
                    isActive: activeFormats.bulletList,
                    group: 'list',
                  },
                ])
              : (cov_yyi2zsjcb().b[27][1]++, [])),
            ...(onOrderedList
              ? (cov_yyi2zsjcb().b[28][0]++,
                [
                  {
                    id: 'ordered-list',
                    label: 'Numbered List',
                    icon: (0, jsx_runtime.jsx)(list_ordered.A, {
                      className: 'h-4 w-4',
                    }),
                    action: onOrderedList,
                    isActive: activeFormats.orderedList,
                    group: 'list',
                  },
                ])
              : (cov_yyi2zsjcb().b[28][1]++, [])),
            ...(onTaskList
              ? (cov_yyi2zsjcb().b[29][0]++,
                [
                  {
                    id: 'task-list',
                    label: 'Task List',
                    icon: (0, jsx_runtime.jsx)(square_check_big.A, {
                      className: 'h-4 w-4',
                    }),
                    action: onTaskList,
                    isActive: activeFormats.taskList,
                    group: 'list',
                  },
                ])
              : (cov_yyi2zsjcb().b[29][1]++, [])),
            ...(onQuote
              ? (cov_yyi2zsjcb().b[30][0]++,
                [
                  {
                    id: 'quote',
                    label: 'Quote',
                    icon: (0, jsx_runtime.jsx)(quote.A, {
                      className: 'h-4 w-4',
                    }),
                    action: onQuote,
                    isActive: activeFormats.quote,
                    group: 'block',
                  },
                ])
              : (cov_yyi2zsjcb().b[30][1]++, [])),
            ...(onCodeBlock
              ? (cov_yyi2zsjcb().b[31][0]++,
                [
                  {
                    id: 'code-block',
                    label: 'Code Block',
                    icon: (0, jsx_runtime.jsx)(code.A, {
                      className: 'h-4 w-4',
                    }),
                    action: onCodeBlock,
                    isActive: activeFormats.codeBlock,
                    group: 'block',
                  },
                ])
              : (cov_yyi2zsjcb().b[31][1]++, [])),
            ...(onDivider
              ? (cov_yyi2zsjcb().b[32][0]++,
                [
                  {
                    id: 'divider',
                    label: 'Divider',
                    icon: (0, jsx_runtime.jsx)(divide.A, {
                      className: 'h-4 w-4',
                    }),
                    action: onDivider,
                    group: 'block',
                  },
                ])
              : (cov_yyi2zsjcb().b[32][1]++, [])),
            ...(onLink
              ? (cov_yyi2zsjcb().b[33][0]++,
                [
                  {
                    id: 'link',
                    label: 'Link',
                    icon: (0, jsx_runtime.jsx)(icons_link.A, {
                      className: 'h-4 w-4',
                    }),
                    action: onLink,
                    isActive: activeFormats.link,
                    shortcut: 'Cmd+K',
                    group: 'insert',
                  },
                ])
              : (cov_yyi2zsjcb().b[33][1]++, [])),
            ...(onImage
              ? (cov_yyi2zsjcb().b[34][0]++,
                [
                  {
                    id: 'image',
                    label: 'Image',
                    icon: (0, jsx_runtime.jsx)(icons_image.A, {
                      className: 'h-4 w-4',
                    }),
                    action: onImage,
                    group: 'insert',
                  },
                ])
              : (cov_yyi2zsjcb().b[34][1]++, [])),
            ...(onTable
              ? (cov_yyi2zsjcb().b[35][0]++,
                [
                  {
                    id: 'table',
                    label: 'Table',
                    icon: (0, jsx_runtime.jsx)(table.A, {
                      className: 'h-4 w-4',
                    }),
                    action: onTable,
                    group: 'insert',
                  },
                ])
              : (cov_yyi2zsjcb().b[35][1]++, [])),
            ...(onToggleView
              ? (cov_yyi2zsjcb().b[36][0]++,
                [
                  {
                    id: 'toggle-view',
                    label: isViewMode
                      ? (cov_yyi2zsjcb().b[37][0]++, 'Edit Mode')
                      : (cov_yyi2zsjcb().b[37][1]++, 'View Mode'),
                    icon: isViewMode
                      ? (cov_yyi2zsjcb().b[38][0]++,
                        (0, jsx_runtime.jsx)(square_pen.A, {
                          className: 'h-4 w-4',
                        }))
                      : (cov_yyi2zsjcb().b[38][1]++,
                        (0, jsx_runtime.jsx)(eye.A, { className: 'h-4 w-4' })),
                    action: onToggleView,
                    shortcut: 'Cmd+Shift+E',
                    group: 'view',
                  },
                ])
              : (cov_yyi2zsjcb().b[36][1]++, [])),
            ...(onFocusMode
              ? (cov_yyi2zsjcb().b[39][0]++,
                [
                  {
                    id: 'focus-mode',
                    label: 'Focus Mode',
                    icon: (0, jsx_runtime.jsx)(maximize.A, {
                      className: 'h-4 w-4',
                    }),
                    action: onFocusMode,
                    shortcut: 'Cmd+Shift+F',
                    group: 'view',
                  },
                ])
              : (cov_yyi2zsjcb().b[39][1]++, [])),
          ])
        return (
          cov_yyi2zsjcb().s[12]++,
          (0, jsx_runtime.jsx)(Toolbar, { actions, className, variant })
        )
      }
      function ContextToolbar({ x, y, visible, onClose, actions, className }) {
        cov_yyi2zsjcb().f[6]++
        const ref = (cov_yyi2zsjcb().s[13]++, react.useRef(null))
        return (
          cov_yyi2zsjcb().s[14]++,
          react.useEffect(() => {
            function handleClickOutside(event) {
              ;(cov_yyi2zsjcb().f[8]++,
                cov_yyi2zsjcb().s[15]++,
                cov_yyi2zsjcb().b[41][0]++,
                ref.current &&
                (cov_yyi2zsjcb().b[41][1]++,
                !ref.current.contains(event.target))
                  ? (cov_yyi2zsjcb().b[40][0]++,
                    cov_yyi2zsjcb().s[16]++,
                    cov_yyi2zsjcb().b[43][0]++,
                    null === onClose ||
                    (cov_yyi2zsjcb().b[43][1]++, void 0 === onClose)
                      ? cov_yyi2zsjcb().b[42][0]++
                      : (cov_yyi2zsjcb().b[42][1]++, onClose()))
                  : cov_yyi2zsjcb().b[40][1]++)
            }
            if ((cov_yyi2zsjcb().f[7]++, cov_yyi2zsjcb().s[17]++, visible))
              return (
                cov_yyi2zsjcb().b[44][0]++,
                cov_yyi2zsjcb().s[18]++,
                document.addEventListener('mousedown', handleClickOutside),
                cov_yyi2zsjcb().s[19]++,
                () => (
                  cov_yyi2zsjcb().f[9]++,
                  cov_yyi2zsjcb().s[20]++,
                  document.removeEventListener('mousedown', handleClickOutside)
                )
              )
            cov_yyi2zsjcb().b[44][1]++
          }, [visible, onClose]),
          cov_yyi2zsjcb().s[21]++,
          visible
            ? (cov_yyi2zsjcb().b[45][1]++,
              cov_yyi2zsjcb().s[23]++,
              (0, jsx_runtime.jsx)('div', {
                ref,
                className: (0, utils.cn)(
                  'fixed z-50 animate-in fade-in-0 zoom-in-95',
                  className
                ),
                style: { left: x, top: y },
                children: (0, jsx_runtime.jsx)(Toolbar, {
                  actions,
                  variant: 'floating',
                }),
              }))
            : (cov_yyi2zsjcb().b[45][0]++, cov_yyi2zsjcb().s[22]++, null)
        )
      }
      ;(cov_yyi2zsjcb(),
        cov_yyi2zsjcb().s[24]++,
        (Toolbar.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Toolbar',
          props: {
            actions: {
              required: !1,
              tsType: {
                name: 'Array',
                elements: [{ name: 'ToolbarAction' }],
                raw: 'ToolbarAction[]',
              },
              description: '',
              defaultValue: { value: '[]', computed: !1 },
            },
            className: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
            variant: {
              required: !1,
              tsType: {
                name: 'union',
                raw: "'default' | 'floating' | 'compact'",
                elements: [
                  { name: 'literal', value: "'default'" },
                  { name: 'literal', value: "'floating'" },
                  { name: 'literal', value: "'compact'" },
                ],
              },
              description: '',
              defaultValue: { value: "'default'", computed: !1 },
            },
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
          },
        }),
        cov_yyi2zsjcb().s[25]++,
        (EditorToolbar.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'EditorToolbar',
          props: {
            className: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
            variant: {
              required: !1,
              tsType: {
                name: 'union',
                raw: "'default' | 'floating' | 'compact'",
                elements: [
                  { name: 'literal', value: "'default'" },
                  { name: 'literal', value: "'floating'" },
                  { name: 'literal', value: "'compact'" },
                ],
              },
              description: '',
              defaultValue: { value: "'default'", computed: !1 },
            },
            onBold: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
              },
              description: '',
            },
            onItalic: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
              },
              description: '',
            },
            onUnderline: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
              },
              description: '',
            },
            onStrikethrough: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
              },
              description: '',
            },
            onCode: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
              },
              description: '',
            },
            onBulletList: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
              },
              description: '',
            },
            onOrderedList: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
              },
              description: '',
            },
            onTaskList: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
              },
              description: '',
            },
            onQuote: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
              },
              description: '',
            },
            onCodeBlock: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
              },
              description: '',
            },
            onDivider: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
              },
              description: '',
            },
            onLink: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
              },
              description: '',
            },
            onImage: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
              },
              description: '',
            },
            onTable: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
              },
              description: '',
            },
            onAlignLeft: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
              },
              description: '',
            },
            onAlignCenter: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
              },
              description: '',
            },
            onAlignRight: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
              },
              description: '',
            },
            onUndo: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
              },
              description: '',
            },
            onRedo: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
              },
              description: '',
            },
            onToggleView: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
              },
              description: '',
            },
            onFocusMode: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
              },
              description: '',
            },
            activeFormats: {
              required: !1,
              tsType: {
                name: 'Record',
                elements: [{ name: 'string' }, { name: 'boolean' }],
                raw: 'Record<string, boolean>',
              },
              description: '',
              defaultValue: { value: '{}', computed: !1 },
            },
            canUndo: {
              required: !1,
              tsType: { name: 'boolean' },
              description: '',
              defaultValue: { value: 'false', computed: !1 },
            },
            canRedo: {
              required: !1,
              tsType: { name: 'boolean' },
              description: '',
              defaultValue: { value: 'false', computed: !1 },
            },
            isViewMode: {
              required: !1,
              tsType: { name: 'boolean' },
              description: '',
              defaultValue: { value: 'false', computed: !1 },
            },
          },
        }),
        cov_yyi2zsjcb().s[26]++,
        (ContextToolbar.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'ContextToolbar',
          props: {
            x: { required: !0, tsType: { name: 'number' }, description: '' },
            y: { required: !0, tsType: { name: 'number' }, description: '' },
            visible: {
              required: !0,
              tsType: { name: 'boolean' },
              description: '',
            },
            onClose: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
              },
              description: '',
            },
            actions: {
              required: !0,
              tsType: {
                name: 'Array',
                elements: [{ name: 'ToolbarAction' }],
                raw: 'ToolbarAction[]',
              },
              description: '',
            },
            className: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
          },
        }))
      var copy = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/copy.js'
        ),
        scissors = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/scissors.js'
        ),
        clipboard = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/clipboard.js'
        ),
        trash = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/trash.js'
        ),
        save = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/save.js'
        ),
        printer = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/printer.js'
        ),
        share = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/share.js'
        ),
        star = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/star.js'
        ),
        heart = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/heart.js'
        ),
        bookmark = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/bookmark.js'
        ),
        download = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/download.js'
        ),
        settings = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/settings.js'
        ),
        dist = __webpack_require__(
          '../../node_modules/.pnpm/@storybook+test@8.6.14_storybook@9.0.18_@testing-library+dom@10.4.0_prettier@3.6.2_/node_modules/@storybook/test/dist/index.mjs'
        ),
        console = __webpack_require__(
          '../../node_modules/.pnpm/console-browserify@1.2.0/node_modules/console-browserify/index.js'
        )
      const toolbar_stories = {
          title: 'UI/Toolbar',
          component: Toolbar,
          parameters: { layout: 'centered' },
          tags: ['autodocs'],
          argTypes: {
            variant: {
              control: 'select',
              options: ['default', 'floating', 'compact'],
              description: 'Visual style of the toolbar',
            },
            orientation: {
              control: 'select',
              options: ['horizontal', 'vertical'],
              description: 'Layout orientation',
            },
          },
          decorators: [
            (Story) =>
              (0, jsx_runtime.jsx)('div', {
                className: 'min-w-[800px] min-h-[400px] p-8',
                children: (0, jsx_runtime.jsx)(Story, {}),
              }),
          ],
        },
        basicActions = [
          {
            id: 'bold',
            label: 'Bold',
            icon: (0, jsx_runtime.jsx)(bold.A, { className: 'h-4 w-4' }),
            action: () => console.info('Bold clicked'),
            shortcut: 'Cmd+B',
          },
          {
            id: 'italic',
            label: 'Italic',
            icon: (0, jsx_runtime.jsx)(italic.A, { className: 'h-4 w-4' }),
            action: () => console.info('Italic clicked'),
            shortcut: 'Cmd+I',
          },
          {
            id: 'underline',
            label: 'Underline',
            icon: (0, jsx_runtime.jsx)(underline.A, { className: 'h-4 w-4' }),
            action: () => console.info('Underline clicked'),
            shortcut: 'Cmd+U',
          },
        ],
        Default = {
          args: {
            actions: basicActions,
            variant: 'default',
            orientation: 'horizontal',
          },
        },
        WithGroups = {
          args: {
            actions: [
              {
                id: 'copy',
                label: 'Copy',
                icon: (0, jsx_runtime.jsx)(copy.A, { className: 'h-4 w-4' }),
                action: () => console.info('Copy clicked'),
                group: 'clipboard',
              },
              {
                id: 'cut',
                label: 'Cut',
                icon: (0, jsx_runtime.jsx)(scissors.A, {
                  className: 'h-4 w-4',
                }),
                action: () => console.info('Cut clicked'),
                group: 'clipboard',
              },
              {
                id: 'paste',
                label: 'Paste',
                icon: (0, jsx_runtime.jsx)(clipboard.A, {
                  className: 'h-4 w-4',
                }),
                action: () => console.info('Paste clicked'),
                group: 'clipboard',
              },
              {
                id: 'bold',
                label: 'Bold',
                icon: (0, jsx_runtime.jsx)(bold.A, { className: 'h-4 w-4' }),
                action: () => console.info('Bold clicked'),
                group: 'format',
              },
              {
                id: 'italic',
                label: 'Italic',
                icon: (0, jsx_runtime.jsx)(italic.A, { className: 'h-4 w-4' }),
                action: () => console.info('Italic clicked'),
                group: 'format',
              },
              {
                id: 'delete',
                label: 'Delete',
                icon: (0, jsx_runtime.jsx)(trash.A, { className: 'h-4 w-4' }),
                action: () => console.info('Delete clicked'),
                group: 'actions',
              },
            ],
          },
        },
        ActiveStates = {
          args: {
            actions: [
              {
                id: 'bold',
                label: 'Bold',
                icon: (0, jsx_runtime.jsx)(bold.A, { className: 'h-4 w-4' }),
                action: () => console.info('Bold clicked'),
                isActive: !0,
              },
              {
                id: 'italic',
                label: 'Italic',
                icon: (0, jsx_runtime.jsx)(italic.A, { className: 'h-4 w-4' }),
                action: () => console.info('Italic clicked'),
                isActive: !1,
              },
              {
                id: 'underline',
                label: 'Underline',
                icon: (0, jsx_runtime.jsx)(underline.A, {
                  className: 'h-4 w-4',
                }),
                action: () => console.info('Underline clicked'),
                isActive: !0,
              },
            ],
          },
        },
        DisabledStates = {
          args: {
            actions: [
              {
                id: 'save',
                label: 'Save',
                icon: (0, jsx_runtime.jsx)(save.A, { className: 'h-4 w-4' }),
                action: () => console.info('Save clicked'),
                isDisabled: !1,
              },
              {
                id: 'print',
                label: 'Print',
                icon: (0, jsx_runtime.jsx)(printer.A, { className: 'h-4 w-4' }),
                action: () => console.info('Print clicked'),
                isDisabled: !0,
              },
              {
                id: 'share',
                label: 'Share',
                icon: (0, jsx_runtime.jsx)(share.A, { className: 'h-4 w-4' }),
                action: () => console.info('Share clicked'),
                isDisabled: !0,
              },
            ],
          },
        },
        FloatingVariant = {
          args: { actions: basicActions, variant: 'floating' },
        },
        CompactVariant = {
          args: {
            actions: [
              ...basicActions,
              {
                id: 'code',
                label: 'Code',
                icon: (0, jsx_runtime.jsx)(code.A, { className: 'h-4 w-4' }),
                action: () => console.info('Code clicked'),
              },
              {
                id: 'link',
                label: 'Link',
                icon: (0, jsx_runtime.jsx)(icons_link.A, {
                  className: 'h-4 w-4',
                }),
                action: () => console.info('Link clicked'),
              },
            ],
            variant: 'compact',
          },
        },
        VerticalOrientation = {
          args: {
            actions: [
              {
                id: 'star',
                label: 'Star',
                icon: (0, jsx_runtime.jsx)(star.A, { className: 'h-4 w-4' }),
                action: () => console.info('Star clicked'),
                group: 'favorites',
              },
              {
                id: 'heart',
                label: 'Heart',
                icon: (0, jsx_runtime.jsx)(heart.A, { className: 'h-4 w-4' }),
                action: () => console.info('Heart clicked'),
                group: 'favorites',
              },
              {
                id: 'bookmark',
                label: 'Bookmark',
                icon: (0, jsx_runtime.jsx)(bookmark.A, {
                  className: 'h-4 w-4',
                }),
                action: () => console.info('Bookmark clicked'),
                group: 'favorites',
              },
              {
                id: 'download',
                label: 'Download',
                icon: (0, jsx_runtime.jsx)(download.A, {
                  className: 'h-4 w-4',
                }),
                action: () => console.info('Download clicked'),
                group: 'actions',
              },
              {
                id: 'settings',
                label: 'Settings',
                icon: (0, jsx_runtime.jsx)(settings.A, {
                  className: 'h-4 w-4',
                }),
                action: () => console.info('Settings clicked'),
                group: 'actions',
              },
            ],
            orientation: 'vertical',
          },
        },
        EditorToolbarDefault = {
          render: () => {
            const [activeFormats, setActiveFormats] = (0, react.useState)({
              bold: !1,
              italic: !1,
              underline: !1,
              bulletList: !1,
            })
            return (0, jsx_runtime.jsx)(EditorToolbar, {
              onBold: () => {
                ;(setActiveFormats({
                  ...activeFormats,
                  bold: !activeFormats.bold,
                }),
                  console.info('Bold toggled'))
              },
              onItalic: () => {
                ;(setActiveFormats({
                  ...activeFormats,
                  italic: !activeFormats.italic,
                }),
                  console.info('Italic toggled'))
              },
              onUnderline: () => {
                ;(setActiveFormats({
                  ...activeFormats,
                  underline: !activeFormats.underline,
                }),
                  console.info('Underline toggled'))
              },
              onStrikethrough: () => console.info('Strikethrough clicked'),
              onCode: () => console.info('Code clicked'),
              onBulletList: () => {
                ;(setActiveFormats({
                  ...activeFormats,
                  bulletList: !activeFormats.bulletList,
                }),
                  console.info('Bullet list toggled'))
              },
              onOrderedList: () => console.info('Ordered list clicked'),
              onTaskList: () => console.info('Task list clicked'),
              onQuote: () => console.info('Quote clicked'),
              onCodeBlock: () => console.info('Code block clicked'),
              onDivider: () => console.info('Divider clicked'),
              onLink: () => console.info('Link clicked'),
              onImage: () => console.info('Image clicked'),
              onTable: () => console.info('Table clicked'),
              onUndo: () => console.info('Undo clicked'),
              onRedo: () => console.info('Redo clicked'),
              activeFormats,
              canUndo: !0,
              canRedo: !1,
            })
          },
        },
        EditorToolbarCompact = {
          render: () =>
            (0, jsx_runtime.jsx)(EditorToolbar, {
              variant: 'compact',
              onBold: () => console.info('Bold clicked'),
              onItalic: () => console.info('Italic clicked'),
              onUnderline: () => console.info('Underline clicked'),
              onLink: () => console.info('Link clicked'),
              activeFormats: {},
            }),
        },
        EditorToolbarFloating = {
          render: () =>
            (0, jsx_runtime.jsx)(EditorToolbar, {
              variant: 'floating',
              onBold: () => console.info('Bold clicked'),
              onItalic: () => console.info('Italic clicked'),
              onUnderline: () => console.info('Underline clicked'),
              onCode: () => console.info('Code clicked'),
              onBulletList: () => console.info('Bullet list clicked'),
              onOrderedList: () => console.info('Ordered list clicked'),
              activeFormats: { bold: !0, italic: !1 },
            }),
        },
        EditorToolbarWithViewMode = {
          render: () => {
            const [isViewMode, setIsViewMode] = (0, react.useState)(!1)
            return (0, jsx_runtime.jsx)(EditorToolbar, {
              onBold: () => console.info('Bold clicked'),
              onItalic: () => console.info('Italic clicked'),
              onToggleView: () => {
                ;(setIsViewMode(!isViewMode), console.info('View mode toggled'))
              },
              onFocusMode: () => console.info('Focus mode clicked'),
              isViewMode,
              activeFormats: {},
            })
          },
        },
        ContextToolbarDemo = {
          render: () => {
            const [showContext, setShowContext] = (0, react.useState)(!1),
              [position, setPosition] = (0, react.useState)({ x: 0, y: 0 }),
              contextActions = [
                {
                  id: 'copy',
                  label: 'Copy',
                  icon: (0, jsx_runtime.jsx)(copy.A, { className: 'h-4 w-4' }),
                  action: () => {
                    ;(console.info('Copy from context'), setShowContext(!1))
                  },
                },
                {
                  id: 'cut',
                  label: 'Cut',
                  icon: (0, jsx_runtime.jsx)(scissors.A, {
                    className: 'h-4 w-4',
                  }),
                  action: () => {
                    ;(console.info('Cut from context'), setShowContext(!1))
                  },
                },
                {
                  id: 'paste',
                  label: 'Paste',
                  icon: (0, jsx_runtime.jsx)(clipboard.A, {
                    className: 'h-4 w-4',
                  }),
                  action: () => {
                    ;(console.info('Paste from context'), setShowContext(!1))
                  },
                },
              ]
            return (0, jsx_runtime.jsxs)('div', {
              className: 'relative',
              children: [
                (0, jsx_runtime.jsx)('div', {
                  className:
                    'p-4 border rounded-lg bg-muted/50 cursor-pointer select-none',
                  onContextMenu: (e) => {
                    ;(e.preventDefault(),
                      setPosition({ x: e.clientX, y: e.clientY }),
                      setShowContext(!0))
                  },
                  children:
                    'Right-click anywhere in this area to show context toolbar',
                }),
                (0, jsx_runtime.jsx)(ContextToolbar, {
                  x: position.x,
                  y: position.y,
                  visible: showContext,
                  onClose: () => setShowContext(!1),
                  actions: contextActions,
                }),
              ],
            })
          },
        },
        InteractiveToolbar = {
          args: { actions: basicActions },
          play: async ({ canvasElement }) => {
            const canvas = (0, dist.ux)(canvasElement)
            await new Promise((resolve) => setTimeout(resolve, 100))
            const boldButton = canvas.getByTitle('Bold (Cmd+B)')
            await dist.Q4.click(boldButton)
            const toolbar = canvas.getByRole('toolbar')
            await (0, dist.E3)(toolbar).toBeInTheDocument()
            const italicButton = canvas.getByTitle('Italic (Cmd+I)')
            await dist.Q4.click(italicButton)
            const underlineButton = canvas.getByTitle('Underline (Cmd+U)')
            await dist.Q4.hover(underlineButton)
          },
        },
        GroupSeparators = {
          args: {
            actions: [
              {
                id: '1',
                label: 'Action 1',
                icon: (0, jsx_runtime.jsx)(bold.A, { className: 'h-4 w-4' }),
                action: () => console.info('Action 1'),
                group: 'group1',
              },
              {
                id: '2',
                label: 'Action 2',
                icon: (0, jsx_runtime.jsx)(italic.A, { className: 'h-4 w-4' }),
                action: () => console.info('Action 2'),
                group: 'group1',
              },
              {
                id: '3',
                label: 'Action 3',
                icon: (0, jsx_runtime.jsx)(icons_link.A, {
                  className: 'h-4 w-4',
                }),
                action: () => console.info('Action 3'),
                group: 'group2',
              },
              {
                id: '4',
                label: 'Action 4',
                icon: (0, jsx_runtime.jsx)(icons_image.A, {
                  className: 'h-4 w-4',
                }),
                action: () => console.info('Action 4'),
                group: 'group2',
              },
              {
                id: '5',
                label: 'Action 5',
                icon: (0, jsx_runtime.jsx)(save.A, { className: 'h-4 w-4' }),
                action: () => console.info('Action 5'),
                group: 'group3',
              },
            ],
          },
          play: async ({ canvasElement }) => {
            const canvas = (0, dist.ux)(canvasElement)
            await new Promise((resolve) => setTimeout(resolve, 100))
            const separators = canvas
              .getAllByRole('toolbar')[0]
              .querySelectorAll('.bg-border')
            await (0, dist.E3)(separators).toHaveLength(2)
          },
        },
        ToggleActiveState = {
          render: () => {
            const [activeItems, setActiveItems] = (0, react.useState)(
                new Set(['bold'])
              ),
              toggleActive = (id) => {
                const newActive = new Set(activeItems)
                ;(newActive.has(id) ? newActive.delete(id) : newActive.add(id),
                  setActiveItems(newActive))
              },
              actions = [
                {
                  id: 'bold',
                  label: 'Bold',
                  icon: (0, jsx_runtime.jsx)(bold.A, { className: 'h-4 w-4' }),
                  action: () => toggleActive('bold'),
                  isActive: activeItems.has('bold'),
                },
                {
                  id: 'italic',
                  label: 'Italic',
                  icon: (0, jsx_runtime.jsx)(italic.A, {
                    className: 'h-4 w-4',
                  }),
                  action: () => toggleActive('italic'),
                  isActive: activeItems.has('italic'),
                },
                {
                  id: 'underline',
                  label: 'Underline',
                  icon: (0, jsx_runtime.jsx)(underline.A, {
                    className: 'h-4 w-4',
                  }),
                  action: () => toggleActive('underline'),
                  isActive: activeItems.has('underline'),
                },
                {
                  id: 'code',
                  label: 'Code',
                  icon: (0, jsx_runtime.jsx)(code.A, { className: 'h-4 w-4' }),
                  action: () => toggleActive('code'),
                  isActive: activeItems.has('code'),
                },
              ]
            return (0, jsx_runtime.jsxs)('div', {
              children: [
                (0, jsx_runtime.jsx)(Toolbar, { actions }),
                (0, jsx_runtime.jsxs)('div', {
                  className: 'mt-4 text-sm text-muted-foreground',
                  children: [
                    'Active: ',
                    Array.from(activeItems).join(', ') || 'None',
                  ],
                }),
              ],
            })
          },
          play: async ({ canvasElement }) => {
            const canvas = (0, dist.ux)(canvasElement)
            await new Promise((resolve) => setTimeout(resolve, 100))
            const italicButton = canvas.getByTitle('Italic')
            ;(await dist.Q4.click(italicButton),
              await (0, dist.E3)(
                canvas.getByText('Active: bold, italic')
              ).toBeInTheDocument())
            const boldButton = canvas.getByTitle('Bold')
            ;(await dist.Q4.click(boldButton),
              await (0, dist.E3)(
                canvas.getByText('Active: italic')
              ).toBeInTheDocument())
          },
        },
        ManyActions = {
          args: {
            actions: [
              ...basicActions,
              {
                id: 'strikethrough',
                label: 'Strikethrough',
                icon: (0, jsx_runtime.jsx)(bold.A, { className: 'h-4 w-4' }),
                action: () => console.info('Strikethrough'),
                group: 'format',
              },
              {
                id: 'code',
                label: 'Code',
                icon: (0, jsx_runtime.jsx)(code.A, { className: 'h-4 w-4' }),
                action: () => console.info('Code'),
                group: 'format',
              },
              {
                id: 'bullet',
                label: 'Bullet List',
                icon: (0, jsx_runtime.jsx)(list.A, { className: 'h-4 w-4' }),
                action: () => console.info('Bullet'),
                group: 'list',
              },
              {
                id: 'numbered',
                label: 'Numbered List',
                icon: (0, jsx_runtime.jsx)(list_ordered.A, {
                  className: 'h-4 w-4',
                }),
                action: () => console.info('Numbered'),
                group: 'list',
              },
              {
                id: 'checklist',
                label: 'Checklist',
                icon: (0, jsx_runtime.jsx)(square_check_big.A, {
                  className: 'h-4 w-4',
                }),
                action: () => console.info('Checklist'),
                group: 'list',
              },
              {
                id: 'quote',
                label: 'Quote',
                icon: (0, jsx_runtime.jsx)(quote.A, { className: 'h-4 w-4' }),
                action: () => console.info('Quote'),
                group: 'block',
              },
              {
                id: 'link',
                label: 'Link',
                icon: (0, jsx_runtime.jsx)(icons_link.A, {
                  className: 'h-4 w-4',
                }),
                action: () => console.info('Link'),
                group: 'insert',
              },
              {
                id: 'image',
                label: 'Image',
                icon: (0, jsx_runtime.jsx)(icons_image.A, {
                  className: 'h-4 w-4',
                }),
                action: () => console.info('Image'),
                group: 'insert',
              },
            ],
            variant: 'compact',
          },
        },
        __namedExportsOrder = [
          'Default',
          'WithGroups',
          'ActiveStates',
          'DisabledStates',
          'FloatingVariant',
          'CompactVariant',
          'VerticalOrientation',
          'EditorToolbarDefault',
          'EditorToolbarCompact',
          'EditorToolbarFloating',
          'EditorToolbarWithViewMode',
          'ContextToolbarDemo',
          'InteractiveToolbar',
          'GroupSeparators',
          'ToggleActiveState',
          'ManyActions',
        ]
      ;((Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              "{\n  args: {\n    actions: basicActions,\n    variant: 'default',\n    orientation: 'horizontal'\n  }\n}",
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (WithGroups.parameters = {
          ...WithGroups.parameters,
          docs: {
            ...WithGroups.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    actions: [{\n      id: 'copy',\n      label: 'Copy',\n      icon: <CopyIcon className='h-4 w-4' />,\n      action: () => console.info('Copy clicked'),\n      group: 'clipboard'\n    }, {\n      id: 'cut',\n      label: 'Cut',\n      icon: <ScissorsIcon className='h-4 w-4' />,\n      action: () => console.info('Cut clicked'),\n      group: 'clipboard'\n    }, {\n      id: 'paste',\n      label: 'Paste',\n      icon: <ClipboardIcon className='h-4 w-4' />,\n      action: () => console.info('Paste clicked'),\n      group: 'clipboard'\n    }, {\n      id: 'bold',\n      label: 'Bold',\n      icon: <BoldIcon className='h-4 w-4' />,\n      action: () => console.info('Bold clicked'),\n      group: 'format'\n    }, {\n      id: 'italic',\n      label: 'Italic',\n      icon: <ItalicIcon className='h-4 w-4' />,\n      action: () => console.info('Italic clicked'),\n      group: 'format'\n    }, {\n      id: 'delete',\n      label: 'Delete',\n      icon: <TrashIcon className='h-4 w-4' />,\n      action: () => console.info('Delete clicked'),\n      group: 'actions'\n    }]\n  }\n}",
              ...WithGroups.parameters?.docs?.source,
            },
          },
        }),
        (ActiveStates.parameters = {
          ...ActiveStates.parameters,
          docs: {
            ...ActiveStates.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    actions: [{\n      id: 'bold',\n      label: 'Bold',\n      icon: <BoldIcon className='h-4 w-4' />,\n      action: () => console.info('Bold clicked'),\n      isActive: true\n    }, {\n      id: 'italic',\n      label: 'Italic',\n      icon: <ItalicIcon className='h-4 w-4' />,\n      action: () => console.info('Italic clicked'),\n      isActive: false\n    }, {\n      id: 'underline',\n      label: 'Underline',\n      icon: <UnderlineIcon className='h-4 w-4' />,\n      action: () => console.info('Underline clicked'),\n      isActive: true\n    }]\n  }\n}",
              ...ActiveStates.parameters?.docs?.source,
            },
          },
        }),
        (DisabledStates.parameters = {
          ...DisabledStates.parameters,
          docs: {
            ...DisabledStates.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    actions: [{\n      id: 'save',\n      label: 'Save',\n      icon: <SaveIcon className='h-4 w-4' />,\n      action: () => console.info('Save clicked'),\n      isDisabled: false\n    }, {\n      id: 'print',\n      label: 'Print',\n      icon: <PrinterIcon className='h-4 w-4' />,\n      action: () => console.info('Print clicked'),\n      isDisabled: true\n    }, {\n      id: 'share',\n      label: 'Share',\n      icon: <ShareIcon className='h-4 w-4' />,\n      action: () => console.info('Share clicked'),\n      isDisabled: true\n    }]\n  }\n}",
              ...DisabledStates.parameters?.docs?.source,
            },
          },
        }),
        (FloatingVariant.parameters = {
          ...FloatingVariant.parameters,
          docs: {
            ...FloatingVariant.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    actions: basicActions,\n    variant: 'floating'\n  }\n}",
              ...FloatingVariant.parameters?.docs?.source,
            },
          },
        }),
        (CompactVariant.parameters = {
          ...CompactVariant.parameters,
          docs: {
            ...CompactVariant.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    actions: [...basicActions, {\n      id: 'code',\n      label: 'Code',\n      icon: <CodeIcon className='h-4 w-4' />,\n      action: () => console.info('Code clicked')\n    }, {\n      id: 'link',\n      label: 'Link',\n      icon: <LinkIcon className='h-4 w-4' />,\n      action: () => console.info('Link clicked')\n    }],\n    variant: 'compact'\n  }\n}",
              ...CompactVariant.parameters?.docs?.source,
            },
          },
        }),
        (VerticalOrientation.parameters = {
          ...VerticalOrientation.parameters,
          docs: {
            ...VerticalOrientation.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    actions: [{\n      id: 'star',\n      label: 'Star',\n      icon: <StarIcon className='h-4 w-4' />,\n      action: () => console.info('Star clicked'),\n      group: 'favorites'\n    }, {\n      id: 'heart',\n      label: 'Heart',\n      icon: <HeartIcon className='h-4 w-4' />,\n      action: () => console.info('Heart clicked'),\n      group: 'favorites'\n    }, {\n      id: 'bookmark',\n      label: 'Bookmark',\n      icon: <BookmarkIcon className='h-4 w-4' />,\n      action: () => console.info('Bookmark clicked'),\n      group: 'favorites'\n    }, {\n      id: 'download',\n      label: 'Download',\n      icon: <DownloadIcon className='h-4 w-4' />,\n      action: () => console.info('Download clicked'),\n      group: 'actions'\n    }, {\n      id: 'settings',\n      label: 'Settings',\n      icon: <SettingsIcon className='h-4 w-4' />,\n      action: () => console.info('Settings clicked'),\n      group: 'actions'\n    }],\n    orientation: 'vertical'\n  }\n}",
              ...VerticalOrientation.parameters?.docs?.source,
            },
          },
        }),
        (EditorToolbarDefault.parameters = {
          ...EditorToolbarDefault.parameters,
          docs: {
            ...EditorToolbarDefault.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => {\n    const [activeFormats, setActiveFormats] = useState({\n      bold: false,\n      italic: false,\n      underline: false,\n      bulletList: false\n    });\n    return <EditorToolbar onBold={() => {\n      setActiveFormats({\n        ...activeFormats,\n        bold: !activeFormats.bold\n      });\n      console.info('Bold toggled');\n    }} onItalic={() => {\n      setActiveFormats({\n        ...activeFormats,\n        italic: !activeFormats.italic\n      });\n      console.info('Italic toggled');\n    }} onUnderline={() => {\n      setActiveFormats({\n        ...activeFormats,\n        underline: !activeFormats.underline\n      });\n      console.info('Underline toggled');\n    }} onStrikethrough={() => console.info('Strikethrough clicked')} onCode={() => console.info('Code clicked')} onBulletList={() => {\n      setActiveFormats({\n        ...activeFormats,\n        bulletList: !activeFormats.bulletList\n      });\n      console.info('Bullet list toggled');\n    }} onOrderedList={() => console.info('Ordered list clicked')} onTaskList={() => console.info('Task list clicked')} onQuote={() => console.info('Quote clicked')} onCodeBlock={() => console.info('Code block clicked')} onDivider={() => console.info('Divider clicked')} onLink={() => console.info('Link clicked')} onImage={() => console.info('Image clicked')} onTable={() => console.info('Table clicked')} onUndo={() => console.info('Undo clicked')} onRedo={() => console.info('Redo clicked')} activeFormats={activeFormats} canUndo={true} canRedo={false} />;\n  }\n}",
              ...EditorToolbarDefault.parameters?.docs?.source,
            },
          },
        }),
        (EditorToolbarCompact.parameters = {
          ...EditorToolbarCompact.parameters,
          docs: {
            ...EditorToolbarCompact.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <EditorToolbar variant='compact' onBold={() => console.info('Bold clicked')} onItalic={() => console.info('Italic clicked')} onUnderline={() => console.info('Underline clicked')} onLink={() => console.info('Link clicked')} activeFormats={{}} />\n}",
              ...EditorToolbarCompact.parameters?.docs?.source,
            },
          },
        }),
        (EditorToolbarFloating.parameters = {
          ...EditorToolbarFloating.parameters,
          docs: {
            ...EditorToolbarFloating.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <EditorToolbar variant='floating' onBold={() => console.info('Bold clicked')} onItalic={() => console.info('Italic clicked')} onUnderline={() => console.info('Underline clicked')} onCode={() => console.info('Code clicked')} onBulletList={() => console.info('Bullet list clicked')} onOrderedList={() => console.info('Ordered list clicked')} activeFormats={{\n    bold: true,\n    italic: false\n  }} />\n}",
              ...EditorToolbarFloating.parameters?.docs?.source,
            },
          },
        }),
        (EditorToolbarWithViewMode.parameters = {
          ...EditorToolbarWithViewMode.parameters,
          docs: {
            ...EditorToolbarWithViewMode.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => {\n    const [isViewMode, setIsViewMode] = useState(false);\n    return <EditorToolbar onBold={() => console.info('Bold clicked')} onItalic={() => console.info('Italic clicked')} onToggleView={() => {\n      setIsViewMode(!isViewMode);\n      console.info('View mode toggled');\n    }} onFocusMode={() => console.info('Focus mode clicked')} isViewMode={isViewMode} activeFormats={{}} />;\n  }\n}",
              ...EditorToolbarWithViewMode.parameters?.docs?.source,
            },
          },
        }),
        (ContextToolbarDemo.parameters = {
          ...ContextToolbarDemo.parameters,
          docs: {
            ...ContextToolbarDemo.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => {\n    const [showContext, setShowContext] = useState(false);\n    const [position, setPosition] = useState({\n      x: 0,\n      y: 0\n    });\n    const contextActions: ToolbarAction[] = [{\n      id: 'copy',\n      label: 'Copy',\n      icon: <CopyIcon className='h-4 w-4' />,\n      action: () => {\n        console.info('Copy from context');\n        setShowContext(false);\n      }\n    }, {\n      id: 'cut',\n      label: 'Cut',\n      icon: <ScissorsIcon className='h-4 w-4' />,\n      action: () => {\n        console.info('Cut from context');\n        setShowContext(false);\n      }\n    }, {\n      id: 'paste',\n      label: 'Paste',\n      icon: <ClipboardIcon className='h-4 w-4' />,\n      action: () => {\n        console.info('Paste from context');\n        setShowContext(false);\n      }\n    }];\n    return <div className='relative'>\n        <div className='p-4 border rounded-lg bg-muted/50 cursor-pointer select-none' onContextMenu={e => {\n        e.preventDefault();\n        setPosition({\n          x: e.clientX,\n          y: e.clientY\n        });\n        setShowContext(true);\n      }}>\n          Right-click anywhere in this area to show context toolbar\n        </div>\n        <ContextToolbar x={position.x} y={position.y} visible={showContext} onClose={() => setShowContext(false)} actions={contextActions} />\n      </div>;\n  }\n}",
              ...ContextToolbarDemo.parameters?.docs?.source,
            },
          },
        }),
        (InteractiveToolbar.parameters = {
          ...InteractiveToolbar.parameters,
          docs: {
            ...InteractiveToolbar.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    actions: basicActions\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Wait for render\n    await new Promise(resolve => setTimeout(resolve, 100));\n\n    // Find and click bold button\n    const boldButton = canvas.getByTitle('Bold (Cmd+B)');\n    await userEvent.click(boldButton);\n\n    // Verify toolbar is present\n    const toolbar = canvas.getByRole('toolbar');\n    await expect(toolbar).toBeInTheDocument();\n\n    // Click italic button\n    const italicButton = canvas.getByTitle('Italic (Cmd+I)');\n    await userEvent.click(italicButton);\n\n    // Hover over underline to show tooltip\n    const underlineButton = canvas.getByTitle('Underline (Cmd+U)');\n    await userEvent.hover(underlineButton);\n  }\n}",
              ...InteractiveToolbar.parameters?.docs?.source,
            },
          },
        }),
        (GroupSeparators.parameters = {
          ...GroupSeparators.parameters,
          docs: {
            ...GroupSeparators.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    actions: [{\n      id: '1',\n      label: 'Action 1',\n      icon: <BoldIcon className='h-4 w-4' />,\n      action: () => console.info('Action 1'),\n      group: 'group1'\n    }, {\n      id: '2',\n      label: 'Action 2',\n      icon: <ItalicIcon className='h-4 w-4' />,\n      action: () => console.info('Action 2'),\n      group: 'group1'\n    }, {\n      id: '3',\n      label: 'Action 3',\n      icon: <LinkIcon className='h-4 w-4' />,\n      action: () => console.info('Action 3'),\n      group: 'group2'\n    }, {\n      id: '4',\n      label: 'Action 4',\n      icon: <ImageIcon className='h-4 w-4' />,\n      action: () => console.info('Action 4'),\n      group: 'group2'\n    }, {\n      id: '5',\n      label: 'Action 5',\n      icon: <SaveIcon className='h-4 w-4' />,\n      action: () => console.info('Action 5'),\n      group: 'group3'\n    }]\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Wait for render\n    await new Promise(resolve => setTimeout(resolve, 100));\n\n    // Count separators\n    const separators = canvas.getAllByRole('toolbar')[0].querySelectorAll('.bg-border');\n\n    // Should have 2 separators for 3 groups\n    await expect(separators).toHaveLength(2);\n  }\n}",
              ...GroupSeparators.parameters?.docs?.source,
            },
          },
        }),
        (ToggleActiveState.parameters = {
          ...ToggleActiveState.parameters,
          docs: {
            ...ToggleActiveState.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => {\n    const [activeItems, setActiveItems] = useState<Set<string>>(new Set(['bold']));\n    const toggleActive = (id: string) => {\n      const newActive = new Set(activeItems);\n      if (newActive.has(id)) {\n        newActive.delete(id);\n      } else {\n        newActive.add(id);\n      }\n      setActiveItems(newActive);\n    };\n    const actions: ToolbarAction[] = [{\n      id: 'bold',\n      label: 'Bold',\n      icon: <BoldIcon className='h-4 w-4' />,\n      action: () => toggleActive('bold'),\n      isActive: activeItems.has('bold')\n    }, {\n      id: 'italic',\n      label: 'Italic',\n      icon: <ItalicIcon className='h-4 w-4' />,\n      action: () => toggleActive('italic'),\n      isActive: activeItems.has('italic')\n    }, {\n      id: 'underline',\n      label: 'Underline',\n      icon: <UnderlineIcon className='h-4 w-4' />,\n      action: () => toggleActive('underline'),\n      isActive: activeItems.has('underline')\n    }, {\n      id: 'code',\n      label: 'Code',\n      icon: <CodeIcon className='h-4 w-4' />,\n      action: () => toggleActive('code'),\n      isActive: activeItems.has('code')\n    }];\n    return <div>\n        <Toolbar actions={actions} />\n        <div className='mt-4 text-sm text-muted-foreground'>\n          Active: {Array.from(activeItems).join(', ') || 'None'}\n        </div>\n      </div>;\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Wait for render\n    await new Promise(resolve => setTimeout(resolve, 100));\n\n    // Click italic to activate\n    const italicButton = canvas.getByTitle('Italic');\n    await userEvent.click(italicButton);\n\n    // Should show as active\n    await expect(canvas.getByText('Active: bold, italic')).toBeInTheDocument();\n\n    // Click bold to deactivate\n    const boldButton = canvas.getByTitle('Bold');\n    await userEvent.click(boldButton);\n\n    // Should update active list\n    await expect(canvas.getByText('Active: italic')).toBeInTheDocument();\n  }\n}",
              ...ToggleActiveState.parameters?.docs?.source,
            },
          },
        }),
        (ManyActions.parameters = {
          ...ManyActions.parameters,
          docs: {
            ...ManyActions.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    actions: [...basicActions, {\n      id: 'strikethrough',\n      label: 'Strikethrough',\n      icon: <BoldIcon className='h-4 w-4' />,\n      action: () => console.info('Strikethrough'),\n      group: 'format'\n    }, {\n      id: 'code',\n      label: 'Code',\n      icon: <CodeIcon className='h-4 w-4' />,\n      action: () => console.info('Code'),\n      group: 'format'\n    }, {\n      id: 'bullet',\n      label: 'Bullet List',\n      icon: <ListIcon className='h-4 w-4' />,\n      action: () => console.info('Bullet'),\n      group: 'list'\n    }, {\n      id: 'numbered',\n      label: 'Numbered List',\n      icon: <ListOrderedIcon className='h-4 w-4' />,\n      action: () => console.info('Numbered'),\n      group: 'list'\n    }, {\n      id: 'checklist',\n      label: 'Checklist',\n      icon: <CheckSquareIcon className='h-4 w-4' />,\n      action: () => console.info('Checklist'),\n      group: 'list'\n    }, {\n      id: 'quote',\n      label: 'Quote',\n      icon: <QuoteIcon className='h-4 w-4' />,\n      action: () => console.info('Quote'),\n      group: 'block'\n    }, {\n      id: 'link',\n      label: 'Link',\n      icon: <LinkIcon className='h-4 w-4' />,\n      action: () => console.info('Link'),\n      group: 'insert'\n    }, {\n      id: 'image',\n      label: 'Image',\n      icon: <ImageIcon className='h-4 w-4' />,\n      action: () => console.info('Image'),\n      group: 'insert'\n    }],\n    variant: 'compact'\n  }\n}",
              ...ManyActions.parameters?.docs?.source,
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
