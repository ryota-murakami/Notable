'use strict'
;(self.webpackChunk_notable_web = self.webpackChunk_notable_web || []).push([
  [9396],
  {
    './components/ui/settings-panel.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      ;(__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          ClosePanel: () => ClosePanel,
          CustomSections: () => CustomSections,
          Default: () => Default,
          EmptyState: () => EmptyState,
          GeneralSettingsSection: () => GeneralSettingsSection,
          InteractiveNavigation: () => InteractiveNavigation,
          KeyboardSettingsSection: () => KeyboardSettingsSection,
          NotableSettingsPanelStory: () => NotableSettingsPanelStory,
          NotificationSettingsSection: () => NotificationSettingsSection,
          OpenByDefault: () => OpenByDefault,
          ResponsiveLayout: () => ResponsiveLayout,
          ScrollableContent: () => ScrollableContent,
          ThemeSelection: () => ThemeSelection,
          ThemeSettingsSection: () => ThemeSettingsSection,
          WithDefaultSection: () => WithDefaultSection,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => settings_panel_stories,
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
        modal = __webpack_require__('./design-system/components/modal.tsx'),
        settings = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/settings.js'
        ),
        sun = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/sun.js'
        ),
        moon = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/moon.js'
        ),
        monitor = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/monitor.js'
        ),
        palette = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/palette.js'
        ),
        keyboard = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/keyboard.js'
        ),
        bell = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/bell.js'
        )
      function cov_21c0kurr5y() {
        var path =
            '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/settings-panel.tsx',
          global = new Function('return this')(),
          gcv = '__coverage__',
          coverageData = {
            path: '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/settings-panel.tsx',
            statementMap: {
              0: {
                start: { line: 10, column: 46 },
                end: { line: 10, column: 180 },
              },
              1: {
                start: { line: 11, column: 27 },
                end: { line: 11, column: 81 },
              },
              2: {
                start: { line: 11, column: 52 },
                end: { line: 11, column: 80 },
              },
              3: {
                start: { line: 12, column: 4 },
                end: { line: 55, column: 7 },
              },
              4: {
                start: { line: 14, column: 21 },
                end: { line: 14, column: 40 },
              },
              5: {
                start: { line: 35, column: 76 },
                end: { line: 42, column: 46 },
              },
              6: {
                start: { line: 36, column: 49 },
                end: { line: 36, column: 77 },
              },
              7: {
                start: { line: 59, column: 4 },
                end: { line: 118, column: 7 },
              },
              8: {
                start: { line: 121, column: 19 },
                end: { line: 143, column: 5 },
              },
              9: {
                start: { line: 144, column: 4 },
                end: { line: 200, column: 7 },
              },
              10: {
                start: { line: 163, column: 80 },
                end: { line: 173, column: 52 },
              },
              11: {
                start: { line: 164, column: 57 },
                end: { line: 164, column: 142 },
              },
              12: {
                start: { line: 185, column: 110 },
                end: { line: 192, column: 48 },
              },
              13: {
                start: { line: 186, column: 57 },
                end: { line: 186, column: 145 },
              },
              14: {
                start: { line: 203, column: 29 },
                end: { line: 214, column: 6 },
              },
              15: {
                start: { line: 204, column: 23 },
                end: { line: 204, column: 25 },
              },
              16: {
                start: { line: 205, column: 8 },
                end: { line: 210, column: 11 },
              },
              17: {
                start: { line: 206, column: 12 },
                end: { line: 208, column: 13 },
              },
              18: {
                start: { line: 207, column: 16 },
                end: { line: 207, column: 47 },
              },
              19: {
                start: { line: 209, column: 12 },
                end: { line: 209, column: 53 },
              },
              20: {
                start: { line: 211, column: 8 },
                end: { line: 211, column: 22 },
              },
              21: {
                start: { line: 215, column: 4 },
                end: { line: 267, column: 7 },
              },
              22: {
                start: { line: 225, column: 114 },
                end: { line: 263, column: 36 },
              },
              23: {
                start: { line: 233, column: 94 },
                end: { line: 260, column: 55 },
              },
              24: {
                start: { line: 270, column: 4 },
                end: { line: 330, column: 7 },
              },
              25: {
                start: { line: 299, column: 49 },
                end: { line: 299, column: 167 },
              },
              26: {
                start: { line: 304, column: 91 },
                end: { line: 325, column: 39 },
              },
              27: {
                start: { line: 334, column: 21 },
                end: { line: 434, column: 5 },
              },
              28: {
                start: { line: 435, column: 4 },
                end: { line: 440, column: 7 },
              },
              29: {
                start: { line: 442, column: 0 },
                end: { line: 508, column: 2 },
              },
              30: {
                start: { line: 509, column: 0 },
                end: { line: 552, column: 2 },
              },
              31: {
                start: { line: 553, column: 0 },
                end: { line: 666, column: 2 },
              },
              32: {
                start: { line: 667, column: 0 },
                end: { line: 752, column: 2 },
              },
              33: {
                start: { line: 753, column: 0 },
                end: { line: 843, column: 2 },
              },
              34: {
                start: { line: 844, column: 0 },
                end: { line: 957, column: 2 },
              },
            },
            fnMap: {
              0: {
                name: 'SettingsPanel',
                decl: {
                  start: { line: 8, column: 16 },
                  end: { line: 8, column: 29 },
                },
                loc: {
                  start: { line: 8, column: 96 },
                  end: { line: 56, column: 1 },
                },
                line: 8,
              },
              1: {
                name: '(anonymous_1)',
                decl: {
                  start: { line: 11, column: 41 },
                  end: { line: 11, column: 42 },
                },
                loc: {
                  start: { line: 11, column: 52 },
                  end: { line: 11, column: 80 },
                },
                line: 11,
              },
              2: {
                name: '(anonymous_2)',
                decl: {
                  start: { line: 14, column: 17 },
                  end: { line: 14, column: 18 },
                },
                loc: {
                  start: { line: 14, column: 21 },
                  end: { line: 14, column: 40 },
                },
                line: 14,
              },
              3: {
                name: '(anonymous_3)',
                decl: {
                  start: { line: 35, column: 51 },
                  end: { line: 35, column: 52 },
                },
                loc: {
                  start: { line: 35, column: 76 },
                  end: { line: 42, column: 46 },
                },
                line: 35,
              },
              4: {
                name: '(anonymous_4)',
                decl: {
                  start: { line: 36, column: 45 },
                  end: { line: 36, column: 46 },
                },
                loc: {
                  start: { line: 36, column: 49 },
                  end: { line: 36, column: 77 },
                },
                line: 36,
              },
              5: {
                name: 'GeneralSettings',
                decl: {
                  start: { line: 58, column: 16 },
                  end: { line: 58, column: 31 },
                },
                loc: {
                  start: { line: 58, column: 85 },
                  end: { line: 119, column: 1 },
                },
                line: 58,
              },
              6: {
                name: 'ThemeSettings',
                decl: {
                  start: { line: 120, column: 16 },
                  end: { line: 120, column: 29 },
                },
                loc: {
                  start: { line: 120, column: 103 },
                  end: { line: 201, column: 1 },
                },
                line: 120,
              },
              7: {
                name: '(anonymous_7)',
                decl: {
                  start: { line: 163, column: 57 },
                  end: { line: 163, column: 58 },
                },
                loc: {
                  start: { line: 163, column: 80 },
                  end: { line: 173, column: 52 },
                },
                line: 163,
              },
              8: {
                name: '(anonymous_8)',
                decl: {
                  start: { line: 164, column: 53 },
                  end: { line: 164, column: 54 },
                },
                loc: {
                  start: { line: 164, column: 57 },
                  end: { line: 164, column: 142 },
                },
                line: 164,
              },
              9: {
                name: '(anonymous_9)',
                decl: {
                  start: { line: 185, column: 79 },
                  end: { line: 185, column: 80 },
                },
                loc: {
                  start: { line: 185, column: 110 },
                  end: { line: 192, column: 48 },
                },
                line: 185,
              },
              10: {
                name: '(anonymous_10)',
                decl: {
                  start: { line: 186, column: 53 },
                  end: { line: 186, column: 54 },
                },
                loc: {
                  start: { line: 186, column: 57 },
                  end: { line: 186, column: 145 },
                },
                line: 186,
              },
              11: {
                name: 'KeyboardSettings',
                decl: {
                  start: { line: 202, column: 16 },
                  end: { line: 202, column: 32 },
                },
                loc: {
                  start: { line: 202, column: 71 },
                  end: { line: 268, column: 1 },
                },
                line: 202,
              },
              12: {
                name: '(anonymous_12)',
                decl: {
                  start: { line: 203, column: 43 },
                  end: { line: 203, column: 44 },
                },
                loc: {
                  start: { line: 203, column: 47 },
                  end: { line: 212, column: 5 },
                },
                line: 203,
              },
              13: {
                name: '(anonymous_13)',
                decl: {
                  start: { line: 205, column: 26 },
                  end: { line: 205, column: 27 },
                },
                loc: {
                  start: { line: 205, column: 38 },
                  end: { line: 210, column: 9 },
                },
                line: 205,
              },
              14: {
                name: '(anonymous_14)',
                decl: {
                  start: { line: 225, column: 67 },
                  end: { line: 225, column: 68 },
                },
                loc: {
                  start: { line: 225, column: 114 },
                  end: { line: 263, column: 36 },
                },
                line: 225,
              },
              15: {
                name: '(anonymous_15)',
                decl: {
                  start: { line: 233, column: 68 },
                  end: { line: 233, column: 69 },
                },
                loc: {
                  start: { line: 233, column: 94 },
                  end: { line: 260, column: 55 },
                },
                line: 233,
              },
              16: {
                name: '(anonymous_16)',
                decl: {
                  start: { line: 250, column: 69 },
                  end: { line: 250, column: 70 },
                },
                loc: {
                  start: { line: 250, column: 73 },
                  end: { line: 252, column: 61 },
                },
                line: 250,
              },
              17: {
                name: 'NotificationSettings',
                decl: {
                  start: { line: 269, column: 16 },
                  end: { line: 269, column: 36 },
                },
                loc: {
                  start: { line: 269, column: 115 },
                  end: { line: 331, column: 1 },
                },
                line: 269,
              },
              18: {
                name: '(anonymous_18)',
                decl: {
                  start: { line: 299, column: 45 },
                  end: { line: 299, column: 46 },
                },
                loc: {
                  start: { line: 299, column: 49 },
                  end: { line: 299, column: 167 },
                },
                line: 299,
              },
              19: {
                name: '(anonymous_19)',
                decl: {
                  start: { line: 304, column: 69 },
                  end: { line: 304, column: 70 },
                },
                loc: {
                  start: { line: 304, column: 91 },
                  end: { line: 325, column: 39 },
                },
                line: 304,
              },
              20: {
                name: 'NotableSettingsPanel',
                decl: {
                  start: { line: 333, column: 16 },
                  end: { line: 333, column: 36 },
                },
                loc: {
                  start: { line: 333, column: 110 },
                  end: { line: 441, column: 1 },
                },
                line: 333,
              },
            },
            branchMap: {
              0: {
                loc: {
                  start: { line: 8, column: 52 },
                  end: { line: 8, column: 65 },
                },
                type: 'default-arg',
                locations: [
                  {
                    start: { line: 8, column: 63 },
                    end: { line: 8, column: 65 },
                  },
                ],
                line: 8,
              },
              1: {
                loc: {
                  start: { line: 10, column: 61 },
                  end: { line: 10, column: 179 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 10, column: 61 },
                    end: { line: 10, column: 75 },
                  },
                  {
                    start: { line: 10, column: 80 },
                    end: { line: 10, column: 165 },
                  },
                  {
                    start: { line: 10, column: 170 },
                    end: { line: 10, column: 179 },
                  },
                ],
                line: 10,
              },
              2: {
                loc: {
                  start: { line: 10, column: 80 },
                  end: { line: 10, column: 165 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 10, column: 143 },
                    end: { line: 10, column: 149 },
                  },
                  {
                    start: { line: 10, column: 152 },
                    end: { line: 10, column: 165 },
                  },
                ],
                line: 10,
              },
              3: {
                loc: {
                  start: { line: 10, column: 80 },
                  end: { line: 10, column: 140 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 10, column: 80 },
                    end: { line: 10, column: 115 },
                  },
                  {
                    start: { line: 10, column: 119 },
                    end: { line: 10, column: 140 },
                  },
                ],
                line: 10,
              },
              4: {
                loc: {
                  start: { line: 37, column: 201 },
                  end: { line: 37, column: 269 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 37, column: 201 },
                    end: { line: 37, column: 229 },
                  },
                  {
                    start: { line: 37, column: 233 },
                    end: { line: 37, column: 269 },
                  },
                ],
                line: 37,
              },
              5: {
                loc: {
                  start: { line: 46, column: 38 },
                  end: { line: 49, column: 30 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 46, column: 55 },
                    end: { line: 46, column: 79 },
                  },
                  {
                    start: { line: 46, column: 96 },
                    end: { line: 49, column: 30 },
                  },
                ],
                line: 46,
              },
              6: {
                loc: {
                  start: { line: 58, column: 34 },
                  end: { line: 58, column: 53 },
                },
                type: 'default-arg',
                locations: [
                  {
                    start: { line: 58, column: 44 },
                    end: { line: 58, column: 53 },
                  },
                ],
                line: 58,
              },
              7: {
                loc: {
                  start: { line: 58, column: 55 },
                  end: { line: 58, column: 72 },
                },
                type: 'default-arg',
                locations: [
                  {
                    start: { line: 58, column: 65 },
                    end: { line: 58, column: 72 },
                  },
                ],
                line: 58,
              },
              8: {
                loc: {
                  start: { line: 100, column: 24 },
                  end: { line: 113, column: 26 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 100, column: 24 },
                    end: { line: 100, column: 31 },
                  },
                  {
                    start: { line: 100, column: 49 },
                    end: { line: 113, column: 26 },
                  },
                ],
                line: 100,
              },
              9: {
                loc: {
                  start: { line: 120, column: 32 },
                  end: { line: 120, column: 55 },
                },
                type: 'default-arg',
                locations: [
                  {
                    start: { line: 120, column: 47 },
                    end: { line: 120, column: 55 },
                  },
                ],
                line: 120,
              },
              10: {
                loc: {
                  start: { line: 164, column: 57 },
                  end: { line: 164, column: 142 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 164, column: 110 },
                    end: { line: 164, column: 116 },
                  },
                  {
                    start: { line: 164, column: 119 },
                    end: { line: 164, column: 142 },
                  },
                ],
                line: 164,
              },
              11: {
                loc: {
                  start: { line: 164, column: 57 },
                  end: { line: 164, column: 107 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 164, column: 57 },
                    end: { line: 164, column: 79 },
                  },
                  {
                    start: { line: 164, column: 83 },
                    end: { line: 164, column: 107 },
                  },
                ],
                line: 164,
              },
              12: {
                loc: {
                  start: { line: 165, column: 135 },
                  end: { line: 165, column: 226 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 165, column: 163 },
                    end: { line: 165, column: 192 },
                  },
                  {
                    start: { line: 165, column: 195 },
                    end: { line: 165, column: 226 },
                  },
                ],
                line: 165,
              },
              13: {
                loc: {
                  start: { line: 177, column: 24 },
                  end: { line: 195, column: 26 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 177, column: 24 },
                    end: { line: 177, column: 36 },
                  },
                  {
                    start: { line: 177, column: 54 },
                    end: { line: 195, column: 26 },
                  },
                ],
                line: 177,
              },
              14: {
                loc: {
                  start: { line: 186, column: 57 },
                  end: { line: 186, column: 145 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 186, column: 110 },
                    end: { line: 186, column: 116 },
                  },
                  {
                    start: { line: 186, column: 119 },
                    end: { line: 186, column: 145 },
                  },
                ],
                line: 186,
              },
              15: {
                loc: {
                  start: { line: 186, column: 57 },
                  end: { line: 186, column: 107 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 186, column: 57 },
                    end: { line: 186, column: 79 },
                  },
                  {
                    start: { line: 186, column: 83 },
                    end: { line: 186, column: 107 },
                  },
                ],
                line: 186,
              },
              16: {
                loc: {
                  start: { line: 202, column: 35 },
                  end: { line: 202, column: 49 },
                },
                type: 'default-arg',
                locations: [
                  {
                    start: { line: 202, column: 47 },
                    end: { line: 202, column: 49 },
                  },
                ],
                line: 202,
              },
              17: {
                loc: {
                  start: { line: 206, column: 12 },
                  end: { line: 208, column: 13 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 206, column: 12 },
                    end: { line: 208, column: 13 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 206,
              },
              18: {
                loc: {
                  start: { line: 247, column: 56 },
                  end: { line: 256, column: 58 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 247, column: 56 },
                    end: { line: 247, column: 72 },
                  },
                  {
                    start: { line: 247, column: 90 },
                    end: { line: 256, column: 58 },
                  },
                ],
                line: 247,
              },
              19: {
                loc: {
                  start: { line: 269, column: 39 },
                  end: { line: 269, column: 65 },
                },
                type: 'default-arg',
                locations: [
                  {
                    start: { line: 269, column: 61 },
                    end: { line: 269, column: 65 },
                  },
                ],
                line: 269,
              },
              20: {
                loc: {
                  start: { line: 269, column: 89 },
                  end: { line: 269, column: 111 },
                },
                type: 'default-arg',
                locations: [
                  {
                    start: { line: 269, column: 109 },
                    end: { line: 269, column: 111 },
                  },
                ],
                line: 269,
              },
              21: {
                loc: {
                  start: { line: 297, column: 45 },
                  end: { line: 297, column: 90 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 297, column: 67 },
                    end: { line: 297, column: 76 },
                  },
                  {
                    start: { line: 297, column: 79 },
                    end: { line: 297, column: 90 },
                  },
                ],
                line: 297,
              },
              22: {
                loc: {
                  start: { line: 299, column: 49 },
                  end: { line: 299, column: 167 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 299, column: 116 },
                    end: { line: 299, column: 122 },
                  },
                  {
                    start: { line: 299, column: 125 },
                    end: { line: 299, column: 167 },
                  },
                ],
                line: 299,
              },
              23: {
                loc: {
                  start: { line: 299, column: 49 },
                  end: { line: 299, column: 113 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 299, column: 49 },
                    end: { line: 299, column: 78 },
                  },
                  {
                    start: { line: 299, column: 82 },
                    end: { line: 299, column: 113 },
                  },
                ],
                line: 299,
              },
              24: {
                loc: {
                  start: { line: 300, column: 46 },
                  end: { line: 300, column: 90 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 300, column: 68 },
                    end: { line: 300, column: 77 },
                  },
                  {
                    start: { line: 300, column: 80 },
                    end: { line: 300, column: 90 },
                  },
                ],
                line: 300,
              },
              25: {
                loc: {
                  start: { line: 304, column: 24 },
                  end: { line: 325, column: 40 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 304, column: 24 },
                    end: { line: 304, column: 43 },
                  },
                  {
                    start: { line: 304, column: 47 },
                    end: { line: 325, column: 40 },
                  },
                ],
                line: 304,
              },
              26: {
                loc: {
                  start: { line: 320, column: 49 },
                  end: { line: 320, column: 87 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 320, column: 64 },
                    end: { line: 320, column: 73 },
                  },
                  {
                    start: { line: 320, column: 76 },
                    end: { line: 320, column: 87 },
                  },
                ],
                line: 320,
              },
              27: {
                loc: {
                  start: { line: 322, column: 50 },
                  end: { line: 322, column: 77 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 322, column: 65 },
                    end: { line: 322, column: 69 },
                  },
                  {
                    start: { line: 322, column: 72 },
                    end: { line: 322, column: 77 },
                  },
                ],
                line: 322,
              },
              28: {
                loc: {
                  start: { line: 333, column: 59 },
                  end: { line: 333, column: 82 },
                },
                type: 'default-arg',
                locations: [
                  {
                    start: { line: 333, column: 74 },
                    end: { line: 333, column: 82 },
                  },
                ],
                line: 333,
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
            },
            b: {
              0: [0],
              1: [0, 0, 0],
              2: [0, 0],
              3: [0, 0],
              4: [0, 0],
              5: [0, 0],
              6: [0],
              7: [0],
              8: [0, 0],
              9: [0],
              10: [0, 0],
              11: [0, 0],
              12: [0, 0],
              13: [0, 0],
              14: [0, 0],
              15: [0, 0],
              16: [0],
              17: [0, 0],
              18: [0, 0],
              19: [0],
              20: [0],
              21: [0, 0],
              22: [0, 0],
              23: [0, 0],
              24: [0, 0],
              25: [0, 0],
              26: [0, 0],
              27: [0, 0],
              28: [0],
            },
            inputSourceMap: {
              version: 3,
              sources: [
                '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/settings-panel.tsx',
              ],
              sourcesContent: [
                "'use client'\n\nimport * as React from 'react'\nimport { cn } from '../../lib/utils'\nimport { Button } from '../../design-system/components/button'\nimport {\n  Modal,\n  ModalBody,\n  ModalFooter,\n  ModalHeader,\n  ModalTitle,\n} from '../../design-system/components/modal'\nimport {\n  BellIcon,\n  DatabaseIcon,\n  HelpCircleIcon,\n  KeyboardIcon,\n  MonitorIcon,\n  MoonIcon,\n  PaletteIcon,\n  SettingsIcon,\n  ShieldIcon,\n  SmartphoneIcon,\n  SunIcon,\n  UserIcon,\n  XIcon,\n} from 'lucide-react'\n\nexport interface SettingsSection {\n  id: string\n  label: string\n  icon: React.ReactNode\n  component: React.ReactNode\n}\n\ninterface SettingsPanelProps {\n  open: boolean\n  onOpenChange: (open: boolean) => void\n  sections?: SettingsSection[]\n  defaultSection?: string\n  className?: string\n}\n\nexport function SettingsPanel({\n  open,\n  onOpenChange,\n  sections = [],\n  defaultSection,\n  className,\n}: SettingsPanelProps) {\n  const [activeSection, setActiveSection] = React.useState(\n    defaultSection || sections[0]?.id || 'general'\n  )\n\n  const currentSection = sections.find(\n    (section) => section.id === activeSection\n  )\n\n  return (\n    <Modal open={open} onClose={() => onOpenChange(false)} size='xl'>\n      <ModalHeader>\n        <ModalTitle className='flex items-center gap-2'>\n          <SettingsIcon className='h-5 w-5' />\n          Settings\n        </ModalTitle>\n      </ModalHeader>\n\n      <ModalBody className={cn('p-0', className)}>\n        <div className='flex h-[60vh] min-h-[400px] max-h-[800px]'>\n          {/* Sidebar */}\n          <div className='w-48 border-r border-border p-4 space-y-1'>\n            {sections.map((section) => (\n              <button\n                key={section.id}\n                onClick={() => setActiveSection(section.id)}\n                className={cn(\n                  'w-full flex items-center gap-3 px-3 py-2 text-left text-sm font-medium rounded-md transition-colors',\n                  'hover:bg-accent hover:text-accent-foreground',\n                  activeSection === section.id &&\n                    'bg-primary text-primary-foreground'\n                )}\n              >\n                {section.icon}\n                {section.label}\n              </button>\n            ))}\n          </div>\n\n          {/* Content */}\n          <div className='flex-1 p-6 overflow-y-auto'>\n            {currentSection ? (\n              currentSection.component\n            ) : (\n              <div className='text-center text-muted-foreground'>\n                Select a settings section\n              </div>\n            )}\n          </div>\n        </div>\n      </ModalBody>\n    </Modal>\n  )\n}\n\n// Settings section components\nexport function GeneralSettings({\n  appName = 'Notable',\n  version = '1.0.0',\n  onReset,\n}: {\n  appName?: string\n  version?: string\n  onReset?: () => void\n}) {\n  return (\n    <div className='space-y-6'>\n      <div>\n        <h3 className='text-lg font-semibold mb-4'>General</h3>\n        <div className='space-y-4'>\n          <div className='flex items-center justify-between py-2'>\n            <div>\n              <div className='font-medium'>Application Name</div>\n              <div className='text-sm text-muted-foreground'>{appName}</div>\n            </div>\n          </div>\n\n          <div className='flex items-center justify-between py-2'>\n            <div>\n              <div className='font-medium'>Version</div>\n              <div className='text-sm text-muted-foreground'>{version}</div>\n            </div>\n          </div>\n\n          {onReset && (\n            <div className='pt-4 border-t border-border'>\n              <Button variant='destructive' onClick={onReset}>\n                Reset All Settings\n              </Button>\n              <p className='text-xs text-muted-foreground mt-2'>\n                This will reset all settings to their default values\n              </p>\n            </div>\n          )}\n        </div>\n      </div>\n    </div>\n  )\n}\n\nexport function ThemeSettings({\n  currentTheme = 'system',\n  onThemeChange,\n  customColors,\n  onColorChange,\n}: {\n  currentTheme?: 'light' | 'dark' | 'system'\n  onThemeChange?: (theme: 'light' | 'dark' | 'system') => void\n  customColors?: Record<string, string>\n  onColorChange?: (color: string, value: string) => void\n}) {\n  const themes = [\n    { id: 'light', label: 'Light', icon: <SunIcon className='h-4 w-4' /> },\n    { id: 'dark', label: 'Dark', icon: <MoonIcon className='h-4 w-4' /> },\n    {\n      id: 'system',\n      label: 'System',\n      icon: <MonitorIcon className='h-4 w-4' />,\n    },\n  ]\n\n  return (\n    <div className='space-y-6'>\n      <div>\n        <h3 className='text-lg font-semibold mb-4'>Appearance</h3>\n\n        <div className='space-y-4'>\n          <div>\n            <label className='text-sm font-medium mb-3 block'>Theme</label>\n            <div className='grid grid-cols-3 gap-3'>\n              {themes.map((theme) => (\n                <button\n                  key={theme.id}\n                  onClick={() => onThemeChange?.(theme.id as any)}\n                  className={cn(\n                    'flex items-center gap-2 p-3 rounded-lg border text-left transition-colors',\n                    currentTheme === theme.id\n                      ? 'border-primary bg-primary/5'\n                      : 'border-border hover:bg-accent'\n                  )}\n                >\n                  {theme.icon}\n                  <span className='text-sm font-medium'>{theme.label}</span>\n                </button>\n              ))}\n            </div>\n          </div>\n\n          {customColors && (\n            <div>\n              <label className='text-sm font-medium mb-3 block'>\n                Accent Color\n              </label>\n              <div className='grid grid-cols-6 gap-2'>\n                {Object.entries(customColors).map(([name, color]) => (\n                  <button\n                    key={name}\n                    onClick={() => onColorChange?.(name, color)}\n                    className='w-8 h-8 rounded-full border-2 border-border hover:border-primary transition-colors'\n                    style={{ backgroundColor: color }}\n                    title={name}\n                  />\n                ))}\n              </div>\n            </div>\n          )}\n        </div>\n      </div>\n    </div>\n  )\n}\n\nexport function KeyboardSettings({\n  shortcuts = [],\n  onShortcutChange,\n}: {\n  shortcuts?: Array<{\n    id: string\n    label: string\n    shortcut: string\n    category: string\n  }>\n  onShortcutChange?: (id: string, shortcut: string) => void\n}) {\n  const groupedShortcuts = React.useMemo(() => {\n    const groups: Record<string, typeof shortcuts> = {}\n    shortcuts.forEach((shortcut) => {\n      if (!groups[shortcut.category]) {\n        groups[shortcut.category] = []\n      }\n      groups[shortcut.category].push(shortcut)\n    })\n    return groups\n  }, [shortcuts])\n\n  return (\n    <div className='space-y-6'>\n      <div>\n        <h3 className='text-lg font-semibold mb-4'>Keyboard Shortcuts</h3>\n\n        <div className='space-y-6'>\n          {Object.entries(groupedShortcuts).map(\n            ([category, categoryShortcuts]) => (\n              <div key={category}>\n                <h4 className='font-medium text-sm text-muted-foreground uppercase tracking-wide mb-3'>\n                  {category}\n                </h4>\n                <div className='space-y-2'>\n                  {categoryShortcuts.map((shortcut) => (\n                    <div\n                      key={shortcut.id}\n                      className='flex items-center justify-between py-2'\n                    >\n                      <span className='text-sm'>{shortcut.label}</span>\n                      <div className='flex items-center gap-2'>\n                        <kbd className='px-2 py-1 text-xs font-mono bg-muted rounded border'>\n                          {shortcut.shortcut}\n                        </kbd>\n                        {onShortcutChange && (\n                          <Button\n                            variant='ghost'\n                            size='sm'\n                            onClick={() => {\n                              // TODO: Implement shortcut editing logic\n                            }}\n                            disabled\n                            title='Coming soon: Shortcut editing'\n                          >\n                            Edit\n                          </Button>\n                        )}\n                      </div>\n                    </div>\n                  ))}\n                </div>\n              </div>\n            )\n          )}\n        </div>\n      </div>\n    </div>\n  )\n}\n\nexport function NotificationSettings({\n  enableNotifications = true,\n  onNotificationChange,\n  notificationTypes = [],\n}: {\n  enableNotifications?: boolean\n  onNotificationChange?: (enabled: boolean) => void\n  notificationTypes?: Array<{\n    id: string\n    label: string\n    description: string\n    enabled: boolean\n  }>\n}) {\n  return (\n    <div className='space-y-6'>\n      <div>\n        <h3 className='text-lg font-semibold mb-4'>Notifications</h3>\n\n        <div className='space-y-4'>\n          <div className='flex items-center justify-between py-2'>\n            <div>\n              <div className='font-medium'>Enable Notifications</div>\n              <div className='text-sm text-muted-foreground'>\n                Allow Notable to send you notifications\n              </div>\n            </div>\n            <Button\n              variant={enableNotifications ? 'default' : 'secondary'}\n              size='sm'\n              onClick={() => onNotificationChange?.(!enableNotifications)}\n            >\n              {enableNotifications ? 'Enabled' : 'Disabled'}\n            </Button>\n          </div>\n\n          {enableNotifications &&\n            notificationTypes.map((type) => (\n              <div\n                key={type.id}\n                className='flex items-center justify-between py-2 pl-4'\n              >\n                <div>\n                  <div className='font-medium text-sm'>{type.label}</div>\n                  <div className='text-xs text-muted-foreground'>\n                    {type.description}\n                  </div>\n                </div>\n                <Button\n                  variant={type.enabled ? 'default' : 'secondary'}\n                  size='sm'\n                >\n                  {type.enabled ? 'On' : 'Off'}\n                </Button>\n              </div>\n            ))}\n        </div>\n      </div>\n    </div>\n  )\n}\n\n// Pre-built Notable settings panel\nexport function NotableSettingsPanel({\n  open,\n  onOpenChange,\n  currentTheme = 'system',\n  onThemeChange,\n  onReset,\n}: {\n  open: boolean\n  onOpenChange: (open: boolean) => void\n  currentTheme?: 'light' | 'dark' | 'system'\n  onThemeChange?: (theme: 'light' | 'dark' | 'system') => void\n  onReset?: () => void\n}) {\n  const sections: SettingsSection[] = [\n    {\n      id: 'general',\n      label: 'General',\n      icon: <SettingsIcon className='h-4 w-4' />,\n      component: <GeneralSettings onReset={onReset} />,\n    },\n    {\n      id: 'appearance',\n      label: 'Appearance',\n      icon: <PaletteIcon className='h-4 w-4' />,\n      component: (\n        <ThemeSettings\n          currentTheme={currentTheme}\n          onThemeChange={onThemeChange}\n          customColors={{\n            blue: '#3b82f6',\n            purple: '#8b5cf6',\n            green: '#10b981',\n            orange: '#f59e0b',\n            red: '#ef4444',\n            pink: '#ec4899',\n          }}\n        />\n      ),\n    },\n    {\n      id: 'keyboard',\n      label: 'Shortcuts',\n      icon: <KeyboardIcon className='h-4 w-4' />,\n      component: (\n        <KeyboardSettings\n          shortcuts={[\n            {\n              id: 'new-note',\n              label: 'New Note',\n              shortcut: 'Cmd+N',\n              category: 'File',\n            },\n            { id: 'save', label: 'Save', shortcut: 'Cmd+S', category: 'File' },\n            {\n              id: 'search',\n              label: 'Search',\n              shortcut: 'Cmd+F',\n              category: 'Navigation',\n            },\n            {\n              id: 'command-palette',\n              label: 'Command Palette',\n              shortcut: 'Cmd+K',\n              category: 'Navigation',\n            },\n            {\n              id: 'bold',\n              label: 'Bold',\n              shortcut: 'Cmd+B',\n              category: 'Formatting',\n            },\n            {\n              id: 'italic',\n              label: 'Italic',\n              shortcut: 'Cmd+I',\n              category: 'Formatting',\n            },\n          ]}\n        />\n      ),\n    },\n    {\n      id: 'notifications',\n      label: 'Notifications',\n      icon: <BellIcon className='h-4 w-4' />,\n      component: (\n        <NotificationSettings\n          notificationTypes={[\n            {\n              id: 'sync',\n              label: 'Sync Status',\n              description: 'Notify when notes are synced',\n              enabled: true,\n            },\n            {\n              id: 'updates',\n              label: 'App Updates',\n              description: 'Notify when updates are available',\n              enabled: true,\n            },\n          ]}\n        />\n      ),\n    },\n  ]\n\n  return (\n    <SettingsPanel\n      open={open}\n      onOpenChange={onOpenChange}\n      sections={sections}\n      defaultSection='general'\n    />\n  )\n}\n",
              ],
              names: [],
              mappings:
                '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AC,CAAC;oCAEJ,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAG,AAAF,CAAG,AAAF,CAAG,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;oCAC3C,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACX,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACrG,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAC9C,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CA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',
            },
            _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
            hash: '5f9b75065d03cb56e5d391bdaed0ccca32d9b8b7',
          },
          coverage = global[gcv] || (global[gcv] = {})
        ;(coverage[path] &&
          '5f9b75065d03cb56e5d391bdaed0ccca32d9b8b7' === coverage[path].hash) ||
          (coverage[path] = coverageData)
        var actualCoverage = coverage[path]
        return (
          (cov_21c0kurr5y = function () {
            return actualCoverage
          }),
          actualCoverage
        )
      }
      function SettingsPanel({
        open,
        onOpenChange,
        sections = (cov_21c0kurr5y().b[0][0]++, []),
        defaultSection,
        className,
      }) {
        var _sections_
        cov_21c0kurr5y().f[0]++
        const [activeSection, setActiveSection] =
            (cov_21c0kurr5y().s[0]++,
            react.useState(
              (cov_21c0kurr5y().b[1][0]++,
              defaultSection ||
                (cov_21c0kurr5y().b[1][1]++,
                cov_21c0kurr5y().b[3][0]++,
                null === (_sections_ = sections[0]) ||
                (cov_21c0kurr5y().b[3][1]++, void 0 === _sections_)
                  ? void cov_21c0kurr5y().b[2][0]++
                  : (cov_21c0kurr5y().b[2][1]++, _sections_.id)) ||
                (cov_21c0kurr5y().b[1][2]++, 'general'))
            )),
          currentSection =
            (cov_21c0kurr5y().s[1]++,
            sections.find(
              (section) => (
                cov_21c0kurr5y().f[1]++,
                cov_21c0kurr5y().s[2]++,
                section.id === activeSection
              )
            ))
        return (
          cov_21c0kurr5y().s[3]++,
          (0, jsx_runtime.jsxs)(modal.aF, {
            open,
            onClose: () => (
              cov_21c0kurr5y().f[2]++,
              cov_21c0kurr5y().s[4]++,
              onOpenChange(!1)
            ),
            size: 'xl',
            children: [
              (0, jsx_runtime.jsx)(modal.rQ, {
                children: (0, jsx_runtime.jsxs)(modal.wt, {
                  className: 'flex items-center gap-2',
                  children: [
                    (0, jsx_runtime.jsx)(settings.A, { className: 'h-5 w-5' }),
                    'Settings',
                  ],
                }),
              }),
              (0, jsx_runtime.jsx)(modal.cw, {
                className: (0, utils.cn)('p-0', className),
                children: (0, jsx_runtime.jsxs)('div', {
                  className: 'flex h-[60vh] min-h-[400px] max-h-[800px]',
                  children: [
                    (0, jsx_runtime.jsx)('div', {
                      className: 'w-48 border-r border-border p-4 space-y-1',
                      children: sections.map(
                        (section) => (
                          cov_21c0kurr5y().f[3]++,
                          cov_21c0kurr5y().s[5]++,
                          (0, jsx_runtime.jsxs)(
                            'button',
                            {
                              onClick: () => (
                                cov_21c0kurr5y().f[4]++,
                                cov_21c0kurr5y().s[6]++,
                                setActiveSection(section.id)
                              ),
                              className: (0, utils.cn)(
                                'w-full flex items-center gap-3 px-3 py-2 text-left text-sm font-medium rounded-md transition-colors',
                                'hover:bg-accent hover:text-accent-foreground',
                                (cov_21c0kurr5y().b[4][0]++,
                                activeSection === section.id &&
                                  (cov_21c0kurr5y().b[4][1]++,
                                  'bg-primary text-primary-foreground'))
                              ),
                              children: [section.icon, section.label],
                            },
                            section.id
                          )
                        )
                      ),
                    }),
                    (0, jsx_runtime.jsx)('div', {
                      className: 'flex-1 p-6 overflow-y-auto',
                      children: currentSection
                        ? (cov_21c0kurr5y().b[5][0]++, currentSection.component)
                        : (cov_21c0kurr5y().b[5][1]++,
                          (0, jsx_runtime.jsx)('div', {
                            className: 'text-center text-muted-foreground',
                            children: 'Select a settings section',
                          })),
                    }),
                  ],
                }),
              }),
            ],
          })
        )
      }
      function GeneralSettings({
        appName = (cov_21c0kurr5y().b[6][0]++, 'Notable'),
        version = (cov_21c0kurr5y().b[7][0]++, '1.0.0'),
        onReset,
      }) {
        return (
          cov_21c0kurr5y().f[5]++,
          cov_21c0kurr5y().s[7]++,
          (0, jsx_runtime.jsx)('div', {
            className: 'space-y-6',
            children: (0, jsx_runtime.jsxs)('div', {
              children: [
                (0, jsx_runtime.jsx)('h3', {
                  className: 'text-lg font-semibold mb-4',
                  children: 'General',
                }),
                (0, jsx_runtime.jsxs)('div', {
                  className: 'space-y-4',
                  children: [
                    (0, jsx_runtime.jsx)('div', {
                      className: 'flex items-center justify-between py-2',
                      children: (0, jsx_runtime.jsxs)('div', {
                        children: [
                          (0, jsx_runtime.jsx)('div', {
                            className: 'font-medium',
                            children: 'Application Name',
                          }),
                          (0, jsx_runtime.jsx)('div', {
                            className: 'text-sm text-muted-foreground',
                            children: appName,
                          }),
                        ],
                      }),
                    }),
                    (0, jsx_runtime.jsx)('div', {
                      className: 'flex items-center justify-between py-2',
                      children: (0, jsx_runtime.jsxs)('div', {
                        children: [
                          (0, jsx_runtime.jsx)('div', {
                            className: 'font-medium',
                            children: 'Version',
                          }),
                          (0, jsx_runtime.jsx)('div', {
                            className: 'text-sm text-muted-foreground',
                            children: version,
                          }),
                        ],
                      }),
                    }),
                    (cov_21c0kurr5y().b[8][0]++,
                    onReset &&
                      (cov_21c0kurr5y().b[8][1]++,
                      (0, jsx_runtime.jsxs)('div', {
                        className: 'pt-4 border-t border-border',
                        children: [
                          (0, jsx_runtime.jsx)(components_button.$, {
                            variant: 'destructive',
                            onClick: onReset,
                            children: 'Reset All Settings',
                          }),
                          (0, jsx_runtime.jsx)('p', {
                            className: 'text-xs text-muted-foreground mt-2',
                            children:
                              'This will reset all settings to their default values',
                          }),
                        ],
                      }))),
                  ],
                }),
              ],
            }),
          })
        )
      }
      function ThemeSettings({
        currentTheme = (cov_21c0kurr5y().b[9][0]++, 'system'),
        onThemeChange,
        customColors,
        onColorChange,
      }) {
        cov_21c0kurr5y().f[6]++
        const themes =
          (cov_21c0kurr5y().s[8]++,
          [
            {
              id: 'light',
              label: 'Light',
              icon: (0, jsx_runtime.jsx)(sun.A, { className: 'h-4 w-4' }),
            },
            {
              id: 'dark',
              label: 'Dark',
              icon: (0, jsx_runtime.jsx)(moon.A, { className: 'h-4 w-4' }),
            },
            {
              id: 'system',
              label: 'System',
              icon: (0, jsx_runtime.jsx)(monitor.A, { className: 'h-4 w-4' }),
            },
          ])
        return (
          cov_21c0kurr5y().s[9]++,
          (0, jsx_runtime.jsx)('div', {
            className: 'space-y-6',
            children: (0, jsx_runtime.jsxs)('div', {
              children: [
                (0, jsx_runtime.jsx)('h3', {
                  className: 'text-lg font-semibold mb-4',
                  children: 'Appearance',
                }),
                (0, jsx_runtime.jsxs)('div', {
                  className: 'space-y-4',
                  children: [
                    (0, jsx_runtime.jsxs)('div', {
                      children: [
                        (0, jsx_runtime.jsx)('label', {
                          className: 'text-sm font-medium mb-3 block',
                          children: 'Theme',
                        }),
                        (0, jsx_runtime.jsx)('div', {
                          className: 'grid grid-cols-3 gap-3',
                          children: themes.map(
                            (theme) => (
                              cov_21c0kurr5y().f[7]++,
                              cov_21c0kurr5y().s[10]++,
                              (0, jsx_runtime.jsxs)(
                                'button',
                                {
                                  onClick: () => (
                                    cov_21c0kurr5y().f[8]++,
                                    cov_21c0kurr5y().s[11]++,
                                    cov_21c0kurr5y().b[11][0]++,
                                    null === onThemeChange ||
                                    (cov_21c0kurr5y().b[11][1]++,
                                    void 0 === onThemeChange)
                                      ? void cov_21c0kurr5y().b[10][0]++
                                      : (cov_21c0kurr5y().b[10][1]++,
                                        onThemeChange(theme.id))
                                  ),
                                  className: (0, utils.cn)(
                                    'flex items-center gap-2 p-3 rounded-lg border text-left transition-colors',
                                    currentTheme === theme.id
                                      ? (cov_21c0kurr5y().b[12][0]++,
                                        'border-primary bg-primary/5')
                                      : (cov_21c0kurr5y().b[12][1]++,
                                        'border-border hover:bg-accent')
                                  ),
                                  children: [
                                    theme.icon,
                                    (0, jsx_runtime.jsx)('span', {
                                      className: 'text-sm font-medium',
                                      children: theme.label,
                                    }),
                                  ],
                                },
                                theme.id
                              )
                            )
                          ),
                        }),
                      ],
                    }),
                    (cov_21c0kurr5y().b[13][0]++,
                    customColors &&
                      (cov_21c0kurr5y().b[13][1]++,
                      (0, jsx_runtime.jsxs)('div', {
                        children: [
                          (0, jsx_runtime.jsx)('label', {
                            className: 'text-sm font-medium mb-3 block',
                            children: 'Accent Color',
                          }),
                          (0, jsx_runtime.jsx)('div', {
                            className: 'grid grid-cols-6 gap-2',
                            children: Object.entries(customColors).map(
                              ([name, color]) => (
                                cov_21c0kurr5y().f[9]++,
                                cov_21c0kurr5y().s[12]++,
                                (0, jsx_runtime.jsx)(
                                  'button',
                                  {
                                    onClick: () => (
                                      cov_21c0kurr5y().f[10]++,
                                      cov_21c0kurr5y().s[13]++,
                                      cov_21c0kurr5y().b[15][0]++,
                                      null === onColorChange ||
                                      (cov_21c0kurr5y().b[15][1]++,
                                      void 0 === onColorChange)
                                        ? void cov_21c0kurr5y().b[14][0]++
                                        : (cov_21c0kurr5y().b[14][1]++,
                                          onColorChange(name, color))
                                    ),
                                    className:
                                      'w-8 h-8 rounded-full border-2 border-border hover:border-primary transition-colors',
                                    style: { backgroundColor: color },
                                    title: name,
                                  },
                                  name
                                )
                              )
                            ),
                          }),
                        ],
                      }))),
                  ],
                }),
              ],
            }),
          })
        )
      }
      function KeyboardSettings({
        shortcuts = (cov_21c0kurr5y().b[16][0]++, []),
        onShortcutChange,
      }) {
        cov_21c0kurr5y().f[11]++
        const groupedShortcuts =
          (cov_21c0kurr5y().s[14]++,
          react.useMemo(() => {
            cov_21c0kurr5y().f[12]++
            const groups = (cov_21c0kurr5y().s[15]++, {})
            return (
              cov_21c0kurr5y().s[16]++,
              shortcuts.forEach((shortcut) => {
                ;(cov_21c0kurr5y().f[13]++,
                  cov_21c0kurr5y().s[17]++,
                  groups[shortcut.category]
                    ? cov_21c0kurr5y().b[17][1]++
                    : (cov_21c0kurr5y().b[17][0]++,
                      cov_21c0kurr5y().s[18]++,
                      (groups[shortcut.category] = [])),
                  cov_21c0kurr5y().s[19]++,
                  groups[shortcut.category].push(shortcut))
              }),
              cov_21c0kurr5y().s[20]++,
              groups
            )
          }, [shortcuts]))
        return (
          cov_21c0kurr5y().s[21]++,
          (0, jsx_runtime.jsx)('div', {
            className: 'space-y-6',
            children: (0, jsx_runtime.jsxs)('div', {
              children: [
                (0, jsx_runtime.jsx)('h3', {
                  className: 'text-lg font-semibold mb-4',
                  children: 'Keyboard Shortcuts',
                }),
                (0, jsx_runtime.jsx)('div', {
                  className: 'space-y-6',
                  children: Object.entries(groupedShortcuts).map(
                    ([category, categoryShortcuts]) => (
                      cov_21c0kurr5y().f[14]++,
                      cov_21c0kurr5y().s[22]++,
                      (0, jsx_runtime.jsxs)(
                        'div',
                        {
                          children: [
                            (0, jsx_runtime.jsx)('h4', {
                              className:
                                'font-medium text-sm text-muted-foreground uppercase tracking-wide mb-3',
                              children: category,
                            }),
                            (0, jsx_runtime.jsx)('div', {
                              className: 'space-y-2',
                              children: categoryShortcuts.map(
                                (shortcut) => (
                                  cov_21c0kurr5y().f[15]++,
                                  cov_21c0kurr5y().s[23]++,
                                  (0, jsx_runtime.jsxs)(
                                    'div',
                                    {
                                      className:
                                        'flex items-center justify-between py-2',
                                      children: [
                                        (0, jsx_runtime.jsx)('span', {
                                          className: 'text-sm',
                                          children: shortcut.label,
                                        }),
                                        (0, jsx_runtime.jsxs)('div', {
                                          className: 'flex items-center gap-2',
                                          children: [
                                            (0, jsx_runtime.jsx)('kbd', {
                                              className:
                                                'px-2 py-1 text-xs font-mono bg-muted rounded border',
                                              children: shortcut.shortcut,
                                            }),
                                            (cov_21c0kurr5y().b[18][0]++,
                                            onShortcutChange &&
                                              (cov_21c0kurr5y().b[18][1]++,
                                              (0, jsx_runtime.jsx)(
                                                components_button.$,
                                                {
                                                  variant: 'ghost',
                                                  size: 'sm',
                                                  onClick: () => {
                                                    cov_21c0kurr5y().f[16]++
                                                  },
                                                  disabled: !0,
                                                  title:
                                                    'Coming soon: Shortcut editing',
                                                  children: 'Edit',
                                                }
                                              ))),
                                          ],
                                        }),
                                      ],
                                    },
                                    shortcut.id
                                  )
                                )
                              ),
                            }),
                          ],
                        },
                        category
                      )
                    )
                  ),
                }),
              ],
            }),
          })
        )
      }
      function NotificationSettings({
        enableNotifications = (cov_21c0kurr5y().b[19][0]++, !0),
        onNotificationChange,
        notificationTypes = (cov_21c0kurr5y().b[20][0]++, []),
      }) {
        return (
          cov_21c0kurr5y().f[17]++,
          cov_21c0kurr5y().s[24]++,
          (0, jsx_runtime.jsx)('div', {
            className: 'space-y-6',
            children: (0, jsx_runtime.jsxs)('div', {
              children: [
                (0, jsx_runtime.jsx)('h3', {
                  className: 'text-lg font-semibold mb-4',
                  children: 'Notifications',
                }),
                (0, jsx_runtime.jsxs)('div', {
                  className: 'space-y-4',
                  children: [
                    (0, jsx_runtime.jsxs)('div', {
                      className: 'flex items-center justify-between py-2',
                      children: [
                        (0, jsx_runtime.jsxs)('div', {
                          children: [
                            (0, jsx_runtime.jsx)('div', {
                              className: 'font-medium',
                              children: 'Enable Notifications',
                            }),
                            (0, jsx_runtime.jsx)('div', {
                              className: 'text-sm text-muted-foreground',
                              children:
                                'Allow Notable to send you notifications',
                            }),
                          ],
                        }),
                        (0, jsx_runtime.jsx)(components_button.$, {
                          variant: enableNotifications
                            ? (cov_21c0kurr5y().b[21][0]++, 'default')
                            : (cov_21c0kurr5y().b[21][1]++, 'secondary'),
                          size: 'sm',
                          onClick: () => (
                            cov_21c0kurr5y().f[18]++,
                            cov_21c0kurr5y().s[25]++,
                            cov_21c0kurr5y().b[23][0]++,
                            null === onNotificationChange ||
                            (cov_21c0kurr5y().b[23][1]++,
                            void 0 === onNotificationChange)
                              ? void cov_21c0kurr5y().b[22][0]++
                              : (cov_21c0kurr5y().b[22][1]++,
                                onNotificationChange(!enableNotifications))
                          ),
                          children: enableNotifications
                            ? (cov_21c0kurr5y().b[24][0]++, 'Enabled')
                            : (cov_21c0kurr5y().b[24][1]++, 'Disabled'),
                        }),
                      ],
                    }),
                    (cov_21c0kurr5y().b[25][0]++,
                    enableNotifications &&
                      (cov_21c0kurr5y().b[25][1]++,
                      notificationTypes.map(
                        (type) => (
                          cov_21c0kurr5y().f[19]++,
                          cov_21c0kurr5y().s[26]++,
                          (0, jsx_runtime.jsxs)(
                            'div',
                            {
                              className:
                                'flex items-center justify-between py-2 pl-4',
                              children: [
                                (0, jsx_runtime.jsxs)('div', {
                                  children: [
                                    (0, jsx_runtime.jsx)('div', {
                                      className: 'font-medium text-sm',
                                      children: type.label,
                                    }),
                                    (0, jsx_runtime.jsx)('div', {
                                      className:
                                        'text-xs text-muted-foreground',
                                      children: type.description,
                                    }),
                                  ],
                                }),
                                (0, jsx_runtime.jsx)(components_button.$, {
                                  variant: type.enabled
                                    ? (cov_21c0kurr5y().b[26][0]++, 'default')
                                    : (cov_21c0kurr5y().b[26][1]++,
                                      'secondary'),
                                  size: 'sm',
                                  children: type.enabled
                                    ? (cov_21c0kurr5y().b[27][0]++, 'On')
                                    : (cov_21c0kurr5y().b[27][1]++, 'Off'),
                                }),
                              ],
                            },
                            type.id
                          )
                        )
                      ))),
                  ],
                }),
              ],
            }),
          })
        )
      }
      function NotableSettingsPanel({
        open,
        onOpenChange,
        currentTheme = (cov_21c0kurr5y().b[28][0]++, 'system'),
        onThemeChange,
        onReset,
      }) {
        cov_21c0kurr5y().f[20]++
        const sections =
          (cov_21c0kurr5y().s[27]++,
          [
            {
              id: 'general',
              label: 'General',
              icon: (0, jsx_runtime.jsx)(settings.A, { className: 'h-4 w-4' }),
              component: (0, jsx_runtime.jsx)(GeneralSettings, { onReset }),
            },
            {
              id: 'appearance',
              label: 'Appearance',
              icon: (0, jsx_runtime.jsx)(palette.A, { className: 'h-4 w-4' }),
              component: (0, jsx_runtime.jsx)(ThemeSettings, {
                currentTheme,
                onThemeChange,
                customColors: {
                  blue: '#3b82f6',
                  purple: '#8b5cf6',
                  green: '#10b981',
                  orange: '#f59e0b',
                  red: '#ef4444',
                  pink: '#ec4899',
                },
              }),
            },
            {
              id: 'keyboard',
              label: 'Shortcuts',
              icon: (0, jsx_runtime.jsx)(keyboard.A, { className: 'h-4 w-4' }),
              component: (0, jsx_runtime.jsx)(KeyboardSettings, {
                shortcuts: [
                  {
                    id: 'new-note',
                    label: 'New Note',
                    shortcut: 'Cmd+N',
                    category: 'File',
                  },
                  {
                    id: 'save',
                    label: 'Save',
                    shortcut: 'Cmd+S',
                    category: 'File',
                  },
                  {
                    id: 'search',
                    label: 'Search',
                    shortcut: 'Cmd+F',
                    category: 'Navigation',
                  },
                  {
                    id: 'command-palette',
                    label: 'Command Palette',
                    shortcut: 'Cmd+K',
                    category: 'Navigation',
                  },
                  {
                    id: 'bold',
                    label: 'Bold',
                    shortcut: 'Cmd+B',
                    category: 'Formatting',
                  },
                  {
                    id: 'italic',
                    label: 'Italic',
                    shortcut: 'Cmd+I',
                    category: 'Formatting',
                  },
                ],
              }),
            },
            {
              id: 'notifications',
              label: 'Notifications',
              icon: (0, jsx_runtime.jsx)(bell.A, { className: 'h-4 w-4' }),
              component: (0, jsx_runtime.jsx)(NotificationSettings, {
                notificationTypes: [
                  {
                    id: 'sync',
                    label: 'Sync Status',
                    description: 'Notify when notes are synced',
                    enabled: !0,
                  },
                  {
                    id: 'updates',
                    label: 'App Updates',
                    description: 'Notify when updates are available',
                    enabled: !0,
                  },
                ],
              }),
            },
          ])
        return (
          cov_21c0kurr5y().s[28]++,
          (0, jsx_runtime.jsx)(SettingsPanel, {
            open,
            onOpenChange,
            sections,
            defaultSection: 'general',
          })
        )
      }
      ;(cov_21c0kurr5y(),
        cov_21c0kurr5y().s[29]++,
        (SettingsPanel.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'SettingsPanel',
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
            sections: {
              required: !1,
              tsType: {
                name: 'Array',
                elements: [{ name: 'SettingsSection' }],
                raw: 'SettingsSection[]',
              },
              description: '',
              defaultValue: { value: '[]', computed: !1 },
            },
            defaultSection: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
            className: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
          },
        }),
        cov_21c0kurr5y().s[30]++,
        (GeneralSettings.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'GeneralSettings',
          props: {
            appName: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
              defaultValue: { value: "'Notable'", computed: !1 },
            },
            version: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
              defaultValue: { value: "'1.0.0'", computed: !1 },
            },
            onReset: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
              },
              description: '',
            },
          },
        }),
        cov_21c0kurr5y().s[31]++,
        (ThemeSettings.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'ThemeSettings',
          props: {
            currentTheme: {
              required: !1,
              tsType: {
                name: 'union',
                raw: "'light' | 'dark' | 'system'",
                elements: [
                  { name: 'literal', value: "'light'" },
                  { name: 'literal', value: "'dark'" },
                  { name: 'literal', value: "'system'" },
                ],
              },
              description: '',
              defaultValue: { value: "'system'", computed: !1 },
            },
            onThemeChange: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: "(theme: 'light' | 'dark' | 'system') => void",
                signature: {
                  arguments: [
                    {
                      type: {
                        name: 'union',
                        raw: "'light' | 'dark' | 'system'",
                        elements: [
                          { name: 'literal', value: "'light'" },
                          { name: 'literal', value: "'dark'" },
                          { name: 'literal', value: "'system'" },
                        ],
                      },
                      name: 'theme',
                    },
                  ],
                  return: { name: 'void' },
                },
              },
              description: '',
            },
            customColors: {
              required: !1,
              tsType: {
                name: 'Record',
                elements: [{ name: 'string' }, { name: 'string' }],
                raw: 'Record<string, string>',
              },
              description: '',
            },
            onColorChange: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '(color: string, value: string) => void',
                signature: {
                  arguments: [
                    { type: { name: 'string' }, name: 'color' },
                    { type: { name: 'string' }, name: 'value' },
                  ],
                  return: { name: 'void' },
                },
              },
              description: '',
            },
          },
        }),
        cov_21c0kurr5y().s[32]++,
        (KeyboardSettings.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'KeyboardSettings',
          props: {
            shortcuts: {
              required: !1,
              tsType: {
                name: 'Array',
                elements: [
                  {
                    name: 'signature',
                    type: 'object',
                    raw: '{\n  id: string\n  label: string\n  shortcut: string\n  category: string\n}',
                    signature: {
                      properties: [
                        { key: 'id', value: { name: 'string', required: !0 } },
                        {
                          key: 'label',
                          value: { name: 'string', required: !0 },
                        },
                        {
                          key: 'shortcut',
                          value: { name: 'string', required: !0 },
                        },
                        {
                          key: 'category',
                          value: { name: 'string', required: !0 },
                        },
                      ],
                    },
                  },
                ],
                raw: 'Array<{\n  id: string\n  label: string\n  shortcut: string\n  category: string\n}>',
              },
              description: '',
              defaultValue: { value: '[]', computed: !1 },
            },
            onShortcutChange: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '(id: string, shortcut: string) => void',
                signature: {
                  arguments: [
                    { type: { name: 'string' }, name: 'id' },
                    { type: { name: 'string' }, name: 'shortcut' },
                  ],
                  return: { name: 'void' },
                },
              },
              description: '',
            },
          },
        }),
        cov_21c0kurr5y().s[33]++,
        (NotificationSettings.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'NotificationSettings',
          props: {
            enableNotifications: {
              required: !1,
              tsType: { name: 'boolean' },
              description: '',
              defaultValue: { value: 'true', computed: !1 },
            },
            onNotificationChange: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '(enabled: boolean) => void',
                signature: {
                  arguments: [{ type: { name: 'boolean' }, name: 'enabled' }],
                  return: { name: 'void' },
                },
              },
              description: '',
            },
            notificationTypes: {
              required: !1,
              tsType: {
                name: 'Array',
                elements: [
                  {
                    name: 'signature',
                    type: 'object',
                    raw: '{\n  id: string\n  label: string\n  description: string\n  enabled: boolean\n}',
                    signature: {
                      properties: [
                        { key: 'id', value: { name: 'string', required: !0 } },
                        {
                          key: 'label',
                          value: { name: 'string', required: !0 },
                        },
                        {
                          key: 'description',
                          value: { name: 'string', required: !0 },
                        },
                        {
                          key: 'enabled',
                          value: { name: 'boolean', required: !0 },
                        },
                      ],
                    },
                  },
                ],
                raw: 'Array<{\n  id: string\n  label: string\n  description: string\n  enabled: boolean\n}>',
              },
              description: '',
              defaultValue: { value: '[]', computed: !1 },
            },
          },
        }),
        cov_21c0kurr5y().s[34]++,
        (NotableSettingsPanel.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'NotableSettingsPanel',
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
            currentTheme: {
              required: !1,
              tsType: {
                name: 'union',
                raw: "'light' | 'dark' | 'system'",
                elements: [
                  { name: 'literal', value: "'light'" },
                  { name: 'literal', value: "'dark'" },
                  { name: 'literal', value: "'system'" },
                ],
              },
              description: '',
              defaultValue: { value: "'system'", computed: !1 },
            },
            onThemeChange: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: "(theme: 'light' | 'dark' | 'system') => void",
                signature: {
                  arguments: [
                    {
                      type: {
                        name: 'union',
                        raw: "'light' | 'dark' | 'system'",
                        elements: [
                          { name: 'literal', value: "'light'" },
                          { name: 'literal', value: "'dark'" },
                          { name: 'literal', value: "'system'" },
                        ],
                      },
                      name: 'theme',
                    },
                  ],
                  return: { name: 'void' },
                },
              },
              description: '',
            },
            onReset: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
              },
              description: '',
            },
          },
        }))
      var user = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/user.js'
        ),
        shield = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/shield.js'
        ),
        database = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/database.js'
        ),
        circle_help = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-help.js'
        ),
        dist = __webpack_require__(
          '../../node_modules/.pnpm/@storybook+test@8.6.14_storybook@9.0.18_@testing-library+dom@10.4.0_prettier@3.6.2_/node_modules/@storybook/test/dist/index.mjs'
        ),
        console = __webpack_require__(
          '../../node_modules/.pnpm/console-browserify@1.2.0/node_modules/console-browserify/index.js'
        )
      const settings_panel_stories = {
          title: 'UI/SettingsPanel',
          component: SettingsPanel,
          parameters: { layout: 'centered' },
          tags: ['autodocs'],
          argTypes: {
            open: {
              control: 'boolean',
              description: 'Whether the settings panel is open',
            },
            onOpenChange: {
              action: 'onOpenChange',
              description: 'Callback when panel open state changes',
            },
            defaultSection: {
              control: 'text',
              description: 'Default section to show',
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
        SettingsPanelDemo = ({
          defaultOpen = !1,
          sections,
          defaultSection,
        }) => {
          const [open, setOpen] = (0, react.useState)(defaultOpen)
          return (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
              (0, jsx_runtime.jsx)(components_button.$, {
                onClick: () => setOpen(!0),
                children: 'Open Settings',
              }),
              (0, jsx_runtime.jsx)(SettingsPanel, {
                open,
                onOpenChange: setOpen,
                sections,
                defaultSection,
              }),
            ],
          })
        },
        defaultSections = [
          {
            id: 'general',
            label: 'General',
            icon: (0, jsx_runtime.jsx)(settings.A, { className: 'h-4 w-4' }),
            component: (0, jsx_runtime.jsx)(GeneralSettings, {}),
          },
          {
            id: 'appearance',
            label: 'Appearance',
            icon: (0, jsx_runtime.jsx)(palette.A, { className: 'h-4 w-4' }),
            component: (0, jsx_runtime.jsx)(ThemeSettings, {}),
          },
          {
            id: 'keyboard',
            label: 'Keyboard',
            icon: (0, jsx_runtime.jsx)(keyboard.A, { className: 'h-4 w-4' }),
            component: (0, jsx_runtime.jsx)(KeyboardSettings, {}),
          },
          {
            id: 'notifications',
            label: 'Notifications',
            icon: (0, jsx_runtime.jsx)(bell.A, { className: 'h-4 w-4' }),
            component: (0, jsx_runtime.jsx)(NotificationSettings, {}),
          },
        ],
        Default = {
          args: { open: !1, onOpenChange: () => {} },
          render: () =>
            (0, jsx_runtime.jsx)(SettingsPanelDemo, {
              sections: defaultSections,
            }),
        },
        OpenByDefault = {
          args: { open: !0, onOpenChange: () => {} },
          render: () =>
            (0, jsx_runtime.jsx)(SettingsPanelDemo, {
              defaultOpen: !0,
              sections: defaultSections,
            }),
        },
        WithDefaultSection = {
          args: {
            open: !0,
            onOpenChange: () => {},
            defaultSection: 'appearance',
          },
          render: () =>
            (0, jsx_runtime.jsx)(SettingsPanelDemo, {
              defaultOpen: !0,
              sections: defaultSections,
              defaultSection: 'appearance',
            }),
        },
        CustomSections = {
          args: { open: !0, onOpenChange: () => {} },
          render: () => {
            const customSections = [
              {
                id: 'account',
                label: 'Account',
                icon: (0, jsx_runtime.jsx)(user.A, { className: 'h-4 w-4' }),
                component: (0, jsx_runtime.jsxs)('div', {
                  children: [
                    (0, jsx_runtime.jsx)('h3', {
                      className: 'text-lg font-semibold mb-4',
                      children: 'Account Settings',
                    }),
                    (0, jsx_runtime.jsx)('p', {
                      className: 'text-muted-foreground',
                      children: 'Manage your account information',
                    }),
                  ],
                }),
              },
              {
                id: 'security',
                label: 'Security',
                icon: (0, jsx_runtime.jsx)(shield.A, { className: 'h-4 w-4' }),
                component: (0, jsx_runtime.jsxs)('div', {
                  children: [
                    (0, jsx_runtime.jsx)('h3', {
                      className: 'text-lg font-semibold mb-4',
                      children: 'Security Settings',
                    }),
                    (0, jsx_runtime.jsx)('p', {
                      className: 'text-muted-foreground',
                      children: 'Configure security options',
                    }),
                  ],
                }),
              },
              {
                id: 'data',
                label: 'Data',
                icon: (0, jsx_runtime.jsx)(database.A, {
                  className: 'h-4 w-4',
                }),
                component: (0, jsx_runtime.jsxs)('div', {
                  children: [
                    (0, jsx_runtime.jsx)('h3', {
                      className: 'text-lg font-semibold mb-4',
                      children: 'Data Management',
                    }),
                    (0, jsx_runtime.jsx)('p', {
                      className: 'text-muted-foreground',
                      children: 'Export and backup options',
                    }),
                  ],
                }),
              },
              {
                id: 'help',
                label: 'Help',
                icon: (0, jsx_runtime.jsx)(circle_help.A, {
                  className: 'h-4 w-4',
                }),
                component: (0, jsx_runtime.jsxs)('div', {
                  children: [
                    (0, jsx_runtime.jsx)('h3', {
                      className: 'text-lg font-semibold mb-4',
                      children: 'Help & Support',
                    }),
                    (0, jsx_runtime.jsx)('p', {
                      className: 'text-muted-foreground',
                      children: 'Get help with Notable',
                    }),
                  ],
                }),
              },
            ]
            return (0, jsx_runtime.jsx)(SettingsPanelDemo, {
              defaultOpen: !0,
              sections: customSections,
            })
          },
        },
        GeneralSettingsSection = {
          args: { open: !0, onOpenChange: () => {} },
          render: () => {
            const [open, setOpen] = (0, react.useState)(!0)
            return (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: [
                (0, jsx_runtime.jsx)(components_button.$, {
                  onClick: () => setOpen(!0),
                  children: 'Open General Settings',
                }),
                (0, jsx_runtime.jsx)(SettingsPanel, {
                  open,
                  onOpenChange: setOpen,
                  sections: [
                    {
                      id: 'general',
                      label: 'General',
                      icon: (0, jsx_runtime.jsx)(settings.A, {
                        className: 'h-4 w-4',
                      }),
                      component: (0, jsx_runtime.jsx)(GeneralSettings, {
                        appName: 'Notable Pro',
                        version: '2.5.0',
                        onReset: () => console.info('Reset settings clicked'),
                      }),
                    },
                  ],
                }),
              ],
            })
          },
        },
        ThemeSettingsSection = {
          args: { open: !0, onOpenChange: () => {} },
          render: () => {
            const [open, setOpen] = (0, react.useState)(!0),
              [currentTheme, setCurrentTheme] = (0, react.useState)('system')
            return (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: [
                (0, jsx_runtime.jsx)(components_button.$, {
                  onClick: () => setOpen(!0),
                  children: 'Open Theme Settings',
                }),
                (0, jsx_runtime.jsx)(SettingsPanel, {
                  open,
                  onOpenChange: setOpen,
                  sections: [
                    {
                      id: 'appearance',
                      label: 'Appearance',
                      icon: (0, jsx_runtime.jsx)(palette.A, {
                        className: 'h-4 w-4',
                      }),
                      component: (0, jsx_runtime.jsx)(ThemeSettings, {
                        currentTheme,
                        onThemeChange: setCurrentTheme,
                        customColors: {
                          blue: '#3b82f6',
                          purple: '#8b5cf6',
                          green: '#10b981',
                          orange: '#f59e0b',
                          red: '#ef4444',
                          pink: '#ec4899',
                        },
                        onColorChange: (color, value) =>
                          console.info(`Color ${color} changed to ${value}`),
                      }),
                    },
                  ],
                }),
              ],
            })
          },
        },
        KeyboardSettingsSection = {
          args: { open: !0, onOpenChange: () => {} },
          render: () => {
            const [open, setOpen] = (0, react.useState)(!0)
            return (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: [
                (0, jsx_runtime.jsx)(components_button.$, {
                  onClick: () => setOpen(!0),
                  children: 'Open Keyboard Settings',
                }),
                (0, jsx_runtime.jsx)(SettingsPanel, {
                  open,
                  onOpenChange: setOpen,
                  sections: [
                    {
                      id: 'keyboard',
                      label: 'Keyboard',
                      icon: (0, jsx_runtime.jsx)(keyboard.A, {
                        className: 'h-4 w-4',
                      }),
                      component: (0, jsx_runtime.jsx)(KeyboardSettings, {
                        shortcuts: [
                          {
                            id: 'new-note',
                            label: 'New Note',
                            shortcut: 'Cmd+N',
                            category: 'File',
                          },
                          {
                            id: 'save',
                            label: 'Save',
                            shortcut: 'Cmd+S',
                            category: 'File',
                          },
                          {
                            id: 'open',
                            label: 'Open',
                            shortcut: 'Cmd+O',
                            category: 'File',
                          },
                          {
                            id: 'search',
                            label: 'Search',
                            shortcut: 'Cmd+F',
                            category: 'Navigation',
                          },
                          {
                            id: 'goto',
                            label: 'Go to...',
                            shortcut: 'Cmd+P',
                            category: 'Navigation',
                          },
                          {
                            id: 'bold',
                            label: 'Bold',
                            shortcut: 'Cmd+B',
                            category: 'Formatting',
                          },
                          {
                            id: 'italic',
                            label: 'Italic',
                            shortcut: 'Cmd+I',
                            category: 'Formatting',
                          },
                          {
                            id: 'underline',
                            label: 'Underline',
                            shortcut: 'Cmd+U',
                            category: 'Formatting',
                          },
                        ],
                        onShortcutChange: (id, shortcut) =>
                          console.info(`Shortcut ${id} changed to ${shortcut}`),
                      }),
                    },
                  ],
                }),
              ],
            })
          },
        },
        NotificationSettingsSection = {
          args: { open: !0, onOpenChange: () => {} },
          render: () => {
            const [open, setOpen] = (0, react.useState)(!0),
              [enableNotifications, setEnableNotifications] = (0,
              react.useState)(!0)
            return (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: [
                (0, jsx_runtime.jsx)(components_button.$, {
                  onClick: () => setOpen(!0),
                  children: 'Open Notification Settings',
                }),
                (0, jsx_runtime.jsx)(SettingsPanel, {
                  open,
                  onOpenChange: setOpen,
                  sections: [
                    {
                      id: 'notifications',
                      label: 'Notifications',
                      icon: (0, jsx_runtime.jsx)(bell.A, {
                        className: 'h-4 w-4',
                      }),
                      component: (0, jsx_runtime.jsx)(NotificationSettings, {
                        enableNotifications,
                        onNotificationChange: setEnableNotifications,
                        notificationTypes: [
                          {
                            id: 'sync',
                            label: 'Sync Status',
                            description: 'Notify when notes are synced',
                            enabled: !0,
                          },
                          {
                            id: 'updates',
                            label: 'App Updates',
                            description: 'Notify when updates are available',
                            enabled: !0,
                          },
                          {
                            id: 'reminders',
                            label: 'Note Reminders',
                            description: 'Notify for scheduled note reminders',
                            enabled: !1,
                          },
                          {
                            id: 'sharing',
                            label: 'Sharing Activity',
                            description: 'Notify when someone shares with you',
                            enabled: !1,
                          },
                        ],
                      }),
                    },
                  ],
                }),
              ],
            })
          },
        },
        NotableSettingsPanelStory = {
          args: { open: !0, onOpenChange: () => {} },
          render: () => {
            const [open, setOpen] = (0, react.useState)(!1),
              [currentTheme, setCurrentTheme] = (0, react.useState)('system')
            return (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: [
                (0, jsx_runtime.jsxs)('div', {
                  className: 'text-center space-y-4',
                  children: [
                    (0, jsx_runtime.jsx)(components_button.$, {
                      onClick: () => setOpen(!0),
                      children: 'Open Notable Settings',
                    }),
                    (0, jsx_runtime.jsxs)('p', {
                      className: 'text-sm text-muted-foreground',
                      children: [
                        'Current theme: ',
                        (0, jsx_runtime.jsx)('strong', {
                          children: currentTheme,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, jsx_runtime.jsx)(NotableSettingsPanel, {
                  open,
                  onOpenChange: setOpen,
                  currentTheme,
                  onThemeChange: setCurrentTheme,
                  onReset: () => console.info('Reset all settings'),
                }),
              ],
            })
          },
        },
        InteractiveNavigation = {
          args: { open: !0, onOpenChange: () => {} },
          render: () =>
            (0, jsx_runtime.jsx)(SettingsPanelDemo, {
              defaultOpen: !0,
              sections: defaultSections,
            }),
          play: async ({ canvasElement }) => {
            const canvas = (0, dist.ux)(canvasElement)
            await (0, dist.fm)(() => {
              ;(0, dist.E3)(canvas.getByText('Settings')).toBeInTheDocument()
            })
            const appearanceButton = canvas.getByText('Appearance')
            ;(await dist.Q4.click(appearanceButton),
              await (0, dist.E3)(canvas.getByText('Theme')).toBeInTheDocument())
            const keyboardButton = canvas.getByText('Keyboard')
            ;(await dist.Q4.click(keyboardButton),
              await (0, dist.E3)(
                canvas.getByText('Keyboard Shortcuts')
              ).toBeInTheDocument())
            const notificationsButton = canvas.getByText('Notifications')
            ;(await dist.Q4.click(notificationsButton),
              await (0, dist.E3)(
                canvas.getByText('Enable Notifications')
              ).toBeInTheDocument())
          },
        },
        ThemeSelection = {
          args: { open: !0, onOpenChange: () => {} },
          render: () => {
            const [open, setOpen] = (0, react.useState)(!0),
              [currentTheme, setCurrentTheme] = (0, react.useState)('system'),
              sections = [
                {
                  id: 'appearance',
                  label: 'Appearance',
                  icon: (0, jsx_runtime.jsx)(palette.A, {
                    className: 'h-4 w-4',
                  }),
                  component: (0, jsx_runtime.jsx)(ThemeSettings, {
                    currentTheme,
                    onThemeChange: (theme) => {
                      ;(setCurrentTheme(theme),
                        console.info(`Theme changed to: ${theme}`))
                    },
                  }),
                },
              ]
            return (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: [
                (0, jsx_runtime.jsxs)('div', {
                  className: 'text-center space-y-4',
                  children: [
                    (0, jsx_runtime.jsx)(components_button.$, {
                      onClick: () => setOpen(!0),
                      children: 'Open Settings',
                    }),
                    (0, jsx_runtime.jsxs)('p', {
                      className: 'text-sm text-muted-foreground',
                      children: [
                        'Current theme: ',
                        (0, jsx_runtime.jsx)('strong', {
                          children: currentTheme,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, jsx_runtime.jsx)(SettingsPanel, {
                  open,
                  onOpenChange: setOpen,
                  sections,
                }),
              ],
            })
          },
          play: async ({ canvasElement }) => {
            const canvas = (0, dist.ux)(canvasElement)
            await (0, dist.fm)(() => {
              ;(0, dist.E3)(canvas.getByText('Theme')).toBeInTheDocument()
            })
            const darkButton = canvas.getByText('Dark')
            ;(await dist.Q4.click(darkButton),
              await (0, dist.E3)(
                canvas.getByText('Current theme: dark')
              ).toBeInTheDocument())
            const lightButton = canvas.getByText('Light')
            ;(await dist.Q4.click(lightButton),
              await (0, dist.E3)(
                canvas.getByText('Current theme: light')
              ).toBeInTheDocument())
          },
        },
        ClosePanel = {
          args: { open: !0, onOpenChange: () => {} },
          render: () =>
            (0, jsx_runtime.jsx)(SettingsPanelDemo, {
              defaultOpen: !0,
              sections: defaultSections,
            }),
          play: async ({ canvasElement }) => {
            const canvas = (0, dist.ux)(canvasElement)
            await (0, dist.fm)(() => {
              ;(0, dist.E3)(canvas.getByText('Settings')).toBeInTheDocument()
            })
            const closeButton = canvas.getByRole('button', { name: /close/i })
            ;(await dist.Q4.click(closeButton),
              await (0, dist.fm)(() => {
                ;(0, dist.E3)(
                  canvas.queryByText('Settings')
                ).not.toBeInTheDocument()
              }))
          },
        },
        ScrollableContent = {
          args: { open: !0, onOpenChange: () => {} },
          render: () => {
            const manySections = [
              ...defaultSections,
              {
                id: 'advanced',
                label: 'Advanced',
                icon: (0, jsx_runtime.jsx)(monitor.A, { className: 'h-4 w-4' }),
                component: (0, jsx_runtime.jsxs)('div', {
                  className: 'space-y-6',
                  children: [
                    (0, jsx_runtime.jsx)('h3', {
                      className: 'text-lg font-semibold',
                      children: 'Advanced Settings',
                    }),
                    Array.from({ length: 20 }, (_, i) =>
                      (0, jsx_runtime.jsxs)(
                        'div',
                        {
                          className: 'py-2 border-b',
                          children: [
                            (0, jsx_runtime.jsxs)('div', {
                              className: 'font-medium',
                              children: ['Setting ', i + 1],
                            }),
                            (0, jsx_runtime.jsxs)('div', {
                              className: 'text-sm text-muted-foreground',
                              children: ['Description for setting ', i + 1],
                            }),
                          ],
                        },
                        i
                      )
                    ),
                  ],
                }),
              },
            ]
            return (0, jsx_runtime.jsx)(SettingsPanelDemo, {
              defaultOpen: !0,
              sections: manySections,
            })
          },
        },
        EmptyState = {
          args: { open: !0, onOpenChange: () => {} },
          render: () => {
            const [open, setOpen] = (0, react.useState)(!0)
            return (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: [
                (0, jsx_runtime.jsx)(components_button.$, {
                  onClick: () => setOpen(!0),
                  children: 'Open Empty Settings',
                }),
                (0, jsx_runtime.jsx)(SettingsPanel, {
                  open,
                  onOpenChange: setOpen,
                  sections: [],
                }),
              ],
            })
          },
        },
        ResponsiveLayout = {
          args: { open: !0, onOpenChange: () => {} },
          parameters: { viewport: { defaultViewport: 'mobile1' } },
          render: () =>
            (0, jsx_runtime.jsx)(SettingsPanelDemo, {
              defaultOpen: !0,
              sections: defaultSections,
            }),
        },
        __namedExportsOrder = [
          'Default',
          'OpenByDefault',
          'WithDefaultSection',
          'CustomSections',
          'GeneralSettingsSection',
          'ThemeSettingsSection',
          'KeyboardSettingsSection',
          'NotificationSettingsSection',
          'NotableSettingsPanelStory',
          'InteractiveNavigation',
          'ThemeSelection',
          'ClosePanel',
          'ScrollableContent',
          'EmptyState',
          'ResponsiveLayout',
        ]
      ;((Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              '{\n  args: {\n    open: false,\n    onOpenChange: () => {}\n  },\n  render: () => <SettingsPanelDemo sections={defaultSections} />\n}',
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
                '{\n  args: {\n    open: true,\n    onOpenChange: () => {}\n  },\n  render: () => <SettingsPanelDemo defaultOpen={true} sections={defaultSections} />\n}',
              ...OpenByDefault.parameters?.docs?.source,
            },
          },
        }),
        (WithDefaultSection.parameters = {
          ...WithDefaultSection.parameters,
          docs: {
            ...WithDefaultSection.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    open: true,\n    onOpenChange: () => {},\n    defaultSection: 'appearance'\n  },\n  render: () => <SettingsPanelDemo defaultOpen={true} sections={defaultSections} defaultSection='appearance' />\n}",
              ...WithDefaultSection.parameters?.docs?.source,
            },
          },
        }),
        (CustomSections.parameters = {
          ...CustomSections.parameters,
          docs: {
            ...CustomSections.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    open: true,\n    onOpenChange: () => {}\n  },\n  render: () => {\n    const customSections: SettingsSection[] = [{\n      id: 'account',\n      label: 'Account',\n      icon: <UserIcon className='h-4 w-4' />,\n      component: <div>\n            <h3 className='text-lg font-semibold mb-4'>Account Settings</h3>\n            <p className='text-muted-foreground'>\n              Manage your account information\n            </p>\n          </div>\n    }, {\n      id: 'security',\n      label: 'Security',\n      icon: <ShieldIcon className='h-4 w-4' />,\n      component: <div>\n            <h3 className='text-lg font-semibold mb-4'>Security Settings</h3>\n            <p className='text-muted-foreground'>Configure security options</p>\n          </div>\n    }, {\n      id: 'data',\n      label: 'Data',\n      icon: <DatabaseIcon className='h-4 w-4' />,\n      component: <div>\n            <h3 className='text-lg font-semibold mb-4'>Data Management</h3>\n            <p className='text-muted-foreground'>Export and backup options</p>\n          </div>\n    }, {\n      id: 'help',\n      label: 'Help',\n      icon: <HelpCircleIcon className='h-4 w-4' />,\n      component: <div>\n            <h3 className='text-lg font-semibold mb-4'>Help & Support</h3>\n            <p className='text-muted-foreground'>Get help with Notable</p>\n          </div>\n    }];\n    return <SettingsPanelDemo defaultOpen={true} sections={customSections} />;\n  }\n}",
              ...CustomSections.parameters?.docs?.source,
            },
          },
        }),
        (GeneralSettingsSection.parameters = {
          ...GeneralSettingsSection.parameters,
          docs: {
            ...GeneralSettingsSection.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    open: true,\n    onOpenChange: () => {}\n  },\n  render: () => {\n    const [open, setOpen] = useState(true);\n    return <>\n        <Button onClick={() => setOpen(true)}>Open General Settings</Button>\n        <SettingsPanel open={open} onOpenChange={setOpen} sections={[{\n        id: 'general',\n        label: 'General',\n        icon: <SettingsIcon className='h-4 w-4' />,\n        component: <GeneralSettings appName='Notable Pro' version='2.5.0' onReset={() => console.info('Reset settings clicked')} />\n      }]} />\n      </>;\n  }\n}",
              ...GeneralSettingsSection.parameters?.docs?.source,
            },
          },
        }),
        (ThemeSettingsSection.parameters = {
          ...ThemeSettingsSection.parameters,
          docs: {
            ...ThemeSettingsSection.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    open: true,\n    onOpenChange: () => {}\n  },\n  render: () => {\n    const [open, setOpen] = useState(true);\n    const [currentTheme, setCurrentTheme] = useState<'light' | 'dark' | 'system'>('system');\n    return <>\n        <Button onClick={() => setOpen(true)}>Open Theme Settings</Button>\n        <SettingsPanel open={open} onOpenChange={setOpen} sections={[{\n        id: 'appearance',\n        label: 'Appearance',\n        icon: <PaletteIcon className='h-4 w-4' />,\n        component: <ThemeSettings currentTheme={currentTheme} onThemeChange={setCurrentTheme} customColors={{\n          blue: '#3b82f6',\n          purple: '#8b5cf6',\n          green: '#10b981',\n          orange: '#f59e0b',\n          red: '#ef4444',\n          pink: '#ec4899'\n        }} onColorChange={(color, value) => console.info(`Color ${color} changed to ${value}`)} />\n      }]} />\n      </>;\n  }\n}",
              ...ThemeSettingsSection.parameters?.docs?.source,
            },
          },
        }),
        (KeyboardSettingsSection.parameters = {
          ...KeyboardSettingsSection.parameters,
          docs: {
            ...KeyboardSettingsSection.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    open: true,\n    onOpenChange: () => {}\n  },\n  render: () => {\n    const [open, setOpen] = useState(true);\n    const shortcuts = [{\n      id: 'new-note',\n      label: 'New Note',\n      shortcut: 'Cmd+N',\n      category: 'File'\n    }, {\n      id: 'save',\n      label: 'Save',\n      shortcut: 'Cmd+S',\n      category: 'File'\n    }, {\n      id: 'open',\n      label: 'Open',\n      shortcut: 'Cmd+O',\n      category: 'File'\n    }, {\n      id: 'search',\n      label: 'Search',\n      shortcut: 'Cmd+F',\n      category: 'Navigation'\n    }, {\n      id: 'goto',\n      label: 'Go to...',\n      shortcut: 'Cmd+P',\n      category: 'Navigation'\n    }, {\n      id: 'bold',\n      label: 'Bold',\n      shortcut: 'Cmd+B',\n      category: 'Formatting'\n    }, {\n      id: 'italic',\n      label: 'Italic',\n      shortcut: 'Cmd+I',\n      category: 'Formatting'\n    }, {\n      id: 'underline',\n      label: 'Underline',\n      shortcut: 'Cmd+U',\n      category: 'Formatting'\n    }];\n    return <>\n        <Button onClick={() => setOpen(true)}>Open Keyboard Settings</Button>\n        <SettingsPanel open={open} onOpenChange={setOpen} sections={[{\n        id: 'keyboard',\n        label: 'Keyboard',\n        icon: <KeyboardIcon className='h-4 w-4' />,\n        component: <KeyboardSettings shortcuts={shortcuts} onShortcutChange={(id, shortcut) => console.info(`Shortcut ${id} changed to ${shortcut}`)} />\n      }]} />\n      </>;\n  }\n}",
              ...KeyboardSettingsSection.parameters?.docs?.source,
            },
          },
        }),
        (NotificationSettingsSection.parameters = {
          ...NotificationSettingsSection.parameters,
          docs: {
            ...NotificationSettingsSection.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    open: true,\n    onOpenChange: () => {}\n  },\n  render: () => {\n    const [open, setOpen] = useState(true);\n    const [enableNotifications, setEnableNotifications] = useState(true);\n    const notificationTypes = [{\n      id: 'sync',\n      label: 'Sync Status',\n      description: 'Notify when notes are synced',\n      enabled: true\n    }, {\n      id: 'updates',\n      label: 'App Updates',\n      description: 'Notify when updates are available',\n      enabled: true\n    }, {\n      id: 'reminders',\n      label: 'Note Reminders',\n      description: 'Notify for scheduled note reminders',\n      enabled: false\n    }, {\n      id: 'sharing',\n      label: 'Sharing Activity',\n      description: 'Notify when someone shares with you',\n      enabled: false\n    }];\n    return <>\n        <Button onClick={() => setOpen(true)}>\n          Open Notification Settings\n        </Button>\n        <SettingsPanel open={open} onOpenChange={setOpen} sections={[{\n        id: 'notifications',\n        label: 'Notifications',\n        icon: <BellIcon className='h-4 w-4' />,\n        component: <NotificationSettings enableNotifications={enableNotifications} onNotificationChange={setEnableNotifications} notificationTypes={notificationTypes} />\n      }]} />\n      </>;\n  }\n}",
              ...NotificationSettingsSection.parameters?.docs?.source,
            },
          },
        }),
        (NotableSettingsPanelStory.parameters = {
          ...NotableSettingsPanelStory.parameters,
          docs: {
            ...NotableSettingsPanelStory.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    open: true,\n    onOpenChange: () => {}\n  },\n  render: () => {\n    const [open, setOpen] = useState(false);\n    const [currentTheme, setCurrentTheme] = useState<'light' | 'dark' | 'system'>('system');\n    return <>\n        <div className='text-center space-y-4'>\n          <Button onClick={() => setOpen(true)}>Open Notable Settings</Button>\n          <p className='text-sm text-muted-foreground'>\n            Current theme: <strong>{currentTheme}</strong>\n          </p>\n        </div>\n        <NotableSettingsPanel open={open} onOpenChange={setOpen} currentTheme={currentTheme} onThemeChange={setCurrentTheme} onReset={() => console.info('Reset all settings')} />\n      </>;\n  }\n}",
              ...NotableSettingsPanelStory.parameters?.docs?.source,
            },
          },
        }),
        (InteractiveNavigation.parameters = {
          ...InteractiveNavigation.parameters,
          docs: {
            ...InteractiveNavigation.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    open: true,\n    onOpenChange: () => {}\n  },\n  render: () => <SettingsPanelDemo defaultOpen={true} sections={defaultSections} />,\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Wait for panel to open\n    await waitFor(() => {\n      expect(canvas.getByText('Settings')).toBeInTheDocument();\n    });\n\n    // Click Appearance section\n    const appearanceButton = canvas.getByText('Appearance');\n    await userEvent.click(appearanceButton);\n\n    // Check appearance content is shown\n    await expect(canvas.getByText('Theme')).toBeInTheDocument();\n\n    // Click Keyboard section\n    const keyboardButton = canvas.getByText('Keyboard');\n    await userEvent.click(keyboardButton);\n\n    // Check keyboard content is shown\n    await expect(canvas.getByText('Keyboard Shortcuts')).toBeInTheDocument();\n\n    // Click Notifications section\n    const notificationsButton = canvas.getByText('Notifications');\n    await userEvent.click(notificationsButton);\n\n    // Check notifications content is shown\n    await expect(canvas.getByText('Enable Notifications')).toBeInTheDocument();\n  }\n}",
              ...InteractiveNavigation.parameters?.docs?.source,
            },
          },
        }),
        (ThemeSelection.parameters = {
          ...ThemeSelection.parameters,
          docs: {
            ...ThemeSelection.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    open: true,\n    onOpenChange: () => {}\n  },\n  render: () => {\n    const [open, setOpen] = useState(true);\n    const [currentTheme, setCurrentTheme] = useState<'light' | 'dark' | 'system'>('system');\n    const sections: SettingsSection[] = [{\n      id: 'appearance',\n      label: 'Appearance',\n      icon: <PaletteIcon className='h-4 w-4' />,\n      component: <ThemeSettings currentTheme={currentTheme} onThemeChange={theme => {\n        setCurrentTheme(theme);\n        console.info(`Theme changed to: ${theme}`);\n      }} />\n    }];\n    return <>\n        <div className='text-center space-y-4'>\n          <Button onClick={() => setOpen(true)}>Open Settings</Button>\n          <p className='text-sm text-muted-foreground'>\n            Current theme: <strong>{currentTheme}</strong>\n          </p>\n        </div>\n        <SettingsPanel open={open} onOpenChange={setOpen} sections={sections} />\n      </>;\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Wait for panel\n    await waitFor(() => {\n      expect(canvas.getByText('Theme')).toBeInTheDocument();\n    });\n\n    // Click dark theme\n    const darkButton = canvas.getByText('Dark');\n    await userEvent.click(darkButton);\n\n    // Should update display\n    await expect(canvas.getByText('Current theme: dark')).toBeInTheDocument();\n\n    // Click light theme\n    const lightButton = canvas.getByText('Light');\n    await userEvent.click(lightButton);\n\n    // Should update display\n    await expect(canvas.getByText('Current theme: light')).toBeInTheDocument();\n  }\n}",
              ...ThemeSelection.parameters?.docs?.source,
            },
          },
        }),
        (ClosePanel.parameters = {
          ...ClosePanel.parameters,
          docs: {
            ...ClosePanel.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    open: true,\n    onOpenChange: () => {}\n  },\n  render: () => <SettingsPanelDemo defaultOpen={true} sections={defaultSections} />,\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Wait for panel\n    await waitFor(() => {\n      expect(canvas.getByText('Settings')).toBeInTheDocument();\n    });\n\n    // Find and click close button\n    const closeButton = canvas.getByRole('button', {\n      name: /close/i\n    });\n    await userEvent.click(closeButton);\n\n    // Panel should close\n    await waitFor(() => {\n      expect(canvas.queryByText('Settings')).not.toBeInTheDocument();\n    });\n  }\n}",
              ...ClosePanel.parameters?.docs?.source,
            },
          },
        }),
        (ScrollableContent.parameters = {
          ...ScrollableContent.parameters,
          docs: {
            ...ScrollableContent.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    open: true,\n    onOpenChange: () => {}\n  },\n  render: () => {\n    const manySections: SettingsSection[] = [...defaultSections, {\n      id: 'advanced',\n      label: 'Advanced',\n      icon: <MonitorIcon className='h-4 w-4' />,\n      component: <div className='space-y-6'>\n            <h3 className='text-lg font-semibold'>Advanced Settings</h3>\n            {Array.from({\n          length: 20\n        }, (_, i) => <div key={i} className='py-2 border-b'>\n                <div className='font-medium'>Setting {i + 1}</div>\n                <div className='text-sm text-muted-foreground'>\n                  Description for setting {i + 1}\n                </div>\n              </div>)}\n          </div>\n    }];\n    return <SettingsPanelDemo defaultOpen={true} sections={manySections} />;\n  }\n}",
              ...ScrollableContent.parameters?.docs?.source,
            },
          },
        }),
        (EmptyState.parameters = {
          ...EmptyState.parameters,
          docs: {
            ...EmptyState.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    open: true,\n    onOpenChange: () => {}\n  },\n  render: () => {\n    const [open, setOpen] = useState(true);\n    return <>\n        <Button onClick={() => setOpen(true)}>Open Empty Settings</Button>\n        <SettingsPanel open={open} onOpenChange={setOpen} sections={[]} />\n      </>;\n  }\n}',
              ...EmptyState.parameters?.docs?.source,
            },
          },
        }),
        (ResponsiveLayout.parameters = {
          ...ResponsiveLayout.parameters,
          docs: {
            ...ResponsiveLayout.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    open: true,\n    onOpenChange: () => {}\n  },\n  parameters: {\n    viewport: {\n      defaultViewport: 'mobile1'\n    }\n  },\n  render: () => <SettingsPanelDemo defaultOpen={true} sections={defaultSections} />\n}",
              ...ResponsiveLayout.parameters?.docs?.source,
            },
          },
        }))
    },
  },
])
