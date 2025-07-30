'use strict'
;(self.webpackChunk_notable_web = self.webpackChunk_notable_web || []).push([
  [3790],
  {
    './components/templates/template-picker.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      ;(__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          CategoryFilter: () => CategoryFilter,
          CreateBlank: () => CreateBlank,
          Default: () => Default,
          EmptyState: () => EmptyState,
          LoadingState: () => LoadingState,
          MobileResponsive: () => MobileResponsive,
          OpenByDefault: () => OpenByDefault,
          SearchTemplates: () => SearchTemplates,
          SelectTemplate: () => SelectTemplate,
          SortOptions: () => SortOptions,
          TabNavigation: () => TabNavigation,
          TemplateWithStats: () => TemplateWithStats,
          WithManyTemplates: () => WithManyTemplates,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => template_picker_stories,
        }))
      var jsx_runtime = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        react = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
        ),
        next_image = __webpack_require__(
          '../../node_modules/.pnpm/@storybook+nextjs@9.0.18_@swc+core@1.13.3_@swc+helpers@0.5.17__esbuild@0.25.8_next@15.2_81f7dbdef00916e6db991164aa717941/node_modules/@storybook/nextjs/dist/images/next-image.mjs'
        ),
        sparkles = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/sparkles.js'
        ),
        file_text = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-text.js'
        ),
        search = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/search.js'
        ),
        x = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/x.js'
        ),
        filter = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/filter.js'
        ),
        star = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/star.js'
        ),
        clock = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/clock.js'
        ),
        chevron_right = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/chevron-right.js'
        ),
        utils = __webpack_require__('./lib/utils.ts'),
        input = __webpack_require__('./components/ui/input.tsx'),
        ui_button = __webpack_require__('./components/ui/button.tsx'),
        badge = __webpack_require__('./components/ui/badge.tsx'),
        tabs = __webpack_require__('./components/ui/tabs.tsx'),
        dialog = __webpack_require__('./components/ui/dialog.tsx'),
        dropdown_menu = __webpack_require__(
          './components/ui/dropdown-menu.tsx'
        ),
        scroll_area = __webpack_require__('./components/ui/scroll-area.tsx'),
        console = __webpack_require__(
          '../../node_modules/.pnpm/console-browserify@1.2.0/node_modules/console-browserify/index.js'
        )
      function cov_f9p3uomm9() {
        var path =
            '/Users/ryota.murakami/repository/Notable/packages/web/components/templates/template-picker.tsx',
          global = new Function('return this')(),
          gcv = '__coverage__',
          coverageData = {
            path: '/Users/ryota.murakami/repository/Notable/packages/web/components/templates/template-picker.tsx',
            statementMap: {
              0: {
                start: { line: 15, column: 42 },
                end: { line: 15, column: 60 },
              },
              1: {
                start: { line: 16, column: 52 },
                end: { line: 16, column: 73 },
              },
              2: {
                start: { line: 17, column: 32 },
                end: { line: 17, column: 57 },
              },
              3: {
                start: { line: 18, column: 38 },
                end: { line: 18, column: 56 },
              },
              4: {
                start: { line: 19, column: 40 },
                end: { line: 19, column: 58 },
              },
              5: {
                start: { line: 20, column: 38 },
                end: { line: 20, column: 59 },
              },
              6: {
                start: { line: 21, column: 52 },
                end: { line: 21, column: 72 },
              },
              7: {
                start: { line: 23, column: 4 },
                end: { line: 32, column: 7 },
              },
              8: {
                start: { line: 24, column: 8 },
                end: { line: 26, column: 9 },
              },
              9: {
                start: { line: 25, column: 12 },
                end: { line: 25, column: 42 },
              },
              10: {
                start: { line: 33, column: 40 },
                end: { line: 59, column: 5 },
              },
              11: {
                start: { line: 34, column: 8 },
                end: { line: 34, column: 27 },
              },
              12: {
                start: { line: 35, column: 8 },
                end: { line: 58, column: 9 },
              },
              13: {
                start: { line: 37, column: 39 },
                end: { line: 37, column: 79 },
              },
              14: {
                start: { line: 38, column: 12 },
                end: { line: 41, column: 13 },
              },
              15: {
                start: { line: 39, column: 39 },
                end: { line: 39, column: 70 },
              },
              16: {
                start: { line: 40, column: 16 },
                end: { line: 40, column: 57 },
              },
              17: {
                start: { line: 43, column: 27 },
                end: { line: 43, column: 48 },
              },
              18: {
                start: { line: 44, column: 12 },
                end: { line: 44, column: 85 },
              },
              19: {
                start: { line: 44, column: 44 },
                end: { line: 44, column: 85 },
              },
              20: {
                start: { line: 45, column: 12 },
                end: { line: 45, column: 63 },
              },
              21: {
                start: { line: 45, column: 29 },
                end: { line: 45, column: 63 },
              },
              22: {
                start: { line: 46, column: 12 },
                end: { line: 46, column: 39 },
              },
              23: {
                start: { line: 47, column: 12 },
                end: { line: 47, column: 38 },
              },
              24: {
                start: { line: 49, column: 38 },
                end: { line: 49, column: 77 },
              },
              25: {
                start: { line: 50, column: 12 },
                end: { line: 53, column: 13 },
              },
              26: {
                start: { line: 51, column: 38 },
                end: { line: 51, column: 68 },
              },
              27: {
                start: { line: 52, column: 16 },
                end: { line: 52, column: 55 },
              },
              28: {
                start: { line: 55, column: 12 },
                end: { line: 55, column: 62 },
              },
              29: {
                start: { line: 57, column: 12 },
                end: { line: 57, column: 32 },
              },
              30: {
                start: { line: 60, column: 33 },
                end: { line: 64, column: 5 },
              },
              31: {
                start: { line: 61, column: 8 },
                end: { line: 61, column: 38 },
              },
              32: {
                start: { line: 62, column: 8 },
                end: { line: 62, column: 35 },
              },
              33: {
                start: { line: 63, column: 8 },
                end: { line: 63, column: 28 },
              },
              34: {
                start: { line: 65, column: 30 },
                end: { line: 68, column: 5 },
              },
              35: {
                start: { line: 66, column: 8 },
                end: { line: 66, column: 86 },
              },
              36: {
                start: { line: 67, column: 8 },
                end: { line: 67, column: 28 },
              },
              37: {
                start: { line: 70, column: 30 },
                end: { line: 83, column: 6 },
              },
              38: {
                start: { line: 71, column: 23 },
                end: { line: 71, column: 32 },
              },
              39: {
                start: { line: 72, column: 8 },
                end: { line: 78, column: 9 },
              },
              40: {
                start: { line: 73, column: 26 },
                end: { line: 73, column: 51 },
              },
              41: {
                start: { line: 74, column: 12 },
                end: { line: 77, column: 15 },
              },
              42: {
                start: { line: 76, column: 16 },
                end: { line: 76, column: 270 },
              },
              43: {
                start: { line: 76, column: 234 },
                end: { line: 76, column: 267 },
              },
              44: {
                start: { line: 79, column: 8 },
                end: { line: 79, column: 24 },
              },
              45: {
                start: { line: 85, column: 29 },
                end: { line: 97, column: 6 },
              },
              46: {
                start: { line: 86, column: 23 },
                end: { line: 86, column: 25 },
              },
              47: {
                start: { line: 87, column: 8 },
                end: { line: 93, column: 11 },
              },
              48: {
                start: { line: 88, column: 29 },
                end: { line: 88, column: 71 },
              },
              49: {
                start: { line: 89, column: 12 },
                end: { line: 91, column: 13 },
              },
              50: {
                start: { line: 90, column: 16 },
                end: { line: 90, column: 38 },
              },
              51: {
                start: { line: 92, column: 12 },
                end: { line: 92, column: 44 },
              },
              52: {
                start: { line: 94, column: 8 },
                end: { line: 94, column: 22 },
              },
              53: {
                start: { line: 98, column: 29 },
                end: { line: 98, column: 81 },
              },
              54: {
                start: { line: 98, column: 51 },
                end: { line: 98, column: 68 },
              },
              55: {
                start: { line: 99, column: 28 },
                end: { line: 99, column: 49 },
              },
              56: {
                start: { line: 100, column: 4 },
                end: { line: 408, column: 7 },
              },
              57: {
                start: { line: 154, column: 63 },
                end: { line: 154, column: 93 },
              },
              58: {
                start: { line: 160, column: 61 },
                end: { line: 160, column: 79 },
              },
              59: {
                start: { line: 189, column: 73 },
                end: { line: 189, column: 93 },
              },
              60: {
                start: { line: 193, column: 73 },
                end: { line: 193, column: 92 },
              },
              61: {
                start: { line: 197, column: 73 },
                end: { line: 197, column: 92 },
              },
              62: {
                start: { line: 201, column: 73 },
                end: { line: 201, column: 90 },
              },
              63: {
                start: { line: 222, column: 69 },
                end: { line: 222, column: 95 },
              },
              64: {
                start: { line: 230, column: 93 },
                end: { line: 245, column: 71 },
              },
              65: {
                start: { line: 233, column: 73 },
                end: { line: 233, column: 105 },
              },
              66: {
                start: { line: 294, column: 60 },
                end: { line: 316, column: 77 },
              },
              67: {
                start: { line: 299, column: 117 },
                end: { line: 299, column: 140 },
              },
              68: {
                start: { line: 310, column: 130 },
                end: { line: 313, column: 91 },
              },
              69: {
                start: { line: 312, column: 93 },
                end: { line: 312, column: 123 },
              },
              70: {
                start: { line: 358, column: 121 },
                end: { line: 362, column: 83 },
              },
              71: {
                start: { line: 360, column: 85 },
                end: { line: 360, column: 115 },
              },
              72: {
                start: { line: 390, column: 120 },
                end: { line: 393, column: 83 },
              },
              73: {
                start: { line: 392, column: 85 },
                end: { line: 392, column: 115 },
              },
              74: {
                start: { line: 411, column: 4 },
                end: { line: 502, column: 7 },
              },
              75: {
                start: { line: 504, column: 0 },
                end: { line: 583, column: 2 },
              },
            },
            fnMap: {
              0: {
                name: 'TemplatePicker',
                decl: {
                  start: { line: 14, column: 16 },
                  end: { line: 14, column: 30 },
                },
                loc: {
                  start: { line: 14, column: 99 },
                  end: { line: 409, column: 1 },
                },
                line: 14,
              },
              1: {
                name: '(anonymous_1)',
                decl: {
                  start: { line: 23, column: 20 },
                  end: { line: 23, column: 21 },
                },
                loc: {
                  start: { line: 23, column: 24 },
                  end: { line: 27, column: 5 },
                },
                line: 23,
              },
              2: {
                name: '(anonymous_2)',
                decl: {
                  start: { line: 33, column: 40 },
                  end: { line: 33, column: 41 },
                },
                loc: {
                  start: { line: 33, column: 50 },
                  end: { line: 59, column: 5 },
                },
                line: 33,
              },
              3: {
                name: '(anonymous_3)',
                decl: {
                  start: { line: 60, column: 33 },
                  end: { line: 60, column: 34 },
                },
                loc: {
                  start: { line: 60, column: 45 },
                  end: { line: 64, column: 5 },
                },
                line: 60,
              },
              4: {
                name: '(anonymous_4)',
                decl: {
                  start: { line: 65, column: 30 },
                  end: { line: 65, column: 31 },
                },
                loc: {
                  start: { line: 65, column: 34 },
                  end: { line: 68, column: 5 },
                },
                line: 65,
              },
              5: {
                name: '(anonymous_5)',
                decl: {
                  start: { line: 70, column: 44 },
                  end: { line: 70, column: 45 },
                },
                loc: {
                  start: { line: 70, column: 48 },
                  end: { line: 80, column: 5 },
                },
                line: 70,
              },
              6: {
                name: '(anonymous_6)',
                decl: {
                  start: { line: 74, column: 39 },
                  end: { line: 74, column: 40 },
                },
                loc: {
                  start: { line: 74, column: 51 },
                  end: { line: 77, column: 13 },
                },
                line: 74,
              },
              7: {
                name: '(anonymous_7)',
                decl: {
                  start: { line: 76, column: 227 },
                  end: { line: 76, column: 228 },
                },
                loc: {
                  start: { line: 76, column: 234 },
                  end: { line: 76, column: 267 },
                },
                line: 76,
              },
              8: {
                name: '(anonymous_8)',
                decl: {
                  start: { line: 85, column: 43 },
                  end: { line: 85, column: 44 },
                },
                loc: {
                  start: { line: 85, column: 47 },
                  end: { line: 95, column: 5 },
                },
                line: 85,
              },
              9: {
                name: '(anonymous_9)',
                decl: {
                  start: { line: 87, column: 34 },
                  end: { line: 87, column: 35 },
                },
                loc: {
                  start: { line: 87, column: 46 },
                  end: { line: 93, column: 9 },
                },
                line: 87,
              },
              10: {
                name: '(anonymous_10)',
                decl: {
                  start: { line: 98, column: 46 },
                  end: { line: 98, column: 47 },
                },
                loc: {
                  start: { line: 98, column: 51 },
                  end: { line: 98, column: 68 },
                },
                line: 98,
              },
              11: {
                name: '(anonymous_11)',
                decl: {
                  start: { line: 154, column: 58 },
                  end: { line: 154, column: 59 },
                },
                loc: {
                  start: { line: 154, column: 63 },
                  end: { line: 154, column: 93 },
                },
                line: 154,
              },
              12: {
                name: '(anonymous_12)',
                decl: {
                  start: { line: 160, column: 57 },
                  end: { line: 160, column: 58 },
                },
                loc: {
                  start: { line: 160, column: 61 },
                  end: { line: 160, column: 79 },
                },
                line: 160,
              },
              13: {
                name: '(anonymous_13)',
                decl: {
                  start: { line: 189, column: 69 },
                  end: { line: 189, column: 70 },
                },
                loc: {
                  start: { line: 189, column: 73 },
                  end: { line: 189, column: 93 },
                },
                line: 189,
              },
              14: {
                name: '(anonymous_14)',
                decl: {
                  start: { line: 193, column: 69 },
                  end: { line: 193, column: 70 },
                },
                loc: {
                  start: { line: 193, column: 73 },
                  end: { line: 193, column: 92 },
                },
                line: 193,
              },
              15: {
                name: '(anonymous_15)',
                decl: {
                  start: { line: 197, column: 69 },
                  end: { line: 197, column: 70 },
                },
                loc: {
                  start: { line: 197, column: 73 },
                  end: { line: 197, column: 92 },
                },
                line: 197,
              },
              16: {
                name: '(anonymous_16)',
                decl: {
                  start: { line: 201, column: 69 },
                  end: { line: 201, column: 70 },
                },
                loc: {
                  start: { line: 201, column: 73 },
                  end: { line: 201, column: 90 },
                },
                line: 201,
              },
              17: {
                name: '(anonymous_17)',
                decl: {
                  start: { line: 222, column: 65 },
                  end: { line: 222, column: 66 },
                },
                loc: {
                  start: { line: 222, column: 69 },
                  end: { line: 222, column: 95 },
                },
                line: 222,
              },
              18: {
                name: '(anonymous_18)',
                decl: {
                  start: { line: 230, column: 67 },
                  end: { line: 230, column: 68 },
                },
                loc: {
                  start: { line: 230, column: 93 },
                  end: { line: 245, column: 71 },
                },
                line: 230,
              },
              19: {
                name: '(anonymous_19)',
                decl: {
                  start: { line: 233, column: 69 },
                  end: { line: 233, column: 70 },
                },
                loc: {
                  start: { line: 233, column: 73 },
                  end: { line: 233, column: 105 },
                },
                line: 233,
              },
              20: {
                name: '(anonymous_20)',
                decl: {
                  start: { line: 292, column: 103 },
                  end: { line: 292, column: 104 },
                },
                loc: {
                  start: { line: 292, column: 140 },
                  end: { line: 317, column: 57 },
                },
                line: 292,
              },
              21: {
                name: '(anonymous_21)',
                decl: {
                  start: { line: 299, column: 112 },
                  end: { line: 299, column: 113 },
                },
                loc: {
                  start: { line: 299, column: 117 },
                  end: { line: 299, column: 140 },
                },
                line: 299,
              },
              22: {
                name: '(anonymous_22)',
                decl: {
                  start: { line: 310, column: 104 },
                  end: { line: 310, column: 105 },
                },
                loc: {
                  start: { line: 310, column: 130 },
                  end: { line: 313, column: 91 },
                },
                line: 310,
              },
              23: {
                name: '(anonymous_23)',
                decl: {
                  start: { line: 312, column: 89 },
                  end: { line: 312, column: 90 },
                },
                loc: {
                  start: { line: 312, column: 93 },
                  end: { line: 312, column: 123 },
                },
                line: 312,
              },
              24: {
                name: '(anonymous_24)',
                decl: {
                  start: { line: 358, column: 95 },
                  end: { line: 358, column: 96 },
                },
                loc: {
                  start: { line: 358, column: 121 },
                  end: { line: 362, column: 83 },
                },
                line: 358,
              },
              25: {
                name: '(anonymous_25)',
                decl: {
                  start: { line: 360, column: 81 },
                  end: { line: 360, column: 82 },
                },
                loc: {
                  start: { line: 360, column: 85 },
                  end: { line: 360, column: 115 },
                },
                line: 360,
              },
              26: {
                name: '(anonymous_26)',
                decl: {
                  start: { line: 390, column: 94 },
                  end: { line: 390, column: 95 },
                },
                loc: {
                  start: { line: 390, column: 120 },
                  end: { line: 393, column: 83 },
                },
                line: 390,
              },
              27: {
                name: '(anonymous_27)',
                decl: {
                  start: { line: 392, column: 81 },
                  end: { line: 392, column: 82 },
                },
                loc: {
                  start: { line: 392, column: 85 },
                  end: { line: 392, column: 115 },
                },
                line: 392,
              },
              28: {
                name: 'TemplateCard',
                decl: {
                  start: { line: 410, column: 9 },
                  end: { line: 410, column: 21 },
                },
                loc: {
                  start: { line: 410, column: 64 },
                  end: { line: 503, column: 1 },
                },
                line: 410,
              },
            },
            branchMap: {
              0: {
                loc: {
                  start: { line: 24, column: 8 },
                  end: { line: 26, column: 9 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 24, column: 8 },
                    end: { line: 26, column: 9 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 24,
              },
              1: {
                loc: {
                  start: { line: 38, column: 12 },
                  end: { line: 41, column: 13 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 38, column: 12 },
                    end: { line: 41, column: 13 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 38,
              },
              2: {
                loc: {
                  start: { line: 40, column: 30 },
                  end: { line: 40, column: 55 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 40, column: 30 },
                    end: { line: 40, column: 49 },
                  },
                  {
                    start: { line: 40, column: 53 },
                    end: { line: 40, column: 55 },
                  },
                ],
                line: 40,
              },
              3: {
                loc: {
                  start: { line: 44, column: 12 },
                  end: { line: 44, column: 85 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 44, column: 12 },
                    end: { line: 44, column: 85 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 44,
              },
              4: {
                loc: {
                  start: { line: 45, column: 12 },
                  end: { line: 45, column: 63 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 45, column: 12 },
                    end: { line: 45, column: 63 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 45,
              },
              5: {
                loc: {
                  start: { line: 50, column: 12 },
                  end: { line: 53, column: 13 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 50, column: 12 },
                    end: { line: 53, column: 13 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 50,
              },
              6: {
                loc: {
                  start: { line: 52, column: 29 },
                  end: { line: 52, column: 53 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 52, column: 29 },
                    end: { line: 52, column: 47 },
                  },
                  {
                    start: { line: 52, column: 51 },
                    end: { line: 52, column: 53 },
                  },
                ],
                line: 52,
              },
              7: {
                loc: {
                  start: { line: 66, column: 8 },
                  end: { line: 66, column: 85 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 66, column: 61 },
                    end: { line: 66, column: 67 },
                  },
                  {
                    start: { line: 66, column: 70 },
                    end: { line: 66, column: 85 },
                  },
                ],
                line: 66,
              },
              8: {
                loc: {
                  start: { line: 66, column: 8 },
                  end: { line: 66, column: 58 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 66, column: 8 },
                    end: { line: 66, column: 30 },
                  },
                  {
                    start: { line: 66, column: 34 },
                    end: { line: 66, column: 58 },
                  },
                ],
                line: 66,
              },
              9: {
                loc: {
                  start: { line: 72, column: 8 },
                  end: { line: 78, column: 9 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 72, column: 8 },
                    end: { line: 78, column: 9 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 72,
              },
              10: {
                loc: {
                  start: { line: 76, column: 23 },
                  end: { line: 76, column: 269 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 76, column: 23 },
                    end: { line: 76, column: 66 },
                  },
                  {
                    start: { line: 76, column: 70 },
                    end: { line: 76, column: 120 },
                  },
                  {
                    start: { line: 76, column: 125 },
                    end: { line: 76, column: 268 },
                  },
                ],
                line: 76,
              },
              11: {
                loc: {
                  start: { line: 76, column: 125 },
                  end: { line: 76, column: 268 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 76, column: 198 },
                    end: { line: 76, column: 204 },
                  },
                  {
                    start: { line: 76, column: 207 },
                    end: { line: 76, column: 268 },
                  },
                ],
                line: 76,
              },
              12: {
                loc: {
                  start: { line: 76, column: 125 },
                  end: { line: 76, column: 195 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 76, column: 125 },
                    end: { line: 76, column: 166 },
                  },
                  {
                    start: { line: 76, column: 170 },
                    end: { line: 76, column: 195 },
                  },
                ],
                line: 76,
              },
              13: {
                loc: {
                  start: { line: 88, column: 29 },
                  end: { line: 88, column: 71 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 88, column: 29 },
                    end: { line: 88, column: 50 },
                  },
                  {
                    start: { line: 88, column: 54 },
                    end: { line: 88, column: 71 },
                  },
                ],
                line: 88,
              },
              14: {
                loc: {
                  start: { line: 89, column: 12 },
                  end: { line: 91, column: 13 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 89, column: 12 },
                    end: { line: 91, column: 13 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 89,
              },
              15: {
                loc: {
                  start: { line: 157, column: 44 },
                  end: { line: 165, column: 46 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 157, column: 44 },
                    end: { line: 157, column: 55 },
                  },
                  {
                    start: { line: 157, column: 73 },
                    end: { line: 165, column: 46 },
                  },
                ],
                line: 157,
              },
              16: {
                loc: {
                  start: { line: 220, column: 65 },
                  end: { line: 220, column: 113 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 220, column: 94 },
                    end: { line: 220, column: 103 },
                  },
                  {
                    start: { line: 220, column: 106 },
                    end: { line: 220, column: 113 },
                  },
                ],
                line: 220,
              },
              17: {
                loc: {
                  start: { line: 231, column: 69 },
                  end: { line: 231, column: 123 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 231, column: 104 },
                    end: { line: 231, column: 113 },
                  },
                  {
                    start: { line: 231, column: 116 },
                    end: { line: 231, column: 123 },
                  },
                ],
                line: 231,
              },
              18: {
                loc: {
                  start: { line: 284, column: 62 },
                  end: { line: 333, column: 54 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 284, column: 88 },
                    end: { line: 290, column: 54 },
                  },
                  {
                    start: { line: 290, column: 57 },
                    end: { line: 333, column: 54 },
                  },
                ],
                line: 284,
              },
              19: {
                loc: {
                  start: { line: 290, column: 57 },
                  end: { line: 333, column: 54 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 290, column: 114 },
                    end: { line: 318, column: 54 },
                  },
                  {
                    start: { line: 318, column: 71 },
                    end: { line: 333, column: 54 },
                  },
                ],
                line: 290,
              },
              20: {
                loc: {
                  start: { line: 299, column: 76 },
                  end: { line: 299, column: 215 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 299, column: 185 },
                    end: { line: 299, column: 191 },
                  },
                  {
                    start: { line: 299, column: 194 },
                    end: { line: 299, column: 215 },
                  },
                ],
                line: 299,
              },
              21: {
                loc: {
                  start: { line: 299, column: 76 },
                  end: { line: 299, column: 182 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 299, column: 76 },
                    end: { line: 299, column: 151 },
                  },
                  {
                    start: { line: 299, column: 155 },
                    end: { line: 299, column: 182 },
                  },
                ],
                line: 299,
              },
              22: {
                loc: {
                  start: { line: 410, column: 43 },
                  end: { line: 410, column: 60 },
                },
                type: 'default-arg',
                locations: [
                  {
                    start: { line: 410, column: 55 },
                    end: { line: 410, column: 60 },
                  },
                ],
                line: 410,
              },
              23: {
                loc: {
                  start: { line: 417, column: 26 },
                  end: { line: 433, column: 18 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 417, column: 61 },
                    end: { line: 422, column: 18 },
                  },
                  {
                    start: { line: 422, column: 35 },
                    end: { line: 433, column: 18 },
                  },
                ],
                line: 417,
              },
              24: {
                loc: {
                  start: { line: 460, column: 36 },
                  end: { line: 464, column: 38 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 460, column: 36 },
                    end: { line: 460, column: 53 },
                  },
                  {
                    start: { line: 460, column: 71 },
                    end: { line: 464, column: 38 },
                  },
                ],
                line: 460,
              },
              25: {
                loc: {
                  start: { line: 465, column: 36 },
                  end: { line: 472, column: 38 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 465, column: 36 },
                    end: { line: 465, column: 62 },
                  },
                  {
                    start: { line: 465, column: 80 },
                    end: { line: 472, column: 38 },
                  },
                ],
                line: 465,
              },
              26: {
                loc: {
                  start: { line: 475, column: 28 },
                  end: { line: 496, column: 30 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 475, column: 28 },
                    end: { line: 475, column: 37 },
                  },
                  {
                    start: { line: 475, column: 55 },
                    end: { line: 496, column: 30 },
                  },
                ],
                line: 475,
              },
              27: {
                loc: {
                  start: { line: 478, column: 36 },
                  end: { line: 488, column: 38 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 478, column: 36 },
                    end: { line: 478, column: 55 },
                  },
                  {
                    start: { line: 478, column: 73 },
                    end: { line: 488, column: 38 },
                  },
                ],
                line: 478,
              },
              28: {
                loc: {
                  start: { line: 489, column: 36 },
                  end: { line: 494, column: 38 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 489, column: 36 },
                    end: { line: 489, column: 59 },
                  },
                  {
                    start: { line: 489, column: 77 },
                    end: { line: 494, column: 38 },
                  },
                ],
                line: 489,
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
              64: 0,
              65: 0,
              66: 0,
              67: 0,
              68: 0,
              69: 0,
              70: 0,
              71: 0,
              72: 0,
              73: 0,
              74: 0,
              75: 0,
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
            b: {
              0: [0, 0],
              1: [0, 0],
              2: [0, 0],
              3: [0, 0],
              4: [0, 0],
              5: [0, 0],
              6: [0, 0],
              7: [0, 0],
              8: [0, 0],
              9: [0, 0],
              10: [0, 0, 0],
              11: [0, 0],
              12: [0, 0],
              13: [0, 0],
              14: [0, 0],
              15: [0, 0],
              16: [0, 0],
              17: [0, 0],
              18: [0, 0],
              19: [0, 0],
              20: [0, 0],
              21: [0, 0],
              22: [0],
              23: [0, 0],
              24: [0, 0],
              25: [0, 0],
              26: [0, 0],
              27: [0, 0],
              28: [0, 0],
            },
            inputSourceMap: {
              version: 3,
              sources: [
                '/Users/ryota.murakami/repository/Notable/packages/web/components/templates/template-picker.tsx',
              ],
              sourcesContent: [
                "'use client'\n\nimport * as React from 'react'\nimport Image from 'next/image'\nimport {\n  ChevronRight,\n  Clock,\n  FileText,\n  Filter,\n  Search,\n  Sparkles,\n  Star,\n  X,\n} from 'lucide-react'\nimport { cn } from '@/lib/utils'\nimport { Input } from '@/components/ui/input'\nimport { Button } from '@/components/ui/button'\nimport { Badge } from '@/components/ui/badge'\nimport { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'\nimport {\n  Dialog,\n  DialogContent,\n  DialogDescription,\n  DialogHeader,\n  DialogTitle,\n} from '@/components/ui/dialog'\nimport {\n  DropdownMenu,\n  DropdownMenuContent,\n  DropdownMenuItem,\n  DropdownMenuSeparator,\n  DropdownMenuTrigger,\n} from '@/components/ui/dropdown-menu'\nimport { ScrollArea } from '@/components/ui/scroll-area'\n\nimport type { Template, TemplateCategory } from '@/types/templates'\n\nexport type { Template, TemplateCategory }\n\nexport interface TemplatePickerProps {\n  open: boolean\n  onOpenChange: (open: boolean) => void\n  onTemplateSelect: (template: Template) => void\n  onCreateBlank?: () => void\n  className?: string\n}\n\nexport function TemplatePicker({\n  open,\n  onOpenChange,\n  onTemplateSelect,\n  onCreateBlank,\n  className,\n}: TemplatePickerProps) {\n  const [searchQuery, setSearchQuery] = React.useState('')\n  const [selectedCategory, setSelectedCategory] = React.useState<string>('all')\n  const [sortBy, setSortBy] = React.useState<\n    'popular' | 'recent' | 'name' | 'rating'\n  >('popular')\n  const [templates, setTemplates] = React.useState<Template[]>([])\n  const [categories, setCategories] = React.useState<TemplateCategory[]>([])\n  const [isLoading, setIsLoading] = React.useState(false)\n  const [selectedTemplate, setSelectedTemplate] =\n    React.useState<Template | null>(null)\n\n  // Fetch templates and categories\n  React.useEffect(() => {\n    if (open) {\n      fetchTemplatesAndCategories()\n    }\n  }, [open, selectedCategory, sortBy, searchQuery])\n\n  const fetchTemplatesAndCategories = async () => {\n    setIsLoading(true)\n    try {\n      // Fetch categories\n      const categoriesResponse = await fetch('/api/templates/categories')\n      if (categoriesResponse.ok) {\n        const categoriesData = await categoriesResponse.json()\n        setCategories(categoriesData.data || [])\n      }\n\n      // Build templates query\n      const params = new URLSearchParams()\n      if (selectedCategory !== 'all') params.set('category', selectedCategory)\n      if (searchQuery) params.set('search', searchQuery)\n      params.set('sort', sortBy)\n      params.set('limit', '50')\n\n      // Fetch templates\n      const templatesResponse = await fetch(`/api/templates?${params}`)\n      if (templatesResponse.ok) {\n        const templatesData = await templatesResponse.json()\n        setTemplates(templatesData.data || [])\n      }\n    } catch (error) {\n      console.error('Error fetching templates:', error)\n    } finally {\n      setIsLoading(false)\n    }\n  }\n\n  const handleTemplateSelect = (template: Template) => {\n    setSelectedTemplate(template)\n    onTemplateSelect(template)\n    onOpenChange(false)\n  }\n\n  const handleCreateBlank = () => {\n    onCreateBlank?.()\n    onOpenChange(false)\n  }\n\n  // Filter templates based on search and category\n  const filteredTemplates = React.useMemo(() => {\n    let filtered = templates\n\n    if (searchQuery) {\n      const query = searchQuery.toLowerCase()\n      filtered = filtered.filter(\n        (template) =>\n          template.name.toLowerCase().includes(query) ||\n          template.description.toLowerCase().includes(query) ||\n          template.tags?.some((tag) => tag.toLowerCase().includes(query))\n      )\n    }\n\n    return filtered\n  }, [templates, searchQuery])\n\n  // Group templates by category for display\n  const groupedTemplates = React.useMemo(() => {\n    const groups: Record<string, Template[]> = {}\n\n    filteredTemplates.forEach((template) => {\n      const category = template.categoryName || template.category\n      if (!groups[category]) {\n        groups[category] = []\n      }\n      groups[category].push(template)\n    })\n\n    return groups\n  }, [filteredTemplates])\n\n  const popularTemplates = templates\n    .filter((t) => t.usageCount > 20)\n    .slice(0, 6)\n  const recentTemplates = templates.slice(0, 6)\n\n  return (\n    <Dialog open={open} onOpenChange={onOpenChange}>\n      <DialogContent className={cn('max-w-6xl h-[80vh] p-0', className)}>\n        <DialogHeader className='px-6 py-4 border-b'>\n          <DialogTitle className='flex items-center gap-2'>\n            <Sparkles className='h-5 w-5 text-primary' />\n            Choose a Template\n          </DialogTitle>\n          <DialogDescription>\n            Get started quickly with professional templates or create a blank\n            note\n          </DialogDescription>\n        </DialogHeader>\n\n        <div className='flex h-full'>\n          {/* Sidebar */}\n          <div className='w-64 border-r bg-muted/30 p-4'>\n            <div className='space-y-4'>\n              {/* Quick Actions */}\n              <div className='space-y-2'>\n                <Button\n                  onClick={handleCreateBlank}\n                  variant='outline'\n                  className='w-full justify-start'\n                >\n                  <FileText className='mr-2 h-4 w-4' />\n                  Blank Note\n                </Button>\n              </div>\n\n              {/* Search */}\n              <div className='relative'>\n                <Search className='absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground' />\n                <Input\n                  placeholder='Search templates...'\n                  value={searchQuery}\n                  onChange={(e) => setSearchQuery(e.target.value)}\n                  className='pl-9'\n                />\n                {searchQuery && (\n                  <Button\n                    variant='ghost'\n                    size='sm'\n                    onClick={() => setSearchQuery('')}\n                    className='absolute right-1 top-1/2 h-6 w-6 -translate-y-1/2 p-0'\n                  >\n                    <X className='h-3 w-3' />\n                  </Button>\n                )}\n              </div>\n\n              {/* Sort & Filter */}\n              <div className='flex gap-2'>\n                <DropdownMenu>\n                  <DropdownMenuTrigger asChild>\n                    <Button variant='outline' size='sm' className='flex-1'>\n                      <Filter className='mr-2 h-3 w-3' />\n                      Sort\n                    </Button>\n                  </DropdownMenuTrigger>\n                  <DropdownMenuContent>\n                    <DropdownMenuItem onClick={() => setSortBy('popular')}>\n                      Most Popular\n                    </DropdownMenuItem>\n                    <DropdownMenuItem onClick={() => setSortBy('recent')}>\n                      Most Recent\n                    </DropdownMenuItem>\n                    <DropdownMenuItem onClick={() => setSortBy('rating')}>\n                      Highest Rated\n                    </DropdownMenuItem>\n                    <DropdownMenuItem onClick={() => setSortBy('name')}>\n                      Name A-Z\n                    </DropdownMenuItem>\n                  </DropdownMenuContent>\n                </DropdownMenu>\n              </div>\n\n              {/* Categories */}\n              <div className='space-y-2'>\n                <h3 className='text-sm font-medium text-muted-foreground uppercase tracking-wide'>\n                  Categories\n                </h3>\n                <div className='space-y-1'>\n                  <Button\n                    variant={selectedCategory === 'all' ? 'default' : 'ghost'}\n                    size='sm'\n                    onClick={() => setSelectedCategory('all')}\n                    className='w-full justify-start'\n                  >\n                    All Templates ({templates.length})\n                  </Button>\n                  {categories.map((category) => (\n                    <Button\n                      key={category.id}\n                      variant={\n                        selectedCategory === category.id ? 'default' : 'ghost'\n                      }\n                      size='sm'\n                      onClick={() => setSelectedCategory(category.id)}\n                      className='w-full justify-start'\n                    >\n                      <span className='mr-2'>{category.icon}</span>\n                      {category.name} ({category.templateCount})\n                    </Button>\n                  ))}\n                </div>\n              </div>\n            </div>\n          </div>\n\n          {/* Main Content */}\n          <div className='flex-1 overflow-hidden'>\n            <Tabs defaultValue='browse' className='h-full flex flex-col'>\n              <TabsList className='grid w-full grid-cols-3 mx-6 mt-4'>\n                <TabsTrigger value='browse'>Browse</TabsTrigger>\n                <TabsTrigger value='popular'>Popular</TabsTrigger>\n                <TabsTrigger value='recent'>Recent</TabsTrigger>\n              </TabsList>\n\n              <div className='flex-1 overflow-hidden'>\n                <TabsContent value='browse' className='h-full mt-0'>\n                  <ScrollArea className='h-full px-6 py-4'>\n                    {isLoading ? (\n                      <div className='flex items-center justify-center h-32'>\n                        <div className='text-sm text-muted-foreground'>\n                          Loading templates...\n                        </div>\n                      </div>\n                    ) : Object.keys(groupedTemplates).length > 0 ? (\n                      <div className='space-y-8'>\n                        {Object.entries(groupedTemplates).map(\n                          ([categoryName, categoryTemplates]) => (\n                            <div key={categoryName}>\n                              <h3 className='text-lg font-semibold mb-4 flex items-center gap-2'>\n                                {\n                                  categories.find(\n                                    (c) => c.name === categoryName\n                                  )?.icon\n                                }\n                                {categoryName}\n                                <Badge variant='secondary' className='ml-2'>\n                                  {categoryTemplates.length}\n                                </Badge>\n                              </h3>\n                              <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>\n                                {categoryTemplates.map((template) => (\n                                  <TemplateCard\n                                    key={template.id}\n                                    template={template}\n                                    onClick={() =>\n                                      handleTemplateSelect(template)\n                                    }\n                                  />\n                                ))}\n                              </div>\n                            </div>\n                          )\n                        )}\n                      </div>\n                    ) : (\n                      <div className='flex flex-col items-center justify-center h-32 text-center'>\n                        <Search className='h-12 w-12 text-muted-foreground mb-4' />\n                        <h3 className='text-lg font-medium mb-2'>\n                          No templates found\n                        </h3>\n                        <p className='text-sm text-muted-foreground'>\n                          Try adjusting your search or category filter\n                        </p>\n                      </div>\n                    )}\n                  </ScrollArea>\n                </TabsContent>\n\n                <TabsContent value='popular' className='h-full mt-0'>\n                  <ScrollArea className='h-full px-6 py-4'>\n                    <div className='space-y-4'>\n                      <div className='flex items-center gap-2 mb-6'>\n                        <Star className='h-5 w-5 text-yellow-500' />\n                        <h3 className='text-lg font-semibold'>\n                          Most Popular Templates\n                        </h3>\n                      </div>\n                      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>\n                        {popularTemplates.map((template) => (\n                          <TemplateCard\n                            key={template.id}\n                            template={template}\n                            onClick={() => handleTemplateSelect(template)}\n                            showStats\n                          />\n                        ))}\n                      </div>\n                    </div>\n                  </ScrollArea>\n                </TabsContent>\n\n                <TabsContent value='recent' className='h-full mt-0'>\n                  <ScrollArea className='h-full px-6 py-4'>\n                    <div className='space-y-4'>\n                      <div className='flex items-center gap-2 mb-6'>\n                        <Clock className='h-5 w-5 text-blue-500' />\n                        <h3 className='text-lg font-semibold'>\n                          Recently Added\n                        </h3>\n                      </div>\n                      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>\n                        {recentTemplates.map((template) => (\n                          <TemplateCard\n                            key={template.id}\n                            template={template}\n                            onClick={() => handleTemplateSelect(template)}\n                          />\n                        ))}\n                      </div>\n                    </div>\n                  </ScrollArea>\n                </TabsContent>\n              </div>\n            </Tabs>\n          </div>\n        </div>\n      </DialogContent>\n    </Dialog>\n  )\n}\n\ninterface TemplateCardProps {\n  template: Template\n  onClick: () => void\n  showStats?: boolean\n}\n\nfunction TemplateCard({\n  template,\n  onClick,\n  showStats = false,\n}: TemplateCardProps) {\n  return (\n    <div\n      onClick={onClick}\n      className='group relative p-4 rounded-lg border border-border bg-card hover:bg-accent/50 cursor-pointer transition-all duration-200 hover:shadow-md'\n    >\n      {/* Template Preview/Thumbnail */}\n      <div className='aspect-video mb-3 rounded-md bg-muted/50 border flex items-center justify-center overflow-hidden'>\n        {template.thumbnail ? (\n          <Image\n            src={template.thumbnail}\n            alt={template.name}\n            fill\n            className='object-cover'\n          />\n        ) : (\n          <div className='flex flex-col items-center gap-2 text-muted-foreground'>\n            <FileText className='h-8 w-8' />\n            <span className='text-xs font-medium'>{template.categoryIcon}</span>\n          </div>\n        )}\n      </div>\n\n      {/* Template Info */}\n      <div className='space-y-2'>\n        <div className='flex items-start justify-between'>\n          <h4 className='font-medium text-sm leading-5 group-hover:text-primary transition-colors'>\n            {template.name}\n          </h4>\n          <ChevronRight className='h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100' />\n        </div>\n\n        <p className='text-xs text-muted-foreground line-clamp-2 leading-relaxed'>\n          {template.description}\n        </p>\n\n        {/* Template Metadata */}\n        <div className='flex items-center justify-between pt-2'>\n          <div className='flex items-center gap-2'>\n            {template.isSystem && (\n              <Badge variant='secondary' className='text-xs'>\n                Built-in\n              </Badge>\n            )}\n            {template.variableCount > 0 && (\n              <Badge variant='outline' className='text-xs'>\n                {template.variableCount} fields\n              </Badge>\n            )}\n          </div>\n\n          {showStats && (\n            <div className='flex items-center gap-2 text-xs text-muted-foreground'>\n              {template.rating > 0 && (\n                <div className='flex items-center gap-1'>\n                  <Star className='h-3 w-3 fill-yellow-400 text-yellow-400' />\n                  <span>{template.rating.toFixed(1)}</span>\n                </div>\n              )}\n              {template.usageCount > 0 && (\n                <span>{template.usageCount} uses</span>\n              )}\n            </div>\n          )}\n        </div>\n      </div>\n    </div>\n  )\n}\n",
              ],
              names: [],
              mappings:
                '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AC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAa,AAAZ,CAAa,AAAZ,CAAa,AAAZ,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;IAC5D,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,AAAoB,CAAnB,AAAoB,CAAnB,AAAoB,CAAnB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;IACtE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;IACtD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAC5C,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAkB,AAAjB,CAAkB,AAAjB,CAAkB,AAAjB,CAAC,AAAiB,CAAhB,AAAiB,CAAhB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;IAEjC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;IAChC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACpB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YACR,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QAC9B;IACF,CAAC,CAAC,CAAC;QAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;KAAC;IAEhD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QAC9C,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACjB,CAAC,CAAC,CAAC,CAAC;YACF,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;YAClB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YAClE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACzB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACrD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YACzC;YAEA,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;YACvB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YACnC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YACvE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YACjD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YACzB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YAExB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;YACjB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YAChE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACxB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACnD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YACvC;QACF,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YACd,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QAClD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,AAAC;YACR,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACpB;IACF;IAEA,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACnD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QAC5B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACzB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;IACpB;IAEA,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;sEAC9B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QAChB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;IACpB;IAEA,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;IAC/C,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QAC5C,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QAEvB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YACf,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YACtC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACxB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;uBACV,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAA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AAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;0BAGnJ,KAAC,CAAC,CAAC,CAAC;gBAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;0BAC9G,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,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CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;;;kCAGxI,KAAC,CAAC;wBAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;kCACtE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;kCAIvB,MAAC,CAAC,CAAC,CAAC;wBAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAA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',
            },
            _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
            hash: '154cdd1a89fdb1a48ef575e026870db162c337d1',
          },
          coverage = global[gcv] || (global[gcv] = {})
        ;(coverage[path] &&
          '154cdd1a89fdb1a48ef575e026870db162c337d1' === coverage[path].hash) ||
          (coverage[path] = coverageData)
        var actualCoverage = coverage[path]
        return (
          (cov_f9p3uomm9 = function () {
            return actualCoverage
          }),
          actualCoverage
        )
      }
      function TemplatePicker({
        open,
        onOpenChange,
        onTemplateSelect,
        onCreateBlank,
        className,
      }) {
        cov_f9p3uomm9().f[0]++
        const [searchQuery, setSearchQuery] =
            (cov_f9p3uomm9().s[0]++, react.useState('')),
          [selectedCategory, setSelectedCategory] =
            (cov_f9p3uomm9().s[1]++, react.useState('all')),
          [sortBy, setSortBy] =
            (cov_f9p3uomm9().s[2]++, react.useState('popular')),
          [templates, setTemplates] =
            (cov_f9p3uomm9().s[3]++, react.useState([])),
          [categories, setCategories] =
            (cov_f9p3uomm9().s[4]++, react.useState([])),
          [isLoading, setIsLoading] =
            (cov_f9p3uomm9().s[5]++, react.useState(!1)),
          [selectedTemplate, setSelectedTemplate] =
            (cov_f9p3uomm9().s[6]++, react.useState(null))
        ;(cov_f9p3uomm9().s[7]++,
          react.useEffect(() => {
            ;(cov_f9p3uomm9().f[1]++,
              cov_f9p3uomm9().s[8]++,
              open
                ? (cov_f9p3uomm9().b[0][0]++,
                  cov_f9p3uomm9().s[9]++,
                  fetchTemplatesAndCategories())
                : cov_f9p3uomm9().b[0][1]++)
          }, [open, selectedCategory, sortBy, searchQuery]),
          cov_f9p3uomm9().s[10]++)
        const fetchTemplatesAndCategories = async () => {
          ;(cov_f9p3uomm9().f[2]++,
            cov_f9p3uomm9().s[11]++,
            setIsLoading(!0),
            cov_f9p3uomm9().s[12]++)
          try {
            const categoriesResponse =
              (cov_f9p3uomm9().s[13]++,
              await fetch('/api/templates/categories'))
            if ((cov_f9p3uomm9().s[14]++, categoriesResponse.ok)) {
              cov_f9p3uomm9().b[1][0]++
              const categoriesData =
                (cov_f9p3uomm9().s[15]++, await categoriesResponse.json())
              ;(cov_f9p3uomm9().s[16]++,
                setCategories(
                  (cov_f9p3uomm9().b[2][0]++,
                  categoriesData.data || (cov_f9p3uomm9().b[2][1]++, []))
                ))
            } else cov_f9p3uomm9().b[1][1]++
            const params = (cov_f9p3uomm9().s[17]++, new URLSearchParams())
            ;(cov_f9p3uomm9().s[18]++,
              'all' !== selectedCategory
                ? (cov_f9p3uomm9().b[3][0]++,
                  cov_f9p3uomm9().s[19]++,
                  params.set('category', selectedCategory))
                : cov_f9p3uomm9().b[3][1]++,
              cov_f9p3uomm9().s[20]++,
              searchQuery
                ? (cov_f9p3uomm9().b[4][0]++,
                  cov_f9p3uomm9().s[21]++,
                  params.set('search', searchQuery))
                : cov_f9p3uomm9().b[4][1]++,
              cov_f9p3uomm9().s[22]++,
              params.set('sort', sortBy),
              cov_f9p3uomm9().s[23]++,
              params.set('limit', '50'))
            const templatesResponse =
              (cov_f9p3uomm9().s[24]++, await fetch(`/api/templates?${params}`))
            if ((cov_f9p3uomm9().s[25]++, templatesResponse.ok)) {
              cov_f9p3uomm9().b[5][0]++
              const templatesData =
                (cov_f9p3uomm9().s[26]++, await templatesResponse.json())
              ;(cov_f9p3uomm9().s[27]++,
                setTemplates(
                  (cov_f9p3uomm9().b[6][0]++,
                  templatesData.data || (cov_f9p3uomm9().b[6][1]++, []))
                ))
            } else cov_f9p3uomm9().b[5][1]++
          } catch (error) {
            ;(cov_f9p3uomm9().s[28]++,
              console.error('Error fetching templates:', error))
          } finally {
            ;(cov_f9p3uomm9().s[29]++, setIsLoading(!1))
          }
        }
        cov_f9p3uomm9().s[30]++
        const handleTemplateSelect = (template) => {
          ;(cov_f9p3uomm9().f[3]++,
            cov_f9p3uomm9().s[31]++,
            setSelectedTemplate(template),
            cov_f9p3uomm9().s[32]++,
            onTemplateSelect(template),
            cov_f9p3uomm9().s[33]++,
            onOpenChange(!1))
        }
        cov_f9p3uomm9().s[34]++
        const filteredTemplates =
            (cov_f9p3uomm9().s[37]++,
            react.useMemo(() => {
              cov_f9p3uomm9().f[5]++
              let filtered = (cov_f9p3uomm9().s[38]++, templates)
              if ((cov_f9p3uomm9().s[39]++, searchQuery)) {
                cov_f9p3uomm9().b[9][0]++
                const query =
                  (cov_f9p3uomm9().s[40]++, searchQuery.toLowerCase())
                ;(cov_f9p3uomm9().s[41]++,
                  (filtered = filtered.filter((template) => {
                    var _template_tags
                    return (
                      cov_f9p3uomm9().f[6]++,
                      cov_f9p3uomm9().s[42]++,
                      cov_f9p3uomm9().b[10][0]++,
                      template.name.toLowerCase().includes(query) ||
                        (cov_f9p3uomm9().b[10][1]++,
                        template.description.toLowerCase().includes(query)) ||
                        (cov_f9p3uomm9().b[10][2]++,
                        cov_f9p3uomm9().b[12][0]++,
                        null === (_template_tags = template.tags) ||
                        (cov_f9p3uomm9().b[12][1]++, void 0 === _template_tags)
                          ? void cov_f9p3uomm9().b[11][0]++
                          : (cov_f9p3uomm9().b[11][1]++,
                            _template_tags.some(
                              (tag) => (
                                cov_f9p3uomm9().f[7]++,
                                cov_f9p3uomm9().s[43]++,
                                tag.toLowerCase().includes(query)
                              )
                            )))
                    )
                  })))
              } else cov_f9p3uomm9().b[9][1]++
              return (cov_f9p3uomm9().s[44]++, filtered)
            }, [templates, searchQuery])),
          groupedTemplates =
            (cov_f9p3uomm9().s[45]++,
            react.useMemo(() => {
              cov_f9p3uomm9().f[8]++
              const groups = (cov_f9p3uomm9().s[46]++, {})
              return (
                cov_f9p3uomm9().s[47]++,
                filteredTemplates.forEach((template) => {
                  cov_f9p3uomm9().f[9]++
                  const category =
                    (cov_f9p3uomm9().s[48]++,
                    cov_f9p3uomm9().b[13][0]++,
                    template.categoryName ||
                      (cov_f9p3uomm9().b[13][1]++, template.category))
                  ;(cov_f9p3uomm9().s[49]++,
                    groups[category]
                      ? cov_f9p3uomm9().b[14][1]++
                      : (cov_f9p3uomm9().b[14][0]++,
                        cov_f9p3uomm9().s[50]++,
                        (groups[category] = [])),
                    cov_f9p3uomm9().s[51]++,
                    groups[category].push(template))
                }),
                cov_f9p3uomm9().s[52]++,
                groups
              )
            }, [filteredTemplates])),
          popularTemplates =
            (cov_f9p3uomm9().s[53]++,
            templates
              .filter(
                (t) => (
                  cov_f9p3uomm9().f[10]++,
                  cov_f9p3uomm9().s[54]++,
                  t.usageCount > 20
                )
              )
              .slice(0, 6)),
          recentTemplates = (cov_f9p3uomm9().s[55]++, templates.slice(0, 6))
        return (
          cov_f9p3uomm9().s[56]++,
          (0, jsx_runtime.jsx)(dialog.lG, {
            open,
            onOpenChange,
            children: (0, jsx_runtime.jsxs)(dialog.Cf, {
              className: (0, utils.cn)('max-w-6xl h-[80vh] p-0', className),
              children: [
                (0, jsx_runtime.jsxs)(dialog.c7, {
                  className: 'px-6 py-4 border-b',
                  children: [
                    (0, jsx_runtime.jsxs)(dialog.L3, {
                      className: 'flex items-center gap-2',
                      children: [
                        (0, jsx_runtime.jsx)(sparkles.A, {
                          className: 'h-5 w-5 text-primary',
                        }),
                        'Choose a Template',
                      ],
                    }),
                    (0, jsx_runtime.jsx)(dialog.rr, {
                      children:
                        'Get started quickly with professional templates or create a blank note',
                    }),
                  ],
                }),
                (0, jsx_runtime.jsxs)('div', {
                  className: 'flex h-full',
                  children: [
                    (0, jsx_runtime.jsx)('div', {
                      className: 'w-64 border-r bg-muted/30 p-4',
                      children: (0, jsx_runtime.jsxs)('div', {
                        className: 'space-y-4',
                        children: [
                          (0, jsx_runtime.jsx)('div', {
                            className: 'space-y-2',
                            children: (0, jsx_runtime.jsxs)(ui_button.$, {
                              onClick: () => {
                                ;(cov_f9p3uomm9().f[4]++,
                                  cov_f9p3uomm9().s[35]++,
                                  cov_f9p3uomm9().b[8][0]++,
                                  null === onCreateBlank ||
                                  (cov_f9p3uomm9().b[8][1]++,
                                  void 0 === onCreateBlank)
                                    ? cov_f9p3uomm9().b[7][0]++
                                    : (cov_f9p3uomm9().b[7][1]++,
                                      onCreateBlank()),
                                  cov_f9p3uomm9().s[36]++,
                                  onOpenChange(!1))
                              },
                              variant: 'outline',
                              className: 'w-full justify-start',
                              children: [
                                (0, jsx_runtime.jsx)(file_text.A, {
                                  className: 'mr-2 h-4 w-4',
                                }),
                                'Blank Note',
                              ],
                            }),
                          }),
                          (0, jsx_runtime.jsxs)('div', {
                            className: 'relative',
                            children: [
                              (0, jsx_runtime.jsx)(search.A, {
                                className:
                                  'absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground',
                              }),
                              (0, jsx_runtime.jsx)(input.p, {
                                placeholder: 'Search templates...',
                                value: searchQuery,
                                onChange: (e) => (
                                  cov_f9p3uomm9().f[11]++,
                                  cov_f9p3uomm9().s[57]++,
                                  setSearchQuery(e.target.value)
                                ),
                                className: 'pl-9',
                              }),
                              (cov_f9p3uomm9().b[15][0]++,
                              searchQuery &&
                                (cov_f9p3uomm9().b[15][1]++,
                                (0, jsx_runtime.jsx)(ui_button.$, {
                                  variant: 'ghost',
                                  size: 'sm',
                                  onClick: () => (
                                    cov_f9p3uomm9().f[12]++,
                                    cov_f9p3uomm9().s[58]++,
                                    setSearchQuery('')
                                  ),
                                  className:
                                    'absolute right-1 top-1/2 h-6 w-6 -translate-y-1/2 p-0',
                                  children: (0, jsx_runtime.jsx)(x.A, {
                                    className: 'h-3 w-3',
                                  }),
                                }))),
                            ],
                          }),
                          (0, jsx_runtime.jsx)('div', {
                            className: 'flex gap-2',
                            children: (0, jsx_runtime.jsxs)(dropdown_menu.rI, {
                              children: [
                                (0, jsx_runtime.jsx)(dropdown_menu.ty, {
                                  asChild: !0,
                                  children: (0, jsx_runtime.jsxs)(ui_button.$, {
                                    variant: 'outline',
                                    size: 'sm',
                                    className: 'flex-1',
                                    children: [
                                      (0, jsx_runtime.jsx)(filter.A, {
                                        className: 'mr-2 h-3 w-3',
                                      }),
                                      'Sort',
                                    ],
                                  }),
                                }),
                                (0, jsx_runtime.jsxs)(dropdown_menu.SQ, {
                                  children: [
                                    (0, jsx_runtime.jsx)(dropdown_menu._2, {
                                      onClick: () => (
                                        cov_f9p3uomm9().f[13]++,
                                        cov_f9p3uomm9().s[59]++,
                                        setSortBy('popular')
                                      ),
                                      children: 'Most Popular',
                                    }),
                                    (0, jsx_runtime.jsx)(dropdown_menu._2, {
                                      onClick: () => (
                                        cov_f9p3uomm9().f[14]++,
                                        cov_f9p3uomm9().s[60]++,
                                        setSortBy('recent')
                                      ),
                                      children: 'Most Recent',
                                    }),
                                    (0, jsx_runtime.jsx)(dropdown_menu._2, {
                                      onClick: () => (
                                        cov_f9p3uomm9().f[15]++,
                                        cov_f9p3uomm9().s[61]++,
                                        setSortBy('rating')
                                      ),
                                      children: 'Highest Rated',
                                    }),
                                    (0, jsx_runtime.jsx)(dropdown_menu._2, {
                                      onClick: () => (
                                        cov_f9p3uomm9().f[16]++,
                                        cov_f9p3uomm9().s[62]++,
                                        setSortBy('name')
                                      ),
                                      children: 'Name A-Z',
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, jsx_runtime.jsxs)('div', {
                            className: 'space-y-2',
                            children: [
                              (0, jsx_runtime.jsx)('h3', {
                                className:
                                  'text-sm font-medium text-muted-foreground uppercase tracking-wide',
                                children: 'Categories',
                              }),
                              (0, jsx_runtime.jsxs)('div', {
                                className: 'space-y-1',
                                children: [
                                  (0, jsx_runtime.jsxs)(ui_button.$, {
                                    variant:
                                      'all' === selectedCategory
                                        ? (cov_f9p3uomm9().b[16][0]++,
                                          'default')
                                        : (cov_f9p3uomm9().b[16][1]++, 'ghost'),
                                    size: 'sm',
                                    onClick: () => (
                                      cov_f9p3uomm9().f[17]++,
                                      cov_f9p3uomm9().s[63]++,
                                      setSelectedCategory('all')
                                    ),
                                    className: 'w-full justify-start',
                                    children: [
                                      'All Templates (',
                                      templates.length,
                                      ')',
                                    ],
                                  }),
                                  categories.map(
                                    (category) => (
                                      cov_f9p3uomm9().f[18]++,
                                      cov_f9p3uomm9().s[64]++,
                                      (0, jsx_runtime.jsxs)(
                                        ui_button.$,
                                        {
                                          variant:
                                            selectedCategory === category.id
                                              ? (cov_f9p3uomm9().b[17][0]++,
                                                'default')
                                              : (cov_f9p3uomm9().b[17][1]++,
                                                'ghost'),
                                          size: 'sm',
                                          onClick: () => (
                                            cov_f9p3uomm9().f[19]++,
                                            cov_f9p3uomm9().s[65]++,
                                            setSelectedCategory(category.id)
                                          ),
                                          className: 'w-full justify-start',
                                          children: [
                                            (0, jsx_runtime.jsx)('span', {
                                              className: 'mr-2',
                                              children: category.icon,
                                            }),
                                            category.name,
                                            ' (',
                                            category.templateCount,
                                            ')',
                                          ],
                                        },
                                        category.id
                                      )
                                    )
                                  ),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, jsx_runtime.jsx)('div', {
                      className: 'flex-1 overflow-hidden',
                      children: (0, jsx_runtime.jsxs)(tabs.tU, {
                        defaultValue: 'browse',
                        className: 'h-full flex flex-col',
                        children: [
                          (0, jsx_runtime.jsxs)(tabs.j7, {
                            className: 'grid w-full grid-cols-3 mx-6 mt-4',
                            children: [
                              (0, jsx_runtime.jsx)(tabs.Xi, {
                                value: 'browse',
                                children: 'Browse',
                              }),
                              (0, jsx_runtime.jsx)(tabs.Xi, {
                                value: 'popular',
                                children: 'Popular',
                              }),
                              (0, jsx_runtime.jsx)(tabs.Xi, {
                                value: 'recent',
                                children: 'Recent',
                              }),
                            ],
                          }),
                          (0, jsx_runtime.jsxs)('div', {
                            className: 'flex-1 overflow-hidden',
                            children: [
                              (0, jsx_runtime.jsx)(tabs.av, {
                                value: 'browse',
                                className: 'h-full mt-0',
                                children: (0, jsx_runtime.jsx)(scroll_area.F, {
                                  className: 'h-full px-6 py-4',
                                  children: isLoading
                                    ? (cov_f9p3uomm9().b[18][0]++,
                                      (0, jsx_runtime.jsx)('div', {
                                        className:
                                          'flex items-center justify-center h-32',
                                        children: (0, jsx_runtime.jsx)('div', {
                                          className:
                                            'text-sm text-muted-foreground',
                                          children: 'Loading templates...',
                                        }),
                                      }))
                                    : (cov_f9p3uomm9().b[18][1]++,
                                      Object.keys(groupedTemplates).length > 0
                                        ? (cov_f9p3uomm9().b[19][0]++,
                                          (0, jsx_runtime.jsx)('div', {
                                            className: 'space-y-8',
                                            children: Object.entries(
                                              groupedTemplates
                                            ).map(
                                              ([
                                                categoryName,
                                                categoryTemplates,
                                              ]) => {
                                                var _categories_find
                                                return (
                                                  cov_f9p3uomm9().f[20]++,
                                                  cov_f9p3uomm9().s[66]++,
                                                  (0, jsx_runtime.jsxs)(
                                                    'div',
                                                    {
                                                      children: [
                                                        (0, jsx_runtime.jsxs)(
                                                          'h3',
                                                          {
                                                            className:
                                                              'text-lg font-semibold mb-4 flex items-center gap-2',
                                                            children: [
                                                              (cov_f9p3uomm9()
                                                                .b[21][0]++,
                                                              null ===
                                                                (_categories_find =
                                                                  categories.find(
                                                                    (c) => (
                                                                      cov_f9p3uomm9()
                                                                        .f[21]++,
                                                                      cov_f9p3uomm9()
                                                                        .s[67]++,
                                                                      c.name ===
                                                                        categoryName
                                                                    )
                                                                  )) ||
                                                              (cov_f9p3uomm9()
                                                                .b[21][1]++,
                                                              void 0 ===
                                                                _categories_find)
                                                                ? void cov_f9p3uomm9()
                                                                    .b[20][0]++
                                                                : (cov_f9p3uomm9()
                                                                    .b[20][1]++,
                                                                  _categories_find.icon)),
                                                              categoryName,
                                                              (0,
                                                              jsx_runtime.jsx)(
                                                                badge.E,
                                                                {
                                                                  variant:
                                                                    'secondary',
                                                                  className:
                                                                    'ml-2',
                                                                  children:
                                                                    categoryTemplates.length,
                                                                }
                                                              ),
                                                            ],
                                                          }
                                                        ),
                                                        (0, jsx_runtime.jsx)(
                                                          'div',
                                                          {
                                                            className:
                                                              'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4',
                                                            children:
                                                              categoryTemplates.map(
                                                                (template) => (
                                                                  cov_f9p3uomm9()
                                                                    .f[22]++,
                                                                  cov_f9p3uomm9()
                                                                    .s[68]++,
                                                                  (0,
                                                                  jsx_runtime.jsx)(
                                                                    TemplateCard,
                                                                    {
                                                                      template,
                                                                      onClick:
                                                                        () => (
                                                                          cov_f9p3uomm9()
                                                                            .f[23]++,
                                                                          cov_f9p3uomm9()
                                                                            .s[69]++,
                                                                          handleTemplateSelect(
                                                                            template
                                                                          )
                                                                        ),
                                                                    },
                                                                    template.id
                                                                  )
                                                                )
                                                              ),
                                                          }
                                                        ),
                                                      ],
                                                    },
                                                    categoryName
                                                  )
                                                )
                                              }
                                            ),
                                          }))
                                        : (cov_f9p3uomm9().b[19][1]++,
                                          (0, jsx_runtime.jsxs)('div', {
                                            className:
                                              'flex flex-col items-center justify-center h-32 text-center',
                                            children: [
                                              (0, jsx_runtime.jsx)(search.A, {
                                                className:
                                                  'h-12 w-12 text-muted-foreground mb-4',
                                              }),
                                              (0, jsx_runtime.jsx)('h3', {
                                                className:
                                                  'text-lg font-medium mb-2',
                                                children: 'No templates found',
                                              }),
                                              (0, jsx_runtime.jsx)('p', {
                                                className:
                                                  'text-sm text-muted-foreground',
                                                children:
                                                  'Try adjusting your search or category filter',
                                              }),
                                            ],
                                          }))),
                                }),
                              }),
                              (0, jsx_runtime.jsx)(tabs.av, {
                                value: 'popular',
                                className: 'h-full mt-0',
                                children: (0, jsx_runtime.jsx)(scroll_area.F, {
                                  className: 'h-full px-6 py-4',
                                  children: (0, jsx_runtime.jsxs)('div', {
                                    className: 'space-y-4',
                                    children: [
                                      (0, jsx_runtime.jsxs)('div', {
                                        className:
                                          'flex items-center gap-2 mb-6',
                                        children: [
                                          (0, jsx_runtime.jsx)(star.A, {
                                            className:
                                              'h-5 w-5 text-yellow-500',
                                          }),
                                          (0, jsx_runtime.jsx)('h3', {
                                            className: 'text-lg font-semibold',
                                            children: 'Most Popular Templates',
                                          }),
                                        ],
                                      }),
                                      (0, jsx_runtime.jsx)('div', {
                                        className:
                                          'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4',
                                        children: popularTemplates.map(
                                          (template) => (
                                            cov_f9p3uomm9().f[24]++,
                                            cov_f9p3uomm9().s[70]++,
                                            (0, jsx_runtime.jsx)(
                                              TemplateCard,
                                              {
                                                template,
                                                onClick: () => (
                                                  cov_f9p3uomm9().f[25]++,
                                                  cov_f9p3uomm9().s[71]++,
                                                  handleTemplateSelect(template)
                                                ),
                                                showStats: !0,
                                              },
                                              template.id
                                            )
                                          )
                                        ),
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                              (0, jsx_runtime.jsx)(tabs.av, {
                                value: 'recent',
                                className: 'h-full mt-0',
                                children: (0, jsx_runtime.jsx)(scroll_area.F, {
                                  className: 'h-full px-6 py-4',
                                  children: (0, jsx_runtime.jsxs)('div', {
                                    className: 'space-y-4',
                                    children: [
                                      (0, jsx_runtime.jsxs)('div', {
                                        className:
                                          'flex items-center gap-2 mb-6',
                                        children: [
                                          (0, jsx_runtime.jsx)(clock.A, {
                                            className: 'h-5 w-5 text-blue-500',
                                          }),
                                          (0, jsx_runtime.jsx)('h3', {
                                            className: 'text-lg font-semibold',
                                            children: 'Recently Added',
                                          }),
                                        ],
                                      }),
                                      (0, jsx_runtime.jsx)('div', {
                                        className:
                                          'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4',
                                        children: recentTemplates.map(
                                          (template) => (
                                            cov_f9p3uomm9().f[26]++,
                                            cov_f9p3uomm9().s[72]++,
                                            (0, jsx_runtime.jsx)(
                                              TemplateCard,
                                              {
                                                template,
                                                onClick: () => (
                                                  cov_f9p3uomm9().f[27]++,
                                                  cov_f9p3uomm9().s[73]++,
                                                  handleTemplateSelect(template)
                                                ),
                                              },
                                              template.id
                                            )
                                          )
                                        ),
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          })
        )
      }
      function TemplateCard({
        template,
        onClick,
        showStats = (cov_f9p3uomm9().b[22][0]++, !1),
      }) {
        return (
          cov_f9p3uomm9().f[28]++,
          cov_f9p3uomm9().s[74]++,
          (0, jsx_runtime.jsxs)('div', {
            onClick,
            className:
              'group relative p-4 rounded-lg border border-border bg-card hover:bg-accent/50 cursor-pointer transition-all duration-200 hover:shadow-md',
            children: [
              (0, jsx_runtime.jsx)('div', {
                className:
                  'aspect-video mb-3 rounded-md bg-muted/50 border flex items-center justify-center overflow-hidden',
                children: template.thumbnail
                  ? (cov_f9p3uomm9().b[23][0]++,
                    (0, jsx_runtime.jsx)(next_image.A, {
                      src: template.thumbnail,
                      alt: template.name,
                      fill: !0,
                      className: 'object-cover',
                    }))
                  : (cov_f9p3uomm9().b[23][1]++,
                    (0, jsx_runtime.jsxs)('div', {
                      className:
                        'flex flex-col items-center gap-2 text-muted-foreground',
                      children: [
                        (0, jsx_runtime.jsx)(file_text.A, {
                          className: 'h-8 w-8',
                        }),
                        (0, jsx_runtime.jsx)('span', {
                          className: 'text-xs font-medium',
                          children: template.categoryIcon,
                        }),
                      ],
                    })),
              }),
              (0, jsx_runtime.jsxs)('div', {
                className: 'space-y-2',
                children: [
                  (0, jsx_runtime.jsxs)('div', {
                    className: 'flex items-start justify-between',
                    children: [
                      (0, jsx_runtime.jsx)('h4', {
                        className:
                          'font-medium text-sm leading-5 group-hover:text-primary transition-colors',
                        children: template.name,
                      }),
                      (0, jsx_runtime.jsx)(chevron_right.A, {
                        className:
                          'h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100',
                      }),
                    ],
                  }),
                  (0, jsx_runtime.jsx)('p', {
                    className:
                      'text-xs text-muted-foreground line-clamp-2 leading-relaxed',
                    children: template.description,
                  }),
                  (0, jsx_runtime.jsxs)('div', {
                    className: 'flex items-center justify-between pt-2',
                    children: [
                      (0, jsx_runtime.jsxs)('div', {
                        className: 'flex items-center gap-2',
                        children: [
                          (cov_f9p3uomm9().b[24][0]++,
                          template.isSystem &&
                            (cov_f9p3uomm9().b[24][1]++,
                            (0, jsx_runtime.jsx)(badge.E, {
                              variant: 'secondary',
                              className: 'text-xs',
                              children: 'Built-in',
                            }))),
                          (cov_f9p3uomm9().b[25][0]++,
                          template.variableCount > 0 &&
                            (cov_f9p3uomm9().b[25][1]++,
                            (0, jsx_runtime.jsxs)(badge.E, {
                              variant: 'outline',
                              className: 'text-xs',
                              children: [template.variableCount, ' fields'],
                            }))),
                        ],
                      }),
                      (cov_f9p3uomm9().b[26][0]++,
                      showStats &&
                        (cov_f9p3uomm9().b[26][1]++,
                        (0, jsx_runtime.jsxs)('div', {
                          className:
                            'flex items-center gap-2 text-xs text-muted-foreground',
                          children: [
                            (cov_f9p3uomm9().b[27][0]++,
                            template.rating > 0 &&
                              (cov_f9p3uomm9().b[27][1]++,
                              (0, jsx_runtime.jsxs)('div', {
                                className: 'flex items-center gap-1',
                                children: [
                                  (0, jsx_runtime.jsx)(star.A, {
                                    className:
                                      'h-3 w-3 fill-yellow-400 text-yellow-400',
                                  }),
                                  (0, jsx_runtime.jsx)('span', {
                                    children: template.rating.toFixed(1),
                                  }),
                                ],
                              }))),
                            (cov_f9p3uomm9().b[28][0]++,
                            template.usageCount > 0 &&
                              (cov_f9p3uomm9().b[28][1]++,
                              (0, jsx_runtime.jsxs)('span', {
                                children: [template.usageCount, ' uses'],
                              }))),
                          ],
                        }))),
                    ],
                  }),
                ],
              }),
            ],
          })
        )
      }
      ;(cov_f9p3uomm9(),
        cov_f9p3uomm9().s[75]++,
        (TemplatePicker.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'TemplatePicker',
          props: {
            open: {
              required: !0,
              tsType: { name: 'boolean' },
              description: '',
            },
            onOpenChange: {
              required: !0,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '(open: boolean) => void',
                signature: {
                  arguments: [{ type: { name: 'boolean' }, name: 'open' }],
                  return: { name: 'void' },
                },
              },
              description: '',
            },
            onTemplateSelect: {
              required: !0,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '(template: Template) => void',
                signature: {
                  arguments: [{ type: { name: 'Template' }, name: 'template' }],
                  return: { name: 'void' },
                },
              },
              description: '',
            },
            onCreateBlank: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
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
      var dist = __webpack_require__(
          '../../node_modules/.pnpm/@storybook+test@8.6.14_storybook@9.0.18_@testing-library+dom@10.4.0_prettier@3.6.2_/node_modules/@storybook/test/dist/index.mjs'
        ),
        template_picker_stories_console = __webpack_require__(
          '../../node_modules/.pnpm/console-browserify@1.2.0/node_modules/console-browserify/index.js'
        )
      const mockCategories = [
          {
            id: 'personal',
            name: 'Personal',
            icon: '👤',
            templateCount: 8,
            displayOrder: 1,
            isSystem: !1,
          },
          {
            id: 'work',
            name: 'Work',
            icon: '💼',
            templateCount: 12,
            displayOrder: 2,
            isSystem: !1,
          },
          {
            id: 'education',
            name: 'Education',
            icon: '📚',
            templateCount: 6,
            displayOrder: 3,
            isSystem: !1,
          },
          {
            id: 'creative',
            name: 'Creative',
            icon: '🎨',
            templateCount: 4,
            displayOrder: 4,
            isSystem: !1,
          },
        ],
        mockTemplates = [
          {
            id: '1',
            name: 'Daily Journal',
            description: 'A simple template for daily reflection',
            category: 'personal',
            content: '# Daily Journal\n\n## Today I...\n\n## Reflection\n\n',
            isPublic: !0,
            isSystem: !1,
            createdAt: '2024-01-01',
            updatedAt: '2024-01-01',
            usageCount: 150,
            rating: 4.5,
            ratingCount: 32,
            variableCount: 0,
          },
        ],
        template_picker_stories = {
          title: 'UI/Templates/TemplatePicker',
          component: TemplatePicker,
          parameters: {
            layout: 'centered',
            msw: {
              handlers: [
                {
                  url: '/api/templates/categories',
                  method: 'GET',
                  response: { data: mockCategories },
                },
                {
                  url: '/api/templates',
                  method: 'GET',
                  response: { data: mockTemplates },
                },
              ],
            },
          },
          tags: ['autodocs'],
          argTypes: {
            open: {
              control: 'boolean',
              description: 'Whether the picker is open',
            },
            onOpenChange: {
              action: 'onOpenChange',
              description: 'Callback when open state changes',
            },
            onTemplateSelect: {
              action: 'onTemplateSelect',
              description: 'Callback when template is selected',
            },
            onCreateBlank: {
              action: 'onCreateBlank',
              description: 'Callback when blank note is selected',
            },
          },
          decorators: [
            (Story) =>
              (0, jsx_runtime.jsx)('div', {
                className: 'min-h-[700px] flex items-center justify-center',
                children: (0, jsx_runtime.jsx)(Story, {}),
              }),
          ],
        },
        TemplatePickerDemo = ({ defaultOpen = !1 }) => {
          const [open, setOpen] = (0, react.useState)(defaultOpen),
            [selectedTemplate, setSelectedTemplate] = (0, react.useState)(null)
          return (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
              (0, jsx_runtime.jsxs)('div', {
                className: 'space-y-4',
                children: [
                  (0, jsx_runtime.jsx)(ui_button.$, {
                    onClick: () => setOpen(!0),
                    children: 'Choose Template',
                  }),
                  selectedTemplate &&
                    (0, jsx_runtime.jsxs)('div', {
                      className: 'p-4 border rounded-lg',
                      children: [
                        (0, jsx_runtime.jsx)('h3', {
                          className: 'font-semibold mb-2',
                          children: 'Selected Template:',
                        }),
                        (0, jsx_runtime.jsxs)('p', {
                          className: 'text-sm text-muted-foreground',
                          children: [
                            selectedTemplate.name,
                            ' - ',
                            selectedTemplate.description,
                          ],
                        }),
                      ],
                    }),
                ],
              }),
              (0, jsx_runtime.jsx)(TemplatePicker, {
                open,
                onOpenChange: setOpen,
                onTemplateSelect: (template) => {
                  ;(setSelectedTemplate(template),
                    template_picker_stories_console.info(
                      'Template selected:',
                      template
                    ))
                },
                onCreateBlank: () =>
                  template_picker_stories_console.info('Create blank note'),
              }),
            ],
          })
        },
        Default = {
          args: {
            open: !1,
            onOpenChange: () => {},
            onTemplateSelect: () => {},
          },
          render: () => (0, jsx_runtime.jsx)(TemplatePickerDemo, {}),
        },
        OpenByDefault = {
          args: {
            open: !1,
            onOpenChange: () => {},
            onTemplateSelect: () => {},
          },
          render: () =>
            (0, jsx_runtime.jsx)(TemplatePickerDemo, { defaultOpen: !0 }),
        },
        SearchTemplates = {
          args: {
            open: !1,
            onOpenChange: () => {},
            onTemplateSelect: () => {},
          },
          render: () =>
            (0, jsx_runtime.jsx)(TemplatePickerDemo, { defaultOpen: !0 }),
          play: async ({ canvasElement }) => {
            const canvas = (0, dist.ux)(canvasElement)
            await (0, dist.fm)(() => {
              ;(0, dist.E3)(
                canvas.getByText('Choose a Template')
              ).toBeInTheDocument()
            })
            const searchInput = canvas.getByPlaceholderText(
              'Search templates...'
            )
            ;(await dist.Q4.type(searchInput, 'meeting'),
              await (0, dist.fm)(() => {
                ;((0, dist.E3)(
                  canvas.getByText('Meeting Notes')
                ).toBeInTheDocument(),
                  (0, dist.E3)(
                    canvas.queryByText('Daily Journal')
                  ).not.toBeInTheDocument())
              }))
            const clearButton = canvas.getByRole('button', { name: /×/ })
            ;(await dist.Q4.click(clearButton),
              await (0, dist.fm)(() => {
                ;(0, dist.E3)(
                  canvas.getByText('Daily Journal')
                ).toBeInTheDocument()
              }))
          },
        },
        CategoryFilter = {
          args: {
            open: !1,
            onOpenChange: () => {},
            onTemplateSelect: () => {},
          },
          render: () =>
            (0, jsx_runtime.jsx)(TemplatePickerDemo, { defaultOpen: !0 }),
          play: async ({ canvasElement }) => {
            const canvas = (0, dist.ux)(canvasElement)
            await (0, dist.fm)(() => {
              ;(0, dist.E3)(
                canvas.getByText('Choose a Template')
              ).toBeInTheDocument()
            })
            const workCategory = canvas.getByRole('button', { name: /💼 Work/ })
            ;(await dist.Q4.click(workCategory),
              await (0, dist.fm)(() => {
                ;((0, dist.E3)(
                  canvas.getByText('Meeting Notes')
                ).toBeInTheDocument(),
                  (0, dist.E3)(
                    canvas.getByText('Project Proposal')
                  ).toBeInTheDocument(),
                  (0, dist.E3)(
                    canvas.queryByText('Daily Journal')
                  ).not.toBeInTheDocument())
              }))
            const allTemplates = canvas.getByRole('button', {
              name: /All Templates/,
            })
            ;(await dist.Q4.click(allTemplates),
              await (0, dist.fm)(() => {
                ;(0, dist.E3)(
                  canvas.getByText('Daily Journal')
                ).toBeInTheDocument()
              }))
          },
        },
        TabNavigation = {
          args: {
            open: !1,
            onOpenChange: () => {},
            onTemplateSelect: () => {},
          },
          render: () =>
            (0, jsx_runtime.jsx)(TemplatePickerDemo, { defaultOpen: !0 }),
          play: async ({ canvasElement }) => {
            const canvas = (0, dist.ux)(canvasElement)
            await (0, dist.fm)(() => {
              ;(0, dist.E3)(
                canvas.getByText('Choose a Template')
              ).toBeInTheDocument()
            })
            const popularTab = canvas.getByRole('tab', { name: 'Popular' })
            ;(await dist.Q4.click(popularTab),
              await (0, dist.E3)(
                canvas.getByText('Most Popular Templates')
              ).toBeInTheDocument())
            const recentTab = canvas.getByRole('tab', { name: 'Recent' })
            ;(await dist.Q4.click(recentTab),
              await (0, dist.E3)(
                canvas.getByText('Recently Added')
              ).toBeInTheDocument())
            const browseTab = canvas.getByRole('tab', { name: 'Browse' })
            ;(await dist.Q4.click(browseTab),
              await (0, dist.E3)(
                canvas.getByText('Personal')
              ).toBeInTheDocument())
          },
        },
        SortOptions = {
          args: {
            open: !1,
            onOpenChange: () => {},
            onTemplateSelect: () => {},
          },
          render: () =>
            (0, jsx_runtime.jsx)(TemplatePickerDemo, { defaultOpen: !0 }),
          play: async ({ canvasElement }) => {
            const canvas = (0, dist.ux)(canvasElement)
            await (0, dist.fm)(() => {
              ;(0, dist.E3)(
                canvas.getByText('Choose a Template')
              ).toBeInTheDocument()
            })
            const sortButton = canvas.getByRole('button', { name: /Sort/ })
            await dist.Q4.click(sortButton)
            const ratingOption = canvas.getByText('Highest Rated')
            await dist.Q4.click(ratingOption)
          },
        },
        SelectTemplate = {
          args: {
            open: !1,
            onOpenChange: () => {},
            onTemplateSelect: () => {},
          },
          render: () =>
            (0, jsx_runtime.jsx)(TemplatePickerDemo, { defaultOpen: !0 }),
          play: async ({ canvasElement }) => {
            const canvas = (0, dist.ux)(canvasElement)
            await (0, dist.fm)(() => {
              ;(0, dist.E3)(
                canvas.getByText('Choose a Template')
              ).toBeInTheDocument()
            })
            const templateCard = canvas
              .getByText('Daily Journal')
              .closest('[class*="cursor-pointer"]')
            ;(templateCard && (await dist.Q4.click(templateCard)),
              await (0, dist.fm)(() => {
                ;((0, dist.E3)(
                  canvas.queryByText('Choose a Template')
                ).not.toBeInTheDocument(),
                  (0, dist.E3)(
                    canvas.getByText('Selected Template:')
                  ).toBeInTheDocument(),
                  (0, dist.E3)(
                    canvas.getByText(/Daily Journal/)
                  ).toBeInTheDocument())
              }))
          },
        },
        CreateBlank = {
          args: {
            open: !1,
            onOpenChange: () => {},
            onTemplateSelect: () => {},
          },
          render: () =>
            (0, jsx_runtime.jsx)(TemplatePickerDemo, { defaultOpen: !0 }),
          play: async ({ canvasElement }) => {
            const canvas = (0, dist.ux)(canvasElement)
            await (0, dist.fm)(() => {
              ;(0, dist.E3)(
                canvas.getByText('Choose a Template')
              ).toBeInTheDocument()
            })
            const blankButton = canvas.getByRole('button', {
              name: /Blank Note/,
            })
            ;(await dist.Q4.click(blankButton),
              await (0, dist.fm)(() => {
                ;(0, dist.E3)(
                  canvas.queryByText('Choose a Template')
                ).not.toBeInTheDocument()
              }))
          },
        },
        TemplateWithStats = {
          args: {
            open: !1,
            onOpenChange: () => {},
            onTemplateSelect: () => {},
          },
          render: () =>
            (0, jsx_runtime.jsx)(TemplatePickerDemo, { defaultOpen: !0 }),
          play: async ({ canvasElement }) => {
            const canvas = (0, dist.ux)(canvasElement)
            await (0, dist.fm)(() => {
              ;(0, dist.E3)(
                canvas.getByText('Choose a Template')
              ).toBeInTheDocument()
            })
            const popularTab = canvas.getByRole('tab', { name: 'Popular' })
            ;(await dist.Q4.click(popularTab),
              await (0, dist.E3)(canvas.getByText(/4.9/)).toBeInTheDocument(),
              await (0, dist.E3)(
                canvas.getByText(/342 uses/)
              ).toBeInTheDocument())
          },
        },
        EmptyState = {
          args: {
            open: !1,
            onOpenChange: () => {},
            onTemplateSelect: () => {},
          },
          render: () =>
            (0, jsx_runtime.jsx)(TemplatePickerDemo, { defaultOpen: !0 }),
          play: async ({ canvasElement }) => {
            const canvas = (0, dist.ux)(canvasElement)
            await (0, dist.fm)(() => {
              ;(0, dist.E3)(
                canvas.getByText('Choose a Template')
              ).toBeInTheDocument()
            })
            const searchInput = canvas.getByPlaceholderText(
              'Search templates...'
            )
            ;(await dist.Q4.type(searchInput, 'xyzabc123'),
              await (0, dist.fm)(() => {
                ;((0, dist.E3)(
                  canvas.getByText('No templates found')
                ).toBeInTheDocument(),
                  (0, dist.E3)(
                    canvas.getByText(
                      'Try adjusting your search or category filter'
                    )
                  ).toBeInTheDocument())
              }))
          },
        },
        LoadingState = {
          parameters: {
            msw: {
              handlers: [
                {
                  url: '/api/templates/categories',
                  method: 'GET',
                  delay: 2e3,
                  response: { data: mockCategories },
                },
                {
                  url: '/api/templates',
                  method: 'GET',
                  delay: 2e3,
                  response: { data: mockTemplates },
                },
              ],
            },
          },
          args: {
            open: !1,
            onOpenChange: () => {},
            onTemplateSelect: () => {},
          },
          render: () =>
            (0, jsx_runtime.jsx)(TemplatePickerDemo, { defaultOpen: !0 }),
        },
        MobileResponsive = {
          parameters: { viewport: { defaultViewport: 'mobile1' } },
          args: {
            open: !1,
            onOpenChange: () => {},
            onTemplateSelect: () => {},
          },
          render: () =>
            (0, jsx_runtime.jsx)(TemplatePickerDemo, { defaultOpen: !0 }),
        },
        WithManyTemplates = {
          parameters: {
            msw: {
              handlers: [
                {
                  url: '/api/templates',
                  method: 'GET',
                  response: {
                    data: [
                      ...mockTemplates,
                      ...Array.from({ length: 20 }, (_, i) => ({
                        id: `extra-${i}`,
                        name: `Template ${i + 9}`,
                        description: `Description for template ${i + 9}`,
                        category: mockCategories[i % 4].id,
                        categoryName: mockCategories[i % 4].name,
                        categoryIcon: mockCategories[i % 4].icon,
                        content: '# Template Content',
                        variableCount: i % 3,
                        rating: 3.5 + (i % 15) / 10,
                        usageCount: 10 * i,
                        isSystem: i % 2 == 0,
                        variables: [],
                        tags: ['template', 'example'],
                      })),
                    ],
                  },
                },
              ],
            },
          },
          args: {
            open: !1,
            onOpenChange: () => {},
            onTemplateSelect: () => {},
          },
          render: () =>
            (0, jsx_runtime.jsx)(TemplatePickerDemo, { defaultOpen: !0 }),
        },
        __namedExportsOrder = [
          'Default',
          'OpenByDefault',
          'SearchTemplates',
          'CategoryFilter',
          'TabNavigation',
          'SortOptions',
          'SelectTemplate',
          'CreateBlank',
          'TemplateWithStats',
          'EmptyState',
          'LoadingState',
          'MobileResponsive',
          'WithManyTemplates',
        ]
      ;((Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              '{\n  args: {\n    open: false,\n    onOpenChange: () => {},\n    onTemplateSelect: () => {}\n  },\n  render: () => <TemplatePickerDemo />\n}',
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (OpenByDefault.parameters = {
          ...OpenByDefault.parameters,
          docs: {
            ...OpenByDefault.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    open: false,\n    onOpenChange: () => {},\n    onTemplateSelect: () => {}\n  },\n  render: () => <TemplatePickerDemo defaultOpen={true} />\n}',
              ...OpenByDefault.parameters?.docs?.source,
            },
          },
        }),
        (SearchTemplates.parameters = {
          ...SearchTemplates.parameters,
          docs: {
            ...SearchTemplates.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    open: false,\n    onOpenChange: () => {},\n    onTemplateSelect: () => {}\n  },\n  render: () => <TemplatePickerDemo defaultOpen={true} />,\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Wait for dialog to load\n    await waitFor(() => {\n      expect(canvas.getByText('Choose a Template')).toBeInTheDocument();\n    });\n\n    // Search for \"meeting\"\n    const searchInput = canvas.getByPlaceholderText('Search templates...');\n    await userEvent.type(searchInput, 'meeting');\n\n    // Should filter templates\n    await waitFor(() => {\n      expect(canvas.getByText('Meeting Notes')).toBeInTheDocument();\n      expect(canvas.queryByText('Daily Journal')).not.toBeInTheDocument();\n    });\n\n    // Clear search\n    const clearButton = canvas.getByRole('button', {\n      name: /×/\n    });\n    await userEvent.click(clearButton);\n\n    // Should show all templates again\n    await waitFor(() => {\n      expect(canvas.getByText('Daily Journal')).toBeInTheDocument();\n    });\n  }\n}",
              ...SearchTemplates.parameters?.docs?.source,
            },
          },
        }),
        (CategoryFilter.parameters = {
          ...CategoryFilter.parameters,
          docs: {
            ...CategoryFilter.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    open: false,\n    onOpenChange: () => {},\n    onTemplateSelect: () => {}\n  },\n  render: () => <TemplatePickerDemo defaultOpen={true} />,\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Wait for dialog\n    await waitFor(() => {\n      expect(canvas.getByText('Choose a Template')).toBeInTheDocument();\n    });\n\n    // Click Work category\n    const workCategory = canvas.getByRole('button', {\n      name: /💼 Work/\n    });\n    await userEvent.click(workCategory);\n\n    // Should show only work templates\n    await waitFor(() => {\n      expect(canvas.getByText('Meeting Notes')).toBeInTheDocument();\n      expect(canvas.getByText('Project Proposal')).toBeInTheDocument();\n      expect(canvas.queryByText('Daily Journal')).not.toBeInTheDocument();\n    });\n\n    // Click All Templates\n    const allTemplates = canvas.getByRole('button', {\n      name: /All Templates/\n    });\n    await userEvent.click(allTemplates);\n\n    // Should show all templates\n    await waitFor(() => {\n      expect(canvas.getByText('Daily Journal')).toBeInTheDocument();\n    });\n  }\n}",
              ...CategoryFilter.parameters?.docs?.source,
            },
          },
        }),
        (TabNavigation.parameters = {
          ...TabNavigation.parameters,
          docs: {
            ...TabNavigation.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    open: false,\n    onOpenChange: () => {},\n    onTemplateSelect: () => {}\n  },\n  render: () => <TemplatePickerDemo defaultOpen={true} />,\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Wait for dialog\n    await waitFor(() => {\n      expect(canvas.getByText('Choose a Template')).toBeInTheDocument();\n    });\n\n    // Click Popular tab\n    const popularTab = canvas.getByRole('tab', {\n      name: 'Popular'\n    });\n    await userEvent.click(popularTab);\n\n    // Should show popular templates header\n    await expect(canvas.getByText('Most Popular Templates')).toBeInTheDocument();\n\n    // Click Recent tab\n    const recentTab = canvas.getByRole('tab', {\n      name: 'Recent'\n    });\n    await userEvent.click(recentTab);\n\n    // Should show recent templates header\n    await expect(canvas.getByText('Recently Added')).toBeInTheDocument();\n\n    // Click Browse tab\n    const browseTab = canvas.getByRole('tab', {\n      name: 'Browse'\n    });\n    await userEvent.click(browseTab);\n\n    // Should show category groups\n    await expect(canvas.getByText('Personal')).toBeInTheDocument();\n  }\n}",
              ...TabNavigation.parameters?.docs?.source,
            },
          },
        }),
        (SortOptions.parameters = {
          ...SortOptions.parameters,
          docs: {
            ...SortOptions.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    open: false,\n    onOpenChange: () => {},\n    onTemplateSelect: () => {}\n  },\n  render: () => <TemplatePickerDemo defaultOpen={true} />,\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Wait for dialog\n    await waitFor(() => {\n      expect(canvas.getByText('Choose a Template')).toBeInTheDocument();\n    });\n\n    // Open sort dropdown\n    const sortButton = canvas.getByRole('button', {\n      name: /Sort/\n    });\n    await userEvent.click(sortButton);\n\n    // Click highest rated\n    const ratingOption = canvas.getByText('Highest Rated');\n    await userEvent.click(ratingOption);\n\n    // Note: Actual sorting would be handled by the API\n  }\n}",
              ...SortOptions.parameters?.docs?.source,
            },
          },
        }),
        (SelectTemplate.parameters = {
          ...SelectTemplate.parameters,
          docs: {
            ...SelectTemplate.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    open: false,\n    onOpenChange: () => {},\n    onTemplateSelect: () => {}\n  },\n  render: () => <TemplatePickerDemo defaultOpen={true} />,\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Wait for dialog\n    await waitFor(() => {\n      expect(canvas.getByText('Choose a Template')).toBeInTheDocument();\n    });\n\n    // Click on a template card\n    const templateCard = canvas.getByText('Daily Journal').closest('[class*=\"cursor-pointer\"]');\n    if (templateCard) {\n      await userEvent.click(templateCard);\n    }\n\n    // Dialog should close and template should be selected\n    await waitFor(() => {\n      expect(canvas.queryByText('Choose a Template')).not.toBeInTheDocument();\n      expect(canvas.getByText('Selected Template:')).toBeInTheDocument();\n      expect(canvas.getByText(/Daily Journal/)).toBeInTheDocument();\n    });\n  }\n}",
              ...SelectTemplate.parameters?.docs?.source,
            },
          },
        }),
        (CreateBlank.parameters = {
          ...CreateBlank.parameters,
          docs: {
            ...CreateBlank.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    open: false,\n    onOpenChange: () => {},\n    onTemplateSelect: () => {}\n  },\n  render: () => <TemplatePickerDemo defaultOpen={true} />,\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Wait for dialog\n    await waitFor(() => {\n      expect(canvas.getByText('Choose a Template')).toBeInTheDocument();\n    });\n\n    // Click blank note button\n    const blankButton = canvas.getByRole('button', {\n      name: /Blank Note/\n    });\n    await userEvent.click(blankButton);\n\n    // Dialog should close\n    await waitFor(() => {\n      expect(canvas.queryByText('Choose a Template')).not.toBeInTheDocument();\n    });\n  }\n}",
              ...CreateBlank.parameters?.docs?.source,
            },
          },
        }),
        (TemplateWithStats.parameters = {
          ...TemplateWithStats.parameters,
          docs: {
            ...TemplateWithStats.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    open: false,\n    onOpenChange: () => {},\n    onTemplateSelect: () => {}\n  },\n  render: () => <TemplatePickerDemo defaultOpen={true} />,\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Wait for dialog\n    await waitFor(() => {\n      expect(canvas.getByText('Choose a Template')).toBeInTheDocument();\n    });\n\n    // Go to Popular tab to see stats\n    const popularTab = canvas.getByRole('tab', {\n      name: 'Popular'\n    });\n    await userEvent.click(popularTab);\n\n    // Should show template stats\n    await expect(canvas.getByText(/4.9/)).toBeInTheDocument(); // Rating\n    await expect(canvas.getByText(/342 uses/)).toBeInTheDocument(); // Usage count\n  }\n}",
              ...TemplateWithStats.parameters?.docs?.source,
            },
          },
        }),
        (EmptyState.parameters = {
          ...EmptyState.parameters,
          docs: {
            ...EmptyState.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    open: false,\n    onOpenChange: () => {},\n    onTemplateSelect: () => {}\n  },\n  render: () => <TemplatePickerDemo defaultOpen={true} />,\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Wait for dialog\n    await waitFor(() => {\n      expect(canvas.getByText('Choose a Template')).toBeInTheDocument();\n    });\n\n    // Search for something that doesn't exist\n    const searchInput = canvas.getByPlaceholderText('Search templates...');\n    await userEvent.type(searchInput, 'xyzabc123');\n\n    // Should show empty state\n    await waitFor(() => {\n      expect(canvas.getByText('No templates found')).toBeInTheDocument();\n      expect(canvas.getByText('Try adjusting your search or category filter')).toBeInTheDocument();\n    });\n  }\n}",
              ...EmptyState.parameters?.docs?.source,
            },
          },
        }),
        (LoadingState.parameters = {
          ...LoadingState.parameters,
          docs: {
            ...LoadingState.parameters?.docs,
            source: {
              originalSource:
                "{\n  parameters: {\n    msw: {\n      handlers: [{\n        url: '/api/templates/categories',\n        method: 'GET',\n        delay: 2000,\n        // Simulate loading\n        response: {\n          data: mockCategories\n        }\n      }, {\n        url: '/api/templates',\n        method: 'GET',\n        delay: 2000,\n        // Simulate loading\n        response: {\n          data: mockTemplates\n        }\n      }]\n    }\n  },\n  args: {\n    open: false,\n    onOpenChange: () => {},\n    onTemplateSelect: () => {}\n  },\n  render: () => <TemplatePickerDemo defaultOpen={true} />\n}",
              ...LoadingState.parameters?.docs?.source,
            },
          },
        }),
        (MobileResponsive.parameters = {
          ...MobileResponsive.parameters,
          docs: {
            ...MobileResponsive.parameters?.docs,
            source: {
              originalSource:
                "{\n  parameters: {\n    viewport: {\n      defaultViewport: 'mobile1'\n    }\n  },\n  args: {\n    open: false,\n    onOpenChange: () => {},\n    onTemplateSelect: () => {}\n  },\n  render: () => <TemplatePickerDemo defaultOpen={true} />\n}",
              ...MobileResponsive.parameters?.docs?.source,
            },
          },
        }),
        (WithManyTemplates.parameters = {
          ...WithManyTemplates.parameters,
          docs: {
            ...WithManyTemplates.parameters?.docs,
            source: {
              originalSource:
                "{\n  parameters: {\n    msw: {\n      handlers: [{\n        url: '/api/templates',\n        method: 'GET',\n        response: {\n          data: [...mockTemplates, ...Array.from({\n            length: 20\n          }, (_, i) => ({\n            id: `extra-${i}`,\n            name: `Template ${i + 9}`,\n            description: `Description for template ${i + 9}`,\n            category: mockCategories[i % 4].id,\n            categoryName: mockCategories[i % 4].name,\n            categoryIcon: mockCategories[i % 4].icon,\n            content: '# Template Content',\n            variableCount: i % 3,\n            rating: 3.5 + i % 15 / 10,\n            usageCount: i * 10,\n            isSystem: i % 2 === 0,\n            variables: [],\n            tags: ['template', 'example']\n          }))]\n        }\n      }]\n    }\n  },\n  args: {\n    open: false,\n    onOpenChange: () => {},\n    onTemplateSelect: () => {}\n  },\n  render: () => <TemplatePickerDemo defaultOpen={true} />\n}",
              ...WithManyTemplates.parameters?.docs?.source,
            },
          },
        }))
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
    './components/ui/scroll-area.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { F: () => ScrollArea })
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        _radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_3__ =
          (__webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
          ),
          __webpack_require__(
            '../../node_modules/.pnpm/@radix-ui+react-scroll-area@1.2.2_@types+react-dom@19.1.6_@types+react@19.1.8__@types+r_bdc66dfa9beb65f3056a81320e8a7f44/node_modules/@radix-ui/react-scroll-area/dist/index.mjs'
          )),
        _lib_utils__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__('./lib/utils.ts')
      function cov_npj9vkjwz() {
        var path =
            '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/scroll-area.tsx',
          global = new Function('return this')(),
          gcv = '__coverage__',
          coverage = global[gcv] || (global[gcv] = {})
        ;(coverage[path] &&
          '7d12877cfc7b2b3e02a7ec2cf0054cf3e1ce167a' === coverage[path].hash) ||
          (coverage[path] = {
            path: '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/scroll-area.tsx',
            statementMap: {
              0: {
                start: { line: 7, column: 4 },
                end: { line: 20, column: 7 },
              },
              1: {
                start: { line: 23, column: 4 },
                end: { line: 32, column: 7 },
              },
              2: {
                start: { line: 35, column: 0 },
                end: { line: 39, column: 2 },
              },
              3: {
                start: { line: 40, column: 0 },
                end: { line: 53, column: 2 },
              },
            },
            fnMap: {
              0: {
                name: 'ScrollArea',
                decl: {
                  start: { line: 6, column: 9 },
                  end: { line: 6, column: 19 },
                },
                loc: {
                  start: { line: 6, column: 55 },
                  end: { line: 21, column: 1 },
                },
                line: 6,
              },
              1: {
                name: 'ScrollBar',
                decl: {
                  start: { line: 22, column: 9 },
                  end: { line: 22, column: 18 },
                },
                loc: {
                  start: { line: 22, column: 70 },
                  end: { line: 33, column: 1 },
                },
                line: 22,
              },
            },
            branchMap: {
              0: {
                loc: {
                  start: { line: 22, column: 32 },
                  end: { line: 22, column: 56 },
                },
                type: 'default-arg',
                locations: [
                  {
                    start: { line: 22, column: 46 },
                    end: { line: 22, column: 56 },
                  },
                ],
                line: 22,
              },
              1: {
                loc: {
                  start: { line: 26, column: 76 },
                  end: { line: 26, column: 150 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 26, column: 76 },
                    end: { line: 26, column: 102 },
                  },
                  {
                    start: { line: 26, column: 106 },
                    end: { line: 26, column: 150 },
                  },
                ],
                line: 26,
              },
              2: {
                loc: {
                  start: { line: 26, column: 152 },
                  end: { line: 26, column: 230 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 26, column: 152 },
                    end: { line: 26, column: 180 },
                  },
                  {
                    start: { line: 26, column: 184 },
                    end: { line: 26, column: 230 },
                  },
                ],
                line: 26,
              },
            },
            s: { 0: 0, 1: 0, 2: 0, 3: 0 },
            f: { 0: 0, 1: 0 },
            b: { 0: [0], 1: [0, 0], 2: [0, 0] },
            inputSourceMap: {
              version: 3,
              sources: [
                '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/scroll-area.tsx',
              ],
              sourcesContent: [
                "'use client'\n\nimport * as React from 'react'\nimport * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'\n\nimport { cn } from '@/lib/utils'\n\nfunction ScrollArea({\n  className,\n  children,\n  ...props\n}: React.ComponentProps<typeof ScrollAreaPrimitive.Root>) {\n  return (\n    <ScrollAreaPrimitive.Root\n      data-slot='scroll-area'\n      className={cn('relative', className)}\n      {...props}\n    >\n      <ScrollAreaPrimitive.Viewport\n        data-slot='scroll-area-viewport'\n        className='focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1'\n      >\n        {children}\n      </ScrollAreaPrimitive.Viewport>\n      <ScrollBar />\n      <ScrollAreaPrimitive.Corner />\n    </ScrollAreaPrimitive.Root>\n  )\n}\n\nfunction ScrollBar({\n  className,\n  orientation = 'vertical',\n  ...props\n}: React.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>) {\n  return (\n    <ScrollAreaPrimitive.ScrollAreaScrollbar\n      data-slot='scroll-area-scrollbar'\n      orientation={orientation}\n      className={cn(\n        'flex touch-none p-px transition-colors select-none',\n        orientation === 'vertical' &&\n          'h-full w-2.5 border-l border-l-transparent',\n        orientation === 'horizontal' &&\n          'h-2.5 flex-col border-t border-t-transparent',\n        className\n      )}\n      {...props}\n    >\n      <ScrollAreaPrimitive.ScrollAreaThumb\n        data-slot='scroll-area-thumb'\n        className='bg-border relative flex-1 rounded-full'\n      />\n    </ScrollAreaPrimitive.ScrollAreaScrollbar>\n  )\n}\n\nexport { ScrollArea, ScrollBar }\n",
              ],
              names: [],
              mappings:
                'AAAA,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;AAEX,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAC7B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAEjE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAE/B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAClB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACT,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACR,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAC+C,CAAC,CAAC;IACxD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,cACL,MAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;QACtB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACtB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACnC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;0BAET,KAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;gBAC1B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBAC/B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;0BAE5J,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;0BAEX,KAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;0BACZ,KAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;;AAGnC;AAEA,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACjB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACT,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACxB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAC8D,CAAC,CAAC;IACvE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,cACL,KAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;QACrC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QAChC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACxB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACX,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACpD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAC1B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAC9C,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAC5B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAChD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QAET,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gCAET,KAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;YACjC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YAC5B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;;AAIzD;AAEA,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC',
            },
            _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
            hash: '7d12877cfc7b2b3e02a7ec2cf0054cf3e1ce167a',
          })
        var actualCoverage = coverage[path]
        return (
          (cov_npj9vkjwz = function () {
            return actualCoverage
          }),
          actualCoverage
        )
      }
      function ScrollArea({ className, children, ...props }) {
        return (
          cov_npj9vkjwz().f[0]++,
          cov_npj9vkjwz().s[0]++,
          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
            _radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_3__.bL,
            {
              'data-slot': 'scroll-area',
              className: (0, _lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(
                'relative',
                className
              ),
              ...props,
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_3__.LM,
                  {
                    'data-slot': 'scroll-area-viewport',
                    className:
                      'focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1',
                    children,
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  ScrollBar,
                  {}
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_3__.OK,
                  {}
                ),
              ],
            }
          )
        )
      }
      function ScrollBar({
        className,
        orientation = (cov_npj9vkjwz().b[0][0]++, 'vertical'),
        ...props
      }) {
        return (
          cov_npj9vkjwz().f[1]++,
          cov_npj9vkjwz().s[1]++,
          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_3__.VM,
            {
              'data-slot': 'scroll-area-scrollbar',
              orientation,
              className: (0, _lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(
                'flex touch-none p-px transition-colors select-none',
                (cov_npj9vkjwz().b[1][0]++,
                'vertical' === orientation &&
                  (cov_npj9vkjwz().b[1][1]++,
                  'h-full w-2.5 border-l border-l-transparent')),
                (cov_npj9vkjwz().b[2][0]++,
                'horizontal' === orientation &&
                  (cov_npj9vkjwz().b[2][1]++,
                  'h-2.5 flex-col border-t border-t-transparent')),
                className
              ),
              ...props,
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_3__.lr,
                {
                  'data-slot': 'scroll-area-thumb',
                  className: 'bg-border relative flex-1 rounded-full',
                }
              ),
            }
          )
        )
      }
      ;(cov_npj9vkjwz(),
        cov_npj9vkjwz().s[2]++,
        (ScrollArea.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'ScrollArea',
        }),
        cov_npj9vkjwz().s[3]++,
        (ScrollBar.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'ScrollBar',
          props: {
            orientation: {
              defaultValue: { value: "'vertical'", computed: !1 },
              required: !1,
            },
          },
        }))
    },
  },
])
