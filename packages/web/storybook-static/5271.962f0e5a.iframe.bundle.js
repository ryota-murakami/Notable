'use strict'
;(self.webpackChunk_notable_web = self.webpackChunk_notable_web || []).push([
  [5271],
  {
    './components/editor/slash-command-menu.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        C: () => useSlashCommand,
        U: () => SlashCommandMenu,
      })
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
        ),
        cmdk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          '../../node_modules/.pnpm/cmdk@1.1.1_@types+react-dom@19.1.6_@types+react@19.1.8__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/cmdk/dist/index.mjs'
        ),
        _radix_ui_react_portal__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            '../../node_modules/.pnpm/@radix-ui+react-portal@1.1.9_@types+react-dom@19.1.6_@types+react@19.1.8__@types+react@_daa6284eb61b5d92679ce5e11f38cd01/node_modules/@radix-ui/react-portal/dist/index.mjs'
          ),
        _lib_utils__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__('./lib/utils.ts'),
        _plugins_slash_command_kit__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            './components/editor/plugins/slash-command-kit.tsx'
          )
      function cov_2h6a8ja6v0() {
        var path =
            '/Users/ryota.murakami/repository/Notable/packages/web/components/editor/slash-command-menu.tsx',
          global = new Function('return this')(),
          gcv = '__coverage__',
          coverageData = {
            path: '/Users/ryota.murakami/repository/Notable/packages/web/components/editor/slash-command-menu.tsx',
            statementMap: {
              0: {
                start: { line: 10, column: 32 },
                end: { line: 10, column: 44 },
              },
              1: {
                start: { line: 11, column: 46 },
                end: { line: 11, column: 57 },
              },
              2: {
                start: { line: 12, column: 23 },
                end: { line: 12, column: 35 },
              },
              3: {
                start: { line: 14, column: 29 },
                end: { line: 14, column: 56 },
              },
              4: {
                start: { line: 15, column: 28 },
                end: { line: 15, column: 64 },
              },
              5: {
                start: { line: 16, column: 25 },
                end: { line: 16, column: 41 },
              },
              6: {
                start: { line: 18, column: 4 },
                end: { line: 22, column: 7 },
              },
              7: {
                start: { line: 19, column: 8 },
                end: { line: 19, column: 28 },
              },
              8: {
                start: { line: 24, column: 26 },
                end: { line: 58, column: 6 },
              },
              9: {
                start: { line: 25, column: 8 },
                end: { line: 25, column: 28 },
              },
              10: {
                start: { line: 25, column: 21 },
                end: { line: 25, column: 28 },
              },
              11: {
                start: { line: 26, column: 8 },
                end: { line: 51, column: 9 },
              },
              12: {
                start: { line: 28, column: 16 },
                end: { line: 28, column: 39 },
              },
              13: {
                start: { line: 29, column: 16 },
                end: { line: 29, column: 26 },
              },
              14: {
                start: { line: 30, column: 16 },
                end: { line: 30, column: 22 },
              },
              15: {
                start: { line: 32, column: 16 },
                end: { line: 32, column: 39 },
              },
              16: {
                start: { line: 33, column: 16 },
                end: { line: 33, column: 88 },
              },
              17: {
                start: { line: 33, column: 41 },
                end: { line: 33, column: 86 },
              },
              18: {
                start: { line: 34, column: 16 },
                end: { line: 34, column: 22 },
              },
              19: {
                start: { line: 36, column: 16 },
                end: { line: 36, column: 39 },
              },
              20: {
                start: { line: 37, column: 16 },
                end: { line: 37, column: 88 },
              },
              21: {
                start: { line: 37, column: 41 },
                end: { line: 37, column: 86 },
              },
              22: {
                start: { line: 38, column: 16 },
                end: { line: 38, column: 22 },
              },
              23: {
                start: { line: 40, column: 16 },
                end: { line: 40, column: 39 },
              },
              24: {
                start: { line: 41, column: 16 },
                end: { line: 43, column: 17 },
              },
              25: {
                start: { line: 42, column: 20 },
                end: { line: 42, column: 58 },
              },
              26: {
                start: { line: 44, column: 16 },
                end: { line: 44, column: 22 },
              },
              27: {
                start: { line: 46, column: 16 },
                end: { line: 46, column: 39 },
              },
              28: {
                start: { line: 47, column: 16 },
                end: { line: 49, column: 17 },
              },
              29: {
                start: { line: 48, column: 20 },
                end: { line: 48, column: 58 },
              },
              30: {
                start: { line: 50, column: 16 },
                end: { line: 50, column: 22 },
              },
              31: {
                start: { line: 60, column: 4 },
                end: { line: 68, column: 7 },
              },
              32: {
                start: { line: 61, column: 8 },
                end: { line: 64, column: 9 },
              },
              33: {
                start: { line: 62, column: 12 },
                end: { line: 62, column: 64 },
              },
              34: {
                start: { line: 63, column: 12 },
                end: { line: 63, column: 78 },
              },
              35: {
                start: { line: 63, column: 23 },
                end: { line: 63, column: 77 },
              },
              36: {
                start: { line: 70, column: 4 },
                end: { line: 83, column: 7 },
              },
              37: {
                start: { line: 71, column: 35 },
                end: { line: 75, column: 9 },
              },
              38: {
                start: { line: 72, column: 12 },
                end: { line: 74, column: 13 },
              },
              39: {
                start: { line: 73, column: 16 },
                end: { line: 73, column: 26 },
              },
              40: {
                start: { line: 76, column: 8 },
                end: { line: 79, column: 9 },
              },
              41: {
                start: { line: 77, column: 12 },
                end: { line: 77, column: 71 },
              },
              42: {
                start: { line: 78, column: 12 },
                end: { line: 78, column: 85 },
              },
              43: {
                start: { line: 78, column: 23 },
                end: { line: 78, column: 84 },
              },
              44: {
                start: { line: 84, column: 4 },
                end: { line: 84, column: 29 },
              },
              45: {
                start: { line: 84, column: 17 },
                end: { line: 84, column: 29 },
              },
              46: {
                start: { line: 85, column: 4 },
                end: { line: 169, column: 7 },
              },
              47: {
                start: { line: 119, column: 97 },
                end: { line: 163, column: 45 },
              },
              48: {
                start: { line: 129, column: 68 },
                end: { line: 129, column: 97 },
              },
              49: {
                start: { line: 130, column: 61 },
                end: { line: 130, column: 73 },
              },
              50: {
                start: { line: 131, column: 48 },
                end: { line: 159, column: 64 },
              },
              51: {
                start: { line: 133, column: 65 },
                end: { line: 133, column: 82 },
              },
              52: {
                start: { line: 173, column: 32 },
                end: { line: 173, column: 47 },
              },
              53: {
                start: { line: 174, column: 36 },
                end: { line: 177, column: 6 },
              },
              54: {
                start: { line: 178, column: 21 },
                end: { line: 181, column: 10 },
              },
              55: {
                start: { line: 179, column: 8 },
                end: { line: 179, column: 25 },
              },
              56: {
                start: { line: 180, column: 8 },
                end: { line: 180, column: 24 },
              },
              57: {
                start: { line: 182, column: 22 },
                end: { line: 184, column: 10 },
              },
              58: {
                start: { line: 183, column: 8 },
                end: { line: 183, column: 25 },
              },
              59: {
                start: { line: 185, column: 32 },
                end: { line: 191, column: 6 },
              },
              60: {
                start: { line: 186, column: 8 },
                end: { line: 186, column: 31 },
              },
              61: {
                start: { line: 187, column: 8 },
                end: { line: 187, column: 20 },
              },
              62: {
                start: { line: 192, column: 4 },
                end: { line: 198, column: 6 },
              },
              63: {
                start: { line: 200, column: 0 },
                end: { line: 284, column: 2 },
              },
            },
            fnMap: {
              0: {
                name: 'SlashCommandMenu',
                decl: {
                  start: { line: 9, column: 16 },
                  end: { line: 9, column: 32 },
                },
                loc: {
                  start: { line: 9, column: 85 },
                  end: { line: 170, column: 1 },
                },
                line: 9,
              },
              1: {
                name: '(anonymous_1)',
                decl: {
                  start: { line: 18, column: 14 },
                  end: { line: 18, column: 15 },
                },
                loc: {
                  start: { line: 18, column: 18 },
                  end: { line: 20, column: 5 },
                },
                line: 18,
              },
              2: {
                name: '(anonymous_2)',
                decl: {
                  start: { line: 24, column: 38 },
                  end: { line: 24, column: 39 },
                },
                loc: {
                  start: { line: 24, column: 47 },
                  end: { line: 52, column: 5 },
                },
                line: 24,
              },
              3: {
                name: '(anonymous_3)',
                decl: {
                  start: { line: 33, column: 33 },
                  end: { line: 33, column: 34 },
                },
                loc: {
                  start: { line: 33, column: 41 },
                  end: { line: 33, column: 86 },
                },
                line: 33,
              },
              4: {
                name: '(anonymous_4)',
                decl: {
                  start: { line: 37, column: 33 },
                  end: { line: 37, column: 34 },
                },
                loc: {
                  start: { line: 37, column: 41 },
                  end: { line: 37, column: 86 },
                },
                line: 37,
              },
              5: {
                name: '(anonymous_5)',
                decl: {
                  start: { line: 60, column: 14 },
                  end: { line: 60, column: 15 },
                },
                loc: {
                  start: { line: 60, column: 18 },
                  end: { line: 65, column: 5 },
                },
                line: 60,
              },
              6: {
                name: '(anonymous_6)',
                decl: {
                  start: { line: 63, column: 19 },
                  end: { line: 63, column: 20 },
                },
                loc: {
                  start: { line: 63, column: 23 },
                  end: { line: 63, column: 77 },
                },
                line: 63,
              },
              7: {
                name: '(anonymous_7)',
                decl: {
                  start: { line: 70, column: 14 },
                  end: { line: 70, column: 15 },
                },
                loc: {
                  start: { line: 70, column: 18 },
                  end: { line: 80, column: 5 },
                },
                line: 70,
              },
              8: {
                name: '(anonymous_8)',
                decl: {
                  start: { line: 71, column: 35 },
                  end: { line: 71, column: 36 },
                },
                loc: {
                  start: { line: 71, column: 44 },
                  end: { line: 75, column: 9 },
                },
                line: 71,
              },
              9: {
                name: '(anonymous_9)',
                decl: {
                  start: { line: 78, column: 19 },
                  end: { line: 78, column: 20 },
                },
                loc: {
                  start: { line: 78, column: 23 },
                  end: { line: 78, column: 84 },
                },
                line: 78,
              },
              10: {
                name: '(anonymous_10)',
                decl: {
                  start: { line: 119, column: 58 },
                  end: { line: 119, column: 59 },
                },
                loc: {
                  start: { line: 119, column: 97 },
                  end: { line: 163, column: 45 },
                },
                line: 119,
              },
              11: {
                name: '(anonymous_11)',
                decl: {
                  start: { line: 128, column: 67 },
                  end: { line: 128, column: 68 },
                },
                loc: {
                  start: { line: 128, column: 92 },
                  end: { line: 160, column: 45 },
                },
                line: 128,
              },
              12: {
                name: '(anonymous_12)',
                decl: {
                  start: { line: 133, column: 61 },
                  end: { line: 133, column: 62 },
                },
                loc: {
                  start: { line: 133, column: 65 },
                  end: { line: 133, column: 82 },
                },
                line: 133,
              },
              13: {
                name: 'useSlashCommand',
                decl: {
                  start: { line: 172, column: 16 },
                  end: { line: 172, column: 31 },
                },
                loc: {
                  start: { line: 172, column: 40 },
                  end: { line: 199, column: 1 },
                },
                line: 172,
              },
              14: {
                name: '(anonymous_14)',
                decl: {
                  start: { line: 178, column: 33 },
                  end: { line: 178, column: 34 },
                },
                loc: {
                  start: { line: 178, column: 40 },
                  end: { line: 181, column: 5 },
                },
                line: 178,
              },
              15: {
                name: '(anonymous_15)',
                decl: {
                  start: { line: 182, column: 34 },
                  end: { line: 182, column: 35 },
                },
                loc: {
                  start: { line: 182, column: 38 },
                  end: { line: 184, column: 5 },
                },
                line: 182,
              },
              16: {
                name: '(anonymous_16)',
                decl: {
                  start: { line: 185, column: 44 },
                  end: { line: 185, column: 45 },
                },
                loc: {
                  start: { line: 185, column: 55 },
                  end: { line: 188, column: 5 },
                },
                line: 185,
              },
            },
            branchMap: {
              0: {
                loc: {
                  start: { line: 25, column: 8 },
                  end: { line: 25, column: 28 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 25, column: 8 },
                    end: { line: 25, column: 28 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 25,
              },
              1: {
                loc: {
                  start: { line: 26, column: 8 },
                  end: { line: 51, column: 9 },
                },
                type: 'switch',
                locations: [
                  {
                    start: { line: 27, column: 12 },
                    end: { line: 30, column: 22 },
                  },
                  {
                    start: { line: 31, column: 12 },
                    end: { line: 34, column: 22 },
                  },
                  {
                    start: { line: 35, column: 12 },
                    end: { line: 38, column: 22 },
                  },
                  {
                    start: { line: 39, column: 12 },
                    end: { line: 44, column: 22 },
                  },
                  {
                    start: { line: 45, column: 12 },
                    end: { line: 50, column: 22 },
                  },
                ],
                line: 26,
              },
              2: {
                loc: {
                  start: { line: 33, column: 41 },
                  end: { line: 33, column: 86 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 33, column: 74 },
                    end: { line: 33, column: 82 },
                  },
                  {
                    start: { line: 33, column: 85 },
                    end: { line: 33, column: 86 },
                  },
                ],
                line: 33,
              },
              3: {
                loc: {
                  start: { line: 37, column: 41 },
                  end: { line: 37, column: 86 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 37, column: 52 },
                    end: { line: 37, column: 60 },
                  },
                  {
                    start: { line: 37, column: 63 },
                    end: { line: 37, column: 86 },
                  },
                ],
                line: 37,
              },
              4: {
                loc: {
                  start: { line: 41, column: 16 },
                  end: { line: 43, column: 17 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 41, column: 16 },
                    end: { line: 43, column: 17 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 41,
              },
              5: {
                loc: {
                  start: { line: 47, column: 16 },
                  end: { line: 49, column: 17 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 47, column: 16 },
                    end: { line: 49, column: 17 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 47,
              },
              6: {
                loc: {
                  start: { line: 61, column: 8 },
                  end: { line: 64, column: 9 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 61, column: 8 },
                    end: { line: 64, column: 9 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 61,
              },
              7: {
                loc: {
                  start: { line: 72, column: 12 },
                  end: { line: 74, column: 13 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 72, column: 12 },
                    end: { line: 74, column: 13 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 72,
              },
              8: {
                loc: {
                  start: { line: 72, column: 16 },
                  end: { line: 72, column: 80 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 72, column: 16 },
                    end: { line: 72, column: 34 },
                  },
                  {
                    start: { line: 72, column: 38 },
                    end: { line: 72, column: 80 },
                  },
                ],
                line: 72,
              },
              9: {
                loc: {
                  start: { line: 76, column: 8 },
                  end: { line: 79, column: 9 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 76, column: 8 },
                    end: { line: 79, column: 9 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 76,
              },
              10: {
                loc: {
                  start: { line: 84, column: 4 },
                  end: { line: 84, column: 29 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 84, column: 4 },
                    end: { line: 84, column: 29 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 84,
              },
              11: {
                loc: {
                  start: { line: 114, column: 34 },
                  end: { line: 164, column: 26 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 114, column: 76 },
                    end: { line: 117, column: 26 },
                  },
                  {
                    start: { line: 117, column: 43 },
                    end: { line: 164, column: 26 },
                  },
                ],
                line: 114,
              },
              12: {
                loc: {
                  start: { line: 132, column: 155 },
                  end: { line: 132, column: 270 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 132, column: 187 },
                    end: { line: 132, column: 221 },
                  },
                  {
                    start: { line: 132, column: 224 },
                    end: { line: 132, column: 270 },
                  },
                ],
                line: 132,
              },
              13: {
                loc: {
                  start: { line: 154, column: 56 },
                  end: { line: 157, column: 58 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 154, column: 56 },
                    end: { line: 154, column: 85 },
                  },
                  {
                    start: { line: 154, column: 103 },
                    end: { line: 157, column: 58 },
                  },
                ],
                line: 154,
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
              29: 0,
              30: 0,
              31: 0,
              32: 0,
              33: 0,
              34: 0,
              35: 0,
              36: 0,
              37: 0,
              38: 0,
              39: 0,
              40: 0,
              41: 0,
              42: 0,
              43: 0,
              44: 0,
              45: 0,
              46: 0,
              47: 0,
              48: 0,
              49: 0,
              50: 0,
              51: 0,
              52: 0,
              53: 0,
              54: 0,
              55: 0,
              56: 0,
              57: 0,
              58: 0,
              59: 0,
              60: 0,
              61: 0,
              62: 0,
              63: 0,
            },
            f: {
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
            },
            b: {
              0: [0, 0],
              1: [0, 0, 0, 0, 0],
              2: [0, 0],
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
            },
            inputSourceMap: {
              version: 3,
              sources: [
                '/Users/ryota.murakami/repository/Notable/packages/web/components/editor/slash-command-menu.tsx',
              ],
              sourcesContent: [
                "'use client'\n\nimport * as React from 'react'\nimport { useCallback, useEffect, useRef, useState } from 'react'\nimport { Command } from 'cmdk'\nimport { Portal } from '@radix-ui/react-portal'\nimport { cn } from '@/lib/utils'\nimport {\n  filterSlashCommands,\n  groupSlashCommands,\n  SLASH_COMMANDS,\n  type SlashCommandItem,\n} from './plugins/slash-command-kit'\n\ninterface SlashCommandMenuProps {\n  isOpen: boolean\n  onClose: () => void\n  onSelect: (command: SlashCommandItem) => void\n  position: { x: number; y: number }\n  className?: string\n}\n\nexport function SlashCommandMenu({\n  isOpen,\n  onClose,\n  onSelect,\n  position,\n  className,\n}: SlashCommandMenuProps) {\n  const [search, setSearch] = useState('')\n  const [selectedIndex, setSelectedIndex] = useState(0)\n  const commandRef = useRef<HTMLDivElement>(null)\n\n  // Filter and group commands based on search\n  const filteredCommands = filterSlashCommands(search)\n  const groupedCommands = groupSlashCommands(filteredCommands)\n  const flatCommands = filteredCommands\n\n  // Reset selection when search changes\n  useEffect(() => {\n    setSelectedIndex(0)\n  }, [search])\n\n  // Handle keyboard navigation\n  const handleKeyDown = useCallback(\n    (event: KeyboardEvent) => {\n      if (!isOpen) return\n\n      switch (event.key) {\n        case 'Escape':\n          event.preventDefault()\n          onClose()\n          break\n        case 'ArrowDown':\n          event.preventDefault()\n          setSelectedIndex((prev) =>\n            prev < flatCommands.length - 1 ? prev + 1 : 0\n          )\n          break\n        case 'ArrowUp':\n          event.preventDefault()\n          setSelectedIndex((prev) =>\n            prev > 0 ? prev - 1 : flatCommands.length - 1\n          )\n          break\n        case 'Enter':\n          event.preventDefault()\n          if (flatCommands[selectedIndex]) {\n            onSelect(flatCommands[selectedIndex])\n          }\n          break\n        case 'Tab':\n          event.preventDefault()\n          if (flatCommands[selectedIndex]) {\n            onSelect(flatCommands[selectedIndex])\n          }\n          break\n      }\n    },\n    [isOpen, onClose, onSelect, flatCommands, selectedIndex]\n  )\n\n  // Set up keyboard listeners\n  useEffect(() => {\n    if (isOpen) {\n      document.addEventListener('keydown', handleKeyDown)\n      return () => document.removeEventListener('keydown', handleKeyDown)\n    }\n  }, [isOpen, handleKeyDown])\n\n  // Close menu when clicking outside\n  useEffect(() => {\n    const handleClickOutside = (event: MouseEvent) => {\n      if (\n        commandRef.current &&\n        !commandRef.current.contains(event.target as Node)\n      ) {\n        onClose()\n      }\n    }\n\n    if (isOpen) {\n      document.addEventListener('mousedown', handleClickOutside)\n      return () => document.removeEventListener('mousedown', handleClickOutside)\n    }\n  }, [isOpen, onClose])\n\n  if (!isOpen) return null\n\n  return (\n    <Portal>\n      <div\n        ref={commandRef}\n        className={cn(\n          'slash-command-menu fixed z-50 w-80 rounded-lg border bg-popover p-0 text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95',\n          className\n        )}\n        style={{\n          left: position.x,\n          top: position.y,\n        }}\n      >\n        <Command className='w-full'>\n          <div className='flex items-center border-b px-3'>\n            <span className='mr-2 text-muted-foreground'>/</span>\n            <Command.Input\n              value={search}\n              onValueChange={setSearch}\n              placeholder='Type a command or search...'\n              className='flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none disabled:cursor-not-allowed disabled:opacity-50'\n              autoFocus\n            />\n          </div>\n\n          <Command.List className='max-h-[300px] overflow-y-auto'>\n            {flatCommands.length === 0 ? (\n              <Command.Empty className='py-6 text-center text-sm text-muted-foreground'>\n                No commands found.\n              </Command.Empty>\n            ) : (\n              <div className='p-2'>\n                {groupedCommands.map(([groupName, commands]) => (\n                  <div key={groupName} className='mb-2'>\n                    <div className='px-2 py-1.5 text-xs font-medium text-muted-foreground uppercase tracking-wider'>\n                      {groupName}\n                    </div>\n                    <div className='space-y-1'>\n                      {commands.map((command, commandIndex) => {\n                        const globalIndex = flatCommands.indexOf(command)\n                        const Icon = command.icon\n\n                        return (\n                          <div\n                            key={command.key}\n                            className={cn(\n                              'flex items-center gap-3 rounded-md px-2 py-2 text-sm cursor-pointer transition-colors',\n                              globalIndex === selectedIndex\n                                ? 'bg-accent text-accent-foreground'\n                                : 'hover:bg-accent hover:text-accent-foreground'\n                            )}\n                            onClick={() => onSelect(command)}\n                          >\n                            <div className='flex h-8 w-8 items-center justify-center rounded-md bg-muted'>\n                              <Icon className='h-4 w-4' />\n                            </div>\n                            <div className='flex-1 min-w-0'>\n                              <div className='font-medium'>{command.title}</div>\n                              <div className='text-xs text-muted-foreground truncate'>\n                                {command.description}\n                              </div>\n                            </div>\n                            {globalIndex === selectedIndex && (\n                              <div className='text-xs text-muted-foreground'>\n                                ↵\n                              </div>\n                            )}\n                          </div>\n                        )\n                      })}\n                    </div>\n                  </div>\n                ))}\n              </div>\n            )}\n          </Command.List>\n        </Command>\n      </div>\n    </Portal>\n  )\n}\n\n// Hook to manage slash command menu state\nexport function useSlashCommand(editor: any) {\n  const [isOpen, setIsOpen] = useState(false)\n  const [position, setPosition] = useState({ x: 0, y: 0 })\n\n  const openMenu = useCallback((pos: { x: number; y: number }) => {\n    setPosition(pos)\n    setIsOpen(true)\n  }, [])\n\n  const closeMenu = useCallback(() => {\n    setIsOpen(false)\n  }, [])\n\n  const handleCommandSelect = useCallback(\n    (command: SlashCommandItem) => {\n      command.action(editor)\n      closeMenu()\n    },\n    [editor, closeMenu]\n  )\n\n  return {\n    isOpen,\n    position,\n    openMenu,\n    closeMenu,\n    handleCommandSelect,\n  }\n}\n",
              ],
              names: [],
              mappings:
                'AAAA,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;AAEX,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAC7B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAC/D,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAC7B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAC9C,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAC/B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACL,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC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CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACrB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACR,CAAC,CAAC,CAAC,CAAC;YACN,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACd,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACrB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,AACvB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBAE9C,CAAC,CAAC,CAAC,CAAC;YACN,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACZ,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACrB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,AACvB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBAE9C,CAAC,CAAC,CAAC,CAAC;YACN,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACV,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACrB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;oBAC/B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACtC;gBACA,CAAC,CAAC,CAAC,CAAC;YACN,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACR,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACrB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;oBAC/B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACtC;gBACA,CAAC,CAAC,CAAC,CAAC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',
            },
            _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
            hash: 'e69a043595d02fc859bcdf2e2a014797773d5f07',
          },
          coverage = global[gcv] || (global[gcv] = {})
        ;(coverage[path] &&
          'e69a043595d02fc859bcdf2e2a014797773d5f07' === coverage[path].hash) ||
          (coverage[path] = coverageData)
        var actualCoverage = coverage[path]
        return (
          (cov_2h6a8ja6v0 = function () {
            return actualCoverage
          }),
          actualCoverage
        )
      }
      function SlashCommandMenu({
        isOpen,
        onClose,
        onSelect,
        position,
        className,
      }) {
        cov_2h6a8ja6v0().f[0]++
        const [search, setSearch] =
            (cov_2h6a8ja6v0().s[0]++,
            (0, react__WEBPACK_IMPORTED_MODULE_1__.useState)('')),
          [selectedIndex, setSelectedIndex] =
            (cov_2h6a8ja6v0().s[1]++,
            (0, react__WEBPACK_IMPORTED_MODULE_1__.useState)(0)),
          commandRef =
            (cov_2h6a8ja6v0().s[2]++,
            (0, react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null)),
          filteredCommands =
            (cov_2h6a8ja6v0().s[3]++,
            (0, _plugins_slash_command_kit__WEBPACK_IMPORTED_MODULE_3__.C5)(
              search
            )),
          groupedCommands =
            (cov_2h6a8ja6v0().s[4]++,
            (0, _plugins_slash_command_kit__WEBPACK_IMPORTED_MODULE_3__.jG)(
              filteredCommands
            )),
          flatCommands = (cov_2h6a8ja6v0().s[5]++, filteredCommands)
        ;(cov_2h6a8ja6v0().s[6]++,
          (0, react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
            ;(cov_2h6a8ja6v0().f[1]++,
              cov_2h6a8ja6v0().s[7]++,
              setSelectedIndex(0))
          }, [search]))
        const handleKeyDown =
          (cov_2h6a8ja6v0().s[8]++,
          (0, react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
            (event) => {
              if ((cov_2h6a8ja6v0().f[2]++, cov_2h6a8ja6v0().s[9]++, !isOpen))
                return (
                  cov_2h6a8ja6v0().b[0][0]++,
                  void cov_2h6a8ja6v0().s[10]++
                )
              switch (
                (cov_2h6a8ja6v0().b[0][1]++,
                cov_2h6a8ja6v0().s[11]++,
                event.key)
              ) {
                case 'Escape':
                  ;(cov_2h6a8ja6v0().b[1][0]++,
                    cov_2h6a8ja6v0().s[12]++,
                    event.preventDefault(),
                    cov_2h6a8ja6v0().s[13]++,
                    onClose(),
                    cov_2h6a8ja6v0().s[14]++)
                  break
                case 'ArrowDown':
                  ;(cov_2h6a8ja6v0().b[1][1]++,
                    cov_2h6a8ja6v0().s[15]++,
                    event.preventDefault(),
                    cov_2h6a8ja6v0().s[16]++,
                    setSelectedIndex(
                      (prev) => (
                        cov_2h6a8ja6v0().f[3]++,
                        cov_2h6a8ja6v0().s[17]++,
                        prev < flatCommands.length - 1
                          ? (cov_2h6a8ja6v0().b[2][0]++, prev + 1)
                          : (cov_2h6a8ja6v0().b[2][1]++, 0)
                      )
                    ),
                    cov_2h6a8ja6v0().s[18]++)
                  break
                case 'ArrowUp':
                  ;(cov_2h6a8ja6v0().b[1][2]++,
                    cov_2h6a8ja6v0().s[19]++,
                    event.preventDefault(),
                    cov_2h6a8ja6v0().s[20]++,
                    setSelectedIndex(
                      (prev) => (
                        cov_2h6a8ja6v0().f[4]++,
                        cov_2h6a8ja6v0().s[21]++,
                        prev > 0
                          ? (cov_2h6a8ja6v0().b[3][0]++, prev - 1)
                          : (cov_2h6a8ja6v0().b[3][1]++,
                            flatCommands.length - 1)
                      )
                    ),
                    cov_2h6a8ja6v0().s[22]++)
                  break
                case 'Enter':
                  ;(cov_2h6a8ja6v0().b[1][3]++,
                    cov_2h6a8ja6v0().s[23]++,
                    event.preventDefault(),
                    cov_2h6a8ja6v0().s[24]++,
                    flatCommands[selectedIndex]
                      ? (cov_2h6a8ja6v0().b[4][0]++,
                        cov_2h6a8ja6v0().s[25]++,
                        onSelect(flatCommands[selectedIndex]))
                      : cov_2h6a8ja6v0().b[4][1]++,
                    cov_2h6a8ja6v0().s[26]++)
                  break
                case 'Tab':
                  ;(cov_2h6a8ja6v0().b[1][4]++,
                    cov_2h6a8ja6v0().s[27]++,
                    event.preventDefault(),
                    cov_2h6a8ja6v0().s[28]++,
                    flatCommands[selectedIndex]
                      ? (cov_2h6a8ja6v0().b[5][0]++,
                        cov_2h6a8ja6v0().s[29]++,
                        onSelect(flatCommands[selectedIndex]))
                      : cov_2h6a8ja6v0().b[5][1]++,
                    cov_2h6a8ja6v0().s[30]++)
              }
            },
            [isOpen, onClose, onSelect, flatCommands, selectedIndex]
          ))
        return (
          cov_2h6a8ja6v0().s[31]++,
          (0, react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
            if ((cov_2h6a8ja6v0().f[5]++, cov_2h6a8ja6v0().s[32]++, isOpen))
              return (
                cov_2h6a8ja6v0().b[6][0]++,
                cov_2h6a8ja6v0().s[33]++,
                document.addEventListener('keydown', handleKeyDown),
                cov_2h6a8ja6v0().s[34]++,
                () => (
                  cov_2h6a8ja6v0().f[6]++,
                  cov_2h6a8ja6v0().s[35]++,
                  document.removeEventListener('keydown', handleKeyDown)
                )
              )
            cov_2h6a8ja6v0().b[6][1]++
          }, [isOpen, handleKeyDown]),
          cov_2h6a8ja6v0().s[36]++,
          (0, react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
            ;(cov_2h6a8ja6v0().f[7]++, cov_2h6a8ja6v0().s[37]++)
            const handleClickOutside = (event) => {
              ;(cov_2h6a8ja6v0().f[8]++,
                cov_2h6a8ja6v0().s[38]++,
                cov_2h6a8ja6v0().b[8][0]++,
                commandRef.current &&
                (cov_2h6a8ja6v0().b[8][1]++,
                !commandRef.current.contains(event.target))
                  ? (cov_2h6a8ja6v0().b[7][0]++,
                    cov_2h6a8ja6v0().s[39]++,
                    onClose())
                  : cov_2h6a8ja6v0().b[7][1]++)
            }
            if ((cov_2h6a8ja6v0().s[40]++, isOpen))
              return (
                cov_2h6a8ja6v0().b[9][0]++,
                cov_2h6a8ja6v0().s[41]++,
                document.addEventListener('mousedown', handleClickOutside),
                cov_2h6a8ja6v0().s[42]++,
                () => (
                  cov_2h6a8ja6v0().f[9]++,
                  cov_2h6a8ja6v0().s[43]++,
                  document.removeEventListener('mousedown', handleClickOutside)
                )
              )
            cov_2h6a8ja6v0().b[9][1]++
          }, [isOpen, onClose]),
          cov_2h6a8ja6v0().s[44]++,
          isOpen
            ? (cov_2h6a8ja6v0().b[10][1]++,
              cov_2h6a8ja6v0().s[46]++,
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _radix_ui_react_portal__WEBPACK_IMPORTED_MODULE_4__.Z,
                {
                  children: (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                    ref: commandRef,
                    className: (0, _lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(
                      'slash-command-menu fixed z-50 w-80 rounded-lg border bg-popover p-0 text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95',
                      className
                    ),
                    style: { left: position.x, top: position.y },
                    children: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                      cmdk__WEBPACK_IMPORTED_MODULE_5__.uB,
                      {
                        className: 'w-full',
                        children: [
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                            'div',
                            {
                              className: 'flex items-center border-b px-3',
                              children: [
                                (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  'span',
                                  {
                                    className: 'mr-2 text-muted-foreground',
                                    children: '/',
                                  }
                                ),
                                (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  cmdk__WEBPACK_IMPORTED_MODULE_5__.uB.Input,
                                  {
                                    value: search,
                                    onValueChange: setSearch,
                                    placeholder: 'Type a command or search...',
                                    className:
                                      'flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none disabled:cursor-not-allowed disabled:opacity-50',
                                    autoFocus: !0,
                                  }
                                ),
                              ],
                            }
                          ),
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            cmdk__WEBPACK_IMPORTED_MODULE_5__.uB.List,
                            {
                              className: 'max-h-[300px] overflow-y-auto',
                              children:
                                0 === flatCommands.length
                                  ? (cov_2h6a8ja6v0().b[11][0]++,
                                    (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      cmdk__WEBPACK_IMPORTED_MODULE_5__.uB
                                        .Empty,
                                      {
                                        className:
                                          'py-6 text-center text-sm text-muted-foreground',
                                        children: 'No commands found.',
                                      }
                                    ))
                                  : (cov_2h6a8ja6v0().b[11][1]++,
                                    (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      'div',
                                      {
                                        className: 'p-2',
                                        children: groupedCommands.map(
                                          ([groupName, commands]) => (
                                            cov_2h6a8ja6v0().f[10]++,
                                            cov_2h6a8ja6v0().s[47]++,
                                            (0,
                                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                              'div',
                                              {
                                                className: 'mb-2',
                                                children: [
                                                  (0,
                                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                                    'div',
                                                    {
                                                      className:
                                                        'px-2 py-1.5 text-xs font-medium text-muted-foreground uppercase tracking-wider',
                                                      children: groupName,
                                                    }
                                                  ),
                                                  (0,
                                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                                    'div',
                                                    {
                                                      className: 'space-y-1',
                                                      children: commands.map(
                                                        (
                                                          command,
                                                          commandIndex
                                                        ) => {
                                                          cov_2h6a8ja6v0()
                                                            .f[11]++
                                                          const globalIndex =
                                                              (cov_2h6a8ja6v0()
                                                                .s[48]++,
                                                              flatCommands.indexOf(
                                                                command
                                                              )),
                                                            Icon =
                                                              (cov_2h6a8ja6v0()
                                                                .s[49]++,
                                                              command.icon)
                                                          return (
                                                            cov_2h6a8ja6v0()
                                                              .s[50]++,
                                                            (0,
                                                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                                              'div',
                                                              {
                                                                className: (0,
                                                                _lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(
                                                                  'flex items-center gap-3 rounded-md px-2 py-2 text-sm cursor-pointer transition-colors',
                                                                  globalIndex ===
                                                                    selectedIndex
                                                                    ? (cov_2h6a8ja6v0()
                                                                        .b[12][0]++,
                                                                      'bg-accent text-accent-foreground')
                                                                    : (cov_2h6a8ja6v0()
                                                                        .b[12][1]++,
                                                                      'hover:bg-accent hover:text-accent-foreground')
                                                                ),
                                                                onClick: () => (
                                                                  cov_2h6a8ja6v0()
                                                                    .f[12]++,
                                                                  cov_2h6a8ja6v0()
                                                                    .s[51]++,
                                                                  onSelect(
                                                                    command
                                                                  )
                                                                ),
                                                                children: [
                                                                  (0,
                                                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                                                    'div',
                                                                    {
                                                                      className:
                                                                        'flex h-8 w-8 items-center justify-center rounded-md bg-muted',
                                                                      children:
                                                                        (0,
                                                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                                                          Icon,
                                                                          {
                                                                            className:
                                                                              'h-4 w-4',
                                                                          }
                                                                        ),
                                                                    }
                                                                  ),
                                                                  (0,
                                                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                                                    'div',
                                                                    {
                                                                      className:
                                                                        'flex-1 min-w-0',
                                                                      children:
                                                                        [
                                                                          (0,
                                                                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                                                            'div',
                                                                            {
                                                                              className:
                                                                                'font-medium',
                                                                              children:
                                                                                command.title,
                                                                            }
                                                                          ),
                                                                          (0,
                                                                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                                                            'div',
                                                                            {
                                                                              className:
                                                                                'text-xs text-muted-foreground truncate',
                                                                              children:
                                                                                command.description,
                                                                            }
                                                                          ),
                                                                        ],
                                                                    }
                                                                  ),
                                                                  (cov_2h6a8ja6v0()
                                                                    .b[13][0]++,
                                                                  globalIndex ===
                                                                    selectedIndex &&
                                                                    (cov_2h6a8ja6v0()
                                                                      .b[13][1]++,
                                                                    (0,
                                                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                                                      'div',
                                                                      {
                                                                        className:
                                                                          'text-xs text-muted-foreground',
                                                                        children:
                                                                          '↵',
                                                                      }
                                                                    ))),
                                                                ],
                                                              },
                                                              command.key
                                                            )
                                                          )
                                                        }
                                                      ),
                                                    }
                                                  ),
                                                ],
                                              },
                                              groupName
                                            )
                                          )
                                        ),
                                      }
                                    )),
                            }
                          ),
                        ],
                      }
                    ),
                  }),
                }
              ))
            : (cov_2h6a8ja6v0().b[10][0]++, cov_2h6a8ja6v0().s[45]++, null)
        )
      }
      function useSlashCommand(editor) {
        cov_2h6a8ja6v0().f[13]++
        const [isOpen, setIsOpen] =
            (cov_2h6a8ja6v0().s[52]++,
            (0, react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1)),
          [position, setPosition] =
            (cov_2h6a8ja6v0().s[53]++,
            (0, react__WEBPACK_IMPORTED_MODULE_1__.useState)({ x: 0, y: 0 })),
          openMenu =
            (cov_2h6a8ja6v0().s[54]++,
            (0, react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((pos) => {
              ;(cov_2h6a8ja6v0().f[14]++,
                cov_2h6a8ja6v0().s[55]++,
                setPosition(pos),
                cov_2h6a8ja6v0().s[56]++,
                setIsOpen(!0))
            }, [])),
          closeMenu =
            (cov_2h6a8ja6v0().s[57]++,
            (0, react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
              ;(cov_2h6a8ja6v0().f[15]++,
                cov_2h6a8ja6v0().s[58]++,
                setIsOpen(!1))
            }, [])),
          handleCommandSelect =
            (cov_2h6a8ja6v0().s[59]++,
            (0, react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
              (command) => {
                ;(cov_2h6a8ja6v0().f[16]++,
                  cov_2h6a8ja6v0().s[60]++,
                  command.action(editor),
                  cov_2h6a8ja6v0().s[61]++,
                  closeMenu())
              },
              [editor, closeMenu]
            ))
        return (
          cov_2h6a8ja6v0().s[62]++,
          { isOpen, position, openMenu, closeMenu, handleCommandSelect }
        )
      }
      ;(cov_2h6a8ja6v0(),
        cov_2h6a8ja6v0().s[63]++,
        (SlashCommandMenu.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'SlashCommandMenu',
          props: {
            isOpen: {
              required: !0,
              tsType: { name: 'boolean' },
              description: '',
            },
            onClose: {
              required: !0,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
              },
              description: '',
            },
            onSelect: {
              required: !0,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '(command: SlashCommandItem) => void',
                signature: {
                  arguments: [
                    { type: { name: 'SlashCommandItem' }, name: 'command' },
                  ],
                  return: { name: 'void' },
                },
              },
              description: '',
            },
            position: {
              required: !0,
              tsType: {
                name: 'signature',
                type: 'object',
                raw: '{ x: number; y: number }',
                signature: {
                  properties: [
                    { key: 'x', value: { name: 'number', required: !0 } },
                    { key: 'y', value: { name: 'number', required: !0 } },
                  ],
                },
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
    },
  },
])
