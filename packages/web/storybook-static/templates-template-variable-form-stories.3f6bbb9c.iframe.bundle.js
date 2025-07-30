'use strict'
;(self.webpackChunk_notable_web = self.webpackChunk_notable_web || []).push([
  [9691],
  {
    './components/templates/template-variable-form.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      ;(__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          BooleanField: () => BooleanField,
          CancelForm: () => CancelForm,
          ComplexForm: () => ComplexForm,
          Default: () => Default,
          FillSimpleForm: () => FillSimpleForm,
          LoadingState: () => LoadingState,
          MobileResponsive: () => MobileResponsive,
          MultiSelectInteraction: () => MultiSelectInteraction,
          NoTemplate: () => NoTemplate,
          NumberValidation: () => NumberValidation,
          OpenByDefault: () => OpenByDefault,
          ScrollableForm: () => ScrollableForm,
          SelectDropdown: () => SelectDropdown,
          TimeTracking: () => TimeTracking,
          ValidationErrors: () => ValidationErrors,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => template_variable_form_stories,
        }))
      var jsx_runtime = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        react = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
        ),
        file_text = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-text.js'
        ),
        loader_circle = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/loader-circle.js'
        ),
        save = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/save.js'
        ),
        calendar = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/calendar.js'
        ),
        clock = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/clock.js'
        ),
        hash = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/hash.js'
        ),
        user = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/user.js'
        ),
        utils = __webpack_require__('./lib/utils.ts'),
        input = __webpack_require__('./components/ui/input.tsx'),
        ui_textarea = __webpack_require__('./components/ui/textarea.tsx'),
        ui_button = __webpack_require__('./components/ui/button.tsx'),
        label = __webpack_require__('./components/ui/label.tsx'),
        ui_checkbox = __webpack_require__('./components/ui/checkbox.tsx'),
        ui_select = __webpack_require__('./components/ui/select.tsx'),
        dialog = __webpack_require__('./components/ui/dialog.tsx'),
        scroll_area = __webpack_require__('./components/ui/scroll-area.tsx'),
        badge = __webpack_require__('./components/ui/badge.tsx'),
        console = __webpack_require__(
          '../../node_modules/.pnpm/console-browserify@1.2.0/node_modules/console-browserify/index.js'
        )
      function cov_i4jludcll() {
        var path =
            '/Users/ryota.murakami/repository/Notable/packages/web/components/templates/template-variable-form.tsx',
          global = new Function('return this')(),
          gcv = '__coverage__',
          coverageData = {
            path: '/Users/ryota.murakami/repository/Notable/packages/web/components/templates/template-variable-form.tsx',
            statementMap: {
              0: {
                start: { line: 16, column: 30 },
                end: { line: 16, column: 48 },
              },
              1: {
                start: { line: 17, column: 38 },
                end: { line: 17, column: 56 },
              },
              2: {
                start: { line: 18, column: 44 },
                end: { line: 18, column: 65 },
              },
              3: {
                start: { line: 19, column: 32 },
                end: { line: 19, column: 50 },
              },
              4: {
                start: { line: 21, column: 4 },
                end: { line: 43, column: 7 },
              },
              5: {
                start: { line: 22, column: 8 },
                end: { line: 39, column: 9 },
              },
              6: {
                start: { line: 25, column: 12 },
                end: { line: 25, column: 36 },
              },
              7: {
                start: { line: 27, column: 37 },
                end: { line: 27, column: 39 },
              },
              8: {
                start: { line: 28, column: 12 },
                end: { line: 36, column: 15 },
              },
              9: {
                start: { line: 29, column: 16 },
                end: { line: 35, column: 17 },
              },
              10: {
                start: { line: 30, column: 20 },
                end: { line: 30, column: 76 },
              },
              11: {
                start: { line: 31, column: 23 },
                end: { line: 35, column: 17 },
              },
              12: {
                start: { line: 32, column: 20 },
                end: { line: 32, column: 60 },
              },
              13: {
                start: { line: 33, column: 23 },
                end: { line: 35, column: 17 },
              },
              14: {
                start: { line: 34, column: 20 },
                end: { line: 34, column: 57 },
              },
              15: {
                start: { line: 37, column: 12 },
                end: { line: 37, column: 43 },
              },
              16: {
                start: { line: 38, column: 12 },
                end: { line: 38, column: 26 },
              },
              17: {
                start: { line: 44, column: 33 },
                end: { line: 59, column: 5 },
              },
              18: {
                start: { line: 45, column: 8 },
                end: { line: 48, column: 16 },
              },
              19: {
                start: { line: 45, column: 30 },
                end: { line: 48, column: 13 },
              },
              20: {
                start: { line: 50, column: 8 },
                end: { line: 58, column: 9 },
              },
              21: {
                start: { line: 51, column: 12 },
                end: { line: 57, column: 15 },
              },
              22: {
                start: { line: 52, column: 34 },
                end: { line: 54, column: 17 },
              },
              23: {
                start: { line: 55, column: 16 },
                end: { line: 55, column: 39 },
              },
              24: {
                start: { line: 56, column: 16 },
                end: { line: 56, column: 33 },
              },
              25: {
                start: { line: 60, column: 25 },
                end: { line: 110, column: 5 },
              },
              26: {
                start: { line: 63, column: 26 },
                end: { line: 63, column: 28 },
              },
              27: {
                start: { line: 65, column: 8 },
                end: { line: 67, column: 9 },
              },
              28: {
                start: { line: 66, column: 12 },
                end: { line: 66, column: 55 },
              },
              29: {
                start: { line: 68, column: 8 },
                end: { line: 107, column: 11 },
              },
              30: {
                start: { line: 69, column: 26 },
                end: { line: 69, column: 50 },
              },
              31: {
                start: { line: 71, column: 12 },
                end: { line: 74, column: 13 },
              },
              32: {
                start: { line: 72, column: 16 },
                end: { line: 72, column: 75 },
              },
              33: {
                start: { line: 73, column: 16 },
                end: { line: 73, column: 23 },
              },
              34: {
                start: { line: 76, column: 12 },
                end: { line: 78, column: 13 },
              },
              35: {
                start: { line: 77, column: 16 },
                end: { line: 77, column: 23 },
              },
              36: {
                start: { line: 80, column: 12 },
                end: { line: 90, column: 13 },
              },
              37: {
                start: { line: 82, column: 33 },
                end: { line: 82, column: 46 },
              },
              38: {
                start: { line: 83, column: 16 },
                end: { line: 89, column: 17 },
              },
              39: {
                start: { line: 84, column: 20 },
                end: { line: 84, column: 72 },
              },
              40: {
                start: { line: 85, column: 23 },
                end: { line: 89, column: 17 },
              },
              41: {
                start: { line: 86, column: 20 },
                end: { line: 86, column: 93 },
              },
              42: {
                start: { line: 87, column: 23 },
                end: { line: 89, column: 17 },
              },
              43: {
                start: { line: 88, column: 20 },
                end: { line: 88, column: 92 },
              },
              44: {
                start: { line: 92, column: 12 },
                end: { line: 106, column: 13 },
              },
              45: {
                start: { line: 94, column: 16 },
                end: { line: 96, column: 17 },
              },
              46: {
                start: { line: 95, column: 20 },
                end: { line: 95, column: 110 },
              },
              47: {
                start: { line: 97, column: 16 },
                end: { line: 99, column: 17 },
              },
              48: {
                start: { line: 98, column: 20 },
                end: { line: 98, column: 109 },
              },
              49: {
                start: { line: 100, column: 16 },
                end: { line: 105, column: 17 },
              },
              50: {
                start: { line: 101, column: 34 },
                end: { line: 101, column: 73 },
              },
              51: {
                start: { line: 102, column: 20 },
                end: { line: 104, column: 21 },
              },
              52: {
                start: { line: 103, column: 24 },
                end: { line: 103, column: 68 },
              },
              53: {
                start: { line: 108, column: 8 },
                end: { line: 108, column: 29 },
              },
              54: {
                start: { line: 109, column: 8 },
                end: { line: 109, column: 51 },
              },
              55: {
                start: { line: 111, column: 25 },
                end: { line: 126, column: 5 },
              },
              56: {
                start: { line: 112, column: 8 },
                end: { line: 112, column: 27 },
              },
              57: {
                start: { line: 113, column: 8 },
                end: { line: 115, column: 9 },
              },
              58: {
                start: { line: 114, column: 12 },
                end: { line: 114, column: 19 },
              },
              59: {
                start: { line: 116, column: 8 },
                end: { line: 116, column: 30 },
              },
              60: {
                start: { line: 117, column: 8 },
                end: { line: 125, column: 9 },
              },
              61: {
                start: { line: 118, column: 12 },
                end: { line: 118, column: 52 },
              },
              62: {
                start: { line: 119, column: 12 },
                end: { line: 119, column: 32 },
              },
              63: {
                start: { line: 121, column: 12 },
                end: { line: 121, column: 71 },
              },
              64: {
                start: { line: 124, column: 12 },
                end: { line: 124, column: 35 },
              },
              65: {
                start: { line: 127, column: 28 },
                end: { line: 134, column: 6 },
              },
              66: {
                start: { line: 128, column: 8 },
                end: { line: 128, column: 97 },
              },
              67: {
                start: { line: 128, column: 87 },
                end: { line: 128, column: 97 },
              },
              68: {
                start: { line: 129, column: 8 },
                end: { line: 131, column: 70 },
              },
              69: {
                start: { line: 131, column: 23 },
                end: { line: 131, column: 68 },
              },
              70: {
                start: { line: 135, column: 4 },
                end: { line: 135, column: 31 },
              },
              71: {
                start: { line: 135, column: 19 },
                end: { line: 135, column: 31 },
              },
              72: {
                start: { line: 136, column: 4 },
                end: { line: 271, column: 7 },
              },
              73: {
                start: { line: 195, column: 63 },
                end: { line: 195, column: 87 },
              },
              74: {
                start: { line: 224, column: 90 },
                end: { line: 229, column: 65 },
              },
              75: {
                start: { line: 227, column: 71 },
                end: { line: 227, column: 113 },
              },
              76: {
                start: { line: 241, column: 49 },
                end: { line: 241, column: 68 },
              },
              77: {
                start: { line: 274, column: 20 },
                end: { line: 298, column: 5 },
              },
              78: {
                start: { line: 275, column: 8 },
                end: { line: 297, column: 9 },
              },
              79: {
                start: { line: 278, column: 16 },
                end: { line: 280, column: 19 },
              },
              80: {
                start: { line: 282, column: 16 },
                end: { line: 284, column: 19 },
              },
              81: {
                start: { line: 286, column: 16 },
                end: { line: 288, column: 19 },
              },
              82: {
                start: { line: 290, column: 16 },
                end: { line: 292, column: 19 },
              },
              83: {
                start: { line: 294, column: 16 },
                end: { line: 296, column: 19 },
              },
              84: {
                start: { line: 299, column: 24 },
                end: { line: 413, column: 5 },
              },
              85: {
                start: { line: 300, column: 8 },
                end: { line: 412, column: 9 },
              },
              86: {
                start: { line: 302, column: 16 },
                end: { line: 308, column: 19 },
              },
              87: {
                start: { line: 304, column: 35 },
                end: { line: 304, column: 59 },
              },
              88: {
                start: { line: 311, column: 16 },
                end: { line: 319, column: 19 },
              },
              89: {
                start: { line: 314, column: 35 },
                end: { line: 314, column: 59 },
              },
              90: {
                start: { line: 321, column: 16 },
                end: { line: 326, column: 19 },
              },
              91: {
                start: { line: 324, column: 35 },
                end: { line: 324, column: 59 },
              },
              92: {
                start: { line: 328, column: 16 },
                end: { line: 333, column: 19 },
              },
              93: {
                start: { line: 331, column: 35 },
                end: { line: 331, column: 59 },
              },
              94: {
                start: { line: 335, column: 16 },
                end: { line: 340, column: 19 },
              },
              95: {
                start: { line: 338, column: 35 },
                end: { line: 338, column: 59 },
              },
              96: {
                start: { line: 342, column: 16 },
                end: { line: 354, column: 19 },
              },
              97: {
                start: { line: 357, column: 16 },
                end: { line: 374, column: 19 },
              },
              98: {
                start: { line: 368, column: 175 },
                end: { line: 371, column: 42 },
              },
              99: {
                start: { line: 377, column: 16 },
                end: { line: 401, column: 19 },
              },
              100: {
                start: { line: 380, column: 47 },
                end: { line: 380, column: 80 },
              },
              101: {
                start: { line: 381, column: 24 },
                end: { line: 399, column: 35 },
              },
              102: {
                start: { line: 387, column: 58 },
                end: { line: 390, column: 84 },
              },
              103: {
                start: { line: 390, column: 71 },
                end: { line: 390, column: 83 },
              },
              104: {
                start: { line: 391, column: 40 },
                end: { line: 391, column: 60 },
              },
              105: {
                start: { line: 404, column: 16 },
                end: { line: 411, column: 19 },
              },
              106: {
                start: { line: 406, column: 35 },
                end: { line: 406, column: 59 },
              },
              107: {
                start: { line: 414, column: 4 },
                end: { line: 442, column: 7 },
              },
              108: {
                start: { line: 444, column: 0 },
                end: { line: 545, column: 2 },
              },
            },
            fnMap: {
              0: {
                name: 'TemplateVariableForm',
                decl: {
                  start: { line: 15, column: 16 },
                  end: { line: 15, column: 36 },
                },
                loc: {
                  start: { line: 15, column: 92 },
                  end: { line: 272, column: 1 },
                },
                line: 15,
              },
              1: {
                name: '(anonymous_1)',
                decl: {
                  start: { line: 21, column: 20 },
                  end: { line: 21, column: 21 },
                },
                loc: {
                  start: { line: 21, column: 24 },
                  end: { line: 40, column: 5 },
                },
                line: 21,
              },
              2: {
                name: '(anonymous_2)',
                decl: {
                  start: { line: 28, column: 137 },
                  end: { line: 28, column: 138 },
                },
                loc: {
                  start: { line: 28, column: 149 },
                  end: { line: 36, column: 13 },
                },
                line: 28,
              },
              3: {
                name: '(anonymous_3)',
                decl: {
                  start: { line: 44, column: 33 },
                  end: { line: 44, column: 34 },
                },
                loc: {
                  start: { line: 44, column: 48 },
                  end: { line: 59, column: 5 },
                },
                line: 44,
              },
              4: {
                name: '(anonymous_4)',
                decl: {
                  start: { line: 45, column: 21 },
                  end: { line: 45, column: 22 },
                },
                loc: {
                  start: { line: 45, column: 30 },
                  end: { line: 48, column: 13 },
                },
                line: 45,
              },
              5: {
                name: '(anonymous_5)',
                decl: {
                  start: { line: 51, column: 22 },
                  end: { line: 51, column: 23 },
                },
                loc: {
                  start: { line: 51, column: 30 },
                  end: { line: 57, column: 13 },
                },
                line: 51,
              },
              6: {
                name: '(anonymous_6)',
                decl: {
                  start: { line: 60, column: 25 },
                  end: { line: 60, column: 26 },
                },
                loc: {
                  start: { line: 60, column: 29 },
                  end: { line: 110, column: 5 },
                },
                line: 60,
              },
              7: {
                name: '(anonymous_7)',
                decl: {
                  start: { line: 68, column: 185 },
                  end: { line: 68, column: 186 },
                },
                loc: {
                  start: { line: 68, column: 197 },
                  end: { line: 107, column: 9 },
                },
                line: 68,
              },
              8: {
                name: '(anonymous_8)',
                decl: {
                  start: { line: 111, column: 25 },
                  end: { line: 111, column: 26 },
                },
                loc: {
                  start: { line: 111, column: 36 },
                  end: { line: 126, column: 5 },
                },
                line: 111,
              },
              9: {
                name: '(anonymous_9)',
                decl: {
                  start: { line: 127, column: 42 },
                  end: { line: 127, column: 43 },
                },
                loc: {
                  start: { line: 127, column: 46 },
                  end: { line: 132, column: 5 },
                },
                line: 127,
              },
              10: {
                name: '(anonymous_10)',
                decl: {
                  start: { line: 131, column: 15 },
                  end: { line: 131, column: 16 },
                },
                loc: {
                  start: { line: 131, column: 23 },
                  end: { line: 131, column: 68 },
                },
                line: 131,
              },
              11: {
                name: '(anonymous_11)',
                decl: {
                  start: { line: 195, column: 58 },
                  end: { line: 195, column: 59 },
                },
                loc: {
                  start: { line: 195, column: 63 },
                  end: { line: 195, column: 87 },
                },
                line: 195,
              },
              12: {
                name: '(anonymous_12)',
                decl: {
                  start: { line: 224, column: 64 },
                  end: { line: 224, column: 65 },
                },
                loc: {
                  start: { line: 224, column: 90 },
                  end: { line: 229, column: 65 },
                },
                line: 224,
              },
              13: {
                name: '(anonymous_13)',
                decl: {
                  start: { line: 227, column: 62 },
                  end: { line: 227, column: 63 },
                },
                loc: {
                  start: { line: 227, column: 71 },
                  end: { line: 227, column: 113 },
                },
                line: 227,
              },
              14: {
                name: '(anonymous_14)',
                decl: {
                  start: { line: 241, column: 45 },
                  end: { line: 241, column: 46 },
                },
                loc: {
                  start: { line: 241, column: 49 },
                  end: { line: 241, column: 68 },
                },
                line: 241,
              },
              15: {
                name: 'VariableInput',
                decl: {
                  start: { line: 273, column: 9 },
                  end: { line: 273, column: 22 },
                },
                loc: {
                  start: { line: 273, column: 61 },
                  end: { line: 443, column: 1 },
                },
                line: 273,
              },
              16: {
                name: '(anonymous_16)',
                decl: {
                  start: { line: 274, column: 20 },
                  end: { line: 274, column: 21 },
                },
                loc: {
                  start: { line: 274, column: 24 },
                  end: { line: 298, column: 5 },
                },
                line: 274,
              },
              17: {
                name: '(anonymous_17)',
                decl: {
                  start: { line: 299, column: 24 },
                  end: { line: 299, column: 25 },
                },
                loc: {
                  start: { line: 299, column: 28 },
                  end: { line: 413, column: 5 },
                },
                line: 299,
              },
              18: {
                name: '(anonymous_18)',
                decl: {
                  start: { line: 304, column: 30 },
                  end: { line: 304, column: 31 },
                },
                loc: {
                  start: { line: 304, column: 35 },
                  end: { line: 304, column: 59 },
                },
                line: 304,
              },
              19: {
                name: '(anonymous_19)',
                decl: {
                  start: { line: 314, column: 30 },
                  end: { line: 314, column: 31 },
                },
                loc: {
                  start: { line: 314, column: 35 },
                  end: { line: 314, column: 59 },
                },
                line: 314,
              },
              20: {
                name: '(anonymous_20)',
                decl: {
                  start: { line: 324, column: 30 },
                  end: { line: 324, column: 31 },
                },
                loc: {
                  start: { line: 324, column: 35 },
                  end: { line: 324, column: 59 },
                },
                line: 324,
              },
              21: {
                name: '(anonymous_21)',
                decl: {
                  start: { line: 331, column: 30 },
                  end: { line: 331, column: 31 },
                },
                loc: {
                  start: { line: 331, column: 35 },
                  end: { line: 331, column: 59 },
                },
                line: 331,
              },
              22: {
                name: '(anonymous_22)',
                decl: {
                  start: { line: 338, column: 30 },
                  end: { line: 338, column: 31 },
                },
                loc: {
                  start: { line: 338, column: 35 },
                  end: { line: 338, column: 59 },
                },
                line: 338,
              },
              23: {
                name: '(anonymous_23)',
                decl: {
                  start: { line: 368, column: 151 },
                  end: { line: 368, column: 152 },
                },
                loc: {
                  start: { line: 368, column: 175 },
                  end: { line: 371, column: 42 },
                },
                line: 368,
              },
              24: {
                name: '(anonymous_24)',
                decl: {
                  start: { line: 379, column: 146 },
                  end: { line: 379, column: 147 },
                },
                loc: {
                  start: { line: 379, column: 156 },
                  end: { line: 400, column: 21 },
                },
                line: 379,
              },
              25: {
                name: '(anonymous_25)',
                decl: {
                  start: { line: 386, column: 53 },
                  end: { line: 386, column: 54 },
                },
                loc: {
                  start: { line: 386, column: 64 },
                  end: { line: 392, column: 37 },
                },
                line: 386,
              },
              26: {
                name: '(anonymous_26)',
                decl: {
                  start: { line: 390, column: 66 },
                  end: { line: 390, column: 67 },
                },
                loc: {
                  start: { line: 390, column: 71 },
                  end: { line: 390, column: 83 },
                },
                line: 390,
              },
              27: {
                name: '(anonymous_27)',
                decl: {
                  start: { line: 406, column: 30 },
                  end: { line: 406, column: 31 },
                },
                loc: {
                  start: { line: 406, column: 35 },
                  end: { line: 406, column: 59 },
                },
                line: 406,
              },
            },
            branchMap: {
              0: {
                loc: {
                  start: { line: 22, column: 8 },
                  end: { line: 39, column: 9 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 22, column: 8 },
                    end: { line: 39, column: 9 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 22,
              },
              1: {
                loc: {
                  start: { line: 22, column: 12 },
                  end: { line: 22, column: 28 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 22, column: 12 },
                    end: { line: 22, column: 20 },
                  },
                  {
                    start: { line: 22, column: 24 },
                    end: { line: 22, column: 28 },
                  },
                ],
                line: 22,
              },
              2: {
                loc: {
                  start: { line: 28, column: 12 },
                  end: { line: 36, column: 14 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 28, column: 100 },
                    end: { line: 28, column: 106 },
                  },
                  {
                    start: { line: 28, column: 109 },
                    end: { line: 36, column: 14 },
                  },
                ],
                line: 28,
              },
              3: {
                loc: {
                  start: { line: 28, column: 12 },
                  end: { line: 28, column: 97 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 28, column: 12 },
                    end: { line: 28, column: 63 },
                  },
                  {
                    start: { line: 28, column: 67 },
                    end: { line: 28, column: 97 },
                  },
                ],
                line: 28,
              },
              4: {
                loc: {
                  start: { line: 29, column: 16 },
                  end: { line: 35, column: 17 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 29, column: 16 },
                    end: { line: 35, column: 17 },
                  },
                  {
                    start: { line: 31, column: 23 },
                    end: { line: 35, column: 17 },
                  },
                ],
                line: 29,
              },
              5: {
                loc: {
                  start: { line: 31, column: 23 },
                  end: { line: 35, column: 17 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 31, column: 23 },
                    end: { line: 35, column: 17 },
                  },
                  {
                    start: { line: 33, column: 23 },
                    end: { line: 35, column: 17 },
                  },
                ],
                line: 31,
              },
              6: {
                loc: {
                  start: { line: 33, column: 23 },
                  end: { line: 35, column: 17 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 33, column: 23 },
                    end: { line: 35, column: 17 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 33,
              },
              7: {
                loc: {
                  start: { line: 50, column: 8 },
                  end: { line: 58, column: 9 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 50, column: 8 },
                    end: { line: 58, column: 9 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 50,
              },
              8: {
                loc: {
                  start: { line: 65, column: 8 },
                  end: { line: 67, column: 9 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 65, column: 8 },
                    end: { line: 67, column: 9 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 65,
              },
              9: {
                loc: {
                  start: { line: 68, column: 8 },
                  end: { line: 107, column: 10 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 68, column: 51 },
                    end: { line: 68, column: 57 },
                  },
                  {
                    start: { line: 68, column: 60 },
                    end: { line: 107, column: 10 },
                  },
                ],
                line: 68,
              },
              10: {
                loc: {
                  start: { line: 68, column: 8 },
                  end: { line: 68, column: 48 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 68, column: 8 },
                    end: { line: 68, column: 25 },
                  },
                  {
                    start: { line: 68, column: 29 },
                    end: { line: 68, column: 48 },
                  },
                ],
                line: 68,
              },
              11: {
                loc: {
                  start: { line: 68, column: 60 },
                  end: { line: 107, column: 10 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 68, column: 148 },
                    end: { line: 68, column: 154 },
                  },
                  {
                    start: { line: 68, column: 157 },
                    end: { line: 107, column: 10 },
                  },
                ],
                line: 68,
              },
              12: {
                loc: {
                  start: { line: 68, column: 60 },
                  end: { line: 68, column: 145 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 68, column: 60 },
                    end: { line: 68, column: 111 },
                  },
                  {
                    start: { line: 68, column: 115 },
                    end: { line: 68, column: 145 },
                  },
                ],
                line: 68,
              },
              13: {
                loc: {
                  start: { line: 71, column: 12 },
                  end: { line: 74, column: 13 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 71, column: 12 },
                    end: { line: 74, column: 13 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 71,
              },
              14: {
                loc: {
                  start: { line: 71, column: 16 },
                  end: { line: 71, column: 91 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 71, column: 16 },
                    end: { line: 71, column: 33 },
                  },
                  {
                    start: { line: 71, column: 38 },
                    end: { line: 71, column: 44 },
                  },
                  {
                    start: { line: 71, column: 48 },
                    end: { line: 71, column: 73 },
                  },
                  {
                    start: { line: 71, column: 77 },
                    end: { line: 71, column: 90 },
                  },
                ],
                line: 71,
              },
              15: {
                loc: {
                  start: { line: 76, column: 12 },
                  end: { line: 78, column: 13 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 76, column: 12 },
                    end: { line: 78, column: 13 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 76,
              },
              16: {
                loc: {
                  start: { line: 76, column: 16 },
                  end: { line: 76, column: 68 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 76, column: 16 },
                    end: { line: 76, column: 22 },
                  },
                  {
                    start: { line: 76, column: 26 },
                    end: { line: 76, column: 51 },
                  },
                  {
                    start: { line: 76, column: 55 },
                    end: { line: 76, column: 68 },
                  },
                ],
                line: 76,
              },
              17: {
                loc: {
                  start: { line: 80, column: 12 },
                  end: { line: 90, column: 13 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 80, column: 12 },
                    end: { line: 90, column: 13 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 80,
              },
              18: {
                loc: {
                  start: { line: 83, column: 16 },
                  end: { line: 89, column: 17 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 83, column: 16 },
                    end: { line: 89, column: 17 },
                  },
                  {
                    start: { line: 85, column: 23 },
                    end: { line: 89, column: 17 },
                  },
                ],
                line: 83,
              },
              19: {
                loc: {
                  start: { line: 85, column: 23 },
                  end: { line: 89, column: 17 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 85, column: 23 },
                    end: { line: 89, column: 17 },
                  },
                  {
                    start: { line: 87, column: 23 },
                    end: { line: 89, column: 17 },
                  },
                ],
                line: 85,
              },
              20: {
                loc: {
                  start: { line: 85, column: 27 },
                  end: { line: 85, column: 205 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 85, column: 27 },
                    end: { line: 85, column: 167 },
                  },
                  {
                    start: { line: 85, column: 171 },
                    end: { line: 85, column: 205 },
                  },
                ],
                line: 85,
              },
              21: {
                loc: {
                  start: { line: 85, column: 28 },
                  end: { line: 85, column: 152 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 85, column: 119 },
                    end: { line: 85, column: 125 },
                  },
                  {
                    start: { line: 85, column: 128 },
                    end: { line: 85, column: 152 },
                  },
                ],
                line: 85,
              },
              22: {
                loc: {
                  start: { line: 85, column: 28 },
                  end: { line: 85, column: 116 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 85, column: 28 },
                    end: { line: 85, column: 81 },
                  },
                  {
                    start: { line: 85, column: 85 },
                    end: { line: 85, column: 116 },
                  },
                ],
                line: 85,
              },
              23: {
                loc: {
                  start: { line: 87, column: 23 },
                  end: { line: 89, column: 17 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 87, column: 23 },
                    end: { line: 89, column: 17 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 87,
              },
              24: {
                loc: {
                  start: { line: 87, column: 27 },
                  end: { line: 87, column: 208 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 87, column: 27 },
                    end: { line: 87, column: 170 },
                  },
                  {
                    start: { line: 87, column: 174 },
                    end: { line: 87, column: 208 },
                  },
                ],
                line: 87,
              },
              25: {
                loc: {
                  start: { line: 87, column: 28 },
                  end: { line: 87, column: 155 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 87, column: 121 },
                    end: { line: 87, column: 127 },
                  },
                  {
                    start: { line: 87, column: 130 },
                    end: { line: 87, column: 155 },
                  },
                ],
                line: 87,
              },
              26: {
                loc: {
                  start: { line: 87, column: 28 },
                  end: { line: 87, column: 118 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 87, column: 28 },
                    end: { line: 87, column: 82 },
                  },
                  {
                    start: { line: 87, column: 86 },
                    end: { line: 87, column: 118 },
                  },
                ],
                line: 87,
              },
              27: {
                loc: {
                  start: { line: 92, column: 12 },
                  end: { line: 106, column: 13 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 92, column: 12 },
                    end: { line: 106, column: 13 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 92,
              },
              28: {
                loc: {
                  start: { line: 94, column: 16 },
                  end: { line: 96, column: 17 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 94, column: 16 },
                    end: { line: 96, column: 17 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 94,
              },
              29: {
                loc: {
                  start: { line: 94, column: 20 },
                  end: { line: 94, column: 203 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 94, column: 21 },
                    end: { line: 94, column: 154 },
                  },
                  {
                    start: { line: 94, column: 159 },
                    end: { line: 94, column: 203 },
                  },
                ],
                line: 94,
              },
              30: {
                loc: {
                  start: { line: 94, column: 21 },
                  end: { line: 94, column: 154 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 94, column: 114 },
                    end: { line: 94, column: 120 },
                  },
                  {
                    start: { line: 94, column: 123 },
                    end: { line: 94, column: 154 },
                  },
                ],
                line: 94,
              },
              31: {
                loc: {
                  start: { line: 94, column: 21 },
                  end: { line: 94, column: 111 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 94, column: 21 },
                    end: { line: 94, column: 75 },
                  },
                  {
                    start: { line: 94, column: 79 },
                    end: { line: 94, column: 111 },
                  },
                ],
                line: 94,
              },
              32: {
                loc: {
                  start: { line: 97, column: 16 },
                  end: { line: 99, column: 17 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 97, column: 16 },
                    end: { line: 99, column: 17 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 97,
              },
              33: {
                loc: {
                  start: { line: 97, column: 20 },
                  end: { line: 97, column: 203 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 97, column: 21 },
                    end: { line: 97, column: 154 },
                  },
                  {
                    start: { line: 97, column: 159 },
                    end: { line: 97, column: 203 },
                  },
                ],
                line: 97,
              },
              34: {
                loc: {
                  start: { line: 97, column: 21 },
                  end: { line: 97, column: 154 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 97, column: 114 },
                    end: { line: 97, column: 120 },
                  },
                  {
                    start: { line: 97, column: 123 },
                    end: { line: 97, column: 154 },
                  },
                ],
                line: 97,
              },
              35: {
                loc: {
                  start: { line: 97, column: 21 },
                  end: { line: 97, column: 111 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 97, column: 21 },
                    end: { line: 97, column: 75 },
                  },
                  {
                    start: { line: 97, column: 79 },
                    end: { line: 97, column: 111 },
                  },
                ],
                line: 97,
              },
              36: {
                loc: {
                  start: { line: 100, column: 16 },
                  end: { line: 105, column: 17 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 100, column: 16 },
                    end: { line: 105, column: 17 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 100,
              },
              37: {
                loc: {
                  start: { line: 100, column: 20 },
                  end: { line: 100, column: 151 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 100, column: 113 },
                    end: { line: 100, column: 119 },
                  },
                  {
                    start: { line: 100, column: 122 },
                    end: { line: 100, column: 151 },
                  },
                ],
                line: 100,
              },
              38: {
                loc: {
                  start: { line: 100, column: 20 },
                  end: { line: 100, column: 110 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 100, column: 20 },
                    end: { line: 100, column: 74 },
                  },
                  {
                    start: { line: 100, column: 78 },
                    end: { line: 100, column: 110 },
                  },
                ],
                line: 100,
              },
              39: {
                loc: {
                  start: { line: 102, column: 20 },
                  end: { line: 104, column: 21 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 102, column: 20 },
                    end: { line: 104, column: 21 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 102,
              },
              40: {
                loc: {
                  start: { line: 113, column: 8 },
                  end: { line: 115, column: 9 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 113, column: 8 },
                    end: { line: 115, column: 9 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 113,
              },
              41: {
                loc: {
                  start: { line: 128, column: 8 },
                  end: { line: 128, column: 97 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 128, column: 8 },
                    end: { line: 128, column: 97 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 128,
              },
              42: {
                loc: {
                  start: { line: 128, column: 14 },
                  end: { line: 128, column: 84 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 128, column: 57 },
                    end: { line: 128, column: 63 },
                  },
                  {
                    start: { line: 128, column: 66 },
                    end: { line: 128, column: 84 },
                  },
                ],
                line: 128,
              },
              43: {
                loc: {
                  start: { line: 128, column: 14 },
                  end: { line: 128, column: 54 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 128, column: 14 },
                    end: { line: 128, column: 31 },
                  },
                  {
                    start: { line: 128, column: 35 },
                    end: { line: 128, column: 54 },
                  },
                ],
                line: 128,
              },
              44: {
                loc: {
                  start: { line: 131, column: 24 },
                  end: { line: 131, column: 43 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 131, column: 24 },
                    end: { line: 131, column: 38 },
                  },
                  {
                    start: { line: 131, column: 42 },
                    end: { line: 131, column: 43 },
                  },
                ],
                line: 131,
              },
              45: {
                loc: {
                  start: { line: 131, column: 48 },
                  end: { line: 131, column: 67 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 131, column: 48 },
                    end: { line: 131, column: 62 },
                  },
                  {
                    start: { line: 131, column: 66 },
                    end: { line: 131, column: 67 },
                  },
                ],
                line: 131,
              },
              46: {
                loc: {
                  start: { line: 133, column: 8 },
                  end: { line: 133, column: 78 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 133, column: 51 },
                    end: { line: 133, column: 57 },
                  },
                  {
                    start: { line: 133, column: 60 },
                    end: { line: 133, column: 78 },
                  },
                ],
                line: 133,
              },
              47: {
                loc: {
                  start: { line: 133, column: 8 },
                  end: { line: 133, column: 48 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 133, column: 8 },
                    end: { line: 133, column: 25 },
                  },
                  {
                    start: { line: 133, column: 29 },
                    end: { line: 133, column: 48 },
                  },
                ],
                line: 133,
              },
              48: {
                loc: {
                  start: { line: 135, column: 4 },
                  end: { line: 135, column: 31 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 135, column: 4 },
                    end: { line: 135, column: 31 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 135,
              },
              49: {
                loc: {
                  start: { line: 197, column: 62 },
                  end: { line: 197, column: 98 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 197, column: 62 },
                    end: { line: 197, column: 74 },
                  },
                  {
                    start: { line: 197, column: 78 },
                    end: { line: 197, column: 98 },
                  },
                ],
                line: 197,
              },
              50: {
                loc: {
                  start: { line: 199, column: 44 },
                  end: { line: 202, column: 46 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 199, column: 44 },
                    end: { line: 199, column: 56 },
                  },
                  {
                    start: { line: 199, column: 74 },
                    end: { line: 202, column: 46 },
                  },
                ],
                line: 199,
              },
              51: {
                loc: {
                  start: { line: 205, column: 36 },
                  end: { line: 231, column: 38 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 205, column: 36 },
                    end: { line: 205, column: 62 },
                  },
                  {
                    start: { line: 205, column: 80 },
                    end: { line: 231, column: 38 },
                  },
                ],
                line: 205,
              },
              52: {
                loc: {
                  start: { line: 249, column: 46 },
                  end: { line: 263, column: 38 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 249, column: 75 },
                    end: { line: 256, column: 38 },
                  },
                  {
                    start: { line: 256, column: 55 },
                    end: { line: 263, column: 38 },
                  },
                ],
                line: 249,
              },
              53: {
                loc: {
                  start: { line: 275, column: 8 },
                  end: { line: 297, column: 9 },
                },
                type: 'switch',
                locations: [
                  {
                    start: { line: 276, column: 12 },
                    end: { line: 276, column: 24 },
                  },
                  {
                    start: { line: 277, column: 12 },
                    end: { line: 280, column: 19 },
                  },
                  {
                    start: { line: 281, column: 12 },
                    end: { line: 284, column: 19 },
                  },
                  {
                    start: { line: 285, column: 12 },
                    end: { line: 288, column: 19 },
                  },
                  {
                    start: { line: 289, column: 12 },
                    end: { line: 292, column: 19 },
                  },
                  {
                    start: { line: 293, column: 12 },
                    end: { line: 296, column: 19 },
                  },
                ],
                line: 275,
              },
              54: {
                loc: {
                  start: { line: 300, column: 8 },
                  end: { line: 412, column: 9 },
                },
                type: 'switch',
                locations: [
                  {
                    start: { line: 301, column: 12 },
                    end: { line: 308, column: 19 },
                  },
                  {
                    start: { line: 309, column: 12 },
                    end: { line: 319, column: 19 },
                  },
                  {
                    start: { line: 320, column: 12 },
                    end: { line: 326, column: 19 },
                  },
                  {
                    start: { line: 327, column: 12 },
                    end: { line: 333, column: 19 },
                  },
                  {
                    start: { line: 334, column: 12 },
                    end: { line: 340, column: 19 },
                  },
                  {
                    start: { line: 341, column: 12 },
                    end: { line: 354, column: 19 },
                  },
                  {
                    start: { line: 355, column: 12 },
                    end: { line: 374, column: 19 },
                  },
                  {
                    start: { line: 375, column: 12 },
                    end: { line: 401, column: 19 },
                  },
                  {
                    start: { line: 402, column: 12 },
                    end: { line: 411, column: 19 },
                  },
                ],
                line: 300,
              },
              55: {
                loc: {
                  start: { line: 303, column: 27 },
                  end: { line: 303, column: 38 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 303, column: 27 },
                    end: { line: 303, column: 32 },
                  },
                  {
                    start: { line: 303, column: 36 },
                    end: { line: 303, column: 38 },
                  },
                ],
                line: 303,
              },
              56: {
                loc: {
                  start: { line: 306, column: 34 },
                  end: { line: 306, column: 63 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 306, column: 34 },
                    end: { line: 306, column: 39 },
                  },
                  {
                    start: { line: 306, column: 43 },
                    end: { line: 306, column: 63 },
                  },
                ],
                line: 306,
              },
              57: {
                loc: {
                  start: { line: 313, column: 27 },
                  end: { line: 313, column: 38 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 313, column: 27 },
                    end: { line: 313, column: 32 },
                  },
                  {
                    start: { line: 313, column: 36 },
                    end: { line: 313, column: 38 },
                  },
                ],
                line: 313,
              },
              58: {
                loc: {
                  start: { line: 316, column: 25 },
                  end: { line: 316, column: 149 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 316, column: 116 },
                    end: { line: 316, column: 122 },
                  },
                  {
                    start: { line: 316, column: 125 },
                    end: { line: 316, column: 149 },
                  },
                ],
                line: 316,
              },
              59: {
                loc: {
                  start: { line: 316, column: 25 },
                  end: { line: 316, column: 113 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 316, column: 25 },
                    end: { line: 316, column: 78 },
                  },
                  {
                    start: { line: 316, column: 82 },
                    end: { line: 316, column: 113 },
                  },
                ],
                line: 316,
              },
              60: {
                loc: {
                  start: { line: 317, column: 25 },
                  end: { line: 317, column: 152 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 317, column: 118 },
                    end: { line: 317, column: 124 },
                  },
                  {
                    start: { line: 317, column: 127 },
                    end: { line: 317, column: 152 },
                  },
                ],
                line: 317,
              },
              61: {
                loc: {
                  start: { line: 317, column: 25 },
                  end: { line: 317, column: 115 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 317, column: 25 },
                    end: { line: 317, column: 79 },
                  },
                  {
                    start: { line: 317, column: 83 },
                    end: { line: 317, column: 115 },
                  },
                ],
                line: 317,
              },
              62: {
                loc: {
                  start: { line: 318, column: 34 },
                  end: { line: 318, column: 63 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 318, column: 34 },
                    end: { line: 318, column: 39 },
                  },
                  {
                    start: { line: 318, column: 43 },
                    end: { line: 318, column: 63 },
                  },
                ],
                line: 318,
              },
              63: {
                loc: {
                  start: { line: 323, column: 27 },
                  end: { line: 323, column: 38 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 323, column: 27 },
                    end: { line: 323, column: 32 },
                  },
                  {
                    start: { line: 323, column: 36 },
                    end: { line: 323, column: 38 },
                  },
                ],
                line: 323,
              },
              64: {
                loc: {
                  start: { line: 325, column: 34 },
                  end: { line: 325, column: 63 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 325, column: 34 },
                    end: { line: 325, column: 39 },
                  },
                  {
                    start: { line: 325, column: 43 },
                    end: { line: 325, column: 63 },
                  },
                ],
                line: 325,
              },
              65: {
                loc: {
                  start: { line: 330, column: 27 },
                  end: { line: 330, column: 38 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 330, column: 27 },
                    end: { line: 330, column: 32 },
                  },
                  {
                    start: { line: 330, column: 36 },
                    end: { line: 330, column: 38 },
                  },
                ],
                line: 330,
              },
              66: {
                loc: {
                  start: { line: 332, column: 34 },
                  end: { line: 332, column: 63 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 332, column: 34 },
                    end: { line: 332, column: 39 },
                  },
                  {
                    start: { line: 332, column: 43 },
                    end: { line: 332, column: 63 },
                  },
                ],
                line: 332,
              },
              67: {
                loc: {
                  start: { line: 337, column: 27 },
                  end: { line: 337, column: 38 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 337, column: 27 },
                    end: { line: 337, column: 32 },
                  },
                  {
                    start: { line: 337, column: 36 },
                    end: { line: 337, column: 38 },
                  },
                ],
                line: 337,
              },
              68: {
                loc: {
                  start: { line: 339, column: 34 },
                  end: { line: 339, column: 63 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 339, column: 34 },
                    end: { line: 339, column: 39 },
                  },
                  {
                    start: { line: 339, column: 43 },
                    end: { line: 339, column: 63 },
                  },
                ],
                line: 339,
              },
              69: {
                loc: {
                  start: { line: 346, column: 37 },
                  end: { line: 346, column: 51 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 346, column: 37 },
                    end: { line: 346, column: 42 },
                  },
                  {
                    start: { line: 346, column: 46 },
                    end: { line: 346, column: 51 },
                  },
                ],
                line: 346,
              },
              70: {
                loc: {
                  start: { line: 351, column: 38 },
                  end: { line: 351, column: 67 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 351, column: 38 },
                    end: { line: 351, column: 58 },
                  },
                  {
                    start: { line: 351, column: 62 },
                    end: { line: 351, column: 67 },
                  },
                ],
                line: 351,
              },
              71: {
                loc: {
                  start: { line: 358, column: 27 },
                  end: { line: 358, column: 38 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 358, column: 27 },
                    end: { line: 358, column: 32 },
                  },
                  {
                    start: { line: 358, column: 36 },
                    end: { line: 358, column: 38 },
                  },
                ],
                line: 358,
              },
              72: {
                loc: {
                  start: { line: 362, column: 42 },
                  end: { line: 362, column: 71 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 362, column: 42 },
                    end: { line: 362, column: 47 },
                  },
                  {
                    start: { line: 362, column: 51 },
                    end: { line: 362, column: 71 },
                  },
                ],
                line: 362,
              },
              73: {
                loc: {
                  start: { line: 364, column: 45 },
                  end: { line: 364, column: 87 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 364, column: 45 },
                    end: { line: 364, column: 65 },
                  },
                  {
                    start: { line: 364, column: 69 },
                    end: { line: 364, column: 87 },
                  },
                ],
                line: 364,
              },
              74: {
                loc: {
                  start: { line: 368, column: 38 },
                  end: { line: 371, column: 43 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 368, column: 120 },
                    end: { line: 368, column: 126 },
                  },
                  {
                    start: { line: 368, column: 129 },
                    end: { line: 371, column: 43 },
                  },
                ],
                line: 368,
              },
              75: {
                loc: {
                  start: { line: 368, column: 38 },
                  end: { line: 368, column: 117 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 368, column: 38 },
                    end: { line: 368, column: 85 },
                  },
                  {
                    start: { line: 368, column: 89 },
                    end: { line: 368, column: 117 },
                  },
                ],
                line: 368,
              },
              76: {
                loc: {
                  start: { line: 379, column: 30 },
                  end: { line: 400, column: 22 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 379, column: 114 },
                    end: { line: 379, column: 120 },
                  },
                  {
                    start: { line: 379, column: 123 },
                    end: { line: 400, column: 22 },
                  },
                ],
                line: 379,
              },
              77: {
                loc: {
                  start: { line: 379, column: 30 },
                  end: { line: 379, column: 111 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 379, column: 30 },
                    end: { line: 379, column: 78 },
                  },
                  {
                    start: { line: 379, column: 82 },
                    end: { line: 379, column: 111 },
                  },
                ],
                line: 379,
              },
              78: {
                loc: {
                  start: { line: 380, column: 47 },
                  end: { line: 380, column: 80 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 380, column: 70 },
                    end: { line: 380, column: 75 },
                  },
                  {
                    start: { line: 380, column: 78 },
                    end: { line: 380, column: 80 },
                  },
                ],
                line: 380,
              },
              79: {
                loc: {
                  start: { line: 387, column: 58 },
                  end: { line: 390, column: 84 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 387, column: 68 },
                    end: { line: 390, column: 41 },
                  },
                  {
                    start: { line: 390, column: 44 },
                    end: { line: 390, column: 84 },
                  },
                ],
                line: 387,
              },
              80: {
                loc: {
                  start: { line: 405, column: 27 },
                  end: { line: 405, column: 38 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 405, column: 27 },
                    end: { line: 405, column: 32 },
                  },
                  {
                    start: { line: 405, column: 36 },
                    end: { line: 405, column: 38 },
                  },
                ],
                line: 405,
              },
              81: {
                loc: {
                  start: { line: 408, column: 31 },
                  end: { line: 408, column: 164 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 408, column: 124 },
                    end: { line: 408, column: 130 },
                  },
                  {
                    start: { line: 408, column: 133 },
                    end: { line: 408, column: 164 },
                  },
                ],
                line: 408,
              },
              82: {
                loc: {
                  start: { line: 408, column: 31 },
                  end: { line: 408, column: 121 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 408, column: 31 },
                    end: { line: 408, column: 85 },
                  },
                  {
                    start: { line: 408, column: 89 },
                    end: { line: 408, column: 121 },
                  },
                ],
                line: 408,
              },
              83: {
                loc: {
                  start: { line: 409, column: 29 },
                  end: { line: 409, column: 160 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 409, column: 122 },
                    end: { line: 409, column: 128 },
                  },
                  {
                    start: { line: 409, column: 131 },
                    end: { line: 409, column: 160 },
                  },
                ],
                line: 409,
              },
              84: {
                loc: {
                  start: { line: 409, column: 29 },
                  end: { line: 409, column: 119 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 409, column: 29 },
                    end: { line: 409, column: 83 },
                  },
                  {
                    start: { line: 409, column: 87 },
                    end: { line: 409, column: 119 },
                  },
                ],
                line: 409,
              },
              85: {
                loc: {
                  start: { line: 410, column: 34 },
                  end: { line: 410, column: 63 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 410, column: 34 },
                    end: { line: 410, column: 39 },
                  },
                  {
                    start: { line: 410, column: 43 },
                    end: { line: 410, column: 63 },
                  },
                ],
                line: 410,
              },
              86: {
                loc: {
                  start: { line: 422, column: 20 },
                  end: { line: 425, column: 22 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 422, column: 20 },
                    end: { line: 422, column: 37 },
                  },
                  {
                    start: { line: 422, column: 55 },
                    end: { line: 425, column: 22 },
                  },
                ],
                line: 422,
              },
              87: {
                loc: {
                  start: { line: 428, column: 12 },
                  end: { line: 431, column: 14 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 428, column: 12 },
                    end: { line: 428, column: 32 },
                  },
                  {
                    start: { line: 428, column: 50 },
                    end: { line: 431, column: 14 },
                  },
                ],
                line: 428,
              },
              88: {
                loc: {
                  start: { line: 433, column: 12 },
                  end: { line: 436, column: 14 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 433, column: 12 },
                    end: { line: 433, column: 29 },
                  },
                  {
                    start: { line: 433, column: 47 },
                    end: { line: 436, column: 14 },
                  },
                ],
                line: 433,
              },
              89: {
                loc: {
                  start: { line: 437, column: 12 },
                  end: { line: 440, column: 14 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 437, column: 12 },
                    end: { line: 437, column: 17 },
                  },
                  {
                    start: { line: 437, column: 35 },
                    end: { line: 440, column: 14 },
                  },
                ],
                line: 437,
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
              76: 0,
              77: 0,
              78: 0,
              79: 0,
              80: 0,
              81: 0,
              82: 0,
              83: 0,
              84: 0,
              85: 0,
              86: 0,
              87: 0,
              88: 0,
              89: 0,
              90: 0,
              91: 0,
              92: 0,
              93: 0,
              94: 0,
              95: 0,
              96: 0,
              97: 0,
              98: 0,
              99: 0,
              100: 0,
              101: 0,
              102: 0,
              103: 0,
              104: 0,
              105: 0,
              106: 0,
              107: 0,
              108: 0,
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
              10: [0, 0],
              11: [0, 0],
              12: [0, 0],
              13: [0, 0],
              14: [0, 0, 0, 0],
              15: [0, 0],
              16: [0, 0, 0],
              17: [0, 0],
              18: [0, 0],
              19: [0, 0],
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
              46: [0, 0],
              47: [0, 0],
              48: [0, 0],
              49: [0, 0],
              50: [0, 0],
              51: [0, 0],
              52: [0, 0],
              53: [0, 0, 0, 0, 0, 0],
              54: [0, 0, 0, 0, 0, 0, 0, 0, 0],
              55: [0, 0],
              56: [0, 0],
              57: [0, 0],
              58: [0, 0],
              59: [0, 0],
              60: [0, 0],
              61: [0, 0],
              62: [0, 0],
              63: [0, 0],
              64: [0, 0],
              65: [0, 0],
              66: [0, 0],
              67: [0, 0],
              68: [0, 0],
              69: [0, 0],
              70: [0, 0],
              71: [0, 0],
              72: [0, 0],
              73: [0, 0],
              74: [0, 0],
              75: [0, 0],
              76: [0, 0],
              77: [0, 0],
              78: [0, 0],
              79: [0, 0],
              80: [0, 0],
              81: [0, 0],
              82: [0, 0],
              83: [0, 0],
              84: [0, 0],
              85: [0, 0],
              86: [0, 0],
              87: [0, 0],
              88: [0, 0],
              89: [0, 0],
            },
            inputSourceMap: {
              version: 3,
              sources: [
                '/Users/ryota.murakami/repository/Notable/packages/web/components/templates/template-variable-form.tsx',
              ],
              sourcesContent: [
                "'use client'\n\nimport * as React from 'react'\nimport {\n  Calendar,\n  Clock,\n  FileText,\n  Hash,\n  Loader2,\n  Save,\n  User,\n} from 'lucide-react'\nimport { cn } from '@/lib/utils'\nimport { Input } from '@/components/ui/input'\nimport { Textarea } from '@/components/ui/textarea'\nimport { Button } from '@/components/ui/button'\nimport { Label } from '@/components/ui/label'\nimport { Checkbox } from '@/components/ui/checkbox'\nimport {\n  Select,\n  SelectContent,\n  SelectItem,\n  SelectTrigger,\n  SelectValue,\n} from '@/components/ui/select'\nimport {\n  Dialog,\n  DialogContent,\n  DialogDescription,\n  DialogFooter,\n  DialogHeader,\n  DialogTitle,\n} from '@/components/ui/dialog'\nimport { ScrollArea } from '@/components/ui/scroll-area'\nimport { Badge } from '@/components/ui/badge'\n\nimport type { Template, TemplateVariable } from '@/types/templates'\n\nexport type { Template, TemplateVariable }\n\nexport interface TemplateVariableFormProps {\n  open: boolean\n  onOpenChange: (open: boolean) => void\n  template: Template | null\n  onSubmit: (title: string, variables: Record<string, any>) => Promise<void>\n  className?: string\n}\n\nexport function TemplateVariableForm({\n  open,\n  onOpenChange,\n  template,\n  onSubmit,\n  className,\n}: TemplateVariableFormProps) {\n  const [title, setTitle] = React.useState('')\n  const [variables, setVariables] = React.useState<Record<string, any>>({})\n  const [isSubmitting, setIsSubmitting] = React.useState(false)\n  const [errors, setErrors] = React.useState<Record<string, string>>({})\n\n  // Initialize form when template changes\n  React.useEffect(() => {\n    if (template && open) {\n      // Set default title\n      setTitle(template.name)\n\n      // Initialize variables with default values\n      const initialVariables: Record<string, any> = {}\n      template.variables?.forEach((variable) => {\n        if (variable.defaultValue) {\n          initialVariables[variable.name] = variable.defaultValue\n        } else if (variable.type === 'boolean') {\n          initialVariables[variable.name] = false\n        } else if (variable.type === 'multi-select') {\n          initialVariables[variable.name] = []\n        }\n      })\n      setVariables(initialVariables)\n      setErrors({})\n    }\n  }, [template, open])\n\n  const handleVariableChange = (name: string, value: any) => {\n    setVariables((prev) => ({ ...prev, [name]: value }))\n    // Clear error when user starts typing\n    if (errors[name]) {\n      setErrors((prev) => {\n        const newErrors = { ...prev }\n        delete newErrors[name]\n        return newErrors\n      })\n    }\n  }\n\n  const validateForm = (): boolean => {\n    const newErrors: Record<string, string> = {}\n\n    // Validate title\n    if (!title.trim()) {\n      newErrors.title = 'Note title is required'\n    }\n\n    // Validate variables\n    template?.variables?.forEach((variable) => {\n      const value = variables[variable.name]\n\n      // Check required fields\n      if (\n        variable.required &&\n        (!value || (typeof value === 'string' && !value.trim()))\n      ) {\n        newErrors[variable.name] = `${variable.label} is required`\n        return\n      }\n\n      // Skip validation if field is empty and not required\n      if (!value || (typeof value === 'string' && !value.trim())) {\n        return\n      }\n\n      // Type-specific validation\n      if (variable.type === 'number') {\n        const numValue = Number(value)\n        if (isNaN(numValue)) {\n          newErrors[variable.name] = 'Must be a valid number'\n        } else if (\n          variable.validation?.min !== undefined &&\n          numValue < variable.validation.min\n        ) {\n          newErrors[variable.name] =\n            `Must be at least ${variable.validation.min}`\n        } else if (\n          variable.validation?.max !== undefined &&\n          numValue > variable.validation.max\n        ) {\n          newErrors[variable.name] =\n            `Must be at most ${variable.validation.max}`\n        }\n      }\n\n      // String length validation\n      if (typeof value === 'string') {\n        if (\n          variable.validation?.minLength &&\n          value.length < variable.validation.minLength\n        ) {\n          newErrors[variable.name] =\n            `Must be at least ${variable.validation.minLength} characters`\n        }\n        if (\n          variable.validation?.maxLength &&\n          value.length > variable.validation.maxLength\n        ) {\n          newErrors[variable.name] =\n            `Must be at most ${variable.validation.maxLength} characters`\n        }\n        if (variable.validation?.pattern) {\n          const regex = new RegExp(variable.validation.pattern)\n          if (!regex.test(value)) {\n            newErrors[variable.name] = 'Invalid format'\n          }\n        }\n      }\n    })\n\n    setErrors(newErrors)\n    return Object.keys(newErrors).length === 0\n  }\n\n  const handleSubmit = async (e: React.FormEvent) => {\n    e.preventDefault()\n\n    if (!validateForm()) {\n      return\n    }\n\n    setIsSubmitting(true)\n    try {\n      await onSubmit(title.trim(), variables)\n      onOpenChange(false)\n    } catch (error) {\n      console.error('Error creating note from template:', error)\n      // Handle error (could show a toast or error message)\n    } finally {\n      setIsSubmitting(false)\n    }\n  }\n\n  const sortedVariables = React.useMemo(() => {\n    if (!template?.variables) return []\n    return [...template.variables].sort(\n      (a, b) => (a.displayOrder || 0) - (b.displayOrder || 0)\n    )\n  }, [template?.variables])\n\n  if (!template) return null\n\n  return (\n    <Dialog open={open} onOpenChange={onOpenChange}>\n      <DialogContent className={cn('max-w-2xl max-h-[90vh] p-0', className)}>\n        <DialogHeader className='px-6 py-4 border-b'>\n          <DialogTitle className='flex items-center gap-2'>\n            <span className='text-2xl'>{template.categoryIcon}</span>\n            <div>\n              <div>Create from Template</div>\n              <div className='text-sm font-normal text-muted-foreground'>\n                {template.name}\n              </div>\n            </div>\n          </DialogTitle>\n          <DialogDescription>{template.description}</DialogDescription>\n        </DialogHeader>\n\n        <form onSubmit={handleSubmit} className='flex flex-col h-full'>\n          <ScrollArea className='flex-1 px-6 py-4'>\n            <div className='space-y-6'>\n              {/* Note Title */}\n              <div className='space-y-2'>\n                <Label htmlFor='title' className='flex items-center gap-2'>\n                  <FileText className='h-4 w-4' />\n                  Note Title *\n                </Label>\n                <Input\n                  id='title'\n                  value={title}\n                  onChange={(e) => setTitle(e.target.value)}\n                  placeholder='Enter note title...'\n                  className={cn(errors.title && 'border-destructive')}\n                />\n                {errors.title && (\n                  <p className='text-sm text-destructive'>{errors.title}</p>\n                )}\n              </div>\n\n              {/* Template Variables */}\n              {sortedVariables.length > 0 && (\n                <div className='space-y-4'>\n                  <div className='flex items-center gap-2'>\n                    <h3 className='text-lg font-semibold'>Template Fields</h3>\n                    <Badge variant='secondary'>\n                      {sortedVariables.length} fields\n                    </Badge>\n                  </div>\n\n                  {sortedVariables.map((variable) => (\n                    <VariableInput\n                      key={variable.name}\n                      variable={variable}\n                      value={variables[variable.name]}\n                      onChange={(value) =>\n                        handleVariableChange(variable.name, value)\n                      }\n                      error={errors[variable.name]}\n                    />\n                  ))}\n                </div>\n              )}\n            </div>\n          </ScrollArea>\n\n          <DialogFooter className='px-6 py-4 border-t'>\n            <Button\n              type='button'\n              variant='outline'\n              onClick={() => onOpenChange(false)}\n              disabled={isSubmitting}\n            >\n              Cancel\n            </Button>\n            <Button\n              type='submit'\n              disabled={isSubmitting}\n              className='min-w-[120px]'\n            >\n              {isSubmitting ? (\n                <>\n                  <Loader2 className='mr-2 h-4 w-4 animate-spin' />\n                  Creating...\n                </>\n              ) : (\n                <>\n                  <Save className='mr-2 h-4 w-4' />\n                  Create Note\n                </>\n              )}\n            </Button>\n          </DialogFooter>\n        </form>\n      </DialogContent>\n    </Dialog>\n  )\n}\n\ninterface VariableInputProps {\n  variable: TemplateVariable\n  value: any\n  onChange: (value: any) => void\n  error?: string\n}\n\nfunction VariableInput({\n  variable,\n  value,\n  onChange,\n  error,\n}: VariableInputProps) {\n  const getIcon = () => {\n    switch (variable.type) {\n      case 'date':\n      case 'datetime':\n        return <Calendar className='h-4 w-4' />\n      case 'time':\n        return <Clock className='h-4 w-4' />\n      case 'tag':\n        return <Hash className='h-4 w-4' />\n      case 'user':\n        return <User className='h-4 w-4' />\n      default:\n        return <FileText className='h-4 w-4' />\n    }\n  }\n\n  const renderInput = () => {\n    switch (variable.type) {\n      case 'textarea':\n        return (\n          <Textarea\n            value={value || ''}\n            onChange={(e) => onChange(e.target.value)}\n            placeholder={variable.placeholder}\n            className={cn(error && 'border-destructive')}\n            rows={3}\n          />\n        )\n\n      case 'number':\n        return (\n          <Input\n            type='number'\n            value={value || ''}\n            onChange={(e) => onChange(e.target.value)}\n            placeholder={variable.placeholder}\n            min={variable.validation?.min}\n            max={variable.validation?.max}\n            className={cn(error && 'border-destructive')}\n          />\n        )\n\n      case 'date':\n        return (\n          <Input\n            type='date'\n            value={value || ''}\n            onChange={(e) => onChange(e.target.value)}\n            className={cn(error && 'border-destructive')}\n          />\n        )\n\n      case 'time':\n        return (\n          <Input\n            type='time'\n            value={value || ''}\n            onChange={(e) => onChange(e.target.value)}\n            className={cn(error && 'border-destructive')}\n          />\n        )\n\n      case 'datetime':\n        return (\n          <Input\n            type='datetime-local'\n            value={value || ''}\n            onChange={(e) => onChange(e.target.value)}\n            className={cn(error && 'border-destructive')}\n          />\n        )\n\n      case 'boolean':\n        return (\n          <div className='flex items-center space-x-2'>\n            <Checkbox checked={value || false} onCheckedChange={onChange} />\n            <span className='text-sm'>{variable.placeholder || 'Yes'}</span>\n          </div>\n        )\n\n      case 'select':\n        return (\n          <Select value={value || ''} onValueChange={onChange}>\n            <SelectTrigger className={cn(error && 'border-destructive')}>\n              <SelectValue\n                placeholder={variable.placeholder || 'Select an option'}\n              />\n            </SelectTrigger>\n            <SelectContent>\n              {variable.options?.map((option) => (\n                <SelectItem key={option} value={option}>\n                  {option}\n                </SelectItem>\n              ))}\n            </SelectContent>\n          </Select>\n        )\n\n      case 'multi-select':\n        return (\n          <div className='space-y-2'>\n            {variable.options?.map((option) => {\n              const selectedValues = Array.isArray(value) ? value : []\n              return (\n                <div key={option} className='flex items-center space-x-2'>\n                  <Checkbox\n                    checked={selectedValues.includes(option)}\n                    onCheckedChange={(checked) => {\n                      const newValues = checked\n                        ? [...selectedValues, option]\n                        : selectedValues.filter((v) => v !== option)\n                      onChange(newValues)\n                    }}\n                  />\n                  <span className='text-sm'>{option}</span>\n                </div>\n              )\n            })}\n          </div>\n        )\n\n      default:\n        return (\n          <Input\n            value={value || ''}\n            onChange={(e) => onChange(e.target.value)}\n            placeholder={variable.placeholder}\n            maxLength={variable.validation?.maxLength}\n            pattern={variable.validation?.pattern}\n            className={cn(error && 'border-destructive')}\n          />\n        )\n    }\n  }\n\n  return (\n    <div className='space-y-2'>\n      <Label className='flex items-center gap-2'>\n        {getIcon()}\n        {variable.label}\n        {variable.required && <span className='text-destructive'>*</span>}\n      </Label>\n\n      {variable.description && (\n        <p className='text-sm text-muted-foreground'>{variable.description}</p>\n      )}\n\n      {renderInput()}\n\n      {variable.helpText && (\n        <p className='text-xs text-muted-foreground'>{variable.helpText}</p>\n      )}\n\n      {error && <p className='text-sm text-destructive'>{error}</p>}\n    </div>\n  )\n}\n",
              ],
              names: [],
              mappings:
                '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AAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,cACpB,KAAC,CAAC;gBAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;0BAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;YAGpE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,eAAC,KAAC,CAAC;gBAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;0BAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;;;AAGnE',
            },
            _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
            hash: '357babb29d6c477c76acbed9717f7cdb2979393a',
          },
          coverage = global[gcv] || (global[gcv] = {})
        ;(coverage[path] &&
          '357babb29d6c477c76acbed9717f7cdb2979393a' === coverage[path].hash) ||
          (coverage[path] = coverageData)
        var actualCoverage = coverage[path]
        return (
          (cov_i4jludcll = function () {
            return actualCoverage
          }),
          actualCoverage
        )
      }
      function TemplateVariableForm({
        open,
        onOpenChange,
        template,
        onSubmit,
        className,
      }) {
        cov_i4jludcll().f[0]++
        const [title, setTitle] = (cov_i4jludcll().s[0]++, react.useState('')),
          [variables, setVariables] =
            (cov_i4jludcll().s[1]++, react.useState({})),
          [isSubmitting, setIsSubmitting] =
            (cov_i4jludcll().s[2]++, react.useState(!1)),
          [errors, setErrors] = (cov_i4jludcll().s[3]++, react.useState({}))
        ;(cov_i4jludcll().s[4]++,
          react.useEffect(() => {
            if (
              (cov_i4jludcll().f[1]++,
              cov_i4jludcll().s[5]++,
              cov_i4jludcll().b[1][0]++,
              template && (cov_i4jludcll().b[1][1]++, open))
            ) {
              var _template_variables
              ;(cov_i4jludcll().b[0][0]++,
                cov_i4jludcll().s[6]++,
                setTitle(template.name))
              const initialVariables = (cov_i4jludcll().s[7]++, {})
              ;(cov_i4jludcll().s[8]++,
                cov_i4jludcll().b[3][0]++,
                null === (_template_variables = template.variables) ||
                (cov_i4jludcll().b[3][1]++, void 0 === _template_variables)
                  ? cov_i4jludcll().b[2][0]++
                  : (cov_i4jludcll().b[2][1]++,
                    _template_variables.forEach((variable) => {
                      ;(cov_i4jludcll().f[2]++,
                        cov_i4jludcll().s[9]++,
                        variable.defaultValue
                          ? (cov_i4jludcll().b[4][0]++,
                            cov_i4jludcll().s[10]++,
                            (initialVariables[variable.name] =
                              variable.defaultValue))
                          : (cov_i4jludcll().b[4][1]++,
                            cov_i4jludcll().s[11]++,
                            'boolean' === variable.type
                              ? (cov_i4jludcll().b[5][0]++,
                                cov_i4jludcll().s[12]++,
                                (initialVariables[variable.name] = !1))
                              : (cov_i4jludcll().b[5][1]++,
                                cov_i4jludcll().s[13]++,
                                'multi-select' === variable.type
                                  ? (cov_i4jludcll().b[6][0]++,
                                    cov_i4jludcll().s[14]++,
                                    (initialVariables[variable.name] = []))
                                  : cov_i4jludcll().b[6][1]++)))
                    })),
                cov_i4jludcll().s[15]++,
                setVariables(initialVariables),
                cov_i4jludcll().s[16]++,
                setErrors({}))
            } else cov_i4jludcll().b[0][1]++
          }, [template, open]),
          cov_i4jludcll().s[17]++)
        cov_i4jludcll().s[25]++
        cov_i4jludcll().s[55]++
        const sortedVariables =
          (cov_i4jludcll().s[65]++,
          react.useMemo(
            () => (
              cov_i4jludcll().f[9]++,
              cov_i4jludcll().s[66]++,
              cov_i4jludcll().b[43][0]++,
              (
                null === template ||
                (cov_i4jludcll().b[43][1]++, void 0 === template)
                  ? void cov_i4jludcll().b[42][0]++
                  : (cov_i4jludcll().b[42][1]++, template.variables)
              )
                ? (cov_i4jludcll().b[41][1]++,
                  cov_i4jludcll().s[68]++,
                  [...template.variables].sort(
                    (a, b) => (
                      cov_i4jludcll().f[10]++,
                      cov_i4jludcll().s[69]++,
                      cov_i4jludcll().b[44][0]++,
                      (a.displayOrder || (cov_i4jludcll().b[44][1]++, 0)) -
                        (cov_i4jludcll().b[45][0]++,
                        b.displayOrder || (cov_i4jludcll().b[45][1]++, 0))
                    )
                  ))
                : (cov_i4jludcll().b[41][0]++, cov_i4jludcll().s[67]++, [])
            ),
            [
              (cov_i4jludcll().b[47][0]++,
              null === template ||
              (cov_i4jludcll().b[47][1]++, void 0 === template)
                ? void cov_i4jludcll().b[46][0]++
                : (cov_i4jludcll().b[46][1]++, template.variables)),
            ]
          ))
        return (
          cov_i4jludcll().s[70]++,
          template
            ? (cov_i4jludcll().b[48][1]++,
              cov_i4jludcll().s[72]++,
              (0, jsx_runtime.jsx)(dialog.lG, {
                open,
                onOpenChange,
                children: (0, jsx_runtime.jsxs)(dialog.Cf, {
                  className: (0, utils.cn)(
                    'max-w-2xl max-h-[90vh] p-0',
                    className
                  ),
                  children: [
                    (0, jsx_runtime.jsxs)(dialog.c7, {
                      className: 'px-6 py-4 border-b',
                      children: [
                        (0, jsx_runtime.jsxs)(dialog.L3, {
                          className: 'flex items-center gap-2',
                          children: [
                            (0, jsx_runtime.jsx)('span', {
                              className: 'text-2xl',
                              children: template.categoryIcon,
                            }),
                            (0, jsx_runtime.jsxs)('div', {
                              children: [
                                (0, jsx_runtime.jsx)('div', {
                                  children: 'Create from Template',
                                }),
                                (0, jsx_runtime.jsx)('div', {
                                  className:
                                    'text-sm font-normal text-muted-foreground',
                                  children: template.name,
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, jsx_runtime.jsx)(dialog.rr, {
                          children: template.description,
                        }),
                      ],
                    }),
                    (0, jsx_runtime.jsxs)('form', {
                      onSubmit: async (e) => {
                        if (
                          (cov_i4jludcll().f[8]++,
                          cov_i4jludcll().s[56]++,
                          e.preventDefault(),
                          cov_i4jludcll().s[57]++,
                          !(() => {
                            var _template_variables
                            cov_i4jludcll().f[6]++
                            const newErrors = (cov_i4jludcll().s[26]++, {})
                            return (
                              cov_i4jludcll().s[27]++,
                              title.trim()
                                ? cov_i4jludcll().b[8][1]++
                                : (cov_i4jludcll().b[8][0]++,
                                  cov_i4jludcll().s[28]++,
                                  (newErrors.title = 'Note title is required')),
                              cov_i4jludcll().s[29]++,
                              cov_i4jludcll().b[10][0]++,
                              null === template ||
                              (cov_i4jludcll().b[10][1]++, void 0 === template)
                                ? cov_i4jludcll().b[9][0]++
                                : (cov_i4jludcll().b[9][1]++,
                                  cov_i4jludcll().b[12][0]++,
                                  null ===
                                    (_template_variables =
                                      template.variables) ||
                                  (cov_i4jludcll().b[12][1]++,
                                  void 0 === _template_variables)
                                    ? cov_i4jludcll().b[11][0]++
                                    : (cov_i4jludcll().b[11][1]++,
                                      _template_variables.forEach(
                                        (variable) => {
                                          cov_i4jludcll().f[7]++
                                          const value =
                                            (cov_i4jludcll().s[30]++,
                                            variables[variable.name])
                                          if (
                                            (cov_i4jludcll().s[31]++,
                                            cov_i4jludcll().b[14][0]++,
                                            variable.required &&
                                              (cov_i4jludcll().b[14][1]++,
                                              !value ||
                                                (cov_i4jludcll().b[14][2]++,
                                                'string' == typeof value &&
                                                  (cov_i4jludcll().b[14][3]++,
                                                  !value.trim()))))
                                          )
                                            return (
                                              cov_i4jludcll().b[13][0]++,
                                              cov_i4jludcll().s[32]++,
                                              (newErrors[variable.name] =
                                                `${variable.label} is required`),
                                              void cov_i4jludcll().s[33]++
                                            )
                                          if (
                                            (cov_i4jludcll().b[13][1]++,
                                            cov_i4jludcll().s[34]++,
                                            cov_i4jludcll().b[16][0]++,
                                            !value ||
                                              (cov_i4jludcll().b[16][1]++,
                                              'string' == typeof value &&
                                                (cov_i4jludcll().b[16][2]++,
                                                !value.trim())))
                                          )
                                            return (
                                              cov_i4jludcll().b[15][0]++,
                                              void cov_i4jludcll().s[35]++
                                            )
                                          if (
                                            (cov_i4jludcll().b[15][1]++,
                                            cov_i4jludcll().s[36]++,
                                            'number' === variable.type)
                                          ) {
                                            var _variable_validation,
                                              _variable_validation1
                                            cov_i4jludcll().b[17][0]++
                                            const numValue =
                                              (cov_i4jludcll().s[37]++,
                                              Number(value))
                                            ;(cov_i4jludcll().s[38]++,
                                              isNaN(numValue)
                                                ? (cov_i4jludcll().b[18][0]++,
                                                  cov_i4jludcll().s[39]++,
                                                  (newErrors[variable.name] =
                                                    'Must be a valid number'))
                                                : (cov_i4jludcll().b[18][1]++,
                                                  cov_i4jludcll().s[40]++,
                                                  cov_i4jludcll().b[20][0]++,
                                                  void 0 !==
                                                    (cov_i4jludcll().b[22][0]++,
                                                    null ===
                                                      (_variable_validation =
                                                        variable.validation) ||
                                                    (cov_i4jludcll().b[22][1]++,
                                                    void 0 ===
                                                      _variable_validation)
                                                      ? void cov_i4jludcll()
                                                          .b[21][0]++
                                                      : (cov_i4jludcll()
                                                          .b[21][1]++,
                                                        _variable_validation.min)) &&
                                                  (cov_i4jludcll().b[20][1]++,
                                                  numValue <
                                                    variable.validation.min)
                                                    ? (cov_i4jludcll()
                                                        .b[19][0]++,
                                                      cov_i4jludcll().s[41]++,
                                                      (newErrors[
                                                        variable.name
                                                      ] =
                                                        `Must be at least ${variable.validation.min}`))
                                                    : (cov_i4jludcll()
                                                        .b[19][1]++,
                                                      cov_i4jludcll().s[42]++,
                                                      cov_i4jludcll()
                                                        .b[24][0]++,
                                                      void 0 !==
                                                        (cov_i4jludcll()
                                                          .b[26][0]++,
                                                        null ===
                                                          (_variable_validation1 =
                                                            variable.validation) ||
                                                        (cov_i4jludcll()
                                                          .b[26][1]++,
                                                        void 0 ===
                                                          _variable_validation1)
                                                          ? void cov_i4jludcll()
                                                              .b[25][0]++
                                                          : (cov_i4jludcll()
                                                              .b[25][1]++,
                                                            _variable_validation1.max)) &&
                                                      (cov_i4jludcll()
                                                        .b[24][1]++,
                                                      numValue >
                                                        variable.validation.max)
                                                        ? (cov_i4jludcll()
                                                            .b[23][0]++,
                                                          cov_i4jludcll()
                                                            .s[43]++,
                                                          (newErrors[
                                                            variable.name
                                                          ] =
                                                            `Must be at most ${variable.validation.max}`))
                                                        : cov_i4jludcll()
                                                            .b[23][1]++)))
                                          } else cov_i4jludcll().b[17][1]++
                                          var _variable_validation2,
                                            _variable_validation3,
                                            _variable_validation4
                                          if (
                                            (cov_i4jludcll().s[44]++,
                                            'string' == typeof value)
                                          )
                                            if (
                                              (cov_i4jludcll().b[27][0]++,
                                              cov_i4jludcll().s[45]++,
                                              cov_i4jludcll().b[29][0]++,
                                              cov_i4jludcll().b[31][0]++,
                                              (null ===
                                                (_variable_validation2 =
                                                  variable.validation) ||
                                              (cov_i4jludcll().b[31][1]++,
                                              void 0 === _variable_validation2)
                                                ? void cov_i4jludcll()
                                                    .b[30][0]++
                                                : (cov_i4jludcll().b[30][1]++,
                                                  _variable_validation2.minLength)) &&
                                              (cov_i4jludcll().b[29][1]++,
                                              value.length <
                                                variable.validation.minLength)
                                                ? (cov_i4jludcll().b[28][0]++,
                                                  cov_i4jludcll().s[46]++,
                                                  (newErrors[variable.name] =
                                                    `Must be at least ${variable.validation.minLength} characters`))
                                                : cov_i4jludcll().b[28][1]++,
                                              cov_i4jludcll().s[47]++,
                                              cov_i4jludcll().b[33][0]++,
                                              cov_i4jludcll().b[35][0]++,
                                              (null ===
                                                (_variable_validation3 =
                                                  variable.validation) ||
                                              (cov_i4jludcll().b[35][1]++,
                                              void 0 === _variable_validation3)
                                                ? void cov_i4jludcll()
                                                    .b[34][0]++
                                                : (cov_i4jludcll().b[34][1]++,
                                                  _variable_validation3.maxLength)) &&
                                              (cov_i4jludcll().b[33][1]++,
                                              value.length >
                                                variable.validation.maxLength)
                                                ? (cov_i4jludcll().b[32][0]++,
                                                  cov_i4jludcll().s[48]++,
                                                  (newErrors[variable.name] =
                                                    `Must be at most ${variable.validation.maxLength} characters`))
                                                : cov_i4jludcll().b[32][1]++,
                                              cov_i4jludcll().s[49]++,
                                              cov_i4jludcll().b[38][0]++,
                                              null ===
                                                (_variable_validation4 =
                                                  variable.validation) ||
                                              (cov_i4jludcll().b[38][1]++,
                                              void 0 === _variable_validation4)
                                                ? void cov_i4jludcll()
                                                    .b[37][0]++
                                                : (cov_i4jludcll().b[37][1]++,
                                                  _variable_validation4.pattern))
                                            ) {
                                              cov_i4jludcll().b[36][0]++
                                              const regex =
                                                (cov_i4jludcll().s[50]++,
                                                new RegExp(
                                                  variable.validation.pattern
                                                ))
                                              ;(cov_i4jludcll().s[51]++,
                                                regex.test(value)
                                                  ? cov_i4jludcll().b[39][1]++
                                                  : (cov_i4jludcll().b[39][0]++,
                                                    cov_i4jludcll().s[52]++,
                                                    (newErrors[variable.name] =
                                                      'Invalid format')))
                                            } else cov_i4jludcll().b[36][1]++
                                          else cov_i4jludcll().b[27][1]++
                                        }
                                      ))),
                              cov_i4jludcll().s[53]++,
                              setErrors(newErrors),
                              cov_i4jludcll().s[54]++,
                              0 === Object.keys(newErrors).length
                            )
                          })())
                        )
                          return (
                            cov_i4jludcll().b[40][0]++,
                            void cov_i4jludcll().s[58]++
                          )
                        ;(cov_i4jludcll().b[40][1]++,
                          cov_i4jludcll().s[59]++,
                          setIsSubmitting(!0),
                          cov_i4jludcll().s[60]++)
                        try {
                          ;(cov_i4jludcll().s[61]++,
                            await onSubmit(title.trim(), variables),
                            cov_i4jludcll().s[62]++,
                            onOpenChange(!1))
                        } catch (error) {
                          ;(cov_i4jludcll().s[63]++,
                            console.error(
                              'Error creating note from template:',
                              error
                            ))
                        } finally {
                          ;(cov_i4jludcll().s[64]++, setIsSubmitting(!1))
                        }
                      },
                      className: 'flex flex-col h-full',
                      children: [
                        (0, jsx_runtime.jsx)(scroll_area.F, {
                          className: 'flex-1 px-6 py-4',
                          children: (0, jsx_runtime.jsxs)('div', {
                            className: 'space-y-6',
                            children: [
                              (0, jsx_runtime.jsxs)('div', {
                                className: 'space-y-2',
                                children: [
                                  (0, jsx_runtime.jsxs)(label.J, {
                                    htmlFor: 'title',
                                    className: 'flex items-center gap-2',
                                    children: [
                                      (0, jsx_runtime.jsx)(file_text.A, {
                                        className: 'h-4 w-4',
                                      }),
                                      'Note Title *',
                                    ],
                                  }),
                                  (0, jsx_runtime.jsx)(input.p, {
                                    id: 'title',
                                    value: title,
                                    onChange: (e) => (
                                      cov_i4jludcll().f[11]++,
                                      cov_i4jludcll().s[73]++,
                                      setTitle(e.target.value)
                                    ),
                                    placeholder: 'Enter note title...',
                                    className: (0, utils.cn)(
                                      (cov_i4jludcll().b[49][0]++,
                                      errors.title &&
                                        (cov_i4jludcll().b[49][1]++,
                                        'border-destructive'))
                                    ),
                                  }),
                                  (cov_i4jludcll().b[50][0]++,
                                  errors.title &&
                                    (cov_i4jludcll().b[50][1]++,
                                    (0, jsx_runtime.jsx)('p', {
                                      className: 'text-sm text-destructive',
                                      children: errors.title,
                                    }))),
                                ],
                              }),
                              (cov_i4jludcll().b[51][0]++,
                              sortedVariables.length > 0 &&
                                (cov_i4jludcll().b[51][1]++,
                                (0, jsx_runtime.jsxs)('div', {
                                  className: 'space-y-4',
                                  children: [
                                    (0, jsx_runtime.jsxs)('div', {
                                      className: 'flex items-center gap-2',
                                      children: [
                                        (0, jsx_runtime.jsx)('h3', {
                                          className: 'text-lg font-semibold',
                                          children: 'Template Fields',
                                        }),
                                        (0, jsx_runtime.jsxs)(badge.E, {
                                          variant: 'secondary',
                                          children: [
                                            sortedVariables.length,
                                            ' fields',
                                          ],
                                        }),
                                      ],
                                    }),
                                    sortedVariables.map(
                                      (variable) => (
                                        cov_i4jludcll().f[12]++,
                                        cov_i4jludcll().s[74]++,
                                        (0, jsx_runtime.jsx)(
                                          VariableInput,
                                          {
                                            variable,
                                            value: variables[variable.name],
                                            onChange: (value) => (
                                              cov_i4jludcll().f[13]++,
                                              cov_i4jludcll().s[75]++,
                                              ((name, value) => {
                                                ;(cov_i4jludcll().f[3]++,
                                                  cov_i4jludcll().s[18]++,
                                                  setVariables(
                                                    (prev) => (
                                                      cov_i4jludcll().f[4]++,
                                                      cov_i4jludcll().s[19]++,
                                                      { ...prev, [name]: value }
                                                    )
                                                  ),
                                                  cov_i4jludcll().s[20]++,
                                                  errors[name]
                                                    ? (cov_i4jludcll()
                                                        .b[7][0]++,
                                                      cov_i4jludcll().s[21]++,
                                                      setErrors((prev) => {
                                                        cov_i4jludcll().f[5]++
                                                        const newErrors =
                                                          (cov_i4jludcll()
                                                            .s[22]++,
                                                          { ...prev })
                                                        return (
                                                          cov_i4jludcll()
                                                            .s[23]++,
                                                          delete newErrors[
                                                            name
                                                          ],
                                                          cov_i4jludcll()
                                                            .s[24]++,
                                                          newErrors
                                                        )
                                                      }))
                                                    : cov_i4jludcll().b[7][1]++)
                                              })(variable.name, value)
                                            ),
                                            error: errors[variable.name],
                                          },
                                          variable.name
                                        )
                                      )
                                    ),
                                  ],
                                }))),
                            ],
                          }),
                        }),
                        (0, jsx_runtime.jsxs)(dialog.Es, {
                          className: 'px-6 py-4 border-t',
                          children: [
                            (0, jsx_runtime.jsx)(ui_button.$, {
                              type: 'button',
                              variant: 'outline',
                              onClick: () => (
                                cov_i4jludcll().f[14]++,
                                cov_i4jludcll().s[76]++,
                                onOpenChange(!1)
                              ),
                              disabled: isSubmitting,
                              children: 'Cancel',
                            }),
                            (0, jsx_runtime.jsx)(ui_button.$, {
                              type: 'submit',
                              disabled: isSubmitting,
                              className: 'min-w-[120px]',
                              children: isSubmitting
                                ? (cov_i4jludcll().b[52][0]++,
                                  (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                    children: [
                                      (0, jsx_runtime.jsx)(loader_circle.A, {
                                        className: 'mr-2 h-4 w-4 animate-spin',
                                      }),
                                      'Creating...',
                                    ],
                                  }))
                                : (cov_i4jludcll().b[52][1]++,
                                  (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                    children: [
                                      (0, jsx_runtime.jsx)(save.A, {
                                        className: 'mr-2 h-4 w-4',
                                      }),
                                      'Create Note',
                                    ],
                                  })),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }))
            : (cov_i4jludcll().b[48][0]++, cov_i4jludcll().s[71]++, null)
        )
      }
      function VariableInput({ variable, value, onChange, error }) {
        ;(cov_i4jludcll().f[15]++, cov_i4jludcll().s[77]++)
        cov_i4jludcll().s[84]++
        return (
          cov_i4jludcll().s[107]++,
          (0, jsx_runtime.jsxs)('div', {
            className: 'space-y-2',
            children: [
              (0, jsx_runtime.jsxs)(label.J, {
                className: 'flex items-center gap-2',
                children: [
                  (() => {
                    switch (
                      (cov_i4jludcll().f[16]++,
                      cov_i4jludcll().s[78]++,
                      variable.type)
                    ) {
                      case 'date':
                        cov_i4jludcll().b[53][0]++
                      case 'datetime':
                        return (
                          cov_i4jludcll().b[53][1]++,
                          cov_i4jludcll().s[79]++,
                          (0, jsx_runtime.jsx)(calendar.A, {
                            className: 'h-4 w-4',
                          })
                        )
                      case 'time':
                        return (
                          cov_i4jludcll().b[53][2]++,
                          cov_i4jludcll().s[80]++,
                          (0, jsx_runtime.jsx)(clock.A, {
                            className: 'h-4 w-4',
                          })
                        )
                      case 'tag':
                        return (
                          cov_i4jludcll().b[53][3]++,
                          cov_i4jludcll().s[81]++,
                          (0, jsx_runtime.jsx)(hash.A, { className: 'h-4 w-4' })
                        )
                      case 'user':
                        return (
                          cov_i4jludcll().b[53][4]++,
                          cov_i4jludcll().s[82]++,
                          (0, jsx_runtime.jsx)(user.A, { className: 'h-4 w-4' })
                        )
                      default:
                        return (
                          cov_i4jludcll().b[53][5]++,
                          cov_i4jludcll().s[83]++,
                          (0, jsx_runtime.jsx)(file_text.A, {
                            className: 'h-4 w-4',
                          })
                        )
                    }
                  })(),
                  variable.label,
                  (cov_i4jludcll().b[86][0]++,
                  variable.required &&
                    (cov_i4jludcll().b[86][1]++,
                    (0, jsx_runtime.jsx)('span', {
                      className: 'text-destructive',
                      children: '*',
                    }))),
                ],
              }),
              (cov_i4jludcll().b[87][0]++,
              variable.description &&
                (cov_i4jludcll().b[87][1]++,
                (0, jsx_runtime.jsx)('p', {
                  className: 'text-sm text-muted-foreground',
                  children: variable.description,
                }))),
              (() => {
                switch (
                  (cov_i4jludcll().f[17]++,
                  cov_i4jludcll().s[85]++,
                  variable.type)
                ) {
                  case 'textarea':
                    return (
                      cov_i4jludcll().b[54][0]++,
                      cov_i4jludcll().s[86]++,
                      (0, jsx_runtime.jsx)(ui_textarea.T, {
                        value:
                          (cov_i4jludcll().b[55][0]++,
                          value || (cov_i4jludcll().b[55][1]++, '')),
                        onChange: (e) => (
                          cov_i4jludcll().f[18]++,
                          cov_i4jludcll().s[87]++,
                          onChange(e.target.value)
                        ),
                        placeholder: variable.placeholder,
                        className: (0, utils.cn)(
                          (cov_i4jludcll().b[56][0]++,
                          error &&
                            (cov_i4jludcll().b[56][1]++, 'border-destructive'))
                        ),
                        rows: 3,
                      })
                    )
                  case 'number':
                    var _variable_validation, _variable_validation1
                    return (
                      cov_i4jludcll().b[54][1]++,
                      cov_i4jludcll().s[88]++,
                      (0, jsx_runtime.jsx)(input.p, {
                        type: 'number',
                        value:
                          (cov_i4jludcll().b[57][0]++,
                          value || (cov_i4jludcll().b[57][1]++, '')),
                        onChange: (e) => (
                          cov_i4jludcll().f[19]++,
                          cov_i4jludcll().s[89]++,
                          onChange(e.target.value)
                        ),
                        placeholder: variable.placeholder,
                        min:
                          (cov_i4jludcll().b[59][0]++,
                          null ===
                            (_variable_validation = variable.validation) ||
                          (cov_i4jludcll().b[59][1]++,
                          void 0 === _variable_validation)
                            ? void cov_i4jludcll().b[58][0]++
                            : (cov_i4jludcll().b[58][1]++,
                              _variable_validation.min)),
                        max:
                          (cov_i4jludcll().b[61][0]++,
                          null ===
                            (_variable_validation1 = variable.validation) ||
                          (cov_i4jludcll().b[61][1]++,
                          void 0 === _variable_validation1)
                            ? void cov_i4jludcll().b[60][0]++
                            : (cov_i4jludcll().b[60][1]++,
                              _variable_validation1.max)),
                        className: (0, utils.cn)(
                          (cov_i4jludcll().b[62][0]++,
                          error &&
                            (cov_i4jludcll().b[62][1]++, 'border-destructive'))
                        ),
                      })
                    )
                  case 'date':
                    return (
                      cov_i4jludcll().b[54][2]++,
                      cov_i4jludcll().s[90]++,
                      (0, jsx_runtime.jsx)(input.p, {
                        type: 'date',
                        value:
                          (cov_i4jludcll().b[63][0]++,
                          value || (cov_i4jludcll().b[63][1]++, '')),
                        onChange: (e) => (
                          cov_i4jludcll().f[20]++,
                          cov_i4jludcll().s[91]++,
                          onChange(e.target.value)
                        ),
                        className: (0, utils.cn)(
                          (cov_i4jludcll().b[64][0]++,
                          error &&
                            (cov_i4jludcll().b[64][1]++, 'border-destructive'))
                        ),
                      })
                    )
                  case 'time':
                    return (
                      cov_i4jludcll().b[54][3]++,
                      cov_i4jludcll().s[92]++,
                      (0, jsx_runtime.jsx)(input.p, {
                        type: 'time',
                        value:
                          (cov_i4jludcll().b[65][0]++,
                          value || (cov_i4jludcll().b[65][1]++, '')),
                        onChange: (e) => (
                          cov_i4jludcll().f[21]++,
                          cov_i4jludcll().s[93]++,
                          onChange(e.target.value)
                        ),
                        className: (0, utils.cn)(
                          (cov_i4jludcll().b[66][0]++,
                          error &&
                            (cov_i4jludcll().b[66][1]++, 'border-destructive'))
                        ),
                      })
                    )
                  case 'datetime':
                    return (
                      cov_i4jludcll().b[54][4]++,
                      cov_i4jludcll().s[94]++,
                      (0, jsx_runtime.jsx)(input.p, {
                        type: 'datetime-local',
                        value:
                          (cov_i4jludcll().b[67][0]++,
                          value || (cov_i4jludcll().b[67][1]++, '')),
                        onChange: (e) => (
                          cov_i4jludcll().f[22]++,
                          cov_i4jludcll().s[95]++,
                          onChange(e.target.value)
                        ),
                        className: (0, utils.cn)(
                          (cov_i4jludcll().b[68][0]++,
                          error &&
                            (cov_i4jludcll().b[68][1]++, 'border-destructive'))
                        ),
                      })
                    )
                  case 'boolean':
                    return (
                      cov_i4jludcll().b[54][5]++,
                      cov_i4jludcll().s[96]++,
                      (0, jsx_runtime.jsxs)('div', {
                        className: 'flex items-center space-x-2',
                        children: [
                          (0, jsx_runtime.jsx)(ui_checkbox.S, {
                            checked:
                              (cov_i4jludcll().b[69][0]++,
                              value || (cov_i4jludcll().b[69][1]++, !1)),
                            onCheckedChange: onChange,
                          }),
                          (0, jsx_runtime.jsx)('span', {
                            className: 'text-sm',
                            children:
                              (cov_i4jludcll().b[70][0]++,
                              variable.placeholder ||
                                (cov_i4jludcll().b[70][1]++, 'Yes')),
                          }),
                        ],
                      })
                    )
                  case 'select':
                    var _variable_options
                    return (
                      cov_i4jludcll().b[54][6]++,
                      cov_i4jludcll().s[97]++,
                      (0, jsx_runtime.jsxs)(ui_select.l6, {
                        value:
                          (cov_i4jludcll().b[71][0]++,
                          value || (cov_i4jludcll().b[71][1]++, '')),
                        onValueChange: onChange,
                        children: [
                          (0, jsx_runtime.jsx)(ui_select.bq, {
                            className: (0, utils.cn)(
                              (cov_i4jludcll().b[72][0]++,
                              error &&
                                (cov_i4jludcll().b[72][1]++,
                                'border-destructive'))
                            ),
                            children: (0, jsx_runtime.jsx)(ui_select.yv, {
                              placeholder:
                                (cov_i4jludcll().b[73][0]++,
                                variable.placeholder ||
                                  (cov_i4jludcll().b[73][1]++,
                                  'Select an option')),
                            }),
                          }),
                          (0, jsx_runtime.jsx)(ui_select.gC, {
                            children:
                              (cov_i4jludcll().b[75][0]++,
                              null === (_variable_options = variable.options) ||
                              (cov_i4jludcll().b[75][1]++,
                              void 0 === _variable_options)
                                ? void cov_i4jludcll().b[74][0]++
                                : (cov_i4jludcll().b[74][1]++,
                                  _variable_options.map(
                                    (option) => (
                                      cov_i4jludcll().f[23]++,
                                      cov_i4jludcll().s[98]++,
                                      (0, jsx_runtime.jsx)(
                                        ui_select.eb,
                                        { value: option, children: option },
                                        option
                                      )
                                    )
                                  ))),
                          }),
                        ],
                      })
                    )
                  case 'multi-select':
                    var _variable_options1
                    return (
                      cov_i4jludcll().b[54][7]++,
                      cov_i4jludcll().s[99]++,
                      (0, jsx_runtime.jsx)('div', {
                        className: 'space-y-2',
                        children:
                          (cov_i4jludcll().b[77][0]++,
                          null === (_variable_options1 = variable.options) ||
                          (cov_i4jludcll().b[77][1]++,
                          void 0 === _variable_options1)
                            ? void cov_i4jludcll().b[76][0]++
                            : (cov_i4jludcll().b[76][1]++,
                              _variable_options1.map((option) => {
                                cov_i4jludcll().f[24]++
                                const selectedValues =
                                  (cov_i4jludcll().s[100]++,
                                  Array.isArray(value)
                                    ? (cov_i4jludcll().b[78][0]++, value)
                                    : (cov_i4jludcll().b[78][1]++, []))
                                return (
                                  cov_i4jludcll().s[101]++,
                                  (0, jsx_runtime.jsxs)(
                                    'div',
                                    {
                                      className: 'flex items-center space-x-2',
                                      children: [
                                        (0, jsx_runtime.jsx)(ui_checkbox.S, {
                                          checked:
                                            selectedValues.includes(option),
                                          onCheckedChange: (checked) => {
                                            cov_i4jludcll().f[25]++
                                            const newValues =
                                              (cov_i4jludcll().s[102]++,
                                              checked
                                                ? (cov_i4jludcll().b[79][0]++,
                                                  [...selectedValues, option])
                                                : (cov_i4jludcll().b[79][1]++,
                                                  selectedValues.filter(
                                                    (v) => (
                                                      cov_i4jludcll().f[26]++,
                                                      cov_i4jludcll().s[103]++,
                                                      v !== option
                                                    )
                                                  )))
                                            ;(cov_i4jludcll().s[104]++,
                                              onChange(newValues))
                                          },
                                        }),
                                        (0, jsx_runtime.jsx)('span', {
                                          className: 'text-sm',
                                          children: option,
                                        }),
                                      ],
                                    },
                                    option
                                  )
                                )
                              }))),
                      })
                    )
                  default:
                    var _variable_validation2, _variable_validation3
                    return (
                      cov_i4jludcll().b[54][8]++,
                      cov_i4jludcll().s[105]++,
                      (0, jsx_runtime.jsx)(input.p, {
                        value:
                          (cov_i4jludcll().b[80][0]++,
                          value || (cov_i4jludcll().b[80][1]++, '')),
                        onChange: (e) => (
                          cov_i4jludcll().f[27]++,
                          cov_i4jludcll().s[106]++,
                          onChange(e.target.value)
                        ),
                        placeholder: variable.placeholder,
                        maxLength:
                          (cov_i4jludcll().b[82][0]++,
                          null ===
                            (_variable_validation2 = variable.validation) ||
                          (cov_i4jludcll().b[82][1]++,
                          void 0 === _variable_validation2)
                            ? void cov_i4jludcll().b[81][0]++
                            : (cov_i4jludcll().b[81][1]++,
                              _variable_validation2.maxLength)),
                        pattern:
                          (cov_i4jludcll().b[84][0]++,
                          null ===
                            (_variable_validation3 = variable.validation) ||
                          (cov_i4jludcll().b[84][1]++,
                          void 0 === _variable_validation3)
                            ? void cov_i4jludcll().b[83][0]++
                            : (cov_i4jludcll().b[83][1]++,
                              _variable_validation3.pattern)),
                        className: (0, utils.cn)(
                          (cov_i4jludcll().b[85][0]++,
                          error &&
                            (cov_i4jludcll().b[85][1]++, 'border-destructive'))
                        ),
                      })
                    )
                }
              })(),
              (cov_i4jludcll().b[88][0]++,
              variable.helpText &&
                (cov_i4jludcll().b[88][1]++,
                (0, jsx_runtime.jsx)('p', {
                  className: 'text-xs text-muted-foreground',
                  children: variable.helpText,
                }))),
              (cov_i4jludcll().b[89][0]++,
              error &&
                (cov_i4jludcll().b[89][1]++,
                (0, jsx_runtime.jsx)('p', {
                  className: 'text-sm text-destructive',
                  children: error,
                }))),
            ],
          })
        )
      }
      ;(cov_i4jludcll(),
        cov_i4jludcll().s[108]++,
        (TemplateVariableForm.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'TemplateVariableForm',
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
            template: {
              required: !0,
              tsType: {
                name: 'union',
                raw: 'Template | null',
                elements: [{ name: 'Template' }, { name: 'null' }],
              },
              description: '',
            },
            onSubmit: {
              required: !0,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '(title: string, variables: Record<string, any>) => Promise<void>',
                signature: {
                  arguments: [
                    { type: { name: 'string' }, name: 'title' },
                    {
                      type: {
                        name: 'Record',
                        elements: [{ name: 'string' }, { name: 'any' }],
                        raw: 'Record<string, any>',
                      },
                      name: 'variables',
                    },
                  ],
                  return: {
                    name: 'Promise',
                    elements: [{ name: 'void' }],
                    raw: 'Promise<void>',
                  },
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
      var dist = __webpack_require__(
          '../../node_modules/.pnpm/@storybook+test@8.6.14_storybook@9.0.18_@testing-library+dom@10.4.0_prettier@3.6.2_/node_modules/@storybook/test/dist/index.mjs'
        ),
        template_variable_form_stories_console = __webpack_require__(
          '../../node_modules/.pnpm/console-browserify@1.2.0/node_modules/console-browserify/index.js'
        )
      const template_variable_form_stories = {
          title: 'UI/Templates/TemplateVariableForm',
          component: TemplateVariableForm,
          parameters: { layout: 'centered' },
          tags: ['autodocs'],
          argTypes: {
            open: {
              control: 'boolean',
              description: 'Whether the form is open',
            },
            onOpenChange: {
              action: 'onOpenChange',
              description: 'Callback when open state changes',
            },
            onSubmit: {
              action: 'onSubmit',
              description: 'Callback when form is submitted',
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
        simpleTemplate = {
          id: '1',
          name: 'Meeting Notes',
          description: 'Capture meeting details and action items',
          category: 'work',
          categoryName: 'Work',
          categoryIcon: '💼',
          content:
            '# Meeting: {{title}}\n**Date:** {{date}}\n**Attendees:** {{attendees}}\n\n## Notes\n{{notes}}',
          variables: [
            {
              name: 'title',
              type: 'text',
              label: 'Meeting Title',
              placeholder: 'e.g., Weekly Team Sync',
              required: !0,
              displayOrder: 1,
            },
            {
              name: 'date',
              type: 'date',
              label: 'Meeting Date',
              required: !0,
              displayOrder: 2,
            },
            {
              name: 'attendees',
              type: 'text',
              label: 'Attendees',
              placeholder: 'List of participants',
              required: !1,
              displayOrder: 3,
            },
            {
              name: 'notes',
              type: 'textarea',
              label: 'Meeting Notes',
              placeholder: 'Key discussion points and decisions',
              required: !1,
              displayOrder: 4,
            },
          ],
          variableCount: 4,
          rating: 4.8,
          usageCount: 156,
          isSystem: !0,
          tags: ['meeting', 'work'],
          isPublic: !0,
          createdAt: '2024-01-01T00:00:00.000Z',
          updatedAt: '2024-01-15T00:00:00.000Z',
          ratingCount: 32,
        },
        complexTemplate = {
          id: '2',
          name: 'Project Kickoff',
          description: 'Comprehensive project planning template',
          category: 'work',
          categoryName: 'Work',
          categoryIcon: '🚀',
          content:
            '# Project: {{projectName}}\n\n## Overview\n{{description}}\n\n## Team\n{{teamMembers}}\n\n## Timeline\n- Start: {{startDate}}\n- End: {{endDate}}\n- Duration: {{duration}} weeks\n\n## Priority: {{priority}}\n## Budget: ${{budget}}\n\n## Status\n- [ ] Planning {{planning}}\n- [ ] In Progress\n- [ ] Complete',
          variables: [
            {
              name: 'projectName',
              type: 'text',
              label: 'Project Name',
              placeholder: 'Enter project name',
              required: !0,
              displayOrder: 1,
              validation: { minLength: 3, maxLength: 50 },
            },
            {
              name: 'description',
              type: 'textarea',
              label: 'Project Description',
              placeholder: 'Describe the project goals and objectives',
              required: !0,
              displayOrder: 2,
              helpText:
                'Provide a clear overview of what this project aims to achieve',
            },
            {
              name: 'teamMembers',
              type: 'multi-select',
              label: 'Team Members',
              options: [
                'John Doe',
                'Jane Smith',
                'Mike Johnson',
                'Sarah Williams',
                'Tom Brown',
              ],
              required: !0,
              displayOrder: 3,
            },
            {
              name: 'startDate',
              type: 'date',
              label: 'Start Date',
              required: !0,
              displayOrder: 4,
            },
            {
              name: 'endDate',
              type: 'date',
              label: 'End Date',
              required: !0,
              displayOrder: 5,
            },
            {
              name: 'duration',
              type: 'number',
              label: 'Duration (weeks)',
              placeholder: 'Project duration',
              required: !0,
              displayOrder: 6,
              validation: { min: 1, max: 52 },
            },
            {
              name: 'priority',
              type: 'select',
              label: 'Priority Level',
              options: ['Low', 'Medium', 'High', 'Critical'],
              required: !0,
              displayOrder: 7,
              defaultValue: 'Medium',
            },
            {
              name: 'budget',
              type: 'number',
              label: 'Budget',
              placeholder: 'Project budget in USD',
              required: !1,
              displayOrder: 8,
              validation: { min: 0 },
            },
            {
              name: 'planning',
              type: 'boolean',
              label: 'Planning Phase Complete',
              placeholder: 'Check if planning is complete',
              required: !1,
              displayOrder: 9,
              defaultValue: 'false',
            },
          ],
          variableCount: 9,
          rating: 4.6,
          usageCount: 89,
          isSystem: !0,
          tags: ['project', 'planning'],
          isPublic: !0,
          createdAt: '2024-01-01T00:00:00.000Z',
          updatedAt: '2024-01-15T00:00:00.000Z',
          ratingCount: 24,
        },
        timeTrackingTemplate = {
          id: '3',
          name: 'Time Entry',
          description: 'Track time spent on tasks',
          category: 'productivity',
          categoryName: 'Productivity',
          categoryIcon: '⏱️',
          content:
            '# Time Entry: {{task}}\n\n**Date:** {{date}}\n**Start:** {{startTime}}\n**End:** {{endTime}}\n**Duration:** {{hours}} hours\n\n## Notes\n{{notes}}',
          variables: [
            {
              name: 'task',
              type: 'text',
              label: 'Task Name',
              required: !0,
              displayOrder: 1,
            },
            {
              name: 'date',
              type: 'date',
              label: 'Date',
              required: !0,
              displayOrder: 2,
              defaultValue: new Date().toISOString().split('T')[0],
            },
            {
              name: 'startTime',
              type: 'time',
              label: 'Start Time',
              required: !0,
              displayOrder: 3,
            },
            {
              name: 'endTime',
              type: 'time',
              label: 'End Time',
              required: !0,
              displayOrder: 4,
            },
            {
              name: 'hours',
              type: 'number',
              label: 'Total Hours',
              required: !0,
              displayOrder: 5,
              validation: { min: 0.25, max: 24 },
            },
            {
              name: 'notes',
              type: 'textarea',
              label: 'Notes',
              placeholder: 'Additional details about the work performed',
              required: !1,
              displayOrder: 6,
            },
          ],
          variableCount: 6,
          rating: 4.5,
          usageCount: 234,
          isSystem: !1,
          tags: ['time', 'tracking'],
          isPublic: !0,
          createdAt: '2024-01-01T00:00:00.000Z',
          updatedAt: '2024-01-15T00:00:00.000Z',
          ratingCount: 18,
        },
        TemplateVariableFormDemo = ({ template, defaultOpen = !1 }) => {
          const [open, setOpen] = (0, react.useState)(defaultOpen),
            [submittedData, setSubmittedData] = (0, react.useState)(null)
          return (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
              (0, jsx_runtime.jsxs)('div', {
                className: 'space-y-4',
                children: [
                  (0, jsx_runtime.jsxs)(ui_button.$, {
                    onClick: () => setOpen(!0),
                    children: [
                      'Fill Template: ',
                      (null == template ? void 0 : template.name) || 'None',
                    ],
                  }),
                  submittedData &&
                    (0, jsx_runtime.jsxs)('div', {
                      className: 'p-4 border rounded-lg',
                      children: [
                        (0, jsx_runtime.jsx)('h3', {
                          className: 'font-semibold mb-2',
                          children: 'Submitted Data:',
                        }),
                        (0, jsx_runtime.jsxs)('p', {
                          className: 'text-sm mb-2',
                          children: ['Title: ', submittedData.title],
                        }),
                        (0, jsx_runtime.jsx)('pre', {
                          className:
                            'text-xs bg-muted p-2 rounded overflow-auto',
                          children: JSON.stringify(
                            submittedData.variables,
                            null,
                            2
                          ),
                        }),
                      ],
                    }),
                ],
              }),
              (0, jsx_runtime.jsx)(TemplateVariableForm, {
                open,
                onOpenChange: setOpen,
                template,
                onSubmit: async (title, variables) => {
                  ;(setSubmittedData({ title, variables }),
                    template_variable_form_stories_console.info(
                      'Form submitted:',
                      { title, variables }
                    ))
                },
              }),
            ],
          })
        },
        Default = {
          args: {
            open: !1,
            onOpenChange: () => {},
            template: null,
            onSubmit: async () => {},
          },
          render: () =>
            (0, jsx_runtime.jsx)(TemplateVariableFormDemo, {
              template: simpleTemplate,
            }),
        },
        OpenByDefault = {
          args: {
            open: !1,
            onOpenChange: () => {},
            template: null,
            onSubmit: async () => {},
          },
          render: () =>
            (0, jsx_runtime.jsx)(TemplateVariableFormDemo, {
              template: simpleTemplate,
              defaultOpen: !0,
            }),
        },
        ComplexForm = {
          args: {
            open: !1,
            onOpenChange: () => {},
            template: null,
            onSubmit: async () => {},
          },
          render: () =>
            (0, jsx_runtime.jsx)(TemplateVariableFormDemo, {
              template: complexTemplate,
              defaultOpen: !0,
            }),
        },
        TimeTracking = {
          args: {
            open: !1,
            onOpenChange: () => {},
            template: null,
            onSubmit: async () => {},
          },
          render: () =>
            (0, jsx_runtime.jsx)(TemplateVariableFormDemo, {
              template: timeTrackingTemplate,
              defaultOpen: !0,
            }),
        },
        NoTemplate = {
          args: {
            open: !1,
            onOpenChange: () => {},
            template: null,
            onSubmit: async () => {},
          },
          render: () =>
            (0, jsx_runtime.jsx)(TemplateVariableFormDemo, {
              template: null,
              defaultOpen: !0,
            }),
        },
        FillSimpleForm = {
          args: {
            open: !1,
            onOpenChange: () => {},
            template: null,
            onSubmit: async () => {},
          },
          render: () =>
            (0, jsx_runtime.jsx)(TemplateVariableFormDemo, {
              template: simpleTemplate,
              defaultOpen: !0,
            }),
          play: async ({ canvasElement }) => {
            const canvas = (0, dist.ux)(canvasElement)
            await (0, dist.fm)(() => {
              ;(0, dist.E3)(
                canvas.getByText('Create from Template')
              ).toBeInTheDocument()
            })
            const titleInput = canvas.getByLabelText(/Meeting Title/)
            ;(await dist.Q4.clear(titleInput),
              await dist.Q4.type(titleInput, 'Q4 Planning Meeting'))
            const dateInput = canvas.getByLabelText(/Meeting Date/)
            await dist.Q4.type(dateInput, '2024-03-15')
            const attendeesInput = canvas.getByLabelText(/Attendees/)
            await dist.Q4.type(attendeesInput, 'John, Jane, Mike')
            const notesTextarea = canvas.getByLabelText(/Meeting Notes/)
            await dist.Q4.type(
              notesTextarea,
              'Discussed Q4 objectives and key deliverables'
            )
            const submitButton = canvas.getByRole('button', {
              name: /Create Note/,
            })
            ;(await dist.Q4.click(submitButton),
              await (0, dist.fm)(() => {
                ;((0, dist.E3)(
                  canvas.queryByText('Create from Template')
                ).not.toBeInTheDocument(),
                  (0, dist.E3)(
                    canvas.getByText('Submitted Data:')
                  ).toBeInTheDocument())
              }))
          },
        },
        ValidationErrors = {
          args: {
            open: !1,
            onOpenChange: () => {},
            template: null,
            onSubmit: async () => {},
          },
          render: () =>
            (0, jsx_runtime.jsx)(TemplateVariableFormDemo, {
              template: complexTemplate,
              defaultOpen: !0,
            }),
          play: async ({ canvasElement }) => {
            const canvas = (0, dist.ux)(canvasElement)
            await (0, dist.fm)(() => {
              ;(0, dist.E3)(
                canvas.getByText('Create from Template')
              ).toBeInTheDocument()
            })
            const submitButton = canvas.getByRole('button', {
              name: /Create Note/,
            })
            ;(await dist.Q4.click(submitButton),
              await (0, dist.E3)(
                canvas.getByText('Note title is required')
              ).toBeInTheDocument(),
              await (0, dist.E3)(
                canvas.getByText('Project Name is required')
              ).toBeInTheDocument(),
              await (0, dist.E3)(
                canvas.getByText('Project Description is required')
              ).toBeInTheDocument())
            const projectNameInput = canvas.getByLabelText(/Project Name/)
            await dist.Q4.type(projectNameInput, 'AB')
            const submitAgain = canvas.getByRole('button', {
              name: /Create Note/,
            })
            ;(await dist.Q4.click(submitAgain),
              await (0, dist.E3)(
                canvas.getByText('Must be at least 3 characters')
              ).toBeInTheDocument())
          },
        },
        MultiSelectInteraction = {
          args: {
            open: !1,
            onOpenChange: () => {},
            template: null,
            onSubmit: async () => {},
          },
          render: () =>
            (0, jsx_runtime.jsx)(TemplateVariableFormDemo, {
              template: complexTemplate,
              defaultOpen: !0,
            }),
          play: async ({ canvasElement }) => {
            const canvas = (0, dist.ux)(canvasElement)
            await (0, dist.fm)(() => {
              ;(0, dist.E3)(
                canvas.getByText('Create from Template')
              ).toBeInTheDocument()
            })
            const johnCheckbox = canvas.getByRole('checkbox', {
                name: /John Doe/,
              }),
              janeCheckbox = canvas.getByRole('checkbox', {
                name: /Jane Smith/,
              }),
              mikeCheckbox = canvas.getByRole('checkbox', {
                name: /Mike Johnson/,
              })
            ;(await dist.Q4.click(johnCheckbox),
              await dist.Q4.click(janeCheckbox),
              await dist.Q4.click(mikeCheckbox),
              await (0, dist.E3)(johnCheckbox).toBeChecked(),
              await (0, dist.E3)(janeCheckbox).toBeChecked(),
              await (0, dist.E3)(mikeCheckbox).toBeChecked(),
              await dist.Q4.click(janeCheckbox),
              await (0, dist.E3)(janeCheckbox).not.toBeChecked())
          },
        },
        SelectDropdown = {
          args: {
            open: !1,
            onOpenChange: () => {},
            template: null,
            onSubmit: async () => {},
          },
          render: () =>
            (0, jsx_runtime.jsx)(TemplateVariableFormDemo, {
              template: complexTemplate,
              defaultOpen: !0,
            }),
          play: async ({ canvasElement }) => {
            const canvas = (0, dist.ux)(canvasElement)
            await (0, dist.fm)(() => {
              ;(0, dist.E3)(
                canvas.getByText('Create from Template')
              ).toBeInTheDocument()
            })
            const priorityTrigger = canvas.getByRole('combobox', {
              name: /Priority Level/,
            })
            await dist.Q4.click(priorityTrigger)
            const highOption = canvas.getByRole('option', { name: 'High' })
            ;(await dist.Q4.click(highOption),
              await (0, dist.E3)(priorityTrigger).toHaveTextContent('High'))
          },
        },
        NumberValidation = {
          args: {
            open: !1,
            onOpenChange: () => {},
            template: null,
            onSubmit: async () => {},
          },
          render: () =>
            (0, jsx_runtime.jsx)(TemplateVariableFormDemo, {
              template: complexTemplate,
              defaultOpen: !0,
            }),
          play: async ({ canvasElement }) => {
            const canvas = (0, dist.ux)(canvasElement)
            await (0, dist.fm)(() => {
              ;(0, dist.E3)(
                canvas.getByText('Create from Template')
              ).toBeInTheDocument()
            })
            const durationInput = canvas.getByLabelText(/Duration \(weeks\)/)
            await dist.Q4.type(durationInput, '100')
            const submitButton = canvas.getByRole('button', {
              name: /Create Note/,
            })
            ;(await dist.Q4.click(submitButton),
              await (0, dist.E3)(
                canvas.getByText('Must be at most 52')
              ).toBeInTheDocument(),
              await dist.Q4.clear(durationInput),
              await dist.Q4.type(durationInput, '12'),
              await (0, dist.E3)(
                canvas.queryByText('Must be at most 52')
              ).not.toBeInTheDocument())
          },
        },
        BooleanField = {
          args: {
            open: !1,
            onOpenChange: () => {},
            template: null,
            onSubmit: async () => {},
          },
          render: () =>
            (0, jsx_runtime.jsx)(TemplateVariableFormDemo, {
              template: complexTemplate,
              defaultOpen: !0,
            }),
          play: async ({ canvasElement }) => {
            const canvas = (0, dist.ux)(canvasElement)
            await (0, dist.fm)(() => {
              ;(0, dist.E3)(
                canvas.getByText('Create from Template')
              ).toBeInTheDocument()
            })
            const planningCheckbox = canvas.getByRole('checkbox', {
              name: /Check if planning is complete/,
            })
            ;(await (0, dist.E3)(planningCheckbox).not.toBeChecked(),
              await dist.Q4.click(planningCheckbox),
              await (0, dist.E3)(planningCheckbox).toBeChecked(),
              await dist.Q4.click(planningCheckbox),
              await (0, dist.E3)(planningCheckbox).not.toBeChecked())
          },
        },
        ScrollableForm = {
          args: {
            open: !1,
            onOpenChange: () => {},
            template: null,
            onSubmit: async () => {},
          },
          render: () => {
            const manyFieldsTemplate = {
              ...complexTemplate,
              id: '4',
              name: 'Extended Form',
              variables: [
                ...complexTemplate.variables,
                ...Array.from({ length: 10 }, (_, i) => ({
                  name: `field${i + 10}`,
                  type: 'text',
                  label: `Additional Field ${i + 1}`,
                  placeholder: `Enter value for field ${i + 1}`,
                  required: !1,
                  displayOrder: i + 10,
                })),
              ],
            }
            return (0, jsx_runtime.jsx)(TemplateVariableFormDemo, {
              template: manyFieldsTemplate,
              defaultOpen: !0,
            })
          },
        },
        CancelForm = {
          args: {
            open: !1,
            onOpenChange: () => {},
            template: null,
            onSubmit: async () => {},
          },
          render: () =>
            (0, jsx_runtime.jsx)(TemplateVariableFormDemo, {
              template: simpleTemplate,
              defaultOpen: !0,
            }),
          play: async ({ canvasElement }) => {
            const canvas = (0, dist.ux)(canvasElement)
            await (0, dist.fm)(() => {
              ;(0, dist.E3)(
                canvas.getByText('Create from Template')
              ).toBeInTheDocument()
            })
            const titleInput = canvas.getByLabelText(/Meeting Title/)
            await dist.Q4.type(titleInput, 'Test Meeting')
            const cancelButton = canvas.getByRole('button', { name: 'Cancel' })
            ;(await dist.Q4.click(cancelButton),
              await (0, dist.fm)(() => {
                ;(0, dist.E3)(
                  canvas.queryByText('Create from Template')
                ).not.toBeInTheDocument()
              }))
          },
        },
        LoadingState = {
          args: {
            open: !1,
            onOpenChange: () => {},
            template: null,
            onSubmit: async () => {},
          },
          render: () => {
            const [isLoading, setIsLoading] = (0, react.useState)(!1)
            return (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: [
                (0, jsx_runtime.jsx)(ui_button.$, {
                  onClick: () => setIsLoading(!isLoading),
                  children: 'Toggle Loading State',
                }),
                (0, jsx_runtime.jsx)(TemplateVariableForm, {
                  open: !0,
                  onOpenChange: () => {},
                  template: simpleTemplate,
                  onSubmit: async () => {
                    ;(setIsLoading(!0),
                      await new Promise((resolve) => setTimeout(resolve, 2e3)),
                      setIsLoading(!1))
                  },
                }),
              ],
            })
          },
        },
        MobileResponsive = {
          args: {
            open: !1,
            onOpenChange: () => {},
            template: null,
            onSubmit: async () => {},
          },
          parameters: { viewport: { defaultViewport: 'mobile1' } },
          render: () =>
            (0, jsx_runtime.jsx)(TemplateVariableFormDemo, {
              template: simpleTemplate,
              defaultOpen: !0,
            }),
        },
        __namedExportsOrder = [
          'Default',
          'OpenByDefault',
          'ComplexForm',
          'TimeTracking',
          'NoTemplate',
          'FillSimpleForm',
          'ValidationErrors',
          'MultiSelectInteraction',
          'SelectDropdown',
          'NumberValidation',
          'BooleanField',
          'ScrollableForm',
          'CancelForm',
          'LoadingState',
          'MobileResponsive',
        ]
      ;((Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              '{\n  args: {\n    open: false,\n    onOpenChange: () => {},\n    template: null,\n    onSubmit: async () => {}\n  },\n  render: () => <TemplateVariableFormDemo template={simpleTemplate} />\n}',
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
                '{\n  args: {\n    open: false,\n    onOpenChange: () => {},\n    template: null,\n    onSubmit: async () => {}\n  },\n  render: () => <TemplateVariableFormDemo template={simpleTemplate} defaultOpen={true} />\n}',
              ...OpenByDefault.parameters?.docs?.source,
            },
          },
        }),
        (ComplexForm.parameters = {
          ...ComplexForm.parameters,
          docs: {
            ...ComplexForm.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    open: false,\n    onOpenChange: () => {},\n    template: null,\n    onSubmit: async () => {}\n  },\n  render: () => <TemplateVariableFormDemo template={complexTemplate} defaultOpen={true} />\n}',
              ...ComplexForm.parameters?.docs?.source,
            },
          },
        }),
        (TimeTracking.parameters = {
          ...TimeTracking.parameters,
          docs: {
            ...TimeTracking.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    open: false,\n    onOpenChange: () => {},\n    template: null,\n    onSubmit: async () => {}\n  },\n  render: () => <TemplateVariableFormDemo template={timeTrackingTemplate} defaultOpen={true} />\n}',
              ...TimeTracking.parameters?.docs?.source,
            },
          },
        }),
        (NoTemplate.parameters = {
          ...NoTemplate.parameters,
          docs: {
            ...NoTemplate.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    open: false,\n    onOpenChange: () => {},\n    template: null,\n    onSubmit: async () => {}\n  },\n  render: () => <TemplateVariableFormDemo template={null} defaultOpen={true} />\n}',
              ...NoTemplate.parameters?.docs?.source,
            },
          },
        }),
        (FillSimpleForm.parameters = {
          ...FillSimpleForm.parameters,
          docs: {
            ...FillSimpleForm.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    open: false,\n    onOpenChange: () => {},\n    template: null,\n    onSubmit: async () => {}\n  },\n  render: () => <TemplateVariableFormDemo template={simpleTemplate} defaultOpen={true} />,\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Wait for dialog\n    await waitFor(() => {\n      expect(canvas.getByText('Create from Template')).toBeInTheDocument();\n    });\n\n    // Fill in meeting title\n    const titleInput = canvas.getByLabelText(/Meeting Title/);\n    await userEvent.clear(titleInput);\n    await userEvent.type(titleInput, 'Q4 Planning Meeting');\n\n    // Select date\n    const dateInput = canvas.getByLabelText(/Meeting Date/);\n    await userEvent.type(dateInput, '2024-03-15');\n\n    // Fill attendees\n    const attendeesInput = canvas.getByLabelText(/Attendees/);\n    await userEvent.type(attendeesInput, 'John, Jane, Mike');\n\n    // Fill notes\n    const notesTextarea = canvas.getByLabelText(/Meeting Notes/);\n    await userEvent.type(notesTextarea, 'Discussed Q4 objectives and key deliverables');\n\n    // Submit form\n    const submitButton = canvas.getByRole('button', {\n      name: /Create Note/\n    });\n    await userEvent.click(submitButton);\n\n    // Should close dialog and show submitted data\n    await waitFor(() => {\n      expect(canvas.queryByText('Create from Template')).not.toBeInTheDocument();\n      expect(canvas.getByText('Submitted Data:')).toBeInTheDocument();\n    });\n  }\n}",
              ...FillSimpleForm.parameters?.docs?.source,
            },
          },
        }),
        (ValidationErrors.parameters = {
          ...ValidationErrors.parameters,
          docs: {
            ...ValidationErrors.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    open: false,\n    onOpenChange: () => {},\n    template: null,\n    onSubmit: async () => {}\n  },\n  render: () => <TemplateVariableFormDemo template={complexTemplate} defaultOpen={true} />,\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Wait for dialog\n    await waitFor(() => {\n      expect(canvas.getByText('Create from Template')).toBeInTheDocument();\n    });\n\n    // Try to submit without filling required fields\n    const submitButton = canvas.getByRole('button', {\n      name: /Create Note/\n    });\n    await userEvent.click(submitButton);\n\n    // Should show validation errors\n    await expect(canvas.getByText('Note title is required')).toBeInTheDocument();\n    await expect(canvas.getByText('Project Name is required')).toBeInTheDocument();\n    await expect(canvas.getByText('Project Description is required')).toBeInTheDocument();\n\n    // Fill project name with too short value\n    const projectNameInput = canvas.getByLabelText(/Project Name/);\n    await userEvent.type(projectNameInput, 'AB');\n\n    // Should show min length error\n    const submitAgain = canvas.getByRole('button', {\n      name: /Create Note/\n    });\n    await userEvent.click(submitAgain);\n    await expect(canvas.getByText('Must be at least 3 characters')).toBeInTheDocument();\n  }\n}",
              ...ValidationErrors.parameters?.docs?.source,
            },
          },
        }),
        (MultiSelectInteraction.parameters = {
          ...MultiSelectInteraction.parameters,
          docs: {
            ...MultiSelectInteraction.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    open: false,\n    onOpenChange: () => {},\n    template: null,\n    onSubmit: async () => {}\n  },\n  render: () => <TemplateVariableFormDemo template={complexTemplate} defaultOpen={true} />,\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Wait for dialog\n    await waitFor(() => {\n      expect(canvas.getByText('Create from Template')).toBeInTheDocument();\n    });\n\n    // Select multiple team members\n    const johnCheckbox = canvas.getByRole('checkbox', {\n      name: /John Doe/\n    });\n    const janeCheckbox = canvas.getByRole('checkbox', {\n      name: /Jane Smith/\n    });\n    const mikeCheckbox = canvas.getByRole('checkbox', {\n      name: /Mike Johnson/\n    });\n    await userEvent.click(johnCheckbox);\n    await userEvent.click(janeCheckbox);\n    await userEvent.click(mikeCheckbox);\n\n    // Should be checked\n    await expect(johnCheckbox).toBeChecked();\n    await expect(janeCheckbox).toBeChecked();\n    await expect(mikeCheckbox).toBeChecked();\n\n    // Uncheck one\n    await userEvent.click(janeCheckbox);\n    await expect(janeCheckbox).not.toBeChecked();\n  }\n}",
              ...MultiSelectInteraction.parameters?.docs?.source,
            },
          },
        }),
        (SelectDropdown.parameters = {
          ...SelectDropdown.parameters,
          docs: {
            ...SelectDropdown.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    open: false,\n    onOpenChange: () => {},\n    template: null,\n    onSubmit: async () => {}\n  },\n  render: () => <TemplateVariableFormDemo template={complexTemplate} defaultOpen={true} />,\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Wait for dialog\n    await waitFor(() => {\n      expect(canvas.getByText('Create from Template')).toBeInTheDocument();\n    });\n\n    // Open priority dropdown\n    const priorityTrigger = canvas.getByRole('combobox', {\n      name: /Priority Level/\n    });\n    await userEvent.click(priorityTrigger);\n\n    // Select High priority\n    const highOption = canvas.getByRole('option', {\n      name: 'High'\n    });\n    await userEvent.click(highOption);\n\n    // Should show selected value\n    await expect(priorityTrigger).toHaveTextContent('High');\n  }\n}",
              ...SelectDropdown.parameters?.docs?.source,
            },
          },
        }),
        (NumberValidation.parameters = {
          ...NumberValidation.parameters,
          docs: {
            ...NumberValidation.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    open: false,\n    onOpenChange: () => {},\n    template: null,\n    onSubmit: async () => {}\n  },\n  render: () => <TemplateVariableFormDemo template={complexTemplate} defaultOpen={true} />,\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Wait for dialog\n    await waitFor(() => {\n      expect(canvas.getByText('Create from Template')).toBeInTheDocument();\n    });\n\n    // Enter invalid duration\n    const durationInput = canvas.getByLabelText(/Duration \\(weeks\\)/);\n    await userEvent.type(durationInput, '100');\n\n    // Try to submit\n    const submitButton = canvas.getByRole('button', {\n      name: /Create Note/\n    });\n    await userEvent.click(submitButton);\n\n    // Should show max validation error\n    await expect(canvas.getByText('Must be at most 52')).toBeInTheDocument();\n\n    // Fix the value\n    await userEvent.clear(durationInput);\n    await userEvent.type(durationInput, '12');\n\n    // Error should disappear\n    await expect(canvas.queryByText('Must be at most 52')).not.toBeInTheDocument();\n  }\n}",
              ...NumberValidation.parameters?.docs?.source,
            },
          },
        }),
        (BooleanField.parameters = {
          ...BooleanField.parameters,
          docs: {
            ...BooleanField.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    open: false,\n    onOpenChange: () => {},\n    template: null,\n    onSubmit: async () => {}\n  },\n  render: () => <TemplateVariableFormDemo template={complexTemplate} defaultOpen={true} />,\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Wait for dialog\n    await waitFor(() => {\n      expect(canvas.getByText('Create from Template')).toBeInTheDocument();\n    });\n\n    // Find and click boolean checkbox\n    const planningCheckbox = canvas.getByRole('checkbox', {\n      name: /Check if planning is complete/\n    });\n\n    // Should be unchecked by default\n    await expect(planningCheckbox).not.toBeChecked();\n\n    // Check it\n    await userEvent.click(planningCheckbox);\n    await expect(planningCheckbox).toBeChecked();\n\n    // Uncheck it\n    await userEvent.click(planningCheckbox);\n    await expect(planningCheckbox).not.toBeChecked();\n  }\n}",
              ...BooleanField.parameters?.docs?.source,
            },
          },
        }),
        (ScrollableForm.parameters = {
          ...ScrollableForm.parameters,
          docs: {
            ...ScrollableForm.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    open: false,\n    onOpenChange: () => {},\n    template: null,\n    onSubmit: async () => {}\n  },\n  render: () => {\n    const manyFieldsTemplate: Template = {\n      ...complexTemplate,\n      id: '4',\n      name: 'Extended Form',\n      variables: [...complexTemplate.variables!, ...Array.from({\n        length: 10\n      }, (_, i) => ({\n        name: `field${i + 10}`,\n        type: 'text' as const,\n        label: `Additional Field ${i + 1}`,\n        placeholder: `Enter value for field ${i + 1}`,\n        required: false,\n        displayOrder: i + 10\n      }))]\n    };\n    return <TemplateVariableFormDemo template={manyFieldsTemplate} defaultOpen={true} />;\n  }\n}",
              ...ScrollableForm.parameters?.docs?.source,
            },
          },
        }),
        (CancelForm.parameters = {
          ...CancelForm.parameters,
          docs: {
            ...CancelForm.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    open: false,\n    onOpenChange: () => {},\n    template: null,\n    onSubmit: async () => {}\n  },\n  render: () => <TemplateVariableFormDemo template={simpleTemplate} defaultOpen={true} />,\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Wait for dialog\n    await waitFor(() => {\n      expect(canvas.getByText('Create from Template')).toBeInTheDocument();\n    });\n\n    // Fill some fields\n    const titleInput = canvas.getByLabelText(/Meeting Title/);\n    await userEvent.type(titleInput, 'Test Meeting');\n\n    // Click cancel\n    const cancelButton = canvas.getByRole('button', {\n      name: 'Cancel'\n    });\n    await userEvent.click(cancelButton);\n\n    // Dialog should close\n    await waitFor(() => {\n      expect(canvas.queryByText('Create from Template')).not.toBeInTheDocument();\n    });\n  }\n}",
              ...CancelForm.parameters?.docs?.source,
            },
          },
        }),
        (LoadingState.parameters = {
          ...LoadingState.parameters,
          docs: {
            ...LoadingState.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    open: false,\n    onOpenChange: () => {},\n    template: null,\n    onSubmit: async () => {}\n  },\n  render: () => {\n    const [isLoading, setIsLoading] = useState(false);\n    return <>\n        <Button onClick={() => setIsLoading(!isLoading)}>\n          Toggle Loading State\n        </Button>\n        <TemplateVariableForm open={true} onOpenChange={() => {}} template={simpleTemplate} onSubmit={async () => {\n        setIsLoading(true);\n        await new Promise(resolve => setTimeout(resolve, 2000));\n        setIsLoading(false);\n      }} />\n      </>;\n  }\n}',
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
                "{\n  args: {\n    open: false,\n    onOpenChange: () => {},\n    template: null,\n    onSubmit: async () => {}\n  },\n  parameters: {\n    viewport: {\n      defaultViewport: 'mobile1'\n    }\n  },\n  render: () => <TemplateVariableFormDemo template={simpleTemplate} defaultOpen={true} />\n}",
              ...MobileResponsive.parameters?.docs?.source,
            },
          },
        }))
    },
    './components/ui/checkbox.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { S: () => Checkbox })
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
        ),
        _radix_ui_react_checkbox__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            '../../node_modules/.pnpm/@radix-ui+react-checkbox@1.3.2_@types+react-dom@19.1.6_@types+react@19.1.8__@types+reac_c5e16db2dcf884afb83d2b1801cb62c2/node_modules/@radix-ui/react-checkbox/dist/index.mjs'
          ),
        _barrel_optimize_names_Check_lucide_react__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/check.js'
          ),
        _lib_utils__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__('./lib/utils.ts')
      function cov_adozgcc28() {
        var path =
            '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/checkbox.tsx',
          global = new Function('return this')(),
          gcv = '__coverage__',
          coverage = global[gcv] || (global[gcv] = {})
        ;(coverage[path] &&
          'a5f16e58a05e30e096d17ce1cb0f522cfb35757e' === coverage[path].hash) ||
          (coverage[path] = {
            path: '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/checkbox.tsx',
            statementMap: {
              0: {
                start: { line: 7, column: 31 },
                end: { line: 17, column: 7 },
              },
              1: {
                start: { line: 7, column: 94 },
                end: { line: 17, column: 6 },
              },
              2: {
                start: { line: 18, column: 0 },
                end: { line: 18, column: 58 },
              },
              3: {
                start: { line: 20, column: 0 },
                end: { line: 23, column: 2 },
              },
            },
            fnMap: {
              0: {
                name: '(anonymous_0)',
                decl: {
                  start: { line: 7, column: 48 },
                  end: { line: 7, column: 49 },
                },
                loc: {
                  start: { line: 7, column: 94 },
                  end: { line: 17, column: 6 },
                },
                line: 7,
              },
            },
            branchMap: {},
            s: { 0: 0, 1: 0, 2: 0, 3: 0 },
            f: { 0: 0 },
            b: {},
            inputSourceMap: {
              version: 3,
              sources: [
                '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/checkbox.tsx',
              ],
              sourcesContent: [
                "'use client'\n\nimport * as React from 'react'\nimport * as CheckboxPrimitive from '@radix-ui/react-checkbox'\nimport { Check } from 'lucide-react'\nimport { cn } from '../../lib/utils'\n\nconst Checkbox = React.forwardRef<\n  React.ElementRef<typeof CheckboxPrimitive.Root>,\n  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>\n>(({ className, ...props }, ref) => (\n  <CheckboxPrimitive.Root\n    ref={ref}\n    className={cn(\n      'peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',\n      className\n    )}\n    {...props}\n  >\n    <CheckboxPrimitive.Indicator\n      className={cn('flex items-center justify-center text-current')}\n    >\n      <Check className='h-4 w-4' />\n    </CheckboxPrimitive.Indicator>\n  </CheckboxPrimitive.Root>\n))\nCheckbox.displayName = CheckboxPrimitive.Root.displayName\n\nexport { Checkbox }\n",
              ],
              names: [],
              mappings:
                'AAAA,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;AAEX,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAC7B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAC5D,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,oCAAA;AACnC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAEnC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,eAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAG/B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,YAClC,KAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;QACpB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACR,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACX,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACpQ,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QAET,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gCAET,KAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;YACzB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;oCAE9D,KAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;;;AAIlC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;AAExD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC',
            },
            _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
            hash: 'a5f16e58a05e30e096d17ce1cb0f522cfb35757e',
          })
        var actualCoverage = coverage[path]
        return (
          (cov_adozgcc28 = function () {
            return actualCoverage
          }),
          actualCoverage
        )
      }
      cov_adozgcc28()
      const Checkbox =
        (cov_adozgcc28().s[0]++,
        react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(
          ({ className, ...props }, ref) => (
            cov_adozgcc28().f[0]++,
            cov_adozgcc28().s[1]++,
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _radix_ui_react_checkbox__WEBPACK_IMPORTED_MODULE_3__.bL,
              {
                ref,
                className: (0, _lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(
                  'peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
                  className
                ),
                ...props,
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _radix_ui_react_checkbox__WEBPACK_IMPORTED_MODULE_3__.C1,
                  {
                    className: (0, _lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(
                      'flex items-center justify-center text-current'
                    ),
                    children: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _barrel_optimize_names_Check_lucide_react__WEBPACK_IMPORTED_MODULE_4__.A,
                      { className: 'h-4 w-4' }
                    ),
                  }
                ),
              }
            )
          )
        ))
      ;(cov_adozgcc28().s[2]++,
        (Checkbox.displayName =
          _radix_ui_react_checkbox__WEBPACK_IMPORTED_MODULE_3__.bL.displayName),
        cov_adozgcc28().s[3]++,
        (Checkbox.__docgenInfo = { description: '', methods: [] }))
    },
    './components/ui/input.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { p: () => Input })
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
        ),
        _lib_utils__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__('./lib/utils.ts')
      function cov_hfm2fwy5v() {
        var path =
            '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/input.tsx',
          global = new Function('return this')(),
          gcv = '__coverage__',
          coverage = global[gcv] || (global[gcv] = {})
        ;(coverage[path] &&
          '7d26816cc889833b2fb16d620df48c4351f7db5f' === coverage[path].hash) ||
          (coverage[path] = {
            path: '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/input.tsx',
            statementMap: {
              0: {
                start: { line: 4, column: 28 },
                end: { line: 11, column: 2 },
              },
              1: {
                start: { line: 5, column: 4 },
                end: { line: 10, column: 7 },
              },
              2: {
                start: { line: 12, column: 0 },
                end: { line: 12, column: 28 },
              },
              3: {
                start: { line: 14, column: 0 },
                end: { line: 18, column: 2 },
              },
            },
            fnMap: {
              0: {
                name: '(anonymous_0)',
                decl: {
                  start: { line: 4, column: 45 },
                  end: { line: 4, column: 46 },
                },
                loc: {
                  start: { line: 4, column: 83 },
                  end: { line: 11, column: 1 },
                },
                line: 4,
              },
            },
            branchMap: {},
            s: { 0: 0, 1: 0, 2: 0, 3: 0 },
            f: { 0: 0 },
            b: {},
            inputSourceMap: {
              version: 3,
              sources: [
                '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/input.tsx',
              ],
              sourcesContent: [
                "import * as React from 'react'\nimport { cn } from '@/lib/utils'\n\nexport interface InputProps\n  extends React.InputHTMLAttributes<HTMLInputElement> {}\n\nconst Input = React.forwardRef<HTMLInputElement, InputProps>(\n  ({ className, type, ...props }, ref) => {\n    return (\n      <input\n        type={type}\n        className={cn(\n          'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',\n          className\n        )}\n        ref={ref}\n        {...props}\n      />\n    )\n  }\n)\nInput.displayName = 'Input'\n\nexport { Input }\n",
              ],
              names: [],
              mappings:
                ';AAAA,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAC7B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAK/B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,eAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,AAC7B,CAD8B,AAC7B,CAD8B,AAC7B,CAD8B,AAC7B,CAD8B,AAC7B,CAD8B,AAC7B,CAD8B,AAC7B,CAD8B,AAC7B,CAD8B,AAC7B,CAD8B,AAC7B,CAAC,AAD6B,CAC5B,AAD6B,CAAC,AAC7B,CAD8B,AAC7B,CAD8B,AAC7B,CAD8B,AAC7B,CAD8B,AAC7B,CAAC,AAD6B,CAAC,AAC7B,CAAC,AAD6B,CAAC,AAC7B,CAD8B,AAC7B,CAAC,AAD6B,CAAC,AAC7B,CAD8B,AAC7B,CAD8B,AAC7B,CAD8B,AAC7B,CAD8B,AAC7B,CAAC,AAD6B,CAC5B,AAD6B,CAC5B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;IACtC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,cACL,KAAC,CAAC,CAAC,CAAC,CAAC;QACH,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACV,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACX,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAC9V,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QAEV,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACP,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;AAGf;AAEF,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;AAE1B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC',
            },
            _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
            hash: '7d26816cc889833b2fb16d620df48c4351f7db5f',
          })
        var actualCoverage = coverage[path]
        return (
          (cov_hfm2fwy5v = function () {
            return actualCoverage
          }),
          actualCoverage
        )
      }
      cov_hfm2fwy5v()
      const Input =
        (cov_hfm2fwy5v().s[0]++,
        react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(
          ({ className, type, ...props }, ref) => (
            cov_hfm2fwy5v().f[0]++,
            cov_hfm2fwy5v().s[1]++,
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('input', {
              type,
              className: (0, _lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(
                'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
                className
              ),
              ref,
              ...props,
            })
          )
        ))
      ;(cov_hfm2fwy5v().s[2]++,
        (Input.displayName = 'Input'),
        cov_hfm2fwy5v().s[3]++,
        (Input.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Input',
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
    './components/ui/textarea.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { T: () => Textarea })
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        _lib_utils__WEBPACK_IMPORTED_MODULE_2__ =
          (__webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
          ),
          __webpack_require__('./lib/utils.ts'))
      function cov_18aq0tn5ay() {
        var path =
            '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/textarea.tsx',
          global = new Function('return this')(),
          gcv = '__coverage__',
          coverage = global[gcv] || (global[gcv] = {})
        ;(coverage[path] &&
          'd31dfbb54ffd0deec3e4fb586e803e42057b2e91' === coverage[path].hash) ||
          (coverage[path] = {
            path: '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/textarea.tsx',
            statementMap: {
              0: { start: { line: 5, column: 4 }, end: { line: 9, column: 7 } },
              1: {
                start: { line: 12, column: 0 },
                end: { line: 16, column: 2 },
              },
            },
            fnMap: {
              0: {
                name: 'Textarea',
                decl: {
                  start: { line: 4, column: 9 },
                  end: { line: 4, column: 17 },
                },
                loc: {
                  start: { line: 4, column: 43 },
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
                '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/textarea.tsx',
              ],
              sourcesContent: [
                "import * as React from 'react'\n\nimport { cn } from '@/lib/utils'\n\nfunction Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {\n  return (\n    <textarea\n      data-slot='textarea'\n      className={cn(\n        'border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',\n        className\n      )}\n      {...props}\n    />\n  )\n}\n\nexport { Textarea }\n",
              ],
              names: [],
              mappings:
                ';AAAA,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAE7B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAE/B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,AAAkC,CAAjC,AAAkC,CAAjC,AAAkC,CAAjC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;IACxE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,cACL,KAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACN,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACnB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACX,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACrc,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QAET,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;AAGf;AAEA,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC',
            },
            _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
            hash: 'd31dfbb54ffd0deec3e4fb586e803e42057b2e91',
          })
        var actualCoverage = coverage[path]
        return (
          (cov_18aq0tn5ay = function () {
            return actualCoverage
          }),
          actualCoverage
        )
      }
      function Textarea({ className, ...props }) {
        return (
          cov_18aq0tn5ay().f[0]++,
          cov_18aq0tn5ay().s[0]++,
          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('textarea', {
            'data-slot': 'textarea',
            className: (0, _lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(
              'border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
              className
            ),
            ...props,
          })
        )
      }
      ;(cov_18aq0tn5ay(),
        cov_18aq0tn5ay().s[1]++,
        (Textarea.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Textarea',
        }))
    },
  },
])
